import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
    await prisma.post.create({
        data: {
            title: 'My third post',
            content: 'Hello World',
            published: true,
            author: {
                connect: {
                    id: 1
                }
            }
        }
    })
}

main()
    .then(async () => {
        await prisma.$disconnect()
        console.log("done with query")
    })
    .catch(async (e) => {
        console.error(e)
        process.exit(1)
    })