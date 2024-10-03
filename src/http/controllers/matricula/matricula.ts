
import { z} from'zod'
import { FastifyRequest,FastifyReply } from "fastify";
import { makeErollmentUseCase } from '@/use-cases/factories/makeErollmenteUseCase';
import { MaxNumberOfErollmentError } from '@/use-cases/erros/max-number-erollment-error';
import { resourceDoesNotExistsError } from '@/use-cases/erros/resource-doesnot-exists-error';



export async function FazerMatricula(request:FastifyRequest,reply:FastifyReply) {

    const FazerMatriculaBodySchema = z.object({
         escolaId : z.string(),
         userId:z.string()
    })
   const {escolaId,userId} = FazerMatriculaBodySchema.parse(request.body)
   try {

        const fazerMatriculaUseCase = makeErollmentUseCase()
        
     await fazerMatriculaUseCase.execute({
         escolaId,
         userId
     })
      return reply.status(201).send({message:'matricula feita com sucesso'})  
   }
    catch (error) {
         if(error instanceof MaxNumberOfErollmentError){
            return reply.status(409).send({message : error.message})
         }
         if(error instanceof resourceDoesNotExistsError){
            return reply.status(404).send({message : error.message})
         }
         throw error
       
   }
   
}


