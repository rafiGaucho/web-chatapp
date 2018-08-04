import React, { Component } from 'react';
import {Form} from './Components/Auth'
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {session} from './store/reducer'
import firebase from 'firebase'
import {MessageForm,MessageList} from './Components/Dashboard'
import Start from './start.js'

const middleware = [thunk]
export const store=createStore(session,applyMiddleware(...middleware))

class App extends Component {
  componentWillMount=()=>{
     var config = {
       apiKey: "AIzaSyAnv_WzEg5jch8meaL3fS6OKnfNOzQv9Ts",
       authDomain: "chatapp-edca2.firebaseapp.com",
      databaseURL: "https://chatapp-edca2.firebaseio.com",
      projectId: "chatapp-edca2",
      storageBucket: "chatapp-edca2.appspot.com",
      messagingSenderId: "448319299781"
      };
    firebase.initializeApp(config);

  };
  render() {
    return (
      <div>
     <Provider store={store}>
        <Start />
      </Provider>
    </div>
    );
  }
}

export default App;
