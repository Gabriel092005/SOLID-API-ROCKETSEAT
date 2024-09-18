
import { FetchNearByGymUseCase } from '../fetch-nearBy-Gym';
import { PrismaGysmRepository } from '@/repositories/prisma/prisma-gyms-repository';


export function makeFetchNearByGymsUseCase (){
    
    const GymsRepository = new PrismaGysmRepository()
    const UseCase = new FetchNearByGymUseCase(GymsRepository)

    return UseCase
}
