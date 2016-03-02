#iOSKit Module
#By Kevyn Arnott @kvyn_
framerDevices = {
#Fullscreen
"fullscreen" : { height: window.innerHeight, width: window.innerWidth,	scale:1, mobile:false, platform:"web"}

#iPhones
##5S
"apple-iphone-5s-space-gray": { height: 1136, width: 640,	scale: 2, mobile:true, platform:"iOS"}
"apple-iphone-5s-silver": { height: 1136, width: 640,	scale: 2, mobile:true, platform:"iOS"}
"apple-iphone-5s-gold": { height: 1136, width: 640,	scale: 2, mobile:true, platform:"iOS"}

##5c
"apple-iphone-5c-green": { height: 1136, width: 640,	scale: 2, mobile:true, platform:"iOS"}
"apple-iphone-5c-blue": { height: 1136, width: 640,	scale: 2, mobile:true, platform:"iOS"}
"apple-iphone-5c-red": { height: 1136, width: 640,	scale: 2, mobile:true, platform:"iOS"}
"apple-iphone-5c-white": { height: 1136, width: 640,	scale: 2, mobile:true, platform:"iOS"}
"apple-iphone-5c-yellow": { height: 1136, width: 640,	scale: 2, mobile:true, platform:"iOS"}
"apple-iphone-5c-pink": { height: 1136, width: 640,	scale: 2, mobile:true, platform:"iOS"}
##6s
"apple-iphone-6s-space-gray" : { height: 1334, width: 750,	scale: 2, mobile:true, platform:"iOS"}
"apple-iphone-6s-silver": { height: 1334, width: 750,	scale: 2, mobile:true, platform:"iOS"}
"apple-iphone-6s-gold": { height: 1334, width: 750,	scale: 2, mobile:true, platform:"iOS"}
"apple-iphone-6s-rose-gold": { height: 1334, width: 750,	scale: 2, mobile:true, platform:"iOS"}
#6s plus
"apple-iphone-6s-plus-gold": { height: 2208, width: 1242,	scale: 3, mobile:true, platform:"iOS"}
"apple-iphone-6s-plus-silver": { height: 2208, width: 1242,	scale: 3, mobile:true, platform:"iOS"}
"apple-iphone-6s-plus-space-gray": { height: 2208, width: 1242,	scale: 3, mobile:true, platform:"iOS"}
"apple-iphone-6s-plus-rose-gold": { height: 2208, width: 1242,	scale: 3, mobile:true, platform:"iOS"}

#iPads

#Air

"apple-ipad-air-2-gold": { height: 2048, width: 1536,	scale: 2, mobile:true, platform:"iOS"}
"apple-ipad-air-2-silver": { height: 2048, width: 1536,	scale: 2, mobile:true, platform:"iOS"}
"apple-ipad-air-2-space-gray": { height: 2048, width: 1536,	scale: 2, mobile:true, platform:"iOS"}

#mini
"apple-ipad-mini-4-gold": { height: 2048, width: 1536,	scale: 1, mobile:true, platform:"iOS"}
"apple-ipad-mini-4-space-gray": { height: 2048, width: 1536,	scale: 1, mobile:true, platform:"iOS"}
"apple-ipad-mini-4-silver":{ height: 2048, width: 1536, scale: 1, mobile:true, platform:"iOS"}

#Pro
"apple-ipad-pro-gold": { height: 2732, width: 2048, scale: 2, mobile:true, platform:"iOS"}
"apple-ipad-pro-silver": { height: 2732, width: 2048, scale: 2, mobile:true, platform:"iOS"}
"apple-ipad-pro-space-gray" : { height: 2732, width: 2048, scale: 2, mobile:true, platform:"iOS"}
}
exports.device = 0
exports.name = 0
exports.scale = 0
exports.height = 0
exports.width = 0
exports.mobile = 0
exports.platform = 0
exports.orientation = 0
screen = {}

exports.getDevice = ->
	device = Framer.Device.deviceType
	if innerWidth == 1242
		device = "apple-iphone-6s-plus-silver"
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
	exports.device = device.replace("-silver", "")
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


#Listen to window reize
onResize = () ->
	exports.getDevice()
	exports.layout()



window.addEventListener("resize", onResize)
window.addEventListener("orientationchange" , onResize)



