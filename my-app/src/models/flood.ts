import mongoose from "mongoose";

 

// Define the flood schema
const floodSchema = new mongoose.Schema({
  severity: {
    type: String,
    enum: ['Minor', 'Moderate', 'Severe'],
    required: true
  },
  location: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  description: {
    type: String,
    maxlength: 500
  }
});

// Create the Flood model
const Flood =mongoose.models['Flood'] || mongoose.model('Flood', floodSchema);

export default Flood;
