import { asyncHandler } from "../utils/asyncHandler.js"
import { User } from "../models/user.model.js"
import { ApiError } from '../utils/ApiError.js'
import { deleteFromCloudinary, uploadOnCloudinary } from "../utils/Cloudinary.js"
import { ApiResponse } from "../utils/ApiResponse.js"
import jwt from "jsonwebtoken"


const generateAccessAndRefreshToken = async (userId) => {
    try {
        const user = await User.findById(userId)
        const accessToken = user.generateAccessToken()
        const refreshToken = user.generateRefreshToken()

        user.refreshToken = refreshToken;
        await user.save({ validateBeforeSave: false })

        return { accessToken, refreshToken }
    } catch (error) {
        throw new error
        console.log("Something went wrong while generating access and referesh token")
    }
}

const registerUser = asyncHandler(async (req, res) => {

    const { fullName, email, username, password } = req.body;

    if ([fullName, email, username, password].some((field) => field?.trim() === '')) {  // new method to check if all the fields are valid.(using some method)
        return res.json({ msg: "All the fields are required", status: 404 })
    }
    const usernameCheck = await User.findOne({ $or: [{ username }, { email }] })      // $or => ek sath check kar lega ki pehle se koi email or username hai kya DB me.

    if (usernameCheck) {
        return res.json({ msg: "Username or Email already exists", status: 409 })
    }

    const avatarPath = req.files?.avatar[0]?.path                                    // req.files hume sari files deta hai jo user ne upload kari hai.      
    // const coverImagePath = req.files?.coverImage[0]?.path
    let coverImagePath;
    if (req.files && Array.isArray(req.files.coverImage) && req.files.coverImage.length > 0) {
        coverImagePath = req.files.coverImage[0].path
    }

    if (!avatarPath) {
        return res.json({ msg: "Avatar file is required", status: 400 })
    }
    const avatar = await uploadOnCloudinary(avatarPath)
    const coverImage = await uploadOnCloudinary(coverImagePath)

    if (!avatar) {
        return res.json({ msg: "Avatar is a required field", status: 400 })
    }

    const user = await User.create({
        fullName,
        avatar: avatar.url,
        coverImage: coverImage?.url || '',
        email,
        username: username.toLowerCase(),
        password
    })

    const createdUser = await User.findById(user._id).select("-password -refreshToken")  // created user me se hum password or refersh token ko hata rahe hai. kyuki vo frontend valo ko vapas bhi to bhejna hai.

    res.status(201).json(
        new ApiResponse(200, createdUser, "User registered successfully.")
    )
})

const loginUser = asyncHandler(async (req, res) => {
    const { email, username, password } = req.body;

    if (!username) {
        return res.json({ msg: "Please enter username or email", status: 404 })
    }
    const user = await User.findOne({ $or: [{ username }, { email }] })
    if (!user) {
        return res.json({ msg: "User does not exist", status: 404 })
    }

    const isPassValid = await user.isPasswordCorrect(password)      // here we are using small 'user' instead of 'User' bcz User is a method of mongoDB and the method that we have created (isPasswordCorrect) is just an instance of 'user'
    if (!isPassValid) {
        return res.json({ msg: "Incorrect password", status: 401 })
    }

    const { refreshToken, accessToken } = await generateAccessAndRefreshToken(user._id)

    const loggedInUser = await User.findById(user._id).select("-password -refreshToken")              // dubara same req kyu maari? -> bcz generateAccessAndRefreshToken method ko call krne ke baad jo hume reftoken or acctoken mile hai upar vale user object me nahi hai.

    const cookieOptions = {
        httpOnly: true,
        secure: true
    }
    return res
        .status(200)
        .cookie("accessToken", accessToken, cookieOptions)
        .cookie("refreshToken", refreshToken, cookieOptions)
        .json({ msg: "user login successfully", status: 200, loggedInUser })
})

const logoutUser = asyncHandler(async (req, res) => {

    await User.findByIdAndUpdate(
        req.user._id,
        {
            $set: {
                refreshToken: undefined
            }
        },
        {
            new: true
        }
    )
    const cookieOptions = {
        httpOnly: true,
        secure: true
    }

    return res
        .status(200)
        .clearCookie("accessToken", cookieOptions)
        .clearCookie("refreshToken", cookieOptions)
        .json({ msg: "User logged out successfully", status: 200 })

})

