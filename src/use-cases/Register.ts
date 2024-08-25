import { prisma } from "@/lib/prisma"
import { usersRepository } from "@/repositories/users-repository";


interface  RegisterUseCaseRequest{
    nome:string;
    email:string;
    password_hash:string;
}


export class RegisterUseCase {
   

    constructor( private usersRepository : usersRepository ) { }


 async Execute({nome,email,password_hash} : RegisterUseCaseRequest)
{
     const userWithSameEmail = await this.usersRepository.findByEmail(email)
 


//    const  prismaUserRepository = new PrismaUserRepository()

    this.usersRepository.Create({
       nome,
       email,
       password_hash,
   })

   
}


}

