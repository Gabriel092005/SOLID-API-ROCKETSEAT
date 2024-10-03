import { PrismaFeedbackRepository } from '@/repositories/prisma/Prisma-feedback-repository';
import { feedbackUseCase } from '../feedback';



export function makeFeedbackUseCase (){
    
    const feedbackRepository = new PrismaFeedbackRepository()
    const UseCase = new feedbackUseCase(feedbackRepository)

    return UseCase
}