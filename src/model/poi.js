const mongoose=require('mongoose');

const poiSchema=new mongoose.Schema({
    showOnMap:{type:Boolean},
 createdAt:{type:String,default:Date.now()},
 country:{type:String},
 state:{type:String},
 city:{type:String},
 district:{type:String},
 dmas:{type:String},
 postalCode:{type:String},
 status:{type:String, default:"Active", enum:['Active','Inactive']},
},{timestamps:true});


const POI=new mongoose.model('POI',poiSchema);
module.exports={POI} 