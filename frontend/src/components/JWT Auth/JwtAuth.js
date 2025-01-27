const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();

app.use(express.json());

// Mock user data
const users = [{ username: "user1", password: "password123" }];

const SECRET_KEY = "rohit#23@#4";

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  const user = users.find((u) => u.username === username && u.password === password);

  if (user) {
    const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: "1h" });
    res.json({ token });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
