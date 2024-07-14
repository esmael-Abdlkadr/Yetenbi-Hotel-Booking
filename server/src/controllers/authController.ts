import UserModel from "../models/userModel";
import BlackList from "../models/blackListModel";
import catchAsync from "../utils/catchAsync";
import AppError from "../utils/AppErrror";
import { Request, Response, NextFunction } from "express";
import { IUser } from "../models/userModel";
import jwt from "jsonwebtoken";
import authFactory from "../utils/authFactory";
const authController = {
  signup: catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
      const { email, password, passwordConfirm, name, phone } = req.body;
      if (password !== passwordConfirm) {
        return next(new AppError("Passwords do not match", 400));
      }

      const userChecked = await UserModel.findOne({ email });
      if (userChecked) {
        return next(new AppError("User already exists", 400));
      }
      const newUser = await UserModel.create({
        email,
        password,
        name,
        phone,
      });
      // convert the user to an object to remove the password from the response.
      const userObj = newUser.toObject();
      // destructuring to exclude the password and gather the rest of the properties
      const { password: _, ...user } = userObj;
      const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET!, {
        expiresIn: process.env.JWT_EXPIRES_IN,
      });
      res.cookie("jwt_token", token, {
        httpOnly: false,
        secure: process.env.NODE_ENV === "production",
        maxAge: 1000 * 60 * 60 * 24 * 30,
      });

      res.status(201).json({
        status: "success",
        message: "ccount created successfully",
        data: {
          user,
          token,
        },
      });
    }
  ),
  login: authFactory.login(UserModel),
  protect: authFactory.protect(UserModel),
  updatePassword: authFactory.updatePassword(UserModel),
  logout: (_req: Request, res: Response) => {
    res.cookie("jwt_token", "loggedout", {
      expires: new Date(Date.now() + 10 * 1000),
      httpOnly: false,
    });
    res.status(200).json({
      status: "success",
      message: "User logged out successfully",
    });
  },
  //   verify tokens.
  verifyToken: (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send({ userId: req.userId });
  },
};

export default authController;
