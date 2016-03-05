# Framer iOS Kit

## Setup
To setup the kit, add the iOSKit.coffee file to your modules folder in your project. 

In Framer Studio, write – 
```ios = require 'iOSKit' ```

You can write any variable name you'd like, but for the purposes of this guide. We'll be referencing ios. 

## System Components

### .Alert 
![Alert Default](https://dl.dropboxusercontent.com/u/143270556/Screenshot%202016-03-04%2014.26.26.png)

**Example**
```alert = new ios.Alert title:”Warning”, message:”Don’t do it”, action:”OK”, secondaryAction:”Cancel”```

#### Properties
**Title** *String* –
Text that appears at the top.

**Message** *String* –
Text that appears below Title.

**Action** *String* –
This is the primary action button. It’ll be centered in the alert if no secondary action is declared

**Secondary Action** *String* –
If declared, this will formatted on the left. 
 
### .Banner

### .Label

### .Keyboard

## Autolayout 
Autolayout is the backbone of iOS. It enables layouts to mold to devices. To allow this functionality, it replaces the pixel level syntax that the web is built on. Autolayout for FramerJS takes a shift in how we layout screens. We define constraints and setup relationships in points instead of relying on dependent positioning like x and y.

### Positioning

For Autolayout in Framer, we set constraints, and then we call a build. By building, we allow the logic to set the x and y, and when we set opposing constraints, we enable the logic to set widths and heights.

Simple constraints would look like this: 

```layer.constraints =
top: 10
leading:10

ios.build()
```

On an iPhone 6s, this will put the x cord at 20 and y at 20, and on iPhone 6s Plus, it'll be 30 and 30 because it's 3x. 

### Alignment
The next progression in AutoLayout be a breeze. In constraints, you can set the align property to familiar things like horizontal, vertical, and center.

### Relationships
To establish a relationship, set a constraint to a layer. 
* Note that *align* property does not accept any layers

```
childLayer.constraints = 
	top:parentLayer
	
ios.build()	
```

This will set the top of the *childLayer*’s top to the bottom of the *parentLayer*.

To make this more useful, you can add additional space between the layers.

```
childLayer.constraints = 
	top:[parentLayer, 10]
	
ios.build()	

```

This will add 10pts of space between the bottom of the *parentLayer* and the top of the *childLayer*.

You can also use alignment properties

``` 
childLayer.constraints = 
	horizontalCenter:parentLayer

ios.build()
```

This will align the horizontal of the childLayer to the center of the parentLayer. 

Align edges
There will be times you’d prefer not to align 
```
