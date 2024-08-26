import { PrismaUserRepository } from '@/repositories/prisma/prisma-users-repository';
import { RegisterUseCase } from '@/use-cases/Register';


export function makeRegisterUserCase (){
    
    const usersRepository = new PrismaUserRepository()
    const registerUseCase = new RegisterUseCase(usersRepository)

    return registerUseCase
}