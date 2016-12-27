const path = require('path')

const Subtitle = require('./subtitle')
const SRT = require('./srt')
const ASSA = require('./assa')

console.log(new ASSA('21123'));
console.log(new SRT('21123'));

exports = module.exports = function(string, options, done) {
  switch (true) {
    case path.isAbolsute(string):
      return exports.loadFromPath(string, options, done)
    case path.isAbsolute(path.join(
      path.dirname(module.parent.filename),
      string
    )):
      return exports.loadFromPath(
        path.join(path.dirname(module.parent.filename), string),
        options,
        done
      )
    case SRT.isSRTString(string):
      return new SRT(string)
    case ASSA.isASSAString(string):
      return new ASSA(string)
    default: return false
  }
}

exports.loadFromPath = function(path, options, done) {
  switch(path.extname(path)) {
    case 'ssa':
    case 'ass':
      return ASSA.loadFromPath(path, options, done)
    case 'srt':
      return SRT.loadFromPath(path, options, done)
    default: return false
  }
}

exports.SRT = SRT
exports.ASSA = ASSA
