import { Response, NextFunction } from "express";
import { RequestWithUser } from "../controllers/authController";

type AsyncFunction = (
  req: RequestWithUser,
  res: Response,
  next: NextFunction,
) => Promise<void>;

const catchAsync = (fn: AsyncFunction) => {
  return (req: RequestWithUser, res: Response, next: NextFunction) => {
    fn(req, res, next).catch(next);
  };
};

export default catchAsync;
