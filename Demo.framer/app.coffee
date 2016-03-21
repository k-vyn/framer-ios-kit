## Import Module
ios = require 'iOSKit'

whiteBG = new BackgroundLayer backgroundColor: "white"
statusBar = new ios.StatusBar carrier:"T-MOBILE", battery:100


text = new ios.Text style:"h1", fontSize:40, fontWeight:100, text:"hello " + ios.device

text.constraints = 
	align:"center"
	

button = new ios.Button constraints:{align:"horizontal", top:[text, 10]}, text:"Yoooo"


key = new ios.Field

ios.layout()