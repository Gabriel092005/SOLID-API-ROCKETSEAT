import { FastifyInstance } from "fastify";
import { SeendFeedback } from "./sendFeedback";

export async function feedbackRoutes(app:FastifyInstance){
    app.post('/enviar-feedback',SeendFeedback)

}