import React from 'react'
import { logout } from './features/userSlice';
import './header.css'
import SearchIcon from '@mui/icons-material/Search';
import img1 from "./images/logo.png";
import HeaderOption from './headerOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useDispatch } from 'react-redux';
import { auth } from './firebase';
function Header() {
  const dispatch = useDispatch()
  const logoutOfApp =() => {
      dispatch(logout())
      auth.signOut();
  };
  return (
    <div className='header'>
       <div className='header_left'>
          <img  src={img1} alt="hehe"/>
          <div className='header_search'>
            <SearchIcon/>
              <input placeholder='Search' type="text"></input>         
          </div>
       </div>
       <div className='header_right'>
           <HeaderOption Icon={HomeIcon} title="Home"/>
           <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
           <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
           <HeaderOption Icon={ChatBubbleIcon} title="Messaging"/>
           <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
           <HeaderOption avatar={AccountCircleIcon} title="me" onClick={logoutOfApp}/>
           
       </div>
       </div>
  )
}

export default Header
