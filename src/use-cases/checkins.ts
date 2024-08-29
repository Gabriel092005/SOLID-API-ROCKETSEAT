import { CheckIn, User } from "@prisma/client";
import { CheckInsRepository } from "@/repositories/check-ins-repository";
 

interface CheckInUseCaseRequest{
    userId : string
    gymId : string 
}

interface  CheckInUseCaseResponse {

    checkIn : CheckIn

}


export class checkInUseCase{

    constructor(private checkinsRepository : CheckInsRepository){}

    async execute
    ({userId,gymId} : CheckInUseCaseRequest) : Promise<CheckInUseCaseResponse>{
    
        const checkIn = await this.checkinsRepository.create({
            gym_id: gymId,
            user_id:userId,
            is_validated:false
        })
       

        return{
            checkIn
        }
       


      
    }


    
}