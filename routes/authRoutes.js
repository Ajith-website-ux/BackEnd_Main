const express = require("express");
const { register, login, getUsers } = require("../controllers/authController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/register", register); // Register a new user
router.post("/login", login); // Login existing user
router.get("/users", authMiddleware, getUsers); // Admin route to get all users

module.exports = router;
