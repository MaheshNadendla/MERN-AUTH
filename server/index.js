import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import DbConnect from "./config/DbConnect.js"
import authRouter from "./routers/authRouter.js"

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());

DbConnect();


const port = process.env.PORT || 4000;

// app.use('/',(req,res)=>{
//     return res.send("hello");
// })

app.use("/api/auth",authRouter);


app.listen(port,()=>{
    console.log(`server is running on port : ${port}`)
})