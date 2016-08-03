# Utils

ios = require 'ios-kit'

exports.defaults = {
	animations: {
		target:undefined
		constraints: undefined
		curve : "ease-in-out"
		curveOptions: undefined
		time:1
		delay:0
		repeat:undefined
		colorModel:undefined
		stagger:undefined
		fadeOut:false
		fadeIn:false
	}
}

layout = (array) ->
	setup = {}
	targetLayers = []
	blueprint = []
	if array
		for i in Object.keys(exports.defaults.animations)
			if array[i]
				setup[i] = array[i]
			else
				setup[i] = exports.defaults.animations[i]

	if setup.target
		if setup.target.length
			targetLayers = setup.target
		else
			targetLayers.push setup.target
	else
		targetLayers = Framer.CurrentContext.layers

	if setup.target
		if setup.constraints
			for newConstraint in Object.keys(setup.constraints)
				setup.target.constraints[newConstraint] = setup.constraints[newConstraint]


	#Translate new constraints
	for layer, index in targetLayers
		layer.calculatedPosition = {}
		if layer.constraints

			props = {}
			layer.superFrame = {}

			if layer.superLayer
				layer.superFrame.height = layer.superLayer.height
				layer.superFrame.width = layer.superLayer.width
			else
				layer.superFrame.height = ios.device.height
				layer.superFrame.width = ios.device.width

			if layer.constraints.leading != undefined && layer.constraints.trailing != undefined
				layer.constraints.autoWidth = {}

			if layer.constraints.top != undefined && layer.constraints.bottom != undefined
				layer.constraints.autoHeight = {}

			# Size constraints
			if layer.constraints.width != undefined
				props.width = ios.utils.px(layer.constraints.width)
			else
				props.width = layer.width

			if layer.constraints.height != undefined
				props.height = ios.utils.px(layer.constraints.height)
			else
				props.height = layer.height

			# Positioning constraints
			if layer.constraints.leading != undefined
				#If it's a number`
				if layer.constraints.leading == parseInt(layer.constraints.leading, 10)
					props.x = ios.utils.px(layer.constraints.leading)
				else
					#If it's a layer
					if layer.constraints.leading.length == undefined
						props.x = layer.constraints.leading.calculatedPosition.x + layer.constraints.leading.calculatedPosition.width
					#If it's a relationship
					else
						props.x = layer.constraints.leading[0].calculatedPosition.x + layer.constraints.leading[0].calculatedPosition.width + ios.utils.px(layer.constraints.leading[1])

			# Opposing constraints handler
			if layer.constraints.autoWidth != undefined
				layer.constraints.autoWidth.startX = props.x

			if layer.constraints.trailing != undefined
				#If it's a number
				if layer.constraints.trailing == parseInt(layer.constraints.trailing, 10)
					props.x = layer.superFrame.width - ios.utils.px(layer.constraints.trailing) - props.width
				else
					#If it's a layer
					if layer.constraints.trailing.length == undefined
						props.x = layer.constraints.trailing.calculatedPosition.x - props.width
					#If it's a relationship
					else
						props.x = layer.constraints.trailing[0].calculatedPosition.x - ios.utils.px(layer.constraints.trailing[1]) - props.width

			# Opposing constraints handler
			if layer.constraints.autoWidth != undefined
				layer.constraints.autoWidth.calculatedPositionX = props.x

				##perform autosize
				props.x = layer.constraints.autoWidth.startX
				props.width = layer.constraints.autoWidth.calculatedPositionX - layer.constraints.autoWidth.startX + props.width

			if layer.constraints.top != undefined
				#If it's a number
				if layer.constraints.top == parseInt(layer.constraints.top, 10)
					props.y = ios.utils.px(layer.constraints.top)
				else
					#If it's a layer
					if layer.constraints.top.length == undefined
						props.y = layer.constraints.top.calculatedPosition.y + layer.constraints.top.calculatedPosition.height
					#If it's a relationship
					else
						props.y = layer.constraints.top[0].calculatedPosition.y + layer.constraints.top[0].calculatedPosition.height + ios.utils.px(layer.constraints.top[1])

			# Opposing constraints handler
			if layer.constraints.autoHeight != undefined
				layer.constraints.autoHeight.startY = props.y


			if layer.constraints.bottom != undefined
				#If it's a number
				if layer.constraints.bottom == parseInt(layer.constraints.bottom, 10)
					props.y = layer.superFrame.height - ios.utils.px(layer.constraints.bottom) - props.height

				else
					#If it's a layer
					if layer.constraints.bottom.length == undefined
						props.y = layer.constraints.bottom.calculatedPosition.y - props.height
					#If it's a relationship
					else
						props.y = layer.constraints.bottom[0].calculatedPosition.y -  ios.utils.px(layer.constraints.bottom[1]) - props.height

			# Opposing constraints handler
			if layer.constraints.autoHeight != undefined
				layer.constraints.autoHeight.calculatedPositionY = props.y
				## perform autosize
				props.height = layer.constraints.autoHeight.calculatedPositionY - layer.constraints.autoHeight.startY + props.height
				props.y = layer.constraints.autoHeight.startY


			# Alignment constraints
			if layer.constraints.align != undefined
				#Set the centering frame
				if layer.constraints.align == "horizontal"
					props.x = layer.superFrame.width / 2 - props.width / 2

				if layer.constraints.align == "vertical"
					props.y = layer.superFrame.height / 2 - props.height / 2

				if layer.constraints.align == "center"
					props.x = layer.superFrame.width / 2 - props.width / 2
					props.y = layer.superFrame.height / 2 - props.height / 2


			# Centering constraints
			if layer.constraints.horizontalCenter != undefined
				props.x = layer.constraints.horizontalCenter.calculatedPosition.x + (layer.constraints.horizontalCenter.calculatedPosition.width - props.width) / 2

			if layer.constraints.verticalCenter != undefined
				props.y = layer.constraints.verticalCenter.calculatedPosition.y + (layer.constraints.verticalCenter.calculatedPosition.height - props.height) / 2

			if layer.constraints.center != undefined
				props.x = layer.constraints.center.calculatedPosition.x + (layer.constraints.center.calculatedPosition.width - props.width) / 2
				props.y = layer.constraints.center.calculatedPosition.y + (layer.constraints.center.calculatedPosition.height - props.height) / 2

			# Aligning constraints
			if layer.constraints.leadingEdges != undefined
				props.x = layer.constraints.leadingEdges.calculatedPosition.x

			if layer.constraints.trailingEdges != undefined
				props.x = layer.constraints.trailingEdges.calculatedPosition.x - props.width + layer.constraints.trailingEdges.calculatedPosition.width


			if layer.constraints.topEdges != undefined
				props.y = layer.constraints.topEdges.calculatedPosition.y

			if layer.constraints.bottomEdges != undefined
				props.y = layer.constraints.bottomEdges.calculatedPosition.y - props.height + layer.constraints.bottomEdges.calculatedPosition.height


			layer.calculatedPosition = props
		else
			layer.calculatedPosition = layer.props

		blueprint.push layer


	return blueprint

exports.set = (array) ->
	setup = {}
	props = {}
	if array
		for i in Object.keys(exports.defaults.animations)
			if array[i]
				setup[i] = array[i]
			else
				setup[i] = exports.defaults.animations[i]

	blueprint = layout(array)

	for layer, index in blueprint
		for key in Object.keys(layer.calculatedPosition)
			layer[key] = layer.calculatedPosition[key]

exports.animate = (array) ->
	setup = {}
	props = {}
	if array
		for i in Object.keys(exports.defaults.animations)
			if array[i]
				setup[i] = array[i]
			else
				setup[i] = exports.defaults.animations[i]

	blueprint = layout(array)

	for layer, index in blueprint
		#Timing
		delay = setup.delay
		if setup.stagger
			stag = setup.stagger
			delay = ((index) * stag) + delay

		if setup.fadeOut
			if layer == setup.fadeOut
				layer.calculatedPosition.opacity = 0

		if setup.fadeIn
			layer.calculatedPosition.opacity = 1

		layer.animate
			properties:layer.calculatedPosition
			time:setup.time
			delay:delay
			curve:setup.curve
			repeat:setup.repeat
			colorModel:setup.colorModel
			curveOptions:setup.curveOptions

		layer.calculatedPosition = props
