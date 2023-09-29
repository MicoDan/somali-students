import jwt, { JwtPayload } from "jsonwebtoken";
import { Response, Request, NextFunction } from 'express';
import dotenv from 'dotenv';

dotenv.config();

declare module 'express' {
  interface Request {
    user?: JwtPayload;
    user_id?: any;
    // Update the type of the user property
  }
}

export const generateToken = (user: any) => {
  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    process.env.JWT_SECRET as string,
    {
      expiresIn: "30d",
    }
  );
};

export const baseUrl = () =>
  process.env.BASE_URL
    ? process.env.BASE_URL
    : process.env.NODE_ENV !== "production"
    ? "http://localhost:3000"
    : "https://yourdomain.com";

export const isAuth = (req: Request, res: Response, next: NextFunction) => {
  const authorization = req.headers.authorization;
  if (authorization) {
    const token = authorization.split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET as string, (err, decode) => {
      if (err || typeof decode !== 'object' || !decode._id) { 
        return res.status(401).send({ message: "Invalid Token" });
      } else {
        req.user = decode as JwtPayload; 
        req.user_id = decode._id;
        next();
      }
    });
  } else {
    res.status(401).send({ message: "No Token" });
  }
};

export const isAdmin = (req: Request, res: Response, next: NextFunction) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401).send({ message: "Invalid Admin Token" });
  }
};
