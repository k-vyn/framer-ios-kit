# Framer iOS Kit

## Setup
To setup the kit, add the iOSKit.coffee file to your modules folder in your project. 

In Framer Studio, write – 
```ios = require 'iOSKit' ```

You can write any variable name you'd like, but for the purposes of this guide. We'll be referencing ios. 

## Components

### Alert 
To create an alert, you'll want to call .Alert.
```alert = new ios.Alert```

#### Title 
*String* 
This the text the appears at the very top of the alert.
```alert = new ios.Alert title:"Hold up"```

#### Message
*String* 
This is the text that appears just below the **Title**
```alert = new ios.Alert message:"Don't do what you're doing now"```

#### Action (Must)
*String*
This is will always appear. If no secondaryAction is declared, it will be centered in the Alert.

```alert = new ios.Alert action:"OK"```

#### Secondary Action (Optional)
*String* 
This will appear to the left of the action. It will not appear if not declared.

```alert = new ios.Alert secondaryAction:"Cancel"```
