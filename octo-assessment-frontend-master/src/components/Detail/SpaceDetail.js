import React, { useEffect } from 'react';
import { fetchSpaceById } from '../../redux';
import { connect } from 'react-redux';
import SpaceDetailForm from './SpaceDetailForm/SpaceDetailForm'
import {withRouter} from 'react-router-dom'

function SpaceDetail(props){
    debugger;
    var regex= /.*\/(\d+)/;
    var spaceId= window.location.href.match(regex)[1];

  useEffect(() => {
      //const spaceId= props.spaceId      // this is how i should do it

      //but this is a very sloppy way of doing it because i can't stay stuck here ...

      props.fetchSpaceById(props.authData.kc.token, spaceId);
  }, [])
  return(
    <div>
    {
        props.spaceData.loading ?
            <SpaceDetailForm space= {props.spaceData.space}/>
            :
            console.log('Loading ...')
    }

    </div>
  )
}


const mapStateToProps = state => {
    return {
        spaceData: state.space,
        authData: state.auth
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchSpaceById: (token, id) => dispatch(fetchSpaceById(token, id))
    }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(SpaceDetail))
