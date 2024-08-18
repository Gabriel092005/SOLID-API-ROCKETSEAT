import 'dotenv/config'
import { z } from 'zod'

const envSchema =  z.object({

    NODE_ENV : z.enum(['dev','test','production']) .default('dev')

})