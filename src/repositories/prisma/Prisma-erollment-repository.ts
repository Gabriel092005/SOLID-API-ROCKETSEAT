import { ErollmentRepository } from "../erollment-repository";
import { prisma } from "@/lib/prisma";
import { matricula } from "@prisma/client";
import dayjs from "dayjs";
export class PrismaErollmentRepository implements ErollmentRepository{
   async save(data: matricula){
       
       const matricula = await prisma.matricula.update(
            {
                where:{
                    id: data.id
                    
                },
                data:{
                    status:'CONFIRMADO'
                }
            })
            return matricula
    }
   async findErollmentOnSameDate(userId: string, date: Date)
   {
    const startOfDay = dayjs(date).startOf('date')
    const andOfDay = dayjs(date).endOf('date')

        const matricula = await prisma.matricula.findFirst({
            where:{
                userId : userId,
                createdAt:{
                    gte: startOfDay.toDate(),
                    lte : andOfDay.toDate()
                }
            }
        })
        return matricula
        
    }
  async findById(id: string){
       const matricula = await prisma.matricula.findFirst({
        where:{
           id:id
        }
       })
       return matricula
   }
   async make(userId: string, escolaId: string)
   {
       const matricula = await prisma.matricula.create({
        data:
        {
            userId,
            escolaId,
            
        }
       })
       return matricula
    
    }
   
    
    

}