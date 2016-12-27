const Subtitle = require('./subtitle')

class SRT extends Subtitle {
  parse () {
    console.log('srt parser');
  }
}

module.exports = SRT
