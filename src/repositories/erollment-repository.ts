
import { matricula} from "@prisma/client";



export interface ErollmentRepository{

    make(userId : string, escolaId : string):Promise<matricula>
    findById(id:string):Promise<matricula|null>
    findErollmentOnSameDate(userId : string, date:Date): Promise<matricula|null>
    save(data : matricula): Promise<matricula|null>



}