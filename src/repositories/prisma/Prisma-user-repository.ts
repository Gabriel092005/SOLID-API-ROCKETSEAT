import { Prisma, User} from "@prisma/client";
import { usersRepository } from "../users-repository";
import { prisma } from "@/lib/prisma";



export class PrismaUserRepository implements usersRepository {
  async  findById(id: string){
        const user = await prisma.user.findUnique({
            where:{
                id:id
            }
        })
        return user
    }
   async DeleteById(id: string){

       const  user = await prisma.user.delete({
            where:{
                id : id
            }
        })

        return  user

     
    }



  
    async findByEmail(email: string) {
        const user = await prisma.user.findUnique({
           where: {
               email
           }
       })
      return user
   }
   
 
   async create(data : Prisma.UserCreateInput){
    const user = await prisma.user.create({
            data,  

 })

 return user

   }
}