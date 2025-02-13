const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
    try {
        // Get token from the request headers
        const token = req.header("Authorization");

        // Check if token is missing
        if (!token) {
            return res.status(401).json({
                message: "Access denied. No token provided."
            });
        }

        // Verify the token
        const decoded = jwt.verify(token.replace("Bearer ", ""), process.env.JWT_SECRET);

        // Attach user data to the request object
        req.user = decoded;
        console.log(req.user);

        // Proceed to the next middleware or route handler
        next();
    } catch (error) {
        console.error("JWT Verification Error:", error);

        // Handle specific JWT errors
        if (error.name === "TokenExpiredError") {
            return res.status(401).json({
                message: "Token expired. Please log in again."
            });
        } else if (error.name === "JsonWebTokenError") {
            return res.status(401).json({
                message: "Invalid token. Please log in again."
            });
        } else {
            return res.status(500).json({
                message: "Something went wrong with authentication."
            });
        }
    }
};

module.exports = authMiddleware;