import { connectDB } from "./connect";

const getUserQuery = `
    select * from todos where email = $1;
`


const getUser = async (email:string) =>{
    try {
        const client = await connectDB()
        const values = [email];
        const result = await client.query(getUserQuery,values)

        if(result.rows.length > 0){
            console.log("user found : ",result.rows[0])
        }else{
            console.log("No user with email "+ email + "exisits")
        }


    } catch (error) {
        console.log(error)
    }
}
getUser('one@one.com')