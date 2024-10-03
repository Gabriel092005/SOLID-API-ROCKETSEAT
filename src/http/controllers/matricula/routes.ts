import { FastifyInstance } from "fastify";
import { FazerMatricula } from "./matricula";
import { verifyJWT } from "../middleware/verify-jwt";
import { validarMatricula } from "./validate";





export async function matriculaRoutes(app:FastifyInstance)
{
    app.addHook('onRequest',verifyJWT)
    app.post('/fazer-matricula',FazerMatricula)
    app.patch('/validar-matricula',validarMatricula)
    
}