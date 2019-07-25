// syllables api
require('dotenv').config()
const unirest = require('unirest')
const apiKey = process.env.REACT_APP_WORDS_API_KEY


const getSyllables = (word, res) => {
	const url = `https://wordsapiv1.p.rapidapi.com/words/${word}`
  unirest.get(url)
    .header("X-Mashape-Key", apiKey)
    .header("Accept", "application/json")
    .type('json')
    .end(response => {
      res.send(response)
    })
}

module.exports = { getSyllables }