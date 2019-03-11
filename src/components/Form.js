import React, { Component } from "react"

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isFormSubmit: "",
      captions: ""
    }
  }

  handleSubmit = event => {
    event.preventDefault()
    fetch(`/api/id?id=${encodeURIComponent(this.props.id)}`)
      .then(response => response.json())
      .then(state => this.setState(state))
      .then(this.setState({ isFormSubmit: true }))
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="url">Enter YouTube URL:</label>
        <input id="url" type="text" onChange={this.props.handleChange} />
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default Form
