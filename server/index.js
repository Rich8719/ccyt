const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const pino = require("express-pino-logger")()
const api = require("./api.js")
const app = express()

const corsOptions = {
  origin: "http://localhost:3000"
}

app.use(cors(corsOptions))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(pino)

app.get("/api/url", (req, res) => {
  const videoId = {
    videoID: req.query.url
  }

  api.getSubtitles(videoId).then(captions => {
    const captionString = JSON.stringify({ captions: captions })
    res.setHeader("Content-Type", "application/json")
    res.send({ captions: captionString })
  })
})

app.listen(4000, () =>
  console.log("Express server is running on localhost:4000")
)
