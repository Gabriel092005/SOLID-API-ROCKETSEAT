
import { PrismaSchoolRepository } from '@/repositories/prisma/Prisma-school-repository';
import { RegisterschoolUseCase } from '../register-school';



export function makeRegisterSchoolCase(){
    
    const SchoolRepository = new PrismaSchoolRepository()
    const UseCase = new RegisterschoolUseCase(SchoolRepository)

    return UseCase
}