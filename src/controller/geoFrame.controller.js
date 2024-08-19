const geoFrameService=require('../service/geoFrame.service');


const createGeoFrame=async function(req,res){
    try {
        return geoFrameService.createGeoFrame(req,res);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}





const getAllGeoFrame=async function(req,res){
    try {
        return geoFrameService.getAllGeoFrame(req,res);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}


const getGeoFrame=async function(req,res){
    try {
        return geoFrameService.getGeoFrame(req,res);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}



const updateGeoFrame=async function(req,res){
    try {
        return geoFrameService.updateGeoFrame(req,res);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}


const deleteGeoFrame=async function(req,res){
    try {
        return geoFrameService.deleteGeoFrame(req,res);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}





module.exports={createGeoFrame,getAllGeoFrame,getGeoFrame, updateGeoFrame,deleteGeoFrame}