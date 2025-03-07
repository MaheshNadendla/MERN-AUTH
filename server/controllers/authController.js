import userModel from "../models/userModel.js";



const resgister = async(req,res)=>{


    try {

        const {name,email,password}= req.body;

        if(!name||!email||!password)
        {
            return res.status(404).send({sucess:false,message:"missing data"})
        }

    

        const isthere = await userModel.findOne({email:email});

        console.log("mm",isthere)

        if(isthere){
            return res.status(208).send({sucess:false,message:"user already exists"})
        }


        const newUser = userModel({name,email,password});
        await newUser.save();

        return res.status(201).send({sucess:false,message:"user created"})
        
    } catch (error) {
        
        return res.json(error);

    }
}


export default resgister;