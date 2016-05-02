ios = require 'ios-kit'

exports.defaults = {
	title:"Title"
	left:undefined
	right:"Edit"
	blur:true
	superLayer:undefined
	type:"navBar"
}

exports.defaults.props = Object.keys(exports.defaults)

exports.create = (array) ->
	setup = ios.utils.setupComponent(array, exports.defaults)
	bar = new Layer name:"navbar"
	bar.constraints = 
		leading:0
		trailing:0
		top:0
		height:64

	barArea = new Layer superLayer:bar, backgroundColor:"transparent"
	barArea.constraints =
		leading:0
		trailing:0
		height:44
		bottom:0

	divider = new Layer backgroundColor:"#B2B2B2", name:"nav divider", superLayer:barArea
	divider.constraints =
		height:.5
		bottom:0
		leading:0
		trailing:0

	if setup.superLayer 
		setup.superLayer.addSubLayer(bar)

	if setup.blur 
		bar.backgroundColor = "rgba(255, 255, 255, .8)"
		ios.utils.bgBlur(bar)
	else
		bar.backgroundColor = "rgba(255, 255, 255, 1)"
		ios.utils.bgBlur(bar)

	ios.layout.set([bar, barArea, divider])

	bar.type = setup.type



	for layer in Framer.CurrentContext.layers
		if layer.type == "statusBar"
			@statusBar = layer
			bar.placeBehind(@statusBar)

	if typeof setup.title == "string"
		title = new ios.Text style:"navBarTitle", fontWeight:"semibold", superLayer:barArea, text:setup.title
	if typeof setup.title == "object" 
		title = new ios.Text style:"navBarTitle", fontWeight:"semibold", superLayer:barArea, text:setup.title.label.html
		bar.superLayer = setup.title.view
	ios.utils.specialChar(title)
	title.constraints = 
		align:"horizontal"
		bottom:12

	# Handle Right
	if typeof setup.right == "string" && typeof setup.right != "boolean"
		bar.right = new ios.Button superLayer:barArea, text:setup.right, fontWeight:500, constraints:{bottom:12, trailing:8}
		bar.right.type = "button"
		ios.utils.specialChar(bar.right)
	if typeof setup.right == "object"
		bar.right = setup.right
		bar.right.superLayer = barArea
		bar.right.constraints = {
			trailing:8
			bottom:12
		}
	ios.layout.set(bar.right)

	# Handle Left
	if typeof setup.left == "string" && typeof setup.left != "boolean"
		setLeading = 8
		if setup.left.indexOf("<") != -1
			svg = ios.utils.svg(ios.assets.chevron)
			bar.chevron = new Layer 
				name:"chevron"
				width:svg.width
				height:svg.height
				backgroundColor:"transparent"
				superLayer:barArea
			bar.chevron.html = svg.svg
			bar.chevron.constraints = 
					bottom:9
					leading:8
			setup.left = setup.left.replace("<", "")
			setLeading = [bar.chevron, 4]
			ios.layout.set(bar.chevron)

		bar.left = new ios.Button 
			name:"left"
			superLayer:barArea
			text:setup.left
			fontWeight:500
			constraints:
				bottom:12
				leading:setLeading
		
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
		bar.left.superLayer = barArea
		bar.left.constraints = {
			leading:8
			bottom:12
		}

	ios.layout.set(bar.left)
	return bar