## Import Module
ios = require 'iOSKit'

whiteBG = new BackgroundLayer


box = new ios.Text style:"h1", fontSize:"30", fontWeight:"light", text:"Yo, how's it going?"

box2 = new ios.Text style:"h1", text:"Good, thanks"

box.constraints = 
	top:200
	leading:50
ios.layout()

box2.constraints =
	top:[box,10]
	horizontalCenter : box
	
ios.layout()