import express from 'express' //우린 express 환경에서 작업한다
import ejs from 'ejs' // 여기서 ejs를 app.js에 연결시킬거다

const router = express.Router(); //express 작업
let newsList = [];

router.use(express.json());
router.use(express.urlencoded());

router
.get('/', (req, res, next) => {
  ejs
  .renderFile('./template/content.ejs') // '경로', {데이터이름표 : 전송할데이터}
  .then((data) => res.end(data))
})

export default router;