import { app } from "./app";
import { env } from "./Env";

app.listen({
    host:'0.0.0.0',  //evitar problema com o consumo no front
    port: env.PORT

}).then(()=>
  
    console.log('🚀HTTP Server Running')


) 


///o listen retorna uma promisse