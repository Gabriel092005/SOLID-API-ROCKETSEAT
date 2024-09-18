    import { app } from "@/app"
    import  request from "supertest"
    import { beforeAll, afterAll,describe,expect,it } from "vitest"


    describe('Authenticate(e2e)',()=>{
        beforeAll(async()=>{
            await app.ready()
        })
        afterAll( async ()=> {
            await app.close()
        })
        
    it('should be able to register', async()=>{

            await request(app.server).post('/users').send({
                nome:'Jonh Doe',
                email :'johndoe@exemple.com',
                password_hash:'123456'
            })

            const response = await request(app.server).post('/sessions').send({
            
                email :'johndoe@exemple.com',
                password_hash:'123456'
            })
            expect(response.statusCode).toEqual(200)
            expect(response.body).toEqual({token: expect.any(String)})
        })


    })