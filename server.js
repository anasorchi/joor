const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

// MySQL connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'joor',
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

// API endpoint for login
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    // Query to check if user with admin privileges exists
    const query = `SELECT * FROM users WHERE email = ? AND password = ? AND type_user = 'admin'`;

    connection.query(query, [email, password], (err, results) => {
        if (err) {
            console.error('Error querying database:', err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }

        if (results.length > 0) {
            // User with admin privileges found
            res.status(200).json({ message: 'Login successful' });
        } else {
            // User not found or does not have admin privileges
            res.status(401).json({ error: 'Unauthorized' });
        }
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});