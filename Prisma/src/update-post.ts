import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main(){
    await prisma.post.update({
        where: { id: 1 },
        data: {
                 published: true ,content: "This is the updated content of the post",title: "This is the updated title of the post"
        },
    });
    }

main()
.then(async()=>{
    await prisma.$disconnect();
    console.log("done with the query")
})
.catch((e)=>{
    console.log(e)
    process.exit(1)
})