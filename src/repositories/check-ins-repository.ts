import { CheckIn, Prisma, User } from "@prisma/client";

export interface CheckInsRepository{
    create(data: Prisma.CheckInUncheckedCreateInput) : Promise<CheckIn>
}