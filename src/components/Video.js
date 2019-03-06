import React, { Component } from 'react'
import ReactPlayer from 'react-player'

// https://www.npmjs.com/package/react-player

const url = 'https://www.youtube.com/watch?v=ysz5S6PUM-U'

class Video extends Component {
  render() {
    return <ReactPlayer url={url} playing />
  }
}

export default Video
