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
  
  word = () => {
    const captionsData = getCaptions(this.props.captions)
    captionsData.forEach(element => {
      // if video not playing, await video play
      // if last word stop
      // get start time
      // sets state of word
      this.setState({
        word: element.text
      })
      // get duration await duration
      // remove word
    })
  }
  
  // character selection function
  
  // pause function
  
  // connect to word styling component
  
  componentDidMount() {
    this.word()
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
