const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5000;

app.use(cors());

// Read data from data.json file
const dataPath = path.join(__dirname, 'data.json');
let budgetData;

// Load the JSON data once when the server starts
fs.readFile(dataPath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading data file:', err);
        budgetData = { labels: [], values: [] }; // Fallback data
    } else {
        const parsedData = JSON.parse(data);
        budgetData = {
            labels: parsedData.myBudget.map(item => item.title),
            values: parsedData.myBudget.map(item => item.budget),
        };
    }
});

app.get('/api/data', (req, res) => {
    res.json({
        labels: budgetData.labels,
        values: budgetData.values,
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