defaults = {
	alert: {
		text:{
			title: "Title"
			message:"Message"
			action:"Action"
			secondaryAction: "secondaryAction"
		}
	}
	alertBanner: {
		text:{
			title: "Title"
			message:"Message"
			action:"Action"
			time:"now"
			icon:undefined
		}
	}
	charWidths: {			
		"A" : .7
		"B" : .65
		"C" : .78
		"D" : .77
		"E" : .58
		"F" : .57
		"G" : .77
		"H" : .71
		"I" : .1
		"J" : .49
		"K" : .65
		"L" : .57
		"M" : .87
		"N" : .71
		"O" : .8
		"P" : .62
		"Q" : .8
		"R" : .63
		"S" : .63
		"T" : .66
		"U" : .7
		"V" : .7
		"W" : 1.03
		"X" : .68
		"Y" : .67
		"Z" : .645
		"a" : .54
		"b" : .63
		"c" : .57
		"d" : .59
		"e" : .59
		"f" : .28
		"g" : .59
		"h" : .57
		"i" : .12
		"j" : .12
		"k" : .53
		"l" : .105
		"m" : .9
		"n" : .56
		"o" : .6
		"p" : .62
		"q" : .59
		"r" : .34
		"s" : .505
		"t" : .28
		"u" : .56
		"v" : .53
		"w" : .835
		"x" : .515
		"y" : .528
		"z" : .51
		" " : .44
		"?" : .495
		"!" : .18
		"." : .18
		"," : .17
		"'" : .09
		"1" : .32
		"2" : .63
		"3" : .62
		"4" : .655
		"5" : .64
		"6" : .64
		"7" : .59
		"8" : .64 
		"9" : .64
		"0" : .645
 	}
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
	keyboardProps: ["returnKey"]
	keyboard: {
		returnKey:"default"
	}
	text: {
		defaults: {
			text: "iOS Text Layer"
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
			} 
	}
}

setProps = (object, dest) ->
	keys = Object.keys(object)
	dest["props"] = keys

setProps(defaults.text.defaults, defaults.text)
setProps(defaults.alert.text, defaults.alert)
setProps(defaults.alertBanner.text, defaults.alertBanner)


## Conversions

#Pixels to Points
exports.pt = (px) ->
	pt = px/exports.scale
	pt = Math.round(pt)
	return pt

#Points to Pixels
exports.px = (pt) ->
	px = pt * exports.scale
	px = Math.round(px)
	return px

## Errors

error = (context, code) ->
	if code == 1 
		print "Error Invalid Relationship – Layer id:#{context.id} has a relationship with another layer not in the same superLayer."
	if code == 2
		print "Error #{context} requires a layer"
	if code == 3
		print "Error #{context} cannot refer to itself"
	if code == 4
		print "Error #{context} is not a valid weight. Please use 100, 200, 300... or Thin, Light, Regular..."

## AutoLayout

#checks if two layers have the same parent
exports.sameParent = (layer1, layer2) ->
	parentOne = layer1.superLayer
	parentTwo = layer2.superLayer
	if parentOne == parentTwo
		return true
	else 
		return false

#Refreshes Layer or All Layers
exports.layout = (layer) ->
	if layer == undefined
		@.array = Framer.CurrentContext.layers
	else 
		@.array = [layer]
	for layer in @.array
		if layer.constraints != undefined
			for a in defaults.constraintAligns
				if layer.constraints[a]
					layoutAlign(layer, a)
			for p in defaults.constraintProps
				layoutSize(layer, p)
			for c in defaults.constraintTypes
				if layer.constraints[c] != undefined
					layoutChange(layer, c)

#Align constraints
layoutAlign = (layer, type) ->
	declaredConstraint = layer.constraints[type]
	if layer.superLayer
		@superLayer = layer.superLayer
	else
		@superLayer = screen
	if declaredConstraint == parseInt(declaredConstraint, 10)
		error(type, 2)
	if declaredConstraint == layer
		error(type, 3)
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
							error(layer, 1)
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
								error(layer, 1)
					if layer.constraints[type].length > 1	
						#Relationship Array
						for object in layer.constraints[type]
							if object == parseInt(object, 10)
								@.objInt = object
							else
								@.objLayer = object
							layer[prop] = @.objLayer[objProp2] - exports.scale * @.objInt


#Text Layers
exports.styles = {
}

## Custom Styles

exports.addStyle = (array) ->
	key = Object.keys(array)[0]
	exports.styles[key] = array[key]

