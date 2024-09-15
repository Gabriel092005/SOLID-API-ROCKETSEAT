
import {Gym, Prisma } from "@prisma/client";

export interface FindManyNearByParams
{
    latitude : number
    longitude : number
}

export interface GymRepository 
{

    findById(id : string): Promise <Gym| null> 
    findManyNearBy(params:FindManyNearByParams):Promise<Gym[]> 
    create(data : Prisma.GymCreateInput) : Promise<Gym>
    SearchMany(query : string,page:number):Promise<Gym[]>
   

}
 