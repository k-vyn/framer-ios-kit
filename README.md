# iOS Kit for FramerJS

iOS Kit was created to make prototyping for iOS fast and easy without compromising the quality or customization.

There are three core pieces that make up iOS Kit. There is the foundational elements that help iOS Kit mold to devices. There is the component library that’ll save you time by providing native iOS offerings, and then there’s the supporting functions that help power the foundation & components.

# Table of Contents
- [Setup](#setup)<br>
<u><b>[Foundational Elements](#foundational)</b></u>
-  [Dynamic Layout](#dynamic)
	-	[The Point](#point)
	-	[Positioning](#positioning)
		- [Setting opposite constraints](#opposite)
	-	[Relationships](#relationships)
		- [Position](#pos-rel)
		- [Center](#center-rel)
		- [Align](#align-rel)
	- [Animating Constraints](#animating)
	- [Size Constraints](#size-constraints)
	- [Understanding ios.layout()](#layout)
- [Real device override](#real)
- [Device details library](#details)<br>
<u><b>[System Components](#system)</b></u>
- [Action String Shortcuts](#shortcuts)
- [Alert](#alert)
- [Banner](#banner)
- [Button](#button)
- [Field](#field)
- [Keyboard](#keyboard)
- [Navigation Bar](#nav)
- [Sheet](#sheet)
- [Status Bar](#status)
- [Tab](#tab)
- [Tab Bar](#tabbar)
- [Text](#text)<br>
<u><b>[Supporting Functions](#supporting)</b></u>


<div id='setup' />
## Setup
To setup the kit, add the iOSKit.coffee file to your modules folder in your project. 

In Framer Studio, write – 
`ios = require 'iOSKit'`

You can write any variable name you'd like, but for the purposes of this guide we'll be using `ios`.

<div id='foundational' />
## Foundational Elements
<div id='dynamic' />
### Dynamic Layout

![](https://dl.dropboxusercontent.com/u/143270556/ioskit/dynamic.png)

The most fundamental piece of this module is Dynamic Layout. Dynamic Layout is a robust layout engine that’ll not only help make positioning layers easier and smarter, it'll will make positioning layers across devices possible. 

<div id='point' />
#### The Point 
In Dynamic Layout, like in iOS, everything is based around the point instead of the pixel. The exact number of pixels will change from device to device, but the number of points will not. There's a simple equation for finding points. 

`1pt = 1px * scale`

Side note: you can also use the built-in functions. 
`ios.pt(6) #returns 3 points on iPhone 6 and 2 points on iPhone 6 plus` 
`ios.px(1) #returns 2 pixels on iPhone 6 and 3 pixels on iPhone 6 plus`

#### Positioning

![](https://dl.dropboxusercontent.com/u/143270556/ioskit/positioning.png)

As we get away from using pixel positioning, we won't be using x & y based positioning. Instead, we'll be setting things called constraints. When you set a constraint, it's like saying that a layer can't go beyond a certain position. There are four constraints for positioning: leading, trailing, top, and bottom. 

To set a leading & top constraint on a box, write this –

<pre>
layer = new Layer
layer.constraints = 
    top:10
    leading:10
ios.layout()
</pre>

This will position the layer at x:20, y:20 on iPhone 6, and x:30, y:30 on iPhone 6 plus.

Side note: you can also do this on one line if you'd prefer using this syntax. Just replace the layer.constraints line from above with this line. You'll still need to run the ios.layout function.

<pre>
layer.constraints = {top:10, leading:10}
</pre>
<div id='opposite' />

##### Setting Opposing Constraints
If you set a leading & trailing or a top & bottom, Dynamic Layout will do its best to honor the constraints, which will mean the height/width will need to be adjusted. For example, if you set the constraints of a layer to  `leading: 0` and `trailing:0`, the layer's width will be adjusted to the device's width.

WARNING - If you set too many opposing constraints, I'm not sure what'll happen. Best of luck. `¯\_(ツ)_/¯` Try to just set no more than one of each constraint. 

#### Relationships 
One of the most powerful things of Dynamic Layout is relationships. Relationships allows you to link a layer onto another layer in a variety of ways. 

<div id='pos-rel' />
#####Positioning Relationships

![](https://dl.dropboxusercontent.com/u/143270556/ioskit/relationship.png)

When you declare a constraint, you can set a constraint as a layer instead of an integer. For example, if you have two layers (boxA & boxB) you can set boxB's top as boxA. <br>

<pre>
boxB.constraints = 
	<b>top:boxA</b>
ios.layout()
</pre>

<p>This will stack the boxes so that boxB's top edge is constrained to below boxA, but what if you want a little buffer? That's really easy. We'll use a little different syntax with wrapping the layer and buffer in brackets.</p>

<pre>
boxB.constraints = 
	<b>top:[boxA, 10]</b>
ios.layout()
</pre>

This will set boxB's top edge to 10 points below boxA. 
<div id='center-rel' />
#####Center Relationships

![](https://dl.dropboxusercontent.com/u/143270556/ioskit/centering.png)

There are a couple other types of constraints that'll help make positioning layers even easier.  There are two centering constraints: verticalCenter, horizontalCenter. These constraints will only accept just a layer as a constraint. 

For example, if you'd like boxB to be horizontally centered on boxA, write this: 
<pre>
boxB.constraints = 
	top:[boxA, 10]
	<b>horizontalCenter:boxA</b>
ios.layout()
</pre>

This will set boxB 10 points below boxA, and it'll center it within boxA on the x-axis. The other centering constraint verticalCenter will work simliarly center boxB within boxA on the y-axis. If you've set a top/bottom constraint, it'll ignore those constraints.

<div id='align-rel' />
#####Align Relationships
![](https://dl.dropboxusercontent.com/u/143270556/ioskit/align.png)
The last type of relationships will allow you to align any edge of layer onto another layer's edge. To do this, there are four constraints at your disposal: leadingEdges, trailingEdges, topEdges, and bottomEdges. These layers, like centers, will not accept anything other than another layer.

If you'd like to align boxB's trailing edge onto boxA's trailing edge, write this:
<pre>
boxB.constraints = 
	top:[boxA, 10]
	<b>trailingEdges:boxA</b>
ios.layout()
</pre>

<div id='animating' />
#### Animating Constraints
You can animate between constraints by running ` ios.animateLayout()`. 

##### Properties
- **target (optional)** *Layer or Array of layers* <br> When set, this will only animate the target layers with updated constraints. When this is not set, it'll animate all layers with their updated constraints.
- **curve, curveOptions, delay, repeat, colorModel** *String* <br>  Each of these properties will work the same as native animations
- **time** *Num* <br> This will be the time of each layer's animation, not the entire animation of all the layers. 
- **stagger** *Num* <br> This will put an incremental delay across all layers being animated.
- **fadeOut** *Boolean or Layer* <br> When set to true, this will animate all layers' opacity to 0. When set to a layer, that layer's opacity will be set to 0.
- **fadeIn** *Boolean or Layer* <br> When set to true, this will animate all layers' opacity to 1. When set to a layer, that layer's opacity will be set to 1.

#### Example
If we have a bunch of layers in a column and we want them to all move up, we can set the `topLayer`'s constraint to 50, and all the layers with a relationship with topLayer will also move up. 

<pre>
topLayer.constraints.top = 50 ##Set a new constraint

ios.animateLayout
	stagger:.05
	curve:"spring"

</pre>


Note: When updating a constraint on a layer, please be careful on your syntax. Writing `layer.constraints =` will wipe out your previous object. 

This will wipe out your top constraint.
<pre>
topLayer.constraints = 
	top:50
	leading:10
	
topLayer.constraints = 
	leading:20
</pre>

Where as, this will keep your top constraint.
<pre>
topLayer.constraints = 
	top:50
	leading:10
	
topLayer.constraints.leading = 20
</pre>



<div id='size-constraints' />
####Size Constraints
You can also set height/width constraints just like above. This will ensure that your layers will remain a particular size.  One big difference in setting a height/width constraint over a property height/width is that you'll need to set the height/width constraint in points. 

<pre>
boxB.constraints = 
	top:[boxA, 10]
	trailingEdges:boxA
	<b>height:100</b>
	<b>width:100</b>
ios.layout()
</pre>

<div id='layout' />
####Understanding ios.layout()
This function only need to be called once for all constraints. It'll cycle through all the layers in order of creation, and it'll fulfill all constraints. 

#####When to call it
You'll need to call it before any x/y positions are referenced. If you have a function that's based off another layer, you'll need to call ios.layout before that positioning is stored otherwise it'll be wrong or 0. Once you call ios.layout(), it'll set the position to the accurate position. <br><br>

#####Mixing up the queue
ios.layout will accept layers in the parathesis. This will layout **only** that layer and ignore all other constraints. This is to be used if a layer created after others needs to be laid out before others.<br>

`ios.layout(boxB)`
This will only layout boxB and not boxA. 
<br>
You may also want to play with the creation order if you're having issues with relationships.  
<div id='real' />
### Real device override
This module is meant to make prototyping look real, and one of things that prevents this is when you open a prototype that was built for an iPhone 6 on an iPhone 6+. If you do this, you’ll end up seeing a lot of white space. When this module is on, your frame will be overridden by the device in your hand, so the iPhone 6+ will no longer see the iPhone 6 frame. Using Dynamic Layout will ensure that your prototype looks presentable at every size.

For this to work properly, you'll need a full-screen browser. I use & recommend [Frameless](#https://itunes.apple.com/us/app/frameless-full-screen-web/id933580264?mt=8).

<div id='details' />
### Device details library
You’ll now be able to refer to a set of new variables that’ll allow you to get more details on the device.

<pre><b>ios.scale</b> # returns 1,2,3
<b>ios.height</b> # returns the height of the device in pixels
<b>ios.width</b> # returns the width of the device in pixels
<b>ios.device</b> # returns one of the device names below 
	<b>ipad</b> # for any iPad other than the pro
	<b>ipad-pro</b> # for the iPad Pro
	<b>iphone-5</b> # for iPhone 5, iPhone 5s, iPhone 5c, and iPhone SE
	<b>iphone-6s</b> # for iPhone 6 & 6s
	<b>iphone-6s-plus</b> # for iPhone 6 plus & 6s plus
</pre>


<div id='system' />
## System components
These are easy to implement & fully customizable native iOS components. The idea is that implementing native iOS components should be easy & quick, so that you can spend the time working on what makes your prototype unique. 

Every component in this module was written to feel native to Framer, so the way you create components should feel as familar as creating a new layer. The difference is that in addition to Framer properties there's added customization parameters, which will be accepted, and any component that can accept constraints from Dynamic Layout is able to. 

After creation, components will operate as native layers under the variable name you declared. The only difference is the sublayers of the component are accessible via dot notation, so it's easier for you to turn on event listeners etc. 
<div id='shortcuts' />
##### Action string shortcuts
To provide even more customization, any string in an action context can have these prepended shortcuts. 

`-b` - bold string<br>
`-g` - make string green<br>
`-r` - make string red<br>
`-rb` - make string blue <br>
`-lb` - make string light blue<br>
`-o` - make string orange<br>
`-p` - make string pink<br>
`-y` - make string yellow<br>
`-#000000` - change color to any 6 digit hex code. <br><br>

## Alert
 
![](https://dl.dropboxusercontent.com/u/143270556/ioskit/alert.png)

Alerts are blocking notifications that will force the users to address the alert before continuing. 

#### Properties
- **title** *String* <br> Embolded text at the top.
- **message** *String* <br>  Body text before actions.
- **actions** *Array of Strings* <br> Series of actions that can be taken on the alert.  

#### Example
<pre>
alert = new ios.Alert
	title:"Warning"
	message:"Don't do this"
	actions:["OK", "Cancel"]
</pre>

#### Schema
<pre>
alert : {
	alert.modal 
		alert.title
		alert.message
		alert.actions : { OK, Cancel }
	alert.overlay
}
</pre>

#### Listening to Actions
To listen to different actions, you can use dot notation if it's a single word or brackets for any case

- Dot notation <br> `alert.actions.OK.on Events...`
- Square bracket notation <br> `alert.actions["OK"].on Events...`

## Banner 

![](https://dl.dropboxusercontent.com/u/143270556/ioskit/banner.png)

The banner is a non-blocking notification. Typically, the banner will send you to a specific screen in an app.

####Properties
- **title** *String* <br> Embolded top text
-  **message** *String* <br> Body text
- **time** *String* <br> time string that appears next to title. 
- **icon** *Layer* <br> This will put the layer inside the banner and size it accordingly. By default, it's a green box. 
- **duration** *Integer* <br> This will override the time before the banner animates-out. By default, this is set to 7. 
- **animated** *Boolean* <br> When set to `true` sheet will animate-in.

**NOTE - ** The banner will be, by default, draggable. If you drag down, it'll reset, and if you drag up it'll dismiss & destroy the banner. 

#### Example
<pre>
banner = new ios.Banner 
	title:"Time to do something"
	message:"Don't miss out"
	icon:iconLayer
	animated:true
</pre>

#### Schema
<pre>
banner : {
	banner.icon
	banner.title
	banner.message
}
</pre>
#### Listening to actions
To make the banner clickable, you can write - 
<pre>
banner.on Events... 
</pre>

## Button 

![](https://dl.dropboxusercontent.com/u/143270556/ioskit/button.png)

Button is a small versatile component that handles press states automatically.

####Properties
- **text** *String* <br> Sets button text
- **buttonType** *String* <br> Can be `text`, `big`, `small`
- **style** *String* <br> Can be `light`, `dark`, or `custom`
- **backgroundColor** *Hex Color* <br> Will set the background on big buttons.
- **color** *Hex Color* <br> Sets `small` and `text` colors. 
- **fontSize** *Integer* <br> When custom, sets the fontSize style property.
- **fontWeight** *Integer* <br> When custom, sets the fontWeight style property.
- **blur** *Boolean* <br> On big buttons, this will turn it slightly opaque and add background blur. 
- **superLayer** *Layer* <br> set the passed layer as the super layer. 
- **constraints** *Constraints Object* <br> will set constraints using [Dynamic Layout](#dynamic). 

#### Example
<pre>
button = new ios.Button
	text:"Download"
	buttonType:"small"
	color:"red"
</pre>

####Schema
<pre>
button: {
	button.label 
}
</pre>
#### Listening to buttons
Listening to buttons is no different than normal framer.<br>
`button.on Events...`

## Field 

![](https://dl.dropboxusercontent.com/u/143270556/ioskit/field.png)

The field is a versatile input for the keyboard. Please note, this is not a HTML field.

####Properties
- **text** *String* <br> Adds text by default to the field.
- **placeholderText** *String* <br> Sets the placeholder text.
- **placeholderColor** *Color String* <br> Sets the placeholder text color.
- **borderRadius** *Integer* <br>Sets border radius of field.
- **borderWidth** *Integer* <br> Sets border width.
- **borderColor** *Color String* <br> Sets border color.
- **color** *Color String* <br> Sets text color.
- **backgroundColor** *Color String* <br> Sets field background color.
- **width** *Integer* <br> Sets width in points.
- **height** *Integer* <br> Sets height in points.
- **constraints** *Constraints Object* <br> Will set the field's constraints and run layout using [Dynamic Layout](#dynamic)
- **textConstraints** *Constraints Object* <br> Will set the text's constraints and run layout using [Dynamic Layout](#dynamic)

####Example
<pre>
	field = new ios.Field
		placeholderText:"Enter a name or email address"
		constraints:{align:"center"}
</pre>

####Schema
<pre>
field: {
	field.placeholder
	field.text
	# after touchEnd event
	field.keyboard { 
		... Keyboard Schema
	}
}
</pre>

####Listening to keys inside of a field
In order to listen for the return key or any other key, you'll need to wrap it up in a touch event since the keyboard only exists after the field is being touched. 

<pre>
field.on Events.TouchEnd, ->
	field.keyboard.keys.return.on Events...
</pre>

## Keyboard 

![](https://dl.dropboxusercontent.com/u/143270556/ioskit/keyboard.png)

The keyboard is a fully rendered component that mimics the native iOS keyboard. It'll adapt to all devices. (Not currently supported on iPad Pro)

####Properties
- **returnText** *String* <br> Overrides the text on the return button.
- **returnColor** *Hexcode String* <br> Will set the return button color
- **animated** *Boolean* <br> Will determine if the keyboard is animated in. By default, this is set to false. 



#### Example
<pre>
board = new ios.Keyboard
	returnText = "Done"
</pre>

<div id="keyboard-schema" />
####Schema
<pre>
board: {
	board.keysArray #contains all keys A-Z in array object
	board.keys {
		board.keys.a - board.keys.z
		board.keys.shift
		boards.keys.return
		boards.keys.num
		boards.keys.space
		boards.keys.emoji
		
		# if on iPad
		boards.keys.shift2
		boards.keys.num2
		boards.keys.dismiss
	} 
}
</pre>
#### Listening to Keys
You can listen to keys using dot notation or square bracket notation.

- Dot notation <br> `board.keys.return.on Events...`
- Square bracket notation <br> `board.keys["return"].on Events...`

##Sheet 

![](https://dl.dropboxusercontent.com/u/143270556/ioskit/menu.png)

The sheet is quick action list. The sheet component is super simple to create.

####Properties
- **actions** *Array of strings* <br> Series of actions that can be taken on the sheet.
- **animated** *Boolean* <br> When set to `true` sheet will animate-in.
- **description** *String* <br> When declared, a small grey text will appear at the top of the sheet. By default, this will not appear. 
- **cancel** *String* <br> This will override the label on the dismiss button. 

**NOTE - ** The cancel button will always animate-out. You don't have to add any additional code to handle/animate that. 

#### Example
<pre>
sheet = new ios.sheet 
	actions:[“-r Delete, Edit, Share”]
	animated:true
	description:"Do something"
</pre>

####Schema
<pre>
sheet : {
	sheet.cancel 
	sheet.overlay
	sheet.description
	sheet.actions : {"-r Delete", Edit, Share}
}
</pre>
#### Listening to actions
To listen to different actions, you can use dot notation if it's a single word or brackets for any case

- Dot notation <br> `sheet.actions.Share.on Events...`
- Square bracket notation <br> `sheet.actions["-r Delete"].on Events...`

<div id='status' />
## Status Bar 

![](https://dl.dropboxusercontent.com/u/143270556/ioskit/statusbar.png)

The status bar allows users to see the connection, current time, and battery. 

####Properties
- **carrier** *String* <br> Carrier name ex. Verizon/Orange/FramerJS
- **network** *String* <br> network strength ex. 3G/LTE. Only will be showed when a carrier is set. By default, this is set to the wifi icon. Upon setting carrier, this will be set to LTE. 
- **battery** *Integer* <br> Battery percentage - this will change the battery icon
- **signal** *Integer(0 - 5)* <br> Changes number of filled/unfilled dots. Zero will set the singal to "No Network"
- **style** *String* <br> Dark is black text. Light is white text.  
- **clock24** *Boolean* <br> By default, it's set to false, so it's a 12 hour clock with AM/PM. When set to true, the clock will cycle through 0-23 hours and removes AM/PM. 

#### Example
<pre>
statusBar = new ios.StatusBar
	carrier:"Verizon"
	network:"3G"
	battery:70
	style:"light"
</pre>

####Schema
<pre>
statusBar : {
    statusBar.battery.percent
    statusBar.battery.icon
    statusBar.bluetooth
    statusBar.time
    statusBar.network
    statusBar.carrier
    statusBar.signal
}
</pre>

<div id="nav" />
## Navigation Bar

![](https://dl.dropboxusercontent.com/u/143270556/ioskit/navbar.png)

The navigation bar is made up of 3 elements, two actions and a title. 

####Properties
- **right** *Layer or String or Bool* <br> A layer or string will appear on the right side of the navigation bar. If you do not want a right action, set this to `false`.
- **left** *Layer or String* <br> A layer or string will appear on the left side of the navigation bar. You can add a < to show a back arrow. 
- **title** *String or Tab* <br> You can either pass a string that'll appear as the title on the Nav. You can also pass a tab object. If you pass a tab, the navigation bar's title will be the label of the tab. 
- **blur** *Boolean* <br> If set to true, the bar will be slightly opaque and have a background blur applied. By default, this is set to true. If false, the bar will be solid white without a blur. 

#### Example
<pre>
nav = new ios.NavBar 
	right:"Share"
	left:"< Back"
	title:"Document"
	blur:false
</pre>

####Schema
<pre>
bar: {
	bar.right
	bar.left
	bar.title
}
</pre>
#### Listening to actions
To listen to different actions, you can use dot notation if it's a single word or brackets for any case

- Dot notation <br> `bar.right`
- Square bracket notation <br> `bar["right"]`

## Tab

![](https://dl.dropboxusercontent.com/u/143270556/ioskit/tabs.png)

Tabs are light-weight objects that fit into the tab bar component. 

####Properties
- **label** *String* <br> name of tab
- **icon** *SVG String* <br> only accepts an SVG string  

#### Example
<pre>
home = new ios.Tab
	label:"home"
	icon:"< svg>...< /svg>"
</pre>

####Schema
<pre>
home: {
	home.label
	home.icon
	home.view
}
</pre> 
####Adding contents to a tab
Creating a tab will give you access to **tab.view**. In this case, you'll have `home.view`. When the home tab is active only those layers inside of `home.view` will be shown. 

`discovery = new Layer superLayer:home.view` 

The discovery layer will only be shown when the home tab is active in the tab bar. 
<div id='tabbar' />
## Tab Bar

![](https://dl.dropboxusercontent.com/u/143270556/ioskit/tabs.png)

The tab bar is comprised of multiple tabs. It'll handle switching of tabs and views.

####Properties
- **tabs** *Array of tabs* <br> Add the tabs you made to this array
- **activeColor** *String* <br> This is the color that will be shown on the active tabs and label.
- **inactiveColor** *String* <br> the color that will be shown on inactive tabs and labels.


#### Example
<pre>
tabBar = ios.TabBar tabs:[home, discovery, profile], activeColor:"#blue", inactiveColor:"grey"
</pre>

#### Listening to Tabs
Tab switching is automatically given, so there shouldn't necessarily be anything you need to do. If you'd like to do something additional when a user clicks a tab, you can reference your tab object. 

## Text 

![](https://dl.dropboxusercontent.com/u/143270556/ioskit/text.png)

A dynamic text object that'll automatically size for you. 

####Properties
- **text** *String* <br> Adds text by default to the field.
- **fontSize** *Integer* <br>Sets font size in points.
- **fontWeight** *Integer* <br> Sets font weight.
- **fontFamily** *String* <br> Sets font family.
- **lineHeight** *Integer* <br> Sets line height in points. It's automatically done if left unset.
- **textTransform** *String* <br> Sets text-transform style property.
- **opacity** *Integer* <br> Sets opacity.
- **width** *Integer* <br> Sets width in points. 
- **height** *Integer* <br> Sets height in points.
- **constraints** *Constraints Object* <br> Will set the text's constraints and run layout using [Dynamic Layout](#dynamic)

####Example
<pre>
	text = new ios.Text
		text:"Try iOS Kit for Framer JS"
		fontSize:21
		fontWeight:100
		width:320
		constraints:{align:"center"}
</pre>

<div id="supporting" />
## Supporting Functions
These are a set of functions that were created to help provide functionality to various elements of this module. I opened them up, so if you by chance need any of these functions you can use them. 

#### ios.update(layer, styleArray)
This was specifically intended for text objects. If the html or style of a text object is altered, the width/height of the object would be incorrect. With ios.update, you'll be able to pass your changes in while also resizing the text layer.

<pre>
ios.update(headerOne, [text:"Done!"]
</pre>

#### ios.pt(int) & ios.px(int)
These functions will automatically convert pixels -> points and points -> pixels.
<pre>
ios.pt(6) # will return 3 points on an iPhone 6
ios.px(6) # will return 12 pixels on an iPhone 6
</pre>

####ios.clean(string)
This will remove any space or bracket HTML syntax from a string.
ios.clean("`Hi,&nbsp;how&nbsp;are&nbsp;you?<br>`") returns "Hi, how are you?"

####ios.svg(svg path)
This does a series of things: it'll rewrite the SVG path into points, and it'll provide variables to set the layer's height and width.
<pre>
svgObj = ios.svg(svgPath)
svgObj.svg = # is the new SVG path in points
svgObj.height = # is the value for the height of the layer
svgObj.width = # is the value for the width of the layer 
</pre>

####ios.changeFill(layer, color)
This only works with layers with a SVG path. This will change the SVG fill to whatever color is passed.

####ios.capitalize(string)
This will capitalize only the first letter of the entire string.
<pre>
print ios.capitalize("welcome to the party") #returns "Welcome to the party"
</pre>

####ios.getTime()
Fetches the current time and returns a neatly organized time object with some humanization.

<pre>
time = ios.getTime()

print time.month # prints "April"
print time.date # prints "12"
print time.day # prints "Tuesday"
print time.hours # prints "10"
print time.mins # prints "33"
print time.secs # prints "1"
</pre>

####ios.timeDelegate(layer, clock24)
This sets up a reoccuring task at the top of every minute to update whatever layer passed to the current time. If clock24 is set to true, it'll return 24-hour clock values. If set to false or omitted, it'll return 12-hour clock values. 

####ios.timeFormatter(timeObj, clock24)
This will create a time string for screen display. It'll return a hours-minutes string based on the clock24 object. 

#### ios.color(colorString)
This changes the color words to be set to iOS default colors in place of web color defaults. If it's a hexcode, it'll set the hexcode. If invalid, it'll return a grey hexcode.

Supports - `red, blue, pink, grey/gray, black, white, orange, green, light blue/light-blue, yellow`

<pre>
ios.color("light-blue) # returns "#54C7FC"
</pre>


#### ios.bgBlur(layer)
Add background blur to any layer using -webkit-backdrop-filter. Make sure that whatever layer you use is using rgba with an alpha set below 1.

