import { FastifyInstance } from "fastify";
import { Register } from "./controllers/Register";



export async function  AppRoutes(app:FastifyInstance) {
    
    app.post('/users',Register)

    
}