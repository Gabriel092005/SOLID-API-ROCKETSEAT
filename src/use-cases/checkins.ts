import { CheckIn } from "@prisma/client";
import { CheckInsRepository } from "@/repositories/check-ins-repository";
import { GymRepository } from "@/repositories/gym-repository";
import { resourceNotFoundError } from "./erros/resource-not-found-errors";
import { getDistanceBetweenCoordinates } from "@/utills/get-distance-between-coordinate";
import { MaxDistanceError } from "./erros/max-distance-error";
import { MaxNumberOfChecKinsError } from "./erros/max-number-of-checkins-error";
 

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
    ({userId,gymId,userLatitude,userLongitude} : CheckInUseCaseRequest) : Promise<CheckInUseCaseResponse>{
        
        const gym = await this.gymRepository.findById(gymId)
        if(!gym){
            throw new resourceNotFoundError()
        }
        const distance = getDistanceBetweenCoordinates(
            {latitude : userLatitude , longitude : userLongitude},
            {latitude:gym.latitude.toNumber(), longitude : gym.longitude.toNumber()}
        )


        // const MAX_DISTANCE = 0.1

        // if(distance>MAX_DISTANCE){

        //     throw new MaxDistanceError()
        // }

        const checkInOnSame = await this.checkinsRepository.findByUserIdOnDate(
            userId,
            new Date()
        )

        if(checkInOnSame){
            throw new MaxNumberOfChecKinsError()
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