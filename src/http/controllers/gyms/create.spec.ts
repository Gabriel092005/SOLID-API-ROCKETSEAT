import { app } from "@/app"
import { createAndAuthenticateUser } from "@/utills/test/create-and-authenticate-user"
import  request from "supertest"
import { beforeAll, afterAll,describe,expect,it } from "vitest"


describe('create Gym(e2e)',()=>{
    beforeAll(async()=>{
        await app.ready()
    })
    afterAll( async ()=> {
        await app.close()
    })
    
   it('should be able to create a gym', async()=>{

     const  { token } = await createAndAuthenticateUser(app)

     console.log(token)

      const  response =  await request(app.server)
      
      .post('/gyms')
      .set('Authorization',`Bearer ${token}`)
      .send({
        title:'title',
        desciption :'123456789sdfghjk',
        latitude :-27.209205,
        longitude :-49.6401091

      })

      expect(response.statusCode).toEqual(400)
          
    })

})