import { feedbackRepository } from "@/repositories/feedback-repository"
import { feedback } from "@prisma/client"
interface feedBackUseCaseRequest
{
    escolaId:string
    userId : string
    mark: string
    comment: string
} 

interface feedBackUseCaseResponse 
{
    feedback : feedback
}

export class feedbackUseCase {
    constructor(private feedbackRepository : feedbackRepository ){}
    async execute({escolaId,mark,comment,userId}:feedBackUseCaseRequest):Promise<feedBackUseCaseResponse>
    {
      const feedback = await this.feedbackRepository.make(
        {
            escolaId : escolaId,
            userId : userId,
            comment : comment,
            mark:mark
        }
      )
 
      return{
         feedback
      }
 
    }

}