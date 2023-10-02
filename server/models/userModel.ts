import mongoose, { Document } from 'mongoose';


const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }, 
  photo: { type: String, default: '' }, 
  isAdmin: { type: Boolean, default: false }, 
  token: { type: String, default: '' }, 
  loggedIn: { type: Boolean, default: false }, 
  goalXp: { type: Number, default: 0 },
  language: { type: String, default: '' },
  lessonsCompleted: { type: Number, default: 0 },
  lingots: { type: Number, default: 0 },
  soundEffects: { type: Boolean, default: true },
  speakingExercises: { type: Boolean, default: true },
  listeningExercises: { type: Boolean, default: true },
  activeDays: { type: [String], default: [] }, 
  streak: { type: Number, default: 0 },
  xpByDate: { type: Object, default: {} },
});

interface UserModel extends Document {
  username: string;
  email: string;
  password: string;
  photo: string;
  isAdmin: boolean;
  token: string;
  loggedIn: boolean;
  goalXp: number;
  language: string;
  lessonsCompleted: number;
  lingots: number;
  isLoading: boolean;
  soundEffects: boolean;
  speakingExercises: boolean;
  listeningExercises: boolean;
  activeDays: string[];
  streak: number;
  xpByDate: Record<string, number>;
}

const User = mongoose.model<UserModel>('User', userSchema);

export default User;
