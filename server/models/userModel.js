import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    verifyotp: {type: String, default: ''}, 
    verifyOtpExpireAt: {type: Number, default: 0}, 
    isAccountVerified: {type: Boolean, default: false}, 
    resetotp: {type: String, default: ''}, 
    resetOtpExpireAt: {type: Number, default: 0}, 
})

const userModel = mongoose.model("users",userSchema);
export default userModel;