import React, { Component } from "react"
import ReactPlayer from "react-player"
import Captions from "./Captions";

class Video extends Component {
  constructor(props) {
    super(props)
    this.state = {
      url: `https://www.youtube.com/watch?v=${props.id}`,
      progress: 0
    }
  }

  onProgress = progress => {
    this.setState({
      progress: progress.playedSeconds
    })
  }
  
  
  onPlay = () => {
    // word(index, startTime)
  }

  onPause = () => {
    //sets the current word as the state (so it remains on screen)
  }


  render() {
    return (
      <>
        <ReactPlayer
          url={this.state.url}
          onPlay={this.onPlay}
          onPause={this.onPause}
          onProgress={this.onProgress}
          controls={true}
        />
        <Captions captions={this.props.captions} />
      </>
    )
  }
}
export default Video
