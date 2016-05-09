ios = require "ios-kit"

exports.defaults = {
		returnText:"return"
		returnColor:"light-key"
		animated:false
		output:undefined
}

exports.defaults.props = Object.keys(exports.defaults)

#Sets specifications for the Keyboard based on the frame
boardSpecsObject =
	"iphone-5":
		height:215
		key:
			width: ios.utils.px(26)
			height: ios.utils.px(39)
		expandedKey: ios.utils.px(39)
		expandedSpacer: ios.utils.px(12)
		padding:
			row1: ios.utils.px(3)
			row2: ios.utils.px(19)
			row3: ios.utils.px(54)
		marginTop:
			row1: ios.utils.px(11)
			row2: ios.utils.px(26)
			row3: ios.utils.px(41)
			row4: ios.utils.px(55)
		shiftIcon: {x:ios.utils.px(9), y:ios.utils.px(2)}
		deleteIcon: {x:ios.utils.px(7), y:ios.utils.px(10)}
		emojiIcon: {x:ios.utils.px(8), y:ios.utils.px(9)}
		sideKey: ios.utils.px(36.5)
		sideKeyRadius: ios.utils.px(4)
		sideKeyBottom: ios.utils.px(58)
		iPadDeleteOffset: 0
		bottomRow: 8
		returnKey: ios.utils.px(74)
		spacer: ios.utils.px(6)
		keyPopUp:
			width:49
			height:86
			boxTop:0
		pathOffSet:
			x:-7
			y:-5
	"iphone-6s":
		height:216
		key:
			width: ios.utils.px(31.5)
			height: ios.utils.px(42)
		expandedKey: ios.utils.px(46.5)
		expandedSpacer: ios.utils.px(14)
		padding:
			row1: ios.utils.px(3)
			row2: ios.utils.px(22)
			row3: ios.utils.px(59)
		marginTop:
			row1: ios.utils.px(10)
			row2: ios.utils.px(22)
			row3: ios.utils.px(34)
			row4: ios.utils.px(44)
		shiftIcon: {x:ios.utils.px(11), y:ios.utils.px(2)}
		deleteIcon: {x:ios.utils.px(10), y:ios.utils.px(13)}
		emojiIcon: {x:ios.utils.px(11), y:ios.utils.px(11)}
		sideKey: ios.utils.px(42)
		sideKeyRadius: ios.utils.px(5)
		sideKeyBottom: ios.utils.px(56)
		iPadDeleteOffset: 0
		bottomRow: 6
		returnKey: ios.utils.px(87.5)
		spacer: ios.utils.px(6)
		keyPopUp:
			width:58
			height:101
			boxTop:5
		pathOffSet:
			x:-7
			y:-5
	"iphone-6s-plus":
		height:226
		key:
			width: ios.utils.px(35)
			height: ios.utils.px(45)
		expandedKey: ios.utils.px(50)
		expandedSpacer: ios.utils.px(20)
		padding:
			row1: ios.utils.px(4)
			row2: ios.utils.px(25)
			row3: ios.utils.px(67)
		marginTop:
			row1: ios.utils.px(8)
			row2: ios.utils.px(19)
			row3: ios.utils.px(30)
			row4: ios.utils.px(41)
		shiftIcon: {x:ios.utils.px(13), y:ios.utils.px(2)}
		deleteIcon: {x:ios.utils.px(11), y:ios.utils.px(14)}
		emojiIcon: {x:ios.utils.px(13), y:ios.utils.px(13)}
		sideKey: ios.utils.px(45)
		sideKeyRadius: ios.utils.px(5)
		sideKeyBottom: ios.utils.px(56)
		iPadDeleteOffset: 0
		bottomRow: 6
		returnKey: ios.utils.px(97)
		spacer: ios.utils.px(6)
		keyPopUp:
			width:64
			height:112
			boxTop:8
		pathOffSet:
			x:-7
			y:-5
	"ipad":
		height:268
		key:
			width: ios.utils.px(56)
			height: ios.utils.px(56)
		padding:
			row1: ios.utils.px(6)
			row2: ios.utils.px(35)
			row3: ios.utils.px(74)
		marginTop:
			row1: ios.utils.px(10)
			row2: ios.utils.px(18)
			row3: ios.utils.px(28)
			row4: ios.utils.px(40)
		shiftIcon: {x:ios.utils.px(18), y:ios.utils.px(2)}
		deleteIcon: {x:ios.utils.px(18), y:ios.utils.px(20)}
		emojiIcon: {x:ios.utils.px(18), y:ios.utils.px(18)}
		sideKey: ios.utils.px(56)
		sideKey2: ios.utils.px(76)
		sideKeyRadius: ios.utils.px(5)
		sideKeyBottom: ios.utils.px(56)
		iPadDeleteOffset: ios.utils.px(28) + ios.utils.px(56) * 2 - ios.utils.px(10)
		bottomRow: 7
		returnKey: ios.utils.px(106)
		spacer: ios.utils.px(12)

