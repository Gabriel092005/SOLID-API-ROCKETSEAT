import { notificacao, Prisma } from "@prisma/client";
export interface notificationRepository 
{
    create(data : Prisma.notificacaoUncheckedCreateInput): Promise<notificacao>
    deleteById(id:string) : Promise<notificacao>
}