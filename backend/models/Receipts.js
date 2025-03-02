const db = require("../db");

class Receipts {
    static async create({
        reservation_id,
        amount,
        receipt_number,
        user_id,
    }) {
        try {
            const [result] = await db.query(
                "INSERT INTO receipts (reservation_id, amount, receipt_number,user_id) VALUES (?, ?, ?, ?)",
                [reservation_id, amount, receipt_number, user_id]
            );
            return result.insertId;
        } catch (error) {
            console.error("Error in create receipt:", error);
            throw error;
        }
    }

    static async findById(receipt_id) {
        try {
            const [rows] = await db.query("SELECT * FROM receipts WHERE receipt_id = ?", [receipt_id]);
            return rows[0];
        } catch (error) {
            console.error("Error in findById receipt:", error);
            throw error;
        }
    }

    static async findAllByReservation(reservation_id) {
        try {
            const [rows] = await db.query("SELECT * FROM receipts WHERE reservation_id = ?", [reservation_id]);
            return rows;
        } catch (error) {
            console.error("Error in findAllByReservation receipt:", error);
            throw error;
        }
    }

    static async delete(receipt_id) {
        try {
            await db.query("DELETE FROM receipts WHERE receipt_id = ?", [receipt_id]);
            console.log(`Receipt ${receipt_id} deleted successfully.`);
        } catch (error) {
            console.error("Error deleting receipt:", error);
            throw error;
        }
    }
}

module.exports = Receipts;