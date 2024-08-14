const campaignService=require('../service/campaign.service');


const createCampaign=async function(req,res){
    try {
        return campaignService.createCampaign(req,res);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}





const getCampaign=async function(req,res){
    try {
        return campaignService.getCampaign(req,res);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}


const getGeoFrameData=async function(req,res){
    try {
        return campaignService.getGeoFrameData(req,res);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}


const getPOI=async function(req,res){
    try {
        return campaignService.getPOI(req,res);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const getCountryList=async function(req,res){
    try {
        return campaignService.getCountryList(req,res);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}



const getCountryDetails=async function(req,res){
    try {
        return campaignService.getCountryDetails(req,res);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}
const getCountriesState=async function(req,res){
    try {
        return campaignService.getCountriesState(req,res);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}


const getAllCampaign=async function(req,res){
    try {
        return campaignService.getAllCampaign(req,res);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}


const updateCampaign=async function(req,res){
    try {
        return campaignService.updateCampaign(req,res);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}


const deleteCampaign=async function(req,res){
    try {
        return campaignService.deleteCampaign(req,res);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}



module.exports={createCampaign,getCampaign,getPOI,  getCountriesState,getCountryDetails, updateCampaign,deleteCampaign,getCountryList, getAllCampaign, getGeoFrameData}