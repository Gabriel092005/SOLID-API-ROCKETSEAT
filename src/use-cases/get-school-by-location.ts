import { schoolRepository } from "@/repositories/school-repository"
import { escola } from "@prisma/client"


interface getByLocationUseCaSeRequest
{
    adress : string  
}

interface getByLocationUseCaSeResponse{
    escola: escola[]
}

export class FindSchoolByAdress {
    constructor(private schoolRepository : schoolRepository){}
   async execute({adress}:getByLocationUseCaSeRequest):Promise<getByLocationUseCaSeResponse>
   {

     const escola = await this.schoolRepository.findManyByAdress(adress)

     return{
        escola
     }

   }
}   

