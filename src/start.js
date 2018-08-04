import React ,{Component} from 'react'
import {connect} from 'react-redux';
import Message from './Components/Dashboard/messages.js'
import {Form} from './Components/Auth'
class Start extends Component{
  render(){

      if(this.props.logged==false){
        return(<Form />)
                  }
    else {
        return(<Message />)

  }

}
}
const mapStateToProps=(state)=>({
  loading:state.loading,
  logged:state.logged,
})

export default connect(mapStateToProps)(Start)
