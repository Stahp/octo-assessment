import {
    FETCH_SUBSPACES_REQUEST,
    FETCH_SUBSPACES_SUCCESS,
    FETCH_SUBSPACES_FAILURE
} from './subspaceTypes';
import axios from 'axios';
import { ZUUL_URL, ASSESSMENT_SERVICE_URL } from '../../resources/api';

const fetchSubspacesRequest = () => {
    return {
        type: FETCH_SUBSPACES_REQUEST
    }
}

const fetchSubspacesSuccess = subspaces => {
    return {
        type: FETCH_SUBSPACES_SUCCESS,
        payload: subspaces
    }
}

const fetchSubspacesFailure = error => {
    return {
        type: FETCH_SUBSPACES_FAILURE,
        payload: error
    }
}

export const fetchSubspaces = (token) => {
    return (dispatch) => {
        dispatch(fetchSubspacesRequest)
        axios
            .get(ASSESSMENT_SERVICE_URL + 'subspaces', {
                headers: {
                    'Authorization':`Bearer ${token}`
                }
            })
            .then(response => {
              console.log(token);
                const subspaces = response.data._embedded.subspaces;
                dispatch(fetchSubspacesSuccess(subspaces));
            })
            .catch(error => {
                const errorMsg = error.message;
                dispatch(fetchSubspacesFailure(errorMsg));
            })
    }
}

export const insertSubspace = (token, subspace) => {
    return (dispatch) => {
        axios
            .post(ASSESSMENT_SERVICE_URL + 'subspaces', {
                name: subspace.name,
                description: subspace.description}, {
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


// this needs to be modified
export const deleteSubspace = (token, id) => {
    return (dispatch) => {
        axios
            .delete(ASSESSMENT_SERVICE_URL + 'subspaces' + id, {
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
