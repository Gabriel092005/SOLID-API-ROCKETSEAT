import { User, Prisma } from "@prisma/client";
import { usersRepository } from "../users-repository";

export class InMemoryUsersRepository implements usersRepository{
  public itens : User[] = []

  async findById(id: string){
    const user = this.itens.find(item =>item.id===id)

    if(!user){

        return null 
        
    }

    return user
 }
  async findByEmail(email: string){
        const user = this.itens.find(item =>item.email===email)

        if(!user){
            return null
        }

        return user
    }

  async Create(data: Prisma.UserCreateInput) {

       const user ={

        id : 'user-1',
        nome : data.nome,
        email: data.email,
        password_hash : data.password_hash,
        created_at : new Date()

      }
       this.itens.push(user)

      return user

      
    }

}