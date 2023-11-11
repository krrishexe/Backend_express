// A wrapper file , cz hume db se baat to karni hi hai , to kyu na ek wrapper file bana lo uske andar vo function daal do.


const asyncHandler =  (fn) => async (req,res,next) =>{
    try {
        await fn(req,res,next);

    } catch (error) {
        res.status(error.code || 500).json({
            success:false,
            message:error.message
        })
    }
}

export {asyncHandler}