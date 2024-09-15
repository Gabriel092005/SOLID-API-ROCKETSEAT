import { Prisma, Gym } from "@prisma/client";
import {FindManyNearByParams, GymRepository } from "../gym-repository";
import { prisma } from "@/lib/prisma";


export class PrismaGysmRepository implements GymRepository{
    
    async findById(id: string){
        const Gym = await prisma.gym.findUnique({
            where:{
                id
            }
        })
        return Gym
    }

   async findManyNearBy({latitude,longitude}: FindManyNearByParams) {
     const gyms = await prisma.$queryRaw<Gym[]>`
     SELECT * FROM gyms
     WHERE (6371*acos(cos(radians(${latitude}) * cos(radians(latitude)) *cos(radians(longitude)) - radians(${longitude})) + sin(radians(${latitude}))  * sin(radians(latitude))) <=10)
     `
         return gyms
    }
  async  create(data: Prisma.GymCreateInput) {
         const Gym = await prisma.gym.create({
            data
         })
         return Gym
    }

   async SearchMany(query: string, page: number){
        const Gyms  = await prisma.gym.findMany({
            where:{
                title:{
                    contains: query
                }
            },
            take:20,
            skip:(page-1)*20
        })

        return Gyms
    }

}