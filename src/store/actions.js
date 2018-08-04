import firebase from 'firebase'




export const userSignup=(email,password)=>{
  return (dispatch)=>{
    dispatch({type:'loadingEnable'})
  firebase.auth().createUserWithEmailAndPassword(email,password)
  .catch(error=>{alert(error.message)})
  dispatch({type:'loadingDisable'})
}
}



export const userLogin=(email,password)=>{
return (dispatch)=>{
    firebase.auth().signInWithEmailAndPassword(email,password)
  .catch(error=>{alert(error.message)})

  let unsubscribe=firebase.auth().onAuthStateChanged(user=>{
    if(user){
      dispatch({type:'loggingEnable'})

      unsubscribe()
    
        }
      })
    }
  }



export const logoutUser = () => {
  return (dispatch) => {
    firebase.auth()
      .signOut()
      .then(() => {
        dispatch({type:'logoutUser'})
      })
      .catch(error => {
        alert(error.message)
      })
  }
}



export const sendMessage=(textMessage)=>{
  return (dispatch)=>{
    let currentUser=firebase.auth().currentUser
    let text=textMessage
    let createdAt=new Date().getTime()
    let chatMessage={
       text:text,
      createdAt:createdAt,
    userName:currentUser.uid,
      email:currentUser.email
    }
    firebase.database().ref('finalmessages').push().set(chatMessage)
  }
}


export const loadMessages=()=>{
  return (dispatch)=>{
    firebase.database().ref('finalmessages').on('value',(snap)=>{
   var data=snap.val();
   dispatch({type:"messageLoaded",messages:data})
 })
}
}
