import express from 'express'
import practice from './router/practice.js'

const app = express();
app.use('/practice', practice)


app.listen(9090);