exports.create = (array) ->

	## Keyboard setup
	setup = ios.utils.setupComponent(array, exports.defaults)
	boardSpecs = boardSpecsObject[ios.device.name]

	# Setup the SVGs
	svgShiftOff = ios.utils.svg(ios.assets.shift.off)
	svgShiftOn = ios.utils.svg(ios.assets.shift.on)
	svgDeleteOff = ios.utils.svg(ios.assets.delete.off)
	svgDeleteOn = ios.utils.svg(ios.assets.delete.on)
	svgEmoji = ios.utils.svg(ios.assets.emoji)
	svgKeyPopUp = ios.utils.svg(ios.assets.keyPopUp[ios.device.name])


	# This is the superLayer of the keyboard
	board = new Layer backgroundColor:"#D1D5DA", name:"keyboard"
	board.constraints = (height:boardSpecs.height, trailing:0, leading:0)
	board.specs = boardSpecs
	ios.layout.set(board)

	#This will deterine if it starts on the bottom or pops up from the bottom
	if setup.animated
		board.y = ios.device.height
		board.animate
			properties:(maxY: ios.device.height)
			time:.25
			curve:"ease-in-out"
	else
		board.maxY = ios.device.height

	#Letters to be made
	lettersArray = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v",  "b", "n", "m"]

	#These arrays are depenedent on the Device
	secondArray = []
	thirdArray = []

	switch ios.device.name
		when "ipad"
			secondArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "/", ":", ";", "(", ")", "$", "&", "@", "undo", "hide", ".", ',', "?", "!", "'", "\""]
			thirdArray = ["\[", "\]", "\{", "\}", "#", "%", "^", "*", "+", "=", "_", "\\", "|", "~", "<", ">", "€", "£", "¥", "redo", "hide", ".", ',', "?", "!", "'", "\""]
		else
			secondArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "/", ":", ";", "(", ")", "$", "&", "@", "\"", ".", ',', "?", "!", "'"]
			thirdArray = ["\[", "\]", "\{", "\}", "#", "%", "^", "*", "+", "=", "_", "\\", "|", "~", "<", ">", "€", "£", "¥", "•", ".", ',', "?", "!", "'", "\""]

	if ios.device.name == "ipad"
		lettersArray.push ","
		lettersArray.push "."

	#Numbers to be made (depending on device)
	numsArray = [0..9]

	#Holds the key layers that we make. This will allows us to quickly iterate through them.
	keysArray = []

	# On iPhone, this is the little thing that pops up when you tap letters
	keyPopUp = new Layer width:ios.utils.px(boardSpecs.keyPopUp.width), height:ios.utils.px(boardSpecs.keyPopUp.height), x:@.x-16*ios.device.scale, backgroundColor:"transparent", superLayer:board, name:"key pop up"
	box = new ios.Text
		text:"q"
		superLayer:keyPopUp
		constraints:{top:boardSpecs.keyPopUp.boxTop, align:"horizontal"}
		fontSize:38
		fontWeight:300
		textAlign:"center"
	@.color = "white"
	path = new Layer superLayer:keyPopUp, backgroundColor:"transparent", name:"key path", x:boardSpecs.pathOffSet.x, y:boardSpecs.pathOffSet.y, width:ios.utils.px(boardSpecs.keyPopUp.width), height:ios.utils.px(boardSpecs.keyPopUp.height)
	path.html = svgKeyPopUp.svg
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
		key = new Layer name:letter, superLayer:board, borderRadius:5*ios.device.scale, backgroundColor:"white", color:"black", shadowY:ios.utils.px(1), shadowColor:"#929498", width:boardSpecs.key.width, height:boardSpecs.key.height
		board.keys[letter] = key
		keyPopUp.bringToFront()
		box.bringToFront()


		if ios.device.width == 640
			key.constraints = (width:26, height:39)

		keyPopUp.visible = false

		ios.layout.set()
		key.style = {
			"font-size" : 25 * ios.device.scale + "px"
			"font-weight" : 300
			"font-family" : '-apple-system, Helvetica, Arial, sans-serif'
			'text-align' : 'center'
			'line-height' : key.height - ios.utils.px(2) + "px"
		}
		if letter == "," || letter == "."
			extraSymbol = new Layer superLayer:key, width:ios.utils.px(30), height:ios.utils.px(30), backgroundColor:"transparent", y:ios.utils.px(15), color:ios.utils.color("black"), name:"!/?"
			extraSymbol.centerX()
			extraSymbol.style = {
				"font-size" : ios.utils.px(24) + "px"
				"font-weight" : 300
				"font-family" : '-apple-system, Helvetica, Arial, sans-serif'
				'text-align' : 'center'
				'line-height' : "20px"
			}

			switch letter
				when "," then extraSymbol.html = "!"
				when "." then extraSymbol.html = "?"
			key.style["line-height"] = key.height + ios.utils.px(10) + "px"

		key.html = letter

		if index <= rowsMap[0].endIndex
			rowIndex = index - rowsMap[0].startIndex
			key.x = rowsMap[0].padding + (rowIndex*boardSpecs.spacer) + (firstRowKeyWidth)
			key.y = rowsMap[0].marginTop
			if ios.device.name == "ipad"
				#Handle the extra pixels on the top row
				if index % 2 != 0
					key.width = key.width + ios.utils.px(2)
				else
					key.width = key.width + ios.utils.px(1)
			firstRowKeyWidth = firstRowKeyWidth + key.width
		if index > rowsMap[0].endIndex && index <= rowsMap[1].endIndex
			rowIndex = index - rowsMap[1].startIndex
			key.x = rowsMap[1].padding + (rowIndex*boardSpecs.spacer) + (secondRowKeyWidth)
			key.y = rowsMap[1].marginTop + key.height
			key.width = key.width + ios.utils.px(1)
			secondRowKeyWidth = secondRowKeyWidth + key.width
		if index > rowsMap[1].endIndex
			rowIndex = index - rowsMap[2].startIndex
			key.x = rowsMap[2].padding + (rowIndex*boardSpecs.spacer) + (rowIndex*key.width)
			key.y = rowsMap[2].marginTop + key.height * 2

		keysArray.push key

		if ios.device.name != "ipad" && ios.device.name != "ipad-pro"
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
				@.backgroundColor = ios.utils.color("light-key")
			key.on Events.TouchEnd, ->
				@.backgroundColor = "white"

		key.on Events.TouchEnd, ->
			if shiftIcon.states.state == "on"
				shiftIcon.states.switch("default")
				shiftKey.backgroundColor = ios.utils.color("light-key")

				if ios.device.name == "ipad"
					shiftIcon2.states.switch("default")
					shiftKey2.backgroundColor = ios.utils.color("light-key")

				for key in keysArray
					key.style['text-transform'] = 'lowercase'
				box.style['text-transform'] = 'lowercase'

				if setup.output
					@newText = setup.output.text.html + @.name.toUpperCase()
					ios.utils.update(setup.output.text, [text:@newText])
			else
				if setup.output
					@newText = setup.output.text.html + @.name
					ios.utils.update(setup.output.text, [text:@newText])

	board.keysArray = keysArray

	board.keyboardState = 1



	## SHIFT KEY

	shiftKey = new Layer superLayer:board, name:"shift", borderRadius:boardSpecs.sideKeyRadius, color:ios.utils.color("black"), backgroundColor:ios.utils.color("light-key"), shadowY:ios.utils.px(1), shadowColor:"#929498", width:boardSpecs.sideKey, height:boardSpecs.sideKey, y:(boardSpecs.marginTop.row3 + boardSpecs.key.height * 2)
	shiftKey.constraints = (leading:ios.utils.pt(boardSpecs.padding.row1))
	shiftIcon = new Layer width:svgShiftOff.width, height:svgShiftOff.height, superLayer:shiftKey, backgroundColor:"transparent", x:boardSpecs.shiftIcon.x, y:boardSpecs.shiftIcon.y

	shiftIcon.html = svgShiftOff.svg

	shiftIcon.states.add
		"on":
			html: svgShiftOn.svg
	shiftIcon.states.animationOptions =
	  time: .01

	shiftKey.style = {
			"font-size" : ios.utils.px(16) + "px"
			"font-weight" : 400
			"font-family" : '-apple-system, Helvetica, Arial, sans-serif'
			'text-align' : 'center'
			'line-height' : boardSpecs.key.height + "px"
		}

	shiftKey.on Events.TouchEnd, ->
		switch board.keyboardState
			when 1
				shiftIcon.states.next()
				if ios.device.name == "ipad"
					shiftIcon2.states.next()
				if shiftIcon.states.state == "on"
					shiftKey.backgroundColor = "white"
					if ios.device.name == "ipad"
						shiftKey2.backgroundColor = "white"
					for key in keysArray
						key.style['text-transform'] = 'uppercase'
					box.style['text-transform'] = 'uppercase'
				else
					shiftKey.backgroundColor = ios.utils.color("light-key")
					if ios.device.name == "ipad"
						shiftKey2.backgroundColor = ios.utils.color("light-key")
					for key in keysArray
						key.style["text-transform"] = 'lowercase'
					box.style["text-transform"] = 'lowercase'
			when 2
				for key, index in keysArray
					key.html = thirdArray[index]
					key.name = thirdArray[index]
				board.keyboardState = 3
				shiftKey.html = "123"
				if ios.device.name == "ipad"
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
				if ios.device.name == "ipad"
					shiftKey2.html = "#+="
				board.keyboardState = 2

	board.keys.shift = shiftKey
	board.keys.shift.icon = shiftIcon

	## DELETE KEY

	deleteKey = new Layer superLayer:board, borderRadius:boardSpecs.sideKeyRadius, backgroundColor:ios.utils.color("light-key"), shadowY:ios.utils.px(1), shadowColor:"#929498", name:"delete", width:boardSpecs.sideKey, height:boardSpecs.sideKey, y:(boardSpecs.marginTop.row3 + boardSpecs.key.height * 2 - boardSpecs.iPadDeleteOffset)


	deleteKey.constraints = (trailing:ios.utils.pt(boardSpecs.spacer)/2)
	deleteIcon = new Layer superLayer:deleteKey, width:ios.utils.px(24), height:ios.utils.px(18), backgroundColor:"transparent", x:boardSpecs.deleteIcon.x, y:boardSpecs.deleteIcon.y

	if ios.device.name == "ipad"
		deleteKey.width = deleteKey.width + ios.utils.px(5)

	deleteIcon.states.add
		"on":
			html: svgDeleteOn.svg

	deleteIcon.states.add
		off:
			html: svgDeleteOff.svg


	deleteKey.on Events.TouchStart, ->
		deleteKey.backgroundColor = "white"
		deleteIcon.states.switchInstant("on")

	deleteKey.on Events.TouchEnd, ->
		deleteKey.backgroundColor = ios.utils.color("light-key")
		deleteIcon.states.switchInstant("off")

		if setup.output
			initialLength = setup.output.text.html.length
			newText = setup.output.text.html.slice(0, -1)
			ios.utils.update(setup.output.text, [text:newText])
			endLength = setup.output.text.html.length
			if initialLength == endLength
				newText = setup.output.text.html.slice(0, -6)
				ios.utils.update(setup.output.text, [text:newText])
			if setup.output.text.html == ""
				setup.output.placeholder.visible = true



	deleteIcon.states.switchInstant("off")

	board.keys.delete = deleteKey
	board.keys.delete.icon = deleteIcon

	## EXTRA KEYS

	if ios.device.name == "ipad"
		keyboardKey = new Layer superLayer:board, name:"dismiss", borderRadius:boardSpecs.sideKeyRadius, backgroundColor:ios.utils.color("light-key"), shadowY:ios.utils.px(1), shadowColor:"#929498", width:boardSpecs.sideKey, height:boardSpecs.sideKey
		keyboardKey.constraints = {trailingEdges:deleteKey, bottom:boardSpecs.bottomRow}
		keyboardIcon = new Layer superLayer:keyboardKey, width:ios.utils.px(32.5), height:ios.utils.px(23.5), backgroundColor:"transparent"
		keyboardIcon.html = ios.assets.keyboard
		keyboardIcon.center()

		board.keys.dismiss = keyboardKey

		shiftKey2 = new Layer superLayer:board, name:"shift", borderRadius:boardSpecs.sideKeyRadius,color:ios.utils.color("black"), backgroundColor:ios.utils.color("light-key"), shadowY:ios.utils.px(1), shadowColor:"#929498", width:boardSpecs.sideKey2, height:boardSpecs.sideKey
		shiftKey2.constraints = (trailingEdges:deleteKey, bottomEdges:shiftKey)
		shiftIcon2 = new Layer width:ios.utils.px(20), height:ios.utils.px(19), superLayer:shiftKey2, backgroundColor:"transparent", x:boardSpecs.shiftIcon.x+ios.utils.px(10), y:boardSpecs.shiftIcon.y
		shiftIcon2.html = ios.assets.shift.off

		shiftKey2.style = {
			"font-size" : ios.utils.px(16) + "px"
			"font-weight" : 400
			"font-family" : '-apple-system, Helvetica, Arial, sans-serif'
			'text-align' : 'center'
			'line-height' : (boardSpecs.key.height) + "px"

		}


		shiftIcon2.states.add
			"on":
				html: svgShiftOn.svg
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
						shiftKey.backgroundColor = ios.utils.color("light-key")
						shiftKey2.backgroundColor = ios.utils.color("light-key")
						for key in keysArray
							key.style["text-transform"] = 'lowercase'
						box.style["text-transform"] = 'lowercase'
				when 2
					for key, index in keysArray
						key.html = thirdArray[index]
						key.name = thirdArray[index]
					board.keyboardState = 3
					shiftKey.html = "123"
					if ios.device.name == "ipad"
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
					if ios.device.name == "ipad"
						shiftKey2.html = "#+="
					board.keyboardState = 2


		numKey2 = new Layer superLayer:board, name:"num", borderRadius:boardSpecs.sideKeyRadius, color:ios.utils.color("black"), backgroundColor:ios.utils.color("light-key"), shadowY:ios.utils.px(1), shadowColor:"#929498", width:boardSpecs.sideKey2, height:boardSpecs.key.height
		numKey2.html = ".?123"
		numKey2.style = {
			"font-size" : ios.utils.px(16) + "px"
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
								key.style["font-size"] = ios.utils.px(17) + "px"
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

					if ios.device.name == "ipad"
						shiftIcon2.visible = false
						shiftKey2.html = "#+="
						numKey2.html = "ABC"
					board.keyboardState = 2
				else
					for key, index in keysArray
						if key.html == "undo" || "redo"
							key.width = boardSpecs.key.width
							key.style["font-size"] = ios.utils.px(25) + "px"
							key.style["font-weight"] = 300
						key.visible = true
						key.name = lettersArray[index]
						key.html = lettersArray[index]
						if index > 25
							key.subLayers[0].visible = true
					shiftKey.html = ""
					shiftIcon.visible = true
					if ios.device.name == "ipad"
						numKey.html = ".?123"
						numKey2.html = ".?123"
						shiftKey2.html = ""
						shiftIcon2.visible = true
					board.keyboardState = 1


	## NUM KEY top:ios.utils.pt(boardSpecs.marginTop.row4 + boardSpecs.key.height*3)

	numKey = new Layer superLayer:board, name:"num", borderRadius:ios.utils.px(5), backgroundColor:ios.utils.color("light-key"), shadowY:ios.utils.px(1), shadowColor:"#929498", color:"black", width:boardSpecs.sideKey, height:boardSpecs.key.height
	numKey.constraints = (bottom:boardSpecs.bottomRow, leadingEdges:shiftKey)
	if ios.device.name != "ipad" && ios.device.name != "ipad-pro"
		numKey.html = "123"
	else
		numKey.html = ".?123"
	numKey.style = {
		"font-size" : ios.utils.px(16) + "px"
		"font-weight" : 400
		"font-family" : '-apple-system, Helvetica, Arial, sans-serif'
		'text-align' : 'center'
		'line-height' : boardSpecs.key.height + "px"
	}

	numKey.on Events.TouchStart, ->
		switch board.keyboardState
			when 1
				## Change Letters
				switch ios.device.name
					when "ipad"
						for key, index in keysArray
							if index < 27
								if secondArray[index] == "undo"
									key.width = key.width * 2 + boardSpecs.spacer
									key.style["font-size"] = ios.utils.px(17) + "px"
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
								key.constraints = {leading:[shiftKey, ios.utils.pt(boardSpecs.expandedSpacer)]}
								ios.layout.set()
							if index > 19
								key.width = boardSpecs.expandedKey
							if index > 20
								key.constraints = {leading:[keysArray[index - 1], ios.utils.pt(boardSpecs.spacer)]}
								ios.layout.set()
							if index > 24
								key.visible = false
						board.keyboardState = 2


				## Handle num keys and shift keys
				numKey.html = "ABC"
				shiftKey.html = "#+="
				shiftIcon.visible = false

			else
				if ios.device.name != "ipad"
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
						key.style["font-size"] = ios.utils.px(25) + "px"
						key.style["font-weight"] = 300
					key.visible = true
					key.name = lettersArray[index]
					key.html = lettersArray[index]
					if index > 25
						key.subLayers[0].visible = true
				shiftKey.html = ""
				shiftIcon.visible = true
				if ios.device.name == "ipad"
					numKey.html = ".?123"
					numKey2.html = ".?123"
					shiftKey2.html = ""
					shiftIcon2.visible = true
				board.keyboardState = 1


	ios.layout.set()

	## EMOJI KEY

	emojiKey = new Layer superLayer:board, name:"emoji", borderRadius:ios.utils.px(5), backgroundColor:ios.utils.color("light-key"), shadowY:ios.utils.px(1), shadowColor:"#929498", width:boardSpecs.sideKey, height:boardSpecs.key.height
	emojiKey.constraints = (bottomEdges:numKey, leading:[numKey, 6])
	emojiIcon = new Layer width:svgEmoji.width, height:svgEmoji.height, superLayer:emojiKey, backgroundColor:"transparent", x:boardSpecs.emojiIcon.x, y:boardSpecs.emojiIcon.y
	emojiIcon.html = svgEmoji.svg



	## RETURN KEY

	returnKey = new Layer superLayer:board, borderRadius:ios.utils.px(5), backgroundColor:ios.utils.color(setup.returnColor), shadowY:ios.utils.px(1), shadowColor:"#929498", color:"black", name:"return", width:boardSpecs.returnKey, height:boardSpecs.key.height
	if setup.returnColor != "light-key"
		returnKey.color = exports.setTextColor(ios.utils.color(setup.returnColor))
	if ios.device.name == "ipad"
		returnKey.constraints = (trailingEdges:deleteKey, top:ios.utils.pt(boardSpecs.marginTop.row2 + boardSpecs.key.height) )
	else
		returnKey.constraints = (trailing:ios.utils.pt(boardSpecs.spacer)/2, bottomEdges:numKey)
	returnKey.html = setup.returnText
	returnKey.style = {
		"font-size" : ios.utils.px(16) + "px"
		"font-weight" : 400
		"font-family" : '-apple-system, Helvetica, Arial, sans-serif'
		'text-align' : 'center'
		'line-height' : boardSpecs.key.height + "px"

	}
	ios.layout.set()

	storedTextColor = returnKey.color
	returnKey.on Events.TouchStart, ->
		returnKey.backgroundColor = "white"
		returnKey.color = ios.utils.color("black")
	returnKey.on Events.TouchEnd, ->
		returnKey.backgroundColor = ios.utils.color(setup.returnColor)
		returnKey.color = storedTextColor

	board.keys.return = returnKey


	## SPACE KEY

	spaceKey = new Layer superLayer:board, borderRadius:ios.utils.px(5), backgroundColor:"white", shadowY:ios.utils.px(1), shadowColor:"#929498", color:"black", name:"space", height:boardSpecs.key.height

	if ios.device.name != "ipad"
		spaceKey.constraints = (bottomEdges:numKey, leading:[emojiKey, ios.utils.pt(boardSpecs.spacer)], trailing:[returnKey, boardSpecs.spacer])
		spaceKey.html = "space"
		spaceKey.style = {
			"font-size" : ios.utils.px(16) + "px"
			"font-weight" : 400
			"font-family" : '-apple-system, Helvetica, Arial, sans-serif'
			'text-align' : 'center'
			'line-height' : boardSpecs.key.height + "px"

		}
	else
		spaceKey.constraints = (bottomEdges:numKey, leading:[emojiKey, ios.utils.pt(boardSpecs.spacer)], trailing:[numKey2, boardSpecs.spacer])
	board.keys["&nbsp;"] = spaceKey
	board.keys.space = spaceKey
	ios.layout.set()


	spaceKey.on Events.TouchStart, ->
		spaceKey.backgroundColor = ios.utils.color("light-key")

	spaceKey.on Events.TouchEnd, ->
		spaceKey.backgroundColor = "white"
		if setup.output
			@newText = setup.output.text.html + "&nbsp;"
			ios.utils.update(setup.output.text, [text:@newText])

	return board
