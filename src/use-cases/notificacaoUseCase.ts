import { notificationRepository } from "@/repositories/notificacao-repository"
import { notificacao } from "@prisma/client"

interface notificacaoUseCaseRequest
{
    userId : string
    content : string
}

interface notificacaoUseCaseResponse
{
    notificacao : notificacao
}

export class notificacaoUseCase 
{
    constructor(notificationRepository : notificationRepository){}
}