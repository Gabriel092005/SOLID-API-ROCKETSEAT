import { PrismaGysmRepository } from '@/repositories/prisma/prisma-gyms-repository';
import { SearchGymUseCase } from '../search-gyms';


export function makeSearchGymssUseCase (){
    
    const GymsRepository = new PrismaGysmRepository()
    const UseCase = new SearchGymUseCase(GymsRepository)

    return UseCase
}
