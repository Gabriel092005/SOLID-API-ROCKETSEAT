import { app } from "./app";

app.listen({
    host:'0.0.0.0',  //evitar problema com o consumo no front
    port:3333

}).then(()=>
  
    console.log('🚀HTTP Server Running')


) 


///o listen retorna uma promisse