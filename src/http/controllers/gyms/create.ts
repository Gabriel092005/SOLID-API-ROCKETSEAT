
import {z} from'zod'
import { FastifyRequest,FastifyReply } from "fastify";
import { makeCreateGymsUseCase } from '@/use-cases/factories/make-create-gym-Use-case';
export async function create(request:FastifyRequest,reply:FastifyReply) {

    const createBodySchema = z.object({
       title : z.string(),
       description : z.string().nullable(),
       phone:z.coerce.string().nullable(),
       latitude:z.coerce.number().refine(value=>{
        return Math.abs(value)<=90
       }),
        longitude:z.number().refine(value=>{
        return Math.abs(value)<=180
       })
    })


    //refine() usado para fzaer uma validacao que nao e nativa do zod
    //abs ou absolute usado para transformar um numero negativo em 
    
 

    const {title,latitude,longitude,phone,description} = createBodySchema.parse(request.body)
    const createUseCase = makeCreateGymsUseCase()

    console.log(title,latitude,longitude,phone)
        
      await  createUseCase.Execute({
      
       title,
       description,
       latitude,
       longitude,
       phone

     })

     return  reply.status(201).send()   
}


