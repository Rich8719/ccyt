// returns object containing x and y coordinates of face
// function sends to speech bubble and fires on New Speaker state
import React, {Component} from 'react'
import ReactPlayer from 'react-player'
import * as faceapi from 'face-api.js'

class FaceTest extends Component {
  constructor(props) {
    super(props)
    this.videoRef = React.createRef()
  }

  async componentDidMount() {
    await this.loadModels()
  }

  loadModels = async () => {
    await faceapi.nets.ssdMobilenetv1.loadFromUri('/models')
    // await faceapi.loadTinyFaceDetectorModel('./models')
    // await faceapi.loadFaceLandmarkTinyModel('./models')
  }

  track = async () => {
    const input = document.getElementById('input')
    const options = new faceapi.SsdMobilenetv1Options({ minConfidence: 0.8 })
    const detect = await faceapi.detectAllFaces(input, options)
    console.log(detect)
  }
  
  render() {
    return (
      <>
        <button onClick = {this.track}>face test</button>
        {/* <img width="500px" alt="holt" id="image" src= "terry.png"/> */}
      <ReactPlayer
        url = 'https://www.youtube.com/watch?v=r0YA2fBgBzI'
        muted = {true}
        loop = {true}
        onPlay={this.track}
        id = {'input'}
      />
      </>
    )
  }
}

export default FaceTest