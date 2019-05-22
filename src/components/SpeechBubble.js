import React, { Component } from 'react'

class SpeechBubble extends Component {
  constructor(props) {
    super(props)
    this.state = {
      positionX: Number,
      positionY: Number
    }
  }

  render() {
    return (
      <div>
        <div className="captions">{this.props.word}</div>
        <div className="sound-effects">{this.props.soundEffect}</div>
      </div>
    )
  }
}

export default SpeechBubble