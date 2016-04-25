## Import Module
ios = require 'iOSKit'
whiteBG = new BackgroundLayer backgroundColor:"white"

status = new ios.StatusBar carrier:"Verizon", battery:75, signal:3

button = new ios.Button 
	constraints:
		bottom:10
		align:"horizontal"
	buttonType:"big"
	text:"I agree, sloths are cool"
	
scroll = new ScrollComponent width:ios.width
scroll.speedX = 0

h1 = new ios.Text 
	constraints:
		top:40
		leading:20
		trailing:20
	fontSize:32
	fontWeight:200
	lineHeight:50
	text:"Do you agree sloths are cool?"

slothImage = new Layer 
	image:"http://kerdowney.com/content/uploads/2015/10/costa-rica-sloths-ker-downey-2.jpg"

slothImage.constraints = 
	top:[h1, 70]
	leading:20
	trailing:20
	height:200
	
ios.layout()

body = new ios.Text 
	constraints:
		top:[slothImage, 40]
		leading:20
		trailing:20
		height:600
	fontSize:17
	fontWeight:200
	lineHeight:30
	text:"1) Sloths are arboreal animals. This means that they live or spend their days mainly on trees. They only come down if it is time for them to urinate or defecate, which only happens once a week. <br> 2) It was once thought that sloths spend about 15 to 20 hours a day sleeping. It was recently discovered, however, that sloths actually only sleep around 10 hours a day. <br> 3) They are vulnerable to predation because they urinate and defecate at the same spot each time. There have been a lot of speculations regarding this behavior. Some says it is because it is easier for them to find one another especially on mating seasons. It was also observed that they defecate near the trunk of the tree, probably to fertilize the tree, which is their source of food. "

button.on Events.TouchEnd, ->
	sheet = new ios.Sheet actions:["Completely agree", "Totally agree"], animated:true, description:"Choose your agreement"
	sheet.actions["Completely agree"].on Events.TouchEnd, ->
		alert = new ios.Alert title:"Nice!", message:"👍"
		alert.on Events.TouchEnd, ->
			alert.destroy()
		
scroll.constraints =
	top:[status,10]
	bottom:button

scroll.content.addSubLayer(h1)
scroll.content.addSubLayer(slothImage)
scroll.content.addSubLayer(body)
ios.layout()
scroll.updateContent()