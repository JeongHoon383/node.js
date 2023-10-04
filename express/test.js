import express from 'express'
const router = express.Router

router
.get('/', (req, res, next) => {
  const {keyword, name} = req.query;
  //const keyword = req.query.keyword;
  //const name = req.query.name;
  res.send(`GET: /test ---> ${keyword}, ${name}`);
})

export default router