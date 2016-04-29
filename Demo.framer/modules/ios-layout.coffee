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


exports.animate = (array) ->
	setup = {}
	animatedLayers = []
	if array
		for i in Object.keys(exports.defaults.animations)
			if array[i]
				setup[i] = array[i]
			else
				setup[i] = exports.defaults.animations[i]

	if setup.target 
		if setup.target.length 
			animatedLayers = setup.target
		else
			animatedLayers.push setup.target
	else
		animatedLayers = Framer.CurrentContext.layers

	if setup.target
		if setup.constraints
			for newConstraint in Object.keys(setup.constraints)
				setup.target.constraints[newConstraint] = setup.constraints[newConstraint]

	#Translate new constraints
	for layer, index in animatedLayers
		if layer.constraints
			layer.end = {}
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
					#If the layer referenced hasn't been set
					if layer.constraints.leading[0].end == undefined
							exports.animateLayout
								layer:layer.constraints.leading[0]
					#If it's a layer
					if layer.constraints.leading.length == undefined
						props.x = layer.constraints.leading.end.x + layer.constraints.leading.end.width
					#If it's a relationship
					else
						props.x = layer.constraints.leading[0].end.x + layer.constraints.leading[0].end.width + ios.utils.px(layer.constraints.leading[1])

			# Opposing constraints handler
			if layer.constraints.autoWidth != undefined
				layer.constraints.autoWidth.startX = props.x

			if layer.constraints.trailing != undefined
				#If it's a number
				if layer.constraints.trailing == parseInt(layer.constraints.trailing, 10)	
					props.x = layer.superFrame.width - ios.utils.px(layer.constraints.trailing) - props.width
				else
					#If the layer referenced hasn't been set
					if layer.constraints.trailing[0].end == undefined
							exports.animateLayout
								layer:layer.constraints.trailing[0]
					#If it's a layer
					if layer.constraints.trailing.length == undefined
						props.x = layer.constraints.trailing.end.x - props.width
					#If it's a relationship
					else
						props.x = layer.constraints.trailing[0].end.x - ios.utils.px(layer.constraints.trailing[1]) - props.width

			# Opposing constraints handler
			if layer.constraints.autoWidth != undefined
				layer.constraints.autoWidth.endX = props.x

				##perform autosize
				props.x = layer.constraints.autoWidth.startX
				props.width = layer.constraints.autoWidth.endX - layer.constraints.autoWidth.startX + props.width

			if layer.constraints.top != undefined
				#If it's a number
				if layer.constraints.top == parseInt(layer.constraints.top, 10)	
					props.y = ios.utils.px(layer.constraints.top)
				else
					#If it's a layer
					if layer.constraints.top.length == undefined
						props.y = layer.constraints.top.end.y + layer.constraints.top.end.height
					#If it's a relationship
					else
						props.y = layer.constraints.top[0].end.y + layer.constraints.top[0].end.height + ios.utils.px(layer.constraints.top[1])

			# Opposing constraints handler
			if layer.constraints.autoHeight != undefined
				layer.constraints.autoHeight.startY = props.y


			if layer.constraints.bottom != undefined
				#If it's a number
				if layer.constraints.bottom == parseInt(layer.constraints.bottom, 10)	
					props.y = layer.superFrame.height - ios.utils.px(layer.constraints.bottom) - props.height

				else
					#If the layer referenced hasn't been set
					if layer.constraints.bottom[0].end == undefined
							exports.animateLayout
								layer:layer.constraints.bottom[0]
					#If it's a layer
					if layer.constraints.bottom.length == undefined
						props.y = layer.constraints.bottom.end.y - props.height
					#If it's a relationship
					else 
						props.y = layer.constraints.bottom[0].end.y -  ios.utils.px(layer.constraints.bottom[1])

			# Opposing constraints handler
			if layer.constraints.autoHeight != undefined
				layer.constraints.autoHeight.endY = props.y
				## perform autosize
				props.height = layer.constraints.autoHeight.endY - layer.constraints.autoHeight.startY 
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
				props.x = layer.constraints.horizontalCenter.end.x + (layer.constraints.horizontalCenter.end.width - props.width) / 2

			if layer.constraints.verticalCenter != undefined
				props.y = layer.constraints.verticalCenter.end.y + (layer.constraints.verticalCenter.end.height - props.height) / 2

			if layer.constraints.center != undefined
				props.x = layer.constraints.center.end.x + (layer.constraints.center.end.width - props.width) / 2
				props.y = layer.constraints.center.end.y + (layer.constraints.center.end.height - props.height) / 2

			# Aligning constraints
			if layer.constraints.leadingEdges != undefined
				props.x = layer.constraints.leadingEdges.end.x 

			if layer.constraints.trailingEdges != undefined
				props.x = layer.constraints.trailingEdges.end.x - props.width + layer.constraints.trailingEdges.end.width


			if layer.constraints.topEdges != undefined
				props.y = layer.constraints.topEdges.end.y
			
			if layer.constraints.bottomEdges != undefined
				props.y = layer.constraints.bottomEdges.end.y - props.height + layer.constraints.bottomEdges.end.height 

			#Timing
			delay = setup.delay
			if setup.stagger
				stag = setup.stagger
				delay = ((index) * stag)

			if setup.fadeOut
				# if typeof == "boolean"
				# 	props.opacity = 0
				if layer == setup.fadeOut
					props.opacity = 0

			if setup.fadeIn
				props.opacity = 1


			layer.animate
				properties:props
				time:setup.time
				delay:delay
				curve:setup.curve
				repeat:setup.repeat
				colorModel:setup.colorModel
				curveOptions:setup.curveOptions

			layer.end = props