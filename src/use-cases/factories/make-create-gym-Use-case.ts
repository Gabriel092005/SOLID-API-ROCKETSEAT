import { PrismaGysmRepository } from '@/repositories/prisma/prisma-gyms-repository';
import { FetchNearByGymUseCase } from '../fetch-nearBy-Gym';
import { CreategymUseCase } from '../create-gym';


export function makeCreateGymsUseCase (){
    
    const GymsRepository = new PrismaGysmRepository()
    const UseCase = new CreategymUseCase (GymsRepository)

    return UseCase
}
