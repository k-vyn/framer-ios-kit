# Dynamic Layout Demo

# Import Module
ios = require 'iOSKit'
whiteBG = new BackgroundLayer backgroundColor:"white"
status = new ios.StatusBar carrier:"Verizon", battery:75, signal:3

## To play with Dynamic Layout, change the frames and see how the layers react
## You can adjust the constraints to shift around the layers

button = new ios.Button 
	constraints:
		bottom:10 # This fixes the button to 10 pts from the bottom
	buttonType:"big"
	text:"Share"
	
scroll = new ScrollComponent width:ios.width
scroll.speedX = 0

h1 = new ios.Text 
	constraints:
		top:40 # This fixes the heading line to 40 pts from the top of the ScrollComponent
		leading:20 # This sets the leading edge to 20 pts from the left side
		width:ios.pt(ios.width) - 40
		trailing:20 # This sets the trailing edge to 20 pts from the right
	# Because the leading & trailing were set, the layer's width will be adjusted to honor both constraints
	fontSize:40
	fontWeight:200
	lineHeight:50
	text:"Signs of life on Jupiter"

slothImage = new Layer 
	image:"https://i.ytimg.com/vi/zMCDl1Asm_c/maxresdefault.jpg"

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
		width:ios.pt(ios.width) - 40
	fontSize:17
	fontWeight:300
	lineHeight:30
	text: "As an avid reader, I have come across many books that proposed the idea of life on Jupiter. Some even proposed that Jupiter is lifeless, but its moons harbor advanced life forms. Is there life on Jupiter? While there have been no samples taken that could test for microscopic life on the planet, there is quite a bit of compelling evidence that shows there is no possible way for life as we know it to exist anywhere on the planet. Try this link for one scientist’s take on finding life in the cosmos.<br><br>First, let’s look at the conditions on Jupiter that preclude the existence of life. The planet is a gas giant composed mainly of hydrogen and helium. There is virtually no water to support known life forms. The planet does not have a solid surface for life to develop anywhere except as a floating microscopic organism.<br><br>Free floating organisms could only exist at the very tops of the clouds due to atmospheric pressure that is progressively more intense than anything seen on Earth. While the cloud tops could harbor life that is resistant to solar radiation, the atmosphere is in constant chaos. Convection forces the lower atmosphere upwards and colder areas of the atmosphere are constantly being sucked closer to the core. The churning would eventually expose any organisms to the extreme pressures nearer the core, thus killing any that may develop.<br><br>Should an organism find a way to resist atmospheric pressure that reaches 1,000 times what it is here on Earth, there are the temperatures close to the planet’s core. Gravitational compression has heated areas near the core to over 10,000 degrees Celsius. It is so hot in some areas that hydrogen is in a liquid metallic state. While organisms on Earth live in areas near volcanoes, the temperatures there do not approach Jovian levels."

button.on Events.TouchEnd, ->
	
	sheet = new ios.Sheet actions:["Facebook", "Twitter"], animated:true, description:"Share to your favorite social network"
	
	sheet.actions.Facebook.on Events.TouchEnd, ->
		alert = new ios.Alert title:"Nice!", message:"👍"
		alert.on Events.TouchEnd, ->
			alert.destroy()
			
	sheet.actions.Twitter.on Events.TouchEnd, ->
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