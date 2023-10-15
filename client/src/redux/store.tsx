import { RootAction } from './RootAction';
import { RootState } from './RootState';
import { combineReducers } from 'redux';
import { goalXpSliceReducer, languageSliceReducer, lessonSliceReducer, lingotSliceReducer, loaderSliceReducer, soundSettingsSliceReducer, streakSliceReducer, unitSliceReducer, userSliceReducer, xpSliceReducer } from './Reducers';

const rootReducer = combineReducers<RootState, RootAction>({
    goalXpSlice: goalXpSliceReducer,
    languageSlice: languageSliceReducer,
    lessonSlice: lessonSliceReducer,
    lingotSlice: lingotSliceReducer,
    loaderSlice: loaderSliceReducer,
    soundSlice:soundSettingsSliceReducer,
    streakSlice: streakSliceReducer,
    userSlice: userSliceReducer,
    xpSlice: xpSliceReducer,
    unitSlice: unitSliceReducer,
});

export default rootReducer;
