
import { PrismaGysmRepository } from '@/repositories/prisma/prisma-gyms-repository';
import { checkInUseCase } from '../checkins';
import { PrismaCheckInsRepository } from '@/repositories/prisma/prisma-checkin-repository';


export function makeCheckInUseCase (){
    
    const CheckInsRepository = new PrismaCheckInsRepository()
    const gymsRepository = new PrismaGysmRepository()
    

    const UseCase = new checkInUseCase(CheckInsRepository,gymsRepository)

    return UseCase
}
