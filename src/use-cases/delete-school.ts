import { schoolRepository } from "@/repositories/school-repository";
import { resourceDoesNotExistsError } from "./erros/resource-doesnot-exists-error";


interface SchoolUseCaSeRequest{

    id : string

}
export class DeleteSchoolUseCase{
    constructor(private schoolRepository : schoolRepository){}
    async execute({id}:SchoolUseCaSeRequest)
    {
        const school = await this.schoolRepository.findById(id)
        if(!school)
        {
            throw new resourceDoesNotExistsError()
        }
        this.schoolRepository.delete(id)
    }
}