// Sets dynamically computed styles. SVG and word length.
// word length is longest word from new Speaker to new speaker
// SVG set here to import them first. Not sure if this is best practice
// Other styles for different positions are set in app.styles

import tr from "../images/top-right-sb.svg";
import tl from "../images/top-left-sb.svg";
import mr from "../images/middle-right-sb.svg";
import ml from "../images/middle-left-sb.svg";
import br from "../images/bottom-right-sb.svg";
import bl from "../images/bottom-left-sb.svg";

const getStyle = (position) => {
  let bubbleStyle = {}
  position === 'tr' ? bubbleStyle = topRight
    : position === 'tl' ? bubbleStyle = topLeft
      : position === 'mr' ? bubbleStyle = middleRight
        : position === 'ml' ? bubbleStyle = middleLeft
          : position === 'br' ? bubbleStyle = bottomRight
            : position === 'bl' ? bubbleStyle = bottomLeft
              : console.log('Error getting bubble style. No posiotion defined')

  return bubbleStyle
}

const topRight = {
  bubbleClass: 'top-right',
  speechClass: 'top-right-speech',
  backgroundImage: `url('${tr}')`
}

const topLeft = {
  bubbleClass: 'top-left',
  speechClass: 'top-left-speech',
  backgroundImage: `url('${tl}')`
}

const middleRight = {
  bubbleClass: 'middle-right',
  speechClass: 'middle-right-speech',
  backgroundImage: `url('${mr}')`
}

const middleLeft = {
  bubbleClass: 'middle-left',
  speechClass: 'middle-left-speech',
  backgroundImage: `url('${ml}')`
}

const bottomRight = {
  bubbleClass: 'bottom-right',
  speechClass: 'bottom-right-speech',
  backgroundImage: `url('${br}')`
}

const bottomLeft = {
  bubbleClass: 'bottom-left',
  speechClass: 'bottom-left-speech',
  backgroundImage: `url('${bl}')`
}

export default getStyle