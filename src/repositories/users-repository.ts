import { Prisma, User } from "@prisma/client";

export interface usersRepository {

    findByEmail( email : string) : Promise <User | null>  //devolvendo uma promise

    Create(data : Prisma.UserCreateInput) : Promise<User>

    

}