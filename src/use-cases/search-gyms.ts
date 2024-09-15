
import { Gym } from "@prisma/client";
import { GymRepository } from "@/repositories/gym-repository";


interface  SearchGymUseCaseRequest{

      query : string
      page : number
 
}


interface SearchGymUseCaseResponse{

    gyms:Gym[]
}

export class SearchGymUseCase {
   

    constructor( private gymsRepository : GymRepository ) { }


 async Execute({query,page}:SearchGymUseCaseRequest): Promise<SearchGymUseCaseResponse>
{


   const gyms = await this.gymsRepository.SearchMany(
    query,
    page,
    

)
     
   return{
    gyms
   }
  } 

  

}

