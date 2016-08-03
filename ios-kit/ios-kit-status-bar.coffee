ios = require 'ios-kit'

exports.defaults = {
	carrier:""
	network:"LTE"
	battery:100
	signal:5
	style:"dark"
	clock24:false
	type:"statusBar"
	superLayer:undefined
}

exports.defaults.props = Object.keys(exports.defaults)

exports.create = (array) ->
	setup = ios.utils.setupComponent(array, exports.defaults)
	statusBar = new Layer
		backgroundColor:"transparent"
		name:"statusBar.all"
		superLayer:setup.superLayer
	statusBar.type = setup.type
	statusBar.constraints =
		leading:0
		trailing:0
		height:20

	switch ios.device.name
		when "iphone-6s-plus"
			@topConstraint = 5
			@batteryIcon = 5
			@bluetooth = 5

		when "fullscreen"
			@topConstraint = 5
			@batteryIcon = - 12
			@bluetooth = - 10
		else
			@topConstraint = 3
			@batteryIcon = 2
			@bluetooth = 3

	if setup.style == "light"
		@color = "white"
	else
		@color = "black"
	for layer in Framer.CurrentContext.layers
		if layer.type == "lockScreen"
			@isLockScreenPutilsent = true
	if @isLockScreenPutilsent
		gripper = new Layer superLayer:statusBar, width:utils.px(37), height:utils.px(5), name:"gripper", backgroundColor:"transparent", opacity:.5, name:"gripper"
		gripper.html = "<?xml version='1.0' encoding='UTF-8' standalone='no'?>
			<svg width='#{utils.px(37)}px' height='#{utils.px(5)}px' viewBox='0 0 37 5' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>
				<!-- Generator: Sketch 3.6.1 (26313) - http://www.bohemiancoding.com/sketch -->
				<title>Gripper</title>
				<desc>Created with Sketch.</desc>
				<defs></defs>
				<g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
					<g id='Keyboard/Auto-Complete-Bar-Closed' transform='translate(-169.000000, -2.000000)' fill='#FFFFFF'>
						<rect id='Gripper' x='169.5' y='2.5' width='36' height='4' rx='2.5'></rect>
					</g>
				</g>
			</svg>"
		gripper.constraints =
			align:"horizontal"
			top:2
	else
		@time = ios.utils.getTime()
		if setup.clock24 == false
			if @time.hours > 11
				@time.stamp = "PM"
			else
				@time.stamp = "AM"
		else
			@time.stamp = ""
		time = new ios.Text style:"statusBarTime", text:ios.utils.timeFormatter(@time, setup.clock24) + " " + @time.stamp, fontSize:12, fontWeight:"semibold", superLayer:statusBar, color:@color, name:"time"
		time.constraints =
			align:"horizontal"
			top:@topConstraint
	signal = []
	if setup.signal < 1
		noNetwork = new ios.Text superLayer:statusBar, fontSize:12, text:"No Network"
		noNetwork.constraints =
			leading:7
			top:3
	else
		for i in [0...setup.signal]
			dot = new Layer height:ios.utils.px(5.5), width:ios.utils.px(5.5), backgroundColor:"black", superLayer:statusBar, borderRadius:ios.utils.px(5.5)/2, backgroundColor:@color, name:"signal[#{i}]"
			if i == 0
				dot.constraints =
					leading:7
					top:7
			else
				dot.constraints =
					leading:[signal[i - 1 ], 1]
					top:7
			signal.push dot
			ios.layout.set()
		if setup.signal < 5
			nonDots = 5 - setup.signal
			for i in [0...nonDots]
				nonDot = new Layer height:ios.utils.px(5.5), width:ios.utils.px(5.5), superLayer:statusBar, borderRadius:ios.utils.px(5.5)/2, backgroundColor:"transparent", name:"signal[#{signal.length}]"
				nonDot.style.border = "#{ios.utils.px(1)}px solid #{@color}"
				nonDot.constraints =
					leading:[signal[signal.length - 1], 1]
					top:7
				signal.push nonDot
				ios.layout.set()
		carrier = new ios.Text style:"statusBarCarrier", text:setup.carrier, superLayer:statusBar, fontSize:12, color:@color, name:"carrier", textTransform:"capitalize"
		carrier.constraints =
			leading:[signal[signal.length - 1], 7]
			top:3
		ios.layout.set()
		if setup.carrier
			network = new ios.Text style:"statusBarNetwork", text:setup.network, superLayer:statusBar, fontSize:12, color:@color, name:"network", textTransform:"uppercase"
			network.constraints =
				leading:[carrier, 5]
				top:3

		if setup.carrier == "" || setup.carrier == "wifi"
			networkIcon = ios.utils.svg(ios.assets.network, @color)
			network = new Layer width:networkIcon.width, height:networkIcon.height, superLayer:statusBar, backgroundColor:"transparent", name:"network"
			network.html = networkIcon.svg
			ios.utils.changeFill(network, @color)
			network.constraints =
				leading:[signal[signal.length - 1], 5]
				top:@topConstraint

	batteryIcon = new Layer width:ios.utils.px(25), height:ios.utils.px(10), superLayer:statusBar, backgroundColor:"transparent", name:"batteryIcon"
	if setup.battery > 70
		highBattery = ios.utils.svg(ios.assets.batteryHigh)
		batteryIcon.html = highBattery.svg
		ios.utils.changeFill(batteryIcon, @color)

	if setup.battery <= 70 && setup.battery > 20
		midBattery = ios.utils.svg(ios.assets.batteryMid)
		batteryIcon.html = midBattery.svg
		ios.utils.changeFill(batteryIcon, @color)

	if setup.battery <= 20
		lowBattery = ios.utils.svg(ios.assets.batteryLow)
		batteryIcon.html = lowBattery.svg
		ios.utils.changeFill(batteryIcon, @color)

	batteryIcon.constraints =
		trailing : 7
		top:@batteryIcon

	batteryPercent = new ios.Text style:"statusBarBatteryPercent", text:setup.battery + "%", superLayer:statusBar, fontSize:12, color:@color, name:"batteryPercent"
	batteryPercent.constraints =
		trailing: [batteryIcon, 3]
		verticalCenter:time

	bluetoothSVG = ios.utils.svg(ios.assets.bluetooth)
	bluetooth = new Layer width:bluetoothSVG.width, height:bluetoothSVG.height, superLayer:statusBar, opacity:.5, backgroundColor:"transparent", name:"bluetooth"
	bluetooth.html = bluetoothSVG.svg
	ios.utils.changeFill(bluetooth, @color)
	bluetooth.constraints =
		top: @bluetooth
		trailing: [batteryPercent, 7]

	ios.layout.set()

	# Export statusBar
	statusBar.battery = {}
	statusBar.battery.percent = batteryPercent
	statusBar.battery.icon = batteryIcon
	statusBar.bluetooth = bluetooth
	statusBar.time = time
	statusBar.network = network
	statusBar.carrier = carrier
	statusBar.signal = signal
	return statusBar
