import {
    FETCH_SUBSPACES_REQUEST,
    FETCH_SUBSPACES_SUCCESS,
    FETCH_SUBSPACES_FAILURE,
} from './subspaceTypes';

const initialState = {
    loading: false,
    subspaces: {},
    error: '',
}

const subspaceReducer = (state = initialState, action) => {
    switch (action.type) {

        case FETCH_SUBSPACES_REQUEST:
            return {
                ...state,
                loading: true
            }

        case FETCH_SUBSPACES_SUCCESS:
            return {
                loading: true,
                subspaces: action.payload,
                error: ''
            }

        case FETCH_SUBSPACES_FAILURE:
            return {
                loading: false,
                error: action.payload
            }

        default: return state;
    }
}

export default subspaceReducer
