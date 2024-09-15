
import { makeGetUserProfileUseCase } from "@/use-cases/factories/make-get-user-profile-use-case";
import { FastifyRequest,FastifyReply } from "fastify";

export async function Profile(request:FastifyRequest,reply:FastifyReply) {


  const getUserProfile = makeGetUserProfileUseCase()

  const {user} = await getUserProfile.execute({
    userId : request.user.sub,
  })
  console.log(request.user.sub)
  console.log(request.headers)

    
    return reply.status(200).send({
      user,
    })
   }




   



