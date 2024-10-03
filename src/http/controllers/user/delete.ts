
import { makeDeleteUseCase } from "@/use-cases/factories/makeDeleteUserUseCase";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";


export async function  Delete(request:FastifyRequest,reply:FastifyReply){
    const DeleteBodySchema  = z.object({
        id: z.string(),
    })
     
    const { id } = DeleteBodySchema.parse(request.body)

    try {
        const DeleteUseCase =  makeDeleteUseCase()
        DeleteUseCase.execute({
            id
        })
        
        
     }
      catch (error) {
        
    }

    
}