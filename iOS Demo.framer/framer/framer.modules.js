require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"ios-kit-alert":[function(require,module,exports){
var ios;

ios = require('ios-kit');

exports.defaults = {
  title: "Title",
  message: "",
  actions: ["OK"]
};

exports.defaults.props = Object.keys(exports.defaults);

exports.create = function(obj) {
  var act, actLabel, actLabel2, action, action2, actionDivider, actions, alert, cleanName, i, index, j, len, len1, ref, setup;
  setup = ios.utils.setupComponent(obj, exports.defaults);
  alert = new ios.View({
    backgroundColor: "transparent",
    name: "alert",
    constraints: {
      leading: 0,
      trailing: 0,
      top: 0,
      bottom: 0
    }
  });
  alert.overlay = new ios.View({
    backgroundColor: "rgba(0,0,0,.3)",
    superLayer: alert,
    name: ".overlay",
    constraints: {
      leading: 0,
      trailing: 0,
      top: 0,
      bottom: 0
    }
  });
  alert.modal = new ios.View({
    backgroundColor: "white",
    superLayer: alert,
    borderRadius: ios.utils.px(10),
    name: ".modal",
    constraints: {
      align: "center",
      width: 280,
      height: 400
    }
  });
  alert.title = new ios.Text({
    superLayer: alert.modal,
    text: setup.title,
    fontWeight: "semibold",
    name: ".title",
    textAlign: "center",
    lineHeight: 20,
    constraints: {
      top: 20,
      width: 220,
      align: "horizontal"
    }
  });
  alert.message = new ios.Text({
    superLayer: alert.modal,
    text: setup.message,
    fontSize: 13,
    name: ".message",
    textAlign: "center",
    lineHeight: 16,
    constraints: {
      top: [alert.title, 10],
      align: "horizontal",
      width: 220
    }
  });
  if (setup.message.length === 0) {
    alert.message.height = -24;
  }
  alert.horiDivider = new ios.View({
    superLayer: alert.modal,
    backgroundColor: "#E2E8EB",
    name: ".horiDivider",
    constraints: {
      leading: 0,
      trailing: 0,
      height: 1,
      bottom: 44
    }
  });
  cleanName = function(n) {
    if (n[0] === "-") {
      return n.slice(9);
    } else {
      return n;
    }
  };
  alert.modal.constraints["height"] = 20 + ios.utils.pt(alert.title.height) + 10 + ios.utils.pt(alert.message.height) + 24 + 44;
  actions = [];
  switch (setup.actions.length) {
    case 1:
      actLabel = ios.utils.capitalize(setup.actions[0]);
      action = new ios.View({
        superLayer: alert.modal,
        backgroundColor: "white",
        name: cleanName(setup.actions[0]),
        borderRadius: ios.utils.px(10),
        constraints: {
          leading: 0,
          trailing: 0,
          bottom: 0,
          height: 44
        }
      });
      action.label = new ios.Text({
        color: ios.utils.color("blue"),
        superLayer: action,
        text: actLabel,
        name: "label",
        constraints: {
          align: "horizontal",
          bottom: 16
        }
      });
      actions.push(action);
      break;
    case 2:
      actLabel = ios.utils.capitalize(setup.actions[0]);
      action = new ios.View({
        superLayer: alert.modal,
        name: cleanName(setup.actions[0]),
        borderRadius: ios.utils.px(10),
        backgroundColor: "white",
        constraints: {
          leading: 0,
          trailing: ios.utils.pt(alert.modal.width / 2),
          bottom: 0,
          height: 44
        }
      });
      action.label = new ios.Text({
        color: ios.utils.color("blue"),
        superLayer: action,
        text: actLabel,
        name: "label",
        constraints: {
          align: "horizontal",
          bottom: 16
        }
      });
      actions.push(action);
      alert.vertDivider = new ios.View({
        superLayer: alert.modal,
        backgroundColor: "#E2E8EB",
        name: ".vertDivider",
        constraints: {
          width: 1,
          bottom: 0,
          height: 44,
          align: "horizontal"
        }
      });
      actLabel2 = ios.utils.capitalize(setup.actions[1]);
      action2 = new ios.View({
        superLayer: alert.modal,
        name: cleanName(setup.actions[1]),
        borderRadius: ios.utils.px(10),
        backgroundColor: "white",
        constraints: {
          leading: ios.utils.pt(alert.modal.width / 2),
          trailing: 0,
          bottom: 0,
          height: 44
        }
      });
      action2.label = new ios.Text({
        color: ios.utils.color("blue"),
        superLayer: action2,
        text: actLabel2,
        name: "label",
        constraints: {
          align: "horizontal",
          bottom: 16
        }
      });
      actions.push(action2);
      break;
    default:
      ref = setup.actions;
      for (index = i = 0, len = ref.length; i < len; index = ++i) {
        act = ref[index];
        actLabel = ios.utils.capitalize(act);
        action = new ios.View({
          superLayer: alert.modal,
          name: cleanName(act),
          borderRadius: ios.utils.px(10),
          backgroundColor: "white",
          constraints: {
            leading: 0,
            trailing: 0,
            bottom: 0 + ((setup.actions.length - index - 1) * 44),
            height: 44
          }
        });
        actionDivider = new ios.View({
          superLayer: alert.modal,
          backgroundColor: "#E2E8EB",
          name: "action divider",
          constraints: {
            leading: 0,
            trailing: 0,
            height: 1,
            bottom: 0 + ((setup.actions.length - index) * 44)
          }
        });
        action.label = new ios.Text({
          style: "alertAction",
          color: ios.utils.color("blue"),
          superLayer: action,
          text: actLabel,
          name: "label",
          constraints: {
            align: "horizontal",
            bottom: 14
          }
        });
        actions.push(action);
        alert.modal.constraints["height"] = alert.modal.constraints["height"] + 42 - 12;
      }
  }
  alert.actions = {};
  for (index = j = 0, len1 = actions.length; j < len1; index = ++j) {
    act = actions[index];
    act.type = "button";
    ios.utils.specialChar(act);
    if (setup.actions[index].indexOf("-r") === 0) {
      act.origColor = ios.utils.color("red");
    } else {
      act.origColor = ios.utils.color("blue");
    }
    ios.layout.set(act.label);
    act.on(Events.TouchStart, function() {
      this.backgroundColor = "white";
      this.animate({
        properties: {
          backgroundColor: act.backgroundColor.darken(5)
        },
        time: .25
      });
      return this.label.animate({
        properties: {
          color: this.origColor.lighten(10)
        },
        time: .25
      });
    });
    act.on(Events.TouchEnd, function() {
      this.animate({
        properties: {
          backgroundColor: "white"
        },
        time: .25
      });
      this.label.animate({
        properties: {
          color: this.origColor
        },
        time: .25
      });
      return alert.destroy();
    });
    alert.actions[act.name] = act;
  }
  ios.layout.set(actions[actions.length - 1]);
  return alert;
};


},{"ios-kit":"ios-kit"}],"ios-kit-banner":[function(require,module,exports){
var ios;

ios = require('ios-kit');

exports.defaults = {
  title: "Title",
  message: "Message",
  action: "Action",
  time: "now",
  app: "app",
  icon: void 0,
  duration: 7,
  animated: true,
  reply: true
};

exports.defaults.props = Object.keys(exports.defaults);

exports.create = function(obj) {
  var banner, setup, specs;
  setup = ios.utils.setupComponent(obj, exports.defaults);
  specs = {
    leadingIcon: 15,
    topIcon: 8,
    topTitle: 6,
    width: 0
  };
  switch (ios.device.name) {
    case "iphone-5":
      specs.width = 304;
      break;
    case "iphone-6s":
      specs.width = 359;
      break;
    case "iphone-6s-plus":
      specs.leadingIcon = 15;
      specs.topIcon = 12;
      specs.topTitle = 10;
      specs.width = 398;
      break;
    case "ipad":
      specs.leadingIcon = 8;
      specs.topIcon = 8;
      specs.topTitle = 11;
      specs.width = 398;
      break;
    case "ipad-pro":
      specs.leadingIcon = 8;
      specs.topIcon = 8;
      specs.topTitle = 9;
      specs.width = 556;
  }
  banner = new ios.View({
    backgroundColor: "rgba(255,255,255,.6)",
    name: "banner",
    borderRadius: ios.px(12),
    shadowColor: "rgba(0,0,0,.3)",
    shadowY: ios.px(2),
    shadowBlur: ios.px(10),
    clip: true,
    constraints: {
      align: 'horizontal',
      width: specs.width,
      top: 8,
      height: 93
    }
  });
  banner.header = new ios.View({
    backgroundColor: "rgba(255,255,255, .3)",
    name: ".header",
    superLayer: banner,
    constraints: {
      height: 36,
      leading: 0,
      trailing: 0
    }
  });
  if (setup.icon === void 0) {
    banner.icon = new ios.View({
      superLayer: banner.header
    });
    banner.icon.style["background"] = "linear-gradient(-180deg, #67FF81 0%, #01B41F 100%)";
  } else {
    banner.header.addSubLayer(setup.icon);
    banner.icon = setup.icon;
  }
  banner.icon.borderRadius = ios.utils.px(4.5);
  banner.icon.name = ".icon";
  banner.icon.constraints = {
    height: 20,
    width: 20,
    leading: specs.leadingIcon,
    align: "vertical"
  };
  ios.layout.set(banner.icon);
  banner.app = new ios.Text({
    text: setup.app.toUpperCase(),
    color: "rgba(0,0,0,.5)",
    fontSize: 13,
    letterSpacing: .5,
    superLayer: banner.header,
    constraints: {
      leading: [banner.icon, 6],
      align: "vertical"
    }
  });
  banner.title = new ios.Text({
    text: setup.title,
    color: "black",
    fontWeight: "semibold",
    fontSize: 15,
    superLayer: banner,
    name: ".title",
    constraints: {
      top: 45,
      leading: 15
    }
  });
  banner.message = new ios.Text({
    text: setup.message,
    color: "black",
    fontSize: 15,
    fontWeight: "light",
    superLayer: banner,
    name: ".message",
    constraints: {
      leadingEdges: banner.title,
      top: [banner.title, 6]
    }
  });
  banner.time = new ios.Text({
    text: setup.time,
    color: "rgba(0,0,0,.5)",
    fontSize: 13,
    superLayer: banner.header,
    name: ".time",
    constraints: {
      trailing: 16,
      align: "vertical"
    }
  });
  if (ios.device.name === "ipad" || ios.device.name === "ipad-pro") {
    banner.time.constraints = {
      bottomEdges: banner.title,
      trailing: specs.leadingIcon
    };
  }
  ios.utils.bgBlur(banner);
  banner.draggable = true;
  banner.draggable.horizontal = false;
  banner.draggable.constraints = {
    y: ios.px(8),
    x: ios.px(8)
  };
  banner.draggable.bounceOptions = {
    friction: 25,
    tension: 250
  };
  banner.on(Events.DragEnd, function() {
    if (banner.maxY < ios.utils.px(68)) {
      banner.animate({
        properties: {
          maxY: 0
        },
        time: .15,
        curve: "ease-in-out"
      });
      return Utils.delay(.25, function() {
        return banner.destroy();
      });
    }
  });
  if (setup.animated === true) {
    banner.y = 0 - banner.height;
    ios.layout.animate({
      target: banner,
      time: .25,
      curve: 'ease-in-out'
    });
  }
  if (setup.duration) {
    Utils.delay(setup.duration, function() {
      return banner.animate({
        properties: {
          maxY: 0
        },
        time: .25,
        curve: "ease-in-out"
      });
    });
    Utils.delay(setup.duration + .25, function() {
      return banner.destroy();
    });
  }
  return banner;
};


},{"ios-kit":"ios-kit"}],"ios-kit-button":[function(require,module,exports){
var ios;

ios = require('ios-kit');

exports.defaults = {
  text: "Button",
  type: "text",
  style: "light",
  backgroundColor: "white",
  color: "#007AFF",
  fontSize: 17,
  fontWeight: "regular",
  name: "button",
  blur: true,
  superLayer: void 0,
  constraints: void 0
};

exports.defaults.props = Object.keys(exports.defaults);

exports.create = function(array) {
  var backgroundColor, button, color, rgbString, rgbaString, setup;
  setup = ios.utils.setupComponent(array, exports.defaults);
  button = new ios.View({
    name: setup.name,
    constraints: setup.constraints,
    superLayer: setup.superLayer
  });
  button.type = setup.type;
  color = "";
  switch (setup.type) {
    case "big":
      setup.fontSize = 20;
      setup.fontWeight = "medium";
      button.borderRadius = ios.utils.px(12.5);
      backgroundColor = "";
      if (button.constraints === void 0) {
        button.constraints = {};
      }
      button.constraints.leading = 10;
      button.constraints.trailing = 10;
      button.constraints.height = 57;
      switch (setup.style) {
        case "light":
          color = ios.utils.color("blue");
          if (setup.blur) {
            backgroundColor = "rgba(255, 255, 255, .9)";
            ios.utils.bgBlur(button);
          } else {
            backgroundColor = "white";
          }
          break;
        case "dark":
          color = "#FFF";
          if (setup.blur) {
            backgroundColor = "rgba(43, 43, 43, .9)";
            ios.utils.bgBlur(button);
          } else {
            backgroundColor = "#282828";
          }
          break;
        default:
          if (setup.blur) {
            color = setup.color;
            backgroundColor = new Color(setup.backgroundColor);
            rgbString = backgroundColor.toRgbString();
            rgbaString = rgbString.replace(")", ", .9)");
            rgbaString = rgbaString.replace("rgb", "rgba");
            backgroundColor = rgbaString;
            ios.utils.bgBlur(button);
          } else {
            color = setup.color;
            backgroundColor = new Color(setup.backgroundColor);
          }
      }
      button.backgroundColor = backgroundColor;
      button.on(Events.TouchStart, function() {
        var newColor;
        newColor = "";
        if (setup.style === "dark") {
          newColor = button.backgroundColor.lighten(10);
        } else {
          newColor = button.backgroundColor.darken(10);
        }
        return button.animate({
          properties: {
            backgroundColor: newColor
          },
          time: .5
        });
      });
      button.on(Events.TouchEnd, function() {
        return button.animate({
          properties: {
            backgroundColor: backgroundColor
          },
          time: .5
        });
      });
      break;
    case "small":
      setup.fontSize = 14;
      setup.top = 4;
      button.borderRadius = ios.utils.px(2.5);
      setup.fontWeight = 500;
      setup.text = setup.text.toUpperCase();
      color = setup.color;
      button.borderColor = setup.color;
      button.backgroundColor = "transparent";
      button.borderWidth = ios.utils.px(1);
      break;
    default:
      button.backgroundColor = "transparent";
      button.origColor = ios.utils.specialChar(button);
      color = setup.color;
      button.labelOrigColor = color;
      button.on(Events.TouchStart, function() {
        var newColor;
        this.labelOrigColor = button.label.color;
        newColor = button.subLayers[0].color.lighten(30);
        return button.subLayers[0].animate({
          properties: {
            color: newColor
          },
          time: .5
        });
      });
      button.on(Events.TouchEnd, function() {
        return this.subLayers[0].animate({
          properties: {
            color: ios.utils.color(this.labelOrigColor)
          },
          time: .5
        });
      });
  }
  button.label = new ios.Text({
    name: ".label",
    text: setup.text,
    color: color,
    lineHeight: 16,
    superLayer: button,
    fontSize: setup.fontSize,
    fontWeight: setup.fontWeight,
    constraints: {
      align: "center"
    }
  });
  switch (setup.type) {
    case "small":
      button.props = {
        width: button.label.width + ios.utils.px(20),
        height: button.label.height + ios.utils.px(10)
      };
      button.on(Events.TouchStart, function() {
        button.animate({
          properties: {
            backgroundColor: color
          },
          time: .5
        });
        return button.label.animate({
          properties: {
            color: "#FFF"
          },
          time: .5
        });
      });
      button.on(Events.TouchEnd, function() {
        button.animate({
          properties: {
            backgroundColor: "transparent"
          },
          time: .5
        });
        return button.label.animate({
          properties: {
            color: color
          },
          time: .5
        });
      });
      break;
    default:
      button.props = {
        width: button.label.width,
        height: button.label.height
      };
  }
  ios.layout.set({
    target: button
  });
  ios.layout.set({
    target: button.label
  });
  return button;
};


},{"ios-kit":"ios-kit"}],"ios-kit-converter":[function(require,module,exports){
var genCSS, ios;

ios = require('ios-kit');

genCSS = function(cssArray) {
  var colonIndex, cssObj, i, j, key, len, prop, value;
  cssObj = {};
  for (i = j = 0, len = cssArray.length; j < len; i = ++j) {
    prop = cssArray[i];
    colonIndex = prop.indexOf(":");
    key = prop.slice(0, colonIndex);
    value = prop.slice(colonIndex + 2, prop.length - 1);
    cssObj[key] = value;
  }
  return cssObj;
};

exports.convert = function(obj) {
  var Artboard, artboards, b, children, device, found, genAlert, genBanner, genButton, genConstraints, genField, genKeyboard, genLayer, genNavBar, genSheet, genStatusBar, genTabBar, genText, getCSS, getColorString, getDesignedDevice, getImage, getLayer, getString, j, key, layerKeys, layers, len, len1, m, newArtboards, newLayers;
  getDesignedDevice = function(w) {
    var device;
    device = {};
    switch (w) {
      case 320:
      case 480:
      case 640:
      case 960:
      case 1280:
        device.scale = 2;
        device.height = 568;
        device.width = 320;
        device.name = 'iphone-5';
        break;
      case 375:
      case 562.5:
      case 750:
      case 1125:
      case 1500:
        device.scale = 2;
        device.height = 667;
        device.width = 375;
        device.name = 'iphone-6s';
        break;
      case 414:
      case 621:
      case 828:
      case 1242:
      case 1656:
        device.scale = 3;
        device.height = 736;
        device.width = 414;
        device.name = 'iphone-6s-plus';
        break;
      case 768:
      case 1152:
      case 1536:
      case 2304:
      case 3072:
        device.scale = 2;
        device.height = 1024;
        device.width = 768;
        device.name = 'ipad';
        break;
      case 1024:
      case 1536:
      case 2048:
      case 3072:
      case 4096:
        device.scale = 2;
        device.height = 1366;
        device.width = 1024;
        device.name = 'ipad-pro';
    }
    switch (w) {
      case 320:
      case 375:
      case 414:
      case 768:
      case 1024:
        device.iScale = 1;
        break;
      case 480:
      case 562.5:
      case 621:
      case 1152:
      case 1536:
        device.iScale = 1.5;
        break;
      case 640:
      case 750:
      case 828:
      case 1536:
      case 2048:
        device.iScale = 2;
        break;
      case 960:
      case 1125:
      case 1242:
      case 2304:
      case 3072:
        device.iScale = 3;
        break;
      case 1280:
      case 1500:
      case 1656:
      case 3072:
      case 4096:
        device.iScale = 4;
    }
    device.obj = 'device';
    return device;
  };
  layerKeys = Object.keys(obj);
  layers = [];
  artboards = [];
  newLayers = {};
  newArtboards = [];
  for (j = 0, len = layerKeys.length; j < len; j++) {
    key = layerKeys[j];
    if (obj[key]._info.kind === 'artboard') {
      artboards.push(obj[key]);
    }
  }
  for (m = 0, len1 = artboards.length; m < len1; m++) {
    b = artboards[m];
    device = getDesignedDevice(b.width);
    Artboard = function(artboard) {
      var board;
      board = new ios.View({
        name: artboard.name,
        backgroundColor: b.backgroundColor,
        constraints: {
          top: 0,
          bottom: 0,
          leading: 0,
          trailing: 0
        }
      });
      return board;
    };
    getString = function(l) {
      return l._info.metadata.string;
    };
    getCSS = function(l) {
      return genCSS(l._info.metadata.css);
    };
    getColorString = function(l) {
      return '-' + getCSS(l).color + ' ' + getString(l);
    };
    getImage = function(l) {
      return l.image;
    };
    getLayer = function(l) {
      return l.copy();
    };
    found = function(o, t) {
      if (o.indexOf(t) !== -1) {
        return true;
      }
    };
    genConstraints = function(l) {
      var bY, cX, cY, constraints, f, lX, r, s, tX, tY;
      constraints = {};
      s = device.iScale;
      cX = device.width / 2;
      cY = device.height / 2;
      tY = device.height / 4 * 3;
      bY = device.height / 4 * 3;
      lX = device.width / 4 * 3;
      tX = device.width / 4 * 3;
      r = function(n) {
        return Math.round(n);
      };
      f = function(n) {
        return Math.floor(n);
      };
      if (cX === l.midX / s || r(cX) === r(l.midX / s) || f(cX) === f(l.midX / s)) {
        constraints.align = 'horizontal';
      }
      if (cY === l.midY / s || r(cY) === r(l.midY / s) || f(cY) === f(l.midY / s)) {
        if (constraints.align === 'horizontal') {
          constraints.align = 'center';
        } else {
          constraints.align = 'vertical';
        }
      }
      if (l.x / s < lX) {
        constraints.leading = r(l.x / s);
      }
      if (l.x / s > tX) {
        constraints.trailing = r(l.parent.width / s - l.maxX / s);
      }
      if (l.y / s < tY) {
        constraints.top = r(l.y / s);
      }
      if (l.y / s > bY) {
        constraints.bottom = r(l.parent.height / s - l.maxY / s);
      }
      if (l.width / s === device.width) {
        constraints.leading = 0;
        constraints.trailing = 0;
      } else {
        constraints.width = l.width / s;
      }
      if (l.height / s === device.height) {
        constraints.top = 0;
        constraints.bottom = 0;
      } else {
        constraints.height = l.height / s;
      }
      return constraints;
    };
    genLayer = function(l, parent) {
      var props;
      props = {
        backgroundColor: 'transparent',
        name: l.name,
        image: l.image,
        superLayer: parent,
        constraints: genConstraints(l)
      };
      return new ios.View(props);
    };
    genAlert = function(l, nP) {
      var c, len2, n, props, q, ref;
      props = {
        actions: [],
        superLayer: nP
      };
      ref = l.children;
      for (q = 0, len2 = ref.length; q < len2; q++) {
        c = ref[q];
        n = c.name;
        if (found(n, 'title')) {
          props.title = getString(c);
        }
        if (found(n, 'message')) {
          props.message = getString(c);
        }
        if (found(n, 'action')) {
          props.actions.unshift(getColorString(c));
        }
        c.destroy();
      }
      return new ios.Alert(props);
    };
    genBanner = function(l, nP) {
      var c, len2, n, props, q, ref;
      props = {
        superLayer: nP
      };
      ref = l.children;
      for (q = 0, len2 = ref.length; q < len2; q++) {
        c = ref[q];
        n = c.name;
        if (found(n, 'app')) {
          props.app = getString(c);
        }
        if (found(n, 'title')) {
          props.title = getString(c);
        }
        if (found(n, 'message')) {
          props.message = getString(c);
        }
        if (found(n, 'time')) {
          props.time = getString(c);
        }
        if (found(n, 'icon')) {
          props.icon = getLayer(c);
        }
        c.destroy();
      }
      return new ios.Banner(props);
    };
    genButton = function(l, nP) {
      var c, len2, n, props, q, ref;
      props = {
        superLayer: nP,
        constraints: genConstraints(l)
      };
      ref = l.children;
      for (q = 0, len2 = ref.length; q < len2; q++) {
        c = ref[q];
        n = c.name;
        if (found(n, 'small')) {
          props.type = 'small';
        }
        if (found(n, 'big')) {
          props.type = 'big';
        }
        if (found(n, 'dark')) {
          props.style = 'dark';
        }
        if (found(n, 'label')) {
          props.text = getString(c);
          props.color = getCSS(c).color;
          props.fontSize = getCSS(c)['font-size'].replace('px', '');
        }
        c.destroy();
      }
      return new ios.Button(props);
    };
    genField = function(l, nP) {
      var c, len2, n, props, q, ref;
      props = {
        superLayer: nP,
        constraints: genConstraints(l)
      };
      ref = l.children;
      for (q = 0, len2 = ref.length; q < len2; q++) {
        c = ref[q];
        n = c.name;
        if (found(n, 'placeholder')) {
          props.placeholder = getString(c);
        }
        c.destroy();
      }
      return new ios.Field(props);
    };
    genKeyboard = function(l, nP) {
      var c, len2, n, props, q, ref;
      props = {
        superLayer: nP
      };
      ref = l.children;
      for (q = 0, len2 = ref.length; q < len2; q++) {
        c = ref[q];
        n = c.name;
        if (found(n, 'return')) {
          props.returnText = getString(c);
        }
        if (found(n, 'dark')) {
          props.style = 'dark';
        }
        c.destroy();
      }
      return new ios.Keyboard(props);
    };
    genNavBar = function(l, nP) {
      var c, len2, n, props, q, ref;
      props = {
        superLayer: nP
      };
      ref = l.children;
      for (q = 0, len2 = ref.length; q < len2; q++) {
        c = ref[q];
        n = c.name;
        if (found(n, 'title')) {
          props.title = getString(c);
          props.titleColor = getCSS(c).color;
        }
        if (found(n, 'right')) {
          props.right = getString(c);
          props.color = getCSS(c).color;
        }
        if (found(n, 'left')) {
          props.left = getString(c);
        }
        c.destroy();
      }
      return new ios.NavBar(props);
    };
    genSheet = function(l, nP) {
      var c, i, len2, n, props, q, ref;
      props = {
        actions: [],
        superLayer: nP
      };
      ref = l.children;
      for (i = q = 0, len2 = ref.length; q < len2; i = ++q) {
        c = ref[i];
        n = c.name;
        if (found(n, 'action')) {
          props.actions.push(getColorString(c));
        }
        if (found(n, 'exit')) {
          props.exit = getString(c);
        }
        c.destroy();
      }
      return new ios.Sheet(props);
    };
    genStatusBar = function(l, nP) {
      var c, len2, n, props, q, ref;
      props = {
        superLayer: nP
      };
      ref = l.children;
      for (q = 0, len2 = ref.length; q < len2; q++) {
        c = ref[q];
        n = c.name;
        if (found(n, 'carrier')) {
          props.carrier = getString(c);
        }
        if (found(n, 'battery')) {
          props.battery = getString(c).replace('%', '');
        }
        if (found(n, 'network')) {
          props.network = getString(c);
        }
        if (found(n, 'dark')) {
          props.style = 'light';
        }
        c.destroy();
      }
      return new ios.StatusBar(props);
    };
    genTabBar = function(l, nP) {
      var c, len2, len3, n, props, q, ref, ref1, t, tn, tprops, u;
      props = {
        tabs: [],
        superLayer: nP
      };
      ref = l.children;
      for (q = 0, len2 = ref.length; q < len2; q++) {
        c = ref[q];
        n = c.name;
        tprops = {};
        ref1 = c.children;
        for (u = 0, len3 = ref1.length; u < len3; u++) {
          t = ref1[u];
          tn = t.name;
          if (n === 'tab_active' && tn.indexOf('label') !== -1) {
            props.activeColor = getCSS(t).color;
          }
          if (n !== 'tab_active' && tn.indexOf('label') !== -1) {
            props.inactiveColor = getCSS(t).color;
          }
          if (found(tn, 'active') && tn.indexOf('inactive') === -1) {
            tprops.active = getLayer(t);
          }
          if (found(tn, 'inactive')) {
            tprops.inactive = getLayer(t);
          }
          if (found(tn, 'label')) {
            tprops.label = getString(t);
          }
          t.destroy();
        }
        props.tabs.unshift(new ios.Tab(tprops));
        c.destroy();
      }
      return new ios.TabBar(props);
    };
    genText = function(l, nP) {
      var css, k, keys, len2, props, q;
      props = {
        superLayer: nP,
        text: getString(l),
        constraints: genConstraints(l)
      };
      css = getCSS(l);
      keys = Object.keys(getCSS(l));
      for (q = 0, len2 = keys.length; q < len2; q++) {
        k = keys[q];
        if (found(k, 'font-family')) {
          props.fontFamily = css[k];
        }
        if (found(k, 'opacity')) {
          props.opacity = Number(css[k]);
        }
        if (found(k, 'color')) {
          props.color = css[k];
        }
        if (found(k, 'font-size')) {
          props.fontSize = css[k].replace('px', '');
        }
        if (found(k, 'letter-spacing')) {
          props.letterSpacing = css[k];
        }
        if (found(k, 'line-height')) {
          props.lineHeight = css[k].replace('px', '');
        }
      }
      return new ios.Text(props);
    };
    children = function(p, nP) {
      var c, len2, n, newLayer, q, ref, results;
      ref = p.children;
      results = [];
      for (q = 0, len2 = ref.length; q < len2; q++) {
        c = ref[q];
        n = c.name;
        newLayer = 0;
        if (c.name[0] === '_') {
          if (found(n, '_Alert')) {
            newLayer = genAlert(c, nP);
          }
          if (found(n, '_Banner')) {
            newLayer = genBanner(c, nP);
          }
          if (found(n, '_Button')) {
            newLayer = genButton(c, nP);
          }
          if (found(n, '_Field')) {
            newLayer = genField(c, nP);
          }
          if (found(n, '_Keyboard')) {
            newLayer = genKeyboard(c, nP);
          }
          if (found(n, '_NavBar')) {
            newLayer = genNavBar(c, nP);
          }
          if (found(n, '_Sheet')) {
            newLayer = genSheet(c, nP);
          }
          if (found(n, '_TabBar')) {
            newLayer = genTabBar(c, nP);
          }
          if (found(n, '_StatusBar')) {
            newLayer = new genStatusBar(c, nP);
          }
          if (found(n, '_Text')) {
            newLayer = genText(c, nP);
          }
          if (newLayer === void 0) {
            newLayer = genLayer(c, nP);
          }
        } else {
          newLayer = genLayer(c, nP);
        }
        newLayers[n] = newLayer;
        if (c.children) {
          children(c, newLayer);
        }
        results.push(c.destroy());
      }
      return results;
    };
    ios.l[b.name] = new Artboard(b);
    children(b, ios.l[b.name]);
    b.destroy();
    newArtboards.push(ios.l[b.name]);
    newLayers[b.name] = ios.l[b.name];
  }
  return newLayers;
};


},{"ios-kit":"ios-kit"}],"ios-kit-field":[function(require,module,exports){
var ios;

ios = require('ios-kit');

exports.defaults = {
  name: 'field',
  active: false,
  keyboard: true,
  placeholder: "Enter text",
  placeholderColor: "#999",
  superLayer: void 0,
  backgroundColor: "white",
  borderColor: "#CCCCCC",
  borderRadius: ios.px(5),
  borderWidth: ios.px(1),
  height: ios.px(30),
  width: ios.px(97),
  fontSize: 17,
  color: 'black',
  textConstraints: {
    leading: 4,
    align: "vertical"
  },
  constraints: {
    height: 30,
    width: 97,
    align: "center"
  }
};

exports.defaults.props = Object.keys(exports.defaults);

exports.create = function(array) {
  var field, setup;
  setup = ios.utils.setupComponent(array, exports.defaults);
  field = new ios.View({
    name: setup.name,
    constraints: setup.constraints,
    backgroundColor: setup.backgroundColor,
    borderColor: setup.borderColor,
    borderRadius: setup.borderRadius,
    borderWidth: setup.borderWidth,
    height: setup.height,
    width: setup.width,
    clip: true,
    superLayer: setup.superLayer
  });
  field.text = new ios.Text({
    superLayer: field,
    name: ".text",
    constraints: setup.textConstraints,
    text: '',
    fontSize: 17,
    color: setup.color
  });
  field.text.placeholder = new ios.Text({
    superLayer: field,
    name: ".placeholder",
    constraints: setup.textConstraints,
    text: setup.placeholder,
    fontSize: 17,
    color: setup.placeholderColor
  });
  field.active = setup.active;
  field.type = 'field';
  field.on(Events.TouchEnd, function() {
    if (field.active !== true) {
      field.active = true;
      if (setup.keyboard === true && field.keyboard === void 0) {
        field.keyboard = new ios.Keyboard({
          output: field.text,
          hidden: true
        });
      }
      if (typeof setup.keyboard === 'object') {
        field.input(setup.keyboard);
        field.keyboard = setup.keyboard;
      }
      field.keyboard.call();
      field.text.cursor = new ios.View({
        superLayer: field,
        name: "cursor",
        backgroundColor: ios.color("blue"),
        constraints: {
          width: 2,
          height: setup.fontSize + 6,
          leading: 4,
          align: "vertical"
        }
      });
      if (field.text.html !== setup.placeholder) {
        field.text.cursor.constraints.leading = field.text;
        ios.layout.set(field.text.cursor);
      }
      field.listeningToField = Utils.interval(.1, function() {
        if (field.active === false) {
          clearInterval(field.interval);
          clearInterval(field.listeningToField);
          return field.text.cursor.destroy();
        }
      });
      field.interval = Utils.interval(.6, function() {
        if (field.active) {
          if (field.text.cursor.opacity) {
            return field.text.cursor.animate({
              properties: {
                opacity: 0
              },
              time: .5
            });
          } else {
            return field.text.cursor.animate({
              properties: {
                opacity: 1
              },
              time: .5
            });
          }
        }
      });
      return field.text.on("change:html", function() {
        this.cursor.constraints.leading = this;
        if (this.html === '') {
          this.placeholder.visible = true;
        } else {
          this.placeholder.visible = false;
        }
        if (this.html.indexOf(this.placeholder) !== -1) {
          this.html = this.html.replace(this.placeholder, '');
        }
        return ios.layout.set(this.cursor);
      });
    }
  });
  field.input = function(keyboard) {
    return keyboard.output(field);
  };
  return field;
};


},{"ios-kit":"ios-kit"}],"ios-kit-keyboard":[function(require,module,exports){
var arrayOfCodes, codeMap, device, ios, letters, numbers, symbols;

ios = require('ios-kit');

exports.defaults = {
  style: "light",
  shift: true,
  output: void 0,
  returnText: "return",
  state: "letters",
  hidden: false,
  returnColor: "blue",
  superLayer: void 0
};

device = {
  "iphone-5": {
    popUpChar: 40,
    popUpTop: 4,
    height: 215,
    lineHeight: 36,
    letterKey: {
      keyTop: 6,
      height: 39,
      width: 26.5,
      borderRadius: 5,
      fontSize: 22.5
    },
    specialKeyWidth: 38.5,
    specialKeyHeight: 38.5,
    space: 5,
    row1: {
      leading: 0,
      top: 0
    },
    row2: {
      leading: 19,
      top: 16
    },
    row3: {
      top: 16,
      leading: 51
    },
    area: {
      top: 11,
      leading: 3,
      trailing: 3,
      bottom: 4
    },
    returnWidth: 75,
    popUpOffset: {
      x: 4,
      y: 30
    }
  },
  "iphone-6s": {
    popUpChar: 40,
    popUpTop: 6,
    height: 218,
    lineHeight: 40,
    letterKey: {
      keyTop: 10,
      height: 42,
      width: 31.5,
      borderRadius: 5,
      fontSize: 23,
      top: 10
    },
    specialKeyWidth: 42,
    specialKeyHeight: 42,
    space: 6,
    row1: {
      leading: 0,
      top: 0
    },
    row2: {
      leading: 22,
      top: 12
    },
    row3: {
      top: 12,
      leading: 59
    },
    area: {
      top: 12,
      leading: 3,
      trailing: 3,
      bottom: 4
    },
    returnWidth: 87,
    popUpOffset: {
      x: 5,
      y: 32
    }
  },
  "iphone-6s-plus": {
    popUpChar: 38,
    popUpTop: 6,
    height: 226,
    lineHeight: 42,
    letterKey: {
      keyTop: 12,
      height: 45,
      width: 36,
      borderRadius: 5,
      fontSize: 24,
      top: 10
    },
    specialKeyWidth: 45,
    specialKeyHeight: 45,
    space: 5,
    row1: {
      leading: 0,
      top: 0
    },
    row2: {
      leading: 20,
      top: 11
    },
    row3: {
      top: 11,
      leading: 63
    },
    area: {
      top: 8,
      leading: 4,
      trailing: 4,
      bottom: 5
    },
    returnWidth: 97,
    popUpOffset: {
      x: 10,
      y: 38
    }
  },
  "ipad": {
    height: 313,
    lineHeight: 55,
    letterKey: {
      height: 55,
      width: 56,
      borderRadius: 5,
      fontSize: 23
    },
    specialKeyWidth: 56,
    specialKeyHeight: 55,
    space: 12,
    returnWidth: 106,
    row1: {
      leading: 0,
      top: 0
    },
    row2: {
      leading: 30,
      top: 9
    },
    row3: {
      leading: 68,
      top: 9
    },
    area: {
      top: 55,
      leading: 6,
      trailing: 6,
      bottom: 8
    }
  },
  "ipad-pro": {
    height: 378,
    lineHeight: 61,
    letterKey: {
      height: 61,
      width: 63,
      borderRadius: 5,
      fontSize: 23
    },
    space: 7,
    returnWidth: 120,
    specialKeyHeight: 61,
    specialKeyWidth: 93,
    row1: {
      leading: 111,
      top: 53
    },
    row2: {
      leading: 126,
      top: 7
    },
    row3: {
      leading: 161,
      top: 7
    },
    area: {
      top: 56,
      leading: 4,
      trailing: 4,
      bottom: 4
    }
  }
};

codeMap = {
  8: 'delete',
  9: 'tab',
  13: 'return',
  16: 'shift',
  20: 'caps',
  32: 'space',
  27: "dismiss",
  33: "!",
  34: "\"",
  35: "#",
  36: "$",
  37: "%",
  38: "&",
  39: "\'",
  40: "(",
  41: ")",
  42: "*",
  43: "+",
  44: ",",
  45: "-",
  47: "/",
  46: ".",
  48: "0",
  49: "!",
  50: "@",
  51: "#",
  52: "$",
  53: "%",
  54: "^",
  55: "&",
  56: "*",
  57: "(",
  48: ")",
  59: "_",
  60: "<",
  61: "=",
  62: ">",
  63: "?",
  64: "@",
  65: "A",
  66: "B",
  67: "C",
  68: "D",
  69: "E",
  70: "F",
  71: "G",
  72: "H",
  73: "I",
  74: "J",
  75: "K",
  76: "L",
  77: "M",
  78: "N",
  79: "O",
  80: "P",
  81: "Q",
  82: "R",
  83: "S",
  84: "T",
  85: "U",
  86: "V",
  87: "W",
  88: "X",
  89: "Y",
  90: "Z",
  91: 'cmd',
  219: "[",
  92: "\\",
  221: "]",
  94: "^",
  95: "_",
  96: "`",
  97: "a",
  98: "b",
  99: "c",
  100: "d",
  101: "e",
  102: "f",
  103: "g",
  104: "h",
  105: "i",
  106: "j",
  107: "k",
  108: "l",
  109: "m",
  110: "n",
  111: "o",
  112: "p",
  113: "q",
  114: "r",
  115: "s",
  116: "t",
  117: "u",
  118: "v",
  119: "w",
  120: "x",
  121: "y",
  122: "z",
  123: "{",
  124: "|",
  125: "}",
  126: "~",
  186: ":",
  187: "+",
  188: "<",
  190: ">",
  191: "?",
  189: "_",
  192: "~",
  219: "{",
  220: "\|",
  221: "}",
  222: "&rdquo;"
};

arrayOfCodes = Object.keys(codeMap);

letters = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];

numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "/", ":", ";", "(", ")", "$", "&", "@", "\"", ".", ",", "?", "!", "′"];

symbols = ["[", "]", "{", "}", "#", "%", "^", "*", "+", "=", "_", "\\", "|", "~", "<", ">", "€", "£", "¥", "•"];

exports.defaults.props = Object.keys(exports.defaults);

exports.create = function(obj) {
  var Delete, Dismiss, Emoji, Icon, IconWithState, Key, Letter, Numbers, Return, Shift, Space, SpecialKey, Tab, board, capitalizeKeys, colors, handleKeyColor, popUp, setup, specs, style;
  setup = ios.utils.setupComponent(obj, exports.defaults);
  style = {
    light: {
      backgroundColor: "#D1D5DA",
      color: "#000",
      specialKeyBG: "#ACB3BD",
      keyBG: "#F7F7F7",
      shadowY: ios.px(1),
      shadowColor: "#898B8F",
      returnBG: ios.color(setup.returnColor)
    },
    dark: {
      backgroundColor: "rgba(0,0,0,.7)",
      color: "#FFF",
      specialKeyBG: "rgba(67,67,67,.8)",
      keyBG: "rgba(105,105,105,.8)",
      shadowY: ios.px(1),
      shadowColor: "rgba(0,0,0,.4)",
      returnBG: ios.color(setup.returnColor)
    }
  };
  specs = device[ios.device.name];
  colors = style[setup.style];
  device;
  board = new ios.View({
    name: "Keyboard",
    superLayer: setup.superLayer,
    backgroundColor: style[setup.style].backgroundColor,
    y: ios.device.height,
    constraints: {
      leading: 0,
      trailing: 0,
      bottom: -1 * specs.height,
      height: specs.height
    }
  });
  ios.utils.bgBlur(board);
  board.output = function(obj) {
    if (board.target) {
      if (board.target.type === 'field') {
        board.target.active = false;
      }
    }
    board.target = obj;
    if (board.target) {
      if (board.target.type === 'field') {
        return board.target.active = true;
      }
    }
  };
  board.hidden = setup.hidden;
  if (board.hidden === false) {
    board.constraints.bottom = 0;
    ios.layout.set(board);
  }
  board.call = function() {
    board.y = ios.device.height;
    board.constraints.bottom = 0;
    if (board.hidden) {
      board.hidden = false;
      ios.layout.animate({
        target: board,
        time: .5,
        curve: 'ease-in-out'
      });
    }
    return board.bringToFront();
  };
  board.dismiss = function() {
    board.constraints.bottom = -1 * ios.pt(board.height);
    board.hidden = true;
    board.target.active = false;
    return ios.layout.animate({
      target: board,
      time: .5,
      curve: 'ease-in-out'
    });
  };
  board["delete"] = function() {
    var isSpace, layer, text;
    layer = "";
    if (board.target) {
      if (board.target.type === 'field') {
        layer = board.target.text;
      } else {
        layer = board.target;
      }
      isSpace = layer.html.slice(layer.html.length - 5, +(layer.html.length - 1) + 1 || 9e9);
      if (isSpace !== 'nbsp;') {
        text = layer.html.slice(0, -1);
        return layer.html = text;
      } else {
        text = layer.html.slice(0, -6);
        return layer.html = text;
      }
    }
  };
  board.capsLock = function() {
    board.isCapsLock = true;
    board.isCapital = true;
    board.keys.shift.icon.toggle('off');
    handleKeyColor(board.keys.shift);
    if (ios.device.name === 'ipad-pro') {
      board.keys.shiftalt.icon.toggle('off');
      return handleKeyColor(board.keys.shiftalt);
    }
  };
  board.output(setup.output);
  board.keysArray = [];
  board.keys = {};
  board.isCapital = setup.shift;
  board.area = new ios.View({
    name: ".area",
    superLayer: board,
    constraints: specs.area,
    backgroundColor: "transparent"
  });
  Key = function(obj) {
    var key;
    key = new ios.View({
      name: ".keys." + obj.name,
      constraints: obj.constraints,
      superLayer: board.area,
      borderRadius: ios.px(specs.letterKey.borderRadius),
      shadowY: colors.shadowY,
      shadowColor: colors.shadowColor
    });
    key.style.fontFamily = "-apple-system, Helvetica, Arial, sans-serif";
    key.on(Events.TouchStart, function(event) {
      return event.preventDefault();
    });
    return key;
  };
  Letter = function(obj) {
    var key;
    key = new Key(obj);
    key.backgroundColor = colors.keyBG;
    key.html = obj.letter;
    key.color = colors.color;
    key.style.textAlign = "center";
    key.style.lineHeight = ios.px(specs.lineHeight) + "px";
    key.style.fontSize = ios.px(specs.letterKey.fontSize) + "px";
    key.value = obj.letter;
    if (key.value === "space") {
      key.value = "&nbsp;";
    }
    if (ios.isPad()) {
      key.down = function() {
        key.backgroundColor = colors.specialKeyBG;
        if (board.target) {
          return ios.utils.write(board.target, key.value);
        }
      };
      key.up = function() {
        key.backgroundColor = colors.keyBG;
        if (board.isCapital && board.isCapsLock !== true) {
          board.isCapital = false;
          capitalizeKeys();
          board.keys.shift.up();
          if (ios.isPad()) {
            return board.keys.shiftalt.up();
          }
        }
      };
      key.on(Events.TouchStart, function() {
        return key.down();
      });
      key.on(Events.TouchEnd, function() {
        return key.up();
      });
    } else {
      if (key.value !== '&nbsp;') {
        key.down = function() {
          board.popUp.visible = true;
          board.bringToFront();
          board.popUp.bringToFront();
          board.popUp.midX = key.midX;
          board.popUp.maxY = key.maxY;
          board.popUp.text.html = key.value;
          if (board.target) {
            return ios.utils.write(board.target, key.value);
          }
        };
        key.up = function() {
          board.popUp.visible = false;
          if (board.isCapital && board.capsLock !== true) {
            board.isCapital = false;
            capitalizeKeys();
            return board.keys.shift.up();
          }
        };
        key.on(Events.TouchStart, function() {
          return key.down();
        });
        key.on(Events.TouchEnd, function() {
          return key.up();
        });
      } else {
        key.down = function() {
          key.backgroundColor = colors.specialKeyBG;
          if (board.target) {
            return ios.utils.write(board.target, key.value);
          }
        };
        key.up = function() {
          return key.backgroundColor = colors.keyBG;
        };
        key.on(Events.TouchStart, function() {
          return key.down();
        });
        key.on(Events.TouchEnd, function() {
          return key.up();
        });
      }
    }
    return key;
  };
  SpecialKey = function(obj) {
    var key;
    key = new Key(obj);
    key.backgroundColor = colors.specialKeyBG;
    key.color = colors.color;
    key.style.textAlign = "center";
    if (ios.device.name === 'ipad-pro') {
      key.style.fontSize = ios.px(18) + "px";
    } else {
      key.style.fontSize = ios.px(16) + "px";
    }
    return key;
  };
  Icon = function(obj) {
    var icon;
    icon = new ios.View({
      name: 'icon',
      backgroundColor: "transparent",
      superLayer: obj.superLayer,
      constraints: {
        align: 'center'
      }
    });
    icon.props = {
      height: obj.icon.height,
      width: obj.icon.width,
      html: obj.icon.svg
    };
    ios.utils.changeFill(icon, colors.color);
    return icon;
  };
  IconWithState = function(obj) {
    var icon;
    icon = new ios.View({
      name: 'icon',
      backgroundColor: "transparent",
      superLayer: obj.superLayer,
      constraints: {
        align: 'center'
      }
    });
    icon.toggle = function(state) {
      if (state === void 0) {
        if (icon.state === 'on') {
          state = 'off';
        } else {
          state = 'on';
        }
      }
      if (state === "on") {
        if (ios.device.name !== 'ipad-pro') {
          icon.html = obj.on.svg;
          icon.width = obj.on.width;
          icon.height = obj.on.height;
        }
        icon.state = 'on';
      } else {
        if (ios.device.name !== 'ipad-pro') {
          icon.html = obj.off.svg;
          icon.width = obj.on.width;
          icon.height = obj.on.height;
        }
        icon.state = 'off';
      }
      return ios.utils.changeFill(icon, colors.color);
    };
    if (obj.state) {
      icon.toggle('on');
    } else {
      icon.toggle('off');
    }
    return icon;
  };
  capitalizeKeys = function() {
    var j, key, len, ref, results;
    ref = board.keysArray;
    results = [];
    for (j = 0, len = ref.length; j < len; j++) {
      key = ref[j];
      if (board.isCapital) {
        if (key.html.length === 1 && key.html.match(/[a-z]/i)) {
          key.html = key.html.toUpperCase();
          key.value = key.html;
        }
        if (key.alt) {
          key.alt.destroy();
          key.alt = void 0;
        }
        if (key.height > ios.px(46)) {
          key.style.lineHeight = ios.px(specs.letterKey.height) + 'px';
          key.style.fontSize = ios.px(23) + 'px';
        } else {
          if (ios.device.name === 'ipad-pro') {
            key.style.lineHeight = ios.px(46) + 'px';
          } else {
            key.style.lineHeight = ios.px(specs.lineHeight) + 'px';
          }
          key.style.fontSize = ios.px(20) + 'px';
        }
        results.push(key.value = key.html);
      } else {
        if (key.html.length === 1 && key.html.match(/[a-z]/i)) {
          key.html = key.html.toLowerCase();
          results.push(key.value = key.html);
        } else {
          if (key.alt === void 0) {
            key.alt = new ios.Text({
              text: "",
              superLayer: key,
              color: colors.color,
              constraints: {
                align: "horizontal",
                bottom: 4
              },
              fontSize: specs.letterKey.fontSize
            });
            if (board.topRow) {
              if (board.topRow.indexOf(key) !== -1) {
                key.style.lineHeight = ios.px(23) + 'px';
                key.style.fontSize = ios.px(16) + 'px';
                key.alt.style.fontSize = ios.px(16) + 'px';
              } else {
                key.style.lineHeight = ios.px(36) + 'px';
                key.style.fontSize = ios.px(20) + 'px';
                key.alt.style.fontSize = ios.px(20) + 'px';
                key.alt.constraints.bottom = 8;
              }
            }
            switch (key.value) {
              case "&lt;":
                key.alt.html = ".";
                break;
              case "&gt;":
                key.alt.html = ",";
                break;
              case "<":
                key.alt.html = ".";
                break;
              case ">":
                key.alt.html = ",";
                break;
              case "?":
                key.alt.html = ".";
                break;
              case "{":
                key.alt.html = "[";
                break;
              case "}":
                key.alt.html = "}";
                break;
              case "\|":
                key.alt.html = "\\";
                break;
              case "~":
                key.alt.html = "`";
                break;
              case "!":
                key.alt.html = ".";
                break;
              case "@":
                key.alt.html = "2";
                break;
              case "#":
                key.alt.html = "3";
                break;
              case "$":
                key.alt.html = "4";
                break;
              case "%":
                key.alt.html = "5";
                break;
              case "^":
                key.alt.html = "6";
                break;
              case "&amp;":
                key.alt.html = "7";
                break;
              case "&":
                key.alt.html = "7";
                break;
              case "*":
                key.alt.html = "8";
                break;
              case "(":
                key.alt.html = "9";
                break;
              case ")":
                key.alt.html = "0";
                break;
              case "_":
                key.alt.html = "-";
                break;
              case "+":
                key.alt.html = "=";
                break;
              default:
                key.alt.html = "&prime;";
            }
            ios.layout.set(key.alt);
            if (ios.device.name === 'ipad-pro' && key.value === '!') {
              key.alt.html = '1';
            }
            if (ios.device.name === 'ipad-pro' && key.value === '?') {
              key.alt.html = '/';
            }
            if (ios.device.name === 'ipad-pro' && key.value === ':') {
              key.alt.html = ';';
            }
            if (ios.device.name === 'ipad-pro' && key.value === '&rdquo;') {
              key.alt.html = '&prime;';
            }
            results.push(key.value = key.alt.html);
          } else {
            results.push(void 0);
          }
        }
      }
    }
    return results;
  };
  handleKeyColor = function(key) {
    if (ios.isPhone) {
      if (key.icon.state === 'on') {
        return key.backgroundColor = colors.keyBG;
      } else {
        return key.backgroundColor = colors.specialKeyBG;
      }
    }
  };
  Space = function(obj) {
    var key;
    key = new Letter(obj);
    key.html = 'space';
    key.backgroundColor = colors.keyBG;
    key.style.lineHeight = ios.px(specs.specialKeyHeight) + "px";
    key.style.fontSize = ios.px(16) + 'px';
    return key;
  };
  Shift = function(obj) {
    var key;
    key = new SpecialKey(obj);
    key.icon = new IconWithState({
      superLayer: key,
      state: obj.shift,
      on: ios.utils.svg(ios.assets.shift.on),
      off: ios.utils.svg(ios.assets.shift.off)
    });
    handleKeyColor(key);
    key.on(Events.TouchEnd, function() {
      this.icon.toggle();
      handleKeyColor(key);
      if (this.icon.state === 'on') {
        board.isCapital = true;
      } else {
        board.isCapital = false;
      }
      return capitalizeKeys();
    });
    key.down = function() {
      key.icon.toggle('on');
      handleKeyColor(key);
      board.isCapital = true;
      return capitalizeKeys();
    };
    key.up = function() {
      key.icon.toggle('off');
      handleKeyColor(key);
      board.isCapital = false;
      return capitalizeKeys();
    };
    ios.layout.set(key.icon);
    if (ios.isPad()) {
      key.on(Events.TouchEnd, function() {
        if (this.icon.state === 'on') {
          board.keys.shift.icon.toggle('on');
          board.keys.shiftalt.icon.toggle('on');
        } else {
          board.keys.shift.icon.toggle('off');
          board.keys.shiftalt.icon.toggle('off');
        }
        handleKeyColor(board.keys.shift);
        return handleKeyColor(board.keys.shiftalt);
      });
    }
    return key;
  };
  Delete = function(obj) {
    var key;
    key = new SpecialKey(obj);
    key.icon = new IconWithState({
      superLayer: key,
      on: ios.utils.svg(ios.assets["delete"].on),
      off: ios.utils.svg(ios.assets["delete"].off)
    });
    key.fire = function() {
      return board["delete"]();
    };
    key.down = function() {
      key.icon.toggle('on');
      handleKeyColor(key);
      return key.fire();
    };
    key.up = function() {
      key.icon.toggle('off');
      return handleKeyColor(key);
    };
    key.on(Events.TouchStart, function() {
      return key.down();
    });
    key.on(Events.TouchEnd, function() {
      return key.up();
    });
    return key;
  };
  Numbers = function(obj) {
    var key;
    key = new SpecialKey(obj);
    if (ios.isPhone()) {
      key.html = '123';
    } else {
      key.html = '.?123';
    }
    key.style.lineHeight = ios.px(specs.specialKeyHeight) + "px";
    return key;
  };
  Emoji = function(obj) {
    var key;
    key = new SpecialKey(obj);
    key.icon = new Icon({
      superLayer: key,
      icon: ios.utils.svg(ios.assets.emoji)
    });
    return key;
  };
  Return = function(obj) {
    var key;
    key = new SpecialKey(obj);
    key.backgroundColor = colors.returnBG;
    key.html = setup.returnText;
    key.style.lineHeight = ios.px(specs.specialKeyHeight) + "px";
    key.color = ios.utils.autoColor(colors.returnBG);
    key.down = function() {
      var nothingHappens;
      return nothingHappens = true;
    };
    key.up = function() {
      board.dismiss();
      if (board.target) {
        if (board.target.parent) {
          return board.target.parent.active = false;
        }
      }
    };
    key.on(Events.TouchEnd, function() {
      return key.down();
    });
    key.on(Events.TouchStart, function() {
      return key.up();
    });
    return key;
  };
  Dismiss = function(obj) {
    var key;
    key = new SpecialKey(obj);
    key.icon = new Icon({
      superLayer: key,
      icon: ios.utils.svg(ios.assets.keyboard)
    });
    key.icon.scale = .8;
    key.icon.constraints = {
      bottom: 12,
      trailing: 12
    };
    ios.layout.set(key.icon);
    key.down = function() {
      return board.dismiss();
    };
    key.up = function() {
      var nothingHappens;
      return nothingHappens = false;
    };
    key.on(Events.TouchEnd, function() {
      return key.down();
    });
    return key;
  };
  Tab = function(obj) {
    var key;
    key = new SpecialKey(obj);
    key.html = 'tab';
    key.style.lineHeight = ios.px(70) + 'px';
    key.style.textAlign = 'left';
    key.style.paddingLeft = ios.px(12) + 'px';
    return key;
  };
  board.switchLetters = function() {
    var i, j, k, key, l, len, len1, row1Break, row2Break, topKey, topLetters;
    row1Break = 10;
    row2Break = 19;
    if (ios.isPad()) {
      letters.push('!');
      letters.push('?');
    }
    if (ios.device.name === "ipad-pro") {
      letters = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "{", "}", "\|", "a", "s", "d", "f", "g", "h", "j", "k", "l", ":", "&rdquo;", "z", "x", "c", "v", "b", "n", "m", "<", ">", "?"];
      topLetters = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+"];
      row1Break = 13;
      row2Break = 24;
    }
    for (i = j = 0, len = letters.length; j < len; i = ++j) {
      l = letters[i];
      key = new Letter({
        name: l,
        constraints: {
          height: specs.letterKey.height,
          width: specs.letterKey.width
        },
        letter: l
      });
      if (l === 'w' || l === 'r' || l === 'y' || l === 'i' || l === 'p') {
        key.constraints.width = key.constraints.width + 1;
      }
      board.keys[l] = key;
      board.keysArray.push(key);
      if (i === 0) {
        key.constraints.leading = specs.row1.leading;
        key.constraints.top = specs.row1.top;
      }
      if (i > 0 && i < row1Break) {
        key.constraints.leading = [board.keysArray[i - 1], specs.space];
        key.constraints.top = specs.row1.top;
      }
      if (i === row1Break) {
        key.constraints.leading = specs.row2.leading;
        key.constraints.top = [board.keysArray[0], specs.row2.top];
      }
      if (i > row1Break && i < row2Break) {
        key.constraints.leading = [board.keysArray[i - 1], specs.space];
        key.constraints.top = [board.keysArray[0], specs.row2.top];
      }
      if (i === row2Break) {
        key.constraints.leading = specs.row3.leading;
        key.constraints.top = [board.keysArray[row1Break], specs.row3.top];
      }
      if (i > row2Break) {
        key.constraints.leading = [board.keysArray[i - 1], specs.space];
        key.constraints.top = [board.keysArray[row1Break], specs.row3.top];
      }
      ios.layout.set(key);
    }
    board.keys.shift = new Shift({
      name: "shift",
      shift: setup.shift,
      constraints: {
        height: specs.specialKeyHeight,
        width: specs.specialKeyWidth,
        bottomEdges: board.keys.z
      }
    });
    board.keys["delete"] = new Delete({
      name: "delete",
      constraints: {
        height: specs.specialKeyHeight,
        width: specs.specialKeyWidth,
        bottomEdges: board.keys.z,
        trailing: 0
      }
    });
    board.keys.numbers = new Numbers({
      name: "numbers",
      constraints: {
        height: specs.specialKeyHeight,
        width: specs.specialKeyWidth,
        bottom: 0,
        leading: 0
      }
    });
    board.keys.emoji = new Emoji({
      name: "emoji",
      constraints: {
        height: specs.specialKeyHeight,
        width: specs.specialKeyWidth,
        leading: [board.keys.numbers, specs.space],
        bottom: 0
      }
    });
    board.keys["return"] = new Return({
      name: "return",
      constraints: {
        bottom: 0,
        trailing: 0,
        width: specs.returnWidth,
        height: specs.specialKeyHeight
      }
    });
    board.keys.space = new Space({
      name: "space",
      letter: "space",
      constraints: {
        leading: [board.keys.emoji, specs.space],
        trailing: [board.keys["return"], specs.space],
        bottom: 0,
        height: specs.specialKeyHeight
      }
    });
    if (ios.isPad()) {
      board.keys["return"].constraints.bottom = void 0;
      board.keys["return"].constraints.bottomEdges = board.keysArray[row1Break];
      board.keys["delete"].constraints.top = 0;
      board.keys["delete"].constraints.bottomEdges = void 0;
      board.keys["delete"].constraints.width = 61;
      board.keys.shiftalt = new Shift({
        name: "shiftalt",
        shift: setup.shift,
        constraints: {
          height: specs.specialKeyHeight,
          width: 76,
          bottomEdges: board.keys.z,
          trailing: 0
        }
      });
      board.keys.dismiss = new Dismiss({
        name: "dismiss",
        constraints: {
          height: specs.specialKeyHeight,
          width: specs.specialKeyWidth,
          bottom: 0,
          trailing: 0
        }
      });
      board.keys.numbersalt = new Numbers({
        name: "numbersalt",
        constraints: {
          height: specs.specialKeyHeight,
          width: 93,
          bottom: 0,
          trailing: [board.keys.dismiss, specs.space]
        }
      });
      board.keys.space.html = "";
      board.keys.space.constraints.trailing = [board.keys.numbersalt, specs.space];
      ios.layout.set();
    }
    board.topRow = [];
    if (ios.device.name === 'ipad-pro') {
      for (i = k = 0, len1 = topLetters.length; k < len1; i = ++k) {
        l = topLetters[i];
        topKey = new Letter({
          letter: l,
          name: l,
          constraints: {
            height: 46,
            width: 63,
            top: 0
          }
        });
        if (i === 0) {
          topKey.constraints.leading = 0;
        } else {
          topKey.constraints.leading = [board.topRow[i - 1], specs.space];
        }
        topKey.style.lineHeight = ios.px(46) + 'px';
        ios.layout.set(topKey);
        board.topRow.push(topKey);
        board.keysArray.push(topKey);
        board.keys[l] = topKey;
      }
      board.keys["delete"].icon.destroy();
      board.keys["delete"].html = 'delete';
      board.keys["delete"].style.lineHeight = ios.px(53) + 'px';
      board.keys["delete"].style.textAlign = 'right';
      board.keys["delete"].style.paddingRight = ios.px(12) + 'px';
      board.keys["delete"].constraints = {
        top: 0,
        trailing: 0,
        height: 46,
        width: 106
      };
      board.keys.shift.icon.destroy();
      board.keys.shift.html = 'shift';
      board.keys.shift.style.lineHeight = ios.px(70) + 'px';
      board.keys.shift.style.textAlign = 'left';
      board.keys.shift.style.paddingLeft = ios.px(12) + 'px';
      board.keys.shift.constraints.width = 154;
      board.keys.shiftalt.icon.destroy();
      board.keys.shiftalt.html = 'shift';
      board.keys.shiftalt.style.lineHeight = ios.px(70) + 'px';
      board.keys.shiftalt.style.textAlign = 'right';
      board.keys.shiftalt.style.paddingRight = ios.px(12) + 'px';
      board.keys.shiftalt.constraints.width = 155;
      board.keys.emoji.icon.constraints = {
        leading: 15,
        bottom: 11
      };
      board.keys.emoji.constraints = {
        width: 144,
        height: 61,
        leading: 0,
        bottom: 0
      };
      ios.layout.set();
      board.keys.numbersalt.constraints.width = 93;
      board.keys.dismiss.constraints.width = 93;
      board.keys.com = new Letter({
        name: '.com',
        letter: '.com',
        constraints: {
          height: specs.letterKey.height,
          width: specs.letterKey.width,
          bottom: 0,
          trailing: [board.keys.numbersalt, specs.space]
        }
      });
      board.keys.com.style.fontSize = ios.px(16) + 'px';
      board.keys.numbers.constraints = {
        width: 143,
        height: 61,
        leading: [board.keys.emoji, specs.space]
      };
      board.keys.numbers.style.lineHeight = ios.px(70) + 'px';
      board.keys.numbers.style.textAlign = 'left';
      board.keys.numbers.style.paddingLeft = ios.px(12) + 'px';
      board.keys["return"].style.lineHeight = ios.px(70) + 'px';
      board.keys["return"].style.textAlign = 'right';
      board.keys["return"].style.paddingRight = ios.px(12) + 'px';
      board.keys.space.constraints.leading = [board.keys.numbers, specs.space];
      board.keys.space.constraints.trailing = [board.keys.com, specs.space];
      board.keys.caps = new Shift({
        name: 'caps',
        caps: true,
        constraints: {
          height: specs.specialKeyHeight,
          width: 119,
          bottomEdges: board.keysArray[row1Break]
        }
      });
      board.keys.caps.icon.destroy();
      board.keys.caps.html = 'caps lock';
      board.keys.caps.style.lineHeight = ios.px(70) + 'px';
      board.keys.caps.style.textAlign = 'left';
      board.keys.caps.style.paddingLeft = ios.px(12) + 'px';
      board.keys.caps.down = function() {
        if (board.isCapsLock) {
          return board.isCapsLock = false;
        } else {
          return board.capsLock();
        }
      };
      board.keys.caps.on(Events.TouchEnd, function() {
        return board.keys.caps.down();
      });
      board.keys.caps.up = function() {
        var nothingHappens;
        return nothingHappens = true;
      };
      board.keys.tab = new Tab({
        name: 'tab',
        constraints: {
          height: specs.specialKeyHeight,
          width: 106,
          bottomEdges: board.keysArray[0]
        }
      });
      return ios.layout.set();
    }
  };
  if (ios.isPhone()) {
    popUp = ios.utils.svg(ios.assets.keyPopUp[setup.style][ios.device.name]);
    board.popUp = new Layer({
      height: popUp.height,
      width: popUp.width,
      backgroundColor: 'transparent',
      name: '.popUp',
      superLayer: board.area,
      visible: false
    });
    board.popUp.svg = new Layer({
      html: popUp.svg,
      height: popUp.height,
      width: popUp.width,
      superLayer: board.popUp,
      name: '.svg',
      backgroundColor: 'transparent'
    });
    board.popUp.text = new ios.Text({
      text: 'A',
      superLayer: board.popUp,
      fontSize: specs.popUpChar,
      fontWeight: 300,
      color: colors.color,
      textAlign: 'center',
      constraints: {
        align: 'horizontal',
        top: specs.popUpTop,
        width: ios.pt(popUp.width)
      }
    });
    board.popUp.center();
    switch (ios.device.name) {
      case 'iphone-6s-plus':
        board.popUp.width = board.popUp.width - 18;
        board.popUp.height = board.popUp.height - 24;
        board.popUp.svg.x = ios.px(-3);
        board.popUp.svg.y = ios.px(-3);
        break;
      case 'iphone-6s':
        board.popUp.width = board.popUp.width - 12;
        board.popUp.height = board.popUp.height - 12;
        board.popUp.svg.x = ios.px(-3);
        board.popUp.svg.y = ios.px(-2);
        break;
      case 'iphone-5':
        board.popUp.width = board.popUp.width - 12;
        board.popUp.height = board.popUp.height - 12;
        board.popUp.svg.x = ios.px(-3);
        board.popUp.svg.y = ios.px(-2);
    }
    capitalizeKeys();
  }
  board["switch"] = function(state) {
    switch (state) {
      case "letters":
        return board.switchLetters();
    }
  };
  board["switch"]("letters");
  document.addEventListener('keydown', function(e) {
    var key;
    if (arrayOfCodes.indexOf(e.keyCode.toString()) !== -1) {
      key = board.keys[codeMap[e.keyCode].toLowerCase()];
      if (key) {
        key.down();
      }
      if (ios.isPad()) {
        if (key === board.keys.shift || key === board.keys.shiftalt) {
          board.keys.shift.down();
          board.keys.shiftalt.icon.toggle('on');
          return handleKeyColor(board.keys.shiftalt);
        }
      }
    }
  });
  document.addEventListener('keyup', function(e) {
    var key;
    if (arrayOfCodes.indexOf(e.keyCode.toString()) !== -1) {
      key = board.keys[codeMap[e.keyCode].toLowerCase()];
      if (key) {
        key.up();
      }
      if (ios.isPad()) {
        if (key === board.keys.shift || key === board.keys.shiftalt) {
          board.keys.shift.up();
          board.keys.shiftalt.icon.toggle('off');
          return handleKeyColor(board.keys.shiftalt);
        }
      }
    }
  });
  capitalizeKeys();
  return board;
};


},{"ios-kit":"ios-kit"}],"ios-kit-layout":[function(require,module,exports){
var ios, layout;

ios = require('ios-kit');

exports.defaults = {
  animations: {
    target: void 0,
    constraints: void 0,
    curve: "ease-in-out",
    curveOptions: void 0,
    time: 1,
    delay: 0,
    repeat: void 0,
    colorModel: void 0,
    stagger: void 0,
    fadeOut: false,
    fadeIn: false
  }
};

layout = function(array) {
  var blueprint, i, index, j, k, l, layer, len, len1, len2, newConstraint, props, ref, ref1, setup, targetLayers;
  setup = {};
  targetLayers = [];
  blueprint = [];
  if (array) {
    ref = Object.keys(exports.defaults.animations);
    for (j = 0, len = ref.length; j < len; j++) {
      i = ref[j];
      if (array[i]) {
        setup[i] = array[i];
      } else {
        setup[i] = exports.defaults.animations[i];
      }
    }
  }
  if (setup.target) {
    if (setup.target.length) {
      targetLayers = setup.target;
    } else {
      targetLayers.push(setup.target);
    }
  } else {
    targetLayers = Framer.CurrentContext.layers;
  }
  if (setup.target) {
    if (setup.constraints) {
      ref1 = Object.keys(setup.constraints);
      for (k = 0, len1 = ref1.length; k < len1; k++) {
        newConstraint = ref1[k];
        setup.target.constraints[newConstraint] = setup.constraints[newConstraint];
      }
    }
  }
  for (index = l = 0, len2 = targetLayers.length; l < len2; index = ++l) {
    layer = targetLayers[index];
    layer.calculatedPosition = {};
    if (layer.constraints) {
      props = {};
      layer.superFrame = {};
      if (layer.superLayer) {
        layer.superFrame.height = layer.superLayer.height;
        layer.superFrame.width = layer.superLayer.width;
      } else {
        layer.superFrame.height = ios.device.height;
        layer.superFrame.width = ios.device.width;
      }
      if (layer.constraints.leading !== void 0 && layer.constraints.trailing !== void 0) {
        layer.constraints.autoWidth = {};
      }
      if (layer.constraints.top !== void 0 && layer.constraints.bottom !== void 0) {
        layer.constraints.autoHeight = {};
      }
      if (layer.constraints.width !== void 0) {
        props.width = ios.utils.px(layer.constraints.width);
      } else {
        props.width = layer.width;
      }
      if (layer.constraints.height !== void 0) {
        props.height = ios.utils.px(layer.constraints.height);
      } else {
        props.height = layer.height;
      }
      if (layer.constraints.leading !== void 0) {
        if (layer.constraints.leading === parseInt(layer.constraints.leading, 10)) {
          props.x = ios.utils.px(layer.constraints.leading);
        } else {
          if (layer.constraints.leading.length === void 0) {
            props.x = layer.constraints.leading.calculatedPosition.x + layer.constraints.leading.calculatedPosition.width;
          } else {
            props.x = layer.constraints.leading[0].calculatedPosition.x + layer.constraints.leading[0].calculatedPosition.width + ios.utils.px(layer.constraints.leading[1]);
          }
        }
      }
      if (layer.constraints.autoWidth !== void 0) {
        layer.constraints.autoWidth.startX = props.x;
      }
      if (layer.constraints.trailing !== void 0) {
        if (layer.constraints.trailing === parseInt(layer.constraints.trailing, 10)) {
          props.x = layer.superFrame.width - ios.utils.px(layer.constraints.trailing) - props.width;
        } else {
          if (layer.constraints.trailing.length === void 0) {
            props.x = layer.constraints.trailing.calculatedPosition.x - props.width;
          } else {
            props.x = layer.constraints.trailing[0].calculatedPosition.x - ios.utils.px(layer.constraints.trailing[1]) - props.width;
          }
        }
      }
      if (layer.constraints.autoWidth !== void 0) {
        layer.constraints.autoWidth.calculatedPositionX = props.x;
        props.x = layer.constraints.autoWidth.startX;
        props.width = layer.constraints.autoWidth.calculatedPositionX - layer.constraints.autoWidth.startX + props.width;
      }
      if (layer.constraints.top !== void 0) {
        if (layer.constraints.top === parseInt(layer.constraints.top, 10)) {
          props.y = ios.utils.px(layer.constraints.top);
        } else {
          if (layer.constraints.top.length === void 0) {
            props.y = layer.constraints.top.calculatedPosition.y + layer.constraints.top.calculatedPosition.height;
          } else {
            props.y = layer.constraints.top[0].calculatedPosition.y + layer.constraints.top[0].calculatedPosition.height + ios.utils.px(layer.constraints.top[1]);
          }
        }
      }
      if (layer.constraints.autoHeight !== void 0) {
        layer.constraints.autoHeight.startY = props.y;
      }
      if (layer.constraints.bottom !== void 0) {
        if (layer.constraints.bottom === parseInt(layer.constraints.bottom, 10)) {
          props.y = layer.superFrame.height - ios.utils.px(layer.constraints.bottom) - props.height;
        } else {
          if (layer.constraints.bottom.length === void 0) {
            props.y = layer.constraints.bottom.calculatedPosition.y - props.height;
          } else {
            props.y = layer.constraints.bottom[0].calculatedPosition.y - ios.utils.px(layer.constraints.bottom[1]) - props.height;
          }
        }
      }
      if (layer.constraints.autoHeight !== void 0) {
        layer.constraints.autoHeight.calculatedPositionY = props.y;
        props.height = layer.constraints.autoHeight.calculatedPositionY - layer.constraints.autoHeight.startY + props.height;
        props.y = layer.constraints.autoHeight.startY;
      }
      if (layer.constraints.align !== void 0) {
        if (layer.constraints.align === "horizontal") {
          props.x = layer.superFrame.width / 2 - props.width / 2;
        }
        if (layer.constraints.align === "vertical") {
          props.y = layer.superFrame.height / 2 - props.height / 2;
        }
        if (layer.constraints.align === "center") {
          props.x = layer.superFrame.width / 2 - props.width / 2;
          props.y = layer.superFrame.height / 2 - props.height / 2;
        }
      }
      if (layer.constraints.horizontalCenter !== void 0) {
        props.x = layer.constraints.horizontalCenter.calculatedPosition.x + (layer.constraints.horizontalCenter.calculatedPosition.width - props.width) / 2;
      }
      if (layer.constraints.verticalCenter !== void 0) {
        props.y = layer.constraints.verticalCenter.calculatedPosition.y + (layer.constraints.verticalCenter.calculatedPosition.height - props.height) / 2;
      }
      if (layer.constraints.center !== void 0) {
        props.x = layer.constraints.center.calculatedPosition.x + (layer.constraints.center.calculatedPosition.width - props.width) / 2;
        props.y = layer.constraints.center.calculatedPosition.y + (layer.constraints.center.calculatedPosition.height - props.height) / 2;
      }
      if (layer.constraints.leadingEdges !== void 0) {
        props.x = layer.constraints.leadingEdges.calculatedPosition.x;
      }
      if (layer.constraints.trailingEdges !== void 0) {
        props.x = layer.constraints.trailingEdges.calculatedPosition.x - props.width + layer.constraints.trailingEdges.calculatedPosition.width;
      }
      if (layer.constraints.topEdges !== void 0) {
        props.y = layer.constraints.topEdges.calculatedPosition.y;
      }
      if (layer.constraints.bottomEdges !== void 0) {
        props.y = layer.constraints.bottomEdges.calculatedPosition.y - props.height + layer.constraints.bottomEdges.calculatedPosition.height;
      }
      layer.calculatedPosition = props;
    } else {
      layer.calculatedPosition = layer.props;
    }
    blueprint.push(layer);
  }
  return blueprint;
};

exports.set = function(array) {
  var blueprint, i, index, j, k, key, layer, len, len1, props, ref, results, setup;
  setup = {};
  props = {};
  if (array) {
    ref = Object.keys(exports.defaults.animations);
    for (j = 0, len = ref.length; j < len; j++) {
      i = ref[j];
      if (array[i]) {
        setup[i] = array[i];
      } else {
        setup[i] = exports.defaults.animations[i];
      }
    }
  }
  blueprint = layout(array);
  results = [];
  for (index = k = 0, len1 = blueprint.length; k < len1; index = ++k) {
    layer = blueprint[index];
    results.push((function() {
      var l, len2, ref1, results1;
      ref1 = Object.keys(layer.calculatedPosition);
      results1 = [];
      for (l = 0, len2 = ref1.length; l < len2; l++) {
        key = ref1[l];
        results1.push(layer[key] = layer.calculatedPosition[key]);
      }
      return results1;
    })());
  }
  return results;
};

exports.animate = function(array) {
  var blueprint, delay, i, index, j, k, layer, len, len1, props, ref, results, setup, stag;
  setup = {};
  props = {};
  if (array) {
    ref = Object.keys(exports.defaults.animations);
    for (j = 0, len = ref.length; j < len; j++) {
      i = ref[j];
      if (array[i]) {
        setup[i] = array[i];
      } else {
        setup[i] = exports.defaults.animations[i];
      }
    }
  }
  blueprint = layout(array);
  results = [];
  for (index = k = 0, len1 = blueprint.length; k < len1; index = ++k) {
    layer = blueprint[index];
    delay = setup.delay;
    if (setup.stagger) {
      stag = setup.stagger;
      delay = (index * stag) + delay;
    }
    if (setup.fadeOut) {
      if (layer === setup.fadeOut) {
        layer.calculatedPosition.opacity = 0;
      }
    }
    if (setup.fadeIn) {
      layer.calculatedPosition.opacity = 1;
    }
    layer.animate({
      properties: layer.calculatedPosition,
      time: setup.time,
      delay: delay,
      curve: setup.curve,
      repeat: setup.repeat,
      colorModel: setup.colorModel,
      curveOptions: setup.curveOptions
    });
    results.push(layer.calculatedPosition = props);
  }
  return results;
};


},{"ios-kit":"ios-kit"}],"ios-kit-library":[function(require,module,exports){
var ios, layer;

ios = require("ios-kit");

layer = new Layer;

exports.layerProps = Object.keys(layer.props);

exports.layerProps.push("superLayer");

exports.layerProps.push("constraints");

exports.layerStyles = Object.keys(layer.style);

layer.destroy();

exports.assets = {
  sheetTip: "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='27px' height='13px' viewBox='0 0 27 13' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'> <!-- Generator: Sketch 39.1 (31720) - http://www.bohemiancoding.com/sketch --> <title>Triangle</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='iOS-Kit' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'> <g id='Navigation-Bar-Copy' transform='translate(-2634.000000, -124.000000)' fill='#FFFFFF'> <path d='M2644.71916,125.883834 C2646.25498,124.291136 2648.74585,124.291992 2650.28084,125.883834 L2661,137 L2634,137 L2644.71916,125.883834 Z' id='Triangle'></path> </g> </g> </svg>",
  bluetooth: "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='7px' height='13px' viewBox='0 0 8 15' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'> <!-- Generator: Sketch 3.6.1 (26313) - http://www.bohemiancoding.com/sketch --> <title>Bluetooth</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='Status-Icons-(White)' transform='translate(-137.000000, 0.000000)' fill='#FFF'> <path d='M140.5,14.5 L145,10.25 L141.8,7.5 L145,4.75 L140.5,0.5 L140.5,6.07142857 L137.8,3.75 L137,4.5 L140.258333,7.375 L137,10.25 L137.8,11 L140.5,8.67857143 L140.5,14.5 Z M141.5,3 L143.366667,4.75 L141.5,6.25 L141.5,3 Z M141.5,8.5 L143.366667,10.25 L141.5,12 L141.5,8.5 Z' id='Bluetooth'></path> </g> </svg>",
  batteryHigh: "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='25px' height='10px' viewBox='0 0 25 10' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'> <!-- Generator: Sketch 3.7.2 (28276) - http://www.bohemiancoding.com/sketch --> <title>Battery</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='Symbols' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'> <g id='Status-Bar/Black/100%' transform='translate(-345.000000, -5.000000)' fill='#030303'> <path d='M346.493713,5.5 C345.668758,5.5 345,6.16802155 345,7.00530324 L345,13.4946968 C345,14.3260528 345.67338,15 346.493713,15 L366.006287,15 C366.831242,15 367.5,14.3319784 367.5,13.4946968 L367.5,7.00530324 C367.5,6.17394722 366.82662,5.5 366.006287,5.5 L346.493713,5.5 Z M368,8.5 L368,12 L368.75,12 C369.164214,12 369.5,11.6644053 369.5,11.25774 L369.5,9.24225998 C369.5,8.83232111 369.167101,8.5 368.75,8.5 L368,8.5 Z M346.508152,6 C345.951365,6 345.5,6.45699692 345.5,7.00844055 L345.5,13.4915594 C345.5,14.0485058 345.949058,14.5 346.508152,14.5 L365.991848,14.5 C366.548635,14.5 367,14.0430031 367,13.4915594 L367,7.00844055 C367,6.45149422 366.550942,6 365.991848,6 L346.508152,6 Z M346.506744,6.5 C346.226877,6.5 346,6.71637201 346,6.99209595 L346,13.5079041 C346,13.7796811 346.230225,14 346.506744,14 L365.993256,14 C366.273123,14 366.5,13.783628 366.5,13.5079041 L366.5,6.99209595 C366.5,6.72031886 366.269775,6.5 365.993256,6.5 L346.506744,6.5 Z' id='Battery'></path> </g> </g> </svg>",
  batteryMid: "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='25px' height='10px' viewBox='0 0 25 10' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'> <!-- Generator: Sketch 3.7.2 (28276) - http://www.bohemiancoding.com/sketch --> <title>Battery</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='Symbols' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'> <g id='Status-Bar/Black/Low-Power' transform='translate(-345.000000, -5.000000)' fill='#030303'> <path d='M346.493713,5.5 C345.668758,5.5 345,6.16802155 345,7.00530324 L345,13.4946968 C345,14.3260528 345.67338,15 346.493713,15 L366.006287,15 C366.831242,15 367.5,14.3319784 367.5,13.4946968 L367.5,7.00530324 C367.5,6.17394722 366.82662,5.5 366.006287,5.5 L346.493713,5.5 Z M368,8.5 L368,12 L368.75,12 C369.164214,12 369.5,11.6644053 369.5,11.25774 L369.5,9.24225998 C369.5,8.83232111 369.167101,8.5 368.75,8.5 L368,8.5 Z M346.508152,6 C345.951365,6 345.5,6.45699692 345.5,7.00844055 L345.5,13.4915594 C345.5,14.0485058 345.949058,14.5 346.508152,14.5 L365.991848,14.5 C366.548635,14.5 367,14.0430031 367,13.4915594 L367,7.00844055 C367,6.45149422 366.550942,6 365.991848,6 L346.508152,6 Z M346.50965,6.5 C346.228178,6.5 346,6.71637201 346,6.99209595 L346,13.5079041 C346,13.7796811 346.227653,14 346.50965,14 L356,14 L356,6.5 L346.50965,6.5 Z' id='Battery'></path> </g> </g> </svg>",
  batteryLow: "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='25px' height='10px' viewBox='0 0 25 10' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'> <!-- Generator: Sketch 3.7.2 (28276) - http://www.bohemiancoding.com/sketch --> <title>Battery</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='Symbols' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'> <g id='Status-Bar/Black/20%' transform='translate(-345.000000, -5.000000)' fill='#030303'> <path d='M346.493713,5.5 C345.668758,5.5 345,6.16802155 345,7.00530324 L345,13.4946968 C345,14.3260528 345.67338,15 346.493713,15 L366.006287,15 C366.831242,15 367.5,14.3319784 367.5,13.4946968 L367.5,7.00530324 C367.5,6.17394722 366.82662,5.5 366.006287,5.5 L346.493713,5.5 L346.493713,5.5 Z M368,8.5 L368,12 L368.75,12 C369.164214,12 369.5,11.6644053 369.5,11.25774 L369.5,9.24225998 C369.5,8.83232111 369.167101,8.5 368.75,8.5 L368,8.5 L368,8.5 Z M346.508152,6 C345.951365,6 345.5,6.45699692 345.5,7.00844055 L345.5,13.4915594 C345.5,14.0485058 345.949058,14.5 346.508152,14.5 L365.991848,14.5 C366.548635,14.5 367,14.0430031 367,13.4915594 L367,7.00844055 C367,6.45149422 366.550942,6 365.991848,6 L346.508152,6 Z M346.490479,6.5 C346.219595,6.5 346,6.71637201 346,6.99209595 L346,13.5079041 C346,13.7796811 346.215057,14 346.490479,14 L350,14 L350,6.5 L346.490479,6.5 Z' id='Battery'></path> </g> </g> </svg>",
  bannerBG: {
    "iphone-5": "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='320px' height='68px' viewBox='0 0 320 68' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'> <!-- Generator: Sketch 3.6.1 (26313) - http://www.bohemiancoding.com/sketch --> <title>iphone5</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0.9'> <g id='iPhone-5/5S/5C' fill='#1A1A1C'> <path d='M0,0 L320,0 L320,68 L0,68 L0,0 Z M142,61.0048815 C142,59.897616 142.896279,59 144.0024,59 L176.9976,59 C178.103495,59 179,59.8938998 179,61.0048815 L179,61.9951185 C179,63.102384 178.103721,64 176.9976,64 L144.0024,64 C142.896505,64 142,63.1061002 142,61.9951185 L142,61.0048815 Z' id='iphone5'></path> </g> </g> </svg>",
    "iphone-6s": "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='375px' height='68px' viewBox='0 0 375 68' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'> <!-- Generator: Sketch 3.6 (26304) - http://www.bohemiancoding.com/sketch --> <title>Notification background</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0.9'> <g id='iOS8-Push-Notification' transform='translate(-58.000000, -23.000000)' fill='#1A1A1C'> <g transform='translate(58.000000, 7.000000)' id='Notification-container'> <g> <path d='M0,16 L375,16 L375,84 L0,84 L0,16 Z M169,77.0048815 C169,75.897616 169.896279,75 171.0024,75 L203.9976,75 C205.103495,75 206,75.8938998 206,77.0048815 L206,77.9951185 C206,79.102384 205.103721,80 203.9976,80 L171.0024,80 C169.896505,80 169,79.1061002 169,77.9951185 L169,77.0048815 Z' id='Notification-background'></path> </g> </g> </g> </g> </svg>",
    "iphone-6s-plus": "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='414px' height='68px' viewBox='0 0 414 68' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'> <!-- Generator: Sketch 3.6 (26304) - http://www.bohemiancoding.com/sketch --> <title>Notification background Copy</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0.9'> <g id='iOS8-Push-Notification' transform='translate(-43.000000, -74.000000)' fill='#1A1A1C'> <g transform='translate(43.000000, 74.000000)' id='Notification-container'> <g> <path d='M0,0 L414,0 L414,68 L0,68 L0,0 Z M189,61.0048815 C189,59.897616 189.896279,59 191.0024,59 L223.9976,59 C225.103495,59 226,59.8938998 226,61.0048815 L226,61.9951185 C226,63.102384 225.103721,64 223.9976,64 L191.0024,64 C189.896505,64 189,63.1061002 189,61.9951185 L189,61.0048815 Z' id='Notification-background-Copy'></path> </g> </g> </g> </g> </svg>",
    "ipad": "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='768px' height='68px' viewBox='0 0 768 68' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'> <!-- Generator: Sketch 3.6.1 (26313) - http://www.bohemiancoding.com/sketch --> <title>ipad-portrait</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0.9'> <g id='iPad-Portrait' fill='#1A1A1C'> <path d='M0,0 L768,0 L768,68 L0,68 L0,0 Z M366,61.0048815 C366,59.897616 366.896279,59 368.0024,59 L400.9976,59 C402.103495,59 403,59.8938998 403,61.0048815 L403,61.9951185 C403,63.102384 402.103721,64 400.9976,64 L368.0024,64 C366.896505,64 366,63.1061002 366,61.9951185 L366,61.0048815 Z' id='ipad-portrait'></path> </g> </g> </svg>",
    "ipad-pro": "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='1024px' height='68px' viewBox='0 0 1024 68' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'> <!-- Generator: Sketch 3.6.1 (26313) - http://www.bohemiancoding.com/sketch --> <title>ipad-pro-portrait</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0.9'> <g id='iPad-Pro-Portrait' fill='#1A1A1C'> <path d='M0,0 L1024,0 L1024,68 L0,68 L0,0 Z M494,61.0048815 C494,59.897616 494.896279,59 496.0024,59 L528.9976,59 C530.103495,59 531,59.8938998 531,61.0048815 L531,61.9951185 C531,63.102384 530.103721,64 528.9976,64 L496.0024,64 C494.896505,64 494,63.1061002 494,61.9951185 L494,61.0048815 Z' id='ipad-pro-portrait'></path> </g> </g> </svg>"
  },
  emojiCodes: ["98 80", "98 AC", "98 81", "98 82", "98 83", "98 84", "98 85", "98 86", "98 87", "98 89", "98 8a", "99 82", "99 83", "E2 98 BA EF B8 8F", "98 8B", "98 8C", "98 8D", "98 98", "98 97", "98 99", "98 9A", "98 9C", "98 9D", "98 9B", "A4 91", "A4 93", "98 8E", "A4 97", "98 8F", "98 B6", "98 90", "98 91", "98 92", "99 84", "A4 94", "98 B3", "98 9E", "98 9F", "98 A0", "98 A1", "98 94", "98 95", "99 81", "E2 98 B9 EF B8 8F", "98 A3", "98 96", "98 AB", "98 A9", "98 A4", "98 AE", "98 B1", "98 A8", "98 B0", "98 AF", "98 A6", "98 A7", "98 A2", "98 A5", "98 AA", "98 93", "98 AD", "98 B5", "98 B2", "A4 90", "98 B7", "A4 92", "A4 95", "98 B4", "92 A4", "92 A9", "98 88", "91 BF", "91 B9", "91 BA", "92 80", "91 BB", "91 BD", "A4 96", "98 BA", "98 B8", "98 B9", "98 BB", "98 BC", "98 BD", "99 80", "98 BF", "98 BE", "99 8C", "91 8F", "91 8B", "91 8D", "91 8E", "91 8A", "E2 9C 8A", "E2 9C 8C EF B8 8F", "91 8C", "E2 9C 8B", "91 90", "92 AA", "99 8F", "E2 98 9D EF B8 8F", "91 86", "91 87", "91 88", "91 89", "96 95", "96 90", "A4 98", "96 96", "E2 9C 8D EF B8 8F", "92 85", "91 84", "91 85", "91 82", "91 83", "91 81", "91 80", "91 A4", "91 A5", "97 A3", "91 B6", "91 A6", "91 A7", "91 A8", "91 A9", "91 B1", "91 B4", "91 B5", "91 B2", "91 B3", "91 AE", "91 B7", "92 82", "95 B5", "8E 85", "91 BC", "91 B8", "91 B0", "9A B6", "8F 83", "92 83", "91 AF", "91 AB", "91 AC", "91 AD", "99 87", "92 81", "99 85", "99 86", "99 8B", "99 8E", "99 8D", "92 87", "92 86", "92 91", "91 A9 E2 80 8D E2 9D A4 EF B8 8F E2 80 8D F0 9F 91 A9", "91 A8 E2 80 8D E2 9D A4 EF B8 8F E2 80 8D F0 9F 91 A8", "92 8F", "91 A9 E2 80 8D E2 9D A4 EF B8 8F E2 80 8D F0 9F 92 8B E2 80 8D F0 9F 91 A9", "91 A8 E2 80 8D E2 9D A4 EF B8 8F E2 80 8D F0 9F 92 8B E2 80 8D F0 9F 91 A8", "91 AA", "91 A8 E2 80 8D F0 9F 91 A9 E2 80 8D F0 9F 91 A7", "91 A8 E2 80 8D F0 9F 91 A9 E2 80 8D F0 9F 91 A7 E2 80 8D F0 9F 91 A6", "91 A8 E2 80 8D F0 9F 91 A9 E2 80 8D F0 9F 91 A6 E2 80 8D F0 9F 91 A6", "91 A8 E2 80 8D F0 9F 91 A9 E2 80 8D F0 9F 91 A7 E2 80 8D F0 9F 91 A7", "91 A9 E2 80 8D F0 9F 91 A9 E2 80 8D F0 9F 91 A6", "91 A9 E2 80 8D F0 9F 91 A9 E2 80 8D F0 9F 91 A7", "91 A9 E2 80 8D F0 9F 91 A9 E2 80 8D F0 9F 91 A7 E2 80 8D F0 9F 91 A6", "91 A9 E2 80 8D F0 9F 91 A9 E2 80 8D F0 9F 91 A6 E2 80 8D F0 9F 91 A6", "91 A9 E2 80 8D F0 9F 91 A9 E2 80 8D F0 9F 91 A7 E2 80 8D F0 9F 91 A7", "91 A8 E2 80 8D F0 9F 91 A8 E2 80 8D F0 9F 91 A6", "91 A8 E2 80 8D F0 9F 91 A8 E2 80 8D F0 9F 91 A7", "91 A8 E2 80 8D F0 9F 91 A8 E2 80 8D F0 9F 91 A7 E2 80 8D F0 9F 91 A6", "91 A8 E2 80 8D F0 9F 91 A8 E2 80 8D F0 9F 91 A6 E2 80 8D F0 9F 91 A6", "91 A8 E2 80 8D F0 9F 91 A8 E2 80 8D F0 9F 91 A7 E2 80 8D F0 9F 91 A7", "91 9A", "91 95", "91 96", "91 94", "91 97", "91 99", "91 98", "92 84", "92 8B", "91 A3", "91 A0", "91 A1", "91 A2", "91 9E", "91 9F", "91 92", "8E A9", "E2 9B 91", "8E 93", "91 91", "8E 92", "91 9D", "91 9B", "91 9C", "92 BC", "91 93", "95 B6", "92 8D", "8C 82", "9B 91", "90 B6", "90 B1", "90 AD", "90 B9", "90 B0", "90 BB", "90 BC", "90 A8", "90 AF", "A6 81", "90 AE", "90 B7", "90 BD", "90 B8", "90 99", "90 B5", "99 88", "99 89", "99 8A", "90 92", "90 94", "90 A7", "90 A6", "90 A4", "90 A3", "90 A5", "90 BA", "90 97", "90 B4", "A6 84", "90 9D", "90 9B", "90 8C", "90 9E", "90 9C", "95 B7", "A6 82", "A6 80", "90 8D", "90 A2", "90 A0", "90 9F", "90 A1", "90 AC", "90 B3", "90 8B", "90 8A", "90 86", "90 85", "90 83", "90 82", "90 84", "90 AA", "90 AB", "90 98", "90 90", "90 8F", "90 91", "90 8E", "90 96", "90 80", "90 81", "90 93", "A6 83", "95 8A", "90 95", "90 A9", "90 88", "90 87", "90 BF", "90 BE", "90 89", "90 B2", "8C B5", "8E 84", "8C B2", "8C B3", "8C B4", "8C B1", "8C BF", "E2 98 98", "8D 80", "8E 8D", "8E 8B", "8D 83", "8D 82", "8D 81", "8C BE", "8C BA", "8C BA", "8C BB", "8C B9", "8C B7", "8C BC", "8C B8", "92 90", "8D 84", "8C B0", "8E 83", "90 9A", "95 B8", "8C 8E", "8C 8D", "8C 8F", "8C 95", "8C 96", "8C 97", "8C 98", "8C 91", "8C 92", "8C 93", "8C 94", "8C 9A", "8C 9D", "8C 9B", "8C 9C", "8C 9E", "8C 99", "E2 AD 90 EF B8 8F", "8C 9F", "92 AB", "E2 9C A8", "E2 98 84 EF B8 8F", "E2 98 80 EF B8 8F", "8C A4", "E2 9B 85 EF B8 8F", "8C A5", "8C A6", "E2 98 81 EF B8 8F", "8C A7", "E2 9B 88", "8C A9", "E2 9A A1 EF B8 8F", "94 A5", "92 A5", "E2 9D 84 EF B8 8F", "8C A8", "E2 98 83 EF B8 8F", "E2 9B 84 EF B8 8F", "8C AC", "92 A8", "8C AA", "8C AB", "E2 98 82 EF B8 8F", "E2 98 94 EF B8 8F", "92 A7", "92 A6", "8C 8A", "9B 91", "9B 91", "8D 8F", "8D 8E", "8D 90", "8D 8A", "8D 8B", "8D 8C", "8D 89", "8D 87", "8D 93", "8D 88", "8D 92", "8D 91", "8D 8D", "8D 85", "8D 86", "8C B6", "8C BD", "8D A0", "8D AF", "8D 9E", "A7 80", "8D 97", "8D 96", "8D A4", "8D B3", "8D 94", "8D 9F", "8C AD", "8D 95", "8D 9D", "8C AE", "8C AF", "8D 9C", "8D B2", "8D A5", "8D A3", "8D B1", "8D 9B", "8D 99", "8D 9A", "8D 98", "8D A2", "8D A1", "8D A7", "8D A8", "8D A6", "8D B0", "8E 82", "8D AE", "8D AC", "8D AD", "8D AB", "8D BF", "8D A9", "8D AA", "8D BA", "8D BB", "8D B7", "8D B8", "8D B9", "8D BE", "8D B6", "8D B5", "E2 98 95 EF B8 8F", "8D BC", "8D B4", "8D BD", "9B 91", "9B 91", "9B 91", "E2 9A BD EF B8 8F", "8F 80", "8F 88", "E2 9A BE EF B8 8F", "8E BE", "8F 90", "8F 89", "8E B1", "E2 9B B3 EF B8 8F", "8F 8C", "8F 93", "8F B8", "8F 92", "8F 91", "8F 8F", "8E BF", "E2 9B B7", "8F 82", "E2 9B B8", "8F B9", "8E A3", "9A A3", "8F 8A", "8F 84", "9B 80", "E2 9B B9", "8F 8B", "9A B4", "9A B5", "8F 87", "95 B4", "8F 86", "8E BD", "8F 85", "8E 96", "8E 97", "8F B5", "8E AB", "8E 9F", "8E AD", "8E A8", "8E AA", "8E A4", "8E A7", "8E BC", "8E B9", "8E B7", "8E BA", "8E B8", "8E BB", "8E AC", "8E AE", "91 BE", "8E AF", "8E B2", "8E B0", "8E B3", "9B 91", "9B 91", "9B 91", "9A 97", "9A 95", "9A 99", "9A 8C", "9A 8E", "8F 8E", "9A 93", "9A 91", "9A 92", "9A 90", "9A 9A", "9A 9B", "9A 9C", "8F 8D", "9A B2", "9A A8", "9A 94", "9A 8D", "9A 98", "9A 96", "9A A1", "9A A0", "9A AF", "9A 83", "9A 8B", "9A 9D", "9A 84", "9A 85", "9A 88", "9A 9E", "9A 82", "9A 86", "9A 87", "9A 8A", "9A 89", "9A 81", "9B A9", "E2 9C 88 EF B8 8F", "9B AB", "9B AC", "E2 9B B5 EF B8 8F", "9B A5", "9A A4", "E2 9B B4", "9B B3", "9A 80", "9B B0", "92 BA", "E2 9A 93 EF B8 8F", "9A A7", "E2 9B BD EF B8 8F", "9A 8F", "9A A6", "9A A5", "8F 81", "9A A2", "8E A1", "8E A2", "8E A0", "8F 97", "8C 81", "97 BC", "8F AD", "E2 9B B2 EF B8 8F", "8E 91", "E2 9B B0", "8F 94", "97 BB", "8C 8B", "97 BE", "8F 95", "E2 9B BA EF B8 8F", "8F 9E", "9B A3", "9B A4", "8C 85", "8C 84", "8F 9C", "8F 96", "8F 9D", "8C 87", "8C 86", "8F 99", "8C 83", "8C 89", "8C 8C", "8C A0", "8E 87", "8E 86", "8C 88", "8F 98", "8F B0", "8F AF", "8F 9F", "97 BD", "8F A0", "8F A1", "8F 9A", "8F A2", "8F AC", "8F A3", "8F A4", "8F A5", "8F A6", "8F A8", "8F AA", "8F AB", "8F A9", "92 92", "8F 9B", "E2 9B AA EF B8 8F", "95 8C", "95 8D", "95 8B", "E2 9B A9", "E2 8C 9A EF B8 8F", "93 B1", "93 B2", "92 BB", "E2 8C A8 EF B8 8F", "96 A5", "96 A8", "96 B1", "96 B2", "95 B9", "97 9C", "92 BD", "92 BE", "92 BF", "93 80", "93 BC", "93 B7", "93 B8", "93 B9", "8E A5", "93 BD", "8E 9E", "93 9E", "E2 98 8E EF B8 8F", "93 9F", "93 A0", "93 BA", "93 BB", "8E 99", "8E 9A", "8E 9B", "E2 8F B1", "E2 8F B2", "E2 8F B0", "95 B0", "E2 8F B3", "E2 8C 9B EF B8 8F", "93 A1", "94 8B", "94 8C", "92 A1", "94 A6", "95 AF", "97 91", "9B A2", "92 B8", "92 B5", "92 B4", "92 B6", "92 B7", "92 B0", "92 B3", "92 8E", "E2 9A 96", "94 A7", "94 A8", "E2 9A 92", "9B A0", "E2 9B 8F", "94 A9", "E2 9A 99", "E2 9B 93", "94 AB", "92 A3", "94 AA", "97 A1", "E2 9A 94", "9B A1", "9A AC", "E2 98 A0 EF B8 8F", "E2 9A B0", "E2 9A B1", "8F BA", "94 AE", "93 BF", "92 88", "E2 9A 97", "94 AD", "94 AC", "95 B3", "92 8A", "92 89", "8C A1", "8F B7", "94 96", "9A BD", "9A BF", "9B 81", "94 91", "97 9D", "9B 8B", "9B 8C", "9B 8F", "9A AA", "9B 8E", "96 BC", "97 BA", "E2 9B B1", "97 BF", "9B 8D", "8E 88", "8E 8F", "8E 80", "8E 81", "8E 8A", "8E 89", "8E 8E", "8E 90", "8E 8C", "8F AE", "E2 9C 89 EF B8 8F", "93 A9", "93 A8", "93 A7", "92 8C", "93 AE", "93 AA", "93 AB", "93 AC", "93 AD", "93 A6", "93 AF", "93 A5", "93 A4", "93 9C", "93 83", "93 91", "93 8A", "93 88", "93 89", "93 84", "93 85", "93 86", "97 93", "93 87", "97 83", "97 B3", "97 84", "93 8B", "97 92", "93 81", "93 82", "97 82", "97 9E", "93 B0", "93 93", "93 95", "93 97", "93 98", "93 99", "93 94", "93 92", "93 9A", "93 96", "94 97", "93 8E", "96 87", "E2 9C 82 EF B8 8F", "93 90", "93 8F", "93 8C", "93 8D", "9A A9", "8F B3", "8F B4", "94 90", "94 92", "94 93", "94 8F", "96 8A", "96 8B", "E2 9C 92 EF B8 8F", "93 9D", "E2 9C 8F EF B8 8F", "96 8D", "96 8C", "94 8D", "94 8E", "9B 91", "9B 91", "E2 9D A4 EF B8 8F", "92 9B", "92 9A", "92 99", "92 9C", "92 94", "E2 9D A3 EF B8 8F", "92 95", "92 9E", "92 93", "92 97", "92 96", "92 98", "92 9D", "92 9F", "E2 98 AE EF B8 8F", "E2 9C 9D EF B8 8F", "E2 98 AA EF B8 8F", "95 89", "E2 98 B8 EF B8 8F", "E2 9C A1 EF B8 8F", "94 AF", "95 8E", "E2 98 AF EF B8 8F", "E2 98 A6 EF B8 8F", "9B 90", "E2 9B 8E", "E2 99 88 EF B8 8F", "E2 99 89 EF B8 8F", "E2 99 8A EF B8 8F", "E2 99 8B EF B8 8F", "E2 99 8C EF B8 8F", "E2 99 8D EF B8 8F", "E2 99 8E EF B8 8F", "E2 99 8F EF B8 8F", "E2 99 90 EF B8 8F", "E2 99 91 EF B8 8F", "E2 99 92 EF B8 8F", "E2 99 93 EF B8 8F", "86 94", "E2 9A 9B", "88 B3", "88 B9", "E2 98 A2 EF B8 8F", "E2 98 A3 EF B8 8F", "93 B4", "93 B3", "88 B6", "88 9A EF B8 8F", "88 B8", "88 BA", "88 B7 EF B8 8F", "E2 9C B4 EF B8 8F", "86 9A", "89 91", "92 AE", "89 90", "E3 8A 99 EF B8 8F", "E3 8A 97 EF B8 8F", "88 B4", "88 B5", "88 B2", "85 B0 EF B8 8F", "85 B1 EF B8 8F", "86 8E", "86 91", "85 BE EF B8 8F", "86 98", "E2 9B 94 EF B8 8F", "93 9B", "9A AB", "E2 9D 8C", "E2 AD 95 EF B8 8F", "92 A2", "E2 99 A8 EF B8 8F", "9A B7", "9A AF", "9A B3", "9A B1", "94 9E", "93 B5", "E2 9D 97 EF B8 8F", "E2 9D 95", "E2 9D 93", "E2 9D 94", "E2 80 BC EF B8 8F", "E2 81 89 EF B8 8F", "92 AF", "94 85", "94 86", "94 B1", "E2 9A 9C", "E3 80 BD EF B8 8F", "E2 9A A0 EF B8 8F", "9A B8", "94 B0", "E2 99 BB EF B8 8F", "88 AF EF B8 8F", "92 B9", "E2 9D 87 EF B8 8F", "E2 9C B3 EF B8 8F", "E2 9D 8E", "E2 9C 85", "92 A0", "8C 80", "E2 9E BF", "8C 90", "E2 93 82 EF B8 8F", "8F A7", "88 82 EF B8 8F", "9B 82", "9B 83", "9B 84", "9B 85", "E2 99 BF EF B8 8F", "9A AD", "9A BE", "85 BF EF B8 8F", "9A B0", "9A B9", "9A BA", "9A BC", "9A BB", "9A AE", "8E A6", "93 B6", "88 81", "86 96", "86 97", "86 99", "86 92", "86 95", "86 93", "30 EF B8 8F E2 83 A3", "31 EF B8 8F E2 83 A3", "32 EF B8 8F E2 83 A3", "33 EF B8 8F E2 83 A3", "34 EF B8 8F E2 83 A3", "35 EF B8 8F E2 83 A3", "36 EF B8 8F E2 83 A3", "37 EF B8 8F E2 83 A3", "38 EF B8 8F E2 83 A3", "39 EF B8 8F E2 83 A3", "94 9F", "94 A2", "E2 96 B6 EF B8 8F", "E2 8F B8", "E2 8F AF", "E2 8F B9", "E2 8F BA", "E2 8F AD", "E2 8F AE", "E2 8F A9", "E2 8F AA", "94 80", "94 81", "94 82", "E2 97 80 EF B8 8F", "94 BC", "94 BD", "E2 8F AB", "E2 8F AC", "E2 9E A1 EF B8 8F", "E2 AC 85 EF B8 8F", "E2 AC 86 EF B8 8F", "E2 AC 87 EF B8 8F", "E2 86 97 EF B8 8F", "E2 86 98 EF B8 8F", "E2 86 99 EF B8 8F", "E2 86 96 EF B8 8F", "E2 86 95 EF B8 8F", "E2 86 94 EF B8 8F", "94 84", "E2 86 AA EF B8 8F", "E2 86 A9 EF B8 8F", "E2 A4 B4 EF B8 8F", "E2 A4 B5 EF B8 8F", "23 EF B8 8F E2 83 A3", "2A EF B8 8F E2 83 A3", "E2 84 B9 EF B8 8F", "94 A4", "94 A1", "94 A0", "94 A3", "8E B5", "8E B6", "E3 80 B0 EF B8 8F", "E2 9E B0", "E2 9C 94 EF B8 8F", "94 83", "E2 9E 95", "E2 9E 96", "E2 9E 97", "E2 9C 96 EF B8 8F", "92 B2", "92 B1", "C2 A9 EF B8 8F", "C2 AE EF B8 8F", "E2 84 A2 EF B8 8F", "94 9A", "94 99", "94 9B", "94 9D", "94 9C", "E2 98 91 EF B8 8F", "94 98", "E2 9A AA EF B8 8F", "E2 9A AB EF B8 8F", "94 B4", "94 B5", "94 B8", "94 B9", "94 B6", "94 B7", "94 BA", "E2 96 AA EF B8 8F", "E2 96 AB EF B8 8F", "E2 AC 9B EF B8 8F", "E2 AC 9C EF B8 8F", "94 BB", "E2 97 BC EF B8 8F", "E2 97 BB EF B8 8F", "E2 97 BE EF B8 8F", "E2 97 BD EF B8 8F", "94 B2", "94 B3", "94 88", "94 89", "94 8A", "94 87", "93 A3", "93 A2", "94 94", "94 95", "83 8F", "80 84 EF B8 8F", "E2 99 A0 EF B8 8F", "E2 99 A3 EF B8 8F", "E2 99 A5 EF B8 8F", "E2 99 A6 EF B8 8F", "8E B4", "91 81 E2 80 8D F0 9F 97 A8", "92 AD", "97 AF", "92 AC", "95 90", "95 91", "95 92", "95 93", "95 94", "95 95", "95 96", "95 97", "95 98", "95 99", "95 9A", "95 9B", "95 9C", "95 9D", "95 9E", "95 9F", "95 A0", "95 A1", "95 A2", "95 A3", "95 A4", "95 A5", "95 A6", "95 A7", "9B 91", "87 A6 F0 9F 87 AB", "87 A6 F0 9F 87 BD", "87 A6 F0 9F 87 B1", "87 A9 F0 9F 87 BF", "87 A6 F0 9F 87 B8", "87 A6 F0 9F 87 A9", "87 A6 F0 9F 87 B4", "87 A6 F0 9F 87 AE", "87 A6 F0 9F 87 B6", "87 A6 F0 9F 87 AC", "87 A6 F0 9F 87 B7", "87 A6 F0 9F 87 B2", "87 A6 F0 9F 87 BC", "87 A6 F0 9F 87 BA", "87 A6 F0 9F 87 B9", "87 A6 F0 9F 87 BF", "87 A7 F0 9F 87 B8", "87 A7 F0 9F 87 AD", "87 A7 F0 9F 87 A9", "87 A7 F0 9F 87 A7", "87 A7 F0 9F 87 BE", "87 A7 F0 9F 87 AA", "87 A7 F0 9F 87 BF", "87 A7 F0 9F 87 AF", "87 A7 F0 9F 87 B2", "87 A7 F0 9F 87 B9", "87 A7 F0 9F 87 B4", "87 A7 F0 9F 87 B6", "87 A7 F0 9F 87 A6", "87 A7 F0 9F 87 BC", "87 A7 F0 9F 87 B7", "87 AE F0 9F 87 B4", "87 BB F0 9F 87 AC", "87 A7 F0 9F 87 B3", "87 A7 F0 9F 87 AC", "87 A7 F0 9F 87 AB", "87 A7 F0 9F 87 AE", "87 A8 F0 9F 87 BB", "87 B0 F0 9F 87 AD", "87 A8 F0 9F 87 B2", "87 A8 F0 9F 87 A6", "87 AE F0 9F 87 A8", "87 B0 F0 9F 87 BE", "87 A8 F0 9F 87 AB", "87 B9 F0 9F 87 A9", "87 A8 F0 9F 87 B1", "87 A8 F0 9F 87 B3", "87 A8 F0 9F 87 BD", "87 A8 F0 9F 87 A8", "87 A8 F0 9F 87 B4", "87 B0 F0 9F 87 B2", "87 A8 F0 9F 87 AC", "87 A8 F0 9F 87 A9", "87 A8 F0 9F 87 B0", "87 A8 F0 9F 87 B7", "87 AD F0 9F 87 B7", "87 A8 F0 9F 87 BA", "87 A8 F0 9F 87 BC", "87 A8 F0 9F 87 BE", "87 A8 F0 9F 87 BF", "87 A9 F0 9F 87 B0", "87 A9 F0 9F 87 AF", "87 A9 F0 9F 87 B2", "87 A9 F0 9F 87 B4", "87 AA F0 9F 87 A8", "87 AA F0 9F 87 AC", "87 B8 F0 9F 87 BB", "87 AC F0 9F 87 B6", "87 AA F0 9F 87 B7", "87 AA F0 9F 87 AA", "87 AA F0 9F 87 B9", "87 AA F0 9F 87 BA", "87 AB F0 9F 87 B0", "87 AB F0 9F 87 B4", "87 AB F0 9F 87 AF", "87 AB F0 9F 87 AE", "87 AB F0 9F 87 B7", "87 AC F0 9F 87 AB", "87 B5 F0 9F 87 AB", "87 B9 F0 9F 87 AB", "87 AC F0 9F 87 A6", "87 AC F0 9F 87 B2", "87 AC F0 9F 87 AA", "87 A9 F0 9F 87 AA", "87 AC F0 9F 87 AD", "87 AC F0 9F 87 AE", "87 AC F0 9F 87 B7", "87 AC F0 9F 87 B1", "87 AC F0 9F 87 A9", "87 AC F0 9F 87 B5", "87 AC F0 9F 87 BA", "87 AC F0 9F 87 B9", "87 AC F0 9F 87 AC", "87 AC F0 9F 87 B3", "87 AC F0 9F 87 BC", "87 AC F0 9F 87 BE", "87 AD F0 9F 87 B9", "87 AD F0 9F 87 B3", "87 AD F0 9F 87 B0", "87 AD F0 9F 87 BA", "87 AE F0 9F 87 B8", "87 AE F0 9F 87 B3", "87 AE F0 9F 87 A9", "87 AE F0 9F 87 B7", "87 AE F0 9F 87 B6", "87 AE F0 9F 87 AA", "87 AE F0 9F 87 B2", "87 AE F0 9F 87 B1", "87 AE F0 9F 87 B9", "87 A8 F0 9F 87 AE", "87 AF F0 9F 87 B2", "87 AF F0 9F 87 B5", "87 AF F0 9F 87 AA", "87 AF F0 9F 87 B4", "87 B0 F0 9F 87 BF", "87 B0 F0 9F 87 AA", "87 B0 F0 9F 87 AE", "87 BD F0 9F 87 B0", "87 B0 F0 9F 87 BC", "87 B0 F0 9F 87 AC", "87 B1 F0 9F 87 A6", "87 B1 F0 9F 87 BB", "87 B1 F0 9F 87 A7", "87 B1 F0 9F 87 B8", "87 B1 F0 9F 87 B7", "87 B1 F0 9F 87 BE", "87 B1 F0 9F 87 AE", "87 B1 F0 9F 87 B9", "87 B1 F0 9F 87 BA", "87 B2 F0 9F 87 B4", "87 B2 F0 9F 87 B0", "87 B2 F0 9F 87 AC", "87 B2 F0 9F 87 BC", "87 B2 F0 9F 87 BE", "87 B2 F0 9F 87 BB", "87 B2 F0 9F 87 B1", "87 B2 F0 9F 87 B9", "87 B2 F0 9F 87 AD", "87 B2 F0 9F 87 B6", "87 B2 F0 9F 87 B7", "87 B2 F0 9F 87 BA", "87 BE F0 9F 87 B9", "87 B2 F0 9F 87 BD", "87 AB F0 9F 87 B2", "87 B2 F0 9F 87 A9", "87 B2 F0 9F 87 A8", "87 B2 F0 9F 87 B3", "87 B2 F0 9F 87 AA", "87 B2 F0 9F 87 B8", "87 B2 F0 9F 87 A6", "87 B2 F0 9F 87 BF", "87 B2 F0 9F 87 B2", "87 B3 F0 9F 87 A6", "87 B3 F0 9F 87 B7", "87 B3 F0 9F 87 B5", "87 B3 F0 9F 87 B1", "87 B3 F0 9F 87 A8", "87 B3 F0 9F 87 BF", "87 B3 F0 9F 87 AE", "87 B3 F0 9F 87 AA", "87 B3 F0 9F 87 AC", "87 B3 F0 9F 87 BA", "87 B3 F0 9F 87 AB", "87 B2 F0 9F 87 B5", "87 B0 F0 9F 87 B5", "87 B3 F0 9F 87 B4", "87 B4 F0 9F 87 B2", "87 B5 F0 9F 87 B0", "87 B5 F0 9F 87 BC", "87 B5 F0 9F 87 B8", "87 B5 F0 9F 87 A6", "87 B5 F0 9F 87 AC", "87 B5 F0 9F 87 BE", "87 B5 F0 9F 87 AA", "87 B5 F0 9F 87 AD", "87 B5 F0 9F 87 B3", "87 B5 F0 9F 87 B1", "87 B5 F0 9F 87 B9", "87 B5 F0 9F 87 B7", "87 B6 F0 9F 87 A6", "87 B7 F0 9F 87 AA", "87 B7 F0 9F 87 B4", "87 B7 F0 9F 87 BA", "87 B7 F0 9F 87 BC", "87 A7 F0 9F 87 B1", "87 B8 F0 9F 87 AD", "87 B0 F0 9F 87 B3", "87 B1 F0 9F 87 A8", "87 B5 F0 9F 87 B2", "87 BB F0 9F 87 A8", "87 BC F0 9F 87 B8", "87 B8 F0 9F 87 B2", "87 B8 F0 9F 87 B9", "87 B8 F0 9F 87 A6", "87 B8 F0 9F 87 B3", "87 B7 F0 9F 87 B8", "87 B8 F0 9F 87 A8", "87 B8 F0 9F 87 B1", "87 B8 F0 9F 87 AC", "87 B8 F0 9F 87 BD", "87 B8 F0 9F 87 B0", "87 B8 F0 9F 87 AE", "87 B8 F0 9F 87 A7", "87 B8 F0 9F 87 B4", "87 BF F0 9F 87 A6", "87 AC F0 9F 87 B8", "87 B0 F0 9F 87 B7", "87 B8 F0 9F 87 B8", "87 AA F0 9F 87 B8", "87 B1 F0 9F 87 B0", "87 B8 F0 9F 87 A9", "87 B8 F0 9F 87 B7", "87 B8 F0 9F 87 BF", "87 B8 F0 9F 87 AA", "87 A8 F0 9F 87 AD", "87 B8 F0 9F 87 BE", "87 B9 F0 9F 87 BC", "87 B9 F0 9F 87 AF", "87 B9 F0 9F 87 BF", "87 B9 F0 9F 87 AD", "87 B9 F0 9F 87 B1", "87 B9 F0 9F 87 AC", "87 B9 F0 9F 87 B0", "87 B9 F0 9F 87 B4", "87 B9 F0 9F 87 B9", "87 B9 F0 9F 87 B3", "87 B9 F0 9F 87 B7", "87 B9 F0 9F 87 B2", "87 B9 F0 9F 87 A8", "87 B9 F0 9F 87 BB", "87 BA F0 9F 87 AC", "87 BA F0 9F 87 A6", "87 A6 F0 9F 87 AA", "87 AC F0 9F 87 A7", "87 BA F0 9F 87 B8", "87 BB F0 9F 87 AE", "87 BA F0 9F 87 BE", "87 BA F0 9F 87 BF", "87 BB F0 9F 87 BA", "87 BB F0 9F 87 A6", "87 BB F0 9F 87 AA", "87 BB F0 9F 87 B3", "87 BC F0 9F 87 AB", "87 AA F0 9F 87 AD", "87 BE F0 9F 87 AA", "87 BF F0 9F 87 B2", "87 BF F0 9F 87 BC"],
  network: "<svg width='14px' height='10px' viewBox='87 5 14 10' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'> <!-- Generator: Sketch 3.7.2 (28276) - http://www.bohemiancoding.com/sketch --> <desc>Created with Sketch.</desc> <defs></defs> <path d='M96.1444208,12.4385043 C95.626374,11.8454456 94.8523616,11.4689119 93.987563,11.4689119 C93.1390073,11.4689119 92.3778594,11.8314341 91.8601652,12.4053177 L94.0225391,14.5 L96.1444208,12.4385043 Z M98.3234964,10.3214425 C97.2447794,9.19174563 95.7014387,8.48445596 93.987563,8.48445596 C92.2882723,8.48445596 90.7566264,9.17975893 89.6792698,10.2926936 L90.7692987,11.3486 C91.567205,10.5053708 92.713648,9.97668394 93.987563,9.97668394 C95.2768836,9.97668394 96.4356305,10.518235 97.2346215,11.3793293 L98.3234964,10.3214425 L98.3234964,10.3214425 Z M100.5,8.20687933 C98.8629578,6.53943672 96.5505699,5.5 93.987563,5.5 C91.4375103,5.5 89.1355496,6.52895605 87.5,8.18164431 L88.5895579,9.23709441 C89.9460798,7.85431655 91.8628921,6.99222798 93.987563,6.99222798 C96.1260026,6.99222798 98.0538809,7.86552609 99.4118698,9.26404272 L100.5,8.20687933 Z' id='Wi-Fi' stroke='none' fill='#030303' fill-rule='evenodd'></path> </svg>",
  activity: "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='16px' height='16px' viewBox='0 0 16 16' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'> <!-- Generator: Sketch 3.5.2 (25235) - http://www.bohemiancoding.com/sketch --> <title>Soccer Ball</title> <desc>Created with Sketch.</desc> <defs> <circle id='path-1' cx='8' cy='8' r='8'></circle> </defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'> <g id='iPhone-6' sketch:type='MSArtboardGroup' transform='translate(-179.000000, -639.000000)'> <g id='Soccer-Ball' sketch:type='MSLayerGroup' transform='translate(179.000000, 639.000000)'> <mask id='mask-2' sketch:name='Mask' fill='white'> <use xlink:href='#path-1'></use> </mask> <use id='Mask' stroke='#4A5361' sketch:type='MSShapeGroup' xlink:href='#path-1'></use> <path d='M6,12.1203046 L12.8573384,8 L13.3723765,8.8571673 L6.51503807,12.9774719 L6,12.1203046 L6,12.1203046 Z' id='Rectangle-47' fill='#4A5361' sketch:type='MSShapeGroup' mask='url(#mask-2)'></path> <path d='M11.849648,8.7260551 L19.1001103,5.34510901 L19.5227285,6.2514168 L12.2722662,9.63236289 L11.849648,8.7260551 L11.849648,8.7260551 Z' id='Rectangle-47-Copy-3' fill='#4A5361' sketch:type='MSShapeGroup' mask='url(#mask-2)'></path> <path d='M6,3.1203046 L12.8573384,-1 L13.3723765,-0.142832699 L6.51503807,3.9774719 L6,3.1203046 L6,3.1203046 Z' id='Rectangle-47-Copy-2' fill='#4A5361' sketch:type='MSShapeGroup' mask='url(#mask-2)'></path> <path d='M-1,7.1203046 L5.85733841,3 L6.37237648,3.8571673 L-0.484961925,7.9774719 L-1,7.1203046 L-1,7.1203046 Z' id='Rectangle-47-Copy-4' fill='#4A5361' sketch:type='MSShapeGroup' mask='url(#mask-2)'></path> <rect id='Rectangle-50' fill='#4A5361' sketch:type='MSShapeGroup' mask='url(#mask-2)' x='4' y='6' width='1' height='5'></rect> <rect id='Rectangle-51' fill='#4A5361' sketch:type='MSShapeGroup' mask='url(#mask-2)' x='11.5' y='3' width='1' height='12'></rect> <path d='M5,4.8571673 L11.8573384,8.9774719 L12.3723765,8.1203046 L5.51503807,4 L5,4.8571673' id='Rectangle-47-Copy' fill='#4A5361' sketch:type='MSShapeGroup' mask='url(#mask-2)'></path> <path d='M5,12.8571673 L11.8573384,16.9774719 L12.3723765,16.1203046 L5.51503807,12 L5,12.8571673' id='Rectangle-47-Copy-5' fill='#4A5361' sketch:type='MSShapeGroup' mask='url(#mask-2)'></path> <path d='M11.9048972,6.14766064 L13.8714227,8.33170849 L12.4019596,10.8768933 L9.52725589,10.2658562 L9.22005445,7.34302965 L11.9048972,6.14766064' id='Polygon-1' fill='#D8D8D8' sketch:type='MSShapeGroup' mask='url(#mask-2)'></path> <path d='M11.9048972,6.14766064 L13.8714227,8.33170849 L12.4019596,10.8768933 L9.52725589,10.2658562 L9.22005445,7.34302965 L11.9048972,6.14766064' id='Polygon-1-Copy' fill='#4A5361' sketch:type='MSShapeGroup' mask='url(#mask-2)'></path> <path d='M7.45771189,3.19504739 L7.35514484,6.13218333 L4.5300676,6.9422612 L2.88664089,4.5057809 L4.69602457,2.18987541 L7.45771189,3.19504739' id='Polygon-1-Copy-2' fill='#4A5361' sketch:type='MSShapeGroup' mask='url(#mask-2)'></path> <path d='M7.45771189,11.1950474 L7.35514484,14.1321833 L4.5300676,14.9422612 L2.88664089,12.5057809 L4.69602457,10.1898754 L7.45771189,11.1950474' id='Polygon-1-Copy-3' fill='#4A5361' sketch:type='MSShapeGroup' mask='url(#mask-2)'></path> <path d='M14.5431701,0.0725939314 L14.4406031,3.00972988 L11.6155258,3.81980774 L9.97209912,1.38332745 L11.7814828,-0.93257805 L14.5431701,0.0725939314' id='Polygon-1-Copy-4' fill='#4A5361' sketch:type='MSShapeGroup' mask='url(#mask-2)'></path> </g> </g> </g> </svg>",
  animals: "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='17px' height='16px' viewBox='0 0 17 17' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'> <!-- Generator: Sketch 3.5.2 (25235) - http://www.bohemiancoding.com/sketch --> <title>Group</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'> <g id='iPhone-6' sketch:type='MSArtboardGroup' transform='translate(-117.000000, -639.000000)' stroke='#4A5361'> <g id='ic_Food' sketch:type='MSLayerGroup' transform='translate(118.000000, 640.000000)'> <g id='Group' sketch:type='MSShapeGroup'> <path d='M5.68377537,1.38156646 C6.23926066,1.13624 6.85372005,1 7.5,1 C8.14627995,1 8.76073934,1.13624 9.31622463,1.38156646 C9.80879275,0.562359019 10.8255888,0 12,0 C13.6568542,0 15,1.11928813 15,2.5 C15,3.5571398 14.2126246,4.46102843 13.0999226,4.82662514 C14.2496528,5.64185422 15,6.98330062 15,8.5 C15,10.7167144 13.3971873,12.5590719 11.2872671,12.9313673 C10.4867248,14.1757703 9.08961696,15 7.5,15 C5.91038304,15 4.51327524,14.1757703 3.71273291,12.9313673 C1.60281268,12.5590719 0,10.7167144 0,8.5 C0,6.98330062 0.750347244,5.64185422 1.90007741,4.82662514 C0.787375445,4.46102843 0,3.5571398 0,2.5 C0,1.11928813 1.34314575,0 3,0 C4.17441122,0 5.19120725,0.562359019 5.68377537,1.38156646 Z' id='Oval-8'></path> <path d='M5.73834228,12 C5.86290979,12 6.14642353,12 6.14642353,12 C6.14642353,12 6.43215696,12.4426123 6.5246582,12.4919739 C6.66455601,12.5666277 7,12.4919739 7,12.4919739 L7,12 L8,12 L8,12.4919739 L8.49799228,12.4919739 L8.84301769,12 L9.3918457,12 C9.3918457,12 8.99598457,12.9839478 8.49799228,12.9839478 L6.60702407,12.9839478 C6.21404813,12.9839478 5.45996094,12 5.73834228,12 Z' id='Rectangle-44-Copy-2'></path> <circle id='Oval-14' cx='10.5' cy='7.5' r='0.5'></circle> <circle id='Oval-14-Copy' cx='4.5' cy='7.5' r='0.5'></circle> <path d='M12.6999969,5 C12.6999969,3.06700338 11.1329936,1.5 9.19999695,1.5' id='Oval-16'></path> <path d='M5.5,5 C5.5,3.06700338 3.93299662,1.5 2,1.5' id='Oval-16-Copy' transform='translate(3.750000, 3.250000) scale(-1, 1) translate(-3.750000, -3.250000) '></path> <rect id='Rectangle-44-Copy' x='7' y='11' width='1' height='1'></rect> <path d='M6,10 L6.5,10 L6.49999999,9.5 L8.50000005,9.5 L8.50000005,10 L9,10 L9,10.5 L8.5,10.5 L8.5,11 L6.5,11 L6.5,10.5 L6,10.5 L6,10 Z' id='Path'></path> </g> </g> </g> </g> </svg>",
  chevron: "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='13px' height='22px' viewBox='0 0 13 22' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'> <!-- Generator: Sketch 3.6.1 (26313) - http://www.bohemiancoding.com/sketch --> <title>Back Chevron</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'> <g id='Navigation-Bar/Back' transform='translate(-8.000000, -31.000000)' fill='#0076FF'> <path d='M8.5,42 L19,31.5 L21,33.5 L12.5,42 L21,50.5 L19,52.5 L8.5,42 Z' id='Back-Chevron'></path> </g> </g> </svg>",
  emojis: ["😀", "😬", "😁", "😂", "😃", "😄", "😅", "😆", "😇", "😉", "😊", "🙂", "🙃", "☺️", "😋", "😌", "😍", "😘", "😗", "😙", "😚", "😜", "😝", "😛", "🤑", "🤓", "😎", "🤗", "😏", "😶", "😐", "😑", "😒", "🙄", "🤔", "😳", "😞", "😟", "😠", "😡", "😔", "😕", "🙁", "☹️", "😣", "😖", "😫", "😩", "😤", "😮", "😱", "😨", "😰", "😯", "😦", "😧", "😢", "😥", "😪", "😓", "😭", "😵", "😲", "🤐", "😷", "🤒", "🤕", "😴", "💤", "💩", "😈", "👿", "👹", "👺", "💀", "👻", "👽", "🤖", "😺", "😸", "😹", "😻", "😼", "😽", "🙀", "😿", "😾", "🙌", "👏", "👋", "👍", "👎", "👊", "✊", "✌️", "👌", "✋", "👐", "💪", "🙏", "☝️", "👆", "👇", "👈", "👉", "🖕", "🖐", "🤘", "🖖", "✍️", "💅", "👄", "👅", "👂", "👃", "👁", "👀", "👤", "👥", "🗣", "👶", "👦", "👧", "👨", "👩", "👱", "👴", "👵", "👲", "👳", "👮", "👷", "💂", "🕵", "🎅", "👼", "👸", "👰", "🚶", "🏃", "💃", "👯", "👫", "👬", "👭", "🙇", "💁", "🙅", "🙆", "🙋", "🙎", "🙍", "💇", "💆", "💑", "👩‍❤️‍👩", "👨‍❤️‍👨", "💏", "👩‍❤️‍💋‍👩", "👨‍❤️‍💋‍👨", "👪", "👨‍👩‍👧", "👨‍👩‍👧‍👦", "👨‍👩‍👦‍👦", "👨‍👩‍👧‍👧", "👩‍👩‍👦", "👩‍👩‍👧", "👩‍👩‍👧‍👦", "👩‍👩‍👦‍👦", "👩‍👩‍👧‍👧", "👨‍👨‍👦", "👨‍👨‍👧", "👨‍👨‍👧‍👦", "👨‍👨‍👦‍👦", "👨‍👨‍👧‍👧", "👚", "👕", "👖", "👔", "👗", "👙", "👘", "💄", "💋", "👣", "👠", "👡", "👢", "👞", "👟", "👒", "🎩", "⛑", "🎓", "👑", "🎒", "👝", "👛", "👜", "💼", "👓", "🕶", "💍", "🌂", "🛑", "🐶", "🐱", "🐭", "🐹", "🐰", "🐻", "🐼", "🐨", "🐯", "🦁", "🐮", "🐷", "🐽", "🐸", "🐙", "🐵", "🙈", "🙉", "🙊", "🐒", "🐔", "🐧", "🐦", "🐤", "🐣", "🐥", "🐺", "🐗", "🐴", "🦄", "🐝", "🐛", "🐌", "🐞", "🐜", "🕷", "🦂", "🦀", "🐍", "🐢", "🐠", "🐟", "🐡", "🐬", "🐳", "🐋", "🐊", "🐆", "🐅", "🐃", "🐂", "🐄", "🐪", "🐫", "🐘", "🐐", "🐏", "🐑", "🐎", "🐖", "🐀", "🐁", "🐓", "🦃", "🕊", "🐕", "🐩", "🐈", "🐇", "🐿", "🐾", "🐉", "🐲", "🌵", "🎄", "🌲", "🌳", "🌴", "🌱", "🌿", "☘", "🍀", "🎍", "🎋", "🍃", "🍂", "🍁", "🌾", "🌺", "🌺", "🌻", "🌹", "🌷", "🌼", "🌸", "💐", "🍄", "🌰", "🎃", "🐚", "🕸", "🌎", "🌍", "🌏", "🌕", "🌖", "🌗", "🌘", "🌑", "🌒", "🌓", "🌔", "🌚", "🌝", "🌛", "🌜", "🌞", "🌙", "⭐️", "🌟", "💫", "✨", "☄️", "☀️", "🌤", "⛅️", "🌥", "🌦", "☁️", "🌧", "⛈", "🌩", "⚡️", "🔥", "💥", "❄️", "🌨", "☃️", "⛄️", "🌬", "💨", "🌪", "🌫", "☂️", "☔️", "💧", "💦", "🌊", "🛑", "🛑", "🍏", "🍎", "🍐", "🍊", "🍋", "🍌", "🍉", "🍇", "🍓", "🍈", "🍒", "🍑", "🍍", "🍅", "🍆", "🌶", "🌽", "🍠", "🍯", "🍞", "🧀", "🍗", "🍖", "🍤", "🍳", "🍔", "🍟", "🌭", "🍕", "🍝", "🌮", "🌯", "🍜", "🍲", "🍥", "🍣", "🍱", "🍛", "🍙", "🍚", "🍘", "🍢", "🍡", "🍧", "🍨", "🍦", "🍰", "🎂", "🍮", "🍬", "🍭", "🍫", "🍿", "🍩", "🍪", "🍺", "🍻", "🍷", "🍸", "🍹", "🍾", "🍶", "🍵", "☕️", "🍼", "🍴", "🍽", "🛑", "🛑", "🛑", "⚽️", "🏀", "🏈", "⚾️", "🎾", "🏐", "🏉", "🎱", "⛳️", "🏌", "🏓", "🏸", "🏒", "🏑", "🏏", "🎿", "⛷", "🏂", "⛸", "🏹", "🎣", "🚣", "🏊", "🏄", "🛀", "⛹", "🏋", "🚴", "🚵", "🏇", "🕴", "🏆", "🎽", "🏅", "🎖", "🎗", "🏵", "🎫", "🎟", "🎭", "🎨", "🎪", "🎤", "🎧", "🎼", "🎹", "🎷", "🎺", "🎸", "🎻", "🎬", "🎮", "👾", "🎯", "🎲", "🎰", "🎳", "🛑", "🛑", "🛑", "🚗", "🚕", "🚙", "🚌", "🚎", "🏎", "🚓", "🚑", "🚒", "🚐", "🚚", "🚛", "🚜", "🏍", "🚲", "🚨", "🚔", "🚍", "🚘", "🚖", "🚡", "🚠", "🚯", "🚃", "🚋", "🚝", "🚄", "🚅", "🚈", "🚞", "🚂", "🚆", "🚇", "🚊", "🚉", "🚁", "🛩", "✈️", "🛫", "🛬", "⛵️", "🛥", "🚤", "⛴", "🛳", "🚀", "🛰", "💺", "⚓️", "🚧", "⛽️", "🚏", "🚦", "🚥", "🏁", "🚢", "🎡", "🎢", "🎠", "🏗", "🌁", "🗼", "🏭", "⛲️", "🎑", "⛰", "🏔", "🗻", "🌋", "🗾", "🏕", "⛺️", "🏞", "🛣", "🛤", "🌅", "🌄", "🏜", "🏖", "🏝", "🌇", "🌆", "🏙", "🌃", "🌉", "🌌", "🌠", "🎇", "🎆", "🌈", "🏘", "🏰", "🏯", "🏟", "🗽", "🏠", "🏡", "🏚", "🏢", "🏬", "🏣", "🏤", "🏥", "🏦", "🏨", "🏪", "🏫", "🏩", "💒", "🏛", "⛪️", "🕌", "🕍", "🕋", "⛩", "⌚️", "📱", "📲", "💻", "⌨️", "🖥", "🖨", "🖱", "🖲", "🕹", "🗜", "💽", "💾", "💿", "📀", "📼", "📷", "📸", "📹", "🎥", "📽", "🎞", "📞", "☎️", "📟", "📠", "📺", "📻", "🎙", "🎚", "🎛", "⏱", "⏲", "⏰", "🕰", "⏳", "⌛️", "📡", "🔋", "🔌", "💡", "🔦", "🕯", "🗑", "🛢", "💸", "💵", "💴", "💶", "💷", "💰", "💳", "💎", "⚖", "🔧", "🔨", "⚒", "🛠", "⛏", "🔩", "⚙", "⛓", "🔫", "💣", "🔪", "🗡", "⚔", "🛡", "🚬", "☠️", "⚰", "⚱", "🏺", "🔮", "📿", "💈", "⚗", "🔭", "🔬", "🕳", "💊", "💉", "🌡", "🏷", "🔖", "🚽", "🚿", "🛁", "🔑", "🗝", "🛋", "🛌", "🛏", "🚪", "🛎", "🖼", "🗺", "⛱", "🗿", "🛍", "🎈", "🎏", "🎀", "🎁", "🎊", "🎉", "🎎", "🎐", "🎌", "🏮", "✉️", "📩", "📨", "📧", "💌", "📮", "📪", "📫", "📬", "📭", "📦", "📯", "📥", "📤", "📜", "📃", "📑", "📊", "📈", "📉", "📄", "📅", "📆", "🗓", "📇", "🗃", "🗳", "🗄", "📋", "🗒", "📁", "📂", "🗂", "🗞", "📰", "📓", "📕", "📗", "📘", "📙", "📔", "📒", "📚", "📖", "🔗", "📎", "🖇", "✂️", "📐", "📏", "📌", "📍", "🚩", "🏳", "🏴", "🔐", "🔒", "🔓", "🔏", "🖊", "🖋", "✒️", "📝", "✏️", "🖍", "🖌", "🔍", "🔎", "🛑", "🛑", "❤️", "💛", "💚", "💙", "💜", "💔", "❣️", "💕", "💞", "💓", "💗", "💖", "💘", "💝", "💟", "☮️", "✝️", "☪️", "🕉", "☸️", "✡️", "🔯", "🕎", "☯️", "☦️", "🛐", "⛎", "♈️", "♉️", "♊️", "♋️", "♌️", "♍️", "♎️", "♏️", "♐️", "♑️", "♒️", "♓️", "🆔", "⚛", "🈳", "🈹", "☢️", "☣️", "📴", "📳", "🈶", "🈚️", "🈸", "🈺", "🈷️", "✴️", "🆚", "🉑", "💮", "🉐", "㊙️", "㊗️", "🈴", "🈵", "🈲", "🅰️", "🅱️", "🆎", "🆑", "🅾️", "🆘", "⛔️", "📛", "🚫", "❌", "⭕️", "💢", "♨️", "🚷", "🚯", "🚳", "🚱", "🔞", "📵", "❗️", "❕", "❓", "❔", "‼️", "⁉️", "💯", "🔅", "🔆", "🔱", "⚜", "〽️", "⚠️", "🚸", "🔰", "♻️", "🈯️", "💹", "❇️", "✳️", "❎", "✅", "💠", "🌀", "➿", "🌐", "Ⓜ️", "🏧", "🈂️", "🛂", "🛃", "🛄", "🛅", "♿️", "🚭", "🚾", "🅿️", "🚰", "🚹", "🚺", "🚼", "🚻", "🚮", "🎦", "📶", "🈁", "🆖", "🆗", "🆙", "🆒", "🆕", "🆓", "0️⃣", "1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣", "🔟", "🔢", "▶️", "⏸", "⏯", "⏹", "⏺", "⏭", "⏮", "⏩", "⏪", "🔀", "🔁", "🔂", "◀️", "🔼", "🔽", "⏫", "⏬", "➡️", "⬅️", "⬆️", "⬇️", "↗️", "↘️", "↙️", "↖️", "↕️", "↔️", "🔄", "↪️", "↩️", "⤴️", "⤵️", "#️⃣", "*️⃣", "ℹ️", "🔤", "🔡", "🔠", "🔣", "🎵", "🎶", "〰️", "➰", "✔️", "🔃", "➕", "➖", "➗", "✖️", "💲", "💱", "©️", "®️", "™️", "🔚", "🔙", "🔛", "🔝", "🔜", "☑️", "🔘", "⚪️", "⚫️", "🔴", "🔵", "🔸", "🔹", "🔶", "🔷", "🔺", "▪️", "▫️", "⬛️", "⬜️", "🔻", "◼️", "◻️", "◾️", "◽️", "🔲", "🔳", "🔈", "🔉", "🔊", "🔇", "📣", "📢", "🔔", "🔕", "🃏", "🀄️", "♠️", "♣️", "♥️", "♦️", "🎴", "👁‍🗨", "💭", "🗯", "💬", "🕐", "🕑", "🕒", "🕓", "🕔", "🕕", "🕖", "🕗", "🕘", "🕙", "🕚", "🕛", "🕜", "🕝", "🕞", "🕟", "🕠", "🕡", "🕢", "🕣", "🕤", "🕥", "🕦", "🕧", "🛑", "🇦🇫", "🇦🇽", "🇦🇱", "🇩🇿", "🇦🇸", "🇦🇩", "🇦🇴", "🇦🇮", "🇦🇶", "🇦🇬", "🇦🇷", "🇦🇲", "🇦🇼", "🇦🇺", "🇦🇹", "🇦🇿", "🇧🇸", "🇧🇭", "🇧🇩", "🇧🇧", "🇧🇾", "🇧🇪", "🇧🇿", "🇧🇯", "🇧🇲", "🇧🇹", "🇧🇴", "🇧🇶", "🇧🇦", "🇧🇼", "🇧🇷", "🇮🇴", "🇻🇬", "🇧🇳", "🇧🇬", "🇧🇫", "🇧🇮", "🇨🇻", "🇰🇭", "🇨🇲", "🇨🇦", "🇮🇨", "🇰🇾", "🇨🇫", "🇹🇩", "🇨🇱", "🇨🇳", "🇨🇽", "🇨🇨", "🇨🇴", "🇰🇲", "🇨🇬", "🇨🇩", "🇨🇰", "🇨🇷", "🇭🇷", "🇨🇺", "🇨🇼", "🇨🇾", "🇨🇿", "🇩🇰", "🇩🇯", "🇩🇲", "🇩🇴", "🇪🇨", "🇪🇬", "🇸🇻", "🇬🇶", "🇪🇷", "🇪🇪", "🇪🇹", "🇪🇺", "🇫🇰", "🇫🇴", "🇫🇯", "🇫🇮", "🇫🇷", "🇬🇫", "🇵🇫", "🇹🇫", "🇬🇦", "🇬🇲", "🇬🇪", "🇩🇪", "🇬🇭", "🇬🇮", "🇬🇷", "🇬🇱", "🇬🇩", "🇬🇵", "🇬🇺", "🇬🇹", "🇬🇬", "🇬🇳", "🇬🇼", "🇬🇾", "🇭🇹", "🇭🇳", "🇭🇰", "🇭🇺", "🇮🇸", "🇮🇳", "🇮🇩", "🇮🇷", "🇮🇶", "🇮🇪", "🇮🇲", "🇮🇱", "🇮🇹", "🇨🇮", "🇯🇲", "🇯🇵", "🇯🇪", "🇯🇴", "🇰🇿", "🇰🇪", "🇰🇮", "🇽🇰", "🇰🇼", "🇰🇬", "🇱🇦", "🇱🇻", "🇱🇧", "🇱🇸", "🇱🇷", "🇱🇾", "🇱🇮", "🇱🇹", "🇱🇺", "🇲🇴", "🇲🇰", "🇲🇬", "🇲🇼", "🇲🇾", "🇲🇻", "🇲🇱", "🇲🇹", "🇲🇭", "🇲🇶", "🇲🇷", "🇲🇺", "🇾🇹", "🇲🇽", "🇫🇲", "🇲🇩", "🇲🇨", "🇲🇳", "🇲🇪", "🇲🇸", "🇲🇦", "🇲🇿", "🇲🇲", "🇳🇦", "🇳🇷", "🇳🇵", "🇳🇱", "🇳🇨", "🇳🇿", "🇳🇮", "🇳🇪", "🇳🇬", "🇳🇺", "🇳🇫", "🇲🇵", "🇰🇵", "🇳🇴", "🇴🇲", "🇵🇰", "🇵🇼", "🇵🇸", "🇵🇦", "🇵🇬", "🇵🇾", "🇵🇪", "🇵🇭", "🇵🇳", "🇵🇱", "🇵🇹", "🇵🇷", "🇶🇦", "🇷🇪", "🇷🇴", "🇷🇺", "🇷🇼", "🇧🇱", "🇸🇭", "🇰🇳", "🇱🇨", "🇵🇲", "🇻🇨", "🇼🇸", "🇸🇲", "🇸🇹", "🇸🇦", "🇸🇳", "🇷🇸", "🇸🇨", "🇸🇱", "🇸🇬", "🇸🇽", "🇸🇰", "🇸🇮", "🇸🇧", "🇸🇴", "🇿🇦", "🇬🇸", "🇰🇷", "🇸🇸", "🇪🇸", "🇱🇰", "🇸🇩", "🇸🇷", "🇸🇿", "🇸🇪", "🇨🇭", "🇸🇾", "🇹🇼", "🇹🇯", "🇹🇿", "🇹🇭", "🇹🇱", "🇹🇬", "🇹🇰", "🇹🇴", "🇹🇹", "🇹🇳", "🇹🇷", "🇹🇲", "🇹🇨", "🇹🇻", "🇺🇬", "🇺🇦", "🇦🇪", "🇬🇧", "🇺🇸", "🇻🇮", "🇺🇾", "🇺🇿", "🇻🇺", "🇻🇦", "🇻🇪", "🇻🇳", "🇼🇫", "🇪🇭", "🇾🇪", "🇿🇲", "🇿🇼"],
  emoji: "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='20px' height='20px' viewBox='0 0 20 20' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'> <!-- Generator: Sketch 3.5.2 (25235) - http://www.bohemiancoding.com/sketch --> <title>Emoji</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'> <g id='Keyboard/Light/Lower' sketch:type='MSLayerGroup' transform='translate(-60.000000, -181.000000)' fill='#030303'> <g id='Bottom-Row' transform='translate(3.000000, 170.000000)' sketch:type='MSShapeGroup'> <path d='M66.75,30.5 C72.1347763,30.5 76.5,26.1347763 76.5,20.75 C76.5,15.3652237 72.1347763,11 66.75,11 C61.3652237,11 57,15.3652237 57,20.75 C57,26.1347763 61.3652237,30.5 66.75,30.5 Z M66.75,29.5 C71.5824916,29.5 75.5,25.5824916 75.5,20.75 C75.5,15.9175084 71.5824916,12 66.75,12 C61.9175084,12 58,15.9175084 58,20.75 C58,25.5824916 61.9175084,29.5 66.75,29.5 Z M63.75,19 C64.4403559,19 65,18.4403559 65,17.75 C65,17.0596441 64.4403559,16.5 63.75,16.5 C63.0596441,16.5 62.5,17.0596441 62.5,17.75 C62.5,18.4403559 63.0596441,19 63.75,19 Z M69.75,19 C70.4403559,19 71,18.4403559 71,17.75 C71,17.0596441 70.4403559,16.5 69.75,16.5 C69.0596441,16.5 68.5,17.0596441 68.5,17.75 C68.5,18.4403559 69.0596441,19 69.75,19 Z M59.8876334,22.1641444 C59.6390316,21.383134 60.065918,20.9785156 60.8530951,21.2329304 C60.8530951,21.2329304 63.0937503,22.2125 66.7500001,22.2125 C70.4062499,22.2125 72.6469047,21.2329304 72.6469047,21.2329304 C73.4287162,20.9662153 73.8812463,21.4044097 73.6058477,22.1807437 C73.6058477,22.1807437 72.6,27.575 66.75,27.575 C60.9,27.575 59.8876334,22.1641444 59.8876334,22.1641444 Z M66.75,23.1875 C64.06875,23.1875 61.8544055,22.4737821 61.8544055,22.4737821 C61.3273019,22.32948 61.1781233,22.5721615 61.5639555,22.957075 C61.5639555,22.957075 62.3625,24.65 66.75,24.65 C71.1375,24.65 71.9508503,22.9438304 71.9508503,22.9438304 C72.3093659,22.5399278 72.1690793,22.3359844 71.6354273,22.476349 C71.6354273,22.476349 69.43125,23.1875 66.75,23.1875 Z' id='Emoji'></path> </g> </g> </g> </svg>",
  "delete": {
    on: "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='24px' height='18px' viewBox='0 0 24 18' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'> <!-- Generator: Sketch 3.5.2 (25235) - http://www.bohemiancoding.com/sketch --> <title>Back</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'> <g id='Keyboard/Light/Upper' sketch:type='MSLayerGroup' transform='translate(-339.000000, -130.000000)' fill='#030303'> <g id='Third-Row' transform='translate(3.000000, 118.000000)' sketch:type='MSShapeGroup'> <path d='M351.642663,20.9776903 L354.466795,18.1535585 C354.760106,17.8602476 354.763983,17.3814962 354.47109,17.088603 C354.176155,16.7936677 353.7014,16.7976328 353.406135,17.0928983 L350.582003,19.9170301 L347.757871,17.0928983 C347.46456,16.7995874 346.985809,16.7957097 346.692916,17.088603 C346.39798,17.3835382 346.401945,17.858293 346.697211,18.1535585 L349.521343,20.9776903 L346.697211,23.801822 C346.4039,24.0951329 346.400022,24.5738843 346.692916,24.8667776 C346.987851,25.1617128 347.462606,25.1577477 347.757871,24.8624822 L350.582003,22.0383504 L353.406135,24.8624822 C353.699445,25.1557931 354.178197,25.1596708 354.47109,24.8667776 C354.766025,24.5718423 354.76206,24.0970875 354.466795,23.801822 L351.642663,20.9776903 Z M337.059345,22.0593445 C336.474285,21.4742847 336.481351,20.5186489 337.059345,19.9406555 L343.789915,13.2100853 C344.182084,12.817916 344.94892,12.5 345.507484,12.5 L356.002098,12.5 C357.933936,12.5 359.5,14.0688477 359.5,16.0017983 L359.5,25.9982017 C359.5,27.9321915 357.923088,29.5 356.002098,29.5 L345.507484,29.5 C344.951066,29.5 344.177169,29.1771693 343.789915,28.7899148 L337.059345,22.0593445 Z' id='Back'></path> </g> </g> </g> </svg>",
    off: "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='24px' height='18px' viewBox='0 0 24 18' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'> <!-- Generator: Sketch 3.5.2 (25235) - http://www.bohemiancoding.com/sketch --> <title>Back</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'> <g id='Keyboard/Light/Upper' sketch:type='MSLayerGroup' transform='translate(-339.000000, -130.000000)' fill='#030303'> <g id='Third-Row' transform='translate(3.000000, 118.000000)' sketch:type='MSShapeGroup'> <path d='M337.059345,22.0593445 C336.474285,21.4742847 336.481351,20.5186489 337.059345,19.9406555 L343.789915,13.2100853 C344.182084,12.817916 344.94892,12.5 345.507484,12.5 L356.002098,12.5 C357.933936,12.5 359.5,14.0688477 359.5,16.0017983 L359.5,25.9982017 C359.5,27.9321915 357.923088,29.5 356.002098,29.5 L345.507484,29.5 C344.951066,29.5 344.177169,29.1771693 343.789915,28.7899148 L337.059345,22.0593445 Z M351.642663,20.9776903 L354.466795,18.1535585 C354.760106,17.8602476 354.763983,17.3814962 354.47109,17.088603 C354.176155,16.7936677 353.7014,16.7976328 353.406135,17.0928983 L350.582003,19.9170301 L347.757871,17.0928983 C347.46456,16.7995874 346.985809,16.7957097 346.692916,17.088603 C346.39798,17.3835382 346.401945,17.858293 346.697211,18.1535585 L349.521343,20.9776903 L346.697211,23.801822 C346.4039,24.0951329 346.400022,24.5738843 346.692916,24.8667776 C346.987851,25.1617128 347.462606,25.1577477 347.757871,24.8624822 L350.582003,22.0383504 L353.406135,24.8624822 C353.699445,25.1557931 354.178197,25.1596708 354.47109,24.8667776 C354.766025,24.5718423 354.76206,24.0970875 354.466795,23.801822 L351.642663,20.9776903 Z M338.70972,21.7097195 C338.317752,21.3177522 338.318965,20.6810349 338.70972,20.2902805 L344.643245,14.3567547 C344.840276,14.1597245 345.225639,14 345.493741,14 L355.997239,14 C357.103333,14 357.999999,14.8970601 357.999999,16.0058586 L357.999999,25.9941412 C357.999999,27.1019464 357.106457,27.9999999 355.997239,27.9999999 L345.493741,28 C345.221056,28 344.840643,27.8406431 344.643246,27.6432453 L338.70972,21.7097195 Z' id='Back'></path> </g> </g> </g> </svg>"
  },
  food: "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='17px' height='16px' viewBox='0 0 17 17' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'> <!-- Generator: Sketch 3.5.2 (25235) - http://www.bohemiancoding.com/sketch --> <title>Food</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='iOS-9-Keyboards' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'> <g id='iPhone-6-Portrait-Light-Copy' sketch:type='MSArtboardGroup' transform='translate(-148.000000, -637.000000)'> <g id='Keyboards' sketch:type='MSLayerGroup' transform='translate(0.000000, 408.000000)'> <g id='Food' transform='translate(149.500000, 229.500000)' sketch:type='MSShapeGroup'> <path d='M5.5,15.5 L1,15.5 L0,5 L6.5,5 L6.26360933,7.48210202' id='Drink' stroke='#4A5461'></path> <path d='M6.01077545,1.96930098 L6.51571352,5.22270539 L5.71908184,5.67947812 L5.0389009,1.96930098 L4.85557247,1.96930098 L4.85557247,0.96930098 L8.85557247,0.96930098 L8.85557247,1.96930098 L6.01077545,1.96930098 Z' id='Straw' fill='#4A5461' transform='translate(6.855572, 3.324390) rotate(24.000000) translate(-6.855572, -3.324390) '></path> <rect id='Bottom-Bun' stroke='#4A5461' x='3' y='14' width='10.5' height='1.5' rx='1'></rect> <path d='M1.5,12.5024408 C1.5,11.948808 1.94916916,11.5 2.49268723,11.5 L14.0073128,11.5 C14.5555588,11.5 15,11.9469499 15,12.5024408 L15,12.9975592 C15,13.551192 14.5508308,14 14.0073128,14 L2.49268723,14 C1.94444121,14 1.5,13.5530501 1.5,12.9975592 L1.5,12.5024408 Z M3.93300003,11.8392727 C3.41771834,11.6518976 3.44483697,11.5 3.9955775,11.5 L13.0044225,11.5 C13.5542648,11.5 13.5866061,11.6503251 13.067,11.8392727 L8.5,13.5 L3.93300003,11.8392727 Z' id='&quot;Patty&quot;' fill='#4A5461'></path> <path d='M2.5,10.5 L13.5,10.5 L15,11.5 L1,11.5 L2.5,10.5 Z' id='Cheese' fill='#4A5461'></path> <path d='M8.25,10.5 C11.4256373,10.5 14,10.3284271 14,9.5 C14,8.67157288 11.4256373,8 8.25,8 C5.07436269,8 2.5,8.67157288 2.5,9.5 C2.5,10.3284271 5.07436269,10.5 8.25,10.5 Z' id='Top-Bun' stroke='#4A5461' stroke-width='0.75'></path> </g> </g> </g> </g> </svg>",
  flags: "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='11px' height='15px' viewBox='0 0 11 15' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'> <!-- Generator: Sketch 3.5.2 (25235) - http://www.bohemiancoding.com/sketch --> <title>Flag</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='iOS-9-Keyboards' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'> <g id='iPhone-6-Portrait-Light-Copy' sketch:type='MSArtboardGroup' transform='translate(-275.000000, -639.000000)'> <g id='Keyboards' sketch:type='MSLayerGroup' transform='translate(0.000000, 408.000000)'> <g id='Flag' transform='translate(275.000000, 231.500000)' sketch:type='MSShapeGroup'> <rect id='Pole' fill='#4A5461' x='0' y='0' width='1' height='14'></rect> <path d='M1,1 C1,1 1.25,2 3.5,2 C5.75,2 6,0.749999998 8,0.75 C10,0.749999998 10,1.5 10,1.5 L10,7.5 C10,7.5 10,6.5 8,6.5 C6,6.5 4.80623911,8 3.5,8 C2.19376089,8 1,7 1,7 L1,1 Z' stroke='#4A5461' stroke-linejoin='round'></path> </g> </g> </g> </g> </svg>",
  frequent: "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='17px' height='16px' viewBox='0 0 17 16' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'> <!-- Generator: Sketch 3.5.2 (25235) - http://www.bohemiancoding.com/sketch --> <title>Recent</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='iOS-9-Keyboards' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'> <g id='iPhone-6-Portrait-Light-Copy' sketch:type='MSArtboardGroup' transform='translate(-55.000000, -638.000000)'> <g id='Keyboards' sketch:type='MSLayerGroup' transform='translate(0.000000, 408.000000)'> <g id='Recent' transform='translate(55.500000, 230.000000)' sketch:type='MSShapeGroup'> <circle id='Body' stroke='#4A5461' cx='8' cy='8' r='8'></circle> <path d='M7.5,7.5 L7.5,8.5 L8.5,8.5 L8.5,2 L7.5,2 L7.5,7.5 L4,7.5 L4,8.5 L8.5,8.5 L8.5,7.5 L7.5,7.5 Z' id='Hands' fill='#4A5461'></path> </g> </g> </g> </g> </svg>",
  keyboard: "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='32.5px' height='23.5px' viewBox='0 0 65 47' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'> <!-- Generator: Sketch 3.6.1 (26313) - http://www.bohemiancoding.com/sketch --> <title>Shape</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'> <g id='iPad-Portrait' transform='translate(-1436.000000, -1956.000000)' fill='#000000'> <g id='Keyboard-Light' transform='translate(0.000000, 1422.000000)'> <g id='Keyboard-down' transform='translate(1412.000000, 500.000000)'> <path d='M87.001332,34 C88.1051659,34 89,34.8997127 89,35.9932874 L89,61.0067126 C89,62.1075748 88.1058759,63 87.001332,63 L25.998668,63 C24.8948341,63 24,62.1002873 24,61.0067126 L24,35.9932874 C24,34.8924252 24.8941241,34 25.998668,34 L87.001332,34 Z M26,36 L26,61 L87,61 L87,36 L26,36 Z M79,40 L83,40 L83,44 L79,44 L79,40 Z M72,40 L76,40 L76,44 L72,44 L72,40 Z M65,40 L69,40 L69,44 L65,44 L65,40 Z M58,40 L62,40 L62,44 L58,44 L58,40 Z M51,40 L55,40 L55,44 L51,44 L51,40 Z M44,40 L48,40 L48,44 L44,44 L44,40 Z M37,40 L41,40 L41,44 L37,44 L37,40 Z M30,40 L34,40 L34,44 L30,44 L30,40 Z M79,47 L83,47 L83,51 L79,51 L79,47 Z M72,47 L76,47 L76,51 L72,51 L72,47 Z M65,47 L69,47 L69,51 L65,51 L65,47 Z M58,47 L62,47 L62,51 L58,51 L58,47 Z M51,47 L55,47 L55,51 L51,51 L51,47 Z M44,47 L48,47 L48,51 L44,51 L44,47 Z M37,47 L41,47 L41,51 L37,51 L37,47 Z M30,47 L34,47 L34,51 L30,51 L30,47 Z M79,54 L83,54 L83,58 L79,58 L79,54 Z M72,54 L76,54 L76,58 L72,58 L72,54 Z M44,54 L69,54 L69,58 L44,58 L44,54 Z M37,54 L41,54 L41,58 L37,58 L37,54 Z M30,54 L34,54 L34,58 L30,58 L30,54 Z M44.3163498,69.9771047 C43.3684225,70.5420342 43.3338721,71.5096495 44.2378217,72.1373912 L55.3621539,79.8626088 C56.2667113,80.4907726 57.7338965,80.4903505 58.6378461,79.8626088 L69.7621783,72.1373912 C70.6667357,71.5092274 70.648012,70.5205204 69.7115187,69.9234166 L69.9825731,70.0962396 C69.5181333,69.800115 68.7782557,69.8126493 68.3261307,70.1269323 L57.8154999,77.4331263 C57.3651117,77.746202 56.628165,77.7381786 56.1762103,77.4199424 L45.8386137,70.1408977 C45.3836472,69.8205407 44.6375039,69.7857088 44.1566393,70.0722862 L44.3163498,69.9771047 Z' id='Shape'></path> </g> </g> </g> </g> </svg>",
  keyPopUp: {
    light: {
      "iphone-5": "<svg width='55px' height='92px' viewBox='53 316 55 92' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'> <!-- Generator: Sketch 3.7.2 (28276) - http://www.bohemiancoding.com/sketch --> <desc>Created with Sketch.</desc> <defs> <filter x='-50%' y='-50%' width='200%' height='200%' filterUnits='objectBoundingBox' id='filter-1'> <feOffset dx='0' dy='1' in='SourceAlpha' result='shadowOffsetOuter1'></feOffset> <feGaussianBlur stdDeviation='1.5' in='shadowOffsetOuter1' result='shadowBlurOuter1'></feGaussianBlur> <feColorMatrix values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.4 0' type='matrix' in='shadowBlurOuter1' result='shadowMatrixOuter1'></feColorMatrix> <feMerge> <feMergeNode in='shadowMatrixOuter1'></feMergeNode> <feMergeNode in='SourceGraphic'></feMergeNode> </feMerge> </filter> <path d='M1.34173231,40.9391701 C0.517466128,40.20589 0,39.1374251 0,37.9477635 L0,4.00345598 C0,1.78917136 1.79528248,0 4.00987566,0 L44.9901243,0 C47.2125608,0 49,1.7924083 49,4.00345598 L49,37.9477635 C49,38.9124051 48.6592798,39.7963659 48.0916041,40.4868665 C48.0414233,40.9032289 47.7111888,41.4074672 47.0825908,41.95225 C47.0825908,41.95225 38.5299145,49.0643362 38.5299145,51.1526424 C38.5299145,61.6497561 38.1770099,82.0025406 38.1770099,82.0025406 C38.1412304,84.2024354 36.3210284,86 34.1128495,86 L15.3059539,86 C13.10796,86 11.2781884,84.2100789 11.2417936,82.0020993 C11.2417936,82.0020993 10.8888889,61.6470852 10.8888889,51.1486361 C10.8888889,49.0616654 2.34143662,42.238655 2.34143662,42.238655 C1.77827311,41.7641365 1.44881354,41.3204237 1.34173231,40.9391701 Z' id='path-2'></path> <mask id='mask-3' maskContentUnits='userSpaceOnUse' maskUnits='objectBoundingBox' x='0' y='0' width='49' height='86' fill='white'> <use xlink:href='#path-2'></use> </mask> </defs> <g id='Popover' filter='url(#filter-1)' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' transform='translate(56.000000, 318.000000)'> <use id='Rectangle-14' stroke='#B2B4B9' mask='url(#mask-3)' fill='#FCFCFC' xlink:href='#path-2'></use> </g> </svg>",
      "iphone-6s": "<svg width='64px' height='107px' viewBox='24 387 64 107' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'> <!-- Generator: Sketch 3.7.2 (28276) - http://www.bohemiancoding.com/sketch --> <desc>Created with Sketch.</desc> <defs> <filter x='-50%' y='-50%' width='200%' height='200%' filterUnits='objectBoundingBox' id='filter-1'> <feOffset dx='0' dy='1' in='SourceAlpha' result='shadowOffsetOuter1'></feOffset> <feGaussianBlur stdDeviation='1.5' in='shadowOffsetOuter1' result='shadowBlurOuter1'></feGaussianBlur> <feColorMatrix values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.4 0' type='matrix' in='shadowBlurOuter1' result='shadowMatrixOuter1'></feColorMatrix> <feMerge> <feMergeNode in='shadowMatrixOuter1'></feMergeNode> <feMergeNode in='SourceGraphic'></feMergeNode> </feMerge> </filter> <path d='M1.48647646,48.3779947 C0.58026649,47.6464296 0,46.529587 0,45.2781948 L0,3.99009787 C0,1.7825912 1.79509577,0 4.00945862,0 L53.9905414,0 C56.2005746,0 58,1.78642767 58,3.99009787 L58,45.2781948 C58,46.1833004 57.6982258,47.0169733 57.1895097,47.6856325 C57.0396865,48.0212497 56.7360098,48.3972834 56.2718363,48.7950661 C56.2718363,48.7950661 45.6068376,57.6220693 45.6068376,60.0746149 C45.6068376,72.4026205 45.177967,96.9923164 45.177967,96.9923164 C45.1413748,99.2122214 43.3193065,101 41.1090035,101 L17.386723,101 C15.1812722,101 13.354683,99.2055009 13.3177595,96.9918741 C13.3177595,96.9918741 12.8888889,72.3994838 12.8888889,60.0699099 C12.8888889,57.6189326 2.22673437,49.1462936 2.22673437,49.1462936 C1.90524087,48.8788327 1.65911655,48.620733 1.48647646,48.3779947 Z' id='path-2'></path> <mask id='mask-3' maskContentUnits='userSpaceOnUse' maskUnits='objectBoundingBox' x='0' y='0' width='58' height='101' fill='white'> <use xlink:href='#path-2'></use> </mask> </defs> <g id='Popover' filter='url(#filter-1)' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' transform='translate(27.000000, 389.000000)'> <use id='Rectangle-14' stroke='#B2B4B9' mask='url(#mask-3)' fill='#FCFCFC' xlink:href='#path-2'></use> </g> </svg>",
      "iphone-6s-plus": "<svg width='70px' height='119px' viewBox='28 450 70 119' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'> <!-- Generator: Sketch 3.7.2 (28276) - http://www.bohemiancoding.com/sketch --> <desc>Created with Sketch.</desc> <defs> <filter x='-50%' y='-50%' width='200%' height='200%' filterUnits='objectBoundingBox' id='filter-1'> <feOffset dx='0' dy='1' in='SourceAlpha' result='shadowOffsetOuter1'></feOffset> <feGaussianBlur stdDeviation='1.5' in='shadowOffsetOuter1' result='shadowBlurOuter1'></feGaussianBlur> <feColorMatrix values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.4 0' type='matrix' in='shadowBlurOuter1' result='shadowMatrixOuter1'></feColorMatrix> <feMerge> <feMergeNode in='shadowMatrixOuter1'></feMergeNode> <feMergeNode in='SourceGraphic'></feMergeNode> </feMerge> </filter> <path d='M1.95729395,54.0728304 C0.785911132,53.3757699 0,52.098776 0,50.6389022 L0,3.99524419 C0,1.78671428 1.79242202,0 4.00348663,0 L59.9965134,0 C62.2046235,0 64,1.78873175 64,3.99524419 L64,50.6389022 C64,51.9233686 63.3937116,53.0651556 62.451391,53.795754 C62.4427752,53.8032433 62.4341019,53.8107404 62.4253709,53.8182454 C62.4253709,53.8182454 50.3247863,63.8977402 50.3247863,66.6173947 C50.3247863,80.2880544 49.8443049,108.002007 49.8443049,108.002007 C49.8079665,110.210234 47.9874232,112 45.7789089,112 L18.7680997,112 C16.5534397,112 14.7394456,110.20984 14.7027037,108.001566 C14.7027037,108.001566 14.2222222,80.2845761 14.2222222,66.6121773 C14.2222222,63.8942619 2.14081422,54.2321337 2.14081422,54.2321337 C2.07664913,54.1786298 2.01548111,54.1255134 1.95729395,54.0728304 Z' id='path-2'></path> <mask id='mask-3' maskContentUnits='userSpaceOnUse' maskUnits='objectBoundingBox' x='0' y='0' width='64' height='112' fill='white'> <use xlink:href='#path-2'></use> </mask> </defs> <g id='Popover' filter='url(#filter-1)' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' transform='translate(31.000000, 452.000000)'> <use id='Rectangle-14' stroke='#B2B4B9' mask='url(#mask-3)' fill='#FCFCFC' xlink:href='#path-2'></use> </g> </svg>"
    },
    dark: {
      "iphone-5": "<svg width='55px' height='92px' viewBox='53 316 55 92' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'> <!-- Generator: Sketch 3.7.2 (28276) - http://www.bohemiancoding.com/sketch --> <desc>Created with Sketch.</desc> <defs> <filter x='-50%' y='-50%' width='200%' height='200%' filterUnits='objectBoundingBox' id='filter-1'> <feOffset dx='0' dy='1' in='SourceAlpha' result='shadowOffsetOuter1'></feOffset> <feGaussianBlur stdDeviation='1.5' in='shadowOffsetOuter1' result='shadowBlurOuter1'></feGaussianBlur> <feColorMatrix values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.4 0' type='matrix' in='shadowBlurOuter1' result='shadowMatrixOuter1'></feColorMatrix> <feMerge> <feMergeNode in='shadowMatrixOuter1'></feMergeNode> <feMergeNode in='SourceGraphic'></feMergeNode> </feMerge> </filter> <path d='M1.34173231,40.9391701 C0.517466128,40.20589 0,39.1374251 0,37.9477635 L0,4.00345598 C0,1.78917136 1.79528248,0 4.00987566,0 L44.9901243,0 C47.2125608,0 49,1.7924083 49,4.00345598 L49,37.9477635 C49,38.9124051 48.6592798,39.7963659 48.0916041,40.4868665 C48.0414233,40.9032289 47.7111888,41.4074672 47.0825908,41.95225 C47.0825908,41.95225 38.5299145,49.0643362 38.5299145,51.1526424 C38.5299145,61.6497561 38.1770099,82.0025406 38.1770099,82.0025406 C38.1412304,84.2024354 36.3210284,86 34.1128495,86 L15.3059539,86 C13.10796,86 11.2781884,84.2100789 11.2417936,82.0020993 C11.2417936,82.0020993 10.8888889,61.6470852 10.8888889,51.1486361 C10.8888889,49.0616654 2.34143662,42.238655 2.34143662,42.238655 C1.77827311,41.7641365 1.44881354,41.3204237 1.34173231,40.9391701 Z' id='path-2'></path> <mask id='mask-3' maskContentUnits='userSpaceOnUse' maskUnits='objectBoundingBox' x='0' y='0' width='49' height='86' fill='white'> <use xlink:href='#path-2'></use> </mask> </defs> <g id='Popover' filter='url(#filter-1)' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' transform='translate(56.000000, 318.000000)'> <use id='Rectangle-14' stroke='#636363' mask='url(#mask-3)' fill='#636363' xlink:href='#path-2'></use> </g> </svg>",
      "iphone-6s": "<svg width='64px' height='107px' viewBox='24 387 64 107' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'> <!-- Generator: Sketch 3.7.2 (28276) - http://www.bohemiancoding.com/sketch --> <desc>Created with Sketch.</desc> <defs> <filter x='-50%' y='-50%' width='200%' height='200%' filterUnits='objectBoundingBox' id='filter-1'> <feOffset dx='0' dy='1' in='SourceAlpha' result='shadowOffsetOuter1'></feOffset> <feGaussianBlur stdDeviation='1.5' in='shadowOffsetOuter1' result='shadowBlurOuter1'></feGaussianBlur> <feColorMatrix values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.4 0' type='matrix' in='shadowBlurOuter1' result='shadowMatrixOuter1'></feColorMatrix> <feMerge> <feMergeNode in='shadowMatrixOuter1'></feMergeNode> <feMergeNode in='SourceGraphic'></feMergeNode> </feMerge> </filter> <path d='M1.48647646,48.3779947 C0.58026649,47.6464296 0,46.529587 0,45.2781948 L0,3.99009787 C0,1.7825912 1.79509577,0 4.00945862,0 L53.9905414,0 C56.2005746,0 58,1.78642767 58,3.99009787 L58,45.2781948 C58,46.1833004 57.6982258,47.0169733 57.1895097,47.6856325 C57.0396865,48.0212497 56.7360098,48.3972834 56.2718363,48.7950661 C56.2718363,48.7950661 45.6068376,57.6220693 45.6068376,60.0746149 C45.6068376,72.4026205 45.177967,96.9923164 45.177967,96.9923164 C45.1413748,99.2122214 43.3193065,101 41.1090035,101 L17.386723,101 C15.1812722,101 13.354683,99.2055009 13.3177595,96.9918741 C13.3177595,96.9918741 12.8888889,72.3994838 12.8888889,60.0699099 C12.8888889,57.6189326 2.22673437,49.1462936 2.22673437,49.1462936 C1.90524087,48.8788327 1.65911655,48.620733 1.48647646,48.3779947 Z' id='path-2'></path> <mask id='mask-3' maskContentUnits='userSpaceOnUse' maskUnits='objectBoundingBox' x='0' y='0' width='58' height='101' fill='white'> <use xlink:href='#path-2'></use> </mask> </defs> <g id='Popover' filter='url(#filter-1)' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' transform='translate(27.000000, 389.000000)'> <use id='Rectangle-14' stroke='##636363' mask='url(#mask-3)' fill='#636363' xlink:href='#path-2'></use> </g> </svg>",
      "iphone-6s-plus": "<svg width='70px' height='119px' viewBox='28 450 70 119' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'> <!-- Generator: Sketch 3.7.2 (28276) - http://www.bohemiancoding.com/sketch --> <desc>Created with Sketch.</desc> <defs> <filter x='-50%' y='-50%' width='200%' height='200%' filterUnits='objectBoundingBox' id='filter-1'> <feOffset dx='0' dy='1' in='SourceAlpha' result='shadowOffsetOuter1'></feOffset> <feGaussianBlur stdDeviation='1.5' in='shadowOffsetOuter1' result='shadowBlurOuter1'></feGaussianBlur> <feColorMatrix values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.4 0' type='matrix' in='shadowBlurOuter1' result='shadowMatrixOuter1'></feColorMatrix> <feMerge> <feMergeNode in='shadowMatrixOuter1'></feMergeNode> <feMergeNode in='SourceGraphic'></feMergeNode> </feMerge> </filter> <path d='M1.95729395,54.0728304 C0.785911132,53.3757699 0,52.098776 0,50.6389022 L0,3.99524419 C0,1.78671428 1.79242202,0 4.00348663,0 L59.9965134,0 C62.2046235,0 64,1.78873175 64,3.99524419 L64,50.6389022 C64,51.9233686 63.3937116,53.0651556 62.451391,53.795754 C62.4427752,53.8032433 62.4341019,53.8107404 62.4253709,53.8182454 C62.4253709,53.8182454 50.3247863,63.8977402 50.3247863,66.6173947 C50.3247863,80.2880544 49.8443049,108.002007 49.8443049,108.002007 C49.8079665,110.210234 47.9874232,112 45.7789089,112 L18.7680997,112 C16.5534397,112 14.7394456,110.20984 14.7027037,108.001566 C14.7027037,108.001566 14.2222222,80.2845761 14.2222222,66.6121773 C14.2222222,63.8942619 2.14081422,54.2321337 2.14081422,54.2321337 C2.07664913,54.1786298 2.01548111,54.1255134 1.95729395,54.0728304 Z' id='path-2'></path> <mask id='mask-3' maskContentUnits='userSpaceOnUse' maskUnits='objectBoundingBox' x='0' y='0' width='64' height='112' fill='white'> <use xlink:href='#path-2'></use> </mask> </defs> <g id='Popover' filter='url(#filter-1)' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' transform='translate(31.000000, 452.000000)'> <use id='Rectangle-14' stroke='#636363' mask='url(#mask-3)' fill='#636363' xlink:href='#path-2'></use> </g> </svg>"
    }
  },
  objects: "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='11px' height='16px' viewBox='0 0 11 16' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'> <!-- Generator: Sketch 3.5.2 (25235) - http://www.bohemiancoding.com/sketch --> <title>Lightbulb</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'> <g id='iPhone-6' sketch:type='MSArtboardGroup' transform='translate(-244.000000, -639.000000)' stroke='#4A5361'> <g id='Lightbulb' sketch:type='MSLayerGroup' transform='translate(244.000000, 639.000000)'> <path d='M8,10.4002904 C9.78083795,9.48993491 11,7.63734273 11,5.5 C11,2.46243388 8.53756612,0 5.5,0 C2.46243388,0 0,2.46243388 0,5.5 C0,7.63734273 1.21916205,9.48993491 3,10.4002904 L3,14.0020869 C3,15.1017394 3.89761602,16 5.0048815,16 L5.9951185,16 C7.1061002,16 8,15.1055038 8,14.0020869 L8,10.4002904 Z' id='Oval-17' sketch:type='MSShapeGroup'></path> <rect id='Rectangle-50' sketch:type='MSShapeGroup' x='3' y='12' width='5' height='1'></rect> <rect id='Rectangle-51' sketch:type='MSShapeGroup' x='4' y='13.5' width='1.5' height='1'></rect> <path d='M5,8.5 C5,8.5 3.49999999,7.50000001 4,7 C4.50000001,6.49999999 5,7.66666667 5.5,8 C5.5,8 6.5,6.50000001 7,7 C7.5,7.49999999 6,8.5 6,8.5 L6,11 L5,11 L5,8.5 Z' id='Rectangle-52' sketch:type='MSShapeGroup'></path> </g> </g> </g> </svg>",
  shift: {
    on: "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='20px' height='18px' viewBox='0 0 20 17' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'> <!-- Generator: Sketch 3.5.2 (25235) - http://www.bohemiancoding.com/sketch --> <title>Shift</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'> <g id='Keyboard/Light/Upper' sketch:type='MSLayerGroup' transform='translate(-14.000000, -130.000000)' fill='#030303'> <g id='Third-Row' transform='translate(3.000000, 118.000000)' sketch:type='MSShapeGroup'> <path d='M21.7052388,13.2052388 C21.3157462,12.8157462 20.6857559,12.8142441 20.2947612,13.2052388 L11.9160767,21.5839233 C11.1339991,22.3660009 11.3982606,23 12.4979131,23 L16.5,23 L16.5,28.009222 C16.5,28.5564136 16.9463114,29 17.4975446,29 L24.5024554,29 C25.053384,29 25.5,28.5490248 25.5,28.009222 L25.5,23 L29.5020869,23 C30.6055038,23 30.866824,22.366824 30.0839233,21.5839233 L21.7052388,13.2052388 Z' id='Shift'></path> </g> </g> </g> </svg>",
    off: "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='20px' height='18px' viewBox='0 0 20 19' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'> <!-- Generator: Sketch 3.5.2 (25235) - http://www.bohemiancoding.com/sketch --> <title>Shift</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'> <g id='Keyboard/Light/Lower' sketch:type='MSLayerGroup' transform='translate(-14.000000, -129.000000)' fill='#030303'> <g id='Third-Row' transform='translate(3.000000, 118.000000)' sketch:type='MSShapeGroup'> <path d='M21.6719008,12.2325898 C21.301032,11.8279916 20.6946892,11.8334731 20.3288195,12.2325898 L11.6947023,21.6512983 C10.7587441,22.672308 11.1285541,23.5 12.5097751,23.5 L15.9999999,23.5000002 L15.9999999,28.0014241 C15.9999999,28.8290648 16.6716559,29.5000001 17.497101,29.5000001 L24.5028992,29.5000001 C25.3297253,29.5000001 26.0000003,28.8349703 26.0000003,28.0014241 L26.0000003,23.5000001 L29.4902251,23.5000002 C30.8763357,23.5000002 31.2439521,22.6751916 30.3054161,21.6512985 L21.6719008,12.2325898 Z M21.341748,14.3645316 C21.1530056,14.1632064 20.8433515,14.1670914 20.6582514,14.3645316 L13.5,21.9999998 L17.5000001,21.9999999 L17.5000002,27.5089956 C17.5000002,27.7801703 17.7329027,28.0000008 18.0034229,28.0000008 L23.996577,28.0000008 C24.2746097,28.0000008 24.4999997,27.7721203 24.4999997,27.5089956 L24.4999997,21.9999999 L28.5,21.9999999 L21.341748,14.3645316 Z' id='Shift'></path> </g> </g> </g> </svg>"
  },
  messages_app: "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='60px' height='60px' viewBox='0 0 60 60' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'> <!-- Generator: Sketch 39.1 (31720) - http://www.bohemiancoding.com/sketch --> <title>Messages Copy</title> <desc>Created with Sketch.</desc> <defs> <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='linearGradient-1'> <stop stop-color='#66FD7F' offset='0%'></stop> <stop stop-color='#09B826' offset='100%'></stop> </linearGradient> </defs> <g id='iOS-Kit' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'> <g id='Home-Screen' transform='translate(-1452.000000, -853.000000)'> <g id='Home-Screen-•-iPhone-6s-Plus' transform='translate(1417.000000, 812.000000)'> <g id='Messages-Copy' transform='translate(35.000000, 41.000000)'> <rect id='BG' fill='url(#linearGradient-1)' x='0' y='0' width='60' height='60' rx='14'></rect> <path d='M19.4223976,44.3088006 C13.1664228,41.1348949 9,35.4655421 9,29 C9,19.0588745 18.8497355,11 31,11 C43.1502645,11 53,19.0588745 53,29 C53,38.9411255 43.1502645,47 31,47 C28.6994588,47 26.4813914,46.7110897 24.3970409,46.1751953 C23.9442653,46.8838143 21.9065377,49.5 16.5,49.5 C15.6150187,49.5 17.1834749,48.5915921 18,47.5 C18.7894286,46.4446326 19.2505625,44.9480362 19.4223976,44.3088006 Z' id='Bubble' fill='#FFFFFF'></path> </g> </g> </g> </g> </svg>",
  calendar_app: "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='60px' height='60px' viewBox='0 0 60 60' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'> <!-- Generator: Sketch 39.1 (31720) - http://www.bohemiancoding.com/sketch --> <title>Calendar</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'> <g id='Home-Screen-•-iPhone-SE' transform='translate(-92.000000, -27.000000)'> <g id='Home-Screen-•-iPhone-6s-Copy' transform='translate(0.000000, 27.000000)'> <g id='Calendar' transform='translate(92.000000, 0.000000)'> <rect id='BG' fill='#FFFFFF' x='0' y='0' width='60' height='60' rx='14'></rect> <text id='25' font-family='SFUIDisplay-Ultralight, SF UI Display' font-size='40' font-weight='200' letter-spacing='0.379999995' fill='#000000'> <tspan x='7.10828125' y='49'>25</tspan> </text> <text id='Monday' font-family='SFUIDisplay-Medium, SF UI Display' font-size='11' font-weight='400' letter-spacing='0.379999995' fill='#FF3B30'> <tspan x='9.02992189' y='15'>Monday</tspan> </text> </g> </g> </g> </g> </svg>",
  photos_app: "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='60px' height='60px' viewBox='0 0 60 60' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'> <!-- Generator: Sketch 39.1 (31720) - http://www.bohemiancoding.com/sketch --> <title>Photos</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'> <g id='Home-Screen-•-iPhone-SE' transform='translate(-168.000000, -27.000000)'> <g id='Home-Screen-•-iPhone-6s-Copy' transform='translate(0.000000, 27.000000)'> <g id='Photos' transform='translate(168.000000, 0.000000)'> <rect id='BG' fill='#FFFFFF' x='0' y='0' width='60' height='60' rx='14'></rect> <rect id='Pedal' fill='#F26E64' style='mix-blend-mode: multiply;' transform='translate(20.142136, 20.142136) rotate(45.000000) translate(-20.142136, -20.142136) ' x='8.14213562' y='12.1421356' width='24' height='16' rx='8'></rect> <rect id='Pedal' fill='#F0E22A' style='mix-blend-mode: multiply;' transform='translate(39.142136, 19.142136) rotate(135.000000) translate(-39.142136, -19.142136) ' x='27.1421356' y='11.1421356' width='24' height='16' rx='8'></rect> <rect id='Pedal' fill='#D288B1' style='mix-blend-mode: multiply;' x='4' y='22' width='24' height='16' rx='8'></rect> <rect id='Pedal' fill='#FBAD31' style='mix-blend-mode: multiply;' transform='translate(30.000000, 16.000000) rotate(90.000000) translate(-30.000000, -16.000000) ' x='18' y='8' width='24' height='16' rx='8'></rect> <rect id='Pedal' fill='#A58EC2' style='mix-blend-mode: multiply;' transform='translate(20.142136, 40.142136) scale(1, -1) rotate(45.000000) translate(-20.142136, -40.142136) ' x='8.14213562' y='32.1421356' width='24' height='16' rx='8'></rect> <rect id='Pedal' fill='#6CC199' style='mix-blend-mode: multiply;' transform='translate(40.142136, 40.142136) scale(1, -1) rotate(135.000000) translate(-40.142136, -40.142136) ' x='28.1421356' y='32.1421356' width='24' height='16' rx='8'></rect> <rect id='Pedal' fill='#77AEDD' style='mix-blend-mode: multiply;' transform='translate(30.000000, 44.000000) scale(1, -1) rotate(90.000000) translate(-30.000000, -44.000000) ' x='18' y='36' width='24' height='16' rx='8'></rect> <rect id='Pedal' fill='#B5D655' style='mix-blend-mode: multiply;' transform='translate(44.000000, 30.000000) rotate(180.000000) translate(-44.000000, -30.000000) ' x='32' y='22' width='24' height='16' rx='8'></rect> </g> </g> </g> </g> </svg>",
  camera_app: "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='60px' height='60px' viewBox='0 0 60 60' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'> <!-- Generator: Sketch 39.1 (31720) - http://www.bohemiancoding.com/sketch --> <title>Camera</title> <desc>Created with Sketch.</desc> <defs> <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='linearGradient-1'> <stop stop-color='#DBDDDE' offset='0%'></stop> <stop stop-color='#898B91' offset='100%'></stop> </linearGradient> <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='linearGradient-2'> <stop stop-color='#474747' offset='0%'></stop> <stop stop-color='#2B2B2B' offset='100%'></stop> </linearGradient> <path d='M9,20 L51,20 L51,42 L9,42 L9,20 Z M9,42.9975722 C9,44.3795877 10.1199653,45.5 11.5015125,45.5 L48.4984875,45.5 C49.8766015,45.5 51,44.3796249 51,42.9975722 L51,42.5 L9,42.5 L9,42.9975722 Z M9,19.5 L9,19.0024278 C9,17.6203751 10.1233985,16.5 11.5015125,16.5 L17.5304496,16.5 C18.4572011,16.4180186 19.3218208,16.2416313 19.9205322,15.8902588 C21.8326425,14.7680772 21.9641113,11.5 24.996205,11.5 L30.026083,11.5 L35.0559611,11.5 C38.0880548,11.5 38.2195236,14.7680772 40.1316339,15.8902588 C40.7303453,16.2416313 41.594965,16.4180186 42.5217165,16.5 L48.4984875,16.5 C49.8800347,16.5 51,17.6204123 51,19.0024278 L51,19.5 L9,19.5 L9,19.5 Z M39.25,31 C39.25,25.8913661 35.1086339,21.75 30,21.75 C24.8913661,21.75 20.75,25.8913661 20.75,31 C20.75,36.1086339 24.8913661,40.25 30,40.25 C35.1086339,40.25 39.25,36.1086339 39.25,31 L39.25,31 Z M22.25,31 C22.25,26.7197932 25.7197932,23.25 30,23.25 C34.2802068,23.25 37.75,26.7197932 37.75,31 C37.75,35.2802068 34.2802068,38.75 30,38.75 C25.7197932,38.75 22.25,35.2802068 22.25,31 L22.25,31 Z' id='path-3'></path> <filter x='-50%' y='-50%' width='200%' height='200%' filterUnits='objectBoundingBox' id='filter-4'> <feOffset dx='0' dy='1' in='SourceAlpha' result='shadowOffsetOuter1'></feOffset> <feColorMatrix values='0 0 0 0 1   0 0 0 0 1   0 0 0 0 1  0 0 0 0.5 0' type='matrix' in='shadowOffsetOuter1'></feColorMatrix> </filter> <filter x='-50%' y='-50%' width='200%' height='200%' filterUnits='objectBoundingBox' id='filter-5'> <feGaussianBlur stdDeviation='1' in='SourceAlpha' result='shadowBlurInner1'></feGaussianBlur> <feOffset dx='0' dy='1' in='shadowBlurInner1' result='shadowOffsetInner1'></feOffset> <feComposite in='shadowOffsetInner1' in2='SourceAlpha' operator='arithmetic' k2='-1' k3='1' result='shadowInnerInner1'></feComposite> <feColorMatrix values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.3 0' type='matrix' in='shadowInnerInner1' result='shadowMatrixInner1'></feColorMatrix> <feGaussianBlur stdDeviation='0.5' in='SourceAlpha' result='shadowBlurInner2'></feGaussianBlur> <feOffset dx='0' dy='1' in='shadowBlurInner2' result='shadowOffsetInner2'></feOffset> <feComposite in='shadowOffsetInner2' in2='SourceAlpha' operator='arithmetic' k2='-1' k3='1' result='shadowInnerInner2'></feComposite> <feColorMatrix values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.3 0' type='matrix' in='shadowInnerInner2' result='shadowMatrixInner2'></feColorMatrix> <feGaussianBlur stdDeviation='0.5' in='SourceAlpha' result='shadowBlurInner3'></feGaussianBlur> <feOffset dx='0' dy='0' in='shadowBlurInner3' result='shadowOffsetInner3'></feOffset> <feComposite in='shadowOffsetInner3' in2='SourceAlpha' operator='arithmetic' k2='-1' k3='1' result='shadowInnerInner3'></feComposite> <feColorMatrix values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.3 0' type='matrix' in='shadowInnerInner3' result='shadowMatrixInner3'></feColorMatrix> <feGaussianBlur stdDeviation='0.5' in='SourceAlpha' result='shadowBlurInner4'></feGaussianBlur> <feOffset dx='-0' dy='0' in='shadowBlurInner4' result='shadowOffsetInner4'></feOffset> <feComposite in='shadowOffsetInner4' in2='SourceAlpha' operator='arithmetic' k2='-1' k3='1' result='shadowInnerInner4'></feComposite> <feColorMatrix values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.3 0' type='matrix' in='shadowInnerInner4' result='shadowMatrixInner4'></feColorMatrix> <feMerge> <feMergeNode in='shadowMatrixInner1'></feMergeNode> <feMergeNode in='shadowMatrixInner2'></feMergeNode> <feMergeNode in='shadowMatrixInner3'></feMergeNode> <feMergeNode in='shadowMatrixInner4'></feMergeNode> </feMerge> </filter> <path d='M13,15.25 C13,14.8357864 13.3355947,14.5 13.7508378,14.5 L15.7491622,14.5 C16.1638385,14.5 16.5,14.8328986 16.5,15.25 L16.5,16 L13,16 L13,15.25 L13,15.25 Z' id='path-6'></path> <filter x='-50%' y='-50%' width='200%' height='200%' filterUnits='objectBoundingBox' id='filter-7'> <feOffset dx='0' dy='0' in='SourceAlpha' result='shadowOffsetOuter1'></feOffset> <feColorMatrix values='0 0 0 0 1   0 0 0 0 1   0 0 0 0 1  0 0 0 0.5 0' type='matrix' in='shadowOffsetOuter1'></feColorMatrix> </filter> <filter x='-50%' y='-50%' width='200%' height='200%' filterUnits='objectBoundingBox' id='filter-8'> <feOffset dx='0' dy='1' in='SourceAlpha' result='shadowOffsetInner1'></feOffset> <feComposite in='shadowOffsetInner1' in2='SourceAlpha' operator='arithmetic' k2='-1' k3='1' result='shadowInnerInner1'></feComposite> <feColorMatrix values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0' type='matrix' in='shadowInnerInner1'></feColorMatrix> </filter> <circle id='path-9' cx='39.5' cy='23' r='1'></circle> <filter x='-50%' y='-50%' width='200%' height='200%' filterUnits='objectBoundingBox' id='filter-10'> <feOffset dx='0' dy='0' in='SourceAlpha' result='shadowOffsetOuter1'></feOffset> <feColorMatrix values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0' type='matrix' in='shadowOffsetOuter1'></feColorMatrix> </filter> <filter x='-50%' y='-50%' width='200%' height='200%' filterUnits='objectBoundingBox' id='filter-11'> <feGaussianBlur stdDeviation='0.5' in='SourceAlpha' result='shadowBlurInner1'></feGaussianBlur> <feOffset dx='0' dy='0' in='shadowBlurInner1' result='shadowOffsetInner1'></feOffset> <feComposite in='shadowOffsetInner1' in2='SourceAlpha' operator='arithmetic' k2='-1' k3='1' result='shadowInnerInner1'></feComposite> <feColorMatrix values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.3 0' type='matrix' in='shadowInnerInner1'></feColorMatrix> </filter> </defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'> <g id='Home-Screen-•-iPhone-SE' transform='translate(-244.000000, -27.000000)'> <g id='Home-Screen-•-iPhone-6s-Copy' transform='translate(0.000000, 27.000000)'> <g id='Camera' transform='translate(244.000000, 0.000000)'> <g id='icon'> <path d='M39.0815,0 C45.105,0 48.116,0 51.3585,1.025 C54.8985,2.3135 57.6865,5.1015 58.975,8.6415 C60,11.8835 60,14.8955 60,20.9185 L60,39.0815 C60,45.105 60,48.116 58.975,51.3585 C57.6865,54.8985 54.8985,57.6865 51.3585,58.9745 C48.116,60 45.105,60 39.0815,60 L20.9185,60 C14.895,60 11.8835,60 8.6415,58.9745 C5.1015,57.6865 2.3135,54.8985 1.025,51.3585 C0,48.116 0,45.105 0,39.0815 L0,20.9185 C0,14.8955 0,11.8835 1.025,8.6415 C2.3135,5.1015 5.1015,2.3135 8.6415,1.025 C11.8835,0 14.895,0 20.9185,0 L39.0815,0 Z' id='Icon' fill='url(#linearGradient-1)'></path> <g id='Camera'> <use fill='black' fill-opacity='1' filter='url(#filter-4)' xlink:href='#path-3'></use> <use fill='url(#linearGradient-2)' fill-rule='evenodd' xlink:href='#path-3'></use> <use fill='black' fill-opacity='1' filter='url(#filter-5)' xlink:href='#path-3'></use> </g> <g id='Path'> <use fill='black' fill-opacity='1' filter='url(#filter-7)' xlink:href='#path-6'></use> <use fill='url(#linearGradient-2)' fill-rule='evenodd' xlink:href='#path-6'></use> <use fill='black' fill-opacity='1' filter='url(#filter-8)' xlink:href='#path-6'></use> </g> <g id='Oval-16'> <use fill='black' fill-opacity='1' filter='url(#filter-10)' xlink:href='#path-9'></use> <use fill='#FFC209' fill-rule='evenodd' xlink:href='#path-9'></use> <use fill='black' fill-opacity='1' filter='url(#filter-11)' xlink:href='#path-9'></use> </g> </g> </g> </g> </g> </g> </svg>",
  weather_app: "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='60px' height='60px' viewBox='0 0 60 60' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'> <!-- Generator: Sketch 39.1 (31720) - http://www.bohemiancoding.com/sketch --> <title>Wealther</title> <desc>Created with Sketch.</desc> <defs> <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='linearGradient-1'> <stop stop-color='#1D62F0' offset='0%'></stop> <stop stop-color='#19D5FD' offset='100%'></stop> </linearGradient> </defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'> <g id='Home-Screen-•-iPhone-SE' transform='translate(-16.000000, -115.000000)'> <g id='Home-Screen-•-iPhone-6s-Copy' transform='translate(0.000000, 27.000000)'> <g id='Wealther' transform='translate(16.000000, 88.000000)'> <path d='M39.0815,0 C45.105,0 48.116,0 51.3585,1.025 C54.8985,2.3135 57.6865,5.1015 58.975,8.6415 C60,11.8835 60,14.8955 60,20.9185 L60,39.0815 C60,45.105 60,48.116 58.975,51.3585 C57.6865,54.8985 54.8985,57.6865 51.3585,58.9745 C48.116,60 45.105,60 39.0815,60 L20.9185,60 C14.895,60 11.8835,60 8.6415,58.9745 C5.1015,57.6865 2.3135,54.8985 1.025,51.3585 C0,48.116 0,45.105 0,39.0815 L0,20.9185 C0,14.8955 0,11.8835 1.025,8.6415 C2.3135,5.1015 5.1015,2.3135 8.6415,1.025 C11.8835,0 14.895,0 20.9185,0 L39.0815,0 Z' id='BG' fill='url(#linearGradient-1)'></path> <circle id='Sun' fill='#FFD800' cx='19.75' cy='24.25' r='11.25'></circle> <path d='M41.5,43.996687 C46.4930625,43.8642035 50.5,39.775037 50.5,34.75 C50.5,29.6413661 46.3586339,25.5 41.25,25.5 C41.0574549,25.5 40.8662838,25.505883 40.6766567,25.5174791 C39.0043353,21.4018889 34.9660539,18.5 30.25,18.5 C24.0367966,18.5 19,23.5367966 19,29.75 C19,30.0391915 19.0109117,30.3258344 19.032346,30.6095395 C15.8856244,31.1828157 13.5,33.9378116 13.5,37.25 C13.5,40.8942242 16.3879002,43.8639431 20,43.9954562 L20,44 L41.5,44 L41.5,43.996687 L41.5,43.996687 Z' id='Cloud' fill='#FFFFFF' opacity='0.900536381'></path> </g> </g> </g> </g> </svg>",
  clock_app: "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='60px' height='60px' viewBox='0 0 60 60' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'> <!-- Generator: Sketch 39.1 (31720) - http://www.bohemiancoding.com/sketch --> <title>Clock</title> <desc>Created with Sketch.</desc> <defs> <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='linearGradient-1'> <stop stop-color='#F1F1F1' offset='0%'></stop> <stop stop-color='#EEEEEE' offset='100%'></stop> </linearGradient> </defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'> <g id='Home-Screen-•-iPhone-SE' transform='translate(-92.000000, -115.000000)'> <g id='Home-Screen-•-iPhone-6s-Copy' transform='translate(0.000000, 27.000000)'> <g id='Clock' transform='translate(92.000000, 88.000000)'> <path d='M39.0815,0 C45.105,0 48.116,0 51.3585,1.025 C54.8985,2.3135 57.6865,5.1015 58.975,8.6415 C60,11.8835 60,14.8955 60,20.9185 L60,39.0815 C60,45.105 60,48.116 58.975,51.3585 C57.6865,54.8985 54.8985,57.6865 51.3585,58.9745 C48.116,60 45.105,60 39.0815,60 L20.9185,60 C14.895,60 11.8835,60 8.6415,58.9745 C5.1015,57.6865 2.3135,54.8985 1.025,51.3585 C0,48.116 0,45.105 0,39.0815 L0,20.9185 C0,14.8955 0,11.8835 1.025,8.6415 C2.3135,5.1015 5.1015,2.3135 8.6415,1.025 C11.8835,0 14.895,0 20.9185,0 L39.0815,0 Z' id='Icon' fill='#1E1E1F'></path> <circle id='Oval-12' fill='url(#linearGradient-1)' cx='30' cy='30' r='26'></circle> <g id='Digits' transform='translate(8.000000, 7.000000)' fill='#616161'> <path d='M32.468,8 L32.468,3.746 L32.078,3.746 C32.0499999,3.9060008 31.9980004,4.03799948 31.922,4.142 C31.8459996,4.24600052 31.7530005,4.3279997 31.643,4.388 C31.5329994,4.4480003 31.4100007,4.48899989 31.274,4.511 C31.1379993,4.53300011 30.9980007,4.544 30.854,4.544 L30.854,4.952 L31.958,4.952 L31.958,8 L32.468,8 Z' id='1'></path> <path d='M38.096,12.752 L38.606,12.752 C38.602,12.6239994 38.6149999,12.4970006 38.645,12.371 C38.6750002,12.2449994 38.7239997,12.1320005 38.792,12.032 C38.8600003,11.9319995 38.9469995,11.8510003 39.053,11.789 C39.1590005,11.7269997 39.2859993,11.696 39.434,11.696 C39.5460006,11.696 39.6519995,11.7139998 39.752,11.75 C39.8520005,11.7860002 39.9389996,11.8379997 40.013,11.906 C40.0870004,11.9740003 40.1459998,12.0549995 40.19,12.149 C40.2340002,12.2430005 40.256,12.3479994 40.256,12.464 C40.256,12.6120007 40.2330002,12.7419994 40.187,12.854 C40.1409998,12.9660006 40.0730005,13.0699995 39.983,13.166 C39.8929996,13.2620005 39.7800007,13.3569995 39.644,13.451 C39.5079993,13.5450005 39.3500009,13.6479994 39.17,13.76 C39.0219993,13.8480004 38.8800007,13.9419995 38.744,14.042 C38.6079993,14.1420005 38.4860005,14.2579993 38.378,14.39 C38.2699995,14.5220007 38.1810004,14.6769991 38.111,14.855 C38.0409997,15.0330009 37.9960001,15.2479987 37.976,15.5 L40.754,15.5 L40.754,15.05 L38.57,15.05 C38.5940001,14.9179993 38.6449996,14.8010005 38.723,14.699 C38.8010004,14.5969995 38.8949995,14.5020004 39.005,14.414 C39.1150006,14.3259996 39.2359993,14.2430004 39.368,14.165 C39.5000007,14.0869996 39.6319993,14.0080004 39.764,13.928 C39.8960007,13.8439996 40.0239994,13.7560005 40.148,13.664 C40.2720006,13.5719995 40.3819995,13.4690006 40.478,13.355 C40.5740005,13.2409994 40.6509997,13.1120007 40.709,12.968 C40.7670003,12.8239993 40.796,12.6580009 40.796,12.47 C40.796,12.269999 40.7610004,12.0940008 40.691,11.942 C40.6209997,11.7899992 40.5260006,11.6630005 40.406,11.561 C40.2859994,11.4589995 40.1450008,11.3810003 39.983,11.327 C39.8209992,11.2729997 39.6480009,11.246 39.464,11.246 C39.2399989,11.246 39.0400009,11.2839996 38.864,11.36 C38.6879991,11.4360004 38.5410006,11.5409993 38.423,11.675 C38.3049994,11.8090007 38.2180003,11.9679991 38.162,12.152 C38.1059997,12.3360009 38.0839999,12.5359989 38.096,12.752 L38.096,12.752 Z' id='2'></path> <path d='M42.14,22.57 L42.14,23.002 C42.2360005,22.9899999 42.3379995,22.984 42.446,22.984 C42.5740006,22.984 42.6929995,23.0009998 42.803,23.035 C42.9130006,23.0690002 43.0079996,23.1209997 43.088,23.191 C43.1680004,23.2610004 43.2319998,23.3469995 43.28,23.449 C43.3280002,23.5510005 43.352,23.6679993 43.352,23.8 C43.352,23.9280006 43.3270003,24.0429995 43.277,24.145 C43.2269998,24.2470005 43.1600004,24.3329997 43.076,24.403 C42.9919996,24.4730004 42.8940006,24.5269998 42.782,24.565 C42.6699994,24.6030002 42.5520006,24.622 42.428,24.622 C42.1359985,24.622 41.9140008,24.5350009 41.762,24.361 C41.6099992,24.1869991 41.53,23.9620014 41.522,23.686 L41.012,23.686 C41.008,23.9060011 41.0389997,24.1019991 41.105,24.274 C41.1710003,24.4460009 41.2659994,24.5909994 41.39,24.709 C41.5140006,24.8270006 41.6639991,24.9159997 41.84,24.976 C42.0160009,25.0360003 42.2119989,25.066 42.428,25.066 C42.628001,25.066 42.8169991,25.0390003 42.995,24.985 C43.1730009,24.9309997 43.3279993,24.8500005 43.46,24.742 C43.5920007,24.6339995 43.6969996,24.4990008 43.775,24.337 C43.8530004,24.1749992 43.892,23.9880011 43.892,23.776 C43.892,23.5199987 43.8290006,23.2980009 43.703,23.11 C43.5769994,22.9219991 43.3840013,22.8000003 43.124,22.744 L43.124,22.732 C43.2920008,22.6559996 43.4319994,22.5440007 43.544,22.396 C43.6560006,22.2479993 43.712,22.078001 43.712,21.886 C43.712,21.689999 43.6790003,21.5200007 43.613,21.376 C43.5469997,21.2319993 43.4560006,21.1140005 43.34,21.022 C43.2239994,20.9299995 43.0870008,20.8610002 42.929,20.815 C42.7709992,20.7689998 42.6000009,20.746 42.416,20.746 C42.2039989,20.746 42.0170008,20.7799997 41.855,20.848 C41.6929992,20.9160003 41.5580005,21.0099994 41.45,21.13 C41.3419995,21.2500006 41.2590003,21.3939992 41.201,21.562 C41.1429997,21.7300008 41.11,21.915999 41.102,22.12 L41.612,22.12 C41.612,21.9959994 41.6279998,21.8780006 41.66,21.766 C41.6920002,21.6539994 41.7409997,21.5560004 41.807,21.472 C41.8730003,21.3879996 41.9569995,21.3210003 42.059,21.271 C42.1610005,21.2209998 42.2799993,21.196 42.416,21.196 C42.6320011,21.196 42.8119993,21.2529994 42.956,21.367 C43.1000007,21.4810006 43.172,21.6519989 43.172,21.88 C43.172,21.9920006 43.1500002,22.0919996 43.106,22.18 C43.0619998,22.2680004 43.0030004,22.3409997 42.929,22.399 C42.8549996,22.4570003 42.7690005,22.5009999 42.671,22.531 C42.5729995,22.5610002 42.4700005,22.576 42.362,22.576 L42.254,22.576 L42.194,22.576 C42.1779999,22.576 42.1600001,22.574 42.14,22.57 L42.14,22.57 Z' id='3'></path> <path d='M40.366,34.054 L38.938,34.054 L40.354,31.972 L40.366,31.972 L40.366,34.054 Z M40.846,34.054 L40.846,31.246 L40.438,31.246 L38.5,34.012 L38.5,34.504 L40.366,34.504 L40.366,35.5 L40.846,35.5 L40.846,34.504 L41.422,34.504 L41.422,34.054 L40.846,34.054 Z' id='4'></path> <path d='M33.652,38.768 L33.652,38.318 L31.552,38.318 L31.156,40.526 L31.594,40.55 C31.6940005,40.4299994 31.8089993,40.3330004 31.939,40.259 C32.0690006,40.1849996 32.2179992,40.148 32.386,40.148 C32.5300007,40.148 32.6609994,40.1719998 32.779,40.22 C32.8970006,40.2680002 32.9979996,40.3349996 33.082,40.421 C33.1660004,40.5070004 33.2309998,40.6089994 33.277,40.727 C33.3230002,40.8450006 33.346,40.9739993 33.346,41.114 C33.346,41.2820008 33.3220002,41.4289994 33.274,41.555 C33.2259998,41.6810006 33.1610004,41.7859996 33.079,41.87 C32.9969996,41.9540004 32.9010005,42.0169998 32.791,42.059 C32.6809994,42.1010002 32.5660006,42.122 32.446,42.122 C32.3179994,42.122 32.2010005,42.1030002 32.095,42.065 C31.9889995,42.0269998 31.8970004,41.9730004 31.819,41.903 C31.7409996,41.8329997 31.6790002,41.7510005 31.633,41.657 C31.5869998,41.5629995 31.56,41.4620005 31.552,41.354 L31.042,41.354 C31.046,41.546001 31.0839996,41.7179992 31.156,41.87 C31.2280004,42.0220008 31.3259994,42.1489995 31.45,42.251 C31.5740006,42.3530005 31.7169992,42.4309997 31.879,42.485 C32.0410008,42.5390003 32.2139991,42.566 32.398,42.566 C32.6460012,42.566 32.8629991,42.5270004 33.049,42.449 C33.2350009,42.3709996 33.3899994,42.2660007 33.514,42.134 C33.6380006,42.0019993 33.7309997,41.8510009 33.793,41.681 C33.8550003,41.5109992 33.886,41.3360009 33.886,41.156 C33.886,40.9119988 33.8500004,40.6990009 33.778,40.517 C33.7059996,40.3349991 33.6080006,40.1830006 33.484,40.061 C33.3599994,39.9389994 33.2140008,39.8480003 33.046,39.788 C32.8779992,39.7279997 32.7000009,39.698 32.512,39.698 C32.3679993,39.698 32.2230007,39.7229998 32.077,39.773 C31.9309993,39.8230003 31.8120005,39.8999995 31.72,40.004 L31.708,39.992 L31.936,38.768 L33.652,38.768 Z' id='5'></path> <path d='M22.816,42.332 L23.326,42.332 C23.2939998,41.9799982 23.174001,41.7110009 22.966,41.525 C22.757999,41.3389991 22.4780018,41.246 22.126,41.246 C21.8219985,41.246 21.570001,41.3099994 21.37,41.438 C21.169999,41.5660006 21.0100006,41.7359989 20.89,41.948 C20.7699994,42.1600011 20.6850002,42.4029986 20.635,42.677 C20.5849997,42.9510014 20.56,43.2339985 20.56,43.526 C20.56,43.7500011 20.5769998,43.9819988 20.611,44.222 C20.6450002,44.4620012 20.7139995,44.681999 20.818,44.882 C20.9220005,45.082001 21.069999,45.2459994 21.262,45.374 C21.454001,45.5020006 21.7079984,45.566 22.024,45.566 C22.2920013,45.566 22.5169991,45.5210005 22.699,45.431 C22.8810009,45.3409996 23.0269994,45.2270007 23.137,45.089 C23.2470005,44.9509993 23.3259998,44.7980008 23.374,44.63 C23.4220002,44.4619992 23.446,44.3000008 23.446,44.144 C23.446,43.947999 23.4160003,43.7660008 23.356,43.598 C23.2959997,43.4299992 23.2110005,43.2840006 23.101,43.16 C22.9909994,43.0359994 22.8550008,42.9390004 22.693,42.869 C22.5309992,42.7989997 22.348001,42.764 22.144,42.764 C21.9119988,42.764 21.7070009,42.8079996 21.529,42.896 C21.3509991,42.9840004 21.2020006,43.125999 21.082,43.322 L21.07,43.31 C21.074,43.1459992 21.0899999,42.9700009 21.118,42.782 C21.1460001,42.5939991 21.1969996,42.4190008 21.271,42.257 C21.3450004,42.0949992 21.4479993,41.9610005 21.58,41.855 C21.7120007,41.7489995 21.8859989,41.696 22.102,41.696 C22.306001,41.696 22.4699994,41.7539994 22.594,41.87 C22.7180006,41.9860006 22.7919999,42.139999 22.816,42.332 L22.816,42.332 Z M22.048,43.214 C22.1920007,43.214 22.3179995,43.2399997 22.426,43.292 C22.5340005,43.3440003 22.6239996,43.4129996 22.696,43.499 C22.7680004,43.5850004 22.8209998,43.6869994 22.855,43.805 C22.8890002,43.9230006 22.906,44.0479993 22.906,44.18 C22.906,44.3040006 22.8870002,44.4229994 22.849,44.537 C22.8109998,44.6510006 22.7560004,44.7519996 22.684,44.84 C22.6119996,44.9280004 22.5230005,44.9969998 22.417,45.047 C22.3109995,45.0970003 22.1880007,45.122 22.048,45.122 C21.9079993,45.122 21.7830005,45.0970003 21.673,45.047 C21.5629994,44.9969998 21.4710004,44.9300004 21.397,44.846 C21.3229996,44.7619996 21.2660002,44.6620006 21.226,44.546 C21.1859998,44.4299994 21.166,44.3060007 21.166,44.174 C21.166,44.0419993 21.1849998,43.9170006 21.223,43.799 C21.2610002,43.6809994 21.3179996,43.5790004 21.394,43.493 C21.4700004,43.4069996 21.5619995,43.3390003 21.67,43.289 C21.7780005,43.2389998 21.9039993,43.214 22.048,43.214 L22.048,43.214 Z' id='6'></path> <path d='M12.886,38.756 L12.886,38.318 L10.132,38.318 L10.132,38.798 L12.364,38.798 C12.1399989,39.0340012 11.931001,39.2919986 11.737,39.572 C11.542999,39.8520014 11.3720007,40.1489984 11.224,40.463 C11.0759993,40.7770016 10.9550005,41.1049983 10.861,41.447 C10.7669995,41.7890017 10.7080001,42.1399982 10.684,42.5 L11.254,42.5 C11.2740001,42.1679983 11.3299995,41.8260018 11.422,41.474 C11.5140005,41.1219982 11.6329993,40.7800017 11.779,40.448 C11.9250007,40.1159983 12.0919991,39.8040015 12.28,39.512 C12.4680009,39.2199985 12.6699989,38.9680011 12.886,38.756 L12.886,38.756 Z' id='7'></path> <path d='M3.262,32.35 C3.262,32.2419995 3.2819998,32.1480004 3.322,32.068 C3.3620002,31.9879996 3.41499967,31.9200003 3.481,31.864 C3.54700033,31.8079997 3.62599954,31.7660001 3.718,31.738 C3.81000046,31.7099999 3.9059995,31.696 4.006,31.696 C4.21400104,31.696 4.38499933,31.7509995 4.519,31.861 C4.65300067,31.9710006 4.72,32.1339989 4.72,32.35 C4.72,32.5660011 4.65400066,32.7339994 4.522,32.854 C4.38999934,32.9740006 4.22200102,33.034 4.018,33.034 C3.91399948,33.034 3.81600046,33.0200001 3.724,32.992 C3.63199954,32.9639999 3.55200034,32.9220003 3.484,32.866 C3.41599966,32.8099997 3.3620002,32.7390004 3.322,32.653 C3.2819998,32.5669996 3.262,32.4660006 3.262,32.35 L3.262,32.35 Z M2.722,32.332 C2.722,32.524001 2.77599946,32.7009992 2.884,32.863 C2.99200054,33.0250008 3.1359991,33.1419996 3.316,33.214 C3.0759988,33.2980004 2.89200064,33.4329991 2.764,33.619 C2.63599936,33.8050009 2.572,34.0239987 2.572,34.276 C2.572,34.4920011 2.60899963,34.6809992 2.683,34.843 C2.75700037,35.0050008 2.85899935,35.1399995 2.989,35.248 C3.11900065,35.3560005 3.27199912,35.4359997 3.448,35.488 C3.62400088,35.5400003 3.81399898,35.566 4.018,35.566 C4.21400098,35.566 4.39799914,35.5380003 4.57,35.482 C4.74200086,35.4259997 4.89099937,35.3430006 5.017,35.233 C5.14300063,35.1229995 5.24299963,34.9880008 5.317,34.828 C5.39100037,34.6679992 5.428,34.484001 5.428,34.276 C5.428,34.0119987 5.36600062,33.7890009 5.242,33.607 C5.11799938,33.4249991 4.92800128,33.2940004 4.672,33.214 C4.8520009,33.1339996 4.99499947,33.0150008 5.101,32.857 C5.20700053,32.6989992 5.26,32.524001 5.26,32.332 C5.26,32.1959993 5.23600024,32.0630007 5.188,31.933 C5.13999976,31.8029994 5.06500051,31.6870005 4.963,31.585 C4.86099949,31.4829995 4.72800082,31.4010003 4.564,31.339 C4.39999918,31.2769997 4.20200116,31.246 3.97,31.246 C3.80599918,31.246 3.64900075,31.2699998 3.499,31.318 C3.34899925,31.3660002 3.21600058,31.4359995 3.1,31.528 C2.98399942,31.6200005 2.89200034,31.7329993 2.824,31.867 C2.75599966,32.0010007 2.722,32.1559991 2.722,32.332 L2.722,32.332 Z M3.112,34.3 C3.112,34.1759994 3.13499977,34.0640005 3.181,33.964 C3.22700023,33.8639995 3.29099959,33.7780004 3.373,33.706 C3.45500041,33.6339996 3.55099945,33.5790002 3.661,33.541 C3.77100055,33.5029998 3.88799938,33.484 4.012,33.484 C4.1320006,33.484 4.24499947,33.5049998 4.351,33.547 C4.45700053,33.5890002 4.5499996,33.6459996 4.63,33.718 C4.7100004,33.7900004 4.77299977,33.8749995 4.819,33.973 C4.86500023,34.0710005 4.888,34.1779994 4.888,34.294 C4.888,34.4140006 4.86700021,34.5239995 4.825,34.624 C4.78299979,34.7240005 4.72300039,34.8109996 4.645,34.885 C4.56699961,34.9590004 4.47500053,35.0169998 4.369,35.059 C4.26299947,35.1010002 4.14600064,35.122 4.018,35.122 C3.75399868,35.122 3.53700085,35.0490007 3.367,34.903 C3.19699915,34.7569993 3.112,34.5560013 3.112,34.3 L3.112,34.3 Z' id='8'></path> <path d='M1.136,23.974 L0.626,23.974 C0.65800016,24.3420018 0.79199882,24.6159991 1.028,24.796 C1.26400118,24.9760009 1.55999822,25.066 1.916,25.066 C2.43200258,25.066 2.80699883,24.869002 3.041,24.475 C3.27500117,24.080998 3.392,23.5160037 3.392,22.78 C3.392,22.375998 3.35300039,22.0430013 3.275,21.781 C3.19699961,21.5189987 3.09200066,21.3120008 2.96,21.16 C2.82799934,21.0079992 2.67400088,20.9010003 2.498,20.839 C2.32199912,20.7769997 2.134001,20.746 1.934,20.746 C1.72999898,20.746 1.54200086,20.7799997 1.37,20.848 C1.19799914,20.9160003 1.05000062,21.0109994 0.926,21.133 C0.80199938,21.2550006 0.70600034,21.4009992 0.638,21.571 C0.56999966,21.7410009 0.536,21.927999 0.536,22.132 C0.536,22.340001 0.56499971,22.5319991 0.623,22.708 C0.68100029,22.8840009 0.76699943,23.0339994 0.881,23.158 C0.99500057,23.2820006 1.13599916,23.3789997 1.304,23.449 C1.47200084,23.5190004 1.66399892,23.554 1.88,23.554 C2.08800104,23.554 2.27999912,23.5010005 2.456,23.395 C2.63200088,23.2889995 2.76799952,23.1460009 2.864,22.966 L2.876,22.978 C2.85999992,23.5340028 2.77400078,23.9469987 2.618,24.217 C2.46199922,24.4870014 2.22800156,24.622 1.916,24.622 C1.71199898,24.622 1.53600074,24.5660006 1.388,24.454 C1.23999926,24.3419994 1.1560001,24.182001 1.136,23.974 L1.136,23.974 Z M2.786,22.168 C2.786,22.2920006 2.7660002,22.4109994 2.726,22.525 C2.6859998,22.6390006 2.62800038,22.7389996 2.552,22.825 C2.47599962,22.9110004 2.38400054,22.9789998 2.276,23.029 C2.16799946,23.0790003 2.04800066,23.104 1.916,23.104 C1.79199938,23.104 1.67900051,23.0790003 1.577,23.029 C1.47499949,22.9789998 1.38700037,22.9120004 1.313,22.828 C1.23899963,22.7439996 1.18100021,22.6480005 1.139,22.54 C1.09699979,22.4319995 1.076,22.3200006 1.076,22.204 C1.076,22.0719993 1.09099985,21.9460006 1.121,21.826 C1.15100015,21.7059994 1.19899967,21.5990005 1.265,21.505 C1.33100033,21.4109995 1.41699947,21.3360003 1.523,21.28 C1.62900053,21.2239997 1.75799924,21.196 1.91,21.196 C2.05400072,21.196 2.17999946,21.2219997 2.288,21.274 C2.39600054,21.3260003 2.48699963,21.3969996 2.561,21.487 C2.63500037,21.5770005 2.69099981,21.6799994 2.729,21.796 C2.76700019,21.9120006 2.786,22.0359993 2.786,22.168 L2.786,22.168 Z' id='9'></path> <path d='M2.8,15.5 L2.8,11.246 L2.41,11.246 C2.38199986,11.4060008 2.33000038,11.5379995 2.254,11.642 C2.17799962,11.7460005 2.08500055,11.8279997 1.975,11.888 C1.86499945,11.9480003 1.74200068,11.9889999 1.606,12.011 C1.46999932,12.0330001 1.33000072,12.044 1.186,12.044 L1.186,12.452 L2.29,12.452 L2.29,15.5 L2.8,15.5 Z M4.792,13.406 C4.792,13.3019995 4.79299999,13.1870006 4.795,13.061 C4.79700001,12.9349994 4.80699991,12.8090006 4.825,12.683 C4.84300009,12.5569994 4.86899983,12.4340006 4.903,12.314 C4.93700017,12.1939994 4.98699967,12.0890005 5.053,11.999 C5.11900033,11.9089996 5.2019995,11.8360003 5.302,11.78 C5.4020005,11.7239997 5.52399928,11.696 5.668,11.696 C5.81200072,11.696 5.9339995,11.7239997 6.034,11.78 C6.1340005,11.8360003 6.21699967,11.9089996 6.283,11.999 C6.34900033,12.0890005 6.39899983,12.1939994 6.433,12.314 C6.46700017,12.4340006 6.49299991,12.5569994 6.511,12.683 C6.52900009,12.8090006 6.53899999,12.9349994 6.541,13.061 C6.54300001,13.1870006 6.544,13.3019995 6.544,13.406 C6.544,13.5660008 6.53900005,13.744999 6.529,13.943 C6.51899995,14.141001 6.48700027,14.3269991 6.433,14.501 C6.37899973,14.6750009 6.2920006,14.8219994 6.172,14.942 C6.0519994,15.0620006 5.88400108,15.122 5.668,15.122 C5.45199892,15.122 5.2840006,15.0620006 5.164,14.942 C5.0439994,14.8219994 4.95700027,14.6750009 4.903,14.501 C4.84899973,14.3269991 4.81700005,14.141001 4.807,13.943 C4.79699995,13.744999 4.792,13.5660008 4.792,13.406 L4.792,13.406 Z M4.252,13.412 C4.252,13.5680008 4.25599996,13.7299992 4.264,13.898 C4.27200004,14.0660008 4.29199984,14.2299992 4.324,14.39 C4.35600016,14.5500008 4.4019997,14.7009993 4.462,14.843 C4.5220003,14.9850007 4.60399948,15.1099995 4.708,15.218 C4.81200052,15.3260005 4.94299921,15.4109997 5.101,15.473 C5.25900079,15.5350003 5.4479989,15.566 5.668,15.566 C5.89200112,15.566 6.08199922,15.5350003 6.238,15.473 C6.39400078,15.4109997 6.52399948,15.3260005 6.628,15.218 C6.73200052,15.1099995 6.8139997,14.9850007 6.874,14.843 C6.9340003,14.7009993 6.97999984,14.5500008 7.012,14.39 C7.04400016,14.2299992 7.06399996,14.0660008 7.072,13.898 C7.08000004,13.7299992 7.084,13.5680008 7.084,13.412 C7.084,13.2559992 7.08000004,13.0940008 7.072,12.926 C7.06399996,12.7579992 7.04400016,12.5940008 7.012,12.434 C6.97999984,12.2739992 6.9340003,12.1220007 6.874,11.978 C6.8139997,11.8339993 6.73200052,11.7080005 6.628,11.6 C6.52399948,11.4919995 6.39300079,11.4060003 6.235,11.342 C6.07699921,11.2779997 5.8880011,11.246 5.668,11.246 C5.4479989,11.246 5.25900079,11.2779997 5.101,11.342 C4.94299921,11.4060003 4.81200052,11.4919995 4.708,11.6 C4.60399948,11.7080005 4.5220003,11.8339993 4.462,11.978 C4.4019997,12.1220007 4.35600016,12.2739992 4.324,12.434 C4.29199984,12.5940008 4.27200004,12.7579992 4.264,12.926 C4.25599996,13.0940008 4.252,13.2559992 4.252,13.412 L4.252,13.412 Z' id='10'></path> <path d='M10.8,8 L10.8,3.746 L10.41,3.746 C10.3819999,3.9060008 10.3300004,4.03799948 10.254,4.142 C10.1779996,4.24600052 10.0850005,4.3279997 9.975,4.388 C9.86499945,4.4480003 9.74200068,4.48899989 9.606,4.511 C9.46999932,4.53300011 9.33000072,4.544 9.186,4.544 L9.186,4.952 L10.29,4.952 L10.29,8 L10.8,8 Z M14.136,8 L14.136,3.746 L13.746,3.746 C13.7179999,3.9060008 13.6660004,4.03799948 13.59,4.142 C13.5139996,4.24600052 13.4210005,4.3279997 13.311,4.388 C13.2009994,4.4480003 13.0780007,4.48899989 12.942,4.511 C12.8059993,4.53300011 12.6660007,4.544 12.522,4.544 L12.522,4.952 L13.626,4.952 L13.626,8 L14.136,8 Z' id='11'></path> <path d='M20.8,5 L20.8,0.746 L20.41,0.746 C20.3819999,0.9060008 20.3300004,1.03799948 20.254,1.142 C20.1779996,1.24600052 20.0850005,1.3279997 19.975,1.388 C19.8649994,1.4480003 19.7420007,1.48899989 19.606,1.511 C19.4699993,1.53300011 19.3300007,1.544 19.186,1.544 L19.186,1.952 L20.29,1.952 L20.29,5 L20.8,5 Z M22.264,2.252 L22.774,2.252 C22.77,2.12399936 22.7829998,1.99700063 22.813,1.871 C22.8430001,1.74499937 22.8919997,1.6320005 22.96,1.532 C23.0280003,1.4319995 23.1149995,1.35100031 23.221,1.289 C23.3270005,1.22699969 23.4539993,1.196 23.602,1.196 C23.7140006,1.196 23.8199995,1.21399982 23.92,1.25 C24.0200005,1.28600018 24.1069996,1.33799966 24.181,1.406 C24.2550004,1.47400034 24.3139998,1.55499953 24.358,1.649 C24.4020002,1.74300047 24.424,1.84799942 24.424,1.964 C24.424,2.11200074 24.4010002,2.24199944 24.355,2.354 C24.3089998,2.46600056 24.2410004,2.56999952 24.151,2.666 C24.0609995,2.76200048 23.9480007,2.85699953 23.812,2.951 C23.6759993,3.04500047 23.5180009,3.14799944 23.338,3.26 C23.1899993,3.34800044 23.0480007,3.4419995 22.912,3.542 C22.7759993,3.6420005 22.6540005,3.75799934 22.546,3.89 C22.4379995,4.02200066 22.3490003,4.17699911 22.279,4.355 C22.2089996,4.53300089 22.1640001,4.74799874 22.144,5 L24.922,5 L24.922,4.55 L22.738,4.55 C22.7620001,4.41799934 22.8129996,4.30100051 22.891,4.199 C22.9690004,4.09699949 23.0629994,4.00200044 23.173,3.914 C23.2830005,3.82599956 23.4039993,3.74300039 23.536,3.665 C23.6680007,3.58699961 23.7999993,3.5080004 23.932,3.428 C24.0640007,3.34399958 24.1919994,3.25600046 24.316,3.164 C24.4400006,3.07199954 24.5499995,2.96900057 24.646,2.855 C24.7420005,2.74099943 24.8189997,2.61200072 24.877,2.468 C24.9350003,2.32399928 24.964,2.15800094 24.964,1.97 C24.964,1.769999 24.9290003,1.59400076 24.859,1.442 C24.7889996,1.28999924 24.6940006,1.16300051 24.574,1.061 C24.4539994,0.95899949 24.3130008,0.88100027 24.151,0.827 C23.9889992,0.77299973 23.8160009,0.746 23.632,0.746 C23.4079989,0.746 23.2080009,0.78399962 23.032,0.86 C22.8559991,0.93600038 22.7090006,1.04099933 22.591,1.175 C22.4729994,1.30900067 22.3860003,1.46799908 22.33,1.652 C22.2739997,1.83600092 22.2519999,2.03599892 22.264,2.252 L22.264,2.252 Z' id='12'></path> </g> <polygon id='Hour' fill='#2A2929' transform='translate(25.319297, 23.611917) rotate(-38.000000) translate(-25.319297, -23.611917) ' points='24.8192972 15.6119168 25.8192972 15.6119168 25.8192972 31.6119168 24.8192972 31.6119168'></polygon> <polygon id='Minute' fill='#2A2929' transform='translate(19.329949, 35.730028) rotate(62.000000) translate(-19.329949, -35.730028) ' points='19.0494321 24.2986991 19.9184363 24.2986991 19.7874404 47.2986991 18.9184363 47.2986991'></polygon> <polygon id='Second' fill='#DD4524' transform='translate(39.644621, 32.129480) rotate(-76.000000) translate(-39.644621, -32.129480) ' points='38.9523565 18.2482315 39.9221138 18.2482315 39.9523565 46.2482315 38.9825992 46.2482315'></polygon> <circle id='Oval-13' fill='#2A2929' cx='30' cy='30' r='1.25'></circle> <circle id='Oval-14' fill='#DD4524' cx='30' cy='30' r='0.75'></circle> </g> </g> </g> </g> </svg>",
  maps_app: "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='60px' height='60px' viewBox='0 0 60 60' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'> <!-- Generator: Sketch 39.1 (31720) - http://www.bohemiancoding.com/sketch --> <title>Maps</title> <desc>Created with Sketch.</desc> <defs> <path d='M39.0815,0 C45.105,0 48.116,0 51.3585,1.025 C54.8985,2.3135 57.6865,5.1015 58.975,8.6415 C60,11.8835 60,14.8955 60,20.9185 L60,39.0815 C60,45.105 60,48.116 58.975,51.3585 C57.6865,54.8985 54.8985,57.6865 51.3585,58.9745 C48.116,60 45.105,60 39.0815,60 L20.9185,60 C14.895,60 11.8835,60 8.6415,58.9745 C5.1015,57.6865 2.3135,54.8985 1.025,51.3585 C0,48.116 0,45.105 0,39.0815 L0,20.9185 C0,14.8955 0,11.8835 1.025,8.6415 C2.3135,5.1015 5.1015,2.3135 8.6415,1.025 C11.8835,0 14.895,0 20.9185,0 L39.0815,0 Z' id='path-1'></path> <path d='M-4.5,30 C-4.5,30 -4.47462625,30.4967807 -4.42511695,30.4912401 C-3.44229055,30.3812506 9.10445696,28.4946923 17.5075684,34.5092773 C23.2683105,38.6325684 26.42078,43.7490087 31,48.1848145 C36.7919922,53.7954102 44.3314042,55.6680664 50.4058144,56.250293 C56.4802246,56.8325195 65,56 65,56 L65,66 C65,66 53.5489633,65.3769385 47.8234863,64.6784668 C42.0980093,63.9799951 33.2470703,62.026123 27.392334,57.927002 C17.9909668,50.1728516 19.277874,47.8193763 12.291748,43.2246094 C5.24072266,38.5871582 -4.5,40.5 -4.5,40.5 L-4.5,30 Z' id='path-3'></path> <mask id='mask-4' maskContentUnits='userSpaceOnUse' maskUnits='objectBoundingBox' x='-0.5' y='-0.5' width='70.5' height='37'> <rect x='-5' y='29.5' width='70.5' height='37' fill='white'></rect> <use xlink:href='#path-3' fill='black'></use> </mask> <polygon id='path-5' points='50.5 60 41.5 60 41.5 18.8429752 0 18.8429752 0 9.91735537 41.5 9.91735537 41.5 0 50.5 0 50.5 9.91735537 60 9.91735537 60 18.8429752 50.5 18.8429752 50.5 36.6942149 60 36.6942149 60 45.6198347 50.5 45.6198347'></polygon> <mask id='mask-6' maskContentUnits='userSpaceOnUse' maskUnits='objectBoundingBox' x='-0.5' y='-0.5' width='61' height='61'> <rect x='-0.5' y='-0.5' width='61' height='61' fill='white'></rect> <use xlink:href='#path-5' fill='black'></use> </mask> <path d='M0.5,7.5 C0.814961548,13.8459051 5.03679656,19.5 12.75,19.5 C20.4632034,19.5 24.6314755,13.8439381 25,7.5 C25.1235352,5.37341309 24.3674316,2.56555176 23.5068131,1.2710142 C22.4549565,2.02599285 20.4373562,2.5 18.75,2.5 C16.1596631,2.5 13.4693848,1.88292106 12.75,0.347133799 C12.0306152,1.88292106 9.34033689,2.5 6.75,2.5 C5.06264383,2.5 3.04504346,2.02599285 1.99318686,1.2710142 C1.13293457,2.76416016 0.392089844,5.32580566 0.5,7.5 Z' id='path-7'></path> <mask id='mask-8' maskContentUnits='userSpaceOnUse' maskUnits='objectBoundingBox' x='0' y='0' width='24.5237787' height='19.1528662' fill='white'> <use xlink:href='#path-7'></use> </mask> <mask id='mask-10' maskContentUnits='userSpaceOnUse' maskUnits='objectBoundingBox' x='0' y='0' width='24.5237787' height='19.1528662' fill='white'> <use xlink:href='#path-7'></use> </mask> <rect id='path-11' x='0' y='0.5' width='25' height='5'></rect> <filter x='-50%' y='-50%' width='200%' height='200%' filterUnits='objectBoundingBox' id='filter-12'> <feOffset dx='0' dy='1' in='SourceAlpha' result='shadowOffsetOuter1'></feOffset> <feColorMatrix values='0 0 0 0 1   0 0 0 0 1   0 0 0 0 1  0 0 0 1 0' type='matrix' in='shadowOffsetOuter1'></feColorMatrix> </filter> <path d='M0.5,7.5 C0.814961548,13.8459051 5.03679656,19.5 12.75,19.5 C20.4632034,19.5 24.6314755,13.8439381 25,7.5 C25.1235352,5.37341309 24.3674316,2.56555176 23.5068131,1.2710142 C22.4549565,2.02599285 20.4373562,2.5 18.75,2.5 C16.1596631,2.5 13.4693848,1.88292106 12.75,0.347133799 C12.0306152,1.88292106 9.34033689,2.5 6.75,2.5 C5.06264383,2.5 3.04504346,2.02599285 1.99318686,1.2710142 C1.13293457,2.76416016 0.392089844,5.32580566 0.5,7.5 Z' id='path-13'></path> <mask id='mask-14' maskContentUnits='userSpaceOnUse' maskUnits='objectBoundingBox' x='0' y='0' width='24.5237787' height='19.1528662' fill='white'> <use xlink:href='#path-13'></use> </mask> </defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'> <g id='Home-Screen-•-iPhone-SE' transform='translate(-168.000000, -115.000000)'> <g id='Home-Screen-•-iPhone-6s-Copy' transform='translate(0.000000, 27.000000)'> <g id='Maps' transform='translate(168.000000, 88.000000)'> <mask id='mask-2' fill='white'> <use xlink:href='#path-1'></use> </mask> <use id='BG' fill='#E4DDC9' xlink:href='#path-1'></use> <rect id='Block' fill='#76C63B' mask='url(#mask-2)' x='0' y='0' width='42' height='10'></rect> <rect id='Block' fill='#FBC6D1' mask='url(#mask-2)' x='45' y='0.5' width='15' height='10'></rect> <g id='Highway' mask='url(#mask-2)'> <use fill='#FFDE02' fill-rule='evenodd' xlink:href='#path-3'></use> <use stroke='#FEB312' mask='url(#mask-4)' stroke-width='1' xlink:href='#path-3'></use> </g> <g id='Map' mask='url(#mask-2)'> <use fill='#FFFFFF' fill-rule='evenodd' xlink:href='#path-5'></use> <use stroke-opacity='0.1' stroke='#000000' mask='url(#mask-6)' stroke-width='1' xlink:href='#path-5'></use> </g> <path d='M43.6565914,35.5 L43.4489796,35.5 L43.4489796,17 L-1,17 L-1,12 L48.5,12 L48.5,14.5 L48.5,14.5 L48.5,35.5 L48.2923882,35.5 C47.586899,35.178996 46.801811,35 45.9744898,35 C45.1471685,35 44.3620806,35.178996 43.6565914,35.5 L43.6565914,35.5 Z' id='Route' fill='#409BFF' mask='url(#mask-2)'></path> <g id='Indicator' mask='url(#mask-2)'> <g transform='translate(40.500000, 35.500000)'> <circle id='Circle' fill='#007AFF' cx='5.5' cy='5.5' r='5.5'></circle> <polygon id='Arrow' fill='#FFFFFF' points='7.75 8.75 5.5 1.65380592 3.25 8.75 5.5 6.65380592'></polygon> </g> </g> <g id='280' mask='url(#mask-2)'> <g transform='translate(8.000000, 22.500000)'> <mask id='mask-9' fill='white'> <use xlink:href='#path-7'></use> </mask> <g id='Oval-20' stroke='#FFFFFF' mask='url(#mask-8)' stroke-width='1' fill='#007AFF' fill-rule='evenodd'> <use mask='url(#mask-10)' xlink:href='#path-7'></use> </g> <g id='Top' stroke='none' fill='none' mask='url(#mask-9)'> <use fill='black' fill-opacity='1' filter='url(#filter-12)' xlink:href='#path-11'></use> <use fill='#DE1D26' fill-rule='evenodd' xlink:href='#path-11'></use> </g> <g id='Shield' stroke='none' fill='none' mask='url(#mask-9)' stroke-width='1.5'> <use stroke='#FFFFFF' mask='url(#mask-14)' xlink:href='#path-13'></use> </g> <path d='M5.64,9.378 L6.405,9.378 C6.39899997,9.18599904 6.41849978,8.99550095 6.4635,8.8065 C6.50850023,8.61749906 6.58199949,8.44800075 6.684,8.298 C6.78600051,8.14799925 6.91649921,8.02650047 7.0755,7.9335 C7.2345008,7.84049954 7.42499889,7.794 7.647,7.794 C7.81500084,7.794 7.97399925,7.82099973 8.124,7.875 C8.27400075,7.92900027 8.40449945,8.00699949 8.5155,8.109 C8.62650056,8.21100051 8.71499967,8.3324993 8.781,8.4735 C8.84700033,8.61450071 8.88,8.77199913 8.88,8.946 C8.88,9.16800111 8.84550035,9.36299916 8.7765,9.531 C8.70749966,9.69900084 8.60550068,9.85499928 8.4705,9.999 C8.33549933,10.1430007 8.16600102,10.2854993 7.962,10.4265 C7.75799898,10.5675007 7.52100135,10.7219992 7.251,10.89 C7.02899889,11.0220007 6.81600102,11.1629993 6.612,11.313 C6.40799898,11.4630008 6.22500081,11.636999 6.063,11.835 C5.90099919,12.033001 5.76750053,12.2654987 5.6625,12.5325 C5.55749948,12.7995013 5.49000015,13.1219981 5.46,13.5 L9.627,13.5 L9.627,12.825 L6.351,12.825 C6.38700018,12.626999 6.46349942,12.4515008 6.5805,12.2985 C6.69750059,12.1454992 6.83849918,12.0030007 7.0035,11.871 C7.16850083,11.7389993 7.34999901,11.6145006 7.548,11.4975 C7.74600099,11.3804994 7.94399901,11.2620006 8.142,11.142 C8.34000099,11.0159994 8.53199907,10.8840007 8.718,10.746 C8.90400093,10.6079993 9.06899928,10.4535009 9.213,10.2825 C9.35700072,10.1114991 9.47249957,9.91800108 9.5595,9.702 C9.64650044,9.48599892 9.69,9.23700141 9.69,8.955 C9.69,8.6549985 9.63750053,8.39100114 9.5325,8.163 C9.42749948,7.93499886 9.2850009,7.74450077 9.105,7.5915 C8.9249991,7.43849924 8.71350122,7.32150041 8.4705,7.2405 C8.22749879,7.1594996 7.96800138,7.119 7.692,7.119 C7.35599832,7.119 7.05600132,7.17599943 6.792,7.29 C6.52799868,7.40400057 6.30750089,7.561499 6.1305,7.7625 C5.95349912,7.96350101 5.82300042,8.20199862 5.739,8.478 C5.65499958,8.75400138 5.62199991,9.05399838 5.64,9.378 L5.64,9.378 Z M11.643,8.775 C11.643,8.61299919 11.6729997,8.4720006 11.733,8.352 C11.7930003,8.2319994 11.8724995,8.13000042 11.9715,8.046 C12.0705005,7.96199958 12.1889993,7.89900021 12.327,7.857 C12.4650007,7.81499979 12.6089993,7.794 12.759,7.794 C13.0710016,7.794 13.327499,7.87649918 13.5285,8.0415 C13.729501,8.20650083 13.83,8.45099838 13.83,8.775 C13.83,9.09900162 13.731001,9.3509991 13.533,9.531 C13.334999,9.7110009 13.0830015,9.801 12.777,9.801 C12.6209992,9.801 12.4740007,9.78000021 12.336,9.738 C12.1979993,9.69599979 12.0780005,9.63300042 11.976,9.549 C11.8739995,9.46499958 11.7930003,9.35850065 11.733,9.2295 C11.6729997,9.10049936 11.643,8.94900087 11.643,8.775 L11.643,8.775 Z M10.833,8.748 C10.833,9.03600144 10.9139992,9.30149879 11.076,9.5445 C11.2380008,9.78750122 11.4539987,9.96299946 11.724,10.071 C11.3639982,10.1970006 11.088001,10.3994986 10.896,10.6785 C10.703999,10.9575014 10.608,11.2859981 10.608,11.664 C10.608,11.9880016 10.6634994,12.2714988 10.7745,12.5145 C10.8855006,12.7575012 11.038499,12.9599992 11.2335,13.122 C11.428501,13.2840008 11.6579987,13.4039996 11.922,13.482 C12.1860013,13.5600004 12.4709985,13.599 12.777,13.599 C13.0710015,13.599 13.3469987,13.5570004 13.605,13.473 C13.8630013,13.3889996 14.0864991,13.2645008 14.2755,13.0995 C14.4645009,12.9344992 14.6144994,12.7320012 14.7255,12.492 C14.8365006,12.2519988 14.892,11.9760016 14.892,11.664 C14.892,11.267998 14.7990009,10.9335014 14.613,10.6605 C14.4269991,10.3874986 14.1420019,10.1910006 13.758,10.071 C14.0280014,9.9509994 14.2424992,9.77250119 14.4015,9.5355 C14.5605008,9.29849882 14.64,9.03600144 14.64,8.748 C14.64,8.54399898 14.6040004,8.34450098 14.532,8.1495 C14.4599996,7.95449903 14.3475008,7.78050077 14.1945,7.6275 C14.0414992,7.47449924 13.8420012,7.35150047 13.596,7.2585 C13.3499988,7.16549954 13.0530017,7.119 12.705,7.119 C12.4589988,7.119 12.2235011,7.15499964 11.9985,7.227 C11.7734989,7.29900036 11.5740009,7.40399931 11.4,7.542 C11.2259991,7.68000069 11.0880005,7.849499 10.986,8.0505 C10.8839995,8.25150101 10.833,8.48399868 10.833,8.748 L10.833,8.748 Z M11.418,11.7 C11.418,11.5139991 11.4524997,11.3460008 11.5215,11.196 C11.5905003,11.0459993 11.6864994,10.9170005 11.8095,10.809 C11.9325006,10.7009995 12.0764992,10.6185003 12.2415,10.5615 C12.4065008,10.5044997 12.5819991,10.476 12.768,10.476 C12.9480009,10.476 13.1174992,10.5074997 13.2765,10.5705 C13.4355008,10.6335003 13.5749994,10.7189995 13.695,10.827 C13.8150006,10.9350005 13.9094997,11.0624993 13.9785,11.2095 C14.0475003,11.3565007 14.082,11.5169991 14.082,11.691 C14.082,11.8710009 14.0505003,12.0359993 13.9875,12.186 C13.9244997,12.3360008 13.8345006,12.4664994 13.7175,12.5775 C13.6004994,12.6885006 13.4625008,12.7754997 13.3035,12.8385 C13.1444992,12.9015003 12.969001,12.933 12.777,12.933 C12.380998,12.933 12.0555013,12.8235011 11.8005,12.6045 C11.5454987,12.3854989 11.418,12.0840019 11.418,11.7 L11.418,11.7 Z M16.44,10.359 C16.44,10.2029992 16.4415,10.0305009 16.4445,9.8415 C16.4475,9.65249906 16.4624999,9.46350095 16.4895,9.2745 C16.5165001,9.08549906 16.5554997,8.9010009 16.6065,8.721 C16.6575003,8.5409991 16.7324995,8.38350068 16.8315,8.2485 C16.9305005,8.11349933 17.0549993,8.00400042 17.205,7.92 C17.3550008,7.83599958 17.5379989,7.794 17.754,7.794 C17.9700011,7.794 18.1529993,7.83599958 18.303,7.92 C18.4530008,8.00400042 18.5774995,8.11349933 18.6765,8.2485 C18.7755005,8.38350068 18.8504997,8.5409991 18.9015,8.721 C18.9525003,8.9010009 18.9914999,9.08549906 19.0185,9.2745 C19.0455001,9.46350095 19.0605,9.65249906 19.0635,9.8415 C19.0665,10.0305009 19.068,10.2029992 19.068,10.359 C19.068,10.5990012 19.0605001,10.8674985 19.0455,11.1645 C19.0304999,11.4615015 18.9825004,11.7404987 18.9015,12.0015 C18.8204996,12.2625013 18.6900009,12.4829991 18.51,12.663 C18.3299991,12.8430009 18.0780016,12.933 17.754,12.933 C17.4299984,12.933 17.1780009,12.8430009 16.998,12.663 C16.8179991,12.4829991 16.6875004,12.2625013 16.6065,12.0015 C16.5254996,11.7404987 16.4775001,11.4615015 16.4625,11.1645 C16.4474999,10.8674985 16.44,10.5990012 16.44,10.359 L16.44,10.359 Z M15.63,10.368 C15.63,10.6020012 15.6359999,10.8449987 15.648,11.097 C15.6600001,11.3490013 15.6899998,11.5949988 15.738,11.835 C15.7860002,12.0750012 15.8549996,12.3014989 15.945,12.5145 C16.0350005,12.7275011 16.1579992,12.9149992 16.314,13.077 C16.4700008,13.2390008 16.6664988,13.3664995 16.9035,13.4595 C17.1405012,13.5525005 17.4239984,13.599 17.754,13.599 C18.0900017,13.599 18.3749988,13.5525005 18.609,13.4595 C18.8430012,13.3664995 19.0379992,13.2390008 19.194,13.077 C19.3500008,12.9149992 19.4729996,12.7275011 19.563,12.5145 C19.6530005,12.3014989 19.7219998,12.0750012 19.77,11.835 C19.8180002,11.5949988 19.8479999,11.3490013 19.86,11.097 C19.8720001,10.8449987 19.878,10.6020012 19.878,10.368 C19.878,10.1339988 19.8720001,9.89100126 19.86,9.639 C19.8479999,9.38699874 19.8180002,9.1410012 19.77,8.901 C19.7219998,8.6609988 19.6530005,8.43300108 19.563,8.217 C19.4729996,8.00099892 19.3500008,7.81200081 19.194,7.65 C19.0379992,7.48799919 18.8415012,7.35900048 18.6045,7.263 C18.3674988,7.16699952 18.0840017,7.119 17.754,7.119 C17.4239984,7.119 17.1405012,7.16699952 16.9035,7.263 C16.6664988,7.35900048 16.4700008,7.48799919 16.314,7.65 C16.1579992,7.81200081 16.0350005,8.00099892 15.945,8.217 C15.8549996,8.43300108 15.7860002,8.6609988 15.738,8.901 C15.6899998,9.1410012 15.6600001,9.38699874 15.648,9.639 C15.6359999,9.89100126 15.63,10.1339988 15.63,10.368 L15.63,10.368 Z' id='280' stroke='none' fill='#FFFFFF' fill-rule='evenodd' mask='url(#mask-9)'></path> </g> </g> </g> </g> </g> </g> </svg>",
  news_app: "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='60px' height='60px' viewBox='0 0 60 60' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'> <!-- Generator: Sketch 39.1 (31720) - http://www.bohemiancoding.com/sketch --> <title>News</title> <desc>Created with Sketch.</desc> <defs> <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='linearGradient-1'> <stop stop-color='#FC5363' offset='0%'></stop> <stop stop-color='#FC3359' offset='100%'></stop> </linearGradient> <path d='M10.136624,47.3823853 C11,47.3823853 11,46.5 11,46.5 L11,12.0052617 C11,11.450071 11.4532303,11 11.9968754,11 L48.0031246,11 C48.5536837,11 49,11.4413032 49,12.0088498 L49,46.9911502 C49,47.5483226 48.543925,48.0029034 47.9964076,48.0062782 C47.9964076,48.0062782 18.6084831,48.1997544 11.0000001,48 C10.1174113,47.9768284 9.41662598,47.668457 9.05755615,47.3823853 C8.69848633,47.0963135 8.36309815,46.7116462 8.36309814,46.6607056 C8.36309814,46.457472 9.27324796,47.3823853 10.136624,47.3823853 Z' id='path-2'></path> <filter x='-50%' y='-50%' width='200%' height='200%' filterUnits='objectBoundingBox' id='filter-4'> <feOffset dx='-1' dy='0' in='SourceAlpha' result='shadowOffsetOuter1'></feOffset> <feGaussianBlur stdDeviation='1' in='shadowOffsetOuter1' result='shadowBlurOuter1'></feGaussianBlur> <feColorMatrix values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.25 0' type='matrix' in='shadowBlurOuter1'></feColorMatrix> </filter> </defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'> <g id='Home-Screen-•-iPhone-SE' transform='translate(-244.000000, -115.000000)'> <g id='Home-Screen-•-iPhone-6s-Copy' transform='translate(0.000000, 27.000000)'> <g id='News' transform='translate(244.000000, 88.000000)'> <rect id='BG' fill='url(#linearGradient-1)' x='0' y='0' width='60' height='60' rx='14'></rect> <path d='M8,45.9165262 L8,16.9953764 C8,16.4456452 8.45526288,16 8.99545703,16 L32.004543,16 C32.5543187,16 33,16.4523621 33,16.9927864 L33,47.0072136 C33,47.5555144 32.5447371,48 32.004543,48 L10.9907522,48 C9.33900538,48 8,46.6569475 8,45.9165262 L8,45.9165262 Z' id='Fold' fill='#FFFFFF'></path> <mask id='mask-3' fill='white'> <use xlink:href='#path-2'></use> </mask> <g id='Mask'> <use fill='black' fill-opacity='1' filter='url(#filter-4)' xlink:href='#path-2'></use> <use fill='#FFFFFF' fill-rule='evenodd' xlink:href='#path-2'></use> </g> <rect id='lines' fill='#BDBDBD' mask='url(#mask-3)' x='17' y='35' width='33' height='2' rx='1'></rect> <rect id='lines' fill='#BDBDBD' mask='url(#mask-3)' x='17' y='39' width='33' height='2' rx='1'></rect> <rect id='lines' fill='#BDBDBD' mask='url(#mask-3)' x='17' y='43' width='33' height='2' rx='1'></rect> <path d='M16,20.1213203 L16,16.9976567 C16,16.4466661 16.4410535,16 16.9976567,16 L20.1213203,16 L20,16.1213203 L31,27.1213203 L31,30.0011436 C31,30.5527968 30.5550661,31 30.0011436,31 L27.1213203,31 L16.1213203,20 L16,20.1213203 L16,20.1213203 Z M16,29.9997809 C16,30.5521867 16.4513294,31 17.0002191,31 L21.8784606,31 C22.4308663,31 22.5652427,30.6865631 22.1684484,30.2897688 L16.7102312,24.8315516 C16.3179814,24.4393017 16,24.5726497 16,25.1215394 L16,29.9997809 Z M29.9997809,16 C30.5521867,16 31,16.4513294 31,17.0002191 L31,21.8784606 C31,22.4308663 30.6873855,22.5660652 30.2956989,22.1743785 L29.5913977,21.4700774 L24.825239,16.7039186 C24.4364754,16.3151551 24.5726497,16 25.1215394,16 L29.9997809,16 Z' id='Logo' fill='#FD4C61' mask='url(#mask-3)'></path> </g> </g> </g> </g> </svg>",
  wallet_app: "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='60px' height='60px' viewBox='0 0 60 60' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'> <!-- Generator: Sketch 39.1 (31720) - http://www.bohemiancoding.com/sketch --> <title>Wallet</title> <desc>Created with Sketch.</desc> <defs> <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='linearGradient-1'> <stop stop-color='#1E1E1F' offset='0%'></stop> <stop stop-color='#1E1E1F' offset='100%'></stop> </linearGradient> <rect id='path-2' x='9' y='15' width='42' height='13' rx='2'></rect> <filter x='-50%' y='-50%' width='200%' height='200%' filterUnits='objectBoundingBox' id='filter-3'> <feOffset dx='0' dy='0' in='SourceAlpha' result='shadowOffsetOuter1'></feOffset> <feGaussianBlur stdDeviation='0.5' in='shadowOffsetOuter1' result='shadowBlurOuter1'></feGaussianBlur> <feColorMatrix values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.1 0' type='matrix' in='shadowBlurOuter1'></feColorMatrix> </filter> <rect id='path-4' x='9' y='18' width='42' height='13' rx='2'></rect> <filter x='-50%' y='-50%' width='200%' height='200%' filterUnits='objectBoundingBox' id='filter-5'> <feOffset dx='0' dy='0' in='SourceAlpha' result='shadowOffsetOuter1'></feOffset> <feGaussianBlur stdDeviation='0.5' in='shadowOffsetOuter1' result='shadowBlurOuter1'></feGaussianBlur> <feColorMatrix values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.1 0' type='matrix' in='shadowBlurOuter1'></feColorMatrix> </filter> <rect id='path-6' x='9' y='21' width='42' height='13' rx='2'></rect> <filter x='-50%' y='-50%' width='200%' height='200%' filterUnits='objectBoundingBox' id='filter-7'> <feOffset dx='0' dy='0' in='SourceAlpha' result='shadowOffsetOuter1'></feOffset> <feGaussianBlur stdDeviation='0.5' in='shadowOffsetOuter1' result='shadowBlurOuter1'></feGaussianBlur> <feColorMatrix values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.1 0' type='matrix' in='shadowBlurOuter1'></feColorMatrix> </filter> <rect id='path-8' x='9' y='25' width='42' height='13' rx='2'></rect> <filter x='-50%' y='-50%' width='200%' height='200%' filterUnits='objectBoundingBox' id='filter-9'> <feOffset dx='0' dy='0' in='SourceAlpha' result='shadowOffsetOuter1'></feOffset> <feGaussianBlur stdDeviation='0.5' in='shadowOffsetOuter1' result='shadowBlurOuter1'></feGaussianBlur> <feColorMatrix values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.1 0' type='matrix' in='shadowBlurOuter1'></feColorMatrix> </filter> <path d='M7,28 L7,42 L53,42 L53,28 L38.9065073,28 C37.7983339,28 36.3057558,28.6722229 35.5501237,29.4784882 C35.5501237,29.4784882 32.4189579,33.3076923 30,33.3076923 C27.5810421,33.3076923 24.4498763,29.4784882 24.4498763,29.4784882 C23.7043702,28.6619417 22.2114781,28 21.0934927,28 L7,28 Z' id='path-10'></path> <filter x='-50%' y='-50%' width='200%' height='200%' filterUnits='objectBoundingBox' id='filter-11'> <feOffset dx='0' dy='-1' in='SourceAlpha' result='shadowOffsetOuter1'></feOffset> <feGaussianBlur stdDeviation='1' in='shadowOffsetOuter1' result='shadowBlurOuter1'></feGaussianBlur> <feColorMatrix values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.1 0' type='matrix' in='shadowBlurOuter1'></feColorMatrix> </filter> </defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'> <g id='Home-Screen-•-iPhone-SE' transform='translate(-16.000000, -203.000000)'> <g id='Home-Screen-•-iPhone-6s-Copy' transform='translate(0.000000, 27.000000)'> <g id='Wallet' transform='translate(16.000000, 176.000000)'> <rect id='BG' fill='url(#linearGradient-1)' x='0' y='0' width='60' height='60' rx='14'></rect> <rect id='wallet' fill='#D9D6CC' x='7' y='12' width='46' height='34' rx='4'></rect> <g id='cards'> <use fill='black' fill-opacity='1' filter='url(#filter-3)' xlink:href='#path-2'></use> <use fill='#3B99C9' fill-rule='evenodd' xlink:href='#path-2'></use> </g> <g id='cards'> <use fill='black' fill-opacity='1' filter='url(#filter-5)' xlink:href='#path-4'></use> <use fill='#FFB003' fill-rule='evenodd' xlink:href='#path-4'></use> </g> <g id='cards'> <use fill='black' fill-opacity='1' filter='url(#filter-7)' xlink:href='#path-6'></use> <use fill='#50BE3D' fill-rule='evenodd' xlink:href='#path-6'></use> </g> <g id='cards'> <use fill='black' fill-opacity='1' filter='url(#filter-9)' xlink:href='#path-8'></use> <use fill='#F16C5E' fill-rule='evenodd' xlink:href='#path-8'></use> </g> <g id='Combined-Shape'> <use fill='black' fill-opacity='1' filter='url(#filter-11)' xlink:href='#path-10'></use> <use fill='#D9D6CC' fill-rule='evenodd' xlink:href='#path-10'></use> </g> </g> </g> </g> </g> </svg>",
  notes_app: "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='60px' height='60px' viewBox='0 0 60 60' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'> <!-- Generator: Sketch 39.1 (31720) - http://www.bohemiancoding.com/sketch --> <title>Notes</title> <desc>Created with Sketch.</desc> <defs> <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='linearGradient-1'> <stop stop-color='#F8F8F8' offset='0%'></stop> <stop stop-color='#EDEDED' offset='100%'></stop> </linearGradient> <path d='M39.0815,0 C45.105,0 48.116,0 51.3585,1.025 C54.8985,2.3135 57.6865,5.1015 58.975,8.6415 C60,11.8835 60,14.8955 60,20.9185 L60,39.0815 C60,45.105 60,48.116 58.975,51.3585 C57.6865,54.8985 54.8985,57.6865 51.3585,58.9745 C48.116,60 45.105,60 39.0815,60 L20.9185,60 C14.895,60 11.8835,60 8.6415,58.9745 C5.1015,57.6865 2.3135,54.8985 1.025,51.3585 C0,48.116 0,45.105 0,39.0815 L0,20.9185 C0,14.8955 0,11.8835 1.025,8.6415 C2.3135,5.1015 5.1015,2.3135 8.6415,1.025 C11.8835,0 14.895,0 20.9185,0 L39.0815,0 Z' id='path-2'></path> <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='linearGradient-4'> <stop stop-color='#FFDF63' offset='0%'></stop> <stop stop-color='#FFCD02' offset='100%'></stop> </linearGradient> <rect id='path-5' x='0' y='-1' width='60' height='20'></rect> <filter x='-50%' y='-50%' width='200%' height='200%' filterUnits='objectBoundingBox' id='filter-6'> <feOffset dx='0' dy='0.5' in='SourceAlpha' result='shadowOffsetOuter1'></feOffset> <feGaussianBlur stdDeviation='0.5' in='shadowOffsetOuter1' result='shadowBlurOuter1'></feGaussianBlur> <feColorMatrix values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.3 0' type='matrix' in='shadowBlurOuter1'></feColorMatrix> </filter> <filter x='-50%' y='-50%' width='200%' height='200%' filterUnits='objectBoundingBox' id='filter-7'> <feOffset dx='0' dy='-0.5' in='SourceAlpha' result='shadowOffsetInner1'></feOffset> <feComposite in='shadowOffsetInner1' in2='SourceAlpha' operator='arithmetic' k2='-1' k3='1' result='shadowInnerInner1'></feComposite> <feColorMatrix values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.2 0' type='matrix' in='shadowInnerInner1'></feColorMatrix> </filter> </defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'> <g id='Home-Screen-•-iPhone-SE' transform='translate(-92.000000, -203.000000)'> <g id='Home-Screen-•-iPhone-6s-Copy' transform='translate(0.000000, 27.000000)'> <g id='Notes' transform='translate(92.000000, 176.000000)'> <mask id='mask-3' fill='white'> <use xlink:href='#path-2'></use> </mask> <use id='BG' fill='url(#linearGradient-1)' xlink:href='#path-2'></use> <g id='header' mask='url(#mask-3)'> <use fill='black' fill-opacity='1' filter='url(#filter-6)' xlink:href='#path-5'></use> <use fill='url(#linearGradient-4)' fill-rule='evenodd' xlink:href='#path-5'></use> <use fill='black' fill-opacity='1' filter='url(#filter-7)' xlink:href='#path-5'></use> </g> <polygon id='line' fill='#B7B7B7' mask='url(#mask-3)' points='59.75 30.5 60 30.5 60 30 59.75 30 -0.25 30 -0.5 30 -0.5 30.5 -0.25 30.5'></polygon> <polygon id='line' fill='#B7B7B7' mask='url(#mask-3)' points='59.75 41.5 60 41.5 60 41 59.75 41 -0.25 41 -0.5 41 -0.5 41.5 -0.25 41.5'></polygon> <polygon id='line' fill='#B7B7B7' mask='url(#mask-3)' points='59.75 53 60 53 60 52.5 59.75 52.5 -0.25 52.5 -0.5 52.5 -0.5 53 -0.25 53'></polygon> <path d='M58.5,22 L59.5,22 L59.5,23 L58.5,23 L58.5,22 L58.5,22 Z M56.5,22 L57.5,22 L57.5,23 L56.5,23 L56.5,22 L56.5,22 Z M54.5,22 L55.5,22 L55.5,23 L54.5,23 L54.5,22 L54.5,22 Z M52.5,22 L53.5,22 L53.5,23 L52.5,23 L52.5,22 L52.5,22 Z M50.5,22 L51.5,22 L51.5,23 L50.5,23 L50.5,22 L50.5,22 Z M48.5,22 L49.5,22 L49.5,23 L48.5,23 L48.5,22 L48.5,22 Z M46.5,22 L47.5,22 L47.5,23 L46.5,23 L46.5,22 L46.5,22 Z M44.5,22 L45.5,22 L45.5,23 L44.5,23 L44.5,22 L44.5,22 Z M42.5,22 L43.5,22 L43.5,23 L42.5,23 L42.5,22 L42.5,22 Z M40.5,22 L41.5,22 L41.5,23 L40.5,23 L40.5,22 L40.5,22 Z M38.5,22 L39.5,22 L39.5,23 L38.5,23 L38.5,22 L38.5,22 Z M36.5,22 L37.5,22 L37.5,23 L36.5,23 L36.5,22 L36.5,22 Z M34.5,22 L35.5,22 L35.5,23 L34.5,23 L34.5,22 L34.5,22 Z M32.5,22 L33.5,22 L33.5,23 L32.5,23 L32.5,22 L32.5,22 Z M30.5,22 L31.5,22 L31.5,23 L30.5,23 L30.5,22 L30.5,22 Z M28.5,22 L29.5,22 L29.5,23 L28.5,23 L28.5,22 L28.5,22 Z M26.5,22 L27.5,22 L27.5,23 L26.5,23 L26.5,22 L26.5,22 Z M24.5,22 L25.5,22 L25.5,23 L24.5,23 L24.5,22 L24.5,22 Z M22.5,22 L23.5,22 L23.5,23 L22.5,23 L22.5,22 L22.5,22 Z M20.5,22 L21.5,22 L21.5,23 L20.5,23 L20.5,22 L20.5,22 Z M18.5,22 L19.5,22 L19.5,23 L18.5,23 L18.5,22 L18.5,22 Z M16.5,22 L17.5,22 L17.5,23 L16.5,23 L16.5,22 L16.5,22 Z M14.5,22 L15.5,22 L15.5,23 L14.5,23 L14.5,22 L14.5,22 Z M12.5,22 L13.5,22 L13.5,23 L12.5,23 L12.5,22 L12.5,22 Z M10.5,22 L11.5,22 L11.5,23 L10.5,23 L10.5,22 L10.5,22 Z M8.5,22 L9.5,22 L9.5,23 L8.5,23 L8.5,22 L8.5,22 Z M6.5,22 L7.5,22 L7.5,23 L6.5,23 L6.5,22 L6.5,22 Z M4.5,22 L5.5,22 L5.5,23 L4.5,23 L4.5,22 L4.5,22 Z M2.5,22 L3.5,22 L3.5,23 L2.5,23 L2.5,22 L2.5,22 Z M0.5,22 L1.5,22 L1.5,23 L0.5,23 L0.5,22 L0.5,22 Z' id='Rectangle-37' fill='#AAAAAA' mask='url(#mask-3)'></path> </g> </g> </g> </g> </svg>",
  reminders_app: "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='60px' height='60px' viewBox='0 0 60 60' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'> <!-- Generator: Sketch 39.1 (31720) - http://www.bohemiancoding.com/sketch --> <title>min</title> <desc>Created with Sketch.</desc> <defs> <rect id='path-1' x='0' y='0' width='60' height='60' rx='14'></rect> <circle id='path-3' cx='10' cy='12' r='4'></circle> <mask id='mask-4' maskContentUnits='userSpaceOnUse' maskUnits='objectBoundingBox' x='0' y='0' width='8' height='8' fill='white'> <use xlink:href='#path-3'></use> </mask> <mask id='mask-5' maskContentUnits='userSpaceOnUse' maskUnits='objectBoundingBox' x='-0.5' y='-0.5' width='9' height='9'> <rect x='5.5' y='7.5' width='9' height='9' fill='white'></rect> <use xlink:href='#path-3' fill='black'></use> </mask> <circle id='path-6' cx='10' cy='23' r='4'></circle> <mask id='mask-7' maskContentUnits='userSpaceOnUse' maskUnits='objectBoundingBox' x='0' y='0' width='8' height='8' fill='white'> <use xlink:href='#path-6'></use> </mask> <mask id='mask-8' maskContentUnits='userSpaceOnUse' maskUnits='objectBoundingBox' x='-0.5' y='-0.5' width='9' height='9'> <rect x='5.5' y='18.5' width='9' height='9' fill='white'></rect> <use xlink:href='#path-6' fill='black'></use> </mask> <circle id='path-9' cx='10' cy='35' r='4'></circle> <mask id='mask-10' maskContentUnits='userSpaceOnUse' maskUnits='objectBoundingBox' x='0' y='0' width='8' height='8' fill='white'> <use xlink:href='#path-9'></use> </mask> <mask id='mask-11' maskContentUnits='userSpaceOnUse' maskUnits='objectBoundingBox' x='-0.5' y='-0.5' width='9' height='9'> <rect x='5.5' y='30.5' width='9' height='9' fill='white'></rect> <use xlink:href='#path-9' fill='black'></use> </mask> <circle id='path-12' cx='10' cy='46' r='4'></circle> <mask id='mask-13' maskContentUnits='userSpaceOnUse' maskUnits='objectBoundingBox' x='0' y='0' width='8' height='8' fill='white'> <use xlink:href='#path-12'></use> </mask> <mask id='mask-14' maskContentUnits='userSpaceOnUse' maskUnits='objectBoundingBox' x='-0.5' y='-0.5' width='9' height='9'> <rect x='5.5' y='41.5' width='9' height='9' fill='white'></rect> <use xlink:href='#path-12' fill='black'></use> </mask> </defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'> <g id='Home-Screen-•-iPhone-SE' transform='translate(-168.000000, -203.000000)'> <g id='Home-Screen-•-iPhone-6s-Copy' transform='translate(0.000000, 27.000000)'> <g id='min' transform='translate(168.000000, 176.000000)'> <mask id='mask-2' fill='white'> <use xlink:href='#path-1'></use> </mask> <use id='BG' fill='#FFFFFF' xlink:href='#path-1'></use> <g id='circle' mask='url(#mask-2)'> <use stroke='#FFFFFF' mask='url(#mask-4)' fill='#FF9500' fill-rule='evenodd' xlink:href='#path-3'></use> <use stroke='#FF9500' mask='url(#mask-5)' xlink:href='#path-3'></use> </g> <g id='circle' mask='url(#mask-2)'> <use stroke='#FFFFFF' mask='url(#mask-7)' fill='#1BADF8' fill-rule='evenodd' xlink:href='#path-6'></use> <use stroke='#1BADF8' mask='url(#mask-8)' xlink:href='#path-6'></use> </g> <g id='circle' mask='url(#mask-2)'> <use stroke='#FFFFFF' mask='url(#mask-10)' fill='#63DA38' fill-rule='evenodd' xlink:href='#path-9'></use> <use stroke='#63DA38' mask='url(#mask-11)' xlink:href='#path-9'></use> </g> <g id='circle' mask='url(#mask-2)'> <use stroke='#FFFFFF' mask='url(#mask-13)' fill='#CC73E1' fill-rule='evenodd' xlink:href='#path-12'></use> <use stroke='#CC73E1' mask='url(#mask-14)' xlink:href='#path-12'></use> </g> <rect id='line' fill='#AEAEAE' mask='url(#mask-2)' x='19' y='17.5' width='41' height='0.5'></rect> <rect id='line' fill='#AEAEAE' mask='url(#mask-2)' x='19' y='6' width='41' height='0.5'></rect> <rect id='line' fill='#AEAEAE' mask='url(#mask-2)' x='19' y='29' width='41' height='0.5'></rect> <rect id='line' fill='#AEAEAE' mask='url(#mask-2)' x='19' y='40' width='41' height='0.5'></rect> <rect id='line' fill='#AEAEAE' mask='url(#mask-2)' x='19' y='51.5' width='41' height='0.5'></rect> </g> </g> </g> </g> </svg>",
  stocks_app: "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='60px' height='60px' viewBox='0 0 60 60' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'> <!-- Generator: Sketch 39.1 (31720) - http://www.bohemiancoding.com/sketch --> <title>Stocks</title> <desc>Created with Sketch.</desc> <defs> <path d='M39.0815,0 C45.105,0 48.116,0 51.3585,1.025 C54.8985,2.3135 57.6865,5.1015 58.975,8.6415 C60,11.8835 60,14.8955 60,20.9185 L60,39.0815 C60,45.105 60,48.116 58.975,51.3585 C57.6865,54.8985 54.8985,57.6865 51.3585,58.9745 C48.116,60 45.105,60 39.0815,60 L20.9185,60 C14.895,60 11.8835,60 8.6415,58.9745 C5.1015,57.6865 2.3135,54.8985 1.025,51.3585 C0,48.116 0,45.105 0,39.0815 L0,20.9185 C0,14.8955 0,11.8835 1.025,8.6415 C2.3135,5.1015 5.1015,2.3135 8.6415,1.025 C11.8835,0 14.895,0 20.9185,0 L39.0815,0 Z' id='path-1'></path> <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='linearGradient-3'> <stop stop-color='#454545' offset='0%'></stop> <stop stop-color='#111112' offset='100%'></stop> </linearGradient> <path d='M41.5,16.0112108 L41.5,-1.5 L41,-1.5 L41,16.0112108 C41.0823405,16.0037907 41.1657276,16 41.25,16 C41.3342724,16 41.4176595,16.0037907 41.5,16.0112108 Z M41.5,21.4887892 L41.5,63 L41,63 L41,21.4887892 C41.0823405,21.4962093 41.1657276,21.5 41.25,21.5 C41.3342724,21.5 41.4176595,21.4962093 41.5,21.4887892 Z M41.25,21 C42.4926407,21 43.5,19.9926407 43.5,18.75 C43.5,17.5073593 42.4926407,16.5 41.25,16.5 C40.0073593,16.5 39,17.5073593 39,18.75 C39,19.9926407 40.0073593,21 41.25,21 Z' id='path-4'></path> <filter x='-50%' y='-50%' width='200%' height='200%' filterUnits='objectBoundingBox' id='filter-5'> <feOffset dx='0' dy='1' in='SourceAlpha' result='shadowOffsetOuter1'></feOffset> <feColorMatrix values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0' type='matrix' in='shadowOffsetOuter1'></feColorMatrix> </filter> </defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'> <g id='Home-Screen-•-iPhone-SE' transform='translate(-244.000000, -203.000000)'> <g id='Home-Screen-•-iPhone-6s-Copy' transform='translate(0.000000, 27.000000)'> <g id='Stocks' transform='translate(244.000000, 176.000000)'> <mask id='mask-2' fill='white'> <use xlink:href='#path-1'></use> </mask> <use id='BG' fill='#141416' xlink:href='#path-1'></use> <path d='M-0.484863281,34.0537109 C-0.484863281,34.0537109 1.27239211,34.0644686 3.11938477,34.6320801 C4.70794495,35.120271 6.30098176,36.2523786 7.23388672,36.1945801 C9.25146484,36.0695801 11.3344727,35.3759766 11.3344727,35.3759766 L15.1208496,30.4450684 L18.7275391,33.5263672 L22.4941406,24.6245117 L26.1196289,34.3369141 L30.25,36.8659668 L33.9467773,30.2084961 L37.5385742,29.276123 L41.4316406,18.1323242 L45.1474609,27.2033691 L48.9438477,24.6655273 L52.7734375,31.9936523 L56.3422852,23.8173828 L60.3457031,19.65625 L60.3457031,60.4791166 L-0.304989325,60.4791166 L-0.484863281,34.0537109 Z' id='graph' stroke='#FFFFFF' stroke-width='0.75' fill='url(#linearGradient-3)' mask='url(#mask-2)'></path> <g id='mark' mask='url(#mask-2)'> <use fill='black' fill-opacity='1' filter='url(#filter-5)' xlink:href='#path-4'></use> <use fill='#01A6F1' fill-rule='evenodd' xlink:href='#path-4'></use> </g> <g id='Spark-line' mask='url(#mask-2)' fill='#777778'> <g transform='translate(7.000000, -1.500000)' id='mark'> <rect x='0' y='0' width='0.5' height='64.5'></rect> <rect x='11.5' y='0' width='0.5' height='64.5'></rect> <rect x='23' y='0' width='0.5' height='64.5'></rect> <rect x='45.5' y='0' width='0.5' height='64.5'></rect> </g> </g> </g> </g> </g> </g> </svg>"
};

exports.frames = {
  "fullscreen": {
    height: window.innerHeight,
    width: window.innerWidth,
    scale: 1,
    mobile: false,
    platform: "web"
  },
  "apple-iphone-5s-space-gray": {
    height: 1136,
    width: 640,
    scale: 2,
    mobile: true,
    platform: "iOS"
  },
  "apple-iphone-5s-silver": {
    height: 1136,
    width: 640,
    scale: 2,
    mobile: true,
    platform: "iOS"
  },
  "apple-iphone-5s-gold": {
    height: 1136,
    width: 640,
    scale: 2,
    mobile: true,
    platform: "iOS"
  },
  "apple-iphone-5c-green": {
    height: 1136,
    width: 640,
    scale: 2,
    mobile: true,
    platform: "iOS"
  },
  "apple-iphone-5c-blue": {
    height: 1136,
    width: 640,
    scale: 2,
    mobile: true,
    platform: "iOS"
  },
  "apple-iphone-5c-red": {
    height: 1136,
    width: 640,
    scale: 2,
    mobile: true,
    platform: "iOS"
  },
  "apple-iphone-5c-white": {
    height: 1136,
    width: 640,
    scale: 2,
    mobile: true,
    platform: "iOS"
  },
  "apple-iphone-5c-yellow": {
    height: 1136,
    width: 640,
    scale: 2,
    mobile: true,
    platform: "iOS"
  },
  "apple-iphone-5c-pink": {
    height: 1136,
    width: 640,
    scale: 2,
    mobile: true,
    platform: "iOS"
  },
  "apple-iphone-6s-space-gray": {
    height: 1334,
    width: 750,
    scale: 2,
    mobile: true,
    platform: "iOS"
  },
  "apple-iphone-6s-silver": {
    height: 1334,
    width: 750,
    scale: 2,
    mobile: true,
    platform: "iOS"
  },
  "apple-iphone-6s-gold": {
    height: 1334,
    width: 750,
    scale: 2,
    mobile: true,
    platform: "iOS"
  },
  "apple-iphone-6s-rose-gold": {
    height: 1334,
    width: 750,
    scale: 2,
    mobile: true,
    platform: "iOS"
  },
  "apple-iphone-6s-plus-gold": {
    height: 2208,
    width: 1242,
    scale: 3,
    mobile: true,
    platform: "iOS"
  },
  "apple-iphone-6s-plus-silver": {
    height: 2208,
    width: 1242,
    scale: 3,
    mobile: true,
    platform: "iOS"
  },
  "apple-iphone-6s-plus-space-gray": {
    height: 2208,
    width: 1242,
    scale: 3,
    mobile: true,
    platform: "iOS"
  },
  "apple-iphone-6s-plus": {
    height: 2208,
    width: 1242,
    scale: 3,
    mobile: true,
    platform: "iOS"
  },
  "apple-iphone-6s-plus-rose-gold": {
    height: 2208,
    width: 1242,
    scale: 3,
    mobile: true,
    platform: "iOS"
  },
  "apple-ipad-air-2-gold": {
    height: 2048,
    width: 1536,
    scale: 2,
    mobile: true,
    platform: "iOS"
  },
  "apple-ipad-air-2-silver": {
    height: 2048,
    width: 1536,
    scale: 2,
    mobile: true,
    platform: "iOS"
  },
  "apple-ipad-air-2-space-gray": {
    height: 2048,
    width: 1536,
    scale: 2,
    mobile: true,
    platform: "iOS"
  },
  "apple-ipad-mini-4-gold": {
    height: 2048,
    width: 1536,
    scale: 2,
    mobile: true,
    platform: "iOS"
  },
  "apple-ipad-mini-4-space-gray": {
    height: 2048,
    width: 1536,
    scale: 2,
    mobile: true,
    platform: "iOS"
  },
  "apple-ipad-mini-4-silver": {
    height: 2048,
    width: 1536,
    scale: 2,
    mobile: true,
    platform: "iOS"
  },
  "apple-ipad-pro-gold": {
    height: 2732,
    width: 2048,
    scale: 2,
    mobile: true,
    platform: "iOS"
  },
  "apple-ipad-pro-silver": {
    height: 2732,
    width: 2048,
    scale: 2,
    mobile: true,
    platform: "iOS"
  },
  "apple-ipad-pro-space-gray": {
    height: 2732,
    width: 2048,
    scale: 2,
    mobile: true,
    platform: "iOS"
  }
};

exports.framerFrames = {
  640: 2,
  750: 2,
  768: 2,
  1080: 3,
  1242: 3,
  1440: 4,
  1536: 2
};

exports.realDevices = {
  320: {
    480: {
      name: "iphone",
      display_name: "iPhone",
      width: 320,
      height: 480,
      scale: 1
    }
  },
  480: {
    854: {
      name: "Android One",
      width: 480,
      height: 854,
      scale: 1.5
    }
  },
  640: {
    960: {
      name: "iphone-5",
      display_name: "iPhone 4",
      width: 640,
      height: 960,
      scale: 2
    },
    1136: {
      name: "iphone-5",
      display_name: "iPhone 5",
      width: 640,
      height: 1136,
      scale: 2
    }
  },
  720: {
    1280: {
      name: "XHDPI",
      width: 720,
      height: 1280,
      scale: 2
    }
  },
  750: {
    1118: {
      name: "iphone-6s",
      display_name: "iPhone 6s",
      width: 750,
      height: 1118,
      scale: 2
    },
    1334: {
      name: "iphone-6s",
      display_name: "iPhone 6s",
      width: 750,
      height: 1334,
      scale: 2
    }
  },
  768: {
    1024: {
      name: "ipad",
      display_name: "iPad",
      width: 768,
      height: 1024,
      scale: 1
    },
    1280: {
      name: "Nexus 4",
      width: 768,
      height: 1280,
      scale: 2
    }
  },
  800: {
    1280: {
      name: "Nexus 7",
      width: 800,
      height: 1280,
      scale: 1
    }
  },
  1080: {
    1920: {
      name: "XXHDPI",
      width: 1080,
      height: 1920,
      scale: 3
    }
  },
  1200: {
    1920: {
      name: "Nexus 7",
      width: 1200,
      height: 1920,
      scale: 2
    }
  },
  1242: {
    2208: {
      name: "iphone-6s-plus",
      display_name: "iPhone 6 Plus",
      width: 1242,
      height: 2208,
      scale: 3
    }
  },
  1334: {
    750: {
      name: "iphone-6s",
      display_name: "iPhone 6s",
      width: 750,
      height: 1334,
      scale: 2
    }
  },
  1440: {
    2560: {
      name: "XXXHDPI",
      width: 1440,
      height: 2560,
      scale: 4
    }
  },
  1441: {
    2561: {
      name: "Nexus 6",
      width: 1440,
      height: 2560,
      scale: 4
    }
  },
  1536: {
    2048: {
      name: "ipad",
      display_name: "iPad",
      width: 1536,
      height: 2048,
      scale: 2
    }
  },
  1600: {
    2056: {
      name: "Nexus 10",
      width: 1600,
      height: 2056,
      scale: 2
    }
  },
  2208: {
    1242: {
      name: "iphone-6s-plus",
      display_name: "iPhone 6 Plus",
      width: 1242,
      height: 2208,
      scale: 3
    }
  },
  2048: {
    1536: {
      name: "Nexus 9",
      width: 2048,
      height: 1536,
      scale: 2
    },
    2732: {
      name: "ipad-pro",
      display_name: "iPad Pro",
      width: 2048,
      height: 2732,
      scale: 2
    }
  },
  2560: {
    1600: {
      name: "Nexus 10",
      width: 2560,
      height: 1600,
      scale: 2
    }
  },
  2732: {
    2048: {
      name: "ipad-pro",
      display_name: "iPad Pro",
      width: 2732,
      height: 2048,
      scale: 2
    }
  }
};


},{"ios-kit":"ios-kit"}],"ios-kit-nav-bar":[function(require,module,exports){
var ios;

ios = require('ios-kit');

exports.defaults = {
  title: "Title",
  left: void 0,
  right: "Edit",
  blur: true,
  superLayer: void 0,
  type: "navBar",
  color: 'blue',
  titleColor: 'black',
  backgroundColor: "rgba(255, 255, 255, .8)",
  dividerBackgroundColor: "#B2B2B2"
};

exports.defaults.props = Object.keys(exports.defaults);

exports.create = function(array) {
  var bar, i, layer, len, ref, setLeading, setup, svg;
  setup = ios.utils.setupComponent(array, exports.defaults);
  bar = new ios.View({
    name: "navBar",
    backgroundColor: setup.backgroundColor,
    constraints: {
      leading: 0,
      trailing: 0,
      top: 0,
      height: 64
    }
  });
  bar.bg = new ios.View({
    superLayer: bar,
    backgroundColor: 'transparent',
    name: ".bg",
    constraints: {
      leading: 0,
      trailing: 0,
      height: 44,
      bottom: 0
    }
  });
  bar.divider = new ios.View({
    backgroundColor: setup.dividerBackgroundColor,
    name: ".divider",
    superLayer: bar.bg,
    constraints: {
      height: .5,
      bottom: 0,
      leading: 0,
      trailing: 0
    }
  });
  if (setup.superLayer) {
    setup.superLayer.addSubLayer(bar);
  }
  if (setup.blur) {
    ios.utils.bgBlur(bar);
  }
  if (setup.blur === false && setup.backgroundColor === "rgba(255, 255, 255, .8)") {
    bar.backgroundColor = 'white';
  }
  bar.type = setup.type;
  ref = Framer.CurrentContext.layers;
  for (i = 0, len = ref.length; i < len; i++) {
    layer = ref[i];
    if (layer.type === "statusBar") {
      this.statusBar = layer;
      bar.placeBehind(this.statusBar);
    }
  }
  if (typeof setup.title === "object") {
    setup.title = setup.title.label.html;
  }
  bar.title = new ios.Text({
    fontWeight: "semibold",
    superLayer: bar.bg,
    text: setup.title,
    name: ".title",
    color: setup.titleColor,
    constraints: {
      align: "horizontal",
      bottom: 12
    }
  });
  ios.utils.specialChar(bar.title);
  if (typeof setup.right === "string" && typeof setup.right !== "boolean") {
    bar.right = new ios.Button({
      name: ".right",
      superLayer: bar.bg,
      text: setup.right,
      color: setup.color,
      fontWeight: 500,
      constraints: {
        bottom: 12,
        trailing: 8
      }
    });
    bar.right.type = "button";
    ios.utils.specialChar(bar.right);
  }
  if (typeof setup.right === "object") {
    bar.right = setup.right;
    bar.right.name = ".right";
    bar.right.superLayer = bar.bg;
    bar.right.constraints = {
      trailing: 8,
      bottom: 12
    };
    ios.layout.set(bar.right);
  }
  if (typeof setup.left === "string" && typeof setup.left !== "boolean") {
    setLeading = 8;
    if (setup.left.indexOf("<") !== -1) {
      svg = ios.utils.svg(ios.assets.chevron);
      bar.chevron = new ios.View({
        name: ".chevron",
        width: svg.width,
        height: svg.height,
        backgroundColor: "transparent",
        superLayer: bar.bg
      });
      bar.chevron.html = svg.svg;
      bar.chevron.constraints = {
        bottom: 9,
        leading: 8
      };
      setup.left = setup.left.replace("<", "");
      ios.utils.changeFill(bar.chevron, setup.color);
      setLeading = [bar.chevron, 4];
      ios.layout.set(bar.chevron);
    }
    bar.left = new ios.Button({
      name: ".left",
      superLayer: bar.bg,
      text: setup.left,
      color: setup.color,
      fontWeight: 500,
      constraints: {
        bottom: 12,
        leading: setLeading
      }
    });
    bar.left.type = "button";
    ios.utils.specialChar(bar.left);
    bar.left.on(Events.TouchStart, function() {
      if (bar.chevron) {
        return bar.chevron.animate({
          properties: {
            opacity: .25
          },
          time: .5
        });
      }
    });
    bar.left.on(Events.TouchEnd, function() {
      if (bar.chevron) {
        return bar.chevron.animate({
          properties: {
            opacity: 1
          },
          time: .5
        });
      }
    });
  }
  if (typeof setup.left === "object") {
    bar.left = setup.left;
    bar.left.name = ".left";
    bar.left.superLayer = bar.bg;
    bar.left.constraints = {
      leading: 8,
      bottom: 12
    };
  }
  ios.layout.set(bar.left);
  return bar;
};


},{"ios-kit":"ios-kit"}],"ios-kit-sheet":[function(require,module,exports){
var ios;

ios = require('ios-kit');

exports.defaults = {
  actions: ["Reply", "Reply All", "Forward", "Print"],
  exit: "Cancel",
  animated: true,
  description: void 0,
  target: void 0
};

exports.defaults.props = Object.keys(exports.defaults);

exports.create = function(array) {
  var a, action, i, j, k, l, len, len1, place, ref, ref1, setup, sheet, sheetTip;
  setup = ios.utils.setupComponent(array, exports.defaults);
  ref = Framer.CurrentContext.layers;
  for (j = 0, len = ref.length; j < len; j++) {
    l = ref[j];
    if (l.type === 'sheet') {
      l.dismiss();
    }
  }
  sheet = new ios.View({
    name: "sheet",
    backgroundColor: "transparent",
    constraints: {
      top: 0,
      leading: 0,
      trailing: 0,
      bottom: 0
    }
  });
  sheet.type = 'sheet';
  sheet.menu = new Layer({
    name: "menu",
    superLayer: sheet,
    backgroundColor: "transparent",
    borderRadius: ios.px(12),
    clip: true
  }, ios.isPad() ? (sheetTip = ios.utils.svg(ios.assets.sheetTip), sheet.tip = new ios.View({
    name: '.tip',
    color: 'black',
    superLayer: sheet,
    html: sheetTip.svg,
    height: sheetTip.height - 4,
    width: sheetTip.width,
    backgroundColor: 'transparent',
    constraints: {
      horizontalCenter: setup.target
    }
  }), sheet.linked = setup.target, sheet.linked.ignoreEvents = true) : void 0);
  place = function(t, l) {
    var centerX, h, w;
    w = ios.device.width;
    h = ios.device.height;
    centerX = w / 2;
    if (w - t.x > centerX) {
      if (t.x - ios.px(150) < 0) {
        l.constraints.leading = 10;
      } else {
        l.constraints.horizontalCenter = t;
      }
    } else {
      if (t.x + ios.px(150) > w) {
        l.constraints.trailing = 10;
      } else {
        l.constraints.horizontalCenter = t;
      }
    }
    if (t.y + l.height < h) {
      l.constraints.top = [t, 40];
      if (ios.isPad()) {
        sheet.tip.constraints.bottom = [l, 1];
      }
    } else {
      l.constraints.bottom = [t, 40];
      if (ios.isPad()) {
        sheet.tip.constraints.top = [l, 1];
        sheet.tip.rotation = 180;
      }
    }
    if (ios.isPad()) {
      return ios.layout.set(sheet.tip);
    }
  };
  sheet.dismiss = function() {
    if (ios.isPhone()) {
      sheet.menu.animate({
        properties: {
          y: ios.device.height
        },
        time: .25
      });
      sheet.cancel.animate({
        properties: {
          y: ios.device.height + ios.px(75)
        },
        time: .25
      });
      sheet.overlay.animate({
        properties: {
          opacity: 0
        },
        time: .25
      });
      return Utils.delay(.25, function() {
        return sheet.destroy();
      });
    } else {
      sheet.linked.ignoreEvents = false;
      return Utils.delay(.15, function() {
        return sheet.destroy();
      });
    }
  };
  sheet.call = function() {
    if (ios.isPhone()) {
      sheet.menu.y = ios.device.height;
      sheet.cancel.y = ios.device.height + ios.px(75);
      sheet.overlay.opacity = 0;
      sheet.overlay.animate({
        properties: {
          opacity: .5
        },
        time: .25
      });
      return ios.layout.animate({
        target: [sheet.menu, sheet.cancel],
        time: .25
      });
    } else {
      place(setup.target, sheet.menu);
      return ios.layout.set(sheet.menu);
    }
  };
  if (ios.device.name.indexOf("ipad") === -1) {
    sheet.overlay = new ios.View({
      name: ".overlay",
      backgroundColor: "black",
      opacity: .5,
      superLayer: sheet,
      constraints: {
        top: 0,
        leading: 0,
        trailing: 0,
        bottom: 0
      }
    });
    sheet.overlay.sendToBack();
    sheet.menu.constraints = {
      leading: 10,
      trailing: 10,
      bottom: 57 + 8 + 10,
      height: setup.actions.length * 57
    };
    sheet.cancel = new ios.Button({
      name: ".cancel",
      type: "big",
      text: setup.exit,
      superLayer: sheet,
      constraints: {
        bottom: 10,
        leading: 0,
        trailing: 0
      }
    });
    sheet.cancel.on(Events.TouchEnd, function() {
      return sheet.dismiss();
    });
  } else {
    sheet.menu.constraints = {
      width: 300,
      height: setup.actions.length * 57
    };
    sheet.menu.props = {
      shadowY: 2,
      shadowBlur: ios.px(100),
      shadowColor: "rgba(0,0,0,0.1)"
    };
  }
  ios.layout.set(sheet);
  sheet.actionsArray = [];
  sheet.actions = {};
  ref1 = setup.actions;
  for (i = k = 0, len1 = ref1.length; k < len1; i = ++k) {
    a = ref1[i];
    action = new ios.View({
      name: ".actions.[\"" + a.toLowerCase() + "\"]",
      backgroundColor: "rgba(255,255,255,1)",
      superLayer: sheet.menu,
      constraints: {
        leading: 0,
        trailing: 0,
        height: 57
      }
    });
    action.style["-webkit-box-shadow"] = "inset 0 0 " + ios.px(.5) + "px rgba(0,0,0,.25)";
    action.label = new ios.Text({
      text: a,
      color: ios.color("blue"),
      fontSize: 20,
      superLayer: action,
      constraints: {
        align: "center"
      }
    });
    ios.utils.specialChar(action.label);
    if (i === 0) {
      action.constraints.top = 0;
    } else {
      action.constraints.top = sheet.actionsArray[i - 1];
    }
    action.on(Events.TouchStart, function() {
      return this.animate({
        properties: {
          backgroundColor: this.backgroundColor.darken(10),
          time: .2
        }
      });
    });
    action.on(Events.TouchEnd, function() {
      this.animate({
        properties: {
          backgroundColor: "rgba(255,255,255, .8)"
        },
        time: .2
      });
      return sheet.dismiss();
    });
    ios.layout.set(action);
    sheet.actionsArray.push(action);
    sheet.actions[a.toLowerCase()] = action;
  }
  if (setup.animated) {
    sheet.call();
  }
  if (ios.isPad()) {
    sheet.tip.bringToFront();
  }
  return sheet;
};


},{"ios-kit":"ios-kit"}],"ios-kit-status-bar":[function(require,module,exports){
var ios;

ios = require('ios-kit');

exports.defaults = {
  carrier: "",
  network: "LTE",
  battery: 100,
  signal: 5,
  style: "dark",
  clock24: false,
  type: "statusBar",
  superLayer: void 0
};

exports.defaults.props = Object.keys(exports.defaults);

exports.create = function(array) {
  var batteryIcon, batteryPercent, bluetooth, bluetoothSVG, carrier, dot, gripper, highBattery, i, j, k, l, layer, len, lowBattery, midBattery, network, networkIcon, noNetwork, nonDot, nonDots, ref, ref1, ref2, setup, signal, statusBar, time;
  setup = ios.utils.setupComponent(array, exports.defaults);
  statusBar = new Layer({
    backgroundColor: "transparent",
    name: "statusBar.all",
    superLayer: setup.superLayer
  });
  statusBar.type = setup.type;
  statusBar.constraints = {
    leading: 0,
    trailing: 0,
    height: 20
  };
  switch (ios.device.name) {
    case "iphone-6s-plus":
      this.topConstraint = 5;
      this.batteryIcon = 5;
      this.bluetooth = 5;
      break;
    case "fullscreen":
      this.topConstraint = 5;
      this.batteryIcon = -12;
      this.bluetooth = -10;
      break;
    default:
      this.topConstraint = 3;
      this.batteryIcon = 2;
      this.bluetooth = 3;
  }
  if (setup.style === "light") {
    this.color = "white";
  } else {
    this.color = "black";
  }
  ref = Framer.CurrentContext.layers;
  for (j = 0, len = ref.length; j < len; j++) {
    layer = ref[j];
    if (layer.type === "lockScreen") {
      this.isLockScreenPutilsent = true;
    }
  }
  if (this.isLockScreenPutilsent) {
    gripper = new Layer({
      superLayer: statusBar,
      width: utils.px(37),
      height: utils.px(5),
      name: "gripper",
      backgroundColor: "transparent",
      opacity: .5,
      name: "gripper"
    });
    gripper.html = "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='" + (utils.px(37)) + "px' height='" + (utils.px(5)) + "px' viewBox='0 0 37 5' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'> <!-- Generator: Sketch 3.6.1 (26313) - http://www.bohemiancoding.com/sketch --> <title>Gripper</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'> <g id='Keyboard/Auto-Complete-Bar-Closed' transform='translate(-169.000000, -2.000000)' fill='#FFFFFF'> <rect id='Gripper' x='169.5' y='2.5' width='36' height='4' rx='2.5'></rect> </g> </g> </svg>";
    gripper.constraints = {
      align: "horizontal",
      top: 2
    };
  } else {
    this.time = ios.utils.getTime();
    if (setup.clock24 === false) {
      if (this.time.hours > 11) {
        this.time.stamp = "PM";
      } else {
        this.time.stamp = "AM";
      }
    } else {
      this.time.stamp = "";
    }
    time = new ios.Text({
      style: "statusBarTime",
      text: ios.utils.timeFormatter(this.time, setup.clock24) + " " + this.time.stamp,
      fontSize: 12,
      fontWeight: "semibold",
      superLayer: statusBar,
      color: this.color,
      name: "time"
    });
    time.constraints = {
      align: "horizontal",
      top: this.topConstraint
    };
  }
  signal = [];
  if (setup.signal < 1) {
    noNetwork = new ios.Text({
      superLayer: statusBar,
      fontSize: 12,
      text: "No Network"
    });
    noNetwork.constraints = {
      leading: 7,
      top: 3
    };
  } else {
    for (i = k = 0, ref1 = setup.signal; 0 <= ref1 ? k < ref1 : k > ref1; i = 0 <= ref1 ? ++k : --k) {
      dot = new Layer({
        height: ios.utils.px(5.5),
        width: ios.utils.px(5.5),
        backgroundColor: "black",
        superLayer: statusBar,
        borderRadius: ios.utils.px(5.5) / 2,
        backgroundColor: this.color,
        name: "signal[" + i + "]"
      });
      if (i === 0) {
        dot.constraints = {
          leading: 7,
          top: 7
        };
      } else {
        dot.constraints = {
          leading: [signal[i - 1], 1],
          top: 7
        };
      }
      signal.push(dot);
      ios.layout.set();
    }
    if (setup.signal < 5) {
      nonDots = 5 - setup.signal;
      for (i = l = 0, ref2 = nonDots; 0 <= ref2 ? l < ref2 : l > ref2; i = 0 <= ref2 ? ++l : --l) {
        nonDot = new Layer({
          height: ios.utils.px(5.5),
          width: ios.utils.px(5.5),
          superLayer: statusBar,
          borderRadius: ios.utils.px(5.5) / 2,
          backgroundColor: "transparent",
          name: "signal[" + signal.length + "]"
        });
        nonDot.style.border = (ios.utils.px(1)) + "px solid " + this.color;
        nonDot.constraints = {
          leading: [signal[signal.length - 1], 1],
          top: 7
        };
        signal.push(nonDot);
        ios.layout.set();
      }
    }
    carrier = new ios.Text({
      style: "statusBarCarrier",
      text: setup.carrier,
      superLayer: statusBar,
      fontSize: 12,
      color: this.color,
      name: "carrier",
      textTransform: "capitalize"
    });
    carrier.constraints = {
      leading: [signal[signal.length - 1], 7],
      top: 3
    };
    ios.layout.set();
    if (setup.carrier) {
      network = new ios.Text({
        style: "statusBarNetwork",
        text: setup.network,
        superLayer: statusBar,
        fontSize: 12,
        color: this.color,
        name: "network",
        textTransform: "uppercase"
      });
      network.constraints = {
        leading: [carrier, 5],
        top: 3
      };
    }
    if (setup.carrier === "" || setup.carrier === "wifi") {
      networkIcon = ios.utils.svg(ios.assets.network, this.color);
      network = new Layer({
        width: networkIcon.width,
        height: networkIcon.height,
        superLayer: statusBar,
        backgroundColor: "transparent",
        name: "network"
      });
      network.html = networkIcon.svg;
      ios.utils.changeFill(network, this.color);
      network.constraints = {
        leading: [signal[signal.length - 1], 5],
        top: this.topConstraint
      };
    }
  }
  batteryIcon = new Layer({
    width: ios.utils.px(25),
    height: ios.utils.px(10),
    superLayer: statusBar,
    backgroundColor: "transparent",
    name: "batteryIcon"
  });
  if (setup.battery > 70) {
    highBattery = ios.utils.svg(ios.assets.batteryHigh);
    batteryIcon.html = highBattery.svg;
    ios.utils.changeFill(batteryIcon, this.color);
  }
  if (setup.battery <= 70 && setup.battery > 20) {
    midBattery = ios.utils.svg(ios.assets.batteryMid);
    batteryIcon.html = midBattery.svg;
    ios.utils.changeFill(batteryIcon, this.color);
  }
  if (setup.battery <= 20) {
    lowBattery = ios.utils.svg(ios.assets.batteryLow);
    batteryIcon.html = lowBattery.svg;
    ios.utils.changeFill(batteryIcon, this.color);
  }
  batteryIcon.constraints = {
    trailing: 7,
    top: this.batteryIcon
  };
  batteryPercent = new ios.Text({
    style: "statusBarBatteryPercent",
    text: setup.battery + "%",
    superLayer: statusBar,
    fontSize: 12,
    color: this.color,
    name: "batteryPercent"
  });
  batteryPercent.constraints = {
    trailing: [batteryIcon, 3],
    verticalCenter: time
  };
  bluetoothSVG = ios.utils.svg(ios.assets.bluetooth);
  bluetooth = new Layer({
    width: bluetoothSVG.width,
    height: bluetoothSVG.height,
    superLayer: statusBar,
    opacity: .5,
    backgroundColor: "transparent",
    name: "bluetooth"
  });
  bluetooth.html = bluetoothSVG.svg;
  ios.utils.changeFill(bluetooth, this.color);
  bluetooth.constraints = {
    top: this.bluetooth,
    trailing: [batteryPercent, 7]
  };
  ios.layout.set();
  statusBar.battery = {};
  statusBar.battery.percent = batteryPercent;
  statusBar.battery.icon = batteryIcon;
  statusBar.bluetooth = bluetooth;
  statusBar.time = time;
  statusBar.network = network;
  statusBar.carrier = carrier;
  statusBar.signal = signal;
  return statusBar;
};


},{"ios-kit":"ios-kit"}],"ios-kit-tab-bar":[function(require,module,exports){
var ios;

ios = require('ios-kit');

exports.defaults = {
  tab: {
    label: "label",
    icon: "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='25px' height='25px' viewBox='0 0 25 25' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'> <!-- Generator: Sketch 3.6.1 (26313) - http://www.bohemiancoding.com/sketch --> <title>1</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='1'> <g id='Bottom-Bar/Tab-Bar' transform='translate(-25.000000, -7.000000)' fill='#0076FF'> <g id='Placeholders' transform='translate(25.000000, 7.000000)'> <rect id='1' x='0' y='0' width='25' height='25' rx='3'></rect> </g> </g> </g> </svg>",
    active: void 0,
    inactive: void 0,
    tabBar: void 0,
    type: "tab"
  },
  bar: {
    tabs: [],
    start: 0,
    type: "tabBar",
    backgroundColor: "white",
    activeColor: "blue",
    inactiveColor: "gray",
    blur: true
  }
};

exports.defaults.tab.props = Object.keys(exports.defaults.tab);

exports.defaults.bar.props = Object.keys(exports.defaults.bar);

exports.tab = function(array) {
  var setup, specs, svgFrame, tab;
  setup = ios.utils.setupComponent(array, exports.defaults.tab);
  specs = {
    width: 75
  };
  switch (ios.device.name) {
    case "iphone-5":
      specs.width = 55;
  }
  tab = new ios.View({
    backgroundColor: "transparent",
    name: setup.label,
    constraints: {
      width: specs.width,
      height: 49
    }
  });
  tab.view = new ios.View({
    name: setup.label + ".view",
    backgroundColor: "transparent",
    constraints: {
      top: 0,
      bottom: 0,
      leading: 0,
      trailing: 0
    }
  });
  tab.active = new ios.View({
    name: ".active",
    backgroundColor: "transparent",
    constraints: {
      top: 0,
      bottom: 0,
      leading: 0,
      trailing: 0
    },
    superLayer: tab
  });
  tab.active.icon = new ios.View({
    name: ".active.icon",
    constraints: {
      width: 25,
      height: 25,
      align: "horizontal",
      top: 7
    },
    backgroundColor: "transparent",
    superLayer: tab.active
  });
  if (setup.active === void 0) {
    svgFrame = ios.utils.svg(setup.icon);
    tab.active.icon.html = svgFrame.svg;
    tab.active.icon.width = svgFrame.width;
    tab.active.icon.height = svgFrame.height;
  } else {
    setup.active.superLayer = tab.active.icon;
    setup.active.props = {
      width: tab.active.icon.width,
      height: tab.active.icon.height
    };
  }
  tab.inactive = new ios.View({
    backgroundColor: "transparent",
    name: ".inactive",
    constraints: {
      top: 0,
      bottom: 0,
      leading: 0,
      trailing: 0
    },
    superLayer: tab
  });
  tab.inactive.icon = new ios.View({
    constraints: {
      width: 25,
      height: 25,
      align: "horizontal",
      top: 7
    },
    backgroundColor: "transparent",
    name: ".inactive.icon",
    superLayer: tab.inactive
  });
  tab.label = new ios.Text({
    text: setup.label,
    superLayer: tab,
    color: "#929292",
    fontSize: 10,
    name: ".label",
    textTransform: "capitalize"
  });
  tab.label.constraints = {
    bottom: 2,
    horizontalCenter: tab.active.icon
  };
  if (setup.inactive === void 0) {
    svgFrame = ios.utils.svg(setup.icon);
    tab.inactive.icon.html = svgFrame.svg;
    tab.inactive.icon.width = svgFrame.width;
    tab.inactive.icon.height = svgFrame.height;
  } else {
    setup.inactive.superLayer = tab.inactive.icon;
    setup.inactive.props = {
      width: tab.inactive.icon.width,
      height: tab.inactive.icon.height
    };
  }
  return tab;
};

exports.bar = function(array) {
  var bar, dummyTab, dummyTab2, i, index, len, ref, setActive, setup, specs, tab;
  setup = ios.utils.setupComponent(array, exports.defaults.bar);
  if (setup.tabs.length === 0) {
    dummyTab = new exports.tab;
    dummyTab2 = new exports.tab;
    setup.tabs.push(dummyTab);
    setup.tabs.push(dummyTab2);
  }
  specs = {
    width: 75
  };
  switch (ios.device.name) {
    case "iphone-5":
      specs.width = 55;
  }
  bar = new ios.View({
    backgroundColor: "transparent",
    name: "tabBar",
    constraints: {
      leading: 0,
      trailing: 0,
      bottom: 0,
      height: 49
    }
  });
  bar.bg = new ios.View({
    superLayer: bar,
    name: ".bg",
    constraints: {
      leading: 0,
      trailing: 0,
      bottom: 0,
      height: 49
    }
  });
  bar.divider = new ios.View({
    backgroundColor: "#B2B2B2",
    name: ".divider",
    superLayer: bar,
    constraints: {
      top: 0,
      leading: 0,
      trailing: 0,
      height: .5
    }
  });
  bar.box = new ios.View({
    superLayer: bar,
    backgroundColor: "transparent",
    name: ".box",
    constraints: {
      height: 49,
      width: setup.tabs.length * specs.width
    }
  });
  setActive = function(tabIndex) {
    var i, index, len, ref, results, tab;
    ref = setup.tabs;
    results = [];
    for (index = i = 0, len = ref.length; i < len; index = ++i) {
      tab = ref[index];
      if (index === tabIndex) {
        tab.label.color = ios.utils.color(setup.activeColor);
        tab.active.visible = true;
        tab.inactive.visible = false;
        results.push(tab.view.visible = true);
      } else {
        tab.label.color = ios.utils.color(setup.inactiveColor);
        tab.active.visible = false;
        tab.inactive.visible = true;
        results.push(tab.view.visible = false);
      }
    }
    return results;
  };
  ref = setup.tabs;
  for (index = i = 0, len = ref.length; i < len; index = ++i) {
    tab = ref[index];
    bar.box.addSubLayer(tab);
    ios.utils.changeFill(tab.active.icon, ios.utils.color(setup.activeColor));
    ios.utils.changeFill(tab.inactive.icon, ios.utils.color(setup.inactiveColor));
    tab.label.color = ios.utils.color(setup.inactiveColor);
    bar.bg.backgroundColor = setup.backgroundColor;
    if (setup.blur) {
      bar.bg.backgroundColor = "rgba(255,255,255, .9)";
      ios.utils.bgBlur(bar.bg);
    }
    if (index === 0) {
      tab.constraints.leading = 0;
    } else {
      tab.constraints.leading = setup.tabs[index - 1];
    }
    ios.layout.set(tab);
    tab.on(Events.TouchStart, function() {
      var tabIndex;
      tabIndex = this.x / ios.utils.px(specs.width);
      return setActive(tabIndex);
    });
  }
  bar.box.constraints = {
    align: "horizontal"
  };
  ios.layout.set(bar.box);
  setActive(setup.start);
  bar.tabs = setup.tabs;
  return bar;
};


},{"ios-kit":"ios-kit"}],"ios-kit-temp":[function(require,module,exports){
var ios;

ios = require('ios-kit');

exports.defaults = {
  key: "value"
};

exports.defaults.props = Object.keys(exports.defaults);

exports.create = function(array) {
  var setup;
  setup = ios.utils.setupComponent(array, exports.defaults);
};


},{"ios-kit":"ios-kit"}],"ios-kit-text":[function(require,module,exports){
var ios;

ios = require('ios-kit');

exports.defaults = {
  editable: true,
  constraints: void 0,
  text: "iOS Text Layer",
  type: "text",
  x: 0,
  y: 0,
  width: -1,
  height: -1,
  superLayer: void 0,
  style: "default",
  lines: 1,
  textAlign: "left",
  backgroundColor: "transparent",
  color: "black",
  fontSize: 17,
  fontFamily: "-apple-system, Helvetica, Arial, sans-serif",
  fontWeight: "regular",
  lineHeight: "auto",
  name: "text layer",
  opacity: 1,
  textTransform: "none",
  letterSpacing: 0,
  name: "text layer",
  selectable: true,
  selectColor: "rgba(0, 118, 255, .2)",
  selectControls: "#0076FF"
};

exports.defaults.props = Object.keys(exports.defaults);

exports.create = function(array) {
  var exceptions, i, j, len, len1, prop, ref, ref1, setup, textFrame, textLayer;
  setup = ios.utils.setupComponent(array, exports.defaults);
  exceptions = Object.keys(setup);
  textLayer = new ios.View({
    backgroundColor: "transparent",
    name: setup.name,
    superLayer: setup.superLayer,
    constraints: setup.constraints
  });
  textLayer.type = "text";
  textLayer.html = setup.text;
  ref = ios.lib.layerProps;
  for (i = 0, len = ref.length; i < len; i++) {
    prop = ref[i];
    if (setup[prop]) {
      if (prop === "color") {
        setup[prop] = ios.utils.color(setup[prop]);
      }
      textLayer[prop] = setup[prop];
    }
  }
  ref1 = ios.lib.layerStyles;
  for (j = 0, len1 = ref1.length; j < len1; j++) {
    prop = ref1[j];
    if (setup[prop]) {
      if (prop === "lineHeight" && setup[prop] === "auto") {
        textLayer.style.lineHeight = setup.fontSize;
      }
      if (prop === "fontWeight") {
        switch (setup[prop]) {
          case "ultrathin":
            setup[prop] = 100;
            break;
          case "thin":
            setup[prop] = 200;
            break;
          case "light":
            setup[prop] = 300;
            break;
          case "regular":
            setup[prop] = 400;
            break;
          case "medium":
            setup[prop] = 500;
            break;
          case "semibold":
            setup[prop] = 600;
            break;
          case "bold":
            setup[prop] = 700;
            break;
          case "black":
            setup[prop] = 800;
        }
      }
      if (prop === "fontSize" || prop === "lineHeight" || prop === "letterSpacing") {
        setup[prop] = ios.utils.px(setup[prop]) + "px";
      }
      textLayer.style[prop] = setup[prop];
    }
  }
  textFrame = ios.utils.textAutoSize(textLayer);
  textLayer.props = {
    height: textFrame.height,
    width: textFrame.width
  };
  if (setup.editable) {
    textLayer.on("change:html", function() {
      textFrame = ios.utils.textAutoSize(textLayer);
      return textLayer.props = {
        height: textFrame.height,
        width: textFrame.width
      };
    });
  }
  ios.layout.set({
    target: textLayer
  });
  return textLayer;
};


},{"ios-kit":"ios-kit"}],"ios-kit-utils":[function(require,module,exports){
var ios;

ios = require('ios-kit');

exports.pt = function(px) {
  var pt;
  pt = px / ios.device.scale;
  pt = Math.round(pt);
  return pt;
};

exports.px = function(pt) {
  var px;
  px = pt * ios.device.scale;
  px = Math.round(px);
  return px;
};

exports.color = function(colorString) {
  var color;
  color = "";
  if (typeof colorString === "string") {
    colorString = colorString.toLowerCase();
    if (colorString.slice(0, 4) === "rgba") {
      return colorString;
    }
  }
  switch (colorString) {
    case "red":
      color = new Color("#FE3824");
      break;
    case "blue":
      color = new Color("#0076FF");
      break;
    case "pink":
      color = new Color("#FE2851");
      break;
    case "grey":
      color = new Color("#929292");
      break;
    case "gray":
      color = new Color("#929292");
      break;
    case "black":
      color = new Color("#030303");
      break;
    case "white":
      color = new Color("#EFEFF4");
      break;
    case "orange":
      color = new Color("#FF9600");
      break;
    case "green":
      color = new Color("#44DB5E");
      break;
    case "light blue":
      color = new Color("#54C7FC");
      break;
    case "light-blue":
      color = new Color("#54C7FC");
      break;
    case "yellow":
      color = new Color("#FFCD00");
      break;
    case "light key":
      color = new Color("#9DA7B3");
      break;
    case "light-key":
      color = new Color("#9DA7B3");
      break;
    default:
      if (colorString[0] === "#" || colorString.toHexString()[0] === "#") {
        color = new Color(colorString);
      } else {
        color = new Color("#929292");
      }
  }
  return color;
};

exports.clean = function(string) {
  string = string.replace(/[&]nbsp[;]/gi, " ").replace(/[<]br[>]/gi, "");
  return string;
};

exports.svg = function(svg) {
  var endIndex, hEndIndex, hStartIndex, height, heightString, newHeight, newString, newWidth, startIndex, string, wEndIndex, wStartIndex, width;
  startIndex = svg.search("<svg width=");
  endIndex = svg.search(" viewBox");
  string = svg.slice(startIndex, endIndex);
  wStartIndex = string.search("=") + 2;
  wEndIndex = string.search("px");
  width = string.slice(wStartIndex, wEndIndex);
  newWidth = exports.px(width);
  heightString = string.slice(wEndIndex + 4, string.length);
  hStartIndex = heightString.search("=") + 2;
  hEndIndex = heightString.search("px");
  height = heightString.slice(hStartIndex, hEndIndex);
  newHeight = exports.px(height);
  newString = string.replace(width, newWidth);
  newString = newString.replace(height, newHeight);
  svg = svg.replace(string, newString);
  return {
    svg: svg,
    width: newWidth,
    height: newHeight
  };
};

exports.changeFill = function(layer, color) {
  var endIndex, fillString, newString, startIndex, string;
  startIndex = layer.html.search("fill=\"#");
  fillString = layer.html.slice(startIndex, layer.html.length);
  endIndex = fillString.search("\">");
  string = fillString.slice(0, endIndex);
  newString = "fill=\"" + exports.color(color);
  return layer.html = layer.html.replace(string, newString);
};

exports.capitalize = function(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

exports.getTime = function() {
  var date, dateObj, day, daysOfTheWeek, hours, mins, month, monthsOfTheYear, secs;
  daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  monthsOfTheYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  dateObj = new Date();
  month = monthsOfTheYear[dateObj.getMonth()];
  date = dateObj.getDate();
  day = daysOfTheWeek[dateObj.getDay()];
  hours = dateObj.getHours();
  mins = dateObj.getMinutes();
  secs = dateObj.getSeconds();
  return {
    month: month,
    date: date,
    day: day,
    hours: hours,
    mins: mins,
    secs: secs
  };
};

exports.bgBlur = function(layer) {
  layer.style["-webkit-backdrop-filter"] = "blur(" + (exports.px(5)) + "px)";
  return layer;
};

exports.textAutoSize = function(textLayer) {
  var constraints, styles, textFrame;
  constraints = {};
  if (textLayer.constraints) {
    if (textLayer.constraints.height) {
      constraints.height = exports.px(textLayer.constraints.height);
    }
    if (textLayer.constraints.width) {
      constraints.width = exports.px(textLayer.constraints.width);
    }
  }
  styles = {
    fontSize: textLayer.style.fontSize,
    fontFamily: textLayer.style.fontFamily,
    fontWeight: textLayer.style.fontWeight,
    lineHeight: textLayer.style.lineHeight,
    letterSpacing: textLayer.style.letterSpacing,
    textTransform: textLayer.style.textTransform
  };
  textFrame = Utils.textSize(textLayer.html, styles, constraints);
  return {
    width: textFrame.width,
    height: textFrame.height
  };
};

exports.getDevice = function() {
  var device, frame, nameFormatter;
  nameFormatter = function(name) {
    var j, len, removeTerms, term;
    removeTerms = ["apple-", "-gold", "-silver", "-rose", "-space-gray", "-yellow", "-green", "-red", "-white", "-blue", "-mini", "-air", "-2", "-4"];
    for (j = 0, len = removeTerms.length; j < len; j++) {
      term = removeTerms[j];
      name = name.replace(term, "");
    }
    if (name.indexOf("-5s") !== -1) {
      name = name.replace("-5s", "-5");
    }
    if (name.indexOf("-5c") !== -1) {
      name = name.replace("-5c", "-5");
    }
    return name;
  };
  device = "";
  frame = true;
  if (ios.lib.realDevices[innerWidth] && ios.lib.realDevices[innerWidth][innerHeight]) {
    device = ios.lib.realDevices[innerWidth][innerHeight];
    frame = false;
    Framer.Device.deviceType = "fullscreen";
  }
  if (frame) {
    device = {
      name: nameFormatter(Framer.Device.deviceType),
      display_name: Framer.DeviceView.Devices[Framer.Device.deviceType].display_name,
      width: Framer.DeviceView.Devices[Framer.Device.deviceType].screenWidth,
      height: Framer.DeviceView.Devices[Framer.Device.deviceType].screenHeight,
      scale: ios.lib.framerFrames[Framer.DeviceView.Devices[Framer.Device.deviceType].screenWidth]
    };
  }
  if (device.scale === void 0) {
    device.scale = 2;
  }
  if (device.width === void 0) {
    device.width = innerWidth;
  }
  if (device.height === void 0) {
    device.height = innerHeight;
  }
  return device;
  exports.scale = ios.lib.frames[device].scale;
  if (device === "fullscreen") {
    exports.width = window.innerWidth;
    exports.height = window.innerHeight;
  } else {
    exports.width = ios.lib.frames[device].width;
    exports.height = ios.lib.frames[device].height;
    if (window.innerWidth === 1242 || window.innerWidth === 2208) {
      exports.width = window.innerWidth;
      exports.height = window.innerHeight;
      exports.scale = 3;
    }
  }
  exports.mobile = ios.lib.frames[device].mobile;
  exports.platform = ios.lib.frames[device].platform;
  exports.orientation = Framer.Device.orientation;
  device = device.replace("apple-", "");
  device = device.replace("-gold", "");
  device = device.replace("-green", "");
  device = device.replace("-blue", "");
  device = device.replace("-red", "");
  device = device.replace("-white", "");
  device = device.replace("-yellow", "");
  device = device.replace("-pink", "");
  device = device.replace("-space-grey", "");
  device = device.replace("-rose", "");
  device = device.replace("5s", "5");
  device = device.replace("5c", "5");
  device = device.replace("-mini", "");
  device = device.replace("-air", "");
  device = device.replace("-2", "");
  device = device.replace("-4", "");
  device = device.replace("-silver", "");
  capturedDevice.name = device;
  return capturedDevice;
};

exports.specialChar = function(layer) {
  var chosenColor, newText, text;
  text = layer;
  if (layer.type === "button") {
    text = layer.label;
  }
  if (text.html.indexOf("-b") !== -1) {
    newText = text.html.replace("-b ", "");
    exports.update(text, [
      {
        text: newText
      }, {
        fontWeight: 600
      }
    ]);
  }
  if (text.html.indexOf("-r") !== -1) {
    newText = text.html.replace("-r ", "");
    exports.update(text, [
      {
        text: newText
      }, {
        color: "red"
      }
    ]);
  }
  if (text.html.indexOf("-rb") !== -1) {
    newText = text.html.replace("-rb ", "");
    exports.update(text, [
      {
        text: newText
      }, {
        color: "blue"
      }
    ]);
  }
  if (text.html.indexOf("-lb") !== -1) {
    newText = text.html.replace("-lb ", "");
    exports.update(text, [
      {
        text: newText
      }, {
        color: "light-blue"
      }
    ]);
  }
  if (text.html.indexOf("-g") !== -1) {
    newText = text.html.replace("-g ", "");
    exports.update(text, [
      {
        text: newText
      }, {
        color: "green"
      }
    ]);
  }
  if (text.html.indexOf("-o") !== -1) {
    newText = text.html.replace("-o ", "");
    exports.update(text, [
      {
        text: newText
      }, {
        color: "orange"
      }
    ]);
  }
  if (text.html.indexOf("-p") !== -1) {
    newText = text.html.replace("-p ", "");
    exports.update(text, [
      {
        text: newText
      }, {
        color: "orange"
      }
    ]);
  }
  if (text.html.indexOf("-y") !== -1) {
    newText = text.html.replace("-y ", "");
    exports.update(text, [
      {
        text: newText
      }, {
        color: "yellow"
      }
    ]);
  }
  if (text.html.indexOf("-#") !== -1) {
    chosenColor = text.html.slice(1, 8);
    newText = text.html.slice(9, text.html.length);
    exports.update(text, [
      {
        text: newText
      }, {
        color: chosenColor
      }
    ]);
  }
  if (text.html.indexOf("-") !== -1) {
    newText = text.html.replace("- ", "");
    exports.update(text, [
      {
        text: newText
      }
    ]);
  }
  if (layer.buttonType === "text") {
    layer.width = text.width;
  }
  ios.layout.set(layer);
  if (layer.type === "button") {
    layer.width = text.width;
  }
  return text.color;
};

exports.update = function(layer, array) {
  var change, j, key, len, textFrame, value;
  if (array === void 0) {
    array = [];
  }
  if (layer.type === "text") {
    for (j = 0, len = array.length; j < len; j++) {
      change = array[j];
      key = Object.keys(change)[0];
      value = change[key];
      if (key === "text") {
        layer.html = value;
      }
      if (key === "fontWeight") {
        layer.style[key] = value;
      }
      if (key === "color") {
        layer.color = exports.color(value);
      }
    }
    textFrame = exports.textAutoSize(layer);
    layer.width = textFrame.width;
    layer.height = textFrame.height;
  }
  return ios.layout.set();
};

exports.autoColor = function(colorObject) {
  var blue, color, green, red, rgb;
  rgb = colorObject.toRgbString();
  rgb = rgb.substring(4, rgb.length - 1);
  rgb = rgb.replace(/ /g, '');
  rgb = rgb.replace(/ /g, '');
  rgb = rgb.split(',');
  red = rgb[0];
  green = rgb[1];
  blue = rgb[2];
  color = "";
  if ((red * 0.299 + green * 0.587 + blue * 0.114) > 186) {
    color = "#000";
  } else {
    color = "#FFF";
  }
  return color;
};

exports.sameParent = function(layer1, layer2) {
  var parentOne, parentTwo;
  parentOne = layer1.superLayer;
  parentTwo = layer2.superLayer;
  if (parentOne === parentTwo) {
    return true;
  } else {
    return false;
  }
};

exports.timeDelegate = function(layer, clockType) {
  this.time = exports.getTime();
  return Utils.delay(60 - this.time.secs, function() {
    this.time = exports.getTime();
    exports.update(layer, [
      {
        text: exports.timeFormatter(this.time, clockType)
      }
    ]);
    return Utils.interval(60, function() {
      this.time = exports.getTime();
      return exports.update(layer, [
        {
          text: exports.timeFormatter(this.time, clockType)
        }
      ]);
    });
  });
};

exports.timeFormatter = function(timeObj, clockType) {
  if (clockType === false) {
    if (timeObj.hours > 12) {
      timeObj.hours = timeObj.hours - 12;
    }
    if (timeObj.hours === 0) {
      timeObj.hours = 12;
    }
  }
  if (timeObj.mins < 10) {
    timeObj.mins = "0" + timeObj.mins;
  }
  return timeObj.hours + ":" + timeObj.mins;
};

exports.setupComponent = function(array, defaults) {
  var i, j, len, obj, ref;
  if (array === void 0) {
    array = [];
  }
  obj = {};
  ref = defaults.props;
  for (j = 0, len = ref.length; j < len; j++) {
    i = ref[j];
    if (array[i] !== void 0) {
      obj[i] = array[i];
    } else {
      obj[i] = defaults[i];
    }
  }
  return obj;
};

exports.emojiFormatter = function(string) {
  var arrayOfCodes, code, decoded, j, k, len, len1, unicodeFormat;
  unicodeFormat = "";
  if (string[0] === "E" || string[0] === "3" || string[0] === "2" || string[0] === "C") {
    arrayOfCodes = string.split(" ");
    for (j = 0, len = arrayOfCodes.length; j < len; j++) {
      code = arrayOfCodes[j];
      unicodeFormat = unicodeFormat + "%" + code;
    }
  } else {
    arrayOfCodes = string.split(" ");
    unicodeFormat = "%F0%9F";
    for (k = 0, len1 = arrayOfCodes.length; k < len1; k++) {
      code = arrayOfCodes[k];
      unicodeFormat = unicodeFormat + "%" + code;
    }
  }
  decoded = decodeURIComponent(unicodeFormat);
  return decoded;
};

exports.buildEmojisObject = function() {
  var code, emoji, emojis, index, j, len, ref, results;
  emojis = [];
  ref = ios.assets.emojiCodes;
  results = [];
  for (index = j = 0, len = ref.length; j < len; index = ++j) {
    code = ref[index];
    emoji = exports.emojiFormatter(code);
    results.push(emojis.push(emoji));
  }
  return results;
};

exports.write = function(obj, text) {
  if (obj.type === 'field') {
    return obj.text.html = obj.text.html + text;
  } else {
    return obj.html = obj.html + text;
  }
};


},{"ios-kit":"ios-kit"}],"ios-kit-view":[function(require,module,exports){
var ios;

ios = require('ios-kit');

exports.create = function(obj) {
  var i, len, prop, ref, view;
  if (obj === void 0) {
    obj = {};
  }
  view = new Layer;
  view.constraints = {};
  ref = ios.lib.layerProps;
  for (i = 0, len = ref.length; i < len; i++) {
    prop = ref[i];
    if (obj[prop]) {
      view[prop] = obj[prop];
    }
  }
  if (obj["constraints"]) {
    view.constraints = obj["constraints"];
    ios.layout.set(view);
  }
  return view;
};


},{"ios-kit":"ios-kit"}],"ios-kit":[function(require,module,exports){
var conv, layout, library, utils;

exports.layout = layout = require('ios-kit-layout');

exports.lib = library = require('ios-kit-library');

exports.utils = utils = require('ios-kit-utils');

exports.converter = conv = require('ios-kit-converter');

exports.device = utils.getDevice();

exports.assets = library.assets;

exports.isPad = function() {
  if (exports.device.name.indexOf('ipad') !== -1) {
    return true;
  } else {
    return false;
  }
};

exports.isPhone = function() {
  if (exports.device.name.indexOf('iphone') !== -1) {
    return true;
  } else {
    return false;
  }
};

exports.convert = function(sketchObj) {
  return conv.convert(sketchObj);
};

exports.color = function(string) {
  return utils.color(string);
};

exports.px = function(num) {
  return utils.px(num);
};

exports.pt = function(num) {
  return utils.pt(num);
};

exports.alert = require('ios-kit-alert');

exports.banner = require('ios-kit-banner');

exports.button = require('ios-kit-button');

exports.field = require('ios-kit-field');

exports.keyboard = require('ios-kit-keyboard');

exports.nav = require('ios-kit-nav-bar');

exports.sheet = require('ios-kit-sheet');

exports.status = require('ios-kit-status-bar');

exports.tab = require('ios-kit-tab-bar');

exports.text = require('ios-kit-text');

exports.view = require('ios-kit-view');

exports.Alert = exports.alert.create;

exports.Banner = exports.banner.create;

exports.Button = exports.button.create;

exports.Field = exports.field.create;

exports.Keyboard = exports.keyboard.create;

exports.NavBar = exports.nav.create;

exports.Sheet = exports.sheet.create;

exports.StatusBar = exports.status.create;

exports.Tab = exports.tab.tab;

exports.TabBar = exports.tab.bar;

exports.Text = exports.text.create;

exports.View = exports.view.create;

exports.l = {};


},{"ios-kit-alert":"ios-kit-alert","ios-kit-banner":"ios-kit-banner","ios-kit-button":"ios-kit-button","ios-kit-converter":"ios-kit-converter","ios-kit-field":"ios-kit-field","ios-kit-keyboard":"ios-kit-keyboard","ios-kit-layout":"ios-kit-layout","ios-kit-library":"ios-kit-library","ios-kit-nav-bar":"ios-kit-nav-bar","ios-kit-sheet":"ios-kit-sheet","ios-kit-status-bar":"ios-kit-status-bar","ios-kit-tab-bar":"ios-kit-tab-bar","ios-kit-text":"ios-kit-text","ios-kit-utils":"ios-kit-utils","ios-kit-view":"ios-kit-view"}]},{},[])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvS2V2eW4vRG9jdW1lbnRzL2ZyYW1lci1pb3Mta2l0L2lPUyBEZW1vLmZyYW1lci9tb2R1bGVzL2lvcy1raXQtYWxlcnQuY29mZmVlIiwiL1VzZXJzL0tldnluL0RvY3VtZW50cy9mcmFtZXItaW9zLWtpdC9pT1MgRGVtby5mcmFtZXIvbW9kdWxlcy9pb3Mta2l0LWJhbm5lci5jb2ZmZWUiLCIvVXNlcnMvS2V2eW4vRG9jdW1lbnRzL2ZyYW1lci1pb3Mta2l0L2lPUyBEZW1vLmZyYW1lci9tb2R1bGVzL2lvcy1raXQtYnV0dG9uLmNvZmZlZSIsIi9Vc2Vycy9LZXZ5bi9Eb2N1bWVudHMvZnJhbWVyLWlvcy1raXQvaU9TIERlbW8uZnJhbWVyL21vZHVsZXMvaW9zLWtpdC1jb252ZXJ0ZXIuY29mZmVlIiwiL1VzZXJzL0tldnluL0RvY3VtZW50cy9mcmFtZXItaW9zLWtpdC9pT1MgRGVtby5mcmFtZXIvbW9kdWxlcy9pb3Mta2l0LWZpZWxkLmNvZmZlZSIsIi9Vc2Vycy9LZXZ5bi9Eb2N1bWVudHMvZnJhbWVyLWlvcy1raXQvaU9TIERlbW8uZnJhbWVyL21vZHVsZXMvaW9zLWtpdC1rZXlib2FyZC5jb2ZmZWUiLCIvVXNlcnMvS2V2eW4vRG9jdW1lbnRzL2ZyYW1lci1pb3Mta2l0L2lPUyBEZW1vLmZyYW1lci9tb2R1bGVzL2lvcy1raXQtbGF5b3V0LmNvZmZlZSIsIi9Vc2Vycy9LZXZ5bi9Eb2N1bWVudHMvZnJhbWVyLWlvcy1raXQvaU9TIERlbW8uZnJhbWVyL21vZHVsZXMvaW9zLWtpdC1saWJyYXJ5LmNvZmZlZSIsIi9Vc2Vycy9LZXZ5bi9Eb2N1bWVudHMvZnJhbWVyLWlvcy1raXQvaU9TIERlbW8uZnJhbWVyL21vZHVsZXMvaW9zLWtpdC1uYXYtYmFyLmNvZmZlZSIsIi9Vc2Vycy9LZXZ5bi9Eb2N1bWVudHMvZnJhbWVyLWlvcy1raXQvaU9TIERlbW8uZnJhbWVyL21vZHVsZXMvaW9zLWtpdC1zaGVldC5jb2ZmZWUiLCIvVXNlcnMvS2V2eW4vRG9jdW1lbnRzL2ZyYW1lci1pb3Mta2l0L2lPUyBEZW1vLmZyYW1lci9tb2R1bGVzL2lvcy1raXQtc3RhdHVzLWJhci5jb2ZmZWUiLCIvVXNlcnMvS2V2eW4vRG9jdW1lbnRzL2ZyYW1lci1pb3Mta2l0L2lPUyBEZW1vLmZyYW1lci9tb2R1bGVzL2lvcy1raXQtdGFiLWJhci5jb2ZmZWUiLCIvVXNlcnMvS2V2eW4vRG9jdW1lbnRzL2ZyYW1lci1pb3Mta2l0L2lPUyBEZW1vLmZyYW1lci9tb2R1bGVzL2lvcy1raXQtdGVtcC5jb2ZmZWUiLCIvVXNlcnMvS2V2eW4vRG9jdW1lbnRzL2ZyYW1lci1pb3Mta2l0L2lPUyBEZW1vLmZyYW1lci9tb2R1bGVzL2lvcy1raXQtdGV4dC5jb2ZmZWUiLCIvVXNlcnMvS2V2eW4vRG9jdW1lbnRzL2ZyYW1lci1pb3Mta2l0L2lPUyBEZW1vLmZyYW1lci9tb2R1bGVzL2lvcy1raXQtdXRpbHMuY29mZmVlIiwiL1VzZXJzL0tldnluL0RvY3VtZW50cy9mcmFtZXItaW9zLWtpdC9pT1MgRGVtby5mcmFtZXIvbW9kdWxlcy9pb3Mta2l0LXZpZXcuY29mZmVlIiwiL1VzZXJzL0tldnluL0RvY3VtZW50cy9mcmFtZXItaW9zLWtpdC9pT1MgRGVtby5mcmFtZXIvbW9kdWxlcy9pb3Mta2l0LmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0NBLElBQUE7O0FBQUEsR0FBQSxHQUFNLE9BQUEsQ0FBUSxTQUFSOztBQUVOLE9BQU8sQ0FBQyxRQUFSLEdBQ0M7RUFBQSxLQUFBLEVBQU8sT0FBUDtFQUNBLE9BQUEsRUFBUSxFQURSO0VBRUEsT0FBQSxFQUFRLENBQUMsSUFBRCxDQUZSOzs7QUFJRCxPQUFPLENBQUMsUUFBUSxDQUFDLEtBQWpCLEdBQXlCLE1BQU0sQ0FBQyxJQUFQLENBQVksT0FBTyxDQUFDLFFBQXBCOztBQUV6QixPQUFPLENBQUMsTUFBUixHQUFpQixTQUFDLEdBQUQ7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LElBQXBoSixFQUEwaEosSUFBMWhKLEVBQWdpSixJQUFoaUosRUFBc2lKLElBQXRpSixFQUE0aUosSUFBNWlKLEVBQWtqSixJQUFsakosRUFBd2pKLElBQXhqSixFQUE4akosSUFBOWpKLEVBQW9rSixJQUFwa0osRUFBMGtKLElBQTFrSixFQUFnbEosSUFBaGxKLEVBQXNsSixJQUF0bEosRUFBNGxKLElBQTVsSixFQUFrbUosSUFBbG1KLEVBQXdtSixJQUF4bUosRUFBOG1KLElBQTltSixFQUFvbkosSUFBcG5KLEVBQTBuSixJQUExbkosRUFBZ29KLElBQWhvSixFQUFzb0osSUFBdG9KLEVBQTRvSixJQUE1b0osRUFBa3BKLElBQWxwSixFQUF3cEosSUFBeHBKLEVBQThwSixJQUE5cEosRUFBb3FKLElBQXBxSixFQUEwcUosSUFBMXFKLEVBQWdySixJQUFockosRUFBc3JKLElBQXRySixFQUE0ckosSUFBNXJKLEVBQWtzSixJQUFsc0osRUFBd3NKLElBQXhzSixFQUE4c0osSUFBOXNKLEVBQW90SixJQUFwdEosRUFBMHRKLElBQTF0SixFQUFndUosSUFBaHVKLEVBQXN1SixJQUF0dUosRUFBNHVKLElBQTV1SixFQUFrdkosSUFBbHZKLEVBQXd2SixJQUF4dkosRUFBOHZKLElBQTl2SixFQUFvd0osSUFBcHdKLEVBQTB3SixJQUExd0osRUFBZ3hKLElBQWh4SixFQUFzeEosSUFBdHhKLEVBQTR4SixJQUE1eEosRUFBa3lKLElBQWx5SixFQUF3eUosSUFBeHlKLEVBQTh5SixJQUE5eUosRUFBb3pKLElBQXB6SixFQUEwekosSUFBMXpKLEVBQWcwSixJQUFoMEosRUFBczBKLElBQXQwSixFQUE0MEosSUFBNTBKLEVBQWsxSixJQUFsMUosRUFBdzFKLEdBQXgxSixFQUE2MUosSUFBNzFKLEVBQW0ySixJQUFuMkosRUFBeTJKLElBQXoySixFQUErMkosSUFBLzJKLEVBQXEzSixJQUFyM0osRUFBMjNKLElBQTMzSixFQUFpNEosSUFBajRKLEVBQXU0SixJQUF2NEosRUFBNjRKLElBQTc0SixFQUFtNUosSUFB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OztBQUMxQixPQUFPLENBQUMsTUFBUixHQUFpQixPQUFPLENBQUMsR0FBRyxDQUFDOztBQUM3QixPQUFPLENBQUMsSUFBUixHQUFlLE9BQU8sQ0FBQyxJQUFJLENBQUM7O0FBQzVCLE9BQU8sQ0FBQyxJQUFSLEdBQWUsT0FBTyxDQUFDLElBQUksQ0FBQzs7QUFJNUIsT0FBTyxDQUFDLENBQVIsR0FBWSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIjIEFsZXJ0XG5pb3MgPSByZXF1aXJlICdpb3Mta2l0J1xuXG5leHBvcnRzLmRlZmF1bHRzID1cblx0dGl0bGU6IFwiVGl0bGVcIlxuXHRtZXNzYWdlOlwiXCJcblx0YWN0aW9uczpbXCJPS1wiXVxuXG5leHBvcnRzLmRlZmF1bHRzLnByb3BzID0gT2JqZWN0LmtleXMoZXhwb3J0cy5kZWZhdWx0cylcblxuZXhwb3J0cy5jcmVhdGUgPSAob2JqKSAtPlxuXHRzZXR1cCA9IGlvcy51dGlscy5zZXR1cENvbXBvbmVudChvYmosIGV4cG9ydHMuZGVmYXVsdHMpXG5cblx0YWxlcnQgPSBuZXcgaW9zLlZpZXdcblx0XHRiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiXG5cdFx0bmFtZTpcImFsZXJ0XCJcblx0XHRjb25zdHJhaW50czpcblx0XHRcdGxlYWRpbmc6MFxuXHRcdFx0dHJhaWxpbmc6MFxuXHRcdFx0dG9wOjBcblx0XHRcdGJvdHRvbTowXG5cblx0YWxlcnQub3ZlcmxheSA9IG5ldyBpb3MuVmlld1xuXHRcdGJhY2tncm91bmRDb2xvcjpcInJnYmEoMCwwLDAsLjMpXCJcblx0XHRzdXBlckxheWVyOmFsZXJ0XG5cdFx0bmFtZTpcIi5vdmVybGF5XCJcblx0XHRjb25zdHJhaW50czpcblx0XHRcdGxlYWRpbmc6MFxuXHRcdFx0dHJhaWxpbmc6MFxuXHRcdFx0dG9wOjBcblx0XHRcdGJvdHRvbTowXG5cblx0YWxlcnQubW9kYWwgPSBuZXcgaW9zLlZpZXdcblx0XHRiYWNrZ3JvdW5kQ29sb3I6XCJ3aGl0ZVwiXG5cdFx0c3VwZXJMYXllcjphbGVydFxuXHRcdGJvcmRlclJhZGl1czppb3MudXRpbHMucHgoMTApXG5cdFx0bmFtZTpcIi5tb2RhbFwiXG5cdFx0Y29uc3RyYWludHM6XG5cdFx0XHRhbGlnbjpcImNlbnRlclwiXG5cdFx0XHR3aWR0aDoyODBcblx0XHRcdGhlaWdodDo0MDBcblxuXHRhbGVydC50aXRsZSA9IG5ldyBpb3MuVGV4dFxuXHRcdHN1cGVyTGF5ZXI6YWxlcnQubW9kYWxcblx0XHR0ZXh0OnNldHVwLnRpdGxlXG5cdFx0Zm9udFdlaWdodDpcInNlbWlib2xkXCJcblx0XHRuYW1lOlwiLnRpdGxlXCJcblx0XHR0ZXh0QWxpZ246XCJjZW50ZXJcIlxuXHRcdGxpbmVIZWlnaHQ6MjBcblx0XHRjb25zdHJhaW50czpcblx0XHRcdHRvcDoyMFxuXHRcdFx0d2lkdGg6MjIwXG5cdFx0XHRhbGlnbjpcImhvcml6b250YWxcIlxuXG5cdGFsZXJ0Lm1lc3NhZ2UgPSBuZXcgaW9zLlRleHRcblx0XHRzdXBlckxheWVyOmFsZXJ0Lm1vZGFsXG5cdFx0dGV4dDpzZXR1cC5tZXNzYWdlXG5cdFx0Zm9udFNpemU6MTNcblx0XHRuYW1lOlwiLm1lc3NhZ2VcIlxuXHRcdHRleHRBbGlnbjpcImNlbnRlclwiXG5cdFx0bGluZUhlaWdodDoxNlxuXHRcdGNvbnN0cmFpbnRzOlxuXHRcdFx0dG9wOiBbYWxlcnQudGl0bGUsIDEwXVxuXHRcdFx0YWxpZ246XCJob3Jpem9udGFsXCJcblx0XHRcdHdpZHRoOiAyMjBcblxuXHRpZiBzZXR1cC5tZXNzYWdlLmxlbmd0aCA9PSAwXG5cdFx0YWxlcnQubWVzc2FnZS5oZWlnaHQgPSAtMjRcblxuXG5cdGFsZXJ0LmhvcmlEaXZpZGVyID0gbmV3IGlvcy5WaWV3XG5cdFx0c3VwZXJMYXllcjphbGVydC5tb2RhbFxuXHRcdGJhY2tncm91bmRDb2xvcjpcIiNFMkU4RUJcIlxuXHRcdG5hbWU6XCIuaG9yaURpdmlkZXJcIlxuXHRcdGNvbnN0cmFpbnRzOlxuXHRcdFx0bGVhZGluZzowXG5cdFx0XHR0cmFpbGluZzowXG5cdFx0XHRoZWlnaHQ6MVxuXHRcdFx0Ym90dG9tOjQ0XG5cblx0Y2xlYW5OYW1lID0gKG4pIC0+XG5cdFx0aWYgblswXSA9PSBcIi1cIlxuXHRcdFx0cmV0dXJuIG4uc2xpY2UoOSlcblx0XHRlbHNlXG5cdFx0XHRyZXR1cm4gblxuXHQjVGl0bGUgKyBNZXNzYWdlICsgMSBzZXQgb2YgYWN0aW9uc1xuXHRhbGVydC5tb2RhbC5jb25zdHJhaW50c1tcImhlaWdodFwiXSA9IDIwICsgaW9zLnV0aWxzLnB0KGFsZXJ0LnRpdGxlLmhlaWdodCkgKyAxMCArIGlvcy51dGlscy5wdChhbGVydC5tZXNzYWdlLmhlaWdodCkgKyAyNCArIDQ0XG5cblx0YWN0aW9ucyA9IFtdXG5cdHN3aXRjaCBzZXR1cC5hY3Rpb25zLmxlbmd0aFxuXHRcdHdoZW4gMVxuXG5cdFx0XHRhY3RMYWJlbCA9IGlvcy51dGlscy5jYXBpdGFsaXplKHNldHVwLmFjdGlvbnNbMF0pXG5cblx0XHRcdGFjdGlvbiA9IG5ldyBpb3MuVmlld1xuXHRcdFx0XHRzdXBlckxheWVyOmFsZXJ0Lm1vZGFsXG5cdFx0XHRcdGJhY2tncm91bmRDb2xvcjpcIndoaXRlXCJcblx0XHRcdFx0bmFtZTpjbGVhbk5hbWUoc2V0dXAuYWN0aW9uc1swXSlcblx0XHRcdFx0Ym9yZGVyUmFkaXVzOmlvcy51dGlscy5weCgxMClcblx0XHRcdFx0Y29uc3RyYWludHM6XG5cdFx0XHRcdFx0bGVhZGluZzowXG5cdFx0XHRcdFx0dHJhaWxpbmc6MFxuXHRcdFx0XHRcdGJvdHRvbTowXG5cdFx0XHRcdFx0aGVpZ2h0OjQ0XG5cblx0XHRcdGFjdGlvbi5sYWJlbCA9IG5ldyBpb3MuVGV4dFxuXHRcdFx0XHRjb2xvcjppb3MudXRpbHMuY29sb3IoXCJibHVlXCIpXG5cdFx0XHRcdHN1cGVyTGF5ZXI6YWN0aW9uXG5cdFx0XHRcdHRleHQ6YWN0TGFiZWxcblx0XHRcdFx0bmFtZTpcImxhYmVsXCJcblx0XHRcdFx0Y29uc3RyYWludHM6XG5cdFx0XHRcdFx0YWxpZ246XCJob3Jpem9udGFsXCJcblx0XHRcdFx0XHRib3R0b206MTZcblxuXHRcdFx0YWN0aW9ucy5wdXNoIGFjdGlvblxuXG5cdFx0d2hlbiAyXG5cblx0XHRcdGFjdExhYmVsID0gaW9zLnV0aWxzLmNhcGl0YWxpemUoc2V0dXAuYWN0aW9uc1swXSlcblxuXHRcdFx0YWN0aW9uID0gbmV3IGlvcy5WaWV3XG5cdFx0XHRcdHN1cGVyTGF5ZXI6YWxlcnQubW9kYWxcblx0XHRcdFx0bmFtZTpjbGVhbk5hbWUoc2V0dXAuYWN0aW9uc1swXSlcblx0XHRcdFx0Ym9yZGVyUmFkaXVzOmlvcy51dGlscy5weCgxMClcblx0XHRcdFx0YmFja2dyb3VuZENvbG9yOlwid2hpdGVcIlxuXHRcdFx0XHRjb25zdHJhaW50czpcblx0XHRcdFx0XHRsZWFkaW5nOjBcblx0XHRcdFx0XHR0cmFpbGluZzppb3MudXRpbHMucHQoYWxlcnQubW9kYWwud2lkdGgvMilcblx0XHRcdFx0XHRib3R0b206MFxuXHRcdFx0XHRcdGhlaWdodDo0NFxuXG5cdFx0XHRhY3Rpb24ubGFiZWwgPSBuZXcgaW9zLlRleHRcblx0XHRcdFx0Y29sb3I6aW9zLnV0aWxzLmNvbG9yKFwiYmx1ZVwiKVxuXHRcdFx0XHRzdXBlckxheWVyOmFjdGlvblxuXHRcdFx0XHR0ZXh0OmFjdExhYmVsXG5cdFx0XHRcdG5hbWU6XCJsYWJlbFwiXG5cdFx0XHRcdGNvbnN0cmFpbnRzOlxuXHRcdFx0XHRcdGFsaWduOlwiaG9yaXpvbnRhbFwiXG5cdFx0XHRcdFx0Ym90dG9tOjE2XG5cblx0XHRcdGFjdGlvbnMucHVzaCBhY3Rpb25cblxuXHRcdFx0YWxlcnQudmVydERpdmlkZXIgPSBuZXcgaW9zLlZpZXdcblx0XHRcdFx0c3VwZXJMYXllcjphbGVydC5tb2RhbFxuXHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6XCIjRTJFOEVCXCJcblx0XHRcdFx0bmFtZTpcIi52ZXJ0RGl2aWRlclwiXG5cdFx0XHRcdGNvbnN0cmFpbnRzOlxuXHRcdFx0XHRcdHdpZHRoOjFcblx0XHRcdFx0XHRib3R0b206MFxuXHRcdFx0XHRcdGhlaWdodDo0NFxuXHRcdFx0XHRcdGFsaWduOlwiaG9yaXpvbnRhbFwiXG5cblx0XHRcdGFjdExhYmVsMiA9IGlvcy51dGlscy5jYXBpdGFsaXplKHNldHVwLmFjdGlvbnNbMV0pXG5cblx0XHRcdGFjdGlvbjIgPSBuZXcgaW9zLlZpZXdcblx0XHRcdFx0c3VwZXJMYXllcjphbGVydC5tb2RhbFxuXHRcdFx0XHRuYW1lOmNsZWFuTmFtZShzZXR1cC5hY3Rpb25zWzFdKVxuXHRcdFx0XHRib3JkZXJSYWRpdXM6aW9zLnV0aWxzLnB4KDEwKVxuXHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6XCJ3aGl0ZVwiXG5cdFx0XHRcdGNvbnN0cmFpbnRzOlxuXHRcdFx0XHRcdGxlYWRpbmc6aW9zLnV0aWxzLnB0KGFsZXJ0Lm1vZGFsLndpZHRoLzIpXG5cdFx0XHRcdFx0dHJhaWxpbmc6MFxuXHRcdFx0XHRcdGJvdHRvbTowXG5cdFx0XHRcdFx0aGVpZ2h0OjQ0XG5cblx0XHRcdGFjdGlvbjIubGFiZWwgPSBuZXcgaW9zLlRleHRcblx0XHRcdFx0Y29sb3I6aW9zLnV0aWxzLmNvbG9yKFwiYmx1ZVwiKVxuXHRcdFx0XHRzdXBlckxheWVyOmFjdGlvbjJcblx0XHRcdFx0dGV4dDphY3RMYWJlbDJcblx0XHRcdFx0bmFtZTpcImxhYmVsXCJcblx0XHRcdFx0Y29uc3RyYWludHM6XG5cdFx0XHRcdFx0YWxpZ246XCJob3Jpem9udGFsXCJcblx0XHRcdFx0XHRib3R0b206MTZcblxuXHRcdFx0YWN0aW9ucy5wdXNoIGFjdGlvbjJcblxuXHRcdGVsc2Vcblx0XHRcdGZvciBhY3QsIGluZGV4IGluIHNldHVwLmFjdGlvbnNcblxuXHRcdFx0XHRhY3RMYWJlbCA9IGlvcy51dGlscy5jYXBpdGFsaXplKGFjdClcblxuXHRcdFx0XHRhY3Rpb24gPSBuZXcgaW9zLlZpZXdcblx0XHRcdFx0XHRzdXBlckxheWVyOmFsZXJ0Lm1vZGFsXG5cdFx0XHRcdFx0bmFtZTpjbGVhbk5hbWUoYWN0KVxuXHRcdFx0XHRcdGJvcmRlclJhZGl1czppb3MudXRpbHMucHgoMTApXG5cdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOlwid2hpdGVcIlxuXHRcdFx0XHRcdGNvbnN0cmFpbnRzOlxuXHRcdFx0XHRcdFx0bGVhZGluZzowXG5cdFx0XHRcdFx0XHR0cmFpbGluZzowXG5cdFx0XHRcdFx0XHRib3R0b206MCArICgoc2V0dXAuYWN0aW9ucy5sZW5ndGggLSBpbmRleCAtIDEpICogNDQpXG5cdFx0XHRcdFx0XHRoZWlnaHQ6NDRcblxuXHRcdFx0XHRhY3Rpb25EaXZpZGVyID0gbmV3IGlvcy5WaWV3XG5cdFx0XHRcdFx0c3VwZXJMYXllcjphbGVydC5tb2RhbFxuXHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjpcIiNFMkU4RUJcIlxuXHRcdFx0XHRcdG5hbWU6XCJhY3Rpb24gZGl2aWRlclwiXG5cdFx0XHRcdFx0Y29uc3RyYWludHM6XG5cdFx0XHRcdFx0XHRsZWFkaW5nOjBcblx0XHRcdFx0XHRcdHRyYWlsaW5nOjBcblx0XHRcdFx0XHRcdGhlaWdodDoxXG5cdFx0XHRcdFx0XHRib3R0b206MCArICgoc2V0dXAuYWN0aW9ucy5sZW5ndGggLSBpbmRleCkgKiA0NClcblxuXHRcdFx0XHRhY3Rpb24ubGFiZWwgPSBuZXcgaW9zLlRleHRcblx0XHRcdFx0XHRzdHlsZTpcImFsZXJ0QWN0aW9uXCJcblx0XHRcdFx0XHRjb2xvcjppb3MudXRpbHMuY29sb3IoXCJibHVlXCIpXG5cdFx0XHRcdFx0c3VwZXJMYXllcjphY3Rpb25cblx0XHRcdFx0XHR0ZXh0OmFjdExhYmVsXG5cdFx0XHRcdFx0bmFtZTpcImxhYmVsXCJcblx0XHRcdFx0XHRjb25zdHJhaW50czpcblx0XHRcdFx0XHRcdGFsaWduOlwiaG9yaXpvbnRhbFwiXG5cdFx0XHRcdFx0XHRib3R0b206MTRcblxuXG5cdFx0XHRcdGFjdGlvbnMucHVzaCBhY3Rpb25cblx0XHRcdFx0YWxlcnQubW9kYWwuY29uc3RyYWludHNbXCJoZWlnaHRcIl0gPSBhbGVydC5tb2RhbC5jb25zdHJhaW50c1tcImhlaWdodFwiXSArIDQyIC0gMTJcblxuXHRhbGVydC5hY3Rpb25zID0ge31cblx0Zm9yIGFjdCxpbmRleCBpbiBhY3Rpb25zXG5cblx0XHQjSGFuZGxlIHNwZWNpYWwgY2hhcmFjdGVyc1xuXHRcdGFjdC50eXBlID0gXCJidXR0b25cIlxuXHRcdGlvcy51dGlscy5zcGVjaWFsQ2hhcihhY3QpXG5cblx0XHRpZiBzZXR1cC5hY3Rpb25zW2luZGV4XS5pbmRleE9mKFwiLXJcIikgPT0gMFxuXHRcdFx0YWN0Lm9yaWdDb2xvciA9IGlvcy51dGlscy5jb2xvcihcInJlZFwiKVxuXHRcdGVsc2Vcblx0XHRcdGFjdC5vcmlnQ29sb3IgPSBpb3MudXRpbHMuY29sb3IoXCJibHVlXCIpXG5cdFx0aW9zLmxheW91dC5zZXQoYWN0LmxhYmVsKVxuXHRcdCNBZGQgVG91Y2ggRXZlbnRzXG5cdFx0YWN0Lm9uIEV2ZW50cy5Ub3VjaFN0YXJ0LCAtPlxuXHRcdFx0QC5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCJcblx0XHRcdEAuYW5pbWF0ZVxuXHRcdFx0XHRwcm9wZXJ0aWVzOihiYWNrZ3JvdW5kQ29sb3I6YWN0LmJhY2tncm91bmRDb2xvci5kYXJrZW4oNSkpXG5cdFx0XHRcdHRpbWU6LjI1XG5cdFx0XHRALmxhYmVsLmFuaW1hdGVcblx0XHRcdFx0cHJvcGVydGllczooY29sb3I6QC5vcmlnQ29sb3IubGlnaHRlbigxMCkpXG5cdFx0XHRcdHRpbWU6LjI1XG5cblx0XHRhY3Qub24gRXZlbnRzLlRvdWNoRW5kLCAtPlxuXHRcdFx0QC5hbmltYXRlXG5cdFx0XHRcdHByb3BlcnRpZXM6KGJhY2tncm91bmRDb2xvcjpcIndoaXRlXCIpXG5cdFx0XHRcdHRpbWU6LjI1XG5cdFx0XHRALmxhYmVsLmFuaW1hdGVcblx0XHRcdFx0cHJvcGVydGllczooY29sb3I6QC5vcmlnQ29sb3IpXG5cdFx0XHRcdHRpbWU6LjI1XG5cdFx0XHRhbGVydC5kZXN0cm95KClcblxuXHRcdCMgRXhwb3J0IGFjdGlvbnNcblx0XHRhbGVydC5hY3Rpb25zW2FjdC5uYW1lXSA9IGFjdFxuXG5cdGlvcy5sYXlvdXQuc2V0KGFjdGlvbnNbYWN0aW9ucy5sZW5ndGggLSAxXSlcblx0cmV0dXJuIGFsZXJ0XG4iLCIjIEJhbm5lclxuaW9zID0gcmVxdWlyZSAnaW9zLWtpdCdcblxuZXhwb3J0cy5kZWZhdWx0cyA9XG5cdHRpdGxlOiBcIlRpdGxlXCJcblx0bWVzc2FnZTpcIk1lc3NhZ2VcIlxuXHRhY3Rpb246XCJBY3Rpb25cIlxuXHR0aW1lOlwibm93XCJcblx0YXBwOlwiYXBwXCJcblx0aWNvbjp1bmRlZmluZWRcblx0ZHVyYXRpb246N1xuXHRhbmltYXRlZDp0cnVlXG5cdHJlcGx5OnRydWVcblxuZXhwb3J0cy5kZWZhdWx0cy5wcm9wcyA9IE9iamVjdC5rZXlzKGV4cG9ydHMuZGVmYXVsdHMpXG5cbmV4cG9ydHMuY3JlYXRlID0gKG9iaikgLT5cblx0c2V0dXAgPSBpb3MudXRpbHMuc2V0dXBDb21wb25lbnQob2JqLCBleHBvcnRzLmRlZmF1bHRzKVxuXG5cdCNzZXQgc3BlY3MgZm9yIGVhY2ggZGV2aWNlXG5cdHNwZWNzID1cblx0XHRsZWFkaW5nSWNvbjogMTVcblx0XHR0b3BJY29uOiA4XG5cdFx0dG9wVGl0bGU6IDZcblx0XHR3aWR0aDowXG5cblx0c3dpdGNoIGlvcy5kZXZpY2UubmFtZVxuXHRcdHdoZW4gXCJpcGhvbmUtNVwiXG5cdFx0XHRzcGVjcy53aWR0aCA9IDMwNFxuXHRcdHdoZW4gXCJpcGhvbmUtNnNcIlxuXHRcdFx0c3BlY3Mud2lkdGggPSAzNTlcblx0XHR3aGVuIFwiaXBob25lLTZzLXBsdXNcIlxuXHRcdFx0c3BlY3MubGVhZGluZ0ljb24gPSAxNVxuXHRcdFx0c3BlY3MudG9wSWNvbiA9IDEyXG5cdFx0XHRzcGVjcy50b3BUaXRsZSA9IDEwXG5cdFx0XHRzcGVjcy53aWR0aCA9IDM5OFxuXHRcdHdoZW4gXCJpcGFkXCJcblx0XHRcdHNwZWNzLmxlYWRpbmdJY29uID0gOFxuXHRcdFx0c3BlY3MudG9wSWNvbiA9IDhcblx0XHRcdHNwZWNzLnRvcFRpdGxlID0gMTFcblx0XHRcdHNwZWNzLndpZHRoID0gMzk4XG5cdFx0d2hlbiBcImlwYWQtcHJvXCJcblx0XHRcdHNwZWNzLmxlYWRpbmdJY29uID0gOFxuXHRcdFx0c3BlY3MudG9wSWNvbiA9IDhcblx0XHRcdHNwZWNzLnRvcFRpdGxlID0gOVxuXHRcdFx0c3BlY3Mud2lkdGggPSA1NTZcblxuXG5cdGJhbm5lciA9IG5ldyBpb3MuVmlld1xuXHRcdGJhY2tncm91bmRDb2xvcjpcInJnYmEoMjU1LDI1NSwyNTUsLjYpXCJcblx0XHRuYW1lOlwiYmFubmVyXCJcblx0XHRib3JkZXJSYWRpdXM6aW9zLnB4KDEyKVxuXHRcdHNoYWRvd0NvbG9yOlwicmdiYSgwLDAsMCwuMylcIlxuXHRcdHNoYWRvd1k6aW9zLnB4KDIpXG5cdFx0c2hhZG93Qmx1cjppb3MucHgoMTApXG5cdFx0Y2xpcDp0cnVlXG5cdFx0Y29uc3RyYWludHM6XG5cdFx0XHRhbGlnbjonaG9yaXpvbnRhbCdcblx0XHRcdHdpZHRoOnNwZWNzLndpZHRoXG5cdFx0XHR0b3A6OFxuXHRcdFx0aGVpZ2h0OjkzXG5cblx0YmFubmVyLmhlYWRlciA9IG5ldyBpb3MuVmlld1xuXHRcdGJhY2tncm91bmRDb2xvcjpcInJnYmEoMjU1LDI1NSwyNTUsIC4zKVwiXG5cdFx0bmFtZTpcIi5oZWFkZXJcIlxuXHRcdHN1cGVyTGF5ZXI6YmFubmVyXG5cdFx0Y29uc3RyYWludHM6XG5cdFx0XHRoZWlnaHQ6MzZcblx0XHRcdGxlYWRpbmc6MFxuXHRcdFx0dHJhaWxpbmc6MFxuXG5cdGlmIHNldHVwLmljb24gPT0gdW5kZWZpbmVkXG5cblx0XHRiYW5uZXIuaWNvbiA9IG5ldyBpb3MuVmlld1xuXHRcdFx0c3VwZXJMYXllcjpiYW5uZXIuaGVhZGVyXG5cdFx0YmFubmVyLmljb24uc3R5bGVbXCJiYWNrZ3JvdW5kXCJdID0gXCJsaW5lYXItZ3JhZGllbnQoLTE4MGRlZywgIzY3RkY4MSAwJSwgIzAxQjQxRiAxMDAlKVwiXG5cblx0ZWxzZVxuXG5cdFx0YmFubmVyLmhlYWRlci5hZGRTdWJMYXllcihzZXR1cC5pY29uKVxuXHRcdGJhbm5lci5pY29uID0gc2V0dXAuaWNvblxuXG5cblx0YmFubmVyLmljb24uYm9yZGVyUmFkaXVzID0gaW9zLnV0aWxzLnB4KDQuNSlcblx0YmFubmVyLmljb24ubmFtZSA9IFwiLmljb25cIlxuXHRiYW5uZXIuaWNvbi5jb25zdHJhaW50cyA9XG5cdFx0aGVpZ2h0OjIwXG5cdFx0d2lkdGg6MjBcblx0XHRsZWFkaW5nOnNwZWNzLmxlYWRpbmdJY29uXG5cdFx0YWxpZ246XCJ2ZXJ0aWNhbFwiXG5cblx0aW9zLmxheW91dC5zZXQoYmFubmVyLmljb24pXG5cblx0YmFubmVyLmFwcCA9IG5ldyBpb3MuVGV4dFxuXHRcdHRleHQ6c2V0dXAuYXBwLnRvVXBwZXJDYXNlKClcblx0XHRjb2xvcjpcInJnYmEoMCwwLDAsLjUpXCJcblx0XHRmb250U2l6ZToxM1xuXHRcdGxldHRlclNwYWNpbmc6LjVcblx0XHRzdXBlckxheWVyOmJhbm5lci5oZWFkZXJcblx0XHRjb25zdHJhaW50czpcblx0XHRcdGxlYWRpbmc6W2Jhbm5lci5pY29uLCA2XVxuXHRcdFx0YWxpZ246XCJ2ZXJ0aWNhbFwiXG5cblx0YmFubmVyLnRpdGxlID0gbmV3IGlvcy5UZXh0XG5cdFx0dGV4dDpzZXR1cC50aXRsZVxuXHRcdGNvbG9yOlwiYmxhY2tcIlxuXHRcdGZvbnRXZWlnaHQ6XCJzZW1pYm9sZFwiXG5cdFx0Zm9udFNpemU6MTVcblx0XHRzdXBlckxheWVyOmJhbm5lclxuXHRcdG5hbWU6XCIudGl0bGVcIlxuXHRcdGNvbnN0cmFpbnRzOlxuXHRcdFx0dG9wOjQ1XG5cdFx0XHRsZWFkaW5nOjE1XG5cblx0YmFubmVyLm1lc3NhZ2UgPSBuZXcgaW9zLlRleHRcblx0XHR0ZXh0OnNldHVwLm1lc3NhZ2Vcblx0XHRjb2xvcjpcImJsYWNrXCJcblx0XHRmb250U2l6ZToxNVxuXHRcdGZvbnRXZWlnaHQ6XCJsaWdodFwiXG5cdFx0c3VwZXJMYXllcjpiYW5uZXJcblx0XHRuYW1lOlwiLm1lc3NhZ2VcIlxuXHRcdGNvbnN0cmFpbnRzOlxuXHRcdFx0bGVhZGluZ0VkZ2VzOmJhbm5lci50aXRsZVxuXHRcdFx0dG9wOltiYW5uZXIudGl0bGUsIDZdXG5cblx0YmFubmVyLnRpbWUgPSBuZXcgaW9zLlRleHRcblx0XHR0ZXh0OnNldHVwLnRpbWVcblx0XHRjb2xvcjpcInJnYmEoMCwwLDAsLjUpXCJcblx0XHRmb250U2l6ZToxM1xuXHRcdHN1cGVyTGF5ZXI6YmFubmVyLmhlYWRlclxuXHRcdG5hbWU6XCIudGltZVwiXG5cdFx0Y29uc3RyYWludHM6XG5cdFx0XHR0cmFpbGluZzoxNlxuXHRcdFx0YWxpZ246XCJ2ZXJ0aWNhbFwiXG5cblx0aWYgaW9zLmRldmljZS5uYW1lID09IFwiaXBhZFwiIHx8IGlvcy5kZXZpY2UubmFtZSA9PSBcImlwYWQtcHJvXCJcblx0XHRiYW5uZXIudGltZS5jb25zdHJhaW50cyA9XG5cdFx0XHRib3R0b21FZGdlczogYmFubmVyLnRpdGxlXG5cdFx0XHR0cmFpbGluZzogc3BlY3MubGVhZGluZ0ljb25cblxuXG5cdGlvcy51dGlscy5iZ0JsdXIoYmFubmVyKVxuXG5cdCMjIEJhbm5lciBEcmFnIHNldHRpbmdzXG5cdGJhbm5lci5kcmFnZ2FibGUgPSB0cnVlXG5cdGJhbm5lci5kcmFnZ2FibGUuaG9yaXpvbnRhbCA9IGZhbHNlXG5cdGJhbm5lci5kcmFnZ2FibGUuY29uc3RyYWludHMgPVxuXHRcdHk6aW9zLnB4KDgpXG5cdFx0eDppb3MucHgoOClcblxuXHRiYW5uZXIuZHJhZ2dhYmxlLmJvdW5jZU9wdGlvbnMgPVxuXHQgICAgZnJpY3Rpb246IDI1XG5cdCAgICB0ZW5zaW9uOiAyNTBcblxuXHRiYW5uZXIub24gRXZlbnRzLkRyYWdFbmQsIC0+XG5cdFx0aWYgYmFubmVyLm1heFkgPCBpb3MudXRpbHMucHgoNjgpXG5cdFx0XHRiYW5uZXIuYW5pbWF0ZVxuXHRcdFx0XHRwcm9wZXJ0aWVzOihtYXhZOjApXG5cdFx0XHRcdHRpbWU6LjE1XG5cdFx0XHRcdGN1cnZlOlwiZWFzZS1pbi1vdXRcIlxuXHRcdFx0VXRpbHMuZGVsYXkgLjI1LCAtPlxuXHRcdFx0XHRiYW5uZXIuZGVzdHJveSgpXG5cblx0IyBBbmltYXRlLWluXG5cdGlmIHNldHVwLmFuaW1hdGVkID09IHRydWVcblx0XHRiYW5uZXIueSA9IDAgLSBiYW5uZXIuaGVpZ2h0XG5cdFx0aW9zLmxheW91dC5hbmltYXRlXG5cdFx0XHR0YXJnZXQ6YmFubmVyXG5cdFx0XHR0aW1lOi4yNVxuXHRcdFx0Y3VydmU6J2Vhc2UtaW4tb3V0J1xuXHQjIEFuaW1hdGUtb3V0XG5cdGlmIHNldHVwLmR1cmF0aW9uXG5cdFx0VXRpbHMuZGVsYXkgc2V0dXAuZHVyYXRpb24sIC0+XG5cdFx0XHRiYW5uZXIuYW5pbWF0ZVxuXHRcdFx0XHRwcm9wZXJ0aWVzOihtYXhZOjApXG5cdFx0XHRcdHRpbWU6LjI1XG5cdFx0XHRcdGN1cnZlOlwiZWFzZS1pbi1vdXRcIlxuXHRcdFV0aWxzLmRlbGF5IHNldHVwLmR1cmF0aW9uICsgLjI1LCAtPlxuXHRcdFx0YmFubmVyLmRlc3Ryb3koKVxuXG5cdHJldHVybiBiYW5uZXJcbiIsImlvcyA9IHJlcXVpcmUgJ2lvcy1raXQnXG5cbmV4cG9ydHMuZGVmYXVsdHMgPVxuXHRcdHRleHQ6XCJCdXR0b25cIlxuXHRcdHR5cGU6XCJ0ZXh0XCJcblx0XHRzdHlsZTpcImxpZ2h0XCJcblx0XHRiYWNrZ3JvdW5kQ29sb3I6XCJ3aGl0ZVwiXG5cdFx0Y29sb3I6XCIjMDA3QUZGXCJcblx0XHRmb250U2l6ZToxN1xuXHRcdGZvbnRXZWlnaHQ6XCJyZWd1bGFyXCJcblx0XHRuYW1lOlwiYnV0dG9uXCJcblx0XHRibHVyOnRydWVcblx0XHRzdXBlckxheWVyOnVuZGVmaW5lZFxuXHRcdGNvbnN0cmFpbnRzOnVuZGVmaW5lZFxuXG5leHBvcnRzLmRlZmF1bHRzLnByb3BzID0gT2JqZWN0LmtleXMoZXhwb3J0cy5kZWZhdWx0cylcblxuZXhwb3J0cy5jcmVhdGUgPSAoYXJyYXkpIC0+XG5cdHNldHVwID0gaW9zLnV0aWxzLnNldHVwQ29tcG9uZW50KGFycmF5LCBleHBvcnRzLmRlZmF1bHRzKVxuXG5cdGJ1dHRvbiA9IG5ldyBpb3MuVmlld1xuXHRcdG5hbWU6c2V0dXAubmFtZVxuXHRcdGNvbnN0cmFpbnRzOnNldHVwLmNvbnN0cmFpbnRzXG5cdFx0c3VwZXJMYXllcjpzZXR1cC5zdXBlckxheWVyXG5cdGJ1dHRvbi50eXBlID0gc2V0dXAudHlwZVxuXG5cdGNvbG9yID0gXCJcIlxuXG5cdHN3aXRjaCBzZXR1cC50eXBlXG5cdFx0d2hlbiBcImJpZ1wiXG5cdFx0XHRzZXR1cC5mb250U2l6ZSA9IDIwXG5cdFx0XHRzZXR1cC5mb250V2VpZ2h0ID0gXCJtZWRpdW1cIlxuXG5cdFx0XHRidXR0b24uYm9yZGVyUmFkaXVzID0gaW9zLnV0aWxzLnB4KDEyLjUpXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3IgPSBcIlwiXG5cblx0XHRcdGlmIGJ1dHRvbi5jb25zdHJhaW50cyA9PSB1bmRlZmluZWQgdGhlbiBidXR0b24uY29uc3RyYWludHMgPSB7fVxuXHRcdFx0YnV0dG9uLmNvbnN0cmFpbnRzLmxlYWRpbmcgPSAxMFxuXHRcdFx0YnV0dG9uLmNvbnN0cmFpbnRzLnRyYWlsaW5nID0gMTBcblx0XHRcdGJ1dHRvbi5jb25zdHJhaW50cy5oZWlnaHQgPSA1N1xuXG5cdFx0XHRzd2l0Y2ggc2V0dXAuc3R5bGVcblx0XHRcdFx0d2hlbiBcImxpZ2h0XCJcblx0XHRcdFx0XHRjb2xvciA9IGlvcy51dGlscy5jb2xvcihcImJsdWVcIilcblx0XHRcdFx0XHRpZiBzZXR1cC5ibHVyXG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3IgPSBcInJnYmEoMjU1LCAyNTUsIDI1NSwgLjkpXCJcblx0XHRcdFx0XHRcdGlvcy51dGlscy5iZ0JsdXIoYnV0dG9uKVxuXHRcdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRcdGJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIlxuXG5cdFx0XHRcdHdoZW4gXCJkYXJrXCJcblx0XHRcdFx0XHRjb2xvciA9IFwiI0ZGRlwiXG5cdFx0XHRcdFx0aWYgc2V0dXAuYmx1clxuXHRcdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yID0gXCJyZ2JhKDQzLCA0MywgNDMsIC45KVwiXG5cdFx0XHRcdFx0XHRpb3MudXRpbHMuYmdCbHVyKGJ1dHRvbilcblx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3IgPSBcIiMyODI4MjhcIlxuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0aWYgc2V0dXAuYmx1clxuXHRcdFx0XHRcdFx0Y29sb3IgPSBzZXR1cC5jb2xvclxuXHRcdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yID0gbmV3IENvbG9yKHNldHVwLmJhY2tncm91bmRDb2xvcilcblx0XHRcdFx0XHRcdHJnYlN0cmluZyA9IGJhY2tncm91bmRDb2xvci50b1JnYlN0cmluZygpXG5cdFx0XHRcdFx0XHRyZ2JhU3RyaW5nID0gcmdiU3RyaW5nLnJlcGxhY2UoXCIpXCIsIFwiLCAuOSlcIilcblx0XHRcdFx0XHRcdHJnYmFTdHJpbmcgID0gcmdiYVN0cmluZy5yZXBsYWNlKFwicmdiXCIsIFwicmdiYVwiKVxuXHRcdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yID0gcmdiYVN0cmluZ1xuXHRcdFx0XHRcdFx0aW9zLnV0aWxzLmJnQmx1cihidXR0b24pXG5cdFx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdFx0Y29sb3IgPSBzZXR1cC5jb2xvclxuXHRcdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yID0gbmV3IENvbG9yKHNldHVwLmJhY2tncm91bmRDb2xvcilcblxuXHRcdFx0YnV0dG9uLmJhY2tncm91bmRDb2xvciA9IGJhY2tncm91bmRDb2xvclxuXG5cdFx0XHRidXR0b24ub24gRXZlbnRzLlRvdWNoU3RhcnQsIC0+XG5cdFx0XHRcdG5ld0NvbG9yID0gXCJcIlxuXHRcdFx0XHRpZiBzZXR1cC5zdHlsZSA9PSBcImRhcmtcIlxuXHRcdFx0XHRcdG5ld0NvbG9yID0gYnV0dG9uLmJhY2tncm91bmRDb2xvci5saWdodGVuKDEwKVxuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0bmV3Q29sb3IgPSBidXR0b24uYmFja2dyb3VuZENvbG9yLmRhcmtlbigxMClcblx0XHRcdFx0YnV0dG9uLmFuaW1hdGVcblx0XHRcdFx0XHRwcm9wZXJ0aWVzOihiYWNrZ3JvdW5kQ29sb3I6bmV3Q29sb3IpXG5cdFx0XHRcdFx0dGltZTouNVxuXG5cdFx0XHRidXR0b24ub24gRXZlbnRzLlRvdWNoRW5kLCAtPlxuXHRcdFx0XHRidXR0b24uYW5pbWF0ZVxuXHRcdFx0XHRcdHByb3BlcnRpZXM6KGJhY2tncm91bmRDb2xvcjpiYWNrZ3JvdW5kQ29sb3IpXG5cdFx0XHRcdFx0dGltZTouNVxuXG5cdFx0d2hlbiBcInNtYWxsXCJcblx0XHRcdHNldHVwLmZvbnRTaXplID0gMTRcblx0XHRcdHNldHVwLnRvcCA9IDRcblx0XHRcdGJ1dHRvbi5ib3JkZXJSYWRpdXMgPSBpb3MudXRpbHMucHgoMi41KVxuXHRcdFx0c2V0dXAuZm9udFdlaWdodCA9IDUwMFxuXHRcdFx0c2V0dXAudGV4dCA9IHNldHVwLnRleHQudG9VcHBlckNhc2UoKVxuXHRcdFx0Y29sb3IgPSBzZXR1cC5jb2xvclxuXHRcdFx0YnV0dG9uLmJvcmRlckNvbG9yID0gc2V0dXAuY29sb3JcblxuXHRcdFx0YnV0dG9uLmJhY2tncm91bmRDb2xvciA9IFwidHJhbnNwYXJlbnRcIlxuXHRcdFx0YnV0dG9uLmJvcmRlcldpZHRoID0gaW9zLnV0aWxzLnB4KDEpXG5cblx0XHRlbHNlXG5cdFx0XHRidXR0b24uYmFja2dyb3VuZENvbG9yID0gXCJ0cmFuc3BhcmVudFwiXG5cdFx0XHRidXR0b24ub3JpZ0NvbG9yID0gaW9zLnV0aWxzLnNwZWNpYWxDaGFyKGJ1dHRvbilcblxuXHRcdFx0Y29sb3IgPSBzZXR1cC5jb2xvclxuXHRcdFx0YnV0dG9uLmxhYmVsT3JpZ0NvbG9yID0gY29sb3JcblxuXG5cdFx0XHRidXR0b24ub24gRXZlbnRzLlRvdWNoU3RhcnQsIC0+XG5cdFx0XHRcdEAubGFiZWxPcmlnQ29sb3IgPSBidXR0b24ubGFiZWwuY29sb3Jcblx0XHRcdFx0bmV3Q29sb3IgPSBidXR0b24uc3ViTGF5ZXJzWzBdLmNvbG9yLmxpZ2h0ZW4oMzApXG5cdFx0XHRcdGJ1dHRvbi5zdWJMYXllcnNbMF0uYW5pbWF0ZVxuXHRcdFx0XHRcdHByb3BlcnRpZXM6KGNvbG9yOm5ld0NvbG9yKVxuXHRcdFx0XHRcdHRpbWU6LjVcblxuXHRcdFx0YnV0dG9uLm9uIEV2ZW50cy5Ub3VjaEVuZCwgLT5cblx0XHRcdFx0QC5zdWJMYXllcnNbMF0uYW5pbWF0ZVxuXHRcdFx0XHRcdHByb3BlcnRpZXM6KGNvbG9yOmlvcy51dGlscy5jb2xvcihALmxhYmVsT3JpZ0NvbG9yKSlcblx0XHRcdFx0XHR0aW1lOi41XG5cblx0YnV0dG9uLmxhYmVsID0gbmV3IGlvcy5UZXh0XG5cdFx0bmFtZTpcIi5sYWJlbFwiXG5cdFx0dGV4dDpzZXR1cC50ZXh0XG5cdFx0Y29sb3I6Y29sb3Jcblx0XHRsaW5lSGVpZ2h0OjE2XG5cdFx0c3VwZXJMYXllcjpidXR0b25cblx0XHRmb250U2l6ZTpzZXR1cC5mb250U2l6ZVxuXHRcdGZvbnRXZWlnaHQ6c2V0dXAuZm9udFdlaWdodFxuXHRcdGNvbnN0cmFpbnRzOlxuXHRcdFx0YWxpZ246XCJjZW50ZXJcIlxuXG5cdHN3aXRjaCBzZXR1cC50eXBlXG5cdFx0d2hlbiBcInNtYWxsXCJcblx0XHRcdGJ1dHRvbi5wcm9wcyA9ICh3aWR0aDpidXR0b24ubGFiZWwud2lkdGggKyBpb3MudXRpbHMucHgoMjApLCBoZWlnaHQ6IGJ1dHRvbi5sYWJlbC5oZWlnaHQgKyBpb3MudXRpbHMucHgoMTApKVxuXG5cdFx0XHRidXR0b24ub24gRXZlbnRzLlRvdWNoU3RhcnQsIC0+XG5cdFx0XHRcdGJ1dHRvbi5hbmltYXRlXG5cdFx0XHRcdFx0cHJvcGVydGllczooYmFja2dyb3VuZENvbG9yOmNvbG9yKVxuXHRcdFx0XHRcdHRpbWU6LjVcblx0XHRcdFx0YnV0dG9uLmxhYmVsLmFuaW1hdGVcblx0XHRcdFx0XHRwcm9wZXJ0aWVzOihjb2xvcjpcIiNGRkZcIilcblx0XHRcdFx0XHR0aW1lOi41XG5cdFx0XHRidXR0b24ub24gRXZlbnRzLlRvdWNoRW5kLCAtPlxuXHRcdFx0XHRidXR0b24uYW5pbWF0ZVxuXHRcdFx0XHRcdHByb3BlcnRpZXM6KGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCIpXG5cdFx0XHRcdFx0dGltZTouNVxuXHRcdFx0XHRidXR0b24ubGFiZWwuYW5pbWF0ZVxuXHRcdFx0XHRcdHByb3BlcnRpZXM6KGNvbG9yOmNvbG9yKVxuXHRcdFx0XHRcdHRpbWU6LjVcblx0XHRlbHNlXG5cdFx0XHRidXR0b24ucHJvcHMgPSAod2lkdGg6YnV0dG9uLmxhYmVsLndpZHRoLCBoZWlnaHQ6YnV0dG9uLmxhYmVsLmhlaWdodClcblxuXG5cdGlvcy5sYXlvdXQuc2V0XG5cdFx0dGFyZ2V0OmJ1dHRvblxuXG5cdGlvcy5sYXlvdXQuc2V0XG5cdFx0dGFyZ2V0OmJ1dHRvbi5sYWJlbFxuXHRyZXR1cm4gYnV0dG9uXG4iLCJpb3MgPSByZXF1aXJlICdpb3Mta2l0J1xuXG5nZW5DU1MgPSAoY3NzQXJyYXkpIC0+XG4gIGNzc09iaiA9IHt9XG4gIGZvciBwcm9wLGkgaW4gY3NzQXJyYXlcbiAgICBjb2xvbkluZGV4ID0gcHJvcC5pbmRleE9mKFwiOlwiKVxuICAgIGtleSA9IHByb3Auc2xpY2UoMCwgY29sb25JbmRleClcbiAgICB2YWx1ZSA9IHByb3Auc2xpY2UoY29sb25JbmRleCArIDIsIHByb3AubGVuZ3RoIC0gMSlcbiAgICBjc3NPYmpba2V5XSA9IHZhbHVlXG4gIHJldHVybiBjc3NPYmpcblxuZXhwb3J0cy5jb252ZXJ0ID0gKG9iaikgLT5cblxuICBnZXREZXNpZ25lZERldmljZSA9ICh3KSAtPlxuICAgIGRldmljZSA9IHt9XG4gICAgc3dpdGNoIHdcbiAgICAgIHdoZW4gMzIwLCA0ODAsIDY0MCwgOTYwLCAxMjgwXG4gICAgICAgIGRldmljZS5zY2FsZSA9IDJcbiAgICAgICAgZGV2aWNlLmhlaWdodCA9IDU2OFxuICAgICAgICBkZXZpY2Uud2lkdGggPSAzMjBcbiAgICAgICAgZGV2aWNlLm5hbWUgPSAnaXBob25lLTUnXG4gICAgICB3aGVuIDM3NSwgNTYyLjUsIDc1MCwgMTEyNSwgMTUwMFxuICAgICAgICBkZXZpY2Uuc2NhbGUgPSAyXG4gICAgICAgIGRldmljZS5oZWlnaHQgPSA2NjdcbiAgICAgICAgZGV2aWNlLndpZHRoID0gMzc1XG4gICAgICAgIGRldmljZS5uYW1lID0gJ2lwaG9uZS02cydcbiAgICAgIHdoZW4gNDE0LCA2MjEsIDgyOCwgMTI0MiwgMTY1NlxuICAgICAgICBkZXZpY2Uuc2NhbGUgPSAzXG4gICAgICAgIGRldmljZS5oZWlnaHQgPSA3MzZcbiAgICAgICAgZGV2aWNlLndpZHRoID0gNDE0XG4gICAgICAgIGRldmljZS5uYW1lID0gJ2lwaG9uZS02cy1wbHVzJ1xuICAgICAgd2hlbiA3NjgsIDExNTIsIDE1MzYsIDIzMDQsIDMwNzJcbiAgICAgICAgZGV2aWNlLnNjYWxlID0gMlxuICAgICAgICBkZXZpY2UuaGVpZ2h0ID0gMTAyNFxuICAgICAgICBkZXZpY2Uud2lkdGggPSA3NjhcbiAgICAgICAgZGV2aWNlLm5hbWUgPSAnaXBhZCdcbiAgICAgIHdoZW4gMTAyNCwgMTUzNiwgMjA0OCwgMzA3MiwgNDA5NlxuICAgICAgICBkZXZpY2Uuc2NhbGUgPSAyXG4gICAgICAgIGRldmljZS5oZWlnaHQgPSAxMzY2XG4gICAgICAgIGRldmljZS53aWR0aCA9IDEwMjRcbiAgICAgICAgZGV2aWNlLm5hbWUgPSAnaXBhZC1wcm8nXG4gICAgc3dpdGNoIHdcbiAgICAgIHdoZW4gMzIwLCAzNzUsIDQxNCwgNzY4LCAxMDI0XG4gICAgICAgIGRldmljZS5pU2NhbGUgPSAxXG4gICAgICB3aGVuIDQ4MCwgNTYyLjUsIDYyMSwgMTE1MiwgMTUzNlxuICAgICAgICBkZXZpY2UuaVNjYWxlID0gMS41XG4gICAgICB3aGVuIDY0MCwgNzUwLCA4MjgsIDE1MzYsIDIwNDhcbiAgICAgICAgZGV2aWNlLmlTY2FsZSA9IDJcbiAgICAgIHdoZW4gOTYwLCAxMTI1LCAxMjQyLCAyMzA0LCAzMDcyXG4gICAgICAgIGRldmljZS5pU2NhbGUgPSAzXG4gICAgICB3aGVuIDEyODAsIDE1MDAsIDE2NTYsIDMwNzIsIDQwOTZcbiAgICAgICAgZGV2aWNlLmlTY2FsZSA9IDRcbiAgICBkZXZpY2Uub2JqID0gJ2RldmljZSdcbiAgICByZXR1cm4gZGV2aWNlXG5cbiAgIyBHcmFiIGtleXNcbiAgbGF5ZXJLZXlzID0gT2JqZWN0LmtleXMob2JqKVxuXG4gICMgQWRkIGxheWVycyBpbiBvYmogdG8gYXJyYXkgdXNpbmcga2V5c1xuICBsYXllcnMgPSBbXVxuICBhcnRib2FyZHMgPSBbXVxuICBuZXdMYXllcnMgPSB7fVxuICBuZXdBcnRib2FyZHMgPSBbXVxuXG4gIGZvciBrZXkgaW4gbGF5ZXJLZXlzXG4gICAgaWYgb2JqW2tleV0uX2luZm8ua2luZCA9PSAnYXJ0Ym9hcmQnXG4gICAgICBhcnRib2FyZHMucHVzaCBvYmpba2V5XVxuXG4gIGZvciBiIGluIGFydGJvYXJkc1xuXG4gICAgZGV2aWNlID0gZ2V0RGVzaWduZWREZXZpY2UoYi53aWR0aClcblxuICAgIEFydGJvYXJkID0gKGFydGJvYXJkKSAtPlxuICAgICAgYm9hcmQgPSBuZXcgaW9zLlZpZXdcbiAgICAgICAgbmFtZTphcnRib2FyZC5uYW1lXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjpiLmJhY2tncm91bmRDb2xvclxuICAgICAgICBjb25zdHJhaW50czoge3RvcDowLCBib3R0b206MCwgbGVhZGluZzowLCB0cmFpbGluZzowfVxuICAgICAgcmV0dXJuIGJvYXJkXG5cbiAgICAjR2V0IFN0YXRlbWVudHNcbiAgICBnZXRTdHJpbmcgPSAobCkgLT4gcmV0dXJuIGwuX2luZm8ubWV0YWRhdGEuc3RyaW5nXG4gICAgZ2V0Q1NTID0gKGwpIC0+IHJldHVybiBnZW5DU1MobC5faW5mby5tZXRhZGF0YS5jc3MpXG4gICAgZ2V0Q29sb3JTdHJpbmcgPSAobCkgLT4gcmV0dXJuICctJyArIGdldENTUyhsKS5jb2xvciArICcgJyArIGdldFN0cmluZyhsKVxuICAgIGdldEltYWdlID0gKGwpIC0+IHJldHVybiBsLmltYWdlXG4gICAgZ2V0TGF5ZXIgPSAobCkgLT4gcmV0dXJuIGwuY29weSgpXG5cblxuICAgIGZvdW5kID0gKG8sdCkgLT4gaWYgby5pbmRleE9mKHQpICE9IC0xIHRoZW4gcmV0dXJuIHRydWVcblxuICAgIGdlbkNvbnN0cmFpbnRzID0gKGwpIC0+XG4gICAgICBjb25zdHJhaW50cyA9IHt9XG4gICAgICBzID0gZGV2aWNlLmlTY2FsZVxuICAgICAgY1ggPSBkZXZpY2Uud2lkdGgvMlxuICAgICAgY1kgPSBkZXZpY2UuaGVpZ2h0LzJcbiAgICAgIHRZID0gZGV2aWNlLmhlaWdodC80ICogM1xuICAgICAgYlkgPSBkZXZpY2UuaGVpZ2h0LzQgKiAzXG4gICAgICBsWCA9IGRldmljZS53aWR0aC80ICogM1xuICAgICAgdFggPSBkZXZpY2Uud2lkdGgvNCAqIDNcblxuICAgICAgciA9IChuKSAtPiByZXR1cm4gTWF0aC5yb3VuZChuKVxuICAgICAgZiA9IChuKSAtPiByZXR1cm4gTWF0aC5mbG9vcihuKVxuXG4gICAgICBpZiBjWCA9PSBsLm1pZFgvcyB8fCByKGNYKSA9PSByKGwubWlkWC9zKSAgfHwgZihjWCkgPT0gZihsLm1pZFgvcylcbiAgICAgICAgY29uc3RyYWludHMuYWxpZ24gPSAnaG9yaXpvbnRhbCdcblxuICAgICAgaWYgY1kgPT0gbC5taWRZL3MgfHwgcihjWSkgPT0gcihsLm1pZFkvcykgfHwgZihjWSkgPT0gZihsLm1pZFkvcylcbiAgICAgICAgaWYgY29uc3RyYWludHMuYWxpZ24gPT0gJ2hvcml6b250YWwnXG4gICAgICAgICAgY29uc3RyYWludHMuYWxpZ24gPSAnY2VudGVyJ1xuICAgICAgICBlbHNlXG4gICAgICAgICAgY29uc3RyYWludHMuYWxpZ24gPSAndmVydGljYWwnXG5cbiAgICAgIGlmIGwueC9zIDwgbFhcbiAgICAgICAgY29uc3RyYWludHMubGVhZGluZyA9IHIobC54L3MpXG4gICAgICBpZiBsLngvcyA+IHRYXG4gICAgICAgIGNvbnN0cmFpbnRzLnRyYWlsaW5nID0gcihsLnBhcmVudC53aWR0aC9zIC0gbC5tYXhYL3MpXG5cbiAgICAgIGlmIGwueS9zIDwgdFlcbiAgICAgICAgY29uc3RyYWludHMudG9wID0gcihsLnkvcylcbiAgICAgIGlmIGwueS9zID4gYllcbiAgICAgICAgY29uc3RyYWludHMuYm90dG9tID0gcihsLnBhcmVudC5oZWlnaHQvcyAtIGwubWF4WS9zKVxuXG4gICAgICBpZiBsLndpZHRoL3MgPT0gZGV2aWNlLndpZHRoXG4gICAgICAgIGNvbnN0cmFpbnRzLmxlYWRpbmcgPSAwXG4gICAgICAgIGNvbnN0cmFpbnRzLnRyYWlsaW5nID0gMFxuICAgICAgZWxzZVxuICAgICAgICBjb25zdHJhaW50cy53aWR0aCA9IGwud2lkdGgvc1xuXG4gICAgICBpZiBsLmhlaWdodC9zID09IGRldmljZS5oZWlnaHRcbiAgICAgICAgY29uc3RyYWludHMudG9wID0gMFxuICAgICAgICBjb25zdHJhaW50cy5ib3R0b20gPSAwXG4gICAgICBlbHNlXG4gICAgICAgIGNvbnN0cmFpbnRzLmhlaWdodCA9IGwuaGVpZ2h0L3NcblxuICAgICAgcmV0dXJuIGNvbnN0cmFpbnRzXG5cbiAgICBnZW5MYXllciA9IChsLCBwYXJlbnQpIC0+XG4gICAgICBwcm9wcyA9XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjondHJhbnNwYXJlbnQnXG4gICAgICAgIG5hbWU6bC5uYW1lXG4gICAgICAgIGltYWdlOmwuaW1hZ2VcbiAgICAgICAgc3VwZXJMYXllcjogcGFyZW50XG4gICAgICAgIGNvbnN0cmFpbnRzOiBnZW5Db25zdHJhaW50cyhsKVxuXG4gICAgICByZXR1cm4gbmV3IGlvcy5WaWV3IHByb3BzXG5cbiAgICBnZW5BbGVydCA9IChsLCBuUCkgLT5cbiAgICAgIHByb3BzID1cbiAgICAgICAgYWN0aW9uczpbXVxuICAgICAgICBzdXBlckxheWVyOm5QXG4gICAgICBmb3IgYyBpbiBsLmNoaWxkcmVuXG4gICAgICAgIG4gPSBjLm5hbWVcbiAgICAgICAgaWYgZm91bmQobiwgJ3RpdGxlJykgdGhlbiBwcm9wcy50aXRsZSA9IGdldFN0cmluZyhjKVxuICAgICAgICBpZiBmb3VuZChuLCAnbWVzc2FnZScpIHRoZW4gcHJvcHMubWVzc2FnZSA9IGdldFN0cmluZyhjKVxuICAgICAgICBpZiBmb3VuZChuLCAnYWN0aW9uJykgdGhlbiBwcm9wcy5hY3Rpb25zLnVuc2hpZnQgZ2V0Q29sb3JTdHJpbmcoYylcbiAgICAgICAgYy5kZXN0cm95KClcbiAgICAgIHJldHVybiBuZXcgaW9zLkFsZXJ0IHByb3BzXG5cbiAgICBnZW5CYW5uZXIgPSAobCwgblApIC0+XG4gICAgICBwcm9wcyA9IHtzdXBlckxheWVyOm5QfVxuICAgICAgZm9yIGMgaW4gbC5jaGlsZHJlblxuICAgICAgICBuID0gYy5uYW1lXG4gICAgICAgIGlmIGZvdW5kKG4sICdhcHAnKSB0aGVuIHByb3BzLmFwcCA9IGdldFN0cmluZyhjKVxuICAgICAgICBpZiBmb3VuZChuLCAndGl0bGUnKSB0aGVuIHByb3BzLnRpdGxlID0gZ2V0U3RyaW5nKGMpXG4gICAgICAgIGlmIGZvdW5kKG4sICdtZXNzYWdlJykgdGhlbiBwcm9wcy5tZXNzYWdlID0gZ2V0U3RyaW5nKGMpXG4gICAgICAgIGlmIGZvdW5kKG4sICd0aW1lJykgdGhlbiBwcm9wcy50aW1lID0gZ2V0U3RyaW5nKGMpXG4gICAgICAgIGlmIGZvdW5kKG4sICdpY29uJykgdGhlbiBwcm9wcy5pY29uID0gZ2V0TGF5ZXIoYylcbiAgICAgICAgYy5kZXN0cm95KClcbiAgICAgIHJldHVybiBuZXcgaW9zLkJhbm5lciBwcm9wc1xuXG4gICAgZ2VuQnV0dG9uID0gKGwsIG5QKSAtPlxuICAgICAgcHJvcHMgPVxuICAgICAgICBzdXBlckxheWVyOm5QXG4gICAgICAgIGNvbnN0cmFpbnRzOmdlbkNvbnN0cmFpbnRzKGwpXG5cbiAgICAgIGZvciBjIGluIGwuY2hpbGRyZW5cbiAgICAgICAgbiA9IGMubmFtZVxuICAgICAgICBpZiBmb3VuZChuLCAnc21hbGwnKSB0aGVuIHByb3BzLnR5cGUgPSAnc21hbGwnXG4gICAgICAgIGlmIGZvdW5kKG4sICdiaWcnKSB0aGVuIHByb3BzLnR5cGUgPSAnYmlnJ1xuICAgICAgICBpZiBmb3VuZChuLCAnZGFyaycpIHRoZW4gcHJvcHMuc3R5bGUgPSAnZGFyaydcbiAgICAgICAgaWYgZm91bmQobiwgJ2xhYmVsJylcbiAgICAgICAgICBwcm9wcy50ZXh0ID0gZ2V0U3RyaW5nKGMpXG4gICAgICAgICAgcHJvcHMuY29sb3IgPSBnZXRDU1MoYykuY29sb3JcbiAgICAgICAgICBwcm9wcy5mb250U2l6ZSA9IGdldENTUyhjKVsnZm9udC1zaXplJ10ucmVwbGFjZSgncHgnLCAnJylcbiAgICAgICAgYy5kZXN0cm95KClcbiAgICAgIHJldHVybiBuZXcgaW9zLkJ1dHRvbiBwcm9wc1xuXG4gICAgZ2VuRmllbGQgPSAobCwgblApIC0+XG4gICAgICBwcm9wcyA9XG4gICAgICAgIHN1cGVyTGF5ZXI6blBcbiAgICAgICAgY29uc3RyYWludHM6Z2VuQ29uc3RyYWludHMobClcbiAgICAgIGZvciBjIGluIGwuY2hpbGRyZW5cbiAgICAgICAgbiA9IGMubmFtZVxuXG4gICAgICAgIGlmIGZvdW5kKG4sICdwbGFjZWhvbGRlcicpXG4gICAgICAgICAgcHJvcHMucGxhY2Vob2xkZXIgPSBnZXRTdHJpbmcoYylcbiAgICAgICAgYy5kZXN0cm95KClcbiAgICAgIHJldHVybiBuZXcgaW9zLkZpZWxkIHByb3BzXG5cbiAgICBnZW5LZXlib2FyZCA9IChsLCBuUCkgLT5cbiAgICAgIHByb3BzID1cbiAgICAgICAgc3VwZXJMYXllcjpuUFxuXG4gICAgICBmb3IgYyBpbiBsLmNoaWxkcmVuXG4gICAgICAgIG4gPSBjLm5hbWVcblxuICAgICAgICBpZiBmb3VuZChuLCAncmV0dXJuJykgdGhlbiBwcm9wcy5yZXR1cm5UZXh0ID0gZ2V0U3RyaW5nKGMpXG4gICAgICAgIGlmIGZvdW5kKG4sICdkYXJrJykgdGhlbiBwcm9wcy5zdHlsZSA9ICdkYXJrJ1xuICAgICAgICBjLmRlc3Ryb3koKVxuICAgICAgcmV0dXJuIG5ldyBpb3MuS2V5Ym9hcmQgcHJvcHNcblxuICAgIGdlbk5hdkJhciA9IChsLCBuUCkgLT5cbiAgICAgIHByb3BzID1cbiAgICAgICAgc3VwZXJMYXllcjpuUFxuICAgICAgZm9yIGMgaW4gbC5jaGlsZHJlblxuICAgICAgICBuID0gYy5uYW1lXG4gICAgICAgIGlmIGZvdW5kKG4sICd0aXRsZScpXG4gICAgICAgICAgcHJvcHMudGl0bGUgPSBnZXRTdHJpbmcoYylcbiAgICAgICAgICBwcm9wcy50aXRsZUNvbG9yID0gZ2V0Q1NTKGMpLmNvbG9yXG4gICAgICAgIGlmIGZvdW5kKG4sICdyaWdodCcpXG4gICAgICAgICAgcHJvcHMucmlnaHQgPSBnZXRTdHJpbmcoYylcbiAgICAgICAgICBwcm9wcy5jb2xvciA9IGdldENTUyhjKS5jb2xvclxuICAgICAgICBpZiBmb3VuZChuLCAnbGVmdCcpIHRoZW4gcHJvcHMubGVmdCA9IGdldFN0cmluZyhjKVxuICAgICAgICBjLmRlc3Ryb3koKVxuICAgICAgcmV0dXJuIG5ldyBpb3MuTmF2QmFyIHByb3BzXG5cbiAgICBnZW5TaGVldCA9IChsLCBuUCkgLT5cbiAgICAgIHByb3BzID1cbiAgICAgICAgYWN0aW9uczpbXVxuICAgICAgICBzdXBlckxheWVyOiBuUFxuXG4gICAgICBmb3IgYywgaSBpbiBsLmNoaWxkcmVuXG4gICAgICAgIG4gPSBjLm5hbWVcbiAgICAgICAgaWYgZm91bmQobiwgJ2FjdGlvbicpIHRoZW4gcHJvcHMuYWN0aW9ucy5wdXNoIGdldENvbG9yU3RyaW5nKGMpXG4gICAgICAgIGlmIGZvdW5kKG4sICdleGl0JykgdGhlbiBwcm9wcy5leGl0ID0gZ2V0U3RyaW5nKGMpXG4gICAgICAgIGMuZGVzdHJveSgpXG5cbiAgICAgIHJldHVybiBuZXcgaW9zLlNoZWV0IHByb3BzXG5cbiAgICBnZW5TdGF0dXNCYXIgPSAobCwgblApIC0+XG4gICAgICBwcm9wcyA9XG4gICAgICAgIHN1cGVyTGF5ZXI6IG5QXG5cbiAgICAgIGZvciBjIGluIGwuY2hpbGRyZW5cbiAgICAgICAgbiA9IGMubmFtZVxuICAgICAgICBpZiBmb3VuZChuLCAnY2FycmllcicpIHRoZW4gcHJvcHMuY2FycmllciA9IGdldFN0cmluZyhjKVxuICAgICAgICBpZiBmb3VuZChuLCAnYmF0dGVyeScpIHRoZW4gcHJvcHMuYmF0dGVyeSA9IGdldFN0cmluZyhjKS5yZXBsYWNlKCclJywgJycpXG4gICAgICAgIGlmIGZvdW5kKG4sICduZXR3b3JrJykgdGhlbiBwcm9wcy5uZXR3b3JrID0gZ2V0U3RyaW5nKGMpXG4gICAgICAgIGlmIGZvdW5kKG4sICdkYXJrJykgdGhlbiBwcm9wcy5zdHlsZSA9ICdsaWdodCdcbiAgICAgICAgYy5kZXN0cm95KClcbiAgICAgIHJldHVybiBuZXcgaW9zLlN0YXR1c0JhciBwcm9wc1xuXG4gICAgZ2VuVGFiQmFyID0gKGwsIG5QKSAtPlxuICAgICAgcHJvcHMgPVxuICAgICAgICB0YWJzOiBbXVxuICAgICAgICBzdXBlckxheWVyOm5QXG5cbiAgICAgIGZvciBjIGluIGwuY2hpbGRyZW5cbiAgICAgICAgbiA9IGMubmFtZVxuICAgICAgICB0cHJvcHMgPSB7fVxuICAgICAgICBmb3IgdCBpbiBjLmNoaWxkcmVuXG4gICAgICAgICAgdG4gPSB0Lm5hbWVcblxuICAgICAgICAgIGlmIG4gPT0gJ3RhYl9hY3RpdmUnICYmIHRuLmluZGV4T2YoJ2xhYmVsJykgIT0gLTFcbiAgICAgICAgICAgIHByb3BzLmFjdGl2ZUNvbG9yID0gZ2V0Q1NTKHQpLmNvbG9yXG4gICAgICAgICAgaWYgbiAhPSAndGFiX2FjdGl2ZScgJiYgdG4uaW5kZXhPZignbGFiZWwnKSAhPSAtMVxuICAgICAgICAgICAgcHJvcHMuaW5hY3RpdmVDb2xvciA9IGdldENTUyh0KS5jb2xvclxuXG4gICAgICAgICAgaWYgZm91bmQodG4sICdhY3RpdmUnKSAmJiB0bi5pbmRleE9mKCdpbmFjdGl2ZScpID09IC0xIHRoZW4gdHByb3BzLmFjdGl2ZSA9IGdldExheWVyKHQpXG4gICAgICAgICAgaWYgZm91bmQodG4sICdpbmFjdGl2ZScpIHRoZW4gdHByb3BzLmluYWN0aXZlID0gZ2V0TGF5ZXIodClcbiAgICAgICAgICBpZiBmb3VuZCh0biwgJ2xhYmVsJykgdGhlbiB0cHJvcHMubGFiZWwgPSBnZXRTdHJpbmcodClcblxuICAgICAgICAgIHQuZGVzdHJveSgpXG4gICAgICAgIHByb3BzLnRhYnMudW5zaGlmdCBuZXcgaW9zLlRhYiB0cHJvcHNcblxuXG4gICAgICAgIGMuZGVzdHJveSgpXG5cbiAgICAgIHJldHVybiBuZXcgaW9zLlRhYkJhciBwcm9wc1xuXG4gICAgZ2VuVGV4dCA9IChsLCBuUCkgLT5cbiAgICAgIHByb3BzID1cbiAgICAgICAgc3VwZXJMYXllcjpuUFxuICAgICAgICB0ZXh0OmdldFN0cmluZyhsKVxuICAgICAgICBjb25zdHJhaW50czpnZW5Db25zdHJhaW50cyhsKVxuICAgICAgY3NzID0gZ2V0Q1NTKGwpXG4gICAgICBrZXlzID0gT2JqZWN0LmtleXMoZ2V0Q1NTKGwpKVxuICAgICAgZm9yIGsgaW4ga2V5c1xuICAgICAgICBpZiBmb3VuZChrLCAnZm9udC1mYW1pbHknKSB0aGVuIHByb3BzLmZvbnRGYW1pbHkgPSBjc3Nba11cbiAgICAgICAgaWYgZm91bmQoaywgJ29wYWNpdHknKSB0aGVuIHByb3BzLm9wYWNpdHkgPSBOdW1iZXIoY3NzW2tdKVxuICAgICAgICBpZiBmb3VuZChrLCAnY29sb3InKSB0aGVuIHByb3BzLmNvbG9yID0gY3NzW2tdXG4gICAgICAgIGlmIGZvdW5kKGssICdmb250LXNpemUnKSB0aGVuIHByb3BzLmZvbnRTaXplID0gY3NzW2tdLnJlcGxhY2UoJ3B4JywgJycpXG4gICAgICAgIGlmIGZvdW5kKGssICdsZXR0ZXItc3BhY2luZycpIHRoZW4gcHJvcHMubGV0dGVyU3BhY2luZyA9IGNzc1trXVxuICAgICAgICBpZiBmb3VuZChrLCAnbGluZS1oZWlnaHQnKSB0aGVuIHByb3BzLmxpbmVIZWlnaHQgPSBjc3Nba10ucmVwbGFjZSgncHgnLCAnJylcbiAgICAgIHJldHVybiBuZXcgaW9zLlRleHQgcHJvcHNcblxuICAgIGNoaWxkcmVuID0gKHAsIG5QKSAtPlxuXG4gICAgICBmb3IgYyBpbiBwLmNoaWxkcmVuXG4gICAgICAgIG4gPSBjLm5hbWVcbiAgICAgICAgbmV3TGF5ZXIgPSAwXG4gICAgICAgIGlmIGMubmFtZVswXSA9PSAnXydcbiAgICAgICAgICBpZiBmb3VuZChuLCAnX0FsZXJ0JykgdGhlbiAgbmV3TGF5ZXIgPSBnZW5BbGVydChjLCBuUClcbiAgICAgICAgICBpZiBmb3VuZChuLCdfQmFubmVyJykgdGhlbiBuZXdMYXllciA9IGdlbkJhbm5lcihjLCBuUClcbiAgICAgICAgICBpZiBmb3VuZChuLCAnX0J1dHRvbicpIHRoZW4gbmV3TGF5ZXIgPSBnZW5CdXR0b24oYywgblApXG4gICAgICAgICAgaWYgZm91bmQobiwgJ19GaWVsZCcpIHRoZW4gbmV3TGF5ZXIgPSBnZW5GaWVsZChjLCBuUClcbiAgICAgICAgICBpZiBmb3VuZChuLCAnX0tleWJvYXJkJykgdGhlbiBuZXdMYXllciA9IGdlbktleWJvYXJkKGMsIG5QKVxuICAgICAgICAgIGlmIGZvdW5kKG4sJ19OYXZCYXInKSB0aGVuIG5ld0xheWVyID0gZ2VuTmF2QmFyKGMsIG5QKVxuICAgICAgICAgIGlmIGZvdW5kKG4sICdfU2hlZXQnKSB0aGVuIG5ld0xheWVyID0gZ2VuU2hlZXQoYywgblApXG4gICAgICAgICAgaWYgZm91bmQobiwgJ19UYWJCYXInKSB0aGVuIG5ld0xheWVyID0gZ2VuVGFiQmFyKGMsIG5QKVxuICAgICAgICAgIGlmIGZvdW5kKG4sICdfU3RhdHVzQmFyJykgdGhlbiBuZXdMYXllciA9IG5ldyBnZW5TdGF0dXNCYXIoYywgblApXG4gICAgICAgICAgaWYgZm91bmQobiwgJ19UZXh0JykgdGhlbiBuZXdMYXllciA9IGdlblRleHQoYywgblApXG4gICAgICAgICAgaWYgbmV3TGF5ZXIgPT0gdW5kZWZpbmVkIHRoZW4gbmV3TGF5ZXIgPSBnZW5MYXllcihjLCBuUClcbiAgICAgICAgZWxzZVxuICAgICAgICAgIG5ld0xheWVyID0gZ2VuTGF5ZXIoYywgblApXG5cbiAgICAgICAgbmV3TGF5ZXJzW25dID0gbmV3TGF5ZXJcblxuICAgICAgICBpZiBjLmNoaWxkcmVuXG4gICAgICAgICAgY2hpbGRyZW4oYywgbmV3TGF5ZXIpXG5cbiAgICAgICAgYy5kZXN0cm95KClcblxuICAgIGlvcy5sW2IubmFtZV0gPSBuZXcgQXJ0Ym9hcmQgYlxuXG4gICAgY2hpbGRyZW4oYiwgaW9zLmxbYi5uYW1lXSlcblxuICAgIGIuZGVzdHJveSgpXG5cbiAgICBuZXdBcnRib2FyZHMucHVzaCBpb3MubFtiLm5hbWVdXG4gICAgbmV3TGF5ZXJzW2IubmFtZV0gPSBpb3MubFtiLm5hbWVdXG5cbiAgcmV0dXJuIG5ld0xheWVyc1xuIiwiaW9zID0gcmVxdWlyZSAnaW9zLWtpdCdcblxuZXhwb3J0cy5kZWZhdWx0cyA9XG5cdG5hbWU6J2ZpZWxkJ1xuXHRhY3RpdmU6ZmFsc2Vcblx0a2V5Ym9hcmQ6dHJ1ZVxuXHRwbGFjZWhvbGRlcjpcIkVudGVyIHRleHRcIlxuXHRwbGFjZWhvbGRlckNvbG9yOlwiIzk5OVwiXG5cdHN1cGVyTGF5ZXI6dW5kZWZpbmVkXG5cdGJhY2tncm91bmRDb2xvcjpcIndoaXRlXCJcblx0Ym9yZGVyQ29sb3I6XCIjQ0NDQ0NDXCJcblx0Ym9yZGVyUmFkaXVzOmlvcy5weCg1KVxuXHRib3JkZXJXaWR0aDppb3MucHgoMSlcblx0aGVpZ2h0Omlvcy5weCgzMClcblx0d2lkdGg6aW9zLnB4KDk3KVxuXHRmb250U2l6ZToxN1xuXHRjb2xvcjonYmxhY2snXG5cdHRleHRDb25zdHJhaW50czpcblx0XHRsZWFkaW5nOjRcblx0XHRhbGlnbjpcInZlcnRpY2FsXCJcblx0Y29uc3RyYWludHM6XG5cdFx0aGVpZ2h0OjMwXG5cdFx0d2lkdGg6OTdcblx0XHRhbGlnbjpcImNlbnRlclwiXG5cblxuZXhwb3J0cy5kZWZhdWx0cy5wcm9wcyA9IE9iamVjdC5rZXlzKGV4cG9ydHMuZGVmYXVsdHMpXG5cbmV4cG9ydHMuY3JlYXRlID0gKGFycmF5KSAtPlxuXHRzZXR1cCA9IGlvcy51dGlscy5zZXR1cENvbXBvbmVudChhcnJheSwgZXhwb3J0cy5kZWZhdWx0cylcblxuXHRmaWVsZCA9IG5ldyBpb3MuVmlld1xuXHRcdG5hbWU6c2V0dXAubmFtZVxuXHRcdGNvbnN0cmFpbnRzOnNldHVwLmNvbnN0cmFpbnRzXG5cdFx0YmFja2dyb3VuZENvbG9yOnNldHVwLmJhY2tncm91bmRDb2xvclxuXHRcdGJvcmRlckNvbG9yOnNldHVwLmJvcmRlckNvbG9yXG5cdFx0Ym9yZGVyUmFkaXVzOnNldHVwLmJvcmRlclJhZGl1c1xuXHRcdGJvcmRlcldpZHRoOnNldHVwLmJvcmRlcldpZHRoXG5cdFx0aGVpZ2h0OnNldHVwLmhlaWdodFxuXHRcdHdpZHRoOnNldHVwLndpZHRoXG5cdFx0Y2xpcDp0cnVlXG5cdFx0c3VwZXJMYXllcjpzZXR1cC5zdXBlckxheWVyXG5cblx0ZmllbGQudGV4dCA9IG5ldyBpb3MuVGV4dFxuXHRcdHN1cGVyTGF5ZXI6ZmllbGRcblx0XHRuYW1lOlwiLnRleHRcIlxuXHRcdGNvbnN0cmFpbnRzOnNldHVwLnRleHRDb25zdHJhaW50c1xuXHRcdHRleHQ6Jydcblx0XHRmb250U2l6ZToxN1xuXHRcdGNvbG9yOnNldHVwLmNvbG9yXG5cblx0ZmllbGQudGV4dC5wbGFjZWhvbGRlciA9IG5ldyBpb3MuVGV4dFxuXHRcdHN1cGVyTGF5ZXI6ZmllbGRcblx0XHRuYW1lOlwiLnBsYWNlaG9sZGVyXCJcblx0XHRjb25zdHJhaW50czpzZXR1cC50ZXh0Q29uc3RyYWludHNcblx0XHR0ZXh0OnNldHVwLnBsYWNlaG9sZGVyXG5cdFx0Zm9udFNpemU6MTdcblx0XHRjb2xvcjpzZXR1cC5wbGFjZWhvbGRlckNvbG9yXG5cblx0ZmllbGQuYWN0aXZlID0gc2V0dXAuYWN0aXZlXG5cdGZpZWxkLnR5cGUgPSAnZmllbGQnXG5cblx0ZmllbGQub24gRXZlbnRzLlRvdWNoRW5kLCAtPlxuXG5cdFx0aWYgZmllbGQuYWN0aXZlICE9IHRydWVcblx0XHRcdGZpZWxkLmFjdGl2ZSA9IHRydWVcblxuXHRcdFx0aWYgc2V0dXAua2V5Ym9hcmQgPT0gdHJ1ZSAmJiBmaWVsZC5rZXlib2FyZCA9PSB1bmRlZmluZWRcblx0XHRcdFx0ZmllbGQua2V5Ym9hcmQgPSBuZXcgaW9zLktleWJvYXJkXG5cdFx0XHRcdFx0b3V0cHV0OmZpZWxkLnRleHRcblx0XHRcdFx0XHRoaWRkZW46dHJ1ZVxuXG5cdFx0XHRpZiB0eXBlb2Ygc2V0dXAua2V5Ym9hcmQgPT0gJ29iamVjdCdcblx0XHRcdFx0ZmllbGQuaW5wdXQoc2V0dXAua2V5Ym9hcmQpXG5cdFx0XHRcdGZpZWxkLmtleWJvYXJkID0gc2V0dXAua2V5Ym9hcmRcblxuXHRcdFx0ZmllbGQua2V5Ym9hcmQuY2FsbCgpXG5cdFx0XHRmaWVsZC50ZXh0LmN1cnNvciA9IG5ldyBpb3MuVmlld1xuXHRcdFx0XHRzdXBlckxheWVyOmZpZWxkXG5cdFx0XHRcdG5hbWU6XCJjdXJzb3JcIlxuXHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6aW9zLmNvbG9yKFwiYmx1ZVwiKVxuXHRcdFx0XHRjb25zdHJhaW50czpcblx0XHRcdFx0XHR3aWR0aDoyXG5cdFx0XHRcdFx0aGVpZ2h0OnNldHVwLmZvbnRTaXplICsgNlxuXHRcdFx0XHRcdGxlYWRpbmc6NFxuXHRcdFx0XHRcdGFsaWduOlwidmVydGljYWxcIlxuXG5cdFx0XHRpZiBmaWVsZC50ZXh0Lmh0bWwgIT0gc2V0dXAucGxhY2Vob2xkZXJcblx0XHRcdFx0ZmllbGQudGV4dC5jdXJzb3IuY29uc3RyYWludHMubGVhZGluZyA9IGZpZWxkLnRleHRcblx0XHRcdFx0aW9zLmxheW91dC5zZXQoZmllbGQudGV4dC5jdXJzb3IpXG5cdFx0XHRmaWVsZC5saXN0ZW5pbmdUb0ZpZWxkID0gVXRpbHMuaW50ZXJ2YWwgLjEsIC0+XG5cdFx0XHRcdGlmIGZpZWxkLmFjdGl2ZSA9PSBmYWxzZVxuXHRcdFx0XHRcdGNsZWFySW50ZXJ2YWwoZmllbGQuaW50ZXJ2YWwpXG5cdFx0XHRcdFx0Y2xlYXJJbnRlcnZhbChmaWVsZC5saXN0ZW5pbmdUb0ZpZWxkKVxuXHRcdFx0XHRcdGZpZWxkLnRleHQuY3Vyc29yLmRlc3Ryb3koKVxuXG5cblx0XHRcdGZpZWxkLmludGVydmFsID0gVXRpbHMuaW50ZXJ2YWwgLjYsIC0+XG5cdFx0XHRcdGlmIGZpZWxkLmFjdGl2ZVxuXHRcdFx0XHRcdGlmIGZpZWxkLnRleHQuY3Vyc29yLm9wYWNpdHlcblx0XHRcdFx0XHRcdGZpZWxkLnRleHQuY3Vyc29yLmFuaW1hdGVcblx0XHRcdFx0XHRcdFx0cHJvcGVydGllczoob3BhY2l0eTowKVxuXHRcdFx0XHRcdFx0XHR0aW1lOi41XG5cdFx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdFx0ZmllbGQudGV4dC5jdXJzb3IuYW5pbWF0ZVxuXHRcdFx0XHRcdFx0XHRwcm9wZXJ0aWVzOihvcGFjaXR5OjEpXG5cdFx0XHRcdFx0XHRcdHRpbWU6LjVcblxuXG5cdFx0XHRmaWVsZC50ZXh0Lm9uIFwiY2hhbmdlOmh0bWxcIiwgLT5cblx0XHRcdFx0QC5jdXJzb3IuY29uc3RyYWludHMubGVhZGluZyA9IEBcblx0XHRcdFx0aWYgQC5odG1sID09ICcnXG5cdFx0XHRcdFx0QC5wbGFjZWhvbGRlci52aXNpYmxlID0gdHJ1ZVxuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0QC5wbGFjZWhvbGRlci52aXNpYmxlID0gZmFsc2Vcblx0XHRcdFx0aWYgQC5odG1sLmluZGV4T2YoQC5wbGFjZWhvbGRlcikgIT0gLTFcblx0XHRcdFx0XHRALmh0bWwgPSBALmh0bWwucmVwbGFjZShALnBsYWNlaG9sZGVyLCAnJylcblxuXHRcdFx0XHRpb3MubGF5b3V0LnNldChALmN1cnNvcilcblxuXHRmaWVsZC5pbnB1dCA9IChrZXlib2FyZCkgLT5cblx0XHRrZXlib2FyZC5vdXRwdXQoZmllbGQpXG5cblx0cmV0dXJuIGZpZWxkXG4iLCJpb3MgPSByZXF1aXJlICdpb3Mta2l0J1xuXG5cbmV4cG9ydHMuZGVmYXVsdHMgPVxuICBzdHlsZTpcImxpZ2h0XCJcbiAgc2hpZnQ6dHJ1ZVxuICBvdXRwdXQ6dW5kZWZpbmVkXG4gIHJldHVyblRleHQ6XCJyZXR1cm5cIlxuICBzdGF0ZTpcImxldHRlcnNcIlxuICBoaWRkZW46ZmFsc2VcbiAgcmV0dXJuQ29sb3I6XCJibHVlXCJcbiAgc3VwZXJMYXllcjp1bmRlZmluZWRcblxuXG4jUmVzcG9uc2FiaWxlIGZvciBrZXlib2FyZCBkaW1lbnNpb25zXG5kZXZpY2UgPVxuICBcImlwaG9uZS01XCI6XG4gICAgcG9wVXBDaGFyOjQwXG4gICAgcG9wVXBUb3A6NFxuICAgIGhlaWdodDoyMTVcbiAgICBsaW5lSGVpZ2h0OjM2XG4gICAgbGV0dGVyS2V5OlxuICAgICAga2V5VG9wOjZcbiAgICAgIGhlaWdodDozOVxuICAgICAgd2lkdGg6MjYuNVxuICAgICAgYm9yZGVyUmFkaXVzOjVcbiAgICAgIGZvbnRTaXplOjIyLjVcbiAgICBzcGVjaWFsS2V5V2lkdGg6MzguNVxuICAgIHNwZWNpYWxLZXlIZWlnaHQ6MzguNVxuICAgIHNwYWNlOjVcbiAgICByb3cxOlxuICAgICAgbGVhZGluZzowXG4gICAgICB0b3A6MFxuICAgIHJvdzI6XG4gICAgICBsZWFkaW5nOjE5XG4gICAgICB0b3A6MTZcbiAgICByb3czOlxuICAgICAgdG9wOjE2XG4gICAgICBsZWFkaW5nOjUxXG4gICAgYXJlYTpcbiAgICAgIHRvcDoxMVxuICAgICAgbGVhZGluZzozXG4gICAgICB0cmFpbGluZzozXG4gICAgICBib3R0b206NFxuICAgIHJldHVybldpZHRoOjc1XG4gICAgcG9wVXBPZmZzZXQ6XG4gICAgICB4OjRcbiAgICAgIHk6MzBcbiAgXCJpcGhvbmUtNnNcIjpcbiAgICBwb3BVcENoYXI6NDBcbiAgICBwb3BVcFRvcDo2XG4gICAgaGVpZ2h0OjIxOFxuICAgIGxpbmVIZWlnaHQ6NDBcbiAgICBsZXR0ZXJLZXk6XG4gICAgICBrZXlUb3A6MTBcbiAgICAgIGhlaWdodDo0MlxuICAgICAgd2lkdGg6MzEuNVxuICAgICAgYm9yZGVyUmFkaXVzOjVcbiAgICAgIGZvbnRTaXplOjIzXG4gICAgICB0b3A6MTBcbiAgICBzcGVjaWFsS2V5V2lkdGg6NDJcbiAgICBzcGVjaWFsS2V5SGVpZ2h0OjQyXG4gICAgc3BhY2U6NlxuICAgIHJvdzE6XG4gICAgICBsZWFkaW5nOjBcbiAgICAgIHRvcDowXG4gICAgcm93MjpcbiAgICAgIGxlYWRpbmc6MjJcbiAgICAgIHRvcDoxMlxuICAgIHJvdzM6XG4gICAgICB0b3A6MTJcbiAgICAgIGxlYWRpbmc6NTlcbiAgICBhcmVhOlxuICAgICAgdG9wOjEyXG4gICAgICBsZWFkaW5nOjNcbiAgICAgIHRyYWlsaW5nOjNcbiAgICAgIGJvdHRvbTo0XG4gICAgcmV0dXJuV2lkdGg6ODdcbiAgICBwb3BVcE9mZnNldDpcbiAgICAgIHg6NVxuICAgICAgeTozMlxuICBcImlwaG9uZS02cy1wbHVzXCI6XG4gICAgcG9wVXBDaGFyOjM4XG4gICAgcG9wVXBUb3A6NlxuICAgIGhlaWdodDoyMjZcbiAgICBsaW5lSGVpZ2h0OjQyXG4gICAgbGV0dGVyS2V5OlxuICAgICAga2V5VG9wOjEyXG4gICAgICBoZWlnaHQ6NDVcbiAgICAgIHdpZHRoOjM2XG4gICAgICBib3JkZXJSYWRpdXM6NVxuICAgICAgZm9udFNpemU6MjRcbiAgICAgIHRvcDoxMFxuICAgIHNwZWNpYWxLZXlXaWR0aDo0NVxuICAgIHNwZWNpYWxLZXlIZWlnaHQ6NDVcbiAgICBzcGFjZTo1XG4gICAgcm93MTpcbiAgICAgIGxlYWRpbmc6MFxuICAgICAgdG9wOjBcbiAgICByb3cyOlxuICAgICAgbGVhZGluZzoyMFxuICAgICAgdG9wOjExXG4gICAgcm93MzpcbiAgICAgIHRvcDoxMVxuICAgICAgbGVhZGluZzo2M1xuICAgIGFyZWE6XG4gICAgICB0b3A6OFxuICAgICAgbGVhZGluZzo0XG4gICAgICB0cmFpbGluZzo0XG4gICAgICBib3R0b206NVxuICAgIHJldHVybldpZHRoOjk3XG4gICAgcG9wVXBPZmZzZXQ6XG4gICAgICB4OjEwXG4gICAgICB5OjM4XG4gIFwiaXBhZFwiOlxuICAgIGhlaWdodDozMTNcbiAgICBsaW5lSGVpZ2h0OjU1XG4gICAgbGV0dGVyS2V5OlxuICAgICAgaGVpZ2h0OjU1XG4gICAgICB3aWR0aDo1NlxuICAgICAgYm9yZGVyUmFkaXVzOjVcbiAgICAgIGZvbnRTaXplOjIzXG4gICAgc3BlY2lhbEtleVdpZHRoOjU2XG4gICAgc3BlY2lhbEtleUhlaWdodDo1NVxuICAgIHNwYWNlOjEyXG4gICAgcmV0dXJuV2lkdGg6MTA2XG4gICAgcm93MTpcbiAgICAgIGxlYWRpbmc6MFxuICAgICAgdG9wOjBcbiAgICByb3cyOlxuICAgICAgbGVhZGluZzozMFxuICAgICAgdG9wOjlcbiAgICByb3czOlxuICAgICAgbGVhZGluZzo2OFxuICAgICAgdG9wOjlcbiAgICBhcmVhOlxuICAgICAgdG9wOjU1XG4gICAgICBsZWFkaW5nOjZcbiAgICAgIHRyYWlsaW5nOjZcbiAgICAgIGJvdHRvbTo4XG5cbiAgXCJpcGFkLXByb1wiOlxuICAgIGhlaWdodDozNzhcbiAgICBsaW5lSGVpZ2h0OjYxXG4gICAgbGV0dGVyS2V5OlxuICAgICAgaGVpZ2h0OjYxXG4gICAgICB3aWR0aDo2M1xuICAgICAgYm9yZGVyUmFkaXVzOjVcbiAgICAgIGZvbnRTaXplOjIzXG4gICAgc3BhY2U6N1xuICAgIHJldHVybldpZHRoOjEyMFxuICAgIHNwZWNpYWxLZXlIZWlnaHQ6NjFcbiAgICBzcGVjaWFsS2V5V2lkdGg6OTNcbiAgICByb3cxOlxuICAgICAgbGVhZGluZzoxMTFcbiAgICAgIHRvcDo1M1xuICAgIHJvdzI6XG4gICAgICBsZWFkaW5nOjEyNlxuICAgICAgdG9wOjdcbiAgICByb3czOlxuICAgICAgbGVhZGluZzoxNjFcbiAgICAgIHRvcDo3XG4gICAgYXJlYTpcbiAgICAgIHRvcDo1NlxuICAgICAgbGVhZGluZzo0XG4gICAgICB0cmFpbGluZzo0XG4gICAgICBib3R0b206NFxuXG5cblxuIyBNYXAgb2Yga2V5IGNvZGVzXG4jIENvZGVzIGZvciBhbGwga2V5c1xuY29kZU1hcCA9IHsgODonZGVsZXRlJywgOTondGFiJywgMTM6J3JldHVybicsIDE2OidzaGlmdCcsIDIwOidjYXBzJywgMzI6J3NwYWNlJywgMjc6XCJkaXNtaXNzXCIsIDMzOlwiIVwiLCAzNDpcIlxcXCJcIiwgMzU6XCIjXCIsIDM2OlwiJFwiLCAzNzpcIiVcIiwgMzg6XCImXCIsIDM5OlwiXFwnXCIsIDQwOlwiKFwiLCA0MTpcIilcIiwgNDI6XCIqXCIsIDQzOlwiK1wiLCA0NDpcIixcIiwgNDU6XCItXCIsIDQ3OlwiL1wiLCA0NjpcIi5cIiwgNDg6XCIwXCIsIDQ5OlwiIVwiLCA1MDpcIkBcIiwgNTE6XCIjXCIsIDUyOlwiJFwiLCA1MzpcIiVcIiwgNTQ6XCJeXCIsIDU1OlwiJlwiLCA1NjpcIipcIiwgNTc6XCIoXCIsIDQ4OlwiKVwiLCA1OTpcIl9cIiwgNjA6XCI8XCIsIDYxOlwiPVwiLCA2MjpcIj5cIiwgNjM6XCI/XCIsIDY0OlwiQFwiLCA2NTpcIkFcIiwgNjY6XCJCXCIsIDY3OlwiQ1wiLCA2ODpcIkRcIiwgNjk6XCJFXCIsIDcwOlwiRlwiLCA3MTpcIkdcIiwgNzI6XCJIXCIsIDczOlwiSVwiLCA3NDpcIkpcIiwgNzU6XCJLXCIsIDc2OlwiTFwiLCA3NzpcIk1cIiwgNzg6XCJOXCIsIDc5OlwiT1wiLCA4MDpcIlBcIiwgODE6XCJRXCIsIDgyOlwiUlwiLCA4MzpcIlNcIiwgODQ6XCJUXCIsIDg1OlwiVVwiLCA4NjpcIlZcIiwgODc6XCJXXCIsIDg4OlwiWFwiLCA4OTpcIllcIiwgOTA6XCJaXCIsIDkxOidjbWQnLCAyMTk6XCJbXCIsIDkyOlwiXFxcXFwiLCAyMjE6XCJdXCIsIDk0OlwiXlwiLCA5NTpcIl9cIiwgOTY6XCJgXCIsIDk3OlwiYVwiLCA5ODpcImJcIiwgOTk6XCJjXCIsIDEwMDpcImRcIiwgMTAxOlwiZVwiLCAxMDI6XCJmXCIsIDEwMzpcImdcIiwgMTA0OlwiaFwiLCAxMDU6XCJpXCIsIDEwNjpcImpcIiwgMTA3Olwia1wiLCAxMDg6XCJsXCIsIDEwOTpcIm1cIiwgMTEwOlwiblwiLCAxMTE6XCJvXCIsIDExMjpcInBcIiwgMTEzOlwicVwiLCAxMTQ6XCJyXCIsIDExNTpcInNcIiwgMTE2OlwidFwiLCAxMTc6XCJ1XCIsIDExODpcInZcIiwgMTE5Olwid1wiLCAxMjA6XCJ4XCIsIDEyMTpcInlcIiwgMTIyOlwielwiLCAxMjM6XCJ7XCIsIDEyNDpcInxcIiwgMTI1OlwifVwiLCAxMjY6XCJ+XCIsIDE4NjpcIjpcIiwgMTg3OlwiK1wiLCAxODg6XCI8XCIsIDE5MDpcIj5cIiwgMTkxOlwiP1wiLCAxODk6XCJfXCIsIDE5MjpcIn5cIiwgMjE5Olwie1wiLCAyMjA6XCJcXHxcIiwgMjIxOlwifVwiLCAyMjI6XCImcmRxdW87XCJ9XG5hcnJheU9mQ29kZXMgPSBPYmplY3Qua2V5cyhjb2RlTWFwKVxubGV0dGVycyA9IFtcInFcIiwgXCJ3XCIsIFwiZVwiLCBcInJcIiwgXCJ0XCIsIFwieVwiLCBcInVcIiwgXCJpXCIsIFwib1wiLCBcInBcIiwgXCJhXCIsIFwic1wiLCBcImRcIiwgXCJmXCIsIFwiZ1wiLCBcImhcIiwgXCJqXCIsIFwia1wiLCBcImxcIiwgXCJ6XCIsIFwieFwiLCBcImNcIiwgXCJ2XCIsICBcImJcIiwgXCJuXCIsIFwibVwiXVxubnVtYmVycyA9IFtcIjFcIiwgXCIyXCIsIFwiM1wiLCBcIjRcIiwgXCI1XCIsIFwiNlwiLCBcIjdcIiwgXCI4XCIsIFwiOVwiLCBcIjBcIiwgXCItXCIsIFwiL1wiLCBcIjpcIiwgXCI7XCIsIFwiKFwiLCBcIilcIiwgXCIkXCIsIFwiJlwiLCBcIkBcIiwgXCJcXFwiXCIsIFwiLlwiLCBcIixcIiwgXCI/XCIsIFwiIVwiLCBcIuKAslwiXVxuc3ltYm9scyA9IFtcIltcIiwgXCJdXCIsIFwie1wiLCBcIn1cIiwgXCIjXCIsIFwiJVwiLCBcIl5cIiwgXCIqXCIsIFwiK1wiLCBcIj1cIiwgXCJfXCIsIFwiXFxcXFwiLCBcInxcIiwgXCJ+XCIsIFwiPFwiLCBcIj5cIiwgXCLigqxcIiwgXCLCo1wiLCBcIsKlXCIsIFwi4oCiXCJdXG5cbmV4cG9ydHMuZGVmYXVsdHMucHJvcHMgPSBPYmplY3Qua2V5cyhleHBvcnRzLmRlZmF1bHRzKVxuXG5leHBvcnRzLmNyZWF0ZSA9IChvYmopIC0+XG4gIHNldHVwID0gaW9zLnV0aWxzLnNldHVwQ29tcG9uZW50KG9iaiwgZXhwb3J0cy5kZWZhdWx0cylcbiAgI1Jlc3BvbnNhYmlsZSBmb3IgY29sb3JzXG4gIHN0eWxlID1cbiAgICBsaWdodDpcbiAgICAgIGJhY2tncm91bmRDb2xvcjpcIiNEMUQ1REFcIlxuICAgICAgY29sb3I6XCIjMDAwXCJcbiAgICAgIHNwZWNpYWxLZXlCRzpcIiNBQ0IzQkRcIlxuICAgICAga2V5Qkc6XCIjRjdGN0Y3XCJcbiAgICAgIHNoYWRvd1k6IGlvcy5weCgxKVxuICAgICAgc2hhZG93Q29sb3I6XCIjODk4QjhGXCJcbiAgICAgIHJldHVybkJHOmlvcy5jb2xvcihzZXR1cC5yZXR1cm5Db2xvcilcbiAgICBkYXJrOlxuICAgICAgYmFja2dyb3VuZENvbG9yOlwicmdiYSgwLDAsMCwuNylcIlxuICAgICAgY29sb3I6XCIjRkZGXCJcbiAgICAgIHNwZWNpYWxLZXlCRzpcInJnYmEoNjcsNjcsNjcsLjgpXCJcbiAgICAgIGtleUJHOlwicmdiYSgxMDUsMTA1LDEwNSwuOClcIlxuICAgICAgc2hhZG93WTogaW9zLnB4KDEpXG4gICAgICBzaGFkb3dDb2xvcjpcInJnYmEoMCwwLDAsLjQpXCJcbiAgICAgIHJldHVybkJHOmlvcy5jb2xvcihzZXR1cC5yZXR1cm5Db2xvcilcblxuICBzcGVjcyA9IGRldmljZVtpb3MuZGV2aWNlLm5hbWVdXG4gIGNvbG9ycyA9IHN0eWxlW3NldHVwLnN0eWxlXVxuXG4gIGRldmljZVxuICBib2FyZCA9IG5ldyBpb3MuVmlld1xuICAgIG5hbWU6XCJLZXlib2FyZFwiXG4gICAgc3VwZXJMYXllcjpzZXR1cC5zdXBlckxheWVyXG4gICAgYmFja2dyb3VuZENvbG9yOnN0eWxlW3NldHVwLnN0eWxlXS5iYWNrZ3JvdW5kQ29sb3JcbiAgICB5Omlvcy5kZXZpY2UuaGVpZ2h0XG4gICAgY29uc3RyYWludHM6XG4gICAgICBsZWFkaW5nOjBcbiAgICAgIHRyYWlsaW5nOjBcbiAgICAgIGJvdHRvbTotMSAqIHNwZWNzLmhlaWdodFxuICAgICAgaGVpZ2h0OnNwZWNzLmhlaWdodFxuICBpb3MudXRpbHMuYmdCbHVyKGJvYXJkKVxuICBib2FyZC5vdXRwdXQgPSAob2JqKSAtPlxuICAgIGlmIGJvYXJkLnRhcmdldFxuICAgICAgaWYgYm9hcmQudGFyZ2V0LnR5cGUgPT0gJ2ZpZWxkJ1xuICAgICAgICBib2FyZC50YXJnZXQuYWN0aXZlID0gZmFsc2VcblxuICAgIGJvYXJkLnRhcmdldCA9IG9ialxuICAgIGlmIGJvYXJkLnRhcmdldFxuICAgICAgaWYgYm9hcmQudGFyZ2V0LnR5cGUgPT0gJ2ZpZWxkJ1xuICAgICAgICBib2FyZC50YXJnZXQuYWN0aXZlID0gdHJ1ZVxuICBib2FyZC5oaWRkZW4gPSBzZXR1cC5oaWRkZW5cblxuICBpZiBib2FyZC5oaWRkZW4gPT0gZmFsc2VcbiAgICBib2FyZC5jb25zdHJhaW50cy5ib3R0b20gPSAwXG4gICAgaW9zLmxheW91dC5zZXQoYm9hcmQpXG5cbiAgYm9hcmQuY2FsbCA9ICgpIC0+XG4gICAgYm9hcmQueSA9IGlvcy5kZXZpY2UuaGVpZ2h0XG4gICAgYm9hcmQuY29uc3RyYWludHMuYm90dG9tID0gMFxuICAgIGlmIGJvYXJkLmhpZGRlblxuICAgICAgYm9hcmQuaGlkZGVuID0gZmFsc2VcbiAgICAgIGlvcy5sYXlvdXQuYW5pbWF0ZVxuICAgICAgICB0YXJnZXQ6Ym9hcmRcbiAgICAgICAgdGltZTouNVxuICAgICAgICBjdXJ2ZTonZWFzZS1pbi1vdXQnXG5cbiAgICBib2FyZC5icmluZ1RvRnJvbnQoKVxuICBib2FyZC5kaXNtaXNzID0gKCkgLT5cbiAgICBib2FyZC5jb25zdHJhaW50cy5ib3R0b20gPSAtMSAqIGlvcy5wdChib2FyZC5oZWlnaHQpXG4gICAgYm9hcmQuaGlkZGVuID0gdHJ1ZVxuICAgIGJvYXJkLnRhcmdldC5hY3RpdmUgPSBmYWxzZVxuICAgIGlvcy5sYXlvdXQuYW5pbWF0ZVxuICAgICAgdGFyZ2V0OmJvYXJkXG4gICAgICB0aW1lOi41XG4gICAgICBjdXJ2ZTonZWFzZS1pbi1vdXQnXG5cbiAgYm9hcmQuZGVsZXRlID0gKCkgLT5cbiAgICBsYXllciA9IFwiXCJcbiAgICBpZiBib2FyZC50YXJnZXRcbiAgICAgIGlmIGJvYXJkLnRhcmdldC50eXBlID09ICdmaWVsZCdcbiAgICAgICAgbGF5ZXIgPSBib2FyZC50YXJnZXQudGV4dFxuICAgICAgZWxzZVxuICAgICAgICBsYXllciA9IGJvYXJkLnRhcmdldFxuXG4gICAgICBpc1NwYWNlID0gbGF5ZXIuaHRtbFtsYXllci5odG1sLmxlbmd0aCAtIDUuLmxheWVyLmh0bWwubGVuZ3RoIC0gMSBdXG5cbiAgICAgIGlmIGlzU3BhY2UgIT0gJ25ic3A7J1xuICAgICAgICB0ZXh0ID0gbGF5ZXIuaHRtbC5zbGljZSgwLCAtMSlcbiAgICAgICAgbGF5ZXIuaHRtbCA9IHRleHRcbiAgICAgIGVsc2VcbiAgICAgICAgdGV4dCA9IGxheWVyLmh0bWwuc2xpY2UoMCwgLTYpXG4gICAgICAgIGxheWVyLmh0bWwgPSB0ZXh0XG5cbiAgYm9hcmQuY2Fwc0xvY2sgPSAoKSAtPlxuICAgIGJvYXJkLmlzQ2Fwc0xvY2sgPSB0cnVlXG4gICAgYm9hcmQuaXNDYXBpdGFsID0gdHJ1ZVxuICAgIGJvYXJkLmtleXMuc2hpZnQuaWNvbi50b2dnbGUoJ29mZicpXG4gICAgaGFuZGxlS2V5Q29sb3IoYm9hcmQua2V5cy5zaGlmdClcbiAgICBpZiBpb3MuZGV2aWNlLm5hbWUgPT0gJ2lwYWQtcHJvJ1xuICAgICAgYm9hcmQua2V5cy5zaGlmdGFsdC5pY29uLnRvZ2dsZSgnb2ZmJylcbiAgICAgIGhhbmRsZUtleUNvbG9yKGJvYXJkLmtleXMuc2hpZnRhbHQpXG5cbiAgYm9hcmQub3V0cHV0KHNldHVwLm91dHB1dClcbiAgYm9hcmQua2V5c0FycmF5ID0gW11cbiAgYm9hcmQua2V5cyA9IHt9XG4gIGJvYXJkLmlzQ2FwaXRhbCA9IHNldHVwLnNoaWZ0XG4gIGJvYXJkLmFyZWEgPSBuZXcgaW9zLlZpZXdcbiAgICBuYW1lOlwiLmFyZWFcIlxuICAgIHN1cGVyTGF5ZXI6Ym9hcmRcbiAgICBjb25zdHJhaW50czogc3BlY3MuYXJlYVxuICAgIGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCJcblxuICBLZXkgPSAob2JqKSAtPlxuICAgIGtleSA9IG5ldyBpb3MuVmlld1xuICAgICAgbmFtZTpcIi5rZXlzLlwiICsgb2JqLm5hbWVcbiAgICAgIGNvbnN0cmFpbnRzOm9iai5jb25zdHJhaW50c1xuICAgICAgc3VwZXJMYXllcjpib2FyZC5hcmVhXG4gICAgICBib3JkZXJSYWRpdXM6aW9zLnB4KHNwZWNzLmxldHRlcktleS5ib3JkZXJSYWRpdXMpXG4gICAgICBzaGFkb3dZOmNvbG9ycy5zaGFkb3dZXG4gICAgICBzaGFkb3dDb2xvcjpjb2xvcnMuc2hhZG93Q29sb3JcbiAgICBrZXkuc3R5bGUuZm9udEZhbWlseSA9IFwiLWFwcGxlLXN5c3RlbSwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZlwiXG5cbiAgICAjRGlzYWJsZXMgWm9vbVxuICAgIGtleS5vbiBFdmVudHMuVG91Y2hTdGFydCwgKGV2ZW50KSAtPlxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIHJldHVybiBrZXlcblxuICBMZXR0ZXIgPSAob2JqKSAtPlxuICAgIGtleSA9IG5ldyBLZXkgb2JqXG4gICAga2V5LmJhY2tncm91bmRDb2xvciA9IGNvbG9ycy5rZXlCR1xuICAgIGtleS5odG1sID0gb2JqLmxldHRlclxuICAgIGtleS5jb2xvciA9IGNvbG9ycy5jb2xvclxuICAgIGtleS5zdHlsZS50ZXh0QWxpZ24gPSBcImNlbnRlclwiXG4gICAga2V5LnN0eWxlLmxpbmVIZWlnaHQgPSBpb3MucHgoc3BlY3MubGluZUhlaWdodCkgKyBcInB4XCJcbiAgICBrZXkuc3R5bGUuZm9udFNpemUgPSBpb3MucHgoc3BlY3MubGV0dGVyS2V5LmZvbnRTaXplKSArIFwicHhcIlxuICAgIGtleS52YWx1ZSA9IG9iai5sZXR0ZXJcblxuXG4gICAgaWYga2V5LnZhbHVlID09IFwic3BhY2VcIiB0aGVuIGtleS52YWx1ZSA9IFwiJm5ic3A7XCJcbiAgICBpZiBpb3MuaXNQYWQoKVxuICAgICAga2V5LmRvd24gPSAtPlxuICAgICAgICBrZXkuYmFja2dyb3VuZENvbG9yID0gY29sb3JzLnNwZWNpYWxLZXlCR1xuICAgICAgICBpZiBib2FyZC50YXJnZXQgdGhlbiBpb3MudXRpbHMud3JpdGUoYm9hcmQudGFyZ2V0LCBrZXkudmFsdWUpXG4gICAgICBrZXkudXAgPSAtPlxuICAgICAgICBrZXkuYmFja2dyb3VuZENvbG9yID0gY29sb3JzLmtleUJHXG4gICAgICAgIGlmIGJvYXJkLmlzQ2FwaXRhbCAmJiBib2FyZC5pc0NhcHNMb2NrICE9IHRydWVcbiAgICAgICAgICBib2FyZC5pc0NhcGl0YWwgPSBmYWxzZVxuICAgICAgICAgIGNhcGl0YWxpemVLZXlzKClcbiAgICAgICAgICBib2FyZC5rZXlzLnNoaWZ0LnVwKClcbiAgICAgICAgICBpZiBpb3MuaXNQYWQoKSB0aGVuIGJvYXJkLmtleXMuc2hpZnRhbHQudXAoKVxuICAgICAga2V5Lm9uIEV2ZW50cy5Ub3VjaFN0YXJ0LCAtPlxuICAgICAgICBrZXkuZG93bigpXG4gICAgICBrZXkub24gRXZlbnRzLlRvdWNoRW5kLCAtPlxuICAgICAgICBrZXkudXAoKVxuICAgIGVsc2VcbiAgICAgIGlmIGtleS52YWx1ZSAhPSAnJm5ic3A7J1xuICAgICAgICBrZXkuZG93biA9IC0+XG4gICAgICAgICAgYm9hcmQucG9wVXAudmlzaWJsZSA9IHRydWVcbiAgICAgICAgICBib2FyZC5icmluZ1RvRnJvbnQoKVxuICAgICAgICAgIGJvYXJkLnBvcFVwLmJyaW5nVG9Gcm9udCgpXG4gICAgICAgICAgYm9hcmQucG9wVXAubWlkWCA9IGtleS5taWRYXG4gICAgICAgICAgYm9hcmQucG9wVXAubWF4WSA9IGtleS5tYXhZXG4gICAgICAgICAgYm9hcmQucG9wVXAudGV4dC5odG1sID0ga2V5LnZhbHVlXG5cbiAgICAgICAgICBpZiBib2FyZC50YXJnZXQgdGhlbiBpb3MudXRpbHMud3JpdGUoYm9hcmQudGFyZ2V0LCBrZXkudmFsdWUpXG5cblxuICAgICAgICBrZXkudXAgPSAtPlxuICAgICAgICAgIGJvYXJkLnBvcFVwLnZpc2libGUgPSBmYWxzZVxuICAgICAgICAgIGlmIGJvYXJkLmlzQ2FwaXRhbCAmJiBib2FyZC5jYXBzTG9jayAhPSB0cnVlXG4gICAgICAgICAgICBib2FyZC5pc0NhcGl0YWwgPSBmYWxzZVxuICAgICAgICAgICAgY2FwaXRhbGl6ZUtleXMoKVxuICAgICAgICAgICAgYm9hcmQua2V5cy5zaGlmdC51cCgpXG5cbiAgICAgICAga2V5Lm9uIEV2ZW50cy5Ub3VjaFN0YXJ0LCAtPiBrZXkuZG93bigpXG4gICAgICAgIGtleS5vbiBFdmVudHMuVG91Y2hFbmQsIC0+IGtleS51cCgpXG4gICAgICBlbHNlXG5cbiAgICAgICAga2V5LmRvd24gPSAtPlxuICAgICAgICAgIGtleS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvcnMuc3BlY2lhbEtleUJHXG4gICAgICAgICAgaWYgYm9hcmQudGFyZ2V0IHRoZW4gaW9zLnV0aWxzLndyaXRlKGJvYXJkLnRhcmdldCwga2V5LnZhbHVlKVxuICAgICAgICBrZXkudXAgPSAtPlxuICAgICAgICAgIGtleS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvcnMua2V5QkdcbiAgICAgICAga2V5Lm9uIEV2ZW50cy5Ub3VjaFN0YXJ0LCAtPlxuICAgICAgICAgIGtleS5kb3duKClcbiAgICAgICAga2V5Lm9uIEV2ZW50cy5Ub3VjaEVuZCwgLT5cbiAgICAgICAgICBrZXkudXAoKVxuXG4gICAgcmV0dXJuIGtleVxuXG4gIFNwZWNpYWxLZXkgPSAob2JqKSAtPlxuICAgIGtleSA9IG5ldyBLZXkgb2JqXG4gICAga2V5LmJhY2tncm91bmRDb2xvciA9IGNvbG9ycy5zcGVjaWFsS2V5QkdcbiAgICBrZXkuY29sb3IgPSBjb2xvcnMuY29sb3JcbiAgICBrZXkuc3R5bGUudGV4dEFsaWduID0gXCJjZW50ZXJcIlxuICAgIGlmIGlvcy5kZXZpY2UubmFtZSA9PSAnaXBhZC1wcm8nXG4gICAgICBrZXkuc3R5bGUuZm9udFNpemUgPSBpb3MucHgoMTgpICsgXCJweFwiXG4gICAgZWxzZVxuICAgICAga2V5LnN0eWxlLmZvbnRTaXplID0gaW9zLnB4KDE2KSArIFwicHhcIlxuICAgIHJldHVybiBrZXlcblxuICBJY29uID0gKG9iaikgLT5cbiAgICBpY29uID0gbmV3IGlvcy5WaWV3XG4gICAgICBuYW1lOidpY29uJ1xuICAgICAgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIlxuICAgICAgc3VwZXJMYXllcjpvYmouc3VwZXJMYXllclxuICAgICAgY29uc3RyYWludHM6XG4gICAgICAgIGFsaWduOidjZW50ZXInXG5cbiAgICBpY29uLnByb3BzID0gKGhlaWdodDpvYmouaWNvbi5oZWlnaHQsIHdpZHRoOm9iai5pY29uLndpZHRoLCBodG1sOiBvYmouaWNvbi5zdmcpXG5cbiAgICBpb3MudXRpbHMuY2hhbmdlRmlsbChpY29uLCBjb2xvcnMuY29sb3IpXG4gICAgcmV0dXJuIGljb25cblxuICBJY29uV2l0aFN0YXRlID0gKG9iaikgLT5cbiAgICBpY29uID0gbmV3IGlvcy5WaWV3XG4gICAgICBuYW1lOidpY29uJ1xuICAgICAgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIlxuICAgICAgc3VwZXJMYXllcjpvYmouc3VwZXJMYXllclxuICAgICAgY29uc3RyYWludHM6XG4gICAgICAgIGFsaWduOidjZW50ZXInXG5cbiAgICBpY29uLnRvZ2dsZSA9IChzdGF0ZSkgLT5cbiAgICAgIGlmIHN0YXRlID09IHVuZGVmaW5lZFxuICAgICAgICBpZiBpY29uLnN0YXRlID09ICdvbicgdGhlbiBzdGF0ZSA9ICdvZmYnXG4gICAgICAgIGVsc2Ugc3RhdGUgPSAnb24nXG5cbiAgICAgIGlmIHN0YXRlID09IFwib25cIlxuICAgICAgICBpZiBpb3MuZGV2aWNlLm5hbWUgIT0gJ2lwYWQtcHJvJ1xuICAgICAgICAgIGljb24uaHRtbCA9IG9iai5vbi5zdmdcbiAgICAgICAgICBpY29uLndpZHRoID0gb2JqLm9uLndpZHRoXG4gICAgICAgICAgaWNvbi5oZWlnaHQgPSBvYmoub24uaGVpZ2h0XG4gICAgICAgIGljb24uc3RhdGUgPSAnb24nXG4gICAgICBlbHNlXG4gICAgICAgIGlmIGlvcy5kZXZpY2UubmFtZSAhPSAnaXBhZC1wcm8nXG4gICAgICAgICAgaWNvbi5odG1sID0gb2JqLm9mZi5zdmdcbiAgICAgICAgICBpY29uLndpZHRoID0gb2JqLm9uLndpZHRoXG4gICAgICAgICAgaWNvbi5oZWlnaHQgPSBvYmoub24uaGVpZ2h0XG4gICAgICAgIGljb24uc3RhdGUgPSAnb2ZmJ1xuICAgICAgaW9zLnV0aWxzLmNoYW5nZUZpbGwoaWNvbiwgY29sb3JzLmNvbG9yKVxuICAgIGlmIG9iai5zdGF0ZVxuICAgICAgaWNvbi50b2dnbGUoJ29uJylcbiAgICBlbHNlXG4gICAgICBpY29uLnRvZ2dsZSgnb2ZmJylcblxuXG4gICAgcmV0dXJuIGljb25cblxuICBjYXBpdGFsaXplS2V5cyA9IC0+XG4gICAgZm9yIGtleSBpbiBib2FyZC5rZXlzQXJyYXlcbiAgICAgIGlmIGJvYXJkLmlzQ2FwaXRhbFxuICAgICAgICBpZiBrZXkuaHRtbC5sZW5ndGggPT0gMSAmJiBrZXkuaHRtbC5tYXRjaCgvW2Etel0vaSlcbiAgICAgICAgICBrZXkuaHRtbCA9IGtleS5odG1sLnRvVXBwZXJDYXNlKClcbiAgICAgICAgICBrZXkudmFsdWUgPSBrZXkuaHRtbFxuICAgICAgICBpZiBrZXkuYWx0XG4gICAgICAgICAga2V5LmFsdC5kZXN0cm95KClcbiAgICAgICAgICBrZXkuYWx0ID0gdW5kZWZpbmVkXG4gICAgICAgIGlmIGtleS5oZWlnaHQgPiBpb3MucHgoNDYpXG4gICAgICAgICAga2V5LnN0eWxlLmxpbmVIZWlnaHQgPSBpb3MucHgoc3BlY3MubGV0dGVyS2V5LmhlaWdodCkgKyAncHgnXG4gICAgICAgICAga2V5LnN0eWxlLmZvbnRTaXplID0gaW9zLnB4KDIzKSArICdweCdcbiAgICAgICAgZWxzZVxuICAgICAgICAgIGlmIGlvcy5kZXZpY2UubmFtZSA9PSAnaXBhZC1wcm8nXG4gICAgICAgICAgICBrZXkuc3R5bGUubGluZUhlaWdodCA9IGlvcy5weCg0NikgKyAncHgnXG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAga2V5LnN0eWxlLmxpbmVIZWlnaHQgPSBpb3MucHgoc3BlY3MubGluZUhlaWdodCkgKyAncHgnXG4gICAgICAgICAga2V5LnN0eWxlLmZvbnRTaXplID0gaW9zLnB4KDIwKSArICdweCdcbiAgICAgICAga2V5LnZhbHVlID0ga2V5Lmh0bWxcbiAgICAgIGVsc2VcbiAgICAgICAgaWYga2V5Lmh0bWwubGVuZ3RoID09IDEgJiYga2V5Lmh0bWwubWF0Y2goL1thLXpdL2kpXG4gICAgICAgICAga2V5Lmh0bWwgPSBrZXkuaHRtbC50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAga2V5LnZhbHVlID0ga2V5Lmh0bWxcbiAgICAgICAgZWxzZVxuICAgICAgICAgIGlmIGtleS5hbHQgPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICBrZXkuYWx0ID0gbmV3IGlvcy5UZXh0XG4gICAgICAgICAgICAgIHRleHQ6XCJcIlxuICAgICAgICAgICAgICBzdXBlckxheWVyOmtleVxuICAgICAgICAgICAgICBjb2xvcjpjb2xvcnMuY29sb3JcbiAgICAgICAgICAgICAgY29uc3RyYWludHM6XG4gICAgICAgICAgICAgICAgYWxpZ246XCJob3Jpem9udGFsXCJcbiAgICAgICAgICAgICAgICBib3R0b206NFxuICAgICAgICAgICAgICBmb250U2l6ZTpzcGVjcy5sZXR0ZXJLZXkuZm9udFNpemVcbiAgICAgICAgICAgIGlmIGJvYXJkLnRvcFJvd1xuICAgICAgICAgICAgICBpZiBib2FyZC50b3BSb3cuaW5kZXhPZihrZXkpICE9IC0xXG4gICAgICAgICAgICAgICAga2V5LnN0eWxlLmxpbmVIZWlnaHQgPSBpb3MucHgoMjMpICsgJ3B4J1xuICAgICAgICAgICAgICAgIGtleS5zdHlsZS5mb250U2l6ZSA9IGlvcy5weCgxNikgKyAncHgnXG4gICAgICAgICAgICAgICAga2V5LmFsdC5zdHlsZS5mb250U2l6ZSA9IGlvcy5weCgxNikgKyAncHgnXG4gICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBrZXkuc3R5bGUubGluZUhlaWdodCA9IGlvcy5weCgzNikgKyAncHgnXG4gICAgICAgICAgICAgICAga2V5LnN0eWxlLmZvbnRTaXplID0gaW9zLnB4KDIwKSArICdweCdcbiAgICAgICAgICAgICAgICBrZXkuYWx0LnN0eWxlLmZvbnRTaXplID0gaW9zLnB4KDIwKSArICdweCdcbiAgICAgICAgICAgICAgICBrZXkuYWx0LmNvbnN0cmFpbnRzLmJvdHRvbSA9IDhcbiAgICAgICAgICAgIHN3aXRjaCBrZXkudmFsdWVcbiAgICAgICAgICAgICAgd2hlbiBcIiZsdDtcIlxuICAgICAgICAgICAgICAgIGtleS5hbHQuaHRtbCA9IFwiLlwiXG4gICAgICAgICAgICAgIHdoZW4gXCImZ3Q7XCJcbiAgICAgICAgICAgICAgICBrZXkuYWx0Lmh0bWwgPSBcIixcIlxuICAgICAgICAgICAgICB3aGVuIFwiPFwiXG4gICAgICAgICAgICAgICAga2V5LmFsdC5odG1sID0gXCIuXCJcbiAgICAgICAgICAgICAgd2hlbiBcIj5cIlxuICAgICAgICAgICAgICAgIGtleS5hbHQuaHRtbCA9IFwiLFwiXG4gICAgICAgICAgICAgIHdoZW4gXCI/XCJcbiAgICAgICAgICAgICAgICBrZXkuYWx0Lmh0bWwgPSBcIi5cIlxuICAgICAgICAgICAgICB3aGVuIFwie1wiXG4gICAgICAgICAgICAgICAga2V5LmFsdC5odG1sID0gXCJbXCJcbiAgICAgICAgICAgICAgd2hlbiBcIn1cIlxuICAgICAgICAgICAgICAgIGtleS5hbHQuaHRtbCA9IFwifVwiXG4gICAgICAgICAgICAgIHdoZW4gXCJcXHxcIlxuICAgICAgICAgICAgICAgIGtleS5hbHQuaHRtbCA9IFwiXFxcXFwiXG4gICAgICAgICAgICAgIHdoZW4gXCJ+XCJcbiAgICAgICAgICAgICAgICBrZXkuYWx0Lmh0bWwgPSBcImBcIlxuICAgICAgICAgICAgICB3aGVuIFwiIVwiXG4gICAgICAgICAgICAgICAga2V5LmFsdC5odG1sID0gXCIuXCJcbiAgICAgICAgICAgICAgd2hlbiBcIkBcIlxuICAgICAgICAgICAgICAgIGtleS5hbHQuaHRtbCA9IFwiMlwiXG4gICAgICAgICAgICAgIHdoZW4gXCIjXCJcbiAgICAgICAgICAgICAgICBrZXkuYWx0Lmh0bWwgPSBcIjNcIlxuICAgICAgICAgICAgICB3aGVuIFwiJFwiXG4gICAgICAgICAgICAgICAga2V5LmFsdC5odG1sID0gXCI0XCJcbiAgICAgICAgICAgICAgd2hlbiBcIiVcIlxuICAgICAgICAgICAgICAgIGtleS5hbHQuaHRtbCA9IFwiNVwiXG4gICAgICAgICAgICAgIHdoZW4gXCJeXCJcbiAgICAgICAgICAgICAgICBrZXkuYWx0Lmh0bWwgPSBcIjZcIlxuICAgICAgICAgICAgICB3aGVuIFwiJmFtcDtcIlxuICAgICAgICAgICAgICAgIGtleS5hbHQuaHRtbCA9IFwiN1wiXG4gICAgICAgICAgICAgIHdoZW4gXCImXCJcbiAgICAgICAgICAgICAgICBrZXkuYWx0Lmh0bWwgPSBcIjdcIlxuICAgICAgICAgICAgICB3aGVuIFwiKlwiXG4gICAgICAgICAgICAgICAga2V5LmFsdC5odG1sID0gXCI4XCJcbiAgICAgICAgICAgICAgd2hlbiBcIihcIlxuICAgICAgICAgICAgICAgIGtleS5hbHQuaHRtbCA9IFwiOVwiXG4gICAgICAgICAgICAgIHdoZW4gXCIpXCJcbiAgICAgICAgICAgICAgICBrZXkuYWx0Lmh0bWwgPSBcIjBcIlxuICAgICAgICAgICAgICB3aGVuIFwiX1wiXG4gICAgICAgICAgICAgICAga2V5LmFsdC5odG1sID0gXCItXCJcbiAgICAgICAgICAgICAgd2hlbiBcIitcIlxuICAgICAgICAgICAgICAgIGtleS5hbHQuaHRtbCA9IFwiPVwiXG4gICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBrZXkuYWx0Lmh0bWwgPSBcIiZwcmltZTtcIlxuICAgICAgICAgICAgaW9zLmxheW91dC5zZXQoa2V5LmFsdClcbiAgICAgICAgICAgIGlmIGlvcy5kZXZpY2UubmFtZSA9PSAnaXBhZC1wcm8nICYmIGtleS52YWx1ZSA9PSAnIScgdGhlbiBrZXkuYWx0Lmh0bWwgPSAnMSdcbiAgICAgICAgICAgIGlmIGlvcy5kZXZpY2UubmFtZSA9PSAnaXBhZC1wcm8nICYmIGtleS52YWx1ZSA9PSAnPycgdGhlbiBrZXkuYWx0Lmh0bWwgPSAnLydcbiAgICAgICAgICAgIGlmIGlvcy5kZXZpY2UubmFtZSA9PSAnaXBhZC1wcm8nICYmIGtleS52YWx1ZSA9PSAnOicgdGhlbiBrZXkuYWx0Lmh0bWwgPSAnOydcbiAgICAgICAgICAgIGlmIGlvcy5kZXZpY2UubmFtZSA9PSAnaXBhZC1wcm8nICYmIGtleS52YWx1ZSA9PSAnJnJkcXVvOycgdGhlbiBrZXkuYWx0Lmh0bWwgPSAnJnByaW1lOydcbiAgICAgICAgICAgIGtleS52YWx1ZSA9IGtleS5hbHQuaHRtbFxuXG4gIGhhbmRsZUtleUNvbG9yID0gKGtleSkgLT5cbiAgICBpZiBpb3MuaXNQaG9uZVxuICAgICAgaWYga2V5Lmljb24uc3RhdGUgPT0gJ29uJyB0aGVuIGtleS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvcnMua2V5QkdcbiAgICAgIGVsc2Uga2V5LmJhY2tncm91bmRDb2xvciA9IGNvbG9ycy5zcGVjaWFsS2V5QkdcblxuICBTcGFjZSA9IChvYmopIC0+XG4gICAga2V5ID0gbmV3IExldHRlciBvYmpcbiAgICBrZXkuaHRtbCA9ICdzcGFjZSdcbiAgICBrZXkuYmFja2dyb3VuZENvbG9yID0gY29sb3JzLmtleUJHXG4gICAga2V5LnN0eWxlLmxpbmVIZWlnaHQgPSBpb3MucHgoc3BlY3Muc3BlY2lhbEtleUhlaWdodCkgKyBcInB4XCJcbiAgICBrZXkuc3R5bGUuZm9udFNpemUgPSBpb3MucHgoMTYpICsgJ3B4J1xuICAgIHJldHVybiBrZXlcblxuICBTaGlmdCA9IChvYmopIC0+XG4gICAga2V5ID0gbmV3IFNwZWNpYWxLZXkgb2JqXG4gICAga2V5Lmljb24gPSBuZXcgSWNvbldpdGhTdGF0ZVxuICAgICAgc3VwZXJMYXllcjprZXlcbiAgICAgIHN0YXRlOm9iai5zaGlmdFxuICAgICAgb246aW9zLnV0aWxzLnN2Zyhpb3MuYXNzZXRzLnNoaWZ0Lm9uKVxuICAgICAgb2ZmOmlvcy51dGlscy5zdmcoaW9zLmFzc2V0cy5zaGlmdC5vZmYpXG4gICAgaGFuZGxlS2V5Q29sb3Ioa2V5KVxuXG4gICAga2V5Lm9uIEV2ZW50cy5Ub3VjaEVuZCwgLT5cbiAgICAgIEAuaWNvbi50b2dnbGUoKVxuICAgICAgaGFuZGxlS2V5Q29sb3Ioa2V5KVxuICAgICAgaWYgQC5pY29uLnN0YXRlID09ICdvbidcbiAgICAgICAgYm9hcmQuaXNDYXBpdGFsID0gdHJ1ZVxuICAgICAgZWxzZVxuICAgICAgICBib2FyZC5pc0NhcGl0YWwgPSBmYWxzZVxuICAgICAgY2FwaXRhbGl6ZUtleXMoKVxuXG4gICAga2V5LmRvd24gPSAtPlxuICAgICAga2V5Lmljb24udG9nZ2xlKCdvbicpXG4gICAgICBoYW5kbGVLZXlDb2xvcihrZXkpXG4gICAgICBib2FyZC5pc0NhcGl0YWwgPSB0cnVlXG4gICAgICBjYXBpdGFsaXplS2V5cygpXG5cbiAgICBrZXkudXAgPSAtPlxuICAgICAga2V5Lmljb24udG9nZ2xlKCdvZmYnKVxuICAgICAgaGFuZGxlS2V5Q29sb3Ioa2V5KVxuICAgICAgYm9hcmQuaXNDYXBpdGFsID0gZmFsc2VcbiAgICAgIGNhcGl0YWxpemVLZXlzKClcblxuICAgIGlvcy5sYXlvdXQuc2V0KGtleS5pY29uKVxuXG4gICAgaWYgaW9zLmlzUGFkKClcbiAgICAgIGtleS5vbiBFdmVudHMuVG91Y2hFbmQsIC0+XG4gICAgICAgIGlmIEAuaWNvbi5zdGF0ZSA9PSAnb24nXG4gICAgICAgICAgYm9hcmQua2V5cy5zaGlmdC5pY29uLnRvZ2dsZSgnb24nKVxuICAgICAgICAgIGJvYXJkLmtleXMuc2hpZnRhbHQuaWNvbi50b2dnbGUoJ29uJylcbiAgICAgICAgZWxzZVxuICAgICAgICAgIGJvYXJkLmtleXMuc2hpZnQuaWNvbi50b2dnbGUoJ29mZicpXG4gICAgICAgICAgYm9hcmQua2V5cy5zaGlmdGFsdC5pY29uLnRvZ2dsZSgnb2ZmJylcbiAgICAgICAgaGFuZGxlS2V5Q29sb3IoYm9hcmQua2V5cy5zaGlmdClcbiAgICAgICAgaGFuZGxlS2V5Q29sb3IoYm9hcmQua2V5cy5zaGlmdGFsdClcbiAgICByZXR1cm4ga2V5XG5cbiAgRGVsZXRlID0gKG9iaikgLT5cbiAgICBrZXkgPSBuZXcgU3BlY2lhbEtleSBvYmpcbiAgICBrZXkuaWNvbiA9IG5ldyBJY29uV2l0aFN0YXRlXG4gICAgICBzdXBlckxheWVyOmtleVxuICAgICAgb246aW9zLnV0aWxzLnN2Zyhpb3MuYXNzZXRzLmRlbGV0ZS5vbilcbiAgICAgIG9mZjppb3MudXRpbHMuc3ZnKGlvcy5hc3NldHMuZGVsZXRlLm9mZilcblxuICAgIGtleS5maXJlID0gLT4gYm9hcmQuZGVsZXRlKClcblxuICAgIGtleS5kb3duID0gLT5cbiAgICAgIGtleS5pY29uLnRvZ2dsZSgnb24nKVxuICAgICAgaGFuZGxlS2V5Q29sb3Ioa2V5KVxuICAgICAga2V5LmZpcmUoKVxuXG4gICAga2V5LnVwID0gLT5cbiAgICAgIGtleS5pY29uLnRvZ2dsZSgnb2ZmJylcbiAgICAgIGhhbmRsZUtleUNvbG9yKGtleSlcblxuICAgIGtleS5vbiBFdmVudHMuVG91Y2hTdGFydCwgLT4ga2V5LmRvd24oKVxuICAgIGtleS5vbiBFdmVudHMuVG91Y2hFbmQsIC0+IGtleS51cCgpXG5cblxuICAgIHJldHVybiBrZXlcblxuICBOdW1iZXJzICA9IChvYmopIC0+XG4gICAga2V5ID0gbmV3IFNwZWNpYWxLZXkgb2JqXG4gICAgaWYgaW9zLmlzUGhvbmUoKVxuICAgICAga2V5Lmh0bWwgPSAnMTIzJ1xuICAgIGVsc2VcbiAgICAgIGtleS5odG1sID0nLj8xMjMnXG4gICAga2V5LnN0eWxlLmxpbmVIZWlnaHQgPSBpb3MucHgoc3BlY3Muc3BlY2lhbEtleUhlaWdodCkgKyBcInB4XCJcbiAgICByZXR1cm4ga2V5XG5cbiAgRW1vamkgPSAob2JqKSAtPlxuICAgIGtleSA9IG5ldyBTcGVjaWFsS2V5IG9ialxuICAgIGtleS5pY29uID0gbmV3IEljb25cbiAgICAgIHN1cGVyTGF5ZXI6a2V5XG4gICAgICBpY29uOmlvcy51dGlscy5zdmcoaW9zLmFzc2V0cy5lbW9qaSlcbiAgICByZXR1cm4ga2V5XG5cbiAgUmV0dXJuID0gKG9iaikgLT5cbiAgICBrZXkgPSBuZXcgU3BlY2lhbEtleSBvYmpcbiAgICBrZXkuYmFja2dyb3VuZENvbG9yID0gY29sb3JzLnJldHVybkJHXG4gICAga2V5Lmh0bWwgPSBzZXR1cC5yZXR1cm5UZXh0XG4gICAga2V5LnN0eWxlLmxpbmVIZWlnaHQgPSBpb3MucHgoc3BlY3Muc3BlY2lhbEtleUhlaWdodCkgKyBcInB4XCJcbiAgICBrZXkuY29sb3IgPSBpb3MudXRpbHMuYXV0b0NvbG9yKGNvbG9ycy5yZXR1cm5CRylcbiAgICBrZXkuZG93biA9IC0+XG4gICAgICBub3RoaW5nSGFwcGVucyA9IHRydWVcblxuICAgIGtleS51cCA9IC0+XG4gICAgICBib2FyZC5kaXNtaXNzKClcbiAgICAgIGlmIGJvYXJkLnRhcmdldFxuICAgICAgICBpZiBib2FyZC50YXJnZXQucGFyZW50XG4gICAgICAgICAgYm9hcmQudGFyZ2V0LnBhcmVudC5hY3RpdmUgPSBmYWxzZVxuICAgIGtleS5vbiBFdmVudHMuVG91Y2hFbmQsIC0+IGtleS5kb3duKClcbiAgICBrZXkub24gRXZlbnRzLlRvdWNoU3RhcnQsIC0+IGtleS51cCgpXG4gICAgcmV0dXJuIGtleVxuXG4gIERpc21pc3MgPSAob2JqKSAtPlxuICAgIGtleSA9IG5ldyBTcGVjaWFsS2V5IG9ialxuICAgIGtleS5pY29uID0gbmV3IEljb25cbiAgICAgIHN1cGVyTGF5ZXI6a2V5XG4gICAgICBpY29uOmlvcy51dGlscy5zdmcoaW9zLmFzc2V0cy5rZXlib2FyZClcbiAgICBrZXkuaWNvbi5zY2FsZSA9IC44XG4gICAga2V5Lmljb24uY29uc3RyYWludHMgPVxuICAgICAgYm90dG9tOjEyXG4gICAgICB0cmFpbGluZzoxMlxuICAgIGlvcy5sYXlvdXQuc2V0KGtleS5pY29uKVxuXG4gICAga2V5LmRvd24gPSAtPiBib2FyZC5kaXNtaXNzKClcbiAgICBrZXkudXAgPSAtPiBub3RoaW5nSGFwcGVucyA9IGZhbHNlXG4gICAga2V5Lm9uIEV2ZW50cy5Ub3VjaEVuZCwgLT4ga2V5LmRvd24oKVxuICAgIHJldHVybiBrZXlcblxuICBUYWIgPSAob2JqKSAtPlxuICAgIGtleSA9IG5ldyBTcGVjaWFsS2V5IG9ialxuICAgIGtleS5odG1sID0gJ3RhYidcbiAgICBrZXkuc3R5bGUubGluZUhlaWdodCA9IGlvcy5weCg3MCkgKyAncHgnXG4gICAga2V5LnN0eWxlLnRleHRBbGlnbiA9ICdsZWZ0J1xuICAgIGtleS5zdHlsZS5wYWRkaW5nTGVmdCA9IGlvcy5weCgxMikgKyAncHgnXG4gICAgcmV0dXJuIGtleVxuXG4gIGJvYXJkLnN3aXRjaExldHRlcnMgPSAtPlxuICAgIHJvdzFCcmVhayA9IDEwXG4gICAgcm93MkJyZWFrID0gMTlcbiAgICBpZiBpb3MuaXNQYWQoKVxuICAgICAgbGV0dGVycy5wdXNoICchJ1xuICAgICAgbGV0dGVycy5wdXNoICc/J1xuICAgIGlmIGlvcy5kZXZpY2UubmFtZSA9PSBcImlwYWQtcHJvXCJcbiAgICAgIGxldHRlcnMgPSBbXCJxXCIsIFwid1wiLCBcImVcIiwgXCJyXCIsIFwidFwiLCBcInlcIiwgXCJ1XCIsIFwiaVwiLCBcIm9cIiwgXCJwXCIsIFwie1wiLCBcIn1cIiwgXCJcXHxcIiwgXCJhXCIsIFwic1wiLCBcImRcIiwgXCJmXCIsIFwiZ1wiLCBcImhcIiwgXCJqXCIsIFwia1wiLCBcImxcIiwgXCI6XCIsIFwiJnJkcXVvO1wiLCBcInpcIiwgXCJ4XCIsIFwiY1wiLCBcInZcIiwgIFwiYlwiLCBcIm5cIiwgXCJtXCIsIFwiPFwiLCBcIj5cIiwgXCI/XCJdXG4gICAgICB0b3BMZXR0ZXJzID0gW1wiflwiLCBcIiFcIiwgXCJAXCIsIFwiI1wiLCBcIiRcIiwgXCIlXCIsIFwiXlwiLCBcIiZcIiwgXCIqXCIsIFwiKFwiLCBcIilcIiwgXCJfXCIsIFwiK1wiXVxuICAgICAgcm93MUJyZWFrID0gMTNcbiAgICAgIHJvdzJCcmVhayA9IDI0XG4gICAgZm9yIGwsIGkgaW4gbGV0dGVyc1xuICAgICAga2V5ID0gbmV3IExldHRlclxuICAgICAgICBuYW1lOmxcbiAgICAgICAgY29uc3RyYWludHM6XG4gICAgICAgICAgaGVpZ2h0OnNwZWNzLmxldHRlcktleS5oZWlnaHRcbiAgICAgICAgICB3aWR0aDpzcGVjcy5sZXR0ZXJLZXkud2lkdGhcbiAgICAgICAgbGV0dGVyOmxcbiAgICAgIGlmIGwgPT0gJ3cnIHx8IGwgPT0gJ3InIHx8IGwgPT0gJ3knIHx8IGwgPT0gJ2knIHx8IGwgPT0gJ3AnXG4gICAgICAgIGtleS5jb25zdHJhaW50cy53aWR0aCA9IGtleS5jb25zdHJhaW50cy53aWR0aCArIDFcbiAgICAgIGJvYXJkLmtleXNbbF0gPSBrZXlcbiAgICAgIGJvYXJkLmtleXNBcnJheS5wdXNoIGtleVxuICAgICAgaWYgaSA9PSAwXG4gICAgICAgIGtleS5jb25zdHJhaW50cy5sZWFkaW5nID0gc3BlY3Mucm93MS5sZWFkaW5nXG4gICAgICAgIGtleS5jb25zdHJhaW50cy50b3AgPSBzcGVjcy5yb3cxLnRvcFxuICAgICAgaWYgaSA+IDAgJiYgaSA8IHJvdzFCcmVha1xuICAgICAgICBrZXkuY29uc3RyYWludHMubGVhZGluZyA9IFtib2FyZC5rZXlzQXJyYXlbaSAtIDFdLCBzcGVjcy5zcGFjZV1cbiAgICAgICAga2V5LmNvbnN0cmFpbnRzLnRvcCA9IHNwZWNzLnJvdzEudG9wXG4gICAgICBpZiBpID09IHJvdzFCcmVha1xuICAgICAgICBrZXkuY29uc3RyYWludHMubGVhZGluZyA9IHNwZWNzLnJvdzIubGVhZGluZ1xuICAgICAgICBrZXkuY29uc3RyYWludHMudG9wID0gW2JvYXJkLmtleXNBcnJheVswXSwgc3BlY3Mucm93Mi50b3BdXG4gICAgICBpZiBpID4gcm93MUJyZWFrICYmIGkgPCByb3cyQnJlYWtcbiAgICAgICAga2V5LmNvbnN0cmFpbnRzLmxlYWRpbmcgPSBbYm9hcmQua2V5c0FycmF5W2kgLSAxXSwgc3BlY3Muc3BhY2VdXG4gICAgICAgIGtleS5jb25zdHJhaW50cy50b3AgPSBbYm9hcmQua2V5c0FycmF5WzBdLCBzcGVjcy5yb3cyLnRvcF1cbiAgICAgIGlmIGkgPT0gcm93MkJyZWFrXG4gICAgICAgIGtleS5jb25zdHJhaW50cy5sZWFkaW5nID0gc3BlY3Mucm93My5sZWFkaW5nXG4gICAgICAgIGtleS5jb25zdHJhaW50cy50b3AgPSBbYm9hcmQua2V5c0FycmF5W3JvdzFCcmVha10sIHNwZWNzLnJvdzMudG9wXVxuICAgICAgaWYgaSA+IHJvdzJCcmVha1xuICAgICAgICBrZXkuY29uc3RyYWludHMubGVhZGluZyA9IFtib2FyZC5rZXlzQXJyYXlbaSAtIDFdLCBzcGVjcy5zcGFjZV1cbiAgICAgICAga2V5LmNvbnN0cmFpbnRzLnRvcCA9IFtib2FyZC5rZXlzQXJyYXlbcm93MUJyZWFrXSwgc3BlY3Mucm93My50b3BdXG4gICAgICBpb3MubGF5b3V0LnNldChrZXkpXG5cbiAgICBib2FyZC5rZXlzLnNoaWZ0ID0gbmV3IFNoaWZ0XG4gICAgICBuYW1lOlwic2hpZnRcIlxuICAgICAgc2hpZnQ6c2V0dXAuc2hpZnRcbiAgICAgIGNvbnN0cmFpbnRzOlxuICAgICAgICBoZWlnaHQ6c3BlY3Muc3BlY2lhbEtleUhlaWdodFxuICAgICAgICB3aWR0aDpzcGVjcy5zcGVjaWFsS2V5V2lkdGhcbiAgICAgICAgYm90dG9tRWRnZXM6Ym9hcmQua2V5cy56XG5cbiAgICBib2FyZC5rZXlzLmRlbGV0ZSA9IG5ldyBEZWxldGVcbiAgICAgIG5hbWU6XCJkZWxldGVcIlxuICAgICAgY29uc3RyYWludHM6XG4gICAgICAgIGhlaWdodDpzcGVjcy5zcGVjaWFsS2V5SGVpZ2h0XG4gICAgICAgIHdpZHRoOnNwZWNzLnNwZWNpYWxLZXlXaWR0aFxuICAgICAgICBib3R0b21FZGdlczpib2FyZC5rZXlzLnpcbiAgICAgICAgdHJhaWxpbmc6MFxuXG4gICAgYm9hcmQua2V5cy5udW1iZXJzID0gbmV3IE51bWJlcnNcbiAgICAgIG5hbWU6XCJudW1iZXJzXCJcbiAgICAgIGNvbnN0cmFpbnRzOlxuICAgICAgICBoZWlnaHQ6c3BlY3Muc3BlY2lhbEtleUhlaWdodFxuICAgICAgICB3aWR0aDpzcGVjcy5zcGVjaWFsS2V5V2lkdGhcbiAgICAgICAgYm90dG9tOjBcbiAgICAgICAgbGVhZGluZzowXG5cbiAgICBib2FyZC5rZXlzLmVtb2ppID0gbmV3IEVtb2ppXG4gICAgICBuYW1lOlwiZW1vamlcIlxuICAgICAgY29uc3RyYWludHM6XG4gICAgICAgIGhlaWdodDpzcGVjcy5zcGVjaWFsS2V5SGVpZ2h0XG4gICAgICAgIHdpZHRoOnNwZWNzLnNwZWNpYWxLZXlXaWR0aFxuICAgICAgICBsZWFkaW5nOltib2FyZC5rZXlzLm51bWJlcnMsIHNwZWNzLnNwYWNlXVxuICAgICAgICBib3R0b206MFxuXG4gICAgYm9hcmQua2V5cy5yZXR1cm4gPSBuZXcgUmV0dXJuXG4gICAgICBuYW1lOlwicmV0dXJuXCJcbiAgICAgIGNvbnN0cmFpbnRzOlxuICAgICAgICBib3R0b206MFxuICAgICAgICB0cmFpbGluZzowXG4gICAgICAgIHdpZHRoOnNwZWNzLnJldHVybldpZHRoXG4gICAgICAgIGhlaWdodDpzcGVjcy5zcGVjaWFsS2V5SGVpZ2h0XG5cbiAgICBib2FyZC5rZXlzLnNwYWNlID0gbmV3IFNwYWNlXG4gICAgICBuYW1lOlwic3BhY2VcIlxuICAgICAgbGV0dGVyOlwic3BhY2VcIlxuICAgICAgY29uc3RyYWludHM6XG4gICAgICAgIGxlYWRpbmc6W2JvYXJkLmtleXMuZW1vamksIHNwZWNzLnNwYWNlXVxuICAgICAgICB0cmFpbGluZzpbYm9hcmQua2V5cy5yZXR1cm4sIHNwZWNzLnNwYWNlXVxuICAgICAgICBib3R0b206MFxuICAgICAgICBoZWlnaHQ6c3BlY3Muc3BlY2lhbEtleUhlaWdodFxuXG5cbiAgICBpZiBpb3MuaXNQYWQoKVxuICAgICAgYm9hcmQua2V5cy5yZXR1cm4uY29uc3RyYWludHMuYm90dG9tID0gdW5kZWZpbmVkXG4gICAgICBib2FyZC5rZXlzLnJldHVybi5jb25zdHJhaW50cy5ib3R0b21FZGdlcyA9IGJvYXJkLmtleXNBcnJheVtyb3cxQnJlYWtdXG4gICAgICBib2FyZC5rZXlzLmRlbGV0ZS5jb25zdHJhaW50cy50b3AgPSAwXG4gICAgICBib2FyZC5rZXlzLmRlbGV0ZS5jb25zdHJhaW50cy5ib3R0b21FZGdlcyA9IHVuZGVmaW5lZFxuICAgICAgYm9hcmQua2V5cy5kZWxldGUuY29uc3RyYWludHMud2lkdGggPSA2MVxuXG4gICAgICBib2FyZC5rZXlzLnNoaWZ0YWx0ID0gbmV3IFNoaWZ0XG4gICAgICAgIG5hbWU6XCJzaGlmdGFsdFwiXG4gICAgICAgIHNoaWZ0OnNldHVwLnNoaWZ0XG4gICAgICAgIGNvbnN0cmFpbnRzOlxuICAgICAgICAgIGhlaWdodDpzcGVjcy5zcGVjaWFsS2V5SGVpZ2h0XG4gICAgICAgICAgd2lkdGg6NzZcbiAgICAgICAgICBib3R0b21FZGdlczpib2FyZC5rZXlzLnpcbiAgICAgICAgICB0cmFpbGluZzowXG5cbiAgICAgIGJvYXJkLmtleXMuZGlzbWlzcyA9IG5ldyBEaXNtaXNzXG4gICAgICAgIG5hbWU6XCJkaXNtaXNzXCJcbiAgICAgICAgY29uc3RyYWludHM6XG4gICAgICAgICAgaGVpZ2h0OnNwZWNzLnNwZWNpYWxLZXlIZWlnaHRcbiAgICAgICAgICB3aWR0aDpzcGVjcy5zcGVjaWFsS2V5V2lkdGhcbiAgICAgICAgICBib3R0b206MFxuICAgICAgICAgIHRyYWlsaW5nOjBcblxuICAgICAgYm9hcmQua2V5cy5udW1iZXJzYWx0ID0gbmV3IE51bWJlcnNcbiAgICAgICAgbmFtZTpcIm51bWJlcnNhbHRcIlxuICAgICAgICBjb25zdHJhaW50czpcbiAgICAgICAgICBoZWlnaHQ6c3BlY3Muc3BlY2lhbEtleUhlaWdodFxuICAgICAgICAgIHdpZHRoOjkzXG4gICAgICAgICAgYm90dG9tOjBcbiAgICAgICAgICB0cmFpbGluZzpbYm9hcmQua2V5cy5kaXNtaXNzLCBzcGVjcy5zcGFjZV1cblxuICAgICAgYm9hcmQua2V5cy5zcGFjZS5odG1sID0gXCJcIlxuICAgICAgYm9hcmQua2V5cy5zcGFjZS5jb25zdHJhaW50cy50cmFpbGluZyA9IFtib2FyZC5rZXlzLm51bWJlcnNhbHQsIHNwZWNzLnNwYWNlXVxuXG4gICAgICBpb3MubGF5b3V0LnNldCgpXG4gICAgYm9hcmQudG9wUm93ID0gW11cbiAgICBpZiBpb3MuZGV2aWNlLm5hbWUgPT0gJ2lwYWQtcHJvJ1xuICAgICAgZm9yIGwsaSBpbiB0b3BMZXR0ZXJzXG4gICAgICAgICAgdG9wS2V5ID0gbmV3IExldHRlclxuICAgICAgICAgICAgbGV0dGVyOmxcbiAgICAgICAgICAgIG5hbWU6bFxuICAgICAgICAgICAgY29uc3RyYWludHM6XG4gICAgICAgICAgICAgIGhlaWdodDo0NlxuICAgICAgICAgICAgICB3aWR0aDo2M1xuICAgICAgICAgICAgICB0b3A6MFxuICAgICAgICAgIGlmIGkgPT0gMFxuICAgICAgICAgICAgdG9wS2V5LmNvbnN0cmFpbnRzLmxlYWRpbmcgPSAwXG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgdG9wS2V5LmNvbnN0cmFpbnRzLmxlYWRpbmcgPSBbYm9hcmQudG9wUm93W2kgLSAxXSwgc3BlY3Muc3BhY2VdXG4gICAgICAgICAgdG9wS2V5LnN0eWxlLmxpbmVIZWlnaHQgPSBpb3MucHgoNDYpICsgJ3B4J1xuICAgICAgICAgIGlvcy5sYXlvdXQuc2V0KHRvcEtleSlcbiAgICAgICAgICBib2FyZC50b3BSb3cucHVzaCB0b3BLZXlcbiAgICAgICAgICBib2FyZC5rZXlzQXJyYXkucHVzaCB0b3BLZXlcbiAgICAgICAgICBib2FyZC5rZXlzW2xdID0gdG9wS2V5XG5cbiAgICAgIGJvYXJkLmtleXMuZGVsZXRlLmljb24uZGVzdHJveSgpXG4gICAgICBib2FyZC5rZXlzLmRlbGV0ZS5odG1sID0gJ2RlbGV0ZSdcbiAgICAgIGJvYXJkLmtleXMuZGVsZXRlLnN0eWxlLmxpbmVIZWlnaHQgPSBpb3MucHgoNTMpICsgJ3B4J1xuICAgICAgYm9hcmQua2V5cy5kZWxldGUuc3R5bGUudGV4dEFsaWduID0gJ3JpZ2h0J1xuICAgICAgYm9hcmQua2V5cy5kZWxldGUuc3R5bGUucGFkZGluZ1JpZ2h0ID0gaW9zLnB4KDEyKSArICdweCdcbiAgICAgIGJvYXJkLmtleXMuZGVsZXRlLmNvbnN0cmFpbnRzID1cbiAgICAgICAgdG9wOjBcbiAgICAgICAgdHJhaWxpbmc6MFxuICAgICAgICBoZWlnaHQ6NDZcbiAgICAgICAgd2lkdGg6MTA2XG5cbiAgICAgIGJvYXJkLmtleXMuc2hpZnQuaWNvbi5kZXN0cm95KClcbiAgICAgIGJvYXJkLmtleXMuc2hpZnQuaHRtbCA9ICdzaGlmdCdcbiAgICAgIGJvYXJkLmtleXMuc2hpZnQuc3R5bGUubGluZUhlaWdodCA9IGlvcy5weCg3MCkgKyAncHgnXG4gICAgICBib2FyZC5rZXlzLnNoaWZ0LnN0eWxlLnRleHRBbGlnbiA9ICdsZWZ0J1xuICAgICAgYm9hcmQua2V5cy5zaGlmdC5zdHlsZS5wYWRkaW5nTGVmdCA9IGlvcy5weCgxMikgKyAncHgnXG4gICAgICBib2FyZC5rZXlzLnNoaWZ0LmNvbnN0cmFpbnRzLndpZHRoID0gMTU0XG5cbiAgICAgIGJvYXJkLmtleXMuc2hpZnRhbHQuaWNvbi5kZXN0cm95KClcbiAgICAgIGJvYXJkLmtleXMuc2hpZnRhbHQuaHRtbCA9ICdzaGlmdCdcbiAgICAgIGJvYXJkLmtleXMuc2hpZnRhbHQuc3R5bGUubGluZUhlaWdodCA9IGlvcy5weCg3MCkgKyAncHgnXG4gICAgICBib2FyZC5rZXlzLnNoaWZ0YWx0LnN0eWxlLnRleHRBbGlnbiA9ICdyaWdodCdcbiAgICAgIGJvYXJkLmtleXMuc2hpZnRhbHQuc3R5bGUucGFkZGluZ1JpZ2h0ID0gaW9zLnB4KDEyKSArICdweCdcbiAgICAgIGJvYXJkLmtleXMuc2hpZnRhbHQuY29uc3RyYWludHMud2lkdGggPSAxNTVcblxuICAgICAgYm9hcmQua2V5cy5lbW9qaS5pY29uLmNvbnN0cmFpbnRzID0ge2xlYWRpbmc6MTUsIGJvdHRvbToxMX1cbiAgICAgIGJvYXJkLmtleXMuZW1vamkuY29uc3RyYWludHMgPVxuICAgICAgICB3aWR0aDoxNDRcbiAgICAgICAgaGVpZ2h0OjYxXG4gICAgICAgIGxlYWRpbmc6MFxuICAgICAgICBib3R0b206MFxuICAgICAgaW9zLmxheW91dC5zZXQoKVxuXG4gICAgICBib2FyZC5rZXlzLm51bWJlcnNhbHQuY29uc3RyYWludHMud2lkdGggPSA5M1xuICAgICAgYm9hcmQua2V5cy5kaXNtaXNzLmNvbnN0cmFpbnRzLndpZHRoID0gOTNcblxuICAgICAgYm9hcmQua2V5cy5jb20gPSBuZXcgTGV0dGVyXG4gICAgICAgIG5hbWU6Jy5jb20nXG4gICAgICAgIGxldHRlcjonLmNvbSdcbiAgICAgICAgY29uc3RyYWludHM6XG4gICAgICAgICAgaGVpZ2h0OnNwZWNzLmxldHRlcktleS5oZWlnaHRcbiAgICAgICAgICB3aWR0aDpzcGVjcy5sZXR0ZXJLZXkud2lkdGhcbiAgICAgICAgICBib3R0b206MFxuICAgICAgICAgIHRyYWlsaW5nOltib2FyZC5rZXlzLm51bWJlcnNhbHQsIHNwZWNzLnNwYWNlXVxuXG4gICAgICBib2FyZC5rZXlzLmNvbS5zdHlsZS5mb250U2l6ZSA9IGlvcy5weCgxNikgKyAncHgnXG5cbiAgICAgIGJvYXJkLmtleXMubnVtYmVycy5jb25zdHJhaW50cyA9XG4gICAgICAgIHdpZHRoOjE0M1xuICAgICAgICBoZWlnaHQ6NjFcbiAgICAgICAgbGVhZGluZzpbYm9hcmQua2V5cy5lbW9qaSwgc3BlY3Muc3BhY2VdXG4gICAgICBib2FyZC5rZXlzLm51bWJlcnMuc3R5bGUubGluZUhlaWdodCA9IGlvcy5weCg3MCkgKyAncHgnXG4gICAgICBib2FyZC5rZXlzLm51bWJlcnMuc3R5bGUudGV4dEFsaWduID0gJ2xlZnQnXG4gICAgICBib2FyZC5rZXlzLm51bWJlcnMuc3R5bGUucGFkZGluZ0xlZnQgPSBpb3MucHgoMTIpICsgJ3B4J1xuXG5cbiAgICAgIGJvYXJkLmtleXMucmV0dXJuLnN0eWxlLmxpbmVIZWlnaHQgPSBpb3MucHgoNzApICsgJ3B4J1xuICAgICAgYm9hcmQua2V5cy5yZXR1cm4uc3R5bGUudGV4dEFsaWduID0gJ3JpZ2h0J1xuICAgICAgYm9hcmQua2V5cy5yZXR1cm4uc3R5bGUucGFkZGluZ1JpZ2h0ID0gaW9zLnB4KDEyKSArICdweCdcblxuXG4gICAgICBib2FyZC5rZXlzLnNwYWNlLmNvbnN0cmFpbnRzLmxlYWRpbmcgPSBbYm9hcmQua2V5cy5udW1iZXJzLCBzcGVjcy5zcGFjZV1cbiAgICAgIGJvYXJkLmtleXMuc3BhY2UuY29uc3RyYWludHMudHJhaWxpbmcgPSBbYm9hcmQua2V5cy5jb20sIHNwZWNzLnNwYWNlXVxuXG5cbiAgICAgIGJvYXJkLmtleXMuY2FwcyA9IG5ldyBTaGlmdFxuICAgICAgICBuYW1lOidjYXBzJ1xuICAgICAgICBjYXBzOiB0cnVlXG4gICAgICAgIGNvbnN0cmFpbnRzOlxuICAgICAgICAgIGhlaWdodDpzcGVjcy5zcGVjaWFsS2V5SGVpZ2h0XG4gICAgICAgICAgd2lkdGg6MTE5XG4gICAgICAgICAgYm90dG9tRWRnZXM6Ym9hcmQua2V5c0FycmF5W3JvdzFCcmVha11cbiAgICAgIGJvYXJkLmtleXMuY2Fwcy5pY29uLmRlc3Ryb3koKVxuICAgICAgYm9hcmQua2V5cy5jYXBzLmh0bWwgPSAnY2FwcyBsb2NrJ1xuICAgICAgYm9hcmQua2V5cy5jYXBzLnN0eWxlLmxpbmVIZWlnaHQgPSBpb3MucHgoNzApICsgJ3B4J1xuICAgICAgYm9hcmQua2V5cy5jYXBzLnN0eWxlLnRleHRBbGlnbiA9ICdsZWZ0J1xuICAgICAgYm9hcmQua2V5cy5jYXBzLnN0eWxlLnBhZGRpbmdMZWZ0ID0gaW9zLnB4KDEyKSArICdweCdcblxuXG5cbiAgICAgIGJvYXJkLmtleXMuY2Fwcy5kb3duID0gLT5cbiAgICAgICAgaWYgYm9hcmQuaXNDYXBzTG9ja1xuICAgICAgICAgIGJvYXJkLmlzQ2Fwc0xvY2sgPSBmYWxzZVxuICAgICAgICBlbHNlXG4gICAgICAgICAgYm9hcmQuY2Fwc0xvY2soKVxuICAgICAgYm9hcmQua2V5cy5jYXBzLm9uIEV2ZW50cy5Ub3VjaEVuZCwgLT5cbiAgICAgICAgYm9hcmQua2V5cy5jYXBzLmRvd24oKVxuICAgICAgYm9hcmQua2V5cy5jYXBzLnVwID0gLT5cbiAgICAgICAgbm90aGluZ0hhcHBlbnMgPSB0cnVlXG5cbiAgICAgIGJvYXJkLmtleXMudGFiID0gbmV3IFRhYlxuICAgICAgICBuYW1lOid0YWInXG4gICAgICAgIGNvbnN0cmFpbnRzOlxuICAgICAgICAgIGhlaWdodDpzcGVjcy5zcGVjaWFsS2V5SGVpZ2h0XG4gICAgICAgICAgd2lkdGg6MTA2XG4gICAgICAgICAgYm90dG9tRWRnZXM6Ym9hcmQua2V5c0FycmF5WzBdXG5cbiAgICAgIGlvcy5sYXlvdXQuc2V0KClcbiAgaWYgaW9zLmlzUGhvbmUoKVxuICAgIHBvcFVwID0gaW9zLnV0aWxzLnN2Zyhpb3MuYXNzZXRzLmtleVBvcFVwW3NldHVwLnN0eWxlXVtpb3MuZGV2aWNlLm5hbWVdKVxuICAgIGJvYXJkLnBvcFVwID0gbmV3IExheWVyXG4gICAgICBoZWlnaHQ6cG9wVXAuaGVpZ2h0XG4gICAgICB3aWR0aDpwb3BVcC53aWR0aFxuICAgICAgYmFja2dyb3VuZENvbG9yOid0cmFuc3BhcmVudCdcbiAgICAgIG5hbWU6Jy5wb3BVcCdcbiAgICAgIHN1cGVyTGF5ZXI6Ym9hcmQuYXJlYVxuICAgICAgdmlzaWJsZTpmYWxzZVxuXG4gICAgYm9hcmQucG9wVXAuc3ZnID0gbmV3IExheWVyXG4gICAgICBodG1sOnBvcFVwLnN2Z1xuICAgICAgaGVpZ2h0OnBvcFVwLmhlaWdodFxuICAgICAgd2lkdGg6cG9wVXAud2lkdGhcbiAgICAgIHN1cGVyTGF5ZXI6Ym9hcmQucG9wVXBcbiAgICAgIG5hbWU6Jy5zdmcnXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6J3RyYW5zcGFyZW50J1xuXG4gICAgYm9hcmQucG9wVXAudGV4dCA9IG5ldyBpb3MuVGV4dFxuICAgICAgdGV4dDonQSdcbiAgICAgIHN1cGVyTGF5ZXI6Ym9hcmQucG9wVXBcbiAgICAgIGZvbnRTaXplOnNwZWNzLnBvcFVwQ2hhclxuICAgICAgZm9udFdlaWdodDozMDBcbiAgICAgIGNvbG9yOmNvbG9ycy5jb2xvclxuICAgICAgdGV4dEFsaWduOidjZW50ZXInXG4gICAgICBjb25zdHJhaW50czpcbiAgICAgICAgYWxpZ246J2hvcml6b250YWwnXG4gICAgICAgIHRvcDpzcGVjcy5wb3BVcFRvcFxuICAgICAgICB3aWR0aDppb3MucHQocG9wVXAud2lkdGgpXG5cbiAgICBib2FyZC5wb3BVcC5jZW50ZXIoKVxuICAgIHN3aXRjaCBpb3MuZGV2aWNlLm5hbWVcbiAgICAgIHdoZW4gJ2lwaG9uZS02cy1wbHVzJ1xuICAgICAgICBib2FyZC5wb3BVcC53aWR0aCA9IGJvYXJkLnBvcFVwLndpZHRoIC0gMThcbiAgICAgICAgYm9hcmQucG9wVXAuaGVpZ2h0ID0gYm9hcmQucG9wVXAuaGVpZ2h0IC0gMjRcbiAgICAgICAgYm9hcmQucG9wVXAuc3ZnLnggPSBpb3MucHgoLTMpXG4gICAgICAgIGJvYXJkLnBvcFVwLnN2Zy55ID0gaW9zLnB4KC0zKVxuICAgICAgd2hlbiAnaXBob25lLTZzJ1xuICAgICAgICBib2FyZC5wb3BVcC53aWR0aCA9IGJvYXJkLnBvcFVwLndpZHRoIC0gMTJcbiAgICAgICAgYm9hcmQucG9wVXAuaGVpZ2h0ID0gYm9hcmQucG9wVXAuaGVpZ2h0IC0gMTJcbiAgICAgICAgYm9hcmQucG9wVXAuc3ZnLnggPSBpb3MucHgoLTMpXG4gICAgICAgIGJvYXJkLnBvcFVwLnN2Zy55ID0gaW9zLnB4KC0yKVxuICAgICAgd2hlbiAnaXBob25lLTUnXG4gICAgICAgIGJvYXJkLnBvcFVwLndpZHRoID0gYm9hcmQucG9wVXAud2lkdGggLSAxMlxuICAgICAgICBib2FyZC5wb3BVcC5oZWlnaHQgPSBib2FyZC5wb3BVcC5oZWlnaHQgLSAxMlxuICAgICAgICBib2FyZC5wb3BVcC5zdmcueCA9IGlvcy5weCgtMylcbiAgICAgICAgYm9hcmQucG9wVXAuc3ZnLnkgPSBpb3MucHgoLTIpXG5cbiAgICBjYXBpdGFsaXplS2V5cygpXG4gIGJvYXJkLnN3aXRjaCA9IChzdGF0ZSkgLT5cbiAgICBzd2l0Y2ggc3RhdGVcbiAgICAgIHdoZW4gXCJsZXR0ZXJzXCJcbiAgICAgICAgYm9hcmQuc3dpdGNoTGV0dGVycygpXG5cbiAgYm9hcmQuc3dpdGNoKFwibGV0dGVyc1wiKVxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIgJ2tleWRvd24nLCAoZSkgLT5cbiAgICBpZiBhcnJheU9mQ29kZXMuaW5kZXhPZihlLmtleUNvZGUudG9TdHJpbmcoKSkgIT0gLTFcbiAgICAgIGtleSA9IGJvYXJkLmtleXNbY29kZU1hcFtlLmtleUNvZGVdLnRvTG93ZXJDYXNlKCldXG4gICAgICBpZiBrZXkgdGhlbiBrZXkuZG93bigpXG4gICAgICBpZiBpb3MuaXNQYWQoKVxuICAgICAgICBpZiBrZXkgPT0gYm9hcmQua2V5cy5zaGlmdCB8fCBrZXkgPT0gYm9hcmQua2V5cy5zaGlmdGFsdFxuICAgICAgICAgIGJvYXJkLmtleXMuc2hpZnQuZG93bigpXG4gICAgICAgICAgYm9hcmQua2V5cy5zaGlmdGFsdC5pY29uLnRvZ2dsZSgnb24nKVxuICAgICAgICAgIGhhbmRsZUtleUNvbG9yKGJvYXJkLmtleXMuc2hpZnRhbHQpXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIgJ2tleXVwJywgKGUpIC0+XG4gICAgaWYgYXJyYXlPZkNvZGVzLmluZGV4T2YoZS5rZXlDb2RlLnRvU3RyaW5nKCkpICE9IC0xXG4gICAgICBrZXkgPSBib2FyZC5rZXlzW2NvZGVNYXBbZS5rZXlDb2RlXS50b0xvd2VyQ2FzZSgpXVxuICAgICAgaWYga2V5IHRoZW4ga2V5LnVwKClcbiAgICAgIGlmIGlvcy5pc1BhZCgpXG4gICAgICAgIGlmIGtleSA9PSBib2FyZC5rZXlzLnNoaWZ0IHx8IGtleSA9PSBib2FyZC5rZXlzLnNoaWZ0YWx0XG4gICAgICAgICAgYm9hcmQua2V5cy5zaGlmdC51cCgpXG4gICAgICAgICAgYm9hcmQua2V5cy5zaGlmdGFsdC5pY29uLnRvZ2dsZSgnb2ZmJylcbiAgICAgICAgICBoYW5kbGVLZXlDb2xvcihib2FyZC5rZXlzLnNoaWZ0YWx0KVxuICBjYXBpdGFsaXplS2V5cygpXG4gIHJldHVybiBib2FyZFxuIiwiIyBVdGlsc1xuXG5pb3MgPSByZXF1aXJlICdpb3Mta2l0J1xuXG5leHBvcnRzLmRlZmF1bHRzID0ge1xuXHRhbmltYXRpb25zOiB7XG5cdFx0dGFyZ2V0OnVuZGVmaW5lZFxuXHRcdGNvbnN0cmFpbnRzOiB1bmRlZmluZWRcblx0XHRjdXJ2ZSA6IFwiZWFzZS1pbi1vdXRcIlxuXHRcdGN1cnZlT3B0aW9uczogdW5kZWZpbmVkXG5cdFx0dGltZToxXG5cdFx0ZGVsYXk6MFxuXHRcdHJlcGVhdDp1bmRlZmluZWRcblx0XHRjb2xvck1vZGVsOnVuZGVmaW5lZFxuXHRcdHN0YWdnZXI6dW5kZWZpbmVkXG5cdFx0ZmFkZU91dDpmYWxzZVxuXHRcdGZhZGVJbjpmYWxzZVxuXHR9XG59XG5cbmxheW91dCA9IChhcnJheSkgLT5cblx0c2V0dXAgPSB7fVxuXHR0YXJnZXRMYXllcnMgPSBbXVxuXHRibHVlcHJpbnQgPSBbXVxuXHRpZiBhcnJheVxuXHRcdGZvciBpIGluIE9iamVjdC5rZXlzKGV4cG9ydHMuZGVmYXVsdHMuYW5pbWF0aW9ucylcblx0XHRcdGlmIGFycmF5W2ldXG5cdFx0XHRcdHNldHVwW2ldID0gYXJyYXlbaV1cblx0XHRcdGVsc2Vcblx0XHRcdFx0c2V0dXBbaV0gPSBleHBvcnRzLmRlZmF1bHRzLmFuaW1hdGlvbnNbaV1cblxuXHRpZiBzZXR1cC50YXJnZXRcblx0XHRpZiBzZXR1cC50YXJnZXQubGVuZ3RoXG5cdFx0XHR0YXJnZXRMYXllcnMgPSBzZXR1cC50YXJnZXRcblx0XHRlbHNlXG5cdFx0XHR0YXJnZXRMYXllcnMucHVzaCBzZXR1cC50YXJnZXRcblx0ZWxzZVxuXHRcdHRhcmdldExheWVycyA9IEZyYW1lci5DdXJyZW50Q29udGV4dC5sYXllcnNcblxuXHRpZiBzZXR1cC50YXJnZXRcblx0XHRpZiBzZXR1cC5jb25zdHJhaW50c1xuXHRcdFx0Zm9yIG5ld0NvbnN0cmFpbnQgaW4gT2JqZWN0LmtleXMoc2V0dXAuY29uc3RyYWludHMpXG5cdFx0XHRcdHNldHVwLnRhcmdldC5jb25zdHJhaW50c1tuZXdDb25zdHJhaW50XSA9IHNldHVwLmNvbnN0cmFpbnRzW25ld0NvbnN0cmFpbnRdXG5cblxuXHQjVHJhbnNsYXRlIG5ldyBjb25zdHJhaW50c1xuXHRmb3IgbGF5ZXIsIGluZGV4IGluIHRhcmdldExheWVyc1xuXHRcdGxheWVyLmNhbGN1bGF0ZWRQb3NpdGlvbiA9IHt9XG5cdFx0aWYgbGF5ZXIuY29uc3RyYWludHNcblxuXHRcdFx0cHJvcHMgPSB7fVxuXHRcdFx0bGF5ZXIuc3VwZXJGcmFtZSA9IHt9XG5cblx0XHRcdGlmIGxheWVyLnN1cGVyTGF5ZXJcblx0XHRcdFx0bGF5ZXIuc3VwZXJGcmFtZS5oZWlnaHQgPSBsYXllci5zdXBlckxheWVyLmhlaWdodFxuXHRcdFx0XHRsYXllci5zdXBlckZyYW1lLndpZHRoID0gbGF5ZXIuc3VwZXJMYXllci53aWR0aFxuXHRcdFx0ZWxzZVxuXHRcdFx0XHRsYXllci5zdXBlckZyYW1lLmhlaWdodCA9IGlvcy5kZXZpY2UuaGVpZ2h0XG5cdFx0XHRcdGxheWVyLnN1cGVyRnJhbWUud2lkdGggPSBpb3MuZGV2aWNlLndpZHRoXG5cblx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzLmxlYWRpbmcgIT0gdW5kZWZpbmVkICYmIGxheWVyLmNvbnN0cmFpbnRzLnRyYWlsaW5nICE9IHVuZGVmaW5lZFxuXHRcdFx0XHRsYXllci5jb25zdHJhaW50cy5hdXRvV2lkdGggPSB7fVxuXG5cdFx0XHRpZiBsYXllci5jb25zdHJhaW50cy50b3AgIT0gdW5kZWZpbmVkICYmIGxheWVyLmNvbnN0cmFpbnRzLmJvdHRvbSAhPSB1bmRlZmluZWRcblx0XHRcdFx0bGF5ZXIuY29uc3RyYWludHMuYXV0b0hlaWdodCA9IHt9XG5cblx0XHRcdCMgU2l6ZSBjb25zdHJhaW50c1xuXHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHMud2lkdGggIT0gdW5kZWZpbmVkXG5cdFx0XHRcdHByb3BzLndpZHRoID0gaW9zLnV0aWxzLnB4KGxheWVyLmNvbnN0cmFpbnRzLndpZHRoKVxuXHRcdFx0ZWxzZVxuXHRcdFx0XHRwcm9wcy53aWR0aCA9IGxheWVyLndpZHRoXG5cblx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzLmhlaWdodCAhPSB1bmRlZmluZWRcblx0XHRcdFx0cHJvcHMuaGVpZ2h0ID0gaW9zLnV0aWxzLnB4KGxheWVyLmNvbnN0cmFpbnRzLmhlaWdodClcblx0XHRcdGVsc2Vcblx0XHRcdFx0cHJvcHMuaGVpZ2h0ID0gbGF5ZXIuaGVpZ2h0XG5cblx0XHRcdCMgUG9zaXRpb25pbmcgY29uc3RyYWludHNcblx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzLmxlYWRpbmcgIT0gdW5kZWZpbmVkXG5cdFx0XHRcdCNJZiBpdCdzIGEgbnVtYmVyYFxuXHRcdFx0XHRpZiBsYXllci5jb25zdHJhaW50cy5sZWFkaW5nID09IHBhcnNlSW50KGxheWVyLmNvbnN0cmFpbnRzLmxlYWRpbmcsIDEwKVxuXHRcdFx0XHRcdHByb3BzLnggPSBpb3MudXRpbHMucHgobGF5ZXIuY29uc3RyYWludHMubGVhZGluZylcblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdCNJZiBpdCdzIGEgbGF5ZXJcblx0XHRcdFx0XHRpZiBsYXllci5jb25zdHJhaW50cy5sZWFkaW5nLmxlbmd0aCA9PSB1bmRlZmluZWRcblx0XHRcdFx0XHRcdHByb3BzLnggPSBsYXllci5jb25zdHJhaW50cy5sZWFkaW5nLmNhbGN1bGF0ZWRQb3NpdGlvbi54ICsgbGF5ZXIuY29uc3RyYWludHMubGVhZGluZy5jYWxjdWxhdGVkUG9zaXRpb24ud2lkdGhcblx0XHRcdFx0XHQjSWYgaXQncyBhIHJlbGF0aW9uc2hpcFxuXHRcdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRcdHByb3BzLnggPSBsYXllci5jb25zdHJhaW50cy5sZWFkaW5nWzBdLmNhbGN1bGF0ZWRQb3NpdGlvbi54ICsgbGF5ZXIuY29uc3RyYWludHMubGVhZGluZ1swXS5jYWxjdWxhdGVkUG9zaXRpb24ud2lkdGggKyBpb3MudXRpbHMucHgobGF5ZXIuY29uc3RyYWludHMubGVhZGluZ1sxXSlcblxuXHRcdFx0IyBPcHBvc2luZyBjb25zdHJhaW50cyBoYW5kbGVyXG5cdFx0XHRpZiBsYXllci5jb25zdHJhaW50cy5hdXRvV2lkdGggIT0gdW5kZWZpbmVkXG5cdFx0XHRcdGxheWVyLmNvbnN0cmFpbnRzLmF1dG9XaWR0aC5zdGFydFggPSBwcm9wcy54XG5cblx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzLnRyYWlsaW5nICE9IHVuZGVmaW5lZFxuXHRcdFx0XHQjSWYgaXQncyBhIG51bWJlclxuXHRcdFx0XHRpZiBsYXllci5jb25zdHJhaW50cy50cmFpbGluZyA9PSBwYXJzZUludChsYXllci5jb25zdHJhaW50cy50cmFpbGluZywgMTApXG5cdFx0XHRcdFx0cHJvcHMueCA9IGxheWVyLnN1cGVyRnJhbWUud2lkdGggLSBpb3MudXRpbHMucHgobGF5ZXIuY29uc3RyYWludHMudHJhaWxpbmcpIC0gcHJvcHMud2lkdGhcblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdCNJZiBpdCdzIGEgbGF5ZXJcblx0XHRcdFx0XHRpZiBsYXllci5jb25zdHJhaW50cy50cmFpbGluZy5sZW5ndGggPT0gdW5kZWZpbmVkXG5cdFx0XHRcdFx0XHRwcm9wcy54ID0gbGF5ZXIuY29uc3RyYWludHMudHJhaWxpbmcuY2FsY3VsYXRlZFBvc2l0aW9uLnggLSBwcm9wcy53aWR0aFxuXHRcdFx0XHRcdCNJZiBpdCdzIGEgcmVsYXRpb25zaGlwXG5cdFx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdFx0cHJvcHMueCA9IGxheWVyLmNvbnN0cmFpbnRzLnRyYWlsaW5nWzBdLmNhbGN1bGF0ZWRQb3NpdGlvbi54IC0gaW9zLnV0aWxzLnB4KGxheWVyLmNvbnN0cmFpbnRzLnRyYWlsaW5nWzFdKSAtIHByb3BzLndpZHRoXG5cblx0XHRcdCMgT3Bwb3NpbmcgY29uc3RyYWludHMgaGFuZGxlclxuXHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHMuYXV0b1dpZHRoICE9IHVuZGVmaW5lZFxuXHRcdFx0XHRsYXllci5jb25zdHJhaW50cy5hdXRvV2lkdGguY2FsY3VsYXRlZFBvc2l0aW9uWCA9IHByb3BzLnhcblxuXHRcdFx0XHQjI3BlcmZvcm0gYXV0b3NpemVcblx0XHRcdFx0cHJvcHMueCA9IGxheWVyLmNvbnN0cmFpbnRzLmF1dG9XaWR0aC5zdGFydFhcblx0XHRcdFx0cHJvcHMud2lkdGggPSBsYXllci5jb25zdHJhaW50cy5hdXRvV2lkdGguY2FsY3VsYXRlZFBvc2l0aW9uWCAtIGxheWVyLmNvbnN0cmFpbnRzLmF1dG9XaWR0aC5zdGFydFggKyBwcm9wcy53aWR0aFxuXG5cdFx0XHRpZiBsYXllci5jb25zdHJhaW50cy50b3AgIT0gdW5kZWZpbmVkXG5cdFx0XHRcdCNJZiBpdCdzIGEgbnVtYmVyXG5cdFx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzLnRvcCA9PSBwYXJzZUludChsYXllci5jb25zdHJhaW50cy50b3AsIDEwKVxuXHRcdFx0XHRcdHByb3BzLnkgPSBpb3MudXRpbHMucHgobGF5ZXIuY29uc3RyYWludHMudG9wKVxuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0I0lmIGl0J3MgYSBsYXllclxuXHRcdFx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzLnRvcC5sZW5ndGggPT0gdW5kZWZpbmVkXG5cdFx0XHRcdFx0XHRwcm9wcy55ID0gbGF5ZXIuY29uc3RyYWludHMudG9wLmNhbGN1bGF0ZWRQb3NpdGlvbi55ICsgbGF5ZXIuY29uc3RyYWludHMudG9wLmNhbGN1bGF0ZWRQb3NpdGlvbi5oZWlnaHRcblx0XHRcdFx0XHQjSWYgaXQncyBhIHJlbGF0aW9uc2hpcFxuXHRcdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRcdHByb3BzLnkgPSBsYXllci5jb25zdHJhaW50cy50b3BbMF0uY2FsY3VsYXRlZFBvc2l0aW9uLnkgKyBsYXllci5jb25zdHJhaW50cy50b3BbMF0uY2FsY3VsYXRlZFBvc2l0aW9uLmhlaWdodCArIGlvcy51dGlscy5weChsYXllci5jb25zdHJhaW50cy50b3BbMV0pXG5cblx0XHRcdCMgT3Bwb3NpbmcgY29uc3RyYWludHMgaGFuZGxlclxuXHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHMuYXV0b0hlaWdodCAhPSB1bmRlZmluZWRcblx0XHRcdFx0bGF5ZXIuY29uc3RyYWludHMuYXV0b0hlaWdodC5zdGFydFkgPSBwcm9wcy55XG5cblxuXHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHMuYm90dG9tICE9IHVuZGVmaW5lZFxuXHRcdFx0XHQjSWYgaXQncyBhIG51bWJlclxuXHRcdFx0XHRpZiBsYXllci5jb25zdHJhaW50cy5ib3R0b20gPT0gcGFyc2VJbnQobGF5ZXIuY29uc3RyYWludHMuYm90dG9tLCAxMClcblx0XHRcdFx0XHRwcm9wcy55ID0gbGF5ZXIuc3VwZXJGcmFtZS5oZWlnaHQgLSBpb3MudXRpbHMucHgobGF5ZXIuY29uc3RyYWludHMuYm90dG9tKSAtIHByb3BzLmhlaWdodFxuXG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHQjSWYgaXQncyBhIGxheWVyXG5cdFx0XHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHMuYm90dG9tLmxlbmd0aCA9PSB1bmRlZmluZWRcblx0XHRcdFx0XHRcdHByb3BzLnkgPSBsYXllci5jb25zdHJhaW50cy5ib3R0b20uY2FsY3VsYXRlZFBvc2l0aW9uLnkgLSBwcm9wcy5oZWlnaHRcblx0XHRcdFx0XHQjSWYgaXQncyBhIHJlbGF0aW9uc2hpcFxuXHRcdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRcdHByb3BzLnkgPSBsYXllci5jb25zdHJhaW50cy5ib3R0b21bMF0uY2FsY3VsYXRlZFBvc2l0aW9uLnkgLSAgaW9zLnV0aWxzLnB4KGxheWVyLmNvbnN0cmFpbnRzLmJvdHRvbVsxXSkgLSBwcm9wcy5oZWlnaHRcblxuXHRcdFx0IyBPcHBvc2luZyBjb25zdHJhaW50cyBoYW5kbGVyXG5cdFx0XHRpZiBsYXllci5jb25zdHJhaW50cy5hdXRvSGVpZ2h0ICE9IHVuZGVmaW5lZFxuXHRcdFx0XHRsYXllci5jb25zdHJhaW50cy5hdXRvSGVpZ2h0LmNhbGN1bGF0ZWRQb3NpdGlvblkgPSBwcm9wcy55XG5cdFx0XHRcdCMjIHBlcmZvcm0gYXV0b3NpemVcblx0XHRcdFx0cHJvcHMuaGVpZ2h0ID0gbGF5ZXIuY29uc3RyYWludHMuYXV0b0hlaWdodC5jYWxjdWxhdGVkUG9zaXRpb25ZIC0gbGF5ZXIuY29uc3RyYWludHMuYXV0b0hlaWdodC5zdGFydFkgKyBwcm9wcy5oZWlnaHRcblx0XHRcdFx0cHJvcHMueSA9IGxheWVyLmNvbnN0cmFpbnRzLmF1dG9IZWlnaHQuc3RhcnRZXG5cblxuXHRcdFx0IyBBbGlnbm1lbnQgY29uc3RyYWludHNcblx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzLmFsaWduICE9IHVuZGVmaW5lZFxuXHRcdFx0XHQjU2V0IHRoZSBjZW50ZXJpbmcgZnJhbWVcblx0XHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHMuYWxpZ24gPT0gXCJob3Jpem9udGFsXCJcblx0XHRcdFx0XHRwcm9wcy54ID0gbGF5ZXIuc3VwZXJGcmFtZS53aWR0aCAvIDIgLSBwcm9wcy53aWR0aCAvIDJcblxuXHRcdFx0XHRpZiBsYXllci5jb25zdHJhaW50cy5hbGlnbiA9PSBcInZlcnRpY2FsXCJcblx0XHRcdFx0XHRwcm9wcy55ID0gbGF5ZXIuc3VwZXJGcmFtZS5oZWlnaHQgLyAyIC0gcHJvcHMuaGVpZ2h0IC8gMlxuXG5cdFx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzLmFsaWduID09IFwiY2VudGVyXCJcblx0XHRcdFx0XHRwcm9wcy54ID0gbGF5ZXIuc3VwZXJGcmFtZS53aWR0aCAvIDIgLSBwcm9wcy53aWR0aCAvIDJcblx0XHRcdFx0XHRwcm9wcy55ID0gbGF5ZXIuc3VwZXJGcmFtZS5oZWlnaHQgLyAyIC0gcHJvcHMuaGVpZ2h0IC8gMlxuXG5cblx0XHRcdCMgQ2VudGVyaW5nIGNvbnN0cmFpbnRzXG5cdFx0XHRpZiBsYXllci5jb25zdHJhaW50cy5ob3Jpem9udGFsQ2VudGVyICE9IHVuZGVmaW5lZFxuXHRcdFx0XHRwcm9wcy54ID0gbGF5ZXIuY29uc3RyYWludHMuaG9yaXpvbnRhbENlbnRlci5jYWxjdWxhdGVkUG9zaXRpb24ueCArIChsYXllci5jb25zdHJhaW50cy5ob3Jpem9udGFsQ2VudGVyLmNhbGN1bGF0ZWRQb3NpdGlvbi53aWR0aCAtIHByb3BzLndpZHRoKSAvIDJcblxuXHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHMudmVydGljYWxDZW50ZXIgIT0gdW5kZWZpbmVkXG5cdFx0XHRcdHByb3BzLnkgPSBsYXllci5jb25zdHJhaW50cy52ZXJ0aWNhbENlbnRlci5jYWxjdWxhdGVkUG9zaXRpb24ueSArIChsYXllci5jb25zdHJhaW50cy52ZXJ0aWNhbENlbnRlci5jYWxjdWxhdGVkUG9zaXRpb24uaGVpZ2h0IC0gcHJvcHMuaGVpZ2h0KSAvIDJcblxuXHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHMuY2VudGVyICE9IHVuZGVmaW5lZFxuXHRcdFx0XHRwcm9wcy54ID0gbGF5ZXIuY29uc3RyYWludHMuY2VudGVyLmNhbGN1bGF0ZWRQb3NpdGlvbi54ICsgKGxheWVyLmNvbnN0cmFpbnRzLmNlbnRlci5jYWxjdWxhdGVkUG9zaXRpb24ud2lkdGggLSBwcm9wcy53aWR0aCkgLyAyXG5cdFx0XHRcdHByb3BzLnkgPSBsYXllci5jb25zdHJhaW50cy5jZW50ZXIuY2FsY3VsYXRlZFBvc2l0aW9uLnkgKyAobGF5ZXIuY29uc3RyYWludHMuY2VudGVyLmNhbGN1bGF0ZWRQb3NpdGlvbi5oZWlnaHQgLSBwcm9wcy5oZWlnaHQpIC8gMlxuXG5cdFx0XHQjIEFsaWduaW5nIGNvbnN0cmFpbnRzXG5cdFx0XHRpZiBsYXllci5jb25zdHJhaW50cy5sZWFkaW5nRWRnZXMgIT0gdW5kZWZpbmVkXG5cdFx0XHRcdHByb3BzLnggPSBsYXllci5jb25zdHJhaW50cy5sZWFkaW5nRWRnZXMuY2FsY3VsYXRlZFBvc2l0aW9uLnhcblxuXHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHMudHJhaWxpbmdFZGdlcyAhPSB1bmRlZmluZWRcblx0XHRcdFx0cHJvcHMueCA9IGxheWVyLmNvbnN0cmFpbnRzLnRyYWlsaW5nRWRnZXMuY2FsY3VsYXRlZFBvc2l0aW9uLnggLSBwcm9wcy53aWR0aCArIGxheWVyLmNvbnN0cmFpbnRzLnRyYWlsaW5nRWRnZXMuY2FsY3VsYXRlZFBvc2l0aW9uLndpZHRoXG5cblxuXHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHMudG9wRWRnZXMgIT0gdW5kZWZpbmVkXG5cdFx0XHRcdHByb3BzLnkgPSBsYXllci5jb25zdHJhaW50cy50b3BFZGdlcy5jYWxjdWxhdGVkUG9zaXRpb24ueVxuXG5cdFx0XHRpZiBsYXllci5jb25zdHJhaW50cy5ib3R0b21FZGdlcyAhPSB1bmRlZmluZWRcblx0XHRcdFx0cHJvcHMueSA9IGxheWVyLmNvbnN0cmFpbnRzLmJvdHRvbUVkZ2VzLmNhbGN1bGF0ZWRQb3NpdGlvbi55IC0gcHJvcHMuaGVpZ2h0ICsgbGF5ZXIuY29uc3RyYWludHMuYm90dG9tRWRnZXMuY2FsY3VsYXRlZFBvc2l0aW9uLmhlaWdodFxuXG5cblx0XHRcdGxheWVyLmNhbGN1bGF0ZWRQb3NpdGlvbiA9IHByb3BzXG5cdFx0ZWxzZVxuXHRcdFx0bGF5ZXIuY2FsY3VsYXRlZFBvc2l0aW9uID0gbGF5ZXIucHJvcHNcblxuXHRcdGJsdWVwcmludC5wdXNoIGxheWVyXG5cblxuXHRyZXR1cm4gYmx1ZXByaW50XG5cbmV4cG9ydHMuc2V0ID0gKGFycmF5KSAtPlxuXHRzZXR1cCA9IHt9XG5cdHByb3BzID0ge31cblx0aWYgYXJyYXlcblx0XHRmb3IgaSBpbiBPYmplY3Qua2V5cyhleHBvcnRzLmRlZmF1bHRzLmFuaW1hdGlvbnMpXG5cdFx0XHRpZiBhcnJheVtpXVxuXHRcdFx0XHRzZXR1cFtpXSA9IGFycmF5W2ldXG5cdFx0XHRlbHNlXG5cdFx0XHRcdHNldHVwW2ldID0gZXhwb3J0cy5kZWZhdWx0cy5hbmltYXRpb25zW2ldXG5cblx0Ymx1ZXByaW50ID0gbGF5b3V0KGFycmF5KVxuXG5cdGZvciBsYXllciwgaW5kZXggaW4gYmx1ZXByaW50XG5cdFx0Zm9yIGtleSBpbiBPYmplY3Qua2V5cyhsYXllci5jYWxjdWxhdGVkUG9zaXRpb24pXG5cdFx0XHRsYXllcltrZXldID0gbGF5ZXIuY2FsY3VsYXRlZFBvc2l0aW9uW2tleV1cblxuZXhwb3J0cy5hbmltYXRlID0gKGFycmF5KSAtPlxuXHRzZXR1cCA9IHt9XG5cdHByb3BzID0ge31cblx0aWYgYXJyYXlcblx0XHRmb3IgaSBpbiBPYmplY3Qua2V5cyhleHBvcnRzLmRlZmF1bHRzLmFuaW1hdGlvbnMpXG5cdFx0XHRpZiBhcnJheVtpXVxuXHRcdFx0XHRzZXR1cFtpXSA9IGFycmF5W2ldXG5cdFx0XHRlbHNlXG5cdFx0XHRcdHNldHVwW2ldID0gZXhwb3J0cy5kZWZhdWx0cy5hbmltYXRpb25zW2ldXG5cblx0Ymx1ZXByaW50ID0gbGF5b3V0KGFycmF5KVxuXG5cdGZvciBsYXllciwgaW5kZXggaW4gYmx1ZXByaW50XG5cdFx0I1RpbWluZ1xuXHRcdGRlbGF5ID0gc2V0dXAuZGVsYXlcblx0XHRpZiBzZXR1cC5zdGFnZ2VyXG5cdFx0XHRzdGFnID0gc2V0dXAuc3RhZ2dlclxuXHRcdFx0ZGVsYXkgPSAoKGluZGV4KSAqIHN0YWcpICsgZGVsYXlcblxuXHRcdGlmIHNldHVwLmZhZGVPdXRcblx0XHRcdGlmIGxheWVyID09IHNldHVwLmZhZGVPdXRcblx0XHRcdFx0bGF5ZXIuY2FsY3VsYXRlZFBvc2l0aW9uLm9wYWNpdHkgPSAwXG5cblx0XHRpZiBzZXR1cC5mYWRlSW5cblx0XHRcdGxheWVyLmNhbGN1bGF0ZWRQb3NpdGlvbi5vcGFjaXR5ID0gMVxuXG5cdFx0bGF5ZXIuYW5pbWF0ZVxuXHRcdFx0cHJvcGVydGllczpsYXllci5jYWxjdWxhdGVkUG9zaXRpb25cblx0XHRcdHRpbWU6c2V0dXAudGltZVxuXHRcdFx0ZGVsYXk6ZGVsYXlcblx0XHRcdGN1cnZlOnNldHVwLmN1cnZlXG5cdFx0XHRyZXBlYXQ6c2V0dXAucmVwZWF0XG5cdFx0XHRjb2xvck1vZGVsOnNldHVwLmNvbG9yTW9kZWxcblx0XHRcdGN1cnZlT3B0aW9uczpzZXR1cC5jdXJ2ZU9wdGlvbnNcblxuXHRcdGxheWVyLmNhbGN1bGF0ZWRQb3NpdGlvbiA9IHByb3BzXG4iLCJpb3MgPSByZXF1aXJlIFwiaW9zLWtpdFwiXG5cbiMgQnVpbGQgTGlicmFyeSAgUHJvcGVydGllc1xubGF5ZXIgPSBuZXcgTGF5ZXJcbmV4cG9ydHMubGF5ZXJQcm9wcyA9IE9iamVjdC5rZXlzKGxheWVyLnByb3BzKVxuZXhwb3J0cy5sYXllclByb3BzLnB1c2ggXCJzdXBlckxheWVyXCJcbmV4cG9ydHMubGF5ZXJQcm9wcy5wdXNoIFwiY29uc3RyYWludHNcIlxuZXhwb3J0cy5sYXllclN0eWxlcyA9IE9iamVjdC5rZXlzKGxheWVyLnN0eWxlKVxubGF5ZXIuZGVzdHJveSgpXG5cbmV4cG9ydHMuYXNzZXRzID0ge1xuXHRzaGVldFRpcDpcIjw/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyc/PlxuXHQ8c3ZnIHdpZHRoPScyN3B4JyBoZWlnaHQ9JzEzcHgnIHZpZXdCb3g9JzAgMCAyNyAxMycgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJz5cblx0ICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMzkuMSAoMzE3MjApIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHQgICAgPHRpdGxlPlRyaWFuZ2xlPC90aXRsZT5cblx0ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHQgICAgPGRlZnM+PC9kZWZzPlxuXHQgICAgPGcgaWQ9J2lPUy1LaXQnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnPlxuXHQgICAgICAgIDxnIGlkPSdOYXZpZ2F0aW9uLUJhci1Db3B5JyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtMjYzNC4wMDAwMDAsIC0xMjQuMDAwMDAwKScgZmlsbD0nI0ZGRkZGRic+XG5cdCAgICAgICAgICAgIDxwYXRoIGQ9J00yNjQ0LjcxOTE2LDEyNS44ODM4MzQgQzI2NDYuMjU0OTgsMTI0LjI5MTEzNiAyNjQ4Ljc0NTg1LDEyNC4yOTE5OTIgMjY1MC4yODA4NCwxMjUuODgzODM0IEwyNjYxLDEzNyBMMjYzNCwxMzcgTDI2NDQuNzE5MTYsMTI1Ljg4MzgzNCBaJyBpZD0nVHJpYW5nbGUnPjwvcGF0aD5cblx0ICAgICAgICA8L2c+XG5cdCAgICA8L2c+XG5cdDwvc3ZnPlwiXG5cdGJsdWV0b290aDogXCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0XHQ8c3ZnIHdpZHRoPSc3cHgnIGhlaWdodD0nMTNweCcgdmlld0JveD0nMCAwIDggMTUnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayc+XG5cdFx0XHQ8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNi4xICgyNjMxMykgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdFx0XHQ8dGl0bGU+Qmx1ZXRvb3RoPC90aXRsZT5cblx0XHRcdDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdFx0PGRlZnM+PC9kZWZzPlxuXHRcdFx0XHQ8ZyBpZD0nU3RhdHVzLUljb25zLShXaGl0ZSknIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC0xMzcuMDAwMDAwLCAwLjAwMDAwMCknIGZpbGw9JyNGRkYnPlxuXHRcdFx0XHRcdDxwYXRoIGQ9J00xNDAuNSwxNC41IEwxNDUsMTAuMjUgTDE0MS44LDcuNSBMMTQ1LDQuNzUgTDE0MC41LDAuNSBMMTQwLjUsNi4wNzE0Mjg1NyBMMTM3LjgsMy43NSBMMTM3LDQuNSBMMTQwLjI1ODMzMyw3LjM3NSBMMTM3LDEwLjI1IEwxMzcuOCwxMSBMMTQwLjUsOC42Nzg1NzE0MyBMMTQwLjUsMTQuNSBaIE0xNDEuNSwzIEwxNDMuMzY2NjY3LDQuNzUgTDE0MS41LDYuMjUgTDE0MS41LDMgWiBNMTQxLjUsOC41IEwxNDMuMzY2NjY3LDEwLjI1IEwxNDEuNSwxMiBMMTQxLjUsOC41IFonIGlkPSdCbHVldG9vdGgnPjwvcGF0aD5cblx0XHRcdFx0PC9nPlxuXHRcdDwvc3ZnPlwiXG5cdGJhdHRlcnlIaWdoIDogXCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0XHQ8c3ZnIHdpZHRoPScyNXB4JyBoZWlnaHQ9JzEwcHgnIHZpZXdCb3g9JzAgMCAyNSAxMCcgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJz5cblx0XHQgICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjcuMiAoMjgyNzYpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdCAgICA8dGl0bGU+QmF0dGVyeTwvdGl0bGU+XG5cdFx0ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdCAgICA8ZGVmcz48L2RlZnM+XG5cdFx0ICAgIDxnIGlkPSdTeW1ib2xzJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJz5cblx0XHQgICAgICAgIDxnIGlkPSdTdGF0dXMtQmFyL0JsYWNrLzEwMCUnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC0zNDUuMDAwMDAwLCAtNS4wMDAwMDApJyBmaWxsPScjMDMwMzAzJz5cblx0XHQgICAgICAgICAgICA8cGF0aCBkPSdNMzQ2LjQ5MzcxMyw1LjUgQzM0NS42Njg3NTgsNS41IDM0NSw2LjE2ODAyMTU1IDM0NSw3LjAwNTMwMzI0IEwzNDUsMTMuNDk0Njk2OCBDMzQ1LDE0LjMyNjA1MjggMzQ1LjY3MzM4LDE1IDM0Ni40OTM3MTMsMTUgTDM2Ni4wMDYyODcsMTUgQzM2Ni44MzEyNDIsMTUgMzY3LjUsMTQuMzMxOTc4NCAzNjcuNSwxMy40OTQ2OTY4IEwzNjcuNSw3LjAwNTMwMzI0IEMzNjcuNSw2LjE3Mzk0NzIyIDM2Ni44MjY2Miw1LjUgMzY2LjAwNjI4Nyw1LjUgTDM0Ni40OTM3MTMsNS41IFogTTM2OCw4LjUgTDM2OCwxMiBMMzY4Ljc1LDEyIEMzNjkuMTY0MjE0LDEyIDM2OS41LDExLjY2NDQwNTMgMzY5LjUsMTEuMjU3NzQgTDM2OS41LDkuMjQyMjU5OTggQzM2OS41LDguODMyMzIxMTEgMzY5LjE2NzEwMSw4LjUgMzY4Ljc1LDguNSBMMzY4LDguNSBaIE0zNDYuNTA4MTUyLDYgQzM0NS45NTEzNjUsNiAzNDUuNSw2LjQ1Njk5NjkyIDM0NS41LDcuMDA4NDQwNTUgTDM0NS41LDEzLjQ5MTU1OTQgQzM0NS41LDE0LjA0ODUwNTggMzQ1Ljk0OTA1OCwxNC41IDM0Ni41MDgxNTIsMTQuNSBMMzY1Ljk5MTg0OCwxNC41IEMzNjYuNTQ4NjM1LDE0LjUgMzY3LDE0LjA0MzAwMzEgMzY3LDEzLjQ5MTU1OTQgTDM2Nyw3LjAwODQ0MDU1IEMzNjcsNi40NTE0OTQyMiAzNjYuNTUwOTQyLDYgMzY1Ljk5MTg0OCw2IEwzNDYuNTA4MTUyLDYgWiBNMzQ2LjUwNjc0NCw2LjUgQzM0Ni4yMjY4NzcsNi41IDM0Niw2LjcxNjM3MjAxIDM0Niw2Ljk5MjA5NTk1IEwzNDYsMTMuNTA3OTA0MSBDMzQ2LDEzLjc3OTY4MTEgMzQ2LjIzMDIyNSwxNCAzNDYuNTA2NzQ0LDE0IEwzNjUuOTkzMjU2LDE0IEMzNjYuMjczMTIzLDE0IDM2Ni41LDEzLjc4MzYyOCAzNjYuNSwxMy41MDc5MDQxIEwzNjYuNSw2Ljk5MjA5NTk1IEMzNjYuNSw2LjcyMDMxODg2IDM2Ni4yNjk3NzUsNi41IDM2NS45OTMyNTYsNi41IEwzNDYuNTA2NzQ0LDYuNSBaJyBpZD0nQmF0dGVyeSc+PC9wYXRoPlxuXHRcdCAgICAgICAgPC9nPlxuXHRcdCAgICA8L2c+XG5cdFx0PC9zdmc+XCJcblx0YmF0dGVyeU1pZCA6IFwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdFx0PHN2ZyB3aWR0aD0nMjVweCcgaGVpZ2h0PScxMHB4JyB2aWV3Qm94PScwIDAgMjUgMTAnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayc+XG5cdFx0ICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy43LjIgKDI4Mjc2KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHQgICAgPHRpdGxlPkJhdHRlcnk8L3RpdGxlPlxuXHRcdCAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHQgICAgPGRlZnM+PC9kZWZzPlxuXHRcdCAgICA8ZyBpZD0nU3ltYm9scycgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCc+XG5cdFx0ICAgICAgICA8ZyBpZD0nU3RhdHVzLUJhci9CbGFjay9Mb3ctUG93ZXInIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC0zNDUuMDAwMDAwLCAtNS4wMDAwMDApJyBmaWxsPScjMDMwMzAzJz5cblx0XHQgICAgICAgICAgICA8cGF0aCBkPSdNMzQ2LjQ5MzcxMyw1LjUgQzM0NS42Njg3NTgsNS41IDM0NSw2LjE2ODAyMTU1IDM0NSw3LjAwNTMwMzI0IEwzNDUsMTMuNDk0Njk2OCBDMzQ1LDE0LjMyNjA1MjggMzQ1LjY3MzM4LDE1IDM0Ni40OTM3MTMsMTUgTDM2Ni4wMDYyODcsMTUgQzM2Ni44MzEyNDIsMTUgMzY3LjUsMTQuMzMxOTc4NCAzNjcuNSwxMy40OTQ2OTY4IEwzNjcuNSw3LjAwNTMwMzI0IEMzNjcuNSw2LjE3Mzk0NzIyIDM2Ni44MjY2Miw1LjUgMzY2LjAwNjI4Nyw1LjUgTDM0Ni40OTM3MTMsNS41IFogTTM2OCw4LjUgTDM2OCwxMiBMMzY4Ljc1LDEyIEMzNjkuMTY0MjE0LDEyIDM2OS41LDExLjY2NDQwNTMgMzY5LjUsMTEuMjU3NzQgTDM2OS41LDkuMjQyMjU5OTggQzM2OS41LDguODMyMzIxMTEgMzY5LjE2NzEwMSw4LjUgMzY4Ljc1LDguNSBMMzY4LDguNSBaIE0zNDYuNTA4MTUyLDYgQzM0NS45NTEzNjUsNiAzNDUuNSw2LjQ1Njk5NjkyIDM0NS41LDcuMDA4NDQwNTUgTDM0NS41LDEzLjQ5MTU1OTQgQzM0NS41LDE0LjA0ODUwNTggMzQ1Ljk0OTA1OCwxNC41IDM0Ni41MDgxNTIsMTQuNSBMMzY1Ljk5MTg0OCwxNC41IEMzNjYuNTQ4NjM1LDE0LjUgMzY3LDE0LjA0MzAwMzEgMzY3LDEzLjQ5MTU1OTQgTDM2Nyw3LjAwODQ0MDU1IEMzNjcsNi40NTE0OTQyMiAzNjYuNTUwOTQyLDYgMzY1Ljk5MTg0OCw2IEwzNDYuNTA4MTUyLDYgWiBNMzQ2LjUwOTY1LDYuNSBDMzQ2LjIyODE3OCw2LjUgMzQ2LDYuNzE2MzcyMDEgMzQ2LDYuOTkyMDk1OTUgTDM0NiwxMy41MDc5MDQxIEMzNDYsMTMuNzc5NjgxMSAzNDYuMjI3NjUzLDE0IDM0Ni41MDk2NSwxNCBMMzU2LDE0IEwzNTYsNi41IEwzNDYuNTA5NjUsNi41IFonIGlkPSdCYXR0ZXJ5Jz48L3BhdGg+XG5cdFx0ICAgICAgICA8L2c+XG5cdFx0ICAgIDwvZz5cblx0XHQ8L3N2Zz5cIlxuXHRiYXR0ZXJ5TG93IDogXCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0XHQ8c3ZnIHdpZHRoPScyNXB4JyBoZWlnaHQ9JzEwcHgnIHZpZXdCb3g9JzAgMCAyNSAxMCcgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJz5cblx0XHQgICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjcuMiAoMjgyNzYpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdCAgICA8dGl0bGU+QmF0dGVyeTwvdGl0bGU+XG5cdFx0ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdCAgICA8ZGVmcz48L2RlZnM+XG5cdFx0ICAgIDxnIGlkPSdTeW1ib2xzJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJz5cblx0XHQgICAgICAgIDxnIGlkPSdTdGF0dXMtQmFyL0JsYWNrLzIwJScgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTM0NS4wMDAwMDAsIC01LjAwMDAwMCknIGZpbGw9JyMwMzAzMDMnPlxuXHRcdCAgICAgICAgICAgIDxwYXRoIGQ9J00zNDYuNDkzNzEzLDUuNSBDMzQ1LjY2ODc1OCw1LjUgMzQ1LDYuMTY4MDIxNTUgMzQ1LDcuMDA1MzAzMjQgTDM0NSwxMy40OTQ2OTY4IEMzNDUsMTQuMzI2MDUyOCAzNDUuNjczMzgsMTUgMzQ2LjQ5MzcxMywxNSBMMzY2LjAwNjI4NywxNSBDMzY2LjgzMTI0MiwxNSAzNjcuNSwxNC4zMzE5Nzg0IDM2Ny41LDEzLjQ5NDY5NjggTDM2Ny41LDcuMDA1MzAzMjQgQzM2Ny41LDYuMTczOTQ3MjIgMzY2LjgyNjYyLDUuNSAzNjYuMDA2Mjg3LDUuNSBMMzQ2LjQ5MzcxMyw1LjUgTDM0Ni40OTM3MTMsNS41IFogTTM2OCw4LjUgTDM2OCwxMiBMMzY4Ljc1LDEyIEMzNjkuMTY0MjE0LDEyIDM2OS41LDExLjY2NDQwNTMgMzY5LjUsMTEuMjU3NzQgTDM2OS41LDkuMjQyMjU5OTggQzM2OS41LDguODMyMzIxMTEgMzY5LjE2NzEwMSw4LjUgMzY4Ljc1LDguNSBMMzY4LDguNSBMMzY4LDguNSBaIE0zNDYuNTA4MTUyLDYgQzM0NS45NTEzNjUsNiAzNDUuNSw2LjQ1Njk5NjkyIDM0NS41LDcuMDA4NDQwNTUgTDM0NS41LDEzLjQ5MTU1OTQgQzM0NS41LDE0LjA0ODUwNTggMzQ1Ljk0OTA1OCwxNC41IDM0Ni41MDgxNTIsMTQuNSBMMzY1Ljk5MTg0OCwxNC41IEMzNjYuNTQ4NjM1LDE0LjUgMzY3LDE0LjA0MzAwMzEgMzY3LDEzLjQ5MTU1OTQgTDM2Nyw3LjAwODQ0MDU1IEMzNjcsNi40NTE0OTQyMiAzNjYuNTUwOTQyLDYgMzY1Ljk5MTg0OCw2IEwzNDYuNTA4MTUyLDYgWiBNMzQ2LjQ5MDQ3OSw2LjUgQzM0Ni4yMTk1OTUsNi41IDM0Niw2LjcxNjM3MjAxIDM0Niw2Ljk5MjA5NTk1IEwzNDYsMTMuNTA3OTA0MSBDMzQ2LDEzLjc3OTY4MTEgMzQ2LjIxNTA1NywxNCAzNDYuNDkwNDc5LDE0IEwzNTAsMTQgTDM1MCw2LjUgTDM0Ni40OTA0NzksNi41IFonIGlkPSdCYXR0ZXJ5Jz48L3BhdGg+XG5cdFx0ICAgICAgICA8L2c+XG5cdFx0ICAgIDwvZz5cblx0XHQ8L3N2Zz5cIlxuXHRiYW5uZXJCRyA6IHtcblx0XHRcImlwaG9uZS01XCI6IFwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdFx0XHQ8c3ZnIHdpZHRoPSczMjBweCcgaGVpZ2h0PSc2OHB4JyB2aWV3Qm94PScwIDAgMzIwIDY4JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnPlxuXHRcdFx0ICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy42LjEgKDI2MzEzKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHRcdCAgICA8dGl0bGU+aXBob25lNTwvdGl0bGU+XG5cdFx0XHQgICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0XHQgICAgPGRlZnM+PC9kZWZzPlxuXHRcdFx0ICAgIDxnIGlkPSdQYWdlLTEnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIGZpbGwtb3BhY2l0eT0nMC45Jz5cblx0XHRcdCAgICAgICAgPGcgaWQ9J2lQaG9uZS01LzVTLzVDJyBmaWxsPScjMUExQTFDJz5cblx0XHRcdCAgICAgICAgICAgIDxwYXRoIGQ9J00wLDAgTDMyMCwwIEwzMjAsNjggTDAsNjggTDAsMCBaIE0xNDIsNjEuMDA0ODgxNSBDMTQyLDU5Ljg5NzYxNiAxNDIuODk2Mjc5LDU5IDE0NC4wMDI0LDU5IEwxNzYuOTk3Niw1OSBDMTc4LjEwMzQ5NSw1OSAxNzksNTkuODkzODk5OCAxNzksNjEuMDA0ODgxNSBMMTc5LDYxLjk5NTExODUgQzE3OSw2My4xMDIzODQgMTc4LjEwMzcyMSw2NCAxNzYuOTk3Niw2NCBMMTQ0LjAwMjQsNjQgQzE0Mi44OTY1MDUsNjQgMTQyLDYzLjEwNjEwMDIgMTQyLDYxLjk5NTExODUgTDE0Miw2MS4wMDQ4ODE1IFonIGlkPSdpcGhvbmU1Jz48L3BhdGg+XG5cdFx0XHQgICAgICAgIDwvZz5cblx0XHRcdCAgICA8L2c+XG5cdFx0XHQ8L3N2Zz5cIlxuXHRcdFwiaXBob25lLTZzXCI6IFwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdFx0XHRcdDxzdmcgd2lkdGg9JzM3NXB4JyBoZWlnaHQ9JzY4cHgnIHZpZXdCb3g9JzAgMCAzNzUgNjgnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayc+XG5cdFx0XHRcdFx0PCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjYgKDI2MzA0KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHRcdFx0XHQ8dGl0bGU+Tm90aWZpY2F0aW9uIGJhY2tncm91bmQ8L3RpdGxlPlxuXHRcdFx0XHRcdDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdFx0XHRcdDxkZWZzPjwvZGVmcz5cblx0XHRcdFx0XHQ8ZyBpZD0nUGFnZS0xJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJyBmaWxsLW9wYWNpdHk9JzAuOSc+XG5cdFx0XHRcdFx0XHQ8ZyBpZD0naU9TOC1QdXNoLU5vdGlmaWNhdGlvbicgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTU4LjAwMDAwMCwgLTIzLjAwMDAwMCknIGZpbGw9JyMxQTFBMUMnPlxuXHRcdFx0XHRcdFx0XHQ8ZyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSg1OC4wMDAwMDAsIDcuMDAwMDAwKScgaWQ9J05vdGlmaWNhdGlvbi1jb250YWluZXInPlxuXHRcdFx0XHRcdFx0XHRcdDxnPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTAsMTYgTDM3NSwxNiBMMzc1LDg0IEwwLDg0IEwwLDE2IFogTTE2OSw3Ny4wMDQ4ODE1IEMxNjksNzUuODk3NjE2IDE2OS44OTYyNzksNzUgMTcxLjAwMjQsNzUgTDIwMy45OTc2LDc1IEMyMDUuMTAzNDk1LDc1IDIwNiw3NS44OTM4OTk4IDIwNiw3Ny4wMDQ4ODE1IEwyMDYsNzcuOTk1MTE4NSBDMjA2LDc5LjEwMjM4NCAyMDUuMTAzNzIxLDgwIDIwMy45OTc2LDgwIEwxNzEuMDAyNCw4MCBDMTY5Ljg5NjUwNSw4MCAxNjksNzkuMTA2MTAwMiAxNjksNzcuOTk1MTE4NSBMMTY5LDc3LjAwNDg4MTUgWicgaWQ9J05vdGlmaWNhdGlvbi1iYWNrZ3JvdW5kJz48L3BhdGg+XG5cdFx0XHRcdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHQ8L3N2Zz5cIlxuXHRcdFwiaXBob25lLTZzLXBsdXNcIiA6IFwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdFx0XHRcdDxzdmcgd2lkdGg9JzQxNHB4JyBoZWlnaHQ9JzY4cHgnIHZpZXdCb3g9JzAgMCA0MTQgNjgnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayc+XG5cdFx0XHRcdDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy42ICgyNjMwNCkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdFx0XHRcdDx0aXRsZT5Ob3RpZmljYXRpb24gYmFja2dyb3VuZCBDb3B5PC90aXRsZT5cblx0XHRcdFx0PGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0XHRcdDxkZWZzPjwvZGVmcz5cblx0XHRcdFx0PGcgaWQ9J1BhZ2UtMScgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCcgZmlsbC1vcGFjaXR5PScwLjknPlxuXHRcdFx0XHRcdDxnIGlkPSdpT1M4LVB1c2gtTm90aWZpY2F0aW9uJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtNDMuMDAwMDAwLCAtNzQuMDAwMDAwKScgZmlsbD0nIzFBMUExQyc+XG5cdFx0XHRcdFx0XHQ8ZyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSg0My4wMDAwMDAsIDc0LjAwMDAwMCknIGlkPSdOb3RpZmljYXRpb24tY29udGFpbmVyJz5cblx0XHRcdFx0XHRcdFx0PGc+XG5cdFx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTAsMCBMNDE0LDAgTDQxNCw2OCBMMCw2OCBMMCwwIFogTTE4OSw2MS4wMDQ4ODE1IEMxODksNTkuODk3NjE2IDE4OS44OTYyNzksNTkgMTkxLjAwMjQsNTkgTDIyMy45OTc2LDU5IEMyMjUuMTAzNDk1LDU5IDIyNiw1OS44OTM4OTk4IDIyNiw2MS4wMDQ4ODE1IEwyMjYsNjEuOTk1MTE4NSBDMjI2LDYzLjEwMjM4NCAyMjUuMTAzNzIxLDY0IDIyMy45OTc2LDY0IEwxOTEuMDAyNCw2NCBDMTg5Ljg5NjUwNSw2NCAxODksNjMuMTA2MTAwMiAxODksNjEuOTk1MTE4NSBMMTg5LDYxLjAwNDg4MTUgWicgaWQ9J05vdGlmaWNhdGlvbi1iYWNrZ3JvdW5kLUNvcHknPjwvcGF0aD5cblx0XHRcdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0PC9nPlxuXHRcdFx0PC9zdmc+XCJcblx0XHRcImlwYWRcIiA6IFwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdFx0XHRcdDxzdmcgd2lkdGg9Jzc2OHB4JyBoZWlnaHQ9JzY4cHgnIHZpZXdCb3g9JzAgMCA3NjggNjgnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayc+XG5cdFx0XHRcdCAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNi4xICgyNjMxMykgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdFx0XHRcdCAgICA8dGl0bGU+aXBhZC1wb3J0cmFpdDwvdGl0bGU+XG5cdFx0XHRcdCAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHRcdFx0ICAgIDxkZWZzPjwvZGVmcz5cblx0XHRcdFx0ICAgIDxnIGlkPSdQYWdlLTEnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIGZpbGwtb3BhY2l0eT0nMC45Jz5cblx0XHRcdFx0ICAgICAgICA8ZyBpZD0naVBhZC1Qb3J0cmFpdCcgZmlsbD0nIzFBMUExQyc+XG5cdFx0XHRcdCAgICAgICAgICAgIDxwYXRoIGQ9J00wLDAgTDc2OCwwIEw3NjgsNjggTDAsNjggTDAsMCBaIE0zNjYsNjEuMDA0ODgxNSBDMzY2LDU5Ljg5NzYxNiAzNjYuODk2Mjc5LDU5IDM2OC4wMDI0LDU5IEw0MDAuOTk3Niw1OSBDNDAyLjEwMzQ5NSw1OSA0MDMsNTkuODkzODk5OCA0MDMsNjEuMDA0ODgxNSBMNDAzLDYxLjk5NTExODUgQzQwMyw2My4xMDIzODQgNDAyLjEwMzcyMSw2NCA0MDAuOTk3Niw2NCBMMzY4LjAwMjQsNjQgQzM2Ni44OTY1MDUsNjQgMzY2LDYzLjEwNjEwMDIgMzY2LDYxLjk5NTExODUgTDM2Niw2MS4wMDQ4ODE1IFonIGlkPSdpcGFkLXBvcnRyYWl0Jz48L3BhdGg+XG5cdFx0XHRcdCAgICAgICAgPC9nPlxuXHRcdFx0XHQgICAgPC9nPlxuXHRcdFx0XHQ8L3N2Zz5cIlxuXHRcdFwiaXBhZC1wcm9cIiA6IFwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdFx0XHRcdDxzdmcgd2lkdGg9JzEwMjRweCcgaGVpZ2h0PSc2OHB4JyB2aWV3Qm94PScwIDAgMTAyNCA2OCcgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJz5cblx0XHRcdFx0ICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy42LjEgKDI2MzEzKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHRcdFx0ICAgIDx0aXRsZT5pcGFkLXByby1wb3J0cmFpdDwvdGl0bGU+XG5cdFx0XHRcdCAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHRcdFx0ICAgIDxkZWZzPjwvZGVmcz5cblx0XHRcdFx0ICAgIDxnIGlkPSdQYWdlLTEnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIGZpbGwtb3BhY2l0eT0nMC45Jz5cblx0XHRcdFx0ICAgICAgICA8ZyBpZD0naVBhZC1Qcm8tUG9ydHJhaXQnIGZpbGw9JyMxQTFBMUMnPlxuXHRcdFx0XHQgICAgICAgICAgICA8cGF0aCBkPSdNMCwwIEwxMDI0LDAgTDEwMjQsNjggTDAsNjggTDAsMCBaIE00OTQsNjEuMDA0ODgxNSBDNDk0LDU5Ljg5NzYxNiA0OTQuODk2Mjc5LDU5IDQ5Ni4wMDI0LDU5IEw1MjguOTk3Niw1OSBDNTMwLjEwMzQ5NSw1OSA1MzEsNTkuODkzODk5OCA1MzEsNjEuMDA0ODgxNSBMNTMxLDYxLjk5NTExODUgQzUzMSw2My4xMDIzODQgNTMwLjEwMzcyMSw2NCA1MjguOTk3Niw2NCBMNDk2LjAwMjQsNjQgQzQ5NC44OTY1MDUsNjQgNDk0LDYzLjEwNjEwMDIgNDk0LDYxLjk5NTExODUgTDQ5NCw2MS4wMDQ4ODE1IFonIGlkPSdpcGFkLXByby1wb3J0cmFpdCc+PC9wYXRoPlxuXHRcdFx0XHQgICAgICAgIDwvZz5cblx0XHRcdFx0ICAgIDwvZz5cblx0XHRcdFx0PC9zdmc+XCJcblx0fVxuXHRlbW9qaUNvZGVzOiBbXCI5OCA4MFwiLCBcIjk4IEFDXCIsIFwiOTggODFcIiwgXCI5OCA4MlwiLCBcIjk4IDgzXCIsIFwiOTggODRcIiwgXCI5OCA4NVwiLCBcIjk4IDg2XCIsIFwiOTggODdcIiwgXCI5OCA4OVwiLCBcIjk4IDhhXCIsIFwiOTkgODJcIiwgXCI5OSA4M1wiLCBcIkUyIDk4IEJBIEVGIEI4IDhGXCIsIFwiOTggOEJcIiAsIFwiOTggOENcIiwgXCI5OCA4RFwiLCBcIjk4IDk4XCIsIFwiOTggOTdcIiwgXCI5OCA5OVwiLCBcIjk4IDlBXCIsIFwiOTggOUNcIiwgXCI5OCA5RFwiLCBcIjk4IDlCXCIsIFwiQTQgOTFcIiwgXCJBNCA5M1wiLCBcIjk4IDhFXCIsIFwiQTQgOTdcIiwgXCI5OCA4RlwiLCBcIjk4IEI2XCIsIFwiOTggOTBcIiwgXCI5OCA5MVwiLCBcIjk4IDkyXCIsIFwiOTkgODRcIiwgXCJBNCA5NFwiLCBcIjk4IEIzXCIsIFwiOTggOUVcIiwgXCI5OCA5RlwiLCBcIjk4IEEwXCIsIFwiOTggQTFcIiwgXCI5OCA5NFwiLCBcIjk4IDk1XCIsIFwiOTkgODFcIiwgXCJFMiA5OCBCOSBFRiBCOCA4RlwiLCBcIjk4IEEzXCIsIFwiOTggOTZcIiwgXCI5OCBBQlwiLCBcIjk4IEE5XCIsIFwiOTggQTRcIiwgXCI5OCBBRVwiLCBcIjk4IEIxXCIsIFwiOTggQThcIiwgXCI5OCBCMFwiLCBcIjk4IEFGXCIsIFwiOTggQTZcIiwgXCI5OCBBN1wiLCBcIjk4IEEyXCIsIFwiOTggQTVcIiwgXCI5OCBBQVwiLCBcIjk4IDkzXCIsIFwiOTggQURcIiwgXCI5OCBCNVwiLCBcIjk4IEIyXCIsIFwiQTQgOTBcIiwgXCI5OCBCN1wiLCBcIkE0IDkyXCIsIFwiQTQgOTVcIiwgXCI5OCBCNFwiLCBcIjkyIEE0XCIsIFwiOTIgQTlcIiwgXCI5OCA4OFwiLCBcIjkxIEJGXCIsIFwiOTEgQjlcIiwgXCI5MSBCQVwiLCBcIjkyIDgwXCIsIFwiOTEgQkJcIiwgXCI5MSBCRFwiLCBcIkE0IDk2XCIsIFwiOTggQkFcIiwgXCI5OCBCOFwiLCBcIjk4IEI5XCIsIFwiOTggQkJcIiwgXCI5OCBCQ1wiLCBcIjk4IEJEXCIsIFwiOTkgODBcIiwgXCI5OCBCRlwiLCBcIjk4IEJFXCIsIFwiOTkgOENcIiwgXCI5MSA4RlwiLCBcIjkxIDhCXCIsIFwiOTEgOERcIiwgXCI5MSA4RVwiLCBcIjkxIDhBXCIsIFwiRTIgOUMgOEFcIiwgXCJFMiA5QyA4QyBFRiBCOCA4RlwiLCBcIjkxIDhDXCIsIFwiRTIgOUMgOEJcIiwgXCI5MSA5MFwiLCBcIjkyIEFBXCIsIFwiOTkgOEZcIiwgXCJFMiA5OCA5RCBFRiBCOCA4RlwiLCBcIjkxIDg2XCIsIFwiOTEgODdcIiwgXCI5MSA4OFwiLCBcIjkxIDg5XCIsIFwiOTYgOTVcIiwgXCI5NiA5MFwiLCBcIkE0IDk4XCIsIFwiOTYgOTZcIiwgXCJFMiA5QyA4RCBFRiBCOCA4RlwiLCBcIjkyIDg1XCIsIFwiOTEgODRcIiwgXCI5MSA4NVwiLCBcIjkxIDgyXCIsIFwiOTEgODNcIiwgXCI5MSA4MVwiLCBcIjkxIDgwXCIsIFwiOTEgQTRcIiwgXCI5MSBBNVwiLCBcIjk3IEEzXCIsIFwiOTEgQjZcIiwgXCI5MSBBNlwiLCBcIjkxIEE3XCIsIFwiOTEgQThcIiwgXCI5MSBBOVwiLCBcIjkxIEIxXCIsIFwiOTEgQjRcIiwgXCI5MSBCNVwiLCBcIjkxIEIyXCIsIFwiOTEgQjNcIiwgXCI5MSBBRVwiLCBcIjkxIEI3XCIsIFwiOTIgODJcIiwgXCI5NSBCNVwiLCBcIjhFIDg1XCIsIFwiOTEgQkNcIiwgXCI5MSBCOFwiLCBcIjkxIEIwXCIsIFwiOUEgQjZcIiwgXCI4RiA4M1wiLCBcIjkyIDgzXCIsIFwiOTEgQUZcIiwgXCI5MSBBQlwiLCBcIjkxIEFDXCIsIFwiOTEgQURcIiwgXCI5OSA4N1wiLCBcIjkyIDgxXCIsIFwiOTkgODVcIiwgXCI5OSA4NlwiLCBcIjk5IDhCXCIsIFwiOTkgOEVcIiwgXCI5OSA4RFwiLCBcIjkyIDg3XCIsIFwiOTIgODZcIiwgXCI5MiA5MVwiLCBcIjkxIEE5IEUyIDgwIDhEIEUyIDlEIEE0IEVGIEI4IDhGIEUyIDgwIDhEIEYwIDlGIDkxIEE5XCIsIFwiOTEgQTggRTIgODAgOEQgRTIgOUQgQTQgRUYgQjggOEYgRTIgODAgOEQgRjAgOUYgOTEgQThcIiwgXCI5MiA4RlwiLCBcIjkxIEE5IEUyIDgwIDhEIEUyIDlEIEE0IEVGIEI4IDhGIEUyIDgwIDhEIEYwIDlGIDkyIDhCIEUyIDgwIDhEIEYwIDlGIDkxIEE5XCIsIFwiOTEgQTggRTIgODAgOEQgRTIgOUQgQTQgRUYgQjggOEYgRTIgODAgOEQgRjAgOUYgOTIgOEIgRTIgODAgOEQgRjAgOUYgOTEgQThcIiwgXCI5MSBBQVwiLCBcIjkxIEE4IEUyIDgwIDhEIEYwIDlGIDkxIEE5IEUyIDgwIDhEIEYwIDlGIDkxIEE3XCIsIFwiOTEgQTggRTIgODAgOEQgRjAgOUYgOTEgQTkgRTIgODAgOEQgRjAgOUYgOTEgQTcgRTIgODAgOEQgRjAgOUYgOTEgQTZcIiwgXCI5MSBBOCBFMiA4MCA4RCBGMCA5RiA5MSBBOSBFMiA4MCA4RCBGMCA5RiA5MSBBNiBFMiA4MCA4RCBGMCA5RiA5MSBBNlwiLCBcIjkxIEE4IEUyIDgwIDhEIEYwIDlGIDkxIEE5IEUyIDgwIDhEIEYwIDlGIDkxIEE3IEUyIDgwIDhEIEYwIDlGIDkxIEE3XCIsIFwiOTEgQTkgRTIgODAgOEQgRjAgOUYgOTEgQTkgRTIgODAgOEQgRjAgOUYgOTEgQTZcIiwgXCI5MSBBOSBFMiA4MCA4RCBGMCA5RiA5MSBBOSBFMiA4MCA4RCBGMCA5RiA5MSBBN1wiLCBcIjkxIEE5IEUyIDgwIDhEIEYwIDlGIDkxIEE5IEUyIDgwIDhEIEYwIDlGIDkxIEE3IEUyIDgwIDhEIEYwIDlGIDkxIEE2XCIsIFwiOTEgQTkgRTIgODAgOEQgRjAgOUYgOTEgQTkgRTIgODAgOEQgRjAgOUYgOTEgQTYgRTIgODAgOEQgRjAgOUYgOTEgQTZcIiwgXCI5MSBBOSBFMiA4MCA4RCBGMCA5RiA5MSBBOSBFMiA4MCA4RCBGMCA5RiA5MSBBNyBFMiA4MCA4RCBGMCA5RiA5MSBBN1wiLCBcIjkxIEE4IEUyIDgwIDhEIEYwIDlGIDkxIEE4IEUyIDgwIDhEIEYwIDlGIDkxIEE2XCIsIFwiOTEgQTggRTIgODAgOEQgRjAgOUYgOTEgQTggRTIgODAgOEQgRjAgOUYgOTEgQTdcIiwgXCI5MSBBOCBFMiA4MCA4RCBGMCA5RiA5MSBBOCBFMiA4MCA4RCBGMCA5RiA5MSBBNyBFMiA4MCA4RCBGMCA5RiA5MSBBNlwiLCBcIjkxIEE4IEUyIDgwIDhEIEYwIDlGIDkxIEE4IEUyIDgwIDhEIEYwIDlGIDkxIEE2IEUyIDgwIDhEIEYwIDlGIDkxIEE2XCIsIFwiOTEgQTggRTIgODAgOEQgRjAgOUYgOTEgQTggRTIgODAgOEQgRjAgOUYgOTEgQTcgRTIgODAgOEQgRjAgOUYgOTEgQTdcIiwgXCI5MSA5QVwiLCBcIjkxIDk1XCIsIFwiOTEgOTZcIiwgXCI5MSA5NFwiLCBcIjkxIDk3XCIsIFwiOTEgOTlcIiwgXCI5MSA5OFwiLCBcIjkyIDg0XCIsIFwiOTIgOEJcIiwgXCI5MSBBM1wiLCBcIjkxIEEwXCIsIFwiOTEgQTFcIiwgXCI5MSBBMlwiLCBcIjkxIDlFXCIsIFwiOTEgOUZcIiwgXCI5MSA5MlwiLCBcIjhFIEE5XCIsIFwiRTIgOUIgOTFcIiwgXCI4RSA5M1wiLCBcIjkxIDkxXCIsIFwiOEUgOTJcIiwgXCI5MSA5RFwiLCBcIjkxIDlCXCIsIFwiOTEgOUNcIiwgXCI5MiBCQ1wiLCBcIjkxIDkzXCIsIFwiOTUgQjZcIiwgXCI5MiA4RFwiLCBcIjhDIDgyXCIsIFwiOUIgOTFcIiwgXCI5MCBCNlwiLCBcIjkwIEIxXCIsIFwiOTAgQURcIiwgXCI5MCBCOVwiLCBcIjkwIEIwXCIsIFwiOTAgQkJcIiwgXCI5MCBCQ1wiLCBcIjkwIEE4XCIsIFwiOTAgQUZcIiwgXCJBNiA4MVwiLCBcIjkwIEFFXCIsIFwiOTAgQjdcIiwgXCI5MCBCRFwiLCBcIjkwIEI4XCIsIFwiOTAgOTlcIiwgXCI5MCBCNVwiLCBcIjk5IDg4XCIsIFwiOTkgODlcIiwgXCI5OSA4QVwiLCBcIjkwIDkyXCIsIFwiOTAgOTRcIiwgXCI5MCBBN1wiLCBcIjkwIEE2XCIsIFwiOTAgQTRcIiwgXCI5MCBBM1wiLCBcIjkwIEE1XCIsIFwiOTAgQkFcIiwgXCI5MCA5N1wiLCBcIjkwIEI0XCIsIFwiQTYgODRcIiwgXCI5MCA5RFwiLCBcIjkwIDlCXCIsIFwiOTAgOENcIiwgXCI5MCA5RVwiLCBcIjkwIDlDXCIsIFwiOTUgQjdcIiwgXCJBNiA4MlwiLCBcIkE2IDgwXCIsIFwiOTAgOERcIiwgXCI5MCBBMlwiLCBcIjkwIEEwXCIsIFwiOTAgOUZcIiwgXCI5MCBBMVwiLCBcIjkwIEFDXCIsIFwiOTAgQjNcIiwgXCI5MCA4QlwiLCBcIjkwIDhBXCIsIFwiOTAgODZcIiwgXCI5MCA4NVwiLCBcIjkwIDgzXCIsIFwiOTAgODJcIiwgXCI5MCA4NFwiLCBcIjkwIEFBXCIsIFwiOTAgQUJcIiwgXCI5MCA5OFwiLCBcIjkwIDkwXCIsIFwiOTAgOEZcIiwgXCI5MCA5MVwiLCBcIjkwIDhFXCIsIFwiOTAgOTZcIiwgXCI5MCA4MFwiLCBcIjkwIDgxXCIsIFwiOTAgOTNcIiwgXCJBNiA4M1wiLCBcIjk1IDhBXCIsIFwiOTAgOTVcIiwgXCI5MCBBOVwiLCBcIjkwIDg4XCIsIFwiOTAgODdcIiwgXCI5MCBCRlwiLCBcIjkwIEJFXCIsIFwiOTAgODlcIiwgXCI5MCBCMlwiLCBcIjhDIEI1XCIsIFwiOEUgODRcIiwgXCI4QyBCMlwiLCBcIjhDIEIzXCIsIFwiOEMgQjRcIiwgXCI4QyBCMVwiLCBcIjhDIEJGXCIsIFwiRTIgOTggOThcIiwgXCI4RCA4MFwiLCBcIjhFIDhEXCIsIFwiOEUgOEJcIiwgXCI4RCA4M1wiLCBcIjhEIDgyXCIsIFwiOEQgODFcIiwgXCI4QyBCRVwiLCBcIjhDIEJBXCIsIFwiOEMgQkFcIiwgXCI4QyBCQlwiLCBcIjhDIEI5XCIsIFwiOEMgQjdcIiwgXCI4QyBCQ1wiLCBcIjhDIEI4XCIsIFwiOTIgOTBcIiwgXCI4RCA4NFwiLCBcIjhDIEIwXCIsIFwiOEUgODNcIiwgXCI5MCA5QVwiLCBcIjk1IEI4XCIsIFwiOEMgOEVcIiwgXCI4QyA4RFwiLCBcIjhDIDhGXCIsIFwiOEMgOTVcIiwgXCI4QyA5NlwiLCBcIjhDIDk3XCIsIFwiOEMgOThcIiwgXCI4QyA5MVwiLCBcIjhDIDkyXCIsIFwiOEMgOTNcIiwgXCI4QyA5NFwiLCBcIjhDIDlBXCIsIFwiOEMgOURcIiwgXCI4QyA5QlwiLCBcIjhDIDlDXCIsIFwiOEMgOUVcIiwgXCI4QyA5OVwiLCBcIkUyIEFEIDkwIEVGIEI4IDhGXCIsIFwiOEMgOUZcIiwgXCI5MiBBQlwiLCBcIkUyIDlDIEE4XCIsIFwiRTIgOTggODQgRUYgQjggOEZcIiwgXCJFMiA5OCA4MCBFRiBCOCA4RlwiLCBcIjhDIEE0XCIsIFwiRTIgOUIgODUgRUYgQjggOEZcIiwgXCI4QyBBNVwiLCBcIjhDIEE2XCIsIFwiRTIgOTggODEgRUYgQjggOEZcIiwgXCI4QyBBN1wiLCBcIkUyIDlCIDg4XCIsIFwiOEMgQTlcIiwgXCJFMiA5QSBBMSBFRiBCOCA4RlwiLCBcIjk0IEE1XCIsIFwiOTIgQTVcIiwgXCJFMiA5RCA4NCBFRiBCOCA4RlwiLCBcIjhDIEE4XCIsIFwiRTIgOTggODMgRUYgQjggOEZcIiwgXCJFMiA5QiA4NCBFRiBCOCA4RlwiLCBcIjhDIEFDXCIsIFwiOTIgQThcIiwgXCI4QyBBQVwiLCBcIjhDIEFCXCIsIFwiRTIgOTggODIgRUYgQjggOEZcIiwgXCJFMiA5OCA5NCBFRiBCOCA4RlwiLCBcIjkyIEE3XCIsIFwiOTIgQTZcIiwgXCI4QyA4QVwiLCBcIjlCIDkxXCIsIFwiOUIgOTFcIiwgXCI4RCA4RlwiLCBcIjhEIDhFXCIsIFwiOEQgOTBcIiwgXCI4RCA4QVwiLCBcIjhEIDhCXCIsIFwiOEQgOENcIiwgXCI4RCA4OVwiLCBcIjhEIDg3XCIsIFwiOEQgOTNcIiwgXCI4RCA4OFwiLCBcIjhEIDkyXCIsIFwiOEQgOTFcIiwgXCI4RCA4RFwiLCBcIjhEIDg1XCIsIFwiOEQgODZcIiwgXCI4QyBCNlwiLCBcIjhDIEJEXCIsIFwiOEQgQTBcIiwgXCI4RCBBRlwiLCBcIjhEIDlFXCIsIFwiQTcgODBcIiwgXCI4RCA5N1wiLCBcIjhEIDk2XCIsIFwiOEQgQTRcIiwgXCI4RCBCM1wiLCBcIjhEIDk0XCIsIFwiOEQgOUZcIiwgXCI4QyBBRFwiLCBcIjhEIDk1XCIsIFwiOEQgOURcIiwgXCI4QyBBRVwiLCBcIjhDIEFGXCIsIFwiOEQgOUNcIiwgXCI4RCBCMlwiLCBcIjhEIEE1XCIsIFwiOEQgQTNcIiwgXCI4RCBCMVwiLCBcIjhEIDlCXCIsIFwiOEQgOTlcIiwgXCI4RCA5QVwiLCBcIjhEIDk4XCIsIFwiOEQgQTJcIiwgXCI4RCBBMVwiLCBcIjhEIEE3XCIsIFwiOEQgQThcIiwgXCI4RCBBNlwiLCBcIjhEIEIwXCIsIFwiOEUgODJcIiwgXCI4RCBBRVwiLCBcIjhEIEFDXCIsIFwiOEQgQURcIiwgXCI4RCBBQlwiLCBcIjhEIEJGXCIsIFwiOEQgQTlcIiwgXCI4RCBBQVwiLCBcIjhEIEJBXCIsIFwiOEQgQkJcIiwgXCI4RCBCN1wiLCBcIjhEIEI4XCIsIFwiOEQgQjlcIiwgXCI4RCBCRVwiLCBcIjhEIEI2XCIsIFwiOEQgQjVcIiwgXCJFMiA5OCA5NSBFRiBCOCA4RlwiLCBcIjhEIEJDXCIsIFwiOEQgQjRcIiwgXCI4RCBCRFwiLFwiOUIgOTFcIiwgXCI5QiA5MVwiLCBcIjlCIDkxXCIsIFwiRTIgOUEgQkQgRUYgQjggOEZcIiwgXCI4RiA4MFwiLCBcIjhGIDg4XCIsIFwiRTIgOUEgQkUgRUYgQjggOEZcIiwgXCI4RSBCRVwiLCBcIjhGIDkwXCIsIFwiOEYgODlcIiwgXCI4RSBCMVwiLCBcIkUyIDlCIEIzIEVGIEI4IDhGXCIsIFwiOEYgOENcIiwgXCI4RiA5M1wiLCBcIjhGIEI4XCIsIFwiOEYgOTJcIiwgXCI4RiA5MVwiLCBcIjhGIDhGXCIsIFwiOEUgQkZcIiwgXCJFMiA5QiBCN1wiLCBcIjhGIDgyXCIsIFwiRTIgOUIgQjhcIiwgXCI4RiBCOVwiLCBcIjhFIEEzXCIsIFwiOUEgQTNcIiwgXCI4RiA4QVwiLCBcIjhGIDg0XCIsIFwiOUIgODBcIiwgXCJFMiA5QiBCOVwiLCBcIjhGIDhCXCIsIFwiOUEgQjRcIiwgXCI5QSBCNVwiLCBcIjhGIDg3XCIsIFwiOTUgQjRcIiwgXCI4RiA4NlwiLCBcIjhFIEJEXCIsIFwiOEYgODVcIiwgXCI4RSA5NlwiLCBcIjhFIDk3XCIsIFwiOEYgQjVcIiwgXCI4RSBBQlwiLCBcIjhFIDlGXCIsIFwiOEUgQURcIiwgXCI4RSBBOFwiLCBcIjhFIEFBXCIsIFwiOEUgQTRcIiwgXCI4RSBBN1wiLCBcIjhFIEJDXCIsIFwiOEUgQjlcIiwgXCI4RSBCN1wiLCBcIjhFIEJBXCIsIFwiOEUgQjhcIiwgXCI4RSBCQlwiLCBcIjhFIEFDXCIsIFwiOEUgQUVcIiwgXCI5MSBCRVwiLCBcIjhFIEFGXCIsIFwiOEUgQjJcIiwgXCI4RSBCMFwiLCBcIjhFIEIzXCIsIFwiOUIgOTFcIiwgXCI5QiA5MVwiLCBcIjlCIDkxXCIsIFwiOUEgOTdcIiwgXCI5QSA5NVwiLCBcIjlBIDk5XCIsIFwiOUEgOENcIiwgXCI5QSA4RVwiLCBcIjhGIDhFXCIsIFwiOUEgOTNcIiwgXCI5QSA5MVwiLCBcIjlBIDkyXCIsIFwiOUEgOTBcIiwgXCI5QSA5QVwiLCBcIjlBIDlCXCIsIFwiOUEgOUNcIixcIjhGIDhEXCIsIFwiOUEgQjJcIiwgXCI5QSBBOFwiLCBcIjlBIDk0XCIsIFwiOUEgOERcIiwgXCI5QSA5OFwiLCBcIjlBIDk2XCIsIFwiOUEgQTFcIiwgXCI5QSBBMFwiLCBcIjlBIEFGXCIsIFwiOUEgODNcIiwgXCI5QSA4QlwiLCBcIjlBIDlEXCIsIFwiOUEgODRcIiwgXCI5QSA4NVwiLCBcIjlBIDg4XCIsIFwiOUEgOUVcIiwgXCI5QSA4MlwiLCBcIjlBIDg2XCIsIFwiOUEgODdcIiwgXCI5QSA4QVwiLCBcIjlBIDg5XCIsIFwiOUEgODFcIiwgXCI5QiBBOVwiLCBcIkUyIDlDIDg4IEVGIEI4IDhGXCIsIFwiOUIgQUJcIiwgXCI5QiBBQ1wiLCBcIkUyIDlCIEI1IEVGIEI4IDhGXCIsIFwiOUIgQTVcIiwgXCI5QSBBNFwiLCBcIkUyIDlCIEI0XCIsIFwiOUIgQjNcIiwgXCI5QSA4MFwiLCBcIjlCIEIwXCIsIFwiOTIgQkFcIiwgXCJFMiA5QSA5MyBFRiBCOCA4RlwiLCBcIjlBIEE3XCIsIFwiRTIgOUIgQkQgRUYgQjggOEZcIiwgXCI5QSA4RlwiLCBcIjlBIEE2XCIsIFwiOUEgQTVcIiwgXCI4RiA4MVwiLCBcIjlBIEEyXCIsIFwiOEUgQTFcIiwgXCI4RSBBMlwiLCBcIjhFIEEwXCIsIFwiOEYgOTdcIiwgXCI4QyA4MVwiLCBcIjk3IEJDXCIsIFwiOEYgQURcIiwgXCJFMiA5QiBCMiBFRiBCOCA4RlwiLCBcIjhFIDkxXCIsIFwiRTIgOUIgQjBcIiwgXCI4RiA5NFwiLCBcIjk3IEJCXCIsIFwiOEMgOEJcIiwgXCI5NyBCRVwiLCBcIjhGIDk1XCIsIFwiRTIgOUIgQkEgRUYgQjggOEZcIiwgXCI4RiA5RVwiLCBcIjlCIEEzXCIsIFwiOUIgQTRcIiwgXCI4QyA4NVwiLCBcIjhDIDg0XCIsIFwiOEYgOUNcIiwgXCI4RiA5NlwiLCBcIjhGIDlEXCIsIFwiOEMgODdcIiwgXCI4QyA4NlwiLCBcIjhGIDk5XCIsIFwiOEMgODNcIiwgXCI4QyA4OVwiLCBcIjhDIDhDXCIsIFwiOEMgQTBcIiwgXCI4RSA4N1wiLCBcIjhFIDg2XCIsIFwiOEMgODhcIiwgXCI4RiA5OFwiLCBcIjhGIEIwXCIsIFwiOEYgQUZcIiwgXCI4RiA5RlwiLCBcIjk3IEJEXCIsIFwiOEYgQTBcIiwgXCI4RiBBMVwiLCBcIjhGIDlBXCIsIFwiOEYgQTJcIiwgXCI4RiBBQ1wiLCBcIjhGIEEzXCIsIFwiOEYgQTRcIiwgXCI4RiBBNVwiLCBcIjhGIEE2XCIsIFwiOEYgQThcIiwgXCI4RiBBQVwiLCBcIjhGIEFCXCIsIFwiOEYgQTlcIiwgXCI5MiA5MlwiLCBcIjhGIDlCXCIsIFwiRTIgOUIgQUEgRUYgQjggOEZcIiwgXCI5NSA4Q1wiLCBcIjk1IDhEXCIsIFwiOTUgOEJcIiwgXCJFMiA5QiBBOVwiLCBcIkUyIDhDIDlBIEVGIEI4IDhGXCIsIFwiOTMgQjFcIiwgXCI5MyBCMlwiLCBcIjkyIEJCXCIsIFwiRTIgOEMgQTggRUYgQjggOEZcIiwgXCI5NiBBNVwiLCBcIjk2IEE4XCIsIFwiOTYgQjFcIiwgXCI5NiBCMlwiLCBcIjk1IEI5XCIsIFwiOTcgOUNcIiwgXCI5MiBCRFwiLCBcIjkyIEJFXCIsIFwiOTIgQkZcIiwgXCI5MyA4MFwiLCBcIjkzIEJDXCIsIFwiOTMgQjdcIiwgXCI5MyBCOFwiLCBcIjkzIEI5XCIsIFwiOEUgQTVcIiwgXCI5MyBCRFwiLCBcIjhFIDlFXCIsIFwiOTMgOUVcIiwgXCJFMiA5OCA4RSBFRiBCOCA4RlwiLCBcIjkzIDlGXCIsIFwiOTMgQTBcIiwgXCI5MyBCQVwiLCBcIjkzIEJCXCIsIFwiOEUgOTlcIiwgXCI4RSA5QVwiLCBcIjhFIDlCXCIsIFwiRTIgOEYgQjFcIiwgXCJFMiA4RiBCMlwiLCBcIkUyIDhGIEIwXCIsIFwiOTUgQjBcIiwgXCJFMiA4RiBCM1wiLCBcIkUyIDhDIDlCIEVGIEI4IDhGXCIsIFwiOTMgQTFcIiwgXCI5NCA4QlwiLCBcIjk0IDhDXCIsIFwiOTIgQTFcIiwgXCI5NCBBNlwiLCBcIjk1IEFGXCIsIFwiOTcgOTFcIiwgXCI5QiBBMlwiLCBcIjkyIEI4XCIsIFwiOTIgQjVcIiwgXCI5MiBCNFwiLCBcIjkyIEI2XCIsIFwiOTIgQjdcIiwgXCI5MiBCMFwiLCBcIjkyIEIzXCIsIFwiOTIgOEVcIiwgXCJFMiA5QSA5NlwiLCBcIjk0IEE3XCIsIFwiOTQgQThcIiwgXCJFMiA5QSA5MlwiLCBcIjlCIEEwXCIsIFwiRTIgOUIgOEZcIiwgXCI5NCBBOVwiLCBcIkUyIDlBIDk5XCIsIFwiRTIgOUIgOTNcIiwgXCI5NCBBQlwiLCBcIjkyIEEzXCIsIFwiOTQgQUFcIiwgXCI5NyBBMVwiLCBcIkUyIDlBIDk0XCIsIFwiOUIgQTFcIiwgXCI5QSBBQ1wiLCBcIkUyIDk4IEEwIEVGIEI4IDhGXCIsIFwiRTIgOUEgQjBcIiwgXCJFMiA5QSBCMVwiLCBcIjhGIEJBXCIsIFwiOTQgQUVcIiwgXCI5MyBCRlwiLCBcIjkyIDg4XCIsIFwiRTIgOUEgOTdcIiwgXCI5NCBBRFwiLCBcIjk0IEFDXCIsIFwiOTUgQjNcIiwgXCI5MiA4QVwiLCBcIjkyIDg5XCIsIFwiOEMgQTFcIiwgXCI4RiBCN1wiLCBcIjk0IDk2XCIsIFwiOUEgQkRcIiwgXCI5QSBCRlwiLCBcIjlCIDgxXCIsIFwiOTQgOTFcIiwgXCI5NyA5RFwiLCBcIjlCIDhCXCIsIFwiOUIgOENcIiwgXCI5QiA4RlwiLCBcIjlBIEFBXCIsIFwiOUIgOEVcIiwgXCI5NiBCQ1wiLCBcIjk3IEJBXCIsIFwiRTIgOUIgQjFcIiwgXCI5NyBCRlwiLCBcIjlCIDhEXCIsIFwiOEUgODhcIiwgXCI4RSA4RlwiLCBcIjhFIDgwXCIsIFwiOEUgODFcIiwgXCI4RSA4QVwiLCBcIjhFIDg5XCIsIFwiOEUgOEVcIiwgXCI4RSA5MFwiLCBcIjhFIDhDXCIsIFwiOEYgQUVcIiwgXCJFMiA5QyA4OSBFRiBCOCA4RlwiLCBcIjkzIEE5XCIsIFwiOTMgQThcIiwgXCI5MyBBN1wiLCBcIjkyIDhDXCIsIFwiOTMgQUVcIiwgXCI5MyBBQVwiLCBcIjkzIEFCXCIsIFwiOTMgQUNcIiwgXCI5MyBBRFwiLCBcIjkzIEE2XCIsIFwiOTMgQUZcIiwgXCI5MyBBNVwiLCBcIjkzIEE0XCIsIFwiOTMgOUNcIiwgXCI5MyA4M1wiLCBcIjkzIDkxXCIsIFwiOTMgOEFcIiwgXCI5MyA4OFwiLCBcIjkzIDg5XCIsIFwiOTMgODRcIiwgXCI5MyA4NVwiLCBcIjkzIDg2XCIsIFwiOTcgOTNcIiwgXCI5MyA4N1wiLCBcIjk3IDgzXCIsIFwiOTcgQjNcIiwgXCI5NyA4NFwiLCBcIjkzIDhCXCIsIFwiOTcgOTJcIiwgXCI5MyA4MVwiLCBcIjkzIDgyXCIsIFwiOTcgODJcIiwgXCI5NyA5RVwiLCBcIjkzIEIwXCIsIFwiOTMgOTNcIiwgXCI5MyA5NVwiLCBcIjkzIDk3XCIsIFwiOTMgOThcIiwgXCI5MyA5OVwiLCBcIjkzIDk0XCIsIFwiOTMgOTJcIiwgXCI5MyA5QVwiLCBcIjkzIDk2XCIsIFwiOTQgOTdcIiwgXCI5MyA4RVwiLCBcIjk2IDg3XCIsIFwiRTIgOUMgODIgRUYgQjggOEZcIiwgXCI5MyA5MFwiLCBcIjkzIDhGXCIsIFwiOTMgOENcIiwgXCI5MyA4RFwiLCBcIjlBIEE5XCIsIFwiOEYgQjNcIiwgXCI4RiBCNFwiLCBcIjk0IDkwXCIsIFwiOTQgOTJcIiwgXCI5NCA5M1wiLCBcIjk0IDhGXCIsIFwiOTYgOEFcIiwgXCI5NiA4QlwiLCBcIkUyIDlDIDkyIEVGIEI4IDhGXCIsIFwiOTMgOURcIiwgXCJFMiA5QyA4RiBFRiBCOCA4RlwiLCBcIjk2IDhEXCIsIFwiOTYgOENcIiwgXCI5NCA4RFwiLCBcIjk0IDhFXCIsIFwiOUIgOTFcIiwgXCI5QiA5MVwiLCBcIkUyIDlEIEE0IEVGIEI4IDhGXCIsIFwiOTIgOUJcIiwgXCI5MiA5QVwiLCBcIjkyIDk5XCIsIFwiOTIgOUNcIiwgXCI5MiA5NFwiLCBcIkUyIDlEIEEzIEVGIEI4IDhGXCIsIFwiOTIgOTVcIiwgXCI5MiA5RVwiLCBcIjkyIDkzXCIsIFwiOTIgOTdcIiwgXCI5MiA5NlwiLCBcIjkyIDk4XCIsIFwiOTIgOURcIiwgXCI5MiA5RlwiLCBcIkUyIDk4IEFFIEVGIEI4IDhGXCIsIFwiRTIgOUMgOUQgRUYgQjggOEZcIiwgXCJFMiA5OCBBQSBFRiBCOCA4RlwiLCBcIjk1IDg5XCIsIFwiRTIgOTggQjggRUYgQjggOEZcIiwgXCJFMiA5QyBBMSBFRiBCOCA4RlwiLCBcIjk0IEFGXCIsIFwiOTUgOEVcIiwgXCJFMiA5OCBBRiBFRiBCOCA4RlwiLCBcIkUyIDk4IEE2IEVGIEI4IDhGXCIsIFwiOUIgOTBcIiwgXCJFMiA5QiA4RVwiLCBcIkUyIDk5IDg4IEVGIEI4IDhGXCIsIFwiRTIgOTkgODkgRUYgQjggOEZcIiwgXCJFMiA5OSA4QSBFRiBCOCA4RlwiLCBcIkUyIDk5IDhCIEVGIEI4IDhGXCIsIFwiRTIgOTkgOEMgRUYgQjggOEZcIiwgXCJFMiA5OSA4RCBFRiBCOCA4RlwiLCBcIkUyIDk5IDhFIEVGIEI4IDhGXCIsIFwiRTIgOTkgOEYgRUYgQjggOEZcIiwgXCJFMiA5OSA5MCBFRiBCOCA4RlwiLCBcIkUyIDk5IDkxIEVGIEI4IDhGXCIsIFwiRTIgOTkgOTIgRUYgQjggOEZcIiwgXCJFMiA5OSA5MyBFRiBCOCA4RlwiLCBcIjg2IDk0XCIsIFwiRTIgOUEgOUJcIiwgXCI4OCBCM1wiLCBcIjg4IEI5XCIsIFwiRTIgOTggQTIgRUYgQjggOEZcIiwgXCJFMiA5OCBBMyBFRiBCOCA4RlwiLCBcIjkzIEI0XCIsIFwiOTMgQjNcIiwgXCI4OCBCNlwiLCBcIjg4IDlBIEVGIEI4IDhGXCIsIFwiODggQjhcIiwgXCI4OCBCQVwiLCBcIjg4IEI3IEVGIEI4IDhGXCIsIFwiRTIgOUMgQjQgRUYgQjggOEZcIiwgXCI4NiA5QVwiLCBcIjg5IDkxXCIsIFwiOTIgQUVcIiwgXCI4OSA5MFwiLCBcIkUzIDhBIDk5IEVGIEI4IDhGXCIsIFwiRTMgOEEgOTcgRUYgQjggOEZcIiwgXCI4OCBCNFwiLCBcIjg4IEI1XCIsIFwiODggQjJcIiwgXCI4NSBCMCBFRiBCOCA4RlwiLCBcIjg1IEIxIEVGIEI4IDhGXCIsIFwiODYgOEVcIiwgXCI4NiA5MVwiLCBcIjg1IEJFIEVGIEI4IDhGXCIsIFwiODYgOThcIiwgXCJFMiA5QiA5NCBFRiBCOCA4RlwiLCBcIjkzIDlCXCIsIFwiOUEgQUJcIiwgXCJFMiA5RCA4Q1wiLCBcIkUyIEFEIDk1IEVGIEI4IDhGXCIsIFwiOTIgQTJcIiwgXCJFMiA5OSBBOCBFRiBCOCA4RlwiLCBcIjlBIEI3XCIsIFwiOUEgQUZcIiwgXCI5QSBCM1wiLCBcIjlBIEIxXCIsIFwiOTQgOUVcIiwgXCI5MyBCNVwiLCBcIkUyIDlEIDk3IEVGIEI4IDhGXCIsIFwiRTIgOUQgOTVcIiwgXCJFMiA5RCA5M1wiLCBcIkUyIDlEIDk0XCIsIFwiRTIgODAgQkMgRUYgQjggOEZcIiwgXCJFMiA4MSA4OSBFRiBCOCA4RlwiLCBcIjkyIEFGXCIsIFwiOTQgODVcIiwgXCI5NCA4NlwiLCBcIjk0IEIxXCIsIFwiRTIgOUEgOUNcIiwgXCJFMyA4MCBCRCBFRiBCOCA4RlwiLCBcIkUyIDlBIEEwIEVGIEI4IDhGXCIsIFwiOUEgQjhcIiwgXCI5NCBCMFwiLCBcIkUyIDk5IEJCIEVGIEI4IDhGXCIsIFwiODggQUYgRUYgQjggOEZcIiwgXCI5MiBCOVwiLCBcIkUyIDlEIDg3IEVGIEI4IDhGXCIsIFwiRTIgOUMgQjMgRUYgQjggOEZcIiwgXCJFMiA5RCA4RVwiLCBcIkUyIDlDIDg1XCIsIFwiOTIgQTBcIiwgXCI4QyA4MFwiLCBcIkUyIDlFIEJGXCIsIFwiOEMgOTBcIiwgXCJFMiA5MyA4MiBFRiBCOCA4RlwiLCBcIjhGIEE3XCIsIFwiODggODIgRUYgQjggOEZcIiwgXCI5QiA4MlwiLCBcIjlCIDgzXCIsIFwiOUIgODRcIiwgXCI5QiA4NVwiLCBcIkUyIDk5IEJGIEVGIEI4IDhGXCIsIFwiOUEgQURcIiwgXCI5QSBCRVwiLCBcIjg1IEJGIEVGIEI4IDhGXCIsIFwiOUEgQjBcIiwgXCI5QSBCOVwiLCBcIjlBIEJBXCIsIFwiOUEgQkNcIiwgXCI5QSBCQlwiLCBcIjlBIEFFXCIsIFwiOEUgQTZcIiwgXCI5MyBCNlwiLCBcIjg4IDgxXCIsIFwiODYgOTZcIiwgXCI4NiA5N1wiLCBcIjg2IDk5XCIsIFwiODYgOTJcIiwgXCI4NiA5NVwiLCBcIjg2IDkzXCIsIFwiMzAgRUYgQjggOEYgRTIgODMgQTNcIiwgXCIzMSBFRiBCOCA4RiBFMiA4MyBBM1wiLCBcIjMyIEVGIEI4IDhGIEUyIDgzIEEzXCIsIFwiMzMgRUYgQjggOEYgRTIgODMgQTNcIiwgXCIzNCBFRiBCOCA4RiBFMiA4MyBBM1wiLCBcIjM1IEVGIEI4IDhGIEUyIDgzIEEzXCIsIFwiMzYgRUYgQjggOEYgRTIgODMgQTNcIiwgXCIzNyBFRiBCOCA4RiBFMiA4MyBBM1wiLCBcIjM4IEVGIEI4IDhGIEUyIDgzIEEzXCIsIFwiMzkgRUYgQjggOEYgRTIgODMgQTNcIiwgXCI5NCA5RlwiLCBcIjk0IEEyXCIsIFwiRTIgOTYgQjYgRUYgQjggOEZcIiwgXCJFMiA4RiBCOFwiLCBcIkUyIDhGIEFGXCIsIFwiRTIgOEYgQjlcIiwgXCJFMiA4RiBCQVwiLCBcIkUyIDhGIEFEXCIsIFwiRTIgOEYgQUVcIiwgXCJFMiA4RiBBOVwiLCBcIkUyIDhGIEFBXCIsIFwiOTQgODBcIiwgXCI5NCA4MVwiLCBcIjk0IDgyXCIsIFwiRTIgOTcgODAgRUYgQjggOEZcIiwgXCI5NCBCQ1wiLCBcIjk0IEJEXCIsIFwiRTIgOEYgQUJcIiwgXCJFMiA4RiBBQ1wiLCBcIkUyIDlFIEExIEVGIEI4IDhGXCIsIFwiRTIgQUMgODUgRUYgQjggOEZcIiwgXCJFMiBBQyA4NiBFRiBCOCA4RlwiLCBcIkUyIEFDIDg3IEVGIEI4IDhGXCIsIFwiRTIgODYgOTcgRUYgQjggOEZcIiwgXCJFMiA4NiA5OCBFRiBCOCA4RlwiLCBcIkUyIDg2IDk5IEVGIEI4IDhGXCIsIFwiRTIgODYgOTYgRUYgQjggOEZcIiwgXCJFMiA4NiA5NSBFRiBCOCA4RlwiLCBcIkUyIDg2IDk0IEVGIEI4IDhGXCIsIFwiOTQgODRcIiwgXCJFMiA4NiBBQSBFRiBCOCA4RlwiLCBcIkUyIDg2IEE5IEVGIEI4IDhGXCIsIFwiRTIgQTQgQjQgRUYgQjggOEZcIiwgXCJFMiBBNCBCNSBFRiBCOCA4RlwiLCBcIjIzIEVGIEI4IDhGIEUyIDgzIEEzXCIsIFwiMkEgRUYgQjggOEYgRTIgODMgQTNcIiwgXCJFMiA4NCBCOSBFRiBCOCA4RlwiLCBcIjk0IEE0XCIsIFwiOTQgQTFcIiwgXCI5NCBBMFwiLCBcIjk0IEEzXCIsIFwiOEUgQjVcIiwgXCI4RSBCNlwiLCBcIkUzIDgwIEIwIEVGIEI4IDhGXCIsIFwiRTIgOUUgQjBcIiwgXCJFMiA5QyA5NCBFRiBCOCA4RlwiLCBcIjk0IDgzXCIsIFwiRTIgOUUgOTVcIiwgXCJFMiA5RSA5NlwiLCBcIkUyIDlFIDk3XCIsIFwiRTIgOUMgOTYgRUYgQjggOEZcIiwgXCI5MiBCMlwiLCBcIjkyIEIxXCIsIFwiQzIgQTkgRUYgQjggOEZcIiwgXCJDMiBBRSBFRiBCOCA4RlwiLCBcIkUyIDg0IEEyIEVGIEI4IDhGXCIsIFwiOTQgOUFcIiwgXCI5NCA5OVwiLCBcIjk0IDlCXCIsIFwiOTQgOURcIiwgXCI5NCA5Q1wiLCBcIkUyIDk4IDkxIEVGIEI4IDhGXCIsIFwiOTQgOThcIiwgXCJFMiA5QSBBQSBFRiBCOCA4RlwiLCBcIkUyIDlBIEFCIEVGIEI4IDhGXCIsIFwiOTQgQjRcIiwgXCI5NCBCNVwiLCBcIjk0IEI4XCIsIFwiOTQgQjlcIiwgXCI5NCBCNlwiLCBcIjk0IEI3XCIsIFwiOTQgQkFcIiwgXCJFMiA5NiBBQSBFRiBCOCA4RlwiLCBcIkUyIDk2IEFCIEVGIEI4IDhGXCIsIFwiRTIgQUMgOUIgRUYgQjggOEZcIiwgXCJFMiBBQyA5QyBFRiBCOCA4RlwiLCBcIjk0IEJCXCIsIFwiRTIgOTcgQkMgRUYgQjggOEZcIiwgXCJFMiA5NyBCQiBFRiBCOCA4RlwiLCBcIkUyIDk3IEJFIEVGIEI4IDhGXCIsIFwiRTIgOTcgQkQgRUYgQjggOEZcIiwgXCI5NCBCMlwiLCBcIjk0IEIzXCIsIFwiOTQgODhcIiwgXCI5NCA4OVwiLCBcIjk0IDhBXCIsIFwiOTQgODdcIiwgXCI5MyBBM1wiLCBcIjkzIEEyXCIsIFwiOTQgOTRcIiwgXCI5NCA5NVwiLCBcIjgzIDhGXCIsIFwiODAgODQgRUYgQjggOEZcIiwgXCJFMiA5OSBBMCBFRiBCOCA4RlwiLCBcIkUyIDk5IEEzIEVGIEI4IDhGXCIsIFwiRTIgOTkgQTUgRUYgQjggOEZcIiwgXCJFMiA5OSBBNiBFRiBCOCA4RlwiLCBcIjhFIEI0XCIsIFwiOTEgODEgRTIgODAgOEQgRjAgOUYgOTcgQThcIiwgXCI5MiBBRFwiLCBcIjk3IEFGXCIsIFwiOTIgQUNcIiwgXCI5NSA5MFwiLCBcIjk1IDkxXCIsIFwiOTUgOTJcIiwgXCI5NSA5M1wiLCBcIjk1IDk0XCIsIFwiOTUgOTVcIiwgXCI5NSA5NlwiLCBcIjk1IDk3XCIsIFwiOTUgOThcIiwgXCI5NSA5OVwiLCBcIjk1IDlBXCIsIFwiOTUgOUJcIiwgXCI5NSA5Q1wiLCBcIjk1IDlEXCIsIFwiOTUgOUVcIiwgXCI5NSA5RlwiLCBcIjk1IEEwXCIsIFwiOTUgQTFcIiwgXCI5NSBBMlwiLCBcIjk1IEEzXCIsIFwiOTUgQTRcIiwgXCI5NSBBNVwiLCBcIjk1IEE2XCIsIFwiOTUgQTdcIiwgXCI5QiA5MVwiLCBcIjg3IEE2IEYwIDlGIDg3IEFCXCIsIFwiODcgQTYgRjAgOUYgODcgQkRcIiwgXCI4NyBBNiBGMCA5RiA4NyBCMVwiLCBcIjg3IEE5IEYwIDlGIDg3IEJGXCIsIFwiODcgQTYgRjAgOUYgODcgQjhcIiwgXCI4NyBBNiBGMCA5RiA4NyBBOVwiLCBcIjg3IEE2IEYwIDlGIDg3IEI0XCIsIFwiODcgQTYgRjAgOUYgODcgQUVcIiwgXCI4NyBBNiBGMCA5RiA4NyBCNlwiLCBcIjg3IEE2IEYwIDlGIDg3IEFDXCIsIFwiODcgQTYgRjAgOUYgODcgQjdcIiwgXCI4NyBBNiBGMCA5RiA4NyBCMlwiLCBcIjg3IEE2IEYwIDlGIDg3IEJDXCIsIFwiODcgQTYgRjAgOUYgODcgQkFcIiwgXCI4NyBBNiBGMCA5RiA4NyBCOVwiLCBcIjg3IEE2IEYwIDlGIDg3IEJGXCIsIFwiODcgQTcgRjAgOUYgODcgQjhcIiwgXCI4NyBBNyBGMCA5RiA4NyBBRFwiLCBcIjg3IEE3IEYwIDlGIDg3IEE5XCIsIFwiODcgQTcgRjAgOUYgODcgQTdcIiwgXCI4NyBBNyBGMCA5RiA4NyBCRVwiLCBcIjg3IEE3IEYwIDlGIDg3IEFBXCIsIFwiODcgQTcgRjAgOUYgODcgQkZcIiwgXCI4NyBBNyBGMCA5RiA4NyBBRlwiLCBcIjg3IEE3IEYwIDlGIDg3IEIyXCIsIFwiODcgQTcgRjAgOUYgODcgQjlcIiwgXCI4NyBBNyBGMCA5RiA4NyBCNFwiLCBcIjg3IEE3IEYwIDlGIDg3IEI2XCIsIFwiODcgQTcgRjAgOUYgODcgQTZcIiwgXCI4NyBBNyBGMCA5RiA4NyBCQ1wiLCBcIjg3IEE3IEYwIDlGIDg3IEI3XCIsIFwiODcgQUUgRjAgOUYgODcgQjRcIiwgXCI4NyBCQiBGMCA5RiA4NyBBQ1wiLCBcIjg3IEE3IEYwIDlGIDg3IEIzXCIsIFwiODcgQTcgRjAgOUYgODcgQUNcIiwgXCI4NyBBNyBGMCA5RiA4NyBBQlwiLCBcIjg3IEE3IEYwIDlGIDg3IEFFXCIsIFwiODcgQTggRjAgOUYgODcgQkJcIiwgXCI4NyBCMCBGMCA5RiA4NyBBRFwiLCBcIjg3IEE4IEYwIDlGIDg3IEIyXCIsIFwiODcgQTggRjAgOUYgODcgQTZcIiwgXCI4NyBBRSBGMCA5RiA4NyBBOFwiLCBcIjg3IEIwIEYwIDlGIDg3IEJFXCIsIFwiODcgQTggRjAgOUYgODcgQUJcIiwgXCI4NyBCOSBGMCA5RiA4NyBBOVwiLCBcIjg3IEE4IEYwIDlGIDg3IEIxXCIsIFwiODcgQTggRjAgOUYgODcgQjNcIiwgXCI4NyBBOCBGMCA5RiA4NyBCRFwiLCBcIjg3IEE4IEYwIDlGIDg3IEE4XCIsIFwiODcgQTggRjAgOUYgODcgQjRcIiwgXCI4NyBCMCBGMCA5RiA4NyBCMlwiLCBcIjg3IEE4IEYwIDlGIDg3IEFDXCIsIFwiODcgQTggRjAgOUYgODcgQTlcIiwgXCI4NyBBOCBGMCA5RiA4NyBCMFwiLCBcIjg3IEE4IEYwIDlGIDg3IEI3XCIsIFwiODcgQUQgRjAgOUYgODcgQjdcIiwgXCI4NyBBOCBGMCA5RiA4NyBCQVwiLCBcIjg3IEE4IEYwIDlGIDg3IEJDXCIsIFwiODcgQTggRjAgOUYgODcgQkVcIiwgXCI4NyBBOCBGMCA5RiA4NyBCRlwiLCBcIjg3IEE5IEYwIDlGIDg3IEIwXCIsIFwiODcgQTkgRjAgOUYgODcgQUZcIiwgXCI4NyBBOSBGMCA5RiA4NyBCMlwiLCBcIjg3IEE5IEYwIDlGIDg3IEI0XCIsIFwiODcgQUEgRjAgOUYgODcgQThcIiwgXCI4NyBBQSBGMCA5RiA4NyBBQ1wiLCBcIjg3IEI4IEYwIDlGIDg3IEJCXCIsIFwiODcgQUMgRjAgOUYgODcgQjZcIiwgXCI4NyBBQSBGMCA5RiA4NyBCN1wiLCBcIjg3IEFBIEYwIDlGIDg3IEFBXCIsIFwiODcgQUEgRjAgOUYgODcgQjlcIiwgXCI4NyBBQSBGMCA5RiA4NyBCQVwiLCBcIjg3IEFCIEYwIDlGIDg3IEIwXCIsIFwiODcgQUIgRjAgOUYgODcgQjRcIiwgXCI4NyBBQiBGMCA5RiA4NyBBRlwiLCBcIjg3IEFCIEYwIDlGIDg3IEFFXCIsIFwiODcgQUIgRjAgOUYgODcgQjdcIiwgXCI4NyBBQyBGMCA5RiA4NyBBQlwiLCBcIjg3IEI1IEYwIDlGIDg3IEFCXCIsIFwiODcgQjkgRjAgOUYgODcgQUJcIiwgXCI4NyBBQyBGMCA5RiA4NyBBNlwiLCBcIjg3IEFDIEYwIDlGIDg3IEIyXCIsIFwiODcgQUMgRjAgOUYgODcgQUFcIiwgXCI4NyBBOSBGMCA5RiA4NyBBQVwiLCBcIjg3IEFDIEYwIDlGIDg3IEFEXCIsIFwiODcgQUMgRjAgOUYgODcgQUVcIiwgXCI4NyBBQyBGMCA5RiA4NyBCN1wiLCBcIjg3IEFDIEYwIDlGIDg3IEIxXCIsIFwiODcgQUMgRjAgOUYgODcgQTlcIiwgXCI4NyBBQyBGMCA5RiA4NyBCNVwiLCBcIjg3IEFDIEYwIDlGIDg3IEJBXCIsIFwiODcgQUMgRjAgOUYgODcgQjlcIiwgXCI4NyBBQyBGMCA5RiA4NyBBQ1wiLCBcIjg3IEFDIEYwIDlGIDg3IEIzXCIsIFwiODcgQUMgRjAgOUYgODcgQkNcIiwgXCI4NyBBQyBGMCA5RiA4NyBCRVwiLCBcIjg3IEFEIEYwIDlGIDg3IEI5XCIsIFwiODcgQUQgRjAgOUYgODcgQjNcIiwgXCI4NyBBRCBGMCA5RiA4NyBCMFwiLCBcIjg3IEFEIEYwIDlGIDg3IEJBXCIsIFwiODcgQUUgRjAgOUYgODcgQjhcIiwgXCI4NyBBRSBGMCA5RiA4NyBCM1wiLCBcIjg3IEFFIEYwIDlGIDg3IEE5XCIsIFwiODcgQUUgRjAgOUYgODcgQjdcIiwgXCI4NyBBRSBGMCA5RiA4NyBCNlwiLCBcIjg3IEFFIEYwIDlGIDg3IEFBXCIsIFwiODcgQUUgRjAgOUYgODcgQjJcIiwgXCI4NyBBRSBGMCA5RiA4NyBCMVwiLCBcIjg3IEFFIEYwIDlGIDg3IEI5XCIsIFwiODcgQTggRjAgOUYgODcgQUVcIiwgXCI4NyBBRiBGMCA5RiA4NyBCMlwiLCBcIjg3IEFGIEYwIDlGIDg3IEI1XCIsIFwiODcgQUYgRjAgOUYgODcgQUFcIiwgXCI4NyBBRiBGMCA5RiA4NyBCNFwiLCBcIjg3IEIwIEYwIDlGIDg3IEJGXCIsIFwiODcgQjAgRjAgOUYgODcgQUFcIiwgXCI4NyBCMCBGMCA5RiA4NyBBRVwiLCBcIjg3IEJEIEYwIDlGIDg3IEIwXCIsIFwiODcgQjAgRjAgOUYgODcgQkNcIiwgXCI4NyBCMCBGMCA5RiA4NyBBQ1wiLCBcIjg3IEIxIEYwIDlGIDg3IEE2XCIsIFwiODcgQjEgRjAgOUYgODcgQkJcIiwgXCI4NyBCMSBGMCA5RiA4NyBBN1wiLCBcIjg3IEIxIEYwIDlGIDg3IEI4XCIsIFwiODcgQjEgRjAgOUYgODcgQjdcIiwgXCI4NyBCMSBGMCA5RiA4NyBCRVwiLCBcIjg3IEIxIEYwIDlGIDg3IEFFXCIsIFwiODcgQjEgRjAgOUYgODcgQjlcIiwgXCI4NyBCMSBGMCA5RiA4NyBCQVwiLCBcIjg3IEIyIEYwIDlGIDg3IEI0XCIsIFwiODcgQjIgRjAgOUYgODcgQjBcIiwgXCI4NyBCMiBGMCA5RiA4NyBBQ1wiLCBcIjg3IEIyIEYwIDlGIDg3IEJDXCIsIFwiODcgQjIgRjAgOUYgODcgQkVcIiwgXCI4NyBCMiBGMCA5RiA4NyBCQlwiLCBcIjg3IEIyIEYwIDlGIDg3IEIxXCIsIFwiODcgQjIgRjAgOUYgODcgQjlcIiwgXCI4NyBCMiBGMCA5RiA4NyBBRFwiLCBcIjg3IEIyIEYwIDlGIDg3IEI2XCIsIFwiODcgQjIgRjAgOUYgODcgQjdcIiwgXCI4NyBCMiBGMCA5RiA4NyBCQVwiLCBcIjg3IEJFIEYwIDlGIDg3IEI5XCIsIFwiODcgQjIgRjAgOUYgODcgQkRcIiwgXCI4NyBBQiBGMCA5RiA4NyBCMlwiLCBcIjg3IEIyIEYwIDlGIDg3IEE5XCIsIFwiODcgQjIgRjAgOUYgODcgQThcIiwgXCI4NyBCMiBGMCA5RiA4NyBCM1wiLCBcIjg3IEIyIEYwIDlGIDg3IEFBXCIsIFwiODcgQjIgRjAgOUYgODcgQjhcIiwgXCI4NyBCMiBGMCA5RiA4NyBBNlwiLCBcIjg3IEIyIEYwIDlGIDg3IEJGXCIsIFwiODcgQjIgRjAgOUYgODcgQjJcIiwgXCI4NyBCMyBGMCA5RiA4NyBBNlwiLCBcIjg3IEIzIEYwIDlGIDg3IEI3XCIsIFwiODcgQjMgRjAgOUYgODcgQjVcIiwgXCI4NyBCMyBGMCA5RiA4NyBCMVwiLCBcIjg3IEIzIEYwIDlGIDg3IEE4XCIsIFwiODcgQjMgRjAgOUYgODcgQkZcIiwgXCI4NyBCMyBGMCA5RiA4NyBBRVwiLCBcIjg3IEIzIEYwIDlGIDg3IEFBXCIsIFwiODcgQjMgRjAgOUYgODcgQUNcIiwgXCI4NyBCMyBGMCA5RiA4NyBCQVwiLCBcIjg3IEIzIEYwIDlGIDg3IEFCXCIsIFwiODcgQjIgRjAgOUYgODcgQjVcIiwgXCI4NyBCMCBGMCA5RiA4NyBCNVwiLCBcIjg3IEIzIEYwIDlGIDg3IEI0XCIsIFwiODcgQjQgRjAgOUYgODcgQjJcIiwgXCI4NyBCNSBGMCA5RiA4NyBCMFwiLCBcIjg3IEI1IEYwIDlGIDg3IEJDXCIsIFwiODcgQjUgRjAgOUYgODcgQjhcIiwgXCI4NyBCNSBGMCA5RiA4NyBBNlwiLCBcIjg3IEI1IEYwIDlGIDg3IEFDXCIsIFwiODcgQjUgRjAgOUYgODcgQkVcIiwgXCI4NyBCNSBGMCA5RiA4NyBBQVwiLCBcIjg3IEI1IEYwIDlGIDg3IEFEXCIsIFwiODcgQjUgRjAgOUYgODcgQjNcIiwgXCI4NyBCNSBGMCA5RiA4NyBCMVwiLCBcIjg3IEI1IEYwIDlGIDg3IEI5XCIsIFwiODcgQjUgRjAgOUYgODcgQjdcIiwgXCI4NyBCNiBGMCA5RiA4NyBBNlwiLCBcIjg3IEI3IEYwIDlGIDg3IEFBXCIsIFwiODcgQjcgRjAgOUYgODcgQjRcIiwgXCI4NyBCNyBGMCA5RiA4NyBCQVwiLCBcIjg3IEI3IEYwIDlGIDg3IEJDXCIsIFwiODcgQTcgRjAgOUYgODcgQjFcIiwgXCI4NyBCOCBGMCA5RiA4NyBBRFwiLCBcIjg3IEIwIEYwIDlGIDg3IEIzXCIsIFwiODcgQjEgRjAgOUYgODcgQThcIiwgXCI4NyBCNSBGMCA5RiA4NyBCMlwiLCBcIjg3IEJCIEYwIDlGIDg3IEE4XCIsIFwiODcgQkMgRjAgOUYgODcgQjhcIiwgXCI4NyBCOCBGMCA5RiA4NyBCMlwiLCBcIjg3IEI4IEYwIDlGIDg3IEI5XCIsIFwiODcgQjggRjAgOUYgODcgQTZcIiwgXCI4NyBCOCBGMCA5RiA4NyBCM1wiLCBcIjg3IEI3IEYwIDlGIDg3IEI4XCIsIFwiODcgQjggRjAgOUYgODcgQThcIiwgXCI4NyBCOCBGMCA5RiA4NyBCMVwiLCBcIjg3IEI4IEYwIDlGIDg3IEFDXCIsIFwiODcgQjggRjAgOUYgODcgQkRcIiwgXCI4NyBCOCBGMCA5RiA4NyBCMFwiLCBcIjg3IEI4IEYwIDlGIDg3IEFFXCIsIFwiODcgQjggRjAgOUYgODcgQTdcIiwgXCI4NyBCOCBGMCA5RiA4NyBCNFwiLCBcIjg3IEJGIEYwIDlGIDg3IEE2XCIsIFwiODcgQUMgRjAgOUYgODcgQjhcIiwgXCI4NyBCMCBGMCA5RiA4NyBCN1wiLCBcIjg3IEI4IEYwIDlGIDg3IEI4XCIsIFwiODcgQUEgRjAgOUYgODcgQjhcIiwgXCI4NyBCMSBGMCA5RiA4NyBCMFwiLCBcIjg3IEI4IEYwIDlGIDg3IEE5XCIsIFwiODcgQjggRjAgOUYgODcgQjdcIiwgXCI4NyBCOCBGMCA5RiA4NyBCRlwiLCBcIjg3IEI4IEYwIDlGIDg3IEFBXCIsIFwiODcgQTggRjAgOUYgODcgQURcIiwgXCI4NyBCOCBGMCA5RiA4NyBCRVwiLCBcIjg3IEI5IEYwIDlGIDg3IEJDXCIsIFwiODcgQjkgRjAgOUYgODcgQUZcIiwgXCI4NyBCOSBGMCA5RiA4NyBCRlwiLCBcIjg3IEI5IEYwIDlGIDg3IEFEXCIsIFwiODcgQjkgRjAgOUYgODcgQjFcIiwgXCI4NyBCOSBGMCA5RiA4NyBBQ1wiLCBcIjg3IEI5IEYwIDlGIDg3IEIwXCIsIFwiODcgQjkgRjAgOUYgODcgQjRcIiwgXCI4NyBCOSBGMCA5RiA4NyBCOVwiLCBcIjg3IEI5IEYwIDlGIDg3IEIzXCIsIFwiODcgQjkgRjAgOUYgODcgQjdcIiwgXCI4NyBCOSBGMCA5RiA4NyBCMlwiLCBcIjg3IEI5IEYwIDlGIDg3IEE4XCIsIFwiODcgQjkgRjAgOUYgODcgQkJcIiwgXCI4NyBCQSBGMCA5RiA4NyBBQ1wiLCBcIjg3IEJBIEYwIDlGIDg3IEE2XCIsIFwiODcgQTYgRjAgOUYgODcgQUFcIiwgXCI4NyBBQyBGMCA5RiA4NyBBN1wiLCBcIjg3IEJBIEYwIDlGIDg3IEI4XCIsIFwiODcgQkIgRjAgOUYgODcgQUVcIiwgXCI4NyBCQSBGMCA5RiA4NyBCRVwiLCBcIjg3IEJBIEYwIDlGIDg3IEJGXCIsIFwiODcgQkIgRjAgOUYgODcgQkFcIiwgXCI4NyBCQiBGMCA5RiA4NyBBNlwiLCBcIjg3IEJCIEYwIDlGIDg3IEFBXCIsIFwiODcgQkIgRjAgOUYgODcgQjNcIiwgXCI4NyBCQyBGMCA5RiA4NyBBQlwiLCBcIjg3IEFBIEYwIDlGIDg3IEFEXCIsIFwiODcgQkUgRjAgOUYgODcgQUFcIiwgXCI4NyBCRiBGMCA5RiA4NyBCMlwiLCBcIjg3IEJGIEYwIDlGIDg3IEJDXCJdXG5cdG5ldHdvcms6XCJcbjxzdmcgd2lkdGg9JzE0cHgnIGhlaWdodD0nMTBweCcgdmlld0JveD0nODcgNSAxNCAxMCcgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJz5cbiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNy4yICgyODI3NikgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG4gICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG4gICAgPGRlZnM+PC9kZWZzPlxuICAgIDxwYXRoIGQ9J005Ni4xNDQ0MjA4LDEyLjQzODUwNDMgQzk1LjYyNjM3NCwxMS44NDU0NDU2IDk0Ljg1MjM2MTYsMTEuNDY4OTExOSA5My45ODc1NjMsMTEuNDY4OTExOSBDOTMuMTM5MDA3MywxMS40Njg5MTE5IDkyLjM3Nzg1OTQsMTEuODMxNDM0MSA5MS44NjAxNjUyLDEyLjQwNTMxNzcgTDk0LjAyMjUzOTEsMTQuNSBMOTYuMTQ0NDIwOCwxMi40Mzg1MDQzIFogTTk4LjMyMzQ5NjQsMTAuMzIxNDQyNSBDOTcuMjQ0Nzc5NCw5LjE5MTc0NTYzIDk1LjcwMTQzODcsOC40ODQ0NTU5NiA5My45ODc1NjMsOC40ODQ0NTU5NiBDOTIuMjg4MjcyMyw4LjQ4NDQ1NTk2IDkwLjc1NjYyNjQsOS4xNzk3NTg5MyA4OS42NzkyNjk4LDEwLjI5MjY5MzYgTDkwLjc2OTI5ODcsMTEuMzQ4NiBDOTEuNTY3MjA1LDEwLjUwNTM3MDggOTIuNzEzNjQ4LDkuOTc2NjgzOTQgOTMuOTg3NTYzLDkuOTc2NjgzOTQgQzk1LjI3Njg4MzYsOS45NzY2ODM5NCA5Ni40MzU2MzA1LDEwLjUxODIzNSA5Ny4yMzQ2MjE1LDExLjM3OTMyOTMgTDk4LjMyMzQ5NjQsMTAuMzIxNDQyNSBMOTguMzIzNDk2NCwxMC4zMjE0NDI1IFogTTEwMC41LDguMjA2ODc5MzMgQzk4Ljg2Mjk1NzgsNi41Mzk0MzY3MiA5Ni41NTA1Njk5LDUuNSA5My45ODc1NjMsNS41IEM5MS40Mzc1MTAzLDUuNSA4OS4xMzU1NDk2LDYuNTI4OTU2MDUgODcuNSw4LjE4MTY0NDMxIEw4OC41ODk1NTc5LDkuMjM3MDk0NDEgQzg5Ljk0NjA3OTgsNy44NTQzMTY1NSA5MS44NjI4OTIxLDYuOTkyMjI3OTggOTMuOTg3NTYzLDYuOTkyMjI3OTggQzk2LjEyNjAwMjYsNi45OTIyMjc5OCA5OC4wNTM4ODA5LDcuODY1NTI2MDkgOTkuNDExODY5OCw5LjI2NDA0MjcyIEwxMDAuNSw4LjIwNjg3OTMzIFonIGlkPSdXaS1GaScgc3Ryb2tlPSdub25lJyBmaWxsPScjMDMwMzAzJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnPjwvcGF0aD5cbjwvc3ZnPlwiXG5cdGFjdGl2aXR5OiBcIjw/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyc/PlxuXHRcdFx0PHN2ZyB3aWR0aD0nMTZweCcgaGVpZ2h0PScxNnB4JyB2aWV3Qm94PScwIDAgMTYgMTYnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycgeG1sbnM6c2tldGNoPSdodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMnPlxuXHRcdFx0XHQ8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNS4yICgyNTIzNSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdFx0XHRcdDx0aXRsZT5Tb2NjZXIgQmFsbDwvdGl0bGU+XG5cdFx0XHRcdDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdFx0XHQ8ZGVmcz5cblx0XHRcdFx0XHQ8Y2lyY2xlIGlkPSdwYXRoLTEnIGN4PSc4JyBjeT0nOCcgcj0nOCc+PC9jaXJjbGU+XG5cdFx0XHRcdDwvZGVmcz5cblx0XHRcdFx0PGcgaWQ9J1BhZ2UtMScgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCcgc2tldGNoOnR5cGU9J01TUGFnZSc+XG5cdFx0XHRcdFx0PGcgaWQ9J2lQaG9uZS02JyBza2V0Y2g6dHlwZT0nTVNBcnRib2FyZEdyb3VwJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtMTc5LjAwMDAwMCwgLTYzOS4wMDAwMDApJz5cblx0XHRcdFx0XHRcdDxnIGlkPSdTb2NjZXItQmFsbCcgc2tldGNoOnR5cGU9J01TTGF5ZXJHcm91cCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMTc5LjAwMDAwMCwgNjM5LjAwMDAwMCknPlxuXHRcdFx0XHRcdFx0XHQ8bWFzayBpZD0nbWFzay0yJyBza2V0Y2g6bmFtZT0nTWFzaycgZmlsbD0nd2hpdGUnPlxuXHRcdFx0XHRcdFx0XHRcdDx1c2UgeGxpbms6aHJlZj0nI3BhdGgtMSc+PC91c2U+XG5cdFx0XHRcdFx0XHRcdDwvbWFzaz5cblx0XHRcdFx0XHRcdFx0PHVzZSBpZD0nTWFzaycgc3Ryb2tlPScjNEE1MzYxJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJyB4bGluazpocmVmPScjcGF0aC0xJz48L3VzZT5cblx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTYsMTIuMTIwMzA0NiBMMTIuODU3MzM4NCw4IEwxMy4zNzIzNzY1LDguODU3MTY3MyBMNi41MTUwMzgwNywxMi45Nzc0NzE5IEw2LDEyLjEyMDMwNDYgTDYsMTIuMTIwMzA0NiBaJyBpZD0nUmVjdGFuZ2xlLTQ3JyBmaWxsPScjNEE1MzYxJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJyBtYXNrPSd1cmwoI21hc2stMiknPjwvcGF0aD5cblx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTExLjg0OTY0OCw4LjcyNjA1NTEgTDE5LjEwMDExMDMsNS4zNDUxMDkwMSBMMTkuNTIyNzI4NSw2LjI1MTQxNjggTDEyLjI3MjI2NjIsOS42MzIzNjI4OSBMMTEuODQ5NjQ4LDguNzI2MDU1MSBMMTEuODQ5NjQ4LDguNzI2MDU1MSBaJyBpZD0nUmVjdGFuZ2xlLTQ3LUNvcHktMycgZmlsbD0nIzRBNTM2MScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCcgbWFzaz0ndXJsKCNtYXNrLTIpJz48L3BhdGg+XG5cdFx0XHRcdFx0XHRcdDxwYXRoIGQ9J002LDMuMTIwMzA0NiBMMTIuODU3MzM4NCwtMSBMMTMuMzcyMzc2NSwtMC4xNDI4MzI2OTkgTDYuNTE1MDM4MDcsMy45Nzc0NzE5IEw2LDMuMTIwMzA0NiBMNiwzLjEyMDMwNDYgWicgaWQ9J1JlY3RhbmdsZS00Ny1Db3B5LTInIGZpbGw9JyM0QTUzNjEnIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnIG1hc2s9J3VybCgjbWFzay0yKSc+PC9wYXRoPlxuXHRcdFx0XHRcdFx0XHQ8cGF0aCBkPSdNLTEsNy4xMjAzMDQ2IEw1Ljg1NzMzODQxLDMgTDYuMzcyMzc2NDgsMy44NTcxNjczIEwtMC40ODQ5NjE5MjUsNy45Nzc0NzE5IEwtMSw3LjEyMDMwNDYgTC0xLDcuMTIwMzA0NiBaJyBpZD0nUmVjdGFuZ2xlLTQ3LUNvcHktNCcgZmlsbD0nIzRBNTM2MScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCcgbWFzaz0ndXJsKCNtYXNrLTIpJz48L3BhdGg+XG5cdFx0XHRcdFx0XHRcdDxyZWN0IGlkPSdSZWN0YW5nbGUtNTAnIGZpbGw9JyM0QTUzNjEnIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnIG1hc2s9J3VybCgjbWFzay0yKScgeD0nNCcgeT0nNicgd2lkdGg9JzEnIGhlaWdodD0nNSc+PC9yZWN0PlxuXHRcdFx0XHRcdFx0XHQ8cmVjdCBpZD0nUmVjdGFuZ2xlLTUxJyBmaWxsPScjNEE1MzYxJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJyBtYXNrPSd1cmwoI21hc2stMiknIHg9JzExLjUnIHk9JzMnIHdpZHRoPScxJyBoZWlnaHQ9JzEyJz48L3JlY3Q+XG5cdFx0XHRcdFx0XHRcdDxwYXRoIGQ9J001LDQuODU3MTY3MyBMMTEuODU3MzM4NCw4Ljk3NzQ3MTkgTDEyLjM3MjM3NjUsOC4xMjAzMDQ2IEw1LjUxNTAzODA3LDQgTDUsNC44NTcxNjczJyBpZD0nUmVjdGFuZ2xlLTQ3LUNvcHknIGZpbGw9JyM0QTUzNjEnIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnIG1hc2s9J3VybCgjbWFzay0yKSc+PC9wYXRoPlxuXHRcdFx0XHRcdFx0XHQ8cGF0aCBkPSdNNSwxMi44NTcxNjczIEwxMS44NTczMzg0LDE2Ljk3NzQ3MTkgTDEyLjM3MjM3NjUsMTYuMTIwMzA0NiBMNS41MTUwMzgwNywxMiBMNSwxMi44NTcxNjczJyBpZD0nUmVjdGFuZ2xlLTQ3LUNvcHktNScgZmlsbD0nIzRBNTM2MScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCcgbWFzaz0ndXJsKCNtYXNrLTIpJz48L3BhdGg+XG5cdFx0XHRcdFx0XHRcdDxwYXRoIGQ9J00xMS45MDQ4OTcyLDYuMTQ3NjYwNjQgTDEzLjg3MTQyMjcsOC4zMzE3MDg0OSBMMTIuNDAxOTU5NiwxMC44NzY4OTMzIEw5LjUyNzI1NTg5LDEwLjI2NTg1NjIgTDkuMjIwMDU0NDUsNy4zNDMwMjk2NSBMMTEuOTA0ODk3Miw2LjE0NzY2MDY0JyBpZD0nUG9seWdvbi0xJyBmaWxsPScjRDhEOEQ4JyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJyBtYXNrPSd1cmwoI21hc2stMiknPjwvcGF0aD5cblx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTExLjkwNDg5NzIsNi4xNDc2NjA2NCBMMTMuODcxNDIyNyw4LjMzMTcwODQ5IEwxMi40MDE5NTk2LDEwLjg3Njg5MzMgTDkuNTI3MjU1ODksMTAuMjY1ODU2MiBMOS4yMjAwNTQ0NSw3LjM0MzAyOTY1IEwxMS45MDQ4OTcyLDYuMTQ3NjYwNjQnIGlkPSdQb2x5Z29uLTEtQ29weScgZmlsbD0nIzRBNTM2MScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCcgbWFzaz0ndXJsKCNtYXNrLTIpJz48L3BhdGg+XG5cdFx0XHRcdFx0XHRcdDxwYXRoIGQ9J003LjQ1NzcxMTg5LDMuMTk1MDQ3MzkgTDcuMzU1MTQ0ODQsNi4xMzIxODMzMyBMNC41MzAwNjc2LDYuOTQyMjYxMiBMMi44ODY2NDA4OSw0LjUwNTc4MDkgTDQuNjk2MDI0NTcsMi4xODk4NzU0MSBMNy40NTc3MTE4OSwzLjE5NTA0NzM5JyBpZD0nUG9seWdvbi0xLUNvcHktMicgZmlsbD0nIzRBNTM2MScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCcgbWFzaz0ndXJsKCNtYXNrLTIpJz48L3BhdGg+XG5cdFx0XHRcdFx0XHRcdDxwYXRoIGQ9J003LjQ1NzcxMTg5LDExLjE5NTA0NzQgTDcuMzU1MTQ0ODQsMTQuMTMyMTgzMyBMNC41MzAwNjc2LDE0Ljk0MjI2MTIgTDIuODg2NjQwODksMTIuNTA1NzgwOSBMNC42OTYwMjQ1NywxMC4xODk4NzU0IEw3LjQ1NzcxMTg5LDExLjE5NTA0NzQnIGlkPSdQb2x5Z29uLTEtQ29weS0zJyBmaWxsPScjNEE1MzYxJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJyBtYXNrPSd1cmwoI21hc2stMiknPjwvcGF0aD5cblx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTE0LjU0MzE3MDEsMC4wNzI1OTM5MzE0IEwxNC40NDA2MDMxLDMuMDA5NzI5ODggTDExLjYxNTUyNTgsMy44MTk4MDc3NCBMOS45NzIwOTkxMiwxLjM4MzMyNzQ1IEwxMS43ODE0ODI4LC0wLjkzMjU3ODA1IEwxNC41NDMxNzAxLDAuMDcyNTkzOTMxNCcgaWQ9J1BvbHlnb24tMS1Db3B5LTQnIGZpbGw9JyM0QTUzNjEnIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnIG1hc2s9J3VybCgjbWFzay0yKSc+PC9wYXRoPlxuXHRcdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0PC9nPlxuXHRcdFx0PC9zdmc+XCJcblx0YW5pbWFsczogXCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0XHRcdDxzdmcgd2lkdGg9JzE3cHgnIGhlaWdodD0nMTZweCcgdmlld0JveD0nMCAwIDE3IDE3JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHhtbG5zOnNrZXRjaD0naHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zJz5cblx0XHRcdFx0PCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjUuMiAoMjUyMzUpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdFx0XHQ8dGl0bGU+R3JvdXA8L3RpdGxlPlxuXHRcdFx0XHQ8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHRcdFx0PGRlZnM+PC9kZWZzPlxuXHRcdFx0XHQ8ZyBpZD0nUGFnZS0xJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJyBza2V0Y2g6dHlwZT0nTVNQYWdlJz5cblx0XHRcdFx0XHQ8ZyBpZD0naVBob25lLTYnIHNrZXRjaDp0eXBlPSdNU0FydGJvYXJkR3JvdXAnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC0xMTcuMDAwMDAwLCAtNjM5LjAwMDAwMCknIHN0cm9rZT0nIzRBNTM2MSc+XG5cdFx0XHRcdFx0XHQ8ZyBpZD0naWNfRm9vZCcgc2tldGNoOnR5cGU9J01TTGF5ZXJHcm91cCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMTE4LjAwMDAwMCwgNjQwLjAwMDAwMCknPlxuXHRcdFx0XHRcdFx0XHQ8ZyBpZD0nR3JvdXAnIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnPlxuXHRcdFx0XHRcdFx0XHRcdDxwYXRoIGQ9J001LjY4Mzc3NTM3LDEuMzgxNTY2NDYgQzYuMjM5MjYwNjYsMS4xMzYyNCA2Ljg1MzcyMDA1LDEgNy41LDEgQzguMTQ2Mjc5OTUsMSA4Ljc2MDczOTM0LDEuMTM2MjQgOS4zMTYyMjQ2MywxLjM4MTU2NjQ2IEM5LjgwODc5Mjc1LDAuNTYyMzU5MDE5IDEwLjgyNTU4ODgsMCAxMiwwIEMxMy42NTY4NTQyLDAgMTUsMS4xMTkyODgxMyAxNSwyLjUgQzE1LDMuNTU3MTM5OCAxNC4yMTI2MjQ2LDQuNDYxMDI4NDMgMTMuMDk5OTIyNiw0LjgyNjYyNTE0IEMxNC4yNDk2NTI4LDUuNjQxODU0MjIgMTUsNi45ODMzMDA2MiAxNSw4LjUgQzE1LDEwLjcxNjcxNDQgMTMuMzk3MTg3MywxMi41NTkwNzE5IDExLjI4NzI2NzEsMTIuOTMxMzY3MyBDMTAuNDg2NzI0OCwxNC4xNzU3NzAzIDkuMDg5NjE2OTYsMTUgNy41LDE1IEM1LjkxMDM4MzA0LDE1IDQuNTEzMjc1MjQsMTQuMTc1NzcwMyAzLjcxMjczMjkxLDEyLjkzMTM2NzMgQzEuNjAyODEyNjgsMTIuNTU5MDcxOSAwLDEwLjcxNjcxNDQgMCw4LjUgQzAsNi45ODMzMDA2MiAwLjc1MDM0NzI0NCw1LjY0MTg1NDIyIDEuOTAwMDc3NDEsNC44MjY2MjUxNCBDMC43ODczNzU0NDUsNC40NjEwMjg0MyAwLDMuNTU3MTM5OCAwLDIuNSBDMCwxLjExOTI4ODEzIDEuMzQzMTQ1NzUsMCAzLDAgQzQuMTc0NDExMjIsMCA1LjE5MTIwNzI1LDAuNTYyMzU5MDE5IDUuNjgzNzc1MzcsMS4zODE1NjY0NiBaJyBpZD0nT3ZhbC04Jz48L3BhdGg+XG5cdFx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTUuNzM4MzQyMjgsMTIgQzUuODYyOTA5NzksMTIgNi4xNDY0MjM1MywxMiA2LjE0NjQyMzUzLDEyIEM2LjE0NjQyMzUzLDEyIDYuNDMyMTU2OTYsMTIuNDQyNjEyMyA2LjUyNDY1ODIsMTIuNDkxOTczOSBDNi42NjQ1NTYwMSwxMi41NjY2Mjc3IDcsMTIuNDkxOTczOSA3LDEyLjQ5MTk3MzkgTDcsMTIgTDgsMTIgTDgsMTIuNDkxOTczOSBMOC40OTc5OTIyOCwxMi40OTE5NzM5IEw4Ljg0MzAxNzY5LDEyIEw5LjM5MTg0NTcsMTIgQzkuMzkxODQ1NywxMiA4Ljk5NTk4NDU3LDEyLjk4Mzk0NzggOC40OTc5OTIyOCwxMi45ODM5NDc4IEw2LjYwNzAyNDA3LDEyLjk4Mzk0NzggQzYuMjE0MDQ4MTMsMTIuOTgzOTQ3OCA1LjQ1OTk2MDk0LDEyIDUuNzM4MzQyMjgsMTIgWicgaWQ9J1JlY3RhbmdsZS00NC1Db3B5LTInPjwvcGF0aD5cblx0XHRcdFx0XHRcdFx0XHQ8Y2lyY2xlIGlkPSdPdmFsLTE0JyBjeD0nMTAuNScgY3k9JzcuNScgcj0nMC41Jz48L2NpcmNsZT5cblx0XHRcdFx0XHRcdFx0XHQ8Y2lyY2xlIGlkPSdPdmFsLTE0LUNvcHknIGN4PSc0LjUnIGN5PSc3LjUnIHI9JzAuNSc+PC9jaXJjbGU+XG5cdFx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTEyLjY5OTk5NjksNSBDMTIuNjk5OTk2OSwzLjA2NzAwMzM4IDExLjEzMjk5MzYsMS41IDkuMTk5OTk2OTUsMS41JyBpZD0nT3ZhbC0xNic+PC9wYXRoPlxuXHRcdFx0XHRcdFx0XHRcdDxwYXRoIGQ9J001LjUsNSBDNS41LDMuMDY3MDAzMzggMy45MzI5OTY2MiwxLjUgMiwxLjUnIGlkPSdPdmFsLTE2LUNvcHknIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDMuNzUwMDAwLCAzLjI1MDAwMCkgc2NhbGUoLTEsIDEpIHRyYW5zbGF0ZSgtMy43NTAwMDAsIC0zLjI1MDAwMCkgJz48L3BhdGg+XG5cdFx0XHRcdFx0XHRcdFx0PHJlY3QgaWQ9J1JlY3RhbmdsZS00NC1Db3B5JyB4PSc3JyB5PScxMScgd2lkdGg9JzEnIGhlaWdodD0nMSc+PC9yZWN0PlxuXHRcdFx0XHRcdFx0XHRcdDxwYXRoIGQ9J002LDEwIEw2LjUsMTAgTDYuNDk5OTk5OTksOS41IEw4LjUwMDAwMDA1LDkuNSBMOC41MDAwMDAwNSwxMCBMOSwxMCBMOSwxMC41IEw4LjUsMTAuNSBMOC41LDExIEw2LjUsMTEgTDYuNSwxMC41IEw2LDEwLjUgTDYsMTAgWicgaWQ9J1BhdGgnPjwvcGF0aD5cblx0XHRcdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0PC9nPlxuXHRcdFx0PC9zdmc+XCJcblx0Y2hldnJvbiA6IFwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdFx0PHN2ZyB3aWR0aD0nMTNweCcgaGVpZ2h0PScyMnB4JyB2aWV3Qm94PScwIDAgMTMgMjInIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayc+XG5cdFx0ICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy42LjEgKDI2MzEzKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHQgICAgPHRpdGxlPkJhY2sgQ2hldnJvbjwvdGl0bGU+XG5cdFx0ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdCAgICA8ZGVmcz48L2RlZnM+XG5cdFx0ICAgIDxnIGlkPSdQYWdlLTEnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnPlxuXHRcdCAgICAgICAgPGcgaWQ9J05hdmlnYXRpb24tQmFyL0JhY2snIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC04LjAwMDAwMCwgLTMxLjAwMDAwMCknIGZpbGw9JyMwMDc2RkYnPlxuXHRcdCAgICAgICAgICAgIDxwYXRoIGQ9J004LjUsNDIgTDE5LDMxLjUgTDIxLDMzLjUgTDEyLjUsNDIgTDIxLDUwLjUgTDE5LDUyLjUgTDguNSw0MiBaJyBpZD0nQmFjay1DaGV2cm9uJz48L3BhdGg+XG5cdFx0ICAgICAgICA8L2c+XG5cdFx0ICAgIDwvZz5cblx0XHQ8L3N2Zz5cIlxuXHRlbW9qaXM6IFtcIvCfmIBcIiwgXCLwn5isXCIsIFwi8J+YgVwiLCBcIvCfmIJcIiwgXCLwn5iDXCIsIFwi8J+YhFwiLCBcIvCfmIVcIiwgXCLwn5iGXCIsIFwi8J+Yh1wiLCBcIvCfmIlcIiwgXCLwn5iKXCIsIFwi8J+ZglwiLCBcIvCfmYNcIiwgXCLimLrvuI9cIiwgXCLwn5iLXCIsIFwi8J+YjFwiLCBcIvCfmI1cIiwgXCLwn5iYXCIsIFwi8J+Yl1wiLCBcIvCfmJlcIiwgXCLwn5iaXCIsIFwi8J+YnFwiLCBcIvCfmJ1cIiwgXCLwn5ibXCIsIFwi8J+kkVwiLCBcIvCfpJNcIiwgXCLwn5iOXCIsIFwi8J+kl1wiLCBcIvCfmI9cIiwgXCLwn5i2XCIsIFwi8J+YkFwiLCBcIvCfmJFcIiwgXCLwn5iSXCIsIFwi8J+ZhFwiLCBcIvCfpJRcIiwgXCLwn5izXCIsIFwi8J+YnlwiLCBcIvCfmJ9cIiwgXCLwn5igXCIsIFwi8J+YoVwiLCBcIvCfmJRcIiwgXCLwn5iVXCIsIFwi8J+ZgVwiLCBcIuKYue+4j1wiLCBcIvCfmKNcIiwgXCLwn5iWXCIsIFwi8J+Yq1wiLCBcIvCfmKlcIiwgXCLwn5ikXCIsIFwi8J+YrlwiLCBcIvCfmLFcIiwgXCLwn5ioXCIsIFwi8J+YsFwiLCBcIvCfmK9cIiwgXCLwn5imXCIsIFwi8J+Yp1wiLCBcIvCfmKJcIiwgXCLwn5ilXCIsIFwi8J+YqlwiLCBcIvCfmJNcIiwgXCLwn5itXCIsIFwi8J+YtVwiLCBcIvCfmLJcIiwgXCLwn6SQXCIsIFwi8J+Yt1wiLCBcIvCfpJJcIiwgXCLwn6SVXCIsIFwi8J+YtFwiLCBcIvCfkqRcIiwgXCLwn5KpXCIsIFwi8J+YiFwiLCBcIvCfkb9cIiwgXCLwn5G5XCIsIFwi8J+RulwiLCBcIvCfkoBcIiwgXCLwn5G7XCIsIFwi8J+RvVwiLCBcIvCfpJZcIiwgXCLwn5i6XCIsIFwi8J+YuFwiLCBcIvCfmLlcIiwgXCLwn5i7XCIsIFwi8J+YvFwiLCBcIvCfmL1cIiwgXCLwn5mAXCIsIFwi8J+Yv1wiLCBcIvCfmL5cIiwgXCLwn5mMXCIsIFwi8J+Rj1wiLCBcIvCfkYtcIiwgXCLwn5GNXCIsIFwi8J+RjlwiLCBcIvCfkYpcIiwgXCLinIpcIiwgXCLinIzvuI9cIiwgXCLwn5GMXCIsIFwi4pyLXCIsIFwi8J+RkFwiLCBcIvCfkqpcIiwgXCLwn5mPXCIsIFwi4pid77iPXCIsIFwi8J+RhlwiLCBcIvCfkYdcIiwgXCLwn5GIXCIsIFwi8J+RiVwiLCBcIvCflpVcIiwgXCLwn5aQXCIsIFwi8J+kmFwiLCBcIvCflpZcIiwgXCLinI3vuI9cIiwgXCLwn5KFXCIsIFwi8J+RhFwiLCBcIvCfkYVcIiwgXCLwn5GCXCIsIFwi8J+Rg1wiLCBcIvCfkYFcIiwgXCLwn5GAXCIsIFwi8J+RpFwiLCBcIvCfkaVcIiwgXCLwn5ejXCIsIFwi8J+RtlwiLCBcIvCfkaZcIiwgXCLwn5GnXCIsIFwi8J+RqFwiLCBcIvCfkalcIiwgXCLwn5GxXCIsIFwi8J+RtFwiLCBcIvCfkbVcIiwgXCLwn5GyXCIsIFwi8J+Rs1wiLCBcIvCfka5cIiwgXCLwn5G3XCIsIFwi8J+SglwiLCBcIvCflbVcIiwgXCLwn46FXCIsIFwi8J+RvFwiLCBcIvCfkbhcIiwgXCLwn5GwXCIsIFwi8J+atlwiLCBcIvCfj4NcIiwgXCLwn5KDXCIsIFwi8J+Rr1wiLCBcIvCfkatcIiwgXCLwn5GsXCIsIFwi8J+RrVwiLCBcIvCfmYdcIiwgXCLwn5KBXCIsIFwi8J+ZhVwiLCBcIvCfmYZcIiwgXCLwn5mLXCIsIFwi8J+ZjlwiLCBcIvCfmY1cIiwgXCLwn5KHXCIsIFwi8J+ShlwiLCBcIvCfkpFcIiwgXCLwn5Gp4oCN4p2k77iP4oCN8J+RqVwiLCBcIvCfkajigI3inaTvuI/igI3wn5GoXCIsIFwi8J+Sj1wiLCBcIvCfkanigI3inaTvuI/igI3wn5KL4oCN8J+RqVwiLCBcIvCfkajigI3inaTvuI/igI3wn5KL4oCN8J+RqFwiLCBcIvCfkapcIiwgXCLwn5Go4oCN8J+RqeKAjfCfkadcIiwgXCLwn5Go4oCN8J+RqeKAjfCfkafigI3wn5GmXCIsIFwi8J+RqOKAjfCfkanigI3wn5Gm4oCN8J+RplwiLCBcIvCfkajigI3wn5Gp4oCN8J+Rp+KAjfCfkadcIiwgXCLwn5Gp4oCN8J+RqeKAjfCfkaZcIiwgXCLwn5Gp4oCN8J+RqeKAjfCfkadcIiwgXCLwn5Gp4oCN8J+RqeKAjfCfkafigI3wn5GmXCIsIFwi8J+RqeKAjfCfkanigI3wn5Gm4oCN8J+RplwiLCBcIvCfkanigI3wn5Gp4oCN8J+Rp+KAjfCfkadcIiwgXCLwn5Go4oCN8J+RqOKAjfCfkaZcIiwgXCLwn5Go4oCN8J+RqOKAjfCfkadcIiwgXCLwn5Go4oCN8J+RqOKAjfCfkafigI3wn5GmXCIsIFwi8J+RqOKAjfCfkajigI3wn5Gm4oCN8J+RplwiLCBcIvCfkajigI3wn5Go4oCN8J+Rp+KAjfCfkadcIiwgXCLwn5GaXCIsIFwi8J+RlVwiLCBcIvCfkZZcIiwgXCLwn5GUXCIsIFwi8J+Rl1wiLCBcIvCfkZlcIiwgXCLwn5GYXCIsIFwi8J+ShFwiLCBcIvCfkotcIiwgXCLwn5GjXCIsIFwi8J+RoFwiLCBcIvCfkaFcIiwgXCLwn5GiXCIsIFwi8J+RnlwiLCBcIvCfkZ9cIiwgXCLwn5GSXCIsIFwi8J+OqVwiLCBcIuKbkVwiLCBcIvCfjpNcIiwgXCLwn5GRXCIsIFwi8J+OklwiLCBcIvCfkZ1cIiwgXCLwn5GbXCIsIFwi8J+RnFwiLCBcIvCfkrxcIiwgXCLwn5GTXCIsIFwi8J+VtlwiLCBcIvCfko1cIiwgXCLwn4yCXCIsIFwi8J+bkVwiLCBcIvCfkLZcIiwgXCLwn5CxXCIsIFwi8J+QrVwiLCBcIvCfkLlcIiwgXCLwn5CwXCIsIFwi8J+Qu1wiLCBcIvCfkLxcIiwgXCLwn5CoXCIsIFwi8J+Qr1wiLCBcIvCfpoFcIiwgXCLwn5CuXCIsIFwi8J+Qt1wiLCBcIvCfkL1cIiwgXCLwn5C4XCIsIFwi8J+QmVwiLCBcIvCfkLVcIiwgXCLwn5mIXCIsIFwi8J+ZiVwiLCBcIvCfmYpcIiwgXCLwn5CSXCIsIFwi8J+QlFwiLCBcIvCfkKdcIiwgXCLwn5CmXCIsIFwi8J+QpFwiLCBcIvCfkKNcIiwgXCLwn5ClXCIsIFwi8J+QulwiLCBcIvCfkJdcIiwgXCLwn5C0XCIsIFwi8J+mhFwiLCBcIvCfkJ1cIiwgXCLwn5CbXCIsIFwi8J+QjFwiLCBcIvCfkJ5cIiwgXCLwn5CcXCIsIFwi8J+Vt1wiLCBcIvCfpoJcIiwgXCLwn6aAXCIsIFwi8J+QjVwiLCBcIvCfkKJcIiwgXCLwn5CgXCIsIFwi8J+Qn1wiLCBcIvCfkKFcIiwgXCLwn5CsXCIsIFwi8J+Qs1wiLCBcIvCfkItcIiwgXCLwn5CKXCIsIFwi8J+QhlwiLCBcIvCfkIVcIiwgXCLwn5CDXCIsIFwi8J+QglwiLCBcIvCfkIRcIiwgXCLwn5CqXCIsIFwi8J+Qq1wiLCBcIvCfkJhcIiwgXCLwn5CQXCIsIFwi8J+Qj1wiLCBcIvCfkJFcIiwgXCLwn5COXCIsIFwi8J+QllwiLCBcIvCfkIBcIiwgXCLwn5CBXCIsIFwi8J+Qk1wiLCBcIvCfpoNcIiwgXCLwn5WKXCIsIFwi8J+QlVwiLCBcIvCfkKlcIiwgXCLwn5CIXCIsIFwi8J+Qh1wiLCBcIvCfkL9cIiwgXCLwn5C+XCIsIFwi8J+QiVwiLCBcIvCfkLJcIiwgXCLwn4y1XCIsIFwi8J+OhFwiLCBcIvCfjLJcIiwgXCLwn4yzXCIsIFwi8J+MtFwiLCBcIvCfjLFcIiwgXCLwn4y/XCIsIFwi4piYXCIsIFwi8J+NgFwiLCBcIvCfjo1cIiwgXCLwn46LXCIsIFwi8J+Ng1wiLCBcIvCfjYJcIiwgXCLwn42BXCIsIFwi8J+MvlwiLCBcIvCfjLpcIiwgXCLwn4y6XCIsIFwi8J+Mu1wiLCBcIvCfjLlcIiwgXCLwn4y3XCIsIFwi8J+MvFwiLCBcIvCfjLhcIiwgXCLwn5KQXCIsIFwi8J+NhFwiLCBcIvCfjLBcIiwgXCLwn46DXCIsIFwi8J+QmlwiLCBcIvCflbhcIiwgXCLwn4yOXCIsIFwi8J+MjVwiLCBcIvCfjI9cIiwgXCLwn4yVXCIsIFwi8J+MllwiLCBcIvCfjJdcIiwgXCLwn4yYXCIsIFwi8J+MkVwiLCBcIvCfjJJcIiwgXCLwn4yTXCIsIFwi8J+MlFwiLCBcIvCfjJpcIiwgXCLwn4ydXCIsIFwi8J+Mm1wiLCBcIvCfjJxcIiwgXCLwn4yeXCIsIFwi8J+MmVwiLCBcIuKtkO+4j1wiLCBcIvCfjJ9cIiwgXCLwn5KrXCIsIFwi4pyoXCIsIFwi4piE77iPXCIsIFwi4piA77iPXCIsIFwi8J+MpFwiLCBcIuKbhe+4j1wiLCBcIvCfjKVcIiwgXCLwn4ymXCIsIFwi4piB77iPXCIsIFwi8J+Mp1wiLCBcIuKbiFwiLCBcIvCfjKlcIiwgXCLimqHvuI9cIiwgXCLwn5SlXCIsIFwi8J+SpVwiLCBcIuKdhO+4j1wiLCBcIvCfjKhcIiwgXCLimIPvuI9cIiwgXCLim4TvuI9cIiwgXCLwn4ysXCIsIFwi8J+SqFwiLCBcIvCfjKpcIiwgXCLwn4yrXCIsIFwi4piC77iPXCIsIFwi4piU77iPXCIsIFwi8J+Sp1wiLCBcIvCfkqZcIiwgXCLwn4yKXCIsIFwi8J+bkVwiLCBcIvCfm5FcIiwgXCLwn42PXCIsIFwi8J+NjlwiLCBcIvCfjZBcIiwgXCLwn42KXCIsIFwi8J+Ni1wiLCBcIvCfjYxcIiwgXCLwn42JXCIsIFwi8J+Nh1wiLCBcIvCfjZNcIiwgXCLwn42IXCIsIFwi8J+NklwiLCBcIvCfjZFcIiwgXCLwn42NXCIsIFwi8J+NhVwiLCBcIvCfjYZcIiwgXCLwn4y2XCIsIFwi8J+MvVwiLCBcIvCfjaBcIiwgXCLwn42vXCIsIFwi8J+NnlwiLCBcIvCfp4BcIiwgXCLwn42XXCIsIFwi8J+NllwiLCBcIvCfjaRcIiwgXCLwn42zXCIsIFwi8J+NlFwiLCBcIvCfjZ9cIiwgXCLwn4ytXCIsIFwi8J+NlVwiLCBcIvCfjZ1cIiwgXCLwn4yuXCIsIFwi8J+Mr1wiLCBcIvCfjZxcIiwgXCLwn42yXCIsIFwi8J+NpVwiLCBcIvCfjaNcIiwgXCLwn42xXCIsIFwi8J+Nm1wiLCBcIvCfjZlcIiwgXCLwn42aXCIsIFwi8J+NmFwiLCBcIvCfjaJcIiwgXCLwn42hXCIsIFwi8J+Np1wiLCBcIvCfjahcIiwgXCLwn42mXCIsIFwi8J+NsFwiLCBcIvCfjoJcIiwgXCLwn42uXCIsIFwi8J+NrFwiLCBcIvCfja1cIiwgXCLwn42rXCIsIFwi8J+Nv1wiLCBcIvCfjalcIiwgXCLwn42qXCIsIFwi8J+NulwiLCBcIvCfjbtcIiwgXCLwn423XCIsIFwi8J+NuFwiLCBcIvCfjblcIiwgXCLwn42+XCIsIFwi8J+NtlwiLCBcIvCfjbVcIiwgXCLimJXvuI9cIiwgXCLwn428XCIsIFwi8J+NtFwiLCBcIvCfjb1cIiwgXCLwn5uRXCIsIFwi8J+bkVwiLCBcIvCfm5FcIiwgXCLimr3vuI9cIiwgXCLwn4+AXCIsIFwi8J+PiFwiLCBcIuKavu+4j1wiLCBcIvCfjr5cIiwgXCLwn4+QXCIsIFwi8J+PiVwiLCBcIvCfjrFcIiwgXCLim7PvuI9cIiwgXCLwn4+MXCIsIFwi8J+Pk1wiLCBcIvCfj7hcIiwgXCLwn4+SXCIsIFwi8J+PkVwiLCBcIvCfj49cIiwgXCLwn46/XCIsIFwi4pu3XCIsIFwi8J+PglwiLCBcIuKbuFwiLCBcIvCfj7lcIiwgXCLwn46jXCIsIFwi8J+ao1wiLCBcIvCfj4pcIiwgXCLwn4+EXCIsIFwi8J+bgFwiLCBcIuKbuVwiLCBcIvCfj4tcIiwgXCLwn5q0XCIsIFwi8J+atVwiLCBcIvCfj4dcIiwgXCLwn5W0XCIsIFwi8J+PhlwiLCBcIvCfjr1cIiwgXCLwn4+FXCIsIFwi8J+OllwiLCBcIvCfjpdcIiwgXCLwn4+1XCIsIFwi8J+Oq1wiLCBcIvCfjp9cIiwgXCLwn46tXCIsIFwi8J+OqFwiLCBcIvCfjqpcIiwgXCLwn46kXCIsIFwi8J+Op1wiLCBcIvCfjrxcIiwgXCLwn465XCIsIFwi8J+Ot1wiLCBcIvCfjrpcIiwgXCLwn464XCIsIFwi8J+Ou1wiLCBcIvCfjqxcIiwgXCLwn46uXCIsIFwi8J+RvlwiLCBcIvCfjq9cIiwgXCLwn46yXCIsIFwi8J+OsFwiLCBcIvCfjrNcIiwgXCLwn5uRXCIsIFwi8J+bkVwiLCBcIvCfm5FcIiwgXCLwn5qXXCIsIFwi8J+alVwiLCBcIvCfmplcIiwgXCLwn5qMXCIsIFwi8J+ajlwiLCBcIvCfj45cIiwgXCLwn5qTXCIsIFwi8J+akVwiLCBcIvCfmpJcIiwgXCLwn5qQXCIsIFwi8J+amlwiLCBcIvCfmptcIiwgXCLwn5qcXCIsIFwi8J+PjVwiLCBcIvCfmrJcIiwgXCLwn5qoXCIsIFwi8J+alFwiLCBcIvCfmo1cIiwgXCLwn5qYXCIsIFwi8J+allwiLCBcIvCfmqFcIiwgXCLwn5qgXCIsIFwi8J+ar1wiLCBcIvCfmoNcIiwgXCLwn5qLXCIsIFwi8J+anVwiLCBcIvCfmoRcIiwgXCLwn5qFXCIsIFwi8J+aiFwiLCBcIvCfmp5cIiwgXCLwn5qCXCIsIFwi8J+ahlwiLCBcIvCfmodcIiwgXCLwn5qKXCIsIFwi8J+aiVwiLCBcIvCfmoFcIiwgXCLwn5upXCIsIFwi4pyI77iPXCIsIFwi8J+bq1wiLCBcIvCfm6xcIiwgXCLim7XvuI9cIiwgXCLwn5ulXCIsIFwi8J+apFwiLCBcIuKbtFwiLCBcIvCfm7NcIiwgXCLwn5qAXCIsIFwi8J+bsFwiLCBcIvCfkrpcIiwgXCLimpPvuI9cIiwgXCLwn5qnXCIsIFwi4pu977iPXCIsIFwi8J+aj1wiLCBcIvCfmqZcIiwgXCLwn5qlXCIsIFwi8J+PgVwiLCBcIvCfmqJcIiwgXCLwn46hXCIsIFwi8J+OolwiLCBcIvCfjqBcIiwgXCLwn4+XXCIsIFwi8J+MgVwiLCBcIvCfl7xcIiwgXCLwn4+tXCIsIFwi4puy77iPXCIsIFwi8J+OkVwiLCBcIuKbsFwiLCBcIvCfj5RcIiwgXCLwn5e7XCIsIFwi8J+Mi1wiLCBcIvCfl75cIiwgXCLwn4+VXCIsIFwi4pu677iPXCIsIFwi8J+PnlwiLCBcIvCfm6NcIiwgXCLwn5ukXCIsIFwi8J+MhVwiLCBcIvCfjIRcIiwgXCLwn4+cXCIsIFwi8J+PllwiLCBcIvCfj51cIiwgXCLwn4yHXCIsIFwi8J+MhlwiLCBcIvCfj5lcIiwgXCLwn4yDXCIsIFwi8J+MiVwiLCBcIvCfjIxcIiwgXCLwn4ygXCIsIFwi8J+Oh1wiLCBcIvCfjoZcIiwgXCLwn4yIXCIsIFwi8J+PmFwiLCBcIvCfj7BcIiwgXCLwn4+vXCIsIFwi8J+Pn1wiLCBcIvCfl71cIiwgXCLwn4+gXCIsIFwi8J+PoVwiLCBcIvCfj5pcIiwgXCLwn4+iXCIsIFwi8J+PrFwiLCBcIvCfj6NcIiwgXCLwn4+kXCIsIFwi8J+PpVwiLCBcIvCfj6ZcIiwgXCLwn4+oXCIsIFwi8J+PqlwiLCBcIvCfj6tcIiwgXCLwn4+pXCIsIFwi8J+SklwiLCBcIvCfj5tcIiwgXCLim6rvuI9cIiwgXCLwn5WMXCIsIFwi8J+VjVwiLCBcIvCflYtcIiwgXCLim6lcIiwgXCLijJrvuI9cIiwgXCLwn5OxXCIsIFwi8J+TslwiLCBcIvCfkrtcIiwgXCLijKjvuI9cIiwgXCLwn5alXCIsIFwi8J+WqFwiLCBcIvCflrFcIiwgXCLwn5ayXCIsIFwi8J+VuVwiLCBcIvCfl5xcIiwgXCLwn5K9XCIsIFwi8J+SvlwiLCBcIvCfkr9cIiwgXCLwn5OAXCIsIFwi8J+TvFwiLCBcIvCfk7dcIiwgXCLwn5O4XCIsIFwi8J+TuVwiLCBcIvCfjqVcIiwgXCLwn5O9XCIsIFwi8J+OnlwiLCBcIvCfk55cIiwgXCLimI7vuI9cIiwgXCLwn5OfXCIsIFwi8J+ToFwiLCBcIvCfk7pcIiwgXCLwn5O7XCIsIFwi8J+OmVwiLCBcIvCfjppcIiwgXCLwn46bXCIsIFwi4o+xXCIsIFwi4o+yXCIsIFwi4o+wXCIsIFwi8J+VsFwiLCBcIuKPs1wiLCBcIuKMm++4j1wiLCBcIvCfk6FcIiwgXCLwn5SLXCIsIFwi8J+UjFwiLCBcIvCfkqFcIiwgXCLwn5SmXCIsIFwi8J+Vr1wiLCBcIvCfl5FcIiwgXCLwn5uiXCIsIFwi8J+SuFwiLCBcIvCfkrVcIiwgXCLwn5K0XCIsIFwi8J+StlwiLCBcIvCfkrdcIiwgXCLwn5KwXCIsIFwi8J+Ss1wiLCBcIvCfko5cIiwgXCLimpZcIiwgXCLwn5SnXCIsIFwi8J+UqFwiLCBcIuKaklwiLCBcIvCfm6BcIiwgXCLim49cIiwgXCLwn5SpXCIsIFwi4pqZXCIsIFwi4puTXCIsIFwi8J+Uq1wiLCBcIvCfkqNcIiwgXCLwn5SqXCIsIFwi8J+XoVwiLCBcIuKalFwiLCBcIvCfm6FcIiwgXCLwn5qsXCIsIFwi4pig77iPXCIsIFwi4pqwXCIsIFwi4pqxXCIsIFwi8J+PulwiLCBcIvCflK5cIiwgXCLwn5O/XCIsIFwi8J+SiFwiLCBcIuKal1wiLCBcIvCflK1cIiwgXCLwn5SsXCIsIFwi8J+Vs1wiLCBcIvCfkopcIiwgXCLwn5KJXCIsIFwi8J+MoVwiLCBcIvCfj7dcIiwgXCLwn5SWXCIsIFwi8J+avVwiLCBcIvCfmr9cIiwgXCLwn5uBXCIsIFwi8J+UkVwiLCBcIvCfl51cIiwgXCLwn5uLXCIsIFwi8J+bjFwiLCBcIvCfm49cIiwgXCLwn5qqXCIsIFwi8J+bjlwiLCBcIvCflrxcIiwgXCLwn5e6XCIsIFwi4puxXCIsIFwi8J+Xv1wiLCBcIvCfm41cIiwgXCLwn46IXCIsIFwi8J+Oj1wiLCBcIvCfjoBcIiwgXCLwn46BXCIsIFwi8J+OilwiLCBcIvCfjolcIiwgXCLwn46OXCIsIFwi8J+OkFwiLCBcIvCfjoxcIiwgXCLwn4+uXCIsIFwi4pyJ77iPXCIsIFwi8J+TqVwiLCBcIvCfk6hcIiwgXCLwn5OnXCIsIFwi8J+SjFwiLCBcIvCfk65cIiwgXCLwn5OqXCIsIFwi8J+Tq1wiLCBcIvCfk6xcIiwgXCLwn5OtXCIsIFwi8J+TplwiLCBcIvCfk69cIiwgXCLwn5OlXCIsIFwi8J+TpFwiLCBcIvCfk5xcIiwgXCLwn5ODXCIsIFwi8J+TkVwiLCBcIvCfk4pcIiwgXCLwn5OIXCIsIFwi8J+TiVwiLCBcIvCfk4RcIiwgXCLwn5OFXCIsIFwi8J+ThlwiLCBcIvCfl5NcIiwgXCLwn5OHXCIsIFwi8J+Xg1wiLCBcIvCfl7NcIiwgXCLwn5eEXCIsIFwi8J+Ti1wiLCBcIvCfl5JcIiwgXCLwn5OBXCIsIFwi8J+TglwiLCBcIvCfl4JcIiwgXCLwn5eeXCIsIFwi8J+TsFwiLCBcIvCfk5NcIiwgXCLwn5OVXCIsIFwi8J+Tl1wiLCBcIvCfk5hcIiwgXCLwn5OZXCIsIFwi8J+TlFwiLCBcIvCfk5JcIiwgXCLwn5OaXCIsIFwi8J+TllwiLCBcIvCflJdcIiwgXCLwn5OOXCIsIFwi8J+Wh1wiLCBcIuKcgu+4j1wiLCBcIvCfk5BcIiwgXCLwn5OPXCIsIFwi8J+TjFwiLCBcIvCfk41cIiwgXCLwn5qpXCIsIFwi8J+Ps1wiLCBcIvCfj7RcIiwgXCLwn5SQXCIsIFwi8J+UklwiLCBcIvCflJNcIiwgXCLwn5SPXCIsIFwi8J+WilwiLCBcIvCflotcIiwgXCLinJLvuI9cIiwgXCLwn5OdXCIsIFwi4pyP77iPXCIsIFwi8J+WjVwiLCBcIvCfloxcIiwgXCLwn5SNXCIsIFwi8J+UjlwiLCBcIvCfm5FcIiwgXCLwn5uRXCIsIFwi4p2k77iPXCIsIFwi8J+Sm1wiLCBcIvCfkppcIiwgXCLwn5KZXCIsIFwi8J+SnFwiLCBcIvCfkpRcIiwgXCLinaPvuI9cIiwgXCLwn5KVXCIsIFwi8J+SnlwiLCBcIvCfkpNcIiwgXCLwn5KXXCIsIFwi8J+SllwiLCBcIvCfkphcIiwgXCLwn5KdXCIsIFwi8J+Sn1wiLCBcIuKYru+4j1wiLCBcIuKcne+4j1wiLCBcIuKYqu+4j1wiLCBcIvCflYlcIiwgXCLimLjvuI9cIiwgXCLinKHvuI9cIiwgXCLwn5SvXCIsIFwi8J+VjlwiLCBcIuKYr++4j1wiLCBcIuKYpu+4j1wiLCBcIvCfm5BcIiwgXCLim45cIiwgXCLimYjvuI9cIiwgXCLimYnvuI9cIiwgXCLimYrvuI9cIiwgXCLimYvvuI9cIiwgXCLimYzvuI9cIiwgXCLimY3vuI9cIiwgXCLimY7vuI9cIiwgXCLimY/vuI9cIiwgXCLimZDvuI9cIiwgXCLimZHvuI9cIiwgXCLimZLvuI9cIiwgXCLimZPvuI9cIiwgXCLwn4aUXCIsIFwi4pqbXCIsIFwi8J+Is1wiLCBcIvCfiLlcIiwgXCLimKLvuI9cIiwgXCLimKPvuI9cIiwgXCLwn5O0XCIsIFwi8J+Ts1wiLCBcIvCfiLZcIiwgXCLwn4ia77iPXCIsIFwi8J+IuFwiLCBcIvCfiLpcIiwgXCLwn4i377iPXCIsIFwi4py077iPXCIsIFwi8J+GmlwiLCBcIvCfiZFcIiwgXCLwn5KuXCIsIFwi8J+JkFwiLCBcIuOKme+4j1wiLCBcIuOKl++4j1wiLCBcIvCfiLRcIiwgXCLwn4i1XCIsIFwi8J+IslwiLCBcIvCfhbDvuI9cIiwgXCLwn4Wx77iPXCIsIFwi8J+GjlwiLCBcIvCfhpFcIiwgXCLwn4W+77iPXCIsIFwi8J+GmFwiLCBcIuKblO+4j1wiLCBcIvCfk5tcIiwgXCLwn5qrXCIsIFwi4p2MXCIsIFwi4q2V77iPXCIsIFwi8J+SolwiLCBcIuKZqO+4j1wiLCBcIvCfmrdcIiwgXCLwn5qvXCIsIFwi8J+as1wiLCBcIvCfmrFcIiwgXCLwn5SeXCIsIFwi8J+TtVwiLCBcIuKdl++4j1wiLCBcIuKdlVwiLCBcIuKdk1wiLCBcIuKdlFwiLCBcIuKAvO+4j1wiLCBcIuKBie+4j1wiLCBcIvCfkq9cIiwgXCLwn5SFXCIsIFwi8J+UhlwiLCBcIvCflLFcIiwgXCLimpxcIiwgXCLjgL3vuI9cIiwgXCLimqDvuI9cIiwgXCLwn5q4XCIsIFwi8J+UsFwiLCBcIuKZu++4j1wiLCBcIvCfiK/vuI9cIiwgXCLwn5K5XCIsIFwi4p2H77iPXCIsIFwi4pyz77iPXCIsIFwi4p2OXCIsIFwi4pyFXCIsIFwi8J+SoFwiLCBcIvCfjIBcIiwgXCLinr9cIiwgXCLwn4yQXCIsIFwi4pOC77iPXCIsIFwi8J+Pp1wiLCBcIvCfiILvuI9cIiwgXCLwn5uCXCIsIFwi8J+bg1wiLCBcIvCfm4RcIiwgXCLwn5uFXCIsIFwi4pm/77iPXCIsIFwi8J+arVwiLCBcIvCfmr5cIiwgXCLwn4W/77iPXCIsIFwi8J+asFwiLCBcIvCfmrlcIiwgXCLwn5q6XCIsIFwi8J+avFwiLCBcIvCfmrtcIiwgXCLwn5quXCIsIFwi8J+OplwiLCBcIvCfk7ZcIiwgXCLwn4iBXCIsIFwi8J+GllwiLCBcIvCfhpdcIiwgXCLwn4aZXCIsIFwi8J+GklwiLCBcIvCfhpVcIiwgXCLwn4aTXCIsIFwiMO+4j+KDo1wiLCBcIjHvuI/ig6NcIiwgXCIy77iP4oOjXCIsIFwiM++4j+KDo1wiLCBcIjTvuI/ig6NcIiwgXCI177iP4oOjXCIsIFwiNu+4j+KDo1wiLCBcIjfvuI/ig6NcIiwgXCI477iP4oOjXCIsIFwiOe+4j+KDo1wiLCBcIvCflJ9cIiwgXCLwn5SiXCIsIFwi4pa277iPXCIsIFwi4o+4XCIsIFwi4o+vXCIsIFwi4o+5XCIsIFwi4o+6XCIsIFwi4o+tXCIsIFwi4o+uXCIsIFwi4o+pXCIsIFwi4o+qXCIsIFwi8J+UgFwiLCBcIvCflIFcIiwgXCLwn5SCXCIsIFwi4peA77iPXCIsIFwi8J+UvFwiLCBcIvCflL1cIiwgXCLij6tcIiwgXCLij6xcIiwgXCLinqHvuI9cIiwgXCLirIXvuI9cIiwgXCLirIbvuI9cIiwgXCLirIfvuI9cIiwgXCLihpfvuI9cIiwgXCLihpjvuI9cIiwgXCLihpnvuI9cIiwgXCLihpbvuI9cIiwgXCLihpXvuI9cIiwgXCLihpTvuI9cIiwgXCLwn5SEXCIsIFwi4oaq77iPXCIsIFwi4oap77iPXCIsIFwi4qS077iPXCIsIFwi4qS177iPXCIsIFwiI++4j+KDo1wiLCBcIirvuI/ig6NcIiwgXCLihLnvuI9cIiwgXCLwn5SkXCIsIFwi8J+UoVwiLCBcIvCflKBcIiwgXCLwn5SjXCIsIFwi8J+OtVwiLCBcIvCfjrZcIiwgXCLjgLDvuI9cIiwgXCLinrBcIiwgXCLinJTvuI9cIiwgXCLwn5SDXCIsIFwi4p6VXCIsIFwi4p6WXCIsIFwi4p6XXCIsIFwi4pyW77iPXCIsIFwi8J+SslwiLCBcIvCfkrFcIiwgXCLCqe+4j1wiLCBcIsKu77iPXCIsIFwi4oSi77iPXCIsIFwi8J+UmlwiLCBcIvCflJlcIiwgXCLwn5SbXCIsIFwi8J+UnVwiLCBcIvCflJxcIiwgXCLimJHvuI9cIiwgXCLwn5SYXCIsIFwi4pqq77iPXCIsIFwi4pqr77iPXCIsIFwi8J+UtFwiLCBcIvCflLVcIiwgXCLwn5S4XCIsIFwi8J+UuVwiLCBcIvCflLZcIiwgXCLwn5S3XCIsIFwi8J+UulwiLCBcIuKWqu+4j1wiLCBcIuKWq++4j1wiLCBcIuKsm++4j1wiLCBcIuKsnO+4j1wiLCBcIvCflLtcIiwgXCLil7zvuI9cIiwgXCLil7vvuI9cIiwgXCLil77vuI9cIiwgXCLil73vuI9cIiwgXCLwn5SyXCIsIFwi8J+Us1wiLCBcIvCflIhcIiwgXCLwn5SJXCIsIFwi8J+UilwiLCBcIvCflIdcIiwgXCLwn5OjXCIsIFwi8J+TolwiLCBcIvCflJRcIiwgXCLwn5SVXCIsIFwi8J+Dj1wiLCBcIvCfgITvuI9cIiwgXCLimaDvuI9cIiwgXCLimaPvuI9cIiwgXCLimaXvuI9cIiwgXCLimabvuI9cIiwgXCLwn460XCIsIFwi8J+RgeKAjfCfl6hcIiwgXCLwn5KtXCIsIFwi8J+Xr1wiLCBcIvCfkqxcIiwgXCLwn5WQXCIsIFwi8J+VkVwiLCBcIvCflZJcIiwgXCLwn5WTXCIsIFwi8J+VlFwiLCBcIvCflZVcIiwgXCLwn5WWXCIsIFwi8J+Vl1wiLCBcIvCflZhcIiwgXCLwn5WZXCIsIFwi8J+VmlwiLCBcIvCflZtcIiwgXCLwn5WcXCIsIFwi8J+VnVwiLCBcIvCflZ5cIiwgXCLwn5WfXCIsIFwi8J+VoFwiLCBcIvCflaFcIiwgXCLwn5WiXCIsIFwi8J+Vo1wiLCBcIvCflaRcIiwgXCLwn5WlXCIsIFwi8J+VplwiLCBcIvCfladcIiwgXCLwn5uRXCIsIFwi8J+HpvCfh6tcIiwgXCLwn4em8J+HvVwiLCBcIvCfh6bwn4exXCIsIFwi8J+HqfCfh79cIiwgXCLwn4em8J+HuFwiLCBcIvCfh6bwn4epXCIsIFwi8J+HpvCfh7RcIiwgXCLwn4em8J+HrlwiLCBcIvCfh6bwn4e2XCIsIFwi8J+HpvCfh6xcIiwgXCLwn4em8J+Ht1wiLCBcIvCfh6bwn4eyXCIsIFwi8J+HpvCfh7xcIiwgXCLwn4em8J+HulwiLCBcIvCfh6bwn4e5XCIsIFwi8J+HpvCfh79cIiwgXCLwn4en8J+HuFwiLCBcIvCfh6fwn4etXCIsIFwi8J+Hp/Cfh6lcIiwgXCLwn4en8J+Hp1wiLCBcIvCfh6fwn4e+XCIsIFwi8J+Hp/Cfh6pcIiwgXCLwn4en8J+Hv1wiLCBcIvCfh6fwn4evXCIsIFwi8J+Hp/Cfh7JcIiwgXCLwn4en8J+HuVwiLCBcIvCfh6fwn4e0XCIsIFwi8J+Hp/Cfh7ZcIiwgXCLwn4en8J+HplwiLCBcIvCfh6fwn4e8XCIsIFwi8J+Hp/Cfh7dcIiwgXCLwn4eu8J+HtFwiLCBcIvCfh7vwn4esXCIsIFwi8J+Hp/Cfh7NcIiwgXCLwn4en8J+HrFwiLCBcIvCfh6fwn4erXCIsIFwi8J+Hp/Cfh65cIiwgXCLwn4eo8J+Hu1wiLCBcIvCfh7Dwn4etXCIsIFwi8J+HqPCfh7JcIiwgXCLwn4eo8J+HplwiLCBcIvCfh67wn4eoXCIsIFwi8J+HsPCfh75cIiwgXCLwn4eo8J+Hq1wiLCBcIvCfh7nwn4epXCIsIFwi8J+HqPCfh7FcIiwgXCLwn4eo8J+Hs1wiLCBcIvCfh6jwn4e9XCIsIFwi8J+HqPCfh6hcIiwgXCLwn4eo8J+HtFwiLCBcIvCfh7Dwn4eyXCIsIFwi8J+HqPCfh6xcIiwgXCLwn4eo8J+HqVwiLCBcIvCfh6jwn4ewXCIsIFwi8J+HqPCfh7dcIiwgXCLwn4et8J+Ht1wiLCBcIvCfh6jwn4e6XCIsIFwi8J+HqPCfh7xcIiwgXCLwn4eo8J+HvlwiLCBcIvCfh6jwn4e/XCIsIFwi8J+HqfCfh7BcIiwgXCLwn4ep8J+Hr1wiLCBcIvCfh6nwn4eyXCIsIFwi8J+HqfCfh7RcIiwgXCLwn4eq8J+HqFwiLCBcIvCfh6rwn4esXCIsIFwi8J+HuPCfh7tcIiwgXCLwn4es8J+HtlwiLCBcIvCfh6rwn4e3XCIsIFwi8J+HqvCfh6pcIiwgXCLwn4eq8J+HuVwiLCBcIvCfh6rwn4e6XCIsIFwi8J+Hq/Cfh7BcIiwgXCLwn4er8J+HtFwiLCBcIvCfh6vwn4evXCIsIFwi8J+Hq/Cfh65cIiwgXCLwn4er8J+Ht1wiLCBcIvCfh6zwn4erXCIsIFwi8J+HtfCfh6tcIiwgXCLwn4e58J+Hq1wiLCBcIvCfh6zwn4emXCIsIFwi8J+HrPCfh7JcIiwgXCLwn4es8J+HqlwiLCBcIvCfh6nwn4eqXCIsIFwi8J+HrPCfh61cIiwgXCLwn4es8J+HrlwiLCBcIvCfh6zwn4e3XCIsIFwi8J+HrPCfh7FcIiwgXCLwn4es8J+HqVwiLCBcIvCfh6zwn4e1XCIsIFwi8J+HrPCfh7pcIiwgXCLwn4es8J+HuVwiLCBcIvCfh6zwn4esXCIsIFwi8J+HrPCfh7NcIiwgXCLwn4es8J+HvFwiLCBcIvCfh6zwn4e+XCIsIFwi8J+HrfCfh7lcIiwgXCLwn4et8J+Hs1wiLCBcIvCfh63wn4ewXCIsIFwi8J+HrfCfh7pcIiwgXCLwn4eu8J+HuFwiLCBcIvCfh67wn4ezXCIsIFwi8J+HrvCfh6lcIiwgXCLwn4eu8J+Ht1wiLCBcIvCfh67wn4e2XCIsIFwi8J+HrvCfh6pcIiwgXCLwn4eu8J+HslwiLCBcIvCfh67wn4exXCIsIFwi8J+HrvCfh7lcIiwgXCLwn4eo8J+HrlwiLCBcIvCfh6/wn4eyXCIsIFwi8J+Hr/Cfh7VcIiwgXCLwn4ev8J+HqlwiLCBcIvCfh6/wn4e0XCIsIFwi8J+HsPCfh79cIiwgXCLwn4ew8J+HqlwiLCBcIvCfh7Dwn4euXCIsIFwi8J+HvfCfh7BcIiwgXCLwn4ew8J+HvFwiLCBcIvCfh7Dwn4esXCIsIFwi8J+HsfCfh6ZcIiwgXCLwn4ex8J+Hu1wiLCBcIvCfh7Hwn4enXCIsIFwi8J+HsfCfh7hcIiwgXCLwn4ex8J+Ht1wiLCBcIvCfh7Hwn4e+XCIsIFwi8J+HsfCfh65cIiwgXCLwn4ex8J+HuVwiLCBcIvCfh7Hwn4e6XCIsIFwi8J+HsvCfh7RcIiwgXCLwn4ey8J+HsFwiLCBcIvCfh7Lwn4esXCIsIFwi8J+HsvCfh7xcIiwgXCLwn4ey8J+HvlwiLCBcIvCfh7Lwn4e7XCIsIFwi8J+HsvCfh7FcIiwgXCLwn4ey8J+HuVwiLCBcIvCfh7Lwn4etXCIsIFwi8J+HsvCfh7ZcIiwgXCLwn4ey8J+Ht1wiLCBcIvCfh7Lwn4e6XCIsIFwi8J+HvvCfh7lcIiwgXCLwn4ey8J+HvVwiLCBcIvCfh6vwn4eyXCIsIFwi8J+HsvCfh6lcIiwgXCLwn4ey8J+HqFwiLCBcIvCfh7Lwn4ezXCIsIFwi8J+HsvCfh6pcIiwgXCLwn4ey8J+HuFwiLCBcIvCfh7Lwn4emXCIsIFwi8J+HsvCfh79cIiwgXCLwn4ey8J+HslwiLCBcIvCfh7Pwn4emXCIsIFwi8J+Hs/Cfh7dcIiwgXCLwn4ez8J+HtVwiLCBcIvCfh7Pwn4exXCIsIFwi8J+Hs/Cfh6hcIiwgXCLwn4ez8J+Hv1wiLCBcIvCfh7Pwn4euXCIsIFwi8J+Hs/Cfh6pcIiwgXCLwn4ez8J+HrFwiLCBcIvCfh7Pwn4e6XCIsIFwi8J+Hs/Cfh6tcIiwgXCLwn4ey8J+HtVwiLCBcIvCfh7Dwn4e1XCIsIFwi8J+Hs/Cfh7RcIiwgXCLwn4e08J+HslwiLCBcIvCfh7Xwn4ewXCIsIFwi8J+HtfCfh7xcIiwgXCLwn4e18J+HuFwiLCBcIvCfh7Xwn4emXCIsIFwi8J+HtfCfh6xcIiwgXCLwn4e18J+HvlwiLCBcIvCfh7Xwn4eqXCIsIFwi8J+HtfCfh61cIiwgXCLwn4e18J+Hs1wiLCBcIvCfh7Xwn4exXCIsIFwi8J+HtfCfh7lcIiwgXCLwn4e18J+Ht1wiLCBcIvCfh7bwn4emXCIsIFwi8J+Ht/Cfh6pcIiwgXCLwn4e38J+HtFwiLCBcIvCfh7fwn4e6XCIsIFwi8J+Ht/Cfh7xcIiwgXCLwn4en8J+HsVwiLCBcIvCfh7jwn4etXCIsIFwi8J+HsPCfh7NcIiwgXCLwn4ex8J+HqFwiLCBcIvCfh7Xwn4eyXCIsIFwi8J+Hu/Cfh6hcIiwgXCLwn4e88J+HuFwiLCBcIvCfh7jwn4eyXCIsIFwi8J+HuPCfh7lcIiwgXCLwn4e48J+HplwiLCBcIvCfh7jwn4ezXCIsIFwi8J+Ht/Cfh7hcIiwgXCLwn4e48J+HqFwiLCBcIvCfh7jwn4exXCIsIFwi8J+HuPCfh6xcIiwgXCLwn4e48J+HvVwiLCBcIvCfh7jwn4ewXCIsIFwi8J+HuPCfh65cIiwgXCLwn4e48J+Hp1wiLCBcIvCfh7jwn4e0XCIsIFwi8J+Hv/Cfh6ZcIiwgXCLwn4es8J+HuFwiLCBcIvCfh7Dwn4e3XCIsIFwi8J+HuPCfh7hcIiwgXCLwn4eq8J+HuFwiLCBcIvCfh7Hwn4ewXCIsIFwi8J+HuPCfh6lcIiwgXCLwn4e48J+Ht1wiLCBcIvCfh7jwn4e/XCIsIFwi8J+HuPCfh6pcIiwgXCLwn4eo8J+HrVwiLCBcIvCfh7jwn4e+XCIsIFwi8J+HufCfh7xcIiwgXCLwn4e58J+Hr1wiLCBcIvCfh7nwn4e/XCIsIFwi8J+HufCfh61cIiwgXCLwn4e58J+HsVwiLCBcIvCfh7nwn4esXCIsIFwi8J+HufCfh7BcIiwgXCLwn4e58J+HtFwiLCBcIvCfh7nwn4e5XCIsIFwi8J+HufCfh7NcIiwgXCLwn4e58J+Ht1wiLCBcIvCfh7nwn4eyXCIsIFwi8J+HufCfh6hcIiwgXCLwn4e58J+Hu1wiLCBcIvCfh7rwn4esXCIsIFwi8J+HuvCfh6ZcIiwgXCLwn4em8J+HqlwiLCBcIvCfh6zwn4enXCIsIFwi8J+HuvCfh7hcIiwgXCLwn4e78J+HrlwiLCBcIvCfh7rwn4e+XCIsIFwi8J+HuvCfh79cIiwgXCLwn4e78J+HulwiLCBcIvCfh7vwn4emXCIsIFwi8J+Hu/Cfh6pcIiwgXCLwn4e78J+Hs1wiLCBcIvCfh7zwn4erXCIsIFwi8J+HqvCfh61cIiwgXCLwn4e+8J+HqlwiLCBcIvCfh7/wn4eyXCIsIFwi8J+Hv/Cfh7xcIl1cblx0ZW1vamkgOiBcIjw/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyc/PlxuXHRcdDxzdmcgd2lkdGg9JzIwcHgnIGhlaWdodD0nMjBweCcgdmlld0JveD0nMCAwIDIwIDIwJyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHhtbG5zOnNrZXRjaD0naHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zJz5cblx0XHRcdDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy41LjIgKDI1MjM1KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHRcdDx0aXRsZT5FbW9qaTwvdGl0bGU+XG5cdFx0XHQ8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHRcdDxkZWZzPjwvZGVmcz5cblx0XHRcdDxnIGlkPSdQYWdlLTEnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIHNrZXRjaDp0eXBlPSdNU1BhZ2UnPlxuXHRcdFx0XHQ8ZyBpZD0nS2V5Ym9hcmQvTGlnaHQvTG93ZXInIHNrZXRjaDp0eXBlPSdNU0xheWVyR3JvdXAnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC02MC4wMDAwMDAsIC0xODEuMDAwMDAwKScgZmlsbD0nIzAzMDMwMyc+XG5cdFx0XHRcdFx0PGcgaWQ9J0JvdHRvbS1Sb3cnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDMuMDAwMDAwLCAxNzAuMDAwMDAwKScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCc+XG5cdFx0XHRcdFx0XHQ8cGF0aCBkPSdNNjYuNzUsMzAuNSBDNzIuMTM0Nzc2MywzMC41IDc2LjUsMjYuMTM0Nzc2MyA3Ni41LDIwLjc1IEM3Ni41LDE1LjM2NTIyMzcgNzIuMTM0Nzc2MywxMSA2Ni43NSwxMSBDNjEuMzY1MjIzNywxMSA1NywxNS4zNjUyMjM3IDU3LDIwLjc1IEM1NywyNi4xMzQ3NzYzIDYxLjM2NTIyMzcsMzAuNSA2Ni43NSwzMC41IFogTTY2Ljc1LDI5LjUgQzcxLjU4MjQ5MTYsMjkuNSA3NS41LDI1LjU4MjQ5MTYgNzUuNSwyMC43NSBDNzUuNSwxNS45MTc1MDg0IDcxLjU4MjQ5MTYsMTIgNjYuNzUsMTIgQzYxLjkxNzUwODQsMTIgNTgsMTUuOTE3NTA4NCA1OCwyMC43NSBDNTgsMjUuNTgyNDkxNiA2MS45MTc1MDg0LDI5LjUgNjYuNzUsMjkuNSBaIE02My43NSwxOSBDNjQuNDQwMzU1OSwxOSA2NSwxOC40NDAzNTU5IDY1LDE3Ljc1IEM2NSwxNy4wNTk2NDQxIDY0LjQ0MDM1NTksMTYuNSA2My43NSwxNi41IEM2My4wNTk2NDQxLDE2LjUgNjIuNSwxNy4wNTk2NDQxIDYyLjUsMTcuNzUgQzYyLjUsMTguNDQwMzU1OSA2My4wNTk2NDQxLDE5IDYzLjc1LDE5IFogTTY5Ljc1LDE5IEM3MC40NDAzNTU5LDE5IDcxLDE4LjQ0MDM1NTkgNzEsMTcuNzUgQzcxLDE3LjA1OTY0NDEgNzAuNDQwMzU1OSwxNi41IDY5Ljc1LDE2LjUgQzY5LjA1OTY0NDEsMTYuNSA2OC41LDE3LjA1OTY0NDEgNjguNSwxNy43NSBDNjguNSwxOC40NDAzNTU5IDY5LjA1OTY0NDEsMTkgNjkuNzUsMTkgWiBNNTkuODg3NjMzNCwyMi4xNjQxNDQ0IEM1OS42MzkwMzE2LDIxLjM4MzEzNCA2MC4wNjU5MTgsMjAuOTc4NTE1NiA2MC44NTMwOTUxLDIxLjIzMjkzMDQgQzYwLjg1MzA5NTEsMjEuMjMyOTMwNCA2My4wOTM3NTAzLDIyLjIxMjUgNjYuNzUwMDAwMSwyMi4yMTI1IEM3MC40MDYyNDk5LDIyLjIxMjUgNzIuNjQ2OTA0NywyMS4yMzI5MzA0IDcyLjY0NjkwNDcsMjEuMjMyOTMwNCBDNzMuNDI4NzE2MiwyMC45NjYyMTUzIDczLjg4MTI0NjMsMjEuNDA0NDA5NyA3My42MDU4NDc3LDIyLjE4MDc0MzcgQzczLjYwNTg0NzcsMjIuMTgwNzQzNyA3Mi42LDI3LjU3NSA2Ni43NSwyNy41NzUgQzYwLjksMjcuNTc1IDU5Ljg4NzYzMzQsMjIuMTY0MTQ0NCA1OS44ODc2MzM0LDIyLjE2NDE0NDQgWiBNNjYuNzUsMjMuMTg3NSBDNjQuMDY4NzUsMjMuMTg3NSA2MS44NTQ0MDU1LDIyLjQ3Mzc4MjEgNjEuODU0NDA1NSwyMi40NzM3ODIxIEM2MS4zMjczMDE5LDIyLjMyOTQ4IDYxLjE3ODEyMzMsMjIuNTcyMTYxNSA2MS41NjM5NTU1LDIyLjk1NzA3NSBDNjEuNTYzOTU1NSwyMi45NTcwNzUgNjIuMzYyNSwyNC42NSA2Ni43NSwyNC42NSBDNzEuMTM3NSwyNC42NSA3MS45NTA4NTAzLDIyLjk0MzgzMDQgNzEuOTUwODUwMywyMi45NDM4MzA0IEM3Mi4zMDkzNjU5LDIyLjUzOTkyNzggNzIuMTY5MDc5MywyMi4zMzU5ODQ0IDcxLjYzNTQyNzMsMjIuNDc2MzQ5IEM3MS42MzU0MjczLDIyLjQ3NjM0OSA2OS40MzEyNSwyMy4xODc1IDY2Ljc1LDIzLjE4NzUgWicgaWQ9J0Vtb2ppJz48L3BhdGg+XG5cdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHQ8L2c+XG5cdFx0XHQ8L2c+XG5cdFx0PC9zdmc+XCJcblx0ZGVsZXRlOiB7XG5cdFx0b24gOiBcIjw/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyc/PlxuXHRcdFx0XHQ8c3ZnIHdpZHRoPScyNHB4JyBoZWlnaHQ9JzE4cHgnIHZpZXdCb3g9JzAgMCAyNCAxOCcgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyB4bWxuczpza2V0Y2g9J2h0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaC9ucyc+XG5cdFx0XHRcdFx0PCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjUuMiAoMjUyMzUpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdFx0XHRcdDx0aXRsZT5CYWNrPC90aXRsZT5cblx0XHRcdFx0XHQ8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHRcdFx0XHQ8ZGVmcz48L2RlZnM+XG5cdFx0XHRcdFx0PGcgaWQ9J1BhZ2UtMScgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCcgc2tldGNoOnR5cGU9J01TUGFnZSc+XG5cdFx0XHRcdFx0XHQ8ZyBpZD0nS2V5Ym9hcmQvTGlnaHQvVXBwZXInIHNrZXRjaDp0eXBlPSdNU0xheWVyR3JvdXAnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC0zMzkuMDAwMDAwLCAtMTMwLjAwMDAwMCknIGZpbGw9JyMwMzAzMDMnPlxuXHRcdFx0XHRcdFx0XHQ8ZyBpZD0nVGhpcmQtUm93JyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgzLjAwMDAwMCwgMTE4LjAwMDAwMCknIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnPlxuXHRcdFx0XHRcdFx0XHRcdDxwYXRoIGQ9J00zNTEuNjQyNjYzLDIwLjk3NzY5MDMgTDM1NC40NjY3OTUsMTguMTUzNTU4NSBDMzU0Ljc2MDEwNiwxNy44NjAyNDc2IDM1NC43NjM5ODMsMTcuMzgxNDk2MiAzNTQuNDcxMDksMTcuMDg4NjAzIEMzNTQuMTc2MTU1LDE2Ljc5MzY2NzcgMzUzLjcwMTQsMTYuNzk3NjMyOCAzNTMuNDA2MTM1LDE3LjA5Mjg5ODMgTDM1MC41ODIwMDMsMTkuOTE3MDMwMSBMMzQ3Ljc1Nzg3MSwxNy4wOTI4OTgzIEMzNDcuNDY0NTYsMTYuNzk5NTg3NCAzNDYuOTg1ODA5LDE2Ljc5NTcwOTcgMzQ2LjY5MjkxNiwxNy4wODg2MDMgQzM0Ni4zOTc5OCwxNy4zODM1MzgyIDM0Ni40MDE5NDUsMTcuODU4MjkzIDM0Ni42OTcyMTEsMTguMTUzNTU4NSBMMzQ5LjUyMTM0MywyMC45Nzc2OTAzIEwzNDYuNjk3MjExLDIzLjgwMTgyMiBDMzQ2LjQwMzksMjQuMDk1MTMyOSAzNDYuNDAwMDIyLDI0LjU3Mzg4NDMgMzQ2LjY5MjkxNiwyNC44NjY3Nzc2IEMzNDYuOTg3ODUxLDI1LjE2MTcxMjggMzQ3LjQ2MjYwNiwyNS4xNTc3NDc3IDM0Ny43NTc4NzEsMjQuODYyNDgyMiBMMzUwLjU4MjAwMywyMi4wMzgzNTA0IEwzNTMuNDA2MTM1LDI0Ljg2MjQ4MjIgQzM1My42OTk0NDUsMjUuMTU1NzkzMSAzNTQuMTc4MTk3LDI1LjE1OTY3MDggMzU0LjQ3MTA5LDI0Ljg2Njc3NzYgQzM1NC43NjYwMjUsMjQuNTcxODQyMyAzNTQuNzYyMDYsMjQuMDk3MDg3NSAzNTQuNDY2Nzk1LDIzLjgwMTgyMiBMMzUxLjY0MjY2MywyMC45Nzc2OTAzIFogTTMzNy4wNTkzNDUsMjIuMDU5MzQ0NSBDMzM2LjQ3NDI4NSwyMS40NzQyODQ3IDMzNi40ODEzNTEsMjAuNTE4NjQ4OSAzMzcuMDU5MzQ1LDE5Ljk0MDY1NTUgTDM0My43ODk5MTUsMTMuMjEwMDg1MyBDMzQ0LjE4MjA4NCwxMi44MTc5MTYgMzQ0Ljk0ODkyLDEyLjUgMzQ1LjUwNzQ4NCwxMi41IEwzNTYuMDAyMDk4LDEyLjUgQzM1Ny45MzM5MzYsMTIuNSAzNTkuNSwxNC4wNjg4NDc3IDM1OS41LDE2LjAwMTc5ODMgTDM1OS41LDI1Ljk5ODIwMTcgQzM1OS41LDI3LjkzMjE5MTUgMzU3LjkyMzA4OCwyOS41IDM1Ni4wMDIwOTgsMjkuNSBMMzQ1LjUwNzQ4NCwyOS41IEMzNDQuOTUxMDY2LDI5LjUgMzQ0LjE3NzE2OSwyOS4xNzcxNjkzIDM0My43ODk5MTUsMjguNzg5OTE0OCBMMzM3LjA1OTM0NSwyMi4wNTkzNDQ1IFonIGlkPSdCYWNrJz48L3BhdGg+XG5cdFx0XHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdDwvc3ZnPlwiXG5cdFx0b2ZmIDogXCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0XHQ8c3ZnIHdpZHRoPScyNHB4JyBoZWlnaHQ9JzE4cHgnIHZpZXdCb3g9JzAgMCAyNCAxOCcgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyB4bWxuczpza2V0Y2g9J2h0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaC9ucyc+XG5cdFx0XHQ8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNS4yICgyNTIzNSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdFx0XHQ8dGl0bGU+QmFjazwvdGl0bGU+XG5cdFx0XHQ8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHRcdDxkZWZzPjwvZGVmcz5cblx0XHRcdDxnIGlkPSdQYWdlLTEnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIHNrZXRjaDp0eXBlPSdNU1BhZ2UnPlxuXHRcdFx0XHQ8ZyBpZD0nS2V5Ym9hcmQvTGlnaHQvVXBwZXInIHNrZXRjaDp0eXBlPSdNU0xheWVyR3JvdXAnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC0zMzkuMDAwMDAwLCAtMTMwLjAwMDAwMCknIGZpbGw9JyMwMzAzMDMnPlxuXHRcdFx0XHRcdDxnIGlkPSdUaGlyZC1Sb3cnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDMuMDAwMDAwLCAxMTguMDAwMDAwKScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCc+XG5cdFx0XHRcdFx0XHQ8cGF0aCBkPSdNMzM3LjA1OTM0NSwyMi4wNTkzNDQ1IEMzMzYuNDc0Mjg1LDIxLjQ3NDI4NDcgMzM2LjQ4MTM1MSwyMC41MTg2NDg5IDMzNy4wNTkzNDUsMTkuOTQwNjU1NSBMMzQzLjc4OTkxNSwxMy4yMTAwODUzIEMzNDQuMTgyMDg0LDEyLjgxNzkxNiAzNDQuOTQ4OTIsMTIuNSAzNDUuNTA3NDg0LDEyLjUgTDM1Ni4wMDIwOTgsMTIuNSBDMzU3LjkzMzkzNiwxMi41IDM1OS41LDE0LjA2ODg0NzcgMzU5LjUsMTYuMDAxNzk4MyBMMzU5LjUsMjUuOTk4MjAxNyBDMzU5LjUsMjcuOTMyMTkxNSAzNTcuOTIzMDg4LDI5LjUgMzU2LjAwMjA5OCwyOS41IEwzNDUuNTA3NDg0LDI5LjUgQzM0NC45NTEwNjYsMjkuNSAzNDQuMTc3MTY5LDI5LjE3NzE2OTMgMzQzLjc4OTkxNSwyOC43ODk5MTQ4IEwzMzcuMDU5MzQ1LDIyLjA1OTM0NDUgWiBNMzUxLjY0MjY2MywyMC45Nzc2OTAzIEwzNTQuNDY2Nzk1LDE4LjE1MzU1ODUgQzM1NC43NjAxMDYsMTcuODYwMjQ3NiAzNTQuNzYzOTgzLDE3LjM4MTQ5NjIgMzU0LjQ3MTA5LDE3LjA4ODYwMyBDMzU0LjE3NjE1NSwxNi43OTM2Njc3IDM1My43MDE0LDE2Ljc5NzYzMjggMzUzLjQwNjEzNSwxNy4wOTI4OTgzIEwzNTAuNTgyMDAzLDE5LjkxNzAzMDEgTDM0Ny43NTc4NzEsMTcuMDkyODk4MyBDMzQ3LjQ2NDU2LDE2Ljc5OTU4NzQgMzQ2Ljk4NTgwOSwxNi43OTU3MDk3IDM0Ni42OTI5MTYsMTcuMDg4NjAzIEMzNDYuMzk3OTgsMTcuMzgzNTM4MiAzNDYuNDAxOTQ1LDE3Ljg1ODI5MyAzNDYuNjk3MjExLDE4LjE1MzU1ODUgTDM0OS41MjEzNDMsMjAuOTc3NjkwMyBMMzQ2LjY5NzIxMSwyMy44MDE4MjIgQzM0Ni40MDM5LDI0LjA5NTEzMjkgMzQ2LjQwMDAyMiwyNC41NzM4ODQzIDM0Ni42OTI5MTYsMjQuODY2Nzc3NiBDMzQ2Ljk4Nzg1MSwyNS4xNjE3MTI4IDM0Ny40NjI2MDYsMjUuMTU3NzQ3NyAzNDcuNzU3ODcxLDI0Ljg2MjQ4MjIgTDM1MC41ODIwMDMsMjIuMDM4MzUwNCBMMzUzLjQwNjEzNSwyNC44NjI0ODIyIEMzNTMuNjk5NDQ1LDI1LjE1NTc5MzEgMzU0LjE3ODE5NywyNS4xNTk2NzA4IDM1NC40NzEwOSwyNC44NjY3Nzc2IEMzNTQuNzY2MDI1LDI0LjU3MTg0MjMgMzU0Ljc2MjA2LDI0LjA5NzA4NzUgMzU0LjQ2Njc5NSwyMy44MDE4MjIgTDM1MS42NDI2NjMsMjAuOTc3NjkwMyBaIE0zMzguNzA5NzIsMjEuNzA5NzE5NSBDMzM4LjMxNzc1MiwyMS4zMTc3NTIyIDMzOC4zMTg5NjUsMjAuNjgxMDM0OSAzMzguNzA5NzIsMjAuMjkwMjgwNSBMMzQ0LjY0MzI0NSwxNC4zNTY3NTQ3IEMzNDQuODQwMjc2LDE0LjE1OTcyNDUgMzQ1LjIyNTYzOSwxNCAzNDUuNDkzNzQxLDE0IEwzNTUuOTk3MjM5LDE0IEMzNTcuMTAzMzMzLDE0IDM1Ny45OTk5OTksMTQuODk3MDYwMSAzNTcuOTk5OTk5LDE2LjAwNTg1ODYgTDM1Ny45OTk5OTksMjUuOTk0MTQxMiBDMzU3Ljk5OTk5OSwyNy4xMDE5NDY0IDM1Ny4xMDY0NTcsMjcuOTk5OTk5OSAzNTUuOTk3MjM5LDI3Ljk5OTk5OTkgTDM0NS40OTM3NDEsMjggQzM0NS4yMjEwNTYsMjggMzQ0Ljg0MDY0MywyNy44NDA2NDMxIDM0NC42NDMyNDYsMjcuNjQzMjQ1MyBMMzM4LjcwOTcyLDIxLjcwOTcxOTUgWicgaWQ9J0JhY2snPjwvcGF0aD5cblx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdDwvZz5cblx0XHRcdDwvZz5cblx0XHQ8L3N2Zz5cIlxuXHR9XG5cdGZvb2QgOiAgXCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0XHRcdDxzdmcgd2lkdGg9JzE3cHgnIGhlaWdodD0nMTZweCcgdmlld0JveD0nMCAwIDE3IDE3JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHhtbG5zOnNrZXRjaD0naHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zJz5cblx0XHRcdFx0PCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjUuMiAoMjUyMzUpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdFx0XHQ8dGl0bGU+Rm9vZDwvdGl0bGU+XG5cdFx0XHRcdDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdFx0XHQ8ZGVmcz48L2RlZnM+XG5cdFx0XHRcdDxnIGlkPSdpT1MtOS1LZXlib2FyZHMnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIHNrZXRjaDp0eXBlPSdNU1BhZ2UnPlxuXHRcdFx0XHRcdDxnIGlkPSdpUGhvbmUtNi1Qb3J0cmFpdC1MaWdodC1Db3B5JyBza2V0Y2g6dHlwZT0nTVNBcnRib2FyZEdyb3VwJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtMTQ4LjAwMDAwMCwgLTYzNy4wMDAwMDApJz5cblx0XHRcdFx0XHRcdDxnIGlkPSdLZXlib2FyZHMnIHNrZXRjaDp0eXBlPSdNU0xheWVyR3JvdXAnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDAuMDAwMDAwLCA0MDguMDAwMDAwKSc+XG5cdFx0XHRcdFx0XHRcdDxnIGlkPSdGb29kJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgxNDkuNTAwMDAwLCAyMjkuNTAwMDAwKScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCc+XG5cdFx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTUuNSwxNS41IEwxLDE1LjUgTDAsNSBMNi41LDUgTDYuMjYzNjA5MzMsNy40ODIxMDIwMicgaWQ9J0RyaW5rJyBzdHJva2U9JyM0QTU0NjEnPjwvcGF0aD5cblx0XHRcdFx0XHRcdFx0XHQ8cGF0aCBkPSdNNi4wMTA3NzU0NSwxLjk2OTMwMDk4IEw2LjUxNTcxMzUyLDUuMjIyNzA1MzkgTDUuNzE5MDgxODQsNS42Nzk0NzgxMiBMNS4wMzg5MDA5LDEuOTY5MzAwOTggTDQuODU1NTcyNDcsMS45NjkzMDA5OCBMNC44NTU1NzI0NywwLjk2OTMwMDk4IEw4Ljg1NTU3MjQ3LDAuOTY5MzAwOTggTDguODU1NTcyNDcsMS45NjkzMDA5OCBMNi4wMTA3NzU0NSwxLjk2OTMwMDk4IFonIGlkPSdTdHJhdycgZmlsbD0nIzRBNTQ2MScgdHJhbnNmb3JtPSd0cmFuc2xhdGUoNi44NTU1NzIsIDMuMzI0MzkwKSByb3RhdGUoMjQuMDAwMDAwKSB0cmFuc2xhdGUoLTYuODU1NTcyLCAtMy4zMjQzOTApICc+PC9wYXRoPlxuXHRcdFx0XHRcdFx0XHRcdDxyZWN0IGlkPSdCb3R0b20tQnVuJyBzdHJva2U9JyM0QTU0NjEnIHg9JzMnIHk9JzE0JyB3aWR0aD0nMTAuNScgaGVpZ2h0PScxLjUnIHJ4PScxJz48L3JlY3Q+XG5cdFx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTEuNSwxMi41MDI0NDA4IEMxLjUsMTEuOTQ4ODA4IDEuOTQ5MTY5MTYsMTEuNSAyLjQ5MjY4NzIzLDExLjUgTDE0LjAwNzMxMjgsMTEuNSBDMTQuNTU1NTU4OCwxMS41IDE1LDExLjk0Njk0OTkgMTUsMTIuNTAyNDQwOCBMMTUsMTIuOTk3NTU5MiBDMTUsMTMuNTUxMTkyIDE0LjU1MDgzMDgsMTQgMTQuMDA3MzEyOCwxNCBMMi40OTI2ODcyMywxNCBDMS45NDQ0NDEyMSwxNCAxLjUsMTMuNTUzMDUwMSAxLjUsMTIuOTk3NTU5MiBMMS41LDEyLjUwMjQ0MDggWiBNMy45MzMwMDAwMywxMS44MzkyNzI3IEMzLjQxNzcxODM0LDExLjY1MTg5NzYgMy40NDQ4MzY5NywxMS41IDMuOTk1NTc3NSwxMS41IEwxMy4wMDQ0MjI1LDExLjUgQzEzLjU1NDI2NDgsMTEuNSAxMy41ODY2MDYxLDExLjY1MDMyNTEgMTMuMDY3LDExLjgzOTI3MjcgTDguNSwxMy41IEwzLjkzMzAwMDAzLDExLjgzOTI3MjcgWicgaWQ9JyZxdW90O1BhdHR5JnF1b3Q7JyBmaWxsPScjNEE1NDYxJz48L3BhdGg+XG5cdFx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTIuNSwxMC41IEwxMy41LDEwLjUgTDE1LDExLjUgTDEsMTEuNSBMMi41LDEwLjUgWicgaWQ9J0NoZWVzZScgZmlsbD0nIzRBNTQ2MSc+PC9wYXRoPlxuXHRcdFx0XHRcdFx0XHRcdDxwYXRoIGQ9J004LjI1LDEwLjUgQzExLjQyNTYzNzMsMTAuNSAxNCwxMC4zMjg0MjcxIDE0LDkuNSBDMTQsOC42NzE1NzI4OCAxMS40MjU2MzczLDggOC4yNSw4IEM1LjA3NDM2MjY5LDggMi41LDguNjcxNTcyODggMi41LDkuNSBDMi41LDEwLjMyODQyNzEgNS4wNzQzNjI2OSwxMC41IDguMjUsMTAuNSBaJyBpZD0nVG9wLUJ1bicgc3Ryb2tlPScjNEE1NDYxJyBzdHJva2Utd2lkdGg9JzAuNzUnPjwvcGF0aD5cblx0XHRcdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0PC9nPlxuXHRcdFx0PC9zdmc+XCJcblx0ZmxhZ3M6IFwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdFx0XHQ8c3ZnIHdpZHRoPScxMXB4JyBoZWlnaHQ9JzE1cHgnIHZpZXdCb3g9JzAgMCAxMSAxNScgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyB4bWxuczpza2V0Y2g9J2h0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaC9ucyc+XG5cdFx0XHRcdDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy41LjIgKDI1MjM1KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHRcdFx0PHRpdGxlPkZsYWc8L3RpdGxlPlxuXHRcdFx0XHQ8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHRcdFx0PGRlZnM+PC9kZWZzPlxuXHRcdFx0XHQ8ZyBpZD0naU9TLTktS2V5Ym9hcmRzJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJyBza2V0Y2g6dHlwZT0nTVNQYWdlJz5cblx0XHRcdFx0XHQ8ZyBpZD0naVBob25lLTYtUG9ydHJhaXQtTGlnaHQtQ29weScgc2tldGNoOnR5cGU9J01TQXJ0Ym9hcmRHcm91cCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTI3NS4wMDAwMDAsIC02MzkuMDAwMDAwKSc+XG5cdFx0XHRcdFx0XHQ8ZyBpZD0nS2V5Ym9hcmRzJyBza2V0Y2g6dHlwZT0nTVNMYXllckdyb3VwJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgwLjAwMDAwMCwgNDA4LjAwMDAwMCknPlxuXHRcdFx0XHRcdFx0XHQ8ZyBpZD0nRmxhZycgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMjc1LjAwMDAwMCwgMjMxLjUwMDAwMCknIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnPlxuXHRcdFx0XHRcdFx0XHRcdDxyZWN0IGlkPSdQb2xlJyBmaWxsPScjNEE1NDYxJyB4PScwJyB5PScwJyB3aWR0aD0nMScgaGVpZ2h0PScxNCc+PC9yZWN0PlxuXHRcdFx0XHRcdFx0XHRcdDxwYXRoIGQ9J00xLDEgQzEsMSAxLjI1LDIgMy41LDIgQzUuNzUsMiA2LDAuNzQ5OTk5OTk4IDgsMC43NSBDMTAsMC43NDk5OTk5OTggMTAsMS41IDEwLDEuNSBMMTAsNy41IEMxMCw3LjUgMTAsNi41IDgsNi41IEM2LDYuNSA0LjgwNjIzOTExLDggMy41LDggQzIuMTkzNzYwODksOCAxLDcgMSw3IEwxLDEgWicgc3Ryb2tlPScjNEE1NDYxJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJz48L3BhdGg+XG5cdFx0XHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdDwvZz5cblx0XHRcdDwvc3ZnPlwiXG5cdGZyZXF1ZW50OiBcIjw/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyc/PlxuXHRcdFx0PHN2ZyB3aWR0aD0nMTdweCcgaGVpZ2h0PScxNnB4JyB2aWV3Qm94PScwIDAgMTcgMTYnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycgeG1sbnM6c2tldGNoPSdodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMnPlxuXHRcdFx0XHQ8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNS4yICgyNTIzNSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdFx0XHRcdDx0aXRsZT5SZWNlbnQ8L3RpdGxlPlxuXHRcdFx0XHQ8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHRcdFx0PGRlZnM+PC9kZWZzPlxuXHRcdFx0XHQ8ZyBpZD0naU9TLTktS2V5Ym9hcmRzJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJyBza2V0Y2g6dHlwZT0nTVNQYWdlJz5cblx0XHRcdFx0XHQ8ZyBpZD0naVBob25lLTYtUG9ydHJhaXQtTGlnaHQtQ29weScgc2tldGNoOnR5cGU9J01TQXJ0Ym9hcmRHcm91cCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTU1LjAwMDAwMCwgLTYzOC4wMDAwMDApJz5cblx0XHRcdFx0XHRcdDxnIGlkPSdLZXlib2FyZHMnIHNrZXRjaDp0eXBlPSdNU0xheWVyR3JvdXAnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDAuMDAwMDAwLCA0MDguMDAwMDAwKSc+XG5cdFx0XHRcdFx0XHRcdDxnIGlkPSdSZWNlbnQnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDU1LjUwMDAwMCwgMjMwLjAwMDAwMCknIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnPlxuXHRcdFx0XHRcdFx0XHRcdDxjaXJjbGUgaWQ9J0JvZHknIHN0cm9rZT0nIzRBNTQ2MScgY3g9JzgnIGN5PSc4JyByPSc4Jz48L2NpcmNsZT5cblx0XHRcdFx0XHRcdFx0XHQ8cGF0aCBkPSdNNy41LDcuNSBMNy41LDguNSBMOC41LDguNSBMOC41LDIgTDcuNSwyIEw3LjUsNy41IEw0LDcuNSBMNCw4LjUgTDguNSw4LjUgTDguNSw3LjUgTDcuNSw3LjUgWicgaWQ9J0hhbmRzJyBmaWxsPScjNEE1NDYxJz48L3BhdGg+XG5cdFx0XHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdDwvZz5cblx0XHRcdDwvc3ZnPlwiXG5cdGtleWJvYXJkIDogXCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0XHRcdDxzdmcgd2lkdGg9JzMyLjVweCcgaGVpZ2h0PScyMy41cHgnIHZpZXdCb3g9JzAgMCA2NSA0NycgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJz5cblx0XHRcdCAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNi4xICgyNjMxMykgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdFx0XHQgICAgPHRpdGxlPlNoYXBlPC90aXRsZT5cblx0XHRcdCAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHRcdCAgICA8ZGVmcz48L2RlZnM+XG5cdFx0XHQgICAgPGcgaWQ9J1BhZ2UtMScgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCc+XG5cdFx0XHQgICAgICAgIDxnIGlkPSdpUGFkLVBvcnRyYWl0JyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtMTQzNi4wMDAwMDAsIC0xOTU2LjAwMDAwMCknIGZpbGw9JyMwMDAwMDAnPlxuXHRcdFx0ICAgICAgICAgICAgPGcgaWQ9J0tleWJvYXJkLUxpZ2h0JyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgwLjAwMDAwMCwgMTQyMi4wMDAwMDApJz5cblx0XHRcdCAgICAgICAgICAgICAgICA8ZyBpZD0nS2V5Ym9hcmQtZG93bicgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMTQxMi4wMDAwMDAsIDUwMC4wMDAwMDApJz5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0nTTg3LjAwMTMzMiwzNCBDODguMTA1MTY1OSwzNCA4OSwzNC44OTk3MTI3IDg5LDM1Ljk5MzI4NzQgTDg5LDYxLjAwNjcxMjYgQzg5LDYyLjEwNzU3NDggODguMTA1ODc1OSw2MyA4Ny4wMDEzMzIsNjMgTDI1Ljk5ODY2OCw2MyBDMjQuODk0ODM0MSw2MyAyNCw2Mi4xMDAyODczIDI0LDYxLjAwNjcxMjYgTDI0LDM1Ljk5MzI4NzQgQzI0LDM0Ljg5MjQyNTIgMjQuODk0MTI0MSwzNCAyNS45OTg2NjgsMzQgTDg3LjAwMTMzMiwzNCBaIE0yNiwzNiBMMjYsNjEgTDg3LDYxIEw4NywzNiBMMjYsMzYgWiBNNzksNDAgTDgzLDQwIEw4Myw0NCBMNzksNDQgTDc5LDQwIFogTTcyLDQwIEw3Niw0MCBMNzYsNDQgTDcyLDQ0IEw3Miw0MCBaIE02NSw0MCBMNjksNDAgTDY5LDQ0IEw2NSw0NCBMNjUsNDAgWiBNNTgsNDAgTDYyLDQwIEw2Miw0NCBMNTgsNDQgTDU4LDQwIFogTTUxLDQwIEw1NSw0MCBMNTUsNDQgTDUxLDQ0IEw1MSw0MCBaIE00NCw0MCBMNDgsNDAgTDQ4LDQ0IEw0NCw0NCBMNDQsNDAgWiBNMzcsNDAgTDQxLDQwIEw0MSw0NCBMMzcsNDQgTDM3LDQwIFogTTMwLDQwIEwzNCw0MCBMMzQsNDQgTDMwLDQ0IEwzMCw0MCBaIE03OSw0NyBMODMsNDcgTDgzLDUxIEw3OSw1MSBMNzksNDcgWiBNNzIsNDcgTDc2LDQ3IEw3Niw1MSBMNzIsNTEgTDcyLDQ3IFogTTY1LDQ3IEw2OSw0NyBMNjksNTEgTDY1LDUxIEw2NSw0NyBaIE01OCw0NyBMNjIsNDcgTDYyLDUxIEw1OCw1MSBMNTgsNDcgWiBNNTEsNDcgTDU1LDQ3IEw1NSw1MSBMNTEsNTEgTDUxLDQ3IFogTTQ0LDQ3IEw0OCw0NyBMNDgsNTEgTDQ0LDUxIEw0NCw0NyBaIE0zNyw0NyBMNDEsNDcgTDQxLDUxIEwzNyw1MSBMMzcsNDcgWiBNMzAsNDcgTDM0LDQ3IEwzNCw1MSBMMzAsNTEgTDMwLDQ3IFogTTc5LDU0IEw4Myw1NCBMODMsNTggTDc5LDU4IEw3OSw1NCBaIE03Miw1NCBMNzYsNTQgTDc2LDU4IEw3Miw1OCBMNzIsNTQgWiBNNDQsNTQgTDY5LDU0IEw2OSw1OCBMNDQsNTggTDQ0LDU0IFogTTM3LDU0IEw0MSw1NCBMNDEsNTggTDM3LDU4IEwzNyw1NCBaIE0zMCw1NCBMMzQsNTQgTDM0LDU4IEwzMCw1OCBMMzAsNTQgWiBNNDQuMzE2MzQ5OCw2OS45NzcxMDQ3IEM0My4zNjg0MjI1LDcwLjU0MjAzNDIgNDMuMzMzODcyMSw3MS41MDk2NDk1IDQ0LjIzNzgyMTcsNzIuMTM3MzkxMiBMNTUuMzYyMTUzOSw3OS44NjI2MDg4IEM1Ni4yNjY3MTEzLDgwLjQ5MDc3MjYgNTcuNzMzODk2NSw4MC40OTAzNTA1IDU4LjYzNzg0NjEsNzkuODYyNjA4OCBMNjkuNzYyMTc4Myw3Mi4xMzczOTEyIEM3MC42NjY3MzU3LDcxLjUwOTIyNzQgNzAuNjQ4MDEyLDcwLjUyMDUyMDQgNjkuNzExNTE4Nyw2OS45MjM0MTY2IEw2OS45ODI1NzMxLDcwLjA5NjIzOTYgQzY5LjUxODEzMzMsNjkuODAwMTE1IDY4Ljc3ODI1NTcsNjkuODEyNjQ5MyA2OC4zMjYxMzA3LDcwLjEyNjkzMjMgTDU3LjgxNTQ5OTksNzcuNDMzMTI2MyBDNTcuMzY1MTExNyw3Ny43NDYyMDIgNTYuNjI4MTY1LDc3LjczODE3ODYgNTYuMTc2MjEwMyw3Ny40MTk5NDI0IEw0NS44Mzg2MTM3LDcwLjE0MDg5NzcgQzQ1LjM4MzY0NzIsNjkuODIwNTQwNyA0NC42Mzc1MDM5LDY5Ljc4NTcwODggNDQuMTU2NjM5Myw3MC4wNzIyODYyIEw0NC4zMTYzNDk4LDY5Ljk3NzEwNDcgWicgaWQ9J1NoYXBlJz48L3BhdGg+XG5cdFx0XHQgICAgICAgICAgICAgICAgPC9nPlxuXHRcdFx0ICAgICAgICAgICAgPC9nPlxuXHRcdFx0ICAgICAgICA8L2c+XG5cdFx0XHQgICAgPC9nPlxuXHRcdFx0PC9zdmc+XCJcblx0a2V5UG9wVXA6XG5cdFx0bGlnaHQ6XG5cdFx0XHRcImlwaG9uZS01XCIgOiBcIjxzdmcgd2lkdGg9JzU1cHgnIGhlaWdodD0nOTJweCcgdmlld0JveD0nNTMgMzE2IDU1IDkyJyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnPlxuXHRcdFx0XHRcdCAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNy4yICgyODI3NikgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdFx0XHRcdFx0ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdFx0XHRcdCAgICA8ZGVmcz5cblx0XHRcdFx0XHQgICAgICAgIDxmaWx0ZXIgeD0nLTUwJScgeT0nLTUwJScgd2lkdGg9JzIwMCUnIGhlaWdodD0nMjAwJScgZmlsdGVyVW5pdHM9J29iamVjdEJvdW5kaW5nQm94JyBpZD0nZmlsdGVyLTEnPlxuXHRcdFx0XHRcdCAgICAgICAgICAgIDxmZU9mZnNldCBkeD0nMCcgZHk9JzEnIGluPSdTb3VyY2VBbHBoYScgcmVzdWx0PSdzaGFkb3dPZmZzZXRPdXRlcjEnPjwvZmVPZmZzZXQ+XG5cdFx0XHRcdFx0ICAgICAgICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0nMS41JyBpbj0nc2hhZG93T2Zmc2V0T3V0ZXIxJyByZXN1bHQ9J3NoYWRvd0JsdXJPdXRlcjEnPjwvZmVHYXVzc2lhbkJsdXI+XG5cdFx0XHRcdFx0ICAgICAgICAgICAgPGZlQ29sb3JNYXRyaXggdmFsdWVzPScwIDAgMCAwIDAgICAwIDAgMCAwIDAgICAwIDAgMCAwIDAgIDAgMCAwIDAuNCAwJyB0eXBlPSdtYXRyaXgnIGluPSdzaGFkb3dCbHVyT3V0ZXIxJyByZXN1bHQ9J3NoYWRvd01hdHJpeE91dGVyMSc+PC9mZUNvbG9yTWF0cml4PlxuXHRcdFx0XHRcdCAgICAgICAgICAgIDxmZU1lcmdlPlxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICA8ZmVNZXJnZU5vZGUgaW49J3NoYWRvd01hdHJpeE91dGVyMSc+PC9mZU1lcmdlTm9kZT5cblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgPGZlTWVyZ2VOb2RlIGluPSdTb3VyY2VHcmFwaGljJz48L2ZlTWVyZ2VOb2RlPlxuXHRcdFx0XHRcdCAgICAgICAgICAgIDwvZmVNZXJnZT5cblx0XHRcdFx0XHQgICAgICAgIDwvZmlsdGVyPlxuXHRcdFx0XHRcdCAgICAgICAgPHBhdGggZD0nTTEuMzQxNzMyMzEsNDAuOTM5MTcwMSBDMC41MTc0NjYxMjgsNDAuMjA1ODkgMCwzOS4xMzc0MjUxIDAsMzcuOTQ3NzYzNSBMMCw0LjAwMzQ1NTk4IEMwLDEuNzg5MTcxMzYgMS43OTUyODI0OCwwIDQuMDA5ODc1NjYsMCBMNDQuOTkwMTI0MywwIEM0Ny4yMTI1NjA4LDAgNDksMS43OTI0MDgzIDQ5LDQuMDAzNDU1OTggTDQ5LDM3Ljk0Nzc2MzUgQzQ5LDM4LjkxMjQwNTEgNDguNjU5Mjc5OCwzOS43OTYzNjU5IDQ4LjA5MTYwNDEsNDAuNDg2ODY2NSBDNDguMDQxNDIzMyw0MC45MDMyMjg5IDQ3LjcxMTE4ODgsNDEuNDA3NDY3MiA0Ny4wODI1OTA4LDQxLjk1MjI1IEM0Ny4wODI1OTA4LDQxLjk1MjI1IDM4LjUyOTkxNDUsNDkuMDY0MzM2MiAzOC41Mjk5MTQ1LDUxLjE1MjY0MjQgQzM4LjUyOTkxNDUsNjEuNjQ5NzU2MSAzOC4xNzcwMDk5LDgyLjAwMjU0MDYgMzguMTc3MDA5OSw4Mi4wMDI1NDA2IEMzOC4xNDEyMzA0LDg0LjIwMjQzNTQgMzYuMzIxMDI4NCw4NiAzNC4xMTI4NDk1LDg2IEwxNS4zMDU5NTM5LDg2IEMxMy4xMDc5Niw4NiAxMS4yNzgxODg0LDg0LjIxMDA3ODkgMTEuMjQxNzkzNiw4Mi4wMDIwOTkzIEMxMS4yNDE3OTM2LDgyLjAwMjA5OTMgMTAuODg4ODg4OSw2MS42NDcwODUyIDEwLjg4ODg4ODksNTEuMTQ4NjM2MSBDMTAuODg4ODg4OSw0OS4wNjE2NjU0IDIuMzQxNDM2NjIsNDIuMjM4NjU1IDIuMzQxNDM2NjIsNDIuMjM4NjU1IEMxLjc3ODI3MzExLDQxLjc2NDEzNjUgMS40NDg4MTM1NCw0MS4zMjA0MjM3IDEuMzQxNzMyMzEsNDAuOTM5MTcwMSBaJyBpZD0ncGF0aC0yJz48L3BhdGg+XG5cdFx0XHRcdFx0ICAgICAgICA8bWFzayBpZD0nbWFzay0zJyBtYXNrQ29udGVudFVuaXRzPSd1c2VyU3BhY2VPblVzZScgbWFza1VuaXRzPSdvYmplY3RCb3VuZGluZ0JveCcgeD0nMCcgeT0nMCcgd2lkdGg9JzQ5JyBoZWlnaHQ9Jzg2JyBmaWxsPSd3aGl0ZSc+XG5cdFx0XHRcdFx0ICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPScjcGF0aC0yJz48L3VzZT5cblx0XHRcdFx0XHQgICAgICAgIDwvbWFzaz5cblx0XHRcdFx0XHQgICAgPC9kZWZzPlxuXHRcdFx0XHRcdCAgICA8ZyBpZD0nUG9wb3ZlcicgZmlsdGVyPSd1cmwoI2ZpbHRlci0xKScgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoNTYuMDAwMDAwLCAzMTguMDAwMDAwKSc+XG5cdFx0XHRcdFx0ICAgICAgICA8dXNlIGlkPSdSZWN0YW5nbGUtMTQnIHN0cm9rZT0nI0IyQjRCOScgbWFzaz0ndXJsKCNtYXNrLTMpJyBmaWxsPScjRkNGQ0ZDJyB4bGluazpocmVmPScjcGF0aC0yJz48L3VzZT5cblx0XHRcdFx0XHQgICAgPC9nPlxuXHRcdFx0XHRcdDwvc3ZnPlwiXG5cdFx0XHRcImlwaG9uZS02c1wiIDogXCI8c3ZnIHdpZHRoPSc2NHB4JyBoZWlnaHQ9JzEwN3B4JyB2aWV3Qm94PScyNCAzODcgNjQgMTA3JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnPlxuXHRcdFx0XHRcdCAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNy4yICgyODI3NikgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdFx0XHRcdFx0ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdFx0XHRcdCAgICA8ZGVmcz5cblx0XHRcdFx0XHQgICAgICAgIDxmaWx0ZXIgeD0nLTUwJScgeT0nLTUwJScgd2lkdGg9JzIwMCUnIGhlaWdodD0nMjAwJScgZmlsdGVyVW5pdHM9J29iamVjdEJvdW5kaW5nQm94JyBpZD0nZmlsdGVyLTEnPlxuXHRcdFx0XHRcdCAgICAgICAgICAgIDxmZU9mZnNldCBkeD0nMCcgZHk9JzEnIGluPSdTb3VyY2VBbHBoYScgcmVzdWx0PSdzaGFkb3dPZmZzZXRPdXRlcjEnPjwvZmVPZmZzZXQ+XG5cdFx0XHRcdFx0ICAgICAgICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0nMS41JyBpbj0nc2hhZG93T2Zmc2V0T3V0ZXIxJyByZXN1bHQ9J3NoYWRvd0JsdXJPdXRlcjEnPjwvZmVHYXVzc2lhbkJsdXI+XG5cdFx0XHRcdFx0ICAgICAgICAgICAgPGZlQ29sb3JNYXRyaXggdmFsdWVzPScwIDAgMCAwIDAgICAwIDAgMCAwIDAgICAwIDAgMCAwIDAgIDAgMCAwIDAuNCAwJyB0eXBlPSdtYXRyaXgnIGluPSdzaGFkb3dCbHVyT3V0ZXIxJyByZXN1bHQ9J3NoYWRvd01hdHJpeE91dGVyMSc+PC9mZUNvbG9yTWF0cml4PlxuXHRcdFx0XHRcdCAgICAgICAgICAgIDxmZU1lcmdlPlxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICA8ZmVNZXJnZU5vZGUgaW49J3NoYWRvd01hdHJpeE91dGVyMSc+PC9mZU1lcmdlTm9kZT5cblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgPGZlTWVyZ2VOb2RlIGluPSdTb3VyY2VHcmFwaGljJz48L2ZlTWVyZ2VOb2RlPlxuXHRcdFx0XHRcdCAgICAgICAgICAgIDwvZmVNZXJnZT5cblx0XHRcdFx0XHQgICAgICAgIDwvZmlsdGVyPlxuXHRcdFx0XHRcdCAgICAgICAgPHBhdGggZD0nTTEuNDg2NDc2NDYsNDguMzc3OTk0NyBDMC41ODAyNjY0OSw0Ny42NDY0Mjk2IDAsNDYuNTI5NTg3IDAsNDUuMjc4MTk0OCBMMCwzLjk5MDA5Nzg3IEMwLDEuNzgyNTkxMiAxLjc5NTA5NTc3LDAgNC4wMDk0NTg2MiwwIEw1My45OTA1NDE0LDAgQzU2LjIwMDU3NDYsMCA1OCwxLjc4NjQyNzY3IDU4LDMuOTkwMDk3ODcgTDU4LDQ1LjI3ODE5NDggQzU4LDQ2LjE4MzMwMDQgNTcuNjk4MjI1OCw0Ny4wMTY5NzMzIDU3LjE4OTUwOTcsNDcuNjg1NjMyNSBDNTcuMDM5Njg2NSw0OC4wMjEyNDk3IDU2LjczNjAwOTgsNDguMzk3MjgzNCA1Ni4yNzE4MzYzLDQ4Ljc5NTA2NjEgQzU2LjI3MTgzNjMsNDguNzk1MDY2MSA0NS42MDY4Mzc2LDU3LjYyMjA2OTMgNDUuNjA2ODM3Niw2MC4wNzQ2MTQ5IEM0NS42MDY4Mzc2LDcyLjQwMjYyMDUgNDUuMTc3OTY3LDk2Ljk5MjMxNjQgNDUuMTc3OTY3LDk2Ljk5MjMxNjQgQzQ1LjE0MTM3NDgsOTkuMjEyMjIxNCA0My4zMTkzMDY1LDEwMSA0MS4xMDkwMDM1LDEwMSBMMTcuMzg2NzIzLDEwMSBDMTUuMTgxMjcyMiwxMDEgMTMuMzU0NjgzLDk5LjIwNTUwMDkgMTMuMzE3NzU5NSw5Ni45OTE4NzQxIEMxMy4zMTc3NTk1LDk2Ljk5MTg3NDEgMTIuODg4ODg4OSw3Mi4zOTk0ODM4IDEyLjg4ODg4ODksNjAuMDY5OTA5OSBDMTIuODg4ODg4OSw1Ny42MTg5MzI2IDIuMjI2NzM0MzcsNDkuMTQ2MjkzNiAyLjIyNjczNDM3LDQ5LjE0NjI5MzYgQzEuOTA1MjQwODcsNDguODc4ODMyNyAxLjY1OTExNjU1LDQ4LjYyMDczMyAxLjQ4NjQ3NjQ2LDQ4LjM3Nzk5NDcgWicgaWQ9J3BhdGgtMic+PC9wYXRoPlxuXHRcdFx0XHRcdCAgICAgICAgPG1hc2sgaWQ9J21hc2stMycgbWFza0NvbnRlbnRVbml0cz0ndXNlclNwYWNlT25Vc2UnIG1hc2tVbml0cz0nb2JqZWN0Qm91bmRpbmdCb3gnIHg9JzAnIHk9JzAnIHdpZHRoPSc1OCcgaGVpZ2h0PScxMDEnIGZpbGw9J3doaXRlJz5cblx0XHRcdFx0XHQgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9JyNwYXRoLTInPjwvdXNlPlxuXHRcdFx0XHRcdCAgICAgICAgPC9tYXNrPlxuXHRcdFx0XHRcdCAgICA8L2RlZnM+XG5cdFx0XHRcdFx0ICAgIDxnIGlkPSdQb3BvdmVyJyBmaWx0ZXI9J3VybCgjZmlsdGVyLTEpJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgyNy4wMDAwMDAsIDM4OS4wMDAwMDApJz5cblx0XHRcdFx0XHQgICAgICAgIDx1c2UgaWQ9J1JlY3RhbmdsZS0xNCcgc3Ryb2tlPScjQjJCNEI5JyBtYXNrPSd1cmwoI21hc2stMyknIGZpbGw9JyNGQ0ZDRkMnIHhsaW5rOmhyZWY9JyNwYXRoLTInPjwvdXNlPlxuXHRcdFx0XHRcdCAgICA8L2c+XG5cdFx0XHRcdFx0PC9zdmc+XCJcblx0XHRcdFwiaXBob25lLTZzLXBsdXNcIiA6IFwiPHN2ZyB3aWR0aD0nNzBweCcgaGVpZ2h0PScxMTlweCcgdmlld0JveD0nMjggNDUwIDcwIDExOScgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJz5cblx0XHRcdFx0XHQgICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjcuMiAoMjgyNzYpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdFx0XHRcdCAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHRcdFx0XHQgICAgPGRlZnM+XG5cdFx0XHRcdFx0ICAgICAgICA8ZmlsdGVyIHg9Jy01MCUnIHk9Jy01MCUnIHdpZHRoPScyMDAlJyBoZWlnaHQ9JzIwMCUnIGZpbHRlclVuaXRzPSdvYmplY3RCb3VuZGluZ0JveCcgaWQ9J2ZpbHRlci0xJz5cblx0XHRcdFx0XHQgICAgICAgICAgICA8ZmVPZmZzZXQgZHg9JzAnIGR5PScxJyBpbj0nU291cmNlQWxwaGEnIHJlc3VsdD0nc2hhZG93T2Zmc2V0T3V0ZXIxJz48L2ZlT2Zmc2V0PlxuXHRcdFx0XHRcdCAgICAgICAgICAgIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249JzEuNScgaW49J3NoYWRvd09mZnNldE91dGVyMScgcmVzdWx0PSdzaGFkb3dCbHVyT3V0ZXIxJz48L2ZlR2F1c3NpYW5CbHVyPlxuXHRcdFx0XHRcdCAgICAgICAgICAgIDxmZUNvbG9yTWF0cml4IHZhbHVlcz0nMCAwIDAgMCAwICAgMCAwIDAgMCAwICAgMCAwIDAgMCAwICAwIDAgMCAwLjQgMCcgdHlwZT0nbWF0cml4JyBpbj0nc2hhZG93Qmx1ck91dGVyMScgcmVzdWx0PSdzaGFkb3dNYXRyaXhPdXRlcjEnPjwvZmVDb2xvck1hdHJpeD5cblx0XHRcdFx0XHQgICAgICAgICAgICA8ZmVNZXJnZT5cblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgPGZlTWVyZ2VOb2RlIGluPSdzaGFkb3dNYXRyaXhPdXRlcjEnPjwvZmVNZXJnZU5vZGU+XG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgIDxmZU1lcmdlTm9kZSBpbj0nU291cmNlR3JhcGhpYyc+PC9mZU1lcmdlTm9kZT5cblx0XHRcdFx0XHQgICAgICAgICAgICA8L2ZlTWVyZ2U+XG5cdFx0XHRcdFx0ICAgICAgICA8L2ZpbHRlcj5cblx0XHRcdFx0XHQgICAgICAgIDxwYXRoIGQ9J00xLjk1NzI5Mzk1LDU0LjA3MjgzMDQgQzAuNzg1OTExMTMyLDUzLjM3NTc2OTkgMCw1Mi4wOTg3NzYgMCw1MC42Mzg5MDIyIEwwLDMuOTk1MjQ0MTkgQzAsMS43ODY3MTQyOCAxLjc5MjQyMjAyLDAgNC4wMDM0ODY2MywwIEw1OS45OTY1MTM0LDAgQzYyLjIwNDYyMzUsMCA2NCwxLjc4ODczMTc1IDY0LDMuOTk1MjQ0MTkgTDY0LDUwLjYzODkwMjIgQzY0LDUxLjkyMzM2ODYgNjMuMzkzNzExNiw1My4wNjUxNTU2IDYyLjQ1MTM5MSw1My43OTU3NTQgQzYyLjQ0Mjc3NTIsNTMuODAzMjQzMyA2Mi40MzQxMDE5LDUzLjgxMDc0MDQgNjIuNDI1MzcwOSw1My44MTgyNDU0IEM2Mi40MjUzNzA5LDUzLjgxODI0NTQgNTAuMzI0Nzg2Myw2My44OTc3NDAyIDUwLjMyNDc4NjMsNjYuNjE3Mzk0NyBDNTAuMzI0Nzg2Myw4MC4yODgwNTQ0IDQ5Ljg0NDMwNDksMTA4LjAwMjAwNyA0OS44NDQzMDQ5LDEwOC4wMDIwMDcgQzQ5LjgwNzk2NjUsMTEwLjIxMDIzNCA0Ny45ODc0MjMyLDExMiA0NS43Nzg5MDg5LDExMiBMMTguNzY4MDk5NywxMTIgQzE2LjU1MzQzOTcsMTEyIDE0LjczOTQ0NTYsMTEwLjIwOTg0IDE0LjcwMjcwMzcsMTA4LjAwMTU2NiBDMTQuNzAyNzAzNywxMDguMDAxNTY2IDE0LjIyMjIyMjIsODAuMjg0NTc2MSAxNC4yMjIyMjIyLDY2LjYxMjE3NzMgQzE0LjIyMjIyMjIsNjMuODk0MjYxOSAyLjE0MDgxNDIyLDU0LjIzMjEzMzcgMi4xNDA4MTQyMiw1NC4yMzIxMzM3IEMyLjA3NjY0OTEzLDU0LjE3ODYyOTggMi4wMTU0ODExMSw1NC4xMjU1MTM0IDEuOTU3MjkzOTUsNTQuMDcyODMwNCBaJyBpZD0ncGF0aC0yJz48L3BhdGg+XG5cdFx0XHRcdFx0ICAgICAgICA8bWFzayBpZD0nbWFzay0zJyBtYXNrQ29udGVudFVuaXRzPSd1c2VyU3BhY2VPblVzZScgbWFza1VuaXRzPSdvYmplY3RCb3VuZGluZ0JveCcgeD0nMCcgeT0nMCcgd2lkdGg9JzY0JyBoZWlnaHQ9JzExMicgZmlsbD0nd2hpdGUnPlxuXHRcdFx0XHRcdCAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0nI3BhdGgtMic+PC91c2U+XG5cdFx0XHRcdFx0ICAgICAgICA8L21hc2s+XG5cdFx0XHRcdFx0ICAgIDwvZGVmcz5cblx0XHRcdFx0XHQgICAgPGcgaWQ9J1BvcG92ZXInIGZpbHRlcj0ndXJsKCNmaWx0ZXItMSknIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDMxLjAwMDAwMCwgNDUyLjAwMDAwMCknPlxuXHRcdFx0XHRcdCAgICAgICAgPHVzZSBpZD0nUmVjdGFuZ2xlLTE0JyBzdHJva2U9JyNCMkI0QjknIG1hc2s9J3VybCgjbWFzay0zKScgZmlsbD0nI0ZDRkNGQycgeGxpbms6aHJlZj0nI3BhdGgtMic+PC91c2U+XG5cdFx0XHRcdFx0ICAgIDwvZz5cblx0XHRcdFx0XHQ8L3N2Zz5cIlxuXHRcdGRhcms6XG5cdFx0XHRcImlwaG9uZS01XCIgOiBcIjxzdmcgd2lkdGg9JzU1cHgnIGhlaWdodD0nOTJweCcgdmlld0JveD0nNTMgMzE2IDU1IDkyJyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnPlxuXHRcdFx0XHRcdCAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNy4yICgyODI3NikgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdFx0XHRcdFx0ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdFx0XHRcdCAgICA8ZGVmcz5cblx0XHRcdFx0XHQgICAgICAgIDxmaWx0ZXIgeD0nLTUwJScgeT0nLTUwJScgd2lkdGg9JzIwMCUnIGhlaWdodD0nMjAwJScgZmlsdGVyVW5pdHM9J29iamVjdEJvdW5kaW5nQm94JyBpZD0nZmlsdGVyLTEnPlxuXHRcdFx0XHRcdCAgICAgICAgICAgIDxmZU9mZnNldCBkeD0nMCcgZHk9JzEnIGluPSdTb3VyY2VBbHBoYScgcmVzdWx0PSdzaGFkb3dPZmZzZXRPdXRlcjEnPjwvZmVPZmZzZXQ+XG5cdFx0XHRcdFx0ICAgICAgICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0nMS41JyBpbj0nc2hhZG93T2Zmc2V0T3V0ZXIxJyByZXN1bHQ9J3NoYWRvd0JsdXJPdXRlcjEnPjwvZmVHYXVzc2lhbkJsdXI+XG5cdFx0XHRcdFx0ICAgICAgICAgICAgPGZlQ29sb3JNYXRyaXggdmFsdWVzPScwIDAgMCAwIDAgICAwIDAgMCAwIDAgICAwIDAgMCAwIDAgIDAgMCAwIDAuNCAwJyB0eXBlPSdtYXRyaXgnIGluPSdzaGFkb3dCbHVyT3V0ZXIxJyByZXN1bHQ9J3NoYWRvd01hdHJpeE91dGVyMSc+PC9mZUNvbG9yTWF0cml4PlxuXHRcdFx0XHRcdCAgICAgICAgICAgIDxmZU1lcmdlPlxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICA8ZmVNZXJnZU5vZGUgaW49J3NoYWRvd01hdHJpeE91dGVyMSc+PC9mZU1lcmdlTm9kZT5cblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgPGZlTWVyZ2VOb2RlIGluPSdTb3VyY2VHcmFwaGljJz48L2ZlTWVyZ2VOb2RlPlxuXHRcdFx0XHRcdCAgICAgICAgICAgIDwvZmVNZXJnZT5cblx0XHRcdFx0XHQgICAgICAgIDwvZmlsdGVyPlxuXHRcdFx0XHRcdCAgICAgICAgPHBhdGggZD0nTTEuMzQxNzMyMzEsNDAuOTM5MTcwMSBDMC41MTc0NjYxMjgsNDAuMjA1ODkgMCwzOS4xMzc0MjUxIDAsMzcuOTQ3NzYzNSBMMCw0LjAwMzQ1NTk4IEMwLDEuNzg5MTcxMzYgMS43OTUyODI0OCwwIDQuMDA5ODc1NjYsMCBMNDQuOTkwMTI0MywwIEM0Ny4yMTI1NjA4LDAgNDksMS43OTI0MDgzIDQ5LDQuMDAzNDU1OTggTDQ5LDM3Ljk0Nzc2MzUgQzQ5LDM4LjkxMjQwNTEgNDguNjU5Mjc5OCwzOS43OTYzNjU5IDQ4LjA5MTYwNDEsNDAuNDg2ODY2NSBDNDguMDQxNDIzMyw0MC45MDMyMjg5IDQ3LjcxMTE4ODgsNDEuNDA3NDY3MiA0Ny4wODI1OTA4LDQxLjk1MjI1IEM0Ny4wODI1OTA4LDQxLjk1MjI1IDM4LjUyOTkxNDUsNDkuMDY0MzM2MiAzOC41Mjk5MTQ1LDUxLjE1MjY0MjQgQzM4LjUyOTkxNDUsNjEuNjQ5NzU2MSAzOC4xNzcwMDk5LDgyLjAwMjU0MDYgMzguMTc3MDA5OSw4Mi4wMDI1NDA2IEMzOC4xNDEyMzA0LDg0LjIwMjQzNTQgMzYuMzIxMDI4NCw4NiAzNC4xMTI4NDk1LDg2IEwxNS4zMDU5NTM5LDg2IEMxMy4xMDc5Niw4NiAxMS4yNzgxODg0LDg0LjIxMDA3ODkgMTEuMjQxNzkzNiw4Mi4wMDIwOTkzIEMxMS4yNDE3OTM2LDgyLjAwMjA5OTMgMTAuODg4ODg4OSw2MS42NDcwODUyIDEwLjg4ODg4ODksNTEuMTQ4NjM2MSBDMTAuODg4ODg4OSw0OS4wNjE2NjU0IDIuMzQxNDM2NjIsNDIuMjM4NjU1IDIuMzQxNDM2NjIsNDIuMjM4NjU1IEMxLjc3ODI3MzExLDQxLjc2NDEzNjUgMS40NDg4MTM1NCw0MS4zMjA0MjM3IDEuMzQxNzMyMzEsNDAuOTM5MTcwMSBaJyBpZD0ncGF0aC0yJz48L3BhdGg+XG5cdFx0XHRcdFx0ICAgICAgICA8bWFzayBpZD0nbWFzay0zJyBtYXNrQ29udGVudFVuaXRzPSd1c2VyU3BhY2VPblVzZScgbWFza1VuaXRzPSdvYmplY3RCb3VuZGluZ0JveCcgeD0nMCcgeT0nMCcgd2lkdGg9JzQ5JyBoZWlnaHQ9Jzg2JyBmaWxsPSd3aGl0ZSc+XG5cdFx0XHRcdFx0ICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPScjcGF0aC0yJz48L3VzZT5cblx0XHRcdFx0XHQgICAgICAgIDwvbWFzaz5cblx0XHRcdFx0XHQgICAgPC9kZWZzPlxuXHRcdFx0XHRcdCAgICA8ZyBpZD0nUG9wb3ZlcicgZmlsdGVyPSd1cmwoI2ZpbHRlci0xKScgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoNTYuMDAwMDAwLCAzMTguMDAwMDAwKSc+XG5cdFx0XHRcdFx0ICAgICAgICA8dXNlIGlkPSdSZWN0YW5nbGUtMTQnIHN0cm9rZT0nIzYzNjM2MycgbWFzaz0ndXJsKCNtYXNrLTMpJyBmaWxsPScjNjM2MzYzJyB4bGluazpocmVmPScjcGF0aC0yJz48L3VzZT5cblx0XHRcdFx0XHQgICAgPC9nPlxuXHRcdFx0XHRcdDwvc3ZnPlwiXG5cdFx0XHRcImlwaG9uZS02c1wiIDogXCI8c3ZnIHdpZHRoPSc2NHB4JyBoZWlnaHQ9JzEwN3B4JyB2aWV3Qm94PScyNCAzODcgNjQgMTA3JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnPlxuXHRcdFx0XHRcdCAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNy4yICgyODI3NikgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdFx0XHRcdFx0ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdFx0XHRcdCAgICA8ZGVmcz5cblx0XHRcdFx0XHQgICAgICAgIDxmaWx0ZXIgeD0nLTUwJScgeT0nLTUwJScgd2lkdGg9JzIwMCUnIGhlaWdodD0nMjAwJScgZmlsdGVyVW5pdHM9J29iamVjdEJvdW5kaW5nQm94JyBpZD0nZmlsdGVyLTEnPlxuXHRcdFx0XHRcdCAgICAgICAgICAgIDxmZU9mZnNldCBkeD0nMCcgZHk9JzEnIGluPSdTb3VyY2VBbHBoYScgcmVzdWx0PSdzaGFkb3dPZmZzZXRPdXRlcjEnPjwvZmVPZmZzZXQ+XG5cdFx0XHRcdFx0ICAgICAgICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0nMS41JyBpbj0nc2hhZG93T2Zmc2V0T3V0ZXIxJyByZXN1bHQ9J3NoYWRvd0JsdXJPdXRlcjEnPjwvZmVHYXVzc2lhbkJsdXI+XG5cdFx0XHRcdFx0ICAgICAgICAgICAgPGZlQ29sb3JNYXRyaXggdmFsdWVzPScwIDAgMCAwIDAgICAwIDAgMCAwIDAgICAwIDAgMCAwIDAgIDAgMCAwIDAuNCAwJyB0eXBlPSdtYXRyaXgnIGluPSdzaGFkb3dCbHVyT3V0ZXIxJyByZXN1bHQ9J3NoYWRvd01hdHJpeE91dGVyMSc+PC9mZUNvbG9yTWF0cml4PlxuXHRcdFx0XHRcdCAgICAgICAgICAgIDxmZU1lcmdlPlxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICA8ZmVNZXJnZU5vZGUgaW49J3NoYWRvd01hdHJpeE91dGVyMSc+PC9mZU1lcmdlTm9kZT5cblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgPGZlTWVyZ2VOb2RlIGluPSdTb3VyY2VHcmFwaGljJz48L2ZlTWVyZ2VOb2RlPlxuXHRcdFx0XHRcdCAgICAgICAgICAgIDwvZmVNZXJnZT5cblx0XHRcdFx0XHQgICAgICAgIDwvZmlsdGVyPlxuXHRcdFx0XHRcdCAgICAgICAgPHBhdGggZD0nTTEuNDg2NDc2NDYsNDguMzc3OTk0NyBDMC41ODAyNjY0OSw0Ny42NDY0Mjk2IDAsNDYuNTI5NTg3IDAsNDUuMjc4MTk0OCBMMCwzLjk5MDA5Nzg3IEMwLDEuNzgyNTkxMiAxLjc5NTA5NTc3LDAgNC4wMDk0NTg2MiwwIEw1My45OTA1NDE0LDAgQzU2LjIwMDU3NDYsMCA1OCwxLjc4NjQyNzY3IDU4LDMuOTkwMDk3ODcgTDU4LDQ1LjI3ODE5NDggQzU4LDQ2LjE4MzMwMDQgNTcuNjk4MjI1OCw0Ny4wMTY5NzMzIDU3LjE4OTUwOTcsNDcuNjg1NjMyNSBDNTcuMDM5Njg2NSw0OC4wMjEyNDk3IDU2LjczNjAwOTgsNDguMzk3MjgzNCA1Ni4yNzE4MzYzLDQ4Ljc5NTA2NjEgQzU2LjI3MTgzNjMsNDguNzk1MDY2MSA0NS42MDY4Mzc2LDU3LjYyMjA2OTMgNDUuNjA2ODM3Niw2MC4wNzQ2MTQ5IEM0NS42MDY4Mzc2LDcyLjQwMjYyMDUgNDUuMTc3OTY3LDk2Ljk5MjMxNjQgNDUuMTc3OTY3LDk2Ljk5MjMxNjQgQzQ1LjE0MTM3NDgsOTkuMjEyMjIxNCA0My4zMTkzMDY1LDEwMSA0MS4xMDkwMDM1LDEwMSBMMTcuMzg2NzIzLDEwMSBDMTUuMTgxMjcyMiwxMDEgMTMuMzU0NjgzLDk5LjIwNTUwMDkgMTMuMzE3NzU5NSw5Ni45OTE4NzQxIEMxMy4zMTc3NTk1LDk2Ljk5MTg3NDEgMTIuODg4ODg4OSw3Mi4zOTk0ODM4IDEyLjg4ODg4ODksNjAuMDY5OTA5OSBDMTIuODg4ODg4OSw1Ny42MTg5MzI2IDIuMjI2NzM0MzcsNDkuMTQ2MjkzNiAyLjIyNjczNDM3LDQ5LjE0NjI5MzYgQzEuOTA1MjQwODcsNDguODc4ODMyNyAxLjY1OTExNjU1LDQ4LjYyMDczMyAxLjQ4NjQ3NjQ2LDQ4LjM3Nzk5NDcgWicgaWQ9J3BhdGgtMic+PC9wYXRoPlxuXHRcdFx0XHRcdCAgICAgICAgPG1hc2sgaWQ9J21hc2stMycgbWFza0NvbnRlbnRVbml0cz0ndXNlclNwYWNlT25Vc2UnIG1hc2tVbml0cz0nb2JqZWN0Qm91bmRpbmdCb3gnIHg9JzAnIHk9JzAnIHdpZHRoPSc1OCcgaGVpZ2h0PScxMDEnIGZpbGw9J3doaXRlJz5cblx0XHRcdFx0XHQgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9JyNwYXRoLTInPjwvdXNlPlxuXHRcdFx0XHRcdCAgICAgICAgPC9tYXNrPlxuXHRcdFx0XHRcdCAgICA8L2RlZnM+XG5cdFx0XHRcdFx0ICAgIDxnIGlkPSdQb3BvdmVyJyBmaWx0ZXI9J3VybCgjZmlsdGVyLTEpJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgyNy4wMDAwMDAsIDM4OS4wMDAwMDApJz5cblx0XHRcdFx0XHQgICAgICAgIDx1c2UgaWQ9J1JlY3RhbmdsZS0xNCcgc3Ryb2tlPScjIzYzNjM2MycgbWFzaz0ndXJsKCNtYXNrLTMpJyBmaWxsPScjNjM2MzYzJyB4bGluazpocmVmPScjcGF0aC0yJz48L3VzZT5cblx0XHRcdFx0XHQgICAgPC9nPlxuXHRcdFx0XHRcdDwvc3ZnPlwiXG5cdFx0XHRcImlwaG9uZS02cy1wbHVzXCIgOiBcIjxzdmcgd2lkdGg9JzcwcHgnIGhlaWdodD0nMTE5cHgnIHZpZXdCb3g9JzI4IDQ1MCA3MCAxMTknIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayc+XG5cdFx0XHRcdFx0ICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy43LjIgKDI4Mjc2KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHRcdFx0XHQgICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0XHRcdFx0ICAgIDxkZWZzPlxuXHRcdFx0XHRcdCAgICAgICAgPGZpbHRlciB4PSctNTAlJyB5PSctNTAlJyB3aWR0aD0nMjAwJScgaGVpZ2h0PScyMDAlJyBmaWx0ZXJVbml0cz0nb2JqZWN0Qm91bmRpbmdCb3gnIGlkPSdmaWx0ZXItMSc+XG5cdFx0XHRcdFx0ICAgICAgICAgICAgPGZlT2Zmc2V0IGR4PScwJyBkeT0nMScgaW49J1NvdXJjZUFscGhhJyByZXN1bHQ9J3NoYWRvd09mZnNldE91dGVyMSc+PC9mZU9mZnNldD5cblx0XHRcdFx0XHQgICAgICAgICAgICA8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPScxLjUnIGluPSdzaGFkb3dPZmZzZXRPdXRlcjEnIHJlc3VsdD0nc2hhZG93Qmx1ck91dGVyMSc+PC9mZUdhdXNzaWFuQmx1cj5cblx0XHRcdFx0XHQgICAgICAgICAgICA8ZmVDb2xvck1hdHJpeCB2YWx1ZXM9JzAgMCAwIDAgMCAgIDAgMCAwIDAgMCAgIDAgMCAwIDAgMCAgMCAwIDAgMC40IDAnIHR5cGU9J21hdHJpeCcgaW49J3NoYWRvd0JsdXJPdXRlcjEnIHJlc3VsdD0nc2hhZG93TWF0cml4T3V0ZXIxJz48L2ZlQ29sb3JNYXRyaXg+XG5cdFx0XHRcdFx0ICAgICAgICAgICAgPGZlTWVyZ2U+XG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgIDxmZU1lcmdlTm9kZSBpbj0nc2hhZG93TWF0cml4T3V0ZXIxJz48L2ZlTWVyZ2VOb2RlPlxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICA8ZmVNZXJnZU5vZGUgaW49J1NvdXJjZUdyYXBoaWMnPjwvZmVNZXJnZU5vZGU+XG5cdFx0XHRcdFx0ICAgICAgICAgICAgPC9mZU1lcmdlPlxuXHRcdFx0XHRcdCAgICAgICAgPC9maWx0ZXI+XG5cdFx0XHRcdFx0ICAgICAgICA8cGF0aCBkPSdNMS45NTcyOTM5NSw1NC4wNzI4MzA0IEMwLjc4NTkxMTEzMiw1My4zNzU3Njk5IDAsNTIuMDk4Nzc2IDAsNTAuNjM4OTAyMiBMMCwzLjk5NTI0NDE5IEMwLDEuNzg2NzE0MjggMS43OTI0MjIwMiwwIDQuMDAzNDg2NjMsMCBMNTkuOTk2NTEzNCwwIEM2Mi4yMDQ2MjM1LDAgNjQsMS43ODg3MzE3NSA2NCwzLjk5NTI0NDE5IEw2NCw1MC42Mzg5MDIyIEM2NCw1MS45MjMzNjg2IDYzLjM5MzcxMTYsNTMuMDY1MTU1NiA2Mi40NTEzOTEsNTMuNzk1NzU0IEM2Mi40NDI3NzUyLDUzLjgwMzI0MzMgNjIuNDM0MTAxOSw1My44MTA3NDA0IDYyLjQyNTM3MDksNTMuODE4MjQ1NCBDNjIuNDI1MzcwOSw1My44MTgyNDU0IDUwLjMyNDc4NjMsNjMuODk3NzQwMiA1MC4zMjQ3ODYzLDY2LjYxNzM5NDcgQzUwLjMyNDc4NjMsODAuMjg4MDU0NCA0OS44NDQzMDQ5LDEwOC4wMDIwMDcgNDkuODQ0MzA0OSwxMDguMDAyMDA3IEM0OS44MDc5NjY1LDExMC4yMTAyMzQgNDcuOTg3NDIzMiwxMTIgNDUuNzc4OTA4OSwxMTIgTDE4Ljc2ODA5OTcsMTEyIEMxNi41NTM0Mzk3LDExMiAxNC43Mzk0NDU2LDExMC4yMDk4NCAxNC43MDI3MDM3LDEwOC4wMDE1NjYgQzE0LjcwMjcwMzcsMTA4LjAwMTU2NiAxNC4yMjIyMjIyLDgwLjI4NDU3NjEgMTQuMjIyMjIyMiw2Ni42MTIxNzczIEMxNC4yMjIyMjIyLDYzLjg5NDI2MTkgMi4xNDA4MTQyMiw1NC4yMzIxMzM3IDIuMTQwODE0MjIsNTQuMjMyMTMzNyBDMi4wNzY2NDkxMyw1NC4xNzg2Mjk4IDIuMDE1NDgxMTEsNTQuMTI1NTEzNCAxLjk1NzI5Mzk1LDU0LjA3MjgzMDQgWicgaWQ9J3BhdGgtMic+PC9wYXRoPlxuXHRcdFx0XHRcdCAgICAgICAgPG1hc2sgaWQ9J21hc2stMycgbWFza0NvbnRlbnRVbml0cz0ndXNlclNwYWNlT25Vc2UnIG1hc2tVbml0cz0nb2JqZWN0Qm91bmRpbmdCb3gnIHg9JzAnIHk9JzAnIHdpZHRoPSc2NCcgaGVpZ2h0PScxMTInIGZpbGw9J3doaXRlJz5cblx0XHRcdFx0XHQgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9JyNwYXRoLTInPjwvdXNlPlxuXHRcdFx0XHRcdCAgICAgICAgPC9tYXNrPlxuXHRcdFx0XHRcdCAgICA8L2RlZnM+XG5cdFx0XHRcdFx0ICAgIDxnIGlkPSdQb3BvdmVyJyBmaWx0ZXI9J3VybCgjZmlsdGVyLTEpJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgzMS4wMDAwMDAsIDQ1Mi4wMDAwMDApJz5cblx0XHRcdFx0XHQgICAgICAgIDx1c2UgaWQ9J1JlY3RhbmdsZS0xNCcgc3Ryb2tlPScjNjM2MzYzJyBtYXNrPSd1cmwoI21hc2stMyknIGZpbGw9JyM2MzYzNjMnIHhsaW5rOmhyZWY9JyNwYXRoLTInPjwvdXNlPlxuXHRcdFx0XHRcdCAgICA8L2c+XG5cdFx0XHRcdFx0PC9zdmc+XCJcblxuXHRvYmplY3RzIDpcblx0XHRcIjw/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyc/PlxuXHRcdFx0XHQ8c3ZnIHdpZHRoPScxMXB4JyBoZWlnaHQ9JzE2cHgnIHZpZXdCb3g9JzAgMCAxMSAxNicgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyB4bWxuczpza2V0Y2g9J2h0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaC9ucyc+XG5cdFx0XHRcdDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy41LjIgKDI1MjM1KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHRcdFx0PHRpdGxlPkxpZ2h0YnVsYjwvdGl0bGU+XG5cdFx0XHRcdDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdFx0XHQ8ZGVmcz48L2RlZnM+XG5cdFx0XHRcdDxnIGlkPSdQYWdlLTEnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIHNrZXRjaDp0eXBlPSdNU1BhZ2UnPlxuXHRcdFx0XHRcdDxnIGlkPSdpUGhvbmUtNicgc2tldGNoOnR5cGU9J01TQXJ0Ym9hcmRHcm91cCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTI0NC4wMDAwMDAsIC02MzkuMDAwMDAwKScgc3Ryb2tlPScjNEE1MzYxJz5cblx0XHRcdFx0XHRcdDxnIGlkPSdMaWdodGJ1bGInIHNrZXRjaDp0eXBlPSdNU0xheWVyR3JvdXAnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDI0NC4wMDAwMDAsIDYzOS4wMDAwMDApJz5cblx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTgsMTAuNDAwMjkwNCBDOS43ODA4Mzc5NSw5LjQ4OTkzNDkxIDExLDcuNjM3MzQyNzMgMTEsNS41IEMxMSwyLjQ2MjQzMzg4IDguNTM3NTY2MTIsMCA1LjUsMCBDMi40NjI0MzM4OCwwIDAsMi40NjI0MzM4OCAwLDUuNSBDMCw3LjYzNzM0MjczIDEuMjE5MTYyMDUsOS40ODk5MzQ5MSAzLDEwLjQwMDI5MDQgTDMsMTQuMDAyMDg2OSBDMywxNS4xMDE3Mzk0IDMuODk3NjE2MDIsMTYgNS4wMDQ4ODE1LDE2IEw1Ljk5NTExODUsMTYgQzcuMTA2MTAwMiwxNiA4LDE1LjEwNTUwMzggOCwxNC4wMDIwODY5IEw4LDEwLjQwMDI5MDQgWicgaWQ9J092YWwtMTcnIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnPjwvcGF0aD5cblx0XHRcdFx0XHRcdFx0PHJlY3QgaWQ9J1JlY3RhbmdsZS01MCcgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCcgeD0nMycgeT0nMTInIHdpZHRoPSc1JyBoZWlnaHQ9JzEnPjwvcmVjdD5cblx0XHRcdFx0XHRcdFx0PHJlY3QgaWQ9J1JlY3RhbmdsZS01MScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCcgeD0nNCcgeT0nMTMuNScgd2lkdGg9JzEuNScgaGVpZ2h0PScxJz48L3JlY3Q+XG5cdFx0XHRcdFx0XHRcdDxwYXRoIGQ9J001LDguNSBDNSw4LjUgMy40OTk5OTk5OSw3LjUwMDAwMDAxIDQsNyBDNC41MDAwMDAwMSw2LjQ5OTk5OTk5IDUsNy42NjY2NjY2NyA1LjUsOCBDNS41LDggNi41LDYuNTAwMDAwMDEgNyw3IEM3LjUsNy40OTk5OTk5OSA2LDguNSA2LDguNSBMNiwxMSBMNSwxMSBMNSw4LjUgWicgaWQ9J1JlY3RhbmdsZS01Micgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCc+PC9wYXRoPlxuXHRcdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0PC9nPlxuXHRcdFx0PC9zdmc+XCJcblx0c2hpZnQgOiB7XG5cdFx0b24gOiBcIjw/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyc/PlxuXHRcdFx0XHQ8c3ZnIHdpZHRoPScyMHB4JyBoZWlnaHQ9JzE4cHgnIHZpZXdCb3g9JzAgMCAyMCAxNycgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyB4bWxuczpza2V0Y2g9J2h0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaC9ucyc+XG5cdFx0XHRcdFx0PCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjUuMiAoMjUyMzUpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdFx0XHRcdDx0aXRsZT5TaGlmdDwvdGl0bGU+XG5cdFx0XHRcdFx0PGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0XHRcdFx0PGRlZnM+PC9kZWZzPlxuXHRcdFx0XHRcdDxnIGlkPSdQYWdlLTEnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIHNrZXRjaDp0eXBlPSdNU1BhZ2UnPlxuXHRcdFx0XHRcdFx0PGcgaWQ9J0tleWJvYXJkL0xpZ2h0L1VwcGVyJyBza2V0Y2g6dHlwZT0nTVNMYXllckdyb3VwJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtMTQuMDAwMDAwLCAtMTMwLjAwMDAwMCknIGZpbGw9JyMwMzAzMDMnPlxuXHRcdFx0XHRcdFx0XHQ8ZyBpZD0nVGhpcmQtUm93JyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgzLjAwMDAwMCwgMTE4LjAwMDAwMCknIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnPlxuXHRcdFx0XHRcdFx0XHRcdDxwYXRoIGQ9J00yMS43MDUyMzg4LDEzLjIwNTIzODggQzIxLjMxNTc0NjIsMTIuODE1NzQ2MiAyMC42ODU3NTU5LDEyLjgxNDI0NDEgMjAuMjk0NzYxMiwxMy4yMDUyMzg4IEwxMS45MTYwNzY3LDIxLjU4MzkyMzMgQzExLjEzMzk5OTEsMjIuMzY2MDAwOSAxMS4zOTgyNjA2LDIzIDEyLjQ5NzkxMzEsMjMgTDE2LjUsMjMgTDE2LjUsMjguMDA5MjIyIEMxNi41LDI4LjU1NjQxMzYgMTYuOTQ2MzExNCwyOSAxNy40OTc1NDQ2LDI5IEwyNC41MDI0NTU0LDI5IEMyNS4wNTMzODQsMjkgMjUuNSwyOC41NDkwMjQ4IDI1LjUsMjguMDA5MjIyIEwyNS41LDIzIEwyOS41MDIwODY5LDIzIEMzMC42MDU1MDM4LDIzIDMwLjg2NjgyNCwyMi4zNjY4MjQgMzAuMDgzOTIzMywyMS41ODM5MjMzIEwyMS43MDUyMzg4LDEzLjIwNTIzODggWicgaWQ9J1NoaWZ0Jz48L3BhdGg+XG5cdFx0XHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdDwvc3ZnPlwiXG5cdFx0b2ZmIDogXCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0XHQ8c3ZnIHdpZHRoPScyMHB4JyBoZWlnaHQ9JzE4cHgnIHZpZXdCb3g9JzAgMCAyMCAxOScgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyB4bWxuczpza2V0Y2g9J2h0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaC9ucyc+XG5cdFx0XHQ8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNS4yICgyNTIzNSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdFx0XHQ8dGl0bGU+U2hpZnQ8L3RpdGxlPlxuXHRcdFx0PGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0XHQ8ZGVmcz48L2RlZnM+XG5cdFx0XHQ8ZyBpZD0nUGFnZS0xJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJyBza2V0Y2g6dHlwZT0nTVNQYWdlJz5cblx0XHRcdFx0PGcgaWQ9J0tleWJvYXJkL0xpZ2h0L0xvd2VyJyBza2V0Y2g6dHlwZT0nTVNMYXllckdyb3VwJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtMTQuMDAwMDAwLCAtMTI5LjAwMDAwMCknIGZpbGw9JyMwMzAzMDMnPlxuXHRcdFx0XHRcdDxnIGlkPSdUaGlyZC1Sb3cnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDMuMDAwMDAwLCAxMTguMDAwMDAwKScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCc+XG5cdFx0XHRcdFx0XHQ8cGF0aCBkPSdNMjEuNjcxOTAwOCwxMi4yMzI1ODk4IEMyMS4zMDEwMzIsMTEuODI3OTkxNiAyMC42OTQ2ODkyLDExLjgzMzQ3MzEgMjAuMzI4ODE5NSwxMi4yMzI1ODk4IEwxMS42OTQ3MDIzLDIxLjY1MTI5ODMgQzEwLjc1ODc0NDEsMjIuNjcyMzA4IDExLjEyODU1NDEsMjMuNSAxMi41MDk3NzUxLDIzLjUgTDE1Ljk5OTk5OTksMjMuNTAwMDAwMiBMMTUuOTk5OTk5OSwyOC4wMDE0MjQxIEMxNS45OTk5OTk5LDI4LjgyOTA2NDggMTYuNjcxNjU1OSwyOS41MDAwMDAxIDE3LjQ5NzEwMSwyOS41MDAwMDAxIEwyNC41MDI4OTkyLDI5LjUwMDAwMDEgQzI1LjMyOTcyNTMsMjkuNTAwMDAwMSAyNi4wMDAwMDAzLDI4LjgzNDk3MDMgMjYuMDAwMDAwMywyOC4wMDE0MjQxIEwyNi4wMDAwMDAzLDIzLjUwMDAwMDEgTDI5LjQ5MDIyNTEsMjMuNTAwMDAwMiBDMzAuODc2MzM1NywyMy41MDAwMDAyIDMxLjI0Mzk1MjEsMjIuNjc1MTkxNiAzMC4zMDU0MTYxLDIxLjY1MTI5ODUgTDIxLjY3MTkwMDgsMTIuMjMyNTg5OCBaIE0yMS4zNDE3NDgsMTQuMzY0NTMxNiBDMjEuMTUzMDA1NiwxNC4xNjMyMDY0IDIwLjg0MzM1MTUsMTQuMTY3MDkxNCAyMC42NTgyNTE0LDE0LjM2NDUzMTYgTDEzLjUsMjEuOTk5OTk5OCBMMTcuNTAwMDAwMSwyMS45OTk5OTk5IEwxNy41MDAwMDAyLDI3LjUwODk5NTYgQzE3LjUwMDAwMDIsMjcuNzgwMTcwMyAxNy43MzI5MDI3LDI4LjAwMDAwMDggMTguMDAzNDIyOSwyOC4wMDAwMDA4IEwyMy45OTY1NzcsMjguMDAwMDAwOCBDMjQuMjc0NjA5NywyOC4wMDAwMDA4IDI0LjQ5OTk5OTcsMjcuNzcyMTIwMyAyNC40OTk5OTk3LDI3LjUwODk5NTYgTDI0LjQ5OTk5OTcsMjEuOTk5OTk5OSBMMjguNSwyMS45OTk5OTk5IEwyMS4zNDE3NDgsMTQuMzY0NTMxNiBaJyBpZD0nU2hpZnQnPjwvcGF0aD5cblx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdDwvZz5cblx0XHRcdDwvZz5cblx0XHQ8L3N2Zz5cIlxuXHR9XG5cdG1lc3NhZ2VzX2FwcDpcIjw/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyc/PlxuXHQ8c3ZnIHdpZHRoPSc2MHB4JyBoZWlnaHQ9JzYwcHgnIHZpZXdCb3g9JzAgMCA2MCA2MCcgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJz5cblx0ICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMzkuMSAoMzE3MjApIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHQgICAgPHRpdGxlPk1lc3NhZ2VzIENvcHk8L3RpdGxlPlxuXHQgICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdCAgICA8ZGVmcz5cblx0ICAgICAgICA8bGluZWFyR3JhZGllbnQgeDE9JzUwJScgeTE9JzAlJyB4Mj0nNTAlJyB5Mj0nMTAwJScgaWQ9J2xpbmVhckdyYWRpZW50LTEnPlxuXHQgICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPScjNjZGRDdGJyBvZmZzZXQ9JzAlJz48L3N0b3A+XG5cdCAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9JyMwOUI4MjYnIG9mZnNldD0nMTAwJSc+PC9zdG9wPlxuXHQgICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XG5cdCAgICA8L2RlZnM+XG5cdCAgICA8ZyBpZD0naU9TLUtpdCcgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCc+XG5cdCAgICAgICAgPGcgaWQ9J0hvbWUtU2NyZWVuJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtMTQ1Mi4wMDAwMDAsIC04NTMuMDAwMDAwKSc+XG5cdCAgICAgICAgICAgIDxnIGlkPSdIb21lLVNjcmVlbi3igKItaVBob25lLTZzLVBsdXMnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDE0MTcuMDAwMDAwLCA4MTIuMDAwMDAwKSc+XG5cdCAgICAgICAgICAgICAgICA8ZyBpZD0nTWVzc2FnZXMtQ29weScgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMzUuMDAwMDAwLCA0MS4wMDAwMDApJz5cblx0ICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0nQkcnIGZpbGw9J3VybCgjbGluZWFyR3JhZGllbnQtMSknIHg9JzAnIHk9JzAnIHdpZHRoPSc2MCcgaGVpZ2h0PSc2MCcgcng9JzE0Jz48L3JlY3Q+XG5cdCAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0nTTE5LjQyMjM5NzYsNDQuMzA4ODAwNiBDMTMuMTY2NDIyOCw0MS4xMzQ4OTQ5IDksMzUuNDY1NTQyMSA5LDI5IEM5LDE5LjA1ODg3NDUgMTguODQ5NzM1NSwxMSAzMSwxMSBDNDMuMTUwMjY0NSwxMSA1MywxOS4wNTg4NzQ1IDUzLDI5IEM1MywzOC45NDExMjU1IDQzLjE1MDI2NDUsNDcgMzEsNDcgQzI4LjY5OTQ1ODgsNDcgMjYuNDgxMzkxNCw0Ni43MTEwODk3IDI0LjM5NzA0MDksNDYuMTc1MTk1MyBDMjMuOTQ0MjY1Myw0Ni44ODM4MTQzIDIxLjkwNjUzNzcsNDkuNSAxNi41LDQ5LjUgQzE1LjYxNTAxODcsNDkuNSAxNy4xODM0NzQ5LDQ4LjU5MTU5MjEgMTgsNDcuNSBDMTguNzg5NDI4Niw0Ni40NDQ2MzI2IDE5LjI1MDU2MjUsNDQuOTQ4MDM2MiAxOS40MjIzOTc2LDQ0LjMwODgwMDYgWicgaWQ9J0J1YmJsZScgZmlsbD0nI0ZGRkZGRic+PC9wYXRoPlxuXHQgICAgICAgICAgICAgICAgPC9nPlxuXHQgICAgICAgICAgICA8L2c+XG5cdCAgICAgICAgPC9nPlxuXHQgICAgPC9nPlxuXHQ8L3N2Zz5cIlxuXHRjYWxlbmRhcl9hcHA6XCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0PHN2ZyB3aWR0aD0nNjBweCcgaGVpZ2h0PSc2MHB4JyB2aWV3Qm94PScwIDAgNjAgNjAnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayc+XG5cdCAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDM5LjEgKDMxNzIwKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0ICAgIDx0aXRsZT5DYWxlbmRhcjwvdGl0bGU+XG5cdCAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0ICAgIDxkZWZzPjwvZGVmcz5cblx0ICAgIDxnIGlkPSdQYWdlLTEnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnPlxuXHQgICAgICAgIDxnIGlkPSdIb21lLVNjcmVlbi3igKItaVBob25lLVNFJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtOTIuMDAwMDAwLCAtMjcuMDAwMDAwKSc+XG5cdCAgICAgICAgICAgIDxnIGlkPSdIb21lLVNjcmVlbi3igKItaVBob25lLTZzLUNvcHknIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDAuMDAwMDAwLCAyNy4wMDAwMDApJz5cblx0ICAgICAgICAgICAgICAgIDxnIGlkPSdDYWxlbmRhcicgdHJhbnNmb3JtPSd0cmFuc2xhdGUoOTIuMDAwMDAwLCAwLjAwMDAwMCknPlxuXHQgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSdCRycgZmlsbD0nI0ZGRkZGRicgeD0nMCcgeT0nMCcgd2lkdGg9JzYwJyBoZWlnaHQ9JzYwJyByeD0nMTQnPjwvcmVjdD5cblx0ICAgICAgICAgICAgICAgICAgICA8dGV4dCBpZD0nMjUnIGZvbnQtZmFtaWx5PSdTRlVJRGlzcGxheS1VbHRyYWxpZ2h0LCBTRiBVSSBEaXNwbGF5JyBmb250LXNpemU9JzQwJyBmb250LXdlaWdodD0nMjAwJyBsZXR0ZXItc3BhY2luZz0nMC4zNzk5OTk5OTUnIGZpbGw9JyMwMDAwMDAnPlxuXHQgICAgICAgICAgICAgICAgICAgICAgICA8dHNwYW4geD0nNy4xMDgyODEyNScgeT0nNDknPjI1PC90c3Bhbj5cblx0ICAgICAgICAgICAgICAgICAgICA8L3RleHQ+XG5cdCAgICAgICAgICAgICAgICAgICAgPHRleHQgaWQ9J01vbmRheScgZm9udC1mYW1pbHk9J1NGVUlEaXNwbGF5LU1lZGl1bSwgU0YgVUkgRGlzcGxheScgZm9udC1zaXplPScxMScgZm9udC13ZWlnaHQ9JzQwMCcgbGV0dGVyLXNwYWNpbmc9JzAuMzc5OTk5OTk1JyBmaWxsPScjRkYzQjMwJz5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgPHRzcGFuIHg9JzkuMDI5OTIxODknIHk9JzE1Jz5Nb25kYXk8L3RzcGFuPlxuXHQgICAgICAgICAgICAgICAgICAgIDwvdGV4dD5cblx0ICAgICAgICAgICAgICAgIDwvZz5cblx0ICAgICAgICAgICAgPC9nPlxuXHQgICAgICAgIDwvZz5cblx0ICAgIDwvZz5cblx0PC9zdmc+XCJcblx0cGhvdG9zX2FwcDpcIjw/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyc/PlxuXHQ8c3ZnIHdpZHRoPSc2MHB4JyBoZWlnaHQ9JzYwcHgnIHZpZXdCb3g9JzAgMCA2MCA2MCcgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJz5cblx0ICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMzkuMSAoMzE3MjApIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHQgICAgPHRpdGxlPlBob3RvczwvdGl0bGU+XG5cdCAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0ICAgIDxkZWZzPjwvZGVmcz5cblx0ICAgIDxnIGlkPSdQYWdlLTEnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnPlxuXHQgICAgICAgIDxnIGlkPSdIb21lLVNjcmVlbi3igKItaVBob25lLVNFJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtMTY4LjAwMDAwMCwgLTI3LjAwMDAwMCknPlxuXHQgICAgICAgICAgICA8ZyBpZD0nSG9tZS1TY3JlZW4t4oCiLWlQaG9uZS02cy1Db3B5JyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgwLjAwMDAwMCwgMjcuMDAwMDAwKSc+XG5cdCAgICAgICAgICAgICAgICA8ZyBpZD0nUGhvdG9zJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgxNjguMDAwMDAwLCAwLjAwMDAwMCknPlxuXHQgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSdCRycgZmlsbD0nI0ZGRkZGRicgeD0nMCcgeT0nMCcgd2lkdGg9JzYwJyBoZWlnaHQ9JzYwJyByeD0nMTQnPjwvcmVjdD5cblx0ICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0nUGVkYWwnIGZpbGw9JyNGMjZFNjQnIHN0eWxlPSdtaXgtYmxlbmQtbW9kZTogbXVsdGlwbHk7JyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgyMC4xNDIxMzYsIDIwLjE0MjEzNikgcm90YXRlKDQ1LjAwMDAwMCkgdHJhbnNsYXRlKC0yMC4xNDIxMzYsIC0yMC4xNDIxMzYpICcgeD0nOC4xNDIxMzU2MicgeT0nMTIuMTQyMTM1Nicgd2lkdGg9JzI0JyBoZWlnaHQ9JzE2JyByeD0nOCc+PC9yZWN0PlxuXHQgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSdQZWRhbCcgZmlsbD0nI0YwRTIyQScgc3R5bGU9J21peC1ibGVuZC1tb2RlOiBtdWx0aXBseTsnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDM5LjE0MjEzNiwgMTkuMTQyMTM2KSByb3RhdGUoMTM1LjAwMDAwMCkgdHJhbnNsYXRlKC0zOS4xNDIxMzYsIC0xOS4xNDIxMzYpICcgeD0nMjcuMTQyMTM1NicgeT0nMTEuMTQyMTM1Nicgd2lkdGg9JzI0JyBoZWlnaHQ9JzE2JyByeD0nOCc+PC9yZWN0PlxuXHQgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSdQZWRhbCcgZmlsbD0nI0QyODhCMScgc3R5bGU9J21peC1ibGVuZC1tb2RlOiBtdWx0aXBseTsnIHg9JzQnIHk9JzIyJyB3aWR0aD0nMjQnIGhlaWdodD0nMTYnIHJ4PSc4Jz48L3JlY3Q+XG5cdCAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9J1BlZGFsJyBmaWxsPScjRkJBRDMxJyBzdHlsZT0nbWl4LWJsZW5kLW1vZGU6IG11bHRpcGx5OycgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMzAuMDAwMDAwLCAxNi4wMDAwMDApIHJvdGF0ZSg5MC4wMDAwMDApIHRyYW5zbGF0ZSgtMzAuMDAwMDAwLCAtMTYuMDAwMDAwKSAnIHg9JzE4JyB5PSc4JyB3aWR0aD0nMjQnIGhlaWdodD0nMTYnIHJ4PSc4Jz48L3JlY3Q+XG5cdCAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9J1BlZGFsJyBmaWxsPScjQTU4RUMyJyBzdHlsZT0nbWl4LWJsZW5kLW1vZGU6IG11bHRpcGx5OycgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMjAuMTQyMTM2LCA0MC4xNDIxMzYpIHNjYWxlKDEsIC0xKSByb3RhdGUoNDUuMDAwMDAwKSB0cmFuc2xhdGUoLTIwLjE0MjEzNiwgLTQwLjE0MjEzNikgJyB4PSc4LjE0MjEzNTYyJyB5PSczMi4xNDIxMzU2JyB3aWR0aD0nMjQnIGhlaWdodD0nMTYnIHJ4PSc4Jz48L3JlY3Q+XG5cdCAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9J1BlZGFsJyBmaWxsPScjNkNDMTk5JyBzdHlsZT0nbWl4LWJsZW5kLW1vZGU6IG11bHRpcGx5OycgdHJhbnNmb3JtPSd0cmFuc2xhdGUoNDAuMTQyMTM2LCA0MC4xNDIxMzYpIHNjYWxlKDEsIC0xKSByb3RhdGUoMTM1LjAwMDAwMCkgdHJhbnNsYXRlKC00MC4xNDIxMzYsIC00MC4xNDIxMzYpICcgeD0nMjguMTQyMTM1NicgeT0nMzIuMTQyMTM1Nicgd2lkdGg9JzI0JyBoZWlnaHQ9JzE2JyByeD0nOCc+PC9yZWN0PlxuXHQgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSdQZWRhbCcgZmlsbD0nIzc3QUVERCcgc3R5bGU9J21peC1ibGVuZC1tb2RlOiBtdWx0aXBseTsnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDMwLjAwMDAwMCwgNDQuMDAwMDAwKSBzY2FsZSgxLCAtMSkgcm90YXRlKDkwLjAwMDAwMCkgdHJhbnNsYXRlKC0zMC4wMDAwMDAsIC00NC4wMDAwMDApICcgeD0nMTgnIHk9JzM2JyB3aWR0aD0nMjQnIGhlaWdodD0nMTYnIHJ4PSc4Jz48L3JlY3Q+XG5cdCAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9J1BlZGFsJyBmaWxsPScjQjVENjU1JyBzdHlsZT0nbWl4LWJsZW5kLW1vZGU6IG11bHRpcGx5OycgdHJhbnNmb3JtPSd0cmFuc2xhdGUoNDQuMDAwMDAwLCAzMC4wMDAwMDApIHJvdGF0ZSgxODAuMDAwMDAwKSB0cmFuc2xhdGUoLTQ0LjAwMDAwMCwgLTMwLjAwMDAwMCkgJyB4PSczMicgeT0nMjInIHdpZHRoPScyNCcgaGVpZ2h0PScxNicgcng9JzgnPjwvcmVjdD5cblx0ICAgICAgICAgICAgICAgIDwvZz5cblx0ICAgICAgICAgICAgPC9nPlxuXHQgICAgICAgIDwvZz5cblx0ICAgIDwvZz5cblx0PC9zdmc+XCJcblx0Y2FtZXJhX2FwcDpcIjw/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyc/PlxuXHQ8c3ZnIHdpZHRoPSc2MHB4JyBoZWlnaHQ9JzYwcHgnIHZpZXdCb3g9JzAgMCA2MCA2MCcgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJz5cblx0ICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMzkuMSAoMzE3MjApIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHQgICAgPHRpdGxlPkNhbWVyYTwvdGl0bGU+XG5cdCAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0ICAgIDxkZWZzPlxuXHQgICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0nNTAlJyB5MT0nMCUnIHgyPSc1MCUnIHkyPScxMDAlJyBpZD0nbGluZWFyR3JhZGllbnQtMSc+XG5cdCAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9JyNEQkREREUnIG9mZnNldD0nMCUnPjwvc3RvcD5cblx0ICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0nIzg5OEI5MScgb2Zmc2V0PScxMDAlJz48L3N0b3A+XG5cdCAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cblx0ICAgICAgICA8bGluZWFyR3JhZGllbnQgeDE9JzUwJScgeTE9JzAlJyB4Mj0nNTAlJyB5Mj0nMTAwJScgaWQ9J2xpbmVhckdyYWRpZW50LTInPlxuXHQgICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPScjNDc0NzQ3JyBvZmZzZXQ9JzAlJz48L3N0b3A+XG5cdCAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9JyMyQjJCMkInIG9mZnNldD0nMTAwJSc+PC9zdG9wPlxuXHQgICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XG5cdCAgICAgICAgPHBhdGggZD0nTTksMjAgTDUxLDIwIEw1MSw0MiBMOSw0MiBMOSwyMCBaIE05LDQyLjk5NzU3MjIgQzksNDQuMzc5NTg3NyAxMC4xMTk5NjUzLDQ1LjUgMTEuNTAxNTEyNSw0NS41IEw0OC40OTg0ODc1LDQ1LjUgQzQ5Ljg3NjYwMTUsNDUuNSA1MSw0NC4zNzk2MjQ5IDUxLDQyLjk5NzU3MjIgTDUxLDQyLjUgTDksNDIuNSBMOSw0Mi45OTc1NzIyIFogTTksMTkuNSBMOSwxOS4wMDI0Mjc4IEM5LDE3LjYyMDM3NTEgMTAuMTIzMzk4NSwxNi41IDExLjUwMTUxMjUsMTYuNSBMMTcuNTMwNDQ5NiwxNi41IEMxOC40NTcyMDExLDE2LjQxODAxODYgMTkuMzIxODIwOCwxNi4yNDE2MzEzIDE5LjkyMDUzMjIsMTUuODkwMjU4OCBDMjEuODMyNjQyNSwxNC43NjgwNzcyIDIxLjk2NDExMTMsMTEuNSAyNC45OTYyMDUsMTEuNSBMMzAuMDI2MDgzLDExLjUgTDM1LjA1NTk2MTEsMTEuNSBDMzguMDg4MDU0OCwxMS41IDM4LjIxOTUyMzYsMTQuNzY4MDc3MiA0MC4xMzE2MzM5LDE1Ljg5MDI1ODggQzQwLjczMDM0NTMsMTYuMjQxNjMxMyA0MS41OTQ5NjUsMTYuNDE4MDE4NiA0Mi41MjE3MTY1LDE2LjUgTDQ4LjQ5ODQ4NzUsMTYuNSBDNDkuODgwMDM0NywxNi41IDUxLDE3LjYyMDQxMjMgNTEsMTkuMDAyNDI3OCBMNTEsMTkuNSBMOSwxOS41IEw5LDE5LjUgWiBNMzkuMjUsMzEgQzM5LjI1LDI1Ljg5MTM2NjEgMzUuMTA4NjMzOSwyMS43NSAzMCwyMS43NSBDMjQuODkxMzY2MSwyMS43NSAyMC43NSwyNS44OTEzNjYxIDIwLjc1LDMxIEMyMC43NSwzNi4xMDg2MzM5IDI0Ljg5MTM2NjEsNDAuMjUgMzAsNDAuMjUgQzM1LjEwODYzMzksNDAuMjUgMzkuMjUsMzYuMTA4NjMzOSAzOS4yNSwzMSBMMzkuMjUsMzEgWiBNMjIuMjUsMzEgQzIyLjI1LDI2LjcxOTc5MzIgMjUuNzE5NzkzMiwyMy4yNSAzMCwyMy4yNSBDMzQuMjgwMjA2OCwyMy4yNSAzNy43NSwyNi43MTk3OTMyIDM3Ljc1LDMxIEMzNy43NSwzNS4yODAyMDY4IDM0LjI4MDIwNjgsMzguNzUgMzAsMzguNzUgQzI1LjcxOTc5MzIsMzguNzUgMjIuMjUsMzUuMjgwMjA2OCAyMi4yNSwzMSBMMjIuMjUsMzEgWicgaWQ9J3BhdGgtMyc+PC9wYXRoPlxuXHQgICAgICAgIDxmaWx0ZXIgeD0nLTUwJScgeT0nLTUwJScgd2lkdGg9JzIwMCUnIGhlaWdodD0nMjAwJScgZmlsdGVyVW5pdHM9J29iamVjdEJvdW5kaW5nQm94JyBpZD0nZmlsdGVyLTQnPlxuXHQgICAgICAgICAgICA8ZmVPZmZzZXQgZHg9JzAnIGR5PScxJyBpbj0nU291cmNlQWxwaGEnIHJlc3VsdD0nc2hhZG93T2Zmc2V0T3V0ZXIxJz48L2ZlT2Zmc2V0PlxuXHQgICAgICAgICAgICA8ZmVDb2xvck1hdHJpeCB2YWx1ZXM9JzAgMCAwIDAgMSAgIDAgMCAwIDAgMSAgIDAgMCAwIDAgMSAgMCAwIDAgMC41IDAnIHR5cGU9J21hdHJpeCcgaW49J3NoYWRvd09mZnNldE91dGVyMSc+PC9mZUNvbG9yTWF0cml4PlxuXHQgICAgICAgIDwvZmlsdGVyPlxuXHQgICAgICAgIDxmaWx0ZXIgeD0nLTUwJScgeT0nLTUwJScgd2lkdGg9JzIwMCUnIGhlaWdodD0nMjAwJScgZmlsdGVyVW5pdHM9J29iamVjdEJvdW5kaW5nQm94JyBpZD0nZmlsdGVyLTUnPlxuXHQgICAgICAgICAgICA8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPScxJyBpbj0nU291cmNlQWxwaGEnIHJlc3VsdD0nc2hhZG93Qmx1cklubmVyMSc+PC9mZUdhdXNzaWFuQmx1cj5cblx0ICAgICAgICAgICAgPGZlT2Zmc2V0IGR4PScwJyBkeT0nMScgaW49J3NoYWRvd0JsdXJJbm5lcjEnIHJlc3VsdD0nc2hhZG93T2Zmc2V0SW5uZXIxJz48L2ZlT2Zmc2V0PlxuXHQgICAgICAgICAgICA8ZmVDb21wb3NpdGUgaW49J3NoYWRvd09mZnNldElubmVyMScgaW4yPSdTb3VyY2VBbHBoYScgb3BlcmF0b3I9J2FyaXRobWV0aWMnIGsyPSctMScgazM9JzEnIHJlc3VsdD0nc2hhZG93SW5uZXJJbm5lcjEnPjwvZmVDb21wb3NpdGU+XG5cdCAgICAgICAgICAgIDxmZUNvbG9yTWF0cml4IHZhbHVlcz0nMCAwIDAgMCAwICAgMCAwIDAgMCAwICAgMCAwIDAgMCAwICAwIDAgMCAwLjMgMCcgdHlwZT0nbWF0cml4JyBpbj0nc2hhZG93SW5uZXJJbm5lcjEnIHJlc3VsdD0nc2hhZG93TWF0cml4SW5uZXIxJz48L2ZlQ29sb3JNYXRyaXg+XG5cdCAgICAgICAgICAgIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249JzAuNScgaW49J1NvdXJjZUFscGhhJyByZXN1bHQ9J3NoYWRvd0JsdXJJbm5lcjInPjwvZmVHYXVzc2lhbkJsdXI+XG5cdCAgICAgICAgICAgIDxmZU9mZnNldCBkeD0nMCcgZHk9JzEnIGluPSdzaGFkb3dCbHVySW5uZXIyJyByZXN1bHQ9J3NoYWRvd09mZnNldElubmVyMic+PC9mZU9mZnNldD5cblx0ICAgICAgICAgICAgPGZlQ29tcG9zaXRlIGluPSdzaGFkb3dPZmZzZXRJbm5lcjInIGluMj0nU291cmNlQWxwaGEnIG9wZXJhdG9yPSdhcml0aG1ldGljJyBrMj0nLTEnIGszPScxJyByZXN1bHQ9J3NoYWRvd0lubmVySW5uZXIyJz48L2ZlQ29tcG9zaXRlPlxuXHQgICAgICAgICAgICA8ZmVDb2xvck1hdHJpeCB2YWx1ZXM9JzAgMCAwIDAgMCAgIDAgMCAwIDAgMCAgIDAgMCAwIDAgMCAgMCAwIDAgMC4zIDAnIHR5cGU9J21hdHJpeCcgaW49J3NoYWRvd0lubmVySW5uZXIyJyByZXN1bHQ9J3NoYWRvd01hdHJpeElubmVyMic+PC9mZUNvbG9yTWF0cml4PlxuXHQgICAgICAgICAgICA8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPScwLjUnIGluPSdTb3VyY2VBbHBoYScgcmVzdWx0PSdzaGFkb3dCbHVySW5uZXIzJz48L2ZlR2F1c3NpYW5CbHVyPlxuXHQgICAgICAgICAgICA8ZmVPZmZzZXQgZHg9JzAnIGR5PScwJyBpbj0nc2hhZG93Qmx1cklubmVyMycgcmVzdWx0PSdzaGFkb3dPZmZzZXRJbm5lcjMnPjwvZmVPZmZzZXQ+XG5cdCAgICAgICAgICAgIDxmZUNvbXBvc2l0ZSBpbj0nc2hhZG93T2Zmc2V0SW5uZXIzJyBpbjI9J1NvdXJjZUFscGhhJyBvcGVyYXRvcj0nYXJpdGhtZXRpYycgazI9Jy0xJyBrMz0nMScgcmVzdWx0PSdzaGFkb3dJbm5lcklubmVyMyc+PC9mZUNvbXBvc2l0ZT5cblx0ICAgICAgICAgICAgPGZlQ29sb3JNYXRyaXggdmFsdWVzPScwIDAgMCAwIDAgICAwIDAgMCAwIDAgICAwIDAgMCAwIDAgIDAgMCAwIDAuMyAwJyB0eXBlPSdtYXRyaXgnIGluPSdzaGFkb3dJbm5lcklubmVyMycgcmVzdWx0PSdzaGFkb3dNYXRyaXhJbm5lcjMnPjwvZmVDb2xvck1hdHJpeD5cblx0ICAgICAgICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0nMC41JyBpbj0nU291cmNlQWxwaGEnIHJlc3VsdD0nc2hhZG93Qmx1cklubmVyNCc+PC9mZUdhdXNzaWFuQmx1cj5cblx0ICAgICAgICAgICAgPGZlT2Zmc2V0IGR4PSctMCcgZHk9JzAnIGluPSdzaGFkb3dCbHVySW5uZXI0JyByZXN1bHQ9J3NoYWRvd09mZnNldElubmVyNCc+PC9mZU9mZnNldD5cblx0ICAgICAgICAgICAgPGZlQ29tcG9zaXRlIGluPSdzaGFkb3dPZmZzZXRJbm5lcjQnIGluMj0nU291cmNlQWxwaGEnIG9wZXJhdG9yPSdhcml0aG1ldGljJyBrMj0nLTEnIGszPScxJyByZXN1bHQ9J3NoYWRvd0lubmVySW5uZXI0Jz48L2ZlQ29tcG9zaXRlPlxuXHQgICAgICAgICAgICA8ZmVDb2xvck1hdHJpeCB2YWx1ZXM9JzAgMCAwIDAgMCAgIDAgMCAwIDAgMCAgIDAgMCAwIDAgMCAgMCAwIDAgMC4zIDAnIHR5cGU9J21hdHJpeCcgaW49J3NoYWRvd0lubmVySW5uZXI0JyByZXN1bHQ9J3NoYWRvd01hdHJpeElubmVyNCc+PC9mZUNvbG9yTWF0cml4PlxuXHQgICAgICAgICAgICA8ZmVNZXJnZT5cblx0ICAgICAgICAgICAgICAgIDxmZU1lcmdlTm9kZSBpbj0nc2hhZG93TWF0cml4SW5uZXIxJz48L2ZlTWVyZ2VOb2RlPlxuXHQgICAgICAgICAgICAgICAgPGZlTWVyZ2VOb2RlIGluPSdzaGFkb3dNYXRyaXhJbm5lcjInPjwvZmVNZXJnZU5vZGU+XG5cdCAgICAgICAgICAgICAgICA8ZmVNZXJnZU5vZGUgaW49J3NoYWRvd01hdHJpeElubmVyMyc+PC9mZU1lcmdlTm9kZT5cblx0ICAgICAgICAgICAgICAgIDxmZU1lcmdlTm9kZSBpbj0nc2hhZG93TWF0cml4SW5uZXI0Jz48L2ZlTWVyZ2VOb2RlPlxuXHQgICAgICAgICAgICA8L2ZlTWVyZ2U+XG5cdCAgICAgICAgPC9maWx0ZXI+XG5cdCAgICAgICAgPHBhdGggZD0nTTEzLDE1LjI1IEMxMywxNC44MzU3ODY0IDEzLjMzNTU5NDcsMTQuNSAxMy43NTA4Mzc4LDE0LjUgTDE1Ljc0OTE2MjIsMTQuNSBDMTYuMTYzODM4NSwxNC41IDE2LjUsMTQuODMyODk4NiAxNi41LDE1LjI1IEwxNi41LDE2IEwxMywxNiBMMTMsMTUuMjUgTDEzLDE1LjI1IFonIGlkPSdwYXRoLTYnPjwvcGF0aD5cblx0ICAgICAgICA8ZmlsdGVyIHg9Jy01MCUnIHk9Jy01MCUnIHdpZHRoPScyMDAlJyBoZWlnaHQ9JzIwMCUnIGZpbHRlclVuaXRzPSdvYmplY3RCb3VuZGluZ0JveCcgaWQ9J2ZpbHRlci03Jz5cblx0ICAgICAgICAgICAgPGZlT2Zmc2V0IGR4PScwJyBkeT0nMCcgaW49J1NvdXJjZUFscGhhJyByZXN1bHQ9J3NoYWRvd09mZnNldE91dGVyMSc+PC9mZU9mZnNldD5cblx0ICAgICAgICAgICAgPGZlQ29sb3JNYXRyaXggdmFsdWVzPScwIDAgMCAwIDEgICAwIDAgMCAwIDEgICAwIDAgMCAwIDEgIDAgMCAwIDAuNSAwJyB0eXBlPSdtYXRyaXgnIGluPSdzaGFkb3dPZmZzZXRPdXRlcjEnPjwvZmVDb2xvck1hdHJpeD5cblx0ICAgICAgICA8L2ZpbHRlcj5cblx0ICAgICAgICA8ZmlsdGVyIHg9Jy01MCUnIHk9Jy01MCUnIHdpZHRoPScyMDAlJyBoZWlnaHQ9JzIwMCUnIGZpbHRlclVuaXRzPSdvYmplY3RCb3VuZGluZ0JveCcgaWQ9J2ZpbHRlci04Jz5cblx0ICAgICAgICAgICAgPGZlT2Zmc2V0IGR4PScwJyBkeT0nMScgaW49J1NvdXJjZUFscGhhJyByZXN1bHQ9J3NoYWRvd09mZnNldElubmVyMSc+PC9mZU9mZnNldD5cblx0ICAgICAgICAgICAgPGZlQ29tcG9zaXRlIGluPSdzaGFkb3dPZmZzZXRJbm5lcjEnIGluMj0nU291cmNlQWxwaGEnIG9wZXJhdG9yPSdhcml0aG1ldGljJyBrMj0nLTEnIGszPScxJyByZXN1bHQ9J3NoYWRvd0lubmVySW5uZXIxJz48L2ZlQ29tcG9zaXRlPlxuXHQgICAgICAgICAgICA8ZmVDb2xvck1hdHJpeCB2YWx1ZXM9JzAgMCAwIDAgMCAgIDAgMCAwIDAgMCAgIDAgMCAwIDAgMCAgMCAwIDAgMC41IDAnIHR5cGU9J21hdHJpeCcgaW49J3NoYWRvd0lubmVySW5uZXIxJz48L2ZlQ29sb3JNYXRyaXg+XG5cdCAgICAgICAgPC9maWx0ZXI+XG5cdCAgICAgICAgPGNpcmNsZSBpZD0ncGF0aC05JyBjeD0nMzkuNScgY3k9JzIzJyByPScxJz48L2NpcmNsZT5cblx0ICAgICAgICA8ZmlsdGVyIHg9Jy01MCUnIHk9Jy01MCUnIHdpZHRoPScyMDAlJyBoZWlnaHQ9JzIwMCUnIGZpbHRlclVuaXRzPSdvYmplY3RCb3VuZGluZ0JveCcgaWQ9J2ZpbHRlci0xMCc+XG5cdCAgICAgICAgICAgIDxmZU9mZnNldCBkeD0nMCcgZHk9JzAnIGluPSdTb3VyY2VBbHBoYScgcmVzdWx0PSdzaGFkb3dPZmZzZXRPdXRlcjEnPjwvZmVPZmZzZXQ+XG5cdCAgICAgICAgICAgIDxmZUNvbG9yTWF0cml4IHZhbHVlcz0nMCAwIDAgMCAwICAgMCAwIDAgMCAwICAgMCAwIDAgMCAwICAwIDAgMCAwLjUgMCcgdHlwZT0nbWF0cml4JyBpbj0nc2hhZG93T2Zmc2V0T3V0ZXIxJz48L2ZlQ29sb3JNYXRyaXg+XG5cdCAgICAgICAgPC9maWx0ZXI+XG5cdCAgICAgICAgPGZpbHRlciB4PSctNTAlJyB5PSctNTAlJyB3aWR0aD0nMjAwJScgaGVpZ2h0PScyMDAlJyBmaWx0ZXJVbml0cz0nb2JqZWN0Qm91bmRpbmdCb3gnIGlkPSdmaWx0ZXItMTEnPlxuXHQgICAgICAgICAgICA8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPScwLjUnIGluPSdTb3VyY2VBbHBoYScgcmVzdWx0PSdzaGFkb3dCbHVySW5uZXIxJz48L2ZlR2F1c3NpYW5CbHVyPlxuXHQgICAgICAgICAgICA8ZmVPZmZzZXQgZHg9JzAnIGR5PScwJyBpbj0nc2hhZG93Qmx1cklubmVyMScgcmVzdWx0PSdzaGFkb3dPZmZzZXRJbm5lcjEnPjwvZmVPZmZzZXQ+XG5cdCAgICAgICAgICAgIDxmZUNvbXBvc2l0ZSBpbj0nc2hhZG93T2Zmc2V0SW5uZXIxJyBpbjI9J1NvdXJjZUFscGhhJyBvcGVyYXRvcj0nYXJpdGhtZXRpYycgazI9Jy0xJyBrMz0nMScgcmVzdWx0PSdzaGFkb3dJbm5lcklubmVyMSc+PC9mZUNvbXBvc2l0ZT5cblx0ICAgICAgICAgICAgPGZlQ29sb3JNYXRyaXggdmFsdWVzPScwIDAgMCAwIDAgICAwIDAgMCAwIDAgICAwIDAgMCAwIDAgIDAgMCAwIDAuMyAwJyB0eXBlPSdtYXRyaXgnIGluPSdzaGFkb3dJbm5lcklubmVyMSc+PC9mZUNvbG9yTWF0cml4PlxuXHQgICAgICAgIDwvZmlsdGVyPlxuXHQgICAgPC9kZWZzPlxuXHQgICAgPGcgaWQ9J1BhZ2UtMScgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCc+XG5cdCAgICAgICAgPGcgaWQ9J0hvbWUtU2NyZWVuLeKAoi1pUGhvbmUtU0UnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC0yNDQuMDAwMDAwLCAtMjcuMDAwMDAwKSc+XG5cdCAgICAgICAgICAgIDxnIGlkPSdIb21lLVNjcmVlbi3igKItaVBob25lLTZzLUNvcHknIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDAuMDAwMDAwLCAyNy4wMDAwMDApJz5cblx0ICAgICAgICAgICAgICAgIDxnIGlkPSdDYW1lcmEnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDI0NC4wMDAwMDAsIDAuMDAwMDAwKSc+XG5cdCAgICAgICAgICAgICAgICAgICAgPGcgaWQ9J2ljb24nPlxuXHQgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSdNMzkuMDgxNSwwIEM0NS4xMDUsMCA0OC4xMTYsMCA1MS4zNTg1LDEuMDI1IEM1NC44OTg1LDIuMzEzNSA1Ny42ODY1LDUuMTAxNSA1OC45NzUsOC42NDE1IEM2MCwxMS44ODM1IDYwLDE0Ljg5NTUgNjAsMjAuOTE4NSBMNjAsMzkuMDgxNSBDNjAsNDUuMTA1IDYwLDQ4LjExNiA1OC45NzUsNTEuMzU4NSBDNTcuNjg2NSw1NC44OTg1IDU0Ljg5ODUsNTcuNjg2NSA1MS4zNTg1LDU4Ljk3NDUgQzQ4LjExNiw2MCA0NS4xMDUsNjAgMzkuMDgxNSw2MCBMMjAuOTE4NSw2MCBDMTQuODk1LDYwIDExLjg4MzUsNjAgOC42NDE1LDU4Ljk3NDUgQzUuMTAxNSw1Ny42ODY1IDIuMzEzNSw1NC44OTg1IDEuMDI1LDUxLjM1ODUgQzAsNDguMTE2IDAsNDUuMTA1IDAsMzkuMDgxNSBMMCwyMC45MTg1IEMwLDE0Ljg5NTUgMCwxMS44ODM1IDEuMDI1LDguNjQxNSBDMi4zMTM1LDUuMTAxNSA1LjEwMTUsMi4zMTM1IDguNjQxNSwxLjAyNSBDMTEuODgzNSwwIDE0Ljg5NSwwIDIwLjkxODUsMCBMMzkuMDgxNSwwIFonIGlkPSdJY29uJyBmaWxsPSd1cmwoI2xpbmVhckdyYWRpZW50LTEpJz48L3BhdGg+XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSdDYW1lcmEnPlxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSBmaWxsPSdibGFjaycgZmlsbC1vcGFjaXR5PScxJyBmaWx0ZXI9J3VybCgjZmlsdGVyLTQpJyB4bGluazpocmVmPScjcGF0aC0zJz48L3VzZT5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgZmlsbD0ndXJsKCNsaW5lYXJHcmFkaWVudC0yKScgZmlsbC1ydWxlPSdldmVub2RkJyB4bGluazpocmVmPScjcGF0aC0zJz48L3VzZT5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgZmlsbD0nYmxhY2snIGZpbGwtb3BhY2l0eT0nMScgZmlsdGVyPSd1cmwoI2ZpbHRlci01KScgeGxpbms6aHJlZj0nI3BhdGgtMyc+PC91c2U+XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIDwvZz5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9J1BhdGgnPlxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSBmaWxsPSdibGFjaycgZmlsbC1vcGFjaXR5PScxJyBmaWx0ZXI9J3VybCgjZmlsdGVyLTcpJyB4bGluazpocmVmPScjcGF0aC02Jz48L3VzZT5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgZmlsbD0ndXJsKCNsaW5lYXJHcmFkaWVudC0yKScgZmlsbC1ydWxlPSdldmVub2RkJyB4bGluazpocmVmPScjcGF0aC02Jz48L3VzZT5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgZmlsbD0nYmxhY2snIGZpbGwtb3BhY2l0eT0nMScgZmlsdGVyPSd1cmwoI2ZpbHRlci04KScgeGxpbms6aHJlZj0nI3BhdGgtNic+PC91c2U+XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIDwvZz5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9J092YWwtMTYnPlxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSBmaWxsPSdibGFjaycgZmlsbC1vcGFjaXR5PScxJyBmaWx0ZXI9J3VybCgjZmlsdGVyLTEwKScgeGxpbms6aHJlZj0nI3BhdGgtOSc+PC91c2U+XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dXNlIGZpbGw9JyNGRkMyMDknIGZpbGwtcnVsZT0nZXZlbm9kZCcgeGxpbms6aHJlZj0nI3BhdGgtOSc+PC91c2U+XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dXNlIGZpbGw9J2JsYWNrJyBmaWxsLW9wYWNpdHk9JzEnIGZpbHRlcj0ndXJsKCNmaWx0ZXItMTEpJyB4bGluazpocmVmPScjcGF0aC05Jz48L3VzZT5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgPC9nPlxuXHQgICAgICAgICAgICAgICAgICAgIDwvZz5cblx0ICAgICAgICAgICAgICAgIDwvZz5cblx0ICAgICAgICAgICAgPC9nPlxuXHQgICAgICAgIDwvZz5cblx0ICAgIDwvZz5cblx0PC9zdmc+XCJcblx0d2VhdGhlcl9hcHA6XCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0PHN2ZyB3aWR0aD0nNjBweCcgaGVpZ2h0PSc2MHB4JyB2aWV3Qm94PScwIDAgNjAgNjAnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayc+XG5cdCAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDM5LjEgKDMxNzIwKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0ICAgIDx0aXRsZT5XZWFsdGhlcjwvdGl0bGU+XG5cdCAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0ICAgIDxkZWZzPlxuXHQgICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0nNTAlJyB5MT0nMCUnIHgyPSc1MCUnIHkyPScxMDAlJyBpZD0nbGluZWFyR3JhZGllbnQtMSc+XG5cdCAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9JyMxRDYyRjAnIG9mZnNldD0nMCUnPjwvc3RvcD5cblx0ICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0nIzE5RDVGRCcgb2Zmc2V0PScxMDAlJz48L3N0b3A+XG5cdCAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cblx0ICAgIDwvZGVmcz5cblx0ICAgIDxnIGlkPSdQYWdlLTEnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnPlxuXHQgICAgICAgIDxnIGlkPSdIb21lLVNjcmVlbi3igKItaVBob25lLVNFJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtMTYuMDAwMDAwLCAtMTE1LjAwMDAwMCknPlxuXHQgICAgICAgICAgICA8ZyBpZD0nSG9tZS1TY3JlZW4t4oCiLWlQaG9uZS02cy1Db3B5JyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgwLjAwMDAwMCwgMjcuMDAwMDAwKSc+XG5cdCAgICAgICAgICAgICAgICA8ZyBpZD0nV2VhbHRoZXInIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDE2LjAwMDAwMCwgODguMDAwMDAwKSc+XG5cdCAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0nTTM5LjA4MTUsMCBDNDUuMTA1LDAgNDguMTE2LDAgNTEuMzU4NSwxLjAyNSBDNTQuODk4NSwyLjMxMzUgNTcuNjg2NSw1LjEwMTUgNTguOTc1LDguNjQxNSBDNjAsMTEuODgzNSA2MCwxNC44OTU1IDYwLDIwLjkxODUgTDYwLDM5LjA4MTUgQzYwLDQ1LjEwNSA2MCw0OC4xMTYgNTguOTc1LDUxLjM1ODUgQzU3LjY4NjUsNTQuODk4NSA1NC44OTg1LDU3LjY4NjUgNTEuMzU4NSw1OC45NzQ1IEM0OC4xMTYsNjAgNDUuMTA1LDYwIDM5LjA4MTUsNjAgTDIwLjkxODUsNjAgQzE0Ljg5NSw2MCAxMS44ODM1LDYwIDguNjQxNSw1OC45NzQ1IEM1LjEwMTUsNTcuNjg2NSAyLjMxMzUsNTQuODk4NSAxLjAyNSw1MS4zNTg1IEMwLDQ4LjExNiAwLDQ1LjEwNSAwLDM5LjA4MTUgTDAsMjAuOTE4NSBDMCwxNC44OTU1IDAsMTEuODgzNSAxLjAyNSw4LjY0MTUgQzIuMzEzNSw1LjEwMTUgNS4xMDE1LDIuMzEzNSA4LjY0MTUsMS4wMjUgQzExLjg4MzUsMCAxNC44OTUsMCAyMC45MTg1LDAgTDM5LjA4MTUsMCBaJyBpZD0nQkcnIGZpbGw9J3VybCgjbGluZWFyR3JhZGllbnQtMSknPjwvcGF0aD5cblx0ICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGlkPSdTdW4nIGZpbGw9JyNGRkQ4MDAnIGN4PScxOS43NScgY3k9JzI0LjI1JyByPScxMS4yNSc+PC9jaXJjbGU+XG5cdCAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0nTTQxLjUsNDMuOTk2Njg3IEM0Ni40OTMwNjI1LDQzLjg2NDIwMzUgNTAuNSwzOS43NzUwMzcgNTAuNSwzNC43NSBDNTAuNSwyOS42NDEzNjYxIDQ2LjM1ODYzMzksMjUuNSA0MS4yNSwyNS41IEM0MS4wNTc0NTQ5LDI1LjUgNDAuODY2MjgzOCwyNS41MDU4ODMgNDAuNjc2NjU2NywyNS41MTc0NzkxIEMzOS4wMDQzMzUzLDIxLjQwMTg4ODkgMzQuOTY2MDUzOSwxOC41IDMwLjI1LDE4LjUgQzI0LjAzNjc5NjYsMTguNSAxOSwyMy41MzY3OTY2IDE5LDI5Ljc1IEMxOSwzMC4wMzkxOTE1IDE5LjAxMDkxMTcsMzAuMzI1ODM0NCAxOS4wMzIzNDYsMzAuNjA5NTM5NSBDMTUuODg1NjI0NCwzMS4xODI4MTU3IDEzLjUsMzMuOTM3ODExNiAxMy41LDM3LjI1IEMxMy41LDQwLjg5NDIyNDIgMTYuMzg3OTAwMiw0My44NjM5NDMxIDIwLDQzLjk5NTQ1NjIgTDIwLDQ0IEw0MS41LDQ0IEw0MS41LDQzLjk5NjY4NyBMNDEuNSw0My45OTY2ODcgWicgaWQ9J0Nsb3VkJyBmaWxsPScjRkZGRkZGJyBvcGFjaXR5PScwLjkwMDUzNjM4MSc+PC9wYXRoPlxuXHQgICAgICAgICAgICAgICAgPC9nPlxuXHQgICAgICAgICAgICA8L2c+XG5cdCAgICAgICAgPC9nPlxuXHQgICAgPC9nPlxuXHQ8L3N2Zz5cIlxuXHRjbG9ja19hcHA6XCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0PHN2ZyB3aWR0aD0nNjBweCcgaGVpZ2h0PSc2MHB4JyB2aWV3Qm94PScwIDAgNjAgNjAnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayc+XG5cdCAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDM5LjEgKDMxNzIwKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0ICAgIDx0aXRsZT5DbG9jazwvdGl0bGU+XG5cdCAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0ICAgIDxkZWZzPlxuXHQgICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0nNTAlJyB5MT0nMCUnIHgyPSc1MCUnIHkyPScxMDAlJyBpZD0nbGluZWFyR3JhZGllbnQtMSc+XG5cdCAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9JyNGMUYxRjEnIG9mZnNldD0nMCUnPjwvc3RvcD5cblx0ICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0nI0VFRUVFRScgb2Zmc2V0PScxMDAlJz48L3N0b3A+XG5cdCAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cblx0ICAgIDwvZGVmcz5cblx0ICAgIDxnIGlkPSdQYWdlLTEnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnPlxuXHQgICAgICAgIDxnIGlkPSdIb21lLVNjcmVlbi3igKItaVBob25lLVNFJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtOTIuMDAwMDAwLCAtMTE1LjAwMDAwMCknPlxuXHQgICAgICAgICAgICA8ZyBpZD0nSG9tZS1TY3JlZW4t4oCiLWlQaG9uZS02cy1Db3B5JyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgwLjAwMDAwMCwgMjcuMDAwMDAwKSc+XG5cdCAgICAgICAgICAgICAgICA8ZyBpZD0nQ2xvY2snIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDkyLjAwMDAwMCwgODguMDAwMDAwKSc+XG5cdCAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0nTTM5LjA4MTUsMCBDNDUuMTA1LDAgNDguMTE2LDAgNTEuMzU4NSwxLjAyNSBDNTQuODk4NSwyLjMxMzUgNTcuNjg2NSw1LjEwMTUgNTguOTc1LDguNjQxNSBDNjAsMTEuODgzNSA2MCwxNC44OTU1IDYwLDIwLjkxODUgTDYwLDM5LjA4MTUgQzYwLDQ1LjEwNSA2MCw0OC4xMTYgNTguOTc1LDUxLjM1ODUgQzU3LjY4NjUsNTQuODk4NSA1NC44OTg1LDU3LjY4NjUgNTEuMzU4NSw1OC45NzQ1IEM0OC4xMTYsNjAgNDUuMTA1LDYwIDM5LjA4MTUsNjAgTDIwLjkxODUsNjAgQzE0Ljg5NSw2MCAxMS44ODM1LDYwIDguNjQxNSw1OC45NzQ1IEM1LjEwMTUsNTcuNjg2NSAyLjMxMzUsNTQuODk4NSAxLjAyNSw1MS4zNTg1IEMwLDQ4LjExNiAwLDQ1LjEwNSAwLDM5LjA4MTUgTDAsMjAuOTE4NSBDMCwxNC44OTU1IDAsMTEuODgzNSAxLjAyNSw4LjY0MTUgQzIuMzEzNSw1LjEwMTUgNS4xMDE1LDIuMzEzNSA4LjY0MTUsMS4wMjUgQzExLjg4MzUsMCAxNC44OTUsMCAyMC45MTg1LDAgTDM5LjA4MTUsMCBaJyBpZD0nSWNvbicgZmlsbD0nIzFFMUUxRic+PC9wYXRoPlxuXHQgICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgaWQ9J092YWwtMTInIGZpbGw9J3VybCgjbGluZWFyR3JhZGllbnQtMSknIGN4PSczMCcgY3k9JzMwJyByPScyNic+PC9jaXJjbGU+XG5cdCAgICAgICAgICAgICAgICAgICAgPGcgaWQ9J0RpZ2l0cycgdHJhbnNmb3JtPSd0cmFuc2xhdGUoOC4wMDAwMDAsIDcuMDAwMDAwKScgZmlsbD0nIzYxNjE2MSc+XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9J00zMi40NjgsOCBMMzIuNDY4LDMuNzQ2IEwzMi4wNzgsMy43NDYgQzMyLjA0OTk5OTksMy45MDYwMDA4IDMxLjk5ODAwMDQsNC4wMzc5OTk0OCAzMS45MjIsNC4xNDIgQzMxLjg0NTk5OTYsNC4yNDYwMDA1MiAzMS43NTMwMDA1LDQuMzI3OTk5NyAzMS42NDMsNC4zODggQzMxLjUzMjk5OTQsNC40NDgwMDAzIDMxLjQxMDAwMDcsNC40ODg5OTk4OSAzMS4yNzQsNC41MTEgQzMxLjEzNzk5OTMsNC41MzMwMDAxMSAzMC45OTgwMDA3LDQuNTQ0IDMwLjg1NCw0LjU0NCBMMzAuODU0LDQuOTUyIEwzMS45NTgsNC45NTIgTDMxLjk1OCw4IEwzMi40NjgsOCBaJyBpZD0nMSc+PC9wYXRoPlxuXHQgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSdNMzguMDk2LDEyLjc1MiBMMzguNjA2LDEyLjc1MiBDMzguNjAyLDEyLjYyMzk5OTQgMzguNjE0OTk5OSwxMi40OTcwMDA2IDM4LjY0NSwxMi4zNzEgQzM4LjY3NTAwMDIsMTIuMjQ0OTk5NCAzOC43MjM5OTk3LDEyLjEzMjAwMDUgMzguNzkyLDEyLjAzMiBDMzguODYwMDAwMywxMS45MzE5OTk1IDM4Ljk0Njk5OTUsMTEuODUxMDAwMyAzOS4wNTMsMTEuNzg5IEMzOS4xNTkwMDA1LDExLjcyNjk5OTcgMzkuMjg1OTk5MywxMS42OTYgMzkuNDM0LDExLjY5NiBDMzkuNTQ2MDAwNiwxMS42OTYgMzkuNjUxOTk5NSwxMS43MTM5OTk4IDM5Ljc1MiwxMS43NSBDMzkuODUyMDAwNSwxMS43ODYwMDAyIDM5LjkzODk5OTYsMTEuODM3OTk5NyA0MC4wMTMsMTEuOTA2IEM0MC4wODcwMDA0LDExLjk3NDAwMDMgNDAuMTQ1OTk5OCwxMi4wNTQ5OTk1IDQwLjE5LDEyLjE0OSBDNDAuMjM0MDAwMiwxMi4yNDMwMDA1IDQwLjI1NiwxMi4zNDc5OTk0IDQwLjI1NiwxMi40NjQgQzQwLjI1NiwxMi42MTIwMDA3IDQwLjIzMzAwMDIsMTIuNzQxOTk5NCA0MC4xODcsMTIuODU0IEM0MC4xNDA5OTk4LDEyLjk2NjAwMDYgNDAuMDczMDAwNSwxMy4wNjk5OTk1IDM5Ljk4MywxMy4xNjYgQzM5Ljg5Mjk5OTYsMTMuMjYyMDAwNSAzOS43ODAwMDA3LDEzLjM1Njk5OTUgMzkuNjQ0LDEzLjQ1MSBDMzkuNTA3OTk5MywxMy41NDUwMDA1IDM5LjM1MDAwMDksMTMuNjQ3OTk5NCAzOS4xNywxMy43NiBDMzkuMDIxOTk5MywxMy44NDgwMDA0IDM4Ljg4MDAwMDcsMTMuOTQxOTk5NSAzOC43NDQsMTQuMDQyIEMzOC42MDc5OTkzLDE0LjE0MjAwMDUgMzguNDg2MDAwNSwxNC4yNTc5OTkzIDM4LjM3OCwxNC4zOSBDMzguMjY5OTk5NSwxNC41MjIwMDA3IDM4LjE4MTAwMDQsMTQuNjc2OTk5MSAzOC4xMTEsMTQuODU1IEMzOC4wNDA5OTk3LDE1LjAzMzAwMDkgMzcuOTk2MDAwMSwxNS4yNDc5OTg3IDM3Ljk3NiwxNS41IEw0MC43NTQsMTUuNSBMNDAuNzU0LDE1LjA1IEwzOC41NywxNS4wNSBDMzguNTk0MDAwMSwxNC45MTc5OTkzIDM4LjY0NDk5OTYsMTQuODAxMDAwNSAzOC43MjMsMTQuNjk5IEMzOC44MDEwMDA0LDE0LjU5Njk5OTUgMzguODk0OTk5NSwxNC41MDIwMDA0IDM5LjAwNSwxNC40MTQgQzM5LjExNTAwMDYsMTQuMzI1OTk5NiAzOS4yMzU5OTkzLDE0LjI0MzAwMDQgMzkuMzY4LDE0LjE2NSBDMzkuNTAwMDAwNywxNC4wODY5OTk2IDM5LjYzMTk5OTMsMTQuMDA4MDAwNCAzOS43NjQsMTMuOTI4IEMzOS44OTYwMDA3LDEzLjg0Mzk5OTYgNDAuMDIzOTk5NCwxMy43NTYwMDA1IDQwLjE0OCwxMy42NjQgQzQwLjI3MjAwMDYsMTMuNTcxOTk5NSA0MC4zODE5OTk1LDEzLjQ2OTAwMDYgNDAuNDc4LDEzLjM1NSBDNDAuNTc0MDAwNSwxMy4yNDA5OTk0IDQwLjY1MDk5OTcsMTMuMTEyMDAwNyA0MC43MDksMTIuOTY4IEM0MC43NjcwMDAzLDEyLjgyMzk5OTMgNDAuNzk2LDEyLjY1ODAwMDkgNDAuNzk2LDEyLjQ3IEM0MC43OTYsMTIuMjY5OTk5IDQwLjc2MTAwMDQsMTIuMDk0MDAwOCA0MC42OTEsMTEuOTQyIEM0MC42MjA5OTk3LDExLjc4OTk5OTIgNDAuNTI2MDAwNiwxMS42NjMwMDA1IDQwLjQwNiwxMS41NjEgQzQwLjI4NTk5OTQsMTEuNDU4OTk5NSA0MC4xNDUwMDA4LDExLjM4MTAwMDMgMzkuOTgzLDExLjMyNyBDMzkuODIwOTk5MiwxMS4yNzI5OTk3IDM5LjY0ODAwMDksMTEuMjQ2IDM5LjQ2NCwxMS4yNDYgQzM5LjIzOTk5ODksMTEuMjQ2IDM5LjA0MDAwMDksMTEuMjgzOTk5NiAzOC44NjQsMTEuMzYgQzM4LjY4Nzk5OTEsMTEuNDM2MDAwNCAzOC41NDEwMDA2LDExLjU0MDk5OTMgMzguNDIzLDExLjY3NSBDMzguMzA0OTk5NCwxMS44MDkwMDA3IDM4LjIxODAwMDMsMTEuOTY3OTk5MSAzOC4xNjIsMTIuMTUyIEMzOC4xMDU5OTk3LDEyLjMzNjAwMDkgMzguMDgzOTk5OSwxMi41MzU5OTg5IDM4LjA5NiwxMi43NTIgTDM4LjA5NiwxMi43NTIgWicgaWQ9JzInPjwvcGF0aD5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0nTTQyLjE0LDIyLjU3IEw0Mi4xNCwyMy4wMDIgQzQyLjIzNjAwMDUsMjIuOTg5OTk5OSA0Mi4zMzc5OTk1LDIyLjk4NCA0Mi40NDYsMjIuOTg0IEM0Mi41NzQwMDA2LDIyLjk4NCA0Mi42OTI5OTk1LDIzLjAwMDk5OTggNDIuODAzLDIzLjAzNSBDNDIuOTEzMDAwNiwyMy4wNjkwMDAyIDQzLjAwNzk5OTYsMjMuMTIwOTk5NyA0My4wODgsMjMuMTkxIEM0My4xNjgwMDA0LDIzLjI2MTAwMDQgNDMuMjMxOTk5OCwyMy4zNDY5OTk1IDQzLjI4LDIzLjQ0OSBDNDMuMzI4MDAwMiwyMy41NTEwMDA1IDQzLjM1MiwyMy42Njc5OTkzIDQzLjM1MiwyMy44IEM0My4zNTIsMjMuOTI4MDAwNiA0My4zMjcwMDAzLDI0LjA0Mjk5OTUgNDMuMjc3LDI0LjE0NSBDNDMuMjI2OTk5OCwyNC4yNDcwMDA1IDQzLjE2MDAwMDQsMjQuMzMyOTk5NyA0My4wNzYsMjQuNDAzIEM0Mi45OTE5OTk2LDI0LjQ3MzAwMDQgNDIuODk0MDAwNiwyNC41MjY5OTk4IDQyLjc4MiwyNC41NjUgQzQyLjY2OTk5OTQsMjQuNjAzMDAwMiA0Mi41NTIwMDA2LDI0LjYyMiA0Mi40MjgsMjQuNjIyIEM0Mi4xMzU5OTg1LDI0LjYyMiA0MS45MTQwMDA4LDI0LjUzNTAwMDkgNDEuNzYyLDI0LjM2MSBDNDEuNjA5OTk5MiwyNC4xODY5OTkxIDQxLjUzLDIzLjk2MjAwMTQgNDEuNTIyLDIzLjY4NiBMNDEuMDEyLDIzLjY4NiBDNDEuMDA4LDIzLjkwNjAwMTEgNDEuMDM4OTk5NywyNC4xMDE5OTkxIDQxLjEwNSwyNC4yNzQgQzQxLjE3MTAwMDMsMjQuNDQ2MDAwOSA0MS4yNjU5OTk0LDI0LjU5MDk5OTQgNDEuMzksMjQuNzA5IEM0MS41MTQwMDA2LDI0LjgyNzAwMDYgNDEuNjYzOTk5MSwyNC45MTU5OTk3IDQxLjg0LDI0Ljk3NiBDNDIuMDE2MDAwOSwyNS4wMzYwMDAzIDQyLjIxMTk5ODksMjUuMDY2IDQyLjQyOCwyNS4wNjYgQzQyLjYyODAwMSwyNS4wNjYgNDIuODE2OTk5MSwyNS4wMzkwMDAzIDQyLjk5NSwyNC45ODUgQzQzLjE3MzAwMDksMjQuOTMwOTk5NyA0My4zMjc5OTkzLDI0Ljg1MDAwMDUgNDMuNDYsMjQuNzQyIEM0My41OTIwMDA3LDI0LjYzMzk5OTUgNDMuNjk2OTk5NiwyNC40OTkwMDA4IDQzLjc3NSwyNC4zMzcgQzQzLjg1MzAwMDQsMjQuMTc0OTk5MiA0My44OTIsMjMuOTg4MDAxMSA0My44OTIsMjMuNzc2IEM0My44OTIsMjMuNTE5OTk4NyA0My44MjkwMDA2LDIzLjI5ODAwMDkgNDMuNzAzLDIzLjExIEM0My41NzY5OTk0LDIyLjkyMTk5OTEgNDMuMzg0MDAxMywyMi44MDAwMDAzIDQzLjEyNCwyMi43NDQgTDQzLjEyNCwyMi43MzIgQzQzLjI5MjAwMDgsMjIuNjU1OTk5NiA0My40MzE5OTk0LDIyLjU0NDAwMDcgNDMuNTQ0LDIyLjM5NiBDNDMuNjU2MDAwNiwyMi4yNDc5OTkzIDQzLjcxMiwyMi4wNzgwMDEgNDMuNzEyLDIxLjg4NiBDNDMuNzEyLDIxLjY4OTk5OSA0My42NzkwMDAzLDIxLjUyMDAwMDcgNDMuNjEzLDIxLjM3NiBDNDMuNTQ2OTk5NywyMS4yMzE5OTkzIDQzLjQ1NjAwMDYsMjEuMTE0MDAwNSA0My4zNCwyMS4wMjIgQzQzLjIyMzk5OTQsMjAuOTI5OTk5NSA0My4wODcwMDA4LDIwLjg2MTAwMDIgNDIuOTI5LDIwLjgxNSBDNDIuNzcwOTk5MiwyMC43Njg5OTk4IDQyLjYwMDAwMDksMjAuNzQ2IDQyLjQxNiwyMC43NDYgQzQyLjIwMzk5ODksMjAuNzQ2IDQyLjAxNzAwMDgsMjAuNzc5OTk5NyA0MS44NTUsMjAuODQ4IEM0MS42OTI5OTkyLDIwLjkxNjAwMDMgNDEuNTU4MDAwNSwyMS4wMDk5OTk0IDQxLjQ1LDIxLjEzIEM0MS4zNDE5OTk1LDIxLjI1MDAwMDYgNDEuMjU5MDAwMywyMS4zOTM5OTkyIDQxLjIwMSwyMS41NjIgQzQxLjE0Mjk5OTcsMjEuNzMwMDAwOCA0MS4xMSwyMS45MTU5OTkgNDEuMTAyLDIyLjEyIEw0MS42MTIsMjIuMTIgQzQxLjYxMiwyMS45OTU5OTk0IDQxLjYyNzk5OTgsMjEuODc4MDAwNiA0MS42NiwyMS43NjYgQzQxLjY5MjAwMDIsMjEuNjUzOTk5NCA0MS43NDA5OTk3LDIxLjU1NjAwMDQgNDEuODA3LDIxLjQ3MiBDNDEuODczMDAwMywyMS4zODc5OTk2IDQxLjk1Njk5OTUsMjEuMzIxMDAwMyA0Mi4wNTksMjEuMjcxIEM0Mi4xNjEwMDA1LDIxLjIyMDk5OTggNDIuMjc5OTk5MywyMS4xOTYgNDIuNDE2LDIxLjE5NiBDNDIuNjMyMDAxMSwyMS4xOTYgNDIuODExOTk5MywyMS4yNTI5OTk0IDQyLjk1NiwyMS4zNjcgQzQzLjEwMDAwMDcsMjEuNDgxMDAwNiA0My4xNzIsMjEuNjUxOTk4OSA0My4xNzIsMjEuODggQzQzLjE3MiwyMS45OTIwMDA2IDQzLjE1MDAwMDIsMjIuMDkxOTk5NiA0My4xMDYsMjIuMTggQzQzLjA2MTk5OTgsMjIuMjY4MDAwNCA0My4wMDMwMDA0LDIyLjM0MDk5OTcgNDIuOTI5LDIyLjM5OSBDNDIuODU0OTk5NiwyMi40NTcwMDAzIDQyLjc2OTAwMDUsMjIuNTAwOTk5OSA0Mi42NzEsMjIuNTMxIEM0Mi41NzI5OTk1LDIyLjU2MTAwMDIgNDIuNDcwMDAwNSwyMi41NzYgNDIuMzYyLDIyLjU3NiBMNDIuMjU0LDIyLjU3NiBMNDIuMTk0LDIyLjU3NiBDNDIuMTc3OTk5OSwyMi41NzYgNDIuMTYwMDAwMSwyMi41NzQgNDIuMTQsMjIuNTcgTDQyLjE0LDIyLjU3IFonIGlkPSczJz48L3BhdGg+XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9J000MC4zNjYsMzQuMDU0IEwzOC45MzgsMzQuMDU0IEw0MC4zNTQsMzEuOTcyIEw0MC4zNjYsMzEuOTcyIEw0MC4zNjYsMzQuMDU0IFogTTQwLjg0NiwzNC4wNTQgTDQwLjg0NiwzMS4yNDYgTDQwLjQzOCwzMS4yNDYgTDM4LjUsMzQuMDEyIEwzOC41LDM0LjUwNCBMNDAuMzY2LDM0LjUwNCBMNDAuMzY2LDM1LjUgTDQwLjg0NiwzNS41IEw0MC44NDYsMzQuNTA0IEw0MS40MjIsMzQuNTA0IEw0MS40MjIsMzQuMDU0IEw0MC44NDYsMzQuMDU0IFonIGlkPSc0Jz48L3BhdGg+XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9J00zMy42NTIsMzguNzY4IEwzMy42NTIsMzguMzE4IEwzMS41NTIsMzguMzE4IEwzMS4xNTYsNDAuNTI2IEwzMS41OTQsNDAuNTUgQzMxLjY5NDAwMDUsNDAuNDI5OTk5NCAzMS44MDg5OTkzLDQwLjMzMzAwMDQgMzEuOTM5LDQwLjI1OSBDMzIuMDY5MDAwNiw0MC4xODQ5OTk2IDMyLjIxNzk5OTIsNDAuMTQ4IDMyLjM4Niw0MC4xNDggQzMyLjUzMDAwMDcsNDAuMTQ4IDMyLjY2MDk5OTQsNDAuMTcxOTk5OCAzMi43NzksNDAuMjIgQzMyLjg5NzAwMDYsNDAuMjY4MDAwMiAzMi45OTc5OTk2LDQwLjMzNDk5OTYgMzMuMDgyLDQwLjQyMSBDMzMuMTY2MDAwNCw0MC41MDcwMDA0IDMzLjIzMDk5OTgsNDAuNjA4OTk5NCAzMy4yNzcsNDAuNzI3IEMzMy4zMjMwMDAyLDQwLjg0NTAwMDYgMzMuMzQ2LDQwLjk3Mzk5OTMgMzMuMzQ2LDQxLjExNCBDMzMuMzQ2LDQxLjI4MjAwMDggMzMuMzIyMDAwMiw0MS40Mjg5OTk0IDMzLjI3NCw0MS41NTUgQzMzLjIyNTk5OTgsNDEuNjgxMDAwNiAzMy4xNjEwMDA0LDQxLjc4NTk5OTYgMzMuMDc5LDQxLjg3IEMzMi45OTY5OTk2LDQxLjk1NDAwMDQgMzIuOTAxMDAwNSw0Mi4wMTY5OTk4IDMyLjc5MSw0Mi4wNTkgQzMyLjY4MDk5OTQsNDIuMTAxMDAwMiAzMi41NjYwMDA2LDQyLjEyMiAzMi40NDYsNDIuMTIyIEMzMi4zMTc5OTk0LDQyLjEyMiAzMi4yMDEwMDA1LDQyLjEwMzAwMDIgMzIuMDk1LDQyLjA2NSBDMzEuOTg4OTk5NSw0Mi4wMjY5OTk4IDMxLjg5NzAwMDQsNDEuOTczMDAwNCAzMS44MTksNDEuOTAzIEMzMS43NDA5OTk2LDQxLjgzMjk5OTcgMzEuNjc5MDAwMiw0MS43NTEwMDA1IDMxLjYzMyw0MS42NTcgQzMxLjU4Njk5OTgsNDEuNTYyOTk5NSAzMS41Niw0MS40NjIwMDA1IDMxLjU1Miw0MS4zNTQgTDMxLjA0Miw0MS4zNTQgQzMxLjA0Niw0MS41NDYwMDEgMzEuMDgzOTk5Niw0MS43MTc5OTkyIDMxLjE1Niw0MS44NyBDMzEuMjI4MDAwNCw0Mi4wMjIwMDA4IDMxLjMyNTk5OTQsNDIuMTQ4OTk5NSAzMS40NSw0Mi4yNTEgQzMxLjU3NDAwMDYsNDIuMzUzMDAwNSAzMS43MTY5OTkyLDQyLjQzMDk5OTcgMzEuODc5LDQyLjQ4NSBDMzIuMDQxMDAwOCw0Mi41MzkwMDAzIDMyLjIxMzk5OTEsNDIuNTY2IDMyLjM5OCw0Mi41NjYgQzMyLjY0NjAwMTIsNDIuNTY2IDMyLjg2Mjk5OTEsNDIuNTI3MDAwNCAzMy4wNDksNDIuNDQ5IEMzMy4yMzUwMDA5LDQyLjM3MDk5OTYgMzMuMzg5OTk5NCw0Mi4yNjYwMDA3IDMzLjUxNCw0Mi4xMzQgQzMzLjYzODAwMDYsNDIuMDAxOTk5MyAzMy43MzA5OTk3LDQxLjg1MTAwMDkgMzMuNzkzLDQxLjY4MSBDMzMuODU1MDAwMyw0MS41MTA5OTkyIDMzLjg4Niw0MS4zMzYwMDA5IDMzLjg4Niw0MS4xNTYgQzMzLjg4Niw0MC45MTE5OTg4IDMzLjg1MDAwMDQsNDAuNjk5MDAwOSAzMy43NzgsNDAuNTE3IEMzMy43MDU5OTk2LDQwLjMzNDk5OTEgMzMuNjA4MDAwNiw0MC4xODMwMDA2IDMzLjQ4NCw0MC4wNjEgQzMzLjM1OTk5OTQsMzkuOTM4OTk5NCAzMy4yMTQwMDA4LDM5Ljg0ODAwMDMgMzMuMDQ2LDM5Ljc4OCBDMzIuODc3OTk5MiwzOS43Mjc5OTk3IDMyLjcwMDAwMDksMzkuNjk4IDMyLjUxMiwzOS42OTggQzMyLjM2Nzk5OTMsMzkuNjk4IDMyLjIyMzAwMDcsMzkuNzIyOTk5OCAzMi4wNzcsMzkuNzczIEMzMS45MzA5OTkzLDM5LjgyMzAwMDMgMzEuODEyMDAwNSwzOS44OTk5OTk1IDMxLjcyLDQwLjAwNCBMMzEuNzA4LDM5Ljk5MiBMMzEuOTM2LDM4Ljc2OCBMMzMuNjUyLDM4Ljc2OCBaJyBpZD0nNSc+PC9wYXRoPlxuXHQgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSdNMjIuODE2LDQyLjMzMiBMMjMuMzI2LDQyLjMzMiBDMjMuMjkzOTk5OCw0MS45Nzk5OTgyIDIzLjE3NDAwMSw0MS43MTEwMDA5IDIyLjk2Niw0MS41MjUgQzIyLjc1Nzk5OSw0MS4zMzg5OTkxIDIyLjQ3ODAwMTgsNDEuMjQ2IDIyLjEyNiw0MS4yNDYgQzIxLjgyMTk5ODUsNDEuMjQ2IDIxLjU3MDAwMSw0MS4zMDk5OTk0IDIxLjM3LDQxLjQzOCBDMjEuMTY5OTk5LDQxLjU2NjAwMDYgMjEuMDEwMDAwNiw0MS43MzU5OTg5IDIwLjg5LDQxLjk0OCBDMjAuNzY5OTk5NCw0Mi4xNjAwMDExIDIwLjY4NTAwMDIsNDIuNDAyOTk4NiAyMC42MzUsNDIuNjc3IEMyMC41ODQ5OTk3LDQyLjk1MTAwMTQgMjAuNTYsNDMuMjMzOTk4NSAyMC41Niw0My41MjYgQzIwLjU2LDQzLjc1MDAwMTEgMjAuNTc2OTk5OCw0My45ODE5OTg4IDIwLjYxMSw0NC4yMjIgQzIwLjY0NTAwMDIsNDQuNDYyMDAxMiAyMC43MTM5OTk1LDQ0LjY4MTk5OSAyMC44MTgsNDQuODgyIEMyMC45MjIwMDA1LDQ1LjA4MjAwMSAyMS4wNjk5OTksNDUuMjQ1OTk5NCAyMS4yNjIsNDUuMzc0IEMyMS40NTQwMDEsNDUuNTAyMDAwNiAyMS43MDc5OTg0LDQ1LjU2NiAyMi4wMjQsNDUuNTY2IEMyMi4yOTIwMDEzLDQ1LjU2NiAyMi41MTY5OTkxLDQ1LjUyMTAwMDUgMjIuNjk5LDQ1LjQzMSBDMjIuODgxMDAwOSw0NS4zNDA5OTk2IDIzLjAyNjk5OTQsNDUuMjI3MDAwNyAyMy4xMzcsNDUuMDg5IEMyMy4yNDcwMDA1LDQ0Ljk1MDk5OTMgMjMuMzI1OTk5OCw0NC43OTgwMDA4IDIzLjM3NCw0NC42MyBDMjMuNDIyMDAwMiw0NC40NjE5OTkyIDIzLjQ0Niw0NC4zMDAwMDA4IDIzLjQ0Niw0NC4xNDQgQzIzLjQ0Niw0My45NDc5OTkgMjMuNDE2MDAwMyw0My43NjYwMDA4IDIzLjM1Niw0My41OTggQzIzLjI5NTk5OTcsNDMuNDI5OTk5MiAyMy4yMTEwMDA1LDQzLjI4NDAwMDYgMjMuMTAxLDQzLjE2IEMyMi45OTA5OTk0LDQzLjAzNTk5OTQgMjIuODU1MDAwOCw0Mi45MzkwMDA0IDIyLjY5Myw0Mi44NjkgQzIyLjUzMDk5OTIsNDIuNzk4OTk5NyAyMi4zNDgwMDEsNDIuNzY0IDIyLjE0NCw0Mi43NjQgQzIxLjkxMTk5ODgsNDIuNzY0IDIxLjcwNzAwMDksNDIuODA3OTk5NiAyMS41MjksNDIuODk2IEMyMS4zNTA5OTkxLDQyLjk4NDAwMDQgMjEuMjAyMDAwNiw0My4xMjU5OTkgMjEuMDgyLDQzLjMyMiBMMjEuMDcsNDMuMzEgQzIxLjA3NCw0My4xNDU5OTkyIDIxLjA4OTk5OTksNDIuOTcwMDAwOSAyMS4xMTgsNDIuNzgyIEMyMS4xNDYwMDAxLDQyLjU5Mzk5OTEgMjEuMTk2OTk5Niw0Mi40MTkwMDA4IDIxLjI3MSw0Mi4yNTcgQzIxLjM0NTAwMDQsNDIuMDk0OTk5MiAyMS40NDc5OTkzLDQxLjk2MTAwMDUgMjEuNTgsNDEuODU1IEMyMS43MTIwMDA3LDQxLjc0ODk5OTUgMjEuODg1OTk4OSw0MS42OTYgMjIuMTAyLDQxLjY5NiBDMjIuMzA2MDAxLDQxLjY5NiAyMi40Njk5OTk0LDQxLjc1Mzk5OTQgMjIuNTk0LDQxLjg3IEMyMi43MTgwMDA2LDQxLjk4NjAwMDYgMjIuNzkxOTk5OSw0Mi4xMzk5OTkgMjIuODE2LDQyLjMzMiBMMjIuODE2LDQyLjMzMiBaIE0yMi4wNDgsNDMuMjE0IEMyMi4xOTIwMDA3LDQzLjIxNCAyMi4zMTc5OTk1LDQzLjIzOTk5OTcgMjIuNDI2LDQzLjI5MiBDMjIuNTM0MDAwNSw0My4zNDQwMDAzIDIyLjYyMzk5OTYsNDMuNDEyOTk5NiAyMi42OTYsNDMuNDk5IEMyMi43NjgwMDA0LDQzLjU4NTAwMDQgMjIuODIwOTk5OCw0My42ODY5OTk0IDIyLjg1NSw0My44MDUgQzIyLjg4OTAwMDIsNDMuOTIzMDAwNiAyMi45MDYsNDQuMDQ3OTk5MyAyMi45MDYsNDQuMTggQzIyLjkwNiw0NC4zMDQwMDA2IDIyLjg4NzAwMDIsNDQuNDIyOTk5NCAyMi44NDksNDQuNTM3IEMyMi44MTA5OTk4LDQ0LjY1MTAwMDYgMjIuNzU2MDAwNCw0NC43NTE5OTk2IDIyLjY4NCw0NC44NCBDMjIuNjExOTk5Niw0NC45MjgwMDA0IDIyLjUyMzAwMDUsNDQuOTk2OTk5OCAyMi40MTcsNDUuMDQ3IEMyMi4zMTA5OTk1LDQ1LjA5NzAwMDMgMjIuMTg4MDAwNyw0NS4xMjIgMjIuMDQ4LDQ1LjEyMiBDMjEuOTA3OTk5Myw0NS4xMjIgMjEuNzgzMDAwNSw0NS4wOTcwMDAzIDIxLjY3Myw0NS4wNDcgQzIxLjU2Mjk5OTQsNDQuOTk2OTk5OCAyMS40NzEwMDA0LDQ0LjkzMDAwMDQgMjEuMzk3LDQ0Ljg0NiBDMjEuMzIyOTk5Niw0NC43NjE5OTk2IDIxLjI2NjAwMDIsNDQuNjYyMDAwNiAyMS4yMjYsNDQuNTQ2IEMyMS4xODU5OTk4LDQ0LjQyOTk5OTQgMjEuMTY2LDQ0LjMwNjAwMDcgMjEuMTY2LDQ0LjE3NCBDMjEuMTY2LDQ0LjA0MTk5OTMgMjEuMTg0OTk5OCw0My45MTcwMDA2IDIxLjIyMyw0My43OTkgQzIxLjI2MTAwMDIsNDMuNjgwOTk5NCAyMS4zMTc5OTk2LDQzLjU3OTAwMDQgMjEuMzk0LDQzLjQ5MyBDMjEuNDcwMDAwNCw0My40MDY5OTk2IDIxLjU2MTk5OTUsNDMuMzM5MDAwMyAyMS42Nyw0My4yODkgQzIxLjc3ODAwMDUsNDMuMjM4OTk5OCAyMS45MDM5OTkzLDQzLjIxNCAyMi4wNDgsNDMuMjE0IEwyMi4wNDgsNDMuMjE0IFonIGlkPSc2Jz48L3BhdGg+XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9J00xMi44ODYsMzguNzU2IEwxMi44ODYsMzguMzE4IEwxMC4xMzIsMzguMzE4IEwxMC4xMzIsMzguNzk4IEwxMi4zNjQsMzguNzk4IEMxMi4xMzk5OTg5LDM5LjAzNDAwMTIgMTEuOTMxMDAxLDM5LjI5MTk5ODYgMTEuNzM3LDM5LjU3MiBDMTEuNTQyOTk5LDM5Ljg1MjAwMTQgMTEuMzcyMDAwNyw0MC4xNDg5OTg0IDExLjIyNCw0MC40NjMgQzExLjA3NTk5OTMsNDAuNzc3MDAxNiAxMC45NTUwMDA1LDQxLjEwNDk5ODMgMTAuODYxLDQxLjQ0NyBDMTAuNzY2OTk5NSw0MS43ODkwMDE3IDEwLjcwODAwMDEsNDIuMTM5OTk4MiAxMC42ODQsNDIuNSBMMTEuMjU0LDQyLjUgQzExLjI3NDAwMDEsNDIuMTY3OTk4MyAxMS4zMjk5OTk1LDQxLjgyNjAwMTggMTEuNDIyLDQxLjQ3NCBDMTEuNTE0MDAwNSw0MS4xMjE5OTgyIDExLjYzMjk5OTMsNDAuNzgwMDAxNyAxMS43NzksNDAuNDQ4IEMxMS45MjUwMDA3LDQwLjExNTk5ODMgMTIuMDkxOTk5MSwzOS44MDQwMDE1IDEyLjI4LDM5LjUxMiBDMTIuNDY4MDAwOSwzOS4yMTk5OTg1IDEyLjY2OTk5ODksMzguOTY4MDAxMSAxMi44ODYsMzguNzU2IEwxMi44ODYsMzguNzU2IFonIGlkPSc3Jz48L3BhdGg+XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9J00zLjI2MiwzMi4zNSBDMy4yNjIsMzIuMjQxOTk5NSAzLjI4MTk5OTgsMzIuMTQ4MDAwNCAzLjMyMiwzMi4wNjggQzMuMzYyMDAwMiwzMS45ODc5OTk2IDMuNDE0OTk5NjcsMzEuOTIwMDAwMyAzLjQ4MSwzMS44NjQgQzMuNTQ3MDAwMzMsMzEuODA3OTk5NyAzLjYyNTk5OTU0LDMxLjc2NjAwMDEgMy43MTgsMzEuNzM4IEMzLjgxMDAwMDQ2LDMxLjcwOTk5OTkgMy45MDU5OTk1LDMxLjY5NiA0LjAwNiwzMS42OTYgQzQuMjE0MDAxMDQsMzEuNjk2IDQuMzg0OTk5MzMsMzEuNzUwOTk5NSA0LjUxOSwzMS44NjEgQzQuNjUzMDAwNjcsMzEuOTcxMDAwNiA0LjcyLDMyLjEzMzk5ODkgNC43MiwzMi4zNSBDNC43MiwzMi41NjYwMDExIDQuNjU0MDAwNjYsMzIuNzMzOTk5NCA0LjUyMiwzMi44NTQgQzQuMzg5OTk5MzQsMzIuOTc0MDAwNiA0LjIyMjAwMTAyLDMzLjAzNCA0LjAxOCwzMy4wMzQgQzMuOTEzOTk5NDgsMzMuMDM0IDMuODE2MDAwNDYsMzMuMDIwMDAwMSAzLjcyNCwzMi45OTIgQzMuNjMxOTk5NTQsMzIuOTYzOTk5OSAzLjU1MjAwMDM0LDMyLjkyMjAwMDMgMy40ODQsMzIuODY2IEMzLjQxNTk5OTY2LDMyLjgwOTk5OTcgMy4zNjIwMDAyLDMyLjczOTAwMDQgMy4zMjIsMzIuNjUzIEMzLjI4MTk5OTgsMzIuNTY2OTk5NiAzLjI2MiwzMi40NjYwMDA2IDMuMjYyLDMyLjM1IEwzLjI2MiwzMi4zNSBaIE0yLjcyMiwzMi4zMzIgQzIuNzIyLDMyLjUyNDAwMSAyLjc3NTk5OTQ2LDMyLjcwMDk5OTIgMi44ODQsMzIuODYzIEMyLjk5MjAwMDU0LDMzLjAyNTAwMDggMy4xMzU5OTkxLDMzLjE0MTk5OTYgMy4zMTYsMzMuMjE0IEMzLjA3NTk5ODgsMzMuMjk4MDAwNCAyLjg5MjAwMDY0LDMzLjQzMjk5OTEgMi43NjQsMzMuNjE5IEMyLjYzNTk5OTM2LDMzLjgwNTAwMDkgMi41NzIsMzQuMDIzOTk4NyAyLjU3MiwzNC4yNzYgQzIuNTcyLDM0LjQ5MjAwMTEgMi42MDg5OTk2MywzNC42ODA5OTkyIDIuNjgzLDM0Ljg0MyBDMi43NTcwMDAzNywzNS4wMDUwMDA4IDIuODU4OTk5MzUsMzUuMTM5OTk5NSAyLjk4OSwzNS4yNDggQzMuMTE5MDAwNjUsMzUuMzU2MDAwNSAzLjI3MTk5OTEyLDM1LjQzNTk5OTcgMy40NDgsMzUuNDg4IEMzLjYyNDAwMDg4LDM1LjU0MDAwMDMgMy44MTM5OTg5OCwzNS41NjYgNC4wMTgsMzUuNTY2IEM0LjIxNDAwMDk4LDM1LjU2NiA0LjM5Nzk5OTE0LDM1LjUzODAwMDMgNC41NywzNS40ODIgQzQuNzQyMDAwODYsMzUuNDI1OTk5NyA0Ljg5MDk5OTM3LDM1LjM0MzAwMDYgNS4wMTcsMzUuMjMzIEM1LjE0MzAwMDYzLDM1LjEyMjk5OTUgNS4yNDI5OTk2MywzNC45ODgwMDA4IDUuMzE3LDM0LjgyOCBDNS4zOTEwMDAzNywzNC42Njc5OTkyIDUuNDI4LDM0LjQ4NDAwMSA1LjQyOCwzNC4yNzYgQzUuNDI4LDM0LjAxMTk5ODcgNS4zNjYwMDA2MiwzMy43ODkwMDA5IDUuMjQyLDMzLjYwNyBDNS4xMTc5OTkzOCwzMy40MjQ5OTkxIDQuOTI4MDAxMjgsMzMuMjk0MDAwNCA0LjY3MiwzMy4yMTQgQzQuODUyMDAwOSwzMy4xMzM5OTk2IDQuOTk0OTk5NDcsMzMuMDE1MDAwOCA1LjEwMSwzMi44NTcgQzUuMjA3MDAwNTMsMzIuNjk4OTk5MiA1LjI2LDMyLjUyNDAwMSA1LjI2LDMyLjMzMiBDNS4yNiwzMi4xOTU5OTkzIDUuMjM2MDAwMjQsMzIuMDYzMDAwNyA1LjE4OCwzMS45MzMgQzUuMTM5OTk5NzYsMzEuODAyOTk5NCA1LjA2NTAwMDUxLDMxLjY4NzAwMDUgNC45NjMsMzEuNTg1IEM0Ljg2MDk5OTQ5LDMxLjQ4Mjk5OTUgNC43MjgwMDA4MiwzMS40MDEwMDAzIDQuNTY0LDMxLjMzOSBDNC4zOTk5OTkxOCwzMS4yNzY5OTk3IDQuMjAyMDAxMTYsMzEuMjQ2IDMuOTcsMzEuMjQ2IEMzLjgwNTk5OTE4LDMxLjI0NiAzLjY0OTAwMDc1LDMxLjI2OTk5OTggMy40OTksMzEuMzE4IEMzLjM0ODk5OTI1LDMxLjM2NjAwMDIgMy4yMTYwMDA1OCwzMS40MzU5OTk1IDMuMSwzMS41MjggQzIuOTgzOTk5NDIsMzEuNjIwMDAwNSAyLjg5MjAwMDM0LDMxLjczMjk5OTMgMi44MjQsMzEuODY3IEMyLjc1NTk5OTY2LDMyLjAwMTAwMDcgMi43MjIsMzIuMTU1OTk5MSAyLjcyMiwzMi4zMzIgTDIuNzIyLDMyLjMzMiBaIE0zLjExMiwzNC4zIEMzLjExMiwzNC4xNzU5OTk0IDMuMTM0OTk5NzcsMzQuMDY0MDAwNSAzLjE4MSwzMy45NjQgQzMuMjI3MDAwMjMsMzMuODYzOTk5NSAzLjI5MDk5OTU5LDMzLjc3ODAwMDQgMy4zNzMsMzMuNzA2IEMzLjQ1NTAwMDQxLDMzLjYzMzk5OTYgMy41NTA5OTk0NSwzMy41NzkwMDAyIDMuNjYxLDMzLjU0MSBDMy43NzEwMDA1NSwzMy41MDI5OTk4IDMuODg3OTk5MzgsMzMuNDg0IDQuMDEyLDMzLjQ4NCBDNC4xMzIwMDA2LDMzLjQ4NCA0LjI0NDk5OTQ3LDMzLjUwNDk5OTggNC4zNTEsMzMuNTQ3IEM0LjQ1NzAwMDUzLDMzLjU4OTAwMDIgNC41NDk5OTk2LDMzLjY0NTk5OTYgNC42MywzMy43MTggQzQuNzEwMDAwNCwzMy43OTAwMDA0IDQuNzcyOTk5NzcsMzMuODc0OTk5NSA0LjgxOSwzMy45NzMgQzQuODY1MDAwMjMsMzQuMDcxMDAwNSA0Ljg4OCwzNC4xNzc5OTk0IDQuODg4LDM0LjI5NCBDNC44ODgsMzQuNDE0MDAwNiA0Ljg2NzAwMDIxLDM0LjUyMzk5OTUgNC44MjUsMzQuNjI0IEM0Ljc4Mjk5OTc5LDM0LjcyNDAwMDUgNC43MjMwMDAzOSwzNC44MTA5OTk2IDQuNjQ1LDM0Ljg4NSBDNC41NjY5OTk2MSwzNC45NTkwMDA0IDQuNDc1MDAwNTMsMzUuMDE2OTk5OCA0LjM2OSwzNS4wNTkgQzQuMjYyOTk5NDcsMzUuMTAxMDAwMiA0LjE0NjAwMDY0LDM1LjEyMiA0LjAxOCwzNS4xMjIgQzMuNzUzOTk4NjgsMzUuMTIyIDMuNTM3MDAwODUsMzUuMDQ5MDAwNyAzLjM2NywzNC45MDMgQzMuMTk2OTk5MTUsMzQuNzU2OTk5MyAzLjExMiwzNC41NTYwMDEzIDMuMTEyLDM0LjMgTDMuMTEyLDM0LjMgWicgaWQ9JzgnPjwvcGF0aD5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0nTTEuMTM2LDIzLjk3NCBMMC42MjYsMjMuOTc0IEMwLjY1ODAwMDE2LDI0LjM0MjAwMTggMC43OTE5OTg4MiwyNC42MTU5OTkxIDEuMDI4LDI0Ljc5NiBDMS4yNjQwMDExOCwyNC45NzYwMDA5IDEuNTU5OTk4MjIsMjUuMDY2IDEuOTE2LDI1LjA2NiBDMi40MzIwMDI1OCwyNS4wNjYgMi44MDY5OTg4MywyNC44NjkwMDIgMy4wNDEsMjQuNDc1IEMzLjI3NTAwMTE3LDI0LjA4MDk5OCAzLjM5MiwyMy41MTYwMDM3IDMuMzkyLDIyLjc4IEMzLjM5MiwyMi4zNzU5OTggMy4zNTMwMDAzOSwyMi4wNDMwMDEzIDMuMjc1LDIxLjc4MSBDMy4xOTY5OTk2MSwyMS41MTg5OTg3IDMuMDkyMDAwNjYsMjEuMzEyMDAwOCAyLjk2LDIxLjE2IEMyLjgyNzk5OTM0LDIxLjAwNzk5OTIgMi42NzQwMDA4OCwyMC45MDEwMDAzIDIuNDk4LDIwLjgzOSBDMi4zMjE5OTkxMiwyMC43NzY5OTk3IDIuMTM0MDAxLDIwLjc0NiAxLjkzNCwyMC43NDYgQzEuNzI5OTk4OTgsMjAuNzQ2IDEuNTQyMDAwODYsMjAuNzc5OTk5NyAxLjM3LDIwLjg0OCBDMS4xOTc5OTkxNCwyMC45MTYwMDAzIDEuMDUwMDAwNjIsMjEuMDEwOTk5NCAwLjkyNiwyMS4xMzMgQzAuODAxOTk5MzgsMjEuMjU1MDAwNiAwLjcwNjAwMDM0LDIxLjQwMDk5OTIgMC42MzgsMjEuNTcxIEMwLjU2OTk5OTY2LDIxLjc0MTAwMDkgMC41MzYsMjEuOTI3OTk5IDAuNTM2LDIyLjEzMiBDMC41MzYsMjIuMzQwMDAxIDAuNTY0OTk5NzEsMjIuNTMxOTk5MSAwLjYyMywyMi43MDggQzAuNjgxMDAwMjksMjIuODg0MDAwOSAwLjc2Njk5OTQzLDIzLjAzMzk5OTQgMC44ODEsMjMuMTU4IEMwLjk5NTAwMDU3LDIzLjI4MjAwMDYgMS4xMzU5OTkxNiwyMy4zNzg5OTk3IDEuMzA0LDIzLjQ0OSBDMS40NzIwMDA4NCwyMy41MTkwMDA0IDEuNjYzOTk4OTIsMjMuNTU0IDEuODgsMjMuNTU0IEMyLjA4ODAwMTA0LDIzLjU1NCAyLjI3OTk5OTEyLDIzLjUwMTAwMDUgMi40NTYsMjMuMzk1IEMyLjYzMjAwMDg4LDIzLjI4ODk5OTUgMi43Njc5OTk1MiwyMy4xNDYwMDA5IDIuODY0LDIyLjk2NiBMMi44NzYsMjIuOTc4IEMyLjg1OTk5OTkyLDIzLjUzNDAwMjggMi43NzQwMDA3OCwyMy45NDY5OTg3IDIuNjE4LDI0LjIxNyBDMi40NjE5OTkyMiwyNC40ODcwMDE0IDIuMjI4MDAxNTYsMjQuNjIyIDEuOTE2LDI0LjYyMiBDMS43MTE5OTg5OCwyNC42MjIgMS41MzYwMDA3NCwyNC41NjYwMDA2IDEuMzg4LDI0LjQ1NCBDMS4yMzk5OTkyNiwyNC4zNDE5OTk0IDEuMTU2MDAwMSwyNC4xODIwMDEgMS4xMzYsMjMuOTc0IEwxLjEzNiwyMy45NzQgWiBNMi43ODYsMjIuMTY4IEMyLjc4NiwyMi4yOTIwMDA2IDIuNzY2MDAwMiwyMi40MTA5OTk0IDIuNzI2LDIyLjUyNSBDMi42ODU5OTk4LDIyLjYzOTAwMDYgMi42MjgwMDAzOCwyMi43Mzg5OTk2IDIuNTUyLDIyLjgyNSBDMi40NzU5OTk2MiwyMi45MTEwMDA0IDIuMzg0MDAwNTQsMjIuOTc4OTk5OCAyLjI3NiwyMy4wMjkgQzIuMTY3OTk5NDYsMjMuMDc5MDAwMyAyLjA0ODAwMDY2LDIzLjEwNCAxLjkxNiwyMy4xMDQgQzEuNzkxOTk5MzgsMjMuMTA0IDEuNjc5MDAwNTEsMjMuMDc5MDAwMyAxLjU3NywyMy4wMjkgQzEuNDc0OTk5NDksMjIuOTc4OTk5OCAxLjM4NzAwMDM3LDIyLjkxMjAwMDQgMS4zMTMsMjIuODI4IEMxLjIzODk5OTYzLDIyLjc0Mzk5OTYgMS4xODEwMDAyMSwyMi42NDgwMDA1IDEuMTM5LDIyLjU0IEMxLjA5Njk5OTc5LDIyLjQzMTk5OTUgMS4wNzYsMjIuMzIwMDAwNiAxLjA3NiwyMi4yMDQgQzEuMDc2LDIyLjA3MTk5OTMgMS4wOTA5OTk4NSwyMS45NDYwMDA2IDEuMTIxLDIxLjgyNiBDMS4xNTEwMDAxNSwyMS43MDU5OTk0IDEuMTk4OTk5NjcsMjEuNTk5MDAwNSAxLjI2NSwyMS41MDUgQzEuMzMxMDAwMzMsMjEuNDEwOTk5NSAxLjQxNjk5OTQ3LDIxLjMzNjAwMDMgMS41MjMsMjEuMjggQzEuNjI5MDAwNTMsMjEuMjIzOTk5NyAxLjc1Nzk5OTI0LDIxLjE5NiAxLjkxLDIxLjE5NiBDMi4wNTQwMDA3MiwyMS4xOTYgMi4xNzk5OTk0NiwyMS4yMjE5OTk3IDIuMjg4LDIxLjI3NCBDMi4zOTYwMDA1NCwyMS4zMjYwMDAzIDIuNDg2OTk5NjMsMjEuMzk2OTk5NiAyLjU2MSwyMS40ODcgQzIuNjM1MDAwMzcsMjEuNTc3MDAwNSAyLjY5MDk5OTgxLDIxLjY3OTk5OTQgMi43MjksMjEuNzk2IEMyLjc2NzAwMDE5LDIxLjkxMjAwMDYgMi43ODYsMjIuMDM1OTk5MyAyLjc4NiwyMi4xNjggTDIuNzg2LDIyLjE2OCBaJyBpZD0nOSc+PC9wYXRoPlxuXHQgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSdNMi44LDE1LjUgTDIuOCwxMS4yNDYgTDIuNDEsMTEuMjQ2IEMyLjM4MTk5OTg2LDExLjQwNjAwMDggMi4zMzAwMDAzOCwxMS41Mzc5OTk1IDIuMjU0LDExLjY0MiBDMi4xNzc5OTk2MiwxMS43NDYwMDA1IDIuMDg1MDAwNTUsMTEuODI3OTk5NyAxLjk3NSwxMS44ODggQzEuODY0OTk5NDUsMTEuOTQ4MDAwMyAxLjc0MjAwMDY4LDExLjk4ODk5OTkgMS42MDYsMTIuMDExIEMxLjQ2OTk5OTMyLDEyLjAzMzAwMDEgMS4zMzAwMDA3MiwxMi4wNDQgMS4xODYsMTIuMDQ0IEwxLjE4NiwxMi40NTIgTDIuMjksMTIuNDUyIEwyLjI5LDE1LjUgTDIuOCwxNS41IFogTTQuNzkyLDEzLjQwNiBDNC43OTIsMTMuMzAxOTk5NSA0Ljc5Mjk5OTk5LDEzLjE4NzAwMDYgNC43OTUsMTMuMDYxIEM0Ljc5NzAwMDAxLDEyLjkzNDk5OTQgNC44MDY5OTk5MSwxMi44MDkwMDA2IDQuODI1LDEyLjY4MyBDNC44NDMwMDAwOSwxMi41NTY5OTk0IDQuODY4OTk5ODMsMTIuNDM0MDAwNiA0LjkwMywxMi4zMTQgQzQuOTM3MDAwMTcsMTIuMTkzOTk5NCA0Ljk4Njk5OTY3LDEyLjA4OTAwMDUgNS4wNTMsMTEuOTk5IEM1LjExOTAwMDMzLDExLjkwODk5OTYgNS4yMDE5OTk1LDExLjgzNjAwMDMgNS4zMDIsMTEuNzggQzUuNDAyMDAwNSwxMS43MjM5OTk3IDUuNTIzOTk5MjgsMTEuNjk2IDUuNjY4LDExLjY5NiBDNS44MTIwMDA3MiwxMS42OTYgNS45MzM5OTk1LDExLjcyMzk5OTcgNi4wMzQsMTEuNzggQzYuMTM0MDAwNSwxMS44MzYwMDAzIDYuMjE2OTk5NjcsMTEuOTA4OTk5NiA2LjI4MywxMS45OTkgQzYuMzQ5MDAwMzMsMTIuMDg5MDAwNSA2LjM5ODk5OTgzLDEyLjE5Mzk5OTQgNi40MzMsMTIuMzE0IEM2LjQ2NzAwMDE3LDEyLjQzNDAwMDYgNi40OTI5OTk5MSwxMi41NTY5OTk0IDYuNTExLDEyLjY4MyBDNi41MjkwMDAwOSwxMi44MDkwMDA2IDYuNTM4OTk5OTksMTIuOTM0OTk5NCA2LjU0MSwxMy4wNjEgQzYuNTQzMDAwMDEsMTMuMTg3MDAwNiA2LjU0NCwxMy4zMDE5OTk1IDYuNTQ0LDEzLjQwNiBDNi41NDQsMTMuNTY2MDAwOCA2LjUzOTAwMDA1LDEzLjc0NDk5OSA2LjUyOSwxMy45NDMgQzYuNTE4OTk5OTUsMTQuMTQxMDAxIDYuNDg3MDAwMjcsMTQuMzI2OTk5MSA2LjQzMywxNC41MDEgQzYuMzc4OTk5NzMsMTQuNjc1MDAwOSA2LjI5MjAwMDYsMTQuODIxOTk5NCA2LjE3MiwxNC45NDIgQzYuMDUxOTk5NCwxNS4wNjIwMDA2IDUuODg0MDAxMDgsMTUuMTIyIDUuNjY4LDE1LjEyMiBDNS40NTE5OTg5MiwxNS4xMjIgNS4yODQwMDA2LDE1LjA2MjAwMDYgNS4xNjQsMTQuOTQyIEM1LjA0Mzk5OTQsMTQuODIxOTk5NCA0Ljk1NzAwMDI3LDE0LjY3NTAwMDkgNC45MDMsMTQuNTAxIEM0Ljg0ODk5OTczLDE0LjMyNjk5OTEgNC44MTcwMDAwNSwxNC4xNDEwMDEgNC44MDcsMTMuOTQzIEM0Ljc5Njk5OTk1LDEzLjc0NDk5OSA0Ljc5MiwxMy41NjYwMDA4IDQuNzkyLDEzLjQwNiBMNC43OTIsMTMuNDA2IFogTTQuMjUyLDEzLjQxMiBDNC4yNTIsMTMuNTY4MDAwOCA0LjI1NTk5OTk2LDEzLjcyOTk5OTIgNC4yNjQsMTMuODk4IEM0LjI3MjAwMDA0LDE0LjA2NjAwMDggNC4yOTE5OTk4NCwxNC4yMjk5OTkyIDQuMzI0LDE0LjM5IEM0LjM1NjAwMDE2LDE0LjU1MDAwMDggNC40MDE5OTk3LDE0LjcwMDk5OTMgNC40NjIsMTQuODQzIEM0LjUyMjAwMDMsMTQuOTg1MDAwNyA0LjYwMzk5OTQ4LDE1LjEwOTk5OTUgNC43MDgsMTUuMjE4IEM0LjgxMjAwMDUyLDE1LjMyNjAwMDUgNC45NDI5OTkyMSwxNS40MTA5OTk3IDUuMTAxLDE1LjQ3MyBDNS4yNTkwMDA3OSwxNS41MzUwMDAzIDUuNDQ3OTk4OSwxNS41NjYgNS42NjgsMTUuNTY2IEM1Ljg5MjAwMTEyLDE1LjU2NiA2LjA4MTk5OTIyLDE1LjUzNTAwMDMgNi4yMzgsMTUuNDczIEM2LjM5NDAwMDc4LDE1LjQxMDk5OTcgNi41MjM5OTk0OCwxNS4zMjYwMDA1IDYuNjI4LDE1LjIxOCBDNi43MzIwMDA1MiwxNS4xMDk5OTk1IDYuODEzOTk5NywxNC45ODUwMDA3IDYuODc0LDE0Ljg0MyBDNi45MzQwMDAzLDE0LjcwMDk5OTMgNi45Nzk5OTk4NCwxNC41NTAwMDA4IDcuMDEyLDE0LjM5IEM3LjA0NDAwMDE2LDE0LjIyOTk5OTIgNy4wNjM5OTk5NiwxNC4wNjYwMDA4IDcuMDcyLDEzLjg5OCBDNy4wODAwMDAwNCwxMy43Mjk5OTkyIDcuMDg0LDEzLjU2ODAwMDggNy4wODQsMTMuNDEyIEM3LjA4NCwxMy4yNTU5OTkyIDcuMDgwMDAwMDQsMTMuMDk0MDAwOCA3LjA3MiwxMi45MjYgQzcuMDYzOTk5OTYsMTIuNzU3OTk5MiA3LjA0NDAwMDE2LDEyLjU5NDAwMDggNy4wMTIsMTIuNDM0IEM2Ljk3OTk5OTg0LDEyLjI3Mzk5OTIgNi45MzQwMDAzLDEyLjEyMjAwMDcgNi44NzQsMTEuOTc4IEM2LjgxMzk5OTcsMTEuODMzOTk5MyA2LjczMjAwMDUyLDExLjcwODAwMDUgNi42MjgsMTEuNiBDNi41MjM5OTk0OCwxMS40OTE5OTk1IDYuMzkzMDAwNzksMTEuNDA2MDAwMyA2LjIzNSwxMS4zNDIgQzYuMDc2OTk5MjEsMTEuMjc3OTk5NyA1Ljg4ODAwMTEsMTEuMjQ2IDUuNjY4LDExLjI0NiBDNS40NDc5OTg5LDExLjI0NiA1LjI1OTAwMDc5LDExLjI3Nzk5OTcgNS4xMDEsMTEuMzQyIEM0Ljk0Mjk5OTIxLDExLjQwNjAwMDMgNC44MTIwMDA1MiwxMS40OTE5OTk1IDQuNzA4LDExLjYgQzQuNjAzOTk5NDgsMTEuNzA4MDAwNSA0LjUyMjAwMDMsMTEuODMzOTk5MyA0LjQ2MiwxMS45NzggQzQuNDAxOTk5NywxMi4xMjIwMDA3IDQuMzU2MDAwMTYsMTIuMjczOTk5MiA0LjMyNCwxMi40MzQgQzQuMjkxOTk5ODQsMTIuNTk0MDAwOCA0LjI3MjAwMDA0LDEyLjc1Nzk5OTIgNC4yNjQsMTIuOTI2IEM0LjI1NTk5OTk2LDEzLjA5NDAwMDggNC4yNTIsMTMuMjU1OTk5MiA0LjI1MiwxMy40MTIgTDQuMjUyLDEzLjQxMiBaJyBpZD0nMTAnPjwvcGF0aD5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0nTTEwLjgsOCBMMTAuOCwzLjc0NiBMMTAuNDEsMy43NDYgQzEwLjM4MTk5OTksMy45MDYwMDA4IDEwLjMzMDAwMDQsNC4wMzc5OTk0OCAxMC4yNTQsNC4xNDIgQzEwLjE3Nzk5OTYsNC4yNDYwMDA1MiAxMC4wODUwMDA1LDQuMzI3OTk5NyA5Ljk3NSw0LjM4OCBDOS44NjQ5OTk0NSw0LjQ0ODAwMDMgOS43NDIwMDA2OCw0LjQ4ODk5OTg5IDkuNjA2LDQuNTExIEM5LjQ2OTk5OTMyLDQuNTMzMDAwMTEgOS4zMzAwMDA3Miw0LjU0NCA5LjE4Niw0LjU0NCBMOS4xODYsNC45NTIgTDEwLjI5LDQuOTUyIEwxMC4yOSw4IEwxMC44LDggWiBNMTQuMTM2LDggTDE0LjEzNiwzLjc0NiBMMTMuNzQ2LDMuNzQ2IEMxMy43MTc5OTk5LDMuOTA2MDAwOCAxMy42NjYwMDA0LDQuMDM3OTk5NDggMTMuNTksNC4xNDIgQzEzLjUxMzk5OTYsNC4yNDYwMDA1MiAxMy40MjEwMDA1LDQuMzI3OTk5NyAxMy4zMTEsNC4zODggQzEzLjIwMDk5OTQsNC40NDgwMDAzIDEzLjA3ODAwMDcsNC40ODg5OTk4OSAxMi45NDIsNC41MTEgQzEyLjgwNTk5OTMsNC41MzMwMDAxMSAxMi42NjYwMDA3LDQuNTQ0IDEyLjUyMiw0LjU0NCBMMTIuNTIyLDQuOTUyIEwxMy42MjYsNC45NTIgTDEzLjYyNiw4IEwxNC4xMzYsOCBaJyBpZD0nMTEnPjwvcGF0aD5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0nTTIwLjgsNSBMMjAuOCwwLjc0NiBMMjAuNDEsMC43NDYgQzIwLjM4MTk5OTksMC45MDYwMDA4IDIwLjMzMDAwMDQsMS4wMzc5OTk0OCAyMC4yNTQsMS4xNDIgQzIwLjE3Nzk5OTYsMS4yNDYwMDA1MiAyMC4wODUwMDA1LDEuMzI3OTk5NyAxOS45NzUsMS4zODggQzE5Ljg2NDk5OTQsMS40NDgwMDAzIDE5Ljc0MjAwMDcsMS40ODg5OTk4OSAxOS42MDYsMS41MTEgQzE5LjQ2OTk5OTMsMS41MzMwMDAxMSAxOS4zMzAwMDA3LDEuNTQ0IDE5LjE4NiwxLjU0NCBMMTkuMTg2LDEuOTUyIEwyMC4yOSwxLjk1MiBMMjAuMjksNSBMMjAuOCw1IFogTTIyLjI2NCwyLjI1MiBMMjIuNzc0LDIuMjUyIEMyMi43NywyLjEyMzk5OTM2IDIyLjc4Mjk5OTgsMS45OTcwMDA2MyAyMi44MTMsMS44NzEgQzIyLjg0MzAwMDEsMS43NDQ5OTkzNyAyMi44OTE5OTk3LDEuNjMyMDAwNSAyMi45NiwxLjUzMiBDMjMuMDI4MDAwMywxLjQzMTk5OTUgMjMuMTE0OTk5NSwxLjM1MTAwMDMxIDIzLjIyMSwxLjI4OSBDMjMuMzI3MDAwNSwxLjIyNjk5OTY5IDIzLjQ1Mzk5OTMsMS4xOTYgMjMuNjAyLDEuMTk2IEMyMy43MTQwMDA2LDEuMTk2IDIzLjgxOTk5OTUsMS4yMTM5OTk4MiAyMy45MiwxLjI1IEMyNC4wMjAwMDA1LDEuMjg2MDAwMTggMjQuMTA2OTk5NiwxLjMzNzk5OTY2IDI0LjE4MSwxLjQwNiBDMjQuMjU1MDAwNCwxLjQ3NDAwMDM0IDI0LjMxMzk5OTgsMS41NTQ5OTk1MyAyNC4zNTgsMS42NDkgQzI0LjQwMjAwMDIsMS43NDMwMDA0NyAyNC40MjQsMS44NDc5OTk0MiAyNC40MjQsMS45NjQgQzI0LjQyNCwyLjExMjAwMDc0IDI0LjQwMTAwMDIsMi4yNDE5OTk0NCAyNC4zNTUsMi4zNTQgQzI0LjMwODk5OTgsMi40NjYwMDA1NiAyNC4yNDEwMDA0LDIuNTY5OTk5NTIgMjQuMTUxLDIuNjY2IEMyNC4wNjA5OTk1LDIuNzYyMDAwNDggMjMuOTQ4MDAwNywyLjg1Njk5OTUzIDIzLjgxMiwyLjk1MSBDMjMuNjc1OTk5MywzLjA0NTAwMDQ3IDIzLjUxODAwMDksMy4xNDc5OTk0NCAyMy4zMzgsMy4yNiBDMjMuMTg5OTk5MywzLjM0ODAwMDQ0IDIzLjA0ODAwMDcsMy40NDE5OTk1IDIyLjkxMiwzLjU0MiBDMjIuNzc1OTk5MywzLjY0MjAwMDUgMjIuNjU0MDAwNSwzLjc1Nzk5OTM0IDIyLjU0NiwzLjg5IEMyMi40Mzc5OTk1LDQuMDIyMDAwNjYgMjIuMzQ5MDAwMyw0LjE3Njk5OTExIDIyLjI3OSw0LjM1NSBDMjIuMjA4OTk5Niw0LjUzMzAwMDg5IDIyLjE2NDAwMDEsNC43NDc5OTg3NCAyMi4xNDQsNSBMMjQuOTIyLDUgTDI0LjkyMiw0LjU1IEwyMi43MzgsNC41NSBDMjIuNzYyMDAwMSw0LjQxNzk5OTM0IDIyLjgxMjk5OTYsNC4zMDEwMDA1MSAyMi44OTEsNC4xOTkgQzIyLjk2OTAwMDQsNC4wOTY5OTk0OSAyMy4wNjI5OTk0LDQuMDAyMDAwNDQgMjMuMTczLDMuOTE0IEMyMy4yODMwMDA1LDMuODI1OTk5NTYgMjMuNDAzOTk5MywzLjc0MzAwMDM5IDIzLjUzNiwzLjY2NSBDMjMuNjY4MDAwNywzLjU4Njk5OTYxIDIzLjc5OTk5OTMsMy41MDgwMDA0IDIzLjkzMiwzLjQyOCBDMjQuMDY0MDAwNywzLjM0Mzk5OTU4IDI0LjE5MTk5OTQsMy4yNTYwMDA0NiAyNC4zMTYsMy4xNjQgQzI0LjQ0MDAwMDYsMy4wNzE5OTk1NCAyNC41NDk5OTk1LDIuOTY5MDAwNTcgMjQuNjQ2LDIuODU1IEMyNC43NDIwMDA1LDIuNzQwOTk5NDMgMjQuODE4OTk5NywyLjYxMjAwMDcyIDI0Ljg3NywyLjQ2OCBDMjQuOTM1MDAwMywyLjMyMzk5OTI4IDI0Ljk2NCwyLjE1ODAwMDk0IDI0Ljk2NCwxLjk3IEMyNC45NjQsMS43Njk5OTkgMjQuOTI5MDAwMywxLjU5NDAwMDc2IDI0Ljg1OSwxLjQ0MiBDMjQuNzg4OTk5NiwxLjI4OTk5OTI0IDI0LjY5NDAwMDYsMS4xNjMwMDA1MSAyNC41NzQsMS4wNjEgQzI0LjQ1Mzk5OTQsMC45NTg5OTk0OSAyNC4zMTMwMDA4LDAuODgxMDAwMjcgMjQuMTUxLDAuODI3IEMyMy45ODg5OTkyLDAuNzcyOTk5NzMgMjMuODE2MDAwOSwwLjc0NiAyMy42MzIsMC43NDYgQzIzLjQwNzk5ODksMC43NDYgMjMuMjA4MDAwOSwwLjc4Mzk5OTYyIDIzLjAzMiwwLjg2IEMyMi44NTU5OTkxLDAuOTM2MDAwMzggMjIuNzA5MDAwNiwxLjA0MDk5OTMzIDIyLjU5MSwxLjE3NSBDMjIuNDcyOTk5NCwxLjMwOTAwMDY3IDIyLjM4NjAwMDMsMS40Njc5OTkwOCAyMi4zMywxLjY1MiBDMjIuMjczOTk5NywxLjgzNjAwMDkyIDIyLjI1MTk5OTksMi4wMzU5OTg5MiAyMi4yNjQsMi4yNTIgTDIyLjI2NCwyLjI1MiBaJyBpZD0nMTInPjwvcGF0aD5cblx0ICAgICAgICAgICAgICAgICAgICA8L2c+XG5cdCAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9J0hvdXInIGZpbGw9JyMyQTI5MjknIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDI1LjMxOTI5NywgMjMuNjExOTE3KSByb3RhdGUoLTM4LjAwMDAwMCkgdHJhbnNsYXRlKC0yNS4zMTkyOTcsIC0yMy42MTE5MTcpICcgcG9pbnRzPScyNC44MTkyOTcyIDE1LjYxMTkxNjggMjUuODE5Mjk3MiAxNS42MTE5MTY4IDI1LjgxOTI5NzIgMzEuNjExOTE2OCAyNC44MTkyOTcyIDMxLjYxMTkxNjgnPjwvcG9seWdvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0nTWludXRlJyBmaWxsPScjMkEyOTI5JyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgxOS4zMjk5NDksIDM1LjczMDAyOCkgcm90YXRlKDYyLjAwMDAwMCkgdHJhbnNsYXRlKC0xOS4zMjk5NDksIC0zNS43MzAwMjgpICcgcG9pbnRzPScxOS4wNDk0MzIxIDI0LjI5ODY5OTEgMTkuOTE4NDM2MyAyNC4yOTg2OTkxIDE5Ljc4NzQ0MDQgNDcuMjk4Njk5MSAxOC45MTg0MzYzIDQ3LjI5ODY5OTEnPjwvcG9seWdvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0nU2Vjb25kJyBmaWxsPScjREQ0NTI0JyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgzOS42NDQ2MjEsIDMyLjEyOTQ4MCkgcm90YXRlKC03Ni4wMDAwMDApIHRyYW5zbGF0ZSgtMzkuNjQ0NjIxLCAtMzIuMTI5NDgwKSAnIHBvaW50cz0nMzguOTUyMzU2NSAxOC4yNDgyMzE1IDM5LjkyMjExMzggMTguMjQ4MjMxNSAzOS45NTIzNTY1IDQ2LjI0ODIzMTUgMzguOTgyNTk5MiA0Ni4yNDgyMzE1Jz48L3BvbHlnb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBpZD0nT3ZhbC0xMycgZmlsbD0nIzJBMjkyOScgY3g9JzMwJyBjeT0nMzAnIHI9JzEuMjUnPjwvY2lyY2xlPlxuXHQgICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgaWQ9J092YWwtMTQnIGZpbGw9JyNERDQ1MjQnIGN4PSczMCcgY3k9JzMwJyByPScwLjc1Jz48L2NpcmNsZT5cblx0ICAgICAgICAgICAgICAgIDwvZz5cblx0ICAgICAgICAgICAgPC9nPlxuXHQgICAgICAgIDwvZz5cblx0ICAgIDwvZz5cblx0PC9zdmc+XCJcblx0bWFwc19hcHA6XCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0PHN2ZyB3aWR0aD0nNjBweCcgaGVpZ2h0PSc2MHB4JyB2aWV3Qm94PScwIDAgNjAgNjAnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayc+XG5cdCAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDM5LjEgKDMxNzIwKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0ICAgIDx0aXRsZT5NYXBzPC90aXRsZT5cblx0ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHQgICAgPGRlZnM+XG5cdCAgICAgICAgPHBhdGggZD0nTTM5LjA4MTUsMCBDNDUuMTA1LDAgNDguMTE2LDAgNTEuMzU4NSwxLjAyNSBDNTQuODk4NSwyLjMxMzUgNTcuNjg2NSw1LjEwMTUgNTguOTc1LDguNjQxNSBDNjAsMTEuODgzNSA2MCwxNC44OTU1IDYwLDIwLjkxODUgTDYwLDM5LjA4MTUgQzYwLDQ1LjEwNSA2MCw0OC4xMTYgNTguOTc1LDUxLjM1ODUgQzU3LjY4NjUsNTQuODk4NSA1NC44OTg1LDU3LjY4NjUgNTEuMzU4NSw1OC45NzQ1IEM0OC4xMTYsNjAgNDUuMTA1LDYwIDM5LjA4MTUsNjAgTDIwLjkxODUsNjAgQzE0Ljg5NSw2MCAxMS44ODM1LDYwIDguNjQxNSw1OC45NzQ1IEM1LjEwMTUsNTcuNjg2NSAyLjMxMzUsNTQuODk4NSAxLjAyNSw1MS4zNTg1IEMwLDQ4LjExNiAwLDQ1LjEwNSAwLDM5LjA4MTUgTDAsMjAuOTE4NSBDMCwxNC44OTU1IDAsMTEuODgzNSAxLjAyNSw4LjY0MTUgQzIuMzEzNSw1LjEwMTUgNS4xMDE1LDIuMzEzNSA4LjY0MTUsMS4wMjUgQzExLjg4MzUsMCAxNC44OTUsMCAyMC45MTg1LDAgTDM5LjA4MTUsMCBaJyBpZD0ncGF0aC0xJz48L3BhdGg+XG5cdCAgICAgICAgPHBhdGggZD0nTS00LjUsMzAgQy00LjUsMzAgLTQuNDc0NjI2MjUsMzAuNDk2NzgwNyAtNC40MjUxMTY5NSwzMC40OTEyNDAxIEMtMy40NDIyOTA1NSwzMC4zODEyNTA2IDkuMTA0NDU2OTYsMjguNDk0NjkyMyAxNy41MDc1Njg0LDM0LjUwOTI3NzMgQzIzLjI2ODMxMDUsMzguNjMyNTY4NCAyNi40MjA3OCw0My43NDkwMDg3IDMxLDQ4LjE4NDgxNDUgQzM2Ljc5MTk5MjIsNTMuNzk1NDEwMiA0NC4zMzE0MDQyLDU1LjY2ODA2NjQgNTAuNDA1ODE0NCw1Ni4yNTAyOTMgQzU2LjQ4MDIyNDYsNTYuODMyNTE5NSA2NSw1NiA2NSw1NiBMNjUsNjYgQzY1LDY2IDUzLjU0ODk2MzMsNjUuMzc2OTM4NSA0Ny44MjM0ODYzLDY0LjY3ODQ2NjggQzQyLjA5ODAwOTMsNjMuOTc5OTk1MSAzMy4yNDcwNzAzLDYyLjAyNjEyMyAyNy4zOTIzMzQsNTcuOTI3MDAyIEMxNy45OTA5NjY4LDUwLjE3Mjg1MTYgMTkuMjc3ODc0LDQ3LjgxOTM3NjMgMTIuMjkxNzQ4LDQzLjIyNDYwOTQgQzUuMjQwNzIyNjYsMzguNTg3MTU4MiAtNC41LDQwLjUgLTQuNSw0MC41IEwtNC41LDMwIFonIGlkPSdwYXRoLTMnPjwvcGF0aD5cblx0ICAgICAgICA8bWFzayBpZD0nbWFzay00JyBtYXNrQ29udGVudFVuaXRzPSd1c2VyU3BhY2VPblVzZScgbWFza1VuaXRzPSdvYmplY3RCb3VuZGluZ0JveCcgeD0nLTAuNScgeT0nLTAuNScgd2lkdGg9JzcwLjUnIGhlaWdodD0nMzcnPlxuXHQgICAgICAgICAgICA8cmVjdCB4PSctNScgeT0nMjkuNScgd2lkdGg9JzcwLjUnIGhlaWdodD0nMzcnIGZpbGw9J3doaXRlJz48L3JlY3Q+XG5cdCAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0nI3BhdGgtMycgZmlsbD0nYmxhY2snPjwvdXNlPlxuXHQgICAgICAgIDwvbWFzaz5cblx0ICAgICAgICA8cG9seWdvbiBpZD0ncGF0aC01JyBwb2ludHM9JzUwLjUgNjAgNDEuNSA2MCA0MS41IDE4Ljg0Mjk3NTIgMCAxOC44NDI5NzUyIDAgOS45MTczNTUzNyA0MS41IDkuOTE3MzU1MzcgNDEuNSAwIDUwLjUgMCA1MC41IDkuOTE3MzU1MzcgNjAgOS45MTczNTUzNyA2MCAxOC44NDI5NzUyIDUwLjUgMTguODQyOTc1MiA1MC41IDM2LjY5NDIxNDkgNjAgMzYuNjk0MjE0OSA2MCA0NS42MTk4MzQ3IDUwLjUgNDUuNjE5ODM0Nyc+PC9wb2x5Z29uPlxuXHQgICAgICAgIDxtYXNrIGlkPSdtYXNrLTYnIG1hc2tDb250ZW50VW5pdHM9J3VzZXJTcGFjZU9uVXNlJyBtYXNrVW5pdHM9J29iamVjdEJvdW5kaW5nQm94JyB4PSctMC41JyB5PSctMC41JyB3aWR0aD0nNjEnIGhlaWdodD0nNjEnPlxuXHQgICAgICAgICAgICA8cmVjdCB4PSctMC41JyB5PSctMC41JyB3aWR0aD0nNjEnIGhlaWdodD0nNjEnIGZpbGw9J3doaXRlJz48L3JlY3Q+XG5cdCAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0nI3BhdGgtNScgZmlsbD0nYmxhY2snPjwvdXNlPlxuXHQgICAgICAgIDwvbWFzaz5cblx0ICAgICAgICA8cGF0aCBkPSdNMC41LDcuNSBDMC44MTQ5NjE1NDgsMTMuODQ1OTA1MSA1LjAzNjc5NjU2LDE5LjUgMTIuNzUsMTkuNSBDMjAuNDYzMjAzNCwxOS41IDI0LjYzMTQ3NTUsMTMuODQzOTM4MSAyNSw3LjUgQzI1LjEyMzUzNTIsNS4zNzM0MTMwOSAyNC4zNjc0MzE2LDIuNTY1NTUxNzYgMjMuNTA2ODEzMSwxLjI3MTAxNDIgQzIyLjQ1NDk1NjUsMi4wMjU5OTI4NSAyMC40MzczNTYyLDIuNSAxOC43NSwyLjUgQzE2LjE1OTY2MzEsMi41IDEzLjQ2OTM4NDgsMS44ODI5MjEwNiAxMi43NSwwLjM0NzEzMzc5OSBDMTIuMDMwNjE1MiwxLjg4MjkyMTA2IDkuMzQwMzM2ODksMi41IDYuNzUsMi41IEM1LjA2MjY0MzgzLDIuNSAzLjA0NTA0MzQ2LDIuMDI1OTkyODUgMS45OTMxODY4NiwxLjI3MTAxNDIgQzEuMTMyOTM0NTcsMi43NjQxNjAxNiAwLjM5MjA4OTg0NCw1LjMyNTgwNTY2IDAuNSw3LjUgWicgaWQ9J3BhdGgtNyc+PC9wYXRoPlxuXHQgICAgICAgIDxtYXNrIGlkPSdtYXNrLTgnIG1hc2tDb250ZW50VW5pdHM9J3VzZXJTcGFjZU9uVXNlJyBtYXNrVW5pdHM9J29iamVjdEJvdW5kaW5nQm94JyB4PScwJyB5PScwJyB3aWR0aD0nMjQuNTIzNzc4NycgaGVpZ2h0PScxOS4xNTI4NjYyJyBmaWxsPSd3aGl0ZSc+XG5cdCAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0nI3BhdGgtNyc+PC91c2U+XG5cdCAgICAgICAgPC9tYXNrPlxuXHQgICAgICAgIDxtYXNrIGlkPSdtYXNrLTEwJyBtYXNrQ29udGVudFVuaXRzPSd1c2VyU3BhY2VPblVzZScgbWFza1VuaXRzPSdvYmplY3RCb3VuZGluZ0JveCcgeD0nMCcgeT0nMCcgd2lkdGg9JzI0LjUyMzc3ODcnIGhlaWdodD0nMTkuMTUyODY2MicgZmlsbD0nd2hpdGUnPlxuXHQgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9JyNwYXRoLTcnPjwvdXNlPlxuXHQgICAgICAgIDwvbWFzaz5cblx0ICAgICAgICA8cmVjdCBpZD0ncGF0aC0xMScgeD0nMCcgeT0nMC41JyB3aWR0aD0nMjUnIGhlaWdodD0nNSc+PC9yZWN0PlxuXHQgICAgICAgIDxmaWx0ZXIgeD0nLTUwJScgeT0nLTUwJScgd2lkdGg9JzIwMCUnIGhlaWdodD0nMjAwJScgZmlsdGVyVW5pdHM9J29iamVjdEJvdW5kaW5nQm94JyBpZD0nZmlsdGVyLTEyJz5cblx0ICAgICAgICAgICAgPGZlT2Zmc2V0IGR4PScwJyBkeT0nMScgaW49J1NvdXJjZUFscGhhJyByZXN1bHQ9J3NoYWRvd09mZnNldE91dGVyMSc+PC9mZU9mZnNldD5cblx0ICAgICAgICAgICAgPGZlQ29sb3JNYXRyaXggdmFsdWVzPScwIDAgMCAwIDEgICAwIDAgMCAwIDEgICAwIDAgMCAwIDEgIDAgMCAwIDEgMCcgdHlwZT0nbWF0cml4JyBpbj0nc2hhZG93T2Zmc2V0T3V0ZXIxJz48L2ZlQ29sb3JNYXRyaXg+XG5cdCAgICAgICAgPC9maWx0ZXI+XG5cdCAgICAgICAgPHBhdGggZD0nTTAuNSw3LjUgQzAuODE0OTYxNTQ4LDEzLjg0NTkwNTEgNS4wMzY3OTY1NiwxOS41IDEyLjc1LDE5LjUgQzIwLjQ2MzIwMzQsMTkuNSAyNC42MzE0NzU1LDEzLjg0MzkzODEgMjUsNy41IEMyNS4xMjM1MzUyLDUuMzczNDEzMDkgMjQuMzY3NDMxNiwyLjU2NTU1MTc2IDIzLjUwNjgxMzEsMS4yNzEwMTQyIEMyMi40NTQ5NTY1LDIuMDI1OTkyODUgMjAuNDM3MzU2MiwyLjUgMTguNzUsMi41IEMxNi4xNTk2NjMxLDIuNSAxMy40NjkzODQ4LDEuODgyOTIxMDYgMTIuNzUsMC4zNDcxMzM3OTkgQzEyLjAzMDYxNTIsMS44ODI5MjEwNiA5LjM0MDMzNjg5LDIuNSA2Ljc1LDIuNSBDNS4wNjI2NDM4MywyLjUgMy4wNDUwNDM0NiwyLjAyNTk5Mjg1IDEuOTkzMTg2ODYsMS4yNzEwMTQyIEMxLjEzMjkzNDU3LDIuNzY0MTYwMTYgMC4zOTIwODk4NDQsNS4zMjU4MDU2NiAwLjUsNy41IFonIGlkPSdwYXRoLTEzJz48L3BhdGg+XG5cdCAgICAgICAgPG1hc2sgaWQ9J21hc2stMTQnIG1hc2tDb250ZW50VW5pdHM9J3VzZXJTcGFjZU9uVXNlJyBtYXNrVW5pdHM9J29iamVjdEJvdW5kaW5nQm94JyB4PScwJyB5PScwJyB3aWR0aD0nMjQuNTIzNzc4NycgaGVpZ2h0PScxOS4xNTI4NjYyJyBmaWxsPSd3aGl0ZSc+XG5cdCAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0nI3BhdGgtMTMnPjwvdXNlPlxuXHQgICAgICAgIDwvbWFzaz5cblx0ICAgIDwvZGVmcz5cblx0ICAgIDxnIGlkPSdQYWdlLTEnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnPlxuXHQgICAgICAgIDxnIGlkPSdIb21lLVNjcmVlbi3igKItaVBob25lLVNFJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtMTY4LjAwMDAwMCwgLTExNS4wMDAwMDApJz5cblx0ICAgICAgICAgICAgPGcgaWQ9J0hvbWUtU2NyZWVuLeKAoi1pUGhvbmUtNnMtQ29weScgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMC4wMDAwMDAsIDI3LjAwMDAwMCknPlxuXHQgICAgICAgICAgICAgICAgPGcgaWQ9J01hcHMnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDE2OC4wMDAwMDAsIDg4LjAwMDAwMCknPlxuXHQgICAgICAgICAgICAgICAgICAgIDxtYXNrIGlkPSdtYXNrLTInIGZpbGw9J3doaXRlJz5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPScjcGF0aC0xJz48L3VzZT5cblx0ICAgICAgICAgICAgICAgICAgICA8L21hc2s+XG5cdCAgICAgICAgICAgICAgICAgICAgPHVzZSBpZD0nQkcnIGZpbGw9JyNFNEREQzknIHhsaW5rOmhyZWY9JyNwYXRoLTEnPjwvdXNlPlxuXHQgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSdCbG9jaycgZmlsbD0nIzc2QzYzQicgbWFzaz0ndXJsKCNtYXNrLTIpJyB4PScwJyB5PScwJyB3aWR0aD0nNDInIGhlaWdodD0nMTAnPjwvcmVjdD5cblx0ICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0nQmxvY2snIGZpbGw9JyNGQkM2RDEnIG1hc2s9J3VybCgjbWFzay0yKScgeD0nNDUnIHk9JzAuNScgd2lkdGg9JzE1JyBoZWlnaHQ9JzEwJz48L3JlY3Q+XG5cdCAgICAgICAgICAgICAgICAgICAgPGcgaWQ9J0hpZ2h3YXknIG1hc2s9J3VybCgjbWFzay0yKSc+XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgZmlsbD0nI0ZGREUwMicgZmlsbC1ydWxlPSdldmVub2RkJyB4bGluazpocmVmPScjcGF0aC0zJz48L3VzZT5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSBzdHJva2U9JyNGRUIzMTInIG1hc2s9J3VybCgjbWFzay00KScgc3Ryb2tlLXdpZHRoPScxJyB4bGluazpocmVmPScjcGF0aC0zJz48L3VzZT5cblx0ICAgICAgICAgICAgICAgICAgICA8L2c+XG5cdCAgICAgICAgICAgICAgICAgICAgPGcgaWQ9J01hcCcgbWFzaz0ndXJsKCNtYXNrLTIpJz5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSBmaWxsPScjRkZGRkZGJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIHhsaW5rOmhyZWY9JyNwYXRoLTUnPjwvdXNlPlxuXHQgICAgICAgICAgICAgICAgICAgICAgICA8dXNlIHN0cm9rZS1vcGFjaXR5PScwLjEnIHN0cm9rZT0nIzAwMDAwMCcgbWFzaz0ndXJsKCNtYXNrLTYpJyBzdHJva2Utd2lkdGg9JzEnIHhsaW5rOmhyZWY9JyNwYXRoLTUnPjwvdXNlPlxuXHQgICAgICAgICAgICAgICAgICAgIDwvZz5cblx0ICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSdNNDMuNjU2NTkxNCwzNS41IEw0My40NDg5Nzk2LDM1LjUgTDQzLjQ0ODk3OTYsMTcgTC0xLDE3IEwtMSwxMiBMNDguNSwxMiBMNDguNSwxNC41IEw0OC41LDE0LjUgTDQ4LjUsMzUuNSBMNDguMjkyMzg4MiwzNS41IEM0Ny41ODY4OTksMzUuMTc4OTk2IDQ2LjgwMTgxMSwzNSA0NS45NzQ0ODk4LDM1IEM0NS4xNDcxNjg1LDM1IDQ0LjM2MjA4MDYsMzUuMTc4OTk2IDQzLjY1NjU5MTQsMzUuNSBMNDMuNjU2NTkxNCwzNS41IFonIGlkPSdSb3V0ZScgZmlsbD0nIzQwOUJGRicgbWFzaz0ndXJsKCNtYXNrLTIpJz48L3BhdGg+XG5cdCAgICAgICAgICAgICAgICAgICAgPGcgaWQ9J0luZGljYXRvcicgbWFzaz0ndXJsKCNtYXNrLTIpJz5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoNDAuNTAwMDAwLCAzNS41MDAwMDApJz5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgaWQ9J0NpcmNsZScgZmlsbD0nIzAwN0FGRicgY3g9JzUuNScgY3k9JzUuNScgcj0nNS41Jz48L2NpcmNsZT5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSdBcnJvdycgZmlsbD0nI0ZGRkZGRicgcG9pbnRzPSc3Ljc1IDguNzUgNS41IDEuNjUzODA1OTIgMy4yNSA4Ljc1IDUuNSA2LjY1MzgwNTkyJz48L3BvbHlnb24+XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIDwvZz5cblx0ICAgICAgICAgICAgICAgICAgICA8L2c+XG5cdCAgICAgICAgICAgICAgICAgICAgPGcgaWQ9JzI4MCcgbWFzaz0ndXJsKCNtYXNrLTIpJz5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoOC4wMDAwMDAsIDIyLjUwMDAwMCknPlxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hc2sgaWQ9J21hc2stOScgZmlsbD0nd2hpdGUnPlxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0nI3BhdGgtNyc+PC91c2U+XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L21hc2s+XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0nT3ZhbC0yMCcgc3Ryb2tlPScjRkZGRkZGJyBtYXNrPSd1cmwoI21hc2stOCknIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nIzAwN0FGRicgZmlsbC1ydWxlPSdldmVub2RkJz5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dXNlIG1hc2s9J3VybCgjbWFzay0xMCknIHhsaW5rOmhyZWY9JyNwYXRoLTcnPjwvdXNlPlxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nPlxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9J1RvcCcgc3Ryb2tlPSdub25lJyBmaWxsPSdub25lJyBtYXNrPSd1cmwoI21hc2stOSknPlxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgZmlsbD0nYmxhY2snIGZpbGwtb3BhY2l0eT0nMScgZmlsdGVyPSd1cmwoI2ZpbHRlci0xMiknIHhsaW5rOmhyZWY9JyNwYXRoLTExJz48L3VzZT5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dXNlIGZpbGw9JyNERTFEMjYnIGZpbGwtcnVsZT0nZXZlbm9kZCcgeGxpbms6aHJlZj0nI3BhdGgtMTEnPjwvdXNlPlxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nPlxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9J1NoaWVsZCcgc3Ryb2tlPSdub25lJyBmaWxsPSdub25lJyBtYXNrPSd1cmwoI21hc2stOSknIHN0cm9rZS13aWR0aD0nMS41Jz5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dXNlIHN0cm9rZT0nI0ZGRkZGRicgbWFzaz0ndXJsKCNtYXNrLTE0KScgeGxpbms6aHJlZj0nI3BhdGgtMTMnPjwvdXNlPlxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nPlxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0nTTUuNjQsOS4zNzggTDYuNDA1LDkuMzc4IEM2LjM5ODk5OTk3LDkuMTg1OTk5MDQgNi40MTg0OTk3OCw4Ljk5NTUwMDk1IDYuNDYzNSw4LjgwNjUgQzYuNTA4NTAwMjMsOC42MTc0OTkwNiA2LjU4MTk5OTQ5LDguNDQ4MDAwNzUgNi42ODQsOC4yOTggQzYuNzg2MDAwNTEsOC4xNDc5OTkyNSA2LjkxNjQ5OTIxLDguMDI2NTAwNDcgNy4wNzU1LDcuOTMzNSBDNy4yMzQ1MDA4LDcuODQwNDk5NTQgNy40MjQ5OTg4OSw3Ljc5NCA3LjY0Nyw3Ljc5NCBDNy44MTUwMDA4NCw3Ljc5NCA3Ljk3Mzk5OTI1LDcuODIwOTk5NzMgOC4xMjQsNy44NzUgQzguMjc0MDAwNzUsNy45MjkwMDAyNyA4LjQwNDQ5OTQ1LDguMDA2OTk5NDkgOC41MTU1LDguMTA5IEM4LjYyNjUwMDU2LDguMjExMDAwNTEgOC43MTQ5OTk2Nyw4LjMzMjQ5OTMgOC43ODEsOC40NzM1IEM4Ljg0NzAwMDMzLDguNjE0NTAwNzEgOC44OCw4Ljc3MTk5OTEzIDguODgsOC45NDYgQzguODgsOS4xNjgwMDExMSA4Ljg0NTUwMDM1LDkuMzYyOTk5MTYgOC43NzY1LDkuNTMxIEM4LjcwNzQ5OTY2LDkuNjk5MDAwODQgOC42MDU1MDA2OCw5Ljg1NDk5OTI4IDguNDcwNSw5Ljk5OSBDOC4zMzU0OTkzMywxMC4xNDMwMDA3IDguMTY2MDAxMDIsMTAuMjg1NDk5MyA3Ljk2MiwxMC40MjY1IEM3Ljc1Nzk5ODk4LDEwLjU2NzUwMDcgNy41MjEwMDEzNSwxMC43MjE5OTkyIDcuMjUxLDEwLjg5IEM3LjAyODk5ODg5LDExLjAyMjAwMDcgNi44MTYwMDEwMiwxMS4xNjI5OTkzIDYuNjEyLDExLjMxMyBDNi40MDc5OTg5OCwxMS40NjMwMDA4IDYuMjI1MDAwODEsMTEuNjM2OTk5IDYuMDYzLDExLjgzNSBDNS45MDA5OTkxOSwxMi4wMzMwMDEgNS43Njc1MDA1MywxMi4yNjU0OTg3IDUuNjYyNSwxMi41MzI1IEM1LjU1NzQ5OTQ4LDEyLjc5OTUwMTMgNS40OTAwMDAxNSwxMy4xMjE5OTgxIDUuNDYsMTMuNSBMOS42MjcsMTMuNSBMOS42MjcsMTIuODI1IEw2LjM1MSwxMi44MjUgQzYuMzg3MDAwMTgsMTIuNjI2OTk5IDYuNDYzNDk5NDIsMTIuNDUxNTAwOCA2LjU4MDUsMTIuMjk4NSBDNi42OTc1MDA1OSwxMi4xNDU0OTkyIDYuODM4NDk5MTgsMTIuMDAzMDAwNyA3LjAwMzUsMTEuODcxIEM3LjE2ODUwMDgzLDExLjczODk5OTMgNy4zNDk5OTkwMSwxMS42MTQ1MDA2IDcuNTQ4LDExLjQ5NzUgQzcuNzQ2MDAwOTksMTEuMzgwNDk5NCA3Ljk0Mzk5OTAxLDExLjI2MjAwMDYgOC4xNDIsMTEuMTQyIEM4LjM0MDAwMDk5LDExLjAxNTk5OTQgOC41MzE5OTkwNywxMC44ODQwMDA3IDguNzE4LDEwLjc0NiBDOC45MDQwMDA5MywxMC42MDc5OTkzIDkuMDY4OTk5MjgsMTAuNDUzNTAwOSA5LjIxMywxMC4yODI1IEM5LjM1NzAwMDcyLDEwLjExMTQ5OTEgOS40NzI0OTk1Nyw5LjkxODAwMTA4IDkuNTU5NSw5LjcwMiBDOS42NDY1MDA0NCw5LjQ4NTk5ODkyIDkuNjksOS4yMzcwMDE0MSA5LjY5LDguOTU1IEM5LjY5LDguNjU0OTk4NSA5LjYzNzUwMDUzLDguMzkxMDAxMTQgOS41MzI1LDguMTYzIEM5LjQyNzQ5OTQ4LDcuOTM0OTk4ODYgOS4yODUwMDA5LDcuNzQ0NTAwNzcgOS4xMDUsNy41OTE1IEM4LjkyNDk5OTEsNy40Mzg0OTkyNCA4LjcxMzUwMTIyLDcuMzIxNTAwNDEgOC40NzA1LDcuMjQwNSBDOC4yMjc0OTg3OSw3LjE1OTQ5OTYgNy45NjgwMDEzOCw3LjExOSA3LjY5Miw3LjExOSBDNy4zNTU5OTgzMiw3LjExOSA3LjA1NjAwMTMyLDcuMTc1OTk5NDMgNi43OTIsNy4yOSBDNi41Mjc5OTg2OCw3LjQwNDAwMDU3IDYuMzA3NTAwODksNy41NjE0OTkgNi4xMzA1LDcuNzYyNSBDNS45NTM0OTkxMiw3Ljk2MzUwMTAxIDUuODIzMDAwNDIsOC4yMDE5OTg2MiA1LjczOSw4LjQ3OCBDNS42NTQ5OTk1OCw4Ljc1NDAwMTM4IDUuNjIxOTk5OTEsOS4wNTM5OTgzOCA1LjY0LDkuMzc4IEw1LjY0LDkuMzc4IFogTTExLjY0Myw4Ljc3NSBDMTEuNjQzLDguNjEyOTk5MTkgMTEuNjcyOTk5Nyw4LjQ3MjAwMDYgMTEuNzMzLDguMzUyIEMxMS43OTMwMDAzLDguMjMxOTk5NCAxMS44NzI0OTk1LDguMTMwMDAwNDIgMTEuOTcxNSw4LjA0NiBDMTIuMDcwNTAwNSw3Ljk2MTk5OTU4IDEyLjE4ODk5OTMsNy44OTkwMDAyMSAxMi4zMjcsNy44NTcgQzEyLjQ2NTAwMDcsNy44MTQ5OTk3OSAxMi42MDg5OTkzLDcuNzk0IDEyLjc1OSw3Ljc5NCBDMTMuMDcxMDAxNiw3Ljc5NCAxMy4zMjc0OTksNy44NzY0OTkxOCAxMy41Mjg1LDguMDQxNSBDMTMuNzI5NTAxLDguMjA2NTAwODMgMTMuODMsOC40NTA5OTgzOCAxMy44Myw4Ljc3NSBDMTMuODMsOS4wOTkwMDE2MiAxMy43MzEwMDEsOS4zNTA5OTkxIDEzLjUzMyw5LjUzMSBDMTMuMzM0OTk5LDkuNzExMDAwOSAxMy4wODMwMDE1LDkuODAxIDEyLjc3Nyw5LjgwMSBDMTIuNjIwOTk5Miw5LjgwMSAxMi40NzQwMDA3LDkuNzgwMDAwMjEgMTIuMzM2LDkuNzM4IEMxMi4xOTc5OTkzLDkuNjk1OTk5NzkgMTIuMDc4MDAwNSw5LjYzMzAwMDQyIDExLjk3Niw5LjU0OSBDMTEuODczOTk5NSw5LjQ2NDk5OTU4IDExLjc5MzAwMDMsOS4zNTg1MDA2NSAxMS43MzMsOS4yMjk1IEMxMS42NzI5OTk3LDkuMTAwNDk5MzYgMTEuNjQzLDguOTQ5MDAwODcgMTEuNjQzLDguNzc1IEwxMS42NDMsOC43NzUgWiBNMTAuODMzLDguNzQ4IEMxMC44MzMsOS4wMzYwMDE0NCAxMC45MTM5OTkyLDkuMzAxNDk4NzkgMTEuMDc2LDkuNTQ0NSBDMTEuMjM4MDAwOCw5Ljc4NzUwMTIyIDExLjQ1Mzk5ODcsOS45NjI5OTk0NiAxMS43MjQsMTAuMDcxIEMxMS4zNjM5OTgyLDEwLjE5NzAwMDYgMTEuMDg4MDAxLDEwLjM5OTQ5ODYgMTAuODk2LDEwLjY3ODUgQzEwLjcwMzk5OSwxMC45NTc1MDE0IDEwLjYwOCwxMS4yODU5OTgxIDEwLjYwOCwxMS42NjQgQzEwLjYwOCwxMS45ODgwMDE2IDEwLjY2MzQ5OTQsMTIuMjcxNDk4OCAxMC43NzQ1LDEyLjUxNDUgQzEwLjg4NTUwMDYsMTIuNzU3NTAxMiAxMS4wMzg0OTksMTIuOTU5OTk5MiAxMS4yMzM1LDEzLjEyMiBDMTEuNDI4NTAxLDEzLjI4NDAwMDggMTEuNjU3OTk4NywxMy40MDM5OTk2IDExLjkyMiwxMy40ODIgQzEyLjE4NjAwMTMsMTMuNTYwMDAwNCAxMi40NzA5OTg1LDEzLjU5OSAxMi43NzcsMTMuNTk5IEMxMy4wNzEwMDE1LDEzLjU5OSAxMy4zNDY5OTg3LDEzLjU1NzAwMDQgMTMuNjA1LDEzLjQ3MyBDMTMuODYzMDAxMywxMy4zODg5OTk2IDE0LjA4NjQ5OTEsMTMuMjY0NTAwOCAxNC4yNzU1LDEzLjA5OTUgQzE0LjQ2NDUwMDksMTIuOTM0NDk5MiAxNC42MTQ0OTk0LDEyLjczMjAwMTIgMTQuNzI1NSwxMi40OTIgQzE0LjgzNjUwMDYsMTIuMjUxOTk4OCAxNC44OTIsMTEuOTc2MDAxNiAxNC44OTIsMTEuNjY0IEMxNC44OTIsMTEuMjY3OTk4IDE0Ljc5OTAwMDksMTAuOTMzNTAxNCAxNC42MTMsMTAuNjYwNSBDMTQuNDI2OTk5MSwxMC4zODc0OTg2IDE0LjE0MjAwMTksMTAuMTkxMDAwNiAxMy43NTgsMTAuMDcxIEMxNC4wMjgwMDE0LDkuOTUwOTk5NCAxNC4yNDI0OTkyLDkuNzcyNTAxMTkgMTQuNDAxNSw5LjUzNTUgQzE0LjU2MDUwMDgsOS4yOTg0OTg4MiAxNC42NCw5LjAzNjAwMTQ0IDE0LjY0LDguNzQ4IEMxNC42NCw4LjU0Mzk5ODk4IDE0LjYwNDAwMDQsOC4zNDQ1MDA5OCAxNC41MzIsOC4xNDk1IEMxNC40NTk5OTk2LDcuOTU0NDk5MDMgMTQuMzQ3NTAwOCw3Ljc4MDUwMDc3IDE0LjE5NDUsNy42Mjc1IEMxNC4wNDE0OTkyLDcuNDc0NDk5MjQgMTMuODQyMDAxMiw3LjM1MTUwMDQ3IDEzLjU5Niw3LjI1ODUgQzEzLjM0OTk5ODgsNy4xNjU0OTk1NCAxMy4wNTMwMDE3LDcuMTE5IDEyLjcwNSw3LjExOSBDMTIuNDU4OTk4OCw3LjExOSAxMi4yMjM1MDExLDcuMTU0OTk5NjQgMTEuOTk4NSw3LjIyNyBDMTEuNzczNDk4OSw3LjI5OTAwMDM2IDExLjU3NDAwMDksNy40MDM5OTkzMSAxMS40LDcuNTQyIEMxMS4yMjU5OTkxLDcuNjgwMDAwNjkgMTEuMDg4MDAwNSw3Ljg0OTQ5OSAxMC45ODYsOC4wNTA1IEMxMC44ODM5OTk1LDguMjUxNTAxMDEgMTAuODMzLDguNDgzOTk4NjggMTAuODMzLDguNzQ4IEwxMC44MzMsOC43NDggWiBNMTEuNDE4LDExLjcgQzExLjQxOCwxMS41MTM5OTkxIDExLjQ1MjQ5OTcsMTEuMzQ2MDAwOCAxMS41MjE1LDExLjE5NiBDMTEuNTkwNTAwMywxMS4wNDU5OTkzIDExLjY4NjQ5OTQsMTAuOTE3MDAwNSAxMS44MDk1LDEwLjgwOSBDMTEuOTMyNTAwNiwxMC43MDA5OTk1IDEyLjA3NjQ5OTIsMTAuNjE4NTAwMyAxMi4yNDE1LDEwLjU2MTUgQzEyLjQwNjUwMDgsMTAuNTA0NDk5NyAxMi41ODE5OTkxLDEwLjQ3NiAxMi43NjgsMTAuNDc2IEMxMi45NDgwMDA5LDEwLjQ3NiAxMy4xMTc0OTkyLDEwLjUwNzQ5OTcgMTMuMjc2NSwxMC41NzA1IEMxMy40MzU1MDA4LDEwLjYzMzUwMDMgMTMuNTc0OTk5NCwxMC43MTg5OTk1IDEzLjY5NSwxMC44MjcgQzEzLjgxNTAwMDYsMTAuOTM1MDAwNSAxMy45MDk0OTk3LDExLjA2MjQ5OTMgMTMuOTc4NSwxMS4yMDk1IEMxNC4wNDc1MDAzLDExLjM1NjUwMDcgMTQuMDgyLDExLjUxNjk5OTEgMTQuMDgyLDExLjY5MSBDMTQuMDgyLDExLjg3MTAwMDkgMTQuMDUwNTAwMywxMi4wMzU5OTkzIDEzLjk4NzUsMTIuMTg2IEMxMy45MjQ0OTk3LDEyLjMzNjAwMDggMTMuODM0NTAwNiwxMi40NjY0OTk0IDEzLjcxNzUsMTIuNTc3NSBDMTMuNjAwNDk5NCwxMi42ODg1MDA2IDEzLjQ2MjUwMDgsMTIuNzc1NDk5NyAxMy4zMDM1LDEyLjgzODUgQzEzLjE0NDQ5OTIsMTIuOTAxNTAwMyAxMi45NjkwMDEsMTIuOTMzIDEyLjc3NywxMi45MzMgQzEyLjM4MDk5OCwxMi45MzMgMTIuMDU1NTAxMywxMi44MjM1MDExIDExLjgwMDUsMTIuNjA0NSBDMTEuNTQ1NDk4NywxMi4zODU0OTg5IDExLjQxOCwxMi4wODQwMDE5IDExLjQxOCwxMS43IEwxMS40MTgsMTEuNyBaIE0xNi40NCwxMC4zNTkgQzE2LjQ0LDEwLjIwMjk5OTIgMTYuNDQxNSwxMC4wMzA1MDA5IDE2LjQ0NDUsOS44NDE1IEMxNi40NDc1LDkuNjUyNDk5MDYgMTYuNDYyNDk5OSw5LjQ2MzUwMDk1IDE2LjQ4OTUsOS4yNzQ1IEMxNi41MTY1MDAxLDkuMDg1NDk5MDYgMTYuNTU1NDk5Nyw4LjkwMTAwMDkgMTYuNjA2NSw4LjcyMSBDMTYuNjU3NTAwMyw4LjU0MDk5OTEgMTYuNzMyNDk5NSw4LjM4MzUwMDY4IDE2LjgzMTUsOC4yNDg1IEMxNi45MzA1MDA1LDguMTEzNDk5MzMgMTcuMDU0OTk5Myw4LjAwNDAwMDQyIDE3LjIwNSw3LjkyIEMxNy4zNTUwMDA4LDcuODM1OTk5NTggMTcuNTM3OTk4OSw3Ljc5NCAxNy43NTQsNy43OTQgQzE3Ljk3MDAwMTEsNy43OTQgMTguMTUyOTk5Myw3LjgzNTk5OTU4IDE4LjMwMyw3LjkyIEMxOC40NTMwMDA4LDguMDA0MDAwNDIgMTguNTc3NDk5NSw4LjExMzQ5OTMzIDE4LjY3NjUsOC4yNDg1IEMxOC43NzU1MDA1LDguMzgzNTAwNjggMTguODUwNDk5Nyw4LjU0MDk5OTEgMTguOTAxNSw4LjcyMSBDMTguOTUyNTAwMyw4LjkwMTAwMDkgMTguOTkxNDk5OSw5LjA4NTQ5OTA2IDE5LjAxODUsOS4yNzQ1IEMxOS4wNDU1MDAxLDkuNDYzNTAwOTUgMTkuMDYwNSw5LjY1MjQ5OTA2IDE5LjA2MzUsOS44NDE1IEMxOS4wNjY1LDEwLjAzMDUwMDkgMTkuMDY4LDEwLjIwMjk5OTIgMTkuMDY4LDEwLjM1OSBDMTkuMDY4LDEwLjU5OTAwMTIgMTkuMDYwNTAwMSwxMC44Njc0OTg1IDE5LjA0NTUsMTEuMTY0NSBDMTkuMDMwNDk5OSwxMS40NjE1MDE1IDE4Ljk4MjUwMDQsMTEuNzQwNDk4NyAxOC45MDE1LDEyLjAwMTUgQzE4LjgyMDQ5OTYsMTIuMjYyNTAxMyAxOC42OTAwMDA5LDEyLjQ4Mjk5OTEgMTguNTEsMTIuNjYzIEMxOC4zMjk5OTkxLDEyLjg0MzAwMDkgMTguMDc4MDAxNiwxMi45MzMgMTcuNzU0LDEyLjkzMyBDMTcuNDI5OTk4NCwxMi45MzMgMTcuMTc4MDAwOSwxMi44NDMwMDA5IDE2Ljk5OCwxMi42NjMgQzE2LjgxNzk5OTEsMTIuNDgyOTk5MSAxNi42ODc1MDA0LDEyLjI2MjUwMTMgMTYuNjA2NSwxMi4wMDE1IEMxNi41MjU0OTk2LDExLjc0MDQ5ODcgMTYuNDc3NTAwMSwxMS40NjE1MDE1IDE2LjQ2MjUsMTEuMTY0NSBDMTYuNDQ3NDk5OSwxMC44Njc0OTg1IDE2LjQ0LDEwLjU5OTAwMTIgMTYuNDQsMTAuMzU5IEwxNi40NCwxMC4zNTkgWiBNMTUuNjMsMTAuMzY4IEMxNS42MywxMC42MDIwMDEyIDE1LjYzNTk5OTksMTAuODQ0OTk4NyAxNS42NDgsMTEuMDk3IEMxNS42NjAwMDAxLDExLjM0OTAwMTMgMTUuNjg5OTk5OCwxMS41OTQ5OTg4IDE1LjczOCwxMS44MzUgQzE1Ljc4NjAwMDIsMTIuMDc1MDAxMiAxNS44NTQ5OTk2LDEyLjMwMTQ5ODkgMTUuOTQ1LDEyLjUxNDUgQzE2LjAzNTAwMDUsMTIuNzI3NTAxMSAxNi4xNTc5OTkyLDEyLjkxNDk5OTIgMTYuMzE0LDEzLjA3NyBDMTYuNDcwMDAwOCwxMy4yMzkwMDA4IDE2LjY2NjQ5ODgsMTMuMzY2NDk5NSAxNi45MDM1LDEzLjQ1OTUgQzE3LjE0MDUwMTIsMTMuNTUyNTAwNSAxNy40MjM5OTg0LDEzLjU5OSAxNy43NTQsMTMuNTk5IEMxOC4wOTAwMDE3LDEzLjU5OSAxOC4zNzQ5OTg4LDEzLjU1MjUwMDUgMTguNjA5LDEzLjQ1OTUgQzE4Ljg0MzAwMTIsMTMuMzY2NDk5NSAxOS4wMzc5OTkyLDEzLjIzOTAwMDggMTkuMTk0LDEzLjA3NyBDMTkuMzUwMDAwOCwxMi45MTQ5OTkyIDE5LjQ3Mjk5OTYsMTIuNzI3NTAxMSAxOS41NjMsMTIuNTE0NSBDMTkuNjUzMDAwNSwxMi4zMDE0OTg5IDE5LjcyMTk5OTgsMTIuMDc1MDAxMiAxOS43NywxMS44MzUgQzE5LjgxODAwMDIsMTEuNTk0OTk4OCAxOS44NDc5OTk5LDExLjM0OTAwMTMgMTkuODYsMTEuMDk3IEMxOS44NzIwMDAxLDEwLjg0NDk5ODcgMTkuODc4LDEwLjYwMjAwMTIgMTkuODc4LDEwLjM2OCBDMTkuODc4LDEwLjEzMzk5ODggMTkuODcyMDAwMSw5Ljg5MTAwMTI2IDE5Ljg2LDkuNjM5IEMxOS44NDc5OTk5LDkuMzg2OTk4NzQgMTkuODE4MDAwMiw5LjE0MTAwMTIgMTkuNzcsOC45MDEgQzE5LjcyMTk5OTgsOC42NjA5OTg4IDE5LjY1MzAwMDUsOC40MzMwMDEwOCAxOS41NjMsOC4yMTcgQzE5LjQ3Mjk5OTYsOC4wMDA5OTg5MiAxOS4zNTAwMDA4LDcuODEyMDAwODEgMTkuMTk0LDcuNjUgQzE5LjAzNzk5OTIsNy40ODc5OTkxOSAxOC44NDE1MDEyLDcuMzU5MDAwNDggMTguNjA0NSw3LjI2MyBDMTguMzY3NDk4OCw3LjE2Njk5OTUyIDE4LjA4NDAwMTcsNy4xMTkgMTcuNzU0LDcuMTE5IEMxNy40MjM5OTg0LDcuMTE5IDE3LjE0MDUwMTIsNy4xNjY5OTk1MiAxNi45MDM1LDcuMjYzIEMxNi42NjY0OTg4LDcuMzU5MDAwNDggMTYuNDcwMDAwOCw3LjQ4Nzk5OTE5IDE2LjMxNCw3LjY1IEMxNi4xNTc5OTkyLDcuODEyMDAwODEgMTYuMDM1MDAwNSw4LjAwMDk5ODkyIDE1Ljk0NSw4LjIxNyBDMTUuODU0OTk5Niw4LjQzMzAwMTA4IDE1Ljc4NjAwMDIsOC42NjA5OTg4IDE1LjczOCw4LjkwMSBDMTUuNjg5OTk5OCw5LjE0MTAwMTIgMTUuNjYwMDAwMSw5LjM4Njk5ODc0IDE1LjY0OCw5LjYzOSBDMTUuNjM1OTk5OSw5Ljg5MTAwMTI2IDE1LjYzLDEwLjEzMzk5ODggMTUuNjMsMTAuMzY4IEwxNS42MywxMC4zNjggWicgaWQ9JzI4MCcgc3Ryb2tlPSdub25lJyBmaWxsPScjRkZGRkZGJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIG1hc2s9J3VybCgjbWFzay05KSc+PC9wYXRoPlxuXHQgICAgICAgICAgICAgICAgICAgICAgICA8L2c+XG5cdCAgICAgICAgICAgICAgICAgICAgPC9nPlxuXHQgICAgICAgICAgICAgICAgPC9nPlxuXHQgICAgICAgICAgICA8L2c+XG5cdCAgICAgICAgPC9nPlxuXHQgICAgPC9nPlxuXHQ8L3N2Zz5cIlxuXHRuZXdzX2FwcDpcIjw/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyc/PlxuXHQ8c3ZnIHdpZHRoPSc2MHB4JyBoZWlnaHQ9JzYwcHgnIHZpZXdCb3g9JzAgMCA2MCA2MCcgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJz5cblx0ICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMzkuMSAoMzE3MjApIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHQgICAgPHRpdGxlPk5ld3M8L3RpdGxlPlxuXHQgICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdCAgICA8ZGVmcz5cblx0ICAgICAgICA8bGluZWFyR3JhZGllbnQgeDE9JzUwJScgeTE9JzAlJyB4Mj0nNTAlJyB5Mj0nMTAwJScgaWQ9J2xpbmVhckdyYWRpZW50LTEnPlxuXHQgICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPScjRkM1MzYzJyBvZmZzZXQ9JzAlJz48L3N0b3A+XG5cdCAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9JyNGQzMzNTknIG9mZnNldD0nMTAwJSc+PC9zdG9wPlxuXHQgICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XG5cdCAgICAgICAgPHBhdGggZD0nTTEwLjEzNjYyNCw0Ny4zODIzODUzIEMxMSw0Ny4zODIzODUzIDExLDQ2LjUgMTEsNDYuNSBMMTEsMTIuMDA1MjYxNyBDMTEsMTEuNDUwMDcxIDExLjQ1MzIzMDMsMTEgMTEuOTk2ODc1NCwxMSBMNDguMDAzMTI0NiwxMSBDNDguNTUzNjgzNywxMSA0OSwxMS40NDEzMDMyIDQ5LDEyLjAwODg0OTggTDQ5LDQ2Ljk5MTE1MDIgQzQ5LDQ3LjU0ODMyMjYgNDguNTQzOTI1LDQ4LjAwMjkwMzQgNDcuOTk2NDA3Niw0OC4wMDYyNzgyIEM0Ny45OTY0MDc2LDQ4LjAwNjI3ODIgMTguNjA4NDgzMSw0OC4xOTk3NTQ0IDExLjAwMDAwMDEsNDggQzEwLjExNzQxMTMsNDcuOTc2ODI4NCA5LjQxNjYyNTk4LDQ3LjY2ODQ1NyA5LjA1NzU1NjE1LDQ3LjM4MjM4NTMgQzguNjk4NDg2MzMsNDcuMDk2MzEzNSA4LjM2MzA5ODE1LDQ2LjcxMTY0NjIgOC4zNjMwOTgxNCw0Ni42NjA3MDU2IEM4LjM2MzA5ODE0LDQ2LjQ1NzQ3MiA5LjI3MzI0Nzk2LDQ3LjM4MjM4NTMgMTAuMTM2NjI0LDQ3LjM4MjM4NTMgWicgaWQ9J3BhdGgtMic+PC9wYXRoPlxuXHQgICAgICAgIDxmaWx0ZXIgeD0nLTUwJScgeT0nLTUwJScgd2lkdGg9JzIwMCUnIGhlaWdodD0nMjAwJScgZmlsdGVyVW5pdHM9J29iamVjdEJvdW5kaW5nQm94JyBpZD0nZmlsdGVyLTQnPlxuXHQgICAgICAgICAgICA8ZmVPZmZzZXQgZHg9Jy0xJyBkeT0nMCcgaW49J1NvdXJjZUFscGhhJyByZXN1bHQ9J3NoYWRvd09mZnNldE91dGVyMSc+PC9mZU9mZnNldD5cblx0ICAgICAgICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0nMScgaW49J3NoYWRvd09mZnNldE91dGVyMScgcmVzdWx0PSdzaGFkb3dCbHVyT3V0ZXIxJz48L2ZlR2F1c3NpYW5CbHVyPlxuXHQgICAgICAgICAgICA8ZmVDb2xvck1hdHJpeCB2YWx1ZXM9JzAgMCAwIDAgMCAgIDAgMCAwIDAgMCAgIDAgMCAwIDAgMCAgMCAwIDAgMC4yNSAwJyB0eXBlPSdtYXRyaXgnIGluPSdzaGFkb3dCbHVyT3V0ZXIxJz48L2ZlQ29sb3JNYXRyaXg+XG5cdCAgICAgICAgPC9maWx0ZXI+XG5cdCAgICA8L2RlZnM+XG5cdCAgICA8ZyBpZD0nUGFnZS0xJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJz5cblx0ICAgICAgICA8ZyBpZD0nSG9tZS1TY3JlZW4t4oCiLWlQaG9uZS1TRScgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTI0NC4wMDAwMDAsIC0xMTUuMDAwMDAwKSc+XG5cdCAgICAgICAgICAgIDxnIGlkPSdIb21lLVNjcmVlbi3igKItaVBob25lLTZzLUNvcHknIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDAuMDAwMDAwLCAyNy4wMDAwMDApJz5cblx0ICAgICAgICAgICAgICAgIDxnIGlkPSdOZXdzJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgyNDQuMDAwMDAwLCA4OC4wMDAwMDApJz5cblx0ICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0nQkcnIGZpbGw9J3VybCgjbGluZWFyR3JhZGllbnQtMSknIHg9JzAnIHk9JzAnIHdpZHRoPSc2MCcgaGVpZ2h0PSc2MCcgcng9JzE0Jz48L3JlY3Q+XG5cdCAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0nTTgsNDUuOTE2NTI2MiBMOCwxNi45OTUzNzY0IEM4LDE2LjQ0NTY0NTIgOC40NTUyNjI4OCwxNiA4Ljk5NTQ1NzAzLDE2IEwzMi4wMDQ1NDMsMTYgQzMyLjU1NDMxODcsMTYgMzMsMTYuNDUyMzYyMSAzMywxNi45OTI3ODY0IEwzMyw0Ny4wMDcyMTM2IEMzMyw0Ny41NTU1MTQ0IDMyLjU0NDczNzEsNDggMzIuMDA0NTQzLDQ4IEwxMC45OTA3NTIyLDQ4IEM5LjMzOTAwNTM4LDQ4IDgsNDYuNjU2OTQ3NSA4LDQ1LjkxNjUyNjIgTDgsNDUuOTE2NTI2MiBaJyBpZD0nRm9sZCcgZmlsbD0nI0ZGRkZGRic+PC9wYXRoPlxuXHQgICAgICAgICAgICAgICAgICAgIDxtYXNrIGlkPSdtYXNrLTMnIGZpbGw9J3doaXRlJz5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPScjcGF0aC0yJz48L3VzZT5cblx0ICAgICAgICAgICAgICAgICAgICA8L21hc2s+XG5cdCAgICAgICAgICAgICAgICAgICAgPGcgaWQ9J01hc2snPlxuXHQgICAgICAgICAgICAgICAgICAgICAgICA8dXNlIGZpbGw9J2JsYWNrJyBmaWxsLW9wYWNpdHk9JzEnIGZpbHRlcj0ndXJsKCNmaWx0ZXItNCknIHhsaW5rOmhyZWY9JyNwYXRoLTInPjwvdXNlPlxuXHQgICAgICAgICAgICAgICAgICAgICAgICA8dXNlIGZpbGw9JyNGRkZGRkYnIGZpbGwtcnVsZT0nZXZlbm9kZCcgeGxpbms6aHJlZj0nI3BhdGgtMic+PC91c2U+XG5cdCAgICAgICAgICAgICAgICAgICAgPC9nPlxuXHQgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSdsaW5lcycgZmlsbD0nI0JEQkRCRCcgbWFzaz0ndXJsKCNtYXNrLTMpJyB4PScxNycgeT0nMzUnIHdpZHRoPSczMycgaGVpZ2h0PScyJyByeD0nMSc+PC9yZWN0PlxuXHQgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSdsaW5lcycgZmlsbD0nI0JEQkRCRCcgbWFzaz0ndXJsKCNtYXNrLTMpJyB4PScxNycgeT0nMzknIHdpZHRoPSczMycgaGVpZ2h0PScyJyByeD0nMSc+PC9yZWN0PlxuXHQgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSdsaW5lcycgZmlsbD0nI0JEQkRCRCcgbWFzaz0ndXJsKCNtYXNrLTMpJyB4PScxNycgeT0nNDMnIHdpZHRoPSczMycgaGVpZ2h0PScyJyByeD0nMSc+PC9yZWN0PlxuXHQgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9J00xNiwyMC4xMjEzMjAzIEwxNiwxNi45OTc2NTY3IEMxNiwxNi40NDY2NjYxIDE2LjQ0MTA1MzUsMTYgMTYuOTk3NjU2NywxNiBMMjAuMTIxMzIwMywxNiBMMjAsMTYuMTIxMzIwMyBMMzEsMjcuMTIxMzIwMyBMMzEsMzAuMDAxMTQzNiBDMzEsMzAuNTUyNzk2OCAzMC41NTUwNjYxLDMxIDMwLjAwMTE0MzYsMzEgTDI3LjEyMTMyMDMsMzEgTDE2LjEyMTMyMDMsMjAgTDE2LDIwLjEyMTMyMDMgTDE2LDIwLjEyMTMyMDMgWiBNMTYsMjkuOTk5NzgwOSBDMTYsMzAuNTUyMTg2NyAxNi40NTEzMjk0LDMxIDE3LjAwMDIxOTEsMzEgTDIxLjg3ODQ2MDYsMzEgQzIyLjQzMDg2NjMsMzEgMjIuNTY1MjQyNywzMC42ODY1NjMxIDIyLjE2ODQ0ODQsMzAuMjg5NzY4OCBMMTYuNzEwMjMxMiwyNC44MzE1NTE2IEMxNi4zMTc5ODE0LDI0LjQzOTMwMTcgMTYsMjQuNTcyNjQ5NyAxNiwyNS4xMjE1Mzk0IEwxNiwyOS45OTk3ODA5IFogTTI5Ljk5OTc4MDksMTYgQzMwLjU1MjE4NjcsMTYgMzEsMTYuNDUxMzI5NCAzMSwxNy4wMDAyMTkxIEwzMSwyMS44Nzg0NjA2IEMzMSwyMi40MzA4NjYzIDMwLjY4NzM4NTUsMjIuNTY2MDY1MiAzMC4yOTU2OTg5LDIyLjE3NDM3ODUgTDI5LjU5MTM5NzcsMjEuNDcwMDc3NCBMMjQuODI1MjM5LDE2LjcwMzkxODYgQzI0LjQzNjQ3NTQsMTYuMzE1MTU1MSAyNC41NzI2NDk3LDE2IDI1LjEyMTUzOTQsMTYgTDI5Ljk5OTc4MDksMTYgWicgaWQ9J0xvZ28nIGZpbGw9JyNGRDRDNjEnIG1hc2s9J3VybCgjbWFzay0zKSc+PC9wYXRoPlxuXHQgICAgICAgICAgICAgICAgPC9nPlxuXHQgICAgICAgICAgICA8L2c+XG5cdCAgICAgICAgPC9nPlxuXHQgICAgPC9nPlxuXHQ8L3N2Zz5cIlxuXHR3YWxsZXRfYXBwOlwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdDxzdmcgd2lkdGg9JzYwcHgnIGhlaWdodD0nNjBweCcgdmlld0JveD0nMCAwIDYwIDYwJyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnPlxuXHQgICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzOS4xICgzMTcyMCkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdCAgICA8dGl0bGU+V2FsbGV0PC90aXRsZT5cblx0ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHQgICAgPGRlZnM+XG5cdCAgICAgICAgPGxpbmVhckdyYWRpZW50IHgxPSc1MCUnIHkxPScwJScgeDI9JzUwJScgeTI9JzEwMCUnIGlkPSdsaW5lYXJHcmFkaWVudC0xJz5cblx0ICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0nIzFFMUUxRicgb2Zmc2V0PScwJSc+PC9zdG9wPlxuXHQgICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPScjMUUxRTFGJyBvZmZzZXQ9JzEwMCUnPjwvc3RvcD5cblx0ICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxuXHQgICAgICAgIDxyZWN0IGlkPSdwYXRoLTInIHg9JzknIHk9JzE1JyB3aWR0aD0nNDInIGhlaWdodD0nMTMnIHJ4PScyJz48L3JlY3Q+XG5cdCAgICAgICAgPGZpbHRlciB4PSctNTAlJyB5PSctNTAlJyB3aWR0aD0nMjAwJScgaGVpZ2h0PScyMDAlJyBmaWx0ZXJVbml0cz0nb2JqZWN0Qm91bmRpbmdCb3gnIGlkPSdmaWx0ZXItMyc+XG5cdCAgICAgICAgICAgIDxmZU9mZnNldCBkeD0nMCcgZHk9JzAnIGluPSdTb3VyY2VBbHBoYScgcmVzdWx0PSdzaGFkb3dPZmZzZXRPdXRlcjEnPjwvZmVPZmZzZXQ+XG5cdCAgICAgICAgICAgIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249JzAuNScgaW49J3NoYWRvd09mZnNldE91dGVyMScgcmVzdWx0PSdzaGFkb3dCbHVyT3V0ZXIxJz48L2ZlR2F1c3NpYW5CbHVyPlxuXHQgICAgICAgICAgICA8ZmVDb2xvck1hdHJpeCB2YWx1ZXM9JzAgMCAwIDAgMCAgIDAgMCAwIDAgMCAgIDAgMCAwIDAgMCAgMCAwIDAgMC4xIDAnIHR5cGU9J21hdHJpeCcgaW49J3NoYWRvd0JsdXJPdXRlcjEnPjwvZmVDb2xvck1hdHJpeD5cblx0ICAgICAgICA8L2ZpbHRlcj5cblx0ICAgICAgICA8cmVjdCBpZD0ncGF0aC00JyB4PSc5JyB5PScxOCcgd2lkdGg9JzQyJyBoZWlnaHQ9JzEzJyByeD0nMic+PC9yZWN0PlxuXHQgICAgICAgIDxmaWx0ZXIgeD0nLTUwJScgeT0nLTUwJScgd2lkdGg9JzIwMCUnIGhlaWdodD0nMjAwJScgZmlsdGVyVW5pdHM9J29iamVjdEJvdW5kaW5nQm94JyBpZD0nZmlsdGVyLTUnPlxuXHQgICAgICAgICAgICA8ZmVPZmZzZXQgZHg9JzAnIGR5PScwJyBpbj0nU291cmNlQWxwaGEnIHJlc3VsdD0nc2hhZG93T2Zmc2V0T3V0ZXIxJz48L2ZlT2Zmc2V0PlxuXHQgICAgICAgICAgICA8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPScwLjUnIGluPSdzaGFkb3dPZmZzZXRPdXRlcjEnIHJlc3VsdD0nc2hhZG93Qmx1ck91dGVyMSc+PC9mZUdhdXNzaWFuQmx1cj5cblx0ICAgICAgICAgICAgPGZlQ29sb3JNYXRyaXggdmFsdWVzPScwIDAgMCAwIDAgICAwIDAgMCAwIDAgICAwIDAgMCAwIDAgIDAgMCAwIDAuMSAwJyB0eXBlPSdtYXRyaXgnIGluPSdzaGFkb3dCbHVyT3V0ZXIxJz48L2ZlQ29sb3JNYXRyaXg+XG5cdCAgICAgICAgPC9maWx0ZXI+XG5cdCAgICAgICAgPHJlY3QgaWQ9J3BhdGgtNicgeD0nOScgeT0nMjEnIHdpZHRoPSc0MicgaGVpZ2h0PScxMycgcng9JzInPjwvcmVjdD5cblx0ICAgICAgICA8ZmlsdGVyIHg9Jy01MCUnIHk9Jy01MCUnIHdpZHRoPScyMDAlJyBoZWlnaHQ9JzIwMCUnIGZpbHRlclVuaXRzPSdvYmplY3RCb3VuZGluZ0JveCcgaWQ9J2ZpbHRlci03Jz5cblx0ICAgICAgICAgICAgPGZlT2Zmc2V0IGR4PScwJyBkeT0nMCcgaW49J1NvdXJjZUFscGhhJyByZXN1bHQ9J3NoYWRvd09mZnNldE91dGVyMSc+PC9mZU9mZnNldD5cblx0ICAgICAgICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0nMC41JyBpbj0nc2hhZG93T2Zmc2V0T3V0ZXIxJyByZXN1bHQ9J3NoYWRvd0JsdXJPdXRlcjEnPjwvZmVHYXVzc2lhbkJsdXI+XG5cdCAgICAgICAgICAgIDxmZUNvbG9yTWF0cml4IHZhbHVlcz0nMCAwIDAgMCAwICAgMCAwIDAgMCAwICAgMCAwIDAgMCAwICAwIDAgMCAwLjEgMCcgdHlwZT0nbWF0cml4JyBpbj0nc2hhZG93Qmx1ck91dGVyMSc+PC9mZUNvbG9yTWF0cml4PlxuXHQgICAgICAgIDwvZmlsdGVyPlxuXHQgICAgICAgIDxyZWN0IGlkPSdwYXRoLTgnIHg9JzknIHk9JzI1JyB3aWR0aD0nNDInIGhlaWdodD0nMTMnIHJ4PScyJz48L3JlY3Q+XG5cdCAgICAgICAgPGZpbHRlciB4PSctNTAlJyB5PSctNTAlJyB3aWR0aD0nMjAwJScgaGVpZ2h0PScyMDAlJyBmaWx0ZXJVbml0cz0nb2JqZWN0Qm91bmRpbmdCb3gnIGlkPSdmaWx0ZXItOSc+XG5cdCAgICAgICAgICAgIDxmZU9mZnNldCBkeD0nMCcgZHk9JzAnIGluPSdTb3VyY2VBbHBoYScgcmVzdWx0PSdzaGFkb3dPZmZzZXRPdXRlcjEnPjwvZmVPZmZzZXQ+XG5cdCAgICAgICAgICAgIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249JzAuNScgaW49J3NoYWRvd09mZnNldE91dGVyMScgcmVzdWx0PSdzaGFkb3dCbHVyT3V0ZXIxJz48L2ZlR2F1c3NpYW5CbHVyPlxuXHQgICAgICAgICAgICA8ZmVDb2xvck1hdHJpeCB2YWx1ZXM9JzAgMCAwIDAgMCAgIDAgMCAwIDAgMCAgIDAgMCAwIDAgMCAgMCAwIDAgMC4xIDAnIHR5cGU9J21hdHJpeCcgaW49J3NoYWRvd0JsdXJPdXRlcjEnPjwvZmVDb2xvck1hdHJpeD5cblx0ICAgICAgICA8L2ZpbHRlcj5cblx0ICAgICAgICA8cGF0aCBkPSdNNywyOCBMNyw0MiBMNTMsNDIgTDUzLDI4IEwzOC45MDY1MDczLDI4IEMzNy43OTgzMzM5LDI4IDM2LjMwNTc1NTgsMjguNjcyMjIyOSAzNS41NTAxMjM3LDI5LjQ3ODQ4ODIgQzM1LjU1MDEyMzcsMjkuNDc4NDg4MiAzMi40MTg5NTc5LDMzLjMwNzY5MjMgMzAsMzMuMzA3NjkyMyBDMjcuNTgxMDQyMSwzMy4zMDc2OTIzIDI0LjQ0OTg3NjMsMjkuNDc4NDg4MiAyNC40NDk4NzYzLDI5LjQ3ODQ4ODIgQzIzLjcwNDM3MDIsMjguNjYxOTQxNyAyMi4yMTE0NzgxLDI4IDIxLjA5MzQ5MjcsMjggTDcsMjggWicgaWQ9J3BhdGgtMTAnPjwvcGF0aD5cblx0ICAgICAgICA8ZmlsdGVyIHg9Jy01MCUnIHk9Jy01MCUnIHdpZHRoPScyMDAlJyBoZWlnaHQ9JzIwMCUnIGZpbHRlclVuaXRzPSdvYmplY3RCb3VuZGluZ0JveCcgaWQ9J2ZpbHRlci0xMSc+XG5cdCAgICAgICAgICAgIDxmZU9mZnNldCBkeD0nMCcgZHk9Jy0xJyBpbj0nU291cmNlQWxwaGEnIHJlc3VsdD0nc2hhZG93T2Zmc2V0T3V0ZXIxJz48L2ZlT2Zmc2V0PlxuXHQgICAgICAgICAgICA8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPScxJyBpbj0nc2hhZG93T2Zmc2V0T3V0ZXIxJyByZXN1bHQ9J3NoYWRvd0JsdXJPdXRlcjEnPjwvZmVHYXVzc2lhbkJsdXI+XG5cdCAgICAgICAgICAgIDxmZUNvbG9yTWF0cml4IHZhbHVlcz0nMCAwIDAgMCAwICAgMCAwIDAgMCAwICAgMCAwIDAgMCAwICAwIDAgMCAwLjEgMCcgdHlwZT0nbWF0cml4JyBpbj0nc2hhZG93Qmx1ck91dGVyMSc+PC9mZUNvbG9yTWF0cml4PlxuXHQgICAgICAgIDwvZmlsdGVyPlxuXHQgICAgPC9kZWZzPlxuXHQgICAgPGcgaWQ9J1BhZ2UtMScgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCc+XG5cdCAgICAgICAgPGcgaWQ9J0hvbWUtU2NyZWVuLeKAoi1pUGhvbmUtU0UnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC0xNi4wMDAwMDAsIC0yMDMuMDAwMDAwKSc+XG5cdCAgICAgICAgICAgIDxnIGlkPSdIb21lLVNjcmVlbi3igKItaVBob25lLTZzLUNvcHknIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDAuMDAwMDAwLCAyNy4wMDAwMDApJz5cblx0ICAgICAgICAgICAgICAgIDxnIGlkPSdXYWxsZXQnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDE2LjAwMDAwMCwgMTc2LjAwMDAwMCknPlxuXHQgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSdCRycgZmlsbD0ndXJsKCNsaW5lYXJHcmFkaWVudC0xKScgeD0nMCcgeT0nMCcgd2lkdGg9JzYwJyBoZWlnaHQ9JzYwJyByeD0nMTQnPjwvcmVjdD5cblx0ICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0nd2FsbGV0JyBmaWxsPScjRDlENkNDJyB4PSc3JyB5PScxMicgd2lkdGg9JzQ2JyBoZWlnaHQ9JzM0JyByeD0nNCc+PC9yZWN0PlxuXHQgICAgICAgICAgICAgICAgICAgIDxnIGlkPSdjYXJkcyc+XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgZmlsbD0nYmxhY2snIGZpbGwtb3BhY2l0eT0nMScgZmlsdGVyPSd1cmwoI2ZpbHRlci0zKScgeGxpbms6aHJlZj0nI3BhdGgtMic+PC91c2U+XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgZmlsbD0nIzNCOTlDOScgZmlsbC1ydWxlPSdldmVub2RkJyB4bGluazpocmVmPScjcGF0aC0yJz48L3VzZT5cblx0ICAgICAgICAgICAgICAgICAgICA8L2c+XG5cdCAgICAgICAgICAgICAgICAgICAgPGcgaWQ9J2NhcmRzJz5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSBmaWxsPSdibGFjaycgZmlsbC1vcGFjaXR5PScxJyBmaWx0ZXI9J3VybCgjZmlsdGVyLTUpJyB4bGluazpocmVmPScjcGF0aC00Jz48L3VzZT5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSBmaWxsPScjRkZCMDAzJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIHhsaW5rOmhyZWY9JyNwYXRoLTQnPjwvdXNlPlxuXHQgICAgICAgICAgICAgICAgICAgIDwvZz5cblx0ICAgICAgICAgICAgICAgICAgICA8ZyBpZD0nY2FyZHMnPlxuXHQgICAgICAgICAgICAgICAgICAgICAgICA8dXNlIGZpbGw9J2JsYWNrJyBmaWxsLW9wYWNpdHk9JzEnIGZpbHRlcj0ndXJsKCNmaWx0ZXItNyknIHhsaW5rOmhyZWY9JyNwYXRoLTYnPjwvdXNlPlxuXHQgICAgICAgICAgICAgICAgICAgICAgICA8dXNlIGZpbGw9JyM1MEJFM0QnIGZpbGwtcnVsZT0nZXZlbm9kZCcgeGxpbms6aHJlZj0nI3BhdGgtNic+PC91c2U+XG5cdCAgICAgICAgICAgICAgICAgICAgPC9nPlxuXHQgICAgICAgICAgICAgICAgICAgIDxnIGlkPSdjYXJkcyc+XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgZmlsbD0nYmxhY2snIGZpbGwtb3BhY2l0eT0nMScgZmlsdGVyPSd1cmwoI2ZpbHRlci05KScgeGxpbms6aHJlZj0nI3BhdGgtOCc+PC91c2U+XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgZmlsbD0nI0YxNkM1RScgZmlsbC1ydWxlPSdldmVub2RkJyB4bGluazpocmVmPScjcGF0aC04Jz48L3VzZT5cblx0ICAgICAgICAgICAgICAgICAgICA8L2c+XG5cdCAgICAgICAgICAgICAgICAgICAgPGcgaWQ9J0NvbWJpbmVkLVNoYXBlJz5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSBmaWxsPSdibGFjaycgZmlsbC1vcGFjaXR5PScxJyBmaWx0ZXI9J3VybCgjZmlsdGVyLTExKScgeGxpbms6aHJlZj0nI3BhdGgtMTAnPjwvdXNlPlxuXHQgICAgICAgICAgICAgICAgICAgICAgICA8dXNlIGZpbGw9JyNEOUQ2Q0MnIGZpbGwtcnVsZT0nZXZlbm9kZCcgeGxpbms6aHJlZj0nI3BhdGgtMTAnPjwvdXNlPlxuXHQgICAgICAgICAgICAgICAgICAgIDwvZz5cblx0ICAgICAgICAgICAgICAgIDwvZz5cblx0ICAgICAgICAgICAgPC9nPlxuXHQgICAgICAgIDwvZz5cblx0ICAgIDwvZz5cblx0PC9zdmc+XCJcblx0bm90ZXNfYXBwOlwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdDxzdmcgd2lkdGg9JzYwcHgnIGhlaWdodD0nNjBweCcgdmlld0JveD0nMCAwIDYwIDYwJyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnPlxuXHQgICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzOS4xICgzMTcyMCkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdCAgICA8dGl0bGU+Tm90ZXM8L3RpdGxlPlxuXHQgICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdCAgICA8ZGVmcz5cblx0ICAgICAgICA8bGluZWFyR3JhZGllbnQgeDE9JzUwJScgeTE9JzAlJyB4Mj0nNTAlJyB5Mj0nMTAwJScgaWQ9J2xpbmVhckdyYWRpZW50LTEnPlxuXHQgICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPScjRjhGOEY4JyBvZmZzZXQ9JzAlJz48L3N0b3A+XG5cdCAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9JyNFREVERUQnIG9mZnNldD0nMTAwJSc+PC9zdG9wPlxuXHQgICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XG5cdCAgICAgICAgPHBhdGggZD0nTTM5LjA4MTUsMCBDNDUuMTA1LDAgNDguMTE2LDAgNTEuMzU4NSwxLjAyNSBDNTQuODk4NSwyLjMxMzUgNTcuNjg2NSw1LjEwMTUgNTguOTc1LDguNjQxNSBDNjAsMTEuODgzNSA2MCwxNC44OTU1IDYwLDIwLjkxODUgTDYwLDM5LjA4MTUgQzYwLDQ1LjEwNSA2MCw0OC4xMTYgNTguOTc1LDUxLjM1ODUgQzU3LjY4NjUsNTQuODk4NSA1NC44OTg1LDU3LjY4NjUgNTEuMzU4NSw1OC45NzQ1IEM0OC4xMTYsNjAgNDUuMTA1LDYwIDM5LjA4MTUsNjAgTDIwLjkxODUsNjAgQzE0Ljg5NSw2MCAxMS44ODM1LDYwIDguNjQxNSw1OC45NzQ1IEM1LjEwMTUsNTcuNjg2NSAyLjMxMzUsNTQuODk4NSAxLjAyNSw1MS4zNTg1IEMwLDQ4LjExNiAwLDQ1LjEwNSAwLDM5LjA4MTUgTDAsMjAuOTE4NSBDMCwxNC44OTU1IDAsMTEuODgzNSAxLjAyNSw4LjY0MTUgQzIuMzEzNSw1LjEwMTUgNS4xMDE1LDIuMzEzNSA4LjY0MTUsMS4wMjUgQzExLjg4MzUsMCAxNC44OTUsMCAyMC45MTg1LDAgTDM5LjA4MTUsMCBaJyBpZD0ncGF0aC0yJz48L3BhdGg+XG5cdCAgICAgICAgPGxpbmVhckdyYWRpZW50IHgxPSc1MCUnIHkxPScwJScgeDI9JzUwJScgeTI9JzEwMCUnIGlkPSdsaW5lYXJHcmFkaWVudC00Jz5cblx0ICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0nI0ZGREY2Mycgb2Zmc2V0PScwJSc+PC9zdG9wPlxuXHQgICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPScjRkZDRDAyJyBvZmZzZXQ9JzEwMCUnPjwvc3RvcD5cblx0ICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxuXHQgICAgICAgIDxyZWN0IGlkPSdwYXRoLTUnIHg9JzAnIHk9Jy0xJyB3aWR0aD0nNjAnIGhlaWdodD0nMjAnPjwvcmVjdD5cblx0ICAgICAgICA8ZmlsdGVyIHg9Jy01MCUnIHk9Jy01MCUnIHdpZHRoPScyMDAlJyBoZWlnaHQ9JzIwMCUnIGZpbHRlclVuaXRzPSdvYmplY3RCb3VuZGluZ0JveCcgaWQ9J2ZpbHRlci02Jz5cblx0ICAgICAgICAgICAgPGZlT2Zmc2V0IGR4PScwJyBkeT0nMC41JyBpbj0nU291cmNlQWxwaGEnIHJlc3VsdD0nc2hhZG93T2Zmc2V0T3V0ZXIxJz48L2ZlT2Zmc2V0PlxuXHQgICAgICAgICAgICA8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPScwLjUnIGluPSdzaGFkb3dPZmZzZXRPdXRlcjEnIHJlc3VsdD0nc2hhZG93Qmx1ck91dGVyMSc+PC9mZUdhdXNzaWFuQmx1cj5cblx0ICAgICAgICAgICAgPGZlQ29sb3JNYXRyaXggdmFsdWVzPScwIDAgMCAwIDAgICAwIDAgMCAwIDAgICAwIDAgMCAwIDAgIDAgMCAwIDAuMyAwJyB0eXBlPSdtYXRyaXgnIGluPSdzaGFkb3dCbHVyT3V0ZXIxJz48L2ZlQ29sb3JNYXRyaXg+XG5cdCAgICAgICAgPC9maWx0ZXI+XG5cdCAgICAgICAgPGZpbHRlciB4PSctNTAlJyB5PSctNTAlJyB3aWR0aD0nMjAwJScgaGVpZ2h0PScyMDAlJyBmaWx0ZXJVbml0cz0nb2JqZWN0Qm91bmRpbmdCb3gnIGlkPSdmaWx0ZXItNyc+XG5cdCAgICAgICAgICAgIDxmZU9mZnNldCBkeD0nMCcgZHk9Jy0wLjUnIGluPSdTb3VyY2VBbHBoYScgcmVzdWx0PSdzaGFkb3dPZmZzZXRJbm5lcjEnPjwvZmVPZmZzZXQ+XG5cdCAgICAgICAgICAgIDxmZUNvbXBvc2l0ZSBpbj0nc2hhZG93T2Zmc2V0SW5uZXIxJyBpbjI9J1NvdXJjZUFscGhhJyBvcGVyYXRvcj0nYXJpdGhtZXRpYycgazI9Jy0xJyBrMz0nMScgcmVzdWx0PSdzaGFkb3dJbm5lcklubmVyMSc+PC9mZUNvbXBvc2l0ZT5cblx0ICAgICAgICAgICAgPGZlQ29sb3JNYXRyaXggdmFsdWVzPScwIDAgMCAwIDAgICAwIDAgMCAwIDAgICAwIDAgMCAwIDAgIDAgMCAwIDAuMiAwJyB0eXBlPSdtYXRyaXgnIGluPSdzaGFkb3dJbm5lcklubmVyMSc+PC9mZUNvbG9yTWF0cml4PlxuXHQgICAgICAgIDwvZmlsdGVyPlxuXHQgICAgPC9kZWZzPlxuXHQgICAgPGcgaWQ9J1BhZ2UtMScgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCc+XG5cdCAgICAgICAgPGcgaWQ9J0hvbWUtU2NyZWVuLeKAoi1pUGhvbmUtU0UnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC05Mi4wMDAwMDAsIC0yMDMuMDAwMDAwKSc+XG5cdCAgICAgICAgICAgIDxnIGlkPSdIb21lLVNjcmVlbi3igKItaVBob25lLTZzLUNvcHknIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDAuMDAwMDAwLCAyNy4wMDAwMDApJz5cblx0ICAgICAgICAgICAgICAgIDxnIGlkPSdOb3RlcycgdHJhbnNmb3JtPSd0cmFuc2xhdGUoOTIuMDAwMDAwLCAxNzYuMDAwMDAwKSc+XG5cdCAgICAgICAgICAgICAgICAgICAgPG1hc2sgaWQ9J21hc2stMycgZmlsbD0nd2hpdGUnPlxuXHQgICAgICAgICAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9JyNwYXRoLTInPjwvdXNlPlxuXHQgICAgICAgICAgICAgICAgICAgIDwvbWFzaz5cblx0ICAgICAgICAgICAgICAgICAgICA8dXNlIGlkPSdCRycgZmlsbD0ndXJsKCNsaW5lYXJHcmFkaWVudC0xKScgeGxpbms6aHJlZj0nI3BhdGgtMic+PC91c2U+XG5cdCAgICAgICAgICAgICAgICAgICAgPGcgaWQ9J2hlYWRlcicgbWFzaz0ndXJsKCNtYXNrLTMpJz5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSBmaWxsPSdibGFjaycgZmlsbC1vcGFjaXR5PScxJyBmaWx0ZXI9J3VybCgjZmlsdGVyLTYpJyB4bGluazpocmVmPScjcGF0aC01Jz48L3VzZT5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSBmaWxsPSd1cmwoI2xpbmVhckdyYWRpZW50LTQpJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIHhsaW5rOmhyZWY9JyNwYXRoLTUnPjwvdXNlPlxuXHQgICAgICAgICAgICAgICAgICAgICAgICA8dXNlIGZpbGw9J2JsYWNrJyBmaWxsLW9wYWNpdHk9JzEnIGZpbHRlcj0ndXJsKCNmaWx0ZXItNyknIHhsaW5rOmhyZWY9JyNwYXRoLTUnPjwvdXNlPlxuXHQgICAgICAgICAgICAgICAgICAgIDwvZz5cblx0ICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0nbGluZScgZmlsbD0nI0I3QjdCNycgbWFzaz0ndXJsKCNtYXNrLTMpJyBwb2ludHM9JzU5Ljc1IDMwLjUgNjAgMzAuNSA2MCAzMCA1OS43NSAzMCAtMC4yNSAzMCAtMC41IDMwIC0wLjUgMzAuNSAtMC4yNSAzMC41Jz48L3BvbHlnb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9J2xpbmUnIGZpbGw9JyNCN0I3QjcnIG1hc2s9J3VybCgjbWFzay0zKScgcG9pbnRzPSc1OS43NSA0MS41IDYwIDQxLjUgNjAgNDEgNTkuNzUgNDEgLTAuMjUgNDEgLTAuNSA0MSAtMC41IDQxLjUgLTAuMjUgNDEuNSc+PC9wb2x5Z29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSdsaW5lJyBmaWxsPScjQjdCN0I3JyBtYXNrPSd1cmwoI21hc2stMyknIHBvaW50cz0nNTkuNzUgNTMgNjAgNTMgNjAgNTIuNSA1OS43NSA1Mi41IC0wLjI1IDUyLjUgLTAuNSA1Mi41IC0wLjUgNTMgLTAuMjUgNTMnPjwvcG9seWdvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSdNNTguNSwyMiBMNTkuNSwyMiBMNTkuNSwyMyBMNTguNSwyMyBMNTguNSwyMiBMNTguNSwyMiBaIE01Ni41LDIyIEw1Ny41LDIyIEw1Ny41LDIzIEw1Ni41LDIzIEw1Ni41LDIyIEw1Ni41LDIyIFogTTU0LjUsMjIgTDU1LjUsMjIgTDU1LjUsMjMgTDU0LjUsMjMgTDU0LjUsMjIgTDU0LjUsMjIgWiBNNTIuNSwyMiBMNTMuNSwyMiBMNTMuNSwyMyBMNTIuNSwyMyBMNTIuNSwyMiBMNTIuNSwyMiBaIE01MC41LDIyIEw1MS41LDIyIEw1MS41LDIzIEw1MC41LDIzIEw1MC41LDIyIEw1MC41LDIyIFogTTQ4LjUsMjIgTDQ5LjUsMjIgTDQ5LjUsMjMgTDQ4LjUsMjMgTDQ4LjUsMjIgTDQ4LjUsMjIgWiBNNDYuNSwyMiBMNDcuNSwyMiBMNDcuNSwyMyBMNDYuNSwyMyBMNDYuNSwyMiBMNDYuNSwyMiBaIE00NC41LDIyIEw0NS41LDIyIEw0NS41LDIzIEw0NC41LDIzIEw0NC41LDIyIEw0NC41LDIyIFogTTQyLjUsMjIgTDQzLjUsMjIgTDQzLjUsMjMgTDQyLjUsMjMgTDQyLjUsMjIgTDQyLjUsMjIgWiBNNDAuNSwyMiBMNDEuNSwyMiBMNDEuNSwyMyBMNDAuNSwyMyBMNDAuNSwyMiBMNDAuNSwyMiBaIE0zOC41LDIyIEwzOS41LDIyIEwzOS41LDIzIEwzOC41LDIzIEwzOC41LDIyIEwzOC41LDIyIFogTTM2LjUsMjIgTDM3LjUsMjIgTDM3LjUsMjMgTDM2LjUsMjMgTDM2LjUsMjIgTDM2LjUsMjIgWiBNMzQuNSwyMiBMMzUuNSwyMiBMMzUuNSwyMyBMMzQuNSwyMyBMMzQuNSwyMiBMMzQuNSwyMiBaIE0zMi41LDIyIEwzMy41LDIyIEwzMy41LDIzIEwzMi41LDIzIEwzMi41LDIyIEwzMi41LDIyIFogTTMwLjUsMjIgTDMxLjUsMjIgTDMxLjUsMjMgTDMwLjUsMjMgTDMwLjUsMjIgTDMwLjUsMjIgWiBNMjguNSwyMiBMMjkuNSwyMiBMMjkuNSwyMyBMMjguNSwyMyBMMjguNSwyMiBMMjguNSwyMiBaIE0yNi41LDIyIEwyNy41LDIyIEwyNy41LDIzIEwyNi41LDIzIEwyNi41LDIyIEwyNi41LDIyIFogTTI0LjUsMjIgTDI1LjUsMjIgTDI1LjUsMjMgTDI0LjUsMjMgTDI0LjUsMjIgTDI0LjUsMjIgWiBNMjIuNSwyMiBMMjMuNSwyMiBMMjMuNSwyMyBMMjIuNSwyMyBMMjIuNSwyMiBMMjIuNSwyMiBaIE0yMC41LDIyIEwyMS41LDIyIEwyMS41LDIzIEwyMC41LDIzIEwyMC41LDIyIEwyMC41LDIyIFogTTE4LjUsMjIgTDE5LjUsMjIgTDE5LjUsMjMgTDE4LjUsMjMgTDE4LjUsMjIgTDE4LjUsMjIgWiBNMTYuNSwyMiBMMTcuNSwyMiBMMTcuNSwyMyBMMTYuNSwyMyBMMTYuNSwyMiBMMTYuNSwyMiBaIE0xNC41LDIyIEwxNS41LDIyIEwxNS41LDIzIEwxNC41LDIzIEwxNC41LDIyIEwxNC41LDIyIFogTTEyLjUsMjIgTDEzLjUsMjIgTDEzLjUsMjMgTDEyLjUsMjMgTDEyLjUsMjIgTDEyLjUsMjIgWiBNMTAuNSwyMiBMMTEuNSwyMiBMMTEuNSwyMyBMMTAuNSwyMyBMMTAuNSwyMiBMMTAuNSwyMiBaIE04LjUsMjIgTDkuNSwyMiBMOS41LDIzIEw4LjUsMjMgTDguNSwyMiBMOC41LDIyIFogTTYuNSwyMiBMNy41LDIyIEw3LjUsMjMgTDYuNSwyMyBMNi41LDIyIEw2LjUsMjIgWiBNNC41LDIyIEw1LjUsMjIgTDUuNSwyMyBMNC41LDIzIEw0LjUsMjIgTDQuNSwyMiBaIE0yLjUsMjIgTDMuNSwyMiBMMy41LDIzIEwyLjUsMjMgTDIuNSwyMiBMMi41LDIyIFogTTAuNSwyMiBMMS41LDIyIEwxLjUsMjMgTDAuNSwyMyBMMC41LDIyIEwwLjUsMjIgWicgaWQ9J1JlY3RhbmdsZS0zNycgZmlsbD0nI0FBQUFBQScgbWFzaz0ndXJsKCNtYXNrLTMpJz48L3BhdGg+XG5cdCAgICAgICAgICAgICAgICA8L2c+XG5cdCAgICAgICAgICAgIDwvZz5cblx0ICAgICAgICA8L2c+XG5cdCAgICA8L2c+XG5cdDwvc3ZnPlwiXG5cdHJlbWluZGVyc19hcHA6XCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0PHN2ZyB3aWR0aD0nNjBweCcgaGVpZ2h0PSc2MHB4JyB2aWV3Qm94PScwIDAgNjAgNjAnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayc+XG5cdCAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDM5LjEgKDMxNzIwKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0ICAgIDx0aXRsZT5taW48L3RpdGxlPlxuXHQgICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdCAgICA8ZGVmcz5cblx0ICAgICAgICA8cmVjdCBpZD0ncGF0aC0xJyB4PScwJyB5PScwJyB3aWR0aD0nNjAnIGhlaWdodD0nNjAnIHJ4PScxNCc+PC9yZWN0PlxuXHQgICAgICAgIDxjaXJjbGUgaWQ9J3BhdGgtMycgY3g9JzEwJyBjeT0nMTInIHI9JzQnPjwvY2lyY2xlPlxuXHQgICAgICAgIDxtYXNrIGlkPSdtYXNrLTQnIG1hc2tDb250ZW50VW5pdHM9J3VzZXJTcGFjZU9uVXNlJyBtYXNrVW5pdHM9J29iamVjdEJvdW5kaW5nQm94JyB4PScwJyB5PScwJyB3aWR0aD0nOCcgaGVpZ2h0PSc4JyBmaWxsPSd3aGl0ZSc+XG5cdCAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0nI3BhdGgtMyc+PC91c2U+XG5cdCAgICAgICAgPC9tYXNrPlxuXHQgICAgICAgIDxtYXNrIGlkPSdtYXNrLTUnIG1hc2tDb250ZW50VW5pdHM9J3VzZXJTcGFjZU9uVXNlJyBtYXNrVW5pdHM9J29iamVjdEJvdW5kaW5nQm94JyB4PSctMC41JyB5PSctMC41JyB3aWR0aD0nOScgaGVpZ2h0PSc5Jz5cblx0ICAgICAgICAgICAgPHJlY3QgeD0nNS41JyB5PSc3LjUnIHdpZHRoPSc5JyBoZWlnaHQ9JzknIGZpbGw9J3doaXRlJz48L3JlY3Q+XG5cdCAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0nI3BhdGgtMycgZmlsbD0nYmxhY2snPjwvdXNlPlxuXHQgICAgICAgIDwvbWFzaz5cblx0ICAgICAgICA8Y2lyY2xlIGlkPSdwYXRoLTYnIGN4PScxMCcgY3k9JzIzJyByPSc0Jz48L2NpcmNsZT5cblx0ICAgICAgICA8bWFzayBpZD0nbWFzay03JyBtYXNrQ29udGVudFVuaXRzPSd1c2VyU3BhY2VPblVzZScgbWFza1VuaXRzPSdvYmplY3RCb3VuZGluZ0JveCcgeD0nMCcgeT0nMCcgd2lkdGg9JzgnIGhlaWdodD0nOCcgZmlsbD0nd2hpdGUnPlxuXHQgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9JyNwYXRoLTYnPjwvdXNlPlxuXHQgICAgICAgIDwvbWFzaz5cblx0ICAgICAgICA8bWFzayBpZD0nbWFzay04JyBtYXNrQ29udGVudFVuaXRzPSd1c2VyU3BhY2VPblVzZScgbWFza1VuaXRzPSdvYmplY3RCb3VuZGluZ0JveCcgeD0nLTAuNScgeT0nLTAuNScgd2lkdGg9JzknIGhlaWdodD0nOSc+XG5cdCAgICAgICAgICAgIDxyZWN0IHg9JzUuNScgeT0nMTguNScgd2lkdGg9JzknIGhlaWdodD0nOScgZmlsbD0nd2hpdGUnPjwvcmVjdD5cblx0ICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPScjcGF0aC02JyBmaWxsPSdibGFjayc+PC91c2U+XG5cdCAgICAgICAgPC9tYXNrPlxuXHQgICAgICAgIDxjaXJjbGUgaWQ9J3BhdGgtOScgY3g9JzEwJyBjeT0nMzUnIHI9JzQnPjwvY2lyY2xlPlxuXHQgICAgICAgIDxtYXNrIGlkPSdtYXNrLTEwJyBtYXNrQ29udGVudFVuaXRzPSd1c2VyU3BhY2VPblVzZScgbWFza1VuaXRzPSdvYmplY3RCb3VuZGluZ0JveCcgeD0nMCcgeT0nMCcgd2lkdGg9JzgnIGhlaWdodD0nOCcgZmlsbD0nd2hpdGUnPlxuXHQgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9JyNwYXRoLTknPjwvdXNlPlxuXHQgICAgICAgIDwvbWFzaz5cblx0ICAgICAgICA8bWFzayBpZD0nbWFzay0xMScgbWFza0NvbnRlbnRVbml0cz0ndXNlclNwYWNlT25Vc2UnIG1hc2tVbml0cz0nb2JqZWN0Qm91bmRpbmdCb3gnIHg9Jy0wLjUnIHk9Jy0wLjUnIHdpZHRoPSc5JyBoZWlnaHQ9JzknPlxuXHQgICAgICAgICAgICA8cmVjdCB4PSc1LjUnIHk9JzMwLjUnIHdpZHRoPSc5JyBoZWlnaHQ9JzknIGZpbGw9J3doaXRlJz48L3JlY3Q+XG5cdCAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0nI3BhdGgtOScgZmlsbD0nYmxhY2snPjwvdXNlPlxuXHQgICAgICAgIDwvbWFzaz5cblx0ICAgICAgICA8Y2lyY2xlIGlkPSdwYXRoLTEyJyBjeD0nMTAnIGN5PSc0Nicgcj0nNCc+PC9jaXJjbGU+XG5cdCAgICAgICAgPG1hc2sgaWQ9J21hc2stMTMnIG1hc2tDb250ZW50VW5pdHM9J3VzZXJTcGFjZU9uVXNlJyBtYXNrVW5pdHM9J29iamVjdEJvdW5kaW5nQm94JyB4PScwJyB5PScwJyB3aWR0aD0nOCcgaGVpZ2h0PSc4JyBmaWxsPSd3aGl0ZSc+XG5cdCAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0nI3BhdGgtMTInPjwvdXNlPlxuXHQgICAgICAgIDwvbWFzaz5cblx0ICAgICAgICA8bWFzayBpZD0nbWFzay0xNCcgbWFza0NvbnRlbnRVbml0cz0ndXNlclNwYWNlT25Vc2UnIG1hc2tVbml0cz0nb2JqZWN0Qm91bmRpbmdCb3gnIHg9Jy0wLjUnIHk9Jy0wLjUnIHdpZHRoPSc5JyBoZWlnaHQ9JzknPlxuXHQgICAgICAgICAgICA8cmVjdCB4PSc1LjUnIHk9JzQxLjUnIHdpZHRoPSc5JyBoZWlnaHQ9JzknIGZpbGw9J3doaXRlJz48L3JlY3Q+XG5cdCAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0nI3BhdGgtMTInIGZpbGw9J2JsYWNrJz48L3VzZT5cblx0ICAgICAgICA8L21hc2s+XG5cdCAgICA8L2RlZnM+XG5cdCAgICA8ZyBpZD0nUGFnZS0xJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJz5cblx0ICAgICAgICA8ZyBpZD0nSG9tZS1TY3JlZW4t4oCiLWlQaG9uZS1TRScgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTE2OC4wMDAwMDAsIC0yMDMuMDAwMDAwKSc+XG5cdCAgICAgICAgICAgIDxnIGlkPSdIb21lLVNjcmVlbi3igKItaVBob25lLTZzLUNvcHknIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDAuMDAwMDAwLCAyNy4wMDAwMDApJz5cblx0ICAgICAgICAgICAgICAgIDxnIGlkPSdtaW4nIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDE2OC4wMDAwMDAsIDE3Ni4wMDAwMDApJz5cblx0ICAgICAgICAgICAgICAgICAgICA8bWFzayBpZD0nbWFzay0yJyBmaWxsPSd3aGl0ZSc+XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0nI3BhdGgtMSc+PC91c2U+XG5cdCAgICAgICAgICAgICAgICAgICAgPC9tYXNrPlxuXHQgICAgICAgICAgICAgICAgICAgIDx1c2UgaWQ9J0JHJyBmaWxsPScjRkZGRkZGJyB4bGluazpocmVmPScjcGF0aC0xJz48L3VzZT5cblx0ICAgICAgICAgICAgICAgICAgICA8ZyBpZD0nY2lyY2xlJyBtYXNrPSd1cmwoI21hc2stMiknPlxuXHQgICAgICAgICAgICAgICAgICAgICAgICA8dXNlIHN0cm9rZT0nI0ZGRkZGRicgbWFzaz0ndXJsKCNtYXNrLTQpJyBmaWxsPScjRkY5NTAwJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIHhsaW5rOmhyZWY9JyNwYXRoLTMnPjwvdXNlPlxuXHQgICAgICAgICAgICAgICAgICAgICAgICA8dXNlIHN0cm9rZT0nI0ZGOTUwMCcgbWFzaz0ndXJsKCNtYXNrLTUpJyB4bGluazpocmVmPScjcGF0aC0zJz48L3VzZT5cblx0ICAgICAgICAgICAgICAgICAgICA8L2c+XG5cdCAgICAgICAgICAgICAgICAgICAgPGcgaWQ9J2NpcmNsZScgbWFzaz0ndXJsKCNtYXNrLTIpJz5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSBzdHJva2U9JyNGRkZGRkYnIG1hc2s9J3VybCgjbWFzay03KScgZmlsbD0nIzFCQURGOCcgZmlsbC1ydWxlPSdldmVub2RkJyB4bGluazpocmVmPScjcGF0aC02Jz48L3VzZT5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSBzdHJva2U9JyMxQkFERjgnIG1hc2s9J3VybCgjbWFzay04KScgeGxpbms6aHJlZj0nI3BhdGgtNic+PC91c2U+XG5cdCAgICAgICAgICAgICAgICAgICAgPC9nPlxuXHQgICAgICAgICAgICAgICAgICAgIDxnIGlkPSdjaXJjbGUnIG1hc2s9J3VybCgjbWFzay0yKSc+XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIDx1c2Ugc3Ryb2tlPScjRkZGRkZGJyBtYXNrPSd1cmwoI21hc2stMTApJyBmaWxsPScjNjNEQTM4JyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIHhsaW5rOmhyZWY9JyNwYXRoLTknPjwvdXNlPlxuXHQgICAgICAgICAgICAgICAgICAgICAgICA8dXNlIHN0cm9rZT0nIzYzREEzOCcgbWFzaz0ndXJsKCNtYXNrLTExKScgeGxpbms6aHJlZj0nI3BhdGgtOSc+PC91c2U+XG5cdCAgICAgICAgICAgICAgICAgICAgPC9nPlxuXHQgICAgICAgICAgICAgICAgICAgIDxnIGlkPSdjaXJjbGUnIG1hc2s9J3VybCgjbWFzay0yKSc+XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIDx1c2Ugc3Ryb2tlPScjRkZGRkZGJyBtYXNrPSd1cmwoI21hc2stMTMpJyBmaWxsPScjQ0M3M0UxJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIHhsaW5rOmhyZWY9JyNwYXRoLTEyJz48L3VzZT5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSBzdHJva2U9JyNDQzczRTEnIG1hc2s9J3VybCgjbWFzay0xNCknIHhsaW5rOmhyZWY9JyNwYXRoLTEyJz48L3VzZT5cblx0ICAgICAgICAgICAgICAgICAgICA8L2c+XG5cdCAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9J2xpbmUnIGZpbGw9JyNBRUFFQUUnIG1hc2s9J3VybCgjbWFzay0yKScgeD0nMTknIHk9JzE3LjUnIHdpZHRoPSc0MScgaGVpZ2h0PScwLjUnPjwvcmVjdD5cblx0ICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0nbGluZScgZmlsbD0nI0FFQUVBRScgbWFzaz0ndXJsKCNtYXNrLTIpJyB4PScxOScgeT0nNicgd2lkdGg9JzQxJyBoZWlnaHQ9JzAuNSc+PC9yZWN0PlxuXHQgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSdsaW5lJyBmaWxsPScjQUVBRUFFJyBtYXNrPSd1cmwoI21hc2stMiknIHg9JzE5JyB5PScyOScgd2lkdGg9JzQxJyBoZWlnaHQ9JzAuNSc+PC9yZWN0PlxuXHQgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSdsaW5lJyBmaWxsPScjQUVBRUFFJyBtYXNrPSd1cmwoI21hc2stMiknIHg9JzE5JyB5PSc0MCcgd2lkdGg9JzQxJyBoZWlnaHQ9JzAuNSc+PC9yZWN0PlxuXHQgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSdsaW5lJyBmaWxsPScjQUVBRUFFJyBtYXNrPSd1cmwoI21hc2stMiknIHg9JzE5JyB5PSc1MS41JyB3aWR0aD0nNDEnIGhlaWdodD0nMC41Jz48L3JlY3Q+XG5cdCAgICAgICAgICAgICAgICA8L2c+XG5cdCAgICAgICAgICAgIDwvZz5cblx0ICAgICAgICA8L2c+XG5cdCAgICA8L2c+XG5cdDwvc3ZnPlwiXG5cdHN0b2Nrc19hcHA6XCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0PHN2ZyB3aWR0aD0nNjBweCcgaGVpZ2h0PSc2MHB4JyB2aWV3Qm94PScwIDAgNjAgNjAnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayc+XG5cdCAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDM5LjEgKDMxNzIwKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0ICAgIDx0aXRsZT5TdG9ja3M8L3RpdGxlPlxuXHQgICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdCAgICA8ZGVmcz5cblx0ICAgICAgICA8cGF0aCBkPSdNMzkuMDgxNSwwIEM0NS4xMDUsMCA0OC4xMTYsMCA1MS4zNTg1LDEuMDI1IEM1NC44OTg1LDIuMzEzNSA1Ny42ODY1LDUuMTAxNSA1OC45NzUsOC42NDE1IEM2MCwxMS44ODM1IDYwLDE0Ljg5NTUgNjAsMjAuOTE4NSBMNjAsMzkuMDgxNSBDNjAsNDUuMTA1IDYwLDQ4LjExNiA1OC45NzUsNTEuMzU4NSBDNTcuNjg2NSw1NC44OTg1IDU0Ljg5ODUsNTcuNjg2NSA1MS4zNTg1LDU4Ljk3NDUgQzQ4LjExNiw2MCA0NS4xMDUsNjAgMzkuMDgxNSw2MCBMMjAuOTE4NSw2MCBDMTQuODk1LDYwIDExLjg4MzUsNjAgOC42NDE1LDU4Ljk3NDUgQzUuMTAxNSw1Ny42ODY1IDIuMzEzNSw1NC44OTg1IDEuMDI1LDUxLjM1ODUgQzAsNDguMTE2IDAsNDUuMTA1IDAsMzkuMDgxNSBMMCwyMC45MTg1IEMwLDE0Ljg5NTUgMCwxMS44ODM1IDEuMDI1LDguNjQxNSBDMi4zMTM1LDUuMTAxNSA1LjEwMTUsMi4zMTM1IDguNjQxNSwxLjAyNSBDMTEuODgzNSwwIDE0Ljg5NSwwIDIwLjkxODUsMCBMMzkuMDgxNSwwIFonIGlkPSdwYXRoLTEnPjwvcGF0aD5cblx0ICAgICAgICA8bGluZWFyR3JhZGllbnQgeDE9JzUwJScgeTE9JzAlJyB4Mj0nNTAlJyB5Mj0nMTAwJScgaWQ9J2xpbmVhckdyYWRpZW50LTMnPlxuXHQgICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPScjNDU0NTQ1JyBvZmZzZXQ9JzAlJz48L3N0b3A+XG5cdCAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9JyMxMTExMTInIG9mZnNldD0nMTAwJSc+PC9zdG9wPlxuXHQgICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XG5cdCAgICAgICAgPHBhdGggZD0nTTQxLjUsMTYuMDExMjEwOCBMNDEuNSwtMS41IEw0MSwtMS41IEw0MSwxNi4wMTEyMTA4IEM0MS4wODIzNDA1LDE2LjAwMzc5MDcgNDEuMTY1NzI3NiwxNiA0MS4yNSwxNiBDNDEuMzM0MjcyNCwxNiA0MS40MTc2NTk1LDE2LjAwMzc5MDcgNDEuNSwxNi4wMTEyMTA4IFogTTQxLjUsMjEuNDg4Nzg5MiBMNDEuNSw2MyBMNDEsNjMgTDQxLDIxLjQ4ODc4OTIgQzQxLjA4MjM0MDUsMjEuNDk2MjA5MyA0MS4xNjU3Mjc2LDIxLjUgNDEuMjUsMjEuNSBDNDEuMzM0MjcyNCwyMS41IDQxLjQxNzY1OTUsMjEuNDk2MjA5MyA0MS41LDIxLjQ4ODc4OTIgWiBNNDEuMjUsMjEgQzQyLjQ5MjY0MDcsMjEgNDMuNSwxOS45OTI2NDA3IDQzLjUsMTguNzUgQzQzLjUsMTcuNTA3MzU5MyA0Mi40OTI2NDA3LDE2LjUgNDEuMjUsMTYuNSBDNDAuMDA3MzU5MywxNi41IDM5LDE3LjUwNzM1OTMgMzksMTguNzUgQzM5LDE5Ljk5MjY0MDcgNDAuMDA3MzU5MywyMSA0MS4yNSwyMSBaJyBpZD0ncGF0aC00Jz48L3BhdGg+XG5cdCAgICAgICAgPGZpbHRlciB4PSctNTAlJyB5PSctNTAlJyB3aWR0aD0nMjAwJScgaGVpZ2h0PScyMDAlJyBmaWx0ZXJVbml0cz0nb2JqZWN0Qm91bmRpbmdCb3gnIGlkPSdmaWx0ZXItNSc+XG5cdCAgICAgICAgICAgIDxmZU9mZnNldCBkeD0nMCcgZHk9JzEnIGluPSdTb3VyY2VBbHBoYScgcmVzdWx0PSdzaGFkb3dPZmZzZXRPdXRlcjEnPjwvZmVPZmZzZXQ+XG5cdCAgICAgICAgICAgIDxmZUNvbG9yTWF0cml4IHZhbHVlcz0nMCAwIDAgMCAwICAgMCAwIDAgMCAwICAgMCAwIDAgMCAwICAwIDAgMCAwLjUgMCcgdHlwZT0nbWF0cml4JyBpbj0nc2hhZG93T2Zmc2V0T3V0ZXIxJz48L2ZlQ29sb3JNYXRyaXg+XG5cdCAgICAgICAgPC9maWx0ZXI+XG5cdCAgICA8L2RlZnM+XG5cdCAgICA8ZyBpZD0nUGFnZS0xJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJz5cblx0ICAgICAgICA8ZyBpZD0nSG9tZS1TY3JlZW4t4oCiLWlQaG9uZS1TRScgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTI0NC4wMDAwMDAsIC0yMDMuMDAwMDAwKSc+XG5cdCAgICAgICAgICAgIDxnIGlkPSdIb21lLVNjcmVlbi3igKItaVBob25lLTZzLUNvcHknIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDAuMDAwMDAwLCAyNy4wMDAwMDApJz5cblx0ICAgICAgICAgICAgICAgIDxnIGlkPSdTdG9ja3MnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDI0NC4wMDAwMDAsIDE3Ni4wMDAwMDApJz5cblx0ICAgICAgICAgICAgICAgICAgICA8bWFzayBpZD0nbWFzay0yJyBmaWxsPSd3aGl0ZSc+XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0nI3BhdGgtMSc+PC91c2U+XG5cdCAgICAgICAgICAgICAgICAgICAgPC9tYXNrPlxuXHQgICAgICAgICAgICAgICAgICAgIDx1c2UgaWQ9J0JHJyBmaWxsPScjMTQxNDE2JyB4bGluazpocmVmPScjcGF0aC0xJz48L3VzZT5cblx0ICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSdNLTAuNDg0ODYzMjgxLDM0LjA1MzcxMDkgQy0wLjQ4NDg2MzI4MSwzNC4wNTM3MTA5IDEuMjcyMzkyMTEsMzQuMDY0NDY4NiAzLjExOTM4NDc3LDM0LjYzMjA4MDEgQzQuNzA3OTQ0OTUsMzUuMTIwMjcxIDYuMzAwOTgxNzYsMzYuMjUyMzc4NiA3LjIzMzg4NjcyLDM2LjE5NDU4MDEgQzkuMjUxNDY0ODQsMzYuMDY5NTgwMSAxMS4zMzQ0NzI3LDM1LjM3NTk3NjYgMTEuMzM0NDcyNywzNS4zNzU5NzY2IEwxNS4xMjA4NDk2LDMwLjQ0NTA2ODQgTDE4LjcyNzUzOTEsMzMuNTI2MzY3MiBMMjIuNDk0MTQwNiwyNC42MjQ1MTE3IEwyNi4xMTk2Mjg5LDM0LjMzNjkxNDEgTDMwLjI1LDM2Ljg2NTk2NjggTDMzLjk0Njc3NzMsMzAuMjA4NDk2MSBMMzcuNTM4NTc0MiwyOS4yNzYxMjMgTDQxLjQzMTY0MDYsMTguMTMyMzI0MiBMNDUuMTQ3NDYwOSwyNy4yMDMzNjkxIEw0OC45NDM4NDc3LDI0LjY2NTUyNzMgTDUyLjc3MzQzNzUsMzEuOTkzNjUyMyBMNTYuMzQyMjg1MiwyMy44MTczODI4IEw2MC4zNDU3MDMxLDE5LjY1NjI1IEw2MC4zNDU3MDMxLDYwLjQ3OTExNjYgTC0wLjMwNDk4OTMyNSw2MC40NzkxMTY2IEwtMC40ODQ4NjMyODEsMzQuMDUzNzEwOSBaJyBpZD0nZ3JhcGgnIHN0cm9rZT0nI0ZGRkZGRicgc3Ryb2tlLXdpZHRoPScwLjc1JyBmaWxsPSd1cmwoI2xpbmVhckdyYWRpZW50LTMpJyBtYXNrPSd1cmwoI21hc2stMiknPjwvcGF0aD5cblx0ICAgICAgICAgICAgICAgICAgICA8ZyBpZD0nbWFyaycgbWFzaz0ndXJsKCNtYXNrLTIpJz5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSBmaWxsPSdibGFjaycgZmlsbC1vcGFjaXR5PScxJyBmaWx0ZXI9J3VybCgjZmlsdGVyLTUpJyB4bGluazpocmVmPScjcGF0aC00Jz48L3VzZT5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSBmaWxsPScjMDFBNkYxJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIHhsaW5rOmhyZWY9JyNwYXRoLTQnPjwvdXNlPlxuXHQgICAgICAgICAgICAgICAgICAgIDwvZz5cblx0ICAgICAgICAgICAgICAgICAgICA8ZyBpZD0nU3BhcmstbGluZScgbWFzaz0ndXJsKCNtYXNrLTIpJyBmaWxsPScjNzc3Nzc4Jz5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoNy4wMDAwMDAsIC0xLjUwMDAwMCknIGlkPSdtYXJrJz5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IHg9JzAnIHk9JzAnIHdpZHRoPScwLjUnIGhlaWdodD0nNjQuNSc+PC9yZWN0PlxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgeD0nMTEuNScgeT0nMCcgd2lkdGg9JzAuNScgaGVpZ2h0PSc2NC41Jz48L3JlY3Q+XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCB4PScyMycgeT0nMCcgd2lkdGg9JzAuNScgaGVpZ2h0PSc2NC41Jz48L3JlY3Q+XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCB4PSc0NS41JyB5PScwJyB3aWR0aD0nMC41JyBoZWlnaHQ9JzY0LjUnPjwvcmVjdD5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgPC9nPlxuXHQgICAgICAgICAgICAgICAgICAgIDwvZz5cblx0ICAgICAgICAgICAgICAgIDwvZz5cblx0ICAgICAgICAgICAgPC9nPlxuXHQgICAgICAgIDwvZz5cblx0ICAgIDwvZz5cblx0PC9zdmc+XCJcbn1cblxuIyBEZXZpY2UgZnJhbWVzXG5leHBvcnRzLmZyYW1lcyA9ICB7XG5cbiMgRnVsbHNjcmVlblxuXHRcImZ1bGxzY3JlZW5cIiA6IHsgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQsIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcdHNjYWxlOjEsIG1vYmlsZTpmYWxzZSwgcGxhdGZvcm06XCJ3ZWJcIn1cblxuXHQjIGlQaG9uZXNcblx0IyMgNVNcblx0XCJhcHBsZS1pcGhvbmUtNXMtc3BhY2UtZ3JheVwiOiB7IGhlaWdodDogMTEzNiwgd2lkdGg6IDY0MCxcdHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblx0XCJhcHBsZS1pcGhvbmUtNXMtc2lsdmVyXCI6IHsgaGVpZ2h0OiAxMTM2LCB3aWR0aDogNjQwLFx0c2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXHRcImFwcGxlLWlwaG9uZS01cy1nb2xkXCI6IHsgaGVpZ2h0OiAxMTM2LCB3aWR0aDogNjQwLFx0c2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXG5cdCMjIDVjXG5cdFwiYXBwbGUtaXBob25lLTVjLWdyZWVuXCI6IHsgaGVpZ2h0OiAxMTM2LCB3aWR0aDogNjQwLHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblx0XCJhcHBsZS1pcGhvbmUtNWMtYmx1ZVwiOiB7IGhlaWdodDogMTEzNiwgd2lkdGg6IDY0MCxcdHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblx0XCJhcHBsZS1pcGhvbmUtNWMtcmVkXCI6IHsgaGVpZ2h0OiAxMTM2LCB3aWR0aDogNjQwLFx0c2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXHRcImFwcGxlLWlwaG9uZS01Yy13aGl0ZVwiOiB7IGhlaWdodDogMTEzNiwgd2lkdGg6IDY0MCxzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cdFwiYXBwbGUtaXBob25lLTVjLXllbGxvd1wiOiB7IGhlaWdodDogMTEzNiwgd2lkdGg6IDY0MCxzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cdFwiYXBwbGUtaXBob25lLTVjLXBpbmtcIjogeyBoZWlnaHQ6IDExMzYsIHdpZHRoOiA2NDAsXHRzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cblx0IyMgNnNcblx0XCJhcHBsZS1pcGhvbmUtNnMtc3BhY2UtZ3JheVwiIDogeyBoZWlnaHQ6IDEzMzQsIHdpZHRoOiA3NTAsXHRzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cdFwiYXBwbGUtaXBob25lLTZzLXNpbHZlclwiOiB7IGhlaWdodDogMTMzNCwgd2lkdGg6IDc1MCxcdHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblx0XCJhcHBsZS1pcGhvbmUtNnMtZ29sZFwiOiB7IGhlaWdodDogMTMzNCwgd2lkdGg6IDc1MCxcdHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblx0XCJhcHBsZS1pcGhvbmUtNnMtcm9zZS1nb2xkXCI6IHsgaGVpZ2h0OiAxMzM0LCB3aWR0aDogNzUwLFx0c2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXG5cdCMjIDZzIHBsdXNcblx0XCJhcHBsZS1pcGhvbmUtNnMtcGx1cy1nb2xkXCI6IHsgaGVpZ2h0OiAyMjA4LCB3aWR0aDogMTI0Miwgc2NhbGU6IDMsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXHRcImFwcGxlLWlwaG9uZS02cy1wbHVzLXNpbHZlclwiOiB7IGhlaWdodDogMjIwOCwgd2lkdGg6IDEyNDIsXHRzY2FsZTogMywgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cdFwiYXBwbGUtaXBob25lLTZzLXBsdXMtc3BhY2UtZ3JheVwiOiB7IGhlaWdodDogMjIwOCwgd2lkdGg6IDEyNDIsXHRzY2FsZTogMywgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cdFwiYXBwbGUtaXBob25lLTZzLXBsdXNcIjogeyBoZWlnaHQ6IDIyMDgsIHdpZHRoOiAxMjQyLFx0c2NhbGU6IDMsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXHRcImFwcGxlLWlwaG9uZS02cy1wbHVzLXJvc2UtZ29sZFwiOiB7IGhlaWdodDogMjIwOCwgd2lkdGg6IDEyNDIsXHRzY2FsZTogMywgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cblx0IyBpUGFkc1xuXG5cdCMjIEFpclxuXHRcImFwcGxlLWlwYWQtYWlyLTItZ29sZFwiOiB7IGhlaWdodDogMjA0OCwgd2lkdGg6IDE1MzYsXHRzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cdFwiYXBwbGUtaXBhZC1haXItMi1zaWx2ZXJcIjogeyBoZWlnaHQ6IDIwNDgsIHdpZHRoOiAxNTM2LFx0c2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXHRcImFwcGxlLWlwYWQtYWlyLTItc3BhY2UtZ3JheVwiOiB7IGhlaWdodDogMjA0OCwgd2lkdGg6IDE1MzYsXHRzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cblx0IyMgTWluaVxuXHRcImFwcGxlLWlwYWQtbWluaS00LWdvbGRcIjogeyBoZWlnaHQ6IDIwNDgsIHdpZHRoOiAxNTM2LFx0c2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXHRcImFwcGxlLWlwYWQtbWluaS00LXNwYWNlLWdyYXlcIjogeyBoZWlnaHQ6IDIwNDgsIHdpZHRoOiAxNTM2LFx0c2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXHRcImFwcGxlLWlwYWQtbWluaS00LXNpbHZlclwiOnsgaGVpZ2h0OiAyMDQ4LCB3aWR0aDogMTUzNiwgc2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXG5cdCMjIFByb1xuXHRcImFwcGxlLWlwYWQtcHJvLWdvbGRcIjogeyBoZWlnaHQ6IDI3MzIsIHdpZHRoOiAyMDQ4LCBzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cdFwiYXBwbGUtaXBhZC1wcm8tc2lsdmVyXCI6IHsgaGVpZ2h0OiAyNzMyLCB3aWR0aDogMjA0OCwgc2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXHRcImFwcGxlLWlwYWQtcHJvLXNwYWNlLWdyYXlcIiA6IHsgaGVpZ2h0OiAyNzMyLCB3aWR0aDogMjA0OCwgc2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxufVxuZXhwb3J0cy5mcmFtZXJGcmFtZXMgPVxuXHQ2NDA6MlxuXHQ3NTA6MlxuXHQ3Njg6MlxuXHQxMDgwOjNcblx0MTI0MjozXG5cdDE0NDA6NFxuXHQxNTM2OjJcblxuIyBEZXZpY2UgZnJhbWVzXG5leHBvcnRzLnJlYWxEZXZpY2VzID1cblx0MzIwOlxuXHRcdDQ4MDpcblx0XHRcdG5hbWU6XCJpcGhvbmVcIlxuXHRcdFx0ZGlzcGxheV9uYW1lOlwiaVBob25lXCJcblx0XHRcdHdpZHRoOjMyMFxuXHRcdFx0aGVpZ2h0OjQ4MFxuXHRcdFx0c2NhbGU6MVxuXHQ0ODA6XG5cdFx0ODU0OlxuXHRcdFx0bmFtZTpcIkFuZHJvaWQgT25lXCJcblx0XHRcdHdpZHRoOjQ4MFxuXHRcdFx0aGVpZ2h0Ojg1NFxuXHRcdFx0c2NhbGU6MS41XG5cblx0NjQwOlxuXHRcdDk2MDpcblx0XHRcdG5hbWU6XCJpcGhvbmUtNVwiXG5cdFx0XHRkaXNwbGF5X25hbWU6XCJpUGhvbmUgNFwiXG5cdFx0XHR3aWR0aDo2NDBcblx0XHRcdGhlaWdodDo5NjBcblx0XHRcdHNjYWxlOjJcblx0XHQxMTM2OlxuXHRcdFx0bmFtZTpcImlwaG9uZS01XCJcblx0XHRcdGRpc3BsYXlfbmFtZTpcImlQaG9uZSA1XCJcblx0XHRcdHdpZHRoOjY0MFxuXHRcdFx0aGVpZ2h0OjExMzZcblx0XHRcdHNjYWxlOjJcblx0NzIwOlxuXHRcdDEyODA6XG5cdFx0XHRuYW1lOlwiWEhEUElcIlxuXHRcdFx0d2lkdGg6NzIwXG5cdFx0XHRoZWlnaHQ6MTI4MFxuXHRcdFx0c2NhbGU6MlxuXHQ3NTA6XG5cdFx0MTExODpcblx0XHRcdG5hbWU6XCJpcGhvbmUtNnNcIlxuXHRcdFx0ZGlzcGxheV9uYW1lOlwiaVBob25lIDZzXCJcblx0XHRcdHdpZHRoOjc1MFxuXHRcdFx0aGVpZ2h0OjExMThcblx0XHRcdHNjYWxlOjJcblx0XHQxMzM0OlxuXHRcdFx0bmFtZTpcImlwaG9uZS02c1wiXG5cdFx0XHRkaXNwbGF5X25hbWU6XCJpUGhvbmUgNnNcIlxuXHRcdFx0d2lkdGg6NzUwXG5cdFx0XHRoZWlnaHQ6MTMzNFxuXHRcdFx0c2NhbGU6MlxuXHQ3Njg6XG5cdFx0MTAyNDpcblx0XHRcdG5hbWU6XCJpcGFkXCJcblx0XHRcdGRpc3BsYXlfbmFtZTpcImlQYWRcIlxuXHRcdFx0d2lkdGg6NzY4XG5cdFx0XHRoZWlnaHQ6MTAyNFxuXHRcdFx0c2NhbGU6MVxuXHRcdDEyODA6XG5cdFx0XHRuYW1lOlwiTmV4dXMgNFwiXG5cdFx0XHR3aWR0aDo3Njhcblx0XHRcdGhlaWdodDoxMjgwXG5cdFx0XHRzY2FsZToyXG5cdDgwMDpcblx0XHQxMjgwOlxuXHRcdFx0bmFtZTpcIk5leHVzIDdcIlxuXHRcdFx0d2lkdGg6ODAwXG5cdFx0XHRoZWlnaHQ6MTI4MFxuXHRcdFx0c2NhbGU6MVxuXHQxMDgwOlxuXHRcdDE5MjA6XG5cdFx0XHRuYW1lOlwiWFhIRFBJXCJcblx0XHRcdHdpZHRoOjEwODBcblx0XHRcdGhlaWdodDoxOTIwXG5cdFx0XHRzY2FsZTozXG5cdDEyMDA6XG5cdFx0MTkyMDpcblx0XHRcdG5hbWU6XCJOZXh1cyA3XCJcblx0XHRcdHdpZHRoOjEyMDBcblx0XHRcdGhlaWdodDoxOTIwXG5cdFx0XHRzY2FsZToyXG5cdDEyNDI6XG5cdFx0MjIwODpcblx0XHRcdG5hbWU6XCJpcGhvbmUtNnMtcGx1c1wiXG5cdFx0XHRkaXNwbGF5X25hbWU6XCJpUGhvbmUgNiBQbHVzXCJcblx0XHRcdHdpZHRoOjEyNDJcblx0XHRcdGhlaWdodDoyMjA4XG5cdFx0XHRzY2FsZTozXG5cdDEzMzQ6XG5cdFx0NzUwOlxuXHRcdFx0bmFtZTpcImlwaG9uZS02c1wiXG5cdFx0XHRkaXNwbGF5X25hbWU6XCJpUGhvbmUgNnNcIlxuXHRcdFx0d2lkdGg6NzUwXG5cdFx0XHRoZWlnaHQ6MTMzNFxuXHRcdFx0c2NhbGU6MlxuXHQxNDQwOlxuXHRcdDI1NjA6XG5cdFx0XHRuYW1lOlwiWFhYSERQSVwiXG5cdFx0XHR3aWR0aDoxNDQwXG5cdFx0XHRoZWlnaHQ6MjU2MFxuXHRcdFx0c2NhbGU6NFxuXHQxNDQxOlxuXHRcdDI1NjE6XG5cdFx0XHRuYW1lOlwiTmV4dXMgNlwiXG5cdFx0XHR3aWR0aDoxNDQwXG5cdFx0XHRoZWlnaHQ6MjU2MFxuXHRcdFx0c2NhbGU6NFxuXHQxNTM2OlxuXHRcdDIwNDg6XG5cdFx0XHRuYW1lOlwiaXBhZFwiXG5cdFx0XHRkaXNwbGF5X25hbWU6XCJpUGFkXCJcblx0XHRcdHdpZHRoOjE1MzZcblx0XHRcdGhlaWdodDoyMDQ4XG5cdFx0XHRzY2FsZToyXG5cdDE2MDA6XG5cdFx0MjA1Njpcblx0XHRcdG5hbWU6XCJOZXh1cyAxMFwiXG5cdFx0XHR3aWR0aDoxNjAwXG5cdFx0XHRoZWlnaHQ6MjA1NlxuXHRcdFx0c2NhbGU6MlxuXHQyMjA4OlxuXHRcdDEyNDI6XG5cdFx0XHRuYW1lOlwiaXBob25lLTZzLXBsdXNcIlxuXHRcdFx0ZGlzcGxheV9uYW1lOlwiaVBob25lIDYgUGx1c1wiXG5cdFx0XHR3aWR0aDoxMjQyXG5cdFx0XHRoZWlnaHQ6MjIwOFxuXHRcdFx0c2NhbGU6M1xuXHQyMDQ4OlxuXHRcdDE1MzY6XG5cdFx0XHRuYW1lOlwiTmV4dXMgOVwiXG5cdFx0XHR3aWR0aDoyMDQ4XG5cdFx0XHRoZWlnaHQ6MTUzNlxuXHRcdFx0c2NhbGU6MlxuXHRcdDI3MzI6XG5cdFx0XHRuYW1lOlwiaXBhZC1wcm9cIlxuXHRcdFx0ZGlzcGxheV9uYW1lOlwiaVBhZCBQcm9cIlxuXHRcdFx0d2lkdGg6MjA0OFxuXHRcdFx0aGVpZ2h0OjI3MzJcblx0XHRcdHNjYWxlOjJcblx0MjU2MDpcblx0XHQxNjAwOlxuXHRcdFx0bmFtZTpcIk5leHVzIDEwXCJcblx0XHRcdHdpZHRoOjI1NjBcblx0XHRcdGhlaWdodDoxNjAwXG5cdFx0XHRzY2FsZToyXG5cdDI3MzI6XG5cdFx0MjA0ODpcblx0XHRcdG5hbWU6XCJpcGFkLXByb1wiXG5cdFx0XHRkaXNwbGF5X25hbWU6XCJpUGFkIFByb1wiXG5cdFx0XHR3aWR0aDoyNzMyXG5cdFx0XHRoZWlnaHQ6MjA0OFxuXHRcdFx0c2NhbGU6MlxuIiwiaW9zID0gcmVxdWlyZSAnaW9zLWtpdCdcblxuZXhwb3J0cy5kZWZhdWx0cyA9XG5cdHRpdGxlOlwiVGl0bGVcIlxuXHRsZWZ0OnVuZGVmaW5lZFxuXHRyaWdodDpcIkVkaXRcIlxuXHRibHVyOnRydWVcblx0c3VwZXJMYXllcjp1bmRlZmluZWRcblx0dHlwZTpcIm5hdkJhclwiXG5cdGNvbG9yOidibHVlJ1xuXHR0aXRsZUNvbG9yOidibGFjaydcblx0YmFja2dyb3VuZENvbG9yOlwicmdiYSgyNTUsIDI1NSwgMjU1LCAuOClcIlxuXHRkaXZpZGVyQmFja2dyb3VuZENvbG9yOlwiI0IyQjJCMlwiXG5cbmV4cG9ydHMuZGVmYXVsdHMucHJvcHMgPSBPYmplY3Qua2V5cyhleHBvcnRzLmRlZmF1bHRzKVxuXG5leHBvcnRzLmNyZWF0ZSA9IChhcnJheSkgLT5cblx0c2V0dXAgPSBpb3MudXRpbHMuc2V0dXBDb21wb25lbnQoYXJyYXksIGV4cG9ydHMuZGVmYXVsdHMpXG5cblx0YmFyID0gbmV3IGlvcy5WaWV3XG5cdFx0bmFtZTpcIm5hdkJhclwiXG5cdFx0YmFja2dyb3VuZENvbG9yOiBzZXR1cC5iYWNrZ3JvdW5kQ29sb3Jcblx0XHRjb25zdHJhaW50czpcblx0XHRcdGxlYWRpbmc6MFxuXHRcdFx0dHJhaWxpbmc6MFxuXHRcdFx0dG9wOjBcblx0XHRcdGhlaWdodDo2NFxuXG5cdGJhci5iZyA9IG5ldyBpb3MuVmlld1xuXHRcdHN1cGVyTGF5ZXI6YmFyXG5cdFx0YmFja2dyb3VuZENvbG9yOid0cmFuc3BhcmVudCdcblx0XHRuYW1lOlwiLmJnXCJcblx0XHRjb25zdHJhaW50czpcblx0XHRcdGxlYWRpbmc6MFxuXHRcdFx0dHJhaWxpbmc6MFxuXHRcdFx0aGVpZ2h0OjQ0XG5cdFx0XHRib3R0b206MFxuXG5cdGJhci5kaXZpZGVyID0gbmV3IGlvcy5WaWV3XG5cdFx0YmFja2dyb3VuZENvbG9yOnNldHVwLmRpdmlkZXJCYWNrZ3JvdW5kQ29sb3Jcblx0XHRuYW1lOlwiLmRpdmlkZXJcIlxuXHRcdHN1cGVyTGF5ZXI6YmFyLmJnXG5cdFx0Y29uc3RyYWludHM6XG5cdFx0XHRoZWlnaHQ6LjVcblx0XHRcdGJvdHRvbTowXG5cdFx0XHRsZWFkaW5nOjBcblx0XHRcdHRyYWlsaW5nOjBcblxuXHRpZiBzZXR1cC5zdXBlckxheWVyXG5cdFx0c2V0dXAuc3VwZXJMYXllci5hZGRTdWJMYXllcihiYXIpXG5cblxuXHRpZiBzZXR1cC5ibHVyXG5cdFx0aW9zLnV0aWxzLmJnQmx1cihiYXIpXG5cblx0aWYgc2V0dXAuYmx1ciA9PSBmYWxzZSAmJiBzZXR1cC5iYWNrZ3JvdW5kQ29sb3IgPT0gXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIC44KVwiXG5cdFx0YmFyLmJhY2tncm91bmRDb2xvciA9ICd3aGl0ZSdcblxuXHRiYXIudHlwZSA9IHNldHVwLnR5cGVcblxuXHRmb3IgbGF5ZXIgaW4gRnJhbWVyLkN1cnJlbnRDb250ZXh0LmxheWVyc1xuXHRcdGlmIGxheWVyLnR5cGUgPT0gXCJzdGF0dXNCYXJcIlxuXHRcdFx0QHN0YXR1c0JhciA9IGxheWVyXG5cdFx0XHRiYXIucGxhY2VCZWhpbmQoQHN0YXR1c0JhcilcblxuXG5cdGlmIHR5cGVvZiBzZXR1cC50aXRsZSA9PSBcIm9iamVjdFwiXG5cdFx0c2V0dXAudGl0bGUgPSBzZXR1cC50aXRsZS5sYWJlbC5odG1sXG5cblxuXHRiYXIudGl0bGUgPSBuZXcgaW9zLlRleHRcblx0XHRmb250V2VpZ2h0Olwic2VtaWJvbGRcIlxuXHRcdHN1cGVyTGF5ZXI6YmFyLmJnXG5cdFx0dGV4dDpzZXR1cC50aXRsZVxuXHRcdG5hbWU6XCIudGl0bGVcIlxuXHRcdGNvbG9yOnNldHVwLnRpdGxlQ29sb3Jcblx0XHRjb25zdHJhaW50czpcblx0XHRcdGFsaWduOlwiaG9yaXpvbnRhbFwiXG5cdFx0XHRib3R0b206MTJcblxuXHRpb3MudXRpbHMuc3BlY2lhbENoYXIoYmFyLnRpdGxlKVxuXG5cdCMgSGFuZGxlIFJpZ2h0XG5cdGlmIHR5cGVvZiBzZXR1cC5yaWdodCA9PSBcInN0cmluZ1wiICYmIHR5cGVvZiBzZXR1cC5yaWdodCAhPSBcImJvb2xlYW5cIlxuXHRcdGJhci5yaWdodCA9IG5ldyBpb3MuQnV0dG9uXG5cdFx0XHRuYW1lOlwiLnJpZ2h0XCJcblx0XHRcdHN1cGVyTGF5ZXI6YmFyLmJnXG5cdFx0XHR0ZXh0OnNldHVwLnJpZ2h0XG5cdFx0XHRjb2xvcjpzZXR1cC5jb2xvclxuXHRcdFx0Zm9udFdlaWdodDo1MDBcblx0XHRcdGNvbnN0cmFpbnRzOlxuXHRcdFx0XHRib3R0b206MTJcblx0XHRcdFx0dHJhaWxpbmc6OFxuXHRcdGJhci5yaWdodC50eXBlID0gXCJidXR0b25cIlxuXHRcdGlvcy51dGlscy5zcGVjaWFsQ2hhcihiYXIucmlnaHQpXG5cdGlmIHR5cGVvZiBzZXR1cC5yaWdodCA9PSBcIm9iamVjdFwiXG5cdFx0YmFyLnJpZ2h0ID0gc2V0dXAucmlnaHRcblx0XHRiYXIucmlnaHQubmFtZSA9IFwiLnJpZ2h0XCJcblx0XHRiYXIucmlnaHQuc3VwZXJMYXllciA9IGJhci5iZ1xuXHRcdGJhci5yaWdodC5jb25zdHJhaW50cyA9XG5cdFx0XHR0cmFpbGluZzo4XG5cdFx0XHRib3R0b206MTJcblx0XHRpb3MubGF5b3V0LnNldChiYXIucmlnaHQpXG5cblx0IyBIYW5kbGUgTGVmdFxuXHRpZiB0eXBlb2Ygc2V0dXAubGVmdCA9PSBcInN0cmluZ1wiICYmIHR5cGVvZiBzZXR1cC5sZWZ0ICE9IFwiYm9vbGVhblwiXG5cdFx0c2V0TGVhZGluZyA9IDhcblx0XHRpZiBzZXR1cC5sZWZ0LmluZGV4T2YoXCI8XCIpICE9IC0xXG5cdFx0XHRzdmcgPSBpb3MudXRpbHMuc3ZnKGlvcy5hc3NldHMuY2hldnJvbilcblx0XHRcdGJhci5jaGV2cm9uID0gbmV3IGlvcy5WaWV3XG5cdFx0XHRcdG5hbWU6XCIuY2hldnJvblwiXG5cdFx0XHRcdHdpZHRoOnN2Zy53aWR0aFxuXHRcdFx0XHRoZWlnaHQ6c3ZnLmhlaWdodFxuXHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiXG5cdFx0XHRcdHN1cGVyTGF5ZXI6YmFyLmJnXG5cdFx0XHRiYXIuY2hldnJvbi5odG1sID0gc3ZnLnN2Z1xuXHRcdFx0YmFyLmNoZXZyb24uY29uc3RyYWludHMgPVxuXHRcdFx0XHRcdGJvdHRvbTo5XG5cdFx0XHRcdFx0bGVhZGluZzo4XG5cdFx0XHRzZXR1cC5sZWZ0ID0gc2V0dXAubGVmdC5yZXBsYWNlKFwiPFwiLCBcIlwiKVxuXHRcdFx0aW9zLnV0aWxzLmNoYW5nZUZpbGwoYmFyLmNoZXZyb24sIHNldHVwLmNvbG9yKVxuXHRcdFx0c2V0TGVhZGluZyA9IFtiYXIuY2hldnJvbiwgNF1cblx0XHRcdGlvcy5sYXlvdXQuc2V0KGJhci5jaGV2cm9uKVxuXG5cdFx0YmFyLmxlZnQgPSBuZXcgaW9zLkJ1dHRvblxuXHRcdFx0bmFtZTpcIi5sZWZ0XCJcblx0XHRcdHN1cGVyTGF5ZXI6YmFyLmJnXG5cdFx0XHR0ZXh0OnNldHVwLmxlZnRcblx0XHRcdGNvbG9yOnNldHVwLmNvbG9yXG5cdFx0XHRmb250V2VpZ2h0OjUwMFxuXHRcdFx0Y29uc3RyYWludHM6XG5cdFx0XHRcdGJvdHRvbToxMlxuXHRcdFx0XHRsZWFkaW5nOnNldExlYWRpbmdcblx0XHRiYXIubGVmdC50eXBlID0gXCJidXR0b25cIlxuXHRcdGlvcy51dGlscy5zcGVjaWFsQ2hhcihiYXIubGVmdClcblxuXHRcdGJhci5sZWZ0Lm9uIEV2ZW50cy5Ub3VjaFN0YXJ0LCAtPlxuXHRcdFx0aWYgYmFyLmNoZXZyb25cblx0XHRcdFx0YmFyLmNoZXZyb24uYW5pbWF0ZVxuXHRcdFx0XHRcdHByb3BlcnRpZXM6KG9wYWNpdHk6LjI1KVxuXHRcdFx0XHRcdHRpbWU6LjVcblx0XHRiYXIubGVmdC5vbiBFdmVudHMuVG91Y2hFbmQsIC0+XG5cdFx0XHRpZiBiYXIuY2hldnJvblxuXHRcdFx0XHRiYXIuY2hldnJvbi5hbmltYXRlXG5cdFx0XHRcdFx0cHJvcGVydGllczoob3BhY2l0eToxKVxuXHRcdFx0XHRcdHRpbWU6LjVcblxuXHRpZiB0eXBlb2Ygc2V0dXAubGVmdCA9PSBcIm9iamVjdFwiXG5cdFx0YmFyLmxlZnQgPSBzZXR1cC5sZWZ0XG5cdFx0YmFyLmxlZnQubmFtZSA9IFwiLmxlZnRcIlxuXHRcdGJhci5sZWZ0LnN1cGVyTGF5ZXIgPSBiYXIuYmdcblx0XHRiYXIubGVmdC5jb25zdHJhaW50cyA9XG5cdFx0XHRsZWFkaW5nOjhcblx0XHRcdGJvdHRvbToxMlxuXG5cdGlvcy5sYXlvdXQuc2V0KGJhci5sZWZ0KVxuXHRyZXR1cm4gYmFyXG4iLCJpb3MgPSByZXF1aXJlICdpb3Mta2l0J1xuXG5leHBvcnRzLmRlZmF1bHRzID0ge1xuXHRhY3Rpb25zOltcIlJlcGx5XCIsIFwiUmVwbHkgQWxsXCIsIFwiRm9yd2FyZFwiLCBcIlByaW50XCJdXG5cdGV4aXQ6XCJDYW5jZWxcIlxuXHRhbmltYXRlZDp0cnVlXG5cdGRlc2NyaXB0aW9uOnVuZGVmaW5lZFxuXHR0YXJnZXQ6dW5kZWZpbmVkXG59XG5cbmV4cG9ydHMuZGVmYXVsdHMucHJvcHMgPSBPYmplY3Qua2V5cyhleHBvcnRzLmRlZmF1bHRzKVxuXG5leHBvcnRzLmNyZWF0ZSA9IChhcnJheSkgLT5cblx0c2V0dXAgPSBpb3MudXRpbHMuc2V0dXBDb21wb25lbnQoYXJyYXksIGV4cG9ydHMuZGVmYXVsdHMpXG5cdGZvciBsIGluIEZyYW1lci5DdXJyZW50Q29udGV4dC5sYXllcnNcblx0XHRpZiBsLnR5cGUgPT0gJ3NoZWV0J1xuXHRcdFx0bC5kaXNtaXNzKClcblxuXHRzaGVldCA9IG5ldyBpb3MuVmlld1xuXHRcdG5hbWU6XCJzaGVldFwiXG5cdFx0YmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIlxuXHRcdGNvbnN0cmFpbnRzOlxuXHRcdFx0dG9wOjBcblx0XHRcdGxlYWRpbmc6MFxuXHRcdFx0dHJhaWxpbmc6MFxuXHRcdFx0Ym90dG9tOjBcblxuXHRzaGVldC50eXBlID0gJ3NoZWV0J1xuXG5cdHNoZWV0Lm1lbnUgPSBuZXcgTGF5ZXJcblx0XHRuYW1lOlwibWVudVwiXG5cdFx0c3VwZXJMYXllcjpzaGVldFxuXHRcdGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCJcblx0XHRib3JkZXJSYWRpdXM6aW9zLnB4KDEyKVxuXHRcdGNsaXA6dHJ1ZVxuXG5cdFx0aWYgaW9zLmlzUGFkKClcblx0XHRcdHNoZWV0VGlwID0gaW9zLnV0aWxzLnN2Zyhpb3MuYXNzZXRzLnNoZWV0VGlwKVxuXHRcdFx0c2hlZXQudGlwID0gbmV3IGlvcy5WaWV3XG5cdFx0XHRcdG5hbWU6Jy50aXAnXG5cdFx0XHRcdGNvbG9yOidibGFjaydcblx0XHRcdFx0c3VwZXJMYXllcjpzaGVldFxuXHRcdFx0XHRodG1sOnNoZWV0VGlwLnN2Z1xuXHRcdFx0XHRoZWlnaHQ6c2hlZXRUaXAuaGVpZ2h0IC0gNFxuXHRcdFx0XHR3aWR0aDpzaGVldFRpcC53aWR0aFxuXHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6J3RyYW5zcGFyZW50J1xuXHRcdFx0XHRjb25zdHJhaW50czpcblx0XHRcdFx0XHRob3Jpem9udGFsQ2VudGVyOnNldHVwLnRhcmdldFxuXHRcdFx0c2hlZXQubGlua2VkID0gc2V0dXAudGFyZ2V0XG5cdFx0XHRzaGVldC5saW5rZWQuaWdub3JlRXZlbnRzID0gdHJ1ZVxuXG5cdHBsYWNlID0gKHQsIGwpLT5cblx0XHR3ID0gaW9zLmRldmljZS53aWR0aFxuXHRcdGggPSBpb3MuZGV2aWNlLmhlaWdodFxuXHRcdGNlbnRlclggPSB3LzJcblx0XHQjIHggLSBheGlzXG5cdFx0aWYgdyAtIHQueCA+IGNlbnRlclggI2xlZnRcblx0XHRcdGlmIHQueCAtIGlvcy5weCgxNTApIDwgMFxuXHRcdFx0XHRsLmNvbnN0cmFpbnRzLmxlYWRpbmcgPSAxMFxuXHRcdFx0ZWxzZVxuXHRcdFx0XHRsLmNvbnN0cmFpbnRzLmhvcml6b250YWxDZW50ZXIgPSB0XG5cblx0XHRlbHNlICNyaWdodFxuXHRcdFx0aWYgdC54ICsgaW9zLnB4KDE1MCkgPiB3XG5cdFx0XHRcdGwuY29uc3RyYWludHMudHJhaWxpbmcgPSAxMFxuXHRcdFx0ZWxzZVxuXHRcdFx0XHRsLmNvbnN0cmFpbnRzLmhvcml6b250YWxDZW50ZXIgPSB0XG5cblx0XHRpZiB0LnkgKyBsLmhlaWdodCA8IGggI3RvcFxuXHRcdFx0XHRsLmNvbnN0cmFpbnRzLnRvcCA9IFt0LCA0MF1cblx0XHRcdFx0aWYgaW9zLmlzUGFkKClcblx0XHRcdFx0XHRzaGVldC50aXAuY29uc3RyYWludHMuYm90dG9tID0gW2wsIDFdXG5cdFx0ZWxzZSAjYm90dG9tXG5cdFx0XHRcdGwuY29uc3RyYWludHMuYm90dG9tID0gW3QsIDQwXVxuXHRcdFx0XHRpZiBpb3MuaXNQYWQoKVxuXHRcdFx0XHRcdHNoZWV0LnRpcC5jb25zdHJhaW50cy50b3AgPSBbbCwgMV1cblx0XHRcdFx0XHRzaGVldC50aXAucm90YXRpb24gPSAxODBcblx0XHRpZiBpb3MuaXNQYWQoKVxuXHRcdFx0aW9zLmxheW91dC5zZXQoc2hlZXQudGlwKVxuXHRzaGVldC5kaXNtaXNzID0gLT5cblxuXHRcdGlmIGlvcy5pc1Bob25lKClcblx0XHRcdHNoZWV0Lm1lbnUuYW5pbWF0ZVxuXHRcdFx0XHRwcm9wZXJ0aWVzOlxuXHRcdFx0XHRcdHk6aW9zLmRldmljZS5oZWlnaHRcblx0XHRcdFx0dGltZTouMjVcblxuXHRcdFx0c2hlZXQuY2FuY2VsLmFuaW1hdGVcblx0XHRcdFx0cHJvcGVydGllczpcblx0XHRcdFx0XHR5Omlvcy5kZXZpY2UuaGVpZ2h0ICsgaW9zLnB4KDc1KVxuXHRcdFx0XHR0aW1lOi4yNVxuXHRcdFx0c2hlZXQub3ZlcmxheS5hbmltYXRlXG5cdFx0XHRcdHByb3BlcnRpZXM6XG5cdFx0XHRcdFx0b3BhY2l0eTowXG5cdFx0XHRcdHRpbWU6LjI1XG5cdFx0XHRVdGlscy5kZWxheSAuMjUsIC0+XG5cdFx0XHRcdHNoZWV0LmRlc3Ryb3koKVxuXHRcdGVsc2Vcblx0XHRcdHNoZWV0LmxpbmtlZC5pZ25vcmVFdmVudHMgPSBmYWxzZVxuXHRcdFx0VXRpbHMuZGVsYXkgLjE1LCAtPlxuXHRcdFx0XHRzaGVldC5kZXN0cm95KClcblxuXG5cdHNoZWV0LmNhbGwgPSAtPlxuXHRcdGlmIGlvcy5pc1Bob25lKClcblx0XHRcdHNoZWV0Lm1lbnUueSA9IGlvcy5kZXZpY2UuaGVpZ2h0XG5cdFx0XHRzaGVldC5jYW5jZWwueSA9IGlvcy5kZXZpY2UuaGVpZ2h0ICsgaW9zLnB4KDc1KVxuXHRcdFx0c2hlZXQub3ZlcmxheS5vcGFjaXR5ID0gMFxuXG5cdFx0XHRzaGVldC5vdmVybGF5LmFuaW1hdGVcblx0XHRcdFx0cHJvcGVydGllczpcblx0XHRcdFx0XHRvcGFjaXR5Oi41XG5cdFx0XHRcdHRpbWU6LjI1XG5cdFx0XHRpb3MubGF5b3V0LmFuaW1hdGVcblx0XHRcdFx0dGFyZ2V0OltzaGVldC5tZW51LCBzaGVldC5jYW5jZWxdXG5cdFx0XHRcdHRpbWU6LjI1XG5cdFx0ZWxzZVxuXHRcdFx0cGxhY2Uoc2V0dXAudGFyZ2V0LCBzaGVldC5tZW51KVxuXHRcdFx0aW9zLmxheW91dC5zZXQoc2hlZXQubWVudSlcblxuXG5cblx0aWYgaW9zLmRldmljZS5uYW1lLmluZGV4T2YoXCJpcGFkXCIpID09IC0xXG5cdFx0c2hlZXQub3ZlcmxheSA9IG5ldyBpb3MuVmlld1xuXHRcdFx0bmFtZTpcIi5vdmVybGF5XCJcblx0XHRcdGJhY2tncm91bmRDb2xvcjpcImJsYWNrXCJcblx0XHRcdG9wYWNpdHk6LjVcblx0XHRcdHN1cGVyTGF5ZXI6c2hlZXRcblx0XHRcdGNvbnN0cmFpbnRzOlxuXHRcdFx0XHR0b3A6MFxuXHRcdFx0XHRsZWFkaW5nOjBcblx0XHRcdFx0dHJhaWxpbmc6MFxuXHRcdFx0XHRib3R0b206MFxuXHRcdHNoZWV0Lm92ZXJsYXkuc2VuZFRvQmFjaygpXG5cblx0XHRzaGVldC5tZW51LmNvbnN0cmFpbnRzID1cblx0XHRcdGxlYWRpbmc6MTBcblx0XHRcdHRyYWlsaW5nOjEwXG5cdFx0XHRib3R0b206NTcgKyA4ICsgMTBcblx0XHRcdGhlaWdodDooc2V0dXAuYWN0aW9ucy5sZW5ndGgpICogNTdcblxuXHRcdHNoZWV0LmNhbmNlbCA9IG5ldyBpb3MuQnV0dG9uXG5cdFx0XHRuYW1lOlwiLmNhbmNlbFwiXG5cdFx0XHR0eXBlOlwiYmlnXCJcblx0XHRcdHRleHQ6c2V0dXAuZXhpdFxuXHRcdFx0c3VwZXJMYXllcjpzaGVldFxuXHRcdFx0Y29uc3RyYWludHM6XG5cdFx0XHRcdGJvdHRvbToxMFxuXHRcdFx0XHRsZWFkaW5nOjBcblx0XHRcdFx0dHJhaWxpbmc6MFxuXHRcdHNoZWV0LmNhbmNlbC5vbiBFdmVudHMuVG91Y2hFbmQsIC0+XG5cdFx0XHRzaGVldC5kaXNtaXNzKClcblx0ZWxzZVxuXHRcdHNoZWV0Lm1lbnUuY29uc3RyYWludHMgPVxuXHRcdFx0d2lkdGg6MzAwXG5cdFx0XHRoZWlnaHQ6KHNldHVwLmFjdGlvbnMubGVuZ3RoKSAqIDU3XG5cblx0XHRzaGVldC5tZW51LnByb3BzID1cblx0XHRcdHNoYWRvd1k6MlxuXHRcdFx0c2hhZG93Qmx1cjppb3MucHgoMTAwKVxuXHRcdFx0c2hhZG93Q29sb3I6XCJyZ2JhKDAsMCwwLDAuMSlcIlxuXG5cdGlvcy5sYXlvdXQuc2V0KHNoZWV0KVxuXG5cdHNoZWV0LmFjdGlvbnNBcnJheSA9IFtdXG5cdHNoZWV0LmFjdGlvbnMgPSB7fVxuXHRmb3IgYSxpIGluIHNldHVwLmFjdGlvbnNcblx0XHRhY3Rpb24gPSBuZXcgaW9zLlZpZXdcblx0XHRcdG5hbWU6IFwiLmFjdGlvbnMuW1xcXCJcIiArIGEudG9Mb3dlckNhc2UoKSArIFwiXFxcIl1cIlxuXHRcdFx0YmFja2dyb3VuZENvbG9yOlwicmdiYSgyNTUsMjU1LDI1NSwxKVwiXG5cdFx0XHRzdXBlckxheWVyOnNoZWV0Lm1lbnVcblx0XHRcdGNvbnN0cmFpbnRzOlxuXHRcdFx0XHRsZWFkaW5nOjBcblx0XHRcdFx0dHJhaWxpbmc6MFxuXHRcdFx0XHRoZWlnaHQ6NTdcblx0XHRhY3Rpb24uc3R5bGVbXCItd2Via2l0LWJveC1zaGFkb3dcIl0gPSBcImluc2V0IDAgMCBcIiArIGlvcy5weCguNSkgKyBcInB4IHJnYmEoMCwwLDAsLjI1KVwiXG5cblx0XHRhY3Rpb24ubGFiZWwgPSBuZXcgaW9zLlRleHRcblx0XHRcdHRleHQ6YVxuXHRcdFx0Y29sb3I6aW9zLmNvbG9yKFwiYmx1ZVwiKVxuXHRcdFx0Zm9udFNpemU6MjBcblx0XHRcdHN1cGVyTGF5ZXI6YWN0aW9uXG5cdFx0XHRjb25zdHJhaW50czpcblx0XHRcdFx0YWxpZ246XCJjZW50ZXJcIlxuXG5cdFx0aW9zLnV0aWxzLnNwZWNpYWxDaGFyKGFjdGlvbi5sYWJlbClcblxuXHRcdGlmIGkgPT0gMFxuXHRcdFx0YWN0aW9uLmNvbnN0cmFpbnRzLnRvcCA9IDBcblx0XHRlbHNlXG5cdFx0XHRhY3Rpb24uY29uc3RyYWludHMudG9wID0gc2hlZXQuYWN0aW9uc0FycmF5W2kgLSAxXVxuXG5cdFx0YWN0aW9uLm9uIEV2ZW50cy5Ub3VjaFN0YXJ0LCAtPlxuXHRcdFx0QC5hbmltYXRlXG5cdFx0XHRcdHByb3BlcnRpZXM6XG5cdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOkAuYmFja2dyb3VuZENvbG9yLmRhcmtlbigxMClcblx0XHRcdFx0XHR0aW1lOi4yXG5cblx0XHRhY3Rpb24ub24gRXZlbnRzLlRvdWNoRW5kLCAtPlxuXHRcdFx0QC5hbmltYXRlXG5cdFx0XHRcdHByb3BlcnRpZXM6XG5cdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOlwicmdiYSgyNTUsMjU1LDI1NSwgLjgpXCJcblx0XHRcdFx0dGltZTouMlxuXHRcdFx0c2hlZXQuZGlzbWlzcygpXG5cblxuXG5cdFx0aW9zLmxheW91dC5zZXQoYWN0aW9uKVxuXG5cdFx0c2hlZXQuYWN0aW9uc0FycmF5LnB1c2ggYWN0aW9uXG5cdFx0c2hlZXQuYWN0aW9uc1thLnRvTG93ZXJDYXNlKCldID0gYWN0aW9uXG5cblxuXHRpZiBzZXR1cC5hbmltYXRlZFxuXHRcdHNoZWV0LmNhbGwoKVxuXHRpZiBpb3MuaXNQYWQoKVxuXHRcdHNoZWV0LnRpcC5icmluZ1RvRnJvbnQoKVxuXHRyZXR1cm4gc2hlZXRcbiIsImlvcyA9IHJlcXVpcmUgJ2lvcy1raXQnXG5cbmV4cG9ydHMuZGVmYXVsdHMgPSB7XG5cdGNhcnJpZXI6XCJcIlxuXHRuZXR3b3JrOlwiTFRFXCJcblx0YmF0dGVyeToxMDBcblx0c2lnbmFsOjVcblx0c3R5bGU6XCJkYXJrXCJcblx0Y2xvY2syNDpmYWxzZVxuXHR0eXBlOlwic3RhdHVzQmFyXCJcblx0c3VwZXJMYXllcjp1bmRlZmluZWRcbn1cblxuZXhwb3J0cy5kZWZhdWx0cy5wcm9wcyA9IE9iamVjdC5rZXlzKGV4cG9ydHMuZGVmYXVsdHMpXG5cbmV4cG9ydHMuY3JlYXRlID0gKGFycmF5KSAtPlxuXHRzZXR1cCA9IGlvcy51dGlscy5zZXR1cENvbXBvbmVudChhcnJheSwgZXhwb3J0cy5kZWZhdWx0cylcblx0c3RhdHVzQmFyID0gbmV3IExheWVyXG5cdFx0YmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIlxuXHRcdG5hbWU6XCJzdGF0dXNCYXIuYWxsXCJcblx0XHRzdXBlckxheWVyOnNldHVwLnN1cGVyTGF5ZXJcblx0c3RhdHVzQmFyLnR5cGUgPSBzZXR1cC50eXBlXG5cdHN0YXR1c0Jhci5jb25zdHJhaW50cyA9XG5cdFx0bGVhZGluZzowXG5cdFx0dHJhaWxpbmc6MFxuXHRcdGhlaWdodDoyMFxuXG5cdHN3aXRjaCBpb3MuZGV2aWNlLm5hbWVcblx0XHR3aGVuIFwiaXBob25lLTZzLXBsdXNcIlxuXHRcdFx0QHRvcENvbnN0cmFpbnQgPSA1XG5cdFx0XHRAYmF0dGVyeUljb24gPSA1XG5cdFx0XHRAYmx1ZXRvb3RoID0gNVxuXG5cdFx0d2hlbiBcImZ1bGxzY3JlZW5cIlxuXHRcdFx0QHRvcENvbnN0cmFpbnQgPSA1XG5cdFx0XHRAYmF0dGVyeUljb24gPSAtIDEyXG5cdFx0XHRAYmx1ZXRvb3RoID0gLSAxMFxuXHRcdGVsc2Vcblx0XHRcdEB0b3BDb25zdHJhaW50ID0gM1xuXHRcdFx0QGJhdHRlcnlJY29uID0gMlxuXHRcdFx0QGJsdWV0b290aCA9IDNcblxuXHRpZiBzZXR1cC5zdHlsZSA9PSBcImxpZ2h0XCJcblx0XHRAY29sb3IgPSBcIndoaXRlXCJcblx0ZWxzZVxuXHRcdEBjb2xvciA9IFwiYmxhY2tcIlxuXHRmb3IgbGF5ZXIgaW4gRnJhbWVyLkN1cnJlbnRDb250ZXh0LmxheWVyc1xuXHRcdGlmIGxheWVyLnR5cGUgPT0gXCJsb2NrU2NyZWVuXCJcblx0XHRcdEBpc0xvY2tTY3JlZW5QdXRpbHNlbnQgPSB0cnVlXG5cdGlmIEBpc0xvY2tTY3JlZW5QdXRpbHNlbnRcblx0XHRncmlwcGVyID0gbmV3IExheWVyIHN1cGVyTGF5ZXI6c3RhdHVzQmFyLCB3aWR0aDp1dGlscy5weCgzNyksIGhlaWdodDp1dGlscy5weCg1KSwgbmFtZTpcImdyaXBwZXJcIiwgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIiwgb3BhY2l0eTouNSwgbmFtZTpcImdyaXBwZXJcIlxuXHRcdGdyaXBwZXIuaHRtbCA9IFwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdFx0XHQ8c3ZnIHdpZHRoPScje3V0aWxzLnB4KDM3KX1weCcgaGVpZ2h0PScje3V0aWxzLnB4KDUpfXB4JyB2aWV3Qm94PScwIDAgMzcgNScgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJz5cblx0XHRcdFx0PCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjYuMSAoMjYzMTMpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdFx0XHQ8dGl0bGU+R3JpcHBlcjwvdGl0bGU+XG5cdFx0XHRcdDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdFx0XHQ8ZGVmcz48L2RlZnM+XG5cdFx0XHRcdDxnIGlkPSdQYWdlLTEnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnPlxuXHRcdFx0XHRcdDxnIGlkPSdLZXlib2FyZC9BdXRvLUNvbXBsZXRlLUJhci1DbG9zZWQnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC0xNjkuMDAwMDAwLCAtMi4wMDAwMDApJyBmaWxsPScjRkZGRkZGJz5cblx0XHRcdFx0XHRcdDxyZWN0IGlkPSdHcmlwcGVyJyB4PScxNjkuNScgeT0nMi41JyB3aWR0aD0nMzYnIGhlaWdodD0nNCcgcng9JzIuNSc+PC9yZWN0PlxuXHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0PC9nPlxuXHRcdFx0PC9zdmc+XCJcblx0XHRncmlwcGVyLmNvbnN0cmFpbnRzID1cblx0XHRcdGFsaWduOlwiaG9yaXpvbnRhbFwiXG5cdFx0XHR0b3A6MlxuXHRlbHNlXG5cdFx0QHRpbWUgPSBpb3MudXRpbHMuZ2V0VGltZSgpXG5cdFx0aWYgc2V0dXAuY2xvY2syNCA9PSBmYWxzZVxuXHRcdFx0aWYgQHRpbWUuaG91cnMgPiAxMVxuXHRcdFx0XHRAdGltZS5zdGFtcCA9IFwiUE1cIlxuXHRcdFx0ZWxzZVxuXHRcdFx0XHRAdGltZS5zdGFtcCA9IFwiQU1cIlxuXHRcdGVsc2Vcblx0XHRcdEB0aW1lLnN0YW1wID0gXCJcIlxuXHRcdHRpbWUgPSBuZXcgaW9zLlRleHQgc3R5bGU6XCJzdGF0dXNCYXJUaW1lXCIsIHRleHQ6aW9zLnV0aWxzLnRpbWVGb3JtYXR0ZXIoQHRpbWUsIHNldHVwLmNsb2NrMjQpICsgXCIgXCIgKyBAdGltZS5zdGFtcCwgZm9udFNpemU6MTIsIGZvbnRXZWlnaHQ6XCJzZW1pYm9sZFwiLCBzdXBlckxheWVyOnN0YXR1c0JhciwgY29sb3I6QGNvbG9yLCBuYW1lOlwidGltZVwiXG5cdFx0dGltZS5jb25zdHJhaW50cyA9XG5cdFx0XHRhbGlnbjpcImhvcml6b250YWxcIlxuXHRcdFx0dG9wOkB0b3BDb25zdHJhaW50XG5cdHNpZ25hbCA9IFtdXG5cdGlmIHNldHVwLnNpZ25hbCA8IDFcblx0XHRub05ldHdvcmsgPSBuZXcgaW9zLlRleHQgc3VwZXJMYXllcjpzdGF0dXNCYXIsIGZvbnRTaXplOjEyLCB0ZXh0OlwiTm8gTmV0d29ya1wiXG5cdFx0bm9OZXR3b3JrLmNvbnN0cmFpbnRzID1cblx0XHRcdGxlYWRpbmc6N1xuXHRcdFx0dG9wOjNcblx0ZWxzZVxuXHRcdGZvciBpIGluIFswLi4uc2V0dXAuc2lnbmFsXVxuXHRcdFx0ZG90ID0gbmV3IExheWVyIGhlaWdodDppb3MudXRpbHMucHgoNS41KSwgd2lkdGg6aW9zLnV0aWxzLnB4KDUuNSksIGJhY2tncm91bmRDb2xvcjpcImJsYWNrXCIsIHN1cGVyTGF5ZXI6c3RhdHVzQmFyLCBib3JkZXJSYWRpdXM6aW9zLnV0aWxzLnB4KDUuNSkvMiwgYmFja2dyb3VuZENvbG9yOkBjb2xvciwgbmFtZTpcInNpZ25hbFsje2l9XVwiXG5cdFx0XHRpZiBpID09IDBcblx0XHRcdFx0ZG90LmNvbnN0cmFpbnRzID1cblx0XHRcdFx0XHRsZWFkaW5nOjdcblx0XHRcdFx0XHR0b3A6N1xuXHRcdFx0ZWxzZVxuXHRcdFx0XHRkb3QuY29uc3RyYWludHMgPVxuXHRcdFx0XHRcdGxlYWRpbmc6W3NpZ25hbFtpIC0gMSBdLCAxXVxuXHRcdFx0XHRcdHRvcDo3XG5cdFx0XHRzaWduYWwucHVzaCBkb3Rcblx0XHRcdGlvcy5sYXlvdXQuc2V0KClcblx0XHRpZiBzZXR1cC5zaWduYWwgPCA1XG5cdFx0XHRub25Eb3RzID0gNSAtIHNldHVwLnNpZ25hbFxuXHRcdFx0Zm9yIGkgaW4gWzAuLi5ub25Eb3RzXVxuXHRcdFx0XHRub25Eb3QgPSBuZXcgTGF5ZXIgaGVpZ2h0Omlvcy51dGlscy5weCg1LjUpLCB3aWR0aDppb3MudXRpbHMucHgoNS41KSwgc3VwZXJMYXllcjpzdGF0dXNCYXIsIGJvcmRlclJhZGl1czppb3MudXRpbHMucHgoNS41KS8yLCBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiLCBuYW1lOlwic2lnbmFsWyN7c2lnbmFsLmxlbmd0aH1dXCJcblx0XHRcdFx0bm9uRG90LnN0eWxlLmJvcmRlciA9IFwiI3tpb3MudXRpbHMucHgoMSl9cHggc29saWQgI3tAY29sb3J9XCJcblx0XHRcdFx0bm9uRG90LmNvbnN0cmFpbnRzID1cblx0XHRcdFx0XHRsZWFkaW5nOltzaWduYWxbc2lnbmFsLmxlbmd0aCAtIDFdLCAxXVxuXHRcdFx0XHRcdHRvcDo3XG5cdFx0XHRcdHNpZ25hbC5wdXNoIG5vbkRvdFxuXHRcdFx0XHRpb3MubGF5b3V0LnNldCgpXG5cdFx0Y2FycmllciA9IG5ldyBpb3MuVGV4dCBzdHlsZTpcInN0YXR1c0JhckNhcnJpZXJcIiwgdGV4dDpzZXR1cC5jYXJyaWVyLCBzdXBlckxheWVyOnN0YXR1c0JhciwgZm9udFNpemU6MTIsIGNvbG9yOkBjb2xvciwgbmFtZTpcImNhcnJpZXJcIiwgdGV4dFRyYW5zZm9ybTpcImNhcGl0YWxpemVcIlxuXHRcdGNhcnJpZXIuY29uc3RyYWludHMgPVxuXHRcdFx0bGVhZGluZzpbc2lnbmFsW3NpZ25hbC5sZW5ndGggLSAxXSwgN11cblx0XHRcdHRvcDozXG5cdFx0aW9zLmxheW91dC5zZXQoKVxuXHRcdGlmIHNldHVwLmNhcnJpZXJcblx0XHRcdG5ldHdvcmsgPSBuZXcgaW9zLlRleHQgc3R5bGU6XCJzdGF0dXNCYXJOZXR3b3JrXCIsIHRleHQ6c2V0dXAubmV0d29yaywgc3VwZXJMYXllcjpzdGF0dXNCYXIsIGZvbnRTaXplOjEyLCBjb2xvcjpAY29sb3IsIG5hbWU6XCJuZXR3b3JrXCIsIHRleHRUcmFuc2Zvcm06XCJ1cHBlcmNhc2VcIlxuXHRcdFx0bmV0d29yay5jb25zdHJhaW50cyA9XG5cdFx0XHRcdGxlYWRpbmc6W2NhcnJpZXIsIDVdXG5cdFx0XHRcdHRvcDozXG5cblx0XHRpZiBzZXR1cC5jYXJyaWVyID09IFwiXCIgfHwgc2V0dXAuY2FycmllciA9PSBcIndpZmlcIlxuXHRcdFx0bmV0d29ya0ljb24gPSBpb3MudXRpbHMuc3ZnKGlvcy5hc3NldHMubmV0d29yaywgQGNvbG9yKVxuXHRcdFx0bmV0d29yayA9IG5ldyBMYXllciB3aWR0aDpuZXR3b3JrSWNvbi53aWR0aCwgaGVpZ2h0Om5ldHdvcmtJY29uLmhlaWdodCwgc3VwZXJMYXllcjpzdGF0dXNCYXIsIGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCIsIG5hbWU6XCJuZXR3b3JrXCJcblx0XHRcdG5ldHdvcmsuaHRtbCA9IG5ldHdvcmtJY29uLnN2Z1xuXHRcdFx0aW9zLnV0aWxzLmNoYW5nZUZpbGwobmV0d29yaywgQGNvbG9yKVxuXHRcdFx0bmV0d29yay5jb25zdHJhaW50cyA9XG5cdFx0XHRcdGxlYWRpbmc6W3NpZ25hbFtzaWduYWwubGVuZ3RoIC0gMV0sIDVdXG5cdFx0XHRcdHRvcDpAdG9wQ29uc3RyYWludFxuXG5cdGJhdHRlcnlJY29uID0gbmV3IExheWVyIHdpZHRoOmlvcy51dGlscy5weCgyNSksIGhlaWdodDppb3MudXRpbHMucHgoMTApLCBzdXBlckxheWVyOnN0YXR1c0JhciwgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIiwgbmFtZTpcImJhdHRlcnlJY29uXCJcblx0aWYgc2V0dXAuYmF0dGVyeSA+IDcwXG5cdFx0aGlnaEJhdHRlcnkgPSBpb3MudXRpbHMuc3ZnKGlvcy5hc3NldHMuYmF0dGVyeUhpZ2gpXG5cdFx0YmF0dGVyeUljb24uaHRtbCA9IGhpZ2hCYXR0ZXJ5LnN2Z1xuXHRcdGlvcy51dGlscy5jaGFuZ2VGaWxsKGJhdHRlcnlJY29uLCBAY29sb3IpXG5cblx0aWYgc2V0dXAuYmF0dGVyeSA8PSA3MCAmJiBzZXR1cC5iYXR0ZXJ5ID4gMjBcblx0XHRtaWRCYXR0ZXJ5ID0gaW9zLnV0aWxzLnN2Zyhpb3MuYXNzZXRzLmJhdHRlcnlNaWQpXG5cdFx0YmF0dGVyeUljb24uaHRtbCA9IG1pZEJhdHRlcnkuc3ZnXG5cdFx0aW9zLnV0aWxzLmNoYW5nZUZpbGwoYmF0dGVyeUljb24sIEBjb2xvcilcblxuXHRpZiBzZXR1cC5iYXR0ZXJ5IDw9IDIwXG5cdFx0bG93QmF0dGVyeSA9IGlvcy51dGlscy5zdmcoaW9zLmFzc2V0cy5iYXR0ZXJ5TG93KVxuXHRcdGJhdHRlcnlJY29uLmh0bWwgPSBsb3dCYXR0ZXJ5LnN2Z1xuXHRcdGlvcy51dGlscy5jaGFuZ2VGaWxsKGJhdHRlcnlJY29uLCBAY29sb3IpXG5cblx0YmF0dGVyeUljb24uY29uc3RyYWludHMgPVxuXHRcdHRyYWlsaW5nIDogN1xuXHRcdHRvcDpAYmF0dGVyeUljb25cblxuXHRiYXR0ZXJ5UGVyY2VudCA9IG5ldyBpb3MuVGV4dCBzdHlsZTpcInN0YXR1c0JhckJhdHRlcnlQZXJjZW50XCIsIHRleHQ6c2V0dXAuYmF0dGVyeSArIFwiJVwiLCBzdXBlckxheWVyOnN0YXR1c0JhciwgZm9udFNpemU6MTIsIGNvbG9yOkBjb2xvciwgbmFtZTpcImJhdHRlcnlQZXJjZW50XCJcblx0YmF0dGVyeVBlcmNlbnQuY29uc3RyYWludHMgPVxuXHRcdHRyYWlsaW5nOiBbYmF0dGVyeUljb24sIDNdXG5cdFx0dmVydGljYWxDZW50ZXI6dGltZVxuXG5cdGJsdWV0b290aFNWRyA9IGlvcy51dGlscy5zdmcoaW9zLmFzc2V0cy5ibHVldG9vdGgpXG5cdGJsdWV0b290aCA9IG5ldyBMYXllciB3aWR0aDpibHVldG9vdGhTVkcud2lkdGgsIGhlaWdodDpibHVldG9vdGhTVkcuaGVpZ2h0LCBzdXBlckxheWVyOnN0YXR1c0Jhciwgb3BhY2l0eTouNSwgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIiwgbmFtZTpcImJsdWV0b290aFwiXG5cdGJsdWV0b290aC5odG1sID0gYmx1ZXRvb3RoU1ZHLnN2Z1xuXHRpb3MudXRpbHMuY2hhbmdlRmlsbChibHVldG9vdGgsIEBjb2xvcilcblx0Ymx1ZXRvb3RoLmNvbnN0cmFpbnRzID1cblx0XHR0b3A6IEBibHVldG9vdGhcblx0XHR0cmFpbGluZzogW2JhdHRlcnlQZXJjZW50LCA3XVxuXG5cdGlvcy5sYXlvdXQuc2V0KClcblxuXHQjIEV4cG9ydCBzdGF0dXNCYXJcblx0c3RhdHVzQmFyLmJhdHRlcnkgPSB7fVxuXHRzdGF0dXNCYXIuYmF0dGVyeS5wZXJjZW50ID0gYmF0dGVyeVBlcmNlbnRcblx0c3RhdHVzQmFyLmJhdHRlcnkuaWNvbiA9IGJhdHRlcnlJY29uXG5cdHN0YXR1c0Jhci5ibHVldG9vdGggPSBibHVldG9vdGhcblx0c3RhdHVzQmFyLnRpbWUgPSB0aW1lXG5cdHN0YXR1c0Jhci5uZXR3b3JrID0gbmV0d29ya1xuXHRzdGF0dXNCYXIuY2FycmllciA9IGNhcnJpZXJcblx0c3RhdHVzQmFyLnNpZ25hbCA9IHNpZ25hbFxuXHRyZXR1cm4gc3RhdHVzQmFyXG4iLCJpb3MgPSByZXF1aXJlICdpb3Mta2l0J1xuXG5leHBvcnRzLmRlZmF1bHRzID0ge1xuXHR0YWI6IHtcblx0XHRsYWJlbDogXCJsYWJlbFwiXG5cdFx0aWNvbjpcIjw/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyc/PlxuXHRcdFx0PHN2ZyB3aWR0aD0nMjVweCcgaGVpZ2h0PScyNXB4JyB2aWV3Qm94PScwIDAgMjUgMjUnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayc+XG5cdFx0XHRcdDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy42LjEgKDI2MzEzKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHRcdFx0PHRpdGxlPjE8L3RpdGxlPlxuXHRcdFx0XHQ8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHRcdFx0PGRlZnM+PC9kZWZzPlxuXHRcdFx0XHQ8ZyBpZD0nUGFnZS0xJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJyBmaWxsLW9wYWNpdHk9JzEnPlxuXHRcdFx0XHRcdDxnIGlkPSdCb3R0b20tQmFyL1RhYi1CYXInIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC0yNS4wMDAwMDAsIC03LjAwMDAwMCknIGZpbGw9JyMwMDc2RkYnPlxuXHRcdFx0XHRcdFx0PGcgaWQ9J1BsYWNlaG9sZGVycycgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMjUuMDAwMDAwLCA3LjAwMDAwMCknPlxuXHRcdFx0XHRcdFx0XHQ8cmVjdCBpZD0nMScgeD0nMCcgeT0nMCcgd2lkdGg9JzI1JyBoZWlnaHQ9JzI1JyByeD0nMyc+PC9yZWN0PlxuXHRcdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0PC9nPlxuXHRcdFx0PC9zdmc+XCJcblx0XHRhY3RpdmU6IHVuZGVmaW5lZFxuXHRcdGluYWN0aXZlOiB1bmRlZmluZWRcblx0XHR0YWJCYXI6IHVuZGVmaW5lZFxuXHRcdHR5cGU6IFwidGFiXCJcblx0fVxuXHRiYXI6IHtcblx0XHR0YWJzOiBbXVxuXHRcdHN0YXJ0OjBcblx0XHR0eXBlOlwidGFiQmFyXCJcblx0XHRiYWNrZ3JvdW5kQ29sb3I6XCJ3aGl0ZVwiXG5cdFx0YWN0aXZlQ29sb3I6XCJibHVlXCJcblx0XHRpbmFjdGl2ZUNvbG9yOlwiZ3JheVwiXG5cdFx0Ymx1cjp0cnVlXG5cdH1cbn1cblxuZXhwb3J0cy5kZWZhdWx0cy50YWIucHJvcHMgPSBPYmplY3Qua2V5cyhleHBvcnRzLmRlZmF1bHRzLnRhYilcbmV4cG9ydHMuZGVmYXVsdHMuYmFyLnByb3BzID0gT2JqZWN0LmtleXMoZXhwb3J0cy5kZWZhdWx0cy5iYXIpXG5cbmV4cG9ydHMudGFiID0gKGFycmF5KSAtPlxuXHRzZXR1cCA9IGlvcy51dGlscy5zZXR1cENvbXBvbmVudChhcnJheSwgZXhwb3J0cy5kZWZhdWx0cy50YWIpXG5cdHNwZWNzID1cblx0XHR3aWR0aDogNzVcblxuXHRzd2l0Y2ggaW9zLmRldmljZS5uYW1lXG5cdFx0d2hlbiBcImlwaG9uZS01XCJcblx0XHRcdHNwZWNzLndpZHRoID0gNTVcblxuXHR0YWIgPSBuZXcgaW9zLlZpZXdcblx0XHRiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiXG5cdFx0bmFtZTpzZXR1cC5sYWJlbFxuXHRcdGNvbnN0cmFpbnRzOlxuXHRcdFx0d2lkdGg6c3BlY3Mud2lkdGhcblx0XHRcdGhlaWdodDo0OVxuXG5cdHRhYi52aWV3ID0gbmV3IGlvcy5WaWV3XG5cdFx0bmFtZTpzZXR1cC5sYWJlbCArIFwiLnZpZXdcIlxuXHRcdGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCJcblx0XHRjb25zdHJhaW50czpcblx0XHRcdHRvcDowXG5cdFx0XHRib3R0b206MFxuXHRcdFx0bGVhZGluZzowXG5cdFx0XHR0cmFpbGluZzowXG5cblx0IyBDcmVhdGUgQWN0aXZlXG5cdHRhYi5hY3RpdmUgPSBuZXcgaW9zLlZpZXdcblx0XHRuYW1lOlwiLmFjdGl2ZVwiXG5cdFx0YmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIlxuXHRcdGNvbnN0cmFpbnRzOlxuXHRcdFx0dG9wOjBcblx0XHRcdGJvdHRvbTowXG5cdFx0XHRsZWFkaW5nOjBcblx0XHRcdHRyYWlsaW5nOjBcblx0XHRzdXBlckxheWVyOnRhYlxuXG5cdHRhYi5hY3RpdmUuaWNvbiA9IG5ldyBpb3MuVmlld1xuXHRcdG5hbWU6XCIuYWN0aXZlLmljb25cIlxuXHRcdGNvbnN0cmFpbnRzOlxuXHRcdFx0d2lkdGg6MjVcblx0XHRcdGhlaWdodDoyNVxuXHRcdFx0YWxpZ246XCJob3Jpem9udGFsXCJcblx0XHRcdHRvcDo3XG5cdFx0YmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIlxuXHRcdHN1cGVyTGF5ZXI6dGFiLmFjdGl2ZVxuXHRpZiBzZXR1cC5hY3RpdmUgPT0gdW5kZWZpbmVkXG5cdFx0c3ZnRnJhbWUgPSBpb3MudXRpbHMuc3ZnKHNldHVwLmljb24pXG5cdFx0dGFiLmFjdGl2ZS5pY29uLmh0bWwgPSBzdmdGcmFtZS5zdmdcblx0XHR0YWIuYWN0aXZlLmljb24ud2lkdGggPSBzdmdGcmFtZS53aWR0aFxuXHRcdHRhYi5hY3RpdmUuaWNvbi5oZWlnaHQgPSBzdmdGcmFtZS5oZWlnaHRcblx0ZWxzZVxuXHRcdHNldHVwLmFjdGl2ZS5zdXBlckxheWVyID0gdGFiLmFjdGl2ZS5pY29uXG5cdFx0c2V0dXAuYWN0aXZlLnByb3BzID1cblx0XHRcdHdpZHRoOnRhYi5hY3RpdmUuaWNvbi53aWR0aFxuXHRcdFx0aGVpZ2h0OnRhYi5hY3RpdmUuaWNvbi5oZWlnaHRcblxuXHQjIENyZWF0ZSBJbmFjdGl2ZVxuXHR0YWIuaW5hY3RpdmUgPSBuZXcgaW9zLlZpZXdcblx0XHRiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiXG5cdFx0bmFtZTpcIi5pbmFjdGl2ZVwiXG5cdFx0Y29uc3RyYWludHM6XG5cdFx0XHR0b3A6MFxuXHRcdFx0Ym90dG9tOjBcblx0XHRcdGxlYWRpbmc6MFxuXHRcdFx0dHJhaWxpbmc6MFxuXHRcdHN1cGVyTGF5ZXI6dGFiXG5cblx0dGFiLmluYWN0aXZlLmljb24gPSBuZXcgaW9zLlZpZXdcblx0XHRjb25zdHJhaW50czpcblx0XHRcdHdpZHRoOjI1XG5cdFx0XHRoZWlnaHQ6MjVcblx0XHRcdGFsaWduOlwiaG9yaXpvbnRhbFwiXG5cdFx0XHR0b3A6N1xuXHRcdGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCJcblx0XHRuYW1lOlwiLmluYWN0aXZlLmljb25cIlxuXHRcdHN1cGVyTGF5ZXI6dGFiLmluYWN0aXZlXG5cblx0dGFiLmxhYmVsID0gbmV3IGlvcy5UZXh0XG5cdFx0dGV4dDpzZXR1cC5sYWJlbFxuXHRcdHN1cGVyTGF5ZXI6dGFiXG5cdFx0Y29sb3I6XCIjOTI5MjkyXCJcblx0XHRmb250U2l6ZToxMFxuXHRcdG5hbWU6XCIubGFiZWxcIlxuXHRcdHRleHRUcmFuc2Zvcm06XCJjYXBpdGFsaXplXCJcblxuXHR0YWIubGFiZWwuY29uc3RyYWludHMgPVxuXHRcdGJvdHRvbToyXG5cdFx0aG9yaXpvbnRhbENlbnRlcjp0YWIuYWN0aXZlLmljb25cblxuXHRpZiBzZXR1cC5pbmFjdGl2ZSA9PSB1bmRlZmluZWRcblx0XHRzdmdGcmFtZSA9IGlvcy51dGlscy5zdmcoc2V0dXAuaWNvbilcblx0XHR0YWIuaW5hY3RpdmUuaWNvbi5odG1sID0gc3ZnRnJhbWUuc3ZnXG5cdFx0dGFiLmluYWN0aXZlLmljb24ud2lkdGggPSBzdmdGcmFtZS53aWR0aFxuXHRcdHRhYi5pbmFjdGl2ZS5pY29uLmhlaWdodCA9IHN2Z0ZyYW1lLmhlaWdodFxuXG5cdGVsc2Vcblx0XHRzZXR1cC5pbmFjdGl2ZS5zdXBlckxheWVyID0gdGFiLmluYWN0aXZlLmljb25cblx0XHRzZXR1cC5pbmFjdGl2ZS5wcm9wcyA9XG5cdFx0XHR3aWR0aDp0YWIuaW5hY3RpdmUuaWNvbi53aWR0aFxuXHRcdFx0aGVpZ2h0OnRhYi5pbmFjdGl2ZS5pY29uLmhlaWdodFxuXG5cdHJldHVybiB0YWJcblxuZXhwb3J0cy5iYXIgPSAoYXJyYXkpIC0+XG5cdHNldHVwID0gaW9zLnV0aWxzLnNldHVwQ29tcG9uZW50KGFycmF5LCBleHBvcnRzLmRlZmF1bHRzLmJhcilcblxuXHQjIElmIG5vIHRhYnMsIG1ha2UgZHVtbXkgdGFic1xuXHRpZiBzZXR1cC50YWJzLmxlbmd0aCA9PSAwXG5cdFx0ZHVtbXlUYWIgPSBuZXcgZXhwb3J0cy50YWJcblx0XHRkdW1teVRhYjIgPSBuZXcgZXhwb3J0cy50YWJcblx0XHRzZXR1cC50YWJzLnB1c2ggZHVtbXlUYWJcblx0XHRzZXR1cC50YWJzLnB1c2ggZHVtbXlUYWIyXG5cblx0c3BlY3MgPVxuXHRcdHdpZHRoOiA3NVxuXHRzd2l0Y2ggaW9zLmRldmljZS5uYW1lXG5cdFx0d2hlbiBcImlwaG9uZS01XCJcblx0XHRcdHNwZWNzLndpZHRoID0gNTVcblxuXHRiYXIgPSBuZXcgaW9zLlZpZXdcblx0XHRiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiXG5cdFx0bmFtZTpcInRhYkJhclwiXG5cdFx0Y29uc3RyYWludHM6XG5cdFx0XHRsZWFkaW5nOjBcblx0XHRcdHRyYWlsaW5nOjBcblx0XHRcdGJvdHRvbTowXG5cdFx0XHRoZWlnaHQ6NDlcblxuXHRiYXIuYmcgPSBuZXcgaW9zLlZpZXdcblx0XHRzdXBlckxheWVyOmJhclxuXHRcdG5hbWU6XCIuYmdcIlxuXHRcdGNvbnN0cmFpbnRzOlxuXHRcdFx0bGVhZGluZzowXG5cdFx0XHR0cmFpbGluZzowXG5cdFx0XHRib3R0b206MFxuXHRcdFx0aGVpZ2h0OjQ5XG5cblx0YmFyLmRpdmlkZXIgPSBuZXcgaW9zLlZpZXdcblx0XHRiYWNrZ3JvdW5kQ29sb3I6XCIjQjJCMkIyXCJcblx0XHRuYW1lOlwiLmRpdmlkZXJcIlxuXHRcdHN1cGVyTGF5ZXI6YmFyXG5cdFx0Y29uc3RyYWludHM6XG5cdFx0XHR0b3A6MFxuXHRcdFx0bGVhZGluZzowXG5cdFx0XHR0cmFpbGluZzowXG5cdFx0XHRoZWlnaHQ6LjVcblx0YmFyLmJveCA9IG5ldyBpb3MuVmlld1xuXHRcdHN1cGVyTGF5ZXI6YmFyXG5cdFx0YmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIlxuXHRcdG5hbWU6XCIuYm94XCJcblx0XHRjb25zdHJhaW50czpcblx0XHRcdGhlaWdodDo0OVxuXHRcdFx0d2lkdGg6c2V0dXAudGFicy5sZW5ndGggKiBzcGVjcy53aWR0aFxuXG5cblx0c2V0QWN0aXZlID0gKHRhYkluZGV4KSAtPlxuXHRcdGZvciB0YWIsIGluZGV4IGluIHNldHVwLnRhYnNcblx0XHRcdGlmIGluZGV4ID09IHRhYkluZGV4XG5cdFx0XHRcdHRhYi5sYWJlbC5jb2xvciA9IGlvcy51dGlscy5jb2xvcihzZXR1cC5hY3RpdmVDb2xvcilcblx0XHRcdFx0dGFiLmFjdGl2ZS52aXNpYmxlID0gdHJ1ZVxuXHRcdFx0XHR0YWIuaW5hY3RpdmUudmlzaWJsZSA9IGZhbHNlXG5cdFx0XHRcdHRhYi52aWV3LnZpc2libGUgPSB0cnVlXG5cdFx0XHRlbHNlXG5cdFx0XHRcdHRhYi5sYWJlbC5jb2xvciA9IGlvcy51dGlscy5jb2xvcihzZXR1cC5pbmFjdGl2ZUNvbG9yKVxuXHRcdFx0XHR0YWIuYWN0aXZlLnZpc2libGUgPSBmYWxzZVxuXHRcdFx0XHR0YWIuaW5hY3RpdmUudmlzaWJsZSA9IHRydWVcblx0XHRcdFx0dGFiLnZpZXcudmlzaWJsZSA9IGZhbHNlXG5cblxuXHRmb3IgdGFiLCBpbmRleCBpbiBzZXR1cC50YWJzXG5cdFx0I0NoZWNrIGZvciB2YWlsZCB0YWIgb2JqZWN0XG5cdFx0YmFyLmJveC5hZGRTdWJMYXllcih0YWIpXG5cdFx0IyBDaGFuZ2UgY29sb3JzXG5cdFx0aW9zLnV0aWxzLmNoYW5nZUZpbGwodGFiLmFjdGl2ZS5pY29uLCBpb3MudXRpbHMuY29sb3Ioc2V0dXAuYWN0aXZlQ29sb3IpKVxuXHRcdGlvcy51dGlscy5jaGFuZ2VGaWxsKHRhYi5pbmFjdGl2ZS5pY29uLCBpb3MudXRpbHMuY29sb3Ioc2V0dXAuaW5hY3RpdmVDb2xvcikpXG5cdFx0dGFiLmxhYmVsLmNvbG9yID0gaW9zLnV0aWxzLmNvbG9yKHNldHVwLmluYWN0aXZlQ29sb3IpXG5cdFx0YmFyLmJnLmJhY2tncm91bmRDb2xvciA9IHNldHVwLmJhY2tncm91bmRDb2xvclxuXG5cdFx0aWYgc2V0dXAuYmx1clxuXHRcdFx0YmFyLmJnLmJhY2tncm91bmRDb2xvciA9IFwicmdiYSgyNTUsMjU1LDI1NSwgLjkpXCJcblx0XHRcdGlvcy51dGlscy5iZ0JsdXIoYmFyLmJnKVxuXG5cdFx0aWYgaW5kZXggPT0gMFxuXHRcdFx0dGFiLmNvbnN0cmFpbnRzLmxlYWRpbmcgPSAwXG5cdFx0ZWxzZVxuXHRcdFx0dGFiLmNvbnN0cmFpbnRzLmxlYWRpbmcgPSBzZXR1cC50YWJzW2luZGV4IC0gMV1cblxuXHRcdGlvcy5sYXlvdXQuc2V0KHRhYilcblxuXHRcdHRhYi5vbiBFdmVudHMuVG91Y2hTdGFydCwgLT5cblx0XHRcdHRhYkluZGV4ID0gQC54IC8gaW9zLnV0aWxzLnB4KHNwZWNzLndpZHRoKVxuXHRcdFx0c2V0QWN0aXZlKHRhYkluZGV4KVxuXG5cdGJhci5ib3guY29uc3RyYWludHMgPVxuXHRcdGFsaWduOlwiaG9yaXpvbnRhbFwiXG5cblx0aW9zLmxheW91dC5zZXQoYmFyLmJveClcblx0c2V0QWN0aXZlKHNldHVwLnN0YXJ0KVxuXG5cdGJhci50YWJzID0gc2V0dXAudGFic1xuXG5cdHJldHVybiBiYXJcbiIsImlvcyA9IHJlcXVpcmUgJ2lvcy1raXQnXG5cblxuZXhwb3J0cy5kZWZhdWx0cyA9XG4gIGtleTpcInZhbHVlXCJcblxuZXhwb3J0cy5kZWZhdWx0cy5wcm9wcyA9IE9iamVjdC5rZXlzKGV4cG9ydHMuZGVmYXVsdHMpXG5cbmV4cG9ydHMuY3JlYXRlID0gKGFycmF5KSAtPlxuICBzZXR1cCA9IGlvcy51dGlscy5zZXR1cENvbXBvbmVudChhcnJheSwgZXhwb3J0cy5kZWZhdWx0cylcbiAgcmV0dXJuXG4iLCJpb3MgPSByZXF1aXJlICdpb3Mta2l0J1xuXG5cbmV4cG9ydHMuZGVmYXVsdHMgPVxuXHRlZGl0YWJsZTp0cnVlXG5cdGNvbnN0cmFpbnRzOnVuZGVmaW5lZFxuXHR0ZXh0OiBcImlPUyBUZXh0IExheWVyXCJcblx0dHlwZTpcInRleHRcIlxuXHR4OjBcblx0eTowXG5cdHdpZHRoOi0xXG5cdGhlaWdodDotMVxuXHRzdXBlckxheWVyOnVuZGVmaW5lZFxuXHRzdHlsZTpcImRlZmF1bHRcIlxuXHRsaW5lczoxXG5cdHRleHRBbGlnbjpcImxlZnRcIlxuXHRiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiXG5cdGNvbG9yOlwiYmxhY2tcIlxuXHRmb250U2l6ZTogMTdcblx0Zm9udEZhbWlseTpcIi1hcHBsZS1zeXN0ZW0sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWZcIlxuXHRmb250V2VpZ2h0OlwicmVndWxhclwiXG5cdGxpbmVIZWlnaHQ6XCJhdXRvXCJcblx0bmFtZTpcInRleHQgbGF5ZXJcIlxuXHRvcGFjaXR5OjFcblx0dGV4dFRyYW5zZm9ybTpcIm5vbmVcIlxuXHRsZXR0ZXJTcGFjaW5nOjBcblx0bmFtZTpcInRleHQgbGF5ZXJcIlxuXHRzZWxlY3RhYmxlOnRydWVcblx0c2VsZWN0Q29sb3I6XCJyZ2JhKDAsIDExOCwgMjU1LCAuMilcIlxuXHRzZWxlY3RDb250cm9sczpcIiMwMDc2RkZcIlxuXG5leHBvcnRzLmRlZmF1bHRzLnByb3BzID0gT2JqZWN0LmtleXMoZXhwb3J0cy5kZWZhdWx0cylcblxuXG5leHBvcnRzLmNyZWF0ZSA9IChhcnJheSkgLT5cblx0c2V0dXAgPSBpb3MudXRpbHMuc2V0dXBDb21wb25lbnQoYXJyYXksIGV4cG9ydHMuZGVmYXVsdHMpXG5cdGV4Y2VwdGlvbnMgPSBPYmplY3Qua2V5cyhzZXR1cClcblxuXHR0ZXh0TGF5ZXIgPSBuZXcgaW9zLlZpZXdcblx0XHRiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiXG5cdFx0bmFtZTpzZXR1cC5uYW1lXG5cdFx0c3VwZXJMYXllcjpzZXR1cC5zdXBlckxheWVyXG5cdFx0Y29uc3RyYWludHM6c2V0dXAuY29uc3RyYWludHNcblxuXHR0ZXh0TGF5ZXIudHlwZSA9IFwidGV4dFwiXG5cdHRleHRMYXllci5odG1sID0gc2V0dXAudGV4dFxuXHRmb3IgcHJvcCBpbiBpb3MubGliLmxheWVyUHJvcHNcblx0XHRpZiBzZXR1cFtwcm9wXVxuXHRcdFx0aWYgcHJvcCA9PSBcImNvbG9yXCJcblx0XHRcdFx0c2V0dXBbcHJvcF0gPSBpb3MudXRpbHMuY29sb3Ioc2V0dXBbcHJvcF0pXG5cdFx0XHR0ZXh0TGF5ZXJbcHJvcF0gPSBzZXR1cFtwcm9wXVxuXHRmb3IgcHJvcCBpbiBpb3MubGliLmxheWVyU3R5bGVzXG5cdFx0aWYgc2V0dXBbcHJvcF1cblx0XHRcdGlmIHByb3AgPT0gXCJsaW5lSGVpZ2h0XCIgJiYgc2V0dXBbcHJvcF0gPT0gXCJhdXRvXCJcblx0XHRcdFx0dGV4dExheWVyLnN0eWxlLmxpbmVIZWlnaHQgPSAgc2V0dXAuZm9udFNpemVcblx0XHRcdGlmIHByb3AgPT0gXCJmb250V2VpZ2h0XCJcblx0XHRcdFx0c3dpdGNoIHNldHVwW3Byb3BdXG5cdFx0XHRcdFx0d2hlbiBcInVsdHJhdGhpblwiIHRoZW4gc2V0dXBbcHJvcF0gPSAxMDBcblx0XHRcdFx0XHR3aGVuIFwidGhpblwiIHRoZW4gc2V0dXBbcHJvcF0gPSAyMDBcblx0XHRcdFx0XHR3aGVuIFwibGlnaHRcIiB0aGVuIHNldHVwW3Byb3BdID0gMzAwXG5cdFx0XHRcdFx0d2hlbiBcInJlZ3VsYXJcIiB0aGVuIHNldHVwW3Byb3BdID0gNDAwXG5cdFx0XHRcdFx0d2hlbiBcIm1lZGl1bVwiIHRoZW4gc2V0dXBbcHJvcF0gPSA1MDBcblx0XHRcdFx0XHR3aGVuIFwic2VtaWJvbGRcIiB0aGVuIHNldHVwW3Byb3BdID0gNjAwXG5cdFx0XHRcdFx0d2hlbiBcImJvbGRcIiB0aGVuIHNldHVwW3Byb3BdID0gNzAwXG5cdFx0XHRcdFx0d2hlbiBcImJsYWNrXCIgdGhlbiBzZXR1cFtwcm9wXSA9IDgwMFxuXHRcdFx0aWYgcHJvcCA9PSBcImZvbnRTaXplXCIgfHwgcHJvcCA9PSBcImxpbmVIZWlnaHRcIiB8fCBwcm9wID09IFwibGV0dGVyU3BhY2luZ1wiXG5cdFx0XHRcdHNldHVwW3Byb3BdID0gaW9zLnV0aWxzLnB4KHNldHVwW3Byb3BdKSArIFwicHhcIlxuXHRcdFx0dGV4dExheWVyLnN0eWxlW3Byb3BdID0gc2V0dXBbcHJvcF1cblxuXHR0ZXh0RnJhbWUgPSBpb3MudXRpbHMudGV4dEF1dG9TaXplKHRleHRMYXllcilcblx0dGV4dExheWVyLnByb3BzID0gKGhlaWdodDp0ZXh0RnJhbWUuaGVpZ2h0LCB3aWR0aDp0ZXh0RnJhbWUud2lkdGgpXG5cblx0aWYgc2V0dXAuZWRpdGFibGVcblx0XHR0ZXh0TGF5ZXIub24gXCJjaGFuZ2U6aHRtbFwiLCAtPlxuXHRcdFx0dGV4dEZyYW1lID0gaW9zLnV0aWxzLnRleHRBdXRvU2l6ZSh0ZXh0TGF5ZXIpXG5cdFx0XHR0ZXh0TGF5ZXIucHJvcHMgPSAoaGVpZ2h0OnRleHRGcmFtZS5oZWlnaHQsIHdpZHRoOnRleHRGcmFtZS53aWR0aClcblxuXG5cdGlvcy5sYXlvdXQuc2V0XG5cdFx0dGFyZ2V0OnRleHRMYXllclxuXHRyZXR1cm4gdGV4dExheWVyXG4iLCJpb3MgPSByZXF1aXJlICdpb3Mta2l0J1xuXG4jIyBDb252ZXJ0cyBweCB0byBwdFxuZXhwb3J0cy5wdCA9IChweCkgLT5cblx0cHQgPSBweC9pb3MuZGV2aWNlLnNjYWxlXG5cdHB0ID0gTWF0aC5yb3VuZChwdClcblx0cmV0dXJuIHB0XG5cbiMjIENvbnZlcnRzIHB0IHRvIHB4XG5leHBvcnRzLnB4ID0gKHB0KSAtPlxuXHRweCA9IHB0ICogaW9zLmRldmljZS5zY2FsZVxuXHRweCA9IE1hdGgucm91bmQocHgpXG5cdHJldHVybiBweFxuXG4jIyBpT1MgQ29sb3Ig4oCTIFRoaXMgd2lsbCBzdG9yZSBhbGwgb2YgdGhlIGRlZmF1bHQgaU9TIGNvbG9ycyBpbnRlYWQgb2YgdGhlIGRlZmF1bHQgQ1NTIGNvbG9ycy4gKlRoaXMgaXMgb25seSB1cCBoZXJlIGJlY2F1c2UgSSByZWZlciB0byBpdCBpbiB0aGUgZGVmYXVsdHMuKlxuZXhwb3J0cy5jb2xvciA9IChjb2xvclN0cmluZykgLT5cblx0Y29sb3IgPSBcIlwiXG5cdGlmIHR5cGVvZiBjb2xvclN0cmluZyA9PSBcInN0cmluZ1wiXG5cdFx0Y29sb3JTdHJpbmcgPSBjb2xvclN0cmluZy50b0xvd2VyQ2FzZSgpXG5cdFx0aWYgY29sb3JTdHJpbmdbMC4uLjRdID09IFwicmdiYVwiXG5cdFx0XHRyZXR1cm4gY29sb3JTdHJpbmdcblx0c3dpdGNoIGNvbG9yU3RyaW5nXG5cdFx0d2hlbiBcInJlZFwiXG5cdFx0XHRjb2xvciA9IG5ldyBDb2xvcihcIiNGRTM4MjRcIilcblx0XHR3aGVuIFwiYmx1ZVwiXG5cdFx0XHRjb2xvciA9IG5ldyBDb2xvcihcIiMwMDc2RkZcIilcblx0XHR3aGVuIFwicGlua1wiXG5cdFx0XHRjb2xvciA9IG5ldyBDb2xvcihcIiNGRTI4NTFcIilcblx0XHR3aGVuIFwiZ3JleVwiXG5cdFx0XHRjb2xvciA9IG5ldyBDb2xvcihcIiM5MjkyOTJcIilcblx0XHR3aGVuIFwiZ3JheVwiXG5cdFx0XHRjb2xvciA9IG5ldyBDb2xvcihcIiM5MjkyOTJcIilcblx0XHR3aGVuIFwiYmxhY2tcIlxuXHRcdFx0Y29sb3IgPSBuZXcgQ29sb3IoXCIjMDMwMzAzXCIpXG5cdFx0d2hlbiBcIndoaXRlXCJcblx0XHRcdGNvbG9yID0gbmV3IENvbG9yKFwiI0VGRUZGNFwiKVxuXHRcdHdoZW4gXCJvcmFuZ2VcIlxuXHRcdFx0Y29sb3IgPSBuZXcgQ29sb3IoXCIjRkY5NjAwXCIpXG5cdFx0d2hlbiBcImdyZWVuXCJcblx0XHRcdGNvbG9yID0gbmV3IENvbG9yKFwiIzQ0REI1RVwiKVxuXHRcdHdoZW4gXCJsaWdodCBibHVlXCJcblx0XHRcdGNvbG9yID0gbmV3IENvbG9yKFwiIzU0QzdGQ1wiKVxuXHRcdHdoZW4gXCJsaWdodC1ibHVlXCJcblx0XHRcdGNvbG9yID0gbmV3IENvbG9yKFwiIzU0QzdGQ1wiKVxuXHRcdHdoZW4gXCJ5ZWxsb3dcIlxuXHRcdFx0Y29sb3IgPSBuZXcgQ29sb3IoXCIjRkZDRDAwXCIpXG5cdFx0d2hlbiBcImxpZ2h0IGtleVwiXG5cdFx0XHRjb2xvciA9IG5ldyBDb2xvcihcIiM5REE3QjNcIilcblx0XHR3aGVuIFwibGlnaHQta2V5XCJcblx0XHRcdGNvbG9yID0gbmV3IENvbG9yKFwiIzlEQTdCM1wiKVxuXHRcdGVsc2Vcblx0XHRcdGlmIGNvbG9yU3RyaW5nWzBdID09IFwiI1wiIHx8IGNvbG9yU3RyaW5nLnRvSGV4U3RyaW5nKClbMF0gPT0gXCIjXCJcblx0XHRcdFx0Y29sb3IgPSBuZXcgQ29sb3IoY29sb3JTdHJpbmcpXG5cdFx0XHRlbHNlXG5cdFx0XHRcdGNvbG9yID0gbmV3IENvbG9yKFwiIzkyOTI5MlwiKVxuXHRyZXR1cm4gY29sb3JcblxuIyBTdXBwb3J0aW5nIEZ1bmN0aW9uc1xuIyBVdGlsc1xuXG4jIENsZWFucyBhIHN0cmluZyBvZiA8YnI+IGFuZCAmbmJzcDtcbmV4cG9ydHMuY2xlYW4gPSAoc3RyaW5nKSAtPlxuXHQjIyByZW1vdmUgd2hpdGUgc3BhY2Vcblx0c3RyaW5nID0gc3RyaW5nLnJlcGxhY2UoL1smXW5ic3BbO10vZ2ksIFwiIFwiKS5yZXBsYWNlKC9bPF1icls+XS9naSwgXCJcIilcblx0cmV0dXJuIHN0cmluZ1xuXG4jIENvbnZlcnRzIHB4J3Mgb2YgYW4gU1ZHIHRvIHNjYWxhYmxlIHZhcmlhYmxlc1xuZXhwb3J0cy5zdmcgPSAoc3ZnKSAtPlxuXHQjIEZpbmQgU3RyaW5nXG5cdHN0YXJ0SW5kZXggPSBzdmcuc2VhcmNoKFwiPHN2ZyB3aWR0aD1cIilcblx0ZW5kSW5kZXggPSBzdmcuc2VhcmNoKFwiIHZpZXdCb3hcIilcblx0c3RyaW5nID0gc3ZnLnNsaWNlKHN0YXJ0SW5kZXgsIGVuZEluZGV4KVxuXG5cdCNGaW5kIHdpZHRoXG5cdHdTdGFydEluZGV4ID0gc3RyaW5nLnNlYXJjaChcIj1cIikgKyAyXG5cdHdFbmRJbmRleCA9ICBzdHJpbmcuc2VhcmNoKFwicHhcIilcblx0d2lkdGggPSBzdHJpbmcuc2xpY2Uod1N0YXJ0SW5kZXgsIHdFbmRJbmRleClcblx0bmV3V2lkdGggPSBleHBvcnRzLnB4KHdpZHRoKVxuXG5cdCMgRmluZCBIZWlnaHRcblx0aGVpZ2h0U3RyaW5nID0gc3RyaW5nLnNsaWNlKHdFbmRJbmRleCArIDQsIHN0cmluZy5sZW5ndGgpXG5cdGhTdGFydEluZGV4ID0gaGVpZ2h0U3RyaW5nLnNlYXJjaChcIj1cIikrIDJcblx0aEVuZEluZGV4ID0gaGVpZ2h0U3RyaW5nLnNlYXJjaChcInB4XCIpXG5cdGhlaWdodCA9IGhlaWdodFN0cmluZy5zbGljZShoU3RhcnRJbmRleCwgaEVuZEluZGV4KVxuXHRuZXdIZWlnaHQgPSBleHBvcnRzLnB4KGhlaWdodClcblxuXHQjQ3JlYXRlIG5ldyBzdHJpbmdcblx0bmV3U3RyaW5nID0gc3RyaW5nLnJlcGxhY2Uod2lkdGgsIG5ld1dpZHRoKVxuXHRuZXdTdHJpbmcgPSBuZXdTdHJpbmcucmVwbGFjZShoZWlnaHQsIG5ld0hlaWdodClcblxuXHQjUmVwbGFjZSBzdHJpbmdzXG5cdHN2ZyA9IHN2Zy5yZXBsYWNlKHN0cmluZywgbmV3U3RyaW5nKVxuXG5cdHJldHVybiB7XG5cdFx0c3ZnOnN2Z1xuXHRcdHdpZHRoOm5ld1dpZHRoXG5cdFx0aGVpZ2h0Om5ld0hlaWdodFxuXHR9XG5cbiMgQ2hhbmdlcyB0aGUgZmlsbCBvZiBhbiBTVkdcbmV4cG9ydHMuY2hhbmdlRmlsbCA9IChsYXllciwgY29sb3IpIC0+XG5cdHN0YXJ0SW5kZXggPSBsYXllci5odG1sLnNlYXJjaChcImZpbGw9XFxcIiNcIilcblx0ZmlsbFN0cmluZyA9IGxheWVyLmh0bWwuc2xpY2Uoc3RhcnRJbmRleCwgbGF5ZXIuaHRtbC5sZW5ndGgpXG5cdGVuZEluZGV4ID0gZmlsbFN0cmluZy5zZWFyY2goXCJcXFwiPlwiKVxuXHRzdHJpbmcgPSBmaWxsU3RyaW5nLnNsaWNlKDAsIGVuZEluZGV4KVxuXHRuZXdTdHJpbmcgPSBcImZpbGw9XFxcIlwiICsgZXhwb3J0cy5jb2xvcihjb2xvcilcblx0bGF5ZXIuaHRtbCA9IGxheWVyLmh0bWwucmVwbGFjZShzdHJpbmcsIG5ld1N0cmluZylcblxuZXhwb3J0cy5jYXBpdGFsaXplID0gKHN0cmluZykgLT5cblx0cmV0dXJuIHN0cmluZy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0cmluZy5zbGljZSgxKVxuXG4jIFJldHVybnMgdGhlIGN1cnJlbnQgdGltZVxuZXhwb3J0cy5nZXRUaW1lID0gLT5cblx0ZGF5c09mVGhlV2VlayA9IFtcIlN1bmRheVwiLCBcIk1vbmRheVwiLCBcIlR1ZXNkYXlcIiwgXCJXZWRuZXNkYXlcIiwgXCJUaHVyc2RheVwiLCBcIkZyaWRheVwiLCBcIlNhdHVyZGF5XCJdXG5cdG1vbnRoc09mVGhlWWVhciA9IFtcIkphbnVhcnlcIiwgXCJGZWJydWFyeVwiLCBcIk1hcmNoXCIsIFwiQXByaWxcIiwgXCJNYXlcIiwgXCJKdW5lXCIsIFwiSnVseVwiLCBcIkF1Z3VzdFwiLCBcIlNlcHRlbWJlclwiLCBcIk9jdG9iZXJcIiwgXCJOb3ZlbWJlclwiLCBcIkRlY2VtYmVyXCJdXG5cdGRhdGVPYmogPSBuZXcgRGF0ZSgpXG5cdG1vbnRoID0gbW9udGhzT2ZUaGVZZWFyW2RhdGVPYmouZ2V0TW9udGgoKV1cblx0ZGF0ZSA9IGRhdGVPYmouZ2V0RGF0ZSgpXG5cdGRheSA9IGRheXNPZlRoZVdlZWtbZGF0ZU9iai5nZXREYXkoKV1cblx0aG91cnMgPSBkYXRlT2JqLmdldEhvdXJzKClcblx0bWlucyA9IGRhdGVPYmouZ2V0TWludXRlcygpXG5cdHNlY3MgPSBkYXRlT2JqLmdldFNlY29uZHMoKVxuXHRyZXR1cm4ge1xuXHRcdG1vbnRoOm1vbnRoXG5cdFx0ZGF0ZTpkYXRlXG5cdFx0ZGF5OmRheVxuXHRcdGhvdXJzOmhvdXJzXG5cdFx0bWluczptaW5zXG5cdFx0c2VjczpzZWNzXG5cdH1cblxuZXhwb3J0cy5iZ0JsdXIgPSAobGF5ZXIpIC0+XG5cdGxheWVyLnN0eWxlW1wiLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXJcIl0gPSBcImJsdXIoI3tleHBvcnRzLnB4KDUpfXB4KVwiXG5cdHJldHVybiBsYXllclxuXG5leHBvcnRzLnRleHRBdXRvU2l6ZSA9ICh0ZXh0TGF5ZXIpIC0+XG5cdCNEZWZpbmUgV2lkdGhcblx0Y29uc3RyYWludHMgPSB7fVxuXHRpZiB0ZXh0TGF5ZXIuY29uc3RyYWludHNcblx0XHRpZiB0ZXh0TGF5ZXIuY29uc3RyYWludHMuaGVpZ2h0XG5cdFx0XHRjb25zdHJhaW50cy5oZWlnaHQgPSBleHBvcnRzLnB4KHRleHRMYXllci5jb25zdHJhaW50cy5oZWlnaHQpXG5cdFx0aWYgdGV4dExheWVyLmNvbnN0cmFpbnRzLndpZHRoXG5cdFx0XHRjb25zdHJhaW50cy53aWR0aCA9IGV4cG9ydHMucHgodGV4dExheWVyLmNvbnN0cmFpbnRzLndpZHRoKVxuXG5cdHN0eWxlcyA9XG5cdFx0Zm9udFNpemU6IHRleHRMYXllci5zdHlsZS5mb250U2l6ZVxuXHRcdGZvbnRGYW1pbHk6IHRleHRMYXllci5zdHlsZS5mb250RmFtaWx5XG5cdFx0Zm9udFdlaWdodDogdGV4dExheWVyLnN0eWxlLmZvbnRXZWlnaHRcblx0XHRsaW5lSGVpZ2h0OiB0ZXh0TGF5ZXIuc3R5bGUubGluZUhlaWdodFxuXHRcdGxldHRlclNwYWNpbmc6IHRleHRMYXllci5zdHlsZS5sZXR0ZXJTcGFjaW5nXG5cdFx0dGV4dFRyYW5zZm9ybTogdGV4dExheWVyLnN0eWxlLnRleHRUcmFuc2Zvcm1cblx0dGV4dEZyYW1lID0gVXRpbHMudGV4dFNpemUodGV4dExheWVyLmh0bWwsIHN0eWxlcywgY29uc3RyYWludHMpXG5cdHJldHVybiB7XG5cdFx0d2lkdGggOiB0ZXh0RnJhbWUud2lkdGhcblx0XHRoZWlnaHQ6IHRleHRGcmFtZS5oZWlnaHRcblx0fVxuXG4jIGV4cG9ydHMuZ2V0RGV2aWNlID0gLT5cbiNcbiMgXHQjIExvYWRzIHRoZSBpbml0aWFsIGZyYW1lXG4jIFx0ZGV2aWNlID0gRnJhbWVyLkRldmljZS5kZXZpY2VUeXBlXG4jXG4jIFx0IyMjIFRoaXMgc3dpdGNoIGxvb2tzIGF0IHRoZSBpbm5lcldpZHRoIHRvIGRldGVybWluZSBpZiB0aGUgcHJvdG90eXBlIGlzIGJlaW5nIG9wZW5lZCBvbiBhIGRldmljZS5cbiMgXHRJZiBzbywgaXQnbGwgb3ZlcnJpZGUgdGhlIGRldmljZSwgYW5kIGl0J2xsIGFkanVzdCB0aGUgdmlldyB0byBmdWxsc2NyZWVuLiMjI1xuIyBcdGNhcHR1cmVkRGV2aWNlID0ge1xuIyBcdFx0d2lkdGg6aW9zLmxpYi5mcmFtZXNbZGV2aWNlXS53aWR0aFxuIyBcdFx0aGVpZ2h0Omlvcy5saWIuZnJhbWVzW2RldmljZV0uaGVpZ2h0XG4jIFx0XHRzY2FsZTppb3MubGliLmZyYW1lc1tkZXZpY2VdLnNjYWxlXG4jIFx0XHRtb2JpbGU6aW9zLmxpYi5mcmFtZXNbZGV2aWNlXS5tb2JpbGVcbiMgXHRcdHBsYXRmb3JtOmlvcy5saWIuZnJhbWVzW2RldmljZV0ucGxhdGZvcm1cbiMgXHR9XG4jXG4jIFx0c3dpdGNoIGlubmVyV2lkdGhcbiMgXHRcdCMgaVBob25lIDVjLzVzL1NFXG4jIFx0XHR3aGVuIDY0MFxuIyBcdFx0XHRkZXZpY2UgPSBcImFwcGxlLWlwaG9uZS01cy1zaWx2ZXJcIlxuIyBcdFx0XHRGcmFtZXIuRGV2aWNlLmRldmljZVR5cGUgPSBcImZ1bGxzY3JlZW5cIlxuI1xuIyBcdFx0IyBpUGhvbmUgNnNcbiMgXHRcdHdoZW4gNzUwXG4jIFx0XHRcdGRldmljZSA9IFwiYXBwbGUtaXBob25lLTZzLXNpbHZlclwiXG4jIFx0XHRcdEZyYW1lci5EZXZpY2UuZGV2aWNlVHlwZSA9IFwiZnVsbHNjcmVlblwiXG4jXG4jIFx0XHQjIGlQaG9uZSA2cytcbiMgXHRcdHdoZW4gMTI0MlxuIyBcdFx0XHRpZiBpbm5lckhlaWdodCA9PSAyMjA4XG4jIFx0XHRcdFx0ZGV2aWNlID0gXCJhcHBsZS1pcGhvbmUtNnMtcGx1cy1zaWx2ZXJcIlxuIyBcdFx0XHRcdEZyYW1lci5EZXZpY2UuZGV2aWNlVHlwZSA9IFwiZnVsbHNjcmVlblwiXG4jIFx0XHRcdFx0cHJpbnQgXCJ5b1wiXG4jXG4jIFx0XHQjIGlQYWQgaW4gcG9ydHJhaXRcbiMgXHRcdHdoZW4gMTUzNlxuIyBcdFx0XHRpZiBpbm5lckhlaWdodCA9PSAyMDQ4XG4jIFx0XHRcdFx0ZGV2aWNlID0gXCJhcHBsZS1pcGFkLWFpci0yLXNpbHZlclwiXG4jIFx0XHRcdFx0RnJhbWVyLkRldmljZS5kZXZpY2VUeXBlID0gXCJmdWxsc2NyZWVuXCJcbiNcbiMgXHRcdCMgaVBhZFxuIyBcdFx0d2hlbiAyMDQ4XG4jXG4jIFx0XHRcdCMgaVBhZCBQcm8gaW4gcG9ydHJhaXRcbiMgXHRcdFx0aWYgaW5uZXJIZWlnaHQgPT0gMjczMlxuIyBcdFx0XHRcdGRldmljZSA9IFwiYXBwbGUtaXBhZC1wcm8tc2lsdmVyXCJcbiNcbiMgXHRcdFx0IyBpUGFkIGluIGxhbmRzY2NhcGVcbiMgXHRcdFx0aWYgaW5uZXJIZWlnaHQgPT0gMTUzNlxuIyBcdFx0XHRcdGRldmljZSA9IFwiYXBwbGUtaXBhZC1haXItMi1zaWx2ZXJcIlxuIyBcdFx0XHRGcmFtZXIuRGV2aWNlLmRldmljZVR5cGUgPSBcImZ1bGxzY3JlZW5cIlxuI1xuIyBcdFx0IyBpUGFkIFByb1xuIyBcdFx0d2hlbiAyNzMyXG4jIFx0XHRcdGlmIGlubmVySGVpZ2h0ID09IDIwNDhcbiMgXHRcdFx0XHRkZXZpY2UgPSBcImFwcGxlLWlwYWQtcHJvLXNpbHZlclwiXG4jIFx0XHRcdFx0RnJhbWVyLkRldmljZS5kZXZpY2VUeXBlID0gXCJmdWxsc2NyZWVuXCJcbmV4cG9ydHMuZ2V0RGV2aWNlID0gLT5cblx0IyBMb2FkcyB0aGUgaW5pdGlhbCBmcmFtZVxuXHRuYW1lRm9ybWF0dGVyID0gKG5hbWUpIC0+XG5cdFx0cmVtb3ZlVGVybXMgPSBbXCJhcHBsZS1cIiwgXCItZ29sZFwiLCBcIi1zaWx2ZXJcIiwgXCItcm9zZVwiLCBcIi1zcGFjZS1ncmF5XCIsIFwiLXllbGxvd1wiLCBcIi1ncmVlblwiLCBcIi1yZWRcIiwgXCItd2hpdGVcIiwgXCItYmx1ZVwiLCBcIi1taW5pXCIsIFwiLWFpclwiLCBcIi0yXCIsIFwiLTRcIl1cblx0XHRmb3IgdGVybSBpbiByZW1vdmVUZXJtc1xuXHRcdFx0bmFtZSA9IG5hbWUucmVwbGFjZSh0ZXJtLCBcIlwiKVxuXHRcdGlmIG5hbWUuaW5kZXhPZihcIi01c1wiKSAhPSAtMSB0aGVuIG5hbWUgPSBuYW1lLnJlcGxhY2UoXCItNXNcIiwgXCItNVwiKVxuXHRcdGlmIG5hbWUuaW5kZXhPZihcIi01Y1wiKSAhPSAtMSB0aGVuIG5hbWUgPSBuYW1lLnJlcGxhY2UoXCItNWNcIiwgXCItNVwiKVxuXHRcdHJldHVybiBuYW1lXG5cdGRldmljZSA9IFwiXCJcblx0ZnJhbWUgPSB0cnVlXG5cdGlmIGlvcy5saWIucmVhbERldmljZXNbaW5uZXJXaWR0aF0gJiYgaW9zLmxpYi5yZWFsRGV2aWNlc1tpbm5lcldpZHRoXVtpbm5lckhlaWdodF1cblx0XHRkZXZpY2UgPSBpb3MubGliLnJlYWxEZXZpY2VzW2lubmVyV2lkdGhdW2lubmVySGVpZ2h0XVxuXHRcdGZyYW1lID0gZmFsc2Vcblx0XHRGcmFtZXIuRGV2aWNlLmRldmljZVR5cGUgPSBcImZ1bGxzY3JlZW5cIlxuXG5cdGlmIGZyYW1lXG5cdFx0ZGV2aWNlID1cblx0XHRcdG5hbWU6IG5hbWVGb3JtYXR0ZXIoRnJhbWVyLkRldmljZS5kZXZpY2VUeXBlKVxuXHRcdFx0ZGlzcGxheV9uYW1lIDogIEZyYW1lci5EZXZpY2VWaWV3LkRldmljZXNbRnJhbWVyLkRldmljZS5kZXZpY2VUeXBlXS5kaXNwbGF5X25hbWVcblx0XHRcdHdpZHRoIDogIEZyYW1lci5EZXZpY2VWaWV3LkRldmljZXNbRnJhbWVyLkRldmljZS5kZXZpY2VUeXBlXS5zY3JlZW5XaWR0aFxuXHRcdFx0aGVpZ2h0OiAgRnJhbWVyLkRldmljZVZpZXcuRGV2aWNlc1tGcmFtZXIuRGV2aWNlLmRldmljZVR5cGVdLnNjcmVlbkhlaWdodFxuXHRcdFx0c2NhbGU6IGlvcy5saWIuZnJhbWVyRnJhbWVzW0ZyYW1lci5EZXZpY2VWaWV3LkRldmljZXNbRnJhbWVyLkRldmljZS5kZXZpY2VUeXBlXS5zY3JlZW5XaWR0aF1cblxuXHRpZiBkZXZpY2Uuc2NhbGUgPT0gdW5kZWZpbmVkXG5cdFx0ZGV2aWNlLnNjYWxlID0gMlxuXHRpZiBkZXZpY2Uud2lkdGggPT0gdW5kZWZpbmVkXG5cdFx0ZGV2aWNlLndpZHRoID0gaW5uZXJXaWR0aFxuXHRpZiBkZXZpY2UuaGVpZ2h0ID09IHVuZGVmaW5lZFxuXHRcdGRldmljZS5oZWlnaHQgPSBpbm5lckhlaWdodFxuXG5cdHJldHVybiBkZXZpY2VcblxuXHRleHBvcnRzLnNjYWxlID0gaW9zLmxpYi5mcmFtZXNbZGV2aWNlXS5zY2FsZVxuXG5cdGlmIGRldmljZSA9PSBcImZ1bGxzY3JlZW5cIlxuXHRcdGV4cG9ydHMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aFxuXHRcdGV4cG9ydHMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0XG5cdGVsc2Vcblx0XHRleHBvcnRzLndpZHRoID0gaW9zLmxpYi5mcmFtZXNbZGV2aWNlXS53aWR0aFxuXHRcdGV4cG9ydHMuaGVpZ2h0ID0gaW9zLmxpYi5mcmFtZXNbZGV2aWNlXS5oZWlnaHRcblx0XHRpZiB3aW5kb3cuaW5uZXJXaWR0aCA9PSAxMjQyIHx8IHdpbmRvdy5pbm5lcldpZHRoID09IDIyMDhcblx0XHRcdGV4cG9ydHMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aFxuXHRcdFx0ZXhwb3J0cy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHRcblx0XHRcdGV4cG9ydHMuc2NhbGUgPSAzXG5cdGV4cG9ydHMubW9iaWxlID0gaW9zLmxpYi5mcmFtZXNbZGV2aWNlXS5tb2JpbGVcblx0ZXhwb3J0cy5wbGF0Zm9ybSA9IGlvcy5saWIuZnJhbWVzW2RldmljZV0ucGxhdGZvcm1cblx0ZXhwb3J0cy5vcmllbnRhdGlvbiA9ICBGcmFtZXIuRGV2aWNlLm9yaWVudGF0aW9uXG5cblx0IyBEZXZpY2UgU3RyaW5nIFNjcnViYmVyXG5cdGRldmljZSA9IGRldmljZS5yZXBsYWNlKFwiYXBwbGUtXCIsIFwiXCIpXG5cdGRldmljZSA9IGRldmljZS5yZXBsYWNlKFwiLWdvbGRcIiwgXCJcIilcblx0ZGV2aWNlID0gZGV2aWNlLnJlcGxhY2UoXCItZ3JlZW5cIiwgXCJcIilcblx0ZGV2aWNlID0gZGV2aWNlLnJlcGxhY2UoXCItYmx1ZVwiLCBcIlwiKVxuXHRkZXZpY2UgPSBkZXZpY2UucmVwbGFjZShcIi1yZWRcIiwgXCJcIilcblx0ZGV2aWNlID0gZGV2aWNlLnJlcGxhY2UoXCItd2hpdGVcIiwgXCJcIilcblx0ZGV2aWNlID0gZGV2aWNlLnJlcGxhY2UoXCIteWVsbG93XCIsIFwiXCIpXG5cdGRldmljZSA9IGRldmljZS5yZXBsYWNlKFwiLXBpbmtcIiwgXCJcIilcblx0ZGV2aWNlID0gZGV2aWNlLnJlcGxhY2UoXCItc3BhY2UtZ3JleVwiLCBcIlwiKVxuXHRkZXZpY2UgPSBkZXZpY2UucmVwbGFjZShcIi1yb3NlXCIsIFwiXCIpXG5cdGRldmljZSA9IGRldmljZS5yZXBsYWNlKFwiNXNcIiwgXCI1XCIpXG5cdGRldmljZSA9IGRldmljZS5yZXBsYWNlKFwiNWNcIiwgXCI1XCIpXG5cdGRldmljZSA9IGRldmljZS5yZXBsYWNlKFwiLW1pbmlcIiwgXCJcIilcblx0ZGV2aWNlID0gZGV2aWNlLnJlcGxhY2UoXCItYWlyXCIsIFwiXCIpXG5cdGRldmljZSA9IGRldmljZS5yZXBsYWNlKFwiLTJcIiwgXCJcIilcblx0ZGV2aWNlID0gZGV2aWNlLnJlcGxhY2UoXCItNFwiLCBcIlwiKVxuXHRkZXZpY2UgPSBkZXZpY2UucmVwbGFjZShcIi1zaWx2ZXJcIiwgXCJcIilcblxuXHRjYXB0dXJlZERldmljZS5uYW1lID0gZGV2aWNlXG5cblx0IyBleHBvcnRzLmRldmljZSBiZWNvbWVzIGVpdGhlciBpcGFkLCBpcGFkLXBybywgaXBob25lLTUsIGlwaG9uZS02cywgaXBob25lLTZzLXBsdXNcblx0cmV0dXJuIGNhcHR1cmVkRGV2aWNlXG5cblxuIyBTcGVjaWFsIENoYXJhY3RlcnNcbmV4cG9ydHMuc3BlY2lhbENoYXIgPSAobGF5ZXIpIC0+XG5cdHRleHQgPSBsYXllclxuXHRpZiBsYXllci50eXBlID09IFwiYnV0dG9uXCIgdGhlbiB0ZXh0ID0gbGF5ZXIubGFiZWxcblx0aWYgdGV4dC5odG1sLmluZGV4T2YoXCItYlwiKSAhPSAtMVxuXHRcdG5ld1RleHQgPSB0ZXh0Lmh0bWwucmVwbGFjZShcIi1iIFwiLCBcIlwiKVxuXHRcdGV4cG9ydHMudXBkYXRlKHRleHQsIFt7dGV4dDpuZXdUZXh0fSwge2ZvbnRXZWlnaHQ6NjAwfV0pXG5cdGlmIHRleHQuaHRtbC5pbmRleE9mKFwiLXJcIikgIT0gLTFcblx0XHRuZXdUZXh0ID0gdGV4dC5odG1sLnJlcGxhY2UoXCItciBcIiwgXCJcIilcblx0XHRleHBvcnRzLnVwZGF0ZSh0ZXh0LCBbe3RleHQ6bmV3VGV4dH0sIHtjb2xvcjpcInJlZFwifV0pXG5cdGlmIHRleHQuaHRtbC5pbmRleE9mKFwiLXJiXCIpICE9IC0xXG5cdFx0bmV3VGV4dCA9IHRleHQuaHRtbC5yZXBsYWNlKFwiLXJiIFwiLCBcIlwiKVxuXHRcdGV4cG9ydHMudXBkYXRlKHRleHQsIFt7dGV4dDpuZXdUZXh0fSwge2NvbG9yOlwiYmx1ZVwifV0pXG5cdGlmIHRleHQuaHRtbC5pbmRleE9mKFwiLWxiXCIpICE9IC0xXG5cdFx0bmV3VGV4dCA9IHRleHQuaHRtbC5yZXBsYWNlKFwiLWxiIFwiLCBcIlwiKVxuXHRcdGV4cG9ydHMudXBkYXRlKHRleHQsIFt7dGV4dDpuZXdUZXh0fSwge2NvbG9yOlwibGlnaHQtYmx1ZVwifV0pXG5cdGlmIHRleHQuaHRtbC5pbmRleE9mKFwiLWdcIikgIT0gLTFcblx0XHRuZXdUZXh0ID0gdGV4dC5odG1sLnJlcGxhY2UoXCItZyBcIiwgXCJcIilcblx0XHRleHBvcnRzLnVwZGF0ZSh0ZXh0LCBbe3RleHQ6bmV3VGV4dH0sIHtjb2xvcjpcImdyZWVuXCJ9XSlcblx0aWYgdGV4dC5odG1sLmluZGV4T2YoXCItb1wiKSAhPSAtMVxuXHRcdG5ld1RleHQgPSB0ZXh0Lmh0bWwucmVwbGFjZShcIi1vIFwiLCBcIlwiKVxuXHRcdGV4cG9ydHMudXBkYXRlKHRleHQsIFt7dGV4dDpuZXdUZXh0fSwge2NvbG9yOlwib3JhbmdlXCJ9XSlcblx0aWYgdGV4dC5odG1sLmluZGV4T2YoXCItcFwiKSAhPSAtMVxuXHRcdG5ld1RleHQgPSB0ZXh0Lmh0bWwucmVwbGFjZShcIi1wIFwiLCBcIlwiKVxuXHRcdGV4cG9ydHMudXBkYXRlKHRleHQsIFt7dGV4dDpuZXdUZXh0fSwge2NvbG9yOlwib3JhbmdlXCJ9XSlcblx0aWYgdGV4dC5odG1sLmluZGV4T2YoXCIteVwiKSAhPSAtMVxuXHRcdG5ld1RleHQgPSB0ZXh0Lmh0bWwucmVwbGFjZShcIi15IFwiLCBcIlwiKVxuXHRcdGV4cG9ydHMudXBkYXRlKHRleHQsIFt7dGV4dDpuZXdUZXh0fSwge2NvbG9yOlwieWVsbG93XCJ9XSlcblx0aWYgdGV4dC5odG1sLmluZGV4T2YoXCItI1wiKSAhPSAtMVxuXHRcdGNob3NlbkNvbG9yID0gdGV4dC5odG1sLnNsaWNlKDEsIDgpXG5cdFx0bmV3VGV4dCA9IHRleHQuaHRtbC5zbGljZSg5LCB0ZXh0Lmh0bWwubGVuZ3RoKVxuXHRcdGV4cG9ydHMudXBkYXRlKHRleHQsIFt7dGV4dDpuZXdUZXh0fSwge2NvbG9yOmNob3NlbkNvbG9yfV0pXG5cdGlmIHRleHQuaHRtbC5pbmRleE9mKFwiLVwiKSAhPSAtMVxuXHRcdG5ld1RleHQgPSB0ZXh0Lmh0bWwucmVwbGFjZShcIi0gXCIsIFwiXCIpXG5cdFx0ZXhwb3J0cy51cGRhdGUodGV4dCwgW3t0ZXh0Om5ld1RleHR9XSlcblx0aWYgbGF5ZXIuYnV0dG9uVHlwZSA9PSBcInRleHRcIlxuXHRcdGxheWVyLndpZHRoID0gdGV4dC53aWR0aFxuXHRpb3MubGF5b3V0LnNldChsYXllcilcblx0aWYgbGF5ZXIudHlwZSA9PSBcImJ1dHRvblwiIHRoZW4gbGF5ZXIud2lkdGggPSB0ZXh0LndpZHRoXG5cdHJldHVybiB0ZXh0LmNvbG9yXG5cbmV4cG9ydHMudXBkYXRlID0gKGxheWVyLCBhcnJheSkgLT5cblx0aWYgYXJyYXkgPT0gdW5kZWZpbmVkXG5cdFx0YXJyYXkgPSBbXVxuXHRpZiBsYXllci50eXBlID09IFwidGV4dFwiXG5cdFx0Zm9yIGNoYW5nZSBpbiBhcnJheVxuXHRcdFx0a2V5ID0gT2JqZWN0LmtleXMoY2hhbmdlKVswXVxuXHRcdFx0dmFsdWUgPSBjaGFuZ2Vba2V5XVxuXHRcdFx0aWYga2V5ID09IFwidGV4dFwiXG5cdFx0XHRcdGxheWVyLmh0bWwgPSB2YWx1ZVxuXHRcdFx0aWYga2V5ID09IFwiZm9udFdlaWdodFwiXG5cdFx0XHRcdGxheWVyLnN0eWxlW2tleV0gPSB2YWx1ZVxuXHRcdFx0aWYga2V5ID09IFwiY29sb3JcIlxuXHRcdFx0XHRsYXllci5jb2xvciA9IGV4cG9ydHMuY29sb3IodmFsdWUpXG5cblx0XHR0ZXh0RnJhbWUgPSBleHBvcnRzLnRleHRBdXRvU2l6ZShsYXllcilcblx0XHRsYXllci53aWR0aCA9IHRleHRGcmFtZS53aWR0aFxuXHRcdGxheWVyLmhlaWdodCA9IHRleHRGcmFtZS5oZWlnaHRcblxuXG5cdGlvcy5sYXlvdXQuc2V0KClcblxuIyBEZWNpZGVzIGlmIGl0IHNob3VsZCBiZSB3aGl0ZS9ibGFjayB0ZXh0XG5leHBvcnRzLmF1dG9Db2xvciA9IChjb2xvck9iamVjdCkgLT5cblx0cmdiID0gY29sb3JPYmplY3QudG9SZ2JTdHJpbmcoKVxuXHRyZ2IgPSByZ2Iuc3Vic3RyaW5nKDQsIHJnYi5sZW5ndGgtMSlcblx0cmdiID0gcmdiLnJlcGxhY2UoLyAvZywgJycpXG5cdHJnYiA9IHJnYi5yZXBsYWNlKC8gL2csICcnKVxuXHRyZ2IgPSByZ2Iuc3BsaXQoJywnKVxuXHRyZWQgPSByZ2JbMF1cblx0Z3JlZW4gPSByZ2JbMV1cblx0Ymx1ZSA9IHJnYlsyXVxuXHRjb2xvciA9IFwiXCJcblx0aWYgKHJlZCowLjI5OSArIGdyZWVuKjAuNTg3ICsgYmx1ZSowLjExNCkgPiAxODZcblx0XHRjb2xvciA9IFwiIzAwMFwiXG5cdGVsc2Vcblx0XHRjb2xvciA9IFwiI0ZGRlwiXG5cdHJldHVybiBjb2xvclxuXG5leHBvcnRzLnNhbWVQYXJlbnQgPSAobGF5ZXIxLCBsYXllcjIpIC0+XG5cdHBhcmVudE9uZSA9IGxheWVyMS5zdXBlckxheWVyXG5cdHBhcmVudFR3byA9IGxheWVyMi5zdXBlckxheWVyXG5cdGlmIHBhcmVudE9uZSA9PSBwYXJlbnRUd29cblx0XHRyZXR1cm4gdHJ1ZVxuXHRlbHNlXG5cdFx0cmV0dXJuIGZhbHNlXG5cblxuZXhwb3J0cy50aW1lRGVsZWdhdGUgPSAobGF5ZXIsIGNsb2NrVHlwZSkgLT5cblx0QHRpbWUgPSBleHBvcnRzLmdldFRpbWUoKVxuXHRVdGlscy5kZWxheSA2MCAtIEB0aW1lLnNlY3MsIC0+XG5cdFx0QHRpbWUgPSBleHBvcnRzLmdldFRpbWUoKVxuXHRcdGV4cG9ydHMudXBkYXRlKGxheWVyLCBbdGV4dDpleHBvcnRzLnRpbWVGb3JtYXR0ZXIoQHRpbWUsIGNsb2NrVHlwZSldKVxuXHRcdFV0aWxzLmludGVydmFsIDYwLCAtPlxuXHRcdFx0QHRpbWUgPSBleHBvcnRzLmdldFRpbWUoKVxuXHRcdFx0ZXhwb3J0cy51cGRhdGUobGF5ZXIsIFt0ZXh0OmV4cG9ydHMudGltZUZvcm1hdHRlcihAdGltZSwgY2xvY2tUeXBlKV0pXG5cbmV4cG9ydHMudGltZUZvcm1hdHRlciA9ICh0aW1lT2JqLCBjbG9ja1R5cGUpIC0+XG5cdGlmIGNsb2NrVHlwZSA9PSBmYWxzZVxuXHRcdGlmIHRpbWVPYmouaG91cnMgPiAxMlxuXHRcdFx0dGltZU9iai5ob3VycyA9IHRpbWVPYmouaG91cnMgLSAxMlxuXHRcdGlmIHRpbWVPYmouaG91cnMgPT0gMCB0aGVuIHRpbWVPYmouaG91cnMgPSAxMlxuXHRpZiB0aW1lT2JqLm1pbnMgPCAxMFxuXHRcdHRpbWVPYmoubWlucyA9IFwiMFwiICsgdGltZU9iai5taW5zXG5cdHJldHVybiB0aW1lT2JqLmhvdXJzICsgXCI6XCIgKyB0aW1lT2JqLm1pbnNcblxuZXhwb3J0cy5zZXR1cENvbXBvbmVudCA9IChhcnJheSwgZGVmYXVsdHMpIC0+XG5cdGlmIGFycmF5ID09IHVuZGVmaW5lZFxuXHRcdGFycmF5ID0gW11cblx0b2JqID0ge31cblx0Zm9yIGkgaW4gZGVmYXVsdHMucHJvcHNcblx0XHRpZiBhcnJheVtpXSAhPSB1bmRlZmluZWRcblx0XHRcdG9ialtpXSA9IGFycmF5W2ldXG5cdFx0ZWxzZVxuXHRcdFx0b2JqW2ldID0gZGVmYXVsdHNbaV1cblx0cmV0dXJuIG9ialxuXG5cbmV4cG9ydHMuZW1vamlGb3JtYXR0ZXIgPSAoc3RyaW5nKSAtPlxuXHRcdHVuaWNvZGVGb3JtYXQgPSBcIlwiXG5cdFx0aWYgc3RyaW5nWzBdID09IFwiRVwiIHx8IHN0cmluZ1swXSA9PSBcIjNcIiB8fCBzdHJpbmdbMF0gPT0gXCIyXCIgfHwgc3RyaW5nWzBdID09IFwiQ1wiXG5cdFx0XHRhcnJheU9mQ29kZXMgPSBzdHJpbmcuc3BsaXQoXCIgXCIpXG5cdFx0XHRmb3IgY29kZSBpbiBhcnJheU9mQ29kZXNcblx0XHRcdFx0dW5pY29kZUZvcm1hdCA9IHVuaWNvZGVGb3JtYXQgKyBcIiVcIiArIGNvZGVcblx0XHRlbHNlXG5cdFx0XHRhcnJheU9mQ29kZXMgPSBzdHJpbmcuc3BsaXQoXCIgXCIpXG5cdFx0XHR1bmljb2RlRm9ybWF0ID0gXCIlRjAlOUZcIlxuXHRcdFx0Zm9yIGNvZGUgaW4gYXJyYXlPZkNvZGVzXG5cdFx0XHRcdHVuaWNvZGVGb3JtYXQgPSB1bmljb2RlRm9ybWF0ICsgXCIlXCIgKyBjb2RlXG5cdFx0ZGVjb2RlZCA9IGRlY29kZVVSSUNvbXBvbmVudCh1bmljb2RlRm9ybWF0KVxuXHRcdHJldHVybiBkZWNvZGVkXG5cbmV4cG9ydHMuYnVpbGRFbW9qaXNPYmplY3QgPSAoKSAtPlxuXHRlbW9qaXMgPSBbXVxuXHRmb3IgY29kZSwgaW5kZXggaW4gaW9zLmFzc2V0cy5lbW9qaUNvZGVzXG5cdFx0ZW1vamkgPSBleHBvcnRzLmVtb2ppRm9ybWF0dGVyKGNvZGUpXG5cdFx0ZW1vamlzLnB1c2ggZW1vamlcblxuZXhwb3J0cy53cml0ZSA9IChvYmosIHRleHQpIC0+XG5cdGlmIG9iai50eXBlID09ICdmaWVsZCdcblx0XHRvYmoudGV4dC5odG1sID0gb2JqLnRleHQuaHRtbCArIHRleHRcblx0ZWxzZVxuXHRcdG9iai5odG1sID0gb2JqLmh0bWwgKyB0ZXh0XG4iLCJpb3MgPSByZXF1aXJlICdpb3Mta2l0J1xuXG5leHBvcnRzLmNyZWF0ZSA9IChvYmopIC0+XG5cdGlmIG9iaiA9PSB1bmRlZmluZWQgdGhlbiBvYmogPSB7fVxuXG5cdHZpZXcgPSBuZXcgTGF5ZXJcblx0dmlldy5jb25zdHJhaW50cyA9IHt9XG5cblx0IyBTZXQgZnJhbWVyIHByb3BzXG5cdGZvciBwcm9wIGluIGlvcy5saWIubGF5ZXJQcm9wc1xuXHRcdFx0aWYgb2JqW3Byb3BdIHRoZW4gdmlld1twcm9wXSA9IG9ialtwcm9wXVxuXG5cdCMgU2V0IGNvbnN0cmFpbnRzXG5cdGlmIG9ialtcImNvbnN0cmFpbnRzXCJdXG5cdFx0dmlldy5jb25zdHJhaW50cyA9IG9ialtcImNvbnN0cmFpbnRzXCJdXG5cdFx0aW9zLmxheW91dC5zZXQodmlldylcblxuXHRyZXR1cm4gdmlld1xuIiwiI2lPU0tpdCBNb2R1bGVcbiNCeSBLZXZ5biBBcm5vdHRcblxuIyBJbXBvcnQgZnJhbWV3b3JrXG5leHBvcnRzLmxheW91dCA9IGxheW91dCA9IHJlcXVpcmUgJ2lvcy1raXQtbGF5b3V0J1xuZXhwb3J0cy5saWIgPSBsaWJyYXJ5ID0gcmVxdWlyZSAnaW9zLWtpdC1saWJyYXJ5J1xuZXhwb3J0cy51dGlscyA9IHV0aWxzID0gcmVxdWlyZSAnaW9zLWtpdC11dGlscydcbmV4cG9ydHMuY29udmVydGVyID0gY29udiA9IHJlcXVpcmUgJ2lvcy1raXQtY29udmVydGVyJ1xuXG4jIFNldHVwIHJlc291cmNlc1xuZXhwb3J0cy5kZXZpY2UgPSB1dGlscy5nZXREZXZpY2UoKVxuZXhwb3J0cy5hc3NldHMgPSBsaWJyYXJ5LmFzc2V0c1xuZXhwb3J0cy5pc1BhZCA9IC0+IGlmIGV4cG9ydHMuZGV2aWNlLm5hbWUuaW5kZXhPZignaXBhZCcpICE9IC0xIHRoZW4gcmV0dXJuIHRydWUgZWxzZSByZXR1cm4gZmFsc2VcbmV4cG9ydHMuaXNQaG9uZSA9IC0+IGlmIGV4cG9ydHMuZGV2aWNlLm5hbWUuaW5kZXhPZignaXBob25lJykgIT0gLTEgdGhlbiByZXR1cm4gdHJ1ZSBlbHNlIHJldHVybiBmYWxzZVxuXG4jIFNob3J0Y3V0c1xuZXhwb3J0cy5jb252ZXJ0ID0gKHNrZXRjaE9iaikgLT5cbiAgY29udi5jb252ZXJ0KHNrZXRjaE9iailcblxuZXhwb3J0cy5jb2xvciA9IChzdHJpbmcpIC0+XG4gIHJldHVybiB1dGlscy5jb2xvcihzdHJpbmcpXG5cbmV4cG9ydHMucHggPSAobnVtKSAtPlxuICByZXR1cm4gdXRpbHMucHgobnVtKVxuXG5leHBvcnRzLnB0ID0gKG51bSkgLT5cbiAgcmV0dXJuIHV0aWxzLnB0KG51bSlcblxuI0ltcG9ydCBDb21wb25lbnRzXG5leHBvcnRzLmFsZXJ0ID0gcmVxdWlyZSAnaW9zLWtpdC1hbGVydCdcbmV4cG9ydHMuYmFubmVyID0gcmVxdWlyZSAnaW9zLWtpdC1iYW5uZXInXG5leHBvcnRzLmJ1dHRvbiA9IHJlcXVpcmUgJ2lvcy1raXQtYnV0dG9uJ1xuZXhwb3J0cy5maWVsZCA9IHJlcXVpcmUgJ2lvcy1raXQtZmllbGQnXG5leHBvcnRzLmtleWJvYXJkID0gcmVxdWlyZSAnaW9zLWtpdC1rZXlib2FyZCdcbmV4cG9ydHMubmF2ID0gcmVxdWlyZSAnaW9zLWtpdC1uYXYtYmFyJ1xuZXhwb3J0cy5zaGVldCA9IHJlcXVpcmUgJ2lvcy1raXQtc2hlZXQnXG5leHBvcnRzLnN0YXR1cyA9IHJlcXVpcmUgJ2lvcy1raXQtc3RhdHVzLWJhcidcbmV4cG9ydHMudGFiID0gcmVxdWlyZSAnaW9zLWtpdC10YWItYmFyJ1xuZXhwb3J0cy50ZXh0ID0gcmVxdWlyZSAnaW9zLWtpdC10ZXh0J1xuZXhwb3J0cy52aWV3ID0gcmVxdWlyZSAnaW9zLWtpdC12aWV3J1xuXG5cbiMjU2V0dXAgQ29tcG9uZW50c1xuZXhwb3J0cy5BbGVydCA9IGV4cG9ydHMuYWxlcnQuY3JlYXRlXG5leHBvcnRzLkJhbm5lciA9IGV4cG9ydHMuYmFubmVyLmNyZWF0ZVxuZXhwb3J0cy5CdXR0b24gPSBleHBvcnRzLmJ1dHRvbi5jcmVhdGVcbmV4cG9ydHMuRmllbGQgPSBleHBvcnRzLmZpZWxkLmNyZWF0ZVxuZXhwb3J0cy5LZXlib2FyZCA9IGV4cG9ydHMua2V5Ym9hcmQuY3JlYXRlXG5leHBvcnRzLk5hdkJhciA9IGV4cG9ydHMubmF2LmNyZWF0ZVxuZXhwb3J0cy5TaGVldCA9IGV4cG9ydHMuc2hlZXQuY3JlYXRlXG5leHBvcnRzLlN0YXR1c0JhciA9IGV4cG9ydHMuc3RhdHVzLmNyZWF0ZVxuZXhwb3J0cy5UYWIgPSBleHBvcnRzLnRhYi50YWJcbmV4cG9ydHMuVGFiQmFyID0gZXhwb3J0cy50YWIuYmFyXG5leHBvcnRzLlRleHQgPSBleHBvcnRzLnRleHQuY3JlYXRlXG5leHBvcnRzLlZpZXcgPSBleHBvcnRzLnZpZXcuY3JlYXRlXG5cblxuIyBMYXllcnMgZnJvbSBjb252ZXJ0aW5nXG5leHBvcnRzLmwgPSB7fVxuIl19
