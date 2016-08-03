# Banner
ios = require 'ios-kit'

exports.defaults =
	title: "Title"
	message:"Message"
	action:"Action"
	time:"now"
	app:"app"
	icon:undefined
	duration:7
	animated:true
	reply:true

exports.defaults.props = Object.keys(exports.defaults)

exports.create = (obj) ->
	setup = ios.utils.setupComponent(obj, exports.defaults)

	#set specs for each device
	specs =
		leadingIcon: 15
		topIcon: 8
		topTitle: 6
		width:0

	switch ios.device.name
		when "iphone-5"
			specs.width = 304
		when "iphone-6s"
			specs.width = 359
		when "iphone-6s-plus"
			specs.leadingIcon = 15
			specs.topIcon = 12
			specs.topTitle = 10
			specs.width = 398
		when "ipad"
			specs.leadingIcon = 8
			specs.topIcon = 8
			specs.topTitle = 11
			specs.width = 398
		when "ipad-pro"
			specs.leadingIcon = 8
			specs.topIcon = 8
			specs.topTitle = 9
			specs.width = 556


	banner = new ios.View
		backgroundColor:"rgba(255,255,255,.6)"
		name:"banner"
		borderRadius:ios.px(12)
		shadowColor:"rgba(0,0,0,.3)"
		shadowY:ios.px(2)
		shadowBlur:ios.px(10)
		clip:true
		constraints:
			align:'horizontal'
			width:specs.width
			top:8
			height:93

	banner.header = new ios.View
		backgroundColor:"rgba(255,255,255, .3)"
		name:".header"
		superLayer:banner
		constraints:
			height:36
			leading:0
			trailing:0

	if setup.icon == undefined

		banner.icon = new ios.View
			superLayer:banner.header
		banner.icon.style["background"] = "linear-gradient(-180deg, #67FF81 0%, #01B41F 100%)"

	else

		banner.header.addSubLayer(setup.icon)
		banner.icon = setup.icon


	banner.icon.borderRadius = ios.utils.px(4.5)
	banner.icon.name = ".icon"
	banner.icon.constraints =
		height:20
		width:20
		leading:specs.leadingIcon
		align:"vertical"

	ios.layout.set(banner.icon)

	banner.app = new ios.Text
		text:setup.app.toUpperCase()
		color:"rgba(0,0,0,.5)"
		fontSize:13
		letterSpacing:.5
		superLayer:banner.header
		constraints:
			leading:[banner.icon, 6]
			align:"vertical"

	banner.title = new ios.Text
		text:setup.title
		color:"black"
		fontWeight:"semibold"
		fontSize:15
		superLayer:banner
		name:".title"
		constraints:
			top:45
			leading:15

	banner.message = new ios.Text
		text:setup.message
		color:"black"
		fontSize:15
		fontWeight:"light"
		superLayer:banner
		name:".message"
		constraints:
			leadingEdges:banner.title
			top:[banner.title, 6]

	banner.time = new ios.Text
		text:setup.time
		color:"rgba(0,0,0,.5)"
		fontSize:13
		superLayer:banner.header
		name:".time"
		constraints:
			trailing:16
			align:"vertical"

	if ios.device.name == "ipad" || ios.device.name == "ipad-pro"
		banner.time.constraints =
			bottomEdges: banner.title
			trailing: specs.leadingIcon


	ios.utils.bgBlur(banner)

	## Banner Drag settings
	banner.draggable = true
	banner.draggable.horizontal = false
	banner.draggable.constraints =
		y:ios.px(8)
		x:ios.px(8)

	banner.draggable.bounceOptions =
	    friction: 25
	    tension: 250

	banner.on Events.DragEnd, ->
		if banner.maxY < ios.utils.px(68)
			banner.animate
				properties:(maxY:0)
				time:.15
				curve:"ease-in-out"
			Utils.delay .25, ->
				banner.destroy()

	# Animate-in
	if setup.animated == true
		banner.y = 0 - banner.height
		ios.layout.animate
			target:banner
			time:.25
			curve:'ease-in-out'
	# Animate-out
	if setup.duration
		Utils.delay setup.duration, ->
			banner.animate
				properties:(maxY:0)
				time:.25
				curve:"ease-in-out"
		Utils.delay setup.duration + .25, ->
			banner.destroy()

	return banner
