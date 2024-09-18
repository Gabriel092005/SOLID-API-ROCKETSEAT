
import { PrismaCheckInsRepository } from '@/repositories/prisma/prisma-checkin-repository';
import { FetchUserCheckinHistoryUseCase } from '../fetch-user-checkin-history';


export function makeFetchUserCheckInHistoryUseCase (){
    
    const CheckinsRepository = new PrismaCheckInsRepository
    
    const UseCase = new FetchUserCheckinHistoryUseCase(CheckinsRepository)

    return UseCase
}
