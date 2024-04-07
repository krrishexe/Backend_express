import { Client } from "pg";

export const connectDB = async () =>{
    const client = new Client({
        host: 'localhost',
        user: 'postgres',
        database: 'postgres',
        password: '1212',
        port: 5432,
        // connectionString:'postgres://evlkdrse:zxOVfOc3-Jst1PqviqwaJy50lGiuyn8d@manny.db.elephantsql.com/evlkdrse'

    })
    await client.connect()
    return client
}

