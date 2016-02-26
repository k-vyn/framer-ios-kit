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
	keyboardProps: ["returnKey"]
	keyboard: {
		returnKey:"default"
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
	if array == undefined
		array = []
	for prop in defaults.keyboardProps
		if array[prop]			
			@[prop] = array[prop]
		else 
			@[prop] = defaults.keyboardProps[prop]
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
	emojiSections = ["Smileys & People", "Animals & Nature", "Food & Drink", "Activity", "Travel & Places", "Objects", "Symbols", "Flags"]
	rawEmojis = ["98 80", "98 AC", "98 81", "98 82", "98 83", "98 84", "98 85", "98 86", "98 87", "98 89", "98 8a", "99 82", "99 83", "E2 98 BA EF B8 8F", "98 8B" , "98 8C", "98 8D", "98 98", "98 97", "98 99", "98 9A", "98 9C", "98 9D", "98 9B", "A4 91", "A4 93", "98 8E", "A4 97", "98 8F", "98 B6", "98 90", "98 91", "98 92", "99 84", "A4 94", "98 B3", "98 9E", "98 9F", "98 A0", "98 A1", "98 94", "98 95", "99 81", "E2 98 B9 EF B8 8F", "98 A3", "98 96", "98 AB", "98 A9", "98 A4", "98 AE", "98 B1", "98 A8", "98 B0", "98 AF", "98 A6", "98 A7", "98 A2", "98 A5", "98 AA", "98 93", "98 AD", "98 B5", "98 B2", "A4 90", "98 B7", "A4 92", "A4 95", "98 B4", "92 A4", "92 A9", "98 88", "91 BF", "91 B9", "91 BA", "92 80", "91 BB", "91 BD", "A4 96", "98 BA", "98 B8", "98 B9", "98 BB", "98 BC", "98 BD", "99 80", "98 BF", "98 BE", "99 8C", "91 8F", "91 8B", "91 8D", "91 8E", "91 8A", "E2 9C 8A", "E2 9C 8C EF B8 8F", "91 8C", "E2 9C 8B", "91 90", "92 AA", "99 8F", "E2 98 9D EF B8 8F", "91 86", "91 87", "91 88", "91 89", "96 95", "96 90", "A4 98", "96 96", "E2 9C 8D EF B8 8F", "92 85", "91 84", "91 85", "91 82", "91 83", "91 81", "91 80", "91 A4", "91 A5", "97 A3", "91 B6", "91 A6", "91 A7", "91 A8", "91 A9", "91 B1", "91 B4", "91 B5", "91 B2", "91 B3", "91 AE", "91 B7", "92 82", "95 B5", "8E 85", "91 BC", "91 B8", "91 B0", "9A B6", "8F 83", "92 83", "91 AF", "91 AB", "91 AC", "91 AD", "99 87", "92 81", "99 85", "99 86", "99 8B", "99 8E", "99 8D", "92 87", "92 86", "92 91", "91 A9 E2 80 8D E2 9D A4 EF B8 8F E2 80 8D F0 9F 91 A9", "91 A8 E2 80 8D E2 9D A4 EF B8 8F E2 80 8D F0 9F 91 A8", "92 8F", "91 A9 E2 80 8D E2 9D A4 EF B8 8F E2 80 8D F0 9F 92 8B E2 80 8D F0 9F 91 A9", "91 A8 E2 80 8D E2 9D A4 EF B8 8F E2 80 8D F0 9F 92 8B E2 80 8D F0 9F 91 A8", "91 AA", "91 A8 E2 80 8D F0 9F 91 A9 E2 80 8D F0 9F 91 A7", "91 A8 E2 80 8D F0 9F 91 A9 E2 80 8D F0 9F 91 A7 E2 80 8D F0 9F 91 A6", "91 A8 E2 80 8D F0 9F 91 A9 E2 80 8D F0 9F 91 A6 E2 80 8D F0 9F 91 A6", "91 A8 E2 80 8D F0 9F 91 A9 E2 80 8D F0 9F 91 A7 E2 80 8D F0 9F 91 A7", "91 A9 E2 80 8D F0 9F 91 A9 E2 80 8D F0 9F 91 A6", "91 A9 E2 80 8D F0 9F 91 A9 E2 80 8D F0 9F 91 A7", "91 A9 E2 80 8D F0 9F 91 A9 E2 80 8D F0 9F 91 A7 E2 80 8D F0 9F 91 A6", "91 A9 E2 80 8D F0 9F 91 A9 E2 80 8D F0 9F 91 A6 E2 80 8D F0 9F 91 A6", "91 A9 E2 80 8D F0 9F 91 A9 E2 80 8D F0 9F 91 A7 E2 80 8D F0 9F 91 A7", "91 A8 E2 80 8D F0 9F 91 A8 E2 80 8D F0 9F 91 A6", "91 A8 E2 80 8D F0 9F 91 A8 E2 80 8D F0 9F 91 A7", "91 A8 E2 80 8D F0 9F 91 A8 E2 80 8D F0 9F 91 A7 E2 80 8D F0 9F 91 A6", "91 A8 E2 80 8D F0 9F 91 A8 E2 80 8D F0 9F 91 A6 E2 80 8D F0 9F 91 A6", "91 A8 E2 80 8D F0 9F 91 A8 E2 80 8D F0 9F 91 A7 E2 80 8D F0 9F 91 A7", "91 9A", "91 95", "91 96", "91 94", "91 97", "91 99", "91 98", "92 84", "92 8B", "91 A3", "91 A0", "91 A1", "91 A2", "91 9E", "91 9F", "91 92", "8E A9", "E2 9B 91", "8E 93", "91 91", "8E 92", "91 9D", "91 9B", "91 9C", "92 BC", "91 93", "95 B6", "92 8D", "8C 82", "9B 91", "90 B6", "90 B1", "90 AD", "90 B9", "90 B0", "90 BB", "90 BC", "90 A8", "90 AF", "A6 81", "90 AE", "90 B7", "90 BD", "90 B8", "90 99", "90 B5", "99 88", "99 89", "99 8A", "90 92", "90 94", "90 A7", "90 A6", "90 A4", "90 A3", "90 A5", "90 BA", "90 97", "90 B4", "A6 84", "90 9D", "90 9B", "90 8C", "90 9E", "90 9C", "95 B7", "A6 82", "A6 80", "90 8D", "90 A2", "90 A0", "90 9F", "90 A1", "90 AC", "90 B3", "90 8B", "90 8A", "90 86", "90 85", "90 83", "90 82", "90 84", "90 AA", "90 AB", "90 98", "90 90", "90 8F", "90 91", "90 8E", "90 96", "90 80", "90 81", "90 93", "A6 83", "95 8A", "90 95", "90 A9", "90 88", "90 87", "90 BF", "90 BE", "90 89", "90 B2", "8C B5", "8E 84", "8C B2", "8C B3", "8C B4", "8C B1", "8C BF", "E2 98 98", "8D 80", "8E 8D", "8E 8B", "8D 83", "8D 82", "8D 81", "8C BE", "8C BA", "8C BA", "8C BB", "8C B9", "8C B7", "8C BC", "8C B8", "92 90", "8D 84", "8C B0", "8E 83", "90 9A", "95 B8", "8C 8E", "8C 8D", "8C 8F", "8C 95", "8C 96", "8C 97", "8C 98", "8C 91", "8C 92", "8C 93", "8C 94", "8C 9A", "8C 9D", "8C 9B", "8C 9C", "8C 9E", "8C 99", "E2 AD 90 EF B8 8F", "8C 9F", "92 AB", "E2 9C A8", "E2 98 84 EF B8 8F", "E2 98 80 EF B8 8F", "8C A4", "E2 9B 85 EF B8 8F", "8C A5", "8C A6", "E2 98 81 EF B8 8F", "8C A7", "E2 9B 88", "8C A9", "E2 9A A1 EF B8 8F", "94 A5", "92 A5", "E2 9D 84 EF B8 8F", "8C A8", "E2 98 83 EF B8 8F", "E2 9B 84 EF B8 8F", "8C AC", "92 A8", "8C AA", "8C AB", "E2 98 82 EF B8 8F", "E2 98 94 EF B8 8F", "92 A7", "92 A6", "8C 8A", "9B 91", "9B 91", "8D 8F", "8D 8E", "8D 90", "8D 8A", "8D 8B", "8D 8C", "8D 89", "8D 87", "8D 93", "8D 88", "8D 92", "8D 91", "8D 8D", "8D 85", "8D 86", "8C B6", "8C BD", "8D A0", "8D AF", "8D 9E", "A7 80", "8D 97", "8D 96", "8D A4", "8D B3", "8D 94", "8D 9F", "8C AD", "8D 95", "8D 9D", "8C AE", "8C AF", "8D 9C", "8D B2", "8D A5", "8D A3", "8D B1", "8D 9B", "8D 99", "8D 9A", "8D 98", "8D A2", "8D A1", "8D A7", "8D A8", "8D A6", "8D B0", "8E 82", "8D AE", "8D AC", "8D AD", "8D AB", "8D BF", "8D A9", "8D AA", "8D BA", "8D BB", "8D B7", "8D B8", "8D B9", "8D BE", "8D B6", "8D B5", "E2 98 95 EF B8 8F", "8D BC", "8D B4", "8D BD","9B 91", "9B 91", "9B 91", "E2 9A BD EF B8 8F", "8F 80", "8F 88", "E2 9A BE EF B8 8F", "8E BE", "8F 90", "8F 89", "8E B1", "E2 9B B3 EF B8 8F", "8F 8C", "8F 93", "8F B8", "8F 92", "8F 91", "8F 8F", "8E BF", "E2 9B B7", "8F 82", "E2 9B B8", "8F B9", "8E A3", "9A A3", "8F 8A", "8F 84", "9B 80", "E2 9B B9", "8F 8B", "9A B4", "9A B5", "8F 87", "95 B4", "8F 86", "8E BD", "8F 85", "8E 96", "8E 97", "8F B5", "8E AB", "8E 9F", "8E AD", "8E A8", "8E AA", "8E A4", "8E A7", "8E BC", "8E B9", "8E B7", "8E BA", "8E B8", "8E BB", "8E AC", "8E AE", "91 BE", "8E AF", "8E B2", "8E B0", "8E B3", "9B 91", "9B 91", "9B 91", "9A 97", "9A 95", "9A 99", "9A 8C", "9A 8E", "8F 8E", "9A 93", "9A 91", "9A 92", "9A 90", "9A 9A", "9A 9B", "9A 9C","8F 8D", "9A B2", "9A A8", "9A 94", "9A 8D", "9A 98", "9A 96", "9A A1", "9A A0", "9A AF", "9A 83", "9A 8B", "9A 9D", "9A 84", "9A 85", "9A 88", "9A 9E", "9A 82", "9A 86", "9A 87", "9A 8A", "9A 89", "9A 81", "9B A9", "E2 9C 88 EF B8 8F", "9B AB", "9B AC", "E2 9B B5 EF B8 8F", "9B A5", "9A A4", "E2 9B B4", "9B B3", "9A 80", "9B B0", "92 BA", "E2 9A 93 EF B8 8F", "9A A7", "E2 9B BD EF B8 8F", "9A 8F", "9A A6", "9A A5", "8F 81", "9A A2", "8E A1", "8E A2", "8E A0", "8F 97", "8C 81", "97 BC", "8F AD", "E2 9B B2 EF B8 8F", "8E 91", "E2 9B B0", "8F 94", "97 BB", "8C 8B", "97 BE", "8F 95", "E2 9B BA EF B8 8F", "8F 9E", "9B A3", "9B A4", "8C 85", "8C 84", "8F 9C", "8F 96", "8F 9D", "8C 87", "8C 86", "8F 99", "8C 83", "8C 89", "8C 8C", "8C A0", "8E 87", "8E 86", "8C 88", "8F 98", "8F B0", "8F AF", "8F 9F", "97 BD", "8F A0", "8F A1", "8F 9A", "8F A2", "8F AC", "8F A3", "8F A4", "8F A5", "8F A6", "8F A8", "8F AA", "8F AB", "8F A9", "92 92", "8F 9B", "E2 9B AA EF B8 8F", "95 8C", "95 8D", "95 8B", "E2 9B A9", "E2 8C 9A EF B8 8F", "93 B1", "93 B2", "92 BB", "E2 8C A8 EF B8 8F", "96 A5", "96 A8", "96 B1", "96 B2", "95 B9", "97 9C", "92 BD", "92 BE", "92 BF", "93 80", "93 BC", "93 B7", "93 B8", "93 B9", "8E A5", "93 BD", "8E 9E", "93 9E", "E2 98 8E EF B8 8F", "93 9F", "93 A0", "93 BA", "93 BB", "8E 99", "8E 9A", "8E 9B", "E2 8F B1", "E2 8F B2", "E2 8F B0", "95 B0", "E2 8F B3", "E2 8C 9B EF B8 8F", "93 A1", "94 8B", "94 8C", "92 A1", "94 A6", "95 AF", "97 91", "9B A2", "92 B8", "92 B5", "92 B4", "92 B6", "92 B7", "92 B0", "92 B3", "92 8E", "E2 9A 96", "94 A7", "94 A8", "E2 9A 92", "9B A0", "E2 9B 8F", "94 A9", "E2 9A 99", "E2 9B 93", "94 AB", "92 A3", "94 AA", "97 A1", "E2 9A 94", "9B A1", "9A AC", "E2 98 A0 EF B8 8F", "E2 9A B0", "E2 9A B1", "8F BA", "94 AE", "93 BF", "92 88", "E2 9A 97", "94 AD", "94 AC", "95 B3", "92 8A", "92 89", "8C A1", "8F B7", "94 96", "9A BD", "9A BF", "9B 81", "94 91", "97 9D", "9B 8B", "9B 8C", "9B 8F", "9A AA", "9B 8E", "96 BC", "97 BA", "E2 9B B1", "97 BF", "9B 8D", "8E 88", "8E 8F", "8E 80", "8E 81", "8E 8A", "8E 89", "8E 8E", "8E 90", "8E 8C", "8F AE", "E2 9C 89 EF B8 8F", "93 A9", "93 A8", "93 A7", "92 8C", "93 AE", "93 AA", "93 AB", "93 AC", "93 AD", "93 A6", "93 AF", "93 A5", "93 A4", "93 9C", "93 83", "93 91", "93 8A", "93 88", "93 89", "93 84", "93 85", "93 86", "97 93", "93 87", "97 83", "97 B3", "97 84", "93 8B", "97 92", "93 81", "93 82", "97 82", "97 9E", "93 B0", "93 93", "93 95", "93 97", "93 98", "93 99", "93 94", "93 92", "93 9A", "93 96", "94 97", "93 8E", "96 87", "E2 9C 82 EF B8 8F", "93 90", "93 8F", "93 8C", "93 8D", "9A A9", "8F B3", "8F B4", "94 90", "94 92", "94 93", "94 8F", "96 8A", "96 8B", "E2 9C 92 EF B8 8F", "93 9D", "E2 9C 8F EF B8 8F", "96 8D", "96 8C", "94 8D", "94 8E", "9B 91", "9B 91", "E2 9D A4 EF B8 8F", "92 9B", "92 9A", "92 99", "92 9C", "92 94", "E2 9D A3 EF B8 8F", "92 95", "92 9E", "92 93", "92 97", "92 96", "92 98", "92 9D", "92 9F", "E2 98 AE EF B8 8F", "E2 9C 9D EF B8 8F", "E2 98 AA EF B8 8F", "95 89", "E2 98 B8 EF B8 8F", "E2 9C A1 EF B8 8F", "94 AF", "95 8E", "E2 98 AF EF B8 8F", "E2 98 A6 EF B8 8F", "9B 90", "E2 9B 8E", "E2 99 88 EF B8 8F", "E2 99 89 EF B8 8F", "E2 99 8A EF B8 8F", "E2 99 8B EF B8 8F", "E2 99 8C EF B8 8F", "E2 99 8D EF B8 8F", "E2 99 8E EF B8 8F", "E2 99 8F EF B8 8F", "E2 99 90 EF B8 8F", "E2 99 91 EF B8 8F", "E2 99 92 EF B8 8F", "E2 99 93 EF B8 8F", "86 94", "E2 9A 9B", "88 B3", "88 B9", "E2 98 A2 EF B8 8F", "E2 98 A3 EF B8 8F", "93 B4", "93 B3", "88 B6", "88 9A EF B8 8F", "88 B8", "88 BA", "88 B7 EF B8 8F", "E2 9C B4 EF B8 8F", "86 9A", "89 91", "92 AE", "89 90", "E3 8A 99 EF B8 8F", "E3 8A 97 EF B8 8F", "88 B4", "88 B5", "88 B2", "85 B0 EF B8 8F", "85 B1 EF B8 8F", "86 8E", "86 91", "85 BE EF B8 8F", "86 98", "E2 9B 94 EF B8 8F", "93 9B", "9A AB", "E2 9D 8C", "E2 AD 95 EF B8 8F", "92 A2", "E2 99 A8 EF B8 8F", "9A B7", "9A AF", "9A B3", "9A B1", "94 9E", "93 B5", "E2 9D 97 EF B8 8F", "E2 9D 95", "E2 9D 93", "E2 9D 94", "E2 80 BC EF B8 8F", "E2 81 89 EF B8 8F", "92 AF", "94 85", "94 86", "94 B1", "E2 9A 9C", "E3 80 BD EF B8 8F", "E2 9A A0 EF B8 8F", "9A B8", "94 B0", "E2 99 BB EF B8 8F", "88 AF EF B8 8F", "92 B9", "E2 9D 87 EF B8 8F", "E2 9C B3 EF B8 8F", "E2 9D 8E", "E2 9C 85", "92 A0", "8C 80", "E2 9E BF", "8C 90", "E2 93 82 EF B8 8F", "8F A7", "88 82 EF B8 8F", "9B 82", "9B 83", "9B 84", "9B 85", "E2 99 BF EF B8 8F", "9A AD", "9A BE", "85 BF EF B8 8F", "9A B0", "9A B9", "9A BA", "9A BC", "9A BB", "9A AE", "8E A6", "93 B6", "88 81", "86 96", "86 97", "86 99", "86 92", "86 95", "86 93", "30 EF B8 8F E2 83 A3", "31 EF B8 8F E2 83 A3", "32 EF B8 8F E2 83 A3", "33 EF B8 8F E2 83 A3", "34 EF B8 8F E2 83 A3", "35 EF B8 8F E2 83 A3", "36 EF B8 8F E2 83 A3", "37 EF B8 8F E2 83 A3", "38 EF B8 8F E2 83 A3", "39 EF B8 8F E2 83 A3", "94 9F", "94 A2", "E2 96 B6 EF B8 8F", "E2 8F B8", "E2 8F AF", "E2 8F B9", "E2 8F BA", "E2 8F AD", "E2 8F AE", "E2 8F A9", "E2 8F AA", "94 80", "94 81", "94 82", "E2 97 80 EF B8 8F", "94 BC", "94 BD", "E2 8F AB", "E2 8F AC", "E2 9E A1 EF B8 8F", "E2 AC 85 EF B8 8F", "E2 AC 86 EF B8 8F", "E2 AC 87 EF B8 8F", "E2 86 97 EF B8 8F", "E2 86 98 EF B8 8F", "E2 86 99 EF B8 8F", "E2 86 96 EF B8 8F", "E2 86 95 EF B8 8F", "E2 86 94 EF B8 8F", "94 84", "E2 86 AA EF B8 8F", "E2 86 A9 EF B8 8F", "E2 A4 B4 EF B8 8F", "E2 A4 B5 EF B8 8F", "23 EF B8 8F E2 83 A3", "2A EF B8 8F E2 83 A3", "E2 84 B9 EF B8 8F", "94 A4", "94 A1", "94 A0", "94 A3", "8E B5", "8E B6", "E3 80 B0 EF B8 8F", "E2 9E B0", "E2 9C 94 EF B8 8F", "94 83", "E2 9E 95", "E2 9E 96", "E2 9E 97", "E2 9C 96 EF B8 8F", "92 B2", "92 B1", "C2 A9 EF B8 8F", "C2 AE EF B8 8F", "E2 84 A2 EF B8 8F", "94 9A", "94 99", "94 9B", "94 9D", "94 9C", "E2 98 91 EF B8 8F", "94 98", "E2 9A AA EF B8 8F", "E2 9A AB EF B8 8F", "94 B4", "94 B5", "94 B8", "94 B9", "94 B6", "94 B7", "94 BA", "E2 96 AA EF B8 8F", "E2 96 AB EF B8 8F", "E2 AC 9B EF B8 8F", "E2 AC 9C EF B8 8F", "94 BB", "E2 97 BC EF B8 8F", "E2 97 BB EF B8 8F", "E2 97 BE EF B8 8F", "E2 97 BD EF B8 8F", "94 B2", "94 B3", "94 88", "94 89", "94 8A", "94 87", "93 A3", "93 A2", "94 94", "94 95", "83 8F", "80 84 EF B8 8F", "E2 99 A0 EF B8 8F", "E2 99 A3 EF B8 8F", "E2 99 A5 EF B8 8F", "E2 99 A6 EF B8 8F", "8E B4", "91 81 E2 80 8D F0 9F 97 A8", "92 AD", "97 AF", "92 AC", "95 90", "95 91", "95 92", "95 93", "95 94", "95 95", "95 96", "95 97", "95 98", "95 99", "95 9A", "95 9B", "95 9C", "95 9D", "95 9E", "95 9F", "95 A0", "95 A1", "95 A2", "95 A3", "95 A4", "95 A5", "95 A6", "95 A7", "9B 91", "87 A6 F0 9F 87 AB", "87 A6 F0 9F 87 BD", "87 A6 F0 9F 87 B1", "87 A9 F0 9F 87 BF", "87 A6 F0 9F 87 B8", "87 A6 F0 9F 87 A9", "87 A6 F0 9F 87 B4", "87 A6 F0 9F 87 AE", "87 A6 F0 9F 87 B6", "87 A6 F0 9F 87 AC", "87 A6 F0 9F 87 B7", "87 A6 F0 9F 87 B2", "87 A6 F0 9F 87 BC", "87 A6 F0 9F 87 BA", "87 A6 F0 9F 87 B9", "87 A6 F0 9F 87 BF", "87 A7 F0 9F 87 B8", "87 A7 F0 9F 87 AD", "87 A7 F0 9F 87 A9", "87 A7 F0 9F 87 A7", "87 A7 F0 9F 87 BE", "87 A7 F0 9F 87 AA", "87 A7 F0 9F 87 BF", "87 A7 F0 9F 87 AF", "87 A7 F0 9F 87 B2", "87 A7 F0 9F 87 B9", "87 A7 F0 9F 87 B4", "87 A7 F0 9F 87 B6", "87 A7 F0 9F 87 A6", "87 A7 F0 9F 87 BC", "87 A7 F0 9F 87 B7", "87 AE F0 9F 87 B4", "87 BB F0 9F 87 AC", "87 A7 F0 9F 87 B3", "87 A7 F0 9F 87 AC", "87 A7 F0 9F 87 AB", "87 A7 F0 9F 87 AE", "87 A8 F0 9F 87 BB", "87 B0 F0 9F 87 AD", "87 A8 F0 9F 87 B2", "87 A8 F0 9F 87 A6", "87 AE F0 9F 87 A8", "87 B0 F0 9F 87 BE", "87 A8 F0 9F 87 AB", "87 B9 F0 9F 87 A9", "87 A8 F0 9F 87 B1", "87 A8 F0 9F 87 B3", "87 A8 F0 9F 87 BD", "87 A8 F0 9F 87 A8", "87 A8 F0 9F 87 B4", "87 B0 F0 9F 87 B2", "87 A8 F0 9F 87 AC", "87 A8 F0 9F 87 A9", "87 A8 F0 9F 87 B0", "87 A8 F0 9F 87 B7", "87 AD F0 9F 87 B7", "87 A8 F0 9F 87 BA", "87 A8 F0 9F 87 BC", "87 A8 F0 9F 87 BE", "87 A8 F0 9F 87 BF", "87 A9 F0 9F 87 B0", "87 A9 F0 9F 87 AF", "87 A9 F0 9F 87 B2", "87 A9 F0 9F 87 B4", "87 AA F0 9F 87 A8", "87 AA F0 9F 87 AC", "87 B8 F0 9F 87 BB", "87 AC F0 9F 87 B6", "87 AA F0 9F 87 B7", "87 AA F0 9F 87 AA", "87 AA F0 9F 87 B9", "87 AA F0 9F 87 BA", "87 AB F0 9F 87 B0", "87 AB F0 9F 87 B4", "87 AB F0 9F 87 AF", "87 AB F0 9F 87 AE", "87 AB F0 9F 87 B7", "87 AC F0 9F 87 AB", "87 B5 F0 9F 87 AB", "87 B9 F0 9F 87 AB", "87 AC F0 9F 87 A6", "87 AC F0 9F 87 B2", "87 AC F0 9F 87 AA", "87 A9 F0 9F 87 AA", "87 AC F0 9F 87 AD", "87 AC F0 9F 87 AE", "87 AC F0 9F 87 B7", "87 AC F0 9F 87 B1", "87 AC F0 9F 87 A9", "87 AC F0 9F 87 B5", "87 AC F0 9F 87 BA", "87 AC F0 9F 87 B9", "87 AC F0 9F 87 AC", "87 AC F0 9F 87 B3", "87 AC F0 9F 87 BC", "87 AC F0 9F 87 BE", "87 AD F0 9F 87 B9", "87 AD F0 9F 87 B3", "87 AD F0 9F 87 B0", "87 AD F0 9F 87 BA", "87 AE F0 9F 87 B8", "87 AE F0 9F 87 B3", "87 AE F0 9F 87 A9", "87 AE F0 9F 87 B7", "87 AE F0 9F 87 B6", "87 AE F0 9F 87 AA", "87 AE F0 9F 87 B2", "87 AE F0 9F 87 B1", "87 AE F0 9F 87 B9", "87 A8 F0 9F 87 AE", "87 AF F0 9F 87 B2", "87 AF F0 9F 87 B5", "87 AF F0 9F 87 AA", "87 AF F0 9F 87 B4", "87 B0 F0 9F 87 BF", "87 B0 F0 9F 87 AA", "87 B0 F0 9F 87 AE", "87 BD F0 9F 87 B0", "87 B0 F0 9F 87 BC", "87 B0 F0 9F 87 AC", "87 B1 F0 9F 87 A6", "87 B1 F0 9F 87 BB", "87 B1 F0 9F 87 A7", "87 B1 F0 9F 87 B8", "87 B1 F0 9F 87 B7", "87 B1 F0 9F 87 BE", "87 B1 F0 9F 87 AE", "87 B1 F0 9F 87 B9", "87 B1 F0 9F 87 BA", "87 B2 F0 9F 87 B4", "87 B2 F0 9F 87 B0", "87 B2 F0 9F 87 AC", "87 B2 F0 9F 87 BC", "87 B2 F0 9F 87 BE", "87 B2 F0 9F 87 BB", "87 B2 F0 9F 87 B1", "87 B2 F0 9F 87 B9", "87 B2 F0 9F 87 AD", "87 B2 F0 9F 87 B6", "87 B2 F0 9F 87 B7", "87 B2 F0 9F 87 BA", "87 BE F0 9F 87 B9", "87 B2 F0 9F 87 BD", "87 AB F0 9F 87 B2", "87 B2 F0 9F 87 A9", "87 B2 F0 9F 87 A8", "87 B2 F0 9F 87 B3", "87 B2 F0 9F 87 AA", "87 B2 F0 9F 87 B8", "87 B2 F0 9F 87 A6", "87 B2 F0 9F 87 BF", "87 B2 F0 9F 87 B2", "87 B3 F0 9F 87 A6", "87 B3 F0 9F 87 B7", "87 B3 F0 9F 87 B5", "87 B3 F0 9F 87 B1", "87 B3 F0 9F 87 A8", "87 B3 F0 9F 87 BF", "87 B3 F0 9F 87 AE", "87 B3 F0 9F 87 AA", "87 B3 F0 9F 87 AC", "87 B3 F0 9F 87 BA", "87 B3 F0 9F 87 AB", "87 B2 F0 9F 87 B5", "87 B0 F0 9F 87 B5", "87 B3 F0 9F 87 B4", "87 B4 F0 9F 87 B2", "87 B5 F0 9F 87 B0", "87 B5 F0 9F 87 BC", "87 B5 F0 9F 87 B8", "87 B5 F0 9F 87 A6", "87 B5 F0 9F 87 AC", "87 B5 F0 9F 87 BE", "87 B5 F0 9F 87 AA", "87 B5 F0 9F 87 AD", "87 B5 F0 9F 87 B3", "87 B5 F0 9F 87 B1", "87 B5 F0 9F 87 B9", "87 B5 F0 9F 87 B7", "87 B6 F0 9F 87 A6", "87 B7 F0 9F 87 AA", "87 B7 F0 9F 87 B4", "87 B7 F0 9F 87 BA", "87 B7 F0 9F 87 BC", "87 A7 F0 9F 87 B1", "87 B8 F0 9F 87 AD", "87 B0 F0 9F 87 B3", "87 B1 F0 9F 87 A8", "87 B5 F0 9F 87 B2", "87 BB F0 9F 87 A8", "87 BC F0 9F 87 B8", "87 B8 F0 9F 87 B2", "87 B8 F0 9F 87 B9", "87 B8 F0 9F 87 A6", "87 B8 F0 9F 87 B3", "87 B7 F0 9F 87 B8", "87 B8 F0 9F 87 A8", "87 B8 F0 9F 87 B1", "87 B8 F0 9F 87 AC", "87 B8 F0 9F 87 BD", "87 B8 F0 9F 87 B0", "87 B8 F0 9F 87 AE", "87 B8 F0 9F 87 A7", "87 B8 F0 9F 87 B4", "87 BF F0 9F 87 A6", "87 AC F0 9F 87 B8", "87 B0 F0 9F 87 B7", "87 B8 F0 9F 87 B8", "87 AA F0 9F 87 B8", "87 B1 F0 9F 87 B0", "87 B8 F0 9F 87 A9", "87 B8 F0 9F 87 B7", "87 B8 F0 9F 87 BF", "87 B8 F0 9F 87 AA", "87 A8 F0 9F 87 AD", "87 B8 F0 9F 87 BE", "87 B9 F0 9F 87 BC", "87 B9 F0 9F 87 AF", "87 B9 F0 9F 87 BF", "87 B9 F0 9F 87 AD", "87 B9 F0 9F 87 B1", "87 B9 F0 9F 87 AC", "87 B9 F0 9F 87 B0", "87 B9 F0 9F 87 B4", "87 B9 F0 9F 87 B9", "87 B9 F0 9F 87 B3", "87 B9 F0 9F 87 B7", "87 B9 F0 9F 87 B2", "87 B9 F0 9F 87 A8", "87 B9 F0 9F 87 BB", "87 BA F0 9F 87 AC", "87 BA F0 9F 87 A6", "87 A6 F0 9F 87 AA", "87 AC F0 9F 87 A7", "87 BA F0 9F 87 B8", "87 BB F0 9F 87 AE", "87 BA F0 9F 87 BE", "87 BA F0 9F 87 BF", "87 BB F0 9F 87 BA", "87 BB F0 9F 87 A6", "87 BB F0 9F 87 AA", "87 BB F0 9F 87 B3", "87 BC F0 9F 87 AB", "87 AA F0 9F 87 AD", "87 BE F0 9F 87 AA", "87 BF F0 9F 87 B2", "87 BF F0 9F 87 BC"]
	emojisArray = []
	for em in rawEmojis
		emojisArray.push emojiFormatter(em)

	



	emojiKey.on Events.TouchStart, ->
		emojiKey.backgroundColor = "white"
		emojiBG = new Layer backgroundColor:"#ECEEF1"
		emojiBG.constraints = (trailing:1, leading:1, bottom:1, height:258)
		exports.layout()
		emojiGalley = new ScrollComponent superLayer:emojiBG, width:emojiBG.width, height:emojiBG.height - exports.px(40)
		emojiGalley.speedY = 0
		emojiSpacer = exports.px(6)
		box = exports.px(30)
		row = -1
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
			emoji.on Events.TouchStart, ->
				print @.name

		inc = 100
		firstLoad = .1
		timeInc = 2
		fullAmount = emojisArray.length
		loads = Math.floor(fullAmount / inc) - 1
		partialAmount = fullAmount % inc
		print "You'll need to do this #{loads}"
		print "You'll need to do this #{partialAmount} more times"




		for em in emojisArray[0...inc]
			loadEmojis(em)


		Utils.delay firstLoad, ->
			for em in emojisArray[inc...(inc*2)]
				loadEmojis(em)
		Utils.delay firstLoad + timeInc, ->
			for em in emojisArray[(inc*2)...(inc*3)]
				loadEmojis(em)
		Utils.delay firstLoad + timeInc * 2, ->
			for em in emojisArray[(inc*3)...(inc*4)]
				loadEmojis(em)
		Utils.delay firstLoad + timeInc * 3, ->
			for em in emojisArray[(inc*4)...(inc*5)]
				loadEmojis(em)
		Utils.delay firstLoad + timeInc * 4, ->
			for em in emojisArray[(inc*5)...(inc*6)]
				loadEmojis(em)
		Utils.delay firstLoad + timeInc * 5, ->
			for em in emojisArray[(inc*6)...(inc*7)]
				loadEmojis(em)
		Utils.delay firstLoad + timeInc * 6, ->
			for em in emojisArray[(inc*7)...(inc*8)]
				loadEmojis(em)
		Utils.delay firstLoad + timeInc * 7, ->
			for em in emojisArray[(inc*8)...(inc*9)]
				loadEmojis(em)
		Utils.delay firstLoad + timeInc * 8, ->
			for em in emojisArray[(inc*9)...(inc*10)]
				loadEmojis(em)
		Utils.delay firstLoad + timeInc * 9, ->
			for em in emojisArray[(inc*10)...(inc*11)]
				loadEmojis(em)
		Utils.delay firstLoad + timeInc * 10, ->
			for em in emojisArray[(inc*11)...(inc*12)]
				loadEmojis(em)
		Utils.delay firstLoad + timeInc * 11, ->
			for em in emojisArray[(inc*12)...(inc*13)]
				loadEmojis(em)
		Utils.delay firstLoad + timeInc * 12, ->
			for em in emojisArray[(inc*13)...(inc*14)]
				loadEmojis(em)
		Utils.delay firstLoad + timeInc * 13, ->
			for em in emojisArray[(inc*14)...(inc*15)]
				loadEmojis(em)
		Utils.delay firstLoad + timeInc * 14, ->
			for em in emojisArray[(inc*15)...(inc*16)]
				loadEmojis(em)
		Utils.delay firstLoad + timeInc * 15, ->
			for em in emojisArray[(inc*16)...(inc*17)]
				loadEmojis(em)
		Utils.delay firstLoad + timeInc * 16, ->
			for em in emojisArray[(inc*17)...(inc*18)]
				loadEmojis(em)
		Utils.delay firstLoad + timeInc * 17, ->
			for em in emojisArray[(inc*18)...(inc*19)]
				loadEmojis(em)
		Utils.delay firstLoad + timeInc * 18, ->
			for em in emojisArray[(inc*19)...(inc*20)]
				loadEmojis(em)
		Utils.delay firstLoad + timeInc * 19, ->
			for em in emojisArray[(inc*20)...(inc*21)]
				loadEmojis(em)
		Utils.delay firstLoad + timeInc * 20, ->
			for em in emojisArray[(inc*21)...(inc*22)]
				loadEmojis(em)
		Utils.delay firstLoad + timeInc * 21, ->
			for em in emojisArray[(inc*22)...(inc*23)]
				loadEmojis(em)
		Utils.delay firstLoad + timeInc * 22, ->
			for em in emojisArray[(inc*23)...(inc*24)]
				loadEmojis(em)
		Utils.delay firstLoad + timeInc * 23, ->
			for em in emojisArray[(inc*24)...(inc*25)]
				loadEmojis(em)
		Utils.delay firstLoad + timeInc * 24, ->
			for em in emojisArray[(inc*25)...(inc*26)]
				loadEmojis(em)
		Utils.delay firstLoad + timeInc * 25, ->
			for em in emojisArray[(inc*26)...(inc*27)]
				loadEmojis(em)
		Utils.delay firstLoad + timeInc * 26, ->
			for em in emojisArray[(inc*27)...(inc*28)]
				loadEmojis(em)
		Utils.delay firstLoad + timeInc * 27, ->
			for em in emojisArray[(inc*28)...(inc*29)]
				loadEmojis(em)
		Utils.delay firstLoad + timeInc * 28, ->
			for em in emojisArray[(inc*29)...(inc*30)]
				loadEmojis(em)
		Utils.delay firstLoad + timeInc * 29, ->
			for em in emojisArray[(inc*30)...(inc*31)]
				loadEmojis(em)
		Utils.delay firstLoad + timeInc * 30, ->
			for em in emojisArray[(inc*31)...(inc*32)]
				loadEmojis(em)
		Utils.delay firstLoad + timeInc * 31, ->
			for em in emojisArray[(inc*32)...(inc*33)]
				loadEmojis(em)
		Utils.delay firstLoad + timeInc * 32, ->
			for em in emojisArray[(inc*33)...(inc*34)]
				loadEmojis(em)
		Utils.delay firstLoad + timeInc * 33, ->
			for em in emojisArray[(inc*34)...(inc*35)]
				loadEmojis(em)
		Utils.delay firstLoad + timeInc * 34, ->
			for em in emojisArray[(inc*35)...(inc*36)]
				loadEmojis(em)

		for sec in emojiSections
			index = emojiSections.indexOf(sec)
			title = new Layer superLayer:emojiGalley.content, backgroundColor:"transparent", x:index*1000 + exports.px(8), height:80, width:800
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


