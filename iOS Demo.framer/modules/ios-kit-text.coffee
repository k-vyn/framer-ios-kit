ios = require 'ios-kit'


exports.defaults =
	editable:true
	constraints:undefined
	text: "iOS Text Layer"
	type:"text"
	x:0
	y:0
	width:-1
	height:-1
	superLayer:undefined
	style:"default"
	lines:1
	textAlign:"left"
	backgroundColor:"transparent"
	color:"black"
	fontSize: 17
	fontFamily:"-apple-system, Helvetica, Arial, sans-serif"
	fontWeight:"regular"
	lineHeight:"auto"
	name:"text layer"
	opacity:1
	textTransform:"none"
	letterSpacing:0
	name:"text layer"
	selectable:true
	selectColor:"rgba(0, 118, 255, .2)"
	selectControls:"#0076FF"

exports.defaults.props = Object.keys(exports.defaults)


exports.create = (array) ->
	setup = ios.utils.setupComponent(array, exports.defaults)
	exceptions = Object.keys(setup)

	textLayer = new ios.View
		backgroundColor:"transparent"
		name:setup.name
		superLayer:setup.superLayer
		constraints:setup.constraints

	textLayer.type = "text"
	textLayer.html = setup.text
	for prop in ios.lib.layerProps
		if setup[prop]
			if prop == "color"
				setup[prop] = ios.utils.color(setup[prop])
			textLayer[prop] = setup[prop]
	for prop in ios.lib.layerStyles
		if setup[prop]
			if prop == "lineHeight" && setup[prop] == "auto"
				textLayer.style.lineHeight =  setup.fontSize
			if prop == "fontWeight"
				switch setup[prop]
					when "ultrathin" then setup[prop] = 100
					when "thin" then setup[prop] = 200
					when "light" then setup[prop] = 300
					when "regular" then setup[prop] = 400
					when "medium" then setup[prop] = 500
					when "semibold" then setup[prop] = 600
					when "bold" then setup[prop] = 700
					when "black" then setup[prop] = 800
			if prop == "fontSize" || prop == "lineHeight" || prop == "letterSpacing"
				setup[prop] = ios.utils.px(setup[prop]) + "px"
			textLayer.style[prop] = setup[prop]

	textFrame = ios.utils.textAutoSize(textLayer)
	textLayer.props = (height:textFrame.height, width:textFrame.width)

	if setup.editable
		textLayer.on "change:html", ->
			textFrame = ios.utils.textAutoSize(textLayer)
			textLayer.props = (height:textFrame.height, width:textFrame.width)


	ios.layout.set
		target:textLayer
	return textLayer
