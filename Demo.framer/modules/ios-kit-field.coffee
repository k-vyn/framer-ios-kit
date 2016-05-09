ios = require 'ios-kit'

exports.defaults =
	field:
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
	cursor:
		color:"blue"
		height:20
		width:1


exports.defaults.field.props = Object.keys(exports.defaults.field)

exports.create = (array) ->
	setup = ios.utils.setupComponent(array, exports.defaults.field)
	field = new Layer borderRadius:ios.utils.px(setup.borderRadius), backgroundColor:setup.backgroundColor, width:ios.utils.px(setup.width), height:ios.utils.px(setup.height)
	if setup.constraints
		field.constraints =
			setup.constraints
	field.active = false
	text = new ios.Text style:"fieldText", superLayer:field, text:setup.text, fontSize:setup.fontSize, fontWeight:setup.fontWeight, color:setup.color
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
		placeholder = new ios.Text style:"fieldPlaceholder", superLayer:field, text:setup.placeholderText, fontSize:setup.fontSize, fontWeight:setup.fontWeight, color:setup.placeholderColor
		if setup.textConstraints
			placeholder.constraints =
				setup.textConstraints
		field.placeholder = placeholder

	field.on Events.TouchEnd, ->
		field.active = true
		text.visible = true
		clickZone = new Layer name:"fieldActive", opacity:0
		if setup.input
			keyboard = new ios.Keyboard animated:true, output:field, returnText:setup.returnText, returnColor:setup.returnColor
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
			field.keyboard.animate
				properties:(y:ios.device.height)
				time:.4
				curve:"ease-in-out"
			Utils.delay .5, ->
				field.keyboard.destroy()
				field.active = false
				clickZone.destroy()
		field.clickZone = clickZone

		if ios.device.name == "ipad"
			field.keyboard.keys.dismiss.on Events.TouchEnd, ->
				field.keyboard.animate
					properties:(y:ios.device.height)
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
			cursor = new Layer width:ios.utils.px(setup.cursor.width), height:ios.utils.px(setup.cursor.height), superLayer:field, name:"cursor", backgroundColor:ios.utils.color("blue"), borderRadius:ios.utils.px(1)
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
		ios.layout.set()

	ios.layout.set()
	return field




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
				key.backgroundColor = ios.utils.color("light-key")
			else
				if ios.device.name != "ipad"
					keyboard.keyPopUp.visible = true
					boxKey = key.name
					if isShift
						boxKey = boxKey.toUpperCase()
					keyboard.keyPopUp.box.html = boxKey
					keyboard.keyPopUp.maxY = key.maxY
					keyboard.keyPopUp.midX = key.midX
				else
					key.animate
						properties:(backgroundColor:ios.utils.color("light-key"))
						time:.2

	isCommand = false
	allSelected = false
	isShift = false
	codes = { 13:"<br>", 32:"&nbsp;", 33:"!", 34:"\"", 35:"#", 36:"$", 37:"%", 38:"&", 39:"\'", 40:"(", 41:")", 42:"*", 43:"+", 44:",", 45:"-", 47:"/", 46:".", 48:"0", 49:"1", 50:"2", 51:"3", 52:"4", 53:"5", 54:"6", 55:"7", 56:"8", 57:"9", 58:":", 59:";", 60:"<", 61:"=", 62:">", 63:"?", 64:"@", 65:"A", 66:"B", 67:"C", 68:"D", 69:"E", 70:"F", 71:"G", 72:"H", 73:"I", 74:"J", 75:"K", 76:"L", 77:"M", 78:"N", 79:"O", 80:"P", 81:"Q", 82:"R", 83:"S", 84:"T", 85:"U", 86:"V", 87:"W", 88:"X", 89:"Y", 90:"Z", 91:"[", 92:"\\", 93:"]", 94:"^", 95:"_", 96:"`", 97:"a", 98:"b", 99:"c", 100:"d", 101:"e", 102:"f", 103:"g", 104:"h", 105:"i", 106:"j", 107:"k", 108:"l", 109:"m", 110:"n", 111:"o", 112:"p", 113:"q", 114:"r", 115:"s", 116:"t", 117:"u", 118:"v", 119:"w", 120:"x", 121:"y", 122:"z", 123:"{", 124:"|", 125:"}", 126:"~"}

	document.addEventListener 'keydown', (e) ->
		if field.active
			if e.keyCode == 27
				e.preventDefault()
				keyboard.animate
					properties:(y:ios.device.height)
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
					ios.utils.update(field.text, [text:""])
					field.text.backgroundColor ="transparent"
					allSelected = false
				initialLength = field.text.html.length
				newText = field.text.html.slice(0, -1)
				ios.utils.update(field.text, [text:newText])
				endLength = field.text.html.length
				if initialLength == endLength
					newText = field.text.html.slice(0, -6)
					ios.utils.update(field.text, [text:newText])
				if field.text.html == ""
					field.placeholder.visible = true

				# Get rid of & nbsp;

				field.value = ios.utils.clean(newText)

	document.addEventListener 'keyup', (e) ->
		if field.active
			if e.keyCode == 13 && keyboard
				keyboard.keys.return.backgroundColor = ios.utils.color("light-key")
			if e.keyCode == 32 && keyboard
				keyboard.keys.space.backgroundColor = "White"
			if e.keyCode == 8 && keyboard
				keyboard.keys.delete.animate
					properties:(backgroundColor:ios.utils.color("light-key"))
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
						properties:(backgroundColor:ios.utils.color("light-key"))
						time:.2
					keyboard.keys.shift.icon.states.next()
			if e.keyCode >= 65 && e.keyCode <= 90
				if keyboard && ios.device.anme != "ipad"
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
					ios.utils.update(field.text, [text:newText])
					field.value = ios.utils.clean(newText)
