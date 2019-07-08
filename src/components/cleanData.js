//Returns captions and soundEffect arrays, stripped of special characters, and adds newspeaker boolean to captions.

import syllable from 'syllable'
import { splitSyllables } from './SplitSyllables.js'

//test data
let data = [
  {
    start: "1.084",
    dur: "1.335",
    text: "[knocks]\n- Captain, sorry to interrupt."
  },
  {
    start: "2.669",
    dur: "1.918",
    text: "I just got off the phone with\nthe Department of Corrections."
  },
  {
    start: "4.587",
    dur: "3.587",
    text: "They wanted me to let you know\nthat Ernest Zumowski died."
  },
  { start: "8.174", dur: "1.669", text: "- My goodness." },
  {
    start: "9.843",
    dur: "1.877",
    text: "It's been a while\nsince I've heard that name."
  },
  { start: "11.72", dur: "1.71", text: "I hunted him for years" },
  {
    start: "13.43",
    dur: "3.67",
    text: "and finally caught him and put\nan end to his bloodlust."
  },
  {
    start: "17.1",
    dur: "4.504",
    text: "In some sick way, I am who I am\nbecause of Ernest Zumowski"
  },
  {
    start: "21.604",
    dur: "2.586",
    text: "AKA--\nall: The Disco Strangler."
  },
  {
    start: "24.19",
    dur: "1.752",
    text: "- Oh, so you knew\nwho I was talking about?"
  },
  {
    start: "25.942",
    dur: "1.627",
    text: "- Yeah, sir, you talk\nabout him a lot."
  },
  {
    start: "27.569",
    dur: "2.127",
    text: "- You know, the yo-yo was his--\nall: Calling card."
  },
  {
    start: "29.696",
    dur: "2.252",
    text: "- Oh, I mentioned that too?\nSo how'd he die?"
  },
  {
    start: "31.948",
    dur: "1.668",
    text: "- He was in\na prison transport van,"
  },
  {
    start: "33.616",
    dur: "1.502",
    text: "and he got in\na terrible accident."
  },
  {
    start: "35.118",
    dur: "2.002",
    text: "It burst into flames,\nand he was trapped inside."
  },
  { start: "37.12", dur: "2.711", text: "- [laughing]" },
  {
    start: "39.831",
    dur: "2.127",
    text: "Well, well, well,\nhe finally did it."
  },
  {
    start: "41.958",
    dur: "2.795",
    text: "- Died horribly?\n- Escaped."
  },
  {
    start: "44.753",
    dur: "2.335",
    text: "Just like he said he would\nall those years ago."
  },
  {
    start: "47.088",
    dur: "1.585",
    text: "- I'll be coming back for you."
  },
  {
    start: "48.673",
    dur: "3.504",
    text: "I'm just like disco, baby.\nI will never die."
  },
  {
    start: "52.177",
    dur: "3.461",
    text: "- True, disco will never die,\nbut you will--"
  },
  {
    start: "55.638",
    dur: "1.961",
    text: "all: In your cell, punk."
  },
  {
    start: "57.599",
    dur: "2.586",
    text: "- Oh, so I've told that part\nof the story as well?"
  },
  {
    start: "60.185",
    dur: "2.502",
    text: "- Yes, at every\nChristmas party."
  },
  {
    start: "62.687",
    dur: "1.668",
    text: "- Sir, I am the first to tout"
  },
  {
    start: "64.355",
    dur: "1.836",
    text: "the capabilities\nof senior citizens."
  },
  {
    start: "66.191",
    dur: "1.668",
    text: "I have made love to many,"
  },
  {
    start: "67.859",
    dur: "1.46",
    text: "but the Disco Strangler\nis over 80."
  },
  {
    start: "69.319",
    dur: "2.002",
    text: "I doubt that he could pull off\nan escape like this."
  },
  {
    start: "71.321",
    dur: "1.71",
    text: "- Oh, that's what he wants you\nto think."
  },
  {
    start: "73.031",
    dur: "1.793",
    text: "You're both\nunderestimating him."
  },
  {
    start: "74.824",
    dur: "2.002",
    text: "I know 28 other people\nwho did that,"
  },
  {
    start: "76.826",
    dur: "1.377",
    text: "and they all ended up\nwith yo-yos"
  },
  {
    start: "78.203",
    dur: "1.585",
    text: "around their throats.\nboth: Necks."
  },
  {
    start: "79.788",
    dur: "1.459",
    text: '- Nope, I said "throats,"\nnot necks,'
  },
  {
    start: "81.247",
    dur: "2.67",
    text: "which means I haven't told\nthat story too many times."
  },
  {
    start: "83.917",
    dur: "2.794",
    text: "All right, lace up\nyour dancing shoes"
  },
  {
    start: "86.711",
    dur: "3.587",
    text: "because it's time to catch\nthis disco bastard."
  }
]

const getCaptions = async (rawCaptions) => {
  let captions = []

  for (let i = 0; i < rawCaptions.length; i++) {
    const rawCaption = rawCaptions[i];
    const removeSounds = rawCaption.text.replace(/\[.*?\]/g, '')
    const removeSrtWords = removeSounds.replace('all:', '') //delete "All:" srt notation
    const removeChars = deleteSpecialChars(removeSrtWords)
    const words = removeChars.split(' ').filter(element => element.length !== 0)//splits characters and removes empty strings 
    const duration = Math.ceil(rawCaption.dur * 1000 / words.length)

    for (let index = 0; index < words.length; index++) {
      const word = words[index];      
      const minSplitLength = 8 // words this long or longer are split into syllables
      const wordLength = word.replace(/[^a-z A-Z' ]/g, '').length //removes punctuation for split length
      const syllables = wordLength >= minSplitLength && syllable(word >= 2) ? await splitSyllables(word, syllable(word)) : word

      captions.push({
        text: word,
        start: Math.ceil((rawCaption.start * 1000) + index * duration),
        dur: duration,
        newSpeaker: index !== 0 ? false : addNewSpeakerElement(rawCaption.text),
        numberOfSyllables: syllable(word),
        syllables: syllables
      })
    }
  }
  console.log(captions)
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

getCaptions(data)

export { getCaptions, getSounds }