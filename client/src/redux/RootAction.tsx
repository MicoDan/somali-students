import { SetGoalXpAction, SetLanguageAction, IncreaseLessonsCompletedAction, IncreaseLingotsAction, SpendLingotsAction, SetLoadingAction, SetSoundEffectsAction, SetSpeakingExercisesAction, SetListeningExercisesAction, AddTodayAction, LogInAction, LogOutAction, SetXpDateAction, SetXpTodayAction, SetXpThisWeekAction, SetUnitsAction } from "./Actions";

export type RootAction =
  | SetGoalXpAction
  | SetLanguageAction
  | IncreaseLessonsCompletedAction
  | IncreaseLingotsAction
  | SpendLingotsAction
  | SetLoadingAction
  | SetSoundEffectsAction
  | SetSpeakingExercisesAction
  | SetListeningExercisesAction
  | AddTodayAction
  | LogInAction
  | LogOutAction
  | SetXpDateAction
  | SetXpTodayAction
  | SetXpThisWeekAction
  | SetUnitsAction