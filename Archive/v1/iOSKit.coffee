#iOSKit Module
#By Kevyn Arnott 


framerDevices = {

# Fullscreen
"fullscreen" : { height: window.innerHeight, width: window.innerWidth,	scale:1, mobile:false, platform:"web"}

# iPhones

## 5S
"apple-iphone-5s-space-gray": { height: 1136, width: 640,	scale: 2, mobile:true, platform:"iOS"}
"apple-iphone-5s-silver": { height: 1136, width: 640,	scale: 2, mobile:true, platform:"iOS"}
"apple-iphone-5s-gold": { height: 1136, width: 640,	scale: 2, mobile:true, platform:"iOS"}

## 5c
"apple-iphone-5c-green": { height: 1136, width: 640,scale: 2, mobile:true, platform:"iOS"}
"apple-iphone-5c-blue": { height: 1136, width: 640,	scale: 2, mobile:true, platform:"iOS"}
"apple-iphone-5c-red": { height: 1136, width: 640,	scale: 2, mobile:true, platform:"iOS"}
"apple-iphone-5c-white": { height: 1136, width: 640,scale: 2, mobile:true, platform:"iOS"}
"apple-iphone-5c-yellow": { height: 1136, width: 640,scale: 2, mobile:true, platform:"iOS"}
"apple-iphone-5c-pink": { height: 1136, width: 640,	scale: 2, mobile:true, platform:"iOS"}

## 6s
"apple-iphone-6s-space-gray" : { height: 1334, width: 750,	scale: 2, mobile:true, platform:"iOS"}
"apple-iphone-6s-silver": { height: 1334, width: 750,	scale: 2, mobile:true, platform:"iOS"}
"apple-iphone-6s-gold": { height: 1334, width: 750,	scale: 2, mobile:true, platform:"iOS"}
"apple-iphone-6s-rose-gold": { height: 1334, width: 750,	scale: 2, mobile:true, platform:"iOS"}

## 6s plus
"apple-iphone-6s-plus-gold": { height: 2208, width: 1242, scale: 3, mobile:true, platform:"iOS"}
"apple-iphone-6s-plus-silver": { height: 2208, width: 1242,	scale: 3, mobile:true, platform:"iOS"}
"apple-iphone-6s-plus-space-gray": { height: 2208, width: 1242,	scale: 3, mobile:true, platform:"iOS"}
"apple-iphone-6s-plus-rose-gold": { height: 2208, width: 1242,	scale: 3, mobile:true, platform:"iOS"}

# iPads

## Air 
"apple-ipad-air-2-gold": { height: 2048, width: 1536,	scale: 2, mobile:true, platform:"iOS"}
"apple-ipad-air-2-silver": { height: 2048, width: 1536,	scale: 2, mobile:true, platform:"iOS"}
"apple-ipad-air-2-space-gray": { height: 2048, width: 1536,	scale: 2, mobile:true, platform:"iOS"}

## Mini
"apple-ipad-mini-4-gold": { height: 2048, width: 1536,	scale: 2, mobile:true, platform:"iOS"}
"apple-ipad-mini-4-space-gray": { height: 2048, width: 1536,	scale: 2, mobile:true, platform:"iOS"}
"apple-ipad-mini-4-silver":{ height: 2048, width: 1536, scale: 2, mobile:true, platform:"iOS"}

## Pro
"apple-ipad-pro-gold": { height: 2732, width: 2048, scale: 2, mobile:true, platform:"iOS"}
"apple-ipad-pro-silver": { height: 2732, width: 2048, scale: 2, mobile:true, platform:"iOS"}
"apple-ipad-pro-space-gray" : { height: 2732, width: 2048, scale: 2, mobile:true, platform:"iOS"}
}

## These variables will be populated with details from the device upon running. 
exports.device = 0
exports.name = 0
exports.scale = 0
exports.height = 0
exports.width = 0
exports.mobile = 0
exports.platform = 0
exports.orientation = 0

screen = {}



# getDevice will populate device variables, and it'll override the frame if the device is different. 
exports.getDevice = ->

	# Loads the initial frame
	device = Framer.Device.deviceType

	### This switch looks at the innerWidth to determine if the prototype is being opened on a device. 
	If so, it'll override the device, and it'll adjust the view to fullscreen.###

	switch innerWidth
		# iPhone 5c/5s/SE
		when 640
			device = "apple-iphone-5s-silver"
			Framer.Device.deviceType = "fullscreen"

		# iPhone 6s
		when 750
			device = "apple-iphone-6s-silver"
			Framer.Device.deviceType = "fullscreen"

		# iPhone 6s+
		when 1242 
			if innerHeight == 2208
				device = "apple-iphone-6s-plus-silver"
				Framer.Device.deviceType = "fullscreen"

		# iPad in portrait
		when 1536 
			if innerHeight == 2048
				device = "apple-ipad-air-2-silver"
				Framer.Device.deviceType = "fullscreen"

		# iPad
		when 2048

			# iPad Pro in portrait
			if innerHeight == 2732
				device = "apple-ipad-pro-silver"

			# iPad in landsccape
			if innerHeight == 1536
				device = "apple-ipad-air-2-silver"
			Framer.Device.deviceType = "fullscreen"

		# iPad Pro
		when 2732
			if innerHeight == 2048
				device = "apple-ipad-pro-silver"
				Framer.Device.deviceType = "fullscreen"

	exports.scale = framerDevices[device].scale

	if device == "fullscreen"
		exports.width = window.innerWidth
		exports.height = window.innerHeight
	else
		exports.width = framerDevices[device].width
		exports.height = framerDevices[device].height
		if window.innerWidth == 1242 || window.innerWidth == 2208
			exports.width = window.innerWidth
			exports.height = window.innerHeight
			exports.scale = 3
	exports.mobile = framerDevices[device].mobile
	exports.platform = framerDevices[device].platform
	exports.orientation =  Framer.Device.orientation

	# Device String Scrubber
	device = device.replace("apple-", "")
	device = device.replace("-gold", "")
	device = device.replace("-green", "")
	device = device.replace("-blue", "")
	device = device.replace("-red", "")
	device = device.replace("-white", "")
	device = device.replace("-yellow", "")
	device = device.replace("-pink", "")
	device = device.replace("-space-grey", "")
	device = device.replace("-rose", "")
	device = device.replace("5s", "5")
	device = device.replace("5c", "5")
	device = device.replace("-mini", "")
	device = device.replace("-air", "")
	device = device.replace("-2", "")
	device = device.replace("-4", "")
	exports.device = device.replace("-silver", "")
	
	# exports.device becomes either ipad, ipad-pro, iphone-5, iphone-6s, iphone-6s-plus

	screen = {
		width:exports.width
		height:exports.height
	}

exports.orient = () ->
	if exports.orientation == -90
		tempHeight = exports.height
		tempWidth = exports.width
		exports.height = tempWidth
		exports.width = tempHeight

exports.getDevice()
exports.orient()

window.addEventListener("resize", onResize)
window.addEventListener("orientationchange" , onResize)

# Listen to window reize

onResize = () ->
	exports.getDevice()
	exports.layout()

# Supporting Functions

## Converts px to pt
exports.pt = (px) ->
	pt = px/exports.scale
	pt = Math.round(pt)
	return pt

## Converts pt to px
exports.px = (pt) ->
	px = pt * exports.scale
	px = Math.round(px)
	return px

# Cleans a string of <br> and &nbsp;
exports.clean = (string) ->
	## remove white space
	string = string.replace(/[&]nbsp[;]/gi, " ").replace(/[<]br[>]/gi, "")
	return string

# Converts px's of an SVG to scalable variables
exports.svg = (svg) ->
	# Find String
	startIndex = svg.search("<svg width=") 
	endIndex = svg.search(" viewBox")
	string = svg.slice(startIndex, endIndex)

	#Find width
	wStartIndex = string.search("=") + 2
	wEndIndex =  string.search("px")
	width = string.slice(wStartIndex, wEndIndex)
	newWidth = exports.px(width)

	# Find Height
	heightString = string.slice(wEndIndex + 4, string.length)
	hStartIndex = heightString.search("=")+ 2
	hEndIndex = heightString.search("px") 
	height = heightString.slice(hStartIndex, hEndIndex)
	newHeight = exports.px(height)

	#Create new string
	newString = string.replace(width, newWidth)
	newString = newString.replace(height, newHeight)

	#Replace strings
	svg = svg.replace(string, newString)

	return {
		svg:svg
		width:newWidth
		height:newHeight
	}

# Changes the fill of an SVG
exports.changeFill = (layer, color) ->
	startIndex = layer.html.search("fill=\"#")
	fillString = layer.html.slice(startIndex, layer.html.length)
	endIndex = fillString.search("\">")
	string = fillString.slice(0, endIndex)
	newString = "fill=\"" + exports.color(color).toHexString()
	layer.html = layer.html.replace(string, newString)

exports.capitalize = (string) ->
	return string.charAt(0).toUpperCase() + string.slice(1)

# Returns the current time
exports.getTime = ->
	daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
	monthsOfTheYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
	dateObj = new Date()
	month = monthsOfTheYear[dateObj.getMonth()]
	date = dateObj.getDate()
	day = daysOfTheWeek[dateObj.getDay()]
	hours = dateObj.getHours()
	mins = dateObj.getMinutes()
	secs = dateObj.getSeconds()
	return {
		month:month
		date:date
		day:day
		hours:hours
		mins:mins
		secs:secs
	}

## iOS Color – This will store all of the default iOS colors intead of the default CSS colors. *This is only up here because I refer to it in the defaults.*
exports.color = (colorString) ->
	color = ""
	if typeof colorString == "string"
		colorString = colorString.toLowerCase()
	switch colorString
		when "red"
			color = new Color("#FE3824")
		when "blue"
			color = new Color("#0076FF")
		when "pink"
			color = new Color("#FE2851")
		when "grey"
			color = new Color("#929292")
		when "gray"
			color = new Color("#929292")
		when "black"
			color = new Color("#030303")
		when "white"
			color = new Color("#EFEFF4")
		when "orange"
			color = new Color("#FF9600")
		when "green"
			color = new Color("#44DB5E")
		when "light blue"
			color = new Color("#54C7FC")
		when "light-blue"
			color = new Color("#54C7FC")
		when "yellow"
			color = new Color("#FFCD00")
		when "light key"
			color = new Color("#9DA7B3")
		when "light-key" 
			color = new Color("#9DA7B3")
		else 
			if colorString[0] == "#" || colorString.toHexString()[0] == "#"
				color = new Color(colorString)
			else
				color = new Color("#929292")
	return color

