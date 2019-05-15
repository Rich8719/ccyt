import React, { Component } from "react"

class Captions extends Component {
  constructor(props) {
    super(props)
    this.state = {
      word: "",
      soundEffect: ""
    }
  }

  word = () => {
    const captions = this.props.captions
    //await start time
    //set state of word
    //await duration
    //remove word

    captions.forEach(caption => {
      this.setState({word: caption.text})
    })
  }

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
