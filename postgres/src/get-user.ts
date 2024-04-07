import { connectDB } from "./connect";

const getUserQuery = `
    select * from todos where email = $1;
`


const getUser = async () =>{
    try {
        
    } catch (error) {
        console.log(error)
    }
}
getUser()