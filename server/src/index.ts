// @ts-ignore
import express, { Request, Response } from "express";
// @ts-ignore
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
// connect to mongodb
mongoose
  .connect(process.env.MONGO_URL as string)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "*" }));
app.get("/api/test", (req: Request, res: Response) => {
  res.send("Hello World");
});
app.listen(7000, () => {
  console.log(`Server is running on port 7000`);
});
