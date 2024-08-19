const csvFileData = require('../config/csvWriter');
const {mapBoxApi,fetchCountryList,extractAdministrativeDivisions,poiData,fetchCountriesStates,fetchCountryDetail, fetchAdministrativeDivisions} = require('../config/mapBoxGeoFrame');
const { Campaign } = require('../model/campaign.model');
const createCampaign=async function(req,res){
try {
        let { name} = req.body;
        let newUser= new Campaign({ name:name});
        
          const savedUser = await newUser.save();
          console.log(`saved Campaign ${JSON.stringify(savedUser)}`);
          res.status(201).json({message:"sucessfully created", data:savedUser});
       
} catch (error) {
    res.status(400).json({ message: error.message });
} 
}
 
  
const getCampaign= async function(req, res)  {
  
  try {
    const { id } = req.params;
  
    const user = await Campaign.findById(id);
    if (!user) {
      return res.status(404).json({ message: 'Campaign not found' });
    }
  
          res.status(201).json({message:"sucessfully fetched",data:user});
       
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


const getGeoFrameData= async function(req, res)  {
  
  try {
    const searchTerm = req.query.query;
  
    const user = await mapBoxApi(searchTerm)
   // console.log(`geo frame data===== ${JSON.stringify(user)}`);
    if (!user) {
      return res.status(404).send({ message: 'Geo frame not found' });
    }
  
          res.status(201).send({message:"sucessfully fetched",data:user});
       
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};




const getCountryList= async function(req, res)  {
  
  try {
   
    const user = await fetchCountryList()
    console.log(`list==== ${JSON.stringify(user)}`);
    const csvdata=await csvFileData(user)
    console.log(`success csv file`);
  
    if (!user) {
      return res.status(404).send({ message: 'Geo frame not found' });
    }
  
          res.status(201).send({message:"sucessfully fetched",data:user});
       
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};



const getCountryDetails= async function(req, res)  {
  
  try {
   const countryName=req.params.countryName
    const user = await fetchCountryDetail(countryName)
    if (!user) {
      return res.status(404).send({ message: 'Geo frame not found' });
    }
  
          res.status(201).send({message:"sucessfully fetched",data:user});
       
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const getCountriesState= async function(req, res)  {
  
  try {
   const country=req.params.countryName
    const user = await fetchCountriesStates(country)
    console.log(`state === ${user}`);
    if (!user) {
      return res.status(404).send({ message: 'Geo frame not found' });
    }
  
          res.status(201).send({message:"sucessfully fetched",data:user});
       
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};


const getPOI= async function(req, res)  {
  
  try {
   const {location,poiTypes}=req.body
    const user = await poiData(location,poiTypes)
    console.log(`state === ${user}`);
    if (!user) {
      return res.status(404).send({ message: 'Geo frame not found' });
    }
  
          res.status(201).send({message:"sucessfully fetched",data:user});
       
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
const getAllCampaign= async function(req, res)  {
  
    
    try {
      const user = await Campaign.find();
      if (!user) {
        return res.status(404).json({ message: 'Campaign not found' });
      }
    
            res.status(201).json({message:"sucessfully fetched",data:user});
         
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  
  
const updateCampaign= async function(req, res)  {
  const {name,country,city,state,dmas,district,postalCode,id} = req.body;
  if(!id)res.status(400).json({message:"Please enter Id"})
  try {
    const user = await Campaign.findByIdAndUpdate(id,{name,country,city,state,dmas,postalCode,district});
    if (!user) {
      return res.status(404).json({ message: 'Campaign not found' });
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};



  
const deleteCampaign=async (req, res) => {
  const { id } = req.params;
  try {
    const deletedUser = await Campaign.findByIdAndDelete(id);
    if (!deletedUser) {
      return res.status(404).json({ message: 'Campaign not found' });
    }
    res.json({ message: 'Campaign deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }}


  
const getDivisionData= async function(req, res)  {
  
  try {
   const countryName=req.params.country
    const user = await fetchAdministrativeDivisions(countryName)
    console.log(`list==== ${JSON.stringify(user)}`);
    //const csvdata=await csvFileData(user)
    //console.log(`success csv file`);
  
    if (!user) {
      return res.status(404).send({ message: 'Geo frame not found' });
    }
  
          res.status(201).send({message:"sucessfully fetched",data:user});
       
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};




module.exports={createCampaign,getPOI, getAllCampaign,getCampaign, getDivisionData,getCountriesState,getCountryDetails, getCountryList,updateCampaign,deleteCampaign,getGeoFrameData}