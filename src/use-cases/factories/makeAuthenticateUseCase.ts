import { PrismaUserRepository } from '@/repositories/prisma/prisma-users-repository';
import { RegisterUseCase } from '@/use-cases/Register';


export function makeAuthenticateUserCase (){
    
    const usersRepository = new PrismaUserRepository()
    const authenticateUseCase = new RegisterUseCase(usersRepository)

    return authenticateUseCase
}
