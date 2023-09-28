import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import expressAsyncHandler from "express-async-handler";
import { generateToken, isAuth } from "../utils.js";
import express from "express";
import multer from "multer";
import { v2 as cloudinary } from 'cloudinary';
import streamifier from 'streamifier';
import { Request, Response } from 'express'

const upload = multer();

const userRouter = express.Router();

userRouter.post(
  "/signup",
  expressAsyncHandler(async (req: Request, res: Response) => {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      photo: req.body.photo,
      password: bcrypt.hashSync(req.body.password),
    });
    if (req.body.password === process.env.PASSWORD) {
      newUser.isAdmin = true;
    }
    // console.log(newUser);
    const user = await newUser.save();
    // console.log(user);
    res.send({
      _id: user._id,
      username: user.username,
      email: user.email,
      photo: user.photo,
      isAdmin: user.isAdmin,
      token: generateToken(user),
      loggedIn: user.loggedIn,
      goalXp: user.goalXp,
      language: user.language,
      lessonsCompleted: user.lessonsCompleted,
      lingots: user.lingots,
      isLoading: user.isLoading,
      soundEffects: user.soundEffects,
      speakingExercises: user.speakingExercises,
      listeningExercises: user.listeningExercises,
      activeDays: user.activeDays,
      streak: user.streak,
      xpByDate: user.xpByDate,
    });
  })
);

userRouter.post(
  "/signin",
  expressAsyncHandler(async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      res.status(401).send({ message: "Invalid email or password" });
      return;
    }
    if (bcrypt.compareSync(req.body.password, user.password)) {
      res.send({
        _id: user._id,
        username: user.username,
        email: user.email,
        photo: user.photo,
        isAdmin: user.isAdmin,
        token: generateToken(user),
        loggedIn: user.loggedIn,
        goalXp: user.goalXp,
        language: user.language,
        lessonsCompleted: user.lessonsCompleted,
        lingots: user.lingots,
        isLoading: user.isLoading,
        soundEffects: user.soundEffects,
        speakingExercises: user.speakingExercises,
        listeningExercises: user.listeningExercises,
        activeDays: user.activeDays,
        streak: user.streak,
        xpByDate: user.xpByDate,
      });
      return;
    }
    res.status(401).send({ message: "Invalid email or password" });
  })
);

userRouter.post("/picture", upload.single("file"),
  async (req, res) => {
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });
    const streamUpload = (req) => {
      return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream((error, result) => {
          if (result) {
            resolve(result);
          } else {
            reject(error);
          }
        });
        streamifier.createReadStream(req.file.buffer).pipe(stream);
      });
    };
    const result = await streamUpload(req);
    res.send(result);
  });

  userRouter.put(
    '/profile',
    isAuth,
    expressAsyncHandler(async (req, res) => {
      const user = await User.findById(req.body.id)
      if(user) {
        user.username = req.body.newname || user.username
        user.email = req.body.email || user.email
        if(req.body.password) {
          user.password = bcrypt.hashSync(req.body.password, 8)
        }
        const updatedUser = await user.save()
        res.send({
            _id: user._id,
            username: user.username,
            email: user.email,
            photo: user.photo,
            isAdmin: user.isAdmin,
            token: generateToken(user),
            loggedIn: user.loggedIn,
            goalXp: user.goalXp,
            language: user.language,
            lessonsCompleted: user.lessonsCompleted,
            lingots: user.lingots,
            isLoading: user.isLoading,
            soundEffects: user.soundEffects,
            speakingExercises: user.speakingExercises,
            listeningExercises: user.listeningExercises,
            activeDays: user.activeDays,
            streak: user.streak,
            xpByDate: user.xpByDate,
        })
      } else {
        res.status(404).send('user not found')
      }
    })
  )
export default userRouter;
