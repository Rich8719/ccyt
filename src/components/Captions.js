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
      console.log(element)
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
