const flip = require("flip-text")

module.exports = {
  flip: (text) => {
    return flip(text)
  },
  unflip: (text) => {
    //we don't yet have a method for unflipping text
    return 'Beep boop, BOP?'
  }
}
