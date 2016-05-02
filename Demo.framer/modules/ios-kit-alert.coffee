# Alert
ios = require 'ios-kit'

exports.defaults = {
	title: "Title"
	message:"Message"
	actions:["OK"]
	action:"Action"
	secondaryAction: "secondaryAction"
}

exports.defaults.props = Object.keys(exports.defaults)

exports.create = (array) ->
	setup = ios.setupComponent(array, exports.defaults)

	alert = new Layer backgroundColor:"transparent", name:"alert"
	alert.constraints = 
		leading:0
		trailing:0
		top:0
		bottom:0

	overlay = new Layer backgroundColor:"rgba(0,0,0,.3)", superLayer:alert, name:"overlay"
	overlay.constraints =
		leading:0
		trailing:0
		top:0
		bottom:0

	modal = new Layer backgroundColor:"white", superLayer:alert, borderRadius:ios.utils.px(10), name:"modal", x:92, y:537
	modal.constraints =
		align:"center"
		width:280
		height:400

	title = new ios.Text 
		superLayer:modal
		text:setup.title
		fontWeight:"semibold"
		name:"title"
		textAlign:"center"
		lineHeight:20
		constraints:
			top:20
			width:220
			align:"horizontal"

	message = new ios.Text 
		superLayer:modal
		text:setup.message
		fontSize:13
		name:"message"
		textAlign:"center"
		lineHeight:16
		constraints:
			top: [title, 10]
			align:"horizontal"
			width: 220

	divider = new Layer superLayer:modal, backgroundColor:"#E2E8EB", name:"horizontal divider"
	divider.constraints = 
		leading:0
		trailing:0
		height:1
		bottom:44
	ios.layout.set()
	
	#Title + Message + 1 set of actions
	modal.constraints["height"] = 20 + ios.utils.pt(title.height) + 10 + ios.utils.pt(message.height) + 24 + 44

	actions = []
	switch setup.actions.length
		when 1
			actLabel = ios.utils.capitalize(setup.actions[0])
			action = new Layer superLayer:modal, backgroundColor:"transparent", name:setup.actions[0], borderRadius:ios.utils.px(10)
			action.constraints = 
				leading:0
				trailing:0
				bottom:0
				height:44
			action.label = new ios.Text style:"alertAction", color:ios.utils.color("blue"), superLayer:action, text:actLabel, name:"label"
			action.label.constraints = 
				align:"horizontal"
				bottom:16
			actions.push action
		when 2
			actLabel = ios.utils.capitalize(setup.actions[0])
			action = new Layer superLayer:modal, name:setup.actions[0], borderRadius:ios.utils.px(10), backgroundColor:"white"
			action.constraints = 
				leading:0
				trailing:ios.utils.pt(modal.width/2)
				bottom:0
				height:44
			action.label = new ios.Text style:"alertAction", color:ios.utils.color("blue"), superLayer:action, text:actLabel, name:"label"
			action.label.constraints = 
				align:"horizontal"
				bottom:16
			actions.push action		

			vertDivider = new Layer superLayer:modal, backgroundColor:"#E2E8EB", name:"vertical divider"
			vertDivider.constraints = 
				width:1
				bottom:0
				height:44
				align:"horizontal"

			actLabel2 = ios.utils.capitalize(setup.actions[1])
			action2 = new Layer superLayer:modal, name:setup.actions[1], borderRadius:ios.utils.px(10), backgroundColor:"white"
			action2.constraints = 
				leading:ios.utils.pt(modal.width/2)
				trailing:0
				bottom:0
				height:44
			action2.label = new ios.Text style:"alertAction", color:ios.utils.color("blue"), superLayer:action2, text:actLabel2, name:"label"
			action2.label.constraints = 
				align:"horizontal"
				bottom:16
			actions.push action2
		else
			for act, index in setup.actions
				actLabel = ios.utils.capitalize(act)
				action = new Layer superLayer:modal, name:act, borderRadius:ios.utils.px(10), backgroundColor:"white"
				action.constraints = 
					leading:0
					trailing:0
					bottom:0 + ((setup.actions.length - index - 1) * 44)
					height:44
				actionDivider = new Layer superLayer:modal, backgroundColor:"#E2E8EB", name:"horizontal divider"
				actionDivider.constraints = 
					leading:0
					trailing:0
					height:1
					bottom:0 + ((setup.actions.length - index) * 44)
				action.label = new ios.Text style:"alertAction", color:ios.utils.color("blue"), superLayer:action, text:actLabel, name:"label"
				action.label.constraints = 
					align:"horizontal"
					bottom:14
				actions.push action		
				modal.constraints["height"] = modal.constraints["height"] + 42 - 12

	alert.actions = {}	
	for act,index in actions

		#Handle special characters
		act.type = "button"
		ios.utils.specialChar(act)
		
		if setup.actions[index].indexOf("-r") == 0
			act.origColor = ios.utils.color("red")
		else
			act.origColor = ios.utils.color("blue")

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

		# Export actions
		alert.actions[act.name] = act


	ios.layout.set()

	# Export alert
	alert.overlay = overlay
	alert.modal = modal
	alert.title = title
	alert.message = message

	return alert