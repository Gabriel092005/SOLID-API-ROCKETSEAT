import { makeDeleteSchoolUseCase } from "@/use-cases/factories/makeDeleteSchool";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function  deletar(request:FastifyRequest,reply:FastifyReply){
    const deleteParamsSchema  = z.object({
        id: z.string().min(25)
    })
     
    const {id} = deleteParamsSchema.parse(request.params)

    try {
        const DeleteSchoolUseCase = makeDeleteSchoolUseCase()
       await DeleteSchoolUseCase.execute({
            id
        })
    
   
    } catch (error:any) {

        return reply.status(404).send(error)
        
    }

    
}