const departmentRepo = require('../repositories/departmentRepo');

// get all departments
const getAllDepartment = (filters) => {
  return departmentRepo.getAllDepartments(filters);
};

// get department by ID
const getDepartmentById = (id) => {
  return departmentRepo.getDepartmentById(id);
};

// add new department
const addDepartment = (obj) => {
  return departmentRepo.addDepartment(obj);
};

// update department
const updateDepartment = (id, obj) => {
  return departmentRepo.updateDepartment(id, obj);
};

// delete department
const deleteDepartment = (id) => {
  return departmentRepo.deleteDepartment(id);
};

module.exports = {
    getAllDepartment,
    getDepartmentById,
    addDepartment,
    updateDepartment,
    deleteDepartment
};
