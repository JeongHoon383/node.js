import express from 'express'
import * as list from './data.js'
import ejs from 'ejs'

const router = express.Router();
const bookList = [];

router.get('/', (req, res, next) => {
  ejs
  .renderFile('./template/list.ejs', {})
  .then((data) => res.end(data))
});

router.get('/:page', (req, res, next) => {
  res.json(list.bestSellerList[0].title)
})



export default router;