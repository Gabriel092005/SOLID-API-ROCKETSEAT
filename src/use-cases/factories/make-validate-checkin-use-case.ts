import { GetUserMetricsUseCase } from '../get-user-metrics';
import { PrismaCheckInsRepository } from '@/repositories/prisma/prisma-checkin-repository';


export function makeValidateCheckInUseCase (){
    
    const CheckinsRepository = new PrismaCheckInsRepository
    const UseCase = new GetUserMetricsUseCase(CheckinsRepository)

    return UseCase
}
