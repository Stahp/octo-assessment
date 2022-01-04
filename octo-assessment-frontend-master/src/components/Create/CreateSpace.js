import React from 'react'
import { connect } from 'react-redux';
import {insertSpace } from '../../redux';
import {withRouter} from 'react-router-dom'

class createSpace extends React.Component{
  constructor(props){
  super(props);
  this.state = {name: "", description: ""};
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
    this.props.insertSpace(this.props.authData.kc.token ,
      {name: this.state.name, description: this.state.description})
      debugger;
      this.props.history.push('/BrowseSpaces');
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
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
        <input type="submit" value="Add Space" />
      </form>
    )
  }

}

const mapStateToProps = state => {
    return {
        authData: state.auth
    }
}

const mapDispatchToProps = dispatch => {
    return {
        insertSpace: (token ,space) => dispatch(insertSpace(token, space))
    }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(createSpace))
