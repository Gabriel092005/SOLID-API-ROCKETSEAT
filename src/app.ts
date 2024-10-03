import { fastify } from "fastify";
import { ZodError } from "zod";
import { env } from "./Env";
import { error } from "console";
import { userRoutes, } from "./http/controllers/user/routes";
import { schoolRoutes } from "./http/controllers/Escola/routes";
import { matriculaRoutes } from "./http/controllers/matricula/routes";
import { fastifyJwt } from "@fastify/jwt";
import fastifyCookie from "@fastify/cookie";
import { feedbackRoutes } from "./http/controllers/feedback/routes";





export const app = fastify()

app.register(userRoutes)
app.register(schoolRoutes)
app.register(matriculaRoutes)
app.register(feedbackRoutes)
app.register(fastifyCookie)

app.register(fastifyJwt,{
    secret:env.JWT_SECRET,
    cookie:{
        cookieName:'refreshToken',
        signed:false,
    },
    sign:{
        expiresIn:'10min'
    }
},
   
)


app.setErrorHandler((Error,request,reply)=>{
    console.log(Error)

    if(Error instanceof ZodError){

        return reply.status(400)
        .send( {
            message : 'validation error' , 
            issues:Error.format()
        })
    }
    
    if(env.NODE_ENV!=='production'){
        console.error(error)
        
    }



    return reply
  
    .status(500)
    .send(
        {message : 'internal server error'}
    ) 
})