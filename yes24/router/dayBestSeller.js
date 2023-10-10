import express from 'express'
import * as list from './data.js'

const router = express.Router()

router.get('/:page', (req, res, next) => {
  res.json([{title:dayBestSeller.title}])
})

export default router