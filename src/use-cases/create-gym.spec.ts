
import { InMemoryGymsRepository } from '@/repositories/In-memory/in-memory-gyms-repository'
import {expect , it , describe, beforeEach} from 'vitest'
import { CreategymUseCase } from './create-gym'

let gymsRepository  : InMemoryGymsRepository
let Sut :CreategymUseCase

describe('Create Gym Use Case',()=> {


    beforeEach(()=>{
        gymsRepository=  new InMemoryGymsRepository
        Sut = new CreategymUseCase(gymsRepository) 
  
  })
  
    it('should not be able to create Gym', async () => {
    
        const { gym } = await Sut.Execute({
        
            title:'Cecilia Manuel',
            description : null,
            phone :null,
            latitude: -27.2092052,
            longitude: -49.6401091,
        
        })
    
       await expect(gym.id).toEqual(expect.any(String))
    })   

})
