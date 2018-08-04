export * from './actions'

const initialState={
  loading:false,
  logged:false,
  messages:{},
  user:null
}


export  const session=(state=initialState,action)=>{
switch (action.type) {
 case 'loadingEnable':return {...state, loading:true}
 break;
 case 'loadingDisable':return {...state, loading:false}
 break;
 case 'loggingEnable':return { ...state,logged:true,user:action.user}
 break;
 case 'loggingDisable':return {...state, logged:false}
 break;
 case 'messageLoaded':return {...state, messages:action.messages}
 break;
 case 'logoutUser':return initialState
 break;
 default: return state;

}
}
