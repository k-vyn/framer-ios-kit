ios = require 'ios-kit'

exports.defaults = {
		text:"text"
		type:"button"
		buttonType:"text"
		style:"light"
		backgroundColor:"white"
		color:"#007AFF"
		fontSize:17
		fontWeight:"regular"
		name:"button"
		blur:true
		superLayer:undefined
		constraints:undefined
	}

exports.defaults.props = Object.keys(exports.defaults)

exports.create = (array) ->
	setup = ios.utils.setupComponent(array, exports.defaults)
	button = new Layer name:setup.name
	button.buttonType = setup.buttonType
	button.type = setup.type
	color = ""
	if setup.constraints
		button.constraints = 
			setup.constraints
	if setup.superLayer 
		setup.superLayer.addSubLayer(button)

	switch setup.buttonType
		when "big"
			setup.fontSize = 20
			setup.fontWeight = "medium"

			if button.constraints == undefined
				button.constraints = {}

			if button.constraints.leading == undefined
				button.constraints.leading = 10

			if button.constraints.trailing == undefined
				button.constraints.trailing = 10

			if button.constraints.height == undefined
				button.constraints.height = 57

			button.borderRadius = ios.utils.px(12.5)
			backgroundColor = ""

			switch setup.style
				when "light"
					color = "#007AFF"
					if setup.blur 
						backgroundColor = "rgba(255, 255, 255, .9)"
						ios.utils.bgBlur(button)
					else
						backgroundColor = "white"

				when "dark"
					color = "#FFF"
					if setup.blur
						backgroundColor = "rgba(43, 43, 43, .9)"
						ios.utils.bgBlur(button)
					else
						backgroundColor = "#282828"
				else
					if setup.blur 
						color = setup.color
						backgroundColor = new Color(setup.backgroundColor)
						rgbString = backgroundColor.toRgbString()
						rgbaString = rgbString.replace(")", ", .9)")
						rgbaString  = rgbaString.replace("rgb", "rgba")
						backgroundColor = rgbaString
						ios.utils.bgBlur(button)
					else
						color = setup.color
						backgroundColor = new Color(setup.backgroundColor)


			button.backgroundColor = backgroundColor

			button.on Events.TouchStart, ->
				newColor = ""
				if setup.style == "dark"
					newColor = button.backgroundColor.lighten(10)
				else
					newColor = button.backgroundColor.darken(10)
				button.animate 
					properties:(backgroundColor:newColor)
					time:.5
					
			button.on Events.TouchEnd, ->
				button.animate
					properties:(backgroundColor:backgroundColor)
					time:.5

		when "small"
			@fontSize = 16
			@top = 4
			button.borderRadius = ios.utils.px(2.5)
			setup.fontWeight = 500
			switch setup.style
				when "light"
					color = "#007AFF"
					button.borderColor = "#007AFF"
				else
					color = setup.color
					button.borderColor = setup.color
			button.backgroundColor = "transparent"
			button.borderWidth = ios.utils.px(1)


		else
			button.backgroundColor = "transparent"
			color = setup.color
			@fontSize = setup.fontSize
			@fontWeight = setup.fontWeight

			button.on Events.TouchStart, ->
				newColor = button.subLayers[0].color.lighten(30)
				button.subLayers[0].animate 
					properties:(color:newColor)
					time:.5
			button.on Events.TouchEnd, ->
				button.subLayers[0].animate
					properties:(color:setup.color)
					time:.5

	textLayer = new ios.Text 
		name:"label"
		text:setup.text
		color:color
		superLayer:button
		fontSize:setup.fontSize
		fontWeight:setup.fontWeight
		constraints:
			align:"center"

	switch setup.buttonType 
		when "small"
			button.props = (width:textLayer.width + ios.utils.px(20), height: textLayer.height + ios.utils.px(10))

			button.on Events.TouchStart, ->
				button.animate
					properties:(backgroundColor:color)
					time:.5	
				textLayer.animate
					properties:(color:"#FFF")
					time:.5
			button.on Events.TouchEnd, ->
				button.animate
					properties:(backgroundColor:"transparent")
					time:.5	
				textLayer.animate
					properties:(color:color)
					time:.5
		else 
			button.props = (width:textLayer.width, height:textLayer.height)



	button.label = textLayer
	ios.layout.set
		target:button

	ios.layout.set
		target:textLayer
	return button