import {GoalXpState, LanguageState, LessonState, LingotState, LoaderState, SoundSettingsState, StreakState, UserState, XpState} from './Interface.tsx'

export const initialGoalXpState: GoalXpState = {
    goalXp: 10,
};

export const initialLanguageState: LanguageState = {
    language: '', // Adjust based on your "Language" type
};

export const initialLessonState: LessonState = {
    lessonsCompleted: 0,
};

export const initialLingotState: LingotState = {
    lingots: 0,
};

export const initialLoaderState: LoaderState = {
    isLoading: false,
};

export const initialSoundSettingsState: SoundSettingsState = {
    soundEffects: true,
    speakingExercises: true,
    listeningExercises: true,
};

export const initialStreakState: StreakState = {
    activeDays: new Set(),
    streak: 0,
};

export const initialUserState: UserState = {
    _id: '',
    username: '',
    email: '',
    photo: '',
    isAdmin: false,
    token: '',
    loggedIn: false,
};

export const initialXpState: XpState = {
    xpByDate: {},
};
