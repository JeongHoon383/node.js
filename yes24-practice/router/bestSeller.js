import express from 'express';
import ejs from 'ejs';

const router = express.Router();

router.get('/', (req, res, next) => {
  ejs
  .renderFile('./template/list.ejs', {})
  .then((data) => res.end(data));
})

export default router;