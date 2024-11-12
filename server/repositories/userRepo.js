const userModel = require('../models/userModel')

// Get All usesr
const getAllUsers = (filters) => {
    return userModel.find(filters);
};
  
  // Get user By ID
const getUserById = (id) => {
    return userModel.findById(id);
};

const addUser = (obj)=>{
    const user = new userModel(obj)
    return user.save();
}
// Update user
const updateUser = (id, obj) => {
    return userModel.findByIdAndUpdate(id, obj);
};


module.exports = {addUser, getUserById, getAllUsers, updateUser};