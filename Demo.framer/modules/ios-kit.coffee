#iOSKit Module
#By Kevyn Arnott 

# Import framework
exports.layout = layout = require 'ios-kit-layout'
exports.utils = utils = require 'ios-kit-utils'
exports.lib = library = require 'ios-kit-library'

# Setup resources
exports.device = utils.getDevice()
exports.assets = library.assets

#Import Components
alert = require 'ios-kit-alert'
banner = require 'ios-kit-banner'
button = require 'ios-kit-button'
nav = require 'ios-kit-nav-bar'
sheet = require 'ios-kit-sheet'
status = require 'ios-kit-status-bar'
tab = require 'ios-kit-tab-bar'
text = require 'ios-kit-text'

##Setup Components
exports.Alert = alert.create
exports.Banner = banner.create
exports.Button = button.create
exports.NavBar = nav.create
exports.Sheet = sheet.create
exports.StatusBar = status.create
exports.Tab = tab.tab
exports.TabBar = tab.bar
exports.Text = text.create

## Defaults for everything
defaults = {
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
}


listenToKeys = (field, keyboard) ->

	keyputilss = (key) ->
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
				key.backgroundColor = utils.color("light-key")
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
						properties:(backgroundColor:utils.color("light-key"))
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
					properties:(y:exports.device.height)
					time:.25
					curve:"ease-in-out"
				field.active = false
				field.clickZone.destroy()
			if e.keyCode == 16
				isShift = true
				if keyboard
					keyputilss(keyboard.keys.shift)
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
					keyputilss(keyboard.keys.delete)
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
				keyboard.keys.return.backgroundColor = utils.color("light-key")
			if e.keyCode == 32 && keyboard
				keyboard.keys.space.backgroundColor = "White"
			if e.keyCode == 8 && keyboard
				keyboard.keys.delete.animate
					properties:(backgroundColor:utils.color("light-key"))
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
						properties:(backgroundColor:utils.color("light-key"))
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


	document.addEventListener 'keyputilss', (e) ->
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
						keyputilss(key)

				if e.keyCode >= 97 && e.keyCode <= 122 || e.keyCode == 32		
					if keyboard
						keyputilss(key)

				if e.keyCode > 31
					newText = field.text.html + char
					exports.update(field.text, [text:newText])
					field.value = exports.clean(newText)





exports.Field = (array) ->
	setup = setupComponent("field", array)
	field = new Layer borderRadius:utils.px(setup.borderRadius), backgroundColor:setup.backgroundColor, width:utils.px(setup.width), height:utils.px(setup.height)
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




	##Handle keyputilss
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
				properties:(y:exports.device.height)
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
					properties:(y:exports.device.height)
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
			cursor = new Layer width:utils.px(setup.cursor.width), height:utils.px(setup.cursor.height), superLayer:field, name:"cursor", backgroundColor:utils.color("blue"), borderRadius:utils.px(1)
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


