
import { Gym } from "@prisma/client";
import { GymRepository } from "@/repositories/gym-repository";


interface  FetchNearByGymUseCaseRequest{

      userLatitude: number
      userLongitude : number

}


interface FetchNearByGymUseCaseResponse{

    gyms:Gym[]
}

export class FetchNearByGymUseCase {
   

    constructor( private gymsRepository : GymRepository ) { }


 async Execute({
     userLatitude,
     userLongitude
} 
:FetchNearByGymUseCaseRequest): Promise<FetchNearByGymUseCaseResponse>
{


   const gyms = await this.gymsRepository.findManyNearBy(
     {
        latitude : userLatitude,
        longitude : userLongitude
     }
)
     
   return{
    gyms
   }
  } 

  

}

