import React from "react"
import ReactPlayer from "react-player"

  const onPlay = (videoTime, captions) => {
    //finds array objects index number using videoTime in ms
    //get start time
    // word(i, startTime)
    console.log('testPlay')
  }

  const onPause = () => {
    //sets the current word as the state (so it remains on screen)
    console.log('testPlay')
  }

const Video = props => {
  const url = `https://www.youtube.com/watch?v=${props.id}`
  return <ReactPlayer url={url} onPlay={onPlay} onPause={onPause}/>
}

export default Video
