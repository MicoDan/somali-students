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
  
export const initialState = {
    goalXpSlice: {
      goalXp: 10,
    } as GoalXpState,
    languageSlice: {
      language: '', // Adjust based on your "Language" type
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
      _id: '',
      username: '',
      email: '',
      photo: '',
      isAdmin: false,
      token: '',
      loggedIn: false,
    } as UserState,
    xpSlice: {
      xpByDate: {},
    } as XpState,
};
  