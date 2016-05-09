# Banner 
ios = require 'ios-kit'

exports.defaults = {
	title: "Title"
	message:"Message"
	action:"Action"
	time:"now"
	icon:undefined
	duration:7
	animated:false
}

exports.defaults.props = Object.keys(exports.defaults)

exports.create = (array) ->
	setup = ios.utils.setupComponent(array, exports.defaults)
	banner = new Layer backgroundColor:"transparent", name:"banner"
	banner.html = ios.utils.svg(ios.assets.bannerBG[ios.device.name]).svg
	banner.constraints =
		leading:0
		trailing:0
		top:0
		height:68

	# Different positionings for each device
	switch ios.device.name
		when "ipad" 
			@leadingIcon = 200
			@topIcon = 15
			@topTitle = 11
		when "ipad-pro"
			@leadingIcon = 192
			@topIcon = 12
			@topTitle = 9
		when "iphone-6s-plus"
			@leadingIcon = 15
			@topIcon = 12
			@topTitle = 10		
		else
			@leadingIcon = 15
			@topIcon = 8
			@topTitle = 6

	if setup.icon == undefined
		setup.icon = new Layer superLayer:banner
		setup.icon.style["background"] = "linear-gradient(-180deg, #67FF81 0%, #01B41F 100%)"
	else
		banner.addSubLayer(setup.icon)

	setup.icon.borderRadius = ios.utils.px(4.5)
	setup.icon.name = "icon"
	setup.icon.constraints =
		height:20
		width:20
		leading:@leadingIcon
		top:@topIcon 

	title = new ios.Text style:"bannerTitle", text:setup.title, color:"white", fontWeight:"medium", fontSize:13, superLayer:banner, name:"title"
	title.constraints = 
		top:@topTitle
		leading:[setup.icon, 11]
	message = new ios.Text style:"bannerMessage", text:setup.message, color:"white", fontSize:13, superLayer:banner, name:"message"
	message.constraints =
		leadingEdges:title
		top:[title, 2]

	time = new ios.Text style:"bannerTime", text:setup.time, color:"white", fontSize:11, superLayer:banner, name:"time"
	time.constraints =
		leading:[title, 5]
		bottomEdges: title

	if ios.device.name == "ipad" || ios.device.name == "ipad-pro"
		time.constraints =
			bottomEdges: title
			trailing: @leadingIcon

	ios.layout.set()
	ios.utils.bgBlur(banner)

	## Banner Drag settings
	banner.draggable = true
	banner.draggable.horizontal = false
	banner.draggable.constraints =
		y:0

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

	# Buffer that sits above the banner
	bannerBuffer = new Layer maxY:0, name:"buffer", backgroundColor:"#1B1B1C", opacity:.9, superLayer:banner, width:ios.device.width, maxY:banner.y, height:ios.device.height
	ios.utils.bgBlur(bannerBuffer)

	# Animate-in
	if setup.animated == true
		banner.y = 0 - banner.height
		banner.animate
			properties:(y:0)
			time:.25
			curve:"ease-in-out"

	# Animate-out
	if setup.duration
		Utils.delay setup.duration, ->
			banner.animate
				properties:(maxY:0)
				time:.25
				curve:"ease-in-out"
		Utils.delay setup.duration + .25, ->
			banner.destroy()
		
	# Export Banner
	banner.icon = setup.icon
	banner.title = title
	banner.message = message
	return banner
