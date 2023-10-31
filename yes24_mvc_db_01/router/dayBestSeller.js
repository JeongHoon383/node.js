import express from 'express';
import * as controller from '../controller/dayBestSellerController.js';


const router = express.Router();

router.get('/:page', controller.getListPage);

export default router;

