import express from 'express'
const router = express.Router()

router.get('/', (req, res, next) => {
  res.send('GET: /user')
})

router.post('/', (req, res, next) => {
  res.send('POST: /user')
});

router.put('/:id', (req, res, next) => {
  res.send(`PUT: /user/:id ==> ${req.params.id}`);
})

router.delete('/:id', (req, res, next) => {
  res.send('DELETE: /user/:id');
})

export default router;