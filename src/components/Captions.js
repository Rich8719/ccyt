import React, { Component } from "react"

class Captions extends Component {
  constructor(props) {
    super(props)
    this.state = {
      word: "",
      currentWordIndex: 0,
      soundEffect: ""
    }
  }

  wait = (time) => {
    return new Promise(resolve => {
      setTimeout(resolve, time)
    })
  }

  setWord = async (index, word, time) => {
    this.setState({
      currentWordIndex: index,
      word: word
    })
    await this.wait(time)
  }

  loopWord = async () => {
    const captions = this.props.captions.slice(this.state.currentWordIndex) //slice finds start 

    for (let i = this.state.currentWordIndex; i < captions.length; i++) {
      const caption = captions[i]
      if (this.props.isPlaying === false) {
        return
      } else if (caption.newSpeaker === true) {
        const startTime = caption.start - this.props.videoTime * 1000
        await this.wait(startTime)
        await this.setWord(i, caption.text, caption.dur)
      }
      else {
        await this.setWord(i, caption.text, caption.dur)
      }
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.isPlaying !== prevProps.isPlaying) {
      this.loopWord()
    }
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
