import UserModel from "../models/userModel";
import BlackList from "../models/blackListModel";
import catchAsync from "../utils/catchAsync";
import AppError from "../utils/AppErrror";
import { Request, Response, NextFunction } from "express";
import { IUser } from "../models/userModel";
import jwt from "jsonwebtoken";
const authController = {
  signup: catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
      const { email, password, passwordConfirm, name, phone } = req.body;
      console.log("Signup request body:", req.body);
      const user = await UserModel.findOne({ email });
      if (user) {
        return next(new AppError("User already exists", 400));
      }
      const newUser = await UserModel.create({
        email,
        password,
        passwordConfirm,
        name,
        phone,
      });
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
        message: "User created successfully",
        data: {
          newUser,
          token,
        },
      });
    },
  ),
  login: catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const { emailOrPhone, password } = req.body;
    console.log("Login request body:", req.body);
    if (!emailOrPhone || !password) {
      return next(new AppError("Please provide email/phone and password", 400));
    }
    const user = await UserModel.findOne({
      $or: [{ email: emailOrPhone }, { phone: emailOrPhone }],
    }).select("+password");
    if (!user || !(await user.comparePassword(password, user.password))) {
      return next(new AppError("Incorrect email/phone or password", 401));
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET!, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });
    res.cookie("jwt_token", token, {
      httpOnly: false,
      secure: process.env.NODE_ENV === "production",
      maxAge: 1000 * 60 * 60 * 24 * 30,
    });
    res.status(200).json({
      status: "success",
      message: "User logged in successfully",
      data: {
        user,
        token,
      },
    });
  }),
  protect: catchAsync(
    async (req: Request, _res: Response, next: NextFunction) => {
      let token;
      if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
      ) {
        token = req.headers.authorization.split(" ")[1];
      }
      if (req.cookies.jwt_token) {
        token = req.cookies.jwt_token;
      }
      if (!token) {
        return next(new AppError(" token not found", 401));
      }

      if (!process.env.JWT_SECRET) {
        return next(new AppError("JWT_SECRET not defined", 500));
      }
      // !=null assertion operator(tell TS the expression
      // is not null or undefined)
      const decoded = jwt.verify(token, process.env.JWT_SECRET) as {
        id: string;
      };
      const user = await UserModel.findById(decoded.id);
      if (!user) {
        return next(new AppError("User does not exist", 401));
      }
      req.user = user;
      next();
    },
  ),
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
  updatePassword: catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
      const user = await UserModel.findById(req.user.id).select("+password");
      if (!user) {
        return next(new AppError("User not found", 404));
      }

      if (
        !(await user.comparePassword(req.body.currentPassword, user.password))
      ) {
        return next(new AppError("Incorrect password", 401));
      }
      user.password = req.body.password;
      user.passwordConfirm = req.body.passwordConfirm;
      await user.save();
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET!, {
        expiresIn: process.env.JWT_EXPIRES_IN,
      });
      res.cookie("jwt", token, {
        expires: new Date(
          Date.now() +
            Number(process.env.JWT_COOKIE_EXPIRES_IN) * 24 * 60 * 60 * 1000,
        ),
        httpOnly: false,
      });
      res.status(200).json({
        status: "success",
        message: "Password updated successfully",
      });
    },
  ),
};

export default authController;
