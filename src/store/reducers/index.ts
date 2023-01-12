import { combineReducers } from 'redux';
import alertReducer from './alert';
import booking from './booking';
import jobReducer from './jobReducer';
import userReducer from './user';

const rootReducer = combineReducers({
    jobCategory: jobReducer,
    booking,
    alert: alertReducer,
    user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
