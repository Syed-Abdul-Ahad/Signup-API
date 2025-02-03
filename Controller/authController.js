const User = require("./../Model/authModel")
const express = require("express")
const jwt = require("jsonwebtoken")

const SECRET_STR = "1234qwer tyui9876"
const expire = "7d"

const signToken = (ID)=>{
    return jwt.sign({id:ID},SECRET_STR,{
        expiresIn: expire
    })
}


exports.signUp = async (req,res)=>{
    try{
        const {name,email,password,city,phone} = req.body;
        
        const testUser = await User.findOne({email:email})

        if(testUser){
            throw new Error("User with this email already exists")
        }
        const user = await User.create({name,email,password,city,phone})


        const token = signToken(user._id)

        res.status(201).json({
            status: "success",
            data:{
                user,
                token
            }
        })

    }catch(err){
        res.status(400).json({
            status: "fail",
            message: err.message
        })
    }
}