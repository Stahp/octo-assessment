import { LOGIN } from './authTypes';
import Keycloak from 'keycloak-js';
import { keycloakConfig } from '../../resources/keycloakConfig';

const keycloak = new Keycloak(keycloakConfig);

const login = kc => {
    return {
        type: LOGIN,
        payload: kc
    }
}

export const keycloakAuth = () => {
    return (dispatch) => {
        keycloak.init({
            onLoad: 'login-required',
            promiseType: 'native'
        }).then(authenticated => {
            dispatch(login(keycloak))    
        }).catch(error => {
            console.log('KeycloakAuth catch section ...')
        });
    }
}