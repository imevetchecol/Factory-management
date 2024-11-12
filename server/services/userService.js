const userRepo = require('../repositories/userRepo')

const getAllUsers = (filters) => {
    return userRepo.getAllUsers(filters);
};
  
const getUserById = (id) => {
    return userRepo.getUserById(id);
};

const addUsersToDb = (obj)=>{
    return userRepo.addUser(obj)
}; 

const updateUser = (id, obj) => {
    return userRepo.updateUser(id, obj);
};

module.exports= {
    addUsersToDb, 
    getAllUsers, 
    getUserById,
    updateUser
};