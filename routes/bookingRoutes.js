const express = require("express");
const { createBooking, getBookings } = require("../controllers/bookingController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/", authMiddleware, createBooking); // Create a booking (authenticated)
router.get("/", authMiddleware, getBookings); // Get all bookings (Admin only)

module.exports = router;
