import React, { Component } from "react"
import "./App.css"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      url: "",
      captions: ""
    }
  }

  handleChange = event => {
    this.setState({ url: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()
    fetch(`/api/url?url=${encodeURIComponent(this.state.url)}`)
      .then(response => response.json())
      .then(state => this.setState(state))
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="url">Enter YouTube URL:</label>
          <input
            id="url"
            type="text"
            value={this.state.url}
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>
        <p>{this.state.captions}</p>
      </div>
    )
  }
}

export default App
