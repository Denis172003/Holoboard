const express = require('express');
const mysql = require('mysql2');

const db = mysql.createConnection({
    host: '127.0.0.2',
    user: 'root',
    password: 'admin',
    database: 'holoboard_layouts'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database: ' + err.stack);
        return;
    }
    console.log('Connected to the database as ID ' + db.threadId);
});

const app = express();

// Endpoint to fetch key data by key name
app.get('/api/keys/:keyName', (req, res) => {
    const keyName = req.params.keyName;

    // Query to fetch key data based on key name
    const query = 'SELECT * FROM keys WHERE key_name = ?';

    // Execute the query with the key name as a parameter
    db.query(query, [keyName], (err, results) => {
        if (err) {
            console.error('Error fetching key data from the database: ' + err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }

        // Check if key data was found
        if (results.length === 0) {
            console.error('Key data not found for key name: ' + keyName);
            res.status(404).json({ error: 'Key data not found' });
            return;
        }

        // Send the fetched key data back as a JSON response
        res.json(results[0]);
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
