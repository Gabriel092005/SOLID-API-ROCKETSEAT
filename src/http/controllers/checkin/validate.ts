
import {z} from'zod'
import { FastifyRequest,FastifyReply } from "fastify";
import { makeCheckInUseCase } from '@/use-cases/factories/make-check-In-UseCase';
import { makeValidateCheckInUseCase } from '@/use-cases/factories/make-validate-checkin-use-case';




export async function validate(request:FastifyRequest,reply:FastifyReply) {

    const validadteCheckInParamsSchema = z.object({
        checkInId : z.string().uuid(),
    })



    //refine() usado para fzaer uma validacao que nao e nativa do zod

    //abs ou absolute usado para transformar um numero negativo em positivo

    
   
    const {checkInId} = validadteCheckInParamsSchema.parse(request.params)

    const validadteCheckInUseCase = makeValidateCheckInUseCase()
        
       await  validadteCheckInUseCase.execute({
        checkInId  
     })

     return  reply.status(204).send()


   
}


