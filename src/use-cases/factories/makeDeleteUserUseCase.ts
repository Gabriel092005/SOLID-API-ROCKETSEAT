    import { PrismaUserRepository } from '@/repositories/prisma/Prisma-user-repository';
import { DeleteUserUseCase } from '../Delete-user';




    export function makeDeleteUseCase(){
        
        const usersRepository = new PrismaUserRepository()
        const UseCase = new DeleteUserUseCase(usersRepository)

        return UseCase
    }