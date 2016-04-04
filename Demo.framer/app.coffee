## Import Module
ios = require 'iOSKit'

whiteBG = new BackgroundLayer backgroundColor: "white"
status = new ios.StatusBar carrier:"T-Mobile"


menu = new ios.Alert actions:["Cat", "-r -b Dog", "Bird"]