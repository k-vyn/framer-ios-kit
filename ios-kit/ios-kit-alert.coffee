# Alert
ios = require 'ios-kit'

exports.defaults =
	title: "Title"
	message:""
	actions:["OK"]

exports.defaults.props = Object.keys(exports.defaults)

exports.create = (obj) ->
	setup = ios.utils.setupComponent(obj, exports.defaults)

	alert = new ios.View
		backgroundColor:"transparent"
		name:"alert"
		constraints:
			leading:0
			trailing:0
			top:0
			bottom:0

	alert.overlay = new ios.View
		backgroundColor:"rgba(0,0,0,.3)"
		superLayer:alert
		name:".overlay"
		constraints:
			leading:0
			trailing:0
			top:0
			bottom:0

	alert.modal = new ios.View
		backgroundColor:"white"
		superLayer:alert
		borderRadius:ios.utils.px(10)
		name:".modal"
		constraints:
			align:"center"
			width:280
			height:400

	alert.title = new ios.Text
		superLayer:alert.modal
		text:setup.title
		fontWeight:"semibold"
		name:".title"
		textAlign:"center"
		lineHeight:20
		constraints:
			top:20
			width:220
			align:"horizontal"

	alert.message = new ios.Text
		superLayer:alert.modal
		text:setup.message
		fontSize:13
		name:".message"
		textAlign:"center"
		lineHeight:16
		constraints:
			top: [alert.title, 10]
			align:"horizontal"
			width: 220

	if setup.message.length == 0
		alert.message.height = -24


	alert.horiDivider = new ios.View
		superLayer:alert.modal
		backgroundColor:"#E2E8EB"
		name:".horiDivider"
		constraints:
			leading:0
			trailing:0
			height:1
			bottom:44

	cleanName = (n) ->
		if n[0] == "-"
			return n.slice(9)
		else
			return n
	#Title + Message + 1 set of actions
	alert.modal.constraints["height"] = 20 + ios.utils.pt(alert.title.height) + 10 + ios.utils.pt(alert.message.height) + 24 + 44

	actions = []
	switch setup.actions.length
		when 1

			actLabel = ios.utils.capitalize(setup.actions[0])

			action = new ios.View
				superLayer:alert.modal
				backgroundColor:"white"
				name:cleanName(setup.actions[0])
				borderRadius:ios.utils.px(10)
				constraints:
					leading:0
					trailing:0
					bottom:0
					height:44

			action.label = new ios.Text
				color:ios.utils.color("blue")
				superLayer:action
				text:actLabel
				name:"label"
				constraints:
					align:"horizontal"
					bottom:16

			actions.push action

		when 2

			actLabel = ios.utils.capitalize(setup.actions[0])

			action = new ios.View
				superLayer:alert.modal
				name:cleanName(setup.actions[0])
				borderRadius:ios.utils.px(10)
				backgroundColor:"white"
				constraints:
					leading:0
					trailing:ios.utils.pt(alert.modal.width/2)
					bottom:0
					height:44

			action.label = new ios.Text
				color:ios.utils.color("blue")
				superLayer:action
				text:actLabel
				name:"label"
				constraints:
					align:"horizontal"
					bottom:16

			actions.push action

			alert.vertDivider = new ios.View
				superLayer:alert.modal
				backgroundColor:"#E2E8EB"
				name:".vertDivider"
				constraints:
					width:1
					bottom:0
					height:44
					align:"horizontal"

			actLabel2 = ios.utils.capitalize(setup.actions[1])

			action2 = new ios.View
				superLayer:alert.modal
				name:cleanName(setup.actions[1])
				borderRadius:ios.utils.px(10)
				backgroundColor:"white"
				constraints:
					leading:ios.utils.pt(alert.modal.width/2)
					trailing:0
					bottom:0
					height:44

			action2.label = new ios.Text
				color:ios.utils.color("blue")
				superLayer:action2
				text:actLabel2
				name:"label"
				constraints:
					align:"horizontal"
					bottom:16

			actions.push action2

		else
			for act, index in setup.actions

				actLabel = ios.utils.capitalize(act)

				action = new ios.View
					superLayer:alert.modal
					name:cleanName(act)
					borderRadius:ios.utils.px(10)
					backgroundColor:"white"
					constraints:
						leading:0
						trailing:0
						bottom:0 + ((setup.actions.length - index - 1) * 44)
						height:44

				actionDivider = new ios.View
					superLayer:alert.modal
					backgroundColor:"#E2E8EB"
					name:"action divider"
					constraints:
						leading:0
						trailing:0
						height:1
						bottom:0 + ((setup.actions.length - index) * 44)

				action.label = new ios.Text
					style:"alertAction"
					color:ios.utils.color("blue")
					superLayer:action
					text:actLabel
					name:"label"
					constraints:
						align:"horizontal"
						bottom:14


				actions.push action
				alert.modal.constraints["height"] = alert.modal.constraints["height"] + 42 - 12

	alert.actions = {}
	for act,index in actions

		#Handle special characters
		act.type = "button"
		ios.utils.specialChar(act)

		if setup.actions[index].indexOf("-r") == 0
			act.origColor = ios.utils.color("red")
		else
			act.origColor = ios.utils.color("blue")
		ios.layout.set(act.label)
		#Add Touch Events
		act.on Events.TouchStart, ->
			@.backgroundColor = "white"
			@.animate
				properties:(backgroundColor:act.backgroundColor.darken(5))
				time:.25
			@.label.animate
				properties:(color:@.origColor.lighten(10))
				time:.25

		act.on Events.TouchEnd, ->
			@.animate
				properties:(backgroundColor:"white")
				time:.25
			@.label.animate
				properties:(color:@.origColor)
				time:.25
			alert.destroy()

		# Export actions
		alert.actions[act.name] = act

	ios.layout.set(actions[actions.length - 1])
	return alert
