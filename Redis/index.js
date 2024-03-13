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

// async function main() {
//     // await redis.lpush('messages',"Hello")
//     // await redis.lpush('messages',"world")
//     // await redis.lpop('messages')                                // removes the first element from list
//     // await redis.rpop('messages')                                // removes the last element from list
//     // await redis.rpush('messages',"bye bye")
//     // await redis.rpush('messages',"world")
//     await redis.blpop('messages', 20)                            // blocks the client until a new message arrives
//     // await redis.del('messages')
//     const result = await redis.lrange('messages', 0, -1)        // returns all the elements in the list
//     //console.log(await redis.llen('messages'))               // returns the length of list
//     console.log(result)
// }
// main()


// Sets in Redis:
// async function main() {
//     await redis.sadd('games', 'cricket')
//     await redis.sadd('games', 'football')
//     await redis.sadd('games', 'volleyball')
//     // await redis.sadd('games','volleyball')           // it will not add as set contains unique elements only.
//     //await redis.srem('games','volleyball')            // removes volleyball from the set
//     // const isMember = await redis.sismember('games','gully cricket')          // checks if the mentioned game is present in the set. returns 1 if present else 0.
//     // console.log(isMember)
//     //await redis.spop("games")                          // removes a random element from the set
//     // sinter method returns the common elements between two sets.
//     const result = await redis.smembers('games')
//     console.log(result)
// }
// main()

// Sorted Sets in Redis:
// async function main() {
//     // await redis.zadd('ranks', 1, 'krish')       // zadd is used to add elements in sorted set. these are just like priority queues.
//     // await redis.zadd('ranks', 2, 'helo')    
//     // await redis.zadd('ranks', 1, 'aunty')
//     //await redis.zincrby('ranks', 1, 'krish')       // increments the score of krish by 1
//     //await redis.zrank('ranks', 'krish')            // returns the rank of krish in the sorted set


//     const result = await redis.zrange('ranks', 0, -1)        // returns all the elements in the sorted set in ascending order.
//     //const result = await redis.zrevrange('ranks', 0, -1)        // returns all the elements in the sorted set in descending order.
//     console.log(result)
// }
// main()



// Streams in Redis:      apache kafka is used to dump data in large scale , same is redis streams.              // used to dump the data in the redis streams. used in fields where fast data processing is there , like storing sensor data,user clicks.
async function main() {


}
main()











module.exports = { redis }