import express from 'express';
import * as controller from '../controller/bestSellerController.js'

const router = express.Router();

router.get('/', controller.getList)

router.get('/:page', (req, res) => {
  res.json(list.bestSellerList);
});

export default router;