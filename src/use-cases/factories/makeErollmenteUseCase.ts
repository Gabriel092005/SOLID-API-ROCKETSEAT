import { PrismaErollmentRepository } from '@/repositories/prisma/Prisma-erollment-repository';
import { fazerMatriculaUseCase } from '../fazer-matricula';
import { PrismaSchoolRepository } from '@/repositories/prisma/Prisma-school-repository';

export function makeErollmentUseCase(){

    const ErollmentRepository = new PrismaErollmentRepository()
    const schoolRepository = new PrismaSchoolRepository()
    const UseCase = new fazerMatriculaUseCase(ErollmentRepository , schoolRepository)

    return UseCase
}