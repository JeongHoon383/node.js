import express from 'express';
import newsRouter from './router/news.js'

const app = express();

app.use('/news', newsRouter)

app.listen(8080)