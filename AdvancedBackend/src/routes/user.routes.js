import { Router } from "express";
import { registerUser,loginUser, logoutUser, refreshAccessToken,updateUserAvatar } from "../controllers/register.controller.js";
import {upload} from "../middlewares/multer.js"
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router()

// router.route('/register').post(registerUser)     // before it was like this but humne controller se pehle ek middleware laga diya. 
                                                    // ki contoller me jaane se pehle mujhse (upload middleware se) milke jaana. 
                                                    // upload middleware files upload karne ke liye hai.

router.route('/register').post(
    upload.fields([                                 // upload.fields([]) lets you upload multiple files ek sath.
        {
            name:'avatar',                          // here we are uploading avatar image 
            maxCount:1
        },
        {
            name:'coverImage',                      // here we are uploading coverImage.
            maxCount:1
        }
    ]),
    registerUser
)

router.route('/login').post(loginUser)

// secured routes

router.route('/logout').post( verifyJWT, logoutUser)
router.route('/refreshToken').post(refreshAccessToken)
router.route('/updateavatar').post(updateUserAvatar)

export default router;