import React from 'react'
import "./Video.scss";

const Video = () => {
  return (
    <div className='video'>
        <h1>
        Filter Guide
        </h1>
        <p>The image below gives a quick overview of the Filters available. The user can bring this menu up in the bot by typing the command:  /Menu</p>
        {/* Video */}
        <iframe width="650" height="315" src="https://www.youtube-nocookie.com/embed/_a">

        </iframe>
    </div>
  )
}

export default Video