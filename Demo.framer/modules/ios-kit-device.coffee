# Device

framerDevices = {

# Fullscreen
	"fullscreen" : { height: window.innerHeight, width: window.innerWidth,	scale:1, mobile:false, platform:"web"}

	# iPhones
	## 5S
	"apple-iphone-5s-space-gray": { height: 1136, width: 640,	scale: 2, mobile:true, platform:"iOS"}
	"apple-iphone-5s-silver": { height: 1136, width: 640,	scale: 2, mobile:true, platform:"iOS"}
	"apple-iphone-5s-gold": { height: 1136, width: 640,	scale: 2, mobile:true, platform:"iOS"}

	## 5c
	"apple-iphone-5c-green": { height: 1136, width: 640,scale: 2, mobile:true, platform:"iOS"}
	"apple-iphone-5c-blue": { height: 1136, width: 640,	scale: 2, mobile:true, platform:"iOS"}
	"apple-iphone-5c-red": { height: 1136, width: 640,	scale: 2, mobile:true, platform:"iOS"}
	"apple-iphone-5c-white": { height: 1136, width: 640,scale: 2, mobile:true, platform:"iOS"}
	"apple-iphone-5c-yellow": { height: 1136, width: 640,scale: 2, mobile:true, platform:"iOS"}
	"apple-iphone-5c-pink": { height: 1136, width: 640,	scale: 2, mobile:true, platform:"iOS"}

	## 6s
	"apple-iphone-6s-space-gray" : { height: 1334, width: 750,	scale: 2, mobile:true, platform:"iOS"}
	"apple-iphone-6s-silver": { height: 1334, width: 750,	scale: 2, mobile:true, platform:"iOS"}
	"apple-iphone-6s-gold": { height: 1334, width: 750,	scale: 2, mobile:true, platform:"iOS"}
	"apple-iphone-6s-rose-gold": { height: 1334, width: 750,	scale: 2, mobile:true, platform:"iOS"}

	## 6s plus
	"apple-iphone-6s-plus-gold": { height: 2208, width: 1242, scale: 3, mobile:true, platform:"iOS"}
	"apple-iphone-6s-plus-silver": { height: 2208, width: 1242,	scale: 3, mobile:true, platform:"iOS"}
	"apple-iphone-6s-plus-space-gray": { height: 2208, width: 1242,	scale: 3, mobile:true, platform:"iOS"}
	"apple-iphone-6s-plus": { height: 2208, width: 1242,	scale: 3, mobile:true, platform:"iOS"}

	# iPads

	## Air 
	"apple-ipad-air-2-gold": { height: 2048, width: 1536,	scale: 2, mobile:true, platform:"iOS"}
	"apple-ipad-air-2-silver": { height: 2048, width: 1536,	scale: 2, mobile:true, platform:"iOS"}
	"apple-ipad-air-2-space-gray": { height: 2048, width: 1536,	scale: 2, mobile:true, platform:"iOS"}

	## Mini
	"apple-ipad-mini-4-gold": { height: 2048, width: 1536,	scale: 2, mobile:true, platform:"iOS"}
	"apple-ipad-mini-4-space-gray": { height: 2048, width: 1536,	scale: 2, mobile:true, platform:"iOS"}
	"apple-ipad-mini-4-silver":{ height: 2048, width: 1536, scale: 2, mobile:true, platform:"iOS"}

	## Pro
	"apple-ipad-pro-gold": { height: 2732, width: 2048, scale: 2, mobile:true, platform:"iOS"}
	"apple-ipad-pro-silver": { height: 2732, width: 2048, scale: 2, mobile:true, platform:"iOS"}
	"apple-ipad-pro-space-gray" : { height: 2732, width: 2048, scale: 2, mobile:true, platform:"iOS"}
}

## These variables will be populated with details from the device upon running. 

# getDevice will populate device variables, and it'll override the frame if the device is different. 
exports.get = ->


	# Loads the initial frame
	device = Framer.Device.deviceType

	### This switch looks at the innerWidth to determine if the prototype is being opened on a device. 
	If so, it'll override the device, and it'll adjust the view to fullscreen.###
	capturedDevice = {
		width:framerDevices[device].width
		height:framerDevices[device].height
		scale:framerDevices[device].scale
		mobile:framerDevices[device].mobile
		platform:framerDevices[device].platform
	}

	switch innerWidth
		# iPhone 5c/5s/SE
		when 640
			device = "apple-iphone-5s-silver"
			Framer.Device.deviceType = "fullscreen"

		# iPhone 6s
		when 750
			device = "apple-iphone-6s-silver"
			Framer.Device.deviceType = "fullscreen"

		# iPhone 6s+
		when 1242 
			if innerHeight == 2208
				device = "apple-iphone-6s-plus-silver"
				Framer.Device.deviceType = "fullscreen"

		# iPad in portrait
		when 1536 
			if innerHeight == 2048
				device = "apple-ipad-air-2-silver"
				Framer.Device.deviceType = "fullscreen"

		# iPad
		when 2048

			# iPad Pro in portrait
			if innerHeight == 2732
				device = "apple-ipad-pro-silver"

			# iPad in landsccape
			if innerHeight == 1536
				device = "apple-ipad-air-2-silver"
			Framer.Device.deviceType = "fullscreen"

		# iPad Pro
		when 2732
			if innerHeight == 2048
				device = "apple-ipad-pro-silver"
				Framer.Device.deviceType = "fullscreen"

	exports.scale = framerDevices[device].scale

	if device == "fullscreen"
		exports.width = window.innerWidth
		exports.height = window.innerHeight
	else
		exports.width = framerDevices[device].width
		exports.height = framerDevices[device].height
		if window.innerWidth == 1242 || window.innerWidth == 2208
			exports.width = window.innerWidth
			exports.height = window.innerHeight
			exports.scale = 3
	exports.mobile = framerDevices[device].mobile
	exports.platform = framerDevices[device].platform
	exports.orientation =  Framer.Device.orientation

	# Device String Scrubber
	device = device.replace("apple-", "")
	device = device.replace("-gold", "")
	device = device.replace("-green", "")
	device = device.replace("-blue", "")
	device = device.replace("-red", "")
	device = device.replace("-white", "")
	device = device.replace("-yellow", "")
	device = device.replace("-pink", "")
	device = device.replace("-space-grey", "")
	device = device.replace("-rose", "")
	device = device.replace("5s", "5")
	device = device.replace("5c", "5")
	device = device.replace("-mini", "")
	device = device.replace("-air", "")
	device = device.replace("-2", "")
	device = device.replace("-4", "")
	device = device.replace("-silver", "")

	capturedDevice.name = device

	# exports.device becomes either ipad, ipad-pro, iphone-5, iphone-6s, iphone-6s-plus
	return capturedDevice
