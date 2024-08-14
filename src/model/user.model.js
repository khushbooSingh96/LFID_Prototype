const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    name:{type:String},
 username:{type:String,min:5,require:true},
 password:{type:String,min:6,require:true},
 email:{type:String,require:true, unique:true},
 status:{type:String, default:"Active", enum:['Active','Inactive']},
 isAdmin:{type:Boolean,default:false}
},{timestamps:true});


const User=new mongoose.model('User',userSchema);
module.exports={User} 