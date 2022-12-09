import React from 'react'
import "./feed.css"
import CreateIcon from '@mui/icons-material/Create';
import InputOptions from './InputOptions';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from './Post';
import { db } from './firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import FlipMove from 'react-flip-move';
function Feed() {
  const user = useSelector(selectUser);
  const [input , setInput] = React.useState("")
    const [posts,setPosts] = React.useState([])

     React.useEffect(()=> {
      db.collection("posts").orderBy('timestamp','desc').onSnapshot((snapshot)=>
       setPosts(
        snapshot.docs.map((doc)=>({
          id: doc.id,
          data: doc.data(),
        }))
       )
      )
     })
    const sendPost = e => {
     e.preventDefault();
     db.collection('posts').add({
       name: user.displayName,
       description:user.email,
       message: input,
       photoUrl: user.photoUrl || "",
       timestamp: firebase.firestore.FieldValue.serverTimestamp()
     });
     setInput("");
  }
  return (
    <div className="feed">
      <div className="feed_inputContainer">
        <div className="feed_input">
            <CreateIcon/>
          <form>
            <input value={input} onChange={e => setInput(e.target.value)} type="text"/>
            <button onClick={sendPost} type="submit">Send</button>
          </form>
        </div>
        <div className="feed_inputOptions">
            <InputOptions title="Photo" Icon={ImageIcon} color="#70B5F9"/>
            <InputOptions title="Video" Icon={SubscriptionsIcon} color="green"/>
            <InputOptions title="Event" Icon={EventNoteIcon} color="yellowgreen"/>
            <InputOptions title="Write article" Icon={CalendarViewDayIcon} color="orange"/>
        </div>
      </div>
      <FlipMove>

      {posts.map(({id,data:{name,description,message,photoUrl}}) =>(
        <Post
          key={id} name={name} description={description} message={message} photoUrl={photoUrl}
        />
      ))}
      </FlipMove>
      {/* <Post name="Ayush Jha" description="this is a test" message="Wow lmao ded"/> */}
    </div>
  )
}

export default Feed
