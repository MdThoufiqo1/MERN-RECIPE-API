const express=require('express')
const cors=require('cors')
const mongoose=require('mongoose')
const userRouter=require('./Routes/auth')
const recipeRouter=require('./Routes/reciper')
const cookieParser=require('cookie-parser')
require('dotenv').config()


const app=express()

app.use(cors({
    origin:["https://recipe-md.vercel.app"],
    methods:["GET","POST"],
    credentials:true
}))
app.use(cookieParser())
app.use(express.json())
app.use('/auth',userRouter)
app.use('/recipe',recipeRouter)//recipeapp

mongoose.connect(process.env.MONGO_URL

).then(() => console.log("MongoDB is connected..!"))
.catch((err) => console.log(err.message));


app.listen(process.env.PORT,()=>{
    console.log("server started")
})