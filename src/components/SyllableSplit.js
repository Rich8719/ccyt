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
const minSplitLength = 8 // words this long or longer are split
let syllables = []

const countSyllables = (data) => {
  let numOfSyllables
  data.forEach(element => {
    let word = element.text
    if (word.length > minSplitLength) {
      numOfSyllables = syllable(word) 
      split(word, numOfSyllables)
    }
  })
}

//converts word to code showing vowels and consonants (eg code = cvcv)
const convertToVc = (word) => {
  const consonants = word.replace(/[bcdfghjklmnpqrstvwxyz]/gi, 'c')
  const vowels = consonants.replace(/[aeioou]/gi, 'v')
  const removePunctuation = vowels.replace(/[.,\/#!$%\^&\*;:{}\?=\-_`~()]/g, "")
  const vcCode = removePunctuation
  
  return vcCode
}

// When there is only one syllable, you usually divide in front of it, as in: "o-pen", "i-tem", "e-vil", and "re-port"
const ruleSingleMidCons = (word, vcCode) => {
  return syllables.push(
    word, {
      syb1: word.slice(0, vcCode.indexOf("vcv") + 1), // slice from begining up to v
      syb2: word.slice(vcCode.indexOf("vcv") + 1) //slice from 'c' to end
    }
  )
}

const ruleCompoundWord = (word) => {
  // 8. Divide off any compound words, prefixes, suffixes and roots which have vowel sounds.
  // Split off the parts of compound words like "sports-car" and "house-boat".
}

const rulePrefixes = (word) => {
  // Divide off prefixes such at "un-happy", "pre-paid", or "re-write". Also divide off suffixes as in the words "farm-er", "teach-er", "hope-less" and "care-ful". In the word "stop-ping", the suffix is actually "-ping" because this word follows the rule that when you add "-ing" to a word with one syllable, you double the last consonant and add the "-ing".
}

const ruleEndLe = (word) => {
  // 7. Divide before the consonant before an "-le" syllable.
  // When you have a word that has the old-style spelling in which the "-le" sounds like "-el", divide before the consonant before the "-le". For example: "a/ble", "fum/ble", "rub/ble" "mum/ble" and "this/tle". The only exception to this are "ckle" words like "tick/le". 
}

const rules = (word, vcCode, numOfSyllables) => {
  if (numOfSyllables === 2 && vcCode.includes('vcv')) {
    ruleSingleMidCons(word, vcCode)
  }
  else {
    console.log('next rule')
    return
  }
  console.log(syllables)
// Syllable may consist of the following:
// A vowel alone : a-round, e-ther, e-ver, i-con
// A vowel with one consonant: on, to, do
// A vowel with more than one consonant: list, germ, balm
// A semi-vowel with a combination of vowels and consonants: yield, wet
// A combination of consonants with a dipthong: foul, toil, mean
// A consonant with a combination of vowels: too, pie
// A combination of vowels and consonants: thought, love,

// In words ending in double consonants, the consonant should not be separated in syllabifying their derivatives – fall, fall-en; miss, miss-ing; pass, pass-ive.

// Divide between two middle consonants.
// Split up words that have two middle consonants. For example:
// hap/pen, bas/ket, let/ter, sup/per, din/ner, and Den/nis. The only exceptions are the consonant digraphs. Never split up consonant digraphs as they really represent only one sound. The exceptions are "th", "sh", "ph", "th", "ch", and "wh".  


// console.log(vcCode, numOfSyllables)
}

const split = (word, numOfSyllables) => {
  rules(word, convertToVc(word), numOfSyllables)
}

countSyllables(data)