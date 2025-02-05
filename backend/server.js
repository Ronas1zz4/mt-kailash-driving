require("dotenv").config(); // Load environment variables
const express = require("express");
const app = express();
const cors = require("cors")
const pool = require("./db.js") //imports mysql pool

const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET,POST,PUT,DELETE",
  credentials: true
};
app.use(cors(corsOptions))
const port = process.env.PORT || 5001;
app.use(express.json()); // Parse JSON request bodies


app.get('/login', (req, res) => {


});


app.get("/", (req, res) => {
  res.json("Welcome to the server Dawgs!")
});

app.get("/test", (req, res) => {
  res.json("TEST TEST TEST! This data is fetched from the server.js")
})

//fetched users 
app.get("/admins", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM admins"); // Using async/await
    res.json(rows);
  } catch (error) {
    console.error("Database query failed:", error);
    res.status(500).json({
      error: "Database query failed"
    });
  }
});


// Adds members into the members table
app.post("/admins", async (req, res) => {
  try {
    const {
      admin,
      email,
      password
    } = req.body; // Extract data from the request body(since our front-end is not ready at this moment, use postman)

    // Insert the new member into the database
    const [result] = await pool.query(
      "INSERT INTO admins (admin, email, password) VALUES (?, ?, ?)",
      [admin, email, password]
    );

    // Returns newly created member
    res.status(201).json({
      id: result.insertId,
      admin,
      email,
    });
  } catch (error) {
    console.error("Error adding member:", error);
    res.status(500).json({
      error: "Failed to add member"
    });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});