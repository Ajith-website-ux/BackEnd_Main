const Booking = require("../models/booking");
const Car = require("../models/Car");

// Create a new booking
exports.createBooking = async (req, res) => {
  const { carId, startDate, endDate } = req.body;
  const userId = req.user._id;

  try {
    const car = await Car.findById(carId);
    if (!car || !car.availability) {
      return res.status(400).json({ message: "Car not available" });
    }

    const totalDays = (new Date(endDate) - new Date(startDate)) / (1000 * 3600 * 24);
    const totalPrice = totalDays * car.pricePerDay;

    const newBooking = new Booking({ userId, carId, startDate, endDate, totalPrice });
    await newBooking.save();

    // Mark car as unavailable
    car.availability = false;
    await car.save();

    res.status(201).json(newBooking);
  } catch (error) {
    res.status(500).json({ message: "Failed to create booking", error });
  }
};

// Get all bookings (Admin)
exports.getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().populate("userId carId");
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch bookings", error });
  }
};
