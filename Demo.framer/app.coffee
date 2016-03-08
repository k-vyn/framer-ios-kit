## Import Module
ios = require 'iOSKit'

whiteBG = new BackgroundLayer

home = new ios.Tab label:"Home"
discover = new ios.Tab label:"Discover"
search = new ios.Tab label:"search"

tabBar = new ios.TabBar tabs:[home, discover, search], activeFillColor:"pink", activeLabelColor:"#FE2851"

statusBar = new ios.StatusBar carrier:"verizon", battery:50, signal:3


button = new ios.Button type:"big"
button.constraints = 
	align:"horizontal"
	bottom:0

print button.subLayers[0]

ios.layout()