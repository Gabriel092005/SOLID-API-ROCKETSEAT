import { FastifyInstance } from "fastify";
import { verifyJWT } from "../middleware/verify-jwt";
import { Search } from "./search";
import { nearBy } from "./nearby";
import { create } from "./create";
import { verifyUserRole } from "../middleware/verify-user-role";

export async function GymsRoutes(app:FastifyInstance) {
    
   app.addHook('onRequest',verifyJWT)
   app.get('/gyms/search',Search)
   app.get('/gyms/nearby',nearBy)
   app.post('/gyms',{onRequest :[verifyUserRole('ADMIN')]} ,create)

}