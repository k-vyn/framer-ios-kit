## Import Module
ios = require 'iOSKit'

whiteBG = new BackgroundLayer backgroundColor: "white"

home = new ios.Tab label:"Home"
discover = new ios.Tab label:"Discover"
search = new ios.Tab label:"search"

tabBar = new ios.TabBar tabs:[home, discover, search], activeFillColor:"blue", activeLabelColor:"blue"

statusBar = new ios.StatusBar battery:80, carrier:"T-Mobile", network:"2g", signal:3, clock24:true

homeNav = new ios.NavBar rightAction:"-b Edit", title:"Home", superLayer:home.view, leftAction:false

homeNav.rightAction.on Events.TouchEnd, ->
	menu = new ios.Menu animated:true, options:["Quickly", "With speed", "Slow"], description:"How quickly would you like to edit?"

discoverNav = new ios.NavBar superLayer:discover.view, title:"Discover", leftAction:false

customCell = new ios.TableCell 
	height:75
	properties:{
		"label" : {
			"fontSize":20
			"leading":16
			"top" : 16
		}
		"detail" : {
			fontSize:20
			top:15
			trailing:16
		}
		"message" :{
			fontSize:16
			bottom:14
			leading:16
			color:"#828282"
			width:200
		}
	}

table = new ios.Table 
	superLayer:home.view
	constraints:{top:64, bottom:0, leading:0, trailing:0}
	content:[
		{label:"A", detail:"AB"},
		{label:"B", detail:"BC"}
		{label:"C", detail:"CD"},
		{label:"D", detail:"DE"}
		{label:"Lodfjdsds", detail:"EF"}
		]

ios.layout()
