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

  render() {
    return (
      <div className="App">
        {this.state.isFormSubmit ? (
          <Video id={this.state.id} />
        ) : (
          <Form handleChange={this.handleChange} id={this.state.id} />
        )}
      </div>
    )
  }
}

export default App
