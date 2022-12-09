import React from 'react'
import "./widgets.css"
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
function Widgets() {
    const newsArticle = (heading,subtitle) => (
     <div className='widgets_article'>
     <div className='widgets_articleLeft'>
        <FiberManualRecordIcon/>
     </div>
     <div className='widgets_articleRight'>
        <h4>{heading}</h4>
        <p>{subtitle}</p>
     </div>
     </div>
    );
  return (
    <div className='widgets'>
      <div className='widgets_header'>
        <h2>Linkedin News</h2>
        <InfoIcon/>
      </div>
      {newsArticle("comeback of Rolando","learn top ways to take penalty from penaldo")}
      {newsArticle("comeback of Neymar","learn top ways to take freekick from gaymar")}
      {newsArticle("comeback of  Summon","learn top ways to give opnion on others from Sanmike")}
      {newsArticle("comeback of Rohit","learn top method to beat women on the internet from Baanji")}
    </div>
  )
}

export default Widgets
