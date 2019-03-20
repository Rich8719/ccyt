// Returns captions and soundEffect arrays, stripped of special characters, and adds newspeaker boolean to captions.

//returns word between two characters
const snipWord = (str, firstChar, secondChar) => {
  if (str.indexOf(firstChar) !== -1 && str.indexOf(secondChar) !== -1) {
    return str.slice(str.indexOf(firstChar), str.indexOf(secondChar) + 1)
  }
}

// removes unwanted characters from text
const removeCharacters = (element, findCharacter, replaceCharacters, replaceWith) => 
  (element.indexOf(findCharacter) > -1)
    ? element.replace(replaceCharacters, replaceWith)
    : element

//need reformatting
const deleteSpecialChars = (data) => {
  let words = []

  data.forEach(element => {
    const removeSounds = removeCharacters(element.text, "[", /\[(.*?)\]\s/, "")
    const removeBreaks = removeCharacters(removeSounds, "\n", "\n", " ")
    const removeHyphens = removeCharacters(removeBreaks, "- ", "- ", "")
    const removeAll = removeCharacters(removeHyphens, "all:", "all:", "") //All refers to notation in captions for all speakers
    const removeDoubleHypens = removeCharacters(removeAll, '--', '--', "") //double hyphens come before "all." regex removes items that start and end --
    const word = removeDoubleHypens

    words.push({
      text: word.trim(),
      start: element.start,
      dur: element.dur,
      newSpeaker: element.newSpeaker
    })
  })
  return words.filter(element => element.text.length !== 0) //removes empty text elements
}

// "- ", "both", or "all:" indicates a new speaker in json. This function adds newSpeaker boolean to words array.
const addNewSpeakerElement = data => {
  // let speakers = splitSpeakers(data)

  data.forEach(element => {
    (element.text.indexOf("- ") > -1) |
      (element.text.indexOf("all:") > -1) |
      (element.text.indexOf("both:") > -1)
      ? (element.newSpeaker = true)
      : (element.newSpeaker = false)
  })
  return data
}

//returns formatted and clean array of text, start, and duration
const getCaptions = (data) => {
  const addSpeaker = addNewSpeakerElement(data)
  const deleteChars = deleteSpecialChars(addSpeaker)
  const cleanData = deleteChars
  return cleanData
}

//returns sound array with start times and duration
const getSounds = (data) => {
  const soundItems = data.filter(element => element.text.indexOf('[') > -1)
  let soundArray = []

  soundItems.forEach(element => {
    soundArray.push({
      sound: snipWord(element.text, "[", "]"),
      start: element.start,
      dur: element.dur
    })
  })
  return soundArray
}

export default { getCaptions, getSounds}