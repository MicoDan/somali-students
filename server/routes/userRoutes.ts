import User, { userDocument } from "../models/userModel.js";
import bcrypt from "bcryptjs";
import expressAsyncHandler from "express-async-handler";
import { generateToken, isAuth } from "../utils.js";
import express from "express";
import multer from "multer";
import { v2 as cloudinary } from 'cloudinary';
import streamifier from 'streamifier';
import { Request, Response } from 'express'
import { IUnit } from "../models/UnitModel.js";
import { addXpToday, xpAt } from "../utils/xp.js";
import dayjs from "dayjs";
import { range, sum } from "../utils/array-utils.js";

const upload = multer();

const userRouter = express.Router();

userRouter.get(
  '/all',
  isAuth,
  expressAsyncHandler(async (req: Request, res: Response) => {
    const users = await User.find({});
    res.send(users);
  })
);


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
      xpToday: user.xpToday,
      xpThisWeek: user.xpThisWeek,
      isCurrentUser: user.isCurrentUser
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
        xpToday: user.xpToday,
        xpThisWeek: user.xpThisWeek,
        isCurrentUser: user.isCurrentUser
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
    const streamUpload = (req: Request) => {
      return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream((error, result) => {
          if (result) {
            resolve(result);
          } else {
            reject(error);
          }
        });
        if(req.file){
        streamifier.createReadStream(req.file.buffer).pipe(stream);
        }
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
            xpToday: user.xpToday,
            xpThisWeek: user.xpThisWeek,
            isCurrentUser: user.isCurrentUser
        })
      } else {
        res.status(404).send('user not found')
      }
    })
)

userRouter.post('/:userId/increaseLessonsCompleted', async (req, res) => {
  const { userId } = req.params;
  const  by  = req.body

  try {
    // Find the user by ID and update lessonsCompleted.
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $inc: { lessonsCompleted: by } },
      { new: true, select: 'lessonsCompleted' } // Select only lessonsCompleted field
    );

    res.status(200).json({ lessonsCompleted: updatedUser?.lessonsCompleted });
  } catch (error) {
    res.status(500).json({ error: 'Failed to increase lessonsCompleted' });
  }
})

userRouter.post('/:userId/increaseLingots', async (req, res) => {
  const { userId } = req.params;
  const  by  = req.body

  try {
    // Find the user by ID and update lingots.
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $inc: { lingots: by } },
      { new: true, select: 'lingots' } // Select only lingots field
    );

    res.status(200).json({ lingots: updatedUser?.lingots });
  } catch (error) {
    res.status(500).json({ error: 'Failed to increase lingots' });
  }
})

userRouter.post('/:userId/increaseXp', async (req, res) => {
  const { userId } = req.params;
  const  by  = req.body

  try {
    // Find the user by ID and update lingots.
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $inc: { goalXp: by } },
      { new: true, select: 'lingots' } // Select only lingots field
    );

    res.status(200).json({ goalXp: updatedUser?.goalXp });
  } catch (error) {
    res.status(500).json({ error: 'Failed to increase lingots' });
  }
})
userRouter.put('/update-lessons-completed/:userId', async (req, res) => {
  const { userId } = req.params;
  const { unitNumber, units } = req.body

  try {
    // Find the user by userId
    const user: userDocument | null = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
 
    const totalLessonsToJumpToUnit: number = units
      .filter((unit: IUnit) => unit.unitNumber < parseInt(unitNumber))
      .map((unit:IUnit) => unit.tiles.length)
      .reduce((a: number, b: number) => a + b, 0);

    user.lessonsCompleted = Math.max(user.lessonsCompleted, totalLessonsToJumpToUnit);

    await user.save();

    const lessonsCompleted = user.lessonsCompleted

    return res.status(200).json(lessonsCompleted);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

userRouter.post('/add-xp/:userId', async (req, res) => {
  const { userId } = req.params
  const { xp } = req.body;

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Calculate XP for today and update the user's document
    const updatedXpByDate = addXpToday(user.xpByDate, xp);
    user.xpByDate = updatedXpByDate;

    await user.save();
    const newXpDate = user.xpByDate

    res.status(200).json({ newXpDate });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Route to get XP earned today
userRouter.get('/xp-today/:userId', async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const xpToday = xpAt(user.xpByDate, dayjs());
    
    res.status(200).json({ xpToday });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Route to get XP earned this week
userRouter.get('/xp-this-week/:userId', async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const today = dayjs();
    const xpThisWeek = sum(
      range(0, today.day() + 1).map((daysBack: number) =>
        xpAt(user.xpByDate, today.add(-daysBack, 'day'))
      )
    );

    res.status(200).json({ xpThisWeek });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

export default userRouter;
