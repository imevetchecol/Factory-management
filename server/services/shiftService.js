const shiftRepo = require('../repositories/shiftRepo');
// get all shifts
const getAllShift = (filters) => {
  return shiftRepo.getAllShifts(filters);
};
// get shift by ID
const getShiftById = (id) => {
  return shiftRepo.getShiftById(id);
};
// add new shift
const addShift = (obj) => {
  return shiftRepo.addShift(obj);
};
// upadate shift
const updateShift = (id, obj) => {
  return shiftRepo.updateShift(id, obj);
};


module.exports = {
    getAllShift,
    getShiftById,
    addShift,
    updateShift
};