exports.apply = (layer, style) ->
	style = exports.styles[style]
	props = Object.keys(style)
	framerProps = ["name", "width", "height", "superLayer", "opacity", "color", "backgroundColor", "x", "y", "midX", "midY", "maxX", "minX", "visible", "clip", "scrollHorizontal", "scrollVertical", "ignoreEvents", "z", "scaleX", "scaleY", "scaleZ", "scale", "skewX", "skewY", "skew", "originX", "originY", "originZ", "perspective", "perspectiveOriginX", "perspectiveOriginY", "rotationX", "rotationY", "rotationZ", "rotation", "blur", "brightness", "saturate", "hueRotate", "contrast", "invert", "grayscale", "sepia", "shadowX", "shadowY", "shadowBlur", "shadowSpread", "shadowColor", "borderColor", "borderWidth", "force2d", "flat", "backfaceVisible", "name", "matrix", "_matrix2d", "transformMatrix", "matrix3d", "borderRadius", "point", "size", "frame", "html", "image", "scrollX", "scrollY", "_domEventManager", "mouseWheelSpeedMultiplier", "velocityThreshold", "animationOptions", "constrained"]
	cssProps = ["fontFamily", "fontSize", "textAlign", "fontWeight", "lineHeight"]
	for p in props
		if framerProps.indexOf(p) != -1 
			if style[p] == parseInt(style[p], 10)
				layer[p] = exports.px(style[p])
			else 
				layer[p] = style[p]
		if cssProps.indexOf(p) != -1 
			if p == "fontSize"
				layer.style["font-size"] = exports.px(style[p]) + "px"
			if p == "fontFamily"
				layer.style["font-family"] = style[p]
			if p == "textAlign"
				layer.style["text-align"] = style[p]
			if p == "fontWeight"
				if style[p] == parseInt(style[p], 10)
					layer.style["font-weight"] = style[p]
				else
					switch style[p]
						when "ultrathin" then layer.style["font-weight"] = 100
						when "thin" then layer.style["font-weight"] = 200
						when "light" then layer.style["font-weight"] = 300
						when "regular" then layer.style["font-weight"] = 400
						when "medium" then layer.style["font-weight"] = 500
						when "semibold" then layer.style["font-weight"] = 600
						when "bold" then layer.style["font-weight"] = 700
						when "black" then layer.style["font-weight"] = 800
						else
							error(p, 4)
			if p == "lineHeight"
				if style[p] == "auto"
					layer.style["line-height"] = exports.px(style["fontSize"]) * 1.2 + "px"
				else
					layer.style["line-height"] = exports.px(style[p]) + "px"

exports.Custom = (style, array) ->
	layer = new Layer 
	isStyleValid = exports.styles[style]
	if isStyleValid == undefined
		if array != undefined
			exports.addStyle
				"#{style}" :
					array
		else
			exports.addStyle
				"#{style}" :
					width : 100
	exports.apply(layer, style)
	if array != undefined && isStyleValid != undefined
		styleNum = "copy"
		newStyleName = style + " " + styleNum
		exports.addStyle
			"#{newStyleName}" : 
				array
		exports.apply(layer, newStyleName)
	return layer 

#Automatic sizing for text layers
textSizing = (layer, text, height, style, lines) ->
	device = exports.getDevice()
	layer.height = parseInt(height[0] + height[1]) + 2
	if lines != undefined
		layer.height = layer.height * lines
	layer.html = text 
	stringLength = 0
	lookingForBreak = text.search("<br>")
	pureText = ""
	if lookingForBreak != -1
		line1 = text.substring(0,lookingForBreak)
		line2 =  text.substring(lookingForBreak + 5, text.length)
		if line1.length > line2.length
			text = line1
		if line2.length > line1.length
			text = line2
	invalidText = /(<([^>]+)>)/ig
	pureText = text.replace(invalidText, "")
	characterArray = pureText.split('')
	for c in characterArray
		stringLength = chars[c][style] + stringLength
	layer.width = stringLength * device.scale




textAutoSize = (textLayer) ->
	#Define Width
	layerWidth = 0
	layerHeight = 0
	if textLayer.height == exports.px(-1) && textLayer.width == exports.px(-1)
		layerHeight = parseInt(textLayer.style['font-size'].slice(0,-2))
	if textLayer.height != exports.px(-1) && textLayer.width != exports.px(-1)
		layerHeight = textLayer.height
	arrayOfChars = textLayer.html.split("")
	wordCount = textLayer.html.split(" ").length
	arrayOfWidths = defaults.charWidths
	fontMultiplier = parseInt(textLayer.style["font-size"].slice(0,-2))/10
	fontWeightMultiplier = parseInt(textLayer.style["font-weight"])/380
	for char in arrayOfChars
		layerWidth = layerWidth + ( arrayOfWidths[char] * fontMultiplier * (8.4 + fontWeightMultiplier)) 
		layerWidth = Math.round(layerWidth)
	setWidth = textLayer.width
	if textLayer.width != exports.px(-1) && textLayer.height == exports.px(-1)
		lineCount = Math.ceil(layerWidth/setWidth)
		if lineCount > wordCount
			lineCount = wordCount
		layerHeight = parseInt(textLayer.style["font-size"].slice(0,-2)) * lineCount + parseInt(textLayer.style["line-height"].slice(0,-2)) * (lineCount - 1.5)
		if layerHeight < parseInt(textLayer.style['font-size'].slice(0,-2))
			layerHeight = parseInt(textLayer.style['font-size'].slice(0,-2))
	if textLayer.width != exports.px(-1)
		layerWidth = setWidth
	return {
		width : layerWidth
		height: layerHeight
	}

