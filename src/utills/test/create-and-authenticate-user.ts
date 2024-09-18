import { FastifyInstance } from "fastify";
import request  from "supertest";


export async function createAndAuthenticateUser(app:FastifyInstance){

    await request(app.server).post('/users').send({
        nome:'Jonh Doe',
        email :'johndoe@exemple.com',
        password_hash:'123456'
    })

    const authResponse = await request(app.server).post('/sessions').send({
     
        email :'johndoe@exemple.com',
        password_hash:'123456'
    })
    const {token} = authResponse.body

    return {
        token
    }

}