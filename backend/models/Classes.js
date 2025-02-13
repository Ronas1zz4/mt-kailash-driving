const db = require("../db");

class Classes {
    static async create({
        class_name,
        description,
        cost,
        start_date,
        end_date,
        max_capacity,
        status
    }) {
        try {
            const [result] = await db.query(
                "INSERT INTO classes (class_name, description, cost, start_date, end_date, max_capacity, status) VALUES (?, ?, ?, ?, ?, ?, ?)",
                [class_name, description, cost, start_date, end_date, max_capacity || 20, status || 'open']
            );
            return result.insertId;
        } catch (error) {
            console.error("Error in create:", error);
            throw error;
        }
    }

    static async findById(class_id) {
        try {
            const [rows] = await db.query("SELECT * FROM classes WHERE class_id = ?", [class_id]);
            return rows[0];
        } catch (error) {
            console.error("Error in findById:", error);
            throw error;
        }
    }

    static async findAllOpen() {
        try {
            const [rows] = await db.query("SELECT * FROM classes WHERE status = 'open'");
            return rows;
        } catch (error) {
            console.error("Error in findAllOpen:", error);
            throw error;
        }
    }

    static async updateStatus(class_id, status) {
        try {
            await db.query("UPDATE classes SET status = ? WHERE class_id = ?", [status, class_id]);
            console.log(`Class ${class_id} updated to status: ${status}`);
        } catch (error) {
            console.error("Error updating class status:", error);
            throw error;
        }
    }

    static async updateCurrentCapacity(class_id, new_capacity) {
        try {
            await db.query("UPDATE classes SET current_capacity = ? WHERE class_id = ?", [new_capacity, class_id]);
            console.log(`Class ${class_id} updated with new capacity: ${new_capacity}`);
        } catch (error) {
            console.error("Error updating class capacity:", error);
            throw error;
        }
    }

    static async delete(class_id) {
        try {
            await db.query("DELETE FROM classes WHERE class_id = ?", [class_id]);
            console.log(`Class ${class_id} deleted successfully.`);
        } catch (error) {
            console.error("Error deleting class:", error);
            throw error;
        }
    }
}

module.exports = Classes;