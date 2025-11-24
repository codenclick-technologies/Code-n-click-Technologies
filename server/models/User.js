const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }, // In production, hash this!
    role: {
        type: String,
        enum: ['employee', 'hr', 'manager', 'owner'],
        required: true
    },
    employeeId: { type: String },
    department: { type: String },
    designation: { type: String },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);
