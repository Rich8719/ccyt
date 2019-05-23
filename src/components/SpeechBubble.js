import React, { Component } from 'react'
// import tr from "../images/top-right-sb.svg";
import getStyle from "./SpeechStyles";

class SpeechBubble extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posX: Number,
      posY: Number,
      bubbleStyle: {}
      // {
      //   backgroundImage: `url('${tr}')`
      // }
    }
  }

  getSpeechBubble = () => {
    // gets the correct speech bubble based on face position (posX and posY)
    // setsState of bubble style
    // or just creates a component with svg in it
    let position = 'tr'
    this.setState({
      bubbleStyle: getStyle(position)
    })
  }
  
  render() {
    let bubbleStyle = this.state.bubbleStyle
    return (
      <div className="speech-wrapper">
        {/* <img alt="bottom left speech bubble" src={bl}></img> */}
        <div className="bubble" style={bubbleStyle}>
          <div className="speech">{this.props.word}
          </div>
        </div>
        <div className="sound-effects">{this.props.soundEffect}</div>
        <button onClick={this.getSpeechBubble}></button>
      </div>
    )
  }
}

export default SpeechBubble