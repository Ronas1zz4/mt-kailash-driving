// this file creates tables into the database
require("dotenv").config();
const db = require("./db");

async function createTables() {
    try {
        // Creates a 'S' table
        await db.query(`
            CREATE TABLE IF NOT EXISTS receipts (
                receipt_id INT AUTO_INCREMENT PRIMARY KEY,
                payment_id INT NOT NULL,
                user_id INT NOT NULL,
                receipt_number VARCHAR(100) UNIQUE NOT NULL, 
                issued_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                FOREIGN KEY (payment_id) REFERENCES payments(payment_id),
                FOREIGN KEY (user_id) REFERENCES users(user_id)
            );
        `);
        console.log("Table 'receipts' created or already exists.");
    } catch (err) {
        console.error("Error creating tables:", err);
    } finally {
        // Close the database connection pool
        db.end();
    }
}

// Run the function to create tables
createTables();