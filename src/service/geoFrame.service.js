const csvFileData = require('../config/csvWriter');
const {mapBoxApi,fetchCountryList,extractAdministrativeDivisions,poiData,fetchCountriesStates,fetchCountryDetail, fetchAdministrativeDivisions} = require('../config/mapBoxGeoFrame');
const { GeoFrame } = require('../model/geoFrame.model');

const createGeoFrame=async function(req,res){
try {
        let { country,counties,state,city,postalCode,dmas,district} = req.body;
        let newUser= new GeoFrame({ country,counties,postalCode,state,city,dmas,district});
        
          const savedUser = await newUser.save();
          console.log(`saved Campaign ${JSON.stringify(savedUser)}`);
          res.status(201).json({message:"sucessfully created", data:savedUser});
       
} catch (error) {
    res.status(400).json({ message: error.message });
} 
}
 
  
const getGeoFrame= async function(req, res)  {
  
  try {
    const { id } = req.params;
  
    const user = await GeoFrame.findById(id);
    if (!user) {
      return res.status(404).json({ message: 'GeoFrame not found' });
    }
  
          res.status(201).json({message:"sucessfully fetched",data:user});
       
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};









const getAllGeoFrame= async function(req, res)  {
  
    
    try {
      const user = await GeoFrame.find();
      if (!user) {
        return res.status(404).json({ message: 'GeoFrame not found' });
      }
    
            res.status(201).json({message:"sucessfully fetched",data:user});
         
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  
  
const updateGeoFrame= async function(req, res)  {
  const {name,country,city,state,dmas,district,postalCode,id} = req.body;
  if(!id)res.status(400).json({message:"Please enter Id"})
  try {
    const user = await GeoFrame.findByIdAndUpdate(id,{name,country,city,state,dmas,postalCode,district});
    if (!user) {
      return res.status(404).json({ message: 'GeoFrame not found' });
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};



  
const deleteGeoFrame=async (req, res) => {
  const { id } = req.params;
  try {
    const deletedUser = await GeoFrame.findByIdAndDelete(id);
    if (!deletedUser) {
      return res.status(404).json({ message: 'GeoFrame not found' });
    }
    res.json({ message: 'GeoFrame deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }}


  



module.exports={createGeoFrame,getAllGeoFrame, getGeoFrame, updateGeoFrame,deleteGeoFrame}