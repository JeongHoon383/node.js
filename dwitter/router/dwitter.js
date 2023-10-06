import express from 'express';
import ejs from 'ejs';

const router = express.Router();
let dwitterList = [];

router.use(express.json());
router.use(express.urlencoded());

// 1. GET : /dwitter - All Dwitter List
  router.get('/', (req, res, next) => {
    const renderList = dwitterList;
    ejs
    .renderFile('./template/index.ejs', {renderList})
    .then((data) => { res.end(data); });
  })
//2. POST : /dwitter - tweet create
router.post('/', (req, res, next) => {
  const {id, name, content} = req.body;
  const pid = Math.trunc(Math.random() * 1000); //math.trunc --> 소수점 다 없앰
  let date = new Date(Date.now());
  date = date.toLocaleDateString();
  dwitterList.push({pid, id, name, date, content});
  //console.log(dwitterList);
  res.redirect('/dwitter')
})
//3. GET : /dwitter?id=자신의 아이디 - My Dwitter List
//  GET : /dwitter/:id
router.get('/:id', (req, res, next) => {
  const id = req.params.id // 넘어오는 id 받음
  const lenderList = dwitterList.filter((dwitter) => dwitter.id === id)
  ejs
  .renderFile('./template/index.ejs', {renderList})
  .then((data) => res.end(data)); //data --> index.ejs 파일에 renderList를 넣어서 만든 html 파일, 클라이언트에 전송해야됨, 클라이언트는 res로만 전송 가능
});


//4. PUT : /dwitter/:id - My Dwitter update
router.put('/', (req, res, next) => {
  const {pid, content} = req.body;
  //console.log({pid, content});
  dwitterList.filter((dwitter) => {
    if(dwitter.pid == parseInt(pid)){
      dwitter.content = content;
    }
  });
});

//5. DELETE : /dwitter/:id - My Dwitter delete
router.delete('/', (req, res, next) => {
  const {pid} = req.body;
  dwitterList = dwitterList.filter((dwitter) =>  dwitter.pid !== parseInt(pid)); //if문 요약  
  // dwitterList = dwitterList.filter((dwitter) => { 
  //   if(dwitter.pid !== parseInt(pid)){
  //     return dwitter
  //   }
  // })
  console.log(dwitterList);
  res.status(204).send('delete sucess!');
})



export default router;