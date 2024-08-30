
import {expect , it , describe,beforeEach, vi,afterEach} from 'vitest'
import { InMemoryCheckInsRepository } from '@/repositories/In-memory/in-memoy-checkin-repository'
import { checkInUseCase } from './checkins'
import { InMemoryGymsRepository } from '@/repositories/In-memory/in-memory-gyms-repository'
import { Decimal } from '@prisma/client/runtime/library'





let checkInsRepository:InMemoryCheckInsRepository
let gymRepository : InMemoryGymsRepository
let Sut : checkInUseCase

describe('Check-in Use Case',()=>{
    beforeEach(()=>{
        checkInsRepository = new InMemoryCheckInsRepository()
        gymRepository = new InMemoryGymsRepository
        Sut = new checkInUseCase(checkInsRepository,gymRepository)

        gymRepository.itens.push({
          id:'gym-01',
          title:'Javascript Gym',
          description:'',
          phone:'iPhone 6s',
          latitude:new Decimal(0),
          longitude: new Decimal(0),


        })

        vi.useFakeTimers()
        
    })

    afterEach(()=>{
       vi.useRealTimers()
    })
    it('it should  be able to check in', async () => { 

      
        
        const { checkIn } = await  Sut.execute({

             gymId: 'gym-01',
             userId:'user-01',    
             userLatitude:0,
             userLongitude:0
         
        })

        console.log(checkIn.created_at)
    
      await expect(checkIn.id).toEqual(expect.any(String))
    })

    it('it should not be possible to check in the same day ', async () =>{    
        vi.setSystemTime(new Date(2024, 7, 20,8,0,0))  
       await  Sut.execute({

             gymId: 'gym-01',
             userId:'user-01',  
             userLatitude:0,
             userLongitude:0  
         
        })
    
      await expect(()=>  Sut.execute({

        gymId: 'gym-01',
        userId:'user-01',  
        userLatitude:0,
        userLongitude:0  
    
      })).rejects.toBeInstanceOf(Error)
    })
    
})