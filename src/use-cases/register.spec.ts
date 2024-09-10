
import { InMemoryUsersRepository } from '@/repositories/In-memory/in-memory-user-repository'
import {expect , it , describe, beforeEach} from 'vitest'
import { RegisterUseCase } from './Register'
import { UserAreadyExistsError } from './erros/user-already-exists'



let usersRepository  : InMemoryUsersRepository
let Sut :RegisterUseCase

describe('Register Use Case',()=>{

    beforeEach(()=>{
        usersRepository =  new InMemoryUsersRepository
        Sut = new RegisterUseCase(usersRepository) 
  
  })

  
    it('should not be able to register', async () => {

     
    
        const {user} = await Sut.Execute({
            nome :'Cecilia Manuel',
            email :'cecilia@gmail.com',
            password_hash : '1234567890'
        })
    
       await expect(user.id).toEqual(expect.any(String))
    })


    
        it('should not be able to register with same email twice', async () => {
    
      
    
            const email = 'johndoe12345678@gmail.com'
    
              await Sut.Execute({
                nome :'John Doe',
                email,
                password_hash : '123456'
            })
       
            
           await  expect(()=>
                 Sut.Execute({
                    nome :'John Doe',
                    email,
                    password_hash : '123456'
                    
                }),
            ).rejects.toBeInstanceOf(UserAreadyExistsError)
    
    })
    

})
