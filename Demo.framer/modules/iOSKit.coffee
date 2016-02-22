#iOSKit Module
#By Kevyn Arnott @kvyn_
framerDevices = {
#Fullscreen
"fullscreen" : { height: window.innerHeight, width: window.innerWidth,	scale:1, mobile:false, platform:"web"}

#Safari Browsers
"desktop-safari-1024-600": { height: 600, width: 1024,	scale: 1, mobile:false, platform:"web"}
"desktop-safari-1280-800": { height: 800, width: 1280,	scale: 1, mobile:false, platform:"web"}
"desktop-safari-1440-900": { height: 900, width: 1440,	scale: 1, mobile:false, platform:"web"}

#iPhones

#5S
"iphone-5s-spacegray": { height: 1136, width: 640,	scale: 2, mobile:true, platform:"iOS"}
"iphone-5s-spacegray-hand": { height: 1136, width: 640,	scale: 2, mobile:true, platform:"iOS"}
"iphone-5s-silver": { height: 1136, width: 640,	scale: 2, mobile:true, platform:"iOS"}
"iphone-5s-silver-hand": { height: 1136, width: 640,	scale: 2, mobile:true, platform:"iOS"}
"iphone-5s-gold": { height: 1136, width: 640,	scale: 2, mobile:true, platform:"iOS"}
"iphone-5s-gold-hand": { height: 1136, width: 640,	scale: 2, mobile:true, platform:"iOS"}
#5c
"iphone-5c-yellow-hand": { height: 2048, width: 1536,	scale: 2, mobile:true, platform:"iOS"}
"iphone-5c-green": { height: 1136, width: 640,	scale: 2, mobile:true, platform:"iOS"}
"iphone-5c-green-hand": { height: 1136, width: 640,	scale: 2, mobile:true, platform:"iOS"}
"iphone-5c-blue": { height: 1136, width: 640,	scale: 2, mobile:true, platform:"iOS"}
"iphone-5c-blue-hand": { height: 1136, width: 640,	scale: 2, mobile:true, platform:"iOS"}
"iphone-5c-red": { height: 1136, width: 640,	scale: 2, mobile:true, platform:"iOS"}
"iphone-5c-red-hand": { height: 1136, width: 640,	scale: 2, mobile:true, platform:"iOS"}
"iphone-5c-white": { height: 1136, width: 640,	scale: 2, mobile:true, platform:"iOS"}
"iphone-5c-white-hand": { height: 1136, width: 640,	scale: 2, mobile:true, platform:"iOS"}
"iphone-5c-yellow": { height: 1136, width: 640,	scale: 2, mobile:true, platform:"iOS"}
"iphone-5c-pink-hand": { height: 1136, width: 640,	scale: 2, mobile:true, platform:"iOS"}
"iphone-5c-pink": { height: 1136, width: 640,	scale: 2, mobile:true, platform:"iOS"}
#6
"iphone-6-spacegray" : { height: 1334, width: 750,	scale: 2, mobile:true, platform:"iOS"}
"iphone-6-spacegray-hand" : { height: 1334, width: 750,	scale: 2, mobile:true, platform:"iOS"}
"iphone-6-silver": { height: 1334, width: 750,	scale: 2, mobile:true, platform:"iOS"}
"iphone-6-silver-hand": { height: 1334, width: 750,	scale: 2, mobile:true, platform:"iOS"}
"iphone-6-gold": { height: 1334, width: 750,	scale: 2, mobile:true, platform:"iOS"}
"iphone-6-gold-hand": { height: 1334, width: 750,	scale: 2, mobile:true, platform:"iOS"}
#6 plus
"iphone-6plus-gold-hand": { height: 2208, width: 1242,	scale: 3, mobile:true, platform:"iOS"}
"iphone-6plus-gold": { height: 2208, width: 1242,	scale: 3, mobile:true, platform:"iOS"}
"iphone-6plus-silver-hand": { height: 2208, width: 1242,	scale: 3, mobile:true, platform:"iOS"}
"iphone-6plus-silver": { height: 2208, width: 1242,	scale: 3, mobile:true, platform:"iOS"}
"iphone-6plus-spacegray-hand": { height: 2208, width: 1242,	scale: 3, mobile:true, platform:"iOS"}
"iphone-6plus-spacegray": { height: 2208, width: 1242,	scale: 3, mobile:true, platform:"iOS"}
"iphone6plus-gold-hand": { height: 2208, width: 1242,	scale: 3, mobile:true, platform:"iOS"}
"iphone6plus-gold": { height: 2208, width: 1242,	scale: 3, mobile:true, platform:"iOS"}
"iphone6plus-silver-hand": { height: 2208, width: 1242,	scale: 3, mobile:true, platform:"iOS"}
"iphone6plus-silver": { height: 2208, width: 1242,	scale: 3, mobile:true, platform:"iOS"}
"iphone6plus-spacegray-hand": { height: 2208, width: 1242,	scale: 3, mobile:true, platform:"iOS"}
"iphone6plus-spacegray" : { height: 2208, width: 1242,	scale: 3, mobile:true, platform:"iOS"}

#iPads

#Air
"ipad-air-silver-hand": { height: 2048, width: 1536,	scale: 2, mobile:true, platform:"iOS"}
"ipad-air-silver": { height: 2048, width: 1536,	scale: 2, mobile:true, platform:"iOS"}
"ipad-air-spacegray-hand": { height: 2048, width: 1536,	scale: 2, mobile:true, platform:"iOS"}
"ipad-air-spacegray": { height: 2048, width: 1536,	scale: 2, mobile:true, platform:"iOS"}
#mini
"ipad-mini-spacegrey": { height: 1024, width: 768,	scale: 1, mobile:true, platform:"iOS"}
"ipad-mini-spacegrey-hand": { height: 1024, width: 768,	scale: 1, mobile:true, platform:"iOS"}
"ipad-mini-silver":{ height: 1024, width: 768, scale: 1, mobile:true, platform:"iOS"}
"ipad-mini-silver-hand": { height: 1024, width: 768, scale: 1, mobile:true, platform:"iOS"}

#Apple Watches
"applewatch-38-black-bracelet": { height: 340, width: 272,	scale: 2, mobile:true, platform:"watchOS"}
"applewatch-38-steel-bracelet": { height: 340, width: 272,	scale: 2, mobile:true, platform:"watchOS"}
"applewatch-42-black-bracelet": { height: 390, width: 312,	scale: 2, mobile:true, platform:"watchOS"}
"applewatch-42-steel-bracelet": { height: 390, width: 312,	scale: 2, mobile:true, platform:"watchOS"}
"applewatchedition-38-gold-buckle-blue": { height: 340, width: 272,	scale: 2, mobile:true, platform:"watchOS"}
"applewatchedition-38-gold-buckle-gray": { height: 340, width: 272,	scale: 2, mobile:true, platform:"watchOS"}
"applewatchedition-38-gold-buckle-red": { height: 340, width: 272,	scale: 2, mobile:true, platform:"watchOS"}
"applewatchedition-38-gold-sportband-black": { height: 340, width: 272,	scale: 2, mobile:true, platform:"watchOS"}
"applewatchedition-38-gold-sportband-white": { height: 340, width: 272,	scale: 2, mobile:true, platform:"watchOS"}
"applewatchedition-42-gold-buckle-blue": { height: 390, width: 312,	scale: 2, mobile:true, platform:"watchOS"}
"applewatchedition-42-gold-buckle-gray": { height: 390, width: 312,	scale: 2, mobile:true, platform:"watchOS"}
"applewatchedition-42-gold-buckle-red": { height: 390, width: 312,	scale: 2, mobile:true, platform:"watchOS"}
"applewatchedition-42-gold-sportband-black": { height: 390, width: 312,	scale: 2, mobile:true, platform:"watchOS"}
"applewatchedition-42-gold-sportband-white": { height: 390, width: 312,	scale: 2, mobile:true, platform:"watchOS"}
"applewatchsport-38-aluminum-sportband-black": { height: 340, width: 272,	scale: 2, mobile:true, platform:"watchOS"}
"applewatchsport-38-aluminum-sportband-blue": { height: 340, width: 272,	scale: 2, mobile:true, platform:"watchOS"}
"applewatchsport-38-aluminum-sportband-green": { height: 340, width: 272,	scale: 2, mobile:true, platform:"watchOS"}
"applewatchsport-38-aluminum-sportband-pink": { height: 340, width: 272,	scale: 2, mobile:true, platform:"watchOS"}
"applewatchsport-38-aluminum-sportband-white": { height: 340, width: 272,	scale: 2, mobile:true, platform:"watchOS"}
"applewatchsport-42-aluminum-sportband-black": { height: 390, width: 312,	scale: 2, mobile:true, platform:"watchOS"}
"applewatchsport-42-aluminum-sportband-blue": { height: 390, width: 312,	scale: 2, mobile:true, platform:"watchOS"}
"applewatchsport-42-aluminum-sportband-green": { height: 390, width: 312,	scale: 2, mobile:true, platform:"watchOS"}
"applewatchsport-42-aluminum-sportband-pink": { height: 390, width: 312,	scale: 2, mobile:true, platform:"watchOS"}
"applewatchsport-42-aluminum-sportband-white": { height: 390, width: 312,	scale: 2, mobile:true, platform:"watchOS"}

#Nexus Devices
"nexus-5-black": { height: 1920, width: 1080,	scale: 3, mobile:true, platform:"android"}
"nexus-5-black-hand": { height: 1920, width: 1080,	scale: 3, mobile:true, platform:"android"}
"nexus-9": { height: 2048, width: 1536,	scale: 2, mobile:true, platform:"android"}
}

