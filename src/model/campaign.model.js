const mongoose=require('mongoose');

const campaignSchema=new mongoose.Schema({
    name:{type:String},
 createdAt:{type:String,default:Date.now()},
 country:{type:String},
 state:{type:String},
 city:{type:String},
 district:{type:String},
 dmas:{type:String},
 postalCode:{type:String},
 status:{type:String, default:"Active", enum:['Active','Inactive']},
},{timestamps:true});


const Campaign=new mongoose.model('Campaign',campaignSchema);
module.exports={Campaign} 