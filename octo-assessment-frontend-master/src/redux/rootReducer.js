import { combineReducers } from 'redux';
import spaceReducer from './space/spaceReducer';
import authReducer from './auth/authReducer';

const rootReducer = combineReducers({
    space: spaceReducer,
    auth: authReducer
})

export default rootReducer