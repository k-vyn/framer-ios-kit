## Import Module
ios = require 'iOSKit'
status = new ios.StatusBar
whiteBG = new BackgroundLayer backgroundColor:"rgb(238, 240, 240)"
layers = []

runOrder = (layer, index) ->
	if index == 0 then layer.constraints.top = 50
	else layer.constraints.top = [layers[index - 1], 30]

for i in [0...10]
	l = new Layer borderRadius:ios.px(15), backgroundColor:"white", shadowColor: "rgba(0,0,0,.3)", shadowBlur: ios.px(20)
	l.constraints = {height:100, leading:50, trailing:50}
	runOrder(l, i)
	
	l.on Events.TouchEnd, ->
		index = layers.indexOf(@)
		layers.splice(index, 1)
		@.constraints = {top:-500, leading:0, trailing:0, height:200}
		for l, i in layers
			runOrder(l, i)

		## Call this to process the animations
		ios.animateLayout
			target:@
			fadeOut:@
			time:.2
			
		ios.animateLayout
			target:layers
			stagger:0.1
			curve:"spring(200,25,15)"
		
	layers.push l

ios.layout()

