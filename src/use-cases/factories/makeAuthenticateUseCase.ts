import { PrismaUserRepository } from '@/repositories/prisma/Prisma-user-repository';
import { AuthenticateUseCase } from '../authenticate-user';



export function makeAuthenticateUseCase(){
    
    const usersRepository = new PrismaUserRepository()
    const UseCase = new AuthenticateUseCase(usersRepository)

    return UseCase
}