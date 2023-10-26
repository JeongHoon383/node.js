import express from 'express';
import dwitterRouter from './router/dwitter.js';
import loginRouter from './router/loginRouter.js'

const app = express();
app.use('/dwitter', dwitterRouter);
app.use('/login', loginRouter);

app.listen(8080, function(){ 
  console.log("server start~!!");
});

