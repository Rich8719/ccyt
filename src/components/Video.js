import React from "react"
import ReactPlayer from "react-player"

const Video = props => {
  const url = `https://www.youtube.com/watch?v=${props.id}`
  return <ReactPlayer url={url}/>
}

export default Video
