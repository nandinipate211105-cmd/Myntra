const mongoose = require("mongoose");

const attendanceSchema = new mongoose.Schema({
  date: { type: String, required: true },
  present: { type: Boolean, default: false }
});

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  attendance: [attendanceSchema]
});

module.exports = mongoose.model("Student", studentSchema);