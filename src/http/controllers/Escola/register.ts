
import { makeDeleteSchoolUseCase } from "@/use-cases/factories/makeDeleteSchool";
import { makeRegisterSchoolCase } from "@/use-cases/factories/makeRegisterSchoolUseCase";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function  register(request:FastifyRequest,reply:FastifyReply){
    const registerBodySchema  = z.object({
        name: z.string().min(5),
        email : z.string().email(),
        adress: z.string(),
        Description: z.string()
    })
     
    const {name, email,adress,Description} = registerBodySchema.parse(request.body)

    try {
        const RegisterSchoolUseCase = makeRegisterSchoolCase()
       await RegisterSchoolUseCase.execute({
            name,
            email,
            adress,
            Description
        })
    
   
    } catch (error:any) {

        return reply.status(404).send(error)
        
    }

    
}