const express=require('express');
const route=express.Router();
const userController=require('./../controller/user.controller');
const { verifyToken } = require('../config/jsonWebtoken');
const pageRequestLimiter = require('../config/requestRateLimiter');

route.post('/user/create',(req,res)=>{
     userController.createUser(req,res)
})



route.patch('/user/updateById',verifyToken,(req,res)=>{
    userController.updateUser(req,res)
})
route.get('/user/getById/:id',verifyToken,(req,res)=>{
    console.log(`req==== ${JSON.stringify(req)}`);
    userController.getUser(req,res)
})


route.post('/user/login',pageRequestLimiter,(req,res)=>{
    userController.loginUser(req,res)
})

route.delete('/user/deleteById/:id',verifyToken,(req,res)=>{
    userController.deleteUser(req,res)
})



route.post('/user/logout',verifyToken,(req,res)=>{
    userController.logout(req,res)
})



module.exports=route