const express=require('express')
const app=express()
require('dotenv').config()
const cors=require('cors')
const bodyParser=require('body-parser')
const router=require('./authRoutes/router')
require('./connection/mongodb')
const cookieParser=require('cookie-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors({origin:'*'}))
app.use(express.json())
app.use(cookieParser())
app.use(router)

app.listen(process.env.PORT,(err)=>{
    if(!err){
        console.log(`Server is working on port ${process.env.PORT}`);
    }
})