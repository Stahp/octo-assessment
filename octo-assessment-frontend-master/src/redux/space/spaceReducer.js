import {
    FETCH_SPACES_REQUEST,
    FETCH_SPACES_SUCCESS,
    FETCH_SPACES_FAILURE,
    FETCH_SPACE_BY_ID_REQUEST,
    FETCH_SPACE_BY_ID_SUCCESS,
    FETCH_SPACE_BY_ID_FAILURE,
} from './spaceTypes';

const initialState = {
    loading: false,
    spaces: {},
    space: {},
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
        case FETCH_SPACE_BY_ID_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_SPACE_BY_ID_SUCCESS:
            return {
                loading: true,
                space: action.payload,
                error: ''
            }
        case FETCH_SPACE_BY_ID_FAILURE:
            return {
                loading: false,
                error: action.payload
            }
        default: return state;
    }
}

export default spaceReducer
