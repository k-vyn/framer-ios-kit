## Import Module
ios = require 'iOSKit'

whiteBG = new BackgroundLayer backgroundColor: "white"


nav = new ios.NavBar right:"Share", left:"Delete", title:"Note"

nav.right.on Events.TouchEnd, ->
	menu = new ios.Menu actions:["Facebook", "Twitter", "Pinterest"], animated:true

nav.left.on Events.TouchEnd, ->
	alert = new ios.Alert title:"Delete note?", message:"Are you sure you wish to delete the note?", actions:["Cancel", "-r Delete note"]

status = new ios.StatusBar carrier:"T-Mobile"

keyboard = new ios.Field constraints:{align:"center"}, placeholderText:"Say something"

Utils.delay 7, ->
	banner = new ios.Banner title:"Twitter", message:"You have a new follower", animated:true