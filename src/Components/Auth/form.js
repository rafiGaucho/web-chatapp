import React ,{Component} from 'react';
import {Paper,TextField,Button,Typography} from 'material-ui'
import {userSignup,userLogin} from './../../store/actions';
import {connect} from 'react-redux';

 class Form extends Component {
  constructor(props){
    super(props)
    this.state={
      email:'',
      password:'',
    }

    this.handleEmailChange=(event)=>{
      this.setState({email:event.target.value})
    }
    this.handlePasswordChange=(event)=>{
      this.setState({password:event.target.value})

   }
   this.handleButtonPress=()=>{
     this.props.userSignup(this.state.email,this.state.password)
   }

  };
  render(){
    return(
 <fragment>
   <Typography variant='title' color='primary' align='center' style={{marginTop:10}} >Chat App</Typography>
   <div style={{marginBottom:75,marginTop:30}}>
      <Paper
       style={{width:'90%',margin:20,display:'flex',flexDirection:'column',marginLeft:80,backgroundColor:'#9AECDB'}}
       elevation='14'
       >
       <TextField style={{borderWidth:5,borderWidthColor:'red',borderRadius:5,margin:20,width:'40%'}}
         placeholder='email'
       onChange={this.handleEmailChange}/>
       <div>
         <TextField style={{borderWidth:5,borderColor:'red',borderRadius:5,margin:20,width:'20%'}}
             placeholder='password'
              onChange={this.handlePasswordChange}/>
         <Button
           color='primary'
           variant='raised'
           size='large'
           onClick={()=>this.props.userLogin(this.state.email,this.state.password)}
           style={{width:'5%',margin:'4%'}}>LOGIN</Button>
       </div>
     </Paper>

   </div>
   <div style={{}}>
     <Paper
       style={{width:'90%',margin:20,display:'flex',flexDirection:'column',marginLeft:80,backgroundColor:"#BDC581"}}
       elevation='14'
       >

       <TextField style={{borderWidth:5,borderWidthColor:'red',borderRadius:5,margin:20,width:'40%'}}
         placeholder='email'
         onChange={this.handleEmailChange}/>
       <div>
         <TextField style={{borderWidth:5,borderColor:'red',borderRadius:5,margin:20,width:'20%'}}
             placeholder='password'
              onChange={this.handlePasswordChange}/>
         <Button
           color='secondary'
           variant='raised'
           size='large'
           onClick={this.handleButtonPress}
           style={{width:'5%',margin:'4%'}}>SIGNUP</Button>
       </div>
     </Paper>

   </div>
 </fragment>

    )
  }
}
const mapDispatchToProps={
  userSignup : userSignup,
  userLogin:userLogin
}
export default connect(null,mapDispatchToProps)(Form)
