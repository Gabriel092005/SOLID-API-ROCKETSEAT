
import { Gym } from "@prisma/client";
import { GymRepository } from "@/repositories/gym-repository";


interface  CreategymUseCaseRequest{

      title : string
      description  : string | null
      phone : string|null
      latitude : number
      longitude : number

}


interface CreategymUseCaseResponse{

    gym:Gym
}

export class CreategymUseCase {
   

    constructor( private gymsRepository : GymRepository ) { }


 async Execute({
    title
    ,description
    ,phone
    ,latitude
    ,longitude
} 
:CreategymUseCaseRequest): Promise<CreategymUseCaseResponse>
{


   const gym = await this.gymsRepository.create({
       title,
       description,
       phone,
       latitude,
       longitude
    
   })
     
   return{
    gym
   }
  } 

  

}

