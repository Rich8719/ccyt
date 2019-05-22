import React, { Component } from 'react'

class SpeechBubble extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posX: Number,
      posY: Number,
      bubbleStyle: "url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/speech-bubble.svg')"
    }
  }

  getSpeechBubble = () => {
    // gets the correct speech bubble based on face position (posX and posY)
    // setsState of bubble style
    // or just creates a component with svg in it
  }
  
  render() {
    let bubbleStyle = {
      backgroundImage: this.state.bubbleStyle
    }
    return (
      <div className="speech-wrapper">
        <div className="bubble" style={bubbleStyle}>
          <div className="speech">{this.props.word}
          </div>
        </div>
        <div className="sound-effects">{this.props.soundEffect}</div>
      </div>
    )
  }
}

export default SpeechBubble