import { CheckIn } from "@prisma/client";
import { CheckInsRepository } from "@/repositories/check-ins-repository";
import { resourceNotFoundError } from "./erros/resource-not-found-errors";
import dayjs from "dayjs";

 

interface ValidateCheckInUseCaseRequest{
   checkInId : string
}

interface  ValidateCheckInUseCaseResponse {
    checkIn : CheckIn
}
export class ValidatecheckInUseCase{

    constructor(

        private checkinsRepository   : CheckInsRepository,


    ){}

    async execute
    ({checkInId} : ValidateCheckInUseCaseRequest) : Promise<ValidateCheckInUseCaseResponse>{
        
        const checkIn = await this.checkinsRepository.findById(checkInId)

        if(!checkIn){
            throw new resourceNotFoundError()
        }

        const distanceInMinutesFromCheckInCreation = dayjs(new Date()).diff(
            checkIn.created_at,
            'minutes'
        ) //pegando a difere

        if(distanceInMinutesFromCheckInCreation>20){
            throw new Error()
        }

        checkIn.validated_at = new Date()

        await this.checkinsRepository.save(checkIn)
       

        return{
            checkIn
        }
       


      
    }


    
}