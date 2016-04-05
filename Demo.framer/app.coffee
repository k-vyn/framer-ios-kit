## Import Module
ios = require 'iOSKit'

whiteBG = new BackgroundLayer backgroundColor: "white"
status = new ios.StatusBar carrier:"T-Mobile"

home = new ios.Tab label:"Home"
discovery = new ios.Tab label:"Do thing"

nav = new ios.NavBar right:"-b Create", left:"< Settings", title:home
nav2 = new ios.NavBar title:discovery, right:"Search"

h1 = new ios.Text constraints:{top:[nav, 40], width:200, leading:30}, fontSize:50, fontWeight:"black", superLayer:home.view

h2 = new ios.Text constraints:{top:[h1, 20], leadingEdges:h1}, superLayer:home.view

button = new ios.Button constraints:{top:[h2, 20], leadingEdges:h1}

bar = new ios.TabBar tabs:[home, discovery]

nav.right.on Events.Click, ->
	menu = new ios.Menu animated:true, actions:["Share", "Edit", "-r Delete"]
	
field = new ios.Field constraints:{top:[button, 20], leadingEdges:h1}