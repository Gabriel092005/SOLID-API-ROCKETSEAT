
import {expect , it , describe,beforeEach, vi,afterEach} from 'vitest'
import { InMemoryCheckInsRepository } from '@/repositories/In-memory/in-memoy-checkin-repository'
import { ValidatecheckInUseCase } from './validate-checkin'
import { resourceNotFoundError } from './erros/resource-not-found-errors'

let checkInsRepository:InMemoryCheckInsRepository
let Sut : ValidatecheckInUseCase

describe('Validate Check-in Use Case',()=>{
    beforeEach(async()=>{
        checkInsRepository = new InMemoryCheckInsRepository()
        Sut = new ValidatecheckInUseCase(checkInsRepository)

        vi.useFakeTimers()
        
    })

    afterEach(()=>{
       vi.useRealTimers()
    })
    it('should  be able to validate the check in', async () => { 

        const CreatedcheckIn = await checkInsRepository.Create({
            gym_id:'gym-01',
            user_id:'user-id'
        })

      
        
             const {checkIn} = await  Sut.execute({
             checkInId : CreatedcheckIn.id
         
        })


    
      await expect(checkIn.validated_at).toEqual(expect.any(Date))
      expect(checkInsRepository.itens[0].validated_at).toEqual(expect.any(Date))
    })

    it('should  be able to validate an inexistent  check in', async () => { 
       await expect( async()=>
        Sut.execute
        ({
            checkInId :'inexistent-checkIn-id'
        })
      ).rejects.toBeInstanceOf(resourceNotFoundError)
    })

    it('should not be able to validate the check-in after 20 minutes of its creation', async()=>{
        
        
        
        vi.setSystemTime(new Date(2024,0,3,5,9))


        const CreatedcheckIn = await checkInsRepository.Create({
            gym_id:'gym-01',
            user_id:'user-id'
        })

        const TwentyOneMinutesInSeconds = 1000*60*21
 

       vi.advanceTimersByTime(TwentyOneMinutesInSeconds) // simulando avanco no tempo
       
        
      

       await expect( async () => Sut.execute({
            checkInId : CreatedcheckIn.id
        })).rejects.toBeInstanceOf(Error)
    })
})