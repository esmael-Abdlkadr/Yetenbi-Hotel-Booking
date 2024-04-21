import express, { Express } from "express";
import cookieParser = require("cookie-parser");
import cors = require("cors");

import authRoute from "./src/routes/authRoute";

import { errorMiddleware } from "./src/utils/error";

const app: Express = express();
app.use(cookieParser());
console.log("Frontend URL:", process.env.FRONTEND_URL);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }));
app.use("/api/v1/auth", authRoute);
app.use(errorMiddleware);
export default app;
