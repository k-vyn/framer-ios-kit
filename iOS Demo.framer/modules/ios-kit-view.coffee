ios = require 'ios-kit'

exports.create = (obj) ->
	if obj == undefined then obj = {}

	view = new Layer
	view.constraints = {}

	# Set framer props
	for prop in ios.lib.layerProps
			if obj[prop] then view[prop] = obj[prop]

	# Set constraints
	if obj["constraints"]
		view.constraints = obj["constraints"]
		ios.layout.set(view)

	return view
