// import dotenv from 'dotenv'
// import pluralize from 'pluralize'
// import unirest from 'unirest'
// const apiKey = process.env.REACT_APP_WORDS_API_KEY
// dotenv.config()

require('dotenv').config()
const pluralize = require('pluralize')
const unirest = require('unirest')
const apiKey = process.env.REACT_APP_WORDS_API_KEY

const getSyllables = (word, numOfSyllables) => {
  const url = `https://wordsapiv1.p.mashape.com/words/${word}`
  return unirest.get(url)
    .header("X-Mashape-Key", apiKey)
    .header("Accept", "application/json")
    .then(result => {
      // console.log(word, result.status, result.body)
      return result.status === 200 && typeof result.body.syllables !== 'undefined' ?
        result.body.syllables.list
        : divideBySyllables(word, numOfSyllables)
    })
}

const splitSyllables = async (originalWord, numOfSyllables) => {
  const word = cleanData(originalWord)
  let result = await getSyllables(word, numOfSyllables)
  return result
}

// data for wordsapi must be lowercase, singular and without punctuation
const cleanData = (text) => {
  const removePunctuation = text.replace(/[.,/#!?$%^&*;:{}=\-_`~()]/g, "")
  const removeSpaces = removePunctuation.replace(" ", "")
  const singularWord = pluralize.singular(removeSpaces)
  const clean = singularWord.toLowerCase()
  return clean
}

// catch all function. Divides words by number of syllables, if syllables can't be found
const divideBySyllables = (word, numOfSyllables) => {
  let i = 0
  let sliceFrom = 0
  let sliceTo = 0
  const accumulator = Math.floor(word.length / numOfSyllables)
  const remainder = word.length % numOfSyllables
  let syllables = []

  if (numOfSyllables < 2) {
    generateNumOfSyllables(word)
  }
  else {
    while (i < numOfSyllables) {
      if (i === numOfSyllables - 1) {
        syllables.push(word.slice(sliceFrom, sliceTo + accumulator + remainder))
      } else {
        sliceTo += accumulator
        syllables.push(word.slice(sliceFrom, sliceTo))
        sliceFrom = sliceTo
      }
      i++
    }
  }
  return syllables
}

// //creates faux number of syllables for words longer than 8 characters that have only one syllable
const generateNumOfSyllables = (word) => {
  const half = Math.ceil(word.length / 2)
  const maxLength = half >= 5 ? 5 : half
  const numOfSyllables = word.length / maxLength
  divideBySyllables(word, numOfSyllables)
}

module.exports = { splitSyllables }
// export { splitSyllables }