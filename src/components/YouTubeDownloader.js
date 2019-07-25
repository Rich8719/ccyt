const fs = require('fs')
const ytdl = require('ytdl-core')
// https://github.com/fent/node-ytdl-core
const dl = ytdl('https://www.youtube.com/watch?v=r0YA2fBgBzI')
  .pipe(fs.createWriteStream('video.mp4'))

  //save in videos file under id.
  // function to check if video downloaded before downloading
  // load instead of react component