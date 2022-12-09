import React from 'react'
import "./sidebar.css"
import { Avatar } from '@mui/material';
import img2 from "./images/sidebar_back.jpg";
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
function SideBar() {
 const user = useSelector(selectUser);

 function recentItem (topic){
  return (
    <div className="sidebar_recentItem">
      <span className="sidebar_hash">#</span>
      <p>{topic}</p>
    </div>
    );
  //or
  // const recentItem = (topic) => (
  //   <div className="sidebar__recentItem">
  //     <span className="sidebar__hash">#</span>
  //     <p>{topic}</p>
  //   </div>
  // );
  
}
  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img src={img2} alt="hoho"/>
        <Avatar src={user?.photoUrl}className="sidebar_avatar">{user?.email[0]}</Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>
      <div className="sidebar_stats">
          <div className="sidebar_stat">
            <p>who viewed you</p>
            <p className="sidebar_statNumber">2,324</p>
          </div>  
          <div className="sidebar_stat">
          <p>Views on post</p>
            <p className="sidebar_statNumber">2,924</p>
          </div>  
      </div>
    <div className="sidebar_bottom">
        <p>Recent</p>
        {recentItem("react js")}
        {recentItem("programming")}
        {recentItem("building")}
        {recentItem("design")}
        {recentItem("leetcode")}
    </div>
    </div>
  )
}

export default SideBar
