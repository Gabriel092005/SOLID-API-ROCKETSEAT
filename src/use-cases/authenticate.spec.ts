
import { InMemoryUsersRepository } from '@/repositories/In-memory/in-memory-user-repository'
import {expect , it , describe,beforeEach} from 'vitest'
import { AuthenticateUseCase } from './authenticate'




let usersRepository : InMemoryUsersRepository
let Sut : AuthenticateUseCase

describe('Authenticate Use Case',()=>{
    beforeEach(()=>{
        usersRepository = new InMemoryUsersRepository()
        Sut = new AuthenticateUseCase(usersRepository)
    })
    it('should not be able to authenticate', async () => {

  

         await usersRepository.Create({
            nome:'jonh doe',
            email:'cecila@gmail.com',
            password_hash: '123456789'
         }
         )
    
        const { user } = await  Sut.execute({

            email :'cecila@gmail.com',      
         
        })
    
        expect(user.id).toEqual(expect.any(String))
    })
    
})