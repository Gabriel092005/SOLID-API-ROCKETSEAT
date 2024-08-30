import { prisma } from "@/lib/prisma";
import { Prisma, User } from "@prisma/client";

export interface usersRepository {
    
    findById(id : string): Promise <User | null> 
    findByEmail( email : string) : Promise <User | null>  //devolvendo uma promise
    Create(data : Prisma.UserCreateInput) : Promise<User>

    

}
