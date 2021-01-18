import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { keycloakAuth } from '../../redux';
import SpacesDashboard from '../SpacesDashboard/SpacesDashboard';
import CreateSpace from '../Create/CreateSpace';
import CreateSubspace from '../Create/CreateSubspace';
import SpaceDetail from '../Detail/SpaceDetail';


 //  { type, spaceId, keycloakAuth, authData}
function Login(props) {

    useEffect(() => {
        props.keycloakAuth();
    }, [])

    if (props.authData.authenticated)
      switch(props.type){
        case "Spaces":
          return <SpacesDashboard />
        case "SpaceDetail":
          return <SpaceDetail/>
        case "Add_Space":
          return <CreateSpace/>
        case "Add_Subspace":
          return <CreateSubspace/>
        default:
          return <p>Are you lost ?</p>
      }
    else
      return <p>You can't access </p>;
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
