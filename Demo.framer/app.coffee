## Import Module
ios = require 'iOSKit'

whiteBG = new BackgroundLayer backgroundColor: "white"

status = new ios.StatusBar carrier:"VERIZON", network:"wifi"

field = new ios.Field constraints:{align:"center"}

