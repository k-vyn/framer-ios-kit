## Import Module
ios = require 'iOSKit'

whiteBG = new BackgroundLayer

box1 = new Layer name:box1
box2 = new Layer name:box2


box1.constraints = (leading:50, top:200)
box2.constraints = (trailing:box1, bottom:box1)

ios.layout()