// custom.d.ts
declare namespace Express {
  export interface Request {
    user: IUser;
  }
}
