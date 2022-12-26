import { combineReducers } from 'redux';
import bookingReducer from './bookingReducer';
import jobReducer from './jobReducer';

const rootReducer = combineReducers({
    jobCategory: jobReducer,
    booking: bookingReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
