// Returns captions and soundEffect arrays, stripped of special characters, and adds newspeaker boolean to captions.

//returns word between two characters
const snipWord = (str, firstChar, secondChar) => {
  if (str.indexOf(firstChar) !== -1 && str.indexOf(secondChar) !== -1) {
    return str.slice(str.indexOf(firstChar), str.indexOf(secondChar) + 1)
  }
}

const convertToMs = seconds => {
  const ms = seconds * 1000
  return ms
}

// removes unwanted character from text
// reformat so that it removes multiple characters ??
const removeCharacter = (element, findCharacter, replaceCharacters, replaceWith) => 
  (element.indexOf(findCharacter) > -1)
    ? element.replace(replaceCharacters, replaceWith)
    : element

const deleteSpecialChars = (data) => {
  let words = []

  data.forEach(element => {
    const removeSounds = removeCharacter(element.text, "[", /\[(.*?)\]\s/, "")
    const removeBreaks = removeCharacter(removeSounds, "\n", "\n", " ")
    const removeHyphens = removeCharacter(removeBreaks, "- ", "- ", "")
    const removeAll = removeCharacter(removeHyphens, "all:", "all:", "") //All refers to notation in captions for all speakers
    const removeDoubleHypens = removeCharacter(removeAll, '--', '--', "") //double hyphens come before "all." regex removes items that start and end --
    const word = removeDoubleHypens

    words.push({
      text: word.trim(),
      start: convertToMs(element.start),
      dur: convertToMs(element.dur),
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

const buildCaptionsArray = data => {
  let captions = []
  data.forEach((words) => {
    let duration = words.dur / words.text.length
    words.text.split(' ').forEach((element, index) => {
      captions.push({
        text: element,
        start: Math.ceil(words.start + (index * duration)),
        dur: duration,
        newSpeaker: (index !== 0) ? (false) : words.newSpeaker
      })
    })
  })
  return captions
}

//returns formatted and clean array of text, start, and duration
const getCaptions = (data) => {
  const addSpeaker = addNewSpeakerElement(data)
  const deleteChars = deleteSpecialChars(addSpeaker)
  const cleanData = buildCaptionsArray(deleteChars)
  return cleanData 
}

//returns sound array with start times and duration and formats
const getSounds = (data) => {
  const soundItems = data.filter(element => element.text.indexOf('[') > -1)
  let soundArray = []

  soundItems.forEach(element => {
    let sound = snipWord(element.text, "[", "]")
    soundArray.push({
      sound: removeCharacter(
        removeCharacter(sound, "[", "[", ""),
        "]",
        "]",
        ""
      ),
      start: convertToMs(element.start),
      dur: convertToMs(element.dur)
    })
  })
  return soundArray
}

export { getCaptions, getSounds}