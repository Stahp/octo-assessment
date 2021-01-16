import {
    FETCH_SPACES_REQUEST,
    FETCH_SPACES_SUCCESS,
    FETCH_SPACES_FAILURE,
} from './spaceTypes';

import axios from 'axios';
import { ZUUL_URL, ASSESSMENT_SERVICE_URL } from '../../resources/api';

const fetchSpacesRequest = () => {
    return {
        type: FETCH_SPACES_REQUEST
    }
}

const fetchSpacesSuccess = spaces => {
    return {
        type: FETCH_SPACES_SUCCESS,
        payload: spaces
    }
}

const fetchSpacesFailure = error => {
    return {
        type: FETCH_SPACES_FAILURE,
        payload: error
    }
}


export const fetchSpaces = (token) => {
    return (dispatch) => {
        dispatch(fetchSpacesRequest)
        axios
            .get(ASSESSMENT_SERVICE_URL + 'spaces', {
                headers: {
                    'Authorization':`Bearer ${token}`
                }
            })
            .then(response => {
              console.log(token);
                const spaces = response.data._embedded.spaces;
                dispatch(fetchSpacesSuccess(spaces));
            })
            .catch(error => {
                const errorMsg = error.message;
                dispatch(fetchSpacesFailure(errorMsg));
            })
    }
}

export const insertSpace = (token, space) => {
    return (dispatch) => {
        axios
            .post(ASSESSMENT_SERVICE_URL + 'spaces', {
                name: space.name,
                description: space.description}, {
                headers: {
                    'Authorization':`Bearer ${token}`
                }
            })
            .then(response => {
                console.log("All Good !");
            })
            .catch(error => {
                console.log("error");
            })
    }
}

export const deleteSpace = (token, id) => {
    return (dispatch) => {
        axios
            .delete(ASSESSMENT_SERVICE_URL + 'spaces' + id, {
                headers: {
                    'Authorization':`Bearer ${token}`
                }
            })
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error.message);
            })
    }
}
