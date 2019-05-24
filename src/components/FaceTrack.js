// returns object containing x and y coordinates of face
// function sends to speech bubble and fires on New Speaker state

import * as faceapi from 'face-api.js'

const loadModels = async () => {
  await faceapi.loadTinyFaceDetectorModel('./models')
  await faceapi.loadFaceLandmarkTinyModel('./models')
}

const faceTest = async () => {
  await loadModels()
  console.log(faceapi.nets)
}

export default faceTest