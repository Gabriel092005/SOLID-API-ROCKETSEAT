
import {z} from'zod'
import { FastifyRequest,FastifyReply } from "fastify";
import { makeFetchUserCheckInHistoryUseCase } from '@/use-cases/factories/make-fetch-user-checkin-history-use-Case';

export async function history(request:FastifyRequest,reply:FastifyReply) {

    const  checkinHistoryQuerySchema= z.object({
      page:z.coerce.number().min(1).default(1)
    })

    const {page} = checkinHistoryQuerySchema.parse(request.body)

    const FetchUserCheckInHistoryUseCase = makeFetchUserCheckInHistoryUseCase()
   
        
  const {checkIns} = await FetchUserCheckInHistoryUseCase.execute({
       page,
       userId : request.user.sub
     })

     return  reply.status(201).send({
        checkIns
     })


   
}


