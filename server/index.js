const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const pino = require("express-pino-logger")()
const scrape = require("./scrapeCaptions.js")
const app = express()

const corsOptions = {
  origin: "http://localhost:3000"
}

app.use(cors(corsOptions))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(pino)

app.get("/scrape/id", (req, res) => {
  scrape.getSubtitles({ videoID: req.query.id })
    .then(captions => {
      res.setHeader("Content-Type", "application/json")
      res.send(captions)
    })
})

app.listen(4000, () =>
  console.log("Express server is running on localhost:4000")
)
