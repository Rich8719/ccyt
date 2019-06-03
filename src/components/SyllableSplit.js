require('dotenv').config()

const pluralize = require('pluralize')
const syllable = require('syllable')
const unirest = require('unirest')
const apiKey = process.env.REACT_APP_WORDS_API_KEY

const data = [
  {
    text: "Captain,"
  },
  {
    text: "sorry"
  },
  {
    text: "to"
  },
  {
    text: "interrupt."
  },
  {
    text: "I"
  },
  {
    text: "just"
  },
  {
    text: "got"
  },
  {
    text: "off"
  },
  {
    text: "the"
  },
  {
    text: "phone"
  },
  {
    text: "with"
  },
  {
    text: "the"
  },
  {
    text: "Department"
  },
  {
    text: "of"
  },
  {
    text: "Corrections."
  },
  {
    text: "They"
  },
  {
    text: "wanted"
  },
  {
    text: "me"
  },
  {
    text: "to"
  },
  {
    text: "let"
  },
  {
    text: "you"
  },
  {
    text: "know"
  },
  {
    text: "that"
  },
  {
    text: "Ernest"
  },
  {
    text: "Zumowski"
  },
  {
    text: "died."
  },
  {
    text: "My"
  },
  {
    text: "goodness."
  },
  {
    text: "It's"
  },
  {
    text: "been"
  },
  {
    text: "a"
  },
  {
    text: "while"
  },
  {
    text: "since"
  },
  {
    text: "I've"
  },
  {
    text: "heard"
  },
  {
    text: "that"
  },
  {
    text: "name."
  },
  {
    text: "I"
  },
  {
    text: "hunted"
  },
  {
    text: "him"
  },
  {
    text: "for"
  },
  {
    text: "years"
  },
  {
    text: "and"
  },
  {
    text: "finally"
  },
  {
    text: "caught"
  },
  {
    text: "him"
  },
  {
    text: "and"
  },
  {
    text: "put"
  },
  {
    text: "an"
  },
  {
    text: "end"
  },
  {
    text: "to"
  },
  {
    text: "his"
  },
  {
    text: "bloodlust."
  },
  {
    text: "In"
  },
  {
    text: "some"
  },
  {
    text: "sick"
  },
  {
    text: "way,"
  },
  {
    text: "I"
  },
  {
    text: "am"
  },
  {
    text: "who"
  },
  {
    text: "I"
  },
  {
    text: "am"
  },
  {
    text: "because"
  },
  {
    text: "of"
  },
  {
    text: "Ernest"
  },
  {
    text: "Zumowski"
  },
  {
    text: "AKA"
  },
  {
    text: "The"
  },
  {
    text: "Disco"
  },
  {
    text: "Strangler."
  },
  {
    text: "Oh,"
  },
  {
    text: "so"
  },
  {
    text: "you"
  },
  {
    text: "knew"
  },
  {
    text: "who"
  },
  {
    text: "I"
  },
  {
    text: "was"
  },
  {
    text: "talking"
  },
  {
    text: "about?"
  },
  {
    text: "Yeah,"
  },
  {
    text: "sir,"
  },
  {
    text: "you"
  },
  {
    text: "talk"
  },
  {
    text: "about"
  },
  {
    text: "him"
  },
  {
    text: "a"
  },
  {
    text: "lot."
  },
  {
    text: "You"
  },
  {
    text: "know,"
  },
  {
    text: "the"
  },
  {
    text: "yoyo"
  },
  {
    text: "was"
  },
  {
    text: "his"
  },
  {
    text: "Calling"
  },
  {
    text: "card."
  },
  {
    text: "Oh,"
  },
  {
    text: "I"
  },
  {
    text: "mentioned"
  },
  {
    text: "that"
  },
  {
    text: "too?"
  },
  {
    text: "So"
  },
  {
    text: "how'd"
  },
  {
    text: "he"
  },
  {
    text: "die?"
  },
  {
    text: "He"
  },
  {
    text: "was"
  },
  {
    text: "in"
  },
  {
    text: "a"
  },
  {
    text: "prison"
  },
  {
    text: "transport"
  },
  {
    text: "van,"
  },
  {
    text: "and"
  },
  {
    text: "he"
  },
  {
    text: "got"
  },
  {
    text: "in"
  },
  {
    text: "a"
  },
  {
    text: "terrible"
  },
  {
    text: "accident."
  },
  {
    text: "It"
  },
  {
    text: "burst"
  },
  {
    text: "into"
  },
  {
    text: "flames,"
  },
  {
    text: "and"
  },
  {
    text: "he"
  },
  {
    text: "was"
  },
  {
    text: "trapped"
  },
  {
    text: "inside."
  },
  {
    text: "Well,"
  },
  {
    text: "well,"
  },
  {
    text: "well,"
  },
  {
    text: "he"
  },
  {
    text: "finally"
  },
  {
    text: "did"
  },
  {
    text: "it."
  },
  {
    text: "Died"
  },
  {
    text: "horribly?"
  },
  {
    text: "Escaped."
  },
  {
    text: "Just"
  },
  {
    text: "like"
  },
  {
    text: "he"
  },
  {
    text: "said"
  },
  {
    text: "he"
  },
  {
    text: "would"
  },
  {
    text: "all"
  },
  {
    text: "those"
  },
  {
    text: "years"
  },
  {
    text: "ago."
  },
  {
    text: "I'll"
  },
  {
    text: "be"
  },
  {
    text: "coming"
  },
  {
    text: "back"
  },
  {
    text: "for"
  },
  {
    text: "you."
  },
  {
    text: "I'm"
  },
  {
    text: "just"
  },
  {
    text: "like"
  },
  {
    text: "disco,"
  },
  {
    text: "baby."
  },
  {
    text: "I"
  },
  {
    text: "will"
  },
  {
    text: "never"
  },
  {
    text: "die."
  },
  {
    text: "True,"
  },
  {
    text: "disco"
  },
  {
    text: "will"
  },
  {
    text: "never"
  },
  {
    text: "die,"
  },
  {
    text: "but"
  },
  {
    text: "you"
  },
  {
    text: "will"
  },
  {
    text: "In"
  },
  {
    text: "your"
  },
  {
    text: "cell,"
  },
  {
    text: "punk."
  },
  {
    text: "Oh,"
  },
  {
    text: "so"
  },
  {
    text: "I've"
  },
  {
    text: "told"
  },
  {
    text: "that"
  },
  {
    text: "part"
  },
  {
    text: "of"
  },
  {
    text: "the"
  },
  {
    text: "story"
  },
  {
    text: "as"
  },
  {
    text: "well?"
  },
  {
    text: "Yes,"
  },
  {
    text: "at"
  },
  {
    text: "every"
  },
  {
    text: "Christmas"
  },
  {
    text: "party."
  },
  {
    text: "Sir,"
  },
  {
    text: "I"
  },
  {
    text: "am"
  },
  {
    text: "the"
  },
  {
    text: "first"
  },
  {
    text: "to"
  },
  {
    text: "tout"
  },
  {
    text: "the"
  },
  {
    text: "capabilities"
  },
  {
    text: "of"
  },
  {
    text: "senior"
  },
  {
    text: "citizens."
  },
  {
    text: "I"
  },
  {
    text: "have"
  },
  {
    text: "made"
  },
  {
    text: "love"
  },
  {
    text: "to"
  },
  {
    text: "many,"
  },
  {
    text: "but"
  },
  {
    text: "the"
  },
  {
    text: "Disco"
  },
  {
    text: "Strangler"
  },
  {
    text: "is"
  },
  {
    text: "over"
  },
  {
    text: "80."
  },
  {
    text: "I"
  },
  {
    text: "doubt"
  },
  {
    text: "that"
  },
  {
    text: "he"
  },
  {
    text: "could"
  },
  {
    text: "pull"
  },
  {
    text: "off"
  },
  {
    text: "an"
  },
  {
    text: "escape"
  },
  {
    text: "like"
  },
  {
    text: "this."
  },
  {
    text: "Oh,"
  },
  {
    text: "that's"
  },
  {
    text: "what"
  },
  {
    text: "he"
  },
  {
    text: "wants"
  },
  {
    text: "you"
  },
  {
    text: "to"
  },
  {
    text: "think."
  },
  {
    text: "You're"
  },
  {
    text: "both"
  },
  {
    text: "underestimating"
  },
  {
    text: "him."
  },
  {
    text: "I"
  },
  {
    text: "know"
  },
  {
    text: "28"
  },
  {
    text: "other"
  },
  {
    text: "people"
  },
  {
    text: "who"
  },
  {
    text: "did"
  },
  {
    text: "that,"
  },
  {
    text: "and"
  },
  {
    text: "they"
  },
  {
    text: "all"
  },
  {
    text: "ended"
  },
  {
    text: "up"
  },
  {
    text: "with"
  },
  {
    text: "yoyos"
  },
  {
    text: "around"
  },
  {
    text: "their"
  },
  {
    text: "throats."
  },
  {
    text: "both:"
  },
  {
    text: "Necks."
  },
  {
    text: "Nope,"
  },
  {
    text: "I"
  },
  {
    text: "said"
  },
  {
    text: "throats",
  },
  {
    text: "not"
  },
  {
    text: "necks,"
  },
  {
    text: "which"
  },
  {
    text: "means"
  },
  {
    text: "I"
  },
  {
    text: "haven't"
  },
  {
    text: "told"
  },
  {
    text: "that"
  },
  {
    text: "story"
  },
  {
    text: "too"
  },
  {
    text: "many"
  },
  {
    text: "times."
  },
  {
    text: "All"
  },
  {
    text: "right,"
  },
  {
    text: "lace"
  },
  {
    text: "up"
  },
  {
    text: "your"
  },
  {
    text: "dancing"
  },
  {
    text: "shoes"
  },
  {
    text: "because"
  },
  {
    text: "it's"
  },
  {
    text: "time"
  },
  {
    text: "to"
  },
  {
    text: "catch"
  },
  {
    text: "this"
  },
  {
    text: "disco"
  },
  {
    text: "bastard."
  }
]

