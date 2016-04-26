## Dynamic Layout Demo

## Import Module
ios = require 'iOSKit'
whiteBG = new BackgroundLayer backgroundColor:"white"
status = new ios.StatusBar carrier:"Verizon", battery:75, signal:3

## To play with Dynamic Layout, change the frames and see how the layers react
## You can adjust the constraints to shift around the layers

button = new ios.Button 
	constraints:
		bottom:10 # This fixes the button to 10 pts from the bottom
	buttonType:"big"
	text:"I agree, sloths are cool"
	
scroll = new ScrollComponent width:ios.width
scroll.speedX = 0

h1 = new ios.Text 
	constraints:
		top:40 # This fixes the heading line to 40 pts from the top of the ScrollComponent
		leading:20 # This sets the leading edge to 20 pts from the left side
		trailing:20 # This sets the trailing edge to 20 pts from the right
	# Because the leading & trailing were set, the layer's width will be adjusted to honor both constraints
	fontSize:32
	fontWeight:200
	lineHeight:50
	text:"Sloths are cool, right?"

slothImage = new Layer 
	image:"http://media.mnn.com/assets/images/2015/02/sloth.jpg"

slothImage.constraints = 
	top:[h1, 40] # This will place the image 40 pts below the h1
	leading:0
	trailing:0
	height:200
	
ios.layout()

body = new ios.Text 
	constraints:
		top:[slothImage, 40]
		leading:20
		trailing:20
		height:600
	fontSize:17
	fontWeight:300
	lineHeight:30
	text:"1) Sloths are arboreal animals. This means that they live or spend their days mainly on trees. They only come down if it is time for them to urinate or defecate, which only happens once a week. <br> <br> 2) It was once thought that sloths spend about 15 to 20 hours a day sleeping. It was recently discovered, however, that sloths actually only sleep around 10 hours a day. <br> <br> 3) They are vulnerable to predation because they urinate and defecate at the same spot each time. There have been a lot of speculations regarding this behavior. Some says it is because it is easier for them to find one another especially on mating seasons. It was also observed that they defecate near the trunk of the tree, probably to fertilize the tree, which is their source of food. "

button.on Events.TouchEnd, ->
	
	sheet = new ios.Sheet actions:["Completely agree", "Totally agree"], animated:true, description:"Choose your agreement"
	
	sheet.actions["Completely agree"].on Events.TouchEnd, ->
		alert = new ios.Alert title:"Nice!", message:"👍"
		alert.on Events.TouchEnd, ->
			alert.destroy()
			
	sheet.actions["Totally agree"].on Events.TouchEnd, ->
		alert = new ios.Alert title:"Sweet!", message:"🙌"
		alert.on Events.TouchEnd, ->
			alert.destroy()


scroll.constraints =
	top:status # This fixes the scroll component to the bottom of the StatusBar
	bottom:button #This fixes the 

scroll.content.addSubLayer(h1)
scroll.content.addSubLayer(slothImage)
scroll.content.addSubLayer(body)
ios.layout()
scroll.updateContent()