import express from 'express'
import postsRouter from './route/posts.js'

const app = express();

app.use('/posts', postsRouter)


app.listen(8080)