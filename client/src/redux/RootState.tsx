import {GoalXpState, LanguageState, LessonState, LingotState, LoaderState, SoundSettingsState, StreakState, UserState, XpState} from './Interface.tsx'

export interface RootState {
    goalXpSlice: GoalXpState;
    languageSlice: LanguageState;
    lessonSlice: LessonState;
    lingotSlice: LingotState;
    loaderSlice: LoaderState;
    soundSlice: SoundSettingsState;
    streakSlice: StreakState;
    userSlice: UserState;
    xpSlice: XpState;
  }
  
  // Define a TypeScript type for your actions

  