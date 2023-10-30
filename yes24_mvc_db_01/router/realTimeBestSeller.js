import express from 'express';
import * as controller from '../controller/realTimeBestSellerController.js';

const router = express.Router();

router.get('/:page', controller.getListPage);

export default router;
