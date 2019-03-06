import React from 'react'
import ReactPlayer from 'react-player'

const url = 'https://www.youtube.com/watch?v=ysz5S6PUM-U'

const Video = () => {
  return <ReactPlayer url={url} playing />
}

export default Video
