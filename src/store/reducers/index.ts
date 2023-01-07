import { combineReducers } from 'redux';
import bookingReducer from './bookingReducer';
import jobReducer from './jobReducer';
import userReducer from './user';

const rootReducer = combineReducers({
    jobCategory: jobReducer,
    booking: bookingReducer,
    user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
