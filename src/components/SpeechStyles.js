// sets the styling for the speech bubbles and text
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
  backgroundImage: `url('${tr}')`
}

const topLeft = {
  backgroundImage: `url('${tl}')`
}

const middleRight = {
  backgroundImage: `url('${mr}')`
}

const middleLeft = {
  backgroundImage: `url('${ml}')`
}

const bottomRight = {
  backgroundImage: `url('${br}')`
}

const bottomLeft = {
  backgroundImage: `url('${bl}')`
}

export default getStyle