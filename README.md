## Get Started

### Start Sever: 
```bash
npm run server
```

### Start React:
```bash
npm start
```

## Components
### Video.js
Built with React Player https://www.npmjs.com/package/react-player. Accepts youtube id and displays video on page. Sets the state of isPlaying via the onPlay and onPause methods, and tracks progress of the video via onProgress.

### YouTubeId.js
React player only accepts youtube id's, this function strips any youtube url to it's id.

### CleanData.js
Takes the raw YouTube subtitles, and formats it to be read by the app. Returns two arrays: "captions" and "sound effects." Returns for each word:

```json
{
  "dur": 333.75,
  "end": 2419,
  "newSpeaker" : true,
  "start": 1084,
  "text": "Text"
}

```

### Captions.js
Child of Video. Accepts the cleaned Captions Data. Loops through words in data on play. Sets timing of words. Renders words on screen.

## Server
Server is based on https://www.twilio.com/blog/react-app-with-node-js-server-proxy

Uses: 
* express
* bodyParser
* cors (to allow cross origin)
* express pino logger (for better server logging)

### API
API is actually a webscrapper that get's the subtitles of a youtube clip