const express=require('express');
const route=express.Router();
const poiController=require('./../controller/poi.controller');

route.post('/poi/create',(req,res)=>{
     poiController.createPOI(req,res)
})



route.patch('/poi/updateById',(req,res)=>{
    poiController.updatePOI(req,res)
})
route.get('/poi/getById/:id',(req,res)=>{
    poiController.getPOI(req,res)
})



route.get('/poi/getAll',(req,res)=>{
    poiController.getPOIList(req,res)
})


route.delete('/poi/deleteById/:id',(req,res)=>{
    poiController.deletePOI(req,res)
})



module.exports=route