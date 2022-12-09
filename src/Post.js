import React,{forwardRef} from 'react'
import "./post.css";
import { Avatar } from '@mui/material';
import InputOptions from './InputOptions';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import SendIcon from '@mui/icons-material/Send';
import MapsUgcIcon from '@mui/icons-material/MapsUgc';
import IosShareIcon from '@mui/icons-material/IosShare';
 const Post= forwardRef(({name,description,message, photoUrl},ref) =>{
  return (
    <div ref={ref} className="post">
     <div className="post_header">
      <Avatar src={photoUrl}>{name[0]}</Avatar>
    <div className="post_info">
        <h2>{name}</h2>
        <p>{description}</p>
    </div>
     </div>
     <div className="post_body">
      <p>{message}</p>
     </div>
     <div className="post_buttons">
        <InputOptions Icon={ThumbUpIcon} title="Like" color="gray"/>
        <InputOptions Icon={MapsUgcIcon} title="Comment" color="gray"/>
        <InputOptions Icon={IosShareIcon} title="Share" color="gray"/>
        <InputOptions Icon={SendIcon} title="Send" color="gray"/>
     </div>
    </div>
  );
})

export default Post;
