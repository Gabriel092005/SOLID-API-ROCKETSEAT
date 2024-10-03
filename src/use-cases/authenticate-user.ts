import { usersRepository } from "@/repositories/users-repository";
import { User } from "@prisma/client";
import { invalidCredentialsError } from "./erros/invalid-credentials-error";

 interface AuthenticateUseCaseRequest{
    email: string,
    password_hash : string
}
interface  AuthenticateUseCaseResponse {
    user: User
}
export class AuthenticateUseCase{
    constructor(private usersRespository : usersRepository){}
    async execute
        ({email, password_hash} : AuthenticateUseCaseRequest) : Promise<AuthenticateUseCaseResponse>{
            //auth
        const user = await this.usersRespository.findByEmail(email)
  

        if(!user){
           throw new invalidCredentialsError()
        }
        return {
            user,
        }   
    }
}