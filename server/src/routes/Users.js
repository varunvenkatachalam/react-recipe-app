import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { UserModel } from "../models/Users.js";

const router = express.Router();

// Middleware function to verify JWT token
export const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1]; // Extract token from authorization header
    jwt.verify(token, "secret", (err, decoded) => {
      if (err) {
        return res.sendStatus(403); // Forbidden if token is invalid
      }
      req.userId = decoded.id; // Attach userId to request object
      next(); // Move to the next middleware
    });
  } else {
    res.sendStatus(401); // Unauthorized if no token provided
  }
};

// Register route
router.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const user = await UserModel.findOne({ username });
  if (user) {
    return res.status(400).json({ message: "Username already exists" });
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new UserModel({ username, password: hashedPassword });
  await newUser.save();
  res.json({ message: "User registered successfully" });
});

// Login route
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await UserModel.findOne({ username });

  if (!user) {
    return res.status(400).json({ message: "User dosen't Exist" });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(400).json({ message: "Username or password is incorrect" });
  }

  const token = jwt.sign({ id: user._id }, "secret");
  res.json({ token, userID: user._id });
});

// Protected route example
router.get("/protected", verifyToken, (req, res) => {
  // This route is protected, only accessible with a valid token
  res.json({ message: "Access granted" });
});

export { router as userRouter };
