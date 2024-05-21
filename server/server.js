import express from "express"
import dotenv from "dotenv"
//dotenv configuration
dotenv.config()

//custom import 
import { connectDB } from "./config/db.js"

//server
const app = express()


//database connection 
connectDB()

//port number
const port = process.env.PORT


//server started s
app.listen(port ,(req,res)=>{
    console.log(`server started at port ${port}`)
})