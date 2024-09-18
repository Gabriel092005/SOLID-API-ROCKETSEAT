import { CheckIn } from "@prisma/client";
import { CheckInsRepository } from "@/repositories/check-ins-repository";
 
interface FetchUserCheckinHistoryUseCaseRequest{
    userId : string
    page : number
}

interface  FetchUserCheckinHistoryUseCaseResponse
{
   checkIns : CheckIn[]
}
export class FetchUserCheckinHistoryUseCase{

    constructor(
        private checkinsRepository   : CheckInsRepository,

    ){}

    async execute
    ({userId,page}:FetchUserCheckinHistoryUseCaseRequest) : Promise<FetchUserCheckinHistoryUseCaseResponse>{
        
     const checkIns = await this.checkinsRepository.findManyByUserId(userId,page)

        return{checkIns}
       


      
    }


    
}