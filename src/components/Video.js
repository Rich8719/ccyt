import React, { Component } from "react"
import ReactPlayer from "react-player"
import Captions from "./Captions";

class Video extends Component {
  constructor(props) {
    super(props)
    this.state = {
      url: `https://www.youtube.com/watch?v=${props.id}`,
      progress: 0,
      isPlaying: false
    }
  }

  onProgress = progress => {
    this.setState({
      progress: progress.playedSeconds
    })
  }
  
  
  onPlay = () => {
    this.setState({isPlaying:true})
  }

  onPause = () => {
    this.setState({ isPlaying: false })
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
        <Captions captions={this.props.captions} isPlaying={this.state.isPlaying} videoTime={this.state.progress}/>
      </>
    )
  }
}
export default Video