exports.Text = (array) ->
	if array == undefined
		array = []
	styleArray = {}
	for i in defaults.text.props
		if array[i] != undefined
			@[i] = array[i]
		else
			@[i] = defaults.text.defaults[i]
		if i != "style"
			styleArray[i] = @[i]
	if exports.styles[@.style] == undefined
		exports.addStyle
			"#{@.style}" :
				styleArray
	textLayer = new Layer
	textLayer.html = @text
	exports.apply(textLayer, @style)
	textFrame = textAutoSize(textLayer)
	textLayer.props = (height:textFrame.height, width:textFrame.width)
	return textLayer



##Alerts
exports.Alert = (array) ->
	if array == undefined
		array = []
	for i in defaults.alert.props
		if array[i] != undefined
			@[i] = array[i]
		else
			@[i] = defaults.alert.text[i]
	all = new Layer backgroundColor:"transparent"
	all.constraints = 
		leading:0
		trailing:0
		top:0
		bottom:0
	overlay = new Layer backgroundColor:"black", opacity:.3, superLayer:all
	overlay.constraints =
		leading:0
		trailing:0
		top:0
		bottom:0
	exports.layout()
	alertBG = new Layer backgroundColor:"white", superLayer:all, borderRadius:exports.px(10), name:"Alert Background"
	alertBG.constraints =
		align:"center"
		width:280
		height:160
	exports.layout()
	title = new exports.Text style:"alertTitle", text:@title, fontWeight:"medium", superLayer:alertBG
	title.constraints = 
		align:"horizontal"
		top:20
	exports.layout()
	message = new exports.Text style:"alertMessage", text:@message, fontSize:13, superLayer:alertBG, textAlign:"center", lineHeight:16, width:240
	message.constraints =
		top: [title, 10]
		align:"horizontal"
	alertBG.constraints["height"] = 20 + exports.pt(title.height) + 10 + exports.pt(message.height) + 64 
	exports.layout()
	divider = new Layer superLayer:alertBG, backgroundColor:"#E2E8EB"
	divider.constraints = 
		leading:0
		trailing:0
		height:1
		bottom:44
	exports.layout()
	actionButton = new exports.Text style:"alertAction", color:"#0076FF", superLayer:alertBG, text:@action, name:"Action"
	secondaryActionButton = new exports.Text style:"alertAction", text:@secondaryAction
	if @action != "Action" && @secondaryAction == "secondaryAction"
		actionButton.constraints = 
			align:"horizontal"
			bottom:16
		box = new Layer superLayer:alertBG, backgroundColor:"transparent"
		box.constraints = 
			leading:0
			trailing:0
			bottom:0
			height:44
		secondaryActionButton.visible = false
		exports.layout()
		return {
			all : all
			overlay : overlay
			action: box
			title: title
			message: message
		}
	else
		leftBox = new Layer width:alertBG.width/2, superLayer:alertBG, name:@secondaryAction + " box", backgroundColor:"transparent"
		rightBox = new Layer width:alertBG.width/2, superLayer:alertBG, name:@action + " box", backgroundColor:"transparent"
		dividerVertical = new Layer superLayer:alertBG, backgroundColor:"#E2E8EB"
		dividerVertical.constraints = 
			width:1
			height:44
			bottom:0
			align:"horizontal"
		leftBox.constraints =
			height:44
			bottom:0
			leading:0
		rightBox.constraints =
			height:44
			bottom:0
			trailing:0
		leftBox.addSubLayer(secondaryActionButton)
		rightBox.addSubLayer(actionButton)
		exports.layout()
		actionButton.constraints = 
			align:"horizontal"
			bottom:16
		secondaryActionButton.constraints =
			align:"center"
			bottom:16
		exports.layout()
		return {
			all : all
			overlay : overlay
			action: rightBox
			secondaryAction : leftBox
			title: title
			message: message
		}

