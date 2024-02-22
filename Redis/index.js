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


module.exports = { redis }