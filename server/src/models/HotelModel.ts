import mongoose from "mongoose";
import { Schema, model } from "mongoose";
const hotelSchema = new Schema(
  {
    admin: {
      type: Schema.Types.ObjectId,
      ref: "Admin",
      required: [true, "admin is required"],
    },
    name: {
      type: String,
      required: [true, "name is required"],
      trim: true,
    },
    address: {
      type: String,
      required: [true, "address is required"],
      trim: true,
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
    },
    description: {
      type: String,
      required: [true, "description is required"],
    },
    amenities: {
      type: [String], // Array of strings representing amenities (Wi-Fi, pool, gym, etc.)

      trim: true,
    },
    ImgUrl: {
      type: [String], // Array of URLs for hotel photos
      validate: {
        // Optional validation for valid URL format
        validator: (url: string) => {
          // Implement URL validation using a regular expression or a URL validation library
          return true; // Replace with your validation logic
        },
        message: (props: { value: any }) =>
          `${props.value} is not a valid image URL!`,
      },
    },
    location: {
      //     geological data for  mapping.
      type: {
        type: String,
        enum: ["Point"],
      },
      coordinates: {
        type: [Number], // Array of two numbers representing longitude and latitude
        index: "2dsphere", // 2dsphere index for efficient geospatial queries
      },
    },
  },
  {
    timestamps: true,
  },
);
const Hotel = model("Hotel", hotelSchema);
module.exports = Hotel;
