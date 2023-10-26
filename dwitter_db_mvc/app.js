import express from 'express';
import dwitterRouter from './router/dwitterRouter.js';
import loginRouter from './router/loginRouter.js'
import signupRouter from './router/signUpRouter.js'

const app = express();
app.use('/dwitter', dwitterRouter);
app.use('/login', loginRouter);
app.use('/signUp', signupRouter);

app.listen(8080, function(){ 
  console.log("server start~!!");
});