## Defaults for everything
defaults = {
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
	alert: {
		title: "Title"
		message:"Message"
		actions:["OK"]
		action:"Action"
		secondaryAction: "secondaryAction"
	}
	banner: {
		title: "Title"
		message:"Message"
		action:"Action"
		time:"now"
		icon:undefined
		duration:7
		animated:false
	}
	button:{
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
	framerProps :["name", "width", "height", "superLayer", "opacity", "color", "backgroundColor", "x", "y", "midX", "midY", "maxX", "minX", "visible", "clip", "scrollHorizontal", "scrollVertical", "ignoreEvents", "z", "scaleX", "scaleY", "scaleZ", "scale", "skewX", "skewY", "skew", "originX", "originY", "originZ", "perspective", "perspectiveOriginX", "perspectiveOriginY", "rotationX", "rotationY", "rotationZ", "rotation", "blur", "brightness", "saturate", "hueRotate", "contrast", "invert", "grayscale", "sepia", "shadowX", "shadowY", "shadowBlur", "shadowSpread", "shadowColor", "borderColor", "borderWidth", "force2d", "flat", "backfaceVisible", "name", "matrix", "_matrix2d", "transformMatrix", "matrix3d", "borderRadius", "point", "size", "frame", "html", "image", "scrollX", "scrollY", "_domEventManager", "mouseWheelSpeedMultiplier", "velocityThreshold", "animationOptions", "constrained"]
	cssProps : ["fontFamily", "fontSize", "textAlign", "fontWeight", "lineHeight"]
	styleProps: ["fontFamily", "fontSize", "textAlign", "fontWeight", "lineHeight"]
	constraintProps : ["height", "width"]
	constraintTypes: ["top", "leading", "trailing", "bottom"]
	constraintAligns : ["horizontalCenter", "verticalCenter", "leadingEdges", "trailingEdges", "topEdges", "bottomEdges", "align", "vertical", "horizontal"]
	constraints: {
		top: {
			"prop" : "y"
			"objProp" : "maxY"
			"objProp2" : "height"
			"opp" : "bottom"
		}
		leading: {
			"prop" : "x"
			"objProp" : "maxX"
			"objProp2" : "width"
			"opp" : "trailing"
		}
		bottom: {
			"prop" : "maxY"
			"objProp" : "height"
			"objProp2" : "y"
			"opp" : "top"
		}
		trailing: {
			"prop" : "maxX"
			"objProp" : "width"
			"objProp2" : "x"
			"opp" : "leading"
		}
	}
	cursor:{
		color:"blue"
		height:20
		width:1
	}
	field: {
		isEditing:false
		cursor:{}
		borderRadius:5
		borderWidth:0
		borderColor:"transparent"
		color:"#090908"
		backgroundColor:"#FFF"
		returnText:"return"
		returnColor:"light-key"
		style:"light"
		type:"field"
		constraints:undefined
		superLayer:undefined
		width:258
		height:30
		fontSize:15
		fontWeight:"regular"
		placeholderText:"placeholderText"
		placeholderColor:"#808080"
		text:""
		textConstraints:{align:"vertical", leading:8}
		input:true

	}
	lockScreen: {
		time:"default"
		date:"default"
		passcode:false
		clock24:false
		type:"lockScreen"
	}
	keyboard: {
		returnText:"return"
		returnColor:"light-key"
		animated:false
		output:undefined
	}
	sheet: {
		actions:["OK"]
		exit:"Cancel"
		animated:false
		description:undefined
	}
	navBar: {
		title:"Title"
		left:undefined
		right:"Edit"
		blur:true
		superLayer:undefined
		type:"navBar"
	}
	statusBar: {
		carrier:""
		network:"LTE"
		battery:100
		signal:5
		style:"dark"
		clock24:false
		type:"statusBar"
	}
	tabBar : {
		tabs: []
		start:0
		type:"tabBar"
		backgroundColor:"white"
		activeColor:"blue"
		inactiveColor:"gray"
		blur:true
	}
	tab : {
		label: "label"
		icon:"<?xml version='1.0' encoding='UTF-8' standalone='no'?>
			<svg width='25px' height='25px' viewBox='0 0 25 25' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>
				<!-- Generator: Sketch 3.6.1 (26313) - http://www.bohemiancoding.com/sketch -->
				<title>1</title>
				<desc>Created with Sketch.</desc>
				<defs></defs>
				<g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='1'>
					<g id='Bottom-Bar/Tab-Bar' transform='translate(-25.000000, -7.000000)' fill='#0076FF'>
						<g id='Placeholders' transform='translate(25.000000, 7.000000)'>
							<rect id='1' x='0' y='0' width='25' height='25' rx='3'></rect>
						</g>
					</g>
				</g>
			</svg>"
		active: undefined
		unactive: undefined
		tabBar: undefined
		type: "tab"
	}
	table : {
		constraints: undefined
		type:"table"
		content:[
			{
				"label": "A" 
				"detail" : "letter"
			},
			{
				"label" : "B"
				"detail" : "letter"

				}
			]
		cell:"default"
		superLayer:undefined
	}
	tableCell : {
		type:"tableCell"
		properties: "default"
		height:50
		swipe:false
		swipeAction:"Delete"
		swipeColor:"#FE3824"
		swipeTextColor:"#FFF"
	}

	text: {
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
		name:"text layer"
		constraints:{}
	}
}


# Component Configuration Functions
setProps = (object) ->
	keys = Object.keys(object)
	object["props"] = keys

components = [defaults.text, defaults.alert, defaults.banner, defaults.sheet, defaults.field, defaults.table, defaults.tableCell, defaults.keyboard, defaults.button, defaults.navBar, defaults.tabBar, defaults.tab, defaults.statusBar, defaults.lockScreen]

for comp in components
	setProps(comp)

setupComponent = (component, array) ->
	if array == undefined
		array = []
	obj = {}
	for i in defaults[component].props
		if array[i] != undefined
			obj[i] = array[i]
		else
			obj[i] = defaults[component][i]
	return obj

# Errors
error = (context, code) ->
	## Error code from sameParent
	if code == 10
		print "Error Invalid Relationship – Layer id:#{context.id} has a relationship with another layer not in the same superLayer."

	## Error codes from layoutAlign 
	if code == 20
		print "Error #{context} requires a layer"
	if code == 21
		print "Error #{context} cannot refer to itself"

	## Error codes for apply
	if code == 40
		print "Error #{context} is not a valid weight. Please use 100, 200, 300... or Thin, Light, Regular..."

	## Error codes for not a valid tab
	if code == 50
		print "Error Layer id:#{context} is not a valid Tab object. Please create a Tab using new module.Tab."

# Special Characters
specialChar = (layer) ->
	text = layer
	if layer.type == "button"
		text = layer.label
	if text.html.indexOf("-b") != -1
		newText = text.html.replace("-b ", "")
		exports.update(text, [{text:newText}, {fontWeight:600}])
	if text.html.indexOf("-r") != -1
		newText = text.html.replace("-r ", "")
		exports.update(text, [{text:newText}, {color:"red"}])
	if text.html.indexOf("-rb") != -1
		newText = text.html.replace("-rb ", "")
		exports.update(text, [{text:newText}, {color:"blue"}])
	if text.html.indexOf("-lb") != -1
		newText = text.html.replace("-lb ", "")
		exports.update(text, [{text:newText}, {color:"light-blue"}])
	if text.html.indexOf("-g") != -1
		newText = text.html.replace("-g ", "")
		exports.update(text, [{text:newText}, {color:"green"}])
	if text.html.indexOf("-o") != -1
		newText = text.html.replace("-o ", "")
		exports.update(text, [{text:newText}, {color:"orange"}])
	if text.html.indexOf("-p") != -1
		newText = text.html.replace("-p ", "")
		exports.update(text, [{text:newText}, {color:"orange"}])
	if text.html.indexOf("-y") != -1
		newText = text.html.replace("-y ", "")
		exports.update(text, [{text:newText}, {color:"yellow"}])
	if text.html.indexOf("-#") != -1
		chosenColor = text.html.slice(1, 8)
		newText = text.html.slice(9, text.html.length)
		exports.update(text, [{text:newText}, {color:chosenColor}])	
	if text.html.indexOf("-") != -1
		newText = text.html.replace("- ", "")
		exports.update(text, [{text:newText}])
	if layer.buttonType == "text"
		layer.width = text.width
	exports.layout()

# Decides if it should be white/black text
exports.setTextColor = (colorObject) ->
	rgb = colorObject.toRgbString()
	rgb = rgb.substring(4, rgb.length-1)
	rgb = rgb.replace(/ /g, '')
	rgb = rgb.replace(/ /g, '')
	rgb = rgb.split(',')
	red = rgb[0]
	green = rgb[1]
	blue = rgb[2]
	color = ""
	if (red*0.299 + green*0.587 + blue*0.114) > 186 
		color = "#000"
	else
		color = "FFF"
	return color

exports.sameParent = (layer1, layer2) ->
	parentOne = layer1.superLayer
	parentTwo = layer2.superLayer
	if parentOne == parentTwo
		return true
	else 
		return false


# updateConstraints = (layer) ->
# 	if layer.constraints.leading
# 		#If it's a number
# 		if layer.constraints.leading == parseInt(layer.constraints.leading, 10)	
# 			layer.constraints.leading = exports.pt(layer.x)
# 		else
# 			#If it's a layer
# 			if layer.constraints.leading.length == undefined
# 				layer.constraints.leading = exports.pt(layer.x)
# 			else
# 				#If it's a relationship
# 				layer.constraints.leading = [layer.constraints.leading[0], exports.pt(layer.x - layer.constraints.leading[0].maxX)]

# 	if layer.constraints.trailing
# 		#If it's a number
# 		if layer.constraints.trailing == parseInt(layer.constraints.trailing, 10)	
# 			layer.constraints.trailing = exports.pt(layer.maxX)
# 		else
# 			#If it's a layer
# 			if layer.constraints.trailing.length == undefined
# 				layer.constraints.trailing = exports.pt(layer.maxX)
# 			else
# 				#If it's a relationship
# 				layer.constraints.trailing = [layer.constraints.trailing[0], exports.pt(layer.constraints.trailing[0].x - layer.maxX)]

# 	if layer.constraints.top
# 		#If it's a number
# 		if layer.constraints.top == parseInt(layer.constraints.top, 10)	
# 			layer.constraints.top = exports.pt(layer.y)
# 		else
# 			#If it's a layer
# 			if layer.constraints.top.length == undefined
# 				layer.constraints.top = exports.pt(layer.y)
# 			else
# 				#If it's a relationship
# 				layer.constraints.top = [layer.constraints.top[0], exports.pt(layer.y - layer.constraints.top[0].maxY)]

# 	if layer.constraints.bottom
# 		#If it's a number
# 		if layer.constraints.bottom == parseInt(layer.constraints.bottom, 10)	
# 			layer.constraints.bottom = exports.pt(layer.maxY)
# 		else
# 			#If it's a layer
# 			if layer.constraints.bottom.length == undefined
# 				layer.constraints.bottom = exports.pt(layer.maxY)
# 			else
# 				#If it's a relationship
# 				layer.constraints.bottom = [layer.constraints.bottom[0], exports.pt(layer.constraints.bottom[0].y - layer.maxY)]

# 	if layer.constraints.align == "center"
# 		layer.constraints.align = undefined
# 		layer.constraints.leading = exports.pt(layer.x)
# 		layer.constraints.top = exports.pt(layer.y)

# 	if layer.constraints.align == "horizontal"
# 		layer.constraints.align = undefined
# 		layer.constraints.leading = exports.pt(layer.x)

# 	if layer.constraints.align == "vertical"
# 		layer.constraints.align = undefined
# 		layer.constraints.top = exports.pt(layer.y)

# 	if layer.constraints.width
# 		layer.constraints.width = exports.pt(layer.width)
# 	if layer.constraints.height
# 		layer.constraints.width = exports.pt(layer.height)
 
exports.animateLayout = (array) ->
	setup = {}
	animatedLayers = []
	if array
		for i in Object.keys(defaults.animations)
			if array[i]
				setup[i] = array[i]
			else
				setup[i] = defaults.animations[i]

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
				layer.superFrame.height = exports.height
				layer.superFrame.width = exports.width
			
			if layer.constraints.leading != undefined && layer.constraints.trailing != undefined
				layer.constraints.autoWidth = {}	

			if layer.constraints.top != undefined && layer.constraints.bottom != undefined
				layer.constraints.autoHeight = {}

			# Size constraints
			if layer.constraints.width != undefined
				props.width = exports.px(layer.constraints.width)
			else 
				props.width = layer.width

			if layer.constraints.height != undefined
				props.height = exports.px(layer.constraints.height)
			else
				props.height = layer.height

			# Positioning constraints
			if layer.constraints.leading != undefined
				#If it's a number`
				if layer.constraints.leading == parseInt(layer.constraints.leading, 10)	
					props.x = exports.px(layer.constraints.leading)
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
						props.x = layer.constraints.leading[0].end.x + layer.constraints.leading[0].end.width + exports.px(layer.constraints.leading[1])

			# Opposing constraints handler
			if layer.constraints.autoWidth != undefined
				layer.constraints.autoWidth.startX = props.x

			if layer.constraints.trailing != undefined
				#If it's a number
				if layer.constraints.trailing == parseInt(layer.constraints.trailing, 10)	
					props.x = layer.superFrame.width - exports.px(layer.constraints.trailing) - props.width
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
						props.x = layer.constraints.trailing[0].end.x - exports.px(layer.constraints.trailing[1]) - props.width

			# Opposing constraints handler
			if layer.constraints.autoWidth != undefined
				layer.constraints.autoWidth.endX = props.x

				##perform autosize
				props.x = layer.constraints.autoWidth.startX
				props.width = layer.constraints.autoWidth.endX - layer.constraints.autoWidth.startX + props.width

			if layer.constraints.top != undefined
				#If it's a number
				if layer.constraints.top == parseInt(layer.constraints.top, 10)	
					props.y = exports.px(layer.constraints.top)
				else
					#If it's a layer
					if layer.constraints.top.length == undefined
						props.y = layer.constraints.top.end.y + layer.constraints.top.end.height
					#If it's a relationship
					else
						props.y = layer.constraints.top[0].end.y + layer.constraints.top[0].end.height + exports.px(layer.constraints.top[1])

			# Opposing constraints handler
			if layer.constraints.autoHeight != undefined
				layer.constraints.autoHeight.startY = props.y


			if layer.constraints.bottom != undefined
				#If it's a number
				if layer.constraints.bottom == parseInt(layer.constraints.bottom, 10)	
					props.y = layer.superFrame.height - exports.px(layer.constraints.bottom) - props.height

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
						props.y = layer.constraints.bottom[0].end.y -  exports.px(layer.constraints.bottom[1])

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

#Refreshes Layer or All Layers
exports.layout = (layer) ->
	if layer == undefined
		@.array = Framer.CurrentContext.layers
	else 
		@.array = [layer]
	for layer in @.array
		if layer.constraints
			for p in defaults.constraintProps
				layoutSize(layer, p)
			for c in defaults.constraintTypes
				if layer.constraints[c] != undefined
					layoutChange(layer, c)
			for a in defaults.constraintAligns
				if layer.constraints[a]
					layoutAlign(layer, a)

			#Updates the constraints if the layer is manipulated through other means
			if layer.constraintListener == undefined
				layer.constraintListener = true

#Align constraints
layoutAlign = (layer, type) ->
	declaredConstraint = layer.constraints[type]
	if layer.superLayer
		@superLayer = layer.superLayer
	else
		@superLayer = screen
	if declaredConstraint == parseInt(declaredConstraint, 10)
		error(type, 20)
	if declaredConstraint == layer
		error(type, 21)
	if typeof declaredConstraint == "object"
		for i in declaredConstraint
			if typeof i == "string"
				@type = i
			if typeof i == "object"
				@layer = i 
		if @type == "horizontalCenter" || @type == "horizontal"
			deltaMove = (@layer.width - layer.width) / 2
			layer.x = @layer.x + deltaMove
			layer.constraints["leading"] = exports.pt(layer.x)
		if @type == "verticalCenter" || @type == "vertical"  
			deltaMove = (@layer.height - layer.height) / 2
			layer.y = @layer.y + deltaMove
			layer.constraints["top"] = exports.pt(layer.y)
		if @type == "leadingEdges" || @type == "leading"
			layer.x = @layer.x
			layer.constraints["leading"] = exports.pt(layer.x)
		if @type == "trailingEdges" || @type == "trailing"
			layer.maxX = @layer.maxX
			layer.constraints["trailing"] = exports.pt(@superLayer.width - layer.maxX)
		if @type == "topEdges" || @type == "top"
			layer.y = @layer.y
			layer.constraints["top"] = exports.pt(layer.y)
		if @type == "bottomEdges" || @type == "bottom"
			layer.maxY = @layer.maxY
			layer.constraints["bottom"] = exports.pt(@superLayer.height - layer.maxY)
	if type == "horizontalCenter" || type == "horizontal"
		deltaMove = (declaredConstraint.width - layer.width) / 2
		layer.x = declaredConstraint.x + deltaMove
	if type == "verticalCenter" || type == "vertical"  
		deltaMove = (declaredConstraint.height - layer.height) / 2
		layer.y = declaredConstraint.y + deltaMove
	if type == "leadingEdges" 
		layer.x = declaredConstraint.x
		layer.constraints["leading"] = exports.pt(declaredConstraint.x)
	if type == "trailingEdges"
		layer.maxX = declaredConstraint.maxX
		layer.constraints["trailing"] = exports.pt(@superLayer.height - layer.maxX)
	if type == "topEdges"
		layer.y = declaredConstraint.y
		layer.constraints["top"] = exports.pt(layer.y)
	if type == "bottomEdges"
		layer.maxY = declaredConstraint.maxY
		layer.constraints["bottom"] = exports.pt(@superLayer.height - layer.maxY)
	if type == "align"
		if declaredConstraint == "horizontal"
			layer.centerX()
		if declaredConstraint == "vertical"
			layer.centerY()
		if declaredConstraint == "center"
			layer.center()
		if declaredConstraint == "vertical"
			layer.centerY()



#Size Constraints
layoutSize = (layer, type) ->
	if layer.constraints[type]
		layer[type] = exports.px(layer.constraints[type])
		if layer.type == "text"
			textFrame = textAutoSize(layer)
			layer.width = textFrame.width
			layer.height = textFrame.height

#Move & Resizes Layers
layoutChange = (layer, type) ->
	if layer.constraints[type] != undefined 
		prop = defaults.constraints[type].prop
		objProp = defaults.constraints[type].objProp
		opp = defaults.constraints[type].opp
		superTrait = defaults.constraints[type].objProp

		if objProp != "width" && objProp != "height"
			superTrait = defaults.constraints[type].objProp2

		if layer.superLayer != null
			#Has a superLayer
			@[superTrait] = layer.superLayer[superTrait]
		else
			#Does not have a superLayer
			@[superTrait] = exports[superTrait]
		if type == "top" || type == "leading"
			# Handle Top & Leading
			if layer.constraints[type] == parseInt(layer.constraints[type], 10)
				layer[prop] = layer.constraints[type] * exports.scale
			else 
				if layer.constraints[type].length == undefined
					layer[prop] = layer.constraints[type][objProp]
				if layer.constraints[type].length == 1
					if layer.constraints[type][0] == parseInt(layer.constraints[type][0], 10)
						layer[prop] = layer.constraints[type][0] * exports.scale
					else
						layer[prop] = layer.constraints[type][0][objProp]
				if layer.constraints[type].length > 1 
					for object in layer.constraints[type]
						if object == parseInt(object, 10)
							@.objInt = object
						else 
							@.objLayer = object
					layer[prop] = (@.objInt * exports.scale) + @.objLayer[objProp]
			if layer.constraints[opp] != undefined
				trait = defaults.constraints[opp]["objProp"]
				if layer.constraints[opp] == parseInt(layer.constraints[opp], 10)
					layer[trait] = @[superTrait] - (layer[prop] + (exports.scale * layer.constraints[opp]))
				else
					if layer.constraints[opp].length == undefined
						layer[trait] = layer[prop] - layer.constraints[opp][prop]
						if layer[trait] < 0
							layer[trait] = layer[trait] * -1
					else
						startX = layer.x
						endX = 0
						for object in layer.constraints[opp]
							# If it's a number
							if object == parseInt(object, 10)
								endX = endX - object
							else
								endTrait = defaults.constraints[opp].objProp2
								endX = endX + object[endTrait]
						layer.width = endX - startX
						
		else
			## Handle Bottom & Trailing
			objProp2 = defaults.constraints[type].objProp2
			if layer.constraints[opp] == undefined
				## No opposite
				if layer.constraints[type] == parseInt(layer.constraints[type], 10)
					## Only Integer
					layer[prop] = @[superTrait] - (layer.constraints[type] * exports.scale)
				else 
					if layer.constraints[type].length == undefined
						#Entered Layer
						if exports.sameParent(layer, layer.constraints[type])
							layer[prop] = layer.constraints[type][objProp2]
						else
							error(layer, 10)
					if layer.constraints[type].length == 1
						#Array of One
						if layer.constraints[type][0] == parseInt(layer.constraints[type][0], 10)
							#Int
							layer[prop] = @[objProp] - (layer.constraints[type][0] * exports.scale)
						else 
							#Object
							if exports.sameParent(layer, layer.constraints[type][0])
								layer[prop] = layer.constraints[type][0][objProp2]
							else
								error(layer, 10)
					if layer.constraints[type].length > 1	
						#Relationship Array
						for object in layer.constraints[type]
							if object == parseInt(object, 10)
								@.objInt = object
							else
								@.objLayer = object
							layer[prop] = @.objLayer[objProp2] - exports.scale * @.objInt
#Text Layers
exports.styles = {}

exports.bgBlur = (layer) ->
	layer.style["-webkit-backdrop-filter"] = "blur(#{exports.px(5)}px)"
	return layer 

textAutoSize = (textLayer) ->
	#Define Width
	constraints = {}
	if textLayer.constraints 
		if textLayer.constraints.height
			constraints.height = exports.px(textLayer.constraints.height)
		if textLayer.constraints.width
			constraints.width = exports.px(textLayer.constraints.width)
	styles =
		fontSize: textLayer.style["font-size"]
		fontFamily: textLayer.style["font-family"]
		fontWeight: textLayer.style["font-weight"]
		lineHeight: textLayer.style["line-height"]
		letterSpacing: textLayer.style["letter-spacing"]
		textTransform: textLayer.style["text-transform"]
	textWidth = Utils.textSize textLayer.html, styles, constraints
	return {
		width : textWidth.width
		height: textWidth.height
	}

listenToKeys = (field, keyboard) ->

	keypress = (key) ->
		originalColor = key.backgroundColor
		switch key.name
			when "shift"
				key.icon.states.switchInstant("on")
				key.backgroundColor = "white"
			when "delete"
				key.icon.states.switchInstant("on")
				key.backgroundColor = "white"
				key.icon.states.switchInstant("on")
			when "space"
				key.backgroundColor = exports.color("light-key")
			else
				if exports.device != "ipad"
					keyboard.keyPopUp.visible = true	
					boxKey = key.name
					if isShift
						boxKey = boxKey.toUpperCase()
					keyboard.keyPopUp.box.html = boxKey
					keyboard.keyPopUp.maxY = key.maxY
					keyboard.keyPopUp.midX = key.midX
				else
					key.animate
						properties:(backgroundColor:exports.color("light-key"))
						time:.2

	isCommand = false
	allSelected = false
	isShift = false
	codes = {
		13:"<br>"
		32:"&nbsp;"
		33:"!"
		34:"\""
		35:"#"
		36:"$"
		37:"%"
		38:"&"
		39:"\'"
		40:"("
		41:")"
		42:"*"
		43:"+"
		44:","
		45:"-"
		47:"/"
		46:"."
		48:"0"
		49:"1"
		50:"2"
		51:"3"
		52:"4"
		53:"5"
		54:"6"
		55:"7"
		56:"8"
		57:"9"
		58:":"
		59:";"
		60:"<"
		61:"="
		62:">"
		63:"?"
		64:"@"
		65:"A"
		66:"B"
		67:"C"
		68:"D"
		69:"E"
		70:"F"
		71:"G"
		72:"H"
		73:"I"
		74:"J"
		75:"K"
		76:"L"
		77:"M"
		78:"N"
		79:"O"
		80:"P"
		81:"Q"
		82:"R"
		83:"S"
		84:"T"
		85:"U"
		86:"V"
		87:"W"
		88:"X"
		89:"Y"
		90:"Z"
		91:"["
		92:"\\"
		93:"]"
		94:"^"
		95:"_"
		96:"`"
		97:"a"
		98:"b"
		99:"c"
		100:"d"
		101:"e"
		102:"f"
		103:"g"
		104:"h"
		105:"i"
		106:"j"
		107:"k"
		108:"l"
		109:"m"
		110:"n"
		111:"o"
		112:"p"
		113:"q"
		114:"r"
		115:"s"
		116:"t"
		117:"u"
		118:"v"
		119:"w"
		120:"x"
		121:"y"
		122:"z"
		123:"{"
		124:"|"
		125:"}"
		126:"~"
	}

	document.addEventListener 'keydown', (e) ->
		if field.active
			if e.keyCode == 27
				e.preventDefault()
				keyboard.animate
					properties:(y:exports.height)
					time:.25
					curve:"ease-in-out"
				field.active = false
				field.clickZone.destroy()
			if e.keyCode == 16
				isShift = true
				if keyboard
					keypress(keyboard.keys.shift)
					for k in keyboard.keysArray
						k.style["text-transform"] = "uppercase"
			if allSelected == true
				if e.keyCode == 37 || e.keyCode == 39
					allSelected = false
					field.text.backgroundColor = "transparent"
			if e.keyCode == 91
				isCommand = true
			if e.keyCode == 13
				e.preventDefault()
				keyboard.keys.return.backgroundColor = "white"

			if e.keyCode == 8
				e.preventDefault()
				if keyboard
					keypress(keyboard.keys.delete)
				if allSelected == true
					exports.update(field.text, [text:""])
					field.text.backgroundColor ="transparent"
					allSelected = false
				initialLength = field.text.html.length
				newText = field.text.html.slice(0, -1)
				exports.update(field.text, [text:newText])
				endLength = field.text.html.length
				if initialLength == endLength
					newText = field.text.html.slice(0, -6)
					exports.update(field.text, [text:newText])
				if field.text.html == ""
					field.placeholder.visible = true

				# Get rid of & nbsp;

				field.value = exports.clean(newText)

	document.addEventListener 'keyup', (e) ->
		if field.active
			if e.keyCode == 13 && keyboard
				keyboard.keys.return.backgroundColor = exports.color("light-key")
			if e.keyCode == 32 && keyboard
				keyboard.keys.space.backgroundColor = "White"
			if e.keyCode == 8 && keyboard
				keyboard.keys.delete.animate
					properties:(backgroundColor:exports.color("light-key"))
					time:.1
				keyboard.keys.delete.icon.states.switch("off")
			if e.keyCode == 91
				isCommand = false
			if e.keyCode == 16
				isShift = false
				if keyboard
					for k in keyboard.keysArray
						k.style["text-transform"] = "lowercase"
					keyboard.keys.shift.animate
						properties:(backgroundColor:exports.color("light-key"))
						time:.2
					keyboard.keys.shift.icon.states.next()
			if e.keyCode >= 65 && e.keyCode <= 90
				if keyboard && exports.device != "ipad"
					keyboard.keyPopUp.visible = false
				else
					k = keyboard.keys[codes[e.keyCode].toLowerCase()]
					k.animate
						properties:(backgroundColor:"white")
						time:.2


	document.addEventListener 'keypress', (e) ->
		if field.active 
			char = codes[e.keyCode]
			if keyboard
				key = keyboard.keys[char]
			if isCommand == true
				if e.keyCode == 97
					field.text.backgroundColor = "rgba(0, 118, 255, .2)"
					allSelected = true

			if isCommand == false
				e.preventDefault()
				if e.keyCode >= 65 && e.keyCode <= 90
					char2 = char.toLowerCase()
					if keyboard
						key = keyboard.keys[char2]
						keypress(key)

				if e.keyCode >= 97 && e.keyCode <= 122 || e.keyCode == 32		
					if keyboard
						keypress(key)

				if e.keyCode > 31
					newText = field.text.html + char
					exports.update(field.text, [text:newText])
					field.value = exports.clean(newText)

exports.update = (layer, array) ->
	if array == undefined
		array = []
	if layer.type == "text"
		for change in array
			key = Object.keys(change)[0]
			value = change[key]
			if key == "text"
				layer.html = value
			if key == "fontWeight"
				layer.style[key] = value
			if key == "color"
				layer.color = exports.color(value)

		textFrame = textAutoSize(layer)
		layer.width = textFrame.width
		layer.height = textFrame.height


	exports.layout()

exports.timeDelegate = (layer, clockType) ->
	@time = exports.getTime()
	Utils.delay 60 - @time.secs, ->
		@time = exports.getTime()
		exports.update(layer, [text:exports.timeFormatter(@time, clockType)])
		Utils.interval 60, ->
			@time = exports.getTime()
			exports.update(layer, [text:exports.timeFormatter(@time, clockType)])
 
exports.timeFormatter = (timeObj, clockType) ->
	if clockType == false 
		if timeObj.hours > 12
			timeObj.hours = timeObj.hours - 12
		if timeObj.hours == 0 then timeObj.hours = 12
	if timeObj.mins < 10
		timeObj.mins = "0" + timeObj.mins
	return timeObj.hours + ":" + timeObj.mins

## Components 
exports.Alert = (array) ->
	setup = setupComponent("alert", array)
	alert = new Layer backgroundColor:"transparent", name:"alert"
	alert.constraints = 
		leading:0
		trailing:0
		top:0
		bottom:0
	overlay = new Layer backgroundColor:"rgba(0,0,0,.3)", superLayer:alert, name:"overlay"
	overlay.constraints =
		leading:0
		trailing:0
		top:0
		bottom:0
	modal = new Layer backgroundColor:"white", superLayer:alert, borderRadius:exports.px(10), name:"modal", x:92, y:537
	modal.constraints =
		align:"center"
		width:280
		height:400
	title = new exports.Text style:"alertTitle", superLayer:modal, text:setup.title, fontWeight:"semibold",  name:"title", textAlign:"center", lineHeight:20
	title.constraints = 
		align:"horizontal"
		width:220
		top:20
	message = new exports.Text style:"alertMessage", text:setup.message, fontSize:13, superLayer:modal, textAlign:"center", lineHeight:16, width:240, name:"message"
	message.constraints =
		top: [title, 10]
		align:"horizontal"
		width: 220
	divider = new Layer superLayer:modal, backgroundColor:"#E2E8EB", name:"horizontal divider"
	divider.constraints = 
		leading:0
		trailing:0
		height:1
		bottom:44
	exports.layout()
	
	#Title + Message + 1 set of actions
	modal.constraints["height"] = 20 + exports.pt(title.height) + 10 + exports.pt(message.height) + 24 + 44

	actions = []
	switch setup.actions.length
		when 1
			actLabel = exports.capitalize(setup.actions[0])
			action = new Layer superLayer:modal, backgroundColor:"transparent", name:setup.actions[0], borderRadius:exports.px(10)
			action.constraints = 
				leading:0
				trailing:0
				bottom:0
				height:44
			action.label = new exports.Text style:"alertAction", color:exports.color("blue"), superLayer:action, text:actLabel, name:"label"
			action.label.constraints = 
				align:"horizontal"
				bottom:16
			actions.push action
		when 2
			actLabel = exports.capitalize(setup.actions[0])
			action = new Layer superLayer:modal, name:setup.actions[0], borderRadius:exports.px(10), backgroundColor:"white"
			action.constraints = 
				leading:0
				trailing:exports.pt(modal.width/2)
				bottom:0
				height:44
			action.label = new exports.Text style:"alertAction", color:exports.color("blue"), superLayer:action, text:actLabel, name:"label"
			action.label.constraints = 
				align:"horizontal"
				bottom:16
			actions.push action		

			vertDivider = new Layer superLayer:modal, backgroundColor:"#E2E8EB", name:"vertical divider"
			vertDivider.constraints = 
				width:1
				bottom:0
				height:44
				align:"horizontal"

			actLabel2 = exports.capitalize(setup.actions[1])
			action2 = new Layer superLayer:modal, name:setup.actions[1], borderRadius:exports.px(10), backgroundColor:"white"
			action2.constraints = 
				leading:exports.pt(modal.width/2)
				trailing:0
				bottom:0
				height:44
			action2.label = new exports.Text style:"alertAction", color:exports.color("blue"), superLayer:action2, text:actLabel2, name:"label"
			action2.label.constraints = 
				align:"horizontal"
				bottom:16
			actions.push action2
		else
			for act, index in setup.actions
				actLabel = exports.capitalize(act)
				action = new Layer superLayer:modal, name:act, borderRadius:exports.px(10), backgroundColor:"white"
				action.constraints = 
					leading:0
					trailing:0
					bottom:0 + ((setup.actions.length - index - 1) * 44)
					height:44
				actionDivider = new Layer superLayer:modal, backgroundColor:"#E2E8EB", name:"horizontal divider"
				actionDivider.constraints = 
					leading:0
					trailing:0
					height:1
					bottom:0 + ((setup.actions.length - index) * 44)
				action.label = new exports.Text style:"alertAction", color:exports.color("blue"), superLayer:action, text:actLabel, name:"label"
				action.label.constraints = 
					align:"horizontal"
					bottom:14
				actions.push action		
				modal.constraints["height"] = modal.constraints["height"] + 42 - 12

	alert.actions = {}	
	for act,index in actions

		#Handle special characters
		act.type = "button"
		specialChar(act)
		
		if setup.actions[index].indexOf("-r") == 0
			act.origColor = exports.color("red")
		else
			act.origColor = exports.color("blue")

		#Add Touch Events
		act.on Events.TouchStart, ->
			@.backgroundColor = "white"
			@.animate
				properties:(backgroundColor:act.backgroundColor.darken(5))
				time:.25
			@.label.animate
				properties:(color:@.origColor.lighten(10))
				time:.25

		act.on Events.TouchEnd, ->
			@.animate
				properties:(backgroundColor:"white")
				time:.25
			@.label.animate
				properties:(color:@.origColor)
				time:.25

		# Export actions
		alert.actions[act.name] = act


	exports.layout()

	# Export alert
	alert.overlay = overlay
	alert.modal = modal
	alert.title = title
	alert.message = message

	return alert

exports.Banner = (array) ->
	setup = setupComponent("banner", array)
	banner = new Layer backgroundColor:"transparent", name:"banner"
	banner.html = exports.svg(bannerBG[exports.device]).svg
	banner.constraints =
		leading:0
		trailing:0
		top:0
		height:68

	# Different positionings for each device
	switch exports.device 
		when "ipad" 
			@leadingIcon = 200
			@topIcon = 15
			@topTitle = 11
		when "ipad-pro"
			@leadingIcon = 192
			@topIcon = 12
			@topTitle = 9
		else
			@leadingIcon = 15
			@topIcon = 8
			@topTitle = 5

	if setup.icon == undefined
		setup.icon = new Layer superLayer:banner
		setup.icon.style["background"] = "linear-gradient(-180deg, #67FF81 0%, #01B41F 100%)"
	else
		banner.addSubLayer(setup.icon)

	setup.icon.borderRadius = exports.px(4.5)
	setup.icon.name = "icon"
	setup.icon.constraints =
		height:20
		width:20
		leading:@leadingIcon
		top:@topIcon 

	title = new exports.Text style:"bannerTitle", text:setup.title, color:"white", fontWeight:"medium", fontSize:13, superLayer:banner, name:"title"
	title.constraints = 
		top:@topTitle

		leading:[setup.icon, 11]
	message = new exports.Text style:"bannerMessage", text:setup.message, color:"white", fontSize:13, superLayer:banner, name:"message"
	message.constraints =
		leadingEdges:title
		top:[title, 2]

	time = new exports.Text style:"bannerTime", text:setup.time, color:"white", fontSize:11, superLayer:banner, name:"time"
	time.constraints =
		leading:[title, 5]
		bottomEdges: title

	if exports.device == "ipad" || exports.device == "ipad-pro"
		time.constraints =
			bottomEdges: title
			trailing: @leadingIcon

	exports.layout()
	exports.bgBlur(banner)

	## Banner Drag settings
	banner.draggable = true
	banner.draggable.horizontal = false
	banner.draggable.constraints =
		y:0

	banner.draggable.bounceOptions =
	    friction: 25
	    tension: 250

	banner.on Events.DragEnd, ->
		if banner.maxY < exports.px(68)
			banner.animate
				properties:(maxY:0)
				time:.15
				curve:"ease-in-out"
			Utils.delay .25, ->
				banner.destroy()


	# Buffer that sits above the banner
	bannerBuffer = new Layer maxY:0, name:"buffer", backgroundColor:"#1B1B1C", opacity:.9, superLayer:banner, width:exports.width, maxY:banner.y, height:exports.height
	exports.bgBlur(bannerBuffer)

	# Animate-in
	if setup.animated == true
		banner.y = 0 - banner.height
		banner.animate
			properties:(y:0)
			time:.25
			curve:"ease-in-out"

	# Animate-out
	if setup.duration
		Utils.delay setup.duration, ->
			banner.animate
				properties:(maxY:0)
				time:.25
				curve:"ease-in-out"
		Utils.delay setup.duration + .25, ->
			banner.destroy()
		
	# Export Banner
	banner.icon = setup.icon
	banner.title = title
	banner.message = message
	return banner

exports.Button = (array) ->
	setup = setupComponent("button", array)
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
			@fontSize = 20
			@top = 18
			@fontWeight = "medium"
			if button.constraints == undefined
				button.constraints = {}
			if button.constraints.leading == undefined
				button.constraints.leading = 10
			if button.constraints.trailing == undefined
				button.constraints.trailing = 10
			if button.constraints.height == undefined
				button.constraints.height = 57
			button.borderRadius = exports.px(12.5)
			backgroundColor = ""
			switch setup.style
				when "light"
					color = "#007AFF"
					if setup.blur 
						backgroundColor = "rgba(255, 255, 255, .9)"
						exports.bgBlur(button)
					else
						backgroundColor = "white"

				when "dark"
					color = "#FFF"
					if setup.blur
						backgroundColor = "rgba(43, 43, 43, .9)"
						exports.bgBlur(button)
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
						exports.bgBlur(button)
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
			button.borderRadius = exports.px(2.5)
			switch setup.style
				when "light"
					color = "#007AFF"
					button.borderColor = "#007AFF"
				else
					color = setup.color
					button.borderColor = setup.color
			button.backgroundColor = "transparent"
			button.borderWidth = exports.px(1)


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
	textLayer = new exports.Text text:setup.text, color:color, superLayer:button, fontSize:@fontSize, fontWeight:@fontWeight
	textLayer.constraints =
		align:"center"
	switch setup.buttonType 
		when "small"
			button.props = (width:textLayer.width + exports.px(60), height: textLayer.height + exports.px(10))
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
	exports.layout()
	button.label = textLayer
	return button

exports.Field = (array) ->
	setup = setupComponent("field", array)
	field = new Layer borderRadius:exports.px(setup.borderRadius), backgroundColor:setup.backgroundColor, width:exports.px(setup.width), height:exports.px(setup.height)
	if setup.constraints
		field.constraints = 
			setup.constraints
	field.active = false
	text = new exports.Text style:"fieldText", superLayer:field, text:setup.text, fontSize:setup.fontSize, fontWeight:setup.fontWeight, color:setup.color
	if setup.textConstraints
		text.constraints =
			setup.textConstraints
	field.text = text

	if setup.superLayer
		setup.superLayer.addSubLayer(field)




	##Handle keypress
	text.on "change:html", ->
		if text.html == ""
			field.cursor.constraints = {align:"vertical", leading:8}
		else
			field.cursor.constraints = {align:"vertical", trailingEdges:text}
		if field.placeholder
			field.placeholder.visible = false

	if setup.text == "" || setup.text == undefined
		placeholder = new exports.Text style:"fieldPlaceholder", superLayer:field, text:setup.placeholderText, fontSize:setup.fontSize, fontWeight:setup.fontWeight, color:setup.placeholderColor
		if setup.textConstraints 
			placeholder.constraints =
				setup.textConstraints
		field.placeholder = placeholder

	field.on Events.TouchEnd, ->
		field.active = true
		text.visible = true
		clickZone = new Layer name:"fieldActive", opacity:0
		if setup.input
			keyboard = new exports.Keyboard animated:true, output:field, returnText:setup.returnText, returnColor:setup.returnColor
			field.keyboard = keyboard
			clickZone.constraints = 
				top:0
				bottom:keyboard.specs.height
				leading:0
				trailing:0
		else
			clickZone.constraints =
				top:0
				bottom:0
				leading:0
				trailing:0

		clickZone.on Events.TouchEnd, (handler) ->
			# # listen for something else
			# if handler.offsetX < field.x || handler.offsetX > field.maxX || handler.offsetY < field.y || handler.offsetY > field.maxY
			# 	field.active = false
			field.keyboard.animate
				properties:(y:exports.height)
				time:.4
				curve:"ease-in-out"
			Utils.delay .5, ->
				field.keyboard.destroy()
				field.active = false
				clickZone.destroy()
		field.clickZone = clickZone

		if exports.device == "ipad"
			field.keyboard.keys.dismiss.on Events.TouchEnd, ->
				field.keyboard.animate
					properties:(y:exports.height)
					time:.4
					curve:"ease-in-out"
				Utils.delay .5, ->
					field.keyboard.destroy()
					field.active = false
					clickZone.destroy()
 

		## Default Cursor
		keys = Object.keys(setup.cursor)
		if keys.length < 1
			setup.cursor.constraints = {align:"vertical", leading:8}
			setup.cursor.width = 2
			setup.cursor.height = 20

		if field.cursor == undefined
			listenToKeys(field, keyboard)
			cursor = new Layer width:exports.px(setup.cursor.width), height:exports.px(setup.cursor.height), superLayer:field, name:"cursor", backgroundColor:exports.color("blue"), borderRadius:exports.px(1)
			field.cursor = cursor
			cursor.constraints = 
				setup.cursor.constraints

			Utils.interval .5, ->
				if field.active == true
					if field.cursor.opacity == 0
						field.cursor.animate
							properties:(opacity:1)
							time:.3
					else
						field.cursor.animate
							properties:(opacity:0)
							time:.3
				else
					field.cursor.opacity = 0
		exports.layout()

	exports.layout()
	return field

exports.StatusBar = (array) ->
	setup = setupComponent("statusBar", array)
	statusBar = new Layer backgroundColor:"transparent", name:"statusBar.all"
	statusBar.type = setup.type
	statusBar.constraints = 
		leading:0
		trailing:0
		height:20
	switch exports.device
		when "iphone-6s-plus"
			@topConstraint = 5
			@batteryIcon = 6
			@bluetooth = 5
		when "fullscreen"
			@batteryIcon = - 12
			@bluetooth = - 10
		else
			@topConstraint = 3
			@batteryIcon = 2
			@bluetooth = 3
	if setup.style == "light"
		@color = "white"
	else
		@color = "black"
	for layer in Framer.CurrentContext.layers
		if layer.type == "lockScreen"
			@isLockScreenPresent = true
	if @isLockScreenPresent
		gripper = new Layer superLayer:statusBar, width:exports.px(37), height:exports.px(5), name:"gripper", backgroundColor:"transparent", opacity:.5, name:"gripper"
		gripper.html = "<?xml version='1.0' encoding='UTF-8' standalone='no'?>
			<svg width='#{exports.px(37)}px' height='#{exports.px(5)}px' viewBox='0 0 37 5' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>
				<!-- Generator: Sketch 3.6.1 (26313) - http://www.bohemiancoding.com/sketch -->
				<title>Gripper</title>
				<desc>Created with Sketch.</desc>
				<defs></defs>
				<g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
					<g id='Keyboard/Auto-Complete-Bar-Closed' transform='translate(-169.000000, -2.000000)' fill='#FFFFFF'>
						<rect id='Gripper' x='169.5' y='2.5' width='36' height='4' rx='2.5'></rect>
					</g>
				</g>
			</svg>"
		gripper.constraints = 
			align:"horizontal"
			top:2
	else 
		@time = exports.getTime()
		if setup.clock24 == false
			if @time.hours > 11 
				@time.stamp = "PM"
			else
				@time.stamp = "AM"
		else
			@time.stamp = ""
		time = new exports.Text style:"statusBarTime", text:exports.timeFormatter(@time, setup.clock24) + " " + @time.stamp, fontSize:12, fontWeight:"semibold", superLayer:statusBar, color:@color, name:"time"
		time.constraints =
			align:"horizontal"
			top:@topConstraint
	signal = []
	if setup.signal < 1
		noNetwork = new exports.Text superLayer:statusBar, fontSize:12, text:"No Network"
		noNetwork.constraints =
			leading:7
			top:3
	else
		for i in [0...setup.signal]
			dot = new Layer height:exports.px(5.5), width:exports.px(5.5), backgroundColor:"black", superLayer:statusBar, borderRadius:exports.px(5.5)/2, backgroundColor:@color, name:"signal[#{i}]"
			if i == 0
				dot.constraints =
					leading:7
					top:7	
			else
				dot.constraints =
					leading:[signal[i - 1 ], 1]
					top:7					
			signal.push dot 
			exports.layout()
		if setup.signal < 5
			nonDots = 5 - setup.signal
			for i in [0...nonDots]
				nonDot = new Layer height:exports.px(5.5), width:exports.px(5.5), superLayer:statusBar, borderRadius:exports.px(5.5)/2, backgroundColor:"transparent", name:"signal[#{signal.length}]"
				nonDot.style.border = "#{exports.px(1)}px solid #{@color}"
				nonDot.constraints =
					leading:[signal[signal.length - 1], 1]
					top:7
				signal.push nonDot
				exports.layout()	
		carrier = new exports.Text style:"statusBarCarrier", text:setup.carrier, superLayer:statusBar, fontSize:12, color:@color, name:"carrier", textTransform:"capitalize"
		carrier.constraints = 
			leading:[signal[signal.length - 1], 7]
			top:3
		exports.layout()
		if setup.carrier
			network = new exports.Text style:"statusBarNetwork", text:setup.network, superLayer:statusBar, fontSize:12, color:@color, name:"network", textTransform:"uppercase"
			network.constraints =
				leading:[carrier, 5]
				top:3
		if setup.carrier == "" || setup.carrier == "wifi"
			network = new Layer width:exports.px(14), height:exports.px(10), superLayer:statusBar, backgroundColor:"transparent", name:"network"
			network.html = "<?xml version='1.0' encoding='UTF-8' standalone='no'?>
				<svg width='#{exports.px(14)}px' height='#{exports.px(10)}px' viewBox='0 0 14 10' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>
					<!-- Generator: Sketch 3.6.1 (26313) - http://www.bohemiancoding.com/sketch -->
					<title>Wi-Fi</title>
					<desc>Created with Sketch.</desc>
					<defs></defs>
					<g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
						<g id='Status-Bar/Black/Charging' transform='translate(-87.000000, -5.000000)' fill='#{@color}'>
							<path d='M96.1444208,12.4385043 C95.626374,11.8454456 94.8523616,11.4689119 93.987563,11.4689119 C93.1390073,11.4689119 92.3778594,11.8314341 91.8601652,12.4053177 L94.0225391,14.5 L96.1444208,12.4385043 Z M98.3234964,10.3214425 C97.2447794,9.19174563 95.7014387,8.48445596 93.987563,8.48445596 C92.2882723,8.48445596 90.7566264,9.17975893 89.6792698,10.2926936 L90.7692987,11.3486 C91.567205,10.5053708 92.713648,9.97668394 93.987563,9.97668394 C95.2768836,9.97668394 96.4356305,10.518235 97.2346215,11.3793293 L98.3234964,10.3214425 L98.3234964,10.3214425 Z M100.5,8.20687933 C98.8629578,6.53943672 96.5505699,5.5 93.987563,5.5 C91.4375103,5.5 89.1355496,6.52895605 87.5,8.18164431 L88.5895579,9.23709441 C89.9460798,7.85431655 91.8628921,6.99222798 93.987563,6.99222798 C96.1260026,6.99222798 98.0538809,7.86552609 99.4118698,9.26404272 L100.5,8.20687933 Z' id='Wi-Fi'></path>
						</g>
					</g>
				</svg>"
			network.constraints = 
				leading:[signal[signal.length - 1], 7]
				top:@topConstraint
	batteryIcon = new Layer width:exports.px(25), height:exports.px(10), superLayer:statusBar, backgroundColor:"transparent", name:"batteryIcon"
	if setup.battery > 70 
		batteryIcon.html = "<?xml version='1.0' encoding='UTF-8' standalone='no'?>
			<svg width='#{exports.px(25)}px' height='#{exports.px(10)}px' viewBox='0 0 25 10' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>
				<!-- Generator: Sketch 3.6.1 (26313) - http://www.bohemiancoding.com/sketch -->
				<title>Battery</title>
				<desc>Created with Sketch.</desc>
				<defs></defs>
				<g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
					<g id='Status-Bar/Black/100%' transform='translate(-345.000000, -5.000000)' fill='#{@color}'>
						<path d='M346.493713,5.5 C345.668758,5.5 345,6.16802155 345,7.00530324 L345,13.4946968 C345,14.3260528 345.67338,15 346.493713,15 L366.006287,15 C366.831242,15 367.5,14.3319784 367.5,13.4946968 L367.5,7.00530324 C367.5,6.17394722 366.82662,5.5 366.006287,5.5 L346.493713,5.5 Z M368,8.5 L368,12 L368.75,12 C369.164214,12 369.5,11.6644053 369.5,11.25774 L369.5,9.24225998 C369.5,8.83232111 369.167101,8.5 368.75,8.5 L368,8.5 Z M346.508152,6 C345.951365,6 345.5,6.45699692 345.5,7.00844055 L345.5,13.4915594 C345.5,14.0485058 345.949058,14.5 346.508152,14.5 L365.991848,14.5 C366.548635,14.5 367,14.0430031 367,13.4915594 L367,7.00844055 C367,6.45149422 366.550942,6 365.991848,6 L346.508152,6 Z M346.506744,6.5 C346.226877,6.5 346,6.71637201 346,6.99209595 L346,13.5079041 C346,13.7796811 346.230225,14 346.506744,14 L365.993256,14 C366.273123,14 366.5,13.783628 366.5,13.5079041 L366.5,6.99209595 C366.5,6.72031886 366.269775,6.5 365.993256,6.5 L346.506744,6.5 Z' id='Battery'></path>
					</g>
				</g>
			</svg>"
	if setup.battery <= 70 && setup.battery > 20
		batteryIcon.html = "<?xml version='1.0' encoding='UTF-8' standalone='no'?>
			<svg width='#{exports.px(25)}px' height='#{exports.px(10)}px' viewBox='0 0 25 10' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>
				<!-- Generator: Sketch 3.6.1 (26313) - http://www.bohemiancoding.com/sketch -->
				<title>Battery</title>
				<desc>Created with Sketch.</desc>
				<defs></defs>
				<g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
					<g id='Status-Bar/White/100%' transform='translate(-345.000000, -5.000000)' fill='#{@color}'>
						<path d='M346.493713,5.5 C345.668758,5.5 345,6.16802155 345,7.00530324 L345,13.4946968 C345,14.3260528 345.67338,15 346.493713,15 L366.006287,15 C366.831242,15 367.5,14.3319784 367.5,13.4946968 L367.5,7.00530324 C367.5,6.17394722 366.82662,5.5 366.006287,5.5 L346.493713,5.5 Z M368,8.5 L368,12 L368.75,12 C369.164214,12 369.5,11.6644053 369.5,11.25774 L369.5,9.24225998 C369.5,8.83232111 369.167101,8.5 368.75,8.5 L368,8.5 Z M346.508152,6 C345.951365,6 345.5,6.45699692 345.5,7.00844055 L345.5,13.4915594 C345.5,14.0485058 345.949058,14.5 346.508152,14.5 L365.991848,14.5 C366.548635,14.5 367,14.0430031 367,13.4915594 L367,7.00844055 C367,6.45149422 366.550942,6 365.991848,6 L346.508152,6 Z M346.501231,6.5 C346.224409,6.5 346,6.71637201 346,6.99209595 L346,13.5079041 C346,13.7796811 346.229751,14 346.501231,14 L356.498769,14 C356.775591,14 357,13.783628 357,13.5079041 L357,6.99209595 C357,6.72031886 356.770249,6.5 356.498769,6.5 L346.501231,6.5 Z' id='Battery'></path>
					</g>
				</g>
			</svg>"
	if setup.battery <= 20
		batteryIcon.html = "<?xml version='1.0' encoding='UTF-8' standalone='no'?>
			<svg width='#{exports.px(25)}px' height='#{exports.px(10)}px' viewBox='0 0 25 10' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>
				<!-- Generator: Sketch 3.6.1 (26313) - http://www.bohemiancoding.com/sketch -->
				<title>Battery</title>
				<desc>Created with Sketch.</desc>
				<defs></defs>
				<g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
					<g id='Status-Bar/White/100%' transform='translate(-345.000000, -5.000000)' fill='#{@color}'>
						<path d='M346.493713,5.5 C345.668758,5.5 345,6.16802155 345,7.00530324 L345,13.4946968 C345,14.3260528 345.67338,15 346.493713,15 L366.006287,15 C366.831242,15 367.5,14.3319784 367.5,13.4946968 L367.5,7.00530324 C367.5,6.17394722 366.82662,5.5 366.006287,5.5 L346.493713,5.5 Z M368,8.5 L368,12 L368.75,12 C369.164214,12 369.5,11.6644053 369.5,11.25774 L369.5,9.24225998 C369.5,8.83232111 369.167101,8.5 368.75,8.5 L368,8.5 Z M346.508152,6 C345.951365,6 345.5,6.45699692 345.5,7.00844055 L345.5,13.4915594 C345.5,14.0485058 345.949058,14.5 346.508152,14.5 L365.991848,14.5 C366.548635,14.5 367,14.0430031 367,13.4915594 L367,7.00844055 C367,6.45149422 366.550942,6 365.991848,6 L346.508152,6 Z M346.490479,6.5 C346.219595,6.5 346,6.71637201 346,6.99209595 L346,13.5079041 C346,13.7796811 346.215057,14 346.490479,14 L349.509521,14 C349.780405,14 350,13.783628 350,13.5079041 L350,6.99209595 C350,6.72031886 349.784943,6.5 349.509521,6.5 L346.490479,6.5 Z' id='Battery'></path>
					</g>
				</g>
			</svg>"

	batteryPercent = new exports.Text style:"statusBarBatteryPercent", text:setup.battery + "%", superLayer:statusBar, fontSize:12, color:@color, name:"batteryPercent"
	batteryPercent.constraints = 
		trailing: [batteryIcon, 3]
		verticalCenter:time
	batteryIcon.constraints =
		trailing : 7
		top:@batteryIcon
	bluetooth = new Layer width:exports.px(8), height:exports.px(15), superLayer:statusBar, opacity:.5, backgroundColor:"transparent", name:"bluetooth"
	bluetooth.html = "<?xml version='1.0' encoding='UTF-8' standalone='no'?>
		<svg width='#{exports.px(7)}px' height='#{exports.px(13)}px' viewBox='0 0 8 15' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>
			<!-- Generator: Sketch 3.6.1 (26313) - http://www.bohemiancoding.com/sketch -->
			<title>Bluetooth</title>
			<desc>Created with Sketch.</desc>
			<defs></defs>
			<g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
				<g id='Status-Icons-(White)' transform='translate(-137.000000, 0.000000)' fill='#{@color}'>
					<path d='M140.5,14.5 L145,10.25 L141.8,7.5 L145,4.75 L140.5,0.5 L140.5,6.07142857 L137.8,3.75 L137,4.5 L140.258333,7.375 L137,10.25 L137.8,11 L140.5,8.67857143 L140.5,14.5 Z M141.5,3 L143.366667,4.75 L141.5,6.25 L141.5,3 Z M141.5,8.5 L143.366667,10.25 L141.5,12 L141.5,8.5 Z' id='Bluetooth'></path>
				</g>
			</g>
		</svg>"
	bluetooth.constraints = 
		top: @bluetooth
		trailing: [batteryPercent, 7]

	exports.layout()

	# Export statusBar
	statusBar.battery = {}
	statusBar.battery.percent = batteryPercent
	statusBar.battery.icon = batteryIcon
	statusBar.bluetooth = bluetooth
	statusBar.time = time
	statusBar.network = network
	statusBar.carrier = carrier
	statusBar.signal = signal
	return statusBar

exports.Keyboard = (array) ->
	setup = setupComponent("keyboard", array)

	#This will hold all of the specs for each device's keyboard
	boardSpecs = {}

	#This will set the specs
	switch exports.device
		when "iphone-5"
			boardSpecs.height = 215
			boardSpecs.key = {
				width:exports.px(26)
				height:exports.px(39)
			}
			boardSpecs.expandedKey = exports.px(39)
			boardSpecs.expandedSpacer = exports.px(12)

			boardSpecs.padding = {}
			boardSpecs.padding.row1 = exports.px(3)
			boardSpecs.padding.row2 = exports.px(19)
			boardSpecs.padding.row3 = exports.px(54)


			boardSpecs.marginTop = {}
			boardSpecs.marginTop.row1 = exports.px(11)
			boardSpecs.marginTop.row2 = exports.px(26)
			boardSpecs.marginTop.row3 = exports.px(41)
			boardSpecs.marginTop.row4 = exports.px(55)

			boardSpecs.shiftIcon = {x:exports.px(9), y:exports.px(2)}
			boardSpecs.deleteIcon = {x:exports.px(7), y:exports.px(10)}
			boardSpecs.emojiIcon = {x:exports.px(8), y:exports.px(9)}

			boardSpecs.sideKey = exports.px(36.5)
			boardSpecs.sideKeyRadius = exports.px(4)
			boardSpecs.sideKeyBottom = exports.px(58)

			boardSpecs.iPadDeleteOffset = 0
			boardSpecs.bottomRow = 8
			boardSpecs.returnKey = exports.px(74)

			boardSpecs.spacer = exports.px(6)

		when "iphone-6s"
			boardSpecs.height = 216
			boardSpecs.key = {
				width:exports.px(31.5)
				height:exports.px(42)
			}

			boardSpecs.expandedKey = exports.px(46.5)
			boardSpecs.expandedSpacer = exports.px(14)

			boardSpecs.padding = {}
			boardSpecs.padding.row1 = exports.px(3)
			boardSpecs.padding.row2 = exports.px(22)
			boardSpecs.padding.row3 = exports.px(59)


			boardSpecs.marginTop = {}
			boardSpecs.marginTop.row1 = exports.px(10)
			boardSpecs.marginTop.row2 = exports.px(22)
			boardSpecs.marginTop.row3 = exports.px(34)
			boardSpecs.marginTop.row4 = exports.px(44)

			boardSpecs.shiftIcon = {x:exports.px(11), y:exports.px(2)}
			boardSpecs.deleteIcon = {x:exports.px(10), y:exports.px(13)}
			boardSpecs.emojiIcon = {x:exports.px(11), y:exports.px(11)}

			boardSpecs.returnKey = exports.px(87.5)
			boardSpecs.bottomRow = 6
			boardSpecs.iPadDeleteOffset = 0

			boardSpecs.sideKey = exports.px(42)
			boardSpecs.sideKeyRadius = exports.px(5)
			boardSpecs.sideKeyBottom = exports.px(56)

			boardSpecs.spacer = exports.px(6)

		when "iphone-6s-plus"
			boardSpecs.height = 226
			boardSpecs.key = {
				width:exports.px(35)
				height:exports.px(45)
			}
			boardSpecs.expandedKey = exports.px(50)
			boardSpecs.expandedSpacer = exports.px(20)
			boardSpecs.padding = {}
			boardSpecs.padding.row1 = exports.px(4)
			boardSpecs.padding.row2 = exports.px(25)
			boardSpecs.padding.row3 = exports.px(67)


			boardSpecs.marginTop = {}
			boardSpecs.marginTop.row1 = exports.px(8)
			boardSpecs.marginTop.row2 = exports.px(19)
			boardSpecs.marginTop.row3 = exports.px(30)
			boardSpecs.marginTop.row4 = exports.px(41)

			boardSpecs.shiftIcon = {x:exports.px(13), y:exports.px(2)}
			boardSpecs.deleteIcon = {x:exports.px(11), y:exports.px(14)}
			boardSpecs.emojiIcon = {x:exports.px(13), y:exports.px(13)}

			boardSpecs.bottomRow = 6

			boardSpecs.iPadDeleteOffset = 0

			boardSpecs.returnKey = exports.px(97)

			boardSpecs.sideKey = exports.px(45)
			boardSpecs.sideKeyRadius = exports.px(5)

			boardSpecs.spacer = exports.px(6)
		when "ipad"
			boardSpecs.height = 268
			boardSpecs.key = {
				width:exports.px(56)
				height:exports.px(56)
			}
			boardSpecs.padding = {}
			boardSpecs.padding.row1 = exports.px(6)
			boardSpecs.padding.row2 = exports.px(35)
			boardSpecs.padding.row3 = exports.px(74)


			boardSpecs.marginTop = {}
			boardSpecs.marginTop.row1 = exports.px(10)
			boardSpecs.marginTop.row2 = exports.px(18)
			boardSpecs.marginTop.row3 = exports.px(28)
			boardSpecs.marginTop.row4 = exports.px(40)

			boardSpecs.shiftIcon = {x:exports.px(18), y:exports.px(2)}
			boardSpecs.deleteIcon = {x:exports.px(18), y:exports.px(20)}
			boardSpecs.emojiIcon = {x:exports.px(18), y:exports.px(18)}

			boardSpecs.bottomRow = 7

			boardSpecs.iPadDeleteOffset = boardSpecs.marginTop.row3 + boardSpecs.key.height * 2 - boardSpecs.marginTop.row1

			boardSpecs.returnKey = exports.px(106)

			boardSpecs.sideKey = exports.px(56)
			boardSpecs.sideKey2 = exports.px(76)
			boardSpecs.sideKeyRadius = exports.px(5)

			boardSpecs.spacer = exports.px(12)

	board = new Layer backgroundColor:"#D1D5DA", name:"keyboard"

	board.specs = boardSpecs

	#This will generate a object with 216 height and it'll stretch end to end. 
	board.constraints = (height:boardSpecs.height, trailing:0, leading:0)

	exports.layout()

	#This will deterine if it starts on the bottom or pops up from the bottom 
	if setup.animated
		board.y = exports.height
		board.animate 
			properties:(maxY: exports.height)
			time:.25
			curve:"ease-in-out"
	else
		board.maxY = exports.height

	#Letters to be made
	lettersArray = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v",  "b", "n", "m"]
	#These arrays are depenedent on the Device
	secondArray = []
	thirdArray = []

	switch exports.device
		when "ipad"
			secondArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "/", ":", ";", "(", ")", "$", "&", "@", "undo", "hide", ".", ',', "?", "!", "'", "\""]
			thirdArray = ["\[", "\]", "\{", "\}", "#", "%", "^", "*", "+", "=", "_", "\\", "|", "~", "<", ">", "€", "£", "¥", "redo", "hide", ".", ',', "?", "!", "'", "\""]
		else
			secondArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "/", ":", ";", "(", ")", "$", "&", "@", "\"", ".", ',', "?", "!", "'"]
			thirdArray = ["\[", "\]", "\{", "\}", "#", "%", "^", "*", "+", "=", "_", "\\", "|", "~", "<", ">", "€", "£", "¥", "•", ".", ',', "?", "!", "'", "\""]
	if exports.device == "ipad"
		lettersArray.push ","
		lettersArray.push "."

	#Numbers to be made (depending on device)
	numsArray = [0..9]

	#Holds the keys that we make. This will allows us to quickly iterate through them. 
	keysArray = []

	keyPopUp = new Layer width:@keyWidth, height:@keyHeight, x:@.x-16*exports.scale, backgroundColor:"transparent", superLayer:board, name:"key pop up"
	box = new Layer borderRadius:exports.px(10), superLayer:keyPopUp, backgroundColor:"transparent", color:"black", name:"letter"
	box.style = {
		"font-size" : 39 * exports.scale + "px"
		"font-weight" : 300
		"font-family" : '-apple-system, Helvetica, Arial, sans-serif'
		'text-align' : 'center'
		'line-height' : @lineHeight
	}
	@.color = "white"
	path = new Layer superLayer:keyPopUp, backgroundColor:"transparent", name:"shape path"
	board.keyPopUp = keyPopUp
	board.keyPopUp.box = box

	rowsMap = [
		{ 
			"padding" : boardSpecs.padding.row1
			"startIndex" : 0
			"endIndex" : 9
			"marginTop" : boardSpecs.marginTop.row1
		},
		{ 
			"padding" : boardSpecs.padding.row2
			"startIndex" : 10
			"endIndex" : 18
			"marginTop" : boardSpecs.marginTop.row2
		},
		{ 
			"padding" : boardSpecs.padding.row3
			"startIndex" : 19
			"endIndex" : 25
			"marginTop" : boardSpecs.marginTop.row3
		}
	]

	firstRowKeyWidth = 0
	secondRowKeyWidth = 0

	board.keys = {}
	for letter in lettersArray
		index = lettersArray.indexOf(letter) 
		key = new Layer name:letter, superLayer:board, borderRadius:5*exports.scale, backgroundColor:"white", color:"black", shadowY:exports.px(1), shadowColor:"#929498", width:boardSpecs.key.width, height:boardSpecs.key.height
		board.keys[letter] = key
		keyPopUp.bringToFront()
		box.bringToFront()
		if exports.scale == 2
			keyPopUp.constraints = (width:65, height:122)
			path.constraints = (width:65, height: 122)
			path.y = 10
			@pathWidth = exports.px(65)
			@pathHeight = exports.px(122)
			@keyHeight = exports.px(32)
			@keyWidth = exports.px(44)
			@lineHeight = @keyWidth - 17 + "px"
			box.constraints = (width:32, height:44)
			box.centerX()
			box.y = exports.px(28)

		if exports.scale == 3
			keyPopUp.constraints = (width:68, height:122)
			@keyHeight = exports.px(122)
			@keyWidth = exports.px(65)
			@lineHeight = @keyWidth + "px"
			@pathWidth = exports.px(68)
			@pathHeight = exports.px(128)
			path.y = 0


			box.constraints = (width:35, height:46)
			box.centerX()
			box.y = exports.px(28)

		if exports.width == 640
			key.constraints = (width:26, height:39)

		keyPopUp.visible = false

		exports.layout()
		key.style = {
			"font-size" : 25 * exports.scale + "px"
			"font-weight" : 300
			"font-family" : '-apple-system, Helvetica, Arial, sans-serif'
			'text-align' : 'center'
			'line-height' : key.height - exports.px(2) + "px"
		}
		if letter == "," || letter == "."
			extraSymbol = new Layer superLayer:key, width:exports.px(30), height:exports.px(30), backgroundColor:"transparent", y:exports.px(15), color:exports.color("black"), name:"!/?"
			extraSymbol.centerX()
			extraSymbol.style = {
				"font-size" : exports.px(24) + "px"
				"font-weight" : 300
				"font-family" : '-apple-system, Helvetica, Arial, sans-serif'
				'text-align' : 'center'
				'line-height' : "20px"
			}

			switch letter
				when "," then extraSymbol.html = "!"
				when "." then extraSymbol.html = "?"
			key.style["line-height"] = key.height + exports.px(10) + "px"

		key.html = letter
		
		if index <= rowsMap[0].endIndex
			rowIndex = index - rowsMap[0].startIndex
			key.x = rowsMap[0].padding + (rowIndex*boardSpecs.spacer) + (firstRowKeyWidth)
			key.y = rowsMap[0].marginTop
			if exports.device == "ipad"
				#Handle the extra pixels on the top row
				if index % 2 != 0
					key.width = key.width + exports.px(2)
				else
					key.width = key.width + exports.px(1)
			firstRowKeyWidth = firstRowKeyWidth + key.width
		if index > rowsMap[0].endIndex && index <= rowsMap[1].endIndex
			rowIndex = index - rowsMap[1].startIndex
			key.x = rowsMap[1].padding + (rowIndex*boardSpecs.spacer) + (secondRowKeyWidth)
			key.y = rowsMap[1].marginTop + key.height
			key.width = key.width + exports.px(1)
			secondRowKeyWidth = secondRowKeyWidth + key.width
		if index > rowsMap[1].endIndex
			rowIndex = index - rowsMap[2].startIndex
			key.x = rowsMap[2].padding + (rowIndex*boardSpecs.spacer) + (rowIndex*key.width)
			key.y = rowsMap[2].marginTop + key.height * 2

		path.html = "<?xml version='1.0' encoding='UTF-8' standalone='no'?>
			<svg width='#{@pathWidth}px' height='#{@pathHeight}' viewBox='0 0 63 114' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'>
				<title>Rectangle 44 Copy</title>
				<desc>Created with Sketch.</desc>
				<defs>
					<filter x='-50%' y='-50%' width='200%' height='200%' filterUnits='objectBoundingBox' id='filter-1'>
						<feOffset dx='0' dy='0' in='SourceAlpha' result='shadowOffsetOuter1'></feOffset>
						<feGaussianBlur stdDeviation='1.5' in='shadowOffsetOuter1' result='shadowBlurOuter1'></feGaussianBlur>
						<feColorMatrix values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.21 0' in='shadowBlurOuter1' type='matrix' result='shadowMatrixOuter1'></feColorMatrix>
						<feMerge>
							<feMergeNode in='shadowMatrixOuter1'></feMergeNode>
							<feMergeNode in='SourceGraphic'></feMergeNode>
						</feMerge>
					</filter>
				</defs>
				<g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'>
					<g id='iPhone-6' sketch:type='MSArtboardGroup' transform='translate(-118.000000, -240.000000)' stroke='#C7C7C7' filter='url(#filter-1)' stroke-width='0.5' 
					fill='#FFFFFF' opacity='0.998367537'>
					 <path d='M134,306 C134,306 121,295 121,290 C121,279.616788 121,253.001456 121,253.001456 C121,247.477804 125.485832,243 131.002774,243 L167.862127,243 C173.386507,243 177.880862,247.469905 
					 177.900044,252.997271 C177.900044,252.997271 178,280 177.999999,290 C177.999999,295.006553 165,306 165,306 L165,346.049594 
					 C165,348.806807 162.770556,351.041969 160.002098,351.041969 L138.997902,351.041969 
					  C136.237637,351.041969 134,348.808331 134,346.049594 L134,306 Z' id='Rectangle-44-Copy' sketch:type='MSShapeGroup' transform='translate(149.500000, 297.020985) scale(-1, 1) translate(-149.500000, -297.020985) '>
					  </path>
					</g>
				</g>
			</svg>"
		keysArray.push key

		if exports.device != "ipad" && exports.device != "ipad-pro"
			## iPhone Key Animations
			key.on Events.TouchStart, ->
				keyPopUp.visible = true	
				box.html = @.name
				keyPopUp.maxY = @.maxY
				keyPopUp.midX = @.midX

			key.on Events.TouchMove, ->
				box.html = @.name
				keyPopUp.maxY = @.maxY
				keyPopUp.midX = @.midX	

			key.on Events.TouchEnd, ->
				keyPopUp.visible = false

		else 
			#iPad Key Animations
			key.on Events.TouchStart, ->
				@.backgroundColor = exports.color("light-key")
			key.on Events.TouchEnd, ->
				@.backgroundColor = "white"

		key.on Events.TouchEnd, ->
			if shiftIcon.states.state == "on"
				shiftIcon.states.switch("default")
				shiftKey.backgroundColor = exports.color("light-key")

				if exports.device == "ipad"
					shiftIcon2.states.switch("default")
					shiftKey2.backgroundColor = exports.color("light-key")

				for key in keysArray
					key.style['text-transform'] = 'lowercase'
				box.style['text-transform'] = 'lowercase'

				if setup.output
					@newText = setup.output.text.html + @.name.toUpperCase()
					exports.update(setup.output.text, [text:@newText])
			else
				if setup.output
					@newText = setup.output.text.html + @.name
					exports.update(setup.output.text, [text:@newText])

	board.keysArray = keysArray

	board.keyboardState = 1

	## SHIFT KEY

	shiftKey = new Layer superLayer:board, name:"shift", borderRadius:boardSpecs.sideKeyRadius, color:exports.color("black"), backgroundColor:exports.color("light-key"), shadowY:exports.px(1), shadowColor:"#929498", width:boardSpecs.sideKey, height:boardSpecs.sideKey, y:(boardSpecs.marginTop.row3 + boardSpecs.key.height * 2)
	shiftKey.constraints = (leading:exports.pt(boardSpecs.padding.row1))
	shiftIcon = new Layer width:exports.px(20), height:exports.px(19), superLayer:shiftKey, backgroundColor:"transparent", x:boardSpecs.shiftIcon.x, y:boardSpecs.shiftIcon.y
	shiftIcon.html = iconLibrary.shift.off

	shiftIcon.states.add
		"on":
			html: iconLibrary.shift.on
	shiftIcon.states.animationOptions =
	  time: .01

	shiftKey.style = {
			"font-size" : exports.px(16) + "px"
			"font-weight" : 400
			"font-family" : '-apple-system, Helvetica, Arial, sans-serif'
			'text-align' : 'center'
			'line-height' : boardSpecs.key.height + "px"

		}



	shiftKey.on Events.TouchEnd, ->
		switch board.keyboardState 
			when 1
				shiftIcon.states.next()
				if exports.device == "ipad"
					shiftIcon2.states.next()
				if shiftIcon.states.state == "on"
					shiftKey.backgroundColor = "white"
					if exports.device == "ipad"
						shiftKey2.backgroundColor = "white"	
					for key in keysArray
						key.style['text-transform'] = 'uppercase'
					box.style['text-transform'] = 'uppercase'
				else 
					shiftKey.backgroundColor = exports.color("light-key")
					if exports.device == "ipad"
						shiftKey2.backgroundColor = exports.color("light-key")
					for key in keysArray
						key.style["text-transform"] = 'lowercase'
					box.style["text-transform"] = 'lowercase'
			when 2
				for key, index in keysArray
					key.html = thirdArray[index]
					key.name = thirdArray[index]
				board.keyboardState = 3
				shiftKey.html = "123"
				if exports.device == "ipad"
					shiftKey2.html = "123"
			when 3
				for key, index in keysArray
					if index < 27
						key.name = secondArray[index]
						key.html = secondArray[index]
						if index == 26
							key.subLayers[0].visible = false
					else
						key.visible = false
				shiftKey.html = "#+="
				if exports.device == "ipad"
					shiftKey2.html = "#+="
				board.keyboardState = 2

	board.keys.shift = shiftKey
	board.keys.shift.icon = shiftIcon

	## DELETE KEY

	deleteKey = new Layer superLayer:board, borderRadius:boardSpecs.sideKeyRadius, backgroundColor:exports.color("light-key"), shadowY:exports.px(1), shadowColor:"#929498", name:"delete", width:boardSpecs.sideKey, height:boardSpecs.sideKey, y:(boardSpecs.marginTop.row3 + boardSpecs.key.height * 2 - boardSpecs.iPadDeleteOffset)


	deleteKey.constraints = (trailing:exports.pt(boardSpecs.spacer)/2)
	deleteIcon = new Layer superLayer:deleteKey, width:exports.px(24), height:exports.px(18), backgroundColor:"transparent", x:boardSpecs.deleteIcon.x, y:boardSpecs.deleteIcon.y
	
	if exports.device == "ipad"
		deleteKey.width = deleteKey.width + exports.px(5)

	deleteIcon.states.add 
		"on": 
			html: iconLibrary.delete.on

	deleteIcon.states.add
		off: 
			html: iconLibrary.delete.off


	deleteKey.on Events.TouchStart, ->
		deleteKey.backgroundColor = "white"
		deleteIcon.states.switchInstant("on")

	deleteKey.on Events.TouchEnd, ->
		deleteKey.backgroundColor = exports.color("light-key")
		deleteIcon.states.switchInstant("off")

		if setup.output
			initialLength = setup.output.text.html.length
			newText = setup.output.text.html.slice(0, -1)
			exports.update(setup.output.text, [text:newText])
			endLength = setup.output.text.html.length
			if initialLength == endLength 
				newText = setup.output.text.html.slice(0, -6)
				exports.update(setup.output.text, [text:newText])
			if setup.output.text.html == ""
				setup.output.placeholder.visible = true



	deleteIcon.states.switchInstant("off")

	board.keys.delete = deleteKey
	board.keys.delete.icon = deleteIcon

	## EXTRA KEYS

	if exports.device == "ipad"
		keyboardKey = new Layer superLayer:board, name:"dismiss", borderRadius:boardSpecs.sideKeyRadius, backgroundColor:exports.color("light-key"), shadowY:exports.px(1), shadowColor:"#929498", width:boardSpecs.sideKey, height:boardSpecs.sideKey
		keyboardKey.constraints = {trailingEdges:deleteKey, bottom:boardSpecs.bottomRow}
		keyboardIcon = new Layer superLayer:keyboardKey, width:exports.px(32.5), height:exports.px(23.5), backgroundColor:"transparent"
		keyboardIcon.html = iconLibrary.keyboard
		keyboardIcon.center()

		board.keys.dismiss = keyboardKey

		shiftKey2 = new Layer superLayer:board, name:"shift", borderRadius:boardSpecs.sideKeyRadius,color:exports.color("black"), backgroundColor:exports.color("light-key"), shadowY:exports.px(1), shadowColor:"#929498", width:boardSpecs.sideKey2, height:boardSpecs.sideKey
		shiftKey2.constraints = (trailingEdges:deleteKey, bottomEdges:shiftKey)
		shiftIcon2 = new Layer width:exports.px(20), height:exports.px(19), superLayer:shiftKey2, backgroundColor:"transparent", x:boardSpecs.shiftIcon.x+exports.px(10), y:boardSpecs.shiftIcon.y
		shiftIcon2.html = iconLibrary.shift.off

		shiftKey2.style = {
			"font-size" : exports.px(16) + "px"
			"font-weight" : 400
			"font-family" : '-apple-system, Helvetica, Arial, sans-serif'
			'text-align' : 'center'
			'line-height' : (boardSpecs.key.height) + "px"

		}


		shiftIcon2.states.add
			"on":
				html: iconLibrary.shift.on
		shiftIcon2.states.animationOptions =
		  time: .01

		shiftIcon2.on Events.TouchStart, ->
			switch board.keyboardState 
				when 1
					shiftIcon.states.next()
					shiftIcon2.states.next()
					if shiftIcon.states.state == "on"
						shiftKey.backgroundColor = "white"
						shiftKey2.backgroundColor = "white"	
						for key in keysArray
							key.style['text-transform'] = 'uppercase'
						box.style['text-transform'] = 'uppercase'
					else 
						shiftKey.backgroundColor = exports.color("light-key")
						shiftKey2.backgroundColor = exports.color("light-key")
						for key in keysArray
							key.style["text-transform"] = 'lowercase'
						box.style["text-transform"] = 'lowercase'
				when 2
					for key, index in keysArray
						key.html = thirdArray[index]
						key.name = thirdArray[index]
					board.keyboardState = 3
					shiftKey.html = "123"
					if exports.device == "ipad"
						shiftKey2.html = "123"
				when 3
					for key, index in keysArray
						if index < 27
							key.name = secondArray[index]
							key.html = secondArray[index]
							if index == 26
								key.subLayers[0].visible = false
						else
							key.visible = false
					shiftKey.html = "#+="
					if exports.device == "ipad"
						shiftKey2.html = "#+="
					board.keyboardState = 2


		numKey2 = new Layer superLayer:board, name:"num", borderRadius:boardSpecs.sideKeyRadius, color:exports.color("black"), backgroundColor:exports.color("light-key"), shadowY:exports.px(1), shadowColor:"#929498", width:boardSpecs.sideKey2, height:boardSpecs.key.height
		numKey2.html = ".?123"
		numKey2.style = {
			"font-size" : exports.px(16) + "px"
			"font-weight" : 400
			"font-family" : '-apple-system, Helvetica, Arial, sans-serif'
			'text-align' : 'center'
			'line-height' : boardSpecs.key.height + "px"

		}
		numKey2.constraints = {trailing:[keyboardKey, 12], bottomEdges:keyboardKey}

		numKey2.on Events.TouchStart, ->
			switch board.keyboardState
				when 1
					## Change Letters
					for key, index in keysArray
						if index < 27
							if secondArray[index] == "undo"
								key.width = key.width * 2 + boardSpecs.spacer
								key.style["font-size"] = exports.px(17) + "px"
								key.style["font-weight"] = 400
							if secondArray[index] == "hide"
								key.visible = false
							key.name = secondArray[index]
							key.html = secondArray[index]
							if index == 26
								key.subLayers[0].visible = false
						else
							key.visible = false

					## Handle num keys and shift keys
					numKey.html = "ABC"
					shiftKey.html = "#+="
					shiftIcon.visible = false

					if exports.device == "ipad"
						shiftIcon2.visible = false
						shiftKey2.html = "#+="
						numKey2.html = "ABC"
					board.keyboardState = 2
				else
					for key, index in keysArray
						if key.html == "undo" || "redo"
							key.width = boardSpecs.key.width
							key.style["font-size"] = exports.px(25) + "px"
							key.style["font-weight"] = 300
						key.visible = true
						key.name = lettersArray[index]
						key.html = lettersArray[index]
						if index > 25
							key.subLayers[0].visible = true
					shiftKey.html = ""
					shiftIcon.visible = true
					if exports.device == "ipad"
						numKey.html = ".?123"
						numKey2.html = ".?123"
						shiftKey2.html = ""
						shiftIcon2.visible = true
					board.keyboardState = 1


	## NUM KEY top:exports.pt(boardSpecs.marginTop.row4 + boardSpecs.key.height*3)

	numKey = new Layer superLayer:board, name:"num", borderRadius:exports.px(5), backgroundColor:exports.color("light-key"), shadowY:exports.px(1), shadowColor:"#929498", color:"black", width:boardSpecs.sideKey, height:boardSpecs.key.height
	numKey.constraints = (bottom:boardSpecs.bottomRow, leadingEdges:shiftKey)
	if exports.device != "ipad" && exports.device != "ipad-pro"
		numKey.html = "123"
	else 
		numKey.html = ".?123"
	numKey.style = {
		"font-size" : exports.px(16) + "px"
		"font-weight" : 400
		"font-family" : '-apple-system, Helvetica, Arial, sans-serif'
		'text-align' : 'center'
		'line-height' : boardSpecs.key.height + "px"
	}

	numKey.on Events.TouchStart, ->
		switch board.keyboardState
			when 1
				## Change Letters		
				switch exports.device
					when "ipad"
						for key, index in keysArray
							if index < 27
								if secondArray[index] == "undo"
									key.width = key.width * 2 + boardSpecs.spacer
									key.style["font-size"] = exports.px(17) + "px"
									key.style["font-weight"] = 400
								if secondArray[index] == "hide"
									key.visible = false
								key.name = secondArray[index]
								key.html = secondArray[index]
								if index == 26
									key.subLayers[0].visible = false
							else
								key.visible = false
						shiftIcon2.visible = false
						shiftKey2.html = "#+="
						numKey2.html = "ABC"
						board.keyboardState = 2
					else
						rowIndex = 0 
						secondRowKeyWidth = 0
						for key, index in keysArray
							key.name = secondArray[index]
							key.html = secondArray[index]
							if index == 19
								key.y = rowsMap[1].marginTop + key.height
							## 2nd Row
							if index > 9 && index < 20
								key.x = rowsMap[0].padding + (rowIndex*boardSpecs.spacer) + (secondRowKeyWidth)
								rowIndex++
								secondRowKeyWidth = secondRowKeyWidth + boardSpecs.key.width
							if index == 20
								key.constraints = {leading:[shiftKey, exports.pt(boardSpecs.expandedSpacer)]}
								exports.layout()
							if index > 19
								key.width = boardSpecs.expandedKey
							if index > 20
								key.constraints = {leading:[keysArray[index - 1], exports.pt(boardSpecs.spacer)]}
								exports.layout()
							if index > 24
								key.visible = false
						board.keyboardState = 2


				## Handle num keys and shift keys
				numKey.html = "ABC"
				shiftKey.html = "#+="
				shiftIcon.visible = false

			else
				if exports.device != "ipad"
					secondRowKeyWidth = 0
					rowIndex = 0
					for key, index in keysArray
						key.width = boardSpecs.key.width
						if index > 9 && index < 19
							key.x = rowsMap[1].padding + (rowIndex*boardSpecs.spacer) + (secondRowKeyWidth)
							key.y = rowsMap[1].marginTop + key.height
							rowIndex++
							secondRowKeyWidth = secondRowKeyWidth + key.width
						if index == 19
							key.y = rowsMap[2].marginTop + key.height * 2
						if index >= 19
							rowIndex = index - rowsMap[2].startIndex
							key.x = rowsMap[2].padding + (rowIndex*boardSpecs.spacer) + (rowIndex*key.width)
							key.y = rowsMap[2].marginTop + key.height * 2
							key.constraints = {}

				for key, index in keysArray
					if key.html == "undo" || "redo"
						key.width = boardSpecs.key.width
						key.style["font-size"] = exports.px(25) + "px"
						key.style["font-weight"] = 300
					key.visible = true
					key.name = lettersArray[index]
					key.html = lettersArray[index]
					if index > 25
						key.subLayers[0].visible = true
				shiftKey.html = ""
				shiftIcon.visible = true
				if exports.device == "ipad"
					numKey.html = ".?123"
					numKey2.html = ".?123"
					shiftKey2.html = ""
					shiftIcon2.visible = true
				board.keyboardState = 1


	exports.layout()

	## EMOJI KEY

	emojiKey = new Layer superLayer:board, name:"emoji", borderRadius:exports.px(5), backgroundColor:exports.color("light-key"), shadowY:exports.px(1), shadowColor:"#929498", width:boardSpecs.sideKey, height:boardSpecs.key.height
	emojiKey.constraints = (bottomEdges:numKey, leading:[numKey, 6])
	emojiIcon = new Layer width:exports.px(20), height:exports.px(19), superLayer:emojiKey, backgroundColor:"transparent", x:boardSpecs.emojiIcon.x, y:boardSpecs.emojiIcon.y
	emojiIcon.html = iconLibrary.emoji



	## RETURN KEY

	returnKey = new Layer superLayer:board, borderRadius:exports.px(5), backgroundColor:exports.color(setup.returnColor), shadowY:exports.px(1), shadowColor:"#929498", color:"black", name:"return", width:boardSpecs.returnKey, height:boardSpecs.key.height
	if setup.returnColor != "light-key"
		returnKey.color = exports.setTextColor(exports.color(setup.returnColor))
	if exports.device == "ipad"
		returnKey.constraints = (trailingEdges:deleteKey, top:exports.pt(boardSpecs.marginTop.row2 + boardSpecs.key.height) )
	else
		returnKey.constraints = (trailing:exports.pt(boardSpecs.spacer)/2, bottomEdges:numKey)
	returnKey.html = setup.returnText
	returnKey.style = {
		"font-size" : exports.px(16) + "px"
		"font-weight" : 400
		"font-family" : '-apple-system, Helvetica, Arial, sans-serif'
		'text-align' : 'center'
		'line-height' : boardSpecs.key.height + "px"

	}
	exports.layout()

	storedTextColor = returnKey.color
	returnKey.on Events.TouchStart, ->
		returnKey.backgroundColor = "white"
		returnKey.color = exports.color("black")
	returnKey.on Events.TouchEnd, ->
		returnKey.backgroundColor = exports.color(setup.returnColor)
		returnKey.color = storedTextColor

	board.keys.return = returnKey


	## SPACE KEY

	spaceKey = new Layer superLayer:board, borderRadius:exports.px(5), backgroundColor:"white", shadowY:exports.px(1), shadowColor:"#929498", color:"black", name:"space", height:boardSpecs.key.height
	
	if exports.device != "ipad"
		spaceKey.constraints = (bottomEdges:numKey, leading:[emojiKey, exports.pt(boardSpecs.spacer)], trailing:[returnKey, boardSpecs.spacer])
		spaceKey.html = "space"
		spaceKey.style = {
			"font-size" : exports.px(16) + "px"
			"font-weight" : 400
			"font-family" : '-apple-system, Helvetica, Arial, sans-serif'
			'text-align' : 'center'
			'line-height' : boardSpecs.key.height + "px"

		}
	else
		spaceKey.constraints = (bottomEdges:numKey, leading:[emojiKey, exports.pt(boardSpecs.spacer)], trailing:[numKey2, boardSpecs.spacer])
	board.keys["&nbsp;"] = spaceKey
	board.keys.space = spaceKey
	exports.layout()


	spaceKey.on Events.TouchStart, ->
		spaceKey.backgroundColor = exports.color("light-key")

	spaceKey.on Events.TouchEnd, ->
		spaceKey.backgroundColor = "white"
		if setup.output
			@newText = setup.output.text.html + "&nbsp;"
			exports.update(setup.output.text, [text:@newText])


	## EMOJIS

	emojiFormatter = (string) ->
		unicodeFormat = ""
		if string[0] == "E" || string[0] == "3" || string[0] == "2" || string[0] == "C"
			arrayOfCodes = string.split(" ")
			for code in arrayOfCodes
				unicodeFormat = unicodeFormat + "%" + code
		else 
			arrayOfCodes = string.split(" ")
			unicodeFormat = "%F0%9F"
			for code in arrayOfCodes
				unicodeFormat = unicodeFormat + "%" + code
		return unicodeFormat

	exports.layout()
	emojiSections = ["Frequnetly Used", "Smileys & People", "Animals & Nature", "Food & Drink", "Activity", "Travel & Places", "Objects", "Symbols", "Flags"]
	rawEmojis = ["98 80", "98 AC", "98 81", "98 82", "98 83", "98 84", "98 85", "98 86", "98 87", "98 89", "98 8a", "99 82", "99 83", "E2 98 BA EF B8 8F", "98 8B" , "98 8C", "98 8D", "98 98", "98 97", "98 99", "98 9A", "98 9C", "98 9D", "98 9B", "A4 91", "A4 93", "98 8E", "A4 97", "98 8F", "98 B6", "98 90", "98 91", "98 92", "99 84", "A4 94", "98 B3", "98 9E", "98 9F", "98 A0", "98 A1", "98 94", "98 95", "99 81", "E2 98 B9 EF B8 8F", "98 A3", "98 96", "98 AB", "98 A9", "98 A4", "98 AE", "98 B1", "98 A8", "98 B0", "98 AF", "98 A6", "98 A7", "98 A2", "98 A5", "98 AA", "98 93", "98 AD", "98 B5", "98 B2", "A4 90", "98 B7", "A4 92", "A4 95", "98 B4", "92 A4", "92 A9", "98 88", "91 BF", "91 B9", "91 BA", "92 80", "91 BB", "91 BD", "A4 96", "98 BA", "98 B8", "98 B9", "98 BB", "98 BC", "98 BD", "99 80", "98 BF", "98 BE", "99 8C", "91 8F", "91 8B", "91 8D", "91 8E", "91 8A", "E2 9C 8A", "E2 9C 8C EF B8 8F", "91 8C", "E2 9C 8B", "91 90", "92 AA", "99 8F", "E2 98 9D EF B8 8F", "91 86", "91 87", "91 88", "91 89", "96 95", "96 90", "A4 98", "96 96", "E2 9C 8D EF B8 8F", "92 85", "91 84", "91 85", "91 82", "91 83", "91 81", "91 80", "91 A4", "91 A5", "97 A3", "91 B6", "91 A6", "91 A7", "91 A8", "91 A9", "91 B1", "91 B4", "91 B5", "91 B2", "91 B3", "91 AE", "91 B7", "92 82", "95 B5", "8E 85", "91 BC", "91 B8", "91 B0", "9A B6", "8F 83", "92 83", "91 AF", "91 AB", "91 AC", "91 AD", "99 87", "92 81", "99 85", "99 86", "99 8B", "99 8E", "99 8D", "92 87", "92 86", "92 91", "91 A9 E2 80 8D E2 9D A4 EF B8 8F E2 80 8D F0 9F 91 A9", "91 A8 E2 80 8D E2 9D A4 EF B8 8F E2 80 8D F0 9F 91 A8", "92 8F", "91 A9 E2 80 8D E2 9D A4 EF B8 8F E2 80 8D F0 9F 92 8B E2 80 8D F0 9F 91 A9", "91 A8 E2 80 8D E2 9D A4 EF B8 8F E2 80 8D F0 9F 92 8B E2 80 8D F0 9F 91 A8", "91 AA", "91 A8 E2 80 8D F0 9F 91 A9 E2 80 8D F0 9F 91 A7", "91 A8 E2 80 8D F0 9F 91 A9 E2 80 8D F0 9F 91 A7 E2 80 8D F0 9F 91 A6", "91 A8 E2 80 8D F0 9F 91 A9 E2 80 8D F0 9F 91 A6 E2 80 8D F0 9F 91 A6", "91 A8 E2 80 8D F0 9F 91 A9 E2 80 8D F0 9F 91 A7 E2 80 8D F0 9F 91 A7", "91 A9 E2 80 8D F0 9F 91 A9 E2 80 8D F0 9F 91 A6", "91 A9 E2 80 8D F0 9F 91 A9 E2 80 8D F0 9F 91 A7", "91 A9 E2 80 8D F0 9F 91 A9 E2 80 8D F0 9F 91 A7 E2 80 8D F0 9F 91 A6", "91 A9 E2 80 8D F0 9F 91 A9 E2 80 8D F0 9F 91 A6 E2 80 8D F0 9F 91 A6", "91 A9 E2 80 8D F0 9F 91 A9 E2 80 8D F0 9F 91 A7 E2 80 8D F0 9F 91 A7", "91 A8 E2 80 8D F0 9F 91 A8 E2 80 8D F0 9F 91 A6", "91 A8 E2 80 8D F0 9F 91 A8 E2 80 8D F0 9F 91 A7", "91 A8 E2 80 8D F0 9F 91 A8 E2 80 8D F0 9F 91 A7 E2 80 8D F0 9F 91 A6", "91 A8 E2 80 8D F0 9F 91 A8 E2 80 8D F0 9F 91 A6 E2 80 8D F0 9F 91 A6", "91 A8 E2 80 8D F0 9F 91 A8 E2 80 8D F0 9F 91 A7 E2 80 8D F0 9F 91 A7", "91 9A", "91 95", "91 96", "91 94", "91 97", "91 99", "91 98", "92 84", "92 8B", "91 A3", "91 A0", "91 A1", "91 A2", "91 9E", "91 9F", "91 92", "8E A9", "E2 9B 91", "8E 93", "91 91", "8E 92", "91 9D", "91 9B", "91 9C", "92 BC", "91 93", "95 B6", "92 8D", "8C 82", "9B 91", "90 B6", "90 B1", "90 AD", "90 B9", "90 B0", "90 BB", "90 BC", "90 A8", "90 AF", "A6 81", "90 AE", "90 B7", "90 BD", "90 B8", "90 99", "90 B5", "99 88", "99 89", "99 8A", "90 92", "90 94", "90 A7", "90 A6", "90 A4", "90 A3", "90 A5", "90 BA", "90 97", "90 B4", "A6 84", "90 9D", "90 9B", "90 8C", "90 9E", "90 9C", "95 B7", "A6 82", "A6 80", "90 8D", "90 A2", "90 A0", "90 9F", "90 A1", "90 AC", "90 B3", "90 8B", "90 8A", "90 86", "90 85", "90 83", "90 82", "90 84", "90 AA", "90 AB", "90 98", "90 90", "90 8F", "90 91", "90 8E", "90 96", "90 80", "90 81", "90 93", "A6 83", "95 8A", "90 95", "90 A9", "90 88", "90 87", "90 BF", "90 BE", "90 89", "90 B2", "8C B5", "8E 84", "8C B2", "8C B3", "8C B4", "8C B1", "8C BF", "E2 98 98", "8D 80", "8E 8D", "8E 8B", "8D 83", "8D 82", "8D 81", "8C BE", "8C BA", "8C BA", "8C BB", "8C B9", "8C B7", "8C BC", "8C B8", "92 90", "8D 84", "8C B0", "8E 83", "90 9A", "95 B8", "8C 8E", "8C 8D", "8C 8F", "8C 95", "8C 96", "8C 97", "8C 98", "8C 91", "8C 92", "8C 93", "8C 94", "8C 9A", "8C 9D", "8C 9B", "8C 9C", "8C 9E", "8C 99", "E2 AD 90 EF B8 8F", "8C 9F", "92 AB", "E2 9C A8", "E2 98 84 EF B8 8F", "E2 98 80 EF B8 8F", "8C A4", "E2 9B 85 EF B8 8F", "8C A5", "8C A6", "E2 98 81 EF B8 8F", "8C A7", "E2 9B 88", "8C A9", "E2 9A A1 EF B8 8F", "94 A5", "92 A5", "E2 9D 84 EF B8 8F", "8C A8", "E2 98 83 EF B8 8F", "E2 9B 84 EF B8 8F", "8C AC", "92 A8", "8C AA", "8C AB", "E2 98 82 EF B8 8F", "E2 98 94 EF B8 8F", "92 A7", "92 A6", "8C 8A", "9B 91", "9B 91", "8D 8F", "8D 8E", "8D 90", "8D 8A", "8D 8B", "8D 8C", "8D 89", "8D 87", "8D 93", "8D 88", "8D 92", "8D 91", "8D 8D", "8D 85", "8D 86", "8C B6", "8C BD", "8D A0", "8D AF", "8D 9E", "A7 80", "8D 97", "8D 96", "8D A4", "8D B3", "8D 94", "8D 9F", "8C AD", "8D 95", "8D 9D", "8C AE", "8C AF", "8D 9C", "8D B2", "8D A5", "8D A3", "8D B1", "8D 9B", "8D 99", "8D 9A", "8D 98", "8D A2", "8D A1", "8D A7", "8D A8", "8D A6", "8D B0", "8E 82", "8D AE", "8D AC", "8D AD", "8D AB", "8D BF", "8D A9", "8D AA", "8D BA", "8D BB", "8D B7", "8D B8", "8D B9", "8D BE", "8D B6", "8D B5", "E2 98 95 EF B8 8F", "8D BC", "8D B4", "8D BD","9B 91", "9B 91", "9B 91", "E2 9A BD EF B8 8F", "8F 80", "8F 88", "E2 9A BE EF B8 8F", "8E BE", "8F 90", "8F 89", "8E B1", "E2 9B B3 EF B8 8F", "8F 8C", "8F 93", "8F B8", "8F 92", "8F 91", "8F 8F", "8E BF", "E2 9B B7", "8F 82", "E2 9B B8", "8F B9", "8E A3", "9A A3", "8F 8A", "8F 84", "9B 80", "E2 9B B9", "8F 8B", "9A B4", "9A B5", "8F 87", "95 B4", "8F 86", "8E BD", "8F 85", "8E 96", "8E 97", "8F B5", "8E AB", "8E 9F", "8E AD", "8E A8", "8E AA", "8E A4", "8E A7", "8E BC", "8E B9", "8E B7", "8E BA", "8E B8", "8E BB", "8E AC", "8E AE", "91 BE", "8E AF", "8E B2", "8E B0", "8E B3", "9B 91", "9B 91", "9B 91", "9A 97", "9A 95", "9A 99", "9A 8C", "9A 8E", "8F 8E", "9A 93", "9A 91", "9A 92", "9A 90", "9A 9A", "9A 9B", "9A 9C","8F 8D", "9A B2", "9A A8", "9A 94", "9A 8D", "9A 98", "9A 96", "9A A1", "9A A0", "9A AF", "9A 83", "9A 8B", "9A 9D", "9A 84", "9A 85", "9A 88", "9A 9E", "9A 82", "9A 86", "9A 87", "9A 8A", "9A 89", "9A 81", "9B A9", "E2 9C 88 EF B8 8F", "9B AB", "9B AC", "E2 9B B5 EF B8 8F", "9B A5", "9A A4", "E2 9B B4", "9B B3", "9A 80", "9B B0", "92 BA", "E2 9A 93 EF B8 8F", "9A A7", "E2 9B BD EF B8 8F", "9A 8F", "9A A6", "9A A5", "8F 81", "9A A2", "8E A1", "8E A2", "8E A0", "8F 97", "8C 81", "97 BC", "8F AD", "E2 9B B2 EF B8 8F", "8E 91", "E2 9B B0", "8F 94", "97 BB", "8C 8B", "97 BE", "8F 95", "E2 9B BA EF B8 8F", "8F 9E", "9B A3", "9B A4", "8C 85", "8C 84", "8F 9C", "8F 96", "8F 9D", "8C 87", "8C 86", "8F 99", "8C 83", "8C 89", "8C 8C", "8C A0", "8E 87", "8E 86", "8C 88", "8F 98", "8F B0", "8F AF", "8F 9F", "97 BD", "8F A0", "8F A1", "8F 9A", "8F A2", "8F AC", "8F A3", "8F A4", "8F A5", "8F A6", "8F A8", "8F AA", "8F AB", "8F A9", "92 92", "8F 9B", "E2 9B AA EF B8 8F", "95 8C", "95 8D", "95 8B", "E2 9B A9", "E2 8C 9A EF B8 8F", "93 B1", "93 B2", "92 BB", "E2 8C A8 EF B8 8F", "96 A5", "96 A8", "96 B1", "96 B2", "95 B9", "97 9C", "92 BD", "92 BE", "92 BF", "93 80", "93 BC", "93 B7", "93 B8", "93 B9", "8E A5", "93 BD", "8E 9E", "93 9E", "E2 98 8E EF B8 8F", "93 9F", "93 A0", "93 BA", "93 BB", "8E 99", "8E 9A", "8E 9B", "E2 8F B1", "E2 8F B2", "E2 8F B0", "95 B0", "E2 8F B3", "E2 8C 9B EF B8 8F", "93 A1", "94 8B", "94 8C", "92 A1", "94 A6", "95 AF", "97 91", "9B A2", "92 B8", "92 B5", "92 B4", "92 B6", "92 B7", "92 B0", "92 B3", "92 8E", "E2 9A 96", "94 A7", "94 A8", "E2 9A 92", "9B A0", "E2 9B 8F", "94 A9", "E2 9A 99", "E2 9B 93", "94 AB", "92 A3", "94 AA", "97 A1", "E2 9A 94", "9B A1", "9A AC", "E2 98 A0 EF B8 8F", "E2 9A B0", "E2 9A B1", "8F BA", "94 AE", "93 BF", "92 88", "E2 9A 97", "94 AD", "94 AC", "95 B3", "92 8A", "92 89", "8C A1", "8F B7", "94 96", "9A BD", "9A BF", "9B 81", "94 91", "97 9D", "9B 8B", "9B 8C", "9B 8F", "9A AA", "9B 8E", "96 BC", "97 BA", "E2 9B B1", "97 BF", "9B 8D", "8E 88", "8E 8F", "8E 80", "8E 81", "8E 8A", "8E 89", "8E 8E", "8E 90", "8E 8C", "8F AE", "E2 9C 89 EF B8 8F", "93 A9", "93 A8", "93 A7", "92 8C", "93 AE", "93 AA", "93 AB", "93 AC", "93 AD", "93 A6", "93 AF", "93 A5", "93 A4", "93 9C", "93 83", "93 91", "93 8A", "93 88", "93 89", "93 84", "93 85", "93 86", "97 93", "93 87", "97 83", "97 B3", "97 84", "93 8B", "97 92", "93 81", "93 82", "97 82", "97 9E", "93 B0", "93 93", "93 95", "93 97", "93 98", "93 99", "93 94", "93 92", "93 9A", "93 96", "94 97", "93 8E", "96 87", "E2 9C 82 EF B8 8F", "93 90", "93 8F", "93 8C", "93 8D", "9A A9", "8F B3", "8F B4", "94 90", "94 92", "94 93", "94 8F", "96 8A", "96 8B", "E2 9C 92 EF B8 8F", "93 9D", "E2 9C 8F EF B8 8F", "96 8D", "96 8C", "94 8D", "94 8E", "9B 91", "9B 91", "E2 9D A4 EF B8 8F", "92 9B", "92 9A", "92 99", "92 9C", "92 94", "E2 9D A3 EF B8 8F", "92 95", "92 9E", "92 93", "92 97", "92 96", "92 98", "92 9D", "92 9F", "E2 98 AE EF B8 8F", "E2 9C 9D EF B8 8F", "E2 98 AA EF B8 8F", "95 89", "E2 98 B8 EF B8 8F", "E2 9C A1 EF B8 8F", "94 AF", "95 8E", "E2 98 AF EF B8 8F", "E2 98 A6 EF B8 8F", "9B 90", "E2 9B 8E", "E2 99 88 EF B8 8F", "E2 99 89 EF B8 8F", "E2 99 8A EF B8 8F", "E2 99 8B EF B8 8F", "E2 99 8C EF B8 8F", "E2 99 8D EF B8 8F", "E2 99 8E EF B8 8F", "E2 99 8F EF B8 8F", "E2 99 90 EF B8 8F", "E2 99 91 EF B8 8F", "E2 99 92 EF B8 8F", "E2 99 93 EF B8 8F", "86 94", "E2 9A 9B", "88 B3", "88 B9", "E2 98 A2 EF B8 8F", "E2 98 A3 EF B8 8F", "93 B4", "93 B3", "88 B6", "88 9A EF B8 8F", "88 B8", "88 BA", "88 B7 EF B8 8F", "E2 9C B4 EF B8 8F", "86 9A", "89 91", "92 AE", "89 90", "E3 8A 99 EF B8 8F", "E3 8A 97 EF B8 8F", "88 B4", "88 B5", "88 B2", "85 B0 EF B8 8F", "85 B1 EF B8 8F", "86 8E", "86 91", "85 BE EF B8 8F", "86 98", "E2 9B 94 EF B8 8F", "93 9B", "9A AB", "E2 9D 8C", "E2 AD 95 EF B8 8F", "92 A2", "E2 99 A8 EF B8 8F", "9A B7", "9A AF", "9A B3", "9A B1", "94 9E", "93 B5", "E2 9D 97 EF B8 8F", "E2 9D 95", "E2 9D 93", "E2 9D 94", "E2 80 BC EF B8 8F", "E2 81 89 EF B8 8F", "92 AF", "94 85", "94 86", "94 B1", "E2 9A 9C", "E3 80 BD EF B8 8F", "E2 9A A0 EF B8 8F", "9A B8", "94 B0", "E2 99 BB EF B8 8F", "88 AF EF B8 8F", "92 B9", "E2 9D 87 EF B8 8F", "E2 9C B3 EF B8 8F", "E2 9D 8E", "E2 9C 85", "92 A0", "8C 80", "E2 9E BF", "8C 90", "E2 93 82 EF B8 8F", "8F A7", "88 82 EF B8 8F", "9B 82", "9B 83", "9B 84", "9B 85", "E2 99 BF EF B8 8F", "9A AD", "9A BE", "85 BF EF B8 8F", "9A B0", "9A B9", "9A BA", "9A BC", "9A BB", "9A AE", "8E A6", "93 B6", "88 81", "86 96", "86 97", "86 99", "86 92", "86 95", "86 93", "30 EF B8 8F E2 83 A3", "31 EF B8 8F E2 83 A3", "32 EF B8 8F E2 83 A3", "33 EF B8 8F E2 83 A3", "34 EF B8 8F E2 83 A3", "35 EF B8 8F E2 83 A3", "36 EF B8 8F E2 83 A3", "37 EF B8 8F E2 83 A3", "38 EF B8 8F E2 83 A3", "39 EF B8 8F E2 83 A3", "94 9F", "94 A2", "E2 96 B6 EF B8 8F", "E2 8F B8", "E2 8F AF", "E2 8F B9", "E2 8F BA", "E2 8F AD", "E2 8F AE", "E2 8F A9", "E2 8F AA", "94 80", "94 81", "94 82", "E2 97 80 EF B8 8F", "94 BC", "94 BD", "E2 8F AB", "E2 8F AC", "E2 9E A1 EF B8 8F", "E2 AC 85 EF B8 8F", "E2 AC 86 EF B8 8F", "E2 AC 87 EF B8 8F", "E2 86 97 EF B8 8F", "E2 86 98 EF B8 8F", "E2 86 99 EF B8 8F", "E2 86 96 EF B8 8F", "E2 86 95 EF B8 8F", "E2 86 94 EF B8 8F", "94 84", "E2 86 AA EF B8 8F", "E2 86 A9 EF B8 8F", "E2 A4 B4 EF B8 8F", "E2 A4 B5 EF B8 8F", "23 EF B8 8F E2 83 A3", "2A EF B8 8F E2 83 A3", "E2 84 B9 EF B8 8F", "94 A4", "94 A1", "94 A0", "94 A3", "8E B5", "8E B6", "E3 80 B0 EF B8 8F", "E2 9E B0", "E2 9C 94 EF B8 8F", "94 83", "E2 9E 95", "E2 9E 96", "E2 9E 97", "E2 9C 96 EF B8 8F", "92 B2", "92 B1", "C2 A9 EF B8 8F", "C2 AE EF B8 8F", "E2 84 A2 EF B8 8F", "94 9A", "94 99", "94 9B", "94 9D", "94 9C", "E2 98 91 EF B8 8F", "94 98", "E2 9A AA EF B8 8F", "E2 9A AB EF B8 8F", "94 B4", "94 B5", "94 B8", "94 B9", "94 B6", "94 B7", "94 BA", "E2 96 AA EF B8 8F", "E2 96 AB EF B8 8F", "E2 AC 9B EF B8 8F", "E2 AC 9C EF B8 8F", "94 BB", "E2 97 BC EF B8 8F", "E2 97 BB EF B8 8F", "E2 97 BE EF B8 8F", "E2 97 BD EF B8 8F", "94 B2", "94 B3", "94 88", "94 89", "94 8A", "94 87", "93 A3", "93 A2", "94 94", "94 95", "83 8F", "80 84 EF B8 8F", "E2 99 A0 EF B8 8F", "E2 99 A3 EF B8 8F", "E2 99 A5 EF B8 8F", "E2 99 A6 EF B8 8F", "8E B4", "91 81 E2 80 8D F0 9F 97 A8", "92 AD", "97 AF", "92 AC", "95 90", "95 91", "95 92", "95 93", "95 94", "95 95", "95 96", "95 97", "95 98", "95 99", "95 9A", "95 9B", "95 9C", "95 9D", "95 9E", "95 9F", "95 A0", "95 A1", "95 A2", "95 A3", "95 A4", "95 A5", "95 A6", "95 A7", "9B 91", "87 A6 F0 9F 87 AB", "87 A6 F0 9F 87 BD", "87 A6 F0 9F 87 B1", "87 A9 F0 9F 87 BF", "87 A6 F0 9F 87 B8", "87 A6 F0 9F 87 A9", "87 A6 F0 9F 87 B4", "87 A6 F0 9F 87 AE", "87 A6 F0 9F 87 B6", "87 A6 F0 9F 87 AC", "87 A6 F0 9F 87 B7", "87 A6 F0 9F 87 B2", "87 A6 F0 9F 87 BC", "87 A6 F0 9F 87 BA", "87 A6 F0 9F 87 B9", "87 A6 F0 9F 87 BF", "87 A7 F0 9F 87 B8", "87 A7 F0 9F 87 AD", "87 A7 F0 9F 87 A9", "87 A7 F0 9F 87 A7", "87 A7 F0 9F 87 BE", "87 A7 F0 9F 87 AA", "87 A7 F0 9F 87 BF", "87 A7 F0 9F 87 AF", "87 A7 F0 9F 87 B2", "87 A7 F0 9F 87 B9", "87 A7 F0 9F 87 B4", "87 A7 F0 9F 87 B6", "87 A7 F0 9F 87 A6", "87 A7 F0 9F 87 BC", "87 A7 F0 9F 87 B7", "87 AE F0 9F 87 B4", "87 BB F0 9F 87 AC", "87 A7 F0 9F 87 B3", "87 A7 F0 9F 87 AC", "87 A7 F0 9F 87 AB", "87 A7 F0 9F 87 AE", "87 A8 F0 9F 87 BB", "87 B0 F0 9F 87 AD", "87 A8 F0 9F 87 B2", "87 A8 F0 9F 87 A6", "87 AE F0 9F 87 A8", "87 B0 F0 9F 87 BE", "87 A8 F0 9F 87 AB", "87 B9 F0 9F 87 A9", "87 A8 F0 9F 87 B1", "87 A8 F0 9F 87 B3", "87 A8 F0 9F 87 BD", "87 A8 F0 9F 87 A8", "87 A8 F0 9F 87 B4", "87 B0 F0 9F 87 B2", "87 A8 F0 9F 87 AC", "87 A8 F0 9F 87 A9", "87 A8 F0 9F 87 B0", "87 A8 F0 9F 87 B7", "87 AD F0 9F 87 B7", "87 A8 F0 9F 87 BA", "87 A8 F0 9F 87 BC", "87 A8 F0 9F 87 BE", "87 A8 F0 9F 87 BF", "87 A9 F0 9F 87 B0", "87 A9 F0 9F 87 AF", "87 A9 F0 9F 87 B2", "87 A9 F0 9F 87 B4", "87 AA F0 9F 87 A8", "87 AA F0 9F 87 AC", "87 B8 F0 9F 87 BB", "87 AC F0 9F 87 B6", "87 AA F0 9F 87 B7", "87 AA F0 9F 87 AA", "87 AA F0 9F 87 B9", "87 AA F0 9F 87 BA", "87 AB F0 9F 87 B0", "87 AB F0 9F 87 B4", "87 AB F0 9F 87 AF", "87 AB F0 9F 87 AE", "87 AB F0 9F 87 B7", "87 AC F0 9F 87 AB", "87 B5 F0 9F 87 AB", "87 B9 F0 9F 87 AB", "87 AC F0 9F 87 A6", "87 AC F0 9F 87 B2", "87 AC F0 9F 87 AA", "87 A9 F0 9F 87 AA", "87 AC F0 9F 87 AD", "87 AC F0 9F 87 AE", "87 AC F0 9F 87 B7", "87 AC F0 9F 87 B1", "87 AC F0 9F 87 A9", "87 AC F0 9F 87 B5", "87 AC F0 9F 87 BA", "87 AC F0 9F 87 B9", "87 AC F0 9F 87 AC", "87 AC F0 9F 87 B3", "87 AC F0 9F 87 BC", "87 AC F0 9F 87 BE", "87 AD F0 9F 87 B9", "87 AD F0 9F 87 B3", "87 AD F0 9F 87 B0", "87 AD F0 9F 87 BA", "87 AE F0 9F 87 B8", "87 AE F0 9F 87 B3", "87 AE F0 9F 87 A9", "87 AE F0 9F 87 B7", "87 AE F0 9F 87 B6", "87 AE F0 9F 87 AA", "87 AE F0 9F 87 B2", "87 AE F0 9F 87 B1", "87 AE F0 9F 87 B9", "87 A8 F0 9F 87 AE", "87 AF F0 9F 87 B2", "87 AF F0 9F 87 B5", "87 AF F0 9F 87 AA", "87 AF F0 9F 87 B4", "87 B0 F0 9F 87 BF", "87 B0 F0 9F 87 AA", "87 B0 F0 9F 87 AE", "87 BD F0 9F 87 B0", "87 B0 F0 9F 87 BC", "87 B0 F0 9F 87 AC", "87 B1 F0 9F 87 A6", "87 B1 F0 9F 87 BB", "87 B1 F0 9F 87 A7", "87 B1 F0 9F 87 B8", "87 B1 F0 9F 87 B7", "87 B1 F0 9F 87 BE", "87 B1 F0 9F 87 AE", "87 B1 F0 9F 87 B9", "87 B1 F0 9F 87 BA", "87 B2 F0 9F 87 B4", "87 B2 F0 9F 87 B0", "87 B2 F0 9F 87 AC", "87 B2 F0 9F 87 BC", "87 B2 F0 9F 87 BE", "87 B2 F0 9F 87 BB", "87 B2 F0 9F 87 B1", "87 B2 F0 9F 87 B9", "87 B2 F0 9F 87 AD", "87 B2 F0 9F 87 B6", "87 B2 F0 9F 87 B7", "87 B2 F0 9F 87 BA", "87 BE F0 9F 87 B9", "87 B2 F0 9F 87 BD", "87 AB F0 9F 87 B2", "87 B2 F0 9F 87 A9", "87 B2 F0 9F 87 A8", "87 B2 F0 9F 87 B3", "87 B2 F0 9F 87 AA", "87 B2 F0 9F 87 B8", "87 B2 F0 9F 87 A6", "87 B2 F0 9F 87 BF", "87 B2 F0 9F 87 B2", "87 B3 F0 9F 87 A6", "87 B3 F0 9F 87 B7", "87 B3 F0 9F 87 B5", "87 B3 F0 9F 87 B1", "87 B3 F0 9F 87 A8", "87 B3 F0 9F 87 BF", "87 B3 F0 9F 87 AE", "87 B3 F0 9F 87 AA", "87 B3 F0 9F 87 AC", "87 B3 F0 9F 87 BA", "87 B3 F0 9F 87 AB", "87 B2 F0 9F 87 B5", "87 B0 F0 9F 87 B5", "87 B3 F0 9F 87 B4", "87 B4 F0 9F 87 B2", "87 B5 F0 9F 87 B0", "87 B5 F0 9F 87 BC", "87 B5 F0 9F 87 B8", "87 B5 F0 9F 87 A6", "87 B5 F0 9F 87 AC", "87 B5 F0 9F 87 BE", "87 B5 F0 9F 87 AA", "87 B5 F0 9F 87 AD", "87 B5 F0 9F 87 B3", "87 B5 F0 9F 87 B1", "87 B5 F0 9F 87 B9", "87 B5 F0 9F 87 B7", "87 B6 F0 9F 87 A6", "87 B7 F0 9F 87 AA", "87 B7 F0 9F 87 B4", "87 B7 F0 9F 87 BA", "87 B7 F0 9F 87 BC", "87 A7 F0 9F 87 B1", "87 B8 F0 9F 87 AD", "87 B0 F0 9F 87 B3", "87 B1 F0 9F 87 A8", "87 B5 F0 9F 87 B2", "87 BB F0 9F 87 A8", "87 BC F0 9F 87 B8", "87 B8 F0 9F 87 B2", "87 B8 F0 9F 87 B9", "87 B8 F0 9F 87 A6", "87 B8 F0 9F 87 B3", "87 B7 F0 9F 87 B8", "87 B8 F0 9F 87 A8", "87 B8 F0 9F 87 B1", "87 B8 F0 9F 87 AC", "87 B8 F0 9F 87 BD", "87 B8 F0 9F 87 B0", "87 B8 F0 9F 87 AE", "87 B8 F0 9F 87 A7", "87 B8 F0 9F 87 B4", "87 BF F0 9F 87 A6", "87 AC F0 9F 87 B8", "87 B0 F0 9F 87 B7", "87 B8 F0 9F 87 B8", "87 AA F0 9F 87 B8", "87 B1 F0 9F 87 B0", "87 B8 F0 9F 87 A9", "87 B8 F0 9F 87 B7", "87 B8 F0 9F 87 BF", "87 B8 F0 9F 87 AA", "87 A8 F0 9F 87 AD", "87 B8 F0 9F 87 BE", "87 B9 F0 9F 87 BC", "87 B9 F0 9F 87 AF", "87 B9 F0 9F 87 BF", "87 B9 F0 9F 87 AD", "87 B9 F0 9F 87 B1", "87 B9 F0 9F 87 AC", "87 B9 F0 9F 87 B0", "87 B9 F0 9F 87 B4", "87 B9 F0 9F 87 B9", "87 B9 F0 9F 87 B3", "87 B9 F0 9F 87 B7", "87 B9 F0 9F 87 B2", "87 B9 F0 9F 87 A8", "87 B9 F0 9F 87 BB", "87 BA F0 9F 87 AC", "87 BA F0 9F 87 A6", "87 A6 F0 9F 87 AA", "87 AC F0 9F 87 A7", "87 BA F0 9F 87 B8", "87 BB F0 9F 87 AE", "87 BA F0 9F 87 BE", "87 BA F0 9F 87 BF", "87 BB F0 9F 87 BA", "87 BB F0 9F 87 A6", "87 BB F0 9F 87 AA", "87 BB F0 9F 87 B3", "87 BC F0 9F 87 AB", "87 AA F0 9F 87 AD", "87 BE F0 9F 87 AA", "87 BF F0 9F 87 B2", "87 BF F0 9F 87 BC"]
	emojisArray = []
	freqEmojisArray = []
	for em in rawEmojis
		emojisArray.push emojiFormatter(em)

	
	frequentlyUsedEmojisRaw = ["92 85", "91 84", "91 85", "91 82", "91 83","92 85", "91 84", "91 85", "91 82", "91 83","92 85", "91 84", "91 85", "91 82", "91 83","92 85", "91 84", "91 85", "91 82", "91 83","92 85", "91 84", "91 85", "91 82", "91 83",]
	for em in frequentlyUsedEmojisRaw
		freqEmojisArray.push emojiFormatter(em)

	# emojiKey.on Events.TouchStart, ->
	# 	emojiKey.backgroundColor = "white"
	# 	emojiBG = new Layer backgroundColor:"#ECEEF1"
	# 	box = exports.px(30)
	# 	emojiBG.constraints = (trailing:1, leading:1, bottom:1, height:258)
	# 	exports.layout()
	# 	emojiGalley = new ScrollComponent superLayer:emojiBG, width:emojiBG.width, height:emojiBG.height - exports.px(40)
	# 	emojiGalley.speedY = 0 
	# 	emojiSpacer = exports.px(6)
	# 	emojiPicker = new Layer backgroundColor:"transparent", name:"emoji picker", superLayer:emojiBG
	# 	emojiPicker.constraints = 
	# 		leading:1
	# 		trailing:1
	# 		bottom:1
	# 		height:42
	# 	ABC = new Layer backgroundColor:"transparent", superLayer:emojiPicker
	# 	ABC.html = "ABC"
	# 	ABC.style = {
	# 		"font-size" : exports.px(15) + "px"
	# 		"font-weight" : 500
	# 		"font-family" : '-apple-system, Helvetica, Arial, sans-serif'
	# 		"color" : "#4F555D"
	# 	}
	# 	ABC.constraints = 
	# 		leading:12
	# 		bottom:14
	# 		width:30
	# 		height:15

	# 	exports.layout()
	# 	row = -1
	# 	ABC.on Events.Click, ->
	# 		emojiBG.destroy()
	# 	frequent = new Layer superLayer:emojiPicker, backgroundColor:"transparent"
	# 	frequent.html = iconLibrary.frequent
	# 	frequent.constraints = 
	# 		leading : [ABC, 15]
	# 		bottom: 14
	# 		width:16
	# 		height:20
	# 	exports.layout()
	# 	smileys = new Layer superLayer:emojiPicker, backgroundColor:"transparent", opacity:.4
	# 	smileys.html = iconLibrary.smileys
	# 	smileys.constraints =
	# 		leading : [frequent, 15]
	# 		bottom: 14
	# 		width:16
	# 		height:20
	# 	exports.layout()
	# 	animals = new Layer superLayer:emojiPicker, backgroundColor:"transparent", opacity:.4
	# 	animals.html = iconLibrary.animals
	# 	animals.constraints =
	# 		leading : [smileys, 15]
	# 		bottom: 14
	# 		width:16
	# 		height:20
	# 	exports.layout()
	# 	food = new Layer superLayer:emojiPicker, backgroundColor:"transparent", opacity:.4
	# 	food.html = iconLibrary.food
	# 	food.constraints =
	# 		leading : [animals, 15]
	# 		bottom: 14
	# 		width:16
	# 		height:20
	# 	exports.layout()
	# 	activity = new Layer superLayer:emojiPicker, backgroundColor:"transparent", opacity:.4
	# 	activity.html = iconLibrary.activity
	# 	activity.constraints =
	# 		leading : [food, 15]
	# 		bottom: 14
	# 		width:16
	# 		height:20
	# 	exports.layout()
	# 	travel = new Layer superLayer:emojiPicker, backgroundColor:"transparent", opacity:.4
	# 	travel.html = iconLibrary.travel
	# 	travel.constraints =
	# 		leading : [activity, 15]
	# 		bottom: 14
	# 		width:16
	# 		height:20
	# 	exports.layout()
	# 	objects = new Layer superLayer:emojiPicker, backgroundColor:"transparent", opacity:.4
	# 	objects.html = iconLibrary.objects
	# 	objects.constraints =
	# 		leading : [travel, 15]
	# 		bottom: 14
	# 		width:16
	# 		height:20
	# 	exports.layout()
	# 	symbols = new Layer superLayer:emojiPicker, backgroundColor:"transparent", opacity:.4
	# 	symbols.html = iconLibrary.symbols
	# 	symbols.constraints =
	# 		leading : [objects, 15]
	# 		bottom: 14
	# 		width:16
	# 		height:20
	# 	exports.layout()
	# 	flags = new Layer superLayer:emojiPicker, backgroundColor:"transparent", opacity:.4
	# 	flags.html = iconLibrary.flags
	# 	flags.constraints =
	# 		leading : [symbols, 15]
	# 		bottom: 14
	# 		width:16
	# 		height:20
	# 	exports.layout()

	# 	loadEmojis = (em) ->
	# 		row++ 
	# 		index = emojisArray.indexOf(em)
	# 		col = Math.floor(index/5)
	# 		if row > 4
	# 			row = 0 
	# 		emoji = new Layer x:col*box + (emojiSpacer * col) + exports.px(3), y:row*box + (emojiSpacer * row) + exports.px(40), superLayer:emojiGalley.content, width:box, height:box, name:decodeURIComponent(em), backgroundColor:"transparent"
	# 		emoji.html = decodeURIComponent(em)
	# 		emoji.style = {
	# 			"font-size" : exports.px(26) + "px"
	# 			"line-height" : box + "px"
	# 			"text-align" : "center"
	# 		}
	# 		emoji.on Events.Click, ->
	# 			print @.name
	# 		emojisLoaded++
	# 		print emojisLoaded

	# 	inc = 200
	# 	firstLoad = .1
	# 	timeInc = 2
	# 	fullAmount = emojisArray.length
	# 	loads = Math.ceil(fullAmount / inc) - 1
	# 	partialAmount = fullAmount % inc
	# 	emojisLoaded = 0
	# 	for i in [0..loads]
	# 		i++
			
	# 	#Scroll Load
	# 	emojiGalley.on Events.Move, ->
	# 		if emojiGalley.scrollX > 2000 && emojisLoaded < 400
	# 			for em in emojisArray[200...400]
	# 				loadEmojis(em)
	# 			emojiGalley.scrollX = 2001
	# 		if emojiGalley.scrollX > 5000 && emojisLoaded < 600
	# 			for em in emojisArray[400...600]
	# 				loadEmojis(em)
	# 			emojiGalley.scrollX = 5001
	# 		if emojiGalley.scrollX > 7500 && emojisLoaded < 800
	# 			for em in emojisArray[600...800]
	# 				loadEmojis(em)
	# 			emojiGalley.scrollX = 7501
	# 		if emojiGalley.scrollX > 10000 && emojisLoaded < 1000
	# 			for em in emojisArray[800...1000]
	# 				loadEmojis(em)
	# 			emojiGalley.scrollX = 10001
	# 		if emojiGalley.scrollX > 12500 && emojisLoaded < 1200
	# 			for em in emojisArray[1000...1297]
	# 				loadEmojis(em)
	# 			emojiGalley.scrollX = 12501

	# 	#Time Load
	# 	Utils.delay 1, -> 
	# 		if emojisLoaded < 400 && emojiGalley.scrollX == 0
	# 			scrollX = emojiGalley.scrollX
	# 			for em in emojisArray[200...400]
	# 				loadEmojis(em)
	# 	Utils.delay 2.5, -> 
	# 		if emojisLoaded < 600 && emojiGalley.scrollX == 0
	# 			scrollX = emojiGalley.scrollX
	# 			for em in emojisArray[400...600]
	# 				loadEmojis(em)
	# 	Utils.delay 2.5, -> 
	# 		if emojisLoaded < 800 && emojiGalley.scrollX == 0
	# 			scrollX = emojiGalley.scrollX
	# 			for em in emojisArray[600...800]
	# 				loadEmojis(em)
	# 	Utils.delay 5.5, -> 
	# 		if emojisLoaded < 1000 && emojiGalley.scrollX == 0
	# 			scrollX = emojiGalley.scrollX
	# 			for em in emojisArray[800...1000]
	# 				loadEmojis(em)
	# 	Utils.delay 7, -> 
	# 		if emojisLoaded < 1297 && emojiGalley.scrollX == 0
	# 			scrollX = emojiGalley.scrollX
	# 			for em in emojisArray[1000...1297]
	# 				loadEmojis(em)


	# 	for em in freqEmojisArray
	# 		loadEmojis(em)
	# 	for em in emojisArray[0...inc]
	# 		loadEmojis(em)


	# 	for sec in emojiSections
	# 		index = emojiSections.indexOf(sec)
	# 		title = new Layer superLayer:emojiGalley.content, backgroundColor:"transparent", x:index*5000 + exports.px(8), height:80, width:800
	# 		title.html = sec
	# 		title.style = {
	# 			"font-size" : exports.px(12) + "px"
	# 			"font-weight" : 600
	# 			"font-family" : '-apple-system, Helvetica, Arial, sans-serif'
	# 			'line-height' : exports.px(42) + "px"
	# 			'letter-spacing' : exports.px(0.7) + "px"
	# 			'color' : "#A5A6A9"
	# 			'text-transform' : 'uppercase'
	# 		}


	# emojiKey.on Events.TouchEnd, ->
	# 	emojiKey.backgroundColor = exports.color("light-key")



	return board

