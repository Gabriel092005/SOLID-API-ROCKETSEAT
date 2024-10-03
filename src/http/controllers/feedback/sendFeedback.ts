
import { z} from'zod'
import { FastifyRequest,FastifyReply } from "fastify";
import { makeFeedbackUseCase } from '@/use-cases/factories/makeFeedbackUseCase';
import { resourceDoesNotExistsError } from '@/use-cases/erros/resource-doesnot-exists-error';

export async function SeendFeedback(request:FastifyRequest,reply:FastifyReply) {

    const enviarFeedbackbodySchema = z.object({
         escolaId : z.string(),
         userId:z.string(),
         mark:z.string(),
         comment:z.string()
    })
   const {escolaId,userId,mark,comment} = enviarFeedbackbodySchema.parse(request.body)
   console.log(request.body)
   try {

        const enviarFeedbackUseCase=makeFeedbackUseCase()
        
     await enviarFeedbackUseCase.execute({
         escolaId,
         userId,
         mark,
         comment
     })
      return reply.status(201).send({message:'feedback enviado com sucesso'})  
   }
    catch (error) {
         if(error instanceof resourceDoesNotExistsError){
            return reply.status(409).send({message : error.message})
         }
         throw error
       
   }
   
}


