const express = require('express');
const router = express.Router();

router.post('/signup', async (req, res) => {
    try {
        const { email, password, confirmPassword } = req.body;

        if (password !== confirmPassword) {
            return res.status(400).json({ message: "Passwords do not match!" });
        }

        // Save to database (mock response for now)
        return res.status(201).json({ message: "User registered successfully!" });

    } catch (error) {
        return res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;
