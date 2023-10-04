import express from 'express' ;
//const app = express(); 받아오는 서버는 한개여야함. 이미 app.js 에서 서버를 한개 만들었는데 또 만들게 되면 초기화가 됨 --> app이 새로 만들어지면 안됨, 그러면 어떻게 새로운 서버를 만드는가? (아래 계속)
const router = express.Router() // 앞쪽(app.js)에서 실행한 서버 접속 방식을 이어받아서 router 라는 새로운 서버를 만듬

router.get('/', 
        (req, res, next) => {
          console.log('first');
          res.send('[route] GET : /');
          next();
        },
        (req, res, next) => {
          console.log('second');
        }
)
.post('/login', (req, res, next) => {
  res.send('POST: /'); 
})
.put('/:id', (req, res, next) => {
  const id = req.params.id;
  res.send(`PUT: /:id ---> ${id}`);
})
.delete('/:id/:name/:address', (req, res, next) => {
  const {id, name, address} = req.params;
  //const id = req.params.id;
  //const name = req.params.name
  //const address = req.params.address
  res.send(`DELETE: /:id ---> ${id}, ${name}, ${address}`);
})

export default router;