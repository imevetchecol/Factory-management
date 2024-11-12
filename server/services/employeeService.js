const employeeRepo = require('../repositories/employeeRepo');

// get all employees
const getAllemployee = (filters) => {
  return employeeRepo.getAllEmployees(filters);
};
 // get employee by ID
const getemployeeById = (id) => {
  return employeeRepo.getEmployeeById(id);
};
// add new employee
const addemployee = (obj) => {
  return employeeRepo.addEmployee(obj);
};
// update employee
const updateemployee = (id, obj) => {
  return employeeRepo.updateEmployee(id, obj);
};
// delete employee
const deleteemployee = (id) => {
  return employeeRepo.deleteEmployee(id);
};

module.exports = {
    getAllemployee,
    getemployeeById,
    addemployee,
    updateemployee,
    deleteemployee
};
