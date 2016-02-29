## Import Module
ios = require 'iOSKit'

whiteBG = new BackgroundLayer


text = new ios.Text style:"h1", fontSize:30, text:"yo, this is cool!", fontWeight:100

text.constraints =
	leading:50
	top:50

ios.layout()
