const express = require('express');
const departmentService = require('../services/departmentService');

const router = express.Router();

// Get All departments
router.get('/', async (req, res) => {
  try {
    const filters = req.query;
    const departments = await departmentService.getAllDepartment(filters)
    res.json(departments);
  } catch (error) {
    res.json(error);
  }
});


// Get a department By ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const department = await departmentService.getDepartmentById(id);
    res.json(department);
  } catch (error) {
    res.json(error);
  }
});

// Add a new department
router.post('/', async (req, res) => {
  try {
    const obj = req.body;
    const result = await departmentService.addDepartment(obj);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

// Update a department
router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const obj = req.body;
    const result = await departmentService.updateDepartment(id, obj);
    res.json(result);
  } catch (error) {
    res.json(error);
  }
});

// Delete a department
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await departmentService.deleteDepartment(id);
    res.json(result);
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
