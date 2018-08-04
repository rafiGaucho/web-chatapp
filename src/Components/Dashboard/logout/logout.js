import React, { Component } from 'react';
import {Paper,TextField,Button,Typography,Card} from 'material-ui'
import { logoutUser } from './../../../store/actions.js'
import { connect } from 'react-redux'

class Logout extends Component {
  render(){
    return(
      <div align='center' style={{marginRight:30,marginTop:10}}>
        <Button variant='raised' color='secondary' onClick={this.props.logout}>LOGOUT</Button>
      </div>
    )
  }
}
const mapDispatchToProps = {
  logout: logoutUser
}

export default connect(null, mapDispatchToProps)(Logout)
