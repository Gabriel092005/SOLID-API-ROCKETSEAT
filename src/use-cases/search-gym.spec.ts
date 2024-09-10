
import {expect , it , describe,beforeEach} from 'vitest'
import { InMemoryGymsRepository } from '@/repositories/In-memory/in-memory-gyms-repository'
import { SearchGymUseCase } from './search-gyms'
import { title } from 'process'
import { skip } from 'node:test'


let GymsRepository:InMemoryGymsRepository
let Sut : SearchGymUseCase

describe('Fetch User Check-in History Use Case',()=>{
    beforeEach(async()=>{

        GymsRepository = new  InMemoryGymsRepository()
        Sut = new SearchGymUseCase(GymsRepository)
    })

    it('should  be able to  search fro Gym', async () => { 
      await GymsRepository.create({
        title : 'Javascript Gym',
        description : null,
        phone :null,
        latitude: -27.2092052,
        longitude: -49.6401091,
      })
      await GymsRepository.create({
        title :'Typescript',
        description : null,
        phone :null,
        latitude: -27.2092052,
        longitude: -49.6401091,
     
      })
     const {gyms} = await Sut.Execute({
          query : 'Javascript',
          page :1
     })    
       expect(gyms).toHaveLength(1)
       expect(gyms)
       .toEqual([  expect.objectContaining({title:'Javascript Gym'}),])
    })

    skip('should  be able to  fetch paginated check-in History', async () => { 
       for(let i =1 ; i<=22 ;i++){
        await GymsRepository.create({
          title:`Javascript Gym-${i}`,
          description : null,
          phone :null,
          latitude: -27.2092052,
          longitude: -49.6401091,
        })
       }
   
     const {gyms} = await Sut.Execute({
        query :'Javascript',
        page : 2,
     })    
       expect(gyms).toHaveLength(1)
       expect(gyms)
       .toEqual([

        expect.objectContaining({title : 'Javascript Gym 21'}),
        expect.objectContaining({title : 'Javascript Gym 22'}),

 


       ])
    })
})