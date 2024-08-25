import { fastify } from "fastify";
import { AppRoutes } from "./http/Routes";



export const app = fastify()
app.register(AppRoutes)