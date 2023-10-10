import express from 'express'
import ejs from 'ejs'

const router = express.Router()

router.get('/', (req, res, next) => {
  ejs
  .renderFile('./template/practice.ejs')
  .then((data) => res.end(data))
})

export default router