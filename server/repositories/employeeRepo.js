const employeeModel = require('../models/employeeModel')


// Get all employees
const getAllEmployees = (filters) => {
  return employeeModel.find(filters);
};

// Get employee By ID
const getEmployeeById = (id) => {
  return employeeModel.findById(id);
};

// Create new employee
const addEmployee = (obj) => {
  const Employee = new employeeModel(obj);
  return Employee.save();
};

// Update employee 
const updateEmployee = (id, obj) => {
  return employeeModel.findByIdAndUpdate(id, obj);
};

// Delete employee
const deleteEmployee = (id) => {
  return employeeModel.findByIdAndDelete(id);
};

module.exports = {
    getAllEmployees,
    getEmployeeById,
    addEmployee,
    updateEmployee,
    addEmployee,
    deleteEmployee
};

