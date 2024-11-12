const mongoose = require('mongoose')

const EmployeeSchema = new mongoose.Schema({
    FirstName : String,
    LastName: String,
    StartWorkYear : Number,
    DepartmentID: String,
    ShiftId: [String]
}, { versionKey: false }
)

const Employee   = mongoose.model('employee', EmployeeSchema)

module.exports = Employee