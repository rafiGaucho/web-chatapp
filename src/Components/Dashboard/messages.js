import React ,{Component,fragment} from 'react'
import {MessageList,MessageForm,Logout} from './index.js'
import {Card,Typography,TextField,Input,Button,List} from 'material-ui'


export default class Message extends Component {

  render(){
    return(

        <div>
          <Logout />
          <Card align='center'
            style={{width:'50%',maxHeight:540,
              overflow:'scroll',
              margin:'5%',
              marginLeft:'20%',
              backgroundColor:'#576574'}}>
                <MessageForm />
            <MessageList />
          </Card>
      </div>




    ) ;
  }
}
