require('dotenv').config()

const pluralize = require('pluralize')
const unirest = require('unirest')
const apiKey = process.env.REACT_APP_WORDS_API_KEY

const splitSyllables = (word, numOfSyllables, wordLength, minSplitLength) => {
  if (wordLength >= minSplitLength && numOfSyllables < 2) {
      return divideByLength(word)
  }
  else if (wordLength >= minSplitLength && numOfSyllables >= 2) {
      return cleanSyllables(word, numOfSyllables)
  }
}

const cleanData = (word) => {
  const removePunctuation = word.replace(/[.,/#!?$%^&*;:{}=\-_`~()]/g, "");
  const removeSpaces = removePunctuation.replace(" ", "")
  const clean = removeSpaces.toLowerCase()  
  return(clean)
}

const pluralizeSyllable = (lastSyllable) => {
  let lastLetter = lastSyllable.charAt(lastSyllable.length - 1)
  let pluralSyllable

  if (lastLetter === 'y') {
    pluralSyllable = lastSyllable.replace('y', 'ies')
    return pluralSyllable
  } else if (lastLetter !== 'y') {
    pluralSyllable = lastSyllable + 's'
    return pluralSyllable
  }
}

// returns array of pluralized syllables if the new syllable word (array) is the same as the original word
const pluralCorrect = (syllables, originalWord, numOfSyllables) => {
  const list = syllables.syllables.list
  const lastSyllable = list[list.length - 1]
  let pluralWord = ''
  let newSyllables = []

  for (let i = 0; i < list.length; i++) {
    if (i === list.length - 1) {
      pluralWord += pluralizeSyllable(lastSyllable)
      newSyllables.push(
        pluralizeSyllable(lastSyllable)
      ) 
    } else {
      pluralWord += list[i]
      newSyllables.push(
        list[i]
      ) 
    }
  }
  return pluralWord === cleanData(originalWord) ?
    build(newSyllables)
    : divideBySyllable(originalWord, numOfSyllables)
}

//catch all function. Divides words by number of syllables, if syllables can't be found
const divideBySyllable = (word, numOfSyllables) => {  
  let i = 0
  let sliceFrom = 0
  let sliceTo = 0
  const accumulator = Math.floor(word.length / numOfSyllables)
  const remainder = word.length % numOfSyllables
  let syllables = []

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
  return build(syllables)
}

//creates faux number of syllables for words longer than 8 characters that have only one syllable so that they can be divided by divideBySyllables
const divideByLength = (word) => {
  const half = Math.ceil(word.length / 2)
  const maxLength = half >= 5 ? 5 : half
  const numOfSyllables = word.length / maxLength
  divideBySyllable(word, numOfSyllables)
}

const isEmpty = (obj) => Object.entries(obj).length === 0 && obj.constructor === Object

//get syllables from api
const getSyllables = async (word) => {
  const url = `https://wordsapiv1.p.mashape.com/words/${word}`
  return await unirest.get(url).header("X-Mashape-Key", apiKey)
    .header("Accept", "application/json")
    .then(result => {
      return result}
  )
}

const cleanSyllables = async (originalWord, numOfSyllables) => {
  let word = cleanData(originalWord) // data for wordsapi must be lowercase, without punctuation
  const isPlural = pluralize.isPlural(word)

  if (isPlural === true) {
    const singularWord = pluralize.singular(word) // data for wordsapi must not be plural
    const syllables = getSyllables(singularWord)
    syllables   
      .then(result => {
        return isEmpty(result) && isEmpty(result.syllables) && isEmpty(result.syllables.list) ?
          pluralCorrect(result, originalWord, numOfSyllables)
          : divideByLength(originalWord)
      })
  }
  else {
    const syllables = getSyllables(word)
    syllables
      .then(result => {
        return result.status === 200 && typeof result.body.syllables !== 'undefined' && isEmpty(result.body.syllables) === false ?
          build(result.body.syllables.list)
          : divideByLength(originalWord)
    })
  }
}

const build = (syllables) => {
  console.log(syllables)
  return syllables
}

// export splitSyllables