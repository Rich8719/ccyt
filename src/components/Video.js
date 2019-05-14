import React, { Component } from "react"
import ReactPlayer from "react-player"

class Video extends Component {
  constructor(props) {
    super(props)
    this.state = {
      url: `https://www.youtube.com/watch?v=${props.id}`
    }
  }

  onProgress = progress => {
    this.setState({
      progress
    })
  }

  onPlay = (videoTime, captions) => {
    //finds array objects index number using videoTime in ms
    //get start time (videotime - current starttime)
    // word(index, startTime)
  }

  onPause = () => {
    //sets the current word as the state (so it remains on screen)
  }


  render() {
    return (
      <ReactPlayer
        url={this.state.url}
        onPlay={this.onPlay}
        onPause={this.onPause}
        onProgress={this.onProgress}
        controls={true}
      />
    )
  }
}
export default Video
