import React, { useEffect }  from 'react'
import Login  from './login.js'
import { useDispatch, useSelector } from "react-redux";
import './App.css';
import { login, logout, selectUser } from './features/userSlice';
import Feed from './Feed';
import Header from './header';
import SideBar from './SideBar';
import { auth }  from "./firebase.js";
import Widgets from './Widgets.js';
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

      useEffect(() => {
     auth.onAuthStateChanged(userAuth => {
       if(userAuth){
        //userloged in
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl:userAuth.photoURL,
        })) 
       }else{
        //user loged out
        dispatch(logout)
       }
     });
  },[])
  
  return (
    <div className="App">
        <Header/>
        {!user ? (<Login/> ) : (
          <div className="app_body">
            <SideBar/>
            <Feed/>
            <Widgets/>
        </div>
        )}
        
    </div>
  );
}

export default App; 
