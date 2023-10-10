import express from 'express'

const router = express.Router()
const replyList = [];

router.use(express.json());
router.use(express.urlencoded());

router.get('/:nid', (req, res, next) => {
  const nid = req.params.nid;
  const rlist = replyList.filter(reply => reply.nid === nid);
  res.json(rlist);
});

//댓글 등록 : POST : /reply
router.post('/', (req, res, next) => {
  const {nid, replyContent} = req.body
  replyList.push({nid, replyContent})
  res.status(201).send('create success!')
})

export default router;