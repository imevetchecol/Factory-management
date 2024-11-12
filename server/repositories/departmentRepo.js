const departmentModel = require('../models/departmentModel')


// Get All departments
const getAllDepartments = (filters) => {
  return departmentModel.find(filters);
};

// Get department By ID
const getDepartmentById = (id) => {
  return departmentModel.findById(id);
};

// Create new department
const addDepartment = (obj) => {
  const department = new departmentModel(obj);
  return department.save();
};

// Update department
const updateDepartment = (id, obj) => {
  return departmentModel.findByIdAndUpdate(id, obj);
};

// Delete department
const deleteDepartment = (id) => {
  return departmentModel.findByIdAndDelete(id);
};

module.exports = {
    getAllDepartments,
    getDepartmentById,
    addDepartment,
    updateDepartment,
    addDepartment,
    deleteDepartment
};

