import { DateString } from "../utils/dateString";
import { Unit } from "../utils/units";

// Define TypeScript types for state slices
export interface GoalXpState {
    goalXp: number;
}

export interface xpState{
    xpByDate: Record<DateString, number>;
    xpToday: number;
    xpThisWeek: number;
}

export interface LanguageState {
    language: string; // Adjust the type based on your "Language" type
}

export interface LessonState {
    lessonsCompleted: number;
}

export interface LingotState {
    lingots: number;
}

export interface LoaderState {
    isLoading: boolean;
}

export interface SoundSettingsState {
    soundEffects: boolean;
    speakingExercises: boolean;
    listeningExercises: boolean;
}

export interface StreakState {
    activeDays: Set<string>;
    streak: number;
}

export interface UserState {
    _id: string;
    username: string;
    email: string;
    photo: string;
    isAdmin: boolean;
    token: string;
    loggedIn: boolean;
}

export interface XpState {
    xpByDate: Record<string, number>;
    xpToday: number;
    xpThisWeek: number;
}
export interface unitState{
    units: Array<Unit>;
}
