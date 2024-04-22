import { Request, Response, NextFunction } from "express";
import catchAsync from "../utils/catchAsync";
import AppError from "../utils/AppErrror";
import { Buffer } from "node:buffer";
import cloudinary from "cloudinary";
import { HotelType } from "../models/HotelModel";
const hotelController = {
  createHotel: catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        const imageFile = req.files as Express.Multer.File[];
        const newHotel: HotelType = req.body;
        //   1. upload images to cloudinary.
        const uploadPromises = imageFile.map(async (img) => {
          //   change the images to base64(encode the images).
          const b64 = Buffer.from(img.buffer).toString("base64");
          let dataURI = "data:" + img.mimetype + ";base64," + b64;
          //   upload the buffer to cloudinary.
          const res = await cloudinary.v2.uploader.upload(dataURI);
          return res.url;
        });
        // wait all uploads  before  continue to next step.
        const imageurl = await Promise.all(uploadPromises);
        newHotel.imageurls = imageurl;
      } catch (err: any) {
        console.log("error creating hotel", err);
        throw new AppError("something went wrong", 500);
      }
    },
  ),
};

export default hotelController;
