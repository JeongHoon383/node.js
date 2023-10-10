import express from 'express' //우린 express 환경에서 작업한다
import ejs from 'ejs' // 여기서 ejs를 app.js에 연결시킬거다

const router = express.Router(); //express 작업
let newsList = [];

router.use(express.json());
router.use(express.urlencoded());

router.get('/:nid', (req, res, next) => {
  const nid = req.params.nid
  const newsContent = newsList.filter((news) => news.nid === parseInt(nid))[0]
  console.log(newsContent);
  ejs
  .renderFile('./template/content.ejs')
  .then((data) => res.end(data))
})

router.get('/', (req, res, next) => {
  ejs
  .renderFile('./template/list.ejs')
  .then((data) => res.end(data)) //그냥 문법?, 안쓰면 출력 안됨
})

router
.get('/', (req, res, next) => {
  ejs
  .renderFile('./template/content.ejs') // '경로', {데이터이름표 : 전송할데이터}
  .then((data) => res.end(data))
})

router
.post('/register', (req, res, next) => {
  const {url, title, content} = req.body //ejs에 있는 name 데이터를 가져옴
  const nid = Math.trunc(Math.random() * 1000) // 소수 자릿수를 제거하여 숫자의 정수 부분을 반환합니다.
  const rdate = new Date(Date.now())
  newsList.push(nid, url, title, content, rdate)
  res.redirect('/news')
})




export default router;