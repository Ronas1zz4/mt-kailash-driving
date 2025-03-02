const db = require("../db");

class Reservations {
    static async create({
        user_id,
        class_id,
        status,
        amount,

    }) {
        try {
            const [result] = await db.query(
                "INSERT INTO reservations (user_id, class_id, status,amount ) VALUES (?, ?, ?, ?)",
                [user_id, class_id, status, amount]
            );
            return result.insertId;
        } catch (error) {
            console.error("Error in create reservation:", error);
            throw error;
        }
    }

    static async findById(reservation_id) {
        try {
            const [rows] = await db.query("SELECT * FROM reservations WHERE reservation_id = ?", [reservation_id]);
            return rows[0];
        } catch (error) {
            console.error("Error in findById reservation:", error);
            throw error;
        }
    }

    static async findAllByUser(user_id) {
        try {
            const [rows] = await db.query("SELECT * FROM reservations WHERE user_id = ?", [user_id]);
            return rows;
        } catch (error) {
            console.error("Error in findAllByUser reservation:", error);
            throw error;
        }
    }

    static async updateStatus(reservation_id, status) {
        try {
            await db.query("UPDATE reservations SET status = ? WHERE reservation_id = ?", [status, reservation_id]);
            console.log(`Reservation ${reservation_id} updated to status: ${status}`);
        } catch (error) {
            console.error("Error updating reservation status:", error);
            throw error;
        }
    }

    static async delete(reservation_id) {
        try {
            await db.query("DELETE FROM reservations WHERE reservation_id = ?", [reservation_id]);
            console.log(`Reservation ${reservation_id} deleted successfully.`);
        } catch (error) {
            console.error("Error deleting reservation:", error);
            throw error;
        }
    }
}

module.exports = Reservations;