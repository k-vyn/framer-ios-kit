#iOSKit Module
#By Kevyn Arnott

# Import framework
exports.layout = layout = require 'ios-kit-layout'
exports.lib = library = require 'ios-kit-library'
exports.utils = utils = require 'ios-kit-utils'

# Setup resources
exports.device = utils.getDevice()
exports.assets = library.assets

#Import Components
alert = require 'ios-kit-alert'
banner = require 'ios-kit-banner'
button = require 'ios-kit-button'
field = require 'ios-kit-field'
keyboard = require 'ios-kit-keyboard'
nav = require 'ios-kit-nav-bar'
sheet = require 'ios-kit-sheet'
status = require 'ios-kit-status-bar'
tab = require 'ios-kit-tab-bar'
text = require 'ios-kit-text'

##Setup Components
exports.Alert = alert.create
exports.Banner = banner.create
exports.Button = button.create
exports.Field = field.create
exports.Keyboard = keyboard.create
exports.NavBar = nav.create
exports.Sheet = sheet.create
exports.StatusBar = status.create
exports.Tab = tab.tab
exports.TabBar = tab.bar
exports.Text = text.create
