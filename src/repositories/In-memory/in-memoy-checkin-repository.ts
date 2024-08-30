import { CheckIn, Prisma } from "@prisma/client";
import { randomUUID } from "crypto";
import { CheckInsRepository } from "../check-ins-repository";
import dayjs from "dayjs";

export class InMemoryCheckInsRepository implements CheckInsRepository{
  public itens : CheckIn[] = []


 async findByUserIdOnDate(userId: string, date: Date) {

  const startOfTheDay = dayjs(date).startOf('date')
  const endOfTheDay =dayjs(date).endOf('date')


    const checkInOnSameDate = this.itens.find((checkin)=>{
      const checkInDate = dayjs(checkin.created_at)
      const isOnSameDate = checkInDate.isAfter(startOfTheDay) && checkInDate.isBefore(endOfTheDay)
    
      return checkin.user_id===userId && isOnSameDate
    })

    if(!checkInOnSameDate){

      return null
    }
    return checkInOnSameDate
    


  }








  async Create(data: Prisma.CheckInUncheckedCreateInput) {

       const checkIn = {

        id : randomUUID(),
        user_id : data.user_id,
        gym_id:data.gym_id,
        validated_at : data.validated_at ? new Date(data.validated_at) : null,
        created_at : new Date()

      }

       this.itens.push(checkIn)

     return  checkIn
     

      
    }


}