//spoofs clean caption functionality. Returns word
const cleanCaptions = (data) => {
  const minSplitLength = 8 // words this long or longer are spli
  data.forEach(element => {
    const word = element.text
    const numOfSyllables = syllable(word)
    const wordLength = word.replace(/[^a-zA-Z]/g, '').length
    return wordLength >= minSplitLength && numOfSyllables < 2 ? divideByLength(word)
      : wordLength >= minSplitLength && numOfSyllables >= 2 ? splitSyllable(word, numOfSyllables)
      : null
  })
}

//get syllables from api
const getSyllables = async (word) => {
  const url = `https://wordsapiv1.p.mashape.com/words/${word}/syllables/`
  return await unirest.get(url).header("X-Mashape-Key", apiKey)
    .header("Accept", "application/json")
    .then(result => 
    { return result.body }
  )
}

const cleanData = (word) => {
  const removePunctuation = word.replace(/[.,/#!?$%^&*;:{}=\-_`~()]/g, "");
  const removeSpaces = removePunctuation.replace(" ", "")
  const clean = removeSpaces.toLowerCase()  
  return(clean)

  //gerrunds also have issues underestimating vs understimate
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
    console.log(newSyllables)
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
  console.log(syllables);
  
  return syllables
}

//creates faux number of syllables for words longer than 8 characters that have only one syllable so that they can be divided by divideBySyllables
const divideByLength = (word) => {
  const half = Math.ceil(word.length / 2)
  const maxLength = half >= 5 ? 5 : half
  const numOfSyllables = word.length / maxLength

  divideBySyllable(word, numOfSyllables)
}

const isNotEmpty = (obj, word) => Object.entries(obj).length === 0 && obj.constructor === Object ?
  divideByLength(word)
  : obj

const splitSyllable = async (originalWord, numOfSyllables) => {
  let word = cleanData(originalWord) // data for wordsapi must be lowercase, without punctuation
  const isPlural = pluralize.isPlural(word)

  if (isPlural === true) {
    const singularWord = pluralize.singular(word) // data for wordsapi must not be plural
    const syllables = getSyllables(singularWord)
    syllables   
      // .then(result => { return console.log(result.syllables.list, originalWord) })
      .then(result => {
        return isNotEmpty(result) && isNotEmpty(result.syllables) && isNotEmpty(result.syllables.list) ?
          pluralCorrect(result, originalWord, numOfSyllables)
          : divideByLength(originalWord)
      })
      // .then(plural => { return console.log(plural) }) //replace result in array
    } else {
      // const syllables = getSyllables(word)
      // syllables
      //   .then(result => { return console.log(result, word) } ) //replace result in array
    }
}

cleanCaptions(data)