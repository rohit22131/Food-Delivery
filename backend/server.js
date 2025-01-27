import express from "express";
import bodyParser from "body-parser";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env file

const app = express();
const PORT=process.env.PORT || 5000;
const SECRET_KEY=process.env.SECRET || "secret";

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Mock User Database
const users = [
  {
    id: 1,
    username: "testuser",
    password: bcrypt.hashSync("password123", 10), // Hashed password
  },
];

// Helper function to generate a JWT
const generateToken = (user) => {
  return jwt.sign({ id: user.id, username: user.username }, SECRET_KEY, {
    expiresIn: "1h",
  });
};

// Middleware to verify JWT
// Middleware to verify JWT
const authenticateToken = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1]; // Extract token from 'Authorization' header
  if (!token) {
    return res.status(403).json({ message: "Token is required" });
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};

// Routes

// Register Route
app.post("/api/register", (req, res) => {
  const { username, password } = req.body;

  // Check if the username already exists
  const existingUser = users.find((u) => u.username === username);
  if (existingUser) {
    return res.status(409).json({ message: "Username is already taken" });
  }

  // Hash the password and create a new user
  const hashedPassword = bcrypt.hashSync(password, 10);
  const newUser = {
    id: users.length + 1,
    username,
    password: hashedPassword,
  };

  users.push(newUser);
  res.status(201).json({ message: "User registered successfully" });
});

// Login Route
// Login Route
app.post("/api/login", (req, res) => {
  const { username, password } = req.body;

  // Find the user by username
  const user = users.find((u) => u.username === username);
  if (!user) {
    return res.status(401).json({ message: "Invalid username or password" });
  }

  // Compare the provided password with the hashed password in the database
  const isPasswordValid = bcrypt.compareSync(password, user.password);
  if (!isPasswordValid) {
    return res.status(401).json({ message: "Invalid username or password" });
  }

  // Generate JWT token if the password is valid
  const token = generateToken(user);
  res.json({ token });
});



// Protected Route (Dashboard)
app.get("/api/", authenticateToken, (req, res) => {
  res.json({ message: `Welcome, ${req.user.username}!` });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
