import React from 'react'
import firebase from 'firebase'
import {Typography,Card} from 'material-ui'

const MessageRow=props=>{
  const MESSAGE_TEXT_MARGIN=30
   const isCurrentUser = firebase.auth().currentUser.email ==props.message.email;
  const alignItems = isCurrentUser ? 'right' : 'left'
  const margin = isCurrentUser ? {marginLeft: MESSAGE_TEXT_MARGIN} : {marginRight: MESSAGE_TEXT_MARGIN}
  const username = isCurrentUser ? 'you' : props.message.email
  const d=new Date(props.message.createdAt)
  const date = d.toLocaleString()
  return(
<div  align={alignItems}>
  <Card style={{  flex: 1,
      padding: 8,
      marginLeft:10,
      marginTop:10,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#C4E538',
      borderRadius: 8,
      width:'50%',overflow:'auto'}}  >
      <Typography variant='caption'>{date}</Typography>
      <Card style={{backgroundColor: 'white',borderRadius: 5,}}>
            <Typography variant='title'>{props.message.text}</Typography>
          </Card>
          <Typography align='right'>{username}</Typography>
   </Card>
</div>


  )
}

export default MessageRow
