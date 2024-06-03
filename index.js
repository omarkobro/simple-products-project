import express from 'express';
import DB_connection from './DB/connection.js';

import userRouter from './src/modules/user/user.route.js'
import productRouter from './src/modules/product/product.route.js'

let app = express()

app.use(express.json())
DB_connection;
app.use(userRouter)
app.use(productRouter)
app.listen(3000, ()=>{
    console.log("server is running fine on host 3000");
})