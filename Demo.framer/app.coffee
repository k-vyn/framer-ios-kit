## Import Module
ios = require 'iOSKit'

whiteBG = new BackgroundLayer

box = new ios.Text style:"H1", fontWeight:"medium", fontSize:34, name:"cats"
box2 = new ios.Text style:"H1", fontSize:10

box2.constraints = 
	top:50

ios.layout() 