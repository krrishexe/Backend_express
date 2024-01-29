import {asyncHandler} from "../utils/asyncHandler.js"
import {User} from "../models/user.model.js"

const registerUser = asyncHandler( async (req,res) => {
    const data = req.body;
    const username = data.username;
    const saveUser = User.create()



    console.log(data)
    res.status(200).json({
        message:"success"
    })
})

export {registerUser}