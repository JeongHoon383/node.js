import express from 'express';
import * as dwitterController from '../controller/dwitterController.js';
// import ejs from 'ejs';
// import dbConfig from '../db/database.js';

// const conn = dbConfig.init();
// dbConfig.connect(conn);

const router = express.Router();

router.use(express.json());
router.use(express.urlencoded());

// 1. GET: /dwitter - All Dwitter List
router.get('/', dwitterController.getAll);  

// 2. POST: /dwitter - tweet create
router.post('/', dwitterController.create);

// 3. GET: /dwitter/:id - My Dwitter List
router.get('/:id', dwitterController.getDwitter);

// 4. PUT: /dwitter/:id - My Dwitter update
router.put('/', dwitterController.update);

// 5. DELETE: /dwitter/:id - My Dwitter delete 
router.delete('/', dwitterController.remove);

export default router;