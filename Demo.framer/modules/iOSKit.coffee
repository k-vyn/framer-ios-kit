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


	exports.layout()
	emojiSections = ["Smileys & People", "Animals & Nature", "Food & Drink", "Activity", "Travel & Places", "Objects", "Symbols", "Flags"]
	emojisArray = emojisArray = ["😀","😬","😁","😂","😃","😄","😅","😆","😇","😉","😊","🙂","🙃","😋","😌","😍","😘","😗","😙","😚","😝","😛","🤓","😎","🤗","😏", "😶","😐","😑","😒","🙄","🤔","😳","😞","😟","😠","😡","😔","😕","🙁","😣","😖","😫","😩","😤","😮","😱","😨","😰","😯","😦","😧","😢","😥","😪","😓","😵","😲","🤐","😷","🤒","🤕","😴","💤","💩","😈","👿","👹","👺","💀","👻","👽","🤖","😺","😸","😹","😻","😼","😽","🙀","😿","😾","🙌","👏","👍","👎","👊","✊","✌️","👌","✋","👐","💪","🙏","☝️","👆","👇","👈","👉","🖕","🖐","🤘","🖖","✍","💅","👄","👅","👂","👃","👁","👀","👤","👥","🗣","👶","👦","👧","👨","👩","👱","👴","👵","👲","👳","👮","👷","💂","🕵","🎅","👼","👸","👰","🚶","🏃","💃","👯","👫","👬","👭","🙇","💁","🙅","🙆","🙋","🙎","🙍","💇","💆"]

	emojiKey.on Events.TouchStart, ->
		emojiKey.backgroundColor = "white"
		emojiBG = new Layer backgroundColor:"#ECEEF1"
		emojiBG.constraints = (trailing:1, leading:1, bottom:1, height:258)
		exports.layout()
		emojiGalley = new ScrollComponent superLayer:emojiBG, width:emojiBG.width, height:emojiBG.height - exports.px(40)
		emojiGalley.speedY = 0
		emojiSpacer = exports.px(6)
		row = -1 
		box = exports.px(30)
		for em in emojisArray
			row++ 
			index = emojisArray.indexOf(em)
			col = Math.floor(index/5)
			if row > 4
				row = 0 
			emoji = new Layer x:col*box + (emojiSpacer * col) + exports.px(3), y:row*box + (emojiSpacer * row) + exports.px(40), superLayer:emojiGalley.content, width:box, height:box, name:em, backgroundColor:"transparent"
			emoji.html = em
			emoji.style = {
				"font-size" : exports.px(26) + "px"
				"line-height" : box + "px"
				"text-align" : "center"
			}
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


