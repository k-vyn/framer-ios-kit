## Import Module
ios = require 'iOSKit'

whiteBG = new BackgroundLayer backgroundColor: "white"

home = new ios.Tab label:"Home"
discover = new ios.Tab label:"Discover"
search = new ios.Tab label:"search"

tabBar = new ios.TabBar tabs:[home, discover, search], activeFillColor:"red", activeLabelColor:"red"

statusBar = new ios.StatusBar battery:80, carrier:"verizon", network:"3g", signal:3

nav = new ios.NavBar rightAction:"-b Edit", title:"Home", superLayer:home.view, leftAction:false

nav.rightAction.on Events.TouchEnd, ->
	menu = new ios.Menu animated:true, options:["Quickly", "With speed", "Slow"], description:"How quickly would you like to edit?"