import express from 'express'
import ejs from 'ejs'

const router = express.Router();
const newsList = []; //{nid, url, title, content, rdate}

router.use(express.json()); //express json 객체 사용시 사용 문법
router.use(express.urlencoded()); // 없으면 url 인식 못함

router.get('/:nid', (req, res, next) => {
  const nid = req.params.nid //req 받음, res 요청함
  const newsContent = newsList.filter((news) => news.nid === parseInt(nid))[0] //
  console.log(newsContent);
  ejs
  .renderFile('./template/content.ejs', {newsContent})
  .then((data) => res.end(data));
})

router.get('/', (req, res, next) => {
  ejs
  .renderFile('./template/list.ejs', {newsList})
  .then((data) => res.end(data))
})

router.post('/register', (req, res, next) => {
  const {url, title, content} = req.body; //ejs에 있는 name 데이터를 가져옴
  const nid = Math.trunc(Math.random() * 1000)
  const rdate = new Date(Date.now())
  newsList.push({nid, url, title, content, rdate});
  res.redirect('/news');
})

export default router