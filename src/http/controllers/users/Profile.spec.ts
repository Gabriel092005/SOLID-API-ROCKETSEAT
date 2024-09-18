import { app } from "@/app"
import { createAndAuthenticateUser } from "@/utills/test/create-and-authenticate-user"
import  request from "supertest"
import { beforeAll, afterAll,describe,expect,it } from "vitest"


describe('Profile(e2e)',()=>{
    beforeAll(async()=>{
        await app.ready()
    })
    afterAll( async ()=> {
        await app.close()
    })
    
   it('should be able to get user Profile', async()=>{

     const  { token } = await createAndAuthenticateUser(app)

      const profileResponse =  await request(app.server)
      
      .get('/me')
      .set('Authorization',`Bearer ${token}`)
      .send()

      expect(profileResponse.statusCode).toEqual(200)
      expect(profileResponse.body.user).toEqual(
        expect.objectContaining({
        email:'johndoe@exemple.com'
      }))
         
          
    })

})