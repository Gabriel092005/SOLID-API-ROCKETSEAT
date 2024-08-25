
import {z} from'zod'
import { FastifyRequest,FastifyReply } from "fastify";
import { PrismaUserRepository } from '@/repositories/prisma/prisma-users-repository';
import { RegisterUseCase } from '@/use-cases/Register';



export async function Register(request:FastifyRequest,reply:FastifyReply) {

    const RegisterBodySchema = z.object({
       nome : z.string(),
       email : z.string().email(),
       password_hash: z.string().min(6)
    })

    
    const {nome,email,password_hash} = RegisterBodySchema.parse(request.body)
   try {

     const usersRepository = new PrismaUserRepository()
     const registerUseCase = new RegisterUseCase(usersRepository)

     await registerUseCase.Execute({
        nome,
        email,
        password_hash
     })

    

   }
    catch (error) { 

    //  return reply.status(409).send()
    
   }

}


