
import { InMemoryUsersRepository } from '@/repositories/In-memory/in-memory-user-repository'
import {expect , it , describe} from 'vitest'
import { RegisterUseCase } from './Register'
import { UserAreadyExistsError } from './erros/user-already-exists'

describe('Register Use Case',()=>{
    it('should not be able to register', async () => {

        const usersRepository = new InMemoryUsersRepository()
        const registerUseCase = new RegisterUseCase(usersRepository)
    
    
    
        const {user} = await registerUseCase.Execute({
            nome :'John Doe',
            email :'johndoe@gmail.com',
            password_hash : '123456'
        })
    
        expect(user.id).toEqual(expect.any(String))
    })
    
        it('should not be able to register with same email twice', async () => {
    
            const usersRepository = new InMemoryUsersRepository()
            const registerUseCase = new RegisterUseCase(usersRepository)
    
            const email = 'john@exemple.com'
    
              await registerUseCase.Execute({
                nome :'John Doe',
                email,
                password_hash : '123456'
            })
       
            
           await  expect(()=>
                 registerUseCase.Execute({
                    nome :'John Doe',
                    email,
                    password_hash : '123456'
                    
                }),
            ).rejects.toBeInstanceOf(UserAreadyExistsError)
    
    })
    

})
