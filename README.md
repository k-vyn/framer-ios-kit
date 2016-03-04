# Framer iOS Kit

## Setup
To setup the kit, add the iOSKit.coffee file to your modules folder in your project. 

In Framer Studio, write – 
```ios = require 'iOSKit' ```

You can write any variable name you'd like, but for the purposes of this guide. We'll be referencing ios. 

## Components

### Alert 
To create an alert, you'll want to call .Alert.

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

### Alert Banner
