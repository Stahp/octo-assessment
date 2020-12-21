import { LOGIN } from './authTypes';

const initialState = {
    authenticated: false,
    kc: {}
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                authenticated: true,
                kc: action.payload
            }

        default: return state;
    }
}

export default authReducer