const Todo = require('../models/todo.model')


module.exports.addData = async (req,res,next) => {
    try {
        const {name,title,description,image} = req.body;
        if(!name || !title || !description ){
            return res.status(404).send({message:"please provide neccessary details"})
        }
        const addedData = await Todo.create({
            name,
            title,
            description,
            image
        })
        if(addedData){
            console.log(addedData)
            return res.status(200).send({message:"Data added successfully",addedData})
        }
        return res.status(404).send({message:"failed to add data"})

    } catch (error) {
        console.log("Error in Home controller : " + error.message)
        next(error)
    }
}


// {
//     "name":"krish",
//     "title":"Hello world!!",
//     "description":"This is krish ..."
// }