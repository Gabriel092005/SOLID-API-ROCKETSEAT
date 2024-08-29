
import { prisma } from "@/lib/prisma"
import { Prisma, User} from "@prisma/client"
import { usersRepository } from "../users-repository"

export class PrismaUserRepository implements usersRepository{
    findById(id: string): Promise<User | null> {
        throw new Error("Method not implemented.")
    }
  
    async findByEmail(email: string) {
         const user = await prisma.user.findUnique({
            where: {
                email
            }
        })
       return user
    }
    
  
    async Create(data : Prisma.UserCreateInput){
     const user = await prisma.user.create({
             data,  

  })

  return user

    }
}