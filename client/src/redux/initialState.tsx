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
  } as XpState,
};

export { initialState };
