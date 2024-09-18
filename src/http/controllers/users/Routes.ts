import { FastifyInstance } from "fastify";
import { Register } from "./Register";
import { Authenticate } from "./authenticate";
import { Profile } from "./Perfil";
import { verifyJWT } from "../middleware/verify-jwt";
import { refresh } from "./refresh";

export async function  UsersRoutes(app:FastifyInstance) {
    
    app.post('/users',Register)
    app.post('/sessions',Authenticate)

    app.patch('/token/refresh',refresh)
    // autenticated*/
    app.get('/me',{onRequest : [verifyJWT] } ,Profile)

    
}