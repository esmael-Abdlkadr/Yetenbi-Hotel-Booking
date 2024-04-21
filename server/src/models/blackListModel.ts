export type blackListType = {
  token: string;
};
import mongoose from "mongoose";
import { Schema, model } from "mongoose";
const blackListSchema = new Schema<blackListType>({
  token: {
    type: String,
    required: true,
    unique: true,
  },
});
const BlackList = model<blackListType>("BlackList", blackListSchema);
export default BlackList;
