import axios from 'axios';
import { Unit } from '../utils/units.ts';
import {
  GoalXpState,
  LanguageState,
  LessonState,
  LingotState,
  LoaderState,
  SoundSettingsState,
  StreakState,
  UserState,
  XpState,
  unitState,
} from './Interface.tsx';


export let userData: Record<string, any> | null = JSON.parse(localStorage.getItem('userData') || 'null');
const all_units: Array<Unit> | null = JSON.parse(localStorage.getItem('all_units') || 'null')

const fetchItemsFromLocalStorage = async () => {
  const { data } = await axios.get(`http://localhost:5000/users/user/${userData?._id}`)
  userData = data;
  console.log(userData);
};

window.addEventListener('beforeunload', fetchItemsFromLocalStorage);


export const initialState = {
  goalXpSlice: {
    goalXp: userData?.goalXp,
  } as GoalXpState,
  languageSlice: {
    language: userData?.language,
  } as LanguageState,
  lessonSlice: {
    lessonsCompleted: userData?.lessonsCompleted,
  } as LessonState,
  lingotSlice: {
    lingots: userData?.lingots,
  } as LingotState,
  loaderSlice: {
    isLoading: false,
  } as LoaderState,
  soundSlice: {
    soundEffects: userData?.soundEffects,
    speakingExercises: userData?.speackingExercises,
    listeningExercises: userData?.listeningExercises,
  } as SoundSettingsState,
  streakSlice: {
    activeDays: new Set(),
    streak: userData?.streak,
  } as StreakState,
  userSlice: {
    _id: userData?._id,
    username: userData?.username,
    email: userData?.email,
    photo: userData?.photo,
    isAdmin: userData?.isAdmin,
    token: userData?.token,
    loggedIn: userData?.loggedIn,
  } as UserState,
  xpSlice: {
    xpByDate: userData?.xpByDate,
    xpToday: userData?.xpToday,
    xpThisWeek: userData?.xpThisWeek,
  } as XpState,
  unitSlice: {
    units: all_units ? all_units : '',
  } as unitState
};
