import{PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

const getAll = async () =>{
return await prisma.user.findMany()
}

const getByid = async () =>{
    return await prisma.user.findMany()
    }