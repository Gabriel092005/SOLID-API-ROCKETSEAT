
import {expect , it , describe,beforeEach} from 'vitest'
import { InMemoryCheckInsRepository } from '@/repositories/In-memory/in-memoy-checkin-repository'
import { GetUserMetricsUseCase } from './get-user-metrics'


let checkInsRepository:InMemoryCheckInsRepository
let Sut : GetUserMetricsUseCase

describe('Get User Metrics History Use Case',()=>{
    beforeEach(async()=>{

        checkInsRepository = new InMemoryCheckInsRepository()
        Sut = new GetUserMetricsUseCase(checkInsRepository)
    })

    it('should  be able to checkin count from  User Metrics', async () => { 
      await checkInsRepository.Create({
        gym_id:'gym-01',
        user_id:'user-01'
      })
      await checkInsRepository.Create({
        gym_id:'gym-02',
        user_id:'user-01'
      })
     const {checkInsCount} = await Sut.execute({
        userId:'user-01'
     })    
       expect(checkInsCount).toEqual(2)
    })
})