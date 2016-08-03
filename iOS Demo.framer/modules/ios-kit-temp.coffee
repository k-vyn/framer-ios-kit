ios = require 'ios-kit'


exports.defaults =
  key:"value"

exports.defaults.props = Object.keys(exports.defaults)

exports.create = (array) ->
  setup = ios.utils.setupComponent(array, exports.defaults)
  return
