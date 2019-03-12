import React, { Component } from "react"
import Video from "./components/Video"
import getId from "./components/youtubeId"
import Captions from "./components/Captions"
import "./App.css"

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
    fetch(`/api/id?id=${encodeURIComponent(this.state.id)}`)
      .then(response => response.json())
      .then(captions => this.setState({ captions: captions }))
      .then(() => {
        this.setState({ loadVideo: true })
      })
  }

  render() {
    return (
      <div className="App">
        {this.state.loadVideo ? (
          <>
            <Video id={this.state.id} />
            <Captions captions={this.state.captions} />
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
