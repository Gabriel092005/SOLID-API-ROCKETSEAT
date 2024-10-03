 // Corrigido o nome
import { ErollmentRepository } from "@/repositories/erollment-repository";
import { matricula } from "@prisma/client";
import { MaxNumberOfErollmentError } from "./erros/max-number-erollment-error";
import { schoolRepository } from "@/repositories/school-repository";
import { resourceDoesNotExistsError } from "./erros/resource-doesnot-exists-error";

interface EnrollmentRequest 
{
    escolaId: string;
    userId: string;
}

interface EnrollmentResponse {
    matricula: matricula;
}

export class  fazerMatriculaUseCase {
    constructor(
        private enrollmentRepository:ErollmentRepository,
        private schoolrepository : schoolRepository
        
        
    ) {} // Corrigido o nome

    async execute({ escolaId, userId }: EnrollmentRequest): Promise<EnrollmentResponse>{

        const escola = await this.schoolrepository.findById(escolaId)

        if(!escola){
            throw new resourceDoesNotExistsError()
        }

        const matriculaSameDate = await this.enrollmentRepository.findErollmentOnSameDate(
            userId,
            new Date()
        )

        if(matriculaSameDate){
            throw new MaxNumberOfErollmentError()
        }
        
        const matricula = await this.enrollmentRepository.make(
            userId,
            escolaId
        );

        return {
            matricula
        };
    }
}
