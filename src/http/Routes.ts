import { FastifyInstance } from "fastify";
import { Register } from "./controllers/Register";
import { Authenticate } from "./controllers/authenticate";



export async function  AppRoutes(app:FastifyInstance) {
    
    app.post('/users',Register)
    app.post('/sessions',Authenticate)

    
}