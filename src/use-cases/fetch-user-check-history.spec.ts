
import {expect , it , describe,beforeEach} from 'vitest'
import { InMemoryCheckInsRepository } from '@/repositories/In-memory/in-memoy-checkin-repository'
import { FetchUserCheckinHistorUseCase } from './fetch-user-checkin-history'


let checkInsRepository:InMemoryCheckInsRepository
let Sut : FetchUserCheckinHistorUseCase

describe('Fetch User Check-in History Use Case',()=>{
    beforeEach(async()=>{

        checkInsRepository = new InMemoryCheckInsRepository()
        Sut = new FetchUserCheckinHistorUseCase(checkInsRepository)
    })

    it('should  be able to  fetch checkin History', async () => { 
      await checkInsRepository.Create({
        gym_id:'gym-01',
        user_id:'user-01'
      })
      await checkInsRepository.Create({
        gym_id:'gym-02',
        user_id:'user-01'
      })
     const {checkIns} = await Sut.execute({
        userId:'user-01',
        page:1,
     })    
       expect(checkIns).toHaveLength(2)
       expect(checkIns)
       .toEqual([

        expect.objectContaining({gym_id:'gym-01'}),
        expect.objectContaining({gym_id:'gym-02'}),
 


       ])
    })

    it('should  be able to  fetch paginated check-in History', async () => { 
       for(let i =1 ; i<=22 ;i++){
        await checkInsRepository.Create({
          gym_id:`gym-${i}`,
          user_id:'user-01'
        })
       }
   
     const {checkIns} = await Sut.execute({
        userId:'user-01',
        page : 2,
     })    
       expect(checkIns).toHaveLength(2)
       expect(checkIns)
       .toEqual([

        expect.objectContaining({gym_id:'gym-21'}),
        expect.objectContaining({gym_id:'gym-22'}),
 


       ])
    })
})