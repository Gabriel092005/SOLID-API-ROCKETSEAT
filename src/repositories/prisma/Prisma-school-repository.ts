import { escola, Prisma} from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { schoolRepository } from "../school-repository";


export class PrismaSchoolRepository implements schoolRepository
{
async save(data: escola) {
    const school = await prisma.escola.update({
        where:{
            id : data.id
        },
        data

    })
    return school

}

async findManyByAdress(addres: string){
        const school = await prisma.escola.findMany({
            where:{
                adress:addres
            }
        })
        return school
    }
async findById(id: string){
        const school = await prisma.escola.findFirst({
            where:{
                id
            }
        })

        return school


    } 
async create(data: Prisma.escolaUncheckedCreateInput){
        const school = await prisma.escola.create({
            data
        })
        return  school
    }
async  findByEmail(email: string) {
        const school = await prisma.escola.findUnique({
            where:{
                email:email
            }

        })
        return school
    }

  
async delete(id: string){
       const school = await prisma.escola.delete({
            where:{
                id
            }
         })
         return school
    }
    
 
}