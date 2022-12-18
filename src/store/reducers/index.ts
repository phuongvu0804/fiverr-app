import { combineReducers } from 'redux';
import jobReducer from './jobReducer';

const rootReducer = combineReducers({
    jobCategory: jobReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
