import { Gym } from "@prisma/client";
import { GymRepository } from "../gym-repository";

export class InMemoryGymsRepository implements GymRepository{
  
  public itens : Gym[] = []

  async findById(id: string){
    const gym = this.itens.find(item =>item.id===id)

    if(!gym){

        return null 
        
    }

    return gym
 }
}