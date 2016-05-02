ios = require 'ios-kit'

## Converts px to pt
exports.pt = (px) ->
	pt = px/ios.device.scale
	pt = Math.round(pt)
	return pt

## Converts pt to px
exports.px = (pt) ->
	px = pt * ios.device.scale
	px = Math.round(px)
	return px

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

# Supporting Functions
# Utils

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
	newString = "fill=\"" + utils.color(color).toHexString()
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

exports.bgBlur = (layer) ->
	layer.style["-webkit-backdrop-filter"] = "blur(#{exports.px(5)}px)"
	return layer 

exports.textAutoSize = (textLayer) ->
	#Define Width
	constraints = {}
	if textLayer.constraints 
		if textLayer.constraints.height
			constraints.height = exports.px(textLayer.constraints.height)
		if textLayer.constraints.width
			constraints.width = exports.px(textLayer.constraints.width)
	
	styles =
		fontSize: textLayer.style.fontSize
		fontFamily: textLayer.style.fontFamily
		fontWeight: textLayer.style.fontWeight
		lineHeight: textLayer.style.lineHeight
		letterSpacing: textLayer.style.letterSpacing
		textTransform: textLayer.style.textTransform
	textFrame = Utils.textSize(textLayer.html, styles, constraints)
	return {
		width : textFrame.width
		height: textFrame.height
	}

exports.getDevice = ->


	# Loads the initial frame
	device = Framer.Device.deviceType

	### This switch looks at the innerWidth to determine if the prototype is being opened on a device. 
	If so, it'll override the device, and it'll adjust the view to fullscreen.###
	capturedDevice = {
		width:ios.lib.frames[device].width
		height:ios.lib.frames[device].height
		scale:ios.lib.frames[device].scale
		mobile:ios.lib.frames[device].mobile
		platform:ios.lib.frames[device].platform
	}

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

	exports.scale = ios.lib.frames[device].scale

	if device == "fullscreen"
		exports.width = window.innerWidth
		exports.height = window.innerHeight
	else
		exports.width = ios.lib.frames[device].width
		exports.height = ios.lib.frames[device].height
		if window.innerWidth == 1242 || window.innerWidth == 2208
			exports.width = window.innerWidth
			exports.height = window.innerHeight
			exports.scale = 3
	exports.mobile = ios.lib.frames[device].mobile
	exports.platform = ios.lib.frames[device].platform
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
	device = device.replace("-silver", "")

	capturedDevice.name = device

	# exports.device becomes either ipad, ipad-pro, iphone-5, iphone-6s, iphone-6s-plus
	return capturedDevice


# Special Characters
exports.specialChar = (layer) ->
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
	ios.layout.set()

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

		textFrame = exports.textAutoSize(layer)
		layer.width = textFrame.width
		layer.height = textFrame.height


	ios.layout.set()

# Decides if it should be white/black text
exports.autoColor = (colorObject) ->
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
		color = "#FFF"
	return color

exports.sameParent = (layer1, layer2) ->
	parentOne = layer1.superLayer
	parentTwo = layer2.superLayer
	if parentOne == parentTwo
		return true
	else 
		return false