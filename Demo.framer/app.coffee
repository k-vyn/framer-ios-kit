## Import Module
ios = require 'iOSKit'

whiteBG = new BackgroundLayer


style = [
	{"font-family" : "Open Sans"}
	{"font-size" : "15px"}
]

box = new Layer 
box.html = "Cats"

ios.addStyle 
	"Cats": 
		width:100
		height:100
		fontFamily: '-apple-system, Helvetica, Arial, sans-serif'
		fontSize: 17
		color: "black"
		textAlign: "right"
		
ios.addStyle
	"Dogs":
		width:20
		height:20
		superLayer:box
		backgroundColor:"blue"
		
ios.apply(box, ios.styles.Cats)

box2 = new ios.Custom ios.styles.Dogs
