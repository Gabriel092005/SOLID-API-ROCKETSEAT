import { Gym, Prisma } from "@prisma/client";
import { FindManyNearByParams, GymRepository } from "../gym-repository";
import { randomUUID } from "crypto";
import { getDistanceBetweenCoordinates } from "@/utills/get-distance-between-coordinate";


export class InMemoryGymsRepository implements GymRepository{

 


  
  public itens : Gym[] = []
  
  async findById(id: string){
    const gym = this.itens.find(item =>item.id===id)
    
    if(!gym){
      
      return null 
      
    }
    
    return gym
  }

  async findManyNearBy(params: FindManyNearByParams)
  {
     return this.itens.filter(item=>{
      const distance = getDistanceBetweenCoordinates(
        {latitude : params.latitude, longitude:params.longitude},
        {latitude : item.latitude.toNumber(), longitude : item.longitude.toNumber()}
      )
      console.log(distance)
      return distance < 10
     })


  }
  


  async SearchMany(query: string, page: number): Promise<Gym[]> {
    return this.itens.filter((item)=>item.title.includes(query))
    .slice((page-1)*20,page*20)
  }

 async create(data: Prisma.GymCreateInput) {

  const Gym = {

   id :data.id ?? randomUUID(),
   title : data.title,
   description: data.description ?? null,
   phone: data.phone ?? null,
   latitude : new Prisma.Decimal(data.latitude.toString()),
   longitude : new Prisma.Decimal(data.longitude.toString())

 }
  this.itens.push(Gym)

 return Gym

 
}
}