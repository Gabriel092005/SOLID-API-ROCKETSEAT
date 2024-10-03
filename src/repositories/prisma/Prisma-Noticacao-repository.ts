import { notificacao, Prisma } from "@prisma/client";
import { notificationRepository } from "../notificacao-repository";
import { prisma } from "@/lib/prisma";


export  class PrismaNoticacaoRepository implements notificationRepository{
    async create(data: Prisma.notificacaoUncheckedCreateInput){
        const notificacao = await prisma.notificacao.create({
            data
        })
        return notificacao

       
    }
  
    deleteById(id: string): Promise<notificacao> {
        throw new Error("Method not implemented.");
    }

}