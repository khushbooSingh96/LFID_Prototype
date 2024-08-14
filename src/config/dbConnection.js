const mongodb=require('mongoose');
const dotenv=require('dotenv');
dotenv.config();


const connectToCookieLessApp= async function (){
    let url=process.env.URL;
    const dbConnection= await mongodb.connect(url,{useNewUrlParser:true,useUnifiedTopology:true})
    if(dbConnection) {
        console.log(`DB Connected successfully`);
    }else{
        console.log(`DB not Connected `);
    
    
    }
}

  module.exports=connectToCookieLessApp