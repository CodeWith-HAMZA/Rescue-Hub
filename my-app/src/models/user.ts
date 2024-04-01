import mongoose from "mongoose";

// Define the user schema
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
      maxlength: 50,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
    },
    firstName: {
      type: String,
      required: true,
      trim: true,
      maxlength: 50,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
      maxlength: 50,
    },
    dateOfBirth: {
      type: Date,
      required: true,
    },

    description: {
      type: String,
      maxlength: 500,
    },
    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
      required: true,
    },

    phone: {
      type: String,
      trim: true,
    },
    role: [{ type: String, enum: ["user", "admin"], default: "user" }],
    avatar: {
      type: String,
      default: "default-avatar.jpg", // Default avatar image
    },
  },
  { timestamps: true }
);

// Create the User model
const User = mongoose.models["User"] || mongoose.model("User", userSchema);

export default User;
