import express from "express";
import authController from "../controllers/authController";
import hotelController from "../controllers/hotelController";
import { upload } from "../utils/multer";

const router = express.Router();
router.use(authController.protect);
router
  .route("/")
  .post(upload.array("imageFile", 6), hotelController.createHotel);
export default router;
