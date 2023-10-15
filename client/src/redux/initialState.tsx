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


const userData: Record<string, any> | null = JSON.parse(localStorage.getItem('userData') || 'null');
const all_units: Array<Unit> | null = JSON.parse(localStorage.getItem('all_units') || 'null')


export const initialState = {
  goalXpSlice: {
    goalXp: userData ? userData.xp : '',
  } as GoalXpState,
  languageSlice: {
    language: userData ? userData.language : '', 
  } as LanguageState,
  lessonSlice: {
    lessonsCompleted: userData ? userData.lessonsCompleted: '',
  } as LessonState,
  lingotSlice: {
    lingots: userData ? userData.lingots : '',
  } as LingotState,
  loaderSlice: {
    isLoading: false,
  } as LoaderState,
  soundSlice: {
    soundEffects: userData ? userData.soundEffects : '',
    speakingExercises: userData ? userData.speackingExercises : '',
    listeningExercises: userData ? userData.listeningExercises : '',
  } as SoundSettingsState,
  streakSlice: {
    activeDays: new Set(),
    streak: userData ? userData.streak : '',
  } as StreakState,
  userSlice: {
    _id: userData ? userData._id : '',
    username: userData ? userData.username : '',
    email: userData ? userData.email : '',
    photo: userData ? userData.photo : '',
    isAdmin: userData ? userData.isAdmin : false,
    token: userData ? userData.token : '',
    loggedIn: userData ? userData.loggedIn : false,
  } as UserState,
  xpSlice: {
    xpByDate: userData ? userData.xpByDate : '',
    xpToday: userData ? userData.xpToday : '',
    xpThisWeek: userData ? userData.xpThisWeek : '',
  } as XpState,
  unitSlice: {
    units: all_units ? all_units : '',
  } as unitState
};
