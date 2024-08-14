const {User}=require('./../model/user.model');
const {generateToken,verifyToken}=require('../config/jsonWebtoken')
const createUser=async function(req,res){
try {
        let { name, username, email, password } = req.body;
        let newUser= new User({ name:name, username:username, email:email, isAdmin:'false', password:password });
        
          const savedUser = await newUser.save();
          const userInfo=generateToken(JSON.stringify(savedUser));
          console.log(`saved User ${JSON.stringify(savedUser)}`);
          console.log(` User info ${JSON.stringify(userInfo)}`);
          res.status(201).json({message:"sucessfully created",token:userInfo,data:savedUser});
       
} catch (error) {
    res.status(400).json({ message: error.message });
} 
}

  
  
const getUser= async function(req, res)  {
  
  try {
    const { id } = req.params;
 
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    const userInfo=generateToken(JSON.stringify(user));
          console.log(`saved User ${JSON.stringify(userInfo)}`);
          
          res.status(201).json({message:"sucessfully fetched",token:userInfo,data:user});
       
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


const loginUser= async function(req, res)  {
  
  const { email,password } = req.body;
  try {
    const user = await User.findOne({email:email,password:password});
    if (!user) {
      return res.status(404).json({ message: 'Invalid email or password' });
    }
    const userInfo=generateToken(JSON.stringify(user));
          console.log(`saved User ${JSON.stringify(userInfo)}`);
          
          res.status(200).json({message:"sucessfully fetched",token:userInfo,data:user});
  
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


const updateUser= async function(req, res)  {
  const { id,name,email,username,isAdmin } = req.body;
  if(!id)res.status(400).json({message:"Please enter Id"})
  try {
    const user = await User.findByIdAndUpdate(id,{name,email,username,isAdmin});
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteUser=async (req, res) => {
  const { id } = req.params;
  try {
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json({ message: 'User deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }}


  
const logout=async (req, res) => {
  try {
      return res.status(200).json({ message: 'logged out successfully' });
    
  } catch (err) {
    res.status(500).json({ message: err.message });
  }}


  
module.exports={createUser,getUser,updateUser,deleteUser,loginUser,logout}