import {
    FETCH_SPACES_REQUEST,
    FETCH_SPACES_SUCCESS,
    FETCH_SPACES_FAILURE,
} from './spaceTypes';

const initialState = {
    loading: false,
    spaces: {},
    error: '',
}

const spaceReducer = (state = initialState, action) => {
    switch (action.type) {

        case FETCH_SPACES_REQUEST:
            return {
                ...state,
                loading: true
            }

        case FETCH_SPACES_SUCCESS:
            return {
                loading: true,
                spaces: action.payload,
                error: ''
            }

        case FETCH_SPACES_FAILURE:
            return {
                loading: false,
                error: action.payload
            }

        default: return state;
    }
}

export default spaceReducer