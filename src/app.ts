import { fastify } from "fastify";
import {PrismaClient } from '@prisma/client'

  const prisma = new PrismaClient()

  export const app = fastify()

  prisma.user.create({
    data:{
        
        nome:'Gabriel Manuel',
        email: 'gabriel@gmail.com'
        
    }
  })