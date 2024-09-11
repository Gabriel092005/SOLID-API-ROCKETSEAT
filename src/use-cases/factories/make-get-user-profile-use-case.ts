import { PrismaUserRepository } from '@/repositories/prisma/prisma-users-repository';
import { AuthenticateUseCase } from '../authenticate';
import { GetUserProfileUseCase } from '../get-user-profile';


export function makeGetUserProfileUseCase (){
    
    const usersRepository = new PrismaUserRepository()
    const UseCase = new GetUserProfileUseCase(usersRepository)

    return UseCase
}
