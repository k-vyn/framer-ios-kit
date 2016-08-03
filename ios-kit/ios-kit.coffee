#iOSKit Module
#By Kevyn Arnott

# Import framework
exports.layout = layout = require 'ios-kit-layout'
exports.lib = library = require 'ios-kit-library'
exports.utils = utils = require 'ios-kit-utils'
exports.converter = conv = require 'ios-kit-converter'

# Setup resources
exports.device = utils.getDevice()
exports.assets = library.assets
exports.isPad = -> if exports.device.name.indexOf('ipad') != -1 then return true else return false
exports.isPhone = -> if exports.device.name.indexOf('iphone') != -1 then return true else return false

# Shortcuts
exports.convert = (sketchObj) ->
  conv.convert(sketchObj)

exports.color = (string) ->
  return utils.color(string)

exports.px = (num) ->
  return utils.px(num)

exports.pt = (num) ->
  return utils.pt(num)

#Import Components
exports.alert = require 'ios-kit-alert'
exports.banner = require 'ios-kit-banner'
exports.button = require 'ios-kit-button'
exports.field = require 'ios-kit-field'
exports.keyboard = require 'ios-kit-keyboard'
exports.nav = require 'ios-kit-nav-bar'
exports.sheet = require 'ios-kit-sheet'
exports.status = require 'ios-kit-status-bar'
exports.tab = require 'ios-kit-tab-bar'
exports.text = require 'ios-kit-text'
exports.view = require 'ios-kit-view'


##Setup Components
exports.Alert = exports.alert.create
exports.Banner = exports.banner.create
exports.Button = exports.button.create
exports.Field = exports.field.create
exports.Keyboard = exports.keyboard.create
exports.NavBar = exports.nav.create
exports.Sheet = exports.sheet.create
exports.StatusBar = exports.status.create
exports.Tab = exports.tab.tab
exports.TabBar = exports.tab.bar
exports.Text = exports.text.create
exports.View = exports.view.create


# Layers from converting
exports.l = {}
