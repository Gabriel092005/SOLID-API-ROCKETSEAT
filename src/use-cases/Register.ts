import { usersRepository } from "@/repositories/users-repository";
import { UserAreadyExistsError } from "./erros/user-already-exists";
import { User } from "@prisma/client";


interface  RegisterUseCaseRequest{
    nome:string;
    email:string;
    password_hash:string;
}


interface RegisterUseCaseResponse{

    user:User
}

export class RegisterUseCase {
   

    constructor( private usersRepository : usersRepository ) { }


 async Execute({nome,email,password_hash} : RegisterUseCaseRequest)
 : Promise<RegisterUseCaseResponse>
{
     const userWithSameEmail = await this.usersRepository.findByEmail(email)
 

  if(userWithSameEmail){

    throw new UserAreadyExistsError()
    
  }
//    const  prismaUserRepository = new PrismaUserRepository()

   const user  = await this.usersRepository.Create({
       nome,
       email,
       password_hash,
   })
   return {
       user,
   }   
   
  } 

}

