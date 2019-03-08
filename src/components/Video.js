import React from "react"
import ReactPlayer from "react-player"
import captions from "./getCaptions"

const url = "https://www.youtube.com/watch?v=r0YA2fBgBzI"
const Video = () => {
  captions()
  return <ReactPlayer url={url} />
}

export default Video
