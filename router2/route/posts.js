import express from 'express';

const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('GET: /posts')
})

router.post('/', (req, res, next) => {
  res.send('POST: /posts')
});

router.put('/:id', (req, res, next) => {
  res.send(`PUT: /posts/:id ==> ${req.params.id}`);
})

router.delete('/:id', (req, res, next) => {
  res.send('DELETE: /posts/:id');
})

export default router;