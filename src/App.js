import React, { Component } from "react"
import Video from "./components/Video"
import Form from "./components/Form"
import getId from "./components/youtubeId"
import "./App.css"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { isFormSubmit: false }
  }

  handleChange = event => {
    this.setState({
      id: getId.youTubeGetId(event.target.value)
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.setState({ isFormSubmit: true })
    fetch(`/api/id?id=${encodeURIComponent(this.state.id)}`)
      .then(response => response.json())
      .then(state => this.setState(state))
  }

  render() {
    return (
      <div className="App">
        {this.state.isFormSubmit ? (
          <Video id={this.state.id} />
        ) : (
          <Form
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            id={this.state.id}
          />
        )}
      </div>
    )
  }
}

export default App
