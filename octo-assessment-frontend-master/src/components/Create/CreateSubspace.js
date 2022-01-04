import React from 'react'
import { connect } from 'react-redux';
import { keycloakAuth, insertSubspace } from '../../redux';

class createSubspace extends React.Component{
  constructor(props){
  super(props);
  // var regex= /.*\/(\d+)/;
  // var spaceId= window.location.href.match(regex)[1];
  var spaceId = 1
  this.state = {id: spaceId, name: "", description: ""};
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({[name]: value});
  }

  handleSubmit(event) {
    insertSubspace(this.props.authData.kc.token ,
      {name: this.state.name, description: this.state.description})()
      this.props.history.push('/BrowseSpaces');
  }

  render() {
    debugger ;
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="id">Id:</label><br/>
        <input
          type="text"
          id="id"
          name="id"
          value= {this.state.id}
          disabled= "disabled"/>
        <br/>

        <label htmlFor="name">Name:</label><br/>
        <input
          type="text"
          id="name"
          name="name"
          value= {this.state.name}
          onChange={this.handleChange}/>
        <br/>

        <label htmlFor="description">Description:</label><br/>
        <input
          type="text"
          id="description"
          name="description"
          value= {this.state.description}
          onChange={this.handleChange}/>
        <br/>
        <input type="submit" value="Add Subpace" />
      </form>
    )
  }

}

const mapStateToProps = state => {
    return {
        spaceData: state.space,
        authData: state.auth
    }
}

const mapDispatchToProps = dispatch => {
    return {
        insertSubspace: (token ,subspace) => dispatch(insertSubspace(token, subspace)),
        keycloakAuth: () => dispatch(keycloakAuth())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(createSubspace)
