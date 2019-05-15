import React, { Component } from "react"
import ReactPlayer from "react-player"

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
    const currentVideoTime = Math.ceil(this.state.progress * 1000)
    const captions = this.props.captions

    console.log(currentVideoTime)
    captions.forEach(caption => {
      console.log(caption.start)
    })

// stgack overflow es5 example to get closest number 
//  var counts = [4, 9, 15, 6, 2],
//   goal = 5;

// var closest = counts.reduce(function(prev, curr) {
//   return Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev;
// });

// console.log(closest);

    //finds array objects index number using videoTime in ms
    
    // const startTime = currentVideoTime - currentWordTime
    
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
