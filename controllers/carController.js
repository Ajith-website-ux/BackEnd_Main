const Car = require("../models/Car");

// Get all cars
exports.getCars = async (req, res) => {
  try {
    const cars = await Car.find();
    res.status(200).json(cars);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch cars", error });
  }
};

// Add a new car
exports.addCar = async (req, res) => {
  const { name, type, pricePerDay, image, availability } = req.body;
  try {
    const car = new Car({ name, type, pricePerDay, image, availability });
    await car.save();
    res.status(201).json(car);
  } catch (error) {
    res.status(500).json({ message: "Failed to add car", error });
  }
};

// Update car
exports.updateCar = async (req, res) => {
  try {
    const car = await Car.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(car);
  } catch (error) {
    res.status(500).json({ message: "Failed to update car", error });
  }
};

// Delete car
exports.deleteCar = async (req, res) => {
  try {
    await Car.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Car deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete car", error });
  }
};
