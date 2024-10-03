import { FastifyInstance } from "fastify";
import { Delete } from "./delete";
import { authenticate } from "./authenticate";
import { Register } from "./register";





export async function userRoutes(app:FastifyInstance){

    app.post('/register',Register)
    app.delete('/delete',Delete)
    app.post('/sessions',authenticate)

}