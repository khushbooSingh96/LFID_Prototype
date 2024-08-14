const express=require('express');
const route=express.Router();
const campaignController=require('./../controller/campaign.controller');

route.post('/campaign/create',(req,res)=>{
     campaignController.createCampaign(req,res)
})



route.patch('/campaign/updateById',(req,res)=>{
    campaignController.updateCampaign(req,res)
})
route.get('/campaign/getById/:id',(req,res)=>{
    campaignController.getCampaign(req,res)
})




route.get('/campaign/geoFrameData',(req,res)=>{
    campaignController.getGeoFrameData(req,res)
})



route.get('/campaign/getAll',(req,res)=>{
    campaignController.getAllCampaign(req,res)
})


route.get('/campaign/getCountryList',(req,res)=>{
    campaignController.getCountryList(req,res)
})



route.get('/campaign/getCountryDetails/:countryName',(req,res)=>{
    campaignController.getCountryDetails(req,res)
})


route.get('/campaign/getCountriesState/:countryName',(req,res)=>{
    campaignController.getCountriesState(req,res)
})



route.get('/campaign/getPOI',(req,res)=>{
    campaignController.getPOI(req,res)
})


route.delete('/campaign/deleteById/:id',(req,res)=>{
    campaignController.deleteCampaign(req,res)
})



module.exports=route