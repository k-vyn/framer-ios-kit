## Import Module
ios = require 'iOSKit'

whiteBG = new BackgroundLayer backgroundColor: "#999"

home = new ios.Tab label:"Home"
discover = new ios.Tab label:"Discover"
search = new ios.Tab label:"search"

tabBar = new ios.TabBar tabs:[home, discover, search], activeFillColor:"blue", activeLabelColor:"blue"

statusBar = new ios.StatusBar battery:80, carrier:"T-Mobile", network:"2g", signal:3, clock24:true

homeNav = new ios.NavBar rightAction:"-b Edit", title:"Home", superLayer:home.view, leftAction:false

homeNav.rightAction.on Events.TouchEnd, ->
	menu = new ios.Menu animated:true, options:["Quickly", "With speed", "Slow"], description:"How quickly would you like to edit?"

discoverNav = new ios.NavBar superLayer:discover.view, title:"Discover", leftAction:false

field = new ios.Field constraints:{align:"center"}, placeholderText:"Enter a cat"

	
ios.layout()