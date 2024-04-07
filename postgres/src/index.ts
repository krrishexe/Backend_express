import {connectDB} from "./connect"

const createTodoTableQuery = `
    create table todos(
        id serial primary key,
        text varchar(255) not null,
        description text not null,
        email varchar(255) unique not null,
        password varchar(255) not null
    )
`

const insertqueryIntoTable = `
    insert into todos(text,description,email,password)
    values
    ('good to go','I am ready to good to go','three@three.com','1212')
`
const createTable = async () =>{
    try {
        console.log("helloo")
        const client = await connectDB()
        await client.query(createTodoTableQuery)
        console.log("Created new table")
    } catch (error) {
        console.log(error)
    }
}

const insertIntoTable = async () =>{
    try {
        const client = await connectDB()
        const res = await client.query(insertqueryIntoTable)
        console.log("Data added to the db",res)
    } catch (error) {
        console.log(error)
    }
}
insertIntoTable();