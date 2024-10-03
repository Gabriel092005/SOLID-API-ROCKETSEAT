import { matricula } from "@prisma/client";
import dayjs from "dayjs";
import { resourceDoesNotExistsError } from "./erros/resource-doesnot-exists-error";
import { ErollmentRepository } from "@/repositories/erollment-repository";

interface ValidateEscolaUseCaseRequest{
   matriculaId : string
}

interface validateEscolaUseCaseResponse {
    matricula: matricula
}
export class ValidateMatriculaUseCase{

    constructor(private ErollmentRepository: ErollmentRepository,){}

    async execute
    ({matriculaId} : ValidateEscolaUseCaseRequest) : Promise<validateEscolaUseCaseResponse>{
        
        const matricula = await this.ErollmentRepository.findById(matriculaId)

        if(!matricula){
            throw new resourceDoesNotExistsError()
        }

        const distanceInMinutesFromErollmentCreation = dayjs(new Date()).diff(
             
            'minutes'
        ) //pegando a diferenca

        if(distanceInMinutesFromErollmentCreation>20)
            {
            throw new Error()
        }

         matricula.createdAt = new Date()

        await this.ErollmentRepository.save(matricula)

       

        return{
            matricula
        }
       


      
    }


    
}