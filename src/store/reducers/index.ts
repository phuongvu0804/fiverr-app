import { combineReducers } from 'redux';
import booking from './booking';
import jobReducer from './jobReducer';
import userReducer from './user';

const rootReducer = combineReducers({
    jobCategory: jobReducer,
    booking,
    user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
