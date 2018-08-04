import React ,{Component} from 'react'
import {TextField,Button} from 'material-ui'
import {connect} from 'react-redux'
import {sendMessage} from './../../../store/actions'
import MessageList from './../messageList/messageList.js'

class MessageForm extends Component {
  constructor(props){
    super(props)
    this.state={
      textMessage:'',
    }
    this.handleTextMessage=(event)=>{
      this.setState({textMessage:event.target.value})
    }
    this.handleButton=()=>{
      this.props.check(this.state.textMessage)
      this.setState({textMessage:''})
    }
  }

  render(){
    var  disable=this.state.textMessage.trim().length == 0
    return(

  <div>
    <TextField
      autoFocus='true'
      value={this.state.textMessage}
      onChange={this.handleTextMessage}
      style={{flex:1,backgroundColor: '#F8EFBA',
              height: 40,
              margin: 10,
              marginLeft:'20%',
              borderRadius: 5,
              padding: 3}}>
    </TextField>
    <Button
        disabled={disable}
        color='secondary'
        variant='raised'
        onClick={this.handleButton} >send</Button>
  </div>


    )
  }
}
const mapDispatchToProps={
  check:sendMessage,
}
export default connect(null,mapDispatchToProps)(MessageForm)
