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
    animated: false
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
        leading: 20,
        trailing: 20,
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
    var ABC, activity, animals, emojiBG, emojiGalley, emojiPicker, emojiSpacer, emojisLoaded, firstLoad, flags, food, frequent, fullAmount, i, inc, len4, len5, len6, loadEmojis, loads, n, o, objects, partialAmount, q, r, ref1, ref2, results, row, sec, smileys, symbols, timeInc, title, travel;
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
      var len4, len5, len6, len7, len8, o, q, r, ref2, ref3, ref4, ref5, ref6, s, t;
      if (emojiGalley.scrollX > 2000 && emojisLoaded < 400) {
        ref2 = emojisArray.slice(200, 400);
        for (o = 0, len4 = ref2.length; o < len4; o++) {
          em = ref2[o];
          loadEmojis(em);
        }
        emojiGalley.scrollX = 2001;
      }
      if (emojiGalley.scrollX > 5000 && emojisLoaded < 600) {
        ref3 = emojisArray.slice(400, 600);
        for (q = 0, len5 = ref3.length; q < len5; q++) {
          em = ref3[q];
          loadEmojis(em);
        }
        emojiGalley.scrollX = 5001;
      }
      if (emojiGalley.scrollX > 7500 && emojisLoaded < 800) {
        ref4 = emojisArray.slice(600, 800);
        for (r = 0, len6 = ref4.length; r < len6; r++) {
          em = ref4[r];
          loadEmojis(em);
        }
        emojiGalley.scrollX = 7501;
      }
      if (emojiGalley.scrollX > 10000 && emojisLoaded < 1000) {
        ref5 = emojisArray.slice(800, 1000);
        for (s = 0, len7 = ref5.length; s < len7; s++) {
          em = ref5[s];
          loadEmojis(em);
        }
        emojiGalley.scrollX = 10001;
      }
      if (emojiGalley.scrollX > 12500 && emojisLoaded < 1200) {
        ref6 = emojisArray.slice(1000, 1297);
        for (t = 0, len8 = ref6.length; t < len8; t++) {
          em = ref6[t];
          loadEmojis(em);
        }
        return emojiGalley.scrollX = 12501;
      }
    });
    Utils.delay(1, function() {
      var len4, o, ref2, results, scrollX;
      if (emojisLoaded < 400 && emojiGalley.scrollX === 0) {
        scrollX = emojiGalley.scrollX;
        ref2 = emojisArray.slice(200, 400);
        results = [];
        for (o = 0, len4 = ref2.length; o < len4; o++) {
          em = ref2[o];
          results.push(loadEmojis(em));
        }
        return results;
      }
    });
    Utils.delay(2.5, function() {
      var len4, o, ref2, results, scrollX;
      if (emojisLoaded < 600 && emojiGalley.scrollX === 0) {
        scrollX = emojiGalley.scrollX;
        ref2 = emojisArray.slice(400, 600);
        results = [];
        for (o = 0, len4 = ref2.length; o < len4; o++) {
          em = ref2[o];
          results.push(loadEmojis(em));
        }
        return results;
      }
    });
    Utils.delay(2.5, function() {
      var len4, o, ref2, results, scrollX;
      if (emojisLoaded < 800 && emojiGalley.scrollX === 0) {
        scrollX = emojiGalley.scrollX;
        ref2 = emojisArray.slice(600, 800);
        results = [];
        for (o = 0, len4 = ref2.length; o < len4; o++) {
          em = ref2[o];
          results.push(loadEmojis(em));
        }
        return results;
      }
    });
    Utils.delay(5.5, function() {
      var len4, o, ref2, results, scrollX;
      if (emojisLoaded < 1000 && emojiGalley.scrollX === 0) {
        scrollX = emojiGalley.scrollX;
        ref2 = emojisArray.slice(800, 1000);
        results = [];
        for (o = 0, len4 = ref2.length; o < len4; o++) {
          em = ref2[o];
          results.push(loadEmojis(em));
        }
        return results;
      }
    });
    Utils.delay(7, function() {
      var len4, o, ref2, results, scrollX;
      if (emojisLoaded < 1297 && emojiGalley.scrollX === 0) {
        scrollX = emojiGalley.scrollX;
        ref2 = emojisArray.slice(1000, 1297);
        results = [];
        for (o = 0, len4 = ref2.length; o < len4; o++) {
          em = ref2[o];
          results.push(loadEmojis(em));
        }
        return results;
      }
    });
    for (o = 0, len4 = freqEmojisArray.length; o < len4; o++) {
      em = freqEmojisArray[o];
      loadEmojis(em);
    }
    ref2 = emojisArray.slice(0, inc);
    for (q = 0, len5 = ref2.length; q < len5; q++) {
      em = ref2[q];
      loadEmojis(em);
    }
    results = [];
    for (r = 0, len6 = emojiSections.length; r < len6; r++) {
      sec = emojiSections[r];
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
  var all, exitButton, i, j, len, menus, opt, option, overlay, ref, setup;
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
  exports.layout();
  ref = setup.options;
  for (i = j = 0, len = ref.length; j < len; i = ++j) {
    opt = ref[i];
    option = new Layer;
  }
  if (setup.animated === true) {
    overlay.opacity = 0;
    menus.maxY = exports.height + exports.px(250);
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
  return exitButton.on(Events.TouchEnd, function() {
    menus.animate({
      properties: {
        maxY: exports.height + exports.px(250)
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMva2V2eW4vRHJvcGJveCAoUGVyc29uYWwpL0ZyYW1lciBQcm90b3R5cGVzL2ZyYW1lci1pb3Mta2l0L0RlbW8uZnJhbWVyL21vZHVsZXMvaU9TS2l0LmNvZmZlZSIsIi9Vc2Vycy9rZXZ5bi9Ecm9wYm94IChQZXJzb25hbCkvRnJhbWVyIFByb3RvdHlwZXMvZnJhbWVyLWlvcy1raXQvRGVtby5mcmFtZXIvbW9kdWxlcy9teU1vZHVsZS5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNFQSxJQUFBOztBQUFBLGFBQUEsR0FBZ0I7RUFFaEIsWUFBQSxFQUFlO0lBQUUsTUFBQSxFQUFRLE1BQU0sQ0FBQyxXQUFqQjtJQUE4QixLQUFBLEVBQU8sTUFBTSxDQUFDLFVBQTVDO0lBQXdELEtBQUEsRUFBTSxDQUE5RDtJQUFpRSxNQUFBLEVBQU8sS0FBeEU7SUFBK0UsUUFBQSxFQUFTLEtBQXhGO0dBRkM7RUFNaEIsNEJBQUEsRUFBOEI7SUFBRSxNQUFBLEVBQVEsSUFBVjtJQUFnQixLQUFBLEVBQU8sR0FBdkI7SUFBNEIsS0FBQSxFQUFPLENBQW5DO0lBQXNDLE1BQUEsRUFBTyxJQUE3QztJQUFtRCxRQUFBLEVBQVMsS0FBNUQ7R0FOZDtFQU9oQix3QkFBQSxFQUEwQjtJQUFFLE1BQUEsRUFBUSxJQUFWO0lBQWdCLEtBQUEsRUFBTyxHQUF2QjtJQUE0QixLQUFBLEVBQU8sQ0FBbkM7SUFBc0MsTUFBQSxFQUFPLElBQTdDO0lBQW1ELFFBQUEsRUFBUyxLQUE1RDtHQVBWO0VBUWhCLHNCQUFBLEVBQXdCO0lBQUUsTUFBQSxFQUFRLElBQVY7SUFBZ0IsS0FBQSxFQUFPLEdBQXZCO0lBQTRCLEtBQUEsRUFBTyxDQUFuQztJQUFzQyxNQUFBLEVBQU8sSUFBN0M7SUFBbUQsUUFBQSxFQUFTLEtBQTVEO0dBUlI7RUFXaEIsdUJB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VUFBUixHQUFxQixTQUFBO1NBQ3BCLEtBQUEsQ0FBTSx1QkFBTjtBQURvQjs7QUFHckIsT0FBTyxDQUFDLE9BQVIsR0FBa0IsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiI2lPU0tpdCBNb2R1bGVcbiNCeSBLZXZ5biBBcm5vdHQgQGt2eW5fXG5mcmFtZXJEZXZpY2VzID0ge1xuI0Z1bGxzY3JlZW5cblwiZnVsbHNjcmVlblwiIDogeyBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCwgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFx0c2NhbGU6MSwgbW9iaWxlOmZhbHNlLCBwbGF0Zm9ybTpcIndlYlwifVxuXG4jaVBob25lc1xuIyM1U1xuXCJhcHBsZS1pcGhvbmUtNXMtc3BhY2UtZ3JheVwiOiB7IGhlaWdodDogMTEzNiwgd2lkdGg6IDY0MCxcdHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblwiYXBwbGUtaXBob25lLTVzLXNpbHZlclwiOiB7IGhlaWdodDogMTEzNiwgd2lkdGg6IDY0MCxcdHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblwiYXBwbGUtaXBob25lLTVzLWdvbGRcIjogeyBoZWlnaHQ6IDExMzYsIHdpZHRoOiA2NDAsXHRzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cbiMjNWNcblwiYXBwbGUtaXBob25lLTVjLWdyZWVuXCI6IHsgaGVpZ2h0OiAxMTM2LCB3aWR0aDogNjQwLFx0c2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXCJhcHBsZS1pcGhvbmUtNWMtYmx1ZVwiOiB7IGhlaWdodDogMTEzNiwgd2lkdGg6IDY0MCxcdHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblwiYXBwbGUtaXBob25lLTVjLXJlZFwiOiB7IGhlaWdodDogMTEzNiwgd2lkdGg6IDY0MCxcdHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblwiYXBwbGUtaXBob25lLTVjLXdoaXRlXCI6IHsgaGVpZ2h0OiAxMTM2LCB3aWR0aDogNjQwLFx0c2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXCJhcHBsZS1pcGhvbmUtNWMteWVsbG93XCI6IHsgaGVpZ2h0OiAxMTM2LCB3aWR0aDogNjQwLFx0c2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXCJhcHBsZS1pcGhvbmUtNWMtcGlua1wiOiB7IGhlaWdodDogMTEzNiwgd2lkdGg6IDY0MCxcdHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cbiMjNnNcblwiYXBwbGUtaXBob25lLTZzLXNwYWNlLWdyYXlcIiA6IHsgaGVpZ2h0OiAxMzM0LCB3aWR0aDogNzUwLFx0c2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXCJhcHBsZS1pcGhvbmUtNnMtc2lsdmVyXCI6IHsgaGVpZ2h0OiAxMzM0LCB3aWR0aDogNzUwLFx0c2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXCJhcHBsZS1pcGhvbmUtNnMtZ29sZFwiOiB7IGhlaWdodDogMTMzNCwgd2lkdGg6IDc1MCxcdHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblwiYXBwbGUtaXBob25lLTZzLXJvc2UtZ29sZFwiOiB7IGhlaWdodDogMTMzNCwgd2lkdGg6IDc1MCxcdHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cbiM2cyBwbHVzXG5cImFwcGxlLWlwaG9uZS02cy1wbHVzLWdvbGRcIjogeyBoZWlnaHQ6IDIyMDgsIHdpZHRoOiAxMjQyLFx0c2NhbGU6IDMsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXCJhcHBsZS1pcGhvbmUtNnMtcGx1cy1zaWx2ZXJcIjogeyBoZWlnaHQ6IDIyMDgsIHdpZHRoOiAxMjQyLFx0c2NhbGU6IDMsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXCJhcHBsZS1pcGhvbmUtNnMtcGx1cy1zcGFjZS1ncmF5XCI6IHsgaGVpZ2h0OiAyMjA4LCB3aWR0aDogMTI0MixcdHNjYWxlOiAzLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblwiYXBwbGUtaXBob25lLTZzLXBsdXMtcm9zZS1nb2xkXCI6IHsgaGVpZ2h0OiAyMjA4LCB3aWR0aDogMTI0MixcdHNjYWxlOiAzLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblxuI2lQYWRzXG5cbiNBaXJcblxuXCJhcHBsZS1pcGFkLWFpci0yLWdvbGRcIjogeyBoZWlnaHQ6IDIwNDgsIHdpZHRoOiAxNTM2LFx0c2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXCJhcHBsZS1pcGFkLWFpci0yLXNpbHZlclwiOiB7IGhlaWdodDogMjA0OCwgd2lkdGg6IDE1MzYsXHRzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cImFwcGxlLWlwYWQtYWlyLTItc3BhY2UtZ3JheVwiOiB7IGhlaWdodDogMjA0OCwgd2lkdGg6IDE1MzYsXHRzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cbiNtaW5pXG5cImFwcGxlLWlwYWQtbWluaS00LWdvbGRcIjogeyBoZWlnaHQ6IDIwNDgsIHdpZHRoOiAxNTM2LFx0c2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXCJhcHBsZS1pcGFkLW1pbmktNC1zcGFjZS1ncmF5XCI6IHsgaGVpZ2h0OiAyMDQ4LCB3aWR0aDogMTUzNixcdHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblwiYXBwbGUtaXBhZC1taW5pLTQtc2lsdmVyXCI6eyBoZWlnaHQ6IDIwNDgsIHdpZHRoOiAxNTM2LCBzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cbiNQcm9cblwiYXBwbGUtaXBhZC1wcm8tZ29sZFwiOiB7IGhlaWdodDogMjczMiwgd2lkdGg6IDIwNDgsIHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblwiYXBwbGUtaXBhZC1wcm8tc2lsdmVyXCI6IHsgaGVpZ2h0OiAyNzMyLCB3aWR0aDogMjA0OCwgc2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXCJhcHBsZS1pcGFkLXByby1zcGFjZS1ncmF5XCIgOiB7IGhlaWdodDogMjczMiwgd2lkdGg6IDIwNDgsIHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cbn1cbmV4cG9ydHMuZGV2aWNlID0gMFxuZXhwb3J0cy5uYW1lID0gMFxuZXhwb3J0cy5zY2FsZSA9IDBcbmV4cG9ydHMuaGVpZ2h0ID0gMFxuZXhwb3J0cy53aWR0aCA9IDBcbmV4cG9ydHMubW9iaWxlID0gMFxuZXhwb3J0cy5wbGF0Zm9ybSA9IDBcbmV4cG9ydHMub3JpZW50YXRpb24gPSAwXG5zY3JlZW4gPSB7fVxuXG5cbmV4cG9ydHMuZ2V0RGV2aWNlID0gLT5cblx0ZGV2aWNlID0gRnJhbWVyLkRldmljZS5kZXZpY2VUeXBlXG5cdGlmIGlubmVyV2lkdGggPT0gMTI0MlxuXHRcdGRldmljZSA9IFwiYXBwbGUtaXBob25lLTZzLXBsdXMtc2lsdmVyXCJcblx0ZXhwb3J0cy5zY2FsZSA9IGZyYW1lckRldmljZXNbZGV2aWNlXS5zY2FsZVxuXHRpZiBkZXZpY2UgPT0gXCJmdWxsc2NyZWVuXCJcblx0XHRleHBvcnRzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGhcblx0XHRleHBvcnRzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodFxuXHRlbHNlXG5cdFx0ZXhwb3J0cy53aWR0aCA9IGZyYW1lckRldmljZXNbZGV2aWNlXS53aWR0aFxuXHRcdGV4cG9ydHMuaGVpZ2h0ID0gZnJhbWVyRGV2aWNlc1tkZXZpY2VdLmhlaWdodFxuXHRcdGlmIHdpbmRvdy5pbm5lcldpZHRoID09IDEyNDIgfHwgd2luZG93LmlubmVyV2lkdGggPT0gMjIwOFxuXHRcdFx0ZXhwb3J0cy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoXG5cdFx0XHRleHBvcnRzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodFxuXHRcdFx0ZXhwb3J0cy5zY2FsZSA9IDNcblx0ZXhwb3J0cy5tb2JpbGUgPSBmcmFtZXJEZXZpY2VzW2RldmljZV0ubW9iaWxlXG5cdGV4cG9ydHMucGxhdGZvcm0gPSBmcmFtZXJEZXZpY2VzW2RldmljZV0ucGxhdGZvcm1cblx0ZXhwb3J0cy5vcmllbnRhdGlvbiA9ICBGcmFtZXIuRGV2aWNlLm9yaWVudGF0aW9uXG5cdGRldmljZSA9IGRldmljZS5yZXBsYWNlKFwiYXBwbGUtXCIsIFwiXCIpXG5cdGRldmljZSA9IGRldmljZS5yZXBsYWNlKFwiLWdvbGRcIiwgXCJcIilcblx0ZGV2aWNlID0gZGV2aWNlLnJlcGxhY2UoXCItZ3JlZW5cIiwgXCJcIilcblx0ZGV2aWNlID0gZGV2aWNlLnJlcGxhY2UoXCItYmx1ZVwiLCBcIlwiKVxuXHRkZXZpY2UgPSBkZXZpY2UucmVwbGFjZShcIi1yZWRcIiwgXCJcIilcblx0ZGV2aWNlID0gZGV2aWNlLnJlcGxhY2UoXCItd2hpdGVcIiwgXCJcIilcblx0ZGV2aWNlID0gZGV2aWNlLnJlcGxhY2UoXCIteWVsbG93XCIsIFwiXCIpXG5cdGRldmljZSA9IGRldmljZS5yZXBsYWNlKFwiLXBpbmtcIiwgXCJcIilcblx0ZGV2aWNlID0gZGV2aWNlLnJlcGxhY2UoXCItc3BhY2UtZ3JleVwiLCBcIlwiKVxuXHRkZXZpY2UgPSBkZXZpY2UucmVwbGFjZShcIi1yb3NlXCIsIFwiXCIpXG5cdGRldmljZSA9IGRldmljZS5yZXBsYWNlKFwiNXNcIiwgXCI1XCIpXG5cdGRldmljZSA9IGRldmljZS5yZXBsYWNlKFwiNWNcIiwgXCI1XCIpXG5cdGV4cG9ydHMuZGV2aWNlID0gZGV2aWNlLnJlcGxhY2UoXCItc2lsdmVyXCIsIFwiXCIpXG5cdHNjcmVlbiA9IHtcblx0XHR3aWR0aDpleHBvcnRzLndpZHRoXG5cdFx0aGVpZ2h0OmV4cG9ydHMuaGVpZ2h0XG5cdH1cblxuXG5leHBvcnRzLm9yaWVudCA9ICgpIC0+XG5cdGlmIGV4cG9ydHMub3JpZW50YXRpb24gPT0gLTkwXG5cdFx0dGVtcEhlaWdodCA9IGV4cG9ydHMuaGVpZ2h0XG5cdFx0dGVtcFdpZHRoID0gZXhwb3J0cy53aWR0aFxuXHRcdGV4cG9ydHMuaGVpZ2h0ID0gdGVtcFdpZHRoXG5cdFx0ZXhwb3J0cy53aWR0aCA9IHRlbXBIZWlnaHRcblxuZXhwb3J0cy5nZXREZXZpY2UoKVxuZXhwb3J0cy5vcmllbnQoKVxuXG5cbiNMaXN0ZW4gdG8gd2luZG93IHJlaXplXG5vblJlc2l6ZSA9ICgpIC0+XG5cdGV4cG9ydHMuZ2V0RGV2aWNlKClcblx0ZXhwb3J0cy5sYXlvdXQoKVxuXG5cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgb25SZXNpemUpXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm9yaWVudGF0aW9uY2hhbmdlXCIgLCBvblJlc2l6ZSlcblxuXG5cbmRlZmF1bHRzID0ge1xuXHRhbGVydDoge1xuXHRcdHRleHQ6e1xuXHRcdFx0dGl0bGU6IFwiVGl0bGVcIlxuXHRcdFx0bWVzc2FnZTpcIk1lc3NhZ2VcIlxuXHRcdFx0YWN0aW9uOlwiQWN0aW9uXCJcblx0XHRcdHNlY29uZGFyeUFjdGlvbjogXCJzZWNvbmRhcnlBY3Rpb25cIlxuXHRcdH1cblx0fVxuXHRiYW5uZXI6IHtcblx0XHR0ZXh0Ontcblx0XHRcdHRpdGxlOiBcIlRpdGxlXCJcblx0XHRcdG1lc3NhZ2U6XCJNZXNzYWdlXCJcblx0XHRcdGFjdGlvbjpcIkFjdGlvblwiXG5cdFx0XHR0aW1lOlwibm93XCJcblx0XHRcdGljb246dW5kZWZpbmVkXG5cdFx0fVxuXHR9XG5cdGJ1dHRvbjp7XG5cdFx0dGV4dDpcInRleHRcIlxuXHRcdHR5cGU6XCJ0ZXh0XCJcblx0XHRzdHlsZTpcImxpZ2h0XCJcblx0XHRiYWNrZ3JvdW5kQ29sb3I6XCJ3aGl0ZVwiXG5cdFx0Y29sb3I6XCIjMDA3QUZGXCJcblx0XHRmb250U2l6ZToxN1xuXHRcdGZvbnRXZWlnaHQ6XCJyZWd1bGFyXCJcblx0XHRuYW1lOlwiYnV0dG9uXCJcblx0XHRibHVyOnRydWVcblx0XHRzdXBlckxheWVyOnVuZGVmaW5lZFxuXHR9XG5cdGZyYW1lclByb3BzIDpbXCJuYW1lXCIsIFwid2lkdGhcIiwgXCJoZWlnaHRcIiwgXCJzdXBlckxheWVyXCIsIFwib3BhY2l0eVwiLCBcImNvbG9yXCIsIFwiYmFja2dyb3VuZENvbG9yXCIsIFwieFwiLCBcInlcIiwgXCJtaWRYXCIsIFwibWlkWVwiLCBcIm1heFhcIiwgXCJtaW5YXCIsIFwidmlzaWJsZVwiLCBcImNsaXBcIiwgXCJzY3JvbGxIb3Jpem9udGFsXCIsIFwic2Nyb2xsVmVydGljYWxcIiwgXCJpZ25vcmVFdmVudHNcIiwgXCJ6XCIsIFwic2NhbGVYXCIsIFwic2NhbGVZXCIsIFwic2NhbGVaXCIsIFwic2NhbGVcIiwgXCJza2V3WFwiLCBcInNrZXdZXCIsIFwic2tld1wiLCBcIm9yaWdpblhcIiwgXCJvcmlnaW5ZXCIsIFwib3JpZ2luWlwiLCBcInBlcnNwZWN0aXZlXCIsIFwicGVyc3BlY3RpdmVPcmlnaW5YXCIsIFwicGVyc3BlY3RpdmVPcmlnaW5ZXCIsIFwicm90YXRpb25YXCIsIFwicm90YXRpb25ZXCIsIFwicm90YXRpb25aXCIsIFwicm90YXRpb25cIiwgXCJibHVyXCIsIFwiYnJpZ2h0bmVzc1wiLCBcInNhdHVyYXRlXCIsIFwiaHVlUm90YXRlXCIsIFwiY29udHJhc3RcIiwgXCJpbnZlcnRcIiwgXCJncmF5c2NhbGVcIiwgXCJzZXBpYVwiLCBcInNoYWRvd1hcIiwgXCJzaGFkb3dZXCIsIFwic2hhZG93Qmx1clwiLCBcInNoYWRvd1NwcmVhZFwiLCBcInNoYWRvd0NvbG9yXCIsIFwiYm9yZGVyQ29sb3JcIiwgXCJib3JkZXJXaWR0aFwiLCBcImZvcmNlMmRcIiwgXCJmbGF0XCIsIFwiYmFja2ZhY2VWaXNpYmxlXCIsIFwibmFtZVwiLCBcIm1hdHJpeFwiLCBcIl9tYXRyaXgyZFwiLCBcInRyYW5zZm9ybU1hdHJpeFwiLCBcIm1hdHJpeDNkXCIsIFwiYm9yZGVyUmFkaXVzXCIsIFwicG9pbnRcIiwgXCJzaXplXCIsIFwiZnJhbWVcIiwgXCJodG1sXCIsIFwiaW1hZ2VcIiwgXCJzY3JvbGxYXCIsIFwic2Nyb2xsWVwiLCBcIl9kb21FdmVudE1hbmFnZXJcIiwgXCJtb3VzZVdoZWVsU3BlZWRNdWx0aXBsaWVyXCIsIFwidmVsb2NpdHlUaHJlc2hvbGRcIiwgXCJhbmltYXRpb25PcHRpb25zXCIsIFwiY29uc3RyYWluZWRcIl1cblx0Y3NzUHJvcHMgOiBbXCJmb250RmFtaWx5XCIsIFwiZm9udFNpemVcIiwgXCJ0ZXh0QWxpZ25cIiwgXCJmb250V2VpZ2h0XCIsIFwibGluZUhlaWdodFwiXVxuXHRjb25zdHJhaW50UHJvcHMgOiBbXCJoZWlnaHRcIiwgXCJ3aWR0aFwiXVxuXHRjb25zdHJhaW50VHlwZXM6IFtcInRvcFwiLCBcImxlYWRpbmdcIiwgXCJ0cmFpbGluZ1wiLCBcImJvdHRvbVwiXVxuXHRjb25zdHJhaW50QWxpZ25zIDogW1wiaG9yaXpvbnRhbENlbnRlclwiLCBcInZlcnRpY2FsQ2VudGVyXCIsIFwibGVhZGluZ0VkZ2VzXCIsIFwidHJhaWxpbmdFZGdlc1wiLCBcInRvcEVkZ2VzXCIsIFwiYm90dG9tRWRnZXNcIiwgXCJhbGlnblwiLCBcInZlcnRpY2FsXCIsIFwiaG9yaXpvbnRhbFwiXVxuXHRjb25zdHJhaW50czoge1xuXHRcdHRvcDoge1xuXHRcdFx0XCJwcm9wXCIgOiBcInlcIlxuXHRcdFx0XCJvYmpQcm9wXCIgOiBcIm1heFlcIlxuXHRcdFx0XCJvYmpQcm9wMlwiIDogXCJoZWlnaHRcIlxuXHRcdFx0XCJvcHBcIiA6IFwiYm90dG9tXCJcblx0XHR9XG5cdFx0bGVhZGluZzoge1xuXHRcdFx0XCJwcm9wXCIgOiBcInhcIlxuXHRcdFx0XCJvYmpQcm9wXCIgOiBcIm1heFhcIlxuXHRcdFx0XCJvYmpQcm9wMlwiIDogXCJ3aWR0aFwiXG5cdFx0XHRcIm9wcFwiIDogXCJ0cmFpbGluZ1wiXG5cdFx0fVxuXHRcdGJvdHRvbToge1xuXHRcdFx0XCJwcm9wXCIgOiBcIm1heFlcIlxuXHRcdFx0XCJvYmpQcm9wXCIgOiBcImhlaWdodFwiXG5cdFx0XHRcIm9ialByb3AyXCIgOiBcInlcIlxuXHRcdFx0XCJvcHBcIiA6IFwidG9wXCJcblx0XHR9XG5cdFx0dHJhaWxpbmc6IHtcblx0XHRcdFwicHJvcFwiIDogXCJtYXhYXCJcblx0XHRcdFwib2JqUHJvcFwiIDogXCJ3aWR0aFwiXG5cdFx0XHRcIm9ialByb3AyXCIgOiBcInhcIlxuXHRcdFx0XCJvcHBcIiA6IFwibGVhZGluZ1wiXG5cdFx0fVxuXHR9XG5cdGxvY2tTY3JlZW46IHtcblx0XHR0aW1lOlwiZGVmYXVsdFwiXG5cdFx0ZGF0ZTpcImRlZmF1bHRcIlxuXHRcdHBhc3Njb2RlOmZhbHNlXG5cdFx0Y2xvY2syNDpmYWxzZVxuXHRcdHR5cGU6XCJsb2NrU2NyZWVuXCJcblx0fVxuXHRrZXlib2FyZFByb3BzOiBbXCJyZXR1cm5LZXlcIl1cblx0a2V5Ym9hcmQ6IHtcblx0XHRyZXR1cm5LZXk6XCJkZWZhdWx0XCJcblx0fVxuXHRtZW51OiB7XG5cdFx0b3B0aW9uczpbXCJPcHRpb25cIiwgXCJPcHRpb25cIiwgXCJPcHRpb25cIl1cblx0XHRleGl0OlwiQ2FuY2VsXCJcblx0XHRhbmltYXRlZDpmYWxzZVxuXHR9XG5cdG5hdkJhcjoge1xuXHRcdHRpdGxlOlwidGl0bGVcIlxuXHRcdGxlZnRBY3Rpb246XCJsZWZ0QWN0aW9uXCJcblx0XHRyaWdodEFjdGlvbjpcInJpZ2h0QWN0aW9uXCJcblx0fVxuXHRzdGF0dXNCYXI6IHtcblx0XHRjYXJyaWVyOlwiXCJcblx0XHRuZXR3b3JrOlwiTFRFXCJcblx0XHRiYXR0ZXJ5OjEwMFxuXHRcdHNpZ25hbDo1XG5cdFx0c3R5bGU6XCJkYXJrXCJcblx0XHRjbG9jazI0OmZhbHNlXG5cdFx0dHlwZTpcInN0YXR1c0JhclwiXG5cdH1cblx0dGFiQmFyIDoge1xuXHRcdHRhYnM6IFtdXG5cdFx0c3RhcnQ6MFxuXHRcdHR5ZXA6XCJ0YWJCYXJcIlxuXHRcdGJhY2tncm91bmRDb2xvcjpcIndoaXRlXCJcblx0XHRhY3RpdmVMYWJlbENvbG9yOlwiIzAwNzZGRlwiXG5cdFx0YWN0aXZlRmlsbENvbG9yOlwiIzAwNzZGRlwiXG5cdFx0aW5hY3RpdmVMYWJlbENvbG9yOlwiIzkyOTI5MlwiXG5cdFx0aW5hY3RpdmVGaWxsQ29sb3I6XCIjOTI5MjkyXCJcblx0fVxuXHR0YWIgOiB7XG5cdFx0bGFiZWw6IFwibGFiZWxcIlxuXHRcdGljb246XCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0XHRcdDxzdmcgd2lkdGg9JzI1cHgnIGhlaWdodD0nMjVweCcgdmlld0JveD0nMCAwIDI1IDI1JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnPlxuXHRcdFx0ICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy42LjEgKDI2MzEzKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHRcdCAgICA8dGl0bGU+MTwvdGl0bGU+XG5cdFx0XHQgICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0XHQgICAgPGRlZnM+PC9kZWZzPlxuXHRcdFx0ICAgIDxnIGlkPSdQYWdlLTEnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIGZpbGwtb3BhY2l0eT0nMSc+XG5cdFx0XHQgICAgICAgIDxnIGlkPSdCb3R0b20tQmFyL1RhYi1CYXInIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC0yNS4wMDAwMDAsIC03LjAwMDAwMCknIGZpbGw9JyMwMDc2RkYnPlxuXHRcdFx0ICAgICAgICAgICAgPGcgaWQ9J1BsYWNlaG9sZGVycycgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMjUuMDAwMDAwLCA3LjAwMDAwMCknPlxuXHRcdFx0ICAgICAgICAgICAgICAgIDxyZWN0IGlkPScxJyB4PScwJyB5PScwJyB3aWR0aD0nMjUnIGhlaWdodD0nMjUnIHJ4PSczJz48L3JlY3Q+XG5cdFx0XHQgICAgICAgICAgICA8L2c+XG5cdFx0XHQgICAgICAgIDwvZz5cblx0XHRcdCAgICA8L2c+XG5cdFx0XHQ8L3N2Zz5cIlxuXHRcdGFjdGl2ZTogdW5kZWZpbmVkXG5cdFx0dW5hY3RpdmU6IHVuZGVmaW5lZFxuXHRcdHRhYkJhcjogdW5kZWZpbmVkXG5cdFx0dHlwZTpcInRhYlwiXG5cdH1cblx0dGV4dDoge1xuXHRcdGRlZmF1bHRzOiB7XG5cdFx0XHR0ZXh0OiBcImlPUyBUZXh0IExheWVyXCJcblx0XHRcdHR5cGU6XCJ0ZXh0XCJcblx0XHRcdHg6MFxuXHRcdFx0eTowXG5cdFx0XHR3aWR0aDotMVxuXHRcdFx0aGVpZ2h0Oi0xXG5cdFx0XHRzdXBlckxheWVyOnVuZGVmaW5lZFxuXHRcdFx0c3R5bGU6XCJkZWZhdWx0XCJcblx0XHRcdGxpbmVzOjFcblx0XHRcdHRleHRBbGlnbjpcImxlZnRcIlxuXHRcdFx0YmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIlxuXHRcdFx0Y29sb3I6XCJibGFja1wiXG5cdFx0XHRmb250U2l6ZTogMTdcblx0XHRcdGZvbnRGYW1pbHk6XCItYXBwbGUtc3lzdGVtLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmXCJcblx0XHRcdGZvbnRXZWlnaHQ6XCJyZWd1bGFyXCJcblx0XHRcdGxpbmVIZWlnaHQ6XCJhdXRvXCJcblx0XHRcdG5hbWU6XCJ0ZXh0IGxheWVyXCJcblx0XHRcdG9wYWNpdHk6MVxuXHRcdFx0dGV4dFRyYW5zZm9ybTpcIm5vbmVcIlxuXHRcdFx0fSBcblx0fVxufVxuXG5zZXRQcm9wcyA9IChvYmplY3QsIGRlc3QpIC0+XG5cdGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpXG5cdGRlc3RbXCJwcm9wc1wiXSA9IGtleXNcblxuXG5zZXRQcm9wcyhkZWZhdWx0cy50ZXh0LmRlZmF1bHRzLCBkZWZhdWx0cy50ZXh0KVxuc2V0UHJvcHMoZGVmYXVsdHMuYWxlcnQudGV4dCwgZGVmYXVsdHMuYWxlcnQpXG5zZXRQcm9wcyhkZWZhdWx0cy5iYW5uZXIudGV4dCwgZGVmYXVsdHMuYmFubmVyKVxuc2V0UHJvcHMoZGVmYXVsdHMubG9ja1NjcmVlbiwgZGVmYXVsdHMubG9ja1NjcmVlbilcbnNldFByb3BzKGRlZmF1bHRzLnN0YXR1c0JhciwgZGVmYXVsdHMuc3RhdHVzQmFyKVxuc2V0UHJvcHMoZGVmYXVsdHMudGFiLCBkZWZhdWx0cy50YWIpXG5zZXRQcm9wcyhkZWZhdWx0cy50YWJCYXIsIGRlZmF1bHRzLnRhYkJhcilcbnNldFByb3BzKGRlZmF1bHRzLm5hdkJhciwgZGVmYXVsdHMubmF2QmFyKVxuc2V0UHJvcHMoZGVmYXVsdHMuYnV0dG9uLCBkZWZhdWx0cy5idXR0b24pXG5zZXRQcm9wcyhkZWZhdWx0cy5tZW51LCBkZWZhdWx0cy5tZW51KVxuXG5zZXR1cENvbXBvbmVudCA9IChjb21wb25lbnQsIGFycmF5KSAtPlxuXHRpZiBhcnJheSA9PSB1bmRlZmluZWRcblx0XHRhcnJheSA9IFtdXG5cdG9iaiA9IHt9XG5cdGZvciBpIGluIGRlZmF1bHRzW2NvbXBvbmVudF0ucHJvcHNcblx0XHRpZiBhcnJheVtpXSAhPSB1bmRlZmluZWRcblx0XHRcdG9ialtpXSA9IGFycmF5W2ldXG5cdFx0ZWxzZVxuXHRcdFx0b2JqW2ldID0gZGVmYXVsdHNbY29tcG9uZW50XVtpXVxuXHRyZXR1cm4gb2JqXG5cblxuIyMgQ29udmVyc2lvbnNcblxuI1BpeGVscyB0byBQb2ludHNcbmV4cG9ydHMucHQgPSAocHgpIC0+XG5cdHB0ID0gcHgvZXhwb3J0cy5zY2FsZVxuXHRwdCA9IE1hdGgucm91bmQocHQpXG5cdHJldHVybiBwdFxuXG4jUG9pbnRzIHRvIFBpeGVsc1xuZXhwb3J0cy5weCA9IChwdCkgLT5cblx0cHggPSBwdCAqIGV4cG9ydHMuc2NhbGVcblx0cHggPSBNYXRoLnJvdW5kKHB4KVxuXHRyZXR1cm4gcHhcblxuZXhwb3J0cy5zdmcgPSAoc3ZnKSAtPlxuXHQjIEZpbmQgU3RyaW5nXG5cdHN0YXJ0SW5kZXggPSBzdmcuc2VhcmNoKFwiPHN2ZyB3aWR0aD1cIikgXG5cdGVuZEluZGV4ID0gc3ZnLnNlYXJjaChcIiB2aWV3Qm94XCIpXG5cdHN0cmluZyA9IHN2Zy5zbGljZShzdGFydEluZGV4LCBlbmRJbmRleClcblxuXHQjRmluZCB3aWR0aFxuXHR3U3RhcnRJbmRleCA9IHN0cmluZy5zZWFyY2goXCI9XCIpICsgMlxuXHR3RW5kSW5kZXggPSAgc3RyaW5nLnNlYXJjaChcInB4XCIpXG5cdHdpZHRoID0gc3RyaW5nLnNsaWNlKHdTdGFydEluZGV4LCB3RW5kSW5kZXgpXG5cdG5ld1dpZHRoID0gZXhwb3J0cy5weCh3aWR0aClcblxuXHQjIEZpbmQgSGVpZ2h0XG5cdGhlaWdodFN0cmluZyA9IHN0cmluZy5zbGljZSh3RW5kSW5kZXggKyA0LCBzdHJpbmcubGVuZ3RoKVxuXHRoU3RhcnRJbmRleCA9IGhlaWdodFN0cmluZy5zZWFyY2goXCI9XCIpKyAyXG5cdGhFbmRJbmRleCA9IGhlaWdodFN0cmluZy5zZWFyY2goXCJweFwiKSBcblx0aGVpZ2h0ID0gaGVpZ2h0U3RyaW5nLnNsaWNlKGhTdGFydEluZGV4LCBoRW5kSW5kZXgpXG5cdG5ld0hlaWdodCA9IGV4cG9ydHMucHgoaGVpZ2h0KVxuXG5cdCNDcmVhdGUgbmV3IHN0cmluZ1xuXHRuZXdTdHJpbmcgPSBzdHJpbmcucmVwbGFjZSh3aWR0aCwgbmV3V2lkdGgpXG5cdG5ld1N0cmluZyA9IG5ld1N0cmluZy5yZXBsYWNlKGhlaWdodCwgbmV3SGVpZ2h0KVxuXG5cdCNSZXBsYWNlIHN0cmluZ3Ncblx0c3ZnID0gc3ZnLnJlcGxhY2Uoc3RyaW5nLCBuZXdTdHJpbmcpXG5cblx0cmV0dXJuIHtcblx0XHRzdmc6c3ZnXG5cdFx0d2lkdGg6bmV3V2lkdGhcblx0XHRoZWlnaHQ6bmV3SGVpZ2h0XG5cdH1cblxuZXhwb3J0cy5jaGFuZ2VGaWxsID0gKGxheWVyLCBjb2xvcikgLT5cblx0c3dpdGNoIGNvbG9yXG5cdFx0d2hlbiBcInJlZFwiXG5cdFx0XHRjb2xvciA9IFwiI0ZFMzgyNFwiXG5cdFx0d2hlbiBcImJsdWVcIlxuXHRcdFx0Y29sb3IgPSBcIiMwMDc2RkZcIlxuXHRcdHdoZW4gXCJwaW5rXCJcblx0XHRcdGNvbG9yID0gXCIjRkUyODUxXCJcblx0XHR3aGVuIFwiZ3JleVwiXG5cdFx0XHRjb2xvciA9IFwiIzkyOTI5MlwiXG5cdFx0d2hlbiBcImdyYXlcIlxuXHRcdFx0Y29sb3IgPSBcIiM5MjkyOTJcIlxuXHRcdHdoZW4gXCJibGFja1wiXG5cdFx0XHRjb2xvciA9IFwiIzAzMDMwM1wiXG5cdFx0d2hlbiBcIndoaXRlXCJcblx0XHRcdGNvbG9yID0gXCIjRUZFRkY0XCJcblx0XHR3aGVuIFwib3JhbmdlXCJcblx0XHRcdGNvbG9yID0gXCIjRkY5NjAwXCJcblx0XHR3aGVuIFwiZ3JlZW5cIlxuXHRcdFx0Y29sb3IgPSBcIiM0NERCNUVcIlxuXHRcdHdoZW4gXCJsaWdodC1ibHVlXCJcblx0XHRcdGNvbG9yID0gXCIjNTRDN0ZDXCJcblx0XHR3aGVuIFwieWVsbG93XCJcblx0XHRcdGNvbG9yID0gXCIjRkZDRDAwXCJcblxuXG5cdHN0YXJ0SW5kZXggPSBsYXllci5odG1sLnNlYXJjaChcImZpbGw9XFxcIiNcIilcblx0ZmlsbFN0cmluZyA9IGxheWVyLmh0bWwuc2xpY2Uoc3RhcnRJbmRleCwgbGF5ZXIuaHRtbC5sZW5ndGgpXG5cdGVuZEluZGV4ID0gZmlsbFN0cmluZy5zZWFyY2goXCJcXFwiPlwiKVxuXHRzdHJpbmcgPSBmaWxsU3RyaW5nLnNsaWNlKDAsIGVuZEluZGV4KVxuXHRuZXdTdHJpbmcgPSBcImZpbGw9XFxcIlwiICsgY29sb3Jcblx0bGF5ZXIuaHRtbCA9IGxheWVyLmh0bWwucmVwbGFjZShzdHJpbmcsIG5ld1N0cmluZylcblxuIyMgRXJyb3JzXG5cbmVycm9yID0gKGNvbnRleHQsIGNvZGUpIC0+XG5cdGlmIGNvZGUgPT0gMSBcblx0XHRwcmludCBcIkVycm9yIEludmFsaWQgUmVsYXRpb25zaGlwIOKAkyBMYXllciBpZDoje2NvbnRleHQuaWR9IGhhcyBhIHJlbGF0aW9uc2hpcCB3aXRoIGFub3RoZXIgbGF5ZXIgbm90IGluIHRoZSBzYW1lIHN1cGVyTGF5ZXIuXCJcblx0aWYgY29kZSA9PSAyXG5cdFx0cHJpbnQgXCJFcnJvciAje2NvbnRleHR9IHJlcXVpcmVzIGEgbGF5ZXJcIlxuXHRpZiBjb2RlID09IDNcblx0XHRwcmludCBcIkVycm9yICN7Y29udGV4dH0gY2Fubm90IHJlZmVyIHRvIGl0c2VsZlwiXG5cdGlmIGNvZGUgPT0gNFxuXHRcdHByaW50IFwiRXJyb3IgI3tjb250ZXh0fSBpcyBub3QgYSB2YWxpZCB3ZWlnaHQuIFBsZWFzZSB1c2UgMTAwLCAyMDAsIDMwMC4uLiBvciBUaGluLCBMaWdodCwgUmVndWxhci4uLlwiXG5cdGlmIGNvZGUgPT0gNVxuXHRcdHByaW50IFwiRXJyb3IgTGF5ZXIgaWQ6I3tjb250ZXh0fSBpcyBub3QgYSB2YWxpZCBUYWIgb2JqZWN0LiBQbGVhc2UgY3JlYXRlIGEgVGFiIHVzaW5nIG5ldyBtb2R1bGUuVGFiLlwiXG5cbiMjIEF1dG9MYXlvdXRcblxuI2NoZWNrcyBpZiB0d28gbGF5ZXJzIGhhdmUgdGhlIHNhbWUgcGFyZW50XG5leHBvcnRzLnNhbWVQYXJlbnQgPSAobGF5ZXIxLCBsYXllcjIpIC0+XG5cdHBhcmVudE9uZSA9IGxheWVyMS5zdXBlckxheWVyXG5cdHBhcmVudFR3byA9IGxheWVyMi5zdXBlckxheWVyXG5cdGlmIHBhcmVudE9uZSA9PSBwYXJlbnRUd29cblx0XHRyZXR1cm4gdHJ1ZVxuXHRlbHNlIFxuXHRcdHJldHVybiBmYWxzZVxuXG5leHBvcnRzLmdldFRpbWUgPSAtPlxuXHRkYXlzT2ZUaGVXZWVrID0gW1wiU3VuZGF5XCIsIFwiTW9uZGF5XCIsIFwiVHVlc2RheVwiLCBcIldlZG5lc2RheVwiLCBcIlRodXJzZGF5XCIsIFwiRnJpZGF5XCIsIFwiU2F0dXJkYXlcIl1cblx0bW9udGhzT2ZUaGVZZWFyID0gW1wiSmFudWFyeVwiLCBcIkZlYnJ1YXJ5XCIsIFwiTWFyY2hcIiwgXCJBcHJpbFwiLCBcIk1heVwiLCBcIkp1bmVcIiwgXCJKdWx5XCIsIFwiQXVndXN0XCIsIFwiU2VwdGVtYmVyXCIsIFwiT2N0b2JlclwiLCBcIk5vdmVtYmVyXCIsIFwiRGVjZW1iZXJcIl1cblx0ZGF0ZU9iaiA9IG5ldyBEYXRlKClcblx0bW9udGggPSBtb250aHNPZlRoZVllYXJbZGF0ZU9iai5nZXRNb250aCgpXVxuXHRkYXRlID0gZGF0ZU9iai5nZXREYXRlKClcblx0ZGF5ID0gZGF5c09mVGhlV2Vla1tkYXRlT2JqLmdldERheSgpXVxuXHRob3VycyA9IGRhdGVPYmouZ2V0SG91cnMoKVxuXHRtaW5zID0gZGF0ZU9iai5nZXRNaW51dGVzKClcblx0c2VjcyA9IGRhdGVPYmouZ2V0U2Vjb25kcygpXG5cdHJldHVybiB7XG5cdFx0bW9udGg6bW9udGhcblx0XHRkYXk6ZGF5XG5cdFx0ZGF0ZTpkYXRlXG5cdFx0aG91cnM6aG91cnNcblx0XHRtaW5zOm1pbnNcblx0XHRzZWNzOnNlY3Ncblx0fVxuXG4jUmVmcmVzaGVzIExheWVyIG9yIEFsbCBMYXllcnNcbmV4cG9ydHMubGF5b3V0ID0gKGxheWVyKSAtPlxuXHRpZiBsYXllciA9PSB1bmRlZmluZWRcblx0XHRALmFycmF5ID0gRnJhbWVyLkN1cnJlbnRDb250ZXh0LmxheWVyc1xuXHRlbHNlIFxuXHRcdEAuYXJyYXkgPSBbbGF5ZXJdXG5cdGZvciBsYXllciBpbiBALmFycmF5XG5cdFx0aWYgbGF5ZXIuY29uc3RyYWludHMgIT0gdW5kZWZpbmVkXG5cdFx0XHRmb3IgcCBpbiBkZWZhdWx0cy5jb25zdHJhaW50UHJvcHNcblx0XHRcdFx0bGF5b3V0U2l6ZShsYXllciwgcClcblx0XHRcdGZvciBjIGluIGRlZmF1bHRzLmNvbnN0cmFpbnRUeXBlc1xuXHRcdFx0XHRpZiBsYXllci5jb25zdHJhaW50c1tjXSAhPSB1bmRlZmluZWRcblx0XHRcdFx0XHRsYXlvdXRDaGFuZ2UobGF5ZXIsIGMpXG5cdFx0XHRmb3IgYSBpbiBkZWZhdWx0cy5jb25zdHJhaW50QWxpZ25zXG5cdFx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzW2FdXG5cdFx0XHRcdFx0bGF5b3V0QWxpZ24obGF5ZXIsIGEpXG5cbiNBbGlnbiBjb25zdHJhaW50c1xubGF5b3V0QWxpZ24gPSAobGF5ZXIsIHR5cGUpIC0+XG5cdCMgcHJpbnQgbGF5ZXIubmFtZSArIFwiOiBjb25zdHJhaW50cyB3aWR0aCBcIiArIGxheWVyLmNvbnN0cmFpbnRzLndpZHRoXG5cdGRlY2xhcmVkQ29uc3RyYWludCA9IGxheWVyLmNvbnN0cmFpbnRzW3R5cGVdXG5cdGlmIGxheWVyLnN1cGVyTGF5ZXJcblx0XHRAc3VwZXJMYXllciA9IGxheWVyLnN1cGVyTGF5ZXJcblx0ZWxzZVxuXHRcdEBzdXBlckxheWVyID0gc2NyZWVuXG5cdGlmIGRlY2xhcmVkQ29uc3RyYWludCA9PSBwYXJzZUludChkZWNsYXJlZENvbnN0cmFpbnQsIDEwKVxuXHRcdGVycm9yKHR5cGUsIDIpXG5cdGlmIGRlY2xhcmVkQ29uc3RyYWludCA9PSBsYXllclxuXHRcdGVycm9yKHR5cGUsIDMpXG5cdGlmIHR5cGVvZiBkZWNsYXJlZENvbnN0cmFpbnQgPT0gXCJvYmplY3RcIlxuXHRcdGZvciBpIGluIGRlY2xhcmVkQ29uc3RyYWludFxuXHRcdFx0aWYgdHlwZW9mIGkgPT0gXCJzdHJpbmdcIlxuXHRcdFx0XHRAdHlwZSA9IGlcblx0XHRcdGlmIHR5cGVvZiBpID09IFwib2JqZWN0XCJcblx0XHRcdFx0QGxheWVyID0gaSBcblx0XHRpZiBAdHlwZSA9PSBcImhvcml6b250YWxDZW50ZXJcIiB8fCBAdHlwZSA9PSBcImhvcml6b250YWxcIlxuXHRcdFx0ZGVsdGFNb3ZlID0gKEBsYXllci53aWR0aCAtIGxheWVyLndpZHRoKSAvIDJcblx0XHRcdGxheWVyLnggPSBAbGF5ZXIueCArIGRlbHRhTW92ZVxuXHRcdFx0bGF5ZXIuY29uc3RyYWludHNbXCJsZWFkaW5nXCJdID0gZXhwb3J0cy5wdChsYXllci54KVxuXHRcdGlmIEB0eXBlID09IFwidmVydGljYWxDZW50ZXJcIiB8fCBAdHlwZSA9PSBcInZlcnRpY2FsXCIgIFxuXHRcdFx0ZGVsdGFNb3ZlID0gKEBsYXllci5oZWlnaHQgLSBsYXllci5oZWlnaHQpIC8gMlxuXHRcdFx0bGF5ZXIueSA9IEBsYXllci55ICsgZGVsdGFNb3ZlXG5cdFx0XHRsYXllci5jb25zdHJhaW50c1tcInRvcFwiXSA9IGV4cG9ydHMucHQobGF5ZXIueSlcblx0XHRpZiBAdHlwZSA9PSBcImxlYWRpbmdFZGdlc1wiIHx8IEB0eXBlID09IFwibGVhZGluZ1wiXG5cdFx0XHRsYXllci54ID0gQGxheWVyLnhcblx0XHRcdGxheWVyLmNvbnN0cmFpbnRzW1wibGVhZGluZ1wiXSA9IGV4cG9ydHMucHQobGF5ZXIueClcblx0XHRpZiBAdHlwZSA9PSBcInRyYWlsaW5nRWRnZXNcIiB8fCBAdHlwZSA9PSBcInRyYWlsaW5nXCJcblx0XHRcdGxheWVyLm1heFggPSBAbGF5ZXIubWF4WFxuXHRcdFx0bGF5ZXIuY29uc3RyYWludHNbXCJ0cmFpbGluZ1wiXSA9IGV4cG9ydHMucHQoQHN1cGVyTGF5ZXIud2lkdGggLSBsYXllci5tYXhYKVxuXHRcdGlmIEB0eXBlID09IFwidG9wRWRnZXNcIiB8fCBAdHlwZSA9PSBcInRvcFwiXG5cdFx0XHRsYXllci55ID0gQGxheWVyLnlcblx0XHRcdGxheWVyLmNvbnN0cmFpbnRzW1widG9wXCJdID0gZXhwb3J0cy5wdChsYXllci55KVxuXHRcdGlmIEB0eXBlID09IFwiYm90dG9tRWRnZXNcIiB8fCBAdHlwZSA9PSBcImJvdHRvbVwiXG5cdFx0XHRsYXllci5tYXhZID0gQGxheWVyLm1heFlcblx0XHRcdGxheWVyLmNvbnN0cmFpbnRzW1wiYm90dG9tXCJdID0gZXhwb3J0cy5wdChAc3VwZXJMYXllci5oZWlnaHQgLSBsYXllci5tYXhZKVxuXHRpZiB0eXBlID09IFwiaG9yaXpvbnRhbENlbnRlclwiIHx8IHR5cGUgPT0gXCJob3Jpem9udGFsXCJcblx0XHRkZWx0YU1vdmUgPSAoZGVjbGFyZWRDb25zdHJhaW50LndpZHRoIC0gbGF5ZXIud2lkdGgpIC8gMlxuXHRcdGxheWVyLnggPSBkZWNsYXJlZENvbnN0cmFpbnQueCArIGRlbHRhTW92ZVxuXHRpZiB0eXBlID09IFwidmVydGljYWxDZW50ZXJcIiB8fCB0eXBlID09IFwidmVydGljYWxcIiAgXG5cdFx0ZGVsdGFNb3ZlID0gKGRlY2xhcmVkQ29uc3RyYWludC5oZWlnaHQgLSBsYXllci5oZWlnaHQpIC8gMlxuXHRcdGxheWVyLnkgPSBkZWNsYXJlZENvbnN0cmFpbnQueSArIGRlbHRhTW92ZVxuXHRpZiB0eXBlID09IFwibGVhZGluZ0VkZ2VzXCIgXG5cdFx0bGF5ZXIueCA9IGRlY2xhcmVkQ29uc3RyYWludC54XG5cdFx0bGF5ZXIuY29uc3RyYWludHNbXCJsZWFkaW5nXCJdID0gZXhwb3J0cy5wdChkZWNsYXJlZENvbnN0cmFpbnQueClcblx0aWYgdHlwZSA9PSBcInRyYWlsaW5nRWRnZXNcIlxuXHRcdGxheWVyLm1heFggPSBkZWNsYXJlZENvbnN0cmFpbnQubWF4WFxuXHRcdGxheWVyLmNvbnN0cmFpbnRzW1widHJhaWxpbmdcIl0gPSBleHBvcnRzLnB0KEBzdXBlckxheWVyLmhlaWdodCAtIGxheWVyLm1heFgpXG5cdGlmIHR5cGUgPT0gXCJ0b3BFZGdlc1wiXG5cdFx0bGF5ZXIueSA9IGRlY2xhcmVkQ29uc3RyYWludC55XG5cdFx0bGF5ZXIuY29uc3RyYWludHNbXCJ0b3BcIl0gPSBleHBvcnRzLnB0KGxheWVyLnkpXG5cdGlmIHR5cGUgPT0gXCJib3R0b21FZGdlc1wiXG5cdFx0bGF5ZXIubWF4WSA9IGRlY2xhcmVkQ29uc3RyYWludC5tYXhZXG5cdFx0bGF5ZXIuY29uc3RyYWludHNbXCJib3R0b21cIl0gPSBleHBvcnRzLnB0KEBzdXBlckxheWVyLmhlaWdodCAtIGxheWVyLm1heFkpXG5cdGlmIHR5cGUgPT0gXCJhbGlnblwiXG5cdFx0aWYgZGVjbGFyZWRDb25zdHJhaW50ID09IFwiaG9yaXpvbnRhbFwiXG5cdFx0XHRsYXllci5jZW50ZXJYKClcblx0XHRpZiBkZWNsYXJlZENvbnN0cmFpbnQgPT0gXCJ2ZXJ0aWNhbFwiXG5cdFx0XHRsYXllci5jZW50ZXJZKClcblx0XHRpZiBkZWNsYXJlZENvbnN0cmFpbnQgPT0gXCJjZW50ZXJcIlxuXHRcdFx0bGF5ZXIuY2VudGVyKClcblx0XHRpZiBkZWNsYXJlZENvbnN0cmFpbnQgPT0gXCJ2ZXJ0aWNhbFwiXG5cdFx0XHRsYXllci5jZW50ZXJZKClcblxuXG4jU2l6ZSBDb25zdHJhaW50c1xubGF5b3V0U2l6ZSA9IChsYXllciwgdHlwZSkgLT5cblx0aWYgbGF5ZXIuY29uc3RyYWludHNbdHlwZV1cblx0XHRsYXllclt0eXBlXSA9IGV4cG9ydHMucHgobGF5ZXIuY29uc3RyYWludHNbdHlwZV0pXG5cdFx0aWYgbGF5ZXIudHlwZSA9PSBcInRleHRcIlxuXHRcdFx0dGV4dEZyYW1lID0gdGV4dEF1dG9TaXplKGxheWVyKVxuXHRcdFx0bGF5ZXIud2lkdGggPSB0ZXh0RnJhbWUud2lkdGhcblx0XHRcdGxheWVyLmhlaWdodCA9IHRleHRGcmFtZS5oZWlnaHRcblxuXG4jTW92ZSAmIFJlc2l6ZXMgTGF5ZXJzXG5sYXlvdXRDaGFuZ2UgPSAobGF5ZXIsIHR5cGUpIC0+XG5cdGlmIGxheWVyLmNvbnN0cmFpbnRzW3R5cGVdICE9IHVuZGVmaW5lZCBcblx0XHRwcm9wID0gZGVmYXVsdHMuY29uc3RyYWludHNbdHlwZV0ucHJvcFxuXHRcdG9ialByb3AgPSBkZWZhdWx0cy5jb25zdHJhaW50c1t0eXBlXS5vYmpQcm9wXG5cdFx0b3BwID0gZGVmYXVsdHMuY29uc3RyYWludHNbdHlwZV0ub3BwXG5cdFx0c3VwZXJUcmFpdCA9IGRlZmF1bHRzLmNvbnN0cmFpbnRzW3R5cGVdLm9ialByb3BcblxuXHRcdGlmIG9ialByb3AgIT0gXCJ3aWR0aFwiICYmIG9ialByb3AgIT0gXCJoZWlnaHRcIlxuXHRcdFx0c3VwZXJUcmFpdCA9IGRlZmF1bHRzLmNvbnN0cmFpbnRzW3R5cGVdLm9ialByb3AyXG5cblx0XHRpZiBsYXllci5zdXBlckxheWVyICE9IG51bGxcblx0XHRcdCNIYXMgYSBzdXBlckxheWVyXG5cdFx0XHRAW3N1cGVyVHJhaXRdID0gbGF5ZXIuc3VwZXJMYXllcltzdXBlclRyYWl0XVxuXHRcdGVsc2Vcblx0XHRcdCNEb2VzIG5vdCBoYXZlIGEgc3VwZXJMYXllclxuXHRcdFx0QFtzdXBlclRyYWl0XSA9IGV4cG9ydHNbc3VwZXJUcmFpdF1cblx0XHRpZiB0eXBlID09IFwidG9wXCIgfHwgdHlwZSA9PSBcImxlYWRpbmdcIlxuXHRcdFx0IyBIYW5kbGUgVG9wICYgTGVhZGluZ1xuXHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHNbdHlwZV0gPT0gcGFyc2VJbnQobGF5ZXIuY29uc3RyYWludHNbdHlwZV0sIDEwKVxuXHRcdFx0XHRsYXllcltwcm9wXSA9IGxheWVyLmNvbnN0cmFpbnRzW3R5cGVdICogZXhwb3J0cy5zY2FsZVxuXHRcdFx0ZWxzZSBcblx0XHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHNbdHlwZV0ubGVuZ3RoID09IHVuZGVmaW5lZFxuXHRcdFx0XHRcdGxheWVyW3Byb3BdID0gbGF5ZXIuY29uc3RyYWludHNbdHlwZV1bb2JqUHJvcF1cblx0XHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHNbdHlwZV0ubGVuZ3RoID09IDFcblx0XHRcdFx0XHRpZiBsYXllci5jb25zdHJhaW50c1t0eXBlXVswXSA9PSBwYXJzZUludChsYXllci5jb25zdHJhaW50c1t0eXBlXVswXSwgMTApXG5cdFx0XHRcdFx0XHRsYXllcltwcm9wXSA9IGxheWVyLmNvbnN0cmFpbnRzW3R5cGVdWzBdICogZXhwb3J0cy5zY2FsZVxuXHRcdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRcdGxheWVyW3Byb3BdID0gbGF5ZXIuY29uc3RyYWludHNbdHlwZV1bMF1bb2JqUHJvcF1cblx0XHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHNbdHlwZV0ubGVuZ3RoID4gMSBcblx0XHRcdFx0XHRmb3Igb2JqZWN0IGluIGxheWVyLmNvbnN0cmFpbnRzW3R5cGVdXG5cdFx0XHRcdFx0XHRpZiBvYmplY3QgPT0gcGFyc2VJbnQob2JqZWN0LCAxMClcblx0XHRcdFx0XHRcdFx0QC5vYmpJbnQgPSBvYmplY3Rcblx0XHRcdFx0XHRcdGVsc2UgXG5cdFx0XHRcdFx0XHRcdEAub2JqTGF5ZXIgPSBvYmplY3Rcblx0XHRcdFx0XHRsYXllcltwcm9wXSA9IChALm9iakludCAqIGV4cG9ydHMuc2NhbGUpICsgQC5vYmpMYXllcltvYmpQcm9wXVxuXHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHNbb3BwXSAhPSB1bmRlZmluZWRcblx0XHRcdFx0dHJhaXQgPSBkZWZhdWx0cy5jb25zdHJhaW50c1tvcHBdW1wib2JqUHJvcFwiXVxuXHRcdFx0XHRpZiBsYXllci5jb25zdHJhaW50c1tvcHBdID09IHBhcnNlSW50KGxheWVyLmNvbnN0cmFpbnRzW29wcF0sIDEwKVxuXHRcdFx0XHRcdGxheWVyW3RyYWl0XSA9IEBbc3VwZXJUcmFpdF0gLSAobGF5ZXJbcHJvcF0gKyAoZXhwb3J0cy5zY2FsZSAqIGxheWVyLmNvbnN0cmFpbnRzW29wcF0pKVxuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHNbb3BwXS5sZW5ndGggPT0gdW5kZWZpbmVkXG5cdFx0XHRcdFx0XHRsYXllclt0cmFpdF0gPSBsYXllcltwcm9wXSAtIGxheWVyLmNvbnN0cmFpbnRzW29wcF1bcHJvcF1cblx0XHRcdFx0XHRcdGlmIGxheWVyW3RyYWl0XSA8IDBcblx0XHRcdFx0XHRcdFx0bGF5ZXJbdHJhaXRdID0gbGF5ZXJbdHJhaXRdICogLTFcblx0XHRlbHNlXG5cdFx0XHQjIyBIYW5kbGUgQm90dG9tICYgVHJhaWxpbmdcblx0XHRcdG9ialByb3AyID0gZGVmYXVsdHMuY29uc3RyYWludHNbdHlwZV0ub2JqUHJvcDJcblx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzW29wcF0gPT0gdW5kZWZpbmVkXG5cdFx0XHRcdCMjIE5vIG9wcG9zaXRlXG5cdFx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzW3R5cGVdID09IHBhcnNlSW50KGxheWVyLmNvbnN0cmFpbnRzW3R5cGVdLCAxMClcblx0XHRcdFx0XHQjIyBPbmx5IEludGVnZXJcblx0XHRcdFx0XHRsYXllcltwcm9wXSA9IEBbc3VwZXJUcmFpdF0gLSAobGF5ZXIuY29uc3RyYWludHNbdHlwZV0gKiBleHBvcnRzLnNjYWxlKVxuXHRcdFx0XHRlbHNlIFxuXHRcdFx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzW3R5cGVdLmxlbmd0aCA9PSB1bmRlZmluZWRcblx0XHRcdFx0XHRcdCNFbnRlcmVkIExheWVyXG5cdFx0XHRcdFx0XHRpZiBleHBvcnRzLnNhbWVQYXJlbnQobGF5ZXIsIGxheWVyLmNvbnN0cmFpbnRzW3R5cGVdKVxuXHRcdFx0XHRcdFx0XHRsYXllcltwcm9wXSA9IGxheWVyLmNvbnN0cmFpbnRzW3R5cGVdW29ialByb3AyXVxuXHRcdFx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdFx0XHRlcnJvcihsYXllciwgMSlcblx0XHRcdFx0XHRpZiBsYXllci5jb25zdHJhaW50c1t0eXBlXS5sZW5ndGggPT0gMVxuXHRcdFx0XHRcdFx0I0FycmF5IG9mIE9uZVxuXHRcdFx0XHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHNbdHlwZV1bMF0gPT0gcGFyc2VJbnQobGF5ZXIuY29uc3RyYWludHNbdHlwZV1bMF0sIDEwKVxuXHRcdFx0XHRcdFx0XHQjSW50XG5cdFx0XHRcdFx0XHRcdGxheWVyW3Byb3BdID0gQFtvYmpQcm9wXSAtIChsYXllci5jb25zdHJhaW50c1t0eXBlXVswXSAqIGV4cG9ydHMuc2NhbGUpXG5cdFx0XHRcdFx0XHRlbHNlIFxuXHRcdFx0XHRcdFx0XHQjT2JqZWN0XG5cdFx0XHRcdFx0XHRcdGlmIGV4cG9ydHMuc2FtZVBhcmVudChsYXllciwgbGF5ZXIuY29uc3RyYWludHNbdHlwZV1bMF0pXG5cdFx0XHRcdFx0XHRcdFx0bGF5ZXJbcHJvcF0gPSBsYXllci5jb25zdHJhaW50c1t0eXBlXVswXVtvYmpQcm9wMl1cblx0XHRcdFx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdFx0XHRcdGVycm9yKGxheWVyLCAxKVxuXHRcdFx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzW3R5cGVdLmxlbmd0aCA+IDFcdFxuXHRcdFx0XHRcdFx0I1JlbGF0aW9uc2hpcCBBcnJheVxuXHRcdFx0XHRcdFx0Zm9yIG9iamVjdCBpbiBsYXllci5jb25zdHJhaW50c1t0eXBlXVxuXHRcdFx0XHRcdFx0XHRpZiBvYmplY3QgPT0gcGFyc2VJbnQob2JqZWN0LCAxMClcblx0XHRcdFx0XHRcdFx0XHRALm9iakludCA9IG9iamVjdFxuXHRcdFx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHRcdFx0QC5vYmpMYXllciA9IG9iamVjdFxuXHRcdFx0XHRcdFx0XHRsYXllcltwcm9wXSA9IEAub2JqTGF5ZXJbb2JqUHJvcDJdIC0gZXhwb3J0cy5zY2FsZSAqIEAub2JqSW50XG5cblxuI1RleHQgTGF5ZXJzXG5leHBvcnRzLnN0eWxlcyA9IHt9XG5cbiMjIEN1c3RvbSBTdHlsZXNcblxuZXhwb3J0cy5hZGRTdHlsZSA9IChhcnJheSkgLT5cblx0a2V5ID0gT2JqZWN0LmtleXMoYXJyYXkpWzBdXG5cdGV4cG9ydHMuc3R5bGVzW2tleV0gPSBhcnJheVtrZXldXG5cbmV4cG9ydHMuYXBwbHkgPSAobGF5ZXIsIHN0eWxlKSAtPlxuXHRzdHlsZSA9IGV4cG9ydHMuc3R5bGVzW3N0eWxlXVxuXHRwcm9wcyA9IE9iamVjdC5rZXlzKHN0eWxlKVxuXHRmcmFtZXJQcm9wcyA9IFtcIm5hbWVcIiwgXCJ3aWR0aFwiLCBcImhlaWdodFwiLCBcInN1cGVyTGF5ZXJcIiwgXCJvcGFjaXR5XCIsIFwiY29sb3JcIiwgXCJiYWNrZ3JvdW5kQ29sb3JcIiwgXCJ4XCIsIFwieVwiLCBcIm1pZFhcIiwgXCJtaWRZXCIsIFwibWF4WFwiLCBcIm1pblhcIiwgXCJ2aXNpYmxlXCIsIFwiY2xpcFwiLCBcInNjcm9sbEhvcml6b250YWxcIiwgXCJzY3JvbGxWZXJ0aWNhbFwiLCBcImlnbm9yZUV2ZW50c1wiLCBcInpcIiwgXCJzY2FsZVhcIiwgXCJzY2FsZVlcIiwgXCJzY2FsZVpcIiwgXCJzY2FsZVwiLCBcInNrZXdYXCIsIFwic2tld1lcIiwgXCJza2V3XCIsIFwib3JpZ2luWFwiLCBcIm9yaWdpbllcIiwgXCJvcmlnaW5aXCIsIFwicGVyc3BlY3RpdmVcIiwgXCJwZXJzcGVjdGl2ZU9yaWdpblhcIiwgXCJwZXJzcGVjdGl2ZU9yaWdpbllcIiwgXCJyb3RhdGlvblhcIiwgXCJyb3RhdGlvbllcIiwgXCJyb3RhdGlvblpcIiwgXCJyb3RhdGlvblwiLCBcImJsdXJcIiwgXCJicmlnaHRuZXNzXCIsIFwic2F0dXJhdGVcIiwgXCJodWVSb3RhdGVcIiwgXCJjb250cmFzdFwiLCBcImludmVydFwiLCBcImdyYXlzY2FsZVwiLCBcInNlcGlhXCIsIFwic2hhZG93WFwiLCBcInNoYWRvd1lcIiwgXCJzaGFkb3dCbHVyXCIsIFwic2hhZG93U3ByZWFkXCIsIFwic2hhZG93Q29sb3JcIiwgXCJib3JkZXJDb2xvclwiLCBcImJvcmRlcldpZHRoXCIsIFwiZm9yY2UyZFwiLCBcImZsYXRcIiwgXCJiYWNrZmFjZVZpc2libGVcIiwgXCJuYW1lXCIsIFwibWF0cml4XCIsIFwiX21hdHJpeDJkXCIsIFwidHJhbnNmb3JtTWF0cml4XCIsIFwibWF0cml4M2RcIiwgXCJib3JkZXJSYWRpdXNcIiwgXCJwb2ludFwiLCBcInNpemVcIiwgXCJmcmFtZVwiLCBcImh0bWxcIiwgXCJpbWFnZVwiLCBcInNjcm9sbFhcIiwgXCJzY3JvbGxZXCIsIFwiX2RvbUV2ZW50TWFuYWdlclwiLCBcIm1vdXNlV2hlZWxTcGVlZE11bHRpcGxpZXJcIiwgXCJ2ZWxvY2l0eVRocmVzaG9sZFwiLCBcImFuaW1hdGlvbk9wdGlvbnNcIiwgXCJjb25zdHJhaW5lZFwiXVxuXHRjc3NQcm9wcyA9IFtcImZvbnRGYW1pbHlcIiwgXCJmb250U2l6ZVwiLCBcInRleHRBbGlnblwiLCBcImZvbnRXZWlnaHRcIiwgXCJsaW5lSGVpZ2h0XCIsIFwidGV4dFRyYW5zZm9ybVwiXVxuXHRmb3IgcCBpbiBwcm9wc1xuXHRcdGlmIGZyYW1lclByb3BzLmluZGV4T2YocCkgIT0gLTEgXG5cdFx0XHRpZiBzdHlsZVtwXSA9PSBwYXJzZUludChzdHlsZVtwXSwgMTApXG5cdFx0XHRcdGxheWVyW3BdID0gZXhwb3J0cy5weChzdHlsZVtwXSlcblx0XHRcdGVsc2UgXG5cdFx0XHRcdGxheWVyW3BdID0gc3R5bGVbcF1cblx0XHRpZiBjc3NQcm9wcy5pbmRleE9mKHApICE9IC0xIFxuXHRcdFx0aWYgcCA9PSBcImZvbnRTaXplXCJcblx0XHRcdFx0bGF5ZXIuc3R5bGVbXCJmb250LXNpemVcIl0gPSBleHBvcnRzLnB4KHN0eWxlW3BdKSArIFwicHhcIlxuXHRcdFx0aWYgcCA9PSBcImZvbnRGYW1pbHlcIlxuXHRcdFx0XHRsYXllci5zdHlsZVtcImZvbnQtZmFtaWx5XCJdID0gc3R5bGVbcF1cblx0XHRcdGlmIHAgPT0gXCJ0ZXh0QWxpZ25cIlxuXHRcdFx0XHRsYXllci5zdHlsZVtcInRleHQtYWxpZ25cIl0gPSBzdHlsZVtwXVxuXHRcdFx0aWYgcCA9PSBcInRleHRUcmFuc2Zvcm1cIlxuXHRcdFx0XHRsYXllci5zdHlsZVtcInRleHQtdHJhbnNmb3JtXCJdID0gc3R5bGVbcF1cblx0XHRcdGlmIHAgPT0gXCJmb250V2VpZ2h0XCJcblx0XHRcdFx0aWYgc3R5bGVbcF0gPT0gcGFyc2VJbnQoc3R5bGVbcF0sIDEwKVxuXHRcdFx0XHRcdGxheWVyLnN0eWxlW1wiZm9udC13ZWlnaHRcIl0gPSBzdHlsZVtwXVxuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0c3dpdGNoIHN0eWxlW3BdXG5cdFx0XHRcdFx0XHR3aGVuIFwidWx0cmF0aGluXCIgdGhlbiBsYXllci5zdHlsZVtcImZvbnQtd2VpZ2h0XCJdID0gMTAwXG5cdFx0XHRcdFx0XHR3aGVuIFwidGhpblwiIHRoZW4gbGF5ZXIuc3R5bGVbXCJmb250LXdlaWdodFwiXSA9IDIwMFxuXHRcdFx0XHRcdFx0d2hlbiBcImxpZ2h0XCIgdGhlbiBsYXllci5zdHlsZVtcImZvbnQtd2VpZ2h0XCJdID0gMzAwXG5cdFx0XHRcdFx0XHR3aGVuIFwicmVndWxhclwiIHRoZW4gbGF5ZXIuc3R5bGVbXCJmb250LXdlaWdodFwiXSA9IDQwMFxuXHRcdFx0XHRcdFx0d2hlbiBcIm1lZGl1bVwiIHRoZW4gbGF5ZXIuc3R5bGVbXCJmb250LXdlaWdodFwiXSA9IDUwMFxuXHRcdFx0XHRcdFx0d2hlbiBcInNlbWlib2xkXCIgdGhlbiBsYXllci5zdHlsZVtcImZvbnQtd2VpZ2h0XCJdID0gNjAwXG5cdFx0XHRcdFx0XHR3aGVuIFwiYm9sZFwiIHRoZW4gbGF5ZXIuc3R5bGVbXCJmb250LXdlaWdodFwiXSA9IDcwMFxuXHRcdFx0XHRcdFx0d2hlbiBcImJsYWNrXCIgdGhlbiBsYXllci5zdHlsZVtcImZvbnQtd2VpZ2h0XCJdID0gODAwXG5cdFx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHRcdGVycm9yKHAsIDQpXG5cdFx0XHRpZiBwID09IFwibGluZUhlaWdodFwiXG5cdFx0XHRcdGlmIHN0eWxlW3BdID09IFwiYXV0b1wiXG5cdFx0XHRcdFx0bGF5ZXIuc3R5bGVbXCJsaW5lLWhlaWdodFwiXSA9IGV4cG9ydHMucHgoc3R5bGVbXCJmb250U2l6ZVwiXSkgKiAxLjIgKyBcInB4XCJcblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdGxheWVyLnN0eWxlW1wibGluZS1oZWlnaHRcIl0gPSBleHBvcnRzLnB4KHN0eWxlW3BdKSArIFwicHhcIlxuXG5leHBvcnRzLmJnQmx1ciA9IChsYXllcikgLT5cblx0bGF5ZXIuc3R5bGVbXCItd2Via2l0LWJhY2tkcm9wLWZpbHRlclwiXSA9IFwiYmx1cigje2V4cG9ydHMucHgoNSl9cHgpXCJcblx0cmV0dXJuIGxheWVyIFxuXG5leHBvcnRzLkN1c3RvbSA9IChzdHlsZSwgYXJyYXkpIC0+XG5cdGxheWVyID0gbmV3IExheWVyIFxuXHRpc1N0eWxlVmFsaWQgPSBleHBvcnRzLnN0eWxlc1tzdHlsZV1cblx0aWYgaXNTdHlsZVZhbGlkID09IHVuZGVmaW5lZFxuXHRcdGlmIGFycmF5ICE9IHVuZGVmaW5lZFxuXHRcdFx0ZXhwb3J0cy5hZGRTdHlsZVxuXHRcdFx0XHRcIiN7c3R5bGV9XCIgOlxuXHRcdFx0XHRcdGFycmF5XG5cdFx0ZWxzZVxuXHRcdFx0ZXhwb3J0cy5hZGRTdHlsZVxuXHRcdFx0XHRcIiN7c3R5bGV9XCIgOlxuXHRcdFx0XHRcdHdpZHRoIDogMTAwXG5cdGV4cG9ydHMuYXBwbHkobGF5ZXIsIHN0eWxlKVxuXHRpZiBhcnJheSAhPSB1bmRlZmluZWQgJiYgaXNTdHlsZVZhbGlkICE9IHVuZGVmaW5lZFxuXHRcdHN0eWxlTnVtID0gXCJjb3B5XCJcblx0XHRuZXdTdHlsZU5hbWUgPSBzdHlsZSArIFwiIFwiICsgc3R5bGVOdW1cblx0XHRleHBvcnRzLmFkZFN0eWxlXG5cdFx0XHRcIiN7bmV3U3R5bGVOYW1lfVwiIDogXG5cdFx0XHRcdGFycmF5XG5cdFx0ZXhwb3J0cy5hcHBseShsYXllciwgbmV3U3R5bGVOYW1lKVxuXHRyZXR1cm4gbGF5ZXIgXG5cbm1ha2VTdHlsZUNoYW5nZSA9IChsYXllciwgc3R5bGUsIGNoYW5nZSkgLT5cblx0aWYgZGVmYXVsdHMuY3NzUHJvcHMuaW5kZXhPZihzdHlsZSkgIT0gLTFcblx0XHRpZiBzdHlsZSA9PSBcImZvbnRTaXplXCJcblx0XHRcdGxheWVyLnN0eWxlW1wiZm9udC1zaXplXCJdID0gZXhwb3J0cy5weChjaGFuZ2UpICsgXCJweFwiXG5cdGlmIGRlZmF1bHRzLmZyYW1lclByb3BzLmluZGV4T2Yoc3R5bGUpICE9IC0xXG5cdFx0bGF5ZXJbc3R5bGVdID0gY2hhbmdlXG4gXG5cbnRleHRBdXRvU2l6ZSA9ICh0ZXh0TGF5ZXIpIC0+XG5cdCNEZWZpbmUgV2lkdGhcblx0Y29uc3RyYWludHMgPSB7fVxuXHRpZiB0ZXh0TGF5ZXIuY29uc3RyYWludHMgXG5cdFx0aWYgdGV4dExheWVyLmNvbnN0cmFpbnRzLmhlaWdodFxuXHRcdFx0Y29uc3RyYWludHMuaGVpZ2h0ID0gZXhwb3J0cy5weCh0ZXh0TGF5ZXIuY29uc3RyYWludHMuaGVpZ2h0KVxuXHRcdGlmIHRleHRMYXllci5jb25zdHJhaW50cy53aWR0aFxuXHRcdFx0Y29uc3RyYWludHMud2lkdGggPSBleHBvcnRzLnB4KHRleHRMYXllci5jb25zdHJhaW50cy53aWR0aClcblx0c3R5bGVzID1cblx0XHRmb250U2l6ZTogdGV4dExheWVyLnN0eWxlW1wiZm9udC1zaXplXCJdXG5cdFx0Zm9udEZhbWlseTogdGV4dExheWVyLnN0eWxlW1wiZm9udC1mYW1pbHlcIl1cblx0XHRmb250V2VpZ2h0OiB0ZXh0TGF5ZXIuc3R5bGVbXCJmb250LXdlaWdodFwiXVxuXHRcdGxpbmVIZWlnaHQ6IHRleHRMYXllci5zdHlsZVtcImxpbmUtaGVpZ2h0XCJdXG5cdFx0bGV0dGVyU3BhY2luZzogdGV4dExheWVyLnN0eWxlW1wibGV0dGVyLXNwYWNpbmdcIl1cblx0XHR0ZXh0VHJhbnNmb3JtOiB0ZXh0TGF5ZXIuc3R5bGVbXCJ0ZXh0LXRyYW5zZm9ybVwiXVxuXHR0ZXh0V2lkdGggPSBVdGlscy50ZXh0U2l6ZSB0ZXh0TGF5ZXIuaHRtbCwgc3R5bGVzLCBjb25zdHJhaW50c1xuXHRyZXR1cm4ge1xuXHRcdHdpZHRoIDogdGV4dFdpZHRoLndpZHRoXG5cdFx0aGVpZ2h0OiB0ZXh0V2lkdGguaGVpZ2h0XG5cdH1cblxuZXhwb3J0cy5UZXh0ID0gKGFycmF5KSAtPlxuXHRpZiBhcnJheSA9PSB1bmRlZmluZWRcblx0XHRhcnJheSA9IFtdXG5cdGV4Y2VwdGlvbnMgPSBPYmplY3Qua2V5cyhhcnJheSlcblx0c3R5bGVBcnJheSA9IHt9XG5cdGZvciBpIGluIGRlZmF1bHRzLnRleHQucHJvcHNcblx0XHRpZiBhcnJheVtpXSAhPSB1bmRlZmluZWRcblx0XHRcdEBbaV0gPSBhcnJheVtpXVxuXHRcdGVsc2Vcblx0XHRcdEBbaV0gPSBkZWZhdWx0cy50ZXh0LmRlZmF1bHRzW2ldXG5cdFx0aWYgaSAhPSBcInN0eWxlXCJcblx0XHRcdHN0eWxlQXJyYXlbaV0gPSBAW2ldXG5cdHRleHRMYXllciA9IG5ldyBMYXllclxuXHR0ZXh0TGF5ZXIudHlwZSA9IFwidGV4dFwiXG5cdHRleHRMYXllci5odG1sID0gQHRleHRcblx0dGV4dFN0eWxlID0gXG5cdFx0XCIje0Auc3R5bGV9XCIgOiBcblx0XHRcdHN0eWxlQXJyYXlcblx0aWYgZXhwb3J0cy5zdHlsZXNbQC5zdHlsZV0gPT0gdW5kZWZpbmVkXG5cdFx0ZXhwb3J0cy5hZGRTdHlsZSB0ZXh0U3R5bGVcblx0XHRleHBvcnRzLmFwcGx5KHRleHRMYXllciwgQHN0eWxlKVxuXHRlbHNlXG5cdFx0ZXhwb3J0cy5hcHBseSh0ZXh0TGF5ZXIsIEBzdHlsZSlcblx0XHRmb3IgY2hhbmdlIGluIGV4Y2VwdGlvbnNcblx0XHRcdGlmIGNoYW5nZSAhPSBcInN0eWxlXCJcblx0XHRcdFx0bWFrZVN0eWxlQ2hhbmdlKHRleHRMYXllciwgY2hhbmdlLCBhcnJheVtjaGFuZ2VdKVx0XHRcblx0dGV4dEZyYW1lID0gdGV4dEF1dG9TaXplKHRleHRMYXllcilcblx0dGV4dExheWVyLnByb3BzID0gKGhlaWdodDp0ZXh0RnJhbWUuaGVpZ2h0LCB3aWR0aDp0ZXh0RnJhbWUud2lkdGgpXG5cdHJldHVybiB0ZXh0TGF5ZXJcblxuZXhwb3J0cy51cGRhdGUgPSAobGF5ZXIsIGFycmF5KSAtPlxuXHRpZiBhcnJheSA9PSB1bmRlZmluZWRcblx0XHRhcnJheSA9IFtdXG5cdGlmIGxheWVyLnR5cGUgPT0gXCJ0ZXh0XCJcblx0XHRmb3IgY2hhbmdlIGluIGFycmF5XG5cdFx0XHRrZXkgPSBPYmplY3Qua2V5cyhjaGFuZ2UpWzBdXG5cdFx0XHR2YWx1ZSA9IGNoYW5nZVtrZXldXG5cdFx0XHRpZiBrZXkgPT0gXCJ0ZXh0XCJcblx0XHRcdFx0bGF5ZXIuaHRtbCA9IHZhbHVlXG5cdFx0XHRcdHRleHRGcmFtZSA9IHRleHRBdXRvU2l6ZShsYXllcilcblx0XHRcdFx0bGF5ZXIud2lkdGggPSB0ZXh0RnJhbWUud2lkdGhcblx0XHRcdFx0bGF5ZXIuaGVpZ2h0ID0gdGV4dEZyYW1lLmhlaWdodFxuXHRleHBvcnRzLmxheW91dCgpXG5cbmV4cG9ydHMudGltZURlbGVnYXRlID0gKGxheWVyLCBjbG9ja1R5cGUpIC0+XG5cdEB0aW1lID0gZXhwb3J0cy5nZXRUaW1lKClcblx0VXRpbHMuZGVsYXkgNjAgLSBAdGltZS5zZWNzLCAtPlxuXHRcdEB0aW1lID0gZXhwb3J0cy5nZXRUaW1lKClcblx0XHRleHBvcnRzLnVwZGF0ZShsYXllciwgW3RleHQ6ZXhwb3J0cy50aW1lRm9ybWF0dGVyKEB0aW1lLCBjbG9ja1R5cGUpXSlcblx0XHRVdGlscy5pbnRlcnZhbCA2MCwgLT5cblx0XHRcdEB0aW1lID0gZXhwb3J0cy5nZXRUaW1lKClcblx0XHRcdGV4cG9ydHMudXBkYXRlKGxheWVyLCBbdGV4dDpleHBvcnRzLnRpbWVGb3JtYXR0ZXIoQHRpbWUsIGNsb2NrVHlwZSldKVxuIFxuZXhwb3J0cy50aW1lRm9ybWF0dGVyID0gKHRpbWVPYmosIGNsb2NrVHlwZSkgLT5cblx0aWYgY2xvY2tUeXBlID09IGZhbHNlIFxuXHRcdGlmIHRpbWVPYmouaG91cnMgPiAxMlxuXHRcdFx0dGltZU9iai5ob3VycyA9IHRpbWVPYmouaG91cnMgLSAxMlxuXHRpZiB0aW1lT2JqLm1pbnMgPCAxMFxuXHRcdHRpbWVPYmoubWlucyA9IFwiMFwiICsgdGltZU9iai5taW5zXG5cdHJldHVybiB0aW1lT2JqLmhvdXJzICsgXCI6XCIgKyB0aW1lT2JqLm1pbnNcblxuIyNBbGVydHNcbmV4cG9ydHMuQWxlcnQgPSAoYXJyYXkpIC0+XG5cdGlmIGFycmF5ID09IHVuZGVmaW5lZFxuXHRcdGFycmF5ID0gW11cblx0Zm9yIGkgaW4gZGVmYXVsdHMuYWxlcnQucHJvcHNcblx0XHRpZiBhcnJheVtpXSAhPSB1bmRlZmluZWRcblx0XHRcdEBbaV0gPSBhcnJheVtpXVxuXHRcdGVsc2Vcblx0XHRcdEBbaV0gPSBkZWZhdWx0cy5hbGVydC50ZXh0W2ldXG5cdGFsbCA9IG5ldyBMYXllciBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiLCBuYW1lOlwiYWxlcnQgYWxsXCJcblx0YWxsLmNvbnN0cmFpbnRzID0gXG5cdFx0bGVhZGluZzowXG5cdFx0dHJhaWxpbmc6MFxuXHRcdHRvcDowXG5cdFx0Ym90dG9tOjBcblx0b3ZlcmxheSA9IG5ldyBMYXllciBiYWNrZ3JvdW5kQ29sb3I6XCJibGFja1wiLCBvcGFjaXR5Oi4zLCBzdXBlckxheWVyOmFsbCwgbmFtZTpcIm92ZXJsYXlcIlxuXHRvdmVybGF5LmNvbnN0cmFpbnRzID1cblx0XHRsZWFkaW5nOjBcblx0XHR0cmFpbGluZzowXG5cdFx0dG9wOjBcblx0XHRib3R0b206MFxuXHRhbGVydEJHID0gbmV3IExheWVyIGJhY2tncm91bmRDb2xvcjpcIndoaXRlXCIsIHN1cGVyTGF5ZXI6YWxsLCBib3JkZXJSYWRpdXM6ZXhwb3J0cy5weCgxMCksIG5hbWU6XCJhbGVydCBiZ1wiLCB4OjkyLCB5OjUzN1xuXHRhbGVydEJHLmNvbnN0cmFpbnRzID1cblx0XHRhbGlnbjpcImNlbnRlclwiXG5cdFx0d2lkdGg6MjgwXG5cdFx0aGVpZ2h0OjQwMFxuXHR0aXRsZSA9IG5ldyBleHBvcnRzLlRleHQgc3R5bGU6XCJhbGVydFRpdGxlXCIsIHN1cGVyTGF5ZXI6YWxlcnRCRywgdGV4dDpAdGl0bGUsIGZvbnRXZWlnaHQ6XCJtZWRpdW1cIiwgIG5hbWU6XCJ0aXRsZVwiXG5cdHRpdGxlLmNvbnN0cmFpbnRzID0gXG5cdFx0YWxpZ246XCJob3Jpem9udGFsXCJcblx0XHR0b3A6MjBcblx0bWVzc2FnZSA9IG5ldyBleHBvcnRzLlRleHQgc3R5bGU6XCJhbGVydE1lc3NhZ2VcIiwgdGV4dDpAbWVzc2FnZSwgZm9udFNpemU6MTMsIHN1cGVyTGF5ZXI6YWxlcnRCRywgdGV4dEFsaWduOlwiY2VudGVyXCIsIGxpbmVIZWlnaHQ6MTYsIHdpZHRoOjI0MCwgbmFtZTpcIm1lc3NhZ2VcIlxuXHRtZXNzYWdlLmNvbnN0cmFpbnRzID1cblx0XHR0b3A6IFt0aXRsZSwgMTBdXG5cdFx0YWxpZ246XCJob3Jpem9udGFsXCJcblx0XHR3aWR0aDogMjIwXG5cdGRpdmlkZXIgPSBuZXcgTGF5ZXIgc3VwZXJMYXllcjphbGVydEJHLCBiYWNrZ3JvdW5kQ29sb3I6XCIjRTJFOEVCXCIsIG5hbWU6XCJob3Jpem9udGFsIGRpdmlkZXJcIlxuXHRkaXZpZGVyLmNvbnN0cmFpbnRzID0gXG5cdFx0bGVhZGluZzowXG5cdFx0dHJhaWxpbmc6MFxuXHRcdGhlaWdodDoxXG5cdFx0Ym90dG9tOjQ0XG5cdGV4cG9ydHMubGF5b3V0KClcblx0YWN0aW9uQnV0dG9uID0gbmV3IGV4cG9ydHMuVGV4dCBzdHlsZTpcImFsZXJ0QWN0aW9uXCIsIGNvbG9yOlwiIzAwNzZGRlwiLCBzdXBlckxheWVyOmFsZXJ0QkcsIHRleHQ6QGFjdGlvbiwgbmFtZTpcImFjdGlvblwiXG5cdHNlY29uZGFyeUFjdGlvbkJ1dHRvbiA9IG5ldyBleHBvcnRzLlRleHQgc3R5bGU6XCJhbGVydEFjdGlvblwiLCB0ZXh0OkBzZWNvbmRhcnlBY3Rpb24sIG5hbWU6XCJzZWNvbmRhcnlBY3Rpb25cIlxuXHRhbGVydEJHLmNvbnN0cmFpbnRzW1wiaGVpZ2h0XCJdID0gMjAgKyBleHBvcnRzLnB0KHRpdGxlLmhlaWdodCkgKyAxMCArIGV4cG9ydHMucHQobWVzc2FnZS5oZWlnaHQpICsgNjQgXG5cdGV4cG9ydHMubGF5b3V0KClcblx0aWYgQGFjdGlvbiAhPSBcIkFjdGlvblwiICYmIEBzZWNvbmRhcnlBY3Rpb24gPT0gXCJzZWNvbmRhcnlBY3Rpb25cIlxuXHRcdGFjdGlvbkJ1dHRvbi5jb25zdHJhaW50cyA9IFxuXHRcdFx0YWxpZ246XCJob3Jpem9udGFsXCJcblx0XHRcdGJvdHRvbToxNlxuXHRcdGJveCA9IG5ldyBMYXllciBzdXBlckxheWVyOmFsZXJ0QkcsIGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCJcblx0XHRib3guY29uc3RyYWludHMgPSBcblx0XHRcdGxlYWRpbmc6MFxuXHRcdFx0dHJhaWxpbmc6MFxuXHRcdFx0Ym90dG9tOjBcblx0XHRcdGhlaWdodDo0NFxuXHRcdHNlY29uZGFyeUFjdGlvbkJ1dHRvbi52aXNpYmxlID0gZmFsc2Vcblx0XHRleHBvcnRzLmxheW91dCgpXG5cdFx0cmV0dXJuIHtcblx0XHRcdGFsbCA6IGFsbFxuXHRcdFx0b3ZlcmxheSA6IG92ZXJsYXlcblx0XHRcdGFjdGlvbjogYm94XG5cdFx0XHR0aXRsZTogdGl0bGVcblx0XHRcdG1lc3NhZ2U6IG1lc3NhZ2Vcblx0XHR9XG5cdGVsc2Vcblx0XHRsZWZ0Qm94ID0gbmV3IExheWVyIHdpZHRoOmFsZXJ0Qkcud2lkdGgvMiwgc3VwZXJMYXllcjphbGVydEJHLCBuYW1lOkBzZWNvbmRhcnlBY3Rpb24gKyBcIiBib3hcIiwgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIlxuXHRcdHJpZ2h0Qm94ID0gbmV3IExheWVyIHdpZHRoOmFsZXJ0Qkcud2lkdGgvMiwgc3VwZXJMYXllcjphbGVydEJHLCBuYW1lOkBhY3Rpb24gKyBcIiBib3hcIiwgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIlxuXHRcdGRpdmlkZXJWZXJ0aWNhbCA9IG5ldyBMYXllciBzdXBlckxheWVyOmFsZXJ0QkcsIGJhY2tncm91bmRDb2xvcjpcIiNFMkU4RUJcIlxuXHRcdGRpdmlkZXJWZXJ0aWNhbC5jb25zdHJhaW50cyA9IFxuXHRcdFx0d2lkdGg6MVxuXHRcdFx0aGVpZ2h0OjQ0XG5cdFx0XHRib3R0b206MFxuXHRcdFx0YWxpZ246XCJob3Jpem9udGFsXCJcblx0XHRsZWZ0Qm94LmNvbnN0cmFpbnRzID1cblx0XHRcdGhlaWdodDo0NFxuXHRcdFx0Ym90dG9tOjBcblx0XHRcdGxlYWRpbmc6MFxuXHRcdHJpZ2h0Qm94LmNvbnN0cmFpbnRzID1cblx0XHRcdGhlaWdodDo0NFxuXHRcdFx0Ym90dG9tOjBcblx0XHRcdHRyYWlsaW5nOjBcblx0XHRsZWZ0Qm94LmFkZFN1YkxheWVyKHNlY29uZGFyeUFjdGlvbkJ1dHRvbilcblx0XHRyaWdodEJveC5hZGRTdWJMYXllcihhY3Rpb25CdXR0b24pXG5cdFx0ZXhwb3J0cy5sYXlvdXQoKVxuXHRcdGFjdGlvbkJ1dHRvbi5jb25zdHJhaW50cyA9IFxuXHRcdFx0YWxpZ246XCJob3Jpem9udGFsXCJcblx0XHRcdGJvdHRvbToxNFxuXHRcdHNlY29uZGFyeUFjdGlvbkJ1dHRvbi5jb25zdHJhaW50cyA9XG5cdFx0XHRhbGlnbjpcImhvcml6b250YWxcIlxuXHRcdFx0Ym90dG9tOjE0XG5cdFx0ZXhwb3J0cy5sYXlvdXQoKVxuXHRcdHJldHVybiB7XG5cdFx0XHRhbGwgOiBhbGxcblx0XHRcdG92ZXJsYXkgOiBvdmVybGF5XG5cdFx0XHRhY3Rpb246IHJpZ2h0Qm94XG5cdFx0XHRzZWNvbmRhcnlBY3Rpb24gOiBsZWZ0Qm94XG5cdFx0XHR0aXRsZTogdGl0bGVcblx0XHRcdG1lc3NhZ2U6IG1lc3NhZ2Vcblx0XHR9XG5cbmV4cG9ydHMuQmFubmVyID0gKGFycmF5KSAtPlxuXHRpZiBhcnJheSA9PSB1bmRlZmluZWRcblx0XHRhcnJheSA9IFtdXG5cdGZvciBpIGluIGRlZmF1bHRzLmJhbm5lci5wcm9wc1xuXHRcdGlmIGFycmF5W2ldICE9IHVuZGVmaW5lZFxuXHRcdFx0QFtpXSA9IGFycmF5W2ldXG5cdFx0ZWxzZVxuXHRcdFx0QFtpXSA9IGRlZmF1bHRzLmJhbm5lci50ZXh0W2ldXG5cdGJhbm5lckJHID0gbmV3IExheWVyIGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCIsIG5hbWU6XCJiYW5uZXIgYWxsXCJcblx0aWYgZXhwb3J0cy5kZXZpY2UgPT0gXCJpcGhvbmUtNnNcIlxuXHRcdGJhbm5lckJHLmh0bWwgPSBcIjw/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyc/PlxuXHRcdFx0PHN2ZyB3aWR0aD0nI3tleHBvcnRzLndpZHRofXB4JyBoZWlnaHQ9JyN7ZXhwb3J0cy5weCg2OCl9cHgnIHZpZXdCb3g9JzAgMCAzNzUgNjgnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayc+XG5cdFx0XHQgICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjYgKDI2MzA0KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHRcdCAgICA8dGl0bGU+Tm90aWZpY2F0aW9uIGJhY2tncm91bmQ8L3RpdGxlPlxuXHRcdFx0ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdFx0ICAgIDxkZWZzPjwvZGVmcz5cblx0XHRcdCAgICA8ZyBpZD0nUGFnZS0xJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJyBmaWxsLW9wYWNpdHk9JzAuOTUnPlxuXHRcdFx0ICAgICAgICA8ZyBpZD0naU9TOC1QdXNoLU5vdGlmaWNhdGlvbicgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTU4LjAwMDAwMCwgLTIzLjAwMDAwMCknIGZpbGw9JyMxQTFBMUMnPlxuXHRcdFx0ICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoNTguMDAwMDAwLCA3LjAwMDAwMCknIGlkPSdOb3RpZmljYXRpb24tY29udGFpbmVyJz5cblx0XHRcdCAgICAgICAgICAgICAgICA8Zz5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0nTTAsMTYgTDM3NSwxNiBMMzc1LDg0IEwwLDg0IEwwLDE2IFogTTE2OSw3Ny4wMDQ4ODE1IEMxNjksNzUuODk3NjE2IDE2OS44OTYyNzksNzUgMTcxLjAwMjQsNzUgTDIwMy45OTc2LDc1IEMyMDUuMTAzNDk1LDc1IDIwNiw3NS44OTM4OTk4IDIwNiw3Ny4wMDQ4ODE1IEwyMDYsNzcuOTk1MTE4NSBDMjA2LDc5LjEwMjM4NCAyMDUuMTAzNzIxLDgwIDIwMy45OTc2LDgwIEwxNzEuMDAyNCw4MCBDMTY5Ljg5NjUwNSw4MCAxNjksNzkuMTA2MTAwMiAxNjksNzcuOTk1MTE4NSBMMTY5LDc3LjAwNDg4MTUgWicgaWQ9J05vdGlmaWNhdGlvbi1iYWNrZ3JvdW5kJz48L3BhdGg+XG5cdFx0XHQgICAgICAgICAgICAgICAgPC9nPlxuXHRcdFx0ICAgICAgICAgICAgPC9nPlxuXHRcdFx0ICAgICAgICA8L2c+XG5cdFx0XHQgICAgPC9nPlxuXHRcdFx0PC9zdmc+XCJcblx0aWYgZXhwb3J0cy5kZXZpY2UgPT0gXCJpcGhvbmUtNnMtcGx1c1wiXG5cdFx0YmFubmVyQkcuaHRtbCA9IFwiXG5cdFx0PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdFx0XHQ8c3ZnIHdpZHRoPScje2V4cG9ydHMud2lkdGh9cHgnIGhlaWdodD0nI3tleHBvcnRzLnB4KDY4KX1weCcgdmlld0JveD0nMCAwIDQxNCA2OCcgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJz5cblx0XHQgICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjYgKDI2MzA0KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHQgICAgPHRpdGxlPk5vdGlmaWNhdGlvbiBiYWNrZ3JvdW5kIENvcHk8L3RpdGxlPlxuXHRcdCAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHQgICAgPGRlZnM+PC9kZWZzPlxuXHRcdCAgICA8ZyBpZD0nUGFnZS0xJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJyBmaWxsLW9wYWNpdHk9JzAuOTUnPlxuXHRcdCAgICAgICAgPGcgaWQ9J2lPUzgtUHVzaC1Ob3RpZmljYXRpb24nIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC00My4wMDAwMDAsIC03NC4wMDAwMDApJyBmaWxsPScjMUExQTFDJz5cblx0XHQgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSg0My4wMDAwMDAsIDc0LjAwMDAwMCknIGlkPSdOb3RpZmljYXRpb24tY29udGFpbmVyJz5cblx0XHQgICAgICAgICAgICAgICAgPGc+XG5cdFx0ICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSdNMCwwIEw0MTQsMCBMNDE0LDY4IEwwLDY4IEwwLDAgWiBNMTg5LDYxLjAwNDg4MTUgQzE4OSw1OS44OTc2MTYgMTg5Ljg5NjI3OSw1OSAxOTEuMDAyNCw1OSBMMjIzLjk5NzYsNTkgQzIyNS4xMDM0OTUsNTkgMjI2LDU5Ljg5Mzg5OTggMjI2LDYxLjAwNDg4MTUgTDIyNiw2MS45OTUxMTg1IEMyMjYsNjMuMTAyMzg0IDIyNS4xMDM3MjEsNjQgMjIzLjk5NzYsNjQgTDE5MS4wMDI0LDY0IEMxODkuODk2NTA1LDY0IDE4OSw2My4xMDYxMDAyIDE4OSw2MS45OTUxMTg1IEwxODksNjEuMDA0ODgxNSBaJyBpZD0nTm90aWZpY2F0aW9uLWJhY2tncm91bmQtQ29weSc+PC9wYXRoPlxuXHRcdCAgICAgICAgICAgICAgICA8L2c+XG5cdFx0ICAgICAgICAgICAgPC9nPlxuXHRcdCAgICAgICAgPC9nPlxuXHRcdCAgICA8L2c+XG5cdFx0PC9zdmc+XG5cdFx0XCJcblx0YmFubmVyQkcuY29uc3RyYWludHMgPVxuXHRcdGxlYWRpbmc6MFxuXHRcdHRyYWlsaW5nOjBcblx0XHR0b3A6MFxuXHRcdGhlaWdodDo2OFxuXHRpY29uID0gbmV3IExheWVyIHN1cGVyTGF5ZXI6YmFubmVyQkcsIG5hbWU6XCJpY29uXCIsIGJvcmRlclJhZGl1czpleHBvcnRzLnB4KDQuNSlcblx0aWYgQGljb24gPT0gdW5kZWZpbmVkXG5cdFx0aWNvbi5zdHlsZVtcImJhY2tncm91bmRcIl0gPSBcImxpbmVhci1ncmFkaWVudCgtMTgwZGVnLCAjNjdGRjgxIDAlLCAjMDFCNDFGIDEwMCUpXCJcblx0aWNvbi5jb25zdHJhaW50cyA9XG5cdFx0aGVpZ2h0OjIwXG5cdFx0d2lkdGg6MjBcblx0XHRsZWFkaW5nOjE1XG5cdFx0dG9wOjhcblx0dGl0bGUgPSBuZXcgZXhwb3J0cy5UZXh0IHN0eWxlOlwiYmFubmVyVGl0bGVcIiwgdGV4dDpAdGl0bGUsIGNvbG9yOlwid2hpdGVcIiwgZm9udFdlaWdodDpcIm1lZGl1bVwiLCBmb250U2l6ZToxMywgc3VwZXJMYXllcjpiYW5uZXJCRywgbmFtZTpcInRpdGxlXCJcblx0dGl0bGUuY29uc3RyYWludHMgPSBcblx0XHR0b3A6NVxuXHRcdGxlYWRpbmc6W2ljb24sIDExXVxuXHRtZXNzYWdlID0gbmV3IGV4cG9ydHMuVGV4dCBzdHlsZTpcImJhbm5lck1lc3NhZ2VcIiwgdGV4dDpAbWVzc2FnZSwgY29sb3I6XCJ3aGl0ZVwiLCBmb250U2l6ZToxMywgc3VwZXJMYXllcjpiYW5uZXJCRywgbmFtZTpcIm1lc3NhZ2VcIlxuXHRtZXNzYWdlLmNvbnN0cmFpbnRzID1cblx0XHRsZWFkaW5nRWRnZXM6dGl0bGVcblx0XHR0b3A6W3RpdGxlLCAyXVxuXHR0aW1lID0gbmV3IGV4cG9ydHMuVGV4dCBzdHlsZTpcImJhbm5lclRpbWVcIiwgdGV4dDpAdGltZSwgY29sb3I6XCJ3aGl0ZVwiLCBmb250U2l6ZToxMSwgc3VwZXJMYXllcjpiYW5uZXJCRywgbmFtZTpcInRpbWVcIlxuXHR0aW1lLmNvbnN0cmFpbnRzID1cblx0XHRsZWFkaW5nOlt0aXRsZSwgNV1cblx0XHRib3R0b21FZGdlczogdGl0bGVcblxuXHRleHBvcnRzLmxheW91dCgpXG5cdHJldHVybiB7XG5cdFx0YWxsIDogYmFubmVyQkdcblx0XHRpY29uOmljb25cblx0XHR0aXRsZTp0aXRsZVxuXHRcdG1lc3NhZ2U6bWVzc2FnZVxuXHR9XG5cbmV4cG9ydHMuQnV0dG9uID0gKGFycmF5KSAtPlxuXHRzZXR1cCA9IHNldHVwQ29tcG9uZW50KFwiYnV0dG9uXCIsIGFycmF5KVxuXHRidXR0b24gPSBuZXcgTGF5ZXIgbmFtZTpzZXR1cC5uYW1lXG5cdGNvbG9yID0gXCJcIlxuXHRpZiBzZXR1cC5zdXBlckxheWVyIFxuXHRcdHNldHVwLnN1cGVyTGF5ZXIuYWRkU3ViTGF5ZXIoYnV0dG9uKVxuXHRzd2l0Y2ggc2V0dXAudHlwZVxuXHRcdHdoZW4gXCJiaWdcIlxuXHRcdFx0QGZvbnRTaXplID0gMjBcblx0XHRcdEB0b3AgPSAxNlxuXHRcdFx0QGZvbnRXZWlnaHQgPSBcIm1lZGl1bVwiXG5cdFx0XHRidXR0b24uY29uc3RyYWludHMgPVxuXHRcdFx0XHRsZWFkaW5nOjIwXG5cdFx0XHRcdHRyYWlsaW5nOjIwXG5cdFx0XHRcdGhlaWdodDo1N1xuXHRcdFx0YnV0dG9uLmJvcmRlclJhZGl1cyA9IGV4cG9ydHMucHgoMTIuNSlcblx0XHRcdGJhY2tncm91bmRDb2xvciA9IFwiXCJcblx0XHRcdHN3aXRjaCBzZXR1cC5zdHlsZVxuXHRcdFx0XHR3aGVuIFwibGlnaHRcIlxuXHRcdFx0XHRcdGNvbG9yID0gXCIjMDA3QUZGXCJcblx0XHRcdFx0XHRpZiBzZXR1cC5ibHVyIFxuXHRcdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yID0gXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIC45KVwiXG5cdFx0XHRcdFx0XHRleHBvcnRzLmJnQmx1cihidXR0b24pXG5cdFx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiXG5cblx0XHRcdFx0d2hlbiBcImRhcmtcIlxuXHRcdFx0XHRcdGNvbG9yID0gXCIjRkZGXCJcblx0XHRcdFx0XHRpZiBzZXR1cC5ibHVyXG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3IgPSBcInJnYmEoNDMsIDQzLCA0MywgLjkpXCJcblx0XHRcdFx0XHRcdGV4cG9ydHMuYmdCbHVyKGJ1dHRvbilcblx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3IgPSBcIiMyODI4MjhcIlxuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0aWYgc2V0dXAuYmx1ciBcblx0XHRcdFx0XHRcdGNvbG9yID0gc2V0dXAuY29sb3Jcblx0XHRcdFx0XHRcdGJhY2tncm91bmRDb2xvciA9IG5ldyBDb2xvcihzZXR1cC5iYWNrZ3JvdW5kQ29sb3IpXG5cdFx0XHRcdFx0XHRyZ2JTdHJpbmcgPSBiYWNrZ3JvdW5kQ29sb3IudG9SZ2JTdHJpbmcoKVxuXHRcdFx0XHRcdFx0cmdiYVN0cmluZyA9IHJnYlN0cmluZy5yZXBsYWNlKFwiKVwiLCBcIiwgLjkpXCIpXG5cdFx0XHRcdFx0XHRyZ2JhU3RyaW5nICA9IHJnYmFTdHJpbmcucmVwbGFjZShcInJnYlwiLCBcInJnYmFcIilcblx0XHRcdFx0XHRcdGJhY2tncm91bmRDb2xvciA9IHJnYmFTdHJpbmdcblx0XHRcdFx0XHRcdGV4cG9ydHMuYmdCbHVyKGJ1dHRvbilcblx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHRjb2xvciA9IHNldHVwLmNvbG9yXG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3IgPSBuZXcgQ29sb3Ioc2V0dXAuYmFja2dyb3VuZENvbG9yKVxuXG5cblx0XHRcdGJ1dHRvbi5iYWNrZ3JvdW5kQ29sb3IgPSBiYWNrZ3JvdW5kQ29sb3JcblxuXHRcdFx0YnV0dG9uLm9uIEV2ZW50cy5Ub3VjaFN0YXJ0LCAtPlxuXHRcdFx0XHRuZXdDb2xvciA9IFwiXCJcblx0XHRcdFx0aWYgc2V0dXAuc3R5bGUgPT0gXCJkYXJrXCJcblx0XHRcdFx0XHRuZXdDb2xvciA9IGJ1dHRvbi5iYWNrZ3JvdW5kQ29sb3IubGlnaHRlbigxMClcblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdG5ld0NvbG9yID0gYnV0dG9uLmJhY2tncm91bmRDb2xvci5kYXJrZW4oMTApXG5cdFx0XHRcdGJ1dHRvbi5hbmltYXRlIFxuXHRcdFx0XHRcdHByb3BlcnRpZXM6KGJhY2tncm91bmRDb2xvcjpuZXdDb2xvcilcblx0XHRcdFx0XHR0aW1lOi41XG5cdFx0XHRidXR0b24ub24gRXZlbnRzLlRvdWNoRW5kLCAtPlxuXHRcdFx0XHRidXR0b24uYW5pbWF0ZVxuXHRcdFx0XHRcdHByb3BlcnRpZXM6KGJhY2tncm91bmRDb2xvcjpiYWNrZ3JvdW5kQ29sb3IpXG5cdFx0XHRcdFx0dGltZTouNVxuXG5cdFx0d2hlbiBcInNtYWxsXCJcblx0XHRcdEBmb250U2l6ZSA9IDE2XG5cdFx0XHRAdG9wID0gNFxuXHRcdFx0YnV0dG9uLmJvcmRlclJhZGl1cyA9IGV4cG9ydHMucHgoMi41KVxuXHRcdFx0c3dpdGNoIHNldHVwLnN0eWxlXG5cdFx0XHRcdHdoZW4gXCJsaWdodFwiXG5cdFx0XHRcdFx0Y29sb3IgPSBcIiMwMDdBRkZcIlxuXHRcdFx0XHRcdGJ1dHRvbi5ib3JkZXJDb2xvciA9IFwiIzAwN0FGRlwiXG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRjb2xvciA9IHNldHVwLmNvbG9yXG5cdFx0XHRcdFx0YnV0dG9uLmJvcmRlckNvbG9yID0gc2V0dXAuY29sb3Jcblx0XHRcdGJ1dHRvbi5iYWNrZ3JvdW5kQ29sb3IgPSBcInRyYW5zcGFyZW50XCJcblx0XHRcdGJ1dHRvbi5ib3JkZXJXaWR0aCA9IGV4cG9ydHMucHgoMSlcblxuXG5cdFx0ZWxzZVxuXHRcdFx0YnV0dG9uLmJhY2tncm91bmRDb2xvciA9IFwidHJhbnNwYXJlbnRcIlxuXHRcdFx0Y29sb3IgPSBzZXR1cC5jb2xvclxuXHRcdFx0QGZvbnRTaXplID0gc2V0dXAuZm9udFNpemVcblx0XHRcdEBmb250V2VpZ2h0ID0gc2V0dXAuZm9udFdlaWdodFxuXG5cdFx0XHRidXR0b24ub24gRXZlbnRzLlRvdWNoU3RhcnQsIC0+XG5cdFx0XHRcdG5ld0NvbG9yID0gYnV0dG9uLnN1YkxheWVyc1swXS5jb2xvci5saWdodGVuKDMwKVxuXHRcdFx0XHRidXR0b24uc3ViTGF5ZXJzWzBdLmFuaW1hdGUgXG5cdFx0XHRcdFx0cHJvcGVydGllczooY29sb3I6bmV3Q29sb3IpXG5cdFx0XHRcdFx0dGltZTouNVxuXHRcdFx0YnV0dG9uLm9uIEV2ZW50cy5Ub3VjaEVuZCwgLT5cblx0XHRcdFx0YnV0dG9uLnN1YkxheWVyc1swXS5hbmltYXRlXG5cdFx0XHRcdFx0cHJvcGVydGllczooY29sb3I6c2V0dXAuY29sb3IpXG5cdFx0XHRcdFx0dGltZTouNVxuXG5cdHRleHRMYXllciA9IG5ldyBleHBvcnRzLlRleHQgc3R5bGU6XCJidXR0b24je3NldHVwLnR5cGV9I3tzZXR1cC5zdHlsZX1cIiwgdGV4dDpzZXR1cC50ZXh0LCBjb2xvcjpjb2xvciwgc3VwZXJMYXllcjpidXR0b24sIGZvbnRTaXplOkBmb250U2l6ZSwgZm9udFdlaWdodDpAZm9udFdlaWdodFxuXHR0ZXh0TGF5ZXIuY29uc3RyYWludHMgPVxuXHRcdGFsaWduOlwiaG9yaXpvbnRhbFwiXG5cdFx0dG9wOkB0b3Bcblx0c3dpdGNoIHNldHVwLnR5cGUgXG5cdFx0d2hlbiBcInNtYWxsXCJcblx0XHRcdGJ1dHRvbi5wcm9wcyA9ICh3aWR0aDp0ZXh0TGF5ZXIud2lkdGggKyBleHBvcnRzLnB4KDYwKSwgaGVpZ2h0OiB0ZXh0TGF5ZXIuaGVpZ2h0ICsgZXhwb3J0cy5weCgxMCkpXG5cdFx0XHRidXR0b24ub24gRXZlbnRzLlRvdWNoU3RhcnQsIC0+XG5cdFx0XHRcdGJ1dHRvbi5hbmltYXRlXG5cdFx0XHRcdFx0cHJvcGVydGllczooYmFja2dyb3VuZENvbG9yOmNvbG9yKVxuXHRcdFx0XHRcdHRpbWU6LjVcdFxuXHRcdFx0XHR0ZXh0TGF5ZXIuYW5pbWF0ZVxuXHRcdFx0XHRcdHByb3BlcnRpZXM6KGNvbG9yOlwiI0ZGRlwiKVxuXHRcdFx0XHRcdHRpbWU6LjVcblx0XHRcdGJ1dHRvbi5vbiBFdmVudHMuVG91Y2hFbmQsIC0+XG5cdFx0XHRcdGJ1dHRvbi5hbmltYXRlXG5cdFx0XHRcdFx0cHJvcGVydGllczooYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIilcblx0XHRcdFx0XHR0aW1lOi41XHRcblx0XHRcdFx0dGV4dExheWVyLmFuaW1hdGVcblx0XHRcdFx0XHRwcm9wZXJ0aWVzOihjb2xvcjpjb2xvcilcblx0XHRcdFx0XHR0aW1lOi41XG5cdFx0ZWxzZSBcblx0XHRcdGJ1dHRvbi5wcm9wcyA9ICh3aWR0aDp0ZXh0TGF5ZXIud2lkdGgsIGhlaWdodDp0ZXh0TGF5ZXIuaGVpZ2h0KVxuXHRleHBvcnRzLmxheW91dCgpXG5cdHJldHVybiBidXR0b25cblxuZXhwb3J0cy5Mb2NrU2NyZWVuID0gKGFycmF5KSAtPlxuXHRzd2l0Y2ggZXhwb3J0cy5kZXZpY2Vcblx0XHR3aGVuIFwiaXBob25lLTZzXCIgXG5cdFx0XHRAdGltZUZvbnRTaXplID0gODhcblx0XHRcdEBkYXRlRm9udFNpemUgPSAxOVxuXHRcdHdoZW4gXCJpcGhvbmUtNnMtcGx1c1wiIFxuXHRcdFx0QHRpbWVGb250U2l6ZSA9IDg4XG5cdFx0XHRAZGF0ZUZvbnRTaXplID0gMTlcblx0XHR3aGVuIFwiaXBob25lLTVcIiBcblx0XHRcdEB0aW1lRm9udFNpemUgPSA4MFxuXHRcdFx0QGRhdGVGb250U2l6ZSA9IDE5XG5cdFx0d2hlbiBcImlwYWQtbWluaS00XCJcblx0XHRcdEB0aW1lRm9udFNpemUgPSAxMjBcblx0XHRcdEBkYXRlRm9udFNpemUgPSAyNFxuXHRcdHdoZW4gXCJpcGFkLWFpci0yXCJcblx0XHRcdEB0aW1lRm9udFNpemUgPSAxMjBcblx0XHRcdEBkYXRlRm9udFNpemUgPSAyNFxuXHRcdHdoZW4gXCJpcGFkLXByb1wiXG5cdFx0XHRAdGltZUZvbnRTaXplID0gMTIwXG5cdFx0XHRAZGF0ZUZvbnRTaXplID0gMjRcblx0XHRlbHNlIFxuXHRcdFx0QHRpbWVGb250U2l6ZSA9IDUwXG5cdFx0XHRAZGF0ZUZvbnRTaXplID0gMTlcblx0c2V0dXAgPSBzZXR1cENvbXBvbmVudChcImxvY2tTY3JlZW5cIiwgYXJyYXkpXG5cdEB0aW1lID0gZXhwb3J0cy5nZXRUaW1lKClcblx0QkcgPSBuZXcgTGF5ZXIgbmFtZTpcImxvY2tTY3JlZW4gQmFja2dyb3VuZFwiLCB3aWR0aDpleHBvcnRzLndpZHRoLCBoZWlnaHQ6ZXhwb3J0cy5oZWlnaHRcblx0QkcudHlwZSA9IFwibG9ja1NjcmVlblwiXG5cdEJHLnN0eWxlW1wiYmFja2dyb3VuZFwiXSA9IFwibGluZWFyLWdyYWRpZW50KC0xODBkZWcsICMwMEM0RDAgMCUsICNGM0RBQkMgMTAwJSlcIlxuXHRpZiBzZXR1cC50aW1lID09IFwiZGVmYXVsdFwiXG5cdFx0QHRpbWVMYXllciA9IG5ldyBleHBvcnRzLlRleHQgc3R5bGU6XCJsb2NrU2NyZWVuVGltZVwiLCB0ZXh0OmV4cG9ydHMudGltZUZvcm1hdHRlcihAdGltZSwgc2V0dXAuY2xvY2syNCksIGZvbnRTaXplOkB0aW1lRm9udFNpemUsIGZvbnRXZWlnaHQ6XCJ0aGluXCIsIGNvbG9yOlwid2hpdGVcIiwgc3VwZXJMYXllcjpCR1xuXHRcdGV4cG9ydHMudGltZURlbGVnYXRlKEB0aW1lTGF5ZXIsIHNldHVwLmNsb2NrMjQpXG5cdGVsc2UgIFxuXHRcdEB0aW1lTGF5ZXIgPSBuZXcgZXhwb3J0cy5UZXh0IHN0eWxlOlwibG9ja1NjcmVlblRpbWVcIiwgdGV4dDpzZXR1cC50aW1lLCBmb250U2l6ZTpAdGltZUZvbnRTaXplLCBmb250V2VpZ2h0OlwidGhpblwiLCBjb2xvcjpcIndoaXRlXCIsIHN1cGVyTGF5ZXI6Qkdcblx0QHRpbWVMYXllci5jb25zdHJhaW50cyA9IFxuXHRcdGFsaWduOlwiaG9yaXpvbnRhbFwiXG5cdFx0dG9wOjYwXG5cdGlmIHNldHVwLmRhdGUgPT0gXCJkZWZhdWx0XCJcblx0XHRAZGF0ZUxheWVyID0gbmV3IGV4cG9ydHMuVGV4dCBzdHlsZTpcImxvY2tTY3JlZW5EYXRlXCIsIHRleHQ6QHRpbWUuZGF5ICsgXCIsIFwiICsgQHRpbWUubW9udGggKyBcIiBcIiArIEB0aW1lLmRhdGUsIGZvbnRTaXplOkBkYXRlRm9udFNpemUsIGNvbG9yOlwid2hpdGVcIiwgc3VwZXJMYXllcjpCR1xuXHRlbHNlXG5cdFx0QGRhdGVMYXllciA9IG5ldyBleHBvcnRzLlRleHQgc3R5bGU6XCJsb2NrU2NyZWVuRGF0ZVwiLCB0ZXh0OnNldHVwLmRhdGUsIGZvbnRTaXplOkBkYXRlRm9udFNpemUsIGNvbG9yOlwid2hpdGVcIiwgc3VwZXJMYXllcjpCR1xuXHRAZGF0ZUxheWVyLmNvbnN0cmFpbnRzID1cblx0XHRob3Jpem9udGFsQ2VudGVyOkB0aW1lTGF5ZXJcblx0XHR0b3A6W0B0aW1lTGF5ZXJdXG5cdHNsaWRlVG9VbmxvY2sgPSBuZXcgZXhwb3J0cy5UZXh0IHN0eWxlOlwibG9ja1NjcmVlblNsaWRlXCIsIHRleHQ6XCJzbGlkZSB0byB1bmxvY2tcIiwgZm9udFNpemU6MjQsIGZvbnRXZWlnaHQ6XCJtZWRpdW1cIiwgb3BhY2l0eTouNSwgc3VwZXJMYXllcjpCR1xuXHRzbGlkZVRvVW5sb2NrLmNvbnN0cmFpbnRzID0gXG5cdFx0YWxpZ246XCJob3Jpem9udGFsXCJcblx0XHRib3R0b206NzBcblxuXHRhcnJvdyA9IG5ldyBMYXllciBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiXG5cdGFycm93Lmh0bWwgPSBcIjw/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyc/PlxuXHRcdDxzdmcgd2lkdGg9JyN7ZXhwb3J0cy5weCgxMSl9cHgnIGhlaWdodD0nI3tleHBvcnRzLnB4KDI0KX1weCcgdmlld0JveD0nMCAwIDExIDI0JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnPlxuXHRcdCAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNi4xICgyNjMxMykgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdFx0ICAgIDx0aXRsZT5TbGlkZSB0byBVbmxvY2sgQXJyb3c8L3RpdGxlPlxuXHRcdCAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHQgICAgPGRlZnM+PC9kZWZzPlxuXHRcdCAgICA8ZyBpZD0nUGFnZS0xJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJz5cblx0XHQgICAgICAgIDxnIGlkPSdpUGhvbmUtNi82Uy1Mb2NrLVNjcmVlbicgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTkyLjAwMDAwMCwgLTU5Ny4wMDAwMDApJyBmaWxsPScjMDAwMDAwJz5cblx0XHQgICAgICAgICAgICA8ZyBpZD0nU2xpZGUtdG8tVW5sb2NrJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSg5Mi4wMDAwMDAsIDU5Ny4wMDAwMDApJz5cblx0XHQgICAgICAgICAgICAgICAgPHBhdGggZD0nTTEwLjk4NzczMjQsMTIuMDI1NzQyMiBMMi4xOTYyOTA1OCwwLjc5MzkwODIwNiBDMS44NTI0MDQzOCwwLjM1Mzc1Mzk0OSAxLjIyMzIxNzA4LDAuMjc1NjQxMDMxIDAuNzg4MDEwNzU0LDAuNjE1NjYxNDc1IEMwLjM0OTc3MDI1MywwLjk1ODA1MjQ3OSAwLjI3NzcwMzkyMiwxLjU4Njc2Nzc2IDAuNjIwMjY5MDcsMi4wMjUyMzExNiBMOC40MzM1MjQ1NSwxMi4wMjU3NDIxIEwwLjYyMDI2OTA3LDIyLjAyNjI1MzEgQzAuMjc3NzAzOTIyLDIyLjQ2NDcxNjUgMC4zNDk3NzAyNTMsMjMuMDkzNDMxOCAwLjc4ODAxMDc1NCwyMy40MzU4MjI4IEMxLjIyMzIxNzA4LDIzLjc3NTg0MzIgMS44NTI0MDQzOCwyMy42OTc3MzAzIDIuMTk2MjkwNTgsMjMuMjU3NTc2IEwxMC45ODc3MzI0LDEyLjAyNTc0MjIgWicgaWQ9J1NsaWRlLXRvLVVubG9jay1BcnJvdyc+PC9wYXRoPlxuXHRcdCAgICAgICAgICAgIDwvZz5cblx0XHQgICAgICAgIDwvZz5cblx0XHQgICAgPC9nPlxuXHRcdDwvc3ZnPlwiXG5cdGFycm93LmNvbnN0cmFpbnRzID0gXG5cdFx0aGVpZ2h0OjI0XG5cdFx0d2lkdGg6MTFcblx0XHR2ZXJ0aWNhbENlbnRlcjpzbGlkZVRvVW5sb2NrXG5cdFx0dHJhaWxpbmc6W3NsaWRlVG9VbmxvY2ssIDEyXVxuXHRleHBvcnRzLmxheW91dCgpXG5cblxuZXhwb3J0cy5TdGF0dXNCYXIgPSAoYXJyYXkpIC0+XG5cdHNldHVwID0gc2V0dXBDb21wb25lbnQoXCJzdGF0dXNCYXJcIiwgYXJyYXkpXG5cdHN0YXR1c0JhckJHID0gbmV3IExheWVyIGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCIsIG5hbWU6XCJzdGF0dXNCYXIuYWxsXCJcblx0c3RhdHVzQmFyQkcuY29uc3RyYWludHMgPSBcblx0XHRsZWFkaW5nOjBcblx0XHR0cmFpbGluZzowXG5cdFx0aGVpZ2h0OjIwXG5cdHN3aXRjaCBleHBvcnRzLmRldmljZVxuXHRcdHdoZW4gXCJpcGhvbmUtNnMtcGx1c1wiXG5cdFx0XHRAdG9wQ29uc3RyYWludCA9IDVcblx0XHRlbHNlXG5cdFx0XHRAdG9wQ29uc3RyYWludCA9IDNcblx0aWYgc2V0dXAuc3R5bGUgPT0gXCJsaWdodFwiXG5cdFx0QGNvbG9yID0gXCJ3aGl0ZVwiXG5cdGVsc2Vcblx0XHRAY29sb3IgPSBcImJsYWNrXCJcblx0Zm9yIGxheWVyIGluIEZyYW1lci5DdXJyZW50Q29udGV4dC5sYXllcnNcblx0XHRpZiBsYXllci50eXBlID09IFwibG9ja1NjcmVlblwiXG5cdFx0XHRAaXNMb2NrU2NyZWVuUHJlc2VudCA9IHRydWVcblx0aWYgQGlzTG9ja1NjcmVlblByZXNlbnRcblx0XHRncmlwcGVyID0gbmV3IExheWVyIHN1cGVyTGF5ZXI6c3RhdHVzQmFyQkcsIHdpZHRoOmV4cG9ydHMucHgoMzcpLCBoZWlnaHQ6ZXhwb3J0cy5weCg1KSwgbmFtZTpcImdyaXBwZXJcIiwgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIiwgb3BhY2l0eTouNSwgbmFtZTpcImdyaXBwZXJcIlxuXHRcdGdyaXBwZXIuaHRtbCA9IFwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdFx0XHQ8c3ZnIHdpZHRoPScje2V4cG9ydHMucHgoMzcpfXB4JyBoZWlnaHQ9JyN7ZXhwb3J0cy5weCg1KX1weCcgdmlld0JveD0nMCAwIDM3IDUnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayc+XG5cdFx0XHQgICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjYuMSAoMjYzMTMpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdFx0ICAgIDx0aXRsZT5HcmlwcGVyPC90aXRsZT5cblx0XHRcdCAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHRcdCAgICA8ZGVmcz48L2RlZnM+XG5cdFx0XHQgICAgPGcgaWQ9J1BhZ2UtMScgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCc+XG5cdFx0XHQgICAgICAgIDxnIGlkPSdLZXlib2FyZC9BdXRvLUNvbXBsZXRlLUJhci1DbG9zZWQnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC0xNjkuMDAwMDAwLCAtMi4wMDAwMDApJyBmaWxsPScjRkZGRkZGJz5cblx0XHRcdCAgICAgICAgICAgIDxyZWN0IGlkPSdHcmlwcGVyJyB4PScxNjkuNScgeT0nMi41JyB3aWR0aD0nMzYnIGhlaWdodD0nNCcgcng9JzIuNSc+PC9yZWN0PlxuXHRcdFx0ICAgICAgICA8L2c+XG5cdFx0XHQgICAgPC9nPlxuXHRcdFx0PC9zdmc+XCJcblx0XHRncmlwcGVyLmNvbnN0cmFpbnRzID0gXG5cdFx0XHRhbGlnbjpcImhvcml6b250YWxcIlxuXHRcdFx0dG9wOjJcblx0ZWxzZSBcblx0XHRAdGltZSA9IGV4cG9ydHMuZ2V0VGltZSgpXG5cdFx0aWYgc2V0dXAuY2xvY2syNCA9PSBmYWxzZVxuXHRcdFx0aWYgQHRpbWUuaG91cnMgPiAxMSBcblx0XHRcdFx0QHRpbWUuc3RhbXAgPSBcIlBNXCJcblx0XHRcdGVsc2Vcblx0XHRcdFx0QHRpbWUuc3RhbXAgPSBcIkFNXCJcblx0XHRlbHNlXG5cdFx0XHRAdGltZS5zdGFtcCA9IFwiXCJcblx0XHR0aW1lID0gbmV3IGV4cG9ydHMuVGV4dCBzdHlsZTpcInN0YXR1c0JhclRpbWVcIiwgdGV4dDpleHBvcnRzLnRpbWVGb3JtYXR0ZXIoQHRpbWUsIHNldHVwLmNsb2NrMjQpICsgXCIgXCIgKyBAdGltZS5zdGFtcCwgZm9udFNpemU6MTIsIGZvbnRXZWlnaHQ6XCJzZW1pYm9sZFwiLCBzdXBlckxheWVyOnN0YXR1c0JhckJHLCBjb2xvcjpAY29sb3IsIG5hbWU6XCJ0aW1lXCJcblx0XHR0aW1lLmNvbnN0cmFpbnRzID1cblx0XHRcdGFsaWduOlwiY2VudGVyXCJcblx0c2lnbmFsID0gW11cblx0aWYgc2V0dXAuc2lnbmFsIDwgMVxuXHRcdG5vTmV0d29yayA9IG5ldyBleHBvcnRzLlRleHQgc3VwZXJMYXllcjpzdGF0dXNCYXJCRywgZm9udFNpemU6MTIsIHRleHQ6XCJObyBOZXR3b3JrXCJcblx0XHRub05ldHdvcmsuY29uc3RyYWludHMgPVxuXHRcdFx0bGVhZGluZzo3XG5cdFx0XHR0b3A6M1xuXHRlbHNlXG5cdFx0Zm9yIGkgaW4gWzAuLi5zZXR1cC5zaWduYWxdXG5cdFx0XHRkb3QgPSBuZXcgTGF5ZXIgaGVpZ2h0OmV4cG9ydHMucHgoNS41KSwgd2lkdGg6ZXhwb3J0cy5weCg1LjUpLCBiYWNrZ3JvdW5kQ29sb3I6XCJibGFja1wiLCBzdXBlckxheWVyOnN0YXR1c0JhckJHLCBib3JkZXJSYWRpdXM6ZXhwb3J0cy5weCg1LjUpLzIsIGJhY2tncm91bmRDb2xvcjpAY29sb3IsIG5hbWU6XCJzaWduYWxbI3tpfV1cIlxuXHRcdFx0aWYgaSA9PSAwXG5cdFx0XHRcdGRvdC5jb25zdHJhaW50cyA9XG5cdFx0XHRcdFx0bGVhZGluZzo3XG5cdFx0XHRcdFx0dG9wOjdcdFxuXHRcdFx0ZWxzZVxuXHRcdFx0XHRkb3QuY29uc3RyYWludHMgPVxuXHRcdFx0XHRcdGxlYWRpbmc6W3NpZ25hbFtpIC0gMSBdLCAxXVxuXHRcdFx0XHRcdHRvcDo3XHRcdFx0XHRcdFxuXHRcdFx0c2lnbmFsLnB1c2ggZG90IFxuXHRcdFx0ZXhwb3J0cy5sYXlvdXQoKVxuXHRcdGlmIHNldHVwLnNpZ25hbCA8IDVcblx0XHRcdG5vbkRvdHMgPSA1IC0gc2V0dXAuc2lnbmFsXG5cdFx0XHRmb3IgaSBpbiBbMC4uLm5vbkRvdHNdXG5cdFx0XHRcdG5vbkRvdCA9IG5ldyBMYXllciBoZWlnaHQ6ZXhwb3J0cy5weCg1LjUpLCB3aWR0aDpleHBvcnRzLnB4KDUuNSksIHN1cGVyTGF5ZXI6c3RhdHVzQmFyQkcsIGJvcmRlclJhZGl1czpleHBvcnRzLnB4KDUuNSkvMiwgYmFja2dyb3VuZENvbG9yOlwid2hpdGVcIiwgbmFtZTpcInNpZ25hbFsje3NpZ25hbC5sZW5ndGh9XVwiXG5cdFx0XHRcdG5vbkRvdC5zdHlsZS5ib3JkZXIgPSBcIiN7ZXhwb3J0cy5weCgxKX1weCBzb2xpZCAje0Bjb2xvcn1cIlxuXHRcdFx0XHRub25Eb3QuY29uc3RyYWludHMgPVxuXHRcdFx0XHRcdGxlYWRpbmc6W3NpZ25hbFtzaWduYWwubGVuZ3RoIC0gMV0sIDFdXG5cdFx0XHRcdFx0dG9wOjdcblx0XHRcdFx0c2lnbmFsLnB1c2ggbm9uRG90XG5cdFx0XHRcdGV4cG9ydHMubGF5b3V0KClcdFxuXHRcdGNhcnJpZXIgPSBuZXcgZXhwb3J0cy5UZXh0IHN0eWxlOlwic3RhdHVzQmFyQ2FycmllclwiLCB0ZXh0OnNldHVwLmNhcnJpZXIsIHN1cGVyTGF5ZXI6c3RhdHVzQmFyQkcsIGZvbnRTaXplOjEyLCBjb2xvcjpAY29sb3IsIG5hbWU6XCJjYXJyaWVyXCIsIHRleHRUcmFuc2Zvcm06XCJjYXBpdGFsaXplXCJcblx0XHRjYXJyaWVyLmNvbnN0cmFpbnRzID0gXG5cdFx0XHRsZWFkaW5nOltzaWduYWxbc2lnbmFsLmxlbmd0aCAtIDFdLCA3XVxuXHRcdFx0dG9wOjNcblx0XHRleHBvcnRzLmxheW91dCgpXG5cdFx0aWYgc2V0dXAuY2FycmllclxuXHRcdFx0bmV0d29yayA9IG5ldyBleHBvcnRzLlRleHQgc3R5bGU6XCJzdGF0dXNCYXJOZXR3b3JrXCIsIHRleHQ6c2V0dXAubmV0d29yaywgc3VwZXJMYXllcjpzdGF0dXNCYXJCRywgZm9udFNpemU6MTIsIGNvbG9yOkBjb2xvciwgbmFtZTpcIm5ldHdvcmtcIiwgdGV4dFRyYW5zZm9ybTpcInVwcGVyY2FzZVwiXG5cdFx0XHRuZXR3b3JrLmNvbnN0cmFpbnRzID1cblx0XHRcdFx0bGVhZGluZzpbY2FycmllciwgNV1cblx0XHRcdFx0dG9wOjNcblx0XHRpZiBzZXR1cC5jYXJyaWVyID09IFwiXCIgfHwgc2V0dXAuY2FycmllciA9PSBcIndpZmlcIlxuXHRcdFx0bmV0d29yayA9IG5ldyBMYXllciB3aWR0aDpleHBvcnRzLnB4KDE0KSwgaGVpZ2h0OmV4cG9ydHMucHgoMTApLCBzdXBlckxheWVyOnN0YXR1c0JhckJHLCBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiLCBuYW1lOlwibmV0d29ya1wiXG5cdFx0XHRuZXR3b3JrLmh0bWwgPSBcIjw/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyc/PlxuXHRcdFx0XHQ8c3ZnIHdpZHRoPScje2V4cG9ydHMucHgoMTQpfXB4JyBoZWlnaHQ9JyN7ZXhwb3J0cy5weCgxMCl9cHgnIHZpZXdCb3g9JzAgMCAxNCAxMCcgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJz5cblx0XHRcdFx0ICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy42LjEgKDI2MzEzKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHRcdFx0ICAgIDx0aXRsZT5XaS1GaTwvdGl0bGU+XG5cdFx0XHRcdCAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHRcdFx0ICAgIDxkZWZzPjwvZGVmcz5cblx0XHRcdFx0ICAgIDxnIGlkPSdQYWdlLTEnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnPlxuXHRcdFx0XHQgICAgICAgIDxnIGlkPSdTdGF0dXMtQmFyL0JsYWNrL0NoYXJnaW5nJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtODcuMDAwMDAwLCAtNS4wMDAwMDApJyBmaWxsPScje0Bjb2xvcn0nPlxuXHRcdFx0XHQgICAgICAgICAgICA8cGF0aCBkPSdNOTYuMTQ0NDIwOCwxMi40Mzg1MDQzIEM5NS42MjYzNzQsMTEuODQ1NDQ1NiA5NC44NTIzNjE2LDExLjQ2ODkxMTkgOTMuOTg3NTYzLDExLjQ2ODkxMTkgQzkzLjEzOTAwNzMsMTEuNDY4OTExOSA5Mi4zNzc4NTk0LDExLjgzMTQzNDEgOTEuODYwMTY1MiwxMi40MDUzMTc3IEw5NC4wMjI1MzkxLDE0LjUgTDk2LjE0NDQyMDgsMTIuNDM4NTA0MyBaIE05OC4zMjM0OTY0LDEwLjMyMTQ0MjUgQzk3LjI0NDc3OTQsOS4xOTE3NDU2MyA5NS43MDE0Mzg3LDguNDg0NDU1OTYgOTMuOTg3NTYzLDguNDg0NDU1OTYgQzkyLjI4ODI3MjMsOC40ODQ0NTU5NiA5MC43NTY2MjY0LDkuMTc5NzU4OTMgODkuNjc5MjY5OCwxMC4yOTI2OTM2IEw5MC43NjkyOTg3LDExLjM0ODYgQzkxLjU2NzIwNSwxMC41MDUzNzA4IDkyLjcxMzY0OCw5Ljk3NjY4Mzk0IDkzLjk4NzU2Myw5Ljk3NjY4Mzk0IEM5NS4yNzY4ODM2LDkuOTc2NjgzOTQgOTYuNDM1NjMwNSwxMC41MTgyMzUgOTcuMjM0NjIxNSwxMS4zNzkzMjkzIEw5OC4zMjM0OTY0LDEwLjMyMTQ0MjUgTDk4LjMyMzQ5NjQsMTAuMzIxNDQyNSBaIE0xMDAuNSw4LjIwNjg3OTMzIEM5OC44NjI5NTc4LDYuNTM5NDM2NzIgOTYuNTUwNTY5OSw1LjUgOTMuOTg3NTYzLDUuNSBDOTEuNDM3NTEwMyw1LjUgODkuMTM1NTQ5Niw2LjUyODk1NjA1IDg3LjUsOC4xODE2NDQzMSBMODguNTg5NTU3OSw5LjIzNzA5NDQxIEM4OS45NDYwNzk4LDcuODU0MzE2NTUgOTEuODYyODkyMSw2Ljk5MjIyNzk4IDkzLjk4NzU2Myw2Ljk5MjIyNzk4IEM5Ni4xMjYwMDI2LDYuOTkyMjI3OTggOTguMDUzODgwOSw3Ljg2NTUyNjA5IDk5LjQxMTg2OTgsOS4yNjQwNDI3MiBMMTAwLjUsOC4yMDY4NzkzMyBaJyBpZD0nV2ktRmknPjwvcGF0aD5cblx0XHRcdFx0ICAgICAgICA8L2c+XG5cdFx0XHRcdCAgICA8L2c+XG5cdFx0XHRcdDwvc3ZnPlwiXG5cdFx0XHRuZXR3b3JrLmNvbnN0cmFpbnRzID0gXG5cdFx0XHRcdGxlYWRpbmc6W3NpZ25hbFtzaWduYWwubGVuZ3RoIC0gMV0sIDddXG5cdFx0XHRcdHRvcDpAdG9wQ29uc3RyYWludFxuXHRiYXR0ZXJ5SWNvbiA9IG5ldyBMYXllciB3aWR0aDpleHBvcnRzLnB4KDI1KSwgaGVpZ2h0OmV4cG9ydHMucHgoMTApLCBzdXBlckxheWVyOnN0YXR1c0JhckJHLCBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiLCBuYW1lOlwiYmF0dGVyeUljb25cIlxuXHRpZiBzZXR1cC5iYXR0ZXJ5ID4gNzAgXG5cdFx0YmF0dGVyeUljb24uaHRtbCA9IFwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdFx0XHQ8c3ZnIHdpZHRoPScje2V4cG9ydHMucHgoMjUpfXB4JyBoZWlnaHQ9JyN7ZXhwb3J0cy5weCgxMCl9cHgnIHZpZXdCb3g9JzAgMCAyNSAxMCcgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJz5cblx0XHRcdCAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNi4xICgyNjMxMykgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdFx0XHQgICAgPHRpdGxlPkJhdHRlcnk8L3RpdGxlPlxuXHRcdFx0ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdFx0ICAgIDxkZWZzPjwvZGVmcz5cblx0XHRcdCAgICA8ZyBpZD0nUGFnZS0xJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJz5cblx0XHRcdCAgICAgICAgPGcgaWQ9J1N0YXR1cy1CYXIvQmxhY2svMTAwJScgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTM0NS4wMDAwMDAsIC01LjAwMDAwMCknIGZpbGw9JyN7QGNvbG9yfSc+XG5cdFx0XHQgICAgICAgICAgICA8cGF0aCBkPSdNMzQ2LjQ5MzcxMyw1LjUgQzM0NS42Njg3NTgsNS41IDM0NSw2LjE2ODAyMTU1IDM0NSw3LjAwNTMwMzI0IEwzNDUsMTMuNDk0Njk2OCBDMzQ1LDE0LjMyNjA1MjggMzQ1LjY3MzM4LDE1IDM0Ni40OTM3MTMsMTUgTDM2Ni4wMDYyODcsMTUgQzM2Ni44MzEyNDIsMTUgMzY3LjUsMTQuMzMxOTc4NCAzNjcuNSwxMy40OTQ2OTY4IEwzNjcuNSw3LjAwNTMwMzI0IEMzNjcuNSw2LjE3Mzk0NzIyIDM2Ni44MjY2Miw1LjUgMzY2LjAwNjI4Nyw1LjUgTDM0Ni40OTM3MTMsNS41IFogTTM2OCw4LjUgTDM2OCwxMiBMMzY4Ljc1LDEyIEMzNjkuMTY0MjE0LDEyIDM2OS41LDExLjY2NDQwNTMgMzY5LjUsMTEuMjU3NzQgTDM2OS41LDkuMjQyMjU5OTggQzM2OS41LDguODMyMzIxMTEgMzY5LjE2NzEwMSw4LjUgMzY4Ljc1LDguNSBMMzY4LDguNSBaIE0zNDYuNTA4MTUyLDYgQzM0NS45NTEzNjUsNiAzNDUuNSw2LjQ1Njk5NjkyIDM0NS41LDcuMDA4NDQwNTUgTDM0NS41LDEzLjQ5MTU1OTQgQzM0NS41LDE0LjA0ODUwNTggMzQ1Ljk0OTA1OCwxNC41IDM0Ni41MDgxNTIsMTQuNSBMMzY1Ljk5MTg0OCwxNC41IEMzNjYuNTQ4NjM1LDE0LjUgMzY3LDE0LjA0MzAwMzEgMzY3LDEzLjQ5MTU1OTQgTDM2Nyw3LjAwODQ0MDU1IEMzNjcsNi40NTE0OTQyMiAzNjYuNTUwOTQyLDYgMzY1Ljk5MTg0OCw2IEwzNDYuNTA4MTUyLDYgWiBNMzQ2LjUwNjc0NCw2LjUgQzM0Ni4yMjY4NzcsNi41IDM0Niw2LjcxNjM3MjAxIDM0Niw2Ljk5MjA5NTk1IEwzNDYsMTMuNTA3OTA0MSBDMzQ2LDEzLjc3OTY4MTEgMzQ2LjIzMDIyNSwxNCAzNDYuNTA2NzQ0LDE0IEwzNjUuOTkzMjU2LDE0IEMzNjYuMjczMTIzLDE0IDM2Ni41LDEzLjc4MzYyOCAzNjYuNSwxMy41MDc5MDQxIEwzNjYuNSw2Ljk5MjA5NTk1IEMzNjYuNSw2LjcyMDMxODg2IDM2Ni4yNjk3NzUsNi41IDM2NS45OTMyNTYsNi41IEwzNDYuNTA2NzQ0LDYuNSBaJyBpZD0nQmF0dGVyeSc+PC9wYXRoPlxuXHRcdFx0ICAgICAgICA8L2c+XG5cdFx0XHQgICAgPC9nPlxuXHRcdFx0PC9zdmc+XCJcblx0aWYgc2V0dXAuYmF0dGVyeSA8PSA3MCAmJiBzZXR1cC5iYXR0ZXJ5ID4gMjBcblx0XHRiYXR0ZXJ5SWNvbi5odG1sID0gXCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0XHRcdDxzdmcgd2lkdGg9JyN7ZXhwb3J0cy5weCgyNSl9cHgnIGhlaWdodD0nI3tleHBvcnRzLnB4KDEwKX1weCcgdmlld0JveD0nMCAwIDI1IDEwJyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnPlxuXHRcdFx0ICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy42LjEgKDI2MzEzKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHRcdCAgICA8dGl0bGU+QmF0dGVyeTwvdGl0bGU+XG5cdFx0XHQgICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0XHQgICAgPGRlZnM+PC9kZWZzPlxuXHRcdFx0ICAgIDxnIGlkPSdQYWdlLTEnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnPlxuXHRcdFx0ICAgICAgICA8ZyBpZD0nU3RhdHVzLUJhci9XaGl0ZS8xMDAlJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtMzQ1LjAwMDAwMCwgLTUuMDAwMDAwKScgZmlsbD0nI3tAY29sb3J9Jz5cblx0XHRcdCAgICAgICAgICAgIDxwYXRoIGQ9J00zNDYuNDkzNzEzLDUuNSBDMzQ1LjY2ODc1OCw1LjUgMzQ1LDYuMTY4MDIxNTUgMzQ1LDcuMDA1MzAzMjQgTDM0NSwxMy40OTQ2OTY4IEMzNDUsMTQuMzI2MDUyOCAzNDUuNjczMzgsMTUgMzQ2LjQ5MzcxMywxNSBMMzY2LjAwNjI4NywxNSBDMzY2LjgzMTI0MiwxNSAzNjcuNSwxNC4zMzE5Nzg0IDM2Ny41LDEzLjQ5NDY5NjggTDM2Ny41LDcuMDA1MzAzMjQgQzM2Ny41LDYuMTczOTQ3MjIgMzY2LjgyNjYyLDUuNSAzNjYuMDA2Mjg3LDUuNSBMMzQ2LjQ5MzcxMyw1LjUgWiBNMzY4LDguNSBMMzY4LDEyIEwzNjguNzUsMTIgQzM2OS4xNjQyMTQsMTIgMzY5LjUsMTEuNjY0NDA1MyAzNjkuNSwxMS4yNTc3NCBMMzY5LjUsOS4yNDIyNTk5OCBDMzY5LjUsOC44MzIzMjExMSAzNjkuMTY3MTAxLDguNSAzNjguNzUsOC41IEwzNjgsOC41IFogTTM0Ni41MDgxNTIsNiBDMzQ1Ljk1MTM2NSw2IDM0NS41LDYuNDU2OTk2OTIgMzQ1LjUsNy4wMDg0NDA1NSBMMzQ1LjUsMTMuNDkxNTU5NCBDMzQ1LjUsMTQuMDQ4NTA1OCAzNDUuOTQ5MDU4LDE0LjUgMzQ2LjUwODE1MiwxNC41IEwzNjUuOTkxODQ4LDE0LjUgQzM2Ni41NDg2MzUsMTQuNSAzNjcsMTQuMDQzMDAzMSAzNjcsMTMuNDkxNTU5NCBMMzY3LDcuMDA4NDQwNTUgQzM2Nyw2LjQ1MTQ5NDIyIDM2Ni41NTA5NDIsNiAzNjUuOTkxODQ4LDYgTDM0Ni41MDgxNTIsNiBaIE0zNDYuNTAxMjMxLDYuNSBDMzQ2LjIyNDQwOSw2LjUgMzQ2LDYuNzE2MzcyMDEgMzQ2LDYuOTkyMDk1OTUgTDM0NiwxMy41MDc5MDQxIEMzNDYsMTMuNzc5NjgxMSAzNDYuMjI5NzUxLDE0IDM0Ni41MDEyMzEsMTQgTDM1Ni40OTg3NjksMTQgQzM1Ni43NzU1OTEsMTQgMzU3LDEzLjc4MzYyOCAzNTcsMTMuNTA3OTA0MSBMMzU3LDYuOTkyMDk1OTUgQzM1Nyw2LjcyMDMxODg2IDM1Ni43NzAyNDksNi41IDM1Ni40OTg3NjksNi41IEwzNDYuNTAxMjMxLDYuNSBaJyBpZD0nQmF0dGVyeSc+PC9wYXRoPlxuXHRcdFx0ICAgICAgICA8L2c+XG5cdFx0XHQgICAgPC9nPlxuXHRcdFx0PC9zdmc+XCJcblx0aWYgc2V0dXAuYmF0dGVyeSA8PSAyMFxuXHRcdGJhdHRlcnlJY29uLmh0bWwgPSBcIjw/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyc/PlxuXHRcdFx0PHN2ZyB3aWR0aD0nI3tleHBvcnRzLnB4KDI1KX1weCcgaGVpZ2h0PScje2V4cG9ydHMucHgoMTApfXB4JyB2aWV3Qm94PScwIDAgMjUgMTAnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayc+XG5cdFx0XHQgICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjYuMSAoMjYzMTMpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdFx0ICAgIDx0aXRsZT5CYXR0ZXJ5PC90aXRsZT5cblx0XHRcdCAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHRcdCAgICA8ZGVmcz48L2RlZnM+XG5cdFx0XHQgICAgPGcgaWQ9J1BhZ2UtMScgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCc+XG5cdFx0XHQgICAgICAgIDxnIGlkPSdTdGF0dXMtQmFyL1doaXRlLzEwMCUnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC0zNDUuMDAwMDAwLCAtNS4wMDAwMDApJyBmaWxsPScje0Bjb2xvcn0nPlxuXHRcdFx0ICAgICAgICAgICAgPHBhdGggZD0nTTM0Ni40OTM3MTMsNS41IEMzNDUuNjY4NzU4LDUuNSAzNDUsNi4xNjgwMjE1NSAzNDUsNy4wMDUzMDMyNCBMMzQ1LDEzLjQ5NDY5NjggQzM0NSwxNC4zMjYwNTI4IDM0NS42NzMzOCwxNSAzNDYuNDkzNzEzLDE1IEwzNjYuMDA2Mjg3LDE1IEMzNjYuODMxMjQyLDE1IDM2Ny41LDE0LjMzMTk3ODQgMzY3LjUsMTMuNDk0Njk2OCBMMzY3LjUsNy4wMDUzMDMyNCBDMzY3LjUsNi4xNzM5NDcyMiAzNjYuODI2NjIsNS41IDM2Ni4wMDYyODcsNS41IEwzNDYuNDkzNzEzLDUuNSBaIE0zNjgsOC41IEwzNjgsMTIgTDM2OC43NSwxMiBDMzY5LjE2NDIxNCwxMiAzNjkuNSwxMS42NjQ0MDUzIDM2OS41LDExLjI1Nzc0IEwzNjkuNSw5LjI0MjI1OTk4IEMzNjkuNSw4LjgzMjMyMTExIDM2OS4xNjcxMDEsOC41IDM2OC43NSw4LjUgTDM2OCw4LjUgWiBNMzQ2LjUwODE1Miw2IEMzNDUuOTUxMzY1LDYgMzQ1LjUsNi40NTY5OTY5MiAzNDUuNSw3LjAwODQ0MDU1IEwzNDUuNSwxMy40OTE1NTk0IEMzNDUuNSwxNC4wNDg1MDU4IDM0NS45NDkwNTgsMTQuNSAzNDYuNTA4MTUyLDE0LjUgTDM2NS45OTE4NDgsMTQuNSBDMzY2LjU0ODYzNSwxNC41IDM2NywxNC4wNDMwMDMxIDM2NywxMy40OTE1NTk0IEwzNjcsNy4wMDg0NDA1NSBDMzY3LDYuNDUxNDk0MjIgMzY2LjU1MDk0Miw2IDM2NS45OTE4NDgsNiBMMzQ2LjUwODE1Miw2IFogTTM0Ni40OTA0NzksNi41IEMzNDYuMjE5NTk1LDYuNSAzNDYsNi43MTYzNzIwMSAzNDYsNi45OTIwOTU5NSBMMzQ2LDEzLjUwNzkwNDEgQzM0NiwxMy43Nzk2ODExIDM0Ni4yMTUwNTcsMTQgMzQ2LjQ5MDQ3OSwxNCBMMzQ5LjUwOTUyMSwxNCBDMzQ5Ljc4MDQwNSwxNCAzNTAsMTMuNzgzNjI4IDM1MCwxMy41MDc5MDQxIEwzNTAsNi45OTIwOTU5NSBDMzUwLDYuNzIwMzE4ODYgMzQ5Ljc4NDk0Myw2LjUgMzQ5LjUwOTUyMSw2LjUgTDM0Ni40OTA0NzksNi41IFonIGlkPSdCYXR0ZXJ5Jz48L3BhdGg+XG5cdFx0XHQgICAgICAgIDwvZz5cblx0XHRcdCAgICA8L2c+XG5cdFx0XHQ8L3N2Zz5cIlxuXHRiYXR0ZXJ5SWNvbi5jb25zdHJhaW50cyA9XG5cdFx0dHJhaWxpbmcgOiA3XG5cdFx0dG9wOkB0b3BDb25zdHJhaW50XG5cdGJhdHRlcnlQZXJjZW50ID0gbmV3IGV4cG9ydHMuVGV4dCBzdHlsZTpcInN0YXR1c0JhckJhdHRlcnlQZXJjZW50XCIsIHRleHQ6c2V0dXAuYmF0dGVyeSArIFwiJVwiLCBzdXBlckxheWVyOnN0YXR1c0JhckJHLCBmb250U2l6ZToxMiwgY29sb3I6QGNvbG9yLCBuYW1lOlwiYmF0dGVyeVBlcmNlbnRcIlxuXHRiYXR0ZXJ5UGVyY2VudC5jb25zdHJhaW50cyA9IFxuXHRcdHRyYWlsaW5nOiBbYmF0dGVyeUljb24sIDNdXG5cdFx0dG9wOjNcblx0Ymx1ZXRvb3RoID0gbmV3IExheWVyIHdpZHRoOmV4cG9ydHMucHgoOCksIGhlaWdodDpleHBvcnRzLnB4KDE1KSwgc3VwZXJMYXllcjpzdGF0dXNCYXJCRywgb3BhY2l0eTouNSwgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIiwgbmFtZTpcImJsdWV0b290aFwiXG5cdGJsdWV0b290aC5odG1sID0gXCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0XHQ8c3ZnIHdpZHRoPScje2V4cG9ydHMucHgoOCl9cHgnIGhlaWdodD0nI3tleHBvcnRzLnB4KDE1KX1weCcgdmlld0JveD0nMCAwIDggMTUnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayc+XG5cdFx0ICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy42LjEgKDI2MzEzKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHQgICAgPHRpdGxlPkJsdWV0b290aDwvdGl0bGU+XG5cdFx0ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdCAgICA8ZGVmcz48L2RlZnM+XG5cdFx0ICAgIDxnIGlkPSdQYWdlLTEnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnPlxuXHRcdCAgICAgICAgPGcgaWQ9J1N0YXR1cy1JY29ucy0oV2hpdGUpJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtMTM3LjAwMDAwMCwgMC4wMDAwMDApJyBmaWxsPScje0Bjb2xvcn0nPlxuXHRcdCAgICAgICAgICAgIDxwYXRoIGQ9J00xNDAuNSwxNC41IEwxNDUsMTAuMjUgTDE0MS44LDcuNSBMMTQ1LDQuNzUgTDE0MC41LDAuNSBMMTQwLjUsNi4wNzE0Mjg1NyBMMTM3LjgsMy43NSBMMTM3LDQuNSBMMTQwLjI1ODMzMyw3LjM3NSBMMTM3LDEwLjI1IEwxMzcuOCwxMSBMMTQwLjUsOC42Nzg1NzE0MyBMMTQwLjUsMTQuNSBaIE0xNDEuNSwzIEwxNDMuMzY2NjY3LDQuNzUgTDE0MS41LDYuMjUgTDE0MS41LDMgWiBNMTQxLjUsOC41IEwxNDMuMzY2NjY3LDEwLjI1IEwxNDEuNSwxMiBMMTQxLjUsOC41IFonIGlkPSdCbHVldG9vdGgnPjwvcGF0aD5cblx0XHQgICAgICAgIDwvZz5cblx0XHQgICAgPC9nPlxuXHRcdDwvc3ZnPlwiXG5cdGJsdWV0b290aC5jb25zdHJhaW50cyA9IFxuXHRcdHRvcDogM1xuXHRcdHRyYWlsaW5nOiBbYmF0dGVyeVBlcmNlbnQsIDddXG5cdGV4cG9ydHMubGF5b3V0KClcblx0cmV0dXJuIHtcblx0XHRhbGw6c3RhdHVzQmFyQkdcblx0XHRiYXR0ZXJ5UGVyY2VudDpiYXR0ZXJ5UGVyY2VudFxuXHRcdGJhdHRlcnlJY29uOmJhdHRlcnlJY29uXG5cdFx0c2lnbmFsOiBzaWduYWxcblx0XHRjYXJyaWVyOmNhcnJpZXJcblx0XHRuZXR3b3JrOm5ldHdvcmtcblx0XHR0aW1lOnRpbWVcblx0XHRibHVldG9vdGg6Ymx1ZXRvb3RoXG5cdH1cblxuXG5leHBvcnRzLktleWJvYXJkID0gKGFycmF5KSAtPlxuXHRpZiBhcnJheSA9PSB1bmRlZmluZWRcblx0XHRhcnJheSA9IFtdXG5cdGZvciBwcm9wIGluIGRlZmF1bHRzLmtleWJvYXJkUHJvcHNcblx0XHRpZiBhcnJheVtwcm9wXVx0XHRcdFxuXHRcdFx0QFtwcm9wXSA9IGFycmF5W3Byb3BdXG5cdFx0ZWxzZSBcblx0XHRcdEBbcHJvcF0gPSBkZWZhdWx0cy5rZXlib2FyZFByb3BzW3Byb3BdXG5cdGJvYXJkID0gbmV3IExheWVyIGJhY2tncm91bmRDb2xvcjpcIiNEMUQ1REFcIiwgbmFtZTpcImtleWJvYXJkXCJcblx0Ym9hcmQuY29uc3RyYWludHMgPSAoYm90dG9tOjAsIGhlaWdodDoyMTYsIHRyYWlsaW5nOjAsIGxlYWRpbmc6MClcblx0ZXhwb3J0cy5sYXlvdXQoKVxuXHRsZXR0ZXJzQXJyYXkgPSBbXCJxXCIsIFwid1wiLCBcImVcIiwgXCJyXCIsIFwidFwiLCBcInlcIiwgXCJ1XCIsIFwiaVwiLCBcIm9cIiwgXCJwXCIsIFwiYVwiLCBcInNcIiwgXCJkXCIsIFwiZlwiLCBcImdcIiwgXCJoXCIsIFwialwiLCBcImtcIiwgXCJsXCIsIFwielwiLCBcInhcIiwgXCJjXCIsIFwidlwiLCAgXCJiXCIsIFwiblwiLCBcIm1cIl1cblx0a2V5c0FycmF5ID0gW11cblx0c3BhY2VyID0gZXhwb3J0cy5weCg1KVxuXHRpZiBleHBvcnRzLnNjYWxlID09IDMgfHwgZXhwb3J0cy53aWR0aCA9PSA2NDBcblx0XHRzcGFjZXIgPSBleHBvcnRzLnB4KDYpXG5cdHJvd3NNYXAgPSBbXG5cdFx0eyBcblx0XHRcdFwicGFkZGluZ1wiIDogZXhwb3J0cy5weCg0KVxuXHRcdFx0XCJzdGFydEluZGV4XCIgOiAwXG5cdFx0XHRcImVuZEluZGV4XCIgOiA5XG5cdFx0XHRcIm1hcmdpblRvcFwiIDogZXhwb3J0cy5weCgxMClcblx0XHR9LFxuXHRcdHsgXG5cdFx0XHRcInBhZGRpbmdcIiA6IDIyICogZXhwb3J0cy5zY2FsZVxuXHRcdFx0XCJzdGFydEluZGV4XCIgOiAxMFxuXHRcdFx0XCJlbmRJbmRleFwiIDogMThcblx0XHRcdFwibWFyZ2luVG9wXCIgOiAyMiAqIGV4cG9ydHMuc2NhbGVcblx0XHR9LFxuXHRcdHsgXG5cdFx0XHRcInBhZGRpbmdcIiA6IDU5ICogZXhwb3J0cy5zY2FsZVxuXHRcdFx0XCJzdGFydEluZGV4XCIgOiAxOVxuXHRcdFx0XCJlbmRJbmRleFwiIDogMjVcblx0XHRcdFwibWFyZ2luVG9wXCIgOiAzNCAqIGV4cG9ydHMuc2NhbGVcblx0XHR9XG5cdF1cblx0a2V5UG9wVXAgPSBuZXcgTGF5ZXIgd2lkdGg6QGtleVdpZHRoLCBoZWlnaHQ6QGtleUhlaWdodCwgeDpALngtMTYqZXhwb3J0cy5zY2FsZSwgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIiwgc3VwZXJMYXllcjpib2FyZCwgbmFtZTpcImtleSBwb3AgdXBcIlxuXHRib3ggPSBuZXcgTGF5ZXIgYm9yZGVyUmFkaXVzOmV4cG9ydHMucHgoMTApLCBzdXBlckxheWVyOmtleVBvcFVwLCBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiLCBjb2xvcjpcImJsYWNrXCIsIG5hbWU6XCJsZXR0ZXJcIlxuXHRib3guc3R5bGUgPSB7XG5cdFx0XCJmb250LXNpemVcIiA6IDM5ICogZXhwb3J0cy5zY2FsZSArIFwicHhcIlxuXHRcdFwiZm9udC13ZWlnaHRcIiA6IDMwMFxuXHRcdFwiZm9udC1mYW1pbHlcIiA6ICctYXBwbGUtc3lzdGVtLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmJ1xuXHRcdCd0ZXh0LWFsaWduJyA6ICdjZW50ZXInXG5cdFx0J2xpbmUtaGVpZ2h0JyA6IEBsaW5lSGVpZ2h0XG5cdH1cblx0QC5jb2xvciA9IFwid2hpdGVcIlxuXHRwYXRoID0gbmV3IExheWVyIHN1cGVyTGF5ZXI6a2V5UG9wVXAsIGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCIsIG5hbWU6XCJzaGFwZSBwYXRoXCJcblxuXG5cdHNoaWZ0S2V5ID0gbmV3IExheWVyIHN1cGVyTGF5ZXI6Ym9hcmQsIG5hbWU6XCJzaGlmdFwiLCBib3JkZXJSYWRpdXM6ZXhwb3J0cy5weCg1KSwgYmFja2dyb3VuZENvbG9yOlwiI0FBQjNCQ1wiLCBzaGFkb3dZOmV4cG9ydHMucHgoMSksIHNoYWRvd0NvbG9yOlwiIzkyOTQ5OFwiXG5cdHNoaWZ0S2V5LmNvbnN0cmFpbnRzID0gKGJvdHRvbTo1NiwgbGVhZGluZzozLCB3aWR0aDo0MiwgaGVpZ2h0OjQyKVxuXHRzaGlmdEljb24gPSBuZXcgTGF5ZXIgd2lkdGg6ZXhwb3J0cy5weCgyMCksIGhlaWdodDpleHBvcnRzLnB4KDE5KSwgc3VwZXJMYXllcjpzaGlmdEtleSwgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIiwgeDpleHBvcnRzLnB4KDExKSwgeTpleHBvcnRzLnB4KDExKVxuXHRzaGlmdEljb24uaHRtbCA9IFwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdFx0PHN2ZyB3aWR0aD0nI3tleHBvcnRzLnB4KDIwKX1weCcgaGVpZ2h0PScje2V4cG9ydHMucHgoMTgpfXB4JyB2aWV3Qm94PScwIDAgMjAgMTknIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycgeG1sbnM6c2tldGNoPSdodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMnPlxuXHRcdCAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNS4yICgyNTIzNSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdFx0ICAgIDx0aXRsZT5TaGlmdDwvdGl0bGU+XG5cdFx0ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdCAgICA8ZGVmcz48L2RlZnM+XG5cdFx0ICAgIDxnIGlkPSdQYWdlLTEnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIHNrZXRjaDp0eXBlPSdNU1BhZ2UnPlxuXHRcdCAgICAgICAgPGcgaWQ9J0tleWJvYXJkL0xpZ2h0L0xvd2VyJyBza2V0Y2g6dHlwZT0nTVNMYXllckdyb3VwJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtMTQuMDAwMDAwLCAtMTI5LjAwMDAwMCknIGZpbGw9JyMwMzAzMDMnPlxuXHRcdCAgICAgICAgICAgIDxnIGlkPSdUaGlyZC1Sb3cnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDMuMDAwMDAwLCAxMTguMDAwMDAwKScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCc+XG5cdFx0ICAgICAgICAgICAgICAgIDxwYXRoIGQ9J00yMS42NzE5MDA4LDEyLjIzMjU4OTggQzIxLjMwMTAzMiwxMS44Mjc5OTE2IDIwLjY5NDY4OTIsMTEuODMzNDczMSAyMC4zMjg4MTk1LDEyLjIzMjU4OTggTDExLjY5NDcwMjMsMjEuNjUxMjk4MyBDMTAuNzU4NzQ0MSwyMi42NzIzMDggMTEuMTI4NTU0MSwyMy41IDEyLjUwOTc3NTEsMjMuNSBMMTUuOTk5OTk5OSwyMy41MDAwMDAyIEwxNS45OTk5OTk5LDI4LjAwMTQyNDEgQzE1Ljk5OTk5OTksMjguODI5MDY0OCAxNi42NzE2NTU5LDI5LjUwMDAwMDEgMTcuNDk3MTAxLDI5LjUwMDAwMDEgTDI0LjUwMjg5OTIsMjkuNTAwMDAwMSBDMjUuMzI5NzI1MywyOS41MDAwMDAxIDI2LjAwMDAwMDMsMjguODM0OTcwMyAyNi4wMDAwMDAzLDI4LjAwMTQyNDEgTDI2LjAwMDAwMDMsMjMuNTAwMDAwMSBMMjkuNDkwMjI1MSwyMy41MDAwMDAyIEMzMC44NzYzMzU3LDIzLjUwMDAwMDIgMzEuMjQzOTUyMSwyMi42NzUxOTE2IDMwLjMwNTQxNjEsMjEuNjUxMjk4NSBMMjEuNjcxOTAwOCwxMi4yMzI1ODk4IFogTTIxLjM0MTc0OCwxNC4zNjQ1MzE2IEMyMS4xNTMwMDU2LDE0LjE2MzIwNjQgMjAuODQzMzUxNSwxNC4xNjcwOTE0IDIwLjY1ODI1MTQsMTQuMzY0NTMxNiBMMTMuNSwyMS45OTk5OTk4IEwxNy41MDAwMDAxLDIxLjk5OTk5OTkgTDE3LjUwMDAwMDIsMjcuNTA4OTk1NiBDMTcuNTAwMDAwMiwyNy43ODAxNzAzIDE3LjczMjkwMjcsMjguMDAwMDAwOCAxOC4wMDM0MjI5LDI4LjAwMDAwMDggTDIzLjk5NjU3NywyOC4wMDAwMDA4IEMyNC4yNzQ2MDk3LDI4LjAwMDAwMDggMjQuNDk5OTk5NywyNy43NzIxMjAzIDI0LjQ5OTk5OTcsMjcuNTA4OTk1NiBMMjQuNDk5OTk5NywyMS45OTk5OTk5IEwyOC41LDIxLjk5OTk5OTkgTDIxLjM0MTc0OCwxNC4zNjQ1MzE2IFonIGlkPSdTaGlmdCc+PC9wYXRoPlxuXHRcdCAgICAgICAgICAgIDwvZz5cblx0XHQgICAgICAgIDwvZz5cblx0XHQgICAgPC9nPlxuXHRcdDwvc3ZnPlwiXG5cblx0c2hpZnRJY29uLnN0YXRlcy5hZGRcblx0XHRvbjpcblx0XHRcdGh0bWw6IFwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdFx0XHQ8c3ZnIHdpZHRoPScje2V4cG9ydHMucHgoMjApfXB4JyBoZWlnaHQ9JyN7ZXhwb3J0cy5weCgxOCl9cHgnIHZpZXdCb3g9JzAgMCAyMCAxNycgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyB4bWxuczpza2V0Y2g9J2h0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaC9ucyc+XG5cdFx0XHQgICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjUuMiAoMjUyMzUpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdFx0ICAgIDx0aXRsZT5TaGlmdDwvdGl0bGU+XG5cdFx0XHQgICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0XHQgICAgPGRlZnM+PC9kZWZzPlxuXHRcdFx0ICAgIDxnIGlkPSdQYWdlLTEnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIHNrZXRjaDp0eXBlPSdNU1BhZ2UnPlxuXHRcdFx0ICAgICAgICA8ZyBpZD0nS2V5Ym9hcmQvTGlnaHQvVXBwZXInIHNrZXRjaDp0eXBlPSdNU0xheWVyR3JvdXAnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC0xNC4wMDAwMDAsIC0xMzAuMDAwMDAwKScgZmlsbD0nIzAzMDMwMyc+XG5cdFx0XHQgICAgICAgICAgICA8ZyBpZD0nVGhpcmQtUm93JyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgzLjAwMDAwMCwgMTE4LjAwMDAwMCknIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnPlxuXHRcdFx0ICAgICAgICAgICAgICAgIDxwYXRoIGQ9J00yMS43MDUyMzg4LDEzLjIwNTIzODggQzIxLjMxNTc0NjIsMTIuODE1NzQ2MiAyMC42ODU3NTU5LDEyLjgxNDI0NDEgMjAuMjk0NzYxMiwxMy4yMDUyMzg4IEwxMS45MTYwNzY3LDIxLjU4MzkyMzMgQzExLjEzMzk5OTEsMjIuMzY2MDAwOSAxMS4zOTgyNjA2LDIzIDEyLjQ5NzkxMzEsMjMgTDE2LjUsMjMgTDE2LjUsMjguMDA5MjIyIEMxNi41LDI4LjU1NjQxMzYgMTYuOTQ2MzExNCwyOSAxNy40OTc1NDQ2LDI5IEwyNC41MDI0NTU0LDI5IEMyNS4wNTMzODQsMjkgMjUuNSwyOC41NDkwMjQ4IDI1LjUsMjguMDA5MjIyIEwyNS41LDIzIEwyOS41MDIwODY5LDIzIEMzMC42MDU1MDM4LDIzIDMwLjg2NjgyNCwyMi4zNjY4MjQgMzAuMDgzOTIzMywyMS41ODM5MjMzIEwyMS43MDUyMzg4LDEzLjIwNTIzODggWicgaWQ9J1NoaWZ0Jz48L3BhdGg+XG5cdFx0XHQgICAgICAgICAgICA8L2c+XG5cdFx0XHQgICAgICAgIDwvZz5cblx0XHRcdCAgICA8L2c+XG5cdFx0XHQ8L3N2Zz5cIlxuXHRzaGlmdEljb24uc3RhdGVzLmFuaW1hdGlvbk9wdGlvbnMgPVxuICBcdCAgdGltZTogLjAxXG5cbiAgXHRkZWxldGVLZXkgPSBuZXcgTGF5ZXIgc3VwZXJMYXllcjpib2FyZCwgYm9yZGVyUmFkaXVzOmV4cG9ydHMucHgoNSksIGJhY2tncm91bmRDb2xvcjpcIiNBQUIzQkNcIiwgc2hhZG93WTpleHBvcnRzLnB4KDEpLCBzaGFkb3dDb2xvcjpcIiM5Mjk0OThcIlxuICBcdGRlbGV0ZUtleS5jb25zdHJhaW50cyA9IChib3R0b206NTYsIHRyYWlsaW5nOjMsIHdpZHRoOjQyLCBoZWlnaHQ6NDIpXG4gIFx0ZGVsZXRlSWNvbiA9IG5ldyBMYXllciBzdXBlckxheWVyOmRlbGV0ZUtleSwgd2lkdGg6ZXhwb3J0cy5weCgyNCksIGhlaWdodDpleHBvcnRzLnB4KDE4KSwgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIlxuICBcdGRlbGV0ZUljb24uY29uc3RyYWludHMgPSAodG9wOjEzLCBsZWFkaW5nOjEwKVxuXG4gIFx0ZGVsZXRlSWNvbi5zdGF0ZXMuYWRkIFxuICBcdFx0b246IFxuICBcdFx0XHRodG1sOiBcIjw/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyc/PlxuXHRcdFx0XHQ8c3ZnIHdpZHRoPScje2V4cG9ydHMucHgoMjQpfXB4JyBoZWlnaHQ9JyN7ZXhwb3J0cy5weCgxOCl9cHgnIHZpZXdCb3g9JzAgMCAyNCAxOCcgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyB4bWxuczpza2V0Y2g9J2h0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaC9ucyc+XG5cdFx0XHRcdCAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNS4yICgyNTIzNSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdFx0XHRcdCAgICA8dGl0bGU+QmFjazwvdGl0bGU+XG5cdFx0XHRcdCAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHRcdFx0ICAgIDxkZWZzPjwvZGVmcz5cblx0XHRcdFx0ICAgIDxnIGlkPSdQYWdlLTEnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIHNrZXRjaDp0eXBlPSdNU1BhZ2UnPlxuXHRcdFx0XHQgICAgICAgIDxnIGlkPSdLZXlib2FyZC9MaWdodC9VcHBlcicgc2tldGNoOnR5cGU9J01TTGF5ZXJHcm91cCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTMzOS4wMDAwMDAsIC0xMzAuMDAwMDAwKScgZmlsbD0nIzAzMDMwMyc+XG5cdFx0XHRcdCAgICAgICAgICAgIDxnIGlkPSdUaGlyZC1Sb3cnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDMuMDAwMDAwLCAxMTguMDAwMDAwKScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCc+XG5cdFx0XHRcdCAgICAgICAgICAgICAgICA8cGF0aCBkPSdNMzUxLjY0MjY2MywyMC45Nzc2OTAzIEwzNTQuNDY2Nzk1LDE4LjE1MzU1ODUgQzM1NC43NjAxMDYsMTcuODYwMjQ3NiAzNTQuNzYzOTgzLDE3LjM4MTQ5NjIgMzU0LjQ3MTA5LDE3LjA4ODYwMyBDMzU0LjE3NjE1NSwxNi43OTM2Njc3IDM1My43MDE0LDE2Ljc5NzYzMjggMzUzLjQwNjEzNSwxNy4wOTI4OTgzIEwzNTAuNTgyMDAzLDE5LjkxNzAzMDEgTDM0Ny43NTc4NzEsMTcuMDkyODk4MyBDMzQ3LjQ2NDU2LDE2Ljc5OTU4NzQgMzQ2Ljk4NTgwOSwxNi43OTU3MDk3IDM0Ni42OTI5MTYsMTcuMDg4NjAzIEMzNDYuMzk3OTgsMTcuMzgzNTM4MiAzNDYuNDAxOTQ1LDE3Ljg1ODI5MyAzNDYuNjk3MjExLDE4LjE1MzU1ODUgTDM0OS41MjEzNDMsMjAuOTc3NjkwMyBMMzQ2LjY5NzIxMSwyMy44MDE4MjIgQzM0Ni40MDM5LDI0LjA5NTEzMjkgMzQ2LjQwMDAyMiwyNC41NzM4ODQzIDM0Ni42OTI5MTYsMjQuODY2Nzc3NiBDMzQ2Ljk4Nzg1MSwyNS4xNjE3MTI4IDM0Ny40NjI2MDYsMjUuMTU3NzQ3NyAzNDcuNzU3ODcxLDI0Ljg2MjQ4MjIgTDM1MC41ODIwMDMsMjIuMDM4MzUwNCBMMzUzLjQwNjEzNSwyNC44NjI0ODIyIEMzNTMuNjk5NDQ1LDI1LjE1NTc5MzEgMzU0LjE3ODE5NywyNS4xNTk2NzA4IDM1NC40NzEwOSwyNC44NjY3Nzc2IEMzNTQuNzY2MDI1LDI0LjU3MTg0MjMgMzU0Ljc2MjA2LDI0LjA5NzA4NzUgMzU0LjQ2Njc5NSwyMy44MDE4MjIgTDM1MS42NDI2NjMsMjAuOTc3NjkwMyBaIE0zMzcuMDU5MzQ1LDIyLjA1OTM0NDUgQzMzNi40NzQyODUsMjEuNDc0Mjg0NyAzMzYuNDgxMzUxLDIwLjUxODY0ODkgMzM3LjA1OTM0NSwxOS45NDA2NTU1IEwzNDMuNzg5OTE1LDEzLjIxMDA4NTMgQzM0NC4xODIwODQsMTIuODE3OTE2IDM0NC45NDg5MiwxMi41IDM0NS41MDc0ODQsMTIuNSBMMzU2LjAwMjA5OCwxMi41IEMzNTcuOTMzOTM2LDEyLjUgMzU5LjUsMTQuMDY4ODQ3NyAzNTkuNSwxNi4wMDE3OTgzIEwzNTkuNSwyNS45OTgyMDE3IEMzNTkuNSwyNy45MzIxOTE1IDM1Ny45MjMwODgsMjkuNSAzNTYuMDAyMDk4LDI5LjUgTDM0NS41MDc0ODQsMjkuNSBDMzQ0Ljk1MTA2NiwyOS41IDM0NC4xNzcxNjksMjkuMTc3MTY5MyAzNDMuNzg5OTE1LDI4Ljc4OTkxNDggTDMzNy4wNTkzNDUsMjIuMDU5MzQ0NSBaJyBpZD0nQmFjayc+PC9wYXRoPlxuXHRcdFx0XHQgICAgICAgICAgICA8L2c+XG5cdFx0XHRcdCAgICAgICAgPC9nPlxuXHRcdFx0XHQgICAgPC9nPlxuXHRcdFx0XHQ8L3N2Zz5cIlxuXG4gIFx0ZGVsZXRlSWNvbi5zdGF0ZXMuYWRkXG4gIFx0XHRvZmY6IFxuICBcdFx0XHRodG1sOiBcIjw/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyc/PlxuXHRcdDxzdmcgd2lkdGg9JyN7ZXhwb3J0cy5weCgyNCl9cHgnIGhlaWdodD0nI3tleHBvcnRzLnB4KDE4KX1weCcgdmlld0JveD0nMCAwIDI0IDE4JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHhtbG5zOnNrZXRjaD0naHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zJz5cblx0XHQgICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjUuMiAoMjUyMzUpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdCAgICA8dGl0bGU+QmFjazwvdGl0bGU+XG5cdFx0ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdCAgICA8ZGVmcz48L2RlZnM+XG5cdFx0ICAgIDxnIGlkPSdQYWdlLTEnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIHNrZXRjaDp0eXBlPSdNU1BhZ2UnPlxuXHRcdCAgICAgICAgPGcgaWQ9J0tleWJvYXJkL0xpZ2h0L1VwcGVyJyBza2V0Y2g6dHlwZT0nTVNMYXllckdyb3VwJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtMzM5LjAwMDAwMCwgLTEzMC4wMDAwMDApJyBmaWxsPScjMDMwMzAzJz5cblx0XHQgICAgICAgICAgICA8ZyBpZD0nVGhpcmQtUm93JyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgzLjAwMDAwMCwgMTE4LjAwMDAwMCknIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnPlxuXHRcdCAgICAgICAgICAgICAgICA8cGF0aCBkPSdNMzM3LjA1OTM0NSwyMi4wNTkzNDQ1IEMzMzYuNDc0Mjg1LDIxLjQ3NDI4NDcgMzM2LjQ4MTM1MSwyMC41MTg2NDg5IDMzNy4wNTkzNDUsMTkuOTQwNjU1NSBMMzQzLjc4OTkxNSwxMy4yMTAwODUzIEMzNDQuMTgyMDg0LDEyLjgxNzkxNiAzNDQuOTQ4OTIsMTIuNSAzNDUuNTA3NDg0LDEyLjUgTDM1Ni4wMDIwOTgsMTIuNSBDMzU3LjkzMzkzNiwxMi41IDM1OS41LDE0LjA2ODg0NzcgMzU5LjUsMTYuMDAxNzk4MyBMMzU5LjUsMjUuOTk4MjAxNyBDMzU5LjUsMjcuOTMyMTkxNSAzNTcuOTIzMDg4LDI5LjUgMzU2LjAwMjA5OCwyOS41IEwzNDUuNTA3NDg0LDI5LjUgQzM0NC45NTEwNjYsMjkuNSAzNDQuMTc3MTY5LDI5LjE3NzE2OTMgMzQzLjc4OTkxNSwyOC43ODk5MTQ4IEwzMzcuMDU5MzQ1LDIyLjA1OTM0NDUgWiBNMzUxLjY0MjY2MywyMC45Nzc2OTAzIEwzNTQuNDY2Nzk1LDE4LjE1MzU1ODUgQzM1NC43NjAxMDYsMTcuODYwMjQ3NiAzNTQuNzYzOTgzLDE3LjM4MTQ5NjIgMzU0LjQ3MTA5LDE3LjA4ODYwMyBDMzU0LjE3NjE1NSwxNi43OTM2Njc3IDM1My43MDE0LDE2Ljc5NzYzMjggMzUzLjQwNjEzNSwxNy4wOTI4OTgzIEwzNTAuNTgyMDAzLDE5LjkxNzAzMDEgTDM0Ny43NTc4NzEsMTcuMDkyODk4MyBDMzQ3LjQ2NDU2LDE2Ljc5OTU4NzQgMzQ2Ljk4NTgwOSwxNi43OTU3MDk3IDM0Ni42OTI5MTYsMTcuMDg4NjAzIEMzNDYuMzk3OTgsMTcuMzgzNTM4MiAzNDYuNDAxOTQ1LDE3Ljg1ODI5MyAzNDYuNjk3MjExLDE4LjE1MzU1ODUgTDM0OS41MjEzNDMsMjAuOTc3NjkwMyBMMzQ2LjY5NzIxMSwyMy44MDE4MjIgQzM0Ni40MDM5LDI0LjA5NTEzMjkgMzQ2LjQwMDAyMiwyNC41NzM4ODQzIDM0Ni42OTI5MTYsMjQuODY2Nzc3NiBDMzQ2Ljk4Nzg1MSwyNS4xNjE3MTI4IDM0Ny40NjI2MDYsMjUuMTU3NzQ3NyAzNDcuNzU3ODcxLDI0Ljg2MjQ4MjIgTDM1MC41ODIwMDMsMjIuMDM4MzUwNCBMMzUzLjQwNjEzNSwyNC44NjI0ODIyIEMzNTMuNjk5NDQ1LDI1LjE1NTc5MzEgMzU0LjE3ODE5NywyNS4xNTk2NzA4IDM1NC40NzEwOSwyNC44NjY3Nzc2IEMzNTQuNzY2MDI1LDI0LjU3MTg0MjMgMzU0Ljc2MjA2LDI0LjA5NzA4NzUgMzU0LjQ2Njc5NSwyMy44MDE4MjIgTDM1MS42NDI2NjMsMjAuOTc3NjkwMyBaIE0zMzguNzA5NzIsMjEuNzA5NzE5NSBDMzM4LjMxNzc1MiwyMS4zMTc3NTIyIDMzOC4zMTg5NjUsMjAuNjgxMDM0OSAzMzguNzA5NzIsMjAuMjkwMjgwNSBMMzQ0LjY0MzI0NSwxNC4zNTY3NTQ3IEMzNDQuODQwMjc2LDE0LjE1OTcyNDUgMzQ1LjIyNTYzOSwxNCAzNDUuNDkzNzQxLDE0IEwzNTUuOTk3MjM5LDE0IEMzNTcuMTAzMzMzLDE0IDM1Ny45OTk5OTksMTQuODk3MDYwMSAzNTcuOTk5OTk5LDE2LjAwNTg1ODYgTDM1Ny45OTk5OTksMjUuOTk0MTQxMiBDMzU3Ljk5OTk5OSwyNy4xMDE5NDY0IDM1Ny4xMDY0NTcsMjcuOTk5OTk5OSAzNTUuOTk3MjM5LDI3Ljk5OTk5OTkgTDM0NS40OTM3NDEsMjggQzM0NS4yMjEwNTYsMjggMzQ0Ljg0MDY0MywyNy44NDA2NDMxIDM0NC42NDMyNDYsMjcuNjQzMjQ1MyBMMzM4LjcwOTcyLDIxLjcwOTcxOTUgWicgaWQ9J0JhY2snPjwvcGF0aD5cblx0XHQgICAgICAgICAgICA8L2c+XG5cdFx0ICAgICAgICA8L2c+XG5cdFx0ICAgIDwvZz5cblx0XHQ8L3N2Zz5cIlxuXG5cbiAgXHRkZWxldGVLZXkub24gRXZlbnRzLlRvdWNoU3RhcnQsIC0+XG4gIFx0XHRkZWxldGVLZXkuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiXG4gIFx0XHRkZWxldGVJY29uLnN0YXRlcy5zd2l0Y2hJbnN0YW50KFwib25cIilcblxuICBcdGRlbGV0ZUtleS5vbiBFdmVudHMuVG91Y2hFbmQsIC0+XG4gIFx0XHRkZWxldGVLZXkuYmFja2dyb3VuZENvbG9yID0gXCIjQUFCM0JDXCJcbiAgXHRcdGRlbGV0ZUljb24uc3RhdGVzLnN3aXRjaEluc3RhbnQoXCJvZmZcIilcblxuICBcdGRlbGV0ZUljb24uc3RhdGVzLnN3aXRjaEluc3RhbnQoXCJvZmZcIilcblxuXHRzaGlmdEljb24ub24gRXZlbnRzLkNsaWNrLCAtPlxuXHRcdHNoaWZ0SWNvbi5zdGF0ZXMubmV4dCgpXG5cdFx0aWYgc2hpZnRJY29uLnN0YXRlcy5zdGF0ZSA9PSBcIm9uXCJcblx0XHRcdHNoaWZ0S2V5LmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIlxuXHRcdFx0Zm9yIGtleSBpbiBrZXlzQXJyYXlcblx0XHRcdFx0a2V5LnN0eWxlWyd0ZXh0LXRyYW5zZm9ybSddID0gJ3VwcGVyY2FzZSdcblx0XHRcdGJveC5zdHlsZVsndGV4dC10cmFuc2Zvcm0nXSA9ICd1cHBlcmNhc2UnXG5cdFx0ZWxzZSBcblx0XHRcdHNoaWZ0S2V5LmJhY2tncm91bmRDb2xvciA9IFwiI0FBQjNCQ1wiXG5cdFx0XHRmb3Iga2V5IGluIGtleXNBcnJheVxuXHRcdFx0XHRrZXkuc3R5bGVbXCJ0ZXh0LXRyYW5zZm9ybVwiXSA9ICdsb3dlcmNhc2UnXG5cdFx0XHRib3guc3R5bGVbXCJ0ZXh0LXRyYW5zZm9ybVwiXSA9ICdsb3dlcmNhc2UnXG5cblx0Zm9yIGxldHRlciBpbiBsZXR0ZXJzQXJyYXlcblx0XHRpbmRleCA9IGxldHRlcnNBcnJheS5pbmRleE9mKGxldHRlcikgXG5cdFx0a2V5ID0gbmV3IExheWVyIG5hbWU6bGV0dGVyLCBzdXBlckxheWVyOmJvYXJkLCBib3JkZXJSYWRpdXM6NSpleHBvcnRzLnNjYWxlLCBiYWNrZ3JvdW5kQ29sb3I6XCJ3aGl0ZVwiLCBjb2xvcjpcImJsYWNrXCIsIHNoYWRvd1k6ZXhwb3J0cy5weCgxKSwgc2hhZG93Q29sb3I6XCIjOTI5NDk4XCJcblx0XHRrZXlQb3BVcC5icmluZ1RvRnJvbnQoKVxuXHRcdGJveC5icmluZ1RvRnJvbnQoKVxuXHRcdGlmIGV4cG9ydHMuc2NhbGUgPT0gMlxuXHRcdFx0a2V5LmNvbnN0cmFpbnRzID0gKHdpZHRoOjMyLCBoZWlnaHQ6NDIpXG5cdFx0XHRrZXlQb3BVcC5jb25zdHJhaW50cyA9ICh3aWR0aDo2NSwgaGVpZ2h0OjEyMilcblx0XHRcdHBhdGguY29uc3RyYWludHMgPSAod2lkdGg6NjUsIGhlaWdodDogMTIyKVxuXHRcdFx0cGF0aC55ID0gMTBcblx0XHRcdEBwYXRoV2lkdGggPSBleHBvcnRzLnB4KDY1KVxuXHRcdFx0QHBhdGhIZWlnaHQgPSBleHBvcnRzLnB4KDEyMilcblx0XHRcdEBrZXlIZWlnaHQgPSBleHBvcnRzLnB4KDMyKVxuXHRcdFx0QGtleVdpZHRoID0gZXhwb3J0cy5weCg0NClcblx0XHRcdEBsaW5lSGVpZ2h0ID0gQGtleVdpZHRoIC0gMTcgKyBcInB4XCJcblx0XHRcdGJveC5jb25zdHJhaW50cyA9ICh3aWR0aDozMiwgaGVpZ2h0OjQ0KVxuXHRcdFx0Ym94LmNlbnRlclgoKVxuXHRcdFx0Ym94LnkgPSBleHBvcnRzLnB4KDI4KVxuXG5cdFx0aWYgZXhwb3J0cy5zY2FsZSA9PSAzXG5cdFx0XHRrZXkuY29uc3RyYWludHMgPSAod2lkdGg6MzUsIGhlaWdodDo0Nilcblx0XHRcdGtleVBvcFVwLmNvbnN0cmFpbnRzID0gKHdpZHRoOjY4LCBoZWlnaHQ6MTIyKVxuXHRcdFx0QGtleUhlaWdodCA9IGV4cG9ydHMucHgoMTIyKVxuXHRcdFx0QGtleVdpZHRoID0gZXhwb3J0cy5weCg2NSlcblx0XHRcdEBsaW5lSGVpZ2h0ID0gQGtleVdpZHRoICsgXCJweFwiXG5cdFx0XHRAcGF0aFdpZHRoID0gZXhwb3J0cy5weCg2OClcblx0XHRcdEBwYXRoSGVpZ2h0ID0gZXhwb3J0cy5weCgxMjgpXG5cdFx0XHRwYXRoLnkgPSAwXG5cblxuXHRcdFx0Ym94LmNvbnN0cmFpbnRzID0gKHdpZHRoOjM1LCBoZWlnaHQ6NDYpXG5cdFx0XHRib3guY2VudGVyWCgpXG5cdFx0XHRib3gueSA9IGV4cG9ydHMucHgoMjgpXG5cblx0XHRpZiBleHBvcnRzLndpZHRoID09IDY0MFxuXHRcdFx0a2V5LmNvbnN0cmFpbnRzID0gKHdpZHRoOjI2LCBoZWlnaHQ6MzkpXG5cblx0XHRrZXlQb3BVcC52aXNpYmxlID0gZmFsc2VcblxuXHRcdGV4cG9ydHMubGF5b3V0KClcblx0XHRrZXkuc3R5bGUgPSB7XG5cdFx0XHRcImZvbnQtc2l6ZVwiIDogMjUgKiBleHBvcnRzLnNjYWxlICsgXCJweFwiXG5cdFx0XHRcImZvbnQtd2VpZ2h0XCIgOiAzMDBcblx0XHRcdFwiZm9udC1mYW1pbHlcIiA6ICctYXBwbGUtc3lzdGVtLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmJ1xuXHRcdFx0J3RleHQtYWxpZ24nIDogJ2NlbnRlcidcblx0XHRcdCdsaW5lLWhlaWdodCcgOiBrZXkuaGVpZ2h0IC0gZXhwb3J0cy5weCgyKSArIFwicHhcIlxuXHRcdH1cblx0XHRrZXkuaHRtbCA9IGxldHRlclxuXHRcdGlmIGluZGV4IDw9IHJvd3NNYXBbMF0uZW5kSW5kZXhcblx0XHRcdHJvd0luZGV4ID0gaW5kZXggLSByb3dzTWFwWzBdLnN0YXJ0SW5kZXhcblx0XHRcdGtleS54ID0gcm93c01hcFswXS5wYWRkaW5nICsgKHJvd0luZGV4KnNwYWNlcikgKyAocm93SW5kZXgqa2V5LndpZHRoKVxuXHRcdFx0a2V5LnkgPSByb3dzTWFwWzBdLm1hcmdpblRvcFxuXHRcdGlmIGluZGV4ID4gcm93c01hcFswXS5lbmRJbmRleCAmJiBpbmRleCA8PSByb3dzTWFwWzFdLmVuZEluZGV4XG5cdFx0XHRyb3dJbmRleCA9IGluZGV4IC0gcm93c01hcFsxXS5zdGFydEluZGV4XG5cdFx0XHRrZXkueCA9IHJvd3NNYXBbMV0ucGFkZGluZyArIChyb3dJbmRleCpzcGFjZXIpICsgKHJvd0luZGV4KmtleS53aWR0aClcblx0XHRcdGtleS55ID0gcm93c01hcFsxXS5tYXJnaW5Ub3AgKyBrZXkuaGVpZ2h0XG5cdFx0aWYgaW5kZXggPiByb3dzTWFwWzFdLmVuZEluZGV4XG5cdFx0XHRyb3dJbmRleCA9IGluZGV4IC0gcm93c01hcFsyXS5zdGFydEluZGV4XG5cdFx0XHRrZXkueCA9IHJvd3NNYXBbMl0ucGFkZGluZyArIChyb3dJbmRleCpzcGFjZXIpICsgKHJvd0luZGV4KmtleS53aWR0aClcblx0XHRcdGtleS55ID0gcm93c01hcFsyXS5tYXJnaW5Ub3AgKyBrZXkuaGVpZ2h0ICogMlxuXHRcdHBhdGguaHRtbCA9IFwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cblx0XHQ8c3ZnIHdpZHRoPScje0BwYXRoV2lkdGh9cHgnIGhlaWdodD0nI3tAcGF0aEhlaWdodH0nIHZpZXdCb3g9JzAgMCA2MyAxMTQnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycgeG1sbnM6c2tldGNoPSdodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMnPlxuXHRcdCAgICA8dGl0bGU+UmVjdGFuZ2xlIDQ0IENvcHk8L3RpdGxlPlxuXHRcdCAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHQgICAgPGRlZnM+XG5cdFx0ICAgICAgICA8ZmlsdGVyIHg9Jy01MCUnIHk9Jy01MCUnIHdpZHRoPScyMDAlJyBoZWlnaHQ9JzIwMCUnIGZpbHRlclVuaXRzPSdvYmplY3RCb3VuZGluZ0JveCcgaWQ9J2ZpbHRlci0xJz5cblx0XHQgICAgICAgICAgICA8ZmVPZmZzZXQgZHg9JzAnIGR5PScwJyBpbj0nU291cmNlQWxwaGEnIHJlc3VsdD0nc2hhZG93T2Zmc2V0T3V0ZXIxJz48L2ZlT2Zmc2V0PlxuXHRcdCAgICAgICAgICAgIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249JzEuNScgaW49J3NoYWRvd09mZnNldE91dGVyMScgcmVzdWx0PSdzaGFkb3dCbHVyT3V0ZXIxJz48L2ZlR2F1c3NpYW5CbHVyPlxuXHRcdCAgICAgICAgICAgIDxmZUNvbG9yTWF0cml4IHZhbHVlcz0nMCAwIDAgMCAwICAgMCAwIDAgMCAwICAgMCAwIDAgMCAwICAwIDAgMCAwLjIxIDAnIGluPSdzaGFkb3dCbHVyT3V0ZXIxJyB0eXBlPSdtYXRyaXgnIHJlc3VsdD0nc2hhZG93TWF0cml4T3V0ZXIxJz48L2ZlQ29sb3JNYXRyaXg+XG5cdFx0ICAgICAgICAgICAgPGZlTWVyZ2U+XG5cdFx0ICAgICAgICAgICAgICAgIDxmZU1lcmdlTm9kZSBpbj0nc2hhZG93TWF0cml4T3V0ZXIxJz48L2ZlTWVyZ2VOb2RlPlxuXHRcdCAgICAgICAgICAgICAgICA8ZmVNZXJnZU5vZGUgaW49J1NvdXJjZUdyYXBoaWMnPjwvZmVNZXJnZU5vZGU+XG5cdFx0ICAgICAgICAgICAgPC9mZU1lcmdlPlxuXHRcdCAgICAgICAgPC9maWx0ZXI+XG5cdFx0ICAgIDwvZGVmcz5cblx0XHQgICAgPGcgaWQ9J1BhZ2UtMScgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCcgc2tldGNoOnR5cGU9J01TUGFnZSc+XG5cdFx0ICAgICAgICA8ZyBpZD0naVBob25lLTYnIHNrZXRjaDp0eXBlPSdNU0FydGJvYXJkR3JvdXAnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC0xMTguMDAwMDAwLCAtMjQwLjAwMDAwMCknIHN0cm9rZT0nI0M3QzdDNycgZmlsdGVyPSd1cmwoI2ZpbHRlci0xKScgc3Ryb2tlLXdpZHRoPScwLjUnIFxuXHRcdCAgICAgICAgZmlsbD0nI0ZGRkZGRicgb3BhY2l0eT0nMC45OTgzNjc1MzcnPlxuXHRcdCAgICAgICAgIDxwYXRoIGQ9J00xMzQsMzA2IEMxMzQsMzA2IDEyMSwyOTUgMTIxLDI5MCBDMTIxLDI3OS42MTY3ODggMTIxLDI1My4wMDE0NTYgMTIxLDI1My4wMDE0NTYgQzEyMSwyNDcuNDc3ODA0IDEyNS40ODU4MzIsMjQzIDEzMS4wMDI3NzQsMjQzIEwxNjcuODYyMTI3LDI0MyBDMTczLjM4NjUwNywyNDMgMTc3Ljg4MDg2MiwyNDcuNDY5OTA1IFxuXHRcdCAgICAgICAgIDE3Ny45MDAwNDQsMjUyLjk5NzI3MSBDMTc3LjkwMDA0NCwyNTIuOTk3MjcxIDE3OCwyODAgMTc3Ljk5OTk5OSwyOTAgQzE3Ny45OTk5OTksMjk1LjAwNjU1MyAxNjUsMzA2IDE2NSwzMDYgTDE2NSwzNDYuMDQ5NTk0IFxuXHRcdCAgICAgICAgIEMxNjUsMzQ4LjgwNjgwNyAxNjIuNzcwNTU2LDM1MS4wNDE5NjkgMTYwLjAwMjA5OCwzNTEuMDQxOTY5IEwxMzguOTk3OTAyLDM1MS4wNDE5NjkgXG5cdFx0ICAgICAgICAgIEMxMzYuMjM3NjM3LDM1MS4wNDE5NjkgMTM0LDM0OC44MDgzMzEgMTM0LDM0Ni4wNDk1OTQgTDEzNCwzMDYgWicgaWQ9J1JlY3RhbmdsZS00NC1Db3B5JyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgxNDkuNTAwMDAwLCAyOTcuMDIwOTg1KSBzY2FsZSgtMSwgMSkgdHJhbnNsYXRlKC0xNDkuNTAwMDAwLCAtMjk3LjAyMDk4NSkgJz5cblx0XHQgICAgICAgICAgPC9wYXRoPlxuXHRcdCAgICAgICAgPC9nPlxuXHRcdCAgICA8L2c+XG5cdFx0PC9zdmc+XCJcblx0XHRrZXlzQXJyYXkucHVzaCBrZXlcblxuXG5cdFx0a2V5Lm9uIEV2ZW50cy5Ub3VjaFN0YXJ0LCAtPlxuXHRcdFx0a2V5UG9wVXAudmlzaWJsZSA9IHRydWVcdFxuXHRcdFx0Ym94Lmh0bWwgPSBALm5hbWVcblx0XHRcdGtleVBvcFVwLm1heFkgPSBALm1heFlcblx0XHRcdGtleVBvcFVwLm1pZFggPSBALm1pZFhcblxuXHRcdGtleS5vbiBFdmVudHMuVG91Y2hNb3ZlLCAtPlxuXHRcdFx0Ym94Lmh0bWwgPSBALm5hbWVcblx0XHRcdGtleVBvcFVwLm1heFkgPSBALm1heFlcblx0XHRcdGtleVBvcFVwLm1pZFggPSBALm1pZFhcdFxuXG5cdFx0a2V5Lm9uIEV2ZW50cy5Ub3VjaEVuZCwgLT5cblx0XHRcdGtleVBvcFVwLnZpc2libGUgPSBmYWxzZVxuXHRcdFx0aWYgc2hpZnRJY29uLnN0YXRlcy5zdGF0ZSA9PSBcIm9uXCJcblx0XHRcdFx0c2hpZnRJY29uLnN0YXRlcy5zd2l0Y2goXCJkZWZhdWx0XCIpXG5cdFx0XHRcdGZvciBrZXkgaW4ga2V5c0FycmF5XG5cdFx0XHRcdFx0a2V5LnN0eWxlWyd0ZXh0LXRyYW5zZm9ybSddID0gJ2xvd2VyY2FzZSdcblx0XHRcdFx0Ym94LnN0eWxlWyd0ZXh0LXRyYW5zZm9ybSddID0gJ2xvd2VyY2FzZSdcblxuXG5cblxuXHRudW1LZXkgPSBuZXcgTGF5ZXIgc3VwZXJMYXllcjpib2FyZCwgbmFtZTpcIm51bVwiLCBib3JkZXJSYWRpdXM6ZXhwb3J0cy5weCg1KSwgYmFja2dyb3VuZENvbG9yOlwiI0FBQjNCQ1wiLCBzaGFkb3dZOmV4cG9ydHMucHgoMSksIHNoYWRvd0NvbG9yOlwiIzkyOTQ5OFwiLCBjb2xvcjpcImJsYWNrXCJcblx0bnVtS2V5LmNvbnN0cmFpbnRzID0gKHdpZHRoOjQwLjUsIGhlaWdodDo0MiwgYm90dG9tOjQsIGxlYWRpbmc6Mylcblx0bnVtS2V5Lmh0bWwgPSBcIjEyM1wiXG5cdG51bUtleS5zdHlsZSA9IHtcblx0XHRcImZvbnQtc2l6ZVwiIDogZXhwb3J0cy5weCgxNikgKyBcInB4XCJcblx0XHRcImZvbnQtd2VpZ2h0XCIgOiA0MDBcblx0XHRcImZvbnQtZmFtaWx5XCIgOiAnLWFwcGxlLXN5c3RlbSwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZidcblx0XHQndGV4dC1hbGlnbicgOiAnY2VudGVyJ1xuXHRcdCdsaW5lLWhlaWdodCcgOiBleHBvcnRzLnB4KDQyKSArIFwicHhcIlxuXG5cdH1cblxuXHRleHBvcnRzLmxheW91dCgpXG5cdGVtb2ppS2V5ID0gbmV3IExheWVyIHN1cGVyTGF5ZXI6Ym9hcmQsIG5hbWU6XCJlbW9qaVwiLCBib3JkZXJSYWRpdXM6ZXhwb3J0cy5weCg1KSwgYmFja2dyb3VuZENvbG9yOlwiI0FBQjNCQ1wiLCBzaGFkb3dZOmV4cG9ydHMucHgoMSksIHNoYWRvd0NvbG9yOlwiIzkyOTQ5OFwiXG5cdGVtb2ppS2V5LmNvbnN0cmFpbnRzID0gKHdpZHRoOjQxLCBoZWlnaHQ6NDIsIGJvdHRvbTo0LCBsZWFkaW5nOltudW1LZXksIDZdKVxuXHRlbW9qaUtleS5odG1sID0gXCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0XHQ8c3ZnIHdpZHRoPScje2V4cG9ydHMucHgoMjApfXB4JyBoZWlnaHQ9JyN7ZXhwb3J0cy5weCgyMCl9cHgnIHZpZXdCb3g9JzAgMCAyMCAyMCcgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyB4bWxuczpza2V0Y2g9J2h0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaC9ucyc+XG5cdFx0ICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy41LjIgKDI1MjM1KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHQgICAgPHRpdGxlPkVtb2ppPC90aXRsZT5cblx0XHQgICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0ICAgIDxkZWZzPjwvZGVmcz5cblx0XHQgICAgPGcgaWQ9J1BhZ2UtMScgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCcgc2tldGNoOnR5cGU9J01TUGFnZSc+XG5cdFx0ICAgICAgICA8ZyBpZD0nS2V5Ym9hcmQvTGlnaHQvTG93ZXInIHNrZXRjaDp0eXBlPSdNU0xheWVyR3JvdXAnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC02MC4wMDAwMDAsIC0xODEuMDAwMDAwKScgZmlsbD0nIzAzMDMwMyc+XG5cdFx0ICAgICAgICAgICAgPGcgaWQ9J0JvdHRvbS1Sb3cnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDMuMDAwMDAwLCAxNzAuMDAwMDAwKScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCc+XG5cdFx0ICAgICAgICAgICAgICAgIDxwYXRoIGQ9J002Ni43NSwzMC41IEM3Mi4xMzQ3NzYzLDMwLjUgNzYuNSwyNi4xMzQ3NzYzIDc2LjUsMjAuNzUgQzc2LjUsMTUuMzY1MjIzNyA3Mi4xMzQ3NzYzLDExIDY2Ljc1LDExIEM2MS4zNjUyMjM3LDExIDU3LDE1LjM2NTIyMzcgNTcsMjAuNzUgQzU3LDI2LjEzNDc3NjMgNjEuMzY1MjIzNywzMC41IDY2Ljc1LDMwLjUgWiBNNjYuNzUsMjkuNSBDNzEuNTgyNDkxNiwyOS41IDc1LjUsMjUuNTgyNDkxNiA3NS41LDIwLjc1IEM3NS41LDE1LjkxNzUwODQgNzEuNTgyNDkxNiwxMiA2Ni43NSwxMiBDNjEuOTE3NTA4NCwxMiA1OCwxNS45MTc1MDg0IDU4LDIwLjc1IEM1OCwyNS41ODI0OTE2IDYxLjkxNzUwODQsMjkuNSA2Ni43NSwyOS41IFogTTYzLjc1LDE5IEM2NC40NDAzNTU5LDE5IDY1LDE4LjQ0MDM1NTkgNjUsMTcuNzUgQzY1LDE3LjA1OTY0NDEgNjQuNDQwMzU1OSwxNi41IDYzLjc1LDE2LjUgQzYzLjA1OTY0NDEsMTYuNSA2Mi41LDE3LjA1OTY0NDEgNjIuNSwxNy43NSBDNjIuNSwxOC40NDAzNTU5IDYzLjA1OTY0NDEsMTkgNjMuNzUsMTkgWiBNNjkuNzUsMTkgQzcwLjQ0MDM1NTksMTkgNzEsMTguNDQwMzU1OSA3MSwxNy43NSBDNzEsMTcuMDU5NjQ0MSA3MC40NDAzNTU5LDE2LjUgNjkuNzUsMTYuNSBDNjkuMDU5NjQ0MSwxNi41IDY4LjUsMTcuMDU5NjQ0MSA2OC41LDE3Ljc1IEM2OC41LDE4LjQ0MDM1NTkgNjkuMDU5NjQ0MSwxOSA2OS43NSwxOSBaIE01OS44ODc2MzM0LDIyLjE2NDE0NDQgQzU5LjYzOTAzMTYsMjEuMzgzMTM0IDYwLjA2NTkxOCwyMC45Nzg1MTU2IDYwLjg1MzA5NTEsMjEuMjMyOTMwNCBDNjAuODUzMDk1MSwyMS4yMzI5MzA0IDYzLjA5Mzc1MDMsMjIuMjEyNSA2Ni43NTAwMDAxLDIyLjIxMjUgQzcwLjQwNjI0OTksMjIuMjEyNSA3Mi42NDY5MDQ3LDIxLjIzMjkzMDQgNzIuNjQ2OTA0NywyMS4yMzI5MzA0IEM3My40Mjg3MTYyLDIwLjk2NjIxNTMgNzMuODgxMjQ2MywyMS40MDQ0MDk3IDczLjYwNTg0NzcsMjIuMTgwNzQzNyBDNzMuNjA1ODQ3NywyMi4xODA3NDM3IDcyLjYsMjcuNTc1IDY2Ljc1LDI3LjU3NSBDNjAuOSwyNy41NzUgNTkuODg3NjMzNCwyMi4xNjQxNDQ0IDU5Ljg4NzYzMzQsMjIuMTY0MTQ0NCBaIE02Ni43NSwyMy4xODc1IEM2NC4wNjg3NSwyMy4xODc1IDYxLjg1NDQwNTUsMjIuNDczNzgyMSA2MS44NTQ0MDU1LDIyLjQ3Mzc4MjEgQzYxLjMyNzMwMTksMjIuMzI5NDggNjEuMTc4MTIzMywyMi41NzIxNjE1IDYxLjU2Mzk1NTUsMjIuOTU3MDc1IEM2MS41NjM5NTU1LDIyLjk1NzA3NSA2Mi4zNjI1LDI0LjY1IDY2Ljc1LDI0LjY1IEM3MS4xMzc1LDI0LjY1IDcxLjk1MDg1MDMsMjIuOTQzODMwNCA3MS45NTA4NTAzLDIyLjk0MzgzMDQgQzcyLjMwOTM2NTksMjIuNTM5OTI3OCA3Mi4xNjkwNzkzLDIyLjMzNTk4NDQgNzEuNjM1NDI3MywyMi40NzYzNDkgQzcxLjYzNTQyNzMsMjIuNDc2MzQ5IDY5LjQzMTI1LDIzLjE4NzUgNjYuNzUsMjMuMTg3NSBaJyBpZD0nRW1vamknPjwvcGF0aD5cblx0XHQgICAgICAgICAgICA8L2c+XG5cdFx0ICAgICAgICA8L2c+XG5cdFx0ICAgIDwvZz5cblx0XHQ8L3N2Zz5cIlxuXHRlbW9qaUtleS5zdHlsZSA9IHtcblx0XHRcInBhZGRpbmctdG9wXCI6IGV4cG9ydHMucHgoMTEpICsgXCJweFwiXG5cdFx0XCJwYWRkaW5nLWxlZnRcIjogZXhwb3J0cy5weCgxMSkgKyBcInB4XCJcblx0fVxuXG5cdGVtb2ppRm9ybWF0dGVyID0gKHN0cmluZykgLT5cblx0XHR1bmljb2RlRm9ybWF0ID0gXCJcIlxuXHRcdGlmIHN0cmluZ1swXSA9PSBcIkVcIiB8fCBzdHJpbmdbMF0gPT0gXCIzXCIgfHwgc3RyaW5nWzBdID09IFwiMlwiIHx8IHN0cmluZ1swXSA9PSBcIkNcIlxuXHRcdFx0YXJyYXlPZkNvZGVzID0gc3RyaW5nLnNwbGl0KFwiIFwiKVxuXHRcdFx0Zm9yIGNvZGUgaW4gYXJyYXlPZkNvZGVzXG5cdFx0XHRcdHVuaWNvZGVGb3JtYXQgPSB1bmljb2RlRm9ybWF0ICsgXCIlXCIgKyBjb2RlXG5cdFx0ZWxzZSBcblx0XHRcdGFycmF5T2ZDb2RlcyA9IHN0cmluZy5zcGxpdChcIiBcIilcblx0XHRcdHVuaWNvZGVGb3JtYXQgPSBcIiVGMCU5RlwiXG5cdFx0XHRmb3IgY29kZSBpbiBhcnJheU9mQ29kZXNcblx0XHRcdFx0dW5pY29kZUZvcm1hdCA9IHVuaWNvZGVGb3JtYXQgKyBcIiVcIiArIGNvZGVcblx0XHRyZXR1cm4gdW5pY29kZUZvcm1hdFxuXG5cdGV4cG9ydHMubGF5b3V0KClcblx0ZW1vamlTZWN0aW9ucyA9IFtcIkZyZXF1bmV0bHkgVXNlZFwiLCBcIlNtaWxleXMgJiBQZW9wbGVcIiwgXCJBbmltYWxzICYgTmF0dXJlXCIsIFwiRm9vZCAmIERyaW5rXCIsIFwiQWN0aXZpdHlcIiwgXCJUcmF2ZWwgJiBQbGFjZXNcIiwgXCJPYmplY3RzXCIsIFwiU3ltYm9sc1wiLCBcIkZsYWdzXCJdXG5cdHJhd0Vtb2ppcyA9IFtcIjk4IDgwXCIsIFwiOTggQUNcIiwgXCI5OCA4MVwiLCBcIjk4IDgyXCIsIFwiOTggODNcIiwgXCI5OCA4NFwiLCBcIjk4IDg1XCIsIFwiOTggODZcIiwgXCI5OCA4N1wiLCBcIjk4IDg5XCIsIFwiOTggOGFcIiwgXCI5OSA4MlwiLCBcIjk5IDgzXCIsIFwiRTIgOTggQkEgRUYgQjggOEZcIiwgXCI5OCA4QlwiICwgXCI5OCA4Q1wiLCBcIjk4IDhEXCIsIFwiOTggOThcIiwgXCI5OCA5N1wiLCBcIjk4IDk5XCIsIFwiOTggOUFcIiwgXCI5OCA5Q1wiLCBcIjk4IDlEXCIsIFwiOTggOUJcIiwgXCJBNCA5MVwiLCBcIkE0IDkzXCIsIFwiOTggOEVcIiwgXCJBNCA5N1wiLCBcIjk4IDhGXCIsIFwiOTggQjZcIiwgXCI5OCA5MFwiLCBcIjk4IDkxXCIsIFwiOTggOTJcIiwgXCI5OSA4NFwiLCBcIkE0IDk0XCIsIFwiOTggQjNcIiwgXCI5OCA5RVwiLCBcIjk4IDlGXCIsIFwiOTggQTBcIiwgXCI5OCBBMVwiLCBcIjk4IDk0XCIsIFwiOTggOTVcIiwgXCI5OSA4MVwiLCBcIkUyIDk4IEI5IEVGIEI4IDhGXCIsIFwiOTggQTNcIiwgXCI5OCA5NlwiLCBcIjk4IEFCXCIsIFwiOTggQTlcIiwgXCI5OCBBNFwiLCBcIjk4IEFFXCIsIFwiOTggQjFcIiwgXCI5OCBBOFwiLCBcIjk4IEIwXCIsIFwiOTggQUZcIiwgXCI5OCBBNlwiLCBcIjk4IEE3XCIsIFwiOTggQTJcIiwgXCI5OCBBNVwiLCBcIjk4IEFBXCIsIFwiOTggOTNcIiwgXCI5OCBBRFwiLCBcIjk4IEI1XCIsIFwiOTggQjJcIiwgXCJBNCA5MFwiLCBcIjk4IEI3XCIsIFwiQTQgOTJcIiwgXCJBNCA5NVwiLCBcIjk4IEI0XCIsIFwiOTIgQTRcIiwgXCI5MiBBOVwiLCBcIjk4IDg4XCIsIFwiOTEgQkZcIiwgXCI5MSBCOVwiLCBcIjkxIEJBXCIsIFwiOTIgODBcIiwgXCI5MSBCQlwiLCBcIjkxIEJEXCIsIFwiQTQgOTZcIiwgXCI5OCBCQVwiLCBcIjk4IEI4XCIsIFwiOTggQjlcIiwgXCI5OCBCQlwiLCBcIjk4IEJDXCIsIFwiOTggQkRcIiwgXCI5OSA4MFwiLCBcIjk4IEJGXCIsIFwiOTggQkVcIiwgXCI5OSA4Q1wiLCBcIjkxIDhGXCIsIFwiOTEgOEJcIiwgXCI5MSA4RFwiLCBcIjkxIDhFXCIsIFwiOTEgOEFcIiwgXCJFMiA5QyA4QVwiLCBcIkUyIDlDIDhDIEVGIEI4IDhGXCIsIFwiOTEgOENcIiwgXCJFMiA5QyA4QlwiLCBcIjkxIDkwXCIsIFwiOTIgQUFcIiwgXCI5OSA4RlwiLCBcIkUyIDk4IDlEIEVGIEI4IDhGXCIsIFwiOTEgODZcIiwgXCI5MSA4N1wiLCBcIjkxIDg4XCIsIFwiOTEgODlcIiwgXCI5NiA5NVwiLCBcIjk2IDkwXCIsIFwiQTQgOThcIiwgXCI5NiA5NlwiLCBcIkUyIDlDIDhEIEVGIEI4IDhGXCIsIFwiOTIgODVcIiwgXCI5MSA4NFwiLCBcIjkxIDg1XCIsIFwiOTEgODJcIiwgXCI5MSA4M1wiLCBcIjkxIDgxXCIsIFwiOTEgODBcIiwgXCI5MSBBNFwiLCBcIjkxIEE1XCIsIFwiOTcgQTNcIiwgXCI5MSBCNlwiLCBcIjkxIEE2XCIsIFwiOTEgQTdcIiwgXCI5MSBBOFwiLCBcIjkxIEE5XCIsIFwiOTEgQjFcIiwgXCI5MSBCNFwiLCBcIjkxIEI1XCIsIFwiOTEgQjJcIiwgXCI5MSBCM1wiLCBcIjkxIEFFXCIsIFwiOTEgQjdcIiwgXCI5MiA4MlwiLCBcIjk1IEI1XCIsIFwiOEUgODVcIiwgXCI5MSBCQ1wiLCBcIjkxIEI4XCIsIFwiOTEgQjBcIiwgXCI5QSBCNlwiLCBcIjhGIDgzXCIsIFwiOTIgODNcIiwgXCI5MSBBRlwiLCBcIjkxIEFCXCIsIFwiOTEgQUNcIiwgXCI5MSBBRFwiLCBcIjk5IDg3XCIsIFwiOTIgODFcIiwgXCI5OSA4NVwiLCBcIjk5IDg2XCIsIFwiOTkgOEJcIiwgXCI5OSA4RVwiLCBcIjk5IDhEXCIsIFwiOTIgODdcIiwgXCI5MiA4NlwiLCBcIjkyIDkxXCIsIFwiOTEgQTkgRTIgODAgOEQgRTIgOUQgQTQgRUYgQjggOEYgRTIgODAgOEQgRjAgOUYgOTEgQTlcIiwgXCI5MSBBOCBFMiA4MCA4RCBFMiA5RCBBNCBFRiBCOCA4RiBFMiA4MCA4RCBGMCA5RiA5MSBBOFwiLCBcIjkyIDhGXCIsIFwiOTEgQTkgRTIgODAgOEQgRTIgOUQgQTQgRUYgQjggOEYgRTIgODAgOEQgRjAgOUYgOTIgOEIgRTIgODAgOEQgRjAgOUYgOTEgQTlcIiwgXCI5MSBBOCBFMiA4MCA4RCBFMiA5RCBBNCBFRiBCOCA4RiBFMiA4MCA4RCBGMCA5RiA5MiA4QiBFMiA4MCA4RCBGMCA5RiA5MSBBOFwiLCBcIjkxIEFBXCIsIFwiOTEgQTggRTIgODAgOEQgRjAgOUYgOTEgQTkgRTIgODAgOEQgRjAgOUYgOTEgQTdcIiwgXCI5MSBBOCBFMiA4MCA4RCBGMCA5RiA5MSBBOSBFMiA4MCA4RCBGMCA5RiA5MSBBNyBFMiA4MCA4RCBGMCA5RiA5MSBBNlwiLCBcIjkxIEE4IEUyIDgwIDhEIEYwIDlGIDkxIEE5IEUyIDgwIDhEIEYwIDlGIDkxIEE2IEUyIDgwIDhEIEYwIDlGIDkxIEE2XCIsIFwiOTEgQTggRTIgODAgOEQgRjAgOUYgOTEgQTkgRTIgODAgOEQgRjAgOUYgOTEgQTcgRTIgODAgOEQgRjAgOUYgOTEgQTdcIiwgXCI5MSBBOSBFMiA4MCA4RCBGMCA5RiA5MSBBOSBFMiA4MCA4RCBGMCA5RiA5MSBBNlwiLCBcIjkxIEE5IEUyIDgwIDhEIEYwIDlGIDkxIEE5IEUyIDgwIDhEIEYwIDlGIDkxIEE3XCIsIFwiOTEgQTkgRTIgODAgOEQgRjAgOUYgOTEgQTkgRTIgODAgOEQgRjAgOUYgOTEgQTcgRTIgODAgOEQgRjAgOUYgOTEgQTZcIiwgXCI5MSBBOSBFMiA4MCA4RCBGMCA5RiA5MSBBOSBFMiA4MCA4RCBGMCA5RiA5MSBBNiBFMiA4MCA4RCBGMCA5RiA5MSBBNlwiLCBcIjkxIEE5IEUyIDgwIDhEIEYwIDlGIDkxIEE5IEUyIDgwIDhEIEYwIDlGIDkxIEE3IEUyIDgwIDhEIEYwIDlGIDkxIEE3XCIsIFwiOTEgQTggRTIgODAgOEQgRjAgOUYgOTEgQTggRTIgODAgOEQgRjAgOUYgOTEgQTZcIiwgXCI5MSBBOCBFMiA4MCA4RCBGMCA5RiA5MSBBOCBFMiA4MCA4RCBGMCA5RiA5MSBBN1wiLCBcIjkxIEE4IEUyIDgwIDhEIEYwIDlGIDkxIEE4IEUyIDgwIDhEIEYwIDlGIDkxIEE3IEUyIDgwIDhEIEYwIDlGIDkxIEE2XCIsIFwiOTEgQTggRTIgODAgOEQgRjAgOUYgOTEgQTggRTIgODAgOEQgRjAgOUYgOTEgQTYgRTIgODAgOEQgRjAgOUYgOTEgQTZcIiwgXCI5MSBBOCBFMiA4MCA4RCBGMCA5RiA5MSBBOCBFMiA4MCA4RCBGMCA5RiA5MSBBNyBFMiA4MCA4RCBGMCA5RiA5MSBBN1wiLCBcIjkxIDlBXCIsIFwiOTEgOTVcIiwgXCI5MSA5NlwiLCBcIjkxIDk0XCIsIFwiOTEgOTdcIiwgXCI5MSA5OVwiLCBcIjkxIDk4XCIsIFwiOTIgODRcIiwgXCI5MiA4QlwiLCBcIjkxIEEzXCIsIFwiOTEgQTBcIiwgXCI5MSBBMVwiLCBcIjkxIEEyXCIsIFwiOTEgOUVcIiwgXCI5MSA5RlwiLCBcIjkxIDkyXCIsIFwiOEUgQTlcIiwgXCJFMiA5QiA5MVwiLCBcIjhFIDkzXCIsIFwiOTEgOTFcIiwgXCI4RSA5MlwiLCBcIjkxIDlEXCIsIFwiOTEgOUJcIiwgXCI5MSA5Q1wiLCBcIjkyIEJDXCIsIFwiOTEgOTNcIiwgXCI5NSBCNlwiLCBcIjkyIDhEXCIsIFwiOEMgODJcIiwgXCI5QiA5MVwiLCBcIjkwIEI2XCIsIFwiOTAgQjFcIiwgXCI5MCBBRFwiLCBcIjkwIEI5XCIsIFwiOTAgQjBcIiwgXCI5MCBCQlwiLCBcIjkwIEJDXCIsIFwiOTAgQThcIiwgXCI5MCBBRlwiLCBcIkE2IDgxXCIsIFwiOTAgQUVcIiwgXCI5MCBCN1wiLCBcIjkwIEJEXCIsIFwiOTAgQjhcIiwgXCI5MCA5OVwiLCBcIjkwIEI1XCIsIFwiOTkgODhcIiwgXCI5OSA4OVwiLCBcIjk5IDhBXCIsIFwiOTAgOTJcIiwgXCI5MCA5NFwiLCBcIjkwIEE3XCIsIFwiOTAgQTZcIiwgXCI5MCBBNFwiLCBcIjkwIEEzXCIsIFwiOTAgQTVcIiwgXCI5MCBCQVwiLCBcIjkwIDk3XCIsIFwiOTAgQjRcIiwgXCJBNiA4NFwiLCBcIjkwIDlEXCIsIFwiOTAgOUJcIiwgXCI5MCA4Q1wiLCBcIjkwIDlFXCIsIFwiOTAgOUNcIiwgXCI5NSBCN1wiLCBcIkE2IDgyXCIsIFwiQTYgODBcIiwgXCI5MCA4RFwiLCBcIjkwIEEyXCIsIFwiOTAgQTBcIiwgXCI5MCA5RlwiLCBcIjkwIEExXCIsIFwiOTAgQUNcIiwgXCI5MCBCM1wiLCBcIjkwIDhCXCIsIFwiOTAgOEFcIiwgXCI5MCA4NlwiLCBcIjkwIDg1XCIsIFwiOTAgODNcIiwgXCI5MCA4MlwiLCBcIjkwIDg0XCIsIFwiOTAgQUFcIiwgXCI5MCBBQlwiLCBcIjkwIDk4XCIsIFwiOTAgOTBcIiwgXCI5MCA4RlwiLCBcIjkwIDkxXCIsIFwiOTAgOEVcIiwgXCI5MCA5NlwiLCBcIjkwIDgwXCIsIFwiOTAgODFcIiwgXCI5MCA5M1wiLCBcIkE2IDgzXCIsIFwiOTUgOEFcIiwgXCI5MCA5NVwiLCBcIjkwIEE5XCIsIFwiOTAgODhcIiwgXCI5MCA4N1wiLCBcIjkwIEJGXCIsIFwiOTAgQkVcIiwgXCI5MCA4OVwiLCBcIjkwIEIyXCIsIFwiOEMgQjVcIiwgXCI4RSA4NFwiLCBcIjhDIEIyXCIsIFwiOEMgQjNcIiwgXCI4QyBCNFwiLCBcIjhDIEIxXCIsIFwiOEMgQkZcIiwgXCJFMiA5OCA5OFwiLCBcIjhEIDgwXCIsIFwiOEUgOERcIiwgXCI4RSA4QlwiLCBcIjhEIDgzXCIsIFwiOEQgODJcIiwgXCI4RCA4MVwiLCBcIjhDIEJFXCIsIFwiOEMgQkFcIiwgXCI4QyBCQVwiLCBcIjhDIEJCXCIsIFwiOEMgQjlcIiwgXCI4QyBCN1wiLCBcIjhDIEJDXCIsIFwiOEMgQjhcIiwgXCI5MiA5MFwiLCBcIjhEIDg0XCIsIFwiOEMgQjBcIiwgXCI4RSA4M1wiLCBcIjkwIDlBXCIsIFwiOTUgQjhcIiwgXCI4QyA4RVwiLCBcIjhDIDhEXCIsIFwiOEMgOEZcIiwgXCI4QyA5NVwiLCBcIjhDIDk2XCIsIFwiOEMgOTdcIiwgXCI4QyA5OFwiLCBcIjhDIDkxXCIsIFwiOEMgOTJcIiwgXCI4QyA5M1wiLCBcIjhDIDk0XCIsIFwiOEMgOUFcIiwgXCI4QyA5RFwiLCBcIjhDIDlCXCIsIFwiOEMgOUNcIiwgXCI4QyA5RVwiLCBcIjhDIDk5XCIsIFwiRTIgQUQgOTAgRUYgQjggOEZcIiwgXCI4QyA5RlwiLCBcIjkyIEFCXCIsIFwiRTIgOUMgQThcIiwgXCJFMiA5OCA4NCBFRiBCOCA4RlwiLCBcIkUyIDk4IDgwIEVGIEI4IDhGXCIsIFwiOEMgQTRcIiwgXCJFMiA5QiA4NSBFRiBCOCA4RlwiLCBcIjhDIEE1XCIsIFwiOEMgQTZcIiwgXCJFMiA5OCA4MSBFRiBCOCA4RlwiLCBcIjhDIEE3XCIsIFwiRTIgOUIgODhcIiwgXCI4QyBBOVwiLCBcIkUyIDlBIEExIEVGIEI4IDhGXCIsIFwiOTQgQTVcIiwgXCI5MiBBNVwiLCBcIkUyIDlEIDg0IEVGIEI4IDhGXCIsIFwiOEMgQThcIiwgXCJFMiA5OCA4MyBFRiBCOCA4RlwiLCBcIkUyIDlCIDg0IEVGIEI4IDhGXCIsIFwiOEMgQUNcIiwgXCI5MiBBOFwiLCBcIjhDIEFBXCIsIFwiOEMgQUJcIiwgXCJFMiA5OCA4MiBFRiBCOCA4RlwiLCBcIkUyIDk4IDk0IEVGIEI4IDhGXCIsIFwiOTIgQTdcIiwgXCI5MiBBNlwiLCBcIjhDIDhBXCIsIFwiOUIgOTFcIiwgXCI5QiA5MVwiLCBcIjhEIDhGXCIsIFwiOEQgOEVcIiwgXCI4RCA5MFwiLCBcIjhEIDhBXCIsIFwiOEQgOEJcIiwgXCI4RCA4Q1wiLCBcIjhEIDg5XCIsIFwiOEQgODdcIiwgXCI4RCA5M1wiLCBcIjhEIDg4XCIsIFwiOEQgOTJcIiwgXCI4RCA5MVwiLCBcIjhEIDhEXCIsIFwiOEQgODVcIiwgXCI4RCA4NlwiLCBcIjhDIEI2XCIsIFwiOEMgQkRcIiwgXCI4RCBBMFwiLCBcIjhEIEFGXCIsIFwiOEQgOUVcIiwgXCJBNyA4MFwiLCBcIjhEIDk3XCIsIFwiOEQgOTZcIiwgXCI4RCBBNFwiLCBcIjhEIEIzXCIsIFwiOEQgOTRcIiwgXCI4RCA5RlwiLCBcIjhDIEFEXCIsIFwiOEQgOTVcIiwgXCI4RCA5RFwiLCBcIjhDIEFFXCIsIFwiOEMgQUZcIiwgXCI4RCA5Q1wiLCBcIjhEIEIyXCIsIFwiOEQgQTVcIiwgXCI4RCBBM1wiLCBcIjhEIEIxXCIsIFwiOEQgOUJcIiwgXCI4RCA5OVwiLCBcIjhEIDlBXCIsIFwiOEQgOThcIiwgXCI4RCBBMlwiLCBcIjhEIEExXCIsIFwiOEQgQTdcIiwgXCI4RCBBOFwiLCBcIjhEIEE2XCIsIFwiOEQgQjBcIiwgXCI4RSA4MlwiLCBcIjhEIEFFXCIsIFwiOEQgQUNcIiwgXCI4RCBBRFwiLCBcIjhEIEFCXCIsIFwiOEQgQkZcIiwgXCI4RCBBOVwiLCBcIjhEIEFBXCIsIFwiOEQgQkFcIiwgXCI4RCBCQlwiLCBcIjhEIEI3XCIsIFwiOEQgQjhcIiwgXCI4RCBCOVwiLCBcIjhEIEJFXCIsIFwiOEQgQjZcIiwgXCI4RCBCNVwiLCBcIkUyIDk4IDk1IEVGIEI4IDhGXCIsIFwiOEQgQkNcIiwgXCI4RCBCNFwiLCBcIjhEIEJEXCIsXCI5QiA5MVwiLCBcIjlCIDkxXCIsIFwiOUIgOTFcIiwgXCJFMiA5QSBCRCBFRiBCOCA4RlwiLCBcIjhGIDgwXCIsIFwiOEYgODhcIiwgXCJFMiA5QSBCRSBFRiBCOCA4RlwiLCBcIjhFIEJFXCIsIFwiOEYgOTBcIiwgXCI4RiA4OVwiLCBcIjhFIEIxXCIsIFwiRTIgOUIgQjMgRUYgQjggOEZcIiwgXCI4RiA4Q1wiLCBcIjhGIDkzXCIsIFwiOEYgQjhcIiwgXCI4RiA5MlwiLCBcIjhGIDkxXCIsIFwiOEYgOEZcIiwgXCI4RSBCRlwiLCBcIkUyIDlCIEI3XCIsIFwiOEYgODJcIiwgXCJFMiA5QiBCOFwiLCBcIjhGIEI5XCIsIFwiOEUgQTNcIiwgXCI5QSBBM1wiLCBcIjhGIDhBXCIsIFwiOEYgODRcIiwgXCI5QiA4MFwiLCBcIkUyIDlCIEI5XCIsIFwiOEYgOEJcIiwgXCI5QSBCNFwiLCBcIjlBIEI1XCIsIFwiOEYgODdcIiwgXCI5NSBCNFwiLCBcIjhGIDg2XCIsIFwiOEUgQkRcIiwgXCI4RiA4NVwiLCBcIjhFIDk2XCIsIFwiOEUgOTdcIiwgXCI4RiBCNVwiLCBcIjhFIEFCXCIsIFwiOEUgOUZcIiwgXCI4RSBBRFwiLCBcIjhFIEE4XCIsIFwiOEUgQUFcIiwgXCI4RSBBNFwiLCBcIjhFIEE3XCIsIFwiOEUgQkNcIiwgXCI4RSBCOVwiLCBcIjhFIEI3XCIsIFwiOEUgQkFcIiwgXCI4RSBCOFwiLCBcIjhFIEJCXCIsIFwiOEUgQUNcIiwgXCI4RSBBRVwiLCBcIjkxIEJFXCIsIFwiOEUgQUZcIiwgXCI4RSBCMlwiLCBcIjhFIEIwXCIsIFwiOEUgQjNcIiwgXCI5QiA5MVwiLCBcIjlCIDkxXCIsIFwiOUIgOTFcIiwgXCI5QSA5N1wiLCBcIjlBIDk1XCIsIFwiOUEgOTlcIiwgXCI5QSA4Q1wiLCBcIjlBIDhFXCIsIFwiOEYgOEVcIiwgXCI5QSA5M1wiLCBcIjlBIDkxXCIsIFwiOUEgOTJcIiwgXCI5QSA5MFwiLCBcIjlBIDlBXCIsIFwiOUEgOUJcIiwgXCI5QSA5Q1wiLFwiOEYgOERcIiwgXCI5QSBCMlwiLCBcIjlBIEE4XCIsIFwiOUEgOTRcIiwgXCI5QSA4RFwiLCBcIjlBIDk4XCIsIFwiOUEgOTZcIiwgXCI5QSBBMVwiLCBcIjlBIEEwXCIsIFwiOUEgQUZcIiwgXCI5QSA4M1wiLCBcIjlBIDhCXCIsIFwiOUEgOURcIiwgXCI5QSA4NFwiLCBcIjlBIDg1XCIsIFwiOUEgODhcIiwgXCI5QSA5RVwiLCBcIjlBIDgyXCIsIFwiOUEgODZcIiwgXCI5QSA4N1wiLCBcIjlBIDhBXCIsIFwiOUEgODlcIiwgXCI5QSA4MVwiLCBcIjlCIEE5XCIsIFwiRTIgOUMgODggRUYgQjggOEZcIiwgXCI5QiBBQlwiLCBcIjlCIEFDXCIsIFwiRTIgOUIgQjUgRUYgQjggOEZcIiwgXCI5QiBBNVwiLCBcIjlBIEE0XCIsIFwiRTIgOUIgQjRcIiwgXCI5QiBCM1wiLCBcIjlBIDgwXCIsIFwiOUIgQjBcIiwgXCI5MiBCQVwiLCBcIkUyIDlBIDkzIEVGIEI4IDhGXCIsIFwiOUEgQTdcIiwgXCJFMiA5QiBCRCBFRiBCOCA4RlwiLCBcIjlBIDhGXCIsIFwiOUEgQTZcIiwgXCI5QSBBNVwiLCBcIjhGIDgxXCIsIFwiOUEgQTJcIiwgXCI4RSBBMVwiLCBcIjhFIEEyXCIsIFwiOEUgQTBcIiwgXCI4RiA5N1wiLCBcIjhDIDgxXCIsIFwiOTcgQkNcIiwgXCI4RiBBRFwiLCBcIkUyIDlCIEIyIEVGIEI4IDhGXCIsIFwiOEUgOTFcIiwgXCJFMiA5QiBCMFwiLCBcIjhGIDk0XCIsIFwiOTcgQkJcIiwgXCI4QyA4QlwiLCBcIjk3IEJFXCIsIFwiOEYgOTVcIiwgXCJFMiA5QiBCQSBFRiBCOCA4RlwiLCBcIjhGIDlFXCIsIFwiOUIgQTNcIiwgXCI5QiBBNFwiLCBcIjhDIDg1XCIsIFwiOEMgODRcIiwgXCI4RiA5Q1wiLCBcIjhGIDk2XCIsIFwiOEYgOURcIiwgXCI4QyA4N1wiLCBcIjhDIDg2XCIsIFwiOEYgOTlcIiwgXCI4QyA4M1wiLCBcIjhDIDg5XCIsIFwiOEMgOENcIiwgXCI4QyBBMFwiLCBcIjhFIDg3XCIsIFwiOEUgODZcIiwgXCI4QyA4OFwiLCBcIjhGIDk4XCIsIFwiOEYgQjBcIiwgXCI4RiBBRlwiLCBcIjhGIDlGXCIsIFwiOTcgQkRcIiwgXCI4RiBBMFwiLCBcIjhGIEExXCIsIFwiOEYgOUFcIiwgXCI4RiBBMlwiLCBcIjhGIEFDXCIsIFwiOEYgQTNcIiwgXCI4RiBBNFwiLCBcIjhGIEE1XCIsIFwiOEYgQTZcIiwgXCI4RiBBOFwiLCBcIjhGIEFBXCIsIFwiOEYgQUJcIiwgXCI4RiBBOVwiLCBcIjkyIDkyXCIsIFwiOEYgOUJcIiwgXCJFMiA5QiBBQSBFRiBCOCA4RlwiLCBcIjk1IDhDXCIsIFwiOTUgOERcIiwgXCI5NSA4QlwiLCBcIkUyIDlCIEE5XCIsIFwiRTIgOEMgOUEgRUYgQjggOEZcIiwgXCI5MyBCMVwiLCBcIjkzIEIyXCIsIFwiOTIgQkJcIiwgXCJFMiA4QyBBOCBFRiBCOCA4RlwiLCBcIjk2IEE1XCIsIFwiOTYgQThcIiwgXCI5NiBCMVwiLCBcIjk2IEIyXCIsIFwiOTUgQjlcIiwgXCI5NyA5Q1wiLCBcIjkyIEJEXCIsIFwiOTIgQkVcIiwgXCI5MiBCRlwiLCBcIjkzIDgwXCIsIFwiOTMgQkNcIiwgXCI5MyBCN1wiLCBcIjkzIEI4XCIsIFwiOTMgQjlcIiwgXCI4RSBBNVwiLCBcIjkzIEJEXCIsIFwiOEUgOUVcIiwgXCI5MyA5RVwiLCBcIkUyIDk4IDhFIEVGIEI4IDhGXCIsIFwiOTMgOUZcIiwgXCI5MyBBMFwiLCBcIjkzIEJBXCIsIFwiOTMgQkJcIiwgXCI4RSA5OVwiLCBcIjhFIDlBXCIsIFwiOEUgOUJcIiwgXCJFMiA4RiBCMVwiLCBcIkUyIDhGIEIyXCIsIFwiRTIgOEYgQjBcIiwgXCI5NSBCMFwiLCBcIkUyIDhGIEIzXCIsIFwiRTIgOEMgOUIgRUYgQjggOEZcIiwgXCI5MyBBMVwiLCBcIjk0IDhCXCIsIFwiOTQgOENcIiwgXCI5MiBBMVwiLCBcIjk0IEE2XCIsIFwiOTUgQUZcIiwgXCI5NyA5MVwiLCBcIjlCIEEyXCIsIFwiOTIgQjhcIiwgXCI5MiBCNVwiLCBcIjkyIEI0XCIsIFwiOTIgQjZcIiwgXCI5MiBCN1wiLCBcIjkyIEIwXCIsIFwiOTIgQjNcIiwgXCI5MiA4RVwiLCBcIkUyIDlBIDk2XCIsIFwiOTQgQTdcIiwgXCI5NCBBOFwiLCBcIkUyIDlBIDkyXCIsIFwiOUIgQTBcIiwgXCJFMiA5QiA4RlwiLCBcIjk0IEE5XCIsIFwiRTIgOUEgOTlcIiwgXCJFMiA5QiA5M1wiLCBcIjk0IEFCXCIsIFwiOTIgQTNcIiwgXCI5NCBBQVwiLCBcIjk3IEExXCIsIFwiRTIgOUEgOTRcIiwgXCI5QiBBMVwiLCBcIjlBIEFDXCIsIFwiRTIgOTggQTAgRUYgQjggOEZcIiwgXCJFMiA5QSBCMFwiLCBcIkUyIDlBIEIxXCIsIFwiOEYgQkFcIiwgXCI5NCBBRVwiLCBcIjkzIEJGXCIsIFwiOTIgODhcIiwgXCJFMiA5QSA5N1wiLCBcIjk0IEFEXCIsIFwiOTQgQUNcIiwgXCI5NSBCM1wiLCBcIjkyIDhBXCIsIFwiOTIgODlcIiwgXCI4QyBBMVwiLCBcIjhGIEI3XCIsIFwiOTQgOTZcIiwgXCI5QSBCRFwiLCBcIjlBIEJGXCIsIFwiOUIgODFcIiwgXCI5NCA5MVwiLCBcIjk3IDlEXCIsIFwiOUIgOEJcIiwgXCI5QiA4Q1wiLCBcIjlCIDhGXCIsIFwiOUEgQUFcIiwgXCI5QiA4RVwiLCBcIjk2IEJDXCIsIFwiOTcgQkFcIiwgXCJFMiA5QiBCMVwiLCBcIjk3IEJGXCIsIFwiOUIgOERcIiwgXCI4RSA4OFwiLCBcIjhFIDhGXCIsIFwiOEUgODBcIiwgXCI4RSA4MVwiLCBcIjhFIDhBXCIsIFwiOEUgODlcIiwgXCI4RSA4RVwiLCBcIjhFIDkwXCIsIFwiOEUgOENcIiwgXCI4RiBBRVwiLCBcIkUyIDlDIDg5IEVGIEI4IDhGXCIsIFwiOTMgQTlcIiwgXCI5MyBBOFwiLCBcIjkzIEE3XCIsIFwiOTIgOENcIiwgXCI5MyBBRVwiLCBcIjkzIEFBXCIsIFwiOTMgQUJcIiwgXCI5MyBBQ1wiLCBcIjkzIEFEXCIsIFwiOTMgQTZcIiwgXCI5MyBBRlwiLCBcIjkzIEE1XCIsIFwiOTMgQTRcIiwgXCI5MyA5Q1wiLCBcIjkzIDgzXCIsIFwiOTMgOTFcIiwgXCI5MyA4QVwiLCBcIjkzIDg4XCIsIFwiOTMgODlcIiwgXCI5MyA4NFwiLCBcIjkzIDg1XCIsIFwiOTMgODZcIiwgXCI5NyA5M1wiLCBcIjkzIDg3XCIsIFwiOTcgODNcIiwgXCI5NyBCM1wiLCBcIjk3IDg0XCIsIFwiOTMgOEJcIiwgXCI5NyA5MlwiLCBcIjkzIDgxXCIsIFwiOTMgODJcIiwgXCI5NyA4MlwiLCBcIjk3IDlFXCIsIFwiOTMgQjBcIiwgXCI5MyA5M1wiLCBcIjkzIDk1XCIsIFwiOTMgOTdcIiwgXCI5MyA5OFwiLCBcIjkzIDk5XCIsIFwiOTMgOTRcIiwgXCI5MyA5MlwiLCBcIjkzIDlBXCIsIFwiOTMgOTZcIiwgXCI5NCA5N1wiLCBcIjkzIDhFXCIsIFwiOTYgODdcIiwgXCJFMiA5QyA4MiBFRiBCOCA4RlwiLCBcIjkzIDkwXCIsIFwiOTMgOEZcIiwgXCI5MyA4Q1wiLCBcIjkzIDhEXCIsIFwiOUEgQTlcIiwgXCI4RiBCM1wiLCBcIjhGIEI0XCIsIFwiOTQgOTBcIiwgXCI5NCA5MlwiLCBcIjk0IDkzXCIsIFwiOTQgOEZcIiwgXCI5NiA4QVwiLCBcIjk2IDhCXCIsIFwiRTIgOUMgOTIgRUYgQjggOEZcIiwgXCI5MyA5RFwiLCBcIkUyIDlDIDhGIEVGIEI4IDhGXCIsIFwiOTYgOERcIiwgXCI5NiA4Q1wiLCBcIjk0IDhEXCIsIFwiOTQgOEVcIiwgXCI5QiA5MVwiLCBcIjlCIDkxXCIsIFwiRTIgOUQgQTQgRUYgQjggOEZcIiwgXCI5MiA5QlwiLCBcIjkyIDlBXCIsIFwiOTIgOTlcIiwgXCI5MiA5Q1wiLCBcIjkyIDk0XCIsIFwiRTIgOUQgQTMgRUYgQjggOEZcIiwgXCI5MiA5NVwiLCBcIjkyIDlFXCIsIFwiOTIgOTNcIiwgXCI5MiA5N1wiLCBcIjkyIDk2XCIsIFwiOTIgOThcIiwgXCI5MiA5RFwiLCBcIjkyIDlGXCIsIFwiRTIgOTggQUUgRUYgQjggOEZcIiwgXCJFMiA5QyA5RCBFRiBCOCA4RlwiLCBcIkUyIDk4IEFBIEVGIEI4IDhGXCIsIFwiOTUgODlcIiwgXCJFMiA5OCBCOCBFRiBCOCA4RlwiLCBcIkUyIDlDIEExIEVGIEI4IDhGXCIsIFwiOTQgQUZcIiwgXCI5NSA4RVwiLCBcIkUyIDk4IEFGIEVGIEI4IDhGXCIsIFwiRTIgOTggQTYgRUYgQjggOEZcIiwgXCI5QiA5MFwiLCBcIkUyIDlCIDhFXCIsIFwiRTIgOTkgODggRUYgQjggOEZcIiwgXCJFMiA5OSA4OSBFRiBCOCA4RlwiLCBcIkUyIDk5IDhBIEVGIEI4IDhGXCIsIFwiRTIgOTkgOEIgRUYgQjggOEZcIiwgXCJFMiA5OSA4QyBFRiBCOCA4RlwiLCBcIkUyIDk5IDhEIEVGIEI4IDhGXCIsIFwiRTIgOTkgOEUgRUYgQjggOEZcIiwgXCJFMiA5OSA4RiBFRiBCOCA4RlwiLCBcIkUyIDk5IDkwIEVGIEI4IDhGXCIsIFwiRTIgOTkgOTEgRUYgQjggOEZcIiwgXCJFMiA5OSA5MiBFRiBCOCA4RlwiLCBcIkUyIDk5IDkzIEVGIEI4IDhGXCIsIFwiODYgOTRcIiwgXCJFMiA5QSA5QlwiLCBcIjg4IEIzXCIsIFwiODggQjlcIiwgXCJFMiA5OCBBMiBFRiBCOCA4RlwiLCBcIkUyIDk4IEEzIEVGIEI4IDhGXCIsIFwiOTMgQjRcIiwgXCI5MyBCM1wiLCBcIjg4IEI2XCIsIFwiODggOUEgRUYgQjggOEZcIiwgXCI4OCBCOFwiLCBcIjg4IEJBXCIsIFwiODggQjcgRUYgQjggOEZcIiwgXCJFMiA5QyBCNCBFRiBCOCA4RlwiLCBcIjg2IDlBXCIsIFwiODkgOTFcIiwgXCI5MiBBRVwiLCBcIjg5IDkwXCIsIFwiRTMgOEEgOTkgRUYgQjggOEZcIiwgXCJFMyA4QSA5NyBFRiBCOCA4RlwiLCBcIjg4IEI0XCIsIFwiODggQjVcIiwgXCI4OCBCMlwiLCBcIjg1IEIwIEVGIEI4IDhGXCIsIFwiODUgQjEgRUYgQjggOEZcIiwgXCI4NiA4RVwiLCBcIjg2IDkxXCIsIFwiODUgQkUgRUYgQjggOEZcIiwgXCI4NiA5OFwiLCBcIkUyIDlCIDk0IEVGIEI4IDhGXCIsIFwiOTMgOUJcIiwgXCI5QSBBQlwiLCBcIkUyIDlEIDhDXCIsIFwiRTIgQUQgOTUgRUYgQjggOEZcIiwgXCI5MiBBMlwiLCBcIkUyIDk5IEE4IEVGIEI4IDhGXCIsIFwiOUEgQjdcIiwgXCI5QSBBRlwiLCBcIjlBIEIzXCIsIFwiOUEgQjFcIiwgXCI5NCA5RVwiLCBcIjkzIEI1XCIsIFwiRTIgOUQgOTcgRUYgQjggOEZcIiwgXCJFMiA5RCA5NVwiLCBcIkUyIDlEIDkzXCIsIFwiRTIgOUQgOTRcIiwgXCJFMiA4MCBCQyBFRiBCOCA4RlwiLCBcIkUyIDgxIDg5IEVGIEI4IDhGXCIsIFwiOTIgQUZcIiwgXCI5NCA4NVwiLCBcIjk0IDg2XCIsIFwiOTQgQjFcIiwgXCJFMiA5QSA5Q1wiLCBcIkUzIDgwIEJEIEVGIEI4IDhGXCIsIFwiRTIgOUEgQTAgRUYgQjggOEZcIiwgXCI5QSBCOFwiLCBcIjk0IEIwXCIsIFwiRTIgOTkgQkIgRUYgQjggOEZcIiwgXCI4OCBBRiBFRiBCOCA4RlwiLCBcIjkyIEI5XCIsIFwiRTIgOUQgODcgRUYgQjggOEZcIiwgXCJFMiA5QyBCMyBFRiBCOCA4RlwiLCBcIkUyIDlEIDhFXCIsIFwiRTIgOUMgODVcIiwgXCI5MiBBMFwiLCBcIjhDIDgwXCIsIFwiRTIgOUUgQkZcIiwgXCI4QyA5MFwiLCBcIkUyIDkzIDgyIEVGIEI4IDhGXCIsIFwiOEYgQTdcIiwgXCI4OCA4MiBFRiBCOCA4RlwiLCBcIjlCIDgyXCIsIFwiOUIgODNcIiwgXCI5QiA4NFwiLCBcIjlCIDg1XCIsIFwiRTIgOTkgQkYgRUYgQjggOEZcIiwgXCI5QSBBRFwiLCBcIjlBIEJFXCIsIFwiODUgQkYgRUYgQjggOEZcIiwgXCI5QSBCMFwiLCBcIjlBIEI5XCIsIFwiOUEgQkFcIiwgXCI5QSBCQ1wiLCBcIjlBIEJCXCIsIFwiOUEgQUVcIiwgXCI4RSBBNlwiLCBcIjkzIEI2XCIsIFwiODggODFcIiwgXCI4NiA5NlwiLCBcIjg2IDk3XCIsIFwiODYgOTlcIiwgXCI4NiA5MlwiLCBcIjg2IDk1XCIsIFwiODYgOTNcIiwgXCIzMCBFRiBCOCA4RiBFMiA4MyBBM1wiLCBcIjMxIEVGIEI4IDhGIEUyIDgzIEEzXCIsIFwiMzIgRUYgQjggOEYgRTIgODMgQTNcIiwgXCIzMyBFRiBCOCA4RiBFMiA4MyBBM1wiLCBcIjM0IEVGIEI4IDhGIEUyIDgzIEEzXCIsIFwiMzUgRUYgQjggOEYgRTIgODMgQTNcIiwgXCIzNiBFRiBCOCA4RiBFMiA4MyBBM1wiLCBcIjM3IEVGIEI4IDhGIEUyIDgzIEEzXCIsIFwiMzggRUYgQjggOEYgRTIgODMgQTNcIiwgXCIzOSBFRiBCOCA4RiBFMiA4MyBBM1wiLCBcIjk0IDlGXCIsIFwiOTQgQTJcIiwgXCJFMiA5NiBCNiBFRiBCOCA4RlwiLCBcIkUyIDhGIEI4XCIsIFwiRTIgOEYgQUZcIiwgXCJFMiA4RiBCOVwiLCBcIkUyIDhGIEJBXCIsIFwiRTIgOEYgQURcIiwgXCJFMiA4RiBBRVwiLCBcIkUyIDhGIEE5XCIsIFwiRTIgOEYgQUFcIiwgXCI5NCA4MFwiLCBcIjk0IDgxXCIsIFwiOTQgODJcIiwgXCJFMiA5NyA4MCBFRiBCOCA4RlwiLCBcIjk0IEJDXCIsIFwiOTQgQkRcIiwgXCJFMiA4RiBBQlwiLCBcIkUyIDhGIEFDXCIsIFwiRTIgOUUgQTEgRUYgQjggOEZcIiwgXCJFMiBBQyA4NSBFRiBCOCA4RlwiLCBcIkUyIEFDIDg2IEVGIEI4IDhGXCIsIFwiRTIgQUMgODcgRUYgQjggOEZcIiwgXCJFMiA4NiA5NyBFRiBCOCA4RlwiLCBcIkUyIDg2IDk4IEVGIEI4IDhGXCIsIFwiRTIgODYgOTkgRUYgQjggOEZcIiwgXCJFMiA4NiA5NiBFRiBCOCA4RlwiLCBcIkUyIDg2IDk1IEVGIEI4IDhGXCIsIFwiRTIgODYgOTQgRUYgQjggOEZcIiwgXCI5NCA4NFwiLCBcIkUyIDg2IEFBIEVGIEI4IDhGXCIsIFwiRTIgODYgQTkgRUYgQjggOEZcIiwgXCJFMiBBNCBCNCBFRiBCOCA4RlwiLCBcIkUyIEE0IEI1IEVGIEI4IDhGXCIsIFwiMjMgRUYgQjggOEYgRTIgODMgQTNcIiwgXCIyQSBFRiBCOCA4RiBFMiA4MyBBM1wiLCBcIkUyIDg0IEI5IEVGIEI4IDhGXCIsIFwiOTQgQTRcIiwgXCI5NCBBMVwiLCBcIjk0IEEwXCIsIFwiOTQgQTNcIiwgXCI4RSBCNVwiLCBcIjhFIEI2XCIsIFwiRTMgODAgQjAgRUYgQjggOEZcIiwgXCJFMiA5RSBCMFwiLCBcIkUyIDlDIDk0IEVGIEI4IDhGXCIsIFwiOTQgODNcIiwgXCJFMiA5RSA5NVwiLCBcIkUyIDlFIDk2XCIsIFwiRTIgOUUgOTdcIiwgXCJFMiA5QyA5NiBFRiBCOCA4RlwiLCBcIjkyIEIyXCIsIFwiOTIgQjFcIiwgXCJDMiBBOSBFRiBCOCA4RlwiLCBcIkMyIEFFIEVGIEI4IDhGXCIsIFwiRTIgODQgQTIgRUYgQjggOEZcIiwgXCI5NCA5QVwiLCBcIjk0IDk5XCIsIFwiOTQgOUJcIiwgXCI5NCA5RFwiLCBcIjk0IDlDXCIsIFwiRTIgOTggOTEgRUYgQjggOEZcIiwgXCI5NCA5OFwiLCBcIkUyIDlBIEFBIEVGIEI4IDhGXCIsIFwiRTIgOUEgQUIgRUYgQjggOEZcIiwgXCI5NCBCNFwiLCBcIjk0IEI1XCIsIFwiOTQgQjhcIiwgXCI5NCBCOVwiLCBcIjk0IEI2XCIsIFwiOTQgQjdcIiwgXCI5NCBCQVwiLCBcIkUyIDk2IEFBIEVGIEI4IDhGXCIsIFwiRTIgOTYgQUIgRUYgQjggOEZcIiwgXCJFMiBBQyA5QiBFRiBCOCA4RlwiLCBcIkUyIEFDIDlDIEVGIEI4IDhGXCIsIFwiOTQgQkJcIiwgXCJFMiA5NyBCQyBFRiBCOCA4RlwiLCBcIkUyIDk3IEJCIEVGIEI4IDhGXCIsIFwiRTIgOTcgQkUgRUYgQjggOEZcIiwgXCJFMiA5NyBCRCBFRiBCOCA4RlwiLCBcIjk0IEIyXCIsIFwiOTQgQjNcIiwgXCI5NCA4OFwiLCBcIjk0IDg5XCIsIFwiOTQgOEFcIiwgXCI5NCA4N1wiLCBcIjkzIEEzXCIsIFwiOTMgQTJcIiwgXCI5NCA5NFwiLCBcIjk0IDk1XCIsIFwiODMgOEZcIiwgXCI4MCA4NCBFRiBCOCA4RlwiLCBcIkUyIDk5IEEwIEVGIEI4IDhGXCIsIFwiRTIgOTkgQTMgRUYgQjggOEZcIiwgXCJFMiA5OSBBNSBFRiBCOCA4RlwiLCBcIkUyIDk5IEE2IEVGIEI4IDhGXCIsIFwiOEUgQjRcIiwgXCI5MSA4MSBFMiA4MCA4RCBGMCA5RiA5NyBBOFwiLCBcIjkyIEFEXCIsIFwiOTcgQUZcIiwgXCI5MiBBQ1wiLCBcIjk1IDkwXCIsIFwiOTUgOTFcIiwgXCI5NSA5MlwiLCBcIjk1IDkzXCIsIFwiOTUgOTRcIiwgXCI5NSA5NVwiLCBcIjk1IDk2XCIsIFwiOTUgOTdcIiwgXCI5NSA5OFwiLCBcIjk1IDk5XCIsIFwiOTUgOUFcIiwgXCI5NSA5QlwiLCBcIjk1IDlDXCIsIFwiOTUgOURcIiwgXCI5NSA5RVwiLCBcIjk1IDlGXCIsIFwiOTUgQTBcIiwgXCI5NSBBMVwiLCBcIjk1IEEyXCIsIFwiOTUgQTNcIiwgXCI5NSBBNFwiLCBcIjk1IEE1XCIsIFwiOTUgQTZcIiwgXCI5NSBBN1wiLCBcIjlCIDkxXCIsIFwiODcgQTYgRjAgOUYgODcgQUJcIiwgXCI4NyBBNiBGMCA5RiA4NyBCRFwiLCBcIjg3IEE2IEYwIDlGIDg3IEIxXCIsIFwiODcgQTkgRjAgOUYgODcgQkZcIiwgXCI4NyBBNiBGMCA5RiA4NyBCOFwiLCBcIjg3IEE2IEYwIDlGIDg3IEE5XCIsIFwiODcgQTYgRjAgOUYgODcgQjRcIiwgXCI4NyBBNiBGMCA5RiA4NyBBRVwiLCBcIjg3IEE2IEYwIDlGIDg3IEI2XCIsIFwiODcgQTYgRjAgOUYgODcgQUNcIiwgXCI4NyBBNiBGMCA5RiA4NyBCN1wiLCBcIjg3IEE2IEYwIDlGIDg3IEIyXCIsIFwiODcgQTYgRjAgOUYgODcgQkNcIiwgXCI4NyBBNiBGMCA5RiA4NyBCQVwiLCBcIjg3IEE2IEYwIDlGIDg3IEI5XCIsIFwiODcgQTYgRjAgOUYgODcgQkZcIiwgXCI4NyBBNyBGMCA5RiA4NyBCOFwiLCBcIjg3IEE3IEYwIDlGIDg3IEFEXCIsIFwiODcgQTcgRjAgOUYgODcgQTlcIiwgXCI4NyBBNyBGMCA5RiA4NyBBN1wiLCBcIjg3IEE3IEYwIDlGIDg3IEJFXCIsIFwiODcgQTcgRjAgOUYgODcgQUFcIiwgXCI4NyBBNyBGMCA5RiA4NyBCRlwiLCBcIjg3IEE3IEYwIDlGIDg3IEFGXCIsIFwiODcgQTcgRjAgOUYgODcgQjJcIiwgXCI4NyBBNyBGMCA5RiA4NyBCOVwiLCBcIjg3IEE3IEYwIDlGIDg3IEI0XCIsIFwiODcgQTcgRjAgOUYgODcgQjZcIiwgXCI4NyBBNyBGMCA5RiA4NyBBNlwiLCBcIjg3IEE3IEYwIDlGIDg3IEJDXCIsIFwiODcgQTcgRjAgOUYgODcgQjdcIiwgXCI4NyBBRSBGMCA5RiA4NyBCNFwiLCBcIjg3IEJCIEYwIDlGIDg3IEFDXCIsIFwiODcgQTcgRjAgOUYgODcgQjNcIiwgXCI4NyBBNyBGMCA5RiA4NyBBQ1wiLCBcIjg3IEE3IEYwIDlGIDg3IEFCXCIsIFwiODcgQTcgRjAgOUYgODcgQUVcIiwgXCI4NyBBOCBGMCA5RiA4NyBCQlwiLCBcIjg3IEIwIEYwIDlGIDg3IEFEXCIsIFwiODcgQTggRjAgOUYgODcgQjJcIiwgXCI4NyBBOCBGMCA5RiA4NyBBNlwiLCBcIjg3IEFFIEYwIDlGIDg3IEE4XCIsIFwiODcgQjAgRjAgOUYgODcgQkVcIiwgXCI4NyBBOCBGMCA5RiA4NyBBQlwiLCBcIjg3IEI5IEYwIDlGIDg3IEE5XCIsIFwiODcgQTggRjAgOUYgODcgQjFcIiwgXCI4NyBBOCBGMCA5RiA4NyBCM1wiLCBcIjg3IEE4IEYwIDlGIDg3IEJEXCIsIFwiODcgQTggRjAgOUYgODcgQThcIiwgXCI4NyBBOCBGMCA5RiA4NyBCNFwiLCBcIjg3IEIwIEYwIDlGIDg3IEIyXCIsIFwiODcgQTggRjAgOUYgODcgQUNcIiwgXCI4NyBBOCBGMCA5RiA4NyBBOVwiLCBcIjg3IEE4IEYwIDlGIDg3IEIwXCIsIFwiODcgQTggRjAgOUYgODcgQjdcIiwgXCI4NyBBRCBGMCA5RiA4NyBCN1wiLCBcIjg3IEE4IEYwIDlGIDg3IEJBXCIsIFwiODcgQTggRjAgOUYgODcgQkNcIiwgXCI4NyBBOCBGMCA5RiA4NyBCRVwiLCBcIjg3IEE4IEYwIDlGIDg3IEJGXCIsIFwiODcgQTkgRjAgOUYgODcgQjBcIiwgXCI4NyBBOSBGMCA5RiA4NyBBRlwiLCBcIjg3IEE5IEYwIDlGIDg3IEIyXCIsIFwiODcgQTkgRjAgOUYgODcgQjRcIiwgXCI4NyBBQSBGMCA5RiA4NyBBOFwiLCBcIjg3IEFBIEYwIDlGIDg3IEFDXCIsIFwiODcgQjggRjAgOUYgODcgQkJcIiwgXCI4NyBBQyBGMCA5RiA4NyBCNlwiLCBcIjg3IEFBIEYwIDlGIDg3IEI3XCIsIFwiODcgQUEgRjAgOUYgODcgQUFcIiwgXCI4NyBBQSBGMCA5RiA4NyBCOVwiLCBcIjg3IEFBIEYwIDlGIDg3IEJBXCIsIFwiODcgQUIgRjAgOUYgODcgQjBcIiwgXCI4NyBBQiBGMCA5RiA4NyBCNFwiLCBcIjg3IEFCIEYwIDlGIDg3IEFGXCIsIFwiODcgQUIgRjAgOUYgODcgQUVcIiwgXCI4NyBBQiBGMCA5RiA4NyBCN1wiLCBcIjg3IEFDIEYwIDlGIDg3IEFCXCIsIFwiODcgQjUgRjAgOUYgODcgQUJcIiwgXCI4NyBCOSBGMCA5RiA4NyBBQlwiLCBcIjg3IEFDIEYwIDlGIDg3IEE2XCIsIFwiODcgQUMgRjAgOUYgODcgQjJcIiwgXCI4NyBBQyBGMCA5RiA4NyBBQVwiLCBcIjg3IEE5IEYwIDlGIDg3IEFBXCIsIFwiODcgQUMgRjAgOUYgODcgQURcIiwgXCI4NyBBQyBGMCA5RiA4NyBBRVwiLCBcIjg3IEFDIEYwIDlGIDg3IEI3XCIsIFwiODcgQUMgRjAgOUYgODcgQjFcIiwgXCI4NyBBQyBGMCA5RiA4NyBBOVwiLCBcIjg3IEFDIEYwIDlGIDg3IEI1XCIsIFwiODcgQUMgRjAgOUYgODcgQkFcIiwgXCI4NyBBQyBGMCA5RiA4NyBCOVwiLCBcIjg3IEFDIEYwIDlGIDg3IEFDXCIsIFwiODcgQUMgRjAgOUYgODcgQjNcIiwgXCI4NyBBQyBGMCA5RiA4NyBCQ1wiLCBcIjg3IEFDIEYwIDlGIDg3IEJFXCIsIFwiODcgQUQgRjAgOUYgODcgQjlcIiwgXCI4NyBBRCBGMCA5RiA4NyBCM1wiLCBcIjg3IEFEIEYwIDlGIDg3IEIwXCIsIFwiODcgQUQgRjAgOUYgODcgQkFcIiwgXCI4NyBBRSBGMCA5RiA4NyBCOFwiLCBcIjg3IEFFIEYwIDlGIDg3IEIzXCIsIFwiODcgQUUgRjAgOUYgODcgQTlcIiwgXCI4NyBBRSBGMCA5RiA4NyBCN1wiLCBcIjg3IEFFIEYwIDlGIDg3IEI2XCIsIFwiODcgQUUgRjAgOUYgODcgQUFcIiwgXCI4NyBBRSBGMCA5RiA4NyBCMlwiLCBcIjg3IEFFIEYwIDlGIDg3IEIxXCIsIFwiODcgQUUgRjAgOUYgODcgQjlcIiwgXCI4NyBBOCBGMCA5RiA4NyBBRVwiLCBcIjg3IEFGIEYwIDlGIDg3IEIyXCIsIFwiODcgQUYgRjAgOUYgODcgQjVcIiwgXCI4NyBBRiBGMCA5RiA4NyBBQVwiLCBcIjg3IEFGIEYwIDlGIDg3IEI0XCIsIFwiODcgQjAgRjAgOUYgODcgQkZcIiwgXCI4NyBCMCBGMCA5RiA4NyBBQVwiLCBcIjg3IEIwIEYwIDlGIDg3IEFFXCIsIFwiODcgQkQgRjAgOUYgODcgQjBcIiwgXCI4NyBCMCBGMCA5RiA4NyBCQ1wiLCBcIjg3IEIwIEYwIDlGIDg3IEFDXCIsIFwiODcgQjEgRjAgOUYgODcgQTZcIiwgXCI4NyBCMSBGMCA5RiA4NyBCQlwiLCBcIjg3IEIxIEYwIDlGIDg3IEE3XCIsIFwiODcgQjEgRjAgOUYgODcgQjhcIiwgXCI4NyBCMSBGMCA5RiA4NyBCN1wiLCBcIjg3IEIxIEYwIDlGIDg3IEJFXCIsIFwiODcgQjEgRjAgOUYgODcgQUVcIiwgXCI4NyBCMSBGMCA5RiA4NyBCOVwiLCBcIjg3IEIxIEYwIDlGIDg3IEJBXCIsIFwiODcgQjIgRjAgOUYgODcgQjRcIiwgXCI4NyBCMiBGMCA5RiA4NyBCMFwiLCBcIjg3IEIyIEYwIDlGIDg3IEFDXCIsIFwiODcgQjIgRjAgOUYgODcgQkNcIiwgXCI4NyBCMiBGMCA5RiA4NyBCRVwiLCBcIjg3IEIyIEYwIDlGIDg3IEJCXCIsIFwiODcgQjIgRjAgOUYgODcgQjFcIiwgXCI4NyBCMiBGMCA5RiA4NyBCOVwiLCBcIjg3IEIyIEYwIDlGIDg3IEFEXCIsIFwiODcgQjIgRjAgOUYgODcgQjZcIiwgXCI4NyBCMiBGMCA5RiA4NyBCN1wiLCBcIjg3IEIyIEYwIDlGIDg3IEJBXCIsIFwiODcgQkUgRjAgOUYgODcgQjlcIiwgXCI4NyBCMiBGMCA5RiA4NyBCRFwiLCBcIjg3IEFCIEYwIDlGIDg3IEIyXCIsIFwiODcgQjIgRjAgOUYgODcgQTlcIiwgXCI4NyBCMiBGMCA5RiA4NyBBOFwiLCBcIjg3IEIyIEYwIDlGIDg3IEIzXCIsIFwiODcgQjIgRjAgOUYgODcgQUFcIiwgXCI4NyBCMiBGMCA5RiA4NyBCOFwiLCBcIjg3IEIyIEYwIDlGIDg3IEE2XCIsIFwiODcgQjIgRjAgOUYgODcgQkZcIiwgXCI4NyBCMiBGMCA5RiA4NyBCMlwiLCBcIjg3IEIzIEYwIDlGIDg3IEE2XCIsIFwiODcgQjMgRjAgOUYgODcgQjdcIiwgXCI4NyBCMyBGMCA5RiA4NyBCNVwiLCBcIjg3IEIzIEYwIDlGIDg3IEIxXCIsIFwiODcgQjMgRjAgOUYgODcgQThcIiwgXCI4NyBCMyBGMCA5RiA4NyBCRlwiLCBcIjg3IEIzIEYwIDlGIDg3IEFFXCIsIFwiODcgQjMgRjAgOUYgODcgQUFcIiwgXCI4NyBCMyBGMCA5RiA4NyBBQ1wiLCBcIjg3IEIzIEYwIDlGIDg3IEJBXCIsIFwiODcgQjMgRjAgOUYgODcgQUJcIiwgXCI4NyBCMiBGMCA5RiA4NyBCNVwiLCBcIjg3IEIwIEYwIDlGIDg3IEI1XCIsIFwiODcgQjMgRjAgOUYgODcgQjRcIiwgXCI4NyBCNCBGMCA5RiA4NyBCMlwiLCBcIjg3IEI1IEYwIDlGIDg3IEIwXCIsIFwiODcgQjUgRjAgOUYgODcgQkNcIiwgXCI4NyBCNSBGMCA5RiA4NyBCOFwiLCBcIjg3IEI1IEYwIDlGIDg3IEE2XCIsIFwiODcgQjUgRjAgOUYgODcgQUNcIiwgXCI4NyBCNSBGMCA5RiA4NyBCRVwiLCBcIjg3IEI1IEYwIDlGIDg3IEFBXCIsIFwiODcgQjUgRjAgOUYgODcgQURcIiwgXCI4NyBCNSBGMCA5RiA4NyBCM1wiLCBcIjg3IEI1IEYwIDlGIDg3IEIxXCIsIFwiODcgQjUgRjAgOUYgODcgQjlcIiwgXCI4NyBCNSBGMCA5RiA4NyBCN1wiLCBcIjg3IEI2IEYwIDlGIDg3IEE2XCIsIFwiODcgQjcgRjAgOUYgODcgQUFcIiwgXCI4NyBCNyBGMCA5RiA4NyBCNFwiLCBcIjg3IEI3IEYwIDlGIDg3IEJBXCIsIFwiODcgQjcgRjAgOUYgODcgQkNcIiwgXCI4NyBBNyBGMCA5RiA4NyBCMVwiLCBcIjg3IEI4IEYwIDlGIDg3IEFEXCIsIFwiODcgQjAgRjAgOUYgODcgQjNcIiwgXCI4NyBCMSBGMCA5RiA4NyBBOFwiLCBcIjg3IEI1IEYwIDlGIDg3IEIyXCIsIFwiODcgQkIgRjAgOUYgODcgQThcIiwgXCI4NyBCQyBGMCA5RiA4NyBCOFwiLCBcIjg3IEI4IEYwIDlGIDg3IEIyXCIsIFwiODcgQjggRjAgOUYgODcgQjlcIiwgXCI4NyBCOCBGMCA5RiA4NyBBNlwiLCBcIjg3IEI4IEYwIDlGIDg3IEIzXCIsIFwiODcgQjcgRjAgOUYgODcgQjhcIiwgXCI4NyBCOCBGMCA5RiA4NyBBOFwiLCBcIjg3IEI4IEYwIDlGIDg3IEIxXCIsIFwiODcgQjggRjAgOUYgODcgQUNcIiwgXCI4NyBCOCBGMCA5RiA4NyBCRFwiLCBcIjg3IEI4IEYwIDlGIDg3IEIwXCIsIFwiODcgQjggRjAgOUYgODcgQUVcIiwgXCI4NyBCOCBGMCA5RiA4NyBBN1wiLCBcIjg3IEI4IEYwIDlGIDg3IEI0XCIsIFwiODcgQkYgRjAgOUYgODcgQTZcIiwgXCI4NyBBQyBGMCA5RiA4NyBCOFwiLCBcIjg3IEIwIEYwIDlGIDg3IEI3XCIsIFwiODcgQjggRjAgOUYgODcgQjhcIiwgXCI4NyBBQSBGMCA5RiA4NyBCOFwiLCBcIjg3IEIxIEYwIDlGIDg3IEIwXCIsIFwiODcgQjggRjAgOUYgODcgQTlcIiwgXCI4NyBCOCBGMCA5RiA4NyBCN1wiLCBcIjg3IEI4IEYwIDlGIDg3IEJGXCIsIFwiODcgQjggRjAgOUYgODcgQUFcIiwgXCI4NyBBOCBGMCA5RiA4NyBBRFwiLCBcIjg3IEI4IEYwIDlGIDg3IEJFXCIsIFwiODcgQjkgRjAgOUYgODcgQkNcIiwgXCI4NyBCOSBGMCA5RiA4NyBBRlwiLCBcIjg3IEI5IEYwIDlGIDg3IEJGXCIsIFwiODcgQjkgRjAgOUYgODcgQURcIiwgXCI4NyBCOSBGMCA5RiA4NyBCMVwiLCBcIjg3IEI5IEYwIDlGIDg3IEFDXCIsIFwiODcgQjkgRjAgOUYgODcgQjBcIiwgXCI4NyBCOSBGMCA5RiA4NyBCNFwiLCBcIjg3IEI5IEYwIDlGIDg3IEI5XCIsIFwiODcgQjkgRjAgOUYgODcgQjNcIiwgXCI4NyBCOSBGMCA5RiA4NyBCN1wiLCBcIjg3IEI5IEYwIDlGIDg3IEIyXCIsIFwiODcgQjkgRjAgOUYgODcgQThcIiwgXCI4NyBCOSBGMCA5RiA4NyBCQlwiLCBcIjg3IEJBIEYwIDlGIDg3IEFDXCIsIFwiODcgQkEgRjAgOUYgODcgQTZcIiwgXCI4NyBBNiBGMCA5RiA4NyBBQVwiLCBcIjg3IEFDIEYwIDlGIDg3IEE3XCIsIFwiODcgQkEgRjAgOUYgODcgQjhcIiwgXCI4NyBCQiBGMCA5RiA4NyBBRVwiLCBcIjg3IEJBIEYwIDlGIDg3IEJFXCIsIFwiODcgQkEgRjAgOUYgODcgQkZcIiwgXCI4NyBCQiBGMCA5RiA4NyBCQVwiLCBcIjg3IEJCIEYwIDlGIDg3IEE2XCIsIFwiODcgQkIgRjAgOUYgODcgQUFcIiwgXCI4NyBCQiBGMCA5RiA4NyBCM1wiLCBcIjg3IEJDIEYwIDlGIDg3IEFCXCIsIFwiODcgQUEgRjAgOUYgODcgQURcIiwgXCI4NyBCRSBGMCA5RiA4NyBBQVwiLCBcIjg3IEJGIEYwIDlGIDg3IEIyXCIsIFwiODcgQkYgRjAgOUYgODcgQkNcIl1cblx0ZW1vamlzQXJyYXkgPSBbXVxuXHRmcmVxRW1vamlzQXJyYXkgPSBbXVxuXHRmb3IgZW0gaW4gcmF3RW1vamlzXG5cdFx0ZW1vamlzQXJyYXkucHVzaCBlbW9qaUZvcm1hdHRlcihlbSlcblxuXHRcblx0ZnJlcXVlbnRseVVzZWRFbW9qaXNSYXcgPSBbXCI5MiA4NVwiLCBcIjkxIDg0XCIsIFwiOTEgODVcIiwgXCI5MSA4MlwiLCBcIjkxIDgzXCIsXCI5MiA4NVwiLCBcIjkxIDg0XCIsIFwiOTEgODVcIiwgXCI5MSA4MlwiLCBcIjkxIDgzXCIsXCI5MiA4NVwiLCBcIjkxIDg0XCIsIFwiOTEgODVcIiwgXCI5MSA4MlwiLCBcIjkxIDgzXCIsXCI5MiA4NVwiLCBcIjkxIDg0XCIsIFwiOTEgODVcIiwgXCI5MSA4MlwiLCBcIjkxIDgzXCIsXCI5MiA4NVwiLCBcIjkxIDg0XCIsIFwiOTEgODVcIiwgXCI5MSA4MlwiLCBcIjkxIDgzXCIsXVxuXHRmb3IgZW0gaW4gZnJlcXVlbnRseVVzZWRFbW9qaXNSYXdcblx0XHRmcmVxRW1vamlzQXJyYXkucHVzaCBlbW9qaUZvcm1hdHRlcihlbSlcblxuXHRlbW9qaUtleS5vbiBFdmVudHMuVG91Y2hTdGFydCwgLT5cblx0XHRlbW9qaUtleS5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCJcblx0XHRlbW9qaUJHID0gbmV3IExheWVyIGJhY2tncm91bmRDb2xvcjpcIiNFQ0VFRjFcIlxuXHRcdGJveCA9IGV4cG9ydHMucHgoMzApXG5cdFx0ZW1vamlCRy5jb25zdHJhaW50cyA9ICh0cmFpbGluZzoxLCBsZWFkaW5nOjEsIGJvdHRvbToxLCBoZWlnaHQ6MjU4KVxuXHRcdGV4cG9ydHMubGF5b3V0KClcblx0XHRlbW9qaUdhbGxleSA9IG5ldyBTY3JvbGxDb21wb25lbnQgc3VwZXJMYXllcjplbW9qaUJHLCB3aWR0aDplbW9qaUJHLndpZHRoLCBoZWlnaHQ6ZW1vamlCRy5oZWlnaHQgLSBleHBvcnRzLnB4KDQwKVxuXHRcdGVtb2ppR2FsbGV5LnNwZWVkWSA9IDBcblx0XHRlbW9qaVNwYWNlciA9IGV4cG9ydHMucHgoNilcblx0XHRlbW9qaVBpY2tlciA9IG5ldyBMYXllciBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiLCBuYW1lOlwiZW1vamkgcGlja2VyXCIsIHN1cGVyTGF5ZXI6ZW1vamlCR1xuXHRcdGVtb2ppUGlja2VyLmNvbnN0cmFpbnRzID0gXG5cdFx0XHRsZWFkaW5nOjFcblx0XHRcdHRyYWlsaW5nOjFcblx0XHRcdGJvdHRvbToxXG5cdFx0XHRoZWlnaHQ6NDJcblx0XHRBQkMgPSBuZXcgTGF5ZXIgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIiwgc3VwZXJMYXllcjplbW9qaVBpY2tlclxuXHRcdEFCQy5odG1sID0gXCJBQkNcIlxuXHRcdEFCQy5zdHlsZSA9IHtcblx0XHRcdFwiZm9udC1zaXplXCIgOiBleHBvcnRzLnB4KDE1KSArIFwicHhcIlxuXHRcdFx0XCJmb250LXdlaWdodFwiIDogNTAwXG5cdFx0XHRcImZvbnQtZmFtaWx5XCIgOiAnLWFwcGxlLXN5c3RlbSwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZidcblx0XHRcdFwiY29sb3JcIiA6IFwiIzRGNTU1RFwiXG5cdFx0fVxuXHRcdEFCQy5jb25zdHJhaW50cyA9IFxuXHRcdFx0bGVhZGluZzoxMlxuXHRcdFx0Ym90dG9tOjE0XG5cdFx0XHR3aWR0aDozMFxuXHRcdFx0aGVpZ2h0OjE1XG5cblx0XHRleHBvcnRzLmxheW91dCgpXG5cdFx0cm93ID0gLTFcblx0XHRBQkMub24gRXZlbnRzLkNsaWNrLCAtPlxuXHRcdFx0ZW1vamlCRy5kZXN0cm95KClcblx0XHRmcmVxdWVudCA9IG5ldyBMYXllciBzdXBlckxheWVyOmVtb2ppUGlja2VyLCBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiXG5cdFx0ZnJlcXVlbnQuaHRtbCA9IFwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdFx0XHQ8c3ZnIHdpZHRoPScje2V4cG9ydHMucHgoMTcpfXB4JyBoZWlnaHQ9JyN7ZXhwb3J0cy5weCgxNil9cHgnIHZpZXdCb3g9JzAgMCAxNyAxNicgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyB4bWxuczpza2V0Y2g9J2h0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaC9ucyc+XG5cdFx0XHQgICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjUuMiAoMjUyMzUpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdFx0ICAgIDx0aXRsZT5SZWNlbnQ8L3RpdGxlPlxuXHRcdFx0ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdFx0ICAgIDxkZWZzPjwvZGVmcz5cblx0XHRcdCAgICA8ZyBpZD0naU9TLTktS2V5Ym9hcmRzJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJyBza2V0Y2g6dHlwZT0nTVNQYWdlJz5cblx0XHRcdCAgICAgICAgPGcgaWQ9J2lQaG9uZS02LVBvcnRyYWl0LUxpZ2h0LUNvcHknIHNrZXRjaDp0eXBlPSdNU0FydGJvYXJkR3JvdXAnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC01NS4wMDAwMDAsIC02MzguMDAwMDAwKSc+XG5cdFx0XHQgICAgICAgICAgICA8ZyBpZD0nS2V5Ym9hcmRzJyBza2V0Y2g6dHlwZT0nTVNMYXllckdyb3VwJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgwLjAwMDAwMCwgNDA4LjAwMDAwMCknPlxuXHRcdFx0ICAgICAgICAgICAgICAgIDxnIGlkPSdSZWNlbnQnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDU1LjUwMDAwMCwgMjMwLjAwMDAwMCknIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnPlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGlkPSdCb2R5JyBzdHJva2U9JyM0QTU0NjEnIGN4PSc4JyBjeT0nOCcgcj0nOCc+PC9jaXJjbGU+XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9J003LjUsNy41IEw3LjUsOC41IEw4LjUsOC41IEw4LjUsMiBMNy41LDIgTDcuNSw3LjUgTDQsNy41IEw0LDguNSBMOC41LDguNSBMOC41LDcuNSBMNy41LDcuNSBaJyBpZD0nSGFuZHMnIGZpbGw9JyM0QTU0NjEnPjwvcGF0aD5cblx0XHRcdCAgICAgICAgICAgICAgICA8L2c+XG5cdFx0XHQgICAgICAgICAgICA8L2c+XG5cdFx0XHQgICAgICAgIDwvZz5cblx0XHRcdCAgICA8L2c+XG5cdFx0XHQ8L3N2Zz5cIlxuXHRcdGZyZXF1ZW50LmNvbnN0cmFpbnRzID0gXG5cdFx0XHRsZWFkaW5nIDogW0FCQywgMTVdXG5cdFx0XHRib3R0b206IDE0XG5cdFx0XHR3aWR0aDoxNlxuXHRcdFx0aGVpZ2h0OjIwXG5cdFx0ZXhwb3J0cy5sYXlvdXQoKVxuXHRcdHNtaWxleXMgPSBuZXcgTGF5ZXIgc3VwZXJMYXllcjplbW9qaVBpY2tlciwgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIiwgb3BhY2l0eTouNFxuXHRcdHNtaWxleXMuaHRtbCA9IFwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdFx0XHQ8c3ZnIHdpZHRoPScje2V4cG9ydHMucHgoMTcpfXB4JyBoZWlnaHQ9JyN7ZXhwb3J0cy5weCgxNil9cHgnIHZpZXdCb3g9JzAgMCAxNyAxNicgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyB4bWxuczpza2V0Y2g9J2h0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaC9ucyc+XG5cdFx0XHQgICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjUuMiAoMjUyMzUpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdFx0ICAgIDx0aXRsZT46RDwvdGl0bGU+XG5cdFx0XHQgICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0XHQgICAgPGRlZnM+PC9kZWZzPlxuXHRcdFx0ICAgIDxnIGlkPSdpT1MtOS1LZXlib2FyZHMnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIHNrZXRjaDp0eXBlPSdNU1BhZ2UnPlxuXHRcdFx0ICAgICAgICA8ZyBpZD0naVBob25lLTYtUG9ydHJhaXQtTGlnaHQtQ29weScgc2tldGNoOnR5cGU9J01TQXJ0Ym9hcmRHcm91cCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTg2LjAwMDAwMCwgLTYzOC4wMDAwMDApJz5cblx0XHRcdCAgICAgICAgICAgIDxnIGlkPSdLZXlib2FyZHMnIHNrZXRjaDp0eXBlPSdNU0xheWVyR3JvdXAnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDAuMDAwMDAwLCA0MDguMDAwMDAwKSc+XG5cdFx0XHQgICAgICAgICAgICAgICAgPGcgaWQ9JzpEJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSg4Ny4wMDAwMDAsIDIzMC41MDAwMDApJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJz5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBpZD0nSGVhZCcgc3Ryb2tlPScjNEE1NDYxJyBzdHJva2Utd2lkdGg9JzAuNzg5NDczNjg0JyBjeD0nNy41JyBjeT0nNy41JyByPSc3LjUnPjwvY2lyY2xlPlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSdNNy41LDEzLjUyNjMxNTggQzEwLjI2ODY5MDcsMTMuNTI2MzE1OCAxMi41MTMxNTc5LDEwLjM2ODQyMTIgMTIuNTEzMTU3OSw5LjE4NDIxMDQ1IEMxMi41MTMxNTc5LDcuNjA1MjYzMTcgMTEuNDM4OTA5OCw5LjE4NDIxMDQzIDcuNSw5LjE4NDIxMDUzIEMzLjU2MTA5MDIzLDkuMTg0MjEwNjIgMi40ODY4NDIxMSw3LjYwNTI2MzE3IDIuNDg2ODQyMTEsOS4xODQyMTA0NSBDMi40ODY4NDIxMSwxMC4zNjg0MjEgNC43MzEzMDkzNSwxMy41MjYzMTU4IDcuNSwxMy41MjYzMTU4IFogTTcuNSwxMC45NjA1MjYzIEM4LjkzMjMzMDgzLDExLjE1Nzg5NDcgMTEuNzk2OTkyNSwxMC4zNjg0MjEgMTEuNzk2OTkyNSw5LjQ0NDIzNTUyIEMxMS43OTY5OTI1LDguNzg5NDczNjggMTAuODc2MjA4NCw5LjU3ODk0NzI3IDcuNSw5Ljc3NjMxNTc5IEM0LjEyMzc5MTYyLDkuNTc4OTQ3NDMgMy4yMDMwMDg3Miw4Ljc4OTQ3MzY5IDMuMjAzMDA3NTIsOS40NDQyMzU1MiBDMy4yMDMwMDU4MiwxMC4zNjg0MjEgNi4wNjc2NjkxNywxMS4xNTc4OTQ3IDcuNSwxMC45NjA1MjYzIFonIGlkPSdTbWlsZScgZmlsbD0nIzRBNTQ2MSc+PC9wYXRoPlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSdNNS4yMzY4NDIxMSw2LjMyMzY1OTggQzUuNjQzNzg4NzYsNi4zMjM2NTk4IDUuOTczNjg0MjEsNS44ODE4MzU1NCA1Ljk3MzY4NDIxLDUuMzM2ODE3NjkgQzUuOTczNjg0MjEsNC43OTE3OTk4NSA1LjY0Mzc4ODc2LDQuMzQ5OTc1NTkgNS4yMzY4NDIxMSw0LjM0OTk3NTU5IEM0LjgyOTg5NTQ1LDQuMzQ5OTc1NTkgNC41LDQuNzkxNzk5ODUgNC41LDUuMzM2ODE3NjkgQzQuNSw1Ljg4MTgzNTU0IDQuODI5ODk1NDUsNi4zMjM2NTk4IDUuMjM2ODQyMTEsNi4zMjM2NTk4IFogTTkuNzM2ODQyMTEsNi4zMjM2NTk4IEMxMC4xNDM3ODg4LDYuMzIzNjU5OCAxMC40NzM2ODQyLDUuODgxODM1NTQgMTAuNDczNjg0Miw1LjMzNjgxNzY5IEMxMC40NzM2ODQyLDQuNzkxNzk5ODUgMTAuMTQzNzg4OCw0LjM0OTk3NTU5IDkuNzM2ODQyMTEsNC4zNDk5NzU1OSBDOS4zMjk4OTU0NSw0LjM0OTk3NTU5IDksNC43OTE3OTk4NSA5LDUuMzM2ODE3NjkgQzksNS44ODE4MzU1NCA5LjMyOTg5NTQ1LDYuMzIzNjU5OCA5LjczNjg0MjExLDYuMzIzNjU5OCBaJyBpZD0nRXllcycgZmlsbD0nIzRBNTQ2MSc+PC9wYXRoPlxuXHRcdFx0ICAgICAgICAgICAgICAgIDwvZz5cblx0XHRcdCAgICAgICAgICAgIDwvZz5cblx0XHRcdCAgICAgICAgPC9nPlxuXHRcdFx0ICAgIDwvZz5cblx0XHRcdDwvc3ZnPlwiXG5cdFx0c21pbGV5cy5jb25zdHJhaW50cyA9XG5cdFx0XHRsZWFkaW5nIDogW2ZyZXF1ZW50LCAxNV1cblx0XHRcdGJvdHRvbTogMTRcblx0XHRcdHdpZHRoOjE2XG5cdFx0XHRoZWlnaHQ6MjBcblx0XHRleHBvcnRzLmxheW91dCgpXG5cdFx0YW5pbWFscyA9IG5ldyBMYXllciBzdXBlckxheWVyOmVtb2ppUGlja2VyLCBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiLCBvcGFjaXR5Oi40XG5cdFx0YW5pbWFscy5odG1sID0gXCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0XHRcdDxzdmcgd2lkdGg9JyN7ZXhwb3J0cy5weCgxNyl9cHgnIGhlaWdodD0nI3tleHBvcnRzLnB4KDE2KX1weCcgdmlld0JveD0nMCAwIDE3IDE3JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHhtbG5zOnNrZXRjaD0naHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zJz5cblx0XHRcdCAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNS4yICgyNTIzNSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdFx0XHQgICAgPHRpdGxlPkdyb3VwPC90aXRsZT5cblx0XHRcdCAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHRcdCAgICA8ZGVmcz48L2RlZnM+XG5cdFx0XHQgICAgPGcgaWQ9J1BhZ2UtMScgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCcgc2tldGNoOnR5cGU9J01TUGFnZSc+XG5cdFx0XHQgICAgICAgIDxnIGlkPSdpUGhvbmUtNicgc2tldGNoOnR5cGU9J01TQXJ0Ym9hcmRHcm91cCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTExNy4wMDAwMDAsIC02MzkuMDAwMDAwKScgc3Ryb2tlPScjNEE1MzYxJz5cblx0XHRcdCAgICAgICAgICAgIDxnIGlkPSdpY19Gb29kJyBza2V0Y2g6dHlwZT0nTVNMYXllckdyb3VwJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgxMTguMDAwMDAwLCA2NDAuMDAwMDAwKSc+XG5cdFx0XHQgICAgICAgICAgICAgICAgPGcgaWQ9J0dyb3VwJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJz5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0nTTUuNjgzNzc1MzcsMS4zODE1NjY0NiBDNi4yMzkyNjA2NiwxLjEzNjI0IDYuODUzNzIwMDUsMSA3LjUsMSBDOC4xNDYyNzk5NSwxIDguNzYwNzM5MzQsMS4xMzYyNCA5LjMxNjIyNDYzLDEuMzgxNTY2NDYgQzkuODA4NzkyNzUsMC41NjIzNTkwMTkgMTAuODI1NTg4OCwwIDEyLDAgQzEzLjY1Njg1NDIsMCAxNSwxLjExOTI4ODEzIDE1LDIuNSBDMTUsMy41NTcxMzk4IDE0LjIxMjYyNDYsNC40NjEwMjg0MyAxMy4wOTk5MjI2LDQuODI2NjI1MTQgQzE0LjI0OTY1MjgsNS42NDE4NTQyMiAxNSw2Ljk4MzMwMDYyIDE1LDguNSBDMTUsMTAuNzE2NzE0NCAxMy4zOTcxODczLDEyLjU1OTA3MTkgMTEuMjg3MjY3MSwxMi45MzEzNjczIEMxMC40ODY3MjQ4LDE0LjE3NTc3MDMgOS4wODk2MTY5NiwxNSA3LjUsMTUgQzUuOTEwMzgzMDQsMTUgNC41MTMyNzUyNCwxNC4xNzU3NzAzIDMuNzEyNzMyOTEsMTIuOTMxMzY3MyBDMS42MDI4MTI2OCwxMi41NTkwNzE5IDAsMTAuNzE2NzE0NCAwLDguNSBDMCw2Ljk4MzMwMDYyIDAuNzUwMzQ3MjQ0LDUuNjQxODU0MjIgMS45MDAwNzc0MSw0LjgyNjYyNTE0IEMwLjc4NzM3NTQ0NSw0LjQ2MTAyODQzIDAsMy41NTcxMzk4IDAsMi41IEMwLDEuMTE5Mjg4MTMgMS4zNDMxNDU3NSwwIDMsMCBDNC4xNzQ0MTEyMiwwIDUuMTkxMjA3MjUsMC41NjIzNTkwMTkgNS42ODM3NzUzNywxLjM4MTU2NjQ2IFonIGlkPSdPdmFsLTgnPjwvcGF0aD5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0nTTUuNzM4MzQyMjgsMTIgQzUuODYyOTA5NzksMTIgNi4xNDY0MjM1MywxMiA2LjE0NjQyMzUzLDEyIEM2LjE0NjQyMzUzLDEyIDYuNDMyMTU2OTYsMTIuNDQyNjEyMyA2LjUyNDY1ODIsMTIuNDkxOTczOSBDNi42NjQ1NTYwMSwxMi41NjY2Mjc3IDcsMTIuNDkxOTczOSA3LDEyLjQ5MTk3MzkgTDcsMTIgTDgsMTIgTDgsMTIuNDkxOTczOSBMOC40OTc5OTIyOCwxMi40OTE5NzM5IEw4Ljg0MzAxNzY5LDEyIEw5LjM5MTg0NTcsMTIgQzkuMzkxODQ1NywxMiA4Ljk5NTk4NDU3LDEyLjk4Mzk0NzggOC40OTc5OTIyOCwxMi45ODM5NDc4IEw2LjYwNzAyNDA3LDEyLjk4Mzk0NzggQzYuMjE0MDQ4MTMsMTIuOTgzOTQ3OCA1LjQ1OTk2MDk0LDEyIDUuNzM4MzQyMjgsMTIgWicgaWQ9J1JlY3RhbmdsZS00NC1Db3B5LTInPjwvcGF0aD5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBpZD0nT3ZhbC0xNCcgY3g9JzEwLjUnIGN5PSc3LjUnIHI9JzAuNSc+PC9jaXJjbGU+XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgaWQ9J092YWwtMTQtQ29weScgY3g9JzQuNScgY3k9JzcuNScgcj0nMC41Jz48L2NpcmNsZT5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0nTTEyLjY5OTk5NjksNSBDMTIuNjk5OTk2OSwzLjA2NzAwMzM4IDExLjEzMjk5MzYsMS41IDkuMTk5OTk2OTUsMS41JyBpZD0nT3ZhbC0xNic+PC9wYXRoPlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSdNNS41LDUgQzUuNSwzLjA2NzAwMzM4IDMuOTMyOTk2NjIsMS41IDIsMS41JyBpZD0nT3ZhbC0xNi1Db3B5JyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgzLjc1MDAwMCwgMy4yNTAwMDApIHNjYWxlKC0xLCAxKSB0cmFuc2xhdGUoLTMuNzUwMDAwLCAtMy4yNTAwMDApICc+PC9wYXRoPlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0nUmVjdGFuZ2xlLTQ0LUNvcHknIHg9JzcnIHk9JzExJyB3aWR0aD0nMScgaGVpZ2h0PScxJz48L3JlY3Q+XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9J002LDEwIEw2LjUsMTAgTDYuNDk5OTk5OTksOS41IEw4LjUwMDAwMDA1LDkuNSBMOC41MDAwMDAwNSwxMCBMOSwxMCBMOSwxMC41IEw4LjUsMTAuNSBMOC41LDExIEw2LjUsMTEgTDYuNSwxMC41IEw2LDEwLjUgTDYsMTAgWicgaWQ9J1BhdGgnPjwvcGF0aD5cblx0XHRcdCAgICAgICAgICAgICAgICA8L2c+XG5cdFx0XHQgICAgICAgICAgICA8L2c+XG5cdFx0XHQgICAgICAgIDwvZz5cblx0XHRcdCAgICA8L2c+XG5cdFx0XHQ8L3N2Zz5cIlxuXHRcdGFuaW1hbHMuY29uc3RyYWludHMgPVxuXHRcdFx0bGVhZGluZyA6IFtzbWlsZXlzLCAxNV1cblx0XHRcdGJvdHRvbTogMTRcblx0XHRcdHdpZHRoOjE2XG5cdFx0XHRoZWlnaHQ6MjBcblx0XHRleHBvcnRzLmxheW91dCgpXG5cdFx0Zm9vZCA9IG5ldyBMYXllciBzdXBlckxheWVyOmVtb2ppUGlja2VyLCBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiLCBvcGFjaXR5Oi40XG5cdFx0Zm9vZC5odG1sID0gXCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0XHRcdDxzdmcgd2lkdGg9JyN7ZXhwb3J0cy5weCgxNyl9cHgnIGhlaWdodD0nI3tleHBvcnRzLnB4KDE2KX1weCcgdmlld0JveD0nMCAwIDE3IDE3JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHhtbG5zOnNrZXRjaD0naHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zJz5cblx0XHRcdCAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNS4yICgyNTIzNSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdFx0XHQgICAgPHRpdGxlPkZvb2Q8L3RpdGxlPlxuXHRcdFx0ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdFx0ICAgIDxkZWZzPjwvZGVmcz5cblx0XHRcdCAgICA8ZyBpZD0naU9TLTktS2V5Ym9hcmRzJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJyBza2V0Y2g6dHlwZT0nTVNQYWdlJz5cblx0XHRcdCAgICAgICAgPGcgaWQ9J2lQaG9uZS02LVBvcnRyYWl0LUxpZ2h0LUNvcHknIHNrZXRjaDp0eXBlPSdNU0FydGJvYXJkR3JvdXAnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC0xNDguMDAwMDAwLCAtNjM3LjAwMDAwMCknPlxuXHRcdFx0ICAgICAgICAgICAgPGcgaWQ9J0tleWJvYXJkcycgc2tldGNoOnR5cGU9J01TTGF5ZXJHcm91cCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMC4wMDAwMDAsIDQwOC4wMDAwMDApJz5cblx0XHRcdCAgICAgICAgICAgICAgICA8ZyBpZD0nRm9vZCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMTQ5LjUwMDAwMCwgMjI5LjUwMDAwMCknIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnPlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSdNNS41LDE1LjUgTDEsMTUuNSBMMCw1IEw2LjUsNSBMNi4yNjM2MDkzMyw3LjQ4MjEwMjAyJyBpZD0nRHJpbmsnIHN0cm9rZT0nIzRBNTQ2MSc+PC9wYXRoPlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSdNNi4wMTA3NzU0NSwxLjk2OTMwMDk4IEw2LjUxNTcxMzUyLDUuMjIyNzA1MzkgTDUuNzE5MDgxODQsNS42Nzk0NzgxMiBMNS4wMzg5MDA5LDEuOTY5MzAwOTggTDQuODU1NTcyNDcsMS45NjkzMDA5OCBMNC44NTU1NzI0NywwLjk2OTMwMDk4IEw4Ljg1NTU3MjQ3LDAuOTY5MzAwOTggTDguODU1NTcyNDcsMS45NjkzMDA5OCBMNi4wMTA3NzU0NSwxLjk2OTMwMDk4IFonIGlkPSdTdHJhdycgZmlsbD0nIzRBNTQ2MScgdHJhbnNmb3JtPSd0cmFuc2xhdGUoNi44NTU1NzIsIDMuMzI0MzkwKSByb3RhdGUoMjQuMDAwMDAwKSB0cmFuc2xhdGUoLTYuODU1NTcyLCAtMy4zMjQzOTApICc+PC9wYXRoPlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0nQm90dG9tLUJ1bicgc3Ryb2tlPScjNEE1NDYxJyB4PSczJyB5PScxNCcgd2lkdGg9JzEwLjUnIGhlaWdodD0nMS41JyByeD0nMSc+PC9yZWN0PlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSdNMS41LDEyLjUwMjQ0MDggQzEuNSwxMS45NDg4MDggMS45NDkxNjkxNiwxMS41IDIuNDkyNjg3MjMsMTEuNSBMMTQuMDA3MzEyOCwxMS41IEMxNC41NTU1NTg4LDExLjUgMTUsMTEuOTQ2OTQ5OSAxNSwxMi41MDI0NDA4IEwxNSwxMi45OTc1NTkyIEMxNSwxMy41NTExOTIgMTQuNTUwODMwOCwxNCAxNC4wMDczMTI4LDE0IEwyLjQ5MjY4NzIzLDE0IEMxLjk0NDQ0MTIxLDE0IDEuNSwxMy41NTMwNTAxIDEuNSwxMi45OTc1NTkyIEwxLjUsMTIuNTAyNDQwOCBaIE0zLjkzMzAwMDAzLDExLjgzOTI3MjcgQzMuNDE3NzE4MzQsMTEuNjUxODk3NiAzLjQ0NDgzNjk3LDExLjUgMy45OTU1Nzc1LDExLjUgTDEzLjAwNDQyMjUsMTEuNSBDMTMuNTU0MjY0OCwxMS41IDEzLjU4NjYwNjEsMTEuNjUwMzI1MSAxMy4wNjcsMTEuODM5MjcyNyBMOC41LDEzLjUgTDMuOTMzMDAwMDMsMTEuODM5MjcyNyBaJyBpZD0nJnF1b3Q7UGF0dHkmcXVvdDsnIGZpbGw9JyM0QTU0NjEnPjwvcGF0aD5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0nTTIuNSwxMC41IEwxMy41LDEwLjUgTDE1LDExLjUgTDEsMTEuNSBMMi41LDEwLjUgWicgaWQ9J0NoZWVzZScgZmlsbD0nIzRBNTQ2MSc+PC9wYXRoPlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSdNOC4yNSwxMC41IEMxMS40MjU2MzczLDEwLjUgMTQsMTAuMzI4NDI3MSAxNCw5LjUgQzE0LDguNjcxNTcyODggMTEuNDI1NjM3Myw4IDguMjUsOCBDNS4wNzQzNjI2OSw4IDIuNSw4LjY3MTU3Mjg4IDIuNSw5LjUgQzIuNSwxMC4zMjg0MjcxIDUuMDc0MzYyNjksMTAuNSA4LjI1LDEwLjUgWicgaWQ9J1RvcC1CdW4nIHN0cm9rZT0nIzRBNTQ2MScgc3Ryb2tlLXdpZHRoPScwLjc1Jz48L3BhdGg+XG5cdFx0XHQgICAgICAgICAgICAgICAgPC9nPlxuXHRcdFx0ICAgICAgICAgICAgPC9nPlxuXHRcdFx0ICAgICAgICA8L2c+XG5cdFx0XHQgICAgPC9nPlxuXHRcdFx0PC9zdmc+XCJcblx0XHRmb29kLmNvbnN0cmFpbnRzID1cblx0XHRcdGxlYWRpbmcgOiBbYW5pbWFscywgMTVdXG5cdFx0XHRib3R0b206IDE0XG5cdFx0XHR3aWR0aDoxNlxuXHRcdFx0aGVpZ2h0OjIwXG5cdFx0ZXhwb3J0cy5sYXlvdXQoKVxuXHRcdGFjdGl2aXR5ID0gbmV3IExheWVyIHN1cGVyTGF5ZXI6ZW1vamlQaWNrZXIsIGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCIsIG9wYWNpdHk6LjRcblx0XHRhY3Rpdml0eS5odG1sID0gXCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0XHRcdDxzdmcgd2lkdGg9JyN7ZXhwb3J0cy5weCgxNil9cHgnIGhlaWdodD0nI3tleHBvcnRzLnB4KDE2KX1weCcgdmlld0JveD0nMCAwIDE2IDE2JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHhtbG5zOnNrZXRjaD0naHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zJz5cblx0XHRcdCAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNS4yICgyNTIzNSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdFx0XHQgICAgPHRpdGxlPlNvY2NlciBCYWxsPC90aXRsZT5cblx0XHRcdCAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHRcdCAgICA8ZGVmcz5cblx0XHRcdCAgICAgICAgPGNpcmNsZSBpZD0ncGF0aC0xJyBjeD0nOCcgY3k9JzgnIHI9JzgnPjwvY2lyY2xlPlxuXHRcdFx0ICAgIDwvZGVmcz5cblx0XHRcdCAgICA8ZyBpZD0nUGFnZS0xJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJyBza2V0Y2g6dHlwZT0nTVNQYWdlJz5cblx0XHRcdCAgICAgICAgPGcgaWQ9J2lQaG9uZS02JyBza2V0Y2g6dHlwZT0nTVNBcnRib2FyZEdyb3VwJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtMTc5LjAwMDAwMCwgLTYzOS4wMDAwMDApJz5cblx0XHRcdCAgICAgICAgICAgIDxnIGlkPSdTb2NjZXItQmFsbCcgc2tldGNoOnR5cGU9J01TTGF5ZXJHcm91cCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMTc5LjAwMDAwMCwgNjM5LjAwMDAwMCknPlxuXHRcdFx0ICAgICAgICAgICAgICAgIDxtYXNrIGlkPSdtYXNrLTInIHNrZXRjaDpuYW1lPSdNYXNrJyBmaWxsPSd3aGl0ZSc+XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0nI3BhdGgtMSc+PC91c2U+XG5cdFx0XHQgICAgICAgICAgICAgICAgPC9tYXNrPlxuXHRcdFx0ICAgICAgICAgICAgICAgIDx1c2UgaWQ9J01hc2snIHN0cm9rZT0nIzRBNTM2MScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCcgeGxpbms6aHJlZj0nI3BhdGgtMSc+PC91c2U+XG5cdFx0XHQgICAgICAgICAgICAgICAgPHBhdGggZD0nTTYsMTIuMTIwMzA0NiBMMTIuODU3MzM4NCw4IEwxMy4zNzIzNzY1LDguODU3MTY3MyBMNi41MTUwMzgwNywxMi45Nzc0NzE5IEw2LDEyLjEyMDMwNDYgTDYsMTIuMTIwMzA0NiBaJyBpZD0nUmVjdGFuZ2xlLTQ3JyBmaWxsPScjNEE1MzYxJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJyBtYXNrPSd1cmwoI21hc2stMiknPjwvcGF0aD5cblx0XHRcdCAgICAgICAgICAgICAgICA8cGF0aCBkPSdNMTEuODQ5NjQ4LDguNzI2MDU1MSBMMTkuMTAwMTEwMyw1LjM0NTEwOTAxIEwxOS41MjI3Mjg1LDYuMjUxNDE2OCBMMTIuMjcyMjY2Miw5LjYzMjM2Mjg5IEwxMS44NDk2NDgsOC43MjYwNTUxIEwxMS44NDk2NDgsOC43MjYwNTUxIFonIGlkPSdSZWN0YW5nbGUtNDctQ29weS0zJyBmaWxsPScjNEE1MzYxJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJyBtYXNrPSd1cmwoI21hc2stMiknPjwvcGF0aD5cblx0XHRcdCAgICAgICAgICAgICAgICA8cGF0aCBkPSdNNiwzLjEyMDMwNDYgTDEyLjg1NzMzODQsLTEgTDEzLjM3MjM3NjUsLTAuMTQyODMyNjk5IEw2LjUxNTAzODA3LDMuOTc3NDcxOSBMNiwzLjEyMDMwNDYgTDYsMy4xMjAzMDQ2IFonIGlkPSdSZWN0YW5nbGUtNDctQ29weS0yJyBmaWxsPScjNEE1MzYxJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJyBtYXNrPSd1cmwoI21hc2stMiknPjwvcGF0aD5cblx0XHRcdCAgICAgICAgICAgICAgICA8cGF0aCBkPSdNLTEsNy4xMjAzMDQ2IEw1Ljg1NzMzODQxLDMgTDYuMzcyMzc2NDgsMy44NTcxNjczIEwtMC40ODQ5NjE5MjUsNy45Nzc0NzE5IEwtMSw3LjEyMDMwNDYgTC0xLDcuMTIwMzA0NiBaJyBpZD0nUmVjdGFuZ2xlLTQ3LUNvcHktNCcgZmlsbD0nIzRBNTM2MScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCcgbWFzaz0ndXJsKCNtYXNrLTIpJz48L3BhdGg+XG5cdFx0XHQgICAgICAgICAgICAgICAgPHJlY3QgaWQ9J1JlY3RhbmdsZS01MCcgZmlsbD0nIzRBNTM2MScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCcgbWFzaz0ndXJsKCNtYXNrLTIpJyB4PSc0JyB5PSc2JyB3aWR0aD0nMScgaGVpZ2h0PSc1Jz48L3JlY3Q+XG5cdFx0XHQgICAgICAgICAgICAgICAgPHJlY3QgaWQ9J1JlY3RhbmdsZS01MScgZmlsbD0nIzRBNTM2MScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCcgbWFzaz0ndXJsKCNtYXNrLTIpJyB4PScxMS41JyB5PSczJyB3aWR0aD0nMScgaGVpZ2h0PScxMic+PC9yZWN0PlxuXHRcdFx0ICAgICAgICAgICAgICAgIDxwYXRoIGQ9J001LDQuODU3MTY3MyBMMTEuODU3MzM4NCw4Ljk3NzQ3MTkgTDEyLjM3MjM3NjUsOC4xMjAzMDQ2IEw1LjUxNTAzODA3LDQgTDUsNC44NTcxNjczJyBpZD0nUmVjdGFuZ2xlLTQ3LUNvcHknIGZpbGw9JyM0QTUzNjEnIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnIG1hc2s9J3VybCgjbWFzay0yKSc+PC9wYXRoPlxuXHRcdFx0ICAgICAgICAgICAgICAgIDxwYXRoIGQ9J001LDEyLjg1NzE2NzMgTDExLjg1NzMzODQsMTYuOTc3NDcxOSBMMTIuMzcyMzc2NSwxNi4xMjAzMDQ2IEw1LjUxNTAzODA3LDEyIEw1LDEyLjg1NzE2NzMnIGlkPSdSZWN0YW5nbGUtNDctQ29weS01JyBmaWxsPScjNEE1MzYxJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJyBtYXNrPSd1cmwoI21hc2stMiknPjwvcGF0aD5cblx0XHRcdCAgICAgICAgICAgICAgICA8cGF0aCBkPSdNMTEuOTA0ODk3Miw2LjE0NzY2MDY0IEwxMy44NzE0MjI3LDguMzMxNzA4NDkgTDEyLjQwMTk1OTYsMTAuODc2ODkzMyBMOS41MjcyNTU4OSwxMC4yNjU4NTYyIEw5LjIyMDA1NDQ1LDcuMzQzMDI5NjUgTDExLjkwNDg5NzIsNi4xNDc2NjA2NCcgaWQ9J1BvbHlnb24tMScgZmlsbD0nI0Q4RDhEOCcgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCcgbWFzaz0ndXJsKCNtYXNrLTIpJz48L3BhdGg+XG5cdFx0XHQgICAgICAgICAgICAgICAgPHBhdGggZD0nTTExLjkwNDg5NzIsNi4xNDc2NjA2NCBMMTMuODcxNDIyNyw4LjMzMTcwODQ5IEwxMi40MDE5NTk2LDEwLjg3Njg5MzMgTDkuNTI3MjU1ODksMTAuMjY1ODU2MiBMOS4yMjAwNTQ0NSw3LjM0MzAyOTY1IEwxMS45MDQ4OTcyLDYuMTQ3NjYwNjQnIGlkPSdQb2x5Z29uLTEtQ29weScgZmlsbD0nIzRBNTM2MScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCcgbWFzaz0ndXJsKCNtYXNrLTIpJz48L3BhdGg+XG5cdFx0XHQgICAgICAgICAgICAgICAgPHBhdGggZD0nTTcuNDU3NzExODksMy4xOTUwNDczOSBMNy4zNTUxNDQ4NCw2LjEzMjE4MzMzIEw0LjUzMDA2NzYsNi45NDIyNjEyIEwyLjg4NjY0MDg5LDQuNTA1NzgwOSBMNC42OTYwMjQ1NywyLjE4OTg3NTQxIEw3LjQ1NzcxMTg5LDMuMTk1MDQ3MzknIGlkPSdQb2x5Z29uLTEtQ29weS0yJyBmaWxsPScjNEE1MzYxJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJyBtYXNrPSd1cmwoI21hc2stMiknPjwvcGF0aD5cblx0XHRcdCAgICAgICAgICAgICAgICA8cGF0aCBkPSdNNy40NTc3MTE4OSwxMS4xOTUwNDc0IEw3LjM1NTE0NDg0LDE0LjEzMjE4MzMgTDQuNTMwMDY3NiwxNC45NDIyNjEyIEwyLjg4NjY0MDg5LDEyLjUwNTc4MDkgTDQuNjk2MDI0NTcsMTAuMTg5ODc1NCBMNy40NTc3MTE4OSwxMS4xOTUwNDc0JyBpZD0nUG9seWdvbi0xLUNvcHktMycgZmlsbD0nIzRBNTM2MScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCcgbWFzaz0ndXJsKCNtYXNrLTIpJz48L3BhdGg+XG5cdFx0XHQgICAgICAgICAgICAgICAgPHBhdGggZD0nTTE0LjU0MzE3MDEsMC4wNzI1OTM5MzE0IEwxNC40NDA2MDMxLDMuMDA5NzI5ODggTDExLjYxNTUyNTgsMy44MTk4MDc3NCBMOS45NzIwOTkxMiwxLjM4MzMyNzQ1IEwxMS43ODE0ODI4LC0wLjkzMjU3ODA1IEwxNC41NDMxNzAxLDAuMDcyNTkzOTMxNCcgaWQ9J1BvbHlnb24tMS1Db3B5LTQnIGZpbGw9JyM0QTUzNjEnIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnIG1hc2s9J3VybCgjbWFzay0yKSc+PC9wYXRoPlxuXHRcdFx0ICAgICAgICAgICAgPC9nPlxuXHRcdFx0ICAgICAgICA8L2c+XG5cdFx0XHQgICAgPC9nPlxuXHRcdFx0PC9zdmc+XCJcblx0XHRhY3Rpdml0eS5jb25zdHJhaW50cyA9XG5cdFx0XHRsZWFkaW5nIDogW2Zvb2QsIDE1XVxuXHRcdFx0Ym90dG9tOiAxNFxuXHRcdFx0d2lkdGg6MTZcblx0XHRcdGhlaWdodDoyMFxuXHRcdGV4cG9ydHMubGF5b3V0KClcblx0XHR0cmF2ZWwgPSBuZXcgTGF5ZXIgc3VwZXJMYXllcjplbW9qaVBpY2tlciwgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIiwgb3BhY2l0eTouNFxuXHRcdHRyYXZlbC5odG1sID0gXCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0XHRcdDxzdmcgd2lkdGg9JyN7ZXhwb3J0cy5weCgxNyl9cHgnIGhlaWdodD0nI3tleHBvcnRzLnB4KDE2KX1weCcgdmlld0JveD0nMCAwIDE3IDE2JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHhtbG5zOnNrZXRjaD0naHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zJz5cblx0XHRcdCAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNS4yICgyNTIzNSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdFx0XHQgICAgPHRpdGxlPlRyYW5zcG9ydDwvdGl0bGU+XG5cdFx0XHQgICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0XHQgICAgPGRlZnM+PC9kZWZzPlxuXHRcdFx0ICAgIDxnIGlkPSdpT1MtOS1LZXlib2FyZHMnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIHNrZXRjaDp0eXBlPSdNU1BhZ2UnPlxuXHRcdFx0ICAgICAgICA8ZyBpZD0naVBob25lLTYtUG9ydHJhaXQtTGlnaHQtQ29weScgc2tldGNoOnR5cGU9J01TQXJ0Ym9hcmRHcm91cCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTI0MS4wMDAwMDAsIC02MzguMDAwMDAwKSc+XG5cdFx0XHQgICAgICAgICAgICA8ZyBpZD0nS2V5Ym9hcmRzJyBza2V0Y2g6dHlwZT0nTVNMYXllckdyb3VwJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgwLjAwMDAwMCwgNDA4LjAwMDAwMCknPlxuXHRcdFx0ICAgICAgICAgICAgICAgIDxnIGlkPSdUcmFuc3BvcnQnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDI0MS41MDAwMDAsIDIzMC4wMDAwMDApJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJz5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0nTTAsNiBMMSw2IEwxLDE1IEwwLDE1IEwwLDYgWiBNMTUsNCBMMTYsNCBMMTYsMTUgTDE1LDE1IEwxNSw0IFogTTMuNSwwIEw0LjUsMCBMNC41LDcgTDMuNSw3IEwzLjUsMCBaIE0xLDYgTDMuNSw2IEwzLjUsNyBMMSw3IEwxLDYgWiBNNC41LDAgTDkuNSwwIEw5LjUsMSBMNC41LDEgTDQuNSwwIFogTTkuNSwwIEwxMC41LDAgTDEwLjUsNiBMOS41LDYgTDkuNSwwIFogTTEwLjUsNCBMMTUsNCBMMTUsNSBMMTAuNSw1IEwxMC41LDQgWicgaWQ9J1NreWxpbmUnIGZpbGw9JyM0QTU0NjEnPjwvcGF0aD5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgPGcgaWQ9J1dpbmRvd3MnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDIuMDAwMDAwLCAyLjAwMDAwMCknIGZpbGw9JyM0QTU0NjEnPlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9J1dpbmRvdycgeD0nMCcgeT0nNicgd2lkdGg9JzEnIGhlaWdodD0nMSc+PC9yZWN0PlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9J1dpbmRvdycgeD0nMy41JyB5PScwJyB3aWR0aD0nMScgaGVpZ2h0PScxJz48L3JlY3Q+XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0nV2luZG93JyB4PSc1LjUnIHk9JzAnIHdpZHRoPScxJyBoZWlnaHQ9JzEnPjwvcmVjdD5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSdXaW5kb3cnIHg9JzUuNScgeT0nMicgd2lkdGg9JzEnIGhlaWdodD0nMSc+PC9yZWN0PlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9J1dpbmRvdycgeD0nMy41JyB5PScyJyB3aWR0aD0nMScgaGVpZ2h0PScxJz48L3JlY3Q+XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0nV2luZG93JyB4PScxMScgeT0nNCcgd2lkdGg9JzEnIGhlaWdodD0nMSc+PC9yZWN0PlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9J1dpbmRvdycgeD0nMTEnIHk9JzYnIHdpZHRoPScxJyBoZWlnaHQ9JzEnPjwvcmVjdD5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgPC9nPlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA8ZyBpZD0nQ2FyJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgyLjUwMDAwMCwgNi41MDAwMDApJz5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9J004LjUsOCBMMi41LDggTDIuNSw5LjUgTDAuNSw5LjUgTDAuNSw3Ljg2ODExNDUgQzAuMjAxMjAyMTkyLDcuNjk1ODI3MDIgMCw3LjM3MDkxMzYzIDAsNi45OTA2MzExIEwwLDUuMDA5MzY4OSBDMCw0LjQ1MTkwOTg1IDAuNDQ0ODM2OTc0LDQgMC45OTU1Nzc0OTksNCBMMTAuMDA0NDIyNSw0IEMxMC41NTQyNjQ4LDQgMTEsNC40NDMzNTMxOCAxMSw1LjAwOTM2ODkgTDExLDYuOTkwNjMxMSBDMTEsNy4zNjUzMzE1IDEwLjc5OTAyNDQsNy42OTIzNDUxOSAxMC41LDcuODY2NDkwMDIgTDEwLjUsOS41IEw4LjUsOS41IEw4LjUsOCBaIE0xLjc1LDYuNSBDMi4xNjQyMTM1Niw2LjUgMi41LDYuMTY0MjEzNTYgMi41LDUuNzUgQzIuNSw1LjMzNTc4NjQ0IDIuMTY0MjEzNTYsNSAxLjc1LDUgQzEuMzM1Nzg2NDQsNSAxLDUuMzM1Nzg2NDQgMSw1Ljc1IEMxLDYuMTY0MjEzNTYgMS4zMzU3ODY0NCw2LjUgMS43NSw2LjUgWiBNOS4yNSw2LjUgQzkuNjY0MjEzNTYsNi41IDEwLDYuMTY0MjEzNTYgMTAsNS43NSBDMTAsNS4zMzU3ODY0NCA5LjY2NDIxMzU2LDUgOS4yNSw1IEM4LjgzNTc4NjQ0LDUgOC41LDUuMzM1Nzg2NDQgOC41LDUuNzUgQzguNSw2LjE2NDIxMzU2IDguODM1Nzg2NDQsNi41IDkuMjUsNi41IFogTTAuNSw3IEwxMC41LDcgTDEwLjUsNy41IEwwLjUsNy41IEwwLjUsNyBaIE0zLDYuNSBMOCw2LjUgTDgsNyBMMyw3IEwzLDYuNSBaJyBpZD0nQm9keScgZmlsbD0nIzRBNTQ2MSc+PC9wYXRoPlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0nTTEuNSw0LjUgTDEuNSwzIEMxLjUsMS4zNDMxNDU3NSAyLjgzOTAyMDEzLDAgNC41MDE2NjU0NywwIEw2LjQ5ODMzNDUzLDAgQzguMTU2MTA4NTksMCA5LjUsMS4zNDY1MTcxMiA5LjUsMyBMOS41LDUnIGlkPSdSb29mJyBzdHJva2U9JyM0QTU0NjEnPjwvcGF0aD5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgPC9nPlxuXHRcdFx0ICAgICAgICAgICAgICAgIDwvZz5cblx0XHRcdCAgICAgICAgICAgIDwvZz5cblx0XHRcdCAgICAgICAgPC9nPlxuXHRcdFx0ICAgIDwvZz5cblx0XHRcdDwvc3ZnPlwiXG5cdFx0dHJhdmVsLmNvbnN0cmFpbnRzID1cblx0XHRcdGxlYWRpbmcgOiBbYWN0aXZpdHksIDE1XVxuXHRcdFx0Ym90dG9tOiAxNFxuXHRcdFx0d2lkdGg6MTZcblx0XHRcdGhlaWdodDoyMFxuXHRcdGV4cG9ydHMubGF5b3V0KClcblx0XHRvYmplY3RzID0gbmV3IExheWVyIHN1cGVyTGF5ZXI6ZW1vamlQaWNrZXIsIGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCIsIG9wYWNpdHk6LjRcblx0XHRvYmplY3RzLmh0bWwgPSBcIjw/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyc/PlxuXHRcdFx0XHQ8c3ZnIHdpZHRoPScje2V4cG9ydHMucHgoMTEpfXB4JyBoZWlnaHQ9JyN7ZXhwb3J0cy5weCgxNil9cHgnIHZpZXdCb3g9JzAgMCAxMSAxNicgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyB4bWxuczpza2V0Y2g9J2h0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaC9ucyc+XG5cdFx0XHQgICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjUuMiAoMjUyMzUpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdFx0ICAgIDx0aXRsZT5MaWdodGJ1bGI8L3RpdGxlPlxuXHRcdFx0ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdFx0ICAgIDxkZWZzPjwvZGVmcz5cblx0XHRcdCAgICA8ZyBpZD0nUGFnZS0xJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJyBza2V0Y2g6dHlwZT0nTVNQYWdlJz5cblx0XHRcdCAgICAgICAgPGcgaWQ9J2lQaG9uZS02JyBza2V0Y2g6dHlwZT0nTVNBcnRib2FyZEdyb3VwJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtMjQ0LjAwMDAwMCwgLTYzOS4wMDAwMDApJyBzdHJva2U9JyM0QTUzNjEnPlxuXHRcdFx0ICAgICAgICAgICAgPGcgaWQ9J0xpZ2h0YnVsYicgc2tldGNoOnR5cGU9J01TTGF5ZXJHcm91cCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMjQ0LjAwMDAwMCwgNjM5LjAwMDAwMCknPlxuXHRcdFx0ICAgICAgICAgICAgICAgIDxwYXRoIGQ9J004LDEwLjQwMDI5MDQgQzkuNzgwODM3OTUsOS40ODk5MzQ5MSAxMSw3LjYzNzM0MjczIDExLDUuNSBDMTEsMi40NjI0MzM4OCA4LjUzNzU2NjEyLDAgNS41LDAgQzIuNDYyNDMzODgsMCAwLDIuNDYyNDMzODggMCw1LjUgQzAsNy42MzczNDI3MyAxLjIxOTE2MjA1LDkuNDg5OTM0OTEgMywxMC40MDAyOTA0IEwzLDE0LjAwMjA4NjkgQzMsMTUuMTAxNzM5NCAzLjg5NzYxNjAyLDE2IDUuMDA0ODgxNSwxNiBMNS45OTUxMTg1LDE2IEM3LjEwNjEwMDIsMTYgOCwxNS4xMDU1MDM4IDgsMTQuMDAyMDg2OSBMOCwxMC40MDAyOTA0IFonIGlkPSdPdmFsLTE3JyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJz48L3BhdGg+XG5cdFx0XHQgICAgICAgICAgICAgICAgPHJlY3QgaWQ9J1JlY3RhbmdsZS01MCcgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCcgeD0nMycgeT0nMTInIHdpZHRoPSc1JyBoZWlnaHQ9JzEnPjwvcmVjdD5cblx0XHRcdCAgICAgICAgICAgICAgICA8cmVjdCBpZD0nUmVjdGFuZ2xlLTUxJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJyB4PSc0JyB5PScxMy41JyB3aWR0aD0nMS41JyBoZWlnaHQ9JzEnPjwvcmVjdD5cblx0XHRcdCAgICAgICAgICAgICAgICA8cGF0aCBkPSdNNSw4LjUgQzUsOC41IDMuNDk5OTk5OTksNy41MDAwMDAwMSA0LDcgQzQuNTAwMDAwMDEsNi40OTk5OTk5OSA1LDcuNjY2NjY2NjcgNS41LDggQzUuNSw4IDYuNSw2LjUwMDAwMDAxIDcsNyBDNy41LDcuNDk5OTk5OTkgNiw4LjUgNiw4LjUgTDYsMTEgTDUsMTEgTDUsOC41IFonIGlkPSdSZWN0YW5nbGUtNTInIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnPjwvcGF0aD5cblx0XHRcdCAgICAgICAgICAgIDwvZz5cblx0XHRcdCAgICAgICAgPC9nPlxuXHRcdFx0ICAgIDwvZz5cblx0XHRcdDwvc3ZnPlwiXG5cdFx0b2JqZWN0cy5jb25zdHJhaW50cyA9XG5cdFx0XHRsZWFkaW5nIDogW3RyYXZlbCwgMTVdXG5cdFx0XHRib3R0b206IDE0XG5cdFx0XHR3aWR0aDoxNlxuXHRcdFx0aGVpZ2h0OjIwXG5cdFx0ZXhwb3J0cy5sYXlvdXQoKVxuXHRcdHN5bWJvbHMgPSBuZXcgTGF5ZXIgc3VwZXJMYXllcjplbW9qaVBpY2tlciwgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIiwgb3BhY2l0eTouNFxuXHRcdHN5bWJvbHMuaHRtbCA9IFwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdFx0XHQ8c3ZnIHdpZHRoPScje2V4cG9ydHMucHgoMTYpfXB4JyBoZWlnaHQ9JyN7ZXhwb3J0cy5weCgxNyl9cHgnIHZpZXdCb3g9JzAgMCAxNSAxNycgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyB4bWxuczpza2V0Y2g9J2h0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaC9ucyc+XG5cdFx0XHQgICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjUuMiAoMjUyMzUpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdFx0ICAgIDx0aXRsZT5PYmplY3RzICZhbXA7IFN5bWJvbHM8L3RpdGxlPlxuXHRcdFx0ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdFx0ICAgIDxkZWZzPjwvZGVmcz5cblx0XHRcdCAgICA8ZyBpZD0naU9TLTktS2V5Ym9hcmRzJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJyBza2V0Y2g6dHlwZT0nTVNQYWdlJz5cblx0XHRcdCAgICAgICAgPGcgaWQ9J2lQaG9uZS02LVBvcnRyYWl0LUxpZ2h0LUNvcHknIHNrZXRjaDp0eXBlPSdNU0FydGJvYXJkR3JvdXAnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC0zMDQuMDAwMDAwLCAtNjM4LjAwMDAwMCknIGZpbGw9JyM0QTU0NjEnPlxuXHRcdFx0ICAgICAgICAgICAgPGcgaWQ9J0tleWJvYXJkcycgc2tldGNoOnR5cGU9J01TTGF5ZXJHcm91cCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMC4wMDAwMDAsIDQwOC4wMDAwMDApJz5cblx0XHRcdCAgICAgICAgICAgICAgICA8ZyBpZD0nT2JqZWN0cy0mYW1wOy1TeW1ib2xzJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgzMDQuMDAwMDAwLCAyMzAuMDAwMDAwKSc+XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIDxnIGlkPSdUaGluZycgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMC4wMDAwMDAsIDAuNTAwMDAwKScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCc+XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0nUmVjdGFuZ2xlLTEyMDknIHg9JzAnIHk9JzAnIHdpZHRoPSc3JyBoZWlnaHQ9JzEnPjwvcmVjdD5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSdSZWN0YW5nbGUtMTIwOScgeD0nMCcgeT0nMicgd2lkdGg9JzcnIGhlaWdodD0nMSc+PC9yZWN0PlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9J1JlY3RhbmdsZS0xMjExJyB4PSczJyB5PSczJyB3aWR0aD0nMScgaGVpZ2h0PSc0Jz48L3JlY3Q+XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIDwvZz5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0nTTExLjc1LDAuMTU5MjYzOTc4IEwxMS43NSwwIEwxMSwwIEwxMSw1LjA5MTQ5MyBDMTAuNTkzNDQsNC45NDIyMTM5MiAxMC4wNjM5NjYyLDQuOTY0NTMyMjQgOS41NTcxNTM5OSw1LjE5MDE3OTU3IEM4LjY5ODQ5MjkzLDUuNTcyNDgwMSA4LjIzMDAzODM1LDYuMzkzNjU2MjEgOC41MTA4MzE0MSw3LjAyNDMyNzc0IEM4Ljc5MTYyNDQ3LDcuNjU0OTk5MjggOS43MTUzMzQ1NCw3Ljg1NjM0Mzc1IDEwLjU3Mzk5NTYsNy40NzQwNDMyMSBDMTEuMjc2MTE4Myw3LjE2MTQzODAzIDExLjcxNzMzOTMsNi41NTUzODk3MiAxMS43MDEzNTk1LDYgTDExLjc1LDYgTDExLjc1LDEuMzkzODUwNTYgQzEyLjMxNzU5MDgsMS41OTU5MDAzNyAxMywyLjA4MTc0NTYgMTMsMy4yNSBDMTMsNC4yNSAxMi43NSw1LjUgMTIuNzUsNS41IEMxMi43NSw1LjUgMTMuNzUsNC43NSAxMy43NSwyLjUgQzEzLjc1LDEuMDIyNTYxMDEgMTIuNTY0MjY3NCwwLjQwNzQ3MzAxOSAxMS43NSwwLjE1OTI2Mzk3OCBaJyBpZD0nTm90ZScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCc+PC9wYXRoPlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA8dGV4dCBpZD0nJmFtcDsnIHNrZXRjaDp0eXBlPSdNU1RleHRMYXllcicgZm9udC1mYW1pbHk9J1NGIFVJIERpc3BsYXknIGZvbnQtc2l6ZT0nOS41JyBmb250LXdlaWdodD0nbm9ybWFsJz5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDx0c3BhbiB4PScwLjI1JyB5PScxNic+JmFtcDs8L3RzcGFuPlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA8L3RleHQ+XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIDx0ZXh0IGlkPSclJyBza2V0Y2g6dHlwZT0nTVNUZXh0TGF5ZXInIGZvbnQtZmFtaWx5PSdTRiBVSSBEaXNwbGF5JyBmb250LXNpemU9JzkuNScgZm9udC13ZWlnaHQ9J25vcm1hbCc+XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8dHNwYW4geD0nNy43NScgeT0nMTYnPiU8L3RzcGFuPlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA8L3RleHQ+XG5cdFx0XHQgICAgICAgICAgICAgICAgPC9nPlxuXHRcdFx0ICAgICAgICAgICAgPC9nPlxuXHRcdFx0ICAgICAgICA8L2c+XG5cdFx0XHQgICAgPC9nPlxuXHRcdFx0PC9zdmc+XCJcblx0XHRzeW1ib2xzLmNvbnN0cmFpbnRzID1cblx0XHRcdGxlYWRpbmcgOiBbb2JqZWN0cywgMTVdXG5cdFx0XHRib3R0b206IDE0XG5cdFx0XHR3aWR0aDoxNlxuXHRcdFx0aGVpZ2h0OjIwXG5cdFx0ZXhwb3J0cy5sYXlvdXQoKVxuXHRcdGZsYWdzID0gbmV3IExheWVyIHN1cGVyTGF5ZXI6ZW1vamlQaWNrZXIsIGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCIsIG9wYWNpdHk6LjRcblx0XHRmbGFncy5odG1sID0gXCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0XHRcdDxzdmcgd2lkdGg9JyN7ZXhwb3J0cy5weCgxMSl9cHgnIGhlaWdodD0nI3tleHBvcnRzLnB4KDE1KX1weCcgdmlld0JveD0nMCAwIDExIDE1JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHhtbG5zOnNrZXRjaD0naHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zJz5cblx0XHRcdCAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNS4yICgyNTIzNSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdFx0XHQgICAgPHRpdGxlPkZsYWc8L3RpdGxlPlxuXHRcdFx0ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdFx0ICAgIDxkZWZzPjwvZGVmcz5cblx0XHRcdCAgICA8ZyBpZD0naU9TLTktS2V5Ym9hcmRzJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJyBza2V0Y2g6dHlwZT0nTVNQYWdlJz5cblx0XHRcdCAgICAgICAgPGcgaWQ9J2lQaG9uZS02LVBvcnRyYWl0LUxpZ2h0LUNvcHknIHNrZXRjaDp0eXBlPSdNU0FydGJvYXJkR3JvdXAnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC0yNzUuMDAwMDAwLCAtNjM5LjAwMDAwMCknPlxuXHRcdFx0ICAgICAgICAgICAgPGcgaWQ9J0tleWJvYXJkcycgc2tldGNoOnR5cGU9J01TTGF5ZXJHcm91cCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMC4wMDAwMDAsIDQwOC4wMDAwMDApJz5cblx0XHRcdCAgICAgICAgICAgICAgICA8ZyBpZD0nRmxhZycgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMjc1LjAwMDAwMCwgMjMxLjUwMDAwMCknIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnPlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0nUG9sZScgZmlsbD0nIzRBNTQ2MScgeD0nMCcgeT0nMCcgd2lkdGg9JzEnIGhlaWdodD0nMTQnPjwvcmVjdD5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0nTTEsMSBDMSwxIDEuMjUsMiAzLjUsMiBDNS43NSwyIDYsMC43NDk5OTk5OTggOCwwLjc1IEMxMCwwLjc0OTk5OTk5OCAxMCwxLjUgMTAsMS41IEwxMCw3LjUgQzEwLDcuNSAxMCw2LjUgOCw2LjUgQzYsNi41IDQuODA2MjM5MTEsOCAzLjUsOCBDMi4xOTM3NjA4OSw4IDEsNyAxLDcgTDEsMSBaJyBzdHJva2U9JyM0QTU0NjEnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnPjwvcGF0aD5cblx0XHRcdCAgICAgICAgICAgICAgICA8L2c+XG5cdFx0XHQgICAgICAgICAgICA8L2c+XG5cdFx0XHQgICAgICAgIDwvZz5cblx0XHRcdCAgICA8L2c+XG5cdFx0XHQ8L3N2Zz5cIlxuXHRcdGZsYWdzLmNvbnN0cmFpbnRzID1cblx0XHRcdGxlYWRpbmcgOiBbc3ltYm9scywgMTVdXG5cdFx0XHRib3R0b206IDE0XG5cdFx0XHR3aWR0aDoxNlxuXHRcdFx0aGVpZ2h0OjIwXG5cdFx0ZXhwb3J0cy5sYXlvdXQoKVxuXG5cdFx0bG9hZEVtb2ppcyA9IChlbSkgLT5cblx0XHRcdHJvdysrIFxuXHRcdFx0aW5kZXggPSBlbW9qaXNBcnJheS5pbmRleE9mKGVtKVxuXHRcdFx0Y29sID0gTWF0aC5mbG9vcihpbmRleC81KVxuXHRcdFx0aWYgcm93ID4gNFxuXHRcdFx0XHRyb3cgPSAwIFxuXHRcdFx0ZW1vamkgPSBuZXcgTGF5ZXIgeDpjb2wqYm94ICsgKGVtb2ppU3BhY2VyICogY29sKSArIGV4cG9ydHMucHgoMyksIHk6cm93KmJveCArIChlbW9qaVNwYWNlciAqIHJvdykgKyBleHBvcnRzLnB4KDQwKSwgc3VwZXJMYXllcjplbW9qaUdhbGxleS5jb250ZW50LCB3aWR0aDpib3gsIGhlaWdodDpib3gsIG5hbWU6ZGVjb2RlVVJJQ29tcG9uZW50KGVtKSwgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIlxuXHRcdFx0ZW1vamkuaHRtbCA9IGRlY29kZVVSSUNvbXBvbmVudChlbSlcblx0XHRcdGVtb2ppLnN0eWxlID0ge1xuXHRcdFx0XHRcImZvbnQtc2l6ZVwiIDogZXhwb3J0cy5weCgyNikgKyBcInB4XCJcblx0XHRcdFx0XCJsaW5lLWhlaWdodFwiIDogYm94ICsgXCJweFwiXG5cdFx0XHRcdFwidGV4dC1hbGlnblwiIDogXCJjZW50ZXJcIlxuXHRcdFx0fVxuXHRcdFx0ZW1vamkub24gRXZlbnRzLkNsaWNrLCAtPlxuXHRcdFx0XHRwcmludCBALm5hbWVcblx0XHRcdGVtb2ppc0xvYWRlZCsrXG5cdFx0XHRwcmludCBlbW9qaXNMb2FkZWRcblxuXHRcdGluYyA9IDIwMFxuXHRcdGZpcnN0TG9hZCA9IC4xXG5cdFx0dGltZUluYyA9IDJcblx0XHRmdWxsQW1vdW50ID0gZW1vamlzQXJyYXkubGVuZ3RoXG5cdFx0bG9hZHMgPSBNYXRoLmNlaWwoZnVsbEFtb3VudCAvIGluYykgLSAxXG5cdFx0cGFydGlhbEFtb3VudCA9IGZ1bGxBbW91bnQgJSBpbmNcblx0XHRlbW9qaXNMb2FkZWQgPSAwXG5cdFx0Zm9yIGkgaW4gWzAuLmxvYWRzXVxuXHRcdFx0aSsrXG5cdFx0XHRcblx0XHQjU2Nyb2xsIExvYWRcblx0XHRlbW9qaUdhbGxleS5vbiBFdmVudHMuTW92ZSwgLT5cblx0XHRcdGlmIGVtb2ppR2FsbGV5LnNjcm9sbFggPiAyMDAwICYmIGVtb2ppc0xvYWRlZCA8IDQwMFxuXHRcdFx0XHRmb3IgZW0gaW4gZW1vamlzQXJyYXlbMjAwLi4uNDAwXVxuXHRcdFx0XHRcdGxvYWRFbW9qaXMoZW0pXG5cdFx0XHRcdGVtb2ppR2FsbGV5LnNjcm9sbFggPSAyMDAxXG5cdFx0XHRpZiBlbW9qaUdhbGxleS5zY3JvbGxYID4gNTAwMCAmJiBlbW9qaXNMb2FkZWQgPCA2MDBcblx0XHRcdFx0Zm9yIGVtIGluIGVtb2ppc0FycmF5WzQwMC4uLjYwMF1cblx0XHRcdFx0XHRsb2FkRW1vamlzKGVtKVxuXHRcdFx0XHRlbW9qaUdhbGxleS5zY3JvbGxYID0gNTAwMVxuXHRcdFx0aWYgZW1vamlHYWxsZXkuc2Nyb2xsWCA+IDc1MDAgJiYgZW1vamlzTG9hZGVkIDwgODAwXG5cdFx0XHRcdGZvciBlbSBpbiBlbW9qaXNBcnJheVs2MDAuLi44MDBdXG5cdFx0XHRcdFx0bG9hZEVtb2ppcyhlbSlcblx0XHRcdFx0ZW1vamlHYWxsZXkuc2Nyb2xsWCA9IDc1MDFcblx0XHRcdGlmIGVtb2ppR2FsbGV5LnNjcm9sbFggPiAxMDAwMCAmJiBlbW9qaXNMb2FkZWQgPCAxMDAwXG5cdFx0XHRcdGZvciBlbSBpbiBlbW9qaXNBcnJheVs4MDAuLi4xMDAwXVxuXHRcdFx0XHRcdGxvYWRFbW9qaXMoZW0pXG5cdFx0XHRcdGVtb2ppR2FsbGV5LnNjcm9sbFggPSAxMDAwMVxuXHRcdFx0aWYgZW1vamlHYWxsZXkuc2Nyb2xsWCA+IDEyNTAwICYmIGVtb2ppc0xvYWRlZCA8IDEyMDBcblx0XHRcdFx0Zm9yIGVtIGluIGVtb2ppc0FycmF5WzEwMDAuLi4xMjk3XVxuXHRcdFx0XHRcdGxvYWRFbW9qaXMoZW0pXG5cdFx0XHRcdGVtb2ppR2FsbGV5LnNjcm9sbFggPSAxMjUwMVxuXG5cdFx0I1RpbWUgTG9hZFxuXHRcdFV0aWxzLmRlbGF5IDEsIC0+IFxuXHRcdFx0aWYgZW1vamlzTG9hZGVkIDwgNDAwICYmIGVtb2ppR2FsbGV5LnNjcm9sbFggPT0gMFxuXHRcdFx0XHRzY3JvbGxYID0gZW1vamlHYWxsZXkuc2Nyb2xsWFxuXHRcdFx0XHRmb3IgZW0gaW4gZW1vamlzQXJyYXlbMjAwLi4uNDAwXVxuXHRcdFx0XHRcdGxvYWRFbW9qaXMoZW0pXG5cdFx0VXRpbHMuZGVsYXkgMi41LCAtPiBcblx0XHRcdGlmIGVtb2ppc0xvYWRlZCA8IDYwMCAmJiBlbW9qaUdhbGxleS5zY3JvbGxYID09IDBcblx0XHRcdFx0c2Nyb2xsWCA9IGVtb2ppR2FsbGV5LnNjcm9sbFhcblx0XHRcdFx0Zm9yIGVtIGluIGVtb2ppc0FycmF5WzQwMC4uLjYwMF1cblx0XHRcdFx0XHRsb2FkRW1vamlzKGVtKVxuXHRcdFV0aWxzLmRlbGF5IDIuNSwgLT4gXG5cdFx0XHRpZiBlbW9qaXNMb2FkZWQgPCA4MDAgJiYgZW1vamlHYWxsZXkuc2Nyb2xsWCA9PSAwXG5cdFx0XHRcdHNjcm9sbFggPSBlbW9qaUdhbGxleS5zY3JvbGxYXG5cdFx0XHRcdGZvciBlbSBpbiBlbW9qaXNBcnJheVs2MDAuLi44MDBdXG5cdFx0XHRcdFx0bG9hZEVtb2ppcyhlbSlcblx0XHRVdGlscy5kZWxheSA1LjUsIC0+IFxuXHRcdFx0aWYgZW1vamlzTG9hZGVkIDwgMTAwMCAmJiBlbW9qaUdhbGxleS5zY3JvbGxYID09IDBcblx0XHRcdFx0c2Nyb2xsWCA9IGVtb2ppR2FsbGV5LnNjcm9sbFhcblx0XHRcdFx0Zm9yIGVtIGluIGVtb2ppc0FycmF5WzgwMC4uLjEwMDBdXG5cdFx0XHRcdFx0bG9hZEVtb2ppcyhlbSlcblx0XHRVdGlscy5kZWxheSA3LCAtPiBcblx0XHRcdGlmIGVtb2ppc0xvYWRlZCA8IDEyOTcgJiYgZW1vamlHYWxsZXkuc2Nyb2xsWCA9PSAwXG5cdFx0XHRcdHNjcm9sbFggPSBlbW9qaUdhbGxleS5zY3JvbGxYXG5cdFx0XHRcdGZvciBlbSBpbiBlbW9qaXNBcnJheVsxMDAwLi4uMTI5N11cblx0XHRcdFx0XHRsb2FkRW1vamlzKGVtKVxuXG5cblx0XHRmb3IgZW0gaW4gZnJlcUVtb2ppc0FycmF5XG5cdFx0XHRsb2FkRW1vamlzKGVtKVxuXHRcdGZvciBlbSBpbiBlbW9qaXNBcnJheVswLi4uaW5jXVxuXHRcdFx0bG9hZEVtb2ppcyhlbSlcblxuXG5cdFx0Zm9yIHNlYyBpbiBlbW9qaVNlY3Rpb25zXG5cdFx0XHRpbmRleCA9IGVtb2ppU2VjdGlvbnMuaW5kZXhPZihzZWMpXG5cdFx0XHR0aXRsZSA9IG5ldyBMYXllciBzdXBlckxheWVyOmVtb2ppR2FsbGV5LmNvbnRlbnQsIGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCIsIHg6aW5kZXgqNTAwMCArIGV4cG9ydHMucHgoOCksIGhlaWdodDo4MCwgd2lkdGg6ODAwXG5cdFx0XHR0aXRsZS5odG1sID0gc2VjXG5cdFx0XHR0aXRsZS5zdHlsZSA9IHtcblx0XHRcdFx0XCJmb250LXNpemVcIiA6IGV4cG9ydHMucHgoMTIpICsgXCJweFwiXG5cdFx0XHRcdFwiZm9udC13ZWlnaHRcIiA6IDYwMFxuXHRcdFx0XHRcImZvbnQtZmFtaWx5XCIgOiAnLWFwcGxlLXN5c3RlbSwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZidcblx0XHRcdFx0J2xpbmUtaGVpZ2h0JyA6IGV4cG9ydHMucHgoNDIpICsgXCJweFwiXG5cdFx0XHRcdCdsZXR0ZXItc3BhY2luZycgOiBleHBvcnRzLnB4KDAuNykgKyBcInB4XCJcblx0XHRcdFx0J2NvbG9yJyA6IFwiI0E1QTZBOVwiXG5cdFx0XHRcdCd0ZXh0LXRyYW5zZm9ybScgOiAndXBwZXJjYXNlJ1xuXHRcdFx0fVxuXG5cblx0ZW1vamlLZXkub24gRXZlbnRzLlRvdWNoRW5kLCAtPlxuXHRcdGVtb2ppS2V5LmJhY2tncm91bmRDb2xvciA9IFwiI0FBQjNCQ1wiXG5cblxuXHRyZXR1cm5LZXkgPSBuZXcgTGF5ZXIgc3VwZXJMYXllcjpib2FyZCwgYm9yZGVyUmFkaXVzOmV4cG9ydHMucHgoNSksIGJhY2tncm91bmRDb2xvcjpcIiNBQUIzQkNcIiwgc2hhZG93WTpleHBvcnRzLnB4KDEpLCBzaGFkb3dDb2xvcjpcIiM5Mjk0OThcIiwgY29sb3I6XCJibGFja1wiXG5cdHJldHVybktleS5jb25zdHJhaW50cyA9ICh3aWR0aDo4Ny41LCBoZWlnaHQ6NDIsIHRyYWlsaW5nOjMsIGJvdHRvbTo0KVxuXHRyZXR1cm5LZXkuaHRtbCA9IFwicmV0dXJuXCJcblx0cmV0dXJuS2V5LnN0eWxlID0ge1xuXHRcdFwiZm9udC1zaXplXCIgOiBleHBvcnRzLnB4KDE2KSArIFwicHhcIlxuXHRcdFwiZm9udC13ZWlnaHRcIiA6IDQwMFxuXHRcdFwiZm9udC1mYW1pbHlcIiA6ICctYXBwbGUtc3lzdGVtLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmJ1xuXHRcdCd0ZXh0LWFsaWduJyA6ICdjZW50ZXInXG5cdFx0J2xpbmUtaGVpZ2h0JyA6IGV4cG9ydHMucHgoNDIpICsgXCJweFwiXG5cblx0fVxuXHRleHBvcnRzLmxheW91dCgpXG5cblx0c3BhY2VLZXkgPSBuZXcgTGF5ZXIgc3VwZXJMYXllcjpib2FyZCwgYm9yZGVyUmFkaXVzOmV4cG9ydHMucHgoNSksIGJhY2tncm91bmRDb2xvcjpcIndoaXRlXCIsIHNoYWRvd1k6ZXhwb3J0cy5weCgxKSwgc2hhZG93Q29sb3I6XCIjOTI5NDk4XCIsIGNvbG9yOlwiYmxhY2tcIlxuXHRzcGFjZUtleS5jb25zdHJhaW50cyA9ICh3aWR0aDoxODAsIGhlaWdodDo0MiwgbGVhZGluZzpbZW1vamlLZXksIDZdLCBib3R0b206NClcblx0c3BhY2VLZXkuaHRtbCA9IFwic3BhY2VcIlxuXHRzcGFjZUtleS5zdHlsZSA9IHtcblx0XHRcImZvbnQtc2l6ZVwiIDogZXhwb3J0cy5weCgxNikgKyBcInB4XCJcblx0XHRcImZvbnQtd2VpZ2h0XCIgOiA0MDBcblx0XHRcImZvbnQtZmFtaWx5XCIgOiAnLWFwcGxlLXN5c3RlbSwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZidcblx0XHQndGV4dC1hbGlnbicgOiAnY2VudGVyJ1xuXHRcdCdsaW5lLWhlaWdodCcgOiBleHBvcnRzLnB4KDQyKSArIFwicHhcIlxuXG5cdH1cblx0ZXhwb3J0cy5sYXlvdXQoKVxuXG5cblx0c3BhY2VLZXkub24gRXZlbnRzLlRvdWNoU3RhcnQsIC0+XG5cdFx0c3BhY2VLZXkuYmFja2dyb3VuZENvbG9yID0gXCIjQUFCM0JDXCJcblx0c3BhY2VLZXkub24gRXZlbnRzLlRvdWNoRW5kLCAtPlxuXHRcdHNwYWNlS2V5LmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIlxuXG5cblx0cmV0dXJuS2V5Lm9uIEV2ZW50cy5Ub3VjaFN0YXJ0LCAtPlxuXHRcdHJldHVybktleS5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCJcblx0cmV0dXJuS2V5Lm9uIEV2ZW50cy5Ub3VjaEVuZCwgLT5cblx0XHRyZXR1cm5LZXkuYmFja2dyb3VuZENvbG9yID0gXCIjQUFCM0JDXCJcblxuXG5cdHJldHVybiB7XG5cdFx0XCJib2FyZFwiIDogYm9hcmRcblx0XHRcImtleXNcIiA6IGtleXNBcnJheVxuXHRcdFwia2V5XCIgOiB7XG5cdFx0XHRcInFcIiA6IGtleXNBcnJheVswXVxuXHRcdFx0XCJ3XCIgOiBrZXlzQXJyYXlbMV1cblx0XHRcdFwiZVwiIDoga2V5c0FycmF5WzJdXG5cdFx0XHRcInJcIiA6IGtleXNBcnJheVszXVxuXHRcdFx0XCJ0XCIgOiBrZXlzQXJyYXlbNF1cblx0XHRcdFwieVwiIDoga2V5c0FycmF5WzVdXG5cdFx0XHRcInVcIiA6IGtleXNBcnJheVs2XVxuXHRcdFx0XCJpXCIgOiBrZXlzQXJyYXlbN11cblx0XHRcdFwib1wiIDoga2V5c0FycmF5WzhdXG5cdFx0XHRcInBcIiA6IGtleXNBcnJheVs5XVxuXHRcdFx0XCJhXCIgOiBrZXlzQXJyYXlbMTBdXG5cdFx0XHRcInNcIiA6IGtleXNBcnJheVsxMV1cblx0XHRcdFwiZFwiIDoga2V5c0FycmF5WzEyXVxuXHRcdFx0XCJmXCIgOiBrZXlzQXJyYXlbMTNdXG5cdFx0XHRcImdcIiA6IGtleXNBcnJheVsxNF1cblx0XHRcdFwiaFwiIDoga2V5c0FycmF5WzE1XVxuXHRcdFx0XCJqXCIgOiBrZXlzQXJyYXlbMTZdXG5cdFx0XHRcImtcIiA6IGtleXNBcnJheVsxN11cblx0XHRcdFwibFwiIDoga2V5c0FycmF5WzE4XVxuXHRcdFx0XCJ6XCIgOiBrZXlzQXJyYXlbMTldXG5cdFx0XHRcInhcIiA6IGtleXNBcnJheVsyMF1cblx0XHRcdFwiY1wiIDoga2V5c0FycmF5WzIxXVxuXHRcdFx0XCJ2XCIgOiBrZXlzQXJyYXlbMjJdXG5cdFx0XHRcImJcIiA6IGtleXNBcnJheVsyM11cblx0XHRcdFwiblwiIDoga2V5c0FycmF5WzI0XVxuXHRcdFx0XCJtXCIgOiBrZXlzQXJyYXlbMjVdXG5cdFx0fVxuXHR9XG5cblxuZXhwb3J0cy5NZW51ID0gKGFycmF5KSAtPlxuXHRzZXR1cCA9IHNldHVwQ29tcG9uZW50KFwibWVudVwiLCBhcnJheSlcblx0YWxsID0gbmV3IExheWVyIGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCJcblx0YWxsLmNvbnN0cmFpbnRzID0gXG5cdFx0bGVhZGluZzowXG5cdFx0dHJhaWxpbmc6MFxuXHRcdHRvcDowXG5cdFx0Ym90dG9tOjBcblx0b3ZlcmxheSA9IG5ldyBMYXllciBiYWNrZ3JvdW5kQ29sb3I6XCJyZ2JhKDAsIDAsIDAsIC40KVwiLCBzdXBlckxheWVyOmFsbCwgbmFtZTpcIm92ZXJsYXlcIlxuXHRvdmVybGF5LmNvbnN0cmFpbnRzID1cblx0XHRsZWFkaW5nOjBcblx0XHR0cmFpbGluZzowXG5cdFx0dG9wOjBcblx0XHRib3R0b206MFxuXHRleHBvcnRzLmJnQmx1cihvdmVybGF5KVxuXHRtZW51cyA9IG5ldyBMYXllciBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiXG5cdG1lbnVzLmNvbnN0cmFpbnRzID0gXG5cdFx0bGVhZGluZzowXG5cdFx0dHJhaWxpbmc6MFxuXHRcdHRvcDowXG5cdFx0Ym90dG9tOjBcblx0ZXhpdEJ1dHRvbiA9IG5ldyBleHBvcnRzLkJ1dHRvbiB0eXBlOlwiYmlnXCIsIHRleHQ6c2V0dXAuZXhpdCwgYmx1cjpmYWxzZSwgc3VwZXJMYXllcjptZW51c1xuXHRleGl0QnV0dG9uLmNvbnN0cmFpbnRzID0gXG5cdFx0Ym90dG9tOjEwXG5cdFx0YWxpZ246XCJob3Jpem9udGFsXCJcblx0ZXhwb3J0cy5sYXlvdXQoKVxuXG5cdGZvciBvcHQsIGkgaW4gc2V0dXAub3B0aW9ucyBcblx0XHRvcHRpb24gPSBuZXcgTGF5ZXIgXG5cdFx0XG5cdGlmIHNldHVwLmFuaW1hdGVkID09IHRydWVcblx0XHRvdmVybGF5Lm9wYWNpdHkgPSAwIFxuXHRcdG1lbnVzLm1heFkgPSBleHBvcnRzLmhlaWdodCArIGV4cG9ydHMucHgoMjUwKVxuXHRcdG92ZXJsYXkuYW5pbWF0ZVxuXHRcdFx0cHJvcGVydGllczoob3BhY2l0eToxKVxuXHRcdFx0dGltZTouM1xuXHRcdG1lbnVzLmFuaW1hdGVcblx0XHRcdHByb3BlcnRpZXM6KG1heFk6ZXhwb3J0cy5oZWlnaHQpXG5cdFx0XHR0aW1lOi4zXG5cblxuXHRleGl0QnV0dG9uLm9uIEV2ZW50cy5Ub3VjaEVuZCwgLT5cblx0XHRtZW51cy5hbmltYXRlIFxuXHRcdFx0cHJvcGVydGllczogKG1heFk6ZXhwb3J0cy5oZWlnaHQrZXhwb3J0cy5weCgyNTApKVxuXHRcdFx0dGltZTouM1xuXHRcdG92ZXJsYXkuYW5pbWF0ZVxuXHRcdFx0cHJvcGVydGllczogKG9wYWNpdHk6MClcblx0XHRcdHRpbWU6LjNcblx0XHRVdGlscy5kZWxheSAuMywgLT5cblx0XHRcdGFsbC5kZXN0cm95KClcblxuXG5leHBvcnRzLk5hdkJhciA9IChhcnJheSkgLT5cblx0c2V0dXAgPSBzZXR1cENvbXBvbmVudChcIm5hdkJhclwiLCBhcnJheSlcblx0cHJpbnQgc2V0dXBcblxuZXhwb3J0cy5UYWIgPSAoYXJyYXkpIC0+XG5cdHNldHVwID0gc2V0dXBDb21wb25lbnQoXCJ0YWJcIiwgYXJyYXkpXG5cdHN3aXRjaCBleHBvcnRzLmRldmljZSBcblx0XHR3aGVuIFwiaXBob25lLTVcIlxuXHRcdFx0QHRhYldpZHRoID0gNTVcblx0XHRlbHNlXG5cdFx0XHRAdGFiV2lkdGggPSA3NVxuXHR0YWJWaWV3ID0gbmV3IExheWVyIG5hbWU6c2V0dXAubGFiZWwgKyBcIiB2aWV3XCIsIGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCJcblx0dGFiVmlldy5jb25zdHJhaW50cyA9IFxuXHRcdGxlYWRpbmc6MFxuXHRcdHRyYWlsaW5nOjBcblx0XHR0b3A6MFxuXHRcdGJvdHRvbTowXG5cdHRhYkJveCA9IG5ldyBMYXllciBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiLCBuYW1lOnNldHVwLmxhYmVsICsgXCIgdGFiXCJcblx0dGFiQm94LmNvbnN0cmFpbnRzID1cblx0XHR3aWR0aDpAdGFiV2lkdGhcblx0XHRoZWlnaHQ6NDlcblx0aWNvbiA9IG5ldyBMYXllciB3aWR0aDpleHBvcnRzLnB4KDI1KSwgaGVpZ2h0OmV4cG9ydHMucHgoMjUpLCBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiLCBuYW1lOlwiaWNvblwiLCBzdXBlckxheWVyOnRhYkJveFxuXHRpY29uLmNvbnN0cmFpbnRzID1cblx0XHRhbGlnbjpcImhvcml6b250YWxcIlxuXHRcdHRvcDo3XG5cdHN2Z0ZyYW1lID0gZXhwb3J0cy5zdmcoc2V0dXAuaWNvbilcblx0aWNvbi5odG1sID0gc3ZnRnJhbWUuc3ZnXG5cdGljb24ud2lkdGggPSBzdmdGcmFtZS53aWR0aFxuXHRpY29uLmhlaWdodCA9IHN2Z0ZyYW1lLmhlaWdodFxuXHRsYWJlbCA9IG5ldyBleHBvcnRzLlRleHQgdGV4dDpzZXR1cC5sYWJlbCwgc3VwZXJMYXllcjp0YWJCb3gsIGNvbG9yOlwiIzkyOTI5MlwiLCBmb250U2l6ZToxMCwgbmFtZTpcImxhYmVsXCIsIHRleHRUcmFuc2Zvcm06XCJjYXBpdGFsaXplXCJcblx0bGFiZWwuY29uc3RyYWludHMgPSBcblx0XHRib3R0b206MlxuXHRcdGhvcml6b250YWxDZW50ZXI6aWNvblxuXHRleHBvcnRzLmxheW91dCgpXG5cdHRhYkJveC50eXBlID0gXCJ0YWJcIlxuXHRyZXR1cm4ge1xuXHRcdHRhYjp0YWJCb3hcblx0XHRpY29uOmljb25cblx0XHRsYWJlbDpsYWJlbFxuXHRcdHZpZXc6dGFiVmlld1xuXHR9XG5cbmV4cG9ydHMuVGFiQmFyID0gKGFycmF5KSAtPlxuXHRzZXR1cCA9IHNldHVwQ29tcG9uZW50KFwidGFiQmFyXCIsIGFycmF5KVxuXHRpZiBzZXR1cC50YWJzLmxlbmd0aCA9PSAwXG5cdFx0ZHVtbXlUYWIgPSBuZXcgZXhwb3J0cy5UYWJcblx0XHRkdW1teVRhYjIgPSBuZXcgZXhwb3J0cy5UYWJcblx0XHRzZXR1cC50YWJzLnB1c2ggZHVtbXlUYWJcblx0XHRzZXR1cC50YWJzLnB1c2ggZHVtbXlUYWIyXG5cdHRhYldpZHRoID0gNzVcblx0c3dpdGNoIGV4cG9ydHMuZGV2aWNlIFxuXHRcdHdoZW4gXCJpcGhvbmUtNVwiXG5cdFx0XHR0YWJXaWR0aCA9IDU1XG5cdFx0ZWxzZVxuXHRcdFx0dGFiV2lkdGggPSA3NVxuXHR0YWJCYXIgPSBuZXcgTGF5ZXIgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIlxuXHR0YWJCYXJCRyA9IG5ldyBCYWNrZ3JvdW5kTGF5ZXIgYmFja2dyb3VuZENvbG9yOlwid2hpdGVcIiwgb3BhY2l0eTouOSwgc3VwZXJMYXllcjp0YWJCYXIsIG5hbWU6XCJ0YWJCYXIgYmFja2dyb3VuZFwiXG5cdHRhYkJhci5jb25zdHJhaW50cyA9XG5cdFx0bGVhZGluZzowXG5cdFx0dHJhaWxpbmc6MFxuXHRcdGJvdHRvbTowXG5cdFx0aGVpZ2h0OjQ5XG5cdHRhYkJhckJHLmNvbnN0cmFpbnRzID1cblx0XHRsZWFkaW5nOjBcblx0XHR0cmFpbGluZzowXG5cdFx0Ym90dG9tOjBcblx0XHRoZWlnaHQ6NDlcblx0ZGl2aWRlciA9IG5ldyBMYXllciBiYWNrZ3JvdW5kQ29sb3I6XCIjQjJCMkIyXCIsIG5hbWU6XCJ0YWJEaXZpZGVyXCIsIHN1cGVyTGF5ZXI6dGFiQmFyXG5cdGRpdmlkZXIuY29uc3RyYWludHMgPSBcblx0XHR0b3A6MFxuXHRcdGxlYWRpbmc6MFxuXHRcdHRyYWlsaW5nOjBcblx0XHRoZWlnaHQ6LjVcblx0dGFiQmFyQm94ID0gbmV3IExheWVyIHN1cGVyTGF5ZXI6dGFiQmFyLCBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiLCBuYW1lOlwidGFiQmFyIGJveFwiXG5cdHRhYkJhckJveC5jb25zdHJhaW50cyA9IFxuXHRcdGhlaWdodDo0OVxuXHRcdHdpZHRoOnNldHVwLnRhYnMubGVuZ3RoICogdGFiV2lkdGhcblxuXHRleHBvcnRzLmxheW91dCgpXG5cblx0c2V0QWN0aXZlID0gKHRhYkluZGV4KSAtPlxuXHRcdGZvciB0YWIsIGluZGV4IGluIHNldHVwLnRhYnNcblx0XHRcdGlmIGluZGV4ID09IHRhYkluZGV4XG5cdFx0XHRcdGV4cG9ydHMuY2hhbmdlRmlsbCh0YWIuaWNvbiwgc2V0dXAuYWN0aXZlRmlsbENvbG9yKVxuXHRcdFx0XHR0YWIubGFiZWwuY29sb3IgPSBzZXR1cC5hY3RpdmVMYWJlbENvbG9yXG5cdFx0XHRcdHRhYi52aWV3LnZpc2libGUgPSB0cnVlXG5cdFx0XHRlbHNlXG5cdFx0XHRcdGV4cG9ydHMuY2hhbmdlRmlsbCh0YWIuaWNvbiwgc2V0dXAuaW5hY3RpdmVGaWxsQ29sb3IpXG5cdFx0XHRcdHRhYi5sYWJlbC5jb2xvciA9IHNldHVwLmluYWN0aXZlTGFiZWxDb2xvclxuXHRcdFx0XHR0YWIudmlldy52aXNpYmxlID0gZmFsc2Vcblx0Zm9yIHRhYiwgaW5kZXggaW4gc2V0dXAudGFic1xuXHRcdCNDaGVjayBmb3IgdmFpbGQgdGFiIG9iamVjdFxuXHRcdGlmIHRhYi50YWIudHlwZSAhPSBcInRhYlwiXG5cdFx0XHRlcnJvcih0YWIudGFiLmlkLCA1KVxuXG5cdFx0dGFiQmFyQm94LmFkZFN1YkxheWVyKHRhYi50YWIpXG5cdFx0IyBDaGFuZ2UgY29sb3JzXG5cdFx0ZXhwb3J0cy5jaGFuZ2VGaWxsKHRhYi5pY29uLCBzZXR1cC5pbmFjdGl2ZUZpbGxDb2xvcilcblx0XHR0YWIubGFiZWwuY29sb3IgPSBzZXR1cC5pbmFjdGl2ZUxhYmVsQ29sb3Jcblx0XHR0YWJCYXJCRy5iYWNrZ3JvdW5kQ29sb3IgPSBzZXR1cC5iYWNrZ3JvdW5kQ29sb3JcblxuXHRcdGlmIGluZGV4ICE9IDBcblx0XHRcdHRhYi50YWIuY29uc3RyYWludHMgPSBcblx0XHRcdFx0bGVhZGluZzpzZXR1cC50YWJzW2luZGV4IC0gMV0udGFiXG5cdFx0XHRleHBvcnRzLmxheW91dCgpXG5cblx0XHR0YWIudGFiLm9uIEV2ZW50cy5Ub3VjaFN0YXJ0LCAtPlxuXHRcdFx0dGFiSW5kZXggPSBALnggLyBleHBvcnRzLnB4KHRhYldpZHRoKVxuXHRcdFx0c2V0QWN0aXZlKHRhYkluZGV4KVxuXHR0YWJCYXJCb3guY29uc3RyYWludHMgPVxuXHRcdGFsaWduOlwiaG9yaXpvbnRhbFwiXG5cblx0c2V0QWN0aXZlKHNldHVwLnN0YXJ0KVx0XG5cblx0ZXhwb3J0cy5sYXlvdXQoKVxuXHRyZXR1cm4gdGFiQmFyXG5cblxuXG5cblxuXG4iLCIjIEFkZCB0aGUgZm9sbG93aW5nIGxpbmUgdG8geW91ciBwcm9qZWN0IGluIEZyYW1lciBTdHVkaW8uIFxuIyBteU1vZHVsZSA9IHJlcXVpcmUgXCJteU1vZHVsZVwiXG4jIFJlZmVyZW5jZSB0aGUgY29udGVudHMgYnkgbmFtZSwgbGlrZSBteU1vZHVsZS5teUZ1bmN0aW9uKCkgb3IgbXlNb2R1bGUubXlWYXJcblxuZXhwb3J0cy5teVZhciA9IFwibXlWYXJpYWJsZVwiXG5cbmV4cG9ydHMubXlGdW5jdGlvbiA9IC0+XG5cdHByaW50IFwibXlGdW5jdGlvbiBpcyBydW5uaW5nXCJcblxuZXhwb3J0cy5teUFycmF5ID0gWzEsIDIsIDNdIl19
