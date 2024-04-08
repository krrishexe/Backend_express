import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
    // let res = await prisma.user.findMany({
    //     where:{
    //         email:'one@one.com'
    //     }
    // })
    // console.log(res)
    const user = await prisma.user.findUnique({
        where: {
            email: 'one@one.com'
    }})
    console.log(user)
}
main().then(async () => {
    await prisma.$disconnect()
    console.log("done with query")
}).catch(async (e) => {console.log(e);process.exit(1);})