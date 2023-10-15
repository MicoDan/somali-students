import { GoalXpState, LanguageState, LessonState, LingotState, LoaderState, SoundSettingsState, StreakState, UserState, XpState, unitState} from './Interface.tsx'

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
    unitSlice: unitState;
  }
  
  // Define a TypeScript type for your actions

  