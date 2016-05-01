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
			constraints.height = utils.px(textLayer.constraints.height)
		if textLayer.constraints.width
			constraints.width = utils.px(textLayer.constraints.width)
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

