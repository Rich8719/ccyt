// Parses SRT json
// removes new line \n
// hyphen signalizes new speaker. Make boolean?
// export things in [thing] to new array called sound effect, or add to current array with new index?

const parseCaptions = captions => {
  captions.forEach(element => {
    const text = element.text.replace(/\n/g, " ")
    console.log(text)
    return text
  })
}

export default parseCaptions
