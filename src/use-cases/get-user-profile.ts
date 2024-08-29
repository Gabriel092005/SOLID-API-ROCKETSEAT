import { usersRepository } from "@/repositories/users-repository";
import { invalidCredentialsError } from "./erros/invalid-credentials-error";
import { User } from "@prisma/client";
import { resourceNotFoundError } from "./erros/resource-not-found-errors";

interface GetUserProfileUseCaseRequest{

    userId : string
  
}

interface   GetUserProfileUseCaseResponse {
    user: User
}


export class GetUserProfileUseCase{

    constructor(private usersRespository : usersRepository){}

    async execute
    ({userId} : GetUserProfileUseCaseRequest) : Promise<GetUserProfileUseCaseResponse>{
 
        const user = await this.usersRespository.findById(userId)

        if(!user){
           throw new resourceNotFoundError()
        }


        return {
            user,
        }


      
    }


    
}