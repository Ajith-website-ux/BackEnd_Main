const express = require("express");
const { getCars, addCar, updateCar, deleteCar } = require("../controllers/carController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/", getCars); // Fetch all cars
router.post("/", authMiddleware, addCar); // Add a new car (Admin only)
router.put("/:id", authMiddleware, updateCar); // Update car details
router.delete("/:id", authMiddleware, deleteCar); // Delete a car

module.exports = router;
