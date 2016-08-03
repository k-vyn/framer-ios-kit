ios = require 'ios-kit'

exports.defaults = {
	actions:["Reply", "Reply All", "Forward", "Print"]
	exit:"Cancel"
	animated:true
	description:undefined
	target:undefined
}

exports.defaults.props = Object.keys(exports.defaults)

exports.create = (array) ->
	setup = ios.utils.setupComponent(array, exports.defaults)
	for l in Framer.CurrentContext.layers
		if l.type == 'sheet'
			l.dismiss()

	sheet = new ios.View
		name:"sheet"
		backgroundColor:"transparent"
		constraints:
			top:0
			leading:0
			trailing:0
			bottom:0

	sheet.type = 'sheet'

	sheet.menu = new Layer
		name:"menu"
		superLayer:sheet
		backgroundColor:"transparent"
		borderRadius:ios.px(12)
		clip:true

		if ios.isPad()
			sheetTip = ios.utils.svg(ios.assets.sheetTip)
			sheet.tip = new ios.View
				name:'.tip'
				color:'black'
				superLayer:sheet
				html:sheetTip.svg
				height:sheetTip.height - 4
				width:sheetTip.width
				backgroundColor:'transparent'
				constraints:
					horizontalCenter:setup.target
			sheet.linked = setup.target
			sheet.linked.ignoreEvents = true

	place = (t, l)->
		w = ios.device.width
		h = ios.device.height
		centerX = w/2
		# x - axis
		if w - t.x > centerX #left
			if t.x - ios.px(150) < 0
				l.constraints.leading = 10
			else
				l.constraints.horizontalCenter = t

		else #right
			if t.x + ios.px(150) > w
				l.constraints.trailing = 10
			else
				l.constraints.horizontalCenter = t

		if t.y + l.height < h #top
				l.constraints.top = [t, 40]
				if ios.isPad()
					sheet.tip.constraints.bottom = [l, 1]
		else #bottom
				l.constraints.bottom = [t, 40]
				if ios.isPad()
					sheet.tip.constraints.top = [l, 1]
					sheet.tip.rotation = 180
		if ios.isPad()
			ios.layout.set(sheet.tip)
	sheet.dismiss = ->

		if ios.isPhone()
			sheet.menu.animate
				properties:
					y:ios.device.height
				time:.25

			sheet.cancel.animate
				properties:
					y:ios.device.height + ios.px(75)
				time:.25
			sheet.overlay.animate
				properties:
					opacity:0
				time:.25
			Utils.delay .25, ->
				sheet.destroy()
		else
			sheet.linked.ignoreEvents = false
			Utils.delay .15, ->
				sheet.destroy()


	sheet.call = ->
		if ios.isPhone()
			sheet.menu.y = ios.device.height
			sheet.cancel.y = ios.device.height + ios.px(75)
			sheet.overlay.opacity = 0

			sheet.overlay.animate
				properties:
					opacity:.5
				time:.25
			ios.layout.animate
				target:[sheet.menu, sheet.cancel]
				time:.25
		else
			place(setup.target, sheet.menu)
			ios.layout.set(sheet.menu)



	if ios.device.name.indexOf("ipad") == -1
		sheet.overlay = new ios.View
			name:".overlay"
			backgroundColor:"black"
			opacity:.5
			superLayer:sheet
			constraints:
				top:0
				leading:0
				trailing:0
				bottom:0
		sheet.overlay.sendToBack()

		sheet.menu.constraints =
			leading:10
			trailing:10
			bottom:57 + 8 + 10
			height:(setup.actions.length) * 57

		sheet.cancel = new ios.Button
			name:".cancel"
			type:"big"
			text:setup.exit
			superLayer:sheet
			constraints:
				bottom:10
				leading:0
				trailing:0
		sheet.cancel.on Events.TouchEnd, ->
			sheet.dismiss()
	else
		sheet.menu.constraints =
			width:300
			height:(setup.actions.length) * 57

		sheet.menu.props =
			shadowY:2
			shadowBlur:ios.px(100)
			shadowColor:"rgba(0,0,0,0.1)"

	ios.layout.set(sheet)

	sheet.actionsArray = []
	sheet.actions = {}
	for a,i in setup.actions
		action = new ios.View
			name: ".actions.[\"" + a.toLowerCase() + "\"]"
			backgroundColor:"rgba(255,255,255,1)"
			superLayer:sheet.menu
			constraints:
				leading:0
				trailing:0
				height:57
		action.style["-webkit-box-shadow"] = "inset 0 0 " + ios.px(.5) + "px rgba(0,0,0,.25)"

		action.label = new ios.Text
			text:a
			color:ios.color("blue")
			fontSize:20
			superLayer:action
			constraints:
				align:"center"

		ios.utils.specialChar(action.label)

		if i == 0
			action.constraints.top = 0
		else
			action.constraints.top = sheet.actionsArray[i - 1]

		action.on Events.TouchStart, ->
			@.animate
				properties:
					backgroundColor:@.backgroundColor.darken(10)
					time:.2

		action.on Events.TouchEnd, ->
			@.animate
				properties:
					backgroundColor:"rgba(255,255,255, .8)"
				time:.2
			sheet.dismiss()



		ios.layout.set(action)

		sheet.actionsArray.push action
		sheet.actions[a.toLowerCase()] = action


	if setup.animated
		sheet.call()
	if ios.isPad()
		sheet.tip.bringToFront()
	return sheet
