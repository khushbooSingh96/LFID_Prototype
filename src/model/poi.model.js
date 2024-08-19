const mongoose=require('mongoose');

const poiSchema=new mongoose.Schema({
    showOnMap:{type:Boolean},
 createdAt:{type:String,default:Date.now()},
 categories:[{type:String}],
 onlyWithGeoFrame:{type:Boolean},
 csvFileUrl:{type:String},
 geoFrame:{type:mongoose.Schema.Types.ObjectId,ref:""},
 campaignId:{type:mongoose.Schema.Types.ObjectId, ref:"Campaign"},
 status:{type:String, default:"Active", enum:['Active','Inactive']},
},{timestamps:true});


const POI=new mongoose.model('POI',poiSchema);
module.exports={POI} 