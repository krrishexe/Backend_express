import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
    watchHistory: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Video'
        }
    ],
    username: {
        type: String,
        required: true,
        unique: true,
        min:3,
        lowercase: true,
        trim: true, //AAge peeche ke saare spaces hata deta hai.
        index: true //if you want to make any field searchable.
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    fullName: {
        type: String,
        required: true,
        trim: true,
        index: true //for searching.
    },
    avatar: {
        type: String,  //cloudinary url
        required: true,
    },
    coverImage: {
        type: String,
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    },
    refreshToken: {
        type: String,
    },
    coverImage: {
        type: String,
        required: true
    },
}, {
    timestamps: true
})

//pre is an inbuilt method of schema , as the name sugest , before saving the data into db , run this piece of code.

// pre is a middleware of mongoose
userSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 8)
        next()
    }
})
// .methods are methods of mongoose schema
userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password)
}

userSchema.methods.generateAccessToken = function () {
    return jwt.sign(
        {
            _id: this._id,
            username: this.username,
            email: this.email,
            fullName: this.fullName
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )   //this sign method generate a token.
    //it requires 3 things, FIRST :- payload data, SECOND :- ACCESS_TOKEN_SECRET , THIRD :- ACCESS_TOKEN_EXPIRY.
}
userSchema.methods.generateRefreshToken = function () {
    return jwt.sign(
        {
            _id: this._id,
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}


export const User = new mongoose.model(`User`, userSchema)