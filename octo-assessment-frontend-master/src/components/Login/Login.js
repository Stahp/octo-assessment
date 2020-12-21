import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { keycloakAuth } from '../../redux';
import SpacesDashboard from '../SpacesDashboard/SpacesDashboard';

function Login({ keycloakAuth, authData }) {

    useEffect(() => {
        keycloakAuth();
    }, [])
/*
    console.log(authData);
    debugger;*/
    return (
        <>
            {authData.authenticated ? <SpacesDashboard /> : <p>You can't access</p>}
        </>
    )
}

const mapStateToProps = state => {
    return {
        authData: state.auth
    }
}

const mapDispatchToProps = dispatch => {
    return {
        keycloakAuth: () => dispatch(keycloakAuth())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)
