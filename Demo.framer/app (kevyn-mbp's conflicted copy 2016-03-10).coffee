## Import Module
ios = require 'iOSKit'

whiteBG = new BackgroundLayer

home = new ios.Tab label:"Home"
discover = new ios.Tab label:"Discover"
search = new ios.Tab label:"search"

tabBar = new ios.TabBar tabs:[home, discover, search], activeFillColor:"blue", activeLabelColor:"blue"

statusBar = new ios.StatusBar battery:80, carrier:"verizon", network:"3g", signal:3

menu = new ios.Menu animated:true


ios.layout()

