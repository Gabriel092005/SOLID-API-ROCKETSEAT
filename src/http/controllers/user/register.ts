
import { z} from'zod'
import { FastifyRequest,FastifyReply } from "fastify";
import { makeRegisterUserCase } from '@/use-cases/factories/makeRegisterUserUseCase';
import { UserAreadyExistsError } from '@/use-cases/erros/user-already-Exists';



export async function Register(request:FastifyRequest,reply:FastifyReply) {

    const RegisterBodySchema = z.object({
       nome : z.string(),
       email : z.string().email(),
       password_hash: z.string().min(6),
       number:z.string()
      
    })
    console.log(request.body)
   const {nome,email,password_hash,number} = RegisterBodySchema.parse(request.body)
   try {

        const registerUseCase = makeRegisterUserCase()
        
     await registerUseCase.Execute({
        nome,
        email,
        password_hash,
        number
      
        
     })
      return reply.status(201).send({message:'User Created'})  
   }
    catch (error) { 

      // se o erro for uma instancia da class UserAlreadyExists
      if( error instanceof UserAreadyExistsError){
         return reply.status(409).send({message : error.message })
      }
      throw error
       
   }
   
}


