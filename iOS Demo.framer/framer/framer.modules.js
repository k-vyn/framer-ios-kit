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
      button.on(Events.TouchStart, function() {
        var newColor;
        newColor = button.subLayers[0].color.lighten(30);
        return button.subLayers[0].animate({
          properties: {
            color: newColor
          },
          time: .5
        });
      });
      button.on(Events.TouchEnd, function() {
        return button.subLayers[0].animate({
          properties: {
            color: setup.color
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
        }
        if (found(n, 'right')) {
          props.right = getString(c);
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
  type: "navBar"
};

exports.defaults.props = Object.keys(exports.defaults);

exports.create = function(array) {
  var bar, i, layer, len, ref, setLeading, setup, svg;
  setup = ios.utils.setupComponent(array, exports.defaults);
  bar = new ios.View({
    name: "navBar",
    constraints: {
      leading: 0,
      trailing: 0,
      top: 0,
      height: 64
    }
  });
  bar.bg = new ios.View({
    superLayer: bar,
    backgroundColor: "transparent",
    name: ".bg",
    constraints: {
      leading: 0,
      trailing: 0,
      height: 44,
      bottom: 0
    }
  });
  bar.divider = new ios.View({
    backgroundColor: "#B2B2B2",
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
    bar.backgroundColor = "rgba(255, 255, 255, .8)";
    ios.utils.bgBlur(bar);
  } else {
    bar.backgroundColor = "rgba(255, 255, 255, 1)";
    ios.utils.bgBlur(bar);
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
      setLeading = [bar.chevron, 4];
      ios.layout.set(bar.chevron);
    }
    bar.left = new ios.Button({
      name: ".left",
      superLayer: bar.bg,
      text: setup.left,
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMva2V2eW4vRG9jdW1lbnRzL2ZyYW1lci1pb3Mta2l0L2lPUyBEZW1vLmZyYW1lci9tb2R1bGVzL2lvcy1raXQtYWxlcnQuY29mZmVlIiwiL1VzZXJzL2tldnluL0RvY3VtZW50cy9mcmFtZXItaW9zLWtpdC9pT1MgRGVtby5mcmFtZXIvbW9kdWxlcy9pb3Mta2l0LWJhbm5lci5jb2ZmZWUiLCIvVXNlcnMva2V2eW4vRG9jdW1lbnRzL2ZyYW1lci1pb3Mta2l0L2lPUyBEZW1vLmZyYW1lci9tb2R1bGVzL2lvcy1raXQtYnV0dG9uLmNvZmZlZSIsIi9Vc2Vycy9rZXZ5bi9Eb2N1bWVudHMvZnJhbWVyLWlvcy1raXQvaU9TIERlbW8uZnJhbWVyL21vZHVsZXMvaW9zLWtpdC1jb252ZXJ0ZXIuY29mZmVlIiwiL1VzZXJzL2tldnluL0RvY3VtZW50cy9mcmFtZXItaW9zLWtpdC9pT1MgRGVtby5mcmFtZXIvbW9kdWxlcy9pb3Mta2l0LWZpZWxkLmNvZmZlZSIsIi9Vc2Vycy9rZXZ5bi9Eb2N1bWVudHMvZnJhbWVyLWlvcy1raXQvaU9TIERlbW8uZnJhbWVyL21vZHVsZXMvaW9zLWtpdC1rZXlib2FyZC5jb2ZmZWUiLCIvVXNlcnMva2V2eW4vRG9jdW1lbnRzL2ZyYW1lci1pb3Mta2l0L2lPUyBEZW1vLmZyYW1lci9tb2R1bGVzL2lvcy1raXQtbGF5b3V0LmNvZmZlZSIsIi9Vc2Vycy9rZXZ5bi9Eb2N1bWVudHMvZnJhbWVyLWlvcy1raXQvaU9TIERlbW8uZnJhbWVyL21vZHVsZXMvaW9zLWtpdC1saWJyYXJ5LmNvZmZlZSIsIi9Vc2Vycy9rZXZ5bi9Eb2N1bWVudHMvZnJhbWVyLWlvcy1raXQvaU9TIERlbW8uZnJhbWVyL21vZHVsZXMvaW9zLWtpdC1uYXYtYmFyLmNvZmZlZSIsIi9Vc2Vycy9rZXZ5bi9Eb2N1bWVudHMvZnJhbWVyLWlvcy1raXQvaU9TIERlbW8uZnJhbWVyL21vZHVsZXMvaW9zLWtpdC1zaGVldC5jb2ZmZWUiLCIvVXNlcnMva2V2eW4vRG9jdW1lbnRzL2ZyYW1lci1pb3Mta2l0L2lPUyBEZW1vLmZyYW1lci9tb2R1bGVzL2lvcy1raXQtc3RhdHVzLWJhci5jb2ZmZWUiLCIvVXNlcnMva2V2eW4vRG9jdW1lbnRzL2ZyYW1lci1pb3Mta2l0L2lPUyBEZW1vLmZyYW1lci9tb2R1bGVzL2lvcy1raXQtdGFiLWJhci5jb2ZmZWUiLCIvVXNlcnMva2V2eW4vRG9jdW1lbnRzL2ZyYW1lci1pb3Mta2l0L2lPUyBEZW1vLmZyYW1lci9tb2R1bGVzL2lvcy1raXQtdGVtcC5jb2ZmZWUiLCIvVXNlcnMva2V2eW4vRG9jdW1lbnRzL2ZyYW1lci1pb3Mta2l0L2lPUyBEZW1vLmZyYW1lci9tb2R1bGVzL2lvcy1raXQtdGV4dC5jb2ZmZWUiLCIvVXNlcnMva2V2eW4vRG9jdW1lbnRzL2ZyYW1lci1pb3Mta2l0L2lPUyBEZW1vLmZyYW1lci9tb2R1bGVzL2lvcy1raXQtdXRpbHMuY29mZmVlIiwiL1VzZXJzL2tldnluL0RvY3VtZW50cy9mcmFtZXItaW9zLWtpdC9pT1MgRGVtby5mcmFtZXIvbW9kdWxlcy9pb3Mta2l0LXZpZXcuY29mZmVlIiwiL1VzZXJzL2tldnluL0RvY3VtZW50cy9mcmFtZXItaW9zLWtpdC9pT1MgRGVtby5mcmFtZXIvbW9kdWxlcy9pb3Mta2l0LmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0NBLElBQUE7O0FBQUEsR0FBQSxHQUFNLE9BQUEsQ0FBUSxTQUFSOztBQUVOLE9BQU8sQ0FBQyxRQUFSLEdBQ0M7RUFBQSxLQUFBLEVBQU8sT0FBUDtFQUNBLE9BQUEsRUFBUSxFQURSO0VBRUEsT0FBQSxFQUFRLENBQUMsSUFBRCxDQUZSOzs7QUFJRCxPQUFPLENBQUMsUUFBUSxDQUFDLEtBQWpCLEdBQXlCLE1BQU0sQ0FBQyxJQUFQLENBQVksT0FBTyxDQUFDLFFBQXBCOztBQUV6QixPQUFPLENBQUMsTUFBUixHQUFpQixTQUFDLEdBQUQ7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SixJQUE5bUosRUFBb25KLElBQXBuSixFQUEwbkosSUFBMW5KLEVBQWdvSixJQUFob0osRUFBc29KLElBQXRvSixFQUE0b0osSUFBNW9KLEVBQWtwSixJQUFscEosRUFBd3BKLElBQXhwSixFQUE4cEosSUFBOXBKLEVBQW9xSixJQUFwcUosRUFBMHFKLElBQTFxSixFQUFnckosSUFBaHJKLEVBQXNySixJQUF0ckosRUFBNHJKLElBQTVySixFQUFrc0osSUFBbHNKLEVBQXdzSixJQUF4c0osRUFBOHNKLElBQTlzSixFQUFvdEosSUFBcHRKLEVBQTB0SixJQUExdEosRUFBZ3VKLElBQWh1SixFQUFzdUosSUFBdHVKLEVBQTR1SixJQUE1dUosRUFBa3ZKLElBQWx2SixFQUF3dkosSUFBeHZKLEVBQTh2SixJQUE5dkosRUFBb3dKLElBQXB3SixFQUEwd0osSUFBMXdKLEVBQWd4SixJQUFoeEosRUFBc3hKLElBQXR4SixFQUE0eEosSUFBNXhKLEVBQWt5SixJQUFseUosRUFBd3lKLElBQXh5SixFQUE4eUosSUFBOXlKLEVBQW96SixJQUFwekosRUFBMHpKLElBQTF6SixFQUFnMEosSUFBaDBKLEVBQXMwSixJQUF0MEosRUFBNDBKLElBQTUwSixFQUFrMUosSUFBbDFKLEVBQXcxSixHQUF4MUosRUFBNjFKLElBQTcxSixFQUFtMkosSUFBbjJKLEVBQXkySixJQUF6MkosRUFBKzJKLElBQS8ySixFQUFxM0osSUFBcjNKLEVBQTIzSixJQUEzM0osRUFBaTRKLElBQWo0SixFQUF1NEosSUFBdjRKLEVBQTY0SixJQUE3NEosRUFBbTVKLElBQW41SixFQUF5NUosSUFBejVKLEVBQSs1SixJQUEvNUosRUFBcTZKLElBQXI2SixFQUEyNkosR0FBMzZKLEVBQWc3SixJQUFoN0osRUFBczdKLElBQXQ3SixFQUE0N0osSUFBNTdKLEVBQWs4SixJQUFsOEosRUFBdzhKLElBQXg4SixFQUE4OEosSUFBOThKLEVBQW85SixJQUFwOUosRUFBMDlKLEtBQTE5SixFQUFpK0osSUFBaitKLEVBQXUrSixJQUF2K0osRUFBNitKLEtB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QWdCLE9BQU8sQ0FBQyxLQUFLLENBQUM7O0FBQzlCLE9BQU8sQ0FBQyxNQUFSLEdBQWlCLE9BQU8sQ0FBQyxNQUFNLENBQUM7O0FBQ2hDLE9BQU8sQ0FBQyxNQUFSLEdBQWlCLE9BQU8sQ0FBQyxNQUFNLENBQUM7O0FBQ2hDLE9BQU8sQ0FBQyxLQUFSLEdBQWdCLE9BQU8sQ0FBQyxLQUFLLENBQUM7O0FBQzlCLE9BQU8sQ0FBQyxRQUFSLEdBQW1CLE9BQU8sQ0FBQyxRQUFRLENBQUM7O0FBQ3BDLE9BQU8sQ0FBQyxNQUFSLEdBQWlCLE9BQU8sQ0FBQyxHQUFHLENBQUM7O0FBQzdCLE9BQU8sQ0FBQyxLQUFSLEdBQWdCLE9BQU8sQ0FBQyxLQUFLLENBQUM7O0FBQzlCLE9BQU8sQ0FBQyxTQUFSLEdBQW9CLE9BQU8sQ0FBQyxNQUFNLENBQUM7O0FBQ25DLE9BQU8sQ0FBQyxHQUFSLEdBQWMsT0FBTyxDQUFDLEdBQUcsQ0FBQzs7QUFDMUIsT0FBTyxDQUFDLE1BQVIsR0FBaUIsT0FBTyxDQUFDLEdBQUcsQ0FBQzs7QUFDN0IsT0FBTyxDQUFDLElBQVIsR0FBZSxPQUFPLENBQUMsSUFBSSxDQUFDOztBQUM1QixPQUFPLENBQUMsSUFBUixHQUFlLE9BQU8sQ0FBQyxJQUFJLENBQUM7O0FBSTVCLE9BQU8sQ0FBQyxDQUFSLEdBQVkiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiIyBBbGVydFxuaW9zID0gcmVxdWlyZSAnaW9zLWtpdCdcblxuZXhwb3J0cy5kZWZhdWx0cyA9XG5cdHRpdGxlOiBcIlRpdGxlXCJcblx0bWVzc2FnZTpcIlwiXG5cdGFjdGlvbnM6W1wiT0tcIl1cblxuZXhwb3J0cy5kZWZhdWx0cy5wcm9wcyA9IE9iamVjdC5rZXlzKGV4cG9ydHMuZGVmYXVsdHMpXG5cbmV4cG9ydHMuY3JlYXRlID0gKG9iaikgLT5cblx0c2V0dXAgPSBpb3MudXRpbHMuc2V0dXBDb21wb25lbnQob2JqLCBleHBvcnRzLmRlZmF1bHRzKVxuXG5cdGFsZXJ0ID0gbmV3IGlvcy5WaWV3XG5cdFx0YmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIlxuXHRcdG5hbWU6XCJhbGVydFwiXG5cdFx0Y29uc3RyYWludHM6XG5cdFx0XHRsZWFkaW5nOjBcblx0XHRcdHRyYWlsaW5nOjBcblx0XHRcdHRvcDowXG5cdFx0XHRib3R0b206MFxuXG5cdGFsZXJ0Lm92ZXJsYXkgPSBuZXcgaW9zLlZpZXdcblx0XHRiYWNrZ3JvdW5kQ29sb3I6XCJyZ2JhKDAsMCwwLC4zKVwiXG5cdFx0c3VwZXJMYXllcjphbGVydFxuXHRcdG5hbWU6XCIub3ZlcmxheVwiXG5cdFx0Y29uc3RyYWludHM6XG5cdFx0XHRsZWFkaW5nOjBcblx0XHRcdHRyYWlsaW5nOjBcblx0XHRcdHRvcDowXG5cdFx0XHRib3R0b206MFxuXG5cdGFsZXJ0Lm1vZGFsID0gbmV3IGlvcy5WaWV3XG5cdFx0YmFja2dyb3VuZENvbG9yOlwid2hpdGVcIlxuXHRcdHN1cGVyTGF5ZXI6YWxlcnRcblx0XHRib3JkZXJSYWRpdXM6aW9zLnV0aWxzLnB4KDEwKVxuXHRcdG5hbWU6XCIubW9kYWxcIlxuXHRcdGNvbnN0cmFpbnRzOlxuXHRcdFx0YWxpZ246XCJjZW50ZXJcIlxuXHRcdFx0d2lkdGg6MjgwXG5cdFx0XHRoZWlnaHQ6NDAwXG5cblx0YWxlcnQudGl0bGUgPSBuZXcgaW9zLlRleHRcblx0XHRzdXBlckxheWVyOmFsZXJ0Lm1vZGFsXG5cdFx0dGV4dDpzZXR1cC50aXRsZVxuXHRcdGZvbnRXZWlnaHQ6XCJzZW1pYm9sZFwiXG5cdFx0bmFtZTpcIi50aXRsZVwiXG5cdFx0dGV4dEFsaWduOlwiY2VudGVyXCJcblx0XHRsaW5lSGVpZ2h0OjIwXG5cdFx0Y29uc3RyYWludHM6XG5cdFx0XHR0b3A6MjBcblx0XHRcdHdpZHRoOjIyMFxuXHRcdFx0YWxpZ246XCJob3Jpem9udGFsXCJcblxuXHRhbGVydC5tZXNzYWdlID0gbmV3IGlvcy5UZXh0XG5cdFx0c3VwZXJMYXllcjphbGVydC5tb2RhbFxuXHRcdHRleHQ6c2V0dXAubWVzc2FnZVxuXHRcdGZvbnRTaXplOjEzXG5cdFx0bmFtZTpcIi5tZXNzYWdlXCJcblx0XHR0ZXh0QWxpZ246XCJjZW50ZXJcIlxuXHRcdGxpbmVIZWlnaHQ6MTZcblx0XHRjb25zdHJhaW50czpcblx0XHRcdHRvcDogW2FsZXJ0LnRpdGxlLCAxMF1cblx0XHRcdGFsaWduOlwiaG9yaXpvbnRhbFwiXG5cdFx0XHR3aWR0aDogMjIwXG5cblx0aWYgc2V0dXAubWVzc2FnZS5sZW5ndGggPT0gMFxuXHRcdGFsZXJ0Lm1lc3NhZ2UuaGVpZ2h0ID0gLTI0XG5cblxuXHRhbGVydC5ob3JpRGl2aWRlciA9IG5ldyBpb3MuVmlld1xuXHRcdHN1cGVyTGF5ZXI6YWxlcnQubW9kYWxcblx0XHRiYWNrZ3JvdW5kQ29sb3I6XCIjRTJFOEVCXCJcblx0XHRuYW1lOlwiLmhvcmlEaXZpZGVyXCJcblx0XHRjb25zdHJhaW50czpcblx0XHRcdGxlYWRpbmc6MFxuXHRcdFx0dHJhaWxpbmc6MFxuXHRcdFx0aGVpZ2h0OjFcblx0XHRcdGJvdHRvbTo0NFxuXG5cdGNsZWFuTmFtZSA9IChuKSAtPlxuXHRcdGlmIG5bMF0gPT0gXCItXCJcblx0XHRcdHJldHVybiBuLnNsaWNlKDkpXG5cdFx0ZWxzZVxuXHRcdFx0cmV0dXJuIG5cblx0I1RpdGxlICsgTWVzc2FnZSArIDEgc2V0IG9mIGFjdGlvbnNcblx0YWxlcnQubW9kYWwuY29uc3RyYWludHNbXCJoZWlnaHRcIl0gPSAyMCArIGlvcy51dGlscy5wdChhbGVydC50aXRsZS5oZWlnaHQpICsgMTAgKyBpb3MudXRpbHMucHQoYWxlcnQubWVzc2FnZS5oZWlnaHQpICsgMjQgKyA0NFxuXG5cdGFjdGlvbnMgPSBbXVxuXHRzd2l0Y2ggc2V0dXAuYWN0aW9ucy5sZW5ndGhcblx0XHR3aGVuIDFcblxuXHRcdFx0YWN0TGFiZWwgPSBpb3MudXRpbHMuY2FwaXRhbGl6ZShzZXR1cC5hY3Rpb25zWzBdKVxuXG5cdFx0XHRhY3Rpb24gPSBuZXcgaW9zLlZpZXdcblx0XHRcdFx0c3VwZXJMYXllcjphbGVydC5tb2RhbFxuXHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6XCJ3aGl0ZVwiXG5cdFx0XHRcdG5hbWU6Y2xlYW5OYW1lKHNldHVwLmFjdGlvbnNbMF0pXG5cdFx0XHRcdGJvcmRlclJhZGl1czppb3MudXRpbHMucHgoMTApXG5cdFx0XHRcdGNvbnN0cmFpbnRzOlxuXHRcdFx0XHRcdGxlYWRpbmc6MFxuXHRcdFx0XHRcdHRyYWlsaW5nOjBcblx0XHRcdFx0XHRib3R0b206MFxuXHRcdFx0XHRcdGhlaWdodDo0NFxuXG5cdFx0XHRhY3Rpb24ubGFiZWwgPSBuZXcgaW9zLlRleHRcblx0XHRcdFx0Y29sb3I6aW9zLnV0aWxzLmNvbG9yKFwiYmx1ZVwiKVxuXHRcdFx0XHRzdXBlckxheWVyOmFjdGlvblxuXHRcdFx0XHR0ZXh0OmFjdExhYmVsXG5cdFx0XHRcdG5hbWU6XCJsYWJlbFwiXG5cdFx0XHRcdGNvbnN0cmFpbnRzOlxuXHRcdFx0XHRcdGFsaWduOlwiaG9yaXpvbnRhbFwiXG5cdFx0XHRcdFx0Ym90dG9tOjE2XG5cblx0XHRcdGFjdGlvbnMucHVzaCBhY3Rpb25cblxuXHRcdHdoZW4gMlxuXG5cdFx0XHRhY3RMYWJlbCA9IGlvcy51dGlscy5jYXBpdGFsaXplKHNldHVwLmFjdGlvbnNbMF0pXG5cblx0XHRcdGFjdGlvbiA9IG5ldyBpb3MuVmlld1xuXHRcdFx0XHRzdXBlckxheWVyOmFsZXJ0Lm1vZGFsXG5cdFx0XHRcdG5hbWU6Y2xlYW5OYW1lKHNldHVwLmFjdGlvbnNbMF0pXG5cdFx0XHRcdGJvcmRlclJhZGl1czppb3MudXRpbHMucHgoMTApXG5cdFx0XHRcdGJhY2tncm91bmRDb2xvcjpcIndoaXRlXCJcblx0XHRcdFx0Y29uc3RyYWludHM6XG5cdFx0XHRcdFx0bGVhZGluZzowXG5cdFx0XHRcdFx0dHJhaWxpbmc6aW9zLnV0aWxzLnB0KGFsZXJ0Lm1vZGFsLndpZHRoLzIpXG5cdFx0XHRcdFx0Ym90dG9tOjBcblx0XHRcdFx0XHRoZWlnaHQ6NDRcblxuXHRcdFx0YWN0aW9uLmxhYmVsID0gbmV3IGlvcy5UZXh0XG5cdFx0XHRcdGNvbG9yOmlvcy51dGlscy5jb2xvcihcImJsdWVcIilcblx0XHRcdFx0c3VwZXJMYXllcjphY3Rpb25cblx0XHRcdFx0dGV4dDphY3RMYWJlbFxuXHRcdFx0XHRuYW1lOlwibGFiZWxcIlxuXHRcdFx0XHRjb25zdHJhaW50czpcblx0XHRcdFx0XHRhbGlnbjpcImhvcml6b250YWxcIlxuXHRcdFx0XHRcdGJvdHRvbToxNlxuXG5cdFx0XHRhY3Rpb25zLnB1c2ggYWN0aW9uXG5cblx0XHRcdGFsZXJ0LnZlcnREaXZpZGVyID0gbmV3IGlvcy5WaWV3XG5cdFx0XHRcdHN1cGVyTGF5ZXI6YWxlcnQubW9kYWxcblx0XHRcdFx0YmFja2dyb3VuZENvbG9yOlwiI0UyRThFQlwiXG5cdFx0XHRcdG5hbWU6XCIudmVydERpdmlkZXJcIlxuXHRcdFx0XHRjb25zdHJhaW50czpcblx0XHRcdFx0XHR3aWR0aDoxXG5cdFx0XHRcdFx0Ym90dG9tOjBcblx0XHRcdFx0XHRoZWlnaHQ6NDRcblx0XHRcdFx0XHRhbGlnbjpcImhvcml6b250YWxcIlxuXG5cdFx0XHRhY3RMYWJlbDIgPSBpb3MudXRpbHMuY2FwaXRhbGl6ZShzZXR1cC5hY3Rpb25zWzFdKVxuXG5cdFx0XHRhY3Rpb24yID0gbmV3IGlvcy5WaWV3XG5cdFx0XHRcdHN1cGVyTGF5ZXI6YWxlcnQubW9kYWxcblx0XHRcdFx0bmFtZTpjbGVhbk5hbWUoc2V0dXAuYWN0aW9uc1sxXSlcblx0XHRcdFx0Ym9yZGVyUmFkaXVzOmlvcy51dGlscy5weCgxMClcblx0XHRcdFx0YmFja2dyb3VuZENvbG9yOlwid2hpdGVcIlxuXHRcdFx0XHRjb25zdHJhaW50czpcblx0XHRcdFx0XHRsZWFkaW5nOmlvcy51dGlscy5wdChhbGVydC5tb2RhbC53aWR0aC8yKVxuXHRcdFx0XHRcdHRyYWlsaW5nOjBcblx0XHRcdFx0XHRib3R0b206MFxuXHRcdFx0XHRcdGhlaWdodDo0NFxuXG5cdFx0XHRhY3Rpb24yLmxhYmVsID0gbmV3IGlvcy5UZXh0XG5cdFx0XHRcdGNvbG9yOmlvcy51dGlscy5jb2xvcihcImJsdWVcIilcblx0XHRcdFx0c3VwZXJMYXllcjphY3Rpb24yXG5cdFx0XHRcdHRleHQ6YWN0TGFiZWwyXG5cdFx0XHRcdG5hbWU6XCJsYWJlbFwiXG5cdFx0XHRcdGNvbnN0cmFpbnRzOlxuXHRcdFx0XHRcdGFsaWduOlwiaG9yaXpvbnRhbFwiXG5cdFx0XHRcdFx0Ym90dG9tOjE2XG5cblx0XHRcdGFjdGlvbnMucHVzaCBhY3Rpb24yXG5cblx0XHRlbHNlXG5cdFx0XHRmb3IgYWN0LCBpbmRleCBpbiBzZXR1cC5hY3Rpb25zXG5cblx0XHRcdFx0YWN0TGFiZWwgPSBpb3MudXRpbHMuY2FwaXRhbGl6ZShhY3QpXG5cblx0XHRcdFx0YWN0aW9uID0gbmV3IGlvcy5WaWV3XG5cdFx0XHRcdFx0c3VwZXJMYXllcjphbGVydC5tb2RhbFxuXHRcdFx0XHRcdG5hbWU6Y2xlYW5OYW1lKGFjdClcblx0XHRcdFx0XHRib3JkZXJSYWRpdXM6aW9zLnV0aWxzLnB4KDEwKVxuXHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjpcIndoaXRlXCJcblx0XHRcdFx0XHRjb25zdHJhaW50czpcblx0XHRcdFx0XHRcdGxlYWRpbmc6MFxuXHRcdFx0XHRcdFx0dHJhaWxpbmc6MFxuXHRcdFx0XHRcdFx0Ym90dG9tOjAgKyAoKHNldHVwLmFjdGlvbnMubGVuZ3RoIC0gaW5kZXggLSAxKSAqIDQ0KVxuXHRcdFx0XHRcdFx0aGVpZ2h0OjQ0XG5cblx0XHRcdFx0YWN0aW9uRGl2aWRlciA9IG5ldyBpb3MuVmlld1xuXHRcdFx0XHRcdHN1cGVyTGF5ZXI6YWxlcnQubW9kYWxcblx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6XCIjRTJFOEVCXCJcblx0XHRcdFx0XHRuYW1lOlwiYWN0aW9uIGRpdmlkZXJcIlxuXHRcdFx0XHRcdGNvbnN0cmFpbnRzOlxuXHRcdFx0XHRcdFx0bGVhZGluZzowXG5cdFx0XHRcdFx0XHR0cmFpbGluZzowXG5cdFx0XHRcdFx0XHRoZWlnaHQ6MVxuXHRcdFx0XHRcdFx0Ym90dG9tOjAgKyAoKHNldHVwLmFjdGlvbnMubGVuZ3RoIC0gaW5kZXgpICogNDQpXG5cblx0XHRcdFx0YWN0aW9uLmxhYmVsID0gbmV3IGlvcy5UZXh0XG5cdFx0XHRcdFx0c3R5bGU6XCJhbGVydEFjdGlvblwiXG5cdFx0XHRcdFx0Y29sb3I6aW9zLnV0aWxzLmNvbG9yKFwiYmx1ZVwiKVxuXHRcdFx0XHRcdHN1cGVyTGF5ZXI6YWN0aW9uXG5cdFx0XHRcdFx0dGV4dDphY3RMYWJlbFxuXHRcdFx0XHRcdG5hbWU6XCJsYWJlbFwiXG5cdFx0XHRcdFx0Y29uc3RyYWludHM6XG5cdFx0XHRcdFx0XHRhbGlnbjpcImhvcml6b250YWxcIlxuXHRcdFx0XHRcdFx0Ym90dG9tOjE0XG5cblxuXHRcdFx0XHRhY3Rpb25zLnB1c2ggYWN0aW9uXG5cdFx0XHRcdGFsZXJ0Lm1vZGFsLmNvbnN0cmFpbnRzW1wiaGVpZ2h0XCJdID0gYWxlcnQubW9kYWwuY29uc3RyYWludHNbXCJoZWlnaHRcIl0gKyA0MiAtIDEyXG5cblx0YWxlcnQuYWN0aW9ucyA9IHt9XG5cdGZvciBhY3QsaW5kZXggaW4gYWN0aW9uc1xuXG5cdFx0I0hhbmRsZSBzcGVjaWFsIGNoYXJhY3RlcnNcblx0XHRhY3QudHlwZSA9IFwiYnV0dG9uXCJcblx0XHRpb3MudXRpbHMuc3BlY2lhbENoYXIoYWN0KVxuXG5cdFx0aWYgc2V0dXAuYWN0aW9uc1tpbmRleF0uaW5kZXhPZihcIi1yXCIpID09IDBcblx0XHRcdGFjdC5vcmlnQ29sb3IgPSBpb3MudXRpbHMuY29sb3IoXCJyZWRcIilcblx0XHRlbHNlXG5cdFx0XHRhY3Qub3JpZ0NvbG9yID0gaW9zLnV0aWxzLmNvbG9yKFwiYmx1ZVwiKVxuXHRcdGlvcy5sYXlvdXQuc2V0KGFjdC5sYWJlbClcblx0XHQjQWRkIFRvdWNoIEV2ZW50c1xuXHRcdGFjdC5vbiBFdmVudHMuVG91Y2hTdGFydCwgLT5cblx0XHRcdEAuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiXG5cdFx0XHRALmFuaW1hdGVcblx0XHRcdFx0cHJvcGVydGllczooYmFja2dyb3VuZENvbG9yOmFjdC5iYWNrZ3JvdW5kQ29sb3IuZGFya2VuKDUpKVxuXHRcdFx0XHR0aW1lOi4yNVxuXHRcdFx0QC5sYWJlbC5hbmltYXRlXG5cdFx0XHRcdHByb3BlcnRpZXM6KGNvbG9yOkAub3JpZ0NvbG9yLmxpZ2h0ZW4oMTApKVxuXHRcdFx0XHR0aW1lOi4yNVxuXG5cdFx0YWN0Lm9uIEV2ZW50cy5Ub3VjaEVuZCwgLT5cblx0XHRcdEAuYW5pbWF0ZVxuXHRcdFx0XHRwcm9wZXJ0aWVzOihiYWNrZ3JvdW5kQ29sb3I6XCJ3aGl0ZVwiKVxuXHRcdFx0XHR0aW1lOi4yNVxuXHRcdFx0QC5sYWJlbC5hbmltYXRlXG5cdFx0XHRcdHByb3BlcnRpZXM6KGNvbG9yOkAub3JpZ0NvbG9yKVxuXHRcdFx0XHR0aW1lOi4yNVxuXHRcdFx0YWxlcnQuZGVzdHJveSgpXG5cblx0XHQjIEV4cG9ydCBhY3Rpb25zXG5cdFx0YWxlcnQuYWN0aW9uc1thY3QubmFtZV0gPSBhY3RcblxuXHRpb3MubGF5b3V0LnNldChhY3Rpb25zW2FjdGlvbnMubGVuZ3RoIC0gMV0pXG5cdHJldHVybiBhbGVydFxuIiwiIyBCYW5uZXJcbmlvcyA9IHJlcXVpcmUgJ2lvcy1raXQnXG5cbmV4cG9ydHMuZGVmYXVsdHMgPVxuXHR0aXRsZTogXCJUaXRsZVwiXG5cdG1lc3NhZ2U6XCJNZXNzYWdlXCJcblx0YWN0aW9uOlwiQWN0aW9uXCJcblx0dGltZTpcIm5vd1wiXG5cdGFwcDpcImFwcFwiXG5cdGljb246dW5kZWZpbmVkXG5cdGR1cmF0aW9uOjdcblx0YW5pbWF0ZWQ6dHJ1ZVxuXHRyZXBseTp0cnVlXG5cbmV4cG9ydHMuZGVmYXVsdHMucHJvcHMgPSBPYmplY3Qua2V5cyhleHBvcnRzLmRlZmF1bHRzKVxuXG5leHBvcnRzLmNyZWF0ZSA9IChvYmopIC0+XG5cdHNldHVwID0gaW9zLnV0aWxzLnNldHVwQ29tcG9uZW50KG9iaiwgZXhwb3J0cy5kZWZhdWx0cylcblxuXHQjc2V0IHNwZWNzIGZvciBlYWNoIGRldmljZVxuXHRzcGVjcyA9XG5cdFx0bGVhZGluZ0ljb246IDE1XG5cdFx0dG9wSWNvbjogOFxuXHRcdHRvcFRpdGxlOiA2XG5cdFx0d2lkdGg6MFxuXG5cdHN3aXRjaCBpb3MuZGV2aWNlLm5hbWVcblx0XHR3aGVuIFwiaXBob25lLTVcIlxuXHRcdFx0c3BlY3Mud2lkdGggPSAzMDRcblx0XHR3aGVuIFwiaXBob25lLTZzXCJcblx0XHRcdHNwZWNzLndpZHRoID0gMzU5XG5cdFx0d2hlbiBcImlwaG9uZS02cy1wbHVzXCJcblx0XHRcdHNwZWNzLmxlYWRpbmdJY29uID0gMTVcblx0XHRcdHNwZWNzLnRvcEljb24gPSAxMlxuXHRcdFx0c3BlY3MudG9wVGl0bGUgPSAxMFxuXHRcdFx0c3BlY3Mud2lkdGggPSAzOThcblx0XHR3aGVuIFwiaXBhZFwiXG5cdFx0XHRzcGVjcy5sZWFkaW5nSWNvbiA9IDhcblx0XHRcdHNwZWNzLnRvcEljb24gPSA4XG5cdFx0XHRzcGVjcy50b3BUaXRsZSA9IDExXG5cdFx0XHRzcGVjcy53aWR0aCA9IDM5OFxuXHRcdHdoZW4gXCJpcGFkLXByb1wiXG5cdFx0XHRzcGVjcy5sZWFkaW5nSWNvbiA9IDhcblx0XHRcdHNwZWNzLnRvcEljb24gPSA4XG5cdFx0XHRzcGVjcy50b3BUaXRsZSA9IDlcblx0XHRcdHNwZWNzLndpZHRoID0gNTU2XG5cblxuXHRiYW5uZXIgPSBuZXcgaW9zLlZpZXdcblx0XHRiYWNrZ3JvdW5kQ29sb3I6XCJyZ2JhKDI1NSwyNTUsMjU1LC42KVwiXG5cdFx0bmFtZTpcImJhbm5lclwiXG5cdFx0Ym9yZGVyUmFkaXVzOmlvcy5weCgxMilcblx0XHRzaGFkb3dDb2xvcjpcInJnYmEoMCwwLDAsLjMpXCJcblx0XHRzaGFkb3dZOmlvcy5weCgyKVxuXHRcdHNoYWRvd0JsdXI6aW9zLnB4KDEwKVxuXHRcdGNsaXA6dHJ1ZVxuXHRcdGNvbnN0cmFpbnRzOlxuXHRcdFx0YWxpZ246J2hvcml6b250YWwnXG5cdFx0XHR3aWR0aDpzcGVjcy53aWR0aFxuXHRcdFx0dG9wOjhcblx0XHRcdGhlaWdodDo5M1xuXG5cdGJhbm5lci5oZWFkZXIgPSBuZXcgaW9zLlZpZXdcblx0XHRiYWNrZ3JvdW5kQ29sb3I6XCJyZ2JhKDI1NSwyNTUsMjU1LCAuMylcIlxuXHRcdG5hbWU6XCIuaGVhZGVyXCJcblx0XHRzdXBlckxheWVyOmJhbm5lclxuXHRcdGNvbnN0cmFpbnRzOlxuXHRcdFx0aGVpZ2h0OjM2XG5cdFx0XHRsZWFkaW5nOjBcblx0XHRcdHRyYWlsaW5nOjBcblxuXHRpZiBzZXR1cC5pY29uID09IHVuZGVmaW5lZFxuXG5cdFx0YmFubmVyLmljb24gPSBuZXcgaW9zLlZpZXdcblx0XHRcdHN1cGVyTGF5ZXI6YmFubmVyLmhlYWRlclxuXHRcdGJhbm5lci5pY29uLnN0eWxlW1wiYmFja2dyb3VuZFwiXSA9IFwibGluZWFyLWdyYWRpZW50KC0xODBkZWcsICM2N0ZGODEgMCUsICMwMUI0MUYgMTAwJSlcIlxuXG5cdGVsc2VcblxuXHRcdGJhbm5lci5oZWFkZXIuYWRkU3ViTGF5ZXIoc2V0dXAuaWNvbilcblx0XHRiYW5uZXIuaWNvbiA9IHNldHVwLmljb25cblxuXG5cdGJhbm5lci5pY29uLmJvcmRlclJhZGl1cyA9IGlvcy51dGlscy5weCg0LjUpXG5cdGJhbm5lci5pY29uLm5hbWUgPSBcIi5pY29uXCJcblx0YmFubmVyLmljb24uY29uc3RyYWludHMgPVxuXHRcdGhlaWdodDoyMFxuXHRcdHdpZHRoOjIwXG5cdFx0bGVhZGluZzpzcGVjcy5sZWFkaW5nSWNvblxuXHRcdGFsaWduOlwidmVydGljYWxcIlxuXG5cdGlvcy5sYXlvdXQuc2V0KGJhbm5lci5pY29uKVxuXG5cdGJhbm5lci5hcHAgPSBuZXcgaW9zLlRleHRcblx0XHR0ZXh0OnNldHVwLmFwcC50b1VwcGVyQ2FzZSgpXG5cdFx0Y29sb3I6XCJyZ2JhKDAsMCwwLC41KVwiXG5cdFx0Zm9udFNpemU6MTNcblx0XHRsZXR0ZXJTcGFjaW5nOi41XG5cdFx0c3VwZXJMYXllcjpiYW5uZXIuaGVhZGVyXG5cdFx0Y29uc3RyYWludHM6XG5cdFx0XHRsZWFkaW5nOltiYW5uZXIuaWNvbiwgNl1cblx0XHRcdGFsaWduOlwidmVydGljYWxcIlxuXG5cdGJhbm5lci50aXRsZSA9IG5ldyBpb3MuVGV4dFxuXHRcdHRleHQ6c2V0dXAudGl0bGVcblx0XHRjb2xvcjpcImJsYWNrXCJcblx0XHRmb250V2VpZ2h0Olwic2VtaWJvbGRcIlxuXHRcdGZvbnRTaXplOjE1XG5cdFx0c3VwZXJMYXllcjpiYW5uZXJcblx0XHRuYW1lOlwiLnRpdGxlXCJcblx0XHRjb25zdHJhaW50czpcblx0XHRcdHRvcDo0NVxuXHRcdFx0bGVhZGluZzoxNVxuXG5cdGJhbm5lci5tZXNzYWdlID0gbmV3IGlvcy5UZXh0XG5cdFx0dGV4dDpzZXR1cC5tZXNzYWdlXG5cdFx0Y29sb3I6XCJibGFja1wiXG5cdFx0Zm9udFNpemU6MTVcblx0XHRmb250V2VpZ2h0OlwibGlnaHRcIlxuXHRcdHN1cGVyTGF5ZXI6YmFubmVyXG5cdFx0bmFtZTpcIi5tZXNzYWdlXCJcblx0XHRjb25zdHJhaW50czpcblx0XHRcdGxlYWRpbmdFZGdlczpiYW5uZXIudGl0bGVcblx0XHRcdHRvcDpbYmFubmVyLnRpdGxlLCA2XVxuXG5cdGJhbm5lci50aW1lID0gbmV3IGlvcy5UZXh0XG5cdFx0dGV4dDpzZXR1cC50aW1lXG5cdFx0Y29sb3I6XCJyZ2JhKDAsMCwwLC41KVwiXG5cdFx0Zm9udFNpemU6MTNcblx0XHRzdXBlckxheWVyOmJhbm5lci5oZWFkZXJcblx0XHRuYW1lOlwiLnRpbWVcIlxuXHRcdGNvbnN0cmFpbnRzOlxuXHRcdFx0dHJhaWxpbmc6MTZcblx0XHRcdGFsaWduOlwidmVydGljYWxcIlxuXG5cdGlmIGlvcy5kZXZpY2UubmFtZSA9PSBcImlwYWRcIiB8fCBpb3MuZGV2aWNlLm5hbWUgPT0gXCJpcGFkLXByb1wiXG5cdFx0YmFubmVyLnRpbWUuY29uc3RyYWludHMgPVxuXHRcdFx0Ym90dG9tRWRnZXM6IGJhbm5lci50aXRsZVxuXHRcdFx0dHJhaWxpbmc6IHNwZWNzLmxlYWRpbmdJY29uXG5cblxuXHRpb3MudXRpbHMuYmdCbHVyKGJhbm5lcilcblxuXHQjIyBCYW5uZXIgRHJhZyBzZXR0aW5nc1xuXHRiYW5uZXIuZHJhZ2dhYmxlID0gdHJ1ZVxuXHRiYW5uZXIuZHJhZ2dhYmxlLmhvcml6b250YWwgPSBmYWxzZVxuXHRiYW5uZXIuZHJhZ2dhYmxlLmNvbnN0cmFpbnRzID1cblx0XHR5Omlvcy5weCg4KVxuXHRcdHg6aW9zLnB4KDgpXG5cblx0YmFubmVyLmRyYWdnYWJsZS5ib3VuY2VPcHRpb25zID1cblx0ICAgIGZyaWN0aW9uOiAyNVxuXHQgICAgdGVuc2lvbjogMjUwXG5cblx0YmFubmVyLm9uIEV2ZW50cy5EcmFnRW5kLCAtPlxuXHRcdGlmIGJhbm5lci5tYXhZIDwgaW9zLnV0aWxzLnB4KDY4KVxuXHRcdFx0YmFubmVyLmFuaW1hdGVcblx0XHRcdFx0cHJvcGVydGllczoobWF4WTowKVxuXHRcdFx0XHR0aW1lOi4xNVxuXHRcdFx0XHRjdXJ2ZTpcImVhc2UtaW4tb3V0XCJcblx0XHRcdFV0aWxzLmRlbGF5IC4yNSwgLT5cblx0XHRcdFx0YmFubmVyLmRlc3Ryb3koKVxuXG5cdCMgQW5pbWF0ZS1pblxuXHRpZiBzZXR1cC5hbmltYXRlZCA9PSB0cnVlXG5cdFx0YmFubmVyLnkgPSAwIC0gYmFubmVyLmhlaWdodFxuXHRcdGlvcy5sYXlvdXQuYW5pbWF0ZVxuXHRcdFx0dGFyZ2V0OmJhbm5lclxuXHRcdFx0dGltZTouMjVcblx0XHRcdGN1cnZlOidlYXNlLWluLW91dCdcblx0IyBBbmltYXRlLW91dFxuXHRpZiBzZXR1cC5kdXJhdGlvblxuXHRcdFV0aWxzLmRlbGF5IHNldHVwLmR1cmF0aW9uLCAtPlxuXHRcdFx0YmFubmVyLmFuaW1hdGVcblx0XHRcdFx0cHJvcGVydGllczoobWF4WTowKVxuXHRcdFx0XHR0aW1lOi4yNVxuXHRcdFx0XHRjdXJ2ZTpcImVhc2UtaW4tb3V0XCJcblx0XHRVdGlscy5kZWxheSBzZXR1cC5kdXJhdGlvbiArIC4yNSwgLT5cblx0XHRcdGJhbm5lci5kZXN0cm95KClcblxuXHRyZXR1cm4gYmFubmVyXG4iLCJpb3MgPSByZXF1aXJlICdpb3Mta2l0J1xuXG5leHBvcnRzLmRlZmF1bHRzID1cblx0XHR0ZXh0OlwiQnV0dG9uXCJcblx0XHR0eXBlOlwidGV4dFwiXG5cdFx0c3R5bGU6XCJsaWdodFwiXG5cdFx0YmFja2dyb3VuZENvbG9yOlwid2hpdGVcIlxuXHRcdGNvbG9yOlwiIzAwN0FGRlwiXG5cdFx0Zm9udFNpemU6MTdcblx0XHRmb250V2VpZ2h0OlwicmVndWxhclwiXG5cdFx0bmFtZTpcImJ1dHRvblwiXG5cdFx0Ymx1cjp0cnVlXG5cdFx0c3VwZXJMYXllcjp1bmRlZmluZWRcblx0XHRjb25zdHJhaW50czp1bmRlZmluZWRcblxuZXhwb3J0cy5kZWZhdWx0cy5wcm9wcyA9IE9iamVjdC5rZXlzKGV4cG9ydHMuZGVmYXVsdHMpXG5cbmV4cG9ydHMuY3JlYXRlID0gKGFycmF5KSAtPlxuXHRzZXR1cCA9IGlvcy51dGlscy5zZXR1cENvbXBvbmVudChhcnJheSwgZXhwb3J0cy5kZWZhdWx0cylcblxuXHRidXR0b24gPSBuZXcgaW9zLlZpZXdcblx0XHRuYW1lOnNldHVwLm5hbWVcblx0XHRjb25zdHJhaW50czpzZXR1cC5jb25zdHJhaW50c1xuXHRcdHN1cGVyTGF5ZXI6c2V0dXAuc3VwZXJMYXllclxuXHRidXR0b24udHlwZSA9IHNldHVwLnR5cGVcblxuXHRjb2xvciA9IFwiXCJcblxuXHRzd2l0Y2ggc2V0dXAudHlwZVxuXHRcdHdoZW4gXCJiaWdcIlxuXHRcdFx0c2V0dXAuZm9udFNpemUgPSAyMFxuXHRcdFx0c2V0dXAuZm9udFdlaWdodCA9IFwibWVkaXVtXCJcblxuXHRcdFx0YnV0dG9uLmJvcmRlclJhZGl1cyA9IGlvcy51dGlscy5weCgxMi41KVxuXHRcdFx0YmFja2dyb3VuZENvbG9yID0gXCJcIlxuXG5cdFx0XHRpZiBidXR0b24uY29uc3RyYWludHMgPT0gdW5kZWZpbmVkIHRoZW4gYnV0dG9uLmNvbnN0cmFpbnRzID0ge31cblx0XHRcdGJ1dHRvbi5jb25zdHJhaW50cy5sZWFkaW5nID0gMTBcblx0XHRcdGJ1dHRvbi5jb25zdHJhaW50cy50cmFpbGluZyA9IDEwXG5cdFx0XHRidXR0b24uY29uc3RyYWludHMuaGVpZ2h0ID0gNTdcblxuXHRcdFx0c3dpdGNoIHNldHVwLnN0eWxlXG5cdFx0XHRcdHdoZW4gXCJsaWdodFwiXG5cdFx0XHRcdFx0Y29sb3IgPSBpb3MudXRpbHMuY29sb3IoXCJibHVlXCIpXG5cdFx0XHRcdFx0aWYgc2V0dXAuYmx1clxuXHRcdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yID0gXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIC45KVwiXG5cdFx0XHRcdFx0XHRpb3MudXRpbHMuYmdCbHVyKGJ1dHRvbilcblx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCJcblxuXHRcdFx0XHR3aGVuIFwiZGFya1wiXG5cdFx0XHRcdFx0Y29sb3IgPSBcIiNGRkZcIlxuXHRcdFx0XHRcdGlmIHNldHVwLmJsdXJcblx0XHRcdFx0XHRcdGJhY2tncm91bmRDb2xvciA9IFwicmdiYSg0MywgNDMsIDQzLCAuOSlcIlxuXHRcdFx0XHRcdFx0aW9zLnV0aWxzLmJnQmx1cihidXR0b24pXG5cdFx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yID0gXCIjMjgyODI4XCJcblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdGlmIHNldHVwLmJsdXJcblx0XHRcdFx0XHRcdGNvbG9yID0gc2V0dXAuY29sb3Jcblx0XHRcdFx0XHRcdGJhY2tncm91bmRDb2xvciA9IG5ldyBDb2xvcihzZXR1cC5iYWNrZ3JvdW5kQ29sb3IpXG5cdFx0XHRcdFx0XHRyZ2JTdHJpbmcgPSBiYWNrZ3JvdW5kQ29sb3IudG9SZ2JTdHJpbmcoKVxuXHRcdFx0XHRcdFx0cmdiYVN0cmluZyA9IHJnYlN0cmluZy5yZXBsYWNlKFwiKVwiLCBcIiwgLjkpXCIpXG5cdFx0XHRcdFx0XHRyZ2JhU3RyaW5nICA9IHJnYmFTdHJpbmcucmVwbGFjZShcInJnYlwiLCBcInJnYmFcIilcblx0XHRcdFx0XHRcdGJhY2tncm91bmRDb2xvciA9IHJnYmFTdHJpbmdcblx0XHRcdFx0XHRcdGlvcy51dGlscy5iZ0JsdXIoYnV0dG9uKVxuXHRcdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRcdGNvbG9yID0gc2V0dXAuY29sb3Jcblx0XHRcdFx0XHRcdGJhY2tncm91bmRDb2xvciA9IG5ldyBDb2xvcihzZXR1cC5iYWNrZ3JvdW5kQ29sb3IpXG5cblx0XHRcdGJ1dHRvbi5iYWNrZ3JvdW5kQ29sb3IgPSBiYWNrZ3JvdW5kQ29sb3JcblxuXHRcdFx0YnV0dG9uLm9uIEV2ZW50cy5Ub3VjaFN0YXJ0LCAtPlxuXHRcdFx0XHRuZXdDb2xvciA9IFwiXCJcblx0XHRcdFx0aWYgc2V0dXAuc3R5bGUgPT0gXCJkYXJrXCJcblx0XHRcdFx0XHRuZXdDb2xvciA9IGJ1dHRvbi5iYWNrZ3JvdW5kQ29sb3IubGlnaHRlbigxMClcblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdG5ld0NvbG9yID0gYnV0dG9uLmJhY2tncm91bmRDb2xvci5kYXJrZW4oMTApXG5cdFx0XHRcdGJ1dHRvbi5hbmltYXRlXG5cdFx0XHRcdFx0cHJvcGVydGllczooYmFja2dyb3VuZENvbG9yOm5ld0NvbG9yKVxuXHRcdFx0XHRcdHRpbWU6LjVcblxuXHRcdFx0YnV0dG9uLm9uIEV2ZW50cy5Ub3VjaEVuZCwgLT5cblx0XHRcdFx0YnV0dG9uLmFuaW1hdGVcblx0XHRcdFx0XHRwcm9wZXJ0aWVzOihiYWNrZ3JvdW5kQ29sb3I6YmFja2dyb3VuZENvbG9yKVxuXHRcdFx0XHRcdHRpbWU6LjVcblxuXHRcdHdoZW4gXCJzbWFsbFwiXG5cdFx0XHRzZXR1cC5mb250U2l6ZSA9IDE0XG5cdFx0XHRzZXR1cC50b3AgPSA0XG5cdFx0XHRidXR0b24uYm9yZGVyUmFkaXVzID0gaW9zLnV0aWxzLnB4KDIuNSlcblx0XHRcdHNldHVwLmZvbnRXZWlnaHQgPSA1MDBcblx0XHRcdHNldHVwLnRleHQgPSBzZXR1cC50ZXh0LnRvVXBwZXJDYXNlKClcblx0XHRcdGNvbG9yID0gc2V0dXAuY29sb3Jcblx0XHRcdGJ1dHRvbi5ib3JkZXJDb2xvciA9IHNldHVwLmNvbG9yXG5cblx0XHRcdGJ1dHRvbi5iYWNrZ3JvdW5kQ29sb3IgPSBcInRyYW5zcGFyZW50XCJcblx0XHRcdGJ1dHRvbi5ib3JkZXJXaWR0aCA9IGlvcy51dGlscy5weCgxKVxuXG5cdFx0ZWxzZVxuXHRcdFx0YnV0dG9uLmJhY2tncm91bmRDb2xvciA9IFwidHJhbnNwYXJlbnRcIlxuXHRcdFx0YnV0dG9uLm9yaWdDb2xvciA9IGlvcy51dGlscy5zcGVjaWFsQ2hhcihidXR0b24pXG5cdFx0XHRjb2xvciA9IHNldHVwLmNvbG9yXG5cblx0XHRcdGJ1dHRvbi5vbiBFdmVudHMuVG91Y2hTdGFydCwgLT5cblx0XHRcdFx0bmV3Q29sb3IgPSBidXR0b24uc3ViTGF5ZXJzWzBdLmNvbG9yLmxpZ2h0ZW4oMzApXG5cdFx0XHRcdGJ1dHRvbi5zdWJMYXllcnNbMF0uYW5pbWF0ZVxuXHRcdFx0XHRcdHByb3BlcnRpZXM6KGNvbG9yOm5ld0NvbG9yKVxuXHRcdFx0XHRcdHRpbWU6LjVcblx0XHRcdGJ1dHRvbi5vbiBFdmVudHMuVG91Y2hFbmQsIC0+XG5cdFx0XHRcdGJ1dHRvbi5zdWJMYXllcnNbMF0uYW5pbWF0ZVxuXHRcdFx0XHRcdHByb3BlcnRpZXM6KGNvbG9yOnNldHVwLmNvbG9yKVxuXHRcdFx0XHRcdHRpbWU6LjVcblxuXHRidXR0b24ubGFiZWwgPSBuZXcgaW9zLlRleHRcblx0XHRuYW1lOlwiLmxhYmVsXCJcblx0XHR0ZXh0OnNldHVwLnRleHRcblx0XHRjb2xvcjpjb2xvclxuXHRcdGxpbmVIZWlnaHQ6MTZcblx0XHRzdXBlckxheWVyOmJ1dHRvblxuXHRcdGZvbnRTaXplOnNldHVwLmZvbnRTaXplXG5cdFx0Zm9udFdlaWdodDpzZXR1cC5mb250V2VpZ2h0XG5cdFx0Y29uc3RyYWludHM6XG5cdFx0XHRhbGlnbjpcImNlbnRlclwiXG5cblx0c3dpdGNoIHNldHVwLnR5cGVcblx0XHR3aGVuIFwic21hbGxcIlxuXHRcdFx0YnV0dG9uLnByb3BzID0gKHdpZHRoOmJ1dHRvbi5sYWJlbC53aWR0aCArIGlvcy51dGlscy5weCgyMCksIGhlaWdodDogYnV0dG9uLmxhYmVsLmhlaWdodCArIGlvcy51dGlscy5weCgxMCkpXG5cblx0XHRcdGJ1dHRvbi5vbiBFdmVudHMuVG91Y2hTdGFydCwgLT5cblx0XHRcdFx0YnV0dG9uLmFuaW1hdGVcblx0XHRcdFx0XHRwcm9wZXJ0aWVzOihiYWNrZ3JvdW5kQ29sb3I6Y29sb3IpXG5cdFx0XHRcdFx0dGltZTouNVxuXHRcdFx0XHRidXR0b24ubGFiZWwuYW5pbWF0ZVxuXHRcdFx0XHRcdHByb3BlcnRpZXM6KGNvbG9yOlwiI0ZGRlwiKVxuXHRcdFx0XHRcdHRpbWU6LjVcblx0XHRcdGJ1dHRvbi5vbiBFdmVudHMuVG91Y2hFbmQsIC0+XG5cdFx0XHRcdGJ1dHRvbi5hbmltYXRlXG5cdFx0XHRcdFx0cHJvcGVydGllczooYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIilcblx0XHRcdFx0XHR0aW1lOi41XG5cdFx0XHRcdGJ1dHRvbi5sYWJlbC5hbmltYXRlXG5cdFx0XHRcdFx0cHJvcGVydGllczooY29sb3I6Y29sb3IpXG5cdFx0XHRcdFx0dGltZTouNVxuXHRcdGVsc2Vcblx0XHRcdGJ1dHRvbi5wcm9wcyA9ICh3aWR0aDpidXR0b24ubGFiZWwud2lkdGgsIGhlaWdodDpidXR0b24ubGFiZWwuaGVpZ2h0KVxuXG5cblx0aW9zLmxheW91dC5zZXRcblx0XHR0YXJnZXQ6YnV0dG9uXG5cblx0aW9zLmxheW91dC5zZXRcblx0XHR0YXJnZXQ6YnV0dG9uLmxhYmVsXG5cdHJldHVybiBidXR0b25cbiIsImlvcyA9IHJlcXVpcmUgJ2lvcy1raXQnXG5cbmdlbkNTUyA9IChjc3NBcnJheSkgLT5cbiAgY3NzT2JqID0ge31cbiAgZm9yIHByb3AsaSBpbiBjc3NBcnJheVxuICAgIGNvbG9uSW5kZXggPSBwcm9wLmluZGV4T2YoXCI6XCIpXG4gICAga2V5ID0gcHJvcC5zbGljZSgwLCBjb2xvbkluZGV4KVxuICAgIHZhbHVlID0gcHJvcC5zbGljZShjb2xvbkluZGV4ICsgMiwgcHJvcC5sZW5ndGggLSAxKVxuICAgIGNzc09ialtrZXldID0gdmFsdWVcbiAgcmV0dXJuIGNzc09ialxuXG5leHBvcnRzLmNvbnZlcnQgPSAob2JqKSAtPlxuXG4gIGdldERlc2lnbmVkRGV2aWNlID0gKHcpIC0+XG4gICAgZGV2aWNlID0ge31cbiAgICBzd2l0Y2ggd1xuICAgICAgd2hlbiAzMjAsIDQ4MCwgNjQwLCA5NjAsIDEyODBcbiAgICAgICAgZGV2aWNlLnNjYWxlID0gMlxuICAgICAgICBkZXZpY2UuaGVpZ2h0ID0gNTY4XG4gICAgICAgIGRldmljZS53aWR0aCA9IDMyMFxuICAgICAgICBkZXZpY2UubmFtZSA9ICdpcGhvbmUtNSdcbiAgICAgIHdoZW4gMzc1LCA1NjIuNSwgNzUwLCAxMTI1LCAxNTAwXG4gICAgICAgIGRldmljZS5zY2FsZSA9IDJcbiAgICAgICAgZGV2aWNlLmhlaWdodCA9IDY2N1xuICAgICAgICBkZXZpY2Uud2lkdGggPSAzNzVcbiAgICAgICAgZGV2aWNlLm5hbWUgPSAnaXBob25lLTZzJ1xuICAgICAgd2hlbiA0MTQsIDYyMSwgODI4LCAxMjQyLCAxNjU2XG4gICAgICAgIGRldmljZS5zY2FsZSA9IDNcbiAgICAgICAgZGV2aWNlLmhlaWdodCA9IDczNlxuICAgICAgICBkZXZpY2Uud2lkdGggPSA0MTRcbiAgICAgICAgZGV2aWNlLm5hbWUgPSAnaXBob25lLTZzLXBsdXMnXG4gICAgICB3aGVuIDc2OCwgMTE1MiwgMTUzNiwgMjMwNCwgMzA3MlxuICAgICAgICBkZXZpY2Uuc2NhbGUgPSAyXG4gICAgICAgIGRldmljZS5oZWlnaHQgPSAxMDI0XG4gICAgICAgIGRldmljZS53aWR0aCA9IDc2OFxuICAgICAgICBkZXZpY2UubmFtZSA9ICdpcGFkJ1xuICAgICAgd2hlbiAxMDI0LCAxNTM2LCAyMDQ4LCAzMDcyLCA0MDk2XG4gICAgICAgIGRldmljZS5zY2FsZSA9IDJcbiAgICAgICAgZGV2aWNlLmhlaWdodCA9IDEzNjZcbiAgICAgICAgZGV2aWNlLndpZHRoID0gMTAyNFxuICAgICAgICBkZXZpY2UubmFtZSA9ICdpcGFkLXBybydcbiAgICBzd2l0Y2ggd1xuICAgICAgd2hlbiAzMjAsIDM3NSwgNDE0LCA3NjgsIDEwMjRcbiAgICAgICAgZGV2aWNlLmlTY2FsZSA9IDFcbiAgICAgIHdoZW4gNDgwLCA1NjIuNSwgNjIxLCAxMTUyLCAxNTM2XG4gICAgICAgIGRldmljZS5pU2NhbGUgPSAxLjVcbiAgICAgIHdoZW4gNjQwLCA3NTAsIDgyOCwgMTUzNiwgMjA0OFxuICAgICAgICBkZXZpY2UuaVNjYWxlID0gMlxuICAgICAgd2hlbiA5NjAsIDExMjUsIDEyNDIsIDIzMDQsIDMwNzJcbiAgICAgICAgZGV2aWNlLmlTY2FsZSA9IDNcbiAgICAgIHdoZW4gMTI4MCwgMTUwMCwgMTY1NiwgMzA3MiwgNDA5NlxuICAgICAgICBkZXZpY2UuaVNjYWxlID0gNFxuICAgIGRldmljZS5vYmogPSAnZGV2aWNlJ1xuICAgIHJldHVybiBkZXZpY2VcblxuICAjIEdyYWIga2V5c1xuICBsYXllcktleXMgPSBPYmplY3Qua2V5cyhvYmopXG5cbiAgIyBBZGQgbGF5ZXJzIGluIG9iaiB0byBhcnJheSB1c2luZyBrZXlzXG4gIGxheWVycyA9IFtdXG4gIGFydGJvYXJkcyA9IFtdXG4gIG5ld0xheWVycyA9IHt9XG4gIG5ld0FydGJvYXJkcyA9IFtdXG5cbiAgZm9yIGtleSBpbiBsYXllcktleXNcbiAgICBpZiBvYmpba2V5XS5faW5mby5raW5kID09ICdhcnRib2FyZCdcbiAgICAgIGFydGJvYXJkcy5wdXNoIG9ialtrZXldXG5cbiAgZm9yIGIgaW4gYXJ0Ym9hcmRzXG5cbiAgICBkZXZpY2UgPSBnZXREZXNpZ25lZERldmljZShiLndpZHRoKVxuXG4gICAgQXJ0Ym9hcmQgPSAoYXJ0Ym9hcmQpIC0+XG4gICAgICBib2FyZCA9IG5ldyBpb3MuVmlld1xuICAgICAgICBuYW1lOmFydGJvYXJkLm5hbWVcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOmIuYmFja2dyb3VuZENvbG9yXG4gICAgICAgIGNvbnN0cmFpbnRzOiB7dG9wOjAsIGJvdHRvbTowLCBsZWFkaW5nOjAsIHRyYWlsaW5nOjB9XG4gICAgICByZXR1cm4gYm9hcmRcblxuICAgICNHZXQgU3RhdGVtZW50c1xuICAgIGdldFN0cmluZyA9IChsKSAtPiByZXR1cm4gbC5faW5mby5tZXRhZGF0YS5zdHJpbmdcbiAgICBnZXRDU1MgPSAobCkgLT4gcmV0dXJuIGdlbkNTUyhsLl9pbmZvLm1ldGFkYXRhLmNzcylcbiAgICBnZXRDb2xvclN0cmluZyA9IChsKSAtPiByZXR1cm4gJy0nICsgZ2V0Q1NTKGwpLmNvbG9yICsgJyAnICsgZ2V0U3RyaW5nKGwpXG4gICAgZ2V0SW1hZ2UgPSAobCkgLT4gcmV0dXJuIGwuaW1hZ2VcbiAgICBnZXRMYXllciA9IChsKSAtPiByZXR1cm4gbC5jb3B5KClcblxuXG4gICAgZm91bmQgPSAobyx0KSAtPiBpZiBvLmluZGV4T2YodCkgIT0gLTEgdGhlbiByZXR1cm4gdHJ1ZVxuXG4gICAgZ2VuQ29uc3RyYWludHMgPSAobCkgLT5cbiAgICAgIGNvbnN0cmFpbnRzID0ge31cbiAgICAgIHMgPSBkZXZpY2UuaVNjYWxlXG4gICAgICBjWCA9IGRldmljZS53aWR0aC8yXG4gICAgICBjWSA9IGRldmljZS5oZWlnaHQvMlxuICAgICAgdFkgPSBkZXZpY2UuaGVpZ2h0LzQgKiAzXG4gICAgICBiWSA9IGRldmljZS5oZWlnaHQvNCAqIDNcbiAgICAgIGxYID0gZGV2aWNlLndpZHRoLzQgKiAzXG4gICAgICB0WCA9IGRldmljZS53aWR0aC80ICogM1xuXG4gICAgICByID0gKG4pIC0+IHJldHVybiBNYXRoLnJvdW5kKG4pXG4gICAgICBmID0gKG4pIC0+IHJldHVybiBNYXRoLmZsb29yKG4pXG5cbiAgICAgIGlmIGNYID09IGwubWlkWC9zIHx8IHIoY1gpID09IHIobC5taWRYL3MpICB8fCBmKGNYKSA9PSBmKGwubWlkWC9zKVxuICAgICAgICBjb25zdHJhaW50cy5hbGlnbiA9ICdob3Jpem9udGFsJ1xuXG4gICAgICBpZiBjWSA9PSBsLm1pZFkvcyB8fCByKGNZKSA9PSByKGwubWlkWS9zKSB8fCBmKGNZKSA9PSBmKGwubWlkWS9zKVxuICAgICAgICBpZiBjb25zdHJhaW50cy5hbGlnbiA9PSAnaG9yaXpvbnRhbCdcbiAgICAgICAgICBjb25zdHJhaW50cy5hbGlnbiA9ICdjZW50ZXInXG4gICAgICAgIGVsc2VcbiAgICAgICAgICBjb25zdHJhaW50cy5hbGlnbiA9ICd2ZXJ0aWNhbCdcblxuICAgICAgaWYgbC54L3MgPCBsWFxuICAgICAgICBjb25zdHJhaW50cy5sZWFkaW5nID0gcihsLngvcylcbiAgICAgIGlmIGwueC9zID4gdFhcbiAgICAgICAgY29uc3RyYWludHMudHJhaWxpbmcgPSByKGwucGFyZW50LndpZHRoL3MgLSBsLm1heFgvcylcblxuICAgICAgaWYgbC55L3MgPCB0WVxuICAgICAgICBjb25zdHJhaW50cy50b3AgPSByKGwueS9zKVxuICAgICAgaWYgbC55L3MgPiBiWVxuICAgICAgICBjb25zdHJhaW50cy5ib3R0b20gPSByKGwucGFyZW50LmhlaWdodC9zIC0gbC5tYXhZL3MpXG5cbiAgICAgIGlmIGwud2lkdGgvcyA9PSBkZXZpY2Uud2lkdGhcbiAgICAgICAgY29uc3RyYWludHMubGVhZGluZyA9IDBcbiAgICAgICAgY29uc3RyYWludHMudHJhaWxpbmcgPSAwXG4gICAgICBlbHNlXG4gICAgICAgIGNvbnN0cmFpbnRzLndpZHRoID0gbC53aWR0aC9zXG5cbiAgICAgIGlmIGwuaGVpZ2h0L3MgPT0gZGV2aWNlLmhlaWdodFxuICAgICAgICBjb25zdHJhaW50cy50b3AgPSAwXG4gICAgICAgIGNvbnN0cmFpbnRzLmJvdHRvbSA9IDBcbiAgICAgIGVsc2VcbiAgICAgICAgY29uc3RyYWludHMuaGVpZ2h0ID0gbC5oZWlnaHQvc1xuXG4gICAgICByZXR1cm4gY29uc3RyYWludHNcblxuICAgIGdlbkxheWVyID0gKGwsIHBhcmVudCkgLT5cbiAgICAgIHByb3BzID1cbiAgICAgICAgYmFja2dyb3VuZENvbG9yOid0cmFuc3BhcmVudCdcbiAgICAgICAgbmFtZTpsLm5hbWVcbiAgICAgICAgaW1hZ2U6bC5pbWFnZVxuICAgICAgICBzdXBlckxheWVyOiBwYXJlbnRcbiAgICAgICAgY29uc3RyYWludHM6IGdlbkNvbnN0cmFpbnRzKGwpXG5cbiAgICAgIHJldHVybiBuZXcgaW9zLlZpZXcgcHJvcHNcblxuICAgIGdlbkFsZXJ0ID0gKGwsIG5QKSAtPlxuICAgICAgcHJvcHMgPVxuICAgICAgICBhY3Rpb25zOltdXG4gICAgICAgIHN1cGVyTGF5ZXI6blBcbiAgICAgIGZvciBjIGluIGwuY2hpbGRyZW5cbiAgICAgICAgbiA9IGMubmFtZVxuICAgICAgICBpZiBmb3VuZChuLCAndGl0bGUnKSB0aGVuIHByb3BzLnRpdGxlID0gZ2V0U3RyaW5nKGMpXG4gICAgICAgIGlmIGZvdW5kKG4sICdtZXNzYWdlJykgdGhlbiBwcm9wcy5tZXNzYWdlID0gZ2V0U3RyaW5nKGMpXG4gICAgICAgIGlmIGZvdW5kKG4sICdhY3Rpb24nKSB0aGVuIHByb3BzLmFjdGlvbnMudW5zaGlmdCBnZXRDb2xvclN0cmluZyhjKVxuICAgICAgICBjLmRlc3Ryb3koKVxuICAgICAgcmV0dXJuIG5ldyBpb3MuQWxlcnQgcHJvcHNcblxuICAgIGdlbkJhbm5lciA9IChsLCBuUCkgLT5cbiAgICAgIHByb3BzID0ge3N1cGVyTGF5ZXI6blB9XG4gICAgICBmb3IgYyBpbiBsLmNoaWxkcmVuXG4gICAgICAgIG4gPSBjLm5hbWVcbiAgICAgICAgaWYgZm91bmQobiwgJ2FwcCcpIHRoZW4gcHJvcHMuYXBwID0gZ2V0U3RyaW5nKGMpXG4gICAgICAgIGlmIGZvdW5kKG4sICd0aXRsZScpIHRoZW4gcHJvcHMudGl0bGUgPSBnZXRTdHJpbmcoYylcbiAgICAgICAgaWYgZm91bmQobiwgJ21lc3NhZ2UnKSB0aGVuIHByb3BzLm1lc3NhZ2UgPSBnZXRTdHJpbmcoYylcbiAgICAgICAgaWYgZm91bmQobiwgJ3RpbWUnKSB0aGVuIHByb3BzLnRpbWUgPSBnZXRTdHJpbmcoYylcbiAgICAgICAgaWYgZm91bmQobiwgJ2ljb24nKSB0aGVuIHByb3BzLmljb24gPSBnZXRMYXllcihjKVxuICAgICAgICBjLmRlc3Ryb3koKVxuICAgICAgcmV0dXJuIG5ldyBpb3MuQmFubmVyIHByb3BzXG5cbiAgICBnZW5CdXR0b24gPSAobCwgblApIC0+XG4gICAgICBwcm9wcyA9XG4gICAgICAgIHN1cGVyTGF5ZXI6blBcbiAgICAgICAgY29uc3RyYWludHM6Z2VuQ29uc3RyYWludHMobClcblxuICAgICAgZm9yIGMgaW4gbC5jaGlsZHJlblxuICAgICAgICBuID0gYy5uYW1lXG4gICAgICAgIGlmIGZvdW5kKG4sICdzbWFsbCcpIHRoZW4gcHJvcHMudHlwZSA9ICdzbWFsbCdcbiAgICAgICAgaWYgZm91bmQobiwgJ2JpZycpIHRoZW4gcHJvcHMudHlwZSA9ICdiaWcnXG4gICAgICAgIGlmIGZvdW5kKG4sICdkYXJrJykgdGhlbiBwcm9wcy5zdHlsZSA9ICdkYXJrJ1xuICAgICAgICBpZiBmb3VuZChuLCAnbGFiZWwnKVxuICAgICAgICAgIHByb3BzLnRleHQgPSBnZXRTdHJpbmcoYylcbiAgICAgICAgICBwcm9wcy5jb2xvciA9IGdldENTUyhjKS5jb2xvclxuICAgICAgICAgIHByb3BzLmZvbnRTaXplID0gZ2V0Q1NTKGMpWydmb250LXNpemUnXS5yZXBsYWNlKCdweCcsICcnKVxuICAgICAgICBjLmRlc3Ryb3koKVxuICAgICAgcmV0dXJuIG5ldyBpb3MuQnV0dG9uIHByb3BzXG5cbiAgICBnZW5GaWVsZCA9IChsLCBuUCkgLT5cbiAgICAgIHByb3BzID1cbiAgICAgICAgc3VwZXJMYXllcjpuUFxuICAgICAgICBjb25zdHJhaW50czpnZW5Db25zdHJhaW50cyhsKVxuICAgICAgZm9yIGMgaW4gbC5jaGlsZHJlblxuICAgICAgICBuID0gYy5uYW1lXG5cbiAgICAgICAgaWYgZm91bmQobiwgJ3BsYWNlaG9sZGVyJylcbiAgICAgICAgICBwcm9wcy5wbGFjZWhvbGRlciA9IGdldFN0cmluZyhjKVxuICAgICAgICBjLmRlc3Ryb3koKVxuICAgICAgcmV0dXJuIG5ldyBpb3MuRmllbGQgcHJvcHNcblxuICAgIGdlbktleWJvYXJkID0gKGwsIG5QKSAtPlxuICAgICAgcHJvcHMgPVxuICAgICAgICBzdXBlckxheWVyOm5QXG5cbiAgICAgIGZvciBjIGluIGwuY2hpbGRyZW5cbiAgICAgICAgbiA9IGMubmFtZVxuXG4gICAgICAgIGlmIGZvdW5kKG4sICdyZXR1cm4nKSB0aGVuIHByb3BzLnJldHVyblRleHQgPSBnZXRTdHJpbmcoYylcbiAgICAgICAgaWYgZm91bmQobiwgJ2RhcmsnKSB0aGVuIHByb3BzLnN0eWxlID0gJ2RhcmsnXG4gICAgICAgIGMuZGVzdHJveSgpXG4gICAgICByZXR1cm4gbmV3IGlvcy5LZXlib2FyZCBwcm9wc1xuXG4gICAgZ2VuTmF2QmFyID0gKGwsIG5QKSAtPlxuICAgICAgcHJvcHMgPVxuICAgICAgICBzdXBlckxheWVyOm5QXG4gICAgICBmb3IgYyBpbiBsLmNoaWxkcmVuXG4gICAgICAgIG4gPSBjLm5hbWVcbiAgICAgICAgaWYgZm91bmQobiwgJ3RpdGxlJykgdGhlbiBwcm9wcy50aXRsZSA9IGdldFN0cmluZyhjKVxuICAgICAgICBpZiBmb3VuZChuLCAncmlnaHQnKSB0aGVuIHByb3BzLnJpZ2h0ID0gZ2V0U3RyaW5nKGMpXG4gICAgICAgIGlmIGZvdW5kKG4sICdsZWZ0JykgdGhlbiBwcm9wcy5sZWZ0ID0gZ2V0U3RyaW5nKGMpXG4gICAgICAgIGMuZGVzdHJveSgpXG4gICAgICByZXR1cm4gbmV3IGlvcy5OYXZCYXIgcHJvcHNcblxuICAgIGdlblNoZWV0ID0gKGwsIG5QKSAtPlxuICAgICAgcHJvcHMgPVxuICAgICAgICBhY3Rpb25zOltdXG4gICAgICAgIHN1cGVyTGF5ZXI6IG5QXG5cbiAgICAgIGZvciBjLCBpIGluIGwuY2hpbGRyZW5cbiAgICAgICAgbiA9IGMubmFtZVxuICAgICAgICBpZiBmb3VuZChuLCAnYWN0aW9uJykgdGhlbiBwcm9wcy5hY3Rpb25zLnB1c2ggZ2V0Q29sb3JTdHJpbmcoYylcbiAgICAgICAgaWYgZm91bmQobiwgJ2V4aXQnKSB0aGVuIHByb3BzLmV4aXQgPSBnZXRTdHJpbmcoYylcbiAgICAgICAgYy5kZXN0cm95KClcblxuICAgICAgcmV0dXJuIG5ldyBpb3MuU2hlZXQgcHJvcHNcblxuICAgIGdlblN0YXR1c0JhciA9IChsLCBuUCkgLT5cbiAgICAgIHByb3BzID1cbiAgICAgICAgc3VwZXJMYXllcjogblBcblxuICAgICAgZm9yIGMgaW4gbC5jaGlsZHJlblxuICAgICAgICBuID0gYy5uYW1lXG4gICAgICAgIGlmIGZvdW5kKG4sICdjYXJyaWVyJykgdGhlbiBwcm9wcy5jYXJyaWVyID0gZ2V0U3RyaW5nKGMpXG4gICAgICAgIGlmIGZvdW5kKG4sICdiYXR0ZXJ5JykgdGhlbiBwcm9wcy5iYXR0ZXJ5ID0gZ2V0U3RyaW5nKGMpLnJlcGxhY2UoJyUnLCAnJylcbiAgICAgICAgaWYgZm91bmQobiwgJ25ldHdvcmsnKSB0aGVuIHByb3BzLm5ldHdvcmsgPSBnZXRTdHJpbmcoYylcbiAgICAgICAgaWYgZm91bmQobiwgJ2RhcmsnKSB0aGVuIHByb3BzLnN0eWxlID0gJ2xpZ2h0J1xuICAgICAgICBjLmRlc3Ryb3koKVxuICAgICAgcmV0dXJuIG5ldyBpb3MuU3RhdHVzQmFyIHByb3BzXG5cbiAgICBnZW5UYWJCYXIgPSAobCwgblApIC0+XG4gICAgICBwcm9wcyA9XG4gICAgICAgIHRhYnM6IFtdXG4gICAgICAgIHN1cGVyTGF5ZXI6blBcblxuICAgICAgZm9yIGMgaW4gbC5jaGlsZHJlblxuICAgICAgICBuID0gYy5uYW1lXG4gICAgICAgIHRwcm9wcyA9IHt9XG4gICAgICAgIGZvciB0IGluIGMuY2hpbGRyZW5cbiAgICAgICAgICB0biA9IHQubmFtZVxuXG4gICAgICAgICAgaWYgbiA9PSAndGFiX2FjdGl2ZScgJiYgdG4uaW5kZXhPZignbGFiZWwnKSAhPSAtMVxuICAgICAgICAgICAgcHJvcHMuYWN0aXZlQ29sb3IgPSBnZXRDU1ModCkuY29sb3JcbiAgICAgICAgICBpZiBuICE9ICd0YWJfYWN0aXZlJyAmJiB0bi5pbmRleE9mKCdsYWJlbCcpICE9IC0xXG4gICAgICAgICAgICBwcm9wcy5pbmFjdGl2ZUNvbG9yID0gZ2V0Q1NTKHQpLmNvbG9yXG5cbiAgICAgICAgICBpZiBmb3VuZCh0biwgJ2FjdGl2ZScpICYmIHRuLmluZGV4T2YoJ2luYWN0aXZlJykgPT0gLTEgdGhlbiB0cHJvcHMuYWN0aXZlID0gZ2V0TGF5ZXIodClcbiAgICAgICAgICBpZiBmb3VuZCh0biwgJ2luYWN0aXZlJykgdGhlbiB0cHJvcHMuaW5hY3RpdmUgPSBnZXRMYXllcih0KVxuICAgICAgICAgIGlmIGZvdW5kKHRuLCAnbGFiZWwnKSB0aGVuIHRwcm9wcy5sYWJlbCA9IGdldFN0cmluZyh0KVxuXG4gICAgICAgICAgdC5kZXN0cm95KClcbiAgICAgICAgcHJvcHMudGFicy51bnNoaWZ0IG5ldyBpb3MuVGFiIHRwcm9wc1xuXG5cbiAgICAgICAgYy5kZXN0cm95KClcblxuICAgICAgcmV0dXJuIG5ldyBpb3MuVGFiQmFyIHByb3BzXG5cbiAgICBnZW5UZXh0ID0gKGwsIG5QKSAtPlxuICAgICAgcHJvcHMgPVxuICAgICAgICBzdXBlckxheWVyOm5QXG4gICAgICAgIHRleHQ6Z2V0U3RyaW5nKGwpXG4gICAgICAgIGNvbnN0cmFpbnRzOmdlbkNvbnN0cmFpbnRzKGwpXG4gICAgICBjc3MgPSBnZXRDU1MobClcbiAgICAgIGtleXMgPSBPYmplY3Qua2V5cyhnZXRDU1MobCkpXG4gICAgICBmb3IgayBpbiBrZXlzXG4gICAgICAgIGlmIGZvdW5kKGssICdmb250LWZhbWlseScpIHRoZW4gcHJvcHMuZm9udEZhbWlseSA9IGNzc1trXVxuICAgICAgICBpZiBmb3VuZChrLCAnb3BhY2l0eScpIHRoZW4gcHJvcHMub3BhY2l0eSA9IE51bWJlcihjc3Nba10pXG4gICAgICAgIGlmIGZvdW5kKGssICdjb2xvcicpIHRoZW4gcHJvcHMuY29sb3IgPSBjc3Nba11cbiAgICAgICAgaWYgZm91bmQoaywgJ2ZvbnQtc2l6ZScpIHRoZW4gcHJvcHMuZm9udFNpemUgPSBjc3Nba10ucmVwbGFjZSgncHgnLCAnJylcbiAgICAgICAgaWYgZm91bmQoaywgJ2xldHRlci1zcGFjaW5nJykgdGhlbiBwcm9wcy5sZXR0ZXJTcGFjaW5nID0gY3NzW2tdXG4gICAgICAgIGlmIGZvdW5kKGssICdsaW5lLWhlaWdodCcpIHRoZW4gcHJvcHMubGluZUhlaWdodCA9IGNzc1trXS5yZXBsYWNlKCdweCcsICcnKVxuICAgICAgcmV0dXJuIG5ldyBpb3MuVGV4dCBwcm9wc1xuXG4gICAgY2hpbGRyZW4gPSAocCwgblApIC0+XG5cbiAgICAgIGZvciBjIGluIHAuY2hpbGRyZW5cbiAgICAgICAgbiA9IGMubmFtZVxuICAgICAgICBuZXdMYXllciA9IDBcbiAgICAgICAgaWYgYy5uYW1lWzBdID09ICdfJ1xuICAgICAgICAgIGlmIGZvdW5kKG4sICdfQWxlcnQnKSB0aGVuICBuZXdMYXllciA9IGdlbkFsZXJ0KGMsIG5QKVxuICAgICAgICAgIGlmIGZvdW5kKG4sJ19CYW5uZXInKSB0aGVuIG5ld0xheWVyID0gZ2VuQmFubmVyKGMsIG5QKVxuICAgICAgICAgIGlmIGZvdW5kKG4sICdfQnV0dG9uJykgdGhlbiBuZXdMYXllciA9IGdlbkJ1dHRvbihjLCBuUClcbiAgICAgICAgICBpZiBmb3VuZChuLCAnX0ZpZWxkJykgdGhlbiBuZXdMYXllciA9IGdlbkZpZWxkKGMsIG5QKVxuICAgICAgICAgIGlmIGZvdW5kKG4sICdfS2V5Ym9hcmQnKSB0aGVuIG5ld0xheWVyID0gZ2VuS2V5Ym9hcmQoYywgblApXG4gICAgICAgICAgaWYgZm91bmQobiwnX05hdkJhcicpIHRoZW4gbmV3TGF5ZXIgPSBnZW5OYXZCYXIoYywgblApXG4gICAgICAgICAgaWYgZm91bmQobiwgJ19TaGVldCcpIHRoZW4gbmV3TGF5ZXIgPSBnZW5TaGVldChjLCBuUClcbiAgICAgICAgICBpZiBmb3VuZChuLCAnX1RhYkJhcicpIHRoZW4gbmV3TGF5ZXIgPSBnZW5UYWJCYXIoYywgblApXG4gICAgICAgICAgaWYgZm91bmQobiwgJ19TdGF0dXNCYXInKSB0aGVuIG5ld0xheWVyID0gbmV3IGdlblN0YXR1c0JhcihjLCBuUClcbiAgICAgICAgICBpZiBmb3VuZChuLCAnX1RleHQnKSB0aGVuIG5ld0xheWVyID0gZ2VuVGV4dChjLCBuUClcbiAgICAgICAgICBpZiBuZXdMYXllciA9PSB1bmRlZmluZWQgdGhlbiBuZXdMYXllciA9IGdlbkxheWVyKGMsIG5QKVxuICAgICAgICBlbHNlXG4gICAgICAgICAgbmV3TGF5ZXIgPSBnZW5MYXllcihjLCBuUClcblxuICAgICAgICBuZXdMYXllcnNbbl0gPSBuZXdMYXllclxuXG4gICAgICAgIGlmIGMuY2hpbGRyZW5cbiAgICAgICAgICBjaGlsZHJlbihjLCBuZXdMYXllcilcblxuICAgICAgICBjLmRlc3Ryb3koKVxuXG4gICAgaW9zLmxbYi5uYW1lXSA9IG5ldyBBcnRib2FyZCBiXG5cbiAgICBjaGlsZHJlbihiLCBpb3MubFtiLm5hbWVdKVxuXG4gICAgYi5kZXN0cm95KClcblxuICAgIG5ld0FydGJvYXJkcy5wdXNoIGlvcy5sW2IubmFtZV1cbiAgICBuZXdMYXllcnNbYi5uYW1lXSA9IGlvcy5sW2IubmFtZV1cblxuICByZXR1cm4gbmV3TGF5ZXJzXG4iLCJpb3MgPSByZXF1aXJlICdpb3Mta2l0J1xuXG5leHBvcnRzLmRlZmF1bHRzID1cblx0bmFtZTonZmllbGQnXG5cdGFjdGl2ZTpmYWxzZVxuXHRrZXlib2FyZDp0cnVlXG5cdHBsYWNlaG9sZGVyOlwiRW50ZXIgdGV4dFwiXG5cdHBsYWNlaG9sZGVyQ29sb3I6XCIjOTk5XCJcblx0c3VwZXJMYXllcjp1bmRlZmluZWRcblx0YmFja2dyb3VuZENvbG9yOlwid2hpdGVcIlxuXHRib3JkZXJDb2xvcjpcIiNDQ0NDQ0NcIlxuXHRib3JkZXJSYWRpdXM6aW9zLnB4KDUpXG5cdGJvcmRlcldpZHRoOmlvcy5weCgxKVxuXHRoZWlnaHQ6aW9zLnB4KDMwKVxuXHR3aWR0aDppb3MucHgoOTcpXG5cdGZvbnRTaXplOjE3XG5cdGNvbG9yOidibGFjaydcblx0dGV4dENvbnN0cmFpbnRzOlxuXHRcdGxlYWRpbmc6NFxuXHRcdGFsaWduOlwidmVydGljYWxcIlxuXHRjb25zdHJhaW50czpcblx0XHRoZWlnaHQ6MzBcblx0XHR3aWR0aDo5N1xuXHRcdGFsaWduOlwiY2VudGVyXCJcblxuXG5leHBvcnRzLmRlZmF1bHRzLnByb3BzID0gT2JqZWN0LmtleXMoZXhwb3J0cy5kZWZhdWx0cylcblxuZXhwb3J0cy5jcmVhdGUgPSAoYXJyYXkpIC0+XG5cdHNldHVwID0gaW9zLnV0aWxzLnNldHVwQ29tcG9uZW50KGFycmF5LCBleHBvcnRzLmRlZmF1bHRzKVxuXG5cdGZpZWxkID0gbmV3IGlvcy5WaWV3XG5cdFx0bmFtZTpzZXR1cC5uYW1lXG5cdFx0Y29uc3RyYWludHM6c2V0dXAuY29uc3RyYWludHNcblx0XHRiYWNrZ3JvdW5kQ29sb3I6c2V0dXAuYmFja2dyb3VuZENvbG9yXG5cdFx0Ym9yZGVyQ29sb3I6c2V0dXAuYm9yZGVyQ29sb3Jcblx0XHRib3JkZXJSYWRpdXM6c2V0dXAuYm9yZGVyUmFkaXVzXG5cdFx0Ym9yZGVyV2lkdGg6c2V0dXAuYm9yZGVyV2lkdGhcblx0XHRoZWlnaHQ6c2V0dXAuaGVpZ2h0XG5cdFx0d2lkdGg6c2V0dXAud2lkdGhcblx0XHRjbGlwOnRydWVcblx0XHRzdXBlckxheWVyOnNldHVwLnN1cGVyTGF5ZXJcblxuXHRmaWVsZC50ZXh0ID0gbmV3IGlvcy5UZXh0XG5cdFx0c3VwZXJMYXllcjpmaWVsZFxuXHRcdG5hbWU6XCIudGV4dFwiXG5cdFx0Y29uc3RyYWludHM6c2V0dXAudGV4dENvbnN0cmFpbnRzXG5cdFx0dGV4dDonJ1xuXHRcdGZvbnRTaXplOjE3XG5cdFx0Y29sb3I6c2V0dXAuY29sb3JcblxuXHRmaWVsZC50ZXh0LnBsYWNlaG9sZGVyID0gbmV3IGlvcy5UZXh0XG5cdFx0c3VwZXJMYXllcjpmaWVsZFxuXHRcdG5hbWU6XCIucGxhY2Vob2xkZXJcIlxuXHRcdGNvbnN0cmFpbnRzOnNldHVwLnRleHRDb25zdHJhaW50c1xuXHRcdHRleHQ6c2V0dXAucGxhY2Vob2xkZXJcblx0XHRmb250U2l6ZToxN1xuXHRcdGNvbG9yOnNldHVwLnBsYWNlaG9sZGVyQ29sb3JcblxuXHRmaWVsZC5hY3RpdmUgPSBzZXR1cC5hY3RpdmVcblx0ZmllbGQudHlwZSA9ICdmaWVsZCdcblxuXHRmaWVsZC5vbiBFdmVudHMuVG91Y2hFbmQsIC0+XG5cblx0XHRpZiBmaWVsZC5hY3RpdmUgIT0gdHJ1ZVxuXHRcdFx0ZmllbGQuYWN0aXZlID0gdHJ1ZVxuXG5cdFx0XHRpZiBzZXR1cC5rZXlib2FyZCA9PSB0cnVlICYmIGZpZWxkLmtleWJvYXJkID09IHVuZGVmaW5lZFxuXHRcdFx0XHRmaWVsZC5rZXlib2FyZCA9IG5ldyBpb3MuS2V5Ym9hcmRcblx0XHRcdFx0XHRvdXRwdXQ6ZmllbGQudGV4dFxuXHRcdFx0XHRcdGhpZGRlbjp0cnVlXG5cblx0XHRcdGlmIHR5cGVvZiBzZXR1cC5rZXlib2FyZCA9PSAnb2JqZWN0J1xuXHRcdFx0XHRmaWVsZC5pbnB1dChzZXR1cC5rZXlib2FyZClcblx0XHRcdFx0ZmllbGQua2V5Ym9hcmQgPSBzZXR1cC5rZXlib2FyZFxuXG5cdFx0XHRmaWVsZC5rZXlib2FyZC5jYWxsKClcblx0XHRcdGZpZWxkLnRleHQuY3Vyc29yID0gbmV3IGlvcy5WaWV3XG5cdFx0XHRcdHN1cGVyTGF5ZXI6ZmllbGRcblx0XHRcdFx0bmFtZTpcImN1cnNvclwiXG5cdFx0XHRcdGJhY2tncm91bmRDb2xvcjppb3MuY29sb3IoXCJibHVlXCIpXG5cdFx0XHRcdGNvbnN0cmFpbnRzOlxuXHRcdFx0XHRcdHdpZHRoOjJcblx0XHRcdFx0XHRoZWlnaHQ6c2V0dXAuZm9udFNpemUgKyA2XG5cdFx0XHRcdFx0bGVhZGluZzo0XG5cdFx0XHRcdFx0YWxpZ246XCJ2ZXJ0aWNhbFwiXG5cblx0XHRcdGlmIGZpZWxkLnRleHQuaHRtbCAhPSBzZXR1cC5wbGFjZWhvbGRlclxuXHRcdFx0XHRmaWVsZC50ZXh0LmN1cnNvci5jb25zdHJhaW50cy5sZWFkaW5nID0gZmllbGQudGV4dFxuXHRcdFx0XHRpb3MubGF5b3V0LnNldChmaWVsZC50ZXh0LmN1cnNvcilcblx0XHRcdGZpZWxkLmxpc3RlbmluZ1RvRmllbGQgPSBVdGlscy5pbnRlcnZhbCAuMSwgLT5cblx0XHRcdFx0aWYgZmllbGQuYWN0aXZlID09IGZhbHNlXG5cdFx0XHRcdFx0Y2xlYXJJbnRlcnZhbChmaWVsZC5pbnRlcnZhbClcblx0XHRcdFx0XHRjbGVhckludGVydmFsKGZpZWxkLmxpc3RlbmluZ1RvRmllbGQpXG5cdFx0XHRcdFx0ZmllbGQudGV4dC5jdXJzb3IuZGVzdHJveSgpXG5cblxuXHRcdFx0ZmllbGQuaW50ZXJ2YWwgPSBVdGlscy5pbnRlcnZhbCAuNiwgLT5cblx0XHRcdFx0aWYgZmllbGQuYWN0aXZlXG5cdFx0XHRcdFx0aWYgZmllbGQudGV4dC5jdXJzb3Iub3BhY2l0eVxuXHRcdFx0XHRcdFx0ZmllbGQudGV4dC5jdXJzb3IuYW5pbWF0ZVxuXHRcdFx0XHRcdFx0XHRwcm9wZXJ0aWVzOihvcGFjaXR5OjApXG5cdFx0XHRcdFx0XHRcdHRpbWU6LjVcblx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHRmaWVsZC50ZXh0LmN1cnNvci5hbmltYXRlXG5cdFx0XHRcdFx0XHRcdHByb3BlcnRpZXM6KG9wYWNpdHk6MSlcblx0XHRcdFx0XHRcdFx0dGltZTouNVxuXG5cblx0XHRcdGZpZWxkLnRleHQub24gXCJjaGFuZ2U6aHRtbFwiLCAtPlxuXHRcdFx0XHRALmN1cnNvci5jb25zdHJhaW50cy5sZWFkaW5nID0gQFxuXHRcdFx0XHRpZiBALmh0bWwgPT0gJydcblx0XHRcdFx0XHRALnBsYWNlaG9sZGVyLnZpc2libGUgPSB0cnVlXG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRALnBsYWNlaG9sZGVyLnZpc2libGUgPSBmYWxzZVxuXHRcdFx0XHRpZiBALmh0bWwuaW5kZXhPZihALnBsYWNlaG9sZGVyKSAhPSAtMVxuXHRcdFx0XHRcdEAuaHRtbCA9IEAuaHRtbC5yZXBsYWNlKEAucGxhY2Vob2xkZXIsICcnKVxuXG5cdFx0XHRcdGlvcy5sYXlvdXQuc2V0KEAuY3Vyc29yKVxuXG5cdGZpZWxkLmlucHV0ID0gKGtleWJvYXJkKSAtPlxuXHRcdGtleWJvYXJkLm91dHB1dChmaWVsZClcblxuXHRyZXR1cm4gZmllbGRcbiIsImlvcyA9IHJlcXVpcmUgJ2lvcy1raXQnXG5cblxuZXhwb3J0cy5kZWZhdWx0cyA9XG4gIHN0eWxlOlwibGlnaHRcIlxuICBzaGlmdDp0cnVlXG4gIG91dHB1dDp1bmRlZmluZWRcbiAgcmV0dXJuVGV4dDpcInJldHVyblwiXG4gIHN0YXRlOlwibGV0dGVyc1wiXG4gIGhpZGRlbjpmYWxzZVxuICByZXR1cm5Db2xvcjpcImJsdWVcIlxuICBzdXBlckxheWVyOnVuZGVmaW5lZFxuXG5cbiNSZXNwb25zYWJpbGUgZm9yIGtleWJvYXJkIGRpbWVuc2lvbnNcbmRldmljZSA9XG4gIFwiaXBob25lLTVcIjpcbiAgICBwb3BVcENoYXI6NDBcbiAgICBwb3BVcFRvcDo0XG4gICAgaGVpZ2h0OjIxNVxuICAgIGxpbmVIZWlnaHQ6MzZcbiAgICBsZXR0ZXJLZXk6XG4gICAgICBrZXlUb3A6NlxuICAgICAgaGVpZ2h0OjM5XG4gICAgICB3aWR0aDoyNi41XG4gICAgICBib3JkZXJSYWRpdXM6NVxuICAgICAgZm9udFNpemU6MjIuNVxuICAgIHNwZWNpYWxLZXlXaWR0aDozOC41XG4gICAgc3BlY2lhbEtleUhlaWdodDozOC41XG4gICAgc3BhY2U6NVxuICAgIHJvdzE6XG4gICAgICBsZWFkaW5nOjBcbiAgICAgIHRvcDowXG4gICAgcm93MjpcbiAgICAgIGxlYWRpbmc6MTlcbiAgICAgIHRvcDoxNlxuICAgIHJvdzM6XG4gICAgICB0b3A6MTZcbiAgICAgIGxlYWRpbmc6NTFcbiAgICBhcmVhOlxuICAgICAgdG9wOjExXG4gICAgICBsZWFkaW5nOjNcbiAgICAgIHRyYWlsaW5nOjNcbiAgICAgIGJvdHRvbTo0XG4gICAgcmV0dXJuV2lkdGg6NzVcbiAgICBwb3BVcE9mZnNldDpcbiAgICAgIHg6NFxuICAgICAgeTozMFxuICBcImlwaG9uZS02c1wiOlxuICAgIHBvcFVwQ2hhcjo0MFxuICAgIHBvcFVwVG9wOjZcbiAgICBoZWlnaHQ6MjE4XG4gICAgbGluZUhlaWdodDo0MFxuICAgIGxldHRlcktleTpcbiAgICAgIGtleVRvcDoxMFxuICAgICAgaGVpZ2h0OjQyXG4gICAgICB3aWR0aDozMS41XG4gICAgICBib3JkZXJSYWRpdXM6NVxuICAgICAgZm9udFNpemU6MjNcbiAgICAgIHRvcDoxMFxuICAgIHNwZWNpYWxLZXlXaWR0aDo0MlxuICAgIHNwZWNpYWxLZXlIZWlnaHQ6NDJcbiAgICBzcGFjZTo2XG4gICAgcm93MTpcbiAgICAgIGxlYWRpbmc6MFxuICAgICAgdG9wOjBcbiAgICByb3cyOlxuICAgICAgbGVhZGluZzoyMlxuICAgICAgdG9wOjEyXG4gICAgcm93MzpcbiAgICAgIHRvcDoxMlxuICAgICAgbGVhZGluZzo1OVxuICAgIGFyZWE6XG4gICAgICB0b3A6MTJcbiAgICAgIGxlYWRpbmc6M1xuICAgICAgdHJhaWxpbmc6M1xuICAgICAgYm90dG9tOjRcbiAgICByZXR1cm5XaWR0aDo4N1xuICAgIHBvcFVwT2Zmc2V0OlxuICAgICAgeDo1XG4gICAgICB5OjMyXG4gIFwiaXBob25lLTZzLXBsdXNcIjpcbiAgICBwb3BVcENoYXI6MzhcbiAgICBwb3BVcFRvcDo2XG4gICAgaGVpZ2h0OjIyNlxuICAgIGxpbmVIZWlnaHQ6NDJcbiAgICBsZXR0ZXJLZXk6XG4gICAgICBrZXlUb3A6MTJcbiAgICAgIGhlaWdodDo0NVxuICAgICAgd2lkdGg6MzZcbiAgICAgIGJvcmRlclJhZGl1czo1XG4gICAgICBmb250U2l6ZToyNFxuICAgICAgdG9wOjEwXG4gICAgc3BlY2lhbEtleVdpZHRoOjQ1XG4gICAgc3BlY2lhbEtleUhlaWdodDo0NVxuICAgIHNwYWNlOjVcbiAgICByb3cxOlxuICAgICAgbGVhZGluZzowXG4gICAgICB0b3A6MFxuICAgIHJvdzI6XG4gICAgICBsZWFkaW5nOjIwXG4gICAgICB0b3A6MTFcbiAgICByb3czOlxuICAgICAgdG9wOjExXG4gICAgICBsZWFkaW5nOjYzXG4gICAgYXJlYTpcbiAgICAgIHRvcDo4XG4gICAgICBsZWFkaW5nOjRcbiAgICAgIHRyYWlsaW5nOjRcbiAgICAgIGJvdHRvbTo1XG4gICAgcmV0dXJuV2lkdGg6OTdcbiAgICBwb3BVcE9mZnNldDpcbiAgICAgIHg6MTBcbiAgICAgIHk6MzhcbiAgXCJpcGFkXCI6XG4gICAgaGVpZ2h0OjMxM1xuICAgIGxpbmVIZWlnaHQ6NTVcbiAgICBsZXR0ZXJLZXk6XG4gICAgICBoZWlnaHQ6NTVcbiAgICAgIHdpZHRoOjU2XG4gICAgICBib3JkZXJSYWRpdXM6NVxuICAgICAgZm9udFNpemU6MjNcbiAgICBzcGVjaWFsS2V5V2lkdGg6NTZcbiAgICBzcGVjaWFsS2V5SGVpZ2h0OjU1XG4gICAgc3BhY2U6MTJcbiAgICByZXR1cm5XaWR0aDoxMDZcbiAgICByb3cxOlxuICAgICAgbGVhZGluZzowXG4gICAgICB0b3A6MFxuICAgIHJvdzI6XG4gICAgICBsZWFkaW5nOjMwXG4gICAgICB0b3A6OVxuICAgIHJvdzM6XG4gICAgICBsZWFkaW5nOjY4XG4gICAgICB0b3A6OVxuICAgIGFyZWE6XG4gICAgICB0b3A6NTVcbiAgICAgIGxlYWRpbmc6NlxuICAgICAgdHJhaWxpbmc6NlxuICAgICAgYm90dG9tOjhcblxuICBcImlwYWQtcHJvXCI6XG4gICAgaGVpZ2h0OjM3OFxuICAgIGxpbmVIZWlnaHQ6NjFcbiAgICBsZXR0ZXJLZXk6XG4gICAgICBoZWlnaHQ6NjFcbiAgICAgIHdpZHRoOjYzXG4gICAgICBib3JkZXJSYWRpdXM6NVxuICAgICAgZm9udFNpemU6MjNcbiAgICBzcGFjZTo3XG4gICAgcmV0dXJuV2lkdGg6MTIwXG4gICAgc3BlY2lhbEtleUhlaWdodDo2MVxuICAgIHNwZWNpYWxLZXlXaWR0aDo5M1xuICAgIHJvdzE6XG4gICAgICBsZWFkaW5nOjExMVxuICAgICAgdG9wOjUzXG4gICAgcm93MjpcbiAgICAgIGxlYWRpbmc6MTI2XG4gICAgICB0b3A6N1xuICAgIHJvdzM6XG4gICAgICBsZWFkaW5nOjE2MVxuICAgICAgdG9wOjdcbiAgICBhcmVhOlxuICAgICAgdG9wOjU2XG4gICAgICBsZWFkaW5nOjRcbiAgICAgIHRyYWlsaW5nOjRcbiAgICAgIGJvdHRvbTo0XG5cblxuXG4jIE1hcCBvZiBrZXkgY29kZXNcbiMgQ29kZXMgZm9yIGFsbCBrZXlzXG5jb2RlTWFwID0geyA4OidkZWxldGUnLCA5Oid0YWInLCAxMzoncmV0dXJuJywgMTY6J3NoaWZ0JywgMjA6J2NhcHMnLCAzMjonc3BhY2UnLCAyNzpcImRpc21pc3NcIiwgMzM6XCIhXCIsIDM0OlwiXFxcIlwiLCAzNTpcIiNcIiwgMzY6XCIkXCIsIDM3OlwiJVwiLCAzODpcIiZcIiwgMzk6XCJcXCdcIiwgNDA6XCIoXCIsIDQxOlwiKVwiLCA0MjpcIipcIiwgNDM6XCIrXCIsIDQ0OlwiLFwiLCA0NTpcIi1cIiwgNDc6XCIvXCIsIDQ2OlwiLlwiLCA0ODpcIjBcIiwgNDk6XCIhXCIsIDUwOlwiQFwiLCA1MTpcIiNcIiwgNTI6XCIkXCIsIDUzOlwiJVwiLCA1NDpcIl5cIiwgNTU6XCImXCIsIDU2OlwiKlwiLCA1NzpcIihcIiwgNDg6XCIpXCIsIDU5OlwiX1wiLCA2MDpcIjxcIiwgNjE6XCI9XCIsIDYyOlwiPlwiLCA2MzpcIj9cIiwgNjQ6XCJAXCIsIDY1OlwiQVwiLCA2NjpcIkJcIiwgNjc6XCJDXCIsIDY4OlwiRFwiLCA2OTpcIkVcIiwgNzA6XCJGXCIsIDcxOlwiR1wiLCA3MjpcIkhcIiwgNzM6XCJJXCIsIDc0OlwiSlwiLCA3NTpcIktcIiwgNzY6XCJMXCIsIDc3OlwiTVwiLCA3ODpcIk5cIiwgNzk6XCJPXCIsIDgwOlwiUFwiLCA4MTpcIlFcIiwgODI6XCJSXCIsIDgzOlwiU1wiLCA4NDpcIlRcIiwgODU6XCJVXCIsIDg2OlwiVlwiLCA4NzpcIldcIiwgODg6XCJYXCIsIDg5OlwiWVwiLCA5MDpcIlpcIiwgOTE6J2NtZCcsIDIxOTpcIltcIiwgOTI6XCJcXFxcXCIsIDIyMTpcIl1cIiwgOTQ6XCJeXCIsIDk1OlwiX1wiLCA5NjpcImBcIiwgOTc6XCJhXCIsIDk4OlwiYlwiLCA5OTpcImNcIiwgMTAwOlwiZFwiLCAxMDE6XCJlXCIsIDEwMjpcImZcIiwgMTAzOlwiZ1wiLCAxMDQ6XCJoXCIsIDEwNTpcImlcIiwgMTA2OlwialwiLCAxMDc6XCJrXCIsIDEwODpcImxcIiwgMTA5OlwibVwiLCAxMTA6XCJuXCIsIDExMTpcIm9cIiwgMTEyOlwicFwiLCAxMTM6XCJxXCIsIDExNDpcInJcIiwgMTE1Olwic1wiLCAxMTY6XCJ0XCIsIDExNzpcInVcIiwgMTE4OlwidlwiLCAxMTk6XCJ3XCIsIDEyMDpcInhcIiwgMTIxOlwieVwiLCAxMjI6XCJ6XCIsIDEyMzpcIntcIiwgMTI0OlwifFwiLCAxMjU6XCJ9XCIsIDEyNjpcIn5cIiwgMTg2OlwiOlwiLCAxODc6XCIrXCIsIDE4ODpcIjxcIiwgMTkwOlwiPlwiLCAxOTE6XCI/XCIsIDE4OTpcIl9cIiwgMTkyOlwiflwiLCAyMTk6XCJ7XCIsIDIyMDpcIlxcfFwiLCAyMjE6XCJ9XCIsIDIyMjpcIiZyZHF1bztcIn1cbmFycmF5T2ZDb2RlcyA9IE9iamVjdC5rZXlzKGNvZGVNYXApXG5sZXR0ZXJzID0gW1wicVwiLCBcIndcIiwgXCJlXCIsIFwiclwiLCBcInRcIiwgXCJ5XCIsIFwidVwiLCBcImlcIiwgXCJvXCIsIFwicFwiLCBcImFcIiwgXCJzXCIsIFwiZFwiLCBcImZcIiwgXCJnXCIsIFwiaFwiLCBcImpcIiwgXCJrXCIsIFwibFwiLCBcInpcIiwgXCJ4XCIsIFwiY1wiLCBcInZcIiwgIFwiYlwiLCBcIm5cIiwgXCJtXCJdXG5udW1iZXJzID0gW1wiMVwiLCBcIjJcIiwgXCIzXCIsIFwiNFwiLCBcIjVcIiwgXCI2XCIsIFwiN1wiLCBcIjhcIiwgXCI5XCIsIFwiMFwiLCBcIi1cIiwgXCIvXCIsIFwiOlwiLCBcIjtcIiwgXCIoXCIsIFwiKVwiLCBcIiRcIiwgXCImXCIsIFwiQFwiLCBcIlxcXCJcIiwgXCIuXCIsIFwiLFwiLCBcIj9cIiwgXCIhXCIsIFwi4oCyXCJdXG5zeW1ib2xzID0gW1wiW1wiLCBcIl1cIiwgXCJ7XCIsIFwifVwiLCBcIiNcIiwgXCIlXCIsIFwiXlwiLCBcIipcIiwgXCIrXCIsIFwiPVwiLCBcIl9cIiwgXCJcXFxcXCIsIFwifFwiLCBcIn5cIiwgXCI8XCIsIFwiPlwiLCBcIuKCrFwiLCBcIsKjXCIsIFwiwqVcIiwgXCLigKJcIl1cblxuZXhwb3J0cy5kZWZhdWx0cy5wcm9wcyA9IE9iamVjdC5rZXlzKGV4cG9ydHMuZGVmYXVsdHMpXG5cbmV4cG9ydHMuY3JlYXRlID0gKG9iaikgLT5cbiAgc2V0dXAgPSBpb3MudXRpbHMuc2V0dXBDb21wb25lbnQob2JqLCBleHBvcnRzLmRlZmF1bHRzKVxuICAjUmVzcG9uc2FiaWxlIGZvciBjb2xvcnNcbiAgc3R5bGUgPVxuICAgIGxpZ2h0OlxuICAgICAgYmFja2dyb3VuZENvbG9yOlwiI0QxRDVEQVwiXG4gICAgICBjb2xvcjpcIiMwMDBcIlxuICAgICAgc3BlY2lhbEtleUJHOlwiI0FDQjNCRFwiXG4gICAgICBrZXlCRzpcIiNGN0Y3RjdcIlxuICAgICAgc2hhZG93WTogaW9zLnB4KDEpXG4gICAgICBzaGFkb3dDb2xvcjpcIiM4OThCOEZcIlxuICAgICAgcmV0dXJuQkc6aW9zLmNvbG9yKHNldHVwLnJldHVybkNvbG9yKVxuICAgIGRhcms6XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6XCJyZ2JhKDAsMCwwLC43KVwiXG4gICAgICBjb2xvcjpcIiNGRkZcIlxuICAgICAgc3BlY2lhbEtleUJHOlwicmdiYSg2Nyw2Nyw2NywuOClcIlxuICAgICAga2V5Qkc6XCJyZ2JhKDEwNSwxMDUsMTA1LC44KVwiXG4gICAgICBzaGFkb3dZOiBpb3MucHgoMSlcbiAgICAgIHNoYWRvd0NvbG9yOlwicmdiYSgwLDAsMCwuNClcIlxuICAgICAgcmV0dXJuQkc6aW9zLmNvbG9yKHNldHVwLnJldHVybkNvbG9yKVxuXG4gIHNwZWNzID0gZGV2aWNlW2lvcy5kZXZpY2UubmFtZV1cbiAgY29sb3JzID0gc3R5bGVbc2V0dXAuc3R5bGVdXG5cbiAgZGV2aWNlXG4gIGJvYXJkID0gbmV3IGlvcy5WaWV3XG4gICAgbmFtZTpcIktleWJvYXJkXCJcbiAgICBzdXBlckxheWVyOnNldHVwLnN1cGVyTGF5ZXJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6c3R5bGVbc2V0dXAuc3R5bGVdLmJhY2tncm91bmRDb2xvclxuICAgIHk6aW9zLmRldmljZS5oZWlnaHRcbiAgICBjb25zdHJhaW50czpcbiAgICAgIGxlYWRpbmc6MFxuICAgICAgdHJhaWxpbmc6MFxuICAgICAgYm90dG9tOi0xICogc3BlY3MuaGVpZ2h0XG4gICAgICBoZWlnaHQ6c3BlY3MuaGVpZ2h0XG4gIGlvcy51dGlscy5iZ0JsdXIoYm9hcmQpXG4gIGJvYXJkLm91dHB1dCA9IChvYmopIC0+XG4gICAgaWYgYm9hcmQudGFyZ2V0XG4gICAgICBpZiBib2FyZC50YXJnZXQudHlwZSA9PSAnZmllbGQnXG4gICAgICAgIGJvYXJkLnRhcmdldC5hY3RpdmUgPSBmYWxzZVxuXG4gICAgYm9hcmQudGFyZ2V0ID0gb2JqXG4gICAgaWYgYm9hcmQudGFyZ2V0XG4gICAgICBpZiBib2FyZC50YXJnZXQudHlwZSA9PSAnZmllbGQnXG4gICAgICAgIGJvYXJkLnRhcmdldC5hY3RpdmUgPSB0cnVlXG4gIGJvYXJkLmhpZGRlbiA9IHNldHVwLmhpZGRlblxuXG4gIGlmIGJvYXJkLmhpZGRlbiA9PSBmYWxzZVxuICAgIGJvYXJkLmNvbnN0cmFpbnRzLmJvdHRvbSA9IDBcbiAgICBpb3MubGF5b3V0LnNldChib2FyZClcblxuICBib2FyZC5jYWxsID0gKCkgLT5cbiAgICBib2FyZC55ID0gaW9zLmRldmljZS5oZWlnaHRcbiAgICBib2FyZC5jb25zdHJhaW50cy5ib3R0b20gPSAwXG4gICAgaWYgYm9hcmQuaGlkZGVuXG4gICAgICBib2FyZC5oaWRkZW4gPSBmYWxzZVxuICAgICAgaW9zLmxheW91dC5hbmltYXRlXG4gICAgICAgIHRhcmdldDpib2FyZFxuICAgICAgICB0aW1lOi41XG4gICAgICAgIGN1cnZlOidlYXNlLWluLW91dCdcblxuICAgIGJvYXJkLmJyaW5nVG9Gcm9udCgpXG4gIGJvYXJkLmRpc21pc3MgPSAoKSAtPlxuICAgIGJvYXJkLmNvbnN0cmFpbnRzLmJvdHRvbSA9IC0xICogaW9zLnB0KGJvYXJkLmhlaWdodClcbiAgICBib2FyZC5oaWRkZW4gPSB0cnVlXG4gICAgYm9hcmQudGFyZ2V0LmFjdGl2ZSA9IGZhbHNlXG4gICAgaW9zLmxheW91dC5hbmltYXRlXG4gICAgICB0YXJnZXQ6Ym9hcmRcbiAgICAgIHRpbWU6LjVcbiAgICAgIGN1cnZlOidlYXNlLWluLW91dCdcblxuICBib2FyZC5kZWxldGUgPSAoKSAtPlxuICAgIGxheWVyID0gXCJcIlxuICAgIGlmIGJvYXJkLnRhcmdldFxuICAgICAgaWYgYm9hcmQudGFyZ2V0LnR5cGUgPT0gJ2ZpZWxkJ1xuICAgICAgICBsYXllciA9IGJvYXJkLnRhcmdldC50ZXh0XG4gICAgICBlbHNlXG4gICAgICAgIGxheWVyID0gYm9hcmQudGFyZ2V0XG5cbiAgICAgIGlzU3BhY2UgPSBsYXllci5odG1sW2xheWVyLmh0bWwubGVuZ3RoIC0gNS4ubGF5ZXIuaHRtbC5sZW5ndGggLSAxIF1cblxuICAgICAgaWYgaXNTcGFjZSAhPSAnbmJzcDsnXG4gICAgICAgIHRleHQgPSBsYXllci5odG1sLnNsaWNlKDAsIC0xKVxuICAgICAgICBsYXllci5odG1sID0gdGV4dFxuICAgICAgZWxzZVxuICAgICAgICB0ZXh0ID0gbGF5ZXIuaHRtbC5zbGljZSgwLCAtNilcbiAgICAgICAgbGF5ZXIuaHRtbCA9IHRleHRcblxuICBib2FyZC5jYXBzTG9jayA9ICgpIC0+XG4gICAgYm9hcmQuaXNDYXBzTG9jayA9IHRydWVcbiAgICBib2FyZC5pc0NhcGl0YWwgPSB0cnVlXG4gICAgYm9hcmQua2V5cy5zaGlmdC5pY29uLnRvZ2dsZSgnb2ZmJylcbiAgICBoYW5kbGVLZXlDb2xvcihib2FyZC5rZXlzLnNoaWZ0KVxuICAgIGlmIGlvcy5kZXZpY2UubmFtZSA9PSAnaXBhZC1wcm8nXG4gICAgICBib2FyZC5rZXlzLnNoaWZ0YWx0Lmljb24udG9nZ2xlKCdvZmYnKVxuICAgICAgaGFuZGxlS2V5Q29sb3IoYm9hcmQua2V5cy5zaGlmdGFsdClcblxuICBib2FyZC5vdXRwdXQoc2V0dXAub3V0cHV0KVxuICBib2FyZC5rZXlzQXJyYXkgPSBbXVxuICBib2FyZC5rZXlzID0ge31cbiAgYm9hcmQuaXNDYXBpdGFsID0gc2V0dXAuc2hpZnRcbiAgYm9hcmQuYXJlYSA9IG5ldyBpb3MuVmlld1xuICAgIG5hbWU6XCIuYXJlYVwiXG4gICAgc3VwZXJMYXllcjpib2FyZFxuICAgIGNvbnN0cmFpbnRzOiBzcGVjcy5hcmVhXG4gICAgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIlxuXG4gIEtleSA9IChvYmopIC0+XG4gICAga2V5ID0gbmV3IGlvcy5WaWV3XG4gICAgICBuYW1lOlwiLmtleXMuXCIgKyBvYmoubmFtZVxuICAgICAgY29uc3RyYWludHM6b2JqLmNvbnN0cmFpbnRzXG4gICAgICBzdXBlckxheWVyOmJvYXJkLmFyZWFcbiAgICAgIGJvcmRlclJhZGl1czppb3MucHgoc3BlY3MubGV0dGVyS2V5LmJvcmRlclJhZGl1cylcbiAgICAgIHNoYWRvd1k6Y29sb3JzLnNoYWRvd1lcbiAgICAgIHNoYWRvd0NvbG9yOmNvbG9ycy5zaGFkb3dDb2xvclxuICAgIGtleS5zdHlsZS5mb250RmFtaWx5ID0gXCItYXBwbGUtc3lzdGVtLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmXCJcblxuICAgICNEaXNhYmxlcyBab29tXG4gICAga2V5Lm9uIEV2ZW50cy5Ub3VjaFN0YXJ0LCAoZXZlbnQpIC0+XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgcmV0dXJuIGtleVxuXG4gIExldHRlciA9IChvYmopIC0+XG4gICAga2V5ID0gbmV3IEtleSBvYmpcbiAgICBrZXkuYmFja2dyb3VuZENvbG9yID0gY29sb3JzLmtleUJHXG4gICAga2V5Lmh0bWwgPSBvYmoubGV0dGVyXG4gICAga2V5LmNvbG9yID0gY29sb3JzLmNvbG9yXG4gICAga2V5LnN0eWxlLnRleHRBbGlnbiA9IFwiY2VudGVyXCJcbiAgICBrZXkuc3R5bGUubGluZUhlaWdodCA9IGlvcy5weChzcGVjcy5saW5lSGVpZ2h0KSArIFwicHhcIlxuICAgIGtleS5zdHlsZS5mb250U2l6ZSA9IGlvcy5weChzcGVjcy5sZXR0ZXJLZXkuZm9udFNpemUpICsgXCJweFwiXG4gICAga2V5LnZhbHVlID0gb2JqLmxldHRlclxuXG5cbiAgICBpZiBrZXkudmFsdWUgPT0gXCJzcGFjZVwiIHRoZW4ga2V5LnZhbHVlID0gXCImbmJzcDtcIlxuICAgIGlmIGlvcy5pc1BhZCgpXG4gICAgICBrZXkuZG93biA9IC0+XG4gICAgICAgIGtleS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvcnMuc3BlY2lhbEtleUJHXG4gICAgICAgIGlmIGJvYXJkLnRhcmdldCB0aGVuIGlvcy51dGlscy53cml0ZShib2FyZC50YXJnZXQsIGtleS52YWx1ZSlcbiAgICAgIGtleS51cCA9IC0+XG4gICAgICAgIGtleS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvcnMua2V5QkdcbiAgICAgICAgaWYgYm9hcmQuaXNDYXBpdGFsICYmIGJvYXJkLmlzQ2Fwc0xvY2sgIT0gdHJ1ZVxuICAgICAgICAgIGJvYXJkLmlzQ2FwaXRhbCA9IGZhbHNlXG4gICAgICAgICAgY2FwaXRhbGl6ZUtleXMoKVxuICAgICAgICAgIGJvYXJkLmtleXMuc2hpZnQudXAoKVxuICAgICAgICAgIGlmIGlvcy5pc1BhZCgpIHRoZW4gYm9hcmQua2V5cy5zaGlmdGFsdC51cCgpXG4gICAgICBrZXkub24gRXZlbnRzLlRvdWNoU3RhcnQsIC0+XG4gICAgICAgIGtleS5kb3duKClcbiAgICAgIGtleS5vbiBFdmVudHMuVG91Y2hFbmQsIC0+XG4gICAgICAgIGtleS51cCgpXG4gICAgZWxzZVxuICAgICAgaWYga2V5LnZhbHVlICE9ICcmbmJzcDsnXG4gICAgICAgIGtleS5kb3duID0gLT5cbiAgICAgICAgICBib2FyZC5wb3BVcC52aXNpYmxlID0gdHJ1ZVxuICAgICAgICAgIGJvYXJkLmJyaW5nVG9Gcm9udCgpXG4gICAgICAgICAgYm9hcmQucG9wVXAuYnJpbmdUb0Zyb250KClcbiAgICAgICAgICBib2FyZC5wb3BVcC5taWRYID0ga2V5Lm1pZFhcbiAgICAgICAgICBib2FyZC5wb3BVcC5tYXhZID0ga2V5Lm1heFlcbiAgICAgICAgICBib2FyZC5wb3BVcC50ZXh0Lmh0bWwgPSBrZXkudmFsdWVcblxuICAgICAgICAgIGlmIGJvYXJkLnRhcmdldCB0aGVuIGlvcy51dGlscy53cml0ZShib2FyZC50YXJnZXQsIGtleS52YWx1ZSlcblxuXG4gICAgICAgIGtleS51cCA9IC0+XG4gICAgICAgICAgYm9hcmQucG9wVXAudmlzaWJsZSA9IGZhbHNlXG4gICAgICAgICAgaWYgYm9hcmQuaXNDYXBpdGFsICYmIGJvYXJkLmNhcHNMb2NrICE9IHRydWVcbiAgICAgICAgICAgIGJvYXJkLmlzQ2FwaXRhbCA9IGZhbHNlXG4gICAgICAgICAgICBjYXBpdGFsaXplS2V5cygpXG4gICAgICAgICAgICBib2FyZC5rZXlzLnNoaWZ0LnVwKClcblxuICAgICAgICBrZXkub24gRXZlbnRzLlRvdWNoU3RhcnQsIC0+IGtleS5kb3duKClcbiAgICAgICAga2V5Lm9uIEV2ZW50cy5Ub3VjaEVuZCwgLT4ga2V5LnVwKClcbiAgICAgIGVsc2VcblxuICAgICAgICBrZXkuZG93biA9IC0+XG4gICAgICAgICAga2V5LmJhY2tncm91bmRDb2xvciA9IGNvbG9ycy5zcGVjaWFsS2V5QkdcbiAgICAgICAgICBpZiBib2FyZC50YXJnZXQgdGhlbiBpb3MudXRpbHMud3JpdGUoYm9hcmQudGFyZ2V0LCBrZXkudmFsdWUpXG4gICAgICAgIGtleS51cCA9IC0+XG4gICAgICAgICAga2V5LmJhY2tncm91bmRDb2xvciA9IGNvbG9ycy5rZXlCR1xuICAgICAgICBrZXkub24gRXZlbnRzLlRvdWNoU3RhcnQsIC0+XG4gICAgICAgICAga2V5LmRvd24oKVxuICAgICAgICBrZXkub24gRXZlbnRzLlRvdWNoRW5kLCAtPlxuICAgICAgICAgIGtleS51cCgpXG5cbiAgICByZXR1cm4ga2V5XG5cbiAgU3BlY2lhbEtleSA9IChvYmopIC0+XG4gICAga2V5ID0gbmV3IEtleSBvYmpcbiAgICBrZXkuYmFja2dyb3VuZENvbG9yID0gY29sb3JzLnNwZWNpYWxLZXlCR1xuICAgIGtleS5jb2xvciA9IGNvbG9ycy5jb2xvclxuICAgIGtleS5zdHlsZS50ZXh0QWxpZ24gPSBcImNlbnRlclwiXG4gICAgaWYgaW9zLmRldmljZS5uYW1lID09ICdpcGFkLXBybydcbiAgICAgIGtleS5zdHlsZS5mb250U2l6ZSA9IGlvcy5weCgxOCkgKyBcInB4XCJcbiAgICBlbHNlXG4gICAgICBrZXkuc3R5bGUuZm9udFNpemUgPSBpb3MucHgoMTYpICsgXCJweFwiXG4gICAgcmV0dXJuIGtleVxuXG4gIEljb24gPSAob2JqKSAtPlxuICAgIGljb24gPSBuZXcgaW9zLlZpZXdcbiAgICAgIG5hbWU6J2ljb24nXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiXG4gICAgICBzdXBlckxheWVyOm9iai5zdXBlckxheWVyXG4gICAgICBjb25zdHJhaW50czpcbiAgICAgICAgYWxpZ246J2NlbnRlcidcblxuICAgIGljb24ucHJvcHMgPSAoaGVpZ2h0Om9iai5pY29uLmhlaWdodCwgd2lkdGg6b2JqLmljb24ud2lkdGgsIGh0bWw6IG9iai5pY29uLnN2ZylcblxuICAgIGlvcy51dGlscy5jaGFuZ2VGaWxsKGljb24sIGNvbG9ycy5jb2xvcilcbiAgICByZXR1cm4gaWNvblxuXG4gIEljb25XaXRoU3RhdGUgPSAob2JqKSAtPlxuICAgIGljb24gPSBuZXcgaW9zLlZpZXdcbiAgICAgIG5hbWU6J2ljb24nXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiXG4gICAgICBzdXBlckxheWVyOm9iai5zdXBlckxheWVyXG4gICAgICBjb25zdHJhaW50czpcbiAgICAgICAgYWxpZ246J2NlbnRlcidcblxuICAgIGljb24udG9nZ2xlID0gKHN0YXRlKSAtPlxuICAgICAgaWYgc3RhdGUgPT0gdW5kZWZpbmVkXG4gICAgICAgIGlmIGljb24uc3RhdGUgPT0gJ29uJyB0aGVuIHN0YXRlID0gJ29mZidcbiAgICAgICAgZWxzZSBzdGF0ZSA9ICdvbidcblxuICAgICAgaWYgc3RhdGUgPT0gXCJvblwiXG4gICAgICAgIGlmIGlvcy5kZXZpY2UubmFtZSAhPSAnaXBhZC1wcm8nXG4gICAgICAgICAgaWNvbi5odG1sID0gb2JqLm9uLnN2Z1xuICAgICAgICAgIGljb24ud2lkdGggPSBvYmoub24ud2lkdGhcbiAgICAgICAgICBpY29uLmhlaWdodCA9IG9iai5vbi5oZWlnaHRcbiAgICAgICAgaWNvbi5zdGF0ZSA9ICdvbidcbiAgICAgIGVsc2VcbiAgICAgICAgaWYgaW9zLmRldmljZS5uYW1lICE9ICdpcGFkLXBybydcbiAgICAgICAgICBpY29uLmh0bWwgPSBvYmoub2ZmLnN2Z1xuICAgICAgICAgIGljb24ud2lkdGggPSBvYmoub24ud2lkdGhcbiAgICAgICAgICBpY29uLmhlaWdodCA9IG9iai5vbi5oZWlnaHRcbiAgICAgICAgaWNvbi5zdGF0ZSA9ICdvZmYnXG4gICAgICBpb3MudXRpbHMuY2hhbmdlRmlsbChpY29uLCBjb2xvcnMuY29sb3IpXG4gICAgaWYgb2JqLnN0YXRlXG4gICAgICBpY29uLnRvZ2dsZSgnb24nKVxuICAgIGVsc2VcbiAgICAgIGljb24udG9nZ2xlKCdvZmYnKVxuXG5cbiAgICByZXR1cm4gaWNvblxuXG4gIGNhcGl0YWxpemVLZXlzID0gLT5cbiAgICBmb3Iga2V5IGluIGJvYXJkLmtleXNBcnJheVxuICAgICAgaWYgYm9hcmQuaXNDYXBpdGFsXG4gICAgICAgIGlmIGtleS5odG1sLmxlbmd0aCA9PSAxICYmIGtleS5odG1sLm1hdGNoKC9bYS16XS9pKVxuICAgICAgICAgIGtleS5odG1sID0ga2V5Lmh0bWwudG9VcHBlckNhc2UoKVxuICAgICAgICAgIGtleS52YWx1ZSA9IGtleS5odG1sXG4gICAgICAgIGlmIGtleS5hbHRcbiAgICAgICAgICBrZXkuYWx0LmRlc3Ryb3koKVxuICAgICAgICAgIGtleS5hbHQgPSB1bmRlZmluZWRcbiAgICAgICAgaWYga2V5LmhlaWdodCA+IGlvcy5weCg0NilcbiAgICAgICAgICBrZXkuc3R5bGUubGluZUhlaWdodCA9IGlvcy5weChzcGVjcy5sZXR0ZXJLZXkuaGVpZ2h0KSArICdweCdcbiAgICAgICAgICBrZXkuc3R5bGUuZm9udFNpemUgPSBpb3MucHgoMjMpICsgJ3B4J1xuICAgICAgICBlbHNlXG4gICAgICAgICAgaWYgaW9zLmRldmljZS5uYW1lID09ICdpcGFkLXBybydcbiAgICAgICAgICAgIGtleS5zdHlsZS5saW5lSGVpZ2h0ID0gaW9zLnB4KDQ2KSArICdweCdcbiAgICAgICAgICBlbHNlXG4gICAgICAgICAgICBrZXkuc3R5bGUubGluZUhlaWdodCA9IGlvcy5weChzcGVjcy5saW5lSGVpZ2h0KSArICdweCdcbiAgICAgICAgICBrZXkuc3R5bGUuZm9udFNpemUgPSBpb3MucHgoMjApICsgJ3B4J1xuICAgICAgICBrZXkudmFsdWUgPSBrZXkuaHRtbFxuICAgICAgZWxzZVxuICAgICAgICBpZiBrZXkuaHRtbC5sZW5ndGggPT0gMSAmJiBrZXkuaHRtbC5tYXRjaCgvW2Etel0vaSlcbiAgICAgICAgICBrZXkuaHRtbCA9IGtleS5odG1sLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICBrZXkudmFsdWUgPSBrZXkuaHRtbFxuICAgICAgICBlbHNlXG4gICAgICAgICAgaWYga2V5LmFsdCA9PSB1bmRlZmluZWRcbiAgICAgICAgICAgIGtleS5hbHQgPSBuZXcgaW9zLlRleHRcbiAgICAgICAgICAgICAgdGV4dDpcIlwiXG4gICAgICAgICAgICAgIHN1cGVyTGF5ZXI6a2V5XG4gICAgICAgICAgICAgIGNvbG9yOmNvbG9ycy5jb2xvclxuICAgICAgICAgICAgICBjb25zdHJhaW50czpcbiAgICAgICAgICAgICAgICBhbGlnbjpcImhvcml6b250YWxcIlxuICAgICAgICAgICAgICAgIGJvdHRvbTo0XG4gICAgICAgICAgICAgIGZvbnRTaXplOnNwZWNzLmxldHRlcktleS5mb250U2l6ZVxuICAgICAgICAgICAgaWYgYm9hcmQudG9wUm93XG4gICAgICAgICAgICAgIGlmIGJvYXJkLnRvcFJvdy5pbmRleE9mKGtleSkgIT0gLTFcbiAgICAgICAgICAgICAgICBrZXkuc3R5bGUubGluZUhlaWdodCA9IGlvcy5weCgyMykgKyAncHgnXG4gICAgICAgICAgICAgICAga2V5LnN0eWxlLmZvbnRTaXplID0gaW9zLnB4KDE2KSArICdweCdcbiAgICAgICAgICAgICAgICBrZXkuYWx0LnN0eWxlLmZvbnRTaXplID0gaW9zLnB4KDE2KSArICdweCdcbiAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIGtleS5zdHlsZS5saW5lSGVpZ2h0ID0gaW9zLnB4KDM2KSArICdweCdcbiAgICAgICAgICAgICAgICBrZXkuc3R5bGUuZm9udFNpemUgPSBpb3MucHgoMjApICsgJ3B4J1xuICAgICAgICAgICAgICAgIGtleS5hbHQuc3R5bGUuZm9udFNpemUgPSBpb3MucHgoMjApICsgJ3B4J1xuICAgICAgICAgICAgICAgIGtleS5hbHQuY29uc3RyYWludHMuYm90dG9tID0gOFxuICAgICAgICAgICAgc3dpdGNoIGtleS52YWx1ZVxuICAgICAgICAgICAgICB3aGVuIFwiJmx0O1wiXG4gICAgICAgICAgICAgICAga2V5LmFsdC5odG1sID0gXCIuXCJcbiAgICAgICAgICAgICAgd2hlbiBcIiZndDtcIlxuICAgICAgICAgICAgICAgIGtleS5hbHQuaHRtbCA9IFwiLFwiXG4gICAgICAgICAgICAgIHdoZW4gXCI8XCJcbiAgICAgICAgICAgICAgICBrZXkuYWx0Lmh0bWwgPSBcIi5cIlxuICAgICAgICAgICAgICB3aGVuIFwiPlwiXG4gICAgICAgICAgICAgICAga2V5LmFsdC5odG1sID0gXCIsXCJcbiAgICAgICAgICAgICAgd2hlbiBcIj9cIlxuICAgICAgICAgICAgICAgIGtleS5hbHQuaHRtbCA9IFwiLlwiXG4gICAgICAgICAgICAgIHdoZW4gXCJ7XCJcbiAgICAgICAgICAgICAgICBrZXkuYWx0Lmh0bWwgPSBcIltcIlxuICAgICAgICAgICAgICB3aGVuIFwifVwiXG4gICAgICAgICAgICAgICAga2V5LmFsdC5odG1sID0gXCJ9XCJcbiAgICAgICAgICAgICAgd2hlbiBcIlxcfFwiXG4gICAgICAgICAgICAgICAga2V5LmFsdC5odG1sID0gXCJcXFxcXCJcbiAgICAgICAgICAgICAgd2hlbiBcIn5cIlxuICAgICAgICAgICAgICAgIGtleS5hbHQuaHRtbCA9IFwiYFwiXG4gICAgICAgICAgICAgIHdoZW4gXCIhXCJcbiAgICAgICAgICAgICAgICBrZXkuYWx0Lmh0bWwgPSBcIi5cIlxuICAgICAgICAgICAgICB3aGVuIFwiQFwiXG4gICAgICAgICAgICAgICAga2V5LmFsdC5odG1sID0gXCIyXCJcbiAgICAgICAgICAgICAgd2hlbiBcIiNcIlxuICAgICAgICAgICAgICAgIGtleS5hbHQuaHRtbCA9IFwiM1wiXG4gICAgICAgICAgICAgIHdoZW4gXCIkXCJcbiAgICAgICAgICAgICAgICBrZXkuYWx0Lmh0bWwgPSBcIjRcIlxuICAgICAgICAgICAgICB3aGVuIFwiJVwiXG4gICAgICAgICAgICAgICAga2V5LmFsdC5odG1sID0gXCI1XCJcbiAgICAgICAgICAgICAgd2hlbiBcIl5cIlxuICAgICAgICAgICAgICAgIGtleS5hbHQuaHRtbCA9IFwiNlwiXG4gICAgICAgICAgICAgIHdoZW4gXCImYW1wO1wiXG4gICAgICAgICAgICAgICAga2V5LmFsdC5odG1sID0gXCI3XCJcbiAgICAgICAgICAgICAgd2hlbiBcIiZcIlxuICAgICAgICAgICAgICAgIGtleS5hbHQuaHRtbCA9IFwiN1wiXG4gICAgICAgICAgICAgIHdoZW4gXCIqXCJcbiAgICAgICAgICAgICAgICBrZXkuYWx0Lmh0bWwgPSBcIjhcIlxuICAgICAgICAgICAgICB3aGVuIFwiKFwiXG4gICAgICAgICAgICAgICAga2V5LmFsdC5odG1sID0gXCI5XCJcbiAgICAgICAgICAgICAgd2hlbiBcIilcIlxuICAgICAgICAgICAgICAgIGtleS5hbHQuaHRtbCA9IFwiMFwiXG4gICAgICAgICAgICAgIHdoZW4gXCJfXCJcbiAgICAgICAgICAgICAgICBrZXkuYWx0Lmh0bWwgPSBcIi1cIlxuICAgICAgICAgICAgICB3aGVuIFwiK1wiXG4gICAgICAgICAgICAgICAga2V5LmFsdC5odG1sID0gXCI9XCJcbiAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIGtleS5hbHQuaHRtbCA9IFwiJnByaW1lO1wiXG4gICAgICAgICAgICBpb3MubGF5b3V0LnNldChrZXkuYWx0KVxuICAgICAgICAgICAgaWYgaW9zLmRldmljZS5uYW1lID09ICdpcGFkLXBybycgJiYga2V5LnZhbHVlID09ICchJyB0aGVuIGtleS5hbHQuaHRtbCA9ICcxJ1xuICAgICAgICAgICAgaWYgaW9zLmRldmljZS5uYW1lID09ICdpcGFkLXBybycgJiYga2V5LnZhbHVlID09ICc/JyB0aGVuIGtleS5hbHQuaHRtbCA9ICcvJ1xuICAgICAgICAgICAgaWYgaW9zLmRldmljZS5uYW1lID09ICdpcGFkLXBybycgJiYga2V5LnZhbHVlID09ICc6JyB0aGVuIGtleS5hbHQuaHRtbCA9ICc7J1xuICAgICAgICAgICAgaWYgaW9zLmRldmljZS5uYW1lID09ICdpcGFkLXBybycgJiYga2V5LnZhbHVlID09ICcmcmRxdW87JyB0aGVuIGtleS5hbHQuaHRtbCA9ICcmcHJpbWU7J1xuICAgICAgICAgICAga2V5LnZhbHVlID0ga2V5LmFsdC5odG1sXG5cbiAgaGFuZGxlS2V5Q29sb3IgPSAoa2V5KSAtPlxuICAgIGlmIGlvcy5pc1Bob25lXG4gICAgICBpZiBrZXkuaWNvbi5zdGF0ZSA9PSAnb24nIHRoZW4ga2V5LmJhY2tncm91bmRDb2xvciA9IGNvbG9ycy5rZXlCR1xuICAgICAgZWxzZSBrZXkuYmFja2dyb3VuZENvbG9yID0gY29sb3JzLnNwZWNpYWxLZXlCR1xuXG4gIFNwYWNlID0gKG9iaikgLT5cbiAgICBrZXkgPSBuZXcgTGV0dGVyIG9ialxuICAgIGtleS5odG1sID0gJ3NwYWNlJ1xuICAgIGtleS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvcnMua2V5QkdcbiAgICBrZXkuc3R5bGUubGluZUhlaWdodCA9IGlvcy5weChzcGVjcy5zcGVjaWFsS2V5SGVpZ2h0KSArIFwicHhcIlxuICAgIGtleS5zdHlsZS5mb250U2l6ZSA9IGlvcy5weCgxNikgKyAncHgnXG4gICAgcmV0dXJuIGtleVxuXG4gIFNoaWZ0ID0gKG9iaikgLT5cbiAgICBrZXkgPSBuZXcgU3BlY2lhbEtleSBvYmpcbiAgICBrZXkuaWNvbiA9IG5ldyBJY29uV2l0aFN0YXRlXG4gICAgICBzdXBlckxheWVyOmtleVxuICAgICAgc3RhdGU6b2JqLnNoaWZ0XG4gICAgICBvbjppb3MudXRpbHMuc3ZnKGlvcy5hc3NldHMuc2hpZnQub24pXG4gICAgICBvZmY6aW9zLnV0aWxzLnN2Zyhpb3MuYXNzZXRzLnNoaWZ0Lm9mZilcbiAgICBoYW5kbGVLZXlDb2xvcihrZXkpXG5cbiAgICBrZXkub24gRXZlbnRzLlRvdWNoRW5kLCAtPlxuICAgICAgQC5pY29uLnRvZ2dsZSgpXG4gICAgICBoYW5kbGVLZXlDb2xvcihrZXkpXG4gICAgICBpZiBALmljb24uc3RhdGUgPT0gJ29uJ1xuICAgICAgICBib2FyZC5pc0NhcGl0YWwgPSB0cnVlXG4gICAgICBlbHNlXG4gICAgICAgIGJvYXJkLmlzQ2FwaXRhbCA9IGZhbHNlXG4gICAgICBjYXBpdGFsaXplS2V5cygpXG5cbiAgICBrZXkuZG93biA9IC0+XG4gICAgICBrZXkuaWNvbi50b2dnbGUoJ29uJylcbiAgICAgIGhhbmRsZUtleUNvbG9yKGtleSlcbiAgICAgIGJvYXJkLmlzQ2FwaXRhbCA9IHRydWVcbiAgICAgIGNhcGl0YWxpemVLZXlzKClcblxuICAgIGtleS51cCA9IC0+XG4gICAgICBrZXkuaWNvbi50b2dnbGUoJ29mZicpXG4gICAgICBoYW5kbGVLZXlDb2xvcihrZXkpXG4gICAgICBib2FyZC5pc0NhcGl0YWwgPSBmYWxzZVxuICAgICAgY2FwaXRhbGl6ZUtleXMoKVxuXG4gICAgaW9zLmxheW91dC5zZXQoa2V5Lmljb24pXG5cbiAgICBpZiBpb3MuaXNQYWQoKVxuICAgICAga2V5Lm9uIEV2ZW50cy5Ub3VjaEVuZCwgLT5cbiAgICAgICAgaWYgQC5pY29uLnN0YXRlID09ICdvbidcbiAgICAgICAgICBib2FyZC5rZXlzLnNoaWZ0Lmljb24udG9nZ2xlKCdvbicpXG4gICAgICAgICAgYm9hcmQua2V5cy5zaGlmdGFsdC5pY29uLnRvZ2dsZSgnb24nKVxuICAgICAgICBlbHNlXG4gICAgICAgICAgYm9hcmQua2V5cy5zaGlmdC5pY29uLnRvZ2dsZSgnb2ZmJylcbiAgICAgICAgICBib2FyZC5rZXlzLnNoaWZ0YWx0Lmljb24udG9nZ2xlKCdvZmYnKVxuICAgICAgICBoYW5kbGVLZXlDb2xvcihib2FyZC5rZXlzLnNoaWZ0KVxuICAgICAgICBoYW5kbGVLZXlDb2xvcihib2FyZC5rZXlzLnNoaWZ0YWx0KVxuICAgIHJldHVybiBrZXlcblxuICBEZWxldGUgPSAob2JqKSAtPlxuICAgIGtleSA9IG5ldyBTcGVjaWFsS2V5IG9ialxuICAgIGtleS5pY29uID0gbmV3IEljb25XaXRoU3RhdGVcbiAgICAgIHN1cGVyTGF5ZXI6a2V5XG4gICAgICBvbjppb3MudXRpbHMuc3ZnKGlvcy5hc3NldHMuZGVsZXRlLm9uKVxuICAgICAgb2ZmOmlvcy51dGlscy5zdmcoaW9zLmFzc2V0cy5kZWxldGUub2ZmKVxuXG4gICAga2V5LmZpcmUgPSAtPiBib2FyZC5kZWxldGUoKVxuXG4gICAga2V5LmRvd24gPSAtPlxuICAgICAga2V5Lmljb24udG9nZ2xlKCdvbicpXG4gICAgICBoYW5kbGVLZXlDb2xvcihrZXkpXG4gICAgICBrZXkuZmlyZSgpXG5cbiAgICBrZXkudXAgPSAtPlxuICAgICAga2V5Lmljb24udG9nZ2xlKCdvZmYnKVxuICAgICAgaGFuZGxlS2V5Q29sb3Ioa2V5KVxuXG4gICAga2V5Lm9uIEV2ZW50cy5Ub3VjaFN0YXJ0LCAtPiBrZXkuZG93bigpXG4gICAga2V5Lm9uIEV2ZW50cy5Ub3VjaEVuZCwgLT4ga2V5LnVwKClcblxuXG4gICAgcmV0dXJuIGtleVxuXG4gIE51bWJlcnMgID0gKG9iaikgLT5cbiAgICBrZXkgPSBuZXcgU3BlY2lhbEtleSBvYmpcbiAgICBpZiBpb3MuaXNQaG9uZSgpXG4gICAgICBrZXkuaHRtbCA9ICcxMjMnXG4gICAgZWxzZVxuICAgICAga2V5Lmh0bWwgPScuPzEyMydcbiAgICBrZXkuc3R5bGUubGluZUhlaWdodCA9IGlvcy5weChzcGVjcy5zcGVjaWFsS2V5SGVpZ2h0KSArIFwicHhcIlxuICAgIHJldHVybiBrZXlcblxuICBFbW9qaSA9IChvYmopIC0+XG4gICAga2V5ID0gbmV3IFNwZWNpYWxLZXkgb2JqXG4gICAga2V5Lmljb24gPSBuZXcgSWNvblxuICAgICAgc3VwZXJMYXllcjprZXlcbiAgICAgIGljb246aW9zLnV0aWxzLnN2Zyhpb3MuYXNzZXRzLmVtb2ppKVxuICAgIHJldHVybiBrZXlcblxuICBSZXR1cm4gPSAob2JqKSAtPlxuICAgIGtleSA9IG5ldyBTcGVjaWFsS2V5IG9ialxuICAgIGtleS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvcnMucmV0dXJuQkdcbiAgICBrZXkuaHRtbCA9IHNldHVwLnJldHVyblRleHRcbiAgICBrZXkuc3R5bGUubGluZUhlaWdodCA9IGlvcy5weChzcGVjcy5zcGVjaWFsS2V5SGVpZ2h0KSArIFwicHhcIlxuICAgIGtleS5jb2xvciA9IGlvcy51dGlscy5hdXRvQ29sb3IoY29sb3JzLnJldHVybkJHKVxuICAgIGtleS5kb3duID0gLT5cbiAgICAgIG5vdGhpbmdIYXBwZW5zID0gdHJ1ZVxuXG4gICAga2V5LnVwID0gLT5cbiAgICAgIGJvYXJkLmRpc21pc3MoKVxuICAgICAgaWYgYm9hcmQudGFyZ2V0XG4gICAgICAgIGlmIGJvYXJkLnRhcmdldC5wYXJlbnRcbiAgICAgICAgICBib2FyZC50YXJnZXQucGFyZW50LmFjdGl2ZSA9IGZhbHNlXG4gICAga2V5Lm9uIEV2ZW50cy5Ub3VjaEVuZCwgLT4ga2V5LmRvd24oKVxuICAgIGtleS5vbiBFdmVudHMuVG91Y2hTdGFydCwgLT4ga2V5LnVwKClcbiAgICByZXR1cm4ga2V5XG5cbiAgRGlzbWlzcyA9IChvYmopIC0+XG4gICAga2V5ID0gbmV3IFNwZWNpYWxLZXkgb2JqXG4gICAga2V5Lmljb24gPSBuZXcgSWNvblxuICAgICAgc3VwZXJMYXllcjprZXlcbiAgICAgIGljb246aW9zLnV0aWxzLnN2Zyhpb3MuYXNzZXRzLmtleWJvYXJkKVxuICAgIGtleS5pY29uLnNjYWxlID0gLjhcbiAgICBrZXkuaWNvbi5jb25zdHJhaW50cyA9XG4gICAgICBib3R0b206MTJcbiAgICAgIHRyYWlsaW5nOjEyXG4gICAgaW9zLmxheW91dC5zZXQoa2V5Lmljb24pXG5cbiAgICBrZXkuZG93biA9IC0+IGJvYXJkLmRpc21pc3MoKVxuICAgIGtleS51cCA9IC0+IG5vdGhpbmdIYXBwZW5zID0gZmFsc2VcbiAgICBrZXkub24gRXZlbnRzLlRvdWNoRW5kLCAtPiBrZXkuZG93bigpXG4gICAgcmV0dXJuIGtleVxuXG4gIFRhYiA9IChvYmopIC0+XG4gICAga2V5ID0gbmV3IFNwZWNpYWxLZXkgb2JqXG4gICAga2V5Lmh0bWwgPSAndGFiJ1xuICAgIGtleS5zdHlsZS5saW5lSGVpZ2h0ID0gaW9zLnB4KDcwKSArICdweCdcbiAgICBrZXkuc3R5bGUudGV4dEFsaWduID0gJ2xlZnQnXG4gICAga2V5LnN0eWxlLnBhZGRpbmdMZWZ0ID0gaW9zLnB4KDEyKSArICdweCdcbiAgICByZXR1cm4ga2V5XG5cbiAgYm9hcmQuc3dpdGNoTGV0dGVycyA9IC0+XG4gICAgcm93MUJyZWFrID0gMTBcbiAgICByb3cyQnJlYWsgPSAxOVxuICAgIGlmIGlvcy5pc1BhZCgpXG4gICAgICBsZXR0ZXJzLnB1c2ggJyEnXG4gICAgICBsZXR0ZXJzLnB1c2ggJz8nXG4gICAgaWYgaW9zLmRldmljZS5uYW1lID09IFwiaXBhZC1wcm9cIlxuICAgICAgbGV0dGVycyA9IFtcInFcIiwgXCJ3XCIsIFwiZVwiLCBcInJcIiwgXCJ0XCIsIFwieVwiLCBcInVcIiwgXCJpXCIsIFwib1wiLCBcInBcIiwgXCJ7XCIsIFwifVwiLCBcIlxcfFwiLCBcImFcIiwgXCJzXCIsIFwiZFwiLCBcImZcIiwgXCJnXCIsIFwiaFwiLCBcImpcIiwgXCJrXCIsIFwibFwiLCBcIjpcIiwgXCImcmRxdW87XCIsIFwielwiLCBcInhcIiwgXCJjXCIsIFwidlwiLCAgXCJiXCIsIFwiblwiLCBcIm1cIiwgXCI8XCIsIFwiPlwiLCBcIj9cIl1cbiAgICAgIHRvcExldHRlcnMgPSBbXCJ+XCIsIFwiIVwiLCBcIkBcIiwgXCIjXCIsIFwiJFwiLCBcIiVcIiwgXCJeXCIsIFwiJlwiLCBcIipcIiwgXCIoXCIsIFwiKVwiLCBcIl9cIiwgXCIrXCJdXG4gICAgICByb3cxQnJlYWsgPSAxM1xuICAgICAgcm93MkJyZWFrID0gMjRcbiAgICBmb3IgbCwgaSBpbiBsZXR0ZXJzXG4gICAgICBrZXkgPSBuZXcgTGV0dGVyXG4gICAgICAgIG5hbWU6bFxuICAgICAgICBjb25zdHJhaW50czpcbiAgICAgICAgICBoZWlnaHQ6c3BlY3MubGV0dGVyS2V5LmhlaWdodFxuICAgICAgICAgIHdpZHRoOnNwZWNzLmxldHRlcktleS53aWR0aFxuICAgICAgICBsZXR0ZXI6bFxuICAgICAgaWYgbCA9PSAndycgfHwgbCA9PSAncicgfHwgbCA9PSAneScgfHwgbCA9PSAnaScgfHwgbCA9PSAncCdcbiAgICAgICAga2V5LmNvbnN0cmFpbnRzLndpZHRoID0ga2V5LmNvbnN0cmFpbnRzLndpZHRoICsgMVxuICAgICAgYm9hcmQua2V5c1tsXSA9IGtleVxuICAgICAgYm9hcmQua2V5c0FycmF5LnB1c2gga2V5XG4gICAgICBpZiBpID09IDBcbiAgICAgICAga2V5LmNvbnN0cmFpbnRzLmxlYWRpbmcgPSBzcGVjcy5yb3cxLmxlYWRpbmdcbiAgICAgICAga2V5LmNvbnN0cmFpbnRzLnRvcCA9IHNwZWNzLnJvdzEudG9wXG4gICAgICBpZiBpID4gMCAmJiBpIDwgcm93MUJyZWFrXG4gICAgICAgIGtleS5jb25zdHJhaW50cy5sZWFkaW5nID0gW2JvYXJkLmtleXNBcnJheVtpIC0gMV0sIHNwZWNzLnNwYWNlXVxuICAgICAgICBrZXkuY29uc3RyYWludHMudG9wID0gc3BlY3Mucm93MS50b3BcbiAgICAgIGlmIGkgPT0gcm93MUJyZWFrXG4gICAgICAgIGtleS5jb25zdHJhaW50cy5sZWFkaW5nID0gc3BlY3Mucm93Mi5sZWFkaW5nXG4gICAgICAgIGtleS5jb25zdHJhaW50cy50b3AgPSBbYm9hcmQua2V5c0FycmF5WzBdLCBzcGVjcy5yb3cyLnRvcF1cbiAgICAgIGlmIGkgPiByb3cxQnJlYWsgJiYgaSA8IHJvdzJCcmVha1xuICAgICAgICBrZXkuY29uc3RyYWludHMubGVhZGluZyA9IFtib2FyZC5rZXlzQXJyYXlbaSAtIDFdLCBzcGVjcy5zcGFjZV1cbiAgICAgICAga2V5LmNvbnN0cmFpbnRzLnRvcCA9IFtib2FyZC5rZXlzQXJyYXlbMF0sIHNwZWNzLnJvdzIudG9wXVxuICAgICAgaWYgaSA9PSByb3cyQnJlYWtcbiAgICAgICAga2V5LmNvbnN0cmFpbnRzLmxlYWRpbmcgPSBzcGVjcy5yb3czLmxlYWRpbmdcbiAgICAgICAga2V5LmNvbnN0cmFpbnRzLnRvcCA9IFtib2FyZC5rZXlzQXJyYXlbcm93MUJyZWFrXSwgc3BlY3Mucm93My50b3BdXG4gICAgICBpZiBpID4gcm93MkJyZWFrXG4gICAgICAgIGtleS5jb25zdHJhaW50cy5sZWFkaW5nID0gW2JvYXJkLmtleXNBcnJheVtpIC0gMV0sIHNwZWNzLnNwYWNlXVxuICAgICAgICBrZXkuY29uc3RyYWludHMudG9wID0gW2JvYXJkLmtleXNBcnJheVtyb3cxQnJlYWtdLCBzcGVjcy5yb3czLnRvcF1cbiAgICAgIGlvcy5sYXlvdXQuc2V0KGtleSlcblxuICAgIGJvYXJkLmtleXMuc2hpZnQgPSBuZXcgU2hpZnRcbiAgICAgIG5hbWU6XCJzaGlmdFwiXG4gICAgICBzaGlmdDpzZXR1cC5zaGlmdFxuICAgICAgY29uc3RyYWludHM6XG4gICAgICAgIGhlaWdodDpzcGVjcy5zcGVjaWFsS2V5SGVpZ2h0XG4gICAgICAgIHdpZHRoOnNwZWNzLnNwZWNpYWxLZXlXaWR0aFxuICAgICAgICBib3R0b21FZGdlczpib2FyZC5rZXlzLnpcblxuICAgIGJvYXJkLmtleXMuZGVsZXRlID0gbmV3IERlbGV0ZVxuICAgICAgbmFtZTpcImRlbGV0ZVwiXG4gICAgICBjb25zdHJhaW50czpcbiAgICAgICAgaGVpZ2h0OnNwZWNzLnNwZWNpYWxLZXlIZWlnaHRcbiAgICAgICAgd2lkdGg6c3BlY3Muc3BlY2lhbEtleVdpZHRoXG4gICAgICAgIGJvdHRvbUVkZ2VzOmJvYXJkLmtleXMuelxuICAgICAgICB0cmFpbGluZzowXG5cbiAgICBib2FyZC5rZXlzLm51bWJlcnMgPSBuZXcgTnVtYmVyc1xuICAgICAgbmFtZTpcIm51bWJlcnNcIlxuICAgICAgY29uc3RyYWludHM6XG4gICAgICAgIGhlaWdodDpzcGVjcy5zcGVjaWFsS2V5SGVpZ2h0XG4gICAgICAgIHdpZHRoOnNwZWNzLnNwZWNpYWxLZXlXaWR0aFxuICAgICAgICBib3R0b206MFxuICAgICAgICBsZWFkaW5nOjBcblxuICAgIGJvYXJkLmtleXMuZW1vamkgPSBuZXcgRW1vamlcbiAgICAgIG5hbWU6XCJlbW9qaVwiXG4gICAgICBjb25zdHJhaW50czpcbiAgICAgICAgaGVpZ2h0OnNwZWNzLnNwZWNpYWxLZXlIZWlnaHRcbiAgICAgICAgd2lkdGg6c3BlY3Muc3BlY2lhbEtleVdpZHRoXG4gICAgICAgIGxlYWRpbmc6W2JvYXJkLmtleXMubnVtYmVycywgc3BlY3Muc3BhY2VdXG4gICAgICAgIGJvdHRvbTowXG5cbiAgICBib2FyZC5rZXlzLnJldHVybiA9IG5ldyBSZXR1cm5cbiAgICAgIG5hbWU6XCJyZXR1cm5cIlxuICAgICAgY29uc3RyYWludHM6XG4gICAgICAgIGJvdHRvbTowXG4gICAgICAgIHRyYWlsaW5nOjBcbiAgICAgICAgd2lkdGg6c3BlY3MucmV0dXJuV2lkdGhcbiAgICAgICAgaGVpZ2h0OnNwZWNzLnNwZWNpYWxLZXlIZWlnaHRcblxuICAgIGJvYXJkLmtleXMuc3BhY2UgPSBuZXcgU3BhY2VcbiAgICAgIG5hbWU6XCJzcGFjZVwiXG4gICAgICBsZXR0ZXI6XCJzcGFjZVwiXG4gICAgICBjb25zdHJhaW50czpcbiAgICAgICAgbGVhZGluZzpbYm9hcmQua2V5cy5lbW9qaSwgc3BlY3Muc3BhY2VdXG4gICAgICAgIHRyYWlsaW5nOltib2FyZC5rZXlzLnJldHVybiwgc3BlY3Muc3BhY2VdXG4gICAgICAgIGJvdHRvbTowXG4gICAgICAgIGhlaWdodDpzcGVjcy5zcGVjaWFsS2V5SGVpZ2h0XG5cblxuICAgIGlmIGlvcy5pc1BhZCgpXG4gICAgICBib2FyZC5rZXlzLnJldHVybi5jb25zdHJhaW50cy5ib3R0b20gPSB1bmRlZmluZWRcbiAgICAgIGJvYXJkLmtleXMucmV0dXJuLmNvbnN0cmFpbnRzLmJvdHRvbUVkZ2VzID0gYm9hcmQua2V5c0FycmF5W3JvdzFCcmVha11cbiAgICAgIGJvYXJkLmtleXMuZGVsZXRlLmNvbnN0cmFpbnRzLnRvcCA9IDBcbiAgICAgIGJvYXJkLmtleXMuZGVsZXRlLmNvbnN0cmFpbnRzLmJvdHRvbUVkZ2VzID0gdW5kZWZpbmVkXG4gICAgICBib2FyZC5rZXlzLmRlbGV0ZS5jb25zdHJhaW50cy53aWR0aCA9IDYxXG5cbiAgICAgIGJvYXJkLmtleXMuc2hpZnRhbHQgPSBuZXcgU2hpZnRcbiAgICAgICAgbmFtZTpcInNoaWZ0YWx0XCJcbiAgICAgICAgc2hpZnQ6c2V0dXAuc2hpZnRcbiAgICAgICAgY29uc3RyYWludHM6XG4gICAgICAgICAgaGVpZ2h0OnNwZWNzLnNwZWNpYWxLZXlIZWlnaHRcbiAgICAgICAgICB3aWR0aDo3NlxuICAgICAgICAgIGJvdHRvbUVkZ2VzOmJvYXJkLmtleXMuelxuICAgICAgICAgIHRyYWlsaW5nOjBcblxuICAgICAgYm9hcmQua2V5cy5kaXNtaXNzID0gbmV3IERpc21pc3NcbiAgICAgICAgbmFtZTpcImRpc21pc3NcIlxuICAgICAgICBjb25zdHJhaW50czpcbiAgICAgICAgICBoZWlnaHQ6c3BlY3Muc3BlY2lhbEtleUhlaWdodFxuICAgICAgICAgIHdpZHRoOnNwZWNzLnNwZWNpYWxLZXlXaWR0aFxuICAgICAgICAgIGJvdHRvbTowXG4gICAgICAgICAgdHJhaWxpbmc6MFxuXG4gICAgICBib2FyZC5rZXlzLm51bWJlcnNhbHQgPSBuZXcgTnVtYmVyc1xuICAgICAgICBuYW1lOlwibnVtYmVyc2FsdFwiXG4gICAgICAgIGNvbnN0cmFpbnRzOlxuICAgICAgICAgIGhlaWdodDpzcGVjcy5zcGVjaWFsS2V5SGVpZ2h0XG4gICAgICAgICAgd2lkdGg6OTNcbiAgICAgICAgICBib3R0b206MFxuICAgICAgICAgIHRyYWlsaW5nOltib2FyZC5rZXlzLmRpc21pc3MsIHNwZWNzLnNwYWNlXVxuXG4gICAgICBib2FyZC5rZXlzLnNwYWNlLmh0bWwgPSBcIlwiXG4gICAgICBib2FyZC5rZXlzLnNwYWNlLmNvbnN0cmFpbnRzLnRyYWlsaW5nID0gW2JvYXJkLmtleXMubnVtYmVyc2FsdCwgc3BlY3Muc3BhY2VdXG5cbiAgICAgIGlvcy5sYXlvdXQuc2V0KClcbiAgICBib2FyZC50b3BSb3cgPSBbXVxuICAgIGlmIGlvcy5kZXZpY2UubmFtZSA9PSAnaXBhZC1wcm8nXG4gICAgICBmb3IgbCxpIGluIHRvcExldHRlcnNcbiAgICAgICAgICB0b3BLZXkgPSBuZXcgTGV0dGVyXG4gICAgICAgICAgICBsZXR0ZXI6bFxuICAgICAgICAgICAgbmFtZTpsXG4gICAgICAgICAgICBjb25zdHJhaW50czpcbiAgICAgICAgICAgICAgaGVpZ2h0OjQ2XG4gICAgICAgICAgICAgIHdpZHRoOjYzXG4gICAgICAgICAgICAgIHRvcDowXG4gICAgICAgICAgaWYgaSA9PSAwXG4gICAgICAgICAgICB0b3BLZXkuY29uc3RyYWludHMubGVhZGluZyA9IDBcbiAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB0b3BLZXkuY29uc3RyYWludHMubGVhZGluZyA9IFtib2FyZC50b3BSb3dbaSAtIDFdLCBzcGVjcy5zcGFjZV1cbiAgICAgICAgICB0b3BLZXkuc3R5bGUubGluZUhlaWdodCA9IGlvcy5weCg0NikgKyAncHgnXG4gICAgICAgICAgaW9zLmxheW91dC5zZXQodG9wS2V5KVxuICAgICAgICAgIGJvYXJkLnRvcFJvdy5wdXNoIHRvcEtleVxuICAgICAgICAgIGJvYXJkLmtleXNBcnJheS5wdXNoIHRvcEtleVxuICAgICAgICAgIGJvYXJkLmtleXNbbF0gPSB0b3BLZXlcblxuICAgICAgYm9hcmQua2V5cy5kZWxldGUuaWNvbi5kZXN0cm95KClcbiAgICAgIGJvYXJkLmtleXMuZGVsZXRlLmh0bWwgPSAnZGVsZXRlJ1xuICAgICAgYm9hcmQua2V5cy5kZWxldGUuc3R5bGUubGluZUhlaWdodCA9IGlvcy5weCg1MykgKyAncHgnXG4gICAgICBib2FyZC5rZXlzLmRlbGV0ZS5zdHlsZS50ZXh0QWxpZ24gPSAncmlnaHQnXG4gICAgICBib2FyZC5rZXlzLmRlbGV0ZS5zdHlsZS5wYWRkaW5nUmlnaHQgPSBpb3MucHgoMTIpICsgJ3B4J1xuICAgICAgYm9hcmQua2V5cy5kZWxldGUuY29uc3RyYWludHMgPVxuICAgICAgICB0b3A6MFxuICAgICAgICB0cmFpbGluZzowXG4gICAgICAgIGhlaWdodDo0NlxuICAgICAgICB3aWR0aDoxMDZcblxuICAgICAgYm9hcmQua2V5cy5zaGlmdC5pY29uLmRlc3Ryb3koKVxuICAgICAgYm9hcmQua2V5cy5zaGlmdC5odG1sID0gJ3NoaWZ0J1xuICAgICAgYm9hcmQua2V5cy5zaGlmdC5zdHlsZS5saW5lSGVpZ2h0ID0gaW9zLnB4KDcwKSArICdweCdcbiAgICAgIGJvYXJkLmtleXMuc2hpZnQuc3R5bGUudGV4dEFsaWduID0gJ2xlZnQnXG4gICAgICBib2FyZC5rZXlzLnNoaWZ0LnN0eWxlLnBhZGRpbmdMZWZ0ID0gaW9zLnB4KDEyKSArICdweCdcbiAgICAgIGJvYXJkLmtleXMuc2hpZnQuY29uc3RyYWludHMud2lkdGggPSAxNTRcblxuICAgICAgYm9hcmQua2V5cy5zaGlmdGFsdC5pY29uLmRlc3Ryb3koKVxuICAgICAgYm9hcmQua2V5cy5zaGlmdGFsdC5odG1sID0gJ3NoaWZ0J1xuICAgICAgYm9hcmQua2V5cy5zaGlmdGFsdC5zdHlsZS5saW5lSGVpZ2h0ID0gaW9zLnB4KDcwKSArICdweCdcbiAgICAgIGJvYXJkLmtleXMuc2hpZnRhbHQuc3R5bGUudGV4dEFsaWduID0gJ3JpZ2h0J1xuICAgICAgYm9hcmQua2V5cy5zaGlmdGFsdC5zdHlsZS5wYWRkaW5nUmlnaHQgPSBpb3MucHgoMTIpICsgJ3B4J1xuICAgICAgYm9hcmQua2V5cy5zaGlmdGFsdC5jb25zdHJhaW50cy53aWR0aCA9IDE1NVxuXG4gICAgICBib2FyZC5rZXlzLmVtb2ppLmljb24uY29uc3RyYWludHMgPSB7bGVhZGluZzoxNSwgYm90dG9tOjExfVxuICAgICAgYm9hcmQua2V5cy5lbW9qaS5jb25zdHJhaW50cyA9XG4gICAgICAgIHdpZHRoOjE0NFxuICAgICAgICBoZWlnaHQ6NjFcbiAgICAgICAgbGVhZGluZzowXG4gICAgICAgIGJvdHRvbTowXG4gICAgICBpb3MubGF5b3V0LnNldCgpXG5cbiAgICAgIGJvYXJkLmtleXMubnVtYmVyc2FsdC5jb25zdHJhaW50cy53aWR0aCA9IDkzXG4gICAgICBib2FyZC5rZXlzLmRpc21pc3MuY29uc3RyYWludHMud2lkdGggPSA5M1xuXG4gICAgICBib2FyZC5rZXlzLmNvbSA9IG5ldyBMZXR0ZXJcbiAgICAgICAgbmFtZTonLmNvbSdcbiAgICAgICAgbGV0dGVyOicuY29tJ1xuICAgICAgICBjb25zdHJhaW50czpcbiAgICAgICAgICBoZWlnaHQ6c3BlY3MubGV0dGVyS2V5LmhlaWdodFxuICAgICAgICAgIHdpZHRoOnNwZWNzLmxldHRlcktleS53aWR0aFxuICAgICAgICAgIGJvdHRvbTowXG4gICAgICAgICAgdHJhaWxpbmc6W2JvYXJkLmtleXMubnVtYmVyc2FsdCwgc3BlY3Muc3BhY2VdXG5cbiAgICAgIGJvYXJkLmtleXMuY29tLnN0eWxlLmZvbnRTaXplID0gaW9zLnB4KDE2KSArICdweCdcblxuICAgICAgYm9hcmQua2V5cy5udW1iZXJzLmNvbnN0cmFpbnRzID1cbiAgICAgICAgd2lkdGg6MTQzXG4gICAgICAgIGhlaWdodDo2MVxuICAgICAgICBsZWFkaW5nOltib2FyZC5rZXlzLmVtb2ppLCBzcGVjcy5zcGFjZV1cbiAgICAgIGJvYXJkLmtleXMubnVtYmVycy5zdHlsZS5saW5lSGVpZ2h0ID0gaW9zLnB4KDcwKSArICdweCdcbiAgICAgIGJvYXJkLmtleXMubnVtYmVycy5zdHlsZS50ZXh0QWxpZ24gPSAnbGVmdCdcbiAgICAgIGJvYXJkLmtleXMubnVtYmVycy5zdHlsZS5wYWRkaW5nTGVmdCA9IGlvcy5weCgxMikgKyAncHgnXG5cblxuICAgICAgYm9hcmQua2V5cy5yZXR1cm4uc3R5bGUubGluZUhlaWdodCA9IGlvcy5weCg3MCkgKyAncHgnXG4gICAgICBib2FyZC5rZXlzLnJldHVybi5zdHlsZS50ZXh0QWxpZ24gPSAncmlnaHQnXG4gICAgICBib2FyZC5rZXlzLnJldHVybi5zdHlsZS5wYWRkaW5nUmlnaHQgPSBpb3MucHgoMTIpICsgJ3B4J1xuXG5cbiAgICAgIGJvYXJkLmtleXMuc3BhY2UuY29uc3RyYWludHMubGVhZGluZyA9IFtib2FyZC5rZXlzLm51bWJlcnMsIHNwZWNzLnNwYWNlXVxuICAgICAgYm9hcmQua2V5cy5zcGFjZS5jb25zdHJhaW50cy50cmFpbGluZyA9IFtib2FyZC5rZXlzLmNvbSwgc3BlY3Muc3BhY2VdXG5cblxuICAgICAgYm9hcmQua2V5cy5jYXBzID0gbmV3IFNoaWZ0XG4gICAgICAgIG5hbWU6J2NhcHMnXG4gICAgICAgIGNhcHM6IHRydWVcbiAgICAgICAgY29uc3RyYWludHM6XG4gICAgICAgICAgaGVpZ2h0OnNwZWNzLnNwZWNpYWxLZXlIZWlnaHRcbiAgICAgICAgICB3aWR0aDoxMTlcbiAgICAgICAgICBib3R0b21FZGdlczpib2FyZC5rZXlzQXJyYXlbcm93MUJyZWFrXVxuICAgICAgYm9hcmQua2V5cy5jYXBzLmljb24uZGVzdHJveSgpXG4gICAgICBib2FyZC5rZXlzLmNhcHMuaHRtbCA9ICdjYXBzIGxvY2snXG4gICAgICBib2FyZC5rZXlzLmNhcHMuc3R5bGUubGluZUhlaWdodCA9IGlvcy5weCg3MCkgKyAncHgnXG4gICAgICBib2FyZC5rZXlzLmNhcHMuc3R5bGUudGV4dEFsaWduID0gJ2xlZnQnXG4gICAgICBib2FyZC5rZXlzLmNhcHMuc3R5bGUucGFkZGluZ0xlZnQgPSBpb3MucHgoMTIpICsgJ3B4J1xuXG5cblxuICAgICAgYm9hcmQua2V5cy5jYXBzLmRvd24gPSAtPlxuICAgICAgICBpZiBib2FyZC5pc0NhcHNMb2NrXG4gICAgICAgICAgYm9hcmQuaXNDYXBzTG9jayA9IGZhbHNlXG4gICAgICAgIGVsc2VcbiAgICAgICAgICBib2FyZC5jYXBzTG9jaygpXG4gICAgICBib2FyZC5rZXlzLmNhcHMub24gRXZlbnRzLlRvdWNoRW5kLCAtPlxuICAgICAgICBib2FyZC5rZXlzLmNhcHMuZG93bigpXG4gICAgICBib2FyZC5rZXlzLmNhcHMudXAgPSAtPlxuICAgICAgICBub3RoaW5nSGFwcGVucyA9IHRydWVcblxuICAgICAgYm9hcmQua2V5cy50YWIgPSBuZXcgVGFiXG4gICAgICAgIG5hbWU6J3RhYidcbiAgICAgICAgY29uc3RyYWludHM6XG4gICAgICAgICAgaGVpZ2h0OnNwZWNzLnNwZWNpYWxLZXlIZWlnaHRcbiAgICAgICAgICB3aWR0aDoxMDZcbiAgICAgICAgICBib3R0b21FZGdlczpib2FyZC5rZXlzQXJyYXlbMF1cblxuICAgICAgaW9zLmxheW91dC5zZXQoKVxuICBpZiBpb3MuaXNQaG9uZSgpXG4gICAgcG9wVXAgPSBpb3MudXRpbHMuc3ZnKGlvcy5hc3NldHMua2V5UG9wVXBbc2V0dXAuc3R5bGVdW2lvcy5kZXZpY2UubmFtZV0pXG4gICAgYm9hcmQucG9wVXAgPSBuZXcgTGF5ZXJcbiAgICAgIGhlaWdodDpwb3BVcC5oZWlnaHRcbiAgICAgIHdpZHRoOnBvcFVwLndpZHRoXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6J3RyYW5zcGFyZW50J1xuICAgICAgbmFtZTonLnBvcFVwJ1xuICAgICAgc3VwZXJMYXllcjpib2FyZC5hcmVhXG4gICAgICB2aXNpYmxlOmZhbHNlXG5cbiAgICBib2FyZC5wb3BVcC5zdmcgPSBuZXcgTGF5ZXJcbiAgICAgIGh0bWw6cG9wVXAuc3ZnXG4gICAgICBoZWlnaHQ6cG9wVXAuaGVpZ2h0XG4gICAgICB3aWR0aDpwb3BVcC53aWR0aFxuICAgICAgc3VwZXJMYXllcjpib2FyZC5wb3BVcFxuICAgICAgbmFtZTonLnN2ZydcbiAgICAgIGJhY2tncm91bmRDb2xvcjondHJhbnNwYXJlbnQnXG5cbiAgICBib2FyZC5wb3BVcC50ZXh0ID0gbmV3IGlvcy5UZXh0XG4gICAgICB0ZXh0OidBJ1xuICAgICAgc3VwZXJMYXllcjpib2FyZC5wb3BVcFxuICAgICAgZm9udFNpemU6c3BlY3MucG9wVXBDaGFyXG4gICAgICBmb250V2VpZ2h0OjMwMFxuICAgICAgY29sb3I6Y29sb3JzLmNvbG9yXG4gICAgICB0ZXh0QWxpZ246J2NlbnRlcidcbiAgICAgIGNvbnN0cmFpbnRzOlxuICAgICAgICBhbGlnbjonaG9yaXpvbnRhbCdcbiAgICAgICAgdG9wOnNwZWNzLnBvcFVwVG9wXG4gICAgICAgIHdpZHRoOmlvcy5wdChwb3BVcC53aWR0aClcblxuICAgIGJvYXJkLnBvcFVwLmNlbnRlcigpXG4gICAgc3dpdGNoIGlvcy5kZXZpY2UubmFtZVxuICAgICAgd2hlbiAnaXBob25lLTZzLXBsdXMnXG4gICAgICAgIGJvYXJkLnBvcFVwLndpZHRoID0gYm9hcmQucG9wVXAud2lkdGggLSAxOFxuICAgICAgICBib2FyZC5wb3BVcC5oZWlnaHQgPSBib2FyZC5wb3BVcC5oZWlnaHQgLSAyNFxuICAgICAgICBib2FyZC5wb3BVcC5zdmcueCA9IGlvcy5weCgtMylcbiAgICAgICAgYm9hcmQucG9wVXAuc3ZnLnkgPSBpb3MucHgoLTMpXG4gICAgICB3aGVuICdpcGhvbmUtNnMnXG4gICAgICAgIGJvYXJkLnBvcFVwLndpZHRoID0gYm9hcmQucG9wVXAud2lkdGggLSAxMlxuICAgICAgICBib2FyZC5wb3BVcC5oZWlnaHQgPSBib2FyZC5wb3BVcC5oZWlnaHQgLSAxMlxuICAgICAgICBib2FyZC5wb3BVcC5zdmcueCA9IGlvcy5weCgtMylcbiAgICAgICAgYm9hcmQucG9wVXAuc3ZnLnkgPSBpb3MucHgoLTIpXG4gICAgICB3aGVuICdpcGhvbmUtNSdcbiAgICAgICAgYm9hcmQucG9wVXAud2lkdGggPSBib2FyZC5wb3BVcC53aWR0aCAtIDEyXG4gICAgICAgIGJvYXJkLnBvcFVwLmhlaWdodCA9IGJvYXJkLnBvcFVwLmhlaWdodCAtIDEyXG4gICAgICAgIGJvYXJkLnBvcFVwLnN2Zy54ID0gaW9zLnB4KC0zKVxuICAgICAgICBib2FyZC5wb3BVcC5zdmcueSA9IGlvcy5weCgtMilcblxuICAgIGNhcGl0YWxpemVLZXlzKClcbiAgYm9hcmQuc3dpdGNoID0gKHN0YXRlKSAtPlxuICAgIHN3aXRjaCBzdGF0ZVxuICAgICAgd2hlbiBcImxldHRlcnNcIlxuICAgICAgICBib2FyZC5zd2l0Y2hMZXR0ZXJzKClcblxuICBib2FyZC5zd2l0Y2goXCJsZXR0ZXJzXCIpXG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciAna2V5ZG93bicsIChlKSAtPlxuICAgIGlmIGFycmF5T2ZDb2Rlcy5pbmRleE9mKGUua2V5Q29kZS50b1N0cmluZygpKSAhPSAtMVxuICAgICAga2V5ID0gYm9hcmQua2V5c1tjb2RlTWFwW2Uua2V5Q29kZV0udG9Mb3dlckNhc2UoKV1cbiAgICAgIGlmIGtleSB0aGVuIGtleS5kb3duKClcbiAgICAgIGlmIGlvcy5pc1BhZCgpXG4gICAgICAgIGlmIGtleSA9PSBib2FyZC5rZXlzLnNoaWZ0IHx8IGtleSA9PSBib2FyZC5rZXlzLnNoaWZ0YWx0XG4gICAgICAgICAgYm9hcmQua2V5cy5zaGlmdC5kb3duKClcbiAgICAgICAgICBib2FyZC5rZXlzLnNoaWZ0YWx0Lmljb24udG9nZ2xlKCdvbicpXG4gICAgICAgICAgaGFuZGxlS2V5Q29sb3IoYm9hcmQua2V5cy5zaGlmdGFsdClcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciAna2V5dXAnLCAoZSkgLT5cbiAgICBpZiBhcnJheU9mQ29kZXMuaW5kZXhPZihlLmtleUNvZGUudG9TdHJpbmcoKSkgIT0gLTFcbiAgICAgIGtleSA9IGJvYXJkLmtleXNbY29kZU1hcFtlLmtleUNvZGVdLnRvTG93ZXJDYXNlKCldXG4gICAgICBpZiBrZXkgdGhlbiBrZXkudXAoKVxuICAgICAgaWYgaW9zLmlzUGFkKClcbiAgICAgICAgaWYga2V5ID09IGJvYXJkLmtleXMuc2hpZnQgfHwga2V5ID09IGJvYXJkLmtleXMuc2hpZnRhbHRcbiAgICAgICAgICBib2FyZC5rZXlzLnNoaWZ0LnVwKClcbiAgICAgICAgICBib2FyZC5rZXlzLnNoaWZ0YWx0Lmljb24udG9nZ2xlKCdvZmYnKVxuICAgICAgICAgIGhhbmRsZUtleUNvbG9yKGJvYXJkLmtleXMuc2hpZnRhbHQpXG4gIGNhcGl0YWxpemVLZXlzKClcbiAgcmV0dXJuIGJvYXJkXG4iLCIjIFV0aWxzXG5cbmlvcyA9IHJlcXVpcmUgJ2lvcy1raXQnXG5cbmV4cG9ydHMuZGVmYXVsdHMgPSB7XG5cdGFuaW1hdGlvbnM6IHtcblx0XHR0YXJnZXQ6dW5kZWZpbmVkXG5cdFx0Y29uc3RyYWludHM6IHVuZGVmaW5lZFxuXHRcdGN1cnZlIDogXCJlYXNlLWluLW91dFwiXG5cdFx0Y3VydmVPcHRpb25zOiB1bmRlZmluZWRcblx0XHR0aW1lOjFcblx0XHRkZWxheTowXG5cdFx0cmVwZWF0OnVuZGVmaW5lZFxuXHRcdGNvbG9yTW9kZWw6dW5kZWZpbmVkXG5cdFx0c3RhZ2dlcjp1bmRlZmluZWRcblx0XHRmYWRlT3V0OmZhbHNlXG5cdFx0ZmFkZUluOmZhbHNlXG5cdH1cbn1cblxubGF5b3V0ID0gKGFycmF5KSAtPlxuXHRzZXR1cCA9IHt9XG5cdHRhcmdldExheWVycyA9IFtdXG5cdGJsdWVwcmludCA9IFtdXG5cdGlmIGFycmF5XG5cdFx0Zm9yIGkgaW4gT2JqZWN0LmtleXMoZXhwb3J0cy5kZWZhdWx0cy5hbmltYXRpb25zKVxuXHRcdFx0aWYgYXJyYXlbaV1cblx0XHRcdFx0c2V0dXBbaV0gPSBhcnJheVtpXVxuXHRcdFx0ZWxzZVxuXHRcdFx0XHRzZXR1cFtpXSA9IGV4cG9ydHMuZGVmYXVsdHMuYW5pbWF0aW9uc1tpXVxuXG5cdGlmIHNldHVwLnRhcmdldFxuXHRcdGlmIHNldHVwLnRhcmdldC5sZW5ndGhcblx0XHRcdHRhcmdldExheWVycyA9IHNldHVwLnRhcmdldFxuXHRcdGVsc2Vcblx0XHRcdHRhcmdldExheWVycy5wdXNoIHNldHVwLnRhcmdldFxuXHRlbHNlXG5cdFx0dGFyZ2V0TGF5ZXJzID0gRnJhbWVyLkN1cnJlbnRDb250ZXh0LmxheWVyc1xuXG5cdGlmIHNldHVwLnRhcmdldFxuXHRcdGlmIHNldHVwLmNvbnN0cmFpbnRzXG5cdFx0XHRmb3IgbmV3Q29uc3RyYWludCBpbiBPYmplY3Qua2V5cyhzZXR1cC5jb25zdHJhaW50cylcblx0XHRcdFx0c2V0dXAudGFyZ2V0LmNvbnN0cmFpbnRzW25ld0NvbnN0cmFpbnRdID0gc2V0dXAuY29uc3RyYWludHNbbmV3Q29uc3RyYWludF1cblxuXG5cdCNUcmFuc2xhdGUgbmV3IGNvbnN0cmFpbnRzXG5cdGZvciBsYXllciwgaW5kZXggaW4gdGFyZ2V0TGF5ZXJzXG5cdFx0bGF5ZXIuY2FsY3VsYXRlZFBvc2l0aW9uID0ge31cblx0XHRpZiBsYXllci5jb25zdHJhaW50c1xuXG5cdFx0XHRwcm9wcyA9IHt9XG5cdFx0XHRsYXllci5zdXBlckZyYW1lID0ge31cblxuXHRcdFx0aWYgbGF5ZXIuc3VwZXJMYXllclxuXHRcdFx0XHRsYXllci5zdXBlckZyYW1lLmhlaWdodCA9IGxheWVyLnN1cGVyTGF5ZXIuaGVpZ2h0XG5cdFx0XHRcdGxheWVyLnN1cGVyRnJhbWUud2lkdGggPSBsYXllci5zdXBlckxheWVyLndpZHRoXG5cdFx0XHRlbHNlXG5cdFx0XHRcdGxheWVyLnN1cGVyRnJhbWUuaGVpZ2h0ID0gaW9zLmRldmljZS5oZWlnaHRcblx0XHRcdFx0bGF5ZXIuc3VwZXJGcmFtZS53aWR0aCA9IGlvcy5kZXZpY2Uud2lkdGhcblxuXHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHMubGVhZGluZyAhPSB1bmRlZmluZWQgJiYgbGF5ZXIuY29uc3RyYWludHMudHJhaWxpbmcgIT0gdW5kZWZpbmVkXG5cdFx0XHRcdGxheWVyLmNvbnN0cmFpbnRzLmF1dG9XaWR0aCA9IHt9XG5cblx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzLnRvcCAhPSB1bmRlZmluZWQgJiYgbGF5ZXIuY29uc3RyYWludHMuYm90dG9tICE9IHVuZGVmaW5lZFxuXHRcdFx0XHRsYXllci5jb25zdHJhaW50cy5hdXRvSGVpZ2h0ID0ge31cblxuXHRcdFx0IyBTaXplIGNvbnN0cmFpbnRzXG5cdFx0XHRpZiBsYXllci5jb25zdHJhaW50cy53aWR0aCAhPSB1bmRlZmluZWRcblx0XHRcdFx0cHJvcHMud2lkdGggPSBpb3MudXRpbHMucHgobGF5ZXIuY29uc3RyYWludHMud2lkdGgpXG5cdFx0XHRlbHNlXG5cdFx0XHRcdHByb3BzLndpZHRoID0gbGF5ZXIud2lkdGhcblxuXHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHMuaGVpZ2h0ICE9IHVuZGVmaW5lZFxuXHRcdFx0XHRwcm9wcy5oZWlnaHQgPSBpb3MudXRpbHMucHgobGF5ZXIuY29uc3RyYWludHMuaGVpZ2h0KVxuXHRcdFx0ZWxzZVxuXHRcdFx0XHRwcm9wcy5oZWlnaHQgPSBsYXllci5oZWlnaHRcblxuXHRcdFx0IyBQb3NpdGlvbmluZyBjb25zdHJhaW50c1xuXHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHMubGVhZGluZyAhPSB1bmRlZmluZWRcblx0XHRcdFx0I0lmIGl0J3MgYSBudW1iZXJgXG5cdFx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzLmxlYWRpbmcgPT0gcGFyc2VJbnQobGF5ZXIuY29uc3RyYWludHMubGVhZGluZywgMTApXG5cdFx0XHRcdFx0cHJvcHMueCA9IGlvcy51dGlscy5weChsYXllci5jb25zdHJhaW50cy5sZWFkaW5nKVxuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0I0lmIGl0J3MgYSBsYXllclxuXHRcdFx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzLmxlYWRpbmcubGVuZ3RoID09IHVuZGVmaW5lZFxuXHRcdFx0XHRcdFx0cHJvcHMueCA9IGxheWVyLmNvbnN0cmFpbnRzLmxlYWRpbmcuY2FsY3VsYXRlZFBvc2l0aW9uLnggKyBsYXllci5jb25zdHJhaW50cy5sZWFkaW5nLmNhbGN1bGF0ZWRQb3NpdGlvbi53aWR0aFxuXHRcdFx0XHRcdCNJZiBpdCdzIGEgcmVsYXRpb25zaGlwXG5cdFx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdFx0cHJvcHMueCA9IGxheWVyLmNvbnN0cmFpbnRzLmxlYWRpbmdbMF0uY2FsY3VsYXRlZFBvc2l0aW9uLnggKyBsYXllci5jb25zdHJhaW50cy5sZWFkaW5nWzBdLmNhbGN1bGF0ZWRQb3NpdGlvbi53aWR0aCArIGlvcy51dGlscy5weChsYXllci5jb25zdHJhaW50cy5sZWFkaW5nWzFdKVxuXG5cdFx0XHQjIE9wcG9zaW5nIGNvbnN0cmFpbnRzIGhhbmRsZXJcblx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzLmF1dG9XaWR0aCAhPSB1bmRlZmluZWRcblx0XHRcdFx0bGF5ZXIuY29uc3RyYWludHMuYXV0b1dpZHRoLnN0YXJ0WCA9IHByb3BzLnhcblxuXHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHMudHJhaWxpbmcgIT0gdW5kZWZpbmVkXG5cdFx0XHRcdCNJZiBpdCdzIGEgbnVtYmVyXG5cdFx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzLnRyYWlsaW5nID09IHBhcnNlSW50KGxheWVyLmNvbnN0cmFpbnRzLnRyYWlsaW5nLCAxMClcblx0XHRcdFx0XHRwcm9wcy54ID0gbGF5ZXIuc3VwZXJGcmFtZS53aWR0aCAtIGlvcy51dGlscy5weChsYXllci5jb25zdHJhaW50cy50cmFpbGluZykgLSBwcm9wcy53aWR0aFxuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0I0lmIGl0J3MgYSBsYXllclxuXHRcdFx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzLnRyYWlsaW5nLmxlbmd0aCA9PSB1bmRlZmluZWRcblx0XHRcdFx0XHRcdHByb3BzLnggPSBsYXllci5jb25zdHJhaW50cy50cmFpbGluZy5jYWxjdWxhdGVkUG9zaXRpb24ueCAtIHByb3BzLndpZHRoXG5cdFx0XHRcdFx0I0lmIGl0J3MgYSByZWxhdGlvbnNoaXBcblx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHRwcm9wcy54ID0gbGF5ZXIuY29uc3RyYWludHMudHJhaWxpbmdbMF0uY2FsY3VsYXRlZFBvc2l0aW9uLnggLSBpb3MudXRpbHMucHgobGF5ZXIuY29uc3RyYWludHMudHJhaWxpbmdbMV0pIC0gcHJvcHMud2lkdGhcblxuXHRcdFx0IyBPcHBvc2luZyBjb25zdHJhaW50cyBoYW5kbGVyXG5cdFx0XHRpZiBsYXllci5jb25zdHJhaW50cy5hdXRvV2lkdGggIT0gdW5kZWZpbmVkXG5cdFx0XHRcdGxheWVyLmNvbnN0cmFpbnRzLmF1dG9XaWR0aC5jYWxjdWxhdGVkUG9zaXRpb25YID0gcHJvcHMueFxuXG5cdFx0XHRcdCMjcGVyZm9ybSBhdXRvc2l6ZVxuXHRcdFx0XHRwcm9wcy54ID0gbGF5ZXIuY29uc3RyYWludHMuYXV0b1dpZHRoLnN0YXJ0WFxuXHRcdFx0XHRwcm9wcy53aWR0aCA9IGxheWVyLmNvbnN0cmFpbnRzLmF1dG9XaWR0aC5jYWxjdWxhdGVkUG9zaXRpb25YIC0gbGF5ZXIuY29uc3RyYWludHMuYXV0b1dpZHRoLnN0YXJ0WCArIHByb3BzLndpZHRoXG5cblx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzLnRvcCAhPSB1bmRlZmluZWRcblx0XHRcdFx0I0lmIGl0J3MgYSBudW1iZXJcblx0XHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHMudG9wID09IHBhcnNlSW50KGxheWVyLmNvbnN0cmFpbnRzLnRvcCwgMTApXG5cdFx0XHRcdFx0cHJvcHMueSA9IGlvcy51dGlscy5weChsYXllci5jb25zdHJhaW50cy50b3ApXG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHQjSWYgaXQncyBhIGxheWVyXG5cdFx0XHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHMudG9wLmxlbmd0aCA9PSB1bmRlZmluZWRcblx0XHRcdFx0XHRcdHByb3BzLnkgPSBsYXllci5jb25zdHJhaW50cy50b3AuY2FsY3VsYXRlZFBvc2l0aW9uLnkgKyBsYXllci5jb25zdHJhaW50cy50b3AuY2FsY3VsYXRlZFBvc2l0aW9uLmhlaWdodFxuXHRcdFx0XHRcdCNJZiBpdCdzIGEgcmVsYXRpb25zaGlwXG5cdFx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdFx0cHJvcHMueSA9IGxheWVyLmNvbnN0cmFpbnRzLnRvcFswXS5jYWxjdWxhdGVkUG9zaXRpb24ueSArIGxheWVyLmNvbnN0cmFpbnRzLnRvcFswXS5jYWxjdWxhdGVkUG9zaXRpb24uaGVpZ2h0ICsgaW9zLnV0aWxzLnB4KGxheWVyLmNvbnN0cmFpbnRzLnRvcFsxXSlcblxuXHRcdFx0IyBPcHBvc2luZyBjb25zdHJhaW50cyBoYW5kbGVyXG5cdFx0XHRpZiBsYXllci5jb25zdHJhaW50cy5hdXRvSGVpZ2h0ICE9IHVuZGVmaW5lZFxuXHRcdFx0XHRsYXllci5jb25zdHJhaW50cy5hdXRvSGVpZ2h0LnN0YXJ0WSA9IHByb3BzLnlcblxuXG5cdFx0XHRpZiBsYXllci5jb25zdHJhaW50cy5ib3R0b20gIT0gdW5kZWZpbmVkXG5cdFx0XHRcdCNJZiBpdCdzIGEgbnVtYmVyXG5cdFx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzLmJvdHRvbSA9PSBwYXJzZUludChsYXllci5jb25zdHJhaW50cy5ib3R0b20sIDEwKVxuXHRcdFx0XHRcdHByb3BzLnkgPSBsYXllci5zdXBlckZyYW1lLmhlaWdodCAtIGlvcy51dGlscy5weChsYXllci5jb25zdHJhaW50cy5ib3R0b20pIC0gcHJvcHMuaGVpZ2h0XG5cblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdCNJZiBpdCdzIGEgbGF5ZXJcblx0XHRcdFx0XHRpZiBsYXllci5jb25zdHJhaW50cy5ib3R0b20ubGVuZ3RoID09IHVuZGVmaW5lZFxuXHRcdFx0XHRcdFx0cHJvcHMueSA9IGxheWVyLmNvbnN0cmFpbnRzLmJvdHRvbS5jYWxjdWxhdGVkUG9zaXRpb24ueSAtIHByb3BzLmhlaWdodFxuXHRcdFx0XHRcdCNJZiBpdCdzIGEgcmVsYXRpb25zaGlwXG5cdFx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdFx0cHJvcHMueSA9IGxheWVyLmNvbnN0cmFpbnRzLmJvdHRvbVswXS5jYWxjdWxhdGVkUG9zaXRpb24ueSAtICBpb3MudXRpbHMucHgobGF5ZXIuY29uc3RyYWludHMuYm90dG9tWzFdKSAtIHByb3BzLmhlaWdodFxuXG5cdFx0XHQjIE9wcG9zaW5nIGNvbnN0cmFpbnRzIGhhbmRsZXJcblx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzLmF1dG9IZWlnaHQgIT0gdW5kZWZpbmVkXG5cdFx0XHRcdGxheWVyLmNvbnN0cmFpbnRzLmF1dG9IZWlnaHQuY2FsY3VsYXRlZFBvc2l0aW9uWSA9IHByb3BzLnlcblx0XHRcdFx0IyMgcGVyZm9ybSBhdXRvc2l6ZVxuXHRcdFx0XHRwcm9wcy5oZWlnaHQgPSBsYXllci5jb25zdHJhaW50cy5hdXRvSGVpZ2h0LmNhbGN1bGF0ZWRQb3NpdGlvblkgLSBsYXllci5jb25zdHJhaW50cy5hdXRvSGVpZ2h0LnN0YXJ0WSArIHByb3BzLmhlaWdodFxuXHRcdFx0XHRwcm9wcy55ID0gbGF5ZXIuY29uc3RyYWludHMuYXV0b0hlaWdodC5zdGFydFlcblxuXG5cdFx0XHQjIEFsaWdubWVudCBjb25zdHJhaW50c1xuXHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHMuYWxpZ24gIT0gdW5kZWZpbmVkXG5cdFx0XHRcdCNTZXQgdGhlIGNlbnRlcmluZyBmcmFtZVxuXHRcdFx0XHRpZiBsYXllci5jb25zdHJhaW50cy5hbGlnbiA9PSBcImhvcml6b250YWxcIlxuXHRcdFx0XHRcdHByb3BzLnggPSBsYXllci5zdXBlckZyYW1lLndpZHRoIC8gMiAtIHByb3BzLndpZHRoIC8gMlxuXG5cdFx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzLmFsaWduID09IFwidmVydGljYWxcIlxuXHRcdFx0XHRcdHByb3BzLnkgPSBsYXllci5zdXBlckZyYW1lLmhlaWdodCAvIDIgLSBwcm9wcy5oZWlnaHQgLyAyXG5cblx0XHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHMuYWxpZ24gPT0gXCJjZW50ZXJcIlxuXHRcdFx0XHRcdHByb3BzLnggPSBsYXllci5zdXBlckZyYW1lLndpZHRoIC8gMiAtIHByb3BzLndpZHRoIC8gMlxuXHRcdFx0XHRcdHByb3BzLnkgPSBsYXllci5zdXBlckZyYW1lLmhlaWdodCAvIDIgLSBwcm9wcy5oZWlnaHQgLyAyXG5cblxuXHRcdFx0IyBDZW50ZXJpbmcgY29uc3RyYWludHNcblx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzLmhvcml6b250YWxDZW50ZXIgIT0gdW5kZWZpbmVkXG5cdFx0XHRcdHByb3BzLnggPSBsYXllci5jb25zdHJhaW50cy5ob3Jpem9udGFsQ2VudGVyLmNhbGN1bGF0ZWRQb3NpdGlvbi54ICsgKGxheWVyLmNvbnN0cmFpbnRzLmhvcml6b250YWxDZW50ZXIuY2FsY3VsYXRlZFBvc2l0aW9uLndpZHRoIC0gcHJvcHMud2lkdGgpIC8gMlxuXG5cdFx0XHRpZiBsYXllci5jb25zdHJhaW50cy52ZXJ0aWNhbENlbnRlciAhPSB1bmRlZmluZWRcblx0XHRcdFx0cHJvcHMueSA9IGxheWVyLmNvbnN0cmFpbnRzLnZlcnRpY2FsQ2VudGVyLmNhbGN1bGF0ZWRQb3NpdGlvbi55ICsgKGxheWVyLmNvbnN0cmFpbnRzLnZlcnRpY2FsQ2VudGVyLmNhbGN1bGF0ZWRQb3NpdGlvbi5oZWlnaHQgLSBwcm9wcy5oZWlnaHQpIC8gMlxuXG5cdFx0XHRpZiBsYXllci5jb25zdHJhaW50cy5jZW50ZXIgIT0gdW5kZWZpbmVkXG5cdFx0XHRcdHByb3BzLnggPSBsYXllci5jb25zdHJhaW50cy5jZW50ZXIuY2FsY3VsYXRlZFBvc2l0aW9uLnggKyAobGF5ZXIuY29uc3RyYWludHMuY2VudGVyLmNhbGN1bGF0ZWRQb3NpdGlvbi53aWR0aCAtIHByb3BzLndpZHRoKSAvIDJcblx0XHRcdFx0cHJvcHMueSA9IGxheWVyLmNvbnN0cmFpbnRzLmNlbnRlci5jYWxjdWxhdGVkUG9zaXRpb24ueSArIChsYXllci5jb25zdHJhaW50cy5jZW50ZXIuY2FsY3VsYXRlZFBvc2l0aW9uLmhlaWdodCAtIHByb3BzLmhlaWdodCkgLyAyXG5cblx0XHRcdCMgQWxpZ25pbmcgY29uc3RyYWludHNcblx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzLmxlYWRpbmdFZGdlcyAhPSB1bmRlZmluZWRcblx0XHRcdFx0cHJvcHMueCA9IGxheWVyLmNvbnN0cmFpbnRzLmxlYWRpbmdFZGdlcy5jYWxjdWxhdGVkUG9zaXRpb24ueFxuXG5cdFx0XHRpZiBsYXllci5jb25zdHJhaW50cy50cmFpbGluZ0VkZ2VzICE9IHVuZGVmaW5lZFxuXHRcdFx0XHRwcm9wcy54ID0gbGF5ZXIuY29uc3RyYWludHMudHJhaWxpbmdFZGdlcy5jYWxjdWxhdGVkUG9zaXRpb24ueCAtIHByb3BzLndpZHRoICsgbGF5ZXIuY29uc3RyYWludHMudHJhaWxpbmdFZGdlcy5jYWxjdWxhdGVkUG9zaXRpb24ud2lkdGhcblxuXG5cdFx0XHRpZiBsYXllci5jb25zdHJhaW50cy50b3BFZGdlcyAhPSB1bmRlZmluZWRcblx0XHRcdFx0cHJvcHMueSA9IGxheWVyLmNvbnN0cmFpbnRzLnRvcEVkZ2VzLmNhbGN1bGF0ZWRQb3NpdGlvbi55XG5cblx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzLmJvdHRvbUVkZ2VzICE9IHVuZGVmaW5lZFxuXHRcdFx0XHRwcm9wcy55ID0gbGF5ZXIuY29uc3RyYWludHMuYm90dG9tRWRnZXMuY2FsY3VsYXRlZFBvc2l0aW9uLnkgLSBwcm9wcy5oZWlnaHQgKyBsYXllci5jb25zdHJhaW50cy5ib3R0b21FZGdlcy5jYWxjdWxhdGVkUG9zaXRpb24uaGVpZ2h0XG5cblxuXHRcdFx0bGF5ZXIuY2FsY3VsYXRlZFBvc2l0aW9uID0gcHJvcHNcblx0XHRlbHNlXG5cdFx0XHRsYXllci5jYWxjdWxhdGVkUG9zaXRpb24gPSBsYXllci5wcm9wc1xuXG5cdFx0Ymx1ZXByaW50LnB1c2ggbGF5ZXJcblxuXG5cdHJldHVybiBibHVlcHJpbnRcblxuZXhwb3J0cy5zZXQgPSAoYXJyYXkpIC0+XG5cdHNldHVwID0ge31cblx0cHJvcHMgPSB7fVxuXHRpZiBhcnJheVxuXHRcdGZvciBpIGluIE9iamVjdC5rZXlzKGV4cG9ydHMuZGVmYXVsdHMuYW5pbWF0aW9ucylcblx0XHRcdGlmIGFycmF5W2ldXG5cdFx0XHRcdHNldHVwW2ldID0gYXJyYXlbaV1cblx0XHRcdGVsc2Vcblx0XHRcdFx0c2V0dXBbaV0gPSBleHBvcnRzLmRlZmF1bHRzLmFuaW1hdGlvbnNbaV1cblxuXHRibHVlcHJpbnQgPSBsYXlvdXQoYXJyYXkpXG5cblx0Zm9yIGxheWVyLCBpbmRleCBpbiBibHVlcHJpbnRcblx0XHRmb3Iga2V5IGluIE9iamVjdC5rZXlzKGxheWVyLmNhbGN1bGF0ZWRQb3NpdGlvbilcblx0XHRcdGxheWVyW2tleV0gPSBsYXllci5jYWxjdWxhdGVkUG9zaXRpb25ba2V5XVxuXG5leHBvcnRzLmFuaW1hdGUgPSAoYXJyYXkpIC0+XG5cdHNldHVwID0ge31cblx0cHJvcHMgPSB7fVxuXHRpZiBhcnJheVxuXHRcdGZvciBpIGluIE9iamVjdC5rZXlzKGV4cG9ydHMuZGVmYXVsdHMuYW5pbWF0aW9ucylcblx0XHRcdGlmIGFycmF5W2ldXG5cdFx0XHRcdHNldHVwW2ldID0gYXJyYXlbaV1cblx0XHRcdGVsc2Vcblx0XHRcdFx0c2V0dXBbaV0gPSBleHBvcnRzLmRlZmF1bHRzLmFuaW1hdGlvbnNbaV1cblxuXHRibHVlcHJpbnQgPSBsYXlvdXQoYXJyYXkpXG5cblx0Zm9yIGxheWVyLCBpbmRleCBpbiBibHVlcHJpbnRcblx0XHQjVGltaW5nXG5cdFx0ZGVsYXkgPSBzZXR1cC5kZWxheVxuXHRcdGlmIHNldHVwLnN0YWdnZXJcblx0XHRcdHN0YWcgPSBzZXR1cC5zdGFnZ2VyXG5cdFx0XHRkZWxheSA9ICgoaW5kZXgpICogc3RhZykgKyBkZWxheVxuXG5cdFx0aWYgc2V0dXAuZmFkZU91dFxuXHRcdFx0aWYgbGF5ZXIgPT0gc2V0dXAuZmFkZU91dFxuXHRcdFx0XHRsYXllci5jYWxjdWxhdGVkUG9zaXRpb24ub3BhY2l0eSA9IDBcblxuXHRcdGlmIHNldHVwLmZhZGVJblxuXHRcdFx0bGF5ZXIuY2FsY3VsYXRlZFBvc2l0aW9uLm9wYWNpdHkgPSAxXG5cblx0XHRsYXllci5hbmltYXRlXG5cdFx0XHRwcm9wZXJ0aWVzOmxheWVyLmNhbGN1bGF0ZWRQb3NpdGlvblxuXHRcdFx0dGltZTpzZXR1cC50aW1lXG5cdFx0XHRkZWxheTpkZWxheVxuXHRcdFx0Y3VydmU6c2V0dXAuY3VydmVcblx0XHRcdHJlcGVhdDpzZXR1cC5yZXBlYXRcblx0XHRcdGNvbG9yTW9kZWw6c2V0dXAuY29sb3JNb2RlbFxuXHRcdFx0Y3VydmVPcHRpb25zOnNldHVwLmN1cnZlT3B0aW9uc1xuXG5cdFx0bGF5ZXIuY2FsY3VsYXRlZFBvc2l0aW9uID0gcHJvcHNcbiIsImlvcyA9IHJlcXVpcmUgXCJpb3Mta2l0XCJcblxuIyBCdWlsZCBMaWJyYXJ5ICBQcm9wZXJ0aWVzXG5sYXllciA9IG5ldyBMYXllclxuZXhwb3J0cy5sYXllclByb3BzID0gT2JqZWN0LmtleXMobGF5ZXIucHJvcHMpXG5leHBvcnRzLmxheWVyUHJvcHMucHVzaCBcInN1cGVyTGF5ZXJcIlxuZXhwb3J0cy5sYXllclByb3BzLnB1c2ggXCJjb25zdHJhaW50c1wiXG5leHBvcnRzLmxheWVyU3R5bGVzID0gT2JqZWN0LmtleXMobGF5ZXIuc3R5bGUpXG5sYXllci5kZXN0cm95KClcblxuZXhwb3J0cy5hc3NldHMgPSB7XG5cdHNoZWV0VGlwOlwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdDxzdmcgd2lkdGg9JzI3cHgnIGhlaWdodD0nMTNweCcgdmlld0JveD0nMCAwIDI3IDEzJyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnPlxuXHQgICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzOS4xICgzMTcyMCkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdCAgICA8dGl0bGU+VHJpYW5nbGU8L3RpdGxlPlxuXHQgICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdCAgICA8ZGVmcz48L2RlZnM+XG5cdCAgICA8ZyBpZD0naU9TLUtpdCcgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCc+XG5cdCAgICAgICAgPGcgaWQ9J05hdmlnYXRpb24tQmFyLUNvcHknIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC0yNjM0LjAwMDAwMCwgLTEyNC4wMDAwMDApJyBmaWxsPScjRkZGRkZGJz5cblx0ICAgICAgICAgICAgPHBhdGggZD0nTTI2NDQuNzE5MTYsMTI1Ljg4MzgzNCBDMjY0Ni4yNTQ5OCwxMjQuMjkxMTM2IDI2NDguNzQ1ODUsMTI0LjI5MTk5MiAyNjUwLjI4MDg0LDEyNS44ODM4MzQgTDI2NjEsMTM3IEwyNjM0LDEzNyBMMjY0NC43MTkxNiwxMjUuODgzODM0IFonIGlkPSdUcmlhbmdsZSc+PC9wYXRoPlxuXHQgICAgICAgIDwvZz5cblx0ICAgIDwvZz5cblx0PC9zdmc+XCJcblx0Ymx1ZXRvb3RoOiBcIjw/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyc/PlxuXHRcdDxzdmcgd2lkdGg9JzdweCcgaGVpZ2h0PScxM3B4JyB2aWV3Qm94PScwIDAgOCAxNScgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJz5cblx0XHRcdDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy42LjEgKDI2MzEzKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHRcdDx0aXRsZT5CbHVldG9vdGg8L3RpdGxlPlxuXHRcdFx0PGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0XHQ8ZGVmcz48L2RlZnM+XG5cdFx0XHRcdDxnIGlkPSdTdGF0dXMtSWNvbnMtKFdoaXRlKScgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTEzNy4wMDAwMDAsIDAuMDAwMDAwKScgZmlsbD0nI0ZGRic+XG5cdFx0XHRcdFx0PHBhdGggZD0nTTE0MC41LDE0LjUgTDE0NSwxMC4yNSBMMTQxLjgsNy41IEwxNDUsNC43NSBMMTQwLjUsMC41IEwxNDAuNSw2LjA3MTQyODU3IEwxMzcuOCwzLjc1IEwxMzcsNC41IEwxNDAuMjU4MzMzLDcuMzc1IEwxMzcsMTAuMjUgTDEzNy44LDExIEwxNDAuNSw4LjY3ODU3MTQzIEwxNDAuNSwxNC41IFogTTE0MS41LDMgTDE0My4zNjY2NjcsNC43NSBMMTQxLjUsNi4yNSBMMTQxLjUsMyBaIE0xNDEuNSw4LjUgTDE0My4zNjY2NjcsMTAuMjUgTDE0MS41LDEyIEwxNDEuNSw4LjUgWicgaWQ9J0JsdWV0b290aCc+PC9wYXRoPlxuXHRcdFx0XHQ8L2c+XG5cdFx0PC9zdmc+XCJcblx0YmF0dGVyeUhpZ2ggOiBcIjw/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyc/PlxuXHRcdDxzdmcgd2lkdGg9JzI1cHgnIGhlaWdodD0nMTBweCcgdmlld0JveD0nMCAwIDI1IDEwJyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnPlxuXHRcdCAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNy4yICgyODI3NikgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdFx0ICAgIDx0aXRsZT5CYXR0ZXJ5PC90aXRsZT5cblx0XHQgICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0ICAgIDxkZWZzPjwvZGVmcz5cblx0XHQgICAgPGcgaWQ9J1N5bWJvbHMnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnPlxuXHRcdCAgICAgICAgPGcgaWQ9J1N0YXR1cy1CYXIvQmxhY2svMTAwJScgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTM0NS4wMDAwMDAsIC01LjAwMDAwMCknIGZpbGw9JyMwMzAzMDMnPlxuXHRcdCAgICAgICAgICAgIDxwYXRoIGQ9J00zNDYuNDkzNzEzLDUuNSBDMzQ1LjY2ODc1OCw1LjUgMzQ1LDYuMTY4MDIxNTUgMzQ1LDcuMDA1MzAzMjQgTDM0NSwxMy40OTQ2OTY4IEMzNDUsMTQuMzI2MDUyOCAzNDUuNjczMzgsMTUgMzQ2LjQ5MzcxMywxNSBMMzY2LjAwNjI4NywxNSBDMzY2LjgzMTI0MiwxNSAzNjcuNSwxNC4zMzE5Nzg0IDM2Ny41LDEzLjQ5NDY5NjggTDM2Ny41LDcuMDA1MzAzMjQgQzM2Ny41LDYuMTczOTQ3MjIgMzY2LjgyNjYyLDUuNSAzNjYuMDA2Mjg3LDUuNSBMMzQ2LjQ5MzcxMyw1LjUgWiBNMzY4LDguNSBMMzY4LDEyIEwzNjguNzUsMTIgQzM2OS4xNjQyMTQsMTIgMzY5LjUsMTEuNjY0NDA1MyAzNjkuNSwxMS4yNTc3NCBMMzY5LjUsOS4yNDIyNTk5OCBDMzY5LjUsOC44MzIzMjExMSAzNjkuMTY3MTAxLDguNSAzNjguNzUsOC41IEwzNjgsOC41IFogTTM0Ni41MDgxNTIsNiBDMzQ1Ljk1MTM2NSw2IDM0NS41LDYuNDU2OTk2OTIgMzQ1LjUsNy4wMDg0NDA1NSBMMzQ1LjUsMTMuNDkxNTU5NCBDMzQ1LjUsMTQuMDQ4NTA1OCAzNDUuOTQ5MDU4LDE0LjUgMzQ2LjUwODE1MiwxNC41IEwzNjUuOTkxODQ4LDE0LjUgQzM2Ni41NDg2MzUsMTQuNSAzNjcsMTQuMDQzMDAzMSAzNjcsMTMuNDkxNTU5NCBMMzY3LDcuMDA4NDQwNTUgQzM2Nyw2LjQ1MTQ5NDIyIDM2Ni41NTA5NDIsNiAzNjUuOTkxODQ4LDYgTDM0Ni41MDgxNTIsNiBaIE0zNDYuNTA2NzQ0LDYuNSBDMzQ2LjIyNjg3Nyw2LjUgMzQ2LDYuNzE2MzcyMDEgMzQ2LDYuOTkyMDk1OTUgTDM0NiwxMy41MDc5MDQxIEMzNDYsMTMuNzc5NjgxMSAzNDYuMjMwMjI1LDE0IDM0Ni41MDY3NDQsMTQgTDM2NS45OTMyNTYsMTQgQzM2Ni4yNzMxMjMsMTQgMzY2LjUsMTMuNzgzNjI4IDM2Ni41LDEzLjUwNzkwNDEgTDM2Ni41LDYuOTkyMDk1OTUgQzM2Ni41LDYuNzIwMzE4ODYgMzY2LjI2OTc3NSw2LjUgMzY1Ljk5MzI1Niw2LjUgTDM0Ni41MDY3NDQsNi41IFonIGlkPSdCYXR0ZXJ5Jz48L3BhdGg+XG5cdFx0ICAgICAgICA8L2c+XG5cdFx0ICAgIDwvZz5cblx0XHQ8L3N2Zz5cIlxuXHRiYXR0ZXJ5TWlkIDogXCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0XHQ8c3ZnIHdpZHRoPScyNXB4JyBoZWlnaHQ9JzEwcHgnIHZpZXdCb3g9JzAgMCAyNSAxMCcgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJz5cblx0XHQgICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjcuMiAoMjgyNzYpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdCAgICA8dGl0bGU+QmF0dGVyeTwvdGl0bGU+XG5cdFx0ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdCAgICA8ZGVmcz48L2RlZnM+XG5cdFx0ICAgIDxnIGlkPSdTeW1ib2xzJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJz5cblx0XHQgICAgICAgIDxnIGlkPSdTdGF0dXMtQmFyL0JsYWNrL0xvdy1Qb3dlcicgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTM0NS4wMDAwMDAsIC01LjAwMDAwMCknIGZpbGw9JyMwMzAzMDMnPlxuXHRcdCAgICAgICAgICAgIDxwYXRoIGQ9J00zNDYuNDkzNzEzLDUuNSBDMzQ1LjY2ODc1OCw1LjUgMzQ1LDYuMTY4MDIxNTUgMzQ1LDcuMDA1MzAzMjQgTDM0NSwxMy40OTQ2OTY4IEMzNDUsMTQuMzI2MDUyOCAzNDUuNjczMzgsMTUgMzQ2LjQ5MzcxMywxNSBMMzY2LjAwNjI4NywxNSBDMzY2LjgzMTI0MiwxNSAzNjcuNSwxNC4zMzE5Nzg0IDM2Ny41LDEzLjQ5NDY5NjggTDM2Ny41LDcuMDA1MzAzMjQgQzM2Ny41LDYuMTczOTQ3MjIgMzY2LjgyNjYyLDUuNSAzNjYuMDA2Mjg3LDUuNSBMMzQ2LjQ5MzcxMyw1LjUgWiBNMzY4LDguNSBMMzY4LDEyIEwzNjguNzUsMTIgQzM2OS4xNjQyMTQsMTIgMzY5LjUsMTEuNjY0NDA1MyAzNjkuNSwxMS4yNTc3NCBMMzY5LjUsOS4yNDIyNTk5OCBDMzY5LjUsOC44MzIzMjExMSAzNjkuMTY3MTAxLDguNSAzNjguNzUsOC41IEwzNjgsOC41IFogTTM0Ni41MDgxNTIsNiBDMzQ1Ljk1MTM2NSw2IDM0NS41LDYuNDU2OTk2OTIgMzQ1LjUsNy4wMDg0NDA1NSBMMzQ1LjUsMTMuNDkxNTU5NCBDMzQ1LjUsMTQuMDQ4NTA1OCAzNDUuOTQ5MDU4LDE0LjUgMzQ2LjUwODE1MiwxNC41IEwzNjUuOTkxODQ4LDE0LjUgQzM2Ni41NDg2MzUsMTQuNSAzNjcsMTQuMDQzMDAzMSAzNjcsMTMuNDkxNTU5NCBMMzY3LDcuMDA4NDQwNTUgQzM2Nyw2LjQ1MTQ5NDIyIDM2Ni41NTA5NDIsNiAzNjUuOTkxODQ4LDYgTDM0Ni41MDgxNTIsNiBaIE0zNDYuNTA5NjUsNi41IEMzNDYuMjI4MTc4LDYuNSAzNDYsNi43MTYzNzIwMSAzNDYsNi45OTIwOTU5NSBMMzQ2LDEzLjUwNzkwNDEgQzM0NiwxMy43Nzk2ODExIDM0Ni4yMjc2NTMsMTQgMzQ2LjUwOTY1LDE0IEwzNTYsMTQgTDM1Niw2LjUgTDM0Ni41MDk2NSw2LjUgWicgaWQ9J0JhdHRlcnknPjwvcGF0aD5cblx0XHQgICAgICAgIDwvZz5cblx0XHQgICAgPC9nPlxuXHRcdDwvc3ZnPlwiXG5cdGJhdHRlcnlMb3cgOiBcIjw/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyc/PlxuXHRcdDxzdmcgd2lkdGg9JzI1cHgnIGhlaWdodD0nMTBweCcgdmlld0JveD0nMCAwIDI1IDEwJyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnPlxuXHRcdCAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNy4yICgyODI3NikgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdFx0ICAgIDx0aXRsZT5CYXR0ZXJ5PC90aXRsZT5cblx0XHQgICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0ICAgIDxkZWZzPjwvZGVmcz5cblx0XHQgICAgPGcgaWQ9J1N5bWJvbHMnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnPlxuXHRcdCAgICAgICAgPGcgaWQ9J1N0YXR1cy1CYXIvQmxhY2svMjAlJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtMzQ1LjAwMDAwMCwgLTUuMDAwMDAwKScgZmlsbD0nIzAzMDMwMyc+XG5cdFx0ICAgICAgICAgICAgPHBhdGggZD0nTTM0Ni40OTM3MTMsNS41IEMzNDUuNjY4NzU4LDUuNSAzNDUsNi4xNjgwMjE1NSAzNDUsNy4wMDUzMDMyNCBMMzQ1LDEzLjQ5NDY5NjggQzM0NSwxNC4zMjYwNTI4IDM0NS42NzMzOCwxNSAzNDYuNDkzNzEzLDE1IEwzNjYuMDA2Mjg3LDE1IEMzNjYuODMxMjQyLDE1IDM2Ny41LDE0LjMzMTk3ODQgMzY3LjUsMTMuNDk0Njk2OCBMMzY3LjUsNy4wMDUzMDMyNCBDMzY3LjUsNi4xNzM5NDcyMiAzNjYuODI2NjIsNS41IDM2Ni4wMDYyODcsNS41IEwzNDYuNDkzNzEzLDUuNSBMMzQ2LjQ5MzcxMyw1LjUgWiBNMzY4LDguNSBMMzY4LDEyIEwzNjguNzUsMTIgQzM2OS4xNjQyMTQsMTIgMzY5LjUsMTEuNjY0NDA1MyAzNjkuNSwxMS4yNTc3NCBMMzY5LjUsOS4yNDIyNTk5OCBDMzY5LjUsOC44MzIzMjExMSAzNjkuMTY3MTAxLDguNSAzNjguNzUsOC41IEwzNjgsOC41IEwzNjgsOC41IFogTTM0Ni41MDgxNTIsNiBDMzQ1Ljk1MTM2NSw2IDM0NS41LDYuNDU2OTk2OTIgMzQ1LjUsNy4wMDg0NDA1NSBMMzQ1LjUsMTMuNDkxNTU5NCBDMzQ1LjUsMTQuMDQ4NTA1OCAzNDUuOTQ5MDU4LDE0LjUgMzQ2LjUwODE1MiwxNC41IEwzNjUuOTkxODQ4LDE0LjUgQzM2Ni41NDg2MzUsMTQuNSAzNjcsMTQuMDQzMDAzMSAzNjcsMTMuNDkxNTU5NCBMMzY3LDcuMDA4NDQwNTUgQzM2Nyw2LjQ1MTQ5NDIyIDM2Ni41NTA5NDIsNiAzNjUuOTkxODQ4LDYgTDM0Ni41MDgxNTIsNiBaIE0zNDYuNDkwNDc5LDYuNSBDMzQ2LjIxOTU5NSw2LjUgMzQ2LDYuNzE2MzcyMDEgMzQ2LDYuOTkyMDk1OTUgTDM0NiwxMy41MDc5MDQxIEMzNDYsMTMuNzc5NjgxMSAzNDYuMjE1MDU3LDE0IDM0Ni40OTA0NzksMTQgTDM1MCwxNCBMMzUwLDYuNSBMMzQ2LjQ5MDQ3OSw2LjUgWicgaWQ9J0JhdHRlcnknPjwvcGF0aD5cblx0XHQgICAgICAgIDwvZz5cblx0XHQgICAgPC9nPlxuXHRcdDwvc3ZnPlwiXG5cdGJhbm5lckJHIDoge1xuXHRcdFwiaXBob25lLTVcIjogXCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0XHRcdDxzdmcgd2lkdGg9JzMyMHB4JyBoZWlnaHQ9JzY4cHgnIHZpZXdCb3g9JzAgMCAzMjAgNjgnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayc+XG5cdFx0XHQgICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjYuMSAoMjYzMTMpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdFx0ICAgIDx0aXRsZT5pcGhvbmU1PC90aXRsZT5cblx0XHRcdCAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHRcdCAgICA8ZGVmcz48L2RlZnM+XG5cdFx0XHQgICAgPGcgaWQ9J1BhZ2UtMScgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCcgZmlsbC1vcGFjaXR5PScwLjknPlxuXHRcdFx0ICAgICAgICA8ZyBpZD0naVBob25lLTUvNVMvNUMnIGZpbGw9JyMxQTFBMUMnPlxuXHRcdFx0ICAgICAgICAgICAgPHBhdGggZD0nTTAsMCBMMzIwLDAgTDMyMCw2OCBMMCw2OCBMMCwwIFogTTE0Miw2MS4wMDQ4ODE1IEMxNDIsNTkuODk3NjE2IDE0Mi44OTYyNzksNTkgMTQ0LjAwMjQsNTkgTDE3Ni45OTc2LDU5IEMxNzguMTAzNDk1LDU5IDE3OSw1OS44OTM4OTk4IDE3OSw2MS4wMDQ4ODE1IEwxNzksNjEuOTk1MTE4NSBDMTc5LDYzLjEwMjM4NCAxNzguMTAzNzIxLDY0IDE3Ni45OTc2LDY0IEwxNDQuMDAyNCw2NCBDMTQyLjg5NjUwNSw2NCAxNDIsNjMuMTA2MTAwMiAxNDIsNjEuOTk1MTE4NSBMMTQyLDYxLjAwNDg4MTUgWicgaWQ9J2lwaG9uZTUnPjwvcGF0aD5cblx0XHRcdCAgICAgICAgPC9nPlxuXHRcdFx0ICAgIDwvZz5cblx0XHRcdDwvc3ZnPlwiXG5cdFx0XCJpcGhvbmUtNnNcIjogXCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0XHRcdFx0PHN2ZyB3aWR0aD0nMzc1cHgnIGhlaWdodD0nNjhweCcgdmlld0JveD0nMCAwIDM3NSA2OCcgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJz5cblx0XHRcdFx0XHQ8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNiAoMjYzMDQpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdFx0XHRcdDx0aXRsZT5Ob3RpZmljYXRpb24gYmFja2dyb3VuZDwvdGl0bGU+XG5cdFx0XHRcdFx0PGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0XHRcdFx0PGRlZnM+PC9kZWZzPlxuXHRcdFx0XHRcdDxnIGlkPSdQYWdlLTEnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIGZpbGwtb3BhY2l0eT0nMC45Jz5cblx0XHRcdFx0XHRcdDxnIGlkPSdpT1M4LVB1c2gtTm90aWZpY2F0aW9uJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtNTguMDAwMDAwLCAtMjMuMDAwMDAwKScgZmlsbD0nIzFBMUExQyc+XG5cdFx0XHRcdFx0XHRcdDxnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDU4LjAwMDAwMCwgNy4wMDAwMDApJyBpZD0nTm90aWZpY2F0aW9uLWNvbnRhaW5lcic+XG5cdFx0XHRcdFx0XHRcdFx0PGc+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cGF0aCBkPSdNMCwxNiBMMzc1LDE2IEwzNzUsODQgTDAsODQgTDAsMTYgWiBNMTY5LDc3LjAwNDg4MTUgQzE2OSw3NS44OTc2MTYgMTY5Ljg5NjI3OSw3NSAxNzEuMDAyNCw3NSBMMjAzLjk5NzYsNzUgQzIwNS4xMDM0OTUsNzUgMjA2LDc1Ljg5Mzg5OTggMjA2LDc3LjAwNDg4MTUgTDIwNiw3Ny45OTUxMTg1IEMyMDYsNzkuMTAyMzg0IDIwNS4xMDM3MjEsODAgMjAzLjk5NzYsODAgTDE3MS4wMDI0LDgwIEMxNjkuODk2NTA1LDgwIDE2OSw3OS4xMDYxMDAyIDE2OSw3Ny45OTUxMTg1IEwxNjksNzcuMDA0ODgxNSBaJyBpZD0nTm90aWZpY2F0aW9uLWJhY2tncm91bmQnPjwvcGF0aD5cblx0XHRcdFx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdDwvc3ZnPlwiXG5cdFx0XCJpcGhvbmUtNnMtcGx1c1wiIDogXCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0XHRcdFx0PHN2ZyB3aWR0aD0nNDE0cHgnIGhlaWdodD0nNjhweCcgdmlld0JveD0nMCAwIDQxNCA2OCcgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJz5cblx0XHRcdFx0PCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjYgKDI2MzA0KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHRcdFx0PHRpdGxlPk5vdGlmaWNhdGlvbiBiYWNrZ3JvdW5kIENvcHk8L3RpdGxlPlxuXHRcdFx0XHQ8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHRcdFx0PGRlZnM+PC9kZWZzPlxuXHRcdFx0XHQ8ZyBpZD0nUGFnZS0xJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJyBmaWxsLW9wYWNpdHk9JzAuOSc+XG5cdFx0XHRcdFx0PGcgaWQ9J2lPUzgtUHVzaC1Ob3RpZmljYXRpb24nIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC00My4wMDAwMDAsIC03NC4wMDAwMDApJyBmaWxsPScjMUExQTFDJz5cblx0XHRcdFx0XHRcdDxnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDQzLjAwMDAwMCwgNzQuMDAwMDAwKScgaWQ9J05vdGlmaWNhdGlvbi1jb250YWluZXInPlxuXHRcdFx0XHRcdFx0XHQ8Zz5cblx0XHRcdFx0XHRcdFx0XHQ8cGF0aCBkPSdNMCwwIEw0MTQsMCBMNDE0LDY4IEwwLDY4IEwwLDAgWiBNMTg5LDYxLjAwNDg4MTUgQzE4OSw1OS44OTc2MTYgMTg5Ljg5NjI3OSw1OSAxOTEuMDAyNCw1OSBMMjIzLjk5NzYsNTkgQzIyNS4xMDM0OTUsNTkgMjI2LDU5Ljg5Mzg5OTggMjI2LDYxLjAwNDg4MTUgTDIyNiw2MS45OTUxMTg1IEMyMjYsNjMuMTAyMzg0IDIyNS4xMDM3MjEsNjQgMjIzLjk5NzYsNjQgTDE5MS4wMDI0LDY0IEMxODkuODk2NTA1LDY0IDE4OSw2My4xMDYxMDAyIDE4OSw2MS45OTUxMTg1IEwxODksNjEuMDA0ODgxNSBaJyBpZD0nTm90aWZpY2F0aW9uLWJhY2tncm91bmQtQ29weSc+PC9wYXRoPlxuXHRcdFx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHQ8L2c+XG5cdFx0XHQ8L3N2Zz5cIlxuXHRcdFwiaXBhZFwiIDogXCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0XHRcdFx0PHN2ZyB3aWR0aD0nNzY4cHgnIGhlaWdodD0nNjhweCcgdmlld0JveD0nMCAwIDc2OCA2OCcgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJz5cblx0XHRcdFx0ICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy42LjEgKDI2MzEzKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHRcdFx0ICAgIDx0aXRsZT5pcGFkLXBvcnRyYWl0PC90aXRsZT5cblx0XHRcdFx0ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdFx0XHQgICAgPGRlZnM+PC9kZWZzPlxuXHRcdFx0XHQgICAgPGcgaWQ9J1BhZ2UtMScgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCcgZmlsbC1vcGFjaXR5PScwLjknPlxuXHRcdFx0XHQgICAgICAgIDxnIGlkPSdpUGFkLVBvcnRyYWl0JyBmaWxsPScjMUExQTFDJz5cblx0XHRcdFx0ICAgICAgICAgICAgPHBhdGggZD0nTTAsMCBMNzY4LDAgTDc2OCw2OCBMMCw2OCBMMCwwIFogTTM2Niw2MS4wMDQ4ODE1IEMzNjYsNTkuODk3NjE2IDM2Ni44OTYyNzksNTkgMzY4LjAwMjQsNTkgTDQwMC45OTc2LDU5IEM0MDIuMTAzNDk1LDU5IDQwMyw1OS44OTM4OTk4IDQwMyw2MS4wMDQ4ODE1IEw0MDMsNjEuOTk1MTE4NSBDNDAzLDYzLjEwMjM4NCA0MDIuMTAzNzIxLDY0IDQwMC45OTc2LDY0IEwzNjguMDAyNCw2NCBDMzY2Ljg5NjUwNSw2NCAzNjYsNjMuMTA2MTAwMiAzNjYsNjEuOTk1MTE4NSBMMzY2LDYxLjAwNDg4MTUgWicgaWQ9J2lwYWQtcG9ydHJhaXQnPjwvcGF0aD5cblx0XHRcdFx0ICAgICAgICA8L2c+XG5cdFx0XHRcdCAgICA8L2c+XG5cdFx0XHRcdDwvc3ZnPlwiXG5cdFx0XCJpcGFkLXByb1wiIDogXCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0XHRcdFx0PHN2ZyB3aWR0aD0nMTAyNHB4JyBoZWlnaHQ9JzY4cHgnIHZpZXdCb3g9JzAgMCAxMDI0IDY4JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnPlxuXHRcdFx0XHQgICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjYuMSAoMjYzMTMpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdFx0XHQgICAgPHRpdGxlPmlwYWQtcHJvLXBvcnRyYWl0PC90aXRsZT5cblx0XHRcdFx0ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdFx0XHQgICAgPGRlZnM+PC9kZWZzPlxuXHRcdFx0XHQgICAgPGcgaWQ9J1BhZ2UtMScgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCcgZmlsbC1vcGFjaXR5PScwLjknPlxuXHRcdFx0XHQgICAgICAgIDxnIGlkPSdpUGFkLVByby1Qb3J0cmFpdCcgZmlsbD0nIzFBMUExQyc+XG5cdFx0XHRcdCAgICAgICAgICAgIDxwYXRoIGQ9J00wLDAgTDEwMjQsMCBMMTAyNCw2OCBMMCw2OCBMMCwwIFogTTQ5NCw2MS4wMDQ4ODE1IEM0OTQsNTkuODk3NjE2IDQ5NC44OTYyNzksNTkgNDk2LjAwMjQsNTkgTDUyOC45OTc2LDU5IEM1MzAuMTAzNDk1LDU5IDUzMSw1OS44OTM4OTk4IDUzMSw2MS4wMDQ4ODE1IEw1MzEsNjEuOTk1MTE4NSBDNTMxLDYzLjEwMjM4NCA1MzAuMTAzNzIxLDY0IDUyOC45OTc2LDY0IEw0OTYuMDAyNCw2NCBDNDk0Ljg5NjUwNSw2NCA0OTQsNjMuMTA2MTAwMiA0OTQsNjEuOTk1MTE4NSBMNDk0LDYxLjAwNDg4MTUgWicgaWQ9J2lwYWQtcHJvLXBvcnRyYWl0Jz48L3BhdGg+XG5cdFx0XHRcdCAgICAgICAgPC9nPlxuXHRcdFx0XHQgICAgPC9nPlxuXHRcdFx0XHQ8L3N2Zz5cIlxuXHR9XG5cdGVtb2ppQ29kZXM6IFtcIjk4IDgwXCIsIFwiOTggQUNcIiwgXCI5OCA4MVwiLCBcIjk4IDgyXCIsIFwiOTggODNcIiwgXCI5OCA4NFwiLCBcIjk4IDg1XCIsIFwiOTggODZcIiwgXCI5OCA4N1wiLCBcIjk4IDg5XCIsIFwiOTggOGFcIiwgXCI5OSA4MlwiLCBcIjk5IDgzXCIsIFwiRTIgOTggQkEgRUYgQjggOEZcIiwgXCI5OCA4QlwiICwgXCI5OCA4Q1wiLCBcIjk4IDhEXCIsIFwiOTggOThcIiwgXCI5OCA5N1wiLCBcIjk4IDk5XCIsIFwiOTggOUFcIiwgXCI5OCA5Q1wiLCBcIjk4IDlEXCIsIFwiOTggOUJcIiwgXCJBNCA5MVwiLCBcIkE0IDkzXCIsIFwiOTggOEVcIiwgXCJBNCA5N1wiLCBcIjk4IDhGXCIsIFwiOTggQjZcIiwgXCI5OCA5MFwiLCBcIjk4IDkxXCIsIFwiOTggOTJcIiwgXCI5OSA4NFwiLCBcIkE0IDk0XCIsIFwiOTggQjNcIiwgXCI5OCA5RVwiLCBcIjk4IDlGXCIsIFwiOTggQTBcIiwgXCI5OCBBMVwiLCBcIjk4IDk0XCIsIFwiOTggOTVcIiwgXCI5OSA4MVwiLCBcIkUyIDk4IEI5IEVGIEI4IDhGXCIsIFwiOTggQTNcIiwgXCI5OCA5NlwiLCBcIjk4IEFCXCIsIFwiOTggQTlcIiwgXCI5OCBBNFwiLCBcIjk4IEFFXCIsIFwiOTggQjFcIiwgXCI5OCBBOFwiLCBcIjk4IEIwXCIsIFwiOTggQUZcIiwgXCI5OCBBNlwiLCBcIjk4IEE3XCIsIFwiOTggQTJcIiwgXCI5OCBBNVwiLCBcIjk4IEFBXCIsIFwiOTggOTNcIiwgXCI5OCBBRFwiLCBcIjk4IEI1XCIsIFwiOTggQjJcIiwgXCJBNCA5MFwiLCBcIjk4IEI3XCIsIFwiQTQgOTJcIiwgXCJBNCA5NVwiLCBcIjk4IEI0XCIsIFwiOTIgQTRcIiwgXCI5MiBBOVwiLCBcIjk4IDg4XCIsIFwiOTEgQkZcIiwgXCI5MSBCOVwiLCBcIjkxIEJBXCIsIFwiOTIgODBcIiwgXCI5MSBCQlwiLCBcIjkxIEJEXCIsIFwiQTQgOTZcIiwgXCI5OCBCQVwiLCBcIjk4IEI4XCIsIFwiOTggQjlcIiwgXCI5OCBCQlwiLCBcIjk4IEJDXCIsIFwiOTggQkRcIiwgXCI5OSA4MFwiLCBcIjk4IEJGXCIsIFwiOTggQkVcIiwgXCI5OSA4Q1wiLCBcIjkxIDhGXCIsIFwiOTEgOEJcIiwgXCI5MSA4RFwiLCBcIjkxIDhFXCIsIFwiOTEgOEFcIiwgXCJFMiA5QyA4QVwiLCBcIkUyIDlDIDhDIEVGIEI4IDhGXCIsIFwiOTEgOENcIiwgXCJFMiA5QyA4QlwiLCBcIjkxIDkwXCIsIFwiOTIgQUFcIiwgXCI5OSA4RlwiLCBcIkUyIDk4IDlEIEVGIEI4IDhGXCIsIFwiOTEgODZcIiwgXCI5MSA4N1wiLCBcIjkxIDg4XCIsIFwiOTEgODlcIiwgXCI5NiA5NVwiLCBcIjk2IDkwXCIsIFwiQTQgOThcIiwgXCI5NiA5NlwiLCBcIkUyIDlDIDhEIEVGIEI4IDhGXCIsIFwiOTIgODVcIiwgXCI5MSA4NFwiLCBcIjkxIDg1XCIsIFwiOTEgODJcIiwgXCI5MSA4M1wiLCBcIjkxIDgxXCIsIFwiOTEgODBcIiwgXCI5MSBBNFwiLCBcIjkxIEE1XCIsIFwiOTcgQTNcIiwgXCI5MSBCNlwiLCBcIjkxIEE2XCIsIFwiOTEgQTdcIiwgXCI5MSBBOFwiLCBcIjkxIEE5XCIsIFwiOTEgQjFcIiwgXCI5MSBCNFwiLCBcIjkxIEI1XCIsIFwiOTEgQjJcIiwgXCI5MSBCM1wiLCBcIjkxIEFFXCIsIFwiOTEgQjdcIiwgXCI5MiA4MlwiLCBcIjk1IEI1XCIsIFwiOEUgODVcIiwgXCI5MSBCQ1wiLCBcIjkxIEI4XCIsIFwiOTEgQjBcIiwgXCI5QSBCNlwiLCBcIjhGIDgzXCIsIFwiOTIgODNcIiwgXCI5MSBBRlwiLCBcIjkxIEFCXCIsIFwiOTEgQUNcIiwgXCI5MSBBRFwiLCBcIjk5IDg3XCIsIFwiOTIgODFcIiwgXCI5OSA4NVwiLCBcIjk5IDg2XCIsIFwiOTkgOEJcIiwgXCI5OSA4RVwiLCBcIjk5IDhEXCIsIFwiOTIgODdcIiwgXCI5MiA4NlwiLCBcIjkyIDkxXCIsIFwiOTEgQTkgRTIgODAgOEQgRTIgOUQgQTQgRUYgQjggOEYgRTIgODAgOEQgRjAgOUYgOTEgQTlcIiwgXCI5MSBBOCBFMiA4MCA4RCBFMiA5RCBBNCBFRiBCOCA4RiBFMiA4MCA4RCBGMCA5RiA5MSBBOFwiLCBcIjkyIDhGXCIsIFwiOTEgQTkgRTIgODAgOEQgRTIgOUQgQTQgRUYgQjggOEYgRTIgODAgOEQgRjAgOUYgOTIgOEIgRTIgODAgOEQgRjAgOUYgOTEgQTlcIiwgXCI5MSBBOCBFMiA4MCA4RCBFMiA5RCBBNCBFRiBCOCA4RiBFMiA4MCA4RCBGMCA5RiA5MiA4QiBFMiA4MCA4RCBGMCA5RiA5MSBBOFwiLCBcIjkxIEFBXCIsIFwiOTEgQTggRTIgODAgOEQgRjAgOUYgOTEgQTkgRTIgODAgOEQgRjAgOUYgOTEgQTdcIiwgXCI5MSBBOCBFMiA4MCA4RCBGMCA5RiA5MSBBOSBFMiA4MCA4RCBGMCA5RiA5MSBBNyBFMiA4MCA4RCBGMCA5RiA5MSBBNlwiLCBcIjkxIEE4IEUyIDgwIDhEIEYwIDlGIDkxIEE5IEUyIDgwIDhEIEYwIDlGIDkxIEE2IEUyIDgwIDhEIEYwIDlGIDkxIEE2XCIsIFwiOTEgQTggRTIgODAgOEQgRjAgOUYgOTEgQTkgRTIgODAgOEQgRjAgOUYgOTEgQTcgRTIgODAgOEQgRjAgOUYgOTEgQTdcIiwgXCI5MSBBOSBFMiA4MCA4RCBGMCA5RiA5MSBBOSBFMiA4MCA4RCBGMCA5RiA5MSBBNlwiLCBcIjkxIEE5IEUyIDgwIDhEIEYwIDlGIDkxIEE5IEUyIDgwIDhEIEYwIDlGIDkxIEE3XCIsIFwiOTEgQTkgRTIgODAgOEQgRjAgOUYgOTEgQTkgRTIgODAgOEQgRjAgOUYgOTEgQTcgRTIgODAgOEQgRjAgOUYgOTEgQTZcIiwgXCI5MSBBOSBFMiA4MCA4RCBGMCA5RiA5MSBBOSBFMiA4MCA4RCBGMCA5RiA5MSBBNiBFMiA4MCA4RCBGMCA5RiA5MSBBNlwiLCBcIjkxIEE5IEUyIDgwIDhEIEYwIDlGIDkxIEE5IEUyIDgwIDhEIEYwIDlGIDkxIEE3IEUyIDgwIDhEIEYwIDlGIDkxIEE3XCIsIFwiOTEgQTggRTIgODAgOEQgRjAgOUYgOTEgQTggRTIgODAgOEQgRjAgOUYgOTEgQTZcIiwgXCI5MSBBOCBFMiA4MCA4RCBGMCA5RiA5MSBBOCBFMiA4MCA4RCBGMCA5RiA5MSBBN1wiLCBcIjkxIEE4IEUyIDgwIDhEIEYwIDlGIDkxIEE4IEUyIDgwIDhEIEYwIDlGIDkxIEE3IEUyIDgwIDhEIEYwIDlGIDkxIEE2XCIsIFwiOTEgQTggRTIgODAgOEQgRjAgOUYgOTEgQTggRTIgODAgOEQgRjAgOUYgOTEgQTYgRTIgODAgOEQgRjAgOUYgOTEgQTZcIiwgXCI5MSBBOCBFMiA4MCA4RCBGMCA5RiA5MSBBOCBFMiA4MCA4RCBGMCA5RiA5MSBBNyBFMiA4MCA4RCBGMCA5RiA5MSBBN1wiLCBcIjkxIDlBXCIsIFwiOTEgOTVcIiwgXCI5MSA5NlwiLCBcIjkxIDk0XCIsIFwiOTEgOTdcIiwgXCI5MSA5OVwiLCBcIjkxIDk4XCIsIFwiOTIgODRcIiwgXCI5MiA4QlwiLCBcIjkxIEEzXCIsIFwiOTEgQTBcIiwgXCI5MSBBMVwiLCBcIjkxIEEyXCIsIFwiOTEgOUVcIiwgXCI5MSA5RlwiLCBcIjkxIDkyXCIsIFwiOEUgQTlcIiwgXCJFMiA5QiA5MVwiLCBcIjhFIDkzXCIsIFwiOTEgOTFcIiwgXCI4RSA5MlwiLCBcIjkxIDlEXCIsIFwiOTEgOUJcIiwgXCI5MSA5Q1wiLCBcIjkyIEJDXCIsIFwiOTEgOTNcIiwgXCI5NSBCNlwiLCBcIjkyIDhEXCIsIFwiOEMgODJcIiwgXCI5QiA5MVwiLCBcIjkwIEI2XCIsIFwiOTAgQjFcIiwgXCI5MCBBRFwiLCBcIjkwIEI5XCIsIFwiOTAgQjBcIiwgXCI5MCBCQlwiLCBcIjkwIEJDXCIsIFwiOTAgQThcIiwgXCI5MCBBRlwiLCBcIkE2IDgxXCIsIFwiOTAgQUVcIiwgXCI5MCBCN1wiLCBcIjkwIEJEXCIsIFwiOTAgQjhcIiwgXCI5MCA5OVwiLCBcIjkwIEI1XCIsIFwiOTkgODhcIiwgXCI5OSA4OVwiLCBcIjk5IDhBXCIsIFwiOTAgOTJcIiwgXCI5MCA5NFwiLCBcIjkwIEE3XCIsIFwiOTAgQTZcIiwgXCI5MCBBNFwiLCBcIjkwIEEzXCIsIFwiOTAgQTVcIiwgXCI5MCBCQVwiLCBcIjkwIDk3XCIsIFwiOTAgQjRcIiwgXCJBNiA4NFwiLCBcIjkwIDlEXCIsIFwiOTAgOUJcIiwgXCI5MCA4Q1wiLCBcIjkwIDlFXCIsIFwiOTAgOUNcIiwgXCI5NSBCN1wiLCBcIkE2IDgyXCIsIFwiQTYgODBcIiwgXCI5MCA4RFwiLCBcIjkwIEEyXCIsIFwiOTAgQTBcIiwgXCI5MCA5RlwiLCBcIjkwIEExXCIsIFwiOTAgQUNcIiwgXCI5MCBCM1wiLCBcIjkwIDhCXCIsIFwiOTAgOEFcIiwgXCI5MCA4NlwiLCBcIjkwIDg1XCIsIFwiOTAgODNcIiwgXCI5MCA4MlwiLCBcIjkwIDg0XCIsIFwiOTAgQUFcIiwgXCI5MCBBQlwiLCBcIjkwIDk4XCIsIFwiOTAgOTBcIiwgXCI5MCA4RlwiLCBcIjkwIDkxXCIsIFwiOTAgOEVcIiwgXCI5MCA5NlwiLCBcIjkwIDgwXCIsIFwiOTAgODFcIiwgXCI5MCA5M1wiLCBcIkE2IDgzXCIsIFwiOTUgOEFcIiwgXCI5MCA5NVwiLCBcIjkwIEE5XCIsIFwiOTAgODhcIiwgXCI5MCA4N1wiLCBcIjkwIEJGXCIsIFwiOTAgQkVcIiwgXCI5MCA4OVwiLCBcIjkwIEIyXCIsIFwiOEMgQjVcIiwgXCI4RSA4NFwiLCBcIjhDIEIyXCIsIFwiOEMgQjNcIiwgXCI4QyBCNFwiLCBcIjhDIEIxXCIsIFwiOEMgQkZcIiwgXCJFMiA5OCA5OFwiLCBcIjhEIDgwXCIsIFwiOEUgOERcIiwgXCI4RSA4QlwiLCBcIjhEIDgzXCIsIFwiOEQgODJcIiwgXCI4RCA4MVwiLCBcIjhDIEJFXCIsIFwiOEMgQkFcIiwgXCI4QyBCQVwiLCBcIjhDIEJCXCIsIFwiOEMgQjlcIiwgXCI4QyBCN1wiLCBcIjhDIEJDXCIsIFwiOEMgQjhcIiwgXCI5MiA5MFwiLCBcIjhEIDg0XCIsIFwiOEMgQjBcIiwgXCI4RSA4M1wiLCBcIjkwIDlBXCIsIFwiOTUgQjhcIiwgXCI4QyA4RVwiLCBcIjhDIDhEXCIsIFwiOEMgOEZcIiwgXCI4QyA5NVwiLCBcIjhDIDk2XCIsIFwiOEMgOTdcIiwgXCI4QyA5OFwiLCBcIjhDIDkxXCIsIFwiOEMgOTJcIiwgXCI4QyA5M1wiLCBcIjhDIDk0XCIsIFwiOEMgOUFcIiwgXCI4QyA5RFwiLCBcIjhDIDlCXCIsIFwiOEMgOUNcIiwgXCI4QyA5RVwiLCBcIjhDIDk5XCIsIFwiRTIgQUQgOTAgRUYgQjggOEZcIiwgXCI4QyA5RlwiLCBcIjkyIEFCXCIsIFwiRTIgOUMgQThcIiwgXCJFMiA5OCA4NCBFRiBCOCA4RlwiLCBcIkUyIDk4IDgwIEVGIEI4IDhGXCIsIFwiOEMgQTRcIiwgXCJFMiA5QiA4NSBFRiBCOCA4RlwiLCBcIjhDIEE1XCIsIFwiOEMgQTZcIiwgXCJFMiA5OCA4MSBFRiBCOCA4RlwiLCBcIjhDIEE3XCIsIFwiRTIgOUIgODhcIiwgXCI4QyBBOVwiLCBcIkUyIDlBIEExIEVGIEI4IDhGXCIsIFwiOTQgQTVcIiwgXCI5MiBBNVwiLCBcIkUyIDlEIDg0IEVGIEI4IDhGXCIsIFwiOEMgQThcIiwgXCJFMiA5OCA4MyBFRiBCOCA4RlwiLCBcIkUyIDlCIDg0IEVGIEI4IDhGXCIsIFwiOEMgQUNcIiwgXCI5MiBBOFwiLCBcIjhDIEFBXCIsIFwiOEMgQUJcIiwgXCJFMiA5OCA4MiBFRiBCOCA4RlwiLCBcIkUyIDk4IDk0IEVGIEI4IDhGXCIsIFwiOTIgQTdcIiwgXCI5MiBBNlwiLCBcIjhDIDhBXCIsIFwiOUIgOTFcIiwgXCI5QiA5MVwiLCBcIjhEIDhGXCIsIFwiOEQgOEVcIiwgXCI4RCA5MFwiLCBcIjhEIDhBXCIsIFwiOEQgOEJcIiwgXCI4RCA4Q1wiLCBcIjhEIDg5XCIsIFwiOEQgODdcIiwgXCI4RCA5M1wiLCBcIjhEIDg4XCIsIFwiOEQgOTJcIiwgXCI4RCA5MVwiLCBcIjhEIDhEXCIsIFwiOEQgODVcIiwgXCI4RCA4NlwiLCBcIjhDIEI2XCIsIFwiOEMgQkRcIiwgXCI4RCBBMFwiLCBcIjhEIEFGXCIsIFwiOEQgOUVcIiwgXCJBNyA4MFwiLCBcIjhEIDk3XCIsIFwiOEQgOTZcIiwgXCI4RCBBNFwiLCBcIjhEIEIzXCIsIFwiOEQgOTRcIiwgXCI4RCA5RlwiLCBcIjhDIEFEXCIsIFwiOEQgOTVcIiwgXCI4RCA5RFwiLCBcIjhDIEFFXCIsIFwiOEMgQUZcIiwgXCI4RCA5Q1wiLCBcIjhEIEIyXCIsIFwiOEQgQTVcIiwgXCI4RCBBM1wiLCBcIjhEIEIxXCIsIFwiOEQgOUJcIiwgXCI4RCA5OVwiLCBcIjhEIDlBXCIsIFwiOEQgOThcIiwgXCI4RCBBMlwiLCBcIjhEIEExXCIsIFwiOEQgQTdcIiwgXCI4RCBBOFwiLCBcIjhEIEE2XCIsIFwiOEQgQjBcIiwgXCI4RSA4MlwiLCBcIjhEIEFFXCIsIFwiOEQgQUNcIiwgXCI4RCBBRFwiLCBcIjhEIEFCXCIsIFwiOEQgQkZcIiwgXCI4RCBBOVwiLCBcIjhEIEFBXCIsIFwiOEQgQkFcIiwgXCI4RCBCQlwiLCBcIjhEIEI3XCIsIFwiOEQgQjhcIiwgXCI4RCBCOVwiLCBcIjhEIEJFXCIsIFwiOEQgQjZcIiwgXCI4RCBCNVwiLCBcIkUyIDk4IDk1IEVGIEI4IDhGXCIsIFwiOEQgQkNcIiwgXCI4RCBCNFwiLCBcIjhEIEJEXCIsXCI5QiA5MVwiLCBcIjlCIDkxXCIsIFwiOUIgOTFcIiwgXCJFMiA5QSBCRCBFRiBCOCA4RlwiLCBcIjhGIDgwXCIsIFwiOEYgODhcIiwgXCJFMiA5QSBCRSBFRiBCOCA4RlwiLCBcIjhFIEJFXCIsIFwiOEYgOTBcIiwgXCI4RiA4OVwiLCBcIjhFIEIxXCIsIFwiRTIgOUIgQjMgRUYgQjggOEZcIiwgXCI4RiA4Q1wiLCBcIjhGIDkzXCIsIFwiOEYgQjhcIiwgXCI4RiA5MlwiLCBcIjhGIDkxXCIsIFwiOEYgOEZcIiwgXCI4RSBCRlwiLCBcIkUyIDlCIEI3XCIsIFwiOEYgODJcIiwgXCJFMiA5QiBCOFwiLCBcIjhGIEI5XCIsIFwiOEUgQTNcIiwgXCI5QSBBM1wiLCBcIjhGIDhBXCIsIFwiOEYgODRcIiwgXCI5QiA4MFwiLCBcIkUyIDlCIEI5XCIsIFwiOEYgOEJcIiwgXCI5QSBCNFwiLCBcIjlBIEI1XCIsIFwiOEYgODdcIiwgXCI5NSBCNFwiLCBcIjhGIDg2XCIsIFwiOEUgQkRcIiwgXCI4RiA4NVwiLCBcIjhFIDk2XCIsIFwiOEUgOTdcIiwgXCI4RiBCNVwiLCBcIjhFIEFCXCIsIFwiOEUgOUZcIiwgXCI4RSBBRFwiLCBcIjhFIEE4XCIsIFwiOEUgQUFcIiwgXCI4RSBBNFwiLCBcIjhFIEE3XCIsIFwiOEUgQkNcIiwgXCI4RSBCOVwiLCBcIjhFIEI3XCIsIFwiOEUgQkFcIiwgXCI4RSBCOFwiLCBcIjhFIEJCXCIsIFwiOEUgQUNcIiwgXCI4RSBBRVwiLCBcIjkxIEJFXCIsIFwiOEUgQUZcIiwgXCI4RSBCMlwiLCBcIjhFIEIwXCIsIFwiOEUgQjNcIiwgXCI5QiA5MVwiLCBcIjlCIDkxXCIsIFwiOUIgOTFcIiwgXCI5QSA5N1wiLCBcIjlBIDk1XCIsIFwiOUEgOTlcIiwgXCI5QSA4Q1wiLCBcIjlBIDhFXCIsIFwiOEYgOEVcIiwgXCI5QSA5M1wiLCBcIjlBIDkxXCIsIFwiOUEgOTJcIiwgXCI5QSA5MFwiLCBcIjlBIDlBXCIsIFwiOUEgOUJcIiwgXCI5QSA5Q1wiLFwiOEYgOERcIiwgXCI5QSBCMlwiLCBcIjlBIEE4XCIsIFwiOUEgOTRcIiwgXCI5QSA4RFwiLCBcIjlBIDk4XCIsIFwiOUEgOTZcIiwgXCI5QSBBMVwiLCBcIjlBIEEwXCIsIFwiOUEgQUZcIiwgXCI5QSA4M1wiLCBcIjlBIDhCXCIsIFwiOUEgOURcIiwgXCI5QSA4NFwiLCBcIjlBIDg1XCIsIFwiOUEgODhcIiwgXCI5QSA5RVwiLCBcIjlBIDgyXCIsIFwiOUEgODZcIiwgXCI5QSA4N1wiLCBcIjlBIDhBXCIsIFwiOUEgODlcIiwgXCI5QSA4MVwiLCBcIjlCIEE5XCIsIFwiRTIgOUMgODggRUYgQjggOEZcIiwgXCI5QiBBQlwiLCBcIjlCIEFDXCIsIFwiRTIgOUIgQjUgRUYgQjggOEZcIiwgXCI5QiBBNVwiLCBcIjlBIEE0XCIsIFwiRTIgOUIgQjRcIiwgXCI5QiBCM1wiLCBcIjlBIDgwXCIsIFwiOUIgQjBcIiwgXCI5MiBCQVwiLCBcIkUyIDlBIDkzIEVGIEI4IDhGXCIsIFwiOUEgQTdcIiwgXCJFMiA5QiBCRCBFRiBCOCA4RlwiLCBcIjlBIDhGXCIsIFwiOUEgQTZcIiwgXCI5QSBBNVwiLCBcIjhGIDgxXCIsIFwiOUEgQTJcIiwgXCI4RSBBMVwiLCBcIjhFIEEyXCIsIFwiOEUgQTBcIiwgXCI4RiA5N1wiLCBcIjhDIDgxXCIsIFwiOTcgQkNcIiwgXCI4RiBBRFwiLCBcIkUyIDlCIEIyIEVGIEI4IDhGXCIsIFwiOEUgOTFcIiwgXCJFMiA5QiBCMFwiLCBcIjhGIDk0XCIsIFwiOTcgQkJcIiwgXCI4QyA4QlwiLCBcIjk3IEJFXCIsIFwiOEYgOTVcIiwgXCJFMiA5QiBCQSBFRiBCOCA4RlwiLCBcIjhGIDlFXCIsIFwiOUIgQTNcIiwgXCI5QiBBNFwiLCBcIjhDIDg1XCIsIFwiOEMgODRcIiwgXCI4RiA5Q1wiLCBcIjhGIDk2XCIsIFwiOEYgOURcIiwgXCI4QyA4N1wiLCBcIjhDIDg2XCIsIFwiOEYgOTlcIiwgXCI4QyA4M1wiLCBcIjhDIDg5XCIsIFwiOEMgOENcIiwgXCI4QyBBMFwiLCBcIjhFIDg3XCIsIFwiOEUgODZcIiwgXCI4QyA4OFwiLCBcIjhGIDk4XCIsIFwiOEYgQjBcIiwgXCI4RiBBRlwiLCBcIjhGIDlGXCIsIFwiOTcgQkRcIiwgXCI4RiBBMFwiLCBcIjhGIEExXCIsIFwiOEYgOUFcIiwgXCI4RiBBMlwiLCBcIjhGIEFDXCIsIFwiOEYgQTNcIiwgXCI4RiBBNFwiLCBcIjhGIEE1XCIsIFwiOEYgQTZcIiwgXCI4RiBBOFwiLCBcIjhGIEFBXCIsIFwiOEYgQUJcIiwgXCI4RiBBOVwiLCBcIjkyIDkyXCIsIFwiOEYgOUJcIiwgXCJFMiA5QiBBQSBFRiBCOCA4RlwiLCBcIjk1IDhDXCIsIFwiOTUgOERcIiwgXCI5NSA4QlwiLCBcIkUyIDlCIEE5XCIsIFwiRTIgOEMgOUEgRUYgQjggOEZcIiwgXCI5MyBCMVwiLCBcIjkzIEIyXCIsIFwiOTIgQkJcIiwgXCJFMiA4QyBBOCBFRiBCOCA4RlwiLCBcIjk2IEE1XCIsIFwiOTYgQThcIiwgXCI5NiBCMVwiLCBcIjk2IEIyXCIsIFwiOTUgQjlcIiwgXCI5NyA5Q1wiLCBcIjkyIEJEXCIsIFwiOTIgQkVcIiwgXCI5MiBCRlwiLCBcIjkzIDgwXCIsIFwiOTMgQkNcIiwgXCI5MyBCN1wiLCBcIjkzIEI4XCIsIFwiOTMgQjlcIiwgXCI4RSBBNVwiLCBcIjkzIEJEXCIsIFwiOEUgOUVcIiwgXCI5MyA5RVwiLCBcIkUyIDk4IDhFIEVGIEI4IDhGXCIsIFwiOTMgOUZcIiwgXCI5MyBBMFwiLCBcIjkzIEJBXCIsIFwiOTMgQkJcIiwgXCI4RSA5OVwiLCBcIjhFIDlBXCIsIFwiOEUgOUJcIiwgXCJFMiA4RiBCMVwiLCBcIkUyIDhGIEIyXCIsIFwiRTIgOEYgQjBcIiwgXCI5NSBCMFwiLCBcIkUyIDhGIEIzXCIsIFwiRTIgOEMgOUIgRUYgQjggOEZcIiwgXCI5MyBBMVwiLCBcIjk0IDhCXCIsIFwiOTQgOENcIiwgXCI5MiBBMVwiLCBcIjk0IEE2XCIsIFwiOTUgQUZcIiwgXCI5NyA5MVwiLCBcIjlCIEEyXCIsIFwiOTIgQjhcIiwgXCI5MiBCNVwiLCBcIjkyIEI0XCIsIFwiOTIgQjZcIiwgXCI5MiBCN1wiLCBcIjkyIEIwXCIsIFwiOTIgQjNcIiwgXCI5MiA4RVwiLCBcIkUyIDlBIDk2XCIsIFwiOTQgQTdcIiwgXCI5NCBBOFwiLCBcIkUyIDlBIDkyXCIsIFwiOUIgQTBcIiwgXCJFMiA5QiA4RlwiLCBcIjk0IEE5XCIsIFwiRTIgOUEgOTlcIiwgXCJFMiA5QiA5M1wiLCBcIjk0IEFCXCIsIFwiOTIgQTNcIiwgXCI5NCBBQVwiLCBcIjk3IEExXCIsIFwiRTIgOUEgOTRcIiwgXCI5QiBBMVwiLCBcIjlBIEFDXCIsIFwiRTIgOTggQTAgRUYgQjggOEZcIiwgXCJFMiA5QSBCMFwiLCBcIkUyIDlBIEIxXCIsIFwiOEYgQkFcIiwgXCI5NCBBRVwiLCBcIjkzIEJGXCIsIFwiOTIgODhcIiwgXCJFMiA5QSA5N1wiLCBcIjk0IEFEXCIsIFwiOTQgQUNcIiwgXCI5NSBCM1wiLCBcIjkyIDhBXCIsIFwiOTIgODlcIiwgXCI4QyBBMVwiLCBcIjhGIEI3XCIsIFwiOTQgOTZcIiwgXCI5QSBCRFwiLCBcIjlBIEJGXCIsIFwiOUIgODFcIiwgXCI5NCA5MVwiLCBcIjk3IDlEXCIsIFwiOUIgOEJcIiwgXCI5QiA4Q1wiLCBcIjlCIDhGXCIsIFwiOUEgQUFcIiwgXCI5QiA4RVwiLCBcIjk2IEJDXCIsIFwiOTcgQkFcIiwgXCJFMiA5QiBCMVwiLCBcIjk3IEJGXCIsIFwiOUIgOERcIiwgXCI4RSA4OFwiLCBcIjhFIDhGXCIsIFwiOEUgODBcIiwgXCI4RSA4MVwiLCBcIjhFIDhBXCIsIFwiOEUgODlcIiwgXCI4RSA4RVwiLCBcIjhFIDkwXCIsIFwiOEUgOENcIiwgXCI4RiBBRVwiLCBcIkUyIDlDIDg5IEVGIEI4IDhGXCIsIFwiOTMgQTlcIiwgXCI5MyBBOFwiLCBcIjkzIEE3XCIsIFwiOTIgOENcIiwgXCI5MyBBRVwiLCBcIjkzIEFBXCIsIFwiOTMgQUJcIiwgXCI5MyBBQ1wiLCBcIjkzIEFEXCIsIFwiOTMgQTZcIiwgXCI5MyBBRlwiLCBcIjkzIEE1XCIsIFwiOTMgQTRcIiwgXCI5MyA5Q1wiLCBcIjkzIDgzXCIsIFwiOTMgOTFcIiwgXCI5MyA4QVwiLCBcIjkzIDg4XCIsIFwiOTMgODlcIiwgXCI5MyA4NFwiLCBcIjkzIDg1XCIsIFwiOTMgODZcIiwgXCI5NyA5M1wiLCBcIjkzIDg3XCIsIFwiOTcgODNcIiwgXCI5NyBCM1wiLCBcIjk3IDg0XCIsIFwiOTMgOEJcIiwgXCI5NyA5MlwiLCBcIjkzIDgxXCIsIFwiOTMgODJcIiwgXCI5NyA4MlwiLCBcIjk3IDlFXCIsIFwiOTMgQjBcIiwgXCI5MyA5M1wiLCBcIjkzIDk1XCIsIFwiOTMgOTdcIiwgXCI5MyA5OFwiLCBcIjkzIDk5XCIsIFwiOTMgOTRcIiwgXCI5MyA5MlwiLCBcIjkzIDlBXCIsIFwiOTMgOTZcIiwgXCI5NCA5N1wiLCBcIjkzIDhFXCIsIFwiOTYgODdcIiwgXCJFMiA5QyA4MiBFRiBCOCA4RlwiLCBcIjkzIDkwXCIsIFwiOTMgOEZcIiwgXCI5MyA4Q1wiLCBcIjkzIDhEXCIsIFwiOUEgQTlcIiwgXCI4RiBCM1wiLCBcIjhGIEI0XCIsIFwiOTQgOTBcIiwgXCI5NCA5MlwiLCBcIjk0IDkzXCIsIFwiOTQgOEZcIiwgXCI5NiA4QVwiLCBcIjk2IDhCXCIsIFwiRTIgOUMgOTIgRUYgQjggOEZcIiwgXCI5MyA5RFwiLCBcIkUyIDlDIDhGIEVGIEI4IDhGXCIsIFwiOTYgOERcIiwgXCI5NiA4Q1wiLCBcIjk0IDhEXCIsIFwiOTQgOEVcIiwgXCI5QiA5MVwiLCBcIjlCIDkxXCIsIFwiRTIgOUQgQTQgRUYgQjggOEZcIiwgXCI5MiA5QlwiLCBcIjkyIDlBXCIsIFwiOTIgOTlcIiwgXCI5MiA5Q1wiLCBcIjkyIDk0XCIsIFwiRTIgOUQgQTMgRUYgQjggOEZcIiwgXCI5MiA5NVwiLCBcIjkyIDlFXCIsIFwiOTIgOTNcIiwgXCI5MiA5N1wiLCBcIjkyIDk2XCIsIFwiOTIgOThcIiwgXCI5MiA5RFwiLCBcIjkyIDlGXCIsIFwiRTIgOTggQUUgRUYgQjggOEZcIiwgXCJFMiA5QyA5RCBFRiBCOCA4RlwiLCBcIkUyIDk4IEFBIEVGIEI4IDhGXCIsIFwiOTUgODlcIiwgXCJFMiA5OCBCOCBFRiBCOCA4RlwiLCBcIkUyIDlDIEExIEVGIEI4IDhGXCIsIFwiOTQgQUZcIiwgXCI5NSA4RVwiLCBcIkUyIDk4IEFGIEVGIEI4IDhGXCIsIFwiRTIgOTggQTYgRUYgQjggOEZcIiwgXCI5QiA5MFwiLCBcIkUyIDlCIDhFXCIsIFwiRTIgOTkgODggRUYgQjggOEZcIiwgXCJFMiA5OSA4OSBFRiBCOCA4RlwiLCBcIkUyIDk5IDhBIEVGIEI4IDhGXCIsIFwiRTIgOTkgOEIgRUYgQjggOEZcIiwgXCJFMiA5OSA4QyBFRiBCOCA4RlwiLCBcIkUyIDk5IDhEIEVGIEI4IDhGXCIsIFwiRTIgOTkgOEUgRUYgQjggOEZcIiwgXCJFMiA5OSA4RiBFRiBCOCA4RlwiLCBcIkUyIDk5IDkwIEVGIEI4IDhGXCIsIFwiRTIgOTkgOTEgRUYgQjggOEZcIiwgXCJFMiA5OSA5MiBFRiBCOCA4RlwiLCBcIkUyIDk5IDkzIEVGIEI4IDhGXCIsIFwiODYgOTRcIiwgXCJFMiA5QSA5QlwiLCBcIjg4IEIzXCIsIFwiODggQjlcIiwgXCJFMiA5OCBBMiBFRiBCOCA4RlwiLCBcIkUyIDk4IEEzIEVGIEI4IDhGXCIsIFwiOTMgQjRcIiwgXCI5MyBCM1wiLCBcIjg4IEI2XCIsIFwiODggOUEgRUYgQjggOEZcIiwgXCI4OCBCOFwiLCBcIjg4IEJBXCIsIFwiODggQjcgRUYgQjggOEZcIiwgXCJFMiA5QyBCNCBFRiBCOCA4RlwiLCBcIjg2IDlBXCIsIFwiODkgOTFcIiwgXCI5MiBBRVwiLCBcIjg5IDkwXCIsIFwiRTMgOEEgOTkgRUYgQjggOEZcIiwgXCJFMyA4QSA5NyBFRiBCOCA4RlwiLCBcIjg4IEI0XCIsIFwiODggQjVcIiwgXCI4OCBCMlwiLCBcIjg1IEIwIEVGIEI4IDhGXCIsIFwiODUgQjEgRUYgQjggOEZcIiwgXCI4NiA4RVwiLCBcIjg2IDkxXCIsIFwiODUgQkUgRUYgQjggOEZcIiwgXCI4NiA5OFwiLCBcIkUyIDlCIDk0IEVGIEI4IDhGXCIsIFwiOTMgOUJcIiwgXCI5QSBBQlwiLCBcIkUyIDlEIDhDXCIsIFwiRTIgQUQgOTUgRUYgQjggOEZcIiwgXCI5MiBBMlwiLCBcIkUyIDk5IEE4IEVGIEI4IDhGXCIsIFwiOUEgQjdcIiwgXCI5QSBBRlwiLCBcIjlBIEIzXCIsIFwiOUEgQjFcIiwgXCI5NCA5RVwiLCBcIjkzIEI1XCIsIFwiRTIgOUQgOTcgRUYgQjggOEZcIiwgXCJFMiA5RCA5NVwiLCBcIkUyIDlEIDkzXCIsIFwiRTIgOUQgOTRcIiwgXCJFMiA4MCBCQyBFRiBCOCA4RlwiLCBcIkUyIDgxIDg5IEVGIEI4IDhGXCIsIFwiOTIgQUZcIiwgXCI5NCA4NVwiLCBcIjk0IDg2XCIsIFwiOTQgQjFcIiwgXCJFMiA5QSA5Q1wiLCBcIkUzIDgwIEJEIEVGIEI4IDhGXCIsIFwiRTIgOUEgQTAgRUYgQjggOEZcIiwgXCI5QSBCOFwiLCBcIjk0IEIwXCIsIFwiRTIgOTkgQkIgRUYgQjggOEZcIiwgXCI4OCBBRiBFRiBCOCA4RlwiLCBcIjkyIEI5XCIsIFwiRTIgOUQgODcgRUYgQjggOEZcIiwgXCJFMiA5QyBCMyBFRiBCOCA4RlwiLCBcIkUyIDlEIDhFXCIsIFwiRTIgOUMgODVcIiwgXCI5MiBBMFwiLCBcIjhDIDgwXCIsIFwiRTIgOUUgQkZcIiwgXCI4QyA5MFwiLCBcIkUyIDkzIDgyIEVGIEI4IDhGXCIsIFwiOEYgQTdcIiwgXCI4OCA4MiBFRiBCOCA4RlwiLCBcIjlCIDgyXCIsIFwiOUIgODNcIiwgXCI5QiA4NFwiLCBcIjlCIDg1XCIsIFwiRTIgOTkgQkYgRUYgQjggOEZcIiwgXCI5QSBBRFwiLCBcIjlBIEJFXCIsIFwiODUgQkYgRUYgQjggOEZcIiwgXCI5QSBCMFwiLCBcIjlBIEI5XCIsIFwiOUEgQkFcIiwgXCI5QSBCQ1wiLCBcIjlBIEJCXCIsIFwiOUEgQUVcIiwgXCI4RSBBNlwiLCBcIjkzIEI2XCIsIFwiODggODFcIiwgXCI4NiA5NlwiLCBcIjg2IDk3XCIsIFwiODYgOTlcIiwgXCI4NiA5MlwiLCBcIjg2IDk1XCIsIFwiODYgOTNcIiwgXCIzMCBFRiBCOCA4RiBFMiA4MyBBM1wiLCBcIjMxIEVGIEI4IDhGIEUyIDgzIEEzXCIsIFwiMzIgRUYgQjggOEYgRTIgODMgQTNcIiwgXCIzMyBFRiBCOCA4RiBFMiA4MyBBM1wiLCBcIjM0IEVGIEI4IDhGIEUyIDgzIEEzXCIsIFwiMzUgRUYgQjggOEYgRTIgODMgQTNcIiwgXCIzNiBFRiBCOCA4RiBFMiA4MyBBM1wiLCBcIjM3IEVGIEI4IDhGIEUyIDgzIEEzXCIsIFwiMzggRUYgQjggOEYgRTIgODMgQTNcIiwgXCIzOSBFRiBCOCA4RiBFMiA4MyBBM1wiLCBcIjk0IDlGXCIsIFwiOTQgQTJcIiwgXCJFMiA5NiBCNiBFRiBCOCA4RlwiLCBcIkUyIDhGIEI4XCIsIFwiRTIgOEYgQUZcIiwgXCJFMiA4RiBCOVwiLCBcIkUyIDhGIEJBXCIsIFwiRTIgOEYgQURcIiwgXCJFMiA4RiBBRVwiLCBcIkUyIDhGIEE5XCIsIFwiRTIgOEYgQUFcIiwgXCI5NCA4MFwiLCBcIjk0IDgxXCIsIFwiOTQgODJcIiwgXCJFMiA5NyA4MCBFRiBCOCA4RlwiLCBcIjk0IEJDXCIsIFwiOTQgQkRcIiwgXCJFMiA4RiBBQlwiLCBcIkUyIDhGIEFDXCIsIFwiRTIgOUUgQTEgRUYgQjggOEZcIiwgXCJFMiBBQyA4NSBFRiBCOCA4RlwiLCBcIkUyIEFDIDg2IEVGIEI4IDhGXCIsIFwiRTIgQUMgODcgRUYgQjggOEZcIiwgXCJFMiA4NiA5NyBFRiBCOCA4RlwiLCBcIkUyIDg2IDk4IEVGIEI4IDhGXCIsIFwiRTIgODYgOTkgRUYgQjggOEZcIiwgXCJFMiA4NiA5NiBFRiBCOCA4RlwiLCBcIkUyIDg2IDk1IEVGIEI4IDhGXCIsIFwiRTIgODYgOTQgRUYgQjggOEZcIiwgXCI5NCA4NFwiLCBcIkUyIDg2IEFBIEVGIEI4IDhGXCIsIFwiRTIgODYgQTkgRUYgQjggOEZcIiwgXCJFMiBBNCBCNCBFRiBCOCA4RlwiLCBcIkUyIEE0IEI1IEVGIEI4IDhGXCIsIFwiMjMgRUYgQjggOEYgRTIgODMgQTNcIiwgXCIyQSBFRiBCOCA4RiBFMiA4MyBBM1wiLCBcIkUyIDg0IEI5IEVGIEI4IDhGXCIsIFwiOTQgQTRcIiwgXCI5NCBBMVwiLCBcIjk0IEEwXCIsIFwiOTQgQTNcIiwgXCI4RSBCNVwiLCBcIjhFIEI2XCIsIFwiRTMgODAgQjAgRUYgQjggOEZcIiwgXCJFMiA5RSBCMFwiLCBcIkUyIDlDIDk0IEVGIEI4IDhGXCIsIFwiOTQgODNcIiwgXCJFMiA5RSA5NVwiLCBcIkUyIDlFIDk2XCIsIFwiRTIgOUUgOTdcIiwgXCJFMiA5QyA5NiBFRiBCOCA4RlwiLCBcIjkyIEIyXCIsIFwiOTIgQjFcIiwgXCJDMiBBOSBFRiBCOCA4RlwiLCBcIkMyIEFFIEVGIEI4IDhGXCIsIFwiRTIgODQgQTIgRUYgQjggOEZcIiwgXCI5NCA5QVwiLCBcIjk0IDk5XCIsIFwiOTQgOUJcIiwgXCI5NCA5RFwiLCBcIjk0IDlDXCIsIFwiRTIgOTggOTEgRUYgQjggOEZcIiwgXCI5NCA5OFwiLCBcIkUyIDlBIEFBIEVGIEI4IDhGXCIsIFwiRTIgOUEgQUIgRUYgQjggOEZcIiwgXCI5NCBCNFwiLCBcIjk0IEI1XCIsIFwiOTQgQjhcIiwgXCI5NCBCOVwiLCBcIjk0IEI2XCIsIFwiOTQgQjdcIiwgXCI5NCBCQVwiLCBcIkUyIDk2IEFBIEVGIEI4IDhGXCIsIFwiRTIgOTYgQUIgRUYgQjggOEZcIiwgXCJFMiBBQyA5QiBFRiBCOCA4RlwiLCBcIkUyIEFDIDlDIEVGIEI4IDhGXCIsIFwiOTQgQkJcIiwgXCJFMiA5NyBCQyBFRiBCOCA4RlwiLCBcIkUyIDk3IEJCIEVGIEI4IDhGXCIsIFwiRTIgOTcgQkUgRUYgQjggOEZcIiwgXCJFMiA5NyBCRCBFRiBCOCA4RlwiLCBcIjk0IEIyXCIsIFwiOTQgQjNcIiwgXCI5NCA4OFwiLCBcIjk0IDg5XCIsIFwiOTQgOEFcIiwgXCI5NCA4N1wiLCBcIjkzIEEzXCIsIFwiOTMgQTJcIiwgXCI5NCA5NFwiLCBcIjk0IDk1XCIsIFwiODMgOEZcIiwgXCI4MCA4NCBFRiBCOCA4RlwiLCBcIkUyIDk5IEEwIEVGIEI4IDhGXCIsIFwiRTIgOTkgQTMgRUYgQjggOEZcIiwgXCJFMiA5OSBBNSBFRiBCOCA4RlwiLCBcIkUyIDk5IEE2IEVGIEI4IDhGXCIsIFwiOEUgQjRcIiwgXCI5MSA4MSBFMiA4MCA4RCBGMCA5RiA5NyBBOFwiLCBcIjkyIEFEXCIsIFwiOTcgQUZcIiwgXCI5MiBBQ1wiLCBcIjk1IDkwXCIsIFwiOTUgOTFcIiwgXCI5NSA5MlwiLCBcIjk1IDkzXCIsIFwiOTUgOTRcIiwgXCI5NSA5NVwiLCBcIjk1IDk2XCIsIFwiOTUgOTdcIiwgXCI5NSA5OFwiLCBcIjk1IDk5XCIsIFwiOTUgOUFcIiwgXCI5NSA5QlwiLCBcIjk1IDlDXCIsIFwiOTUgOURcIiwgXCI5NSA5RVwiLCBcIjk1IDlGXCIsIFwiOTUgQTBcIiwgXCI5NSBBMVwiLCBcIjk1IEEyXCIsIFwiOTUgQTNcIiwgXCI5NSBBNFwiLCBcIjk1IEE1XCIsIFwiOTUgQTZcIiwgXCI5NSBBN1wiLCBcIjlCIDkxXCIsIFwiODcgQTYgRjAgOUYgODcgQUJcIiwgXCI4NyBBNiBGMCA5RiA4NyBCRFwiLCBcIjg3IEE2IEYwIDlGIDg3IEIxXCIsIFwiODcgQTkgRjAgOUYgODcgQkZcIiwgXCI4NyBBNiBGMCA5RiA4NyBCOFwiLCBcIjg3IEE2IEYwIDlGIDg3IEE5XCIsIFwiODcgQTYgRjAgOUYgODcgQjRcIiwgXCI4NyBBNiBGMCA5RiA4NyBBRVwiLCBcIjg3IEE2IEYwIDlGIDg3IEI2XCIsIFwiODcgQTYgRjAgOUYgODcgQUNcIiwgXCI4NyBBNiBGMCA5RiA4NyBCN1wiLCBcIjg3IEE2IEYwIDlGIDg3IEIyXCIsIFwiODcgQTYgRjAgOUYgODcgQkNcIiwgXCI4NyBBNiBGMCA5RiA4NyBCQVwiLCBcIjg3IEE2IEYwIDlGIDg3IEI5XCIsIFwiODcgQTYgRjAgOUYgODcgQkZcIiwgXCI4NyBBNyBGMCA5RiA4NyBCOFwiLCBcIjg3IEE3IEYwIDlGIDg3IEFEXCIsIFwiODcgQTcgRjAgOUYgODcgQTlcIiwgXCI4NyBBNyBGMCA5RiA4NyBBN1wiLCBcIjg3IEE3IEYwIDlGIDg3IEJFXCIsIFwiODcgQTcgRjAgOUYgODcgQUFcIiwgXCI4NyBBNyBGMCA5RiA4NyBCRlwiLCBcIjg3IEE3IEYwIDlGIDg3IEFGXCIsIFwiODcgQTcgRjAgOUYgODcgQjJcIiwgXCI4NyBBNyBGMCA5RiA4NyBCOVwiLCBcIjg3IEE3IEYwIDlGIDg3IEI0XCIsIFwiODcgQTcgRjAgOUYgODcgQjZcIiwgXCI4NyBBNyBGMCA5RiA4NyBBNlwiLCBcIjg3IEE3IEYwIDlGIDg3IEJDXCIsIFwiODcgQTcgRjAgOUYgODcgQjdcIiwgXCI4NyBBRSBGMCA5RiA4NyBCNFwiLCBcIjg3IEJCIEYwIDlGIDg3IEFDXCIsIFwiODcgQTcgRjAgOUYgODcgQjNcIiwgXCI4NyBBNyBGMCA5RiA4NyBBQ1wiLCBcIjg3IEE3IEYwIDlGIDg3IEFCXCIsIFwiODcgQTcgRjAgOUYgODcgQUVcIiwgXCI4NyBBOCBGMCA5RiA4NyBCQlwiLCBcIjg3IEIwIEYwIDlGIDg3IEFEXCIsIFwiODcgQTggRjAgOUYgODcgQjJcIiwgXCI4NyBBOCBGMCA5RiA4NyBBNlwiLCBcIjg3IEFFIEYwIDlGIDg3IEE4XCIsIFwiODcgQjAgRjAgOUYgODcgQkVcIiwgXCI4NyBBOCBGMCA5RiA4NyBBQlwiLCBcIjg3IEI5IEYwIDlGIDg3IEE5XCIsIFwiODcgQTggRjAgOUYgODcgQjFcIiwgXCI4NyBBOCBGMCA5RiA4NyBCM1wiLCBcIjg3IEE4IEYwIDlGIDg3IEJEXCIsIFwiODcgQTggRjAgOUYgODcgQThcIiwgXCI4NyBBOCBGMCA5RiA4NyBCNFwiLCBcIjg3IEIwIEYwIDlGIDg3IEIyXCIsIFwiODcgQTggRjAgOUYgODcgQUNcIiwgXCI4NyBBOCBGMCA5RiA4NyBBOVwiLCBcIjg3IEE4IEYwIDlGIDg3IEIwXCIsIFwiODcgQTggRjAgOUYgODcgQjdcIiwgXCI4NyBBRCBGMCA5RiA4NyBCN1wiLCBcIjg3IEE4IEYwIDlGIDg3IEJBXCIsIFwiODcgQTggRjAgOUYgODcgQkNcIiwgXCI4NyBBOCBGMCA5RiA4NyBCRVwiLCBcIjg3IEE4IEYwIDlGIDg3IEJGXCIsIFwiODcgQTkgRjAgOUYgODcgQjBcIiwgXCI4NyBBOSBGMCA5RiA4NyBBRlwiLCBcIjg3IEE5IEYwIDlGIDg3IEIyXCIsIFwiODcgQTkgRjAgOUYgODcgQjRcIiwgXCI4NyBBQSBGMCA5RiA4NyBBOFwiLCBcIjg3IEFBIEYwIDlGIDg3IEFDXCIsIFwiODcgQjggRjAgOUYgODcgQkJcIiwgXCI4NyBBQyBGMCA5RiA4NyBCNlwiLCBcIjg3IEFBIEYwIDlGIDg3IEI3XCIsIFwiODcgQUEgRjAgOUYgODcgQUFcIiwgXCI4NyBBQSBGMCA5RiA4NyBCOVwiLCBcIjg3IEFBIEYwIDlGIDg3IEJBXCIsIFwiODcgQUIgRjAgOUYgODcgQjBcIiwgXCI4NyBBQiBGMCA5RiA4NyBCNFwiLCBcIjg3IEFCIEYwIDlGIDg3IEFGXCIsIFwiODcgQUIgRjAgOUYgODcgQUVcIiwgXCI4NyBBQiBGMCA5RiA4NyBCN1wiLCBcIjg3IEFDIEYwIDlGIDg3IEFCXCIsIFwiODcgQjUgRjAgOUYgODcgQUJcIiwgXCI4NyBCOSBGMCA5RiA4NyBBQlwiLCBcIjg3IEFDIEYwIDlGIDg3IEE2XCIsIFwiODcgQUMgRjAgOUYgODcgQjJcIiwgXCI4NyBBQyBGMCA5RiA4NyBBQVwiLCBcIjg3IEE5IEYwIDlGIDg3IEFBXCIsIFwiODcgQUMgRjAgOUYgODcgQURcIiwgXCI4NyBBQyBGMCA5RiA4NyBBRVwiLCBcIjg3IEFDIEYwIDlGIDg3IEI3XCIsIFwiODcgQUMgRjAgOUYgODcgQjFcIiwgXCI4NyBBQyBGMCA5RiA4NyBBOVwiLCBcIjg3IEFDIEYwIDlGIDg3IEI1XCIsIFwiODcgQUMgRjAgOUYgODcgQkFcIiwgXCI4NyBBQyBGMCA5RiA4NyBCOVwiLCBcIjg3IEFDIEYwIDlGIDg3IEFDXCIsIFwiODcgQUMgRjAgOUYgODcgQjNcIiwgXCI4NyBBQyBGMCA5RiA4NyBCQ1wiLCBcIjg3IEFDIEYwIDlGIDg3IEJFXCIsIFwiODcgQUQgRjAgOUYgODcgQjlcIiwgXCI4NyBBRCBGMCA5RiA4NyBCM1wiLCBcIjg3IEFEIEYwIDlGIDg3IEIwXCIsIFwiODcgQUQgRjAgOUYgODcgQkFcIiwgXCI4NyBBRSBGMCA5RiA4NyBCOFwiLCBcIjg3IEFFIEYwIDlGIDg3IEIzXCIsIFwiODcgQUUgRjAgOUYgODcgQTlcIiwgXCI4NyBBRSBGMCA5RiA4NyBCN1wiLCBcIjg3IEFFIEYwIDlGIDg3IEI2XCIsIFwiODcgQUUgRjAgOUYgODcgQUFcIiwgXCI4NyBBRSBGMCA5RiA4NyBCMlwiLCBcIjg3IEFFIEYwIDlGIDg3IEIxXCIsIFwiODcgQUUgRjAgOUYgODcgQjlcIiwgXCI4NyBBOCBGMCA5RiA4NyBBRVwiLCBcIjg3IEFGIEYwIDlGIDg3IEIyXCIsIFwiODcgQUYgRjAgOUYgODcgQjVcIiwgXCI4NyBBRiBGMCA5RiA4NyBBQVwiLCBcIjg3IEFGIEYwIDlGIDg3IEI0XCIsIFwiODcgQjAgRjAgOUYgODcgQkZcIiwgXCI4NyBCMCBGMCA5RiA4NyBBQVwiLCBcIjg3IEIwIEYwIDlGIDg3IEFFXCIsIFwiODcgQkQgRjAgOUYgODcgQjBcIiwgXCI4NyBCMCBGMCA5RiA4NyBCQ1wiLCBcIjg3IEIwIEYwIDlGIDg3IEFDXCIsIFwiODcgQjEgRjAgOUYgODcgQTZcIiwgXCI4NyBCMSBGMCA5RiA4NyBCQlwiLCBcIjg3IEIxIEYwIDlGIDg3IEE3XCIsIFwiODcgQjEgRjAgOUYgODcgQjhcIiwgXCI4NyBCMSBGMCA5RiA4NyBCN1wiLCBcIjg3IEIxIEYwIDlGIDg3IEJFXCIsIFwiODcgQjEgRjAgOUYgODcgQUVcIiwgXCI4NyBCMSBGMCA5RiA4NyBCOVwiLCBcIjg3IEIxIEYwIDlGIDg3IEJBXCIsIFwiODcgQjIgRjAgOUYgODcgQjRcIiwgXCI4NyBCMiBGMCA5RiA4NyBCMFwiLCBcIjg3IEIyIEYwIDlGIDg3IEFDXCIsIFwiODcgQjIgRjAgOUYgODcgQkNcIiwgXCI4NyBCMiBGMCA5RiA4NyBCRVwiLCBcIjg3IEIyIEYwIDlGIDg3IEJCXCIsIFwiODcgQjIgRjAgOUYgODcgQjFcIiwgXCI4NyBCMiBGMCA5RiA4NyBCOVwiLCBcIjg3IEIyIEYwIDlGIDg3IEFEXCIsIFwiODcgQjIgRjAgOUYgODcgQjZcIiwgXCI4NyBCMiBGMCA5RiA4NyBCN1wiLCBcIjg3IEIyIEYwIDlGIDg3IEJBXCIsIFwiODcgQkUgRjAgOUYgODcgQjlcIiwgXCI4NyBCMiBGMCA5RiA4NyBCRFwiLCBcIjg3IEFCIEYwIDlGIDg3IEIyXCIsIFwiODcgQjIgRjAgOUYgODcgQTlcIiwgXCI4NyBCMiBGMCA5RiA4NyBBOFwiLCBcIjg3IEIyIEYwIDlGIDg3IEIzXCIsIFwiODcgQjIgRjAgOUYgODcgQUFcIiwgXCI4NyBCMiBGMCA5RiA4NyBCOFwiLCBcIjg3IEIyIEYwIDlGIDg3IEE2XCIsIFwiODcgQjIgRjAgOUYgODcgQkZcIiwgXCI4NyBCMiBGMCA5RiA4NyBCMlwiLCBcIjg3IEIzIEYwIDlGIDg3IEE2XCIsIFwiODcgQjMgRjAgOUYgODcgQjdcIiwgXCI4NyBCMyBGMCA5RiA4NyBCNVwiLCBcIjg3IEIzIEYwIDlGIDg3IEIxXCIsIFwiODcgQjMgRjAgOUYgODcgQThcIiwgXCI4NyBCMyBGMCA5RiA4NyBCRlwiLCBcIjg3IEIzIEYwIDlGIDg3IEFFXCIsIFwiODcgQjMgRjAgOUYgODcgQUFcIiwgXCI4NyBCMyBGMCA5RiA4NyBBQ1wiLCBcIjg3IEIzIEYwIDlGIDg3IEJBXCIsIFwiODcgQjMgRjAgOUYgODcgQUJcIiwgXCI4NyBCMiBGMCA5RiA4NyBCNVwiLCBcIjg3IEIwIEYwIDlGIDg3IEI1XCIsIFwiODcgQjMgRjAgOUYgODcgQjRcIiwgXCI4NyBCNCBGMCA5RiA4NyBCMlwiLCBcIjg3IEI1IEYwIDlGIDg3IEIwXCIsIFwiODcgQjUgRjAgOUYgODcgQkNcIiwgXCI4NyBCNSBGMCA5RiA4NyBCOFwiLCBcIjg3IEI1IEYwIDlGIDg3IEE2XCIsIFwiODcgQjUgRjAgOUYgODcgQUNcIiwgXCI4NyBCNSBGMCA5RiA4NyBCRVwiLCBcIjg3IEI1IEYwIDlGIDg3IEFBXCIsIFwiODcgQjUgRjAgOUYgODcgQURcIiwgXCI4NyBCNSBGMCA5RiA4NyBCM1wiLCBcIjg3IEI1IEYwIDlGIDg3IEIxXCIsIFwiODcgQjUgRjAgOUYgODcgQjlcIiwgXCI4NyBCNSBGMCA5RiA4NyBCN1wiLCBcIjg3IEI2IEYwIDlGIDg3IEE2XCIsIFwiODcgQjcgRjAgOUYgODcgQUFcIiwgXCI4NyBCNyBGMCA5RiA4NyBCNFwiLCBcIjg3IEI3IEYwIDlGIDg3IEJBXCIsIFwiODcgQjcgRjAgOUYgODcgQkNcIiwgXCI4NyBBNyBGMCA5RiA4NyBCMVwiLCBcIjg3IEI4IEYwIDlGIDg3IEFEXCIsIFwiODcgQjAgRjAgOUYgODcgQjNcIiwgXCI4NyBCMSBGMCA5RiA4NyBBOFwiLCBcIjg3IEI1IEYwIDlGIDg3IEIyXCIsIFwiODcgQkIgRjAgOUYgODcgQThcIiwgXCI4NyBCQyBGMCA5RiA4NyBCOFwiLCBcIjg3IEI4IEYwIDlGIDg3IEIyXCIsIFwiODcgQjggRjAgOUYgODcgQjlcIiwgXCI4NyBCOCBGMCA5RiA4NyBBNlwiLCBcIjg3IEI4IEYwIDlGIDg3IEIzXCIsIFwiODcgQjcgRjAgOUYgODcgQjhcIiwgXCI4NyBCOCBGMCA5RiA4NyBBOFwiLCBcIjg3IEI4IEYwIDlGIDg3IEIxXCIsIFwiODcgQjggRjAgOUYgODcgQUNcIiwgXCI4NyBCOCBGMCA5RiA4NyBCRFwiLCBcIjg3IEI4IEYwIDlGIDg3IEIwXCIsIFwiODcgQjggRjAgOUYgODcgQUVcIiwgXCI4NyBCOCBGMCA5RiA4NyBBN1wiLCBcIjg3IEI4IEYwIDlGIDg3IEI0XCIsIFwiODcgQkYgRjAgOUYgODcgQTZcIiwgXCI4NyBBQyBGMCA5RiA4NyBCOFwiLCBcIjg3IEIwIEYwIDlGIDg3IEI3XCIsIFwiODcgQjggRjAgOUYgODcgQjhcIiwgXCI4NyBBQSBGMCA5RiA4NyBCOFwiLCBcIjg3IEIxIEYwIDlGIDg3IEIwXCIsIFwiODcgQjggRjAgOUYgODcgQTlcIiwgXCI4NyBCOCBGMCA5RiA4NyBCN1wiLCBcIjg3IEI4IEYwIDlGIDg3IEJGXCIsIFwiODcgQjggRjAgOUYgODcgQUFcIiwgXCI4NyBBOCBGMCA5RiA4NyBBRFwiLCBcIjg3IEI4IEYwIDlGIDg3IEJFXCIsIFwiODcgQjkgRjAgOUYgODcgQkNcIiwgXCI4NyBCOSBGMCA5RiA4NyBBRlwiLCBcIjg3IEI5IEYwIDlGIDg3IEJGXCIsIFwiODcgQjkgRjAgOUYgODcgQURcIiwgXCI4NyBCOSBGMCA5RiA4NyBCMVwiLCBcIjg3IEI5IEYwIDlGIDg3IEFDXCIsIFwiODcgQjkgRjAgOUYgODcgQjBcIiwgXCI4NyBCOSBGMCA5RiA4NyBCNFwiLCBcIjg3IEI5IEYwIDlGIDg3IEI5XCIsIFwiODcgQjkgRjAgOUYgODcgQjNcIiwgXCI4NyBCOSBGMCA5RiA4NyBCN1wiLCBcIjg3IEI5IEYwIDlGIDg3IEIyXCIsIFwiODcgQjkgRjAgOUYgODcgQThcIiwgXCI4NyBCOSBGMCA5RiA4NyBCQlwiLCBcIjg3IEJBIEYwIDlGIDg3IEFDXCIsIFwiODcgQkEgRjAgOUYgODcgQTZcIiwgXCI4NyBBNiBGMCA5RiA4NyBBQVwiLCBcIjg3IEFDIEYwIDlGIDg3IEE3XCIsIFwiODcgQkEgRjAgOUYgODcgQjhcIiwgXCI4NyBCQiBGMCA5RiA4NyBBRVwiLCBcIjg3IEJBIEYwIDlGIDg3IEJFXCIsIFwiODcgQkEgRjAgOUYgODcgQkZcIiwgXCI4NyBCQiBGMCA5RiA4NyBCQVwiLCBcIjg3IEJCIEYwIDlGIDg3IEE2XCIsIFwiODcgQkIgRjAgOUYgODcgQUFcIiwgXCI4NyBCQiBGMCA5RiA4NyBCM1wiLCBcIjg3IEJDIEYwIDlGIDg3IEFCXCIsIFwiODcgQUEgRjAgOUYgODcgQURcIiwgXCI4NyBCRSBGMCA5RiA4NyBBQVwiLCBcIjg3IEJGIEYwIDlGIDg3IEIyXCIsIFwiODcgQkYgRjAgOUYgODcgQkNcIl1cblx0bmV0d29yazpcIlxuPHN2ZyB3aWR0aD0nMTRweCcgaGVpZ2h0PScxMHB4JyB2aWV3Qm94PSc4NyA1IDE0IDEwJyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnPlxuICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy43LjIgKDI4Mjc2KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cbiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cbiAgICA8ZGVmcz48L2RlZnM+XG4gICAgPHBhdGggZD0nTTk2LjE0NDQyMDgsMTIuNDM4NTA0MyBDOTUuNjI2Mzc0LDExLjg0NTQ0NTYgOTQuODUyMzYxNiwxMS40Njg5MTE5IDkzLjk4NzU2MywxMS40Njg5MTE5IEM5My4xMzkwMDczLDExLjQ2ODkxMTkgOTIuMzc3ODU5NCwxMS44MzE0MzQxIDkxLjg2MDE2NTIsMTIuNDA1MzE3NyBMOTQuMDIyNTM5MSwxNC41IEw5Ni4xNDQ0MjA4LDEyLjQzODUwNDMgWiBNOTguMzIzNDk2NCwxMC4zMjE0NDI1IEM5Ny4yNDQ3Nzk0LDkuMTkxNzQ1NjMgOTUuNzAxNDM4Nyw4LjQ4NDQ1NTk2IDkzLjk4NzU2Myw4LjQ4NDQ1NTk2IEM5Mi4yODgyNzIzLDguNDg0NDU1OTYgOTAuNzU2NjI2NCw5LjE3OTc1ODkzIDg5LjY3OTI2OTgsMTAuMjkyNjkzNiBMOTAuNzY5Mjk4NywxMS4zNDg2IEM5MS41NjcyMDUsMTAuNTA1MzcwOCA5Mi43MTM2NDgsOS45NzY2ODM5NCA5My45ODc1NjMsOS45NzY2ODM5NCBDOTUuMjc2ODgzNiw5Ljk3NjY4Mzk0IDk2LjQzNTYzMDUsMTAuNTE4MjM1IDk3LjIzNDYyMTUsMTEuMzc5MzI5MyBMOTguMzIzNDk2NCwxMC4zMjE0NDI1IEw5OC4zMjM0OTY0LDEwLjMyMTQ0MjUgWiBNMTAwLjUsOC4yMDY4NzkzMyBDOTguODYyOTU3OCw2LjUzOTQzNjcyIDk2LjU1MDU2OTksNS41IDkzLjk4NzU2Myw1LjUgQzkxLjQzNzUxMDMsNS41IDg5LjEzNTU0OTYsNi41Mjg5NTYwNSA4Ny41LDguMTgxNjQ0MzEgTDg4LjU4OTU1NzksOS4yMzcwOTQ0MSBDODkuOTQ2MDc5OCw3Ljg1NDMxNjU1IDkxLjg2Mjg5MjEsNi45OTIyMjc5OCA5My45ODc1NjMsNi45OTIyMjc5OCBDOTYuMTI2MDAyNiw2Ljk5MjIyNzk4IDk4LjA1Mzg4MDksNy44NjU1MjYwOSA5OS40MTE4Njk4LDkuMjY0MDQyNzIgTDEwMC41LDguMjA2ODc5MzMgWicgaWQ9J1dpLUZpJyBzdHJva2U9J25vbmUnIGZpbGw9JyMwMzAzMDMnIGZpbGwtcnVsZT0nZXZlbm9kZCc+PC9wYXRoPlxuPC9zdmc+XCJcblx0YWN0aXZpdHk6IFwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdFx0XHQ8c3ZnIHdpZHRoPScxNnB4JyBoZWlnaHQ9JzE2cHgnIHZpZXdCb3g9JzAgMCAxNiAxNicgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyB4bWxuczpza2V0Y2g9J2h0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaC9ucyc+XG5cdFx0XHRcdDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy41LjIgKDI1MjM1KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHRcdFx0PHRpdGxlPlNvY2NlciBCYWxsPC90aXRsZT5cblx0XHRcdFx0PGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0XHRcdDxkZWZzPlxuXHRcdFx0XHRcdDxjaXJjbGUgaWQ9J3BhdGgtMScgY3g9JzgnIGN5PSc4JyByPSc4Jz48L2NpcmNsZT5cblx0XHRcdFx0PC9kZWZzPlxuXHRcdFx0XHQ8ZyBpZD0nUGFnZS0xJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJyBza2V0Y2g6dHlwZT0nTVNQYWdlJz5cblx0XHRcdFx0XHQ8ZyBpZD0naVBob25lLTYnIHNrZXRjaDp0eXBlPSdNU0FydGJvYXJkR3JvdXAnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC0xNzkuMDAwMDAwLCAtNjM5LjAwMDAwMCknPlxuXHRcdFx0XHRcdFx0PGcgaWQ9J1NvY2Nlci1CYWxsJyBza2V0Y2g6dHlwZT0nTVNMYXllckdyb3VwJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgxNzkuMDAwMDAwLCA2MzkuMDAwMDAwKSc+XG5cdFx0XHRcdFx0XHRcdDxtYXNrIGlkPSdtYXNrLTInIHNrZXRjaDpuYW1lPSdNYXNrJyBmaWxsPSd3aGl0ZSc+XG5cdFx0XHRcdFx0XHRcdFx0PHVzZSB4bGluazpocmVmPScjcGF0aC0xJz48L3VzZT5cblx0XHRcdFx0XHRcdFx0PC9tYXNrPlxuXHRcdFx0XHRcdFx0XHQ8dXNlIGlkPSdNYXNrJyBzdHJva2U9JyM0QTUzNjEnIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnIHhsaW5rOmhyZWY9JyNwYXRoLTEnPjwvdXNlPlxuXHRcdFx0XHRcdFx0XHQ8cGF0aCBkPSdNNiwxMi4xMjAzMDQ2IEwxMi44NTczMzg0LDggTDEzLjM3MjM3NjUsOC44NTcxNjczIEw2LjUxNTAzODA3LDEyLjk3NzQ3MTkgTDYsMTIuMTIwMzA0NiBMNiwxMi4xMjAzMDQ2IFonIGlkPSdSZWN0YW5nbGUtNDcnIGZpbGw9JyM0QTUzNjEnIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnIG1hc2s9J3VybCgjbWFzay0yKSc+PC9wYXRoPlxuXHRcdFx0XHRcdFx0XHQ8cGF0aCBkPSdNMTEuODQ5NjQ4LDguNzI2MDU1MSBMMTkuMTAwMTEwMyw1LjM0NTEwOTAxIEwxOS41MjI3Mjg1LDYuMjUxNDE2OCBMMTIuMjcyMjY2Miw5LjYzMjM2Mjg5IEwxMS44NDk2NDgsOC43MjYwNTUxIEwxMS44NDk2NDgsOC43MjYwNTUxIFonIGlkPSdSZWN0YW5nbGUtNDctQ29weS0zJyBmaWxsPScjNEE1MzYxJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJyBtYXNrPSd1cmwoI21hc2stMiknPjwvcGF0aD5cblx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTYsMy4xMjAzMDQ2IEwxMi44NTczMzg0LC0xIEwxMy4zNzIzNzY1LC0wLjE0MjgzMjY5OSBMNi41MTUwMzgwNywzLjk3NzQ3MTkgTDYsMy4xMjAzMDQ2IEw2LDMuMTIwMzA0NiBaJyBpZD0nUmVjdGFuZ2xlLTQ3LUNvcHktMicgZmlsbD0nIzRBNTM2MScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCcgbWFzaz0ndXJsKCNtYXNrLTIpJz48L3BhdGg+XG5cdFx0XHRcdFx0XHRcdDxwYXRoIGQ9J00tMSw3LjEyMDMwNDYgTDUuODU3MzM4NDEsMyBMNi4zNzIzNzY0OCwzLjg1NzE2NzMgTC0wLjQ4NDk2MTkyNSw3Ljk3NzQ3MTkgTC0xLDcuMTIwMzA0NiBMLTEsNy4xMjAzMDQ2IFonIGlkPSdSZWN0YW5nbGUtNDctQ29weS00JyBmaWxsPScjNEE1MzYxJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJyBtYXNrPSd1cmwoI21hc2stMiknPjwvcGF0aD5cblx0XHRcdFx0XHRcdFx0PHJlY3QgaWQ9J1JlY3RhbmdsZS01MCcgZmlsbD0nIzRBNTM2MScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCcgbWFzaz0ndXJsKCNtYXNrLTIpJyB4PSc0JyB5PSc2JyB3aWR0aD0nMScgaGVpZ2h0PSc1Jz48L3JlY3Q+XG5cdFx0XHRcdFx0XHRcdDxyZWN0IGlkPSdSZWN0YW5nbGUtNTEnIGZpbGw9JyM0QTUzNjEnIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnIG1hc2s9J3VybCgjbWFzay0yKScgeD0nMTEuNScgeT0nMycgd2lkdGg9JzEnIGhlaWdodD0nMTInPjwvcmVjdD5cblx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTUsNC44NTcxNjczIEwxMS44NTczMzg0LDguOTc3NDcxOSBMMTIuMzcyMzc2NSw4LjEyMDMwNDYgTDUuNTE1MDM4MDcsNCBMNSw0Ljg1NzE2NzMnIGlkPSdSZWN0YW5nbGUtNDctQ29weScgZmlsbD0nIzRBNTM2MScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCcgbWFzaz0ndXJsKCNtYXNrLTIpJz48L3BhdGg+XG5cdFx0XHRcdFx0XHRcdDxwYXRoIGQ9J001LDEyLjg1NzE2NzMgTDExLjg1NzMzODQsMTYuOTc3NDcxOSBMMTIuMzcyMzc2NSwxNi4xMjAzMDQ2IEw1LjUxNTAzODA3LDEyIEw1LDEyLjg1NzE2NzMnIGlkPSdSZWN0YW5nbGUtNDctQ29weS01JyBmaWxsPScjNEE1MzYxJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJyBtYXNrPSd1cmwoI21hc2stMiknPjwvcGF0aD5cblx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTExLjkwNDg5NzIsNi4xNDc2NjA2NCBMMTMuODcxNDIyNyw4LjMzMTcwODQ5IEwxMi40MDE5NTk2LDEwLjg3Njg5MzMgTDkuNTI3MjU1ODksMTAuMjY1ODU2MiBMOS4yMjAwNTQ0NSw3LjM0MzAyOTY1IEwxMS45MDQ4OTcyLDYuMTQ3NjYwNjQnIGlkPSdQb2x5Z29uLTEnIGZpbGw9JyNEOEQ4RDgnIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnIG1hc2s9J3VybCgjbWFzay0yKSc+PC9wYXRoPlxuXHRcdFx0XHRcdFx0XHQ8cGF0aCBkPSdNMTEuOTA0ODk3Miw2LjE0NzY2MDY0IEwxMy44NzE0MjI3LDguMzMxNzA4NDkgTDEyLjQwMTk1OTYsMTAuODc2ODkzMyBMOS41MjcyNTU4OSwxMC4yNjU4NTYyIEw5LjIyMDA1NDQ1LDcuMzQzMDI5NjUgTDExLjkwNDg5NzIsNi4xNDc2NjA2NCcgaWQ9J1BvbHlnb24tMS1Db3B5JyBmaWxsPScjNEE1MzYxJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJyBtYXNrPSd1cmwoI21hc2stMiknPjwvcGF0aD5cblx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTcuNDU3NzExODksMy4xOTUwNDczOSBMNy4zNTUxNDQ4NCw2LjEzMjE4MzMzIEw0LjUzMDA2NzYsNi45NDIyNjEyIEwyLjg4NjY0MDg5LDQuNTA1NzgwOSBMNC42OTYwMjQ1NywyLjE4OTg3NTQxIEw3LjQ1NzcxMTg5LDMuMTk1MDQ3MzknIGlkPSdQb2x5Z29uLTEtQ29weS0yJyBmaWxsPScjNEE1MzYxJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJyBtYXNrPSd1cmwoI21hc2stMiknPjwvcGF0aD5cblx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTcuNDU3NzExODksMTEuMTk1MDQ3NCBMNy4zNTUxNDQ4NCwxNC4xMzIxODMzIEw0LjUzMDA2NzYsMTQuOTQyMjYxMiBMMi44ODY2NDA4OSwxMi41MDU3ODA5IEw0LjY5NjAyNDU3LDEwLjE4OTg3NTQgTDcuNDU3NzExODksMTEuMTk1MDQ3NCcgaWQ9J1BvbHlnb24tMS1Db3B5LTMnIGZpbGw9JyM0QTUzNjEnIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnIG1hc2s9J3VybCgjbWFzay0yKSc+PC9wYXRoPlxuXHRcdFx0XHRcdFx0XHQ8cGF0aCBkPSdNMTQuNTQzMTcwMSwwLjA3MjU5MzkzMTQgTDE0LjQ0MDYwMzEsMy4wMDk3Mjk4OCBMMTEuNjE1NTI1OCwzLjgxOTgwNzc0IEw5Ljk3MjA5OTEyLDEuMzgzMzI3NDUgTDExLjc4MTQ4MjgsLTAuOTMyNTc4MDUgTDE0LjU0MzE3MDEsMC4wNzI1OTM5MzE0JyBpZD0nUG9seWdvbi0xLUNvcHktNCcgZmlsbD0nIzRBNTM2MScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCcgbWFzaz0ndXJsKCNtYXNrLTIpJz48L3BhdGg+XG5cdFx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHQ8L2c+XG5cdFx0XHQ8L3N2Zz5cIlxuXHRhbmltYWxzOiBcIjw/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyc/PlxuXHRcdFx0PHN2ZyB3aWR0aD0nMTdweCcgaGVpZ2h0PScxNnB4JyB2aWV3Qm94PScwIDAgMTcgMTcnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycgeG1sbnM6c2tldGNoPSdodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMnPlxuXHRcdFx0XHQ8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNS4yICgyNTIzNSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdFx0XHRcdDx0aXRsZT5Hcm91cDwvdGl0bGU+XG5cdFx0XHRcdDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdFx0XHQ8ZGVmcz48L2RlZnM+XG5cdFx0XHRcdDxnIGlkPSdQYWdlLTEnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIHNrZXRjaDp0eXBlPSdNU1BhZ2UnPlxuXHRcdFx0XHRcdDxnIGlkPSdpUGhvbmUtNicgc2tldGNoOnR5cGU9J01TQXJ0Ym9hcmRHcm91cCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTExNy4wMDAwMDAsIC02MzkuMDAwMDAwKScgc3Ryb2tlPScjNEE1MzYxJz5cblx0XHRcdFx0XHRcdDxnIGlkPSdpY19Gb29kJyBza2V0Y2g6dHlwZT0nTVNMYXllckdyb3VwJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgxMTguMDAwMDAwLCA2NDAuMDAwMDAwKSc+XG5cdFx0XHRcdFx0XHRcdDxnIGlkPSdHcm91cCcgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCc+XG5cdFx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTUuNjgzNzc1MzcsMS4zODE1NjY0NiBDNi4yMzkyNjA2NiwxLjEzNjI0IDYuODUzNzIwMDUsMSA3LjUsMSBDOC4xNDYyNzk5NSwxIDguNzYwNzM5MzQsMS4xMzYyNCA5LjMxNjIyNDYzLDEuMzgxNTY2NDYgQzkuODA4NzkyNzUsMC41NjIzNTkwMTkgMTAuODI1NTg4OCwwIDEyLDAgQzEzLjY1Njg1NDIsMCAxNSwxLjExOTI4ODEzIDE1LDIuNSBDMTUsMy41NTcxMzk4IDE0LjIxMjYyNDYsNC40NjEwMjg0MyAxMy4wOTk5MjI2LDQuODI2NjI1MTQgQzE0LjI0OTY1MjgsNS42NDE4NTQyMiAxNSw2Ljk4MzMwMDYyIDE1LDguNSBDMTUsMTAuNzE2NzE0NCAxMy4zOTcxODczLDEyLjU1OTA3MTkgMTEuMjg3MjY3MSwxMi45MzEzNjczIEMxMC40ODY3MjQ4LDE0LjE3NTc3MDMgOS4wODk2MTY5NiwxNSA3LjUsMTUgQzUuOTEwMzgzMDQsMTUgNC41MTMyNzUyNCwxNC4xNzU3NzAzIDMuNzEyNzMyOTEsMTIuOTMxMzY3MyBDMS42MDI4MTI2OCwxMi41NTkwNzE5IDAsMTAuNzE2NzE0NCAwLDguNSBDMCw2Ljk4MzMwMDYyIDAuNzUwMzQ3MjQ0LDUuNjQxODU0MjIgMS45MDAwNzc0MSw0LjgyNjYyNTE0IEMwLjc4NzM3NTQ0NSw0LjQ2MTAyODQzIDAsMy41NTcxMzk4IDAsMi41IEMwLDEuMTE5Mjg4MTMgMS4zNDMxNDU3NSwwIDMsMCBDNC4xNzQ0MTEyMiwwIDUuMTkxMjA3MjUsMC41NjIzNTkwMTkgNS42ODM3NzUzNywxLjM4MTU2NjQ2IFonIGlkPSdPdmFsLTgnPjwvcGF0aD5cblx0XHRcdFx0XHRcdFx0XHQ8cGF0aCBkPSdNNS43MzgzNDIyOCwxMiBDNS44NjI5MDk3OSwxMiA2LjE0NjQyMzUzLDEyIDYuMTQ2NDIzNTMsMTIgQzYuMTQ2NDIzNTMsMTIgNi40MzIxNTY5NiwxMi40NDI2MTIzIDYuNTI0NjU4MiwxMi40OTE5NzM5IEM2LjY2NDU1NjAxLDEyLjU2NjYyNzcgNywxMi40OTE5NzM5IDcsMTIuNDkxOTczOSBMNywxMiBMOCwxMiBMOCwxMi40OTE5NzM5IEw4LjQ5Nzk5MjI4LDEyLjQ5MTk3MzkgTDguODQzMDE3NjksMTIgTDkuMzkxODQ1NywxMiBDOS4zOTE4NDU3LDEyIDguOTk1OTg0NTcsMTIuOTgzOTQ3OCA4LjQ5Nzk5MjI4LDEyLjk4Mzk0NzggTDYuNjA3MDI0MDcsMTIuOTgzOTQ3OCBDNi4yMTQwNDgxMywxMi45ODM5NDc4IDUuNDU5OTYwOTQsMTIgNS43MzgzNDIyOCwxMiBaJyBpZD0nUmVjdGFuZ2xlLTQ0LUNvcHktMic+PC9wYXRoPlxuXHRcdFx0XHRcdFx0XHRcdDxjaXJjbGUgaWQ9J092YWwtMTQnIGN4PScxMC41JyBjeT0nNy41JyByPScwLjUnPjwvY2lyY2xlPlxuXHRcdFx0XHRcdFx0XHRcdDxjaXJjbGUgaWQ9J092YWwtMTQtQ29weScgY3g9JzQuNScgY3k9JzcuNScgcj0nMC41Jz48L2NpcmNsZT5cblx0XHRcdFx0XHRcdFx0XHQ8cGF0aCBkPSdNMTIuNjk5OTk2OSw1IEMxMi42OTk5OTY5LDMuMDY3MDAzMzggMTEuMTMyOTkzNiwxLjUgOS4xOTk5OTY5NSwxLjUnIGlkPSdPdmFsLTE2Jz48L3BhdGg+XG5cdFx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTUuNSw1IEM1LjUsMy4wNjcwMDMzOCAzLjkzMjk5NjYyLDEuNSAyLDEuNScgaWQ9J092YWwtMTYtQ29weScgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMy43NTAwMDAsIDMuMjUwMDAwKSBzY2FsZSgtMSwgMSkgdHJhbnNsYXRlKC0zLjc1MDAwMCwgLTMuMjUwMDAwKSAnPjwvcGF0aD5cblx0XHRcdFx0XHRcdFx0XHQ8cmVjdCBpZD0nUmVjdGFuZ2xlLTQ0LUNvcHknIHg9JzcnIHk9JzExJyB3aWR0aD0nMScgaGVpZ2h0PScxJz48L3JlY3Q+XG5cdFx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTYsMTAgTDYuNSwxMCBMNi40OTk5OTk5OSw5LjUgTDguNTAwMDAwMDUsOS41IEw4LjUwMDAwMDA1LDEwIEw5LDEwIEw5LDEwLjUgTDguNSwxMC41IEw4LjUsMTEgTDYuNSwxMSBMNi41LDEwLjUgTDYsMTAuNSBMNiwxMCBaJyBpZD0nUGF0aCc+PC9wYXRoPlxuXHRcdFx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHQ8L2c+XG5cdFx0XHQ8L3N2Zz5cIlxuXHRjaGV2cm9uIDogXCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0XHQ8c3ZnIHdpZHRoPScxM3B4JyBoZWlnaHQ9JzIycHgnIHZpZXdCb3g9JzAgMCAxMyAyMicgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJz5cblx0XHQgICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjYuMSAoMjYzMTMpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdCAgICA8dGl0bGU+QmFjayBDaGV2cm9uPC90aXRsZT5cblx0XHQgICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0ICAgIDxkZWZzPjwvZGVmcz5cblx0XHQgICAgPGcgaWQ9J1BhZ2UtMScgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCc+XG5cdFx0ICAgICAgICA8ZyBpZD0nTmF2aWdhdGlvbi1CYXIvQmFjaycgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTguMDAwMDAwLCAtMzEuMDAwMDAwKScgZmlsbD0nIzAwNzZGRic+XG5cdFx0ICAgICAgICAgICAgPHBhdGggZD0nTTguNSw0MiBMMTksMzEuNSBMMjEsMzMuNSBMMTIuNSw0MiBMMjEsNTAuNSBMMTksNTIuNSBMOC41LDQyIFonIGlkPSdCYWNrLUNoZXZyb24nPjwvcGF0aD5cblx0XHQgICAgICAgIDwvZz5cblx0XHQgICAgPC9nPlxuXHRcdDwvc3ZnPlwiXG5cdGVtb2ppczogW1wi8J+YgFwiLCBcIvCfmKxcIiwgXCLwn5iBXCIsIFwi8J+YglwiLCBcIvCfmINcIiwgXCLwn5iEXCIsIFwi8J+YhVwiLCBcIvCfmIZcIiwgXCLwn5iHXCIsIFwi8J+YiVwiLCBcIvCfmIpcIiwgXCLwn5mCXCIsIFwi8J+Zg1wiLCBcIuKYuu+4j1wiLCBcIvCfmItcIiwgXCLwn5iMXCIsIFwi8J+YjVwiLCBcIvCfmJhcIiwgXCLwn5iXXCIsIFwi8J+YmVwiLCBcIvCfmJpcIiwgXCLwn5icXCIsIFwi8J+YnVwiLCBcIvCfmJtcIiwgXCLwn6SRXCIsIFwi8J+kk1wiLCBcIvCfmI5cIiwgXCLwn6SXXCIsIFwi8J+Yj1wiLCBcIvCfmLZcIiwgXCLwn5iQXCIsIFwi8J+YkVwiLCBcIvCfmJJcIiwgXCLwn5mEXCIsIFwi8J+klFwiLCBcIvCfmLNcIiwgXCLwn5ieXCIsIFwi8J+Yn1wiLCBcIvCfmKBcIiwgXCLwn5ihXCIsIFwi8J+YlFwiLCBcIvCfmJVcIiwgXCLwn5mBXCIsIFwi4pi577iPXCIsIFwi8J+Yo1wiLCBcIvCfmJZcIiwgXCLwn5irXCIsIFwi8J+YqVwiLCBcIvCfmKRcIiwgXCLwn5iuXCIsIFwi8J+YsVwiLCBcIvCfmKhcIiwgXCLwn5iwXCIsIFwi8J+Yr1wiLCBcIvCfmKZcIiwgXCLwn5inXCIsIFwi8J+YolwiLCBcIvCfmKVcIiwgXCLwn5iqXCIsIFwi8J+Yk1wiLCBcIvCfmK1cIiwgXCLwn5i1XCIsIFwi8J+YslwiLCBcIvCfpJBcIiwgXCLwn5i3XCIsIFwi8J+kklwiLCBcIvCfpJVcIiwgXCLwn5i0XCIsIFwi8J+SpFwiLCBcIvCfkqlcIiwgXCLwn5iIXCIsIFwi8J+Rv1wiLCBcIvCfkblcIiwgXCLwn5G6XCIsIFwi8J+SgFwiLCBcIvCfkbtcIiwgXCLwn5G9XCIsIFwi8J+kllwiLCBcIvCfmLpcIiwgXCLwn5i4XCIsIFwi8J+YuVwiLCBcIvCfmLtcIiwgXCLwn5i8XCIsIFwi8J+YvVwiLCBcIvCfmYBcIiwgXCLwn5i/XCIsIFwi8J+YvlwiLCBcIvCfmYxcIiwgXCLwn5GPXCIsIFwi8J+Ri1wiLCBcIvCfkY1cIiwgXCLwn5GOXCIsIFwi8J+RilwiLCBcIuKcilwiLCBcIuKcjO+4j1wiLCBcIvCfkYxcIiwgXCLinItcIiwgXCLwn5GQXCIsIFwi8J+SqlwiLCBcIvCfmY9cIiwgXCLimJ3vuI9cIiwgXCLwn5GGXCIsIFwi8J+Rh1wiLCBcIvCfkYhcIiwgXCLwn5GJXCIsIFwi8J+WlVwiLCBcIvCflpBcIiwgXCLwn6SYXCIsIFwi8J+WllwiLCBcIuKcje+4j1wiLCBcIvCfkoVcIiwgXCLwn5GEXCIsIFwi8J+RhVwiLCBcIvCfkYJcIiwgXCLwn5GDXCIsIFwi8J+RgVwiLCBcIvCfkYBcIiwgXCLwn5GkXCIsIFwi8J+RpVwiLCBcIvCfl6NcIiwgXCLwn5G2XCIsIFwi8J+RplwiLCBcIvCfkadcIiwgXCLwn5GoXCIsIFwi8J+RqVwiLCBcIvCfkbFcIiwgXCLwn5G0XCIsIFwi8J+RtVwiLCBcIvCfkbJcIiwgXCLwn5GzXCIsIFwi8J+RrlwiLCBcIvCfkbdcIiwgXCLwn5KCXCIsIFwi8J+VtVwiLCBcIvCfjoVcIiwgXCLwn5G8XCIsIFwi8J+RuFwiLCBcIvCfkbBcIiwgXCLwn5q2XCIsIFwi8J+Pg1wiLCBcIvCfkoNcIiwgXCLwn5GvXCIsIFwi8J+Rq1wiLCBcIvCfkaxcIiwgXCLwn5GtXCIsIFwi8J+Zh1wiLCBcIvCfkoFcIiwgXCLwn5mFXCIsIFwi8J+ZhlwiLCBcIvCfmYtcIiwgXCLwn5mOXCIsIFwi8J+ZjVwiLCBcIvCfkodcIiwgXCLwn5KGXCIsIFwi8J+SkVwiLCBcIvCfkanigI3inaTvuI/igI3wn5GpXCIsIFwi8J+RqOKAjeKdpO+4j+KAjfCfkahcIiwgXCLwn5KPXCIsIFwi8J+RqeKAjeKdpO+4j+KAjfCfkovigI3wn5GpXCIsIFwi8J+RqOKAjeKdpO+4j+KAjfCfkovigI3wn5GoXCIsIFwi8J+RqlwiLCBcIvCfkajigI3wn5Gp4oCN8J+Rp1wiLCBcIvCfkajigI3wn5Gp4oCN8J+Rp+KAjfCfkaZcIiwgXCLwn5Go4oCN8J+RqeKAjfCfkabigI3wn5GmXCIsIFwi8J+RqOKAjfCfkanigI3wn5Gn4oCN8J+Rp1wiLCBcIvCfkanigI3wn5Gp4oCN8J+RplwiLCBcIvCfkanigI3wn5Gp4oCN8J+Rp1wiLCBcIvCfkanigI3wn5Gp4oCN8J+Rp+KAjfCfkaZcIiwgXCLwn5Gp4oCN8J+RqeKAjfCfkabigI3wn5GmXCIsIFwi8J+RqeKAjfCfkanigI3wn5Gn4oCN8J+Rp1wiLCBcIvCfkajigI3wn5Go4oCN8J+RplwiLCBcIvCfkajigI3wn5Go4oCN8J+Rp1wiLCBcIvCfkajigI3wn5Go4oCN8J+Rp+KAjfCfkaZcIiwgXCLwn5Go4oCN8J+RqOKAjfCfkabigI3wn5GmXCIsIFwi8J+RqOKAjfCfkajigI3wn5Gn4oCN8J+Rp1wiLCBcIvCfkZpcIiwgXCLwn5GVXCIsIFwi8J+RllwiLCBcIvCfkZRcIiwgXCLwn5GXXCIsIFwi8J+RmVwiLCBcIvCfkZhcIiwgXCLwn5KEXCIsIFwi8J+Si1wiLCBcIvCfkaNcIiwgXCLwn5GgXCIsIFwi8J+RoVwiLCBcIvCfkaJcIiwgXCLwn5GeXCIsIFwi8J+Rn1wiLCBcIvCfkZJcIiwgXCLwn46pXCIsIFwi4puRXCIsIFwi8J+Ok1wiLCBcIvCfkZFcIiwgXCLwn46SXCIsIFwi8J+RnVwiLCBcIvCfkZtcIiwgXCLwn5GcXCIsIFwi8J+SvFwiLCBcIvCfkZNcIiwgXCLwn5W2XCIsIFwi8J+SjVwiLCBcIvCfjIJcIiwgXCLwn5uRXCIsIFwi8J+QtlwiLCBcIvCfkLFcIiwgXCLwn5CtXCIsIFwi8J+QuVwiLCBcIvCfkLBcIiwgXCLwn5C7XCIsIFwi8J+QvFwiLCBcIvCfkKhcIiwgXCLwn5CvXCIsIFwi8J+mgVwiLCBcIvCfkK5cIiwgXCLwn5C3XCIsIFwi8J+QvVwiLCBcIvCfkLhcIiwgXCLwn5CZXCIsIFwi8J+QtVwiLCBcIvCfmYhcIiwgXCLwn5mJXCIsIFwi8J+ZilwiLCBcIvCfkJJcIiwgXCLwn5CUXCIsIFwi8J+Qp1wiLCBcIvCfkKZcIiwgXCLwn5CkXCIsIFwi8J+Qo1wiLCBcIvCfkKVcIiwgXCLwn5C6XCIsIFwi8J+Ql1wiLCBcIvCfkLRcIiwgXCLwn6aEXCIsIFwi8J+QnVwiLCBcIvCfkJtcIiwgXCLwn5CMXCIsIFwi8J+QnlwiLCBcIvCfkJxcIiwgXCLwn5W3XCIsIFwi8J+mglwiLCBcIvCfpoBcIiwgXCLwn5CNXCIsIFwi8J+QolwiLCBcIvCfkKBcIiwgXCLwn5CfXCIsIFwi8J+QoVwiLCBcIvCfkKxcIiwgXCLwn5CzXCIsIFwi8J+Qi1wiLCBcIvCfkIpcIiwgXCLwn5CGXCIsIFwi8J+QhVwiLCBcIvCfkINcIiwgXCLwn5CCXCIsIFwi8J+QhFwiLCBcIvCfkKpcIiwgXCLwn5CrXCIsIFwi8J+QmFwiLCBcIvCfkJBcIiwgXCLwn5CPXCIsIFwi8J+QkVwiLCBcIvCfkI5cIiwgXCLwn5CWXCIsIFwi8J+QgFwiLCBcIvCfkIFcIiwgXCLwn5CTXCIsIFwi8J+mg1wiLCBcIvCflYpcIiwgXCLwn5CVXCIsIFwi8J+QqVwiLCBcIvCfkIhcIiwgXCLwn5CHXCIsIFwi8J+Qv1wiLCBcIvCfkL5cIiwgXCLwn5CJXCIsIFwi8J+QslwiLCBcIvCfjLVcIiwgXCLwn46EXCIsIFwi8J+MslwiLCBcIvCfjLNcIiwgXCLwn4y0XCIsIFwi8J+MsVwiLCBcIvCfjL9cIiwgXCLimJhcIiwgXCLwn42AXCIsIFwi8J+OjVwiLCBcIvCfjotcIiwgXCLwn42DXCIsIFwi8J+NglwiLCBcIvCfjYFcIiwgXCLwn4y+XCIsIFwi8J+MulwiLCBcIvCfjLpcIiwgXCLwn4y7XCIsIFwi8J+MuVwiLCBcIvCfjLdcIiwgXCLwn4y8XCIsIFwi8J+MuFwiLCBcIvCfkpBcIiwgXCLwn42EXCIsIFwi8J+MsFwiLCBcIvCfjoNcIiwgXCLwn5CaXCIsIFwi8J+VuFwiLCBcIvCfjI5cIiwgXCLwn4yNXCIsIFwi8J+Mj1wiLCBcIvCfjJVcIiwgXCLwn4yWXCIsIFwi8J+Ml1wiLCBcIvCfjJhcIiwgXCLwn4yRXCIsIFwi8J+MklwiLCBcIvCfjJNcIiwgXCLwn4yUXCIsIFwi8J+MmlwiLCBcIvCfjJ1cIiwgXCLwn4ybXCIsIFwi8J+MnFwiLCBcIvCfjJ5cIiwgXCLwn4yZXCIsIFwi4q2Q77iPXCIsIFwi8J+Mn1wiLCBcIvCfkqtcIiwgXCLinKhcIiwgXCLimITvuI9cIiwgXCLimIDvuI9cIiwgXCLwn4ykXCIsIFwi4puF77iPXCIsIFwi8J+MpVwiLCBcIvCfjKZcIiwgXCLimIHvuI9cIiwgXCLwn4ynXCIsIFwi4puIXCIsIFwi8J+MqVwiLCBcIuKaoe+4j1wiLCBcIvCflKVcIiwgXCLwn5KlXCIsIFwi4p2E77iPXCIsIFwi8J+MqFwiLCBcIuKYg++4j1wiLCBcIuKbhO+4j1wiLCBcIvCfjKxcIiwgXCLwn5KoXCIsIFwi8J+MqlwiLCBcIvCfjKtcIiwgXCLimILvuI9cIiwgXCLimJTvuI9cIiwgXCLwn5KnXCIsIFwi8J+SplwiLCBcIvCfjIpcIiwgXCLwn5uRXCIsIFwi8J+bkVwiLCBcIvCfjY9cIiwgXCLwn42OXCIsIFwi8J+NkFwiLCBcIvCfjYpcIiwgXCLwn42LXCIsIFwi8J+NjFwiLCBcIvCfjYlcIiwgXCLwn42HXCIsIFwi8J+Nk1wiLCBcIvCfjYhcIiwgXCLwn42SXCIsIFwi8J+NkVwiLCBcIvCfjY1cIiwgXCLwn42FXCIsIFwi8J+NhlwiLCBcIvCfjLZcIiwgXCLwn4y9XCIsIFwi8J+NoFwiLCBcIvCfja9cIiwgXCLwn42eXCIsIFwi8J+ngFwiLCBcIvCfjZdcIiwgXCLwn42WXCIsIFwi8J+NpFwiLCBcIvCfjbNcIiwgXCLwn42UXCIsIFwi8J+Nn1wiLCBcIvCfjK1cIiwgXCLwn42VXCIsIFwi8J+NnVwiLCBcIvCfjK5cIiwgXCLwn4yvXCIsIFwi8J+NnFwiLCBcIvCfjbJcIiwgXCLwn42lXCIsIFwi8J+No1wiLCBcIvCfjbFcIiwgXCLwn42bXCIsIFwi8J+NmVwiLCBcIvCfjZpcIiwgXCLwn42YXCIsIFwi8J+NolwiLCBcIvCfjaFcIiwgXCLwn42nXCIsIFwi8J+NqFwiLCBcIvCfjaZcIiwgXCLwn42wXCIsIFwi8J+OglwiLCBcIvCfja5cIiwgXCLwn42sXCIsIFwi8J+NrVwiLCBcIvCfjatcIiwgXCLwn42/XCIsIFwi8J+NqVwiLCBcIvCfjapcIiwgXCLwn426XCIsIFwi8J+Nu1wiLCBcIvCfjbdcIiwgXCLwn424XCIsIFwi8J+NuVwiLCBcIvCfjb5cIiwgXCLwn422XCIsIFwi8J+NtVwiLCBcIuKYle+4j1wiLCBcIvCfjbxcIiwgXCLwn420XCIsIFwi8J+NvVwiLCBcIvCfm5FcIiwgXCLwn5uRXCIsIFwi8J+bkVwiLCBcIuKave+4j1wiLCBcIvCfj4BcIiwgXCLwn4+IXCIsIFwi4pq+77iPXCIsIFwi8J+OvlwiLCBcIvCfj5BcIiwgXCLwn4+JXCIsIFwi8J+OsVwiLCBcIuKbs++4j1wiLCBcIvCfj4xcIiwgXCLwn4+TXCIsIFwi8J+PuFwiLCBcIvCfj5JcIiwgXCLwn4+RXCIsIFwi8J+Pj1wiLCBcIvCfjr9cIiwgXCLim7dcIiwgXCLwn4+CXCIsIFwi4pu4XCIsIFwi8J+PuVwiLCBcIvCfjqNcIiwgXCLwn5qjXCIsIFwi8J+PilwiLCBcIvCfj4RcIiwgXCLwn5uAXCIsIFwi4pu5XCIsIFwi8J+Pi1wiLCBcIvCfmrRcIiwgXCLwn5q1XCIsIFwi8J+Ph1wiLCBcIvCflbRcIiwgXCLwn4+GXCIsIFwi8J+OvVwiLCBcIvCfj4VcIiwgXCLwn46WXCIsIFwi8J+Ol1wiLCBcIvCfj7VcIiwgXCLwn46rXCIsIFwi8J+On1wiLCBcIvCfjq1cIiwgXCLwn46oXCIsIFwi8J+OqlwiLCBcIvCfjqRcIiwgXCLwn46nXCIsIFwi8J+OvFwiLCBcIvCfjrlcIiwgXCLwn463XCIsIFwi8J+OulwiLCBcIvCfjrhcIiwgXCLwn467XCIsIFwi8J+OrFwiLCBcIvCfjq5cIiwgXCLwn5G+XCIsIFwi8J+Or1wiLCBcIvCfjrJcIiwgXCLwn46wXCIsIFwi8J+Os1wiLCBcIvCfm5FcIiwgXCLwn5uRXCIsIFwi8J+bkVwiLCBcIvCfmpdcIiwgXCLwn5qVXCIsIFwi8J+amVwiLCBcIvCfmoxcIiwgXCLwn5qOXCIsIFwi8J+PjlwiLCBcIvCfmpNcIiwgXCLwn5qRXCIsIFwi8J+aklwiLCBcIvCfmpBcIiwgXCLwn5qaXCIsIFwi8J+am1wiLCBcIvCfmpxcIiwgXCLwn4+NXCIsIFwi8J+aslwiLCBcIvCfmqhcIiwgXCLwn5qUXCIsIFwi8J+ajVwiLCBcIvCfmphcIiwgXCLwn5qWXCIsIFwi8J+aoVwiLCBcIvCfmqBcIiwgXCLwn5qvXCIsIFwi8J+ag1wiLCBcIvCfmotcIiwgXCLwn5qdXCIsIFwi8J+ahFwiLCBcIvCfmoVcIiwgXCLwn5qIXCIsIFwi8J+anlwiLCBcIvCfmoJcIiwgXCLwn5qGXCIsIFwi8J+ah1wiLCBcIvCfmopcIiwgXCLwn5qJXCIsIFwi8J+agVwiLCBcIvCfm6lcIiwgXCLinIjvuI9cIiwgXCLwn5urXCIsIFwi8J+brFwiLCBcIuKbte+4j1wiLCBcIvCfm6VcIiwgXCLwn5qkXCIsIFwi4pu0XCIsIFwi8J+bs1wiLCBcIvCfmoBcIiwgXCLwn5uwXCIsIFwi8J+SulwiLCBcIuKak++4j1wiLCBcIvCfmqdcIiwgXCLim73vuI9cIiwgXCLwn5qPXCIsIFwi8J+aplwiLCBcIvCfmqVcIiwgXCLwn4+BXCIsIFwi8J+aolwiLCBcIvCfjqFcIiwgXCLwn46iXCIsIFwi8J+OoFwiLCBcIvCfj5dcIiwgXCLwn4yBXCIsIFwi8J+XvFwiLCBcIvCfj61cIiwgXCLim7LvuI9cIiwgXCLwn46RXCIsIFwi4puwXCIsIFwi8J+PlFwiLCBcIvCfl7tcIiwgXCLwn4yLXCIsIFwi8J+XvlwiLCBcIvCfj5VcIiwgXCLim7rvuI9cIiwgXCLwn4+eXCIsIFwi8J+bo1wiLCBcIvCfm6RcIiwgXCLwn4yFXCIsIFwi8J+MhFwiLCBcIvCfj5xcIiwgXCLwn4+WXCIsIFwi8J+PnVwiLCBcIvCfjIdcIiwgXCLwn4yGXCIsIFwi8J+PmVwiLCBcIvCfjINcIiwgXCLwn4yJXCIsIFwi8J+MjFwiLCBcIvCfjKBcIiwgXCLwn46HXCIsIFwi8J+OhlwiLCBcIvCfjIhcIiwgXCLwn4+YXCIsIFwi8J+PsFwiLCBcIvCfj69cIiwgXCLwn4+fXCIsIFwi8J+XvVwiLCBcIvCfj6BcIiwgXCLwn4+hXCIsIFwi8J+PmlwiLCBcIvCfj6JcIiwgXCLwn4+sXCIsIFwi8J+Po1wiLCBcIvCfj6RcIiwgXCLwn4+lXCIsIFwi8J+PplwiLCBcIvCfj6hcIiwgXCLwn4+qXCIsIFwi8J+Pq1wiLCBcIvCfj6lcIiwgXCLwn5KSXCIsIFwi8J+Pm1wiLCBcIuKbqu+4j1wiLCBcIvCflYxcIiwgXCLwn5WNXCIsIFwi8J+Vi1wiLCBcIuKbqVwiLCBcIuKMmu+4j1wiLCBcIvCfk7FcIiwgXCLwn5OyXCIsIFwi8J+Su1wiLCBcIuKMqO+4j1wiLCBcIvCflqVcIiwgXCLwn5aoXCIsIFwi8J+WsVwiLCBcIvCflrJcIiwgXCLwn5W5XCIsIFwi8J+XnFwiLCBcIvCfkr1cIiwgXCLwn5K+XCIsIFwi8J+Sv1wiLCBcIvCfk4BcIiwgXCLwn5O8XCIsIFwi8J+Tt1wiLCBcIvCfk7hcIiwgXCLwn5O5XCIsIFwi8J+OpVwiLCBcIvCfk71cIiwgXCLwn46eXCIsIFwi8J+TnlwiLCBcIuKYju+4j1wiLCBcIvCfk59cIiwgXCLwn5OgXCIsIFwi8J+TulwiLCBcIvCfk7tcIiwgXCLwn46ZXCIsIFwi8J+OmlwiLCBcIvCfjptcIiwgXCLij7FcIiwgXCLij7JcIiwgXCLij7BcIiwgXCLwn5WwXCIsIFwi4o+zXCIsIFwi4oyb77iPXCIsIFwi8J+ToVwiLCBcIvCflItcIiwgXCLwn5SMXCIsIFwi8J+SoVwiLCBcIvCflKZcIiwgXCLwn5WvXCIsIFwi8J+XkVwiLCBcIvCfm6JcIiwgXCLwn5K4XCIsIFwi8J+StVwiLCBcIvCfkrRcIiwgXCLwn5K2XCIsIFwi8J+St1wiLCBcIvCfkrBcIiwgXCLwn5KzXCIsIFwi8J+SjlwiLCBcIuKallwiLCBcIvCflKdcIiwgXCLwn5SoXCIsIFwi4pqSXCIsIFwi8J+boFwiLCBcIuKbj1wiLCBcIvCflKlcIiwgXCLimplcIiwgXCLim5NcIiwgXCLwn5SrXCIsIFwi8J+So1wiLCBcIvCflKpcIiwgXCLwn5ehXCIsIFwi4pqUXCIsIFwi8J+boVwiLCBcIvCfmqxcIiwgXCLimKDvuI9cIiwgXCLimrBcIiwgXCLimrFcIiwgXCLwn4+6XCIsIFwi8J+UrlwiLCBcIvCfk79cIiwgXCLwn5KIXCIsIFwi4pqXXCIsIFwi8J+UrVwiLCBcIvCflKxcIiwgXCLwn5WzXCIsIFwi8J+SilwiLCBcIvCfkolcIiwgXCLwn4yhXCIsIFwi8J+Pt1wiLCBcIvCflJZcIiwgXCLwn5q9XCIsIFwi8J+av1wiLCBcIvCfm4FcIiwgXCLwn5SRXCIsIFwi8J+XnVwiLCBcIvCfm4tcIiwgXCLwn5uMXCIsIFwi8J+bj1wiLCBcIvCfmqpcIiwgXCLwn5uOXCIsIFwi8J+WvFwiLCBcIvCfl7pcIiwgXCLim7FcIiwgXCLwn5e/XCIsIFwi8J+bjVwiLCBcIvCfjohcIiwgXCLwn46PXCIsIFwi8J+OgFwiLCBcIvCfjoFcIiwgXCLwn46KXCIsIFwi8J+OiVwiLCBcIvCfjo5cIiwgXCLwn46QXCIsIFwi8J+OjFwiLCBcIvCfj65cIiwgXCLinInvuI9cIiwgXCLwn5OpXCIsIFwi8J+TqFwiLCBcIvCfk6dcIiwgXCLwn5KMXCIsIFwi8J+TrlwiLCBcIvCfk6pcIiwgXCLwn5OrXCIsIFwi8J+TrFwiLCBcIvCfk61cIiwgXCLwn5OmXCIsIFwi8J+Tr1wiLCBcIvCfk6VcIiwgXCLwn5OkXCIsIFwi8J+TnFwiLCBcIvCfk4NcIiwgXCLwn5ORXCIsIFwi8J+TilwiLCBcIvCfk4hcIiwgXCLwn5OJXCIsIFwi8J+ThFwiLCBcIvCfk4VcIiwgXCLwn5OGXCIsIFwi8J+Xk1wiLCBcIvCfk4dcIiwgXCLwn5eDXCIsIFwi8J+Xs1wiLCBcIvCfl4RcIiwgXCLwn5OLXCIsIFwi8J+XklwiLCBcIvCfk4FcIiwgXCLwn5OCXCIsIFwi8J+XglwiLCBcIvCfl55cIiwgXCLwn5OwXCIsIFwi8J+Tk1wiLCBcIvCfk5VcIiwgXCLwn5OXXCIsIFwi8J+TmFwiLCBcIvCfk5lcIiwgXCLwn5OUXCIsIFwi8J+TklwiLCBcIvCfk5pcIiwgXCLwn5OWXCIsIFwi8J+Ul1wiLCBcIvCfk45cIiwgXCLwn5aHXCIsIFwi4pyC77iPXCIsIFwi8J+TkFwiLCBcIvCfk49cIiwgXCLwn5OMXCIsIFwi8J+TjVwiLCBcIvCfmqlcIiwgXCLwn4+zXCIsIFwi8J+PtFwiLCBcIvCflJBcIiwgXCLwn5SSXCIsIFwi8J+Uk1wiLCBcIvCflI9cIiwgXCLwn5aKXCIsIFwi8J+Wi1wiLCBcIuKcku+4j1wiLCBcIvCfk51cIiwgXCLinI/vuI9cIiwgXCLwn5aNXCIsIFwi8J+WjFwiLCBcIvCflI1cIiwgXCLwn5SOXCIsIFwi8J+bkVwiLCBcIvCfm5FcIiwgXCLinaTvuI9cIiwgXCLwn5KbXCIsIFwi8J+SmlwiLCBcIvCfkplcIiwgXCLwn5KcXCIsIFwi8J+SlFwiLCBcIuKdo++4j1wiLCBcIvCfkpVcIiwgXCLwn5KeXCIsIFwi8J+Sk1wiLCBcIvCfkpdcIiwgXCLwn5KWXCIsIFwi8J+SmFwiLCBcIvCfkp1cIiwgXCLwn5KfXCIsIFwi4piu77iPXCIsIFwi4pyd77iPXCIsIFwi4piq77iPXCIsIFwi8J+ViVwiLCBcIuKYuO+4j1wiLCBcIuKcoe+4j1wiLCBcIvCflK9cIiwgXCLwn5WOXCIsIFwi4piv77iPXCIsIFwi4pim77iPXCIsIFwi8J+bkFwiLCBcIuKbjlwiLCBcIuKZiO+4j1wiLCBcIuKZie+4j1wiLCBcIuKZiu+4j1wiLCBcIuKZi++4j1wiLCBcIuKZjO+4j1wiLCBcIuKZje+4j1wiLCBcIuKZju+4j1wiLCBcIuKZj++4j1wiLCBcIuKZkO+4j1wiLCBcIuKZke+4j1wiLCBcIuKZku+4j1wiLCBcIuKZk++4j1wiLCBcIvCfhpRcIiwgXCLimptcIiwgXCLwn4izXCIsIFwi8J+IuVwiLCBcIuKYou+4j1wiLCBcIuKYo++4j1wiLCBcIvCfk7RcIiwgXCLwn5OzXCIsIFwi8J+ItlwiLCBcIvCfiJrvuI9cIiwgXCLwn4i4XCIsIFwi8J+IulwiLCBcIvCfiLfvuI9cIiwgXCLinLTvuI9cIiwgXCLwn4aaXCIsIFwi8J+JkVwiLCBcIvCfkq5cIiwgXCLwn4mQXCIsIFwi44qZ77iPXCIsIFwi44qX77iPXCIsIFwi8J+ItFwiLCBcIvCfiLVcIiwgXCLwn4iyXCIsIFwi8J+FsO+4j1wiLCBcIvCfhbHvuI9cIiwgXCLwn4aOXCIsIFwi8J+GkVwiLCBcIvCfhb7vuI9cIiwgXCLwn4aYXCIsIFwi4puU77iPXCIsIFwi8J+Tm1wiLCBcIvCfmqtcIiwgXCLinYxcIiwgXCLirZXvuI9cIiwgXCLwn5KiXCIsIFwi4pmo77iPXCIsIFwi8J+at1wiLCBcIvCfmq9cIiwgXCLwn5qzXCIsIFwi8J+asVwiLCBcIvCflJ5cIiwgXCLwn5O1XCIsIFwi4p2X77iPXCIsIFwi4p2VXCIsIFwi4p2TXCIsIFwi4p2UXCIsIFwi4oC877iPXCIsIFwi4oGJ77iPXCIsIFwi8J+Sr1wiLCBcIvCflIVcIiwgXCLwn5SGXCIsIFwi8J+UsVwiLCBcIuKanFwiLCBcIuOAve+4j1wiLCBcIuKaoO+4j1wiLCBcIvCfmrhcIiwgXCLwn5SwXCIsIFwi4pm777iPXCIsIFwi8J+Ir++4j1wiLCBcIvCfkrlcIiwgXCLinYfvuI9cIiwgXCLinLPvuI9cIiwgXCLinY5cIiwgXCLinIVcIiwgXCLwn5KgXCIsIFwi8J+MgFwiLCBcIuKev1wiLCBcIvCfjJBcIiwgXCLik4LvuI9cIiwgXCLwn4+nXCIsIFwi8J+Igu+4j1wiLCBcIvCfm4JcIiwgXCLwn5uDXCIsIFwi8J+bhFwiLCBcIvCfm4VcIiwgXCLimb/vuI9cIiwgXCLwn5qtXCIsIFwi8J+avlwiLCBcIvCfhb/vuI9cIiwgXCLwn5qwXCIsIFwi8J+auVwiLCBcIvCfmrpcIiwgXCLwn5q8XCIsIFwi8J+au1wiLCBcIvCfmq5cIiwgXCLwn46mXCIsIFwi8J+TtlwiLCBcIvCfiIFcIiwgXCLwn4aWXCIsIFwi8J+Gl1wiLCBcIvCfhplcIiwgXCLwn4aSXCIsIFwi8J+GlVwiLCBcIvCfhpNcIiwgXCIw77iP4oOjXCIsIFwiMe+4j+KDo1wiLCBcIjLvuI/ig6NcIiwgXCIz77iP4oOjXCIsIFwiNO+4j+KDo1wiLCBcIjXvuI/ig6NcIiwgXCI277iP4oOjXCIsIFwiN++4j+KDo1wiLCBcIjjvuI/ig6NcIiwgXCI577iP4oOjXCIsIFwi8J+Un1wiLCBcIvCflKJcIiwgXCLilrbvuI9cIiwgXCLij7hcIiwgXCLij69cIiwgXCLij7lcIiwgXCLij7pcIiwgXCLij61cIiwgXCLij65cIiwgXCLij6lcIiwgXCLij6pcIiwgXCLwn5SAXCIsIFwi8J+UgVwiLCBcIvCflIJcIiwgXCLil4DvuI9cIiwgXCLwn5S8XCIsIFwi8J+UvVwiLCBcIuKPq1wiLCBcIuKPrFwiLCBcIuKeoe+4j1wiLCBcIuKshe+4j1wiLCBcIuKshu+4j1wiLCBcIuKsh++4j1wiLCBcIuKGl++4j1wiLCBcIuKGmO+4j1wiLCBcIuKGme+4j1wiLCBcIuKGlu+4j1wiLCBcIuKGle+4j1wiLCBcIuKGlO+4j1wiLCBcIvCflIRcIiwgXCLihqrvuI9cIiwgXCLihqnvuI9cIiwgXCLipLTvuI9cIiwgXCLipLXvuI9cIiwgXCIj77iP4oOjXCIsIFwiKu+4j+KDo1wiLCBcIuKEue+4j1wiLCBcIvCflKRcIiwgXCLwn5ShXCIsIFwi8J+UoFwiLCBcIvCflKNcIiwgXCLwn461XCIsIFwi8J+OtlwiLCBcIuOAsO+4j1wiLCBcIuKesFwiLCBcIuKclO+4j1wiLCBcIvCflINcIiwgXCLinpVcIiwgXCLinpZcIiwgXCLinpdcIiwgXCLinJbvuI9cIiwgXCLwn5KyXCIsIFwi8J+SsVwiLCBcIsKp77iPXCIsIFwiwq7vuI9cIiwgXCLihKLvuI9cIiwgXCLwn5SaXCIsIFwi8J+UmVwiLCBcIvCflJtcIiwgXCLwn5SdXCIsIFwi8J+UnFwiLCBcIuKYke+4j1wiLCBcIvCflJhcIiwgXCLimqrvuI9cIiwgXCLimqvvuI9cIiwgXCLwn5S0XCIsIFwi8J+UtVwiLCBcIvCflLhcIiwgXCLwn5S5XCIsIFwi8J+UtlwiLCBcIvCflLdcIiwgXCLwn5S6XCIsIFwi4paq77iPXCIsIFwi4par77iPXCIsIFwi4qyb77iPXCIsIFwi4qyc77iPXCIsIFwi8J+Uu1wiLCBcIuKXvO+4j1wiLCBcIuKXu++4j1wiLCBcIuKXvu+4j1wiLCBcIuKXve+4j1wiLCBcIvCflLJcIiwgXCLwn5SzXCIsIFwi8J+UiFwiLCBcIvCflIlcIiwgXCLwn5SKXCIsIFwi8J+Uh1wiLCBcIvCfk6NcIiwgXCLwn5OiXCIsIFwi8J+UlFwiLCBcIvCflJVcIiwgXCLwn4OPXCIsIFwi8J+AhO+4j1wiLCBcIuKZoO+4j1wiLCBcIuKZo++4j1wiLCBcIuKZpe+4j1wiLCBcIuKZpu+4j1wiLCBcIvCfjrRcIiwgXCLwn5GB4oCN8J+XqFwiLCBcIvCfkq1cIiwgXCLwn5evXCIsIFwi8J+SrFwiLCBcIvCflZBcIiwgXCLwn5WRXCIsIFwi8J+VklwiLCBcIvCflZNcIiwgXCLwn5WUXCIsIFwi8J+VlVwiLCBcIvCflZZcIiwgXCLwn5WXXCIsIFwi8J+VmFwiLCBcIvCflZlcIiwgXCLwn5WaXCIsIFwi8J+Vm1wiLCBcIvCflZxcIiwgXCLwn5WdXCIsIFwi8J+VnlwiLCBcIvCflZ9cIiwgXCLwn5WgXCIsIFwi8J+VoVwiLCBcIvCflaJcIiwgXCLwn5WjXCIsIFwi8J+VpFwiLCBcIvCflaVcIiwgXCLwn5WmXCIsIFwi8J+Vp1wiLCBcIvCfm5FcIiwgXCLwn4em8J+Hq1wiLCBcIvCfh6bwn4e9XCIsIFwi8J+HpvCfh7FcIiwgXCLwn4ep8J+Hv1wiLCBcIvCfh6bwn4e4XCIsIFwi8J+HpvCfh6lcIiwgXCLwn4em8J+HtFwiLCBcIvCfh6bwn4euXCIsIFwi8J+HpvCfh7ZcIiwgXCLwn4em8J+HrFwiLCBcIvCfh6bwn4e3XCIsIFwi8J+HpvCfh7JcIiwgXCLwn4em8J+HvFwiLCBcIvCfh6bwn4e6XCIsIFwi8J+HpvCfh7lcIiwgXCLwn4em8J+Hv1wiLCBcIvCfh6fwn4e4XCIsIFwi8J+Hp/Cfh61cIiwgXCLwn4en8J+HqVwiLCBcIvCfh6fwn4enXCIsIFwi8J+Hp/Cfh75cIiwgXCLwn4en8J+HqlwiLCBcIvCfh6fwn4e/XCIsIFwi8J+Hp/Cfh69cIiwgXCLwn4en8J+HslwiLCBcIvCfh6fwn4e5XCIsIFwi8J+Hp/Cfh7RcIiwgXCLwn4en8J+HtlwiLCBcIvCfh6fwn4emXCIsIFwi8J+Hp/Cfh7xcIiwgXCLwn4en8J+Ht1wiLCBcIvCfh67wn4e0XCIsIFwi8J+Hu/Cfh6xcIiwgXCLwn4en8J+Hs1wiLCBcIvCfh6fwn4esXCIsIFwi8J+Hp/Cfh6tcIiwgXCLwn4en8J+HrlwiLCBcIvCfh6jwn4e7XCIsIFwi8J+HsPCfh61cIiwgXCLwn4eo8J+HslwiLCBcIvCfh6jwn4emXCIsIFwi8J+HrvCfh6hcIiwgXCLwn4ew8J+HvlwiLCBcIvCfh6jwn4erXCIsIFwi8J+HufCfh6lcIiwgXCLwn4eo8J+HsVwiLCBcIvCfh6jwn4ezXCIsIFwi8J+HqPCfh71cIiwgXCLwn4eo8J+HqFwiLCBcIvCfh6jwn4e0XCIsIFwi8J+HsPCfh7JcIiwgXCLwn4eo8J+HrFwiLCBcIvCfh6jwn4epXCIsIFwi8J+HqPCfh7BcIiwgXCLwn4eo8J+Ht1wiLCBcIvCfh63wn4e3XCIsIFwi8J+HqPCfh7pcIiwgXCLwn4eo8J+HvFwiLCBcIvCfh6jwn4e+XCIsIFwi8J+HqPCfh79cIiwgXCLwn4ep8J+HsFwiLCBcIvCfh6nwn4evXCIsIFwi8J+HqfCfh7JcIiwgXCLwn4ep8J+HtFwiLCBcIvCfh6rwn4eoXCIsIFwi8J+HqvCfh6xcIiwgXCLwn4e48J+Hu1wiLCBcIvCfh6zwn4e2XCIsIFwi8J+HqvCfh7dcIiwgXCLwn4eq8J+HqlwiLCBcIvCfh6rwn4e5XCIsIFwi8J+HqvCfh7pcIiwgXCLwn4er8J+HsFwiLCBcIvCfh6vwn4e0XCIsIFwi8J+Hq/Cfh69cIiwgXCLwn4er8J+HrlwiLCBcIvCfh6vwn4e3XCIsIFwi8J+HrPCfh6tcIiwgXCLwn4e18J+Hq1wiLCBcIvCfh7nwn4erXCIsIFwi8J+HrPCfh6ZcIiwgXCLwn4es8J+HslwiLCBcIvCfh6zwn4eqXCIsIFwi8J+HqfCfh6pcIiwgXCLwn4es8J+HrVwiLCBcIvCfh6zwn4euXCIsIFwi8J+HrPCfh7dcIiwgXCLwn4es8J+HsVwiLCBcIvCfh6zwn4epXCIsIFwi8J+HrPCfh7VcIiwgXCLwn4es8J+HulwiLCBcIvCfh6zwn4e5XCIsIFwi8J+HrPCfh6xcIiwgXCLwn4es8J+Hs1wiLCBcIvCfh6zwn4e8XCIsIFwi8J+HrPCfh75cIiwgXCLwn4et8J+HuVwiLCBcIvCfh63wn4ezXCIsIFwi8J+HrfCfh7BcIiwgXCLwn4et8J+HulwiLCBcIvCfh67wn4e4XCIsIFwi8J+HrvCfh7NcIiwgXCLwn4eu8J+HqVwiLCBcIvCfh67wn4e3XCIsIFwi8J+HrvCfh7ZcIiwgXCLwn4eu8J+HqlwiLCBcIvCfh67wn4eyXCIsIFwi8J+HrvCfh7FcIiwgXCLwn4eu8J+HuVwiLCBcIvCfh6jwn4euXCIsIFwi8J+Hr/Cfh7JcIiwgXCLwn4ev8J+HtVwiLCBcIvCfh6/wn4eqXCIsIFwi8J+Hr/Cfh7RcIiwgXCLwn4ew8J+Hv1wiLCBcIvCfh7Dwn4eqXCIsIFwi8J+HsPCfh65cIiwgXCLwn4e98J+HsFwiLCBcIvCfh7Dwn4e8XCIsIFwi8J+HsPCfh6xcIiwgXCLwn4ex8J+HplwiLCBcIvCfh7Hwn4e7XCIsIFwi8J+HsfCfh6dcIiwgXCLwn4ex8J+HuFwiLCBcIvCfh7Hwn4e3XCIsIFwi8J+HsfCfh75cIiwgXCLwn4ex8J+HrlwiLCBcIvCfh7Hwn4e5XCIsIFwi8J+HsfCfh7pcIiwgXCLwn4ey8J+HtFwiLCBcIvCfh7Lwn4ewXCIsIFwi8J+HsvCfh6xcIiwgXCLwn4ey8J+HvFwiLCBcIvCfh7Lwn4e+XCIsIFwi8J+HsvCfh7tcIiwgXCLwn4ey8J+HsVwiLCBcIvCfh7Lwn4e5XCIsIFwi8J+HsvCfh61cIiwgXCLwn4ey8J+HtlwiLCBcIvCfh7Lwn4e3XCIsIFwi8J+HsvCfh7pcIiwgXCLwn4e+8J+HuVwiLCBcIvCfh7Lwn4e9XCIsIFwi8J+Hq/Cfh7JcIiwgXCLwn4ey8J+HqVwiLCBcIvCfh7Lwn4eoXCIsIFwi8J+HsvCfh7NcIiwgXCLwn4ey8J+HqlwiLCBcIvCfh7Lwn4e4XCIsIFwi8J+HsvCfh6ZcIiwgXCLwn4ey8J+Hv1wiLCBcIvCfh7Lwn4eyXCIsIFwi8J+Hs/Cfh6ZcIiwgXCLwn4ez8J+Ht1wiLCBcIvCfh7Pwn4e1XCIsIFwi8J+Hs/Cfh7FcIiwgXCLwn4ez8J+HqFwiLCBcIvCfh7Pwn4e/XCIsIFwi8J+Hs/Cfh65cIiwgXCLwn4ez8J+HqlwiLCBcIvCfh7Pwn4esXCIsIFwi8J+Hs/Cfh7pcIiwgXCLwn4ez8J+Hq1wiLCBcIvCfh7Lwn4e1XCIsIFwi8J+HsPCfh7VcIiwgXCLwn4ez8J+HtFwiLCBcIvCfh7Twn4eyXCIsIFwi8J+HtfCfh7BcIiwgXCLwn4e18J+HvFwiLCBcIvCfh7Xwn4e4XCIsIFwi8J+HtfCfh6ZcIiwgXCLwn4e18J+HrFwiLCBcIvCfh7Xwn4e+XCIsIFwi8J+HtfCfh6pcIiwgXCLwn4e18J+HrVwiLCBcIvCfh7Xwn4ezXCIsIFwi8J+HtfCfh7FcIiwgXCLwn4e18J+HuVwiLCBcIvCfh7Xwn4e3XCIsIFwi8J+HtvCfh6ZcIiwgXCLwn4e38J+HqlwiLCBcIvCfh7fwn4e0XCIsIFwi8J+Ht/Cfh7pcIiwgXCLwn4e38J+HvFwiLCBcIvCfh6fwn4exXCIsIFwi8J+HuPCfh61cIiwgXCLwn4ew8J+Hs1wiLCBcIvCfh7Hwn4eoXCIsIFwi8J+HtfCfh7JcIiwgXCLwn4e78J+HqFwiLCBcIvCfh7zwn4e4XCIsIFwi8J+HuPCfh7JcIiwgXCLwn4e48J+HuVwiLCBcIvCfh7jwn4emXCIsIFwi8J+HuPCfh7NcIiwgXCLwn4e38J+HuFwiLCBcIvCfh7jwn4eoXCIsIFwi8J+HuPCfh7FcIiwgXCLwn4e48J+HrFwiLCBcIvCfh7jwn4e9XCIsIFwi8J+HuPCfh7BcIiwgXCLwn4e48J+HrlwiLCBcIvCfh7jwn4enXCIsIFwi8J+HuPCfh7RcIiwgXCLwn4e/8J+HplwiLCBcIvCfh6zwn4e4XCIsIFwi8J+HsPCfh7dcIiwgXCLwn4e48J+HuFwiLCBcIvCfh6rwn4e4XCIsIFwi8J+HsfCfh7BcIiwgXCLwn4e48J+HqVwiLCBcIvCfh7jwn4e3XCIsIFwi8J+HuPCfh79cIiwgXCLwn4e48J+HqlwiLCBcIvCfh6jwn4etXCIsIFwi8J+HuPCfh75cIiwgXCLwn4e58J+HvFwiLCBcIvCfh7nwn4evXCIsIFwi8J+HufCfh79cIiwgXCLwn4e58J+HrVwiLCBcIvCfh7nwn4exXCIsIFwi8J+HufCfh6xcIiwgXCLwn4e58J+HsFwiLCBcIvCfh7nwn4e0XCIsIFwi8J+HufCfh7lcIiwgXCLwn4e58J+Hs1wiLCBcIvCfh7nwn4e3XCIsIFwi8J+HufCfh7JcIiwgXCLwn4e58J+HqFwiLCBcIvCfh7nwn4e7XCIsIFwi8J+HuvCfh6xcIiwgXCLwn4e68J+HplwiLCBcIvCfh6bwn4eqXCIsIFwi8J+HrPCfh6dcIiwgXCLwn4e68J+HuFwiLCBcIvCfh7vwn4euXCIsIFwi8J+HuvCfh75cIiwgXCLwn4e68J+Hv1wiLCBcIvCfh7vwn4e6XCIsIFwi8J+Hu/Cfh6ZcIiwgXCLwn4e78J+HqlwiLCBcIvCfh7vwn4ezXCIsIFwi8J+HvPCfh6tcIiwgXCLwn4eq8J+HrVwiLCBcIvCfh77wn4eqXCIsIFwi8J+Hv/Cfh7JcIiwgXCLwn4e/8J+HvFwiXVxuXHRlbW9qaSA6IFwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdFx0PHN2ZyB3aWR0aD0nMjBweCcgaGVpZ2h0PScyMHB4JyB2aWV3Qm94PScwIDAgMjAgMjAnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycgeG1sbnM6c2tldGNoPSdodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMnPlxuXHRcdFx0PCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjUuMiAoMjUyMzUpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdFx0PHRpdGxlPkVtb2ppPC90aXRsZT5cblx0XHRcdDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdFx0PGRlZnM+PC9kZWZzPlxuXHRcdFx0PGcgaWQ9J1BhZ2UtMScgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCcgc2tldGNoOnR5cGU9J01TUGFnZSc+XG5cdFx0XHRcdDxnIGlkPSdLZXlib2FyZC9MaWdodC9Mb3dlcicgc2tldGNoOnR5cGU9J01TTGF5ZXJHcm91cCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTYwLjAwMDAwMCwgLTE4MS4wMDAwMDApJyBmaWxsPScjMDMwMzAzJz5cblx0XHRcdFx0XHQ8ZyBpZD0nQm90dG9tLVJvdycgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMy4wMDAwMDAsIDE3MC4wMDAwMDApJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJz5cblx0XHRcdFx0XHRcdDxwYXRoIGQ9J002Ni43NSwzMC41IEM3Mi4xMzQ3NzYzLDMwLjUgNzYuNSwyNi4xMzQ3NzYzIDc2LjUsMjAuNzUgQzc2LjUsMTUuMzY1MjIzNyA3Mi4xMzQ3NzYzLDExIDY2Ljc1LDExIEM2MS4zNjUyMjM3LDExIDU3LDE1LjM2NTIyMzcgNTcsMjAuNzUgQzU3LDI2LjEzNDc3NjMgNjEuMzY1MjIzNywzMC41IDY2Ljc1LDMwLjUgWiBNNjYuNzUsMjkuNSBDNzEuNTgyNDkxNiwyOS41IDc1LjUsMjUuNTgyNDkxNiA3NS41LDIwLjc1IEM3NS41LDE1LjkxNzUwODQgNzEuNTgyNDkxNiwxMiA2Ni43NSwxMiBDNjEuOTE3NTA4NCwxMiA1OCwxNS45MTc1MDg0IDU4LDIwLjc1IEM1OCwyNS41ODI0OTE2IDYxLjkxNzUwODQsMjkuNSA2Ni43NSwyOS41IFogTTYzLjc1LDE5IEM2NC40NDAzNTU5LDE5IDY1LDE4LjQ0MDM1NTkgNjUsMTcuNzUgQzY1LDE3LjA1OTY0NDEgNjQuNDQwMzU1OSwxNi41IDYzLjc1LDE2LjUgQzYzLjA1OTY0NDEsMTYuNSA2Mi41LDE3LjA1OTY0NDEgNjIuNSwxNy43NSBDNjIuNSwxOC40NDAzNTU5IDYzLjA1OTY0NDEsMTkgNjMuNzUsMTkgWiBNNjkuNzUsMTkgQzcwLjQ0MDM1NTksMTkgNzEsMTguNDQwMzU1OSA3MSwxNy43NSBDNzEsMTcuMDU5NjQ0MSA3MC40NDAzNTU5LDE2LjUgNjkuNzUsMTYuNSBDNjkuMDU5NjQ0MSwxNi41IDY4LjUsMTcuMDU5NjQ0MSA2OC41LDE3Ljc1IEM2OC41LDE4LjQ0MDM1NTkgNjkuMDU5NjQ0MSwxOSA2OS43NSwxOSBaIE01OS44ODc2MzM0LDIyLjE2NDE0NDQgQzU5LjYzOTAzMTYsMjEuMzgzMTM0IDYwLjA2NTkxOCwyMC45Nzg1MTU2IDYwLjg1MzA5NTEsMjEuMjMyOTMwNCBDNjAuODUzMDk1MSwyMS4yMzI5MzA0IDYzLjA5Mzc1MDMsMjIuMjEyNSA2Ni43NTAwMDAxLDIyLjIxMjUgQzcwLjQwNjI0OTksMjIuMjEyNSA3Mi42NDY5MDQ3LDIxLjIzMjkzMDQgNzIuNjQ2OTA0NywyMS4yMzI5MzA0IEM3My40Mjg3MTYyLDIwLjk2NjIxNTMgNzMuODgxMjQ2MywyMS40MDQ0MDk3IDczLjYwNTg0NzcsMjIuMTgwNzQzNyBDNzMuNjA1ODQ3NywyMi4xODA3NDM3IDcyLjYsMjcuNTc1IDY2Ljc1LDI3LjU3NSBDNjAuOSwyNy41NzUgNTkuODg3NjMzNCwyMi4xNjQxNDQ0IDU5Ljg4NzYzMzQsMjIuMTY0MTQ0NCBaIE02Ni43NSwyMy4xODc1IEM2NC4wNjg3NSwyMy4xODc1IDYxLjg1NDQwNTUsMjIuNDczNzgyMSA2MS44NTQ0MDU1LDIyLjQ3Mzc4MjEgQzYxLjMyNzMwMTksMjIuMzI5NDggNjEuMTc4MTIzMywyMi41NzIxNjE1IDYxLjU2Mzk1NTUsMjIuOTU3MDc1IEM2MS41NjM5NTU1LDIyLjk1NzA3NSA2Mi4zNjI1LDI0LjY1IDY2Ljc1LDI0LjY1IEM3MS4xMzc1LDI0LjY1IDcxLjk1MDg1MDMsMjIuOTQzODMwNCA3MS45NTA4NTAzLDIyLjk0MzgzMDQgQzcyLjMwOTM2NTksMjIuNTM5OTI3OCA3Mi4xNjkwNzkzLDIyLjMzNTk4NDQgNzEuNjM1NDI3MywyMi40NzYzNDkgQzcxLjYzNTQyNzMsMjIuNDc2MzQ5IDY5LjQzMTI1LDIzLjE4NzUgNjYuNzUsMjMuMTg3NSBaJyBpZD0nRW1vamknPjwvcGF0aD5cblx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdDwvZz5cblx0XHRcdDwvZz5cblx0XHQ8L3N2Zz5cIlxuXHRkZWxldGU6IHtcblx0XHRvbiA6IFwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdFx0XHRcdDxzdmcgd2lkdGg9JzI0cHgnIGhlaWdodD0nMThweCcgdmlld0JveD0nMCAwIDI0IDE4JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHhtbG5zOnNrZXRjaD0naHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zJz5cblx0XHRcdFx0XHQ8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNS4yICgyNTIzNSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdFx0XHRcdFx0PHRpdGxlPkJhY2s8L3RpdGxlPlxuXHRcdFx0XHRcdDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdFx0XHRcdDxkZWZzPjwvZGVmcz5cblx0XHRcdFx0XHQ8ZyBpZD0nUGFnZS0xJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJyBza2V0Y2g6dHlwZT0nTVNQYWdlJz5cblx0XHRcdFx0XHRcdDxnIGlkPSdLZXlib2FyZC9MaWdodC9VcHBlcicgc2tldGNoOnR5cGU9J01TTGF5ZXJHcm91cCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTMzOS4wMDAwMDAsIC0xMzAuMDAwMDAwKScgZmlsbD0nIzAzMDMwMyc+XG5cdFx0XHRcdFx0XHRcdDxnIGlkPSdUaGlyZC1Sb3cnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDMuMDAwMDAwLCAxMTguMDAwMDAwKScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCc+XG5cdFx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTM1MS42NDI2NjMsMjAuOTc3NjkwMyBMMzU0LjQ2Njc5NSwxOC4xNTM1NTg1IEMzNTQuNzYwMTA2LDE3Ljg2MDI0NzYgMzU0Ljc2Mzk4MywxNy4zODE0OTYyIDM1NC40NzEwOSwxNy4wODg2MDMgQzM1NC4xNzYxNTUsMTYuNzkzNjY3NyAzNTMuNzAxNCwxNi43OTc2MzI4IDM1My40MDYxMzUsMTcuMDkyODk4MyBMMzUwLjU4MjAwMywxOS45MTcwMzAxIEwzNDcuNzU3ODcxLDE3LjA5Mjg5ODMgQzM0Ny40NjQ1NiwxNi43OTk1ODc0IDM0Ni45ODU4MDksMTYuNzk1NzA5NyAzNDYuNjkyOTE2LDE3LjA4ODYwMyBDMzQ2LjM5Nzk4LDE3LjM4MzUzODIgMzQ2LjQwMTk0NSwxNy44NTgyOTMgMzQ2LjY5NzIxMSwxOC4xNTM1NTg1IEwzNDkuNTIxMzQzLDIwLjk3NzY5MDMgTDM0Ni42OTcyMTEsMjMuODAxODIyIEMzNDYuNDAzOSwyNC4wOTUxMzI5IDM0Ni40MDAwMjIsMjQuNTczODg0MyAzNDYuNjkyOTE2LDI0Ljg2Njc3NzYgQzM0Ni45ODc4NTEsMjUuMTYxNzEyOCAzNDcuNDYyNjA2LDI1LjE1Nzc0NzcgMzQ3Ljc1Nzg3MSwyNC44NjI0ODIyIEwzNTAuNTgyMDAzLDIyLjAzODM1MDQgTDM1My40MDYxMzUsMjQuODYyNDgyMiBDMzUzLjY5OTQ0NSwyNS4xNTU3OTMxIDM1NC4xNzgxOTcsMjUuMTU5NjcwOCAzNTQuNDcxMDksMjQuODY2Nzc3NiBDMzU0Ljc2NjAyNSwyNC41NzE4NDIzIDM1NC43NjIwNiwyNC4wOTcwODc1IDM1NC40NjY3OTUsMjMuODAxODIyIEwzNTEuNjQyNjYzLDIwLjk3NzY5MDMgWiBNMzM3LjA1OTM0NSwyMi4wNTkzNDQ1IEMzMzYuNDc0Mjg1LDIxLjQ3NDI4NDcgMzM2LjQ4MTM1MSwyMC41MTg2NDg5IDMzNy4wNTkzNDUsMTkuOTQwNjU1NSBMMzQzLjc4OTkxNSwxMy4yMTAwODUzIEMzNDQuMTgyMDg0LDEyLjgxNzkxNiAzNDQuOTQ4OTIsMTIuNSAzNDUuNTA3NDg0LDEyLjUgTDM1Ni4wMDIwOTgsMTIuNSBDMzU3LjkzMzkzNiwxMi41IDM1OS41LDE0LjA2ODg0NzcgMzU5LjUsMTYuMDAxNzk4MyBMMzU5LjUsMjUuOTk4MjAxNyBDMzU5LjUsMjcuOTMyMTkxNSAzNTcuOTIzMDg4LDI5LjUgMzU2LjAwMjA5OCwyOS41IEwzNDUuNTA3NDg0LDI5LjUgQzM0NC45NTEwNjYsMjkuNSAzNDQuMTc3MTY5LDI5LjE3NzE2OTMgMzQzLjc4OTkxNSwyOC43ODk5MTQ4IEwzMzcuMDU5MzQ1LDIyLjA1OTM0NDUgWicgaWQ9J0JhY2snPjwvcGF0aD5cblx0XHRcdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0PC9zdmc+XCJcblx0XHRvZmYgOiBcIjw/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyc/PlxuXHRcdDxzdmcgd2lkdGg9JzI0cHgnIGhlaWdodD0nMThweCcgdmlld0JveD0nMCAwIDI0IDE4JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHhtbG5zOnNrZXRjaD0naHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zJz5cblx0XHRcdDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy41LjIgKDI1MjM1KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHRcdDx0aXRsZT5CYWNrPC90aXRsZT5cblx0XHRcdDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdFx0PGRlZnM+PC9kZWZzPlxuXHRcdFx0PGcgaWQ9J1BhZ2UtMScgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCcgc2tldGNoOnR5cGU9J01TUGFnZSc+XG5cdFx0XHRcdDxnIGlkPSdLZXlib2FyZC9MaWdodC9VcHBlcicgc2tldGNoOnR5cGU9J01TTGF5ZXJHcm91cCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTMzOS4wMDAwMDAsIC0xMzAuMDAwMDAwKScgZmlsbD0nIzAzMDMwMyc+XG5cdFx0XHRcdFx0PGcgaWQ9J1RoaXJkLVJvdycgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMy4wMDAwMDAsIDExOC4wMDAwMDApJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJz5cblx0XHRcdFx0XHRcdDxwYXRoIGQ9J00zMzcuMDU5MzQ1LDIyLjA1OTM0NDUgQzMzNi40NzQyODUsMjEuNDc0Mjg0NyAzMzYuNDgxMzUxLDIwLjUxODY0ODkgMzM3LjA1OTM0NSwxOS45NDA2NTU1IEwzNDMuNzg5OTE1LDEzLjIxMDA4NTMgQzM0NC4xODIwODQsMTIuODE3OTE2IDM0NC45NDg5MiwxMi41IDM0NS41MDc0ODQsMTIuNSBMMzU2LjAwMjA5OCwxMi41IEMzNTcuOTMzOTM2LDEyLjUgMzU5LjUsMTQuMDY4ODQ3NyAzNTkuNSwxNi4wMDE3OTgzIEwzNTkuNSwyNS45OTgyMDE3IEMzNTkuNSwyNy45MzIxOTE1IDM1Ny45MjMwODgsMjkuNSAzNTYuMDAyMDk4LDI5LjUgTDM0NS41MDc0ODQsMjkuNSBDMzQ0Ljk1MTA2NiwyOS41IDM0NC4xNzcxNjksMjkuMTc3MTY5MyAzNDMuNzg5OTE1LDI4Ljc4OTkxNDggTDMzNy4wNTkzNDUsMjIuMDU5MzQ0NSBaIE0zNTEuNjQyNjYzLDIwLjk3NzY5MDMgTDM1NC40NjY3OTUsMTguMTUzNTU4NSBDMzU0Ljc2MDEwNiwxNy44NjAyNDc2IDM1NC43NjM5ODMsMTcuMzgxNDk2MiAzNTQuNDcxMDksMTcuMDg4NjAzIEMzNTQuMTc2MTU1LDE2Ljc5MzY2NzcgMzUzLjcwMTQsMTYuNzk3NjMyOCAzNTMuNDA2MTM1LDE3LjA5Mjg5ODMgTDM1MC41ODIwMDMsMTkuOTE3MDMwMSBMMzQ3Ljc1Nzg3MSwxNy4wOTI4OTgzIEMzNDcuNDY0NTYsMTYuNzk5NTg3NCAzNDYuOTg1ODA5LDE2Ljc5NTcwOTcgMzQ2LjY5MjkxNiwxNy4wODg2MDMgQzM0Ni4zOTc5OCwxNy4zODM1MzgyIDM0Ni40MDE5NDUsMTcuODU4MjkzIDM0Ni42OTcyMTEsMTguMTUzNTU4NSBMMzQ5LjUyMTM0MywyMC45Nzc2OTAzIEwzNDYuNjk3MjExLDIzLjgwMTgyMiBDMzQ2LjQwMzksMjQuMDk1MTMyOSAzNDYuNDAwMDIyLDI0LjU3Mzg4NDMgMzQ2LjY5MjkxNiwyNC44NjY3Nzc2IEMzNDYuOTg3ODUxLDI1LjE2MTcxMjggMzQ3LjQ2MjYwNiwyNS4xNTc3NDc3IDM0Ny43NTc4NzEsMjQuODYyNDgyMiBMMzUwLjU4MjAwMywyMi4wMzgzNTA0IEwzNTMuNDA2MTM1LDI0Ljg2MjQ4MjIgQzM1My42OTk0NDUsMjUuMTU1NzkzMSAzNTQuMTc4MTk3LDI1LjE1OTY3MDggMzU0LjQ3MTA5LDI0Ljg2Njc3NzYgQzM1NC43NjYwMjUsMjQuNTcxODQyMyAzNTQuNzYyMDYsMjQuMDk3MDg3NSAzNTQuNDY2Nzk1LDIzLjgwMTgyMiBMMzUxLjY0MjY2MywyMC45Nzc2OTAzIFogTTMzOC43MDk3MiwyMS43MDk3MTk1IEMzMzguMzE3NzUyLDIxLjMxNzc1MjIgMzM4LjMxODk2NSwyMC42ODEwMzQ5IDMzOC43MDk3MiwyMC4yOTAyODA1IEwzNDQuNjQzMjQ1LDE0LjM1Njc1NDcgQzM0NC44NDAyNzYsMTQuMTU5NzI0NSAzNDUuMjI1NjM5LDE0IDM0NS40OTM3NDEsMTQgTDM1NS45OTcyMzksMTQgQzM1Ny4xMDMzMzMsMTQgMzU3Ljk5OTk5OSwxNC44OTcwNjAxIDM1Ny45OTk5OTksMTYuMDA1ODU4NiBMMzU3Ljk5OTk5OSwyNS45OTQxNDEyIEMzNTcuOTk5OTk5LDI3LjEwMTk0NjQgMzU3LjEwNjQ1NywyNy45OTk5OTk5IDM1NS45OTcyMzksMjcuOTk5OTk5OSBMMzQ1LjQ5Mzc0MSwyOCBDMzQ1LjIyMTA1NiwyOCAzNDQuODQwNjQzLDI3Ljg0MDY0MzEgMzQ0LjY0MzI0NiwyNy42NDMyNDUzIEwzMzguNzA5NzIsMjEuNzA5NzE5NSBaJyBpZD0nQmFjayc+PC9wYXRoPlxuXHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0PC9nPlxuXHRcdFx0PC9nPlxuXHRcdDwvc3ZnPlwiXG5cdH1cblx0Zm9vZCA6ICBcIjw/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyc/PlxuXHRcdFx0PHN2ZyB3aWR0aD0nMTdweCcgaGVpZ2h0PScxNnB4JyB2aWV3Qm94PScwIDAgMTcgMTcnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycgeG1sbnM6c2tldGNoPSdodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMnPlxuXHRcdFx0XHQ8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNS4yICgyNTIzNSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdFx0XHRcdDx0aXRsZT5Gb29kPC90aXRsZT5cblx0XHRcdFx0PGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0XHRcdDxkZWZzPjwvZGVmcz5cblx0XHRcdFx0PGcgaWQ9J2lPUy05LUtleWJvYXJkcycgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCcgc2tldGNoOnR5cGU9J01TUGFnZSc+XG5cdFx0XHRcdFx0PGcgaWQ9J2lQaG9uZS02LVBvcnRyYWl0LUxpZ2h0LUNvcHknIHNrZXRjaDp0eXBlPSdNU0FydGJvYXJkR3JvdXAnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC0xNDguMDAwMDAwLCAtNjM3LjAwMDAwMCknPlxuXHRcdFx0XHRcdFx0PGcgaWQ9J0tleWJvYXJkcycgc2tldGNoOnR5cGU9J01TTGF5ZXJHcm91cCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMC4wMDAwMDAsIDQwOC4wMDAwMDApJz5cblx0XHRcdFx0XHRcdFx0PGcgaWQ9J0Zvb2QnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDE0OS41MDAwMDAsIDIyOS41MDAwMDApJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJz5cblx0XHRcdFx0XHRcdFx0XHQ8cGF0aCBkPSdNNS41LDE1LjUgTDEsMTUuNSBMMCw1IEw2LjUsNSBMNi4yNjM2MDkzMyw3LjQ4MjEwMjAyJyBpZD0nRHJpbmsnIHN0cm9rZT0nIzRBNTQ2MSc+PC9wYXRoPlxuXHRcdFx0XHRcdFx0XHRcdDxwYXRoIGQ9J002LjAxMDc3NTQ1LDEuOTY5MzAwOTggTDYuNTE1NzEzNTIsNS4yMjI3MDUzOSBMNS43MTkwODE4NCw1LjY3OTQ3ODEyIEw1LjAzODkwMDksMS45NjkzMDA5OCBMNC44NTU1NzI0NywxLjk2OTMwMDk4IEw0Ljg1NTU3MjQ3LDAuOTY5MzAwOTggTDguODU1NTcyNDcsMC45NjkzMDA5OCBMOC44NTU1NzI0NywxLjk2OTMwMDk4IEw2LjAxMDc3NTQ1LDEuOTY5MzAwOTggWicgaWQ9J1N0cmF3JyBmaWxsPScjNEE1NDYxJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSg2Ljg1NTU3MiwgMy4zMjQzOTApIHJvdGF0ZSgyNC4wMDAwMDApIHRyYW5zbGF0ZSgtNi44NTU1NzIsIC0zLjMyNDM5MCkgJz48L3BhdGg+XG5cdFx0XHRcdFx0XHRcdFx0PHJlY3QgaWQ9J0JvdHRvbS1CdW4nIHN0cm9rZT0nIzRBNTQ2MScgeD0nMycgeT0nMTQnIHdpZHRoPScxMC41JyBoZWlnaHQ9JzEuNScgcng9JzEnPjwvcmVjdD5cblx0XHRcdFx0XHRcdFx0XHQ8cGF0aCBkPSdNMS41LDEyLjUwMjQ0MDggQzEuNSwxMS45NDg4MDggMS45NDkxNjkxNiwxMS41IDIuNDkyNjg3MjMsMTEuNSBMMTQuMDA3MzEyOCwxMS41IEMxNC41NTU1NTg4LDExLjUgMTUsMTEuOTQ2OTQ5OSAxNSwxMi41MDI0NDA4IEwxNSwxMi45OTc1NTkyIEMxNSwxMy41NTExOTIgMTQuNTUwODMwOCwxNCAxNC4wMDczMTI4LDE0IEwyLjQ5MjY4NzIzLDE0IEMxLjk0NDQ0MTIxLDE0IDEuNSwxMy41NTMwNTAxIDEuNSwxMi45OTc1NTkyIEwxLjUsMTIuNTAyNDQwOCBaIE0zLjkzMzAwMDAzLDExLjgzOTI3MjcgQzMuNDE3NzE4MzQsMTEuNjUxODk3NiAzLjQ0NDgzNjk3LDExLjUgMy45OTU1Nzc1LDExLjUgTDEzLjAwNDQyMjUsMTEuNSBDMTMuNTU0MjY0OCwxMS41IDEzLjU4NjYwNjEsMTEuNjUwMzI1MSAxMy4wNjcsMTEuODM5MjcyNyBMOC41LDEzLjUgTDMuOTMzMDAwMDMsMTEuODM5MjcyNyBaJyBpZD0nJnF1b3Q7UGF0dHkmcXVvdDsnIGZpbGw9JyM0QTU0NjEnPjwvcGF0aD5cblx0XHRcdFx0XHRcdFx0XHQ8cGF0aCBkPSdNMi41LDEwLjUgTDEzLjUsMTAuNSBMMTUsMTEuNSBMMSwxMS41IEwyLjUsMTAuNSBaJyBpZD0nQ2hlZXNlJyBmaWxsPScjNEE1NDYxJz48L3BhdGg+XG5cdFx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTguMjUsMTAuNSBDMTEuNDI1NjM3MywxMC41IDE0LDEwLjMyODQyNzEgMTQsOS41IEMxNCw4LjY3MTU3Mjg4IDExLjQyNTYzNzMsOCA4LjI1LDggQzUuMDc0MzYyNjksOCAyLjUsOC42NzE1NzI4OCAyLjUsOS41IEMyLjUsMTAuMzI4NDI3MSA1LjA3NDM2MjY5LDEwLjUgOC4yNSwxMC41IFonIGlkPSdUb3AtQnVuJyBzdHJva2U9JyM0QTU0NjEnIHN0cm9rZS13aWR0aD0nMC43NSc+PC9wYXRoPlxuXHRcdFx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHQ8L2c+XG5cdFx0XHQ8L3N2Zz5cIlxuXHRmbGFnczogXCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0XHRcdDxzdmcgd2lkdGg9JzExcHgnIGhlaWdodD0nMTVweCcgdmlld0JveD0nMCAwIDExIDE1JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHhtbG5zOnNrZXRjaD0naHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zJz5cblx0XHRcdFx0PCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjUuMiAoMjUyMzUpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdFx0XHQ8dGl0bGU+RmxhZzwvdGl0bGU+XG5cdFx0XHRcdDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdFx0XHQ8ZGVmcz48L2RlZnM+XG5cdFx0XHRcdDxnIGlkPSdpT1MtOS1LZXlib2FyZHMnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIHNrZXRjaDp0eXBlPSdNU1BhZ2UnPlxuXHRcdFx0XHRcdDxnIGlkPSdpUGhvbmUtNi1Qb3J0cmFpdC1MaWdodC1Db3B5JyBza2V0Y2g6dHlwZT0nTVNBcnRib2FyZEdyb3VwJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtMjc1LjAwMDAwMCwgLTYzOS4wMDAwMDApJz5cblx0XHRcdFx0XHRcdDxnIGlkPSdLZXlib2FyZHMnIHNrZXRjaDp0eXBlPSdNU0xheWVyR3JvdXAnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDAuMDAwMDAwLCA0MDguMDAwMDAwKSc+XG5cdFx0XHRcdFx0XHRcdDxnIGlkPSdGbGFnJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgyNzUuMDAwMDAwLCAyMzEuNTAwMDAwKScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCc+XG5cdFx0XHRcdFx0XHRcdFx0PHJlY3QgaWQ9J1BvbGUnIGZpbGw9JyM0QTU0NjEnIHg9JzAnIHk9JzAnIHdpZHRoPScxJyBoZWlnaHQ9JzE0Jz48L3JlY3Q+XG5cdFx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTEsMSBDMSwxIDEuMjUsMiAzLjUsMiBDNS43NSwyIDYsMC43NDk5OTk5OTggOCwwLjc1IEMxMCwwLjc0OTk5OTk5OCAxMCwxLjUgMTAsMS41IEwxMCw3LjUgQzEwLDcuNSAxMCw2LjUgOCw2LjUgQzYsNi41IDQuODA2MjM5MTEsOCAzLjUsOCBDMi4xOTM3NjA4OSw4IDEsNyAxLDcgTDEsMSBaJyBzdHJva2U9JyM0QTU0NjEnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnPjwvcGF0aD5cblx0XHRcdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0PC9nPlxuXHRcdFx0PC9zdmc+XCJcblx0ZnJlcXVlbnQ6IFwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdFx0XHQ8c3ZnIHdpZHRoPScxN3B4JyBoZWlnaHQ9JzE2cHgnIHZpZXdCb3g9JzAgMCAxNyAxNicgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyB4bWxuczpza2V0Y2g9J2h0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaC9ucyc+XG5cdFx0XHRcdDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy41LjIgKDI1MjM1KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHRcdFx0PHRpdGxlPlJlY2VudDwvdGl0bGU+XG5cdFx0XHRcdDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdFx0XHQ8ZGVmcz48L2RlZnM+XG5cdFx0XHRcdDxnIGlkPSdpT1MtOS1LZXlib2FyZHMnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIHNrZXRjaDp0eXBlPSdNU1BhZ2UnPlxuXHRcdFx0XHRcdDxnIGlkPSdpUGhvbmUtNi1Qb3J0cmFpdC1MaWdodC1Db3B5JyBza2V0Y2g6dHlwZT0nTVNBcnRib2FyZEdyb3VwJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtNTUuMDAwMDAwLCAtNjM4LjAwMDAwMCknPlxuXHRcdFx0XHRcdFx0PGcgaWQ9J0tleWJvYXJkcycgc2tldGNoOnR5cGU9J01TTGF5ZXJHcm91cCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMC4wMDAwMDAsIDQwOC4wMDAwMDApJz5cblx0XHRcdFx0XHRcdFx0PGcgaWQ9J1JlY2VudCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoNTUuNTAwMDAwLCAyMzAuMDAwMDAwKScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCc+XG5cdFx0XHRcdFx0XHRcdFx0PGNpcmNsZSBpZD0nQm9keScgc3Ryb2tlPScjNEE1NDYxJyBjeD0nOCcgY3k9JzgnIHI9JzgnPjwvY2lyY2xlPlxuXHRcdFx0XHRcdFx0XHRcdDxwYXRoIGQ9J003LjUsNy41IEw3LjUsOC41IEw4LjUsOC41IEw4LjUsMiBMNy41LDIgTDcuNSw3LjUgTDQsNy41IEw0LDguNSBMOC41LDguNSBMOC41LDcuNSBMNy41LDcuNSBaJyBpZD0nSGFuZHMnIGZpbGw9JyM0QTU0NjEnPjwvcGF0aD5cblx0XHRcdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0PC9nPlxuXHRcdFx0PC9zdmc+XCJcblx0a2V5Ym9hcmQgOiBcIjw/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyc/PlxuXHRcdFx0PHN2ZyB3aWR0aD0nMzIuNXB4JyBoZWlnaHQ9JzIzLjVweCcgdmlld0JveD0nMCAwIDY1IDQ3JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnPlxuXHRcdFx0ICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy42LjEgKDI2MzEzKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHRcdCAgICA8dGl0bGU+U2hhcGU8L3RpdGxlPlxuXHRcdFx0ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdFx0ICAgIDxkZWZzPjwvZGVmcz5cblx0XHRcdCAgICA8ZyBpZD0nUGFnZS0xJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJz5cblx0XHRcdCAgICAgICAgPGcgaWQ9J2lQYWQtUG9ydHJhaXQnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC0xNDM2LjAwMDAwMCwgLTE5NTYuMDAwMDAwKScgZmlsbD0nIzAwMDAwMCc+XG5cdFx0XHQgICAgICAgICAgICA8ZyBpZD0nS2V5Ym9hcmQtTGlnaHQnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDAuMDAwMDAwLCAxNDIyLjAwMDAwMCknPlxuXHRcdFx0ICAgICAgICAgICAgICAgIDxnIGlkPSdLZXlib2FyZC1kb3duJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgxNDEyLjAwMDAwMCwgNTAwLjAwMDAwMCknPlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSdNODcuMDAxMzMyLDM0IEM4OC4xMDUxNjU5LDM0IDg5LDM0Ljg5OTcxMjcgODksMzUuOTkzMjg3NCBMODksNjEuMDA2NzEyNiBDODksNjIuMTA3NTc0OCA4OC4xMDU4NzU5LDYzIDg3LjAwMTMzMiw2MyBMMjUuOTk4NjY4LDYzIEMyNC44OTQ4MzQxLDYzIDI0LDYyLjEwMDI4NzMgMjQsNjEuMDA2NzEyNiBMMjQsMzUuOTkzMjg3NCBDMjQsMzQuODkyNDI1MiAyNC44OTQxMjQxLDM0IDI1Ljk5ODY2OCwzNCBMODcuMDAxMzMyLDM0IFogTTI2LDM2IEwyNiw2MSBMODcsNjEgTDg3LDM2IEwyNiwzNiBaIE03OSw0MCBMODMsNDAgTDgzLDQ0IEw3OSw0NCBMNzksNDAgWiBNNzIsNDAgTDc2LDQwIEw3Niw0NCBMNzIsNDQgTDcyLDQwIFogTTY1LDQwIEw2OSw0MCBMNjksNDQgTDY1LDQ0IEw2NSw0MCBaIE01OCw0MCBMNjIsNDAgTDYyLDQ0IEw1OCw0NCBMNTgsNDAgWiBNNTEsNDAgTDU1LDQwIEw1NSw0NCBMNTEsNDQgTDUxLDQwIFogTTQ0LDQwIEw0OCw0MCBMNDgsNDQgTDQ0LDQ0IEw0NCw0MCBaIE0zNyw0MCBMNDEsNDAgTDQxLDQ0IEwzNyw0NCBMMzcsNDAgWiBNMzAsNDAgTDM0LDQwIEwzNCw0NCBMMzAsNDQgTDMwLDQwIFogTTc5LDQ3IEw4Myw0NyBMODMsNTEgTDc5LDUxIEw3OSw0NyBaIE03Miw0NyBMNzYsNDcgTDc2LDUxIEw3Miw1MSBMNzIsNDcgWiBNNjUsNDcgTDY5LDQ3IEw2OSw1MSBMNjUsNTEgTDY1LDQ3IFogTTU4LDQ3IEw2Miw0NyBMNjIsNTEgTDU4LDUxIEw1OCw0NyBaIE01MSw0NyBMNTUsNDcgTDU1LDUxIEw1MSw1MSBMNTEsNDcgWiBNNDQsNDcgTDQ4LDQ3IEw0OCw1MSBMNDQsNTEgTDQ0LDQ3IFogTTM3LDQ3IEw0MSw0NyBMNDEsNTEgTDM3LDUxIEwzNyw0NyBaIE0zMCw0NyBMMzQsNDcgTDM0LDUxIEwzMCw1MSBMMzAsNDcgWiBNNzksNTQgTDgzLDU0IEw4Myw1OCBMNzksNTggTDc5LDU0IFogTTcyLDU0IEw3Niw1NCBMNzYsNTggTDcyLDU4IEw3Miw1NCBaIE00NCw1NCBMNjksNTQgTDY5LDU4IEw0NCw1OCBMNDQsNTQgWiBNMzcsNTQgTDQxLDU0IEw0MSw1OCBMMzcsNTggTDM3LDU0IFogTTMwLDU0IEwzNCw1NCBMMzQsNTggTDMwLDU4IEwzMCw1NCBaIE00NC4zMTYzNDk4LDY5Ljk3NzEwNDcgQzQzLjM2ODQyMjUsNzAuNTQyMDM0MiA0My4zMzM4NzIxLDcxLjUwOTY0OTUgNDQuMjM3ODIxNyw3Mi4xMzczOTEyIEw1NS4zNjIxNTM5LDc5Ljg2MjYwODggQzU2LjI2NjcxMTMsODAuNDkwNzcyNiA1Ny43MzM4OTY1LDgwLjQ5MDM1MDUgNTguNjM3ODQ2MSw3OS44NjI2MDg4IEw2OS43NjIxNzgzLDcyLjEzNzM5MTIgQzcwLjY2NjczNTcsNzEuNTA5MjI3NCA3MC42NDgwMTIsNzAuNTIwNTIwNCA2OS43MTE1MTg3LDY5LjkyMzQxNjYgTDY5Ljk4MjU3MzEsNzAuMDk2MjM5NiBDNjkuNTE4MTMzMyw2OS44MDAxMTUgNjguNzc4MjU1Nyw2OS44MTI2NDkzIDY4LjMyNjEzMDcsNzAuMTI2OTMyMyBMNTcuODE1NDk5OSw3Ny40MzMxMjYzIEM1Ny4zNjUxMTE3LDc3Ljc0NjIwMiA1Ni42MjgxNjUsNzcuNzM4MTc4NiA1Ni4xNzYyMTAzLDc3LjQxOTk0MjQgTDQ1LjgzODYxMzcsNzAuMTQwODk3NyBDNDUuMzgzNjQ3Miw2OS44MjA1NDA3IDQ0LjYzNzUwMzksNjkuNzg1NzA4OCA0NC4xNTY2MzkzLDcwLjA3MjI4NjIgTDQ0LjMxNjM0OTgsNjkuOTc3MTA0NyBaJyBpZD0nU2hhcGUnPjwvcGF0aD5cblx0XHRcdCAgICAgICAgICAgICAgICA8L2c+XG5cdFx0XHQgICAgICAgICAgICA8L2c+XG5cdFx0XHQgICAgICAgIDwvZz5cblx0XHRcdCAgICA8L2c+XG5cdFx0XHQ8L3N2Zz5cIlxuXHRrZXlQb3BVcDpcblx0XHRsaWdodDpcblx0XHRcdFwiaXBob25lLTVcIiA6IFwiPHN2ZyB3aWR0aD0nNTVweCcgaGVpZ2h0PSc5MnB4JyB2aWV3Qm94PSc1MyAzMTYgNTUgOTInIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayc+XG5cdFx0XHRcdFx0ICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy43LjIgKDI4Mjc2KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHRcdFx0XHQgICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0XHRcdFx0ICAgIDxkZWZzPlxuXHRcdFx0XHRcdCAgICAgICAgPGZpbHRlciB4PSctNTAlJyB5PSctNTAlJyB3aWR0aD0nMjAwJScgaGVpZ2h0PScyMDAlJyBmaWx0ZXJVbml0cz0nb2JqZWN0Qm91bmRpbmdCb3gnIGlkPSdmaWx0ZXItMSc+XG5cdFx0XHRcdFx0ICAgICAgICAgICAgPGZlT2Zmc2V0IGR4PScwJyBkeT0nMScgaW49J1NvdXJjZUFscGhhJyByZXN1bHQ9J3NoYWRvd09mZnNldE91dGVyMSc+PC9mZU9mZnNldD5cblx0XHRcdFx0XHQgICAgICAgICAgICA8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPScxLjUnIGluPSdzaGFkb3dPZmZzZXRPdXRlcjEnIHJlc3VsdD0nc2hhZG93Qmx1ck91dGVyMSc+PC9mZUdhdXNzaWFuQmx1cj5cblx0XHRcdFx0XHQgICAgICAgICAgICA8ZmVDb2xvck1hdHJpeCB2YWx1ZXM9JzAgMCAwIDAgMCAgIDAgMCAwIDAgMCAgIDAgMCAwIDAgMCAgMCAwIDAgMC40IDAnIHR5cGU9J21hdHJpeCcgaW49J3NoYWRvd0JsdXJPdXRlcjEnIHJlc3VsdD0nc2hhZG93TWF0cml4T3V0ZXIxJz48L2ZlQ29sb3JNYXRyaXg+XG5cdFx0XHRcdFx0ICAgICAgICAgICAgPGZlTWVyZ2U+XG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgIDxmZU1lcmdlTm9kZSBpbj0nc2hhZG93TWF0cml4T3V0ZXIxJz48L2ZlTWVyZ2VOb2RlPlxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICA8ZmVNZXJnZU5vZGUgaW49J1NvdXJjZUdyYXBoaWMnPjwvZmVNZXJnZU5vZGU+XG5cdFx0XHRcdFx0ICAgICAgICAgICAgPC9mZU1lcmdlPlxuXHRcdFx0XHRcdCAgICAgICAgPC9maWx0ZXI+XG5cdFx0XHRcdFx0ICAgICAgICA8cGF0aCBkPSdNMS4zNDE3MzIzMSw0MC45MzkxNzAxIEMwLjUxNzQ2NjEyOCw0MC4yMDU4OSAwLDM5LjEzNzQyNTEgMCwzNy45NDc3NjM1IEwwLDQuMDAzNDU1OTggQzAsMS43ODkxNzEzNiAxLjc5NTI4MjQ4LDAgNC4wMDk4NzU2NiwwIEw0NC45OTAxMjQzLDAgQzQ3LjIxMjU2MDgsMCA0OSwxLjc5MjQwODMgNDksNC4wMDM0NTU5OCBMNDksMzcuOTQ3NzYzNSBDNDksMzguOTEyNDA1MSA0OC42NTkyNzk4LDM5Ljc5NjM2NTkgNDguMDkxNjA0MSw0MC40ODY4NjY1IEM0OC4wNDE0MjMzLDQwLjkwMzIyODkgNDcuNzExMTg4OCw0MS40MDc0NjcyIDQ3LjA4MjU5MDgsNDEuOTUyMjUgQzQ3LjA4MjU5MDgsNDEuOTUyMjUgMzguNTI5OTE0NSw0OS4wNjQzMzYyIDM4LjUyOTkxNDUsNTEuMTUyNjQyNCBDMzguNTI5OTE0NSw2MS42NDk3NTYxIDM4LjE3NzAwOTksODIuMDAyNTQwNiAzOC4xNzcwMDk5LDgyLjAwMjU0MDYgQzM4LjE0MTIzMDQsODQuMjAyNDM1NCAzNi4zMjEwMjg0LDg2IDM0LjExMjg0OTUsODYgTDE1LjMwNTk1MzksODYgQzEzLjEwNzk2LDg2IDExLjI3ODE4ODQsODQuMjEwMDc4OSAxMS4yNDE3OTM2LDgyLjAwMjA5OTMgQzExLjI0MTc5MzYsODIuMDAyMDk5MyAxMC44ODg4ODg5LDYxLjY0NzA4NTIgMTAuODg4ODg4OSw1MS4xNDg2MzYxIEMxMC44ODg4ODg5LDQ5LjA2MTY2NTQgMi4zNDE0MzY2Miw0Mi4yMzg2NTUgMi4zNDE0MzY2Miw0Mi4yMzg2NTUgQzEuNzc4MjczMTEsNDEuNzY0MTM2NSAxLjQ0ODgxMzU0LDQxLjMyMDQyMzcgMS4zNDE3MzIzMSw0MC45MzkxNzAxIFonIGlkPSdwYXRoLTInPjwvcGF0aD5cblx0XHRcdFx0XHQgICAgICAgIDxtYXNrIGlkPSdtYXNrLTMnIG1hc2tDb250ZW50VW5pdHM9J3VzZXJTcGFjZU9uVXNlJyBtYXNrVW5pdHM9J29iamVjdEJvdW5kaW5nQm94JyB4PScwJyB5PScwJyB3aWR0aD0nNDknIGhlaWdodD0nODYnIGZpbGw9J3doaXRlJz5cblx0XHRcdFx0XHQgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9JyNwYXRoLTInPjwvdXNlPlxuXHRcdFx0XHRcdCAgICAgICAgPC9tYXNrPlxuXHRcdFx0XHRcdCAgICA8L2RlZnM+XG5cdFx0XHRcdFx0ICAgIDxnIGlkPSdQb3BvdmVyJyBmaWx0ZXI9J3VybCgjZmlsdGVyLTEpJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSg1Ni4wMDAwMDAsIDMxOC4wMDAwMDApJz5cblx0XHRcdFx0XHQgICAgICAgIDx1c2UgaWQ9J1JlY3RhbmdsZS0xNCcgc3Ryb2tlPScjQjJCNEI5JyBtYXNrPSd1cmwoI21hc2stMyknIGZpbGw9JyNGQ0ZDRkMnIHhsaW5rOmhyZWY9JyNwYXRoLTInPjwvdXNlPlxuXHRcdFx0XHRcdCAgICA8L2c+XG5cdFx0XHRcdFx0PC9zdmc+XCJcblx0XHRcdFwiaXBob25lLTZzXCIgOiBcIjxzdmcgd2lkdGg9JzY0cHgnIGhlaWdodD0nMTA3cHgnIHZpZXdCb3g9JzI0IDM4NyA2NCAxMDcnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayc+XG5cdFx0XHRcdFx0ICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy43LjIgKDI4Mjc2KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHRcdFx0XHQgICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0XHRcdFx0ICAgIDxkZWZzPlxuXHRcdFx0XHRcdCAgICAgICAgPGZpbHRlciB4PSctNTAlJyB5PSctNTAlJyB3aWR0aD0nMjAwJScgaGVpZ2h0PScyMDAlJyBmaWx0ZXJVbml0cz0nb2JqZWN0Qm91bmRpbmdCb3gnIGlkPSdmaWx0ZXItMSc+XG5cdFx0XHRcdFx0ICAgICAgICAgICAgPGZlT2Zmc2V0IGR4PScwJyBkeT0nMScgaW49J1NvdXJjZUFscGhhJyByZXN1bHQ9J3NoYWRvd09mZnNldE91dGVyMSc+PC9mZU9mZnNldD5cblx0XHRcdFx0XHQgICAgICAgICAgICA8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPScxLjUnIGluPSdzaGFkb3dPZmZzZXRPdXRlcjEnIHJlc3VsdD0nc2hhZG93Qmx1ck91dGVyMSc+PC9mZUdhdXNzaWFuQmx1cj5cblx0XHRcdFx0XHQgICAgICAgICAgICA8ZmVDb2xvck1hdHJpeCB2YWx1ZXM9JzAgMCAwIDAgMCAgIDAgMCAwIDAgMCAgIDAgMCAwIDAgMCAgMCAwIDAgMC40IDAnIHR5cGU9J21hdHJpeCcgaW49J3NoYWRvd0JsdXJPdXRlcjEnIHJlc3VsdD0nc2hhZG93TWF0cml4T3V0ZXIxJz48L2ZlQ29sb3JNYXRyaXg+XG5cdFx0XHRcdFx0ICAgICAgICAgICAgPGZlTWVyZ2U+XG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgIDxmZU1lcmdlTm9kZSBpbj0nc2hhZG93TWF0cml4T3V0ZXIxJz48L2ZlTWVyZ2VOb2RlPlxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICA8ZmVNZXJnZU5vZGUgaW49J1NvdXJjZUdyYXBoaWMnPjwvZmVNZXJnZU5vZGU+XG5cdFx0XHRcdFx0ICAgICAgICAgICAgPC9mZU1lcmdlPlxuXHRcdFx0XHRcdCAgICAgICAgPC9maWx0ZXI+XG5cdFx0XHRcdFx0ICAgICAgICA8cGF0aCBkPSdNMS40ODY0NzY0Niw0OC4zNzc5OTQ3IEMwLjU4MDI2NjQ5LDQ3LjY0NjQyOTYgMCw0Ni41Mjk1ODcgMCw0NS4yNzgxOTQ4IEwwLDMuOTkwMDk3ODcgQzAsMS43ODI1OTEyIDEuNzk1MDk1NzcsMCA0LjAwOTQ1ODYyLDAgTDUzLjk5MDU0MTQsMCBDNTYuMjAwNTc0NiwwIDU4LDEuNzg2NDI3NjcgNTgsMy45OTAwOTc4NyBMNTgsNDUuMjc4MTk0OCBDNTgsNDYuMTgzMzAwNCA1Ny42OTgyMjU4LDQ3LjAxNjk3MzMgNTcuMTg5NTA5Nyw0Ny42ODU2MzI1IEM1Ny4wMzk2ODY1LDQ4LjAyMTI0OTcgNTYuNzM2MDA5OCw0OC4zOTcyODM0IDU2LjI3MTgzNjMsNDguNzk1MDY2MSBDNTYuMjcxODM2Myw0OC43OTUwNjYxIDQ1LjYwNjgzNzYsNTcuNjIyMDY5MyA0NS42MDY4Mzc2LDYwLjA3NDYxNDkgQzQ1LjYwNjgzNzYsNzIuNDAyNjIwNSA0NS4xNzc5NjcsOTYuOTkyMzE2NCA0NS4xNzc5NjcsOTYuOTkyMzE2NCBDNDUuMTQxMzc0OCw5OS4yMTIyMjE0IDQzLjMxOTMwNjUsMTAxIDQxLjEwOTAwMzUsMTAxIEwxNy4zODY3MjMsMTAxIEMxNS4xODEyNzIyLDEwMSAxMy4zNTQ2ODMsOTkuMjA1NTAwOSAxMy4zMTc3NTk1LDk2Ljk5MTg3NDEgQzEzLjMxNzc1OTUsOTYuOTkxODc0MSAxMi44ODg4ODg5LDcyLjM5OTQ4MzggMTIuODg4ODg4OSw2MC4wNjk5MDk5IEMxMi44ODg4ODg5LDU3LjYxODkzMjYgMi4yMjY3MzQzNyw0OS4xNDYyOTM2IDIuMjI2NzM0MzcsNDkuMTQ2MjkzNiBDMS45MDUyNDA4Nyw0OC44Nzg4MzI3IDEuNjU5MTE2NTUsNDguNjIwNzMzIDEuNDg2NDc2NDYsNDguMzc3OTk0NyBaJyBpZD0ncGF0aC0yJz48L3BhdGg+XG5cdFx0XHRcdFx0ICAgICAgICA8bWFzayBpZD0nbWFzay0zJyBtYXNrQ29udGVudFVuaXRzPSd1c2VyU3BhY2VPblVzZScgbWFza1VuaXRzPSdvYmplY3RCb3VuZGluZ0JveCcgeD0nMCcgeT0nMCcgd2lkdGg9JzU4JyBoZWlnaHQ9JzEwMScgZmlsbD0nd2hpdGUnPlxuXHRcdFx0XHRcdCAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0nI3BhdGgtMic+PC91c2U+XG5cdFx0XHRcdFx0ICAgICAgICA8L21hc2s+XG5cdFx0XHRcdFx0ICAgIDwvZGVmcz5cblx0XHRcdFx0XHQgICAgPGcgaWQ9J1BvcG92ZXInIGZpbHRlcj0ndXJsKCNmaWx0ZXItMSknIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDI3LjAwMDAwMCwgMzg5LjAwMDAwMCknPlxuXHRcdFx0XHRcdCAgICAgICAgPHVzZSBpZD0nUmVjdGFuZ2xlLTE0JyBzdHJva2U9JyNCMkI0QjknIG1hc2s9J3VybCgjbWFzay0zKScgZmlsbD0nI0ZDRkNGQycgeGxpbms6aHJlZj0nI3BhdGgtMic+PC91c2U+XG5cdFx0XHRcdFx0ICAgIDwvZz5cblx0XHRcdFx0XHQ8L3N2Zz5cIlxuXHRcdFx0XCJpcGhvbmUtNnMtcGx1c1wiIDogXCI8c3ZnIHdpZHRoPSc3MHB4JyBoZWlnaHQ9JzExOXB4JyB2aWV3Qm94PScyOCA0NTAgNzAgMTE5JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnPlxuXHRcdFx0XHRcdCAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNy4yICgyODI3NikgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdFx0XHRcdFx0ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdFx0XHRcdCAgICA8ZGVmcz5cblx0XHRcdFx0XHQgICAgICAgIDxmaWx0ZXIgeD0nLTUwJScgeT0nLTUwJScgd2lkdGg9JzIwMCUnIGhlaWdodD0nMjAwJScgZmlsdGVyVW5pdHM9J29iamVjdEJvdW5kaW5nQm94JyBpZD0nZmlsdGVyLTEnPlxuXHRcdFx0XHRcdCAgICAgICAgICAgIDxmZU9mZnNldCBkeD0nMCcgZHk9JzEnIGluPSdTb3VyY2VBbHBoYScgcmVzdWx0PSdzaGFkb3dPZmZzZXRPdXRlcjEnPjwvZmVPZmZzZXQ+XG5cdFx0XHRcdFx0ICAgICAgICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0nMS41JyBpbj0nc2hhZG93T2Zmc2V0T3V0ZXIxJyByZXN1bHQ9J3NoYWRvd0JsdXJPdXRlcjEnPjwvZmVHYXVzc2lhbkJsdXI+XG5cdFx0XHRcdFx0ICAgICAgICAgICAgPGZlQ29sb3JNYXRyaXggdmFsdWVzPScwIDAgMCAwIDAgICAwIDAgMCAwIDAgICAwIDAgMCAwIDAgIDAgMCAwIDAuNCAwJyB0eXBlPSdtYXRyaXgnIGluPSdzaGFkb3dCbHVyT3V0ZXIxJyByZXN1bHQ9J3NoYWRvd01hdHJpeE91dGVyMSc+PC9mZUNvbG9yTWF0cml4PlxuXHRcdFx0XHRcdCAgICAgICAgICAgIDxmZU1lcmdlPlxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICA8ZmVNZXJnZU5vZGUgaW49J3NoYWRvd01hdHJpeE91dGVyMSc+PC9mZU1lcmdlTm9kZT5cblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgPGZlTWVyZ2VOb2RlIGluPSdTb3VyY2VHcmFwaGljJz48L2ZlTWVyZ2VOb2RlPlxuXHRcdFx0XHRcdCAgICAgICAgICAgIDwvZmVNZXJnZT5cblx0XHRcdFx0XHQgICAgICAgIDwvZmlsdGVyPlxuXHRcdFx0XHRcdCAgICAgICAgPHBhdGggZD0nTTEuOTU3MjkzOTUsNTQuMDcyODMwNCBDMC43ODU5MTExMzIsNTMuMzc1NzY5OSAwLDUyLjA5ODc3NiAwLDUwLjYzODkwMjIgTDAsMy45OTUyNDQxOSBDMCwxLjc4NjcxNDI4IDEuNzkyNDIyMDIsMCA0LjAwMzQ4NjYzLDAgTDU5Ljk5NjUxMzQsMCBDNjIuMjA0NjIzNSwwIDY0LDEuNzg4NzMxNzUgNjQsMy45OTUyNDQxOSBMNjQsNTAuNjM4OTAyMiBDNjQsNTEuOTIzMzY4NiA2My4zOTM3MTE2LDUzLjA2NTE1NTYgNjIuNDUxMzkxLDUzLjc5NTc1NCBDNjIuNDQyNzc1Miw1My44MDMyNDMzIDYyLjQzNDEwMTksNTMuODEwNzQwNCA2Mi40MjUzNzA5LDUzLjgxODI0NTQgQzYyLjQyNTM3MDksNTMuODE4MjQ1NCA1MC4zMjQ3ODYzLDYzLjg5Nzc0MDIgNTAuMzI0Nzg2Myw2Ni42MTczOTQ3IEM1MC4zMjQ3ODYzLDgwLjI4ODA1NDQgNDkuODQ0MzA0OSwxMDguMDAyMDA3IDQ5Ljg0NDMwNDksMTA4LjAwMjAwNyBDNDkuODA3OTY2NSwxMTAuMjEwMjM0IDQ3Ljk4NzQyMzIsMTEyIDQ1Ljc3ODkwODksMTEyIEwxOC43NjgwOTk3LDExMiBDMTYuNTUzNDM5NywxMTIgMTQuNzM5NDQ1NiwxMTAuMjA5ODQgMTQuNzAyNzAzNywxMDguMDAxNTY2IEMxNC43MDI3MDM3LDEwOC4wMDE1NjYgMTQuMjIyMjIyMiw4MC4yODQ1NzYxIDE0LjIyMjIyMjIsNjYuNjEyMTc3MyBDMTQuMjIyMjIyMiw2My44OTQyNjE5IDIuMTQwODE0MjIsNTQuMjMyMTMzNyAyLjE0MDgxNDIyLDU0LjIzMjEzMzcgQzIuMDc2NjQ5MTMsNTQuMTc4NjI5OCAyLjAxNTQ4MTExLDU0LjEyNTUxMzQgMS45NTcyOTM5NSw1NC4wNzI4MzA0IFonIGlkPSdwYXRoLTInPjwvcGF0aD5cblx0XHRcdFx0XHQgICAgICAgIDxtYXNrIGlkPSdtYXNrLTMnIG1hc2tDb250ZW50VW5pdHM9J3VzZXJTcGFjZU9uVXNlJyBtYXNrVW5pdHM9J29iamVjdEJvdW5kaW5nQm94JyB4PScwJyB5PScwJyB3aWR0aD0nNjQnIGhlaWdodD0nMTEyJyBmaWxsPSd3aGl0ZSc+XG5cdFx0XHRcdFx0ICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPScjcGF0aC0yJz48L3VzZT5cblx0XHRcdFx0XHQgICAgICAgIDwvbWFzaz5cblx0XHRcdFx0XHQgICAgPC9kZWZzPlxuXHRcdFx0XHRcdCAgICA8ZyBpZD0nUG9wb3ZlcicgZmlsdGVyPSd1cmwoI2ZpbHRlci0xKScgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMzEuMDAwMDAwLCA0NTIuMDAwMDAwKSc+XG5cdFx0XHRcdFx0ICAgICAgICA8dXNlIGlkPSdSZWN0YW5nbGUtMTQnIHN0cm9rZT0nI0IyQjRCOScgbWFzaz0ndXJsKCNtYXNrLTMpJyBmaWxsPScjRkNGQ0ZDJyB4bGluazpocmVmPScjcGF0aC0yJz48L3VzZT5cblx0XHRcdFx0XHQgICAgPC9nPlxuXHRcdFx0XHRcdDwvc3ZnPlwiXG5cdFx0ZGFyazpcblx0XHRcdFwiaXBob25lLTVcIiA6IFwiPHN2ZyB3aWR0aD0nNTVweCcgaGVpZ2h0PSc5MnB4JyB2aWV3Qm94PSc1MyAzMTYgNTUgOTInIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayc+XG5cdFx0XHRcdFx0ICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy43LjIgKDI4Mjc2KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHRcdFx0XHQgICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0XHRcdFx0ICAgIDxkZWZzPlxuXHRcdFx0XHRcdCAgICAgICAgPGZpbHRlciB4PSctNTAlJyB5PSctNTAlJyB3aWR0aD0nMjAwJScgaGVpZ2h0PScyMDAlJyBmaWx0ZXJVbml0cz0nb2JqZWN0Qm91bmRpbmdCb3gnIGlkPSdmaWx0ZXItMSc+XG5cdFx0XHRcdFx0ICAgICAgICAgICAgPGZlT2Zmc2V0IGR4PScwJyBkeT0nMScgaW49J1NvdXJjZUFscGhhJyByZXN1bHQ9J3NoYWRvd09mZnNldE91dGVyMSc+PC9mZU9mZnNldD5cblx0XHRcdFx0XHQgICAgICAgICAgICA8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPScxLjUnIGluPSdzaGFkb3dPZmZzZXRPdXRlcjEnIHJlc3VsdD0nc2hhZG93Qmx1ck91dGVyMSc+PC9mZUdhdXNzaWFuQmx1cj5cblx0XHRcdFx0XHQgICAgICAgICAgICA8ZmVDb2xvck1hdHJpeCB2YWx1ZXM9JzAgMCAwIDAgMCAgIDAgMCAwIDAgMCAgIDAgMCAwIDAgMCAgMCAwIDAgMC40IDAnIHR5cGU9J21hdHJpeCcgaW49J3NoYWRvd0JsdXJPdXRlcjEnIHJlc3VsdD0nc2hhZG93TWF0cml4T3V0ZXIxJz48L2ZlQ29sb3JNYXRyaXg+XG5cdFx0XHRcdFx0ICAgICAgICAgICAgPGZlTWVyZ2U+XG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgIDxmZU1lcmdlTm9kZSBpbj0nc2hhZG93TWF0cml4T3V0ZXIxJz48L2ZlTWVyZ2VOb2RlPlxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICA8ZmVNZXJnZU5vZGUgaW49J1NvdXJjZUdyYXBoaWMnPjwvZmVNZXJnZU5vZGU+XG5cdFx0XHRcdFx0ICAgICAgICAgICAgPC9mZU1lcmdlPlxuXHRcdFx0XHRcdCAgICAgICAgPC9maWx0ZXI+XG5cdFx0XHRcdFx0ICAgICAgICA8cGF0aCBkPSdNMS4zNDE3MzIzMSw0MC45MzkxNzAxIEMwLjUxNzQ2NjEyOCw0MC4yMDU4OSAwLDM5LjEzNzQyNTEgMCwzNy45NDc3NjM1IEwwLDQuMDAzNDU1OTggQzAsMS43ODkxNzEzNiAxLjc5NTI4MjQ4LDAgNC4wMDk4NzU2NiwwIEw0NC45OTAxMjQzLDAgQzQ3LjIxMjU2MDgsMCA0OSwxLjc5MjQwODMgNDksNC4wMDM0NTU5OCBMNDksMzcuOTQ3NzYzNSBDNDksMzguOTEyNDA1MSA0OC42NTkyNzk4LDM5Ljc5NjM2NTkgNDguMDkxNjA0MSw0MC40ODY4NjY1IEM0OC4wNDE0MjMzLDQwLjkwMzIyODkgNDcuNzExMTg4OCw0MS40MDc0NjcyIDQ3LjA4MjU5MDgsNDEuOTUyMjUgQzQ3LjA4MjU5MDgsNDEuOTUyMjUgMzguNTI5OTE0NSw0OS4wNjQzMzYyIDM4LjUyOTkxNDUsNTEuMTUyNjQyNCBDMzguNTI5OTE0NSw2MS42NDk3NTYxIDM4LjE3NzAwOTksODIuMDAyNTQwNiAzOC4xNzcwMDk5LDgyLjAwMjU0MDYgQzM4LjE0MTIzMDQsODQuMjAyNDM1NCAzNi4zMjEwMjg0LDg2IDM0LjExMjg0OTUsODYgTDE1LjMwNTk1MzksODYgQzEzLjEwNzk2LDg2IDExLjI3ODE4ODQsODQuMjEwMDc4OSAxMS4yNDE3OTM2LDgyLjAwMjA5OTMgQzExLjI0MTc5MzYsODIuMDAyMDk5MyAxMC44ODg4ODg5LDYxLjY0NzA4NTIgMTAuODg4ODg4OSw1MS4xNDg2MzYxIEMxMC44ODg4ODg5LDQ5LjA2MTY2NTQgMi4zNDE0MzY2Miw0Mi4yMzg2NTUgMi4zNDE0MzY2Miw0Mi4yMzg2NTUgQzEuNzc4MjczMTEsNDEuNzY0MTM2NSAxLjQ0ODgxMzU0LDQxLjMyMDQyMzcgMS4zNDE3MzIzMSw0MC45MzkxNzAxIFonIGlkPSdwYXRoLTInPjwvcGF0aD5cblx0XHRcdFx0XHQgICAgICAgIDxtYXNrIGlkPSdtYXNrLTMnIG1hc2tDb250ZW50VW5pdHM9J3VzZXJTcGFjZU9uVXNlJyBtYXNrVW5pdHM9J29iamVjdEJvdW5kaW5nQm94JyB4PScwJyB5PScwJyB3aWR0aD0nNDknIGhlaWdodD0nODYnIGZpbGw9J3doaXRlJz5cblx0XHRcdFx0XHQgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9JyNwYXRoLTInPjwvdXNlPlxuXHRcdFx0XHRcdCAgICAgICAgPC9tYXNrPlxuXHRcdFx0XHRcdCAgICA8L2RlZnM+XG5cdFx0XHRcdFx0ICAgIDxnIGlkPSdQb3BvdmVyJyBmaWx0ZXI9J3VybCgjZmlsdGVyLTEpJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSg1Ni4wMDAwMDAsIDMxOC4wMDAwMDApJz5cblx0XHRcdFx0XHQgICAgICAgIDx1c2UgaWQ9J1JlY3RhbmdsZS0xNCcgc3Ryb2tlPScjNjM2MzYzJyBtYXNrPSd1cmwoI21hc2stMyknIGZpbGw9JyM2MzYzNjMnIHhsaW5rOmhyZWY9JyNwYXRoLTInPjwvdXNlPlxuXHRcdFx0XHRcdCAgICA8L2c+XG5cdFx0XHRcdFx0PC9zdmc+XCJcblx0XHRcdFwiaXBob25lLTZzXCIgOiBcIjxzdmcgd2lkdGg9JzY0cHgnIGhlaWdodD0nMTA3cHgnIHZpZXdCb3g9JzI0IDM4NyA2NCAxMDcnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayc+XG5cdFx0XHRcdFx0ICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy43LjIgKDI4Mjc2KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHRcdFx0XHQgICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0XHRcdFx0ICAgIDxkZWZzPlxuXHRcdFx0XHRcdCAgICAgICAgPGZpbHRlciB4PSctNTAlJyB5PSctNTAlJyB3aWR0aD0nMjAwJScgaGVpZ2h0PScyMDAlJyBmaWx0ZXJVbml0cz0nb2JqZWN0Qm91bmRpbmdCb3gnIGlkPSdmaWx0ZXItMSc+XG5cdFx0XHRcdFx0ICAgICAgICAgICAgPGZlT2Zmc2V0IGR4PScwJyBkeT0nMScgaW49J1NvdXJjZUFscGhhJyByZXN1bHQ9J3NoYWRvd09mZnNldE91dGVyMSc+PC9mZU9mZnNldD5cblx0XHRcdFx0XHQgICAgICAgICAgICA8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPScxLjUnIGluPSdzaGFkb3dPZmZzZXRPdXRlcjEnIHJlc3VsdD0nc2hhZG93Qmx1ck91dGVyMSc+PC9mZUdhdXNzaWFuQmx1cj5cblx0XHRcdFx0XHQgICAgICAgICAgICA8ZmVDb2xvck1hdHJpeCB2YWx1ZXM9JzAgMCAwIDAgMCAgIDAgMCAwIDAgMCAgIDAgMCAwIDAgMCAgMCAwIDAgMC40IDAnIHR5cGU9J21hdHJpeCcgaW49J3NoYWRvd0JsdXJPdXRlcjEnIHJlc3VsdD0nc2hhZG93TWF0cml4T3V0ZXIxJz48L2ZlQ29sb3JNYXRyaXg+XG5cdFx0XHRcdFx0ICAgICAgICAgICAgPGZlTWVyZ2U+XG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgIDxmZU1lcmdlTm9kZSBpbj0nc2hhZG93TWF0cml4T3V0ZXIxJz48L2ZlTWVyZ2VOb2RlPlxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICA8ZmVNZXJnZU5vZGUgaW49J1NvdXJjZUdyYXBoaWMnPjwvZmVNZXJnZU5vZGU+XG5cdFx0XHRcdFx0ICAgICAgICAgICAgPC9mZU1lcmdlPlxuXHRcdFx0XHRcdCAgICAgICAgPC9maWx0ZXI+XG5cdFx0XHRcdFx0ICAgICAgICA8cGF0aCBkPSdNMS40ODY0NzY0Niw0OC4zNzc5OTQ3IEMwLjU4MDI2NjQ5LDQ3LjY0NjQyOTYgMCw0Ni41Mjk1ODcgMCw0NS4yNzgxOTQ4IEwwLDMuOTkwMDk3ODcgQzAsMS43ODI1OTEyIDEuNzk1MDk1NzcsMCA0LjAwOTQ1ODYyLDAgTDUzLjk5MDU0MTQsMCBDNTYuMjAwNTc0NiwwIDU4LDEuNzg2NDI3NjcgNTgsMy45OTAwOTc4NyBMNTgsNDUuMjc4MTk0OCBDNTgsNDYuMTgzMzAwNCA1Ny42OTgyMjU4LDQ3LjAxNjk3MzMgNTcuMTg5NTA5Nyw0Ny42ODU2MzI1IEM1Ny4wMzk2ODY1LDQ4LjAyMTI0OTcgNTYuNzM2MDA5OCw0OC4zOTcyODM0IDU2LjI3MTgzNjMsNDguNzk1MDY2MSBDNTYuMjcxODM2Myw0OC43OTUwNjYxIDQ1LjYwNjgzNzYsNTcuNjIyMDY5MyA0NS42MDY4Mzc2LDYwLjA3NDYxNDkgQzQ1LjYwNjgzNzYsNzIuNDAyNjIwNSA0NS4xNzc5NjcsOTYuOTkyMzE2NCA0NS4xNzc5NjcsOTYuOTkyMzE2NCBDNDUuMTQxMzc0OCw5OS4yMTIyMjE0IDQzLjMxOTMwNjUsMTAxIDQxLjEwOTAwMzUsMTAxIEwxNy4zODY3MjMsMTAxIEMxNS4xODEyNzIyLDEwMSAxMy4zNTQ2ODMsOTkuMjA1NTAwOSAxMy4zMTc3NTk1LDk2Ljk5MTg3NDEgQzEzLjMxNzc1OTUsOTYuOTkxODc0MSAxMi44ODg4ODg5LDcyLjM5OTQ4MzggMTIuODg4ODg4OSw2MC4wNjk5MDk5IEMxMi44ODg4ODg5LDU3LjYxODkzMjYgMi4yMjY3MzQzNyw0OS4xNDYyOTM2IDIuMjI2NzM0MzcsNDkuMTQ2MjkzNiBDMS45MDUyNDA4Nyw0OC44Nzg4MzI3IDEuNjU5MTE2NTUsNDguNjIwNzMzIDEuNDg2NDc2NDYsNDguMzc3OTk0NyBaJyBpZD0ncGF0aC0yJz48L3BhdGg+XG5cdFx0XHRcdFx0ICAgICAgICA8bWFzayBpZD0nbWFzay0zJyBtYXNrQ29udGVudFVuaXRzPSd1c2VyU3BhY2VPblVzZScgbWFza1VuaXRzPSdvYmplY3RCb3VuZGluZ0JveCcgeD0nMCcgeT0nMCcgd2lkdGg9JzU4JyBoZWlnaHQ9JzEwMScgZmlsbD0nd2hpdGUnPlxuXHRcdFx0XHRcdCAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0nI3BhdGgtMic+PC91c2U+XG5cdFx0XHRcdFx0ICAgICAgICA8L21hc2s+XG5cdFx0XHRcdFx0ICAgIDwvZGVmcz5cblx0XHRcdFx0XHQgICAgPGcgaWQ9J1BvcG92ZXInIGZpbHRlcj0ndXJsKCNmaWx0ZXItMSknIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDI3LjAwMDAwMCwgMzg5LjAwMDAwMCknPlxuXHRcdFx0XHRcdCAgICAgICAgPHVzZSBpZD0nUmVjdGFuZ2xlLTE0JyBzdHJva2U9JyMjNjM2MzYzJyBtYXNrPSd1cmwoI21hc2stMyknIGZpbGw9JyM2MzYzNjMnIHhsaW5rOmhyZWY9JyNwYXRoLTInPjwvdXNlPlxuXHRcdFx0XHRcdCAgICA8L2c+XG5cdFx0XHRcdFx0PC9zdmc+XCJcblx0XHRcdFwiaXBob25lLTZzLXBsdXNcIiA6IFwiPHN2ZyB3aWR0aD0nNzBweCcgaGVpZ2h0PScxMTlweCcgdmlld0JveD0nMjggNDUwIDcwIDExOScgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJz5cblx0XHRcdFx0XHQgICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjcuMiAoMjgyNzYpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdFx0XHRcdCAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHRcdFx0XHQgICAgPGRlZnM+XG5cdFx0XHRcdFx0ICAgICAgICA8ZmlsdGVyIHg9Jy01MCUnIHk9Jy01MCUnIHdpZHRoPScyMDAlJyBoZWlnaHQ9JzIwMCUnIGZpbHRlclVuaXRzPSdvYmplY3RCb3VuZGluZ0JveCcgaWQ9J2ZpbHRlci0xJz5cblx0XHRcdFx0XHQgICAgICAgICAgICA8ZmVPZmZzZXQgZHg9JzAnIGR5PScxJyBpbj0nU291cmNlQWxwaGEnIHJlc3VsdD0nc2hhZG93T2Zmc2V0T3V0ZXIxJz48L2ZlT2Zmc2V0PlxuXHRcdFx0XHRcdCAgICAgICAgICAgIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249JzEuNScgaW49J3NoYWRvd09mZnNldE91dGVyMScgcmVzdWx0PSdzaGFkb3dCbHVyT3V0ZXIxJz48L2ZlR2F1c3NpYW5CbHVyPlxuXHRcdFx0XHRcdCAgICAgICAgICAgIDxmZUNvbG9yTWF0cml4IHZhbHVlcz0nMCAwIDAgMCAwICAgMCAwIDAgMCAwICAgMCAwIDAgMCAwICAwIDAgMCAwLjQgMCcgdHlwZT0nbWF0cml4JyBpbj0nc2hhZG93Qmx1ck91dGVyMScgcmVzdWx0PSdzaGFkb3dNYXRyaXhPdXRlcjEnPjwvZmVDb2xvck1hdHJpeD5cblx0XHRcdFx0XHQgICAgICAgICAgICA8ZmVNZXJnZT5cblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgPGZlTWVyZ2VOb2RlIGluPSdzaGFkb3dNYXRyaXhPdXRlcjEnPjwvZmVNZXJnZU5vZGU+XG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgIDxmZU1lcmdlTm9kZSBpbj0nU291cmNlR3JhcGhpYyc+PC9mZU1lcmdlTm9kZT5cblx0XHRcdFx0XHQgICAgICAgICAgICA8L2ZlTWVyZ2U+XG5cdFx0XHRcdFx0ICAgICAgICA8L2ZpbHRlcj5cblx0XHRcdFx0XHQgICAgICAgIDxwYXRoIGQ9J00xLjk1NzI5Mzk1LDU0LjA3MjgzMDQgQzAuNzg1OTExMTMyLDUzLjM3NTc2OTkgMCw1Mi4wOTg3NzYgMCw1MC42Mzg5MDIyIEwwLDMuOTk1MjQ0MTkgQzAsMS43ODY3MTQyOCAxLjc5MjQyMjAyLDAgNC4wMDM0ODY2MywwIEw1OS45OTY1MTM0LDAgQzYyLjIwNDYyMzUsMCA2NCwxLjc4ODczMTc1IDY0LDMuOTk1MjQ0MTkgTDY0LDUwLjYzODkwMjIgQzY0LDUxLjkyMzM2ODYgNjMuMzkzNzExNiw1My4wNjUxNTU2IDYyLjQ1MTM5MSw1My43OTU3NTQgQzYyLjQ0Mjc3NTIsNTMuODAzMjQzMyA2Mi40MzQxMDE5LDUzLjgxMDc0MDQgNjIuNDI1MzcwOSw1My44MTgyNDU0IEM2Mi40MjUzNzA5LDUzLjgxODI0NTQgNTAuMzI0Nzg2Myw2My44OTc3NDAyIDUwLjMyNDc4NjMsNjYuNjE3Mzk0NyBDNTAuMzI0Nzg2Myw4MC4yODgwNTQ0IDQ5Ljg0NDMwNDksMTA4LjAwMjAwNyA0OS44NDQzMDQ5LDEwOC4wMDIwMDcgQzQ5LjgwNzk2NjUsMTEwLjIxMDIzNCA0Ny45ODc0MjMyLDExMiA0NS43Nzg5MDg5LDExMiBMMTguNzY4MDk5NywxMTIgQzE2LjU1MzQzOTcsMTEyIDE0LjczOTQ0NTYsMTEwLjIwOTg0IDE0LjcwMjcwMzcsMTA4LjAwMTU2NiBDMTQuNzAyNzAzNywxMDguMDAxNTY2IDE0LjIyMjIyMjIsODAuMjg0NTc2MSAxNC4yMjIyMjIyLDY2LjYxMjE3NzMgQzE0LjIyMjIyMjIsNjMuODk0MjYxOSAyLjE0MDgxNDIyLDU0LjIzMjEzMzcgMi4xNDA4MTQyMiw1NC4yMzIxMzM3IEMyLjA3NjY0OTEzLDU0LjE3ODYyOTggMi4wMTU0ODExMSw1NC4xMjU1MTM0IDEuOTU3MjkzOTUsNTQuMDcyODMwNCBaJyBpZD0ncGF0aC0yJz48L3BhdGg+XG5cdFx0XHRcdFx0ICAgICAgICA8bWFzayBpZD0nbWFzay0zJyBtYXNrQ29udGVudFVuaXRzPSd1c2VyU3BhY2VPblVzZScgbWFza1VuaXRzPSdvYmplY3RCb3VuZGluZ0JveCcgeD0nMCcgeT0nMCcgd2lkdGg9JzY0JyBoZWlnaHQ9JzExMicgZmlsbD0nd2hpdGUnPlxuXHRcdFx0XHRcdCAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0nI3BhdGgtMic+PC91c2U+XG5cdFx0XHRcdFx0ICAgICAgICA8L21hc2s+XG5cdFx0XHRcdFx0ICAgIDwvZGVmcz5cblx0XHRcdFx0XHQgICAgPGcgaWQ9J1BvcG92ZXInIGZpbHRlcj0ndXJsKCNmaWx0ZXItMSknIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDMxLjAwMDAwMCwgNDUyLjAwMDAwMCknPlxuXHRcdFx0XHRcdCAgICAgICAgPHVzZSBpZD0nUmVjdGFuZ2xlLTE0JyBzdHJva2U9JyM2MzYzNjMnIG1hc2s9J3VybCgjbWFzay0zKScgZmlsbD0nIzYzNjM2MycgeGxpbms6aHJlZj0nI3BhdGgtMic+PC91c2U+XG5cdFx0XHRcdFx0ICAgIDwvZz5cblx0XHRcdFx0XHQ8L3N2Zz5cIlxuXG5cdG9iamVjdHMgOlxuXHRcdFwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdFx0XHRcdDxzdmcgd2lkdGg9JzExcHgnIGhlaWdodD0nMTZweCcgdmlld0JveD0nMCAwIDExIDE2JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHhtbG5zOnNrZXRjaD0naHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zJz5cblx0XHRcdFx0PCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjUuMiAoMjUyMzUpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdFx0XHQ8dGl0bGU+TGlnaHRidWxiPC90aXRsZT5cblx0XHRcdFx0PGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0XHRcdDxkZWZzPjwvZGVmcz5cblx0XHRcdFx0PGcgaWQ9J1BhZ2UtMScgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCcgc2tldGNoOnR5cGU9J01TUGFnZSc+XG5cdFx0XHRcdFx0PGcgaWQ9J2lQaG9uZS02JyBza2V0Y2g6dHlwZT0nTVNBcnRib2FyZEdyb3VwJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtMjQ0LjAwMDAwMCwgLTYzOS4wMDAwMDApJyBzdHJva2U9JyM0QTUzNjEnPlxuXHRcdFx0XHRcdFx0PGcgaWQ9J0xpZ2h0YnVsYicgc2tldGNoOnR5cGU9J01TTGF5ZXJHcm91cCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMjQ0LjAwMDAwMCwgNjM5LjAwMDAwMCknPlxuXHRcdFx0XHRcdFx0XHQ8cGF0aCBkPSdNOCwxMC40MDAyOTA0IEM5Ljc4MDgzNzk1LDkuNDg5OTM0OTEgMTEsNy42MzczNDI3MyAxMSw1LjUgQzExLDIuNDYyNDMzODggOC41Mzc1NjYxMiwwIDUuNSwwIEMyLjQ2MjQzMzg4LDAgMCwyLjQ2MjQzMzg4IDAsNS41IEMwLDcuNjM3MzQyNzMgMS4yMTkxNjIwNSw5LjQ4OTkzNDkxIDMsMTAuNDAwMjkwNCBMMywxNC4wMDIwODY5IEMzLDE1LjEwMTczOTQgMy44OTc2MTYwMiwxNiA1LjAwNDg4MTUsMTYgTDUuOTk1MTE4NSwxNiBDNy4xMDYxMDAyLDE2IDgsMTUuMTA1NTAzOCA4LDE0LjAwMjA4NjkgTDgsMTAuNDAwMjkwNCBaJyBpZD0nT3ZhbC0xNycgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCc+PC9wYXRoPlxuXHRcdFx0XHRcdFx0XHQ8cmVjdCBpZD0nUmVjdGFuZ2xlLTUwJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJyB4PSczJyB5PScxMicgd2lkdGg9JzUnIGhlaWdodD0nMSc+PC9yZWN0PlxuXHRcdFx0XHRcdFx0XHQ8cmVjdCBpZD0nUmVjdGFuZ2xlLTUxJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJyB4PSc0JyB5PScxMy41JyB3aWR0aD0nMS41JyBoZWlnaHQ9JzEnPjwvcmVjdD5cblx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTUsOC41IEM1LDguNSAzLjQ5OTk5OTk5LDcuNTAwMDAwMDEgNCw3IEM0LjUwMDAwMDAxLDYuNDk5OTk5OTkgNSw3LjY2NjY2NjY3IDUuNSw4IEM1LjUsOCA2LjUsNi41MDAwMDAwMSA3LDcgQzcuNSw3LjQ5OTk5OTk5IDYsOC41IDYsOC41IEw2LDExIEw1LDExIEw1LDguNSBaJyBpZD0nUmVjdGFuZ2xlLTUyJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJz48L3BhdGg+XG5cdFx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHQ8L2c+XG5cdFx0XHQ8L3N2Zz5cIlxuXHRzaGlmdCA6IHtcblx0XHRvbiA6IFwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdFx0XHRcdDxzdmcgd2lkdGg9JzIwcHgnIGhlaWdodD0nMThweCcgdmlld0JveD0nMCAwIDIwIDE3JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHhtbG5zOnNrZXRjaD0naHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zJz5cblx0XHRcdFx0XHQ8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNS4yICgyNTIzNSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdFx0XHRcdFx0PHRpdGxlPlNoaWZ0PC90aXRsZT5cblx0XHRcdFx0XHQ8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHRcdFx0XHQ8ZGVmcz48L2RlZnM+XG5cdFx0XHRcdFx0PGcgaWQ9J1BhZ2UtMScgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCcgc2tldGNoOnR5cGU9J01TUGFnZSc+XG5cdFx0XHRcdFx0XHQ8ZyBpZD0nS2V5Ym9hcmQvTGlnaHQvVXBwZXInIHNrZXRjaDp0eXBlPSdNU0xheWVyR3JvdXAnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC0xNC4wMDAwMDAsIC0xMzAuMDAwMDAwKScgZmlsbD0nIzAzMDMwMyc+XG5cdFx0XHRcdFx0XHRcdDxnIGlkPSdUaGlyZC1Sb3cnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDMuMDAwMDAwLCAxMTguMDAwMDAwKScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCc+XG5cdFx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTIxLjcwNTIzODgsMTMuMjA1MjM4OCBDMjEuMzE1NzQ2MiwxMi44MTU3NDYyIDIwLjY4NTc1NTksMTIuODE0MjQ0MSAyMC4yOTQ3NjEyLDEzLjIwNTIzODggTDExLjkxNjA3NjcsMjEuNTgzOTIzMyBDMTEuMTMzOTk5MSwyMi4zNjYwMDA5IDExLjM5ODI2MDYsMjMgMTIuNDk3OTEzMSwyMyBMMTYuNSwyMyBMMTYuNSwyOC4wMDkyMjIgQzE2LjUsMjguNTU2NDEzNiAxNi45NDYzMTE0LDI5IDE3LjQ5NzU0NDYsMjkgTDI0LjUwMjQ1NTQsMjkgQzI1LjA1MzM4NCwyOSAyNS41LDI4LjU0OTAyNDggMjUuNSwyOC4wMDkyMjIgTDI1LjUsMjMgTDI5LjUwMjA4NjksMjMgQzMwLjYwNTUwMzgsMjMgMzAuODY2ODI0LDIyLjM2NjgyNCAzMC4wODM5MjMzLDIxLjU4MzkyMzMgTDIxLjcwNTIzODgsMTMuMjA1MjM4OCBaJyBpZD0nU2hpZnQnPjwvcGF0aD5cblx0XHRcdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0PC9zdmc+XCJcblx0XHRvZmYgOiBcIjw/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyc/PlxuXHRcdDxzdmcgd2lkdGg9JzIwcHgnIGhlaWdodD0nMThweCcgdmlld0JveD0nMCAwIDIwIDE5JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHhtbG5zOnNrZXRjaD0naHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zJz5cblx0XHRcdDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy41LjIgKDI1MjM1KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHRcdDx0aXRsZT5TaGlmdDwvdGl0bGU+XG5cdFx0XHQ8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHRcdDxkZWZzPjwvZGVmcz5cblx0XHRcdDxnIGlkPSdQYWdlLTEnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIHNrZXRjaDp0eXBlPSdNU1BhZ2UnPlxuXHRcdFx0XHQ8ZyBpZD0nS2V5Ym9hcmQvTGlnaHQvTG93ZXInIHNrZXRjaDp0eXBlPSdNU0xheWVyR3JvdXAnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC0xNC4wMDAwMDAsIC0xMjkuMDAwMDAwKScgZmlsbD0nIzAzMDMwMyc+XG5cdFx0XHRcdFx0PGcgaWQ9J1RoaXJkLVJvdycgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMy4wMDAwMDAsIDExOC4wMDAwMDApJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJz5cblx0XHRcdFx0XHRcdDxwYXRoIGQ9J00yMS42NzE5MDA4LDEyLjIzMjU4OTggQzIxLjMwMTAzMiwxMS44Mjc5OTE2IDIwLjY5NDY4OTIsMTEuODMzNDczMSAyMC4zMjg4MTk1LDEyLjIzMjU4OTggTDExLjY5NDcwMjMsMjEuNjUxMjk4MyBDMTAuNzU4NzQ0MSwyMi42NzIzMDggMTEuMTI4NTU0MSwyMy41IDEyLjUwOTc3NTEsMjMuNSBMMTUuOTk5OTk5OSwyMy41MDAwMDAyIEwxNS45OTk5OTk5LDI4LjAwMTQyNDEgQzE1Ljk5OTk5OTksMjguODI5MDY0OCAxNi42NzE2NTU5LDI5LjUwMDAwMDEgMTcuNDk3MTAxLDI5LjUwMDAwMDEgTDI0LjUwMjg5OTIsMjkuNTAwMDAwMSBDMjUuMzI5NzI1MywyOS41MDAwMDAxIDI2LjAwMDAwMDMsMjguODM0OTcwMyAyNi4wMDAwMDAzLDI4LjAwMTQyNDEgTDI2LjAwMDAwMDMsMjMuNTAwMDAwMSBMMjkuNDkwMjI1MSwyMy41MDAwMDAyIEMzMC44NzYzMzU3LDIzLjUwMDAwMDIgMzEuMjQzOTUyMSwyMi42NzUxOTE2IDMwLjMwNTQxNjEsMjEuNjUxMjk4NSBMMjEuNjcxOTAwOCwxMi4yMzI1ODk4IFogTTIxLjM0MTc0OCwxNC4zNjQ1MzE2IEMyMS4xNTMwMDU2LDE0LjE2MzIwNjQgMjAuODQzMzUxNSwxNC4xNjcwOTE0IDIwLjY1ODI1MTQsMTQuMzY0NTMxNiBMMTMuNSwyMS45OTk5OTk4IEwxNy41MDAwMDAxLDIxLjk5OTk5OTkgTDE3LjUwMDAwMDIsMjcuNTA4OTk1NiBDMTcuNTAwMDAwMiwyNy43ODAxNzAzIDE3LjczMjkwMjcsMjguMDAwMDAwOCAxOC4wMDM0MjI5LDI4LjAwMDAwMDggTDIzLjk5NjU3NywyOC4wMDAwMDA4IEMyNC4yNzQ2MDk3LDI4LjAwMDAwMDggMjQuNDk5OTk5NywyNy43NzIxMjAzIDI0LjQ5OTk5OTcsMjcuNTA4OTk1NiBMMjQuNDk5OTk5NywyMS45OTk5OTk5IEwyOC41LDIxLjk5OTk5OTkgTDIxLjM0MTc0OCwxNC4zNjQ1MzE2IFonIGlkPSdTaGlmdCc+PC9wYXRoPlxuXHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0PC9nPlxuXHRcdFx0PC9nPlxuXHRcdDwvc3ZnPlwiXG5cdH1cblx0bWVzc2FnZXNfYXBwOlwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdDxzdmcgd2lkdGg9JzYwcHgnIGhlaWdodD0nNjBweCcgdmlld0JveD0nMCAwIDYwIDYwJyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnPlxuXHQgICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzOS4xICgzMTcyMCkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdCAgICA8dGl0bGU+TWVzc2FnZXMgQ29weTwvdGl0bGU+XG5cdCAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0ICAgIDxkZWZzPlxuXHQgICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0nNTAlJyB5MT0nMCUnIHgyPSc1MCUnIHkyPScxMDAlJyBpZD0nbGluZWFyR3JhZGllbnQtMSc+XG5cdCAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9JyM2NkZEN0YnIG9mZnNldD0nMCUnPjwvc3RvcD5cblx0ICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0nIzA5QjgyNicgb2Zmc2V0PScxMDAlJz48L3N0b3A+XG5cdCAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cblx0ICAgIDwvZGVmcz5cblx0ICAgIDxnIGlkPSdpT1MtS2l0JyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJz5cblx0ICAgICAgICA8ZyBpZD0nSG9tZS1TY3JlZW4nIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC0xNDUyLjAwMDAwMCwgLTg1My4wMDAwMDApJz5cblx0ICAgICAgICAgICAgPGcgaWQ9J0hvbWUtU2NyZWVuLeKAoi1pUGhvbmUtNnMtUGx1cycgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMTQxNy4wMDAwMDAsIDgxMi4wMDAwMDApJz5cblx0ICAgICAgICAgICAgICAgIDxnIGlkPSdNZXNzYWdlcy1Db3B5JyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgzNS4wMDAwMDAsIDQxLjAwMDAwMCknPlxuXHQgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSdCRycgZmlsbD0ndXJsKCNsaW5lYXJHcmFkaWVudC0xKScgeD0nMCcgeT0nMCcgd2lkdGg9JzYwJyBoZWlnaHQ9JzYwJyByeD0nMTQnPjwvcmVjdD5cblx0ICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSdNMTkuNDIyMzk3Niw0NC4zMDg4MDA2IEMxMy4xNjY0MjI4LDQxLjEzNDg5NDkgOSwzNS40NjU1NDIxIDksMjkgQzksMTkuMDU4ODc0NSAxOC44NDk3MzU1LDExIDMxLDExIEM0My4xNTAyNjQ1LDExIDUzLDE5LjA1ODg3NDUgNTMsMjkgQzUzLDM4Ljk0MTEyNTUgNDMuMTUwMjY0NSw0NyAzMSw0NyBDMjguNjk5NDU4OCw0NyAyNi40ODEzOTE0LDQ2LjcxMTA4OTcgMjQuMzk3MDQwOSw0Ni4xNzUxOTUzIEMyMy45NDQyNjUzLDQ2Ljg4MzgxNDMgMjEuOTA2NTM3Nyw0OS41IDE2LjUsNDkuNSBDMTUuNjE1MDE4Nyw0OS41IDE3LjE4MzQ3NDksNDguNTkxNTkyMSAxOCw0Ny41IEMxOC43ODk0Mjg2LDQ2LjQ0NDYzMjYgMTkuMjUwNTYyNSw0NC45NDgwMzYyIDE5LjQyMjM5NzYsNDQuMzA4ODAwNiBaJyBpZD0nQnViYmxlJyBmaWxsPScjRkZGRkZGJz48L3BhdGg+XG5cdCAgICAgICAgICAgICAgICA8L2c+XG5cdCAgICAgICAgICAgIDwvZz5cblx0ICAgICAgICA8L2c+XG5cdCAgICA8L2c+XG5cdDwvc3ZnPlwiXG5cdGNhbGVuZGFyX2FwcDpcIjw/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyc/PlxuXHQ8c3ZnIHdpZHRoPSc2MHB4JyBoZWlnaHQ9JzYwcHgnIHZpZXdCb3g9JzAgMCA2MCA2MCcgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJz5cblx0ICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMzkuMSAoMzE3MjApIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHQgICAgPHRpdGxlPkNhbGVuZGFyPC90aXRsZT5cblx0ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHQgICAgPGRlZnM+PC9kZWZzPlxuXHQgICAgPGcgaWQ9J1BhZ2UtMScgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCc+XG5cdCAgICAgICAgPGcgaWQ9J0hvbWUtU2NyZWVuLeKAoi1pUGhvbmUtU0UnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC05Mi4wMDAwMDAsIC0yNy4wMDAwMDApJz5cblx0ICAgICAgICAgICAgPGcgaWQ9J0hvbWUtU2NyZWVuLeKAoi1pUGhvbmUtNnMtQ29weScgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMC4wMDAwMDAsIDI3LjAwMDAwMCknPlxuXHQgICAgICAgICAgICAgICAgPGcgaWQ9J0NhbGVuZGFyJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSg5Mi4wMDAwMDAsIDAuMDAwMDAwKSc+XG5cdCAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9J0JHJyBmaWxsPScjRkZGRkZGJyB4PScwJyB5PScwJyB3aWR0aD0nNjAnIGhlaWdodD0nNjAnIHJ4PScxNCc+PC9yZWN0PlxuXHQgICAgICAgICAgICAgICAgICAgIDx0ZXh0IGlkPScyNScgZm9udC1mYW1pbHk9J1NGVUlEaXNwbGF5LVVsdHJhbGlnaHQsIFNGIFVJIERpc3BsYXknIGZvbnQtc2l6ZT0nNDAnIGZvbnQtd2VpZ2h0PScyMDAnIGxldHRlci1zcGFjaW5nPScwLjM3OTk5OTk5NScgZmlsbD0nIzAwMDAwMCc+XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIDx0c3BhbiB4PSc3LjEwODI4MTI1JyB5PSc0OSc+MjU8L3RzcGFuPlxuXHQgICAgICAgICAgICAgICAgICAgIDwvdGV4dD5cblx0ICAgICAgICAgICAgICAgICAgICA8dGV4dCBpZD0nTW9uZGF5JyBmb250LWZhbWlseT0nU0ZVSURpc3BsYXktTWVkaXVtLCBTRiBVSSBEaXNwbGF5JyBmb250LXNpemU9JzExJyBmb250LXdlaWdodD0nNDAwJyBsZXR0ZXItc3BhY2luZz0nMC4zNzk5OTk5OTUnIGZpbGw9JyNGRjNCMzAnPlxuXHQgICAgICAgICAgICAgICAgICAgICAgICA8dHNwYW4geD0nOS4wMjk5MjE4OScgeT0nMTUnPk1vbmRheTwvdHNwYW4+XG5cdCAgICAgICAgICAgICAgICAgICAgPC90ZXh0PlxuXHQgICAgICAgICAgICAgICAgPC9nPlxuXHQgICAgICAgICAgICA8L2c+XG5cdCAgICAgICAgPC9nPlxuXHQgICAgPC9nPlxuXHQ8L3N2Zz5cIlxuXHRwaG90b3NfYXBwOlwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdDxzdmcgd2lkdGg9JzYwcHgnIGhlaWdodD0nNjBweCcgdmlld0JveD0nMCAwIDYwIDYwJyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnPlxuXHQgICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzOS4xICgzMTcyMCkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdCAgICA8dGl0bGU+UGhvdG9zPC90aXRsZT5cblx0ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHQgICAgPGRlZnM+PC9kZWZzPlxuXHQgICAgPGcgaWQ9J1BhZ2UtMScgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCc+XG5cdCAgICAgICAgPGcgaWQ9J0hvbWUtU2NyZWVuLeKAoi1pUGhvbmUtU0UnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC0xNjguMDAwMDAwLCAtMjcuMDAwMDAwKSc+XG5cdCAgICAgICAgICAgIDxnIGlkPSdIb21lLVNjcmVlbi3igKItaVBob25lLTZzLUNvcHknIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDAuMDAwMDAwLCAyNy4wMDAwMDApJz5cblx0ICAgICAgICAgICAgICAgIDxnIGlkPSdQaG90b3MnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDE2OC4wMDAwMDAsIDAuMDAwMDAwKSc+XG5cdCAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9J0JHJyBmaWxsPScjRkZGRkZGJyB4PScwJyB5PScwJyB3aWR0aD0nNjAnIGhlaWdodD0nNjAnIHJ4PScxNCc+PC9yZWN0PlxuXHQgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSdQZWRhbCcgZmlsbD0nI0YyNkU2NCcgc3R5bGU9J21peC1ibGVuZC1tb2RlOiBtdWx0aXBseTsnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDIwLjE0MjEzNiwgMjAuMTQyMTM2KSByb3RhdGUoNDUuMDAwMDAwKSB0cmFuc2xhdGUoLTIwLjE0MjEzNiwgLTIwLjE0MjEzNikgJyB4PSc4LjE0MjEzNTYyJyB5PScxMi4xNDIxMzU2JyB3aWR0aD0nMjQnIGhlaWdodD0nMTYnIHJ4PSc4Jz48L3JlY3Q+XG5cdCAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9J1BlZGFsJyBmaWxsPScjRjBFMjJBJyBzdHlsZT0nbWl4LWJsZW5kLW1vZGU6IG11bHRpcGx5OycgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMzkuMTQyMTM2LCAxOS4xNDIxMzYpIHJvdGF0ZSgxMzUuMDAwMDAwKSB0cmFuc2xhdGUoLTM5LjE0MjEzNiwgLTE5LjE0MjEzNikgJyB4PScyNy4xNDIxMzU2JyB5PScxMS4xNDIxMzU2JyB3aWR0aD0nMjQnIGhlaWdodD0nMTYnIHJ4PSc4Jz48L3JlY3Q+XG5cdCAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9J1BlZGFsJyBmaWxsPScjRDI4OEIxJyBzdHlsZT0nbWl4LWJsZW5kLW1vZGU6IG11bHRpcGx5OycgeD0nNCcgeT0nMjInIHdpZHRoPScyNCcgaGVpZ2h0PScxNicgcng9JzgnPjwvcmVjdD5cblx0ICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0nUGVkYWwnIGZpbGw9JyNGQkFEMzEnIHN0eWxlPSdtaXgtYmxlbmQtbW9kZTogbXVsdGlwbHk7JyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgzMC4wMDAwMDAsIDE2LjAwMDAwMCkgcm90YXRlKDkwLjAwMDAwMCkgdHJhbnNsYXRlKC0zMC4wMDAwMDAsIC0xNi4wMDAwMDApICcgeD0nMTgnIHk9JzgnIHdpZHRoPScyNCcgaGVpZ2h0PScxNicgcng9JzgnPjwvcmVjdD5cblx0ICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0nUGVkYWwnIGZpbGw9JyNBNThFQzInIHN0eWxlPSdtaXgtYmxlbmQtbW9kZTogbXVsdGlwbHk7JyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgyMC4xNDIxMzYsIDQwLjE0MjEzNikgc2NhbGUoMSwgLTEpIHJvdGF0ZSg0NS4wMDAwMDApIHRyYW5zbGF0ZSgtMjAuMTQyMTM2LCAtNDAuMTQyMTM2KSAnIHg9JzguMTQyMTM1NjInIHk9JzMyLjE0MjEzNTYnIHdpZHRoPScyNCcgaGVpZ2h0PScxNicgcng9JzgnPjwvcmVjdD5cblx0ICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0nUGVkYWwnIGZpbGw9JyM2Q0MxOTknIHN0eWxlPSdtaXgtYmxlbmQtbW9kZTogbXVsdGlwbHk7JyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSg0MC4xNDIxMzYsIDQwLjE0MjEzNikgc2NhbGUoMSwgLTEpIHJvdGF0ZSgxMzUuMDAwMDAwKSB0cmFuc2xhdGUoLTQwLjE0MjEzNiwgLTQwLjE0MjEzNikgJyB4PScyOC4xNDIxMzU2JyB5PSczMi4xNDIxMzU2JyB3aWR0aD0nMjQnIGhlaWdodD0nMTYnIHJ4PSc4Jz48L3JlY3Q+XG5cdCAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9J1BlZGFsJyBmaWxsPScjNzdBRUREJyBzdHlsZT0nbWl4LWJsZW5kLW1vZGU6IG11bHRpcGx5OycgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMzAuMDAwMDAwLCA0NC4wMDAwMDApIHNjYWxlKDEsIC0xKSByb3RhdGUoOTAuMDAwMDAwKSB0cmFuc2xhdGUoLTMwLjAwMDAwMCwgLTQ0LjAwMDAwMCkgJyB4PScxOCcgeT0nMzYnIHdpZHRoPScyNCcgaGVpZ2h0PScxNicgcng9JzgnPjwvcmVjdD5cblx0ICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0nUGVkYWwnIGZpbGw9JyNCNUQ2NTUnIHN0eWxlPSdtaXgtYmxlbmQtbW9kZTogbXVsdGlwbHk7JyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSg0NC4wMDAwMDAsIDMwLjAwMDAwMCkgcm90YXRlKDE4MC4wMDAwMDApIHRyYW5zbGF0ZSgtNDQuMDAwMDAwLCAtMzAuMDAwMDAwKSAnIHg9JzMyJyB5PScyMicgd2lkdGg9JzI0JyBoZWlnaHQ9JzE2JyByeD0nOCc+PC9yZWN0PlxuXHQgICAgICAgICAgICAgICAgPC9nPlxuXHQgICAgICAgICAgICA8L2c+XG5cdCAgICAgICAgPC9nPlxuXHQgICAgPC9nPlxuXHQ8L3N2Zz5cIlxuXHRjYW1lcmFfYXBwOlwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdDxzdmcgd2lkdGg9JzYwcHgnIGhlaWdodD0nNjBweCcgdmlld0JveD0nMCAwIDYwIDYwJyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnPlxuXHQgICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzOS4xICgzMTcyMCkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdCAgICA8dGl0bGU+Q2FtZXJhPC90aXRsZT5cblx0ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHQgICAgPGRlZnM+XG5cdCAgICAgICAgPGxpbmVhckdyYWRpZW50IHgxPSc1MCUnIHkxPScwJScgeDI9JzUwJScgeTI9JzEwMCUnIGlkPSdsaW5lYXJHcmFkaWVudC0xJz5cblx0ICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0nI0RCRERERScgb2Zmc2V0PScwJSc+PC9zdG9wPlxuXHQgICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPScjODk4QjkxJyBvZmZzZXQ9JzEwMCUnPjwvc3RvcD5cblx0ICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxuXHQgICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0nNTAlJyB5MT0nMCUnIHgyPSc1MCUnIHkyPScxMDAlJyBpZD0nbGluZWFyR3JhZGllbnQtMic+XG5cdCAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9JyM0NzQ3NDcnIG9mZnNldD0nMCUnPjwvc3RvcD5cblx0ICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0nIzJCMkIyQicgb2Zmc2V0PScxMDAlJz48L3N0b3A+XG5cdCAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cblx0ICAgICAgICA8cGF0aCBkPSdNOSwyMCBMNTEsMjAgTDUxLDQyIEw5LDQyIEw5LDIwIFogTTksNDIuOTk3NTcyMiBDOSw0NC4zNzk1ODc3IDEwLjExOTk2NTMsNDUuNSAxMS41MDE1MTI1LDQ1LjUgTDQ4LjQ5ODQ4NzUsNDUuNSBDNDkuODc2NjAxNSw0NS41IDUxLDQ0LjM3OTYyNDkgNTEsNDIuOTk3NTcyMiBMNTEsNDIuNSBMOSw0Mi41IEw5LDQyLjk5NzU3MjIgWiBNOSwxOS41IEw5LDE5LjAwMjQyNzggQzksMTcuNjIwMzc1MSAxMC4xMjMzOTg1LDE2LjUgMTEuNTAxNTEyNSwxNi41IEwxNy41MzA0NDk2LDE2LjUgQzE4LjQ1NzIwMTEsMTYuNDE4MDE4NiAxOS4zMjE4MjA4LDE2LjI0MTYzMTMgMTkuOTIwNTMyMiwxNS44OTAyNTg4IEMyMS44MzI2NDI1LDE0Ljc2ODA3NzIgMjEuOTY0MTExMywxMS41IDI0Ljk5NjIwNSwxMS41IEwzMC4wMjYwODMsMTEuNSBMMzUuMDU1OTYxMSwxMS41IEMzOC4wODgwNTQ4LDExLjUgMzguMjE5NTIzNiwxNC43NjgwNzcyIDQwLjEzMTYzMzksMTUuODkwMjU4OCBDNDAuNzMwMzQ1MywxNi4yNDE2MzEzIDQxLjU5NDk2NSwxNi40MTgwMTg2IDQyLjUyMTcxNjUsMTYuNSBMNDguNDk4NDg3NSwxNi41IEM0OS44ODAwMzQ3LDE2LjUgNTEsMTcuNjIwNDEyMyA1MSwxOS4wMDI0Mjc4IEw1MSwxOS41IEw5LDE5LjUgTDksMTkuNSBaIE0zOS4yNSwzMSBDMzkuMjUsMjUuODkxMzY2MSAzNS4xMDg2MzM5LDIxLjc1IDMwLDIxLjc1IEMyNC44OTEzNjYxLDIxLjc1IDIwLjc1LDI1Ljg5MTM2NjEgMjAuNzUsMzEgQzIwLjc1LDM2LjEwODYzMzkgMjQuODkxMzY2MSw0MC4yNSAzMCw0MC4yNSBDMzUuMTA4NjMzOSw0MC4yNSAzOS4yNSwzNi4xMDg2MzM5IDM5LjI1LDMxIEwzOS4yNSwzMSBaIE0yMi4yNSwzMSBDMjIuMjUsMjYuNzE5NzkzMiAyNS43MTk3OTMyLDIzLjI1IDMwLDIzLjI1IEMzNC4yODAyMDY4LDIzLjI1IDM3Ljc1LDI2LjcxOTc5MzIgMzcuNzUsMzEgQzM3Ljc1LDM1LjI4MDIwNjggMzQuMjgwMjA2OCwzOC43NSAzMCwzOC43NSBDMjUuNzE5NzkzMiwzOC43NSAyMi4yNSwzNS4yODAyMDY4IDIyLjI1LDMxIEwyMi4yNSwzMSBaJyBpZD0ncGF0aC0zJz48L3BhdGg+XG5cdCAgICAgICAgPGZpbHRlciB4PSctNTAlJyB5PSctNTAlJyB3aWR0aD0nMjAwJScgaGVpZ2h0PScyMDAlJyBmaWx0ZXJVbml0cz0nb2JqZWN0Qm91bmRpbmdCb3gnIGlkPSdmaWx0ZXItNCc+XG5cdCAgICAgICAgICAgIDxmZU9mZnNldCBkeD0nMCcgZHk9JzEnIGluPSdTb3VyY2VBbHBoYScgcmVzdWx0PSdzaGFkb3dPZmZzZXRPdXRlcjEnPjwvZmVPZmZzZXQ+XG5cdCAgICAgICAgICAgIDxmZUNvbG9yTWF0cml4IHZhbHVlcz0nMCAwIDAgMCAxICAgMCAwIDAgMCAxICAgMCAwIDAgMCAxICAwIDAgMCAwLjUgMCcgdHlwZT0nbWF0cml4JyBpbj0nc2hhZG93T2Zmc2V0T3V0ZXIxJz48L2ZlQ29sb3JNYXRyaXg+XG5cdCAgICAgICAgPC9maWx0ZXI+XG5cdCAgICAgICAgPGZpbHRlciB4PSctNTAlJyB5PSctNTAlJyB3aWR0aD0nMjAwJScgaGVpZ2h0PScyMDAlJyBmaWx0ZXJVbml0cz0nb2JqZWN0Qm91bmRpbmdCb3gnIGlkPSdmaWx0ZXItNSc+XG5cdCAgICAgICAgICAgIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249JzEnIGluPSdTb3VyY2VBbHBoYScgcmVzdWx0PSdzaGFkb3dCbHVySW5uZXIxJz48L2ZlR2F1c3NpYW5CbHVyPlxuXHQgICAgICAgICAgICA8ZmVPZmZzZXQgZHg9JzAnIGR5PScxJyBpbj0nc2hhZG93Qmx1cklubmVyMScgcmVzdWx0PSdzaGFkb3dPZmZzZXRJbm5lcjEnPjwvZmVPZmZzZXQ+XG5cdCAgICAgICAgICAgIDxmZUNvbXBvc2l0ZSBpbj0nc2hhZG93T2Zmc2V0SW5uZXIxJyBpbjI9J1NvdXJjZUFscGhhJyBvcGVyYXRvcj0nYXJpdGhtZXRpYycgazI9Jy0xJyBrMz0nMScgcmVzdWx0PSdzaGFkb3dJbm5lcklubmVyMSc+PC9mZUNvbXBvc2l0ZT5cblx0ICAgICAgICAgICAgPGZlQ29sb3JNYXRyaXggdmFsdWVzPScwIDAgMCAwIDAgICAwIDAgMCAwIDAgICAwIDAgMCAwIDAgIDAgMCAwIDAuMyAwJyB0eXBlPSdtYXRyaXgnIGluPSdzaGFkb3dJbm5lcklubmVyMScgcmVzdWx0PSdzaGFkb3dNYXRyaXhJbm5lcjEnPjwvZmVDb2xvck1hdHJpeD5cblx0ICAgICAgICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0nMC41JyBpbj0nU291cmNlQWxwaGEnIHJlc3VsdD0nc2hhZG93Qmx1cklubmVyMic+PC9mZUdhdXNzaWFuQmx1cj5cblx0ICAgICAgICAgICAgPGZlT2Zmc2V0IGR4PScwJyBkeT0nMScgaW49J3NoYWRvd0JsdXJJbm5lcjInIHJlc3VsdD0nc2hhZG93T2Zmc2V0SW5uZXIyJz48L2ZlT2Zmc2V0PlxuXHQgICAgICAgICAgICA8ZmVDb21wb3NpdGUgaW49J3NoYWRvd09mZnNldElubmVyMicgaW4yPSdTb3VyY2VBbHBoYScgb3BlcmF0b3I9J2FyaXRobWV0aWMnIGsyPSctMScgazM9JzEnIHJlc3VsdD0nc2hhZG93SW5uZXJJbm5lcjInPjwvZmVDb21wb3NpdGU+XG5cdCAgICAgICAgICAgIDxmZUNvbG9yTWF0cml4IHZhbHVlcz0nMCAwIDAgMCAwICAgMCAwIDAgMCAwICAgMCAwIDAgMCAwICAwIDAgMCAwLjMgMCcgdHlwZT0nbWF0cml4JyBpbj0nc2hhZG93SW5uZXJJbm5lcjInIHJlc3VsdD0nc2hhZG93TWF0cml4SW5uZXIyJz48L2ZlQ29sb3JNYXRyaXg+XG5cdCAgICAgICAgICAgIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249JzAuNScgaW49J1NvdXJjZUFscGhhJyByZXN1bHQ9J3NoYWRvd0JsdXJJbm5lcjMnPjwvZmVHYXVzc2lhbkJsdXI+XG5cdCAgICAgICAgICAgIDxmZU9mZnNldCBkeD0nMCcgZHk9JzAnIGluPSdzaGFkb3dCbHVySW5uZXIzJyByZXN1bHQ9J3NoYWRvd09mZnNldElubmVyMyc+PC9mZU9mZnNldD5cblx0ICAgICAgICAgICAgPGZlQ29tcG9zaXRlIGluPSdzaGFkb3dPZmZzZXRJbm5lcjMnIGluMj0nU291cmNlQWxwaGEnIG9wZXJhdG9yPSdhcml0aG1ldGljJyBrMj0nLTEnIGszPScxJyByZXN1bHQ9J3NoYWRvd0lubmVySW5uZXIzJz48L2ZlQ29tcG9zaXRlPlxuXHQgICAgICAgICAgICA8ZmVDb2xvck1hdHJpeCB2YWx1ZXM9JzAgMCAwIDAgMCAgIDAgMCAwIDAgMCAgIDAgMCAwIDAgMCAgMCAwIDAgMC4zIDAnIHR5cGU9J21hdHJpeCcgaW49J3NoYWRvd0lubmVySW5uZXIzJyByZXN1bHQ9J3NoYWRvd01hdHJpeElubmVyMyc+PC9mZUNvbG9yTWF0cml4PlxuXHQgICAgICAgICAgICA8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPScwLjUnIGluPSdTb3VyY2VBbHBoYScgcmVzdWx0PSdzaGFkb3dCbHVySW5uZXI0Jz48L2ZlR2F1c3NpYW5CbHVyPlxuXHQgICAgICAgICAgICA8ZmVPZmZzZXQgZHg9Jy0wJyBkeT0nMCcgaW49J3NoYWRvd0JsdXJJbm5lcjQnIHJlc3VsdD0nc2hhZG93T2Zmc2V0SW5uZXI0Jz48L2ZlT2Zmc2V0PlxuXHQgICAgICAgICAgICA8ZmVDb21wb3NpdGUgaW49J3NoYWRvd09mZnNldElubmVyNCcgaW4yPSdTb3VyY2VBbHBoYScgb3BlcmF0b3I9J2FyaXRobWV0aWMnIGsyPSctMScgazM9JzEnIHJlc3VsdD0nc2hhZG93SW5uZXJJbm5lcjQnPjwvZmVDb21wb3NpdGU+XG5cdCAgICAgICAgICAgIDxmZUNvbG9yTWF0cml4IHZhbHVlcz0nMCAwIDAgMCAwICAgMCAwIDAgMCAwICAgMCAwIDAgMCAwICAwIDAgMCAwLjMgMCcgdHlwZT0nbWF0cml4JyBpbj0nc2hhZG93SW5uZXJJbm5lcjQnIHJlc3VsdD0nc2hhZG93TWF0cml4SW5uZXI0Jz48L2ZlQ29sb3JNYXRyaXg+XG5cdCAgICAgICAgICAgIDxmZU1lcmdlPlxuXHQgICAgICAgICAgICAgICAgPGZlTWVyZ2VOb2RlIGluPSdzaGFkb3dNYXRyaXhJbm5lcjEnPjwvZmVNZXJnZU5vZGU+XG5cdCAgICAgICAgICAgICAgICA8ZmVNZXJnZU5vZGUgaW49J3NoYWRvd01hdHJpeElubmVyMic+PC9mZU1lcmdlTm9kZT5cblx0ICAgICAgICAgICAgICAgIDxmZU1lcmdlTm9kZSBpbj0nc2hhZG93TWF0cml4SW5uZXIzJz48L2ZlTWVyZ2VOb2RlPlxuXHQgICAgICAgICAgICAgICAgPGZlTWVyZ2VOb2RlIGluPSdzaGFkb3dNYXRyaXhJbm5lcjQnPjwvZmVNZXJnZU5vZGU+XG5cdCAgICAgICAgICAgIDwvZmVNZXJnZT5cblx0ICAgICAgICA8L2ZpbHRlcj5cblx0ICAgICAgICA8cGF0aCBkPSdNMTMsMTUuMjUgQzEzLDE0LjgzNTc4NjQgMTMuMzM1NTk0NywxNC41IDEzLjc1MDgzNzgsMTQuNSBMMTUuNzQ5MTYyMiwxNC41IEMxNi4xNjM4Mzg1LDE0LjUgMTYuNSwxNC44MzI4OTg2IDE2LjUsMTUuMjUgTDE2LjUsMTYgTDEzLDE2IEwxMywxNS4yNSBMMTMsMTUuMjUgWicgaWQ9J3BhdGgtNic+PC9wYXRoPlxuXHQgICAgICAgIDxmaWx0ZXIgeD0nLTUwJScgeT0nLTUwJScgd2lkdGg9JzIwMCUnIGhlaWdodD0nMjAwJScgZmlsdGVyVW5pdHM9J29iamVjdEJvdW5kaW5nQm94JyBpZD0nZmlsdGVyLTcnPlxuXHQgICAgICAgICAgICA8ZmVPZmZzZXQgZHg9JzAnIGR5PScwJyBpbj0nU291cmNlQWxwaGEnIHJlc3VsdD0nc2hhZG93T2Zmc2V0T3V0ZXIxJz48L2ZlT2Zmc2V0PlxuXHQgICAgICAgICAgICA8ZmVDb2xvck1hdHJpeCB2YWx1ZXM9JzAgMCAwIDAgMSAgIDAgMCAwIDAgMSAgIDAgMCAwIDAgMSAgMCAwIDAgMC41IDAnIHR5cGU9J21hdHJpeCcgaW49J3NoYWRvd09mZnNldE91dGVyMSc+PC9mZUNvbG9yTWF0cml4PlxuXHQgICAgICAgIDwvZmlsdGVyPlxuXHQgICAgICAgIDxmaWx0ZXIgeD0nLTUwJScgeT0nLTUwJScgd2lkdGg9JzIwMCUnIGhlaWdodD0nMjAwJScgZmlsdGVyVW5pdHM9J29iamVjdEJvdW5kaW5nQm94JyBpZD0nZmlsdGVyLTgnPlxuXHQgICAgICAgICAgICA8ZmVPZmZzZXQgZHg9JzAnIGR5PScxJyBpbj0nU291cmNlQWxwaGEnIHJlc3VsdD0nc2hhZG93T2Zmc2V0SW5uZXIxJz48L2ZlT2Zmc2V0PlxuXHQgICAgICAgICAgICA8ZmVDb21wb3NpdGUgaW49J3NoYWRvd09mZnNldElubmVyMScgaW4yPSdTb3VyY2VBbHBoYScgb3BlcmF0b3I9J2FyaXRobWV0aWMnIGsyPSctMScgazM9JzEnIHJlc3VsdD0nc2hhZG93SW5uZXJJbm5lcjEnPjwvZmVDb21wb3NpdGU+XG5cdCAgICAgICAgICAgIDxmZUNvbG9yTWF0cml4IHZhbHVlcz0nMCAwIDAgMCAwICAgMCAwIDAgMCAwICAgMCAwIDAgMCAwICAwIDAgMCAwLjUgMCcgdHlwZT0nbWF0cml4JyBpbj0nc2hhZG93SW5uZXJJbm5lcjEnPjwvZmVDb2xvck1hdHJpeD5cblx0ICAgICAgICA8L2ZpbHRlcj5cblx0ICAgICAgICA8Y2lyY2xlIGlkPSdwYXRoLTknIGN4PSczOS41JyBjeT0nMjMnIHI9JzEnPjwvY2lyY2xlPlxuXHQgICAgICAgIDxmaWx0ZXIgeD0nLTUwJScgeT0nLTUwJScgd2lkdGg9JzIwMCUnIGhlaWdodD0nMjAwJScgZmlsdGVyVW5pdHM9J29iamVjdEJvdW5kaW5nQm94JyBpZD0nZmlsdGVyLTEwJz5cblx0ICAgICAgICAgICAgPGZlT2Zmc2V0IGR4PScwJyBkeT0nMCcgaW49J1NvdXJjZUFscGhhJyByZXN1bHQ9J3NoYWRvd09mZnNldE91dGVyMSc+PC9mZU9mZnNldD5cblx0ICAgICAgICAgICAgPGZlQ29sb3JNYXRyaXggdmFsdWVzPScwIDAgMCAwIDAgICAwIDAgMCAwIDAgICAwIDAgMCAwIDAgIDAgMCAwIDAuNSAwJyB0eXBlPSdtYXRyaXgnIGluPSdzaGFkb3dPZmZzZXRPdXRlcjEnPjwvZmVDb2xvck1hdHJpeD5cblx0ICAgICAgICA8L2ZpbHRlcj5cblx0ICAgICAgICA8ZmlsdGVyIHg9Jy01MCUnIHk9Jy01MCUnIHdpZHRoPScyMDAlJyBoZWlnaHQ9JzIwMCUnIGZpbHRlclVuaXRzPSdvYmplY3RCb3VuZGluZ0JveCcgaWQ9J2ZpbHRlci0xMSc+XG5cdCAgICAgICAgICAgIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249JzAuNScgaW49J1NvdXJjZUFscGhhJyByZXN1bHQ9J3NoYWRvd0JsdXJJbm5lcjEnPjwvZmVHYXVzc2lhbkJsdXI+XG5cdCAgICAgICAgICAgIDxmZU9mZnNldCBkeD0nMCcgZHk9JzAnIGluPSdzaGFkb3dCbHVySW5uZXIxJyByZXN1bHQ9J3NoYWRvd09mZnNldElubmVyMSc+PC9mZU9mZnNldD5cblx0ICAgICAgICAgICAgPGZlQ29tcG9zaXRlIGluPSdzaGFkb3dPZmZzZXRJbm5lcjEnIGluMj0nU291cmNlQWxwaGEnIG9wZXJhdG9yPSdhcml0aG1ldGljJyBrMj0nLTEnIGszPScxJyByZXN1bHQ9J3NoYWRvd0lubmVySW5uZXIxJz48L2ZlQ29tcG9zaXRlPlxuXHQgICAgICAgICAgICA8ZmVDb2xvck1hdHJpeCB2YWx1ZXM9JzAgMCAwIDAgMCAgIDAgMCAwIDAgMCAgIDAgMCAwIDAgMCAgMCAwIDAgMC4zIDAnIHR5cGU9J21hdHJpeCcgaW49J3NoYWRvd0lubmVySW5uZXIxJz48L2ZlQ29sb3JNYXRyaXg+XG5cdCAgICAgICAgPC9maWx0ZXI+XG5cdCAgICA8L2RlZnM+XG5cdCAgICA8ZyBpZD0nUGFnZS0xJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJz5cblx0ICAgICAgICA8ZyBpZD0nSG9tZS1TY3JlZW4t4oCiLWlQaG9uZS1TRScgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTI0NC4wMDAwMDAsIC0yNy4wMDAwMDApJz5cblx0ICAgICAgICAgICAgPGcgaWQ9J0hvbWUtU2NyZWVuLeKAoi1pUGhvbmUtNnMtQ29weScgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMC4wMDAwMDAsIDI3LjAwMDAwMCknPlxuXHQgICAgICAgICAgICAgICAgPGcgaWQ9J0NhbWVyYScgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMjQ0LjAwMDAwMCwgMC4wMDAwMDApJz5cblx0ICAgICAgICAgICAgICAgICAgICA8ZyBpZD0naWNvbic+XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9J00zOS4wODE1LDAgQzQ1LjEwNSwwIDQ4LjExNiwwIDUxLjM1ODUsMS4wMjUgQzU0Ljg5ODUsMi4zMTM1IDU3LjY4NjUsNS4xMDE1IDU4Ljk3NSw4LjY0MTUgQzYwLDExLjg4MzUgNjAsMTQuODk1NSA2MCwyMC45MTg1IEw2MCwzOS4wODE1IEM2MCw0NS4xMDUgNjAsNDguMTE2IDU4Ljk3NSw1MS4zNTg1IEM1Ny42ODY1LDU0Ljg5ODUgNTQuODk4NSw1Ny42ODY1IDUxLjM1ODUsNTguOTc0NSBDNDguMTE2LDYwIDQ1LjEwNSw2MCAzOS4wODE1LDYwIEwyMC45MTg1LDYwIEMxNC44OTUsNjAgMTEuODgzNSw2MCA4LjY0MTUsNTguOTc0NSBDNS4xMDE1LDU3LjY4NjUgMi4zMTM1LDU0Ljg5ODUgMS4wMjUsNTEuMzU4NSBDMCw0OC4xMTYgMCw0NS4xMDUgMCwzOS4wODE1IEwwLDIwLjkxODUgQzAsMTQuODk1NSAwLDExLjg4MzUgMS4wMjUsOC42NDE1IEMyLjMxMzUsNS4xMDE1IDUuMTAxNSwyLjMxMzUgOC42NDE1LDEuMDI1IEMxMS44ODM1LDAgMTQuODk1LDAgMjAuOTE4NSwwIEwzOS4wODE1LDAgWicgaWQ9J0ljb24nIGZpbGw9J3VybCgjbGluZWFyR3JhZGllbnQtMSknPjwvcGF0aD5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9J0NhbWVyYSc+XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dXNlIGZpbGw9J2JsYWNrJyBmaWxsLW9wYWNpdHk9JzEnIGZpbHRlcj0ndXJsKCNmaWx0ZXItNCknIHhsaW5rOmhyZWY9JyNwYXRoLTMnPjwvdXNlPlxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSBmaWxsPSd1cmwoI2xpbmVhckdyYWRpZW50LTIpJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIHhsaW5rOmhyZWY9JyNwYXRoLTMnPjwvdXNlPlxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSBmaWxsPSdibGFjaycgZmlsbC1vcGFjaXR5PScxJyBmaWx0ZXI9J3VybCgjZmlsdGVyLTUpJyB4bGluazpocmVmPScjcGF0aC0zJz48L3VzZT5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgPC9nPlxuXHQgICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0nUGF0aCc+XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dXNlIGZpbGw9J2JsYWNrJyBmaWxsLW9wYWNpdHk9JzEnIGZpbHRlcj0ndXJsKCNmaWx0ZXItNyknIHhsaW5rOmhyZWY9JyNwYXRoLTYnPjwvdXNlPlxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSBmaWxsPSd1cmwoI2xpbmVhckdyYWRpZW50LTIpJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIHhsaW5rOmhyZWY9JyNwYXRoLTYnPjwvdXNlPlxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSBmaWxsPSdibGFjaycgZmlsbC1vcGFjaXR5PScxJyBmaWx0ZXI9J3VybCgjZmlsdGVyLTgpJyB4bGluazpocmVmPScjcGF0aC02Jz48L3VzZT5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgPC9nPlxuXHQgICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0nT3ZhbC0xNic+XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dXNlIGZpbGw9J2JsYWNrJyBmaWxsLW9wYWNpdHk9JzEnIGZpbHRlcj0ndXJsKCNmaWx0ZXItMTApJyB4bGluazpocmVmPScjcGF0aC05Jz48L3VzZT5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgZmlsbD0nI0ZGQzIwOScgZmlsbC1ydWxlPSdldmVub2RkJyB4bGluazpocmVmPScjcGF0aC05Jz48L3VzZT5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgZmlsbD0nYmxhY2snIGZpbGwtb3BhY2l0eT0nMScgZmlsdGVyPSd1cmwoI2ZpbHRlci0xMSknIHhsaW5rOmhyZWY9JyNwYXRoLTknPjwvdXNlPlxuXHQgICAgICAgICAgICAgICAgICAgICAgICA8L2c+XG5cdCAgICAgICAgICAgICAgICAgICAgPC9nPlxuXHQgICAgICAgICAgICAgICAgPC9nPlxuXHQgICAgICAgICAgICA8L2c+XG5cdCAgICAgICAgPC9nPlxuXHQgICAgPC9nPlxuXHQ8L3N2Zz5cIlxuXHR3ZWF0aGVyX2FwcDpcIjw/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyc/PlxuXHQ8c3ZnIHdpZHRoPSc2MHB4JyBoZWlnaHQ9JzYwcHgnIHZpZXdCb3g9JzAgMCA2MCA2MCcgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJz5cblx0ICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMzkuMSAoMzE3MjApIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHQgICAgPHRpdGxlPldlYWx0aGVyPC90aXRsZT5cblx0ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHQgICAgPGRlZnM+XG5cdCAgICAgICAgPGxpbmVhckdyYWRpZW50IHgxPSc1MCUnIHkxPScwJScgeDI9JzUwJScgeTI9JzEwMCUnIGlkPSdsaW5lYXJHcmFkaWVudC0xJz5cblx0ICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0nIzFENjJGMCcgb2Zmc2V0PScwJSc+PC9zdG9wPlxuXHQgICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPScjMTlENUZEJyBvZmZzZXQ9JzEwMCUnPjwvc3RvcD5cblx0ICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxuXHQgICAgPC9kZWZzPlxuXHQgICAgPGcgaWQ9J1BhZ2UtMScgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCc+XG5cdCAgICAgICAgPGcgaWQ9J0hvbWUtU2NyZWVuLeKAoi1pUGhvbmUtU0UnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC0xNi4wMDAwMDAsIC0xMTUuMDAwMDAwKSc+XG5cdCAgICAgICAgICAgIDxnIGlkPSdIb21lLVNjcmVlbi3igKItaVBob25lLTZzLUNvcHknIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDAuMDAwMDAwLCAyNy4wMDAwMDApJz5cblx0ICAgICAgICAgICAgICAgIDxnIGlkPSdXZWFsdGhlcicgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMTYuMDAwMDAwLCA4OC4wMDAwMDApJz5cblx0ICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSdNMzkuMDgxNSwwIEM0NS4xMDUsMCA0OC4xMTYsMCA1MS4zNTg1LDEuMDI1IEM1NC44OTg1LDIuMzEzNSA1Ny42ODY1LDUuMTAxNSA1OC45NzUsOC42NDE1IEM2MCwxMS44ODM1IDYwLDE0Ljg5NTUgNjAsMjAuOTE4NSBMNjAsMzkuMDgxNSBDNjAsNDUuMTA1IDYwLDQ4LjExNiA1OC45NzUsNTEuMzU4NSBDNTcuNjg2NSw1NC44OTg1IDU0Ljg5ODUsNTcuNjg2NSA1MS4zNTg1LDU4Ljk3NDUgQzQ4LjExNiw2MCA0NS4xMDUsNjAgMzkuMDgxNSw2MCBMMjAuOTE4NSw2MCBDMTQuODk1LDYwIDExLjg4MzUsNjAgOC42NDE1LDU4Ljk3NDUgQzUuMTAxNSw1Ny42ODY1IDIuMzEzNSw1NC44OTg1IDEuMDI1LDUxLjM1ODUgQzAsNDguMTE2IDAsNDUuMTA1IDAsMzkuMDgxNSBMMCwyMC45MTg1IEMwLDE0Ljg5NTUgMCwxMS44ODM1IDEuMDI1LDguNjQxNSBDMi4zMTM1LDUuMTAxNSA1LjEwMTUsMi4zMTM1IDguNjQxNSwxLjAyNSBDMTEuODgzNSwwIDE0Ljg5NSwwIDIwLjkxODUsMCBMMzkuMDgxNSwwIFonIGlkPSdCRycgZmlsbD0ndXJsKCNsaW5lYXJHcmFkaWVudC0xKSc+PC9wYXRoPlxuXHQgICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgaWQ9J1N1bicgZmlsbD0nI0ZGRDgwMCcgY3g9JzE5Ljc1JyBjeT0nMjQuMjUnIHI9JzExLjI1Jz48L2NpcmNsZT5cblx0ICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSdNNDEuNSw0My45OTY2ODcgQzQ2LjQ5MzA2MjUsNDMuODY0MjAzNSA1MC41LDM5Ljc3NTAzNyA1MC41LDM0Ljc1IEM1MC41LDI5LjY0MTM2NjEgNDYuMzU4NjMzOSwyNS41IDQxLjI1LDI1LjUgQzQxLjA1NzQ1NDksMjUuNSA0MC44NjYyODM4LDI1LjUwNTg4MyA0MC42NzY2NTY3LDI1LjUxNzQ3OTEgQzM5LjAwNDMzNTMsMjEuNDAxODg4OSAzNC45NjYwNTM5LDE4LjUgMzAuMjUsMTguNSBDMjQuMDM2Nzk2NiwxOC41IDE5LDIzLjUzNjc5NjYgMTksMjkuNzUgQzE5LDMwLjAzOTE5MTUgMTkuMDEwOTExNywzMC4zMjU4MzQ0IDE5LjAzMjM0NiwzMC42MDk1Mzk1IEMxNS44ODU2MjQ0LDMxLjE4MjgxNTcgMTMuNSwzMy45Mzc4MTE2IDEzLjUsMzcuMjUgQzEzLjUsNDAuODk0MjI0MiAxNi4zODc5MDAyLDQzLjg2Mzk0MzEgMjAsNDMuOTk1NDU2MiBMMjAsNDQgTDQxLjUsNDQgTDQxLjUsNDMuOTk2Njg3IEw0MS41LDQzLjk5NjY4NyBaJyBpZD0nQ2xvdWQnIGZpbGw9JyNGRkZGRkYnIG9wYWNpdHk9JzAuOTAwNTM2MzgxJz48L3BhdGg+XG5cdCAgICAgICAgICAgICAgICA8L2c+XG5cdCAgICAgICAgICAgIDwvZz5cblx0ICAgICAgICA8L2c+XG5cdCAgICA8L2c+XG5cdDwvc3ZnPlwiXG5cdGNsb2NrX2FwcDpcIjw/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyc/PlxuXHQ8c3ZnIHdpZHRoPSc2MHB4JyBoZWlnaHQ9JzYwcHgnIHZpZXdCb3g9JzAgMCA2MCA2MCcgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJz5cblx0ICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMzkuMSAoMzE3MjApIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHQgICAgPHRpdGxlPkNsb2NrPC90aXRsZT5cblx0ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHQgICAgPGRlZnM+XG5cdCAgICAgICAgPGxpbmVhckdyYWRpZW50IHgxPSc1MCUnIHkxPScwJScgeDI9JzUwJScgeTI9JzEwMCUnIGlkPSdsaW5lYXJHcmFkaWVudC0xJz5cblx0ICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0nI0YxRjFGMScgb2Zmc2V0PScwJSc+PC9zdG9wPlxuXHQgICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPScjRUVFRUVFJyBvZmZzZXQ9JzEwMCUnPjwvc3RvcD5cblx0ICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxuXHQgICAgPC9kZWZzPlxuXHQgICAgPGcgaWQ9J1BhZ2UtMScgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCc+XG5cdCAgICAgICAgPGcgaWQ9J0hvbWUtU2NyZWVuLeKAoi1pUGhvbmUtU0UnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC05Mi4wMDAwMDAsIC0xMTUuMDAwMDAwKSc+XG5cdCAgICAgICAgICAgIDxnIGlkPSdIb21lLVNjcmVlbi3igKItaVBob25lLTZzLUNvcHknIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDAuMDAwMDAwLCAyNy4wMDAwMDApJz5cblx0ICAgICAgICAgICAgICAgIDxnIGlkPSdDbG9jaycgdHJhbnNmb3JtPSd0cmFuc2xhdGUoOTIuMDAwMDAwLCA4OC4wMDAwMDApJz5cblx0ICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSdNMzkuMDgxNSwwIEM0NS4xMDUsMCA0OC4xMTYsMCA1MS4zNTg1LDEuMDI1IEM1NC44OTg1LDIuMzEzNSA1Ny42ODY1LDUuMTAxNSA1OC45NzUsOC42NDE1IEM2MCwxMS44ODM1IDYwLDE0Ljg5NTUgNjAsMjAuOTE4NSBMNjAsMzkuMDgxNSBDNjAsNDUuMTA1IDYwLDQ4LjExNiA1OC45NzUsNTEuMzU4NSBDNTcuNjg2NSw1NC44OTg1IDU0Ljg5ODUsNTcuNjg2NSA1MS4zNTg1LDU4Ljk3NDUgQzQ4LjExNiw2MCA0NS4xMDUsNjAgMzkuMDgxNSw2MCBMMjAuOTE4NSw2MCBDMTQuODk1LDYwIDExLjg4MzUsNjAgOC42NDE1LDU4Ljk3NDUgQzUuMTAxNSw1Ny42ODY1IDIuMzEzNSw1NC44OTg1IDEuMDI1LDUxLjM1ODUgQzAsNDguMTE2IDAsNDUuMTA1IDAsMzkuMDgxNSBMMCwyMC45MTg1IEMwLDE0Ljg5NTUgMCwxMS44ODM1IDEuMDI1LDguNjQxNSBDMi4zMTM1LDUuMTAxNSA1LjEwMTUsMi4zMTM1IDguNjQxNSwxLjAyNSBDMTEuODgzNSwwIDE0Ljg5NSwwIDIwLjkxODUsMCBMMzkuMDgxNSwwIFonIGlkPSdJY29uJyBmaWxsPScjMUUxRTFGJz48L3BhdGg+XG5cdCAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBpZD0nT3ZhbC0xMicgZmlsbD0ndXJsKCNsaW5lYXJHcmFkaWVudC0xKScgY3g9JzMwJyBjeT0nMzAnIHI9JzI2Jz48L2NpcmNsZT5cblx0ICAgICAgICAgICAgICAgICAgICA8ZyBpZD0nRGlnaXRzJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSg4LjAwMDAwMCwgNy4wMDAwMDApJyBmaWxsPScjNjE2MTYxJz5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0nTTMyLjQ2OCw4IEwzMi40NjgsMy43NDYgTDMyLjA3OCwzLjc0NiBDMzIuMDQ5OTk5OSwzLjkwNjAwMDggMzEuOTk4MDAwNCw0LjAzNzk5OTQ4IDMxLjkyMiw0LjE0MiBDMzEuODQ1OTk5Niw0LjI0NjAwMDUyIDMxLjc1MzAwMDUsNC4zMjc5OTk3IDMxLjY0Myw0LjM4OCBDMzEuNTMyOTk5NCw0LjQ0ODAwMDMgMzEuNDEwMDAwNyw0LjQ4ODk5OTg5IDMxLjI3NCw0LjUxMSBDMzEuMTM3OTk5Myw0LjUzMzAwMDExIDMwLjk5ODAwMDcsNC41NDQgMzAuODU0LDQuNTQ0IEwzMC44NTQsNC45NTIgTDMxLjk1OCw0Ljk1MiBMMzEuOTU4LDggTDMyLjQ2OCw4IFonIGlkPScxJz48L3BhdGg+XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9J00zOC4wOTYsMTIuNzUyIEwzOC42MDYsMTIuNzUyIEMzOC42MDIsMTIuNjIzOTk5NCAzOC42MTQ5OTk5LDEyLjQ5NzAwMDYgMzguNjQ1LDEyLjM3MSBDMzguNjc1MDAwMiwxMi4yNDQ5OTk0IDM4LjcyMzk5OTcsMTIuMTMyMDAwNSAzOC43OTIsMTIuMDMyIEMzOC44NjAwMDAzLDExLjkzMTk5OTUgMzguOTQ2OTk5NSwxMS44NTEwMDAzIDM5LjA1MywxMS43ODkgQzM5LjE1OTAwMDUsMTEuNzI2OTk5NyAzOS4yODU5OTkzLDExLjY5NiAzOS40MzQsMTEuNjk2IEMzOS41NDYwMDA2LDExLjY5NiAzOS42NTE5OTk1LDExLjcxMzk5OTggMzkuNzUyLDExLjc1IEMzOS44NTIwMDA1LDExLjc4NjAwMDIgMzkuOTM4OTk5NiwxMS44Mzc5OTk3IDQwLjAxMywxMS45MDYgQzQwLjA4NzAwMDQsMTEuOTc0MDAwMyA0MC4xNDU5OTk4LDEyLjA1NDk5OTUgNDAuMTksMTIuMTQ5IEM0MC4yMzQwMDAyLDEyLjI0MzAwMDUgNDAuMjU2LDEyLjM0Nzk5OTQgNDAuMjU2LDEyLjQ2NCBDNDAuMjU2LDEyLjYxMjAwMDcgNDAuMjMzMDAwMiwxMi43NDE5OTk0IDQwLjE4NywxMi44NTQgQzQwLjE0MDk5OTgsMTIuOTY2MDAwNiA0MC4wNzMwMDA1LDEzLjA2OTk5OTUgMzkuOTgzLDEzLjE2NiBDMzkuODkyOTk5NiwxMy4yNjIwMDA1IDM5Ljc4MDAwMDcsMTMuMzU2OTk5NSAzOS42NDQsMTMuNDUxIEMzOS41MDc5OTkzLDEzLjU0NTAwMDUgMzkuMzUwMDAwOSwxMy42NDc5OTk0IDM5LjE3LDEzLjc2IEMzOS4wMjE5OTkzLDEzLjg0ODAwMDQgMzguODgwMDAwNywxMy45NDE5OTk1IDM4Ljc0NCwxNC4wNDIgQzM4LjYwNzk5OTMsMTQuMTQyMDAwNSAzOC40ODYwMDA1LDE0LjI1Nzk5OTMgMzguMzc4LDE0LjM5IEMzOC4yNjk5OTk1LDE0LjUyMjAwMDcgMzguMTgxMDAwNCwxNC42NzY5OTkxIDM4LjExMSwxNC44NTUgQzM4LjA0MDk5OTcsMTUuMDMzMDAwOSAzNy45OTYwMDAxLDE1LjI0Nzk5ODcgMzcuOTc2LDE1LjUgTDQwLjc1NCwxNS41IEw0MC43NTQsMTUuMDUgTDM4LjU3LDE1LjA1IEMzOC41OTQwMDAxLDE0LjkxNzk5OTMgMzguNjQ0OTk5NiwxNC44MDEwMDA1IDM4LjcyMywxNC42OTkgQzM4LjgwMTAwMDQsMTQuNTk2OTk5NSAzOC44OTQ5OTk1LDE0LjUwMjAwMDQgMzkuMDA1LDE0LjQxNCBDMzkuMTE1MDAwNiwxNC4zMjU5OTk2IDM5LjIzNTk5OTMsMTQuMjQzMDAwNCAzOS4zNjgsMTQuMTY1IEMzOS41MDAwMDA3LDE0LjA4Njk5OTYgMzkuNjMxOTk5MywxNC4wMDgwMDA0IDM5Ljc2NCwxMy45MjggQzM5Ljg5NjAwMDcsMTMuODQzOTk5NiA0MC4wMjM5OTk0LDEzLjc1NjAwMDUgNDAuMTQ4LDEzLjY2NCBDNDAuMjcyMDAwNiwxMy41NzE5OTk1IDQwLjM4MTk5OTUsMTMuNDY5MDAwNiA0MC40NzgsMTMuMzU1IEM0MC41NzQwMDA1LDEzLjI0MDk5OTQgNDAuNjUwOTk5NywxMy4xMTIwMDA3IDQwLjcwOSwxMi45NjggQzQwLjc2NzAwMDMsMTIuODIzOTk5MyA0MC43OTYsMTIuNjU4MDAwOSA0MC43OTYsMTIuNDcgQzQwLjc5NiwxMi4yNjk5OTkgNDAuNzYxMDAwNCwxMi4wOTQwMDA4IDQwLjY5MSwxMS45NDIgQzQwLjYyMDk5OTcsMTEuNzg5OTk5MiA0MC41MjYwMDA2LDExLjY2MzAwMDUgNDAuNDA2LDExLjU2MSBDNDAuMjg1OTk5NCwxMS40NTg5OTk1IDQwLjE0NTAwMDgsMTEuMzgxMDAwMyAzOS45ODMsMTEuMzI3IEMzOS44MjA5OTkyLDExLjI3Mjk5OTcgMzkuNjQ4MDAwOSwxMS4yNDYgMzkuNDY0LDExLjI0NiBDMzkuMjM5OTk4OSwxMS4yNDYgMzkuMDQwMDAwOSwxMS4yODM5OTk2IDM4Ljg2NCwxMS4zNiBDMzguNjg3OTk5MSwxMS40MzYwMDA0IDM4LjU0MTAwMDYsMTEuNTQwOTk5MyAzOC40MjMsMTEuNjc1IEMzOC4zMDQ5OTk0LDExLjgwOTAwMDcgMzguMjE4MDAwMywxMS45Njc5OTkxIDM4LjE2MiwxMi4xNTIgQzM4LjEwNTk5OTcsMTIuMzM2MDAwOSAzOC4wODM5OTk5LDEyLjUzNTk5ODkgMzguMDk2LDEyLjc1MiBMMzguMDk2LDEyLjc1MiBaJyBpZD0nMic+PC9wYXRoPlxuXHQgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSdNNDIuMTQsMjIuNTcgTDQyLjE0LDIzLjAwMiBDNDIuMjM2MDAwNSwyMi45ODk5OTk5IDQyLjMzNzk5OTUsMjIuOTg0IDQyLjQ0NiwyMi45ODQgQzQyLjU3NDAwMDYsMjIuOTg0IDQyLjY5Mjk5OTUsMjMuMDAwOTk5OCA0Mi44MDMsMjMuMDM1IEM0Mi45MTMwMDA2LDIzLjA2OTAwMDIgNDMuMDA3OTk5NiwyMy4xMjA5OTk3IDQzLjA4OCwyMy4xOTEgQzQzLjE2ODAwMDQsMjMuMjYxMDAwNCA0My4yMzE5OTk4LDIzLjM0Njk5OTUgNDMuMjgsMjMuNDQ5IEM0My4zMjgwMDAyLDIzLjU1MTAwMDUgNDMuMzUyLDIzLjY2Nzk5OTMgNDMuMzUyLDIzLjggQzQzLjM1MiwyMy45MjgwMDA2IDQzLjMyNzAwMDMsMjQuMDQyOTk5NSA0My4yNzcsMjQuMTQ1IEM0My4yMjY5OTk4LDI0LjI0NzAwMDUgNDMuMTYwMDAwNCwyNC4zMzI5OTk3IDQzLjA3NiwyNC40MDMgQzQyLjk5MTk5OTYsMjQuNDczMDAwNCA0Mi44OTQwMDA2LDI0LjUyNjk5OTggNDIuNzgyLDI0LjU2NSBDNDIuNjY5OTk5NCwyNC42MDMwMDAyIDQyLjU1MjAwMDYsMjQuNjIyIDQyLjQyOCwyNC42MjIgQzQyLjEzNTk5ODUsMjQuNjIyIDQxLjkxNDAwMDgsMjQuNTM1MDAwOSA0MS43NjIsMjQuMzYxIEM0MS42MDk5OTkyLDI0LjE4Njk5OTEgNDEuNTMsMjMuOTYyMDAxNCA0MS41MjIsMjMuNjg2IEw0MS4wMTIsMjMuNjg2IEM0MS4wMDgsMjMuOTA2MDAxMSA0MS4wMzg5OTk3LDI0LjEwMTk5OTEgNDEuMTA1LDI0LjI3NCBDNDEuMTcxMDAwMywyNC40NDYwMDA5IDQxLjI2NTk5OTQsMjQuNTkwOTk5NCA0MS4zOSwyNC43MDkgQzQxLjUxNDAwMDYsMjQuODI3MDAwNiA0MS42NjM5OTkxLDI0LjkxNTk5OTcgNDEuODQsMjQuOTc2IEM0Mi4wMTYwMDA5LDI1LjAzNjAwMDMgNDIuMjExOTk4OSwyNS4wNjYgNDIuNDI4LDI1LjA2NiBDNDIuNjI4MDAxLDI1LjA2NiA0Mi44MTY5OTkxLDI1LjAzOTAwMDMgNDIuOTk1LDI0Ljk4NSBDNDMuMTczMDAwOSwyNC45MzA5OTk3IDQzLjMyNzk5OTMsMjQuODUwMDAwNSA0My40NiwyNC43NDIgQzQzLjU5MjAwMDcsMjQuNjMzOTk5NSA0My42OTY5OTk2LDI0LjQ5OTAwMDggNDMuNzc1LDI0LjMzNyBDNDMuODUzMDAwNCwyNC4xNzQ5OTkyIDQzLjg5MiwyMy45ODgwMDExIDQzLjg5MiwyMy43NzYgQzQzLjg5MiwyMy41MTk5OTg3IDQzLjgyOTAwMDYsMjMuMjk4MDAwOSA0My43MDMsMjMuMTEgQzQzLjU3Njk5OTQsMjIuOTIxOTk5MSA0My4zODQwMDEzLDIyLjgwMDAwMDMgNDMuMTI0LDIyLjc0NCBMNDMuMTI0LDIyLjczMiBDNDMuMjkyMDAwOCwyMi42NTU5OTk2IDQzLjQzMTk5OTQsMjIuNTQ0MDAwNyA0My41NDQsMjIuMzk2IEM0My42NTYwMDA2LDIyLjI0Nzk5OTMgNDMuNzEyLDIyLjA3ODAwMSA0My43MTIsMjEuODg2IEM0My43MTIsMjEuNjg5OTk5IDQzLjY3OTAwMDMsMjEuNTIwMDAwNyA0My42MTMsMjEuMzc2IEM0My41NDY5OTk3LDIxLjIzMTk5OTMgNDMuNDU2MDAwNiwyMS4xMTQwMDA1IDQzLjM0LDIxLjAyMiBDNDMuMjIzOTk5NCwyMC45Mjk5OTk1IDQzLjA4NzAwMDgsMjAuODYxMDAwMiA0Mi45MjksMjAuODE1IEM0Mi43NzA5OTkyLDIwLjc2ODk5OTggNDIuNjAwMDAwOSwyMC43NDYgNDIuNDE2LDIwLjc0NiBDNDIuMjAzOTk4OSwyMC43NDYgNDIuMDE3MDAwOCwyMC43Nzk5OTk3IDQxLjg1NSwyMC44NDggQzQxLjY5Mjk5OTIsMjAuOTE2MDAwMyA0MS41NTgwMDA1LDIxLjAwOTk5OTQgNDEuNDUsMjEuMTMgQzQxLjM0MTk5OTUsMjEuMjUwMDAwNiA0MS4yNTkwMDAzLDIxLjM5Mzk5OTIgNDEuMjAxLDIxLjU2MiBDNDEuMTQyOTk5NywyMS43MzAwMDA4IDQxLjExLDIxLjkxNTk5OSA0MS4xMDIsMjIuMTIgTDQxLjYxMiwyMi4xMiBDNDEuNjEyLDIxLjk5NTk5OTQgNDEuNjI3OTk5OCwyMS44NzgwMDA2IDQxLjY2LDIxLjc2NiBDNDEuNjkyMDAwMiwyMS42NTM5OTk0IDQxLjc0MDk5OTcsMjEuNTU2MDAwNCA0MS44MDcsMjEuNDcyIEM0MS44NzMwMDAzLDIxLjM4Nzk5OTYgNDEuOTU2OTk5NSwyMS4zMjEwMDAzIDQyLjA1OSwyMS4yNzEgQzQyLjE2MTAwMDUsMjEuMjIwOTk5OCA0Mi4yNzk5OTkzLDIxLjE5NiA0Mi40MTYsMjEuMTk2IEM0Mi42MzIwMDExLDIxLjE5NiA0Mi44MTE5OTkzLDIxLjI1Mjk5OTQgNDIuOTU2LDIxLjM2NyBDNDMuMTAwMDAwNywyMS40ODEwMDA2IDQzLjE3MiwyMS42NTE5OTg5IDQzLjE3MiwyMS44OCBDNDMuMTcyLDIxLjk5MjAwMDYgNDMuMTUwMDAwMiwyMi4wOTE5OTk2IDQzLjEwNiwyMi4xOCBDNDMuMDYxOTk5OCwyMi4yNjgwMDA0IDQzLjAwMzAwMDQsMjIuMzQwOTk5NyA0Mi45MjksMjIuMzk5IEM0Mi44NTQ5OTk2LDIyLjQ1NzAwMDMgNDIuNzY5MDAwNSwyMi41MDA5OTk5IDQyLjY3MSwyMi41MzEgQzQyLjU3Mjk5OTUsMjIuNTYxMDAwMiA0Mi40NzAwMDA1LDIyLjU3NiA0Mi4zNjIsMjIuNTc2IEw0Mi4yNTQsMjIuNTc2IEw0Mi4xOTQsMjIuNTc2IEM0Mi4xNzc5OTk5LDIyLjU3NiA0Mi4xNjAwMDAxLDIyLjU3NCA0Mi4xNCwyMi41NyBMNDIuMTQsMjIuNTcgWicgaWQ9JzMnPjwvcGF0aD5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0nTTQwLjM2NiwzNC4wNTQgTDM4LjkzOCwzNC4wNTQgTDQwLjM1NCwzMS45NzIgTDQwLjM2NiwzMS45NzIgTDQwLjM2NiwzNC4wNTQgWiBNNDAuODQ2LDM0LjA1NCBMNDAuODQ2LDMxLjI0NiBMNDAuNDM4LDMxLjI0NiBMMzguNSwzNC4wMTIgTDM4LjUsMzQuNTA0IEw0MC4zNjYsMzQuNTA0IEw0MC4zNjYsMzUuNSBMNDAuODQ2LDM1LjUgTDQwLjg0NiwzNC41MDQgTDQxLjQyMiwzNC41MDQgTDQxLjQyMiwzNC4wNTQgTDQwLjg0NiwzNC4wNTQgWicgaWQ9JzQnPjwvcGF0aD5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0nTTMzLjY1MiwzOC43NjggTDMzLjY1MiwzOC4zMTggTDMxLjU1MiwzOC4zMTggTDMxLjE1Niw0MC41MjYgTDMxLjU5NCw0MC41NSBDMzEuNjk0MDAwNSw0MC40Mjk5OTk0IDMxLjgwODk5OTMsNDAuMzMzMDAwNCAzMS45MzksNDAuMjU5IEMzMi4wNjkwMDA2LDQwLjE4NDk5OTYgMzIuMjE3OTk5Miw0MC4xNDggMzIuMzg2LDQwLjE0OCBDMzIuNTMwMDAwNyw0MC4xNDggMzIuNjYwOTk5NCw0MC4xNzE5OTk4IDMyLjc3OSw0MC4yMiBDMzIuODk3MDAwNiw0MC4yNjgwMDAyIDMyLjk5Nzk5OTYsNDAuMzM0OTk5NiAzMy4wODIsNDAuNDIxIEMzMy4xNjYwMDA0LDQwLjUwNzAwMDQgMzMuMjMwOTk5OCw0MC42MDg5OTk0IDMzLjI3Nyw0MC43MjcgQzMzLjMyMzAwMDIsNDAuODQ1MDAwNiAzMy4zNDYsNDAuOTczOTk5MyAzMy4zNDYsNDEuMTE0IEMzMy4zNDYsNDEuMjgyMDAwOCAzMy4zMjIwMDAyLDQxLjQyODk5OTQgMzMuMjc0LDQxLjU1NSBDMzMuMjI1OTk5OCw0MS42ODEwMDA2IDMzLjE2MTAwMDQsNDEuNzg1OTk5NiAzMy4wNzksNDEuODcgQzMyLjk5Njk5OTYsNDEuOTU0MDAwNCAzMi45MDEwMDA1LDQyLjAxNjk5OTggMzIuNzkxLDQyLjA1OSBDMzIuNjgwOTk5NCw0Mi4xMDEwMDAyIDMyLjU2NjAwMDYsNDIuMTIyIDMyLjQ0Niw0Mi4xMjIgQzMyLjMxNzk5OTQsNDIuMTIyIDMyLjIwMTAwMDUsNDIuMTAzMDAwMiAzMi4wOTUsNDIuMDY1IEMzMS45ODg5OTk1LDQyLjAyNjk5OTggMzEuODk3MDAwNCw0MS45NzMwMDA0IDMxLjgxOSw0MS45MDMgQzMxLjc0MDk5OTYsNDEuODMyOTk5NyAzMS42NzkwMDAyLDQxLjc1MTAwMDUgMzEuNjMzLDQxLjY1NyBDMzEuNTg2OTk5OCw0MS41NjI5OTk1IDMxLjU2LDQxLjQ2MjAwMDUgMzEuNTUyLDQxLjM1NCBMMzEuMDQyLDQxLjM1NCBDMzEuMDQ2LDQxLjU0NjAwMSAzMS4wODM5OTk2LDQxLjcxNzk5OTIgMzEuMTU2LDQxLjg3IEMzMS4yMjgwMDA0LDQyLjAyMjAwMDggMzEuMzI1OTk5NCw0Mi4xNDg5OTk1IDMxLjQ1LDQyLjI1MSBDMzEuNTc0MDAwNiw0Mi4zNTMwMDA1IDMxLjcxNjk5OTIsNDIuNDMwOTk5NyAzMS44NzksNDIuNDg1IEMzMi4wNDEwMDA4LDQyLjUzOTAwMDMgMzIuMjEzOTk5MSw0Mi41NjYgMzIuMzk4LDQyLjU2NiBDMzIuNjQ2MDAxMiw0Mi41NjYgMzIuODYyOTk5MSw0Mi41MjcwMDA0IDMzLjA0OSw0Mi40NDkgQzMzLjIzNTAwMDksNDIuMzcwOTk5NiAzMy4zODk5OTk0LDQyLjI2NjAwMDcgMzMuNTE0LDQyLjEzNCBDMzMuNjM4MDAwNiw0Mi4wMDE5OTkzIDMzLjczMDk5OTcsNDEuODUxMDAwOSAzMy43OTMsNDEuNjgxIEMzMy44NTUwMDAzLDQxLjUxMDk5OTIgMzMuODg2LDQxLjMzNjAwMDkgMzMuODg2LDQxLjE1NiBDMzMuODg2LDQwLjkxMTk5ODggMzMuODUwMDAwNCw0MC42OTkwMDA5IDMzLjc3OCw0MC41MTcgQzMzLjcwNTk5OTYsNDAuMzM0OTk5MSAzMy42MDgwMDA2LDQwLjE4MzAwMDYgMzMuNDg0LDQwLjA2MSBDMzMuMzU5OTk5NCwzOS45Mzg5OTk0IDMzLjIxNDAwMDgsMzkuODQ4MDAwMyAzMy4wNDYsMzkuNzg4IEMzMi44Nzc5OTkyLDM5LjcyNzk5OTcgMzIuNzAwMDAwOSwzOS42OTggMzIuNTEyLDM5LjY5OCBDMzIuMzY3OTk5MywzOS42OTggMzIuMjIzMDAwNywzOS43MjI5OTk4IDMyLjA3NywzOS43NzMgQzMxLjkzMDk5OTMsMzkuODIzMDAwMyAzMS44MTIwMDA1LDM5Ljg5OTk5OTUgMzEuNzIsNDAuMDA0IEwzMS43MDgsMzkuOTkyIEwzMS45MzYsMzguNzY4IEwzMy42NTIsMzguNzY4IFonIGlkPSc1Jz48L3BhdGg+XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9J00yMi44MTYsNDIuMzMyIEwyMy4zMjYsNDIuMzMyIEMyMy4yOTM5OTk4LDQxLjk3OTk5ODIgMjMuMTc0MDAxLDQxLjcxMTAwMDkgMjIuOTY2LDQxLjUyNSBDMjIuNzU3OTk5LDQxLjMzODk5OTEgMjIuNDc4MDAxOCw0MS4yNDYgMjIuMTI2LDQxLjI0NiBDMjEuODIxOTk4NSw0MS4yNDYgMjEuNTcwMDAxLDQxLjMwOTk5OTQgMjEuMzcsNDEuNDM4IEMyMS4xNjk5OTksNDEuNTY2MDAwNiAyMS4wMTAwMDA2LDQxLjczNTk5ODkgMjAuODksNDEuOTQ4IEMyMC43Njk5OTk0LDQyLjE2MDAwMTEgMjAuNjg1MDAwMiw0Mi40MDI5OTg2IDIwLjYzNSw0Mi42NzcgQzIwLjU4NDk5OTcsNDIuOTUxMDAxNCAyMC41Niw0My4yMzM5OTg1IDIwLjU2LDQzLjUyNiBDMjAuNTYsNDMuNzUwMDAxMSAyMC41NzY5OTk4LDQzLjk4MTk5ODggMjAuNjExLDQ0LjIyMiBDMjAuNjQ1MDAwMiw0NC40NjIwMDEyIDIwLjcxMzk5OTUsNDQuNjgxOTk5IDIwLjgxOCw0NC44ODIgQzIwLjkyMjAwMDUsNDUuMDgyMDAxIDIxLjA2OTk5OSw0NS4yNDU5OTk0IDIxLjI2Miw0NS4zNzQgQzIxLjQ1NDAwMSw0NS41MDIwMDA2IDIxLjcwNzk5ODQsNDUuNTY2IDIyLjAyNCw0NS41NjYgQzIyLjI5MjAwMTMsNDUuNTY2IDIyLjUxNjk5OTEsNDUuNTIxMDAwNSAyMi42OTksNDUuNDMxIEMyMi44ODEwMDA5LDQ1LjM0MDk5OTYgMjMuMDI2OTk5NCw0NS4yMjcwMDA3IDIzLjEzNyw0NS4wODkgQzIzLjI0NzAwMDUsNDQuOTUwOTk5MyAyMy4zMjU5OTk4LDQ0Ljc5ODAwMDggMjMuMzc0LDQ0LjYzIEMyMy40MjIwMDAyLDQ0LjQ2MTk5OTIgMjMuNDQ2LDQ0LjMwMDAwMDggMjMuNDQ2LDQ0LjE0NCBDMjMuNDQ2LDQzLjk0Nzk5OSAyMy40MTYwMDAzLDQzLjc2NjAwMDggMjMuMzU2LDQzLjU5OCBDMjMuMjk1OTk5Nyw0My40Mjk5OTkyIDIzLjIxMTAwMDUsNDMuMjg0MDAwNiAyMy4xMDEsNDMuMTYgQzIyLjk5MDk5OTQsNDMuMDM1OTk5NCAyMi44NTUwMDA4LDQyLjkzOTAwMDQgMjIuNjkzLDQyLjg2OSBDMjIuNTMwOTk5Miw0Mi43OTg5OTk3IDIyLjM0ODAwMSw0Mi43NjQgMjIuMTQ0LDQyLjc2NCBDMjEuOTExOTk4OCw0Mi43NjQgMjEuNzA3MDAwOSw0Mi44MDc5OTk2IDIxLjUyOSw0Mi44OTYgQzIxLjM1MDk5OTEsNDIuOTg0MDAwNCAyMS4yMDIwMDA2LDQzLjEyNTk5OSAyMS4wODIsNDMuMzIyIEwyMS4wNyw0My4zMSBDMjEuMDc0LDQzLjE0NTk5OTIgMjEuMDg5OTk5OSw0Mi45NzAwMDA5IDIxLjExOCw0Mi43ODIgQzIxLjE0NjAwMDEsNDIuNTkzOTk5MSAyMS4xOTY5OTk2LDQyLjQxOTAwMDggMjEuMjcxLDQyLjI1NyBDMjEuMzQ1MDAwNCw0Mi4wOTQ5OTkyIDIxLjQ0Nzk5OTMsNDEuOTYxMDAwNSAyMS41OCw0MS44NTUgQzIxLjcxMjAwMDcsNDEuNzQ4OTk5NSAyMS44ODU5OTg5LDQxLjY5NiAyMi4xMDIsNDEuNjk2IEMyMi4zMDYwMDEsNDEuNjk2IDIyLjQ2OTk5OTQsNDEuNzUzOTk5NCAyMi41OTQsNDEuODcgQzIyLjcxODAwMDYsNDEuOTg2MDAwNiAyMi43OTE5OTk5LDQyLjEzOTk5OSAyMi44MTYsNDIuMzMyIEwyMi44MTYsNDIuMzMyIFogTTIyLjA0OCw0My4yMTQgQzIyLjE5MjAwMDcsNDMuMjE0IDIyLjMxNzk5OTUsNDMuMjM5OTk5NyAyMi40MjYsNDMuMjkyIEMyMi41MzQwMDA1LDQzLjM0NDAwMDMgMjIuNjIzOTk5Niw0My40MTI5OTk2IDIyLjY5Niw0My40OTkgQzIyLjc2ODAwMDQsNDMuNTg1MDAwNCAyMi44MjA5OTk4LDQzLjY4Njk5OTQgMjIuODU1LDQzLjgwNSBDMjIuODg5MDAwMiw0My45MjMwMDA2IDIyLjkwNiw0NC4wNDc5OTkzIDIyLjkwNiw0NC4xOCBDMjIuOTA2LDQ0LjMwNDAwMDYgMjIuODg3MDAwMiw0NC40MjI5OTk0IDIyLjg0OSw0NC41MzcgQzIyLjgxMDk5OTgsNDQuNjUxMDAwNiAyMi43NTYwMDA0LDQ0Ljc1MTk5OTYgMjIuNjg0LDQ0Ljg0IEMyMi42MTE5OTk2LDQ0LjkyODAwMDQgMjIuNTIzMDAwNSw0NC45OTY5OTk4IDIyLjQxNyw0NS4wNDcgQzIyLjMxMDk5OTUsNDUuMDk3MDAwMyAyMi4xODgwMDA3LDQ1LjEyMiAyMi4wNDgsNDUuMTIyIEMyMS45MDc5OTkzLDQ1LjEyMiAyMS43ODMwMDA1LDQ1LjA5NzAwMDMgMjEuNjczLDQ1LjA0NyBDMjEuNTYyOTk5NCw0NC45OTY5OTk4IDIxLjQ3MTAwMDQsNDQuOTMwMDAwNCAyMS4zOTcsNDQuODQ2IEMyMS4zMjI5OTk2LDQ0Ljc2MTk5OTYgMjEuMjY2MDAwMiw0NC42NjIwMDA2IDIxLjIyNiw0NC41NDYgQzIxLjE4NTk5OTgsNDQuNDI5OTk5NCAyMS4xNjYsNDQuMzA2MDAwNyAyMS4xNjYsNDQuMTc0IEMyMS4xNjYsNDQuMDQxOTk5MyAyMS4xODQ5OTk4LDQzLjkxNzAwMDYgMjEuMjIzLDQzLjc5OSBDMjEuMjYxMDAwMiw0My42ODA5OTk0IDIxLjMxNzk5OTYsNDMuNTc5MDAwNCAyMS4zOTQsNDMuNDkzIEMyMS40NzAwMDA0LDQzLjQwNjk5OTYgMjEuNTYxOTk5NSw0My4zMzkwMDAzIDIxLjY3LDQzLjI4OSBDMjEuNzc4MDAwNSw0My4yMzg5OTk4IDIxLjkwMzk5OTMsNDMuMjE0IDIyLjA0OCw0My4yMTQgTDIyLjA0OCw0My4yMTQgWicgaWQ9JzYnPjwvcGF0aD5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0nTTEyLjg4NiwzOC43NTYgTDEyLjg4NiwzOC4zMTggTDEwLjEzMiwzOC4zMTggTDEwLjEzMiwzOC43OTggTDEyLjM2NCwzOC43OTggQzEyLjEzOTk5ODksMzkuMDM0MDAxMiAxMS45MzEwMDEsMzkuMjkxOTk4NiAxMS43MzcsMzkuNTcyIEMxMS41NDI5OTksMzkuODUyMDAxNCAxMS4zNzIwMDA3LDQwLjE0ODk5ODQgMTEuMjI0LDQwLjQ2MyBDMTEuMDc1OTk5Myw0MC43NzcwMDE2IDEwLjk1NTAwMDUsNDEuMTA0OTk4MyAxMC44NjEsNDEuNDQ3IEMxMC43NjY5OTk1LDQxLjc4OTAwMTcgMTAuNzA4MDAwMSw0Mi4xMzk5OTgyIDEwLjY4NCw0Mi41IEwxMS4yNTQsNDIuNSBDMTEuMjc0MDAwMSw0Mi4xNjc5OTgzIDExLjMyOTk5OTUsNDEuODI2MDAxOCAxMS40MjIsNDEuNDc0IEMxMS41MTQwMDA1LDQxLjEyMTk5ODIgMTEuNjMyOTk5Myw0MC43ODAwMDE3IDExLjc3OSw0MC40NDggQzExLjkyNTAwMDcsNDAuMTE1OTk4MyAxMi4wOTE5OTkxLDM5LjgwNDAwMTUgMTIuMjgsMzkuNTEyIEMxMi40NjgwMDA5LDM5LjIxOTk5ODUgMTIuNjY5OTk4OSwzOC45NjgwMDExIDEyLjg4NiwzOC43NTYgTDEyLjg4NiwzOC43NTYgWicgaWQ9JzcnPjwvcGF0aD5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0nTTMuMjYyLDMyLjM1IEMzLjI2MiwzMi4yNDE5OTk1IDMuMjgxOTk5OCwzMi4xNDgwMDA0IDMuMzIyLDMyLjA2OCBDMy4zNjIwMDAyLDMxLjk4Nzk5OTYgMy40MTQ5OTk2NywzMS45MjAwMDAzIDMuNDgxLDMxLjg2NCBDMy41NDcwMDAzMywzMS44MDc5OTk3IDMuNjI1OTk5NTQsMzEuNzY2MDAwMSAzLjcxOCwzMS43MzggQzMuODEwMDAwNDYsMzEuNzA5OTk5OSAzLjkwNTk5OTUsMzEuNjk2IDQuMDA2LDMxLjY5NiBDNC4yMTQwMDEwNCwzMS42OTYgNC4zODQ5OTkzMywzMS43NTA5OTk1IDQuNTE5LDMxLjg2MSBDNC42NTMwMDA2NywzMS45NzEwMDA2IDQuNzIsMzIuMTMzOTk4OSA0LjcyLDMyLjM1IEM0LjcyLDMyLjU2NjAwMTEgNC42NTQwMDA2NiwzMi43MzM5OTk0IDQuNTIyLDMyLjg1NCBDNC4zODk5OTkzNCwzMi45NzQwMDA2IDQuMjIyMDAxMDIsMzMuMDM0IDQuMDE4LDMzLjAzNCBDMy45MTM5OTk0OCwzMy4wMzQgMy44MTYwMDA0NiwzMy4wMjAwMDAxIDMuNzI0LDMyLjk5MiBDMy42MzE5OTk1NCwzMi45NjM5OTk5IDMuNTUyMDAwMzQsMzIuOTIyMDAwMyAzLjQ4NCwzMi44NjYgQzMuNDE1OTk5NjYsMzIuODA5OTk5NyAzLjM2MjAwMDIsMzIuNzM5MDAwNCAzLjMyMiwzMi42NTMgQzMuMjgxOTk5OCwzMi41NjY5OTk2IDMuMjYyLDMyLjQ2NjAwMDYgMy4yNjIsMzIuMzUgTDMuMjYyLDMyLjM1IFogTTIuNzIyLDMyLjMzMiBDMi43MjIsMzIuNTI0MDAxIDIuNzc1OTk5NDYsMzIuNzAwOTk5MiAyLjg4NCwzMi44NjMgQzIuOTkyMDAwNTQsMzMuMDI1MDAwOCAzLjEzNTk5OTEsMzMuMTQxOTk5NiAzLjMxNiwzMy4yMTQgQzMuMDc1OTk4OCwzMy4yOTgwMDA0IDIuODkyMDAwNjQsMzMuNDMyOTk5MSAyLjc2NCwzMy42MTkgQzIuNjM1OTk5MzYsMzMuODA1MDAwOSAyLjU3MiwzNC4wMjM5OTg3IDIuNTcyLDM0LjI3NiBDMi41NzIsMzQuNDkyMDAxMSAyLjYwODk5OTYzLDM0LjY4MDk5OTIgMi42ODMsMzQuODQzIEMyLjc1NzAwMDM3LDM1LjAwNTAwMDggMi44NTg5OTkzNSwzNS4xMzk5OTk1IDIuOTg5LDM1LjI0OCBDMy4xMTkwMDA2NSwzNS4zNTYwMDA1IDMuMjcxOTk5MTIsMzUuNDM1OTk5NyAzLjQ0OCwzNS40ODggQzMuNjI0MDAwODgsMzUuNTQwMDAwMyAzLjgxMzk5ODk4LDM1LjU2NiA0LjAxOCwzNS41NjYgQzQuMjE0MDAwOTgsMzUuNTY2IDQuMzk3OTk5MTQsMzUuNTM4MDAwMyA0LjU3LDM1LjQ4MiBDNC43NDIwMDA4NiwzNS40MjU5OTk3IDQuODkwOTk5MzcsMzUuMzQzMDAwNiA1LjAxNywzNS4yMzMgQzUuMTQzMDAwNjMsMzUuMTIyOTk5NSA1LjI0Mjk5OTYzLDM0Ljk4ODAwMDggNS4zMTcsMzQuODI4IEM1LjM5MTAwMDM3LDM0LjY2Nzk5OTIgNS40MjgsMzQuNDg0MDAxIDUuNDI4LDM0LjI3NiBDNS40MjgsMzQuMDExOTk4NyA1LjM2NjAwMDYyLDMzLjc4OTAwMDkgNS4yNDIsMzMuNjA3IEM1LjExNzk5OTM4LDMzLjQyNDk5OTEgNC45MjgwMDEyOCwzMy4yOTQwMDA0IDQuNjcyLDMzLjIxNCBDNC44NTIwMDA5LDMzLjEzMzk5OTYgNC45OTQ5OTk0NywzMy4wMTUwMDA4IDUuMTAxLDMyLjg1NyBDNS4yMDcwMDA1MywzMi42OTg5OTkyIDUuMjYsMzIuNTI0MDAxIDUuMjYsMzIuMzMyIEM1LjI2LDMyLjE5NTk5OTMgNS4yMzYwMDAyNCwzMi4wNjMwMDA3IDUuMTg4LDMxLjkzMyBDNS4xMzk5OTk3NiwzMS44MDI5OTk0IDUuMDY1MDAwNTEsMzEuNjg3MDAwNSA0Ljk2MywzMS41ODUgQzQuODYwOTk5NDksMzEuNDgyOTk5NSA0LjcyODAwMDgyLDMxLjQwMTAwMDMgNC41NjQsMzEuMzM5IEM0LjM5OTk5OTE4LDMxLjI3Njk5OTcgNC4yMDIwMDExNiwzMS4yNDYgMy45NywzMS4yNDYgQzMuODA1OTk5MTgsMzEuMjQ2IDMuNjQ5MDAwNzUsMzEuMjY5OTk5OCAzLjQ5OSwzMS4zMTggQzMuMzQ4OTk5MjUsMzEuMzY2MDAwMiAzLjIxNjAwMDU4LDMxLjQzNTk5OTUgMy4xLDMxLjUyOCBDMi45ODM5OTk0MiwzMS42MjAwMDA1IDIuODkyMDAwMzQsMzEuNzMyOTk5MyAyLjgyNCwzMS44NjcgQzIuNzU1OTk5NjYsMzIuMDAxMDAwNyAyLjcyMiwzMi4xNTU5OTkxIDIuNzIyLDMyLjMzMiBMMi43MjIsMzIuMzMyIFogTTMuMTEyLDM0LjMgQzMuMTEyLDM0LjE3NTk5OTQgMy4xMzQ5OTk3NywzNC4wNjQwMDA1IDMuMTgxLDMzLjk2NCBDMy4yMjcwMDAyMywzMy44NjM5OTk1IDMuMjkwOTk5NTksMzMuNzc4MDAwNCAzLjM3MywzMy43MDYgQzMuNDU1MDAwNDEsMzMuNjMzOTk5NiAzLjU1MDk5OTQ1LDMzLjU3OTAwMDIgMy42NjEsMzMuNTQxIEMzLjc3MTAwMDU1LDMzLjUwMjk5OTggMy44ODc5OTkzOCwzMy40ODQgNC4wMTIsMzMuNDg0IEM0LjEzMjAwMDYsMzMuNDg0IDQuMjQ0OTk5NDcsMzMuNTA0OTk5OCA0LjM1MSwzMy41NDcgQzQuNDU3MDAwNTMsMzMuNTg5MDAwMiA0LjU0OTk5OTYsMzMuNjQ1OTk5NiA0LjYzLDMzLjcxOCBDNC43MTAwMDA0LDMzLjc5MDAwMDQgNC43NzI5OTk3NywzMy44NzQ5OTk1IDQuODE5LDMzLjk3MyBDNC44NjUwMDAyMywzNC4wNzEwMDA1IDQuODg4LDM0LjE3Nzk5OTQgNC44ODgsMzQuMjk0IEM0Ljg4OCwzNC40MTQwMDA2IDQuODY3MDAwMjEsMzQuNTIzOTk5NSA0LjgyNSwzNC42MjQgQzQuNzgyOTk5NzksMzQuNzI0MDAwNSA0LjcyMzAwMDM5LDM0LjgxMDk5OTYgNC42NDUsMzQuODg1IEM0LjU2Njk5OTYxLDM0Ljk1OTAwMDQgNC40NzUwMDA1MywzNS4wMTY5OTk4IDQuMzY5LDM1LjA1OSBDNC4yNjI5OTk0NywzNS4xMDEwMDAyIDQuMTQ2MDAwNjQsMzUuMTIyIDQuMDE4LDM1LjEyMiBDMy43NTM5OTg2OCwzNS4xMjIgMy41MzcwMDA4NSwzNS4wNDkwMDA3IDMuMzY3LDM0LjkwMyBDMy4xOTY5OTkxNSwzNC43NTY5OTkzIDMuMTEyLDM0LjU1NjAwMTMgMy4xMTIsMzQuMyBMMy4xMTIsMzQuMyBaJyBpZD0nOCc+PC9wYXRoPlxuXHQgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSdNMS4xMzYsMjMuOTc0IEwwLjYyNiwyMy45NzQgQzAuNjU4MDAwMTYsMjQuMzQyMDAxOCAwLjc5MTk5ODgyLDI0LjYxNTk5OTEgMS4wMjgsMjQuNzk2IEMxLjI2NDAwMTE4LDI0Ljk3NjAwMDkgMS41NTk5OTgyMiwyNS4wNjYgMS45MTYsMjUuMDY2IEMyLjQzMjAwMjU4LDI1LjA2NiAyLjgwNjk5ODgzLDI0Ljg2OTAwMiAzLjA0MSwyNC40NzUgQzMuMjc1MDAxMTcsMjQuMDgwOTk4IDMuMzkyLDIzLjUxNjAwMzcgMy4zOTIsMjIuNzggQzMuMzkyLDIyLjM3NTk5OCAzLjM1MzAwMDM5LDIyLjA0MzAwMTMgMy4yNzUsMjEuNzgxIEMzLjE5Njk5OTYxLDIxLjUxODk5ODcgMy4wOTIwMDA2NiwyMS4zMTIwMDA4IDIuOTYsMjEuMTYgQzIuODI3OTk5MzQsMjEuMDA3OTk5MiAyLjY3NDAwMDg4LDIwLjkwMTAwMDMgMi40OTgsMjAuODM5IEMyLjMyMTk5OTEyLDIwLjc3Njk5OTcgMi4xMzQwMDEsMjAuNzQ2IDEuOTM0LDIwLjc0NiBDMS43Mjk5OTg5OCwyMC43NDYgMS41NDIwMDA4NiwyMC43Nzk5OTk3IDEuMzcsMjAuODQ4IEMxLjE5Nzk5OTE0LDIwLjkxNjAwMDMgMS4wNTAwMDA2MiwyMS4wMTA5OTk0IDAuOTI2LDIxLjEzMyBDMC44MDE5OTkzOCwyMS4yNTUwMDA2IDAuNzA2MDAwMzQsMjEuNDAwOTk5MiAwLjYzOCwyMS41NzEgQzAuNTY5OTk5NjYsMjEuNzQxMDAwOSAwLjUzNiwyMS45Mjc5OTkgMC41MzYsMjIuMTMyIEMwLjUzNiwyMi4zNDAwMDEgMC41NjQ5OTk3MSwyMi41MzE5OTkxIDAuNjIzLDIyLjcwOCBDMC42ODEwMDAyOSwyMi44ODQwMDA5IDAuNzY2OTk5NDMsMjMuMDMzOTk5NCAwLjg4MSwyMy4xNTggQzAuOTk1MDAwNTcsMjMuMjgyMDAwNiAxLjEzNTk5OTE2LDIzLjM3ODk5OTcgMS4zMDQsMjMuNDQ5IEMxLjQ3MjAwMDg0LDIzLjUxOTAwMDQgMS42NjM5OTg5MiwyMy41NTQgMS44OCwyMy41NTQgQzIuMDg4MDAxMDQsMjMuNTU0IDIuMjc5OTk5MTIsMjMuNTAxMDAwNSAyLjQ1NiwyMy4zOTUgQzIuNjMyMDAwODgsMjMuMjg4OTk5NSAyLjc2Nzk5OTUyLDIzLjE0NjAwMDkgMi44NjQsMjIuOTY2IEwyLjg3NiwyMi45NzggQzIuODU5OTk5OTIsMjMuNTM0MDAyOCAyLjc3NDAwMDc4LDIzLjk0Njk5ODcgMi42MTgsMjQuMjE3IEMyLjQ2MTk5OTIyLDI0LjQ4NzAwMTQgMi4yMjgwMDE1NiwyNC42MjIgMS45MTYsMjQuNjIyIEMxLjcxMTk5ODk4LDI0LjYyMiAxLjUzNjAwMDc0LDI0LjU2NjAwMDYgMS4zODgsMjQuNDU0IEMxLjIzOTk5OTI2LDI0LjM0MTk5OTQgMS4xNTYwMDAxLDI0LjE4MjAwMSAxLjEzNiwyMy45NzQgTDEuMTM2LDIzLjk3NCBaIE0yLjc4NiwyMi4xNjggQzIuNzg2LDIyLjI5MjAwMDYgMi43NjYwMDAyLDIyLjQxMDk5OTQgMi43MjYsMjIuNTI1IEMyLjY4NTk5OTgsMjIuNjM5MDAwNiAyLjYyODAwMDM4LDIyLjczODk5OTYgMi41NTIsMjIuODI1IEMyLjQ3NTk5OTYyLDIyLjkxMTAwMDQgMi4zODQwMDA1NCwyMi45Nzg5OTk4IDIuMjc2LDIzLjAyOSBDMi4xNjc5OTk0NiwyMy4wNzkwMDAzIDIuMDQ4MDAwNjYsMjMuMTA0IDEuOTE2LDIzLjEwNCBDMS43OTE5OTkzOCwyMy4xMDQgMS42NzkwMDA1MSwyMy4wNzkwMDAzIDEuNTc3LDIzLjAyOSBDMS40NzQ5OTk0OSwyMi45Nzg5OTk4IDEuMzg3MDAwMzcsMjIuOTEyMDAwNCAxLjMxMywyMi44MjggQzEuMjM4OTk5NjMsMjIuNzQzOTk5NiAxLjE4MTAwMDIxLDIyLjY0ODAwMDUgMS4xMzksMjIuNTQgQzEuMDk2OTk5NzksMjIuNDMxOTk5NSAxLjA3NiwyMi4zMjAwMDA2IDEuMDc2LDIyLjIwNCBDMS4wNzYsMjIuMDcxOTk5MyAxLjA5MDk5OTg1LDIxLjk0NjAwMDYgMS4xMjEsMjEuODI2IEMxLjE1MTAwMDE1LDIxLjcwNTk5OTQgMS4xOTg5OTk2NywyMS41OTkwMDA1IDEuMjY1LDIxLjUwNSBDMS4zMzEwMDAzMywyMS40MTA5OTk1IDEuNDE2OTk5NDcsMjEuMzM2MDAwMyAxLjUyMywyMS4yOCBDMS42MjkwMDA1MywyMS4yMjM5OTk3IDEuNzU3OTk5MjQsMjEuMTk2IDEuOTEsMjEuMTk2IEMyLjA1NDAwMDcyLDIxLjE5NiAyLjE3OTk5OTQ2LDIxLjIyMTk5OTcgMi4yODgsMjEuMjc0IEMyLjM5NjAwMDU0LDIxLjMyNjAwMDMgMi40ODY5OTk2MywyMS4zOTY5OTk2IDIuNTYxLDIxLjQ4NyBDMi42MzUwMDAzNywyMS41NzcwMDA1IDIuNjkwOTk5ODEsMjEuNjc5OTk5NCAyLjcyOSwyMS43OTYgQzIuNzY3MDAwMTksMjEuOTEyMDAwNiAyLjc4NiwyMi4wMzU5OTkzIDIuNzg2LDIyLjE2OCBMMi43ODYsMjIuMTY4IFonIGlkPSc5Jz48L3BhdGg+XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9J00yLjgsMTUuNSBMMi44LDExLjI0NiBMMi40MSwxMS4yNDYgQzIuMzgxOTk5ODYsMTEuNDA2MDAwOCAyLjMzMDAwMDM4LDExLjUzNzk5OTUgMi4yNTQsMTEuNjQyIEMyLjE3Nzk5OTYyLDExLjc0NjAwMDUgMi4wODUwMDA1NSwxMS44Mjc5OTk3IDEuOTc1LDExLjg4OCBDMS44NjQ5OTk0NSwxMS45NDgwMDAzIDEuNzQyMDAwNjgsMTEuOTg4OTk5OSAxLjYwNiwxMi4wMTEgQzEuNDY5OTk5MzIsMTIuMDMzMDAwMSAxLjMzMDAwMDcyLDEyLjA0NCAxLjE4NiwxMi4wNDQgTDEuMTg2LDEyLjQ1MiBMMi4yOSwxMi40NTIgTDIuMjksMTUuNSBMMi44LDE1LjUgWiBNNC43OTIsMTMuNDA2IEM0Ljc5MiwxMy4zMDE5OTk1IDQuNzkyOTk5OTksMTMuMTg3MDAwNiA0Ljc5NSwxMy4wNjEgQzQuNzk3MDAwMDEsMTIuOTM0OTk5NCA0LjgwNjk5OTkxLDEyLjgwOTAwMDYgNC44MjUsMTIuNjgzIEM0Ljg0MzAwMDA5LDEyLjU1Njk5OTQgNC44Njg5OTk4MywxMi40MzQwMDA2IDQuOTAzLDEyLjMxNCBDNC45MzcwMDAxNywxMi4xOTM5OTk0IDQuOTg2OTk5NjcsMTIuMDg5MDAwNSA1LjA1MywxMS45OTkgQzUuMTE5MDAwMzMsMTEuOTA4OTk5NiA1LjIwMTk5OTUsMTEuODM2MDAwMyA1LjMwMiwxMS43OCBDNS40MDIwMDA1LDExLjcyMzk5OTcgNS41MjM5OTkyOCwxMS42OTYgNS42NjgsMTEuNjk2IEM1LjgxMjAwMDcyLDExLjY5NiA1LjkzMzk5OTUsMTEuNzIzOTk5NyA2LjAzNCwxMS43OCBDNi4xMzQwMDA1LDExLjgzNjAwMDMgNi4yMTY5OTk2NywxMS45MDg5OTk2IDYuMjgzLDExLjk5OSBDNi4zNDkwMDAzMywxMi4wODkwMDA1IDYuMzk4OTk5ODMsMTIuMTkzOTk5NCA2LjQzMywxMi4zMTQgQzYuNDY3MDAwMTcsMTIuNDM0MDAwNiA2LjQ5Mjk5OTkxLDEyLjU1Njk5OTQgNi41MTEsMTIuNjgzIEM2LjUyOTAwMDA5LDEyLjgwOTAwMDYgNi41Mzg5OTk5OSwxMi45MzQ5OTk0IDYuNTQxLDEzLjA2MSBDNi41NDMwMDAwMSwxMy4xODcwMDA2IDYuNTQ0LDEzLjMwMTk5OTUgNi41NDQsMTMuNDA2IEM2LjU0NCwxMy41NjYwMDA4IDYuNTM5MDAwMDUsMTMuNzQ0OTk5IDYuNTI5LDEzLjk0MyBDNi41MTg5OTk5NSwxNC4xNDEwMDEgNi40ODcwMDAyNywxNC4zMjY5OTkxIDYuNDMzLDE0LjUwMSBDNi4zNzg5OTk3MywxNC42NzUwMDA5IDYuMjkyMDAwNiwxNC44MjE5OTk0IDYuMTcyLDE0Ljk0MiBDNi4wNTE5OTk0LDE1LjA2MjAwMDYgNS44ODQwMDEwOCwxNS4xMjIgNS42NjgsMTUuMTIyIEM1LjQ1MTk5ODkyLDE1LjEyMiA1LjI4NDAwMDYsMTUuMDYyMDAwNiA1LjE2NCwxNC45NDIgQzUuMDQzOTk5NCwxNC44MjE5OTk0IDQuOTU3MDAwMjcsMTQuNjc1MDAwOSA0LjkwMywxNC41MDEgQzQuODQ4OTk5NzMsMTQuMzI2OTk5MSA0LjgxNzAwMDA1LDE0LjE0MTAwMSA0LjgwNywxMy45NDMgQzQuNzk2OTk5OTUsMTMuNzQ0OTk5IDQuNzkyLDEzLjU2NjAwMDggNC43OTIsMTMuNDA2IEw0Ljc5MiwxMy40MDYgWiBNNC4yNTIsMTMuNDEyIEM0LjI1MiwxMy41NjgwMDA4IDQuMjU1OTk5OTYsMTMuNzI5OTk5MiA0LjI2NCwxMy44OTggQzQuMjcyMDAwMDQsMTQuMDY2MDAwOCA0LjI5MTk5OTg0LDE0LjIyOTk5OTIgNC4zMjQsMTQuMzkgQzQuMzU2MDAwMTYsMTQuNTUwMDAwOCA0LjQwMTk5OTcsMTQuNzAwOTk5MyA0LjQ2MiwxNC44NDMgQzQuNTIyMDAwMywxNC45ODUwMDA3IDQuNjAzOTk5NDgsMTUuMTA5OTk5NSA0LjcwOCwxNS4yMTggQzQuODEyMDAwNTIsMTUuMzI2MDAwNSA0Ljk0Mjk5OTIxLDE1LjQxMDk5OTcgNS4xMDEsMTUuNDczIEM1LjI1OTAwMDc5LDE1LjUzNTAwMDMgNS40NDc5OTg5LDE1LjU2NiA1LjY2OCwxNS41NjYgQzUuODkyMDAxMTIsMTUuNTY2IDYuMDgxOTk5MjIsMTUuNTM1MDAwMyA2LjIzOCwxNS40NzMgQzYuMzk0MDAwNzgsMTUuNDEwOTk5NyA2LjUyMzk5OTQ4LDE1LjMyNjAwMDUgNi42MjgsMTUuMjE4IEM2LjczMjAwMDUyLDE1LjEwOTk5OTUgNi44MTM5OTk3LDE0Ljk4NTAwMDcgNi44NzQsMTQuODQzIEM2LjkzNDAwMDMsMTQuNzAwOTk5MyA2Ljk3OTk5OTg0LDE0LjU1MDAwMDggNy4wMTIsMTQuMzkgQzcuMDQ0MDAwMTYsMTQuMjI5OTk5MiA3LjA2Mzk5OTk2LDE0LjA2NjAwMDggNy4wNzIsMTMuODk4IEM3LjA4MDAwMDA0LDEzLjcyOTk5OTIgNy4wODQsMTMuNTY4MDAwOCA3LjA4NCwxMy40MTIgQzcuMDg0LDEzLjI1NTk5OTIgNy4wODAwMDAwNCwxMy4wOTQwMDA4IDcuMDcyLDEyLjkyNiBDNy4wNjM5OTk5NiwxMi43NTc5OTkyIDcuMDQ0MDAwMTYsMTIuNTk0MDAwOCA3LjAxMiwxMi40MzQgQzYuOTc5OTk5ODQsMTIuMjczOTk5MiA2LjkzNDAwMDMsMTIuMTIyMDAwNyA2Ljg3NCwxMS45NzggQzYuODEzOTk5NywxMS44MzM5OTkzIDYuNzMyMDAwNTIsMTEuNzA4MDAwNSA2LjYyOCwxMS42IEM2LjUyMzk5OTQ4LDExLjQ5MTk5OTUgNi4zOTMwMDA3OSwxMS40MDYwMDAzIDYuMjM1LDExLjM0MiBDNi4wNzY5OTkyMSwxMS4yNzc5OTk3IDUuODg4MDAxMSwxMS4yNDYgNS42NjgsMTEuMjQ2IEM1LjQ0Nzk5ODksMTEuMjQ2IDUuMjU5MDAwNzksMTEuMjc3OTk5NyA1LjEwMSwxMS4zNDIgQzQuOTQyOTk5MjEsMTEuNDA2MDAwMyA0LjgxMjAwMDUyLDExLjQ5MTk5OTUgNC43MDgsMTEuNiBDNC42MDM5OTk0OCwxMS43MDgwMDA1IDQuNTIyMDAwMywxMS44MzM5OTkzIDQuNDYyLDExLjk3OCBDNC40MDE5OTk3LDEyLjEyMjAwMDcgNC4zNTYwMDAxNiwxMi4yNzM5OTkyIDQuMzI0LDEyLjQzNCBDNC4yOTE5OTk4NCwxMi41OTQwMDA4IDQuMjcyMDAwMDQsMTIuNzU3OTk5MiA0LjI2NCwxMi45MjYgQzQuMjU1OTk5OTYsMTMuMDk0MDAwOCA0LjI1MiwxMy4yNTU5OTkyIDQuMjUyLDEzLjQxMiBMNC4yNTIsMTMuNDEyIFonIGlkPScxMCc+PC9wYXRoPlxuXHQgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSdNMTAuOCw4IEwxMC44LDMuNzQ2IEwxMC40MSwzLjc0NiBDMTAuMzgxOTk5OSwzLjkwNjAwMDggMTAuMzMwMDAwNCw0LjAzNzk5OTQ4IDEwLjI1NCw0LjE0MiBDMTAuMTc3OTk5Niw0LjI0NjAwMDUyIDEwLjA4NTAwMDUsNC4zMjc5OTk3IDkuOTc1LDQuMzg4IEM5Ljg2NDk5OTQ1LDQuNDQ4MDAwMyA5Ljc0MjAwMDY4LDQuNDg4OTk5ODkgOS42MDYsNC41MTEgQzkuNDY5OTk5MzIsNC41MzMwMDAxMSA5LjMzMDAwMDcyLDQuNTQ0IDkuMTg2LDQuNTQ0IEw5LjE4Niw0Ljk1MiBMMTAuMjksNC45NTIgTDEwLjI5LDggTDEwLjgsOCBaIE0xNC4xMzYsOCBMMTQuMTM2LDMuNzQ2IEwxMy43NDYsMy43NDYgQzEzLjcxNzk5OTksMy45MDYwMDA4IDEzLjY2NjAwMDQsNC4wMzc5OTk0OCAxMy41OSw0LjE0MiBDMTMuNTEzOTk5Niw0LjI0NjAwMDUyIDEzLjQyMTAwMDUsNC4zMjc5OTk3IDEzLjMxMSw0LjM4OCBDMTMuMjAwOTk5NCw0LjQ0ODAwMDMgMTMuMDc4MDAwNyw0LjQ4ODk5OTg5IDEyLjk0Miw0LjUxMSBDMTIuODA1OTk5Myw0LjUzMzAwMDExIDEyLjY2NjAwMDcsNC41NDQgMTIuNTIyLDQuNTQ0IEwxMi41MjIsNC45NTIgTDEzLjYyNiw0Ljk1MiBMMTMuNjI2LDggTDE0LjEzNiw4IFonIGlkPScxMSc+PC9wYXRoPlxuXHQgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSdNMjAuOCw1IEwyMC44LDAuNzQ2IEwyMC40MSwwLjc0NiBDMjAuMzgxOTk5OSwwLjkwNjAwMDggMjAuMzMwMDAwNCwxLjAzNzk5OTQ4IDIwLjI1NCwxLjE0MiBDMjAuMTc3OTk5NiwxLjI0NjAwMDUyIDIwLjA4NTAwMDUsMS4zMjc5OTk3IDE5Ljk3NSwxLjM4OCBDMTkuODY0OTk5NCwxLjQ0ODAwMDMgMTkuNzQyMDAwNywxLjQ4ODk5OTg5IDE5LjYwNiwxLjUxMSBDMTkuNDY5OTk5MywxLjUzMzAwMDExIDE5LjMzMDAwMDcsMS41NDQgMTkuMTg2LDEuNTQ0IEwxOS4xODYsMS45NTIgTDIwLjI5LDEuOTUyIEwyMC4yOSw1IEwyMC44LDUgWiBNMjIuMjY0LDIuMjUyIEwyMi43NzQsMi4yNTIgQzIyLjc3LDIuMTIzOTk5MzYgMjIuNzgyOTk5OCwxLjk5NzAwMDYzIDIyLjgxMywxLjg3MSBDMjIuODQzMDAwMSwxLjc0NDk5OTM3IDIyLjg5MTk5OTcsMS42MzIwMDA1IDIyLjk2LDEuNTMyIEMyMy4wMjgwMDAzLDEuNDMxOTk5NSAyMy4xMTQ5OTk1LDEuMzUxMDAwMzEgMjMuMjIxLDEuMjg5IEMyMy4zMjcwMDA1LDEuMjI2OTk5NjkgMjMuNDUzOTk5MywxLjE5NiAyMy42MDIsMS4xOTYgQzIzLjcxNDAwMDYsMS4xOTYgMjMuODE5OTk5NSwxLjIxMzk5OTgyIDIzLjkyLDEuMjUgQzI0LjAyMDAwMDUsMS4yODYwMDAxOCAyNC4xMDY5OTk2LDEuMzM3OTk5NjYgMjQuMTgxLDEuNDA2IEMyNC4yNTUwMDA0LDEuNDc0MDAwMzQgMjQuMzEzOTk5OCwxLjU1NDk5OTUzIDI0LjM1OCwxLjY0OSBDMjQuNDAyMDAwMiwxLjc0MzAwMDQ3IDI0LjQyNCwxLjg0Nzk5OTQyIDI0LjQyNCwxLjk2NCBDMjQuNDI0LDIuMTEyMDAwNzQgMjQuNDAxMDAwMiwyLjI0MTk5OTQ0IDI0LjM1NSwyLjM1NCBDMjQuMzA4OTk5OCwyLjQ2NjAwMDU2IDI0LjI0MTAwMDQsMi41Njk5OTk1MiAyNC4xNTEsMi42NjYgQzI0LjA2MDk5OTUsMi43NjIwMDA0OCAyMy45NDgwMDA3LDIuODU2OTk5NTMgMjMuODEyLDIuOTUxIEMyMy42NzU5OTkzLDMuMDQ1MDAwNDcgMjMuNTE4MDAwOSwzLjE0Nzk5OTQ0IDIzLjMzOCwzLjI2IEMyMy4xODk5OTkzLDMuMzQ4MDAwNDQgMjMuMDQ4MDAwNywzLjQ0MTk5OTUgMjIuOTEyLDMuNTQyIEMyMi43NzU5OTkzLDMuNjQyMDAwNSAyMi42NTQwMDA1LDMuNzU3OTk5MzQgMjIuNTQ2LDMuODkgQzIyLjQzNzk5OTUsNC4wMjIwMDA2NiAyMi4zNDkwMDAzLDQuMTc2OTk5MTEgMjIuMjc5LDQuMzU1IEMyMi4yMDg5OTk2LDQuNTMzMDAwODkgMjIuMTY0MDAwMSw0Ljc0Nzk5ODc0IDIyLjE0NCw1IEwyNC45MjIsNSBMMjQuOTIyLDQuNTUgTDIyLjczOCw0LjU1IEMyMi43NjIwMDAxLDQuNDE3OTk5MzQgMjIuODEyOTk5Niw0LjMwMTAwMDUxIDIyLjg5MSw0LjE5OSBDMjIuOTY5MDAwNCw0LjA5Njk5OTQ5IDIzLjA2Mjk5OTQsNC4wMDIwMDA0NCAyMy4xNzMsMy45MTQgQzIzLjI4MzAwMDUsMy44MjU5OTk1NiAyMy40MDM5OTkzLDMuNzQzMDAwMzkgMjMuNTM2LDMuNjY1IEMyMy42NjgwMDA3LDMuNTg2OTk5NjEgMjMuNzk5OTk5MywzLjUwODAwMDQgMjMuOTMyLDMuNDI4IEMyNC4wNjQwMDA3LDMuMzQzOTk5NTggMjQuMTkxOTk5NCwzLjI1NjAwMDQ2IDI0LjMxNiwzLjE2NCBDMjQuNDQwMDAwNiwzLjA3MTk5OTU0IDI0LjU0OTk5OTUsMi45NjkwMDA1NyAyNC42NDYsMi44NTUgQzI0Ljc0MjAwMDUsMi43NDA5OTk0MyAyNC44MTg5OTk3LDIuNjEyMDAwNzIgMjQuODc3LDIuNDY4IEMyNC45MzUwMDAzLDIuMzIzOTk5MjggMjQuOTY0LDIuMTU4MDAwOTQgMjQuOTY0LDEuOTcgQzI0Ljk2NCwxLjc2OTk5OSAyNC45MjkwMDAzLDEuNTk0MDAwNzYgMjQuODU5LDEuNDQyIEMyNC43ODg5OTk2LDEuMjg5OTk5MjQgMjQuNjk0MDAwNiwxLjE2MzAwMDUxIDI0LjU3NCwxLjA2MSBDMjQuNDUzOTk5NCwwLjk1ODk5OTQ5IDI0LjMxMzAwMDgsMC44ODEwMDAyNyAyNC4xNTEsMC44MjcgQzIzLjk4ODk5OTIsMC43NzI5OTk3MyAyMy44MTYwMDA5LDAuNzQ2IDIzLjYzMiwwLjc0NiBDMjMuNDA3OTk4OSwwLjc0NiAyMy4yMDgwMDA5LDAuNzgzOTk5NjIgMjMuMDMyLDAuODYgQzIyLjg1NTk5OTEsMC45MzYwMDAzOCAyMi43MDkwMDA2LDEuMDQwOTk5MzMgMjIuNTkxLDEuMTc1IEMyMi40NzI5OTk0LDEuMzA5MDAwNjcgMjIuMzg2MDAwMywxLjQ2Nzk5OTA4IDIyLjMzLDEuNjUyIEMyMi4yNzM5OTk3LDEuODM2MDAwOTIgMjIuMjUxOTk5OSwyLjAzNTk5ODkyIDIyLjI2NCwyLjI1MiBMMjIuMjY0LDIuMjUyIFonIGlkPScxMic+PC9wYXRoPlxuXHQgICAgICAgICAgICAgICAgICAgIDwvZz5cblx0ICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0nSG91cicgZmlsbD0nIzJBMjkyOScgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMjUuMzE5Mjk3LCAyMy42MTE5MTcpIHJvdGF0ZSgtMzguMDAwMDAwKSB0cmFuc2xhdGUoLTI1LjMxOTI5NywgLTIzLjYxMTkxNykgJyBwb2ludHM9JzI0LjgxOTI5NzIgMTUuNjExOTE2OCAyNS44MTkyOTcyIDE1LjYxMTkxNjggMjUuODE5Mjk3MiAzMS42MTE5MTY4IDI0LjgxOTI5NzIgMzEuNjExOTE2OCc+PC9wb2x5Z29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSdNaW51dGUnIGZpbGw9JyMyQTI5MjknIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDE5LjMyOTk0OSwgMzUuNzMwMDI4KSByb3RhdGUoNjIuMDAwMDAwKSB0cmFuc2xhdGUoLTE5LjMyOTk0OSwgLTM1LjczMDAyOCkgJyBwb2ludHM9JzE5LjA0OTQzMjEgMjQuMjk4Njk5MSAxOS45MTg0MzYzIDI0LjI5ODY5OTEgMTkuNzg3NDQwNCA0Ny4yOTg2OTkxIDE4LjkxODQzNjMgNDcuMjk4Njk5MSc+PC9wb2x5Z29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSdTZWNvbmQnIGZpbGw9JyNERDQ1MjQnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDM5LjY0NDYyMSwgMzIuMTI5NDgwKSByb3RhdGUoLTc2LjAwMDAwMCkgdHJhbnNsYXRlKC0zOS42NDQ2MjEsIC0zMi4xMjk0ODApICcgcG9pbnRzPSczOC45NTIzNTY1IDE4LjI0ODIzMTUgMzkuOTIyMTEzOCAxOC4yNDgyMzE1IDM5Ljk1MjM1NjUgNDYuMjQ4MjMxNSAzOC45ODI1OTkyIDQ2LjI0ODIzMTUnPjwvcG9seWdvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGlkPSdPdmFsLTEzJyBmaWxsPScjMkEyOTI5JyBjeD0nMzAnIGN5PSczMCcgcj0nMS4yNSc+PC9jaXJjbGU+XG5cdCAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBpZD0nT3ZhbC0xNCcgZmlsbD0nI0RENDUyNCcgY3g9JzMwJyBjeT0nMzAnIHI9JzAuNzUnPjwvY2lyY2xlPlxuXHQgICAgICAgICAgICAgICAgPC9nPlxuXHQgICAgICAgICAgICA8L2c+XG5cdCAgICAgICAgPC9nPlxuXHQgICAgPC9nPlxuXHQ8L3N2Zz5cIlxuXHRtYXBzX2FwcDpcIjw/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyc/PlxuXHQ8c3ZnIHdpZHRoPSc2MHB4JyBoZWlnaHQ9JzYwcHgnIHZpZXdCb3g9JzAgMCA2MCA2MCcgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJz5cblx0ICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMzkuMSAoMzE3MjApIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHQgICAgPHRpdGxlPk1hcHM8L3RpdGxlPlxuXHQgICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdCAgICA8ZGVmcz5cblx0ICAgICAgICA8cGF0aCBkPSdNMzkuMDgxNSwwIEM0NS4xMDUsMCA0OC4xMTYsMCA1MS4zNTg1LDEuMDI1IEM1NC44OTg1LDIuMzEzNSA1Ny42ODY1LDUuMTAxNSA1OC45NzUsOC42NDE1IEM2MCwxMS44ODM1IDYwLDE0Ljg5NTUgNjAsMjAuOTE4NSBMNjAsMzkuMDgxNSBDNjAsNDUuMTA1IDYwLDQ4LjExNiA1OC45NzUsNTEuMzU4NSBDNTcuNjg2NSw1NC44OTg1IDU0Ljg5ODUsNTcuNjg2NSA1MS4zNTg1LDU4Ljk3NDUgQzQ4LjExNiw2MCA0NS4xMDUsNjAgMzkuMDgxNSw2MCBMMjAuOTE4NSw2MCBDMTQuODk1LDYwIDExLjg4MzUsNjAgOC42NDE1LDU4Ljk3NDUgQzUuMTAxNSw1Ny42ODY1IDIuMzEzNSw1NC44OTg1IDEuMDI1LDUxLjM1ODUgQzAsNDguMTE2IDAsNDUuMTA1IDAsMzkuMDgxNSBMMCwyMC45MTg1IEMwLDE0Ljg5NTUgMCwxMS44ODM1IDEuMDI1LDguNjQxNSBDMi4zMTM1LDUuMTAxNSA1LjEwMTUsMi4zMTM1IDguNjQxNSwxLjAyNSBDMTEuODgzNSwwIDE0Ljg5NSwwIDIwLjkxODUsMCBMMzkuMDgxNSwwIFonIGlkPSdwYXRoLTEnPjwvcGF0aD5cblx0ICAgICAgICA8cGF0aCBkPSdNLTQuNSwzMCBDLTQuNSwzMCAtNC40NzQ2MjYyNSwzMC40OTY3ODA3IC00LjQyNTExNjk1LDMwLjQ5MTI0MDEgQy0zLjQ0MjI5MDU1LDMwLjM4MTI1MDYgOS4xMDQ0NTY5NiwyOC40OTQ2OTIzIDE3LjUwNzU2ODQsMzQuNTA5Mjc3MyBDMjMuMjY4MzEwNSwzOC42MzI1Njg0IDI2LjQyMDc4LDQzLjc0OTAwODcgMzEsNDguMTg0ODE0NSBDMzYuNzkxOTkyMiw1My43OTU0MTAyIDQ0LjMzMTQwNDIsNTUuNjY4MDY2NCA1MC40MDU4MTQ0LDU2LjI1MDI5MyBDNTYuNDgwMjI0Niw1Ni44MzI1MTk1IDY1LDU2IDY1LDU2IEw2NSw2NiBDNjUsNjYgNTMuNTQ4OTYzMyw2NS4zNzY5Mzg1IDQ3LjgyMzQ4NjMsNjQuNjc4NDY2OCBDNDIuMDk4MDA5Myw2My45Nzk5OTUxIDMzLjI0NzA3MDMsNjIuMDI2MTIzIDI3LjM5MjMzNCw1Ny45MjcwMDIgQzE3Ljk5MDk2NjgsNTAuMTcyODUxNiAxOS4yNzc4NzQsNDcuODE5Mzc2MyAxMi4yOTE3NDgsNDMuMjI0NjA5NCBDNS4yNDA3MjI2NiwzOC41ODcxNTgyIC00LjUsNDAuNSAtNC41LDQwLjUgTC00LjUsMzAgWicgaWQ9J3BhdGgtMyc+PC9wYXRoPlxuXHQgICAgICAgIDxtYXNrIGlkPSdtYXNrLTQnIG1hc2tDb250ZW50VW5pdHM9J3VzZXJTcGFjZU9uVXNlJyBtYXNrVW5pdHM9J29iamVjdEJvdW5kaW5nQm94JyB4PSctMC41JyB5PSctMC41JyB3aWR0aD0nNzAuNScgaGVpZ2h0PSczNyc+XG5cdCAgICAgICAgICAgIDxyZWN0IHg9Jy01JyB5PScyOS41JyB3aWR0aD0nNzAuNScgaGVpZ2h0PSczNycgZmlsbD0nd2hpdGUnPjwvcmVjdD5cblx0ICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPScjcGF0aC0zJyBmaWxsPSdibGFjayc+PC91c2U+XG5cdCAgICAgICAgPC9tYXNrPlxuXHQgICAgICAgIDxwb2x5Z29uIGlkPSdwYXRoLTUnIHBvaW50cz0nNTAuNSA2MCA0MS41IDYwIDQxLjUgMTguODQyOTc1MiAwIDE4Ljg0Mjk3NTIgMCA5LjkxNzM1NTM3IDQxLjUgOS45MTczNTUzNyA0MS41IDAgNTAuNSAwIDUwLjUgOS45MTczNTUzNyA2MCA5LjkxNzM1NTM3IDYwIDE4Ljg0Mjk3NTIgNTAuNSAxOC44NDI5NzUyIDUwLjUgMzYuNjk0MjE0OSA2MCAzNi42OTQyMTQ5IDYwIDQ1LjYxOTgzNDcgNTAuNSA0NS42MTk4MzQ3Jz48L3BvbHlnb24+XG5cdCAgICAgICAgPG1hc2sgaWQ9J21hc2stNicgbWFza0NvbnRlbnRVbml0cz0ndXNlclNwYWNlT25Vc2UnIG1hc2tVbml0cz0nb2JqZWN0Qm91bmRpbmdCb3gnIHg9Jy0wLjUnIHk9Jy0wLjUnIHdpZHRoPSc2MScgaGVpZ2h0PSc2MSc+XG5cdCAgICAgICAgICAgIDxyZWN0IHg9Jy0wLjUnIHk9Jy0wLjUnIHdpZHRoPSc2MScgaGVpZ2h0PSc2MScgZmlsbD0nd2hpdGUnPjwvcmVjdD5cblx0ICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPScjcGF0aC01JyBmaWxsPSdibGFjayc+PC91c2U+XG5cdCAgICAgICAgPC9tYXNrPlxuXHQgICAgICAgIDxwYXRoIGQ9J00wLjUsNy41IEMwLjgxNDk2MTU0OCwxMy44NDU5MDUxIDUuMDM2Nzk2NTYsMTkuNSAxMi43NSwxOS41IEMyMC40NjMyMDM0LDE5LjUgMjQuNjMxNDc1NSwxMy44NDM5MzgxIDI1LDcuNSBDMjUuMTIzNTM1Miw1LjM3MzQxMzA5IDI0LjM2NzQzMTYsMi41NjU1NTE3NiAyMy41MDY4MTMxLDEuMjcxMDE0MiBDMjIuNDU0OTU2NSwyLjAyNTk5Mjg1IDIwLjQzNzM1NjIsMi41IDE4Ljc1LDIuNSBDMTYuMTU5NjYzMSwyLjUgMTMuNDY5Mzg0OCwxLjg4MjkyMTA2IDEyLjc1LDAuMzQ3MTMzNzk5IEMxMi4wMzA2MTUyLDEuODgyOTIxMDYgOS4zNDAzMzY4OSwyLjUgNi43NSwyLjUgQzUuMDYyNjQzODMsMi41IDMuMDQ1MDQzNDYsMi4wMjU5OTI4NSAxLjk5MzE4Njg2LDEuMjcxMDE0MiBDMS4xMzI5MzQ1NywyLjc2NDE2MDE2IDAuMzkyMDg5ODQ0LDUuMzI1ODA1NjYgMC41LDcuNSBaJyBpZD0ncGF0aC03Jz48L3BhdGg+XG5cdCAgICAgICAgPG1hc2sgaWQ9J21hc2stOCcgbWFza0NvbnRlbnRVbml0cz0ndXNlclNwYWNlT25Vc2UnIG1hc2tVbml0cz0nb2JqZWN0Qm91bmRpbmdCb3gnIHg9JzAnIHk9JzAnIHdpZHRoPScyNC41MjM3Nzg3JyBoZWlnaHQ9JzE5LjE1Mjg2NjInIGZpbGw9J3doaXRlJz5cblx0ICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPScjcGF0aC03Jz48L3VzZT5cblx0ICAgICAgICA8L21hc2s+XG5cdCAgICAgICAgPG1hc2sgaWQ9J21hc2stMTAnIG1hc2tDb250ZW50VW5pdHM9J3VzZXJTcGFjZU9uVXNlJyBtYXNrVW5pdHM9J29iamVjdEJvdW5kaW5nQm94JyB4PScwJyB5PScwJyB3aWR0aD0nMjQuNTIzNzc4NycgaGVpZ2h0PScxOS4xNTI4NjYyJyBmaWxsPSd3aGl0ZSc+XG5cdCAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0nI3BhdGgtNyc+PC91c2U+XG5cdCAgICAgICAgPC9tYXNrPlxuXHQgICAgICAgIDxyZWN0IGlkPSdwYXRoLTExJyB4PScwJyB5PScwLjUnIHdpZHRoPScyNScgaGVpZ2h0PSc1Jz48L3JlY3Q+XG5cdCAgICAgICAgPGZpbHRlciB4PSctNTAlJyB5PSctNTAlJyB3aWR0aD0nMjAwJScgaGVpZ2h0PScyMDAlJyBmaWx0ZXJVbml0cz0nb2JqZWN0Qm91bmRpbmdCb3gnIGlkPSdmaWx0ZXItMTInPlxuXHQgICAgICAgICAgICA8ZmVPZmZzZXQgZHg9JzAnIGR5PScxJyBpbj0nU291cmNlQWxwaGEnIHJlc3VsdD0nc2hhZG93T2Zmc2V0T3V0ZXIxJz48L2ZlT2Zmc2V0PlxuXHQgICAgICAgICAgICA8ZmVDb2xvck1hdHJpeCB2YWx1ZXM9JzAgMCAwIDAgMSAgIDAgMCAwIDAgMSAgIDAgMCAwIDAgMSAgMCAwIDAgMSAwJyB0eXBlPSdtYXRyaXgnIGluPSdzaGFkb3dPZmZzZXRPdXRlcjEnPjwvZmVDb2xvck1hdHJpeD5cblx0ICAgICAgICA8L2ZpbHRlcj5cblx0ICAgICAgICA8cGF0aCBkPSdNMC41LDcuNSBDMC44MTQ5NjE1NDgsMTMuODQ1OTA1MSA1LjAzNjc5NjU2LDE5LjUgMTIuNzUsMTkuNSBDMjAuNDYzMjAzNCwxOS41IDI0LjYzMTQ3NTUsMTMuODQzOTM4MSAyNSw3LjUgQzI1LjEyMzUzNTIsNS4zNzM0MTMwOSAyNC4zNjc0MzE2LDIuNTY1NTUxNzYgMjMuNTA2ODEzMSwxLjI3MTAxNDIgQzIyLjQ1NDk1NjUsMi4wMjU5OTI4NSAyMC40MzczNTYyLDIuNSAxOC43NSwyLjUgQzE2LjE1OTY2MzEsMi41IDEzLjQ2OTM4NDgsMS44ODI5MjEwNiAxMi43NSwwLjM0NzEzMzc5OSBDMTIuMDMwNjE1MiwxLjg4MjkyMTA2IDkuMzQwMzM2ODksMi41IDYuNzUsMi41IEM1LjA2MjY0MzgzLDIuNSAzLjA0NTA0MzQ2LDIuMDI1OTkyODUgMS45OTMxODY4NiwxLjI3MTAxNDIgQzEuMTMyOTM0NTcsMi43NjQxNjAxNiAwLjM5MjA4OTg0NCw1LjMyNTgwNTY2IDAuNSw3LjUgWicgaWQ9J3BhdGgtMTMnPjwvcGF0aD5cblx0ICAgICAgICA8bWFzayBpZD0nbWFzay0xNCcgbWFza0NvbnRlbnRVbml0cz0ndXNlclNwYWNlT25Vc2UnIG1hc2tVbml0cz0nb2JqZWN0Qm91bmRpbmdCb3gnIHg9JzAnIHk9JzAnIHdpZHRoPScyNC41MjM3Nzg3JyBoZWlnaHQ9JzE5LjE1Mjg2NjInIGZpbGw9J3doaXRlJz5cblx0ICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPScjcGF0aC0xMyc+PC91c2U+XG5cdCAgICAgICAgPC9tYXNrPlxuXHQgICAgPC9kZWZzPlxuXHQgICAgPGcgaWQ9J1BhZ2UtMScgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCc+XG5cdCAgICAgICAgPGcgaWQ9J0hvbWUtU2NyZWVuLeKAoi1pUGhvbmUtU0UnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC0xNjguMDAwMDAwLCAtMTE1LjAwMDAwMCknPlxuXHQgICAgICAgICAgICA8ZyBpZD0nSG9tZS1TY3JlZW4t4oCiLWlQaG9uZS02cy1Db3B5JyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgwLjAwMDAwMCwgMjcuMDAwMDAwKSc+XG5cdCAgICAgICAgICAgICAgICA8ZyBpZD0nTWFwcycgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMTY4LjAwMDAwMCwgODguMDAwMDAwKSc+XG5cdCAgICAgICAgICAgICAgICAgICAgPG1hc2sgaWQ9J21hc2stMicgZmlsbD0nd2hpdGUnPlxuXHQgICAgICAgICAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9JyNwYXRoLTEnPjwvdXNlPlxuXHQgICAgICAgICAgICAgICAgICAgIDwvbWFzaz5cblx0ICAgICAgICAgICAgICAgICAgICA8dXNlIGlkPSdCRycgZmlsbD0nI0U0RERDOScgeGxpbms6aHJlZj0nI3BhdGgtMSc+PC91c2U+XG5cdCAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9J0Jsb2NrJyBmaWxsPScjNzZDNjNCJyBtYXNrPSd1cmwoI21hc2stMiknIHg9JzAnIHk9JzAnIHdpZHRoPSc0MicgaGVpZ2h0PScxMCc+PC9yZWN0PlxuXHQgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSdCbG9jaycgZmlsbD0nI0ZCQzZEMScgbWFzaz0ndXJsKCNtYXNrLTIpJyB4PSc0NScgeT0nMC41JyB3aWR0aD0nMTUnIGhlaWdodD0nMTAnPjwvcmVjdD5cblx0ICAgICAgICAgICAgICAgICAgICA8ZyBpZD0nSGlnaHdheScgbWFzaz0ndXJsKCNtYXNrLTIpJz5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSBmaWxsPScjRkZERTAyJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIHhsaW5rOmhyZWY9JyNwYXRoLTMnPjwvdXNlPlxuXHQgICAgICAgICAgICAgICAgICAgICAgICA8dXNlIHN0cm9rZT0nI0ZFQjMxMicgbWFzaz0ndXJsKCNtYXNrLTQpJyBzdHJva2Utd2lkdGg9JzEnIHhsaW5rOmhyZWY9JyNwYXRoLTMnPjwvdXNlPlxuXHQgICAgICAgICAgICAgICAgICAgIDwvZz5cblx0ICAgICAgICAgICAgICAgICAgICA8ZyBpZD0nTWFwJyBtYXNrPSd1cmwoI21hc2stMiknPlxuXHQgICAgICAgICAgICAgICAgICAgICAgICA8dXNlIGZpbGw9JyNGRkZGRkYnIGZpbGwtcnVsZT0nZXZlbm9kZCcgeGxpbms6aHJlZj0nI3BhdGgtNSc+PC91c2U+XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIDx1c2Ugc3Ryb2tlLW9wYWNpdHk9JzAuMScgc3Ryb2tlPScjMDAwMDAwJyBtYXNrPSd1cmwoI21hc2stNiknIHN0cm9rZS13aWR0aD0nMScgeGxpbms6aHJlZj0nI3BhdGgtNSc+PC91c2U+XG5cdCAgICAgICAgICAgICAgICAgICAgPC9nPlxuXHQgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9J000My42NTY1OTE0LDM1LjUgTDQzLjQ0ODk3OTYsMzUuNSBMNDMuNDQ4OTc5NiwxNyBMLTEsMTcgTC0xLDEyIEw0OC41LDEyIEw0OC41LDE0LjUgTDQ4LjUsMTQuNSBMNDguNSwzNS41IEw0OC4yOTIzODgyLDM1LjUgQzQ3LjU4Njg5OSwzNS4xNzg5OTYgNDYuODAxODExLDM1IDQ1Ljk3NDQ4OTgsMzUgQzQ1LjE0NzE2ODUsMzUgNDQuMzYyMDgwNiwzNS4xNzg5OTYgNDMuNjU2NTkxNCwzNS41IEw0My42NTY1OTE0LDM1LjUgWicgaWQ9J1JvdXRlJyBmaWxsPScjNDA5QkZGJyBtYXNrPSd1cmwoI21hc2stMiknPjwvcGF0aD5cblx0ICAgICAgICAgICAgICAgICAgICA8ZyBpZD0nSW5kaWNhdG9yJyBtYXNrPSd1cmwoI21hc2stMiknPlxuXHQgICAgICAgICAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSg0MC41MDAwMDAsIDM1LjUwMDAwMCknPlxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBpZD0nQ2lyY2xlJyBmaWxsPScjMDA3QUZGJyBjeD0nNS41JyBjeT0nNS41JyByPSc1LjUnPjwvY2lyY2xlPlxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9J0Fycm93JyBmaWxsPScjRkZGRkZGJyBwb2ludHM9JzcuNzUgOC43NSA1LjUgMS42NTM4MDU5MiAzLjI1IDguNzUgNS41IDYuNjUzODA1OTInPjwvcG9seWdvbj5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgPC9nPlxuXHQgICAgICAgICAgICAgICAgICAgIDwvZz5cblx0ICAgICAgICAgICAgICAgICAgICA8ZyBpZD0nMjgwJyBtYXNrPSd1cmwoI21hc2stMiknPlxuXHQgICAgICAgICAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSg4LjAwMDAwMCwgMjIuNTAwMDAwKSc+XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWFzayBpZD0nbWFzay05JyBmaWxsPSd3aGl0ZSc+XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPScjcGF0aC03Jz48L3VzZT5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbWFzaz5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSdPdmFsLTIwJyBzdHJva2U9JyNGRkZGRkYnIG1hc2s9J3VybCgjbWFzay04KScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPScjMDA3QUZGJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnPlxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgbWFzaz0ndXJsKCNtYXNrLTEwKScgeGxpbms6aHJlZj0nI3BhdGgtNyc+PC91c2U+XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2c+XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0nVG9wJyBzdHJva2U9J25vbmUnIGZpbGw9J25vbmUnIG1hc2s9J3VybCgjbWFzay05KSc+XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSBmaWxsPSdibGFjaycgZmlsbC1vcGFjaXR5PScxJyBmaWx0ZXI9J3VybCgjZmlsdGVyLTEyKScgeGxpbms6aHJlZj0nI3BhdGgtMTEnPjwvdXNlPlxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgZmlsbD0nI0RFMUQyNicgZmlsbC1ydWxlPSdldmVub2RkJyB4bGluazpocmVmPScjcGF0aC0xMSc+PC91c2U+XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2c+XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0nU2hpZWxkJyBzdHJva2U9J25vbmUnIGZpbGw9J25vbmUnIG1hc2s9J3VybCgjbWFzay05KScgc3Ryb2tlLXdpZHRoPScxLjUnPlxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1c2Ugc3Ryb2tlPScjRkZGRkZGJyBtYXNrPSd1cmwoI21hc2stMTQpJyB4bGluazpocmVmPScjcGF0aC0xMyc+PC91c2U+XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2c+XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSdNNS42NCw5LjM3OCBMNi40MDUsOS4zNzggQzYuMzk4OTk5OTcsOS4xODU5OTkwNCA2LjQxODQ5OTc4LDguOTk1NTAwOTUgNi40NjM1LDguODA2NSBDNi41MDg1MDAyMyw4LjYxNzQ5OTA2IDYuNTgxOTk5NDksOC40NDgwMDA3NSA2LjY4NCw4LjI5OCBDNi43ODYwMDA1MSw4LjE0Nzk5OTI1IDYuOTE2NDk5MjEsOC4wMjY1MDA0NyA3LjA3NTUsNy45MzM1IEM3LjIzNDUwMDgsNy44NDA0OTk1NCA3LjQyNDk5ODg5LDcuNzk0IDcuNjQ3LDcuNzk0IEM3LjgxNTAwMDg0LDcuNzk0IDcuOTczOTk5MjUsNy44MjA5OTk3MyA4LjEyNCw3Ljg3NSBDOC4yNzQwMDA3NSw3LjkyOTAwMDI3IDguNDA0NDk5NDUsOC4wMDY5OTk0OSA4LjUxNTUsOC4xMDkgQzguNjI2NTAwNTYsOC4yMTEwMDA1MSA4LjcxNDk5OTY3LDguMzMyNDk5MyA4Ljc4MSw4LjQ3MzUgQzguODQ3MDAwMzMsOC42MTQ1MDA3MSA4Ljg4LDguNzcxOTk5MTMgOC44OCw4Ljk0NiBDOC44OCw5LjE2ODAwMTExIDguODQ1NTAwMzUsOS4zNjI5OTkxNiA4Ljc3NjUsOS41MzEgQzguNzA3NDk5NjYsOS42OTkwMDA4NCA4LjYwNTUwMDY4LDkuODU0OTk5MjggOC40NzA1LDkuOTk5IEM4LjMzNTQ5OTMzLDEwLjE0MzAwMDcgOC4xNjYwMDEwMiwxMC4yODU0OTkzIDcuOTYyLDEwLjQyNjUgQzcuNzU3OTk4OTgsMTAuNTY3NTAwNyA3LjUyMTAwMTM1LDEwLjcyMTk5OTIgNy4yNTEsMTAuODkgQzcuMDI4OTk4ODksMTEuMDIyMDAwNyA2LjgxNjAwMTAyLDExLjE2Mjk5OTMgNi42MTIsMTEuMzEzIEM2LjQwNzk5ODk4LDExLjQ2MzAwMDggNi4yMjUwMDA4MSwxMS42MzY5OTkgNi4wNjMsMTEuODM1IEM1LjkwMDk5OTE5LDEyLjAzMzAwMSA1Ljc2NzUwMDUzLDEyLjI2NTQ5ODcgNS42NjI1LDEyLjUzMjUgQzUuNTU3NDk5NDgsMTIuNzk5NTAxMyA1LjQ5MDAwMDE1LDEzLjEyMTk5ODEgNS40NiwxMy41IEw5LjYyNywxMy41IEw5LjYyNywxMi44MjUgTDYuMzUxLDEyLjgyNSBDNi4zODcwMDAxOCwxMi42MjY5OTkgNi40NjM0OTk0MiwxMi40NTE1MDA4IDYuNTgwNSwxMi4yOTg1IEM2LjY5NzUwMDU5LDEyLjE0NTQ5OTIgNi44Mzg0OTkxOCwxMi4wMDMwMDA3IDcuMDAzNSwxMS44NzEgQzcuMTY4NTAwODMsMTEuNzM4OTk5MyA3LjM0OTk5OTAxLDExLjYxNDUwMDYgNy41NDgsMTEuNDk3NSBDNy43NDYwMDA5OSwxMS4zODA0OTk0IDcuOTQzOTk5MDEsMTEuMjYyMDAwNiA4LjE0MiwxMS4xNDIgQzguMzQwMDAwOTksMTEuMDE1OTk5NCA4LjUzMTk5OTA3LDEwLjg4NDAwMDcgOC43MTgsMTAuNzQ2IEM4LjkwNDAwMDkzLDEwLjYwNzk5OTMgOS4wNjg5OTkyOCwxMC40NTM1MDA5IDkuMjEzLDEwLjI4MjUgQzkuMzU3MDAwNzIsMTAuMTExNDk5MSA5LjQ3MjQ5OTU3LDkuOTE4MDAxMDggOS41NTk1LDkuNzAyIEM5LjY0NjUwMDQ0LDkuNDg1OTk4OTIgOS42OSw5LjIzNzAwMTQxIDkuNjksOC45NTUgQzkuNjksOC42NTQ5OTg1IDkuNjM3NTAwNTMsOC4zOTEwMDExNCA5LjUzMjUsOC4xNjMgQzkuNDI3NDk5NDgsNy45MzQ5OTg4NiA5LjI4NTAwMDksNy43NDQ1MDA3NyA5LjEwNSw3LjU5MTUgQzguOTI0OTk5MSw3LjQzODQ5OTI0IDguNzEzNTAxMjIsNy4zMjE1MDA0MSA4LjQ3MDUsNy4yNDA1IEM4LjIyNzQ5ODc5LDcuMTU5NDk5NiA3Ljk2ODAwMTM4LDcuMTE5IDcuNjkyLDcuMTE5IEM3LjM1NTk5ODMyLDcuMTE5IDcuMDU2MDAxMzIsNy4xNzU5OTk0MyA2Ljc5Miw3LjI5IEM2LjUyNzk5ODY4LDcuNDA0MDAwNTcgNi4zMDc1MDA4OSw3LjU2MTQ5OSA2LjEzMDUsNy43NjI1IEM1Ljk1MzQ5OTEyLDcuOTYzNTAxMDEgNS44MjMwMDA0Miw4LjIwMTk5ODYyIDUuNzM5LDguNDc4IEM1LjY1NDk5OTU4LDguNzU0MDAxMzggNS42MjE5OTk5MSw5LjA1Mzk5ODM4IDUuNjQsOS4zNzggTDUuNjQsOS4zNzggWiBNMTEuNjQzLDguNzc1IEMxMS42NDMsOC42MTI5OTkxOSAxMS42NzI5OTk3LDguNDcyMDAwNiAxMS43MzMsOC4zNTIgQzExLjc5MzAwMDMsOC4yMzE5OTk0IDExLjg3MjQ5OTUsOC4xMzAwMDA0MiAxMS45NzE1LDguMDQ2IEMxMi4wNzA1MDA1LDcuOTYxOTk5NTggMTIuMTg4OTk5Myw3Ljg5OTAwMDIxIDEyLjMyNyw3Ljg1NyBDMTIuNDY1MDAwNyw3LjgxNDk5OTc5IDEyLjYwODk5OTMsNy43OTQgMTIuNzU5LDcuNzk0IEMxMy4wNzEwMDE2LDcuNzk0IDEzLjMyNzQ5OSw3Ljg3NjQ5OTE4IDEzLjUyODUsOC4wNDE1IEMxMy43Mjk1MDEsOC4yMDY1MDA4MyAxMy44Myw4LjQ1MDk5ODM4IDEzLjgzLDguNzc1IEMxMy44Myw5LjA5OTAwMTYyIDEzLjczMTAwMSw5LjM1MDk5OTEgMTMuNTMzLDkuNTMxIEMxMy4zMzQ5OTksOS43MTEwMDA5IDEzLjA4MzAwMTUsOS44MDEgMTIuNzc3LDkuODAxIEMxMi42MjA5OTkyLDkuODAxIDEyLjQ3NDAwMDcsOS43ODAwMDAyMSAxMi4zMzYsOS43MzggQzEyLjE5Nzk5OTMsOS42OTU5OTk3OSAxMi4wNzgwMDA1LDkuNjMzMDAwNDIgMTEuOTc2LDkuNTQ5IEMxMS44NzM5OTk1LDkuNDY0OTk5NTggMTEuNzkzMDAwMyw5LjM1ODUwMDY1IDExLjczMyw5LjIyOTUgQzExLjY3Mjk5OTcsOS4xMDA0OTkzNiAxMS42NDMsOC45NDkwMDA4NyAxMS42NDMsOC43NzUgTDExLjY0Myw4Ljc3NSBaIE0xMC44MzMsOC43NDggQzEwLjgzMyw5LjAzNjAwMTQ0IDEwLjkxMzk5OTIsOS4zMDE0OTg3OSAxMS4wNzYsOS41NDQ1IEMxMS4yMzgwMDA4LDkuNzg3NTAxMjIgMTEuNDUzOTk4Nyw5Ljk2Mjk5OTQ2IDExLjcyNCwxMC4wNzEgQzExLjM2Mzk5ODIsMTAuMTk3MDAwNiAxMS4wODgwMDEsMTAuMzk5NDk4NiAxMC44OTYsMTAuNjc4NSBDMTAuNzAzOTk5LDEwLjk1NzUwMTQgMTAuNjA4LDExLjI4NTk5ODEgMTAuNjA4LDExLjY2NCBDMTAuNjA4LDExLjk4ODAwMTYgMTAuNjYzNDk5NCwxMi4yNzE0OTg4IDEwLjc3NDUsMTIuNTE0NSBDMTAuODg1NTAwNiwxMi43NTc1MDEyIDExLjAzODQ5OSwxMi45NTk5OTkyIDExLjIzMzUsMTMuMTIyIEMxMS40Mjg1MDEsMTMuMjg0MDAwOCAxMS42NTc5OTg3LDEzLjQwMzk5OTYgMTEuOTIyLDEzLjQ4MiBDMTIuMTg2MDAxMywxMy41NjAwMDA0IDEyLjQ3MDk5ODUsMTMuNTk5IDEyLjc3NywxMy41OTkgQzEzLjA3MTAwMTUsMTMuNTk5IDEzLjM0Njk5ODcsMTMuNTU3MDAwNCAxMy42MDUsMTMuNDczIEMxMy44NjMwMDEzLDEzLjM4ODk5OTYgMTQuMDg2NDk5MSwxMy4yNjQ1MDA4IDE0LjI3NTUsMTMuMDk5NSBDMTQuNDY0NTAwOSwxMi45MzQ0OTkyIDE0LjYxNDQ5OTQsMTIuNzMyMDAxMiAxNC43MjU1LDEyLjQ5MiBDMTQuODM2NTAwNiwxMi4yNTE5OTg4IDE0Ljg5MiwxMS45NzYwMDE2IDE0Ljg5MiwxMS42NjQgQzE0Ljg5MiwxMS4yNjc5OTggMTQuNzk5MDAwOSwxMC45MzM1MDE0IDE0LjYxMywxMC42NjA1IEMxNC40MjY5OTkxLDEwLjM4NzQ5ODYgMTQuMTQyMDAxOSwxMC4xOTEwMDA2IDEzLjc1OCwxMC4wNzEgQzE0LjAyODAwMTQsOS45NTA5OTk0IDE0LjI0MjQ5OTIsOS43NzI1MDExOSAxNC40MDE1LDkuNTM1NSBDMTQuNTYwNTAwOCw5LjI5ODQ5ODgyIDE0LjY0LDkuMDM2MDAxNDQgMTQuNjQsOC43NDggQzE0LjY0LDguNTQzOTk4OTggMTQuNjA0MDAwNCw4LjM0NDUwMDk4IDE0LjUzMiw4LjE0OTUgQzE0LjQ1OTk5OTYsNy45NTQ0OTkwMyAxNC4zNDc1MDA4LDcuNzgwNTAwNzcgMTQuMTk0NSw3LjYyNzUgQzE0LjA0MTQ5OTIsNy40NzQ0OTkyNCAxMy44NDIwMDEyLDcuMzUxNTAwNDcgMTMuNTk2LDcuMjU4NSBDMTMuMzQ5OTk4OCw3LjE2NTQ5OTU0IDEzLjA1MzAwMTcsNy4xMTkgMTIuNzA1LDcuMTE5IEMxMi40NTg5OTg4LDcuMTE5IDEyLjIyMzUwMTEsNy4xNTQ5OTk2NCAxMS45OTg1LDcuMjI3IEMxMS43NzM0OTg5LDcuMjk5MDAwMzYgMTEuNTc0MDAwOSw3LjQwMzk5OTMxIDExLjQsNy41NDIgQzExLjIyNTk5OTEsNy42ODAwMDA2OSAxMS4wODgwMDA1LDcuODQ5NDk5IDEwLjk4Niw4LjA1MDUgQzEwLjg4Mzk5OTUsOC4yNTE1MDEwMSAxMC44MzMsOC40ODM5OTg2OCAxMC44MzMsOC43NDggTDEwLjgzMyw4Ljc0OCBaIE0xMS40MTgsMTEuNyBDMTEuNDE4LDExLjUxMzk5OTEgMTEuNDUyNDk5NywxMS4zNDYwMDA4IDExLjUyMTUsMTEuMTk2IEMxMS41OTA1MDAzLDExLjA0NTk5OTMgMTEuNjg2NDk5NCwxMC45MTcwMDA1IDExLjgwOTUsMTAuODA5IEMxMS45MzI1MDA2LDEwLjcwMDk5OTUgMTIuMDc2NDk5MiwxMC42MTg1MDAzIDEyLjI0MTUsMTAuNTYxNSBDMTIuNDA2NTAwOCwxMC41MDQ0OTk3IDEyLjU4MTk5OTEsMTAuNDc2IDEyLjc2OCwxMC40NzYgQzEyLjk0ODAwMDksMTAuNDc2IDEzLjExNzQ5OTIsMTAuNTA3NDk5NyAxMy4yNzY1LDEwLjU3MDUgQzEzLjQzNTUwMDgsMTAuNjMzNTAwMyAxMy41NzQ5OTk0LDEwLjcxODk5OTUgMTMuNjk1LDEwLjgyNyBDMTMuODE1MDAwNiwxMC45MzUwMDA1IDEzLjkwOTQ5OTcsMTEuMDYyNDk5MyAxMy45Nzg1LDExLjIwOTUgQzE0LjA0NzUwMDMsMTEuMzU2NTAwNyAxNC4wODIsMTEuNTE2OTk5MSAxNC4wODIsMTEuNjkxIEMxNC4wODIsMTEuODcxMDAwOSAxNC4wNTA1MDAzLDEyLjAzNTk5OTMgMTMuOTg3NSwxMi4xODYgQzEzLjkyNDQ5OTcsMTIuMzM2MDAwOCAxMy44MzQ1MDA2LDEyLjQ2NjQ5OTQgMTMuNzE3NSwxMi41Nzc1IEMxMy42MDA0OTk0LDEyLjY4ODUwMDYgMTMuNDYyNTAwOCwxMi43NzU0OTk3IDEzLjMwMzUsMTIuODM4NSBDMTMuMTQ0NDk5MiwxMi45MDE1MDAzIDEyLjk2OTAwMSwxMi45MzMgMTIuNzc3LDEyLjkzMyBDMTIuMzgwOTk4LDEyLjkzMyAxMi4wNTU1MDEzLDEyLjgyMzUwMTEgMTEuODAwNSwxMi42MDQ1IEMxMS41NDU0OTg3LDEyLjM4NTQ5ODkgMTEuNDE4LDEyLjA4NDAwMTkgMTEuNDE4LDExLjcgTDExLjQxOCwxMS43IFogTTE2LjQ0LDEwLjM1OSBDMTYuNDQsMTAuMjAyOTk5MiAxNi40NDE1LDEwLjAzMDUwMDkgMTYuNDQ0NSw5Ljg0MTUgQzE2LjQ0NzUsOS42NTI0OTkwNiAxNi40NjI0OTk5LDkuNDYzNTAwOTUgMTYuNDg5NSw5LjI3NDUgQzE2LjUxNjUwMDEsOS4wODU0OTkwNiAxNi41NTU0OTk3LDguOTAxMDAwOSAxNi42MDY1LDguNzIxIEMxNi42NTc1MDAzLDguNTQwOTk5MSAxNi43MzI0OTk1LDguMzgzNTAwNjggMTYuODMxNSw4LjI0ODUgQzE2LjkzMDUwMDUsOC4xMTM0OTkzMyAxNy4wNTQ5OTkzLDguMDA0MDAwNDIgMTcuMjA1LDcuOTIgQzE3LjM1NTAwMDgsNy44MzU5OTk1OCAxNy41Mzc5OTg5LDcuNzk0IDE3Ljc1NCw3Ljc5NCBDMTcuOTcwMDAxMSw3Ljc5NCAxOC4xNTI5OTkzLDcuODM1OTk5NTggMTguMzAzLDcuOTIgQzE4LjQ1MzAwMDgsOC4wMDQwMDA0MiAxOC41Nzc0OTk1LDguMTEzNDk5MzMgMTguNjc2NSw4LjI0ODUgQzE4Ljc3NTUwMDUsOC4zODM1MDA2OCAxOC44NTA0OTk3LDguNTQwOTk5MSAxOC45MDE1LDguNzIxIEMxOC45NTI1MDAzLDguOTAxMDAwOSAxOC45OTE0OTk5LDkuMDg1NDk5MDYgMTkuMDE4NSw5LjI3NDUgQzE5LjA0NTUwMDEsOS40NjM1MDA5NSAxOS4wNjA1LDkuNjUyNDk5MDYgMTkuMDYzNSw5Ljg0MTUgQzE5LjA2NjUsMTAuMDMwNTAwOSAxOS4wNjgsMTAuMjAyOTk5MiAxOS4wNjgsMTAuMzU5IEMxOS4wNjgsMTAuNTk5MDAxMiAxOS4wNjA1MDAxLDEwLjg2NzQ5ODUgMTkuMDQ1NSwxMS4xNjQ1IEMxOS4wMzA0OTk5LDExLjQ2MTUwMTUgMTguOTgyNTAwNCwxMS43NDA0OTg3IDE4LjkwMTUsMTIuMDAxNSBDMTguODIwNDk5NiwxMi4yNjI1MDEzIDE4LjY5MDAwMDksMTIuNDgyOTk5MSAxOC41MSwxMi42NjMgQzE4LjMyOTk5OTEsMTIuODQzMDAwOSAxOC4wNzgwMDE2LDEyLjkzMyAxNy43NTQsMTIuOTMzIEMxNy40Mjk5OTg0LDEyLjkzMyAxNy4xNzgwMDA5LDEyLjg0MzAwMDkgMTYuOTk4LDEyLjY2MyBDMTYuODE3OTk5MSwxMi40ODI5OTkxIDE2LjY4NzUwMDQsMTIuMjYyNTAxMyAxNi42MDY1LDEyLjAwMTUgQzE2LjUyNTQ5OTYsMTEuNzQwNDk4NyAxNi40Nzc1MDAxLDExLjQ2MTUwMTUgMTYuNDYyNSwxMS4xNjQ1IEMxNi40NDc0OTk5LDEwLjg2NzQ5ODUgMTYuNDQsMTAuNTk5MDAxMiAxNi40NCwxMC4zNTkgTDE2LjQ0LDEwLjM1OSBaIE0xNS42MywxMC4zNjggQzE1LjYzLDEwLjYwMjAwMTIgMTUuNjM1OTk5OSwxMC44NDQ5OTg3IDE1LjY0OCwxMS4wOTcgQzE1LjY2MDAwMDEsMTEuMzQ5MDAxMyAxNS42ODk5OTk4LDExLjU5NDk5ODggMTUuNzM4LDExLjgzNSBDMTUuNzg2MDAwMiwxMi4wNzUwMDEyIDE1Ljg1NDk5OTYsMTIuMzAxNDk4OSAxNS45NDUsMTIuNTE0NSBDMTYuMDM1MDAwNSwxMi43Mjc1MDExIDE2LjE1Nzk5OTIsMTIuOTE0OTk5MiAxNi4zMTQsMTMuMDc3IEMxNi40NzAwMDA4LDEzLjIzOTAwMDggMTYuNjY2NDk4OCwxMy4zNjY0OTk1IDE2LjkwMzUsMTMuNDU5NSBDMTcuMTQwNTAxMiwxMy41NTI1MDA1IDE3LjQyMzk5ODQsMTMuNTk5IDE3Ljc1NCwxMy41OTkgQzE4LjA5MDAwMTcsMTMuNTk5IDE4LjM3NDk5ODgsMTMuNTUyNTAwNSAxOC42MDksMTMuNDU5NSBDMTguODQzMDAxMiwxMy4zNjY0OTk1IDE5LjAzNzk5OTIsMTMuMjM5MDAwOCAxOS4xOTQsMTMuMDc3IEMxOS4zNTAwMDA4LDEyLjkxNDk5OTIgMTkuNDcyOTk5NiwxMi43Mjc1MDExIDE5LjU2MywxMi41MTQ1IEMxOS42NTMwMDA1LDEyLjMwMTQ5ODkgMTkuNzIxOTk5OCwxMi4wNzUwMDEyIDE5Ljc3LDExLjgzNSBDMTkuODE4MDAwMiwxMS41OTQ5OTg4IDE5Ljg0Nzk5OTksMTEuMzQ5MDAxMyAxOS44NiwxMS4wOTcgQzE5Ljg3MjAwMDEsMTAuODQ0OTk4NyAxOS44NzgsMTAuNjAyMDAxMiAxOS44NzgsMTAuMzY4IEMxOS44NzgsMTAuMTMzOTk4OCAxOS44NzIwMDAxLDkuODkxMDAxMjYgMTkuODYsOS42MzkgQzE5Ljg0Nzk5OTksOS4zODY5OTg3NCAxOS44MTgwMDAyLDkuMTQxMDAxMiAxOS43Nyw4LjkwMSBDMTkuNzIxOTk5OCw4LjY2MDk5ODggMTkuNjUzMDAwNSw4LjQzMzAwMTA4IDE5LjU2Myw4LjIxNyBDMTkuNDcyOTk5Niw4LjAwMDk5ODkyIDE5LjM1MDAwMDgsNy44MTIwMDA4MSAxOS4xOTQsNy42NSBDMTkuMDM3OTk5Miw3LjQ4Nzk5OTE5IDE4Ljg0MTUwMTIsNy4zNTkwMDA0OCAxOC42MDQ1LDcuMjYzIEMxOC4zNjc0OTg4LDcuMTY2OTk5NTIgMTguMDg0MDAxNyw3LjExOSAxNy43NTQsNy4xMTkgQzE3LjQyMzk5ODQsNy4xMTkgMTcuMTQwNTAxMiw3LjE2Njk5OTUyIDE2LjkwMzUsNy4yNjMgQzE2LjY2NjQ5ODgsNy4zNTkwMDA0OCAxNi40NzAwMDA4LDcuNDg3OTk5MTkgMTYuMzE0LDcuNjUgQzE2LjE1Nzk5OTIsNy44MTIwMDA4MSAxNi4wMzUwMDA1LDguMDAwOTk4OTIgMTUuOTQ1LDguMjE3IEMxNS44NTQ5OTk2LDguNDMzMDAxMDggMTUuNzg2MDAwMiw4LjY2MDk5ODggMTUuNzM4LDguOTAxIEMxNS42ODk5OTk4LDkuMTQxMDAxMiAxNS42NjAwMDAxLDkuMzg2OTk4NzQgMTUuNjQ4LDkuNjM5IEMxNS42MzU5OTk5LDkuODkxMDAxMjYgMTUuNjMsMTAuMTMzOTk4OCAxNS42MywxMC4zNjggTDE1LjYzLDEwLjM2OCBaJyBpZD0nMjgwJyBzdHJva2U9J25vbmUnIGZpbGw9JyNGRkZGRkYnIGZpbGwtcnVsZT0nZXZlbm9kZCcgbWFzaz0ndXJsKCNtYXNrLTkpJz48L3BhdGg+XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIDwvZz5cblx0ICAgICAgICAgICAgICAgICAgICA8L2c+XG5cdCAgICAgICAgICAgICAgICA8L2c+XG5cdCAgICAgICAgICAgIDwvZz5cblx0ICAgICAgICA8L2c+XG5cdCAgICA8L2c+XG5cdDwvc3ZnPlwiXG5cdG5ld3NfYXBwOlwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdDxzdmcgd2lkdGg9JzYwcHgnIGhlaWdodD0nNjBweCcgdmlld0JveD0nMCAwIDYwIDYwJyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnPlxuXHQgICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzOS4xICgzMTcyMCkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdCAgICA8dGl0bGU+TmV3czwvdGl0bGU+XG5cdCAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0ICAgIDxkZWZzPlxuXHQgICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0nNTAlJyB5MT0nMCUnIHgyPSc1MCUnIHkyPScxMDAlJyBpZD0nbGluZWFyR3JhZGllbnQtMSc+XG5cdCAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9JyNGQzUzNjMnIG9mZnNldD0nMCUnPjwvc3RvcD5cblx0ICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0nI0ZDMzM1OScgb2Zmc2V0PScxMDAlJz48L3N0b3A+XG5cdCAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cblx0ICAgICAgICA8cGF0aCBkPSdNMTAuMTM2NjI0LDQ3LjM4MjM4NTMgQzExLDQ3LjM4MjM4NTMgMTEsNDYuNSAxMSw0Ni41IEwxMSwxMi4wMDUyNjE3IEMxMSwxMS40NTAwNzEgMTEuNDUzMjMwMywxMSAxMS45OTY4NzU0LDExIEw0OC4wMDMxMjQ2LDExIEM0OC41NTM2ODM3LDExIDQ5LDExLjQ0MTMwMzIgNDksMTIuMDA4ODQ5OCBMNDksNDYuOTkxMTUwMiBDNDksNDcuNTQ4MzIyNiA0OC41NDM5MjUsNDguMDAyOTAzNCA0Ny45OTY0MDc2LDQ4LjAwNjI3ODIgQzQ3Ljk5NjQwNzYsNDguMDA2Mjc4MiAxOC42MDg0ODMxLDQ4LjE5OTc1NDQgMTEuMDAwMDAwMSw0OCBDMTAuMTE3NDExMyw0Ny45NzY4Mjg0IDkuNDE2NjI1OTgsNDcuNjY4NDU3IDkuMDU3NTU2MTUsNDcuMzgyMzg1MyBDOC42OTg0ODYzMyw0Ny4wOTYzMTM1IDguMzYzMDk4MTUsNDYuNzExNjQ2MiA4LjM2MzA5ODE0LDQ2LjY2MDcwNTYgQzguMzYzMDk4MTQsNDYuNDU3NDcyIDkuMjczMjQ3OTYsNDcuMzgyMzg1MyAxMC4xMzY2MjQsNDcuMzgyMzg1MyBaJyBpZD0ncGF0aC0yJz48L3BhdGg+XG5cdCAgICAgICAgPGZpbHRlciB4PSctNTAlJyB5PSctNTAlJyB3aWR0aD0nMjAwJScgaGVpZ2h0PScyMDAlJyBmaWx0ZXJVbml0cz0nb2JqZWN0Qm91bmRpbmdCb3gnIGlkPSdmaWx0ZXItNCc+XG5cdCAgICAgICAgICAgIDxmZU9mZnNldCBkeD0nLTEnIGR5PScwJyBpbj0nU291cmNlQWxwaGEnIHJlc3VsdD0nc2hhZG93T2Zmc2V0T3V0ZXIxJz48L2ZlT2Zmc2V0PlxuXHQgICAgICAgICAgICA8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPScxJyBpbj0nc2hhZG93T2Zmc2V0T3V0ZXIxJyByZXN1bHQ9J3NoYWRvd0JsdXJPdXRlcjEnPjwvZmVHYXVzc2lhbkJsdXI+XG5cdCAgICAgICAgICAgIDxmZUNvbG9yTWF0cml4IHZhbHVlcz0nMCAwIDAgMCAwICAgMCAwIDAgMCAwICAgMCAwIDAgMCAwICAwIDAgMCAwLjI1IDAnIHR5cGU9J21hdHJpeCcgaW49J3NoYWRvd0JsdXJPdXRlcjEnPjwvZmVDb2xvck1hdHJpeD5cblx0ICAgICAgICA8L2ZpbHRlcj5cblx0ICAgIDwvZGVmcz5cblx0ICAgIDxnIGlkPSdQYWdlLTEnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnPlxuXHQgICAgICAgIDxnIGlkPSdIb21lLVNjcmVlbi3igKItaVBob25lLVNFJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtMjQ0LjAwMDAwMCwgLTExNS4wMDAwMDApJz5cblx0ICAgICAgICAgICAgPGcgaWQ9J0hvbWUtU2NyZWVuLeKAoi1pUGhvbmUtNnMtQ29weScgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMC4wMDAwMDAsIDI3LjAwMDAwMCknPlxuXHQgICAgICAgICAgICAgICAgPGcgaWQ9J05ld3MnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDI0NC4wMDAwMDAsIDg4LjAwMDAwMCknPlxuXHQgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSdCRycgZmlsbD0ndXJsKCNsaW5lYXJHcmFkaWVudC0xKScgeD0nMCcgeT0nMCcgd2lkdGg9JzYwJyBoZWlnaHQ9JzYwJyByeD0nMTQnPjwvcmVjdD5cblx0ICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSdNOCw0NS45MTY1MjYyIEw4LDE2Ljk5NTM3NjQgQzgsMTYuNDQ1NjQ1MiA4LjQ1NTI2Mjg4LDE2IDguOTk1NDU3MDMsMTYgTDMyLjAwNDU0MywxNiBDMzIuNTU0MzE4NywxNiAzMywxNi40NTIzNjIxIDMzLDE2Ljk5Mjc4NjQgTDMzLDQ3LjAwNzIxMzYgQzMzLDQ3LjU1NTUxNDQgMzIuNTQ0NzM3MSw0OCAzMi4wMDQ1NDMsNDggTDEwLjk5MDc1MjIsNDggQzkuMzM5MDA1MzgsNDggOCw0Ni42NTY5NDc1IDgsNDUuOTE2NTI2MiBMOCw0NS45MTY1MjYyIFonIGlkPSdGb2xkJyBmaWxsPScjRkZGRkZGJz48L3BhdGg+XG5cdCAgICAgICAgICAgICAgICAgICAgPG1hc2sgaWQ9J21hc2stMycgZmlsbD0nd2hpdGUnPlxuXHQgICAgICAgICAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9JyNwYXRoLTInPjwvdXNlPlxuXHQgICAgICAgICAgICAgICAgICAgIDwvbWFzaz5cblx0ICAgICAgICAgICAgICAgICAgICA8ZyBpZD0nTWFzayc+XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgZmlsbD0nYmxhY2snIGZpbGwtb3BhY2l0eT0nMScgZmlsdGVyPSd1cmwoI2ZpbHRlci00KScgeGxpbms6aHJlZj0nI3BhdGgtMic+PC91c2U+XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgZmlsbD0nI0ZGRkZGRicgZmlsbC1ydWxlPSdldmVub2RkJyB4bGluazpocmVmPScjcGF0aC0yJz48L3VzZT5cblx0ICAgICAgICAgICAgICAgICAgICA8L2c+XG5cdCAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9J2xpbmVzJyBmaWxsPScjQkRCREJEJyBtYXNrPSd1cmwoI21hc2stMyknIHg9JzE3JyB5PSczNScgd2lkdGg9JzMzJyBoZWlnaHQ9JzInIHJ4PScxJz48L3JlY3Q+XG5cdCAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9J2xpbmVzJyBmaWxsPScjQkRCREJEJyBtYXNrPSd1cmwoI21hc2stMyknIHg9JzE3JyB5PSczOScgd2lkdGg9JzMzJyBoZWlnaHQ9JzInIHJ4PScxJz48L3JlY3Q+XG5cdCAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9J2xpbmVzJyBmaWxsPScjQkRCREJEJyBtYXNrPSd1cmwoI21hc2stMyknIHg9JzE3JyB5PSc0Mycgd2lkdGg9JzMzJyBoZWlnaHQ9JzInIHJ4PScxJz48L3JlY3Q+XG5cdCAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0nTTE2LDIwLjEyMTMyMDMgTDE2LDE2Ljk5NzY1NjcgQzE2LDE2LjQ0NjY2NjEgMTYuNDQxMDUzNSwxNiAxNi45OTc2NTY3LDE2IEwyMC4xMjEzMjAzLDE2IEwyMCwxNi4xMjEzMjAzIEwzMSwyNy4xMjEzMjAzIEwzMSwzMC4wMDExNDM2IEMzMSwzMC41NTI3OTY4IDMwLjU1NTA2NjEsMzEgMzAuMDAxMTQzNiwzMSBMMjcuMTIxMzIwMywzMSBMMTYuMTIxMzIwMywyMCBMMTYsMjAuMTIxMzIwMyBMMTYsMjAuMTIxMzIwMyBaIE0xNiwyOS45OTk3ODA5IEMxNiwzMC41NTIxODY3IDE2LjQ1MTMyOTQsMzEgMTcuMDAwMjE5MSwzMSBMMjEuODc4NDYwNiwzMSBDMjIuNDMwODY2MywzMSAyMi41NjUyNDI3LDMwLjY4NjU2MzEgMjIuMTY4NDQ4NCwzMC4yODk3Njg4IEwxNi43MTAyMzEyLDI0LjgzMTU1MTYgQzE2LjMxNzk4MTQsMjQuNDM5MzAxNyAxNiwyNC41NzI2NDk3IDE2LDI1LjEyMTUzOTQgTDE2LDI5Ljk5OTc4MDkgWiBNMjkuOTk5NzgwOSwxNiBDMzAuNTUyMTg2NywxNiAzMSwxNi40NTEzMjk0IDMxLDE3LjAwMDIxOTEgTDMxLDIxLjg3ODQ2MDYgQzMxLDIyLjQzMDg2NjMgMzAuNjg3Mzg1NSwyMi41NjYwNjUyIDMwLjI5NTY5ODksMjIuMTc0Mzc4NSBMMjkuNTkxMzk3NywyMS40NzAwNzc0IEwyNC44MjUyMzksMTYuNzAzOTE4NiBDMjQuNDM2NDc1NCwxNi4zMTUxNTUxIDI0LjU3MjY0OTcsMTYgMjUuMTIxNTM5NCwxNiBMMjkuOTk5NzgwOSwxNiBaJyBpZD0nTG9nbycgZmlsbD0nI0ZENEM2MScgbWFzaz0ndXJsKCNtYXNrLTMpJz48L3BhdGg+XG5cdCAgICAgICAgICAgICAgICA8L2c+XG5cdCAgICAgICAgICAgIDwvZz5cblx0ICAgICAgICA8L2c+XG5cdCAgICA8L2c+XG5cdDwvc3ZnPlwiXG5cdHdhbGxldF9hcHA6XCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0PHN2ZyB3aWR0aD0nNjBweCcgaGVpZ2h0PSc2MHB4JyB2aWV3Qm94PScwIDAgNjAgNjAnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayc+XG5cdCAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDM5LjEgKDMxNzIwKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0ICAgIDx0aXRsZT5XYWxsZXQ8L3RpdGxlPlxuXHQgICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdCAgICA8ZGVmcz5cblx0ICAgICAgICA8bGluZWFyR3JhZGllbnQgeDE9JzUwJScgeTE9JzAlJyB4Mj0nNTAlJyB5Mj0nMTAwJScgaWQ9J2xpbmVhckdyYWRpZW50LTEnPlxuXHQgICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPScjMUUxRTFGJyBvZmZzZXQ9JzAlJz48L3N0b3A+XG5cdCAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9JyMxRTFFMUYnIG9mZnNldD0nMTAwJSc+PC9zdG9wPlxuXHQgICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XG5cdCAgICAgICAgPHJlY3QgaWQ9J3BhdGgtMicgeD0nOScgeT0nMTUnIHdpZHRoPSc0MicgaGVpZ2h0PScxMycgcng9JzInPjwvcmVjdD5cblx0ICAgICAgICA8ZmlsdGVyIHg9Jy01MCUnIHk9Jy01MCUnIHdpZHRoPScyMDAlJyBoZWlnaHQ9JzIwMCUnIGZpbHRlclVuaXRzPSdvYmplY3RCb3VuZGluZ0JveCcgaWQ9J2ZpbHRlci0zJz5cblx0ICAgICAgICAgICAgPGZlT2Zmc2V0IGR4PScwJyBkeT0nMCcgaW49J1NvdXJjZUFscGhhJyByZXN1bHQ9J3NoYWRvd09mZnNldE91dGVyMSc+PC9mZU9mZnNldD5cblx0ICAgICAgICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0nMC41JyBpbj0nc2hhZG93T2Zmc2V0T3V0ZXIxJyByZXN1bHQ9J3NoYWRvd0JsdXJPdXRlcjEnPjwvZmVHYXVzc2lhbkJsdXI+XG5cdCAgICAgICAgICAgIDxmZUNvbG9yTWF0cml4IHZhbHVlcz0nMCAwIDAgMCAwICAgMCAwIDAgMCAwICAgMCAwIDAgMCAwICAwIDAgMCAwLjEgMCcgdHlwZT0nbWF0cml4JyBpbj0nc2hhZG93Qmx1ck91dGVyMSc+PC9mZUNvbG9yTWF0cml4PlxuXHQgICAgICAgIDwvZmlsdGVyPlxuXHQgICAgICAgIDxyZWN0IGlkPSdwYXRoLTQnIHg9JzknIHk9JzE4JyB3aWR0aD0nNDInIGhlaWdodD0nMTMnIHJ4PScyJz48L3JlY3Q+XG5cdCAgICAgICAgPGZpbHRlciB4PSctNTAlJyB5PSctNTAlJyB3aWR0aD0nMjAwJScgaGVpZ2h0PScyMDAlJyBmaWx0ZXJVbml0cz0nb2JqZWN0Qm91bmRpbmdCb3gnIGlkPSdmaWx0ZXItNSc+XG5cdCAgICAgICAgICAgIDxmZU9mZnNldCBkeD0nMCcgZHk9JzAnIGluPSdTb3VyY2VBbHBoYScgcmVzdWx0PSdzaGFkb3dPZmZzZXRPdXRlcjEnPjwvZmVPZmZzZXQ+XG5cdCAgICAgICAgICAgIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249JzAuNScgaW49J3NoYWRvd09mZnNldE91dGVyMScgcmVzdWx0PSdzaGFkb3dCbHVyT3V0ZXIxJz48L2ZlR2F1c3NpYW5CbHVyPlxuXHQgICAgICAgICAgICA8ZmVDb2xvck1hdHJpeCB2YWx1ZXM9JzAgMCAwIDAgMCAgIDAgMCAwIDAgMCAgIDAgMCAwIDAgMCAgMCAwIDAgMC4xIDAnIHR5cGU9J21hdHJpeCcgaW49J3NoYWRvd0JsdXJPdXRlcjEnPjwvZmVDb2xvck1hdHJpeD5cblx0ICAgICAgICA8L2ZpbHRlcj5cblx0ICAgICAgICA8cmVjdCBpZD0ncGF0aC02JyB4PSc5JyB5PScyMScgd2lkdGg9JzQyJyBoZWlnaHQ9JzEzJyByeD0nMic+PC9yZWN0PlxuXHQgICAgICAgIDxmaWx0ZXIgeD0nLTUwJScgeT0nLTUwJScgd2lkdGg9JzIwMCUnIGhlaWdodD0nMjAwJScgZmlsdGVyVW5pdHM9J29iamVjdEJvdW5kaW5nQm94JyBpZD0nZmlsdGVyLTcnPlxuXHQgICAgICAgICAgICA8ZmVPZmZzZXQgZHg9JzAnIGR5PScwJyBpbj0nU291cmNlQWxwaGEnIHJlc3VsdD0nc2hhZG93T2Zmc2V0T3V0ZXIxJz48L2ZlT2Zmc2V0PlxuXHQgICAgICAgICAgICA8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPScwLjUnIGluPSdzaGFkb3dPZmZzZXRPdXRlcjEnIHJlc3VsdD0nc2hhZG93Qmx1ck91dGVyMSc+PC9mZUdhdXNzaWFuQmx1cj5cblx0ICAgICAgICAgICAgPGZlQ29sb3JNYXRyaXggdmFsdWVzPScwIDAgMCAwIDAgICAwIDAgMCAwIDAgICAwIDAgMCAwIDAgIDAgMCAwIDAuMSAwJyB0eXBlPSdtYXRyaXgnIGluPSdzaGFkb3dCbHVyT3V0ZXIxJz48L2ZlQ29sb3JNYXRyaXg+XG5cdCAgICAgICAgPC9maWx0ZXI+XG5cdCAgICAgICAgPHJlY3QgaWQ9J3BhdGgtOCcgeD0nOScgeT0nMjUnIHdpZHRoPSc0MicgaGVpZ2h0PScxMycgcng9JzInPjwvcmVjdD5cblx0ICAgICAgICA8ZmlsdGVyIHg9Jy01MCUnIHk9Jy01MCUnIHdpZHRoPScyMDAlJyBoZWlnaHQ9JzIwMCUnIGZpbHRlclVuaXRzPSdvYmplY3RCb3VuZGluZ0JveCcgaWQ9J2ZpbHRlci05Jz5cblx0ICAgICAgICAgICAgPGZlT2Zmc2V0IGR4PScwJyBkeT0nMCcgaW49J1NvdXJjZUFscGhhJyByZXN1bHQ9J3NoYWRvd09mZnNldE91dGVyMSc+PC9mZU9mZnNldD5cblx0ICAgICAgICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0nMC41JyBpbj0nc2hhZG93T2Zmc2V0T3V0ZXIxJyByZXN1bHQ9J3NoYWRvd0JsdXJPdXRlcjEnPjwvZmVHYXVzc2lhbkJsdXI+XG5cdCAgICAgICAgICAgIDxmZUNvbG9yTWF0cml4IHZhbHVlcz0nMCAwIDAgMCAwICAgMCAwIDAgMCAwICAgMCAwIDAgMCAwICAwIDAgMCAwLjEgMCcgdHlwZT0nbWF0cml4JyBpbj0nc2hhZG93Qmx1ck91dGVyMSc+PC9mZUNvbG9yTWF0cml4PlxuXHQgICAgICAgIDwvZmlsdGVyPlxuXHQgICAgICAgIDxwYXRoIGQ9J003LDI4IEw3LDQyIEw1Myw0MiBMNTMsMjggTDM4LjkwNjUwNzMsMjggQzM3Ljc5ODMzMzksMjggMzYuMzA1NzU1OCwyOC42NzIyMjI5IDM1LjU1MDEyMzcsMjkuNDc4NDg4MiBDMzUuNTUwMTIzNywyOS40Nzg0ODgyIDMyLjQxODk1NzksMzMuMzA3NjkyMyAzMCwzMy4zMDc2OTIzIEMyNy41ODEwNDIxLDMzLjMwNzY5MjMgMjQuNDQ5ODc2MywyOS40Nzg0ODgyIDI0LjQ0OTg3NjMsMjkuNDc4NDg4MiBDMjMuNzA0MzcwMiwyOC42NjE5NDE3IDIyLjIxMTQ3ODEsMjggMjEuMDkzNDkyNywyOCBMNywyOCBaJyBpZD0ncGF0aC0xMCc+PC9wYXRoPlxuXHQgICAgICAgIDxmaWx0ZXIgeD0nLTUwJScgeT0nLTUwJScgd2lkdGg9JzIwMCUnIGhlaWdodD0nMjAwJScgZmlsdGVyVW5pdHM9J29iamVjdEJvdW5kaW5nQm94JyBpZD0nZmlsdGVyLTExJz5cblx0ICAgICAgICAgICAgPGZlT2Zmc2V0IGR4PScwJyBkeT0nLTEnIGluPSdTb3VyY2VBbHBoYScgcmVzdWx0PSdzaGFkb3dPZmZzZXRPdXRlcjEnPjwvZmVPZmZzZXQ+XG5cdCAgICAgICAgICAgIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249JzEnIGluPSdzaGFkb3dPZmZzZXRPdXRlcjEnIHJlc3VsdD0nc2hhZG93Qmx1ck91dGVyMSc+PC9mZUdhdXNzaWFuQmx1cj5cblx0ICAgICAgICAgICAgPGZlQ29sb3JNYXRyaXggdmFsdWVzPScwIDAgMCAwIDAgICAwIDAgMCAwIDAgICAwIDAgMCAwIDAgIDAgMCAwIDAuMSAwJyB0eXBlPSdtYXRyaXgnIGluPSdzaGFkb3dCbHVyT3V0ZXIxJz48L2ZlQ29sb3JNYXRyaXg+XG5cdCAgICAgICAgPC9maWx0ZXI+XG5cdCAgICA8L2RlZnM+XG5cdCAgICA8ZyBpZD0nUGFnZS0xJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJz5cblx0ICAgICAgICA8ZyBpZD0nSG9tZS1TY3JlZW4t4oCiLWlQaG9uZS1TRScgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTE2LjAwMDAwMCwgLTIwMy4wMDAwMDApJz5cblx0ICAgICAgICAgICAgPGcgaWQ9J0hvbWUtU2NyZWVuLeKAoi1pUGhvbmUtNnMtQ29weScgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMC4wMDAwMDAsIDI3LjAwMDAwMCknPlxuXHQgICAgICAgICAgICAgICAgPGcgaWQ9J1dhbGxldCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMTYuMDAwMDAwLCAxNzYuMDAwMDAwKSc+XG5cdCAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9J0JHJyBmaWxsPSd1cmwoI2xpbmVhckdyYWRpZW50LTEpJyB4PScwJyB5PScwJyB3aWR0aD0nNjAnIGhlaWdodD0nNjAnIHJ4PScxNCc+PC9yZWN0PlxuXHQgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSd3YWxsZXQnIGZpbGw9JyNEOUQ2Q0MnIHg9JzcnIHk9JzEyJyB3aWR0aD0nNDYnIGhlaWdodD0nMzQnIHJ4PSc0Jz48L3JlY3Q+XG5cdCAgICAgICAgICAgICAgICAgICAgPGcgaWQ9J2NhcmRzJz5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSBmaWxsPSdibGFjaycgZmlsbC1vcGFjaXR5PScxJyBmaWx0ZXI9J3VybCgjZmlsdGVyLTMpJyB4bGluazpocmVmPScjcGF0aC0yJz48L3VzZT5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSBmaWxsPScjM0I5OUM5JyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIHhsaW5rOmhyZWY9JyNwYXRoLTInPjwvdXNlPlxuXHQgICAgICAgICAgICAgICAgICAgIDwvZz5cblx0ICAgICAgICAgICAgICAgICAgICA8ZyBpZD0nY2FyZHMnPlxuXHQgICAgICAgICAgICAgICAgICAgICAgICA8dXNlIGZpbGw9J2JsYWNrJyBmaWxsLW9wYWNpdHk9JzEnIGZpbHRlcj0ndXJsKCNmaWx0ZXItNSknIHhsaW5rOmhyZWY9JyNwYXRoLTQnPjwvdXNlPlxuXHQgICAgICAgICAgICAgICAgICAgICAgICA8dXNlIGZpbGw9JyNGRkIwMDMnIGZpbGwtcnVsZT0nZXZlbm9kZCcgeGxpbms6aHJlZj0nI3BhdGgtNCc+PC91c2U+XG5cdCAgICAgICAgICAgICAgICAgICAgPC9nPlxuXHQgICAgICAgICAgICAgICAgICAgIDxnIGlkPSdjYXJkcyc+XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgZmlsbD0nYmxhY2snIGZpbGwtb3BhY2l0eT0nMScgZmlsdGVyPSd1cmwoI2ZpbHRlci03KScgeGxpbms6aHJlZj0nI3BhdGgtNic+PC91c2U+XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgZmlsbD0nIzUwQkUzRCcgZmlsbC1ydWxlPSdldmVub2RkJyB4bGluazpocmVmPScjcGF0aC02Jz48L3VzZT5cblx0ICAgICAgICAgICAgICAgICAgICA8L2c+XG5cdCAgICAgICAgICAgICAgICAgICAgPGcgaWQ9J2NhcmRzJz5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSBmaWxsPSdibGFjaycgZmlsbC1vcGFjaXR5PScxJyBmaWx0ZXI9J3VybCgjZmlsdGVyLTkpJyB4bGluazpocmVmPScjcGF0aC04Jz48L3VzZT5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSBmaWxsPScjRjE2QzVFJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIHhsaW5rOmhyZWY9JyNwYXRoLTgnPjwvdXNlPlxuXHQgICAgICAgICAgICAgICAgICAgIDwvZz5cblx0ICAgICAgICAgICAgICAgICAgICA8ZyBpZD0nQ29tYmluZWQtU2hhcGUnPlxuXHQgICAgICAgICAgICAgICAgICAgICAgICA8dXNlIGZpbGw9J2JsYWNrJyBmaWxsLW9wYWNpdHk9JzEnIGZpbHRlcj0ndXJsKCNmaWx0ZXItMTEpJyB4bGluazpocmVmPScjcGF0aC0xMCc+PC91c2U+XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgZmlsbD0nI0Q5RDZDQycgZmlsbC1ydWxlPSdldmVub2RkJyB4bGluazpocmVmPScjcGF0aC0xMCc+PC91c2U+XG5cdCAgICAgICAgICAgICAgICAgICAgPC9nPlxuXHQgICAgICAgICAgICAgICAgPC9nPlxuXHQgICAgICAgICAgICA8L2c+XG5cdCAgICAgICAgPC9nPlxuXHQgICAgPC9nPlxuXHQ8L3N2Zz5cIlxuXHRub3Rlc19hcHA6XCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0PHN2ZyB3aWR0aD0nNjBweCcgaGVpZ2h0PSc2MHB4JyB2aWV3Qm94PScwIDAgNjAgNjAnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayc+XG5cdCAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDM5LjEgKDMxNzIwKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0ICAgIDx0aXRsZT5Ob3RlczwvdGl0bGU+XG5cdCAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0ICAgIDxkZWZzPlxuXHQgICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0nNTAlJyB5MT0nMCUnIHgyPSc1MCUnIHkyPScxMDAlJyBpZD0nbGluZWFyR3JhZGllbnQtMSc+XG5cdCAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9JyNGOEY4RjgnIG9mZnNldD0nMCUnPjwvc3RvcD5cblx0ICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0nI0VERURFRCcgb2Zmc2V0PScxMDAlJz48L3N0b3A+XG5cdCAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cblx0ICAgICAgICA8cGF0aCBkPSdNMzkuMDgxNSwwIEM0NS4xMDUsMCA0OC4xMTYsMCA1MS4zNTg1LDEuMDI1IEM1NC44OTg1LDIuMzEzNSA1Ny42ODY1LDUuMTAxNSA1OC45NzUsOC42NDE1IEM2MCwxMS44ODM1IDYwLDE0Ljg5NTUgNjAsMjAuOTE4NSBMNjAsMzkuMDgxNSBDNjAsNDUuMTA1IDYwLDQ4LjExNiA1OC45NzUsNTEuMzU4NSBDNTcuNjg2NSw1NC44OTg1IDU0Ljg5ODUsNTcuNjg2NSA1MS4zNTg1LDU4Ljk3NDUgQzQ4LjExNiw2MCA0NS4xMDUsNjAgMzkuMDgxNSw2MCBMMjAuOTE4NSw2MCBDMTQuODk1LDYwIDExLjg4MzUsNjAgOC42NDE1LDU4Ljk3NDUgQzUuMTAxNSw1Ny42ODY1IDIuMzEzNSw1NC44OTg1IDEuMDI1LDUxLjM1ODUgQzAsNDguMTE2IDAsNDUuMTA1IDAsMzkuMDgxNSBMMCwyMC45MTg1IEMwLDE0Ljg5NTUgMCwxMS44ODM1IDEuMDI1LDguNjQxNSBDMi4zMTM1LDUuMTAxNSA1LjEwMTUsMi4zMTM1IDguNjQxNSwxLjAyNSBDMTEuODgzNSwwIDE0Ljg5NSwwIDIwLjkxODUsMCBMMzkuMDgxNSwwIFonIGlkPSdwYXRoLTInPjwvcGF0aD5cblx0ICAgICAgICA8bGluZWFyR3JhZGllbnQgeDE9JzUwJScgeTE9JzAlJyB4Mj0nNTAlJyB5Mj0nMTAwJScgaWQ9J2xpbmVhckdyYWRpZW50LTQnPlxuXHQgICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPScjRkZERjYzJyBvZmZzZXQ9JzAlJz48L3N0b3A+XG5cdCAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9JyNGRkNEMDInIG9mZnNldD0nMTAwJSc+PC9zdG9wPlxuXHQgICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XG5cdCAgICAgICAgPHJlY3QgaWQ9J3BhdGgtNScgeD0nMCcgeT0nLTEnIHdpZHRoPSc2MCcgaGVpZ2h0PScyMCc+PC9yZWN0PlxuXHQgICAgICAgIDxmaWx0ZXIgeD0nLTUwJScgeT0nLTUwJScgd2lkdGg9JzIwMCUnIGhlaWdodD0nMjAwJScgZmlsdGVyVW5pdHM9J29iamVjdEJvdW5kaW5nQm94JyBpZD0nZmlsdGVyLTYnPlxuXHQgICAgICAgICAgICA8ZmVPZmZzZXQgZHg9JzAnIGR5PScwLjUnIGluPSdTb3VyY2VBbHBoYScgcmVzdWx0PSdzaGFkb3dPZmZzZXRPdXRlcjEnPjwvZmVPZmZzZXQ+XG5cdCAgICAgICAgICAgIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249JzAuNScgaW49J3NoYWRvd09mZnNldE91dGVyMScgcmVzdWx0PSdzaGFkb3dCbHVyT3V0ZXIxJz48L2ZlR2F1c3NpYW5CbHVyPlxuXHQgICAgICAgICAgICA8ZmVDb2xvck1hdHJpeCB2YWx1ZXM9JzAgMCAwIDAgMCAgIDAgMCAwIDAgMCAgIDAgMCAwIDAgMCAgMCAwIDAgMC4zIDAnIHR5cGU9J21hdHJpeCcgaW49J3NoYWRvd0JsdXJPdXRlcjEnPjwvZmVDb2xvck1hdHJpeD5cblx0ICAgICAgICA8L2ZpbHRlcj5cblx0ICAgICAgICA8ZmlsdGVyIHg9Jy01MCUnIHk9Jy01MCUnIHdpZHRoPScyMDAlJyBoZWlnaHQ9JzIwMCUnIGZpbHRlclVuaXRzPSdvYmplY3RCb3VuZGluZ0JveCcgaWQ9J2ZpbHRlci03Jz5cblx0ICAgICAgICAgICAgPGZlT2Zmc2V0IGR4PScwJyBkeT0nLTAuNScgaW49J1NvdXJjZUFscGhhJyByZXN1bHQ9J3NoYWRvd09mZnNldElubmVyMSc+PC9mZU9mZnNldD5cblx0ICAgICAgICAgICAgPGZlQ29tcG9zaXRlIGluPSdzaGFkb3dPZmZzZXRJbm5lcjEnIGluMj0nU291cmNlQWxwaGEnIG9wZXJhdG9yPSdhcml0aG1ldGljJyBrMj0nLTEnIGszPScxJyByZXN1bHQ9J3NoYWRvd0lubmVySW5uZXIxJz48L2ZlQ29tcG9zaXRlPlxuXHQgICAgICAgICAgICA8ZmVDb2xvck1hdHJpeCB2YWx1ZXM9JzAgMCAwIDAgMCAgIDAgMCAwIDAgMCAgIDAgMCAwIDAgMCAgMCAwIDAgMC4yIDAnIHR5cGU9J21hdHJpeCcgaW49J3NoYWRvd0lubmVySW5uZXIxJz48L2ZlQ29sb3JNYXRyaXg+XG5cdCAgICAgICAgPC9maWx0ZXI+XG5cdCAgICA8L2RlZnM+XG5cdCAgICA8ZyBpZD0nUGFnZS0xJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJz5cblx0ICAgICAgICA8ZyBpZD0nSG9tZS1TY3JlZW4t4oCiLWlQaG9uZS1TRScgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTkyLjAwMDAwMCwgLTIwMy4wMDAwMDApJz5cblx0ICAgICAgICAgICAgPGcgaWQ9J0hvbWUtU2NyZWVuLeKAoi1pUGhvbmUtNnMtQ29weScgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMC4wMDAwMDAsIDI3LjAwMDAwMCknPlxuXHQgICAgICAgICAgICAgICAgPGcgaWQ9J05vdGVzJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSg5Mi4wMDAwMDAsIDE3Ni4wMDAwMDApJz5cblx0ICAgICAgICAgICAgICAgICAgICA8bWFzayBpZD0nbWFzay0zJyBmaWxsPSd3aGl0ZSc+XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0nI3BhdGgtMic+PC91c2U+XG5cdCAgICAgICAgICAgICAgICAgICAgPC9tYXNrPlxuXHQgICAgICAgICAgICAgICAgICAgIDx1c2UgaWQ9J0JHJyBmaWxsPSd1cmwoI2xpbmVhckdyYWRpZW50LTEpJyB4bGluazpocmVmPScjcGF0aC0yJz48L3VzZT5cblx0ICAgICAgICAgICAgICAgICAgICA8ZyBpZD0naGVhZGVyJyBtYXNrPSd1cmwoI21hc2stMyknPlxuXHQgICAgICAgICAgICAgICAgICAgICAgICA8dXNlIGZpbGw9J2JsYWNrJyBmaWxsLW9wYWNpdHk9JzEnIGZpbHRlcj0ndXJsKCNmaWx0ZXItNiknIHhsaW5rOmhyZWY9JyNwYXRoLTUnPjwvdXNlPlxuXHQgICAgICAgICAgICAgICAgICAgICAgICA8dXNlIGZpbGw9J3VybCgjbGluZWFyR3JhZGllbnQtNCknIGZpbGwtcnVsZT0nZXZlbm9kZCcgeGxpbms6aHJlZj0nI3BhdGgtNSc+PC91c2U+XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgZmlsbD0nYmxhY2snIGZpbGwtb3BhY2l0eT0nMScgZmlsdGVyPSd1cmwoI2ZpbHRlci03KScgeGxpbms6aHJlZj0nI3BhdGgtNSc+PC91c2U+XG5cdCAgICAgICAgICAgICAgICAgICAgPC9nPlxuXHQgICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSdsaW5lJyBmaWxsPScjQjdCN0I3JyBtYXNrPSd1cmwoI21hc2stMyknIHBvaW50cz0nNTkuNzUgMzAuNSA2MCAzMC41IDYwIDMwIDU5Ljc1IDMwIC0wLjI1IDMwIC0wLjUgMzAgLTAuNSAzMC41IC0wLjI1IDMwLjUnPjwvcG9seWdvbj5cblx0ICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0nbGluZScgZmlsbD0nI0I3QjdCNycgbWFzaz0ndXJsKCNtYXNrLTMpJyBwb2ludHM9JzU5Ljc1IDQxLjUgNjAgNDEuNSA2MCA0MSA1OS43NSA0MSAtMC4yNSA0MSAtMC41IDQxIC0wLjUgNDEuNSAtMC4yNSA0MS41Jz48L3BvbHlnb24+XG5cdCAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9J2xpbmUnIGZpbGw9JyNCN0I3QjcnIG1hc2s9J3VybCgjbWFzay0zKScgcG9pbnRzPSc1OS43NSA1MyA2MCA1MyA2MCA1Mi41IDU5Ljc1IDUyLjUgLTAuMjUgNTIuNSAtMC41IDUyLjUgLTAuNSA1MyAtMC4yNSA1Myc+PC9wb2x5Z29uPlxuXHQgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9J001OC41LDIyIEw1OS41LDIyIEw1OS41LDIzIEw1OC41LDIzIEw1OC41LDIyIEw1OC41LDIyIFogTTU2LjUsMjIgTDU3LjUsMjIgTDU3LjUsMjMgTDU2LjUsMjMgTDU2LjUsMjIgTDU2LjUsMjIgWiBNNTQuNSwyMiBMNTUuNSwyMiBMNTUuNSwyMyBMNTQuNSwyMyBMNTQuNSwyMiBMNTQuNSwyMiBaIE01Mi41LDIyIEw1My41LDIyIEw1My41LDIzIEw1Mi41LDIzIEw1Mi41LDIyIEw1Mi41LDIyIFogTTUwLjUsMjIgTDUxLjUsMjIgTDUxLjUsMjMgTDUwLjUsMjMgTDUwLjUsMjIgTDUwLjUsMjIgWiBNNDguNSwyMiBMNDkuNSwyMiBMNDkuNSwyMyBMNDguNSwyMyBMNDguNSwyMiBMNDguNSwyMiBaIE00Ni41LDIyIEw0Ny41LDIyIEw0Ny41LDIzIEw0Ni41LDIzIEw0Ni41LDIyIEw0Ni41LDIyIFogTTQ0LjUsMjIgTDQ1LjUsMjIgTDQ1LjUsMjMgTDQ0LjUsMjMgTDQ0LjUsMjIgTDQ0LjUsMjIgWiBNNDIuNSwyMiBMNDMuNSwyMiBMNDMuNSwyMyBMNDIuNSwyMyBMNDIuNSwyMiBMNDIuNSwyMiBaIE00MC41LDIyIEw0MS41LDIyIEw0MS41LDIzIEw0MC41LDIzIEw0MC41LDIyIEw0MC41LDIyIFogTTM4LjUsMjIgTDM5LjUsMjIgTDM5LjUsMjMgTDM4LjUsMjMgTDM4LjUsMjIgTDM4LjUsMjIgWiBNMzYuNSwyMiBMMzcuNSwyMiBMMzcuNSwyMyBMMzYuNSwyMyBMMzYuNSwyMiBMMzYuNSwyMiBaIE0zNC41LDIyIEwzNS41LDIyIEwzNS41LDIzIEwzNC41LDIzIEwzNC41LDIyIEwzNC41LDIyIFogTTMyLjUsMjIgTDMzLjUsMjIgTDMzLjUsMjMgTDMyLjUsMjMgTDMyLjUsMjIgTDMyLjUsMjIgWiBNMzAuNSwyMiBMMzEuNSwyMiBMMzEuNSwyMyBMMzAuNSwyMyBMMzAuNSwyMiBMMzAuNSwyMiBaIE0yOC41LDIyIEwyOS41LDIyIEwyOS41LDIzIEwyOC41LDIzIEwyOC41LDIyIEwyOC41LDIyIFogTTI2LjUsMjIgTDI3LjUsMjIgTDI3LjUsMjMgTDI2LjUsMjMgTDI2LjUsMjIgTDI2LjUsMjIgWiBNMjQuNSwyMiBMMjUuNSwyMiBMMjUuNSwyMyBMMjQuNSwyMyBMMjQuNSwyMiBMMjQuNSwyMiBaIE0yMi41LDIyIEwyMy41LDIyIEwyMy41LDIzIEwyMi41LDIzIEwyMi41LDIyIEwyMi41LDIyIFogTTIwLjUsMjIgTDIxLjUsMjIgTDIxLjUsMjMgTDIwLjUsMjMgTDIwLjUsMjIgTDIwLjUsMjIgWiBNMTguNSwyMiBMMTkuNSwyMiBMMTkuNSwyMyBMMTguNSwyMyBMMTguNSwyMiBMMTguNSwyMiBaIE0xNi41LDIyIEwxNy41LDIyIEwxNy41LDIzIEwxNi41LDIzIEwxNi41LDIyIEwxNi41LDIyIFogTTE0LjUsMjIgTDE1LjUsMjIgTDE1LjUsMjMgTDE0LjUsMjMgTDE0LjUsMjIgTDE0LjUsMjIgWiBNMTIuNSwyMiBMMTMuNSwyMiBMMTMuNSwyMyBMMTIuNSwyMyBMMTIuNSwyMiBMMTIuNSwyMiBaIE0xMC41LDIyIEwxMS41LDIyIEwxMS41LDIzIEwxMC41LDIzIEwxMC41LDIyIEwxMC41LDIyIFogTTguNSwyMiBMOS41LDIyIEw5LjUsMjMgTDguNSwyMyBMOC41LDIyIEw4LjUsMjIgWiBNNi41LDIyIEw3LjUsMjIgTDcuNSwyMyBMNi41LDIzIEw2LjUsMjIgTDYuNSwyMiBaIE00LjUsMjIgTDUuNSwyMiBMNS41LDIzIEw0LjUsMjMgTDQuNSwyMiBMNC41LDIyIFogTTIuNSwyMiBMMy41LDIyIEwzLjUsMjMgTDIuNSwyMyBMMi41LDIyIEwyLjUsMjIgWiBNMC41LDIyIEwxLjUsMjIgTDEuNSwyMyBMMC41LDIzIEwwLjUsMjIgTDAuNSwyMiBaJyBpZD0nUmVjdGFuZ2xlLTM3JyBmaWxsPScjQUFBQUFBJyBtYXNrPSd1cmwoI21hc2stMyknPjwvcGF0aD5cblx0ICAgICAgICAgICAgICAgIDwvZz5cblx0ICAgICAgICAgICAgPC9nPlxuXHQgICAgICAgIDwvZz5cblx0ICAgIDwvZz5cblx0PC9zdmc+XCJcblx0cmVtaW5kZXJzX2FwcDpcIjw/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyc/PlxuXHQ8c3ZnIHdpZHRoPSc2MHB4JyBoZWlnaHQ9JzYwcHgnIHZpZXdCb3g9JzAgMCA2MCA2MCcgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJz5cblx0ICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMzkuMSAoMzE3MjApIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHQgICAgPHRpdGxlPm1pbjwvdGl0bGU+XG5cdCAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0ICAgIDxkZWZzPlxuXHQgICAgICAgIDxyZWN0IGlkPSdwYXRoLTEnIHg9JzAnIHk9JzAnIHdpZHRoPSc2MCcgaGVpZ2h0PSc2MCcgcng9JzE0Jz48L3JlY3Q+XG5cdCAgICAgICAgPGNpcmNsZSBpZD0ncGF0aC0zJyBjeD0nMTAnIGN5PScxMicgcj0nNCc+PC9jaXJjbGU+XG5cdCAgICAgICAgPG1hc2sgaWQ9J21hc2stNCcgbWFza0NvbnRlbnRVbml0cz0ndXNlclNwYWNlT25Vc2UnIG1hc2tVbml0cz0nb2JqZWN0Qm91bmRpbmdCb3gnIHg9JzAnIHk9JzAnIHdpZHRoPSc4JyBoZWlnaHQ9JzgnIGZpbGw9J3doaXRlJz5cblx0ICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPScjcGF0aC0zJz48L3VzZT5cblx0ICAgICAgICA8L21hc2s+XG5cdCAgICAgICAgPG1hc2sgaWQ9J21hc2stNScgbWFza0NvbnRlbnRVbml0cz0ndXNlclNwYWNlT25Vc2UnIG1hc2tVbml0cz0nb2JqZWN0Qm91bmRpbmdCb3gnIHg9Jy0wLjUnIHk9Jy0wLjUnIHdpZHRoPSc5JyBoZWlnaHQ9JzknPlxuXHQgICAgICAgICAgICA8cmVjdCB4PSc1LjUnIHk9JzcuNScgd2lkdGg9JzknIGhlaWdodD0nOScgZmlsbD0nd2hpdGUnPjwvcmVjdD5cblx0ICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPScjcGF0aC0zJyBmaWxsPSdibGFjayc+PC91c2U+XG5cdCAgICAgICAgPC9tYXNrPlxuXHQgICAgICAgIDxjaXJjbGUgaWQ9J3BhdGgtNicgY3g9JzEwJyBjeT0nMjMnIHI9JzQnPjwvY2lyY2xlPlxuXHQgICAgICAgIDxtYXNrIGlkPSdtYXNrLTcnIG1hc2tDb250ZW50VW5pdHM9J3VzZXJTcGFjZU9uVXNlJyBtYXNrVW5pdHM9J29iamVjdEJvdW5kaW5nQm94JyB4PScwJyB5PScwJyB3aWR0aD0nOCcgaGVpZ2h0PSc4JyBmaWxsPSd3aGl0ZSc+XG5cdCAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0nI3BhdGgtNic+PC91c2U+XG5cdCAgICAgICAgPC9tYXNrPlxuXHQgICAgICAgIDxtYXNrIGlkPSdtYXNrLTgnIG1hc2tDb250ZW50VW5pdHM9J3VzZXJTcGFjZU9uVXNlJyBtYXNrVW5pdHM9J29iamVjdEJvdW5kaW5nQm94JyB4PSctMC41JyB5PSctMC41JyB3aWR0aD0nOScgaGVpZ2h0PSc5Jz5cblx0ICAgICAgICAgICAgPHJlY3QgeD0nNS41JyB5PScxOC41JyB3aWR0aD0nOScgaGVpZ2h0PSc5JyBmaWxsPSd3aGl0ZSc+PC9yZWN0PlxuXHQgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9JyNwYXRoLTYnIGZpbGw9J2JsYWNrJz48L3VzZT5cblx0ICAgICAgICA8L21hc2s+XG5cdCAgICAgICAgPGNpcmNsZSBpZD0ncGF0aC05JyBjeD0nMTAnIGN5PSczNScgcj0nNCc+PC9jaXJjbGU+XG5cdCAgICAgICAgPG1hc2sgaWQ9J21hc2stMTAnIG1hc2tDb250ZW50VW5pdHM9J3VzZXJTcGFjZU9uVXNlJyBtYXNrVW5pdHM9J29iamVjdEJvdW5kaW5nQm94JyB4PScwJyB5PScwJyB3aWR0aD0nOCcgaGVpZ2h0PSc4JyBmaWxsPSd3aGl0ZSc+XG5cdCAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0nI3BhdGgtOSc+PC91c2U+XG5cdCAgICAgICAgPC9tYXNrPlxuXHQgICAgICAgIDxtYXNrIGlkPSdtYXNrLTExJyBtYXNrQ29udGVudFVuaXRzPSd1c2VyU3BhY2VPblVzZScgbWFza1VuaXRzPSdvYmplY3RCb3VuZGluZ0JveCcgeD0nLTAuNScgeT0nLTAuNScgd2lkdGg9JzknIGhlaWdodD0nOSc+XG5cdCAgICAgICAgICAgIDxyZWN0IHg9JzUuNScgeT0nMzAuNScgd2lkdGg9JzknIGhlaWdodD0nOScgZmlsbD0nd2hpdGUnPjwvcmVjdD5cblx0ICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPScjcGF0aC05JyBmaWxsPSdibGFjayc+PC91c2U+XG5cdCAgICAgICAgPC9tYXNrPlxuXHQgICAgICAgIDxjaXJjbGUgaWQ9J3BhdGgtMTInIGN4PScxMCcgY3k9JzQ2JyByPSc0Jz48L2NpcmNsZT5cblx0ICAgICAgICA8bWFzayBpZD0nbWFzay0xMycgbWFza0NvbnRlbnRVbml0cz0ndXNlclNwYWNlT25Vc2UnIG1hc2tVbml0cz0nb2JqZWN0Qm91bmRpbmdCb3gnIHg9JzAnIHk9JzAnIHdpZHRoPSc4JyBoZWlnaHQ9JzgnIGZpbGw9J3doaXRlJz5cblx0ICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPScjcGF0aC0xMic+PC91c2U+XG5cdCAgICAgICAgPC9tYXNrPlxuXHQgICAgICAgIDxtYXNrIGlkPSdtYXNrLTE0JyBtYXNrQ29udGVudFVuaXRzPSd1c2VyU3BhY2VPblVzZScgbWFza1VuaXRzPSdvYmplY3RCb3VuZGluZ0JveCcgeD0nLTAuNScgeT0nLTAuNScgd2lkdGg9JzknIGhlaWdodD0nOSc+XG5cdCAgICAgICAgICAgIDxyZWN0IHg9JzUuNScgeT0nNDEuNScgd2lkdGg9JzknIGhlaWdodD0nOScgZmlsbD0nd2hpdGUnPjwvcmVjdD5cblx0ICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPScjcGF0aC0xMicgZmlsbD0nYmxhY2snPjwvdXNlPlxuXHQgICAgICAgIDwvbWFzaz5cblx0ICAgIDwvZGVmcz5cblx0ICAgIDxnIGlkPSdQYWdlLTEnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnPlxuXHQgICAgICAgIDxnIGlkPSdIb21lLVNjcmVlbi3igKItaVBob25lLVNFJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtMTY4LjAwMDAwMCwgLTIwMy4wMDAwMDApJz5cblx0ICAgICAgICAgICAgPGcgaWQ9J0hvbWUtU2NyZWVuLeKAoi1pUGhvbmUtNnMtQ29weScgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMC4wMDAwMDAsIDI3LjAwMDAwMCknPlxuXHQgICAgICAgICAgICAgICAgPGcgaWQ9J21pbicgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMTY4LjAwMDAwMCwgMTc2LjAwMDAwMCknPlxuXHQgICAgICAgICAgICAgICAgICAgIDxtYXNrIGlkPSdtYXNrLTInIGZpbGw9J3doaXRlJz5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPScjcGF0aC0xJz48L3VzZT5cblx0ICAgICAgICAgICAgICAgICAgICA8L21hc2s+XG5cdCAgICAgICAgICAgICAgICAgICAgPHVzZSBpZD0nQkcnIGZpbGw9JyNGRkZGRkYnIHhsaW5rOmhyZWY9JyNwYXRoLTEnPjwvdXNlPlxuXHQgICAgICAgICAgICAgICAgICAgIDxnIGlkPSdjaXJjbGUnIG1hc2s9J3VybCgjbWFzay0yKSc+XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIDx1c2Ugc3Ryb2tlPScjRkZGRkZGJyBtYXNrPSd1cmwoI21hc2stNCknIGZpbGw9JyNGRjk1MDAnIGZpbGwtcnVsZT0nZXZlbm9kZCcgeGxpbms6aHJlZj0nI3BhdGgtMyc+PC91c2U+XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIDx1c2Ugc3Ryb2tlPScjRkY5NTAwJyBtYXNrPSd1cmwoI21hc2stNSknIHhsaW5rOmhyZWY9JyNwYXRoLTMnPjwvdXNlPlxuXHQgICAgICAgICAgICAgICAgICAgIDwvZz5cblx0ICAgICAgICAgICAgICAgICAgICA8ZyBpZD0nY2lyY2xlJyBtYXNrPSd1cmwoI21hc2stMiknPlxuXHQgICAgICAgICAgICAgICAgICAgICAgICA8dXNlIHN0cm9rZT0nI0ZGRkZGRicgbWFzaz0ndXJsKCNtYXNrLTcpJyBmaWxsPScjMUJBREY4JyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIHhsaW5rOmhyZWY9JyNwYXRoLTYnPjwvdXNlPlxuXHQgICAgICAgICAgICAgICAgICAgICAgICA8dXNlIHN0cm9rZT0nIzFCQURGOCcgbWFzaz0ndXJsKCNtYXNrLTgpJyB4bGluazpocmVmPScjcGF0aC02Jz48L3VzZT5cblx0ICAgICAgICAgICAgICAgICAgICA8L2c+XG5cdCAgICAgICAgICAgICAgICAgICAgPGcgaWQ9J2NpcmNsZScgbWFzaz0ndXJsKCNtYXNrLTIpJz5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSBzdHJva2U9JyNGRkZGRkYnIG1hc2s9J3VybCgjbWFzay0xMCknIGZpbGw9JyM2M0RBMzgnIGZpbGwtcnVsZT0nZXZlbm9kZCcgeGxpbms6aHJlZj0nI3BhdGgtOSc+PC91c2U+XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIDx1c2Ugc3Ryb2tlPScjNjNEQTM4JyBtYXNrPSd1cmwoI21hc2stMTEpJyB4bGluazpocmVmPScjcGF0aC05Jz48L3VzZT5cblx0ICAgICAgICAgICAgICAgICAgICA8L2c+XG5cdCAgICAgICAgICAgICAgICAgICAgPGcgaWQ9J2NpcmNsZScgbWFzaz0ndXJsKCNtYXNrLTIpJz5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSBzdHJva2U9JyNGRkZGRkYnIG1hc2s9J3VybCgjbWFzay0xMyknIGZpbGw9JyNDQzczRTEnIGZpbGwtcnVsZT0nZXZlbm9kZCcgeGxpbms6aHJlZj0nI3BhdGgtMTInPjwvdXNlPlxuXHQgICAgICAgICAgICAgICAgICAgICAgICA8dXNlIHN0cm9rZT0nI0NDNzNFMScgbWFzaz0ndXJsKCNtYXNrLTE0KScgeGxpbms6aHJlZj0nI3BhdGgtMTInPjwvdXNlPlxuXHQgICAgICAgICAgICAgICAgICAgIDwvZz5cblx0ICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0nbGluZScgZmlsbD0nI0FFQUVBRScgbWFzaz0ndXJsKCNtYXNrLTIpJyB4PScxOScgeT0nMTcuNScgd2lkdGg9JzQxJyBoZWlnaHQ9JzAuNSc+PC9yZWN0PlxuXHQgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSdsaW5lJyBmaWxsPScjQUVBRUFFJyBtYXNrPSd1cmwoI21hc2stMiknIHg9JzE5JyB5PSc2JyB3aWR0aD0nNDEnIGhlaWdodD0nMC41Jz48L3JlY3Q+XG5cdCAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9J2xpbmUnIGZpbGw9JyNBRUFFQUUnIG1hc2s9J3VybCgjbWFzay0yKScgeD0nMTknIHk9JzI5JyB3aWR0aD0nNDEnIGhlaWdodD0nMC41Jz48L3JlY3Q+XG5cdCAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9J2xpbmUnIGZpbGw9JyNBRUFFQUUnIG1hc2s9J3VybCgjbWFzay0yKScgeD0nMTknIHk9JzQwJyB3aWR0aD0nNDEnIGhlaWdodD0nMC41Jz48L3JlY3Q+XG5cdCAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9J2xpbmUnIGZpbGw9JyNBRUFFQUUnIG1hc2s9J3VybCgjbWFzay0yKScgeD0nMTknIHk9JzUxLjUnIHdpZHRoPSc0MScgaGVpZ2h0PScwLjUnPjwvcmVjdD5cblx0ICAgICAgICAgICAgICAgIDwvZz5cblx0ICAgICAgICAgICAgPC9nPlxuXHQgICAgICAgIDwvZz5cblx0ICAgIDwvZz5cblx0PC9zdmc+XCJcblx0c3RvY2tzX2FwcDpcIjw/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyc/PlxuXHQ8c3ZnIHdpZHRoPSc2MHB4JyBoZWlnaHQ9JzYwcHgnIHZpZXdCb3g9JzAgMCA2MCA2MCcgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJz5cblx0ICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMzkuMSAoMzE3MjApIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHQgICAgPHRpdGxlPlN0b2NrczwvdGl0bGU+XG5cdCAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0ICAgIDxkZWZzPlxuXHQgICAgICAgIDxwYXRoIGQ9J00zOS4wODE1LDAgQzQ1LjEwNSwwIDQ4LjExNiwwIDUxLjM1ODUsMS4wMjUgQzU0Ljg5ODUsMi4zMTM1IDU3LjY4NjUsNS4xMDE1IDU4Ljk3NSw4LjY0MTUgQzYwLDExLjg4MzUgNjAsMTQuODk1NSA2MCwyMC45MTg1IEw2MCwzOS4wODE1IEM2MCw0NS4xMDUgNjAsNDguMTE2IDU4Ljk3NSw1MS4zNTg1IEM1Ny42ODY1LDU0Ljg5ODUgNTQuODk4NSw1Ny42ODY1IDUxLjM1ODUsNTguOTc0NSBDNDguMTE2LDYwIDQ1LjEwNSw2MCAzOS4wODE1LDYwIEwyMC45MTg1LDYwIEMxNC44OTUsNjAgMTEuODgzNSw2MCA4LjY0MTUsNTguOTc0NSBDNS4xMDE1LDU3LjY4NjUgMi4zMTM1LDU0Ljg5ODUgMS4wMjUsNTEuMzU4NSBDMCw0OC4xMTYgMCw0NS4xMDUgMCwzOS4wODE1IEwwLDIwLjkxODUgQzAsMTQuODk1NSAwLDExLjg4MzUgMS4wMjUsOC42NDE1IEMyLjMxMzUsNS4xMDE1IDUuMTAxNSwyLjMxMzUgOC42NDE1LDEuMDI1IEMxMS44ODM1LDAgMTQuODk1LDAgMjAuOTE4NSwwIEwzOS4wODE1LDAgWicgaWQ9J3BhdGgtMSc+PC9wYXRoPlxuXHQgICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0nNTAlJyB5MT0nMCUnIHgyPSc1MCUnIHkyPScxMDAlJyBpZD0nbGluZWFyR3JhZGllbnQtMyc+XG5cdCAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9JyM0NTQ1NDUnIG9mZnNldD0nMCUnPjwvc3RvcD5cblx0ICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0nIzExMTExMicgb2Zmc2V0PScxMDAlJz48L3N0b3A+XG5cdCAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cblx0ICAgICAgICA8cGF0aCBkPSdNNDEuNSwxNi4wMTEyMTA4IEw0MS41LC0xLjUgTDQxLC0xLjUgTDQxLDE2LjAxMTIxMDggQzQxLjA4MjM0MDUsMTYuMDAzNzkwNyA0MS4xNjU3Mjc2LDE2IDQxLjI1LDE2IEM0MS4zMzQyNzI0LDE2IDQxLjQxNzY1OTUsMTYuMDAzNzkwNyA0MS41LDE2LjAxMTIxMDggWiBNNDEuNSwyMS40ODg3ODkyIEw0MS41LDYzIEw0MSw2MyBMNDEsMjEuNDg4Nzg5MiBDNDEuMDgyMzQwNSwyMS40OTYyMDkzIDQxLjE2NTcyNzYsMjEuNSA0MS4yNSwyMS41IEM0MS4zMzQyNzI0LDIxLjUgNDEuNDE3NjU5NSwyMS40OTYyMDkzIDQxLjUsMjEuNDg4Nzg5MiBaIE00MS4yNSwyMSBDNDIuNDkyNjQwNywyMSA0My41LDE5Ljk5MjY0MDcgNDMuNSwxOC43NSBDNDMuNSwxNy41MDczNTkzIDQyLjQ5MjY0MDcsMTYuNSA0MS4yNSwxNi41IEM0MC4wMDczNTkzLDE2LjUgMzksMTcuNTA3MzU5MyAzOSwxOC43NSBDMzksMTkuOTkyNjQwNyA0MC4wMDczNTkzLDIxIDQxLjI1LDIxIFonIGlkPSdwYXRoLTQnPjwvcGF0aD5cblx0ICAgICAgICA8ZmlsdGVyIHg9Jy01MCUnIHk9Jy01MCUnIHdpZHRoPScyMDAlJyBoZWlnaHQ9JzIwMCUnIGZpbHRlclVuaXRzPSdvYmplY3RCb3VuZGluZ0JveCcgaWQ9J2ZpbHRlci01Jz5cblx0ICAgICAgICAgICAgPGZlT2Zmc2V0IGR4PScwJyBkeT0nMScgaW49J1NvdXJjZUFscGhhJyByZXN1bHQ9J3NoYWRvd09mZnNldE91dGVyMSc+PC9mZU9mZnNldD5cblx0ICAgICAgICAgICAgPGZlQ29sb3JNYXRyaXggdmFsdWVzPScwIDAgMCAwIDAgICAwIDAgMCAwIDAgICAwIDAgMCAwIDAgIDAgMCAwIDAuNSAwJyB0eXBlPSdtYXRyaXgnIGluPSdzaGFkb3dPZmZzZXRPdXRlcjEnPjwvZmVDb2xvck1hdHJpeD5cblx0ICAgICAgICA8L2ZpbHRlcj5cblx0ICAgIDwvZGVmcz5cblx0ICAgIDxnIGlkPSdQYWdlLTEnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnPlxuXHQgICAgICAgIDxnIGlkPSdIb21lLVNjcmVlbi3igKItaVBob25lLVNFJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtMjQ0LjAwMDAwMCwgLTIwMy4wMDAwMDApJz5cblx0ICAgICAgICAgICAgPGcgaWQ9J0hvbWUtU2NyZWVuLeKAoi1pUGhvbmUtNnMtQ29weScgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMC4wMDAwMDAsIDI3LjAwMDAwMCknPlxuXHQgICAgICAgICAgICAgICAgPGcgaWQ9J1N0b2NrcycgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMjQ0LjAwMDAwMCwgMTc2LjAwMDAwMCknPlxuXHQgICAgICAgICAgICAgICAgICAgIDxtYXNrIGlkPSdtYXNrLTInIGZpbGw9J3doaXRlJz5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPScjcGF0aC0xJz48L3VzZT5cblx0ICAgICAgICAgICAgICAgICAgICA8L21hc2s+XG5cdCAgICAgICAgICAgICAgICAgICAgPHVzZSBpZD0nQkcnIGZpbGw9JyMxNDE0MTYnIHhsaW5rOmhyZWY9JyNwYXRoLTEnPjwvdXNlPlxuXHQgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9J00tMC40ODQ4NjMyODEsMzQuMDUzNzEwOSBDLTAuNDg0ODYzMjgxLDM0LjA1MzcxMDkgMS4yNzIzOTIxMSwzNC4wNjQ0Njg2IDMuMTE5Mzg0NzcsMzQuNjMyMDgwMSBDNC43MDc5NDQ5NSwzNS4xMjAyNzEgNi4zMDA5ODE3NiwzNi4yNTIzNzg2IDcuMjMzODg2NzIsMzYuMTk0NTgwMSBDOS4yNTE0NjQ4NCwzNi4wNjk1ODAxIDExLjMzNDQ3MjcsMzUuMzc1OTc2NiAxMS4zMzQ0NzI3LDM1LjM3NTk3NjYgTDE1LjEyMDg0OTYsMzAuNDQ1MDY4NCBMMTguNzI3NTM5MSwzMy41MjYzNjcyIEwyMi40OTQxNDA2LDI0LjYyNDUxMTcgTDI2LjExOTYyODksMzQuMzM2OTE0MSBMMzAuMjUsMzYuODY1OTY2OCBMMzMuOTQ2Nzc3MywzMC4yMDg0OTYxIEwzNy41Mzg1NzQyLDI5LjI3NjEyMyBMNDEuNDMxNjQwNiwxOC4xMzIzMjQyIEw0NS4xNDc0NjA5LDI3LjIwMzM2OTEgTDQ4Ljk0Mzg0NzcsMjQuNjY1NTI3MyBMNTIuNzczNDM3NSwzMS45OTM2NTIzIEw1Ni4zNDIyODUyLDIzLjgxNzM4MjggTDYwLjM0NTcwMzEsMTkuNjU2MjUgTDYwLjM0NTcwMzEsNjAuNDc5MTE2NiBMLTAuMzA0OTg5MzI1LDYwLjQ3OTExNjYgTC0wLjQ4NDg2MzI4MSwzNC4wNTM3MTA5IFonIGlkPSdncmFwaCcgc3Ryb2tlPScjRkZGRkZGJyBzdHJva2Utd2lkdGg9JzAuNzUnIGZpbGw9J3VybCgjbGluZWFyR3JhZGllbnQtMyknIG1hc2s9J3VybCgjbWFzay0yKSc+PC9wYXRoPlxuXHQgICAgICAgICAgICAgICAgICAgIDxnIGlkPSdtYXJrJyBtYXNrPSd1cmwoI21hc2stMiknPlxuXHQgICAgICAgICAgICAgICAgICAgICAgICA8dXNlIGZpbGw9J2JsYWNrJyBmaWxsLW9wYWNpdHk9JzEnIGZpbHRlcj0ndXJsKCNmaWx0ZXItNSknIHhsaW5rOmhyZWY9JyNwYXRoLTQnPjwvdXNlPlxuXHQgICAgICAgICAgICAgICAgICAgICAgICA8dXNlIGZpbGw9JyMwMUE2RjEnIGZpbGwtcnVsZT0nZXZlbm9kZCcgeGxpbms6aHJlZj0nI3BhdGgtNCc+PC91c2U+XG5cdCAgICAgICAgICAgICAgICAgICAgPC9nPlxuXHQgICAgICAgICAgICAgICAgICAgIDxnIGlkPSdTcGFyay1saW5lJyBtYXNrPSd1cmwoI21hc2stMiknIGZpbGw9JyM3Nzc3NzgnPlxuXHQgICAgICAgICAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSg3LjAwMDAwMCwgLTEuNTAwMDAwKScgaWQ9J21hcmsnPlxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgeD0nMCcgeT0nMCcgd2lkdGg9JzAuNScgaGVpZ2h0PSc2NC41Jz48L3JlY3Q+XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCB4PScxMS41JyB5PScwJyB3aWR0aD0nMC41JyBoZWlnaHQ9JzY0LjUnPjwvcmVjdD5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IHg9JzIzJyB5PScwJyB3aWR0aD0nMC41JyBoZWlnaHQ9JzY0LjUnPjwvcmVjdD5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IHg9JzQ1LjUnIHk9JzAnIHdpZHRoPScwLjUnIGhlaWdodD0nNjQuNSc+PC9yZWN0PlxuXHQgICAgICAgICAgICAgICAgICAgICAgICA8L2c+XG5cdCAgICAgICAgICAgICAgICAgICAgPC9nPlxuXHQgICAgICAgICAgICAgICAgPC9nPlxuXHQgICAgICAgICAgICA8L2c+XG5cdCAgICAgICAgPC9nPlxuXHQgICAgPC9nPlxuXHQ8L3N2Zz5cIlxufVxuXG4jIERldmljZSBmcmFtZXNcbmV4cG9ydHMuZnJhbWVzID0gIHtcblxuIyBGdWxsc2NyZWVuXG5cdFwiZnVsbHNjcmVlblwiIDogeyBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCwgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFx0c2NhbGU6MSwgbW9iaWxlOmZhbHNlLCBwbGF0Zm9ybTpcIndlYlwifVxuXG5cdCMgaVBob25lc1xuXHQjIyA1U1xuXHRcImFwcGxlLWlwaG9uZS01cy1zcGFjZS1ncmF5XCI6IHsgaGVpZ2h0OiAxMTM2LCB3aWR0aDogNjQwLFx0c2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXHRcImFwcGxlLWlwaG9uZS01cy1zaWx2ZXJcIjogeyBoZWlnaHQ6IDExMzYsIHdpZHRoOiA2NDAsXHRzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cdFwiYXBwbGUtaXBob25lLTVzLWdvbGRcIjogeyBoZWlnaHQ6IDExMzYsIHdpZHRoOiA2NDAsXHRzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cblx0IyMgNWNcblx0XCJhcHBsZS1pcGhvbmUtNWMtZ3JlZW5cIjogeyBoZWlnaHQ6IDExMzYsIHdpZHRoOiA2NDAsc2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXHRcImFwcGxlLWlwaG9uZS01Yy1ibHVlXCI6IHsgaGVpZ2h0OiAxMTM2LCB3aWR0aDogNjQwLFx0c2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXHRcImFwcGxlLWlwaG9uZS01Yy1yZWRcIjogeyBoZWlnaHQ6IDExMzYsIHdpZHRoOiA2NDAsXHRzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cdFwiYXBwbGUtaXBob25lLTVjLXdoaXRlXCI6IHsgaGVpZ2h0OiAxMTM2LCB3aWR0aDogNjQwLHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblx0XCJhcHBsZS1pcGhvbmUtNWMteWVsbG93XCI6IHsgaGVpZ2h0OiAxMTM2LCB3aWR0aDogNjQwLHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblx0XCJhcHBsZS1pcGhvbmUtNWMtcGlua1wiOiB7IGhlaWdodDogMTEzNiwgd2lkdGg6IDY0MCxcdHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblxuXHQjIyA2c1xuXHRcImFwcGxlLWlwaG9uZS02cy1zcGFjZS1ncmF5XCIgOiB7IGhlaWdodDogMTMzNCwgd2lkdGg6IDc1MCxcdHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblx0XCJhcHBsZS1pcGhvbmUtNnMtc2lsdmVyXCI6IHsgaGVpZ2h0OiAxMzM0LCB3aWR0aDogNzUwLFx0c2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXHRcImFwcGxlLWlwaG9uZS02cy1nb2xkXCI6IHsgaGVpZ2h0OiAxMzM0LCB3aWR0aDogNzUwLFx0c2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXHRcImFwcGxlLWlwaG9uZS02cy1yb3NlLWdvbGRcIjogeyBoZWlnaHQ6IDEzMzQsIHdpZHRoOiA3NTAsXHRzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cblx0IyMgNnMgcGx1c1xuXHRcImFwcGxlLWlwaG9uZS02cy1wbHVzLWdvbGRcIjogeyBoZWlnaHQ6IDIyMDgsIHdpZHRoOiAxMjQyLCBzY2FsZTogMywgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cdFwiYXBwbGUtaXBob25lLTZzLXBsdXMtc2lsdmVyXCI6IHsgaGVpZ2h0OiAyMjA4LCB3aWR0aDogMTI0MixcdHNjYWxlOiAzLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblx0XCJhcHBsZS1pcGhvbmUtNnMtcGx1cy1zcGFjZS1ncmF5XCI6IHsgaGVpZ2h0OiAyMjA4LCB3aWR0aDogMTI0MixcdHNjYWxlOiAzLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblx0XCJhcHBsZS1pcGhvbmUtNnMtcGx1c1wiOiB7IGhlaWdodDogMjIwOCwgd2lkdGg6IDEyNDIsXHRzY2FsZTogMywgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cdFwiYXBwbGUtaXBob25lLTZzLXBsdXMtcm9zZS1nb2xkXCI6IHsgaGVpZ2h0OiAyMjA4LCB3aWR0aDogMTI0MixcdHNjYWxlOiAzLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblxuXHQjIGlQYWRzXG5cblx0IyMgQWlyXG5cdFwiYXBwbGUtaXBhZC1haXItMi1nb2xkXCI6IHsgaGVpZ2h0OiAyMDQ4LCB3aWR0aDogMTUzNixcdHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblx0XCJhcHBsZS1pcGFkLWFpci0yLXNpbHZlclwiOiB7IGhlaWdodDogMjA0OCwgd2lkdGg6IDE1MzYsXHRzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cdFwiYXBwbGUtaXBhZC1haXItMi1zcGFjZS1ncmF5XCI6IHsgaGVpZ2h0OiAyMDQ4LCB3aWR0aDogMTUzNixcdHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblxuXHQjIyBNaW5pXG5cdFwiYXBwbGUtaXBhZC1taW5pLTQtZ29sZFwiOiB7IGhlaWdodDogMjA0OCwgd2lkdGg6IDE1MzYsXHRzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cdFwiYXBwbGUtaXBhZC1taW5pLTQtc3BhY2UtZ3JheVwiOiB7IGhlaWdodDogMjA0OCwgd2lkdGg6IDE1MzYsXHRzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cdFwiYXBwbGUtaXBhZC1taW5pLTQtc2lsdmVyXCI6eyBoZWlnaHQ6IDIwNDgsIHdpZHRoOiAxNTM2LCBzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cblx0IyMgUHJvXG5cdFwiYXBwbGUtaXBhZC1wcm8tZ29sZFwiOiB7IGhlaWdodDogMjczMiwgd2lkdGg6IDIwNDgsIHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblx0XCJhcHBsZS1pcGFkLXByby1zaWx2ZXJcIjogeyBoZWlnaHQ6IDI3MzIsIHdpZHRoOiAyMDQ4LCBzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cdFwiYXBwbGUtaXBhZC1wcm8tc3BhY2UtZ3JheVwiIDogeyBoZWlnaHQ6IDI3MzIsIHdpZHRoOiAyMDQ4LCBzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG59XG5leHBvcnRzLmZyYW1lckZyYW1lcyA9XG5cdDY0MDoyXG5cdDc1MDoyXG5cdDc2ODoyXG5cdDEwODA6M1xuXHQxMjQyOjNcblx0MTQ0MDo0XG5cdDE1MzY6MlxuXG4jIERldmljZSBmcmFtZXNcbmV4cG9ydHMucmVhbERldmljZXMgPVxuXHQzMjA6XG5cdFx0NDgwOlxuXHRcdFx0bmFtZTpcImlwaG9uZVwiXG5cdFx0XHRkaXNwbGF5X25hbWU6XCJpUGhvbmVcIlxuXHRcdFx0d2lkdGg6MzIwXG5cdFx0XHRoZWlnaHQ6NDgwXG5cdFx0XHRzY2FsZToxXG5cdDQ4MDpcblx0XHQ4NTQ6XG5cdFx0XHRuYW1lOlwiQW5kcm9pZCBPbmVcIlxuXHRcdFx0d2lkdGg6NDgwXG5cdFx0XHRoZWlnaHQ6ODU0XG5cdFx0XHRzY2FsZToxLjVcblxuXHQ2NDA6XG5cdFx0OTYwOlxuXHRcdFx0bmFtZTpcImlwaG9uZS01XCJcblx0XHRcdGRpc3BsYXlfbmFtZTpcImlQaG9uZSA0XCJcblx0XHRcdHdpZHRoOjY0MFxuXHRcdFx0aGVpZ2h0Ojk2MFxuXHRcdFx0c2NhbGU6MlxuXHRcdDExMzY6XG5cdFx0XHRuYW1lOlwiaXBob25lLTVcIlxuXHRcdFx0ZGlzcGxheV9uYW1lOlwiaVBob25lIDVcIlxuXHRcdFx0d2lkdGg6NjQwXG5cdFx0XHRoZWlnaHQ6MTEzNlxuXHRcdFx0c2NhbGU6MlxuXHQ3MjA6XG5cdFx0MTI4MDpcblx0XHRcdG5hbWU6XCJYSERQSVwiXG5cdFx0XHR3aWR0aDo3MjBcblx0XHRcdGhlaWdodDoxMjgwXG5cdFx0XHRzY2FsZToyXG5cdDc1MDpcblx0XHQxMTE4OlxuXHRcdFx0bmFtZTpcImlwaG9uZS02c1wiXG5cdFx0XHRkaXNwbGF5X25hbWU6XCJpUGhvbmUgNnNcIlxuXHRcdFx0d2lkdGg6NzUwXG5cdFx0XHRoZWlnaHQ6MTExOFxuXHRcdFx0c2NhbGU6MlxuXHRcdDEzMzQ6XG5cdFx0XHRuYW1lOlwiaXBob25lLTZzXCJcblx0XHRcdGRpc3BsYXlfbmFtZTpcImlQaG9uZSA2c1wiXG5cdFx0XHR3aWR0aDo3NTBcblx0XHRcdGhlaWdodDoxMzM0XG5cdFx0XHRzY2FsZToyXG5cdDc2ODpcblx0XHQxMDI0OlxuXHRcdFx0bmFtZTpcImlwYWRcIlxuXHRcdFx0ZGlzcGxheV9uYW1lOlwiaVBhZFwiXG5cdFx0XHR3aWR0aDo3Njhcblx0XHRcdGhlaWdodDoxMDI0XG5cdFx0XHRzY2FsZToxXG5cdFx0MTI4MDpcblx0XHRcdG5hbWU6XCJOZXh1cyA0XCJcblx0XHRcdHdpZHRoOjc2OFxuXHRcdFx0aGVpZ2h0OjEyODBcblx0XHRcdHNjYWxlOjJcblx0ODAwOlxuXHRcdDEyODA6XG5cdFx0XHRuYW1lOlwiTmV4dXMgN1wiXG5cdFx0XHR3aWR0aDo4MDBcblx0XHRcdGhlaWdodDoxMjgwXG5cdFx0XHRzY2FsZToxXG5cdDEwODA6XG5cdFx0MTkyMDpcblx0XHRcdG5hbWU6XCJYWEhEUElcIlxuXHRcdFx0d2lkdGg6MTA4MFxuXHRcdFx0aGVpZ2h0OjE5MjBcblx0XHRcdHNjYWxlOjNcblx0MTIwMDpcblx0XHQxOTIwOlxuXHRcdFx0bmFtZTpcIk5leHVzIDdcIlxuXHRcdFx0d2lkdGg6MTIwMFxuXHRcdFx0aGVpZ2h0OjE5MjBcblx0XHRcdHNjYWxlOjJcblx0MTI0Mjpcblx0XHQyMjA4OlxuXHRcdFx0bmFtZTpcImlwaG9uZS02cy1wbHVzXCJcblx0XHRcdGRpc3BsYXlfbmFtZTpcImlQaG9uZSA2IFBsdXNcIlxuXHRcdFx0d2lkdGg6MTI0MlxuXHRcdFx0aGVpZ2h0OjIyMDhcblx0XHRcdHNjYWxlOjNcblx0MTMzNDpcblx0XHQ3NTA6XG5cdFx0XHRuYW1lOlwiaXBob25lLTZzXCJcblx0XHRcdGRpc3BsYXlfbmFtZTpcImlQaG9uZSA2c1wiXG5cdFx0XHR3aWR0aDo3NTBcblx0XHRcdGhlaWdodDoxMzM0XG5cdFx0XHRzY2FsZToyXG5cdDE0NDA6XG5cdFx0MjU2MDpcblx0XHRcdG5hbWU6XCJYWFhIRFBJXCJcblx0XHRcdHdpZHRoOjE0NDBcblx0XHRcdGhlaWdodDoyNTYwXG5cdFx0XHRzY2FsZTo0XG5cdDE0NDE6XG5cdFx0MjU2MTpcblx0XHRcdG5hbWU6XCJOZXh1cyA2XCJcblx0XHRcdHdpZHRoOjE0NDBcblx0XHRcdGhlaWdodDoyNTYwXG5cdFx0XHRzY2FsZTo0XG5cdDE1MzY6XG5cdFx0MjA0ODpcblx0XHRcdG5hbWU6XCJpcGFkXCJcblx0XHRcdGRpc3BsYXlfbmFtZTpcImlQYWRcIlxuXHRcdFx0d2lkdGg6MTUzNlxuXHRcdFx0aGVpZ2h0OjIwNDhcblx0XHRcdHNjYWxlOjJcblx0MTYwMDpcblx0XHQyMDU2OlxuXHRcdFx0bmFtZTpcIk5leHVzIDEwXCJcblx0XHRcdHdpZHRoOjE2MDBcblx0XHRcdGhlaWdodDoyMDU2XG5cdFx0XHRzY2FsZToyXG5cdDIyMDg6XG5cdFx0MTI0Mjpcblx0XHRcdG5hbWU6XCJpcGhvbmUtNnMtcGx1c1wiXG5cdFx0XHRkaXNwbGF5X25hbWU6XCJpUGhvbmUgNiBQbHVzXCJcblx0XHRcdHdpZHRoOjEyNDJcblx0XHRcdGhlaWdodDoyMjA4XG5cdFx0XHRzY2FsZTozXG5cdDIwNDg6XG5cdFx0MTUzNjpcblx0XHRcdG5hbWU6XCJOZXh1cyA5XCJcblx0XHRcdHdpZHRoOjIwNDhcblx0XHRcdGhlaWdodDoxNTM2XG5cdFx0XHRzY2FsZToyXG5cdFx0MjczMjpcblx0XHRcdG5hbWU6XCJpcGFkLXByb1wiXG5cdFx0XHRkaXNwbGF5X25hbWU6XCJpUGFkIFByb1wiXG5cdFx0XHR3aWR0aDoyMDQ4XG5cdFx0XHRoZWlnaHQ6MjczMlxuXHRcdFx0c2NhbGU6MlxuXHQyNTYwOlxuXHRcdDE2MDA6XG5cdFx0XHRuYW1lOlwiTmV4dXMgMTBcIlxuXHRcdFx0d2lkdGg6MjU2MFxuXHRcdFx0aGVpZ2h0OjE2MDBcblx0XHRcdHNjYWxlOjJcblx0MjczMjpcblx0XHQyMDQ4OlxuXHRcdFx0bmFtZTpcImlwYWQtcHJvXCJcblx0XHRcdGRpc3BsYXlfbmFtZTpcImlQYWQgUHJvXCJcblx0XHRcdHdpZHRoOjI3MzJcblx0XHRcdGhlaWdodDoyMDQ4XG5cdFx0XHRzY2FsZToyXG4iLCJpb3MgPSByZXF1aXJlICdpb3Mta2l0J1xuXG5leHBvcnRzLmRlZmF1bHRzID1cblx0dGl0bGU6XCJUaXRsZVwiXG5cdGxlZnQ6dW5kZWZpbmVkXG5cdHJpZ2h0OlwiRWRpdFwiXG5cdGJsdXI6dHJ1ZVxuXHRzdXBlckxheWVyOnVuZGVmaW5lZFxuXHR0eXBlOlwibmF2QmFyXCJcblxuZXhwb3J0cy5kZWZhdWx0cy5wcm9wcyA9IE9iamVjdC5rZXlzKGV4cG9ydHMuZGVmYXVsdHMpXG5cbmV4cG9ydHMuY3JlYXRlID0gKGFycmF5KSAtPlxuXHRzZXR1cCA9IGlvcy51dGlscy5zZXR1cENvbXBvbmVudChhcnJheSwgZXhwb3J0cy5kZWZhdWx0cylcblxuXHRiYXIgPSBuZXcgaW9zLlZpZXdcblx0XHRuYW1lOlwibmF2QmFyXCJcblx0XHRjb25zdHJhaW50czpcblx0XHRcdGxlYWRpbmc6MFxuXHRcdFx0dHJhaWxpbmc6MFxuXHRcdFx0dG9wOjBcblx0XHRcdGhlaWdodDo2NFxuXG5cdGJhci5iZyA9IG5ldyBpb3MuVmlld1xuXHRcdHN1cGVyTGF5ZXI6YmFyXG5cdFx0YmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIlxuXHRcdG5hbWU6XCIuYmdcIlxuXHRcdGNvbnN0cmFpbnRzOlxuXHRcdFx0bGVhZGluZzowXG5cdFx0XHR0cmFpbGluZzowXG5cdFx0XHRoZWlnaHQ6NDRcblx0XHRcdGJvdHRvbTowXG5cblx0YmFyLmRpdmlkZXIgPSBuZXcgaW9zLlZpZXdcblx0XHRiYWNrZ3JvdW5kQ29sb3I6XCIjQjJCMkIyXCJcblx0XHRuYW1lOlwiLmRpdmlkZXJcIlxuXHRcdHN1cGVyTGF5ZXI6YmFyLmJnXG5cdFx0Y29uc3RyYWludHM6XG5cdFx0XHRoZWlnaHQ6LjVcblx0XHRcdGJvdHRvbTowXG5cdFx0XHRsZWFkaW5nOjBcblx0XHRcdHRyYWlsaW5nOjBcblxuXHRpZiBzZXR1cC5zdXBlckxheWVyXG5cdFx0c2V0dXAuc3VwZXJMYXllci5hZGRTdWJMYXllcihiYXIpXG5cblx0aWYgc2V0dXAuYmx1clxuXHRcdGJhci5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYmEoMjU1LCAyNTUsIDI1NSwgLjgpXCJcblx0XHRpb3MudXRpbHMuYmdCbHVyKGJhcilcblx0ZWxzZVxuXHRcdGJhci5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMSlcIlxuXHRcdGlvcy51dGlscy5iZ0JsdXIoYmFyKVxuXG5cblx0YmFyLnR5cGUgPSBzZXR1cC50eXBlXG5cblx0Zm9yIGxheWVyIGluIEZyYW1lci5DdXJyZW50Q29udGV4dC5sYXllcnNcblx0XHRpZiBsYXllci50eXBlID09IFwic3RhdHVzQmFyXCJcblx0XHRcdEBzdGF0dXNCYXIgPSBsYXllclxuXHRcdFx0YmFyLnBsYWNlQmVoaW5kKEBzdGF0dXNCYXIpXG5cblxuXHRpZiB0eXBlb2Ygc2V0dXAudGl0bGUgPT0gXCJvYmplY3RcIlxuXHRcdHNldHVwLnRpdGxlID0gc2V0dXAudGl0bGUubGFiZWwuaHRtbFxuXG5cblx0YmFyLnRpdGxlID0gbmV3IGlvcy5UZXh0XG5cdFx0Zm9udFdlaWdodDpcInNlbWlib2xkXCJcblx0XHRzdXBlckxheWVyOmJhci5iZ1xuXHRcdHRleHQ6c2V0dXAudGl0bGVcblx0XHRuYW1lOlwiLnRpdGxlXCJcblx0XHRjb25zdHJhaW50czpcblx0XHRcdGFsaWduOlwiaG9yaXpvbnRhbFwiXG5cdFx0XHRib3R0b206MTJcblxuXHRpb3MudXRpbHMuc3BlY2lhbENoYXIoYmFyLnRpdGxlKVxuXG5cdCMgSGFuZGxlIFJpZ2h0XG5cdGlmIHR5cGVvZiBzZXR1cC5yaWdodCA9PSBcInN0cmluZ1wiICYmIHR5cGVvZiBzZXR1cC5yaWdodCAhPSBcImJvb2xlYW5cIlxuXHRcdGJhci5yaWdodCA9IG5ldyBpb3MuQnV0dG9uXG5cdFx0XHRuYW1lOlwiLnJpZ2h0XCJcblx0XHRcdHN1cGVyTGF5ZXI6YmFyLmJnXG5cdFx0XHR0ZXh0OnNldHVwLnJpZ2h0XG5cdFx0XHRmb250V2VpZ2h0OjUwMFxuXHRcdFx0Y29uc3RyYWludHM6XG5cdFx0XHRcdGJvdHRvbToxMlxuXHRcdFx0XHR0cmFpbGluZzo4XG5cdFx0YmFyLnJpZ2h0LnR5cGUgPSBcImJ1dHRvblwiXG5cdFx0aW9zLnV0aWxzLnNwZWNpYWxDaGFyKGJhci5yaWdodClcblx0aWYgdHlwZW9mIHNldHVwLnJpZ2h0ID09IFwib2JqZWN0XCJcblx0XHRiYXIucmlnaHQgPSBzZXR1cC5yaWdodFxuXHRcdGJhci5yaWdodC5uYW1lID0gXCIucmlnaHRcIlxuXHRcdGJhci5yaWdodC5zdXBlckxheWVyID0gYmFyLmJnXG5cdFx0YmFyLnJpZ2h0LmNvbnN0cmFpbnRzID1cblx0XHRcdHRyYWlsaW5nOjhcblx0XHRcdGJvdHRvbToxMlxuXHRcdGlvcy5sYXlvdXQuc2V0KGJhci5yaWdodClcblxuXHQjIEhhbmRsZSBMZWZ0XG5cdGlmIHR5cGVvZiBzZXR1cC5sZWZ0ID09IFwic3RyaW5nXCIgJiYgdHlwZW9mIHNldHVwLmxlZnQgIT0gXCJib29sZWFuXCJcblx0XHRzZXRMZWFkaW5nID0gOFxuXHRcdGlmIHNldHVwLmxlZnQuaW5kZXhPZihcIjxcIikgIT0gLTFcblx0XHRcdHN2ZyA9IGlvcy51dGlscy5zdmcoaW9zLmFzc2V0cy5jaGV2cm9uKVxuXHRcdFx0YmFyLmNoZXZyb24gPSBuZXcgaW9zLlZpZXdcblx0XHRcdFx0bmFtZTpcIi5jaGV2cm9uXCJcblx0XHRcdFx0d2lkdGg6c3ZnLndpZHRoXG5cdFx0XHRcdGhlaWdodDpzdmcuaGVpZ2h0XG5cdFx0XHRcdGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCJcblx0XHRcdFx0c3VwZXJMYXllcjpiYXIuYmdcblx0XHRcdGJhci5jaGV2cm9uLmh0bWwgPSBzdmcuc3ZnXG5cdFx0XHRiYXIuY2hldnJvbi5jb25zdHJhaW50cyA9XG5cdFx0XHRcdFx0Ym90dG9tOjlcblx0XHRcdFx0XHRsZWFkaW5nOjhcblx0XHRcdHNldHVwLmxlZnQgPSBzZXR1cC5sZWZ0LnJlcGxhY2UoXCI8XCIsIFwiXCIpXG5cdFx0XHRzZXRMZWFkaW5nID0gW2Jhci5jaGV2cm9uLCA0XVxuXHRcdFx0aW9zLmxheW91dC5zZXQoYmFyLmNoZXZyb24pXG5cblx0XHRiYXIubGVmdCA9IG5ldyBpb3MuQnV0dG9uXG5cdFx0XHRuYW1lOlwiLmxlZnRcIlxuXHRcdFx0c3VwZXJMYXllcjpiYXIuYmdcblx0XHRcdHRleHQ6c2V0dXAubGVmdFxuXHRcdFx0Zm9udFdlaWdodDo1MDBcblx0XHRcdGNvbnN0cmFpbnRzOlxuXHRcdFx0XHRib3R0b206MTJcblx0XHRcdFx0bGVhZGluZzpzZXRMZWFkaW5nXG5cdFx0YmFyLmxlZnQudHlwZSA9IFwiYnV0dG9uXCJcblx0XHRpb3MudXRpbHMuc3BlY2lhbENoYXIoYmFyLmxlZnQpXG5cblx0XHRiYXIubGVmdC5vbiBFdmVudHMuVG91Y2hTdGFydCwgLT5cblx0XHRcdGlmIGJhci5jaGV2cm9uXG5cdFx0XHRcdGJhci5jaGV2cm9uLmFuaW1hdGVcblx0XHRcdFx0XHRwcm9wZXJ0aWVzOihvcGFjaXR5Oi4yNSlcblx0XHRcdFx0XHR0aW1lOi41XG5cdFx0YmFyLmxlZnQub24gRXZlbnRzLlRvdWNoRW5kLCAtPlxuXHRcdFx0aWYgYmFyLmNoZXZyb25cblx0XHRcdFx0YmFyLmNoZXZyb24uYW5pbWF0ZVxuXHRcdFx0XHRcdHByb3BlcnRpZXM6KG9wYWNpdHk6MSlcblx0XHRcdFx0XHR0aW1lOi41XG5cblx0aWYgdHlwZW9mIHNldHVwLmxlZnQgPT0gXCJvYmplY3RcIlxuXHRcdGJhci5sZWZ0ID0gc2V0dXAubGVmdFxuXHRcdGJhci5sZWZ0Lm5hbWUgPSBcIi5sZWZ0XCJcblx0XHRiYXIubGVmdC5zdXBlckxheWVyID0gYmFyLmJnXG5cdFx0YmFyLmxlZnQuY29uc3RyYWludHMgPVxuXHRcdFx0bGVhZGluZzo4XG5cdFx0XHRib3R0b206MTJcblxuXHRpb3MubGF5b3V0LnNldChiYXIubGVmdClcblx0cmV0dXJuIGJhclxuIiwiaW9zID0gcmVxdWlyZSAnaW9zLWtpdCdcblxuZXhwb3J0cy5kZWZhdWx0cyA9IHtcblx0YWN0aW9uczpbXCJSZXBseVwiLCBcIlJlcGx5IEFsbFwiLCBcIkZvcndhcmRcIiwgXCJQcmludFwiXVxuXHRleGl0OlwiQ2FuY2VsXCJcblx0YW5pbWF0ZWQ6dHJ1ZVxuXHRkZXNjcmlwdGlvbjp1bmRlZmluZWRcblx0dGFyZ2V0OnVuZGVmaW5lZFxufVxuXG5leHBvcnRzLmRlZmF1bHRzLnByb3BzID0gT2JqZWN0LmtleXMoZXhwb3J0cy5kZWZhdWx0cylcblxuZXhwb3J0cy5jcmVhdGUgPSAoYXJyYXkpIC0+XG5cdHNldHVwID0gaW9zLnV0aWxzLnNldHVwQ29tcG9uZW50KGFycmF5LCBleHBvcnRzLmRlZmF1bHRzKVxuXHRmb3IgbCBpbiBGcmFtZXIuQ3VycmVudENvbnRleHQubGF5ZXJzXG5cdFx0aWYgbC50eXBlID09ICdzaGVldCdcblx0XHRcdGwuZGlzbWlzcygpXG5cblx0c2hlZXQgPSBuZXcgaW9zLlZpZXdcblx0XHRuYW1lOlwic2hlZXRcIlxuXHRcdGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCJcblx0XHRjb25zdHJhaW50czpcblx0XHRcdHRvcDowXG5cdFx0XHRsZWFkaW5nOjBcblx0XHRcdHRyYWlsaW5nOjBcblx0XHRcdGJvdHRvbTowXG5cblx0c2hlZXQudHlwZSA9ICdzaGVldCdcblxuXHRzaGVldC5tZW51ID0gbmV3IExheWVyXG5cdFx0bmFtZTpcIm1lbnVcIlxuXHRcdHN1cGVyTGF5ZXI6c2hlZXRcblx0XHRiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiXG5cdFx0Ym9yZGVyUmFkaXVzOmlvcy5weCgxMilcblx0XHRjbGlwOnRydWVcblxuXHRcdGlmIGlvcy5pc1BhZCgpXG5cdFx0XHRzaGVldFRpcCA9IGlvcy51dGlscy5zdmcoaW9zLmFzc2V0cy5zaGVldFRpcClcblx0XHRcdHNoZWV0LnRpcCA9IG5ldyBpb3MuVmlld1xuXHRcdFx0XHRuYW1lOicudGlwJ1xuXHRcdFx0XHRjb2xvcjonYmxhY2snXG5cdFx0XHRcdHN1cGVyTGF5ZXI6c2hlZXRcblx0XHRcdFx0aHRtbDpzaGVldFRpcC5zdmdcblx0XHRcdFx0aGVpZ2h0OnNoZWV0VGlwLmhlaWdodCAtIDRcblx0XHRcdFx0d2lkdGg6c2hlZXRUaXAud2lkdGhcblx0XHRcdFx0YmFja2dyb3VuZENvbG9yOid0cmFuc3BhcmVudCdcblx0XHRcdFx0Y29uc3RyYWludHM6XG5cdFx0XHRcdFx0aG9yaXpvbnRhbENlbnRlcjpzZXR1cC50YXJnZXRcblx0XHRcdHNoZWV0LmxpbmtlZCA9IHNldHVwLnRhcmdldFxuXHRcdFx0c2hlZXQubGlua2VkLmlnbm9yZUV2ZW50cyA9IHRydWVcblxuXHRwbGFjZSA9ICh0LCBsKS0+XG5cdFx0dyA9IGlvcy5kZXZpY2Uud2lkdGhcblx0XHRoID0gaW9zLmRldmljZS5oZWlnaHRcblx0XHRjZW50ZXJYID0gdy8yXG5cdFx0IyB4IC0gYXhpc1xuXHRcdGlmIHcgLSB0LnggPiBjZW50ZXJYICNsZWZ0XG5cdFx0XHRpZiB0LnggLSBpb3MucHgoMTUwKSA8IDBcblx0XHRcdFx0bC5jb25zdHJhaW50cy5sZWFkaW5nID0gMTBcblx0XHRcdGVsc2Vcblx0XHRcdFx0bC5jb25zdHJhaW50cy5ob3Jpem9udGFsQ2VudGVyID0gdFxuXG5cdFx0ZWxzZSAjcmlnaHRcblx0XHRcdGlmIHQueCArIGlvcy5weCgxNTApID4gd1xuXHRcdFx0XHRsLmNvbnN0cmFpbnRzLnRyYWlsaW5nID0gMTBcblx0XHRcdGVsc2Vcblx0XHRcdFx0bC5jb25zdHJhaW50cy5ob3Jpem9udGFsQ2VudGVyID0gdFxuXG5cdFx0aWYgdC55ICsgbC5oZWlnaHQgPCBoICN0b3Bcblx0XHRcdFx0bC5jb25zdHJhaW50cy50b3AgPSBbdCwgNDBdXG5cdFx0XHRcdGlmIGlvcy5pc1BhZCgpXG5cdFx0XHRcdFx0c2hlZXQudGlwLmNvbnN0cmFpbnRzLmJvdHRvbSA9IFtsLCAxXVxuXHRcdGVsc2UgI2JvdHRvbVxuXHRcdFx0XHRsLmNvbnN0cmFpbnRzLmJvdHRvbSA9IFt0LCA0MF1cblx0XHRcdFx0aWYgaW9zLmlzUGFkKClcblx0XHRcdFx0XHRzaGVldC50aXAuY29uc3RyYWludHMudG9wID0gW2wsIDFdXG5cdFx0XHRcdFx0c2hlZXQudGlwLnJvdGF0aW9uID0gMTgwXG5cdFx0aWYgaW9zLmlzUGFkKClcblx0XHRcdGlvcy5sYXlvdXQuc2V0KHNoZWV0LnRpcClcblx0c2hlZXQuZGlzbWlzcyA9IC0+XG5cblx0XHRpZiBpb3MuaXNQaG9uZSgpXG5cdFx0XHRzaGVldC5tZW51LmFuaW1hdGVcblx0XHRcdFx0cHJvcGVydGllczpcblx0XHRcdFx0XHR5Omlvcy5kZXZpY2UuaGVpZ2h0XG5cdFx0XHRcdHRpbWU6LjI1XG5cblx0XHRcdHNoZWV0LmNhbmNlbC5hbmltYXRlXG5cdFx0XHRcdHByb3BlcnRpZXM6XG5cdFx0XHRcdFx0eTppb3MuZGV2aWNlLmhlaWdodCArIGlvcy5weCg3NSlcblx0XHRcdFx0dGltZTouMjVcblx0XHRcdHNoZWV0Lm92ZXJsYXkuYW5pbWF0ZVxuXHRcdFx0XHRwcm9wZXJ0aWVzOlxuXHRcdFx0XHRcdG9wYWNpdHk6MFxuXHRcdFx0XHR0aW1lOi4yNVxuXHRcdFx0VXRpbHMuZGVsYXkgLjI1LCAtPlxuXHRcdFx0XHRzaGVldC5kZXN0cm95KClcblx0XHRlbHNlXG5cdFx0XHRzaGVldC5saW5rZWQuaWdub3JlRXZlbnRzID0gZmFsc2Vcblx0XHRcdFV0aWxzLmRlbGF5IC4xNSwgLT5cblx0XHRcdFx0c2hlZXQuZGVzdHJveSgpXG5cblxuXHRzaGVldC5jYWxsID0gLT5cblx0XHRpZiBpb3MuaXNQaG9uZSgpXG5cdFx0XHRzaGVldC5tZW51LnkgPSBpb3MuZGV2aWNlLmhlaWdodFxuXHRcdFx0c2hlZXQuY2FuY2VsLnkgPSBpb3MuZGV2aWNlLmhlaWdodCArIGlvcy5weCg3NSlcblx0XHRcdHNoZWV0Lm92ZXJsYXkub3BhY2l0eSA9IDBcblxuXHRcdFx0c2hlZXQub3ZlcmxheS5hbmltYXRlXG5cdFx0XHRcdHByb3BlcnRpZXM6XG5cdFx0XHRcdFx0b3BhY2l0eTouNVxuXHRcdFx0XHR0aW1lOi4yNVxuXHRcdFx0aW9zLmxheW91dC5hbmltYXRlXG5cdFx0XHRcdHRhcmdldDpbc2hlZXQubWVudSwgc2hlZXQuY2FuY2VsXVxuXHRcdFx0XHR0aW1lOi4yNVxuXHRcdGVsc2Vcblx0XHRcdHBsYWNlKHNldHVwLnRhcmdldCwgc2hlZXQubWVudSlcblx0XHRcdGlvcy5sYXlvdXQuc2V0KHNoZWV0Lm1lbnUpXG5cblxuXG5cdGlmIGlvcy5kZXZpY2UubmFtZS5pbmRleE9mKFwiaXBhZFwiKSA9PSAtMVxuXHRcdHNoZWV0Lm92ZXJsYXkgPSBuZXcgaW9zLlZpZXdcblx0XHRcdG5hbWU6XCIub3ZlcmxheVwiXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6XCJibGFja1wiXG5cdFx0XHRvcGFjaXR5Oi41XG5cdFx0XHRzdXBlckxheWVyOnNoZWV0XG5cdFx0XHRjb25zdHJhaW50czpcblx0XHRcdFx0dG9wOjBcblx0XHRcdFx0bGVhZGluZzowXG5cdFx0XHRcdHRyYWlsaW5nOjBcblx0XHRcdFx0Ym90dG9tOjBcblx0XHRzaGVldC5vdmVybGF5LnNlbmRUb0JhY2soKVxuXG5cdFx0c2hlZXQubWVudS5jb25zdHJhaW50cyA9XG5cdFx0XHRsZWFkaW5nOjEwXG5cdFx0XHR0cmFpbGluZzoxMFxuXHRcdFx0Ym90dG9tOjU3ICsgOCArIDEwXG5cdFx0XHRoZWlnaHQ6KHNldHVwLmFjdGlvbnMubGVuZ3RoKSAqIDU3XG5cblx0XHRzaGVldC5jYW5jZWwgPSBuZXcgaW9zLkJ1dHRvblxuXHRcdFx0bmFtZTpcIi5jYW5jZWxcIlxuXHRcdFx0dHlwZTpcImJpZ1wiXG5cdFx0XHR0ZXh0OnNldHVwLmV4aXRcblx0XHRcdHN1cGVyTGF5ZXI6c2hlZXRcblx0XHRcdGNvbnN0cmFpbnRzOlxuXHRcdFx0XHRib3R0b206MTBcblx0XHRcdFx0bGVhZGluZzowXG5cdFx0XHRcdHRyYWlsaW5nOjBcblx0XHRzaGVldC5jYW5jZWwub24gRXZlbnRzLlRvdWNoRW5kLCAtPlxuXHRcdFx0c2hlZXQuZGlzbWlzcygpXG5cdGVsc2Vcblx0XHRzaGVldC5tZW51LmNvbnN0cmFpbnRzID1cblx0XHRcdHdpZHRoOjMwMFxuXHRcdFx0aGVpZ2h0OihzZXR1cC5hY3Rpb25zLmxlbmd0aCkgKiA1N1xuXG5cdFx0c2hlZXQubWVudS5wcm9wcyA9XG5cdFx0XHRzaGFkb3dZOjJcblx0XHRcdHNoYWRvd0JsdXI6aW9zLnB4KDEwMClcblx0XHRcdHNoYWRvd0NvbG9yOlwicmdiYSgwLDAsMCwwLjEpXCJcblxuXHRpb3MubGF5b3V0LnNldChzaGVldClcblxuXHRzaGVldC5hY3Rpb25zQXJyYXkgPSBbXVxuXHRzaGVldC5hY3Rpb25zID0ge31cblx0Zm9yIGEsaSBpbiBzZXR1cC5hY3Rpb25zXG5cdFx0YWN0aW9uID0gbmV3IGlvcy5WaWV3XG5cdFx0XHRuYW1lOiBcIi5hY3Rpb25zLltcXFwiXCIgKyBhLnRvTG93ZXJDYXNlKCkgKyBcIlxcXCJdXCJcblx0XHRcdGJhY2tncm91bmRDb2xvcjpcInJnYmEoMjU1LDI1NSwyNTUsMSlcIlxuXHRcdFx0c3VwZXJMYXllcjpzaGVldC5tZW51XG5cdFx0XHRjb25zdHJhaW50czpcblx0XHRcdFx0bGVhZGluZzowXG5cdFx0XHRcdHRyYWlsaW5nOjBcblx0XHRcdFx0aGVpZ2h0OjU3XG5cdFx0YWN0aW9uLnN0eWxlW1wiLXdlYmtpdC1ib3gtc2hhZG93XCJdID0gXCJpbnNldCAwIDAgXCIgKyBpb3MucHgoLjUpICsgXCJweCByZ2JhKDAsMCwwLC4yNSlcIlxuXG5cdFx0YWN0aW9uLmxhYmVsID0gbmV3IGlvcy5UZXh0XG5cdFx0XHR0ZXh0OmFcblx0XHRcdGNvbG9yOmlvcy5jb2xvcihcImJsdWVcIilcblx0XHRcdGZvbnRTaXplOjIwXG5cdFx0XHRzdXBlckxheWVyOmFjdGlvblxuXHRcdFx0Y29uc3RyYWludHM6XG5cdFx0XHRcdGFsaWduOlwiY2VudGVyXCJcblxuXHRcdGlvcy51dGlscy5zcGVjaWFsQ2hhcihhY3Rpb24ubGFiZWwpXG5cblx0XHRpZiBpID09IDBcblx0XHRcdGFjdGlvbi5jb25zdHJhaW50cy50b3AgPSAwXG5cdFx0ZWxzZVxuXHRcdFx0YWN0aW9uLmNvbnN0cmFpbnRzLnRvcCA9IHNoZWV0LmFjdGlvbnNBcnJheVtpIC0gMV1cblxuXHRcdGFjdGlvbi5vbiBFdmVudHMuVG91Y2hTdGFydCwgLT5cblx0XHRcdEAuYW5pbWF0ZVxuXHRcdFx0XHRwcm9wZXJ0aWVzOlxuXHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjpALmJhY2tncm91bmRDb2xvci5kYXJrZW4oMTApXG5cdFx0XHRcdFx0dGltZTouMlxuXG5cdFx0YWN0aW9uLm9uIEV2ZW50cy5Ub3VjaEVuZCwgLT5cblx0XHRcdEAuYW5pbWF0ZVxuXHRcdFx0XHRwcm9wZXJ0aWVzOlxuXHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjpcInJnYmEoMjU1LDI1NSwyNTUsIC44KVwiXG5cdFx0XHRcdHRpbWU6LjJcblx0XHRcdHNoZWV0LmRpc21pc3MoKVxuXG5cblxuXHRcdGlvcy5sYXlvdXQuc2V0KGFjdGlvbilcblxuXHRcdHNoZWV0LmFjdGlvbnNBcnJheS5wdXNoIGFjdGlvblxuXHRcdHNoZWV0LmFjdGlvbnNbYS50b0xvd2VyQ2FzZSgpXSA9IGFjdGlvblxuXG5cblx0aWYgc2V0dXAuYW5pbWF0ZWRcblx0XHRzaGVldC5jYWxsKClcblx0aWYgaW9zLmlzUGFkKClcblx0XHRzaGVldC50aXAuYnJpbmdUb0Zyb250KClcblx0cmV0dXJuIHNoZWV0XG4iLCJpb3MgPSByZXF1aXJlICdpb3Mta2l0J1xuXG5leHBvcnRzLmRlZmF1bHRzID0ge1xuXHRjYXJyaWVyOlwiXCJcblx0bmV0d29yazpcIkxURVwiXG5cdGJhdHRlcnk6MTAwXG5cdHNpZ25hbDo1XG5cdHN0eWxlOlwiZGFya1wiXG5cdGNsb2NrMjQ6ZmFsc2Vcblx0dHlwZTpcInN0YXR1c0JhclwiXG5cdHN1cGVyTGF5ZXI6dW5kZWZpbmVkXG59XG5cbmV4cG9ydHMuZGVmYXVsdHMucHJvcHMgPSBPYmplY3Qua2V5cyhleHBvcnRzLmRlZmF1bHRzKVxuXG5leHBvcnRzLmNyZWF0ZSA9IChhcnJheSkgLT5cblx0c2V0dXAgPSBpb3MudXRpbHMuc2V0dXBDb21wb25lbnQoYXJyYXksIGV4cG9ydHMuZGVmYXVsdHMpXG5cdHN0YXR1c0JhciA9IG5ldyBMYXllclxuXHRcdGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCJcblx0XHRuYW1lOlwic3RhdHVzQmFyLmFsbFwiXG5cdFx0c3VwZXJMYXllcjpzZXR1cC5zdXBlckxheWVyXG5cdHN0YXR1c0Jhci50eXBlID0gc2V0dXAudHlwZVxuXHRzdGF0dXNCYXIuY29uc3RyYWludHMgPVxuXHRcdGxlYWRpbmc6MFxuXHRcdHRyYWlsaW5nOjBcblx0XHRoZWlnaHQ6MjBcblxuXHRzd2l0Y2ggaW9zLmRldmljZS5uYW1lXG5cdFx0d2hlbiBcImlwaG9uZS02cy1wbHVzXCJcblx0XHRcdEB0b3BDb25zdHJhaW50ID0gNVxuXHRcdFx0QGJhdHRlcnlJY29uID0gNVxuXHRcdFx0QGJsdWV0b290aCA9IDVcblxuXHRcdHdoZW4gXCJmdWxsc2NyZWVuXCJcblx0XHRcdEB0b3BDb25zdHJhaW50ID0gNVxuXHRcdFx0QGJhdHRlcnlJY29uID0gLSAxMlxuXHRcdFx0QGJsdWV0b290aCA9IC0gMTBcblx0XHRlbHNlXG5cdFx0XHRAdG9wQ29uc3RyYWludCA9IDNcblx0XHRcdEBiYXR0ZXJ5SWNvbiA9IDJcblx0XHRcdEBibHVldG9vdGggPSAzXG5cblx0aWYgc2V0dXAuc3R5bGUgPT0gXCJsaWdodFwiXG5cdFx0QGNvbG9yID0gXCJ3aGl0ZVwiXG5cdGVsc2Vcblx0XHRAY29sb3IgPSBcImJsYWNrXCJcblx0Zm9yIGxheWVyIGluIEZyYW1lci5DdXJyZW50Q29udGV4dC5sYXllcnNcblx0XHRpZiBsYXllci50eXBlID09IFwibG9ja1NjcmVlblwiXG5cdFx0XHRAaXNMb2NrU2NyZWVuUHV0aWxzZW50ID0gdHJ1ZVxuXHRpZiBAaXNMb2NrU2NyZWVuUHV0aWxzZW50XG5cdFx0Z3JpcHBlciA9IG5ldyBMYXllciBzdXBlckxheWVyOnN0YXR1c0Jhciwgd2lkdGg6dXRpbHMucHgoMzcpLCBoZWlnaHQ6dXRpbHMucHgoNSksIG5hbWU6XCJncmlwcGVyXCIsIGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCIsIG9wYWNpdHk6LjUsIG5hbWU6XCJncmlwcGVyXCJcblx0XHRncmlwcGVyLmh0bWwgPSBcIjw/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyc/PlxuXHRcdFx0PHN2ZyB3aWR0aD0nI3t1dGlscy5weCgzNyl9cHgnIGhlaWdodD0nI3t1dGlscy5weCg1KX1weCcgdmlld0JveD0nMCAwIDM3IDUnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayc+XG5cdFx0XHRcdDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy42LjEgKDI2MzEzKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHRcdFx0PHRpdGxlPkdyaXBwZXI8L3RpdGxlPlxuXHRcdFx0XHQ8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHRcdFx0PGRlZnM+PC9kZWZzPlxuXHRcdFx0XHQ8ZyBpZD0nUGFnZS0xJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJz5cblx0XHRcdFx0XHQ8ZyBpZD0nS2V5Ym9hcmQvQXV0by1Db21wbGV0ZS1CYXItQ2xvc2VkJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtMTY5LjAwMDAwMCwgLTIuMDAwMDAwKScgZmlsbD0nI0ZGRkZGRic+XG5cdFx0XHRcdFx0XHQ8cmVjdCBpZD0nR3JpcHBlcicgeD0nMTY5LjUnIHk9JzIuNScgd2lkdGg9JzM2JyBoZWlnaHQ9JzQnIHJ4PScyLjUnPjwvcmVjdD5cblx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdDwvZz5cblx0XHRcdDwvc3ZnPlwiXG5cdFx0Z3JpcHBlci5jb25zdHJhaW50cyA9XG5cdFx0XHRhbGlnbjpcImhvcml6b250YWxcIlxuXHRcdFx0dG9wOjJcblx0ZWxzZVxuXHRcdEB0aW1lID0gaW9zLnV0aWxzLmdldFRpbWUoKVxuXHRcdGlmIHNldHVwLmNsb2NrMjQgPT0gZmFsc2Vcblx0XHRcdGlmIEB0aW1lLmhvdXJzID4gMTFcblx0XHRcdFx0QHRpbWUuc3RhbXAgPSBcIlBNXCJcblx0XHRcdGVsc2Vcblx0XHRcdFx0QHRpbWUuc3RhbXAgPSBcIkFNXCJcblx0XHRlbHNlXG5cdFx0XHRAdGltZS5zdGFtcCA9IFwiXCJcblx0XHR0aW1lID0gbmV3IGlvcy5UZXh0IHN0eWxlOlwic3RhdHVzQmFyVGltZVwiLCB0ZXh0Omlvcy51dGlscy50aW1lRm9ybWF0dGVyKEB0aW1lLCBzZXR1cC5jbG9jazI0KSArIFwiIFwiICsgQHRpbWUuc3RhbXAsIGZvbnRTaXplOjEyLCBmb250V2VpZ2h0Olwic2VtaWJvbGRcIiwgc3VwZXJMYXllcjpzdGF0dXNCYXIsIGNvbG9yOkBjb2xvciwgbmFtZTpcInRpbWVcIlxuXHRcdHRpbWUuY29uc3RyYWludHMgPVxuXHRcdFx0YWxpZ246XCJob3Jpem9udGFsXCJcblx0XHRcdHRvcDpAdG9wQ29uc3RyYWludFxuXHRzaWduYWwgPSBbXVxuXHRpZiBzZXR1cC5zaWduYWwgPCAxXG5cdFx0bm9OZXR3b3JrID0gbmV3IGlvcy5UZXh0IHN1cGVyTGF5ZXI6c3RhdHVzQmFyLCBmb250U2l6ZToxMiwgdGV4dDpcIk5vIE5ldHdvcmtcIlxuXHRcdG5vTmV0d29yay5jb25zdHJhaW50cyA9XG5cdFx0XHRsZWFkaW5nOjdcblx0XHRcdHRvcDozXG5cdGVsc2Vcblx0XHRmb3IgaSBpbiBbMC4uLnNldHVwLnNpZ25hbF1cblx0XHRcdGRvdCA9IG5ldyBMYXllciBoZWlnaHQ6aW9zLnV0aWxzLnB4KDUuNSksIHdpZHRoOmlvcy51dGlscy5weCg1LjUpLCBiYWNrZ3JvdW5kQ29sb3I6XCJibGFja1wiLCBzdXBlckxheWVyOnN0YXR1c0JhciwgYm9yZGVyUmFkaXVzOmlvcy51dGlscy5weCg1LjUpLzIsIGJhY2tncm91bmRDb2xvcjpAY29sb3IsIG5hbWU6XCJzaWduYWxbI3tpfV1cIlxuXHRcdFx0aWYgaSA9PSAwXG5cdFx0XHRcdGRvdC5jb25zdHJhaW50cyA9XG5cdFx0XHRcdFx0bGVhZGluZzo3XG5cdFx0XHRcdFx0dG9wOjdcblx0XHRcdGVsc2Vcblx0XHRcdFx0ZG90LmNvbnN0cmFpbnRzID1cblx0XHRcdFx0XHRsZWFkaW5nOltzaWduYWxbaSAtIDEgXSwgMV1cblx0XHRcdFx0XHR0b3A6N1xuXHRcdFx0c2lnbmFsLnB1c2ggZG90XG5cdFx0XHRpb3MubGF5b3V0LnNldCgpXG5cdFx0aWYgc2V0dXAuc2lnbmFsIDwgNVxuXHRcdFx0bm9uRG90cyA9IDUgLSBzZXR1cC5zaWduYWxcblx0XHRcdGZvciBpIGluIFswLi4ubm9uRG90c11cblx0XHRcdFx0bm9uRG90ID0gbmV3IExheWVyIGhlaWdodDppb3MudXRpbHMucHgoNS41KSwgd2lkdGg6aW9zLnV0aWxzLnB4KDUuNSksIHN1cGVyTGF5ZXI6c3RhdHVzQmFyLCBib3JkZXJSYWRpdXM6aW9zLnV0aWxzLnB4KDUuNSkvMiwgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIiwgbmFtZTpcInNpZ25hbFsje3NpZ25hbC5sZW5ndGh9XVwiXG5cdFx0XHRcdG5vbkRvdC5zdHlsZS5ib3JkZXIgPSBcIiN7aW9zLnV0aWxzLnB4KDEpfXB4IHNvbGlkICN7QGNvbG9yfVwiXG5cdFx0XHRcdG5vbkRvdC5jb25zdHJhaW50cyA9XG5cdFx0XHRcdFx0bGVhZGluZzpbc2lnbmFsW3NpZ25hbC5sZW5ndGggLSAxXSwgMV1cblx0XHRcdFx0XHR0b3A6N1xuXHRcdFx0XHRzaWduYWwucHVzaCBub25Eb3Rcblx0XHRcdFx0aW9zLmxheW91dC5zZXQoKVxuXHRcdGNhcnJpZXIgPSBuZXcgaW9zLlRleHQgc3R5bGU6XCJzdGF0dXNCYXJDYXJyaWVyXCIsIHRleHQ6c2V0dXAuY2Fycmllciwgc3VwZXJMYXllcjpzdGF0dXNCYXIsIGZvbnRTaXplOjEyLCBjb2xvcjpAY29sb3IsIG5hbWU6XCJjYXJyaWVyXCIsIHRleHRUcmFuc2Zvcm06XCJjYXBpdGFsaXplXCJcblx0XHRjYXJyaWVyLmNvbnN0cmFpbnRzID1cblx0XHRcdGxlYWRpbmc6W3NpZ25hbFtzaWduYWwubGVuZ3RoIC0gMV0sIDddXG5cdFx0XHR0b3A6M1xuXHRcdGlvcy5sYXlvdXQuc2V0KClcblx0XHRpZiBzZXR1cC5jYXJyaWVyXG5cdFx0XHRuZXR3b3JrID0gbmV3IGlvcy5UZXh0IHN0eWxlOlwic3RhdHVzQmFyTmV0d29ya1wiLCB0ZXh0OnNldHVwLm5ldHdvcmssIHN1cGVyTGF5ZXI6c3RhdHVzQmFyLCBmb250U2l6ZToxMiwgY29sb3I6QGNvbG9yLCBuYW1lOlwibmV0d29ya1wiLCB0ZXh0VHJhbnNmb3JtOlwidXBwZXJjYXNlXCJcblx0XHRcdG5ldHdvcmsuY29uc3RyYWludHMgPVxuXHRcdFx0XHRsZWFkaW5nOltjYXJyaWVyLCA1XVxuXHRcdFx0XHR0b3A6M1xuXG5cdFx0aWYgc2V0dXAuY2FycmllciA9PSBcIlwiIHx8IHNldHVwLmNhcnJpZXIgPT0gXCJ3aWZpXCJcblx0XHRcdG5ldHdvcmtJY29uID0gaW9zLnV0aWxzLnN2Zyhpb3MuYXNzZXRzLm5ldHdvcmssIEBjb2xvcilcblx0XHRcdG5ldHdvcmsgPSBuZXcgTGF5ZXIgd2lkdGg6bmV0d29ya0ljb24ud2lkdGgsIGhlaWdodDpuZXR3b3JrSWNvbi5oZWlnaHQsIHN1cGVyTGF5ZXI6c3RhdHVzQmFyLCBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiLCBuYW1lOlwibmV0d29ya1wiXG5cdFx0XHRuZXR3b3JrLmh0bWwgPSBuZXR3b3JrSWNvbi5zdmdcblx0XHRcdGlvcy51dGlscy5jaGFuZ2VGaWxsKG5ldHdvcmssIEBjb2xvcilcblx0XHRcdG5ldHdvcmsuY29uc3RyYWludHMgPVxuXHRcdFx0XHRsZWFkaW5nOltzaWduYWxbc2lnbmFsLmxlbmd0aCAtIDFdLCA1XVxuXHRcdFx0XHR0b3A6QHRvcENvbnN0cmFpbnRcblxuXHRiYXR0ZXJ5SWNvbiA9IG5ldyBMYXllciB3aWR0aDppb3MudXRpbHMucHgoMjUpLCBoZWlnaHQ6aW9zLnV0aWxzLnB4KDEwKSwgc3VwZXJMYXllcjpzdGF0dXNCYXIsIGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCIsIG5hbWU6XCJiYXR0ZXJ5SWNvblwiXG5cdGlmIHNldHVwLmJhdHRlcnkgPiA3MFxuXHRcdGhpZ2hCYXR0ZXJ5ID0gaW9zLnV0aWxzLnN2Zyhpb3MuYXNzZXRzLmJhdHRlcnlIaWdoKVxuXHRcdGJhdHRlcnlJY29uLmh0bWwgPSBoaWdoQmF0dGVyeS5zdmdcblx0XHRpb3MudXRpbHMuY2hhbmdlRmlsbChiYXR0ZXJ5SWNvbiwgQGNvbG9yKVxuXG5cdGlmIHNldHVwLmJhdHRlcnkgPD0gNzAgJiYgc2V0dXAuYmF0dGVyeSA+IDIwXG5cdFx0bWlkQmF0dGVyeSA9IGlvcy51dGlscy5zdmcoaW9zLmFzc2V0cy5iYXR0ZXJ5TWlkKVxuXHRcdGJhdHRlcnlJY29uLmh0bWwgPSBtaWRCYXR0ZXJ5LnN2Z1xuXHRcdGlvcy51dGlscy5jaGFuZ2VGaWxsKGJhdHRlcnlJY29uLCBAY29sb3IpXG5cblx0aWYgc2V0dXAuYmF0dGVyeSA8PSAyMFxuXHRcdGxvd0JhdHRlcnkgPSBpb3MudXRpbHMuc3ZnKGlvcy5hc3NldHMuYmF0dGVyeUxvdylcblx0XHRiYXR0ZXJ5SWNvbi5odG1sID0gbG93QmF0dGVyeS5zdmdcblx0XHRpb3MudXRpbHMuY2hhbmdlRmlsbChiYXR0ZXJ5SWNvbiwgQGNvbG9yKVxuXG5cdGJhdHRlcnlJY29uLmNvbnN0cmFpbnRzID1cblx0XHR0cmFpbGluZyA6IDdcblx0XHR0b3A6QGJhdHRlcnlJY29uXG5cblx0YmF0dGVyeVBlcmNlbnQgPSBuZXcgaW9zLlRleHQgc3R5bGU6XCJzdGF0dXNCYXJCYXR0ZXJ5UGVyY2VudFwiLCB0ZXh0OnNldHVwLmJhdHRlcnkgKyBcIiVcIiwgc3VwZXJMYXllcjpzdGF0dXNCYXIsIGZvbnRTaXplOjEyLCBjb2xvcjpAY29sb3IsIG5hbWU6XCJiYXR0ZXJ5UGVyY2VudFwiXG5cdGJhdHRlcnlQZXJjZW50LmNvbnN0cmFpbnRzID1cblx0XHR0cmFpbGluZzogW2JhdHRlcnlJY29uLCAzXVxuXHRcdHZlcnRpY2FsQ2VudGVyOnRpbWVcblxuXHRibHVldG9vdGhTVkcgPSBpb3MudXRpbHMuc3ZnKGlvcy5hc3NldHMuYmx1ZXRvb3RoKVxuXHRibHVldG9vdGggPSBuZXcgTGF5ZXIgd2lkdGg6Ymx1ZXRvb3RoU1ZHLndpZHRoLCBoZWlnaHQ6Ymx1ZXRvb3RoU1ZHLmhlaWdodCwgc3VwZXJMYXllcjpzdGF0dXNCYXIsIG9wYWNpdHk6LjUsIGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCIsIG5hbWU6XCJibHVldG9vdGhcIlxuXHRibHVldG9vdGguaHRtbCA9IGJsdWV0b290aFNWRy5zdmdcblx0aW9zLnV0aWxzLmNoYW5nZUZpbGwoYmx1ZXRvb3RoLCBAY29sb3IpXG5cdGJsdWV0b290aC5jb25zdHJhaW50cyA9XG5cdFx0dG9wOiBAYmx1ZXRvb3RoXG5cdFx0dHJhaWxpbmc6IFtiYXR0ZXJ5UGVyY2VudCwgN11cblxuXHRpb3MubGF5b3V0LnNldCgpXG5cblx0IyBFeHBvcnQgc3RhdHVzQmFyXG5cdHN0YXR1c0Jhci5iYXR0ZXJ5ID0ge31cblx0c3RhdHVzQmFyLmJhdHRlcnkucGVyY2VudCA9IGJhdHRlcnlQZXJjZW50XG5cdHN0YXR1c0Jhci5iYXR0ZXJ5Lmljb24gPSBiYXR0ZXJ5SWNvblxuXHRzdGF0dXNCYXIuYmx1ZXRvb3RoID0gYmx1ZXRvb3RoXG5cdHN0YXR1c0Jhci50aW1lID0gdGltZVxuXHRzdGF0dXNCYXIubmV0d29yayA9IG5ldHdvcmtcblx0c3RhdHVzQmFyLmNhcnJpZXIgPSBjYXJyaWVyXG5cdHN0YXR1c0Jhci5zaWduYWwgPSBzaWduYWxcblx0cmV0dXJuIHN0YXR1c0JhclxuIiwiaW9zID0gcmVxdWlyZSAnaW9zLWtpdCdcblxuZXhwb3J0cy5kZWZhdWx0cyA9IHtcblx0dGFiOiB7XG5cdFx0bGFiZWw6IFwibGFiZWxcIlxuXHRcdGljb246XCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0XHRcdDxzdmcgd2lkdGg9JzI1cHgnIGhlaWdodD0nMjVweCcgdmlld0JveD0nMCAwIDI1IDI1JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnPlxuXHRcdFx0XHQ8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNi4xICgyNjMxMykgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdFx0XHRcdDx0aXRsZT4xPC90aXRsZT5cblx0XHRcdFx0PGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0XHRcdDxkZWZzPjwvZGVmcz5cblx0XHRcdFx0PGcgaWQ9J1BhZ2UtMScgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCcgZmlsbC1vcGFjaXR5PScxJz5cblx0XHRcdFx0XHQ8ZyBpZD0nQm90dG9tLUJhci9UYWItQmFyJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtMjUuMDAwMDAwLCAtNy4wMDAwMDApJyBmaWxsPScjMDA3NkZGJz5cblx0XHRcdFx0XHRcdDxnIGlkPSdQbGFjZWhvbGRlcnMnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDI1LjAwMDAwMCwgNy4wMDAwMDApJz5cblx0XHRcdFx0XHRcdFx0PHJlY3QgaWQ9JzEnIHg9JzAnIHk9JzAnIHdpZHRoPScyNScgaGVpZ2h0PScyNScgcng9JzMnPjwvcmVjdD5cblx0XHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdDwvZz5cblx0XHRcdDwvc3ZnPlwiXG5cdFx0YWN0aXZlOiB1bmRlZmluZWRcblx0XHRpbmFjdGl2ZTogdW5kZWZpbmVkXG5cdFx0dGFiQmFyOiB1bmRlZmluZWRcblx0XHR0eXBlOiBcInRhYlwiXG5cdH1cblx0YmFyOiB7XG5cdFx0dGFiczogW11cblx0XHRzdGFydDowXG5cdFx0dHlwZTpcInRhYkJhclwiXG5cdFx0YmFja2dyb3VuZENvbG9yOlwid2hpdGVcIlxuXHRcdGFjdGl2ZUNvbG9yOlwiYmx1ZVwiXG5cdFx0aW5hY3RpdmVDb2xvcjpcImdyYXlcIlxuXHRcdGJsdXI6dHJ1ZVxuXHR9XG59XG5cbmV4cG9ydHMuZGVmYXVsdHMudGFiLnByb3BzID0gT2JqZWN0LmtleXMoZXhwb3J0cy5kZWZhdWx0cy50YWIpXG5leHBvcnRzLmRlZmF1bHRzLmJhci5wcm9wcyA9IE9iamVjdC5rZXlzKGV4cG9ydHMuZGVmYXVsdHMuYmFyKVxuXG5leHBvcnRzLnRhYiA9IChhcnJheSkgLT5cblx0c2V0dXAgPSBpb3MudXRpbHMuc2V0dXBDb21wb25lbnQoYXJyYXksIGV4cG9ydHMuZGVmYXVsdHMudGFiKVxuXHRzcGVjcyA9XG5cdFx0d2lkdGg6IDc1XG5cblx0c3dpdGNoIGlvcy5kZXZpY2UubmFtZVxuXHRcdHdoZW4gXCJpcGhvbmUtNVwiXG5cdFx0XHRzcGVjcy53aWR0aCA9IDU1XG5cblx0dGFiID0gbmV3IGlvcy5WaWV3XG5cdFx0YmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIlxuXHRcdG5hbWU6c2V0dXAubGFiZWxcblx0XHRjb25zdHJhaW50czpcblx0XHRcdHdpZHRoOnNwZWNzLndpZHRoXG5cdFx0XHRoZWlnaHQ6NDlcblxuXHR0YWIudmlldyA9IG5ldyBpb3MuVmlld1xuXHRcdG5hbWU6c2V0dXAubGFiZWwgKyBcIi52aWV3XCJcblx0XHRiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiXG5cdFx0Y29uc3RyYWludHM6XG5cdFx0XHR0b3A6MFxuXHRcdFx0Ym90dG9tOjBcblx0XHRcdGxlYWRpbmc6MFxuXHRcdFx0dHJhaWxpbmc6MFxuXG5cdCMgQ3JlYXRlIEFjdGl2ZVxuXHR0YWIuYWN0aXZlID0gbmV3IGlvcy5WaWV3XG5cdFx0bmFtZTpcIi5hY3RpdmVcIlxuXHRcdGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCJcblx0XHRjb25zdHJhaW50czpcblx0XHRcdHRvcDowXG5cdFx0XHRib3R0b206MFxuXHRcdFx0bGVhZGluZzowXG5cdFx0XHR0cmFpbGluZzowXG5cdFx0c3VwZXJMYXllcjp0YWJcblxuXHR0YWIuYWN0aXZlLmljb24gPSBuZXcgaW9zLlZpZXdcblx0XHRuYW1lOlwiLmFjdGl2ZS5pY29uXCJcblx0XHRjb25zdHJhaW50czpcblx0XHRcdHdpZHRoOjI1XG5cdFx0XHRoZWlnaHQ6MjVcblx0XHRcdGFsaWduOlwiaG9yaXpvbnRhbFwiXG5cdFx0XHR0b3A6N1xuXHRcdGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCJcblx0XHRzdXBlckxheWVyOnRhYi5hY3RpdmVcblx0aWYgc2V0dXAuYWN0aXZlID09IHVuZGVmaW5lZFxuXHRcdHN2Z0ZyYW1lID0gaW9zLnV0aWxzLnN2ZyhzZXR1cC5pY29uKVxuXHRcdHRhYi5hY3RpdmUuaWNvbi5odG1sID0gc3ZnRnJhbWUuc3ZnXG5cdFx0dGFiLmFjdGl2ZS5pY29uLndpZHRoID0gc3ZnRnJhbWUud2lkdGhcblx0XHR0YWIuYWN0aXZlLmljb24uaGVpZ2h0ID0gc3ZnRnJhbWUuaGVpZ2h0XG5cdGVsc2Vcblx0XHRzZXR1cC5hY3RpdmUuc3VwZXJMYXllciA9IHRhYi5hY3RpdmUuaWNvblxuXHRcdHNldHVwLmFjdGl2ZS5wcm9wcyA9XG5cdFx0XHR3aWR0aDp0YWIuYWN0aXZlLmljb24ud2lkdGhcblx0XHRcdGhlaWdodDp0YWIuYWN0aXZlLmljb24uaGVpZ2h0XG5cblx0IyBDcmVhdGUgSW5hY3RpdmVcblx0dGFiLmluYWN0aXZlID0gbmV3IGlvcy5WaWV3XG5cdFx0YmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIlxuXHRcdG5hbWU6XCIuaW5hY3RpdmVcIlxuXHRcdGNvbnN0cmFpbnRzOlxuXHRcdFx0dG9wOjBcblx0XHRcdGJvdHRvbTowXG5cdFx0XHRsZWFkaW5nOjBcblx0XHRcdHRyYWlsaW5nOjBcblx0XHRzdXBlckxheWVyOnRhYlxuXG5cdHRhYi5pbmFjdGl2ZS5pY29uID0gbmV3IGlvcy5WaWV3XG5cdFx0Y29uc3RyYWludHM6XG5cdFx0XHR3aWR0aDoyNVxuXHRcdFx0aGVpZ2h0OjI1XG5cdFx0XHRhbGlnbjpcImhvcml6b250YWxcIlxuXHRcdFx0dG9wOjdcblx0XHRiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiXG5cdFx0bmFtZTpcIi5pbmFjdGl2ZS5pY29uXCJcblx0XHRzdXBlckxheWVyOnRhYi5pbmFjdGl2ZVxuXG5cdHRhYi5sYWJlbCA9IG5ldyBpb3MuVGV4dFxuXHRcdHRleHQ6c2V0dXAubGFiZWxcblx0XHRzdXBlckxheWVyOnRhYlxuXHRcdGNvbG9yOlwiIzkyOTI5MlwiXG5cdFx0Zm9udFNpemU6MTBcblx0XHRuYW1lOlwiLmxhYmVsXCJcblx0XHR0ZXh0VHJhbnNmb3JtOlwiY2FwaXRhbGl6ZVwiXG5cblx0dGFiLmxhYmVsLmNvbnN0cmFpbnRzID1cblx0XHRib3R0b206MlxuXHRcdGhvcml6b250YWxDZW50ZXI6dGFiLmFjdGl2ZS5pY29uXG5cblx0aWYgc2V0dXAuaW5hY3RpdmUgPT0gdW5kZWZpbmVkXG5cdFx0c3ZnRnJhbWUgPSBpb3MudXRpbHMuc3ZnKHNldHVwLmljb24pXG5cdFx0dGFiLmluYWN0aXZlLmljb24uaHRtbCA9IHN2Z0ZyYW1lLnN2Z1xuXHRcdHRhYi5pbmFjdGl2ZS5pY29uLndpZHRoID0gc3ZnRnJhbWUud2lkdGhcblx0XHR0YWIuaW5hY3RpdmUuaWNvbi5oZWlnaHQgPSBzdmdGcmFtZS5oZWlnaHRcblxuXHRlbHNlXG5cdFx0c2V0dXAuaW5hY3RpdmUuc3VwZXJMYXllciA9IHRhYi5pbmFjdGl2ZS5pY29uXG5cdFx0c2V0dXAuaW5hY3RpdmUucHJvcHMgPVxuXHRcdFx0d2lkdGg6dGFiLmluYWN0aXZlLmljb24ud2lkdGhcblx0XHRcdGhlaWdodDp0YWIuaW5hY3RpdmUuaWNvbi5oZWlnaHRcblxuXHRyZXR1cm4gdGFiXG5cbmV4cG9ydHMuYmFyID0gKGFycmF5KSAtPlxuXHRzZXR1cCA9IGlvcy51dGlscy5zZXR1cENvbXBvbmVudChhcnJheSwgZXhwb3J0cy5kZWZhdWx0cy5iYXIpXG5cblx0IyBJZiBubyB0YWJzLCBtYWtlIGR1bW15IHRhYnNcblx0aWYgc2V0dXAudGFicy5sZW5ndGggPT0gMFxuXHRcdGR1bW15VGFiID0gbmV3IGV4cG9ydHMudGFiXG5cdFx0ZHVtbXlUYWIyID0gbmV3IGV4cG9ydHMudGFiXG5cdFx0c2V0dXAudGFicy5wdXNoIGR1bW15VGFiXG5cdFx0c2V0dXAudGFicy5wdXNoIGR1bW15VGFiMlxuXG5cdHNwZWNzID1cblx0XHR3aWR0aDogNzVcblx0c3dpdGNoIGlvcy5kZXZpY2UubmFtZVxuXHRcdHdoZW4gXCJpcGhvbmUtNVwiXG5cdFx0XHRzcGVjcy53aWR0aCA9IDU1XG5cblx0YmFyID0gbmV3IGlvcy5WaWV3XG5cdFx0YmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIlxuXHRcdG5hbWU6XCJ0YWJCYXJcIlxuXHRcdGNvbnN0cmFpbnRzOlxuXHRcdFx0bGVhZGluZzowXG5cdFx0XHR0cmFpbGluZzowXG5cdFx0XHRib3R0b206MFxuXHRcdFx0aGVpZ2h0OjQ5XG5cblx0YmFyLmJnID0gbmV3IGlvcy5WaWV3XG5cdFx0c3VwZXJMYXllcjpiYXJcblx0XHRuYW1lOlwiLmJnXCJcblx0XHRjb25zdHJhaW50czpcblx0XHRcdGxlYWRpbmc6MFxuXHRcdFx0dHJhaWxpbmc6MFxuXHRcdFx0Ym90dG9tOjBcblx0XHRcdGhlaWdodDo0OVxuXG5cdGJhci5kaXZpZGVyID0gbmV3IGlvcy5WaWV3XG5cdFx0YmFja2dyb3VuZENvbG9yOlwiI0IyQjJCMlwiXG5cdFx0bmFtZTpcIi5kaXZpZGVyXCJcblx0XHRzdXBlckxheWVyOmJhclxuXHRcdGNvbnN0cmFpbnRzOlxuXHRcdFx0dG9wOjBcblx0XHRcdGxlYWRpbmc6MFxuXHRcdFx0dHJhaWxpbmc6MFxuXHRcdFx0aGVpZ2h0Oi41XG5cdGJhci5ib3ggPSBuZXcgaW9zLlZpZXdcblx0XHRzdXBlckxheWVyOmJhclxuXHRcdGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCJcblx0XHRuYW1lOlwiLmJveFwiXG5cdFx0Y29uc3RyYWludHM6XG5cdFx0XHRoZWlnaHQ6NDlcblx0XHRcdHdpZHRoOnNldHVwLnRhYnMubGVuZ3RoICogc3BlY3Mud2lkdGhcblxuXG5cdHNldEFjdGl2ZSA9ICh0YWJJbmRleCkgLT5cblx0XHRmb3IgdGFiLCBpbmRleCBpbiBzZXR1cC50YWJzXG5cdFx0XHRpZiBpbmRleCA9PSB0YWJJbmRleFxuXHRcdFx0XHR0YWIubGFiZWwuY29sb3IgPSBpb3MudXRpbHMuY29sb3Ioc2V0dXAuYWN0aXZlQ29sb3IpXG5cdFx0XHRcdHRhYi5hY3RpdmUudmlzaWJsZSA9IHRydWVcblx0XHRcdFx0dGFiLmluYWN0aXZlLnZpc2libGUgPSBmYWxzZVxuXHRcdFx0XHR0YWIudmlldy52aXNpYmxlID0gdHJ1ZVxuXHRcdFx0ZWxzZVxuXHRcdFx0XHR0YWIubGFiZWwuY29sb3IgPSBpb3MudXRpbHMuY29sb3Ioc2V0dXAuaW5hY3RpdmVDb2xvcilcblx0XHRcdFx0dGFiLmFjdGl2ZS52aXNpYmxlID0gZmFsc2Vcblx0XHRcdFx0dGFiLmluYWN0aXZlLnZpc2libGUgPSB0cnVlXG5cdFx0XHRcdHRhYi52aWV3LnZpc2libGUgPSBmYWxzZVxuXG5cblx0Zm9yIHRhYiwgaW5kZXggaW4gc2V0dXAudGFic1xuXHRcdCNDaGVjayBmb3IgdmFpbGQgdGFiIG9iamVjdFxuXHRcdGJhci5ib3guYWRkU3ViTGF5ZXIodGFiKVxuXHRcdCMgQ2hhbmdlIGNvbG9yc1xuXHRcdGlvcy51dGlscy5jaGFuZ2VGaWxsKHRhYi5hY3RpdmUuaWNvbiwgaW9zLnV0aWxzLmNvbG9yKHNldHVwLmFjdGl2ZUNvbG9yKSlcblx0XHRpb3MudXRpbHMuY2hhbmdlRmlsbCh0YWIuaW5hY3RpdmUuaWNvbiwgaW9zLnV0aWxzLmNvbG9yKHNldHVwLmluYWN0aXZlQ29sb3IpKVxuXHRcdHRhYi5sYWJlbC5jb2xvciA9IGlvcy51dGlscy5jb2xvcihzZXR1cC5pbmFjdGl2ZUNvbG9yKVxuXHRcdGJhci5iZy5iYWNrZ3JvdW5kQ29sb3IgPSBzZXR1cC5iYWNrZ3JvdW5kQ29sb3JcblxuXHRcdGlmIHNldHVwLmJsdXJcblx0XHRcdGJhci5iZy5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYmEoMjU1LDI1NSwyNTUsIC45KVwiXG5cdFx0XHRpb3MudXRpbHMuYmdCbHVyKGJhci5iZylcblxuXHRcdGlmIGluZGV4ID09IDBcblx0XHRcdHRhYi5jb25zdHJhaW50cy5sZWFkaW5nID0gMFxuXHRcdGVsc2Vcblx0XHRcdHRhYi5jb25zdHJhaW50cy5sZWFkaW5nID0gc2V0dXAudGFic1tpbmRleCAtIDFdXG5cblx0XHRpb3MubGF5b3V0LnNldCh0YWIpXG5cblx0XHR0YWIub24gRXZlbnRzLlRvdWNoU3RhcnQsIC0+XG5cdFx0XHR0YWJJbmRleCA9IEAueCAvIGlvcy51dGlscy5weChzcGVjcy53aWR0aClcblx0XHRcdHNldEFjdGl2ZSh0YWJJbmRleClcblxuXHRiYXIuYm94LmNvbnN0cmFpbnRzID1cblx0XHRhbGlnbjpcImhvcml6b250YWxcIlxuXG5cdGlvcy5sYXlvdXQuc2V0KGJhci5ib3gpXG5cdHNldEFjdGl2ZShzZXR1cC5zdGFydClcblxuXHRiYXIudGFicyA9IHNldHVwLnRhYnNcblxuXHRyZXR1cm4gYmFyXG4iLCJpb3MgPSByZXF1aXJlICdpb3Mta2l0J1xuXG5cbmV4cG9ydHMuZGVmYXVsdHMgPVxuICBrZXk6XCJ2YWx1ZVwiXG5cbmV4cG9ydHMuZGVmYXVsdHMucHJvcHMgPSBPYmplY3Qua2V5cyhleHBvcnRzLmRlZmF1bHRzKVxuXG5leHBvcnRzLmNyZWF0ZSA9IChhcnJheSkgLT5cbiAgc2V0dXAgPSBpb3MudXRpbHMuc2V0dXBDb21wb25lbnQoYXJyYXksIGV4cG9ydHMuZGVmYXVsdHMpXG4gIHJldHVyblxuIiwiaW9zID0gcmVxdWlyZSAnaW9zLWtpdCdcblxuXG5leHBvcnRzLmRlZmF1bHRzID1cblx0ZWRpdGFibGU6dHJ1ZVxuXHRjb25zdHJhaW50czp1bmRlZmluZWRcblx0dGV4dDogXCJpT1MgVGV4dCBMYXllclwiXG5cdHR5cGU6XCJ0ZXh0XCJcblx0eDowXG5cdHk6MFxuXHR3aWR0aDotMVxuXHRoZWlnaHQ6LTFcblx0c3VwZXJMYXllcjp1bmRlZmluZWRcblx0c3R5bGU6XCJkZWZhdWx0XCJcblx0bGluZXM6MVxuXHR0ZXh0QWxpZ246XCJsZWZ0XCJcblx0YmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIlxuXHRjb2xvcjpcImJsYWNrXCJcblx0Zm9udFNpemU6IDE3XG5cdGZvbnRGYW1pbHk6XCItYXBwbGUtc3lzdGVtLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmXCJcblx0Zm9udFdlaWdodDpcInJlZ3VsYXJcIlxuXHRsaW5lSGVpZ2h0OlwiYXV0b1wiXG5cdG5hbWU6XCJ0ZXh0IGxheWVyXCJcblx0b3BhY2l0eToxXG5cdHRleHRUcmFuc2Zvcm06XCJub25lXCJcblx0bGV0dGVyU3BhY2luZzowXG5cdG5hbWU6XCJ0ZXh0IGxheWVyXCJcblx0c2VsZWN0YWJsZTp0cnVlXG5cdHNlbGVjdENvbG9yOlwicmdiYSgwLCAxMTgsIDI1NSwgLjIpXCJcblx0c2VsZWN0Q29udHJvbHM6XCIjMDA3NkZGXCJcblxuZXhwb3J0cy5kZWZhdWx0cy5wcm9wcyA9IE9iamVjdC5rZXlzKGV4cG9ydHMuZGVmYXVsdHMpXG5cblxuZXhwb3J0cy5jcmVhdGUgPSAoYXJyYXkpIC0+XG5cdHNldHVwID0gaW9zLnV0aWxzLnNldHVwQ29tcG9uZW50KGFycmF5LCBleHBvcnRzLmRlZmF1bHRzKVxuXHRleGNlcHRpb25zID0gT2JqZWN0LmtleXMoc2V0dXApXG5cblx0dGV4dExheWVyID0gbmV3IGlvcy5WaWV3XG5cdFx0YmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIlxuXHRcdG5hbWU6c2V0dXAubmFtZVxuXHRcdHN1cGVyTGF5ZXI6c2V0dXAuc3VwZXJMYXllclxuXHRcdGNvbnN0cmFpbnRzOnNldHVwLmNvbnN0cmFpbnRzXG5cblx0dGV4dExheWVyLnR5cGUgPSBcInRleHRcIlxuXHR0ZXh0TGF5ZXIuaHRtbCA9IHNldHVwLnRleHRcblx0Zm9yIHByb3AgaW4gaW9zLmxpYi5sYXllclByb3BzXG5cdFx0aWYgc2V0dXBbcHJvcF1cblx0XHRcdGlmIHByb3AgPT0gXCJjb2xvclwiXG5cdFx0XHRcdHNldHVwW3Byb3BdID0gaW9zLnV0aWxzLmNvbG9yKHNldHVwW3Byb3BdKVxuXHRcdFx0dGV4dExheWVyW3Byb3BdID0gc2V0dXBbcHJvcF1cblx0Zm9yIHByb3AgaW4gaW9zLmxpYi5sYXllclN0eWxlc1xuXHRcdGlmIHNldHVwW3Byb3BdXG5cdFx0XHRpZiBwcm9wID09IFwibGluZUhlaWdodFwiICYmIHNldHVwW3Byb3BdID09IFwiYXV0b1wiXG5cdFx0XHRcdHRleHRMYXllci5zdHlsZS5saW5lSGVpZ2h0ID0gIHNldHVwLmZvbnRTaXplXG5cdFx0XHRpZiBwcm9wID09IFwiZm9udFdlaWdodFwiXG5cdFx0XHRcdHN3aXRjaCBzZXR1cFtwcm9wXVxuXHRcdFx0XHRcdHdoZW4gXCJ1bHRyYXRoaW5cIiB0aGVuIHNldHVwW3Byb3BdID0gMTAwXG5cdFx0XHRcdFx0d2hlbiBcInRoaW5cIiB0aGVuIHNldHVwW3Byb3BdID0gMjAwXG5cdFx0XHRcdFx0d2hlbiBcImxpZ2h0XCIgdGhlbiBzZXR1cFtwcm9wXSA9IDMwMFxuXHRcdFx0XHRcdHdoZW4gXCJyZWd1bGFyXCIgdGhlbiBzZXR1cFtwcm9wXSA9IDQwMFxuXHRcdFx0XHRcdHdoZW4gXCJtZWRpdW1cIiB0aGVuIHNldHVwW3Byb3BdID0gNTAwXG5cdFx0XHRcdFx0d2hlbiBcInNlbWlib2xkXCIgdGhlbiBzZXR1cFtwcm9wXSA9IDYwMFxuXHRcdFx0XHRcdHdoZW4gXCJib2xkXCIgdGhlbiBzZXR1cFtwcm9wXSA9IDcwMFxuXHRcdFx0XHRcdHdoZW4gXCJibGFja1wiIHRoZW4gc2V0dXBbcHJvcF0gPSA4MDBcblx0XHRcdGlmIHByb3AgPT0gXCJmb250U2l6ZVwiIHx8IHByb3AgPT0gXCJsaW5lSGVpZ2h0XCIgfHwgcHJvcCA9PSBcImxldHRlclNwYWNpbmdcIlxuXHRcdFx0XHRzZXR1cFtwcm9wXSA9IGlvcy51dGlscy5weChzZXR1cFtwcm9wXSkgKyBcInB4XCJcblx0XHRcdHRleHRMYXllci5zdHlsZVtwcm9wXSA9IHNldHVwW3Byb3BdXG5cblx0dGV4dEZyYW1lID0gaW9zLnV0aWxzLnRleHRBdXRvU2l6ZSh0ZXh0TGF5ZXIpXG5cdHRleHRMYXllci5wcm9wcyA9IChoZWlnaHQ6dGV4dEZyYW1lLmhlaWdodCwgd2lkdGg6dGV4dEZyYW1lLndpZHRoKVxuXG5cdGlmIHNldHVwLmVkaXRhYmxlXG5cdFx0dGV4dExheWVyLm9uIFwiY2hhbmdlOmh0bWxcIiwgLT5cblx0XHRcdHRleHRGcmFtZSA9IGlvcy51dGlscy50ZXh0QXV0b1NpemUodGV4dExheWVyKVxuXHRcdFx0dGV4dExheWVyLnByb3BzID0gKGhlaWdodDp0ZXh0RnJhbWUuaGVpZ2h0LCB3aWR0aDp0ZXh0RnJhbWUud2lkdGgpXG5cblxuXHRpb3MubGF5b3V0LnNldFxuXHRcdHRhcmdldDp0ZXh0TGF5ZXJcblx0cmV0dXJuIHRleHRMYXllclxuIiwiaW9zID0gcmVxdWlyZSAnaW9zLWtpdCdcblxuIyMgQ29udmVydHMgcHggdG8gcHRcbmV4cG9ydHMucHQgPSAocHgpIC0+XG5cdHB0ID0gcHgvaW9zLmRldmljZS5zY2FsZVxuXHRwdCA9IE1hdGgucm91bmQocHQpXG5cdHJldHVybiBwdFxuXG4jIyBDb252ZXJ0cyBwdCB0byBweFxuZXhwb3J0cy5weCA9IChwdCkgLT5cblx0cHggPSBwdCAqIGlvcy5kZXZpY2Uuc2NhbGVcblx0cHggPSBNYXRoLnJvdW5kKHB4KVxuXHRyZXR1cm4gcHhcblxuIyMgaU9TIENvbG9yIOKAkyBUaGlzIHdpbGwgc3RvcmUgYWxsIG9mIHRoZSBkZWZhdWx0IGlPUyBjb2xvcnMgaW50ZWFkIG9mIHRoZSBkZWZhdWx0IENTUyBjb2xvcnMuICpUaGlzIGlzIG9ubHkgdXAgaGVyZSBiZWNhdXNlIEkgcmVmZXIgdG8gaXQgaW4gdGhlIGRlZmF1bHRzLipcbmV4cG9ydHMuY29sb3IgPSAoY29sb3JTdHJpbmcpIC0+XG5cdGNvbG9yID0gXCJcIlxuXHRpZiB0eXBlb2YgY29sb3JTdHJpbmcgPT0gXCJzdHJpbmdcIlxuXHRcdGNvbG9yU3RyaW5nID0gY29sb3JTdHJpbmcudG9Mb3dlckNhc2UoKVxuXHRcdGlmIGNvbG9yU3RyaW5nWzAuLi40XSA9PSBcInJnYmFcIlxuXHRcdFx0cmV0dXJuIGNvbG9yU3RyaW5nXG5cdHN3aXRjaCBjb2xvclN0cmluZ1xuXHRcdHdoZW4gXCJyZWRcIlxuXHRcdFx0Y29sb3IgPSBuZXcgQ29sb3IoXCIjRkUzODI0XCIpXG5cdFx0d2hlbiBcImJsdWVcIlxuXHRcdFx0Y29sb3IgPSBuZXcgQ29sb3IoXCIjMDA3NkZGXCIpXG5cdFx0d2hlbiBcInBpbmtcIlxuXHRcdFx0Y29sb3IgPSBuZXcgQ29sb3IoXCIjRkUyODUxXCIpXG5cdFx0d2hlbiBcImdyZXlcIlxuXHRcdFx0Y29sb3IgPSBuZXcgQ29sb3IoXCIjOTI5MjkyXCIpXG5cdFx0d2hlbiBcImdyYXlcIlxuXHRcdFx0Y29sb3IgPSBuZXcgQ29sb3IoXCIjOTI5MjkyXCIpXG5cdFx0d2hlbiBcImJsYWNrXCJcblx0XHRcdGNvbG9yID0gbmV3IENvbG9yKFwiIzAzMDMwM1wiKVxuXHRcdHdoZW4gXCJ3aGl0ZVwiXG5cdFx0XHRjb2xvciA9IG5ldyBDb2xvcihcIiNFRkVGRjRcIilcblx0XHR3aGVuIFwib3JhbmdlXCJcblx0XHRcdGNvbG9yID0gbmV3IENvbG9yKFwiI0ZGOTYwMFwiKVxuXHRcdHdoZW4gXCJncmVlblwiXG5cdFx0XHRjb2xvciA9IG5ldyBDb2xvcihcIiM0NERCNUVcIilcblx0XHR3aGVuIFwibGlnaHQgYmx1ZVwiXG5cdFx0XHRjb2xvciA9IG5ldyBDb2xvcihcIiM1NEM3RkNcIilcblx0XHR3aGVuIFwibGlnaHQtYmx1ZVwiXG5cdFx0XHRjb2xvciA9IG5ldyBDb2xvcihcIiM1NEM3RkNcIilcblx0XHR3aGVuIFwieWVsbG93XCJcblx0XHRcdGNvbG9yID0gbmV3IENvbG9yKFwiI0ZGQ0QwMFwiKVxuXHRcdHdoZW4gXCJsaWdodCBrZXlcIlxuXHRcdFx0Y29sb3IgPSBuZXcgQ29sb3IoXCIjOURBN0IzXCIpXG5cdFx0d2hlbiBcImxpZ2h0LWtleVwiXG5cdFx0XHRjb2xvciA9IG5ldyBDb2xvcihcIiM5REE3QjNcIilcblx0XHRlbHNlXG5cdFx0XHRpZiBjb2xvclN0cmluZ1swXSA9PSBcIiNcIiB8fCBjb2xvclN0cmluZy50b0hleFN0cmluZygpWzBdID09IFwiI1wiXG5cdFx0XHRcdGNvbG9yID0gbmV3IENvbG9yKGNvbG9yU3RyaW5nKVxuXHRcdFx0ZWxzZVxuXHRcdFx0XHRjb2xvciA9IG5ldyBDb2xvcihcIiM5MjkyOTJcIilcblx0cmV0dXJuIGNvbG9yXG5cbiMgU3VwcG9ydGluZyBGdW5jdGlvbnNcbiMgVXRpbHNcblxuIyBDbGVhbnMgYSBzdHJpbmcgb2YgPGJyPiBhbmQgJm5ic3A7XG5leHBvcnRzLmNsZWFuID0gKHN0cmluZykgLT5cblx0IyMgcmVtb3ZlIHdoaXRlIHNwYWNlXG5cdHN0cmluZyA9IHN0cmluZy5yZXBsYWNlKC9bJl1uYnNwWztdL2dpLCBcIiBcIikucmVwbGFjZSgvWzxdYnJbPl0vZ2ksIFwiXCIpXG5cdHJldHVybiBzdHJpbmdcblxuIyBDb252ZXJ0cyBweCdzIG9mIGFuIFNWRyB0byBzY2FsYWJsZSB2YXJpYWJsZXNcbmV4cG9ydHMuc3ZnID0gKHN2ZykgLT5cblx0IyBGaW5kIFN0cmluZ1xuXHRzdGFydEluZGV4ID0gc3ZnLnNlYXJjaChcIjxzdmcgd2lkdGg9XCIpXG5cdGVuZEluZGV4ID0gc3ZnLnNlYXJjaChcIiB2aWV3Qm94XCIpXG5cdHN0cmluZyA9IHN2Zy5zbGljZShzdGFydEluZGV4LCBlbmRJbmRleClcblxuXHQjRmluZCB3aWR0aFxuXHR3U3RhcnRJbmRleCA9IHN0cmluZy5zZWFyY2goXCI9XCIpICsgMlxuXHR3RW5kSW5kZXggPSAgc3RyaW5nLnNlYXJjaChcInB4XCIpXG5cdHdpZHRoID0gc3RyaW5nLnNsaWNlKHdTdGFydEluZGV4LCB3RW5kSW5kZXgpXG5cdG5ld1dpZHRoID0gZXhwb3J0cy5weCh3aWR0aClcblxuXHQjIEZpbmQgSGVpZ2h0XG5cdGhlaWdodFN0cmluZyA9IHN0cmluZy5zbGljZSh3RW5kSW5kZXggKyA0LCBzdHJpbmcubGVuZ3RoKVxuXHRoU3RhcnRJbmRleCA9IGhlaWdodFN0cmluZy5zZWFyY2goXCI9XCIpKyAyXG5cdGhFbmRJbmRleCA9IGhlaWdodFN0cmluZy5zZWFyY2goXCJweFwiKVxuXHRoZWlnaHQgPSBoZWlnaHRTdHJpbmcuc2xpY2UoaFN0YXJ0SW5kZXgsIGhFbmRJbmRleClcblx0bmV3SGVpZ2h0ID0gZXhwb3J0cy5weChoZWlnaHQpXG5cblx0I0NyZWF0ZSBuZXcgc3RyaW5nXG5cdG5ld1N0cmluZyA9IHN0cmluZy5yZXBsYWNlKHdpZHRoLCBuZXdXaWR0aClcblx0bmV3U3RyaW5nID0gbmV3U3RyaW5nLnJlcGxhY2UoaGVpZ2h0LCBuZXdIZWlnaHQpXG5cblx0I1JlcGxhY2Ugc3RyaW5nc1xuXHRzdmcgPSBzdmcucmVwbGFjZShzdHJpbmcsIG5ld1N0cmluZylcblxuXHRyZXR1cm4ge1xuXHRcdHN2Zzpzdmdcblx0XHR3aWR0aDpuZXdXaWR0aFxuXHRcdGhlaWdodDpuZXdIZWlnaHRcblx0fVxuXG4jIENoYW5nZXMgdGhlIGZpbGwgb2YgYW4gU1ZHXG5leHBvcnRzLmNoYW5nZUZpbGwgPSAobGF5ZXIsIGNvbG9yKSAtPlxuXHRzdGFydEluZGV4ID0gbGF5ZXIuaHRtbC5zZWFyY2goXCJmaWxsPVxcXCIjXCIpXG5cdGZpbGxTdHJpbmcgPSBsYXllci5odG1sLnNsaWNlKHN0YXJ0SW5kZXgsIGxheWVyLmh0bWwubGVuZ3RoKVxuXHRlbmRJbmRleCA9IGZpbGxTdHJpbmcuc2VhcmNoKFwiXFxcIj5cIilcblx0c3RyaW5nID0gZmlsbFN0cmluZy5zbGljZSgwLCBlbmRJbmRleClcblx0bmV3U3RyaW5nID0gXCJmaWxsPVxcXCJcIiArIGV4cG9ydHMuY29sb3IoY29sb3IpXG5cdGxheWVyLmh0bWwgPSBsYXllci5odG1sLnJlcGxhY2Uoc3RyaW5nLCBuZXdTdHJpbmcpXG5leHBvcnRzLmNhcGl0YWxpemUgPSAoc3RyaW5nKSAtPlxuXHRyZXR1cm4gc3RyaW5nLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyaW5nLnNsaWNlKDEpXG5cbiMgUmV0dXJucyB0aGUgY3VycmVudCB0aW1lXG5leHBvcnRzLmdldFRpbWUgPSAtPlxuXHRkYXlzT2ZUaGVXZWVrID0gW1wiU3VuZGF5XCIsIFwiTW9uZGF5XCIsIFwiVHVlc2RheVwiLCBcIldlZG5lc2RheVwiLCBcIlRodXJzZGF5XCIsIFwiRnJpZGF5XCIsIFwiU2F0dXJkYXlcIl1cblx0bW9udGhzT2ZUaGVZZWFyID0gW1wiSmFudWFyeVwiLCBcIkZlYnJ1YXJ5XCIsIFwiTWFyY2hcIiwgXCJBcHJpbFwiLCBcIk1heVwiLCBcIkp1bmVcIiwgXCJKdWx5XCIsIFwiQXVndXN0XCIsIFwiU2VwdGVtYmVyXCIsIFwiT2N0b2JlclwiLCBcIk5vdmVtYmVyXCIsIFwiRGVjZW1iZXJcIl1cblx0ZGF0ZU9iaiA9IG5ldyBEYXRlKClcblx0bW9udGggPSBtb250aHNPZlRoZVllYXJbZGF0ZU9iai5nZXRNb250aCgpXVxuXHRkYXRlID0gZGF0ZU9iai5nZXREYXRlKClcblx0ZGF5ID0gZGF5c09mVGhlV2Vla1tkYXRlT2JqLmdldERheSgpXVxuXHRob3VycyA9IGRhdGVPYmouZ2V0SG91cnMoKVxuXHRtaW5zID0gZGF0ZU9iai5nZXRNaW51dGVzKClcblx0c2VjcyA9IGRhdGVPYmouZ2V0U2Vjb25kcygpXG5cdHJldHVybiB7XG5cdFx0bW9udGg6bW9udGhcblx0XHRkYXRlOmRhdGVcblx0XHRkYXk6ZGF5XG5cdFx0aG91cnM6aG91cnNcblx0XHRtaW5zOm1pbnNcblx0XHRzZWNzOnNlY3Ncblx0fVxuXG5leHBvcnRzLmJnQmx1ciA9IChsYXllcikgLT5cblx0bGF5ZXIuc3R5bGVbXCItd2Via2l0LWJhY2tkcm9wLWZpbHRlclwiXSA9IFwiYmx1cigje2V4cG9ydHMucHgoNSl9cHgpXCJcblx0cmV0dXJuIGxheWVyXG5cbmV4cG9ydHMudGV4dEF1dG9TaXplID0gKHRleHRMYXllcikgLT5cblx0I0RlZmluZSBXaWR0aFxuXHRjb25zdHJhaW50cyA9IHt9XG5cdGlmIHRleHRMYXllci5jb25zdHJhaW50c1xuXHRcdGlmIHRleHRMYXllci5jb25zdHJhaW50cy5oZWlnaHRcblx0XHRcdGNvbnN0cmFpbnRzLmhlaWdodCA9IGV4cG9ydHMucHgodGV4dExheWVyLmNvbnN0cmFpbnRzLmhlaWdodClcblx0XHRpZiB0ZXh0TGF5ZXIuY29uc3RyYWludHMud2lkdGhcblx0XHRcdGNvbnN0cmFpbnRzLndpZHRoID0gZXhwb3J0cy5weCh0ZXh0TGF5ZXIuY29uc3RyYWludHMud2lkdGgpXG5cblx0c3R5bGVzID1cblx0XHRmb250U2l6ZTogdGV4dExheWVyLnN0eWxlLmZvbnRTaXplXG5cdFx0Zm9udEZhbWlseTogdGV4dExheWVyLnN0eWxlLmZvbnRGYW1pbHlcblx0XHRmb250V2VpZ2h0OiB0ZXh0TGF5ZXIuc3R5bGUuZm9udFdlaWdodFxuXHRcdGxpbmVIZWlnaHQ6IHRleHRMYXllci5zdHlsZS5saW5lSGVpZ2h0XG5cdFx0bGV0dGVyU3BhY2luZzogdGV4dExheWVyLnN0eWxlLmxldHRlclNwYWNpbmdcblx0XHR0ZXh0VHJhbnNmb3JtOiB0ZXh0TGF5ZXIuc3R5bGUudGV4dFRyYW5zZm9ybVxuXHR0ZXh0RnJhbWUgPSBVdGlscy50ZXh0U2l6ZSh0ZXh0TGF5ZXIuaHRtbCwgc3R5bGVzLCBjb25zdHJhaW50cylcblx0cmV0dXJuIHtcblx0XHR3aWR0aCA6IHRleHRGcmFtZS53aWR0aFxuXHRcdGhlaWdodDogdGV4dEZyYW1lLmhlaWdodFxuXHR9XG5cbiMgZXhwb3J0cy5nZXREZXZpY2UgPSAtPlxuI1xuIyBcdCMgTG9hZHMgdGhlIGluaXRpYWwgZnJhbWVcbiMgXHRkZXZpY2UgPSBGcmFtZXIuRGV2aWNlLmRldmljZVR5cGVcbiNcbiMgXHQjIyMgVGhpcyBzd2l0Y2ggbG9va3MgYXQgdGhlIGlubmVyV2lkdGggdG8gZGV0ZXJtaW5lIGlmIHRoZSBwcm90b3R5cGUgaXMgYmVpbmcgb3BlbmVkIG9uIGEgZGV2aWNlLlxuIyBcdElmIHNvLCBpdCdsbCBvdmVycmlkZSB0aGUgZGV2aWNlLCBhbmQgaXQnbGwgYWRqdXN0IHRoZSB2aWV3IHRvIGZ1bGxzY3JlZW4uIyMjXG4jIFx0Y2FwdHVyZWREZXZpY2UgPSB7XG4jIFx0XHR3aWR0aDppb3MubGliLmZyYW1lc1tkZXZpY2VdLndpZHRoXG4jIFx0XHRoZWlnaHQ6aW9zLmxpYi5mcmFtZXNbZGV2aWNlXS5oZWlnaHRcbiMgXHRcdHNjYWxlOmlvcy5saWIuZnJhbWVzW2RldmljZV0uc2NhbGVcbiMgXHRcdG1vYmlsZTppb3MubGliLmZyYW1lc1tkZXZpY2VdLm1vYmlsZVxuIyBcdFx0cGxhdGZvcm06aW9zLmxpYi5mcmFtZXNbZGV2aWNlXS5wbGF0Zm9ybVxuIyBcdH1cbiNcbiMgXHRzd2l0Y2ggaW5uZXJXaWR0aFxuIyBcdFx0IyBpUGhvbmUgNWMvNXMvU0VcbiMgXHRcdHdoZW4gNjQwXG4jIFx0XHRcdGRldmljZSA9IFwiYXBwbGUtaXBob25lLTVzLXNpbHZlclwiXG4jIFx0XHRcdEZyYW1lci5EZXZpY2UuZGV2aWNlVHlwZSA9IFwiZnVsbHNjcmVlblwiXG4jXG4jIFx0XHQjIGlQaG9uZSA2c1xuIyBcdFx0d2hlbiA3NTBcbiMgXHRcdFx0ZGV2aWNlID0gXCJhcHBsZS1pcGhvbmUtNnMtc2lsdmVyXCJcbiMgXHRcdFx0RnJhbWVyLkRldmljZS5kZXZpY2VUeXBlID0gXCJmdWxsc2NyZWVuXCJcbiNcbiMgXHRcdCMgaVBob25lIDZzK1xuIyBcdFx0d2hlbiAxMjQyXG4jIFx0XHRcdGlmIGlubmVySGVpZ2h0ID09IDIyMDhcbiMgXHRcdFx0XHRkZXZpY2UgPSBcImFwcGxlLWlwaG9uZS02cy1wbHVzLXNpbHZlclwiXG4jIFx0XHRcdFx0RnJhbWVyLkRldmljZS5kZXZpY2VUeXBlID0gXCJmdWxsc2NyZWVuXCJcbiMgXHRcdFx0XHRwcmludCBcInlvXCJcbiNcbiMgXHRcdCMgaVBhZCBpbiBwb3J0cmFpdFxuIyBcdFx0d2hlbiAxNTM2XG4jIFx0XHRcdGlmIGlubmVySGVpZ2h0ID09IDIwNDhcbiMgXHRcdFx0XHRkZXZpY2UgPSBcImFwcGxlLWlwYWQtYWlyLTItc2lsdmVyXCJcbiMgXHRcdFx0XHRGcmFtZXIuRGV2aWNlLmRldmljZVR5cGUgPSBcImZ1bGxzY3JlZW5cIlxuI1xuIyBcdFx0IyBpUGFkXG4jIFx0XHR3aGVuIDIwNDhcbiNcbiMgXHRcdFx0IyBpUGFkIFBybyBpbiBwb3J0cmFpdFxuIyBcdFx0XHRpZiBpbm5lckhlaWdodCA9PSAyNzMyXG4jIFx0XHRcdFx0ZGV2aWNlID0gXCJhcHBsZS1pcGFkLXByby1zaWx2ZXJcIlxuI1xuIyBcdFx0XHQjIGlQYWQgaW4gbGFuZHNjY2FwZVxuIyBcdFx0XHRpZiBpbm5lckhlaWdodCA9PSAxNTM2XG4jIFx0XHRcdFx0ZGV2aWNlID0gXCJhcHBsZS1pcGFkLWFpci0yLXNpbHZlclwiXG4jIFx0XHRcdEZyYW1lci5EZXZpY2UuZGV2aWNlVHlwZSA9IFwiZnVsbHNjcmVlblwiXG4jXG4jIFx0XHQjIGlQYWQgUHJvXG4jIFx0XHR3aGVuIDI3MzJcbiMgXHRcdFx0aWYgaW5uZXJIZWlnaHQgPT0gMjA0OFxuIyBcdFx0XHRcdGRldmljZSA9IFwiYXBwbGUtaXBhZC1wcm8tc2lsdmVyXCJcbiMgXHRcdFx0XHRGcmFtZXIuRGV2aWNlLmRldmljZVR5cGUgPSBcImZ1bGxzY3JlZW5cIlxuZXhwb3J0cy5nZXREZXZpY2UgPSAtPlxuXHQjIExvYWRzIHRoZSBpbml0aWFsIGZyYW1lXG5cdG5hbWVGb3JtYXR0ZXIgPSAobmFtZSkgLT5cblx0XHRyZW1vdmVUZXJtcyA9IFtcImFwcGxlLVwiLCBcIi1nb2xkXCIsIFwiLXNpbHZlclwiLCBcIi1yb3NlXCIsIFwiLXNwYWNlLWdyYXlcIiwgXCIteWVsbG93XCIsIFwiLWdyZWVuXCIsIFwiLXJlZFwiLCBcIi13aGl0ZVwiLCBcIi1ibHVlXCIsIFwiLW1pbmlcIiwgXCItYWlyXCIsIFwiLTJcIiwgXCItNFwiXVxuXHRcdGZvciB0ZXJtIGluIHJlbW92ZVRlcm1zXG5cdFx0XHRuYW1lID0gbmFtZS5yZXBsYWNlKHRlcm0sIFwiXCIpXG5cdFx0aWYgbmFtZS5pbmRleE9mKFwiLTVzXCIpICE9IC0xIHRoZW4gbmFtZSA9IG5hbWUucmVwbGFjZShcIi01c1wiLCBcIi01XCIpXG5cdFx0aWYgbmFtZS5pbmRleE9mKFwiLTVjXCIpICE9IC0xIHRoZW4gbmFtZSA9IG5hbWUucmVwbGFjZShcIi01Y1wiLCBcIi01XCIpXG5cdFx0cmV0dXJuIG5hbWVcblx0ZGV2aWNlID0gXCJcIlxuXHRmcmFtZSA9IHRydWVcblx0aWYgaW9zLmxpYi5yZWFsRGV2aWNlc1tpbm5lcldpZHRoXSAmJiBpb3MubGliLnJlYWxEZXZpY2VzW2lubmVyV2lkdGhdW2lubmVySGVpZ2h0XVxuXHRcdGRldmljZSA9IGlvcy5saWIucmVhbERldmljZXNbaW5uZXJXaWR0aF1baW5uZXJIZWlnaHRdXG5cdFx0ZnJhbWUgPSBmYWxzZVxuXHRcdEZyYW1lci5EZXZpY2UuZGV2aWNlVHlwZSA9IFwiZnVsbHNjcmVlblwiXG5cblx0aWYgZnJhbWVcblx0XHRkZXZpY2UgPVxuXHRcdFx0bmFtZTogbmFtZUZvcm1hdHRlcihGcmFtZXIuRGV2aWNlLmRldmljZVR5cGUpXG5cdFx0XHRkaXNwbGF5X25hbWUgOiAgRnJhbWVyLkRldmljZVZpZXcuRGV2aWNlc1tGcmFtZXIuRGV2aWNlLmRldmljZVR5cGVdLmRpc3BsYXlfbmFtZVxuXHRcdFx0d2lkdGggOiAgRnJhbWVyLkRldmljZVZpZXcuRGV2aWNlc1tGcmFtZXIuRGV2aWNlLmRldmljZVR5cGVdLnNjcmVlbldpZHRoXG5cdFx0XHRoZWlnaHQ6ICBGcmFtZXIuRGV2aWNlVmlldy5EZXZpY2VzW0ZyYW1lci5EZXZpY2UuZGV2aWNlVHlwZV0uc2NyZWVuSGVpZ2h0XG5cdFx0XHRzY2FsZTogaW9zLmxpYi5mcmFtZXJGcmFtZXNbRnJhbWVyLkRldmljZVZpZXcuRGV2aWNlc1tGcmFtZXIuRGV2aWNlLmRldmljZVR5cGVdLnNjcmVlbldpZHRoXVxuXG5cdGlmIGRldmljZS5zY2FsZSA9PSB1bmRlZmluZWRcblx0XHRkZXZpY2Uuc2NhbGUgPSAyXG5cdGlmIGRldmljZS53aWR0aCA9PSB1bmRlZmluZWRcblx0XHRkZXZpY2Uud2lkdGggPSBpbm5lcldpZHRoXG5cdGlmIGRldmljZS5oZWlnaHQgPT0gdW5kZWZpbmVkXG5cdFx0ZGV2aWNlLmhlaWdodCA9IGlubmVySGVpZ2h0XG5cblx0cmV0dXJuIGRldmljZVxuXG5cdGV4cG9ydHMuc2NhbGUgPSBpb3MubGliLmZyYW1lc1tkZXZpY2VdLnNjYWxlXG5cblx0aWYgZGV2aWNlID09IFwiZnVsbHNjcmVlblwiXG5cdFx0ZXhwb3J0cy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoXG5cdFx0ZXhwb3J0cy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHRcblx0ZWxzZVxuXHRcdGV4cG9ydHMud2lkdGggPSBpb3MubGliLmZyYW1lc1tkZXZpY2VdLndpZHRoXG5cdFx0ZXhwb3J0cy5oZWlnaHQgPSBpb3MubGliLmZyYW1lc1tkZXZpY2VdLmhlaWdodFxuXHRcdGlmIHdpbmRvdy5pbm5lcldpZHRoID09IDEyNDIgfHwgd2luZG93LmlubmVyV2lkdGggPT0gMjIwOFxuXHRcdFx0ZXhwb3J0cy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoXG5cdFx0XHRleHBvcnRzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodFxuXHRcdFx0ZXhwb3J0cy5zY2FsZSA9IDNcblx0ZXhwb3J0cy5tb2JpbGUgPSBpb3MubGliLmZyYW1lc1tkZXZpY2VdLm1vYmlsZVxuXHRleHBvcnRzLnBsYXRmb3JtID0gaW9zLmxpYi5mcmFtZXNbZGV2aWNlXS5wbGF0Zm9ybVxuXHRleHBvcnRzLm9yaWVudGF0aW9uID0gIEZyYW1lci5EZXZpY2Uub3JpZW50YXRpb25cblxuXHQjIERldmljZSBTdHJpbmcgU2NydWJiZXJcblx0ZGV2aWNlID0gZGV2aWNlLnJlcGxhY2UoXCJhcHBsZS1cIiwgXCJcIilcblx0ZGV2aWNlID0gZGV2aWNlLnJlcGxhY2UoXCItZ29sZFwiLCBcIlwiKVxuXHRkZXZpY2UgPSBkZXZpY2UucmVwbGFjZShcIi1ncmVlblwiLCBcIlwiKVxuXHRkZXZpY2UgPSBkZXZpY2UucmVwbGFjZShcIi1ibHVlXCIsIFwiXCIpXG5cdGRldmljZSA9IGRldmljZS5yZXBsYWNlKFwiLXJlZFwiLCBcIlwiKVxuXHRkZXZpY2UgPSBkZXZpY2UucmVwbGFjZShcIi13aGl0ZVwiLCBcIlwiKVxuXHRkZXZpY2UgPSBkZXZpY2UucmVwbGFjZShcIi15ZWxsb3dcIiwgXCJcIilcblx0ZGV2aWNlID0gZGV2aWNlLnJlcGxhY2UoXCItcGlua1wiLCBcIlwiKVxuXHRkZXZpY2UgPSBkZXZpY2UucmVwbGFjZShcIi1zcGFjZS1ncmV5XCIsIFwiXCIpXG5cdGRldmljZSA9IGRldmljZS5yZXBsYWNlKFwiLXJvc2VcIiwgXCJcIilcblx0ZGV2aWNlID0gZGV2aWNlLnJlcGxhY2UoXCI1c1wiLCBcIjVcIilcblx0ZGV2aWNlID0gZGV2aWNlLnJlcGxhY2UoXCI1Y1wiLCBcIjVcIilcblx0ZGV2aWNlID0gZGV2aWNlLnJlcGxhY2UoXCItbWluaVwiLCBcIlwiKVxuXHRkZXZpY2UgPSBkZXZpY2UucmVwbGFjZShcIi1haXJcIiwgXCJcIilcblx0ZGV2aWNlID0gZGV2aWNlLnJlcGxhY2UoXCItMlwiLCBcIlwiKVxuXHRkZXZpY2UgPSBkZXZpY2UucmVwbGFjZShcIi00XCIsIFwiXCIpXG5cdGRldmljZSA9IGRldmljZS5yZXBsYWNlKFwiLXNpbHZlclwiLCBcIlwiKVxuXG5cdGNhcHR1cmVkRGV2aWNlLm5hbWUgPSBkZXZpY2VcblxuXHQjIGV4cG9ydHMuZGV2aWNlIGJlY29tZXMgZWl0aGVyIGlwYWQsIGlwYWQtcHJvLCBpcGhvbmUtNSwgaXBob25lLTZzLCBpcGhvbmUtNnMtcGx1c1xuXHRyZXR1cm4gY2FwdHVyZWREZXZpY2VcblxuXG4jIFNwZWNpYWwgQ2hhcmFjdGVyc1xuZXhwb3J0cy5zcGVjaWFsQ2hhciA9IChsYXllcikgLT5cblx0dGV4dCA9IGxheWVyXG5cdGlmIGxheWVyLnR5cGUgPT0gXCJidXR0b25cIiB0aGVuIHRleHQgPSBsYXllci5sYWJlbFxuXHRpZiB0ZXh0Lmh0bWwuaW5kZXhPZihcIi1iXCIpICE9IC0xXG5cdFx0bmV3VGV4dCA9IHRleHQuaHRtbC5yZXBsYWNlKFwiLWIgXCIsIFwiXCIpXG5cdFx0ZXhwb3J0cy51cGRhdGUodGV4dCwgW3t0ZXh0Om5ld1RleHR9LCB7Zm9udFdlaWdodDo2MDB9XSlcblx0aWYgdGV4dC5odG1sLmluZGV4T2YoXCItclwiKSAhPSAtMVxuXHRcdG5ld1RleHQgPSB0ZXh0Lmh0bWwucmVwbGFjZShcIi1yIFwiLCBcIlwiKVxuXHRcdGV4cG9ydHMudXBkYXRlKHRleHQsIFt7dGV4dDpuZXdUZXh0fSwge2NvbG9yOlwicmVkXCJ9XSlcblx0aWYgdGV4dC5odG1sLmluZGV4T2YoXCItcmJcIikgIT0gLTFcblx0XHRuZXdUZXh0ID0gdGV4dC5odG1sLnJlcGxhY2UoXCItcmIgXCIsIFwiXCIpXG5cdFx0ZXhwb3J0cy51cGRhdGUodGV4dCwgW3t0ZXh0Om5ld1RleHR9LCB7Y29sb3I6XCJibHVlXCJ9XSlcblx0aWYgdGV4dC5odG1sLmluZGV4T2YoXCItbGJcIikgIT0gLTFcblx0XHRuZXdUZXh0ID0gdGV4dC5odG1sLnJlcGxhY2UoXCItbGIgXCIsIFwiXCIpXG5cdFx0ZXhwb3J0cy51cGRhdGUodGV4dCwgW3t0ZXh0Om5ld1RleHR9LCB7Y29sb3I6XCJsaWdodC1ibHVlXCJ9XSlcblx0aWYgdGV4dC5odG1sLmluZGV4T2YoXCItZ1wiKSAhPSAtMVxuXHRcdG5ld1RleHQgPSB0ZXh0Lmh0bWwucmVwbGFjZShcIi1nIFwiLCBcIlwiKVxuXHRcdGV4cG9ydHMudXBkYXRlKHRleHQsIFt7dGV4dDpuZXdUZXh0fSwge2NvbG9yOlwiZ3JlZW5cIn1dKVxuXHRpZiB0ZXh0Lmh0bWwuaW5kZXhPZihcIi1vXCIpICE9IC0xXG5cdFx0bmV3VGV4dCA9IHRleHQuaHRtbC5yZXBsYWNlKFwiLW8gXCIsIFwiXCIpXG5cdFx0ZXhwb3J0cy51cGRhdGUodGV4dCwgW3t0ZXh0Om5ld1RleHR9LCB7Y29sb3I6XCJvcmFuZ2VcIn1dKVxuXHRpZiB0ZXh0Lmh0bWwuaW5kZXhPZihcIi1wXCIpICE9IC0xXG5cdFx0bmV3VGV4dCA9IHRleHQuaHRtbC5yZXBsYWNlKFwiLXAgXCIsIFwiXCIpXG5cdFx0ZXhwb3J0cy51cGRhdGUodGV4dCwgW3t0ZXh0Om5ld1RleHR9LCB7Y29sb3I6XCJvcmFuZ2VcIn1dKVxuXHRpZiB0ZXh0Lmh0bWwuaW5kZXhPZihcIi15XCIpICE9IC0xXG5cdFx0bmV3VGV4dCA9IHRleHQuaHRtbC5yZXBsYWNlKFwiLXkgXCIsIFwiXCIpXG5cdFx0ZXhwb3J0cy51cGRhdGUodGV4dCwgW3t0ZXh0Om5ld1RleHR9LCB7Y29sb3I6XCJ5ZWxsb3dcIn1dKVxuXHRpZiB0ZXh0Lmh0bWwuaW5kZXhPZihcIi0jXCIpICE9IC0xXG5cdFx0Y2hvc2VuQ29sb3IgPSB0ZXh0Lmh0bWwuc2xpY2UoMSwgOClcblx0XHRuZXdUZXh0ID0gdGV4dC5odG1sLnNsaWNlKDksIHRleHQuaHRtbC5sZW5ndGgpXG5cdFx0ZXhwb3J0cy51cGRhdGUodGV4dCwgW3t0ZXh0Om5ld1RleHR9LCB7Y29sb3I6Y2hvc2VuQ29sb3J9XSlcblx0aWYgdGV4dC5odG1sLmluZGV4T2YoXCItXCIpICE9IC0xXG5cdFx0bmV3VGV4dCA9IHRleHQuaHRtbC5yZXBsYWNlKFwiLSBcIiwgXCJcIilcblx0XHRleHBvcnRzLnVwZGF0ZSh0ZXh0LCBbe3RleHQ6bmV3VGV4dH1dKVxuXHRpZiBsYXllci5idXR0b25UeXBlID09IFwidGV4dFwiXG5cdFx0bGF5ZXIud2lkdGggPSB0ZXh0LndpZHRoXG5cdGlvcy5sYXlvdXQuc2V0KGxheWVyKVxuXHRpZiBsYXllci50eXBlID09IFwiYnV0dG9uXCIgdGhlbiBsYXllci53aWR0aCA9IHRleHQud2lkdGhcblx0cmV0dXJuIHRleHQuY29sb3JcblxuZXhwb3J0cy51cGRhdGUgPSAobGF5ZXIsIGFycmF5KSAtPlxuXHRpZiBhcnJheSA9PSB1bmRlZmluZWRcblx0XHRhcnJheSA9IFtdXG5cdGlmIGxheWVyLnR5cGUgPT0gXCJ0ZXh0XCJcblx0XHRmb3IgY2hhbmdlIGluIGFycmF5XG5cdFx0XHRrZXkgPSBPYmplY3Qua2V5cyhjaGFuZ2UpWzBdXG5cdFx0XHR2YWx1ZSA9IGNoYW5nZVtrZXldXG5cdFx0XHRpZiBrZXkgPT0gXCJ0ZXh0XCJcblx0XHRcdFx0bGF5ZXIuaHRtbCA9IHZhbHVlXG5cdFx0XHRpZiBrZXkgPT0gXCJmb250V2VpZ2h0XCJcblx0XHRcdFx0bGF5ZXIuc3R5bGVba2V5XSA9IHZhbHVlXG5cdFx0XHRpZiBrZXkgPT0gXCJjb2xvclwiXG5cdFx0XHRcdGxheWVyLmNvbG9yID0gZXhwb3J0cy5jb2xvcih2YWx1ZSlcblxuXHRcdHRleHRGcmFtZSA9IGV4cG9ydHMudGV4dEF1dG9TaXplKGxheWVyKVxuXHRcdGxheWVyLndpZHRoID0gdGV4dEZyYW1lLndpZHRoXG5cdFx0bGF5ZXIuaGVpZ2h0ID0gdGV4dEZyYW1lLmhlaWdodFxuXG5cblx0aW9zLmxheW91dC5zZXQoKVxuXG4jIERlY2lkZXMgaWYgaXQgc2hvdWxkIGJlIHdoaXRlL2JsYWNrIHRleHRcbmV4cG9ydHMuYXV0b0NvbG9yID0gKGNvbG9yT2JqZWN0KSAtPlxuXHRyZ2IgPSBjb2xvck9iamVjdC50b1JnYlN0cmluZygpXG5cdHJnYiA9IHJnYi5zdWJzdHJpbmcoNCwgcmdiLmxlbmd0aC0xKVxuXHRyZ2IgPSByZ2IucmVwbGFjZSgvIC9nLCAnJylcblx0cmdiID0gcmdiLnJlcGxhY2UoLyAvZywgJycpXG5cdHJnYiA9IHJnYi5zcGxpdCgnLCcpXG5cdHJlZCA9IHJnYlswXVxuXHRncmVlbiA9IHJnYlsxXVxuXHRibHVlID0gcmdiWzJdXG5cdGNvbG9yID0gXCJcIlxuXHRpZiAocmVkKjAuMjk5ICsgZ3JlZW4qMC41ODcgKyBibHVlKjAuMTE0KSA+IDE4NlxuXHRcdGNvbG9yID0gXCIjMDAwXCJcblx0ZWxzZVxuXHRcdGNvbG9yID0gXCIjRkZGXCJcblx0cmV0dXJuIGNvbG9yXG5cbmV4cG9ydHMuc2FtZVBhcmVudCA9IChsYXllcjEsIGxheWVyMikgLT5cblx0cGFyZW50T25lID0gbGF5ZXIxLnN1cGVyTGF5ZXJcblx0cGFyZW50VHdvID0gbGF5ZXIyLnN1cGVyTGF5ZXJcblx0aWYgcGFyZW50T25lID09IHBhcmVudFR3b1xuXHRcdHJldHVybiB0cnVlXG5cdGVsc2Vcblx0XHRyZXR1cm4gZmFsc2VcblxuXG5leHBvcnRzLnRpbWVEZWxlZ2F0ZSA9IChsYXllciwgY2xvY2tUeXBlKSAtPlxuXHRAdGltZSA9IGV4cG9ydHMuZ2V0VGltZSgpXG5cdFV0aWxzLmRlbGF5IDYwIC0gQHRpbWUuc2VjcywgLT5cblx0XHRAdGltZSA9IGV4cG9ydHMuZ2V0VGltZSgpXG5cdFx0ZXhwb3J0cy51cGRhdGUobGF5ZXIsIFt0ZXh0OmV4cG9ydHMudGltZUZvcm1hdHRlcihAdGltZSwgY2xvY2tUeXBlKV0pXG5cdFx0VXRpbHMuaW50ZXJ2YWwgNjAsIC0+XG5cdFx0XHRAdGltZSA9IGV4cG9ydHMuZ2V0VGltZSgpXG5cdFx0XHRleHBvcnRzLnVwZGF0ZShsYXllciwgW3RleHQ6ZXhwb3J0cy50aW1lRm9ybWF0dGVyKEB0aW1lLCBjbG9ja1R5cGUpXSlcblxuZXhwb3J0cy50aW1lRm9ybWF0dGVyID0gKHRpbWVPYmosIGNsb2NrVHlwZSkgLT5cblx0aWYgY2xvY2tUeXBlID09IGZhbHNlXG5cdFx0aWYgdGltZU9iai5ob3VycyA+IDEyXG5cdFx0XHR0aW1lT2JqLmhvdXJzID0gdGltZU9iai5ob3VycyAtIDEyXG5cdFx0aWYgdGltZU9iai5ob3VycyA9PSAwIHRoZW4gdGltZU9iai5ob3VycyA9IDEyXG5cdGlmIHRpbWVPYmoubWlucyA8IDEwXG5cdFx0dGltZU9iai5taW5zID0gXCIwXCIgKyB0aW1lT2JqLm1pbnNcblx0cmV0dXJuIHRpbWVPYmouaG91cnMgKyBcIjpcIiArIHRpbWVPYmoubWluc1xuXG5leHBvcnRzLnNldHVwQ29tcG9uZW50ID0gKGFycmF5LCBkZWZhdWx0cykgLT5cblx0aWYgYXJyYXkgPT0gdW5kZWZpbmVkXG5cdFx0YXJyYXkgPSBbXVxuXHRvYmogPSB7fVxuXHRmb3IgaSBpbiBkZWZhdWx0cy5wcm9wc1xuXHRcdGlmIGFycmF5W2ldICE9IHVuZGVmaW5lZFxuXHRcdFx0b2JqW2ldID0gYXJyYXlbaV1cblx0XHRlbHNlXG5cdFx0XHRvYmpbaV0gPSBkZWZhdWx0c1tpXVxuXHRyZXR1cm4gb2JqXG5cblxuZXhwb3J0cy5lbW9qaUZvcm1hdHRlciA9IChzdHJpbmcpIC0+XG5cdFx0dW5pY29kZUZvcm1hdCA9IFwiXCJcblx0XHRpZiBzdHJpbmdbMF0gPT0gXCJFXCIgfHwgc3RyaW5nWzBdID09IFwiM1wiIHx8IHN0cmluZ1swXSA9PSBcIjJcIiB8fCBzdHJpbmdbMF0gPT0gXCJDXCJcblx0XHRcdGFycmF5T2ZDb2RlcyA9IHN0cmluZy5zcGxpdChcIiBcIilcblx0XHRcdGZvciBjb2RlIGluIGFycmF5T2ZDb2Rlc1xuXHRcdFx0XHR1bmljb2RlRm9ybWF0ID0gdW5pY29kZUZvcm1hdCArIFwiJVwiICsgY29kZVxuXHRcdGVsc2Vcblx0XHRcdGFycmF5T2ZDb2RlcyA9IHN0cmluZy5zcGxpdChcIiBcIilcblx0XHRcdHVuaWNvZGVGb3JtYXQgPSBcIiVGMCU5RlwiXG5cdFx0XHRmb3IgY29kZSBpbiBhcnJheU9mQ29kZXNcblx0XHRcdFx0dW5pY29kZUZvcm1hdCA9IHVuaWNvZGVGb3JtYXQgKyBcIiVcIiArIGNvZGVcblx0XHRkZWNvZGVkID0gZGVjb2RlVVJJQ29tcG9uZW50KHVuaWNvZGVGb3JtYXQpXG5cdFx0cmV0dXJuIGRlY29kZWRcblxuZXhwb3J0cy5idWlsZEVtb2ppc09iamVjdCA9ICgpIC0+XG5cdGVtb2ppcyA9IFtdXG5cdGZvciBjb2RlLCBpbmRleCBpbiBpb3MuYXNzZXRzLmVtb2ppQ29kZXNcblx0XHRlbW9qaSA9IGV4cG9ydHMuZW1vamlGb3JtYXR0ZXIoY29kZSlcblx0XHRlbW9qaXMucHVzaCBlbW9qaVxuXG5leHBvcnRzLndyaXRlID0gKG9iaiwgdGV4dCkgLT5cblx0aWYgb2JqLnR5cGUgPT0gJ2ZpZWxkJ1xuXHRcdG9iai50ZXh0Lmh0bWwgPSBvYmoudGV4dC5odG1sICsgdGV4dFxuXHRlbHNlXG5cdFx0b2JqLmh0bWwgPSBvYmouaHRtbCArIHRleHRcbiIsImlvcyA9IHJlcXVpcmUgJ2lvcy1raXQnXG5cbmV4cG9ydHMuY3JlYXRlID0gKG9iaikgLT5cblx0aWYgb2JqID09IHVuZGVmaW5lZCB0aGVuIG9iaiA9IHt9XG5cblx0dmlldyA9IG5ldyBMYXllclxuXHR2aWV3LmNvbnN0cmFpbnRzID0ge31cblxuXHQjIFNldCBmcmFtZXIgcHJvcHNcblx0Zm9yIHByb3AgaW4gaW9zLmxpYi5sYXllclByb3BzXG5cdFx0XHRpZiBvYmpbcHJvcF0gdGhlbiB2aWV3W3Byb3BdID0gb2JqW3Byb3BdXG5cblx0IyBTZXQgY29uc3RyYWludHNcblx0aWYgb2JqW1wiY29uc3RyYWludHNcIl1cblx0XHR2aWV3LmNvbnN0cmFpbnRzID0gb2JqW1wiY29uc3RyYWludHNcIl1cblx0XHRpb3MubGF5b3V0LnNldCh2aWV3KVxuXG5cdHJldHVybiB2aWV3XG4iLCIjaU9TS2l0IE1vZHVsZVxuI0J5IEtldnluIEFybm90dFxuXG4jIEltcG9ydCBmcmFtZXdvcmtcbmV4cG9ydHMubGF5b3V0ID0gbGF5b3V0ID0gcmVxdWlyZSAnaW9zLWtpdC1sYXlvdXQnXG5leHBvcnRzLmxpYiA9IGxpYnJhcnkgPSByZXF1aXJlICdpb3Mta2l0LWxpYnJhcnknXG5leHBvcnRzLnV0aWxzID0gdXRpbHMgPSByZXF1aXJlICdpb3Mta2l0LXV0aWxzJ1xuZXhwb3J0cy5jb252ZXJ0ZXIgPSBjb252ID0gcmVxdWlyZSAnaW9zLWtpdC1jb252ZXJ0ZXInXG5cbiMgU2V0dXAgcmVzb3VyY2VzXG5leHBvcnRzLmRldmljZSA9IHV0aWxzLmdldERldmljZSgpXG5leHBvcnRzLmFzc2V0cyA9IGxpYnJhcnkuYXNzZXRzXG5leHBvcnRzLmlzUGFkID0gLT4gaWYgZXhwb3J0cy5kZXZpY2UubmFtZS5pbmRleE9mKCdpcGFkJykgIT0gLTEgdGhlbiByZXR1cm4gdHJ1ZSBlbHNlIHJldHVybiBmYWxzZVxuZXhwb3J0cy5pc1Bob25lID0gLT4gaWYgZXhwb3J0cy5kZXZpY2UubmFtZS5pbmRleE9mKCdpcGhvbmUnKSAhPSAtMSB0aGVuIHJldHVybiB0cnVlIGVsc2UgcmV0dXJuIGZhbHNlXG5cbiMgU2hvcnRjdXRzXG5leHBvcnRzLmNvbnZlcnQgPSAoc2tldGNoT2JqKSAtPlxuICBjb252LmNvbnZlcnQoc2tldGNoT2JqKVxuXG5leHBvcnRzLmNvbG9yID0gKHN0cmluZykgLT5cbiAgcmV0dXJuIHV0aWxzLmNvbG9yKHN0cmluZylcblxuZXhwb3J0cy5weCA9IChudW0pIC0+XG4gIHJldHVybiB1dGlscy5weChudW0pXG5cbmV4cG9ydHMucHQgPSAobnVtKSAtPlxuICByZXR1cm4gdXRpbHMucHQobnVtKVxuXG4jSW1wb3J0IENvbXBvbmVudHNcbmV4cG9ydHMuYWxlcnQgPSByZXF1aXJlICdpb3Mta2l0LWFsZXJ0J1xuZXhwb3J0cy5iYW5uZXIgPSByZXF1aXJlICdpb3Mta2l0LWJhbm5lcidcbmV4cG9ydHMuYnV0dG9uID0gcmVxdWlyZSAnaW9zLWtpdC1idXR0b24nXG5leHBvcnRzLmZpZWxkID0gcmVxdWlyZSAnaW9zLWtpdC1maWVsZCdcbmV4cG9ydHMua2V5Ym9hcmQgPSByZXF1aXJlICdpb3Mta2l0LWtleWJvYXJkJ1xuZXhwb3J0cy5uYXYgPSByZXF1aXJlICdpb3Mta2l0LW5hdi1iYXInXG5leHBvcnRzLnNoZWV0ID0gcmVxdWlyZSAnaW9zLWtpdC1zaGVldCdcbmV4cG9ydHMuc3RhdHVzID0gcmVxdWlyZSAnaW9zLWtpdC1zdGF0dXMtYmFyJ1xuZXhwb3J0cy50YWIgPSByZXF1aXJlICdpb3Mta2l0LXRhYi1iYXInXG5leHBvcnRzLnRleHQgPSByZXF1aXJlICdpb3Mta2l0LXRleHQnXG5leHBvcnRzLnZpZXcgPSByZXF1aXJlICdpb3Mta2l0LXZpZXcnXG5cblxuIyNTZXR1cCBDb21wb25lbnRzXG5leHBvcnRzLkFsZXJ0ID0gZXhwb3J0cy5hbGVydC5jcmVhdGVcbmV4cG9ydHMuQmFubmVyID0gZXhwb3J0cy5iYW5uZXIuY3JlYXRlXG5leHBvcnRzLkJ1dHRvbiA9IGV4cG9ydHMuYnV0dG9uLmNyZWF0ZVxuZXhwb3J0cy5GaWVsZCA9IGV4cG9ydHMuZmllbGQuY3JlYXRlXG5leHBvcnRzLktleWJvYXJkID0gZXhwb3J0cy5rZXlib2FyZC5jcmVhdGVcbmV4cG9ydHMuTmF2QmFyID0gZXhwb3J0cy5uYXYuY3JlYXRlXG5leHBvcnRzLlNoZWV0ID0gZXhwb3J0cy5zaGVldC5jcmVhdGVcbmV4cG9ydHMuU3RhdHVzQmFyID0gZXhwb3J0cy5zdGF0dXMuY3JlYXRlXG5leHBvcnRzLlRhYiA9IGV4cG9ydHMudGFiLnRhYlxuZXhwb3J0cy5UYWJCYXIgPSBleHBvcnRzLnRhYi5iYXJcbmV4cG9ydHMuVGV4dCA9IGV4cG9ydHMudGV4dC5jcmVhdGVcbmV4cG9ydHMuVmlldyA9IGV4cG9ydHMudmlldy5jcmVhdGVcblxuXG4jIExheWVycyBmcm9tIGNvbnZlcnRpbmdcbmV4cG9ydHMubCA9IHt9XG4iXX0=
