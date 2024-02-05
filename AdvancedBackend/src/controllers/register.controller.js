import { asyncHandler } from "../utils/asyncHandler.js"
import { User } from "../models/user.model.js"
import { ApiError } from '../utils/ApiError.js'
import { uploadOnCloudinary } from "../utils/Cloudinary.js"

const registerUser = asyncHandler(async (req, res) => {

    const { fullName, email, username, password } = req.body;
                                                                                        
    if ([fullName, email, username, password].some((field) => field?.trim() === '')) {  // new method to check if all the fields are valid.(using some method)
        return res.json({ msg: "All the fields are required", status: 404 })
    }
    const usernameCheck = await User.findOne({ $or: [{ username }, { email }] })      // $or => ek sath check kar lega ki pehle se koi email or username hai kya DB me.

    if (usernameCheck) {
        return res.json({ msg: "Username or Email already exists", status: 409 })
    }

    const avatarPath = req.files?.avatar[0]?.path                                   
    const coverImagePath = req.files?.coverImage[0]?.path

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
        username: username.toLowerCase,
        password
    })

    const createdUser = await User.findById(user._id).select("-password -refreshToken")

        console.log(req.files)
    res.status(200).json({
        message: "success"
    })
})

export { registerUser }