exports.Sheet = (array) ->
	setup = setupComponent("sheet", array)
	sheet = new Layer backgroundColor:"transparent"
	sheet.constraints = 
		leading:0
		trailing:0
		top:0
		bottom:0
	overlay = new Layer backgroundColor:"rgba(0, 0, 0, .4)", superLayer:sheet, name:"overlay"
	overlay.constraints =
		leading:0
		trailing:0
		top:0
		bottom:0
	sheets = new Layer backgroundColor:"transparent", superLayer:sheet
	sheets.constraints = 
		leading:0
		trailing:0
		top:0
		bottom:0
	exitButton = new exports.Button buttonType:"big", text:setup.exit, blur:false, superLayer:sheets
	exitButton.constraints = 
		bottom:10
		align:"horizontal"

	actions = new Layer superLayer:sheets, borderRadius:exports.px(12.5), backgroundColor:"rgba(255,255,255, .85)"

	descriptionBuffer = 0
	if setup.description
		description = new exports.Text style:"sheetDescription", text:setup.description, superLayer:actions, fontSize:13, color:"#8F8E94", textAlign:"center"
		description.constraints = 
			top:21
			align:"horizontal"
			width:exports.pt(exports.width) - 100
		exports.layout()
		descriptionBuffer = exports.pt(description.height) + 42
		divider = new Layer superLayer:actions, backgroundColor:"#D6E3E7"
		divider.constraints =
			height:1
			top:descriptionBuffer
			leading:0
			trailing:0
	exports.bgBlur(actions)
	actions.constraints = 
		leading:10
		trailing:10
		bottom:[exitButton, 10]
		height:58 * setup.actions.length + descriptionBuffer
	exports.layout()
	acts = {}
	for act, index in setup.actions
		o = new Layer superLayer:actions, width:actions.width, backgroundColor:"transparent", borderRadius:exports.px(12.5)
		o.constraints = 
			top:index * 58 + descriptionBuffer
			height:58
		button = new exports.Button text:act, superLayer:o, fontSize:20
		specialChar(button)
		button.constraints =
			align:"center"
		button.color = "#FE3824"
		if index != setup.actions.length - 1
			divider = new Layer superLayer:o, width:actions.width, backgroundColor:"#D6E3E7"
			divider.constraints =
				height:1
				bottom:0
		exports.layout()
		o.on Events.TouchStart, ->
			backgroundColor = "rgba(215,215,215,.7)"
			@.animate
				properties: (backgroundColor: backgroundColor)
				time:.5
		o.on Events.TouchEnd, ->
			@.animate
				properties:(backgroundColor:"transparent")
				time:.5
			sheets.animate 
				properties: (maxY:exports.height+exports.px((setup.actions.length + 3) * 58))
				time:.3
			overlay.animate
				properties: (opacity:0)
				time:.3
			Utils.delay .3, ->
				sheet.destroy()
		acts[act] = o

	if setup.animated == true
		overlay.opacity = 0 
		sheets.maxY = exports.height + exports.px((setup.actions.length + 3) * 58)
		overlay.animate
			properties:(opacity:1)
			time:.3
		sheets.animate
			properties:(maxY:exports.height)
			time:.3

	overlay.on Events.TouchEnd, ->
		sheets.animate 
			properties: (maxY:exports.height+exports.px((setup.actions.length + 3) * 58))
			time:.3
		overlay.animate
			properties: (opacity:0)
			time:.3
		Utils.delay .3, ->
			sheet.destroy()		

	exitButton.on Events.TouchEnd, ->
		sheets.animate 
			properties: (maxY:exports.height+exports.px((setup.actions.length + 3) * 58))
			time:.3
		overlay.animate
			properties: (opacity:0)
			time:.3
		Utils.delay .3, ->
			sheet.destroy()

	sheet.cancel = exitButton
	sheet.description = description
	sheet.overlay = overlay
	sheet.actions = acts
	return sheet

