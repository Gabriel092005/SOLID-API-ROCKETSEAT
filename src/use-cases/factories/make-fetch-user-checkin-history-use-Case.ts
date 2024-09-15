import { FetchUserCheckinHistorUseCase } from '../fetch-user-checkin-history';
import { PrismaCheckInsRepository } from '@/repositories/prisma/prisma-checkin-repository';


export function makeGetUserCheckinsUseCase (){
    
    const CheckinsRepository = new PrismaCheckInsRepository
    const UseCase = new FetchUserCheckinHistorUseCase(CheckinsRepository)

    return UseCase
}
