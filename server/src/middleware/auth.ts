import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
declare global {
  namespace Express {
    interface Request {
      userId: string;
    }
  }
}

interface CustomJwtPayload extends JwtPayload {
  userId: string;
}
const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies["jwt_token"];
  if (!token) {
    return res.status(401).json({
      status: "fail",
      message: "You are not logged in",
    });
  }
  //   verify tokens.
  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET!,
    ) as CustomJwtPayload;
    req.userId = decoded.userId;
    next();
  } catch (err) {
    return res.status(401).json({
      status: "fail",
      message: "Invalid token",
    });
  }
};
export default verifyToken;
