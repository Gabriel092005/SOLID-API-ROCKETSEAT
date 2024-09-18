
import {z} from'zod'
import { FastifyRequest,FastifyReply } from "fastify";
import { makeGetUserMetricsUseCase } from '@/use-cases/factories/make-get-user-metrics-use-case';

export async function metrics(request:FastifyRequest,reply:FastifyReply) {
    
  const getUserMetricsUseCase  = makeGetUserMetricsUseCase()        
  const {checkInsCount} = await getUserMetricsUseCase.execute({
       userId : request.user.sub
     })

     return  reply.status(201).send({
        checkInsCount
     })


   
}


