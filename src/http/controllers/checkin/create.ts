
import {z} from'zod'
import { FastifyRequest,FastifyReply } from "fastify";
import { makeCheckInUseCase } from '@/use-cases/factories/make-check-In-UseCase';




export async function create(request:FastifyRequest,reply:FastifyReply) {

    const createCheckInParams = z.object({
        gymId: z.string().uuid()
    })

    const createCheckInBodySchema= z.object({
        latitude:z.coerce.number().refine(value=>{
            return Math.abs(value)<=90
        }),
    
        longitude:z.coerce.number().refine(value=>{
            return Math.abs(value)<=180
        })
       
    })

    //refine() usado para fzaer uma validacao que nao e nativa do zod

    //abs ou absolute usado para transformar um numero negativo em positivo

    
    const {latitude,longitude} =createCheckInBodySchema.parse(request.body)
    const {gymId} = createCheckInParams.parse(request.params)

    const checkInUseCase = makeCheckInUseCase()
        
     await  checkInUseCase.execute({
        gymId,
        userLatitude:latitude,
        userLongitude:longitude,
        userId: request.user.sub
         

     })

     return  reply.status(201).send()


   
}


