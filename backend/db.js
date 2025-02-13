require("dotenv").config(); // Load environment variables
const mysql = require('mysql2');


// Create a connection pool
const pool = mysql.createPool({
    connectionLimit: 10,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    port: process.env.DB_PORT,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

// Convert pool to use Promises (to avoid callback hell)
const db = pool.promise();

// Graceful shutdown on app termination
process.on('SIGINT', () => {
    pool.end((err) => {
        if (err) {
            console.error("Error closing MySQL pool:", err);
        } else {
            console.log("MySQL pool closed.");
        }
        process.exit(0);
    });
});

module.exports = db;