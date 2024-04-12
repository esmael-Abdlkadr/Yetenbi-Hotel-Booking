import "dotenv/config";
import mongoose from "mongoose";
import { configDotenv } from "dotenv";
import app from "./app";

// Configure dotenv to read environment variables from a .env file
configDotenv({ path: __dirname + "/.env" });

// Handle uncaught exceptions
process.on("uncaughtException", (err: Error) => {
  console.log("UNCAUGHT EXCEPTION! 💥 Shutting down...");
  console.log(err.name, err.message);
  process.exit(1);
});

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URL as string)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err: Error) => {
    console.log(err);
  });

// Start the Express application
app.listen(7000, () => {
  console.log(`Server is running on port 7000`);
});

// Handle unhandled promise rejections
process.on("unhandledRejection", (err: Error) => {
  console.log("UNHANDLED REJECTION! 💥 Shutting down...");
  console.log(err.name, err.message);
  process.exit(1);
});
