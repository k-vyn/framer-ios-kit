ios = require 'ios-kit'


exports.defaults =
  style:"light"
  shift:true
  output:undefined
  returnText:"return"
  state:"letters"
  hidden:false
  returnColor:"blue"
  superLayer:undefined


#Responsabile for keyboard dimensions
device =
  "iphone-5":
    popUpChar:40
    popUpTop:4
    height:215
    lineHeight:36
    letterKey:
      keyTop:6
      height:39
      width:26.5
      borderRadius:5
      fontSize:22.5
    specialKeyWidth:38.5
    specialKeyHeight:38.5
    space:5
    row1:
      leading:0
      top:0
    row2:
      leading:19
      top:16
    row3:
      top:16
      leading:51
    area:
      top:11
      leading:3
      trailing:3
      bottom:4
    returnWidth:75
    popUpOffset:
      x:4
      y:30
  "iphone-6s":
    popUpChar:40
    popUpTop:6
    height:218
    lineHeight:40
    letterKey:
      keyTop:10
      height:42
      width:31.5
      borderRadius:5
      fontSize:23
      top:10
    specialKeyWidth:42
    specialKeyHeight:42
    space:6
    row1:
      leading:0
      top:0
    row2:
      leading:22
      top:12
    row3:
      top:12
      leading:59
    area:
      top:12
      leading:3
      trailing:3
      bottom:4
    returnWidth:87
    popUpOffset:
      x:5
      y:32
  "iphone-6s-plus":
    popUpChar:38
    popUpTop:6
    height:226
    lineHeight:42
    letterKey:
      keyTop:12
      height:45
      width:36
      borderRadius:5
      fontSize:24
      top:10
    specialKeyWidth:45
    specialKeyHeight:45
    space:5
    row1:
      leading:0
      top:0
    row2:
      leading:20
      top:11
    row3:
      top:11
      leading:63
    area:
      top:8
      leading:4
      trailing:4
      bottom:5
    returnWidth:97
    popUpOffset:
      x:10
      y:38
  "ipad":
    height:313
    lineHeight:55
    letterKey:
      height:55
      width:56
      borderRadius:5
      fontSize:23
    specialKeyWidth:56
    specialKeyHeight:55
    space:12
    returnWidth:106
    row1:
      leading:0
      top:0
    row2:
      leading:30
      top:9
    row3:
      leading:68
      top:9
    area:
      top:55
      leading:6
      trailing:6
      bottom:8

  "ipad-pro":
    height:378
    lineHeight:61
    letterKey:
      height:61
      width:63
      borderRadius:5
      fontSize:23
    space:7
    returnWidth:120
    specialKeyHeight:61
    specialKeyWidth:93
    row1:
      leading:111
      top:53
    row2:
      leading:126
      top:7
    row3:
      leading:161
      top:7
    area:
      top:56
      leading:4
      trailing:4
      bottom:4



# Map of key codes
# Codes for all keys
codeMap = { 8:'delete', 9:'tab', 13:'return', 16:'shift', 20:'caps', 32:'space', 27:"dismiss", 33:"!", 34:"\"", 35:"#", 36:"$", 37:"%", 38:"&", 39:"\'", 40:"(", 41:")", 42:"*", 43:"+", 44:",", 45:"-", 47:"/", 46:".", 48:"0", 49:"!", 50:"@", 51:"#", 52:"$", 53:"%", 54:"^", 55:"&", 56:"*", 57:"(", 48:")", 59:"_", 60:"<", 61:"=", 62:">", 63:"?", 64:"@", 65:"A", 66:"B", 67:"C", 68:"D", 69:"E", 70:"F", 71:"G", 72:"H", 73:"I", 74:"J", 75:"K", 76:"L", 77:"M", 78:"N", 79:"O", 80:"P", 81:"Q", 82:"R", 83:"S", 84:"T", 85:"U", 86:"V", 87:"W", 88:"X", 89:"Y", 90:"Z", 91:'cmd', 219:"[", 92:"\\", 221:"]", 94:"^", 95:"_", 96:"`", 97:"a", 98:"b", 99:"c", 100:"d", 101:"e", 102:"f", 103:"g", 104:"h", 105:"i", 106:"j", 107:"k", 108:"l", 109:"m", 110:"n", 111:"o", 112:"p", 113:"q", 114:"r", 115:"s", 116:"t", 117:"u", 118:"v", 119:"w", 120:"x", 121:"y", 122:"z", 123:"{", 124:"|", 125:"}", 126:"~", 186:":", 187:"+", 188:"<", 190:">", 191:"?", 189:"_", 192:"~", 219:"{", 220:"\|", 221:"}", 222:"&rdquo;"}
arrayOfCodes = Object.keys(codeMap)
letters = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v",  "b", "n", "m"]
numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "/", ":", ";", "(", ")", "$", "&", "@", "\"", ".", ",", "?", "!", "′"]
symbols = ["[", "]", "{", "}", "#", "%", "^", "*", "+", "=", "_", "\\", "|", "~", "<", ">", "€", "£", "¥", "•"]

