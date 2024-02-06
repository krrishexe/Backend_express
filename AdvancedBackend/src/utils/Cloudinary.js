import {v2 as cloudinary} from 'cloudinary';
import fs from 'fs'
          
cloudinary.config({ 
  cloud_name:process.env.CLOUDINARY_CLOUD_NAME , 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET 
});

// localfilepath = locally (server pe jaha) file stored hai uska path. 
export const uploadOnCloudinary = async (localfilepath) =>{
    try {
        if(!localfilepath) return null
        const response = await cloudinary.uploader.upload(localfilepath,{
            resource_type:'auto'
        })
        // console.log("File uploaded successfully!!" + response.url)
        fs.unlinkSync(localfilepath)
        // console.log(response)
        return response


    } catch (error) {
        fs.unlinkSync(localfilepath) // delete the locally saved temp file just in case the upload opertaion on cloudinary is failed.
        console.log("Error uploading file : "+error)
        return null

    }
}

