import { SetGoalXpAction, SetLanguageAction, IncreaseLessonsCompletedAction, IncreaseLingotsAction, SpendLingotsAction, SetLoadingAction, SetSoundEffectsAction, SetSpeakingExercisesAction, SetListeningExercisesAction, AddTodayAction, LogInAction, LogOutAction, IncreaseXpAction } from "./Actions";

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
  | IncreaseXpAction;