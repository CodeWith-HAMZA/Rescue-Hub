import mongoose from "mongoose";

// Define the applicant schema
const applicantSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    disasterType: {
      type: String,
      enum: ["Earthquake", "Flood", "Other"],
    },
    address: {
      street: { type: String },
      city: { type: String },
      state: { type: String },
      country: { type: String },
      postalCode: { type: String },
    },
    description: {
      type: String,
      maxlength: 500,
    },
  },
  { timestamps: true }
);

// Create the Applicant model
const Applicant =
  mongoose.models["Applicant"] || mongoose.model("Applicant", applicantSchema);

export default Applicant;
