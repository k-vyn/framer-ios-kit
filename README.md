# iOS Kit for FramerJS

iOS Kit was created to make prototyping iOS fast and easy without compromising the quality or customization options.

There are three core pieces that make up iOS Kit. There is the foundational elements that help iOS Kit mold to devices. There is the component library that’ll save you time by providing native iOS offerings, and then there’s the supporting functions that help power the foundation & components.

## Setup
To setup the kit, add the iOSKit.coffee file to your modules folder in your project. 

In Framer Studio, write – 
`ios = require 'iOSKit'`

You can write any variable name you'd like, but for the purposes of this guide. We'll be referencing ios. 

## Foundational Elements 

### Dynamic Layout

![](https://dl.dropboxusercontent.com/u/143270556/ioskit/dynamic.png)

The most fundamental piece of this module is Dynamic Layout. Dynamic Layout is a robust layout engine that’ll not only help make positioning layers easier and smarter. It'll make positioning layers across devices possible. 

#### The Point 
In Dynamic Layout like in iOS, everything is based around the point instead of the pixel. The exactly number of pixels will change from device to device, but the number of points will not. Theres's a simple equation for finding points. 

`1pt = 1px * scale`

Side note, you can also use the built-in functions. 
`ios.pt(6) #returns 3 points on iPhone 6 and 2 points on iPhone 6 plus` 
`ios.px(1) #returns 2 pixels on iPhone 6 and 3 pixels on iPhone 6 plus`

#### Positioning

![](https://dl.dropboxusercontent.com/u/143270556/ioskit/positioning.png)

As we get away from using pixel positioning, we won't be using x & y based positioning. Instead, we'll be setting things called constraints. When you set a constraint, it's like saying that a layer can't go beyond a certain position. There are four constraints for positioning: leading, trailing, top, and bottom. 

To set a leading & top constraint on a box, it's super easy.

<pre>
layer = new Layer
layer.constraints = 
    top:10
    leading:10
ios.layout()
</pre>

This will position the layer at x:20, y:20 on iPhone 6, and x:30, y:30 on iPhone 6 plus.

Side note, you can also do this on one line if you'd prefer using this syntax. Just replace the the layer.constraints line from above with this line. You'll still need to run the ios.layout function.

<pre>
layer.constraints = {top:10, leading:10}
</pre>

##### Setting Opposing Constraints
If you set a leading & trailing or a top & bottom, Dynamic Layout will do its best to honor the constraints, which will mean the height/width will be adjusted. For example, if you set your constraints to  leading:0 and trailing:0, you layer's width will be the device's width.

WARNING - If you set too many opposing constraints, I'm sure not what'll happen. Best of luck. `¯\_(ツ)_/¯` 

#### Relationships 
One of the most powerful things of Dynamic Layout is relationships. Relationships allows you to link a layer onto another layer in a variety of ways. 

#####Positioning Relationships

![](https://dl.dropboxusercontent.com/u/143270556/ioskit/relationship.png)

When you declare a constraint, you can set a constraint as a layer instead of a integer. For example, if you have two layers (boxA & boxB) you can set boxB's top as boxA. <br>

<pre>
boxB.constraints = 
	<b>top:boxA</b>
ios.layout()
</pre>

<p>This will stack the boxes, so that boxB's top edge is constrained to below boxA, but what if you want a little buffer? That's really easy. We'll use a little different syntax with wrapping the layer and buffer in brackets</p>

<pre>
boxB.constraints = 
	<b>top:[boxA, 10]</b>
ios.layout()
</pre>

This will set boxB's top edge to 10 points below boxA. 

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

This will set boxB 10 points below boxA, and it'll center it within boxA on the x-axis. The other centering constraint verticalCenter will work simliarly where it'll center the boxB within boxA on the y-axis. If you've set a top/bottom constraint, it'll ignore those constraints.

#####Align Relationships
![](https://dl.dropboxusercontent.com/u/143270556/ioskit/align.png)
The last type of relationships will allow you to align any edge of layer onto another layer. To do this, there are four constraints at your disposal: leadingEdges, trailingEdges, topEdges, and bottomEdges. These layers like centers will not accept anything other than another layer.

If you'd like to align boxB's trailing edge onto boxA's trailing edge, write this:
<pre>
boxB.constraints = 
	top:[boxA, 10]
	<b>trailingEdges:boxA</b>
ios.layout()
</pre>

####Size Constraints
You can also set height/width constraints just like above. This will insure that your layers will remain a particular size.  The big difference in setting a height/width constraint than a property height/width is that you'll need to set the height/width constraint in points. 

<pre>
boxB.constraints = 
	top:[boxA, 10]
	trailingEdges:boxA
	<b>height:100</b>
	<b>width:100</b>
ios.layout()
</pre>

####Understanding ios.layout()
This function only need to be called once for all constraints. It'll cycle through all the layers in order of creation, and it'll fulfill all constraints. 

#####When to call it
You'll need to call it before any x/y positions are referenced. If you have a function that's based off another layer. You'll need to call ios.layout before that positioning is stored otherwise it'll be wrong or 0. Once you call ios.layout(), it'll set the position to the accurate position. <br><br>

#####Mixing up the queue
ios.layout will accept layers in the parathesis. This will layout **only** that layer and ignore all other constraints. This is to be used if a layer created after others needs to be layed out before others.<br>

`ios.layout(boxB)`
This will only layout boxB and not boxA. 
<br>
You may also want to play with the creation order if you're having issues with relationships.  

### Real device override
This module is meant to make prototyping look real, and one of things that prevents this is when you open a prototype that was built on an iPhone 6 in an iPhone 6+. You’ll see a lot of white space. When this module is on, you’re frame will be overridden by the device in your hand, so the iPhone 6+ will no longer see the iPhone 6 frame. Using Dynamic Layout will insure that your prototype looks presentable at every size.

### Device details library
You’ll now be able to refer to a set of new variables that’ll allow you to get more details on the device

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



## System components
These are easy to implement & fully customizable native iOS components. The idea is that implementing native iOS components should be easy & quick, so that you can spend the time working on what makes your prototype unique. 

###   Components overview
Every component in this module was written to feel native to Framer, so the way you create components should feel as familar as creating a new layer. The difference is in addition to Framer properties there's added customization parameters that'll be accepted, and any component that can accept constraints from Dynamic Layout is able to. 

After creation, components will operate as native layers under the variable name you declared. The only difference is the sublayers of the component are accessible via dot notation, so it's easier for you to turn on event listeners etc. 

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

### Alerts
 
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
alert: {
	alert.modal 
		alert.title
		alert.message
		alert.actions: { OK, Cancel }
	alert.overlay
}
</pre>

#### Listening to Actions
To listen to different actions, you can use dot notation if it's a single word or brackets for any case

- Dot notation <br> `alert.actions.OK.on Events...`
- Square bracket notation <br> `alert.actions["OK"].on Events...`

### Banner 

![](https://dl.dropboxusercontent.com/u/143270556/ioskit/banner.png)

The banner is a non-blocking notification. Typically, the banner will send you to a specific screen in an app.

####Properties
- **title** *String* <br> Embolded top text
-  **message** *String* <br> Body text
- **time** *String* <br> time string that appears next to title. 
- **icon** *Layer* <br> This will put the layer inside the banner and size it accordingly. By default, it's a green box. 
- **duration** *Integer* <br> This will override the time before the banner animates-out. By default, this is set to 7. 
- **animated** *Boolean* <br> When set to `true` menu will animate-in.

**NOTE - ** The banner will be by default draggable. If you drag down, it'll reset, and if you drag up, it'll dismiss & destroy the banner. 

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

### Menu 

![](https://dl.dropboxusercontent.com/u/143270556/ioskit/menu.png)

The menu is quick action list. The menu component is super simple to create.

####Properties
- **actions** *Array of strings* <br> Series of actions that can be taken on the menu.
- **animated** *Boolean* <br> When set to `true` menu will animate-in.
- **description** *String* <br> When declared, a small grey text will appear at the top of the menu. By default, this will not appear. 
- **cancel** *String* <br> This will override the label on the dismiss button. 

**NOTE - ** The cancel button will always animate-out. You don't have to add any additional code to handle/animate that. 

#### Example
<pre>
menu = new ios.Menu 
	actions:[“-r Delete, Edit, Share”]
	animated:true
	description:"Do something"
</pre>

####Schema
<pre>
menu : {
	menu.cancel 
	menu.overlay
	menu.description
	menu.actions :{"-r Delete", Edit, Share}
}
</pre>
#### Listening to actions
To listen to different actions, you can use dot notation if it's a single word or brackets for any case

- Dot notation <br> `menu.actions.Share.on Events...`
- Square bracket notation <br> `menu.actions["-r Delete"].on Events...`

### Cookie 

![](https://dl.dropboxusercontent.com/u/143270556/ioskit/menu.png)

The menu is quick action list. The menu component is super simple to create.

####Properties
- **actions** *Array of strings* <br> Series of actions that can be taken on the menu.
- **animated** *Boolean* <br> When set to `true` menu will animate-in.
- **description** *String* <br> When declared, a small grey text will appear at the top of the menu. By default, this will not appear. 
- **cancel** *String* <br> This will override the label on the dismiss button. 



#### Example
<pre>
</pre>

####Schema
<pre>
: {
}
</pre>
#### Listening to actions
To listen to different actions, you can use dot notation if it's a single word or brackets for any case

- Dot notation <br> ``
- Square bracket notation <br> ``