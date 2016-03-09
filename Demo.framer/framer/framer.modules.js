require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"iOSKit":[function(require,module,exports){
var defaults, error, framerDevices, layoutAlign, layoutChange, layoutSize, makeStyleChange, onResize, screen, setProps, setupComponent, textAutoSize;

framerDevices = {
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

exports.device = 0;

exports.name = 0;

exports.scale = 0;

exports.height = 0;

exports.width = 0;

exports.mobile = 0;

exports.platform = 0;

exports.orientation = 0;

screen = {};

exports.getDevice = function() {
  var device;
  device = Framer.Device.deviceType;
  if (innerWidth === 1242) {
    device = "apple-iphone-6s-plus-silver";
  }
  exports.scale = framerDevices[device].scale;
  if (device === "fullscreen") {
    exports.width = window.innerWidth;
    exports.height = window.innerHeight;
  } else {
    exports.width = framerDevices[device].width;
    exports.height = framerDevices[device].height;
    if (window.innerWidth === 1242 || window.innerWidth === 2208) {
      exports.width = window.innerWidth;
      exports.height = window.innerHeight;
      exports.scale = 3;
    }
  }
  exports.mobile = framerDevices[device].mobile;
  exports.platform = framerDevices[device].platform;
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
  exports.device = device.replace("-silver", "");
  return screen = {
    width: exports.width,
    height: exports.height
  };
};

exports.orient = function() {
  var tempHeight, tempWidth;
  if (exports.orientation === -90) {
    tempHeight = exports.height;
    tempWidth = exports.width;
    exports.height = tempWidth;
    return exports.width = tempHeight;
  }
};

exports.getDevice();

exports.orient();

onResize = function() {
  exports.getDevice();
  return exports.layout();
};

window.addEventListener("resize", onResize);

window.addEventListener("orientationchange", onResize);

defaults = {
  alert: {
    text: {
      title: "Title",
      message: "Message",
      action: "Action",
      secondaryAction: "secondaryAction"
    }
  },
  banner: {
    text: {
      title: "Title",
      message: "Message",
      action: "Action",
      time: "now",
      icon: void 0
    }
  },
  button: {
    text: "text",
    type: "text",
    style: "light",
    backgroundColor: "white",
    color: "#007AFF",
    fontSize: 17,
    fontWeight: "regular",
    name: "button",
    blur: true,
    superLayer: void 0
  },
  framerProps: ["name", "width", "height", "superLayer", "opacity", "color", "backgroundColor", "x", "y", "midX", "midY", "maxX", "minX", "visible", "clip", "scrollHorizontal", "scrollVertical", "ignoreEvents", "z", "scaleX", "scaleY", "scaleZ", "scale", "skewX", "skewY", "skew", "originX", "originY", "originZ", "perspective", "perspectiveOriginX", "perspectiveOriginY", "rotationX", "rotationY", "rotationZ", "rotation", "blur", "brightness", "saturate", "hueRotate", "contrast", "invert", "grayscale", "sepia", "shadowX", "shadowY", "shadowBlur", "shadowSpread", "shadowColor", "borderColor", "borderWidth", "force2d", "flat", "backfaceVisible", "name", "matrix", "_matrix2d", "transformMatrix", "matrix3d", "borderRadius", "point", "size", "frame", "html", "image", "scrollX", "scrollY", "_domEventManager", "mouseWheelSpeedMultiplier", "velocityThreshold", "animationOptions", "constrained"],
  cssProps: ["fontFamily", "fontSize", "textAlign", "fontWeight", "lineHeight"],
  constraintProps: ["height", "width"],
  constraintTypes: ["top", "leading", "trailing", "bottom"],
  constraintAligns: ["horizontalCenter", "verticalCenter", "leadingEdges", "trailingEdges", "topEdges", "bottomEdges", "align", "vertical", "horizontal"],
  constraints: {
    top: {
      "prop": "y",
      "objProp": "maxY",
      "objProp2": "height",
      "opp": "bottom"
    },
    leading: {
      "prop": "x",
      "objProp": "maxX",
      "objProp2": "width",
      "opp": "trailing"
    },
    bottom: {
      "prop": "maxY",
      "objProp": "height",
      "objProp2": "y",
      "opp": "top"
    },
    trailing: {
      "prop": "maxX",
      "objProp": "width",
      "objProp2": "x",
      "opp": "leading"
    }
  },
  lockScreen: {
    time: "default",
    date: "default",
    passcode: false,
    clock24: false,
    type: "lockScreen"
  },
  keyboardProps: ["returnKey"],
  keyboard: {
    returnKey: "default"
  },
  menu: {
    options: ["Option", "Option", "Option"],
    exit: "Cancel",
    animated: false,
    description: void 0
  },
  navBar: {
    title: "title",
    leftAction: "leftAction",
    rightAction: "rightAction"
  },
  statusBar: {
    carrier: "",
    network: "LTE",
    battery: 100,
    signal: 5,
    style: "dark",
    clock24: false,
    type: "statusBar"
  },
  tabBar: {
    tabs: [],
    start: 0,
    tyep: "tabBar",
    backgroundColor: "white",
    activeLabelColor: "#0076FF",
    activeFillColor: "#0076FF",
    inactiveLabelColor: "#929292",
    inactiveFillColor: "#929292"
  },
  tab: {
    label: "label",
    icon: "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='25px' height='25px' viewBox='0 0 25 25' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'> <!-- Generator: Sketch 3.6.1 (26313) - http://www.bohemiancoding.com/sketch --> <title>1</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='1'> <g id='Bottom-Bar/Tab-Bar' transform='translate(-25.000000, -7.000000)' fill='#0076FF'> <g id='Placeholders' transform='translate(25.000000, 7.000000)'> <rect id='1' x='0' y='0' width='25' height='25' rx='3'></rect> </g> </g> </g> </svg>",
    active: void 0,
    unactive: void 0,
    tabBar: void 0,
    type: "tab"
  },
  text: {
    defaults: {
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
      textTransform: "none"
    }
  }
};

setProps = function(object, dest) {
  var keys;
  keys = Object.keys(object);
  return dest["props"] = keys;
};

setProps(defaults.text.defaults, defaults.text);

setProps(defaults.alert.text, defaults.alert);

setProps(defaults.banner.text, defaults.banner);

setProps(defaults.lockScreen, defaults.lockScreen);

setProps(defaults.statusBar, defaults.statusBar);

setProps(defaults.tab, defaults.tab);

setProps(defaults.tabBar, defaults.tabBar);

setProps(defaults.navBar, defaults.navBar);

setProps(defaults.button, defaults.button);

setProps(defaults.menu, defaults.menu);

setupComponent = function(component, array) {
  var i, j, len, obj, ref;
  if (array === void 0) {
    array = [];
  }
  obj = {};
  ref = defaults[component].props;
  for (j = 0, len = ref.length; j < len; j++) {
    i = ref[j];
    if (array[i] !== void 0) {
      obj[i] = array[i];
    } else {
      obj[i] = defaults[component][i];
    }
  }
  return obj;
};

exports.pt = function(px) {
  var pt;
  pt = px / exports.scale;
  pt = Math.round(pt);
  return pt;
};

exports.px = function(pt) {
  var px;
  px = pt * exports.scale;
  px = Math.round(px);
  return px;
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
  switch (color) {
    case "red":
      color = "#FE3824";
      break;
    case "blue":
      color = "#0076FF";
      break;
    case "pink":
      color = "#FE2851";
      break;
    case "grey":
      color = "#929292";
      break;
    case "gray":
      color = "#929292";
      break;
    case "black":
      color = "#030303";
      break;
    case "white":
      color = "#EFEFF4";
      break;
    case "orange":
      color = "#FF9600";
      break;
    case "green":
      color = "#44DB5E";
      break;
    case "light-blue":
      color = "#54C7FC";
      break;
    case "yellow":
      color = "#FFCD00";
  }
  startIndex = layer.html.search("fill=\"#");
  fillString = layer.html.slice(startIndex, layer.html.length);
  endIndex = fillString.search("\">");
  string = fillString.slice(0, endIndex);
  newString = "fill=\"" + color;
  return layer.html = layer.html.replace(string, newString);
};

error = function(context, code) {
  if (code === 1) {
    print("Error Invalid Relationship – Layer id:" + context.id + " has a relationship with another layer not in the same superLayer.");
  }
  if (code === 2) {
    print("Error " + context + " requires a layer");
  }
  if (code === 3) {
    print("Error " + context + " cannot refer to itself");
  }
  if (code === 4) {
    print("Error " + context + " is not a valid weight. Please use 100, 200, 300... or Thin, Light, Regular...");
  }
  if (code === 5) {
    return print("Error Layer id:" + context + " is not a valid Tab object. Please create a Tab using new module.Tab.");
  }
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
    day: day,
    date: date,
    hours: hours,
    mins: mins,
    secs: secs
  };
};

exports.layout = function(layer) {
  var a, c, j, k, l, len, len1, len2, p, ref, ref1, ref2, results;
  if (layer === void 0) {
    this.array = Framer.CurrentContext.layers;
  } else {
    this.array = [layer];
  }
  ref = this.array;
  results = [];
  for (j = 0, len = ref.length; j < len; j++) {
    layer = ref[j];
    if (layer.constraints !== void 0) {
      ref1 = defaults.constraintProps;
      for (k = 0, len1 = ref1.length; k < len1; k++) {
        p = ref1[k];
        layoutSize(layer, p);
      }
      ref2 = defaults.constraintTypes;
      for (l = 0, len2 = ref2.length; l < len2; l++) {
        c = ref2[l];
        if (layer.constraints[c] !== void 0) {
          layoutChange(layer, c);
        }
      }
      results.push((function() {
        var len3, m, ref3, results1;
        ref3 = defaults.constraintAligns;
        results1 = [];
        for (m = 0, len3 = ref3.length; m < len3; m++) {
          a = ref3[m];
          if (layer.constraints[a]) {
            results1.push(layoutAlign(layer, a));
          } else {
            results1.push(void 0);
          }
        }
        return results1;
      })());
    } else {
      results.push(void 0);
    }
  }
  return results;
};

layoutAlign = function(layer, type) {
  var declaredConstraint, deltaMove, i, j, len;
  declaredConstraint = layer.constraints[type];
  if (layer.superLayer) {
    this.superLayer = layer.superLayer;
  } else {
    this.superLayer = screen;
  }
  if (declaredConstraint === parseInt(declaredConstraint, 10)) {
    error(type, 2);
  }
  if (declaredConstraint === layer) {
    error(type, 3);
  }
  if (typeof declaredConstraint === "object") {
    for (j = 0, len = declaredConstraint.length; j < len; j++) {
      i = declaredConstraint[j];
      if (typeof i === "string") {
        this.type = i;
      }
      if (typeof i === "object") {
        this.layer = i;
      }
    }
    if (this.type === "horizontalCenter" || this.type === "horizontal") {
      deltaMove = (this.layer.width - layer.width) / 2;
      layer.x = this.layer.x + deltaMove;
      layer.constraints["leading"] = exports.pt(layer.x);
    }
    if (this.type === "verticalCenter" || this.type === "vertical") {
      deltaMove = (this.layer.height - layer.height) / 2;
      layer.y = this.layer.y + deltaMove;
      layer.constraints["top"] = exports.pt(layer.y);
    }
    if (this.type === "leadingEdges" || this.type === "leading") {
      layer.x = this.layer.x;
      layer.constraints["leading"] = exports.pt(layer.x);
    }
    if (this.type === "trailingEdges" || this.type === "trailing") {
      layer.maxX = this.layer.maxX;
      layer.constraints["trailing"] = exports.pt(this.superLayer.width - layer.maxX);
    }
    if (this.type === "topEdges" || this.type === "top") {
      layer.y = this.layer.y;
      layer.constraints["top"] = exports.pt(layer.y);
    }
    if (this.type === "bottomEdges" || this.type === "bottom") {
      layer.maxY = this.layer.maxY;
      layer.constraints["bottom"] = exports.pt(this.superLayer.height - layer.maxY);
    }
  }
  if (type === "horizontalCenter" || type === "horizontal") {
    deltaMove = (declaredConstraint.width - layer.width) / 2;
    layer.x = declaredConstraint.x + deltaMove;
  }
  if (type === "verticalCenter" || type === "vertical") {
    deltaMove = (declaredConstraint.height - layer.height) / 2;
    layer.y = declaredConstraint.y + deltaMove;
  }
  if (type === "leadingEdges") {
    layer.x = declaredConstraint.x;
    layer.constraints["leading"] = exports.pt(declaredConstraint.x);
  }
  if (type === "trailingEdges") {
    layer.maxX = declaredConstraint.maxX;
    layer.constraints["trailing"] = exports.pt(this.superLayer.height - layer.maxX);
  }
  if (type === "topEdges") {
    layer.y = declaredConstraint.y;
    layer.constraints["top"] = exports.pt(layer.y);
  }
  if (type === "bottomEdges") {
    layer.maxY = declaredConstraint.maxY;
    layer.constraints["bottom"] = exports.pt(this.superLayer.height - layer.maxY);
  }
  if (type === "align") {
    if (declaredConstraint === "horizontal") {
      layer.centerX();
    }
    if (declaredConstraint === "vertical") {
      layer.centerY();
    }
    if (declaredConstraint === "center") {
      layer.center();
    }
    if (declaredConstraint === "vertical") {
      return layer.centerY();
    }
  }
};

layoutSize = function(layer, type) {
  var textFrame;
  if (layer.constraints[type]) {
    layer[type] = exports.px(layer.constraints[type]);
    if (layer.type === "text") {
      textFrame = textAutoSize(layer);
      layer.width = textFrame.width;
      return layer.height = textFrame.height;
    }
  }
};

layoutChange = function(layer, type) {
  var j, k, len, len1, objProp, objProp2, object, opp, prop, ref, ref1, results, superTrait, trait;
  if (layer.constraints[type] !== void 0) {
    prop = defaults.constraints[type].prop;
    objProp = defaults.constraints[type].objProp;
    opp = defaults.constraints[type].opp;
    superTrait = defaults.constraints[type].objProp;
    if (objProp !== "width" && objProp !== "height") {
      superTrait = defaults.constraints[type].objProp2;
    }
    if (layer.superLayer !== null) {
      this[superTrait] = layer.superLayer[superTrait];
    } else {
      this[superTrait] = exports[superTrait];
    }
    if (type === "top" || type === "leading") {
      if (layer.constraints[type] === parseInt(layer.constraints[type], 10)) {
        layer[prop] = layer.constraints[type] * exports.scale;
      } else {
        if (layer.constraints[type].length === void 0) {
          layer[prop] = layer.constraints[type][objProp];
        }
        if (layer.constraints[type].length === 1) {
          if (layer.constraints[type][0] === parseInt(layer.constraints[type][0], 10)) {
            layer[prop] = layer.constraints[type][0] * exports.scale;
          } else {
            layer[prop] = layer.constraints[type][0][objProp];
          }
        }
        if (layer.constraints[type].length > 1) {
          ref = layer.constraints[type];
          for (j = 0, len = ref.length; j < len; j++) {
            object = ref[j];
            if (object === parseInt(object, 10)) {
              this.objInt = object;
            } else {
              this.objLayer = object;
            }
          }
          layer[prop] = (this.objInt * exports.scale) + this.objLayer[objProp];
        }
      }
      if (layer.constraints[opp] !== void 0) {
        trait = defaults.constraints[opp]["objProp"];
        if (layer.constraints[opp] === parseInt(layer.constraints[opp], 10)) {
          return layer[trait] = this[superTrait] - (layer[prop] + (exports.scale * layer.constraints[opp]));
        } else {
          if (layer.constraints[opp].length === void 0) {
            layer[trait] = layer[prop] - layer.constraints[opp][prop];
            if (layer[trait] < 0) {
              return layer[trait] = layer[trait] * -1;
            }
          }
        }
      }
    } else {
      objProp2 = defaults.constraints[type].objProp2;
      if (layer.constraints[opp] === void 0) {
        if (layer.constraints[type] === parseInt(layer.constraints[type], 10)) {
          return layer[prop] = this[superTrait] - (layer.constraints[type] * exports.scale);
        } else {
          if (layer.constraints[type].length === void 0) {
            if (exports.sameParent(layer, layer.constraints[type])) {
              layer[prop] = layer.constraints[type][objProp2];
            } else {
              error(layer, 1);
            }
          }
          if (layer.constraints[type].length === 1) {
            if (layer.constraints[type][0] === parseInt(layer.constraints[type][0], 10)) {
              layer[prop] = this[objProp] - (layer.constraints[type][0] * exports.scale);
            } else {
              if (exports.sameParent(layer, layer.constraints[type][0])) {
                layer[prop] = layer.constraints[type][0][objProp2];
              } else {
                error(layer, 1);
              }
            }
          }
          if (layer.constraints[type].length > 1) {
            ref1 = layer.constraints[type];
            results = [];
            for (k = 0, len1 = ref1.length; k < len1; k++) {
              object = ref1[k];
              if (object === parseInt(object, 10)) {
                this.objInt = object;
              } else {
                this.objLayer = object;
              }
              results.push(layer[prop] = this.objLayer[objProp2] - exports.scale * this.objInt);
            }
            return results;
          }
        }
      }
    }
  }
};

exports.styles = {};

exports.addStyle = function(array) {
  var key;
  key = Object.keys(array)[0];
  return exports.styles[key] = array[key];
};

exports.apply = function(layer, style) {
  var cssProps, framerProps, j, len, p, props, results;
  style = exports.styles[style];
  props = Object.keys(style);
  framerProps = ["name", "width", "height", "superLayer", "opacity", "color", "backgroundColor", "x", "y", "midX", "midY", "maxX", "minX", "visible", "clip", "scrollHorizontal", "scrollVertical", "ignoreEvents", "z", "scaleX", "scaleY", "scaleZ", "scale", "skewX", "skewY", "skew", "originX", "originY", "originZ", "perspective", "perspectiveOriginX", "perspectiveOriginY", "rotationX", "rotationY", "rotationZ", "rotation", "blur", "brightness", "saturate", "hueRotate", "contrast", "invert", "grayscale", "sepia", "shadowX", "shadowY", "shadowBlur", "shadowSpread", "shadowColor", "borderColor", "borderWidth", "force2d", "flat", "backfaceVisible", "name", "matrix", "_matrix2d", "transformMatrix", "matrix3d", "borderRadius", "point", "size", "frame", "html", "image", "scrollX", "scrollY", "_domEventManager", "mouseWheelSpeedMultiplier", "velocityThreshold", "animationOptions", "constrained"];
  cssProps = ["fontFamily", "fontSize", "textAlign", "fontWeight", "lineHeight", "textTransform"];
  results = [];
  for (j = 0, len = props.length; j < len; j++) {
    p = props[j];
    if (framerProps.indexOf(p) !== -1) {
      if (style[p] === parseInt(style[p], 10)) {
        layer[p] = exports.px(style[p]);
      } else {
        layer[p] = style[p];
      }
    }
    if (cssProps.indexOf(p) !== -1) {
      if (p === "fontSize") {
        layer.style["font-size"] = exports.px(style[p]) + "px";
      }
      if (p === "fontFamily") {
        layer.style["font-family"] = style[p];
      }
      if (p === "textAlign") {
        layer.style["text-align"] = style[p];
      }
      if (p === "textTransform") {
        layer.style["text-transform"] = style[p];
      }
      if (p === "fontWeight") {
        if (style[p] === parseInt(style[p], 10)) {
          layer.style["font-weight"] = style[p];
        } else {
          switch (style[p]) {
            case "ultrathin":
              layer.style["font-weight"] = 100;
              break;
            case "thin":
              layer.style["font-weight"] = 200;
              break;
            case "light":
              layer.style["font-weight"] = 300;
              break;
            case "regular":
              layer.style["font-weight"] = 400;
              break;
            case "medium":
              layer.style["font-weight"] = 500;
              break;
            case "semibold":
              layer.style["font-weight"] = 600;
              break;
            case "bold":
              layer.style["font-weight"] = 700;
              break;
            case "black":
              layer.style["font-weight"] = 800;
              break;
            default:
              error(p, 4);
          }
        }
      }
      if (p === "lineHeight") {
        if (style[p] === "auto") {
          results.push(layer.style["line-height"] = exports.px(style["fontSize"]) * 1.2 + "px");
        } else {
          results.push(layer.style["line-height"] = exports.px(style[p]) + "px");
        }
      } else {
        results.push(void 0);
      }
    } else {
      results.push(void 0);
    }
  }
  return results;
};

exports.bgBlur = function(layer) {
  layer.style["-webkit-backdrop-filter"] = "blur(" + (exports.px(5)) + "px)";
  return layer;
};

exports.Custom = function(style, array) {
  var isStyleValid, layer, newStyleName, obj1, obj2, obj3, styleNum;
  layer = new Layer;
  isStyleValid = exports.styles[style];
  if (isStyleValid === void 0) {
    if (array !== void 0) {
      exports.addStyle((
        obj1 = {},
        obj1["" + style] = array,
        obj1
      ));
    } else {
      exports.addStyle((
        obj2 = {},
        obj2["" + style] = {
          width: 100
        },
        obj2
      ));
    }
  }
  exports.apply(layer, style);
  if (array !== void 0 && isStyleValid !== void 0) {
    styleNum = "copy";
    newStyleName = style + " " + styleNum;
    exports.addStyle((
      obj3 = {},
      obj3["" + newStyleName] = array,
      obj3
    ));
    exports.apply(layer, newStyleName);
  }
  return layer;
};

makeStyleChange = function(layer, style, change) {
  if (defaults.cssProps.indexOf(style) !== -1) {
    if (style === "fontSize") {
      layer.style["font-size"] = exports.px(change) + "px";
    }
  }
  if (defaults.framerProps.indexOf(style) !== -1) {
    return layer[style] = change;
  }
};

textAutoSize = function(textLayer) {
  var constraints, styles, textWidth;
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
    fontSize: textLayer.style["font-size"],
    fontFamily: textLayer.style["font-family"],
    fontWeight: textLayer.style["font-weight"],
    lineHeight: textLayer.style["line-height"],
    letterSpacing: textLayer.style["letter-spacing"],
    textTransform: textLayer.style["text-transform"]
  };
  textWidth = Utils.textSize(textLayer.html, styles, constraints);
  return {
    width: textWidth.width,
    height: textWidth.height
  };
};

exports.Text = function(array) {
  var change, exceptions, i, j, k, len, len1, obj1, ref, styleArray, textFrame, textLayer, textStyle;
  if (array === void 0) {
    array = [];
  }
  exceptions = Object.keys(array);
  styleArray = {};
  ref = defaults.text.props;
  for (j = 0, len = ref.length; j < len; j++) {
    i = ref[j];
    if (array[i] !== void 0) {
      this[i] = array[i];
    } else {
      this[i] = defaults.text.defaults[i];
    }
    if (i !== "style") {
      styleArray[i] = this[i];
    }
  }
  textLayer = new Layer;
  textLayer.type = "text";
  textLayer.html = this.text;
  textStyle = (
    obj1 = {},
    obj1["" + this.style] = styleArray,
    obj1
  );
  if (exports.styles[this.style] === void 0) {
    exports.addStyle(textStyle);
    exports.apply(textLayer, this.style);
  } else {
    exports.apply(textLayer, this.style);
    for (k = 0, len1 = exceptions.length; k < len1; k++) {
      change = exceptions[k];
      if (change !== "style") {
        makeStyleChange(textLayer, change, array[change]);
      }
    }
  }
  textFrame = textAutoSize(textLayer);
  textLayer.props = {
    height: textFrame.height,
    width: textFrame.width
  };
  return textLayer;
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
        textFrame = textAutoSize(layer);
        layer.width = textFrame.width;
        layer.height = textFrame.height;
      }
    }
  }
  return exports.layout();
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
  }
  if (timeObj.mins < 10) {
    timeObj.mins = "0" + timeObj.mins;
  }
  return timeObj.hours + ":" + timeObj.mins;
};

exports.Alert = function(array) {
  var actionButton, alertBG, all, box, divider, dividerVertical, i, j, leftBox, len, message, overlay, ref, rightBox, secondaryActionButton, title;
  if (array === void 0) {
    array = [];
  }
  ref = defaults.alert.props;
  for (j = 0, len = ref.length; j < len; j++) {
    i = ref[j];
    if (array[i] !== void 0) {
      this[i] = array[i];
    } else {
      this[i] = defaults.alert.text[i];
    }
  }
  all = new Layer({
    backgroundColor: "transparent",
    name: "alert all"
  });
  all.constraints = {
    leading: 0,
    trailing: 0,
    top: 0,
    bottom: 0
  };
  overlay = new Layer({
    backgroundColor: "black",
    opacity: .3,
    superLayer: all,
    name: "overlay"
  });
  overlay.constraints = {
    leading: 0,
    trailing: 0,
    top: 0,
    bottom: 0
  };
  alertBG = new Layer({
    backgroundColor: "white",
    superLayer: all,
    borderRadius: exports.px(10),
    name: "alert bg",
    x: 92,
    y: 537
  });
  alertBG.constraints = {
    align: "center",
    width: 280,
    height: 400
  };
  title = new exports.Text({
    style: "alertTitle",
    superLayer: alertBG,
    text: this.title,
    fontWeight: "medium",
    name: "title"
  });
  title.constraints = {
    align: "horizontal",
    top: 20
  };
  message = new exports.Text({
    style: "alertMessage",
    text: this.message,
    fontSize: 13,
    superLayer: alertBG,
    textAlign: "center",
    lineHeight: 16,
    width: 240,
    name: "message"
  });
  message.constraints = {
    top: [title, 10],
    align: "horizontal",
    width: 220
  };
  divider = new Layer({
    superLayer: alertBG,
    backgroundColor: "#E2E8EB",
    name: "horizontal divider"
  });
  divider.constraints = {
    leading: 0,
    trailing: 0,
    height: 1,
    bottom: 44
  };
  exports.layout();
  actionButton = new exports.Text({
    style: "alertAction",
    color: "#0076FF",
    superLayer: alertBG,
    text: this.action,
    name: "action"
  });
  secondaryActionButton = new exports.Text({
    style: "alertAction",
    text: this.secondaryAction,
    name: "secondaryAction"
  });
  alertBG.constraints["height"] = 20 + exports.pt(title.height) + 10 + exports.pt(message.height) + 64;
  exports.layout();
  if (this.action !== "Action" && this.secondaryAction === "secondaryAction") {
    actionButton.constraints = {
      align: "horizontal",
      bottom: 16
    };
    box = new Layer({
      superLayer: alertBG,
      backgroundColor: "transparent"
    });
    box.constraints = {
      leading: 0,
      trailing: 0,
      bottom: 0,
      height: 44
    };
    secondaryActionButton.visible = false;
    exports.layout();
    return {
      all: all,
      overlay: overlay,
      action: box,
      title: title,
      message: message
    };
  } else {
    leftBox = new Layer({
      width: alertBG.width / 2,
      superLayer: alertBG,
      name: this.secondaryAction + " box",
      backgroundColor: "transparent"
    });
    rightBox = new Layer({
      width: alertBG.width / 2,
      superLayer: alertBG,
      name: this.action + " box",
      backgroundColor: "transparent"
    });
    dividerVertical = new Layer({
      superLayer: alertBG,
      backgroundColor: "#E2E8EB"
    });
    dividerVertical.constraints = {
      width: 1,
      height: 44,
      bottom: 0,
      align: "horizontal"
    };
    leftBox.constraints = {
      height: 44,
      bottom: 0,
      leading: 0
    };
    rightBox.constraints = {
      height: 44,
      bottom: 0,
      trailing: 0
    };
    leftBox.addSubLayer(secondaryActionButton);
    rightBox.addSubLayer(actionButton);
    exports.layout();
    actionButton.constraints = {
      align: "horizontal",
      bottom: 14
    };
    secondaryActionButton.constraints = {
      align: "horizontal",
      bottom: 14
    };
    exports.layout();
    return {
      all: all,
      overlay: overlay,
      action: rightBox,
      secondaryAction: leftBox,
      title: title,
      message: message
    };
  }
};

exports.Banner = function(array) {
  var bannerBG, i, icon, j, len, message, ref, time, title;
  if (array === void 0) {
    array = [];
  }
  ref = defaults.banner.props;
  for (j = 0, len = ref.length; j < len; j++) {
    i = ref[j];
    if (array[i] !== void 0) {
      this[i] = array[i];
    } else {
      this[i] = defaults.banner.text[i];
    }
  }
  bannerBG = new Layer({
    backgroundColor: "transparent",
    name: "banner all"
  });
  if (exports.device === "iphone-6s") {
    bannerBG.html = "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='" + exports.width + "px' height='" + (exports.px(68)) + "px' viewBox='0 0 375 68' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'> <!-- Generator: Sketch 3.6 (26304) - http://www.bohemiancoding.com/sketch --> <title>Notification background</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0.95'> <g id='iOS8-Push-Notification' transform='translate(-58.000000, -23.000000)' fill='#1A1A1C'> <g transform='translate(58.000000, 7.000000)' id='Notification-container'> <g> <path d='M0,16 L375,16 L375,84 L0,84 L0,16 Z M169,77.0048815 C169,75.897616 169.896279,75 171.0024,75 L203.9976,75 C205.103495,75 206,75.8938998 206,77.0048815 L206,77.9951185 C206,79.102384 205.103721,80 203.9976,80 L171.0024,80 C169.896505,80 169,79.1061002 169,77.9951185 L169,77.0048815 Z' id='Notification-background'></path> </g> </g> </g> </g> </svg>";
  }
  if (exports.device === "iphone-6s-plus") {
    bannerBG.html = "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='" + exports.width + "px' height='" + (exports.px(68)) + "px' viewBox='0 0 414 68' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'> <!-- Generator: Sketch 3.6 (26304) - http://www.bohemiancoding.com/sketch --> <title>Notification background Copy</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0.95'> <g id='iOS8-Push-Notification' transform='translate(-43.000000, -74.000000)' fill='#1A1A1C'> <g transform='translate(43.000000, 74.000000)' id='Notification-container'> <g> <path d='M0,0 L414,0 L414,68 L0,68 L0,0 Z M189,61.0048815 C189,59.897616 189.896279,59 191.0024,59 L223.9976,59 C225.103495,59 226,59.8938998 226,61.0048815 L226,61.9951185 C226,63.102384 225.103721,64 223.9976,64 L191.0024,64 C189.896505,64 189,63.1061002 189,61.9951185 L189,61.0048815 Z' id='Notification-background-Copy'></path> </g> </g> </g> </g> </svg>";
  }
  bannerBG.constraints = {
    leading: 0,
    trailing: 0,
    top: 0,
    height: 68
  };
  icon = new Layer({
    superLayer: bannerBG,
    name: "icon",
    borderRadius: exports.px(4.5)
  });
  if (this.icon === void 0) {
    icon.style["background"] = "linear-gradient(-180deg, #67FF81 0%, #01B41F 100%)";
  }
  icon.constraints = {
    height: 20,
    width: 20,
    leading: 15,
    top: 8
  };
  title = new exports.Text({
    style: "bannerTitle",
    text: this.title,
    color: "white",
    fontWeight: "medium",
    fontSize: 13,
    superLayer: bannerBG,
    name: "title"
  });
  title.constraints = {
    top: 5,
    leading: [icon, 11]
  };
  message = new exports.Text({
    style: "bannerMessage",
    text: this.message,
    color: "white",
    fontSize: 13,
    superLayer: bannerBG,
    name: "message"
  });
  message.constraints = {
    leadingEdges: title,
    top: [title, 2]
  };
  time = new exports.Text({
    style: "bannerTime",
    text: this.time,
    color: "white",
    fontSize: 11,
    superLayer: bannerBG,
    name: "time"
  });
  time.constraints = {
    leading: [title, 5],
    bottomEdges: title
  };
  exports.layout();
  return {
    all: bannerBG,
    icon: icon,
    title: title,
    message: message
  };
};

exports.Button = function(array) {
  var backgroundColor, button, color, rgbString, rgbaString, setup, textLayer;
  setup = setupComponent("button", array);
  button = new Layer({
    name: setup.name
  });
  color = "";
  if (setup.superLayer) {
    setup.superLayer.addSubLayer(button);
  }
  switch (setup.type) {
    case "big":
      this.fontSize = 20;
      this.top = 16;
      this.fontWeight = "medium";
      button.constraints = {
        leading: 10,
        trailing: 10,
        height: 57
      };
      button.borderRadius = exports.px(12.5);
      backgroundColor = "";
      switch (setup.style) {
        case "light":
          color = "#007AFF";
          if (setup.blur) {
            backgroundColor = "rgba(255, 255, 255, .9)";
            exports.bgBlur(button);
          } else {
            backgroundColor = "white";
          }
          break;
        case "dark":
          color = "#FFF";
          if (setup.blur) {
            backgroundColor = "rgba(43, 43, 43, .9)";
            exports.bgBlur(button);
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
            exports.bgBlur(button);
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
      this.fontSize = 16;
      this.top = 4;
      button.borderRadius = exports.px(2.5);
      switch (setup.style) {
        case "light":
          color = "#007AFF";
          button.borderColor = "#007AFF";
          break;
        default:
          color = setup.color;
          button.borderColor = setup.color;
      }
      button.backgroundColor = "transparent";
      button.borderWidth = exports.px(1);
      break;
    default:
      button.backgroundColor = "transparent";
      color = setup.color;
      this.fontSize = setup.fontSize;
      this.fontWeight = setup.fontWeight;
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
  textLayer = new exports.Text({
    style: "button" + setup.type + setup.style,
    text: setup.text,
    color: color,
    superLayer: button,
    fontSize: this.fontSize,
    fontWeight: this.fontWeight
  });
  textLayer.constraints = {
    align: "horizontal",
    top: this.top
  };
  switch (setup.type) {
    case "small":
      button.props = {
        width: textLayer.width + exports.px(60),
        height: textLayer.height + exports.px(10)
      };
      button.on(Events.TouchStart, function() {
        button.animate({
          properties: {
            backgroundColor: color
          },
          time: .5
        });
        return textLayer.animate({
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
        return textLayer.animate({
          properties: {
            color: color
          },
          time: .5
        });
      });
      break;
    default:
      button.props = {
        width: textLayer.width,
        height: textLayer.height
      };
  }
  exports.layout();
  return button;
};

exports.LockScreen = function(array) {
  var BG, arrow, setup, slideToUnlock;
  switch (exports.device) {
    case "iphone-6s":
      this.timeFontSize = 88;
      this.dateFontSize = 19;
      break;
    case "iphone-6s-plus":
      this.timeFontSize = 88;
      this.dateFontSize = 19;
      break;
    case "iphone-5":
      this.timeFontSize = 80;
      this.dateFontSize = 19;
      break;
    case "ipad-mini-4":
      this.timeFontSize = 120;
      this.dateFontSize = 24;
      break;
    case "ipad-air-2":
      this.timeFontSize = 120;
      this.dateFontSize = 24;
      break;
    case "ipad-pro":
      this.timeFontSize = 120;
      this.dateFontSize = 24;
      break;
    default:
      this.timeFontSize = 50;
      this.dateFontSize = 19;
  }
  setup = setupComponent("lockScreen", array);
  this.time = exports.getTime();
  BG = new Layer({
    name: "lockScreen Background",
    width: exports.width,
    height: exports.height
  });
  BG.type = "lockScreen";
  BG.style["background"] = "linear-gradient(-180deg, #00C4D0 0%, #F3DABC 100%)";
  if (setup.time === "default") {
    this.timeLayer = new exports.Text({
      style: "lockScreenTime",
      text: exports.timeFormatter(this.time, setup.clock24),
      fontSize: this.timeFontSize,
      fontWeight: "thin",
      color: "white",
      superLayer: BG
    });
    exports.timeDelegate(this.timeLayer, setup.clock24);
  } else {
    this.timeLayer = new exports.Text({
      style: "lockScreenTime",
      text: setup.time,
      fontSize: this.timeFontSize,
      fontWeight: "thin",
      color: "white",
      superLayer: BG
    });
  }
  this.timeLayer.constraints = {
    align: "horizontal",
    top: 60
  };
  if (setup.date === "default") {
    this.dateLayer = new exports.Text({
      style: "lockScreenDate",
      text: this.time.day + ", " + this.time.month + " " + this.time.date,
      fontSize: this.dateFontSize,
      color: "white",
      superLayer: BG
    });
  } else {
    this.dateLayer = new exports.Text({
      style: "lockScreenDate",
      text: setup.date,
      fontSize: this.dateFontSize,
      color: "white",
      superLayer: BG
    });
  }
  this.dateLayer.constraints = {
    horizontalCenter: this.timeLayer,
    top: [this.timeLayer]
  };
  slideToUnlock = new exports.Text({
    style: "lockScreenSlide",
    text: "slide to unlock",
    fontSize: 24,
    fontWeight: "medium",
    opacity: .5,
    superLayer: BG
  });
  slideToUnlock.constraints = {
    align: "horizontal",
    bottom: 70
  };
  arrow = new Layer({
    backgroundColor: "transparent"
  });
  arrow.html = "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='" + (exports.px(11)) + "px' height='" + (exports.px(24)) + "px' viewBox='0 0 11 24' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'> <!-- Generator: Sketch 3.6.1 (26313) - http://www.bohemiancoding.com/sketch --> <title>Slide to Unlock Arrow</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'> <g id='iPhone-6/6S-Lock-Screen' transform='translate(-92.000000, -597.000000)' fill='#000000'> <g id='Slide-to-Unlock' transform='translate(92.000000, 597.000000)'> <path d='M10.9877324,12.0257422 L2.19629058,0.793908206 C1.85240438,0.353753949 1.22321708,0.275641031 0.788010754,0.615661475 C0.349770253,0.958052479 0.277703922,1.58676776 0.62026907,2.02523116 L8.43352455,12.0257421 L0.62026907,22.0262531 C0.277703922,22.4647165 0.349770253,23.0934318 0.788010754,23.4358228 C1.22321708,23.7758432 1.85240438,23.6977303 2.19629058,23.257576 L10.9877324,12.0257422 Z' id='Slide-to-Unlock-Arrow'></path> </g> </g> </g> </svg>";
  arrow.constraints = {
    height: 24,
    width: 11,
    verticalCenter: slideToUnlock,
    trailing: [slideToUnlock, 12]
  };
  return exports.layout();
};

exports.StatusBar = function(array) {
  var batteryIcon, batteryPercent, bluetooth, carrier, dot, gripper, i, j, k, l, layer, len, network, noNetwork, nonDot, nonDots, ref, ref1, ref2, setup, signal, statusBarBG, time;
  setup = setupComponent("statusBar", array);
  statusBarBG = new Layer({
    backgroundColor: "transparent",
    name: "statusBar.all"
  });
  statusBarBG.constraints = {
    leading: 0,
    trailing: 0,
    height: 20
  };
  switch (exports.device) {
    case "iphone-6s-plus":
      this.topConstraint = 5;
      break;
    default:
      this.topConstraint = 3;
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
      this.isLockScreenPresent = true;
    }
  }
  if (this.isLockScreenPresent) {
    gripper = new Layer({
      superLayer: statusBarBG,
      width: exports.px(37),
      height: exports.px(5),
      name: "gripper",
      backgroundColor: "transparent",
      opacity: .5,
      name: "gripper"
    });
    gripper.html = "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='" + (exports.px(37)) + "px' height='" + (exports.px(5)) + "px' viewBox='0 0 37 5' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'> <!-- Generator: Sketch 3.6.1 (26313) - http://www.bohemiancoding.com/sketch --> <title>Gripper</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'> <g id='Keyboard/Auto-Complete-Bar-Closed' transform='translate(-169.000000, -2.000000)' fill='#FFFFFF'> <rect id='Gripper' x='169.5' y='2.5' width='36' height='4' rx='2.5'></rect> </g> </g> </svg>";
    gripper.constraints = {
      align: "horizontal",
      top: 2
    };
  } else {
    this.time = exports.getTime();
    if (setup.clock24 === false) {
      if (this.time.hours > 11) {
        this.time.stamp = "PM";
      } else {
        this.time.stamp = "AM";
      }
    } else {
      this.time.stamp = "";
    }
    time = new exports.Text({
      style: "statusBarTime",
      text: exports.timeFormatter(this.time, setup.clock24) + " " + this.time.stamp,
      fontSize: 12,
      fontWeight: "semibold",
      superLayer: statusBarBG,
      color: this.color,
      name: "time"
    });
    time.constraints = {
      align: "center"
    };
  }
  signal = [];
  if (setup.signal < 1) {
    noNetwork = new exports.Text({
      superLayer: statusBarBG,
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
        height: exports.px(5.5),
        width: exports.px(5.5),
        backgroundColor: "black",
        superLayer: statusBarBG,
        borderRadius: exports.px(5.5) / 2,
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
      exports.layout();
    }
    if (setup.signal < 5) {
      nonDots = 5 - setup.signal;
      for (i = l = 0, ref2 = nonDots; 0 <= ref2 ? l < ref2 : l > ref2; i = 0 <= ref2 ? ++l : --l) {
        nonDot = new Layer({
          height: exports.px(5.5),
          width: exports.px(5.5),
          superLayer: statusBarBG,
          borderRadius: exports.px(5.5) / 2,
          backgroundColor: "white",
          name: "signal[" + signal.length + "]"
        });
        nonDot.style.border = (exports.px(1)) + "px solid " + this.color;
        nonDot.constraints = {
          leading: [signal[signal.length - 1], 1],
          top: 7
        };
        signal.push(nonDot);
        exports.layout();
      }
    }
    carrier = new exports.Text({
      style: "statusBarCarrier",
      text: setup.carrier,
      superLayer: statusBarBG,
      fontSize: 12,
      color: this.color,
      name: "carrier",
      textTransform: "capitalize"
    });
    carrier.constraints = {
      leading: [signal[signal.length - 1], 7],
      top: 3
    };
    exports.layout();
    if (setup.carrier) {
      network = new exports.Text({
        style: "statusBarNetwork",
        text: setup.network,
        superLayer: statusBarBG,
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
      network = new Layer({
        width: exports.px(14),
        height: exports.px(10),
        superLayer: statusBarBG,
        backgroundColor: "transparent",
        name: "network"
      });
      network.html = "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='" + (exports.px(14)) + "px' height='" + (exports.px(10)) + "px' viewBox='0 0 14 10' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'> <!-- Generator: Sketch 3.6.1 (26313) - http://www.bohemiancoding.com/sketch --> <title>Wi-Fi</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'> <g id='Status-Bar/Black/Charging' transform='translate(-87.000000, -5.000000)' fill='" + this.color + "'> <path d='M96.1444208,12.4385043 C95.626374,11.8454456 94.8523616,11.4689119 93.987563,11.4689119 C93.1390073,11.4689119 92.3778594,11.8314341 91.8601652,12.4053177 L94.0225391,14.5 L96.1444208,12.4385043 Z M98.3234964,10.3214425 C97.2447794,9.19174563 95.7014387,8.48445596 93.987563,8.48445596 C92.2882723,8.48445596 90.7566264,9.17975893 89.6792698,10.2926936 L90.7692987,11.3486 C91.567205,10.5053708 92.713648,9.97668394 93.987563,9.97668394 C95.2768836,9.97668394 96.4356305,10.518235 97.2346215,11.3793293 L98.3234964,10.3214425 L98.3234964,10.3214425 Z M100.5,8.20687933 C98.8629578,6.53943672 96.5505699,5.5 93.987563,5.5 C91.4375103,5.5 89.1355496,6.52895605 87.5,8.18164431 L88.5895579,9.23709441 C89.9460798,7.85431655 91.8628921,6.99222798 93.987563,6.99222798 C96.1260026,6.99222798 98.0538809,7.86552609 99.4118698,9.26404272 L100.5,8.20687933 Z' id='Wi-Fi'></path> </g> </g> </svg>";
      network.constraints = {
        leading: [signal[signal.length - 1], 7],
        top: this.topConstraint
      };
    }
  }
  batteryIcon = new Layer({
    width: exports.px(25),
    height: exports.px(10),
    superLayer: statusBarBG,
    backgroundColor: "transparent",
    name: "batteryIcon"
  });
  if (setup.battery > 70) {
    batteryIcon.html = "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='" + (exports.px(25)) + "px' height='" + (exports.px(10)) + "px' viewBox='0 0 25 10' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'> <!-- Generator: Sketch 3.6.1 (26313) - http://www.bohemiancoding.com/sketch --> <title>Battery</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'> <g id='Status-Bar/Black/100%' transform='translate(-345.000000, -5.000000)' fill='" + this.color + "'> <path d='M346.493713,5.5 C345.668758,5.5 345,6.16802155 345,7.00530324 L345,13.4946968 C345,14.3260528 345.67338,15 346.493713,15 L366.006287,15 C366.831242,15 367.5,14.3319784 367.5,13.4946968 L367.5,7.00530324 C367.5,6.17394722 366.82662,5.5 366.006287,5.5 L346.493713,5.5 Z M368,8.5 L368,12 L368.75,12 C369.164214,12 369.5,11.6644053 369.5,11.25774 L369.5,9.24225998 C369.5,8.83232111 369.167101,8.5 368.75,8.5 L368,8.5 Z M346.508152,6 C345.951365,6 345.5,6.45699692 345.5,7.00844055 L345.5,13.4915594 C345.5,14.0485058 345.949058,14.5 346.508152,14.5 L365.991848,14.5 C366.548635,14.5 367,14.0430031 367,13.4915594 L367,7.00844055 C367,6.45149422 366.550942,6 365.991848,6 L346.508152,6 Z M346.506744,6.5 C346.226877,6.5 346,6.71637201 346,6.99209595 L346,13.5079041 C346,13.7796811 346.230225,14 346.506744,14 L365.993256,14 C366.273123,14 366.5,13.783628 366.5,13.5079041 L366.5,6.99209595 C366.5,6.72031886 366.269775,6.5 365.993256,6.5 L346.506744,6.5 Z' id='Battery'></path> </g> </g> </svg>";
  }
  if (setup.battery <= 70 && setup.battery > 20) {
    batteryIcon.html = "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='" + (exports.px(25)) + "px' height='" + (exports.px(10)) + "px' viewBox='0 0 25 10' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'> <!-- Generator: Sketch 3.6.1 (26313) - http://www.bohemiancoding.com/sketch --> <title>Battery</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'> <g id='Status-Bar/White/100%' transform='translate(-345.000000, -5.000000)' fill='" + this.color + "'> <path d='M346.493713,5.5 C345.668758,5.5 345,6.16802155 345,7.00530324 L345,13.4946968 C345,14.3260528 345.67338,15 346.493713,15 L366.006287,15 C366.831242,15 367.5,14.3319784 367.5,13.4946968 L367.5,7.00530324 C367.5,6.17394722 366.82662,5.5 366.006287,5.5 L346.493713,5.5 Z M368,8.5 L368,12 L368.75,12 C369.164214,12 369.5,11.6644053 369.5,11.25774 L369.5,9.24225998 C369.5,8.83232111 369.167101,8.5 368.75,8.5 L368,8.5 Z M346.508152,6 C345.951365,6 345.5,6.45699692 345.5,7.00844055 L345.5,13.4915594 C345.5,14.0485058 345.949058,14.5 346.508152,14.5 L365.991848,14.5 C366.548635,14.5 367,14.0430031 367,13.4915594 L367,7.00844055 C367,6.45149422 366.550942,6 365.991848,6 L346.508152,6 Z M346.501231,6.5 C346.224409,6.5 346,6.71637201 346,6.99209595 L346,13.5079041 C346,13.7796811 346.229751,14 346.501231,14 L356.498769,14 C356.775591,14 357,13.783628 357,13.5079041 L357,6.99209595 C357,6.72031886 356.770249,6.5 356.498769,6.5 L346.501231,6.5 Z' id='Battery'></path> </g> </g> </svg>";
  }
  if (setup.battery <= 20) {
    batteryIcon.html = "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='" + (exports.px(25)) + "px' height='" + (exports.px(10)) + "px' viewBox='0 0 25 10' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'> <!-- Generator: Sketch 3.6.1 (26313) - http://www.bohemiancoding.com/sketch --> <title>Battery</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'> <g id='Status-Bar/White/100%' transform='translate(-345.000000, -5.000000)' fill='" + this.color + "'> <path d='M346.493713,5.5 C345.668758,5.5 345,6.16802155 345,7.00530324 L345,13.4946968 C345,14.3260528 345.67338,15 346.493713,15 L366.006287,15 C366.831242,15 367.5,14.3319784 367.5,13.4946968 L367.5,7.00530324 C367.5,6.17394722 366.82662,5.5 366.006287,5.5 L346.493713,5.5 Z M368,8.5 L368,12 L368.75,12 C369.164214,12 369.5,11.6644053 369.5,11.25774 L369.5,9.24225998 C369.5,8.83232111 369.167101,8.5 368.75,8.5 L368,8.5 Z M346.508152,6 C345.951365,6 345.5,6.45699692 345.5,7.00844055 L345.5,13.4915594 C345.5,14.0485058 345.949058,14.5 346.508152,14.5 L365.991848,14.5 C366.548635,14.5 367,14.0430031 367,13.4915594 L367,7.00844055 C367,6.45149422 366.550942,6 365.991848,6 L346.508152,6 Z M346.490479,6.5 C346.219595,6.5 346,6.71637201 346,6.99209595 L346,13.5079041 C346,13.7796811 346.215057,14 346.490479,14 L349.509521,14 C349.780405,14 350,13.783628 350,13.5079041 L350,6.99209595 C350,6.72031886 349.784943,6.5 349.509521,6.5 L346.490479,6.5 Z' id='Battery'></path> </g> </g> </svg>";
  }
  batteryIcon.constraints = {
    trailing: 7,
    top: this.topConstraint
  };
  batteryPercent = new exports.Text({
    style: "statusBarBatteryPercent",
    text: setup.battery + "%",
    superLayer: statusBarBG,
    fontSize: 12,
    color: this.color,
    name: "batteryPercent"
  });
  batteryPercent.constraints = {
    trailing: [batteryIcon, 3],
    top: 3
  };
  bluetooth = new Layer({
    width: exports.px(8),
    height: exports.px(15),
    superLayer: statusBarBG,
    opacity: .5,
    backgroundColor: "transparent",
    name: "bluetooth"
  });
  bluetooth.html = "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='" + (exports.px(8)) + "px' height='" + (exports.px(15)) + "px' viewBox='0 0 8 15' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'> <!-- Generator: Sketch 3.6.1 (26313) - http://www.bohemiancoding.com/sketch --> <title>Bluetooth</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'> <g id='Status-Icons-(White)' transform='translate(-137.000000, 0.000000)' fill='" + this.color + "'> <path d='M140.5,14.5 L145,10.25 L141.8,7.5 L145,4.75 L140.5,0.5 L140.5,6.07142857 L137.8,3.75 L137,4.5 L140.258333,7.375 L137,10.25 L137.8,11 L140.5,8.67857143 L140.5,14.5 Z M141.5,3 L143.366667,4.75 L141.5,6.25 L141.5,3 Z M141.5,8.5 L143.366667,10.25 L141.5,12 L141.5,8.5 Z' id='Bluetooth'></path> </g> </g> </svg>";
  bluetooth.constraints = {
    top: 3,
    trailing: [batteryPercent, 7]
  };
  exports.layout();
  return {
    all: statusBarBG,
    batteryPercent: batteryPercent,
    batteryIcon: batteryIcon,
    signal: signal,
    carrier: carrier,
    network: network,
    time: time,
    bluetooth: bluetooth
  };
};

exports.Keyboard = function(array) {
  var board, box, deleteIcon, deleteKey, em, emojiFormatter, emojiKey, emojiSections, emojisArray, freqEmojisArray, frequentlyUsedEmojisRaw, index, j, k, key, keyPopUp, keysArray, l, len, len1, len2, len3, letter, lettersArray, m, numKey, path, prop, rawEmojis, ref, returnKey, rowIndex, rowsMap, shiftIcon, shiftKey, spaceKey, spacer;
  if (array === void 0) {
    array = [];
  }
  ref = defaults.keyboardProps;
  for (j = 0, len = ref.length; j < len; j++) {
    prop = ref[j];
    if (array[prop]) {
      this[prop] = array[prop];
    } else {
      this[prop] = defaults.keyboardProps[prop];
    }
  }
  board = new Layer({
    backgroundColor: "#D1D5DA",
    name: "keyboard"
  });
  board.constraints = {
    bottom: 0,
    height: 216,
    trailing: 0,
    leading: 0
  };
  exports.layout();
  lettersArray = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];
  keysArray = [];
  spacer = exports.px(5);
  if (exports.scale === 3 || exports.width === 640) {
    spacer = exports.px(6);
  }
  rowsMap = [
    {
      "padding": exports.px(4),
      "startIndex": 0,
      "endIndex": 9,
      "marginTop": exports.px(10)
    }, {
      "padding": 22 * exports.scale,
      "startIndex": 10,
      "endIndex": 18,
      "marginTop": 22 * exports.scale
    }, {
      "padding": 59 * exports.scale,
      "startIndex": 19,
      "endIndex": 25,
      "marginTop": 34 * exports.scale
    }
  ];
  keyPopUp = new Layer({
    width: this.keyWidth,
    height: this.keyHeight,
    x: this.x - 16 * exports.scale,
    backgroundColor: "transparent",
    superLayer: board,
    name: "key pop up"
  });
  box = new Layer({
    borderRadius: exports.px(10),
    superLayer: keyPopUp,
    backgroundColor: "transparent",
    color: "black",
    name: "letter"
  });
  box.style = {
    "font-size": 39 * exports.scale + "px",
    "font-weight": 300,
    "font-family": '-apple-system, Helvetica, Arial, sans-serif',
    'text-align': 'center',
    'line-height': this.lineHeight
  };
  this.color = "white";
  path = new Layer({
    superLayer: keyPopUp,
    backgroundColor: "transparent",
    name: "shape path"
  });
  shiftKey = new Layer({
    superLayer: board,
    name: "shift",
    borderRadius: exports.px(5),
    backgroundColor: "#AAB3BC",
    shadowY: exports.px(1),
    shadowColor: "#929498"
  });
  shiftKey.constraints = {
    bottom: 56,
    leading: 3,
    width: 42,
    height: 42
  };
  shiftIcon = new Layer({
    width: exports.px(20),
    height: exports.px(19),
    superLayer: shiftKey,
    backgroundColor: "transparent",
    x: exports.px(11),
    y: exports.px(11)
  });
  shiftIcon.html = "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='" + (exports.px(20)) + "px' height='" + (exports.px(18)) + "px' viewBox='0 0 20 19' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'> <!-- Generator: Sketch 3.5.2 (25235) - http://www.bohemiancoding.com/sketch --> <title>Shift</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'> <g id='Keyboard/Light/Lower' sketch:type='MSLayerGroup' transform='translate(-14.000000, -129.000000)' fill='#030303'> <g id='Third-Row' transform='translate(3.000000, 118.000000)' sketch:type='MSShapeGroup'> <path d='M21.6719008,12.2325898 C21.301032,11.8279916 20.6946892,11.8334731 20.3288195,12.2325898 L11.6947023,21.6512983 C10.7587441,22.672308 11.1285541,23.5 12.5097751,23.5 L15.9999999,23.5000002 L15.9999999,28.0014241 C15.9999999,28.8290648 16.6716559,29.5000001 17.497101,29.5000001 L24.5028992,29.5000001 C25.3297253,29.5000001 26.0000003,28.8349703 26.0000003,28.0014241 L26.0000003,23.5000001 L29.4902251,23.5000002 C30.8763357,23.5000002 31.2439521,22.6751916 30.3054161,21.6512985 L21.6719008,12.2325898 Z M21.341748,14.3645316 C21.1530056,14.1632064 20.8433515,14.1670914 20.6582514,14.3645316 L13.5,21.9999998 L17.5000001,21.9999999 L17.5000002,27.5089956 C17.5000002,27.7801703 17.7329027,28.0000008 18.0034229,28.0000008 L23.996577,28.0000008 C24.2746097,28.0000008 24.4999997,27.7721203 24.4999997,27.5089956 L24.4999997,21.9999999 L28.5,21.9999999 L21.341748,14.3645316 Z' id='Shift'></path> </g> </g> </g> </svg>";
  shiftIcon.states.add({
    on: {
      html: "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='" + (exports.px(20)) + "px' height='" + (exports.px(18)) + "px' viewBox='0 0 20 17' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'> <!-- Generator: Sketch 3.5.2 (25235) - http://www.bohemiancoding.com/sketch --> <title>Shift</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'> <g id='Keyboard/Light/Upper' sketch:type='MSLayerGroup' transform='translate(-14.000000, -130.000000)' fill='#030303'> <g id='Third-Row' transform='translate(3.000000, 118.000000)' sketch:type='MSShapeGroup'> <path d='M21.7052388,13.2052388 C21.3157462,12.8157462 20.6857559,12.8142441 20.2947612,13.2052388 L11.9160767,21.5839233 C11.1339991,22.3660009 11.3982606,23 12.4979131,23 L16.5,23 L16.5,28.009222 C16.5,28.5564136 16.9463114,29 17.4975446,29 L24.5024554,29 C25.053384,29 25.5,28.5490248 25.5,28.009222 L25.5,23 L29.5020869,23 C30.6055038,23 30.866824,22.366824 30.0839233,21.5839233 L21.7052388,13.2052388 Z' id='Shift'></path> </g> </g> </g> </svg>"
    }
  });
  shiftIcon.states.animationOptions = {
    time: .01
  };
  deleteKey = new Layer({
    superLayer: board,
    borderRadius: exports.px(5),
    backgroundColor: "#AAB3BC",
    shadowY: exports.px(1),
    shadowColor: "#929498"
  });
  deleteKey.constraints = {
    bottom: 56,
    trailing: 3,
    width: 42,
    height: 42
  };
  deleteIcon = new Layer({
    superLayer: deleteKey,
    width: exports.px(24),
    height: exports.px(18),
    backgroundColor: "transparent"
  });
  deleteIcon.constraints = {
    top: 13,
    leading: 10
  };
  deleteIcon.states.add({
    on: {
      html: "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='" + (exports.px(24)) + "px' height='" + (exports.px(18)) + "px' viewBox='0 0 24 18' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'> <!-- Generator: Sketch 3.5.2 (25235) - http://www.bohemiancoding.com/sketch --> <title>Back</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'> <g id='Keyboard/Light/Upper' sketch:type='MSLayerGroup' transform='translate(-339.000000, -130.000000)' fill='#030303'> <g id='Third-Row' transform='translate(3.000000, 118.000000)' sketch:type='MSShapeGroup'> <path d='M351.642663,20.9776903 L354.466795,18.1535585 C354.760106,17.8602476 354.763983,17.3814962 354.47109,17.088603 C354.176155,16.7936677 353.7014,16.7976328 353.406135,17.0928983 L350.582003,19.9170301 L347.757871,17.0928983 C347.46456,16.7995874 346.985809,16.7957097 346.692916,17.088603 C346.39798,17.3835382 346.401945,17.858293 346.697211,18.1535585 L349.521343,20.9776903 L346.697211,23.801822 C346.4039,24.0951329 346.400022,24.5738843 346.692916,24.8667776 C346.987851,25.1617128 347.462606,25.1577477 347.757871,24.8624822 L350.582003,22.0383504 L353.406135,24.8624822 C353.699445,25.1557931 354.178197,25.1596708 354.47109,24.8667776 C354.766025,24.5718423 354.76206,24.0970875 354.466795,23.801822 L351.642663,20.9776903 Z M337.059345,22.0593445 C336.474285,21.4742847 336.481351,20.5186489 337.059345,19.9406555 L343.789915,13.2100853 C344.182084,12.817916 344.94892,12.5 345.507484,12.5 L356.002098,12.5 C357.933936,12.5 359.5,14.0688477 359.5,16.0017983 L359.5,25.9982017 C359.5,27.9321915 357.923088,29.5 356.002098,29.5 L345.507484,29.5 C344.951066,29.5 344.177169,29.1771693 343.789915,28.7899148 L337.059345,22.0593445 Z' id='Back'></path> </g> </g> </g> </svg>"
    }
  });
  deleteIcon.states.add({
    off: {
      html: "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='" + (exports.px(24)) + "px' height='" + (exports.px(18)) + "px' viewBox='0 0 24 18' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'> <!-- Generator: Sketch 3.5.2 (25235) - http://www.bohemiancoding.com/sketch --> <title>Back</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'> <g id='Keyboard/Light/Upper' sketch:type='MSLayerGroup' transform='translate(-339.000000, -130.000000)' fill='#030303'> <g id='Third-Row' transform='translate(3.000000, 118.000000)' sketch:type='MSShapeGroup'> <path d='M337.059345,22.0593445 C336.474285,21.4742847 336.481351,20.5186489 337.059345,19.9406555 L343.789915,13.2100853 C344.182084,12.817916 344.94892,12.5 345.507484,12.5 L356.002098,12.5 C357.933936,12.5 359.5,14.0688477 359.5,16.0017983 L359.5,25.9982017 C359.5,27.9321915 357.923088,29.5 356.002098,29.5 L345.507484,29.5 C344.951066,29.5 344.177169,29.1771693 343.789915,28.7899148 L337.059345,22.0593445 Z M351.642663,20.9776903 L354.466795,18.1535585 C354.760106,17.8602476 354.763983,17.3814962 354.47109,17.088603 C354.176155,16.7936677 353.7014,16.7976328 353.406135,17.0928983 L350.582003,19.9170301 L347.757871,17.0928983 C347.46456,16.7995874 346.985809,16.7957097 346.692916,17.088603 C346.39798,17.3835382 346.401945,17.858293 346.697211,18.1535585 L349.521343,20.9776903 L346.697211,23.801822 C346.4039,24.0951329 346.400022,24.5738843 346.692916,24.8667776 C346.987851,25.1617128 347.462606,25.1577477 347.757871,24.8624822 L350.582003,22.0383504 L353.406135,24.8624822 C353.699445,25.1557931 354.178197,25.1596708 354.47109,24.8667776 C354.766025,24.5718423 354.76206,24.0970875 354.466795,23.801822 L351.642663,20.9776903 Z M338.70972,21.7097195 C338.317752,21.3177522 338.318965,20.6810349 338.70972,20.2902805 L344.643245,14.3567547 C344.840276,14.1597245 345.225639,14 345.493741,14 L355.997239,14 C357.103333,14 357.999999,14.8970601 357.999999,16.0058586 L357.999999,25.9941412 C357.999999,27.1019464 357.106457,27.9999999 355.997239,27.9999999 L345.493741,28 C345.221056,28 344.840643,27.8406431 344.643246,27.6432453 L338.70972,21.7097195 Z' id='Back'></path> </g> </g> </g> </svg>"
    }
  });
  deleteKey.on(Events.TouchStart, function() {
    deleteKey.backgroundColor = "white";
    return deleteIcon.states.switchInstant("on");
  });
  deleteKey.on(Events.TouchEnd, function() {
    deleteKey.backgroundColor = "#AAB3BC";
    return deleteIcon.states.switchInstant("off");
  });
  deleteIcon.states.switchInstant("off");
  shiftIcon.on(Events.Click, function() {
    var k, key, l, len1, len2;
    shiftIcon.states.next();
    if (shiftIcon.states.state === "on") {
      shiftKey.backgroundColor = "white";
      for (k = 0, len1 = keysArray.length; k < len1; k++) {
        key = keysArray[k];
        key.style['text-transform'] = 'uppercase';
      }
      return box.style['text-transform'] = 'uppercase';
    } else {
      shiftKey.backgroundColor = "#AAB3BC";
      for (l = 0, len2 = keysArray.length; l < len2; l++) {
        key = keysArray[l];
        key.style["text-transform"] = 'lowercase';
      }
      return box.style["text-transform"] = 'lowercase';
    }
  });
  for (k = 0, len1 = lettersArray.length; k < len1; k++) {
    letter = lettersArray[k];
    index = lettersArray.indexOf(letter);
    key = new Layer({
      name: letter,
      superLayer: board,
      borderRadius: 5 * exports.scale,
      backgroundColor: "white",
      color: "black",
      shadowY: exports.px(1),
      shadowColor: "#929498"
    });
    keyPopUp.bringToFront();
    box.bringToFront();
    if (exports.scale === 2) {
      key.constraints = {
        width: 32,
        height: 42
      };
      keyPopUp.constraints = {
        width: 65,
        height: 122
      };
      path.constraints = {
        width: 65,
        height: 122
      };
      path.y = 10;
      this.pathWidth = exports.px(65);
      this.pathHeight = exports.px(122);
      this.keyHeight = exports.px(32);
      this.keyWidth = exports.px(44);
      this.lineHeight = this.keyWidth - 17 + "px";
      box.constraints = {
        width: 32,
        height: 44
      };
      box.centerX();
      box.y = exports.px(28);
    }
    if (exports.scale === 3) {
      key.constraints = {
        width: 35,
        height: 46
      };
      keyPopUp.constraints = {
        width: 68,
        height: 122
      };
      this.keyHeight = exports.px(122);
      this.keyWidth = exports.px(65);
      this.lineHeight = this.keyWidth + "px";
      this.pathWidth = exports.px(68);
      this.pathHeight = exports.px(128);
      path.y = 0;
      box.constraints = {
        width: 35,
        height: 46
      };
      box.centerX();
      box.y = exports.px(28);
    }
    if (exports.width === 640) {
      key.constraints = {
        width: 26,
        height: 39
      };
    }
    keyPopUp.visible = false;
    exports.layout();
    key.style = {
      "font-size": 25 * exports.scale + "px",
      "font-weight": 300,
      "font-family": '-apple-system, Helvetica, Arial, sans-serif',
      'text-align': 'center',
      'line-height': key.height - exports.px(2) + "px"
    };
    key.html = letter;
    if (index <= rowsMap[0].endIndex) {
      rowIndex = index - rowsMap[0].startIndex;
      key.x = rowsMap[0].padding + (rowIndex * spacer) + (rowIndex * key.width);
      key.y = rowsMap[0].marginTop;
    }
    if (index > rowsMap[0].endIndex && index <= rowsMap[1].endIndex) {
      rowIndex = index - rowsMap[1].startIndex;
      key.x = rowsMap[1].padding + (rowIndex * spacer) + (rowIndex * key.width);
      key.y = rowsMap[1].marginTop + key.height;
    }
    if (index > rowsMap[1].endIndex) {
      rowIndex = index - rowsMap[2].startIndex;
      key.x = rowsMap[2].padding + (rowIndex * spacer) + (rowIndex * key.width);
      key.y = rowsMap[2].marginTop + key.height * 2;
    }
    path.html = "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='" + this.pathWidth + "px' height='" + this.pathHeight + "' viewBox='0 0 63 114' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'> <title>Rectangle 44 Copy</title> <desc>Created with Sketch.</desc> <defs> <filter x='-50%' y='-50%' width='200%' height='200%' filterUnits='objectBoundingBox' id='filter-1'> <feOffset dx='0' dy='0' in='SourceAlpha' result='shadowOffsetOuter1'></feOffset> <feGaussianBlur stdDeviation='1.5' in='shadowOffsetOuter1' result='shadowBlurOuter1'></feGaussianBlur> <feColorMatrix values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.21 0' in='shadowBlurOuter1' type='matrix' result='shadowMatrixOuter1'></feColorMatrix> <feMerge> <feMergeNode in='shadowMatrixOuter1'></feMergeNode> <feMergeNode in='SourceGraphic'></feMergeNode> </feMerge> </filter> </defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'> <g id='iPhone-6' sketch:type='MSArtboardGroup' transform='translate(-118.000000, -240.000000)' stroke='#C7C7C7' filter='url(#filter-1)' stroke-width='0.5' fill='#FFFFFF' opacity='0.998367537'> <path d='M134,306 C134,306 121,295 121,290 C121,279.616788 121,253.001456 121,253.001456 C121,247.477804 125.485832,243 131.002774,243 L167.862127,243 C173.386507,243 177.880862,247.469905 177.900044,252.997271 C177.900044,252.997271 178,280 177.999999,290 C177.999999,295.006553 165,306 165,306 L165,346.049594 C165,348.806807 162.770556,351.041969 160.002098,351.041969 L138.997902,351.041969 C136.237637,351.041969 134,348.808331 134,346.049594 L134,306 Z' id='Rectangle-44-Copy' sketch:type='MSShapeGroup' transform='translate(149.500000, 297.020985) scale(-1, 1) translate(-149.500000, -297.020985) '> </path> </g> </g> </svg>";
    keysArray.push(key);
    key.on(Events.TouchStart, function() {
      keyPopUp.visible = true;
      box.html = this.name;
      keyPopUp.maxY = this.maxY;
      return keyPopUp.midX = this.midX;
    });
    key.on(Events.TouchMove, function() {
      box.html = this.name;
      keyPopUp.maxY = this.maxY;
      return keyPopUp.midX = this.midX;
    });
    key.on(Events.TouchEnd, function() {
      var l, len2;
      keyPopUp.visible = false;
      if (shiftIcon.states.state === "on") {
        shiftIcon.states["switch"]("default");
        for (l = 0, len2 = keysArray.length; l < len2; l++) {
          key = keysArray[l];
          key.style['text-transform'] = 'lowercase';
        }
        return box.style['text-transform'] = 'lowercase';
      }
    });
  }
  numKey = new Layer({
    superLayer: board,
    name: "num",
    borderRadius: exports.px(5),
    backgroundColor: "#AAB3BC",
    shadowY: exports.px(1),
    shadowColor: "#929498",
    color: "black"
  });
  numKey.constraints = {
    width: 40.5,
    height: 42,
    bottom: 4,
    leading: 3
  };
  numKey.html = "123";
  numKey.style = {
    "font-size": exports.px(16) + "px",
    "font-weight": 400,
    "font-family": '-apple-system, Helvetica, Arial, sans-serif',
    'text-align': 'center',
    'line-height': exports.px(42) + "px"
  };
  exports.layout();
  emojiKey = new Layer({
    superLayer: board,
    name: "emoji",
    borderRadius: exports.px(5),
    backgroundColor: "#AAB3BC",
    shadowY: exports.px(1),
    shadowColor: "#929498"
  });
  emojiKey.constraints = {
    width: 41,
    height: 42,
    bottom: 4,
    leading: [numKey, 6]
  };
  emojiKey.html = "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='" + (exports.px(20)) + "px' height='" + (exports.px(20)) + "px' viewBox='0 0 20 20' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'> <!-- Generator: Sketch 3.5.2 (25235) - http://www.bohemiancoding.com/sketch --> <title>Emoji</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'> <g id='Keyboard/Light/Lower' sketch:type='MSLayerGroup' transform='translate(-60.000000, -181.000000)' fill='#030303'> <g id='Bottom-Row' transform='translate(3.000000, 170.000000)' sketch:type='MSShapeGroup'> <path d='M66.75,30.5 C72.1347763,30.5 76.5,26.1347763 76.5,20.75 C76.5,15.3652237 72.1347763,11 66.75,11 C61.3652237,11 57,15.3652237 57,20.75 C57,26.1347763 61.3652237,30.5 66.75,30.5 Z M66.75,29.5 C71.5824916,29.5 75.5,25.5824916 75.5,20.75 C75.5,15.9175084 71.5824916,12 66.75,12 C61.9175084,12 58,15.9175084 58,20.75 C58,25.5824916 61.9175084,29.5 66.75,29.5 Z M63.75,19 C64.4403559,19 65,18.4403559 65,17.75 C65,17.0596441 64.4403559,16.5 63.75,16.5 C63.0596441,16.5 62.5,17.0596441 62.5,17.75 C62.5,18.4403559 63.0596441,19 63.75,19 Z M69.75,19 C70.4403559,19 71,18.4403559 71,17.75 C71,17.0596441 70.4403559,16.5 69.75,16.5 C69.0596441,16.5 68.5,17.0596441 68.5,17.75 C68.5,18.4403559 69.0596441,19 69.75,19 Z M59.8876334,22.1641444 C59.6390316,21.383134 60.065918,20.9785156 60.8530951,21.2329304 C60.8530951,21.2329304 63.0937503,22.2125 66.7500001,22.2125 C70.4062499,22.2125 72.6469047,21.2329304 72.6469047,21.2329304 C73.4287162,20.9662153 73.8812463,21.4044097 73.6058477,22.1807437 C73.6058477,22.1807437 72.6,27.575 66.75,27.575 C60.9,27.575 59.8876334,22.1641444 59.8876334,22.1641444 Z M66.75,23.1875 C64.06875,23.1875 61.8544055,22.4737821 61.8544055,22.4737821 C61.3273019,22.32948 61.1781233,22.5721615 61.5639555,22.957075 C61.5639555,22.957075 62.3625,24.65 66.75,24.65 C71.1375,24.65 71.9508503,22.9438304 71.9508503,22.9438304 C72.3093659,22.5399278 72.1690793,22.3359844 71.6354273,22.476349 C71.6354273,22.476349 69.43125,23.1875 66.75,23.1875 Z' id='Emoji'></path> </g> </g> </g> </svg>";
  emojiKey.style = {
    "padding-top": exports.px(11) + "px",
    "padding-left": exports.px(11) + "px"
  };
  emojiFormatter = function(string) {
    var arrayOfCodes, code, l, len2, len3, m, unicodeFormat;
    unicodeFormat = "";
    if (string[0] === "E" || string[0] === "3" || string[0] === "2" || string[0] === "C") {
      arrayOfCodes = string.split(" ");
      for (l = 0, len2 = arrayOfCodes.length; l < len2; l++) {
        code = arrayOfCodes[l];
        unicodeFormat = unicodeFormat + "%" + code;
      }
    } else {
      arrayOfCodes = string.split(" ");
      unicodeFormat = "%F0%9F";
      for (m = 0, len3 = arrayOfCodes.length; m < len3; m++) {
        code = arrayOfCodes[m];
        unicodeFormat = unicodeFormat + "%" + code;
      }
    }
    return unicodeFormat;
  };
  exports.layout();
  emojiSections = ["Frequnetly Used", "Smileys & People", "Animals & Nature", "Food & Drink", "Activity", "Travel & Places", "Objects", "Symbols", "Flags"];
  rawEmojis = ["98 80", "98 AC", "98 81", "98 82", "98 83", "98 84", "98 85", "98 86", "98 87", "98 89", "98 8a", "99 82", "99 83", "E2 98 BA EF B8 8F", "98 8B", "98 8C", "98 8D", "98 98", "98 97", "98 99", "98 9A", "98 9C", "98 9D", "98 9B", "A4 91", "A4 93", "98 8E", "A4 97", "98 8F", "98 B6", "98 90", "98 91", "98 92", "99 84", "A4 94", "98 B3", "98 9E", "98 9F", "98 A0", "98 A1", "98 94", "98 95", "99 81", "E2 98 B9 EF B8 8F", "98 A3", "98 96", "98 AB", "98 A9", "98 A4", "98 AE", "98 B1", "98 A8", "98 B0", "98 AF", "98 A6", "98 A7", "98 A2", "98 A5", "98 AA", "98 93", "98 AD", "98 B5", "98 B2", "A4 90", "98 B7", "A4 92", "A4 95", "98 B4", "92 A4", "92 A9", "98 88", "91 BF", "91 B9", "91 BA", "92 80", "91 BB", "91 BD", "A4 96", "98 BA", "98 B8", "98 B9", "98 BB", "98 BC", "98 BD", "99 80", "98 BF", "98 BE", "99 8C", "91 8F", "91 8B", "91 8D", "91 8E", "91 8A", "E2 9C 8A", "E2 9C 8C EF B8 8F", "91 8C", "E2 9C 8B", "91 90", "92 AA", "99 8F", "E2 98 9D EF B8 8F", "91 86", "91 87", "91 88", "91 89", "96 95", "96 90", "A4 98", "96 96", "E2 9C 8D EF B8 8F", "92 85", "91 84", "91 85", "91 82", "91 83", "91 81", "91 80", "91 A4", "91 A5", "97 A3", "91 B6", "91 A6", "91 A7", "91 A8", "91 A9", "91 B1", "91 B4", "91 B5", "91 B2", "91 B3", "91 AE", "91 B7", "92 82", "95 B5", "8E 85", "91 BC", "91 B8", "91 B0", "9A B6", "8F 83", "92 83", "91 AF", "91 AB", "91 AC", "91 AD", "99 87", "92 81", "99 85", "99 86", "99 8B", "99 8E", "99 8D", "92 87", "92 86", "92 91", "91 A9 E2 80 8D E2 9D A4 EF B8 8F E2 80 8D F0 9F 91 A9", "91 A8 E2 80 8D E2 9D A4 EF B8 8F E2 80 8D F0 9F 91 A8", "92 8F", "91 A9 E2 80 8D E2 9D A4 EF B8 8F E2 80 8D F0 9F 92 8B E2 80 8D F0 9F 91 A9", "91 A8 E2 80 8D E2 9D A4 EF B8 8F E2 80 8D F0 9F 92 8B E2 80 8D F0 9F 91 A8", "91 AA", "91 A8 E2 80 8D F0 9F 91 A9 E2 80 8D F0 9F 91 A7", "91 A8 E2 80 8D F0 9F 91 A9 E2 80 8D F0 9F 91 A7 E2 80 8D F0 9F 91 A6", "91 A8 E2 80 8D F0 9F 91 A9 E2 80 8D F0 9F 91 A6 E2 80 8D F0 9F 91 A6", "91 A8 E2 80 8D F0 9F 91 A9 E2 80 8D F0 9F 91 A7 E2 80 8D F0 9F 91 A7", "91 A9 E2 80 8D F0 9F 91 A9 E2 80 8D F0 9F 91 A6", "91 A9 E2 80 8D F0 9F 91 A9 E2 80 8D F0 9F 91 A7", "91 A9 E2 80 8D F0 9F 91 A9 E2 80 8D F0 9F 91 A7 E2 80 8D F0 9F 91 A6", "91 A9 E2 80 8D F0 9F 91 A9 E2 80 8D F0 9F 91 A6 E2 80 8D F0 9F 91 A6", "91 A9 E2 80 8D F0 9F 91 A9 E2 80 8D F0 9F 91 A7 E2 80 8D F0 9F 91 A7", "91 A8 E2 80 8D F0 9F 91 A8 E2 80 8D F0 9F 91 A6", "91 A8 E2 80 8D F0 9F 91 A8 E2 80 8D F0 9F 91 A7", "91 A8 E2 80 8D F0 9F 91 A8 E2 80 8D F0 9F 91 A7 E2 80 8D F0 9F 91 A6", "91 A8 E2 80 8D F0 9F 91 A8 E2 80 8D F0 9F 91 A6 E2 80 8D F0 9F 91 A6", "91 A8 E2 80 8D F0 9F 91 A8 E2 80 8D F0 9F 91 A7 E2 80 8D F0 9F 91 A7", "91 9A", "91 95", "91 96", "91 94", "91 97", "91 99", "91 98", "92 84", "92 8B", "91 A3", "91 A0", "91 A1", "91 A2", "91 9E", "91 9F", "91 92", "8E A9", "E2 9B 91", "8E 93", "91 91", "8E 92", "91 9D", "91 9B", "91 9C", "92 BC", "91 93", "95 B6", "92 8D", "8C 82", "9B 91", "90 B6", "90 B1", "90 AD", "90 B9", "90 B0", "90 BB", "90 BC", "90 A8", "90 AF", "A6 81", "90 AE", "90 B7", "90 BD", "90 B8", "90 99", "90 B5", "99 88", "99 89", "99 8A", "90 92", "90 94", "90 A7", "90 A6", "90 A4", "90 A3", "90 A5", "90 BA", "90 97", "90 B4", "A6 84", "90 9D", "90 9B", "90 8C", "90 9E", "90 9C", "95 B7", "A6 82", "A6 80", "90 8D", "90 A2", "90 A0", "90 9F", "90 A1", "90 AC", "90 B3", "90 8B", "90 8A", "90 86", "90 85", "90 83", "90 82", "90 84", "90 AA", "90 AB", "90 98", "90 90", "90 8F", "90 91", "90 8E", "90 96", "90 80", "90 81", "90 93", "A6 83", "95 8A", "90 95", "90 A9", "90 88", "90 87", "90 BF", "90 BE", "90 89", "90 B2", "8C B5", "8E 84", "8C B2", "8C B3", "8C B4", "8C B1", "8C BF", "E2 98 98", "8D 80", "8E 8D", "8E 8B", "8D 83", "8D 82", "8D 81", "8C BE", "8C BA", "8C BA", "8C BB", "8C B9", "8C B7", "8C BC", "8C B8", "92 90", "8D 84", "8C B0", "8E 83", "90 9A", "95 B8", "8C 8E", "8C 8D", "8C 8F", "8C 95", "8C 96", "8C 97", "8C 98", "8C 91", "8C 92", "8C 93", "8C 94", "8C 9A", "8C 9D", "8C 9B", "8C 9C", "8C 9E", "8C 99", "E2 AD 90 EF B8 8F", "8C 9F", "92 AB", "E2 9C A8", "E2 98 84 EF B8 8F", "E2 98 80 EF B8 8F", "8C A4", "E2 9B 85 EF B8 8F", "8C A5", "8C A6", "E2 98 81 EF B8 8F", "8C A7", "E2 9B 88", "8C A9", "E2 9A A1 EF B8 8F", "94 A5", "92 A5", "E2 9D 84 EF B8 8F", "8C A8", "E2 98 83 EF B8 8F", "E2 9B 84 EF B8 8F", "8C AC", "92 A8", "8C AA", "8C AB", "E2 98 82 EF B8 8F", "E2 98 94 EF B8 8F", "92 A7", "92 A6", "8C 8A", "9B 91", "9B 91", "8D 8F", "8D 8E", "8D 90", "8D 8A", "8D 8B", "8D 8C", "8D 89", "8D 87", "8D 93", "8D 88", "8D 92", "8D 91", "8D 8D", "8D 85", "8D 86", "8C B6", "8C BD", "8D A0", "8D AF", "8D 9E", "A7 80", "8D 97", "8D 96", "8D A4", "8D B3", "8D 94", "8D 9F", "8C AD", "8D 95", "8D 9D", "8C AE", "8C AF", "8D 9C", "8D B2", "8D A5", "8D A3", "8D B1", "8D 9B", "8D 99", "8D 9A", "8D 98", "8D A2", "8D A1", "8D A7", "8D A8", "8D A6", "8D B0", "8E 82", "8D AE", "8D AC", "8D AD", "8D AB", "8D BF", "8D A9", "8D AA", "8D BA", "8D BB", "8D B7", "8D B8", "8D B9", "8D BE", "8D B6", "8D B5", "E2 98 95 EF B8 8F", "8D BC", "8D B4", "8D BD", "9B 91", "9B 91", "9B 91", "E2 9A BD EF B8 8F", "8F 80", "8F 88", "E2 9A BE EF B8 8F", "8E BE", "8F 90", "8F 89", "8E B1", "E2 9B B3 EF B8 8F", "8F 8C", "8F 93", "8F B8", "8F 92", "8F 91", "8F 8F", "8E BF", "E2 9B B7", "8F 82", "E2 9B B8", "8F B9", "8E A3", "9A A3", "8F 8A", "8F 84", "9B 80", "E2 9B B9", "8F 8B", "9A B4", "9A B5", "8F 87", "95 B4", "8F 86", "8E BD", "8F 85", "8E 96", "8E 97", "8F B5", "8E AB", "8E 9F", "8E AD", "8E A8", "8E AA", "8E A4", "8E A7", "8E BC", "8E B9", "8E B7", "8E BA", "8E B8", "8E BB", "8E AC", "8E AE", "91 BE", "8E AF", "8E B2", "8E B0", "8E B3", "9B 91", "9B 91", "9B 91", "9A 97", "9A 95", "9A 99", "9A 8C", "9A 8E", "8F 8E", "9A 93", "9A 91", "9A 92", "9A 90", "9A 9A", "9A 9B", "9A 9C", "8F 8D", "9A B2", "9A A8", "9A 94", "9A 8D", "9A 98", "9A 96", "9A A1", "9A A0", "9A AF", "9A 83", "9A 8B", "9A 9D", "9A 84", "9A 85", "9A 88", "9A 9E", "9A 82", "9A 86", "9A 87", "9A 8A", "9A 89", "9A 81", "9B A9", "E2 9C 88 EF B8 8F", "9B AB", "9B AC", "E2 9B B5 EF B8 8F", "9B A5", "9A A4", "E2 9B B4", "9B B3", "9A 80", "9B B0", "92 BA", "E2 9A 93 EF B8 8F", "9A A7", "E2 9B BD EF B8 8F", "9A 8F", "9A A6", "9A A5", "8F 81", "9A A2", "8E A1", "8E A2", "8E A0", "8F 97", "8C 81", "97 BC", "8F AD", "E2 9B B2 EF B8 8F", "8E 91", "E2 9B B0", "8F 94", "97 BB", "8C 8B", "97 BE", "8F 95", "E2 9B BA EF B8 8F", "8F 9E", "9B A3", "9B A4", "8C 85", "8C 84", "8F 9C", "8F 96", "8F 9D", "8C 87", "8C 86", "8F 99", "8C 83", "8C 89", "8C 8C", "8C A0", "8E 87", "8E 86", "8C 88", "8F 98", "8F B0", "8F AF", "8F 9F", "97 BD", "8F A0", "8F A1", "8F 9A", "8F A2", "8F AC", "8F A3", "8F A4", "8F A5", "8F A6", "8F A8", "8F AA", "8F AB", "8F A9", "92 92", "8F 9B", "E2 9B AA EF B8 8F", "95 8C", "95 8D", "95 8B", "E2 9B A9", "E2 8C 9A EF B8 8F", "93 B1", "93 B2", "92 BB", "E2 8C A8 EF B8 8F", "96 A5", "96 A8", "96 B1", "96 B2", "95 B9", "97 9C", "92 BD", "92 BE", "92 BF", "93 80", "93 BC", "93 B7", "93 B8", "93 B9", "8E A5", "93 BD", "8E 9E", "93 9E", "E2 98 8E EF B8 8F", "93 9F", "93 A0", "93 BA", "93 BB", "8E 99", "8E 9A", "8E 9B", "E2 8F B1", "E2 8F B2", "E2 8F B0", "95 B0", "E2 8F B3", "E2 8C 9B EF B8 8F", "93 A1", "94 8B", "94 8C", "92 A1", "94 A6", "95 AF", "97 91", "9B A2", "92 B8", "92 B5", "92 B4", "92 B6", "92 B7", "92 B0", "92 B3", "92 8E", "E2 9A 96", "94 A7", "94 A8", "E2 9A 92", "9B A0", "E2 9B 8F", "94 A9", "E2 9A 99", "E2 9B 93", "94 AB", "92 A3", "94 AA", "97 A1", "E2 9A 94", "9B A1", "9A AC", "E2 98 A0 EF B8 8F", "E2 9A B0", "E2 9A B1", "8F BA", "94 AE", "93 BF", "92 88", "E2 9A 97", "94 AD", "94 AC", "95 B3", "92 8A", "92 89", "8C A1", "8F B7", "94 96", "9A BD", "9A BF", "9B 81", "94 91", "97 9D", "9B 8B", "9B 8C", "9B 8F", "9A AA", "9B 8E", "96 BC", "97 BA", "E2 9B B1", "97 BF", "9B 8D", "8E 88", "8E 8F", "8E 80", "8E 81", "8E 8A", "8E 89", "8E 8E", "8E 90", "8E 8C", "8F AE", "E2 9C 89 EF B8 8F", "93 A9", "93 A8", "93 A7", "92 8C", "93 AE", "93 AA", "93 AB", "93 AC", "93 AD", "93 A6", "93 AF", "93 A5", "93 A4", "93 9C", "93 83", "93 91", "93 8A", "93 88", "93 89", "93 84", "93 85", "93 86", "97 93", "93 87", "97 83", "97 B3", "97 84", "93 8B", "97 92", "93 81", "93 82", "97 82", "97 9E", "93 B0", "93 93", "93 95", "93 97", "93 98", "93 99", "93 94", "93 92", "93 9A", "93 96", "94 97", "93 8E", "96 87", "E2 9C 82 EF B8 8F", "93 90", "93 8F", "93 8C", "93 8D", "9A A9", "8F B3", "8F B4", "94 90", "94 92", "94 93", "94 8F", "96 8A", "96 8B", "E2 9C 92 EF B8 8F", "93 9D", "E2 9C 8F EF B8 8F", "96 8D", "96 8C", "94 8D", "94 8E", "9B 91", "9B 91", "E2 9D A4 EF B8 8F", "92 9B", "92 9A", "92 99", "92 9C", "92 94", "E2 9D A3 EF B8 8F", "92 95", "92 9E", "92 93", "92 97", "92 96", "92 98", "92 9D", "92 9F", "E2 98 AE EF B8 8F", "E2 9C 9D EF B8 8F", "E2 98 AA EF B8 8F", "95 89", "E2 98 B8 EF B8 8F", "E2 9C A1 EF B8 8F", "94 AF", "95 8E", "E2 98 AF EF B8 8F", "E2 98 A6 EF B8 8F", "9B 90", "E2 9B 8E", "E2 99 88 EF B8 8F", "E2 99 89 EF B8 8F", "E2 99 8A EF B8 8F", "E2 99 8B EF B8 8F", "E2 99 8C EF B8 8F", "E2 99 8D EF B8 8F", "E2 99 8E EF B8 8F", "E2 99 8F EF B8 8F", "E2 99 90 EF B8 8F", "E2 99 91 EF B8 8F", "E2 99 92 EF B8 8F", "E2 99 93 EF B8 8F", "86 94", "E2 9A 9B", "88 B3", "88 B9", "E2 98 A2 EF B8 8F", "E2 98 A3 EF B8 8F", "93 B4", "93 B3", "88 B6", "88 9A EF B8 8F", "88 B8", "88 BA", "88 B7 EF B8 8F", "E2 9C B4 EF B8 8F", "86 9A", "89 91", "92 AE", "89 90", "E3 8A 99 EF B8 8F", "E3 8A 97 EF B8 8F", "88 B4", "88 B5", "88 B2", "85 B0 EF B8 8F", "85 B1 EF B8 8F", "86 8E", "86 91", "85 BE EF B8 8F", "86 98", "E2 9B 94 EF B8 8F", "93 9B", "9A AB", "E2 9D 8C", "E2 AD 95 EF B8 8F", "92 A2", "E2 99 A8 EF B8 8F", "9A B7", "9A AF", "9A B3", "9A B1", "94 9E", "93 B5", "E2 9D 97 EF B8 8F", "E2 9D 95", "E2 9D 93", "E2 9D 94", "E2 80 BC EF B8 8F", "E2 81 89 EF B8 8F", "92 AF", "94 85", "94 86", "94 B1", "E2 9A 9C", "E3 80 BD EF B8 8F", "E2 9A A0 EF B8 8F", "9A B8", "94 B0", "E2 99 BB EF B8 8F", "88 AF EF B8 8F", "92 B9", "E2 9D 87 EF B8 8F", "E2 9C B3 EF B8 8F", "E2 9D 8E", "E2 9C 85", "92 A0", "8C 80", "E2 9E BF", "8C 90", "E2 93 82 EF B8 8F", "8F A7", "88 82 EF B8 8F", "9B 82", "9B 83", "9B 84", "9B 85", "E2 99 BF EF B8 8F", "9A AD", "9A BE", "85 BF EF B8 8F", "9A B0", "9A B9", "9A BA", "9A BC", "9A BB", "9A AE", "8E A6", "93 B6", "88 81", "86 96", "86 97", "86 99", "86 92", "86 95", "86 93", "30 EF B8 8F E2 83 A3", "31 EF B8 8F E2 83 A3", "32 EF B8 8F E2 83 A3", "33 EF B8 8F E2 83 A3", "34 EF B8 8F E2 83 A3", "35 EF B8 8F E2 83 A3", "36 EF B8 8F E2 83 A3", "37 EF B8 8F E2 83 A3", "38 EF B8 8F E2 83 A3", "39 EF B8 8F E2 83 A3", "94 9F", "94 A2", "E2 96 B6 EF B8 8F", "E2 8F B8", "E2 8F AF", "E2 8F B9", "E2 8F BA", "E2 8F AD", "E2 8F AE", "E2 8F A9", "E2 8F AA", "94 80", "94 81", "94 82", "E2 97 80 EF B8 8F", "94 BC", "94 BD", "E2 8F AB", "E2 8F AC", "E2 9E A1 EF B8 8F", "E2 AC 85 EF B8 8F", "E2 AC 86 EF B8 8F", "E2 AC 87 EF B8 8F", "E2 86 97 EF B8 8F", "E2 86 98 EF B8 8F", "E2 86 99 EF B8 8F", "E2 86 96 EF B8 8F", "E2 86 95 EF B8 8F", "E2 86 94 EF B8 8F", "94 84", "E2 86 AA EF B8 8F", "E2 86 A9 EF B8 8F", "E2 A4 B4 EF B8 8F", "E2 A4 B5 EF B8 8F", "23 EF B8 8F E2 83 A3", "2A EF B8 8F E2 83 A3", "E2 84 B9 EF B8 8F", "94 A4", "94 A1", "94 A0", "94 A3", "8E B5", "8E B6", "E3 80 B0 EF B8 8F", "E2 9E B0", "E2 9C 94 EF B8 8F", "94 83", "E2 9E 95", "E2 9E 96", "E2 9E 97", "E2 9C 96 EF B8 8F", "92 B2", "92 B1", "C2 A9 EF B8 8F", "C2 AE EF B8 8F", "E2 84 A2 EF B8 8F", "94 9A", "94 99", "94 9B", "94 9D", "94 9C", "E2 98 91 EF B8 8F", "94 98", "E2 9A AA EF B8 8F", "E2 9A AB EF B8 8F", "94 B4", "94 B5", "94 B8", "94 B9", "94 B6", "94 B7", "94 BA", "E2 96 AA EF B8 8F", "E2 96 AB EF B8 8F", "E2 AC 9B EF B8 8F", "E2 AC 9C EF B8 8F", "94 BB", "E2 97 BC EF B8 8F", "E2 97 BB EF B8 8F", "E2 97 BE EF B8 8F", "E2 97 BD EF B8 8F", "94 B2", "94 B3", "94 88", "94 89", "94 8A", "94 87", "93 A3", "93 A2", "94 94", "94 95", "83 8F", "80 84 EF B8 8F", "E2 99 A0 EF B8 8F", "E2 99 A3 EF B8 8F", "E2 99 A5 EF B8 8F", "E2 99 A6 EF B8 8F", "8E B4", "91 81 E2 80 8D F0 9F 97 A8", "92 AD", "97 AF", "92 AC", "95 90", "95 91", "95 92", "95 93", "95 94", "95 95", "95 96", "95 97", "95 98", "95 99", "95 9A", "95 9B", "95 9C", "95 9D", "95 9E", "95 9F", "95 A0", "95 A1", "95 A2", "95 A3", "95 A4", "95 A5", "95 A6", "95 A7", "9B 91", "87 A6 F0 9F 87 AB", "87 A6 F0 9F 87 BD", "87 A6 F0 9F 87 B1", "87 A9 F0 9F 87 BF", "87 A6 F0 9F 87 B8", "87 A6 F0 9F 87 A9", "87 A6 F0 9F 87 B4", "87 A6 F0 9F 87 AE", "87 A6 F0 9F 87 B6", "87 A6 F0 9F 87 AC", "87 A6 F0 9F 87 B7", "87 A6 F0 9F 87 B2", "87 A6 F0 9F 87 BC", "87 A6 F0 9F 87 BA", "87 A6 F0 9F 87 B9", "87 A6 F0 9F 87 BF", "87 A7 F0 9F 87 B8", "87 A7 F0 9F 87 AD", "87 A7 F0 9F 87 A9", "87 A7 F0 9F 87 A7", "87 A7 F0 9F 87 BE", "87 A7 F0 9F 87 AA", "87 A7 F0 9F 87 BF", "87 A7 F0 9F 87 AF", "87 A7 F0 9F 87 B2", "87 A7 F0 9F 87 B9", "87 A7 F0 9F 87 B4", "87 A7 F0 9F 87 B6", "87 A7 F0 9F 87 A6", "87 A7 F0 9F 87 BC", "87 A7 F0 9F 87 B7", "87 AE F0 9F 87 B4", "87 BB F0 9F 87 AC", "87 A7 F0 9F 87 B3", "87 A7 F0 9F 87 AC", "87 A7 F0 9F 87 AB", "87 A7 F0 9F 87 AE", "87 A8 F0 9F 87 BB", "87 B0 F0 9F 87 AD", "87 A8 F0 9F 87 B2", "87 A8 F0 9F 87 A6", "87 AE F0 9F 87 A8", "87 B0 F0 9F 87 BE", "87 A8 F0 9F 87 AB", "87 B9 F0 9F 87 A9", "87 A8 F0 9F 87 B1", "87 A8 F0 9F 87 B3", "87 A8 F0 9F 87 BD", "87 A8 F0 9F 87 A8", "87 A8 F0 9F 87 B4", "87 B0 F0 9F 87 B2", "87 A8 F0 9F 87 AC", "87 A8 F0 9F 87 A9", "87 A8 F0 9F 87 B0", "87 A8 F0 9F 87 B7", "87 AD F0 9F 87 B7", "87 A8 F0 9F 87 BA", "87 A8 F0 9F 87 BC", "87 A8 F0 9F 87 BE", "87 A8 F0 9F 87 BF", "87 A9 F0 9F 87 B0", "87 A9 F0 9F 87 AF", "87 A9 F0 9F 87 B2", "87 A9 F0 9F 87 B4", "87 AA F0 9F 87 A8", "87 AA F0 9F 87 AC", "87 B8 F0 9F 87 BB", "87 AC F0 9F 87 B6", "87 AA F0 9F 87 B7", "87 AA F0 9F 87 AA", "87 AA F0 9F 87 B9", "87 AA F0 9F 87 BA", "87 AB F0 9F 87 B0", "87 AB F0 9F 87 B4", "87 AB F0 9F 87 AF", "87 AB F0 9F 87 AE", "87 AB F0 9F 87 B7", "87 AC F0 9F 87 AB", "87 B5 F0 9F 87 AB", "87 B9 F0 9F 87 AB", "87 AC F0 9F 87 A6", "87 AC F0 9F 87 B2", "87 AC F0 9F 87 AA", "87 A9 F0 9F 87 AA", "87 AC F0 9F 87 AD", "87 AC F0 9F 87 AE", "87 AC F0 9F 87 B7", "87 AC F0 9F 87 B1", "87 AC F0 9F 87 A9", "87 AC F0 9F 87 B5", "87 AC F0 9F 87 BA", "87 AC F0 9F 87 B9", "87 AC F0 9F 87 AC", "87 AC F0 9F 87 B3", "87 AC F0 9F 87 BC", "87 AC F0 9F 87 BE", "87 AD F0 9F 87 B9", "87 AD F0 9F 87 B3", "87 AD F0 9F 87 B0", "87 AD F0 9F 87 BA", "87 AE F0 9F 87 B8", "87 AE F0 9F 87 B3", "87 AE F0 9F 87 A9", "87 AE F0 9F 87 B7", "87 AE F0 9F 87 B6", "87 AE F0 9F 87 AA", "87 AE F0 9F 87 B2", "87 AE F0 9F 87 B1", "87 AE F0 9F 87 B9", "87 A8 F0 9F 87 AE", "87 AF F0 9F 87 B2", "87 AF F0 9F 87 B5", "87 AF F0 9F 87 AA", "87 AF F0 9F 87 B4", "87 B0 F0 9F 87 BF", "87 B0 F0 9F 87 AA", "87 B0 F0 9F 87 AE", "87 BD F0 9F 87 B0", "87 B0 F0 9F 87 BC", "87 B0 F0 9F 87 AC", "87 B1 F0 9F 87 A6", "87 B1 F0 9F 87 BB", "87 B1 F0 9F 87 A7", "87 B1 F0 9F 87 B8", "87 B1 F0 9F 87 B7", "87 B1 F0 9F 87 BE", "87 B1 F0 9F 87 AE", "87 B1 F0 9F 87 B9", "87 B1 F0 9F 87 BA", "87 B2 F0 9F 87 B4", "87 B2 F0 9F 87 B0", "87 B2 F0 9F 87 AC", "87 B2 F0 9F 87 BC", "87 B2 F0 9F 87 BE", "87 B2 F0 9F 87 BB", "87 B2 F0 9F 87 B1", "87 B2 F0 9F 87 B9", "87 B2 F0 9F 87 AD", "87 B2 F0 9F 87 B6", "87 B2 F0 9F 87 B7", "87 B2 F0 9F 87 BA", "87 BE F0 9F 87 B9", "87 B2 F0 9F 87 BD", "87 AB F0 9F 87 B2", "87 B2 F0 9F 87 A9", "87 B2 F0 9F 87 A8", "87 B2 F0 9F 87 B3", "87 B2 F0 9F 87 AA", "87 B2 F0 9F 87 B8", "87 B2 F0 9F 87 A6", "87 B2 F0 9F 87 BF", "87 B2 F0 9F 87 B2", "87 B3 F0 9F 87 A6", "87 B3 F0 9F 87 B7", "87 B3 F0 9F 87 B5", "87 B3 F0 9F 87 B1", "87 B3 F0 9F 87 A8", "87 B3 F0 9F 87 BF", "87 B3 F0 9F 87 AE", "87 B3 F0 9F 87 AA", "87 B3 F0 9F 87 AC", "87 B3 F0 9F 87 BA", "87 B3 F0 9F 87 AB", "87 B2 F0 9F 87 B5", "87 B0 F0 9F 87 B5", "87 B3 F0 9F 87 B4", "87 B4 F0 9F 87 B2", "87 B5 F0 9F 87 B0", "87 B5 F0 9F 87 BC", "87 B5 F0 9F 87 B8", "87 B5 F0 9F 87 A6", "87 B5 F0 9F 87 AC", "87 B5 F0 9F 87 BE", "87 B5 F0 9F 87 AA", "87 B5 F0 9F 87 AD", "87 B5 F0 9F 87 B3", "87 B5 F0 9F 87 B1", "87 B5 F0 9F 87 B9", "87 B5 F0 9F 87 B7", "87 B6 F0 9F 87 A6", "87 B7 F0 9F 87 AA", "87 B7 F0 9F 87 B4", "87 B7 F0 9F 87 BA", "87 B7 F0 9F 87 BC", "87 A7 F0 9F 87 B1", "87 B8 F0 9F 87 AD", "87 B0 F0 9F 87 B3", "87 B1 F0 9F 87 A8", "87 B5 F0 9F 87 B2", "87 BB F0 9F 87 A8", "87 BC F0 9F 87 B8", "87 B8 F0 9F 87 B2", "87 B8 F0 9F 87 B9", "87 B8 F0 9F 87 A6", "87 B8 F0 9F 87 B3", "87 B7 F0 9F 87 B8", "87 B8 F0 9F 87 A8", "87 B8 F0 9F 87 B1", "87 B8 F0 9F 87 AC", "87 B8 F0 9F 87 BD", "87 B8 F0 9F 87 B0", "87 B8 F0 9F 87 AE", "87 B8 F0 9F 87 A7", "87 B8 F0 9F 87 B4", "87 BF F0 9F 87 A6", "87 AC F0 9F 87 B8", "87 B0 F0 9F 87 B7", "87 B8 F0 9F 87 B8", "87 AA F0 9F 87 B8", "87 B1 F0 9F 87 B0", "87 B8 F0 9F 87 A9", "87 B8 F0 9F 87 B7", "87 B8 F0 9F 87 BF", "87 B8 F0 9F 87 AA", "87 A8 F0 9F 87 AD", "87 B8 F0 9F 87 BE", "87 B9 F0 9F 87 BC", "87 B9 F0 9F 87 AF", "87 B9 F0 9F 87 BF", "87 B9 F0 9F 87 AD", "87 B9 F0 9F 87 B1", "87 B9 F0 9F 87 AC", "87 B9 F0 9F 87 B0", "87 B9 F0 9F 87 B4", "87 B9 F0 9F 87 B9", "87 B9 F0 9F 87 B3", "87 B9 F0 9F 87 B7", "87 B9 F0 9F 87 B2", "87 B9 F0 9F 87 A8", "87 B9 F0 9F 87 BB", "87 BA F0 9F 87 AC", "87 BA F0 9F 87 A6", "87 A6 F0 9F 87 AA", "87 AC F0 9F 87 A7", "87 BA F0 9F 87 B8", "87 BB F0 9F 87 AE", "87 BA F0 9F 87 BE", "87 BA F0 9F 87 BF", "87 BB F0 9F 87 BA", "87 BB F0 9F 87 A6", "87 BB F0 9F 87 AA", "87 BB F0 9F 87 B3", "87 BC F0 9F 87 AB", "87 AA F0 9F 87 AD", "87 BE F0 9F 87 AA", "87 BF F0 9F 87 B2", "87 BF F0 9F 87 BC"];
  emojisArray = [];
  freqEmojisArray = [];
  for (l = 0, len2 = rawEmojis.length; l < len2; l++) {
    em = rawEmojis[l];
    emojisArray.push(emojiFormatter(em));
  }
  frequentlyUsedEmojisRaw = ["92 85", "91 84", "91 85", "91 82", "91 83", "92 85", "91 84", "91 85", "91 82", "91 83", "92 85", "91 84", "91 85", "91 82", "91 83", "92 85", "91 84", "91 85", "91 82", "91 83", "92 85", "91 84", "91 85", "91 82", "91 83"];
  for (m = 0, len3 = frequentlyUsedEmojisRaw.length; m < len3; m++) {
    em = frequentlyUsedEmojisRaw[m];
    freqEmojisArray.push(emojiFormatter(em));
  }
  emojiKey.on(Events.TouchStart, function() {
    var ABC, activity, animals, emojiBG, emojiGalley, emojiPicker, emojiSpacer, emojisLoaded, firstLoad, flags, food, frequent, fullAmount, i, inc, len4, len5, len6, loadEmojis, loads, n, objects, partialAmount, q, r, ref1, ref2, results, row, s, sec, smileys, symbols, timeInc, title, travel;
    emojiKey.backgroundColor = "white";
    emojiBG = new Layer({
      backgroundColor: "#ECEEF1"
    });
    box = exports.px(30);
    emojiBG.constraints = {
      trailing: 1,
      leading: 1,
      bottom: 1,
      height: 258
    };
    exports.layout();
    emojiGalley = new ScrollComponent({
      superLayer: emojiBG,
      width: emojiBG.width,
      height: emojiBG.height - exports.px(40)
    });
    emojiGalley.speedY = 0;
    emojiSpacer = exports.px(6);
    emojiPicker = new Layer({
      backgroundColor: "transparent",
      name: "emoji picker",
      superLayer: emojiBG
    });
    emojiPicker.constraints = {
      leading: 1,
      trailing: 1,
      bottom: 1,
      height: 42
    };
    ABC = new Layer({
      backgroundColor: "transparent",
      superLayer: emojiPicker
    });
    ABC.html = "ABC";
    ABC.style = {
      "font-size": exports.px(15) + "px",
      "font-weight": 500,
      "font-family": '-apple-system, Helvetica, Arial, sans-serif',
      "color": "#4F555D"
    };
    ABC.constraints = {
      leading: 12,
      bottom: 14,
      width: 30,
      height: 15
    };
    exports.layout();
    row = -1;
    ABC.on(Events.Click, function() {
      return emojiBG.destroy();
    });
    frequent = new Layer({
      superLayer: emojiPicker,
      backgroundColor: "transparent"
    });
    frequent.html = "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='" + (exports.px(17)) + "px' height='" + (exports.px(16)) + "px' viewBox='0 0 17 16' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'> <!-- Generator: Sketch 3.5.2 (25235) - http://www.bohemiancoding.com/sketch --> <title>Recent</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='iOS-9-Keyboards' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'> <g id='iPhone-6-Portrait-Light-Copy' sketch:type='MSArtboardGroup' transform='translate(-55.000000, -638.000000)'> <g id='Keyboards' sketch:type='MSLayerGroup' transform='translate(0.000000, 408.000000)'> <g id='Recent' transform='translate(55.500000, 230.000000)' sketch:type='MSShapeGroup'> <circle id='Body' stroke='#4A5461' cx='8' cy='8' r='8'></circle> <path d='M7.5,7.5 L7.5,8.5 L8.5,8.5 L8.5,2 L7.5,2 L7.5,7.5 L4,7.5 L4,8.5 L8.5,8.5 L8.5,7.5 L7.5,7.5 Z' id='Hands' fill='#4A5461'></path> </g> </g> </g> </g> </svg>";
    frequent.constraints = {
      leading: [ABC, 15],
      bottom: 14,
      width: 16,
      height: 20
    };
    exports.layout();
    smileys = new Layer({
      superLayer: emojiPicker,
      backgroundColor: "transparent",
      opacity: .4
    });
    smileys.html = "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='" + (exports.px(17)) + "px' height='" + (exports.px(16)) + "px' viewBox='0 0 17 16' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'> <!-- Generator: Sketch 3.5.2 (25235) - http://www.bohemiancoding.com/sketch --> <title>:D</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='iOS-9-Keyboards' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'> <g id='iPhone-6-Portrait-Light-Copy' sketch:type='MSArtboardGroup' transform='translate(-86.000000, -638.000000)'> <g id='Keyboards' sketch:type='MSLayerGroup' transform='translate(0.000000, 408.000000)'> <g id=':D' transform='translate(87.000000, 230.500000)' sketch:type='MSShapeGroup'> <circle id='Head' stroke='#4A5461' stroke-width='0.789473684' cx='7.5' cy='7.5' r='7.5'></circle> <path d='M7.5,13.5263158 C10.2686907,13.5263158 12.5131579,10.3684212 12.5131579,9.18421045 C12.5131579,7.60526317 11.4389098,9.18421043 7.5,9.18421053 C3.56109023,9.18421062 2.48684211,7.60526317 2.48684211,9.18421045 C2.48684211,10.368421 4.73130935,13.5263158 7.5,13.5263158 Z M7.5,10.9605263 C8.93233083,11.1578947 11.7969925,10.368421 11.7969925,9.44423552 C11.7969925,8.78947368 10.8762084,9.57894727 7.5,9.77631579 C4.12379162,9.57894743 3.20300872,8.78947369 3.20300752,9.44423552 C3.20300582,10.368421 6.06766917,11.1578947 7.5,10.9605263 Z' id='Smile' fill='#4A5461'></path> <path d='M5.23684211,6.3236598 C5.64378876,6.3236598 5.97368421,5.88183554 5.97368421,5.33681769 C5.97368421,4.79179985 5.64378876,4.34997559 5.23684211,4.34997559 C4.82989545,4.34997559 4.5,4.79179985 4.5,5.33681769 C4.5,5.88183554 4.82989545,6.3236598 5.23684211,6.3236598 Z M9.73684211,6.3236598 C10.1437888,6.3236598 10.4736842,5.88183554 10.4736842,5.33681769 C10.4736842,4.79179985 10.1437888,4.34997559 9.73684211,4.34997559 C9.32989545,4.34997559 9,4.79179985 9,5.33681769 C9,5.88183554 9.32989545,6.3236598 9.73684211,6.3236598 Z' id='Eyes' fill='#4A5461'></path> </g> </g> </g> </g> </svg>";
    smileys.constraints = {
      leading: [frequent, 15],
      bottom: 14,
      width: 16,
      height: 20
    };
    exports.layout();
    animals = new Layer({
      superLayer: emojiPicker,
      backgroundColor: "transparent",
      opacity: .4
    });
    animals.html = "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='" + (exports.px(17)) + "px' height='" + (exports.px(16)) + "px' viewBox='0 0 17 17' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'> <!-- Generator: Sketch 3.5.2 (25235) - http://www.bohemiancoding.com/sketch --> <title>Group</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'> <g id='iPhone-6' sketch:type='MSArtboardGroup' transform='translate(-117.000000, -639.000000)' stroke='#4A5361'> <g id='ic_Food' sketch:type='MSLayerGroup' transform='translate(118.000000, 640.000000)'> <g id='Group' sketch:type='MSShapeGroup'> <path d='M5.68377537,1.38156646 C6.23926066,1.13624 6.85372005,1 7.5,1 C8.14627995,1 8.76073934,1.13624 9.31622463,1.38156646 C9.80879275,0.562359019 10.8255888,0 12,0 C13.6568542,0 15,1.11928813 15,2.5 C15,3.5571398 14.2126246,4.46102843 13.0999226,4.82662514 C14.2496528,5.64185422 15,6.98330062 15,8.5 C15,10.7167144 13.3971873,12.5590719 11.2872671,12.9313673 C10.4867248,14.1757703 9.08961696,15 7.5,15 C5.91038304,15 4.51327524,14.1757703 3.71273291,12.9313673 C1.60281268,12.5590719 0,10.7167144 0,8.5 C0,6.98330062 0.750347244,5.64185422 1.90007741,4.82662514 C0.787375445,4.46102843 0,3.5571398 0,2.5 C0,1.11928813 1.34314575,0 3,0 C4.17441122,0 5.19120725,0.562359019 5.68377537,1.38156646 Z' id='Oval-8'></path> <path d='M5.73834228,12 C5.86290979,12 6.14642353,12 6.14642353,12 C6.14642353,12 6.43215696,12.4426123 6.5246582,12.4919739 C6.66455601,12.5666277 7,12.4919739 7,12.4919739 L7,12 L8,12 L8,12.4919739 L8.49799228,12.4919739 L8.84301769,12 L9.3918457,12 C9.3918457,12 8.99598457,12.9839478 8.49799228,12.9839478 L6.60702407,12.9839478 C6.21404813,12.9839478 5.45996094,12 5.73834228,12 Z' id='Rectangle-44-Copy-2'></path> <circle id='Oval-14' cx='10.5' cy='7.5' r='0.5'></circle> <circle id='Oval-14-Copy' cx='4.5' cy='7.5' r='0.5'></circle> <path d='M12.6999969,5 C12.6999969,3.06700338 11.1329936,1.5 9.19999695,1.5' id='Oval-16'></path> <path d='M5.5,5 C5.5,3.06700338 3.93299662,1.5 2,1.5' id='Oval-16-Copy' transform='translate(3.750000, 3.250000) scale(-1, 1) translate(-3.750000, -3.250000) '></path> <rect id='Rectangle-44-Copy' x='7' y='11' width='1' height='1'></rect> <path d='M6,10 L6.5,10 L6.49999999,9.5 L8.50000005,9.5 L8.50000005,10 L9,10 L9,10.5 L8.5,10.5 L8.5,11 L6.5,11 L6.5,10.5 L6,10.5 L6,10 Z' id='Path'></path> </g> </g> </g> </g> </svg>";
    animals.constraints = {
      leading: [smileys, 15],
      bottom: 14,
      width: 16,
      height: 20
    };
    exports.layout();
    food = new Layer({
      superLayer: emojiPicker,
      backgroundColor: "transparent",
      opacity: .4
    });
    food.html = "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='" + (exports.px(17)) + "px' height='" + (exports.px(16)) + "px' viewBox='0 0 17 17' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'> <!-- Generator: Sketch 3.5.2 (25235) - http://www.bohemiancoding.com/sketch --> <title>Food</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='iOS-9-Keyboards' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'> <g id='iPhone-6-Portrait-Light-Copy' sketch:type='MSArtboardGroup' transform='translate(-148.000000, -637.000000)'> <g id='Keyboards' sketch:type='MSLayerGroup' transform='translate(0.000000, 408.000000)'> <g id='Food' transform='translate(149.500000, 229.500000)' sketch:type='MSShapeGroup'> <path d='M5.5,15.5 L1,15.5 L0,5 L6.5,5 L6.26360933,7.48210202' id='Drink' stroke='#4A5461'></path> <path d='M6.01077545,1.96930098 L6.51571352,5.22270539 L5.71908184,5.67947812 L5.0389009,1.96930098 L4.85557247,1.96930098 L4.85557247,0.96930098 L8.85557247,0.96930098 L8.85557247,1.96930098 L6.01077545,1.96930098 Z' id='Straw' fill='#4A5461' transform='translate(6.855572, 3.324390) rotate(24.000000) translate(-6.855572, -3.324390) '></path> <rect id='Bottom-Bun' stroke='#4A5461' x='3' y='14' width='10.5' height='1.5' rx='1'></rect> <path d='M1.5,12.5024408 C1.5,11.948808 1.94916916,11.5 2.49268723,11.5 L14.0073128,11.5 C14.5555588,11.5 15,11.9469499 15,12.5024408 L15,12.9975592 C15,13.551192 14.5508308,14 14.0073128,14 L2.49268723,14 C1.94444121,14 1.5,13.5530501 1.5,12.9975592 L1.5,12.5024408 Z M3.93300003,11.8392727 C3.41771834,11.6518976 3.44483697,11.5 3.9955775,11.5 L13.0044225,11.5 C13.5542648,11.5 13.5866061,11.6503251 13.067,11.8392727 L8.5,13.5 L3.93300003,11.8392727 Z' id='&quot;Patty&quot;' fill='#4A5461'></path> <path d='M2.5,10.5 L13.5,10.5 L15,11.5 L1,11.5 L2.5,10.5 Z' id='Cheese' fill='#4A5461'></path> <path d='M8.25,10.5 C11.4256373,10.5 14,10.3284271 14,9.5 C14,8.67157288 11.4256373,8 8.25,8 C5.07436269,8 2.5,8.67157288 2.5,9.5 C2.5,10.3284271 5.07436269,10.5 8.25,10.5 Z' id='Top-Bun' stroke='#4A5461' stroke-width='0.75'></path> </g> </g> </g> </g> </svg>";
    food.constraints = {
      leading: [animals, 15],
      bottom: 14,
      width: 16,
      height: 20
    };
    exports.layout();
    activity = new Layer({
      superLayer: emojiPicker,
      backgroundColor: "transparent",
      opacity: .4
    });
    activity.html = "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='" + (exports.px(16)) + "px' height='" + (exports.px(16)) + "px' viewBox='0 0 16 16' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'> <!-- Generator: Sketch 3.5.2 (25235) - http://www.bohemiancoding.com/sketch --> <title>Soccer Ball</title> <desc>Created with Sketch.</desc> <defs> <circle id='path-1' cx='8' cy='8' r='8'></circle> </defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'> <g id='iPhone-6' sketch:type='MSArtboardGroup' transform='translate(-179.000000, -639.000000)'> <g id='Soccer-Ball' sketch:type='MSLayerGroup' transform='translate(179.000000, 639.000000)'> <mask id='mask-2' sketch:name='Mask' fill='white'> <use xlink:href='#path-1'></use> </mask> <use id='Mask' stroke='#4A5361' sketch:type='MSShapeGroup' xlink:href='#path-1'></use> <path d='M6,12.1203046 L12.8573384,8 L13.3723765,8.8571673 L6.51503807,12.9774719 L6,12.1203046 L6,12.1203046 Z' id='Rectangle-47' fill='#4A5361' sketch:type='MSShapeGroup' mask='url(#mask-2)'></path> <path d='M11.849648,8.7260551 L19.1001103,5.34510901 L19.5227285,6.2514168 L12.2722662,9.63236289 L11.849648,8.7260551 L11.849648,8.7260551 Z' id='Rectangle-47-Copy-3' fill='#4A5361' sketch:type='MSShapeGroup' mask='url(#mask-2)'></path> <path d='M6,3.1203046 L12.8573384,-1 L13.3723765,-0.142832699 L6.51503807,3.9774719 L6,3.1203046 L6,3.1203046 Z' id='Rectangle-47-Copy-2' fill='#4A5361' sketch:type='MSShapeGroup' mask='url(#mask-2)'></path> <path d='M-1,7.1203046 L5.85733841,3 L6.37237648,3.8571673 L-0.484961925,7.9774719 L-1,7.1203046 L-1,7.1203046 Z' id='Rectangle-47-Copy-4' fill='#4A5361' sketch:type='MSShapeGroup' mask='url(#mask-2)'></path> <rect id='Rectangle-50' fill='#4A5361' sketch:type='MSShapeGroup' mask='url(#mask-2)' x='4' y='6' width='1' height='5'></rect> <rect id='Rectangle-51' fill='#4A5361' sketch:type='MSShapeGroup' mask='url(#mask-2)' x='11.5' y='3' width='1' height='12'></rect> <path d='M5,4.8571673 L11.8573384,8.9774719 L12.3723765,8.1203046 L5.51503807,4 L5,4.8571673' id='Rectangle-47-Copy' fill='#4A5361' sketch:type='MSShapeGroup' mask='url(#mask-2)'></path> <path d='M5,12.8571673 L11.8573384,16.9774719 L12.3723765,16.1203046 L5.51503807,12 L5,12.8571673' id='Rectangle-47-Copy-5' fill='#4A5361' sketch:type='MSShapeGroup' mask='url(#mask-2)'></path> <path d='M11.9048972,6.14766064 L13.8714227,8.33170849 L12.4019596,10.8768933 L9.52725589,10.2658562 L9.22005445,7.34302965 L11.9048972,6.14766064' id='Polygon-1' fill='#D8D8D8' sketch:type='MSShapeGroup' mask='url(#mask-2)'></path> <path d='M11.9048972,6.14766064 L13.8714227,8.33170849 L12.4019596,10.8768933 L9.52725589,10.2658562 L9.22005445,7.34302965 L11.9048972,6.14766064' id='Polygon-1-Copy' fill='#4A5361' sketch:type='MSShapeGroup' mask='url(#mask-2)'></path> <path d='M7.45771189,3.19504739 L7.35514484,6.13218333 L4.5300676,6.9422612 L2.88664089,4.5057809 L4.69602457,2.18987541 L7.45771189,3.19504739' id='Polygon-1-Copy-2' fill='#4A5361' sketch:type='MSShapeGroup' mask='url(#mask-2)'></path> <path d='M7.45771189,11.1950474 L7.35514484,14.1321833 L4.5300676,14.9422612 L2.88664089,12.5057809 L4.69602457,10.1898754 L7.45771189,11.1950474' id='Polygon-1-Copy-3' fill='#4A5361' sketch:type='MSShapeGroup' mask='url(#mask-2)'></path> <path d='M14.5431701,0.0725939314 L14.4406031,3.00972988 L11.6155258,3.81980774 L9.97209912,1.38332745 L11.7814828,-0.93257805 L14.5431701,0.0725939314' id='Polygon-1-Copy-4' fill='#4A5361' sketch:type='MSShapeGroup' mask='url(#mask-2)'></path> </g> </g> </g> </svg>";
    activity.constraints = {
      leading: [food, 15],
      bottom: 14,
      width: 16,
      height: 20
    };
    exports.layout();
    travel = new Layer({
      superLayer: emojiPicker,
      backgroundColor: "transparent",
      opacity: .4
    });
    travel.html = "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='" + (exports.px(17)) + "px' height='" + (exports.px(16)) + "px' viewBox='0 0 17 16' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'> <!-- Generator: Sketch 3.5.2 (25235) - http://www.bohemiancoding.com/sketch --> <title>Transport</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='iOS-9-Keyboards' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'> <g id='iPhone-6-Portrait-Light-Copy' sketch:type='MSArtboardGroup' transform='translate(-241.000000, -638.000000)'> <g id='Keyboards' sketch:type='MSLayerGroup' transform='translate(0.000000, 408.000000)'> <g id='Transport' transform='translate(241.500000, 230.000000)' sketch:type='MSShapeGroup'> <path d='M0,6 L1,6 L1,15 L0,15 L0,6 Z M15,4 L16,4 L16,15 L15,15 L15,4 Z M3.5,0 L4.5,0 L4.5,7 L3.5,7 L3.5,0 Z M1,6 L3.5,6 L3.5,7 L1,7 L1,6 Z M4.5,0 L9.5,0 L9.5,1 L4.5,1 L4.5,0 Z M9.5,0 L10.5,0 L10.5,6 L9.5,6 L9.5,0 Z M10.5,4 L15,4 L15,5 L10.5,5 L10.5,4 Z' id='Skyline' fill='#4A5461'></path> <g id='Windows' transform='translate(2.000000, 2.000000)' fill='#4A5461'> <rect id='Window' x='0' y='6' width='1' height='1'></rect> <rect id='Window' x='3.5' y='0' width='1' height='1'></rect> <rect id='Window' x='5.5' y='0' width='1' height='1'></rect> <rect id='Window' x='5.5' y='2' width='1' height='1'></rect> <rect id='Window' x='3.5' y='2' width='1' height='1'></rect> <rect id='Window' x='11' y='4' width='1' height='1'></rect> <rect id='Window' x='11' y='6' width='1' height='1'></rect> </g> <g id='Car' transform='translate(2.500000, 6.500000)'> <path d='M8.5,8 L2.5,8 L2.5,9.5 L0.5,9.5 L0.5,7.8681145 C0.201202192,7.69582702 0,7.37091363 0,6.9906311 L0,5.0093689 C0,4.45190985 0.444836974,4 0.995577499,4 L10.0044225,4 C10.5542648,4 11,4.44335318 11,5.0093689 L11,6.9906311 C11,7.3653315 10.7990244,7.69234519 10.5,7.86649002 L10.5,9.5 L8.5,9.5 L8.5,8 Z M1.75,6.5 C2.16421356,6.5 2.5,6.16421356 2.5,5.75 C2.5,5.33578644 2.16421356,5 1.75,5 C1.33578644,5 1,5.33578644 1,5.75 C1,6.16421356 1.33578644,6.5 1.75,6.5 Z M9.25,6.5 C9.66421356,6.5 10,6.16421356 10,5.75 C10,5.33578644 9.66421356,5 9.25,5 C8.83578644,5 8.5,5.33578644 8.5,5.75 C8.5,6.16421356 8.83578644,6.5 9.25,6.5 Z M0.5,7 L10.5,7 L10.5,7.5 L0.5,7.5 L0.5,7 Z M3,6.5 L8,6.5 L8,7 L3,7 L3,6.5 Z' id='Body' fill='#4A5461'></path> <path d='M1.5,4.5 L1.5,3 C1.5,1.34314575 2.83902013,0 4.50166547,0 L6.49833453,0 C8.15610859,0 9.5,1.34651712 9.5,3 L9.5,5' id='Roof' stroke='#4A5461'></path> </g> </g> </g> </g> </g> </svg>";
    travel.constraints = {
      leading: [activity, 15],
      bottom: 14,
      width: 16,
      height: 20
    };
    exports.layout();
    objects = new Layer({
      superLayer: emojiPicker,
      backgroundColor: "transparent",
      opacity: .4
    });
    objects.html = "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='" + (exports.px(11)) + "px' height='" + (exports.px(16)) + "px' viewBox='0 0 11 16' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'> <!-- Generator: Sketch 3.5.2 (25235) - http://www.bohemiancoding.com/sketch --> <title>Lightbulb</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'> <g id='iPhone-6' sketch:type='MSArtboardGroup' transform='translate(-244.000000, -639.000000)' stroke='#4A5361'> <g id='Lightbulb' sketch:type='MSLayerGroup' transform='translate(244.000000, 639.000000)'> <path d='M8,10.4002904 C9.78083795,9.48993491 11,7.63734273 11,5.5 C11,2.46243388 8.53756612,0 5.5,0 C2.46243388,0 0,2.46243388 0,5.5 C0,7.63734273 1.21916205,9.48993491 3,10.4002904 L3,14.0020869 C3,15.1017394 3.89761602,16 5.0048815,16 L5.9951185,16 C7.1061002,16 8,15.1055038 8,14.0020869 L8,10.4002904 Z' id='Oval-17' sketch:type='MSShapeGroup'></path> <rect id='Rectangle-50' sketch:type='MSShapeGroup' x='3' y='12' width='5' height='1'></rect> <rect id='Rectangle-51' sketch:type='MSShapeGroup' x='4' y='13.5' width='1.5' height='1'></rect> <path d='M5,8.5 C5,8.5 3.49999999,7.50000001 4,7 C4.50000001,6.49999999 5,7.66666667 5.5,8 C5.5,8 6.5,6.50000001 7,7 C7.5,7.49999999 6,8.5 6,8.5 L6,11 L5,11 L5,8.5 Z' id='Rectangle-52' sketch:type='MSShapeGroup'></path> </g> </g> </g> </svg>";
    objects.constraints = {
      leading: [travel, 15],
      bottom: 14,
      width: 16,
      height: 20
    };
    exports.layout();
    symbols = new Layer({
      superLayer: emojiPicker,
      backgroundColor: "transparent",
      opacity: .4
    });
    symbols.html = "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='" + (exports.px(16)) + "px' height='" + (exports.px(17)) + "px' viewBox='0 0 15 17' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'> <!-- Generator: Sketch 3.5.2 (25235) - http://www.bohemiancoding.com/sketch --> <title>Objects &amp; Symbols</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='iOS-9-Keyboards' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'> <g id='iPhone-6-Portrait-Light-Copy' sketch:type='MSArtboardGroup' transform='translate(-304.000000, -638.000000)' fill='#4A5461'> <g id='Keyboards' sketch:type='MSLayerGroup' transform='translate(0.000000, 408.000000)'> <g id='Objects-&amp;-Symbols' transform='translate(304.000000, 230.000000)'> <g id='Thing' transform='translate(0.000000, 0.500000)' sketch:type='MSShapeGroup'> <rect id='Rectangle-1209' x='0' y='0' width='7' height='1'></rect> <rect id='Rectangle-1209' x='0' y='2' width='7' height='1'></rect> <rect id='Rectangle-1211' x='3' y='3' width='1' height='4'></rect> </g> <path d='M11.75,0.159263978 L11.75,0 L11,0 L11,5.091493 C10.59344,4.94221392 10.0639662,4.96453224 9.55715399,5.19017957 C8.69849293,5.5724801 8.23003835,6.39365621 8.51083141,7.02432774 C8.79162447,7.65499928 9.71533454,7.85634375 10.5739956,7.47404321 C11.2761183,7.16143803 11.7173393,6.55538972 11.7013595,6 L11.75,6 L11.75,1.39385056 C12.3175908,1.59590037 13,2.0817456 13,3.25 C13,4.25 12.75,5.5 12.75,5.5 C12.75,5.5 13.75,4.75 13.75,2.5 C13.75,1.02256101 12.5642674,0.407473019 11.75,0.159263978 Z' id='Note' sketch:type='MSShapeGroup'></path> <text id='&amp;' sketch:type='MSTextLayer' font-family='SF UI Display' font-size='9.5' font-weight='normal'> <tspan x='0.25' y='16'>&amp;</tspan> </text> <text id='%' sketch:type='MSTextLayer' font-family='SF UI Display' font-size='9.5' font-weight='normal'> <tspan x='7.75' y='16'>%</tspan> </text> </g> </g> </g> </g> </svg>";
    symbols.constraints = {
      leading: [objects, 15],
      bottom: 14,
      width: 16,
      height: 20
    };
    exports.layout();
    flags = new Layer({
      superLayer: emojiPicker,
      backgroundColor: "transparent",
      opacity: .4
    });
    flags.html = "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='" + (exports.px(11)) + "px' height='" + (exports.px(15)) + "px' viewBox='0 0 11 15' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'> <!-- Generator: Sketch 3.5.2 (25235) - http://www.bohemiancoding.com/sketch --> <title>Flag</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='iOS-9-Keyboards' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'> <g id='iPhone-6-Portrait-Light-Copy' sketch:type='MSArtboardGroup' transform='translate(-275.000000, -639.000000)'> <g id='Keyboards' sketch:type='MSLayerGroup' transform='translate(0.000000, 408.000000)'> <g id='Flag' transform='translate(275.000000, 231.500000)' sketch:type='MSShapeGroup'> <rect id='Pole' fill='#4A5461' x='0' y='0' width='1' height='14'></rect> <path d='M1,1 C1,1 1.25,2 3.5,2 C5.75,2 6,0.749999998 8,0.75 C10,0.749999998 10,1.5 10,1.5 L10,7.5 C10,7.5 10,6.5 8,6.5 C6,6.5 4.80623911,8 3.5,8 C2.19376089,8 1,7 1,7 L1,1 Z' stroke='#4A5461' stroke-linejoin='round'></path> </g> </g> </g> </g> </svg>";
    flags.constraints = {
      leading: [symbols, 15],
      bottom: 14,
      width: 16,
      height: 20
    };
    exports.layout();
    loadEmojis = function(em) {
      var col, emoji;
      row++;
      index = emojisArray.indexOf(em);
      col = Math.floor(index / 5);
      if (row > 4) {
        row = 0;
      }
      emoji = new Layer({
        x: col * box + (emojiSpacer * col) + exports.px(3),
        y: row * box + (emojiSpacer * row) + exports.px(40),
        superLayer: emojiGalley.content,
        width: box,
        height: box,
        name: decodeURIComponent(em),
        backgroundColor: "transparent"
      });
      emoji.html = decodeURIComponent(em);
      emoji.style = {
        "font-size": exports.px(26) + "px",
        "line-height": box + "px",
        "text-align": "center"
      };
      emoji.on(Events.Click, function() {
        return print(this.name);
      });
      emojisLoaded++;
      return print(emojisLoaded);
    };
    inc = 200;
    firstLoad = .1;
    timeInc = 2;
    fullAmount = emojisArray.length;
    loads = Math.ceil(fullAmount / inc) - 1;
    partialAmount = fullAmount % inc;
    emojisLoaded = 0;
    for (i = n = 0, ref1 = loads; 0 <= ref1 ? n <= ref1 : n >= ref1; i = 0 <= ref1 ? ++n : --n) {
      i++;
    }
    emojiGalley.on(Events.Move, function() {
      var len4, len5, len6, len7, len8, q, r, ref2, ref3, ref4, ref5, ref6, s, t, u;
      if (emojiGalley.scrollX > 2000 && emojisLoaded < 400) {
        ref2 = emojisArray.slice(200, 400);
        for (q = 0, len4 = ref2.length; q < len4; q++) {
          em = ref2[q];
          loadEmojis(em);
        }
        emojiGalley.scrollX = 2001;
      }
      if (emojiGalley.scrollX > 5000 && emojisLoaded < 600) {
        ref3 = emojisArray.slice(400, 600);
        for (r = 0, len5 = ref3.length; r < len5; r++) {
          em = ref3[r];
          loadEmojis(em);
        }
        emojiGalley.scrollX = 5001;
      }
      if (emojiGalley.scrollX > 7500 && emojisLoaded < 800) {
        ref4 = emojisArray.slice(600, 800);
        for (s = 0, len6 = ref4.length; s < len6; s++) {
          em = ref4[s];
          loadEmojis(em);
        }
        emojiGalley.scrollX = 7501;
      }
      if (emojiGalley.scrollX > 10000 && emojisLoaded < 1000) {
        ref5 = emojisArray.slice(800, 1000);
        for (t = 0, len7 = ref5.length; t < len7; t++) {
          em = ref5[t];
          loadEmojis(em);
        }
        emojiGalley.scrollX = 10001;
      }
      if (emojiGalley.scrollX > 12500 && emojisLoaded < 1200) {
        ref6 = emojisArray.slice(1000, 1297);
        for (u = 0, len8 = ref6.length; u < len8; u++) {
          em = ref6[u];
          loadEmojis(em);
        }
        return emojiGalley.scrollX = 12501;
      }
    });
    Utils.delay(1, function() {
      var len4, q, ref2, results, scrollX;
      if (emojisLoaded < 400 && emojiGalley.scrollX === 0) {
        scrollX = emojiGalley.scrollX;
        ref2 = emojisArray.slice(200, 400);
        results = [];
        for (q = 0, len4 = ref2.length; q < len4; q++) {
          em = ref2[q];
          results.push(loadEmojis(em));
        }
        return results;
      }
    });
    Utils.delay(2.5, function() {
      var len4, q, ref2, results, scrollX;
      if (emojisLoaded < 600 && emojiGalley.scrollX === 0) {
        scrollX = emojiGalley.scrollX;
        ref2 = emojisArray.slice(400, 600);
        results = [];
        for (q = 0, len4 = ref2.length; q < len4; q++) {
          em = ref2[q];
          results.push(loadEmojis(em));
        }
        return results;
      }
    });
    Utils.delay(2.5, function() {
      var len4, q, ref2, results, scrollX;
      if (emojisLoaded < 800 && emojiGalley.scrollX === 0) {
        scrollX = emojiGalley.scrollX;
        ref2 = emojisArray.slice(600, 800);
        results = [];
        for (q = 0, len4 = ref2.length; q < len4; q++) {
          em = ref2[q];
          results.push(loadEmojis(em));
        }
        return results;
      }
    });
    Utils.delay(5.5, function() {
      var len4, q, ref2, results, scrollX;
      if (emojisLoaded < 1000 && emojiGalley.scrollX === 0) {
        scrollX = emojiGalley.scrollX;
        ref2 = emojisArray.slice(800, 1000);
        results = [];
        for (q = 0, len4 = ref2.length; q < len4; q++) {
          em = ref2[q];
          results.push(loadEmojis(em));
        }
        return results;
      }
    });
    Utils.delay(7, function() {
      var len4, q, ref2, results, scrollX;
      if (emojisLoaded < 1297 && emojiGalley.scrollX === 0) {
        scrollX = emojiGalley.scrollX;
        ref2 = emojisArray.slice(1000, 1297);
        results = [];
        for (q = 0, len4 = ref2.length; q < len4; q++) {
          em = ref2[q];
          results.push(loadEmojis(em));
        }
        return results;
      }
    });
    for (q = 0, len4 = freqEmojisArray.length; q < len4; q++) {
      em = freqEmojisArray[q];
      loadEmojis(em);
    }
    ref2 = emojisArray.slice(0, inc);
    for (r = 0, len5 = ref2.length; r < len5; r++) {
      em = ref2[r];
      loadEmojis(em);
    }
    results = [];
    for (s = 0, len6 = emojiSections.length; s < len6; s++) {
      sec = emojiSections[s];
      index = emojiSections.indexOf(sec);
      title = new Layer({
        superLayer: emojiGalley.content,
        backgroundColor: "transparent",
        x: index * 5000 + exports.px(8),
        height: 80,
        width: 800
      });
      title.html = sec;
      results.push(title.style = {
        "font-size": exports.px(12) + "px",
        "font-weight": 600,
        "font-family": '-apple-system, Helvetica, Arial, sans-serif',
        'line-height': exports.px(42) + "px",
        'letter-spacing': exports.px(0.7) + "px",
        'color': "#A5A6A9",
        'text-transform': 'uppercase'
      });
    }
    return results;
  });
  emojiKey.on(Events.TouchEnd, function() {
    return emojiKey.backgroundColor = "#AAB3BC";
  });
  returnKey = new Layer({
    superLayer: board,
    borderRadius: exports.px(5),
    backgroundColor: "#AAB3BC",
    shadowY: exports.px(1),
    shadowColor: "#929498",
    color: "black"
  });
  returnKey.constraints = {
    width: 87.5,
    height: 42,
    trailing: 3,
    bottom: 4
  };
  returnKey.html = "return";
  returnKey.style = {
    "font-size": exports.px(16) + "px",
    "font-weight": 400,
    "font-family": '-apple-system, Helvetica, Arial, sans-serif',
    'text-align': 'center',
    'line-height': exports.px(42) + "px"
  };
  exports.layout();
  spaceKey = new Layer({
    superLayer: board,
    borderRadius: exports.px(5),
    backgroundColor: "white",
    shadowY: exports.px(1),
    shadowColor: "#929498",
    color: "black"
  });
  spaceKey.constraints = {
    width: 180,
    height: 42,
    leading: [emojiKey, 6],
    bottom: 4
  };
  spaceKey.html = "space";
  spaceKey.style = {
    "font-size": exports.px(16) + "px",
    "font-weight": 400,
    "font-family": '-apple-system, Helvetica, Arial, sans-serif',
    'text-align': 'center',
    'line-height': exports.px(42) + "px"
  };
  exports.layout();
  spaceKey.on(Events.TouchStart, function() {
    return spaceKey.backgroundColor = "#AAB3BC";
  });
  spaceKey.on(Events.TouchEnd, function() {
    return spaceKey.backgroundColor = "white";
  });
  returnKey.on(Events.TouchStart, function() {
    return returnKey.backgroundColor = "white";
  });
  returnKey.on(Events.TouchEnd, function() {
    return returnKey.backgroundColor = "#AAB3BC";
  });
  return {
    "board": board,
    "keys": keysArray,
    "key": {
      "q": keysArray[0],
      "w": keysArray[1],
      "e": keysArray[2],
      "r": keysArray[3],
      "t": keysArray[4],
      "y": keysArray[5],
      "u": keysArray[6],
      "i": keysArray[7],
      "o": keysArray[8],
      "p": keysArray[9],
      "a": keysArray[10],
      "s": keysArray[11],
      "d": keysArray[12],
      "f": keysArray[13],
      "g": keysArray[14],
      "h": keysArray[15],
      "j": keysArray[16],
      "k": keysArray[17],
      "l": keysArray[18],
      "z": keysArray[19],
      "x": keysArray[20],
      "c": keysArray[21],
      "v": keysArray[22],
      "b": keysArray[23],
      "n": keysArray[24],
      "m": keysArray[25]
    }
  };
};

exports.Menu = function(array) {
  var all, button, description, descriptionBuffer, divider, exitButton, index, isRedPresent, j, len, menus, o, opt, options, opts, overlay, ref, setup;
  setup = setupComponent("menu", array);
  all = new Layer({
    backgroundColor: "transparent"
  });
  all.constraints = {
    leading: 0,
    trailing: 0,
    top: 0,
    bottom: 0
  };
  overlay = new Layer({
    backgroundColor: "rgba(0, 0, 0, .4)",
    superLayer: all,
    name: "overlay"
  });
  overlay.constraints = {
    leading: 0,
    trailing: 0,
    top: 0,
    bottom: 0
  };
  exports.bgBlur(overlay);
  menus = new Layer({
    backgroundColor: "transparent"
  });
  menus.constraints = {
    leading: 0,
    trailing: 0,
    top: 0,
    bottom: 0
  };
  exitButton = new exports.Button({
    type: "big",
    text: setup.exit,
    blur: false,
    superLayer: menus
  });
  exitButton.constraints = {
    bottom: 10,
    align: "horizontal"
  };
  options = new Layer({
    superLayer: menus,
    borderRadius: exports.px(12.5),
    backgroundColor: "rgba(255,255,255, .85)"
  });
  descriptionBuffer = 0;
  if (setup.description) {
    description = new exports.Text({
      style: "menuDescription",
      text: setup.description,
      superLayer: options,
      fontSize: 13,
      color: "#8F8E94",
      textAlign: "center"
    });
    description.constraints = {
      top: 21,
      align: "horizontal",
      width: exports.pt(exports.width) - 100
    };
    exports.layout();
    descriptionBuffer = exports.pt(description.height) + 42;
    divider = new Layer({
      superLayer: options,
      backgroundColor: "#D6E3E7"
    });
    divider.constraints = {
      height: 1,
      top: descriptionBuffer,
      leading: 0,
      trailing: 0
    };
  }
  exports.bgBlur(options);
  options.constraints = {
    leading: 10,
    trailing: 10,
    bottom: [exitButton, 10],
    height: 58 * setup.options.length + descriptionBuffer
  };
  exports.layout();
  opts = {};
  ref = setup.options;
  for (index = j = 0, len = ref.length; j < len; index = ++j) {
    opt = ref[index];
    isRedPresent = opt.search("-r");
    if (isRedPresent === 0) {
      this.red = true;
      opt = opt.replace("-r", "");
      opt = opt.slice(1);
    }
    o = new Layer({
      superLayer: options,
      width: options.width,
      backgroundColor: "transparent",
      borderRadius: exports.px(12.5)
    });
    o.constraints = {
      top: index * 58 + descriptionBuffer,
      height: 58
    };
    button = new exports.Button({
      text: opt,
      superLayer: o,
      fontSize: 20
    });
    button.constraints = {
      align: "horizontal",
      top: 15
    };
    if (this.red) {
      button.subLayers[0].color = "red";
    }
    button.color = "#FE3824";
    if (index !== setup.options.length - 1) {
      divider = new Layer({
        superLayer: o,
        width: options.width,
        backgroundColor: "#D6E3E7"
      });
      divider.constraints = {
        height: 1,
        bottom: 0
      };
    }
    exports.layout();
    o.on(Events.TouchStart, function() {
      var backgroundColor;
      backgroundColor = "rgba(215,215,215,.7)";
      return this.animate({
        properties: {
          backgroundColor: backgroundColor
        },
        time: .5
      });
    });
    o.on(Events.TouchEnd, function() {
      this.animate({
        properties: {
          backgroundColor: "transparent"
        },
        time: .5
      });
      menus.animate({
        properties: {
          maxY: exports.height + exports.px((setup.options.length + 3) * 58)
        },
        time: .3
      });
      overlay.animate({
        properties: {
          opacity: 0
        },
        time: .3
      });
      return Utils.delay(.3, function() {
        return all.destroy();
      });
    });
    opts[opt] = o;
  }
  if (setup.animated === true) {
    overlay.opacity = 0;
    menus.maxY = exports.height + exports.px((setup.options.length + 3) * 58);
    overlay.animate({
      properties: {
        opacity: 1
      },
      time: .3
    });
    menus.animate({
      properties: {
        maxY: exports.height
      },
      time: .3
    });
  }
  overlay.on(Events.TouchEnd, function() {
    menus.animate({
      properties: {
        maxY: exports.height + exports.px((setup.options.length + 3) * 58)
      },
      time: .3
    });
    overlay.animate({
      properties: {
        opacity: 0
      },
      time: .3
    });
    return Utils.delay(.3, function() {
      return all.destroy();
    });
  });
  exitButton.on(Events.TouchEnd, function() {
    menus.animate({
      properties: {
        maxY: exports.height + exports.px((setup.options.length + 3) * 58)
      },
      time: .3
    });
    overlay.animate({
      properties: {
        opacity: 0
      },
      time: .3
    });
    return Utils.delay(.3, function() {
      return all.destroy();
    });
  });
  return {
    cancel: exitButton,
    options: opts,
    menu: menus,
    overlay: overlay,
    description: description
  };
};

exports.NavBar = function(array) {
  var setup;
  setup = setupComponent("navBar", array);
  return print(setup);
};

exports.Tab = function(array) {
  var icon, label, setup, svgFrame, tabBox, tabView;
  setup = setupComponent("tab", array);
  switch (exports.device) {
    case "iphone-5":
      this.tabWidth = 55;
      break;
    default:
      this.tabWidth = 75;
  }
  tabView = new Layer({
    name: setup.label + " view",
    backgroundColor: "transparent"
  });
  tabView.constraints = {
    leading: 0,
    trailing: 0,
    top: 0,
    bottom: 0
  };
  tabBox = new Layer({
    backgroundColor: "transparent",
    name: setup.label + " tab"
  });
  tabBox.constraints = {
    width: this.tabWidth,
    height: 49
  };
  icon = new Layer({
    width: exports.px(25),
    height: exports.px(25),
    backgroundColor: "transparent",
    name: "icon",
    superLayer: tabBox
  });
  icon.constraints = {
    align: "horizontal",
    top: 7
  };
  svgFrame = exports.svg(setup.icon);
  icon.html = svgFrame.svg;
  icon.width = svgFrame.width;
  icon.height = svgFrame.height;
  label = new exports.Text({
    text: setup.label,
    superLayer: tabBox,
    color: "#929292",
    fontSize: 10,
    name: "label",
    textTransform: "capitalize"
  });
  label.constraints = {
    bottom: 2,
    horizontalCenter: icon
  };
  exports.layout();
  tabBox.type = "tab";
  return {
    tab: tabBox,
    icon: icon,
    label: label,
    view: tabView
  };
};

exports.TabBar = function(array) {
  var divider, dummyTab, dummyTab2, index, j, len, ref, setActive, setup, tab, tabBar, tabBarBG, tabBarBox, tabWidth;
  setup = setupComponent("tabBar", array);
  if (setup.tabs.length === 0) {
    dummyTab = new exports.Tab;
    dummyTab2 = new exports.Tab;
    setup.tabs.push(dummyTab);
    setup.tabs.push(dummyTab2);
  }
  tabWidth = 75;
  switch (exports.device) {
    case "iphone-5":
      tabWidth = 55;
      break;
    default:
      tabWidth = 75;
  }
  tabBar = new Layer({
    backgroundColor: "transparent"
  });
  tabBarBG = new BackgroundLayer({
    backgroundColor: "white",
    opacity: .9,
    superLayer: tabBar,
    name: "tabBar background"
  });
  tabBar.constraints = {
    leading: 0,
    trailing: 0,
    bottom: 0,
    height: 49
  };
  tabBarBG.constraints = {
    leading: 0,
    trailing: 0,
    bottom: 0,
    height: 49
  };
  divider = new Layer({
    backgroundColor: "#B2B2B2",
    name: "tabDivider",
    superLayer: tabBar
  });
  divider.constraints = {
    top: 0,
    leading: 0,
    trailing: 0,
    height: .5
  };
  tabBarBox = new Layer({
    superLayer: tabBar,
    backgroundColor: "transparent",
    name: "tabBar box"
  });
  tabBarBox.constraints = {
    height: 49,
    width: setup.tabs.length * tabWidth
  };
  exports.layout();
  setActive = function(tabIndex) {
    var index, j, len, ref, results, tab;
    ref = setup.tabs;
    results = [];
    for (index = j = 0, len = ref.length; j < len; index = ++j) {
      tab = ref[index];
      if (index === tabIndex) {
        exports.changeFill(tab.icon, setup.activeFillColor);
        tab.label.color = setup.activeLabelColor;
        results.push(tab.view.visible = true);
      } else {
        exports.changeFill(tab.icon, setup.inactiveFillColor);
        tab.label.color = setup.inactiveLabelColor;
        results.push(tab.view.visible = false);
      }
    }
    return results;
  };
  ref = setup.tabs;
  for (index = j = 0, len = ref.length; j < len; index = ++j) {
    tab = ref[index];
    if (tab.tab.type !== "tab") {
      error(tab.tab.id, 5);
    }
    tabBarBox.addSubLayer(tab.tab);
    exports.changeFill(tab.icon, setup.inactiveFillColor);
    tab.label.color = setup.inactiveLabelColor;
    tabBarBG.backgroundColor = setup.backgroundColor;
    if (index !== 0) {
      tab.tab.constraints = {
        leading: setup.tabs[index - 1].tab
      };
      exports.layout();
    }
    tab.tab.on(Events.TouchStart, function() {
      var tabIndex;
      tabIndex = this.x / exports.px(tabWidth);
      return setActive(tabIndex);
    });
  }
  tabBarBox.constraints = {
    align: "horizontal"
  };
  setActive(setup.start);
  exports.layout();
  return tabBar;
};


},{}],"myModule":[function(require,module,exports){
exports.myVar = "myVariable";

exports.myFunction = function() {
  return print("myFunction is running");
};

exports.myArray = [1, 2, 3];


},{}]},{},[])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvS2V2eW4vRHJvcGJveCAoUGVyc29uYWwpL0ZyYW1lciBQcm90b3R5cGVzL2ZyYW1lci1pb3Mta2l0L0RlbW8uZnJhbWVyL21vZHVsZXMvaU9TS2l0LmNvZmZlZSIsIi9Vc2Vycy9LZXZ5bi9Ecm9wYm94IChQZXJzb25hbCkvRnJhbWVyIFByb3RvdHlwZXMvZnJhbWVyLWlvcy1raXQvRGVtby5mcmFtZXIvbW9kdWxlcy9teU1vZHVsZS5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNFQSxJQUFBOztBQUFBLGFBQUEsR0FBZ0I7RUFFaEIsWUFBQSxFQUFlO0lBQUUsTUFBQSxFQUFRLE1BQU0sQ0FBQyxXQUFqQjtJQUE4QixLQUFBLEVBQU8sTUFBTSxDQUFDLFVBQTVDO0lBQXdELEtBQUEsRUFBTSxDQUE5RDtJQUFpRSxNQUFBLEVBQU8sS0FBeEU7SUFBK0UsUUFBQSxFQUFTLEtBQXhGO0dBRkM7RUFNaEIsNEJBQUEsRUFBOEI7SUFBRSxNQUFBLEVBQVEsSUFBVjtJQUFnQixLQUFBLEVBQU8sR0FBdkI7SUFBNEIsS0FBQSxFQUFPLENBQW5DO0lBQXNDLE1BQUEsRUFBTyxJQUE3QztJQUFtRCxRQUFBLEVBQVMsS0FBNUQ7R0FOZDtFQU9oQix3QkFBQSxFQUEwQjtJQUFFLE1BQUEsRUFBUSxJQUFWO0lBQWdCLEtBQUEsRUFBTyxHQUF2QjtJQUE0QixLQUFBLEVBQU8sQ0FBbkM7SUFBc0MsTUFBQSxFQUFPLElBQTdDO0lBQW1ELFFBQUEsRUFBUyxLQUE1RDtHQVBWO0VBUWhCLHNCQUFBLEVBQXdCO0lBQUUsTUFBQSxFQUFRLElBQVY7SUFBZ0IsS0FBQSxFQUFPLEdBQXZCO0lBQTRCLEtBQUEsRUFBTyxDQUFuQztJQUFzQyxNQUFBLEVBQU8sSUFBN0M7SUFBbUQsUUFBQSxFQUFTLEtBQTVEO0dBUlI7RUFXaEIsdUJB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QUMsVUFBUixDQUFtQixHQUFHLENBQUMsSUFBdkIsRUFBNkIsS0FBSyxDQUFDLGlCQUFuQztJQUNBLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBVixHQUFrQixLQUFLLENBQUM7SUFDeEIsUUFBUSxDQUFDLGVBQVQsR0FBMkIsS0FBSyxDQUFDO0lBRWpDLElBQUcsS0FBQSxLQUFTLENBQVo7TUFDQyxHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVIsR0FDQztRQUFBLE9BQUEsRUFBUSxLQUFLLENBQUMsSUFBSyxDQUFBLEtBQUEsR0FBUSxDQUFSLENBQVUsQ0FBQyxHQUE5Qjs7TUFDRCxPQUFPLENBQUMsTUFBUixDQUFBLEVBSEQ7O0lBS0EsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFSLENBQVcsTUFBTSxDQUFDLFVBQWxCLEVBQThCLFNBQUE7QUFDN0IsVUFBQTtNQUFBLFFBQUEsR0FBVyxJQUFDLENBQUMsQ0FBRixHQUFNLE9BQU8sQ0FBQyxFQUFSLENBQVcsUUFBWDthQUNqQixTQUFBLENBQVUsUUFBVjtJQUY2QixDQUE5QjtBQWhCRDtFQW1CQSxTQUFTLENBQUMsV0FBVixHQUNDO0lBQUEsS0FBQSxFQUFNLFlBQU47O0VBRUQsU0FBQSxDQUFVLEtBQUssQ0FBQyxLQUFoQjtFQUVBLE9BQU8sQ0FBQyxNQUFSLENBQUE7QUFDQSxTQUFPO0FBekVTOzs7O0FDbnVFakIsT0FBTyxDQUFDLEtBQVIsR0FBZ0I7O0FBRWhCLE9BQU8sQ0FBQyxVQUFSLEdBQXFCLFNBQUE7U0FDcEIsS0FBQSxDQUFNLHVCQUFOO0FBRG9COztBQUdyQixPQUFPLENBQUMsT0FBUixHQUFrQixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIjaU9TS2l0IE1vZHVsZVxuI0J5IEtldnluIEFybm90dCBAa3Z5bl9cbmZyYW1lckRldmljZXMgPSB7XG4jRnVsbHNjcmVlblxuXCJmdWxsc2NyZWVuXCIgOiB7IGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0LCB3aWR0aDogd2luZG93LmlubmVyV2lkdGgsXHRzY2FsZToxLCBtb2JpbGU6ZmFsc2UsIHBsYXRmb3JtOlwid2ViXCJ9XG5cbiNpUGhvbmVzXG4jIzVTXG5cImFwcGxlLWlwaG9uZS01cy1zcGFjZS1ncmF5XCI6IHsgaGVpZ2h0OiAxMTM2LCB3aWR0aDogNjQwLFx0c2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXCJhcHBsZS1pcGhvbmUtNXMtc2lsdmVyXCI6IHsgaGVpZ2h0OiAxMTM2LCB3aWR0aDogNjQwLFx0c2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXCJhcHBsZS1pcGhvbmUtNXMtZ29sZFwiOiB7IGhlaWdodDogMTEzNiwgd2lkdGg6IDY0MCxcdHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblxuIyM1Y1xuXCJhcHBsZS1pcGhvbmUtNWMtZ3JlZW5cIjogeyBoZWlnaHQ6IDExMzYsIHdpZHRoOiA2NDAsXHRzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cImFwcGxlLWlwaG9uZS01Yy1ibHVlXCI6IHsgaGVpZ2h0OiAxMTM2LCB3aWR0aDogNjQwLFx0c2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXCJhcHBsZS1pcGhvbmUtNWMtcmVkXCI6IHsgaGVpZ2h0OiAxMTM2LCB3aWR0aDogNjQwLFx0c2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXCJhcHBsZS1pcGhvbmUtNWMtd2hpdGVcIjogeyBoZWlnaHQ6IDExMzYsIHdpZHRoOiA2NDAsXHRzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cImFwcGxlLWlwaG9uZS01Yy15ZWxsb3dcIjogeyBoZWlnaHQ6IDExMzYsIHdpZHRoOiA2NDAsXHRzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cImFwcGxlLWlwaG9uZS01Yy1waW5rXCI6IHsgaGVpZ2h0OiAxMTM2LCB3aWR0aDogNjQwLFx0c2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuIyM2c1xuXCJhcHBsZS1pcGhvbmUtNnMtc3BhY2UtZ3JheVwiIDogeyBoZWlnaHQ6IDEzMzQsIHdpZHRoOiA3NTAsXHRzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cImFwcGxlLWlwaG9uZS02cy1zaWx2ZXJcIjogeyBoZWlnaHQ6IDEzMzQsIHdpZHRoOiA3NTAsXHRzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cImFwcGxlLWlwaG9uZS02cy1nb2xkXCI6IHsgaGVpZ2h0OiAxMzM0LCB3aWR0aDogNzUwLFx0c2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXCJhcHBsZS1pcGhvbmUtNnMtcm9zZS1nb2xkXCI6IHsgaGVpZ2h0OiAxMzM0LCB3aWR0aDogNzUwLFx0c2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuIzZzIHBsdXNcblwiYXBwbGUtaXBob25lLTZzLXBsdXMtZ29sZFwiOiB7IGhlaWdodDogMjIwOCwgd2lkdGg6IDEyNDIsXHRzY2FsZTogMywgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cImFwcGxlLWlwaG9uZS02cy1wbHVzLXNpbHZlclwiOiB7IGhlaWdodDogMjIwOCwgd2lkdGg6IDEyNDIsXHRzY2FsZTogMywgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cImFwcGxlLWlwaG9uZS02cy1wbHVzLXNwYWNlLWdyYXlcIjogeyBoZWlnaHQ6IDIyMDgsIHdpZHRoOiAxMjQyLFx0c2NhbGU6IDMsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXCJhcHBsZS1pcGhvbmUtNnMtcGx1cy1yb3NlLWdvbGRcIjogeyBoZWlnaHQ6IDIyMDgsIHdpZHRoOiAxMjQyLFx0c2NhbGU6IDMsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXG4jaVBhZHNcblxuI0FpclxuXG5cImFwcGxlLWlwYWQtYWlyLTItZ29sZFwiOiB7IGhlaWdodDogMjA0OCwgd2lkdGg6IDE1MzYsXHRzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cImFwcGxlLWlwYWQtYWlyLTItc2lsdmVyXCI6IHsgaGVpZ2h0OiAyMDQ4LCB3aWR0aDogMTUzNixcdHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblwiYXBwbGUtaXBhZC1haXItMi1zcGFjZS1ncmF5XCI6IHsgaGVpZ2h0OiAyMDQ4LCB3aWR0aDogMTUzNixcdHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblxuI21pbmlcblwiYXBwbGUtaXBhZC1taW5pLTQtZ29sZFwiOiB7IGhlaWdodDogMjA0OCwgd2lkdGg6IDE1MzYsXHRzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cImFwcGxlLWlwYWQtbWluaS00LXNwYWNlLWdyYXlcIjogeyBoZWlnaHQ6IDIwNDgsIHdpZHRoOiAxNTM2LFx0c2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXCJhcHBsZS1pcGFkLW1pbmktNC1zaWx2ZXJcIjp7IGhlaWdodDogMjA0OCwgd2lkdGg6IDE1MzYsIHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblxuI1Byb1xuXCJhcHBsZS1pcGFkLXByby1nb2xkXCI6IHsgaGVpZ2h0OiAyNzMyLCB3aWR0aDogMjA0OCwgc2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXCJhcHBsZS1pcGFkLXByby1zaWx2ZXJcIjogeyBoZWlnaHQ6IDI3MzIsIHdpZHRoOiAyMDQ4LCBzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cImFwcGxlLWlwYWQtcHJvLXNwYWNlLWdyYXlcIiA6IHsgaGVpZ2h0OiAyNzMyLCB3aWR0aDogMjA0OCwgc2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxufVxuZXhwb3J0cy5kZXZpY2UgPSAwXG5leHBvcnRzLm5hbWUgPSAwXG5leHBvcnRzLnNjYWxlID0gMFxuZXhwb3J0cy5oZWlnaHQgPSAwXG5leHBvcnRzLndpZHRoID0gMFxuZXhwb3J0cy5tb2JpbGUgPSAwXG5leHBvcnRzLnBsYXRmb3JtID0gMFxuZXhwb3J0cy5vcmllbnRhdGlvbiA9IDBcbnNjcmVlbiA9IHt9XG5cblxuZXhwb3J0cy5nZXREZXZpY2UgPSAtPlxuXHRkZXZpY2UgPSBGcmFtZXIuRGV2aWNlLmRldmljZVR5cGVcblx0aWYgaW5uZXJXaWR0aCA9PSAxMjQyXG5cdFx0ZGV2aWNlID0gXCJhcHBsZS1pcGhvbmUtNnMtcGx1cy1zaWx2ZXJcIlxuXHRleHBvcnRzLnNjYWxlID0gZnJhbWVyRGV2aWNlc1tkZXZpY2VdLnNjYWxlXG5cdGlmIGRldmljZSA9PSBcImZ1bGxzY3JlZW5cIlxuXHRcdGV4cG9ydHMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aFxuXHRcdGV4cG9ydHMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0XG5cdGVsc2Vcblx0XHRleHBvcnRzLndpZHRoID0gZnJhbWVyRGV2aWNlc1tkZXZpY2VdLndpZHRoXG5cdFx0ZXhwb3J0cy5oZWlnaHQgPSBmcmFtZXJEZXZpY2VzW2RldmljZV0uaGVpZ2h0XG5cdFx0aWYgd2luZG93LmlubmVyV2lkdGggPT0gMTI0MiB8fCB3aW5kb3cuaW5uZXJXaWR0aCA9PSAyMjA4XG5cdFx0XHRleHBvcnRzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGhcblx0XHRcdGV4cG9ydHMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0XG5cdFx0XHRleHBvcnRzLnNjYWxlID0gM1xuXHRleHBvcnRzLm1vYmlsZSA9IGZyYW1lckRldmljZXNbZGV2aWNlXS5tb2JpbGVcblx0ZXhwb3J0cy5wbGF0Zm9ybSA9IGZyYW1lckRldmljZXNbZGV2aWNlXS5wbGF0Zm9ybVxuXHRleHBvcnRzLm9yaWVudGF0aW9uID0gIEZyYW1lci5EZXZpY2Uub3JpZW50YXRpb25cblx0ZGV2aWNlID0gZGV2aWNlLnJlcGxhY2UoXCJhcHBsZS1cIiwgXCJcIilcblx0ZGV2aWNlID0gZGV2aWNlLnJlcGxhY2UoXCItZ29sZFwiLCBcIlwiKVxuXHRkZXZpY2UgPSBkZXZpY2UucmVwbGFjZShcIi1ncmVlblwiLCBcIlwiKVxuXHRkZXZpY2UgPSBkZXZpY2UucmVwbGFjZShcIi1ibHVlXCIsIFwiXCIpXG5cdGRldmljZSA9IGRldmljZS5yZXBsYWNlKFwiLXJlZFwiLCBcIlwiKVxuXHRkZXZpY2UgPSBkZXZpY2UucmVwbGFjZShcIi13aGl0ZVwiLCBcIlwiKVxuXHRkZXZpY2UgPSBkZXZpY2UucmVwbGFjZShcIi15ZWxsb3dcIiwgXCJcIilcblx0ZGV2aWNlID0gZGV2aWNlLnJlcGxhY2UoXCItcGlua1wiLCBcIlwiKVxuXHRkZXZpY2UgPSBkZXZpY2UucmVwbGFjZShcIi1zcGFjZS1ncmV5XCIsIFwiXCIpXG5cdGRldmljZSA9IGRldmljZS5yZXBsYWNlKFwiLXJvc2VcIiwgXCJcIilcblx0ZGV2aWNlID0gZGV2aWNlLnJlcGxhY2UoXCI1c1wiLCBcIjVcIilcblx0ZGV2aWNlID0gZGV2aWNlLnJlcGxhY2UoXCI1Y1wiLCBcIjVcIilcblx0ZXhwb3J0cy5kZXZpY2UgPSBkZXZpY2UucmVwbGFjZShcIi1zaWx2ZXJcIiwgXCJcIilcblx0c2NyZWVuID0ge1xuXHRcdHdpZHRoOmV4cG9ydHMud2lkdGhcblx0XHRoZWlnaHQ6ZXhwb3J0cy5oZWlnaHRcblx0fVxuXG5cbmV4cG9ydHMub3JpZW50ID0gKCkgLT5cblx0aWYgZXhwb3J0cy5vcmllbnRhdGlvbiA9PSAtOTBcblx0XHR0ZW1wSGVpZ2h0ID0gZXhwb3J0cy5oZWlnaHRcblx0XHR0ZW1wV2lkdGggPSBleHBvcnRzLndpZHRoXG5cdFx0ZXhwb3J0cy5oZWlnaHQgPSB0ZW1wV2lkdGhcblx0XHRleHBvcnRzLndpZHRoID0gdGVtcEhlaWdodFxuXG5leHBvcnRzLmdldERldmljZSgpXG5leHBvcnRzLm9yaWVudCgpXG5cblxuI0xpc3RlbiB0byB3aW5kb3cgcmVpemVcbm9uUmVzaXplID0gKCkgLT5cblx0ZXhwb3J0cy5nZXREZXZpY2UoKVxuXHRleHBvcnRzLmxheW91dCgpXG5cblxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBvblJlc2l6ZSlcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwib3JpZW50YXRpb25jaGFuZ2VcIiAsIG9uUmVzaXplKVxuXG5cblxuZGVmYXVsdHMgPSB7XG5cdGFsZXJ0OiB7XG5cdFx0dGV4dDp7XG5cdFx0XHR0aXRsZTogXCJUaXRsZVwiXG5cdFx0XHRtZXNzYWdlOlwiTWVzc2FnZVwiXG5cdFx0XHRhY3Rpb246XCJBY3Rpb25cIlxuXHRcdFx0c2Vjb25kYXJ5QWN0aW9uOiBcInNlY29uZGFyeUFjdGlvblwiXG5cdFx0fVxuXHR9XG5cdGJhbm5lcjoge1xuXHRcdHRleHQ6e1xuXHRcdFx0dGl0bGU6IFwiVGl0bGVcIlxuXHRcdFx0bWVzc2FnZTpcIk1lc3NhZ2VcIlxuXHRcdFx0YWN0aW9uOlwiQWN0aW9uXCJcblx0XHRcdHRpbWU6XCJub3dcIlxuXHRcdFx0aWNvbjp1bmRlZmluZWRcblx0XHR9XG5cdH1cblx0YnV0dG9uOntcblx0XHR0ZXh0OlwidGV4dFwiXG5cdFx0dHlwZTpcInRleHRcIlxuXHRcdHN0eWxlOlwibGlnaHRcIlxuXHRcdGJhY2tncm91bmRDb2xvcjpcIndoaXRlXCJcblx0XHRjb2xvcjpcIiMwMDdBRkZcIlxuXHRcdGZvbnRTaXplOjE3XG5cdFx0Zm9udFdlaWdodDpcInJlZ3VsYXJcIlxuXHRcdG5hbWU6XCJidXR0b25cIlxuXHRcdGJsdXI6dHJ1ZVxuXHRcdHN1cGVyTGF5ZXI6dW5kZWZpbmVkXG5cdH1cblx0ZnJhbWVyUHJvcHMgOltcIm5hbWVcIiwgXCJ3aWR0aFwiLCBcImhlaWdodFwiLCBcInN1cGVyTGF5ZXJcIiwgXCJvcGFjaXR5XCIsIFwiY29sb3JcIiwgXCJiYWNrZ3JvdW5kQ29sb3JcIiwgXCJ4XCIsIFwieVwiLCBcIm1pZFhcIiwgXCJtaWRZXCIsIFwibWF4WFwiLCBcIm1pblhcIiwgXCJ2aXNpYmxlXCIsIFwiY2xpcFwiLCBcInNjcm9sbEhvcml6b250YWxcIiwgXCJzY3JvbGxWZXJ0aWNhbFwiLCBcImlnbm9yZUV2ZW50c1wiLCBcInpcIiwgXCJzY2FsZVhcIiwgXCJzY2FsZVlcIiwgXCJzY2FsZVpcIiwgXCJzY2FsZVwiLCBcInNrZXdYXCIsIFwic2tld1lcIiwgXCJza2V3XCIsIFwib3JpZ2luWFwiLCBcIm9yaWdpbllcIiwgXCJvcmlnaW5aXCIsIFwicGVyc3BlY3RpdmVcIiwgXCJwZXJzcGVjdGl2ZU9yaWdpblhcIiwgXCJwZXJzcGVjdGl2ZU9yaWdpbllcIiwgXCJyb3RhdGlvblhcIiwgXCJyb3RhdGlvbllcIiwgXCJyb3RhdGlvblpcIiwgXCJyb3RhdGlvblwiLCBcImJsdXJcIiwgXCJicmlnaHRuZXNzXCIsIFwic2F0dXJhdGVcIiwgXCJodWVSb3RhdGVcIiwgXCJjb250cmFzdFwiLCBcImludmVydFwiLCBcImdyYXlzY2FsZVwiLCBcInNlcGlhXCIsIFwic2hhZG93WFwiLCBcInNoYWRvd1lcIiwgXCJzaGFkb3dCbHVyXCIsIFwic2hhZG93U3ByZWFkXCIsIFwic2hhZG93Q29sb3JcIiwgXCJib3JkZXJDb2xvclwiLCBcImJvcmRlcldpZHRoXCIsIFwiZm9yY2UyZFwiLCBcImZsYXRcIiwgXCJiYWNrZmFjZVZpc2libGVcIiwgXCJuYW1lXCIsIFwibWF0cml4XCIsIFwiX21hdHJpeDJkXCIsIFwidHJhbnNmb3JtTWF0cml4XCIsIFwibWF0cml4M2RcIiwgXCJib3JkZXJSYWRpdXNcIiwgXCJwb2ludFwiLCBcInNpemVcIiwgXCJmcmFtZVwiLCBcImh0bWxcIiwgXCJpbWFnZVwiLCBcInNjcm9sbFhcIiwgXCJzY3JvbGxZXCIsIFwiX2RvbUV2ZW50TWFuYWdlclwiLCBcIm1vdXNlV2hlZWxTcGVlZE11bHRpcGxpZXJcIiwgXCJ2ZWxvY2l0eVRocmVzaG9sZFwiLCBcImFuaW1hdGlvbk9wdGlvbnNcIiwgXCJjb25zdHJhaW5lZFwiXVxuXHRjc3NQcm9wcyA6IFtcImZvbnRGYW1pbHlcIiwgXCJmb250U2l6ZVwiLCBcInRleHRBbGlnblwiLCBcImZvbnRXZWlnaHRcIiwgXCJsaW5lSGVpZ2h0XCJdXG5cdGNvbnN0cmFpbnRQcm9wcyA6IFtcImhlaWdodFwiLCBcIndpZHRoXCJdXG5cdGNvbnN0cmFpbnRUeXBlczogW1widG9wXCIsIFwibGVhZGluZ1wiLCBcInRyYWlsaW5nXCIsIFwiYm90dG9tXCJdXG5cdGNvbnN0cmFpbnRBbGlnbnMgOiBbXCJob3Jpem9udGFsQ2VudGVyXCIsIFwidmVydGljYWxDZW50ZXJcIiwgXCJsZWFkaW5nRWRnZXNcIiwgXCJ0cmFpbGluZ0VkZ2VzXCIsIFwidG9wRWRnZXNcIiwgXCJib3R0b21FZGdlc1wiLCBcImFsaWduXCIsIFwidmVydGljYWxcIiwgXCJob3Jpem9udGFsXCJdXG5cdGNvbnN0cmFpbnRzOiB7XG5cdFx0dG9wOiB7XG5cdFx0XHRcInByb3BcIiA6IFwieVwiXG5cdFx0XHRcIm9ialByb3BcIiA6IFwibWF4WVwiXG5cdFx0XHRcIm9ialByb3AyXCIgOiBcImhlaWdodFwiXG5cdFx0XHRcIm9wcFwiIDogXCJib3R0b21cIlxuXHRcdH1cblx0XHRsZWFkaW5nOiB7XG5cdFx0XHRcInByb3BcIiA6IFwieFwiXG5cdFx0XHRcIm9ialByb3BcIiA6IFwibWF4WFwiXG5cdFx0XHRcIm9ialByb3AyXCIgOiBcIndpZHRoXCJcblx0XHRcdFwib3BwXCIgOiBcInRyYWlsaW5nXCJcblx0XHR9XG5cdFx0Ym90dG9tOiB7XG5cdFx0XHRcInByb3BcIiA6IFwibWF4WVwiXG5cdFx0XHRcIm9ialByb3BcIiA6IFwiaGVpZ2h0XCJcblx0XHRcdFwib2JqUHJvcDJcIiA6IFwieVwiXG5cdFx0XHRcIm9wcFwiIDogXCJ0b3BcIlxuXHRcdH1cblx0XHR0cmFpbGluZzoge1xuXHRcdFx0XCJwcm9wXCIgOiBcIm1heFhcIlxuXHRcdFx0XCJvYmpQcm9wXCIgOiBcIndpZHRoXCJcblx0XHRcdFwib2JqUHJvcDJcIiA6IFwieFwiXG5cdFx0XHRcIm9wcFwiIDogXCJsZWFkaW5nXCJcblx0XHR9XG5cdH1cblx0bG9ja1NjcmVlbjoge1xuXHRcdHRpbWU6XCJkZWZhdWx0XCJcblx0XHRkYXRlOlwiZGVmYXVsdFwiXG5cdFx0cGFzc2NvZGU6ZmFsc2Vcblx0XHRjbG9jazI0OmZhbHNlXG5cdFx0dHlwZTpcImxvY2tTY3JlZW5cIlxuXHR9XG5cdGtleWJvYXJkUHJvcHM6IFtcInJldHVybktleVwiXVxuXHRrZXlib2FyZDoge1xuXHRcdHJldHVybktleTpcImRlZmF1bHRcIlxuXHR9XG5cdG1lbnU6IHtcblx0XHRvcHRpb25zOltcIk9wdGlvblwiLCBcIk9wdGlvblwiLCBcIk9wdGlvblwiXVxuXHRcdGV4aXQ6XCJDYW5jZWxcIlxuXHRcdGFuaW1hdGVkOmZhbHNlXG5cdFx0ZGVzY3JpcHRpb246dW5kZWZpbmVkXG5cdH1cblx0bmF2QmFyOiB7XG5cdFx0dGl0bGU6XCJ0aXRsZVwiXG5cdFx0bGVmdEFjdGlvbjpcImxlZnRBY3Rpb25cIlxuXHRcdHJpZ2h0QWN0aW9uOlwicmlnaHRBY3Rpb25cIlxuXHR9XG5cdHN0YXR1c0Jhcjoge1xuXHRcdGNhcnJpZXI6XCJcIlxuXHRcdG5ldHdvcms6XCJMVEVcIlxuXHRcdGJhdHRlcnk6MTAwXG5cdFx0c2lnbmFsOjVcblx0XHRzdHlsZTpcImRhcmtcIlxuXHRcdGNsb2NrMjQ6ZmFsc2Vcblx0XHR0eXBlOlwic3RhdHVzQmFyXCJcblx0fVxuXHR0YWJCYXIgOiB7XG5cdFx0dGFiczogW11cblx0XHRzdGFydDowXG5cdFx0dHllcDpcInRhYkJhclwiXG5cdFx0YmFja2dyb3VuZENvbG9yOlwid2hpdGVcIlxuXHRcdGFjdGl2ZUxhYmVsQ29sb3I6XCIjMDA3NkZGXCJcblx0XHRhY3RpdmVGaWxsQ29sb3I6XCIjMDA3NkZGXCJcblx0XHRpbmFjdGl2ZUxhYmVsQ29sb3I6XCIjOTI5MjkyXCJcblx0XHRpbmFjdGl2ZUZpbGxDb2xvcjpcIiM5MjkyOTJcIlxuXHR9XG5cdHRhYiA6IHtcblx0XHRsYWJlbDogXCJsYWJlbFwiXG5cdFx0aWNvbjpcIjw/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyc/PlxuXHRcdFx0PHN2ZyB3aWR0aD0nMjVweCcgaGVpZ2h0PScyNXB4JyB2aWV3Qm94PScwIDAgMjUgMjUnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayc+XG5cdFx0XHQgICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjYuMSAoMjYzMTMpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdFx0ICAgIDx0aXRsZT4xPC90aXRsZT5cblx0XHRcdCAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHRcdCAgICA8ZGVmcz48L2RlZnM+XG5cdFx0XHQgICAgPGcgaWQ9J1BhZ2UtMScgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCcgZmlsbC1vcGFjaXR5PScxJz5cblx0XHRcdCAgICAgICAgPGcgaWQ9J0JvdHRvbS1CYXIvVGFiLUJhcicgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTI1LjAwMDAwMCwgLTcuMDAwMDAwKScgZmlsbD0nIzAwNzZGRic+XG5cdFx0XHQgICAgICAgICAgICA8ZyBpZD0nUGxhY2Vob2xkZXJzJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgyNS4wMDAwMDAsIDcuMDAwMDAwKSc+XG5cdFx0XHQgICAgICAgICAgICAgICAgPHJlY3QgaWQ9JzEnIHg9JzAnIHk9JzAnIHdpZHRoPScyNScgaGVpZ2h0PScyNScgcng9JzMnPjwvcmVjdD5cblx0XHRcdCAgICAgICAgICAgIDwvZz5cblx0XHRcdCAgICAgICAgPC9nPlxuXHRcdFx0ICAgIDwvZz5cblx0XHRcdDwvc3ZnPlwiXG5cdFx0YWN0aXZlOiB1bmRlZmluZWRcblx0XHR1bmFjdGl2ZTogdW5kZWZpbmVkXG5cdFx0dGFiQmFyOiB1bmRlZmluZWRcblx0XHR0eXBlOlwidGFiXCJcblx0fVxuXHR0ZXh0OiB7XG5cdFx0ZGVmYXVsdHM6IHtcblx0XHRcdHRleHQ6IFwiaU9TIFRleHQgTGF5ZXJcIlxuXHRcdFx0dHlwZTpcInRleHRcIlxuXHRcdFx0eDowXG5cdFx0XHR5OjBcblx0XHRcdHdpZHRoOi0xXG5cdFx0XHRoZWlnaHQ6LTFcblx0XHRcdHN1cGVyTGF5ZXI6dW5kZWZpbmVkXG5cdFx0XHRzdHlsZTpcImRlZmF1bHRcIlxuXHRcdFx0bGluZXM6MVxuXHRcdFx0dGV4dEFsaWduOlwibGVmdFwiXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiXG5cdFx0XHRjb2xvcjpcImJsYWNrXCJcblx0XHRcdGZvbnRTaXplOiAxN1xuXHRcdFx0Zm9udEZhbWlseTpcIi1hcHBsZS1zeXN0ZW0sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWZcIlxuXHRcdFx0Zm9udFdlaWdodDpcInJlZ3VsYXJcIlxuXHRcdFx0bGluZUhlaWdodDpcImF1dG9cIlxuXHRcdFx0bmFtZTpcInRleHQgbGF5ZXJcIlxuXHRcdFx0b3BhY2l0eToxXG5cdFx0XHR0ZXh0VHJhbnNmb3JtOlwibm9uZVwiXG5cdFx0XHR9IFxuXHR9XG59XG5cbnNldFByb3BzID0gKG9iamVjdCwgZGVzdCkgLT5cblx0a2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdClcblx0ZGVzdFtcInByb3BzXCJdID0ga2V5c1xuXG5cbnNldFByb3BzKGRlZmF1bHRzLnRleHQuZGVmYXVsdHMsIGRlZmF1bHRzLnRleHQpXG5zZXRQcm9wcyhkZWZhdWx0cy5hbGVydC50ZXh0LCBkZWZhdWx0cy5hbGVydClcbnNldFByb3BzKGRlZmF1bHRzLmJhbm5lci50ZXh0LCBkZWZhdWx0cy5iYW5uZXIpXG5zZXRQcm9wcyhkZWZhdWx0cy5sb2NrU2NyZWVuLCBkZWZhdWx0cy5sb2NrU2NyZWVuKVxuc2V0UHJvcHMoZGVmYXVsdHMuc3RhdHVzQmFyLCBkZWZhdWx0cy5zdGF0dXNCYXIpXG5zZXRQcm9wcyhkZWZhdWx0cy50YWIsIGRlZmF1bHRzLnRhYilcbnNldFByb3BzKGRlZmF1bHRzLnRhYkJhciwgZGVmYXVsdHMudGFiQmFyKVxuc2V0UHJvcHMoZGVmYXVsdHMubmF2QmFyLCBkZWZhdWx0cy5uYXZCYXIpXG5zZXRQcm9wcyhkZWZhdWx0cy5idXR0b24sIGRlZmF1bHRzLmJ1dHRvbilcbnNldFByb3BzKGRlZmF1bHRzLm1lbnUsIGRlZmF1bHRzLm1lbnUpXG5cbnNldHVwQ29tcG9uZW50ID0gKGNvbXBvbmVudCwgYXJyYXkpIC0+XG5cdGlmIGFycmF5ID09IHVuZGVmaW5lZFxuXHRcdGFycmF5ID0gW11cblx0b2JqID0ge31cblx0Zm9yIGkgaW4gZGVmYXVsdHNbY29tcG9uZW50XS5wcm9wc1xuXHRcdGlmIGFycmF5W2ldICE9IHVuZGVmaW5lZFxuXHRcdFx0b2JqW2ldID0gYXJyYXlbaV1cblx0XHRlbHNlXG5cdFx0XHRvYmpbaV0gPSBkZWZhdWx0c1tjb21wb25lbnRdW2ldXG5cdHJldHVybiBvYmpcblxuXG4jIyBDb252ZXJzaW9uc1xuXG4jUGl4ZWxzIHRvIFBvaW50c1xuZXhwb3J0cy5wdCA9IChweCkgLT5cblx0cHQgPSBweC9leHBvcnRzLnNjYWxlXG5cdHB0ID0gTWF0aC5yb3VuZChwdClcblx0cmV0dXJuIHB0XG5cbiNQb2ludHMgdG8gUGl4ZWxzXG5leHBvcnRzLnB4ID0gKHB0KSAtPlxuXHRweCA9IHB0ICogZXhwb3J0cy5zY2FsZVxuXHRweCA9IE1hdGgucm91bmQocHgpXG5cdHJldHVybiBweFxuXG5leHBvcnRzLnN2ZyA9IChzdmcpIC0+XG5cdCMgRmluZCBTdHJpbmdcblx0c3RhcnRJbmRleCA9IHN2Zy5zZWFyY2goXCI8c3ZnIHdpZHRoPVwiKSBcblx0ZW5kSW5kZXggPSBzdmcuc2VhcmNoKFwiIHZpZXdCb3hcIilcblx0c3RyaW5nID0gc3ZnLnNsaWNlKHN0YXJ0SW5kZXgsIGVuZEluZGV4KVxuXG5cdCNGaW5kIHdpZHRoXG5cdHdTdGFydEluZGV4ID0gc3RyaW5nLnNlYXJjaChcIj1cIikgKyAyXG5cdHdFbmRJbmRleCA9ICBzdHJpbmcuc2VhcmNoKFwicHhcIilcblx0d2lkdGggPSBzdHJpbmcuc2xpY2Uod1N0YXJ0SW5kZXgsIHdFbmRJbmRleClcblx0bmV3V2lkdGggPSBleHBvcnRzLnB4KHdpZHRoKVxuXG5cdCMgRmluZCBIZWlnaHRcblx0aGVpZ2h0U3RyaW5nID0gc3RyaW5nLnNsaWNlKHdFbmRJbmRleCArIDQsIHN0cmluZy5sZW5ndGgpXG5cdGhTdGFydEluZGV4ID0gaGVpZ2h0U3RyaW5nLnNlYXJjaChcIj1cIikrIDJcblx0aEVuZEluZGV4ID0gaGVpZ2h0U3RyaW5nLnNlYXJjaChcInB4XCIpIFxuXHRoZWlnaHQgPSBoZWlnaHRTdHJpbmcuc2xpY2UoaFN0YXJ0SW5kZXgsIGhFbmRJbmRleClcblx0bmV3SGVpZ2h0ID0gZXhwb3J0cy5weChoZWlnaHQpXG5cblx0I0NyZWF0ZSBuZXcgc3RyaW5nXG5cdG5ld1N0cmluZyA9IHN0cmluZy5yZXBsYWNlKHdpZHRoLCBuZXdXaWR0aClcblx0bmV3U3RyaW5nID0gbmV3U3RyaW5nLnJlcGxhY2UoaGVpZ2h0LCBuZXdIZWlnaHQpXG5cblx0I1JlcGxhY2Ugc3RyaW5nc1xuXHRzdmcgPSBzdmcucmVwbGFjZShzdHJpbmcsIG5ld1N0cmluZylcblxuXHRyZXR1cm4ge1xuXHRcdHN2Zzpzdmdcblx0XHR3aWR0aDpuZXdXaWR0aFxuXHRcdGhlaWdodDpuZXdIZWlnaHRcblx0fVxuXG5leHBvcnRzLmNoYW5nZUZpbGwgPSAobGF5ZXIsIGNvbG9yKSAtPlxuXHRzd2l0Y2ggY29sb3Jcblx0XHR3aGVuIFwicmVkXCJcblx0XHRcdGNvbG9yID0gXCIjRkUzODI0XCJcblx0XHR3aGVuIFwiYmx1ZVwiXG5cdFx0XHRjb2xvciA9IFwiIzAwNzZGRlwiXG5cdFx0d2hlbiBcInBpbmtcIlxuXHRcdFx0Y29sb3IgPSBcIiNGRTI4NTFcIlxuXHRcdHdoZW4gXCJncmV5XCJcblx0XHRcdGNvbG9yID0gXCIjOTI5MjkyXCJcblx0XHR3aGVuIFwiZ3JheVwiXG5cdFx0XHRjb2xvciA9IFwiIzkyOTI5MlwiXG5cdFx0d2hlbiBcImJsYWNrXCJcblx0XHRcdGNvbG9yID0gXCIjMDMwMzAzXCJcblx0XHR3aGVuIFwid2hpdGVcIlxuXHRcdFx0Y29sb3IgPSBcIiNFRkVGRjRcIlxuXHRcdHdoZW4gXCJvcmFuZ2VcIlxuXHRcdFx0Y29sb3IgPSBcIiNGRjk2MDBcIlxuXHRcdHdoZW4gXCJncmVlblwiXG5cdFx0XHRjb2xvciA9IFwiIzQ0REI1RVwiXG5cdFx0d2hlbiBcImxpZ2h0LWJsdWVcIlxuXHRcdFx0Y29sb3IgPSBcIiM1NEM3RkNcIlxuXHRcdHdoZW4gXCJ5ZWxsb3dcIlxuXHRcdFx0Y29sb3IgPSBcIiNGRkNEMDBcIlxuXG5cblx0c3RhcnRJbmRleCA9IGxheWVyLmh0bWwuc2VhcmNoKFwiZmlsbD1cXFwiI1wiKVxuXHRmaWxsU3RyaW5nID0gbGF5ZXIuaHRtbC5zbGljZShzdGFydEluZGV4LCBsYXllci5odG1sLmxlbmd0aClcblx0ZW5kSW5kZXggPSBmaWxsU3RyaW5nLnNlYXJjaChcIlxcXCI+XCIpXG5cdHN0cmluZyA9IGZpbGxTdHJpbmcuc2xpY2UoMCwgZW5kSW5kZXgpXG5cdG5ld1N0cmluZyA9IFwiZmlsbD1cXFwiXCIgKyBjb2xvclxuXHRsYXllci5odG1sID0gbGF5ZXIuaHRtbC5yZXBsYWNlKHN0cmluZywgbmV3U3RyaW5nKVxuXG4jIyBFcnJvcnNcblxuZXJyb3IgPSAoY29udGV4dCwgY29kZSkgLT5cblx0aWYgY29kZSA9PSAxIFxuXHRcdHByaW50IFwiRXJyb3IgSW52YWxpZCBSZWxhdGlvbnNoaXAg4oCTIExheWVyIGlkOiN7Y29udGV4dC5pZH0gaGFzIGEgcmVsYXRpb25zaGlwIHdpdGggYW5vdGhlciBsYXllciBub3QgaW4gdGhlIHNhbWUgc3VwZXJMYXllci5cIlxuXHRpZiBjb2RlID09IDJcblx0XHRwcmludCBcIkVycm9yICN7Y29udGV4dH0gcmVxdWlyZXMgYSBsYXllclwiXG5cdGlmIGNvZGUgPT0gM1xuXHRcdHByaW50IFwiRXJyb3IgI3tjb250ZXh0fSBjYW5ub3QgcmVmZXIgdG8gaXRzZWxmXCJcblx0aWYgY29kZSA9PSA0XG5cdFx0cHJpbnQgXCJFcnJvciAje2NvbnRleHR9IGlzIG5vdCBhIHZhbGlkIHdlaWdodC4gUGxlYXNlIHVzZSAxMDAsIDIwMCwgMzAwLi4uIG9yIFRoaW4sIExpZ2h0LCBSZWd1bGFyLi4uXCJcblx0aWYgY29kZSA9PSA1XG5cdFx0cHJpbnQgXCJFcnJvciBMYXllciBpZDoje2NvbnRleHR9IGlzIG5vdCBhIHZhbGlkIFRhYiBvYmplY3QuIFBsZWFzZSBjcmVhdGUgYSBUYWIgdXNpbmcgbmV3IG1vZHVsZS5UYWIuXCJcblxuIyMgQXV0b0xheW91dFxuXG4jY2hlY2tzIGlmIHR3byBsYXllcnMgaGF2ZSB0aGUgc2FtZSBwYXJlbnRcbmV4cG9ydHMuc2FtZVBhcmVudCA9IChsYXllcjEsIGxheWVyMikgLT5cblx0cGFyZW50T25lID0gbGF5ZXIxLnN1cGVyTGF5ZXJcblx0cGFyZW50VHdvID0gbGF5ZXIyLnN1cGVyTGF5ZXJcblx0aWYgcGFyZW50T25lID09IHBhcmVudFR3b1xuXHRcdHJldHVybiB0cnVlXG5cdGVsc2UgXG5cdFx0cmV0dXJuIGZhbHNlXG5cbmV4cG9ydHMuZ2V0VGltZSA9IC0+XG5cdGRheXNPZlRoZVdlZWsgPSBbXCJTdW5kYXlcIiwgXCJNb25kYXlcIiwgXCJUdWVzZGF5XCIsIFwiV2VkbmVzZGF5XCIsIFwiVGh1cnNkYXlcIiwgXCJGcmlkYXlcIiwgXCJTYXR1cmRheVwiXVxuXHRtb250aHNPZlRoZVllYXIgPSBbXCJKYW51YXJ5XCIsIFwiRmVicnVhcnlcIiwgXCJNYXJjaFwiLCBcIkFwcmlsXCIsIFwiTWF5XCIsIFwiSnVuZVwiLCBcIkp1bHlcIiwgXCJBdWd1c3RcIiwgXCJTZXB0ZW1iZXJcIiwgXCJPY3RvYmVyXCIsIFwiTm92ZW1iZXJcIiwgXCJEZWNlbWJlclwiXVxuXHRkYXRlT2JqID0gbmV3IERhdGUoKVxuXHRtb250aCA9IG1vbnRoc09mVGhlWWVhcltkYXRlT2JqLmdldE1vbnRoKCldXG5cdGRhdGUgPSBkYXRlT2JqLmdldERhdGUoKVxuXHRkYXkgPSBkYXlzT2ZUaGVXZWVrW2RhdGVPYmouZ2V0RGF5KCldXG5cdGhvdXJzID0gZGF0ZU9iai5nZXRIb3VycygpXG5cdG1pbnMgPSBkYXRlT2JqLmdldE1pbnV0ZXMoKVxuXHRzZWNzID0gZGF0ZU9iai5nZXRTZWNvbmRzKClcblx0cmV0dXJuIHtcblx0XHRtb250aDptb250aFxuXHRcdGRheTpkYXlcblx0XHRkYXRlOmRhdGVcblx0XHRob3Vyczpob3Vyc1xuXHRcdG1pbnM6bWluc1xuXHRcdHNlY3M6c2Vjc1xuXHR9XG5cbiNSZWZyZXNoZXMgTGF5ZXIgb3IgQWxsIExheWVyc1xuZXhwb3J0cy5sYXlvdXQgPSAobGF5ZXIpIC0+XG5cdGlmIGxheWVyID09IHVuZGVmaW5lZFxuXHRcdEAuYXJyYXkgPSBGcmFtZXIuQ3VycmVudENvbnRleHQubGF5ZXJzXG5cdGVsc2UgXG5cdFx0QC5hcnJheSA9IFtsYXllcl1cblx0Zm9yIGxheWVyIGluIEAuYXJyYXlcblx0XHRpZiBsYXllci5jb25zdHJhaW50cyAhPSB1bmRlZmluZWRcblx0XHRcdGZvciBwIGluIGRlZmF1bHRzLmNvbnN0cmFpbnRQcm9wc1xuXHRcdFx0XHRsYXlvdXRTaXplKGxheWVyLCBwKVxuXHRcdFx0Zm9yIGMgaW4gZGVmYXVsdHMuY29uc3RyYWludFR5cGVzXG5cdFx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzW2NdICE9IHVuZGVmaW5lZFxuXHRcdFx0XHRcdGxheW91dENoYW5nZShsYXllciwgYylcblx0XHRcdGZvciBhIGluIGRlZmF1bHRzLmNvbnN0cmFpbnRBbGlnbnNcblx0XHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHNbYV1cblx0XHRcdFx0XHRsYXlvdXRBbGlnbihsYXllciwgYSlcblxuI0FsaWduIGNvbnN0cmFpbnRzXG5sYXlvdXRBbGlnbiA9IChsYXllciwgdHlwZSkgLT5cblx0IyBwcmludCBsYXllci5uYW1lICsgXCI6IGNvbnN0cmFpbnRzIHdpZHRoIFwiICsgbGF5ZXIuY29uc3RyYWludHMud2lkdGhcblx0ZGVjbGFyZWRDb25zdHJhaW50ID0gbGF5ZXIuY29uc3RyYWludHNbdHlwZV1cblx0aWYgbGF5ZXIuc3VwZXJMYXllclxuXHRcdEBzdXBlckxheWVyID0gbGF5ZXIuc3VwZXJMYXllclxuXHRlbHNlXG5cdFx0QHN1cGVyTGF5ZXIgPSBzY3JlZW5cblx0aWYgZGVjbGFyZWRDb25zdHJhaW50ID09IHBhcnNlSW50KGRlY2xhcmVkQ29uc3RyYWludCwgMTApXG5cdFx0ZXJyb3IodHlwZSwgMilcblx0aWYgZGVjbGFyZWRDb25zdHJhaW50ID09IGxheWVyXG5cdFx0ZXJyb3IodHlwZSwgMylcblx0aWYgdHlwZW9mIGRlY2xhcmVkQ29uc3RyYWludCA9PSBcIm9iamVjdFwiXG5cdFx0Zm9yIGkgaW4gZGVjbGFyZWRDb25zdHJhaW50XG5cdFx0XHRpZiB0eXBlb2YgaSA9PSBcInN0cmluZ1wiXG5cdFx0XHRcdEB0eXBlID0gaVxuXHRcdFx0aWYgdHlwZW9mIGkgPT0gXCJvYmplY3RcIlxuXHRcdFx0XHRAbGF5ZXIgPSBpIFxuXHRcdGlmIEB0eXBlID09IFwiaG9yaXpvbnRhbENlbnRlclwiIHx8IEB0eXBlID09IFwiaG9yaXpvbnRhbFwiXG5cdFx0XHRkZWx0YU1vdmUgPSAoQGxheWVyLndpZHRoIC0gbGF5ZXIud2lkdGgpIC8gMlxuXHRcdFx0bGF5ZXIueCA9IEBsYXllci54ICsgZGVsdGFNb3ZlXG5cdFx0XHRsYXllci5jb25zdHJhaW50c1tcImxlYWRpbmdcIl0gPSBleHBvcnRzLnB0KGxheWVyLngpXG5cdFx0aWYgQHR5cGUgPT0gXCJ2ZXJ0aWNhbENlbnRlclwiIHx8IEB0eXBlID09IFwidmVydGljYWxcIiAgXG5cdFx0XHRkZWx0YU1vdmUgPSAoQGxheWVyLmhlaWdodCAtIGxheWVyLmhlaWdodCkgLyAyXG5cdFx0XHRsYXllci55ID0gQGxheWVyLnkgKyBkZWx0YU1vdmVcblx0XHRcdGxheWVyLmNvbnN0cmFpbnRzW1widG9wXCJdID0gZXhwb3J0cy5wdChsYXllci55KVxuXHRcdGlmIEB0eXBlID09IFwibGVhZGluZ0VkZ2VzXCIgfHwgQHR5cGUgPT0gXCJsZWFkaW5nXCJcblx0XHRcdGxheWVyLnggPSBAbGF5ZXIueFxuXHRcdFx0bGF5ZXIuY29uc3RyYWludHNbXCJsZWFkaW5nXCJdID0gZXhwb3J0cy5wdChsYXllci54KVxuXHRcdGlmIEB0eXBlID09IFwidHJhaWxpbmdFZGdlc1wiIHx8IEB0eXBlID09IFwidHJhaWxpbmdcIlxuXHRcdFx0bGF5ZXIubWF4WCA9IEBsYXllci5tYXhYXG5cdFx0XHRsYXllci5jb25zdHJhaW50c1tcInRyYWlsaW5nXCJdID0gZXhwb3J0cy5wdChAc3VwZXJMYXllci53aWR0aCAtIGxheWVyLm1heFgpXG5cdFx0aWYgQHR5cGUgPT0gXCJ0b3BFZGdlc1wiIHx8IEB0eXBlID09IFwidG9wXCJcblx0XHRcdGxheWVyLnkgPSBAbGF5ZXIueVxuXHRcdFx0bGF5ZXIuY29uc3RyYWludHNbXCJ0b3BcIl0gPSBleHBvcnRzLnB0KGxheWVyLnkpXG5cdFx0aWYgQHR5cGUgPT0gXCJib3R0b21FZGdlc1wiIHx8IEB0eXBlID09IFwiYm90dG9tXCJcblx0XHRcdGxheWVyLm1heFkgPSBAbGF5ZXIubWF4WVxuXHRcdFx0bGF5ZXIuY29uc3RyYWludHNbXCJib3R0b21cIl0gPSBleHBvcnRzLnB0KEBzdXBlckxheWVyLmhlaWdodCAtIGxheWVyLm1heFkpXG5cdGlmIHR5cGUgPT0gXCJob3Jpem9udGFsQ2VudGVyXCIgfHwgdHlwZSA9PSBcImhvcml6b250YWxcIlxuXHRcdGRlbHRhTW92ZSA9IChkZWNsYXJlZENvbnN0cmFpbnQud2lkdGggLSBsYXllci53aWR0aCkgLyAyXG5cdFx0bGF5ZXIueCA9IGRlY2xhcmVkQ29uc3RyYWludC54ICsgZGVsdGFNb3ZlXG5cdGlmIHR5cGUgPT0gXCJ2ZXJ0aWNhbENlbnRlclwiIHx8IHR5cGUgPT0gXCJ2ZXJ0aWNhbFwiICBcblx0XHRkZWx0YU1vdmUgPSAoZGVjbGFyZWRDb25zdHJhaW50LmhlaWdodCAtIGxheWVyLmhlaWdodCkgLyAyXG5cdFx0bGF5ZXIueSA9IGRlY2xhcmVkQ29uc3RyYWludC55ICsgZGVsdGFNb3ZlXG5cdGlmIHR5cGUgPT0gXCJsZWFkaW5nRWRnZXNcIiBcblx0XHRsYXllci54ID0gZGVjbGFyZWRDb25zdHJhaW50Lnhcblx0XHRsYXllci5jb25zdHJhaW50c1tcImxlYWRpbmdcIl0gPSBleHBvcnRzLnB0KGRlY2xhcmVkQ29uc3RyYWludC54KVxuXHRpZiB0eXBlID09IFwidHJhaWxpbmdFZGdlc1wiXG5cdFx0bGF5ZXIubWF4WCA9IGRlY2xhcmVkQ29uc3RyYWludC5tYXhYXG5cdFx0bGF5ZXIuY29uc3RyYWludHNbXCJ0cmFpbGluZ1wiXSA9IGV4cG9ydHMucHQoQHN1cGVyTGF5ZXIuaGVpZ2h0IC0gbGF5ZXIubWF4WClcblx0aWYgdHlwZSA9PSBcInRvcEVkZ2VzXCJcblx0XHRsYXllci55ID0gZGVjbGFyZWRDb25zdHJhaW50Lnlcblx0XHRsYXllci5jb25zdHJhaW50c1tcInRvcFwiXSA9IGV4cG9ydHMucHQobGF5ZXIueSlcblx0aWYgdHlwZSA9PSBcImJvdHRvbUVkZ2VzXCJcblx0XHRsYXllci5tYXhZID0gZGVjbGFyZWRDb25zdHJhaW50Lm1heFlcblx0XHRsYXllci5jb25zdHJhaW50c1tcImJvdHRvbVwiXSA9IGV4cG9ydHMucHQoQHN1cGVyTGF5ZXIuaGVpZ2h0IC0gbGF5ZXIubWF4WSlcblx0aWYgdHlwZSA9PSBcImFsaWduXCJcblx0XHRpZiBkZWNsYXJlZENvbnN0cmFpbnQgPT0gXCJob3Jpem9udGFsXCJcblx0XHRcdGxheWVyLmNlbnRlclgoKVxuXHRcdGlmIGRlY2xhcmVkQ29uc3RyYWludCA9PSBcInZlcnRpY2FsXCJcblx0XHRcdGxheWVyLmNlbnRlclkoKVxuXHRcdGlmIGRlY2xhcmVkQ29uc3RyYWludCA9PSBcImNlbnRlclwiXG5cdFx0XHRsYXllci5jZW50ZXIoKVxuXHRcdGlmIGRlY2xhcmVkQ29uc3RyYWludCA9PSBcInZlcnRpY2FsXCJcblx0XHRcdGxheWVyLmNlbnRlclkoKVxuXG5cbiNTaXplIENvbnN0cmFpbnRzXG5sYXlvdXRTaXplID0gKGxheWVyLCB0eXBlKSAtPlxuXHRpZiBsYXllci5jb25zdHJhaW50c1t0eXBlXVxuXHRcdGxheWVyW3R5cGVdID0gZXhwb3J0cy5weChsYXllci5jb25zdHJhaW50c1t0eXBlXSlcblx0XHRpZiBsYXllci50eXBlID09IFwidGV4dFwiXG5cdFx0XHR0ZXh0RnJhbWUgPSB0ZXh0QXV0b1NpemUobGF5ZXIpXG5cdFx0XHRsYXllci53aWR0aCA9IHRleHRGcmFtZS53aWR0aFxuXHRcdFx0bGF5ZXIuaGVpZ2h0ID0gdGV4dEZyYW1lLmhlaWdodFxuXG5cbiNNb3ZlICYgUmVzaXplcyBMYXllcnNcbmxheW91dENoYW5nZSA9IChsYXllciwgdHlwZSkgLT5cblx0aWYgbGF5ZXIuY29uc3RyYWludHNbdHlwZV0gIT0gdW5kZWZpbmVkIFxuXHRcdHByb3AgPSBkZWZhdWx0cy5jb25zdHJhaW50c1t0eXBlXS5wcm9wXG5cdFx0b2JqUHJvcCA9IGRlZmF1bHRzLmNvbnN0cmFpbnRzW3R5cGVdLm9ialByb3Bcblx0XHRvcHAgPSBkZWZhdWx0cy5jb25zdHJhaW50c1t0eXBlXS5vcHBcblx0XHRzdXBlclRyYWl0ID0gZGVmYXVsdHMuY29uc3RyYWludHNbdHlwZV0ub2JqUHJvcFxuXG5cdFx0aWYgb2JqUHJvcCAhPSBcIndpZHRoXCIgJiYgb2JqUHJvcCAhPSBcImhlaWdodFwiXG5cdFx0XHRzdXBlclRyYWl0ID0gZGVmYXVsdHMuY29uc3RyYWludHNbdHlwZV0ub2JqUHJvcDJcblxuXHRcdGlmIGxheWVyLnN1cGVyTGF5ZXIgIT0gbnVsbFxuXHRcdFx0I0hhcyBhIHN1cGVyTGF5ZXJcblx0XHRcdEBbc3VwZXJUcmFpdF0gPSBsYXllci5zdXBlckxheWVyW3N1cGVyVHJhaXRdXG5cdFx0ZWxzZVxuXHRcdFx0I0RvZXMgbm90IGhhdmUgYSBzdXBlckxheWVyXG5cdFx0XHRAW3N1cGVyVHJhaXRdID0gZXhwb3J0c1tzdXBlclRyYWl0XVxuXHRcdGlmIHR5cGUgPT0gXCJ0b3BcIiB8fCB0eXBlID09IFwibGVhZGluZ1wiXG5cdFx0XHQjIEhhbmRsZSBUb3AgJiBMZWFkaW5nXG5cdFx0XHRpZiBsYXllci5jb25zdHJhaW50c1t0eXBlXSA9PSBwYXJzZUludChsYXllci5jb25zdHJhaW50c1t0eXBlXSwgMTApXG5cdFx0XHRcdGxheWVyW3Byb3BdID0gbGF5ZXIuY29uc3RyYWludHNbdHlwZV0gKiBleHBvcnRzLnNjYWxlXG5cdFx0XHRlbHNlIFxuXHRcdFx0XHRpZiBsYXllci5jb25zdHJhaW50c1t0eXBlXS5sZW5ndGggPT0gdW5kZWZpbmVkXG5cdFx0XHRcdFx0bGF5ZXJbcHJvcF0gPSBsYXllci5jb25zdHJhaW50c1t0eXBlXVtvYmpQcm9wXVxuXHRcdFx0XHRpZiBsYXllci5jb25zdHJhaW50c1t0eXBlXS5sZW5ndGggPT0gMVxuXHRcdFx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzW3R5cGVdWzBdID09IHBhcnNlSW50KGxheWVyLmNvbnN0cmFpbnRzW3R5cGVdWzBdLCAxMClcblx0XHRcdFx0XHRcdGxheWVyW3Byb3BdID0gbGF5ZXIuY29uc3RyYWludHNbdHlwZV1bMF0gKiBleHBvcnRzLnNjYWxlXG5cdFx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdFx0bGF5ZXJbcHJvcF0gPSBsYXllci5jb25zdHJhaW50c1t0eXBlXVswXVtvYmpQcm9wXVxuXHRcdFx0XHRpZiBsYXllci5jb25zdHJhaW50c1t0eXBlXS5sZW5ndGggPiAxIFxuXHRcdFx0XHRcdGZvciBvYmplY3QgaW4gbGF5ZXIuY29uc3RyYWludHNbdHlwZV1cblx0XHRcdFx0XHRcdGlmIG9iamVjdCA9PSBwYXJzZUludChvYmplY3QsIDEwKVxuXHRcdFx0XHRcdFx0XHRALm9iakludCA9IG9iamVjdFxuXHRcdFx0XHRcdFx0ZWxzZSBcblx0XHRcdFx0XHRcdFx0QC5vYmpMYXllciA9IG9iamVjdFxuXHRcdFx0XHRcdGxheWVyW3Byb3BdID0gKEAub2JqSW50ICogZXhwb3J0cy5zY2FsZSkgKyBALm9iakxheWVyW29ialByb3BdXG5cdFx0XHRpZiBsYXllci5jb25zdHJhaW50c1tvcHBdICE9IHVuZGVmaW5lZFxuXHRcdFx0XHR0cmFpdCA9IGRlZmF1bHRzLmNvbnN0cmFpbnRzW29wcF1bXCJvYmpQcm9wXCJdXG5cdFx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzW29wcF0gPT0gcGFyc2VJbnQobGF5ZXIuY29uc3RyYWludHNbb3BwXSwgMTApXG5cdFx0XHRcdFx0bGF5ZXJbdHJhaXRdID0gQFtzdXBlclRyYWl0XSAtIChsYXllcltwcm9wXSArIChleHBvcnRzLnNjYWxlICogbGF5ZXIuY29uc3RyYWludHNbb3BwXSkpXG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRpZiBsYXllci5jb25zdHJhaW50c1tvcHBdLmxlbmd0aCA9PSB1bmRlZmluZWRcblx0XHRcdFx0XHRcdGxheWVyW3RyYWl0XSA9IGxheWVyW3Byb3BdIC0gbGF5ZXIuY29uc3RyYWludHNbb3BwXVtwcm9wXVxuXHRcdFx0XHRcdFx0aWYgbGF5ZXJbdHJhaXRdIDwgMFxuXHRcdFx0XHRcdFx0XHRsYXllclt0cmFpdF0gPSBsYXllclt0cmFpdF0gKiAtMVxuXHRcdGVsc2Vcblx0XHRcdCMjIEhhbmRsZSBCb3R0b20gJiBUcmFpbGluZ1xuXHRcdFx0b2JqUHJvcDIgPSBkZWZhdWx0cy5jb25zdHJhaW50c1t0eXBlXS5vYmpQcm9wMlxuXHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHNbb3BwXSA9PSB1bmRlZmluZWRcblx0XHRcdFx0IyMgTm8gb3Bwb3NpdGVcblx0XHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHNbdHlwZV0gPT0gcGFyc2VJbnQobGF5ZXIuY29uc3RyYWludHNbdHlwZV0sIDEwKVxuXHRcdFx0XHRcdCMjIE9ubHkgSW50ZWdlclxuXHRcdFx0XHRcdGxheWVyW3Byb3BdID0gQFtzdXBlclRyYWl0XSAtIChsYXllci5jb25zdHJhaW50c1t0eXBlXSAqIGV4cG9ydHMuc2NhbGUpXG5cdFx0XHRcdGVsc2UgXG5cdFx0XHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHNbdHlwZV0ubGVuZ3RoID09IHVuZGVmaW5lZFxuXHRcdFx0XHRcdFx0I0VudGVyZWQgTGF5ZXJcblx0XHRcdFx0XHRcdGlmIGV4cG9ydHMuc2FtZVBhcmVudChsYXllciwgbGF5ZXIuY29uc3RyYWludHNbdHlwZV0pXG5cdFx0XHRcdFx0XHRcdGxheWVyW3Byb3BdID0gbGF5ZXIuY29uc3RyYWludHNbdHlwZV1bb2JqUHJvcDJdXG5cdFx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHRcdGVycm9yKGxheWVyLCAxKVxuXHRcdFx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzW3R5cGVdLmxlbmd0aCA9PSAxXG5cdFx0XHRcdFx0XHQjQXJyYXkgb2YgT25lXG5cdFx0XHRcdFx0XHRpZiBsYXllci5jb25zdHJhaW50c1t0eXBlXVswXSA9PSBwYXJzZUludChsYXllci5jb25zdHJhaW50c1t0eXBlXVswXSwgMTApXG5cdFx0XHRcdFx0XHRcdCNJbnRcblx0XHRcdFx0XHRcdFx0bGF5ZXJbcHJvcF0gPSBAW29ialByb3BdIC0gKGxheWVyLmNvbnN0cmFpbnRzW3R5cGVdWzBdICogZXhwb3J0cy5zY2FsZSlcblx0XHRcdFx0XHRcdGVsc2UgXG5cdFx0XHRcdFx0XHRcdCNPYmplY3Rcblx0XHRcdFx0XHRcdFx0aWYgZXhwb3J0cy5zYW1lUGFyZW50KGxheWVyLCBsYXllci5jb25zdHJhaW50c1t0eXBlXVswXSlcblx0XHRcdFx0XHRcdFx0XHRsYXllcltwcm9wXSA9IGxheWVyLmNvbnN0cmFpbnRzW3R5cGVdWzBdW29ialByb3AyXVxuXHRcdFx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IobGF5ZXIsIDEpXG5cdFx0XHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHNbdHlwZV0ubGVuZ3RoID4gMVx0XG5cdFx0XHRcdFx0XHQjUmVsYXRpb25zaGlwIEFycmF5XG5cdFx0XHRcdFx0XHRmb3Igb2JqZWN0IGluIGxheWVyLmNvbnN0cmFpbnRzW3R5cGVdXG5cdFx0XHRcdFx0XHRcdGlmIG9iamVjdCA9PSBwYXJzZUludChvYmplY3QsIDEwKVxuXHRcdFx0XHRcdFx0XHRcdEAub2JqSW50ID0gb2JqZWN0XG5cdFx0XHRcdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRcdFx0XHRALm9iakxheWVyID0gb2JqZWN0XG5cdFx0XHRcdFx0XHRcdGxheWVyW3Byb3BdID0gQC5vYmpMYXllcltvYmpQcm9wMl0gLSBleHBvcnRzLnNjYWxlICogQC5vYmpJbnRcblxuXG4jVGV4dCBMYXllcnNcbmV4cG9ydHMuc3R5bGVzID0ge31cblxuIyMgQ3VzdG9tIFN0eWxlc1xuXG5leHBvcnRzLmFkZFN0eWxlID0gKGFycmF5KSAtPlxuXHRrZXkgPSBPYmplY3Qua2V5cyhhcnJheSlbMF1cblx0ZXhwb3J0cy5zdHlsZXNba2V5XSA9IGFycmF5W2tleV1cblxuZXhwb3J0cy5hcHBseSA9IChsYXllciwgc3R5bGUpIC0+XG5cdHN0eWxlID0gZXhwb3J0cy5zdHlsZXNbc3R5bGVdXG5cdHByb3BzID0gT2JqZWN0LmtleXMoc3R5bGUpXG5cdGZyYW1lclByb3BzID0gW1wibmFtZVwiLCBcIndpZHRoXCIsIFwiaGVpZ2h0XCIsIFwic3VwZXJMYXllclwiLCBcIm9wYWNpdHlcIiwgXCJjb2xvclwiLCBcImJhY2tncm91bmRDb2xvclwiLCBcInhcIiwgXCJ5XCIsIFwibWlkWFwiLCBcIm1pZFlcIiwgXCJtYXhYXCIsIFwibWluWFwiLCBcInZpc2libGVcIiwgXCJjbGlwXCIsIFwic2Nyb2xsSG9yaXpvbnRhbFwiLCBcInNjcm9sbFZlcnRpY2FsXCIsIFwiaWdub3JlRXZlbnRzXCIsIFwielwiLCBcInNjYWxlWFwiLCBcInNjYWxlWVwiLCBcInNjYWxlWlwiLCBcInNjYWxlXCIsIFwic2tld1hcIiwgXCJza2V3WVwiLCBcInNrZXdcIiwgXCJvcmlnaW5YXCIsIFwib3JpZ2luWVwiLCBcIm9yaWdpblpcIiwgXCJwZXJzcGVjdGl2ZVwiLCBcInBlcnNwZWN0aXZlT3JpZ2luWFwiLCBcInBlcnNwZWN0aXZlT3JpZ2luWVwiLCBcInJvdGF0aW9uWFwiLCBcInJvdGF0aW9uWVwiLCBcInJvdGF0aW9uWlwiLCBcInJvdGF0aW9uXCIsIFwiYmx1clwiLCBcImJyaWdodG5lc3NcIiwgXCJzYXR1cmF0ZVwiLCBcImh1ZVJvdGF0ZVwiLCBcImNvbnRyYXN0XCIsIFwiaW52ZXJ0XCIsIFwiZ3JheXNjYWxlXCIsIFwic2VwaWFcIiwgXCJzaGFkb3dYXCIsIFwic2hhZG93WVwiLCBcInNoYWRvd0JsdXJcIiwgXCJzaGFkb3dTcHJlYWRcIiwgXCJzaGFkb3dDb2xvclwiLCBcImJvcmRlckNvbG9yXCIsIFwiYm9yZGVyV2lkdGhcIiwgXCJmb3JjZTJkXCIsIFwiZmxhdFwiLCBcImJhY2tmYWNlVmlzaWJsZVwiLCBcIm5hbWVcIiwgXCJtYXRyaXhcIiwgXCJfbWF0cml4MmRcIiwgXCJ0cmFuc2Zvcm1NYXRyaXhcIiwgXCJtYXRyaXgzZFwiLCBcImJvcmRlclJhZGl1c1wiLCBcInBvaW50XCIsIFwic2l6ZVwiLCBcImZyYW1lXCIsIFwiaHRtbFwiLCBcImltYWdlXCIsIFwic2Nyb2xsWFwiLCBcInNjcm9sbFlcIiwgXCJfZG9tRXZlbnRNYW5hZ2VyXCIsIFwibW91c2VXaGVlbFNwZWVkTXVsdGlwbGllclwiLCBcInZlbG9jaXR5VGhyZXNob2xkXCIsIFwiYW5pbWF0aW9uT3B0aW9uc1wiLCBcImNvbnN0cmFpbmVkXCJdXG5cdGNzc1Byb3BzID0gW1wiZm9udEZhbWlseVwiLCBcImZvbnRTaXplXCIsIFwidGV4dEFsaWduXCIsIFwiZm9udFdlaWdodFwiLCBcImxpbmVIZWlnaHRcIiwgXCJ0ZXh0VHJhbnNmb3JtXCJdXG5cdGZvciBwIGluIHByb3BzXG5cdFx0aWYgZnJhbWVyUHJvcHMuaW5kZXhPZihwKSAhPSAtMSBcblx0XHRcdGlmIHN0eWxlW3BdID09IHBhcnNlSW50KHN0eWxlW3BdLCAxMClcblx0XHRcdFx0bGF5ZXJbcF0gPSBleHBvcnRzLnB4KHN0eWxlW3BdKVxuXHRcdFx0ZWxzZSBcblx0XHRcdFx0bGF5ZXJbcF0gPSBzdHlsZVtwXVxuXHRcdGlmIGNzc1Byb3BzLmluZGV4T2YocCkgIT0gLTEgXG5cdFx0XHRpZiBwID09IFwiZm9udFNpemVcIlxuXHRcdFx0XHRsYXllci5zdHlsZVtcImZvbnQtc2l6ZVwiXSA9IGV4cG9ydHMucHgoc3R5bGVbcF0pICsgXCJweFwiXG5cdFx0XHRpZiBwID09IFwiZm9udEZhbWlseVwiXG5cdFx0XHRcdGxheWVyLnN0eWxlW1wiZm9udC1mYW1pbHlcIl0gPSBzdHlsZVtwXVxuXHRcdFx0aWYgcCA9PSBcInRleHRBbGlnblwiXG5cdFx0XHRcdGxheWVyLnN0eWxlW1widGV4dC1hbGlnblwiXSA9IHN0eWxlW3BdXG5cdFx0XHRpZiBwID09IFwidGV4dFRyYW5zZm9ybVwiXG5cdFx0XHRcdGxheWVyLnN0eWxlW1widGV4dC10cmFuc2Zvcm1cIl0gPSBzdHlsZVtwXVxuXHRcdFx0aWYgcCA9PSBcImZvbnRXZWlnaHRcIlxuXHRcdFx0XHRpZiBzdHlsZVtwXSA9PSBwYXJzZUludChzdHlsZVtwXSwgMTApXG5cdFx0XHRcdFx0bGF5ZXIuc3R5bGVbXCJmb250LXdlaWdodFwiXSA9IHN0eWxlW3BdXG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRzd2l0Y2ggc3R5bGVbcF1cblx0XHRcdFx0XHRcdHdoZW4gXCJ1bHRyYXRoaW5cIiB0aGVuIGxheWVyLnN0eWxlW1wiZm9udC13ZWlnaHRcIl0gPSAxMDBcblx0XHRcdFx0XHRcdHdoZW4gXCJ0aGluXCIgdGhlbiBsYXllci5zdHlsZVtcImZvbnQtd2VpZ2h0XCJdID0gMjAwXG5cdFx0XHRcdFx0XHR3aGVuIFwibGlnaHRcIiB0aGVuIGxheWVyLnN0eWxlW1wiZm9udC13ZWlnaHRcIl0gPSAzMDBcblx0XHRcdFx0XHRcdHdoZW4gXCJyZWd1bGFyXCIgdGhlbiBsYXllci5zdHlsZVtcImZvbnQtd2VpZ2h0XCJdID0gNDAwXG5cdFx0XHRcdFx0XHR3aGVuIFwibWVkaXVtXCIgdGhlbiBsYXllci5zdHlsZVtcImZvbnQtd2VpZ2h0XCJdID0gNTAwXG5cdFx0XHRcdFx0XHR3aGVuIFwic2VtaWJvbGRcIiB0aGVuIGxheWVyLnN0eWxlW1wiZm9udC13ZWlnaHRcIl0gPSA2MDBcblx0XHRcdFx0XHRcdHdoZW4gXCJib2xkXCIgdGhlbiBsYXllci5zdHlsZVtcImZvbnQtd2VpZ2h0XCJdID0gNzAwXG5cdFx0XHRcdFx0XHR3aGVuIFwiYmxhY2tcIiB0aGVuIGxheWVyLnN0eWxlW1wiZm9udC13ZWlnaHRcIl0gPSA4MDBcblx0XHRcdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRcdFx0ZXJyb3IocCwgNClcblx0XHRcdGlmIHAgPT0gXCJsaW5lSGVpZ2h0XCJcblx0XHRcdFx0aWYgc3R5bGVbcF0gPT0gXCJhdXRvXCJcblx0XHRcdFx0XHRsYXllci5zdHlsZVtcImxpbmUtaGVpZ2h0XCJdID0gZXhwb3J0cy5weChzdHlsZVtcImZvbnRTaXplXCJdKSAqIDEuMiArIFwicHhcIlxuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0bGF5ZXIuc3R5bGVbXCJsaW5lLWhlaWdodFwiXSA9IGV4cG9ydHMucHgoc3R5bGVbcF0pICsgXCJweFwiXG5cbmV4cG9ydHMuYmdCbHVyID0gKGxheWVyKSAtPlxuXHRsYXllci5zdHlsZVtcIi13ZWJraXQtYmFja2Ryb3AtZmlsdGVyXCJdID0gXCJibHVyKCN7ZXhwb3J0cy5weCg1KX1weClcIlxuXHRyZXR1cm4gbGF5ZXIgXG5cbmV4cG9ydHMuQ3VzdG9tID0gKHN0eWxlLCBhcnJheSkgLT5cblx0bGF5ZXIgPSBuZXcgTGF5ZXIgXG5cdGlzU3R5bGVWYWxpZCA9IGV4cG9ydHMuc3R5bGVzW3N0eWxlXVxuXHRpZiBpc1N0eWxlVmFsaWQgPT0gdW5kZWZpbmVkXG5cdFx0aWYgYXJyYXkgIT0gdW5kZWZpbmVkXG5cdFx0XHRleHBvcnRzLmFkZFN0eWxlXG5cdFx0XHRcdFwiI3tzdHlsZX1cIiA6XG5cdFx0XHRcdFx0YXJyYXlcblx0XHRlbHNlXG5cdFx0XHRleHBvcnRzLmFkZFN0eWxlXG5cdFx0XHRcdFwiI3tzdHlsZX1cIiA6XG5cdFx0XHRcdFx0d2lkdGggOiAxMDBcblx0ZXhwb3J0cy5hcHBseShsYXllciwgc3R5bGUpXG5cdGlmIGFycmF5ICE9IHVuZGVmaW5lZCAmJiBpc1N0eWxlVmFsaWQgIT0gdW5kZWZpbmVkXG5cdFx0c3R5bGVOdW0gPSBcImNvcHlcIlxuXHRcdG5ld1N0eWxlTmFtZSA9IHN0eWxlICsgXCIgXCIgKyBzdHlsZU51bVxuXHRcdGV4cG9ydHMuYWRkU3R5bGVcblx0XHRcdFwiI3tuZXdTdHlsZU5hbWV9XCIgOiBcblx0XHRcdFx0YXJyYXlcblx0XHRleHBvcnRzLmFwcGx5KGxheWVyLCBuZXdTdHlsZU5hbWUpXG5cdHJldHVybiBsYXllciBcblxubWFrZVN0eWxlQ2hhbmdlID0gKGxheWVyLCBzdHlsZSwgY2hhbmdlKSAtPlxuXHRpZiBkZWZhdWx0cy5jc3NQcm9wcy5pbmRleE9mKHN0eWxlKSAhPSAtMVxuXHRcdGlmIHN0eWxlID09IFwiZm9udFNpemVcIlxuXHRcdFx0bGF5ZXIuc3R5bGVbXCJmb250LXNpemVcIl0gPSBleHBvcnRzLnB4KGNoYW5nZSkgKyBcInB4XCJcblx0aWYgZGVmYXVsdHMuZnJhbWVyUHJvcHMuaW5kZXhPZihzdHlsZSkgIT0gLTFcblx0XHRsYXllcltzdHlsZV0gPSBjaGFuZ2VcbiBcblxudGV4dEF1dG9TaXplID0gKHRleHRMYXllcikgLT5cblx0I0RlZmluZSBXaWR0aFxuXHRjb25zdHJhaW50cyA9IHt9XG5cdGlmIHRleHRMYXllci5jb25zdHJhaW50cyBcblx0XHRpZiB0ZXh0TGF5ZXIuY29uc3RyYWludHMuaGVpZ2h0XG5cdFx0XHRjb25zdHJhaW50cy5oZWlnaHQgPSBleHBvcnRzLnB4KHRleHRMYXllci5jb25zdHJhaW50cy5oZWlnaHQpXG5cdFx0aWYgdGV4dExheWVyLmNvbnN0cmFpbnRzLndpZHRoXG5cdFx0XHRjb25zdHJhaW50cy53aWR0aCA9IGV4cG9ydHMucHgodGV4dExheWVyLmNvbnN0cmFpbnRzLndpZHRoKVxuXHRzdHlsZXMgPVxuXHRcdGZvbnRTaXplOiB0ZXh0TGF5ZXIuc3R5bGVbXCJmb250LXNpemVcIl1cblx0XHRmb250RmFtaWx5OiB0ZXh0TGF5ZXIuc3R5bGVbXCJmb250LWZhbWlseVwiXVxuXHRcdGZvbnRXZWlnaHQ6IHRleHRMYXllci5zdHlsZVtcImZvbnQtd2VpZ2h0XCJdXG5cdFx0bGluZUhlaWdodDogdGV4dExheWVyLnN0eWxlW1wibGluZS1oZWlnaHRcIl1cblx0XHRsZXR0ZXJTcGFjaW5nOiB0ZXh0TGF5ZXIuc3R5bGVbXCJsZXR0ZXItc3BhY2luZ1wiXVxuXHRcdHRleHRUcmFuc2Zvcm06IHRleHRMYXllci5zdHlsZVtcInRleHQtdHJhbnNmb3JtXCJdXG5cdHRleHRXaWR0aCA9IFV0aWxzLnRleHRTaXplIHRleHRMYXllci5odG1sLCBzdHlsZXMsIGNvbnN0cmFpbnRzXG5cdHJldHVybiB7XG5cdFx0d2lkdGggOiB0ZXh0V2lkdGgud2lkdGhcblx0XHRoZWlnaHQ6IHRleHRXaWR0aC5oZWlnaHRcblx0fVxuXG5leHBvcnRzLlRleHQgPSAoYXJyYXkpIC0+XG5cdGlmIGFycmF5ID09IHVuZGVmaW5lZFxuXHRcdGFycmF5ID0gW11cblx0ZXhjZXB0aW9ucyA9IE9iamVjdC5rZXlzKGFycmF5KVxuXHRzdHlsZUFycmF5ID0ge31cblx0Zm9yIGkgaW4gZGVmYXVsdHMudGV4dC5wcm9wc1xuXHRcdGlmIGFycmF5W2ldICE9IHVuZGVmaW5lZFxuXHRcdFx0QFtpXSA9IGFycmF5W2ldXG5cdFx0ZWxzZVxuXHRcdFx0QFtpXSA9IGRlZmF1bHRzLnRleHQuZGVmYXVsdHNbaV1cblx0XHRpZiBpICE9IFwic3R5bGVcIlxuXHRcdFx0c3R5bGVBcnJheVtpXSA9IEBbaV1cblx0dGV4dExheWVyID0gbmV3IExheWVyXG5cdHRleHRMYXllci50eXBlID0gXCJ0ZXh0XCJcblx0dGV4dExheWVyLmh0bWwgPSBAdGV4dFxuXHR0ZXh0U3R5bGUgPSBcblx0XHRcIiN7QC5zdHlsZX1cIiA6IFxuXHRcdFx0c3R5bGVBcnJheVxuXHRpZiBleHBvcnRzLnN0eWxlc1tALnN0eWxlXSA9PSB1bmRlZmluZWRcblx0XHRleHBvcnRzLmFkZFN0eWxlIHRleHRTdHlsZVxuXHRcdGV4cG9ydHMuYXBwbHkodGV4dExheWVyLCBAc3R5bGUpXG5cdGVsc2Vcblx0XHRleHBvcnRzLmFwcGx5KHRleHRMYXllciwgQHN0eWxlKVxuXHRcdGZvciBjaGFuZ2UgaW4gZXhjZXB0aW9uc1xuXHRcdFx0aWYgY2hhbmdlICE9IFwic3R5bGVcIlxuXHRcdFx0XHRtYWtlU3R5bGVDaGFuZ2UodGV4dExheWVyLCBjaGFuZ2UsIGFycmF5W2NoYW5nZV0pXHRcdFxuXHR0ZXh0RnJhbWUgPSB0ZXh0QXV0b1NpemUodGV4dExheWVyKVxuXHR0ZXh0TGF5ZXIucHJvcHMgPSAoaGVpZ2h0OnRleHRGcmFtZS5oZWlnaHQsIHdpZHRoOnRleHRGcmFtZS53aWR0aClcblx0cmV0dXJuIHRleHRMYXllclxuXG5leHBvcnRzLnVwZGF0ZSA9IChsYXllciwgYXJyYXkpIC0+XG5cdGlmIGFycmF5ID09IHVuZGVmaW5lZFxuXHRcdGFycmF5ID0gW11cblx0aWYgbGF5ZXIudHlwZSA9PSBcInRleHRcIlxuXHRcdGZvciBjaGFuZ2UgaW4gYXJyYXlcblx0XHRcdGtleSA9IE9iamVjdC5rZXlzKGNoYW5nZSlbMF1cblx0XHRcdHZhbHVlID0gY2hhbmdlW2tleV1cblx0XHRcdGlmIGtleSA9PSBcInRleHRcIlxuXHRcdFx0XHRsYXllci5odG1sID0gdmFsdWVcblx0XHRcdFx0dGV4dEZyYW1lID0gdGV4dEF1dG9TaXplKGxheWVyKVxuXHRcdFx0XHRsYXllci53aWR0aCA9IHRleHRGcmFtZS53aWR0aFxuXHRcdFx0XHRsYXllci5oZWlnaHQgPSB0ZXh0RnJhbWUuaGVpZ2h0XG5cdGV4cG9ydHMubGF5b3V0KClcblxuZXhwb3J0cy50aW1lRGVsZWdhdGUgPSAobGF5ZXIsIGNsb2NrVHlwZSkgLT5cblx0QHRpbWUgPSBleHBvcnRzLmdldFRpbWUoKVxuXHRVdGlscy5kZWxheSA2MCAtIEB0aW1lLnNlY3MsIC0+XG5cdFx0QHRpbWUgPSBleHBvcnRzLmdldFRpbWUoKVxuXHRcdGV4cG9ydHMudXBkYXRlKGxheWVyLCBbdGV4dDpleHBvcnRzLnRpbWVGb3JtYXR0ZXIoQHRpbWUsIGNsb2NrVHlwZSldKVxuXHRcdFV0aWxzLmludGVydmFsIDYwLCAtPlxuXHRcdFx0QHRpbWUgPSBleHBvcnRzLmdldFRpbWUoKVxuXHRcdFx0ZXhwb3J0cy51cGRhdGUobGF5ZXIsIFt0ZXh0OmV4cG9ydHMudGltZUZvcm1hdHRlcihAdGltZSwgY2xvY2tUeXBlKV0pXG4gXG5leHBvcnRzLnRpbWVGb3JtYXR0ZXIgPSAodGltZU9iaiwgY2xvY2tUeXBlKSAtPlxuXHRpZiBjbG9ja1R5cGUgPT0gZmFsc2UgXG5cdFx0aWYgdGltZU9iai5ob3VycyA+IDEyXG5cdFx0XHR0aW1lT2JqLmhvdXJzID0gdGltZU9iai5ob3VycyAtIDEyXG5cdGlmIHRpbWVPYmoubWlucyA8IDEwXG5cdFx0dGltZU9iai5taW5zID0gXCIwXCIgKyB0aW1lT2JqLm1pbnNcblx0cmV0dXJuIHRpbWVPYmouaG91cnMgKyBcIjpcIiArIHRpbWVPYmoubWluc1xuXG4jI0FsZXJ0c1xuZXhwb3J0cy5BbGVydCA9IChhcnJheSkgLT5cblx0aWYgYXJyYXkgPT0gdW5kZWZpbmVkXG5cdFx0YXJyYXkgPSBbXVxuXHRmb3IgaSBpbiBkZWZhdWx0cy5hbGVydC5wcm9wc1xuXHRcdGlmIGFycmF5W2ldICE9IHVuZGVmaW5lZFxuXHRcdFx0QFtpXSA9IGFycmF5W2ldXG5cdFx0ZWxzZVxuXHRcdFx0QFtpXSA9IGRlZmF1bHRzLmFsZXJ0LnRleHRbaV1cblx0YWxsID0gbmV3IExheWVyIGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCIsIG5hbWU6XCJhbGVydCBhbGxcIlxuXHRhbGwuY29uc3RyYWludHMgPSBcblx0XHRsZWFkaW5nOjBcblx0XHR0cmFpbGluZzowXG5cdFx0dG9wOjBcblx0XHRib3R0b206MFxuXHRvdmVybGF5ID0gbmV3IExheWVyIGJhY2tncm91bmRDb2xvcjpcImJsYWNrXCIsIG9wYWNpdHk6LjMsIHN1cGVyTGF5ZXI6YWxsLCBuYW1lOlwib3ZlcmxheVwiXG5cdG92ZXJsYXkuY29uc3RyYWludHMgPVxuXHRcdGxlYWRpbmc6MFxuXHRcdHRyYWlsaW5nOjBcblx0XHR0b3A6MFxuXHRcdGJvdHRvbTowXG5cdGFsZXJ0QkcgPSBuZXcgTGF5ZXIgYmFja2dyb3VuZENvbG9yOlwid2hpdGVcIiwgc3VwZXJMYXllcjphbGwsIGJvcmRlclJhZGl1czpleHBvcnRzLnB4KDEwKSwgbmFtZTpcImFsZXJ0IGJnXCIsIHg6OTIsIHk6NTM3XG5cdGFsZXJ0QkcuY29uc3RyYWludHMgPVxuXHRcdGFsaWduOlwiY2VudGVyXCJcblx0XHR3aWR0aDoyODBcblx0XHRoZWlnaHQ6NDAwXG5cdHRpdGxlID0gbmV3IGV4cG9ydHMuVGV4dCBzdHlsZTpcImFsZXJ0VGl0bGVcIiwgc3VwZXJMYXllcjphbGVydEJHLCB0ZXh0OkB0aXRsZSwgZm9udFdlaWdodDpcIm1lZGl1bVwiLCAgbmFtZTpcInRpdGxlXCJcblx0dGl0bGUuY29uc3RyYWludHMgPSBcblx0XHRhbGlnbjpcImhvcml6b250YWxcIlxuXHRcdHRvcDoyMFxuXHRtZXNzYWdlID0gbmV3IGV4cG9ydHMuVGV4dCBzdHlsZTpcImFsZXJ0TWVzc2FnZVwiLCB0ZXh0OkBtZXNzYWdlLCBmb250U2l6ZToxMywgc3VwZXJMYXllcjphbGVydEJHLCB0ZXh0QWxpZ246XCJjZW50ZXJcIiwgbGluZUhlaWdodDoxNiwgd2lkdGg6MjQwLCBuYW1lOlwibWVzc2FnZVwiXG5cdG1lc3NhZ2UuY29uc3RyYWludHMgPVxuXHRcdHRvcDogW3RpdGxlLCAxMF1cblx0XHRhbGlnbjpcImhvcml6b250YWxcIlxuXHRcdHdpZHRoOiAyMjBcblx0ZGl2aWRlciA9IG5ldyBMYXllciBzdXBlckxheWVyOmFsZXJ0QkcsIGJhY2tncm91bmRDb2xvcjpcIiNFMkU4RUJcIiwgbmFtZTpcImhvcml6b250YWwgZGl2aWRlclwiXG5cdGRpdmlkZXIuY29uc3RyYWludHMgPSBcblx0XHRsZWFkaW5nOjBcblx0XHR0cmFpbGluZzowXG5cdFx0aGVpZ2h0OjFcblx0XHRib3R0b206NDRcblx0ZXhwb3J0cy5sYXlvdXQoKVxuXHRhY3Rpb25CdXR0b24gPSBuZXcgZXhwb3J0cy5UZXh0IHN0eWxlOlwiYWxlcnRBY3Rpb25cIiwgY29sb3I6XCIjMDA3NkZGXCIsIHN1cGVyTGF5ZXI6YWxlcnRCRywgdGV4dDpAYWN0aW9uLCBuYW1lOlwiYWN0aW9uXCJcblx0c2Vjb25kYXJ5QWN0aW9uQnV0dG9uID0gbmV3IGV4cG9ydHMuVGV4dCBzdHlsZTpcImFsZXJ0QWN0aW9uXCIsIHRleHQ6QHNlY29uZGFyeUFjdGlvbiwgbmFtZTpcInNlY29uZGFyeUFjdGlvblwiXG5cdGFsZXJ0QkcuY29uc3RyYWludHNbXCJoZWlnaHRcIl0gPSAyMCArIGV4cG9ydHMucHQodGl0bGUuaGVpZ2h0KSArIDEwICsgZXhwb3J0cy5wdChtZXNzYWdlLmhlaWdodCkgKyA2NCBcblx0ZXhwb3J0cy5sYXlvdXQoKVxuXHRpZiBAYWN0aW9uICE9IFwiQWN0aW9uXCIgJiYgQHNlY29uZGFyeUFjdGlvbiA9PSBcInNlY29uZGFyeUFjdGlvblwiXG5cdFx0YWN0aW9uQnV0dG9uLmNvbnN0cmFpbnRzID0gXG5cdFx0XHRhbGlnbjpcImhvcml6b250YWxcIlxuXHRcdFx0Ym90dG9tOjE2XG5cdFx0Ym94ID0gbmV3IExheWVyIHN1cGVyTGF5ZXI6YWxlcnRCRywgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIlxuXHRcdGJveC5jb25zdHJhaW50cyA9IFxuXHRcdFx0bGVhZGluZzowXG5cdFx0XHR0cmFpbGluZzowXG5cdFx0XHRib3R0b206MFxuXHRcdFx0aGVpZ2h0OjQ0XG5cdFx0c2Vjb25kYXJ5QWN0aW9uQnV0dG9uLnZpc2libGUgPSBmYWxzZVxuXHRcdGV4cG9ydHMubGF5b3V0KClcblx0XHRyZXR1cm4ge1xuXHRcdFx0YWxsIDogYWxsXG5cdFx0XHRvdmVybGF5IDogb3ZlcmxheVxuXHRcdFx0YWN0aW9uOiBib3hcblx0XHRcdHRpdGxlOiB0aXRsZVxuXHRcdFx0bWVzc2FnZTogbWVzc2FnZVxuXHRcdH1cblx0ZWxzZVxuXHRcdGxlZnRCb3ggPSBuZXcgTGF5ZXIgd2lkdGg6YWxlcnRCRy53aWR0aC8yLCBzdXBlckxheWVyOmFsZXJ0QkcsIG5hbWU6QHNlY29uZGFyeUFjdGlvbiArIFwiIGJveFwiLCBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiXG5cdFx0cmlnaHRCb3ggPSBuZXcgTGF5ZXIgd2lkdGg6YWxlcnRCRy53aWR0aC8yLCBzdXBlckxheWVyOmFsZXJ0QkcsIG5hbWU6QGFjdGlvbiArIFwiIGJveFwiLCBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiXG5cdFx0ZGl2aWRlclZlcnRpY2FsID0gbmV3IExheWVyIHN1cGVyTGF5ZXI6YWxlcnRCRywgYmFja2dyb3VuZENvbG9yOlwiI0UyRThFQlwiXG5cdFx0ZGl2aWRlclZlcnRpY2FsLmNvbnN0cmFpbnRzID0gXG5cdFx0XHR3aWR0aDoxXG5cdFx0XHRoZWlnaHQ6NDRcblx0XHRcdGJvdHRvbTowXG5cdFx0XHRhbGlnbjpcImhvcml6b250YWxcIlxuXHRcdGxlZnRCb3guY29uc3RyYWludHMgPVxuXHRcdFx0aGVpZ2h0OjQ0XG5cdFx0XHRib3R0b206MFxuXHRcdFx0bGVhZGluZzowXG5cdFx0cmlnaHRCb3guY29uc3RyYWludHMgPVxuXHRcdFx0aGVpZ2h0OjQ0XG5cdFx0XHRib3R0b206MFxuXHRcdFx0dHJhaWxpbmc6MFxuXHRcdGxlZnRCb3guYWRkU3ViTGF5ZXIoc2Vjb25kYXJ5QWN0aW9uQnV0dG9uKVxuXHRcdHJpZ2h0Qm94LmFkZFN1YkxheWVyKGFjdGlvbkJ1dHRvbilcblx0XHRleHBvcnRzLmxheW91dCgpXG5cdFx0YWN0aW9uQnV0dG9uLmNvbnN0cmFpbnRzID0gXG5cdFx0XHRhbGlnbjpcImhvcml6b250YWxcIlxuXHRcdFx0Ym90dG9tOjE0XG5cdFx0c2Vjb25kYXJ5QWN0aW9uQnV0dG9uLmNvbnN0cmFpbnRzID1cblx0XHRcdGFsaWduOlwiaG9yaXpvbnRhbFwiXG5cdFx0XHRib3R0b206MTRcblx0XHRleHBvcnRzLmxheW91dCgpXG5cdFx0cmV0dXJuIHtcblx0XHRcdGFsbCA6IGFsbFxuXHRcdFx0b3ZlcmxheSA6IG92ZXJsYXlcblx0XHRcdGFjdGlvbjogcmlnaHRCb3hcblx0XHRcdHNlY29uZGFyeUFjdGlvbiA6IGxlZnRCb3hcblx0XHRcdHRpdGxlOiB0aXRsZVxuXHRcdFx0bWVzc2FnZTogbWVzc2FnZVxuXHRcdH1cblxuZXhwb3J0cy5CYW5uZXIgPSAoYXJyYXkpIC0+XG5cdGlmIGFycmF5ID09IHVuZGVmaW5lZFxuXHRcdGFycmF5ID0gW11cblx0Zm9yIGkgaW4gZGVmYXVsdHMuYmFubmVyLnByb3BzXG5cdFx0aWYgYXJyYXlbaV0gIT0gdW5kZWZpbmVkXG5cdFx0XHRAW2ldID0gYXJyYXlbaV1cblx0XHRlbHNlXG5cdFx0XHRAW2ldID0gZGVmYXVsdHMuYmFubmVyLnRleHRbaV1cblx0YmFubmVyQkcgPSBuZXcgTGF5ZXIgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIiwgbmFtZTpcImJhbm5lciBhbGxcIlxuXHRpZiBleHBvcnRzLmRldmljZSA9PSBcImlwaG9uZS02c1wiXG5cdFx0YmFubmVyQkcuaHRtbCA9IFwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdFx0XHQ8c3ZnIHdpZHRoPScje2V4cG9ydHMud2lkdGh9cHgnIGhlaWdodD0nI3tleHBvcnRzLnB4KDY4KX1weCcgdmlld0JveD0nMCAwIDM3NSA2OCcgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJz5cblx0XHRcdCAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNiAoMjYzMDQpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdFx0ICAgIDx0aXRsZT5Ob3RpZmljYXRpb24gYmFja2dyb3VuZDwvdGl0bGU+XG5cdFx0XHQgICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0XHQgICAgPGRlZnM+PC9kZWZzPlxuXHRcdFx0ICAgIDxnIGlkPSdQYWdlLTEnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIGZpbGwtb3BhY2l0eT0nMC45NSc+XG5cdFx0XHQgICAgICAgIDxnIGlkPSdpT1M4LVB1c2gtTm90aWZpY2F0aW9uJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtNTguMDAwMDAwLCAtMjMuMDAwMDAwKScgZmlsbD0nIzFBMUExQyc+XG5cdFx0XHQgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSg1OC4wMDAwMDAsIDcuMDAwMDAwKScgaWQ9J05vdGlmaWNhdGlvbi1jb250YWluZXInPlxuXHRcdFx0ICAgICAgICAgICAgICAgIDxnPlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSdNMCwxNiBMMzc1LDE2IEwzNzUsODQgTDAsODQgTDAsMTYgWiBNMTY5LDc3LjAwNDg4MTUgQzE2OSw3NS44OTc2MTYgMTY5Ljg5NjI3OSw3NSAxNzEuMDAyNCw3NSBMMjAzLjk5NzYsNzUgQzIwNS4xMDM0OTUsNzUgMjA2LDc1Ljg5Mzg5OTggMjA2LDc3LjAwNDg4MTUgTDIwNiw3Ny45OTUxMTg1IEMyMDYsNzkuMTAyMzg0IDIwNS4xMDM3MjEsODAgMjAzLjk5NzYsODAgTDE3MS4wMDI0LDgwIEMxNjkuODk2NTA1LDgwIDE2OSw3OS4xMDYxMDAyIDE2OSw3Ny45OTUxMTg1IEwxNjksNzcuMDA0ODgxNSBaJyBpZD0nTm90aWZpY2F0aW9uLWJhY2tncm91bmQnPjwvcGF0aD5cblx0XHRcdCAgICAgICAgICAgICAgICA8L2c+XG5cdFx0XHQgICAgICAgICAgICA8L2c+XG5cdFx0XHQgICAgICAgIDwvZz5cblx0XHRcdCAgICA8L2c+XG5cdFx0XHQ8L3N2Zz5cIlxuXHRpZiBleHBvcnRzLmRldmljZSA9PSBcImlwaG9uZS02cy1wbHVzXCJcblx0XHRiYW5uZXJCRy5odG1sID0gXCJcblx0XHQ8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0XHRcdDxzdmcgd2lkdGg9JyN7ZXhwb3J0cy53aWR0aH1weCcgaGVpZ2h0PScje2V4cG9ydHMucHgoNjgpfXB4JyB2aWV3Qm94PScwIDAgNDE0IDY4JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnPlxuXHRcdCAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNiAoMjYzMDQpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdCAgICA8dGl0bGU+Tm90aWZpY2F0aW9uIGJhY2tncm91bmQgQ29weTwvdGl0bGU+XG5cdFx0ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdCAgICA8ZGVmcz48L2RlZnM+XG5cdFx0ICAgIDxnIGlkPSdQYWdlLTEnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIGZpbGwtb3BhY2l0eT0nMC45NSc+XG5cdFx0ICAgICAgICA8ZyBpZD0naU9TOC1QdXNoLU5vdGlmaWNhdGlvbicgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTQzLjAwMDAwMCwgLTc0LjAwMDAwMCknIGZpbGw9JyMxQTFBMUMnPlxuXHRcdCAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDQzLjAwMDAwMCwgNzQuMDAwMDAwKScgaWQ9J05vdGlmaWNhdGlvbi1jb250YWluZXInPlxuXHRcdCAgICAgICAgICAgICAgICA8Zz5cblx0XHQgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9J00wLDAgTDQxNCwwIEw0MTQsNjggTDAsNjggTDAsMCBaIE0xODksNjEuMDA0ODgxNSBDMTg5LDU5Ljg5NzYxNiAxODkuODk2Mjc5LDU5IDE5MS4wMDI0LDU5IEwyMjMuOTk3Niw1OSBDMjI1LjEwMzQ5NSw1OSAyMjYsNTkuODkzODk5OCAyMjYsNjEuMDA0ODgxNSBMMjI2LDYxLjk5NTExODUgQzIyNiw2My4xMDIzODQgMjI1LjEwMzcyMSw2NCAyMjMuOTk3Niw2NCBMMTkxLjAwMjQsNjQgQzE4OS44OTY1MDUsNjQgMTg5LDYzLjEwNjEwMDIgMTg5LDYxLjk5NTExODUgTDE4OSw2MS4wMDQ4ODE1IFonIGlkPSdOb3RpZmljYXRpb24tYmFja2dyb3VuZC1Db3B5Jz48L3BhdGg+XG5cdFx0ICAgICAgICAgICAgICAgIDwvZz5cblx0XHQgICAgICAgICAgICA8L2c+XG5cdFx0ICAgICAgICA8L2c+XG5cdFx0ICAgIDwvZz5cblx0XHQ8L3N2Zz5cblx0XHRcIlxuXHRiYW5uZXJCRy5jb25zdHJhaW50cyA9XG5cdFx0bGVhZGluZzowXG5cdFx0dHJhaWxpbmc6MFxuXHRcdHRvcDowXG5cdFx0aGVpZ2h0OjY4XG5cdGljb24gPSBuZXcgTGF5ZXIgc3VwZXJMYXllcjpiYW5uZXJCRywgbmFtZTpcImljb25cIiwgYm9yZGVyUmFkaXVzOmV4cG9ydHMucHgoNC41KVxuXHRpZiBAaWNvbiA9PSB1bmRlZmluZWRcblx0XHRpY29uLnN0eWxlW1wiYmFja2dyb3VuZFwiXSA9IFwibGluZWFyLWdyYWRpZW50KC0xODBkZWcsICM2N0ZGODEgMCUsICMwMUI0MUYgMTAwJSlcIlxuXHRpY29uLmNvbnN0cmFpbnRzID1cblx0XHRoZWlnaHQ6MjBcblx0XHR3aWR0aDoyMFxuXHRcdGxlYWRpbmc6MTVcblx0XHR0b3A6OFxuXHR0aXRsZSA9IG5ldyBleHBvcnRzLlRleHQgc3R5bGU6XCJiYW5uZXJUaXRsZVwiLCB0ZXh0OkB0aXRsZSwgY29sb3I6XCJ3aGl0ZVwiLCBmb250V2VpZ2h0OlwibWVkaXVtXCIsIGZvbnRTaXplOjEzLCBzdXBlckxheWVyOmJhbm5lckJHLCBuYW1lOlwidGl0bGVcIlxuXHR0aXRsZS5jb25zdHJhaW50cyA9IFxuXHRcdHRvcDo1XG5cdFx0bGVhZGluZzpbaWNvbiwgMTFdXG5cdG1lc3NhZ2UgPSBuZXcgZXhwb3J0cy5UZXh0IHN0eWxlOlwiYmFubmVyTWVzc2FnZVwiLCB0ZXh0OkBtZXNzYWdlLCBjb2xvcjpcIndoaXRlXCIsIGZvbnRTaXplOjEzLCBzdXBlckxheWVyOmJhbm5lckJHLCBuYW1lOlwibWVzc2FnZVwiXG5cdG1lc3NhZ2UuY29uc3RyYWludHMgPVxuXHRcdGxlYWRpbmdFZGdlczp0aXRsZVxuXHRcdHRvcDpbdGl0bGUsIDJdXG5cdHRpbWUgPSBuZXcgZXhwb3J0cy5UZXh0IHN0eWxlOlwiYmFubmVyVGltZVwiLCB0ZXh0OkB0aW1lLCBjb2xvcjpcIndoaXRlXCIsIGZvbnRTaXplOjExLCBzdXBlckxheWVyOmJhbm5lckJHLCBuYW1lOlwidGltZVwiXG5cdHRpbWUuY29uc3RyYWludHMgPVxuXHRcdGxlYWRpbmc6W3RpdGxlLCA1XVxuXHRcdGJvdHRvbUVkZ2VzOiB0aXRsZVxuXG5cdGV4cG9ydHMubGF5b3V0KClcblx0cmV0dXJuIHtcblx0XHRhbGwgOiBiYW5uZXJCR1xuXHRcdGljb246aWNvblxuXHRcdHRpdGxlOnRpdGxlXG5cdFx0bWVzc2FnZTptZXNzYWdlXG5cdH1cblxuZXhwb3J0cy5CdXR0b24gPSAoYXJyYXkpIC0+XG5cdHNldHVwID0gc2V0dXBDb21wb25lbnQoXCJidXR0b25cIiwgYXJyYXkpXG5cdGJ1dHRvbiA9IG5ldyBMYXllciBuYW1lOnNldHVwLm5hbWVcblx0Y29sb3IgPSBcIlwiXG5cdGlmIHNldHVwLnN1cGVyTGF5ZXIgXG5cdFx0c2V0dXAuc3VwZXJMYXllci5hZGRTdWJMYXllcihidXR0b24pXG5cdHN3aXRjaCBzZXR1cC50eXBlXG5cdFx0d2hlbiBcImJpZ1wiXG5cdFx0XHRAZm9udFNpemUgPSAyMFxuXHRcdFx0QHRvcCA9IDE2XG5cdFx0XHRAZm9udFdlaWdodCA9IFwibWVkaXVtXCJcblx0XHRcdGJ1dHRvbi5jb25zdHJhaW50cyA9XG5cdFx0XHRcdGxlYWRpbmc6MTBcblx0XHRcdFx0dHJhaWxpbmc6MTBcblx0XHRcdFx0aGVpZ2h0OjU3XG5cdFx0XHRidXR0b24uYm9yZGVyUmFkaXVzID0gZXhwb3J0cy5weCgxMi41KVxuXHRcdFx0YmFja2dyb3VuZENvbG9yID0gXCJcIlxuXHRcdFx0c3dpdGNoIHNldHVwLnN0eWxlXG5cdFx0XHRcdHdoZW4gXCJsaWdodFwiXG5cdFx0XHRcdFx0Y29sb3IgPSBcIiMwMDdBRkZcIlxuXHRcdFx0XHRcdGlmIHNldHVwLmJsdXIgXG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3IgPSBcInJnYmEoMjU1LCAyNTUsIDI1NSwgLjkpXCJcblx0XHRcdFx0XHRcdGV4cG9ydHMuYmdCbHVyKGJ1dHRvbilcblx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCJcblxuXHRcdFx0XHR3aGVuIFwiZGFya1wiXG5cdFx0XHRcdFx0Y29sb3IgPSBcIiNGRkZcIlxuXHRcdFx0XHRcdGlmIHNldHVwLmJsdXJcblx0XHRcdFx0XHRcdGJhY2tncm91bmRDb2xvciA9IFwicmdiYSg0MywgNDMsIDQzLCAuOSlcIlxuXHRcdFx0XHRcdFx0ZXhwb3J0cy5iZ0JsdXIoYnV0dG9uKVxuXHRcdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRcdGJhY2tncm91bmRDb2xvciA9IFwiIzI4MjgyOFwiXG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRpZiBzZXR1cC5ibHVyIFxuXHRcdFx0XHRcdFx0Y29sb3IgPSBzZXR1cC5jb2xvclxuXHRcdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yID0gbmV3IENvbG9yKHNldHVwLmJhY2tncm91bmRDb2xvcilcblx0XHRcdFx0XHRcdHJnYlN0cmluZyA9IGJhY2tncm91bmRDb2xvci50b1JnYlN0cmluZygpXG5cdFx0XHRcdFx0XHRyZ2JhU3RyaW5nID0gcmdiU3RyaW5nLnJlcGxhY2UoXCIpXCIsIFwiLCAuOSlcIilcblx0XHRcdFx0XHRcdHJnYmFTdHJpbmcgID0gcmdiYVN0cmluZy5yZXBsYWNlKFwicmdiXCIsIFwicmdiYVwiKVxuXHRcdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yID0gcmdiYVN0cmluZ1xuXHRcdFx0XHRcdFx0ZXhwb3J0cy5iZ0JsdXIoYnV0dG9uKVxuXHRcdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRcdGNvbG9yID0gc2V0dXAuY29sb3Jcblx0XHRcdFx0XHRcdGJhY2tncm91bmRDb2xvciA9IG5ldyBDb2xvcihzZXR1cC5iYWNrZ3JvdW5kQ29sb3IpXG5cblxuXHRcdFx0YnV0dG9uLmJhY2tncm91bmRDb2xvciA9IGJhY2tncm91bmRDb2xvclxuXG5cdFx0XHRidXR0b24ub24gRXZlbnRzLlRvdWNoU3RhcnQsIC0+XG5cdFx0XHRcdG5ld0NvbG9yID0gXCJcIlxuXHRcdFx0XHRpZiBzZXR1cC5zdHlsZSA9PSBcImRhcmtcIlxuXHRcdFx0XHRcdG5ld0NvbG9yID0gYnV0dG9uLmJhY2tncm91bmRDb2xvci5saWdodGVuKDEwKVxuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0bmV3Q29sb3IgPSBidXR0b24uYmFja2dyb3VuZENvbG9yLmRhcmtlbigxMClcblx0XHRcdFx0YnV0dG9uLmFuaW1hdGUgXG5cdFx0XHRcdFx0cHJvcGVydGllczooYmFja2dyb3VuZENvbG9yOm5ld0NvbG9yKVxuXHRcdFx0XHRcdHRpbWU6LjVcblx0XHRcdGJ1dHRvbi5vbiBFdmVudHMuVG91Y2hFbmQsIC0+XG5cdFx0XHRcdGJ1dHRvbi5hbmltYXRlXG5cdFx0XHRcdFx0cHJvcGVydGllczooYmFja2dyb3VuZENvbG9yOmJhY2tncm91bmRDb2xvcilcblx0XHRcdFx0XHR0aW1lOi41XG5cblx0XHR3aGVuIFwic21hbGxcIlxuXHRcdFx0QGZvbnRTaXplID0gMTZcblx0XHRcdEB0b3AgPSA0XG5cdFx0XHRidXR0b24uYm9yZGVyUmFkaXVzID0gZXhwb3J0cy5weCgyLjUpXG5cdFx0XHRzd2l0Y2ggc2V0dXAuc3R5bGVcblx0XHRcdFx0d2hlbiBcImxpZ2h0XCJcblx0XHRcdFx0XHRjb2xvciA9IFwiIzAwN0FGRlwiXG5cdFx0XHRcdFx0YnV0dG9uLmJvcmRlckNvbG9yID0gXCIjMDA3QUZGXCJcblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdGNvbG9yID0gc2V0dXAuY29sb3Jcblx0XHRcdFx0XHRidXR0b24uYm9yZGVyQ29sb3IgPSBzZXR1cC5jb2xvclxuXHRcdFx0YnV0dG9uLmJhY2tncm91bmRDb2xvciA9IFwidHJhbnNwYXJlbnRcIlxuXHRcdFx0YnV0dG9uLmJvcmRlcldpZHRoID0gZXhwb3J0cy5weCgxKVxuXG5cblx0XHRlbHNlXG5cdFx0XHRidXR0b24uYmFja2dyb3VuZENvbG9yID0gXCJ0cmFuc3BhcmVudFwiXG5cdFx0XHRjb2xvciA9IHNldHVwLmNvbG9yXG5cdFx0XHRAZm9udFNpemUgPSBzZXR1cC5mb250U2l6ZVxuXHRcdFx0QGZvbnRXZWlnaHQgPSBzZXR1cC5mb250V2VpZ2h0XG5cblx0XHRcdGJ1dHRvbi5vbiBFdmVudHMuVG91Y2hTdGFydCwgLT5cblx0XHRcdFx0bmV3Q29sb3IgPSBidXR0b24uc3ViTGF5ZXJzWzBdLmNvbG9yLmxpZ2h0ZW4oMzApXG5cdFx0XHRcdGJ1dHRvbi5zdWJMYXllcnNbMF0uYW5pbWF0ZSBcblx0XHRcdFx0XHRwcm9wZXJ0aWVzOihjb2xvcjpuZXdDb2xvcilcblx0XHRcdFx0XHR0aW1lOi41XG5cdFx0XHRidXR0b24ub24gRXZlbnRzLlRvdWNoRW5kLCAtPlxuXHRcdFx0XHRidXR0b24uc3ViTGF5ZXJzWzBdLmFuaW1hdGVcblx0XHRcdFx0XHRwcm9wZXJ0aWVzOihjb2xvcjpzZXR1cC5jb2xvcilcblx0XHRcdFx0XHR0aW1lOi41XG5cblx0dGV4dExheWVyID0gbmV3IGV4cG9ydHMuVGV4dCBzdHlsZTpcImJ1dHRvbiN7c2V0dXAudHlwZX0je3NldHVwLnN0eWxlfVwiLCB0ZXh0OnNldHVwLnRleHQsIGNvbG9yOmNvbG9yLCBzdXBlckxheWVyOmJ1dHRvbiwgZm9udFNpemU6QGZvbnRTaXplLCBmb250V2VpZ2h0OkBmb250V2VpZ2h0XG5cdHRleHRMYXllci5jb25zdHJhaW50cyA9XG5cdFx0YWxpZ246XCJob3Jpem9udGFsXCJcblx0XHR0b3A6QHRvcFxuXHRzd2l0Y2ggc2V0dXAudHlwZSBcblx0XHR3aGVuIFwic21hbGxcIlxuXHRcdFx0YnV0dG9uLnByb3BzID0gKHdpZHRoOnRleHRMYXllci53aWR0aCArIGV4cG9ydHMucHgoNjApLCBoZWlnaHQ6IHRleHRMYXllci5oZWlnaHQgKyBleHBvcnRzLnB4KDEwKSlcblx0XHRcdGJ1dHRvbi5vbiBFdmVudHMuVG91Y2hTdGFydCwgLT5cblx0XHRcdFx0YnV0dG9uLmFuaW1hdGVcblx0XHRcdFx0XHRwcm9wZXJ0aWVzOihiYWNrZ3JvdW5kQ29sb3I6Y29sb3IpXG5cdFx0XHRcdFx0dGltZTouNVx0XG5cdFx0XHRcdHRleHRMYXllci5hbmltYXRlXG5cdFx0XHRcdFx0cHJvcGVydGllczooY29sb3I6XCIjRkZGXCIpXG5cdFx0XHRcdFx0dGltZTouNVxuXHRcdFx0YnV0dG9uLm9uIEV2ZW50cy5Ub3VjaEVuZCwgLT5cblx0XHRcdFx0YnV0dG9uLmFuaW1hdGVcblx0XHRcdFx0XHRwcm9wZXJ0aWVzOihiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiKVxuXHRcdFx0XHRcdHRpbWU6LjVcdFxuXHRcdFx0XHR0ZXh0TGF5ZXIuYW5pbWF0ZVxuXHRcdFx0XHRcdHByb3BlcnRpZXM6KGNvbG9yOmNvbG9yKVxuXHRcdFx0XHRcdHRpbWU6LjVcblx0XHRlbHNlIFxuXHRcdFx0YnV0dG9uLnByb3BzID0gKHdpZHRoOnRleHRMYXllci53aWR0aCwgaGVpZ2h0OnRleHRMYXllci5oZWlnaHQpXG5cdGV4cG9ydHMubGF5b3V0KClcblx0cmV0dXJuIGJ1dHRvblxuXG5leHBvcnRzLkxvY2tTY3JlZW4gPSAoYXJyYXkpIC0+XG5cdHN3aXRjaCBleHBvcnRzLmRldmljZVxuXHRcdHdoZW4gXCJpcGhvbmUtNnNcIiBcblx0XHRcdEB0aW1lRm9udFNpemUgPSA4OFxuXHRcdFx0QGRhdGVGb250U2l6ZSA9IDE5XG5cdFx0d2hlbiBcImlwaG9uZS02cy1wbHVzXCIgXG5cdFx0XHRAdGltZUZvbnRTaXplID0gODhcblx0XHRcdEBkYXRlRm9udFNpemUgPSAxOVxuXHRcdHdoZW4gXCJpcGhvbmUtNVwiIFxuXHRcdFx0QHRpbWVGb250U2l6ZSA9IDgwXG5cdFx0XHRAZGF0ZUZvbnRTaXplID0gMTlcblx0XHR3aGVuIFwiaXBhZC1taW5pLTRcIlxuXHRcdFx0QHRpbWVGb250U2l6ZSA9IDEyMFxuXHRcdFx0QGRhdGVGb250U2l6ZSA9IDI0XG5cdFx0d2hlbiBcImlwYWQtYWlyLTJcIlxuXHRcdFx0QHRpbWVGb250U2l6ZSA9IDEyMFxuXHRcdFx0QGRhdGVGb250U2l6ZSA9IDI0XG5cdFx0d2hlbiBcImlwYWQtcHJvXCJcblx0XHRcdEB0aW1lRm9udFNpemUgPSAxMjBcblx0XHRcdEBkYXRlRm9udFNpemUgPSAyNFxuXHRcdGVsc2UgXG5cdFx0XHRAdGltZUZvbnRTaXplID0gNTBcblx0XHRcdEBkYXRlRm9udFNpemUgPSAxOVxuXHRzZXR1cCA9IHNldHVwQ29tcG9uZW50KFwibG9ja1NjcmVlblwiLCBhcnJheSlcblx0QHRpbWUgPSBleHBvcnRzLmdldFRpbWUoKVxuXHRCRyA9IG5ldyBMYXllciBuYW1lOlwibG9ja1NjcmVlbiBCYWNrZ3JvdW5kXCIsIHdpZHRoOmV4cG9ydHMud2lkdGgsIGhlaWdodDpleHBvcnRzLmhlaWdodFxuXHRCRy50eXBlID0gXCJsb2NrU2NyZWVuXCJcblx0Qkcuc3R5bGVbXCJiYWNrZ3JvdW5kXCJdID0gXCJsaW5lYXItZ3JhZGllbnQoLTE4MGRlZywgIzAwQzREMCAwJSwgI0YzREFCQyAxMDAlKVwiXG5cdGlmIHNldHVwLnRpbWUgPT0gXCJkZWZhdWx0XCJcblx0XHRAdGltZUxheWVyID0gbmV3IGV4cG9ydHMuVGV4dCBzdHlsZTpcImxvY2tTY3JlZW5UaW1lXCIsIHRleHQ6ZXhwb3J0cy50aW1lRm9ybWF0dGVyKEB0aW1lLCBzZXR1cC5jbG9jazI0KSwgZm9udFNpemU6QHRpbWVGb250U2l6ZSwgZm9udFdlaWdodDpcInRoaW5cIiwgY29sb3I6XCJ3aGl0ZVwiLCBzdXBlckxheWVyOkJHXG5cdFx0ZXhwb3J0cy50aW1lRGVsZWdhdGUoQHRpbWVMYXllciwgc2V0dXAuY2xvY2syNClcblx0ZWxzZSAgXG5cdFx0QHRpbWVMYXllciA9IG5ldyBleHBvcnRzLlRleHQgc3R5bGU6XCJsb2NrU2NyZWVuVGltZVwiLCB0ZXh0OnNldHVwLnRpbWUsIGZvbnRTaXplOkB0aW1lRm9udFNpemUsIGZvbnRXZWlnaHQ6XCJ0aGluXCIsIGNvbG9yOlwid2hpdGVcIiwgc3VwZXJMYXllcjpCR1xuXHRAdGltZUxheWVyLmNvbnN0cmFpbnRzID0gXG5cdFx0YWxpZ246XCJob3Jpem9udGFsXCJcblx0XHR0b3A6NjBcblx0aWYgc2V0dXAuZGF0ZSA9PSBcImRlZmF1bHRcIlxuXHRcdEBkYXRlTGF5ZXIgPSBuZXcgZXhwb3J0cy5UZXh0IHN0eWxlOlwibG9ja1NjcmVlbkRhdGVcIiwgdGV4dDpAdGltZS5kYXkgKyBcIiwgXCIgKyBAdGltZS5tb250aCArIFwiIFwiICsgQHRpbWUuZGF0ZSwgZm9udFNpemU6QGRhdGVGb250U2l6ZSwgY29sb3I6XCJ3aGl0ZVwiLCBzdXBlckxheWVyOkJHXG5cdGVsc2Vcblx0XHRAZGF0ZUxheWVyID0gbmV3IGV4cG9ydHMuVGV4dCBzdHlsZTpcImxvY2tTY3JlZW5EYXRlXCIsIHRleHQ6c2V0dXAuZGF0ZSwgZm9udFNpemU6QGRhdGVGb250U2l6ZSwgY29sb3I6XCJ3aGl0ZVwiLCBzdXBlckxheWVyOkJHXG5cdEBkYXRlTGF5ZXIuY29uc3RyYWludHMgPVxuXHRcdGhvcml6b250YWxDZW50ZXI6QHRpbWVMYXllclxuXHRcdHRvcDpbQHRpbWVMYXllcl1cblx0c2xpZGVUb1VubG9jayA9IG5ldyBleHBvcnRzLlRleHQgc3R5bGU6XCJsb2NrU2NyZWVuU2xpZGVcIiwgdGV4dDpcInNsaWRlIHRvIHVubG9ja1wiLCBmb250U2l6ZToyNCwgZm9udFdlaWdodDpcIm1lZGl1bVwiLCBvcGFjaXR5Oi41LCBzdXBlckxheWVyOkJHXG5cdHNsaWRlVG9VbmxvY2suY29uc3RyYWludHMgPSBcblx0XHRhbGlnbjpcImhvcml6b250YWxcIlxuXHRcdGJvdHRvbTo3MFxuXG5cdGFycm93ID0gbmV3IExheWVyIGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCJcblx0YXJyb3cuaHRtbCA9IFwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdFx0PHN2ZyB3aWR0aD0nI3tleHBvcnRzLnB4KDExKX1weCcgaGVpZ2h0PScje2V4cG9ydHMucHgoMjQpfXB4JyB2aWV3Qm94PScwIDAgMTEgMjQnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayc+XG5cdFx0ICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy42LjEgKDI2MzEzKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHQgICAgPHRpdGxlPlNsaWRlIHRvIFVubG9jayBBcnJvdzwvdGl0bGU+XG5cdFx0ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdCAgICA8ZGVmcz48L2RlZnM+XG5cdFx0ICAgIDxnIGlkPSdQYWdlLTEnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnPlxuXHRcdCAgICAgICAgPGcgaWQ9J2lQaG9uZS02LzZTLUxvY2stU2NyZWVuJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtOTIuMDAwMDAwLCAtNTk3LjAwMDAwMCknIGZpbGw9JyMwMDAwMDAnPlxuXHRcdCAgICAgICAgICAgIDxnIGlkPSdTbGlkZS10by1VbmxvY2snIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDkyLjAwMDAwMCwgNTk3LjAwMDAwMCknPlxuXHRcdCAgICAgICAgICAgICAgICA8cGF0aCBkPSdNMTAuOTg3NzMyNCwxMi4wMjU3NDIyIEwyLjE5NjI5MDU4LDAuNzkzOTA4MjA2IEMxLjg1MjQwNDM4LDAuMzUzNzUzOTQ5IDEuMjIzMjE3MDgsMC4yNzU2NDEwMzEgMC43ODgwMTA3NTQsMC42MTU2NjE0NzUgQzAuMzQ5NzcwMjUzLDAuOTU4MDUyNDc5IDAuMjc3NzAzOTIyLDEuNTg2NzY3NzYgMC42MjAyNjkwNywyLjAyNTIzMTE2IEw4LjQzMzUyNDU1LDEyLjAyNTc0MjEgTDAuNjIwMjY5MDcsMjIuMDI2MjUzMSBDMC4yNzc3MDM5MjIsMjIuNDY0NzE2NSAwLjM0OTc3MDI1MywyMy4wOTM0MzE4IDAuNzg4MDEwNzU0LDIzLjQzNTgyMjggQzEuMjIzMjE3MDgsMjMuNzc1ODQzMiAxLjg1MjQwNDM4LDIzLjY5NzczMDMgMi4xOTYyOTA1OCwyMy4yNTc1NzYgTDEwLjk4NzczMjQsMTIuMDI1NzQyMiBaJyBpZD0nU2xpZGUtdG8tVW5sb2NrLUFycm93Jz48L3BhdGg+XG5cdFx0ICAgICAgICAgICAgPC9nPlxuXHRcdCAgICAgICAgPC9nPlxuXHRcdCAgICA8L2c+XG5cdFx0PC9zdmc+XCJcblx0YXJyb3cuY29uc3RyYWludHMgPSBcblx0XHRoZWlnaHQ6MjRcblx0XHR3aWR0aDoxMVxuXHRcdHZlcnRpY2FsQ2VudGVyOnNsaWRlVG9VbmxvY2tcblx0XHR0cmFpbGluZzpbc2xpZGVUb1VubG9jaywgMTJdXG5cdGV4cG9ydHMubGF5b3V0KClcblxuXG5leHBvcnRzLlN0YXR1c0JhciA9IChhcnJheSkgLT5cblx0c2V0dXAgPSBzZXR1cENvbXBvbmVudChcInN0YXR1c0JhclwiLCBhcnJheSlcblx0c3RhdHVzQmFyQkcgPSBuZXcgTGF5ZXIgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIiwgbmFtZTpcInN0YXR1c0Jhci5hbGxcIlxuXHRzdGF0dXNCYXJCRy5jb25zdHJhaW50cyA9IFxuXHRcdGxlYWRpbmc6MFxuXHRcdHRyYWlsaW5nOjBcblx0XHRoZWlnaHQ6MjBcblx0c3dpdGNoIGV4cG9ydHMuZGV2aWNlXG5cdFx0d2hlbiBcImlwaG9uZS02cy1wbHVzXCJcblx0XHRcdEB0b3BDb25zdHJhaW50ID0gNVxuXHRcdGVsc2Vcblx0XHRcdEB0b3BDb25zdHJhaW50ID0gM1xuXHRpZiBzZXR1cC5zdHlsZSA9PSBcImxpZ2h0XCJcblx0XHRAY29sb3IgPSBcIndoaXRlXCJcblx0ZWxzZVxuXHRcdEBjb2xvciA9IFwiYmxhY2tcIlxuXHRmb3IgbGF5ZXIgaW4gRnJhbWVyLkN1cnJlbnRDb250ZXh0LmxheWVyc1xuXHRcdGlmIGxheWVyLnR5cGUgPT0gXCJsb2NrU2NyZWVuXCJcblx0XHRcdEBpc0xvY2tTY3JlZW5QcmVzZW50ID0gdHJ1ZVxuXHRpZiBAaXNMb2NrU2NyZWVuUHJlc2VudFxuXHRcdGdyaXBwZXIgPSBuZXcgTGF5ZXIgc3VwZXJMYXllcjpzdGF0dXNCYXJCRywgd2lkdGg6ZXhwb3J0cy5weCgzNyksIGhlaWdodDpleHBvcnRzLnB4KDUpLCBuYW1lOlwiZ3JpcHBlclwiLCBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiLCBvcGFjaXR5Oi41LCBuYW1lOlwiZ3JpcHBlclwiXG5cdFx0Z3JpcHBlci5odG1sID0gXCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0XHRcdDxzdmcgd2lkdGg9JyN7ZXhwb3J0cy5weCgzNyl9cHgnIGhlaWdodD0nI3tleHBvcnRzLnB4KDUpfXB4JyB2aWV3Qm94PScwIDAgMzcgNScgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJz5cblx0XHRcdCAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNi4xICgyNjMxMykgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdFx0XHQgICAgPHRpdGxlPkdyaXBwZXI8L3RpdGxlPlxuXHRcdFx0ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdFx0ICAgIDxkZWZzPjwvZGVmcz5cblx0XHRcdCAgICA8ZyBpZD0nUGFnZS0xJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJz5cblx0XHRcdCAgICAgICAgPGcgaWQ9J0tleWJvYXJkL0F1dG8tQ29tcGxldGUtQmFyLUNsb3NlZCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTE2OS4wMDAwMDAsIC0yLjAwMDAwMCknIGZpbGw9JyNGRkZGRkYnPlxuXHRcdFx0ICAgICAgICAgICAgPHJlY3QgaWQ9J0dyaXBwZXInIHg9JzE2OS41JyB5PScyLjUnIHdpZHRoPSczNicgaGVpZ2h0PSc0JyByeD0nMi41Jz48L3JlY3Q+XG5cdFx0XHQgICAgICAgIDwvZz5cblx0XHRcdCAgICA8L2c+XG5cdFx0XHQ8L3N2Zz5cIlxuXHRcdGdyaXBwZXIuY29uc3RyYWludHMgPSBcblx0XHRcdGFsaWduOlwiaG9yaXpvbnRhbFwiXG5cdFx0XHR0b3A6MlxuXHRlbHNlIFxuXHRcdEB0aW1lID0gZXhwb3J0cy5nZXRUaW1lKClcblx0XHRpZiBzZXR1cC5jbG9jazI0ID09IGZhbHNlXG5cdFx0XHRpZiBAdGltZS5ob3VycyA+IDExIFxuXHRcdFx0XHRAdGltZS5zdGFtcCA9IFwiUE1cIlxuXHRcdFx0ZWxzZVxuXHRcdFx0XHRAdGltZS5zdGFtcCA9IFwiQU1cIlxuXHRcdGVsc2Vcblx0XHRcdEB0aW1lLnN0YW1wID0gXCJcIlxuXHRcdHRpbWUgPSBuZXcgZXhwb3J0cy5UZXh0IHN0eWxlOlwic3RhdHVzQmFyVGltZVwiLCB0ZXh0OmV4cG9ydHMudGltZUZvcm1hdHRlcihAdGltZSwgc2V0dXAuY2xvY2syNCkgKyBcIiBcIiArIEB0aW1lLnN0YW1wLCBmb250U2l6ZToxMiwgZm9udFdlaWdodDpcInNlbWlib2xkXCIsIHN1cGVyTGF5ZXI6c3RhdHVzQmFyQkcsIGNvbG9yOkBjb2xvciwgbmFtZTpcInRpbWVcIlxuXHRcdHRpbWUuY29uc3RyYWludHMgPVxuXHRcdFx0YWxpZ246XCJjZW50ZXJcIlxuXHRzaWduYWwgPSBbXVxuXHRpZiBzZXR1cC5zaWduYWwgPCAxXG5cdFx0bm9OZXR3b3JrID0gbmV3IGV4cG9ydHMuVGV4dCBzdXBlckxheWVyOnN0YXR1c0JhckJHLCBmb250U2l6ZToxMiwgdGV4dDpcIk5vIE5ldHdvcmtcIlxuXHRcdG5vTmV0d29yay5jb25zdHJhaW50cyA9XG5cdFx0XHRsZWFkaW5nOjdcblx0XHRcdHRvcDozXG5cdGVsc2Vcblx0XHRmb3IgaSBpbiBbMC4uLnNldHVwLnNpZ25hbF1cblx0XHRcdGRvdCA9IG5ldyBMYXllciBoZWlnaHQ6ZXhwb3J0cy5weCg1LjUpLCB3aWR0aDpleHBvcnRzLnB4KDUuNSksIGJhY2tncm91bmRDb2xvcjpcImJsYWNrXCIsIHN1cGVyTGF5ZXI6c3RhdHVzQmFyQkcsIGJvcmRlclJhZGl1czpleHBvcnRzLnB4KDUuNSkvMiwgYmFja2dyb3VuZENvbG9yOkBjb2xvciwgbmFtZTpcInNpZ25hbFsje2l9XVwiXG5cdFx0XHRpZiBpID09IDBcblx0XHRcdFx0ZG90LmNvbnN0cmFpbnRzID1cblx0XHRcdFx0XHRsZWFkaW5nOjdcblx0XHRcdFx0XHR0b3A6N1x0XG5cdFx0XHRlbHNlXG5cdFx0XHRcdGRvdC5jb25zdHJhaW50cyA9XG5cdFx0XHRcdFx0bGVhZGluZzpbc2lnbmFsW2kgLSAxIF0sIDFdXG5cdFx0XHRcdFx0dG9wOjdcdFx0XHRcdFx0XG5cdFx0XHRzaWduYWwucHVzaCBkb3QgXG5cdFx0XHRleHBvcnRzLmxheW91dCgpXG5cdFx0aWYgc2V0dXAuc2lnbmFsIDwgNVxuXHRcdFx0bm9uRG90cyA9IDUgLSBzZXR1cC5zaWduYWxcblx0XHRcdGZvciBpIGluIFswLi4ubm9uRG90c11cblx0XHRcdFx0bm9uRG90ID0gbmV3IExheWVyIGhlaWdodDpleHBvcnRzLnB4KDUuNSksIHdpZHRoOmV4cG9ydHMucHgoNS41KSwgc3VwZXJMYXllcjpzdGF0dXNCYXJCRywgYm9yZGVyUmFkaXVzOmV4cG9ydHMucHgoNS41KS8yLCBiYWNrZ3JvdW5kQ29sb3I6XCJ3aGl0ZVwiLCBuYW1lOlwic2lnbmFsWyN7c2lnbmFsLmxlbmd0aH1dXCJcblx0XHRcdFx0bm9uRG90LnN0eWxlLmJvcmRlciA9IFwiI3tleHBvcnRzLnB4KDEpfXB4IHNvbGlkICN7QGNvbG9yfVwiXG5cdFx0XHRcdG5vbkRvdC5jb25zdHJhaW50cyA9XG5cdFx0XHRcdFx0bGVhZGluZzpbc2lnbmFsW3NpZ25hbC5sZW5ndGggLSAxXSwgMV1cblx0XHRcdFx0XHR0b3A6N1xuXHRcdFx0XHRzaWduYWwucHVzaCBub25Eb3Rcblx0XHRcdFx0ZXhwb3J0cy5sYXlvdXQoKVx0XG5cdFx0Y2FycmllciA9IG5ldyBleHBvcnRzLlRleHQgc3R5bGU6XCJzdGF0dXNCYXJDYXJyaWVyXCIsIHRleHQ6c2V0dXAuY2Fycmllciwgc3VwZXJMYXllcjpzdGF0dXNCYXJCRywgZm9udFNpemU6MTIsIGNvbG9yOkBjb2xvciwgbmFtZTpcImNhcnJpZXJcIiwgdGV4dFRyYW5zZm9ybTpcImNhcGl0YWxpemVcIlxuXHRcdGNhcnJpZXIuY29uc3RyYWludHMgPSBcblx0XHRcdGxlYWRpbmc6W3NpZ25hbFtzaWduYWwubGVuZ3RoIC0gMV0sIDddXG5cdFx0XHR0b3A6M1xuXHRcdGV4cG9ydHMubGF5b3V0KClcblx0XHRpZiBzZXR1cC5jYXJyaWVyXG5cdFx0XHRuZXR3b3JrID0gbmV3IGV4cG9ydHMuVGV4dCBzdHlsZTpcInN0YXR1c0Jhck5ldHdvcmtcIiwgdGV4dDpzZXR1cC5uZXR3b3JrLCBzdXBlckxheWVyOnN0YXR1c0JhckJHLCBmb250U2l6ZToxMiwgY29sb3I6QGNvbG9yLCBuYW1lOlwibmV0d29ya1wiLCB0ZXh0VHJhbnNmb3JtOlwidXBwZXJjYXNlXCJcblx0XHRcdG5ldHdvcmsuY29uc3RyYWludHMgPVxuXHRcdFx0XHRsZWFkaW5nOltjYXJyaWVyLCA1XVxuXHRcdFx0XHR0b3A6M1xuXHRcdGlmIHNldHVwLmNhcnJpZXIgPT0gXCJcIiB8fCBzZXR1cC5jYXJyaWVyID09IFwid2lmaVwiXG5cdFx0XHRuZXR3b3JrID0gbmV3IExheWVyIHdpZHRoOmV4cG9ydHMucHgoMTQpLCBoZWlnaHQ6ZXhwb3J0cy5weCgxMCksIHN1cGVyTGF5ZXI6c3RhdHVzQmFyQkcsIGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCIsIG5hbWU6XCJuZXR3b3JrXCJcblx0XHRcdG5ldHdvcmsuaHRtbCA9IFwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdFx0XHRcdDxzdmcgd2lkdGg9JyN7ZXhwb3J0cy5weCgxNCl9cHgnIGhlaWdodD0nI3tleHBvcnRzLnB4KDEwKX1weCcgdmlld0JveD0nMCAwIDE0IDEwJyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnPlxuXHRcdFx0XHQgICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjYuMSAoMjYzMTMpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdFx0XHQgICAgPHRpdGxlPldpLUZpPC90aXRsZT5cblx0XHRcdFx0ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdFx0XHQgICAgPGRlZnM+PC9kZWZzPlxuXHRcdFx0XHQgICAgPGcgaWQ9J1BhZ2UtMScgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCc+XG5cdFx0XHRcdCAgICAgICAgPGcgaWQ9J1N0YXR1cy1CYXIvQmxhY2svQ2hhcmdpbmcnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC04Ny4wMDAwMDAsIC01LjAwMDAwMCknIGZpbGw9JyN7QGNvbG9yfSc+XG5cdFx0XHRcdCAgICAgICAgICAgIDxwYXRoIGQ9J005Ni4xNDQ0MjA4LDEyLjQzODUwNDMgQzk1LjYyNjM3NCwxMS44NDU0NDU2IDk0Ljg1MjM2MTYsMTEuNDY4OTExOSA5My45ODc1NjMsMTEuNDY4OTExOSBDOTMuMTM5MDA3MywxMS40Njg5MTE5IDkyLjM3Nzg1OTQsMTEuODMxNDM0MSA5MS44NjAxNjUyLDEyLjQwNTMxNzcgTDk0LjAyMjUzOTEsMTQuNSBMOTYuMTQ0NDIwOCwxMi40Mzg1MDQzIFogTTk4LjMyMzQ5NjQsMTAuMzIxNDQyNSBDOTcuMjQ0Nzc5NCw5LjE5MTc0NTYzIDk1LjcwMTQzODcsOC40ODQ0NTU5NiA5My45ODc1NjMsOC40ODQ0NTU5NiBDOTIuMjg4MjcyMyw4LjQ4NDQ1NTk2IDkwLjc1NjYyNjQsOS4xNzk3NTg5MyA4OS42NzkyNjk4LDEwLjI5MjY5MzYgTDkwLjc2OTI5ODcsMTEuMzQ4NiBDOTEuNTY3MjA1LDEwLjUwNTM3MDggOTIuNzEzNjQ4LDkuOTc2NjgzOTQgOTMuOTg3NTYzLDkuOTc2NjgzOTQgQzk1LjI3Njg4MzYsOS45NzY2ODM5NCA5Ni40MzU2MzA1LDEwLjUxODIzNSA5Ny4yMzQ2MjE1LDExLjM3OTMyOTMgTDk4LjMyMzQ5NjQsMTAuMzIxNDQyNSBMOTguMzIzNDk2NCwxMC4zMjE0NDI1IFogTTEwMC41LDguMjA2ODc5MzMgQzk4Ljg2Mjk1NzgsNi41Mzk0MzY3MiA5Ni41NTA1Njk5LDUuNSA5My45ODc1NjMsNS41IEM5MS40Mzc1MTAzLDUuNSA4OS4xMzU1NDk2LDYuNTI4OTU2MDUgODcuNSw4LjE4MTY0NDMxIEw4OC41ODk1NTc5LDkuMjM3MDk0NDEgQzg5Ljk0NjA3OTgsNy44NTQzMTY1NSA5MS44NjI4OTIxLDYuOTkyMjI3OTggOTMuOTg3NTYzLDYuOTkyMjI3OTggQzk2LjEyNjAwMjYsNi45OTIyMjc5OCA5OC4wNTM4ODA5LDcuODY1NTI2MDkgOTkuNDExODY5OCw5LjI2NDA0MjcyIEwxMDAuNSw4LjIwNjg3OTMzIFonIGlkPSdXaS1GaSc+PC9wYXRoPlxuXHRcdFx0XHQgICAgICAgIDwvZz5cblx0XHRcdFx0ICAgIDwvZz5cblx0XHRcdFx0PC9zdmc+XCJcblx0XHRcdG5ldHdvcmsuY29uc3RyYWludHMgPSBcblx0XHRcdFx0bGVhZGluZzpbc2lnbmFsW3NpZ25hbC5sZW5ndGggLSAxXSwgN11cblx0XHRcdFx0dG9wOkB0b3BDb25zdHJhaW50XG5cdGJhdHRlcnlJY29uID0gbmV3IExheWVyIHdpZHRoOmV4cG9ydHMucHgoMjUpLCBoZWlnaHQ6ZXhwb3J0cy5weCgxMCksIHN1cGVyTGF5ZXI6c3RhdHVzQmFyQkcsIGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCIsIG5hbWU6XCJiYXR0ZXJ5SWNvblwiXG5cdGlmIHNldHVwLmJhdHRlcnkgPiA3MCBcblx0XHRiYXR0ZXJ5SWNvbi5odG1sID0gXCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0XHRcdDxzdmcgd2lkdGg9JyN7ZXhwb3J0cy5weCgyNSl9cHgnIGhlaWdodD0nI3tleHBvcnRzLnB4KDEwKX1weCcgdmlld0JveD0nMCAwIDI1IDEwJyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnPlxuXHRcdFx0ICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy42LjEgKDI2MzEzKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHRcdCAgICA8dGl0bGU+QmF0dGVyeTwvdGl0bGU+XG5cdFx0XHQgICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0XHQgICAgPGRlZnM+PC9kZWZzPlxuXHRcdFx0ICAgIDxnIGlkPSdQYWdlLTEnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnPlxuXHRcdFx0ICAgICAgICA8ZyBpZD0nU3RhdHVzLUJhci9CbGFjay8xMDAlJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtMzQ1LjAwMDAwMCwgLTUuMDAwMDAwKScgZmlsbD0nI3tAY29sb3J9Jz5cblx0XHRcdCAgICAgICAgICAgIDxwYXRoIGQ9J00zNDYuNDkzNzEzLDUuNSBDMzQ1LjY2ODc1OCw1LjUgMzQ1LDYuMTY4MDIxNTUgMzQ1LDcuMDA1MzAzMjQgTDM0NSwxMy40OTQ2OTY4IEMzNDUsMTQuMzI2MDUyOCAzNDUuNjczMzgsMTUgMzQ2LjQ5MzcxMywxNSBMMzY2LjAwNjI4NywxNSBDMzY2LjgzMTI0MiwxNSAzNjcuNSwxNC4zMzE5Nzg0IDM2Ny41LDEzLjQ5NDY5NjggTDM2Ny41LDcuMDA1MzAzMjQgQzM2Ny41LDYuMTczOTQ3MjIgMzY2LjgyNjYyLDUuNSAzNjYuMDA2Mjg3LDUuNSBMMzQ2LjQ5MzcxMyw1LjUgWiBNMzY4LDguNSBMMzY4LDEyIEwzNjguNzUsMTIgQzM2OS4xNjQyMTQsMTIgMzY5LjUsMTEuNjY0NDA1MyAzNjkuNSwxMS4yNTc3NCBMMzY5LjUsOS4yNDIyNTk5OCBDMzY5LjUsOC44MzIzMjExMSAzNjkuMTY3MTAxLDguNSAzNjguNzUsOC41IEwzNjgsOC41IFogTTM0Ni41MDgxNTIsNiBDMzQ1Ljk1MTM2NSw2IDM0NS41LDYuNDU2OTk2OTIgMzQ1LjUsNy4wMDg0NDA1NSBMMzQ1LjUsMTMuNDkxNTU5NCBDMzQ1LjUsMTQuMDQ4NTA1OCAzNDUuOTQ5MDU4LDE0LjUgMzQ2LjUwODE1MiwxNC41IEwzNjUuOTkxODQ4LDE0LjUgQzM2Ni41NDg2MzUsMTQuNSAzNjcsMTQuMDQzMDAzMSAzNjcsMTMuNDkxNTU5NCBMMzY3LDcuMDA4NDQwNTUgQzM2Nyw2LjQ1MTQ5NDIyIDM2Ni41NTA5NDIsNiAzNjUuOTkxODQ4LDYgTDM0Ni41MDgxNTIsNiBaIE0zNDYuNTA2NzQ0LDYuNSBDMzQ2LjIyNjg3Nyw2LjUgMzQ2LDYuNzE2MzcyMDEgMzQ2LDYuOTkyMDk1OTUgTDM0NiwxMy41MDc5MDQxIEMzNDYsMTMuNzc5NjgxMSAzNDYuMjMwMjI1LDE0IDM0Ni41MDY3NDQsMTQgTDM2NS45OTMyNTYsMTQgQzM2Ni4yNzMxMjMsMTQgMzY2LjUsMTMuNzgzNjI4IDM2Ni41LDEzLjUwNzkwNDEgTDM2Ni41LDYuOTkyMDk1OTUgQzM2Ni41LDYuNzIwMzE4ODYgMzY2LjI2OTc3NSw2LjUgMzY1Ljk5MzI1Niw2LjUgTDM0Ni41MDY3NDQsNi41IFonIGlkPSdCYXR0ZXJ5Jz48L3BhdGg+XG5cdFx0XHQgICAgICAgIDwvZz5cblx0XHRcdCAgICA8L2c+XG5cdFx0XHQ8L3N2Zz5cIlxuXHRpZiBzZXR1cC5iYXR0ZXJ5IDw9IDcwICYmIHNldHVwLmJhdHRlcnkgPiAyMFxuXHRcdGJhdHRlcnlJY29uLmh0bWwgPSBcIjw/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyc/PlxuXHRcdFx0PHN2ZyB3aWR0aD0nI3tleHBvcnRzLnB4KDI1KX1weCcgaGVpZ2h0PScje2V4cG9ydHMucHgoMTApfXB4JyB2aWV3Qm94PScwIDAgMjUgMTAnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayc+XG5cdFx0XHQgICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjYuMSAoMjYzMTMpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdFx0ICAgIDx0aXRsZT5CYXR0ZXJ5PC90aXRsZT5cblx0XHRcdCAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHRcdCAgICA8ZGVmcz48L2RlZnM+XG5cdFx0XHQgICAgPGcgaWQ9J1BhZ2UtMScgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCc+XG5cdFx0XHQgICAgICAgIDxnIGlkPSdTdGF0dXMtQmFyL1doaXRlLzEwMCUnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC0zNDUuMDAwMDAwLCAtNS4wMDAwMDApJyBmaWxsPScje0Bjb2xvcn0nPlxuXHRcdFx0ICAgICAgICAgICAgPHBhdGggZD0nTTM0Ni40OTM3MTMsNS41IEMzNDUuNjY4NzU4LDUuNSAzNDUsNi4xNjgwMjE1NSAzNDUsNy4wMDUzMDMyNCBMMzQ1LDEzLjQ5NDY5NjggQzM0NSwxNC4zMjYwNTI4IDM0NS42NzMzOCwxNSAzNDYuNDkzNzEzLDE1IEwzNjYuMDA2Mjg3LDE1IEMzNjYuODMxMjQyLDE1IDM2Ny41LDE0LjMzMTk3ODQgMzY3LjUsMTMuNDk0Njk2OCBMMzY3LjUsNy4wMDUzMDMyNCBDMzY3LjUsNi4xNzM5NDcyMiAzNjYuODI2NjIsNS41IDM2Ni4wMDYyODcsNS41IEwzNDYuNDkzNzEzLDUuNSBaIE0zNjgsOC41IEwzNjgsMTIgTDM2OC43NSwxMiBDMzY5LjE2NDIxNCwxMiAzNjkuNSwxMS42NjQ0MDUzIDM2OS41LDExLjI1Nzc0IEwzNjkuNSw5LjI0MjI1OTk4IEMzNjkuNSw4LjgzMjMyMTExIDM2OS4xNjcxMDEsOC41IDM2OC43NSw4LjUgTDM2OCw4LjUgWiBNMzQ2LjUwODE1Miw2IEMzNDUuOTUxMzY1LDYgMzQ1LjUsNi40NTY5OTY5MiAzNDUuNSw3LjAwODQ0MDU1IEwzNDUuNSwxMy40OTE1NTk0IEMzNDUuNSwxNC4wNDg1MDU4IDM0NS45NDkwNTgsMTQuNSAzNDYuNTA4MTUyLDE0LjUgTDM2NS45OTE4NDgsMTQuNSBDMzY2LjU0ODYzNSwxNC41IDM2NywxNC4wNDMwMDMxIDM2NywxMy40OTE1NTk0IEwzNjcsNy4wMDg0NDA1NSBDMzY3LDYuNDUxNDk0MjIgMzY2LjU1MDk0Miw2IDM2NS45OTE4NDgsNiBMMzQ2LjUwODE1Miw2IFogTTM0Ni41MDEyMzEsNi41IEMzNDYuMjI0NDA5LDYuNSAzNDYsNi43MTYzNzIwMSAzNDYsNi45OTIwOTU5NSBMMzQ2LDEzLjUwNzkwNDEgQzM0NiwxMy43Nzk2ODExIDM0Ni4yMjk3NTEsMTQgMzQ2LjUwMTIzMSwxNCBMMzU2LjQ5ODc2OSwxNCBDMzU2Ljc3NTU5MSwxNCAzNTcsMTMuNzgzNjI4IDM1NywxMy41MDc5MDQxIEwzNTcsNi45OTIwOTU5NSBDMzU3LDYuNzIwMzE4ODYgMzU2Ljc3MDI0OSw2LjUgMzU2LjQ5ODc2OSw2LjUgTDM0Ni41MDEyMzEsNi41IFonIGlkPSdCYXR0ZXJ5Jz48L3BhdGg+XG5cdFx0XHQgICAgICAgIDwvZz5cblx0XHRcdCAgICA8L2c+XG5cdFx0XHQ8L3N2Zz5cIlxuXHRpZiBzZXR1cC5iYXR0ZXJ5IDw9IDIwXG5cdFx0YmF0dGVyeUljb24uaHRtbCA9IFwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdFx0XHQ8c3ZnIHdpZHRoPScje2V4cG9ydHMucHgoMjUpfXB4JyBoZWlnaHQ9JyN7ZXhwb3J0cy5weCgxMCl9cHgnIHZpZXdCb3g9JzAgMCAyNSAxMCcgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJz5cblx0XHRcdCAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNi4xICgyNjMxMykgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdFx0XHQgICAgPHRpdGxlPkJhdHRlcnk8L3RpdGxlPlxuXHRcdFx0ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdFx0ICAgIDxkZWZzPjwvZGVmcz5cblx0XHRcdCAgICA8ZyBpZD0nUGFnZS0xJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJz5cblx0XHRcdCAgICAgICAgPGcgaWQ9J1N0YXR1cy1CYXIvV2hpdGUvMTAwJScgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTM0NS4wMDAwMDAsIC01LjAwMDAwMCknIGZpbGw9JyN7QGNvbG9yfSc+XG5cdFx0XHQgICAgICAgICAgICA8cGF0aCBkPSdNMzQ2LjQ5MzcxMyw1LjUgQzM0NS42Njg3NTgsNS41IDM0NSw2LjE2ODAyMTU1IDM0NSw3LjAwNTMwMzI0IEwzNDUsMTMuNDk0Njk2OCBDMzQ1LDE0LjMyNjA1MjggMzQ1LjY3MzM4LDE1IDM0Ni40OTM3MTMsMTUgTDM2Ni4wMDYyODcsMTUgQzM2Ni44MzEyNDIsMTUgMzY3LjUsMTQuMzMxOTc4NCAzNjcuNSwxMy40OTQ2OTY4IEwzNjcuNSw3LjAwNTMwMzI0IEMzNjcuNSw2LjE3Mzk0NzIyIDM2Ni44MjY2Miw1LjUgMzY2LjAwNjI4Nyw1LjUgTDM0Ni40OTM3MTMsNS41IFogTTM2OCw4LjUgTDM2OCwxMiBMMzY4Ljc1LDEyIEMzNjkuMTY0MjE0LDEyIDM2OS41LDExLjY2NDQwNTMgMzY5LjUsMTEuMjU3NzQgTDM2OS41LDkuMjQyMjU5OTggQzM2OS41LDguODMyMzIxMTEgMzY5LjE2NzEwMSw4LjUgMzY4Ljc1LDguNSBMMzY4LDguNSBaIE0zNDYuNTA4MTUyLDYgQzM0NS45NTEzNjUsNiAzNDUuNSw2LjQ1Njk5NjkyIDM0NS41LDcuMDA4NDQwNTUgTDM0NS41LDEzLjQ5MTU1OTQgQzM0NS41LDE0LjA0ODUwNTggMzQ1Ljk0OTA1OCwxNC41IDM0Ni41MDgxNTIsMTQuNSBMMzY1Ljk5MTg0OCwxNC41IEMzNjYuNTQ4NjM1LDE0LjUgMzY3LDE0LjA0MzAwMzEgMzY3LDEzLjQ5MTU1OTQgTDM2Nyw3LjAwODQ0MDU1IEMzNjcsNi40NTE0OTQyMiAzNjYuNTUwOTQyLDYgMzY1Ljk5MTg0OCw2IEwzNDYuNTA4MTUyLDYgWiBNMzQ2LjQ5MDQ3OSw2LjUgQzM0Ni4yMTk1OTUsNi41IDM0Niw2LjcxNjM3MjAxIDM0Niw2Ljk5MjA5NTk1IEwzNDYsMTMuNTA3OTA0MSBDMzQ2LDEzLjc3OTY4MTEgMzQ2LjIxNTA1NywxNCAzNDYuNDkwNDc5LDE0IEwzNDkuNTA5NTIxLDE0IEMzNDkuNzgwNDA1LDE0IDM1MCwxMy43ODM2MjggMzUwLDEzLjUwNzkwNDEgTDM1MCw2Ljk5MjA5NTk1IEMzNTAsNi43MjAzMTg4NiAzNDkuNzg0OTQzLDYuNSAzNDkuNTA5NTIxLDYuNSBMMzQ2LjQ5MDQ3OSw2LjUgWicgaWQ9J0JhdHRlcnknPjwvcGF0aD5cblx0XHRcdCAgICAgICAgPC9nPlxuXHRcdFx0ICAgIDwvZz5cblx0XHRcdDwvc3ZnPlwiXG5cdGJhdHRlcnlJY29uLmNvbnN0cmFpbnRzID1cblx0XHR0cmFpbGluZyA6IDdcblx0XHR0b3A6QHRvcENvbnN0cmFpbnRcblx0YmF0dGVyeVBlcmNlbnQgPSBuZXcgZXhwb3J0cy5UZXh0IHN0eWxlOlwic3RhdHVzQmFyQmF0dGVyeVBlcmNlbnRcIiwgdGV4dDpzZXR1cC5iYXR0ZXJ5ICsgXCIlXCIsIHN1cGVyTGF5ZXI6c3RhdHVzQmFyQkcsIGZvbnRTaXplOjEyLCBjb2xvcjpAY29sb3IsIG5hbWU6XCJiYXR0ZXJ5UGVyY2VudFwiXG5cdGJhdHRlcnlQZXJjZW50LmNvbnN0cmFpbnRzID0gXG5cdFx0dHJhaWxpbmc6IFtiYXR0ZXJ5SWNvbiwgM11cblx0XHR0b3A6M1xuXHRibHVldG9vdGggPSBuZXcgTGF5ZXIgd2lkdGg6ZXhwb3J0cy5weCg4KSwgaGVpZ2h0OmV4cG9ydHMucHgoMTUpLCBzdXBlckxheWVyOnN0YXR1c0JhckJHLCBvcGFjaXR5Oi41LCBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiLCBuYW1lOlwiYmx1ZXRvb3RoXCJcblx0Ymx1ZXRvb3RoLmh0bWwgPSBcIjw/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyc/PlxuXHRcdDxzdmcgd2lkdGg9JyN7ZXhwb3J0cy5weCg4KX1weCcgaGVpZ2h0PScje2V4cG9ydHMucHgoMTUpfXB4JyB2aWV3Qm94PScwIDAgOCAxNScgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJz5cblx0XHQgICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjYuMSAoMjYzMTMpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdCAgICA8dGl0bGU+Qmx1ZXRvb3RoPC90aXRsZT5cblx0XHQgICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0ICAgIDxkZWZzPjwvZGVmcz5cblx0XHQgICAgPGcgaWQ9J1BhZ2UtMScgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCc+XG5cdFx0ICAgICAgICA8ZyBpZD0nU3RhdHVzLUljb25zLShXaGl0ZSknIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC0xMzcuMDAwMDAwLCAwLjAwMDAwMCknIGZpbGw9JyN7QGNvbG9yfSc+XG5cdFx0ICAgICAgICAgICAgPHBhdGggZD0nTTE0MC41LDE0LjUgTDE0NSwxMC4yNSBMMTQxLjgsNy41IEwxNDUsNC43NSBMMTQwLjUsMC41IEwxNDAuNSw2LjA3MTQyODU3IEwxMzcuOCwzLjc1IEwxMzcsNC41IEwxNDAuMjU4MzMzLDcuMzc1IEwxMzcsMTAuMjUgTDEzNy44LDExIEwxNDAuNSw4LjY3ODU3MTQzIEwxNDAuNSwxNC41IFogTTE0MS41LDMgTDE0My4zNjY2NjcsNC43NSBMMTQxLjUsNi4yNSBMMTQxLjUsMyBaIE0xNDEuNSw4LjUgTDE0My4zNjY2NjcsMTAuMjUgTDE0MS41LDEyIEwxNDEuNSw4LjUgWicgaWQ9J0JsdWV0b290aCc+PC9wYXRoPlxuXHRcdCAgICAgICAgPC9nPlxuXHRcdCAgICA8L2c+XG5cdFx0PC9zdmc+XCJcblx0Ymx1ZXRvb3RoLmNvbnN0cmFpbnRzID0gXG5cdFx0dG9wOiAzXG5cdFx0dHJhaWxpbmc6IFtiYXR0ZXJ5UGVyY2VudCwgN11cblx0ZXhwb3J0cy5sYXlvdXQoKVxuXHRyZXR1cm4ge1xuXHRcdGFsbDpzdGF0dXNCYXJCR1xuXHRcdGJhdHRlcnlQZXJjZW50OmJhdHRlcnlQZXJjZW50XG5cdFx0YmF0dGVyeUljb246YmF0dGVyeUljb25cblx0XHRzaWduYWw6IHNpZ25hbFxuXHRcdGNhcnJpZXI6Y2FycmllclxuXHRcdG5ldHdvcms6bmV0d29ya1xuXHRcdHRpbWU6dGltZVxuXHRcdGJsdWV0b290aDpibHVldG9vdGhcblx0fVxuXG5cbmV4cG9ydHMuS2V5Ym9hcmQgPSAoYXJyYXkpIC0+XG5cdGlmIGFycmF5ID09IHVuZGVmaW5lZFxuXHRcdGFycmF5ID0gW11cblx0Zm9yIHByb3AgaW4gZGVmYXVsdHMua2V5Ym9hcmRQcm9wc1xuXHRcdGlmIGFycmF5W3Byb3BdXHRcdFx0XG5cdFx0XHRAW3Byb3BdID0gYXJyYXlbcHJvcF1cblx0XHRlbHNlIFxuXHRcdFx0QFtwcm9wXSA9IGRlZmF1bHRzLmtleWJvYXJkUHJvcHNbcHJvcF1cblx0Ym9hcmQgPSBuZXcgTGF5ZXIgYmFja2dyb3VuZENvbG9yOlwiI0QxRDVEQVwiLCBuYW1lOlwia2V5Ym9hcmRcIlxuXHRib2FyZC5jb25zdHJhaW50cyA9IChib3R0b206MCwgaGVpZ2h0OjIxNiwgdHJhaWxpbmc6MCwgbGVhZGluZzowKVxuXHRleHBvcnRzLmxheW91dCgpXG5cdGxldHRlcnNBcnJheSA9IFtcInFcIiwgXCJ3XCIsIFwiZVwiLCBcInJcIiwgXCJ0XCIsIFwieVwiLCBcInVcIiwgXCJpXCIsIFwib1wiLCBcInBcIiwgXCJhXCIsIFwic1wiLCBcImRcIiwgXCJmXCIsIFwiZ1wiLCBcImhcIiwgXCJqXCIsIFwia1wiLCBcImxcIiwgXCJ6XCIsIFwieFwiLCBcImNcIiwgXCJ2XCIsICBcImJcIiwgXCJuXCIsIFwibVwiXVxuXHRrZXlzQXJyYXkgPSBbXVxuXHRzcGFjZXIgPSBleHBvcnRzLnB4KDUpXG5cdGlmIGV4cG9ydHMuc2NhbGUgPT0gMyB8fCBleHBvcnRzLndpZHRoID09IDY0MFxuXHRcdHNwYWNlciA9IGV4cG9ydHMucHgoNilcblx0cm93c01hcCA9IFtcblx0XHR7IFxuXHRcdFx0XCJwYWRkaW5nXCIgOiBleHBvcnRzLnB4KDQpXG5cdFx0XHRcInN0YXJ0SW5kZXhcIiA6IDBcblx0XHRcdFwiZW5kSW5kZXhcIiA6IDlcblx0XHRcdFwibWFyZ2luVG9wXCIgOiBleHBvcnRzLnB4KDEwKVxuXHRcdH0sXG5cdFx0eyBcblx0XHRcdFwicGFkZGluZ1wiIDogMjIgKiBleHBvcnRzLnNjYWxlXG5cdFx0XHRcInN0YXJ0SW5kZXhcIiA6IDEwXG5cdFx0XHRcImVuZEluZGV4XCIgOiAxOFxuXHRcdFx0XCJtYXJnaW5Ub3BcIiA6IDIyICogZXhwb3J0cy5zY2FsZVxuXHRcdH0sXG5cdFx0eyBcblx0XHRcdFwicGFkZGluZ1wiIDogNTkgKiBleHBvcnRzLnNjYWxlXG5cdFx0XHRcInN0YXJ0SW5kZXhcIiA6IDE5XG5cdFx0XHRcImVuZEluZGV4XCIgOiAyNVxuXHRcdFx0XCJtYXJnaW5Ub3BcIiA6IDM0ICogZXhwb3J0cy5zY2FsZVxuXHRcdH1cblx0XVxuXHRrZXlQb3BVcCA9IG5ldyBMYXllciB3aWR0aDpAa2V5V2lkdGgsIGhlaWdodDpAa2V5SGVpZ2h0LCB4OkAueC0xNipleHBvcnRzLnNjYWxlLCBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiLCBzdXBlckxheWVyOmJvYXJkLCBuYW1lOlwia2V5IHBvcCB1cFwiXG5cdGJveCA9IG5ldyBMYXllciBib3JkZXJSYWRpdXM6ZXhwb3J0cy5weCgxMCksIHN1cGVyTGF5ZXI6a2V5UG9wVXAsIGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCIsIGNvbG9yOlwiYmxhY2tcIiwgbmFtZTpcImxldHRlclwiXG5cdGJveC5zdHlsZSA9IHtcblx0XHRcImZvbnQtc2l6ZVwiIDogMzkgKiBleHBvcnRzLnNjYWxlICsgXCJweFwiXG5cdFx0XCJmb250LXdlaWdodFwiIDogMzAwXG5cdFx0XCJmb250LWZhbWlseVwiIDogJy1hcHBsZS1zeXN0ZW0sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYnXG5cdFx0J3RleHQtYWxpZ24nIDogJ2NlbnRlcidcblx0XHQnbGluZS1oZWlnaHQnIDogQGxpbmVIZWlnaHRcblx0fVxuXHRALmNvbG9yID0gXCJ3aGl0ZVwiXG5cdHBhdGggPSBuZXcgTGF5ZXIgc3VwZXJMYXllcjprZXlQb3BVcCwgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIiwgbmFtZTpcInNoYXBlIHBhdGhcIlxuXG5cblx0c2hpZnRLZXkgPSBuZXcgTGF5ZXIgc3VwZXJMYXllcjpib2FyZCwgbmFtZTpcInNoaWZ0XCIsIGJvcmRlclJhZGl1czpleHBvcnRzLnB4KDUpLCBiYWNrZ3JvdW5kQ29sb3I6XCIjQUFCM0JDXCIsIHNoYWRvd1k6ZXhwb3J0cy5weCgxKSwgc2hhZG93Q29sb3I6XCIjOTI5NDk4XCJcblx0c2hpZnRLZXkuY29uc3RyYWludHMgPSAoYm90dG9tOjU2LCBsZWFkaW5nOjMsIHdpZHRoOjQyLCBoZWlnaHQ6NDIpXG5cdHNoaWZ0SWNvbiA9IG5ldyBMYXllciB3aWR0aDpleHBvcnRzLnB4KDIwKSwgaGVpZ2h0OmV4cG9ydHMucHgoMTkpLCBzdXBlckxheWVyOnNoaWZ0S2V5LCBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiLCB4OmV4cG9ydHMucHgoMTEpLCB5OmV4cG9ydHMucHgoMTEpXG5cdHNoaWZ0SWNvbi5odG1sID0gXCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0XHQ8c3ZnIHdpZHRoPScje2V4cG9ydHMucHgoMjApfXB4JyBoZWlnaHQ9JyN7ZXhwb3J0cy5weCgxOCl9cHgnIHZpZXdCb3g9JzAgMCAyMCAxOScgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyB4bWxuczpza2V0Y2g9J2h0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaC9ucyc+XG5cdFx0ICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy41LjIgKDI1MjM1KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHQgICAgPHRpdGxlPlNoaWZ0PC90aXRsZT5cblx0XHQgICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0ICAgIDxkZWZzPjwvZGVmcz5cblx0XHQgICAgPGcgaWQ9J1BhZ2UtMScgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCcgc2tldGNoOnR5cGU9J01TUGFnZSc+XG5cdFx0ICAgICAgICA8ZyBpZD0nS2V5Ym9hcmQvTGlnaHQvTG93ZXInIHNrZXRjaDp0eXBlPSdNU0xheWVyR3JvdXAnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC0xNC4wMDAwMDAsIC0xMjkuMDAwMDAwKScgZmlsbD0nIzAzMDMwMyc+XG5cdFx0ICAgICAgICAgICAgPGcgaWQ9J1RoaXJkLVJvdycgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMy4wMDAwMDAsIDExOC4wMDAwMDApJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJz5cblx0XHQgICAgICAgICAgICAgICAgPHBhdGggZD0nTTIxLjY3MTkwMDgsMTIuMjMyNTg5OCBDMjEuMzAxMDMyLDExLjgyNzk5MTYgMjAuNjk0Njg5MiwxMS44MzM0NzMxIDIwLjMyODgxOTUsMTIuMjMyNTg5OCBMMTEuNjk0NzAyMywyMS42NTEyOTgzIEMxMC43NTg3NDQxLDIyLjY3MjMwOCAxMS4xMjg1NTQxLDIzLjUgMTIuNTA5Nzc1MSwyMy41IEwxNS45OTk5OTk5LDIzLjUwMDAwMDIgTDE1Ljk5OTk5OTksMjguMDAxNDI0MSBDMTUuOTk5OTk5OSwyOC44MjkwNjQ4IDE2LjY3MTY1NTksMjkuNTAwMDAwMSAxNy40OTcxMDEsMjkuNTAwMDAwMSBMMjQuNTAyODk5MiwyOS41MDAwMDAxIEMyNS4zMjk3MjUzLDI5LjUwMDAwMDEgMjYuMDAwMDAwMywyOC44MzQ5NzAzIDI2LjAwMDAwMDMsMjguMDAxNDI0MSBMMjYuMDAwMDAwMywyMy41MDAwMDAxIEwyOS40OTAyMjUxLDIzLjUwMDAwMDIgQzMwLjg3NjMzNTcsMjMuNTAwMDAwMiAzMS4yNDM5NTIxLDIyLjY3NTE5MTYgMzAuMzA1NDE2MSwyMS42NTEyOTg1IEwyMS42NzE5MDA4LDEyLjIzMjU4OTggWiBNMjEuMzQxNzQ4LDE0LjM2NDUzMTYgQzIxLjE1MzAwNTYsMTQuMTYzMjA2NCAyMC44NDMzNTE1LDE0LjE2NzA5MTQgMjAuNjU4MjUxNCwxNC4zNjQ1MzE2IEwxMy41LDIxLjk5OTk5OTggTDE3LjUwMDAwMDEsMjEuOTk5OTk5OSBMMTcuNTAwMDAwMiwyNy41MDg5OTU2IEMxNy41MDAwMDAyLDI3Ljc4MDE3MDMgMTcuNzMyOTAyNywyOC4wMDAwMDA4IDE4LjAwMzQyMjksMjguMDAwMDAwOCBMMjMuOTk2NTc3LDI4LjAwMDAwMDggQzI0LjI3NDYwOTcsMjguMDAwMDAwOCAyNC40OTk5OTk3LDI3Ljc3MjEyMDMgMjQuNDk5OTk5NywyNy41MDg5OTU2IEwyNC40OTk5OTk3LDIxLjk5OTk5OTkgTDI4LjUsMjEuOTk5OTk5OSBMMjEuMzQxNzQ4LDE0LjM2NDUzMTYgWicgaWQ9J1NoaWZ0Jz48L3BhdGg+XG5cdFx0ICAgICAgICAgICAgPC9nPlxuXHRcdCAgICAgICAgPC9nPlxuXHRcdCAgICA8L2c+XG5cdFx0PC9zdmc+XCJcblxuXHRzaGlmdEljb24uc3RhdGVzLmFkZFxuXHRcdG9uOlxuXHRcdFx0aHRtbDogXCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0XHRcdDxzdmcgd2lkdGg9JyN7ZXhwb3J0cy5weCgyMCl9cHgnIGhlaWdodD0nI3tleHBvcnRzLnB4KDE4KX1weCcgdmlld0JveD0nMCAwIDIwIDE3JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHhtbG5zOnNrZXRjaD0naHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zJz5cblx0XHRcdCAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNS4yICgyNTIzNSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdFx0XHQgICAgPHRpdGxlPlNoaWZ0PC90aXRsZT5cblx0XHRcdCAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHRcdCAgICA8ZGVmcz48L2RlZnM+XG5cdFx0XHQgICAgPGcgaWQ9J1BhZ2UtMScgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCcgc2tldGNoOnR5cGU9J01TUGFnZSc+XG5cdFx0XHQgICAgICAgIDxnIGlkPSdLZXlib2FyZC9MaWdodC9VcHBlcicgc2tldGNoOnR5cGU9J01TTGF5ZXJHcm91cCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTE0LjAwMDAwMCwgLTEzMC4wMDAwMDApJyBmaWxsPScjMDMwMzAzJz5cblx0XHRcdCAgICAgICAgICAgIDxnIGlkPSdUaGlyZC1Sb3cnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDMuMDAwMDAwLCAxMTguMDAwMDAwKScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCc+XG5cdFx0XHQgICAgICAgICAgICAgICAgPHBhdGggZD0nTTIxLjcwNTIzODgsMTMuMjA1MjM4OCBDMjEuMzE1NzQ2MiwxMi44MTU3NDYyIDIwLjY4NTc1NTksMTIuODE0MjQ0MSAyMC4yOTQ3NjEyLDEzLjIwNTIzODggTDExLjkxNjA3NjcsMjEuNTgzOTIzMyBDMTEuMTMzOTk5MSwyMi4zNjYwMDA5IDExLjM5ODI2MDYsMjMgMTIuNDk3OTEzMSwyMyBMMTYuNSwyMyBMMTYuNSwyOC4wMDkyMjIgQzE2LjUsMjguNTU2NDEzNiAxNi45NDYzMTE0LDI5IDE3LjQ5NzU0NDYsMjkgTDI0LjUwMjQ1NTQsMjkgQzI1LjA1MzM4NCwyOSAyNS41LDI4LjU0OTAyNDggMjUuNSwyOC4wMDkyMjIgTDI1LjUsMjMgTDI5LjUwMjA4NjksMjMgQzMwLjYwNTUwMzgsMjMgMzAuODY2ODI0LDIyLjM2NjgyNCAzMC4wODM5MjMzLDIxLjU4MzkyMzMgTDIxLjcwNTIzODgsMTMuMjA1MjM4OCBaJyBpZD0nU2hpZnQnPjwvcGF0aD5cblx0XHRcdCAgICAgICAgICAgIDwvZz5cblx0XHRcdCAgICAgICAgPC9nPlxuXHRcdFx0ICAgIDwvZz5cblx0XHRcdDwvc3ZnPlwiXG5cdHNoaWZ0SWNvbi5zdGF0ZXMuYW5pbWF0aW9uT3B0aW9ucyA9XG4gIFx0ICB0aW1lOiAuMDFcblxuICBcdGRlbGV0ZUtleSA9IG5ldyBMYXllciBzdXBlckxheWVyOmJvYXJkLCBib3JkZXJSYWRpdXM6ZXhwb3J0cy5weCg1KSwgYmFja2dyb3VuZENvbG9yOlwiI0FBQjNCQ1wiLCBzaGFkb3dZOmV4cG9ydHMucHgoMSksIHNoYWRvd0NvbG9yOlwiIzkyOTQ5OFwiXG4gIFx0ZGVsZXRlS2V5LmNvbnN0cmFpbnRzID0gKGJvdHRvbTo1NiwgdHJhaWxpbmc6Mywgd2lkdGg6NDIsIGhlaWdodDo0MilcbiAgXHRkZWxldGVJY29uID0gbmV3IExheWVyIHN1cGVyTGF5ZXI6ZGVsZXRlS2V5LCB3aWR0aDpleHBvcnRzLnB4KDI0KSwgaGVpZ2h0OmV4cG9ydHMucHgoMTgpLCBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiXG4gIFx0ZGVsZXRlSWNvbi5jb25zdHJhaW50cyA9ICh0b3A6MTMsIGxlYWRpbmc6MTApXG5cbiAgXHRkZWxldGVJY29uLnN0YXRlcy5hZGQgXG4gIFx0XHRvbjogXG4gIFx0XHRcdGh0bWw6IFwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdFx0XHRcdDxzdmcgd2lkdGg9JyN7ZXhwb3J0cy5weCgyNCl9cHgnIGhlaWdodD0nI3tleHBvcnRzLnB4KDE4KX1weCcgdmlld0JveD0nMCAwIDI0IDE4JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHhtbG5zOnNrZXRjaD0naHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zJz5cblx0XHRcdFx0ICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy41LjIgKDI1MjM1KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHRcdFx0ICAgIDx0aXRsZT5CYWNrPC90aXRsZT5cblx0XHRcdFx0ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdFx0XHQgICAgPGRlZnM+PC9kZWZzPlxuXHRcdFx0XHQgICAgPGcgaWQ9J1BhZ2UtMScgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCcgc2tldGNoOnR5cGU9J01TUGFnZSc+XG5cdFx0XHRcdCAgICAgICAgPGcgaWQ9J0tleWJvYXJkL0xpZ2h0L1VwcGVyJyBza2V0Y2g6dHlwZT0nTVNMYXllckdyb3VwJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtMzM5LjAwMDAwMCwgLTEzMC4wMDAwMDApJyBmaWxsPScjMDMwMzAzJz5cblx0XHRcdFx0ICAgICAgICAgICAgPGcgaWQ9J1RoaXJkLVJvdycgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMy4wMDAwMDAsIDExOC4wMDAwMDApJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJz5cblx0XHRcdFx0ICAgICAgICAgICAgICAgIDxwYXRoIGQ9J00zNTEuNjQyNjYzLDIwLjk3NzY5MDMgTDM1NC40NjY3OTUsMTguMTUzNTU4NSBDMzU0Ljc2MDEwNiwxNy44NjAyNDc2IDM1NC43NjM5ODMsMTcuMzgxNDk2MiAzNTQuNDcxMDksMTcuMDg4NjAzIEMzNTQuMTc2MTU1LDE2Ljc5MzY2NzcgMzUzLjcwMTQsMTYuNzk3NjMyOCAzNTMuNDA2MTM1LDE3LjA5Mjg5ODMgTDM1MC41ODIwMDMsMTkuOTE3MDMwMSBMMzQ3Ljc1Nzg3MSwxNy4wOTI4OTgzIEMzNDcuNDY0NTYsMTYuNzk5NTg3NCAzNDYuOTg1ODA5LDE2Ljc5NTcwOTcgMzQ2LjY5MjkxNiwxNy4wODg2MDMgQzM0Ni4zOTc5OCwxNy4zODM1MzgyIDM0Ni40MDE5NDUsMTcuODU4MjkzIDM0Ni42OTcyMTEsMTguMTUzNTU4NSBMMzQ5LjUyMTM0MywyMC45Nzc2OTAzIEwzNDYuNjk3MjExLDIzLjgwMTgyMiBDMzQ2LjQwMzksMjQuMDk1MTMyOSAzNDYuNDAwMDIyLDI0LjU3Mzg4NDMgMzQ2LjY5MjkxNiwyNC44NjY3Nzc2IEMzNDYuOTg3ODUxLDI1LjE2MTcxMjggMzQ3LjQ2MjYwNiwyNS4xNTc3NDc3IDM0Ny43NTc4NzEsMjQuODYyNDgyMiBMMzUwLjU4MjAwMywyMi4wMzgzNTA0IEwzNTMuNDA2MTM1LDI0Ljg2MjQ4MjIgQzM1My42OTk0NDUsMjUuMTU1NzkzMSAzNTQuMTc4MTk3LDI1LjE1OTY3MDggMzU0LjQ3MTA5LDI0Ljg2Njc3NzYgQzM1NC43NjYwMjUsMjQuNTcxODQyMyAzNTQuNzYyMDYsMjQuMDk3MDg3NSAzNTQuNDY2Nzk1LDIzLjgwMTgyMiBMMzUxLjY0MjY2MywyMC45Nzc2OTAzIFogTTMzNy4wNTkzNDUsMjIuMDU5MzQ0NSBDMzM2LjQ3NDI4NSwyMS40NzQyODQ3IDMzNi40ODEzNTEsMjAuNTE4NjQ4OSAzMzcuMDU5MzQ1LDE5Ljk0MDY1NTUgTDM0My43ODk5MTUsMTMuMjEwMDg1MyBDMzQ0LjE4MjA4NCwxMi44MTc5MTYgMzQ0Ljk0ODkyLDEyLjUgMzQ1LjUwNzQ4NCwxMi41IEwzNTYuMDAyMDk4LDEyLjUgQzM1Ny45MzM5MzYsMTIuNSAzNTkuNSwxNC4wNjg4NDc3IDM1OS41LDE2LjAwMTc5ODMgTDM1OS41LDI1Ljk5ODIwMTcgQzM1OS41LDI3LjkzMjE5MTUgMzU3LjkyMzA4OCwyOS41IDM1Ni4wMDIwOTgsMjkuNSBMMzQ1LjUwNzQ4NCwyOS41IEMzNDQuOTUxMDY2LDI5LjUgMzQ0LjE3NzE2OSwyOS4xNzcxNjkzIDM0My43ODk5MTUsMjguNzg5OTE0OCBMMzM3LjA1OTM0NSwyMi4wNTkzNDQ1IFonIGlkPSdCYWNrJz48L3BhdGg+XG5cdFx0XHRcdCAgICAgICAgICAgIDwvZz5cblx0XHRcdFx0ICAgICAgICA8L2c+XG5cdFx0XHRcdCAgICA8L2c+XG5cdFx0XHRcdDwvc3ZnPlwiXG5cbiAgXHRkZWxldGVJY29uLnN0YXRlcy5hZGRcbiAgXHRcdG9mZjogXG4gIFx0XHRcdGh0bWw6IFwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdFx0PHN2ZyB3aWR0aD0nI3tleHBvcnRzLnB4KDI0KX1weCcgaGVpZ2h0PScje2V4cG9ydHMucHgoMTgpfXB4JyB2aWV3Qm94PScwIDAgMjQgMTgnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycgeG1sbnM6c2tldGNoPSdodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMnPlxuXHRcdCAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNS4yICgyNTIzNSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdFx0ICAgIDx0aXRsZT5CYWNrPC90aXRsZT5cblx0XHQgICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0ICAgIDxkZWZzPjwvZGVmcz5cblx0XHQgICAgPGcgaWQ9J1BhZ2UtMScgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCcgc2tldGNoOnR5cGU9J01TUGFnZSc+XG5cdFx0ICAgICAgICA8ZyBpZD0nS2V5Ym9hcmQvTGlnaHQvVXBwZXInIHNrZXRjaDp0eXBlPSdNU0xheWVyR3JvdXAnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC0zMzkuMDAwMDAwLCAtMTMwLjAwMDAwMCknIGZpbGw9JyMwMzAzMDMnPlxuXHRcdCAgICAgICAgICAgIDxnIGlkPSdUaGlyZC1Sb3cnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDMuMDAwMDAwLCAxMTguMDAwMDAwKScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCc+XG5cdFx0ICAgICAgICAgICAgICAgIDxwYXRoIGQ9J00zMzcuMDU5MzQ1LDIyLjA1OTM0NDUgQzMzNi40NzQyODUsMjEuNDc0Mjg0NyAzMzYuNDgxMzUxLDIwLjUxODY0ODkgMzM3LjA1OTM0NSwxOS45NDA2NTU1IEwzNDMuNzg5OTE1LDEzLjIxMDA4NTMgQzM0NC4xODIwODQsMTIuODE3OTE2IDM0NC45NDg5MiwxMi41IDM0NS41MDc0ODQsMTIuNSBMMzU2LjAwMjA5OCwxMi41IEMzNTcuOTMzOTM2LDEyLjUgMzU5LjUsMTQuMDY4ODQ3NyAzNTkuNSwxNi4wMDE3OTgzIEwzNTkuNSwyNS45OTgyMDE3IEMzNTkuNSwyNy45MzIxOTE1IDM1Ny45MjMwODgsMjkuNSAzNTYuMDAyMDk4LDI5LjUgTDM0NS41MDc0ODQsMjkuNSBDMzQ0Ljk1MTA2NiwyOS41IDM0NC4xNzcxNjksMjkuMTc3MTY5MyAzNDMuNzg5OTE1LDI4Ljc4OTkxNDggTDMzNy4wNTkzNDUsMjIuMDU5MzQ0NSBaIE0zNTEuNjQyNjYzLDIwLjk3NzY5MDMgTDM1NC40NjY3OTUsMTguMTUzNTU4NSBDMzU0Ljc2MDEwNiwxNy44NjAyNDc2IDM1NC43NjM5ODMsMTcuMzgxNDk2MiAzNTQuNDcxMDksMTcuMDg4NjAzIEMzNTQuMTc2MTU1LDE2Ljc5MzY2NzcgMzUzLjcwMTQsMTYuNzk3NjMyOCAzNTMuNDA2MTM1LDE3LjA5Mjg5ODMgTDM1MC41ODIwMDMsMTkuOTE3MDMwMSBMMzQ3Ljc1Nzg3MSwxNy4wOTI4OTgzIEMzNDcuNDY0NTYsMTYuNzk5NTg3NCAzNDYuOTg1ODA5LDE2Ljc5NTcwOTcgMzQ2LjY5MjkxNiwxNy4wODg2MDMgQzM0Ni4zOTc5OCwxNy4zODM1MzgyIDM0Ni40MDE5NDUsMTcuODU4MjkzIDM0Ni42OTcyMTEsMTguMTUzNTU4NSBMMzQ5LjUyMTM0MywyMC45Nzc2OTAzIEwzNDYuNjk3MjExLDIzLjgwMTgyMiBDMzQ2LjQwMzksMjQuMDk1MTMyOSAzNDYuNDAwMDIyLDI0LjU3Mzg4NDMgMzQ2LjY5MjkxNiwyNC44NjY3Nzc2IEMzNDYuOTg3ODUxLDI1LjE2MTcxMjggMzQ3LjQ2MjYwNiwyNS4xNTc3NDc3IDM0Ny43NTc4NzEsMjQuODYyNDgyMiBMMzUwLjU4MjAwMywyMi4wMzgzNTA0IEwzNTMuNDA2MTM1LDI0Ljg2MjQ4MjIgQzM1My42OTk0NDUsMjUuMTU1NzkzMSAzNTQuMTc4MTk3LDI1LjE1OTY3MDggMzU0LjQ3MTA5LDI0Ljg2Njc3NzYgQzM1NC43NjYwMjUsMjQuNTcxODQyMyAzNTQuNzYyMDYsMjQuMDk3MDg3NSAzNTQuNDY2Nzk1LDIzLjgwMTgyMiBMMzUxLjY0MjY2MywyMC45Nzc2OTAzIFogTTMzOC43MDk3MiwyMS43MDk3MTk1IEMzMzguMzE3NzUyLDIxLjMxNzc1MjIgMzM4LjMxODk2NSwyMC42ODEwMzQ5IDMzOC43MDk3MiwyMC4yOTAyODA1IEwzNDQuNjQzMjQ1LDE0LjM1Njc1NDcgQzM0NC44NDAyNzYsMTQuMTU5NzI0NSAzNDUuMjI1NjM5LDE0IDM0NS40OTM3NDEsMTQgTDM1NS45OTcyMzksMTQgQzM1Ny4xMDMzMzMsMTQgMzU3Ljk5OTk5OSwxNC44OTcwNjAxIDM1Ny45OTk5OTksMTYuMDA1ODU4NiBMMzU3Ljk5OTk5OSwyNS45OTQxNDEyIEMzNTcuOTk5OTk5LDI3LjEwMTk0NjQgMzU3LjEwNjQ1NywyNy45OTk5OTk5IDM1NS45OTcyMzksMjcuOTk5OTk5OSBMMzQ1LjQ5Mzc0MSwyOCBDMzQ1LjIyMTA1NiwyOCAzNDQuODQwNjQzLDI3Ljg0MDY0MzEgMzQ0LjY0MzI0NiwyNy42NDMyNDUzIEwzMzguNzA5NzIsMjEuNzA5NzE5NSBaJyBpZD0nQmFjayc+PC9wYXRoPlxuXHRcdCAgICAgICAgICAgIDwvZz5cblx0XHQgICAgICAgIDwvZz5cblx0XHQgICAgPC9nPlxuXHRcdDwvc3ZnPlwiXG5cblxuICBcdGRlbGV0ZUtleS5vbiBFdmVudHMuVG91Y2hTdGFydCwgLT5cbiAgXHRcdGRlbGV0ZUtleS5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCJcbiAgXHRcdGRlbGV0ZUljb24uc3RhdGVzLnN3aXRjaEluc3RhbnQoXCJvblwiKVxuXG4gIFx0ZGVsZXRlS2V5Lm9uIEV2ZW50cy5Ub3VjaEVuZCwgLT5cbiAgXHRcdGRlbGV0ZUtleS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNBQUIzQkNcIlxuICBcdFx0ZGVsZXRlSWNvbi5zdGF0ZXMuc3dpdGNoSW5zdGFudChcIm9mZlwiKVxuXG4gIFx0ZGVsZXRlSWNvbi5zdGF0ZXMuc3dpdGNoSW5zdGFudChcIm9mZlwiKVxuXG5cdHNoaWZ0SWNvbi5vbiBFdmVudHMuQ2xpY2ssIC0+XG5cdFx0c2hpZnRJY29uLnN0YXRlcy5uZXh0KClcblx0XHRpZiBzaGlmdEljb24uc3RhdGVzLnN0YXRlID09IFwib25cIlxuXHRcdFx0c2hpZnRLZXkuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiXG5cdFx0XHRmb3Iga2V5IGluIGtleXNBcnJheVxuXHRcdFx0XHRrZXkuc3R5bGVbJ3RleHQtdHJhbnNmb3JtJ10gPSAndXBwZXJjYXNlJ1xuXHRcdFx0Ym94LnN0eWxlWyd0ZXh0LXRyYW5zZm9ybSddID0gJ3VwcGVyY2FzZSdcblx0XHRlbHNlIFxuXHRcdFx0c2hpZnRLZXkuYmFja2dyb3VuZENvbG9yID0gXCIjQUFCM0JDXCJcblx0XHRcdGZvciBrZXkgaW4ga2V5c0FycmF5XG5cdFx0XHRcdGtleS5zdHlsZVtcInRleHQtdHJhbnNmb3JtXCJdID0gJ2xvd2VyY2FzZSdcblx0XHRcdGJveC5zdHlsZVtcInRleHQtdHJhbnNmb3JtXCJdID0gJ2xvd2VyY2FzZSdcblxuXHRmb3IgbGV0dGVyIGluIGxldHRlcnNBcnJheVxuXHRcdGluZGV4ID0gbGV0dGVyc0FycmF5LmluZGV4T2YobGV0dGVyKSBcblx0XHRrZXkgPSBuZXcgTGF5ZXIgbmFtZTpsZXR0ZXIsIHN1cGVyTGF5ZXI6Ym9hcmQsIGJvcmRlclJhZGl1czo1KmV4cG9ydHMuc2NhbGUsIGJhY2tncm91bmRDb2xvcjpcIndoaXRlXCIsIGNvbG9yOlwiYmxhY2tcIiwgc2hhZG93WTpleHBvcnRzLnB4KDEpLCBzaGFkb3dDb2xvcjpcIiM5Mjk0OThcIlxuXHRcdGtleVBvcFVwLmJyaW5nVG9Gcm9udCgpXG5cdFx0Ym94LmJyaW5nVG9Gcm9udCgpXG5cdFx0aWYgZXhwb3J0cy5zY2FsZSA9PSAyXG5cdFx0XHRrZXkuY29uc3RyYWludHMgPSAod2lkdGg6MzIsIGhlaWdodDo0Milcblx0XHRcdGtleVBvcFVwLmNvbnN0cmFpbnRzID0gKHdpZHRoOjY1LCBoZWlnaHQ6MTIyKVxuXHRcdFx0cGF0aC5jb25zdHJhaW50cyA9ICh3aWR0aDo2NSwgaGVpZ2h0OiAxMjIpXG5cdFx0XHRwYXRoLnkgPSAxMFxuXHRcdFx0QHBhdGhXaWR0aCA9IGV4cG9ydHMucHgoNjUpXG5cdFx0XHRAcGF0aEhlaWdodCA9IGV4cG9ydHMucHgoMTIyKVxuXHRcdFx0QGtleUhlaWdodCA9IGV4cG9ydHMucHgoMzIpXG5cdFx0XHRAa2V5V2lkdGggPSBleHBvcnRzLnB4KDQ0KVxuXHRcdFx0QGxpbmVIZWlnaHQgPSBAa2V5V2lkdGggLSAxNyArIFwicHhcIlxuXHRcdFx0Ym94LmNvbnN0cmFpbnRzID0gKHdpZHRoOjMyLCBoZWlnaHQ6NDQpXG5cdFx0XHRib3guY2VudGVyWCgpXG5cdFx0XHRib3gueSA9IGV4cG9ydHMucHgoMjgpXG5cblx0XHRpZiBleHBvcnRzLnNjYWxlID09IDNcblx0XHRcdGtleS5jb25zdHJhaW50cyA9ICh3aWR0aDozNSwgaGVpZ2h0OjQ2KVxuXHRcdFx0a2V5UG9wVXAuY29uc3RyYWludHMgPSAod2lkdGg6NjgsIGhlaWdodDoxMjIpXG5cdFx0XHRAa2V5SGVpZ2h0ID0gZXhwb3J0cy5weCgxMjIpXG5cdFx0XHRAa2V5V2lkdGggPSBleHBvcnRzLnB4KDY1KVxuXHRcdFx0QGxpbmVIZWlnaHQgPSBAa2V5V2lkdGggKyBcInB4XCJcblx0XHRcdEBwYXRoV2lkdGggPSBleHBvcnRzLnB4KDY4KVxuXHRcdFx0QHBhdGhIZWlnaHQgPSBleHBvcnRzLnB4KDEyOClcblx0XHRcdHBhdGgueSA9IDBcblxuXG5cdFx0XHRib3guY29uc3RyYWludHMgPSAod2lkdGg6MzUsIGhlaWdodDo0Nilcblx0XHRcdGJveC5jZW50ZXJYKClcblx0XHRcdGJveC55ID0gZXhwb3J0cy5weCgyOClcblxuXHRcdGlmIGV4cG9ydHMud2lkdGggPT0gNjQwXG5cdFx0XHRrZXkuY29uc3RyYWludHMgPSAod2lkdGg6MjYsIGhlaWdodDozOSlcblxuXHRcdGtleVBvcFVwLnZpc2libGUgPSBmYWxzZVxuXG5cdFx0ZXhwb3J0cy5sYXlvdXQoKVxuXHRcdGtleS5zdHlsZSA9IHtcblx0XHRcdFwiZm9udC1zaXplXCIgOiAyNSAqIGV4cG9ydHMuc2NhbGUgKyBcInB4XCJcblx0XHRcdFwiZm9udC13ZWlnaHRcIiA6IDMwMFxuXHRcdFx0XCJmb250LWZhbWlseVwiIDogJy1hcHBsZS1zeXN0ZW0sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYnXG5cdFx0XHQndGV4dC1hbGlnbicgOiAnY2VudGVyJ1xuXHRcdFx0J2xpbmUtaGVpZ2h0JyA6IGtleS5oZWlnaHQgLSBleHBvcnRzLnB4KDIpICsgXCJweFwiXG5cdFx0fVxuXHRcdGtleS5odG1sID0gbGV0dGVyXG5cdFx0aWYgaW5kZXggPD0gcm93c01hcFswXS5lbmRJbmRleFxuXHRcdFx0cm93SW5kZXggPSBpbmRleCAtIHJvd3NNYXBbMF0uc3RhcnRJbmRleFxuXHRcdFx0a2V5LnggPSByb3dzTWFwWzBdLnBhZGRpbmcgKyAocm93SW5kZXgqc3BhY2VyKSArIChyb3dJbmRleCprZXkud2lkdGgpXG5cdFx0XHRrZXkueSA9IHJvd3NNYXBbMF0ubWFyZ2luVG9wXG5cdFx0aWYgaW5kZXggPiByb3dzTWFwWzBdLmVuZEluZGV4ICYmIGluZGV4IDw9IHJvd3NNYXBbMV0uZW5kSW5kZXhcblx0XHRcdHJvd0luZGV4ID0gaW5kZXggLSByb3dzTWFwWzFdLnN0YXJ0SW5kZXhcblx0XHRcdGtleS54ID0gcm93c01hcFsxXS5wYWRkaW5nICsgKHJvd0luZGV4KnNwYWNlcikgKyAocm93SW5kZXgqa2V5LndpZHRoKVxuXHRcdFx0a2V5LnkgPSByb3dzTWFwWzFdLm1hcmdpblRvcCArIGtleS5oZWlnaHRcblx0XHRpZiBpbmRleCA+IHJvd3NNYXBbMV0uZW5kSW5kZXhcblx0XHRcdHJvd0luZGV4ID0gaW5kZXggLSByb3dzTWFwWzJdLnN0YXJ0SW5kZXhcblx0XHRcdGtleS54ID0gcm93c01hcFsyXS5wYWRkaW5nICsgKHJvd0luZGV4KnNwYWNlcikgKyAocm93SW5kZXgqa2V5LndpZHRoKVxuXHRcdFx0a2V5LnkgPSByb3dzTWFwWzJdLm1hcmdpblRvcCArIGtleS5oZWlnaHQgKiAyXG5cdFx0cGF0aC5odG1sID0gXCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblxuXHRcdDxzdmcgd2lkdGg9JyN7QHBhdGhXaWR0aH1weCcgaGVpZ2h0PScje0BwYXRoSGVpZ2h0fScgdmlld0JveD0nMCAwIDYzIDExNCcgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyB4bWxuczpza2V0Y2g9J2h0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaC9ucyc+XG5cdFx0ICAgIDx0aXRsZT5SZWN0YW5nbGUgNDQgQ29weTwvdGl0bGU+XG5cdFx0ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdCAgICA8ZGVmcz5cblx0XHQgICAgICAgIDxmaWx0ZXIgeD0nLTUwJScgeT0nLTUwJScgd2lkdGg9JzIwMCUnIGhlaWdodD0nMjAwJScgZmlsdGVyVW5pdHM9J29iamVjdEJvdW5kaW5nQm94JyBpZD0nZmlsdGVyLTEnPlxuXHRcdCAgICAgICAgICAgIDxmZU9mZnNldCBkeD0nMCcgZHk9JzAnIGluPSdTb3VyY2VBbHBoYScgcmVzdWx0PSdzaGFkb3dPZmZzZXRPdXRlcjEnPjwvZmVPZmZzZXQ+XG5cdFx0ICAgICAgICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0nMS41JyBpbj0nc2hhZG93T2Zmc2V0T3V0ZXIxJyByZXN1bHQ9J3NoYWRvd0JsdXJPdXRlcjEnPjwvZmVHYXVzc2lhbkJsdXI+XG5cdFx0ICAgICAgICAgICAgPGZlQ29sb3JNYXRyaXggdmFsdWVzPScwIDAgMCAwIDAgICAwIDAgMCAwIDAgICAwIDAgMCAwIDAgIDAgMCAwIDAuMjEgMCcgaW49J3NoYWRvd0JsdXJPdXRlcjEnIHR5cGU9J21hdHJpeCcgcmVzdWx0PSdzaGFkb3dNYXRyaXhPdXRlcjEnPjwvZmVDb2xvck1hdHJpeD5cblx0XHQgICAgICAgICAgICA8ZmVNZXJnZT5cblx0XHQgICAgICAgICAgICAgICAgPGZlTWVyZ2VOb2RlIGluPSdzaGFkb3dNYXRyaXhPdXRlcjEnPjwvZmVNZXJnZU5vZGU+XG5cdFx0ICAgICAgICAgICAgICAgIDxmZU1lcmdlTm9kZSBpbj0nU291cmNlR3JhcGhpYyc+PC9mZU1lcmdlTm9kZT5cblx0XHQgICAgICAgICAgICA8L2ZlTWVyZ2U+XG5cdFx0ICAgICAgICA8L2ZpbHRlcj5cblx0XHQgICAgPC9kZWZzPlxuXHRcdCAgICA8ZyBpZD0nUGFnZS0xJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJyBza2V0Y2g6dHlwZT0nTVNQYWdlJz5cblx0XHQgICAgICAgIDxnIGlkPSdpUGhvbmUtNicgc2tldGNoOnR5cGU9J01TQXJ0Ym9hcmRHcm91cCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTExOC4wMDAwMDAsIC0yNDAuMDAwMDAwKScgc3Ryb2tlPScjQzdDN0M3JyBmaWx0ZXI9J3VybCgjZmlsdGVyLTEpJyBzdHJva2Utd2lkdGg9JzAuNScgXG5cdFx0ICAgICAgICBmaWxsPScjRkZGRkZGJyBvcGFjaXR5PScwLjk5ODM2NzUzNyc+XG5cdFx0ICAgICAgICAgPHBhdGggZD0nTTEzNCwzMDYgQzEzNCwzMDYgMTIxLDI5NSAxMjEsMjkwIEMxMjEsMjc5LjYxNjc4OCAxMjEsMjUzLjAwMTQ1NiAxMjEsMjUzLjAwMTQ1NiBDMTIxLDI0Ny40Nzc4MDQgMTI1LjQ4NTgzMiwyNDMgMTMxLjAwMjc3NCwyNDMgTDE2Ny44NjIxMjcsMjQzIEMxNzMuMzg2NTA3LDI0MyAxNzcuODgwODYyLDI0Ny40Njk5MDUgXG5cdFx0ICAgICAgICAgMTc3LjkwMDA0NCwyNTIuOTk3MjcxIEMxNzcuOTAwMDQ0LDI1Mi45OTcyNzEgMTc4LDI4MCAxNzcuOTk5OTk5LDI5MCBDMTc3Ljk5OTk5OSwyOTUuMDA2NTUzIDE2NSwzMDYgMTY1LDMwNiBMMTY1LDM0Ni4wNDk1OTQgXG5cdFx0ICAgICAgICAgQzE2NSwzNDguODA2ODA3IDE2Mi43NzA1NTYsMzUxLjA0MTk2OSAxNjAuMDAyMDk4LDM1MS4wNDE5NjkgTDEzOC45OTc5MDIsMzUxLjA0MTk2OSBcblx0XHQgICAgICAgICAgQzEzNi4yMzc2MzcsMzUxLjA0MTk2OSAxMzQsMzQ4LjgwODMzMSAxMzQsMzQ2LjA0OTU5NCBMMTM0LDMwNiBaJyBpZD0nUmVjdGFuZ2xlLTQ0LUNvcHknIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDE0OS41MDAwMDAsIDI5Ny4wMjA5ODUpIHNjYWxlKC0xLCAxKSB0cmFuc2xhdGUoLTE0OS41MDAwMDAsIC0yOTcuMDIwOTg1KSAnPlxuXHRcdCAgICAgICAgICA8L3BhdGg+XG5cdFx0ICAgICAgICA8L2c+XG5cdFx0ICAgIDwvZz5cblx0XHQ8L3N2Zz5cIlxuXHRcdGtleXNBcnJheS5wdXNoIGtleVxuXG5cblx0XHRrZXkub24gRXZlbnRzLlRvdWNoU3RhcnQsIC0+XG5cdFx0XHRrZXlQb3BVcC52aXNpYmxlID0gdHJ1ZVx0XG5cdFx0XHRib3guaHRtbCA9IEAubmFtZVxuXHRcdFx0a2V5UG9wVXAubWF4WSA9IEAubWF4WVxuXHRcdFx0a2V5UG9wVXAubWlkWCA9IEAubWlkWFxuXG5cdFx0a2V5Lm9uIEV2ZW50cy5Ub3VjaE1vdmUsIC0+XG5cdFx0XHRib3guaHRtbCA9IEAubmFtZVxuXHRcdFx0a2V5UG9wVXAubWF4WSA9IEAubWF4WVxuXHRcdFx0a2V5UG9wVXAubWlkWCA9IEAubWlkWFx0XG5cblx0XHRrZXkub24gRXZlbnRzLlRvdWNoRW5kLCAtPlxuXHRcdFx0a2V5UG9wVXAudmlzaWJsZSA9IGZhbHNlXG5cdFx0XHRpZiBzaGlmdEljb24uc3RhdGVzLnN0YXRlID09IFwib25cIlxuXHRcdFx0XHRzaGlmdEljb24uc3RhdGVzLnN3aXRjaChcImRlZmF1bHRcIilcblx0XHRcdFx0Zm9yIGtleSBpbiBrZXlzQXJyYXlcblx0XHRcdFx0XHRrZXkuc3R5bGVbJ3RleHQtdHJhbnNmb3JtJ10gPSAnbG93ZXJjYXNlJ1xuXHRcdFx0XHRib3guc3R5bGVbJ3RleHQtdHJhbnNmb3JtJ10gPSAnbG93ZXJjYXNlJ1xuXG5cblxuXG5cdG51bUtleSA9IG5ldyBMYXllciBzdXBlckxheWVyOmJvYXJkLCBuYW1lOlwibnVtXCIsIGJvcmRlclJhZGl1czpleHBvcnRzLnB4KDUpLCBiYWNrZ3JvdW5kQ29sb3I6XCIjQUFCM0JDXCIsIHNoYWRvd1k6ZXhwb3J0cy5weCgxKSwgc2hhZG93Q29sb3I6XCIjOTI5NDk4XCIsIGNvbG9yOlwiYmxhY2tcIlxuXHRudW1LZXkuY29uc3RyYWludHMgPSAod2lkdGg6NDAuNSwgaGVpZ2h0OjQyLCBib3R0b206NCwgbGVhZGluZzozKVxuXHRudW1LZXkuaHRtbCA9IFwiMTIzXCJcblx0bnVtS2V5LnN0eWxlID0ge1xuXHRcdFwiZm9udC1zaXplXCIgOiBleHBvcnRzLnB4KDE2KSArIFwicHhcIlxuXHRcdFwiZm9udC13ZWlnaHRcIiA6IDQwMFxuXHRcdFwiZm9udC1mYW1pbHlcIiA6ICctYXBwbGUtc3lzdGVtLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmJ1xuXHRcdCd0ZXh0LWFsaWduJyA6ICdjZW50ZXInXG5cdFx0J2xpbmUtaGVpZ2h0JyA6IGV4cG9ydHMucHgoNDIpICsgXCJweFwiXG5cblx0fVxuXG5cdGV4cG9ydHMubGF5b3V0KClcblx0ZW1vamlLZXkgPSBuZXcgTGF5ZXIgc3VwZXJMYXllcjpib2FyZCwgbmFtZTpcImVtb2ppXCIsIGJvcmRlclJhZGl1czpleHBvcnRzLnB4KDUpLCBiYWNrZ3JvdW5kQ29sb3I6XCIjQUFCM0JDXCIsIHNoYWRvd1k6ZXhwb3J0cy5weCgxKSwgc2hhZG93Q29sb3I6XCIjOTI5NDk4XCJcblx0ZW1vamlLZXkuY29uc3RyYWludHMgPSAod2lkdGg6NDEsIGhlaWdodDo0MiwgYm90dG9tOjQsIGxlYWRpbmc6W251bUtleSwgNl0pXG5cdGVtb2ppS2V5Lmh0bWwgPSBcIjw/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyc/PlxuXHRcdDxzdmcgd2lkdGg9JyN7ZXhwb3J0cy5weCgyMCl9cHgnIGhlaWdodD0nI3tleHBvcnRzLnB4KDIwKX1weCcgdmlld0JveD0nMCAwIDIwIDIwJyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHhtbG5zOnNrZXRjaD0naHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zJz5cblx0XHQgICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjUuMiAoMjUyMzUpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdCAgICA8dGl0bGU+RW1vamk8L3RpdGxlPlxuXHRcdCAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHQgICAgPGRlZnM+PC9kZWZzPlxuXHRcdCAgICA8ZyBpZD0nUGFnZS0xJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJyBza2V0Y2g6dHlwZT0nTVNQYWdlJz5cblx0XHQgICAgICAgIDxnIGlkPSdLZXlib2FyZC9MaWdodC9Mb3dlcicgc2tldGNoOnR5cGU9J01TTGF5ZXJHcm91cCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTYwLjAwMDAwMCwgLTE4MS4wMDAwMDApJyBmaWxsPScjMDMwMzAzJz5cblx0XHQgICAgICAgICAgICA8ZyBpZD0nQm90dG9tLVJvdycgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMy4wMDAwMDAsIDE3MC4wMDAwMDApJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJz5cblx0XHQgICAgICAgICAgICAgICAgPHBhdGggZD0nTTY2Ljc1LDMwLjUgQzcyLjEzNDc3NjMsMzAuNSA3Ni41LDI2LjEzNDc3NjMgNzYuNSwyMC43NSBDNzYuNSwxNS4zNjUyMjM3IDcyLjEzNDc3NjMsMTEgNjYuNzUsMTEgQzYxLjM2NTIyMzcsMTEgNTcsMTUuMzY1MjIzNyA1NywyMC43NSBDNTcsMjYuMTM0Nzc2MyA2MS4zNjUyMjM3LDMwLjUgNjYuNzUsMzAuNSBaIE02Ni43NSwyOS41IEM3MS41ODI0OTE2LDI5LjUgNzUuNSwyNS41ODI0OTE2IDc1LjUsMjAuNzUgQzc1LjUsMTUuOTE3NTA4NCA3MS41ODI0OTE2LDEyIDY2Ljc1LDEyIEM2MS45MTc1MDg0LDEyIDU4LDE1LjkxNzUwODQgNTgsMjAuNzUgQzU4LDI1LjU4MjQ5MTYgNjEuOTE3NTA4NCwyOS41IDY2Ljc1LDI5LjUgWiBNNjMuNzUsMTkgQzY0LjQ0MDM1NTksMTkgNjUsMTguNDQwMzU1OSA2NSwxNy43NSBDNjUsMTcuMDU5NjQ0MSA2NC40NDAzNTU5LDE2LjUgNjMuNzUsMTYuNSBDNjMuMDU5NjQ0MSwxNi41IDYyLjUsMTcuMDU5NjQ0MSA2Mi41LDE3Ljc1IEM2Mi41LDE4LjQ0MDM1NTkgNjMuMDU5NjQ0MSwxOSA2My43NSwxOSBaIE02OS43NSwxOSBDNzAuNDQwMzU1OSwxOSA3MSwxOC40NDAzNTU5IDcxLDE3Ljc1IEM3MSwxNy4wNTk2NDQxIDcwLjQ0MDM1NTksMTYuNSA2OS43NSwxNi41IEM2OS4wNTk2NDQxLDE2LjUgNjguNSwxNy4wNTk2NDQxIDY4LjUsMTcuNzUgQzY4LjUsMTguNDQwMzU1OSA2OS4wNTk2NDQxLDE5IDY5Ljc1LDE5IFogTTU5Ljg4NzYzMzQsMjIuMTY0MTQ0NCBDNTkuNjM5MDMxNiwyMS4zODMxMzQgNjAuMDY1OTE4LDIwLjk3ODUxNTYgNjAuODUzMDk1MSwyMS4yMzI5MzA0IEM2MC44NTMwOTUxLDIxLjIzMjkzMDQgNjMuMDkzNzUwMywyMi4yMTI1IDY2Ljc1MDAwMDEsMjIuMjEyNSBDNzAuNDA2MjQ5OSwyMi4yMTI1IDcyLjY0NjkwNDcsMjEuMjMyOTMwNCA3Mi42NDY5MDQ3LDIxLjIzMjkzMDQgQzczLjQyODcxNjIsMjAuOTY2MjE1MyA3My44ODEyNDYzLDIxLjQwNDQwOTcgNzMuNjA1ODQ3NywyMi4xODA3NDM3IEM3My42MDU4NDc3LDIyLjE4MDc0MzcgNzIuNiwyNy41NzUgNjYuNzUsMjcuNTc1IEM2MC45LDI3LjU3NSA1OS44ODc2MzM0LDIyLjE2NDE0NDQgNTkuODg3NjMzNCwyMi4xNjQxNDQ0IFogTTY2Ljc1LDIzLjE4NzUgQzY0LjA2ODc1LDIzLjE4NzUgNjEuODU0NDA1NSwyMi40NzM3ODIxIDYxLjg1NDQwNTUsMjIuNDczNzgyMSBDNjEuMzI3MzAxOSwyMi4zMjk0OCA2MS4xNzgxMjMzLDIyLjU3MjE2MTUgNjEuNTYzOTU1NSwyMi45NTcwNzUgQzYxLjU2Mzk1NTUsMjIuOTU3MDc1IDYyLjM2MjUsMjQuNjUgNjYuNzUsMjQuNjUgQzcxLjEzNzUsMjQuNjUgNzEuOTUwODUwMywyMi45NDM4MzA0IDcxLjk1MDg1MDMsMjIuOTQzODMwNCBDNzIuMzA5MzY1OSwyMi41Mzk5Mjc4IDcyLjE2OTA3OTMsMjIuMzM1OTg0NCA3MS42MzU0MjczLDIyLjQ3NjM0OSBDNzEuNjM1NDI3MywyMi40NzYzNDkgNjkuNDMxMjUsMjMuMTg3NSA2Ni43NSwyMy4xODc1IFonIGlkPSdFbW9qaSc+PC9wYXRoPlxuXHRcdCAgICAgICAgICAgIDwvZz5cblx0XHQgICAgICAgIDwvZz5cblx0XHQgICAgPC9nPlxuXHRcdDwvc3ZnPlwiXG5cdGVtb2ppS2V5LnN0eWxlID0ge1xuXHRcdFwicGFkZGluZy10b3BcIjogZXhwb3J0cy5weCgxMSkgKyBcInB4XCJcblx0XHRcInBhZGRpbmctbGVmdFwiOiBleHBvcnRzLnB4KDExKSArIFwicHhcIlxuXHR9XG5cblx0ZW1vamlGb3JtYXR0ZXIgPSAoc3RyaW5nKSAtPlxuXHRcdHVuaWNvZGVGb3JtYXQgPSBcIlwiXG5cdFx0aWYgc3RyaW5nWzBdID09IFwiRVwiIHx8IHN0cmluZ1swXSA9PSBcIjNcIiB8fCBzdHJpbmdbMF0gPT0gXCIyXCIgfHwgc3RyaW5nWzBdID09IFwiQ1wiXG5cdFx0XHRhcnJheU9mQ29kZXMgPSBzdHJpbmcuc3BsaXQoXCIgXCIpXG5cdFx0XHRmb3IgY29kZSBpbiBhcnJheU9mQ29kZXNcblx0XHRcdFx0dW5pY29kZUZvcm1hdCA9IHVuaWNvZGVGb3JtYXQgKyBcIiVcIiArIGNvZGVcblx0XHRlbHNlIFxuXHRcdFx0YXJyYXlPZkNvZGVzID0gc3RyaW5nLnNwbGl0KFwiIFwiKVxuXHRcdFx0dW5pY29kZUZvcm1hdCA9IFwiJUYwJTlGXCJcblx0XHRcdGZvciBjb2RlIGluIGFycmF5T2ZDb2Rlc1xuXHRcdFx0XHR1bmljb2RlRm9ybWF0ID0gdW5pY29kZUZvcm1hdCArIFwiJVwiICsgY29kZVxuXHRcdHJldHVybiB1bmljb2RlRm9ybWF0XG5cblx0ZXhwb3J0cy5sYXlvdXQoKVxuXHRlbW9qaVNlY3Rpb25zID0gW1wiRnJlcXVuZXRseSBVc2VkXCIsIFwiU21pbGV5cyAmIFBlb3BsZVwiLCBcIkFuaW1hbHMgJiBOYXR1cmVcIiwgXCJGb29kICYgRHJpbmtcIiwgXCJBY3Rpdml0eVwiLCBcIlRyYXZlbCAmIFBsYWNlc1wiLCBcIk9iamVjdHNcIiwgXCJTeW1ib2xzXCIsIFwiRmxhZ3NcIl1cblx0cmF3RW1vamlzID0gW1wiOTggODBcIiwgXCI5OCBBQ1wiLCBcIjk4IDgxXCIsIFwiOTggODJcIiwgXCI5OCA4M1wiLCBcIjk4IDg0XCIsIFwiOTggODVcIiwgXCI5OCA4NlwiLCBcIjk4IDg3XCIsIFwiOTggODlcIiwgXCI5OCA4YVwiLCBcIjk5IDgyXCIsIFwiOTkgODNcIiwgXCJFMiA5OCBCQSBFRiBCOCA4RlwiLCBcIjk4IDhCXCIgLCBcIjk4IDhDXCIsIFwiOTggOERcIiwgXCI5OCA5OFwiLCBcIjk4IDk3XCIsIFwiOTggOTlcIiwgXCI5OCA5QVwiLCBcIjk4IDlDXCIsIFwiOTggOURcIiwgXCI5OCA5QlwiLCBcIkE0IDkxXCIsIFwiQTQgOTNcIiwgXCI5OCA4RVwiLCBcIkE0IDk3XCIsIFwiOTggOEZcIiwgXCI5OCBCNlwiLCBcIjk4IDkwXCIsIFwiOTggOTFcIiwgXCI5OCA5MlwiLCBcIjk5IDg0XCIsIFwiQTQgOTRcIiwgXCI5OCBCM1wiLCBcIjk4IDlFXCIsIFwiOTggOUZcIiwgXCI5OCBBMFwiLCBcIjk4IEExXCIsIFwiOTggOTRcIiwgXCI5OCA5NVwiLCBcIjk5IDgxXCIsIFwiRTIgOTggQjkgRUYgQjggOEZcIiwgXCI5OCBBM1wiLCBcIjk4IDk2XCIsIFwiOTggQUJcIiwgXCI5OCBBOVwiLCBcIjk4IEE0XCIsIFwiOTggQUVcIiwgXCI5OCBCMVwiLCBcIjk4IEE4XCIsIFwiOTggQjBcIiwgXCI5OCBBRlwiLCBcIjk4IEE2XCIsIFwiOTggQTdcIiwgXCI5OCBBMlwiLCBcIjk4IEE1XCIsIFwiOTggQUFcIiwgXCI5OCA5M1wiLCBcIjk4IEFEXCIsIFwiOTggQjVcIiwgXCI5OCBCMlwiLCBcIkE0IDkwXCIsIFwiOTggQjdcIiwgXCJBNCA5MlwiLCBcIkE0IDk1XCIsIFwiOTggQjRcIiwgXCI5MiBBNFwiLCBcIjkyIEE5XCIsIFwiOTggODhcIiwgXCI5MSBCRlwiLCBcIjkxIEI5XCIsIFwiOTEgQkFcIiwgXCI5MiA4MFwiLCBcIjkxIEJCXCIsIFwiOTEgQkRcIiwgXCJBNCA5NlwiLCBcIjk4IEJBXCIsIFwiOTggQjhcIiwgXCI5OCBCOVwiLCBcIjk4IEJCXCIsIFwiOTggQkNcIiwgXCI5OCBCRFwiLCBcIjk5IDgwXCIsIFwiOTggQkZcIiwgXCI5OCBCRVwiLCBcIjk5IDhDXCIsIFwiOTEgOEZcIiwgXCI5MSA4QlwiLCBcIjkxIDhEXCIsIFwiOTEgOEVcIiwgXCI5MSA4QVwiLCBcIkUyIDlDIDhBXCIsIFwiRTIgOUMgOEMgRUYgQjggOEZcIiwgXCI5MSA4Q1wiLCBcIkUyIDlDIDhCXCIsIFwiOTEgOTBcIiwgXCI5MiBBQVwiLCBcIjk5IDhGXCIsIFwiRTIgOTggOUQgRUYgQjggOEZcIiwgXCI5MSA4NlwiLCBcIjkxIDg3XCIsIFwiOTEgODhcIiwgXCI5MSA4OVwiLCBcIjk2IDk1XCIsIFwiOTYgOTBcIiwgXCJBNCA5OFwiLCBcIjk2IDk2XCIsIFwiRTIgOUMgOEQgRUYgQjggOEZcIiwgXCI5MiA4NVwiLCBcIjkxIDg0XCIsIFwiOTEgODVcIiwgXCI5MSA4MlwiLCBcIjkxIDgzXCIsIFwiOTEgODFcIiwgXCI5MSA4MFwiLCBcIjkxIEE0XCIsIFwiOTEgQTVcIiwgXCI5NyBBM1wiLCBcIjkxIEI2XCIsIFwiOTEgQTZcIiwgXCI5MSBBN1wiLCBcIjkxIEE4XCIsIFwiOTEgQTlcIiwgXCI5MSBCMVwiLCBcIjkxIEI0XCIsIFwiOTEgQjVcIiwgXCI5MSBCMlwiLCBcIjkxIEIzXCIsIFwiOTEgQUVcIiwgXCI5MSBCN1wiLCBcIjkyIDgyXCIsIFwiOTUgQjVcIiwgXCI4RSA4NVwiLCBcIjkxIEJDXCIsIFwiOTEgQjhcIiwgXCI5MSBCMFwiLCBcIjlBIEI2XCIsIFwiOEYgODNcIiwgXCI5MiA4M1wiLCBcIjkxIEFGXCIsIFwiOTEgQUJcIiwgXCI5MSBBQ1wiLCBcIjkxIEFEXCIsIFwiOTkgODdcIiwgXCI5MiA4MVwiLCBcIjk5IDg1XCIsIFwiOTkgODZcIiwgXCI5OSA4QlwiLCBcIjk5IDhFXCIsIFwiOTkgOERcIiwgXCI5MiA4N1wiLCBcIjkyIDg2XCIsIFwiOTIgOTFcIiwgXCI5MSBBOSBFMiA4MCA4RCBFMiA5RCBBNCBFRiBCOCA4RiBFMiA4MCA4RCBGMCA5RiA5MSBBOVwiLCBcIjkxIEE4IEUyIDgwIDhEIEUyIDlEIEE0IEVGIEI4IDhGIEUyIDgwIDhEIEYwIDlGIDkxIEE4XCIsIFwiOTIgOEZcIiwgXCI5MSBBOSBFMiA4MCA4RCBFMiA5RCBBNCBFRiBCOCA4RiBFMiA4MCA4RCBGMCA5RiA5MiA4QiBFMiA4MCA4RCBGMCA5RiA5MSBBOVwiLCBcIjkxIEE4IEUyIDgwIDhEIEUyIDlEIEE0IEVGIEI4IDhGIEUyIDgwIDhEIEYwIDlGIDkyIDhCIEUyIDgwIDhEIEYwIDlGIDkxIEE4XCIsIFwiOTEgQUFcIiwgXCI5MSBBOCBFMiA4MCA4RCBGMCA5RiA5MSBBOSBFMiA4MCA4RCBGMCA5RiA5MSBBN1wiLCBcIjkxIEE4IEUyIDgwIDhEIEYwIDlGIDkxIEE5IEUyIDgwIDhEIEYwIDlGIDkxIEE3IEUyIDgwIDhEIEYwIDlGIDkxIEE2XCIsIFwiOTEgQTggRTIgODAgOEQgRjAgOUYgOTEgQTkgRTIgODAgOEQgRjAgOUYgOTEgQTYgRTIgODAgOEQgRjAgOUYgOTEgQTZcIiwgXCI5MSBBOCBFMiA4MCA4RCBGMCA5RiA5MSBBOSBFMiA4MCA4RCBGMCA5RiA5MSBBNyBFMiA4MCA4RCBGMCA5RiA5MSBBN1wiLCBcIjkxIEE5IEUyIDgwIDhEIEYwIDlGIDkxIEE5IEUyIDgwIDhEIEYwIDlGIDkxIEE2XCIsIFwiOTEgQTkgRTIgODAgOEQgRjAgOUYgOTEgQTkgRTIgODAgOEQgRjAgOUYgOTEgQTdcIiwgXCI5MSBBOSBFMiA4MCA4RCBGMCA5RiA5MSBBOSBFMiA4MCA4RCBGMCA5RiA5MSBBNyBFMiA4MCA4RCBGMCA5RiA5MSBBNlwiLCBcIjkxIEE5IEUyIDgwIDhEIEYwIDlGIDkxIEE5IEUyIDgwIDhEIEYwIDlGIDkxIEE2IEUyIDgwIDhEIEYwIDlGIDkxIEE2XCIsIFwiOTEgQTkgRTIgODAgOEQgRjAgOUYgOTEgQTkgRTIgODAgOEQgRjAgOUYgOTEgQTcgRTIgODAgOEQgRjAgOUYgOTEgQTdcIiwgXCI5MSBBOCBFMiA4MCA4RCBGMCA5RiA5MSBBOCBFMiA4MCA4RCBGMCA5RiA5MSBBNlwiLCBcIjkxIEE4IEUyIDgwIDhEIEYwIDlGIDkxIEE4IEUyIDgwIDhEIEYwIDlGIDkxIEE3XCIsIFwiOTEgQTggRTIgODAgOEQgRjAgOUYgOTEgQTggRTIgODAgOEQgRjAgOUYgOTEgQTcgRTIgODAgOEQgRjAgOUYgOTEgQTZcIiwgXCI5MSBBOCBFMiA4MCA4RCBGMCA5RiA5MSBBOCBFMiA4MCA4RCBGMCA5RiA5MSBBNiBFMiA4MCA4RCBGMCA5RiA5MSBBNlwiLCBcIjkxIEE4IEUyIDgwIDhEIEYwIDlGIDkxIEE4IEUyIDgwIDhEIEYwIDlGIDkxIEE3IEUyIDgwIDhEIEYwIDlGIDkxIEE3XCIsIFwiOTEgOUFcIiwgXCI5MSA5NVwiLCBcIjkxIDk2XCIsIFwiOTEgOTRcIiwgXCI5MSA5N1wiLCBcIjkxIDk5XCIsIFwiOTEgOThcIiwgXCI5MiA4NFwiLCBcIjkyIDhCXCIsIFwiOTEgQTNcIiwgXCI5MSBBMFwiLCBcIjkxIEExXCIsIFwiOTEgQTJcIiwgXCI5MSA5RVwiLCBcIjkxIDlGXCIsIFwiOTEgOTJcIiwgXCI4RSBBOVwiLCBcIkUyIDlCIDkxXCIsIFwiOEUgOTNcIiwgXCI5MSA5MVwiLCBcIjhFIDkyXCIsIFwiOTEgOURcIiwgXCI5MSA5QlwiLCBcIjkxIDlDXCIsIFwiOTIgQkNcIiwgXCI5MSA5M1wiLCBcIjk1IEI2XCIsIFwiOTIgOERcIiwgXCI4QyA4MlwiLCBcIjlCIDkxXCIsIFwiOTAgQjZcIiwgXCI5MCBCMVwiLCBcIjkwIEFEXCIsIFwiOTAgQjlcIiwgXCI5MCBCMFwiLCBcIjkwIEJCXCIsIFwiOTAgQkNcIiwgXCI5MCBBOFwiLCBcIjkwIEFGXCIsIFwiQTYgODFcIiwgXCI5MCBBRVwiLCBcIjkwIEI3XCIsIFwiOTAgQkRcIiwgXCI5MCBCOFwiLCBcIjkwIDk5XCIsIFwiOTAgQjVcIiwgXCI5OSA4OFwiLCBcIjk5IDg5XCIsIFwiOTkgOEFcIiwgXCI5MCA5MlwiLCBcIjkwIDk0XCIsIFwiOTAgQTdcIiwgXCI5MCBBNlwiLCBcIjkwIEE0XCIsIFwiOTAgQTNcIiwgXCI5MCBBNVwiLCBcIjkwIEJBXCIsIFwiOTAgOTdcIiwgXCI5MCBCNFwiLCBcIkE2IDg0XCIsIFwiOTAgOURcIiwgXCI5MCA5QlwiLCBcIjkwIDhDXCIsIFwiOTAgOUVcIiwgXCI5MCA5Q1wiLCBcIjk1IEI3XCIsIFwiQTYgODJcIiwgXCJBNiA4MFwiLCBcIjkwIDhEXCIsIFwiOTAgQTJcIiwgXCI5MCBBMFwiLCBcIjkwIDlGXCIsIFwiOTAgQTFcIiwgXCI5MCBBQ1wiLCBcIjkwIEIzXCIsIFwiOTAgOEJcIiwgXCI5MCA4QVwiLCBcIjkwIDg2XCIsIFwiOTAgODVcIiwgXCI5MCA4M1wiLCBcIjkwIDgyXCIsIFwiOTAgODRcIiwgXCI5MCBBQVwiLCBcIjkwIEFCXCIsIFwiOTAgOThcIiwgXCI5MCA5MFwiLCBcIjkwIDhGXCIsIFwiOTAgOTFcIiwgXCI5MCA4RVwiLCBcIjkwIDk2XCIsIFwiOTAgODBcIiwgXCI5MCA4MVwiLCBcIjkwIDkzXCIsIFwiQTYgODNcIiwgXCI5NSA4QVwiLCBcIjkwIDk1XCIsIFwiOTAgQTlcIiwgXCI5MCA4OFwiLCBcIjkwIDg3XCIsIFwiOTAgQkZcIiwgXCI5MCBCRVwiLCBcIjkwIDg5XCIsIFwiOTAgQjJcIiwgXCI4QyBCNVwiLCBcIjhFIDg0XCIsIFwiOEMgQjJcIiwgXCI4QyBCM1wiLCBcIjhDIEI0XCIsIFwiOEMgQjFcIiwgXCI4QyBCRlwiLCBcIkUyIDk4IDk4XCIsIFwiOEQgODBcIiwgXCI4RSA4RFwiLCBcIjhFIDhCXCIsIFwiOEQgODNcIiwgXCI4RCA4MlwiLCBcIjhEIDgxXCIsIFwiOEMgQkVcIiwgXCI4QyBCQVwiLCBcIjhDIEJBXCIsIFwiOEMgQkJcIiwgXCI4QyBCOVwiLCBcIjhDIEI3XCIsIFwiOEMgQkNcIiwgXCI4QyBCOFwiLCBcIjkyIDkwXCIsIFwiOEQgODRcIiwgXCI4QyBCMFwiLCBcIjhFIDgzXCIsIFwiOTAgOUFcIiwgXCI5NSBCOFwiLCBcIjhDIDhFXCIsIFwiOEMgOERcIiwgXCI4QyA4RlwiLCBcIjhDIDk1XCIsIFwiOEMgOTZcIiwgXCI4QyA5N1wiLCBcIjhDIDk4XCIsIFwiOEMgOTFcIiwgXCI4QyA5MlwiLCBcIjhDIDkzXCIsIFwiOEMgOTRcIiwgXCI4QyA5QVwiLCBcIjhDIDlEXCIsIFwiOEMgOUJcIiwgXCI4QyA5Q1wiLCBcIjhDIDlFXCIsIFwiOEMgOTlcIiwgXCJFMiBBRCA5MCBFRiBCOCA4RlwiLCBcIjhDIDlGXCIsIFwiOTIgQUJcIiwgXCJFMiA5QyBBOFwiLCBcIkUyIDk4IDg0IEVGIEI4IDhGXCIsIFwiRTIgOTggODAgRUYgQjggOEZcIiwgXCI4QyBBNFwiLCBcIkUyIDlCIDg1IEVGIEI4IDhGXCIsIFwiOEMgQTVcIiwgXCI4QyBBNlwiLCBcIkUyIDk4IDgxIEVGIEI4IDhGXCIsIFwiOEMgQTdcIiwgXCJFMiA5QiA4OFwiLCBcIjhDIEE5XCIsIFwiRTIgOUEgQTEgRUYgQjggOEZcIiwgXCI5NCBBNVwiLCBcIjkyIEE1XCIsIFwiRTIgOUQgODQgRUYgQjggOEZcIiwgXCI4QyBBOFwiLCBcIkUyIDk4IDgzIEVGIEI4IDhGXCIsIFwiRTIgOUIgODQgRUYgQjggOEZcIiwgXCI4QyBBQ1wiLCBcIjkyIEE4XCIsIFwiOEMgQUFcIiwgXCI4QyBBQlwiLCBcIkUyIDk4IDgyIEVGIEI4IDhGXCIsIFwiRTIgOTggOTQgRUYgQjggOEZcIiwgXCI5MiBBN1wiLCBcIjkyIEE2XCIsIFwiOEMgOEFcIiwgXCI5QiA5MVwiLCBcIjlCIDkxXCIsIFwiOEQgOEZcIiwgXCI4RCA4RVwiLCBcIjhEIDkwXCIsIFwiOEQgOEFcIiwgXCI4RCA4QlwiLCBcIjhEIDhDXCIsIFwiOEQgODlcIiwgXCI4RCA4N1wiLCBcIjhEIDkzXCIsIFwiOEQgODhcIiwgXCI4RCA5MlwiLCBcIjhEIDkxXCIsIFwiOEQgOERcIiwgXCI4RCA4NVwiLCBcIjhEIDg2XCIsIFwiOEMgQjZcIiwgXCI4QyBCRFwiLCBcIjhEIEEwXCIsIFwiOEQgQUZcIiwgXCI4RCA5RVwiLCBcIkE3IDgwXCIsIFwiOEQgOTdcIiwgXCI4RCA5NlwiLCBcIjhEIEE0XCIsIFwiOEQgQjNcIiwgXCI4RCA5NFwiLCBcIjhEIDlGXCIsIFwiOEMgQURcIiwgXCI4RCA5NVwiLCBcIjhEIDlEXCIsIFwiOEMgQUVcIiwgXCI4QyBBRlwiLCBcIjhEIDlDXCIsIFwiOEQgQjJcIiwgXCI4RCBBNVwiLCBcIjhEIEEzXCIsIFwiOEQgQjFcIiwgXCI4RCA5QlwiLCBcIjhEIDk5XCIsIFwiOEQgOUFcIiwgXCI4RCA5OFwiLCBcIjhEIEEyXCIsIFwiOEQgQTFcIiwgXCI4RCBBN1wiLCBcIjhEIEE4XCIsIFwiOEQgQTZcIiwgXCI4RCBCMFwiLCBcIjhFIDgyXCIsIFwiOEQgQUVcIiwgXCI4RCBBQ1wiLCBcIjhEIEFEXCIsIFwiOEQgQUJcIiwgXCI4RCBCRlwiLCBcIjhEIEE5XCIsIFwiOEQgQUFcIiwgXCI4RCBCQVwiLCBcIjhEIEJCXCIsIFwiOEQgQjdcIiwgXCI4RCBCOFwiLCBcIjhEIEI5XCIsIFwiOEQgQkVcIiwgXCI4RCBCNlwiLCBcIjhEIEI1XCIsIFwiRTIgOTggOTUgRUYgQjggOEZcIiwgXCI4RCBCQ1wiLCBcIjhEIEI0XCIsIFwiOEQgQkRcIixcIjlCIDkxXCIsIFwiOUIgOTFcIiwgXCI5QiA5MVwiLCBcIkUyIDlBIEJEIEVGIEI4IDhGXCIsIFwiOEYgODBcIiwgXCI4RiA4OFwiLCBcIkUyIDlBIEJFIEVGIEI4IDhGXCIsIFwiOEUgQkVcIiwgXCI4RiA5MFwiLCBcIjhGIDg5XCIsIFwiOEUgQjFcIiwgXCJFMiA5QiBCMyBFRiBCOCA4RlwiLCBcIjhGIDhDXCIsIFwiOEYgOTNcIiwgXCI4RiBCOFwiLCBcIjhGIDkyXCIsIFwiOEYgOTFcIiwgXCI4RiA4RlwiLCBcIjhFIEJGXCIsIFwiRTIgOUIgQjdcIiwgXCI4RiA4MlwiLCBcIkUyIDlCIEI4XCIsIFwiOEYgQjlcIiwgXCI4RSBBM1wiLCBcIjlBIEEzXCIsIFwiOEYgOEFcIiwgXCI4RiA4NFwiLCBcIjlCIDgwXCIsIFwiRTIgOUIgQjlcIiwgXCI4RiA4QlwiLCBcIjlBIEI0XCIsIFwiOUEgQjVcIiwgXCI4RiA4N1wiLCBcIjk1IEI0XCIsIFwiOEYgODZcIiwgXCI4RSBCRFwiLCBcIjhGIDg1XCIsIFwiOEUgOTZcIiwgXCI4RSA5N1wiLCBcIjhGIEI1XCIsIFwiOEUgQUJcIiwgXCI4RSA5RlwiLCBcIjhFIEFEXCIsIFwiOEUgQThcIiwgXCI4RSBBQVwiLCBcIjhFIEE0XCIsIFwiOEUgQTdcIiwgXCI4RSBCQ1wiLCBcIjhFIEI5XCIsIFwiOEUgQjdcIiwgXCI4RSBCQVwiLCBcIjhFIEI4XCIsIFwiOEUgQkJcIiwgXCI4RSBBQ1wiLCBcIjhFIEFFXCIsIFwiOTEgQkVcIiwgXCI4RSBBRlwiLCBcIjhFIEIyXCIsIFwiOEUgQjBcIiwgXCI4RSBCM1wiLCBcIjlCIDkxXCIsIFwiOUIgOTFcIiwgXCI5QiA5MVwiLCBcIjlBIDk3XCIsIFwiOUEgOTVcIiwgXCI5QSA5OVwiLCBcIjlBIDhDXCIsIFwiOUEgOEVcIiwgXCI4RiA4RVwiLCBcIjlBIDkzXCIsIFwiOUEgOTFcIiwgXCI5QSA5MlwiLCBcIjlBIDkwXCIsIFwiOUEgOUFcIiwgXCI5QSA5QlwiLCBcIjlBIDlDXCIsXCI4RiA4RFwiLCBcIjlBIEIyXCIsIFwiOUEgQThcIiwgXCI5QSA5NFwiLCBcIjlBIDhEXCIsIFwiOUEgOThcIiwgXCI5QSA5NlwiLCBcIjlBIEExXCIsIFwiOUEgQTBcIiwgXCI5QSBBRlwiLCBcIjlBIDgzXCIsIFwiOUEgOEJcIiwgXCI5QSA5RFwiLCBcIjlBIDg0XCIsIFwiOUEgODVcIiwgXCI5QSA4OFwiLCBcIjlBIDlFXCIsIFwiOUEgODJcIiwgXCI5QSA4NlwiLCBcIjlBIDg3XCIsIFwiOUEgOEFcIiwgXCI5QSA4OVwiLCBcIjlBIDgxXCIsIFwiOUIgQTlcIiwgXCJFMiA5QyA4OCBFRiBCOCA4RlwiLCBcIjlCIEFCXCIsIFwiOUIgQUNcIiwgXCJFMiA5QiBCNSBFRiBCOCA4RlwiLCBcIjlCIEE1XCIsIFwiOUEgQTRcIiwgXCJFMiA5QiBCNFwiLCBcIjlCIEIzXCIsIFwiOUEgODBcIiwgXCI5QiBCMFwiLCBcIjkyIEJBXCIsIFwiRTIgOUEgOTMgRUYgQjggOEZcIiwgXCI5QSBBN1wiLCBcIkUyIDlCIEJEIEVGIEI4IDhGXCIsIFwiOUEgOEZcIiwgXCI5QSBBNlwiLCBcIjlBIEE1XCIsIFwiOEYgODFcIiwgXCI5QSBBMlwiLCBcIjhFIEExXCIsIFwiOEUgQTJcIiwgXCI4RSBBMFwiLCBcIjhGIDk3XCIsIFwiOEMgODFcIiwgXCI5NyBCQ1wiLCBcIjhGIEFEXCIsIFwiRTIgOUIgQjIgRUYgQjggOEZcIiwgXCI4RSA5MVwiLCBcIkUyIDlCIEIwXCIsIFwiOEYgOTRcIiwgXCI5NyBCQlwiLCBcIjhDIDhCXCIsIFwiOTcgQkVcIiwgXCI4RiA5NVwiLCBcIkUyIDlCIEJBIEVGIEI4IDhGXCIsIFwiOEYgOUVcIiwgXCI5QiBBM1wiLCBcIjlCIEE0XCIsIFwiOEMgODVcIiwgXCI4QyA4NFwiLCBcIjhGIDlDXCIsIFwiOEYgOTZcIiwgXCI4RiA5RFwiLCBcIjhDIDg3XCIsIFwiOEMgODZcIiwgXCI4RiA5OVwiLCBcIjhDIDgzXCIsIFwiOEMgODlcIiwgXCI4QyA4Q1wiLCBcIjhDIEEwXCIsIFwiOEUgODdcIiwgXCI4RSA4NlwiLCBcIjhDIDg4XCIsIFwiOEYgOThcIiwgXCI4RiBCMFwiLCBcIjhGIEFGXCIsIFwiOEYgOUZcIiwgXCI5NyBCRFwiLCBcIjhGIEEwXCIsIFwiOEYgQTFcIiwgXCI4RiA5QVwiLCBcIjhGIEEyXCIsIFwiOEYgQUNcIiwgXCI4RiBBM1wiLCBcIjhGIEE0XCIsIFwiOEYgQTVcIiwgXCI4RiBBNlwiLCBcIjhGIEE4XCIsIFwiOEYgQUFcIiwgXCI4RiBBQlwiLCBcIjhGIEE5XCIsIFwiOTIgOTJcIiwgXCI4RiA5QlwiLCBcIkUyIDlCIEFBIEVGIEI4IDhGXCIsIFwiOTUgOENcIiwgXCI5NSA4RFwiLCBcIjk1IDhCXCIsIFwiRTIgOUIgQTlcIiwgXCJFMiA4QyA5QSBFRiBCOCA4RlwiLCBcIjkzIEIxXCIsIFwiOTMgQjJcIiwgXCI5MiBCQlwiLCBcIkUyIDhDIEE4IEVGIEI4IDhGXCIsIFwiOTYgQTVcIiwgXCI5NiBBOFwiLCBcIjk2IEIxXCIsIFwiOTYgQjJcIiwgXCI5NSBCOVwiLCBcIjk3IDlDXCIsIFwiOTIgQkRcIiwgXCI5MiBCRVwiLCBcIjkyIEJGXCIsIFwiOTMgODBcIiwgXCI5MyBCQ1wiLCBcIjkzIEI3XCIsIFwiOTMgQjhcIiwgXCI5MyBCOVwiLCBcIjhFIEE1XCIsIFwiOTMgQkRcIiwgXCI4RSA5RVwiLCBcIjkzIDlFXCIsIFwiRTIgOTggOEUgRUYgQjggOEZcIiwgXCI5MyA5RlwiLCBcIjkzIEEwXCIsIFwiOTMgQkFcIiwgXCI5MyBCQlwiLCBcIjhFIDk5XCIsIFwiOEUgOUFcIiwgXCI4RSA5QlwiLCBcIkUyIDhGIEIxXCIsIFwiRTIgOEYgQjJcIiwgXCJFMiA4RiBCMFwiLCBcIjk1IEIwXCIsIFwiRTIgOEYgQjNcIiwgXCJFMiA4QyA5QiBFRiBCOCA4RlwiLCBcIjkzIEExXCIsIFwiOTQgOEJcIiwgXCI5NCA4Q1wiLCBcIjkyIEExXCIsIFwiOTQgQTZcIiwgXCI5NSBBRlwiLCBcIjk3IDkxXCIsIFwiOUIgQTJcIiwgXCI5MiBCOFwiLCBcIjkyIEI1XCIsIFwiOTIgQjRcIiwgXCI5MiBCNlwiLCBcIjkyIEI3XCIsIFwiOTIgQjBcIiwgXCI5MiBCM1wiLCBcIjkyIDhFXCIsIFwiRTIgOUEgOTZcIiwgXCI5NCBBN1wiLCBcIjk0IEE4XCIsIFwiRTIgOUEgOTJcIiwgXCI5QiBBMFwiLCBcIkUyIDlCIDhGXCIsIFwiOTQgQTlcIiwgXCJFMiA5QSA5OVwiLCBcIkUyIDlCIDkzXCIsIFwiOTQgQUJcIiwgXCI5MiBBM1wiLCBcIjk0IEFBXCIsIFwiOTcgQTFcIiwgXCJFMiA5QSA5NFwiLCBcIjlCIEExXCIsIFwiOUEgQUNcIiwgXCJFMiA5OCBBMCBFRiBCOCA4RlwiLCBcIkUyIDlBIEIwXCIsIFwiRTIgOUEgQjFcIiwgXCI4RiBCQVwiLCBcIjk0IEFFXCIsIFwiOTMgQkZcIiwgXCI5MiA4OFwiLCBcIkUyIDlBIDk3XCIsIFwiOTQgQURcIiwgXCI5NCBBQ1wiLCBcIjk1IEIzXCIsIFwiOTIgOEFcIiwgXCI5MiA4OVwiLCBcIjhDIEExXCIsIFwiOEYgQjdcIiwgXCI5NCA5NlwiLCBcIjlBIEJEXCIsIFwiOUEgQkZcIiwgXCI5QiA4MVwiLCBcIjk0IDkxXCIsIFwiOTcgOURcIiwgXCI5QiA4QlwiLCBcIjlCIDhDXCIsIFwiOUIgOEZcIiwgXCI5QSBBQVwiLCBcIjlCIDhFXCIsIFwiOTYgQkNcIiwgXCI5NyBCQVwiLCBcIkUyIDlCIEIxXCIsIFwiOTcgQkZcIiwgXCI5QiA4RFwiLCBcIjhFIDg4XCIsIFwiOEUgOEZcIiwgXCI4RSA4MFwiLCBcIjhFIDgxXCIsIFwiOEUgOEFcIiwgXCI4RSA4OVwiLCBcIjhFIDhFXCIsIFwiOEUgOTBcIiwgXCI4RSA4Q1wiLCBcIjhGIEFFXCIsIFwiRTIgOUMgODkgRUYgQjggOEZcIiwgXCI5MyBBOVwiLCBcIjkzIEE4XCIsIFwiOTMgQTdcIiwgXCI5MiA4Q1wiLCBcIjkzIEFFXCIsIFwiOTMgQUFcIiwgXCI5MyBBQlwiLCBcIjkzIEFDXCIsIFwiOTMgQURcIiwgXCI5MyBBNlwiLCBcIjkzIEFGXCIsIFwiOTMgQTVcIiwgXCI5MyBBNFwiLCBcIjkzIDlDXCIsIFwiOTMgODNcIiwgXCI5MyA5MVwiLCBcIjkzIDhBXCIsIFwiOTMgODhcIiwgXCI5MyA4OVwiLCBcIjkzIDg0XCIsIFwiOTMgODVcIiwgXCI5MyA4NlwiLCBcIjk3IDkzXCIsIFwiOTMgODdcIiwgXCI5NyA4M1wiLCBcIjk3IEIzXCIsIFwiOTcgODRcIiwgXCI5MyA4QlwiLCBcIjk3IDkyXCIsIFwiOTMgODFcIiwgXCI5MyA4MlwiLCBcIjk3IDgyXCIsIFwiOTcgOUVcIiwgXCI5MyBCMFwiLCBcIjkzIDkzXCIsIFwiOTMgOTVcIiwgXCI5MyA5N1wiLCBcIjkzIDk4XCIsIFwiOTMgOTlcIiwgXCI5MyA5NFwiLCBcIjkzIDkyXCIsIFwiOTMgOUFcIiwgXCI5MyA5NlwiLCBcIjk0IDk3XCIsIFwiOTMgOEVcIiwgXCI5NiA4N1wiLCBcIkUyIDlDIDgyIEVGIEI4IDhGXCIsIFwiOTMgOTBcIiwgXCI5MyA4RlwiLCBcIjkzIDhDXCIsIFwiOTMgOERcIiwgXCI5QSBBOVwiLCBcIjhGIEIzXCIsIFwiOEYgQjRcIiwgXCI5NCA5MFwiLCBcIjk0IDkyXCIsIFwiOTQgOTNcIiwgXCI5NCA4RlwiLCBcIjk2IDhBXCIsIFwiOTYgOEJcIiwgXCJFMiA5QyA5MiBFRiBCOCA4RlwiLCBcIjkzIDlEXCIsIFwiRTIgOUMgOEYgRUYgQjggOEZcIiwgXCI5NiA4RFwiLCBcIjk2IDhDXCIsIFwiOTQgOERcIiwgXCI5NCA4RVwiLCBcIjlCIDkxXCIsIFwiOUIgOTFcIiwgXCJFMiA5RCBBNCBFRiBCOCA4RlwiLCBcIjkyIDlCXCIsIFwiOTIgOUFcIiwgXCI5MiA5OVwiLCBcIjkyIDlDXCIsIFwiOTIgOTRcIiwgXCJFMiA5RCBBMyBFRiBCOCA4RlwiLCBcIjkyIDk1XCIsIFwiOTIgOUVcIiwgXCI5MiA5M1wiLCBcIjkyIDk3XCIsIFwiOTIgOTZcIiwgXCI5MiA5OFwiLCBcIjkyIDlEXCIsIFwiOTIgOUZcIiwgXCJFMiA5OCBBRSBFRiBCOCA4RlwiLCBcIkUyIDlDIDlEIEVGIEI4IDhGXCIsIFwiRTIgOTggQUEgRUYgQjggOEZcIiwgXCI5NSA4OVwiLCBcIkUyIDk4IEI4IEVGIEI4IDhGXCIsIFwiRTIgOUMgQTEgRUYgQjggOEZcIiwgXCI5NCBBRlwiLCBcIjk1IDhFXCIsIFwiRTIgOTggQUYgRUYgQjggOEZcIiwgXCJFMiA5OCBBNiBFRiBCOCA4RlwiLCBcIjlCIDkwXCIsIFwiRTIgOUIgOEVcIiwgXCJFMiA5OSA4OCBFRiBCOCA4RlwiLCBcIkUyIDk5IDg5IEVGIEI4IDhGXCIsIFwiRTIgOTkgOEEgRUYgQjggOEZcIiwgXCJFMiA5OSA4QiBFRiBCOCA4RlwiLCBcIkUyIDk5IDhDIEVGIEI4IDhGXCIsIFwiRTIgOTkgOEQgRUYgQjggOEZcIiwgXCJFMiA5OSA4RSBFRiBCOCA4RlwiLCBcIkUyIDk5IDhGIEVGIEI4IDhGXCIsIFwiRTIgOTkgOTAgRUYgQjggOEZcIiwgXCJFMiA5OSA5MSBFRiBCOCA4RlwiLCBcIkUyIDk5IDkyIEVGIEI4IDhGXCIsIFwiRTIgOTkgOTMgRUYgQjggOEZcIiwgXCI4NiA5NFwiLCBcIkUyIDlBIDlCXCIsIFwiODggQjNcIiwgXCI4OCBCOVwiLCBcIkUyIDk4IEEyIEVGIEI4IDhGXCIsIFwiRTIgOTggQTMgRUYgQjggOEZcIiwgXCI5MyBCNFwiLCBcIjkzIEIzXCIsIFwiODggQjZcIiwgXCI4OCA5QSBFRiBCOCA4RlwiLCBcIjg4IEI4XCIsIFwiODggQkFcIiwgXCI4OCBCNyBFRiBCOCA4RlwiLCBcIkUyIDlDIEI0IEVGIEI4IDhGXCIsIFwiODYgOUFcIiwgXCI4OSA5MVwiLCBcIjkyIEFFXCIsIFwiODkgOTBcIiwgXCJFMyA4QSA5OSBFRiBCOCA4RlwiLCBcIkUzIDhBIDk3IEVGIEI4IDhGXCIsIFwiODggQjRcIiwgXCI4OCBCNVwiLCBcIjg4IEIyXCIsIFwiODUgQjAgRUYgQjggOEZcIiwgXCI4NSBCMSBFRiBCOCA4RlwiLCBcIjg2IDhFXCIsIFwiODYgOTFcIiwgXCI4NSBCRSBFRiBCOCA4RlwiLCBcIjg2IDk4XCIsIFwiRTIgOUIgOTQgRUYgQjggOEZcIiwgXCI5MyA5QlwiLCBcIjlBIEFCXCIsIFwiRTIgOUQgOENcIiwgXCJFMiBBRCA5NSBFRiBCOCA4RlwiLCBcIjkyIEEyXCIsIFwiRTIgOTkgQTggRUYgQjggOEZcIiwgXCI5QSBCN1wiLCBcIjlBIEFGXCIsIFwiOUEgQjNcIiwgXCI5QSBCMVwiLCBcIjk0IDlFXCIsIFwiOTMgQjVcIiwgXCJFMiA5RCA5NyBFRiBCOCA4RlwiLCBcIkUyIDlEIDk1XCIsIFwiRTIgOUQgOTNcIiwgXCJFMiA5RCA5NFwiLCBcIkUyIDgwIEJDIEVGIEI4IDhGXCIsIFwiRTIgODEgODkgRUYgQjggOEZcIiwgXCI5MiBBRlwiLCBcIjk0IDg1XCIsIFwiOTQgODZcIiwgXCI5NCBCMVwiLCBcIkUyIDlBIDlDXCIsIFwiRTMgODAgQkQgRUYgQjggOEZcIiwgXCJFMiA5QSBBMCBFRiBCOCA4RlwiLCBcIjlBIEI4XCIsIFwiOTQgQjBcIiwgXCJFMiA5OSBCQiBFRiBCOCA4RlwiLCBcIjg4IEFGIEVGIEI4IDhGXCIsIFwiOTIgQjlcIiwgXCJFMiA5RCA4NyBFRiBCOCA4RlwiLCBcIkUyIDlDIEIzIEVGIEI4IDhGXCIsIFwiRTIgOUQgOEVcIiwgXCJFMiA5QyA4NVwiLCBcIjkyIEEwXCIsIFwiOEMgODBcIiwgXCJFMiA5RSBCRlwiLCBcIjhDIDkwXCIsIFwiRTIgOTMgODIgRUYgQjggOEZcIiwgXCI4RiBBN1wiLCBcIjg4IDgyIEVGIEI4IDhGXCIsIFwiOUIgODJcIiwgXCI5QiA4M1wiLCBcIjlCIDg0XCIsIFwiOUIgODVcIiwgXCJFMiA5OSBCRiBFRiBCOCA4RlwiLCBcIjlBIEFEXCIsIFwiOUEgQkVcIiwgXCI4NSBCRiBFRiBCOCA4RlwiLCBcIjlBIEIwXCIsIFwiOUEgQjlcIiwgXCI5QSBCQVwiLCBcIjlBIEJDXCIsIFwiOUEgQkJcIiwgXCI5QSBBRVwiLCBcIjhFIEE2XCIsIFwiOTMgQjZcIiwgXCI4OCA4MVwiLCBcIjg2IDk2XCIsIFwiODYgOTdcIiwgXCI4NiA5OVwiLCBcIjg2IDkyXCIsIFwiODYgOTVcIiwgXCI4NiA5M1wiLCBcIjMwIEVGIEI4IDhGIEUyIDgzIEEzXCIsIFwiMzEgRUYgQjggOEYgRTIgODMgQTNcIiwgXCIzMiBFRiBCOCA4RiBFMiA4MyBBM1wiLCBcIjMzIEVGIEI4IDhGIEUyIDgzIEEzXCIsIFwiMzQgRUYgQjggOEYgRTIgODMgQTNcIiwgXCIzNSBFRiBCOCA4RiBFMiA4MyBBM1wiLCBcIjM2IEVGIEI4IDhGIEUyIDgzIEEzXCIsIFwiMzcgRUYgQjggOEYgRTIgODMgQTNcIiwgXCIzOCBFRiBCOCA4RiBFMiA4MyBBM1wiLCBcIjM5IEVGIEI4IDhGIEUyIDgzIEEzXCIsIFwiOTQgOUZcIiwgXCI5NCBBMlwiLCBcIkUyIDk2IEI2IEVGIEI4IDhGXCIsIFwiRTIgOEYgQjhcIiwgXCJFMiA4RiBBRlwiLCBcIkUyIDhGIEI5XCIsIFwiRTIgOEYgQkFcIiwgXCJFMiA4RiBBRFwiLCBcIkUyIDhGIEFFXCIsIFwiRTIgOEYgQTlcIiwgXCJFMiA4RiBBQVwiLCBcIjk0IDgwXCIsIFwiOTQgODFcIiwgXCI5NCA4MlwiLCBcIkUyIDk3IDgwIEVGIEI4IDhGXCIsIFwiOTQgQkNcIiwgXCI5NCBCRFwiLCBcIkUyIDhGIEFCXCIsIFwiRTIgOEYgQUNcIiwgXCJFMiA5RSBBMSBFRiBCOCA4RlwiLCBcIkUyIEFDIDg1IEVGIEI4IDhGXCIsIFwiRTIgQUMgODYgRUYgQjggOEZcIiwgXCJFMiBBQyA4NyBFRiBCOCA4RlwiLCBcIkUyIDg2IDk3IEVGIEI4IDhGXCIsIFwiRTIgODYgOTggRUYgQjggOEZcIiwgXCJFMiA4NiA5OSBFRiBCOCA4RlwiLCBcIkUyIDg2IDk2IEVGIEI4IDhGXCIsIFwiRTIgODYgOTUgRUYgQjggOEZcIiwgXCJFMiA4NiA5NCBFRiBCOCA4RlwiLCBcIjk0IDg0XCIsIFwiRTIgODYgQUEgRUYgQjggOEZcIiwgXCJFMiA4NiBBOSBFRiBCOCA4RlwiLCBcIkUyIEE0IEI0IEVGIEI4IDhGXCIsIFwiRTIgQTQgQjUgRUYgQjggOEZcIiwgXCIyMyBFRiBCOCA4RiBFMiA4MyBBM1wiLCBcIjJBIEVGIEI4IDhGIEUyIDgzIEEzXCIsIFwiRTIgODQgQjkgRUYgQjggOEZcIiwgXCI5NCBBNFwiLCBcIjk0IEExXCIsIFwiOTQgQTBcIiwgXCI5NCBBM1wiLCBcIjhFIEI1XCIsIFwiOEUgQjZcIiwgXCJFMyA4MCBCMCBFRiBCOCA4RlwiLCBcIkUyIDlFIEIwXCIsIFwiRTIgOUMgOTQgRUYgQjggOEZcIiwgXCI5NCA4M1wiLCBcIkUyIDlFIDk1XCIsIFwiRTIgOUUgOTZcIiwgXCJFMiA5RSA5N1wiLCBcIkUyIDlDIDk2IEVGIEI4IDhGXCIsIFwiOTIgQjJcIiwgXCI5MiBCMVwiLCBcIkMyIEE5IEVGIEI4IDhGXCIsIFwiQzIgQUUgRUYgQjggOEZcIiwgXCJFMiA4NCBBMiBFRiBCOCA4RlwiLCBcIjk0IDlBXCIsIFwiOTQgOTlcIiwgXCI5NCA5QlwiLCBcIjk0IDlEXCIsIFwiOTQgOUNcIiwgXCJFMiA5OCA5MSBFRiBCOCA4RlwiLCBcIjk0IDk4XCIsIFwiRTIgOUEgQUEgRUYgQjggOEZcIiwgXCJFMiA5QSBBQiBFRiBCOCA4RlwiLCBcIjk0IEI0XCIsIFwiOTQgQjVcIiwgXCI5NCBCOFwiLCBcIjk0IEI5XCIsIFwiOTQgQjZcIiwgXCI5NCBCN1wiLCBcIjk0IEJBXCIsIFwiRTIgOTYgQUEgRUYgQjggOEZcIiwgXCJFMiA5NiBBQiBFRiBCOCA4RlwiLCBcIkUyIEFDIDlCIEVGIEI4IDhGXCIsIFwiRTIgQUMgOUMgRUYgQjggOEZcIiwgXCI5NCBCQlwiLCBcIkUyIDk3IEJDIEVGIEI4IDhGXCIsIFwiRTIgOTcgQkIgRUYgQjggOEZcIiwgXCJFMiA5NyBCRSBFRiBCOCA4RlwiLCBcIkUyIDk3IEJEIEVGIEI4IDhGXCIsIFwiOTQgQjJcIiwgXCI5NCBCM1wiLCBcIjk0IDg4XCIsIFwiOTQgODlcIiwgXCI5NCA4QVwiLCBcIjk0IDg3XCIsIFwiOTMgQTNcIiwgXCI5MyBBMlwiLCBcIjk0IDk0XCIsIFwiOTQgOTVcIiwgXCI4MyA4RlwiLCBcIjgwIDg0IEVGIEI4IDhGXCIsIFwiRTIgOTkgQTAgRUYgQjggOEZcIiwgXCJFMiA5OSBBMyBFRiBCOCA4RlwiLCBcIkUyIDk5IEE1IEVGIEI4IDhGXCIsIFwiRTIgOTkgQTYgRUYgQjggOEZcIiwgXCI4RSBCNFwiLCBcIjkxIDgxIEUyIDgwIDhEIEYwIDlGIDk3IEE4XCIsIFwiOTIgQURcIiwgXCI5NyBBRlwiLCBcIjkyIEFDXCIsIFwiOTUgOTBcIiwgXCI5NSA5MVwiLCBcIjk1IDkyXCIsIFwiOTUgOTNcIiwgXCI5NSA5NFwiLCBcIjk1IDk1XCIsIFwiOTUgOTZcIiwgXCI5NSA5N1wiLCBcIjk1IDk4XCIsIFwiOTUgOTlcIiwgXCI5NSA5QVwiLCBcIjk1IDlCXCIsIFwiOTUgOUNcIiwgXCI5NSA5RFwiLCBcIjk1IDlFXCIsIFwiOTUgOUZcIiwgXCI5NSBBMFwiLCBcIjk1IEExXCIsIFwiOTUgQTJcIiwgXCI5NSBBM1wiLCBcIjk1IEE0XCIsIFwiOTUgQTVcIiwgXCI5NSBBNlwiLCBcIjk1IEE3XCIsIFwiOUIgOTFcIiwgXCI4NyBBNiBGMCA5RiA4NyBBQlwiLCBcIjg3IEE2IEYwIDlGIDg3IEJEXCIsIFwiODcgQTYgRjAgOUYgODcgQjFcIiwgXCI4NyBBOSBGMCA5RiA4NyBCRlwiLCBcIjg3IEE2IEYwIDlGIDg3IEI4XCIsIFwiODcgQTYgRjAgOUYgODcgQTlcIiwgXCI4NyBBNiBGMCA5RiA4NyBCNFwiLCBcIjg3IEE2IEYwIDlGIDg3IEFFXCIsIFwiODcgQTYgRjAgOUYgODcgQjZcIiwgXCI4NyBBNiBGMCA5RiA4NyBBQ1wiLCBcIjg3IEE2IEYwIDlGIDg3IEI3XCIsIFwiODcgQTYgRjAgOUYgODcgQjJcIiwgXCI4NyBBNiBGMCA5RiA4NyBCQ1wiLCBcIjg3IEE2IEYwIDlGIDg3IEJBXCIsIFwiODcgQTYgRjAgOUYgODcgQjlcIiwgXCI4NyBBNiBGMCA5RiA4NyBCRlwiLCBcIjg3IEE3IEYwIDlGIDg3IEI4XCIsIFwiODcgQTcgRjAgOUYgODcgQURcIiwgXCI4NyBBNyBGMCA5RiA4NyBBOVwiLCBcIjg3IEE3IEYwIDlGIDg3IEE3XCIsIFwiODcgQTcgRjAgOUYgODcgQkVcIiwgXCI4NyBBNyBGMCA5RiA4NyBBQVwiLCBcIjg3IEE3IEYwIDlGIDg3IEJGXCIsIFwiODcgQTcgRjAgOUYgODcgQUZcIiwgXCI4NyBBNyBGMCA5RiA4NyBCMlwiLCBcIjg3IEE3IEYwIDlGIDg3IEI5XCIsIFwiODcgQTcgRjAgOUYgODcgQjRcIiwgXCI4NyBBNyBGMCA5RiA4NyBCNlwiLCBcIjg3IEE3IEYwIDlGIDg3IEE2XCIsIFwiODcgQTcgRjAgOUYgODcgQkNcIiwgXCI4NyBBNyBGMCA5RiA4NyBCN1wiLCBcIjg3IEFFIEYwIDlGIDg3IEI0XCIsIFwiODcgQkIgRjAgOUYgODcgQUNcIiwgXCI4NyBBNyBGMCA5RiA4NyBCM1wiLCBcIjg3IEE3IEYwIDlGIDg3IEFDXCIsIFwiODcgQTcgRjAgOUYgODcgQUJcIiwgXCI4NyBBNyBGMCA5RiA4NyBBRVwiLCBcIjg3IEE4IEYwIDlGIDg3IEJCXCIsIFwiODcgQjAgRjAgOUYgODcgQURcIiwgXCI4NyBBOCBGMCA5RiA4NyBCMlwiLCBcIjg3IEE4IEYwIDlGIDg3IEE2XCIsIFwiODcgQUUgRjAgOUYgODcgQThcIiwgXCI4NyBCMCBGMCA5RiA4NyBCRVwiLCBcIjg3IEE4IEYwIDlGIDg3IEFCXCIsIFwiODcgQjkgRjAgOUYgODcgQTlcIiwgXCI4NyBBOCBGMCA5RiA4NyBCMVwiLCBcIjg3IEE4IEYwIDlGIDg3IEIzXCIsIFwiODcgQTggRjAgOUYgODcgQkRcIiwgXCI4NyBBOCBGMCA5RiA4NyBBOFwiLCBcIjg3IEE4IEYwIDlGIDg3IEI0XCIsIFwiODcgQjAgRjAgOUYgODcgQjJcIiwgXCI4NyBBOCBGMCA5RiA4NyBBQ1wiLCBcIjg3IEE4IEYwIDlGIDg3IEE5XCIsIFwiODcgQTggRjAgOUYgODcgQjBcIiwgXCI4NyBBOCBGMCA5RiA4NyBCN1wiLCBcIjg3IEFEIEYwIDlGIDg3IEI3XCIsIFwiODcgQTggRjAgOUYgODcgQkFcIiwgXCI4NyBBOCBGMCA5RiA4NyBCQ1wiLCBcIjg3IEE4IEYwIDlGIDg3IEJFXCIsIFwiODcgQTggRjAgOUYgODcgQkZcIiwgXCI4NyBBOSBGMCA5RiA4NyBCMFwiLCBcIjg3IEE5IEYwIDlGIDg3IEFGXCIsIFwiODcgQTkgRjAgOUYgODcgQjJcIiwgXCI4NyBBOSBGMCA5RiA4NyBCNFwiLCBcIjg3IEFBIEYwIDlGIDg3IEE4XCIsIFwiODcgQUEgRjAgOUYgODcgQUNcIiwgXCI4NyBCOCBGMCA5RiA4NyBCQlwiLCBcIjg3IEFDIEYwIDlGIDg3IEI2XCIsIFwiODcgQUEgRjAgOUYgODcgQjdcIiwgXCI4NyBBQSBGMCA5RiA4NyBBQVwiLCBcIjg3IEFBIEYwIDlGIDg3IEI5XCIsIFwiODcgQUEgRjAgOUYgODcgQkFcIiwgXCI4NyBBQiBGMCA5RiA4NyBCMFwiLCBcIjg3IEFCIEYwIDlGIDg3IEI0XCIsIFwiODcgQUIgRjAgOUYgODcgQUZcIiwgXCI4NyBBQiBGMCA5RiA4NyBBRVwiLCBcIjg3IEFCIEYwIDlGIDg3IEI3XCIsIFwiODcgQUMgRjAgOUYgODcgQUJcIiwgXCI4NyBCNSBGMCA5RiA4NyBBQlwiLCBcIjg3IEI5IEYwIDlGIDg3IEFCXCIsIFwiODcgQUMgRjAgOUYgODcgQTZcIiwgXCI4NyBBQyBGMCA5RiA4NyBCMlwiLCBcIjg3IEFDIEYwIDlGIDg3IEFBXCIsIFwiODcgQTkgRjAgOUYgODcgQUFcIiwgXCI4NyBBQyBGMCA5RiA4NyBBRFwiLCBcIjg3IEFDIEYwIDlGIDg3IEFFXCIsIFwiODcgQUMgRjAgOUYgODcgQjdcIiwgXCI4NyBBQyBGMCA5RiA4NyBCMVwiLCBcIjg3IEFDIEYwIDlGIDg3IEE5XCIsIFwiODcgQUMgRjAgOUYgODcgQjVcIiwgXCI4NyBBQyBGMCA5RiA4NyBCQVwiLCBcIjg3IEFDIEYwIDlGIDg3IEI5XCIsIFwiODcgQUMgRjAgOUYgODcgQUNcIiwgXCI4NyBBQyBGMCA5RiA4NyBCM1wiLCBcIjg3IEFDIEYwIDlGIDg3IEJDXCIsIFwiODcgQUMgRjAgOUYgODcgQkVcIiwgXCI4NyBBRCBGMCA5RiA4NyBCOVwiLCBcIjg3IEFEIEYwIDlGIDg3IEIzXCIsIFwiODcgQUQgRjAgOUYgODcgQjBcIiwgXCI4NyBBRCBGMCA5RiA4NyBCQVwiLCBcIjg3IEFFIEYwIDlGIDg3IEI4XCIsIFwiODcgQUUgRjAgOUYgODcgQjNcIiwgXCI4NyBBRSBGMCA5RiA4NyBBOVwiLCBcIjg3IEFFIEYwIDlGIDg3IEI3XCIsIFwiODcgQUUgRjAgOUYgODcgQjZcIiwgXCI4NyBBRSBGMCA5RiA4NyBBQVwiLCBcIjg3IEFFIEYwIDlGIDg3IEIyXCIsIFwiODcgQUUgRjAgOUYgODcgQjFcIiwgXCI4NyBBRSBGMCA5RiA4NyBCOVwiLCBcIjg3IEE4IEYwIDlGIDg3IEFFXCIsIFwiODcgQUYgRjAgOUYgODcgQjJcIiwgXCI4NyBBRiBGMCA5RiA4NyBCNVwiLCBcIjg3IEFGIEYwIDlGIDg3IEFBXCIsIFwiODcgQUYgRjAgOUYgODcgQjRcIiwgXCI4NyBCMCBGMCA5RiA4NyBCRlwiLCBcIjg3IEIwIEYwIDlGIDg3IEFBXCIsIFwiODcgQjAgRjAgOUYgODcgQUVcIiwgXCI4NyBCRCBGMCA5RiA4NyBCMFwiLCBcIjg3IEIwIEYwIDlGIDg3IEJDXCIsIFwiODcgQjAgRjAgOUYgODcgQUNcIiwgXCI4NyBCMSBGMCA5RiA4NyBBNlwiLCBcIjg3IEIxIEYwIDlGIDg3IEJCXCIsIFwiODcgQjEgRjAgOUYgODcgQTdcIiwgXCI4NyBCMSBGMCA5RiA4NyBCOFwiLCBcIjg3IEIxIEYwIDlGIDg3IEI3XCIsIFwiODcgQjEgRjAgOUYgODcgQkVcIiwgXCI4NyBCMSBGMCA5RiA4NyBBRVwiLCBcIjg3IEIxIEYwIDlGIDg3IEI5XCIsIFwiODcgQjEgRjAgOUYgODcgQkFcIiwgXCI4NyBCMiBGMCA5RiA4NyBCNFwiLCBcIjg3IEIyIEYwIDlGIDg3IEIwXCIsIFwiODcgQjIgRjAgOUYgODcgQUNcIiwgXCI4NyBCMiBGMCA5RiA4NyBCQ1wiLCBcIjg3IEIyIEYwIDlGIDg3IEJFXCIsIFwiODcgQjIgRjAgOUYgODcgQkJcIiwgXCI4NyBCMiBGMCA5RiA4NyBCMVwiLCBcIjg3IEIyIEYwIDlGIDg3IEI5XCIsIFwiODcgQjIgRjAgOUYgODcgQURcIiwgXCI4NyBCMiBGMCA5RiA4NyBCNlwiLCBcIjg3IEIyIEYwIDlGIDg3IEI3XCIsIFwiODcgQjIgRjAgOUYgODcgQkFcIiwgXCI4NyBCRSBGMCA5RiA4NyBCOVwiLCBcIjg3IEIyIEYwIDlGIDg3IEJEXCIsIFwiODcgQUIgRjAgOUYgODcgQjJcIiwgXCI4NyBCMiBGMCA5RiA4NyBBOVwiLCBcIjg3IEIyIEYwIDlGIDg3IEE4XCIsIFwiODcgQjIgRjAgOUYgODcgQjNcIiwgXCI4NyBCMiBGMCA5RiA4NyBBQVwiLCBcIjg3IEIyIEYwIDlGIDg3IEI4XCIsIFwiODcgQjIgRjAgOUYgODcgQTZcIiwgXCI4NyBCMiBGMCA5RiA4NyBCRlwiLCBcIjg3IEIyIEYwIDlGIDg3IEIyXCIsIFwiODcgQjMgRjAgOUYgODcgQTZcIiwgXCI4NyBCMyBGMCA5RiA4NyBCN1wiLCBcIjg3IEIzIEYwIDlGIDg3IEI1XCIsIFwiODcgQjMgRjAgOUYgODcgQjFcIiwgXCI4NyBCMyBGMCA5RiA4NyBBOFwiLCBcIjg3IEIzIEYwIDlGIDg3IEJGXCIsIFwiODcgQjMgRjAgOUYgODcgQUVcIiwgXCI4NyBCMyBGMCA5RiA4NyBBQVwiLCBcIjg3IEIzIEYwIDlGIDg3IEFDXCIsIFwiODcgQjMgRjAgOUYgODcgQkFcIiwgXCI4NyBCMyBGMCA5RiA4NyBBQlwiLCBcIjg3IEIyIEYwIDlGIDg3IEI1XCIsIFwiODcgQjAgRjAgOUYgODcgQjVcIiwgXCI4NyBCMyBGMCA5RiA4NyBCNFwiLCBcIjg3IEI0IEYwIDlGIDg3IEIyXCIsIFwiODcgQjUgRjAgOUYgODcgQjBcIiwgXCI4NyBCNSBGMCA5RiA4NyBCQ1wiLCBcIjg3IEI1IEYwIDlGIDg3IEI4XCIsIFwiODcgQjUgRjAgOUYgODcgQTZcIiwgXCI4NyBCNSBGMCA5RiA4NyBBQ1wiLCBcIjg3IEI1IEYwIDlGIDg3IEJFXCIsIFwiODcgQjUgRjAgOUYgODcgQUFcIiwgXCI4NyBCNSBGMCA5RiA4NyBBRFwiLCBcIjg3IEI1IEYwIDlGIDg3IEIzXCIsIFwiODcgQjUgRjAgOUYgODcgQjFcIiwgXCI4NyBCNSBGMCA5RiA4NyBCOVwiLCBcIjg3IEI1IEYwIDlGIDg3IEI3XCIsIFwiODcgQjYgRjAgOUYgODcgQTZcIiwgXCI4NyBCNyBGMCA5RiA4NyBBQVwiLCBcIjg3IEI3IEYwIDlGIDg3IEI0XCIsIFwiODcgQjcgRjAgOUYgODcgQkFcIiwgXCI4NyBCNyBGMCA5RiA4NyBCQ1wiLCBcIjg3IEE3IEYwIDlGIDg3IEIxXCIsIFwiODcgQjggRjAgOUYgODcgQURcIiwgXCI4NyBCMCBGMCA5RiA4NyBCM1wiLCBcIjg3IEIxIEYwIDlGIDg3IEE4XCIsIFwiODcgQjUgRjAgOUYgODcgQjJcIiwgXCI4NyBCQiBGMCA5RiA4NyBBOFwiLCBcIjg3IEJDIEYwIDlGIDg3IEI4XCIsIFwiODcgQjggRjAgOUYgODcgQjJcIiwgXCI4NyBCOCBGMCA5RiA4NyBCOVwiLCBcIjg3IEI4IEYwIDlGIDg3IEE2XCIsIFwiODcgQjggRjAgOUYgODcgQjNcIiwgXCI4NyBCNyBGMCA5RiA4NyBCOFwiLCBcIjg3IEI4IEYwIDlGIDg3IEE4XCIsIFwiODcgQjggRjAgOUYgODcgQjFcIiwgXCI4NyBCOCBGMCA5RiA4NyBBQ1wiLCBcIjg3IEI4IEYwIDlGIDg3IEJEXCIsIFwiODcgQjggRjAgOUYgODcgQjBcIiwgXCI4NyBCOCBGMCA5RiA4NyBBRVwiLCBcIjg3IEI4IEYwIDlGIDg3IEE3XCIsIFwiODcgQjggRjAgOUYgODcgQjRcIiwgXCI4NyBCRiBGMCA5RiA4NyBBNlwiLCBcIjg3IEFDIEYwIDlGIDg3IEI4XCIsIFwiODcgQjAgRjAgOUYgODcgQjdcIiwgXCI4NyBCOCBGMCA5RiA4NyBCOFwiLCBcIjg3IEFBIEYwIDlGIDg3IEI4XCIsIFwiODcgQjEgRjAgOUYgODcgQjBcIiwgXCI4NyBCOCBGMCA5RiA4NyBBOVwiLCBcIjg3IEI4IEYwIDlGIDg3IEI3XCIsIFwiODcgQjggRjAgOUYgODcgQkZcIiwgXCI4NyBCOCBGMCA5RiA4NyBBQVwiLCBcIjg3IEE4IEYwIDlGIDg3IEFEXCIsIFwiODcgQjggRjAgOUYgODcgQkVcIiwgXCI4NyBCOSBGMCA5RiA4NyBCQ1wiLCBcIjg3IEI5IEYwIDlGIDg3IEFGXCIsIFwiODcgQjkgRjAgOUYgODcgQkZcIiwgXCI4NyBCOSBGMCA5RiA4NyBBRFwiLCBcIjg3IEI5IEYwIDlGIDg3IEIxXCIsIFwiODcgQjkgRjAgOUYgODcgQUNcIiwgXCI4NyBCOSBGMCA5RiA4NyBCMFwiLCBcIjg3IEI5IEYwIDlGIDg3IEI0XCIsIFwiODcgQjkgRjAgOUYgODcgQjlcIiwgXCI4NyBCOSBGMCA5RiA4NyBCM1wiLCBcIjg3IEI5IEYwIDlGIDg3IEI3XCIsIFwiODcgQjkgRjAgOUYgODcgQjJcIiwgXCI4NyBCOSBGMCA5RiA4NyBBOFwiLCBcIjg3IEI5IEYwIDlGIDg3IEJCXCIsIFwiODcgQkEgRjAgOUYgODcgQUNcIiwgXCI4NyBCQSBGMCA5RiA4NyBBNlwiLCBcIjg3IEE2IEYwIDlGIDg3IEFBXCIsIFwiODcgQUMgRjAgOUYgODcgQTdcIiwgXCI4NyBCQSBGMCA5RiA4NyBCOFwiLCBcIjg3IEJCIEYwIDlGIDg3IEFFXCIsIFwiODcgQkEgRjAgOUYgODcgQkVcIiwgXCI4NyBCQSBGMCA5RiA4NyBCRlwiLCBcIjg3IEJCIEYwIDlGIDg3IEJBXCIsIFwiODcgQkIgRjAgOUYgODcgQTZcIiwgXCI4NyBCQiBGMCA5RiA4NyBBQVwiLCBcIjg3IEJCIEYwIDlGIDg3IEIzXCIsIFwiODcgQkMgRjAgOUYgODcgQUJcIiwgXCI4NyBBQSBGMCA5RiA4NyBBRFwiLCBcIjg3IEJFIEYwIDlGIDg3IEFBXCIsIFwiODcgQkYgRjAgOUYgODcgQjJcIiwgXCI4NyBCRiBGMCA5RiA4NyBCQ1wiXVxuXHRlbW9qaXNBcnJheSA9IFtdXG5cdGZyZXFFbW9qaXNBcnJheSA9IFtdXG5cdGZvciBlbSBpbiByYXdFbW9qaXNcblx0XHRlbW9qaXNBcnJheS5wdXNoIGVtb2ppRm9ybWF0dGVyKGVtKVxuXG5cdFxuXHRmcmVxdWVudGx5VXNlZEVtb2ppc1JhdyA9IFtcIjkyIDg1XCIsIFwiOTEgODRcIiwgXCI5MSA4NVwiLCBcIjkxIDgyXCIsIFwiOTEgODNcIixcIjkyIDg1XCIsIFwiOTEgODRcIiwgXCI5MSA4NVwiLCBcIjkxIDgyXCIsIFwiOTEgODNcIixcIjkyIDg1XCIsIFwiOTEgODRcIiwgXCI5MSA4NVwiLCBcIjkxIDgyXCIsIFwiOTEgODNcIixcIjkyIDg1XCIsIFwiOTEgODRcIiwgXCI5MSA4NVwiLCBcIjkxIDgyXCIsIFwiOTEgODNcIixcIjkyIDg1XCIsIFwiOTEgODRcIiwgXCI5MSA4NVwiLCBcIjkxIDgyXCIsIFwiOTEgODNcIixdXG5cdGZvciBlbSBpbiBmcmVxdWVudGx5VXNlZEVtb2ppc1Jhd1xuXHRcdGZyZXFFbW9qaXNBcnJheS5wdXNoIGVtb2ppRm9ybWF0dGVyKGVtKVxuXG5cdGVtb2ppS2V5Lm9uIEV2ZW50cy5Ub3VjaFN0YXJ0LCAtPlxuXHRcdGVtb2ppS2V5LmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIlxuXHRcdGVtb2ppQkcgPSBuZXcgTGF5ZXIgYmFja2dyb3VuZENvbG9yOlwiI0VDRUVGMVwiXG5cdFx0Ym94ID0gZXhwb3J0cy5weCgzMClcblx0XHRlbW9qaUJHLmNvbnN0cmFpbnRzID0gKHRyYWlsaW5nOjEsIGxlYWRpbmc6MSwgYm90dG9tOjEsIGhlaWdodDoyNTgpXG5cdFx0ZXhwb3J0cy5sYXlvdXQoKVxuXHRcdGVtb2ppR2FsbGV5ID0gbmV3IFNjcm9sbENvbXBvbmVudCBzdXBlckxheWVyOmVtb2ppQkcsIHdpZHRoOmVtb2ppQkcud2lkdGgsIGhlaWdodDplbW9qaUJHLmhlaWdodCAtIGV4cG9ydHMucHgoNDApXG5cdFx0ZW1vamlHYWxsZXkuc3BlZWRZID0gMFxuXHRcdGVtb2ppU3BhY2VyID0gZXhwb3J0cy5weCg2KVxuXHRcdGVtb2ppUGlja2VyID0gbmV3IExheWVyIGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCIsIG5hbWU6XCJlbW9qaSBwaWNrZXJcIiwgc3VwZXJMYXllcjplbW9qaUJHXG5cdFx0ZW1vamlQaWNrZXIuY29uc3RyYWludHMgPSBcblx0XHRcdGxlYWRpbmc6MVxuXHRcdFx0dHJhaWxpbmc6MVxuXHRcdFx0Ym90dG9tOjFcblx0XHRcdGhlaWdodDo0MlxuXHRcdEFCQyA9IG5ldyBMYXllciBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiLCBzdXBlckxheWVyOmVtb2ppUGlja2VyXG5cdFx0QUJDLmh0bWwgPSBcIkFCQ1wiXG5cdFx0QUJDLnN0eWxlID0ge1xuXHRcdFx0XCJmb250LXNpemVcIiA6IGV4cG9ydHMucHgoMTUpICsgXCJweFwiXG5cdFx0XHRcImZvbnQtd2VpZ2h0XCIgOiA1MDBcblx0XHRcdFwiZm9udC1mYW1pbHlcIiA6ICctYXBwbGUtc3lzdGVtLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmJ1xuXHRcdFx0XCJjb2xvclwiIDogXCIjNEY1NTVEXCJcblx0XHR9XG5cdFx0QUJDLmNvbnN0cmFpbnRzID0gXG5cdFx0XHRsZWFkaW5nOjEyXG5cdFx0XHRib3R0b206MTRcblx0XHRcdHdpZHRoOjMwXG5cdFx0XHRoZWlnaHQ6MTVcblxuXHRcdGV4cG9ydHMubGF5b3V0KClcblx0XHRyb3cgPSAtMVxuXHRcdEFCQy5vbiBFdmVudHMuQ2xpY2ssIC0+XG5cdFx0XHRlbW9qaUJHLmRlc3Ryb3koKVxuXHRcdGZyZXF1ZW50ID0gbmV3IExheWVyIHN1cGVyTGF5ZXI6ZW1vamlQaWNrZXIsIGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCJcblx0XHRmcmVxdWVudC5odG1sID0gXCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0XHRcdDxzdmcgd2lkdGg9JyN7ZXhwb3J0cy5weCgxNyl9cHgnIGhlaWdodD0nI3tleHBvcnRzLnB4KDE2KX1weCcgdmlld0JveD0nMCAwIDE3IDE2JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHhtbG5zOnNrZXRjaD0naHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zJz5cblx0XHRcdCAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNS4yICgyNTIzNSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdFx0XHQgICAgPHRpdGxlPlJlY2VudDwvdGl0bGU+XG5cdFx0XHQgICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0XHQgICAgPGRlZnM+PC9kZWZzPlxuXHRcdFx0ICAgIDxnIGlkPSdpT1MtOS1LZXlib2FyZHMnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIHNrZXRjaDp0eXBlPSdNU1BhZ2UnPlxuXHRcdFx0ICAgICAgICA8ZyBpZD0naVBob25lLTYtUG9ydHJhaXQtTGlnaHQtQ29weScgc2tldGNoOnR5cGU9J01TQXJ0Ym9hcmRHcm91cCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTU1LjAwMDAwMCwgLTYzOC4wMDAwMDApJz5cblx0XHRcdCAgICAgICAgICAgIDxnIGlkPSdLZXlib2FyZHMnIHNrZXRjaDp0eXBlPSdNU0xheWVyR3JvdXAnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDAuMDAwMDAwLCA0MDguMDAwMDAwKSc+XG5cdFx0XHQgICAgICAgICAgICAgICAgPGcgaWQ9J1JlY2VudCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoNTUuNTAwMDAwLCAyMzAuMDAwMDAwKScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCc+XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgaWQ9J0JvZHknIHN0cm9rZT0nIzRBNTQ2MScgY3g9JzgnIGN5PSc4JyByPSc4Jz48L2NpcmNsZT5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0nTTcuNSw3LjUgTDcuNSw4LjUgTDguNSw4LjUgTDguNSwyIEw3LjUsMiBMNy41LDcuNSBMNCw3LjUgTDQsOC41IEw4LjUsOC41IEw4LjUsNy41IEw3LjUsNy41IFonIGlkPSdIYW5kcycgZmlsbD0nIzRBNTQ2MSc+PC9wYXRoPlxuXHRcdFx0ICAgICAgICAgICAgICAgIDwvZz5cblx0XHRcdCAgICAgICAgICAgIDwvZz5cblx0XHRcdCAgICAgICAgPC9nPlxuXHRcdFx0ICAgIDwvZz5cblx0XHRcdDwvc3ZnPlwiXG5cdFx0ZnJlcXVlbnQuY29uc3RyYWludHMgPSBcblx0XHRcdGxlYWRpbmcgOiBbQUJDLCAxNV1cblx0XHRcdGJvdHRvbTogMTRcblx0XHRcdHdpZHRoOjE2XG5cdFx0XHRoZWlnaHQ6MjBcblx0XHRleHBvcnRzLmxheW91dCgpXG5cdFx0c21pbGV5cyA9IG5ldyBMYXllciBzdXBlckxheWVyOmVtb2ppUGlja2VyLCBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiLCBvcGFjaXR5Oi40XG5cdFx0c21pbGV5cy5odG1sID0gXCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0XHRcdDxzdmcgd2lkdGg9JyN7ZXhwb3J0cy5weCgxNyl9cHgnIGhlaWdodD0nI3tleHBvcnRzLnB4KDE2KX1weCcgdmlld0JveD0nMCAwIDE3IDE2JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHhtbG5zOnNrZXRjaD0naHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zJz5cblx0XHRcdCAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNS4yICgyNTIzNSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdFx0XHQgICAgPHRpdGxlPjpEPC90aXRsZT5cblx0XHRcdCAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHRcdCAgICA8ZGVmcz48L2RlZnM+XG5cdFx0XHQgICAgPGcgaWQ9J2lPUy05LUtleWJvYXJkcycgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCcgc2tldGNoOnR5cGU9J01TUGFnZSc+XG5cdFx0XHQgICAgICAgIDxnIGlkPSdpUGhvbmUtNi1Qb3J0cmFpdC1MaWdodC1Db3B5JyBza2V0Y2g6dHlwZT0nTVNBcnRib2FyZEdyb3VwJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtODYuMDAwMDAwLCAtNjM4LjAwMDAwMCknPlxuXHRcdFx0ICAgICAgICAgICAgPGcgaWQ9J0tleWJvYXJkcycgc2tldGNoOnR5cGU9J01TTGF5ZXJHcm91cCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMC4wMDAwMDAsIDQwOC4wMDAwMDApJz5cblx0XHRcdCAgICAgICAgICAgICAgICA8ZyBpZD0nOkQnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDg3LjAwMDAwMCwgMjMwLjUwMDAwMCknIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnPlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGlkPSdIZWFkJyBzdHJva2U9JyM0QTU0NjEnIHN0cm9rZS13aWR0aD0nMC43ODk0NzM2ODQnIGN4PSc3LjUnIGN5PSc3LjUnIHI9JzcuNSc+PC9jaXJjbGU+XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9J003LjUsMTMuNTI2MzE1OCBDMTAuMjY4NjkwNywxMy41MjYzMTU4IDEyLjUxMzE1NzksMTAuMzY4NDIxMiAxMi41MTMxNTc5LDkuMTg0MjEwNDUgQzEyLjUxMzE1NzksNy42MDUyNjMxNyAxMS40Mzg5MDk4LDkuMTg0MjEwNDMgNy41LDkuMTg0MjEwNTMgQzMuNTYxMDkwMjMsOS4xODQyMTA2MiAyLjQ4Njg0MjExLDcuNjA1MjYzMTcgMi40ODY4NDIxMSw5LjE4NDIxMDQ1IEMyLjQ4Njg0MjExLDEwLjM2ODQyMSA0LjczMTMwOTM1LDEzLjUyNjMxNTggNy41LDEzLjUyNjMxNTggWiBNNy41LDEwLjk2MDUyNjMgQzguOTMyMzMwODMsMTEuMTU3ODk0NyAxMS43OTY5OTI1LDEwLjM2ODQyMSAxMS43OTY5OTI1LDkuNDQ0MjM1NTIgQzExLjc5Njk5MjUsOC43ODk0NzM2OCAxMC44NzYyMDg0LDkuNTc4OTQ3MjcgNy41LDkuNzc2MzE1NzkgQzQuMTIzNzkxNjIsOS41Nzg5NDc0MyAzLjIwMzAwODcyLDguNzg5NDczNjkgMy4yMDMwMDc1Miw5LjQ0NDIzNTUyIEMzLjIwMzAwNTgyLDEwLjM2ODQyMSA2LjA2NzY2OTE3LDExLjE1Nzg5NDcgNy41LDEwLjk2MDUyNjMgWicgaWQ9J1NtaWxlJyBmaWxsPScjNEE1NDYxJz48L3BhdGg+XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9J001LjIzNjg0MjExLDYuMzIzNjU5OCBDNS42NDM3ODg3Niw2LjMyMzY1OTggNS45NzM2ODQyMSw1Ljg4MTgzNTU0IDUuOTczNjg0MjEsNS4zMzY4MTc2OSBDNS45NzM2ODQyMSw0Ljc5MTc5OTg1IDUuNjQzNzg4NzYsNC4zNDk5NzU1OSA1LjIzNjg0MjExLDQuMzQ5OTc1NTkgQzQuODI5ODk1NDUsNC4zNDk5NzU1OSA0LjUsNC43OTE3OTk4NSA0LjUsNS4zMzY4MTc2OSBDNC41LDUuODgxODM1NTQgNC44Mjk4OTU0NSw2LjMyMzY1OTggNS4yMzY4NDIxMSw2LjMyMzY1OTggWiBNOS43MzY4NDIxMSw2LjMyMzY1OTggQzEwLjE0Mzc4ODgsNi4zMjM2NTk4IDEwLjQ3MzY4NDIsNS44ODE4MzU1NCAxMC40NzM2ODQyLDUuMzM2ODE3NjkgQzEwLjQ3MzY4NDIsNC43OTE3OTk4NSAxMC4xNDM3ODg4LDQuMzQ5OTc1NTkgOS43MzY4NDIxMSw0LjM0OTk3NTU5IEM5LjMyOTg5NTQ1LDQuMzQ5OTc1NTkgOSw0Ljc5MTc5OTg1IDksNS4zMzY4MTc2OSBDOSw1Ljg4MTgzNTU0IDkuMzI5ODk1NDUsNi4zMjM2NTk4IDkuNzM2ODQyMTEsNi4zMjM2NTk4IFonIGlkPSdFeWVzJyBmaWxsPScjNEE1NDYxJz48L3BhdGg+XG5cdFx0XHQgICAgICAgICAgICAgICAgPC9nPlxuXHRcdFx0ICAgICAgICAgICAgPC9nPlxuXHRcdFx0ICAgICAgICA8L2c+XG5cdFx0XHQgICAgPC9nPlxuXHRcdFx0PC9zdmc+XCJcblx0XHRzbWlsZXlzLmNvbnN0cmFpbnRzID1cblx0XHRcdGxlYWRpbmcgOiBbZnJlcXVlbnQsIDE1XVxuXHRcdFx0Ym90dG9tOiAxNFxuXHRcdFx0d2lkdGg6MTZcblx0XHRcdGhlaWdodDoyMFxuXHRcdGV4cG9ydHMubGF5b3V0KClcblx0XHRhbmltYWxzID0gbmV3IExheWVyIHN1cGVyTGF5ZXI6ZW1vamlQaWNrZXIsIGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCIsIG9wYWNpdHk6LjRcblx0XHRhbmltYWxzLmh0bWwgPSBcIjw/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyc/PlxuXHRcdFx0PHN2ZyB3aWR0aD0nI3tleHBvcnRzLnB4KDE3KX1weCcgaGVpZ2h0PScje2V4cG9ydHMucHgoMTYpfXB4JyB2aWV3Qm94PScwIDAgMTcgMTcnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycgeG1sbnM6c2tldGNoPSdodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMnPlxuXHRcdFx0ICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy41LjIgKDI1MjM1KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHRcdCAgICA8dGl0bGU+R3JvdXA8L3RpdGxlPlxuXHRcdFx0ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdFx0ICAgIDxkZWZzPjwvZGVmcz5cblx0XHRcdCAgICA8ZyBpZD0nUGFnZS0xJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJyBza2V0Y2g6dHlwZT0nTVNQYWdlJz5cblx0XHRcdCAgICAgICAgPGcgaWQ9J2lQaG9uZS02JyBza2V0Y2g6dHlwZT0nTVNBcnRib2FyZEdyb3VwJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtMTE3LjAwMDAwMCwgLTYzOS4wMDAwMDApJyBzdHJva2U9JyM0QTUzNjEnPlxuXHRcdFx0ICAgICAgICAgICAgPGcgaWQ9J2ljX0Zvb2QnIHNrZXRjaDp0eXBlPSdNU0xheWVyR3JvdXAnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDExOC4wMDAwMDAsIDY0MC4wMDAwMDApJz5cblx0XHRcdCAgICAgICAgICAgICAgICA8ZyBpZD0nR3JvdXAnIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnPlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSdNNS42ODM3NzUzNywxLjM4MTU2NjQ2IEM2LjIzOTI2MDY2LDEuMTM2MjQgNi44NTM3MjAwNSwxIDcuNSwxIEM4LjE0NjI3OTk1LDEgOC43NjA3MzkzNCwxLjEzNjI0IDkuMzE2MjI0NjMsMS4zODE1NjY0NiBDOS44MDg3OTI3NSwwLjU2MjM1OTAxOSAxMC44MjU1ODg4LDAgMTIsMCBDMTMuNjU2ODU0MiwwIDE1LDEuMTE5Mjg4MTMgMTUsMi41IEMxNSwzLjU1NzEzOTggMTQuMjEyNjI0Niw0LjQ2MTAyODQzIDEzLjA5OTkyMjYsNC44MjY2MjUxNCBDMTQuMjQ5NjUyOCw1LjY0MTg1NDIyIDE1LDYuOTgzMzAwNjIgMTUsOC41IEMxNSwxMC43MTY3MTQ0IDEzLjM5NzE4NzMsMTIuNTU5MDcxOSAxMS4yODcyNjcxLDEyLjkzMTM2NzMgQzEwLjQ4NjcyNDgsMTQuMTc1NzcwMyA5LjA4OTYxNjk2LDE1IDcuNSwxNSBDNS45MTAzODMwNCwxNSA0LjUxMzI3NTI0LDE0LjE3NTc3MDMgMy43MTI3MzI5MSwxMi45MzEzNjczIEMxLjYwMjgxMjY4LDEyLjU1OTA3MTkgMCwxMC43MTY3MTQ0IDAsOC41IEMwLDYuOTgzMzAwNjIgMC43NTAzNDcyNDQsNS42NDE4NTQyMiAxLjkwMDA3NzQxLDQuODI2NjI1MTQgQzAuNzg3Mzc1NDQ1LDQuNDYxMDI4NDMgMCwzLjU1NzEzOTggMCwyLjUgQzAsMS4xMTkyODgxMyAxLjM0MzE0NTc1LDAgMywwIEM0LjE3NDQxMTIyLDAgNS4xOTEyMDcyNSwwLjU2MjM1OTAxOSA1LjY4Mzc3NTM3LDEuMzgxNTY2NDYgWicgaWQ9J092YWwtOCc+PC9wYXRoPlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSdNNS43MzgzNDIyOCwxMiBDNS44NjI5MDk3OSwxMiA2LjE0NjQyMzUzLDEyIDYuMTQ2NDIzNTMsMTIgQzYuMTQ2NDIzNTMsMTIgNi40MzIxNTY5NiwxMi40NDI2MTIzIDYuNTI0NjU4MiwxMi40OTE5NzM5IEM2LjY2NDU1NjAxLDEyLjU2NjYyNzcgNywxMi40OTE5NzM5IDcsMTIuNDkxOTczOSBMNywxMiBMOCwxMiBMOCwxMi40OTE5NzM5IEw4LjQ5Nzk5MjI4LDEyLjQ5MTk3MzkgTDguODQzMDE3NjksMTIgTDkuMzkxODQ1NywxMiBDOS4zOTE4NDU3LDEyIDguOTk1OTg0NTcsMTIuOTgzOTQ3OCA4LjQ5Nzk5MjI4LDEyLjk4Mzk0NzggTDYuNjA3MDI0MDcsMTIuOTgzOTQ3OCBDNi4yMTQwNDgxMywxMi45ODM5NDc4IDUuNDU5OTYwOTQsMTIgNS43MzgzNDIyOCwxMiBaJyBpZD0nUmVjdGFuZ2xlLTQ0LUNvcHktMic+PC9wYXRoPlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGlkPSdPdmFsLTE0JyBjeD0nMTAuNScgY3k9JzcuNScgcj0nMC41Jz48L2NpcmNsZT5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBpZD0nT3ZhbC0xNC1Db3B5JyBjeD0nNC41JyBjeT0nNy41JyByPScwLjUnPjwvY2lyY2xlPlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSdNMTIuNjk5OTk2OSw1IEMxMi42OTk5OTY5LDMuMDY3MDAzMzggMTEuMTMyOTkzNiwxLjUgOS4xOTk5OTY5NSwxLjUnIGlkPSdPdmFsLTE2Jz48L3BhdGg+XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9J001LjUsNSBDNS41LDMuMDY3MDAzMzggMy45MzI5OTY2MiwxLjUgMiwxLjUnIGlkPSdPdmFsLTE2LUNvcHknIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDMuNzUwMDAwLCAzLjI1MDAwMCkgc2NhbGUoLTEsIDEpIHRyYW5zbGF0ZSgtMy43NTAwMDAsIC0zLjI1MDAwMCkgJz48L3BhdGg+XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSdSZWN0YW5nbGUtNDQtQ29weScgeD0nNycgeT0nMTEnIHdpZHRoPScxJyBoZWlnaHQ9JzEnPjwvcmVjdD5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0nTTYsMTAgTDYuNSwxMCBMNi40OTk5OTk5OSw5LjUgTDguNTAwMDAwMDUsOS41IEw4LjUwMDAwMDA1LDEwIEw5LDEwIEw5LDEwLjUgTDguNSwxMC41IEw4LjUsMTEgTDYuNSwxMSBMNi41LDEwLjUgTDYsMTAuNSBMNiwxMCBaJyBpZD0nUGF0aCc+PC9wYXRoPlxuXHRcdFx0ICAgICAgICAgICAgICAgIDwvZz5cblx0XHRcdCAgICAgICAgICAgIDwvZz5cblx0XHRcdCAgICAgICAgPC9nPlxuXHRcdFx0ICAgIDwvZz5cblx0XHRcdDwvc3ZnPlwiXG5cdFx0YW5pbWFscy5jb25zdHJhaW50cyA9XG5cdFx0XHRsZWFkaW5nIDogW3NtaWxleXMsIDE1XVxuXHRcdFx0Ym90dG9tOiAxNFxuXHRcdFx0d2lkdGg6MTZcblx0XHRcdGhlaWdodDoyMFxuXHRcdGV4cG9ydHMubGF5b3V0KClcblx0XHRmb29kID0gbmV3IExheWVyIHN1cGVyTGF5ZXI6ZW1vamlQaWNrZXIsIGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCIsIG9wYWNpdHk6LjRcblx0XHRmb29kLmh0bWwgPSBcIjw/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyc/PlxuXHRcdFx0PHN2ZyB3aWR0aD0nI3tleHBvcnRzLnB4KDE3KX1weCcgaGVpZ2h0PScje2V4cG9ydHMucHgoMTYpfXB4JyB2aWV3Qm94PScwIDAgMTcgMTcnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycgeG1sbnM6c2tldGNoPSdodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMnPlxuXHRcdFx0ICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy41LjIgKDI1MjM1KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHRcdCAgICA8dGl0bGU+Rm9vZDwvdGl0bGU+XG5cdFx0XHQgICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0XHQgICAgPGRlZnM+PC9kZWZzPlxuXHRcdFx0ICAgIDxnIGlkPSdpT1MtOS1LZXlib2FyZHMnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIHNrZXRjaDp0eXBlPSdNU1BhZ2UnPlxuXHRcdFx0ICAgICAgICA8ZyBpZD0naVBob25lLTYtUG9ydHJhaXQtTGlnaHQtQ29weScgc2tldGNoOnR5cGU9J01TQXJ0Ym9hcmRHcm91cCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTE0OC4wMDAwMDAsIC02MzcuMDAwMDAwKSc+XG5cdFx0XHQgICAgICAgICAgICA8ZyBpZD0nS2V5Ym9hcmRzJyBza2V0Y2g6dHlwZT0nTVNMYXllckdyb3VwJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgwLjAwMDAwMCwgNDA4LjAwMDAwMCknPlxuXHRcdFx0ICAgICAgICAgICAgICAgIDxnIGlkPSdGb29kJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgxNDkuNTAwMDAwLCAyMjkuNTAwMDAwKScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCc+XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9J001LjUsMTUuNSBMMSwxNS41IEwwLDUgTDYuNSw1IEw2LjI2MzYwOTMzLDcuNDgyMTAyMDInIGlkPSdEcmluaycgc3Ryb2tlPScjNEE1NDYxJz48L3BhdGg+XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9J002LjAxMDc3NTQ1LDEuOTY5MzAwOTggTDYuNTE1NzEzNTIsNS4yMjI3MDUzOSBMNS43MTkwODE4NCw1LjY3OTQ3ODEyIEw1LjAzODkwMDksMS45NjkzMDA5OCBMNC44NTU1NzI0NywxLjk2OTMwMDk4IEw0Ljg1NTU3MjQ3LDAuOTY5MzAwOTggTDguODU1NTcyNDcsMC45NjkzMDA5OCBMOC44NTU1NzI0NywxLjk2OTMwMDk4IEw2LjAxMDc3NTQ1LDEuOTY5MzAwOTggWicgaWQ9J1N0cmF3JyBmaWxsPScjNEE1NDYxJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSg2Ljg1NTU3MiwgMy4zMjQzOTApIHJvdGF0ZSgyNC4wMDAwMDApIHRyYW5zbGF0ZSgtNi44NTU1NzIsIC0zLjMyNDM5MCkgJz48L3BhdGg+XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSdCb3R0b20tQnVuJyBzdHJva2U9JyM0QTU0NjEnIHg9JzMnIHk9JzE0JyB3aWR0aD0nMTAuNScgaGVpZ2h0PScxLjUnIHJ4PScxJz48L3JlY3Q+XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9J00xLjUsMTIuNTAyNDQwOCBDMS41LDExLjk0ODgwOCAxLjk0OTE2OTE2LDExLjUgMi40OTI2ODcyMywxMS41IEwxNC4wMDczMTI4LDExLjUgQzE0LjU1NTU1ODgsMTEuNSAxNSwxMS45NDY5NDk5IDE1LDEyLjUwMjQ0MDggTDE1LDEyLjk5NzU1OTIgQzE1LDEzLjU1MTE5MiAxNC41NTA4MzA4LDE0IDE0LjAwNzMxMjgsMTQgTDIuNDkyNjg3MjMsMTQgQzEuOTQ0NDQxMjEsMTQgMS41LDEzLjU1MzA1MDEgMS41LDEyLjk5NzU1OTIgTDEuNSwxMi41MDI0NDA4IFogTTMuOTMzMDAwMDMsMTEuODM5MjcyNyBDMy40MTc3MTgzNCwxMS42NTE4OTc2IDMuNDQ0ODM2OTcsMTEuNSAzLjk5NTU3NzUsMTEuNSBMMTMuMDA0NDIyNSwxMS41IEMxMy41NTQyNjQ4LDExLjUgMTMuNTg2NjA2MSwxMS42NTAzMjUxIDEzLjA2NywxMS44MzkyNzI3IEw4LjUsMTMuNSBMMy45MzMwMDAwMywxMS44MzkyNzI3IFonIGlkPScmcXVvdDtQYXR0eSZxdW90OycgZmlsbD0nIzRBNTQ2MSc+PC9wYXRoPlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSdNMi41LDEwLjUgTDEzLjUsMTAuNSBMMTUsMTEuNSBMMSwxMS41IEwyLjUsMTAuNSBaJyBpZD0nQ2hlZXNlJyBmaWxsPScjNEE1NDYxJz48L3BhdGg+XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9J004LjI1LDEwLjUgQzExLjQyNTYzNzMsMTAuNSAxNCwxMC4zMjg0MjcxIDE0LDkuNSBDMTQsOC42NzE1NzI4OCAxMS40MjU2MzczLDggOC4yNSw4IEM1LjA3NDM2MjY5LDggMi41LDguNjcxNTcyODggMi41LDkuNSBDMi41LDEwLjMyODQyNzEgNS4wNzQzNjI2OSwxMC41IDguMjUsMTAuNSBaJyBpZD0nVG9wLUJ1bicgc3Ryb2tlPScjNEE1NDYxJyBzdHJva2Utd2lkdGg9JzAuNzUnPjwvcGF0aD5cblx0XHRcdCAgICAgICAgICAgICAgICA8L2c+XG5cdFx0XHQgICAgICAgICAgICA8L2c+XG5cdFx0XHQgICAgICAgIDwvZz5cblx0XHRcdCAgICA8L2c+XG5cdFx0XHQ8L3N2Zz5cIlxuXHRcdGZvb2QuY29uc3RyYWludHMgPVxuXHRcdFx0bGVhZGluZyA6IFthbmltYWxzLCAxNV1cblx0XHRcdGJvdHRvbTogMTRcblx0XHRcdHdpZHRoOjE2XG5cdFx0XHRoZWlnaHQ6MjBcblx0XHRleHBvcnRzLmxheW91dCgpXG5cdFx0YWN0aXZpdHkgPSBuZXcgTGF5ZXIgc3VwZXJMYXllcjplbW9qaVBpY2tlciwgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIiwgb3BhY2l0eTouNFxuXHRcdGFjdGl2aXR5Lmh0bWwgPSBcIjw/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyc/PlxuXHRcdFx0PHN2ZyB3aWR0aD0nI3tleHBvcnRzLnB4KDE2KX1weCcgaGVpZ2h0PScje2V4cG9ydHMucHgoMTYpfXB4JyB2aWV3Qm94PScwIDAgMTYgMTYnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycgeG1sbnM6c2tldGNoPSdodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMnPlxuXHRcdFx0ICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy41LjIgKDI1MjM1KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHRcdCAgICA8dGl0bGU+U29jY2VyIEJhbGw8L3RpdGxlPlxuXHRcdFx0ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdFx0ICAgIDxkZWZzPlxuXHRcdFx0ICAgICAgICA8Y2lyY2xlIGlkPSdwYXRoLTEnIGN4PSc4JyBjeT0nOCcgcj0nOCc+PC9jaXJjbGU+XG5cdFx0XHQgICAgPC9kZWZzPlxuXHRcdFx0ICAgIDxnIGlkPSdQYWdlLTEnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIHNrZXRjaDp0eXBlPSdNU1BhZ2UnPlxuXHRcdFx0ICAgICAgICA8ZyBpZD0naVBob25lLTYnIHNrZXRjaDp0eXBlPSdNU0FydGJvYXJkR3JvdXAnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC0xNzkuMDAwMDAwLCAtNjM5LjAwMDAwMCknPlxuXHRcdFx0ICAgICAgICAgICAgPGcgaWQ9J1NvY2Nlci1CYWxsJyBza2V0Y2g6dHlwZT0nTVNMYXllckdyb3VwJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgxNzkuMDAwMDAwLCA2MzkuMDAwMDAwKSc+XG5cdFx0XHQgICAgICAgICAgICAgICAgPG1hc2sgaWQ9J21hc2stMicgc2tldGNoOm5hbWU9J01hc2snIGZpbGw9J3doaXRlJz5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPScjcGF0aC0xJz48L3VzZT5cblx0XHRcdCAgICAgICAgICAgICAgICA8L21hc2s+XG5cdFx0XHQgICAgICAgICAgICAgICAgPHVzZSBpZD0nTWFzaycgc3Ryb2tlPScjNEE1MzYxJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJyB4bGluazpocmVmPScjcGF0aC0xJz48L3VzZT5cblx0XHRcdCAgICAgICAgICAgICAgICA8cGF0aCBkPSdNNiwxMi4xMjAzMDQ2IEwxMi44NTczMzg0LDggTDEzLjM3MjM3NjUsOC44NTcxNjczIEw2LjUxNTAzODA3LDEyLjk3NzQ3MTkgTDYsMTIuMTIwMzA0NiBMNiwxMi4xMjAzMDQ2IFonIGlkPSdSZWN0YW5nbGUtNDcnIGZpbGw9JyM0QTUzNjEnIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnIG1hc2s9J3VybCgjbWFzay0yKSc+PC9wYXRoPlxuXHRcdFx0ICAgICAgICAgICAgICAgIDxwYXRoIGQ9J00xMS44NDk2NDgsOC43MjYwNTUxIEwxOS4xMDAxMTAzLDUuMzQ1MTA5MDEgTDE5LjUyMjcyODUsNi4yNTE0MTY4IEwxMi4yNzIyNjYyLDkuNjMyMzYyODkgTDExLjg0OTY0OCw4LjcyNjA1NTEgTDExLjg0OTY0OCw4LjcyNjA1NTEgWicgaWQ9J1JlY3RhbmdsZS00Ny1Db3B5LTMnIGZpbGw9JyM0QTUzNjEnIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnIG1hc2s9J3VybCgjbWFzay0yKSc+PC9wYXRoPlxuXHRcdFx0ICAgICAgICAgICAgICAgIDxwYXRoIGQ9J002LDMuMTIwMzA0NiBMMTIuODU3MzM4NCwtMSBMMTMuMzcyMzc2NSwtMC4xNDI4MzI2OTkgTDYuNTE1MDM4MDcsMy45Nzc0NzE5IEw2LDMuMTIwMzA0NiBMNiwzLjEyMDMwNDYgWicgaWQ9J1JlY3RhbmdsZS00Ny1Db3B5LTInIGZpbGw9JyM0QTUzNjEnIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnIG1hc2s9J3VybCgjbWFzay0yKSc+PC9wYXRoPlxuXHRcdFx0ICAgICAgICAgICAgICAgIDxwYXRoIGQ9J00tMSw3LjEyMDMwNDYgTDUuODU3MzM4NDEsMyBMNi4zNzIzNzY0OCwzLjg1NzE2NzMgTC0wLjQ4NDk2MTkyNSw3Ljk3NzQ3MTkgTC0xLDcuMTIwMzA0NiBMLTEsNy4xMjAzMDQ2IFonIGlkPSdSZWN0YW5nbGUtNDctQ29weS00JyBmaWxsPScjNEE1MzYxJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJyBtYXNrPSd1cmwoI21hc2stMiknPjwvcGF0aD5cblx0XHRcdCAgICAgICAgICAgICAgICA8cmVjdCBpZD0nUmVjdGFuZ2xlLTUwJyBmaWxsPScjNEE1MzYxJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJyBtYXNrPSd1cmwoI21hc2stMiknIHg9JzQnIHk9JzYnIHdpZHRoPScxJyBoZWlnaHQ9JzUnPjwvcmVjdD5cblx0XHRcdCAgICAgICAgICAgICAgICA8cmVjdCBpZD0nUmVjdGFuZ2xlLTUxJyBmaWxsPScjNEE1MzYxJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJyBtYXNrPSd1cmwoI21hc2stMiknIHg9JzExLjUnIHk9JzMnIHdpZHRoPScxJyBoZWlnaHQ9JzEyJz48L3JlY3Q+XG5cdFx0XHQgICAgICAgICAgICAgICAgPHBhdGggZD0nTTUsNC44NTcxNjczIEwxMS44NTczMzg0LDguOTc3NDcxOSBMMTIuMzcyMzc2NSw4LjEyMDMwNDYgTDUuNTE1MDM4MDcsNCBMNSw0Ljg1NzE2NzMnIGlkPSdSZWN0YW5nbGUtNDctQ29weScgZmlsbD0nIzRBNTM2MScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCcgbWFzaz0ndXJsKCNtYXNrLTIpJz48L3BhdGg+XG5cdFx0XHQgICAgICAgICAgICAgICAgPHBhdGggZD0nTTUsMTIuODU3MTY3MyBMMTEuODU3MzM4NCwxNi45Nzc0NzE5IEwxMi4zNzIzNzY1LDE2LjEyMDMwNDYgTDUuNTE1MDM4MDcsMTIgTDUsMTIuODU3MTY3MycgaWQ9J1JlY3RhbmdsZS00Ny1Db3B5LTUnIGZpbGw9JyM0QTUzNjEnIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnIG1hc2s9J3VybCgjbWFzay0yKSc+PC9wYXRoPlxuXHRcdFx0ICAgICAgICAgICAgICAgIDxwYXRoIGQ9J00xMS45MDQ4OTcyLDYuMTQ3NjYwNjQgTDEzLjg3MTQyMjcsOC4zMzE3MDg0OSBMMTIuNDAxOTU5NiwxMC44NzY4OTMzIEw5LjUyNzI1NTg5LDEwLjI2NTg1NjIgTDkuMjIwMDU0NDUsNy4zNDMwMjk2NSBMMTEuOTA0ODk3Miw2LjE0NzY2MDY0JyBpZD0nUG9seWdvbi0xJyBmaWxsPScjRDhEOEQ4JyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJyBtYXNrPSd1cmwoI21hc2stMiknPjwvcGF0aD5cblx0XHRcdCAgICAgICAgICAgICAgICA8cGF0aCBkPSdNMTEuOTA0ODk3Miw2LjE0NzY2MDY0IEwxMy44NzE0MjI3LDguMzMxNzA4NDkgTDEyLjQwMTk1OTYsMTAuODc2ODkzMyBMOS41MjcyNTU4OSwxMC4yNjU4NTYyIEw5LjIyMDA1NDQ1LDcuMzQzMDI5NjUgTDExLjkwNDg5NzIsNi4xNDc2NjA2NCcgaWQ9J1BvbHlnb24tMS1Db3B5JyBmaWxsPScjNEE1MzYxJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJyBtYXNrPSd1cmwoI21hc2stMiknPjwvcGF0aD5cblx0XHRcdCAgICAgICAgICAgICAgICA8cGF0aCBkPSdNNy40NTc3MTE4OSwzLjE5NTA0NzM5IEw3LjM1NTE0NDg0LDYuMTMyMTgzMzMgTDQuNTMwMDY3Niw2Ljk0MjI2MTIgTDIuODg2NjQwODksNC41MDU3ODA5IEw0LjY5NjAyNDU3LDIuMTg5ODc1NDEgTDcuNDU3NzExODksMy4xOTUwNDczOScgaWQ9J1BvbHlnb24tMS1Db3B5LTInIGZpbGw9JyM0QTUzNjEnIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnIG1hc2s9J3VybCgjbWFzay0yKSc+PC9wYXRoPlxuXHRcdFx0ICAgICAgICAgICAgICAgIDxwYXRoIGQ9J003LjQ1NzcxMTg5LDExLjE5NTA0NzQgTDcuMzU1MTQ0ODQsMTQuMTMyMTgzMyBMNC41MzAwNjc2LDE0Ljk0MjI2MTIgTDIuODg2NjQwODksMTIuNTA1NzgwOSBMNC42OTYwMjQ1NywxMC4xODk4NzU0IEw3LjQ1NzcxMTg5LDExLjE5NTA0NzQnIGlkPSdQb2x5Z29uLTEtQ29weS0zJyBmaWxsPScjNEE1MzYxJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJyBtYXNrPSd1cmwoI21hc2stMiknPjwvcGF0aD5cblx0XHRcdCAgICAgICAgICAgICAgICA8cGF0aCBkPSdNMTQuNTQzMTcwMSwwLjA3MjU5MzkzMTQgTDE0LjQ0MDYwMzEsMy4wMDk3Mjk4OCBMMTEuNjE1NTI1OCwzLjgxOTgwNzc0IEw5Ljk3MjA5OTEyLDEuMzgzMzI3NDUgTDExLjc4MTQ4MjgsLTAuOTMyNTc4MDUgTDE0LjU0MzE3MDEsMC4wNzI1OTM5MzE0JyBpZD0nUG9seWdvbi0xLUNvcHktNCcgZmlsbD0nIzRBNTM2MScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCcgbWFzaz0ndXJsKCNtYXNrLTIpJz48L3BhdGg+XG5cdFx0XHQgICAgICAgICAgICA8L2c+XG5cdFx0XHQgICAgICAgIDwvZz5cblx0XHRcdCAgICA8L2c+XG5cdFx0XHQ8L3N2Zz5cIlxuXHRcdGFjdGl2aXR5LmNvbnN0cmFpbnRzID1cblx0XHRcdGxlYWRpbmcgOiBbZm9vZCwgMTVdXG5cdFx0XHRib3R0b206IDE0XG5cdFx0XHR3aWR0aDoxNlxuXHRcdFx0aGVpZ2h0OjIwXG5cdFx0ZXhwb3J0cy5sYXlvdXQoKVxuXHRcdHRyYXZlbCA9IG5ldyBMYXllciBzdXBlckxheWVyOmVtb2ppUGlja2VyLCBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiLCBvcGFjaXR5Oi40XG5cdFx0dHJhdmVsLmh0bWwgPSBcIjw/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyc/PlxuXHRcdFx0PHN2ZyB3aWR0aD0nI3tleHBvcnRzLnB4KDE3KX1weCcgaGVpZ2h0PScje2V4cG9ydHMucHgoMTYpfXB4JyB2aWV3Qm94PScwIDAgMTcgMTYnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycgeG1sbnM6c2tldGNoPSdodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMnPlxuXHRcdFx0ICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy41LjIgKDI1MjM1KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHRcdCAgICA8dGl0bGU+VHJhbnNwb3J0PC90aXRsZT5cblx0XHRcdCAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHRcdCAgICA8ZGVmcz48L2RlZnM+XG5cdFx0XHQgICAgPGcgaWQ9J2lPUy05LUtleWJvYXJkcycgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCcgc2tldGNoOnR5cGU9J01TUGFnZSc+XG5cdFx0XHQgICAgICAgIDxnIGlkPSdpUGhvbmUtNi1Qb3J0cmFpdC1MaWdodC1Db3B5JyBza2V0Y2g6dHlwZT0nTVNBcnRib2FyZEdyb3VwJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtMjQxLjAwMDAwMCwgLTYzOC4wMDAwMDApJz5cblx0XHRcdCAgICAgICAgICAgIDxnIGlkPSdLZXlib2FyZHMnIHNrZXRjaDp0eXBlPSdNU0xheWVyR3JvdXAnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDAuMDAwMDAwLCA0MDguMDAwMDAwKSc+XG5cdFx0XHQgICAgICAgICAgICAgICAgPGcgaWQ9J1RyYW5zcG9ydCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMjQxLjUwMDAwMCwgMjMwLjAwMDAwMCknIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnPlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSdNMCw2IEwxLDYgTDEsMTUgTDAsMTUgTDAsNiBaIE0xNSw0IEwxNiw0IEwxNiwxNSBMMTUsMTUgTDE1LDQgWiBNMy41LDAgTDQuNSwwIEw0LjUsNyBMMy41LDcgTDMuNSwwIFogTTEsNiBMMy41LDYgTDMuNSw3IEwxLDcgTDEsNiBaIE00LjUsMCBMOS41LDAgTDkuNSwxIEw0LjUsMSBMNC41LDAgWiBNOS41LDAgTDEwLjUsMCBMMTAuNSw2IEw5LjUsNiBMOS41LDAgWiBNMTAuNSw0IEwxNSw0IEwxNSw1IEwxMC41LDUgTDEwLjUsNCBaJyBpZD0nU2t5bGluZScgZmlsbD0nIzRBNTQ2MSc+PC9wYXRoPlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA8ZyBpZD0nV2luZG93cycgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMi4wMDAwMDAsIDIuMDAwMDAwKScgZmlsbD0nIzRBNTQ2MSc+XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0nV2luZG93JyB4PScwJyB5PSc2JyB3aWR0aD0nMScgaGVpZ2h0PScxJz48L3JlY3Q+XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0nV2luZG93JyB4PSczLjUnIHk9JzAnIHdpZHRoPScxJyBoZWlnaHQ9JzEnPjwvcmVjdD5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSdXaW5kb3cnIHg9JzUuNScgeT0nMCcgd2lkdGg9JzEnIGhlaWdodD0nMSc+PC9yZWN0PlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9J1dpbmRvdycgeD0nNS41JyB5PScyJyB3aWR0aD0nMScgaGVpZ2h0PScxJz48L3JlY3Q+XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0nV2luZG93JyB4PSczLjUnIHk9JzInIHdpZHRoPScxJyBoZWlnaHQ9JzEnPjwvcmVjdD5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSdXaW5kb3cnIHg9JzExJyB5PSc0JyB3aWR0aD0nMScgaGVpZ2h0PScxJz48L3JlY3Q+XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0nV2luZG93JyB4PScxMScgeT0nNicgd2lkdGg9JzEnIGhlaWdodD0nMSc+PC9yZWN0PlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA8L2c+XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIDxnIGlkPSdDYXInIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDIuNTAwMDAwLCA2LjUwMDAwMCknPlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0nTTguNSw4IEwyLjUsOCBMMi41LDkuNSBMMC41LDkuNSBMMC41LDcuODY4MTE0NSBDMC4yMDEyMDIxOTIsNy42OTU4MjcwMiAwLDcuMzcwOTEzNjMgMCw2Ljk5MDYzMTEgTDAsNS4wMDkzNjg5IEMwLDQuNDUxOTA5ODUgMC40NDQ4MzY5NzQsNCAwLjk5NTU3NzQ5OSw0IEwxMC4wMDQ0MjI1LDQgQzEwLjU1NDI2NDgsNCAxMSw0LjQ0MzM1MzE4IDExLDUuMDA5MzY4OSBMMTEsNi45OTA2MzExIEMxMSw3LjM2NTMzMTUgMTAuNzk5MDI0NCw3LjY5MjM0NTE5IDEwLjUsNy44NjY0OTAwMiBMMTAuNSw5LjUgTDguNSw5LjUgTDguNSw4IFogTTEuNzUsNi41IEMyLjE2NDIxMzU2LDYuNSAyLjUsNi4xNjQyMTM1NiAyLjUsNS43NSBDMi41LDUuMzM1Nzg2NDQgMi4xNjQyMTM1Niw1IDEuNzUsNSBDMS4zMzU3ODY0NCw1IDEsNS4zMzU3ODY0NCAxLDUuNzUgQzEsNi4xNjQyMTM1NiAxLjMzNTc4NjQ0LDYuNSAxLjc1LDYuNSBaIE05LjI1LDYuNSBDOS42NjQyMTM1Niw2LjUgMTAsNi4xNjQyMTM1NiAxMCw1Ljc1IEMxMCw1LjMzNTc4NjQ0IDkuNjY0MjEzNTYsNSA5LjI1LDUgQzguODM1Nzg2NDQsNSA4LjUsNS4zMzU3ODY0NCA4LjUsNS43NSBDOC41LDYuMTY0MjEzNTYgOC44MzU3ODY0NCw2LjUgOS4yNSw2LjUgWiBNMC41LDcgTDEwLjUsNyBMMTAuNSw3LjUgTDAuNSw3LjUgTDAuNSw3IFogTTMsNi41IEw4LDYuNSBMOCw3IEwzLDcgTDMsNi41IFonIGlkPSdCb2R5JyBmaWxsPScjNEE1NDYxJz48L3BhdGg+XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSdNMS41LDQuNSBMMS41LDMgQzEuNSwxLjM0MzE0NTc1IDIuODM5MDIwMTMsMCA0LjUwMTY2NTQ3LDAgTDYuNDk4MzM0NTMsMCBDOC4xNTYxMDg1OSwwIDkuNSwxLjM0NjUxNzEyIDkuNSwzIEw5LjUsNScgaWQ9J1Jvb2YnIHN0cm9rZT0nIzRBNTQ2MSc+PC9wYXRoPlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA8L2c+XG5cdFx0XHQgICAgICAgICAgICAgICAgPC9nPlxuXHRcdFx0ICAgICAgICAgICAgPC9nPlxuXHRcdFx0ICAgICAgICA8L2c+XG5cdFx0XHQgICAgPC9nPlxuXHRcdFx0PC9zdmc+XCJcblx0XHR0cmF2ZWwuY29uc3RyYWludHMgPVxuXHRcdFx0bGVhZGluZyA6IFthY3Rpdml0eSwgMTVdXG5cdFx0XHRib3R0b206IDE0XG5cdFx0XHR3aWR0aDoxNlxuXHRcdFx0aGVpZ2h0OjIwXG5cdFx0ZXhwb3J0cy5sYXlvdXQoKVxuXHRcdG9iamVjdHMgPSBuZXcgTGF5ZXIgc3VwZXJMYXllcjplbW9qaVBpY2tlciwgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIiwgb3BhY2l0eTouNFxuXHRcdG9iamVjdHMuaHRtbCA9IFwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdFx0XHRcdDxzdmcgd2lkdGg9JyN7ZXhwb3J0cy5weCgxMSl9cHgnIGhlaWdodD0nI3tleHBvcnRzLnB4KDE2KX1weCcgdmlld0JveD0nMCAwIDExIDE2JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHhtbG5zOnNrZXRjaD0naHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zJz5cblx0XHRcdCAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNS4yICgyNTIzNSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdFx0XHQgICAgPHRpdGxlPkxpZ2h0YnVsYjwvdGl0bGU+XG5cdFx0XHQgICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0XHQgICAgPGRlZnM+PC9kZWZzPlxuXHRcdFx0ICAgIDxnIGlkPSdQYWdlLTEnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIHNrZXRjaDp0eXBlPSdNU1BhZ2UnPlxuXHRcdFx0ICAgICAgICA8ZyBpZD0naVBob25lLTYnIHNrZXRjaDp0eXBlPSdNU0FydGJvYXJkR3JvdXAnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC0yNDQuMDAwMDAwLCAtNjM5LjAwMDAwMCknIHN0cm9rZT0nIzRBNTM2MSc+XG5cdFx0XHQgICAgICAgICAgICA8ZyBpZD0nTGlnaHRidWxiJyBza2V0Y2g6dHlwZT0nTVNMYXllckdyb3VwJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgyNDQuMDAwMDAwLCA2MzkuMDAwMDAwKSc+XG5cdFx0XHQgICAgICAgICAgICAgICAgPHBhdGggZD0nTTgsMTAuNDAwMjkwNCBDOS43ODA4Mzc5NSw5LjQ4OTkzNDkxIDExLDcuNjM3MzQyNzMgMTEsNS41IEMxMSwyLjQ2MjQzMzg4IDguNTM3NTY2MTIsMCA1LjUsMCBDMi40NjI0MzM4OCwwIDAsMi40NjI0MzM4OCAwLDUuNSBDMCw3LjYzNzM0MjczIDEuMjE5MTYyMDUsOS40ODk5MzQ5MSAzLDEwLjQwMDI5MDQgTDMsMTQuMDAyMDg2OSBDMywxNS4xMDE3Mzk0IDMuODk3NjE2MDIsMTYgNS4wMDQ4ODE1LDE2IEw1Ljk5NTExODUsMTYgQzcuMTA2MTAwMiwxNiA4LDE1LjEwNTUwMzggOCwxNC4wMDIwODY5IEw4LDEwLjQwMDI5MDQgWicgaWQ9J092YWwtMTcnIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnPjwvcGF0aD5cblx0XHRcdCAgICAgICAgICAgICAgICA8cmVjdCBpZD0nUmVjdGFuZ2xlLTUwJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJyB4PSczJyB5PScxMicgd2lkdGg9JzUnIGhlaWdodD0nMSc+PC9yZWN0PlxuXHRcdFx0ICAgICAgICAgICAgICAgIDxyZWN0IGlkPSdSZWN0YW5nbGUtNTEnIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnIHg9JzQnIHk9JzEzLjUnIHdpZHRoPScxLjUnIGhlaWdodD0nMSc+PC9yZWN0PlxuXHRcdFx0ICAgICAgICAgICAgICAgIDxwYXRoIGQ9J001LDguNSBDNSw4LjUgMy40OTk5OTk5OSw3LjUwMDAwMDAxIDQsNyBDNC41MDAwMDAwMSw2LjQ5OTk5OTk5IDUsNy42NjY2NjY2NyA1LjUsOCBDNS41LDggNi41LDYuNTAwMDAwMDEgNyw3IEM3LjUsNy40OTk5OTk5OSA2LDguNSA2LDguNSBMNiwxMSBMNSwxMSBMNSw4LjUgWicgaWQ9J1JlY3RhbmdsZS01Micgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCc+PC9wYXRoPlxuXHRcdFx0ICAgICAgICAgICAgPC9nPlxuXHRcdFx0ICAgICAgICA8L2c+XG5cdFx0XHQgICAgPC9nPlxuXHRcdFx0PC9zdmc+XCJcblx0XHRvYmplY3RzLmNvbnN0cmFpbnRzID1cblx0XHRcdGxlYWRpbmcgOiBbdHJhdmVsLCAxNV1cblx0XHRcdGJvdHRvbTogMTRcblx0XHRcdHdpZHRoOjE2XG5cdFx0XHRoZWlnaHQ6MjBcblx0XHRleHBvcnRzLmxheW91dCgpXG5cdFx0c3ltYm9scyA9IG5ldyBMYXllciBzdXBlckxheWVyOmVtb2ppUGlja2VyLCBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiLCBvcGFjaXR5Oi40XG5cdFx0c3ltYm9scy5odG1sID0gXCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0XHRcdDxzdmcgd2lkdGg9JyN7ZXhwb3J0cy5weCgxNil9cHgnIGhlaWdodD0nI3tleHBvcnRzLnB4KDE3KX1weCcgdmlld0JveD0nMCAwIDE1IDE3JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHhtbG5zOnNrZXRjaD0naHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zJz5cblx0XHRcdCAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNS4yICgyNTIzNSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdFx0XHQgICAgPHRpdGxlPk9iamVjdHMgJmFtcDsgU3ltYm9sczwvdGl0bGU+XG5cdFx0XHQgICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0XHQgICAgPGRlZnM+PC9kZWZzPlxuXHRcdFx0ICAgIDxnIGlkPSdpT1MtOS1LZXlib2FyZHMnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIHNrZXRjaDp0eXBlPSdNU1BhZ2UnPlxuXHRcdFx0ICAgICAgICA8ZyBpZD0naVBob25lLTYtUG9ydHJhaXQtTGlnaHQtQ29weScgc2tldGNoOnR5cGU9J01TQXJ0Ym9hcmRHcm91cCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTMwNC4wMDAwMDAsIC02MzguMDAwMDAwKScgZmlsbD0nIzRBNTQ2MSc+XG5cdFx0XHQgICAgICAgICAgICA8ZyBpZD0nS2V5Ym9hcmRzJyBza2V0Y2g6dHlwZT0nTVNMYXllckdyb3VwJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgwLjAwMDAwMCwgNDA4LjAwMDAwMCknPlxuXHRcdFx0ICAgICAgICAgICAgICAgIDxnIGlkPSdPYmplY3RzLSZhbXA7LVN5bWJvbHMnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDMwNC4wMDAwMDAsIDIzMC4wMDAwMDApJz5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgPGcgaWQ9J1RoaW5nJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgwLjAwMDAwMCwgMC41MDAwMDApJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJz5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSdSZWN0YW5nbGUtMTIwOScgeD0nMCcgeT0nMCcgd2lkdGg9JzcnIGhlaWdodD0nMSc+PC9yZWN0PlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9J1JlY3RhbmdsZS0xMjA5JyB4PScwJyB5PScyJyB3aWR0aD0nNycgaGVpZ2h0PScxJz48L3JlY3Q+XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0nUmVjdGFuZ2xlLTEyMTEnIHg9JzMnIHk9JzMnIHdpZHRoPScxJyBoZWlnaHQ9JzQnPjwvcmVjdD5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgPC9nPlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSdNMTEuNzUsMC4xNTkyNjM5NzggTDExLjc1LDAgTDExLDAgTDExLDUuMDkxNDkzIEMxMC41OTM0NCw0Ljk0MjIxMzkyIDEwLjA2Mzk2NjIsNC45NjQ1MzIyNCA5LjU1NzE1Mzk5LDUuMTkwMTc5NTcgQzguNjk4NDkyOTMsNS41NzI0ODAxIDguMjMwMDM4MzUsNi4zOTM2NTYyMSA4LjUxMDgzMTQxLDcuMDI0MzI3NzQgQzguNzkxNjI0NDcsNy42NTQ5OTkyOCA5LjcxNTMzNDU0LDcuODU2MzQzNzUgMTAuNTczOTk1Niw3LjQ3NDA0MzIxIEMxMS4yNzYxMTgzLDcuMTYxNDM4MDMgMTEuNzE3MzM5Myw2LjU1NTM4OTcyIDExLjcwMTM1OTUsNiBMMTEuNzUsNiBMMTEuNzUsMS4zOTM4NTA1NiBDMTIuMzE3NTkwOCwxLjU5NTkwMDM3IDEzLDIuMDgxNzQ1NiAxMywzLjI1IEMxMyw0LjI1IDEyLjc1LDUuNSAxMi43NSw1LjUgQzEyLjc1LDUuNSAxMy43NSw0Ljc1IDEzLjc1LDIuNSBDMTMuNzUsMS4wMjI1NjEwMSAxMi41NjQyNjc0LDAuNDA3NDczMDE5IDExLjc1LDAuMTU5MjYzOTc4IFonIGlkPSdOb3RlJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJz48L3BhdGg+XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIDx0ZXh0IGlkPScmYW1wOycgc2tldGNoOnR5cGU9J01TVGV4dExheWVyJyBmb250LWZhbWlseT0nU0YgVUkgRGlzcGxheScgZm9udC1zaXplPSc5LjUnIGZvbnQtd2VpZ2h0PSdub3JtYWwnPlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPHRzcGFuIHg9JzAuMjUnIHk9JzE2Jz4mYW1wOzwvdHNwYW4+XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIDwvdGV4dD5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgPHRleHQgaWQ9JyUnIHNrZXRjaDp0eXBlPSdNU1RleHRMYXllcicgZm9udC1mYW1pbHk9J1NGIFVJIERpc3BsYXknIGZvbnQtc2l6ZT0nOS41JyBmb250LXdlaWdodD0nbm9ybWFsJz5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDx0c3BhbiB4PSc3Ljc1JyB5PScxNic+JTwvdHNwYW4+XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIDwvdGV4dD5cblx0XHRcdCAgICAgICAgICAgICAgICA8L2c+XG5cdFx0XHQgICAgICAgICAgICA8L2c+XG5cdFx0XHQgICAgICAgIDwvZz5cblx0XHRcdCAgICA8L2c+XG5cdFx0XHQ8L3N2Zz5cIlxuXHRcdHN5bWJvbHMuY29uc3RyYWludHMgPVxuXHRcdFx0bGVhZGluZyA6IFtvYmplY3RzLCAxNV1cblx0XHRcdGJvdHRvbTogMTRcblx0XHRcdHdpZHRoOjE2XG5cdFx0XHRoZWlnaHQ6MjBcblx0XHRleHBvcnRzLmxheW91dCgpXG5cdFx0ZmxhZ3MgPSBuZXcgTGF5ZXIgc3VwZXJMYXllcjplbW9qaVBpY2tlciwgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIiwgb3BhY2l0eTouNFxuXHRcdGZsYWdzLmh0bWwgPSBcIjw/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyc/PlxuXHRcdFx0PHN2ZyB3aWR0aD0nI3tleHBvcnRzLnB4KDExKX1weCcgaGVpZ2h0PScje2V4cG9ydHMucHgoMTUpfXB4JyB2aWV3Qm94PScwIDAgMTEgMTUnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycgeG1sbnM6c2tldGNoPSdodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMnPlxuXHRcdFx0ICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy41LjIgKDI1MjM1KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHRcdCAgICA8dGl0bGU+RmxhZzwvdGl0bGU+XG5cdFx0XHQgICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0XHQgICAgPGRlZnM+PC9kZWZzPlxuXHRcdFx0ICAgIDxnIGlkPSdpT1MtOS1LZXlib2FyZHMnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIHNrZXRjaDp0eXBlPSdNU1BhZ2UnPlxuXHRcdFx0ICAgICAgICA8ZyBpZD0naVBob25lLTYtUG9ydHJhaXQtTGlnaHQtQ29weScgc2tldGNoOnR5cGU9J01TQXJ0Ym9hcmRHcm91cCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTI3NS4wMDAwMDAsIC02MzkuMDAwMDAwKSc+XG5cdFx0XHQgICAgICAgICAgICA8ZyBpZD0nS2V5Ym9hcmRzJyBza2V0Y2g6dHlwZT0nTVNMYXllckdyb3VwJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgwLjAwMDAwMCwgNDA4LjAwMDAwMCknPlxuXHRcdFx0ICAgICAgICAgICAgICAgIDxnIGlkPSdGbGFnJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgyNzUuMDAwMDAwLCAyMzEuNTAwMDAwKScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCc+XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSdQb2xlJyBmaWxsPScjNEE1NDYxJyB4PScwJyB5PScwJyB3aWR0aD0nMScgaGVpZ2h0PScxNCc+PC9yZWN0PlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSdNMSwxIEMxLDEgMS4yNSwyIDMuNSwyIEM1Ljc1LDIgNiwwLjc0OTk5OTk5OCA4LDAuNzUgQzEwLDAuNzQ5OTk5OTk4IDEwLDEuNSAxMCwxLjUgTDEwLDcuNSBDMTAsNy41IDEwLDYuNSA4LDYuNSBDNiw2LjUgNC44MDYyMzkxMSw4IDMuNSw4IEMyLjE5Mzc2MDg5LDggMSw3IDEsNyBMMSwxIFonIHN0cm9rZT0nIzRBNTQ2MScgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCc+PC9wYXRoPlxuXHRcdFx0ICAgICAgICAgICAgICAgIDwvZz5cblx0XHRcdCAgICAgICAgICAgIDwvZz5cblx0XHRcdCAgICAgICAgPC9nPlxuXHRcdFx0ICAgIDwvZz5cblx0XHRcdDwvc3ZnPlwiXG5cdFx0ZmxhZ3MuY29uc3RyYWludHMgPVxuXHRcdFx0bGVhZGluZyA6IFtzeW1ib2xzLCAxNV1cblx0XHRcdGJvdHRvbTogMTRcblx0XHRcdHdpZHRoOjE2XG5cdFx0XHRoZWlnaHQ6MjBcblx0XHRleHBvcnRzLmxheW91dCgpXG5cblx0XHRsb2FkRW1vamlzID0gKGVtKSAtPlxuXHRcdFx0cm93KysgXG5cdFx0XHRpbmRleCA9IGVtb2ppc0FycmF5LmluZGV4T2YoZW0pXG5cdFx0XHRjb2wgPSBNYXRoLmZsb29yKGluZGV4LzUpXG5cdFx0XHRpZiByb3cgPiA0XG5cdFx0XHRcdHJvdyA9IDAgXG5cdFx0XHRlbW9qaSA9IG5ldyBMYXllciB4OmNvbCpib3ggKyAoZW1vamlTcGFjZXIgKiBjb2wpICsgZXhwb3J0cy5weCgzKSwgeTpyb3cqYm94ICsgKGVtb2ppU3BhY2VyICogcm93KSArIGV4cG9ydHMucHgoNDApLCBzdXBlckxheWVyOmVtb2ppR2FsbGV5LmNvbnRlbnQsIHdpZHRoOmJveCwgaGVpZ2h0OmJveCwgbmFtZTpkZWNvZGVVUklDb21wb25lbnQoZW0pLCBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiXG5cdFx0XHRlbW9qaS5odG1sID0gZGVjb2RlVVJJQ29tcG9uZW50KGVtKVxuXHRcdFx0ZW1vamkuc3R5bGUgPSB7XG5cdFx0XHRcdFwiZm9udC1zaXplXCIgOiBleHBvcnRzLnB4KDI2KSArIFwicHhcIlxuXHRcdFx0XHRcImxpbmUtaGVpZ2h0XCIgOiBib3ggKyBcInB4XCJcblx0XHRcdFx0XCJ0ZXh0LWFsaWduXCIgOiBcImNlbnRlclwiXG5cdFx0XHR9XG5cdFx0XHRlbW9qaS5vbiBFdmVudHMuQ2xpY2ssIC0+XG5cdFx0XHRcdHByaW50IEAubmFtZVxuXHRcdFx0ZW1vamlzTG9hZGVkKytcblx0XHRcdHByaW50IGVtb2ppc0xvYWRlZFxuXG5cdFx0aW5jID0gMjAwXG5cdFx0Zmlyc3RMb2FkID0gLjFcblx0XHR0aW1lSW5jID0gMlxuXHRcdGZ1bGxBbW91bnQgPSBlbW9qaXNBcnJheS5sZW5ndGhcblx0XHRsb2FkcyA9IE1hdGguY2VpbChmdWxsQW1vdW50IC8gaW5jKSAtIDFcblx0XHRwYXJ0aWFsQW1vdW50ID0gZnVsbEFtb3VudCAlIGluY1xuXHRcdGVtb2ppc0xvYWRlZCA9IDBcblx0XHRmb3IgaSBpbiBbMC4ubG9hZHNdXG5cdFx0XHRpKytcblx0XHRcdFxuXHRcdCNTY3JvbGwgTG9hZFxuXHRcdGVtb2ppR2FsbGV5Lm9uIEV2ZW50cy5Nb3ZlLCAtPlxuXHRcdFx0aWYgZW1vamlHYWxsZXkuc2Nyb2xsWCA+IDIwMDAgJiYgZW1vamlzTG9hZGVkIDwgNDAwXG5cdFx0XHRcdGZvciBlbSBpbiBlbW9qaXNBcnJheVsyMDAuLi40MDBdXG5cdFx0XHRcdFx0bG9hZEVtb2ppcyhlbSlcblx0XHRcdFx0ZW1vamlHYWxsZXkuc2Nyb2xsWCA9IDIwMDFcblx0XHRcdGlmIGVtb2ppR2FsbGV5LnNjcm9sbFggPiA1MDAwICYmIGVtb2ppc0xvYWRlZCA8IDYwMFxuXHRcdFx0XHRmb3IgZW0gaW4gZW1vamlzQXJyYXlbNDAwLi4uNjAwXVxuXHRcdFx0XHRcdGxvYWRFbW9qaXMoZW0pXG5cdFx0XHRcdGVtb2ppR2FsbGV5LnNjcm9sbFggPSA1MDAxXG5cdFx0XHRpZiBlbW9qaUdhbGxleS5zY3JvbGxYID4gNzUwMCAmJiBlbW9qaXNMb2FkZWQgPCA4MDBcblx0XHRcdFx0Zm9yIGVtIGluIGVtb2ppc0FycmF5WzYwMC4uLjgwMF1cblx0XHRcdFx0XHRsb2FkRW1vamlzKGVtKVxuXHRcdFx0XHRlbW9qaUdhbGxleS5zY3JvbGxYID0gNzUwMVxuXHRcdFx0aWYgZW1vamlHYWxsZXkuc2Nyb2xsWCA+IDEwMDAwICYmIGVtb2ppc0xvYWRlZCA8IDEwMDBcblx0XHRcdFx0Zm9yIGVtIGluIGVtb2ppc0FycmF5WzgwMC4uLjEwMDBdXG5cdFx0XHRcdFx0bG9hZEVtb2ppcyhlbSlcblx0XHRcdFx0ZW1vamlHYWxsZXkuc2Nyb2xsWCA9IDEwMDAxXG5cdFx0XHRpZiBlbW9qaUdhbGxleS5zY3JvbGxYID4gMTI1MDAgJiYgZW1vamlzTG9hZGVkIDwgMTIwMFxuXHRcdFx0XHRmb3IgZW0gaW4gZW1vamlzQXJyYXlbMTAwMC4uLjEyOTddXG5cdFx0XHRcdFx0bG9hZEVtb2ppcyhlbSlcblx0XHRcdFx0ZW1vamlHYWxsZXkuc2Nyb2xsWCA9IDEyNTAxXG5cblx0XHQjVGltZSBMb2FkXG5cdFx0VXRpbHMuZGVsYXkgMSwgLT4gXG5cdFx0XHRpZiBlbW9qaXNMb2FkZWQgPCA0MDAgJiYgZW1vamlHYWxsZXkuc2Nyb2xsWCA9PSAwXG5cdFx0XHRcdHNjcm9sbFggPSBlbW9qaUdhbGxleS5zY3JvbGxYXG5cdFx0XHRcdGZvciBlbSBpbiBlbW9qaXNBcnJheVsyMDAuLi40MDBdXG5cdFx0XHRcdFx0bG9hZEVtb2ppcyhlbSlcblx0XHRVdGlscy5kZWxheSAyLjUsIC0+IFxuXHRcdFx0aWYgZW1vamlzTG9hZGVkIDwgNjAwICYmIGVtb2ppR2FsbGV5LnNjcm9sbFggPT0gMFxuXHRcdFx0XHRzY3JvbGxYID0gZW1vamlHYWxsZXkuc2Nyb2xsWFxuXHRcdFx0XHRmb3IgZW0gaW4gZW1vamlzQXJyYXlbNDAwLi4uNjAwXVxuXHRcdFx0XHRcdGxvYWRFbW9qaXMoZW0pXG5cdFx0VXRpbHMuZGVsYXkgMi41LCAtPiBcblx0XHRcdGlmIGVtb2ppc0xvYWRlZCA8IDgwMCAmJiBlbW9qaUdhbGxleS5zY3JvbGxYID09IDBcblx0XHRcdFx0c2Nyb2xsWCA9IGVtb2ppR2FsbGV5LnNjcm9sbFhcblx0XHRcdFx0Zm9yIGVtIGluIGVtb2ppc0FycmF5WzYwMC4uLjgwMF1cblx0XHRcdFx0XHRsb2FkRW1vamlzKGVtKVxuXHRcdFV0aWxzLmRlbGF5IDUuNSwgLT4gXG5cdFx0XHRpZiBlbW9qaXNMb2FkZWQgPCAxMDAwICYmIGVtb2ppR2FsbGV5LnNjcm9sbFggPT0gMFxuXHRcdFx0XHRzY3JvbGxYID0gZW1vamlHYWxsZXkuc2Nyb2xsWFxuXHRcdFx0XHRmb3IgZW0gaW4gZW1vamlzQXJyYXlbODAwLi4uMTAwMF1cblx0XHRcdFx0XHRsb2FkRW1vamlzKGVtKVxuXHRcdFV0aWxzLmRlbGF5IDcsIC0+IFxuXHRcdFx0aWYgZW1vamlzTG9hZGVkIDwgMTI5NyAmJiBlbW9qaUdhbGxleS5zY3JvbGxYID09IDBcblx0XHRcdFx0c2Nyb2xsWCA9IGVtb2ppR2FsbGV5LnNjcm9sbFhcblx0XHRcdFx0Zm9yIGVtIGluIGVtb2ppc0FycmF5WzEwMDAuLi4xMjk3XVxuXHRcdFx0XHRcdGxvYWRFbW9qaXMoZW0pXG5cblxuXHRcdGZvciBlbSBpbiBmcmVxRW1vamlzQXJyYXlcblx0XHRcdGxvYWRFbW9qaXMoZW0pXG5cdFx0Zm9yIGVtIGluIGVtb2ppc0FycmF5WzAuLi5pbmNdXG5cdFx0XHRsb2FkRW1vamlzKGVtKVxuXG5cblx0XHRmb3Igc2VjIGluIGVtb2ppU2VjdGlvbnNcblx0XHRcdGluZGV4ID0gZW1vamlTZWN0aW9ucy5pbmRleE9mKHNlYylcblx0XHRcdHRpdGxlID0gbmV3IExheWVyIHN1cGVyTGF5ZXI6ZW1vamlHYWxsZXkuY29udGVudCwgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIiwgeDppbmRleCo1MDAwICsgZXhwb3J0cy5weCg4KSwgaGVpZ2h0OjgwLCB3aWR0aDo4MDBcblx0XHRcdHRpdGxlLmh0bWwgPSBzZWNcblx0XHRcdHRpdGxlLnN0eWxlID0ge1xuXHRcdFx0XHRcImZvbnQtc2l6ZVwiIDogZXhwb3J0cy5weCgxMikgKyBcInB4XCJcblx0XHRcdFx0XCJmb250LXdlaWdodFwiIDogNjAwXG5cdFx0XHRcdFwiZm9udC1mYW1pbHlcIiA6ICctYXBwbGUtc3lzdGVtLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmJ1xuXHRcdFx0XHQnbGluZS1oZWlnaHQnIDogZXhwb3J0cy5weCg0MikgKyBcInB4XCJcblx0XHRcdFx0J2xldHRlci1zcGFjaW5nJyA6IGV4cG9ydHMucHgoMC43KSArIFwicHhcIlxuXHRcdFx0XHQnY29sb3InIDogXCIjQTVBNkE5XCJcblx0XHRcdFx0J3RleHQtdHJhbnNmb3JtJyA6ICd1cHBlcmNhc2UnXG5cdFx0XHR9XG5cblxuXHRlbW9qaUtleS5vbiBFdmVudHMuVG91Y2hFbmQsIC0+XG5cdFx0ZW1vamlLZXkuYmFja2dyb3VuZENvbG9yID0gXCIjQUFCM0JDXCJcblxuXG5cdHJldHVybktleSA9IG5ldyBMYXllciBzdXBlckxheWVyOmJvYXJkLCBib3JkZXJSYWRpdXM6ZXhwb3J0cy5weCg1KSwgYmFja2dyb3VuZENvbG9yOlwiI0FBQjNCQ1wiLCBzaGFkb3dZOmV4cG9ydHMucHgoMSksIHNoYWRvd0NvbG9yOlwiIzkyOTQ5OFwiLCBjb2xvcjpcImJsYWNrXCJcblx0cmV0dXJuS2V5LmNvbnN0cmFpbnRzID0gKHdpZHRoOjg3LjUsIGhlaWdodDo0MiwgdHJhaWxpbmc6MywgYm90dG9tOjQpXG5cdHJldHVybktleS5odG1sID0gXCJyZXR1cm5cIlxuXHRyZXR1cm5LZXkuc3R5bGUgPSB7XG5cdFx0XCJmb250LXNpemVcIiA6IGV4cG9ydHMucHgoMTYpICsgXCJweFwiXG5cdFx0XCJmb250LXdlaWdodFwiIDogNDAwXG5cdFx0XCJmb250LWZhbWlseVwiIDogJy1hcHBsZS1zeXN0ZW0sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYnXG5cdFx0J3RleHQtYWxpZ24nIDogJ2NlbnRlcidcblx0XHQnbGluZS1oZWlnaHQnIDogZXhwb3J0cy5weCg0MikgKyBcInB4XCJcblxuXHR9XG5cdGV4cG9ydHMubGF5b3V0KClcblxuXHRzcGFjZUtleSA9IG5ldyBMYXllciBzdXBlckxheWVyOmJvYXJkLCBib3JkZXJSYWRpdXM6ZXhwb3J0cy5weCg1KSwgYmFja2dyb3VuZENvbG9yOlwid2hpdGVcIiwgc2hhZG93WTpleHBvcnRzLnB4KDEpLCBzaGFkb3dDb2xvcjpcIiM5Mjk0OThcIiwgY29sb3I6XCJibGFja1wiXG5cdHNwYWNlS2V5LmNvbnN0cmFpbnRzID0gKHdpZHRoOjE4MCwgaGVpZ2h0OjQyLCBsZWFkaW5nOltlbW9qaUtleSwgNl0sIGJvdHRvbTo0KVxuXHRzcGFjZUtleS5odG1sID0gXCJzcGFjZVwiXG5cdHNwYWNlS2V5LnN0eWxlID0ge1xuXHRcdFwiZm9udC1zaXplXCIgOiBleHBvcnRzLnB4KDE2KSArIFwicHhcIlxuXHRcdFwiZm9udC13ZWlnaHRcIiA6IDQwMFxuXHRcdFwiZm9udC1mYW1pbHlcIiA6ICctYXBwbGUtc3lzdGVtLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmJ1xuXHRcdCd0ZXh0LWFsaWduJyA6ICdjZW50ZXInXG5cdFx0J2xpbmUtaGVpZ2h0JyA6IGV4cG9ydHMucHgoNDIpICsgXCJweFwiXG5cblx0fVxuXHRleHBvcnRzLmxheW91dCgpXG5cblxuXHRzcGFjZUtleS5vbiBFdmVudHMuVG91Y2hTdGFydCwgLT5cblx0XHRzcGFjZUtleS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNBQUIzQkNcIlxuXHRzcGFjZUtleS5vbiBFdmVudHMuVG91Y2hFbmQsIC0+XG5cdFx0c3BhY2VLZXkuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiXG5cblxuXHRyZXR1cm5LZXkub24gRXZlbnRzLlRvdWNoU3RhcnQsIC0+XG5cdFx0cmV0dXJuS2V5LmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIlxuXHRyZXR1cm5LZXkub24gRXZlbnRzLlRvdWNoRW5kLCAtPlxuXHRcdHJldHVybktleS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNBQUIzQkNcIlxuXG5cblx0cmV0dXJuIHtcblx0XHRcImJvYXJkXCIgOiBib2FyZFxuXHRcdFwia2V5c1wiIDoga2V5c0FycmF5XG5cdFx0XCJrZXlcIiA6IHtcblx0XHRcdFwicVwiIDoga2V5c0FycmF5WzBdXG5cdFx0XHRcIndcIiA6IGtleXNBcnJheVsxXVxuXHRcdFx0XCJlXCIgOiBrZXlzQXJyYXlbMl1cblx0XHRcdFwiclwiIDoga2V5c0FycmF5WzNdXG5cdFx0XHRcInRcIiA6IGtleXNBcnJheVs0XVxuXHRcdFx0XCJ5XCIgOiBrZXlzQXJyYXlbNV1cblx0XHRcdFwidVwiIDoga2V5c0FycmF5WzZdXG5cdFx0XHRcImlcIiA6IGtleXNBcnJheVs3XVxuXHRcdFx0XCJvXCIgOiBrZXlzQXJyYXlbOF1cblx0XHRcdFwicFwiIDoga2V5c0FycmF5WzldXG5cdFx0XHRcImFcIiA6IGtleXNBcnJheVsxMF1cblx0XHRcdFwic1wiIDoga2V5c0FycmF5WzExXVxuXHRcdFx0XCJkXCIgOiBrZXlzQXJyYXlbMTJdXG5cdFx0XHRcImZcIiA6IGtleXNBcnJheVsxM11cblx0XHRcdFwiZ1wiIDoga2V5c0FycmF5WzE0XVxuXHRcdFx0XCJoXCIgOiBrZXlzQXJyYXlbMTVdXG5cdFx0XHRcImpcIiA6IGtleXNBcnJheVsxNl1cblx0XHRcdFwia1wiIDoga2V5c0FycmF5WzE3XVxuXHRcdFx0XCJsXCIgOiBrZXlzQXJyYXlbMThdXG5cdFx0XHRcInpcIiA6IGtleXNBcnJheVsxOV1cblx0XHRcdFwieFwiIDoga2V5c0FycmF5WzIwXVxuXHRcdFx0XCJjXCIgOiBrZXlzQXJyYXlbMjFdXG5cdFx0XHRcInZcIiA6IGtleXNBcnJheVsyMl1cblx0XHRcdFwiYlwiIDoga2V5c0FycmF5WzIzXVxuXHRcdFx0XCJuXCIgOiBrZXlzQXJyYXlbMjRdXG5cdFx0XHRcIm1cIiA6IGtleXNBcnJheVsyNV1cblx0XHR9XG5cdH1cblxuXG5leHBvcnRzLk1lbnUgPSAoYXJyYXkpIC0+XG5cdHNldHVwID0gc2V0dXBDb21wb25lbnQoXCJtZW51XCIsIGFycmF5KVxuXHRhbGwgPSBuZXcgTGF5ZXIgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIlxuXHRhbGwuY29uc3RyYWludHMgPSBcblx0XHRsZWFkaW5nOjBcblx0XHR0cmFpbGluZzowXG5cdFx0dG9wOjBcblx0XHRib3R0b206MFxuXHRvdmVybGF5ID0gbmV3IExheWVyIGJhY2tncm91bmRDb2xvcjpcInJnYmEoMCwgMCwgMCwgLjQpXCIsIHN1cGVyTGF5ZXI6YWxsLCBuYW1lOlwib3ZlcmxheVwiXG5cdG92ZXJsYXkuY29uc3RyYWludHMgPVxuXHRcdGxlYWRpbmc6MFxuXHRcdHRyYWlsaW5nOjBcblx0XHR0b3A6MFxuXHRcdGJvdHRvbTowXG5cdGV4cG9ydHMuYmdCbHVyKG92ZXJsYXkpXG5cdG1lbnVzID0gbmV3IExheWVyIGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCJcblx0bWVudXMuY29uc3RyYWludHMgPSBcblx0XHRsZWFkaW5nOjBcblx0XHR0cmFpbGluZzowXG5cdFx0dG9wOjBcblx0XHRib3R0b206MFxuXHRleGl0QnV0dG9uID0gbmV3IGV4cG9ydHMuQnV0dG9uIHR5cGU6XCJiaWdcIiwgdGV4dDpzZXR1cC5leGl0LCBibHVyOmZhbHNlLCBzdXBlckxheWVyOm1lbnVzXG5cdGV4aXRCdXR0b24uY29uc3RyYWludHMgPSBcblx0XHRib3R0b206MTBcblx0XHRhbGlnbjpcImhvcml6b250YWxcIlxuXG5cdG9wdGlvbnMgPSBuZXcgTGF5ZXIgc3VwZXJMYXllcjptZW51cywgYm9yZGVyUmFkaXVzOmV4cG9ydHMucHgoMTIuNSksIGJhY2tncm91bmRDb2xvcjpcInJnYmEoMjU1LDI1NSwyNTUsIC44NSlcIlxuXG5cdGRlc2NyaXB0aW9uQnVmZmVyID0gMFxuXHRpZiBzZXR1cC5kZXNjcmlwdGlvblxuXHRcdGRlc2NyaXB0aW9uID0gbmV3IGV4cG9ydHMuVGV4dCBzdHlsZTpcIm1lbnVEZXNjcmlwdGlvblwiLCB0ZXh0OnNldHVwLmRlc2NyaXB0aW9uLCBzdXBlckxheWVyOm9wdGlvbnMsIGZvbnRTaXplOjEzLCBjb2xvcjpcIiM4RjhFOTRcIiwgdGV4dEFsaWduOlwiY2VudGVyXCJcblx0XHRkZXNjcmlwdGlvbi5jb25zdHJhaW50cyA9IFxuXHRcdFx0dG9wOjIxXG5cdFx0XHRhbGlnbjpcImhvcml6b250YWxcIlxuXHRcdFx0d2lkdGg6ZXhwb3J0cy5wdChleHBvcnRzLndpZHRoKSAtIDEwMFxuXHRcdGV4cG9ydHMubGF5b3V0KClcblx0XHRkZXNjcmlwdGlvbkJ1ZmZlciA9IGV4cG9ydHMucHQoZGVzY3JpcHRpb24uaGVpZ2h0KSArIDQyXG5cdFx0ZGl2aWRlciA9IG5ldyBMYXllciBzdXBlckxheWVyOm9wdGlvbnMsIGJhY2tncm91bmRDb2xvcjpcIiNENkUzRTdcIlxuXHRcdGRpdmlkZXIuY29uc3RyYWludHMgPVxuXHRcdFx0aGVpZ2h0OjFcblx0XHRcdHRvcDpkZXNjcmlwdGlvbkJ1ZmZlclxuXHRcdFx0bGVhZGluZzowXG5cdFx0XHR0cmFpbGluZzowXG5cdGV4cG9ydHMuYmdCbHVyKG9wdGlvbnMpXG5cdG9wdGlvbnMuY29uc3RyYWludHMgPSBcblx0XHRsZWFkaW5nOjEwXG5cdFx0dHJhaWxpbmc6MTBcblx0XHRib3R0b206W2V4aXRCdXR0b24sIDEwXVxuXHRcdGhlaWdodDo1OCAqIHNldHVwLm9wdGlvbnMubGVuZ3RoICsgZGVzY3JpcHRpb25CdWZmZXJcblx0ZXhwb3J0cy5sYXlvdXQoKVxuXHRvcHRzID0ge31cblx0Zm9yIG9wdCwgaW5kZXggaW4gc2V0dXAub3B0aW9uc1xuXHRcdGlzUmVkUHJlc2VudCA9IG9wdC5zZWFyY2goXCItclwiKVxuXHRcdGlmIGlzUmVkUHJlc2VudCA9PSAwXG5cdFx0XHRAcmVkID0gdHJ1ZVxuXHRcdFx0b3B0ID0gb3B0LnJlcGxhY2UoXCItclwiLCBcIlwiKVxuXHRcdFx0b3B0ID0gb3B0LnNsaWNlKDEpXG5cdFx0byA9IG5ldyBMYXllciBzdXBlckxheWVyOm9wdGlvbnMsIHdpZHRoOm9wdGlvbnMud2lkdGgsIGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCIsIGJvcmRlclJhZGl1czpleHBvcnRzLnB4KDEyLjUpXG5cdFx0by5jb25zdHJhaW50cyA9IFxuXHRcdFx0dG9wOmluZGV4ICogNTggKyBkZXNjcmlwdGlvbkJ1ZmZlclxuXHRcdFx0aGVpZ2h0OjU4XG5cdFx0YnV0dG9uID0gbmV3IGV4cG9ydHMuQnV0dG9uIHRleHQ6b3B0LCBzdXBlckxheWVyOm8sIGZvbnRTaXplOjIwXG5cdFx0YnV0dG9uLmNvbnN0cmFpbnRzID1cblx0XHRcdGFsaWduOlwiaG9yaXpvbnRhbFwiXG5cdFx0XHR0b3A6MTVcblx0XHRpZiBAcmVkXG5cdFx0XHRidXR0b24uc3ViTGF5ZXJzWzBdLmNvbG9yID0gXCJyZWRcIlxuXHRcdGJ1dHRvbi5jb2xvciA9IFwiI0ZFMzgyNFwiXG5cdFx0aWYgaW5kZXggIT0gc2V0dXAub3B0aW9ucy5sZW5ndGggLSAxXG5cdFx0XHRkaXZpZGVyID0gbmV3IExheWVyIHN1cGVyTGF5ZXI6bywgd2lkdGg6b3B0aW9ucy53aWR0aCwgYmFja2dyb3VuZENvbG9yOlwiI0Q2RTNFN1wiXG5cdFx0XHRkaXZpZGVyLmNvbnN0cmFpbnRzID1cblx0XHRcdFx0aGVpZ2h0OjFcblx0XHRcdFx0Ym90dG9tOjBcblx0XHRleHBvcnRzLmxheW91dCgpXG5cdFx0by5vbiBFdmVudHMuVG91Y2hTdGFydCwgLT5cblx0XHRcdGJhY2tncm91bmRDb2xvciA9IFwicmdiYSgyMTUsMjE1LDIxNSwuNylcIlxuXHRcdFx0QC5hbmltYXRlXG5cdFx0XHRcdHByb3BlcnRpZXM6IChiYWNrZ3JvdW5kQ29sb3I6IGJhY2tncm91bmRDb2xvcilcblx0XHRcdFx0dGltZTouNVxuXHRcdG8ub24gRXZlbnRzLlRvdWNoRW5kLCAtPlxuXHRcdFx0QC5hbmltYXRlXG5cdFx0XHRcdHByb3BlcnRpZXM6KGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCIpXG5cdFx0XHRcdHRpbWU6LjVcblx0XHRcdG1lbnVzLmFuaW1hdGUgXG5cdFx0XHRcdHByb3BlcnRpZXM6IChtYXhZOmV4cG9ydHMuaGVpZ2h0K2V4cG9ydHMucHgoKHNldHVwLm9wdGlvbnMubGVuZ3RoICsgMykgKiA1OCkpXG5cdFx0XHRcdHRpbWU6LjNcblx0XHRcdG92ZXJsYXkuYW5pbWF0ZVxuXHRcdFx0XHRwcm9wZXJ0aWVzOiAob3BhY2l0eTowKVxuXHRcdFx0XHR0aW1lOi4zXG5cdFx0XHRVdGlscy5kZWxheSAuMywgLT5cblx0XHRcdFx0YWxsLmRlc3Ryb3koKVxuXHRcdG9wdHNbb3B0XSA9IG9cblxuXHRpZiBzZXR1cC5hbmltYXRlZCA9PSB0cnVlXG5cdFx0b3ZlcmxheS5vcGFjaXR5ID0gMCBcblx0XHRtZW51cy5tYXhZID0gZXhwb3J0cy5oZWlnaHQgKyBleHBvcnRzLnB4KChzZXR1cC5vcHRpb25zLmxlbmd0aCArIDMpICogNTgpXG5cdFx0b3ZlcmxheS5hbmltYXRlXG5cdFx0XHRwcm9wZXJ0aWVzOihvcGFjaXR5OjEpXG5cdFx0XHR0aW1lOi4zXG5cdFx0bWVudXMuYW5pbWF0ZVxuXHRcdFx0cHJvcGVydGllczoobWF4WTpleHBvcnRzLmhlaWdodClcblx0XHRcdHRpbWU6LjNcblxuXHRvdmVybGF5Lm9uIEV2ZW50cy5Ub3VjaEVuZCwgLT5cblx0XHRtZW51cy5hbmltYXRlIFxuXHRcdFx0cHJvcGVydGllczogKG1heFk6ZXhwb3J0cy5oZWlnaHQrZXhwb3J0cy5weCgoc2V0dXAub3B0aW9ucy5sZW5ndGggKyAzKSAqIDU4KSlcblx0XHRcdHRpbWU6LjNcblx0XHRvdmVybGF5LmFuaW1hdGVcblx0XHRcdHByb3BlcnRpZXM6IChvcGFjaXR5OjApXG5cdFx0XHR0aW1lOi4zXG5cdFx0VXRpbHMuZGVsYXkgLjMsIC0+XG5cdFx0XHRhbGwuZGVzdHJveSgpXHRcdFxuXG5cdGV4aXRCdXR0b24ub24gRXZlbnRzLlRvdWNoRW5kLCAtPlxuXHRcdG1lbnVzLmFuaW1hdGUgXG5cdFx0XHRwcm9wZXJ0aWVzOiAobWF4WTpleHBvcnRzLmhlaWdodCtleHBvcnRzLnB4KChzZXR1cC5vcHRpb25zLmxlbmd0aCArIDMpICogNTgpKVxuXHRcdFx0dGltZTouM1xuXHRcdG92ZXJsYXkuYW5pbWF0ZVxuXHRcdFx0cHJvcGVydGllczogKG9wYWNpdHk6MClcblx0XHRcdHRpbWU6LjNcblx0XHRVdGlscy5kZWxheSAuMywgLT5cblx0XHRcdGFsbC5kZXN0cm95KClcblx0cmV0dXJuIHtcblx0XHRjYW5jZWw6ZXhpdEJ1dHRvblxuXHRcdG9wdGlvbnM6b3B0c1xuXHRcdG1lbnU6bWVudXNcblx0XHRvdmVybGF5Om92ZXJsYXlcblx0XHRkZXNjcmlwdGlvbjpkZXNjcmlwdGlvblxuXHR9XG5cblxuZXhwb3J0cy5OYXZCYXIgPSAoYXJyYXkpIC0+XG5cdHNldHVwID0gc2V0dXBDb21wb25lbnQoXCJuYXZCYXJcIiwgYXJyYXkpXG5cdHByaW50IHNldHVwXG5cbmV4cG9ydHMuVGFiID0gKGFycmF5KSAtPlxuXHRzZXR1cCA9IHNldHVwQ29tcG9uZW50KFwidGFiXCIsIGFycmF5KVxuXHRzd2l0Y2ggZXhwb3J0cy5kZXZpY2UgXG5cdFx0d2hlbiBcImlwaG9uZS01XCJcblx0XHRcdEB0YWJXaWR0aCA9IDU1XG5cdFx0ZWxzZVxuXHRcdFx0QHRhYldpZHRoID0gNzVcblx0dGFiVmlldyA9IG5ldyBMYXllciBuYW1lOnNldHVwLmxhYmVsICsgXCIgdmlld1wiLCBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiXG5cdHRhYlZpZXcuY29uc3RyYWludHMgPSBcblx0XHRsZWFkaW5nOjBcblx0XHR0cmFpbGluZzowXG5cdFx0dG9wOjBcblx0XHRib3R0b206MFxuXHR0YWJCb3ggPSBuZXcgTGF5ZXIgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIiwgbmFtZTpzZXR1cC5sYWJlbCArIFwiIHRhYlwiXG5cdHRhYkJveC5jb25zdHJhaW50cyA9XG5cdFx0d2lkdGg6QHRhYldpZHRoXG5cdFx0aGVpZ2h0OjQ5XG5cdGljb24gPSBuZXcgTGF5ZXIgd2lkdGg6ZXhwb3J0cy5weCgyNSksIGhlaWdodDpleHBvcnRzLnB4KDI1KSwgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIiwgbmFtZTpcImljb25cIiwgc3VwZXJMYXllcjp0YWJCb3hcblx0aWNvbi5jb25zdHJhaW50cyA9XG5cdFx0YWxpZ246XCJob3Jpem9udGFsXCJcblx0XHR0b3A6N1xuXHRzdmdGcmFtZSA9IGV4cG9ydHMuc3ZnKHNldHVwLmljb24pXG5cdGljb24uaHRtbCA9IHN2Z0ZyYW1lLnN2Z1xuXHRpY29uLndpZHRoID0gc3ZnRnJhbWUud2lkdGhcblx0aWNvbi5oZWlnaHQgPSBzdmdGcmFtZS5oZWlnaHRcblx0bGFiZWwgPSBuZXcgZXhwb3J0cy5UZXh0IHRleHQ6c2V0dXAubGFiZWwsIHN1cGVyTGF5ZXI6dGFiQm94LCBjb2xvcjpcIiM5MjkyOTJcIiwgZm9udFNpemU6MTAsIG5hbWU6XCJsYWJlbFwiLCB0ZXh0VHJhbnNmb3JtOlwiY2FwaXRhbGl6ZVwiXG5cdGxhYmVsLmNvbnN0cmFpbnRzID0gXG5cdFx0Ym90dG9tOjJcblx0XHRob3Jpem9udGFsQ2VudGVyOmljb25cblx0ZXhwb3J0cy5sYXlvdXQoKVxuXHR0YWJCb3gudHlwZSA9IFwidGFiXCJcblx0cmV0dXJuIHtcblx0XHR0YWI6dGFiQm94XG5cdFx0aWNvbjppY29uXG5cdFx0bGFiZWw6bGFiZWxcblx0XHR2aWV3OnRhYlZpZXdcblx0fVxuXG5leHBvcnRzLlRhYkJhciA9IChhcnJheSkgLT5cblx0c2V0dXAgPSBzZXR1cENvbXBvbmVudChcInRhYkJhclwiLCBhcnJheSlcblx0aWYgc2V0dXAudGFicy5sZW5ndGggPT0gMFxuXHRcdGR1bW15VGFiID0gbmV3IGV4cG9ydHMuVGFiXG5cdFx0ZHVtbXlUYWIyID0gbmV3IGV4cG9ydHMuVGFiXG5cdFx0c2V0dXAudGFicy5wdXNoIGR1bW15VGFiXG5cdFx0c2V0dXAudGFicy5wdXNoIGR1bW15VGFiMlxuXHR0YWJXaWR0aCA9IDc1XG5cdHN3aXRjaCBleHBvcnRzLmRldmljZSBcblx0XHR3aGVuIFwiaXBob25lLTVcIlxuXHRcdFx0dGFiV2lkdGggPSA1NVxuXHRcdGVsc2Vcblx0XHRcdHRhYldpZHRoID0gNzVcblx0dGFiQmFyID0gbmV3IExheWVyIGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCJcblx0dGFiQmFyQkcgPSBuZXcgQmFja2dyb3VuZExheWVyIGJhY2tncm91bmRDb2xvcjpcIndoaXRlXCIsIG9wYWNpdHk6LjksIHN1cGVyTGF5ZXI6dGFiQmFyLCBuYW1lOlwidGFiQmFyIGJhY2tncm91bmRcIlxuXHR0YWJCYXIuY29uc3RyYWludHMgPVxuXHRcdGxlYWRpbmc6MFxuXHRcdHRyYWlsaW5nOjBcblx0XHRib3R0b206MFxuXHRcdGhlaWdodDo0OVxuXHR0YWJCYXJCRy5jb25zdHJhaW50cyA9XG5cdFx0bGVhZGluZzowXG5cdFx0dHJhaWxpbmc6MFxuXHRcdGJvdHRvbTowXG5cdFx0aGVpZ2h0OjQ5XG5cdGRpdmlkZXIgPSBuZXcgTGF5ZXIgYmFja2dyb3VuZENvbG9yOlwiI0IyQjJCMlwiLCBuYW1lOlwidGFiRGl2aWRlclwiLCBzdXBlckxheWVyOnRhYkJhclxuXHRkaXZpZGVyLmNvbnN0cmFpbnRzID0gXG5cdFx0dG9wOjBcblx0XHRsZWFkaW5nOjBcblx0XHR0cmFpbGluZzowXG5cdFx0aGVpZ2h0Oi41XG5cdHRhYkJhckJveCA9IG5ldyBMYXllciBzdXBlckxheWVyOnRhYkJhciwgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIiwgbmFtZTpcInRhYkJhciBib3hcIlxuXHR0YWJCYXJCb3guY29uc3RyYWludHMgPSBcblx0XHRoZWlnaHQ6NDlcblx0XHR3aWR0aDpzZXR1cC50YWJzLmxlbmd0aCAqIHRhYldpZHRoXG5cblx0ZXhwb3J0cy5sYXlvdXQoKVxuXG5cdHNldEFjdGl2ZSA9ICh0YWJJbmRleCkgLT5cblx0XHRmb3IgdGFiLCBpbmRleCBpbiBzZXR1cC50YWJzXG5cdFx0XHRpZiBpbmRleCA9PSB0YWJJbmRleFxuXHRcdFx0XHRleHBvcnRzLmNoYW5nZUZpbGwodGFiLmljb24sIHNldHVwLmFjdGl2ZUZpbGxDb2xvcilcblx0XHRcdFx0dGFiLmxhYmVsLmNvbG9yID0gc2V0dXAuYWN0aXZlTGFiZWxDb2xvclxuXHRcdFx0XHR0YWIudmlldy52aXNpYmxlID0gdHJ1ZVxuXHRcdFx0ZWxzZVxuXHRcdFx0XHRleHBvcnRzLmNoYW5nZUZpbGwodGFiLmljb24sIHNldHVwLmluYWN0aXZlRmlsbENvbG9yKVxuXHRcdFx0XHR0YWIubGFiZWwuY29sb3IgPSBzZXR1cC5pbmFjdGl2ZUxhYmVsQ29sb3Jcblx0XHRcdFx0dGFiLnZpZXcudmlzaWJsZSA9IGZhbHNlXG5cdGZvciB0YWIsIGluZGV4IGluIHNldHVwLnRhYnNcblx0XHQjQ2hlY2sgZm9yIHZhaWxkIHRhYiBvYmplY3Rcblx0XHRpZiB0YWIudGFiLnR5cGUgIT0gXCJ0YWJcIlxuXHRcdFx0ZXJyb3IodGFiLnRhYi5pZCwgNSlcblxuXHRcdHRhYkJhckJveC5hZGRTdWJMYXllcih0YWIudGFiKVxuXHRcdCMgQ2hhbmdlIGNvbG9yc1xuXHRcdGV4cG9ydHMuY2hhbmdlRmlsbCh0YWIuaWNvbiwgc2V0dXAuaW5hY3RpdmVGaWxsQ29sb3IpXG5cdFx0dGFiLmxhYmVsLmNvbG9yID0gc2V0dXAuaW5hY3RpdmVMYWJlbENvbG9yXG5cdFx0dGFiQmFyQkcuYmFja2dyb3VuZENvbG9yID0gc2V0dXAuYmFja2dyb3VuZENvbG9yXG5cblx0XHRpZiBpbmRleCAhPSAwXG5cdFx0XHR0YWIudGFiLmNvbnN0cmFpbnRzID0gXG5cdFx0XHRcdGxlYWRpbmc6c2V0dXAudGFic1tpbmRleCAtIDFdLnRhYlxuXHRcdFx0ZXhwb3J0cy5sYXlvdXQoKVxuXG5cdFx0dGFiLnRhYi5vbiBFdmVudHMuVG91Y2hTdGFydCwgLT5cblx0XHRcdHRhYkluZGV4ID0gQC54IC8gZXhwb3J0cy5weCh0YWJXaWR0aClcblx0XHRcdHNldEFjdGl2ZSh0YWJJbmRleClcblx0dGFiQmFyQm94LmNvbnN0cmFpbnRzID1cblx0XHRhbGlnbjpcImhvcml6b250YWxcIlxuXG5cdHNldEFjdGl2ZShzZXR1cC5zdGFydClcdFxuXG5cdGV4cG9ydHMubGF5b3V0KClcblx0cmV0dXJuIHRhYkJhclxuXG5cblxuXG5cblxuIiwiIyBBZGQgdGhlIGZvbGxvd2luZyBsaW5lIHRvIHlvdXIgcHJvamVjdCBpbiBGcmFtZXIgU3R1ZGlvLiBcbiMgbXlNb2R1bGUgPSByZXF1aXJlIFwibXlNb2R1bGVcIlxuIyBSZWZlcmVuY2UgdGhlIGNvbnRlbnRzIGJ5IG5hbWUsIGxpa2UgbXlNb2R1bGUubXlGdW5jdGlvbigpIG9yIG15TW9kdWxlLm15VmFyXG5cbmV4cG9ydHMubXlWYXIgPSBcIm15VmFyaWFibGVcIlxuXG5leHBvcnRzLm15RnVuY3Rpb24gPSAtPlxuXHRwcmludCBcIm15RnVuY3Rpb24gaXMgcnVubmluZ1wiXG5cbmV4cG9ydHMubXlBcnJheSA9IFsxLCAyLCAzXSJdfQ==
