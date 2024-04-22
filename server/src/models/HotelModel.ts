import { Schema, model, Types, Mixed } from "mongoose";

export type HotelType = {
  _id: string;
  admin: Types.ObjectId;
  name: string;
  city: string;
  type: string;
  description: string;
  adultCount: number;
  childCount: number;
  amenities: string[];
  pricePerNight: number;
  rating: number;
  imageurls: string[];
  lastUpdated: Date;
  location: {
    type: string;
    coordinates: number[];
  };
};

const hotelSchema = new Schema<HotelType>(
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
    city: {
      type: String,
      required: [true, "city is required"],
      trim: true,
    },
    type: { type: String, required: [true, "type is required"] },
    adultCount: { type: Number, required: true },
    childCount: { type: Number, required: true },
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
    pricePerNight: {
      type: Number,
      required: [true, "price per night is required"],
    },
    imageurls: {
      type: [String],
      required: [true, "image is required"],
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

const Hotel = model<HotelType>("Hotel", hotelSchema);
export default Hotel;
