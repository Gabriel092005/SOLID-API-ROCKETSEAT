
import { InMemoryUsersRepository } from '@/repositories/In-memory/in-memory-user-repository'
import {expect , it , describe,beforeEach} from 'vitest'
import { GetUserProfileUseCase } from './get-user-profile'
import { resourceNotFoundError } from './erros/resource-not-found-errors'




let usersRepository : InMemoryUsersRepository
let Sut : GetUserProfileUseCase

describe('Get User Profile Use Case',()=>{
    beforeEach(()=>{
        usersRepository = new InMemoryUsersRepository()
        Sut = new GetUserProfileUseCase(usersRepository)
    })
    it('should not be able to Get User Profile', async () => {

  

       const createdUser =   await usersRepository.Create({
            nome:'jonh doe',
            email:'cecila@gmail.com',
            password_hash: '123456789'
         }
         )
    
        const { user } = await  Sut.execute({

             userId: createdUser.id 
         
        })
    
    
      await expect(user.nome).toEqual('jonh doe')
    })

    it('should not be able to get user profile with wrong id'), async()=>{
       await expect(()=>{
            Sut.execute({
                userId:'non existing-id'
            })
        })
        .rejects.toBeInstanceOf(resourceNotFoundError)
    }
    
})