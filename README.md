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

**Example**
<pre>
alert = new ios.Alert
	title:"Warning"
	message:"Don't do this"
	actions:["OK", "Cancel"]
</pre>

#### Schema
After declaration, you'd have something that looked like this – 
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

- **Dot notation** – `alert.actions.OK.on Events...`
- **Bracket notation** – `alert.actions["OK"].on Events...`

### Menu 

![](https://dl.dropboxusercontent.com/u/143270556/ioskit/menu.png)

(img)
The menu is quick action list. The menu component is super simple to create.

`menu = new ios.Menu actions:[“-r Delete, Edit, Share”], animated:true`

### Properties
**actions** *Array of strings* - Each string will appear as an action entry. In the string, you can pass special parameters to modify the display of the actions. If you pass a -r in the beginning, it'll make the action appear red. If you pass a -b, it'll make the action bolded. 

**animated** *Boolean* - Animated will handle whether the menu animates in. If set to false or ommited the menu will not animate in. The menu on click or cancel will automatically animate out.

**description** *String* - The string if declared will appear above all actions.

**cancel** *String* - This is the string for the dismiss button on the bottom of the menu. 

#### Listening to actions
To listen to an action, it's super easy. Just listen to the .actions object and put the action verbatim in brackets.

For example, to listen to the delete action from the example above, you’d write this: 
`menu.actions[“-r Delete"].on`

If there are no spaces in the action, you could, in addition to brackets, use dot syntax like:

`menu.actions.Edit.on`


(img)
#### Properties

**title** *String* 

**leftAction** *String* or *Object* - This will set the action to the left. It can either be an image, layer, or string. 

**rightAction** *String* or *Object* - This will set the action the right. It can either be an image, layer, or string. You can also use -b at the beginning of your string to make the text semibold. 

**blur** *Bool* - By default or when set to true, the background will have a iOS background blur effect turned on. If you’d like to disable this, set blur to false.

**superLayer** *Layer* – When needed the navbar can be a part of a view. If you’re using tabs, you can set this to be inside of a view by settings this to tabLayer.*view*.

(img)
Status Bar will add a touch of realism to your prototype. It has  many customizable properties that’ll make it suit any situation. It also has a clock that shows the real time. 

#### Example
`status = new ios.StatusBar carrier:”Verizon”, network:”3g”, signal:3, battery:70`

#### Properties
**clock24** *Bool* - If set to true, this will modify the system clock to a 24–hour clock. 

**carrier** *String* - If set, this will remove wifi and show network. 

**network** *String* - Sets the network when carrier is modified. 

**battery** *Int* - Changes the remaining battery percentage

**signal**  *Int (0-5)* - This will change the number of bars shown  the signal. 0 being no network, and 5 being full reception.   
(img)

(img)
Dynamic layout was built to bring in the logic of Auto layout into Framer. Auto layout is the backbone of iOS. It enables layouts to be constants and molded to each device. To allow this functionality, it replaces the pixel level syntax/handlers like x & y and leverages margins & centers. Autolayout for FramerJS takes a philosophical shift in how we layout screens. 

If you’re new to Auto Layout, any documentation that exists on the web should help you use this feature, and hopefully by using  Dynamic layout, you’ll also learn Auto Layout. 

### Dynamic layout vs. Auto layout
There are a few major differences between layout engines. The biggest being that Auto layout, while able to be written in code, is primarily a GUI in Xcode. Dynamic layout had to be completely code, so I took some liberties in how we define 
(img)

For Autolayout in Framer, we set constraints, and then we call a build. By building, we allow the logic to set the x and y, and when we set opposing constraints, we enable the logic to set widths and heights.

Simple constraints would look like this: 

\`\`\`layer.constraints =
top: 10
leading:10

ios.build()\`\`\`

On an iPhone 6s, this will put the x cord at 20 and y at 20, and on iPhone 6s Plus, it'll be 30 and 30 because it's 3x. 

(img)
The next progression in AutoLayout be a breeze. In constraints, you can set the align property to familiar things like horizontal, vertical, and center.

(img)
To establish a relationship, set a constraint to a layer. 
* Note that *align* property does not accept any layers

\`\`\`childLayer.constraints = 
'' top:parentLayer
 
ios.build()\`\`\`

This will set the top of the *childLayer*’s top to the bottom of the *parentLayer*.

To make this more useful, you can add additional space between the layers.

\`\`\`childLayer.constraints = 
'' top:[parentLayer, 10]
 
ios.build()\`\`\`

This will add 10pts of space between the bottom of the *parentLayer* and the top of the *childLayer*.

You can also use alignment properties

\`\`\` childLayer.constraints = 
'' horizontalCenter:parentLayer

ios.build()\`\`\`

This will align the horizontal of the childLayer to the center of the parentLayer. 

Align edges
There will be times you’d prefer not to align

## Supporting Functions
### getTime
### timeDelegate
### sameParent
### addStyle
### apply
