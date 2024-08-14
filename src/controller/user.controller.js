const userService=require('../service/user.service');


const createUser=async function(req,res){
    try {
        return userService.createUser(req,res);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}


const loginUser=async function(req,res){
    try {
        return userService.loginUser(req,res);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}


const getUser=async function(req,res){
    try {
        return userService.getUser(req,res);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}


const updateUser=async function(req,res){
    try {
        return userService.updateUser(req,res);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}


const deleteUser=async function(req,res){
    try {
        return userService.deleteUser(req,res);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}


const logout=async function(req,res){
    try {
        return userService.logout(req,res);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports={createUser,getUser,updateUser,deleteUser,logout,loginUser}