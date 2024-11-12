const express = require('express');
const employeeService = require('../services/employeeService');

const router = express.Router();

// Get All employees
router.get('/', async (req, res) => {
  try {
    const filters = req.query;
    const employees = await employeeService.getAllemployee(filters)
    res.json(employees);
  } catch (error) {
    res.json(error);
  }
});


// Get a employee By ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const employee = await employeeService.getemployeeById(id);
    res.json(employee);
  } catch (error) {
    res.json(error);
  }
});

// Add a new employee
router.post('/', async (req, res) => {
  try {
    const obj = req.body;
    const result = await employeeService.addemployee(obj);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

// Update a employee
router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const obj = req.body;
    const result = await employeeService.updateemployee(id, obj);
    res.json(result);
  } catch (error) {
    res.json(error);
  }
});

// Delete a employee
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await employeeService.deleteemployee(id);
    res.json(result);
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
