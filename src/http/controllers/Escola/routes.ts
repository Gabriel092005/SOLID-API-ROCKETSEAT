import { FastifyInstance } from "fastify"
import { register } from "./register";
import { deletar } from "./delete";
import { findByAdress } from "./findManyByAdress";


export async function schoolRoutes(app:FastifyInstance){
    app.post('/create-school', register)
    app.delete('/delete-school/:id',deletar)
    app.get('/findby',findByAdress)
}