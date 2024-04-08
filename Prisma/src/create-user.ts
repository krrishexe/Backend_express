import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // ... you will write your Prisma Client queries here
  await prisma.user.create({
    data:{
        email:'one@one.com',
        name:'one'
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
    await prisma.$disconnect()
    process.exit(1)
  })