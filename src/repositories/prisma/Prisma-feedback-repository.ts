
import { Prisma, feedback } from "@prisma/client";
import { feedbackRepository } from "../feedback-repository";
import { prisma } from "@/lib/prisma";


export class PrismaFeedbackRepository  implements feedbackRepository{
    async make(data: Prisma.feedbackUncheckedCreateInput) {
        const feedback = await prisma.feedback.create({
            data
        })
        return feedback
    
    }

    async findById(id: string){

        const feedback = await prisma.feedback.findFirst({
            where:{
                id
            }
        })
        return feedback
       
    }

}