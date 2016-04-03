## Import Module
ios = require 'iOSKit'

whiteBG = new BackgroundLayer backgroundColor: "white"
status = new ios.StatusBar carrier:"T-Mobile"


alert = new ios.Menu actions:["OK", "Do something", "Don't do anything"]

alert.actions[0].on Events.TouchEnd, ->
	print "OK"