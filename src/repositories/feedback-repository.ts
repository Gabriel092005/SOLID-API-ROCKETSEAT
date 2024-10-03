import { feedback, Prisma } from "@prisma/client";
export interface feedbackRepository 
{
    make(data:Prisma.feedbackUncheckedCreateInput):Promise<feedback>
    findById(id :string):Promise<feedback|null>
}