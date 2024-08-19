const express=require('express');
const route=express.Router();
const geoFrameController=require('./../controller/geoFrame.controller');

route.post('/geoFrame/create',(req,res)=>{
     geoFrameController.createGeoFrame(req,res)
})



route.patch('/geoFrame/updateById',(req,res)=>{
    geoFrameController.updateGeoFrame(req,res)
})
route.get('/geoFrame/getAll',(req,res)=>{
    geoFrameController.getAllGeoFrame(req,res)
})




route.get('/geoFrame/getById/:id',(req,res)=>{
    geoFrameController.getGeoFrame(req,res)
})




route.delete('/geoFrame/deleteById/:id',(req,res)=>{
    geoFrameController.deleteGeoFrame(req,res)
})



module.exports=route