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

##### The Point 
In Dynamic Layout like in iOS, everything is based around the point instead of the pixel. The exactly number of pixels will change from device to device, but the number of points will not. Theres's a simple equation for finding points. 

`1pt = 1px * scale`

Side note, you can also use the built-in functions. 
`ios.pt(6) #returns 3 points on iPhone 6 and 2 points on iPhone 6 plus` 
`ios.px(1) #returns 2 pixels on iPhone 6 and 3 pixels on iPhone 6 plus`

#### Positioning
![](https://dl.dropboxusercontent.com/u/143270556/ioskit/positioning.png)
As we get away from using pixel positioning, we won't be using x & y based positioning. Instead, we'll be setting things called constraints. When you set a constraint, it's like saying that a layer can't go beyond a certain position. There are four constraints: leading, trailing, top, and bottom. 

To set a leading & top constraint on a box, it's super easy.

`layer = new Layer
layer.constraint = 
	top:10
	leading:10
ios.layout()`

This will position the layer at x:20, y:20 on iPhone 6, and x:30, y:30 on iPhone 6 plus.

### Real device override
This module is meant to make prototyping look real, and one of things that prevents this is when you open a prototype that was built on an iPhone 6 in an iPhone 6+. You’ll see a lot of white space. When this module is on, you’re frame will be overridden by the device in your hand, so the iPhone 6+ will no longer see the iPhone 6 frame. Using Dynamic Layout will insure that your prototype looks presentable at every size.

### Device details library
You’ll now be able to refer to a set of new variables that’ll allow you to get more details on the device

 **ios.scale**  – returns 1, 2, or 3
 
 **ios.height**  – returns the height of the device in pixels
 
**ios.width** – returns the width of the device in pixels

**ios.device** – returns one of the device names below: 

- ```ipad``` for any iPad other than the pro
- ```ipad-pro```  for the iPad Pro
- ```iphone-5``` for iPhone 5, iPhone 5s, iPhone 5c, and iPhone SE
- ```iphone-6s``` for iPhone 6 & 6s
- ```iphone-6s-plus``` for iPhone 6 plus & 6s plus

## System Components
 
![](https://dl.dropboxusercontent.com/u/143270556/ioskit/alert.png)

Alerts are blocking notifications that make users address the notification and provide a few necessary actions.

****



**Example**
`alert = new ios.Alert title:”Warning”, message:”Don’t do it”, action:”OK”, secondaryAction:”Cancel”`

#### Properties
 
(img)

(img)

(img)



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