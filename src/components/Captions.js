import React, { Component } from "react"
import data from "./cleanData"
import prepTextForView from "./prepTextForView"

class Captions extends Component {
  constructor(props) {
    super(props)
    this.state = {
      word: "",
      soundEffect: ""
    }
  }

  word = () => {
    // this.setState({ word: (this.props.captions[0].text) })
    const rawData = data(this.props.captions)
    // const data = prepTextForView(rawData)
    // const rawData = this.props.captions

    rawData.forEach(element => {
      console.log(element)
      const text = element.text
      this.setState({ word: text })     
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
