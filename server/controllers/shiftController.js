const express = require('express');
const shiftService = require('../services/shiftService');

const router = express.Router();

// Get All shifts
router.get('/', async (req, res) => {
  try {
    const filters = req.query;
    const shifts = await shiftService.getAllShift(filters)
    res.json(shifts);
  } catch (error) {
    res.json(error);
  }
});

// Get a shift By ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const shift = await shiftService.getShiftById(id);
    res.json(shift);
  } catch (error) {
    res.json(error);
  }
});

// Add a new shift
router.post('/', async (req, res) => {
  try {
    const obj = req.body;
    const result = await shiftService.addShift(obj);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

// Update a shift
router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const obj = req.body;
    const result = await shiftService.updateShift(id, obj);
    res.json(result);
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
