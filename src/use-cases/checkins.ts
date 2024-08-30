import { CheckIn } from "@prisma/client";
import { CheckInsRepository } from "@/repositories/check-ins-repository";
import { GymRepository } from "@/repositories/gym-repository";
import { resourceNotFoundError } from "./erros/resource-not-found-errors";
 

interface CheckInUseCaseRequest{
    userId : string
    gymId : string 
    userLatitude:number
    userLongitude : number
}

interface  CheckInUseCaseResponse {
    checkIn : CheckIn
}
export class checkInUseCase{

    constructor(
        private checkinsRepository   : CheckInsRepository,
        private gymRepository : GymRepository

    ){}

    async execute
    ({userId,gymId} : CheckInUseCaseRequest) : Promise<CheckInUseCaseResponse>{

        const gym = await this.gymRepository.findById(gymId)
        if(!gym){
            throw new resourceNotFoundError()
        }

        const checkInOnSame = await this.checkinsRepository.findByUserIdOnDate(
            userId,
            new Date()
        )

        if(checkInOnSame){
            throw new Error()
        }
    
        const checkIn = await this.checkinsRepository.Create({
            gym_id: gymId,
            user_id:userId,
        
        })
       

        return{
            checkIn
        }
       


      
    }


    
}