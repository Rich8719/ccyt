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
### SplitSyllables
Takes words longer than the minimum split length (8) and divides them by the number of syllables in the word, or splits them into smaller chunks if there is only one syllable

### CorrectSyllables
The api used to split syllables requires words to be lowercase and singular. This component edits the returned syllables array to match the original word. *Note this does not include adding back punctuation, but his might be something to add in the future.*

### Captions
Child of Video. Accepts the cleaned Captions Data. Loops through words in data on play. Sets timing of words. Renders words on screen.

## SpeechBubble
Speech bubbles are rendered on an imaginary grid that divides the screen in half horizontally and by thirds vertically. The SpeechBubble component takes in the x and y coordinates from the FaceTracker, and sets the speech bubble and text position in the grid element closest to the face without a face in it. The position is set via adding css classes.

Also, creates new components based upon the number of speakers and when to create new speech bubbles based upon the New Speaker state in App captions state.

## SpeechStyles
Sets the background svg image and the width of the speech bubble (dependent on the longest word in the text)

## FaceTracker
Uses FaceAPI.js https://github.com/justadudewhohacks/face-api.js?files=1 and returns the X and Y coordinates of the face.

## FacialRecognition
Returns the identity of the person on screen.

## Server
Server is based on https://www.twilio.com/blog/react-app-with-node-js-server-proxy

Uses: 
* express
* bodyParser
* cors (to allow cross origin)
* express pino logger (for better server logging)

### scrapeCaptions.js
Scrapes the subtitles of a youtube clip

### API
Gets syllables from wordsapi