import { GoalXpState, LanguageState, LessonState, LingotState, LoaderState, SoundSettingsState, StreakState, UserState, XpState } from "./Interface";
import { initialGoalXpState, initialLanguageState, initialLessonState, initialLingotState, initialLoaderState, initialSoundSettingsState, initialStreakState, initialUserState, initialXpState } from "./Initial";
import { RootAction } from "./RootAction";

export const goalXpSliceReducer = (state: GoalXpState = initialGoalXpState, action: RootAction): GoalXpState => {
    switch (action.type) {
        case 'SET_GOAL_XP':
            return { ...state, goalXp: action.payload };
        default:
            return state;
    }
};

export const languageSliceReducer = (state: LanguageState = initialLanguageState, action: RootAction): LanguageState => {
    switch (action.type) {
        case 'SET_LANGUAGE':
            return { ...state, language: action.payload };
        default:
            return state;
    }
}

export const lessonSliceReducer = (state: LessonState = initialLessonState, action: RootAction): LessonState => {
    switch (action.type) {
        case 'INCREASE_LESSONS_COMPLETED':
            return { ...state, lessonsCompleted: action.payload }
        default:
            return state;
    }
}

export const lingotSliceReducer = (state: LingotState = initialLingotState, action: RootAction): LingotState => {
    switch (action.type) {
        case 'INCREASE_LINGOTS':
            return { ...state, lingots: action.payload }
        case 'SPEND_LINGOTS':
            return { ...state, lingots: action.payload }
        default:
            return state;

    }
}

export const loaderSliceReducer = (state: LoaderState = initialLoaderState, action: RootAction): LoaderState => {
    switch (action.type) {
        case 'SET_LOADING':
            return { ...state, isLoading: action.payload }
        default:
            return state
    }
}

export const soundSettingsSliceReducer = (state: SoundSettingsState = initialSoundSettingsState, action: RootAction): SoundSettingsState => {
    switch (action.type) {
        case 'SET_SOUND_EFFECTS':
            return { ...state, soundEffects: action.payload };
        case 'SET_SPEAKING_EXERCISES':
            return { ...state, speakingExercises: action.payload };
        case 'SET_LISTENING_EXERCISES':
            return { ...state, listeningExercises: action.payload };
        default:
            return state;
    }
};

export const streakSliceReducer = (state: StreakState = initialStreakState, action: RootAction): StreakState => {
    switch (action.type) {
        case 'ADD_TODAY':
            const newActiveDays = new Set(state.activeDays);
            // newActiveDays.add(/* Logic to get today's date as a string */);
            // // You can implement logic to update the streak based on activeDays as needed
            return { ...state, activeDays: newActiveDays };
        default:
            return state;
    }
};

export const userSliceReducer = (state: UserState = initialUserState, action: RootAction): UserState => {
    switch (action.type) {
        case 'LOG_IN':
            // Implement logic to update user state when logging in
            return { ...state, loggedIn: true };
        case 'LOG_OUT':
            // Implement logic to reset user state when logging out
            return { ...initialUserState };
        default:
            return state;
    }
};

export const xpSliceReducer = (state: XpState = initialXpState, action: RootAction): XpState => {
    switch (action.type) {
      case 'INCREASE_XP':
        // Implement logic to update xpByDate based on the action payload
        return { ...state };
      default:
        return state;
    }
};

