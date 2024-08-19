const poiService=require('../service/poi.service');


const createPOI=async function(req,res){
    try {
        return poiService.createPOI(req,res);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}





const getPOI=async function(req,res){
    try {
        return poiService.getPOI(req,res);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const getPOIList=async function(req,res){
    try {
        return poiService.getPOIList(req,res);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}






const updatePOI=async function(req,res){
    try {
        return poiService.updatePOI(req,res);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}


const deletePOI=async function(req,res){
    try {
        return poiService.deletePOI(req,res);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}






module.exports={createPOI,getPOI, getPOIList, updatePOI,deletePOI}