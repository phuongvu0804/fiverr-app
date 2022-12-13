import { combineReducers } from 'redux';
import jobReducer from './jobReducer';

const rootReducer = combineReducers({
    job: jobReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
