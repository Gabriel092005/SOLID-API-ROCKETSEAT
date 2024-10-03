
import { makeAuthenticateUseCase } from "@/use-cases/factories/makeAuthenticateUseCase";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";


export async function  authenticate(request:FastifyRequest,reply:FastifyReply){
    const authenticateBodySchema  = z.object({
        email : z.string().email(),
        password_hash: z.string(),
    })
    const {email,password_hash} = authenticateBodySchema.parse(request.body)
    try {
        const authenticateUseCase = makeAuthenticateUseCase()
        const {user} = await authenticateUseCase.execute({
            email,
            password_hash
        })
        const token = await reply.jwtSign({
            role : user.role
        },
        {
             sub : user.id

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
   
        } catch (error)
         {
        
         }

    
}