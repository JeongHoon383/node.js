import express from 'express'
import * as loginController from '../controller/loginController.js'

const router = express.Router();

router.use(express.json());
router.use(express.urlencoded());

router.post('/', loginController.login) //rr 형태로 하는 것도 가능하지만, mvc 패턴으로 코드를 짜야됨, 컨트롤러로 제어권을 넘김, 라우터에서는 호출만

export default router;