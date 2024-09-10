
// import {expect , it , describe,beforeEach} from 'vitest'
// import { InMemoryGymsRepository } from '@/repositories/In-memory/in-memory-gyms-repository'
// import { FetchNearByGymUseCase } from './fetch-nearBy-Gym'


// let GymsRepository:InMemoryGymsRepository
// let Sut : FetchNearByGymUseCase

// describe('Fetch NearBy Gyms Use Case',()=>{
//     beforeEach(async()=>{

//         GymsRepository = new  InMemoryGymsRepository()
//         Sut = new FetchNearByGymUseCase(GymsRepository)
//     })

//     it('should  be able to  fetch NearBy Gym', async () => { 
//       await GymsRepository.create({
//         title:'Near Gym',
//         description : null,
//         phone:null,
//         latitude:-27.2092052,
//         longitude:-49.6401091,
//       })
//       await GymsRepository.create({
//         title:'Far Gym',
//         description : null,
//         phone:null,
//         latitude:-27.0610928,
//         longitude:-49.5229501,
     
//       })
//      const { gyms } = await Sut.Execute(
//         {
//             userLatitude:-27.2092052,
//             userLongitude:-49.6401091,
//         }
//     )    
//        expect(gyms).toHaveLength(1)
//        expect(gyms).toEqual([expect.objectContaining({title:'Near Gym'})])
//     })

// })