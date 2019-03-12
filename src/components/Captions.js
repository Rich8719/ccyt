import React, { Component } from "react"
// import parseCaptions from "./parseCaptions"

class Captions extends Component {
  constructor(props) {
    super(props)
    this.state = {
      word: "",
      soundEffect: ''
    }
  }

  // setWord = captions => {
  //   parseCaptions(captions)
  // }

  // this.props.captions[0].text

  render() {
    return (
      <div>
        <div className="captions">
          {this.state.word}
        </div>
        <div className="sound-effects">
          {this.state.soundEffect}
        </div>
      </div>
    )
  }
}

export default Captions
