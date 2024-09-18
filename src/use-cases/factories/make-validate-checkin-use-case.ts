
import { PrismaCheckInsRepository } from '@/repositories/prisma/prisma-checkin-repository';
import { ValidatecheckInUseCase } from '../validate-checkin';


export function makeValidateCheckInUseCase (){
    
    const CheckinsRepository = new PrismaCheckInsRepository
    const UseCase = new ValidatecheckInUseCase(CheckinsRepository)

    return UseCase
}
