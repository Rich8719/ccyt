import React, { Component } from "react"
import { getCaptions } from "./cleanData"


class Captions extends Component {
  constructor(props) {
    super(props)
    this.state = {
      word: "",
      soundEffect: ""
    }
  }

  onPlay = (videoTime, captions) => {
    //finds array objects index number using videoTime in ms
    //get start time
    // word(i, startTime)
  }

  onPause = () => {
    //sets the current word as the state (so it remains on screen)
  }

  word = (startTime, captions) => {
    //await start time
    //set state of word
    //await duration
    //remove word
  }

  componentDidMount() {
    // this.setState({ captions: getCaptions(this.props.captionsRaw) })
    this.props.onCaptions(getCaptions(this.props.captionsRaw))
    // this.word()
  }

  render() {
    return (
      <div>
        <div className="captions">{this.state.word}</div>
        <div className="sound-effects">{this.state.soundEffect}</div>
      </div>
    )
  }
}

export default Captions
