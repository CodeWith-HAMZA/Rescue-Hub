import mongoose from "mongoose";

// Define the earthquake schema
const earthquakeSchema = new mongoose.Schema({
  magnitude: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  description: {
    type: String,
    maxlength: 500,
  },
});

// Create the Earthquake model
const Earthquake =
  mongoose.models["Earthquake"] ||
  mongoose.model("Earthquake", earthquakeSchema);

export default Earthquake;
