import React from 'react';
import { connect } from 'react-redux';

function SpaceDetail(props){

  //const spaceId= props.spaceId

  // this is how i should do it, but this is a very sloppy way of doing it because i can't stay stuck here ...
  var regex= /.*\/(\d+)/;
  var spaceId= window.location.href.match(regex)[1];
  debugger;
  var space= props.spaceData.spaces.find( element => element.id == spaceId);

  return(
    <div>
    {space}
    </div>
  )
}


const mapStateToProps = state => {
    return {
        spaceData: state.space,
    }
}

export default connect(
    mapStateToProps
)(SpaceDetail)