exports.Keyboard = (array) ->
	setup = setupComponent("keyboard", array)

	#This will hold all of the specs for each device's keyboard
	boardSpecs = {}

	#This will set the specs
	switch exports.device
		when "iphone-5"
			boardSpecs.height = 215
			boardSpecs.key = {
				width:utils.px(26)
				height:utils.px(39)
			}
			boardSpecs.expandedKey = utils.px(39)
			boardSpecs.expandedSpacer = utils.px(12)

			boardSpecs.padding = {}
			boardSpecs.padding.row1 = utils.px(3)
			boardSpecs.padding.row2 = utils.px(19)
			boardSpecs.padding.row3 = utils.px(54)


			boardSpecs.marginTop = {}
			boardSpecs.marginTop.row1 = utils.px(11)
			boardSpecs.marginTop.row2 = utils.px(26)
			boardSpecs.marginTop.row3 = utils.px(41)
			boardSpecs.marginTop.row4 = utils.px(55)

			boardSpecs.shiftIcon = {x:utils.px(9), y:utils.px(2)}
			boardSpecs.deleteIcon = {x:utils.px(7), y:utils.px(10)}
			boardSpecs.emojiIcon = {x:utils.px(8), y:utils.px(9)}

			boardSpecs.sideKey = utils.px(36.5)
			boardSpecs.sideKeyRadius = utils.px(4)
			boardSpecs.sideKeyBottom = utils.px(58)

			boardSpecs.iPadDeleteOffset = 0
			boardSpecs.bottomRow = 8
			boardSpecs.returnKey = utils.px(74)

			boardSpecs.spacer = utils.px(6)

		when "iphone-6s"
			boardSpecs.height = 216
			boardSpecs.key = {
				width:utils.px(31.5)
				height:utils.px(42)
			}

			boardSpecs.expandedKey = utils.px(46.5)
			boardSpecs.expandedSpacer = utils.px(14)

			boardSpecs.padding = {}
			boardSpecs.padding.row1 = utils.px(3)
			boardSpecs.padding.row2 = utils.px(22)
			boardSpecs.padding.row3 = utils.px(59)


			boardSpecs.marginTop = {}
			boardSpecs.marginTop.row1 = utils.px(10)
			boardSpecs.marginTop.row2 = utils.px(22)
			boardSpecs.marginTop.row3 = utils.px(34)
			boardSpecs.marginTop.row4 = utils.px(44)

			boardSpecs.shiftIcon = {x:utils.px(11), y:utils.px(2)}
			boardSpecs.deleteIcon = {x:utils.px(10), y:utils.px(13)}
			boardSpecs.emojiIcon = {x:utils.px(11), y:utils.px(11)}

			boardSpecs.returnKey = utils.px(87.5)
			boardSpecs.bottomRow = 6
			boardSpecs.iPadDeleteOffset = 0

			boardSpecs.sideKey = utils.px(42)
			boardSpecs.sideKeyRadius = utils.px(5)
			boardSpecs.sideKeyBottom = utils.px(56)

			boardSpecs.spacer = utils.px(6)

		when "iphone-6s-plus"
			boardSpecs.height = 226
			boardSpecs.key = {
				width:utils.px(35)
				height:utils.px(45)
			}
			boardSpecs.expandedKey = utils.px(50)
			boardSpecs.expandedSpacer = utils.px(20)
			boardSpecs.padding = {}
			boardSpecs.padding.row1 = utils.px(4)
			boardSpecs.padding.row2 = utils.px(25)
			boardSpecs.padding.row3 = utils.px(67)


			boardSpecs.marginTop = {}
			boardSpecs.marginTop.row1 = utils.px(8)
			boardSpecs.marginTop.row2 = utils.px(19)
			boardSpecs.marginTop.row3 = utils.px(30)
			boardSpecs.marginTop.row4 = utils.px(41)

			boardSpecs.shiftIcon = {x:utils.px(13), y:utils.px(2)}
			boardSpecs.deleteIcon = {x:utils.px(11), y:utils.px(14)}
			boardSpecs.emojiIcon = {x:utils.px(13), y:utils.px(13)}

			boardSpecs.bottomRow = 6

			boardSpecs.iPadDeleteOffset = 0

			boardSpecs.returnKey = utils.px(97)

			boardSpecs.sideKey = utils.px(45)
			boardSpecs.sideKeyRadius = utils.px(5)

			boardSpecs.spacer = utils.px(6)
		when "ipad"
			boardSpecs.height = 268
			boardSpecs.key = {
				width:utils.px(56)
				height:utils.px(56)
			}
			boardSpecs.padding = {}
			boardSpecs.padding.row1 = utils.px(6)
			boardSpecs.padding.row2 = utils.px(35)
			boardSpecs.padding.row3 = utils.px(74)


			boardSpecs.marginTop = {}
			boardSpecs.marginTop.row1 = utils.px(10)
			boardSpecs.marginTop.row2 = utils.px(18)
			boardSpecs.marginTop.row3 = utils.px(28)
			boardSpecs.marginTop.row4 = utils.px(40)

			boardSpecs.shiftIcon = {x:utils.px(18), y:utils.px(2)}
			boardSpecs.deleteIcon = {x:utils.px(18), y:utils.px(20)}
			boardSpecs.emojiIcon = {x:utils.px(18), y:utils.px(18)}

			boardSpecs.bottomRow = 7

			boardSpecs.iPadDeleteOffset = boardSpecs.marginTop.row3 + boardSpecs.key.height * 2 - boardSpecs.marginTop.row1

			boardSpecs.returnKey = utils.px(106)

			boardSpecs.sideKey = utils.px(56)
			boardSpecs.sideKey2 = utils.px(76)
			boardSpecs.sideKeyRadius = utils.px(5)

			boardSpecs.spacer = utils.px(12)

	board = new Layer backgroundColor:"#D1D5DA", name:"keyboard"

	board.specs = boardSpecs

	#This will generate a object with 216 height and it'll stretch end to end. 
	board.constraints = (height:boardSpecs.height, trailing:0, leading:0)

	exports.layout()

	#This will deterine if it starts on the bottom or pops up from the bottom 
	if setup.animated
		board.y = exports.device.height
		board.animate 
			properties:(maxY: exports.device.height)
			time:.25
			curve:"ease-in-out"
	else
		board.maxY = exports.device.height

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

	keyPopUp = new Layer width:@keyWidth, height:@keyHeight, x:@.x-16*exports.device.scale, backgroundColor:"transparent", superLayer:board, name:"key pop up"
	box = new Layer borderRadius:utils.px(10), superLayer:keyPopUp, backgroundColor:"transparent", color:"black", name:"letter"
	box.style = {
		"font-size" : 39 * exports.device.scale + "px"
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
		key = new Layer name:letter, superLayer:board, borderRadius:5*exports.device.scale, backgroundColor:"white", color:"black", shadowY:utils.px(1), shadowColor:"#929498", width:boardSpecs.key.width, height:boardSpecs.key.height
		board.keys[letter] = key
		keyPopUp.bringToFront()
		box.bringToFront()
		if exports.device.scale == 2
			keyPopUp.constraints = (width:65, height:122)
			path.constraints = (width:65, height: 122)
			path.y = 10
			@pathWidth = utils.px(65)
			@pathHeight = utils.px(122)
			@keyHeight = utils.px(32)
			@keyWidth = utils.px(44)
			@lineHeight = @keyWidth - 17 + "px"
			box.constraints = (width:32, height:44)
			box.centerX()
			box.y = utils.px(28)

		if exports.device.scale == 3
			keyPopUp.constraints = (width:68, height:122)
			@keyHeight = utils.px(122)
			@keyWidth = utils.px(65)
			@lineHeight = @keyWidth + "px"
			@pathWidth = utils.px(68)
			@pathHeight = utils.px(128)
			path.y = 0


			box.constraints = (width:35, height:46)
			box.centerX()
			box.y = utils.px(28)

		if exports.device.width == 640
			key.constraints = (width:26, height:39)

		keyPopUp.visible = false

		exports.layout()
		key.style = {
			"font-size" : 25 * exports.device.scale + "px"
			"font-weight" : 300
			"font-family" : '-apple-system, Helvetica, Arial, sans-serif'
			'text-align' : 'center'
			'line-height' : key.height - utils.px(2) + "px"
		}
		if letter == "," || letter == "."
			extraSymbol = new Layer superLayer:key, width:utils.px(30), height:utils.px(30), backgroundColor:"transparent", y:utils.px(15), color:utils.color("black"), name:"!/?"
			extraSymbol.centerX()
			extraSymbol.style = {
				"font-size" : utils.px(24) + "px"
				"font-weight" : 300
				"font-family" : '-apple-system, Helvetica, Arial, sans-serif'
				'text-align' : 'center'
				'line-height' : "20px"
			}

			switch letter
				when "," then extraSymbol.html = "!"
				when "." then extraSymbol.html = "?"
			key.style["line-height"] = key.height + utils.px(10) + "px"

		key.html = letter
		
		if index <= rowsMap[0].endIndex
			rowIndex = index - rowsMap[0].startIndex
			key.x = rowsMap[0].padding + (rowIndex*boardSpecs.spacer) + (firstRowKeyWidth)
			key.y = rowsMap[0].marginTop
			if exports.device == "ipad"
				#Handle the extra pixels on the top row
				if index % 2 != 0
					key.width = key.width + utils.px(2)
				else
					key.width = key.width + utils.px(1)
			firstRowKeyWidth = firstRowKeyWidth + key.width
		if index > rowsMap[0].endIndex && index <= rowsMap[1].endIndex
			rowIndex = index - rowsMap[1].startIndex
			key.x = rowsMap[1].padding + (rowIndex*boardSpecs.spacer) + (secondRowKeyWidth)
			key.y = rowsMap[1].marginTop + key.height
			key.width = key.width + utils.px(1)
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
						<feOffset dx='0' dy='0' in='SourceAlpha' utilsult='shadowOffsetOuter1'></feOffset>
						<feGaussianBlur stdDeviation='1.5' in='shadowOffsetOuter1' utilsult='shadowBlurOuter1'></feGaussianBlur>
						<feColorMatrix values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.21 0' in='shadowBlurOuter1' type='matrix' utilsult='shadowMatrixOuter1'></feColorMatrix>
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
				@.backgroundColor = utils.color("light-key")
			key.on Events.TouchEnd, ->
				@.backgroundColor = "white"

		key.on Events.TouchEnd, ->
			if shiftIcon.states.state == "on"
				shiftIcon.states.switch("default")
				shiftKey.backgroundColor = utils.color("light-key")

				if exports.device == "ipad"
					shiftIcon2.states.switch("default")
					shiftKey2.backgroundColor = utils.color("light-key")

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

	shiftKey = new Layer superLayer:board, name:"shift", borderRadius:boardSpecs.sideKeyRadius, color:utils.color("black"), backgroundColor:utils.color("light-key"), shadowY:utils.px(1), shadowColor:"#929498", width:boardSpecs.sideKey, height:boardSpecs.sideKey, y:(boardSpecs.marginTop.row3 + boardSpecs.key.height * 2)
	shiftKey.constraints = (leading:utils.pt(boardSpecs.padding.row1))
	shiftIcon = new Layer width:utils.px(20), height:utils.px(19), superLayer:shiftKey, backgroundColor:"transparent", x:boardSpecs.shiftIcon.x, y:boardSpecs.shiftIcon.y
	shiftIcon.html = iconLibrary.shift.off

	shiftIcon.states.add
		"on":
			html: iconLibrary.shift.on
	shiftIcon.states.animationOptions =
	  time: .01

	shiftKey.style = {
			"font-size" : utils.px(16) + "px"
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
					shiftKey.backgroundColor = utils.color("light-key")
					if exports.device == "ipad"
						shiftKey2.backgroundColor = utils.color("light-key")
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

	deleteKey = new Layer superLayer:board, borderRadius:boardSpecs.sideKeyRadius, backgroundColor:utils.color("light-key"), shadowY:utils.px(1), shadowColor:"#929498", name:"delete", width:boardSpecs.sideKey, height:boardSpecs.sideKey, y:(boardSpecs.marginTop.row3 + boardSpecs.key.height * 2 - boardSpecs.iPadDeleteOffset)


	deleteKey.constraints = (trailing:utils.pt(boardSpecs.spacer)/2)
	deleteIcon = new Layer superLayer:deleteKey, width:utils.px(24), height:utils.px(18), backgroundColor:"transparent", x:boardSpecs.deleteIcon.x, y:boardSpecs.deleteIcon.y
	
	if exports.device == "ipad"
		deleteKey.width = deleteKey.width + utils.px(5)

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
		deleteKey.backgroundColor = utils.color("light-key")
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
		keyboardKey = new Layer superLayer:board, name:"dismiss", borderRadius:boardSpecs.sideKeyRadius, backgroundColor:utils.color("light-key"), shadowY:utils.px(1), shadowColor:"#929498", width:boardSpecs.sideKey, height:boardSpecs.sideKey
		keyboardKey.constraints = {trailingEdges:deleteKey, bottom:boardSpecs.bottomRow}
		keyboardIcon = new Layer superLayer:keyboardKey, width:utils.px(32.5), height:utils.px(23.5), backgroundColor:"transparent"
		keyboardIcon.html = iconLibrary.keyboard
		keyboardIcon.center()

		board.keys.dismiss = keyboardKey

		shiftKey2 = new Layer superLayer:board, name:"shift", borderRadius:boardSpecs.sideKeyRadius,color:utils.color("black"), backgroundColor:utils.color("light-key"), shadowY:utils.px(1), shadowColor:"#929498", width:boardSpecs.sideKey2, height:boardSpecs.sideKey
		shiftKey2.constraints = (trailingEdges:deleteKey, bottomEdges:shiftKey)
		shiftIcon2 = new Layer width:utils.px(20), height:utils.px(19), superLayer:shiftKey2, backgroundColor:"transparent", x:boardSpecs.shiftIcon.x+utils.px(10), y:boardSpecs.shiftIcon.y
		shiftIcon2.html = iconLibrary.shift.off

		shiftKey2.style = {
			"font-size" : utils.px(16) + "px"
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
						shiftKey.backgroundColor = utils.color("light-key")
						shiftKey2.backgroundColor = utils.color("light-key")
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


		numKey2 = new Layer superLayer:board, name:"num", borderRadius:boardSpecs.sideKeyRadius, color:utils.color("black"), backgroundColor:utils.color("light-key"), shadowY:utils.px(1), shadowColor:"#929498", width:boardSpecs.sideKey2, height:boardSpecs.key.height
		numKey2.html = ".?123"
		numKey2.style = {
			"font-size" : utils.px(16) + "px"
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
								key.style["font-size"] = utils.px(17) + "px"
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
							key.style["font-size"] = utils.px(25) + "px"
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


	## NUM KEY top:utils.pt(boardSpecs.marginTop.row4 + boardSpecs.key.height*3)

	numKey = new Layer superLayer:board, name:"num", borderRadius:utils.px(5), backgroundColor:utils.color("light-key"), shadowY:utils.px(1), shadowColor:"#929498", color:"black", width:boardSpecs.sideKey, height:boardSpecs.key.height
	numKey.constraints = (bottom:boardSpecs.bottomRow, leadingEdges:shiftKey)
	if exports.device != "ipad" && exports.device != "ipad-pro"
		numKey.html = "123"
	else 
		numKey.html = ".?123"
	numKey.style = {
		"font-size" : utils.px(16) + "px"
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
									key.style["font-size"] = utils.px(17) + "px"
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
								key.constraints = {leading:[shiftKey, utils.pt(boardSpecs.expandedSpacer)]}
								exports.layout()
							if index > 19
								key.width = boardSpecs.expandedKey
							if index > 20
								key.constraints = {leading:[keysArray[index - 1], utils.pt(boardSpecs.spacer)]}
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
						key.style["font-size"] = utils.px(25) + "px"
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

	emojiKey = new Layer superLayer:board, name:"emoji", borderRadius:utils.px(5), backgroundColor:utils.color("light-key"), shadowY:utils.px(1), shadowColor:"#929498", width:boardSpecs.sideKey, height:boardSpecs.key.height
	emojiKey.constraints = (bottomEdges:numKey, leading:[numKey, 6])
	emojiIcon = new Layer width:utils.px(20), height:utils.px(19), superLayer:emojiKey, backgroundColor:"transparent", x:boardSpecs.emojiIcon.x, y:boardSpecs.emojiIcon.y
	emojiIcon.html = iconLibrary.emoji



	## RETURN KEY

	returnKey = new Layer superLayer:board, borderRadius:utils.px(5), backgroundColor:utils.color(setup.returnColor), shadowY:utils.px(1), shadowColor:"#929498", color:"black", name:"return", width:boardSpecs.returnKey, height:boardSpecs.key.height
	if setup.returnColor != "light-key"
		returnKey.color = exports.setTextColor(utils.color(setup.returnColor))
	if exports.device == "ipad"
		returnKey.constraints = (trailingEdges:deleteKey, top:utils.pt(boardSpecs.marginTop.row2 + boardSpecs.key.height) )
	else
		returnKey.constraints = (trailing:utils.pt(boardSpecs.spacer)/2, bottomEdges:numKey)
	returnKey.html = setup.returnText
	returnKey.style = {
		"font-size" : utils.px(16) + "px"
		"font-weight" : 400
		"font-family" : '-apple-system, Helvetica, Arial, sans-serif'
		'text-align' : 'center'
		'line-height' : boardSpecs.key.height + "px"

	}
	exports.layout()

	storedTextColor = returnKey.color
	returnKey.on Events.TouchStart, ->
		returnKey.backgroundColor = "white"
		returnKey.color = utils.color("black")
	returnKey.on Events.TouchEnd, ->
		returnKey.backgroundColor = utils.color(setup.returnColor)
		returnKey.color = storedTextColor

	board.keys.return = returnKey


	## SPACE KEY

	spaceKey = new Layer superLayer:board, borderRadius:utils.px(5), backgroundColor:"white", shadowY:utils.px(1), shadowColor:"#929498", color:"black", name:"space", height:boardSpecs.key.height
	
	if exports.device != "ipad"
		spaceKey.constraints = (bottomEdges:numKey, leading:[emojiKey, utils.pt(boardSpecs.spacer)], trailing:[returnKey, boardSpecs.spacer])
		spaceKey.html = "space"
		spaceKey.style = {
			"font-size" : utils.px(16) + "px"
			"font-weight" : 400
			"font-family" : '-apple-system, Helvetica, Arial, sans-serif'
			'text-align' : 'center'
			'line-height' : boardSpecs.key.height + "px"

		}
	else
		spaceKey.constraints = (bottomEdges:numKey, leading:[emojiKey, utils.pt(boardSpecs.spacer)], trailing:[numKey2, boardSpecs.spacer])
	board.keys["&nbsp;"] = spaceKey
	board.keys.space = spaceKey
	exports.layout()


	spaceKey.on Events.TouchStart, ->
		spaceKey.backgroundColor = utils.color("light-key")

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
	# 	box = utils.px(30)
	# 	emojiBG.constraints = (trailing:1, leading:1, bottom:1, height:258)
	# 	exports.layout()
	# 	emojiGalley = new ScrollComponent superLayer:emojiBG, width:emojiBG.width, height:emojiBG.height - utils.px(40)
	# 	emojiGalley.speedY = 0 
	# 	emojiSpacer = utils.px(6)
	# 	emojiPicker = new Layer backgroundColor:"transparent", name:"emoji picker", superLayer:emojiBG
	# 	emojiPicker.constraints = 
	# 		leading:1
	# 		trailing:1
	# 		bottom:1
	# 		height:42
	# 	ABC = new Layer backgroundColor:"transparent", superLayer:emojiPicker
	# 	ABC.html = "ABC"
	# 	ABC.style = {
	# 		"font-size" : utils.px(15) + "px"
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
	# 		emoji = new Layer x:col*box + (emojiSpacer * col) + utils.px(3), y:row*box + (emojiSpacer * row) + utils.px(40), superLayer:emojiGalley.content, width:box, height:box, name:decodeURIComponent(em), backgroundColor:"transparent"
	# 		emoji.html = decodeURIComponent(em)
	# 		emoji.style = {
	# 			"font-size" : utils.px(26) + "px"
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
	# 		title = new Layer superLayer:emojiGalley.content, backgroundColor:"transparent", x:index*5000 + utils.px(8), height:80, width:800
	# 		title.html = sec
	# 		title.style = {
	# 			"font-size" : utils.px(12) + "px"
	# 			"font-weight" : 600
	# 			"font-family" : '-apple-system, Helvetica, Arial, sans-serif'
	# 			'line-height' : utils.px(42) + "px"
	# 			'letter-spacing' : utils.px(0.7) + "px"
	# 			'color' : "#A5A6A9"
	# 			'text-transform' : 'uppercase'
	# 		}


	# emojiKey.on Events.TouchEnd, ->
	# 	emojiKey.backgroundColor = utils.color("light-key")



	return board