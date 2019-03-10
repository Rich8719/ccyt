import React, { Component } from "react"
import Video from "./components/Video"
import getId from "./components/youtubeId"
import "./App.css"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
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
      .then(state => this.setState(state))
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="url">Enter YouTube URL:</label>
          <input id="url" type="text" onChange={this.handleChange} />
          <button type="submit">Submit</button>
        </form>
        <p>{this.state.captions}</p>
        <Video id={this.state.id} />
      </div>
    )
  }
}

export default App
