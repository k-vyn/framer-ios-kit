# Import file "iOS Kit Demo"
sketch = Framer.Importer.load("imported/iOS Kit Demo@1x")

# Import module
ios = require "ios-kit"

#Convert sketch file
sketch = ios.convert(sketch)

#Listen to a layer imported from sketch
sketch._NavBar_.right.on Events.TouchEnd, ->
	
	# Create an alert
	alert = new ios.Alert
		title:"Color reset"
		message:"Please enter a new color"
		
	# Reset a converted layer's html
	sketch._Field.text.html = ''