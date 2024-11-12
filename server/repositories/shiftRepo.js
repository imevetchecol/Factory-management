const shiftModel = require('../models/shiftModel')

// Get All shifts
const getAllShifts = (filters) => {
  return shiftModel.find(filters);
};

// Get shift By ID
const getShiftById = (id) => {
  return shiftModel.findById(id);
};

// Create new shift
const addShift = (obj) => {
  const shift = new shiftModel(obj);
  return shift.save();
};

// Update shift
const updateShift = (id, obj) => {
  return shiftModel.findByIdAndUpdate(id, obj);
};


module.exports = {
    getAllShifts,
    getShiftById,
    addShift,
    updateShift,
    addShift
};

