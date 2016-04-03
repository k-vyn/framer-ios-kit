## Import Module
ios = require 'iOSKit'

whiteBG = new BackgroundLayer backgroundColor: "white"
status = new ios.StatusBar carrier:"T-Mobile"


banner = new ios.Banner animated:true, title:"Do it now", message:"PLEAAAAASE", duration:false