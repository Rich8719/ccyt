//Returns captions and soundEffect arrays, stripped of special characters, and adds newspeaker boolean to captions.

import syllable from 'syllable'
import { splitSyllables } from './SplitSyllables.js'

const getCaptions = async (rawCaptions) => {
  let captions = []

  for (let i = 0; i < rawCaptions.length; i++) {
    const rawCaption = rawCaptions[i];
    const removeSounds = rawCaption.text.replace(/\[.*?\]/g, '')
    const removeSrtWords = removeSounds.replace('all:', '') //delete "All:" srt notation
    const removeChars = deleteSpecialChars(removeSrtWords)
    const words = removeChars.split(' ').filter(element => element.length !== 0)//splits characters and removes empty strings 
    const duration = Math.ceil(rawCaption.dur * 1000 / words.length)

    for (let j = 0; j < words.length; j++) {
      const word = words[j];      
      const minSplitLength = 8 // words this long or longer are split into syllables
      const wordLength = word.replace(/[^a-z A-Z' ]/g, '').length //removes punctuation for split length
      const numberOfSyllables = syllable(word)

      if (wordLength >= minSplitLength && syllable(word >= 2)) { //push syllables to array
        const syllables = await splitSyllables(word, syllable(word))
        const syllableDur = Math.floor(duration / numberOfSyllables) 

        for (let k = 0; k < syllables.length; k++) {
          const syllable = syllables[k];
          captions.push({
            text: syllable,
            start: Math.ceil((rawCaption.start * 1000) + (j * duration) + k * syllableDur),
            dur: syllableDur,
            newSpeaker: j !== 0 ? false : addNewSpeakerElement(rawCaption.text)
          })
        }
      } else {
        captions.push({ //push full words to array
          text: word,
          start: Math.ceil((rawCaption.start * 1000) + j * duration),
          dur: duration,
          newSpeaker: j !== 0 ? false : addNewSpeakerElement(rawCaption.text)
        })
      }
    }
  }
  return captions
}

const getSounds = (data) => {
  const soundElements = data.filter(element => element.text.indexOf('[') > - 1)
  const sounds = []

  soundElements.forEach(element => {
    let sound = snipWord(element.text, "[", "]")
    sounds.push({
      sound: sound,
      start: element.start * 1000,
      dur: element.dur * 1000
    })
  })

  return sounds
}

const deleteSpecialChars = (text) => {
  //don't strip hyphens from hyphenated words
  let hyphenatedWords = text.match(/((?:\w+-)+\w+)/g)
  if (hyphenatedWords) {
    return text.replace(/[^a-z A-Z'-., ]/g, ' ')
  } else {
    return text.replace(/[^a-z A-Z'., ]/g, ' ')
  }
}

//adds new speak boolean
const addNewSpeakerElement = text => {
  return (text.indexOf("- ") > -1) |
    (text.indexOf("all:") > -1) |
    (text.indexOf("both:") > -1)
    ? true
    : false
}

//returns word between two characters
const snipWord = (str, firstChar, secondChar) => {
  if (str.indexOf(firstChar) !== -1 && str.indexOf(secondChar) !== -1) {
    return str.slice(str.indexOf(firstChar) + 1, str.indexOf(secondChar))
  }
}

export { getCaptions, getSounds }