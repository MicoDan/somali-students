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
} from './Interface.tsx';


const userData: Record<string, any> | null = JSON.parse(localStorage.getItem('userData') || 'null');


const initialState = {
  goalXpSlice: {
    goalXp: 10,
  } as GoalXpState,
  languageSlice: {
    language: '', 
  } as LanguageState,
  lessonSlice: {
    lessonsCompleted: 0,
  } as LessonState,
  lingotSlice: {
    lingots: 0,
  } as LingotState,
  loaderSlice: {
    isLoading: false,
  } as LoaderState,
  soundSlice: {
    soundEffects: true,
    speakingExercises: true,
    listeningExercises: true,
  } as SoundSettingsState,
  streakSlice: {
    activeDays: new Set(),
    streak: 0,
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
    xpByDate: {},
  } as XpState,
};

export { initialState };
