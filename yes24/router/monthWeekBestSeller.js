import express from 'express';
import * as list from './data.js';

const router = express.Router();

router.get('/:page', (req, res, next) => {
  res.json(list.mothWeekBestSellerList);
});

export default router;