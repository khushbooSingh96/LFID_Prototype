const express=require('express');
const app=express();
require('dotenv').config()
const connectToMongoDB=require('./src/config/dbConnection')
const userRoute=require('./src/route/user.route');
const campaignRoute=require('./src/route/campaign.route')
connectToMongoDB()
const cors=require('cors');
const bodyParser=require('body-parser');
const session = require('express-session');
const path=require('path');


app.use(cors());
app.use(session({
    secret:process.env.JWT_TOKEN_SECRET_KEY,
    
}))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(userRoute);
app.use(campaignRoute)
app.use(express.json());
app.listen(process.env.PORT,()=>{
    console.log(`Server is listening on PORT ${process.env.PORT}`);
})