exports.AlertBanner = (array) ->
	if array == undefined
		array = []
	for i in defaults.alertBanner.props
		if array[i] != undefined
			@[i] = array[i]
		else
			@[i] = defaults.alertBanner.text[i]
	bannerBG = new Layer backgroundColor:"transparent", name:"alert banner all"
	if exports.device == "iphone-6s"
		bannerBG.html = "<?xml version='1.0' encoding='UTF-8' standalone='no'?>
			<svg width='#{exports.width}px' height='#{exports.px(68)}px' viewBox='0 0 375 68' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>
			    <!-- Generator: Sketch 3.6 (26304) - http://www.bohemiancoding.com/sketch -->
			    <title>Notification background</title>
			    <desc>Created with Sketch.</desc>
			    <defs></defs>
			    <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0.95'>
			        <g id='iOS8-Push-Notification' transform='translate(-58.000000, -23.000000)' fill='#1A1A1C'>
			            <g transform='translate(58.000000, 7.000000)' id='Notification-container'>
			                <g>
			                    <path d='M0,16 L375,16 L375,84 L0,84 L0,16 Z M169,77.0048815 C169,75.897616 169.896279,75 171.0024,75 L203.9976,75 C205.103495,75 206,75.8938998 206,77.0048815 L206,77.9951185 C206,79.102384 205.103721,80 203.9976,80 L171.0024,80 C169.896505,80 169,79.1061002 169,77.9951185 L169,77.0048815 Z' id='Notification-background'></path>
			                </g>
			            </g>
			        </g>
			    </g>
			</svg>"
	if exports.device == "iphone-6s-plus"
		bannerBG.html = "
		<?xml version='1.0' encoding='UTF-8' standalone='no'?>
			<svg width='#{exports.width}px' height='#{exports.px(68)}px' viewBox='0 0 414 68' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>
		    <!-- Generator: Sketch 3.6 (26304) - http://www.bohemiancoding.com/sketch -->
		    <title>Notification background Copy</title>
		    <desc>Created with Sketch.</desc>
		    <defs></defs>
		    <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0.95'>
		        <g id='iOS8-Push-Notification' transform='translate(-43.000000, -74.000000)' fill='#1A1A1C'>
		            <g transform='translate(43.000000, 74.000000)' id='Notification-container'>
		                <g>
		                    <path d='M0,0 L414,0 L414,68 L0,68 L0,0 Z M189,61.0048815 C189,59.897616 189.896279,59 191.0024,59 L223.9976,59 C225.103495,59 226,59.8938998 226,61.0048815 L226,61.9951185 C226,63.102384 225.103721,64 223.9976,64 L191.0024,64 C189.896505,64 189,63.1061002 189,61.9951185 L189,61.0048815 Z' id='Notification-background-Copy'></path>
		                </g>
		            </g>
		        </g>
		    </g>
		</svg>
		"
	bannerBG.constraints =
		leading:0
		trailing:0
		top:0
		height:68
	icon = new Layer superLayer:bannerBG, name:"alert icon", borderRadius:exports.px(4.5)
	if @icon == undefined
		icon.style["background"] = "linear-gradient(-180deg, #67FF81 0%, #01B41F 100%)"
	icon.constraints =
		height:20
		width:20
		leading:15
		top:8
	title = new exports.Text style:"alertBannerTitle", text:@title, color:"white", fontWeight:"medium", fontSize:13, superLayer:bannerBG, name:"alert title"
	title.constraints = 
		top:5
		leading:[icon, 11]
	message = new exports.Text style:"alertBannerMessage", text:@message, color:"white", fontSize:13, superLayer:bannerBG, name:"alert message"
	message.constraints =
		leadingEdges:title
		top:[title, 2]
	time = new exports.Text style:"alertBannerTime", text:@time, color:"white", fontSize:11, superLayer:bannerBG, name:"alert time"
	time.constraints =
		leading:[title, 5]
		bottomEdges: title

	exports.layout()