exports.defaults.props = Object.keys(exports.defaults)

exports.create = (obj) ->
  setup = ios.utils.setupComponent(obj, exports.defaults)
  #Responsabile for colors
  style =
    light:
      backgroundColor:"#D1D5DA"
      color:"#000"
      specialKeyBG:"#ACB3BD"
      keyBG:"#F7F7F7"
      shadowY: ios.px(1)
      shadowColor:"#898B8F"
      returnBG:ios.color(setup.returnColor)
    dark:
      backgroundColor:"rgba(0,0,0,.7)"
      color:"#FFF"
      specialKeyBG:"rgba(67,67,67,.8)"
      keyBG:"rgba(105,105,105,.8)"
      shadowY: ios.px(1)
      shadowColor:"rgba(0,0,0,.4)"
      returnBG:ios.color(setup.returnColor)

  specs = device[ios.device.name]
  colors = style[setup.style]

  device
  board = new ios.View
    name:"Keyboard"
    superLayer:setup.superLayer
    backgroundColor:style[setup.style].backgroundColor
    y:ios.device.height
    constraints:
      leading:0
      trailing:0
      bottom:-1 * specs.height
      height:specs.height
  ios.utils.bgBlur(board)
  board.output = (obj) ->
    if board.target
      if board.target.type == 'field'
        board.target.active = false

    board.target = obj
    if board.target
      if board.target.type == 'field'
        board.target.active = true
  board.hidden = setup.hidden

  if board.hidden == false
    board.constraints.bottom = 0
    ios.layout.set(board)

  board.call = () ->
    board.y = ios.device.height
    board.constraints.bottom = 0
    if board.hidden
      board.hidden = false
      ios.layout.animate
        target:board
        time:.5
        curve:'ease-in-out'

    board.bringToFront()
  board.dismiss = () ->
    board.constraints.bottom = -1 * ios.pt(board.height)
    board.hidden = true
    board.target.active = false
    ios.layout.animate
      target:board
      time:.5
      curve:'ease-in-out'

  board.delete = () ->
    layer = ""
    if board.target
      if board.target.type == 'field'
        layer = board.target.text
      else
        layer = board.target

      isSpace = layer.html[layer.html.length - 5..layer.html.length - 1 ]

      if isSpace != 'nbsp;'
        text = layer.html.slice(0, -1)
        layer.html = text
      else
        text = layer.html.slice(0, -6)
        layer.html = text

  board.capsLock = () ->
    board.isCapsLock = true
    board.isCapital = true
    board.keys.shift.icon.toggle('off')
    handleKeyColor(board.keys.shift)
    if ios.device.name == 'ipad-pro'
      board.keys.shiftalt.icon.toggle('off')
      handleKeyColor(board.keys.shiftalt)

  board.output(setup.output)
  board.keysArray = []
  board.keys = {}
  board.isCapital = setup.shift
  board.area = new ios.View
    name:".area"
    superLayer:board
    constraints: specs.area
    backgroundColor:"transparent"

  Key = (obj) ->
    key = new ios.View
      name:".keys." + obj.name
      constraints:obj.constraints
      superLayer:board.area
      borderRadius:ios.px(specs.letterKey.borderRadius)
      shadowY:colors.shadowY
      shadowColor:colors.shadowColor
    key.style.fontFamily = "-apple-system, Helvetica, Arial, sans-serif"

    #Disables Zoom
    key.on Events.TouchStart, (event) ->
      event.preventDefault()
    return key

  Letter = (obj) ->
    key = new Key obj
    key.backgroundColor = colors.keyBG
    key.html = obj.letter
    key.color = colors.color
    key.style.textAlign = "center"
    key.style.lineHeight = ios.px(specs.lineHeight) + "px"
    key.style.fontSize = ios.px(specs.letterKey.fontSize) + "px"
    key.value = obj.letter


    if key.value == "space" then key.value = "&nbsp;"
    if ios.isPad()
      key.down = ->
        key.backgroundColor = colors.specialKeyBG
        if board.target then ios.utils.write(board.target, key.value)
      key.up = ->
        key.backgroundColor = colors.keyBG
        if board.isCapital && board.isCapsLock != true
          board.isCapital = false
          capitalizeKeys()
          board.keys.shift.up()
          if ios.isPad() then board.keys.shiftalt.up()
      key.on Events.TouchStart, ->
        key.down()
      key.on Events.TouchEnd, ->
        key.up()
    else
      if key.value != '&nbsp;'
        key.down = ->
          board.popUp.visible = true
          board.bringToFront()
          board.popUp.bringToFront()
          board.popUp.midX = key.midX
          board.popUp.maxY = key.maxY
          board.popUp.text.html = key.value

          if board.target then ios.utils.write(board.target, key.value)


        key.up = ->
          board.popUp.visible = false
          if board.isCapital && board.capsLock != true
            board.isCapital = false
            capitalizeKeys()
            board.keys.shift.up()

        key.on Events.TouchStart, -> key.down()
        key.on Events.TouchEnd, -> key.up()
      else

        key.down = ->
          key.backgroundColor = colors.specialKeyBG
          if board.target then ios.utils.write(board.target, key.value)
        key.up = ->
          key.backgroundColor = colors.keyBG
        key.on Events.TouchStart, ->
          key.down()
        key.on Events.TouchEnd, ->
          key.up()

    return key

  SpecialKey = (obj) ->
    key = new Key obj
    key.backgroundColor = colors.specialKeyBG
    key.color = colors.color
    key.style.textAlign = "center"
    if ios.device.name == 'ipad-pro'
      key.style.fontSize = ios.px(18) + "px"
    else
      key.style.fontSize = ios.px(16) + "px"
    return key

  Icon = (obj) ->
    icon = new ios.View
      name:'icon'
      backgroundColor:"transparent"
      superLayer:obj.superLayer
      constraints:
        align:'center'

    icon.props = (height:obj.icon.height, width:obj.icon.width, html: obj.icon.svg)

    ios.utils.changeFill(icon, colors.color)
    return icon

  IconWithState = (obj) ->
    icon = new ios.View
      name:'icon'
      backgroundColor:"transparent"
      superLayer:obj.superLayer
      constraints:
        align:'center'

    icon.toggle = (state) ->
      if state == undefined
        if icon.state == 'on' then state = 'off'
        else state = 'on'

      if state == "on"
        if ios.device.name != 'ipad-pro'
          icon.html = obj.on.svg
          icon.width = obj.on.width
          icon.height = obj.on.height
        icon.state = 'on'
      else
        if ios.device.name != 'ipad-pro'
          icon.html = obj.off.svg
          icon.width = obj.on.width
          icon.height = obj.on.height
        icon.state = 'off'
      ios.utils.changeFill(icon, colors.color)
    if obj.state
      icon.toggle('on')
    else
      icon.toggle('off')


    return icon

  capitalizeKeys = ->
    for key in board.keysArray
      if board.isCapital
        if key.html.length == 1 && key.html.match(/[a-z]/i)
          key.html = key.html.toUpperCase()
          key.value = key.html
        if key.alt
          key.alt.destroy()
          key.alt = undefined
        if key.height > ios.px(46)
          key.style.lineHeight = ios.px(specs.letterKey.height) + 'px'
          key.style.fontSize = ios.px(23) + 'px'
        else
          if ios.device.name == 'ipad-pro'
            key.style.lineHeight = ios.px(46) + 'px'
          else
            key.style.lineHeight = ios.px(specs.lineHeight) + 'px'
          key.style.fontSize = ios.px(20) + 'px'
        key.value = key.html
      else
        if key.html.length == 1 && key.html.match(/[a-z]/i)
          key.html = key.html.toLowerCase()
          key.value = key.html
        else
          if key.alt == undefined
            key.alt = new ios.Text
              text:""
              superLayer:key
              color:colors.color
              constraints:
                align:"horizontal"
                bottom:4
              fontSize:specs.letterKey.fontSize
            if board.topRow
              if board.topRow.indexOf(key) != -1
                key.style.lineHeight = ios.px(23) + 'px'
                key.style.fontSize = ios.px(16) + 'px'
                key.alt.style.fontSize = ios.px(16) + 'px'
              else
                key.style.lineHeight = ios.px(36) + 'px'
                key.style.fontSize = ios.px(20) + 'px'
                key.alt.style.fontSize = ios.px(20) + 'px'
                key.alt.constraints.bottom = 8
            switch key.value
              when "&lt;"
                key.alt.html = "."
              when "&gt;"
                key.alt.html = ","
              when "<"
                key.alt.html = "."
              when ">"
                key.alt.html = ","
              when "?"
                key.alt.html = "."
              when "{"
                key.alt.html = "["
              when "}"
                key.alt.html = "}"
              when "\|"
                key.alt.html = "\\"
              when "~"
                key.alt.html = "`"
              when "!"
                key.alt.html = "."
              when "@"
                key.alt.html = "2"
              when "#"
                key.alt.html = "3"
              when "$"
                key.alt.html = "4"
              when "%"
                key.alt.html = "5"
              when "^"
                key.alt.html = "6"
              when "&amp;"
                key.alt.html = "7"
              when "&"
                key.alt.html = "7"
              when "*"
                key.alt.html = "8"
              when "("
                key.alt.html = "9"
              when ")"
                key.alt.html = "0"
              when "_"
                key.alt.html = "-"
              when "+"
                key.alt.html = "="
              else
                key.alt.html = "&prime;"
            ios.layout.set(key.alt)
            if ios.device.name == 'ipad-pro' && key.value == '!' then key.alt.html = '1'
            if ios.device.name == 'ipad-pro' && key.value == '?' then key.alt.html = '/'
            if ios.device.name == 'ipad-pro' && key.value == ':' then key.alt.html = ';'
            if ios.device.name == 'ipad-pro' && key.value == '&rdquo;' then key.alt.html = '&prime;'
            key.value = key.alt.html

  handleKeyColor = (key) ->
    if ios.isPhone
      if key.icon.state == 'on' then key.backgroundColor = colors.keyBG
      else key.backgroundColor = colors.specialKeyBG

  Space = (obj) ->
    key = new Letter obj
    key.html = 'space'
    key.backgroundColor = colors.keyBG
    key.style.lineHeight = ios.px(specs.specialKeyHeight) + "px"
    key.style.fontSize = ios.px(16) + 'px'
    return key

  Shift = (obj) ->
    key = new SpecialKey obj
    key.icon = new IconWithState
      superLayer:key
      state:obj.shift
      on:ios.utils.svg(ios.assets.shift.on)
      off:ios.utils.svg(ios.assets.shift.off)
    handleKeyColor(key)

    key.on Events.TouchEnd, ->
      @.icon.toggle()
      handleKeyColor(key)
      if @.icon.state == 'on'
        board.isCapital = true
      else
        board.isCapital = false
      capitalizeKeys()

    key.down = ->
      key.icon.toggle('on')
      handleKeyColor(key)
      board.isCapital = true
      capitalizeKeys()

    key.up = ->
      key.icon.toggle('off')
      handleKeyColor(key)
      board.isCapital = false
      capitalizeKeys()

    ios.layout.set(key.icon)

    if ios.isPad()
      key.on Events.TouchEnd, ->
        if @.icon.state == 'on'
          board.keys.shift.icon.toggle('on')
          board.keys.shiftalt.icon.toggle('on')
        else
          board.keys.shift.icon.toggle('off')
          board.keys.shiftalt.icon.toggle('off')
        handleKeyColor(board.keys.shift)
        handleKeyColor(board.keys.shiftalt)
    return key

  Delete = (obj) ->
    key = new SpecialKey obj
    key.icon = new IconWithState
      superLayer:key
      on:ios.utils.svg(ios.assets.delete.on)
      off:ios.utils.svg(ios.assets.delete.off)

    key.fire = -> board.delete()

    key.down = ->
      key.icon.toggle('on')
      handleKeyColor(key)
      key.fire()

    key.up = ->
      key.icon.toggle('off')
      handleKeyColor(key)

    key.on Events.TouchStart, -> key.down()
    key.on Events.TouchEnd, -> key.up()


    return key

  Numbers  = (obj) ->
    key = new SpecialKey obj
    if ios.isPhone()
      key.html = '123'
    else
      key.html ='.?123'
    key.style.lineHeight = ios.px(specs.specialKeyHeight) + "px"
    return key

  Emoji = (obj) ->
    key = new SpecialKey obj
    key.icon = new Icon
      superLayer:key
      icon:ios.utils.svg(ios.assets.emoji)
    return key

  Return = (obj) ->
    key = new SpecialKey obj
    key.backgroundColor = colors.returnBG
    key.html = setup.returnText
    key.style.lineHeight = ios.px(specs.specialKeyHeight) + "px"
    key.color = ios.utils.autoColor(colors.returnBG)
    key.down = ->
      nothingHappens = true

    key.up = ->
      board.dismiss()
      if board.target
        if board.target.parent
          board.target.parent.active = false
    key.on Events.TouchEnd, -> key.down()
    key.on Events.TouchStart, -> key.up()
    return key

  Dismiss = (obj) ->
    key = new SpecialKey obj
    key.icon = new Icon
      superLayer:key
      icon:ios.utils.svg(ios.assets.keyboard)
    key.icon.scale = .8
    key.icon.constraints =
      bottom:12
      trailing:12
    ios.layout.set(key.icon)

    key.down = -> board.dismiss()
    key.up = -> nothingHappens = false
    key.on Events.TouchEnd, -> key.down()
    return key

  Tab = (obj) ->
    key = new SpecialKey obj
    key.html = 'tab'
    key.style.lineHeight = ios.px(70) + 'px'
    key.style.textAlign = 'left'
    key.style.paddingLeft = ios.px(12) + 'px'
    return key

  board.switchLetters = ->
    row1Break = 10
    row2Break = 19
    if ios.isPad()
      letters.push '!'
      letters.push '?'
    if ios.device.name == "ipad-pro"
      letters = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "{", "}", "\|", "a", "s", "d", "f", "g", "h", "j", "k", "l", ":", "&rdquo;", "z", "x", "c", "v",  "b", "n", "m", "<", ">", "?"]
      topLetters = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+"]
      row1Break = 13
      row2Break = 24
    for l, i in letters
      key = new Letter
        name:l
        constraints:
          height:specs.letterKey.height
          width:specs.letterKey.width
        letter:l
      if l == 'w' || l == 'r' || l == 'y' || l == 'i' || l == 'p'
        key.constraints.width = key.constraints.width + 1
      board.keys[l] = key
      board.keysArray.push key
      if i == 0
        key.constraints.leading = specs.row1.leading
        key.constraints.top = specs.row1.top
      if i > 0 && i < row1Break
        key.constraints.leading = [board.keysArray[i - 1], specs.space]
        key.constraints.top = specs.row1.top
      if i == row1Break
        key.constraints.leading = specs.row2.leading
        key.constraints.top = [board.keysArray[0], specs.row2.top]
      if i > row1Break && i < row2Break
        key.constraints.leading = [board.keysArray[i - 1], specs.space]
        key.constraints.top = [board.keysArray[0], specs.row2.top]
      if i == row2Break
        key.constraints.leading = specs.row3.leading
        key.constraints.top = [board.keysArray[row1Break], specs.row3.top]
      if i > row2Break
        key.constraints.leading = [board.keysArray[i - 1], specs.space]
        key.constraints.top = [board.keysArray[row1Break], specs.row3.top]
      ios.layout.set(key)

    board.keys.shift = new Shift
      name:"shift"
      shift:setup.shift
      constraints:
        height:specs.specialKeyHeight
        width:specs.specialKeyWidth
        bottomEdges:board.keys.z

    board.keys.delete = new Delete
      name:"delete"
      constraints:
        height:specs.specialKeyHeight
        width:specs.specialKeyWidth
        bottomEdges:board.keys.z
        trailing:0

    board.keys.numbers = new Numbers
      name:"numbers"
      constraints:
        height:specs.specialKeyHeight
        width:specs.specialKeyWidth
        bottom:0
        leading:0

    board.keys.emoji = new Emoji
      name:"emoji"
      constraints:
        height:specs.specialKeyHeight
        width:specs.specialKeyWidth
        leading:[board.keys.numbers, specs.space]
        bottom:0

    board.keys.return = new Return
      name:"return"
      constraints:
        bottom:0
        trailing:0
        width:specs.returnWidth
        height:specs.specialKeyHeight

    board.keys.space = new Space
      name:"space"
      letter:"space"
      constraints:
        leading:[board.keys.emoji, specs.space]
        trailing:[board.keys.return, specs.space]
        bottom:0
        height:specs.specialKeyHeight


    if ios.isPad()
      board.keys.return.constraints.bottom = undefined
      board.keys.return.constraints.bottomEdges = board.keysArray[row1Break]
      board.keys.delete.constraints.top = 0
      board.keys.delete.constraints.bottomEdges = undefined
      board.keys.delete.constraints.width = 61

      board.keys.shiftalt = new Shift
        name:"shiftalt"
        shift:setup.shift
        constraints:
          height:specs.specialKeyHeight
          width:76
          bottomEdges:board.keys.z
          trailing:0

      board.keys.dismiss = new Dismiss
        name:"dismiss"
        constraints:
          height:specs.specialKeyHeight
          width:specs.specialKeyWidth
          bottom:0
          trailing:0

      board.keys.numbersalt = new Numbers
        name:"numbersalt"
        constraints:
          height:specs.specialKeyHeight
          width:93
          bottom:0
          trailing:[board.keys.dismiss, specs.space]

      board.keys.space.html = ""
      board.keys.space.constraints.trailing = [board.keys.numbersalt, specs.space]

      ios.layout.set()
    board.topRow = []
    if ios.device.name == 'ipad-pro'
      for l,i in topLetters
          topKey = new Letter
            letter:l
            name:l
            constraints:
              height:46
              width:63
              top:0
          if i == 0
            topKey.constraints.leading = 0
          else
            topKey.constraints.leading = [board.topRow[i - 1], specs.space]
          topKey.style.lineHeight = ios.px(46) + 'px'
          ios.layout.set(topKey)
          board.topRow.push topKey
          board.keysArray.push topKey
          board.keys[l] = topKey

      board.keys.delete.icon.destroy()
      board.keys.delete.html = 'delete'
      board.keys.delete.style.lineHeight = ios.px(53) + 'px'
      board.keys.delete.style.textAlign = 'right'
      board.keys.delete.style.paddingRight = ios.px(12) + 'px'
      board.keys.delete.constraints =
        top:0
        trailing:0
        height:46
        width:106

      board.keys.shift.icon.destroy()
      board.keys.shift.html = 'shift'
      board.keys.shift.style.lineHeight = ios.px(70) + 'px'
      board.keys.shift.style.textAlign = 'left'
      board.keys.shift.style.paddingLeft = ios.px(12) + 'px'
      board.keys.shift.constraints.width = 154

      board.keys.shiftalt.icon.destroy()
      board.keys.shiftalt.html = 'shift'
      board.keys.shiftalt.style.lineHeight = ios.px(70) + 'px'
      board.keys.shiftalt.style.textAlign = 'right'
      board.keys.shiftalt.style.paddingRight = ios.px(12) + 'px'
      board.keys.shiftalt.constraints.width = 155

      board.keys.emoji.icon.constraints = {leading:15, bottom:11}
      board.keys.emoji.constraints =
        width:144
        height:61
        leading:0
        bottom:0
      ios.layout.set()

      board.keys.numbersalt.constraints.width = 93
      board.keys.dismiss.constraints.width = 93

      board.keys.com = new Letter
        name:'.com'
        letter:'.com'
        constraints:
          height:specs.letterKey.height
          width:specs.letterKey.width
          bottom:0
          trailing:[board.keys.numbersalt, specs.space]

      board.keys.com.style.fontSize = ios.px(16) + 'px'

      board.keys.numbers.constraints =
        width:143
        height:61
        leading:[board.keys.emoji, specs.space]
      board.keys.numbers.style.lineHeight = ios.px(70) + 'px'
      board.keys.numbers.style.textAlign = 'left'
      board.keys.numbers.style.paddingLeft = ios.px(12) + 'px'


      board.keys.return.style.lineHeight = ios.px(70) + 'px'
      board.keys.return.style.textAlign = 'right'
      board.keys.return.style.paddingRight = ios.px(12) + 'px'


      board.keys.space.constraints.leading = [board.keys.numbers, specs.space]
      board.keys.space.constraints.trailing = [board.keys.com, specs.space]


      board.keys.caps = new Shift
        name:'caps'
        caps: true
        constraints:
          height:specs.specialKeyHeight
          width:119
          bottomEdges:board.keysArray[row1Break]
      board.keys.caps.icon.destroy()
      board.keys.caps.html = 'caps lock'
      board.keys.caps.style.lineHeight = ios.px(70) + 'px'
      board.keys.caps.style.textAlign = 'left'
      board.keys.caps.style.paddingLeft = ios.px(12) + 'px'



      board.keys.caps.down = ->
        if board.isCapsLock
          board.isCapsLock = false
        else
          board.capsLock()
      board.keys.caps.on Events.TouchEnd, ->
        board.keys.caps.down()
      board.keys.caps.up = ->
        nothingHappens = true

      board.keys.tab = new Tab
        name:'tab'
        constraints:
          height:specs.specialKeyHeight
          width:106
          bottomEdges:board.keysArray[0]

      ios.layout.set()
  if ios.isPhone()
    popUp = ios.utils.svg(ios.assets.keyPopUp[setup.style][ios.device.name])
    board.popUp = new Layer
      height:popUp.height
      width:popUp.width
      backgroundColor:'transparent'
      name:'.popUp'
      superLayer:board.area
      visible:false

    board.popUp.svg = new Layer
      html:popUp.svg
      height:popUp.height
      width:popUp.width
      superLayer:board.popUp
      name:'.svg'
      backgroundColor:'transparent'

    board.popUp.text = new ios.Text
      text:'A'
      superLayer:board.popUp
      fontSize:specs.popUpChar
      fontWeight:300
      color:colors.color
      textAlign:'center'
      constraints:
        align:'horizontal'
        top:specs.popUpTop
        width:ios.pt(popUp.width)

    board.popUp.center()
    switch ios.device.name
      when 'iphone-6s-plus'
        board.popUp.width = board.popUp.width - 18
        board.popUp.height = board.popUp.height - 24
        board.popUp.svg.x = ios.px(-3)
        board.popUp.svg.y = ios.px(-3)
      when 'iphone-6s'
        board.popUp.width = board.popUp.width - 12
        board.popUp.height = board.popUp.height - 12
        board.popUp.svg.x = ios.px(-3)
        board.popUp.svg.y = ios.px(-2)
      when 'iphone-5'
        board.popUp.width = board.popUp.width - 12
        board.popUp.height = board.popUp.height - 12
        board.popUp.svg.x = ios.px(-3)
        board.popUp.svg.y = ios.px(-2)

    capitalizeKeys()
  board.switch = (state) ->
    switch state
      when "letters"
        board.switchLetters()

  board.switch("letters")

  document.addEventListener 'keydown', (e) ->
    if arrayOfCodes.indexOf(e.keyCode.toString()) != -1
      key = board.keys[codeMap[e.keyCode].toLowerCase()]
      if key then key.down()
      if ios.isPad()
        if key == board.keys.shift || key == board.keys.shiftalt
          board.keys.shift.down()
          board.keys.shiftalt.icon.toggle('on')
          handleKeyColor(board.keys.shiftalt)
  document.addEventListener 'keyup', (e) ->
    if arrayOfCodes.indexOf(e.keyCode.toString()) != -1
      key = board.keys[codeMap[e.keyCode].toLowerCase()]
      if key then key.up()
      if ios.isPad()
        if key == board.keys.shift || key == board.keys.shiftalt
          board.keys.shift.up()
          board.keys.shiftalt.icon.toggle('off')
          handleKeyColor(board.keys.shiftalt)
  capitalizeKeys()
  return board
