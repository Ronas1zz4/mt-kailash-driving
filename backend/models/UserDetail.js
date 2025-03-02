const db = require("../db");

class UserDetail {
    // Create a new user
    static async create({
        first_name,
        last_name,
        email,
    }) {
        try {
            const [result] = await db.query(
                "INSERT INTO userdetail (first_name, last_name, email) VALUES (?, ?, ?)",
                [first_name, last_name, email]
            );
            return result.insertId; // Return the ID of the newly created user
        } catch (error) {
            console.error("Error in create:", error);
            throw error;
        }
    }

    // Find a user by email
    static async findByEmail(email) {
        try {
            const [rows] = await db.query("SELECT * FROM userdetail WHERE email = ?", [email]);
            return rows[0]; // Return the first matching user
        } catch (error) {
            console.error("Error in findByEmail:", error);
            throw error;
        }
    }

    // Find a user by ID
    static async findById(user_id) {
        try {
            const [rows] = await db.query("SELECT * FROM userdetail WHERE user_id = ?", [user_id]);
            return rows[0]; // Return the first matching user
        } catch (error) {
            console.error("Error in findById:", error);
            throw error;
        }
    }

    // Update verification status to 'verified'
    static async markAsVerified(user_id) {
        try {
            await db.query(
                "UPDATE userdetail SET verification_status = 'verified' WHERE user_id = ?",
                [user_id]
            );
            console.log('User verification status updated successfully.');
        } catch (error) {
            console.error('Error marking user as verified:', error);
            throw error;
        }
    }

    // Update user details (first name, last name, email)
    static async update(user_id, {
        first_name,
        last_name,
        email
    }) {
        try {
            await db.query(
                "UPDATE userdetail SET first_name = ?, last_name = ?, email = ? WHERE user_id = ?",
                [first_name, last_name, email, user_id]
            );
            console.log('User details updated successfully.');
        } catch (error) {
            console.error('Error updating user details:', error);
            throw error;
        }
    }

    // Delete a user by ID
    static async delete(user_id) {
        try {
            await db.query("DELETE FROM userdetail WHERE user_id = ?", [user_id]);
            console.log('User deleted successfully.');
        } catch (error) {
            console.error('Error deleting user:', error);
            throw error;
        }
    }
}

module.exports = UserDetail;