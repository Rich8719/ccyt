import React, { Component } from 'react'
import getStyle from "./SpeechStyles";

class SpeechBubble extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posX: Number,
      posY: Number,
      bubbleStyle: {}
    }
  }

  getSpeechBubble = () => {
    let position = 'ml'
    this.setState({
      bubbleStyle: getStyle(position)
    })
  }
  
  render() {
    let bubbleClassName = 'bubble '
    bubbleClassName += this.state.bubbleStyle.bubbleClass
    let speechClassName = 'speech '
    speechClassName += this.state.bubbleStyle.speechClass
    return (
      <div className="speech-wrapper">
        <div
          className={bubbleClassName}
          style={this.state.bubbleStyle}>
          <div className={speechClassName}>
            {this.props.word}
          </div>
        </div>
        <div className="sound-effects">
          {this.props.soundEffect}
        </div> */}
        <button onClick={this.getSpeechBubble}>TEST BUBBLES</button>
      </div>
    )
  }
}

export default SpeechBubble