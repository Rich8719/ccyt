import React, { Component } from "react"
import Video from "./components/Video"
import getId from "./components/YouTubeId"
import { getCaptions } from "./components/CleanData.js";
import "./App.css"
// import FaceTest from './components/FaceTrack'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loadVideo: false,
      id: "",
      captions: ""
    }
  }

  handleChange = event => {
    this.setState({
      id: getId.youTubeGetId(event.target.value)
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    fetch(`/scrape/id?id=${encodeURIComponent(this.state.id)}`)
      .then(response => response.json())
      .then(captionsRaw => getCaptions(captionsRaw)
      .then( captions =>
        this.setState({
        loadVideo: true,
        captions: captions
      })
      )
    )
  }

  render() {
    return (
      <div className="App">
        {/* <FaceTest/> */}
        {this.state.loadVideo ? (
          <>
            <Video id={this.state.id} captions={this.state.captions}/>
          </>
        ) : (
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="url">Enter YouTube URL:</label>
            <input id="url" type="text" onChange={this.handleChange} />
            <button type="submit">Submit</button>
          </form>
        )}
      </div>
    )
  }
}

export default App
