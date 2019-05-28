require('dotenv').config()

const pluralize = require('pluralize')
const syllable = require('syllable')

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

const minSplitLength = 8 // words this long or longer are spli
const unirest = require('unirest')
const apiKey = process.env.REACT_APP_WORDS_API_KEY

const syllables = async (word) => {
  const url = `https://wordsapiv1.p.mashape.com/words/${word}/syllables`
  const api = unirest.get(url).header("X-Mashape-Key", apiKey)
  let res = []
  await api
    .header("Accept", "application/json")
    .end(function (result) {
      result.status === 200 ? // or if syllables array empty
        console.log(result.status, result.body) // replace old word in array
        : divideWordBySyllable(word)
  })
}

//get syllables from api
const getData = async (data) => {
  for (let i = 0; i < data.length; i++) {
    let word = cleanData(data[i].text)
    console.log(word)
    // await syllables(word)
  }
}

const divideWordBySyllable = (word) => {
  return word
  // if word longer than 8 letters but only one syllable
  // or if 'word not found'
  // or if syllables is empty object
}

//finds words above minSplitLength
const filterData = (data) => {
  const numOfSyllables = syllable(data.text)
  const words = data.filter(data => data.text.length > minSplitLength && numOfSyllables >= 2)
  return words
}

const cleanData = (word) => {
  // data for wordsapi must be lowercase, without punctuation
  const removePunctuation = word.replace(/[.,/#!?$%^&*;:{}=\-_`~()]/g, "");
  const removeSpaces = removePunctuation.replace(" ", "")
  const clean = removeSpaces.toLowerCase()
  
  //plurals break it capability vs capabilities, correction vs corrections
  //words that are plural often rturn as singular
  const plural = pluralize.isPlural(clean)
  return plural === true ?
    pluralize.singular(clean) //need to convert back to singular after search
    : clean

  //gerrunds also have issues underestimating vs understimate
  // return clean
}

getData(filterData(data))