exports.NavBar = (array) ->
	setup = setupComponent("navBar", array)
	bar = new Layer name:"navbar"
	barArea = new Layer superLayer:bar, backgroundColor:"transparent"
	divider = new Layer backgroundColor:"#B2B2B2", name:"nav divider", superLayer:barArea
	if setup.superLayer 
		setup.superLayer.addSubLayer(bar)
	divider.constraints =
		height:.5
		bottom:0
		leading:0
		trailing:0
	if setup.blur 
		bar.backgroundColor = "rgba(255, 255, 255, .8)"
		exports.bgBlur(bar)
	else
		bar.backgroundColor = "rgba(255, 255, 255, 1)"
		exports.bgBlur(bar)
	bar.type = setup.type
	barArea.constraints =
		leading:0
		trailing:0
		height:44
		bottom:0
	bar.constraints = 
		leading:0
		trailing:0
		top:0
		height:64
	for layer in Framer.CurrentContext.layers
		if layer.type == "statusBar"
			@statusBar = layer
			bar.placeBehind(@statusBar)

	if typeof setup.title == "string"
		title = new exports.Text style:"navBarTitle", fontWeight:"semibold", superLayer:barArea, text:setup.title
	if typeof setup.title == "object" 
		title = new exports.Text style:"navBarTitle", fontWeight:"semibold", superLayer:barArea, text:setup.title.label.html
		bar.superLayer = setup.title.view
	specialChar(title)
	title.constraints = 
		align:"horizontal"
		bottom:12

	# Handle Right
	if typeof setup.right == "string" && typeof setup.right != "boolean"
		bar.right = new exports.Button superLayer:barArea, text:setup.right, fontWeight:500, constraints:{bottom:12, trailing:8}
		bar.right.type = "button"
		specialChar(bar.right)
	if typeof setup.right == "object"
		bar.right = setup.right
		bar.right.superLayer = barArea
		bar.right.constraints = {
			trailing:8
			bottom:12
		}

	# Handle Left
	if typeof setup.left == "string" && typeof setup.left != "boolean"
		leading = 8
		if setup.left.indexOf("<") != -1
			svg = exports.svg(iconLibrary.chevron)
			bar.chevron = new Layer width:svg.width, height:svg.height, backgroundColor:"transparent", superLayer:barArea
			bar.chevron.html = svg.svg
			bar.chevron.constraints = {bottom:9, leading:8}
			setup.left = setup.left.replace("<", "")
			leading = [bar.chevron, 4]

		bar.left = new exports.Button superLayer:barArea, text:setup.left, fontWeight:500, constraints:{bottom:12, leading:leading}
		
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




	exports.layout()
	return bar

