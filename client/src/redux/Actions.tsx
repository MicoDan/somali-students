import { Unit } from "../utils/units";

// Define TypeScript types for actions
export interface SetGoalXpAction {
    type: 'SET_GOAL_XP';
    payload: number;
}

export interface SetLanguageAction {
    type: 'SET_LANGUAGE';
    payload: string; // Adjust the type based on your "Language" type
}

export interface IncreaseLessonsCompletedAction {
    type: 'INCREASE_LESSONS_COMPLETED';
    payload: number;
}

export interface IncreaseLingotsAction {
    type: 'INCREASE_LINGOTS';
    payload: number;
}

export interface SpendLingotsAction {
    type: 'SPEND_LINGOTS';
    payload: number;
}

export interface SetLoadingAction {
    type: 'SET_LOADING';
    payload: boolean;
}

export interface SetSoundEffectsAction {
    type: 'SET_SOUND_EFFECTS';
    payload: boolean;
}

export interface SetSpeakingExercisesAction {
    type: 'SET_SPEAKING_EXERCISES';
    payload: boolean;
}

export interface SetListeningExercisesAction {
    type: 'SET_LISTENING_EXERCISES';
    payload: boolean;
}

export interface AddTodayAction {
    type: 'ADD_TODAY';
}

export interface LogInAction {
    type: 'LOG_IN';
}

export interface LogOutAction {
    type: 'LOG_OUT';
}

export interface SetXpDateAction {
    type: 'SET_XP_BY_DATE';
    payload: Record<string, number>;
}
export interface SetXpTodayAction {
    type: 'SET_XP_TODAY';
    payload: number;
}
export interface SetXpThisWeekAction {
    type: 'SET_XP_THIS_WEEK';
    payload: number;
}

export interface SetUnitsAction{
    type: 'SET_UNITS';
    payload: Array<Unit>;
}