import { PrismaErollmentRepository } from '@/repositories/prisma/Prisma-erollment-repository';
import { ValidateMatriculaUseCase } from '../validar-matricula';


export function makeValidateErollmentUseCase(){

    const ErollmentRepository = new PrismaErollmentRepository()
    const UseCase = new ValidateMatriculaUseCase(ErollmentRepository)

    return UseCase
}