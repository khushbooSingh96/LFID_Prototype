const {mapBoxApi,fetchCountryList,extractAdministrativeDivisions,poiData,fetchCountriesStates,fetchCountryDetail, fetchAdministrativeDivisions} = require('../config/mapBoxGeoFrame');
const { POI } = require('../model/poi.model');


const createPOI=async function(req,res){
try {
        let { showOnMap,categories,onlyWithGeoFrame,campaignId,} = req.body;
        let newPOI= new POI({ showOnMap,categories,onlyWithGeoFrame,campaignId});
        
          const savedPOI = await newPOI.save();
          console.log(`saved POI ${JSON.stringify(savedPOI)}`);
          res.status(201).json({message:"sucessfully created", data:savedPOI});
       
} catch (error) {
    res.status(400).json({ message: error.message });
} 
}
 


const getPOIList= async function(req, res)  {
  
  try {
   
   const poiResult=await POI.find()
    if (!poiResult) {
      return res.status(404).send({ message: 'POI not found' });
    }
  
          res.status(201).send({message:"sucessfully fetched",data:poiResult});
       
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};


const getPOI= async function(req, res)  {
  
  try {
  const poiResult=await POI.findById(id); 
    console.log(`state === ${poiResult}`);
    if (!poiResult) {
      return res.status(404).send({ message: 'POI not found' });
    }
  
          res.status(201).send({message:"sucessfully fetched",data:poiResult});
       
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
  
  
const updatePOI= async function(req, res)  {
  const {showOnMap,country,onlyWithGeoFrame} = req.body;
  if(!id)res.status(400).json({message:"Please enter Id"})
  try {
    const user = await POI.findByIdAndUpdate(id,{country,onlyWithGeoFrame,showOnMap});
    if (!user) {
      return res.status(404).json({ message: 'POI not found' });
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};



  
const deletePOI=async (req, res) => {
  const { id } = req.params;
  try {
    const deletedUser = await POI.findByIdAndDelete(id);
    if (!deletedUser) {
      return res.status(404).json({ message: 'POI not found' });
    }
    res.json({ message: 'POI deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }}


  



module.exports={createPOI,getPOI, getPOIList,deletePOI, updatePOI}