exports.Keyboard = (array) ->
	if array == undefined
		array = []
	for prop in defaults.keyboardProps
		if array[prop]			
			@[prop] = array[prop]
		else 
			@[prop] = defaults.keyboardProps[prop]
	board = new Layer backgroundColor:"#D1D5DA", name:"keyboard"
	board.constraints = (bottom:0, height:216, trailing:0, leading:0)
	exports.layout()
	lettersArray = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v",  "b", "n", "m"]
	keysArray = []
	spacer = exports.px(5)
	if exports.scale == 3 || exports.width == 640
		spacer = exports.px(6)
	rowsMap = [
		{ 
			"padding" : exports.px(4)
			"startIndex" : 0
			"endIndex" : 9
			"marginTop" : exports.px(10)
		},
		{ 
			"padding" : 22 * exports.scale
			"startIndex" : 10
			"endIndex" : 18
			"marginTop" : 22 * exports.scale
		},
		{ 
			"padding" : 59 * exports.scale
			"startIndex" : 19
			"endIndex" : 25
			"marginTop" : 34 * exports.scale
		}
	]
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


	shiftKey = new Layer superLayer:board, name:"shift", borderRadius:exports.px(5), backgroundColor:"#AAB3BC", shadowY:exports.px(1), shadowColor:"#929498"
	shiftKey.constraints = (bottom:56, leading:3, width:42, height:42)
	shiftIcon = new Layer width:exports.px(20), height:exports.px(19), superLayer:shiftKey, backgroundColor:"transparent", x:exports.px(11), y:exports.px(11)
	shiftIcon.html = "<?xml version='1.0' encoding='UTF-8' standalone='no'?>
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

	shiftIcon.states.add
		on:
			html: "<?xml version='1.0' encoding='UTF-8' standalone='no'?>
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
	shiftIcon.states.animationOptions =
  	  time: .01

  	deleteKey = new Layer superLayer:board, borderRadius:exports.px(5), backgroundColor:"#AAB3BC", shadowY:exports.px(1), shadowColor:"#929498"
  	deleteKey.constraints = (bottom:56, trailing:3, width:42, height:42)
  	deleteIcon = new Layer superLayer:deleteKey, width:exports.px(24), height:exports.px(18), backgroundColor:"transparent"
  	deleteIcon.constraints = (top:13, leading:10)

  	deleteIcon.states.add 
  		on: 
  			html: "<?xml version='1.0' encoding='UTF-8' standalone='no'?>
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

  	deleteIcon.states.add
  		off: 
  			html: "<?xml version='1.0' encoding='UTF-8' standalone='no'?>
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


  	deleteKey.on Events.TouchStart, ->
  		deleteKey.backgroundColor = "white"
  		deleteIcon.states.switchInstant("on")

  	deleteKey.on Events.TouchEnd, ->
  		deleteKey.backgroundColor = "#AAB3BC"
  		deleteIcon.states.switchInstant("off")

  	deleteIcon.states.switchInstant("off")

	shiftIcon.on Events.Click, ->
		shiftIcon.states.next()
		if shiftIcon.states.state == "on"
			shiftKey.backgroundColor = "white"
			for key in keysArray
				key.style['text-transform'] = 'uppercase'
			box.style['text-transform'] = 'uppercase'
		else 
			shiftKey.backgroundColor = "#AAB3BC"
			for key in keysArray
				key.style["text-transform"] = 'lowercase'
			box.style["text-transform"] = 'lowercase'

	for letter in lettersArray
		index = lettersArray.indexOf(letter) 
		key = new Layer name:letter, superLayer:board, borderRadius:5*exports.scale, backgroundColor:"white", color:"black", shadowY:exports.px(1), shadowColor:"#929498"
		keyPopUp.bringToFront()
		box.bringToFront()
		if exports.scale == 2
			key.constraints = (width:32, height:42)
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
			key.constraints = (width:35, height:46)
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
		key.html = letter
		if index <= rowsMap[0].endIndex
			rowIndex = index - rowsMap[0].startIndex
			key.x = rowsMap[0].padding + (rowIndex*spacer) + (rowIndex*key.width)
			key.y = rowsMap[0].marginTop
		if index > rowsMap[0].endIndex && index <= rowsMap[1].endIndex
			rowIndex = index - rowsMap[1].startIndex
			key.x = rowsMap[1].padding + (rowIndex*spacer) + (rowIndex*key.width)
			key.y = rowsMap[1].marginTop + key.height
		if index > rowsMap[1].endIndex
			rowIndex = index - rowsMap[2].startIndex
			key.x = rowsMap[2].padding + (rowIndex*spacer) + (rowIndex*key.width)
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
			if shiftIcon.states.state == "on"
				shiftIcon.states.switch("default")
				for key in keysArray
					key.style['text-transform'] = 'lowercase'
				box.style['text-transform'] = 'lowercase'




	numKey = new Layer superLayer:board, name:"num", borderRadius:exports.px(5), backgroundColor:"#AAB3BC", shadowY:exports.px(1), shadowColor:"#929498", color:"black"
	numKey.constraints = (width:40.5, height:42, bottom:4, leading:3)
	numKey.html = "123"
	numKey.style = {
		"font-size" : exports.px(16) + "px"
		"font-weight" : 400
		"font-family" : '-apple-system, Helvetica, Arial, sans-serif'
		'text-align' : 'center'
		'line-height' : exports.px(42) + "px"

	}

	exports.layout()
	emojiKey = new Layer superLayer:board, name:"emoji", borderRadius:exports.px(5), backgroundColor:"#AAB3BC", shadowY:exports.px(1), shadowColor:"#929498"
	emojiKey.constraints = (width:41, height:42, bottom:4, leading:[numKey, 6])
	emojiKey.html = "<?xml version='1.0' encoding='UTF-8' standalone='no'?>
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
	emojiKey.style = {
		"padding-top": exports.px(11) + "px"
		"padding-left": exports.px(11) + "px"
	}

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

	emojiKey.on Events.TouchStart, ->
		emojiKey.backgroundColor = "white"
		emojiBG = new Layer backgroundColor:"#ECEEF1"
		box = exports.px(30)
		emojiBG.constraints = (trailing:1, leading:1, bottom:1, height:258)
		exports.layout()
		emojiGalley = new ScrollComponent superLayer:emojiBG, width:emojiBG.width, height:emojiBG.height - exports.px(40)
		emojiGalley.speedY = 0
		emojiSpacer = exports.px(6)
		emojiPicker = new Layer backgroundColor:"transparent", name:"emoji picker", superLayer:emojiBG
		emojiPicker.constraints = 
			leading:1
			trailing:1
			bottom:1
			height:42
		ABC = new Layer backgroundColor:"transparent", superLayer:emojiPicker
		ABC.html = "ABC"
		ABC.style = {
			"font-size" : exports.px(15) + "px"
			"font-weight" : 500
			"font-family" : '-apple-system, Helvetica, Arial, sans-serif'
			"color" : "#4F555D"
		}
		ABC.constraints = 
			leading:12
			bottom:14
			width:30
			height:15

		exports.layout()
		row = -1
		ABC.on Events.Click, ->
			emojiBG.destroy()
		frequent = new Layer superLayer:emojiPicker, backgroundColor:"transparent"
		frequent.html = "<?xml version='1.0' encoding='UTF-8' standalone='no'?>
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
		frequent.constraints = 
			leading : [ABC, 15]
			bottom: 14
			width:16
			height:20
		exports.layout()
		smileys = new Layer superLayer:emojiPicker, backgroundColor:"transparent", opacity:.4
		smileys.html = "<?xml version='1.0' encoding='UTF-8' standalone='no'?>
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
		smileys.constraints =
			leading : [frequent, 15]
			bottom: 14
			width:16
			height:20
		exports.layout()
		animals = new Layer superLayer:emojiPicker, backgroundColor:"transparent", opacity:.4
		animals.html = "<?xml version='1.0' encoding='UTF-8' standalone='no'?>
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
		animals.constraints =
			leading : [smileys, 15]
			bottom: 14
			width:16
			height:20
		exports.layout()
		food = new Layer superLayer:emojiPicker, backgroundColor:"transparent", opacity:.4
		food.html = "<?xml version='1.0' encoding='UTF-8' standalone='no'?>
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
		food.constraints =
			leading : [animals, 15]
			bottom: 14
			width:16
			height:20
		exports.layout()
		activity = new Layer superLayer:emojiPicker, backgroundColor:"transparent", opacity:.4
		activity.html = "<?xml version='1.0' encoding='UTF-8' standalone='no'?>
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
		activity.constraints =
			leading : [food, 15]
			bottom: 14
			width:16
			height:20
		exports.layout()
		travel = new Layer superLayer:emojiPicker, backgroundColor:"transparent", opacity:.4
		travel.html = "<?xml version='1.0' encoding='UTF-8' standalone='no'?>
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
			</svg>"
		travel.constraints =
			leading : [activity, 15]
			bottom: 14
			width:16
			height:20
		exports.layout()
		objects = new Layer superLayer:emojiPicker, backgroundColor:"transparent", opacity:.4
		objects.html = "<?xml version='1.0' encoding='UTF-8' standalone='no'?>
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
		objects.constraints =
			leading : [travel, 15]
			bottom: 14
			width:16
			height:20
		exports.layout()
		symbols = new Layer superLayer:emojiPicker, backgroundColor:"transparent", opacity:.4
		symbols.html = "<?xml version='1.0' encoding='UTF-8' standalone='no'?>
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
		symbols.constraints =
			leading : [objects, 15]
			bottom: 14
			width:16
			height:20
		exports.layout()
		flags = new Layer superLayer:emojiPicker, backgroundColor:"transparent", opacity:.4
		flags.html = "<?xml version='1.0' encoding='UTF-8' standalone='no'?>
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
		flags.constraints =
			leading : [symbols, 15]
			bottom: 14
			width:16
			height:20
		exports.layout()

		loadEmojis = (em) ->
			row++ 
			index = emojisArray.indexOf(em)
			col = Math.floor(index/5)
			if row > 4
				row = 0 
			emoji = new Layer x:col*box + (emojiSpacer * col) + exports.px(3), y:row*box + (emojiSpacer * row) + exports.px(40), superLayer:emojiGalley.content, width:box, height:box, name:decodeURIComponent(em), backgroundColor:"transparent"
			emoji.html = decodeURIComponent(em)
			emoji.style = {
				"font-size" : exports.px(26) + "px"
				"line-height" : box + "px"
				"text-align" : "center"
			}
			emoji.on Events.Click, ->
				print @.name
			emojisLoaded++
			print emojisLoaded

		inc = 200
		firstLoad = .1
		timeInc = 2
		fullAmount = emojisArray.length
		loads = Math.ceil(fullAmount / inc) - 1
		partialAmount = fullAmount % inc
		emojisLoaded = 0
		for i in [0..loads]
			i++
			
		#Scroll Load
		emojiGalley.on Events.Move, ->
			if emojiGalley.scrollX > 2000 && emojisLoaded < 400
				for em in emojisArray[200...400]
					loadEmojis(em)
				emojiGalley.scrollX = 2001
			if emojiGalley.scrollX > 5000 && emojisLoaded < 600
				for em in emojisArray[400...600]
					loadEmojis(em)
				emojiGalley.scrollX = 5001
			if emojiGalley.scrollX > 7500 && emojisLoaded < 800
				for em in emojisArray[600...800]
					loadEmojis(em)
				emojiGalley.scrollX = 7501
			if emojiGalley.scrollX > 10000 && emojisLoaded < 1000
				for em in emojisArray[800...1000]
					loadEmojis(em)
				emojiGalley.scrollX = 10001
			if emojiGalley.scrollX > 12500 && emojisLoaded < 1200
				for em in emojisArray[1000...1297]
					loadEmojis(em)
				emojiGalley.scrollX = 12501

		#Time Load
		Utils.delay 1, -> 
			if emojisLoaded < 400 && emojiGalley.scrollX == 0
				scrollX = emojiGalley.scrollX
				for em in emojisArray[200...400]
					loadEmojis(em)
		Utils.delay 2.5, -> 
			if emojisLoaded < 600 && emojiGalley.scrollX == 0
				scrollX = emojiGalley.scrollX
				for em in emojisArray[400...600]
					loadEmojis(em)
		Utils.delay 2.5, -> 
			if emojisLoaded < 800 && emojiGalley.scrollX == 0
				scrollX = emojiGalley.scrollX
				for em in emojisArray[600...800]
					loadEmojis(em)
		Utils.delay 5.5, -> 
			if emojisLoaded < 1000 && emojiGalley.scrollX == 0
				scrollX = emojiGalley.scrollX
				for em in emojisArray[800...1000]
					loadEmojis(em)
		Utils.delay 7, -> 
			if emojisLoaded < 1297 && emojiGalley.scrollX == 0
				scrollX = emojiGalley.scrollX
				for em in emojisArray[1000...1297]
					loadEmojis(em)


		for em in freqEmojisArray
			loadEmojis(em)
		for em in emojisArray[0...inc]
			loadEmojis(em)


		for sec in emojiSections
			index = emojiSections.indexOf(sec)
			title = new Layer superLayer:emojiGalley.content, backgroundColor:"transparent", x:index*5000 + exports.px(8), height:80, width:800
			title.html = sec
			title.style = {
				"font-size" : exports.px(12) + "px"
				"font-weight" : 600
				"font-family" : '-apple-system, Helvetica, Arial, sans-serif'
				'line-height' : exports.px(42) + "px"
				'letter-spacing' : exports.px(0.7) + "px"
				'color' : "#A5A6A9"
				'text-transform' : 'uppercase'
			}


	emojiKey.on Events.TouchEnd, ->
		emojiKey.backgroundColor = "#AAB3BC"


	returnKey = new Layer superLayer:board, borderRadius:exports.px(5), backgroundColor:"#AAB3BC", shadowY:exports.px(1), shadowColor:"#929498", color:"black"
	returnKey.constraints = (width:87.5, height:42, trailing:3, bottom:4)
	returnKey.html = "return"
	returnKey.style = {
		"font-size" : exports.px(16) + "px"
		"font-weight" : 400
		"font-family" : '-apple-system, Helvetica, Arial, sans-serif'
		'text-align' : 'center'
		'line-height' : exports.px(42) + "px"

	}
	exports.layout()

	spaceKey = new Layer superLayer:board, borderRadius:exports.px(5), backgroundColor:"white", shadowY:exports.px(1), shadowColor:"#929498", color:"black"
	spaceKey.constraints = (width:180, height:42, leading:[emojiKey, 6], bottom:4)
	spaceKey.html = "space"
	spaceKey.style = {
		"font-size" : exports.px(16) + "px"
		"font-weight" : 400
		"font-family" : '-apple-system, Helvetica, Arial, sans-serif'
		'text-align' : 'center'
		'line-height' : exports.px(42) + "px"

	}
	exports.layout()


	spaceKey.on Events.TouchStart, ->
		spaceKey.backgroundColor = "#AAB3BC"
	spaceKey.on Events.TouchEnd, ->
		spaceKey.backgroundColor = "white"


	returnKey.on Events.TouchStart, ->
		returnKey.backgroundColor = "white"
	returnKey.on Events.TouchEnd, ->
		returnKey.backgroundColor = "#AAB3BC"


	return {
		"board" : board
		"keys" : keysArray
		"key" : {
			"q" : keysArray[0]
			"w" : keysArray[1]
			"e" : keysArray[2]
			"r" : keysArray[3]
			"t" : keysArray[4]
			"y" : keysArray[5]
			"u" : keysArray[6]
			"i" : keysArray[7]
			"o" : keysArray[8]
			"p" : keysArray[9]
			"a" : keysArray[10]
			"s" : keysArray[11]
			"d" : keysArray[12]
			"f" : keysArray[13]
			"g" : keysArray[14]
			"h" : keysArray[15]
			"j" : keysArray[16]
			"k" : keysArray[17]
			"l" : keysArray[18]
			"z" : keysArray[19]
			"x" : keysArray[20]
			"c" : keysArray[21]
			"v" : keysArray[22]
			"b" : keysArray[23]
			"n" : keysArray[24]
			"m" : keysArray[25]
		}
	}


