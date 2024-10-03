import { usersRepository } from "@/repositories/users-repository"
interface DeleteUserRequest {
    id : string
}



export class DeleteUserUseCase {
    constructor(private usersRepository:usersRepository){}
    async execute({id}:DeleteUserRequest){
        
         this.usersRepository.DeleteById(id)

        

    }
}