import express, { Express } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import authRoute from "./src/routes/authRoute";
import hotelRoute from "./src/routes/hotelRoute";
import adminRoute from "./src/routes/adminRoute";
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
app.use("/api/v1/hotel", hotelRoute);
app.use("/api/v1/admin", adminRoute);

app.use(errorMiddleware);

export default app;
