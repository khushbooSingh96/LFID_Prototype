const mongoose=require('mongoose');

const geoFrameSchema=new mongoose.Schema({
   
 createdAt:{type:String,default:Date.now()},
 country:{type:String},
 state:[{type:String}],
 city:[{type:String}],
 district:[{type:String}],
 dmas:[{type:String}],
 counties:{type:String},
 postalCode:[{type:String}],
 campaignId:{type:mongoose.Schema.Types.ObjectId, ref:"Campaign"},
 status:{type:String, default:"Active", enum:['Active','Inactive']},
},{timestamps:true});


const GeoFrame=new mongoose.model('GeoFrame',geoFrameSchema);
module.exports={GeoFrame} 