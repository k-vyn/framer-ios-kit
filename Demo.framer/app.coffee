## Import Module
ios = require 'iOSKit'

whiteBG = new BackgroundLayer backgroundColor: "#999"
statusBar = new ios.StatusBar carrier:"T-MOBILE", battery:20

keyboard = new ios.Keyboard