import { usersRepository } from "@/repositories/users-repository";
import { User } from "@prisma/client";
import { UserAreadyExistsError } from "./erros/user-already-Exists";
import { invalidCredentialsError } from "./erros/invalid-credentials-error";

interface  RegisterUseCaseRequest{
    nome:string;
    email:string;
    password_hash:string;
    number : string
}


interface RegisterUseCaseResponse{
    user:User
}

export class RegisterUseCase {
    constructor( private usersRepository : usersRepository ) {}
 async Execute({nome,email,password_hash,number} : RegisterUseCaseRequest)
 : Promise<RegisterUseCaseResponse>
{
     const userWithSameEmail = await this.usersRepository.findByEmail(email)

  if(userWithSameEmail)
  {
      throw new UserAreadyExistsError()
  }
//    const  prismaUserRepository = new PrismaUserRepository()
   const user  = await this.usersRepository.create({
       nome,
       email,
       password_hash,
       number

   })
   return {
       user,
   }   
   
  } 

}

