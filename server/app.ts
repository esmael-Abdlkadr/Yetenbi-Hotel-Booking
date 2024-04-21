import express, { Express } from "express";
import cookieParser = require("cookie-parser");
import cors = require("cors");
import authRoute from "./src/routes/authRoute";
import { errorMiddleware } from "./src/utils/error";
import path from "node:path";
import { v2 as cloudinary } from "cloudinary";
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});
const app: Express = express();
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }));
// production script.
app.use(express.static(path.join(__dirname, "../../client/dist")));
app.use("/api/v1/auth", authRoute);
app.use(errorMiddleware);

export default app;
