//MODULES
import dotenv from "dotenv"
dotenv.config()

import express from 'express'
import cors from 'cors'
import cookie from 'cookie-parser'
import upload from 'express-fileupload'
//LOCAL
import config from './config'

import userRouter from './users/user_router'
import tokenRouter from "./tokens/token_router"
import productRouter from "./products/product_router"
import cartRouter from './cart/cart_router'
import analiticsRouter from "./analitics/analitics_router"

const app = express()
const PORT = config.API_PORT || 9000

let whiteList = [ config.API_SERVER, config.CLIENT_SERVER ]
console.log(whiteList)
const corsOptions = {
    credentials:true,
    origin: whiteList,
    methods: [
        "GET","HEAD","PUT","PATCH","POST","DELETE"
    ],
    // preflightContinue: false,
    optionsSuccessStatus: 200

}

app.use(express.json())

app.use(upload());
app.use(cors(corsOptions))
app.use(cookie())

app.use('/user', userRouter)
app.use('/token', tokenRouter)
app.use('/product', productRouter)
app.use('/cart', cartRouter)
app.use('/analitics', analiticsRouter)

app.listen(PORT, ()=>console.log(`server started on port: ${PORT}`))