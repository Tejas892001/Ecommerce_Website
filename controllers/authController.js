import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import userModel from "../models/userModel.js";
import JWT from 'jsonwebtoken';

export const registerController = async(req,res) =>{
    try{
        const {name,email,password,phone,address} = req.body;
        // validation
        if(!name){
            return res.send({error:'Name is Required'});
        }
        if(!email){
            return res.send({error:'Email is Required'});
        }
        if(!password){
            return res.send({error:'Password is Required'});
        }
        if(!phone){
            return res.send({error:'Phone Number is Required'});
        }
        if(!address){
            return res.send({error:'Address is Required'});
        }

        // Check is the user already exist
        const existingUser = await userModel.findOne({email});

        if(existingUser){
            return res.status(200).send({
                success:true,
                message:'Already registered please login',
            })
        }

        // hash password
        const hashedPassword = await hashPassword(password);

        // save new user to databse
        const user = await new userModel({name,email,phone,address,password:hashedPassword}).save();
        return res.status(201).send({
            success:true,
            message:'You registered successfully',
            user
        })


    }catch{
        console.log(error);
        res.status(500).send({
            success:false,
            message:'Error in Registration',
            error
        })
    }
}


// post login
export const loginController = async(req,res) => {
    try{
        const {email,password} = req.body;
        // validation
        if(!email || !password){
            return res.status(404).send({
                success:false,
                message:'Invalid email or password'
            });
        }

        // check user
        const user = await userModel.findOne({email});
        if(!user){
            return res.status(404).send({
                success:false,
                message:'Yor are not registered'
            })
        }
        const match = await comparePassword(password,user.password);
        if(!match){
            return res.status(200).send({
                success:false,
                message:'Invalid Password'
 
           })
        }
        
        // token
        const token = await JWT.sign({_id:user._id},process.env.JWT_SECRET,{expiresIn:"7d",});
        res.status(200).send({
            success:true,
            message:'Login successfully',
            user:{
                _id:user._id,
                name:user.name,
                email:user.email,
                phone:user.phone,
                address:user.address,
            },
            token
        });

    }catch(error){
          console.log(error)
          res.status(500).send({
            success:false,
            message:'Error in login',
            error
          })
    }
};


// test controller
export const testController = (req,res) =>{
       res.send("protected route");
};