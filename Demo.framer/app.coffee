## Import Module
ios = require 'iOSKit'

whiteBG = new BackgroundLayer


alert = new ios.Alert action:"OK", secondaryAction:"Cancel", message:"How are you doing today? Should we reschedule?"
	