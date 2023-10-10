import express from 'express'
import bestSellerRouter from './router/bestSeller.js'
import dayBestSellerRouter from './router/dayBestSeller.js'
import hotPriceBestSellerRouter from './router/hotPriceBestSeller.js'
import monthWeekBestSellerRouter from './router/monthWeekBestSeller.js'
import realTimeBestSellerRouter from './router/realTimeBestSeller.js'
import steadySellerRouter from './router/steadySeller.js'

const app = express();

app.use('/BestSeller', bestSellerRouter); //BestSeller --> 주소창에 / 뒤에 오는것 
app.use('/dayBestSeller', dayBestSellerRouter); 
app.use('/hotPriceBestSeller', hotPriceBestSellerRouter); 
app.use('/monthWeekBestSeller', monthWeekBestSellerRouter); 
app.use('/realTimeBestSeller', realTimeBestSellerRouter);  
app.use('/steadySeller', steadySellerRouter);  




app.listen(7070);