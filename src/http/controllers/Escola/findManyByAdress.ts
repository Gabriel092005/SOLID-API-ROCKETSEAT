import { resourceDoesNotExistsError } from "@/use-cases/erros/resource-doesnot-exists-error";
import { makeFindSchoolByAdress } from "@/use-cases/factories/makegetByAdress";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function findByAdress(request: FastifyRequest, reply: FastifyReply) {
    const findByAdressBodySchema = z.object({
        adress: z.string(),
    });

    const { adress } = findByAdressBodySchema.parse(request.query);

    try {
        const findByAdressSchoolUseCase = makeFindSchoolByAdress();
        
        const result = await findByAdressSchoolUseCase.execute({ adress });

        return reply.status(200).send(result); // Retorna o resultado, se necessário
    } 

    catch (error) { 
        if( error instanceof  resourceDoesNotExistsError){
           return reply.status(409).send({message : error.message})
        }
         
     }
     
}
