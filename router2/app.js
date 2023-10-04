import express from 'express'
import postsRouter from './route/posts.js'
import userRouter from './route/user.js'

const app = express();

app.use('/posts', postsRouter)
app.use('/user', userRouter)


app.listen(8080)