import { FindSchoolByAdress } from '../get-school-by-location';
import { PrismaSchoolRepository } from '@/repositories/prisma/Prisma-school-repository';

export function makeFindSchoolByAdress(){

    const SchoolRepository = new PrismaSchoolRepository()
    const UseCase = new FindSchoolByAdress(SchoolRepository)

    return UseCase
}