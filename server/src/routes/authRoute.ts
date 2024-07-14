import express, { RequestHandler } from "express";
import authController from "../controllers/authController";
import rateLimit from "express-rate-limit";

import verifyToken from "../middleware/auth";
const router = express.Router();
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 100, // Limit each IP to 100 requests per `window`
  message:
    "Too many login attempts from this IP, please try again after an hour",
});
router.route("/signup").post(authController.signup as RequestHandler);
router.route("/login").post(limiter, authController.login as RequestHandler);
router.route("/logout").post(authController.logout);
router
  .route("/verify-token")
  .get(verifyToken, authController.verifyToken as RequestHandler);

export default router;
