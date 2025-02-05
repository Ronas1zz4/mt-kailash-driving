// this file creates tables into the database
require("dotenv").config();
const db = require('./db');

async function createTables() {
    try {
        // Creates a 'members' table
        await db.query(`
            CREATE TABLE IF NOT EXISTS admins (
                id INT AUTO_INCREMENT PRIMARY KEY,
                admin VARCHAR(255) NOT NULL UNIQUE,
                email VARCHAR(255) NOT NULL UNIQUE,
                password VARCHAR(255) NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `);
        console.log("Table 'members' created or already exists.");


    } catch (err) {
        console.error("Error creating tables:", err);
    } finally {
        // Close the database connection pool
        db.end();
    }
}

// Run the function to create tables
createTables();