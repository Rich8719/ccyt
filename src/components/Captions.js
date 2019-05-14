import React, { Component } from "react"

class Captions extends Component {
  constructor(props) {
    super(props)
    this.state = {
      word: "",
      soundEffect: ""
    }
  }

  word = (index, startTime) => {
    const captions = this.props.captions
    //await start time
    //set state of word
    //await duration
    //remove word
  }

  componentDidMount() {

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
