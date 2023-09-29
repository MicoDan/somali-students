import express, {  Request, Response,NextFunction } from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/userRoutes.js";
import morgan from "morgan";
import lessonRouter from "./routes/lessonRoutes.js";

dotenv.config();

const MONGODB_URI: string = process.env.MONGODB_URI || "";

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log(err.message);
  });

const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", userRouter);
app.use("/lessons", lessonRouter)

//when a user types in the above endpoint they will be directed t o the seedRouter

const port = 5000;

app.listen(port, () => {
  console.log(`server at http://localhost:${port}`);
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).send({ message: err.message });
});
