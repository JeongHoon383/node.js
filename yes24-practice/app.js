import express from 'express';
import bestSellerRouter from './router/bestSeller.js'
import dayBestSellerRouter from './router/dayBestSeller.js'
import hotPriceBestSellerRouter from './router/hotPriceBestSeller.js'
import monthWeekBestSellerRouter from './router/monthWeekBestSeller.js'
import realTimeBestSellerRouter from './router/realTimeBestSeller.js'
import steadySellerRouter from './router/steadySeller.js'

const app = express()

app.use('/bestSeller', bestSellerRouter);
app.use('/RealTimeBestSeller', realTimeBestSellerRouter)
app.use('/dayBestSeller', dayBestSellerRouter)
app.use('/hotPriceBestSeller', hotPriceBestSellerRouter)
app.use('/monthWeekBestSeller', monthWeekBestSellerRouter)
app.use('/steadySeller', steadySellerRouter)

app.listen(8080);