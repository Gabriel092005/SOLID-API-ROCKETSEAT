import { fastify } from "fastify";

  export const app = fastify();
app.listen({
    host: '0.0.0.0', //evitar problema com o consumo no front
    port: 3333
}).then(() => console.log('     Server Running')


);
