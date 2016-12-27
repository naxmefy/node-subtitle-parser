const fs = require('fs')
const _ = require('lodash')

class Subtitle {
  constructor (string) {
    this.string = string

    this.parse()
  }

  static loadFromString (string) {
    return new this(string)
  }

  static loadFromPath (path, options, done, reader) {
    if (_.isFunction(options)) {
      done = options
      options = {}
    }

    let read = reader || fs.readFileSync

    if (_.isFunction(done)) {
      readfile = reader || fs.readFile
    }

    options = _.merge({
      encoding: 'utf8',
      flag: 'r'
    }, options)

    return this.loadFromString(readfile(path, options, (err, data) => {
      return done(err, data)
    }))
  }
}

module.exports = Subtitle
