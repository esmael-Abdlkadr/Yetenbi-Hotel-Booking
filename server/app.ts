import express, { Express } from "express";

import cors from "cors";
import authRoute from "./src/routes/authRoute";

import { errorMiddleware } from "./src/utils/error";

const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "*" }));
app.use("/api/v1/auth", authRoute);
app.use(errorMiddleware);
export default app;