exports.Tab = (array) ->
	setup = setupComponent("tab", array)
	switch exports.device 
		when "iphone-5"
			@tabWidth = 55
		else
			@tabWidth = 75
	tabView = new Layer name:setup.label + " view", backgroundColor:"transparent"
	tabView.constraints = 
		leading:0
		trailing:0
		top:0
		bottom:0
	tabBox = new Layer backgroundColor:"transparent", name:setup.label + " tab"
	tabBox.constraints =
		width:@tabWidth
		height:49
	icon = new Layer width:exports.px(25), height:exports.px(25), backgroundColor:"transparent", name:"icon", superLayer:tabBox
	icon.constraints =
		align:"horizontal"
		top:7
	svgFrame = exports.svg(setup.icon)
	icon.html = svgFrame.svg
	icon.width = svgFrame.width
	icon.height = svgFrame.height
	label = new exports.Text text:setup.label, superLayer:tabBox, color:"#929292", fontSize:10, name:"label", textTransform:"capitalize"
	label.constraints = 
		bottom:2
		horizontalCenter:icon
	exports.layout()

	# Export Tab
	tabBox.type = "tab"
	tabBox.icon = icon
	tabBox.view = tabView
	tabBox.label = label

	return tabBox

exports.TabBar = (array) ->
	setup = setupComponent("tabBar", array)
	if setup.tabs.length == 0
		dummyTab = new exports.Tab
		dummyTab2 = new exports.Tab
		setup.tabs.push dummyTab
		setup.tabs.push dummyTab2
	tabWidth = 75
	switch exports.device 
		when "iphone-5"
			tabWidth = 55
		else
			tabWidth = 75
	tabBar = new Layer backgroundColor:"transparent", name:"tab bar"
	tabBarBG = new BackgroundLayer superLayer:tabBar, name:"tabBar background"
	tabBar.constraints =
		leading:0
		trailing:0
		bottom:0
		height:49
	tabBarBG.constraints =
		leading:0
		trailing:0
		bottom:0
		height:49
	divider = new Layer backgroundColor:"#B2B2B2", name:"tabDivider", superLayer:tabBar
	divider.constraints = 
		top:0
		leading:0
		trailing:0
		height:.5
	tabBarBox = new Layer superLayer:tabBar, backgroundColor:"transparent", name:"tabBar box"
	tabBarBox.constraints = 
		height:49
		width:setup.tabs.length * tabWidth

	exports.layout()

	setActive = (tabIndex) ->
		for tab, index in setup.tabs
			if index == tabIndex
				exports.changeFill(tab.icon, exports.color(setup.activeColor))
				tab.label.color = exports.color(setup.activeColor)
				tab.view.visible = true
			else
				exports.changeFill(tab.icon, exports.color(setup.inactiveColor))
				tab.label.color = exports.color(setup.inactiveColor)
				tab.view.visible = false

	for tab, index in setup.tabs
		#Check for vaild tab object
		if tab.type != "tab"
			error(tab.id, 5)

		tabBarBox.addSubLayer(tab)
		# Change colors
		exports.changeFill(tab.icon, exports.color(setup.inactiveColor))
		tab.label.color = exports.color(setup.inactiveColor)
		tabBarBG.backgroundColor = setup.backgroundColor
		if setup.blur
			tabBarBG.backgroundColor = "rgba(255,255,255, .9)"
			exports.bgBlur(tabBarBG)

		if index != 0
			tab.constraints = 
				leading:setup.tabs[index - 1]
			exports.layout()

		tab.on Events.TouchStart, ->
			tabIndex = @.x / exports.px(tabWidth)
			setActive(tabIndex)
	tabBarBox.constraints =
		align:"horizontal"

	setActive(setup.start)	

	exports.layout()
	return tabBar

