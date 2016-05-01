ios = require 'ios-kit'
# Dynamic Layout Demo

bg = new BackgroundLayer

banner = new ios.Text constraints:{"align":"center", width:200}, lineHeight:40, text:"This is how you write good sentences"
