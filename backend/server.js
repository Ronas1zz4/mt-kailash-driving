require("dotenv").config(); // Load environment variables
const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db.js"); //imports mysql pool
const authMiddleware = require("./middlewares/authMiddlewares");
const authRouter = require("./routes/auth");
const userdetail = require("./routes/userdetail");

const paymentRouter = require("./routes/payment");
const classes = require("./routes/classesroute");

const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET,POST,PUT,DELETE",
  credentials: true,
};
app.use(cors(corsOptions));
const port = process.env.PORT || 5001;
app.use(express.json()); // Parse JSON request bodies

app.get("/booking-page", authMiddleware, (req, res) => {
  console.log("Decoded user:", req.user);
  res.send(`Welcome to the booking page, ${req.user.email}`);
});

// every authentication routing
app.use("/", authRouter);
app.use("/", classes);
app.use("/", userdetail);

app.use("/", paymentRouter);





app.post("/create-classes", async (req, res) => {
  try {
    const {
      class_name,
      description,
      cost,
      start_date,
      end_date,
      max_capacity,
      status,
    } = req.body;

    // Validate required fields
    if (!class_name || !cost || !start_date || !end_date) {
      return res.status(400).json({
        message: "Missing required fields",
      });
    }

    // Convert start_date and end_date to Date format (YYYY-MM-DD)
    const formattedStartDate = new Date(start_date);
    const formattedEndDate = new Date(end_date);

    // Ensure date conversion is valid
    if (isNaN(formattedStartDate) || isNaN(formattedEndDate)) {
      return res
        .status(400)
        .json({
          message: "Invalid date format. Use YYYY-MM-DD."
        });
    }

    // Create the class in the database
    const classId = await Classes.create({
      class_name,
      description,
      cost,
      start_date,
      end_date,
      max_capacity: max_capacity || 20,
      status: status || "open",
    });

    res.status(201).json({
      message: "Class created successfully",
      class_id: classId,
    });
  } catch (error) {
    console.error("Error creating class:", error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
});

app.get("/", (req, res) => {
  res.json("Welcome to the server Dawgs!");
});

app.get("/test", (req, res) => {
  res.json("TEST TEST TEST! This data is fetched from the server.js");
});

//fetched users
app.get("/admins", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM admins"); // Using async/await
    res.json(rows);
  } catch (error) {
    console.error("Database query failed:", error);
    res.status(500).json({
      error: "Database query failed",
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
      error: "Failed to add member",
    });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});