import React, { Component } from "react"

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

  setWord = async (index, word, time) => {
    this.setState({
      currentWordIndex: index,
      word: word
    })
    await this.wait(time)
  }

  currentTimeIndex = () => {
    //get video time
    const videoTime = Math.floor(this.props.videoTime * 1000)
    const captions = this.props.captions

    for (let i = this.state.currentWordIndex; i < captions.length; i++) {
      if (i === 0) {
        return this.setState({currentWordIndex: 0})
      } else {
        const words = captions[i].text
        const wordTime = captions[i].start
        const curr = Math.abs(wordTime - videoTime)
        const prev = Math.abs((captions[i - 1].start) - videoTime)
        if (curr > prev) {
          console.log(`
            current word: ${words}
            current index: ${i}
          `)
          return this.setState({ currentWordIndex: i })
        }
      } 
    }
  }

  loopWord = async () => {
    this.currentTimeIndex()
    const captions = this.props.captions
    const currentWordTime = captions[this.state.currentWordIndex].start
    const startTime = currentWordTime - this.props.videoTime * 1000
    await this.wait(startTime)

    for (let i = this.state.currentWordIndex; i < captions.length; i++) {
      const caption = captions[i]
      if (this.props.isPlaying === false) {
        return
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
