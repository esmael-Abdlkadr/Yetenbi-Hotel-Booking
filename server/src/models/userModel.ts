export type userTYpe = {
  email: string;
  password: string;
  passwordConfirm: string;
  name: string;
  role: string;
  phone: string;
  address: string;
  passwordResetToken: string;
  passwordResetExpires: Date;
};

import { Schema, model, Document } from "mongoose";
import * as validator from "validator";
import bcrypt from "bcrypt";
import * as crypto from "node:crypto";
export interface IUser extends Document, userTYpe {
  comparePassword: (
    candidatePassword: string,
    userPassword: string
  ) => Promise<boolean>;
  createPasswordResetToken: () => string;
}
const userSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: [true, "Full Name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      validate: {
        // validate email using validator
        validator: (v: string) => {
          return validator.isEmail(v);
        },
        message: (props) => `${props.value} is not a valid email!`,
      },
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      select: false,
    },
    phone: {
      type: String,
      required: [true, "Phone is required"],
    },
    passwordResetToken: String,
    passwordResetExpires: Date,
  },
  { timestamps: true }
);
// hash password before saving
userSchema.pre("save", function (this: IUser, next) {
  if (!this.isModified("password")) return next();
  bcrypt.hash(this.password, 10, (err, hash) => {
    if (err) return next(err);
    this.password = hash;
    next();
  });
});
//password comparison for login.
userSchema.methods.comparePassword = async function (
  candidatePassword: string,
  userPassword: string
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};
//password reset generator.
userSchema.methods.createPasswordResetToken = function () {
  const resetToken = crypto.randomBytes(32).toString("hex");
  this.passwordResetToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");
  // @ts-ignore
  this.passwordResetExpires = new Date(Date.now() + 10 * 60 * 1000);
  return resetToken;
};
const User = model<IUser>("User", userSchema);
export default User;
