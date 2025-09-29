const mongoose = require('mongoose');

const participantSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  role: { type: String, enum: ['teacher', 'student'], required: true },
  joinedAt: { type: Date, default: Date.now },
  isActive: { type: Boolean, default: true },
  kickedOut: { type: Boolean, default: false },
  kickReason: { type: String }
});

module.exports = mongoose.model('Participant', participantSchema);
