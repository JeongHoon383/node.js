import express from 'express' ;
import route from './route.js' ;
import testRouter from './test.js';
import joinRouter from './join.js';

const app = express();
app.use(express.json())


app.use('/', route) // use를 사용하면 아래 추가 문법을 안적어줘도 됨. route 하위에 있는 것들이 다 호출됨
//app.put('/:id', route)
//app.delete('/:id/:name/:address', route)
app.use('/test', testRouter)
app.use('/join', joinRouter)
//test.js 에서 /test 패스를 처리하도록 진행

//chaining --> 문법을 이어붙임
app.listen(8080);