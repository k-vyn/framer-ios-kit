ios = require 'ios-kit'

exports.defaults =
	title:"Title"
	left:undefined
	right:"Edit"
	blur:true
	superLayer:undefined
	type:"navBar"
	color:'blue'
	titleColor:'black'
	backgroundColor:"rgba(255, 255, 255, .8)"
	dividerBackgroundColor:"#B2B2B2"

exports.defaults.props = Object.keys(exports.defaults)

exports.create = (array) ->
	setup = ios.utils.setupComponent(array, exports.defaults)

	bar = new ios.View
		name:"navBar"
		backgroundColor: setup.backgroundColor
		constraints:
			leading:0
			trailing:0
			top:0
			height:64

	bar.bg = new ios.View
		superLayer:bar
		backgroundColor:'transparent'
		name:".bg"
		constraints:
			leading:0
			trailing:0
			height:44
			bottom:0

	bar.divider = new ios.View
		backgroundColor:setup.dividerBackgroundColor
		name:".divider"
		superLayer:bar.bg
		constraints:
			height:.5
			bottom:0
			leading:0
			trailing:0

	if setup.superLayer
		setup.superLayer.addSubLayer(bar)


	if setup.blur
		ios.utils.bgBlur(bar)

	if setup.blur == false && setup.backgroundColor == "rgba(255, 255, 255, .8)"
		bar.backgroundColor = 'white'

	bar.type = setup.type

	for layer in Framer.CurrentContext.layers
		if layer.type == "statusBar"
			@statusBar = layer
			bar.placeBehind(@statusBar)


	if typeof setup.title == "object"
		setup.title = setup.title.label.html


	bar.title = new ios.Text
		fontWeight:"semibold"
		superLayer:bar.bg
		text:setup.title
		name:".title"
		color:setup.titleColor
		constraints:
			align:"horizontal"
			bottom:12

	ios.utils.specialChar(bar.title)

	# Handle Right
	if typeof setup.right == "string" && typeof setup.right != "boolean"
		bar.right = new ios.Button
			name:".right"
			superLayer:bar.bg
			text:setup.right
			color:setup.color
			fontWeight:500
			constraints:
				bottom:12
				trailing:8
		bar.right.type = "button"
		ios.utils.specialChar(bar.right)
	if typeof setup.right == "object"
		bar.right = setup.right
		bar.right.name = ".right"
		bar.right.superLayer = bar.bg
		bar.right.constraints =
			trailing:8
			bottom:12
		ios.layout.set(bar.right)

	# Handle Left
	if typeof setup.left == "string" && typeof setup.left != "boolean"
		setLeading = 8
		if setup.left.indexOf("<") != -1
			svg = ios.utils.svg(ios.assets.chevron)
			bar.chevron = new ios.View
				name:".chevron"
				width:svg.width
				height:svg.height
				backgroundColor:"transparent"
				superLayer:bar.bg
			bar.chevron.html = svg.svg
			bar.chevron.constraints =
					bottom:9
					leading:8
			setup.left = setup.left.replace("<", "")
			ios.utils.changeFill(bar.chevron, setup.color)
			setLeading = [bar.chevron, 4]
			ios.layout.set(bar.chevron)

		bar.left = new ios.Button
			name:".left"
			superLayer:bar.bg
			text:setup.left
			color:setup.color
			fontWeight:500
			constraints:
				bottom:12
				leading:setLeading
		bar.left.type = "button"
		ios.utils.specialChar(bar.left)

		bar.left.on Events.TouchStart, ->
			if bar.chevron
				bar.chevron.animate
					properties:(opacity:.25)
					time:.5
		bar.left.on Events.TouchEnd, ->
			if bar.chevron
				bar.chevron.animate
					properties:(opacity:1)
					time:.5

	if typeof setup.left == "object"
		bar.left = setup.left
		bar.left.name = ".left"
		bar.left.superLayer = bar.bg
		bar.left.constraints =
			leading:8
			bottom:12

	ios.layout.set(bar.left)
	return bar
