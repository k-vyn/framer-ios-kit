ios = require 'ios-kit'

exports.defaults =
		text:"Button"
		type:"text"
		style:"light"
		backgroundColor:"white"
		color:"#007AFF"
		fontSize:17
		fontWeight:"regular"
		name:"button"
		blur:true
		superLayer:undefined
		constraints:undefined

exports.defaults.props = Object.keys(exports.defaults)

exports.create = (array) ->
	setup = ios.utils.setupComponent(array, exports.defaults)

	button = new ios.View
		name:setup.name
		constraints:setup.constraints
		superLayer:setup.superLayer
	button.type = setup.type

	color = ""

	switch setup.type
		when "big"
			setup.fontSize = 20
			setup.fontWeight = "medium"

			button.borderRadius = ios.utils.px(12.5)
			backgroundColor = ""

			if button.constraints == undefined then button.constraints = {}
			button.constraints.leading = 10
			button.constraints.trailing = 10
			button.constraints.height = 57

			switch setup.style
				when "light"
					color = ios.utils.color("blue")
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
			setup.fontSize = 14
			setup.top = 4
			button.borderRadius = ios.utils.px(2.5)
			setup.fontWeight = 500
			setup.text = setup.text.toUpperCase()
			color = setup.color
			button.borderColor = setup.color

			button.backgroundColor = "transparent"
			button.borderWidth = ios.utils.px(1)

		else
			button.backgroundColor = "transparent"
			button.origColor = ios.utils.specialChar(button)

			color = setup.color
			button.labelOrigColor = color


			button.on Events.TouchStart, ->
				@.labelOrigColor = button.label.color
				newColor = button.subLayers[0].color.lighten(30)
				button.subLayers[0].animate
					properties:(color:newColor)
					time:.5

			button.on Events.TouchEnd, ->
				@.subLayers[0].animate
					properties:(color:ios.utils.color(@.labelOrigColor))
					time:.5

	button.label = new ios.Text
		name:".label"
		text:setup.text
		color:color
		lineHeight:16
		superLayer:button
		fontSize:setup.fontSize
		fontWeight:setup.fontWeight
		constraints:
			align:"center"

	switch setup.type
		when "small"
			button.props = (width:button.label.width + ios.utils.px(20), height: button.label.height + ios.utils.px(10))

			button.on Events.TouchStart, ->
				button.animate
					properties:(backgroundColor:color)
					time:.5
				button.label.animate
					properties:(color:"#FFF")
					time:.5
			button.on Events.TouchEnd, ->
				button.animate
					properties:(backgroundColor:"transparent")
					time:.5
				button.label.animate
					properties:(color:color)
					time:.5
		else
			button.props = (width:button.label.width, height:button.label.height)


	ios.layout.set
		target:button

	ios.layout.set
		target:button.label
	return button
