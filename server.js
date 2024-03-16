const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Sample data (simulating a backend model)
const data = {
    chronicConditions: 'Chronic conditions are long-term illnesses or health conditions that require ongoing medical attention and management...',
    healthcareChallenges: 'Managing chronic conditions poses several challenges for healthcare systems and individuals alike...',
    conclusion: 'Addressing chronic conditions and healthcare challenges requires a comprehensive approach that involves healthcare providers, policymakers, communities, and individuals...'
};

// Route to provide data to the frontend
app.get('/data', (req, res) => {
    res.json(data);
});

// Serve static files
app.use(express.static('public'));

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
