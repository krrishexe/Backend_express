import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { registerUser } from './controllers/register.controller.js';

const app = express();

app.use(cors({                              // Middleware for cors to connect b/w backend and frontend.
    origin:'*',         // We can give options in these brackets. (although they are not necessary)
    credentials:true
}));

app.use(express.json({limit:'12kb'}))       // Middleware for express to deal with the JSON data or JSON files coming from client side or db side.

app.use(express.urlencoded({extended:true , limit:'12kb'})) // Middleware for express to deal with data coming in url form , it encodes the url data to readable expres format ex:- 'krish yadav' --> 'krish%20yadav'

app.use(express.static('public'))           // Middleware for express to store static files such as pdf , png , mp3 etc. int the public folder.

app.use(cookieParser())                     // to configure CRUD operations on the cookies of users browser.

// Importing Routes.
import userRouter from './routes/user.routes.js';

app.use('/api/v1/users',userRouter)

export {app}