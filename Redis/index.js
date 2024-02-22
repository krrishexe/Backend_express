const { Redis } = require('ioredis');
const redis = new Redis();


// STRINGS IN REDIS:
// async function main() {
//     // const result = await redis.get('name:4');
//     // await redis.set("msg:3","Hello World")
//     //await redis.set("msg:3","Hello World","NX");    // nx = agar vo pehle se vaha nahi hai to set karo.
//     //await redis.expire('msg:3', 10);    // expire msg:3 in 10 seconds
//     await redis.del('msg:3')    // delete msg:3
//     const result = await redis.get('msg:3')
//     console.log(result);
// }
// main()

// Lists in Redis:              
// lists in redis can act as both queues and stacks.
// to use it as queue, use lpush and rpop >>> [1,2,3,4,5]
// to use it as stack, use lpush and lpop >>> [1,2,3,4,5].

async function main() {
    // await redis.lpush('messages',"Hello")
    // await redis.lpush('messages',"world")
    // await redis.lpop('messages')                                // removes the first element from list
    // await redis.rpop('messages')                                // removes the last element from list
    // await redis.rpush('messages',"bye bye")
    // await redis.rpush('messages',"world")
    await redis.blpop('messages', 20)                            // blocks the client until a new message arrives
    // await redis.del('messages')
    const result = await redis.lrange('messages', 0, -1)        // returns all the elements in the list
    //console.log(await redis.llen('messages'))               // returns the length of list
    console.log(result)
}
main()
module.exports = { redis }