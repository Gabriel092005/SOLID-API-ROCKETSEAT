
import {z} from'zod'
import { FastifyRequest,FastifyReply }from "fastify";
import { makeValidateErollmentUseCase }from'@/use-cases/factories/makeValidateMatricula';
import { resourceDoesNotExistsError }from '@/use-cases/erros/resource-doesnot-exists-error';



export async function validarMatricula(request:FastifyRequest,reply:FastifyReply) {

    const validarMatriculaBodySchema = z.object({
           matriculaId :z.string()
           
    })
   const {matriculaId} = validarMatriculaBodySchema.parse(request.body)
   try {

        const validarMatriculaUseCase = makeValidateErollmentUseCase()
        
     await validarMatriculaUseCase.execute({
        matriculaId
     })
      return reply.status(201).send({message:' matricula validada  com sucesso'})  
   }
    catch (error) 
    {
      if(error instanceof resourceDoesNotExistsError){
         return reply.status(409).send({message : error.message})
      }
         throw error
       
   }
   
}


