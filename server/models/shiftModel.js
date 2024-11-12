const mongoose = require('mongoose')

const ShiftSchema = new mongoose.Schema({
    Date: String,
    StartingHour: String,
    EndingHour: String
}, { versionKey: false }
)

const Shift   = mongoose.model('shift', ShiftSchema)

module.exports = Shift