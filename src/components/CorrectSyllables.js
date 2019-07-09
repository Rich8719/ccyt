// the syllables api requires words to be lower case and sinuglar. This functin returns the split syllables to their original plural state.
import { divideBySyllables } from "./SplitSyllables";

const correctSyllables = (syllables, originalWord, numOfSyllables) => {
  const word = originalWord.replace(/[.,/#!?$%^&*;:{}=\-_`~()]/g, "") //removes punctuation

  const lastSyllable = syllables[syllables.length - 1]
  let result = []
  
  for (let i = 0; i < syllables.length; i++) {
    const syllable = syllables[i]
    if (i === 0) {
      result.push(
        isUpperCase(word[0]) ? capitalize(syllable)
          : syllable)
    }
    else if (i === syllables.length - 1) {
      result.push(pluralizeSyllable(lastSyllable))
    }
    else {
      result.push(syllable)
    }
  }
  
  result = result.join('') === word ? result : divideBySyllables(word, numOfSyllables)

  return result  
}

const isUpperCase = (word) => {
  return /^[A-Z]/.test(word)
}

const capitalize = (syllable) => {
  return syllable.charAt(0).toUpperCase() + syllable.slice(1)
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

export {correctSyllables, isUpperCase}