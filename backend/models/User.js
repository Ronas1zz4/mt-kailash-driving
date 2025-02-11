// const {
//     pool
// } = require("../db");
const db = require("../db");

class User {
    static async create({
        name,
        email,
        password,
        verificationToken
    }) {
        try {
            const [result] = await db.query(
                "INSERT INTO users (name, email, password, verification_token) VALUES (?, ?, ?, ?)",
                [name, email, password, verificationToken]
            );
            return result.insertId;
        } catch (error) {
            console.error("Error in create:", error);
            throw error;
        }
    }

    static async findByEmail(email) {
        try {
            // console.log("Searching for user with email:", email);
            const [rows] = await db.query("SELECT * FROM users WHERE email = ?", [email]);
            // console.log("Query result:", rows);
            return rows[0];
        } catch (error) {
            console.error("Error in findByEmail:", error);
            throw error;
        }
    }

    static async findById(id) {
        const [rows] = await db.query("SELECT * FROM users WHERE id = ?", [id]);
        return rows[0];
    }

    static async markAsVerified(id) {
        if (!id) {
            throw new Error("Invalid user ID");
        }

        try {
            await db.query("UPDATE users SET is_verified = TRUE, verification_token = NULL WHERE id = ?", Number(id));
            console.log('User verified successfully.');
        } catch (error) {
            console.error('Error marking user as verified:', error);
            throw new Error('Error marking user as verified');
        }
    }

    static async updatePasswordToken(email, passwordToken, passwordTokenExpirationDate) {
        try {
            await db.query(
                "UPDATE users SET password_token = ?, password_token_expiration_date = ? WHERE email = ?",
                [passwordToken, passwordTokenExpirationDate, email]
            );
            // console.log(`User ${userId}'s password token updated successfully.`);
        } catch (error) {
            console.error("Error updating password token:", error);
            throw new Error("Failed to update password token");
        }
    }

    static async passwordReset(email, password) {
        try {
            await db.query(
                "UPDATE users SET password_token = NULL, password_token_expiration_date = NULL , password = ? WHERE email = ?",
                [password, email]
            );
            // console.log(`User ${userId}'s password token updated successfully.`);
        } catch (error) {
            console.error("Error updating password token:", error);
            throw new Error("Failed to update password token");
        }
    }




}

module.exports = User;