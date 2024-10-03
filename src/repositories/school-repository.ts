import { escola, Prisma } from "@prisma/client";
export interface schoolRepository
{
    create(data:Prisma.escolaUncheckedCreateInput) : Promise<escola>
    save(data:escola) : Promise<escola | null>
    delete(id:string):Promise<escola|null>
    findByEmail(email:string):Promise<escola|null>
    findById(id:string):Promise<escola | null>
    findManyByAdress(addres : string):Promise<escola[]>

}