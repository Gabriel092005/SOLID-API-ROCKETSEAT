
import {z} from'zod'
import { FastifyRequest,FastifyReply } from "fastify";
import { invalidCredentialsError } from '@/use-cases/erros/invalid-credentials-error';
import { makeAuthenticateUserCase } from '@/use-cases/factories/makeAuthenticateUseCase';



export async function Authenticate(request:FastifyRequest,reply:FastifyReply) {

    const AuthenticateBodySchema = z.object({
       email : z.string().email(),
       password_hash: z.string().min(6)
    })

    

    
    const {email,password_hash} = AuthenticateBodySchema.parse(request.body)
   try {

     const authenticateUseCase =  makeAuthenticateUserCase()
     const {user } =  await authenticateUseCase.execute({
        email
     })
     const token = await reply.jwtSign(
      {
         role : user.role
      },
      {
         sign:{
            sub :user.id
         },         
      })
   const refreshToken = await reply.jwtSign(
      {
         role : user.role 

      },

      {
         sign:{
            sub:user.id,
            expiresIn:'7d',
         }
      }
   )
      
      
      return reply
      .setCookie('refreshToken',refreshToken,{
         path : '/',
         secure:true,
         httpOnly:true
     })
      .status(200)
      .send({token})

   }
    catch (error) { 

      // se o erro for uma instancia da class UserAlreadyExists
      if( error instanceof invalidCredentialsError){

         return reply.status(400).send({message : error.message })
      }



     throw error

       
   }

   
}


