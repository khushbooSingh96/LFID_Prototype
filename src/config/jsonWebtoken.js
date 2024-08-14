const jwt = require('jsonwebtoken');
const dotenv=require('dotenv');
dotenv.config(); 
const secretKey = process.env.JWT_TOKEN_SECRET_KEY;

// generate JWT token
const generateToken = (payload) => {
  return jwt.sign(payload, secretKey,{expiresIn:'1hr'},(err,token)=>{
    if(err) return err
    res.json({
      token
  });
  localStorage.setItem('session',JSON.stringify(token));
  }); 
};

// Function to verify JWT token
const verifyToken = (req,res,next) => {
  try {
    const headerToken=req.headers['authorization'];
const splitToken=headerToken.split(' ')[1];
console.log(`splitToken=== ${splitToken}`);
    const decoded = jwt.verify(splitToken, secretKey);
    if(!decoded) return "Invalid token"
    req.token=decoded
    next();
  } catch (err) {
    return null; // Token is invalid
  }
};

module.exports = { generateToken, verifyToken };
