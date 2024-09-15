import { PrismaGysmRepository } from '@/repositories/prisma/prisma-gyms-repository';
import { FetchNearByGymUseCase } from '../fetch-nearBy-Gym';


export function makeSearchGymssUseCase (){
    
    const GymsRepository = new PrismaGysmRepository()
    const UseCase = new FetchNearByGymUseCase(GymsRepository)

    return UseCase
}
