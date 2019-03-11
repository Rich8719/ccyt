import React, { Component } from "react"

class Form extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <label htmlFor="url">Enter YouTube URL:</label>
        <input id="url" type="text" onChange={this.props.handleChange} />
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default Form
