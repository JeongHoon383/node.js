import express from 'express'
import newsRouter from './router/new.js'

const app = express();

app.use('/news', newsRouter);

app.listen(8080);
