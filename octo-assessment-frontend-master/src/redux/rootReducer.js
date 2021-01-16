import { combineReducers } from 'redux';
import spaceReducer from './space/spaceReducer';
import subspaceReducer from './subspace/subspaceReducer';
import authReducer from './auth/authReducer';

const rootReducer = combineReducers({
    subspace: subspaceReducer,
    space: spaceReducer,
    auth: authReducer
})

export default rootReducer
