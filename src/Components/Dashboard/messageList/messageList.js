import React , {Component,fragment} from 'react'
import {loadMessages} from './../../../store/actions.js';
import {connect} from 'react-redux';
import MessageRow from './messageRow'

class MessageList extends Component {

  componentDidMount=()=>{
     this.props.loadMessages()
  }
  render(){
    var list=Object.keys(this.props.data).map(key => this.props.data[key]).reverse()
return(
      list.map(x=>
      <MessageRow message={x} />

      )
)
  }
}
const mapStateToProps=(state)=>({
data:state.messages
})
const mapDispatchToProps={
  loadMessages:loadMessages,
}
export default connect(mapStateToProps,mapDispatchToProps)(MessageList)
