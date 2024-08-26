
import { InMemoryUsersRepository } from '@/repositories/In-memory/in-memory-user-repository'
import {expect , it , describe} from 'vitest'
import { AuthenticateUseCase } from './authenticate'

describe('Authenticase Use Case',()=>{
    it('should not be abl to authenticate', async () => {

        const usersRepository = new InMemoryUsersRepository()
        const Sut = new AuthenticateUseCase(usersRepository)

         await usersRepository.Create({
            nome:'jonh doe',
            email: 'gabrielmanuel@gmail.com',
            password_hash: '123456789'
         }
         )
    
        const { user } = await  Sut.execute({

            email :'gabrielmanuel@gmail.com',
         
        })
    
        expect(user.id).toEqual(expect.any(String))
    })
    
})