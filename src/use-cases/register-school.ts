    import { schoolRepository } from "@/repositories/school-repository"
    import { escola } from "@prisma/client"
 

    interface SchoolUseCaSeRequest{
        name : string
        adress : string
        email:string
        Description:string
    }

    interface SchoolUseCaSeResponse{
        escola: escola
    }

    export class RegisterschoolUseCase {
        constructor(private schoolRepository : schoolRepository){}
       async execute({name,adress,email,Description}:SchoolUseCaSeRequest):Promise<SchoolUseCaSeResponse>
       {
    
         const escola = await this.schoolRepository.create({
             name,
             adress,
             email,
             Description,  
         })
         return{
            escola
         }

       }
    }   

