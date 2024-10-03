import { PrismaSchoolRepository } from '@/repositories/prisma/Prisma-school-repository';
import { DeleteSchoolUseCase } from '../delete-school';



export function makeDeleteSchoolUseCase(){
    
    const SchoolRepository = new PrismaSchoolRepository()
    const UseCase = new DeleteSchoolUseCase(SchoolRepository)
    return UseCase
}