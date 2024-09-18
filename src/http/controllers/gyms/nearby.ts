import {z} from'zod'
import { FastifyRequest,FastifyReply } from "fastify";
import { makeFetchNearByGymsUseCase } from '@/use-cases/factories/make-nearBy-gyms-use-case';
export async function nearBy(request:FastifyRequest,reply:FastifyReply) {

    const nearByGymsQuerySchema = z.object({
            latitude:z.number().refine(value=>{
                return Math.abs(value)<=90
            }),
        
            longitude:z.number().refine(value=>{
                return Math.abs(value)<=180
            })
    })    
    const {latitude,longitude} = nearByGymsQuerySchema.parse(request.query)

    const fetchNearByGymUseCase =  makeFetchNearByGymsUseCase()        
    const  {gyms}  = await fetchNearByGymUseCase.Execute ({
       userLatitude :latitude,
       userLongitude:longitude
       

     })

     return  reply.status(201).send({
        gyms
     })
}


