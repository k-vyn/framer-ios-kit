ios = require 'ios-kit'

exports.defaults =
	name:'field'
	active:false
	keyboard:true
	placeholder:"Enter text"
	placeholderColor:"#999"
	superLayer:undefined
	backgroundColor:"white"
	borderColor:"#CCCCCC"
	borderRadius:ios.px(5)
	borderWidth:ios.px(1)
	height:ios.px(30)
	width:ios.px(97)
	fontSize:17
	color:'black'
	textConstraints:
		leading:4
		align:"vertical"
	constraints:
		height:30
		width:97
		align:"center"


exports.defaults.props = Object.keys(exports.defaults)

exports.create = (array) ->
	setup = ios.utils.setupComponent(array, exports.defaults)

	field = new ios.View
		name:setup.name
		constraints:setup.constraints
		backgroundColor:setup.backgroundColor
		borderColor:setup.borderColor
		borderRadius:setup.borderRadius
		borderWidth:setup.borderWidth
		height:setup.height
		width:setup.width
		clip:true
		superLayer:setup.superLayer

	field.text = new ios.Text
		superLayer:field
		name:".text"
		constraints:setup.textConstraints
		text:''
		fontSize:17
		color:setup.color

	field.text.placeholder = new ios.Text
		superLayer:field
		name:".placeholder"
		constraints:setup.textConstraints
		text:setup.placeholder
		fontSize:17
		color:setup.placeholderColor

	field.active = setup.active
	field.type = 'field'

	field.on Events.TouchEnd, ->

		if field.active != true
			field.active = true

			if setup.keyboard == true && field.keyboard == undefined
				field.keyboard = new ios.Keyboard
					output:field.text
					hidden:true

			if typeof setup.keyboard == 'object'
				field.input(setup.keyboard)
				field.keyboard = setup.keyboard

			field.keyboard.call()
			field.text.cursor = new ios.View
				superLayer:field
				name:"cursor"
				backgroundColor:ios.color("blue")
				constraints:
					width:2
					height:setup.fontSize + 6
					leading:4
					align:"vertical"

			if field.text.html != setup.placeholder
				field.text.cursor.constraints.leading = field.text
				ios.layout.set(field.text.cursor)
			field.listeningToField = Utils.interval .1, ->
				if field.active == false
					clearInterval(field.interval)
					clearInterval(field.listeningToField)
					field.text.cursor.destroy()


			field.interval = Utils.interval .6, ->
				if field.active
					if field.text.cursor.opacity
						field.text.cursor.animate
							properties:(opacity:0)
							time:.5
					else
						field.text.cursor.animate
							properties:(opacity:1)
							time:.5


			field.text.on "change:html", ->
				@.cursor.constraints.leading = @
				if @.html == ''
					@.placeholder.visible = true
				else
					@.placeholder.visible = false
				if @.html.indexOf(@.placeholder) != -1
					@.html = @.html.replace(@.placeholder, '')

				ios.layout.set(@.cursor)

	field.input = (keyboard) ->
		keyboard.output(field)

	return field
