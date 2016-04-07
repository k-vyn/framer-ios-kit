# Framer iOS Kit

## Setup
To setup the kit, add the iOSKit.coffee file to your modules folder in your project. 

In Framer Studio, write – 
```ios = require 'iOSKit' ```

You can write any variable name you'd like, but for the purposes of this guide. We'll be referencing ios. 

## System Components

### .Alert 
![](https://dl.dropboxusercontent.com/u/143270556/alerts.png)

**Example**
```alert = new ios.Alert title:”Warning”, message:”Don’t do it”, action:”OK”, secondaryAction:”Cancel”```

#### Properties
 
### .Banner
![](https://dl.dropboxusercontent.com/u/143270556/banners.png)

### .Button

### .Keyboard



![](https://dl.dropboxusercontent.com/u/143270556/menus.png)
The menu is quick action list. The menu component is super simple to create.

```menu = new ios.Menu actions:[“-r Delete, Edit, Share”], animated:true```

### Properties
**actions** *Array of strings* - Each string will appear as an action entry. In the string, you can pass special parameters to modify the display of the actions. If you pass a -r in the beginning, it'll make the action appear red. If you pass a -b, it'll make the action bolded. 

**animated** *Boolean* - Animated will handle whether the menu animates in. If set to false or ommited the menu will not animate in. The menu on click or cancel will automatically animate out.

**description** *String* - The string if declared will appear above all actions.

**cancel** *String* - This is the string for the dismiss button on the bottom of the menu. 

#### Listening to actions
To listen to an action, it's super easy. Just listen to the .actions object and put the action verbatim in brackets.

For example, to listen to the delete action from the example above, you’d write this: 
```menu.actions[“-r Delete].on”```

If there are no spaces in the action, you could, in addition to brackets, use dot syntax like:
```menu.actions.Edit.on```  

## .NavBar
![](https://dl.dropboxusercontent.com/u/143270556/Screenshot%202016-03-09%2015.39.48.png)

## StatusBar
![](https://dl.dropboxusercontent.com/u/143270556/Screenshot%202016-03-12%2022.44.36.png)
The status bar component is a dynamic component that’s fully customizable. It has a fully functioning clock that’ll update in real time! You can easily modify each part of the status bar to suit your needs. 

#### Example
``status = new ios.StatusBar carrier:"Verizon", signal:4, battery:70``

#### Properties 
**carrier** *String* - By default, the carrier is set to empty, and the network is wifi, but as soon as you set a carrier, the network will no longer be set to wifi.

**network** *String* - By default, the carrier will be set to LTE, but you can replace it with other speeds like 3G.

**signal** *Int (0-5)* - Signal is the strength of the network. By default, it’ll be set to 5 bars. If you set the signal to 0, you’ll see the signal, network, and carrier be replaced with "No network."

**style** *Light* or *Dark* – This will toggle the status bar to be black or white. Light being white and dark being black. By default, it’ll be set to dark.

**clock24** *Bool* - The clock is by default set to a 12 hour clock, but if you’d prefer a 24 hour clock, set clock24 to true. 

**battery** *Int (0-100)* - You can modify what battery the device has. The battery icon will adjust to match what the percentage is. By default, it’s set to 100.

## Tab 
## TabBar
## Table
## TableCell

#### Example

```nav = new ios.NavBar title:”Home”, rightAction:”-b Edit”, blur:false```

#### Properties

**title** *String* 

**leftAction** *String* or *Object* - This will set the action to the left. It can either be an image, layer, or string. 

**rightAction** *String* or *Object* - This will set the action the right. It can either be an image, layer, or string. You can also use -b at the beginning of your string to make the text semibold. 

**blur** *Bool* - By default or when set to true, the background will have a iOS background blur effect turned on. If you’d like to disable this, set blur to false.

**superLayer** *Layer* – When needed the navbar can be a part of a view. If you’re using tabs, you can set this to be inside of a view by settings this to tabLayer.*view*.

## .StatusBar
![StatusBar](https://dl.dropboxusercontent.com/u/143270556/Screenshot%202016-03-09%2015.34.00.png)
Status Bar will add a touch of realism to your prototype. It has  many customizable properties that’ll make it suit any situation. It also has a clock that shows the real time. 

#### Example
```status = new ios.StatusBar carrier:”Verizon”, network:”3g”, signal:3, battery:70```

#### Properties
**clock24** *Bool* - If set to true, this will modify the system clock to a 24–hour clock. 

**carrier** *String* - If set, this will remove wifi and show network. 

**network** *String* - Sets the network when carrier is modified. 

**battery** *Int* - Changes the remaining battery percentage

**signal**  *Int (0-5)* - This will change the number of bars shown  the signal. 0 being no network, and 5 being full reception.  
  
### .Text

## Dynamic layout  
Dynamic layout was built to bring in the logic of Auto layout into Framer. Auto layout is the backbone of iOS. It enables layouts to be constants and molded to each device. To allow this functionality, it replaces the pixel level syntax/handlers like x & y and leverages margins & centers. Autolayout for FramerJS takes a philosophical shift in how we layout screens. 

If you’re new to Auto Layout, any documentation that exists on the web should help you use this feature, and hopefully by using  Dynamic layout, you’ll also learn Auto Layout. 

### Dynamic layout vs. Auto layout
There are a few major differences between layout engines. The biggest being that Auto layout, while able to be written in code, is primarily a GUI in Xcode. Dynamic layout had to be completely code, so I took some liberties in how we define  

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

## Supporting Functions
### getTime
### timeDelegate
### sameParent
### addStyle
### apply