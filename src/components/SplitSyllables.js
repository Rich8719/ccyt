import pluralize from 'pluralize'
import { correctSyllables, isUpperCase } from "./CorrectSyllables";

const getSyllables = (word, numOfSyllables) => {
  return fetch(`http://localhost:4000/api/syllables?word=${encodeURIComponent(word)}`)
    .then(response => response.json())
    .then(result => {
      return result.body.success === true ?
        result.body.syllables.list
        : divideBySyllables(word, numOfSyllables)
    })
    .catch(error => {
      console.log(error);      
    })
}

const splitSyllables = async (originalWord, numOfSyllables) => {
  const word = cleanData(originalWord)
  let syllables = await getSyllables(word, numOfSyllables)

  if (pluralize.isPlural(originalWord) || isUpperCase(originalWord)) {
    correctSyllables(syllables, originalWord)
  }

  let result = pluralize.isPlural(originalWord) || isUpperCase(originalWord) ? correctSyllables(syllables, originalWord, numOfSyllables) : syllables

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

//creates faux number of syllables for words longer than 8 characters that have only one syllable
const generateNumOfSyllables = (word) => {
  const half = Math.ceil(word.length / 2)
  const maxLength = half >= 5 ? 5 : half
  const numOfSyllables = word.length / maxLength
  divideBySyllables(word, numOfSyllables)
}

export { splitSyllables, divideBySyllables }