import express from 'express';
import dwitterRouter from './router/dwitterRouter.js';

const app = express();
app.use('/dwitter', dwitterRouter);

app.listen(8080, function(){ 
  console.log("server start~!!");
});