const refreshAccessToken = asyncHandler(async (req, res) => {
    const incomingRefreshToken = req.cookie.refreshToken || req.body.refreshToken;
    if (!incomingRefreshToken) {
        throw new ApiError(401, "Unauthorised Request")
    }
    try {
        const decodedToken = jwt.verify(incomingRefreshToken, process.env.REFRESH_TOKEN_SECRET)
        const user = await User.findById(decodedToken?._id)
        if (!user) {
            throw new ApiError(401, "Invalid refresh token")
        }
        if (decodedToken !== user?.refreshToken) {
            throw new ApiError(401, "Refresh token is expired or used")
        }

        const cookieOptions = {
            httpOnly: true,
            secure: true
        }

        const { newRefreshToken, accessToken } = await generateRefreshToken(user?._id)
        return res.status(200)
            .cookie("accessToken", accessToken, cookieOptions)
            .cookie("refreshToken", refreshToken, cookieOptions)
            .json({ msg: "Refresh token updated", status: "200", accessToken, refreshToken: newRefreshToken })
    } catch (error) {
        throw new ApiError(404, "")
    }
})

const changeCurrentPassword = asyncHandler(async (req, res) => {
    const { oldPassword, newPassword } = req.body;
    //obviously user password jabh change kar paaega jab vo logged in hai.
    const user = await User.findById(req.user._id)
    const isPassCorrect = await user.isPasswordCorrect(oldPassword)
    if (!isPassCorrect) {
        return res.json({ msg: "Please enter the correct password", status: 404 })
    }
    user.password = newPassword
    await user.save({ validateBeforeSave: false })
    return res
        .status(200)
        .json({ msg: "password changed successfully", status: 200 })
})

const getCurrentUser = asyncHandler(async (req, res) => {
    return res.status(200).json({ msg: "User details fetched successfully", status: 200, user: req.user })
})

const updateUserDetails = asyncHandler(async (req, res) => {
    const { fullName, email } = req.body;
    if (!(fullName || email)) {
        return res.json({ msg: "Please enter the details to update", status: 404 })
    }

    const user = await User.findByIdAndUpdate(req.user?._id, { $set: { fullName, email } }, { new: true }).select("-password")

    return res.status(200)
        .json({ msg: "User details updated successfully", status: 200, user })
})


const updateUserAvatar = asyncHandler(async (req, res) => {
    console.log(req.file)
    const avatarPath = req.file?.path
    console.log("avatarPath" + avatarPath)
    if (!avatarPath) {
        return res.json({ msg: "Avatar file is required", status: 400 })
    }
    const avatar = await uploadOnCloudinary(avatarPath)
    if (!avatar.url) {
        return res.json({ msg: "Error while Uploading on Cloudinary ", status: 400 })
    }

    const user = await User.findByIdAndUpdate(req.user._id, { $set: { avatar: avatar.url } }, { new: true }).select("-password")
    deleteFromCloudinary(avatar.public_id)
    return res.status(200).json({ msg: "Avatar updated successfully", status: 200, user })

})

const updateCoverPhoto = asyncHandler(async (req, res) => {
    const coverImgPath = req.file?.path
    if (!coverImgPath) {
        return res.json({ msg: "Cover img file is required", status: 400 })
    }
    const coverImg = await uploadOnCloudinary(coverImgPath)
    if (!coverImg.url) {
        return res.json({ msg: "Error while Uploading on Cloudinary ", status: 400 })
    }

    const user = await User.findByIdAndUpdate(req.user._id, { $set: { coverImage: coverImg.url } }, { new: true }).select("-password")
    return res.status(200).json({ msg: "Cover Image updated successfully", status: 200, user })

})

const getUserChannelProfile = asyncHandler(async (req, res) => {
    const { username } = req.params
    if (!username?.trim()) {
        return res.json({ msg: "username invalid", status: 404 })
    }
    const channel = await User.aggregate([
        {
            $match: { username }
        },
        {
            $lookup: {
                from: "subscriptions",
                localField: "_id",
                foreignField: "channel",
                as: "subscribers"
            }
        },
        {
            $lookup: {
                from: "subscriptions",
                localField: "_id",
                foreignField: "subscriber",
                as: "subscribedTo"
            }
        },
        {
            $addfields: {
                subscriberCount: { $size: "$subscribers" },
                channelSubscribedToCount: { $size: "$subscribedTo" },
                isSubscribed: {
                    $cond: {
                        if: {
                            $in: [req.user?._id, "$subscribers.subscriber"]
                        },
                        then: true,
                        else: false
                    }
                }

            }
        },
        {
            $project: {
                fullName: 1,
                username: 1,
                avatar: 1,
                subscriberCount: 1,
                channelSubscribedToCount: 1,
                isSubscribed: 1,
                coverImage: 1,
                email:1
            }
        }
    ])

    console.log(channel)

    if (!channel?.length) {
        return res.json({ msg: "Channel does not exist", status: 404 })
    }
    return res.json({ msg: "Channel details fetched successfully", status: 200, channel: channel[0] })
}


export { registerUser, loginUser, logoutUser, refreshAccessToken, changeCurrentPassword, getCurrentUser, updateUserDetails, updateUserAvatar, updateCoverPhoto, getUserChannelProfile }