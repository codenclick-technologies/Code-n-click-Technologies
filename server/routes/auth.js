const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Login Route
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ message: 'User not found' });

        if (user.password !== password) { // Simple check for now
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        res.json({
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Seed Route (For initial setup)
router.post('/seed', async (req, res) => {
    try {
        await User.deleteMany({}); // Clear existing

        const users = [
            {
                name: 'John Employee',
                email: 'employee@cnc.com',
                password: 'test@123',
                role: 'employee',
                employeeId: 'EMP001',
                department: 'Development'
            },
            {
                name: 'Sarah HR',
                email: 'slokender05@gmail.com', // Using requested email
                password: 'test@123',
                role: 'hr',
                employeeId: 'HR001',
                department: 'Human Resources'
            },
            {
                name: 'Mike Manager',
                email: 'manager@cnc.com',
                password: 'test@123',
                role: 'manager',
                employeeId: 'MGR001',
                department: 'Management'
            },
            {
                name: 'Alice Owner',
                email: 'owner@cnc.com',
                password: 'test@123',
                role: 'owner',
                employeeId: 'OWN001',
                department: 'Executive'
            }
        ];

        await User.insertMany(users);
        res.json({ message: 'Database seeded successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
