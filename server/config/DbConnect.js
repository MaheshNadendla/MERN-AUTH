import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config();
const DbConnect = async()=>{
    mongoose.connection.on("connected",()=>{
        console.log("db connected");
    })
    try {
        await mongoose.connect(`${process.env.DB_URL}/auth`);
    } catch (error) {
        console.log(error.message);
    }

    
}

export default DbConnect;