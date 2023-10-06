import express from 'express'

const router = express.Router()
const replyList = []

router.use(express.json());
router.use(express.urlencoded());

//댓글 등록 : POST : /reply
router.post('/reply', (req, res, next) => {
  const {nid, replyContent} = req.body
  replyList.push({nid, replyContent})
  console.log(replyList);
  res.status(201).send('succes~')
})

export default router;