import React, { Component } from "react"
import SpeechBubble from "./SpeechBubble"

class Captions extends Component {
  constructor(props) {
    super(props)
    this.state = {
      word: '',
      currentWordIndex: 0,
      soundEffect: ''
    }
  }

  wait = time => {
    return new Promise(resolve => {
      setTimeout(resolve, time)
    })
  }

  setWord = async (word, time) => {
    this.setState({
      word: word
    })
    await this.wait(time)
  }

  //Finds the closest word time in an array given the start time and returns index
  closest = (captions) => {
    const videoTime = Math.floor(this.props.videoTime * 1000)

    let startTime = captions[0].start //initial value
    let diff = Math.abs(videoTime - startTime)
    let index = 0

    for (let i = 0; i < captions.length; i++) {
      let newDiff = Math.abs(videoTime - captions[i].start)
      
      if (newDiff < diff) {
        diff = newDiff
        startTime = captions[i].start
        index = i
      }
    }
    return this.setState({ currentWordIndex: index })
  }

  loopWord = async () => {
    const captions = this.props.captions
    await this.closest(captions)
    
    const currentWordTime = captions[this.state.currentWordIndex].start
    const startTime = currentWordTime - this.props.videoTime * 1000
    await this.wait(startTime) 

    for (let i = this.state.currentWordIndex; i < captions.length; i++) {
      const caption = captions[i]
      if (this.props.isPlaying === false) {
        return
      }
      else {
        await this.setWord(caption.text, caption.dur)
      }
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.isPlaying !== prevProps.isPlaying && this.props.isPlaying === true) {
      this.loopWord()
    }
  }

  render() {
    return (
      <SpeechBubble word={this.state.word} soundEffect={this.state.soundEffect}/>
    )
  }
}

export default Captions
