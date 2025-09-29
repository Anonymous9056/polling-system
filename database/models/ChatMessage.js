const mongoose = require('mongoose');

const chatMessageSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  message: { type: String, required: true },
  senderName: { type: String, required: true },
  senderRole: { type: String, enum: ['teacher', 'student'], required: true },
  senderId: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
  pollId: { type: String, required: true }
});

module.exports = mongoose.model('ChatMessage', chatMessageSchema);
