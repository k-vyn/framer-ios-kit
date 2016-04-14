## Import Module
ios = require 'iOSKit'

whiteBG = new BackgroundLayer backgroundColor: "white"

status = new ios.StatusBar 
	carrier:"Verizon"
	network:"LTE"
	signal:2
	battery:50

nav = new ios.NavBar 
	title:"Post Editor"
	right:"-b Share"
	left:"< Back"

##Field Component
field = new ios.Field 
	constraints:{leading:10, top:[nav, 20]}
	placeholderText:"Write something..."

nav.right.on Events.TouchEnd, ->
	sheet = new ios.Sheet 
		animated:true
		actions:["Facebook", "Twitter", "Pinterest"]
	
	sheet.actions.Facebook.on Events.TouchEnd, ->
		alert = new ios.Alert 
			title:"Successfully shared!"
			message:"Your post has been successfully shared to Facebook"
			actions:["View post", "OK"]
		alert.actions.OK.on Events.TouchEnd, ->
			alert.destroy()

nav.left.on Events.TouchEnd, ->
	alert = new ios.Alert 
		title:"I'm afraid I can't do that"
		message:""
		actions:["OK"]
	alert.actions.OK.on Events.TouchEnd, ->
		alert.destroy()