exports.Text = (array) ->
	setup = setupComponent("text", array)
	exceptions = Object.keys(setup)
	textLayer = new Layer backgroundColor:"transparent", name:setup.name
	textLayer.type = "text"
	textLayer.html = setup.text
	for prop in defaults.framerProps
		if setup[prop]
			if prop == "color"
				setup[prop] = exports.color(setup[prop])
			textLayer[prop] = setup[prop]
	for prop in defaults.styleProps
		if setup[prop]
			if prop == "lineHeight" && setup[prop] == "auto"
				setup[prop] =  setup["fontSize"]
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
			if setup[prop] == parseInt(setup[prop], 10) && setup[prop] < 99
				setup[prop] = exports.px(setup[prop]) + "px"
			textLayer.style[prop] = setup[prop]
	textFrame = textAutoSize(textLayer)
	textLayer.props = (height:textFrame.height, width:textFrame.width)
	textLayer.constraints = setup.constraints
	exports.layout()
	return textLayer

iconLibrary = {
	activity: "<?xml version='1.0' encoding='UTF-8' standalone='no'?>
			<svg width='#{exports.px(16)}px' height='#{exports.px(16)}px' viewBox='0 0 16 16' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'>
				<!-- Generator: Sketch 3.5.2 (25235) - http://www.bohemiancoding.com/sketch -->
				<title>Soccer Ball</title>
				<desc>Created with Sketch.</desc>
				<defs>
					<circle id='path-1' cx='8' cy='8' r='8'></circle>
				</defs>
				<g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'>
					<g id='iPhone-6' sketch:type='MSArtboardGroup' transform='translate(-179.000000, -639.000000)'>
						<g id='Soccer-Ball' sketch:type='MSLayerGroup' transform='translate(179.000000, 639.000000)'>
							<mask id='mask-2' sketch:name='Mask' fill='white'>
								<use xlink:href='#path-1'></use>
							</mask>
							<use id='Mask' stroke='#4A5361' sketch:type='MSShapeGroup' xlink:href='#path-1'></use>
							<path d='M6,12.1203046 L12.8573384,8 L13.3723765,8.8571673 L6.51503807,12.9774719 L6,12.1203046 L6,12.1203046 Z' id='Rectangle-47' fill='#4A5361' sketch:type='MSShapeGroup' mask='url(#mask-2)'></path>
							<path d='M11.849648,8.7260551 L19.1001103,5.34510901 L19.5227285,6.2514168 L12.2722662,9.63236289 L11.849648,8.7260551 L11.849648,8.7260551 Z' id='Rectangle-47-Copy-3' fill='#4A5361' sketch:type='MSShapeGroup' mask='url(#mask-2)'></path>
							<path d='M6,3.1203046 L12.8573384,-1 L13.3723765,-0.142832699 L6.51503807,3.9774719 L6,3.1203046 L6,3.1203046 Z' id='Rectangle-47-Copy-2' fill='#4A5361' sketch:type='MSShapeGroup' mask='url(#mask-2)'></path>
							<path d='M-1,7.1203046 L5.85733841,3 L6.37237648,3.8571673 L-0.484961925,7.9774719 L-1,7.1203046 L-1,7.1203046 Z' id='Rectangle-47-Copy-4' fill='#4A5361' sketch:type='MSShapeGroup' mask='url(#mask-2)'></path>
							<rect id='Rectangle-50' fill='#4A5361' sketch:type='MSShapeGroup' mask='url(#mask-2)' x='4' y='6' width='1' height='5'></rect>
							<rect id='Rectangle-51' fill='#4A5361' sketch:type='MSShapeGroup' mask='url(#mask-2)' x='11.5' y='3' width='1' height='12'></rect>
							<path d='M5,4.8571673 L11.8573384,8.9774719 L12.3723765,8.1203046 L5.51503807,4 L5,4.8571673' id='Rectangle-47-Copy' fill='#4A5361' sketch:type='MSShapeGroup' mask='url(#mask-2)'></path>
							<path d='M5,12.8571673 L11.8573384,16.9774719 L12.3723765,16.1203046 L5.51503807,12 L5,12.8571673' id='Rectangle-47-Copy-5' fill='#4A5361' sketch:type='MSShapeGroup' mask='url(#mask-2)'></path>
							<path d='M11.9048972,6.14766064 L13.8714227,8.33170849 L12.4019596,10.8768933 L9.52725589,10.2658562 L9.22005445,7.34302965 L11.9048972,6.14766064' id='Polygon-1' fill='#D8D8D8' sketch:type='MSShapeGroup' mask='url(#mask-2)'></path>
							<path d='M11.9048972,6.14766064 L13.8714227,8.33170849 L12.4019596,10.8768933 L9.52725589,10.2658562 L9.22005445,7.34302965 L11.9048972,6.14766064' id='Polygon-1-Copy' fill='#4A5361' sketch:type='MSShapeGroup' mask='url(#mask-2)'></path>
							<path d='M7.45771189,3.19504739 L7.35514484,6.13218333 L4.5300676,6.9422612 L2.88664089,4.5057809 L4.69602457,2.18987541 L7.45771189,3.19504739' id='Polygon-1-Copy-2' fill='#4A5361' sketch:type='MSShapeGroup' mask='url(#mask-2)'></path>
							<path d='M7.45771189,11.1950474 L7.35514484,14.1321833 L4.5300676,14.9422612 L2.88664089,12.5057809 L4.69602457,10.1898754 L7.45771189,11.1950474' id='Polygon-1-Copy-3' fill='#4A5361' sketch:type='MSShapeGroup' mask='url(#mask-2)'></path>
							<path d='M14.5431701,0.0725939314 L14.4406031,3.00972988 L11.6155258,3.81980774 L9.97209912,1.38332745 L11.7814828,-0.93257805 L14.5431701,0.0725939314' id='Polygon-1-Copy-4' fill='#4A5361' sketch:type='MSShapeGroup' mask='url(#mask-2)'></path>
						</g>
					</g>
				</g>
			</svg>"
	animals: "<?xml version='1.0' encoding='UTF-8' standalone='no'?>
			<svg width='#{exports.px(17)}px' height='#{exports.px(16)}px' viewBox='0 0 17 17' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'>
				<!-- Generator: Sketch 3.5.2 (25235) - http://www.bohemiancoding.com/sketch -->
				<title>Group</title>
				<desc>Created with Sketch.</desc>
				<defs></defs>
				<g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'>
					<g id='iPhone-6' sketch:type='MSArtboardGroup' transform='translate(-117.000000, -639.000000)' stroke='#4A5361'>
						<g id='ic_Food' sketch:type='MSLayerGroup' transform='translate(118.000000, 640.000000)'>
							<g id='Group' sketch:type='MSShapeGroup'>
								<path d='M5.68377537,1.38156646 C6.23926066,1.13624 6.85372005,1 7.5,1 C8.14627995,1 8.76073934,1.13624 9.31622463,1.38156646 C9.80879275,0.562359019 10.8255888,0 12,0 C13.6568542,0 15,1.11928813 15,2.5 C15,3.5571398 14.2126246,4.46102843 13.0999226,4.82662514 C14.2496528,5.64185422 15,6.98330062 15,8.5 C15,10.7167144 13.3971873,12.5590719 11.2872671,12.9313673 C10.4867248,14.1757703 9.08961696,15 7.5,15 C5.91038304,15 4.51327524,14.1757703 3.71273291,12.9313673 C1.60281268,12.5590719 0,10.7167144 0,8.5 C0,6.98330062 0.750347244,5.64185422 1.90007741,4.82662514 C0.787375445,4.46102843 0,3.5571398 0,2.5 C0,1.11928813 1.34314575,0 3,0 C4.17441122,0 5.19120725,0.562359019 5.68377537,1.38156646 Z' id='Oval-8'></path>
								<path d='M5.73834228,12 C5.86290979,12 6.14642353,12 6.14642353,12 C6.14642353,12 6.43215696,12.4426123 6.5246582,12.4919739 C6.66455601,12.5666277 7,12.4919739 7,12.4919739 L7,12 L8,12 L8,12.4919739 L8.49799228,12.4919739 L8.84301769,12 L9.3918457,12 C9.3918457,12 8.99598457,12.9839478 8.49799228,12.9839478 L6.60702407,12.9839478 C6.21404813,12.9839478 5.45996094,12 5.73834228,12 Z' id='Rectangle-44-Copy-2'></path>
								<circle id='Oval-14' cx='10.5' cy='7.5' r='0.5'></circle>
								<circle id='Oval-14-Copy' cx='4.5' cy='7.5' r='0.5'></circle>
								<path d='M12.6999969,5 C12.6999969,3.06700338 11.1329936,1.5 9.19999695,1.5' id='Oval-16'></path>
								<path d='M5.5,5 C5.5,3.06700338 3.93299662,1.5 2,1.5' id='Oval-16-Copy' transform='translate(3.750000, 3.250000) scale(-1, 1) translate(-3.750000, -3.250000) '></path>
								<rect id='Rectangle-44-Copy' x='7' y='11' width='1' height='1'></rect>
								<path d='M6,10 L6.5,10 L6.49999999,9.5 L8.50000005,9.5 L8.50000005,10 L9,10 L9,10.5 L8.5,10.5 L8.5,11 L6.5,11 L6.5,10.5 L6,10.5 L6,10 Z' id='Path'></path>
							</g>
						</g>
					</g>
				</g>
			</svg>"
	chevron : "<?xml version='1.0' encoding='UTF-8' standalone='no'?>
		<svg width='13px' height='22px' viewBox='0 0 13 22' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>
		    <!-- Generator: Sketch 3.6.1 (26313) - http://www.bohemiancoding.com/sketch -->
		    <title>Back Chevron</title>
		    <desc>Created with Sketch.</desc>
		    <defs></defs>
		    <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
		        <g id='Navigation-Bar/Back' transform='translate(-8.000000, -31.000000)' fill='#0076FF'>
		            <path d='M8.5,42 L19,31.5 L21,33.5 L12.5,42 L21,50.5 L19,52.5 L8.5,42 Z' id='Back-Chevron'></path>
		        </g>
		    </g>
		</svg>"
	emoji : "<?xml version='1.0' encoding='UTF-8' standalone='no'?>
		<svg width='#{exports.px(20)}px' height='#{exports.px(20)}px' viewBox='0 0 20 20' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'>
			<!-- Generator: Sketch 3.5.2 (25235) - http://www.bohemiancoding.com/sketch -->
			<title>Emoji</title>
			<desc>Created with Sketch.</desc>
			<defs></defs>
			<g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'>
				<g id='Keyboard/Light/Lower' sketch:type='MSLayerGroup' transform='translate(-60.000000, -181.000000)' fill='#030303'>
					<g id='Bottom-Row' transform='translate(3.000000, 170.000000)' sketch:type='MSShapeGroup'>
						<path d='M66.75,30.5 C72.1347763,30.5 76.5,26.1347763 76.5,20.75 C76.5,15.3652237 72.1347763,11 66.75,11 C61.3652237,11 57,15.3652237 57,20.75 C57,26.1347763 61.3652237,30.5 66.75,30.5 Z M66.75,29.5 C71.5824916,29.5 75.5,25.5824916 75.5,20.75 C75.5,15.9175084 71.5824916,12 66.75,12 C61.9175084,12 58,15.9175084 58,20.75 C58,25.5824916 61.9175084,29.5 66.75,29.5 Z M63.75,19 C64.4403559,19 65,18.4403559 65,17.75 C65,17.0596441 64.4403559,16.5 63.75,16.5 C63.0596441,16.5 62.5,17.0596441 62.5,17.75 C62.5,18.4403559 63.0596441,19 63.75,19 Z M69.75,19 C70.4403559,19 71,18.4403559 71,17.75 C71,17.0596441 70.4403559,16.5 69.75,16.5 C69.0596441,16.5 68.5,17.0596441 68.5,17.75 C68.5,18.4403559 69.0596441,19 69.75,19 Z M59.8876334,22.1641444 C59.6390316,21.383134 60.065918,20.9785156 60.8530951,21.2329304 C60.8530951,21.2329304 63.0937503,22.2125 66.7500001,22.2125 C70.4062499,22.2125 72.6469047,21.2329304 72.6469047,21.2329304 C73.4287162,20.9662153 73.8812463,21.4044097 73.6058477,22.1807437 C73.6058477,22.1807437 72.6,27.575 66.75,27.575 C60.9,27.575 59.8876334,22.1641444 59.8876334,22.1641444 Z M66.75,23.1875 C64.06875,23.1875 61.8544055,22.4737821 61.8544055,22.4737821 C61.3273019,22.32948 61.1781233,22.5721615 61.5639555,22.957075 C61.5639555,22.957075 62.3625,24.65 66.75,24.65 C71.1375,24.65 71.9508503,22.9438304 71.9508503,22.9438304 C72.3093659,22.5399278 72.1690793,22.3359844 71.6354273,22.476349 C71.6354273,22.476349 69.43125,23.1875 66.75,23.1875 Z' id='Emoji'></path>
					</g>
				</g>
			</g>
		</svg>"
	delete: {
		on : "<?xml version='1.0' encoding='UTF-8' standalone='no'?>
				<svg width='#{exports.px(24)}px' height='#{exports.px(18)}px' viewBox='0 0 24 18' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'>
					<!-- Generator: Sketch 3.5.2 (25235) - http://www.bohemiancoding.com/sketch -->
					<title>Back</title>
					<desc>Created with Sketch.</desc>
					<defs></defs>
					<g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'>
						<g id='Keyboard/Light/Upper' sketch:type='MSLayerGroup' transform='translate(-339.000000, -130.000000)' fill='#030303'>
							<g id='Third-Row' transform='translate(3.000000, 118.000000)' sketch:type='MSShapeGroup'>
								<path d='M351.642663,20.9776903 L354.466795,18.1535585 C354.760106,17.8602476 354.763983,17.3814962 354.47109,17.088603 C354.176155,16.7936677 353.7014,16.7976328 353.406135,17.0928983 L350.582003,19.9170301 L347.757871,17.0928983 C347.46456,16.7995874 346.985809,16.7957097 346.692916,17.088603 C346.39798,17.3835382 346.401945,17.858293 346.697211,18.1535585 L349.521343,20.9776903 L346.697211,23.801822 C346.4039,24.0951329 346.400022,24.5738843 346.692916,24.8667776 C346.987851,25.1617128 347.462606,25.1577477 347.757871,24.8624822 L350.582003,22.0383504 L353.406135,24.8624822 C353.699445,25.1557931 354.178197,25.1596708 354.47109,24.8667776 C354.766025,24.5718423 354.76206,24.0970875 354.466795,23.801822 L351.642663,20.9776903 Z M337.059345,22.0593445 C336.474285,21.4742847 336.481351,20.5186489 337.059345,19.9406555 L343.789915,13.2100853 C344.182084,12.817916 344.94892,12.5 345.507484,12.5 L356.002098,12.5 C357.933936,12.5 359.5,14.0688477 359.5,16.0017983 L359.5,25.9982017 C359.5,27.9321915 357.923088,29.5 356.002098,29.5 L345.507484,29.5 C344.951066,29.5 344.177169,29.1771693 343.789915,28.7899148 L337.059345,22.0593445 Z' id='Back'></path>
							</g>
						</g>
					</g>
				</svg>"
		off : "<?xml version='1.0' encoding='UTF-8' standalone='no'?>
		<svg width='#{exports.px(24)}px' height='#{exports.px(18)}px' viewBox='0 0 24 18' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'>
			<!-- Generator: Sketch 3.5.2 (25235) - http://www.bohemiancoding.com/sketch -->
			<title>Back</title>
			<desc>Created with Sketch.</desc>
			<defs></defs>
			<g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'>
				<g id='Keyboard/Light/Upper' sketch:type='MSLayerGroup' transform='translate(-339.000000, -130.000000)' fill='#030303'>
					<g id='Third-Row' transform='translate(3.000000, 118.000000)' sketch:type='MSShapeGroup'>
						<path d='M337.059345,22.0593445 C336.474285,21.4742847 336.481351,20.5186489 337.059345,19.9406555 L343.789915,13.2100853 C344.182084,12.817916 344.94892,12.5 345.507484,12.5 L356.002098,12.5 C357.933936,12.5 359.5,14.0688477 359.5,16.0017983 L359.5,25.9982017 C359.5,27.9321915 357.923088,29.5 356.002098,29.5 L345.507484,29.5 C344.951066,29.5 344.177169,29.1771693 343.789915,28.7899148 L337.059345,22.0593445 Z M351.642663,20.9776903 L354.466795,18.1535585 C354.760106,17.8602476 354.763983,17.3814962 354.47109,17.088603 C354.176155,16.7936677 353.7014,16.7976328 353.406135,17.0928983 L350.582003,19.9170301 L347.757871,17.0928983 C347.46456,16.7995874 346.985809,16.7957097 346.692916,17.088603 C346.39798,17.3835382 346.401945,17.858293 346.697211,18.1535585 L349.521343,20.9776903 L346.697211,23.801822 C346.4039,24.0951329 346.400022,24.5738843 346.692916,24.8667776 C346.987851,25.1617128 347.462606,25.1577477 347.757871,24.8624822 L350.582003,22.0383504 L353.406135,24.8624822 C353.699445,25.1557931 354.178197,25.1596708 354.47109,24.8667776 C354.766025,24.5718423 354.76206,24.0970875 354.466795,23.801822 L351.642663,20.9776903 Z M338.70972,21.7097195 C338.317752,21.3177522 338.318965,20.6810349 338.70972,20.2902805 L344.643245,14.3567547 C344.840276,14.1597245 345.225639,14 345.493741,14 L355.997239,14 C357.103333,14 357.999999,14.8970601 357.999999,16.0058586 L357.999999,25.9941412 C357.999999,27.1019464 357.106457,27.9999999 355.997239,27.9999999 L345.493741,28 C345.221056,28 344.840643,27.8406431 344.643246,27.6432453 L338.70972,21.7097195 Z' id='Back'></path>
					</g>
				</g>
			</g>
		</svg>"
	}
	food :  "<?xml version='1.0' encoding='UTF-8' standalone='no'?>
			<svg width='#{exports.px(17)}px' height='#{exports.px(16)}px' viewBox='0 0 17 17' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'>
				<!-- Generator: Sketch 3.5.2 (25235) - http://www.bohemiancoding.com/sketch -->
				<title>Food</title>
				<desc>Created with Sketch.</desc>
				<defs></defs>
				<g id='iOS-9-Keyboards' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'>
					<g id='iPhone-6-Portrait-Light-Copy' sketch:type='MSArtboardGroup' transform='translate(-148.000000, -637.000000)'>
						<g id='Keyboards' sketch:type='MSLayerGroup' transform='translate(0.000000, 408.000000)'>
							<g id='Food' transform='translate(149.500000, 229.500000)' sketch:type='MSShapeGroup'>
								<path d='M5.5,15.5 L1,15.5 L0,5 L6.5,5 L6.26360933,7.48210202' id='Drink' stroke='#4A5461'></path>
								<path d='M6.01077545,1.96930098 L6.51571352,5.22270539 L5.71908184,5.67947812 L5.0389009,1.96930098 L4.85557247,1.96930098 L4.85557247,0.96930098 L8.85557247,0.96930098 L8.85557247,1.96930098 L6.01077545,1.96930098 Z' id='Straw' fill='#4A5461' transform='translate(6.855572, 3.324390) rotate(24.000000) translate(-6.855572, -3.324390) '></path>
								<rect id='Bottom-Bun' stroke='#4A5461' x='3' y='14' width='10.5' height='1.5' rx='1'></rect>
								<path d='M1.5,12.5024408 C1.5,11.948808 1.94916916,11.5 2.49268723,11.5 L14.0073128,11.5 C14.5555588,11.5 15,11.9469499 15,12.5024408 L15,12.9975592 C15,13.551192 14.5508308,14 14.0073128,14 L2.49268723,14 C1.94444121,14 1.5,13.5530501 1.5,12.9975592 L1.5,12.5024408 Z M3.93300003,11.8392727 C3.41771834,11.6518976 3.44483697,11.5 3.9955775,11.5 L13.0044225,11.5 C13.5542648,11.5 13.5866061,11.6503251 13.067,11.8392727 L8.5,13.5 L3.93300003,11.8392727 Z' id='&quot;Patty&quot;' fill='#4A5461'></path>
								<path d='M2.5,10.5 L13.5,10.5 L15,11.5 L1,11.5 L2.5,10.5 Z' id='Cheese' fill='#4A5461'></path>
								<path d='M8.25,10.5 C11.4256373,10.5 14,10.3284271 14,9.5 C14,8.67157288 11.4256373,8 8.25,8 C5.07436269,8 2.5,8.67157288 2.5,9.5 C2.5,10.3284271 5.07436269,10.5 8.25,10.5 Z' id='Top-Bun' stroke='#4A5461' stroke-width='0.75'></path>
							</g>
						</g>
					</g>
				</g>
			</svg>"
	flags: "<?xml version='1.0' encoding='UTF-8' standalone='no'?>
			<svg width='#{exports.px(11)}px' height='#{exports.px(15)}px' viewBox='0 0 11 15' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'>
				<!-- Generator: Sketch 3.5.2 (25235) - http://www.bohemiancoding.com/sketch -->
				<title>Flag</title>
				<desc>Created with Sketch.</desc>
				<defs></defs>
				<g id='iOS-9-Keyboards' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'>
					<g id='iPhone-6-Portrait-Light-Copy' sketch:type='MSArtboardGroup' transform='translate(-275.000000, -639.000000)'>
						<g id='Keyboards' sketch:type='MSLayerGroup' transform='translate(0.000000, 408.000000)'>
							<g id='Flag' transform='translate(275.000000, 231.500000)' sketch:type='MSShapeGroup'>
								<rect id='Pole' fill='#4A5461' x='0' y='0' width='1' height='14'></rect>
								<path d='M1,1 C1,1 1.25,2 3.5,2 C5.75,2 6,0.749999998 8,0.75 C10,0.749999998 10,1.5 10,1.5 L10,7.5 C10,7.5 10,6.5 8,6.5 C6,6.5 4.80623911,8 3.5,8 C2.19376089,8 1,7 1,7 L1,1 Z' stroke='#4A5461' stroke-linejoin='round'></path>
							</g>
						</g>
					</g>
				</g>
			</svg>"
	frequent: "<?xml version='1.0' encoding='UTF-8' standalone='no'?>
			<svg width='#{exports.px(17)}px' height='#{exports.px(16)}px' viewBox='0 0 17 16' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'>
				<!-- Generator: Sketch 3.5.2 (25235) - http://www.bohemiancoding.com/sketch -->
				<title>Recent</title>
				<desc>Created with Sketch.</desc>
				<defs></defs>
				<g id='iOS-9-Keyboards' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'>
					<g id='iPhone-6-Portrait-Light-Copy' sketch:type='MSArtboardGroup' transform='translate(-55.000000, -638.000000)'>
						<g id='Keyboards' sketch:type='MSLayerGroup' transform='translate(0.000000, 408.000000)'>
							<g id='Recent' transform='translate(55.500000, 230.000000)' sketch:type='MSShapeGroup'>
								<circle id='Body' stroke='#4A5461' cx='8' cy='8' r='8'></circle>
								<path d='M7.5,7.5 L7.5,8.5 L8.5,8.5 L8.5,2 L7.5,2 L7.5,7.5 L4,7.5 L4,8.5 L8.5,8.5 L8.5,7.5 L7.5,7.5 Z' id='Hands' fill='#4A5461'></path>
							</g>
						</g>
					</g>
				</g>
			</svg>"
	keyboard : "<?xml version='1.0' encoding='UTF-8' standalone='no'?>
			<svg width='#{exports.px(32.5)}px' height='#{exports.px(23.5)}px' viewBox='0 0 65 47' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>
			    <!-- Generator: Sketch 3.6.1 (26313) - http://www.bohemiancoding.com/sketch -->
			    <title>Shape</title>
			    <desc>Created with Sketch.</desc>
			    <defs></defs>
			    <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
			        <g id='iPad-Portrait' transform='translate(-1436.000000, -1956.000000)' fill='#000000'>
			            <g id='Keyboard-Light' transform='translate(0.000000, 1422.000000)'>
			                <g id='Keyboard-down' transform='translate(1412.000000, 500.000000)'>
			                    <path d='M87.001332,34 C88.1051659,34 89,34.8997127 89,35.9932874 L89,61.0067126 C89,62.1075748 88.1058759,63 87.001332,63 L25.998668,63 C24.8948341,63 24,62.1002873 24,61.0067126 L24,35.9932874 C24,34.8924252 24.8941241,34 25.998668,34 L87.001332,34 Z M26,36 L26,61 L87,61 L87,36 L26,36 Z M79,40 L83,40 L83,44 L79,44 L79,40 Z M72,40 L76,40 L76,44 L72,44 L72,40 Z M65,40 L69,40 L69,44 L65,44 L65,40 Z M58,40 L62,40 L62,44 L58,44 L58,40 Z M51,40 L55,40 L55,44 L51,44 L51,40 Z M44,40 L48,40 L48,44 L44,44 L44,40 Z M37,40 L41,40 L41,44 L37,44 L37,40 Z M30,40 L34,40 L34,44 L30,44 L30,40 Z M79,47 L83,47 L83,51 L79,51 L79,47 Z M72,47 L76,47 L76,51 L72,51 L72,47 Z M65,47 L69,47 L69,51 L65,51 L65,47 Z M58,47 L62,47 L62,51 L58,51 L58,47 Z M51,47 L55,47 L55,51 L51,51 L51,47 Z M44,47 L48,47 L48,51 L44,51 L44,47 Z M37,47 L41,47 L41,51 L37,51 L37,47 Z M30,47 L34,47 L34,51 L30,51 L30,47 Z M79,54 L83,54 L83,58 L79,58 L79,54 Z M72,54 L76,54 L76,58 L72,58 L72,54 Z M44,54 L69,54 L69,58 L44,58 L44,54 Z M37,54 L41,54 L41,58 L37,58 L37,54 Z M30,54 L34,54 L34,58 L30,58 L30,54 Z M44.3163498,69.9771047 C43.3684225,70.5420342 43.3338721,71.5096495 44.2378217,72.1373912 L55.3621539,79.8626088 C56.2667113,80.4907726 57.7338965,80.4903505 58.6378461,79.8626088 L69.7621783,72.1373912 C70.6667357,71.5092274 70.648012,70.5205204 69.7115187,69.9234166 L69.9825731,70.0962396 C69.5181333,69.800115 68.7782557,69.8126493 68.3261307,70.1269323 L57.8154999,77.4331263 C57.3651117,77.746202 56.628165,77.7381786 56.1762103,77.4199424 L45.8386137,70.1408977 C45.3836472,69.8205407 44.6375039,69.7857088 44.1566393,70.0722862 L44.3163498,69.9771047 Z' id='Shape'></path>
			                </g>
			            </g>
			        </g>
			    </g>
			</svg>"
	objects : 
		"<?xml version='1.0' encoding='UTF-8' standalone='no'?>
				<svg width='#{exports.px(11)}px' height='#{exports.px(16)}px' viewBox='0 0 11 16' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'>
				<!-- Generator: Sketch 3.5.2 (25235) - http://www.bohemiancoding.com/sketch -->
				<title>Lightbulb</title>
				<desc>Created with Sketch.</desc>
				<defs></defs>
				<g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'>
					<g id='iPhone-6' sketch:type='MSArtboardGroup' transform='translate(-244.000000, -639.000000)' stroke='#4A5361'>
						<g id='Lightbulb' sketch:type='MSLayerGroup' transform='translate(244.000000, 639.000000)'>
							<path d='M8,10.4002904 C9.78083795,9.48993491 11,7.63734273 11,5.5 C11,2.46243388 8.53756612,0 5.5,0 C2.46243388,0 0,2.46243388 0,5.5 C0,7.63734273 1.21916205,9.48993491 3,10.4002904 L3,14.0020869 C3,15.1017394 3.89761602,16 5.0048815,16 L5.9951185,16 C7.1061002,16 8,15.1055038 8,14.0020869 L8,10.4002904 Z' id='Oval-17' sketch:type='MSShapeGroup'></path>
							<rect id='Rectangle-50' sketch:type='MSShapeGroup' x='3' y='12' width='5' height='1'></rect>
							<rect id='Rectangle-51' sketch:type='MSShapeGroup' x='4' y='13.5' width='1.5' height='1'></rect>
							<path d='M5,8.5 C5,8.5 3.49999999,7.50000001 4,7 C4.50000001,6.49999999 5,7.66666667 5.5,8 C5.5,8 6.5,6.50000001 7,7 C7.5,7.49999999 6,8.5 6,8.5 L6,11 L5,11 L5,8.5 Z' id='Rectangle-52' sketch:type='MSShapeGroup'></path>
						</g>
					</g>
				</g>
			</svg>"
	shift : {
		on : "<?xml version='1.0' encoding='UTF-8' standalone='no'?>
				<svg width='#{exports.px(20)}px' height='#{exports.px(18)}px' viewBox='0 0 20 17' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'>
					<!-- Generator: Sketch 3.5.2 (25235) - http://www.bohemiancoding.com/sketch -->
					<title>Shift</title>
					<desc>Created with Sketch.</desc>
					<defs></defs>
					<g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'>
						<g id='Keyboard/Light/Upper' sketch:type='MSLayerGroup' transform='translate(-14.000000, -130.000000)' fill='#030303'>
							<g id='Third-Row' transform='translate(3.000000, 118.000000)' sketch:type='MSShapeGroup'>
								<path d='M21.7052388,13.2052388 C21.3157462,12.8157462 20.6857559,12.8142441 20.2947612,13.2052388 L11.9160767,21.5839233 C11.1339991,22.3660009 11.3982606,23 12.4979131,23 L16.5,23 L16.5,28.009222 C16.5,28.5564136 16.9463114,29 17.4975446,29 L24.5024554,29 C25.053384,29 25.5,28.5490248 25.5,28.009222 L25.5,23 L29.5020869,23 C30.6055038,23 30.866824,22.366824 30.0839233,21.5839233 L21.7052388,13.2052388 Z' id='Shift'></path>
							</g>
						</g>
					</g>
				</svg>"
		off : "<?xml version='1.0' encoding='UTF-8' standalone='no'?>
		<svg width='#{exports.px(20)}px' height='#{exports.px(18)}px' viewBox='0 0 20 19' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'>
			<!-- Generator: Sketch 3.5.2 (25235) - http://www.bohemiancoding.com/sketch -->
			<title>Shift</title>
			<desc>Created with Sketch.</desc>
			<defs></defs>
			<g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'>
				<g id='Keyboard/Light/Lower' sketch:type='MSLayerGroup' transform='translate(-14.000000, -129.000000)' fill='#030303'>
					<g id='Third-Row' transform='translate(3.000000, 118.000000)' sketch:type='MSShapeGroup'>
						<path d='M21.6719008,12.2325898 C21.301032,11.8279916 20.6946892,11.8334731 20.3288195,12.2325898 L11.6947023,21.6512983 C10.7587441,22.672308 11.1285541,23.5 12.5097751,23.5 L15.9999999,23.5000002 L15.9999999,28.0014241 C15.9999999,28.8290648 16.6716559,29.5000001 17.497101,29.5000001 L24.5028992,29.5000001 C25.3297253,29.5000001 26.0000003,28.8349703 26.0000003,28.0014241 L26.0000003,23.5000001 L29.4902251,23.5000002 C30.8763357,23.5000002 31.2439521,22.6751916 30.3054161,21.6512985 L21.6719008,12.2325898 Z M21.341748,14.3645316 C21.1530056,14.1632064 20.8433515,14.1670914 20.6582514,14.3645316 L13.5,21.9999998 L17.5000001,21.9999999 L17.5000002,27.5089956 C17.5000002,27.7801703 17.7329027,28.0000008 18.0034229,28.0000008 L23.996577,28.0000008 C24.2746097,28.0000008 24.4999997,27.7721203 24.4999997,27.5089956 L24.4999997,21.9999999 L28.5,21.9999999 L21.341748,14.3645316 Z' id='Shift'></path>
					</g>
				</g>
			</g>
		</svg>"
	}
	smileys: "<?xml version='1.0' encoding='UTF-8' standalone='no'?>
			<svg width='#{exports.px(17)}px' height='#{exports.px(16)}px' viewBox='0 0 17 16' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'>
				<!-- Generator: Sketch 3.5.2 (25235) - http://www.bohemiancoding.com/sketch -->
				<title>:D</title>
				<desc>Created with Sketch.</desc>
				<defs></defs>
				<g id='iOS-9-Keyboards' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'>
					<g id='iPhone-6-Portrait-Light-Copy' sketch:type='MSArtboardGroup' transform='translate(-86.000000, -638.000000)'>
						<g id='Keyboards' sketch:type='MSLayerGroup' transform='translate(0.000000, 408.000000)'>
							<g id=':D' transform='translate(87.000000, 230.500000)' sketch:type='MSShapeGroup'>
								<circle id='Head' stroke='#4A5461' stroke-width='0.789473684' cx='7.5' cy='7.5' r='7.5'></circle>
								<path d='M7.5,13.5263158 C10.2686907,13.5263158 12.5131579,10.3684212 12.5131579,9.18421045 C12.5131579,7.60526317 11.4389098,9.18421043 7.5,9.18421053 C3.56109023,9.18421062 2.48684211,7.60526317 2.48684211,9.18421045 C2.48684211,10.368421 4.73130935,13.5263158 7.5,13.5263158 Z M7.5,10.9605263 C8.93233083,11.1578947 11.7969925,10.368421 11.7969925,9.44423552 C11.7969925,8.78947368 10.8762084,9.57894727 7.5,9.77631579 C4.12379162,9.57894743 3.20300872,8.78947369 3.20300752,9.44423552 C3.20300582,10.368421 6.06766917,11.1578947 7.5,10.9605263 Z' id='Smile' fill='#4A5461'></path>
								<path d='M5.23684211,6.3236598 C5.64378876,6.3236598 5.97368421,5.88183554 5.97368421,5.33681769 C5.97368421,4.79179985 5.64378876,4.34997559 5.23684211,4.34997559 C4.82989545,4.34997559 4.5,4.79179985 4.5,5.33681769 C4.5,5.88183554 4.82989545,6.3236598 5.23684211,6.3236598 Z M9.73684211,6.3236598 C10.1437888,6.3236598 10.4736842,5.88183554 10.4736842,5.33681769 C10.4736842,4.79179985 10.1437888,4.34997559 9.73684211,4.34997559 C9.32989545,4.34997559 9,4.79179985 9,5.33681769 C9,5.88183554 9.32989545,6.3236598 9.73684211,6.3236598 Z' id='Eyes' fill='#4A5461'></path>
							</g>
						</g>
					</g>
				</g>
			</svg>"

	symbols: "<?xml version='1.0' encoding='UTF-8' standalone='no'?>
			<svg width='#{exports.px(16)}px' height='#{exports.px(17)}px' viewBox='0 0 15 17' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'>
				<!-- Generator: Sketch 3.5.2 (25235) - http://www.bohemiancoding.com/sketch -->
				<title>Objects &amp; Symbols</title>
				<desc>Created with Sketch.</desc>
				<defs></defs>
				<g id='iOS-9-Keyboards' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'>
					<g id='iPhone-6-Portrait-Light-Copy' sketch:type='MSArtboardGroup' transform='translate(-304.000000, -638.000000)' fill='#4A5461'>
						<g id='Keyboards' sketch:type='MSLayerGroup' transform='translate(0.000000, 408.000000)'>
							<g id='Objects-&amp;-Symbols' transform='translate(304.000000, 230.000000)'>
								<g id='Thing' transform='translate(0.000000, 0.500000)' sketch:type='MSShapeGroup'>
									<rect id='Rectangle-1209' x='0' y='0' width='7' height='1'></rect>
									<rect id='Rectangle-1209' x='0' y='2' width='7' height='1'></rect>
									<rect id='Rectangle-1211' x='3' y='3' width='1' height='4'></rect>
								</g>
								<path d='M11.75,0.159263978 L11.75,0 L11,0 L11,5.091493 C10.59344,4.94221392 10.0639662,4.96453224 9.55715399,5.19017957 C8.69849293,5.5724801 8.23003835,6.39365621 8.51083141,7.02432774 C8.79162447,7.65499928 9.71533454,7.85634375 10.5739956,7.47404321 C11.2761183,7.16143803 11.7173393,6.55538972 11.7013595,6 L11.75,6 L11.75,1.39385056 C12.3175908,1.59590037 13,2.0817456 13,3.25 C13,4.25 12.75,5.5 12.75,5.5 C12.75,5.5 13.75,4.75 13.75,2.5 C13.75,1.02256101 12.5642674,0.407473019 11.75,0.159263978 Z' id='Note' sketch:type='MSShapeGroup'></path>
								<text id='&amp;' sketch:type='MSTextLayer' font-family='SF UI Display' font-size='9.5' font-weight='normal'>
									<tspan x='0.25' y='16'>&amp;</tspan>
								</text>
								<text id='%' sketch:type='MSTextLayer' font-family='SF UI Display' font-size='9.5' font-weight='normal'>
									<tspan x='7.75' y='16'>%</tspan>
								</text>
							</g>
						</g>
					</g>
				</g>
			</svg>"
	travel: "<?xml version='1.0' encoding='UTF-8' standalone='no'?>
			<svg width='#{exports.px(17)}px' height='#{exports.px(16)}px' viewBox='0 0 17 16' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'>
				<!-- Generator: Sketch 3.5.2 (25235) - http://www.bohemiancoding.com/sketch -->
				<title>Transport</title>
				<desc>Created with Sketch.</desc>
				<defs></defs>
				<g id='iOS-9-Keyboards' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'>
					<g id='iPhone-6-Portrait-Light-Copy' sketch:type='MSArtboardGroup' transform='translate(-241.000000, -638.000000)'>
						<g id='Keyboards' sketch:type='MSLayerGroup' transform='translate(0.000000, 408.000000)'>
							<g id='Transport' transform='translate(241.500000, 230.000000)' sketch:type='MSShapeGroup'>
								<path d='M0,6 L1,6 L1,15 L0,15 L0,6 Z M15,4 L16,4 L16,15 L15,15 L15,4 Z M3.5,0 L4.5,0 L4.5,7 L3.5,7 L3.5,0 Z M1,6 L3.5,6 L3.5,7 L1,7 L1,6 Z M4.5,0 L9.5,0 L9.5,1 L4.5,1 L4.5,0 Z M9.5,0 L10.5,0 L10.5,6 L9.5,6 L9.5,0 Z M10.5,4 L15,4 L15,5 L10.5,5 L10.5,4 Z' id='Skyline' fill='#4A5461'></path>
								<g id='Windows' transform='translate(2.000000, 2.000000)' fill='#4A5461'>
									<rect id='Window' x='0' y='6' width='1' height='1'></rect>
									<rect id='Window' x='3.5' y='0' width='1' height='1'></rect>
									<rect id='Window' x='5.5' y='0' width='1' height='1'></rect>
									<rect id='Window' x='5.5' y='2' width='1' height='1'></rect>
									<rect id='Window' x='3.5' y='2' width='1' height='1'></rect>
									<rect id='Window' x='11' y='4' width='1' height='1'></rect>
									<rect id='Window' x='11' y='6' width='1' height='1'></rect>
								</g>
								<g id='Car' transform='translate(2.500000, 6.500000)'>
									<path d='M8.5,8 L2.5,8 L2.5,9.5 L0.5,9.5 L0.5,7.8681145 C0.201202192,7.69582702 0,7.37091363 0,6.9906311 L0,5.0093689 C0,4.45190985 0.444836974,4 0.995577499,4 L10.0044225,4 C10.5542648,4 11,4.44335318 11,5.0093689 L11,6.9906311 C11,7.3653315 10.7990244,7.69234519 10.5,7.86649002 L10.5,9.5 L8.5,9.5 L8.5,8 Z M1.75,6.5 C2.16421356,6.5 2.5,6.16421356 2.5,5.75 C2.5,5.33578644 2.16421356,5 1.75,5 C1.33578644,5 1,5.33578644 1,5.75 C1,6.16421356 1.33578644,6.5 1.75,6.5 Z M9.25,6.5 C9.66421356,6.5 10,6.16421356 10,5.75 C10,5.33578644 9.66421356,5 9.25,5 C8.83578644,5 8.5,5.33578644 8.5,5.75 C8.5,6.16421356 8.83578644,6.5 9.25,6.5 Z M0.5,7 L10.5,7 L10.5,7.5 L0.5,7.5 L0.5,7 Z M3,6.5 L8,6.5 L8,7 L3,7 L3,6.5 Z' id='Body' fill='#4A5461'></path>
									<path d='M1.5,4.5 L1.5,3 C1.5,1.34314575 2.83902013,0 4.50166547,0 L6.49833453,0 C8.15610859,0 9.5,1.34651712 9.5,3 L9.5,5' id='Roof' stroke='#4A5461'></path>
								</g>
							</g>
						</g>
					</g>
				</g>
			</svg>"}

bannerBG = {
	"iphone-5": "<?xml version='1.0' encoding='UTF-8' standalone='no'?>
		<svg width='320px' height='68px' viewBox='0 0 320 68' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>
		    <!-- Generator: Sketch 3.6.1 (26313) - http://www.bohemiancoding.com/sketch -->
		    <title>iphone5</title>
		    <desc>Created with Sketch.</desc>
		    <defs></defs>
		    <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0.9'>
		        <g id='iPhone-5/5S/5C' fill='#1A1A1C'>
		            <path d='M0,0 L320,0 L320,68 L0,68 L0,0 Z M142,61.0048815 C142,59.897616 142.896279,59 144.0024,59 L176.9976,59 C178.103495,59 179,59.8938998 179,61.0048815 L179,61.9951185 C179,63.102384 178.103721,64 176.9976,64 L144.0024,64 C142.896505,64 142,63.1061002 142,61.9951185 L142,61.0048815 Z' id='iphone5'></path>
		        </g>
		    </g>
		</svg>"
	"iphone-6s": "<?xml version='1.0' encoding='UTF-8' standalone='no'?>
			<svg width='375px' height='68px' viewBox='0 0 375 68' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>
				<!-- Generator: Sketch 3.6 (26304) - http://www.bohemiancoding.com/sketch -->
				<title>Notification background</title>
				<desc>Created with Sketch.</desc>
				<defs></defs>
				<g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0.9'>
					<g id='iOS8-Push-Notification' transform='translate(-58.000000, -23.000000)' fill='#1A1A1C'>
						<g transform='translate(58.000000, 7.000000)' id='Notification-container'>
							<g>
								<path d='M0,16 L375,16 L375,84 L0,84 L0,16 Z M169,77.0048815 C169,75.897616 169.896279,75 171.0024,75 L203.9976,75 C205.103495,75 206,75.8938998 206,77.0048815 L206,77.9951185 C206,79.102384 205.103721,80 203.9976,80 L171.0024,80 C169.896505,80 169,79.1061002 169,77.9951185 L169,77.0048815 Z' id='Notification-background'></path>
							</g>
						</g>
					</g>
				</g>
			</svg>"
	"iphone-6s-plus" : "<?xml version='1.0' encoding='UTF-8' standalone='no'?>
			<svg width='414px' height='68px' viewBox='0 0 414 68' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>
			<!-- Generator: Sketch 3.6 (26304) - http://www.bohemiancoding.com/sketch -->
			<title>Notification background Copy</title>
			<desc>Created with Sketch.</desc>
			<defs></defs>
			<g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0.9'>
				<g id='iOS8-Push-Notification' transform='translate(-43.000000, -74.000000)' fill='#1A1A1C'>
					<g transform='translate(43.000000, 74.000000)' id='Notification-container'>
						<g>
							<path d='M0,0 L414,0 L414,68 L0,68 L0,0 Z M189,61.0048815 C189,59.897616 189.896279,59 191.0024,59 L223.9976,59 C225.103495,59 226,59.8938998 226,61.0048815 L226,61.9951185 C226,63.102384 225.103721,64 223.9976,64 L191.0024,64 C189.896505,64 189,63.1061002 189,61.9951185 L189,61.0048815 Z' id='Notification-background-Copy'></path>
						</g>
					</g>
				</g>
			</g>
		</svg>"
	"ipad" : "<?xml version='1.0' encoding='UTF-8' standalone='no'?>
			<svg width='768px' height='68px' viewBox='0 0 768 68' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>
			    <!-- Generator: Sketch 3.6.1 (26313) - http://www.bohemiancoding.com/sketch -->
			    <title>ipad-portrait</title>
			    <desc>Created with Sketch.</desc>
			    <defs></defs>
			    <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0.9'>
			        <g id='iPad-Portrait' fill='#1A1A1C'>
			            <path d='M0,0 L768,0 L768,68 L0,68 L0,0 Z M366,61.0048815 C366,59.897616 366.896279,59 368.0024,59 L400.9976,59 C402.103495,59 403,59.8938998 403,61.0048815 L403,61.9951185 C403,63.102384 402.103721,64 400.9976,64 L368.0024,64 C366.896505,64 366,63.1061002 366,61.9951185 L366,61.0048815 Z' id='ipad-portrait'></path>
			        </g>
			    </g>
			</svg>"
	"ipad-pro" : "<?xml version='1.0' encoding='UTF-8' standalone='no'?>
			<svg width='1024px' height='68px' viewBox='0 0 1024 68' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>
			    <!-- Generator: Sketch 3.6.1 (26313) - http://www.bohemiancoding.com/sketch -->
			    <title>ipad-pro-portrait</title>
			    <desc>Created with Sketch.</desc>
			    <defs></defs>
			    <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0.9'>
			        <g id='iPad-Pro-Portrait' fill='#1A1A1C'>
			            <path d='M0,0 L1024,0 L1024,68 L0,68 L0,0 Z M494,61.0048815 C494,59.897616 494.896279,59 496.0024,59 L528.9976,59 C530.103495,59 531,59.8938998 531,61.0048815 L531,61.9951185 C531,63.102384 530.103721,64 528.9976,64 L496.0024,64 C494.896505,64 494,63.1061002 494,61.9951185 L494,61.0048815 Z' id='ipad-pro-portrait'></path>
			        </g>
			    </g>
			</svg>"
	}
