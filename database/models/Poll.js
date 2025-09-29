const mongoose = require('mongoose');

const pollSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  question: { type: String, required: true },
  options: [{ type: String, required: true }],
  duration: { type: Number, default: 60 },
  correctAnswer: { type: Number, default: 0 },
  isActive: { type: Boolean, default: false },
  responses: { type: Map, of: Object, default: new Map() },
  results: { type: Map, of: Object, default: new Map() },
  finalResults: { type: Map, of: Object, default: new Map() },
  startTime: { type: Date },
  endTime: { type: Date },
  timeLeft: { type: Number, default: 60 },
  teacherId: { type: String, required: true },
  teacherName: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  summary: {
    totalResponses: { type: Number, default: 0 },
    correctResponses: { type: Number, default: 0 },
    incorrectResponses: { type: Number, default: 0 },
    correctPercentage: { type: Number, default: 0 },
    incorrectPercentage: { type: Number, default: 0 },
    correctAnswer: { type: String }
  }
});

module.exports = mongoose.model('Poll', pollSchema);
