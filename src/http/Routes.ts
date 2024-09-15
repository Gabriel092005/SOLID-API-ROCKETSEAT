import { FastifyInstance } from "fastify";
import { Register } from "./controllers/Register";
import { Authenticate } from "./controllers/authenticate";
import { Profile } from "./controllers/Perfil";
import { verifyJWT } from "./controllers/middleware/verify-jwt";

export async function  AppRoutes(app:FastifyInstance) {
    
    app.post('/users',Register)
    app.post('/sessions',Authenticate)
    // autenticated*/
    app.get('/me',{onRequest : [verifyJWT] } ,Profile)

    
}