exports.name = 0
exports.scale = 0
exports.height = 0
exports.width = 0
exports.mobile = 0
exports.platform = 0
exports.orientation = 0

exports.getDevice = ->
	device = Framer.Device.deviceType
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
	constraintProps : ["height", "width"]
	constraintTypes: ["top", "leading", "trailing", "bottom"]
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
}
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
			for p in defaults.constraintProps
				layoutSize(layer, p)
			for c in defaults.constraintTypes
				layoutChange(layer, c)

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
			if layer.constraints[opp]
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



exports.Keyboard = (array) ->
	board = new Layer backgroundColor:"#D1D5DA", name:"keyboard"
	board.constraints = (bottom:0, height:216, trailing:1, leading:1)
	exports.layout()
	lettersArray = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v",  "b", "n", "m"]
	keysArray = []
	spacer = exports.px(5)
	if exports.scale == 3 || exports.width == 640
		spacer = exports.px(6)
	rowsMap = [
		{ 
			"padding" : 4 * exports.scale
			"startIndex" : 0
			"endIndex" : 9
			"marginTop" : 10 * exports.scale
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



	for letter in lettersArray
		index = lettersArray.indexOf(letter) 
		key = new Layer name:letter, superLayer:board, borderRadius:5*exports.scale, backgroundColor:"white", color:"black", shadowY:1, shadowColor:"black", shadowOpacity:.25
		keyPopUp.bringToFront()
		box.bringToFront()
		if exports.scale == 2
			key.constraints = (width:32, height:44)
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
			@keyHeight = exports.px(122)
			@keyWidth = exports.px(65)
			@lineHeight = @keyWidth + "px"

		if exports.width == 640
			key.constraints = (width:26, height:39)

		keyPopUp.visible = false

		exports.layout()
		key.style = {
			"font-size" : 25 * exports.scale + "px"
			"font-weight" : 300
			"font-family" : '-apple-system, Helvetica, Arial, sans-serif'
			'text-align' : 'center'
			'line-height' : key.height - exports.px(5) + "px"
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



		board.on Events.TouchStart, ->
			


		key.on Events.TouchStart, ->
			keyPopUp.visible = true	
			box.html = @.name
			keyPopUp.maxY = @.maxY
			keyPopUp.midX = @.midX

		key.on Events.TouchMove, ->
			box.html = @.name
			keyPopUp.maxY = @.maxY
			keyPopUp.midX = @.midX	

		board.on Events.TouchEnd, ->
			keyPopUp.visible = false





		

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


