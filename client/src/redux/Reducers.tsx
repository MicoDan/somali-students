import { GoalXpState, LanguageState, LessonState, LingotState, LoaderState, SoundSettingsState, StreakState, UserState, XpState, unitState } from "./Interface";
import { initialState } from "./initialState";
import { RootAction } from "./RootAction";
import dayjs from "dayjs";

export const goalXpSliceReducer = (state: GoalXpState = initialState.goalXpSlice, action: RootAction): GoalXpState => {
    switch (action.type) {
        case 'SET_GOAL_XP':
            return { ...state, goalXp: action.payload };
        default:
            return state;
    }
};

export const languageSliceReducer = (state: LanguageState = initialState.languageSlice, action: RootAction): LanguageState => {
    switch (action.type) {
        case 'SET_LANGUAGE':
            return { ...state, language: action.payload };
        default:
            return state;
    }
}

export const lessonSliceReducer = (state: LessonState = initialState.lessonSlice, action: RootAction): LessonState => {
    switch (action.type) {
        case 'INCREASE_LESSONS_COMPLETED':
            return { ...state, lessonsCompleted: action.payload }
        default:
            return state;
    }
}

export const lingotSliceReducer = (state: LingotState = initialState.lingotSlice, action: RootAction): LingotState => {
    switch (action.type) {
        case 'INCREASE_LINGOTS':
            return { ...state, lingots: action.payload }
        case 'SPEND_LINGOTS':
            return { ...state, lingots: action.payload }
        default:
            return state;
    }
}

export const loaderSliceReducer = (state: LoaderState = initialState.loaderSlice, action: RootAction): LoaderState => {
    switch (action.type) {
        case 'SET_LOADING':
            return { ...state, isLoading: action.payload }
        default:
            return state
    }
}

export const soundSettingsSliceReducer = (state: SoundSettingsState = initialState.soundSlice, action: RootAction): SoundSettingsState => {
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

export const streakSliceReducer = (state: StreakState = initialState.streakSlice, action: RootAction): StreakState => {
    switch (action.type) {
        case "ADD_TODAY":
          const newActiveDays = new Set(state.activeDays);
          const todayDateString = dayjs().format("YYYY-MM-DD"); // Get today's date as a string
          newActiveDays.add(todayDateString);
    
          // Calculate the streak based on activeDays
          let streak = state.streak;
          let currentDate = dayjs();
          while (newActiveDays.has(currentDate.format("YYYY-MM-DD"))) {
            streak++;
            currentDate = currentDate.subtract(1, "day");
          }
          return { ...state, activeDays: newActiveDays, streak };
        default:
          return state;
      }
};

export const userSliceReducer = (state: UserState = initialState.userSlice, action: RootAction): UserState => {
    switch (action.type) {  
        case 'LOG_IN':
            // Implement logic to update user state when logging in
            return { ...state, loggedIn: true };
        case 'LOG_OUT':
            // Implement logic to reset user state when logging out
            return { ...initialState.userSlice };
        default:
            return state;
    }
}
    
export const xpSliceReducer = (state: XpState = initialState.xpSlice, action: RootAction): XpState => {
    switch (action.type) {
      case 'SET_XP_BY_DATE':
        return {...state, xpByDate: action.payload}
      case 'SET_XP_TODAY':
        return {...state, xpToday: action.payload}
      case 'SET_XP_THIS_WEEK':
        return {...state, xpThisWeek: action.payload}
      default:
        return state;
    }
};

export const unitSliceReducer = (state: unitState = initialState.unitSlice, action: RootAction): unitState => {
    switch(action.type){
        case 'SET_UNITS':
            return {...state, units: action.payload}
        default:
            return state;
    }
}
