## Import Module
ios = require 'iOSKit'

whiteBG = new BackgroundLayer backgroundColor: "white"

status = new ios.StatusBar carrier:"Verizon", signal:2

key = new ios.Keyboard
print key.keys["z"].constraints

field = new ios.Field constraints:{align:"center"}

field.text.on "change:html", ->
	print field.keyboard.keys["z"].constraints