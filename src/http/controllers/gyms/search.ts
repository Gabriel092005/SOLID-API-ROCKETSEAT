
import {z} from'zod'
import { FastifyRequest,FastifyReply } from "fastify";
import { makeSearchGymssUseCase } from '@/use-cases/factories/make-search-gyms-use-case';




export async function Search(request:FastifyRequest,reply:FastifyReply) {

 

    try {

        const searchGymsQuerySchema = z.object({
            q:z.string(),
            page:z.coerce.number().min(1).default(1)
          })

             
    const {q,page} = searchGymsQuerySchema.parse(request.body)
    
    

    const searchGymsUseCase = makeSearchGymssUseCase()
        
   const {gyms} = await  searchGymsUseCase.Execute({
       query :q,
       page
       

     })

     return  reply.status(201).send({
        gyms
     })
        
    } catch (error) {

        return reply.status(400).send({message : error})
        
    }

    

    //refine() usado para fzaer uma validacao que nao e nativa do zod
    
    //abs ou absolute usado para transformar um numero negativo em positivo
 


   
}


