import { PrismaUserRepository } from '@/repositories/prisma/Prisma-user-repository';
import { RegisterUseCase } from '../Register-user';



export function makeRegisterUserCase (){
    
    const usersRepository = new PrismaUserRepository()
    const registerUseCase = new RegisterUseCase(usersRepository)

    return registerUseCase
}