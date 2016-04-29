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
