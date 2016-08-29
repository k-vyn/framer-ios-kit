ios = require 'ios-kit'

genCSS = (cssArray) ->
  cssObj = {}
  for prop,i in cssArray
    colonIndex = prop.indexOf(":")
    key = prop.slice(0, colonIndex)
    value = prop.slice(colonIndex + 2, prop.length - 1)
    cssObj[key] = value
  return cssObj

exports.convert = (obj) ->

  getDesignedDevice = (w) ->
    device = {}
    switch w
      when 320, 480, 640, 960, 1280
        device.scale = 2
        device.height = 568
        device.width = 320
        device.name = 'iphone-5'
      when 375, 562.5, 750, 1125, 1500
        device.scale = 2
        device.height = 667
        device.width = 375
        device.name = 'iphone-6s'
      when 414, 621, 828, 1242, 1656
        device.scale = 3
        device.height = 736
        device.width = 414
        device.name = 'iphone-6s-plus'
      when 768, 1152, 1536, 2304, 3072
        device.scale = 2
        device.height = 1024
        device.width = 768
        device.name = 'ipad'
      when 1024, 1536, 2048, 3072, 4096
        device.scale = 2
        device.height = 1366
        device.width = 1024
        device.name = 'ipad-pro'
    switch w
      when 320, 375, 414, 768, 1024
        device.iScale = 1
      when 480, 562.5, 621, 1152, 1536
        device.iScale = 1.5
      when 640, 750, 828, 1536, 2048
        device.iScale = 2
      when 960, 1125, 1242, 2304, 3072
        device.iScale = 3
      when 1280, 1500, 1656, 3072, 4096
        device.iScale = 4
    device.obj = 'device'
    return device

  # Grab keys
  layerKeys = Object.keys(obj)

  # Add layers in obj to array using keys
  layers = []
  artboards = []
  newLayers = {}
  newArtboards = []

  for key in layerKeys
    if obj[key]._info.kind == 'artboard'
      artboards.push obj[key]

  for b in artboards

    device = getDesignedDevice(b.width)

    Artboard = (artboard) ->
      board = new ios.View
        name:artboard.name
        backgroundColor:b.backgroundColor
        constraints: {top:0, bottom:0, leading:0, trailing:0}
      return board

    #Get Statements
    getString = (l) -> return l._info.metadata.string
    getCSS = (l) -> return genCSS(l._info.metadata.css)
    getColorString = (l) -> return '-' + getCSS(l).color + ' ' + getString(l)
    getImage = (l) -> return l.image
    getLayer = (l) -> return l.copy()


    found = (o,t) -> if o.indexOf(t) != -1 then return true

    genConstraints = (l) ->
      constraints = {}
      s = device.iScale
      cX = device.width/2
      cY = device.height/2
      tY = device.height/4 * 3
      bY = device.height/4 * 3
      lX = device.width/4 * 3
      tX = device.width/4 * 3

      r = (n) -> return Math.round(n)
      f = (n) -> return Math.floor(n)

      if cX == l.midX/s || r(cX) == r(l.midX/s)  || f(cX) == f(l.midX/s)
        constraints.align = 'horizontal'

      if cY == l.midY/s || r(cY) == r(l.midY/s) || f(cY) == f(l.midY/s)
        if constraints.align == 'horizontal'
          constraints.align = 'center'
        else
          constraints.align = 'vertical'

      if l.x/s < lX
        constraints.leading = r(l.x/s)
      if l.x/s > tX
        constraints.trailing = r(l.parent.width/s - l.maxX/s)

      if l.y/s < tY
        constraints.top = r(l.y/s)
      if l.y/s > bY
        constraints.bottom = r(l.parent.height/s - l.maxY/s)

      if l.width/s == device.width
        constraints.leading = 0
        constraints.trailing = 0
      else
        constraints.width = l.width/s

      if l.height/s == device.height
        constraints.top = 0
        constraints.bottom = 0
      else
        constraints.height = l.height/s

      return constraints

    genLayer = (l, parent) ->
      props =
        backgroundColor:'transparent'
        name:l.name
        image:l.image
        superLayer: parent
        constraints: genConstraints(l)

      return new ios.View props

    genAlert = (l, nP) ->
      props =
        actions:[]
        superLayer:nP
      for c in l.children
        n = c.name
        if found(n, 'title') then props.title = getString(c)
        if found(n, 'message') then props.message = getString(c)
        if found(n, 'action') then props.actions.unshift getColorString(c)
        c.destroy()
      return new ios.Alert props

    genBanner = (l, nP) ->
      props = {superLayer:nP}
      for c in l.children
        n = c.name
        if found(n, 'app') then props.app = getString(c)
        if found(n, 'title') then props.title = getString(c)
        if found(n, 'message') then props.message = getString(c)
        if found(n, 'time') then props.time = getString(c)
        if found(n, 'icon') then props.icon = getLayer(c)
        c.destroy()
      return new ios.Banner props

    genButton = (l, nP) ->
      props =
        superLayer:nP
        constraints:genConstraints(l)

      for c in l.children
        n = c.name
        if found(n, 'small') then props.type = 'small'
        if found(n, 'big') then props.type = 'big'
        if found(n, 'dark') then props.style = 'dark'
        if found(n, 'label')
          props.text = getString(c)
          props.color = getCSS(c).color
          props.fontSize = getCSS(c)['font-size'].replace('px', '')
        c.destroy()
      return new ios.Button props

    genField = (l, nP) ->
      props =
        superLayer:nP
        constraints:genConstraints(l)
      for c in l.children
        n = c.name

        if found(n, 'placeholder')
          props.placeholder = getString(c)
        c.destroy()
      return new ios.Field props

    genKeyboard = (l, nP) ->
      props =
        superLayer:nP

      for c in l.children
        n = c.name

        if found(n, 'return') then props.returnText = getString(c)
        if found(n, 'dark') then props.style = 'dark'
        c.destroy()
      return new ios.Keyboard props

    genNavBar = (l, nP) ->
      props =
        superLayer:nP
      for c in l.children
        n = c.name
        if found(n, 'title')
          props.title = getString(c)
          props.titleColor = getCSS(c).color
        if found(n, 'right')
          props.right = getString(c)
          props.color = getCSS(c).color
        if found(n, 'left') then props.left = getString(c)
        c.destroy()
      return new ios.NavBar props

    genSheet = (l, nP) ->
      props =
        actions:[]
        superLayer: nP

      for c, i in l.children
        n = c.name
        if found(n, 'action') then props.actions.push getColorString(c)
        if found(n, 'exit') then props.exit = getString(c)
        c.destroy()

      return new ios.Sheet props

    genStatusBar = (l, nP) ->
      props =
        superLayer: nP

      for c in l.children
        n = c.name
        if found(n, 'carrier') then props.carrier = getString(c)
        if found(n, 'battery') then props.battery = getString(c).replace('%', '')
        if found(n, 'network') then props.network = getString(c)
        if found(n, 'dark') then props.style = 'light'
        c.destroy()
      return new ios.StatusBar props

    genTabBar = (l, nP) ->
      props =
        tabs: []
        superLayer:nP

      for c in l.children
        n = c.name
        tprops = {}
        for t in c.children
          tn = t.name

          if n == 'tab_active' && tn.indexOf('label') != -1
            props.activeColor = getCSS(t).color
          if n != 'tab_active' && tn.indexOf('label') != -1
            props.inactiveColor = getCSS(t).color

          if found(tn, 'active') && tn.indexOf('inactive') == -1 then tprops.active = getLayer(t)
          if found(tn, 'inactive') then tprops.inactive = getLayer(t)
          if found(tn, 'label') then tprops.label = getString(t)

          t.destroy()
        props.tabs.unshift new ios.Tab tprops


        c.destroy()

      return new ios.TabBar props

    genText = (l, nP) ->
      props =
        superLayer:nP
        text:getString(l)
        constraints:genConstraints(l)
      css = getCSS(l)
      keys = Object.keys(getCSS(l))
      for k in keys
        if found(k, 'font-family') then props.fontFamily = css[k]
        if found(k, 'opacity') then props.opacity = Number(css[k])
        if found(k, 'color') then props.color = css[k]
        if found(k, 'font-size') then props.fontSize = css[k].replace('px', '')
        if found(k, 'letter-spacing') then props.letterSpacing = css[k]
        if found(k, 'line-height') then props.lineHeight = css[k].replace('px', '')
      return new ios.Text props

    children = (p, nP) ->

      for c in p.children
        n = c.name
        newLayer = 0
        if c.name[0] == '_'
          if found(n, '_Alert') then  newLayer = genAlert(c, nP)
          if found(n,'_Banner') then newLayer = genBanner(c, nP)
          if found(n, '_Button') then newLayer = genButton(c, nP)
          if found(n, '_Field') then newLayer = genField(c, nP)
          if found(n, '_Keyboard') then newLayer = genKeyboard(c, nP)
          if found(n,'_NavBar') then newLayer = genNavBar(c, nP)
          if found(n, '_Sheet') then newLayer = genSheet(c, nP)
          if found(n, '_TabBar') then newLayer = genTabBar(c, nP)
          if found(n, '_StatusBar') then newLayer = new genStatusBar(c, nP)
          if found(n, '_Text') then newLayer = genText(c, nP)
          if newLayer == undefined then newLayer = genLayer(c, nP)
        else
          newLayer = genLayer(c, nP)

        newLayers[n] = newLayer

        if c.children
          children(c, newLayer)

        c.destroy()

    ios.l[b.name] = new Artboard b

    children(b, ios.l[b.name])

    b.destroy()

    newArtboards.push ios.l[b.name]
    newLayers[b.name] = ios.l[b.name]

  return newLayers
