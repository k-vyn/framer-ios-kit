ios = require 'ios-kit'
# Dynamic Layout Demo

bg = new BackgroundLayer


layer = new Layer
layer.constraints = 
	leading:20
	bottom:20	
	
layer2 = new Layer
layer2.constraints = 
	leading:[layer, 10]
	bottomEdges:layer
	
ios.layout.animate
	curve:"spring(1200,20,10)"