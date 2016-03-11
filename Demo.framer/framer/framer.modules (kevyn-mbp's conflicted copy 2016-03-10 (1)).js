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
    rightAction: "rightAction",
    blur: true,
    superLayer: void 0,
    type: "navBar"
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
  table: {
    type: "table",
    content: [
      {
        "label": "Cats",
        "detail": "Animal"
      }, {
        "label": "Dogs",
        "detail": "Animal"
      }
    ],
    cell: "default"
  },
  tableCell: {
    type: "tableCell",
    style: "default"
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

setProps(defaults.table, defaults.table);

setProps(defaults.tableCell, defaults.tableCell);

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
  exports.layout();
  return BG;
};

exports.StatusBar = function(array) {
  var batteryIcon, batteryPercent, bluetooth, carrier, dot, gripper, i, j, k, l, layer, len, network, noNetwork, nonDot, nonDots, ref, ref1, ref2, setup, signal, statusBarBG, time;
  setup = setupComponent("statusBar", array);
  statusBarBG = new Layer({
    backgroundColor: "transparent",
    name: "statusBar.all"
  });
  statusBarBG.type = setup.type;
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
          backgroundColor: "transparent",
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
    backgroundColor: "transparent",
    superLayer: all
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
  var bar, barArea, divider, j, layer, len, ref, setup, title;
  setup = setupComponent("navBar", array);
  bar = new Layer({
    name: "navbar"
  });
  barArea = new Layer({
    superLayer: bar,
    backgroundColor: "transparent"
  });
  divider = new Layer({
    backgroundColor: "#B2B2B2",
    name: "nav divider",
    superLayer: barArea
  });
  if (setup.superLayer) {
    setup.superLayer.addSubLayer(bar);
  }
  divider.constraints = {
    height: .5,
    bottom: 0,
    leading: 0,
    trailing: 0
  };
  if (setup.blur) {
    bar.backgroundColor = "rgba(255, 255, 255, .9)";
  } else {
    bar.backgroundColor = "rgba(255, 255, 255, 1)";
    exports.bgBlur(bar);
  }
  bar.type = setup.type;
  barArea.constraints = {
    leading: 0,
    trailing: 0,
    height: 44,
    bottom: 0
  };
  bar.constraints = {
    leading: 0,
    trailing: 0,
    top: 0,
    height: 64
  };
  ref = Framer.CurrentContext.layers;
  for (j = 0, len = ref.length; j < len; j++) {
    layer = ref[j];
    if (layer.type === "statusBar") {
      this.statusBar = layer;
      bar.placeBehind(this.statusBar);
    }
  }
  title = new exports.Text({
    style: "navBarTitle",
    fontWeight: "semibold",
    superLayer: barArea,
    text: setup.title
  });
  title.constraints = {
    align: "horizontal",
    bottom: 12
  };
  if (setup.rightAction === false || setup.rightAction === "") {

  } else {
    if (typeof setup.rightAction === "string") {
      this.fontWeight = "regular";
      if (setup.rightAction.search("-b") === 0) {
        this.fontWeight = "semibold";
        setup.rightAction = setup.rightAction.replace("-b ", "");
      }
      this.rightAction = new exports.Button({
        style: "rightAction",
        superLayer: barArea,
        text: setup.rightAction,
        fontWeight: this.fontWeight,
        name: "right action"
      });
      this.rightAction.constraints = {
        bottom: 12,
        trailing: 8
      };
    }
  }
  if (setup.leftAction === false || setup.leftAction === "") {

  } else {
    if (typeof setup.rightAction === "string") {
      this.leftAction = new exports.Button({
        style: "leftAction",
        superLayer: barArea,
        text: setup.leftAction,
        name: "left action"
      });
      this.leftAction.constraints = {
        bottom: 12,
        leading: 8
      };
    }
  }
  exports.layout();
  return {
    all: bar,
    navBar: barArea,
    title: title,
    rightAction: this.rightAction,
    leftAction: this.leftAction
  };
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

exports.Table = function(array) {
  var j, len, ref, results, row, setup, type, types;
  setup = setupComponent("table", array);
  if (setup.cell === "default") {
    types = [
      {
        "label": [
          {
            "fontSize": 10
          }, {
            "leading": 5
          }, {
            "top": 5
          }
        ],
        "detail": [
          {
            "fontSize": 12
          }, {
            "trailing": 5
          }, {
            "top": 5
          }
        ]
      }
    ];
    ref = setup.content;
    results = [];
    for (j = 0, len = ref.length; j < len; j++) {
      row = ref[j];
      results.push((function() {
        var k, len1, ref1, results1;
        ref1 = types[0];
        results1 = [];
        for (k = 0, len1 = ref1.length; k < len1; k++) {
          type = ref1[k];
          results1.push(print(type));
        }
        return results1;
      })());
    }
    return results;
  }
};

exports.TableCell = function(array) {
  var setup;
  setup = setupComponent("tableCell", array);
  return print(setup);
};


},{}],"myModule":[function(require,module,exports){
exports.myVar = "myVariable";

exports.myFunction = function() {
  return print("myFunction is running");
};

exports.myArray = [1, 2, 3];


},{}]},{},[])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMva2V2eW4vRHJvcGJveCAoUGVyc29uYWwpL0ZyYW1lciBQcm90b3R5cGVzL2ZyYW1lci1pb3Mta2l0L0RlbW8uZnJhbWVyL21vZHVsZXMvaU9TS2l0LmNvZmZlZSIsIi9Vc2Vycy9rZXZ5bi9Ecm9wYm94IChQZXJzb25hbCkvRnJhbWVyIFByb3RvdHlwZXMvZnJhbWVyLWlvcy1raXQvRGVtby5mcmFtZXIvbW9kdWxlcy9teU1vZHVsZS5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNFQSxJQUFBOztBQUFBLGFBQUEsR0FBZ0I7RUFFaEIsWUFBQSxFQUFlO0lBQUUsTUFBQSxFQUFRLE1BQU0sQ0FBQyxXQUFqQjtJQUE4QixLQUFBLEVBQU8sTUFBTSxDQUFDLFVBQTVDO0lBQXdELEtBQUEsRUFBTSxDQUE5RDtJQUFpRSxNQUFBLEVBQU8sS0FBeEU7SUFBK0UsUUFBQSxFQUFTLEtBQXhGO0dBRkM7RUFNaEIsNEJBQUEsRUFBOEI7SUFBRSxNQUFBLEVBQVEsSUFBVjtJQUFnQixLQUFBLEVBQU8sR0FBdkI7SUFBNEIsS0FBQSxFQUFPLENBQW5DO0lBQXNDLE1BQUEsRUFBTyxJQUE3QztJQUFtRCxRQUFBLEVBQVMsS0FBNUQ7R0FOZDtFQU9oQix3QkFBQSxFQUEwQjtJQUFFLE1BQUEsRUFBUSxJQUFWO0lBQWdCLEtBQUEsRUFBTyxHQUF2QjtJQUE0QixLQUFBLEVBQU8sQ0FBbkM7SUFBc0MsTUFBQSxFQUFPLElBQTdDO0lBQW1ELFFBQUEsRUFBUyxLQUE1RDtHQVBWO0VBUWhCLHNCQUFBLEVBQXdCO0lBQUUsTUFBQSxFQUFRLElBQVY7SUFBZ0IsS0FBQSxFQUFPLEdBQXZCO0lBQTRCLEtBQUEsRUFBTyxDQUFuQztJQUFzQyxNQUFBLEVBQU8sSUFBN0M7SUFBbUQsUUFBQSxFQUFTLEtBQTVEO0dBUlI7RUFXaEIsdUJB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V0FEWSxFQUVaO1lBQUMsVUFBQSxFQUFhLENBQWQ7V0FGWSxFQUdaO1lBQUMsS0FBQSxFQUFRLENBQVQ7V0FIWTtTQUxiO09BRE87O0FBV1I7QUFBQTtTQUFBLHFDQUFBOzs7O0FBQ0M7QUFBQTthQUFBLHdDQUFBOzt3QkFDQyxLQUFBLENBQU0sSUFBTjtBQUREOzs7QUFERDttQkFaRDs7QUFGZTs7QUFtQmhCLE9BQU8sQ0FBQyxTQUFSLEdBQW9CLFNBQUMsS0FBRDtBQUNuQixNQUFBO0VBQUEsS0FBQSxHQUFRLGNBQUEsQ0FBZSxXQUFmLEVBQTRCLEtBQTVCO1NBQ1IsS0FBQSxDQUFNLEtBQU47QUFGbUI7Ozs7QUM5NEVwQixPQUFPLENBQUMsS0FBUixHQUFnQjs7QUFFaEIsT0FBTyxDQUFDLFVBQVIsR0FBcUIsU0FBQTtTQUNwQixLQUFBLENBQU0sdUJBQU47QUFEb0I7O0FBR3JCLE9BQU8sQ0FBQyxPQUFSLEdBQWtCLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIiNpT1NLaXQgTW9kdWxlXG4jQnkgS2V2eW4gQXJub3R0IEBrdnluX1xuZnJhbWVyRGV2aWNlcyA9IHtcbiNGdWxsc2NyZWVuXG5cImZ1bGxzY3JlZW5cIiA6IHsgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQsIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcdHNjYWxlOjEsIG1vYmlsZTpmYWxzZSwgcGxhdGZvcm06XCJ3ZWJcIn1cblxuI2lQaG9uZXNcbiMjNVNcblwiYXBwbGUtaXBob25lLTVzLXNwYWNlLWdyYXlcIjogeyBoZWlnaHQ6IDExMzYsIHdpZHRoOiA2NDAsXHRzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cImFwcGxlLWlwaG9uZS01cy1zaWx2ZXJcIjogeyBoZWlnaHQ6IDExMzYsIHdpZHRoOiA2NDAsXHRzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cImFwcGxlLWlwaG9uZS01cy1nb2xkXCI6IHsgaGVpZ2h0OiAxMTM2LCB3aWR0aDogNjQwLFx0c2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXG4jIzVjXG5cImFwcGxlLWlwaG9uZS01Yy1ncmVlblwiOiB7IGhlaWdodDogMTEzNiwgd2lkdGg6IDY0MCxcdHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblwiYXBwbGUtaXBob25lLTVjLWJsdWVcIjogeyBoZWlnaHQ6IDExMzYsIHdpZHRoOiA2NDAsXHRzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cImFwcGxlLWlwaG9uZS01Yy1yZWRcIjogeyBoZWlnaHQ6IDExMzYsIHdpZHRoOiA2NDAsXHRzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cImFwcGxlLWlwaG9uZS01Yy13aGl0ZVwiOiB7IGhlaWdodDogMTEzNiwgd2lkdGg6IDY0MCxcdHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblwiYXBwbGUtaXBob25lLTVjLXllbGxvd1wiOiB7IGhlaWdodDogMTEzNiwgd2lkdGg6IDY0MCxcdHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblwiYXBwbGUtaXBob25lLTVjLXBpbmtcIjogeyBoZWlnaHQ6IDExMzYsIHdpZHRoOiA2NDAsXHRzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG4jIzZzXG5cImFwcGxlLWlwaG9uZS02cy1zcGFjZS1ncmF5XCIgOiB7IGhlaWdodDogMTMzNCwgd2lkdGg6IDc1MCxcdHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblwiYXBwbGUtaXBob25lLTZzLXNpbHZlclwiOiB7IGhlaWdodDogMTMzNCwgd2lkdGg6IDc1MCxcdHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblwiYXBwbGUtaXBob25lLTZzLWdvbGRcIjogeyBoZWlnaHQ6IDEzMzQsIHdpZHRoOiA3NTAsXHRzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cImFwcGxlLWlwaG9uZS02cy1yb3NlLWdvbGRcIjogeyBoZWlnaHQ6IDEzMzQsIHdpZHRoOiA3NTAsXHRzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG4jNnMgcGx1c1xuXCJhcHBsZS1pcGhvbmUtNnMtcGx1cy1nb2xkXCI6IHsgaGVpZ2h0OiAyMjA4LCB3aWR0aDogMTI0MixcdHNjYWxlOiAzLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblwiYXBwbGUtaXBob25lLTZzLXBsdXMtc2lsdmVyXCI6IHsgaGVpZ2h0OiAyMjA4LCB3aWR0aDogMTI0MixcdHNjYWxlOiAzLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblwiYXBwbGUtaXBob25lLTZzLXBsdXMtc3BhY2UtZ3JheVwiOiB7IGhlaWdodDogMjIwOCwgd2lkdGg6IDEyNDIsXHRzY2FsZTogMywgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cImFwcGxlLWlwaG9uZS02cy1wbHVzLXJvc2UtZ29sZFwiOiB7IGhlaWdodDogMjIwOCwgd2lkdGg6IDEyNDIsXHRzY2FsZTogMywgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cbiNpUGFkc1xuXG4jQWlyXG5cblwiYXBwbGUtaXBhZC1haXItMi1nb2xkXCI6IHsgaGVpZ2h0OiAyMDQ4LCB3aWR0aDogMTUzNixcdHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblwiYXBwbGUtaXBhZC1haXItMi1zaWx2ZXJcIjogeyBoZWlnaHQ6IDIwNDgsIHdpZHRoOiAxNTM2LFx0c2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXCJhcHBsZS1pcGFkLWFpci0yLXNwYWNlLWdyYXlcIjogeyBoZWlnaHQ6IDIwNDgsIHdpZHRoOiAxNTM2LFx0c2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXG4jbWluaVxuXCJhcHBsZS1pcGFkLW1pbmktNC1nb2xkXCI6IHsgaGVpZ2h0OiAyMDQ4LCB3aWR0aDogMTUzNixcdHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblwiYXBwbGUtaXBhZC1taW5pLTQtc3BhY2UtZ3JheVwiOiB7IGhlaWdodDogMjA0OCwgd2lkdGg6IDE1MzYsXHRzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cImFwcGxlLWlwYWQtbWluaS00LXNpbHZlclwiOnsgaGVpZ2h0OiAyMDQ4LCB3aWR0aDogMTUzNiwgc2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXG4jUHJvXG5cImFwcGxlLWlwYWQtcHJvLWdvbGRcIjogeyBoZWlnaHQ6IDI3MzIsIHdpZHRoOiAyMDQ4LCBzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cImFwcGxlLWlwYWQtcHJvLXNpbHZlclwiOiB7IGhlaWdodDogMjczMiwgd2lkdGg6IDIwNDgsIHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblwiYXBwbGUtaXBhZC1wcm8tc3BhY2UtZ3JheVwiIDogeyBoZWlnaHQ6IDI3MzIsIHdpZHRoOiAyMDQ4LCBzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG59XG5leHBvcnRzLmRldmljZSA9IDBcbmV4cG9ydHMubmFtZSA9IDBcbmV4cG9ydHMuc2NhbGUgPSAwXG5leHBvcnRzLmhlaWdodCA9IDBcbmV4cG9ydHMud2lkdGggPSAwXG5leHBvcnRzLm1vYmlsZSA9IDBcbmV4cG9ydHMucGxhdGZvcm0gPSAwXG5leHBvcnRzLm9yaWVudGF0aW9uID0gMFxuc2NyZWVuID0ge31cblxuXG5leHBvcnRzLmdldERldmljZSA9IC0+XG5cdGRldmljZSA9IEZyYW1lci5EZXZpY2UuZGV2aWNlVHlwZVxuXHRpZiBpbm5lcldpZHRoID09IDEyNDJcblx0XHRkZXZpY2UgPSBcImFwcGxlLWlwaG9uZS02cy1wbHVzLXNpbHZlclwiXG5cdGV4cG9ydHMuc2NhbGUgPSBmcmFtZXJEZXZpY2VzW2RldmljZV0uc2NhbGVcblx0aWYgZGV2aWNlID09IFwiZnVsbHNjcmVlblwiXG5cdFx0ZXhwb3J0cy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoXG5cdFx0ZXhwb3J0cy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHRcblx0ZWxzZVxuXHRcdGV4cG9ydHMud2lkdGggPSBmcmFtZXJEZXZpY2VzW2RldmljZV0ud2lkdGhcblx0XHRleHBvcnRzLmhlaWdodCA9IGZyYW1lckRldmljZXNbZGV2aWNlXS5oZWlnaHRcblx0XHRpZiB3aW5kb3cuaW5uZXJXaWR0aCA9PSAxMjQyIHx8IHdpbmRvdy5pbm5lcldpZHRoID09IDIyMDhcblx0XHRcdGV4cG9ydHMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aFxuXHRcdFx0ZXhwb3J0cy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHRcblx0XHRcdGV4cG9ydHMuc2NhbGUgPSAzXG5cdGV4cG9ydHMubW9iaWxlID0gZnJhbWVyRGV2aWNlc1tkZXZpY2VdLm1vYmlsZVxuXHRleHBvcnRzLnBsYXRmb3JtID0gZnJhbWVyRGV2aWNlc1tkZXZpY2VdLnBsYXRmb3JtXG5cdGV4cG9ydHMub3JpZW50YXRpb24gPSAgRnJhbWVyLkRldmljZS5vcmllbnRhdGlvblxuXHRkZXZpY2UgPSBkZXZpY2UucmVwbGFjZShcImFwcGxlLVwiLCBcIlwiKVxuXHRkZXZpY2UgPSBkZXZpY2UucmVwbGFjZShcIi1nb2xkXCIsIFwiXCIpXG5cdGRldmljZSA9IGRldmljZS5yZXBsYWNlKFwiLWdyZWVuXCIsIFwiXCIpXG5cdGRldmljZSA9IGRldmljZS5yZXBsYWNlKFwiLWJsdWVcIiwgXCJcIilcblx0ZGV2aWNlID0gZGV2aWNlLnJlcGxhY2UoXCItcmVkXCIsIFwiXCIpXG5cdGRldmljZSA9IGRldmljZS5yZXBsYWNlKFwiLXdoaXRlXCIsIFwiXCIpXG5cdGRldmljZSA9IGRldmljZS5yZXBsYWNlKFwiLXllbGxvd1wiLCBcIlwiKVxuXHRkZXZpY2UgPSBkZXZpY2UucmVwbGFjZShcIi1waW5rXCIsIFwiXCIpXG5cdGRldmljZSA9IGRldmljZS5yZXBsYWNlKFwiLXNwYWNlLWdyZXlcIiwgXCJcIilcblx0ZGV2aWNlID0gZGV2aWNlLnJlcGxhY2UoXCItcm9zZVwiLCBcIlwiKVxuXHRkZXZpY2UgPSBkZXZpY2UucmVwbGFjZShcIjVzXCIsIFwiNVwiKVxuXHRkZXZpY2UgPSBkZXZpY2UucmVwbGFjZShcIjVjXCIsIFwiNVwiKVxuXHRleHBvcnRzLmRldmljZSA9IGRldmljZS5yZXBsYWNlKFwiLXNpbHZlclwiLCBcIlwiKVxuXHRzY3JlZW4gPSB7XG5cdFx0d2lkdGg6ZXhwb3J0cy53aWR0aFxuXHRcdGhlaWdodDpleHBvcnRzLmhlaWdodFxuXHR9XG5cblxuZXhwb3J0cy5vcmllbnQgPSAoKSAtPlxuXHRpZiBleHBvcnRzLm9yaWVudGF0aW9uID09IC05MFxuXHRcdHRlbXBIZWlnaHQgPSBleHBvcnRzLmhlaWdodFxuXHRcdHRlbXBXaWR0aCA9IGV4cG9ydHMud2lkdGhcblx0XHRleHBvcnRzLmhlaWdodCA9IHRlbXBXaWR0aFxuXHRcdGV4cG9ydHMud2lkdGggPSB0ZW1wSGVpZ2h0XG5cbmV4cG9ydHMuZ2V0RGV2aWNlKClcbmV4cG9ydHMub3JpZW50KClcblxuXG4jTGlzdGVuIHRvIHdpbmRvdyByZWl6ZVxub25SZXNpemUgPSAoKSAtPlxuXHRleHBvcnRzLmdldERldmljZSgpXG5cdGV4cG9ydHMubGF5b3V0KClcblxuXG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIG9uUmVzaXplKVxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJvcmllbnRhdGlvbmNoYW5nZVwiICwgb25SZXNpemUpXG5cblxuXG5kZWZhdWx0cyA9IHtcblx0YWxlcnQ6IHtcblx0XHR0ZXh0Ontcblx0XHRcdHRpdGxlOiBcIlRpdGxlXCJcblx0XHRcdG1lc3NhZ2U6XCJNZXNzYWdlXCJcblx0XHRcdGFjdGlvbjpcIkFjdGlvblwiXG5cdFx0XHRzZWNvbmRhcnlBY3Rpb246IFwic2Vjb25kYXJ5QWN0aW9uXCJcblx0XHR9XG5cdH1cblx0YmFubmVyOiB7XG5cdFx0dGV4dDp7XG5cdFx0XHR0aXRsZTogXCJUaXRsZVwiXG5cdFx0XHRtZXNzYWdlOlwiTWVzc2FnZVwiXG5cdFx0XHRhY3Rpb246XCJBY3Rpb25cIlxuXHRcdFx0dGltZTpcIm5vd1wiXG5cdFx0XHRpY29uOnVuZGVmaW5lZFxuXHRcdH1cblx0fVxuXHRidXR0b246e1xuXHRcdHRleHQ6XCJ0ZXh0XCJcblx0XHR0eXBlOlwidGV4dFwiXG5cdFx0c3R5bGU6XCJsaWdodFwiXG5cdFx0YmFja2dyb3VuZENvbG9yOlwid2hpdGVcIlxuXHRcdGNvbG9yOlwiIzAwN0FGRlwiXG5cdFx0Zm9udFNpemU6MTdcblx0XHRmb250V2VpZ2h0OlwicmVndWxhclwiXG5cdFx0bmFtZTpcImJ1dHRvblwiXG5cdFx0Ymx1cjp0cnVlXG5cdFx0c3VwZXJMYXllcjp1bmRlZmluZWRcblx0fVxuXHRmcmFtZXJQcm9wcyA6W1wibmFtZVwiLCBcIndpZHRoXCIsIFwiaGVpZ2h0XCIsIFwic3VwZXJMYXllclwiLCBcIm9wYWNpdHlcIiwgXCJjb2xvclwiLCBcImJhY2tncm91bmRDb2xvclwiLCBcInhcIiwgXCJ5XCIsIFwibWlkWFwiLCBcIm1pZFlcIiwgXCJtYXhYXCIsIFwibWluWFwiLCBcInZpc2libGVcIiwgXCJjbGlwXCIsIFwic2Nyb2xsSG9yaXpvbnRhbFwiLCBcInNjcm9sbFZlcnRpY2FsXCIsIFwiaWdub3JlRXZlbnRzXCIsIFwielwiLCBcInNjYWxlWFwiLCBcInNjYWxlWVwiLCBcInNjYWxlWlwiLCBcInNjYWxlXCIsIFwic2tld1hcIiwgXCJza2V3WVwiLCBcInNrZXdcIiwgXCJvcmlnaW5YXCIsIFwib3JpZ2luWVwiLCBcIm9yaWdpblpcIiwgXCJwZXJzcGVjdGl2ZVwiLCBcInBlcnNwZWN0aXZlT3JpZ2luWFwiLCBcInBlcnNwZWN0aXZlT3JpZ2luWVwiLCBcInJvdGF0aW9uWFwiLCBcInJvdGF0aW9uWVwiLCBcInJvdGF0aW9uWlwiLCBcInJvdGF0aW9uXCIsIFwiYmx1clwiLCBcImJyaWdodG5lc3NcIiwgXCJzYXR1cmF0ZVwiLCBcImh1ZVJvdGF0ZVwiLCBcImNvbnRyYXN0XCIsIFwiaW52ZXJ0XCIsIFwiZ3JheXNjYWxlXCIsIFwic2VwaWFcIiwgXCJzaGFkb3dYXCIsIFwic2hhZG93WVwiLCBcInNoYWRvd0JsdXJcIiwgXCJzaGFkb3dTcHJlYWRcIiwgXCJzaGFkb3dDb2xvclwiLCBcImJvcmRlckNvbG9yXCIsIFwiYm9yZGVyV2lkdGhcIiwgXCJmb3JjZTJkXCIsIFwiZmxhdFwiLCBcImJhY2tmYWNlVmlzaWJsZVwiLCBcIm5hbWVcIiwgXCJtYXRyaXhcIiwgXCJfbWF0cml4MmRcIiwgXCJ0cmFuc2Zvcm1NYXRyaXhcIiwgXCJtYXRyaXgzZFwiLCBcImJvcmRlclJhZGl1c1wiLCBcInBvaW50XCIsIFwic2l6ZVwiLCBcImZyYW1lXCIsIFwiaHRtbFwiLCBcImltYWdlXCIsIFwic2Nyb2xsWFwiLCBcInNjcm9sbFlcIiwgXCJfZG9tRXZlbnRNYW5hZ2VyXCIsIFwibW91c2VXaGVlbFNwZWVkTXVsdGlwbGllclwiLCBcInZlbG9jaXR5VGhyZXNob2xkXCIsIFwiYW5pbWF0aW9uT3B0aW9uc1wiLCBcImNvbnN0cmFpbmVkXCJdXG5cdGNzc1Byb3BzIDogW1wiZm9udEZhbWlseVwiLCBcImZvbnRTaXplXCIsIFwidGV4dEFsaWduXCIsIFwiZm9udFdlaWdodFwiLCBcImxpbmVIZWlnaHRcIl1cblx0Y29uc3RyYWludFByb3BzIDogW1wiaGVpZ2h0XCIsIFwid2lkdGhcIl1cblx0Y29uc3RyYWludFR5cGVzOiBbXCJ0b3BcIiwgXCJsZWFkaW5nXCIsIFwidHJhaWxpbmdcIiwgXCJib3R0b21cIl1cblx0Y29uc3RyYWludEFsaWducyA6IFtcImhvcml6b250YWxDZW50ZXJcIiwgXCJ2ZXJ0aWNhbENlbnRlclwiLCBcImxlYWRpbmdFZGdlc1wiLCBcInRyYWlsaW5nRWRnZXNcIiwgXCJ0b3BFZGdlc1wiLCBcImJvdHRvbUVkZ2VzXCIsIFwiYWxpZ25cIiwgXCJ2ZXJ0aWNhbFwiLCBcImhvcml6b250YWxcIl1cblx0Y29uc3RyYWludHM6IHtcblx0XHR0b3A6IHtcblx0XHRcdFwicHJvcFwiIDogXCJ5XCJcblx0XHRcdFwib2JqUHJvcFwiIDogXCJtYXhZXCJcblx0XHRcdFwib2JqUHJvcDJcIiA6IFwiaGVpZ2h0XCJcblx0XHRcdFwib3BwXCIgOiBcImJvdHRvbVwiXG5cdFx0fVxuXHRcdGxlYWRpbmc6IHtcblx0XHRcdFwicHJvcFwiIDogXCJ4XCJcblx0XHRcdFwib2JqUHJvcFwiIDogXCJtYXhYXCJcblx0XHRcdFwib2JqUHJvcDJcIiA6IFwid2lkdGhcIlxuXHRcdFx0XCJvcHBcIiA6IFwidHJhaWxpbmdcIlxuXHRcdH1cblx0XHRib3R0b206IHtcblx0XHRcdFwicHJvcFwiIDogXCJtYXhZXCJcblx0XHRcdFwib2JqUHJvcFwiIDogXCJoZWlnaHRcIlxuXHRcdFx0XCJvYmpQcm9wMlwiIDogXCJ5XCJcblx0XHRcdFwib3BwXCIgOiBcInRvcFwiXG5cdFx0fVxuXHRcdHRyYWlsaW5nOiB7XG5cdFx0XHRcInByb3BcIiA6IFwibWF4WFwiXG5cdFx0XHRcIm9ialByb3BcIiA6IFwid2lkdGhcIlxuXHRcdFx0XCJvYmpQcm9wMlwiIDogXCJ4XCJcblx0XHRcdFwib3BwXCIgOiBcImxlYWRpbmdcIlxuXHRcdH1cblx0fVxuXHRsb2NrU2NyZWVuOiB7XG5cdFx0dGltZTpcImRlZmF1bHRcIlxuXHRcdGRhdGU6XCJkZWZhdWx0XCJcblx0XHRwYXNzY29kZTpmYWxzZVxuXHRcdGNsb2NrMjQ6ZmFsc2Vcblx0XHR0eXBlOlwibG9ja1NjcmVlblwiXG5cdH1cblx0a2V5Ym9hcmRQcm9wczogW1wicmV0dXJuS2V5XCJdXG5cdGtleWJvYXJkOiB7XG5cdFx0cmV0dXJuS2V5OlwiZGVmYXVsdFwiXG5cdH1cblx0bWVudToge1xuXHRcdG9wdGlvbnM6W1wiT3B0aW9uXCIsIFwiT3B0aW9uXCIsIFwiT3B0aW9uXCJdXG5cdFx0ZXhpdDpcIkNhbmNlbFwiXG5cdFx0YW5pbWF0ZWQ6ZmFsc2Vcblx0XHRkZXNjcmlwdGlvbjp1bmRlZmluZWRcblx0fVxuXHRuYXZCYXI6IHtcblx0XHR0aXRsZTpcInRpdGxlXCJcblx0XHRsZWZ0QWN0aW9uOlwibGVmdEFjdGlvblwiXG5cdFx0cmlnaHRBY3Rpb246XCJyaWdodEFjdGlvblwiXG5cdFx0Ymx1cjp0cnVlXG5cdFx0c3VwZXJMYXllcjp1bmRlZmluZWRcblx0XHR0eXBlOlwibmF2QmFyXCJcblx0fVxuXHRzdGF0dXNCYXI6IHtcblx0XHRjYXJyaWVyOlwiXCJcblx0XHRuZXR3b3JrOlwiTFRFXCJcblx0XHRiYXR0ZXJ5OjEwMFxuXHRcdHNpZ25hbDo1XG5cdFx0c3R5bGU6XCJkYXJrXCJcblx0XHRjbG9jazI0OmZhbHNlXG5cdFx0dHlwZTpcInN0YXR1c0JhclwiXG5cdH1cblx0dGFiQmFyIDoge1xuXHRcdHRhYnM6IFtdXG5cdFx0c3RhcnQ6MFxuXHRcdHR5ZXA6XCJ0YWJCYXJcIlxuXHRcdGJhY2tncm91bmRDb2xvcjpcIndoaXRlXCJcblx0XHRhY3RpdmVMYWJlbENvbG9yOlwiIzAwNzZGRlwiXG5cdFx0YWN0aXZlRmlsbENvbG9yOlwiIzAwNzZGRlwiXG5cdFx0aW5hY3RpdmVMYWJlbENvbG9yOlwiIzkyOTI5MlwiXG5cdFx0aW5hY3RpdmVGaWxsQ29sb3I6XCIjOTI5MjkyXCJcblx0fVxuXHR0YWIgOiB7XG5cdFx0bGFiZWw6IFwibGFiZWxcIlxuXHRcdGljb246XCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0XHRcdDxzdmcgd2lkdGg9JzI1cHgnIGhlaWdodD0nMjVweCcgdmlld0JveD0nMCAwIDI1IDI1JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnPlxuXHRcdFx0ICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy42LjEgKDI2MzEzKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHRcdCAgICA8dGl0bGU+MTwvdGl0bGU+XG5cdFx0XHQgICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0XHQgICAgPGRlZnM+PC9kZWZzPlxuXHRcdFx0ICAgIDxnIGlkPSdQYWdlLTEnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIGZpbGwtb3BhY2l0eT0nMSc+XG5cdFx0XHQgICAgICAgIDxnIGlkPSdCb3R0b20tQmFyL1RhYi1CYXInIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC0yNS4wMDAwMDAsIC03LjAwMDAwMCknIGZpbGw9JyMwMDc2RkYnPlxuXHRcdFx0ICAgICAgICAgICAgPGcgaWQ9J1BsYWNlaG9sZGVycycgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMjUuMDAwMDAwLCA3LjAwMDAwMCknPlxuXHRcdFx0ICAgICAgICAgICAgICAgIDxyZWN0IGlkPScxJyB4PScwJyB5PScwJyB3aWR0aD0nMjUnIGhlaWdodD0nMjUnIHJ4PSczJz48L3JlY3Q+XG5cdFx0XHQgICAgICAgICAgICA8L2c+XG5cdFx0XHQgICAgICAgIDwvZz5cblx0XHRcdCAgICA8L2c+XG5cdFx0XHQ8L3N2Zz5cIlxuXHRcdGFjdGl2ZTogdW5kZWZpbmVkXG5cdFx0dW5hY3RpdmU6IHVuZGVmaW5lZFxuXHRcdHRhYkJhcjogdW5kZWZpbmVkXG5cdFx0dHlwZTpcInRhYlwiXG5cdH1cblx0dGFibGUgOiB7XG5cdFx0dHlwZTpcInRhYmxlXCJcblx0XHRjb250ZW50Oltcblx0XHRcdHtcblx0XHRcdFx0XCJsYWJlbFwiOiBcIkNhdHNcIiBcblx0XHRcdFx0XCJkZXRhaWxcIiA6IFwiQW5pbWFsXCJcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdFwibGFiZWxcIiA6IFwiRG9nc1wiXG5cdFx0XHRcdFwiZGV0YWlsXCIgOiBcIkFuaW1hbFwiXG5cblx0XHRcdFx0fVxuXHRcdFx0XVxuXHRcdGNlbGw6XCJkZWZhdWx0XCJcblx0fVxuXHR0YWJsZUNlbGwgOiB7XG5cdFx0dHlwZTpcInRhYmxlQ2VsbFwiXG5cdFx0c3R5bGU6XCJkZWZhdWx0XCJcblx0fVxuXHR0ZXh0OiB7XG5cdFx0ZGVmYXVsdHM6IHtcblx0XHRcdHRleHQ6IFwiaU9TIFRleHQgTGF5ZXJcIlxuXHRcdFx0dHlwZTpcInRleHRcIlxuXHRcdFx0eDowXG5cdFx0XHR5OjBcblx0XHRcdHdpZHRoOi0xXG5cdFx0XHRoZWlnaHQ6LTFcblx0XHRcdHN1cGVyTGF5ZXI6dW5kZWZpbmVkXG5cdFx0XHRzdHlsZTpcImRlZmF1bHRcIlxuXHRcdFx0bGluZXM6MVxuXHRcdFx0dGV4dEFsaWduOlwibGVmdFwiXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiXG5cdFx0XHRjb2xvcjpcImJsYWNrXCJcblx0XHRcdGZvbnRTaXplOiAxN1xuXHRcdFx0Zm9udEZhbWlseTpcIi1hcHBsZS1zeXN0ZW0sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWZcIlxuXHRcdFx0Zm9udFdlaWdodDpcInJlZ3VsYXJcIlxuXHRcdFx0bGluZUhlaWdodDpcImF1dG9cIlxuXHRcdFx0bmFtZTpcInRleHQgbGF5ZXJcIlxuXHRcdFx0b3BhY2l0eToxXG5cdFx0XHR0ZXh0VHJhbnNmb3JtOlwibm9uZVwiXG5cdFx0XHR9IFxuXHR9XG59XG5cbnNldFByb3BzID0gKG9iamVjdCwgZGVzdCkgLT5cblx0a2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdClcblx0ZGVzdFtcInByb3BzXCJdID0ga2V5c1xuXG5cbnNldFByb3BzKGRlZmF1bHRzLnRleHQuZGVmYXVsdHMsIGRlZmF1bHRzLnRleHQpXG5zZXRQcm9wcyhkZWZhdWx0cy5hbGVydC50ZXh0LCBkZWZhdWx0cy5hbGVydClcbnNldFByb3BzKGRlZmF1bHRzLmJhbm5lci50ZXh0LCBkZWZhdWx0cy5iYW5uZXIpXG5zZXRQcm9wcyhkZWZhdWx0cy5sb2NrU2NyZWVuLCBkZWZhdWx0cy5sb2NrU2NyZWVuKVxuc2V0UHJvcHMoZGVmYXVsdHMuc3RhdHVzQmFyLCBkZWZhdWx0cy5zdGF0dXNCYXIpXG5zZXRQcm9wcyhkZWZhdWx0cy50YWIsIGRlZmF1bHRzLnRhYilcbnNldFByb3BzKGRlZmF1bHRzLnRhYkJhciwgZGVmYXVsdHMudGFiQmFyKVxuc2V0UHJvcHMoZGVmYXVsdHMubmF2QmFyLCBkZWZhdWx0cy5uYXZCYXIpXG5zZXRQcm9wcyhkZWZhdWx0cy5idXR0b24sIGRlZmF1bHRzLmJ1dHRvbilcbnNldFByb3BzKGRlZmF1bHRzLm1lbnUsIGRlZmF1bHRzLm1lbnUpXG5zZXRQcm9wcyhkZWZhdWx0cy50YWJsZSwgZGVmYXVsdHMudGFibGUpXG5zZXRQcm9wcyhkZWZhdWx0cy50YWJsZUNlbGwsIGRlZmF1bHRzLnRhYmxlQ2VsbClcblxuc2V0dXBDb21wb25lbnQgPSAoY29tcG9uZW50LCBhcnJheSkgLT5cblx0aWYgYXJyYXkgPT0gdW5kZWZpbmVkXG5cdFx0YXJyYXkgPSBbXVxuXHRvYmogPSB7fVxuXHRmb3IgaSBpbiBkZWZhdWx0c1tjb21wb25lbnRdLnByb3BzXG5cdFx0aWYgYXJyYXlbaV0gIT0gdW5kZWZpbmVkXG5cdFx0XHRvYmpbaV0gPSBhcnJheVtpXVxuXHRcdGVsc2Vcblx0XHRcdG9ialtpXSA9IGRlZmF1bHRzW2NvbXBvbmVudF1baV1cblx0cmV0dXJuIG9ialxuXG5cbiMjIENvbnZlcnNpb25zXG5cbiNGdW5jdGlvbnNcbmV4cG9ydHMucHQgPSAocHgpIC0+XG5cdHB0ID0gcHgvZXhwb3J0cy5zY2FsZVxuXHRwdCA9IE1hdGgucm91bmQocHQpXG5cdHJldHVybiBwdFxuXG5leHBvcnRzLnB4ID0gKHB0KSAtPlxuXHRweCA9IHB0ICogZXhwb3J0cy5zY2FsZVxuXHRweCA9IE1hdGgucm91bmQocHgpXG5cdHJldHVybiBweFxuXG5leHBvcnRzLnN2ZyA9IChzdmcpIC0+XG5cdCMgRmluZCBTdHJpbmdcblx0c3RhcnRJbmRleCA9IHN2Zy5zZWFyY2goXCI8c3ZnIHdpZHRoPVwiKSBcblx0ZW5kSW5kZXggPSBzdmcuc2VhcmNoKFwiIHZpZXdCb3hcIilcblx0c3RyaW5nID0gc3ZnLnNsaWNlKHN0YXJ0SW5kZXgsIGVuZEluZGV4KVxuXG5cdCNGaW5kIHdpZHRoXG5cdHdTdGFydEluZGV4ID0gc3RyaW5nLnNlYXJjaChcIj1cIikgKyAyXG5cdHdFbmRJbmRleCA9ICBzdHJpbmcuc2VhcmNoKFwicHhcIilcblx0d2lkdGggPSBzdHJpbmcuc2xpY2Uod1N0YXJ0SW5kZXgsIHdFbmRJbmRleClcblx0bmV3V2lkdGggPSBleHBvcnRzLnB4KHdpZHRoKVxuXG5cdCMgRmluZCBIZWlnaHRcblx0aGVpZ2h0U3RyaW5nID0gc3RyaW5nLnNsaWNlKHdFbmRJbmRleCArIDQsIHN0cmluZy5sZW5ndGgpXG5cdGhTdGFydEluZGV4ID0gaGVpZ2h0U3RyaW5nLnNlYXJjaChcIj1cIikrIDJcblx0aEVuZEluZGV4ID0gaGVpZ2h0U3RyaW5nLnNlYXJjaChcInB4XCIpIFxuXHRoZWlnaHQgPSBoZWlnaHRTdHJpbmcuc2xpY2UoaFN0YXJ0SW5kZXgsIGhFbmRJbmRleClcblx0bmV3SGVpZ2h0ID0gZXhwb3J0cy5weChoZWlnaHQpXG5cblx0I0NyZWF0ZSBuZXcgc3RyaW5nXG5cdG5ld1N0cmluZyA9IHN0cmluZy5yZXBsYWNlKHdpZHRoLCBuZXdXaWR0aClcblx0bmV3U3RyaW5nID0gbmV3U3RyaW5nLnJlcGxhY2UoaGVpZ2h0LCBuZXdIZWlnaHQpXG5cblx0I1JlcGxhY2Ugc3RyaW5nc1xuXHRzdmcgPSBzdmcucmVwbGFjZShzdHJpbmcsIG5ld1N0cmluZylcblxuXHRyZXR1cm4ge1xuXHRcdHN2Zzpzdmdcblx0XHR3aWR0aDpuZXdXaWR0aFxuXHRcdGhlaWdodDpuZXdIZWlnaHRcblx0fVxuXG5leHBvcnRzLmNoYW5nZUZpbGwgPSAobGF5ZXIsIGNvbG9yKSAtPlxuXHRzd2l0Y2ggY29sb3Jcblx0XHR3aGVuIFwicmVkXCJcblx0XHRcdGNvbG9yID0gXCIjRkUzODI0XCJcblx0XHR3aGVuIFwiYmx1ZVwiXG5cdFx0XHRjb2xvciA9IFwiIzAwNzZGRlwiXG5cdFx0d2hlbiBcInBpbmtcIlxuXHRcdFx0Y29sb3IgPSBcIiNGRTI4NTFcIlxuXHRcdHdoZW4gXCJncmV5XCJcblx0XHRcdGNvbG9yID0gXCIjOTI5MjkyXCJcblx0XHR3aGVuIFwiZ3JheVwiXG5cdFx0XHRjb2xvciA9IFwiIzkyOTI5MlwiXG5cdFx0d2hlbiBcImJsYWNrXCJcblx0XHRcdGNvbG9yID0gXCIjMDMwMzAzXCJcblx0XHR3aGVuIFwid2hpdGVcIlxuXHRcdFx0Y29sb3IgPSBcIiNFRkVGRjRcIlxuXHRcdHdoZW4gXCJvcmFuZ2VcIlxuXHRcdFx0Y29sb3IgPSBcIiNGRjk2MDBcIlxuXHRcdHdoZW4gXCJncmVlblwiXG5cdFx0XHRjb2xvciA9IFwiIzQ0REI1RVwiXG5cdFx0d2hlbiBcImxpZ2h0LWJsdWVcIlxuXHRcdFx0Y29sb3IgPSBcIiM1NEM3RkNcIlxuXHRcdHdoZW4gXCJ5ZWxsb3dcIlxuXHRcdFx0Y29sb3IgPSBcIiNGRkNEMDBcIlxuXG5cblx0c3RhcnRJbmRleCA9IGxheWVyLmh0bWwuc2VhcmNoKFwiZmlsbD1cXFwiI1wiKVxuXHRmaWxsU3RyaW5nID0gbGF5ZXIuaHRtbC5zbGljZShzdGFydEluZGV4LCBsYXllci5odG1sLmxlbmd0aClcblx0ZW5kSW5kZXggPSBmaWxsU3RyaW5nLnNlYXJjaChcIlxcXCI+XCIpXG5cdHN0cmluZyA9IGZpbGxTdHJpbmcuc2xpY2UoMCwgZW5kSW5kZXgpXG5cdG5ld1N0cmluZyA9IFwiZmlsbD1cXFwiXCIgKyBjb2xvclxuXHRsYXllci5odG1sID0gbGF5ZXIuaHRtbC5yZXBsYWNlKHN0cmluZywgbmV3U3RyaW5nKVxuXG5leHBvcnRzLmdldFRpbWUgPSAtPlxuXHRkYXlzT2ZUaGVXZWVrID0gW1wiU3VuZGF5XCIsIFwiTW9uZGF5XCIsIFwiVHVlc2RheVwiLCBcIldlZG5lc2RheVwiLCBcIlRodXJzZGF5XCIsIFwiRnJpZGF5XCIsIFwiU2F0dXJkYXlcIl1cblx0bW9udGhzT2ZUaGVZZWFyID0gW1wiSmFudWFyeVwiLCBcIkZlYnJ1YXJ5XCIsIFwiTWFyY2hcIiwgXCJBcHJpbFwiLCBcIk1heVwiLCBcIkp1bmVcIiwgXCJKdWx5XCIsIFwiQXVndXN0XCIsIFwiU2VwdGVtYmVyXCIsIFwiT2N0b2JlclwiLCBcIk5vdmVtYmVyXCIsIFwiRGVjZW1iZXJcIl1cblx0ZGF0ZU9iaiA9IG5ldyBEYXRlKClcblx0bW9udGggPSBtb250aHNPZlRoZVllYXJbZGF0ZU9iai5nZXRNb250aCgpXVxuXHRkYXRlID0gZGF0ZU9iai5nZXREYXRlKClcblx0ZGF5ID0gZGF5c09mVGhlV2Vla1tkYXRlT2JqLmdldERheSgpXVxuXHRob3VycyA9IGRhdGVPYmouZ2V0SG91cnMoKVxuXHRtaW5zID0gZGF0ZU9iai5nZXRNaW51dGVzKClcblx0c2VjcyA9IGRhdGVPYmouZ2V0U2Vjb25kcygpXG5cdHJldHVybiB7XG5cdFx0bW9udGg6bW9udGhcblx0XHRkYXk6ZGF5XG5cdFx0ZGF0ZTpkYXRlXG5cdFx0aG91cnM6aG91cnNcblx0XHRtaW5zOm1pbnNcblx0XHRzZWNzOnNlY3Ncblx0fVxuXG4jIyBFcnJvcnNcbmVycm9yID0gKGNvbnRleHQsIGNvZGUpIC0+XG5cdGlmIGNvZGUgPT0gMSBcblx0XHRwcmludCBcIkVycm9yIEludmFsaWQgUmVsYXRpb25zaGlwIOKAkyBMYXllciBpZDoje2NvbnRleHQuaWR9IGhhcyBhIHJlbGF0aW9uc2hpcCB3aXRoIGFub3RoZXIgbGF5ZXIgbm90IGluIHRoZSBzYW1lIHN1cGVyTGF5ZXIuXCJcblx0aWYgY29kZSA9PSAyXG5cdFx0cHJpbnQgXCJFcnJvciAje2NvbnRleHR9IHJlcXVpcmVzIGEgbGF5ZXJcIlxuXHRpZiBjb2RlID09IDNcblx0XHRwcmludCBcIkVycm9yICN7Y29udGV4dH0gY2Fubm90IHJlZmVyIHRvIGl0c2VsZlwiXG5cdGlmIGNvZGUgPT0gNFxuXHRcdHByaW50IFwiRXJyb3IgI3tjb250ZXh0fSBpcyBub3QgYSB2YWxpZCB3ZWlnaHQuIFBsZWFzZSB1c2UgMTAwLCAyMDAsIDMwMC4uLiBvciBUaGluLCBMaWdodCwgUmVndWxhci4uLlwiXG5cdGlmIGNvZGUgPT0gNVxuXHRcdHByaW50IFwiRXJyb3IgTGF5ZXIgaWQ6I3tjb250ZXh0fSBpcyBub3QgYSB2YWxpZCBUYWIgb2JqZWN0LiBQbGVhc2UgY3JlYXRlIGEgVGFiIHVzaW5nIG5ldyBtb2R1bGUuVGFiLlwiXG5cbiMjIEF1dG9MYXlvdXRcblxuZXhwb3J0cy5zYW1lUGFyZW50ID0gKGxheWVyMSwgbGF5ZXIyKSAtPlxuXHRwYXJlbnRPbmUgPSBsYXllcjEuc3VwZXJMYXllclxuXHRwYXJlbnRUd28gPSBsYXllcjIuc3VwZXJMYXllclxuXHRpZiBwYXJlbnRPbmUgPT0gcGFyZW50VHdvXG5cdFx0cmV0dXJuIHRydWVcblx0ZWxzZSBcblx0XHRyZXR1cm4gZmFsc2VcblxuI1JlZnJlc2hlcyBMYXllciBvciBBbGwgTGF5ZXJzXG5leHBvcnRzLmxheW91dCA9IChsYXllcikgLT5cblx0aWYgbGF5ZXIgPT0gdW5kZWZpbmVkXG5cdFx0QC5hcnJheSA9IEZyYW1lci5DdXJyZW50Q29udGV4dC5sYXllcnNcblx0ZWxzZSBcblx0XHRALmFycmF5ID0gW2xheWVyXVxuXHRmb3IgbGF5ZXIgaW4gQC5hcnJheVxuXHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzICE9IHVuZGVmaW5lZFxuXHRcdFx0Zm9yIHAgaW4gZGVmYXVsdHMuY29uc3RyYWludFByb3BzXG5cdFx0XHRcdGxheW91dFNpemUobGF5ZXIsIHApXG5cdFx0XHRmb3IgYyBpbiBkZWZhdWx0cy5jb25zdHJhaW50VHlwZXNcblx0XHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHNbY10gIT0gdW5kZWZpbmVkXG5cdFx0XHRcdFx0bGF5b3V0Q2hhbmdlKGxheWVyLCBjKVxuXHRcdFx0Zm9yIGEgaW4gZGVmYXVsdHMuY29uc3RyYWludEFsaWduc1xuXHRcdFx0XHRpZiBsYXllci5jb25zdHJhaW50c1thXVxuXHRcdFx0XHRcdGxheW91dEFsaWduKGxheWVyLCBhKVxuXG4jQWxpZ24gY29uc3RyYWludHNcbmxheW91dEFsaWduID0gKGxheWVyLCB0eXBlKSAtPlxuXHQjIHByaW50IGxheWVyLm5hbWUgKyBcIjogY29uc3RyYWludHMgd2lkdGggXCIgKyBsYXllci5jb25zdHJhaW50cy53aWR0aFxuXHRkZWNsYXJlZENvbnN0cmFpbnQgPSBsYXllci5jb25zdHJhaW50c1t0eXBlXVxuXHRpZiBsYXllci5zdXBlckxheWVyXG5cdFx0QHN1cGVyTGF5ZXIgPSBsYXllci5zdXBlckxheWVyXG5cdGVsc2Vcblx0XHRAc3VwZXJMYXllciA9IHNjcmVlblxuXHRpZiBkZWNsYXJlZENvbnN0cmFpbnQgPT0gcGFyc2VJbnQoZGVjbGFyZWRDb25zdHJhaW50LCAxMClcblx0XHRlcnJvcih0eXBlLCAyKVxuXHRpZiBkZWNsYXJlZENvbnN0cmFpbnQgPT0gbGF5ZXJcblx0XHRlcnJvcih0eXBlLCAzKVxuXHRpZiB0eXBlb2YgZGVjbGFyZWRDb25zdHJhaW50ID09IFwib2JqZWN0XCJcblx0XHRmb3IgaSBpbiBkZWNsYXJlZENvbnN0cmFpbnRcblx0XHRcdGlmIHR5cGVvZiBpID09IFwic3RyaW5nXCJcblx0XHRcdFx0QHR5cGUgPSBpXG5cdFx0XHRpZiB0eXBlb2YgaSA9PSBcIm9iamVjdFwiXG5cdFx0XHRcdEBsYXllciA9IGkgXG5cdFx0aWYgQHR5cGUgPT0gXCJob3Jpem9udGFsQ2VudGVyXCIgfHwgQHR5cGUgPT0gXCJob3Jpem9udGFsXCJcblx0XHRcdGRlbHRhTW92ZSA9IChAbGF5ZXIud2lkdGggLSBsYXllci53aWR0aCkgLyAyXG5cdFx0XHRsYXllci54ID0gQGxheWVyLnggKyBkZWx0YU1vdmVcblx0XHRcdGxheWVyLmNvbnN0cmFpbnRzW1wibGVhZGluZ1wiXSA9IGV4cG9ydHMucHQobGF5ZXIueClcblx0XHRpZiBAdHlwZSA9PSBcInZlcnRpY2FsQ2VudGVyXCIgfHwgQHR5cGUgPT0gXCJ2ZXJ0aWNhbFwiICBcblx0XHRcdGRlbHRhTW92ZSA9IChAbGF5ZXIuaGVpZ2h0IC0gbGF5ZXIuaGVpZ2h0KSAvIDJcblx0XHRcdGxheWVyLnkgPSBAbGF5ZXIueSArIGRlbHRhTW92ZVxuXHRcdFx0bGF5ZXIuY29uc3RyYWludHNbXCJ0b3BcIl0gPSBleHBvcnRzLnB0KGxheWVyLnkpXG5cdFx0aWYgQHR5cGUgPT0gXCJsZWFkaW5nRWRnZXNcIiB8fCBAdHlwZSA9PSBcImxlYWRpbmdcIlxuXHRcdFx0bGF5ZXIueCA9IEBsYXllci54XG5cdFx0XHRsYXllci5jb25zdHJhaW50c1tcImxlYWRpbmdcIl0gPSBleHBvcnRzLnB0KGxheWVyLngpXG5cdFx0aWYgQHR5cGUgPT0gXCJ0cmFpbGluZ0VkZ2VzXCIgfHwgQHR5cGUgPT0gXCJ0cmFpbGluZ1wiXG5cdFx0XHRsYXllci5tYXhYID0gQGxheWVyLm1heFhcblx0XHRcdGxheWVyLmNvbnN0cmFpbnRzW1widHJhaWxpbmdcIl0gPSBleHBvcnRzLnB0KEBzdXBlckxheWVyLndpZHRoIC0gbGF5ZXIubWF4WClcblx0XHRpZiBAdHlwZSA9PSBcInRvcEVkZ2VzXCIgfHwgQHR5cGUgPT0gXCJ0b3BcIlxuXHRcdFx0bGF5ZXIueSA9IEBsYXllci55XG5cdFx0XHRsYXllci5jb25zdHJhaW50c1tcInRvcFwiXSA9IGV4cG9ydHMucHQobGF5ZXIueSlcblx0XHRpZiBAdHlwZSA9PSBcImJvdHRvbUVkZ2VzXCIgfHwgQHR5cGUgPT0gXCJib3R0b21cIlxuXHRcdFx0bGF5ZXIubWF4WSA9IEBsYXllci5tYXhZXG5cdFx0XHRsYXllci5jb25zdHJhaW50c1tcImJvdHRvbVwiXSA9IGV4cG9ydHMucHQoQHN1cGVyTGF5ZXIuaGVpZ2h0IC0gbGF5ZXIubWF4WSlcblx0aWYgdHlwZSA9PSBcImhvcml6b250YWxDZW50ZXJcIiB8fCB0eXBlID09IFwiaG9yaXpvbnRhbFwiXG5cdFx0ZGVsdGFNb3ZlID0gKGRlY2xhcmVkQ29uc3RyYWludC53aWR0aCAtIGxheWVyLndpZHRoKSAvIDJcblx0XHRsYXllci54ID0gZGVjbGFyZWRDb25zdHJhaW50LnggKyBkZWx0YU1vdmVcblx0aWYgdHlwZSA9PSBcInZlcnRpY2FsQ2VudGVyXCIgfHwgdHlwZSA9PSBcInZlcnRpY2FsXCIgIFxuXHRcdGRlbHRhTW92ZSA9IChkZWNsYXJlZENvbnN0cmFpbnQuaGVpZ2h0IC0gbGF5ZXIuaGVpZ2h0KSAvIDJcblx0XHRsYXllci55ID0gZGVjbGFyZWRDb25zdHJhaW50LnkgKyBkZWx0YU1vdmVcblx0aWYgdHlwZSA9PSBcImxlYWRpbmdFZGdlc1wiIFxuXHRcdGxheWVyLnggPSBkZWNsYXJlZENvbnN0cmFpbnQueFxuXHRcdGxheWVyLmNvbnN0cmFpbnRzW1wibGVhZGluZ1wiXSA9IGV4cG9ydHMucHQoZGVjbGFyZWRDb25zdHJhaW50LngpXG5cdGlmIHR5cGUgPT0gXCJ0cmFpbGluZ0VkZ2VzXCJcblx0XHRsYXllci5tYXhYID0gZGVjbGFyZWRDb25zdHJhaW50Lm1heFhcblx0XHRsYXllci5jb25zdHJhaW50c1tcInRyYWlsaW5nXCJdID0gZXhwb3J0cy5wdChAc3VwZXJMYXllci5oZWlnaHQgLSBsYXllci5tYXhYKVxuXHRpZiB0eXBlID09IFwidG9wRWRnZXNcIlxuXHRcdGxheWVyLnkgPSBkZWNsYXJlZENvbnN0cmFpbnQueVxuXHRcdGxheWVyLmNvbnN0cmFpbnRzW1widG9wXCJdID0gZXhwb3J0cy5wdChsYXllci55KVxuXHRpZiB0eXBlID09IFwiYm90dG9tRWRnZXNcIlxuXHRcdGxheWVyLm1heFkgPSBkZWNsYXJlZENvbnN0cmFpbnQubWF4WVxuXHRcdGxheWVyLmNvbnN0cmFpbnRzW1wiYm90dG9tXCJdID0gZXhwb3J0cy5wdChAc3VwZXJMYXllci5oZWlnaHQgLSBsYXllci5tYXhZKVxuXHRpZiB0eXBlID09IFwiYWxpZ25cIlxuXHRcdGlmIGRlY2xhcmVkQ29uc3RyYWludCA9PSBcImhvcml6b250YWxcIlxuXHRcdFx0bGF5ZXIuY2VudGVyWCgpXG5cdFx0aWYgZGVjbGFyZWRDb25zdHJhaW50ID09IFwidmVydGljYWxcIlxuXHRcdFx0bGF5ZXIuY2VudGVyWSgpXG5cdFx0aWYgZGVjbGFyZWRDb25zdHJhaW50ID09IFwiY2VudGVyXCJcblx0XHRcdGxheWVyLmNlbnRlcigpXG5cdFx0aWYgZGVjbGFyZWRDb25zdHJhaW50ID09IFwidmVydGljYWxcIlxuXHRcdFx0bGF5ZXIuY2VudGVyWSgpXG5cbiNTaXplIENvbnN0cmFpbnRzXG5sYXlvdXRTaXplID0gKGxheWVyLCB0eXBlKSAtPlxuXHRpZiBsYXllci5jb25zdHJhaW50c1t0eXBlXVxuXHRcdGxheWVyW3R5cGVdID0gZXhwb3J0cy5weChsYXllci5jb25zdHJhaW50c1t0eXBlXSlcblx0XHRpZiBsYXllci50eXBlID09IFwidGV4dFwiXG5cdFx0XHR0ZXh0RnJhbWUgPSB0ZXh0QXV0b1NpemUobGF5ZXIpXG5cdFx0XHRsYXllci53aWR0aCA9IHRleHRGcmFtZS53aWR0aFxuXHRcdFx0bGF5ZXIuaGVpZ2h0ID0gdGV4dEZyYW1lLmhlaWdodFxuXG4jTW92ZSAmIFJlc2l6ZXMgTGF5ZXJzXG5sYXlvdXRDaGFuZ2UgPSAobGF5ZXIsIHR5cGUpIC0+XG5cdGlmIGxheWVyLmNvbnN0cmFpbnRzW3R5cGVdICE9IHVuZGVmaW5lZCBcblx0XHRwcm9wID0gZGVmYXVsdHMuY29uc3RyYWludHNbdHlwZV0ucHJvcFxuXHRcdG9ialByb3AgPSBkZWZhdWx0cy5jb25zdHJhaW50c1t0eXBlXS5vYmpQcm9wXG5cdFx0b3BwID0gZGVmYXVsdHMuY29uc3RyYWludHNbdHlwZV0ub3BwXG5cdFx0c3VwZXJUcmFpdCA9IGRlZmF1bHRzLmNvbnN0cmFpbnRzW3R5cGVdLm9ialByb3BcblxuXHRcdGlmIG9ialByb3AgIT0gXCJ3aWR0aFwiICYmIG9ialByb3AgIT0gXCJoZWlnaHRcIlxuXHRcdFx0c3VwZXJUcmFpdCA9IGRlZmF1bHRzLmNvbnN0cmFpbnRzW3R5cGVdLm9ialByb3AyXG5cblx0XHRpZiBsYXllci5zdXBlckxheWVyICE9IG51bGxcblx0XHRcdCNIYXMgYSBzdXBlckxheWVyXG5cdFx0XHRAW3N1cGVyVHJhaXRdID0gbGF5ZXIuc3VwZXJMYXllcltzdXBlclRyYWl0XVxuXHRcdGVsc2Vcblx0XHRcdCNEb2VzIG5vdCBoYXZlIGEgc3VwZXJMYXllclxuXHRcdFx0QFtzdXBlclRyYWl0XSA9IGV4cG9ydHNbc3VwZXJUcmFpdF1cblx0XHRpZiB0eXBlID09IFwidG9wXCIgfHwgdHlwZSA9PSBcImxlYWRpbmdcIlxuXHRcdFx0IyBIYW5kbGUgVG9wICYgTGVhZGluZ1xuXHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHNbdHlwZV0gPT0gcGFyc2VJbnQobGF5ZXIuY29uc3RyYWludHNbdHlwZV0sIDEwKVxuXHRcdFx0XHRsYXllcltwcm9wXSA9IGxheWVyLmNvbnN0cmFpbnRzW3R5cGVdICogZXhwb3J0cy5zY2FsZVxuXHRcdFx0ZWxzZSBcblx0XHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHNbdHlwZV0ubGVuZ3RoID09IHVuZGVmaW5lZFxuXHRcdFx0XHRcdGxheWVyW3Byb3BdID0gbGF5ZXIuY29uc3RyYWludHNbdHlwZV1bb2JqUHJvcF1cblx0XHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHNbdHlwZV0ubGVuZ3RoID09IDFcblx0XHRcdFx0XHRpZiBsYXllci5jb25zdHJhaW50c1t0eXBlXVswXSA9PSBwYXJzZUludChsYXllci5jb25zdHJhaW50c1t0eXBlXVswXSwgMTApXG5cdFx0XHRcdFx0XHRsYXllcltwcm9wXSA9IGxheWVyLmNvbnN0cmFpbnRzW3R5cGVdWzBdICogZXhwb3J0cy5zY2FsZVxuXHRcdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRcdGxheWVyW3Byb3BdID0gbGF5ZXIuY29uc3RyYWludHNbdHlwZV1bMF1bb2JqUHJvcF1cblx0XHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHNbdHlwZV0ubGVuZ3RoID4gMSBcblx0XHRcdFx0XHRmb3Igb2JqZWN0IGluIGxheWVyLmNvbnN0cmFpbnRzW3R5cGVdXG5cdFx0XHRcdFx0XHRpZiBvYmplY3QgPT0gcGFyc2VJbnQob2JqZWN0LCAxMClcblx0XHRcdFx0XHRcdFx0QC5vYmpJbnQgPSBvYmplY3Rcblx0XHRcdFx0XHRcdGVsc2UgXG5cdFx0XHRcdFx0XHRcdEAub2JqTGF5ZXIgPSBvYmplY3Rcblx0XHRcdFx0XHRsYXllcltwcm9wXSA9IChALm9iakludCAqIGV4cG9ydHMuc2NhbGUpICsgQC5vYmpMYXllcltvYmpQcm9wXVxuXHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHNbb3BwXSAhPSB1bmRlZmluZWRcblx0XHRcdFx0dHJhaXQgPSBkZWZhdWx0cy5jb25zdHJhaW50c1tvcHBdW1wib2JqUHJvcFwiXVxuXHRcdFx0XHRpZiBsYXllci5jb25zdHJhaW50c1tvcHBdID09IHBhcnNlSW50KGxheWVyLmNvbnN0cmFpbnRzW29wcF0sIDEwKVxuXHRcdFx0XHRcdGxheWVyW3RyYWl0XSA9IEBbc3VwZXJUcmFpdF0gLSAobGF5ZXJbcHJvcF0gKyAoZXhwb3J0cy5zY2FsZSAqIGxheWVyLmNvbnN0cmFpbnRzW29wcF0pKVxuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHNbb3BwXS5sZW5ndGggPT0gdW5kZWZpbmVkXG5cdFx0XHRcdFx0XHRsYXllclt0cmFpdF0gPSBsYXllcltwcm9wXSAtIGxheWVyLmNvbnN0cmFpbnRzW29wcF1bcHJvcF1cblx0XHRcdFx0XHRcdGlmIGxheWVyW3RyYWl0XSA8IDBcblx0XHRcdFx0XHRcdFx0bGF5ZXJbdHJhaXRdID0gbGF5ZXJbdHJhaXRdICogLTFcblx0XHRlbHNlXG5cdFx0XHQjIyBIYW5kbGUgQm90dG9tICYgVHJhaWxpbmdcblx0XHRcdG9ialByb3AyID0gZGVmYXVsdHMuY29uc3RyYWludHNbdHlwZV0ub2JqUHJvcDJcblx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzW29wcF0gPT0gdW5kZWZpbmVkXG5cdFx0XHRcdCMjIE5vIG9wcG9zaXRlXG5cdFx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzW3R5cGVdID09IHBhcnNlSW50KGxheWVyLmNvbnN0cmFpbnRzW3R5cGVdLCAxMClcblx0XHRcdFx0XHQjIyBPbmx5IEludGVnZXJcblx0XHRcdFx0XHRsYXllcltwcm9wXSA9IEBbc3VwZXJUcmFpdF0gLSAobGF5ZXIuY29uc3RyYWludHNbdHlwZV0gKiBleHBvcnRzLnNjYWxlKVxuXHRcdFx0XHRlbHNlIFxuXHRcdFx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzW3R5cGVdLmxlbmd0aCA9PSB1bmRlZmluZWRcblx0XHRcdFx0XHRcdCNFbnRlcmVkIExheWVyXG5cdFx0XHRcdFx0XHRpZiBleHBvcnRzLnNhbWVQYXJlbnQobGF5ZXIsIGxheWVyLmNvbnN0cmFpbnRzW3R5cGVdKVxuXHRcdFx0XHRcdFx0XHRsYXllcltwcm9wXSA9IGxheWVyLmNvbnN0cmFpbnRzW3R5cGVdW29ialByb3AyXVxuXHRcdFx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdFx0XHRlcnJvcihsYXllciwgMSlcblx0XHRcdFx0XHRpZiBsYXllci5jb25zdHJhaW50c1t0eXBlXS5sZW5ndGggPT0gMVxuXHRcdFx0XHRcdFx0I0FycmF5IG9mIE9uZVxuXHRcdFx0XHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHNbdHlwZV1bMF0gPT0gcGFyc2VJbnQobGF5ZXIuY29uc3RyYWludHNbdHlwZV1bMF0sIDEwKVxuXHRcdFx0XHRcdFx0XHQjSW50XG5cdFx0XHRcdFx0XHRcdGxheWVyW3Byb3BdID0gQFtvYmpQcm9wXSAtIChsYXllci5jb25zdHJhaW50c1t0eXBlXVswXSAqIGV4cG9ydHMuc2NhbGUpXG5cdFx0XHRcdFx0XHRlbHNlIFxuXHRcdFx0XHRcdFx0XHQjT2JqZWN0XG5cdFx0XHRcdFx0XHRcdGlmIGV4cG9ydHMuc2FtZVBhcmVudChsYXllciwgbGF5ZXIuY29uc3RyYWludHNbdHlwZV1bMF0pXG5cdFx0XHRcdFx0XHRcdFx0bGF5ZXJbcHJvcF0gPSBsYXllci5jb25zdHJhaW50c1t0eXBlXVswXVtvYmpQcm9wMl1cblx0XHRcdFx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdFx0XHRcdGVycm9yKGxheWVyLCAxKVxuXHRcdFx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzW3R5cGVdLmxlbmd0aCA+IDFcdFxuXHRcdFx0XHRcdFx0I1JlbGF0aW9uc2hpcCBBcnJheVxuXHRcdFx0XHRcdFx0Zm9yIG9iamVjdCBpbiBsYXllci5jb25zdHJhaW50c1t0eXBlXVxuXHRcdFx0XHRcdFx0XHRpZiBvYmplY3QgPT0gcGFyc2VJbnQob2JqZWN0LCAxMClcblx0XHRcdFx0XHRcdFx0XHRALm9iakludCA9IG9iamVjdFxuXHRcdFx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHRcdFx0QC5vYmpMYXllciA9IG9iamVjdFxuXHRcdFx0XHRcdFx0XHRsYXllcltwcm9wXSA9IEAub2JqTGF5ZXJbb2JqUHJvcDJdIC0gZXhwb3J0cy5zY2FsZSAqIEAub2JqSW50XG5cbiNUZXh0IExheWVyc1xuZXhwb3J0cy5zdHlsZXMgPSB7fVxuXG4jIyBDdXN0b20gU3R5bGVzXG5cbmV4cG9ydHMuYWRkU3R5bGUgPSAoYXJyYXkpIC0+XG5cdGtleSA9IE9iamVjdC5rZXlzKGFycmF5KVswXVxuXHRleHBvcnRzLnN0eWxlc1trZXldID0gYXJyYXlba2V5XVxuXG5leHBvcnRzLmFwcGx5ID0gKGxheWVyLCBzdHlsZSkgLT5cblx0c3R5bGUgPSBleHBvcnRzLnN0eWxlc1tzdHlsZV1cblx0cHJvcHMgPSBPYmplY3Qua2V5cyhzdHlsZSlcblx0ZnJhbWVyUHJvcHMgPSBbXCJuYW1lXCIsIFwid2lkdGhcIiwgXCJoZWlnaHRcIiwgXCJzdXBlckxheWVyXCIsIFwib3BhY2l0eVwiLCBcImNvbG9yXCIsIFwiYmFja2dyb3VuZENvbG9yXCIsIFwieFwiLCBcInlcIiwgXCJtaWRYXCIsIFwibWlkWVwiLCBcIm1heFhcIiwgXCJtaW5YXCIsIFwidmlzaWJsZVwiLCBcImNsaXBcIiwgXCJzY3JvbGxIb3Jpem9udGFsXCIsIFwic2Nyb2xsVmVydGljYWxcIiwgXCJpZ25vcmVFdmVudHNcIiwgXCJ6XCIsIFwic2NhbGVYXCIsIFwic2NhbGVZXCIsIFwic2NhbGVaXCIsIFwic2NhbGVcIiwgXCJza2V3WFwiLCBcInNrZXdZXCIsIFwic2tld1wiLCBcIm9yaWdpblhcIiwgXCJvcmlnaW5ZXCIsIFwib3JpZ2luWlwiLCBcInBlcnNwZWN0aXZlXCIsIFwicGVyc3BlY3RpdmVPcmlnaW5YXCIsIFwicGVyc3BlY3RpdmVPcmlnaW5ZXCIsIFwicm90YXRpb25YXCIsIFwicm90YXRpb25ZXCIsIFwicm90YXRpb25aXCIsIFwicm90YXRpb25cIiwgXCJibHVyXCIsIFwiYnJpZ2h0bmVzc1wiLCBcInNhdHVyYXRlXCIsIFwiaHVlUm90YXRlXCIsIFwiY29udHJhc3RcIiwgXCJpbnZlcnRcIiwgXCJncmF5c2NhbGVcIiwgXCJzZXBpYVwiLCBcInNoYWRvd1hcIiwgXCJzaGFkb3dZXCIsIFwic2hhZG93Qmx1clwiLCBcInNoYWRvd1NwcmVhZFwiLCBcInNoYWRvd0NvbG9yXCIsIFwiYm9yZGVyQ29sb3JcIiwgXCJib3JkZXJXaWR0aFwiLCBcImZvcmNlMmRcIiwgXCJmbGF0XCIsIFwiYmFja2ZhY2VWaXNpYmxlXCIsIFwibmFtZVwiLCBcIm1hdHJpeFwiLCBcIl9tYXRyaXgyZFwiLCBcInRyYW5zZm9ybU1hdHJpeFwiLCBcIm1hdHJpeDNkXCIsIFwiYm9yZGVyUmFkaXVzXCIsIFwicG9pbnRcIiwgXCJzaXplXCIsIFwiZnJhbWVcIiwgXCJodG1sXCIsIFwiaW1hZ2VcIiwgXCJzY3JvbGxYXCIsIFwic2Nyb2xsWVwiLCBcIl9kb21FdmVudE1hbmFnZXJcIiwgXCJtb3VzZVdoZWVsU3BlZWRNdWx0aXBsaWVyXCIsIFwidmVsb2NpdHlUaHJlc2hvbGRcIiwgXCJhbmltYXRpb25PcHRpb25zXCIsIFwiY29uc3RyYWluZWRcIl1cblx0Y3NzUHJvcHMgPSBbXCJmb250RmFtaWx5XCIsIFwiZm9udFNpemVcIiwgXCJ0ZXh0QWxpZ25cIiwgXCJmb250V2VpZ2h0XCIsIFwibGluZUhlaWdodFwiLCBcInRleHRUcmFuc2Zvcm1cIl1cblx0Zm9yIHAgaW4gcHJvcHNcblx0XHRpZiBmcmFtZXJQcm9wcy5pbmRleE9mKHApICE9IC0xIFxuXHRcdFx0aWYgc3R5bGVbcF0gPT0gcGFyc2VJbnQoc3R5bGVbcF0sIDEwKVxuXHRcdFx0XHRsYXllcltwXSA9IGV4cG9ydHMucHgoc3R5bGVbcF0pXG5cdFx0XHRlbHNlIFxuXHRcdFx0XHRsYXllcltwXSA9IHN0eWxlW3BdXG5cdFx0aWYgY3NzUHJvcHMuaW5kZXhPZihwKSAhPSAtMSBcblx0XHRcdGlmIHAgPT0gXCJmb250U2l6ZVwiXG5cdFx0XHRcdGxheWVyLnN0eWxlW1wiZm9udC1zaXplXCJdID0gZXhwb3J0cy5weChzdHlsZVtwXSkgKyBcInB4XCJcblx0XHRcdGlmIHAgPT0gXCJmb250RmFtaWx5XCJcblx0XHRcdFx0bGF5ZXIuc3R5bGVbXCJmb250LWZhbWlseVwiXSA9IHN0eWxlW3BdXG5cdFx0XHRpZiBwID09IFwidGV4dEFsaWduXCJcblx0XHRcdFx0bGF5ZXIuc3R5bGVbXCJ0ZXh0LWFsaWduXCJdID0gc3R5bGVbcF1cblx0XHRcdGlmIHAgPT0gXCJ0ZXh0VHJhbnNmb3JtXCJcblx0XHRcdFx0bGF5ZXIuc3R5bGVbXCJ0ZXh0LXRyYW5zZm9ybVwiXSA9IHN0eWxlW3BdXG5cdFx0XHRpZiBwID09IFwiZm9udFdlaWdodFwiXG5cdFx0XHRcdGlmIHN0eWxlW3BdID09IHBhcnNlSW50KHN0eWxlW3BdLCAxMClcblx0XHRcdFx0XHRsYXllci5zdHlsZVtcImZvbnQtd2VpZ2h0XCJdID0gc3R5bGVbcF1cblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdHN3aXRjaCBzdHlsZVtwXVxuXHRcdFx0XHRcdFx0d2hlbiBcInVsdHJhdGhpblwiIHRoZW4gbGF5ZXIuc3R5bGVbXCJmb250LXdlaWdodFwiXSA9IDEwMFxuXHRcdFx0XHRcdFx0d2hlbiBcInRoaW5cIiB0aGVuIGxheWVyLnN0eWxlW1wiZm9udC13ZWlnaHRcIl0gPSAyMDBcblx0XHRcdFx0XHRcdHdoZW4gXCJsaWdodFwiIHRoZW4gbGF5ZXIuc3R5bGVbXCJmb250LXdlaWdodFwiXSA9IDMwMFxuXHRcdFx0XHRcdFx0d2hlbiBcInJlZ3VsYXJcIiB0aGVuIGxheWVyLnN0eWxlW1wiZm9udC13ZWlnaHRcIl0gPSA0MDBcblx0XHRcdFx0XHRcdHdoZW4gXCJtZWRpdW1cIiB0aGVuIGxheWVyLnN0eWxlW1wiZm9udC13ZWlnaHRcIl0gPSA1MDBcblx0XHRcdFx0XHRcdHdoZW4gXCJzZW1pYm9sZFwiIHRoZW4gbGF5ZXIuc3R5bGVbXCJmb250LXdlaWdodFwiXSA9IDYwMFxuXHRcdFx0XHRcdFx0d2hlbiBcImJvbGRcIiB0aGVuIGxheWVyLnN0eWxlW1wiZm9udC13ZWlnaHRcIl0gPSA3MDBcblx0XHRcdFx0XHRcdHdoZW4gXCJibGFja1wiIHRoZW4gbGF5ZXIuc3R5bGVbXCJmb250LXdlaWdodFwiXSA9IDgwMFxuXHRcdFx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdFx0XHRlcnJvcihwLCA0KVxuXHRcdFx0aWYgcCA9PSBcImxpbmVIZWlnaHRcIlxuXHRcdFx0XHRpZiBzdHlsZVtwXSA9PSBcImF1dG9cIlxuXHRcdFx0XHRcdGxheWVyLnN0eWxlW1wibGluZS1oZWlnaHRcIl0gPSBleHBvcnRzLnB4KHN0eWxlW1wiZm9udFNpemVcIl0pICogMS4yICsgXCJweFwiXG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRsYXllci5zdHlsZVtcImxpbmUtaGVpZ2h0XCJdID0gZXhwb3J0cy5weChzdHlsZVtwXSkgKyBcInB4XCJcblxuZXhwb3J0cy5iZ0JsdXIgPSAobGF5ZXIpIC0+XG5cdGxheWVyLnN0eWxlW1wiLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXJcIl0gPSBcImJsdXIoI3tleHBvcnRzLnB4KDUpfXB4KVwiXG5cdHJldHVybiBsYXllciBcblxuZXhwb3J0cy5DdXN0b20gPSAoc3R5bGUsIGFycmF5KSAtPlxuXHRsYXllciA9IG5ldyBMYXllciBcblx0aXNTdHlsZVZhbGlkID0gZXhwb3J0cy5zdHlsZXNbc3R5bGVdXG5cdGlmIGlzU3R5bGVWYWxpZCA9PSB1bmRlZmluZWRcblx0XHRpZiBhcnJheSAhPSB1bmRlZmluZWRcblx0XHRcdGV4cG9ydHMuYWRkU3R5bGVcblx0XHRcdFx0XCIje3N0eWxlfVwiIDpcblx0XHRcdFx0XHRhcnJheVxuXHRcdGVsc2Vcblx0XHRcdGV4cG9ydHMuYWRkU3R5bGVcblx0XHRcdFx0XCIje3N0eWxlfVwiIDpcblx0XHRcdFx0XHR3aWR0aCA6IDEwMFxuXHRleHBvcnRzLmFwcGx5KGxheWVyLCBzdHlsZSlcblx0aWYgYXJyYXkgIT0gdW5kZWZpbmVkICYmIGlzU3R5bGVWYWxpZCAhPSB1bmRlZmluZWRcblx0XHRzdHlsZU51bSA9IFwiY29weVwiXG5cdFx0bmV3U3R5bGVOYW1lID0gc3R5bGUgKyBcIiBcIiArIHN0eWxlTnVtXG5cdFx0ZXhwb3J0cy5hZGRTdHlsZVxuXHRcdFx0XCIje25ld1N0eWxlTmFtZX1cIiA6IFxuXHRcdFx0XHRhcnJheVxuXHRcdGV4cG9ydHMuYXBwbHkobGF5ZXIsIG5ld1N0eWxlTmFtZSlcblx0cmV0dXJuIGxheWVyIFxuXG5tYWtlU3R5bGVDaGFuZ2UgPSAobGF5ZXIsIHN0eWxlLCBjaGFuZ2UpIC0+XG5cdGlmIGRlZmF1bHRzLmNzc1Byb3BzLmluZGV4T2Yoc3R5bGUpICE9IC0xXG5cdFx0aWYgc3R5bGUgPT0gXCJmb250U2l6ZVwiXG5cdFx0XHRsYXllci5zdHlsZVtcImZvbnQtc2l6ZVwiXSA9IGV4cG9ydHMucHgoY2hhbmdlKSArIFwicHhcIlxuXHRpZiBkZWZhdWx0cy5mcmFtZXJQcm9wcy5pbmRleE9mKHN0eWxlKSAhPSAtMVxuXHRcdGxheWVyW3N0eWxlXSA9IGNoYW5nZVxuIFxuXG50ZXh0QXV0b1NpemUgPSAodGV4dExheWVyKSAtPlxuXHQjRGVmaW5lIFdpZHRoXG5cdGNvbnN0cmFpbnRzID0ge31cblx0aWYgdGV4dExheWVyLmNvbnN0cmFpbnRzIFxuXHRcdGlmIHRleHRMYXllci5jb25zdHJhaW50cy5oZWlnaHRcblx0XHRcdGNvbnN0cmFpbnRzLmhlaWdodCA9IGV4cG9ydHMucHgodGV4dExheWVyLmNvbnN0cmFpbnRzLmhlaWdodClcblx0XHRpZiB0ZXh0TGF5ZXIuY29uc3RyYWludHMud2lkdGhcblx0XHRcdGNvbnN0cmFpbnRzLndpZHRoID0gZXhwb3J0cy5weCh0ZXh0TGF5ZXIuY29uc3RyYWludHMud2lkdGgpXG5cdHN0eWxlcyA9XG5cdFx0Zm9udFNpemU6IHRleHRMYXllci5zdHlsZVtcImZvbnQtc2l6ZVwiXVxuXHRcdGZvbnRGYW1pbHk6IHRleHRMYXllci5zdHlsZVtcImZvbnQtZmFtaWx5XCJdXG5cdFx0Zm9udFdlaWdodDogdGV4dExheWVyLnN0eWxlW1wiZm9udC13ZWlnaHRcIl1cblx0XHRsaW5lSGVpZ2h0OiB0ZXh0TGF5ZXIuc3R5bGVbXCJsaW5lLWhlaWdodFwiXVxuXHRcdGxldHRlclNwYWNpbmc6IHRleHRMYXllci5zdHlsZVtcImxldHRlci1zcGFjaW5nXCJdXG5cdFx0dGV4dFRyYW5zZm9ybTogdGV4dExheWVyLnN0eWxlW1widGV4dC10cmFuc2Zvcm1cIl1cblx0dGV4dFdpZHRoID0gVXRpbHMudGV4dFNpemUgdGV4dExheWVyLmh0bWwsIHN0eWxlcywgY29uc3RyYWludHNcblx0cmV0dXJuIHtcblx0XHR3aWR0aCA6IHRleHRXaWR0aC53aWR0aFxuXHRcdGhlaWdodDogdGV4dFdpZHRoLmhlaWdodFxuXHR9XG5cbmV4cG9ydHMuVGV4dCA9IChhcnJheSkgLT5cblx0aWYgYXJyYXkgPT0gdW5kZWZpbmVkXG5cdFx0YXJyYXkgPSBbXVxuXHRleGNlcHRpb25zID0gT2JqZWN0LmtleXMoYXJyYXkpXG5cdHN0eWxlQXJyYXkgPSB7fVxuXHRmb3IgaSBpbiBkZWZhdWx0cy50ZXh0LnByb3BzXG5cdFx0aWYgYXJyYXlbaV0gIT0gdW5kZWZpbmVkXG5cdFx0XHRAW2ldID0gYXJyYXlbaV1cblx0XHRlbHNlXG5cdFx0XHRAW2ldID0gZGVmYXVsdHMudGV4dC5kZWZhdWx0c1tpXVxuXHRcdGlmIGkgIT0gXCJzdHlsZVwiXG5cdFx0XHRzdHlsZUFycmF5W2ldID0gQFtpXVxuXHR0ZXh0TGF5ZXIgPSBuZXcgTGF5ZXJcblx0dGV4dExheWVyLnR5cGUgPSBcInRleHRcIlxuXHR0ZXh0TGF5ZXIuaHRtbCA9IEB0ZXh0XG5cdHRleHRTdHlsZSA9IFxuXHRcdFwiI3tALnN0eWxlfVwiIDogXG5cdFx0XHRzdHlsZUFycmF5XG5cdGlmIGV4cG9ydHMuc3R5bGVzW0Auc3R5bGVdID09IHVuZGVmaW5lZFxuXHRcdGV4cG9ydHMuYWRkU3R5bGUgdGV4dFN0eWxlXG5cdFx0ZXhwb3J0cy5hcHBseSh0ZXh0TGF5ZXIsIEBzdHlsZSlcblx0ZWxzZVxuXHRcdGV4cG9ydHMuYXBwbHkodGV4dExheWVyLCBAc3R5bGUpXG5cdFx0Zm9yIGNoYW5nZSBpbiBleGNlcHRpb25zXG5cdFx0XHRpZiBjaGFuZ2UgIT0gXCJzdHlsZVwiXG5cdFx0XHRcdG1ha2VTdHlsZUNoYW5nZSh0ZXh0TGF5ZXIsIGNoYW5nZSwgYXJyYXlbY2hhbmdlXSlcdFx0XG5cdHRleHRGcmFtZSA9IHRleHRBdXRvU2l6ZSh0ZXh0TGF5ZXIpXG5cdHRleHRMYXllci5wcm9wcyA9IChoZWlnaHQ6dGV4dEZyYW1lLmhlaWdodCwgd2lkdGg6dGV4dEZyYW1lLndpZHRoKVxuXHRyZXR1cm4gdGV4dExheWVyXG5cbmV4cG9ydHMudXBkYXRlID0gKGxheWVyLCBhcnJheSkgLT5cblx0aWYgYXJyYXkgPT0gdW5kZWZpbmVkXG5cdFx0YXJyYXkgPSBbXVxuXHRpZiBsYXllci50eXBlID09IFwidGV4dFwiXG5cdFx0Zm9yIGNoYW5nZSBpbiBhcnJheVxuXHRcdFx0a2V5ID0gT2JqZWN0LmtleXMoY2hhbmdlKVswXVxuXHRcdFx0dmFsdWUgPSBjaGFuZ2Vba2V5XVxuXHRcdFx0aWYga2V5ID09IFwidGV4dFwiXG5cdFx0XHRcdGxheWVyLmh0bWwgPSB2YWx1ZVxuXHRcdFx0XHR0ZXh0RnJhbWUgPSB0ZXh0QXV0b1NpemUobGF5ZXIpXG5cdFx0XHRcdGxheWVyLndpZHRoID0gdGV4dEZyYW1lLndpZHRoXG5cdFx0XHRcdGxheWVyLmhlaWdodCA9IHRleHRGcmFtZS5oZWlnaHRcblx0ZXhwb3J0cy5sYXlvdXQoKVxuXG5leHBvcnRzLnRpbWVEZWxlZ2F0ZSA9IChsYXllciwgY2xvY2tUeXBlKSAtPlxuXHRAdGltZSA9IGV4cG9ydHMuZ2V0VGltZSgpXG5cdFV0aWxzLmRlbGF5IDYwIC0gQHRpbWUuc2VjcywgLT5cblx0XHRAdGltZSA9IGV4cG9ydHMuZ2V0VGltZSgpXG5cdFx0ZXhwb3J0cy51cGRhdGUobGF5ZXIsIFt0ZXh0OmV4cG9ydHMudGltZUZvcm1hdHRlcihAdGltZSwgY2xvY2tUeXBlKV0pXG5cdFx0VXRpbHMuaW50ZXJ2YWwgNjAsIC0+XG5cdFx0XHRAdGltZSA9IGV4cG9ydHMuZ2V0VGltZSgpXG5cdFx0XHRleHBvcnRzLnVwZGF0ZShsYXllciwgW3RleHQ6ZXhwb3J0cy50aW1lRm9ybWF0dGVyKEB0aW1lLCBjbG9ja1R5cGUpXSlcbiBcbmV4cG9ydHMudGltZUZvcm1hdHRlciA9ICh0aW1lT2JqLCBjbG9ja1R5cGUpIC0+XG5cdGlmIGNsb2NrVHlwZSA9PSBmYWxzZSBcblx0XHRpZiB0aW1lT2JqLmhvdXJzID4gMTJcblx0XHRcdHRpbWVPYmouaG91cnMgPSB0aW1lT2JqLmhvdXJzIC0gMTJcblx0aWYgdGltZU9iai5taW5zIDwgMTBcblx0XHR0aW1lT2JqLm1pbnMgPSBcIjBcIiArIHRpbWVPYmoubWluc1xuXHRyZXR1cm4gdGltZU9iai5ob3VycyArIFwiOlwiICsgdGltZU9iai5taW5zXG5cbiMjIENvbXBvbmVudHMgXG5leHBvcnRzLkFsZXJ0ID0gKGFycmF5KSAtPlxuXHRpZiBhcnJheSA9PSB1bmRlZmluZWRcblx0XHRhcnJheSA9IFtdXG5cdGZvciBpIGluIGRlZmF1bHRzLmFsZXJ0LnByb3BzXG5cdFx0aWYgYXJyYXlbaV0gIT0gdW5kZWZpbmVkXG5cdFx0XHRAW2ldID0gYXJyYXlbaV1cblx0XHRlbHNlXG5cdFx0XHRAW2ldID0gZGVmYXVsdHMuYWxlcnQudGV4dFtpXVxuXHRhbGwgPSBuZXcgTGF5ZXIgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIiwgbmFtZTpcImFsZXJ0IGFsbFwiXG5cdGFsbC5jb25zdHJhaW50cyA9IFxuXHRcdGxlYWRpbmc6MFxuXHRcdHRyYWlsaW5nOjBcblx0XHR0b3A6MFxuXHRcdGJvdHRvbTowXG5cdG92ZXJsYXkgPSBuZXcgTGF5ZXIgYmFja2dyb3VuZENvbG9yOlwiYmxhY2tcIiwgb3BhY2l0eTouMywgc3VwZXJMYXllcjphbGwsIG5hbWU6XCJvdmVybGF5XCJcblx0b3ZlcmxheS5jb25zdHJhaW50cyA9XG5cdFx0bGVhZGluZzowXG5cdFx0dHJhaWxpbmc6MFxuXHRcdHRvcDowXG5cdFx0Ym90dG9tOjBcblx0YWxlcnRCRyA9IG5ldyBMYXllciBiYWNrZ3JvdW5kQ29sb3I6XCJ3aGl0ZVwiLCBzdXBlckxheWVyOmFsbCwgYm9yZGVyUmFkaXVzOmV4cG9ydHMucHgoMTApLCBuYW1lOlwiYWxlcnQgYmdcIiwgeDo5MiwgeTo1Mzdcblx0YWxlcnRCRy5jb25zdHJhaW50cyA9XG5cdFx0YWxpZ246XCJjZW50ZXJcIlxuXHRcdHdpZHRoOjI4MFxuXHRcdGhlaWdodDo0MDBcblx0dGl0bGUgPSBuZXcgZXhwb3J0cy5UZXh0IHN0eWxlOlwiYWxlcnRUaXRsZVwiLCBzdXBlckxheWVyOmFsZXJ0QkcsIHRleHQ6QHRpdGxlLCBmb250V2VpZ2h0OlwibWVkaXVtXCIsICBuYW1lOlwidGl0bGVcIlxuXHR0aXRsZS5jb25zdHJhaW50cyA9IFxuXHRcdGFsaWduOlwiaG9yaXpvbnRhbFwiXG5cdFx0dG9wOjIwXG5cdG1lc3NhZ2UgPSBuZXcgZXhwb3J0cy5UZXh0IHN0eWxlOlwiYWxlcnRNZXNzYWdlXCIsIHRleHQ6QG1lc3NhZ2UsIGZvbnRTaXplOjEzLCBzdXBlckxheWVyOmFsZXJ0QkcsIHRleHRBbGlnbjpcImNlbnRlclwiLCBsaW5lSGVpZ2h0OjE2LCB3aWR0aDoyNDAsIG5hbWU6XCJtZXNzYWdlXCJcblx0bWVzc2FnZS5jb25zdHJhaW50cyA9XG5cdFx0dG9wOiBbdGl0bGUsIDEwXVxuXHRcdGFsaWduOlwiaG9yaXpvbnRhbFwiXG5cdFx0d2lkdGg6IDIyMFxuXHRkaXZpZGVyID0gbmV3IExheWVyIHN1cGVyTGF5ZXI6YWxlcnRCRywgYmFja2dyb3VuZENvbG9yOlwiI0UyRThFQlwiLCBuYW1lOlwiaG9yaXpvbnRhbCBkaXZpZGVyXCJcblx0ZGl2aWRlci5jb25zdHJhaW50cyA9IFxuXHRcdGxlYWRpbmc6MFxuXHRcdHRyYWlsaW5nOjBcblx0XHRoZWlnaHQ6MVxuXHRcdGJvdHRvbTo0NFxuXHRleHBvcnRzLmxheW91dCgpXG5cdGFjdGlvbkJ1dHRvbiA9IG5ldyBleHBvcnRzLlRleHQgc3R5bGU6XCJhbGVydEFjdGlvblwiLCBjb2xvcjpcIiMwMDc2RkZcIiwgc3VwZXJMYXllcjphbGVydEJHLCB0ZXh0OkBhY3Rpb24sIG5hbWU6XCJhY3Rpb25cIlxuXHRzZWNvbmRhcnlBY3Rpb25CdXR0b24gPSBuZXcgZXhwb3J0cy5UZXh0IHN0eWxlOlwiYWxlcnRBY3Rpb25cIiwgdGV4dDpAc2Vjb25kYXJ5QWN0aW9uLCBuYW1lOlwic2Vjb25kYXJ5QWN0aW9uXCJcblx0YWxlcnRCRy5jb25zdHJhaW50c1tcImhlaWdodFwiXSA9IDIwICsgZXhwb3J0cy5wdCh0aXRsZS5oZWlnaHQpICsgMTAgKyBleHBvcnRzLnB0KG1lc3NhZ2UuaGVpZ2h0KSArIDY0IFxuXHRleHBvcnRzLmxheW91dCgpXG5cdGlmIEBhY3Rpb24gIT0gXCJBY3Rpb25cIiAmJiBAc2Vjb25kYXJ5QWN0aW9uID09IFwic2Vjb25kYXJ5QWN0aW9uXCJcblx0XHRhY3Rpb25CdXR0b24uY29uc3RyYWludHMgPSBcblx0XHRcdGFsaWduOlwiaG9yaXpvbnRhbFwiXG5cdFx0XHRib3R0b206MTZcblx0XHRib3ggPSBuZXcgTGF5ZXIgc3VwZXJMYXllcjphbGVydEJHLCBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiXG5cdFx0Ym94LmNvbnN0cmFpbnRzID0gXG5cdFx0XHRsZWFkaW5nOjBcblx0XHRcdHRyYWlsaW5nOjBcblx0XHRcdGJvdHRvbTowXG5cdFx0XHRoZWlnaHQ6NDRcblx0XHRzZWNvbmRhcnlBY3Rpb25CdXR0b24udmlzaWJsZSA9IGZhbHNlXG5cdFx0ZXhwb3J0cy5sYXlvdXQoKVxuXHRcdHJldHVybiB7XG5cdFx0XHRhbGwgOiBhbGxcblx0XHRcdG92ZXJsYXkgOiBvdmVybGF5XG5cdFx0XHRhY3Rpb246IGJveFxuXHRcdFx0dGl0bGU6IHRpdGxlXG5cdFx0XHRtZXNzYWdlOiBtZXNzYWdlXG5cdFx0fVxuXHRlbHNlXG5cdFx0bGVmdEJveCA9IG5ldyBMYXllciB3aWR0aDphbGVydEJHLndpZHRoLzIsIHN1cGVyTGF5ZXI6YWxlcnRCRywgbmFtZTpAc2Vjb25kYXJ5QWN0aW9uICsgXCIgYm94XCIsIGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCJcblx0XHRyaWdodEJveCA9IG5ldyBMYXllciB3aWR0aDphbGVydEJHLndpZHRoLzIsIHN1cGVyTGF5ZXI6YWxlcnRCRywgbmFtZTpAYWN0aW9uICsgXCIgYm94XCIsIGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCJcblx0XHRkaXZpZGVyVmVydGljYWwgPSBuZXcgTGF5ZXIgc3VwZXJMYXllcjphbGVydEJHLCBiYWNrZ3JvdW5kQ29sb3I6XCIjRTJFOEVCXCJcblx0XHRkaXZpZGVyVmVydGljYWwuY29uc3RyYWludHMgPSBcblx0XHRcdHdpZHRoOjFcblx0XHRcdGhlaWdodDo0NFxuXHRcdFx0Ym90dG9tOjBcblx0XHRcdGFsaWduOlwiaG9yaXpvbnRhbFwiXG5cdFx0bGVmdEJveC5jb25zdHJhaW50cyA9XG5cdFx0XHRoZWlnaHQ6NDRcblx0XHRcdGJvdHRvbTowXG5cdFx0XHRsZWFkaW5nOjBcblx0XHRyaWdodEJveC5jb25zdHJhaW50cyA9XG5cdFx0XHRoZWlnaHQ6NDRcblx0XHRcdGJvdHRvbTowXG5cdFx0XHR0cmFpbGluZzowXG5cdFx0bGVmdEJveC5hZGRTdWJMYXllcihzZWNvbmRhcnlBY3Rpb25CdXR0b24pXG5cdFx0cmlnaHRCb3guYWRkU3ViTGF5ZXIoYWN0aW9uQnV0dG9uKVxuXHRcdGV4cG9ydHMubGF5b3V0KClcblx0XHRhY3Rpb25CdXR0b24uY29uc3RyYWludHMgPSBcblx0XHRcdGFsaWduOlwiaG9yaXpvbnRhbFwiXG5cdFx0XHRib3R0b206MTRcblx0XHRzZWNvbmRhcnlBY3Rpb25CdXR0b24uY29uc3RyYWludHMgPVxuXHRcdFx0YWxpZ246XCJob3Jpem9udGFsXCJcblx0XHRcdGJvdHRvbToxNFxuXHRcdGV4cG9ydHMubGF5b3V0KClcblx0XHRyZXR1cm4ge1xuXHRcdFx0YWxsIDogYWxsXG5cdFx0XHRvdmVybGF5IDogb3ZlcmxheVxuXHRcdFx0YWN0aW9uOiByaWdodEJveFxuXHRcdFx0c2Vjb25kYXJ5QWN0aW9uIDogbGVmdEJveFxuXHRcdFx0dGl0bGU6IHRpdGxlXG5cdFx0XHRtZXNzYWdlOiBtZXNzYWdlXG5cdFx0fVxuXG5leHBvcnRzLkJhbm5lciA9IChhcnJheSkgLT5cblx0aWYgYXJyYXkgPT0gdW5kZWZpbmVkXG5cdFx0YXJyYXkgPSBbXVxuXHRmb3IgaSBpbiBkZWZhdWx0cy5iYW5uZXIucHJvcHNcblx0XHRpZiBhcnJheVtpXSAhPSB1bmRlZmluZWRcblx0XHRcdEBbaV0gPSBhcnJheVtpXVxuXHRcdGVsc2Vcblx0XHRcdEBbaV0gPSBkZWZhdWx0cy5iYW5uZXIudGV4dFtpXVxuXHRiYW5uZXJCRyA9IG5ldyBMYXllciBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiLCBuYW1lOlwiYmFubmVyIGFsbFwiXG5cdGlmIGV4cG9ydHMuZGV2aWNlID09IFwiaXBob25lLTZzXCJcblx0XHRiYW5uZXJCRy5odG1sID0gXCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0XHRcdDxzdmcgd2lkdGg9JyN7ZXhwb3J0cy53aWR0aH1weCcgaGVpZ2h0PScje2V4cG9ydHMucHgoNjgpfXB4JyB2aWV3Qm94PScwIDAgMzc1IDY4JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnPlxuXHRcdFx0ICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy42ICgyNjMwNCkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdFx0XHQgICAgPHRpdGxlPk5vdGlmaWNhdGlvbiBiYWNrZ3JvdW5kPC90aXRsZT5cblx0XHRcdCAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHRcdCAgICA8ZGVmcz48L2RlZnM+XG5cdFx0XHQgICAgPGcgaWQ9J1BhZ2UtMScgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCcgZmlsbC1vcGFjaXR5PScwLjk1Jz5cblx0XHRcdCAgICAgICAgPGcgaWQ9J2lPUzgtUHVzaC1Ob3RpZmljYXRpb24nIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC01OC4wMDAwMDAsIC0yMy4wMDAwMDApJyBmaWxsPScjMUExQTFDJz5cblx0XHRcdCAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDU4LjAwMDAwMCwgNy4wMDAwMDApJyBpZD0nTm90aWZpY2F0aW9uLWNvbnRhaW5lcic+XG5cdFx0XHQgICAgICAgICAgICAgICAgPGc+XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9J00wLDE2IEwzNzUsMTYgTDM3NSw4NCBMMCw4NCBMMCwxNiBaIE0xNjksNzcuMDA0ODgxNSBDMTY5LDc1Ljg5NzYxNiAxNjkuODk2Mjc5LDc1IDE3MS4wMDI0LDc1IEwyMDMuOTk3Niw3NSBDMjA1LjEwMzQ5NSw3NSAyMDYsNzUuODkzODk5OCAyMDYsNzcuMDA0ODgxNSBMMjA2LDc3Ljk5NTExODUgQzIwNiw3OS4xMDIzODQgMjA1LjEwMzcyMSw4MCAyMDMuOTk3Niw4MCBMMTcxLjAwMjQsODAgQzE2OS44OTY1MDUsODAgMTY5LDc5LjEwNjEwMDIgMTY5LDc3Ljk5NTExODUgTDE2OSw3Ny4wMDQ4ODE1IFonIGlkPSdOb3RpZmljYXRpb24tYmFja2dyb3VuZCc+PC9wYXRoPlxuXHRcdFx0ICAgICAgICAgICAgICAgIDwvZz5cblx0XHRcdCAgICAgICAgICAgIDwvZz5cblx0XHRcdCAgICAgICAgPC9nPlxuXHRcdFx0ICAgIDwvZz5cblx0XHRcdDwvc3ZnPlwiXG5cdGlmIGV4cG9ydHMuZGV2aWNlID09IFwiaXBob25lLTZzLXBsdXNcIlxuXHRcdGJhbm5lckJHLmh0bWwgPSBcIlxuXHRcdDw/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyc/PlxuXHRcdFx0PHN2ZyB3aWR0aD0nI3tleHBvcnRzLndpZHRofXB4JyBoZWlnaHQ9JyN7ZXhwb3J0cy5weCg2OCl9cHgnIHZpZXdCb3g9JzAgMCA0MTQgNjgnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayc+XG5cdFx0ICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy42ICgyNjMwNCkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdFx0ICAgIDx0aXRsZT5Ob3RpZmljYXRpb24gYmFja2dyb3VuZCBDb3B5PC90aXRsZT5cblx0XHQgICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0ICAgIDxkZWZzPjwvZGVmcz5cblx0XHQgICAgPGcgaWQ9J1BhZ2UtMScgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCcgZmlsbC1vcGFjaXR5PScwLjk1Jz5cblx0XHQgICAgICAgIDxnIGlkPSdpT1M4LVB1c2gtTm90aWZpY2F0aW9uJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtNDMuMDAwMDAwLCAtNzQuMDAwMDAwKScgZmlsbD0nIzFBMUExQyc+XG5cdFx0ICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoNDMuMDAwMDAwLCA3NC4wMDAwMDApJyBpZD0nTm90aWZpY2F0aW9uLWNvbnRhaW5lcic+XG5cdFx0ICAgICAgICAgICAgICAgIDxnPlxuXHRcdCAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0nTTAsMCBMNDE0LDAgTDQxNCw2OCBMMCw2OCBMMCwwIFogTTE4OSw2MS4wMDQ4ODE1IEMxODksNTkuODk3NjE2IDE4OS44OTYyNzksNTkgMTkxLjAwMjQsNTkgTDIyMy45OTc2LDU5IEMyMjUuMTAzNDk1LDU5IDIyNiw1OS44OTM4OTk4IDIyNiw2MS4wMDQ4ODE1IEwyMjYsNjEuOTk1MTE4NSBDMjI2LDYzLjEwMjM4NCAyMjUuMTAzNzIxLDY0IDIyMy45OTc2LDY0IEwxOTEuMDAyNCw2NCBDMTg5Ljg5NjUwNSw2NCAxODksNjMuMTA2MTAwMiAxODksNjEuOTk1MTE4NSBMMTg5LDYxLjAwNDg4MTUgWicgaWQ9J05vdGlmaWNhdGlvbi1iYWNrZ3JvdW5kLUNvcHknPjwvcGF0aD5cblx0XHQgICAgICAgICAgICAgICAgPC9nPlxuXHRcdCAgICAgICAgICAgIDwvZz5cblx0XHQgICAgICAgIDwvZz5cblx0XHQgICAgPC9nPlxuXHRcdDwvc3ZnPlxuXHRcdFwiXG5cdGJhbm5lckJHLmNvbnN0cmFpbnRzID1cblx0XHRsZWFkaW5nOjBcblx0XHR0cmFpbGluZzowXG5cdFx0dG9wOjBcblx0XHRoZWlnaHQ6Njhcblx0aWNvbiA9IG5ldyBMYXllciBzdXBlckxheWVyOmJhbm5lckJHLCBuYW1lOlwiaWNvblwiLCBib3JkZXJSYWRpdXM6ZXhwb3J0cy5weCg0LjUpXG5cdGlmIEBpY29uID09IHVuZGVmaW5lZFxuXHRcdGljb24uc3R5bGVbXCJiYWNrZ3JvdW5kXCJdID0gXCJsaW5lYXItZ3JhZGllbnQoLTE4MGRlZywgIzY3RkY4MSAwJSwgIzAxQjQxRiAxMDAlKVwiXG5cdGljb24uY29uc3RyYWludHMgPVxuXHRcdGhlaWdodDoyMFxuXHRcdHdpZHRoOjIwXG5cdFx0bGVhZGluZzoxNVxuXHRcdHRvcDo4XG5cdHRpdGxlID0gbmV3IGV4cG9ydHMuVGV4dCBzdHlsZTpcImJhbm5lclRpdGxlXCIsIHRleHQ6QHRpdGxlLCBjb2xvcjpcIndoaXRlXCIsIGZvbnRXZWlnaHQ6XCJtZWRpdW1cIiwgZm9udFNpemU6MTMsIHN1cGVyTGF5ZXI6YmFubmVyQkcsIG5hbWU6XCJ0aXRsZVwiXG5cdHRpdGxlLmNvbnN0cmFpbnRzID0gXG5cdFx0dG9wOjVcblx0XHRsZWFkaW5nOltpY29uLCAxMV1cblx0bWVzc2FnZSA9IG5ldyBleHBvcnRzLlRleHQgc3R5bGU6XCJiYW5uZXJNZXNzYWdlXCIsIHRleHQ6QG1lc3NhZ2UsIGNvbG9yOlwid2hpdGVcIiwgZm9udFNpemU6MTMsIHN1cGVyTGF5ZXI6YmFubmVyQkcsIG5hbWU6XCJtZXNzYWdlXCJcblx0bWVzc2FnZS5jb25zdHJhaW50cyA9XG5cdFx0bGVhZGluZ0VkZ2VzOnRpdGxlXG5cdFx0dG9wOlt0aXRsZSwgMl1cblx0dGltZSA9IG5ldyBleHBvcnRzLlRleHQgc3R5bGU6XCJiYW5uZXJUaW1lXCIsIHRleHQ6QHRpbWUsIGNvbG9yOlwid2hpdGVcIiwgZm9udFNpemU6MTEsIHN1cGVyTGF5ZXI6YmFubmVyQkcsIG5hbWU6XCJ0aW1lXCJcblx0dGltZS5jb25zdHJhaW50cyA9XG5cdFx0bGVhZGluZzpbdGl0bGUsIDVdXG5cdFx0Ym90dG9tRWRnZXM6IHRpdGxlXG5cblx0ZXhwb3J0cy5sYXlvdXQoKVxuXHRyZXR1cm4ge1xuXHRcdGFsbCA6IGJhbm5lckJHXG5cdFx0aWNvbjppY29uXG5cdFx0dGl0bGU6dGl0bGVcblx0XHRtZXNzYWdlOm1lc3NhZ2Vcblx0fVxuXG5leHBvcnRzLkJ1dHRvbiA9IChhcnJheSkgLT5cblx0c2V0dXAgPSBzZXR1cENvbXBvbmVudChcImJ1dHRvblwiLCBhcnJheSlcblx0YnV0dG9uID0gbmV3IExheWVyIG5hbWU6c2V0dXAubmFtZVxuXHRjb2xvciA9IFwiXCJcblx0aWYgc2V0dXAuc3VwZXJMYXllciBcblx0XHRzZXR1cC5zdXBlckxheWVyLmFkZFN1YkxheWVyKGJ1dHRvbilcblx0c3dpdGNoIHNldHVwLnR5cGVcblx0XHR3aGVuIFwiYmlnXCJcblx0XHRcdEBmb250U2l6ZSA9IDIwXG5cdFx0XHRAdG9wID0gMTZcblx0XHRcdEBmb250V2VpZ2h0ID0gXCJtZWRpdW1cIlxuXHRcdFx0YnV0dG9uLmNvbnN0cmFpbnRzID1cblx0XHRcdFx0bGVhZGluZzoxMFxuXHRcdFx0XHR0cmFpbGluZzoxMFxuXHRcdFx0XHRoZWlnaHQ6NTdcblx0XHRcdGJ1dHRvbi5ib3JkZXJSYWRpdXMgPSBleHBvcnRzLnB4KDEyLjUpXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3IgPSBcIlwiXG5cdFx0XHRzd2l0Y2ggc2V0dXAuc3R5bGVcblx0XHRcdFx0d2hlbiBcImxpZ2h0XCJcblx0XHRcdFx0XHRjb2xvciA9IFwiIzAwN0FGRlwiXG5cdFx0XHRcdFx0aWYgc2V0dXAuYmx1ciBcblx0XHRcdFx0XHRcdGJhY2tncm91bmRDb2xvciA9IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAuOSlcIlxuXHRcdFx0XHRcdFx0ZXhwb3J0cy5iZ0JsdXIoYnV0dG9uKVxuXHRcdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRcdGJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIlxuXG5cdFx0XHRcdHdoZW4gXCJkYXJrXCJcblx0XHRcdFx0XHRjb2xvciA9IFwiI0ZGRlwiXG5cdFx0XHRcdFx0aWYgc2V0dXAuYmx1clxuXHRcdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yID0gXCJyZ2JhKDQzLCA0MywgNDMsIC45KVwiXG5cdFx0XHRcdFx0XHRleHBvcnRzLmJnQmx1cihidXR0b24pXG5cdFx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yID0gXCIjMjgyODI4XCJcblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdGlmIHNldHVwLmJsdXIgXG5cdFx0XHRcdFx0XHRjb2xvciA9IHNldHVwLmNvbG9yXG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3IgPSBuZXcgQ29sb3Ioc2V0dXAuYmFja2dyb3VuZENvbG9yKVxuXHRcdFx0XHRcdFx0cmdiU3RyaW5nID0gYmFja2dyb3VuZENvbG9yLnRvUmdiU3RyaW5nKClcblx0XHRcdFx0XHRcdHJnYmFTdHJpbmcgPSByZ2JTdHJpbmcucmVwbGFjZShcIilcIiwgXCIsIC45KVwiKVxuXHRcdFx0XHRcdFx0cmdiYVN0cmluZyAgPSByZ2JhU3RyaW5nLnJlcGxhY2UoXCJyZ2JcIiwgXCJyZ2JhXCIpXG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3IgPSByZ2JhU3RyaW5nXG5cdFx0XHRcdFx0XHRleHBvcnRzLmJnQmx1cihidXR0b24pXG5cdFx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdFx0Y29sb3IgPSBzZXR1cC5jb2xvclxuXHRcdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yID0gbmV3IENvbG9yKHNldHVwLmJhY2tncm91bmRDb2xvcilcblxuXG5cdFx0XHRidXR0b24uYmFja2dyb3VuZENvbG9yID0gYmFja2dyb3VuZENvbG9yXG5cblx0XHRcdGJ1dHRvbi5vbiBFdmVudHMuVG91Y2hTdGFydCwgLT5cblx0XHRcdFx0bmV3Q29sb3IgPSBcIlwiXG5cdFx0XHRcdGlmIHNldHVwLnN0eWxlID09IFwiZGFya1wiXG5cdFx0XHRcdFx0bmV3Q29sb3IgPSBidXR0b24uYmFja2dyb3VuZENvbG9yLmxpZ2h0ZW4oMTApXG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRuZXdDb2xvciA9IGJ1dHRvbi5iYWNrZ3JvdW5kQ29sb3IuZGFya2VuKDEwKVxuXHRcdFx0XHRidXR0b24uYW5pbWF0ZSBcblx0XHRcdFx0XHRwcm9wZXJ0aWVzOihiYWNrZ3JvdW5kQ29sb3I6bmV3Q29sb3IpXG5cdFx0XHRcdFx0dGltZTouNVxuXHRcdFx0YnV0dG9uLm9uIEV2ZW50cy5Ub3VjaEVuZCwgLT5cblx0XHRcdFx0YnV0dG9uLmFuaW1hdGVcblx0XHRcdFx0XHRwcm9wZXJ0aWVzOihiYWNrZ3JvdW5kQ29sb3I6YmFja2dyb3VuZENvbG9yKVxuXHRcdFx0XHRcdHRpbWU6LjVcblxuXHRcdHdoZW4gXCJzbWFsbFwiXG5cdFx0XHRAZm9udFNpemUgPSAxNlxuXHRcdFx0QHRvcCA9IDRcblx0XHRcdGJ1dHRvbi5ib3JkZXJSYWRpdXMgPSBleHBvcnRzLnB4KDIuNSlcblx0XHRcdHN3aXRjaCBzZXR1cC5zdHlsZVxuXHRcdFx0XHR3aGVuIFwibGlnaHRcIlxuXHRcdFx0XHRcdGNvbG9yID0gXCIjMDA3QUZGXCJcblx0XHRcdFx0XHRidXR0b24uYm9yZGVyQ29sb3IgPSBcIiMwMDdBRkZcIlxuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0Y29sb3IgPSBzZXR1cC5jb2xvclxuXHRcdFx0XHRcdGJ1dHRvbi5ib3JkZXJDb2xvciA9IHNldHVwLmNvbG9yXG5cdFx0XHRidXR0b24uYmFja2dyb3VuZENvbG9yID0gXCJ0cmFuc3BhcmVudFwiXG5cdFx0XHRidXR0b24uYm9yZGVyV2lkdGggPSBleHBvcnRzLnB4KDEpXG5cblxuXHRcdGVsc2Vcblx0XHRcdGJ1dHRvbi5iYWNrZ3JvdW5kQ29sb3IgPSBcInRyYW5zcGFyZW50XCJcblx0XHRcdGNvbG9yID0gc2V0dXAuY29sb3Jcblx0XHRcdEBmb250U2l6ZSA9IHNldHVwLmZvbnRTaXplXG5cdFx0XHRAZm9udFdlaWdodCA9IHNldHVwLmZvbnRXZWlnaHRcblxuXHRcdFx0YnV0dG9uLm9uIEV2ZW50cy5Ub3VjaFN0YXJ0LCAtPlxuXHRcdFx0XHRuZXdDb2xvciA9IGJ1dHRvbi5zdWJMYXllcnNbMF0uY29sb3IubGlnaHRlbigzMClcblx0XHRcdFx0YnV0dG9uLnN1YkxheWVyc1swXS5hbmltYXRlIFxuXHRcdFx0XHRcdHByb3BlcnRpZXM6KGNvbG9yOm5ld0NvbG9yKVxuXHRcdFx0XHRcdHRpbWU6LjVcblx0XHRcdGJ1dHRvbi5vbiBFdmVudHMuVG91Y2hFbmQsIC0+XG5cdFx0XHRcdGJ1dHRvbi5zdWJMYXllcnNbMF0uYW5pbWF0ZVxuXHRcdFx0XHRcdHByb3BlcnRpZXM6KGNvbG9yOnNldHVwLmNvbG9yKVxuXHRcdFx0XHRcdHRpbWU6LjVcblxuXHR0ZXh0TGF5ZXIgPSBuZXcgZXhwb3J0cy5UZXh0IHN0eWxlOlwiYnV0dG9uI3tzZXR1cC50eXBlfSN7c2V0dXAuc3R5bGV9XCIsIHRleHQ6c2V0dXAudGV4dCwgY29sb3I6Y29sb3IsIHN1cGVyTGF5ZXI6YnV0dG9uLCBmb250U2l6ZTpAZm9udFNpemUsIGZvbnRXZWlnaHQ6QGZvbnRXZWlnaHRcblx0dGV4dExheWVyLmNvbnN0cmFpbnRzID1cblx0XHRhbGlnbjpcImhvcml6b250YWxcIlxuXHRcdHRvcDpAdG9wXG5cdHN3aXRjaCBzZXR1cC50eXBlIFxuXHRcdHdoZW4gXCJzbWFsbFwiXG5cdFx0XHRidXR0b24ucHJvcHMgPSAod2lkdGg6dGV4dExheWVyLndpZHRoICsgZXhwb3J0cy5weCg2MCksIGhlaWdodDogdGV4dExheWVyLmhlaWdodCArIGV4cG9ydHMucHgoMTApKVxuXHRcdFx0YnV0dG9uLm9uIEV2ZW50cy5Ub3VjaFN0YXJ0LCAtPlxuXHRcdFx0XHRidXR0b24uYW5pbWF0ZVxuXHRcdFx0XHRcdHByb3BlcnRpZXM6KGJhY2tncm91bmRDb2xvcjpjb2xvcilcblx0XHRcdFx0XHR0aW1lOi41XHRcblx0XHRcdFx0dGV4dExheWVyLmFuaW1hdGVcblx0XHRcdFx0XHRwcm9wZXJ0aWVzOihjb2xvcjpcIiNGRkZcIilcblx0XHRcdFx0XHR0aW1lOi41XG5cdFx0XHRidXR0b24ub24gRXZlbnRzLlRvdWNoRW5kLCAtPlxuXHRcdFx0XHRidXR0b24uYW5pbWF0ZVxuXHRcdFx0XHRcdHByb3BlcnRpZXM6KGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCIpXG5cdFx0XHRcdFx0dGltZTouNVx0XG5cdFx0XHRcdHRleHRMYXllci5hbmltYXRlXG5cdFx0XHRcdFx0cHJvcGVydGllczooY29sb3I6Y29sb3IpXG5cdFx0XHRcdFx0dGltZTouNVxuXHRcdGVsc2UgXG5cdFx0XHRidXR0b24ucHJvcHMgPSAod2lkdGg6dGV4dExheWVyLndpZHRoLCBoZWlnaHQ6dGV4dExheWVyLmhlaWdodClcblx0ZXhwb3J0cy5sYXlvdXQoKVxuXHRyZXR1cm4gYnV0dG9uXG5cbmV4cG9ydHMuTG9ja1NjcmVlbiA9IChhcnJheSkgLT5cblx0c3dpdGNoIGV4cG9ydHMuZGV2aWNlXG5cdFx0d2hlbiBcImlwaG9uZS02c1wiIFxuXHRcdFx0QHRpbWVGb250U2l6ZSA9IDg4XG5cdFx0XHRAZGF0ZUZvbnRTaXplID0gMTlcblx0XHR3aGVuIFwiaXBob25lLTZzLXBsdXNcIiBcblx0XHRcdEB0aW1lRm9udFNpemUgPSA4OFxuXHRcdFx0QGRhdGVGb250U2l6ZSA9IDE5XG5cdFx0d2hlbiBcImlwaG9uZS01XCIgXG5cdFx0XHRAdGltZUZvbnRTaXplID0gODBcblx0XHRcdEBkYXRlRm9udFNpemUgPSAxOVxuXHRcdHdoZW4gXCJpcGFkLW1pbmktNFwiXG5cdFx0XHRAdGltZUZvbnRTaXplID0gMTIwXG5cdFx0XHRAZGF0ZUZvbnRTaXplID0gMjRcblx0XHR3aGVuIFwiaXBhZC1haXItMlwiXG5cdFx0XHRAdGltZUZvbnRTaXplID0gMTIwXG5cdFx0XHRAZGF0ZUZvbnRTaXplID0gMjRcblx0XHR3aGVuIFwiaXBhZC1wcm9cIlxuXHRcdFx0QHRpbWVGb250U2l6ZSA9IDEyMFxuXHRcdFx0QGRhdGVGb250U2l6ZSA9IDI0XG5cdFx0ZWxzZSBcblx0XHRcdEB0aW1lRm9udFNpemUgPSA1MFxuXHRcdFx0QGRhdGVGb250U2l6ZSA9IDE5XG5cdHNldHVwID0gc2V0dXBDb21wb25lbnQoXCJsb2NrU2NyZWVuXCIsIGFycmF5KVxuXHRAdGltZSA9IGV4cG9ydHMuZ2V0VGltZSgpXG5cdEJHID0gbmV3IExheWVyIG5hbWU6XCJsb2NrU2NyZWVuIEJhY2tncm91bmRcIiwgd2lkdGg6ZXhwb3J0cy53aWR0aCwgaGVpZ2h0OmV4cG9ydHMuaGVpZ2h0XG5cdEJHLnR5cGUgPSBcImxvY2tTY3JlZW5cIlxuXHRCRy5zdHlsZVtcImJhY2tncm91bmRcIl0gPSBcImxpbmVhci1ncmFkaWVudCgtMTgwZGVnLCAjMDBDNEQwIDAlLCAjRjNEQUJDIDEwMCUpXCJcblx0aWYgc2V0dXAudGltZSA9PSBcImRlZmF1bHRcIlxuXHRcdEB0aW1lTGF5ZXIgPSBuZXcgZXhwb3J0cy5UZXh0IHN0eWxlOlwibG9ja1NjcmVlblRpbWVcIiwgdGV4dDpleHBvcnRzLnRpbWVGb3JtYXR0ZXIoQHRpbWUsIHNldHVwLmNsb2NrMjQpLCBmb250U2l6ZTpAdGltZUZvbnRTaXplLCBmb250V2VpZ2h0OlwidGhpblwiLCBjb2xvcjpcIndoaXRlXCIsIHN1cGVyTGF5ZXI6Qkdcblx0XHRleHBvcnRzLnRpbWVEZWxlZ2F0ZShAdGltZUxheWVyLCBzZXR1cC5jbG9jazI0KVxuXHRlbHNlICBcblx0XHRAdGltZUxheWVyID0gbmV3IGV4cG9ydHMuVGV4dCBzdHlsZTpcImxvY2tTY3JlZW5UaW1lXCIsIHRleHQ6c2V0dXAudGltZSwgZm9udFNpemU6QHRpbWVGb250U2l6ZSwgZm9udFdlaWdodDpcInRoaW5cIiwgY29sb3I6XCJ3aGl0ZVwiLCBzdXBlckxheWVyOkJHXG5cdEB0aW1lTGF5ZXIuY29uc3RyYWludHMgPSBcblx0XHRhbGlnbjpcImhvcml6b250YWxcIlxuXHRcdHRvcDo2MFxuXHRpZiBzZXR1cC5kYXRlID09IFwiZGVmYXVsdFwiXG5cdFx0QGRhdGVMYXllciA9IG5ldyBleHBvcnRzLlRleHQgc3R5bGU6XCJsb2NrU2NyZWVuRGF0ZVwiLCB0ZXh0OkB0aW1lLmRheSArIFwiLCBcIiArIEB0aW1lLm1vbnRoICsgXCIgXCIgKyBAdGltZS5kYXRlLCBmb250U2l6ZTpAZGF0ZUZvbnRTaXplLCBjb2xvcjpcIndoaXRlXCIsIHN1cGVyTGF5ZXI6Qkdcblx0ZWxzZVxuXHRcdEBkYXRlTGF5ZXIgPSBuZXcgZXhwb3J0cy5UZXh0IHN0eWxlOlwibG9ja1NjcmVlbkRhdGVcIiwgdGV4dDpzZXR1cC5kYXRlLCBmb250U2l6ZTpAZGF0ZUZvbnRTaXplLCBjb2xvcjpcIndoaXRlXCIsIHN1cGVyTGF5ZXI6Qkdcblx0QGRhdGVMYXllci5jb25zdHJhaW50cyA9XG5cdFx0aG9yaXpvbnRhbENlbnRlcjpAdGltZUxheWVyXG5cdFx0dG9wOltAdGltZUxheWVyXVxuXHRzbGlkZVRvVW5sb2NrID0gbmV3IGV4cG9ydHMuVGV4dCBzdHlsZTpcImxvY2tTY3JlZW5TbGlkZVwiLCB0ZXh0Olwic2xpZGUgdG8gdW5sb2NrXCIsIGZvbnRTaXplOjI0LCBmb250V2VpZ2h0OlwibWVkaXVtXCIsIG9wYWNpdHk6LjUsIHN1cGVyTGF5ZXI6Qkdcblx0c2xpZGVUb1VubG9jay5jb25zdHJhaW50cyA9IFxuXHRcdGFsaWduOlwiaG9yaXpvbnRhbFwiXG5cdFx0Ym90dG9tOjcwXG5cblx0YXJyb3cgPSBuZXcgTGF5ZXIgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIlxuXHRhcnJvdy5odG1sID0gXCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0XHQ8c3ZnIHdpZHRoPScje2V4cG9ydHMucHgoMTEpfXB4JyBoZWlnaHQ9JyN7ZXhwb3J0cy5weCgyNCl9cHgnIHZpZXdCb3g9JzAgMCAxMSAyNCcgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJz5cblx0XHQgICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjYuMSAoMjYzMTMpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdCAgICA8dGl0bGU+U2xpZGUgdG8gVW5sb2NrIEFycm93PC90aXRsZT5cblx0XHQgICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0ICAgIDxkZWZzPjwvZGVmcz5cblx0XHQgICAgPGcgaWQ9J1BhZ2UtMScgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCc+XG5cdFx0ICAgICAgICA8ZyBpZD0naVBob25lLTYvNlMtTG9jay1TY3JlZW4nIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC05Mi4wMDAwMDAsIC01OTcuMDAwMDAwKScgZmlsbD0nIzAwMDAwMCc+XG5cdFx0ICAgICAgICAgICAgPGcgaWQ9J1NsaWRlLXRvLVVubG9jaycgdHJhbnNmb3JtPSd0cmFuc2xhdGUoOTIuMDAwMDAwLCA1OTcuMDAwMDAwKSc+XG5cdFx0ICAgICAgICAgICAgICAgIDxwYXRoIGQ9J00xMC45ODc3MzI0LDEyLjAyNTc0MjIgTDIuMTk2MjkwNTgsMC43OTM5MDgyMDYgQzEuODUyNDA0MzgsMC4zNTM3NTM5NDkgMS4yMjMyMTcwOCwwLjI3NTY0MTAzMSAwLjc4ODAxMDc1NCwwLjYxNTY2MTQ3NSBDMC4zNDk3NzAyNTMsMC45NTgwNTI0NzkgMC4yNzc3MDM5MjIsMS41ODY3Njc3NiAwLjYyMDI2OTA3LDIuMDI1MjMxMTYgTDguNDMzNTI0NTUsMTIuMDI1NzQyMSBMMC42MjAyNjkwNywyMi4wMjYyNTMxIEMwLjI3NzcwMzkyMiwyMi40NjQ3MTY1IDAuMzQ5NzcwMjUzLDIzLjA5MzQzMTggMC43ODgwMTA3NTQsMjMuNDM1ODIyOCBDMS4yMjMyMTcwOCwyMy43NzU4NDMyIDEuODUyNDA0MzgsMjMuNjk3NzMwMyAyLjE5NjI5MDU4LDIzLjI1NzU3NiBMMTAuOTg3NzMyNCwxMi4wMjU3NDIyIFonIGlkPSdTbGlkZS10by1VbmxvY2stQXJyb3cnPjwvcGF0aD5cblx0XHQgICAgICAgICAgICA8L2c+XG5cdFx0ICAgICAgICA8L2c+XG5cdFx0ICAgIDwvZz5cblx0XHQ8L3N2Zz5cIlxuXHRhcnJvdy5jb25zdHJhaW50cyA9IFxuXHRcdGhlaWdodDoyNFxuXHRcdHdpZHRoOjExXG5cdFx0dmVydGljYWxDZW50ZXI6c2xpZGVUb1VubG9ja1xuXHRcdHRyYWlsaW5nOltzbGlkZVRvVW5sb2NrLCAxMl1cblx0ZXhwb3J0cy5sYXlvdXQoKVxuXHRyZXR1cm4gQkdcblxuZXhwb3J0cy5TdGF0dXNCYXIgPSAoYXJyYXkpIC0+XG5cdHNldHVwID0gc2V0dXBDb21wb25lbnQoXCJzdGF0dXNCYXJcIiwgYXJyYXkpXG5cdHN0YXR1c0JhckJHID0gbmV3IExheWVyIGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCIsIG5hbWU6XCJzdGF0dXNCYXIuYWxsXCJcblx0c3RhdHVzQmFyQkcudHlwZSA9IHNldHVwLnR5cGVcblx0c3RhdHVzQmFyQkcuY29uc3RyYWludHMgPSBcblx0XHRsZWFkaW5nOjBcblx0XHR0cmFpbGluZzowXG5cdFx0aGVpZ2h0OjIwXG5cdHN3aXRjaCBleHBvcnRzLmRldmljZVxuXHRcdHdoZW4gXCJpcGhvbmUtNnMtcGx1c1wiXG5cdFx0XHRAdG9wQ29uc3RyYWludCA9IDVcblx0XHRlbHNlXG5cdFx0XHRAdG9wQ29uc3RyYWludCA9IDNcblx0aWYgc2V0dXAuc3R5bGUgPT0gXCJsaWdodFwiXG5cdFx0QGNvbG9yID0gXCJ3aGl0ZVwiXG5cdGVsc2Vcblx0XHRAY29sb3IgPSBcImJsYWNrXCJcblx0Zm9yIGxheWVyIGluIEZyYW1lci5DdXJyZW50Q29udGV4dC5sYXllcnNcblx0XHRpZiBsYXllci50eXBlID09IFwibG9ja1NjcmVlblwiXG5cdFx0XHRAaXNMb2NrU2NyZWVuUHJlc2VudCA9IHRydWVcblx0aWYgQGlzTG9ja1NjcmVlblByZXNlbnRcblx0XHRncmlwcGVyID0gbmV3IExheWVyIHN1cGVyTGF5ZXI6c3RhdHVzQmFyQkcsIHdpZHRoOmV4cG9ydHMucHgoMzcpLCBoZWlnaHQ6ZXhwb3J0cy5weCg1KSwgbmFtZTpcImdyaXBwZXJcIiwgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIiwgb3BhY2l0eTouNSwgbmFtZTpcImdyaXBwZXJcIlxuXHRcdGdyaXBwZXIuaHRtbCA9IFwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdFx0XHQ8c3ZnIHdpZHRoPScje2V4cG9ydHMucHgoMzcpfXB4JyBoZWlnaHQ9JyN7ZXhwb3J0cy5weCg1KX1weCcgdmlld0JveD0nMCAwIDM3IDUnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayc+XG5cdFx0XHQgICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjYuMSAoMjYzMTMpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdFx0ICAgIDx0aXRsZT5HcmlwcGVyPC90aXRsZT5cblx0XHRcdCAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHRcdCAgICA8ZGVmcz48L2RlZnM+XG5cdFx0XHQgICAgPGcgaWQ9J1BhZ2UtMScgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCc+XG5cdFx0XHQgICAgICAgIDxnIGlkPSdLZXlib2FyZC9BdXRvLUNvbXBsZXRlLUJhci1DbG9zZWQnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC0xNjkuMDAwMDAwLCAtMi4wMDAwMDApJyBmaWxsPScjRkZGRkZGJz5cblx0XHRcdCAgICAgICAgICAgIDxyZWN0IGlkPSdHcmlwcGVyJyB4PScxNjkuNScgeT0nMi41JyB3aWR0aD0nMzYnIGhlaWdodD0nNCcgcng9JzIuNSc+PC9yZWN0PlxuXHRcdFx0ICAgICAgICA8L2c+XG5cdFx0XHQgICAgPC9nPlxuXHRcdFx0PC9zdmc+XCJcblx0XHRncmlwcGVyLmNvbnN0cmFpbnRzID0gXG5cdFx0XHRhbGlnbjpcImhvcml6b250YWxcIlxuXHRcdFx0dG9wOjJcblx0ZWxzZSBcblx0XHRAdGltZSA9IGV4cG9ydHMuZ2V0VGltZSgpXG5cdFx0aWYgc2V0dXAuY2xvY2syNCA9PSBmYWxzZVxuXHRcdFx0aWYgQHRpbWUuaG91cnMgPiAxMSBcblx0XHRcdFx0QHRpbWUuc3RhbXAgPSBcIlBNXCJcblx0XHRcdGVsc2Vcblx0XHRcdFx0QHRpbWUuc3RhbXAgPSBcIkFNXCJcblx0XHRlbHNlXG5cdFx0XHRAdGltZS5zdGFtcCA9IFwiXCJcblx0XHR0aW1lID0gbmV3IGV4cG9ydHMuVGV4dCBzdHlsZTpcInN0YXR1c0JhclRpbWVcIiwgdGV4dDpleHBvcnRzLnRpbWVGb3JtYXR0ZXIoQHRpbWUsIHNldHVwLmNsb2NrMjQpICsgXCIgXCIgKyBAdGltZS5zdGFtcCwgZm9udFNpemU6MTIsIGZvbnRXZWlnaHQ6XCJzZW1pYm9sZFwiLCBzdXBlckxheWVyOnN0YXR1c0JhckJHLCBjb2xvcjpAY29sb3IsIG5hbWU6XCJ0aW1lXCJcblx0XHR0aW1lLmNvbnN0cmFpbnRzID1cblx0XHRcdGFsaWduOlwiY2VudGVyXCJcblx0c2lnbmFsID0gW11cblx0aWYgc2V0dXAuc2lnbmFsIDwgMVxuXHRcdG5vTmV0d29yayA9IG5ldyBleHBvcnRzLlRleHQgc3VwZXJMYXllcjpzdGF0dXNCYXJCRywgZm9udFNpemU6MTIsIHRleHQ6XCJObyBOZXR3b3JrXCJcblx0XHRub05ldHdvcmsuY29uc3RyYWludHMgPVxuXHRcdFx0bGVhZGluZzo3XG5cdFx0XHR0b3A6M1xuXHRlbHNlXG5cdFx0Zm9yIGkgaW4gWzAuLi5zZXR1cC5zaWduYWxdXG5cdFx0XHRkb3QgPSBuZXcgTGF5ZXIgaGVpZ2h0OmV4cG9ydHMucHgoNS41KSwgd2lkdGg6ZXhwb3J0cy5weCg1LjUpLCBiYWNrZ3JvdW5kQ29sb3I6XCJibGFja1wiLCBzdXBlckxheWVyOnN0YXR1c0JhckJHLCBib3JkZXJSYWRpdXM6ZXhwb3J0cy5weCg1LjUpLzIsIGJhY2tncm91bmRDb2xvcjpAY29sb3IsIG5hbWU6XCJzaWduYWxbI3tpfV1cIlxuXHRcdFx0aWYgaSA9PSAwXG5cdFx0XHRcdGRvdC5jb25zdHJhaW50cyA9XG5cdFx0XHRcdFx0bGVhZGluZzo3XG5cdFx0XHRcdFx0dG9wOjdcdFxuXHRcdFx0ZWxzZVxuXHRcdFx0XHRkb3QuY29uc3RyYWludHMgPVxuXHRcdFx0XHRcdGxlYWRpbmc6W3NpZ25hbFtpIC0gMSBdLCAxXVxuXHRcdFx0XHRcdHRvcDo3XHRcdFx0XHRcdFxuXHRcdFx0c2lnbmFsLnB1c2ggZG90IFxuXHRcdFx0ZXhwb3J0cy5sYXlvdXQoKVxuXHRcdGlmIHNldHVwLnNpZ25hbCA8IDVcblx0XHRcdG5vbkRvdHMgPSA1IC0gc2V0dXAuc2lnbmFsXG5cdFx0XHRmb3IgaSBpbiBbMC4uLm5vbkRvdHNdXG5cdFx0XHRcdG5vbkRvdCA9IG5ldyBMYXllciBoZWlnaHQ6ZXhwb3J0cy5weCg1LjUpLCB3aWR0aDpleHBvcnRzLnB4KDUuNSksIHN1cGVyTGF5ZXI6c3RhdHVzQmFyQkcsIGJvcmRlclJhZGl1czpleHBvcnRzLnB4KDUuNSkvMiwgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIiwgbmFtZTpcInNpZ25hbFsje3NpZ25hbC5sZW5ndGh9XVwiXG5cdFx0XHRcdG5vbkRvdC5zdHlsZS5ib3JkZXIgPSBcIiN7ZXhwb3J0cy5weCgxKX1weCBzb2xpZCAje0Bjb2xvcn1cIlxuXHRcdFx0XHRub25Eb3QuY29uc3RyYWludHMgPVxuXHRcdFx0XHRcdGxlYWRpbmc6W3NpZ25hbFtzaWduYWwubGVuZ3RoIC0gMV0sIDFdXG5cdFx0XHRcdFx0dG9wOjdcblx0XHRcdFx0c2lnbmFsLnB1c2ggbm9uRG90XG5cdFx0XHRcdGV4cG9ydHMubGF5b3V0KClcdFxuXHRcdGNhcnJpZXIgPSBuZXcgZXhwb3J0cy5UZXh0IHN0eWxlOlwic3RhdHVzQmFyQ2FycmllclwiLCB0ZXh0OnNldHVwLmNhcnJpZXIsIHN1cGVyTGF5ZXI6c3RhdHVzQmFyQkcsIGZvbnRTaXplOjEyLCBjb2xvcjpAY29sb3IsIG5hbWU6XCJjYXJyaWVyXCIsIHRleHRUcmFuc2Zvcm06XCJjYXBpdGFsaXplXCJcblx0XHRjYXJyaWVyLmNvbnN0cmFpbnRzID0gXG5cdFx0XHRsZWFkaW5nOltzaWduYWxbc2lnbmFsLmxlbmd0aCAtIDFdLCA3XVxuXHRcdFx0dG9wOjNcblx0XHRleHBvcnRzLmxheW91dCgpXG5cdFx0aWYgc2V0dXAuY2FycmllclxuXHRcdFx0bmV0d29yayA9IG5ldyBleHBvcnRzLlRleHQgc3R5bGU6XCJzdGF0dXNCYXJOZXR3b3JrXCIsIHRleHQ6c2V0dXAubmV0d29yaywgc3VwZXJMYXllcjpzdGF0dXNCYXJCRywgZm9udFNpemU6MTIsIGNvbG9yOkBjb2xvciwgbmFtZTpcIm5ldHdvcmtcIiwgdGV4dFRyYW5zZm9ybTpcInVwcGVyY2FzZVwiXG5cdFx0XHRuZXR3b3JrLmNvbnN0cmFpbnRzID1cblx0XHRcdFx0bGVhZGluZzpbY2FycmllciwgNV1cblx0XHRcdFx0dG9wOjNcblx0XHRpZiBzZXR1cC5jYXJyaWVyID09IFwiXCIgfHwgc2V0dXAuY2FycmllciA9PSBcIndpZmlcIlxuXHRcdFx0bmV0d29yayA9IG5ldyBMYXllciB3aWR0aDpleHBvcnRzLnB4KDE0KSwgaGVpZ2h0OmV4cG9ydHMucHgoMTApLCBzdXBlckxheWVyOnN0YXR1c0JhckJHLCBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiLCBuYW1lOlwibmV0d29ya1wiXG5cdFx0XHRuZXR3b3JrLmh0bWwgPSBcIjw/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyc/PlxuXHRcdFx0XHQ8c3ZnIHdpZHRoPScje2V4cG9ydHMucHgoMTQpfXB4JyBoZWlnaHQ9JyN7ZXhwb3J0cy5weCgxMCl9cHgnIHZpZXdCb3g9JzAgMCAxNCAxMCcgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJz5cblx0XHRcdFx0ICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy42LjEgKDI2MzEzKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHRcdFx0ICAgIDx0aXRsZT5XaS1GaTwvdGl0bGU+XG5cdFx0XHRcdCAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHRcdFx0ICAgIDxkZWZzPjwvZGVmcz5cblx0XHRcdFx0ICAgIDxnIGlkPSdQYWdlLTEnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnPlxuXHRcdFx0XHQgICAgICAgIDxnIGlkPSdTdGF0dXMtQmFyL0JsYWNrL0NoYXJnaW5nJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtODcuMDAwMDAwLCAtNS4wMDAwMDApJyBmaWxsPScje0Bjb2xvcn0nPlxuXHRcdFx0XHQgICAgICAgICAgICA8cGF0aCBkPSdNOTYuMTQ0NDIwOCwxMi40Mzg1MDQzIEM5NS42MjYzNzQsMTEuODQ1NDQ1NiA5NC44NTIzNjE2LDExLjQ2ODkxMTkgOTMuOTg3NTYzLDExLjQ2ODkxMTkgQzkzLjEzOTAwNzMsMTEuNDY4OTExOSA5Mi4zNzc4NTk0LDExLjgzMTQzNDEgOTEuODYwMTY1MiwxMi40MDUzMTc3IEw5NC4wMjI1MzkxLDE0LjUgTDk2LjE0NDQyMDgsMTIuNDM4NTA0MyBaIE05OC4zMjM0OTY0LDEwLjMyMTQ0MjUgQzk3LjI0NDc3OTQsOS4xOTE3NDU2MyA5NS43MDE0Mzg3LDguNDg0NDU1OTYgOTMuOTg3NTYzLDguNDg0NDU1OTYgQzkyLjI4ODI3MjMsOC40ODQ0NTU5NiA5MC43NTY2MjY0LDkuMTc5NzU4OTMgODkuNjc5MjY5OCwxMC4yOTI2OTM2IEw5MC43NjkyOTg3LDExLjM0ODYgQzkxLjU2NzIwNSwxMC41MDUzNzA4IDkyLjcxMzY0OCw5Ljk3NjY4Mzk0IDkzLjk4NzU2Myw5Ljk3NjY4Mzk0IEM5NS4yNzY4ODM2LDkuOTc2NjgzOTQgOTYuNDM1NjMwNSwxMC41MTgyMzUgOTcuMjM0NjIxNSwxMS4zNzkzMjkzIEw5OC4zMjM0OTY0LDEwLjMyMTQ0MjUgTDk4LjMyMzQ5NjQsMTAuMzIxNDQyNSBaIE0xMDAuNSw4LjIwNjg3OTMzIEM5OC44NjI5NTc4LDYuNTM5NDM2NzIgOTYuNTUwNTY5OSw1LjUgOTMuOTg3NTYzLDUuNSBDOTEuNDM3NTEwMyw1LjUgODkuMTM1NTQ5Niw2LjUyODk1NjA1IDg3LjUsOC4xODE2NDQzMSBMODguNTg5NTU3OSw5LjIzNzA5NDQxIEM4OS45NDYwNzk4LDcuODU0MzE2NTUgOTEuODYyODkyMSw2Ljk5MjIyNzk4IDkzLjk4NzU2Myw2Ljk5MjIyNzk4IEM5Ni4xMjYwMDI2LDYuOTkyMjI3OTggOTguMDUzODgwOSw3Ljg2NTUyNjA5IDk5LjQxMTg2OTgsOS4yNjQwNDI3MiBMMTAwLjUsOC4yMDY4NzkzMyBaJyBpZD0nV2ktRmknPjwvcGF0aD5cblx0XHRcdFx0ICAgICAgICA8L2c+XG5cdFx0XHRcdCAgICA8L2c+XG5cdFx0XHRcdDwvc3ZnPlwiXG5cdFx0XHRuZXR3b3JrLmNvbnN0cmFpbnRzID0gXG5cdFx0XHRcdGxlYWRpbmc6W3NpZ25hbFtzaWduYWwubGVuZ3RoIC0gMV0sIDddXG5cdFx0XHRcdHRvcDpAdG9wQ29uc3RyYWludFxuXHRiYXR0ZXJ5SWNvbiA9IG5ldyBMYXllciB3aWR0aDpleHBvcnRzLnB4KDI1KSwgaGVpZ2h0OmV4cG9ydHMucHgoMTApLCBzdXBlckxheWVyOnN0YXR1c0JhckJHLCBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiLCBuYW1lOlwiYmF0dGVyeUljb25cIlxuXHRpZiBzZXR1cC5iYXR0ZXJ5ID4gNzAgXG5cdFx0YmF0dGVyeUljb24uaHRtbCA9IFwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdFx0XHQ8c3ZnIHdpZHRoPScje2V4cG9ydHMucHgoMjUpfXB4JyBoZWlnaHQ9JyN7ZXhwb3J0cy5weCgxMCl9cHgnIHZpZXdCb3g9JzAgMCAyNSAxMCcgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJz5cblx0XHRcdCAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNi4xICgyNjMxMykgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdFx0XHQgICAgPHRpdGxlPkJhdHRlcnk8L3RpdGxlPlxuXHRcdFx0ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdFx0ICAgIDxkZWZzPjwvZGVmcz5cblx0XHRcdCAgICA8ZyBpZD0nUGFnZS0xJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJz5cblx0XHRcdCAgICAgICAgPGcgaWQ9J1N0YXR1cy1CYXIvQmxhY2svMTAwJScgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTM0NS4wMDAwMDAsIC01LjAwMDAwMCknIGZpbGw9JyN7QGNvbG9yfSc+XG5cdFx0XHQgICAgICAgICAgICA8cGF0aCBkPSdNMzQ2LjQ5MzcxMyw1LjUgQzM0NS42Njg3NTgsNS41IDM0NSw2LjE2ODAyMTU1IDM0NSw3LjAwNTMwMzI0IEwzNDUsMTMuNDk0Njk2OCBDMzQ1LDE0LjMyNjA1MjggMzQ1LjY3MzM4LDE1IDM0Ni40OTM3MTMsMTUgTDM2Ni4wMDYyODcsMTUgQzM2Ni44MzEyNDIsMTUgMzY3LjUsMTQuMzMxOTc4NCAzNjcuNSwxMy40OTQ2OTY4IEwzNjcuNSw3LjAwNTMwMzI0IEMzNjcuNSw2LjE3Mzk0NzIyIDM2Ni44MjY2Miw1LjUgMzY2LjAwNjI4Nyw1LjUgTDM0Ni40OTM3MTMsNS41IFogTTM2OCw4LjUgTDM2OCwxMiBMMzY4Ljc1LDEyIEMzNjkuMTY0MjE0LDEyIDM2OS41LDExLjY2NDQwNTMgMzY5LjUsMTEuMjU3NzQgTDM2OS41LDkuMjQyMjU5OTggQzM2OS41LDguODMyMzIxMTEgMzY5LjE2NzEwMSw4LjUgMzY4Ljc1LDguNSBMMzY4LDguNSBaIE0zNDYuNTA4MTUyLDYgQzM0NS45NTEzNjUsNiAzNDUuNSw2LjQ1Njk5NjkyIDM0NS41LDcuMDA4NDQwNTUgTDM0NS41LDEzLjQ5MTU1OTQgQzM0NS41LDE0LjA0ODUwNTggMzQ1Ljk0OTA1OCwxNC41IDM0Ni41MDgxNTIsMTQuNSBMMzY1Ljk5MTg0OCwxNC41IEMzNjYuNTQ4NjM1LDE0LjUgMzY3LDE0LjA0MzAwMzEgMzY3LDEzLjQ5MTU1OTQgTDM2Nyw3LjAwODQ0MDU1IEMzNjcsNi40NTE0OTQyMiAzNjYuNTUwOTQyLDYgMzY1Ljk5MTg0OCw2IEwzNDYuNTA4MTUyLDYgWiBNMzQ2LjUwNjc0NCw2LjUgQzM0Ni4yMjY4NzcsNi41IDM0Niw2LjcxNjM3MjAxIDM0Niw2Ljk5MjA5NTk1IEwzNDYsMTMuNTA3OTA0MSBDMzQ2LDEzLjc3OTY4MTEgMzQ2LjIzMDIyNSwxNCAzNDYuNTA2NzQ0LDE0IEwzNjUuOTkzMjU2LDE0IEMzNjYuMjczMTIzLDE0IDM2Ni41LDEzLjc4MzYyOCAzNjYuNSwxMy41MDc5MDQxIEwzNjYuNSw2Ljk5MjA5NTk1IEMzNjYuNSw2LjcyMDMxODg2IDM2Ni4yNjk3NzUsNi41IDM2NS45OTMyNTYsNi41IEwzNDYuNTA2NzQ0LDYuNSBaJyBpZD0nQmF0dGVyeSc+PC9wYXRoPlxuXHRcdFx0ICAgICAgICA8L2c+XG5cdFx0XHQgICAgPC9nPlxuXHRcdFx0PC9zdmc+XCJcblx0aWYgc2V0dXAuYmF0dGVyeSA8PSA3MCAmJiBzZXR1cC5iYXR0ZXJ5ID4gMjBcblx0XHRiYXR0ZXJ5SWNvbi5odG1sID0gXCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0XHRcdDxzdmcgd2lkdGg9JyN7ZXhwb3J0cy5weCgyNSl9cHgnIGhlaWdodD0nI3tleHBvcnRzLnB4KDEwKX1weCcgdmlld0JveD0nMCAwIDI1IDEwJyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnPlxuXHRcdFx0ICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy42LjEgKDI2MzEzKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHRcdCAgICA8dGl0bGU+QmF0dGVyeTwvdGl0bGU+XG5cdFx0XHQgICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0XHQgICAgPGRlZnM+PC9kZWZzPlxuXHRcdFx0ICAgIDxnIGlkPSdQYWdlLTEnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnPlxuXHRcdFx0ICAgICAgICA8ZyBpZD0nU3RhdHVzLUJhci9XaGl0ZS8xMDAlJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtMzQ1LjAwMDAwMCwgLTUuMDAwMDAwKScgZmlsbD0nI3tAY29sb3J9Jz5cblx0XHRcdCAgICAgICAgICAgIDxwYXRoIGQ9J00zNDYuNDkzNzEzLDUuNSBDMzQ1LjY2ODc1OCw1LjUgMzQ1LDYuMTY4MDIxNTUgMzQ1LDcuMDA1MzAzMjQgTDM0NSwxMy40OTQ2OTY4IEMzNDUsMTQuMzI2MDUyOCAzNDUuNjczMzgsMTUgMzQ2LjQ5MzcxMywxNSBMMzY2LjAwNjI4NywxNSBDMzY2LjgzMTI0MiwxNSAzNjcuNSwxNC4zMzE5Nzg0IDM2Ny41LDEzLjQ5NDY5NjggTDM2Ny41LDcuMDA1MzAzMjQgQzM2Ny41LDYuMTczOTQ3MjIgMzY2LjgyNjYyLDUuNSAzNjYuMDA2Mjg3LDUuNSBMMzQ2LjQ5MzcxMyw1LjUgWiBNMzY4LDguNSBMMzY4LDEyIEwzNjguNzUsMTIgQzM2OS4xNjQyMTQsMTIgMzY5LjUsMTEuNjY0NDA1MyAzNjkuNSwxMS4yNTc3NCBMMzY5LjUsOS4yNDIyNTk5OCBDMzY5LjUsOC44MzIzMjExMSAzNjkuMTY3MTAxLDguNSAzNjguNzUsOC41IEwzNjgsOC41IFogTTM0Ni41MDgxNTIsNiBDMzQ1Ljk1MTM2NSw2IDM0NS41LDYuNDU2OTk2OTIgMzQ1LjUsNy4wMDg0NDA1NSBMMzQ1LjUsMTMuNDkxNTU5NCBDMzQ1LjUsMTQuMDQ4NTA1OCAzNDUuOTQ5MDU4LDE0LjUgMzQ2LjUwODE1MiwxNC41IEwzNjUuOTkxODQ4LDE0LjUgQzM2Ni41NDg2MzUsMTQuNSAzNjcsMTQuMDQzMDAzMSAzNjcsMTMuNDkxNTU5NCBMMzY3LDcuMDA4NDQwNTUgQzM2Nyw2LjQ1MTQ5NDIyIDM2Ni41NTA5NDIsNiAzNjUuOTkxODQ4LDYgTDM0Ni41MDgxNTIsNiBaIE0zNDYuNTAxMjMxLDYuNSBDMzQ2LjIyNDQwOSw2LjUgMzQ2LDYuNzE2MzcyMDEgMzQ2LDYuOTkyMDk1OTUgTDM0NiwxMy41MDc5MDQxIEMzNDYsMTMuNzc5NjgxMSAzNDYuMjI5NzUxLDE0IDM0Ni41MDEyMzEsMTQgTDM1Ni40OTg3NjksMTQgQzM1Ni43NzU1OTEsMTQgMzU3LDEzLjc4MzYyOCAzNTcsMTMuNTA3OTA0MSBMMzU3LDYuOTkyMDk1OTUgQzM1Nyw2LjcyMDMxODg2IDM1Ni43NzAyNDksNi41IDM1Ni40OTg3NjksNi41IEwzNDYuNTAxMjMxLDYuNSBaJyBpZD0nQmF0dGVyeSc+PC9wYXRoPlxuXHRcdFx0ICAgICAgICA8L2c+XG5cdFx0XHQgICAgPC9nPlxuXHRcdFx0PC9zdmc+XCJcblx0aWYgc2V0dXAuYmF0dGVyeSA8PSAyMFxuXHRcdGJhdHRlcnlJY29uLmh0bWwgPSBcIjw/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyc/PlxuXHRcdFx0PHN2ZyB3aWR0aD0nI3tleHBvcnRzLnB4KDI1KX1weCcgaGVpZ2h0PScje2V4cG9ydHMucHgoMTApfXB4JyB2aWV3Qm94PScwIDAgMjUgMTAnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayc+XG5cdFx0XHQgICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjYuMSAoMjYzMTMpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdFx0ICAgIDx0aXRsZT5CYXR0ZXJ5PC90aXRsZT5cblx0XHRcdCAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHRcdCAgICA8ZGVmcz48L2RlZnM+XG5cdFx0XHQgICAgPGcgaWQ9J1BhZ2UtMScgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCc+XG5cdFx0XHQgICAgICAgIDxnIGlkPSdTdGF0dXMtQmFyL1doaXRlLzEwMCUnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC0zNDUuMDAwMDAwLCAtNS4wMDAwMDApJyBmaWxsPScje0Bjb2xvcn0nPlxuXHRcdFx0ICAgICAgICAgICAgPHBhdGggZD0nTTM0Ni40OTM3MTMsNS41IEMzNDUuNjY4NzU4LDUuNSAzNDUsNi4xNjgwMjE1NSAzNDUsNy4wMDUzMDMyNCBMMzQ1LDEzLjQ5NDY5NjggQzM0NSwxNC4zMjYwNTI4IDM0NS42NzMzOCwxNSAzNDYuNDkzNzEzLDE1IEwzNjYuMDA2Mjg3LDE1IEMzNjYuODMxMjQyLDE1IDM2Ny41LDE0LjMzMTk3ODQgMzY3LjUsMTMuNDk0Njk2OCBMMzY3LjUsNy4wMDUzMDMyNCBDMzY3LjUsNi4xNzM5NDcyMiAzNjYuODI2NjIsNS41IDM2Ni4wMDYyODcsNS41IEwzNDYuNDkzNzEzLDUuNSBaIE0zNjgsOC41IEwzNjgsMTIgTDM2OC43NSwxMiBDMzY5LjE2NDIxNCwxMiAzNjkuNSwxMS42NjQ0MDUzIDM2OS41LDExLjI1Nzc0IEwzNjkuNSw5LjI0MjI1OTk4IEMzNjkuNSw4LjgzMjMyMTExIDM2OS4xNjcxMDEsOC41IDM2OC43NSw4LjUgTDM2OCw4LjUgWiBNMzQ2LjUwODE1Miw2IEMzNDUuOTUxMzY1LDYgMzQ1LjUsNi40NTY5OTY5MiAzNDUuNSw3LjAwODQ0MDU1IEwzNDUuNSwxMy40OTE1NTk0IEMzNDUuNSwxNC4wNDg1MDU4IDM0NS45NDkwNTgsMTQuNSAzNDYuNTA4MTUyLDE0LjUgTDM2NS45OTE4NDgsMTQuNSBDMzY2LjU0ODYzNSwxNC41IDM2NywxNC4wNDMwMDMxIDM2NywxMy40OTE1NTk0IEwzNjcsNy4wMDg0NDA1NSBDMzY3LDYuNDUxNDk0MjIgMzY2LjU1MDk0Miw2IDM2NS45OTE4NDgsNiBMMzQ2LjUwODE1Miw2IFogTTM0Ni40OTA0NzksNi41IEMzNDYuMjE5NTk1LDYuNSAzNDYsNi43MTYzNzIwMSAzNDYsNi45OTIwOTU5NSBMMzQ2LDEzLjUwNzkwNDEgQzM0NiwxMy43Nzk2ODExIDM0Ni4yMTUwNTcsMTQgMzQ2LjQ5MDQ3OSwxNCBMMzQ5LjUwOTUyMSwxNCBDMzQ5Ljc4MDQwNSwxNCAzNTAsMTMuNzgzNjI4IDM1MCwxMy41MDc5MDQxIEwzNTAsNi45OTIwOTU5NSBDMzUwLDYuNzIwMzE4ODYgMzQ5Ljc4NDk0Myw2LjUgMzQ5LjUwOTUyMSw2LjUgTDM0Ni40OTA0NzksNi41IFonIGlkPSdCYXR0ZXJ5Jz48L3BhdGg+XG5cdFx0XHQgICAgICAgIDwvZz5cblx0XHRcdCAgICA8L2c+XG5cdFx0XHQ8L3N2Zz5cIlxuXHRiYXR0ZXJ5SWNvbi5jb25zdHJhaW50cyA9XG5cdFx0dHJhaWxpbmcgOiA3XG5cdFx0dG9wOkB0b3BDb25zdHJhaW50XG5cdGJhdHRlcnlQZXJjZW50ID0gbmV3IGV4cG9ydHMuVGV4dCBzdHlsZTpcInN0YXR1c0JhckJhdHRlcnlQZXJjZW50XCIsIHRleHQ6c2V0dXAuYmF0dGVyeSArIFwiJVwiLCBzdXBlckxheWVyOnN0YXR1c0JhckJHLCBmb250U2l6ZToxMiwgY29sb3I6QGNvbG9yLCBuYW1lOlwiYmF0dGVyeVBlcmNlbnRcIlxuXHRiYXR0ZXJ5UGVyY2VudC5jb25zdHJhaW50cyA9IFxuXHRcdHRyYWlsaW5nOiBbYmF0dGVyeUljb24sIDNdXG5cdFx0dG9wOjNcblx0Ymx1ZXRvb3RoID0gbmV3IExheWVyIHdpZHRoOmV4cG9ydHMucHgoOCksIGhlaWdodDpleHBvcnRzLnB4KDE1KSwgc3VwZXJMYXllcjpzdGF0dXNCYXJCRywgb3BhY2l0eTouNSwgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIiwgbmFtZTpcImJsdWV0b290aFwiXG5cdGJsdWV0b290aC5odG1sID0gXCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0XHQ8c3ZnIHdpZHRoPScje2V4cG9ydHMucHgoOCl9cHgnIGhlaWdodD0nI3tleHBvcnRzLnB4KDE1KX1weCcgdmlld0JveD0nMCAwIDggMTUnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayc+XG5cdFx0ICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy42LjEgKDI2MzEzKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHQgICAgPHRpdGxlPkJsdWV0b290aDwvdGl0bGU+XG5cdFx0ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdCAgICA8ZGVmcz48L2RlZnM+XG5cdFx0ICAgIDxnIGlkPSdQYWdlLTEnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnPlxuXHRcdCAgICAgICAgPGcgaWQ9J1N0YXR1cy1JY29ucy0oV2hpdGUpJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtMTM3LjAwMDAwMCwgMC4wMDAwMDApJyBmaWxsPScje0Bjb2xvcn0nPlxuXHRcdCAgICAgICAgICAgIDxwYXRoIGQ9J00xNDAuNSwxNC41IEwxNDUsMTAuMjUgTDE0MS44LDcuNSBMMTQ1LDQuNzUgTDE0MC41LDAuNSBMMTQwLjUsNi4wNzE0Mjg1NyBMMTM3LjgsMy43NSBMMTM3LDQuNSBMMTQwLjI1ODMzMyw3LjM3NSBMMTM3LDEwLjI1IEwxMzcuOCwxMSBMMTQwLjUsOC42Nzg1NzE0MyBMMTQwLjUsMTQuNSBaIE0xNDEuNSwzIEwxNDMuMzY2NjY3LDQuNzUgTDE0MS41LDYuMjUgTDE0MS41LDMgWiBNMTQxLjUsOC41IEwxNDMuMzY2NjY3LDEwLjI1IEwxNDEuNSwxMiBMMTQxLjUsOC41IFonIGlkPSdCbHVldG9vdGgnPjwvcGF0aD5cblx0XHQgICAgICAgIDwvZz5cblx0XHQgICAgPC9nPlxuXHRcdDwvc3ZnPlwiXG5cdGJsdWV0b290aC5jb25zdHJhaW50cyA9IFxuXHRcdHRvcDogM1xuXHRcdHRyYWlsaW5nOiBbYmF0dGVyeVBlcmNlbnQsIDddXG5cdGV4cG9ydHMubGF5b3V0KClcblx0cmV0dXJuIHtcblx0XHRhbGw6c3RhdHVzQmFyQkdcblx0XHRiYXR0ZXJ5UGVyY2VudDpiYXR0ZXJ5UGVyY2VudFxuXHRcdGJhdHRlcnlJY29uOmJhdHRlcnlJY29uXG5cdFx0c2lnbmFsOiBzaWduYWxcblx0XHRjYXJyaWVyOmNhcnJpZXJcblx0XHRuZXR3b3JrOm5ldHdvcmtcblx0XHR0aW1lOnRpbWVcblx0XHRibHVldG9vdGg6Ymx1ZXRvb3RoXG5cdH1cblxuZXhwb3J0cy5LZXlib2FyZCA9IChhcnJheSkgLT5cblx0aWYgYXJyYXkgPT0gdW5kZWZpbmVkXG5cdFx0YXJyYXkgPSBbXVxuXHRmb3IgcHJvcCBpbiBkZWZhdWx0cy5rZXlib2FyZFByb3BzXG5cdFx0aWYgYXJyYXlbcHJvcF1cdFx0XHRcblx0XHRcdEBbcHJvcF0gPSBhcnJheVtwcm9wXVxuXHRcdGVsc2UgXG5cdFx0XHRAW3Byb3BdID0gZGVmYXVsdHMua2V5Ym9hcmRQcm9wc1twcm9wXVxuXHRib2FyZCA9IG5ldyBMYXllciBiYWNrZ3JvdW5kQ29sb3I6XCIjRDFENURBXCIsIG5hbWU6XCJrZXlib2FyZFwiXG5cdGJvYXJkLmNvbnN0cmFpbnRzID0gKGJvdHRvbTowLCBoZWlnaHQ6MjE2LCB0cmFpbGluZzowLCBsZWFkaW5nOjApXG5cdGV4cG9ydHMubGF5b3V0KClcblx0bGV0dGVyc0FycmF5ID0gW1wicVwiLCBcIndcIiwgXCJlXCIsIFwiclwiLCBcInRcIiwgXCJ5XCIsIFwidVwiLCBcImlcIiwgXCJvXCIsIFwicFwiLCBcImFcIiwgXCJzXCIsIFwiZFwiLCBcImZcIiwgXCJnXCIsIFwiaFwiLCBcImpcIiwgXCJrXCIsIFwibFwiLCBcInpcIiwgXCJ4XCIsIFwiY1wiLCBcInZcIiwgIFwiYlwiLCBcIm5cIiwgXCJtXCJdXG5cdGtleXNBcnJheSA9IFtdXG5cdHNwYWNlciA9IGV4cG9ydHMucHgoNSlcblx0aWYgZXhwb3J0cy5zY2FsZSA9PSAzIHx8IGV4cG9ydHMud2lkdGggPT0gNjQwXG5cdFx0c3BhY2VyID0gZXhwb3J0cy5weCg2KVxuXHRyb3dzTWFwID0gW1xuXHRcdHsgXG5cdFx0XHRcInBhZGRpbmdcIiA6IGV4cG9ydHMucHgoNClcblx0XHRcdFwic3RhcnRJbmRleFwiIDogMFxuXHRcdFx0XCJlbmRJbmRleFwiIDogOVxuXHRcdFx0XCJtYXJnaW5Ub3BcIiA6IGV4cG9ydHMucHgoMTApXG5cdFx0fSxcblx0XHR7IFxuXHRcdFx0XCJwYWRkaW5nXCIgOiAyMiAqIGV4cG9ydHMuc2NhbGVcblx0XHRcdFwic3RhcnRJbmRleFwiIDogMTBcblx0XHRcdFwiZW5kSW5kZXhcIiA6IDE4XG5cdFx0XHRcIm1hcmdpblRvcFwiIDogMjIgKiBleHBvcnRzLnNjYWxlXG5cdFx0fSxcblx0XHR7IFxuXHRcdFx0XCJwYWRkaW5nXCIgOiA1OSAqIGV4cG9ydHMuc2NhbGVcblx0XHRcdFwic3RhcnRJbmRleFwiIDogMTlcblx0XHRcdFwiZW5kSW5kZXhcIiA6IDI1XG5cdFx0XHRcIm1hcmdpblRvcFwiIDogMzQgKiBleHBvcnRzLnNjYWxlXG5cdFx0fVxuXHRdXG5cdGtleVBvcFVwID0gbmV3IExheWVyIHdpZHRoOkBrZXlXaWR0aCwgaGVpZ2h0OkBrZXlIZWlnaHQsIHg6QC54LTE2KmV4cG9ydHMuc2NhbGUsIGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCIsIHN1cGVyTGF5ZXI6Ym9hcmQsIG5hbWU6XCJrZXkgcG9wIHVwXCJcblx0Ym94ID0gbmV3IExheWVyIGJvcmRlclJhZGl1czpleHBvcnRzLnB4KDEwKSwgc3VwZXJMYXllcjprZXlQb3BVcCwgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIiwgY29sb3I6XCJibGFja1wiLCBuYW1lOlwibGV0dGVyXCJcblx0Ym94LnN0eWxlID0ge1xuXHRcdFwiZm9udC1zaXplXCIgOiAzOSAqIGV4cG9ydHMuc2NhbGUgKyBcInB4XCJcblx0XHRcImZvbnQtd2VpZ2h0XCIgOiAzMDBcblx0XHRcImZvbnQtZmFtaWx5XCIgOiAnLWFwcGxlLXN5c3RlbSwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZidcblx0XHQndGV4dC1hbGlnbicgOiAnY2VudGVyJ1xuXHRcdCdsaW5lLWhlaWdodCcgOiBAbGluZUhlaWdodFxuXHR9XG5cdEAuY29sb3IgPSBcIndoaXRlXCJcblx0cGF0aCA9IG5ldyBMYXllciBzdXBlckxheWVyOmtleVBvcFVwLCBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiLCBuYW1lOlwic2hhcGUgcGF0aFwiXG5cblxuXHRzaGlmdEtleSA9IG5ldyBMYXllciBzdXBlckxheWVyOmJvYXJkLCBuYW1lOlwic2hpZnRcIiwgYm9yZGVyUmFkaXVzOmV4cG9ydHMucHgoNSksIGJhY2tncm91bmRDb2xvcjpcIiNBQUIzQkNcIiwgc2hhZG93WTpleHBvcnRzLnB4KDEpLCBzaGFkb3dDb2xvcjpcIiM5Mjk0OThcIlxuXHRzaGlmdEtleS5jb25zdHJhaW50cyA9IChib3R0b206NTYsIGxlYWRpbmc6Mywgd2lkdGg6NDIsIGhlaWdodDo0Milcblx0c2hpZnRJY29uID0gbmV3IExheWVyIHdpZHRoOmV4cG9ydHMucHgoMjApLCBoZWlnaHQ6ZXhwb3J0cy5weCgxOSksIHN1cGVyTGF5ZXI6c2hpZnRLZXksIGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCIsIHg6ZXhwb3J0cy5weCgxMSksIHk6ZXhwb3J0cy5weCgxMSlcblx0c2hpZnRJY29uLmh0bWwgPSBcIjw/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyc/PlxuXHRcdDxzdmcgd2lkdGg9JyN7ZXhwb3J0cy5weCgyMCl9cHgnIGhlaWdodD0nI3tleHBvcnRzLnB4KDE4KX1weCcgdmlld0JveD0nMCAwIDIwIDE5JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHhtbG5zOnNrZXRjaD0naHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zJz5cblx0XHQgICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjUuMiAoMjUyMzUpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdCAgICA8dGl0bGU+U2hpZnQ8L3RpdGxlPlxuXHRcdCAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHQgICAgPGRlZnM+PC9kZWZzPlxuXHRcdCAgICA8ZyBpZD0nUGFnZS0xJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJyBza2V0Y2g6dHlwZT0nTVNQYWdlJz5cblx0XHQgICAgICAgIDxnIGlkPSdLZXlib2FyZC9MaWdodC9Mb3dlcicgc2tldGNoOnR5cGU9J01TTGF5ZXJHcm91cCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTE0LjAwMDAwMCwgLTEyOS4wMDAwMDApJyBmaWxsPScjMDMwMzAzJz5cblx0XHQgICAgICAgICAgICA8ZyBpZD0nVGhpcmQtUm93JyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgzLjAwMDAwMCwgMTE4LjAwMDAwMCknIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnPlxuXHRcdCAgICAgICAgICAgICAgICA8cGF0aCBkPSdNMjEuNjcxOTAwOCwxMi4yMzI1ODk4IEMyMS4zMDEwMzIsMTEuODI3OTkxNiAyMC42OTQ2ODkyLDExLjgzMzQ3MzEgMjAuMzI4ODE5NSwxMi4yMzI1ODk4IEwxMS42OTQ3MDIzLDIxLjY1MTI5ODMgQzEwLjc1ODc0NDEsMjIuNjcyMzA4IDExLjEyODU1NDEsMjMuNSAxMi41MDk3NzUxLDIzLjUgTDE1Ljk5OTk5OTksMjMuNTAwMDAwMiBMMTUuOTk5OTk5OSwyOC4wMDE0MjQxIEMxNS45OTk5OTk5LDI4LjgyOTA2NDggMTYuNjcxNjU1OSwyOS41MDAwMDAxIDE3LjQ5NzEwMSwyOS41MDAwMDAxIEwyNC41MDI4OTkyLDI5LjUwMDAwMDEgQzI1LjMyOTcyNTMsMjkuNTAwMDAwMSAyNi4wMDAwMDAzLDI4LjgzNDk3MDMgMjYuMDAwMDAwMywyOC4wMDE0MjQxIEwyNi4wMDAwMDAzLDIzLjUwMDAwMDEgTDI5LjQ5MDIyNTEsMjMuNTAwMDAwMiBDMzAuODc2MzM1NywyMy41MDAwMDAyIDMxLjI0Mzk1MjEsMjIuNjc1MTkxNiAzMC4zMDU0MTYxLDIxLjY1MTI5ODUgTDIxLjY3MTkwMDgsMTIuMjMyNTg5OCBaIE0yMS4zNDE3NDgsMTQuMzY0NTMxNiBDMjEuMTUzMDA1NiwxNC4xNjMyMDY0IDIwLjg0MzM1MTUsMTQuMTY3MDkxNCAyMC42NTgyNTE0LDE0LjM2NDUzMTYgTDEzLjUsMjEuOTk5OTk5OCBMMTcuNTAwMDAwMSwyMS45OTk5OTk5IEwxNy41MDAwMDAyLDI3LjUwODk5NTYgQzE3LjUwMDAwMDIsMjcuNzgwMTcwMyAxNy43MzI5MDI3LDI4LjAwMDAwMDggMTguMDAzNDIyOSwyOC4wMDAwMDA4IEwyMy45OTY1NzcsMjguMDAwMDAwOCBDMjQuMjc0NjA5NywyOC4wMDAwMDA4IDI0LjQ5OTk5OTcsMjcuNzcyMTIwMyAyNC40OTk5OTk3LDI3LjUwODk5NTYgTDI0LjQ5OTk5OTcsMjEuOTk5OTk5OSBMMjguNSwyMS45OTk5OTk5IEwyMS4zNDE3NDgsMTQuMzY0NTMxNiBaJyBpZD0nU2hpZnQnPjwvcGF0aD5cblx0XHQgICAgICAgICAgICA8L2c+XG5cdFx0ICAgICAgICA8L2c+XG5cdFx0ICAgIDwvZz5cblx0XHQ8L3N2Zz5cIlxuXG5cdHNoaWZ0SWNvbi5zdGF0ZXMuYWRkXG5cdFx0b246XG5cdFx0XHRodG1sOiBcIjw/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyc/PlxuXHRcdFx0PHN2ZyB3aWR0aD0nI3tleHBvcnRzLnB4KDIwKX1weCcgaGVpZ2h0PScje2V4cG9ydHMucHgoMTgpfXB4JyB2aWV3Qm94PScwIDAgMjAgMTcnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycgeG1sbnM6c2tldGNoPSdodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMnPlxuXHRcdFx0ICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy41LjIgKDI1MjM1KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHRcdCAgICA8dGl0bGU+U2hpZnQ8L3RpdGxlPlxuXHRcdFx0ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdFx0ICAgIDxkZWZzPjwvZGVmcz5cblx0XHRcdCAgICA8ZyBpZD0nUGFnZS0xJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJyBza2V0Y2g6dHlwZT0nTVNQYWdlJz5cblx0XHRcdCAgICAgICAgPGcgaWQ9J0tleWJvYXJkL0xpZ2h0L1VwcGVyJyBza2V0Y2g6dHlwZT0nTVNMYXllckdyb3VwJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtMTQuMDAwMDAwLCAtMTMwLjAwMDAwMCknIGZpbGw9JyMwMzAzMDMnPlxuXHRcdFx0ICAgICAgICAgICAgPGcgaWQ9J1RoaXJkLVJvdycgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMy4wMDAwMDAsIDExOC4wMDAwMDApJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJz5cblx0XHRcdCAgICAgICAgICAgICAgICA8cGF0aCBkPSdNMjEuNzA1MjM4OCwxMy4yMDUyMzg4IEMyMS4zMTU3NDYyLDEyLjgxNTc0NjIgMjAuNjg1NzU1OSwxMi44MTQyNDQxIDIwLjI5NDc2MTIsMTMuMjA1MjM4OCBMMTEuOTE2MDc2NywyMS41ODM5MjMzIEMxMS4xMzM5OTkxLDIyLjM2NjAwMDkgMTEuMzk4MjYwNiwyMyAxMi40OTc5MTMxLDIzIEwxNi41LDIzIEwxNi41LDI4LjAwOTIyMiBDMTYuNSwyOC41NTY0MTM2IDE2Ljk0NjMxMTQsMjkgMTcuNDk3NTQ0NiwyOSBMMjQuNTAyNDU1NCwyOSBDMjUuMDUzMzg0LDI5IDI1LjUsMjguNTQ5MDI0OCAyNS41LDI4LjAwOTIyMiBMMjUuNSwyMyBMMjkuNTAyMDg2OSwyMyBDMzAuNjA1NTAzOCwyMyAzMC44NjY4MjQsMjIuMzY2ODI0IDMwLjA4MzkyMzMsMjEuNTgzOTIzMyBMMjEuNzA1MjM4OCwxMy4yMDUyMzg4IFonIGlkPSdTaGlmdCc+PC9wYXRoPlxuXHRcdFx0ICAgICAgICAgICAgPC9nPlxuXHRcdFx0ICAgICAgICA8L2c+XG5cdFx0XHQgICAgPC9nPlxuXHRcdFx0PC9zdmc+XCJcblx0c2hpZnRJY29uLnN0YXRlcy5hbmltYXRpb25PcHRpb25zID1cbiAgXHQgIHRpbWU6IC4wMVxuXG4gIFx0ZGVsZXRlS2V5ID0gbmV3IExheWVyIHN1cGVyTGF5ZXI6Ym9hcmQsIGJvcmRlclJhZGl1czpleHBvcnRzLnB4KDUpLCBiYWNrZ3JvdW5kQ29sb3I6XCIjQUFCM0JDXCIsIHNoYWRvd1k6ZXhwb3J0cy5weCgxKSwgc2hhZG93Q29sb3I6XCIjOTI5NDk4XCJcbiAgXHRkZWxldGVLZXkuY29uc3RyYWludHMgPSAoYm90dG9tOjU2LCB0cmFpbGluZzozLCB3aWR0aDo0MiwgaGVpZ2h0OjQyKVxuICBcdGRlbGV0ZUljb24gPSBuZXcgTGF5ZXIgc3VwZXJMYXllcjpkZWxldGVLZXksIHdpZHRoOmV4cG9ydHMucHgoMjQpLCBoZWlnaHQ6ZXhwb3J0cy5weCgxOCksIGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCJcbiAgXHRkZWxldGVJY29uLmNvbnN0cmFpbnRzID0gKHRvcDoxMywgbGVhZGluZzoxMClcblxuICBcdGRlbGV0ZUljb24uc3RhdGVzLmFkZCBcbiAgXHRcdG9uOiBcbiAgXHRcdFx0aHRtbDogXCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0XHRcdFx0PHN2ZyB3aWR0aD0nI3tleHBvcnRzLnB4KDI0KX1weCcgaGVpZ2h0PScje2V4cG9ydHMucHgoMTgpfXB4JyB2aWV3Qm94PScwIDAgMjQgMTgnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycgeG1sbnM6c2tldGNoPSdodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMnPlxuXHRcdFx0XHQgICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjUuMiAoMjUyMzUpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdFx0XHQgICAgPHRpdGxlPkJhY2s8L3RpdGxlPlxuXHRcdFx0XHQgICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0XHRcdCAgICA8ZGVmcz48L2RlZnM+XG5cdFx0XHRcdCAgICA8ZyBpZD0nUGFnZS0xJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJyBza2V0Y2g6dHlwZT0nTVNQYWdlJz5cblx0XHRcdFx0ICAgICAgICA8ZyBpZD0nS2V5Ym9hcmQvTGlnaHQvVXBwZXInIHNrZXRjaDp0eXBlPSdNU0xheWVyR3JvdXAnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC0zMzkuMDAwMDAwLCAtMTMwLjAwMDAwMCknIGZpbGw9JyMwMzAzMDMnPlxuXHRcdFx0XHQgICAgICAgICAgICA8ZyBpZD0nVGhpcmQtUm93JyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgzLjAwMDAwMCwgMTE4LjAwMDAwMCknIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnPlxuXHRcdFx0XHQgICAgICAgICAgICAgICAgPHBhdGggZD0nTTM1MS42NDI2NjMsMjAuOTc3NjkwMyBMMzU0LjQ2Njc5NSwxOC4xNTM1NTg1IEMzNTQuNzYwMTA2LDE3Ljg2MDI0NzYgMzU0Ljc2Mzk4MywxNy4zODE0OTYyIDM1NC40NzEwOSwxNy4wODg2MDMgQzM1NC4xNzYxNTUsMTYuNzkzNjY3NyAzNTMuNzAxNCwxNi43OTc2MzI4IDM1My40MDYxMzUsMTcuMDkyODk4MyBMMzUwLjU4MjAwMywxOS45MTcwMzAxIEwzNDcuNzU3ODcxLDE3LjA5Mjg5ODMgQzM0Ny40NjQ1NiwxNi43OTk1ODc0IDM0Ni45ODU4MDksMTYuNzk1NzA5NyAzNDYuNjkyOTE2LDE3LjA4ODYwMyBDMzQ2LjM5Nzk4LDE3LjM4MzUzODIgMzQ2LjQwMTk0NSwxNy44NTgyOTMgMzQ2LjY5NzIxMSwxOC4xNTM1NTg1IEwzNDkuNTIxMzQzLDIwLjk3NzY5MDMgTDM0Ni42OTcyMTEsMjMuODAxODIyIEMzNDYuNDAzOSwyNC4wOTUxMzI5IDM0Ni40MDAwMjIsMjQuNTczODg0MyAzNDYuNjkyOTE2LDI0Ljg2Njc3NzYgQzM0Ni45ODc4NTEsMjUuMTYxNzEyOCAzNDcuNDYyNjA2LDI1LjE1Nzc0NzcgMzQ3Ljc1Nzg3MSwyNC44NjI0ODIyIEwzNTAuNTgyMDAzLDIyLjAzODM1MDQgTDM1My40MDYxMzUsMjQuODYyNDgyMiBDMzUzLjY5OTQ0NSwyNS4xNTU3OTMxIDM1NC4xNzgxOTcsMjUuMTU5NjcwOCAzNTQuNDcxMDksMjQuODY2Nzc3NiBDMzU0Ljc2NjAyNSwyNC41NzE4NDIzIDM1NC43NjIwNiwyNC4wOTcwODc1IDM1NC40NjY3OTUsMjMuODAxODIyIEwzNTEuNjQyNjYzLDIwLjk3NzY5MDMgWiBNMzM3LjA1OTM0NSwyMi4wNTkzNDQ1IEMzMzYuNDc0Mjg1LDIxLjQ3NDI4NDcgMzM2LjQ4MTM1MSwyMC41MTg2NDg5IDMzNy4wNTkzNDUsMTkuOTQwNjU1NSBMMzQzLjc4OTkxNSwxMy4yMTAwODUzIEMzNDQuMTgyMDg0LDEyLjgxNzkxNiAzNDQuOTQ4OTIsMTIuNSAzNDUuNTA3NDg0LDEyLjUgTDM1Ni4wMDIwOTgsMTIuNSBDMzU3LjkzMzkzNiwxMi41IDM1OS41LDE0LjA2ODg0NzcgMzU5LjUsMTYuMDAxNzk4MyBMMzU5LjUsMjUuOTk4MjAxNyBDMzU5LjUsMjcuOTMyMTkxNSAzNTcuOTIzMDg4LDI5LjUgMzU2LjAwMjA5OCwyOS41IEwzNDUuNTA3NDg0LDI5LjUgQzM0NC45NTEwNjYsMjkuNSAzNDQuMTc3MTY5LDI5LjE3NzE2OTMgMzQzLjc4OTkxNSwyOC43ODk5MTQ4IEwzMzcuMDU5MzQ1LDIyLjA1OTM0NDUgWicgaWQ9J0JhY2snPjwvcGF0aD5cblx0XHRcdFx0ICAgICAgICAgICAgPC9nPlxuXHRcdFx0XHQgICAgICAgIDwvZz5cblx0XHRcdFx0ICAgIDwvZz5cblx0XHRcdFx0PC9zdmc+XCJcblxuICBcdGRlbGV0ZUljb24uc3RhdGVzLmFkZFxuICBcdFx0b2ZmOiBcbiAgXHRcdFx0aHRtbDogXCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0XHQ8c3ZnIHdpZHRoPScje2V4cG9ydHMucHgoMjQpfXB4JyBoZWlnaHQ9JyN7ZXhwb3J0cy5weCgxOCl9cHgnIHZpZXdCb3g9JzAgMCAyNCAxOCcgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyB4bWxuczpza2V0Y2g9J2h0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaC9ucyc+XG5cdFx0ICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy41LjIgKDI1MjM1KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHQgICAgPHRpdGxlPkJhY2s8L3RpdGxlPlxuXHRcdCAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHQgICAgPGRlZnM+PC9kZWZzPlxuXHRcdCAgICA8ZyBpZD0nUGFnZS0xJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJyBza2V0Y2g6dHlwZT0nTVNQYWdlJz5cblx0XHQgICAgICAgIDxnIGlkPSdLZXlib2FyZC9MaWdodC9VcHBlcicgc2tldGNoOnR5cGU9J01TTGF5ZXJHcm91cCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTMzOS4wMDAwMDAsIC0xMzAuMDAwMDAwKScgZmlsbD0nIzAzMDMwMyc+XG5cdFx0ICAgICAgICAgICAgPGcgaWQ9J1RoaXJkLVJvdycgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMy4wMDAwMDAsIDExOC4wMDAwMDApJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJz5cblx0XHQgICAgICAgICAgICAgICAgPHBhdGggZD0nTTMzNy4wNTkzNDUsMjIuMDU5MzQ0NSBDMzM2LjQ3NDI4NSwyMS40NzQyODQ3IDMzNi40ODEzNTEsMjAuNTE4NjQ4OSAzMzcuMDU5MzQ1LDE5Ljk0MDY1NTUgTDM0My43ODk5MTUsMTMuMjEwMDg1MyBDMzQ0LjE4MjA4NCwxMi44MTc5MTYgMzQ0Ljk0ODkyLDEyLjUgMzQ1LjUwNzQ4NCwxMi41IEwzNTYuMDAyMDk4LDEyLjUgQzM1Ny45MzM5MzYsMTIuNSAzNTkuNSwxNC4wNjg4NDc3IDM1OS41LDE2LjAwMTc5ODMgTDM1OS41LDI1Ljk5ODIwMTcgQzM1OS41LDI3LjkzMjE5MTUgMzU3LjkyMzA4OCwyOS41IDM1Ni4wMDIwOTgsMjkuNSBMMzQ1LjUwNzQ4NCwyOS41IEMzNDQuOTUxMDY2LDI5LjUgMzQ0LjE3NzE2OSwyOS4xNzcxNjkzIDM0My43ODk5MTUsMjguNzg5OTE0OCBMMzM3LjA1OTM0NSwyMi4wNTkzNDQ1IFogTTM1MS42NDI2NjMsMjAuOTc3NjkwMyBMMzU0LjQ2Njc5NSwxOC4xNTM1NTg1IEMzNTQuNzYwMTA2LDE3Ljg2MDI0NzYgMzU0Ljc2Mzk4MywxNy4zODE0OTYyIDM1NC40NzEwOSwxNy4wODg2MDMgQzM1NC4xNzYxNTUsMTYuNzkzNjY3NyAzNTMuNzAxNCwxNi43OTc2MzI4IDM1My40MDYxMzUsMTcuMDkyODk4MyBMMzUwLjU4MjAwMywxOS45MTcwMzAxIEwzNDcuNzU3ODcxLDE3LjA5Mjg5ODMgQzM0Ny40NjQ1NiwxNi43OTk1ODc0IDM0Ni45ODU4MDksMTYuNzk1NzA5NyAzNDYuNjkyOTE2LDE3LjA4ODYwMyBDMzQ2LjM5Nzk4LDE3LjM4MzUzODIgMzQ2LjQwMTk0NSwxNy44NTgyOTMgMzQ2LjY5NzIxMSwxOC4xNTM1NTg1IEwzNDkuNTIxMzQzLDIwLjk3NzY5MDMgTDM0Ni42OTcyMTEsMjMuODAxODIyIEMzNDYuNDAzOSwyNC4wOTUxMzI5IDM0Ni40MDAwMjIsMjQuNTczODg0MyAzNDYuNjkyOTE2LDI0Ljg2Njc3NzYgQzM0Ni45ODc4NTEsMjUuMTYxNzEyOCAzNDcuNDYyNjA2LDI1LjE1Nzc0NzcgMzQ3Ljc1Nzg3MSwyNC44NjI0ODIyIEwzNTAuNTgyMDAzLDIyLjAzODM1MDQgTDM1My40MDYxMzUsMjQuODYyNDgyMiBDMzUzLjY5OTQ0NSwyNS4xNTU3OTMxIDM1NC4xNzgxOTcsMjUuMTU5NjcwOCAzNTQuNDcxMDksMjQuODY2Nzc3NiBDMzU0Ljc2NjAyNSwyNC41NzE4NDIzIDM1NC43NjIwNiwyNC4wOTcwODc1IDM1NC40NjY3OTUsMjMuODAxODIyIEwzNTEuNjQyNjYzLDIwLjk3NzY5MDMgWiBNMzM4LjcwOTcyLDIxLjcwOTcxOTUgQzMzOC4zMTc3NTIsMjEuMzE3NzUyMiAzMzguMzE4OTY1LDIwLjY4MTAzNDkgMzM4LjcwOTcyLDIwLjI5MDI4MDUgTDM0NC42NDMyNDUsMTQuMzU2NzU0NyBDMzQ0Ljg0MDI3NiwxNC4xNTk3MjQ1IDM0NS4yMjU2MzksMTQgMzQ1LjQ5Mzc0MSwxNCBMMzU1Ljk5NzIzOSwxNCBDMzU3LjEwMzMzMywxNCAzNTcuOTk5OTk5LDE0Ljg5NzA2MDEgMzU3Ljk5OTk5OSwxNi4wMDU4NTg2IEwzNTcuOTk5OTk5LDI1Ljk5NDE0MTIgQzM1Ny45OTk5OTksMjcuMTAxOTQ2NCAzNTcuMTA2NDU3LDI3Ljk5OTk5OTkgMzU1Ljk5NzIzOSwyNy45OTk5OTk5IEwzNDUuNDkzNzQxLDI4IEMzNDUuMjIxMDU2LDI4IDM0NC44NDA2NDMsMjcuODQwNjQzMSAzNDQuNjQzMjQ2LDI3LjY0MzI0NTMgTDMzOC43MDk3MiwyMS43MDk3MTk1IFonIGlkPSdCYWNrJz48L3BhdGg+XG5cdFx0ICAgICAgICAgICAgPC9nPlxuXHRcdCAgICAgICAgPC9nPlxuXHRcdCAgICA8L2c+XG5cdFx0PC9zdmc+XCJcblxuXG4gIFx0ZGVsZXRlS2V5Lm9uIEV2ZW50cy5Ub3VjaFN0YXJ0LCAtPlxuICBcdFx0ZGVsZXRlS2V5LmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIlxuICBcdFx0ZGVsZXRlSWNvbi5zdGF0ZXMuc3dpdGNoSW5zdGFudChcIm9uXCIpXG5cbiAgXHRkZWxldGVLZXkub24gRXZlbnRzLlRvdWNoRW5kLCAtPlxuICBcdFx0ZGVsZXRlS2V5LmJhY2tncm91bmRDb2xvciA9IFwiI0FBQjNCQ1wiXG4gIFx0XHRkZWxldGVJY29uLnN0YXRlcy5zd2l0Y2hJbnN0YW50KFwib2ZmXCIpXG5cbiAgXHRkZWxldGVJY29uLnN0YXRlcy5zd2l0Y2hJbnN0YW50KFwib2ZmXCIpXG5cblx0c2hpZnRJY29uLm9uIEV2ZW50cy5DbGljaywgLT5cblx0XHRzaGlmdEljb24uc3RhdGVzLm5leHQoKVxuXHRcdGlmIHNoaWZ0SWNvbi5zdGF0ZXMuc3RhdGUgPT0gXCJvblwiXG5cdFx0XHRzaGlmdEtleS5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCJcblx0XHRcdGZvciBrZXkgaW4ga2V5c0FycmF5XG5cdFx0XHRcdGtleS5zdHlsZVsndGV4dC10cmFuc2Zvcm0nXSA9ICd1cHBlcmNhc2UnXG5cdFx0XHRib3guc3R5bGVbJ3RleHQtdHJhbnNmb3JtJ10gPSAndXBwZXJjYXNlJ1xuXHRcdGVsc2UgXG5cdFx0XHRzaGlmdEtleS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNBQUIzQkNcIlxuXHRcdFx0Zm9yIGtleSBpbiBrZXlzQXJyYXlcblx0XHRcdFx0a2V5LnN0eWxlW1widGV4dC10cmFuc2Zvcm1cIl0gPSAnbG93ZXJjYXNlJ1xuXHRcdFx0Ym94LnN0eWxlW1widGV4dC10cmFuc2Zvcm1cIl0gPSAnbG93ZXJjYXNlJ1xuXG5cdGZvciBsZXR0ZXIgaW4gbGV0dGVyc0FycmF5XG5cdFx0aW5kZXggPSBsZXR0ZXJzQXJyYXkuaW5kZXhPZihsZXR0ZXIpIFxuXHRcdGtleSA9IG5ldyBMYXllciBuYW1lOmxldHRlciwgc3VwZXJMYXllcjpib2FyZCwgYm9yZGVyUmFkaXVzOjUqZXhwb3J0cy5zY2FsZSwgYmFja2dyb3VuZENvbG9yOlwid2hpdGVcIiwgY29sb3I6XCJibGFja1wiLCBzaGFkb3dZOmV4cG9ydHMucHgoMSksIHNoYWRvd0NvbG9yOlwiIzkyOTQ5OFwiXG5cdFx0a2V5UG9wVXAuYnJpbmdUb0Zyb250KClcblx0XHRib3guYnJpbmdUb0Zyb250KClcblx0XHRpZiBleHBvcnRzLnNjYWxlID09IDJcblx0XHRcdGtleS5jb25zdHJhaW50cyA9ICh3aWR0aDozMiwgaGVpZ2h0OjQyKVxuXHRcdFx0a2V5UG9wVXAuY29uc3RyYWludHMgPSAod2lkdGg6NjUsIGhlaWdodDoxMjIpXG5cdFx0XHRwYXRoLmNvbnN0cmFpbnRzID0gKHdpZHRoOjY1LCBoZWlnaHQ6IDEyMilcblx0XHRcdHBhdGgueSA9IDEwXG5cdFx0XHRAcGF0aFdpZHRoID0gZXhwb3J0cy5weCg2NSlcblx0XHRcdEBwYXRoSGVpZ2h0ID0gZXhwb3J0cy5weCgxMjIpXG5cdFx0XHRAa2V5SGVpZ2h0ID0gZXhwb3J0cy5weCgzMilcblx0XHRcdEBrZXlXaWR0aCA9IGV4cG9ydHMucHgoNDQpXG5cdFx0XHRAbGluZUhlaWdodCA9IEBrZXlXaWR0aCAtIDE3ICsgXCJweFwiXG5cdFx0XHRib3guY29uc3RyYWludHMgPSAod2lkdGg6MzIsIGhlaWdodDo0NClcblx0XHRcdGJveC5jZW50ZXJYKClcblx0XHRcdGJveC55ID0gZXhwb3J0cy5weCgyOClcblxuXHRcdGlmIGV4cG9ydHMuc2NhbGUgPT0gM1xuXHRcdFx0a2V5LmNvbnN0cmFpbnRzID0gKHdpZHRoOjM1LCBoZWlnaHQ6NDYpXG5cdFx0XHRrZXlQb3BVcC5jb25zdHJhaW50cyA9ICh3aWR0aDo2OCwgaGVpZ2h0OjEyMilcblx0XHRcdEBrZXlIZWlnaHQgPSBleHBvcnRzLnB4KDEyMilcblx0XHRcdEBrZXlXaWR0aCA9IGV4cG9ydHMucHgoNjUpXG5cdFx0XHRAbGluZUhlaWdodCA9IEBrZXlXaWR0aCArIFwicHhcIlxuXHRcdFx0QHBhdGhXaWR0aCA9IGV4cG9ydHMucHgoNjgpXG5cdFx0XHRAcGF0aEhlaWdodCA9IGV4cG9ydHMucHgoMTI4KVxuXHRcdFx0cGF0aC55ID0gMFxuXG5cblx0XHRcdGJveC5jb25zdHJhaW50cyA9ICh3aWR0aDozNSwgaGVpZ2h0OjQ2KVxuXHRcdFx0Ym94LmNlbnRlclgoKVxuXHRcdFx0Ym94LnkgPSBleHBvcnRzLnB4KDI4KVxuXG5cdFx0aWYgZXhwb3J0cy53aWR0aCA9PSA2NDBcblx0XHRcdGtleS5jb25zdHJhaW50cyA9ICh3aWR0aDoyNiwgaGVpZ2h0OjM5KVxuXG5cdFx0a2V5UG9wVXAudmlzaWJsZSA9IGZhbHNlXG5cblx0XHRleHBvcnRzLmxheW91dCgpXG5cdFx0a2V5LnN0eWxlID0ge1xuXHRcdFx0XCJmb250LXNpemVcIiA6IDI1ICogZXhwb3J0cy5zY2FsZSArIFwicHhcIlxuXHRcdFx0XCJmb250LXdlaWdodFwiIDogMzAwXG5cdFx0XHRcImZvbnQtZmFtaWx5XCIgOiAnLWFwcGxlLXN5c3RlbSwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZidcblx0XHRcdCd0ZXh0LWFsaWduJyA6ICdjZW50ZXInXG5cdFx0XHQnbGluZS1oZWlnaHQnIDoga2V5LmhlaWdodCAtIGV4cG9ydHMucHgoMikgKyBcInB4XCJcblx0XHR9XG5cdFx0a2V5Lmh0bWwgPSBsZXR0ZXJcblx0XHRpZiBpbmRleCA8PSByb3dzTWFwWzBdLmVuZEluZGV4XG5cdFx0XHRyb3dJbmRleCA9IGluZGV4IC0gcm93c01hcFswXS5zdGFydEluZGV4XG5cdFx0XHRrZXkueCA9IHJvd3NNYXBbMF0ucGFkZGluZyArIChyb3dJbmRleCpzcGFjZXIpICsgKHJvd0luZGV4KmtleS53aWR0aClcblx0XHRcdGtleS55ID0gcm93c01hcFswXS5tYXJnaW5Ub3Bcblx0XHRpZiBpbmRleCA+IHJvd3NNYXBbMF0uZW5kSW5kZXggJiYgaW5kZXggPD0gcm93c01hcFsxXS5lbmRJbmRleFxuXHRcdFx0cm93SW5kZXggPSBpbmRleCAtIHJvd3NNYXBbMV0uc3RhcnRJbmRleFxuXHRcdFx0a2V5LnggPSByb3dzTWFwWzFdLnBhZGRpbmcgKyAocm93SW5kZXgqc3BhY2VyKSArIChyb3dJbmRleCprZXkud2lkdGgpXG5cdFx0XHRrZXkueSA9IHJvd3NNYXBbMV0ubWFyZ2luVG9wICsga2V5LmhlaWdodFxuXHRcdGlmIGluZGV4ID4gcm93c01hcFsxXS5lbmRJbmRleFxuXHRcdFx0cm93SW5kZXggPSBpbmRleCAtIHJvd3NNYXBbMl0uc3RhcnRJbmRleFxuXHRcdFx0a2V5LnggPSByb3dzTWFwWzJdLnBhZGRpbmcgKyAocm93SW5kZXgqc3BhY2VyKSArIChyb3dJbmRleCprZXkud2lkdGgpXG5cdFx0XHRrZXkueSA9IHJvd3NNYXBbMl0ubWFyZ2luVG9wICsga2V5LmhlaWdodCAqIDJcblx0XHRwYXRoLmh0bWwgPSBcIjw/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyc/PlxuXG5cdFx0PHN2ZyB3aWR0aD0nI3tAcGF0aFdpZHRofXB4JyBoZWlnaHQ9JyN7QHBhdGhIZWlnaHR9JyB2aWV3Qm94PScwIDAgNjMgMTE0JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHhtbG5zOnNrZXRjaD0naHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zJz5cblx0XHQgICAgPHRpdGxlPlJlY3RhbmdsZSA0NCBDb3B5PC90aXRsZT5cblx0XHQgICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0ICAgIDxkZWZzPlxuXHRcdCAgICAgICAgPGZpbHRlciB4PSctNTAlJyB5PSctNTAlJyB3aWR0aD0nMjAwJScgaGVpZ2h0PScyMDAlJyBmaWx0ZXJVbml0cz0nb2JqZWN0Qm91bmRpbmdCb3gnIGlkPSdmaWx0ZXItMSc+XG5cdFx0ICAgICAgICAgICAgPGZlT2Zmc2V0IGR4PScwJyBkeT0nMCcgaW49J1NvdXJjZUFscGhhJyByZXN1bHQ9J3NoYWRvd09mZnNldE91dGVyMSc+PC9mZU9mZnNldD5cblx0XHQgICAgICAgICAgICA8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPScxLjUnIGluPSdzaGFkb3dPZmZzZXRPdXRlcjEnIHJlc3VsdD0nc2hhZG93Qmx1ck91dGVyMSc+PC9mZUdhdXNzaWFuQmx1cj5cblx0XHQgICAgICAgICAgICA8ZmVDb2xvck1hdHJpeCB2YWx1ZXM9JzAgMCAwIDAgMCAgIDAgMCAwIDAgMCAgIDAgMCAwIDAgMCAgMCAwIDAgMC4yMSAwJyBpbj0nc2hhZG93Qmx1ck91dGVyMScgdHlwZT0nbWF0cml4JyByZXN1bHQ9J3NoYWRvd01hdHJpeE91dGVyMSc+PC9mZUNvbG9yTWF0cml4PlxuXHRcdCAgICAgICAgICAgIDxmZU1lcmdlPlxuXHRcdCAgICAgICAgICAgICAgICA8ZmVNZXJnZU5vZGUgaW49J3NoYWRvd01hdHJpeE91dGVyMSc+PC9mZU1lcmdlTm9kZT5cblx0XHQgICAgICAgICAgICAgICAgPGZlTWVyZ2VOb2RlIGluPSdTb3VyY2VHcmFwaGljJz48L2ZlTWVyZ2VOb2RlPlxuXHRcdCAgICAgICAgICAgIDwvZmVNZXJnZT5cblx0XHQgICAgICAgIDwvZmlsdGVyPlxuXHRcdCAgICA8L2RlZnM+XG5cdFx0ICAgIDxnIGlkPSdQYWdlLTEnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIHNrZXRjaDp0eXBlPSdNU1BhZ2UnPlxuXHRcdCAgICAgICAgPGcgaWQ9J2lQaG9uZS02JyBza2V0Y2g6dHlwZT0nTVNBcnRib2FyZEdyb3VwJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtMTE4LjAwMDAwMCwgLTI0MC4wMDAwMDApJyBzdHJva2U9JyNDN0M3QzcnIGZpbHRlcj0ndXJsKCNmaWx0ZXItMSknIHN0cm9rZS13aWR0aD0nMC41JyBcblx0XHQgICAgICAgIGZpbGw9JyNGRkZGRkYnIG9wYWNpdHk9JzAuOTk4MzY3NTM3Jz5cblx0XHQgICAgICAgICA8cGF0aCBkPSdNMTM0LDMwNiBDMTM0LDMwNiAxMjEsMjk1IDEyMSwyOTAgQzEyMSwyNzkuNjE2Nzg4IDEyMSwyNTMuMDAxNDU2IDEyMSwyNTMuMDAxNDU2IEMxMjEsMjQ3LjQ3NzgwNCAxMjUuNDg1ODMyLDI0MyAxMzEuMDAyNzc0LDI0MyBMMTY3Ljg2MjEyNywyNDMgQzE3My4zODY1MDcsMjQzIDE3Ny44ODA4NjIsMjQ3LjQ2OTkwNSBcblx0XHQgICAgICAgICAxNzcuOTAwMDQ0LDI1Mi45OTcyNzEgQzE3Ny45MDAwNDQsMjUyLjk5NzI3MSAxNzgsMjgwIDE3Ny45OTk5OTksMjkwIEMxNzcuOTk5OTk5LDI5NS4wMDY1NTMgMTY1LDMwNiAxNjUsMzA2IEwxNjUsMzQ2LjA0OTU5NCBcblx0XHQgICAgICAgICBDMTY1LDM0OC44MDY4MDcgMTYyLjc3MDU1NiwzNTEuMDQxOTY5IDE2MC4wMDIwOTgsMzUxLjA0MTk2OSBMMTM4Ljk5NzkwMiwzNTEuMDQxOTY5IFxuXHRcdCAgICAgICAgICBDMTM2LjIzNzYzNywzNTEuMDQxOTY5IDEzNCwzNDguODA4MzMxIDEzNCwzNDYuMDQ5NTk0IEwxMzQsMzA2IFonIGlkPSdSZWN0YW5nbGUtNDQtQ29weScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMTQ5LjUwMDAwMCwgMjk3LjAyMDk4NSkgc2NhbGUoLTEsIDEpIHRyYW5zbGF0ZSgtMTQ5LjUwMDAwMCwgLTI5Ny4wMjA5ODUpICc+XG5cdFx0ICAgICAgICAgIDwvcGF0aD5cblx0XHQgICAgICAgIDwvZz5cblx0XHQgICAgPC9nPlxuXHRcdDwvc3ZnPlwiXG5cdFx0a2V5c0FycmF5LnB1c2gga2V5XG5cblxuXHRcdGtleS5vbiBFdmVudHMuVG91Y2hTdGFydCwgLT5cblx0XHRcdGtleVBvcFVwLnZpc2libGUgPSB0cnVlXHRcblx0XHRcdGJveC5odG1sID0gQC5uYW1lXG5cdFx0XHRrZXlQb3BVcC5tYXhZID0gQC5tYXhZXG5cdFx0XHRrZXlQb3BVcC5taWRYID0gQC5taWRYXG5cblx0XHRrZXkub24gRXZlbnRzLlRvdWNoTW92ZSwgLT5cblx0XHRcdGJveC5odG1sID0gQC5uYW1lXG5cdFx0XHRrZXlQb3BVcC5tYXhZID0gQC5tYXhZXG5cdFx0XHRrZXlQb3BVcC5taWRYID0gQC5taWRYXHRcblxuXHRcdGtleS5vbiBFdmVudHMuVG91Y2hFbmQsIC0+XG5cdFx0XHRrZXlQb3BVcC52aXNpYmxlID0gZmFsc2Vcblx0XHRcdGlmIHNoaWZ0SWNvbi5zdGF0ZXMuc3RhdGUgPT0gXCJvblwiXG5cdFx0XHRcdHNoaWZ0SWNvbi5zdGF0ZXMuc3dpdGNoKFwiZGVmYXVsdFwiKVxuXHRcdFx0XHRmb3Iga2V5IGluIGtleXNBcnJheVxuXHRcdFx0XHRcdGtleS5zdHlsZVsndGV4dC10cmFuc2Zvcm0nXSA9ICdsb3dlcmNhc2UnXG5cdFx0XHRcdGJveC5zdHlsZVsndGV4dC10cmFuc2Zvcm0nXSA9ICdsb3dlcmNhc2UnXG5cblxuXG5cblx0bnVtS2V5ID0gbmV3IExheWVyIHN1cGVyTGF5ZXI6Ym9hcmQsIG5hbWU6XCJudW1cIiwgYm9yZGVyUmFkaXVzOmV4cG9ydHMucHgoNSksIGJhY2tncm91bmRDb2xvcjpcIiNBQUIzQkNcIiwgc2hhZG93WTpleHBvcnRzLnB4KDEpLCBzaGFkb3dDb2xvcjpcIiM5Mjk0OThcIiwgY29sb3I6XCJibGFja1wiXG5cdG51bUtleS5jb25zdHJhaW50cyA9ICh3aWR0aDo0MC41LCBoZWlnaHQ6NDIsIGJvdHRvbTo0LCBsZWFkaW5nOjMpXG5cdG51bUtleS5odG1sID0gXCIxMjNcIlxuXHRudW1LZXkuc3R5bGUgPSB7XG5cdFx0XCJmb250LXNpemVcIiA6IGV4cG9ydHMucHgoMTYpICsgXCJweFwiXG5cdFx0XCJmb250LXdlaWdodFwiIDogNDAwXG5cdFx0XCJmb250LWZhbWlseVwiIDogJy1hcHBsZS1zeXN0ZW0sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYnXG5cdFx0J3RleHQtYWxpZ24nIDogJ2NlbnRlcidcblx0XHQnbGluZS1oZWlnaHQnIDogZXhwb3J0cy5weCg0MikgKyBcInB4XCJcblxuXHR9XG5cblx0ZXhwb3J0cy5sYXlvdXQoKVxuXHRlbW9qaUtleSA9IG5ldyBMYXllciBzdXBlckxheWVyOmJvYXJkLCBuYW1lOlwiZW1vamlcIiwgYm9yZGVyUmFkaXVzOmV4cG9ydHMucHgoNSksIGJhY2tncm91bmRDb2xvcjpcIiNBQUIzQkNcIiwgc2hhZG93WTpleHBvcnRzLnB4KDEpLCBzaGFkb3dDb2xvcjpcIiM5Mjk0OThcIlxuXHRlbW9qaUtleS5jb25zdHJhaW50cyA9ICh3aWR0aDo0MSwgaGVpZ2h0OjQyLCBib3R0b206NCwgbGVhZGluZzpbbnVtS2V5LCA2XSlcblx0ZW1vamlLZXkuaHRtbCA9IFwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdFx0PHN2ZyB3aWR0aD0nI3tleHBvcnRzLnB4KDIwKX1weCcgaGVpZ2h0PScje2V4cG9ydHMucHgoMjApfXB4JyB2aWV3Qm94PScwIDAgMjAgMjAnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycgeG1sbnM6c2tldGNoPSdodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMnPlxuXHRcdCAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNS4yICgyNTIzNSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdFx0ICAgIDx0aXRsZT5FbW9qaTwvdGl0bGU+XG5cdFx0ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdCAgICA8ZGVmcz48L2RlZnM+XG5cdFx0ICAgIDxnIGlkPSdQYWdlLTEnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIHNrZXRjaDp0eXBlPSdNU1BhZ2UnPlxuXHRcdCAgICAgICAgPGcgaWQ9J0tleWJvYXJkL0xpZ2h0L0xvd2VyJyBza2V0Y2g6dHlwZT0nTVNMYXllckdyb3VwJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtNjAuMDAwMDAwLCAtMTgxLjAwMDAwMCknIGZpbGw9JyMwMzAzMDMnPlxuXHRcdCAgICAgICAgICAgIDxnIGlkPSdCb3R0b20tUm93JyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgzLjAwMDAwMCwgMTcwLjAwMDAwMCknIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnPlxuXHRcdCAgICAgICAgICAgICAgICA8cGF0aCBkPSdNNjYuNzUsMzAuNSBDNzIuMTM0Nzc2MywzMC41IDc2LjUsMjYuMTM0Nzc2MyA3Ni41LDIwLjc1IEM3Ni41LDE1LjM2NTIyMzcgNzIuMTM0Nzc2MywxMSA2Ni43NSwxMSBDNjEuMzY1MjIzNywxMSA1NywxNS4zNjUyMjM3IDU3LDIwLjc1IEM1NywyNi4xMzQ3NzYzIDYxLjM2NTIyMzcsMzAuNSA2Ni43NSwzMC41IFogTTY2Ljc1LDI5LjUgQzcxLjU4MjQ5MTYsMjkuNSA3NS41LDI1LjU4MjQ5MTYgNzUuNSwyMC43NSBDNzUuNSwxNS45MTc1MDg0IDcxLjU4MjQ5MTYsMTIgNjYuNzUsMTIgQzYxLjkxNzUwODQsMTIgNTgsMTUuOTE3NTA4NCA1OCwyMC43NSBDNTgsMjUuNTgyNDkxNiA2MS45MTc1MDg0LDI5LjUgNjYuNzUsMjkuNSBaIE02My43NSwxOSBDNjQuNDQwMzU1OSwxOSA2NSwxOC40NDAzNTU5IDY1LDE3Ljc1IEM2NSwxNy4wNTk2NDQxIDY0LjQ0MDM1NTksMTYuNSA2My43NSwxNi41IEM2My4wNTk2NDQxLDE2LjUgNjIuNSwxNy4wNTk2NDQxIDYyLjUsMTcuNzUgQzYyLjUsMTguNDQwMzU1OSA2My4wNTk2NDQxLDE5IDYzLjc1LDE5IFogTTY5Ljc1LDE5IEM3MC40NDAzNTU5LDE5IDcxLDE4LjQ0MDM1NTkgNzEsMTcuNzUgQzcxLDE3LjA1OTY0NDEgNzAuNDQwMzU1OSwxNi41IDY5Ljc1LDE2LjUgQzY5LjA1OTY0NDEsMTYuNSA2OC41LDE3LjA1OTY0NDEgNjguNSwxNy43NSBDNjguNSwxOC40NDAzNTU5IDY5LjA1OTY0NDEsMTkgNjkuNzUsMTkgWiBNNTkuODg3NjMzNCwyMi4xNjQxNDQ0IEM1OS42MzkwMzE2LDIxLjM4MzEzNCA2MC4wNjU5MTgsMjAuOTc4NTE1NiA2MC44NTMwOTUxLDIxLjIzMjkzMDQgQzYwLjg1MzA5NTEsMjEuMjMyOTMwNCA2My4wOTM3NTAzLDIyLjIxMjUgNjYuNzUwMDAwMSwyMi4yMTI1IEM3MC40MDYyNDk5LDIyLjIxMjUgNzIuNjQ2OTA0NywyMS4yMzI5MzA0IDcyLjY0NjkwNDcsMjEuMjMyOTMwNCBDNzMuNDI4NzE2MiwyMC45NjYyMTUzIDczLjg4MTI0NjMsMjEuNDA0NDA5NyA3My42MDU4NDc3LDIyLjE4MDc0MzcgQzczLjYwNTg0NzcsMjIuMTgwNzQzNyA3Mi42LDI3LjU3NSA2Ni43NSwyNy41NzUgQzYwLjksMjcuNTc1IDU5Ljg4NzYzMzQsMjIuMTY0MTQ0NCA1OS44ODc2MzM0LDIyLjE2NDE0NDQgWiBNNjYuNzUsMjMuMTg3NSBDNjQuMDY4NzUsMjMuMTg3NSA2MS44NTQ0MDU1LDIyLjQ3Mzc4MjEgNjEuODU0NDA1NSwyMi40NzM3ODIxIEM2MS4zMjczMDE5LDIyLjMyOTQ4IDYxLjE3ODEyMzMsMjIuNTcyMTYxNSA2MS41NjM5NTU1LDIyLjk1NzA3NSBDNjEuNTYzOTU1NSwyMi45NTcwNzUgNjIuMzYyNSwyNC42NSA2Ni43NSwyNC42NSBDNzEuMTM3NSwyNC42NSA3MS45NTA4NTAzLDIyLjk0MzgzMDQgNzEuOTUwODUwMywyMi45NDM4MzA0IEM3Mi4zMDkzNjU5LDIyLjUzOTkyNzggNzIuMTY5MDc5MywyMi4zMzU5ODQ0IDcxLjYzNTQyNzMsMjIuNDc2MzQ5IEM3MS42MzU0MjczLDIyLjQ3NjM0OSA2OS40MzEyNSwyMy4xODc1IDY2Ljc1LDIzLjE4NzUgWicgaWQ9J0Vtb2ppJz48L3BhdGg+XG5cdFx0ICAgICAgICAgICAgPC9nPlxuXHRcdCAgICAgICAgPC9nPlxuXHRcdCAgICA8L2c+XG5cdFx0PC9zdmc+XCJcblx0ZW1vamlLZXkuc3R5bGUgPSB7XG5cdFx0XCJwYWRkaW5nLXRvcFwiOiBleHBvcnRzLnB4KDExKSArIFwicHhcIlxuXHRcdFwicGFkZGluZy1sZWZ0XCI6IGV4cG9ydHMucHgoMTEpICsgXCJweFwiXG5cdH1cblxuXHRlbW9qaUZvcm1hdHRlciA9IChzdHJpbmcpIC0+XG5cdFx0dW5pY29kZUZvcm1hdCA9IFwiXCJcblx0XHRpZiBzdHJpbmdbMF0gPT0gXCJFXCIgfHwgc3RyaW5nWzBdID09IFwiM1wiIHx8IHN0cmluZ1swXSA9PSBcIjJcIiB8fCBzdHJpbmdbMF0gPT0gXCJDXCJcblx0XHRcdGFycmF5T2ZDb2RlcyA9IHN0cmluZy5zcGxpdChcIiBcIilcblx0XHRcdGZvciBjb2RlIGluIGFycmF5T2ZDb2Rlc1xuXHRcdFx0XHR1bmljb2RlRm9ybWF0ID0gdW5pY29kZUZvcm1hdCArIFwiJVwiICsgY29kZVxuXHRcdGVsc2UgXG5cdFx0XHRhcnJheU9mQ29kZXMgPSBzdHJpbmcuc3BsaXQoXCIgXCIpXG5cdFx0XHR1bmljb2RlRm9ybWF0ID0gXCIlRjAlOUZcIlxuXHRcdFx0Zm9yIGNvZGUgaW4gYXJyYXlPZkNvZGVzXG5cdFx0XHRcdHVuaWNvZGVGb3JtYXQgPSB1bmljb2RlRm9ybWF0ICsgXCIlXCIgKyBjb2RlXG5cdFx0cmV0dXJuIHVuaWNvZGVGb3JtYXRcblxuXHRleHBvcnRzLmxheW91dCgpXG5cdGVtb2ppU2VjdGlvbnMgPSBbXCJGcmVxdW5ldGx5IFVzZWRcIiwgXCJTbWlsZXlzICYgUGVvcGxlXCIsIFwiQW5pbWFscyAmIE5hdHVyZVwiLCBcIkZvb2QgJiBEcmlua1wiLCBcIkFjdGl2aXR5XCIsIFwiVHJhdmVsICYgUGxhY2VzXCIsIFwiT2JqZWN0c1wiLCBcIlN5bWJvbHNcIiwgXCJGbGFnc1wiXVxuXHRyYXdFbW9qaXMgPSBbXCI5OCA4MFwiLCBcIjk4IEFDXCIsIFwiOTggODFcIiwgXCI5OCA4MlwiLCBcIjk4IDgzXCIsIFwiOTggODRcIiwgXCI5OCA4NVwiLCBcIjk4IDg2XCIsIFwiOTggODdcIiwgXCI5OCA4OVwiLCBcIjk4IDhhXCIsIFwiOTkgODJcIiwgXCI5OSA4M1wiLCBcIkUyIDk4IEJBIEVGIEI4IDhGXCIsIFwiOTggOEJcIiAsIFwiOTggOENcIiwgXCI5OCA4RFwiLCBcIjk4IDk4XCIsIFwiOTggOTdcIiwgXCI5OCA5OVwiLCBcIjk4IDlBXCIsIFwiOTggOUNcIiwgXCI5OCA5RFwiLCBcIjk4IDlCXCIsIFwiQTQgOTFcIiwgXCJBNCA5M1wiLCBcIjk4IDhFXCIsIFwiQTQgOTdcIiwgXCI5OCA4RlwiLCBcIjk4IEI2XCIsIFwiOTggOTBcIiwgXCI5OCA5MVwiLCBcIjk4IDkyXCIsIFwiOTkgODRcIiwgXCJBNCA5NFwiLCBcIjk4IEIzXCIsIFwiOTggOUVcIiwgXCI5OCA5RlwiLCBcIjk4IEEwXCIsIFwiOTggQTFcIiwgXCI5OCA5NFwiLCBcIjk4IDk1XCIsIFwiOTkgODFcIiwgXCJFMiA5OCBCOSBFRiBCOCA4RlwiLCBcIjk4IEEzXCIsIFwiOTggOTZcIiwgXCI5OCBBQlwiLCBcIjk4IEE5XCIsIFwiOTggQTRcIiwgXCI5OCBBRVwiLCBcIjk4IEIxXCIsIFwiOTggQThcIiwgXCI5OCBCMFwiLCBcIjk4IEFGXCIsIFwiOTggQTZcIiwgXCI5OCBBN1wiLCBcIjk4IEEyXCIsIFwiOTggQTVcIiwgXCI5OCBBQVwiLCBcIjk4IDkzXCIsIFwiOTggQURcIiwgXCI5OCBCNVwiLCBcIjk4IEIyXCIsIFwiQTQgOTBcIiwgXCI5OCBCN1wiLCBcIkE0IDkyXCIsIFwiQTQgOTVcIiwgXCI5OCBCNFwiLCBcIjkyIEE0XCIsIFwiOTIgQTlcIiwgXCI5OCA4OFwiLCBcIjkxIEJGXCIsIFwiOTEgQjlcIiwgXCI5MSBCQVwiLCBcIjkyIDgwXCIsIFwiOTEgQkJcIiwgXCI5MSBCRFwiLCBcIkE0IDk2XCIsIFwiOTggQkFcIiwgXCI5OCBCOFwiLCBcIjk4IEI5XCIsIFwiOTggQkJcIiwgXCI5OCBCQ1wiLCBcIjk4IEJEXCIsIFwiOTkgODBcIiwgXCI5OCBCRlwiLCBcIjk4IEJFXCIsIFwiOTkgOENcIiwgXCI5MSA4RlwiLCBcIjkxIDhCXCIsIFwiOTEgOERcIiwgXCI5MSA4RVwiLCBcIjkxIDhBXCIsIFwiRTIgOUMgOEFcIiwgXCJFMiA5QyA4QyBFRiBCOCA4RlwiLCBcIjkxIDhDXCIsIFwiRTIgOUMgOEJcIiwgXCI5MSA5MFwiLCBcIjkyIEFBXCIsIFwiOTkgOEZcIiwgXCJFMiA5OCA5RCBFRiBCOCA4RlwiLCBcIjkxIDg2XCIsIFwiOTEgODdcIiwgXCI5MSA4OFwiLCBcIjkxIDg5XCIsIFwiOTYgOTVcIiwgXCI5NiA5MFwiLCBcIkE0IDk4XCIsIFwiOTYgOTZcIiwgXCJFMiA5QyA4RCBFRiBCOCA4RlwiLCBcIjkyIDg1XCIsIFwiOTEgODRcIiwgXCI5MSA4NVwiLCBcIjkxIDgyXCIsIFwiOTEgODNcIiwgXCI5MSA4MVwiLCBcIjkxIDgwXCIsIFwiOTEgQTRcIiwgXCI5MSBBNVwiLCBcIjk3IEEzXCIsIFwiOTEgQjZcIiwgXCI5MSBBNlwiLCBcIjkxIEE3XCIsIFwiOTEgQThcIiwgXCI5MSBBOVwiLCBcIjkxIEIxXCIsIFwiOTEgQjRcIiwgXCI5MSBCNVwiLCBcIjkxIEIyXCIsIFwiOTEgQjNcIiwgXCI5MSBBRVwiLCBcIjkxIEI3XCIsIFwiOTIgODJcIiwgXCI5NSBCNVwiLCBcIjhFIDg1XCIsIFwiOTEgQkNcIiwgXCI5MSBCOFwiLCBcIjkxIEIwXCIsIFwiOUEgQjZcIiwgXCI4RiA4M1wiLCBcIjkyIDgzXCIsIFwiOTEgQUZcIiwgXCI5MSBBQlwiLCBcIjkxIEFDXCIsIFwiOTEgQURcIiwgXCI5OSA4N1wiLCBcIjkyIDgxXCIsIFwiOTkgODVcIiwgXCI5OSA4NlwiLCBcIjk5IDhCXCIsIFwiOTkgOEVcIiwgXCI5OSA4RFwiLCBcIjkyIDg3XCIsIFwiOTIgODZcIiwgXCI5MiA5MVwiLCBcIjkxIEE5IEUyIDgwIDhEIEUyIDlEIEE0IEVGIEI4IDhGIEUyIDgwIDhEIEYwIDlGIDkxIEE5XCIsIFwiOTEgQTggRTIgODAgOEQgRTIgOUQgQTQgRUYgQjggOEYgRTIgODAgOEQgRjAgOUYgOTEgQThcIiwgXCI5MiA4RlwiLCBcIjkxIEE5IEUyIDgwIDhEIEUyIDlEIEE0IEVGIEI4IDhGIEUyIDgwIDhEIEYwIDlGIDkyIDhCIEUyIDgwIDhEIEYwIDlGIDkxIEE5XCIsIFwiOTEgQTggRTIgODAgOEQgRTIgOUQgQTQgRUYgQjggOEYgRTIgODAgOEQgRjAgOUYgOTIgOEIgRTIgODAgOEQgRjAgOUYgOTEgQThcIiwgXCI5MSBBQVwiLCBcIjkxIEE4IEUyIDgwIDhEIEYwIDlGIDkxIEE5IEUyIDgwIDhEIEYwIDlGIDkxIEE3XCIsIFwiOTEgQTggRTIgODAgOEQgRjAgOUYgOTEgQTkgRTIgODAgOEQgRjAgOUYgOTEgQTcgRTIgODAgOEQgRjAgOUYgOTEgQTZcIiwgXCI5MSBBOCBFMiA4MCA4RCBGMCA5RiA5MSBBOSBFMiA4MCA4RCBGMCA5RiA5MSBBNiBFMiA4MCA4RCBGMCA5RiA5MSBBNlwiLCBcIjkxIEE4IEUyIDgwIDhEIEYwIDlGIDkxIEE5IEUyIDgwIDhEIEYwIDlGIDkxIEE3IEUyIDgwIDhEIEYwIDlGIDkxIEE3XCIsIFwiOTEgQTkgRTIgODAgOEQgRjAgOUYgOTEgQTkgRTIgODAgOEQgRjAgOUYgOTEgQTZcIiwgXCI5MSBBOSBFMiA4MCA4RCBGMCA5RiA5MSBBOSBFMiA4MCA4RCBGMCA5RiA5MSBBN1wiLCBcIjkxIEE5IEUyIDgwIDhEIEYwIDlGIDkxIEE5IEUyIDgwIDhEIEYwIDlGIDkxIEE3IEUyIDgwIDhEIEYwIDlGIDkxIEE2XCIsIFwiOTEgQTkgRTIgODAgOEQgRjAgOUYgOTEgQTkgRTIgODAgOEQgRjAgOUYgOTEgQTYgRTIgODAgOEQgRjAgOUYgOTEgQTZcIiwgXCI5MSBBOSBFMiA4MCA4RCBGMCA5RiA5MSBBOSBFMiA4MCA4RCBGMCA5RiA5MSBBNyBFMiA4MCA4RCBGMCA5RiA5MSBBN1wiLCBcIjkxIEE4IEUyIDgwIDhEIEYwIDlGIDkxIEE4IEUyIDgwIDhEIEYwIDlGIDkxIEE2XCIsIFwiOTEgQTggRTIgODAgOEQgRjAgOUYgOTEgQTggRTIgODAgOEQgRjAgOUYgOTEgQTdcIiwgXCI5MSBBOCBFMiA4MCA4RCBGMCA5RiA5MSBBOCBFMiA4MCA4RCBGMCA5RiA5MSBBNyBFMiA4MCA4RCBGMCA5RiA5MSBBNlwiLCBcIjkxIEE4IEUyIDgwIDhEIEYwIDlGIDkxIEE4IEUyIDgwIDhEIEYwIDlGIDkxIEE2IEUyIDgwIDhEIEYwIDlGIDkxIEE2XCIsIFwiOTEgQTggRTIgODAgOEQgRjAgOUYgOTEgQTggRTIgODAgOEQgRjAgOUYgOTEgQTcgRTIgODAgOEQgRjAgOUYgOTEgQTdcIiwgXCI5MSA5QVwiLCBcIjkxIDk1XCIsIFwiOTEgOTZcIiwgXCI5MSA5NFwiLCBcIjkxIDk3XCIsIFwiOTEgOTlcIiwgXCI5MSA5OFwiLCBcIjkyIDg0XCIsIFwiOTIgOEJcIiwgXCI5MSBBM1wiLCBcIjkxIEEwXCIsIFwiOTEgQTFcIiwgXCI5MSBBMlwiLCBcIjkxIDlFXCIsIFwiOTEgOUZcIiwgXCI5MSA5MlwiLCBcIjhFIEE5XCIsIFwiRTIgOUIgOTFcIiwgXCI4RSA5M1wiLCBcIjkxIDkxXCIsIFwiOEUgOTJcIiwgXCI5MSA5RFwiLCBcIjkxIDlCXCIsIFwiOTEgOUNcIiwgXCI5MiBCQ1wiLCBcIjkxIDkzXCIsIFwiOTUgQjZcIiwgXCI5MiA4RFwiLCBcIjhDIDgyXCIsIFwiOUIgOTFcIiwgXCI5MCBCNlwiLCBcIjkwIEIxXCIsIFwiOTAgQURcIiwgXCI5MCBCOVwiLCBcIjkwIEIwXCIsIFwiOTAgQkJcIiwgXCI5MCBCQ1wiLCBcIjkwIEE4XCIsIFwiOTAgQUZcIiwgXCJBNiA4MVwiLCBcIjkwIEFFXCIsIFwiOTAgQjdcIiwgXCI5MCBCRFwiLCBcIjkwIEI4XCIsIFwiOTAgOTlcIiwgXCI5MCBCNVwiLCBcIjk5IDg4XCIsIFwiOTkgODlcIiwgXCI5OSA4QVwiLCBcIjkwIDkyXCIsIFwiOTAgOTRcIiwgXCI5MCBBN1wiLCBcIjkwIEE2XCIsIFwiOTAgQTRcIiwgXCI5MCBBM1wiLCBcIjkwIEE1XCIsIFwiOTAgQkFcIiwgXCI5MCA5N1wiLCBcIjkwIEI0XCIsIFwiQTYgODRcIiwgXCI5MCA5RFwiLCBcIjkwIDlCXCIsIFwiOTAgOENcIiwgXCI5MCA5RVwiLCBcIjkwIDlDXCIsIFwiOTUgQjdcIiwgXCJBNiA4MlwiLCBcIkE2IDgwXCIsIFwiOTAgOERcIiwgXCI5MCBBMlwiLCBcIjkwIEEwXCIsIFwiOTAgOUZcIiwgXCI5MCBBMVwiLCBcIjkwIEFDXCIsIFwiOTAgQjNcIiwgXCI5MCA4QlwiLCBcIjkwIDhBXCIsIFwiOTAgODZcIiwgXCI5MCA4NVwiLCBcIjkwIDgzXCIsIFwiOTAgODJcIiwgXCI5MCA4NFwiLCBcIjkwIEFBXCIsIFwiOTAgQUJcIiwgXCI5MCA5OFwiLCBcIjkwIDkwXCIsIFwiOTAgOEZcIiwgXCI5MCA5MVwiLCBcIjkwIDhFXCIsIFwiOTAgOTZcIiwgXCI5MCA4MFwiLCBcIjkwIDgxXCIsIFwiOTAgOTNcIiwgXCJBNiA4M1wiLCBcIjk1IDhBXCIsIFwiOTAgOTVcIiwgXCI5MCBBOVwiLCBcIjkwIDg4XCIsIFwiOTAgODdcIiwgXCI5MCBCRlwiLCBcIjkwIEJFXCIsIFwiOTAgODlcIiwgXCI5MCBCMlwiLCBcIjhDIEI1XCIsIFwiOEUgODRcIiwgXCI4QyBCMlwiLCBcIjhDIEIzXCIsIFwiOEMgQjRcIiwgXCI4QyBCMVwiLCBcIjhDIEJGXCIsIFwiRTIgOTggOThcIiwgXCI4RCA4MFwiLCBcIjhFIDhEXCIsIFwiOEUgOEJcIiwgXCI4RCA4M1wiLCBcIjhEIDgyXCIsIFwiOEQgODFcIiwgXCI4QyBCRVwiLCBcIjhDIEJBXCIsIFwiOEMgQkFcIiwgXCI4QyBCQlwiLCBcIjhDIEI5XCIsIFwiOEMgQjdcIiwgXCI4QyBCQ1wiLCBcIjhDIEI4XCIsIFwiOTIgOTBcIiwgXCI4RCA4NFwiLCBcIjhDIEIwXCIsIFwiOEUgODNcIiwgXCI5MCA5QVwiLCBcIjk1IEI4XCIsIFwiOEMgOEVcIiwgXCI4QyA4RFwiLCBcIjhDIDhGXCIsIFwiOEMgOTVcIiwgXCI4QyA5NlwiLCBcIjhDIDk3XCIsIFwiOEMgOThcIiwgXCI4QyA5MVwiLCBcIjhDIDkyXCIsIFwiOEMgOTNcIiwgXCI4QyA5NFwiLCBcIjhDIDlBXCIsIFwiOEMgOURcIiwgXCI4QyA5QlwiLCBcIjhDIDlDXCIsIFwiOEMgOUVcIiwgXCI4QyA5OVwiLCBcIkUyIEFEIDkwIEVGIEI4IDhGXCIsIFwiOEMgOUZcIiwgXCI5MiBBQlwiLCBcIkUyIDlDIEE4XCIsIFwiRTIgOTggODQgRUYgQjggOEZcIiwgXCJFMiA5OCA4MCBFRiBCOCA4RlwiLCBcIjhDIEE0XCIsIFwiRTIgOUIgODUgRUYgQjggOEZcIiwgXCI4QyBBNVwiLCBcIjhDIEE2XCIsIFwiRTIgOTggODEgRUYgQjggOEZcIiwgXCI4QyBBN1wiLCBcIkUyIDlCIDg4XCIsIFwiOEMgQTlcIiwgXCJFMiA5QSBBMSBFRiBCOCA4RlwiLCBcIjk0IEE1XCIsIFwiOTIgQTVcIiwgXCJFMiA5RCA4NCBFRiBCOCA4RlwiLCBcIjhDIEE4XCIsIFwiRTIgOTggODMgRUYgQjggOEZcIiwgXCJFMiA5QiA4NCBFRiBCOCA4RlwiLCBcIjhDIEFDXCIsIFwiOTIgQThcIiwgXCI4QyBBQVwiLCBcIjhDIEFCXCIsIFwiRTIgOTggODIgRUYgQjggOEZcIiwgXCJFMiA5OCA5NCBFRiBCOCA4RlwiLCBcIjkyIEE3XCIsIFwiOTIgQTZcIiwgXCI4QyA4QVwiLCBcIjlCIDkxXCIsIFwiOUIgOTFcIiwgXCI4RCA4RlwiLCBcIjhEIDhFXCIsIFwiOEQgOTBcIiwgXCI4RCA4QVwiLCBcIjhEIDhCXCIsIFwiOEQgOENcIiwgXCI4RCA4OVwiLCBcIjhEIDg3XCIsIFwiOEQgOTNcIiwgXCI4RCA4OFwiLCBcIjhEIDkyXCIsIFwiOEQgOTFcIiwgXCI4RCA4RFwiLCBcIjhEIDg1XCIsIFwiOEQgODZcIiwgXCI4QyBCNlwiLCBcIjhDIEJEXCIsIFwiOEQgQTBcIiwgXCI4RCBBRlwiLCBcIjhEIDlFXCIsIFwiQTcgODBcIiwgXCI4RCA5N1wiLCBcIjhEIDk2XCIsIFwiOEQgQTRcIiwgXCI4RCBCM1wiLCBcIjhEIDk0XCIsIFwiOEQgOUZcIiwgXCI4QyBBRFwiLCBcIjhEIDk1XCIsIFwiOEQgOURcIiwgXCI4QyBBRVwiLCBcIjhDIEFGXCIsIFwiOEQgOUNcIiwgXCI4RCBCMlwiLCBcIjhEIEE1XCIsIFwiOEQgQTNcIiwgXCI4RCBCMVwiLCBcIjhEIDlCXCIsIFwiOEQgOTlcIiwgXCI4RCA5QVwiLCBcIjhEIDk4XCIsIFwiOEQgQTJcIiwgXCI4RCBBMVwiLCBcIjhEIEE3XCIsIFwiOEQgQThcIiwgXCI4RCBBNlwiLCBcIjhEIEIwXCIsIFwiOEUgODJcIiwgXCI4RCBBRVwiLCBcIjhEIEFDXCIsIFwiOEQgQURcIiwgXCI4RCBBQlwiLCBcIjhEIEJGXCIsIFwiOEQgQTlcIiwgXCI4RCBBQVwiLCBcIjhEIEJBXCIsIFwiOEQgQkJcIiwgXCI4RCBCN1wiLCBcIjhEIEI4XCIsIFwiOEQgQjlcIiwgXCI4RCBCRVwiLCBcIjhEIEI2XCIsIFwiOEQgQjVcIiwgXCJFMiA5OCA5NSBFRiBCOCA4RlwiLCBcIjhEIEJDXCIsIFwiOEQgQjRcIiwgXCI4RCBCRFwiLFwiOUIgOTFcIiwgXCI5QiA5MVwiLCBcIjlCIDkxXCIsIFwiRTIgOUEgQkQgRUYgQjggOEZcIiwgXCI4RiA4MFwiLCBcIjhGIDg4XCIsIFwiRTIgOUEgQkUgRUYgQjggOEZcIiwgXCI4RSBCRVwiLCBcIjhGIDkwXCIsIFwiOEYgODlcIiwgXCI4RSBCMVwiLCBcIkUyIDlCIEIzIEVGIEI4IDhGXCIsIFwiOEYgOENcIiwgXCI4RiA5M1wiLCBcIjhGIEI4XCIsIFwiOEYgOTJcIiwgXCI4RiA5MVwiLCBcIjhGIDhGXCIsIFwiOEUgQkZcIiwgXCJFMiA5QiBCN1wiLCBcIjhGIDgyXCIsIFwiRTIgOUIgQjhcIiwgXCI4RiBCOVwiLCBcIjhFIEEzXCIsIFwiOUEgQTNcIiwgXCI4RiA4QVwiLCBcIjhGIDg0XCIsIFwiOUIgODBcIiwgXCJFMiA5QiBCOVwiLCBcIjhGIDhCXCIsIFwiOUEgQjRcIiwgXCI5QSBCNVwiLCBcIjhGIDg3XCIsIFwiOTUgQjRcIiwgXCI4RiA4NlwiLCBcIjhFIEJEXCIsIFwiOEYgODVcIiwgXCI4RSA5NlwiLCBcIjhFIDk3XCIsIFwiOEYgQjVcIiwgXCI4RSBBQlwiLCBcIjhFIDlGXCIsIFwiOEUgQURcIiwgXCI4RSBBOFwiLCBcIjhFIEFBXCIsIFwiOEUgQTRcIiwgXCI4RSBBN1wiLCBcIjhFIEJDXCIsIFwiOEUgQjlcIiwgXCI4RSBCN1wiLCBcIjhFIEJBXCIsIFwiOEUgQjhcIiwgXCI4RSBCQlwiLCBcIjhFIEFDXCIsIFwiOEUgQUVcIiwgXCI5MSBCRVwiLCBcIjhFIEFGXCIsIFwiOEUgQjJcIiwgXCI4RSBCMFwiLCBcIjhFIEIzXCIsIFwiOUIgOTFcIiwgXCI5QiA5MVwiLCBcIjlCIDkxXCIsIFwiOUEgOTdcIiwgXCI5QSA5NVwiLCBcIjlBIDk5XCIsIFwiOUEgOENcIiwgXCI5QSA4RVwiLCBcIjhGIDhFXCIsIFwiOUEgOTNcIiwgXCI5QSA5MVwiLCBcIjlBIDkyXCIsIFwiOUEgOTBcIiwgXCI5QSA5QVwiLCBcIjlBIDlCXCIsIFwiOUEgOUNcIixcIjhGIDhEXCIsIFwiOUEgQjJcIiwgXCI5QSBBOFwiLCBcIjlBIDk0XCIsIFwiOUEgOERcIiwgXCI5QSA5OFwiLCBcIjlBIDk2XCIsIFwiOUEgQTFcIiwgXCI5QSBBMFwiLCBcIjlBIEFGXCIsIFwiOUEgODNcIiwgXCI5QSA4QlwiLCBcIjlBIDlEXCIsIFwiOUEgODRcIiwgXCI5QSA4NVwiLCBcIjlBIDg4XCIsIFwiOUEgOUVcIiwgXCI5QSA4MlwiLCBcIjlBIDg2XCIsIFwiOUEgODdcIiwgXCI5QSA4QVwiLCBcIjlBIDg5XCIsIFwiOUEgODFcIiwgXCI5QiBBOVwiLCBcIkUyIDlDIDg4IEVGIEI4IDhGXCIsIFwiOUIgQUJcIiwgXCI5QiBBQ1wiLCBcIkUyIDlCIEI1IEVGIEI4IDhGXCIsIFwiOUIgQTVcIiwgXCI5QSBBNFwiLCBcIkUyIDlCIEI0XCIsIFwiOUIgQjNcIiwgXCI5QSA4MFwiLCBcIjlCIEIwXCIsIFwiOTIgQkFcIiwgXCJFMiA5QSA5MyBFRiBCOCA4RlwiLCBcIjlBIEE3XCIsIFwiRTIgOUIgQkQgRUYgQjggOEZcIiwgXCI5QSA4RlwiLCBcIjlBIEE2XCIsIFwiOUEgQTVcIiwgXCI4RiA4MVwiLCBcIjlBIEEyXCIsIFwiOEUgQTFcIiwgXCI4RSBBMlwiLCBcIjhFIEEwXCIsIFwiOEYgOTdcIiwgXCI4QyA4MVwiLCBcIjk3IEJDXCIsIFwiOEYgQURcIiwgXCJFMiA5QiBCMiBFRiBCOCA4RlwiLCBcIjhFIDkxXCIsIFwiRTIgOUIgQjBcIiwgXCI4RiA5NFwiLCBcIjk3IEJCXCIsIFwiOEMgOEJcIiwgXCI5NyBCRVwiLCBcIjhGIDk1XCIsIFwiRTIgOUIgQkEgRUYgQjggOEZcIiwgXCI4RiA5RVwiLCBcIjlCIEEzXCIsIFwiOUIgQTRcIiwgXCI4QyA4NVwiLCBcIjhDIDg0XCIsIFwiOEYgOUNcIiwgXCI4RiA5NlwiLCBcIjhGIDlEXCIsIFwiOEMgODdcIiwgXCI4QyA4NlwiLCBcIjhGIDk5XCIsIFwiOEMgODNcIiwgXCI4QyA4OVwiLCBcIjhDIDhDXCIsIFwiOEMgQTBcIiwgXCI4RSA4N1wiLCBcIjhFIDg2XCIsIFwiOEMgODhcIiwgXCI4RiA5OFwiLCBcIjhGIEIwXCIsIFwiOEYgQUZcIiwgXCI4RiA5RlwiLCBcIjk3IEJEXCIsIFwiOEYgQTBcIiwgXCI4RiBBMVwiLCBcIjhGIDlBXCIsIFwiOEYgQTJcIiwgXCI4RiBBQ1wiLCBcIjhGIEEzXCIsIFwiOEYgQTRcIiwgXCI4RiBBNVwiLCBcIjhGIEE2XCIsIFwiOEYgQThcIiwgXCI4RiBBQVwiLCBcIjhGIEFCXCIsIFwiOEYgQTlcIiwgXCI5MiA5MlwiLCBcIjhGIDlCXCIsIFwiRTIgOUIgQUEgRUYgQjggOEZcIiwgXCI5NSA4Q1wiLCBcIjk1IDhEXCIsIFwiOTUgOEJcIiwgXCJFMiA5QiBBOVwiLCBcIkUyIDhDIDlBIEVGIEI4IDhGXCIsIFwiOTMgQjFcIiwgXCI5MyBCMlwiLCBcIjkyIEJCXCIsIFwiRTIgOEMgQTggRUYgQjggOEZcIiwgXCI5NiBBNVwiLCBcIjk2IEE4XCIsIFwiOTYgQjFcIiwgXCI5NiBCMlwiLCBcIjk1IEI5XCIsIFwiOTcgOUNcIiwgXCI5MiBCRFwiLCBcIjkyIEJFXCIsIFwiOTIgQkZcIiwgXCI5MyA4MFwiLCBcIjkzIEJDXCIsIFwiOTMgQjdcIiwgXCI5MyBCOFwiLCBcIjkzIEI5XCIsIFwiOEUgQTVcIiwgXCI5MyBCRFwiLCBcIjhFIDlFXCIsIFwiOTMgOUVcIiwgXCJFMiA5OCA4RSBFRiBCOCA4RlwiLCBcIjkzIDlGXCIsIFwiOTMgQTBcIiwgXCI5MyBCQVwiLCBcIjkzIEJCXCIsIFwiOEUgOTlcIiwgXCI4RSA5QVwiLCBcIjhFIDlCXCIsIFwiRTIgOEYgQjFcIiwgXCJFMiA4RiBCMlwiLCBcIkUyIDhGIEIwXCIsIFwiOTUgQjBcIiwgXCJFMiA4RiBCM1wiLCBcIkUyIDhDIDlCIEVGIEI4IDhGXCIsIFwiOTMgQTFcIiwgXCI5NCA4QlwiLCBcIjk0IDhDXCIsIFwiOTIgQTFcIiwgXCI5NCBBNlwiLCBcIjk1IEFGXCIsIFwiOTcgOTFcIiwgXCI5QiBBMlwiLCBcIjkyIEI4XCIsIFwiOTIgQjVcIiwgXCI5MiBCNFwiLCBcIjkyIEI2XCIsIFwiOTIgQjdcIiwgXCI5MiBCMFwiLCBcIjkyIEIzXCIsIFwiOTIgOEVcIiwgXCJFMiA5QSA5NlwiLCBcIjk0IEE3XCIsIFwiOTQgQThcIiwgXCJFMiA5QSA5MlwiLCBcIjlCIEEwXCIsIFwiRTIgOUIgOEZcIiwgXCI5NCBBOVwiLCBcIkUyIDlBIDk5XCIsIFwiRTIgOUIgOTNcIiwgXCI5NCBBQlwiLCBcIjkyIEEzXCIsIFwiOTQgQUFcIiwgXCI5NyBBMVwiLCBcIkUyIDlBIDk0XCIsIFwiOUIgQTFcIiwgXCI5QSBBQ1wiLCBcIkUyIDk4IEEwIEVGIEI4IDhGXCIsIFwiRTIgOUEgQjBcIiwgXCJFMiA5QSBCMVwiLCBcIjhGIEJBXCIsIFwiOTQgQUVcIiwgXCI5MyBCRlwiLCBcIjkyIDg4XCIsIFwiRTIgOUEgOTdcIiwgXCI5NCBBRFwiLCBcIjk0IEFDXCIsIFwiOTUgQjNcIiwgXCI5MiA4QVwiLCBcIjkyIDg5XCIsIFwiOEMgQTFcIiwgXCI4RiBCN1wiLCBcIjk0IDk2XCIsIFwiOUEgQkRcIiwgXCI5QSBCRlwiLCBcIjlCIDgxXCIsIFwiOTQgOTFcIiwgXCI5NyA5RFwiLCBcIjlCIDhCXCIsIFwiOUIgOENcIiwgXCI5QiA4RlwiLCBcIjlBIEFBXCIsIFwiOUIgOEVcIiwgXCI5NiBCQ1wiLCBcIjk3IEJBXCIsIFwiRTIgOUIgQjFcIiwgXCI5NyBCRlwiLCBcIjlCIDhEXCIsIFwiOEUgODhcIiwgXCI4RSA4RlwiLCBcIjhFIDgwXCIsIFwiOEUgODFcIiwgXCI4RSA4QVwiLCBcIjhFIDg5XCIsIFwiOEUgOEVcIiwgXCI4RSA5MFwiLCBcIjhFIDhDXCIsIFwiOEYgQUVcIiwgXCJFMiA5QyA4OSBFRiBCOCA4RlwiLCBcIjkzIEE5XCIsIFwiOTMgQThcIiwgXCI5MyBBN1wiLCBcIjkyIDhDXCIsIFwiOTMgQUVcIiwgXCI5MyBBQVwiLCBcIjkzIEFCXCIsIFwiOTMgQUNcIiwgXCI5MyBBRFwiLCBcIjkzIEE2XCIsIFwiOTMgQUZcIiwgXCI5MyBBNVwiLCBcIjkzIEE0XCIsIFwiOTMgOUNcIiwgXCI5MyA4M1wiLCBcIjkzIDkxXCIsIFwiOTMgOEFcIiwgXCI5MyA4OFwiLCBcIjkzIDg5XCIsIFwiOTMgODRcIiwgXCI5MyA4NVwiLCBcIjkzIDg2XCIsIFwiOTcgOTNcIiwgXCI5MyA4N1wiLCBcIjk3IDgzXCIsIFwiOTcgQjNcIiwgXCI5NyA4NFwiLCBcIjkzIDhCXCIsIFwiOTcgOTJcIiwgXCI5MyA4MVwiLCBcIjkzIDgyXCIsIFwiOTcgODJcIiwgXCI5NyA5RVwiLCBcIjkzIEIwXCIsIFwiOTMgOTNcIiwgXCI5MyA5NVwiLCBcIjkzIDk3XCIsIFwiOTMgOThcIiwgXCI5MyA5OVwiLCBcIjkzIDk0XCIsIFwiOTMgOTJcIiwgXCI5MyA5QVwiLCBcIjkzIDk2XCIsIFwiOTQgOTdcIiwgXCI5MyA4RVwiLCBcIjk2IDg3XCIsIFwiRTIgOUMgODIgRUYgQjggOEZcIiwgXCI5MyA5MFwiLCBcIjkzIDhGXCIsIFwiOTMgOENcIiwgXCI5MyA4RFwiLCBcIjlBIEE5XCIsIFwiOEYgQjNcIiwgXCI4RiBCNFwiLCBcIjk0IDkwXCIsIFwiOTQgOTJcIiwgXCI5NCA5M1wiLCBcIjk0IDhGXCIsIFwiOTYgOEFcIiwgXCI5NiA4QlwiLCBcIkUyIDlDIDkyIEVGIEI4IDhGXCIsIFwiOTMgOURcIiwgXCJFMiA5QyA4RiBFRiBCOCA4RlwiLCBcIjk2IDhEXCIsIFwiOTYgOENcIiwgXCI5NCA4RFwiLCBcIjk0IDhFXCIsIFwiOUIgOTFcIiwgXCI5QiA5MVwiLCBcIkUyIDlEIEE0IEVGIEI4IDhGXCIsIFwiOTIgOUJcIiwgXCI5MiA5QVwiLCBcIjkyIDk5XCIsIFwiOTIgOUNcIiwgXCI5MiA5NFwiLCBcIkUyIDlEIEEzIEVGIEI4IDhGXCIsIFwiOTIgOTVcIiwgXCI5MiA5RVwiLCBcIjkyIDkzXCIsIFwiOTIgOTdcIiwgXCI5MiA5NlwiLCBcIjkyIDk4XCIsIFwiOTIgOURcIiwgXCI5MiA5RlwiLCBcIkUyIDk4IEFFIEVGIEI4IDhGXCIsIFwiRTIgOUMgOUQgRUYgQjggOEZcIiwgXCJFMiA5OCBBQSBFRiBCOCA4RlwiLCBcIjk1IDg5XCIsIFwiRTIgOTggQjggRUYgQjggOEZcIiwgXCJFMiA5QyBBMSBFRiBCOCA4RlwiLCBcIjk0IEFGXCIsIFwiOTUgOEVcIiwgXCJFMiA5OCBBRiBFRiBCOCA4RlwiLCBcIkUyIDk4IEE2IEVGIEI4IDhGXCIsIFwiOUIgOTBcIiwgXCJFMiA5QiA4RVwiLCBcIkUyIDk5IDg4IEVGIEI4IDhGXCIsIFwiRTIgOTkgODkgRUYgQjggOEZcIiwgXCJFMiA5OSA4QSBFRiBCOCA4RlwiLCBcIkUyIDk5IDhCIEVGIEI4IDhGXCIsIFwiRTIgOTkgOEMgRUYgQjggOEZcIiwgXCJFMiA5OSA4RCBFRiBCOCA4RlwiLCBcIkUyIDk5IDhFIEVGIEI4IDhGXCIsIFwiRTIgOTkgOEYgRUYgQjggOEZcIiwgXCJFMiA5OSA5MCBFRiBCOCA4RlwiLCBcIkUyIDk5IDkxIEVGIEI4IDhGXCIsIFwiRTIgOTkgOTIgRUYgQjggOEZcIiwgXCJFMiA5OSA5MyBFRiBCOCA4RlwiLCBcIjg2IDk0XCIsIFwiRTIgOUEgOUJcIiwgXCI4OCBCM1wiLCBcIjg4IEI5XCIsIFwiRTIgOTggQTIgRUYgQjggOEZcIiwgXCJFMiA5OCBBMyBFRiBCOCA4RlwiLCBcIjkzIEI0XCIsIFwiOTMgQjNcIiwgXCI4OCBCNlwiLCBcIjg4IDlBIEVGIEI4IDhGXCIsIFwiODggQjhcIiwgXCI4OCBCQVwiLCBcIjg4IEI3IEVGIEI4IDhGXCIsIFwiRTIgOUMgQjQgRUYgQjggOEZcIiwgXCI4NiA5QVwiLCBcIjg5IDkxXCIsIFwiOTIgQUVcIiwgXCI4OSA5MFwiLCBcIkUzIDhBIDk5IEVGIEI4IDhGXCIsIFwiRTMgOEEgOTcgRUYgQjggOEZcIiwgXCI4OCBCNFwiLCBcIjg4IEI1XCIsIFwiODggQjJcIiwgXCI4NSBCMCBFRiBCOCA4RlwiLCBcIjg1IEIxIEVGIEI4IDhGXCIsIFwiODYgOEVcIiwgXCI4NiA5MVwiLCBcIjg1IEJFIEVGIEI4IDhGXCIsIFwiODYgOThcIiwgXCJFMiA5QiA5NCBFRiBCOCA4RlwiLCBcIjkzIDlCXCIsIFwiOUEgQUJcIiwgXCJFMiA5RCA4Q1wiLCBcIkUyIEFEIDk1IEVGIEI4IDhGXCIsIFwiOTIgQTJcIiwgXCJFMiA5OSBBOCBFRiBCOCA4RlwiLCBcIjlBIEI3XCIsIFwiOUEgQUZcIiwgXCI5QSBCM1wiLCBcIjlBIEIxXCIsIFwiOTQgOUVcIiwgXCI5MyBCNVwiLCBcIkUyIDlEIDk3IEVGIEI4IDhGXCIsIFwiRTIgOUQgOTVcIiwgXCJFMiA5RCA5M1wiLCBcIkUyIDlEIDk0XCIsIFwiRTIgODAgQkMgRUYgQjggOEZcIiwgXCJFMiA4MSA4OSBFRiBCOCA4RlwiLCBcIjkyIEFGXCIsIFwiOTQgODVcIiwgXCI5NCA4NlwiLCBcIjk0IEIxXCIsIFwiRTIgOUEgOUNcIiwgXCJFMyA4MCBCRCBFRiBCOCA4RlwiLCBcIkUyIDlBIEEwIEVGIEI4IDhGXCIsIFwiOUEgQjhcIiwgXCI5NCBCMFwiLCBcIkUyIDk5IEJCIEVGIEI4IDhGXCIsIFwiODggQUYgRUYgQjggOEZcIiwgXCI5MiBCOVwiLCBcIkUyIDlEIDg3IEVGIEI4IDhGXCIsIFwiRTIgOUMgQjMgRUYgQjggOEZcIiwgXCJFMiA5RCA4RVwiLCBcIkUyIDlDIDg1XCIsIFwiOTIgQTBcIiwgXCI4QyA4MFwiLCBcIkUyIDlFIEJGXCIsIFwiOEMgOTBcIiwgXCJFMiA5MyA4MiBFRiBCOCA4RlwiLCBcIjhGIEE3XCIsIFwiODggODIgRUYgQjggOEZcIiwgXCI5QiA4MlwiLCBcIjlCIDgzXCIsIFwiOUIgODRcIiwgXCI5QiA4NVwiLCBcIkUyIDk5IEJGIEVGIEI4IDhGXCIsIFwiOUEgQURcIiwgXCI5QSBCRVwiLCBcIjg1IEJGIEVGIEI4IDhGXCIsIFwiOUEgQjBcIiwgXCI5QSBCOVwiLCBcIjlBIEJBXCIsIFwiOUEgQkNcIiwgXCI5QSBCQlwiLCBcIjlBIEFFXCIsIFwiOEUgQTZcIiwgXCI5MyBCNlwiLCBcIjg4IDgxXCIsIFwiODYgOTZcIiwgXCI4NiA5N1wiLCBcIjg2IDk5XCIsIFwiODYgOTJcIiwgXCI4NiA5NVwiLCBcIjg2IDkzXCIsIFwiMzAgRUYgQjggOEYgRTIgODMgQTNcIiwgXCIzMSBFRiBCOCA4RiBFMiA4MyBBM1wiLCBcIjMyIEVGIEI4IDhGIEUyIDgzIEEzXCIsIFwiMzMgRUYgQjggOEYgRTIgODMgQTNcIiwgXCIzNCBFRiBCOCA4RiBFMiA4MyBBM1wiLCBcIjM1IEVGIEI4IDhGIEUyIDgzIEEzXCIsIFwiMzYgRUYgQjggOEYgRTIgODMgQTNcIiwgXCIzNyBFRiBCOCA4RiBFMiA4MyBBM1wiLCBcIjM4IEVGIEI4IDhGIEUyIDgzIEEzXCIsIFwiMzkgRUYgQjggOEYgRTIgODMgQTNcIiwgXCI5NCA5RlwiLCBcIjk0IEEyXCIsIFwiRTIgOTYgQjYgRUYgQjggOEZcIiwgXCJFMiA4RiBCOFwiLCBcIkUyIDhGIEFGXCIsIFwiRTIgOEYgQjlcIiwgXCJFMiA4RiBCQVwiLCBcIkUyIDhGIEFEXCIsIFwiRTIgOEYgQUVcIiwgXCJFMiA4RiBBOVwiLCBcIkUyIDhGIEFBXCIsIFwiOTQgODBcIiwgXCI5NCA4MVwiLCBcIjk0IDgyXCIsIFwiRTIgOTcgODAgRUYgQjggOEZcIiwgXCI5NCBCQ1wiLCBcIjk0IEJEXCIsIFwiRTIgOEYgQUJcIiwgXCJFMiA4RiBBQ1wiLCBcIkUyIDlFIEExIEVGIEI4IDhGXCIsIFwiRTIgQUMgODUgRUYgQjggOEZcIiwgXCJFMiBBQyA4NiBFRiBCOCA4RlwiLCBcIkUyIEFDIDg3IEVGIEI4IDhGXCIsIFwiRTIgODYgOTcgRUYgQjggOEZcIiwgXCJFMiA4NiA5OCBFRiBCOCA4RlwiLCBcIkUyIDg2IDk5IEVGIEI4IDhGXCIsIFwiRTIgODYgOTYgRUYgQjggOEZcIiwgXCJFMiA4NiA5NSBFRiBCOCA4RlwiLCBcIkUyIDg2IDk0IEVGIEI4IDhGXCIsIFwiOTQgODRcIiwgXCJFMiA4NiBBQSBFRiBCOCA4RlwiLCBcIkUyIDg2IEE5IEVGIEI4IDhGXCIsIFwiRTIgQTQgQjQgRUYgQjggOEZcIiwgXCJFMiBBNCBCNSBFRiBCOCA4RlwiLCBcIjIzIEVGIEI4IDhGIEUyIDgzIEEzXCIsIFwiMkEgRUYgQjggOEYgRTIgODMgQTNcIiwgXCJFMiA4NCBCOSBFRiBCOCA4RlwiLCBcIjk0IEE0XCIsIFwiOTQgQTFcIiwgXCI5NCBBMFwiLCBcIjk0IEEzXCIsIFwiOEUgQjVcIiwgXCI4RSBCNlwiLCBcIkUzIDgwIEIwIEVGIEI4IDhGXCIsIFwiRTIgOUUgQjBcIiwgXCJFMiA5QyA5NCBFRiBCOCA4RlwiLCBcIjk0IDgzXCIsIFwiRTIgOUUgOTVcIiwgXCJFMiA5RSA5NlwiLCBcIkUyIDlFIDk3XCIsIFwiRTIgOUMgOTYgRUYgQjggOEZcIiwgXCI5MiBCMlwiLCBcIjkyIEIxXCIsIFwiQzIgQTkgRUYgQjggOEZcIiwgXCJDMiBBRSBFRiBCOCA4RlwiLCBcIkUyIDg0IEEyIEVGIEI4IDhGXCIsIFwiOTQgOUFcIiwgXCI5NCA5OVwiLCBcIjk0IDlCXCIsIFwiOTQgOURcIiwgXCI5NCA5Q1wiLCBcIkUyIDk4IDkxIEVGIEI4IDhGXCIsIFwiOTQgOThcIiwgXCJFMiA5QSBBQSBFRiBCOCA4RlwiLCBcIkUyIDlBIEFCIEVGIEI4IDhGXCIsIFwiOTQgQjRcIiwgXCI5NCBCNVwiLCBcIjk0IEI4XCIsIFwiOTQgQjlcIiwgXCI5NCBCNlwiLCBcIjk0IEI3XCIsIFwiOTQgQkFcIiwgXCJFMiA5NiBBQSBFRiBCOCA4RlwiLCBcIkUyIDk2IEFCIEVGIEI4IDhGXCIsIFwiRTIgQUMgOUIgRUYgQjggOEZcIiwgXCJFMiBBQyA5QyBFRiBCOCA4RlwiLCBcIjk0IEJCXCIsIFwiRTIgOTcgQkMgRUYgQjggOEZcIiwgXCJFMiA5NyBCQiBFRiBCOCA4RlwiLCBcIkUyIDk3IEJFIEVGIEI4IDhGXCIsIFwiRTIgOTcgQkQgRUYgQjggOEZcIiwgXCI5NCBCMlwiLCBcIjk0IEIzXCIsIFwiOTQgODhcIiwgXCI5NCA4OVwiLCBcIjk0IDhBXCIsIFwiOTQgODdcIiwgXCI5MyBBM1wiLCBcIjkzIEEyXCIsIFwiOTQgOTRcIiwgXCI5NCA5NVwiLCBcIjgzIDhGXCIsIFwiODAgODQgRUYgQjggOEZcIiwgXCJFMiA5OSBBMCBFRiBCOCA4RlwiLCBcIkUyIDk5IEEzIEVGIEI4IDhGXCIsIFwiRTIgOTkgQTUgRUYgQjggOEZcIiwgXCJFMiA5OSBBNiBFRiBCOCA4RlwiLCBcIjhFIEI0XCIsIFwiOTEgODEgRTIgODAgOEQgRjAgOUYgOTcgQThcIiwgXCI5MiBBRFwiLCBcIjk3IEFGXCIsIFwiOTIgQUNcIiwgXCI5NSA5MFwiLCBcIjk1IDkxXCIsIFwiOTUgOTJcIiwgXCI5NSA5M1wiLCBcIjk1IDk0XCIsIFwiOTUgOTVcIiwgXCI5NSA5NlwiLCBcIjk1IDk3XCIsIFwiOTUgOThcIiwgXCI5NSA5OVwiLCBcIjk1IDlBXCIsIFwiOTUgOUJcIiwgXCI5NSA5Q1wiLCBcIjk1IDlEXCIsIFwiOTUgOUVcIiwgXCI5NSA5RlwiLCBcIjk1IEEwXCIsIFwiOTUgQTFcIiwgXCI5NSBBMlwiLCBcIjk1IEEzXCIsIFwiOTUgQTRcIiwgXCI5NSBBNVwiLCBcIjk1IEE2XCIsIFwiOTUgQTdcIiwgXCI5QiA5MVwiLCBcIjg3IEE2IEYwIDlGIDg3IEFCXCIsIFwiODcgQTYgRjAgOUYgODcgQkRcIiwgXCI4NyBBNiBGMCA5RiA4NyBCMVwiLCBcIjg3IEE5IEYwIDlGIDg3IEJGXCIsIFwiODcgQTYgRjAgOUYgODcgQjhcIiwgXCI4NyBBNiBGMCA5RiA4NyBBOVwiLCBcIjg3IEE2IEYwIDlGIDg3IEI0XCIsIFwiODcgQTYgRjAgOUYgODcgQUVcIiwgXCI4NyBBNiBGMCA5RiA4NyBCNlwiLCBcIjg3IEE2IEYwIDlGIDg3IEFDXCIsIFwiODcgQTYgRjAgOUYgODcgQjdcIiwgXCI4NyBBNiBGMCA5RiA4NyBCMlwiLCBcIjg3IEE2IEYwIDlGIDg3IEJDXCIsIFwiODcgQTYgRjAgOUYgODcgQkFcIiwgXCI4NyBBNiBGMCA5RiA4NyBCOVwiLCBcIjg3IEE2IEYwIDlGIDg3IEJGXCIsIFwiODcgQTcgRjAgOUYgODcgQjhcIiwgXCI4NyBBNyBGMCA5RiA4NyBBRFwiLCBcIjg3IEE3IEYwIDlGIDg3IEE5XCIsIFwiODcgQTcgRjAgOUYgODcgQTdcIiwgXCI4NyBBNyBGMCA5RiA4NyBCRVwiLCBcIjg3IEE3IEYwIDlGIDg3IEFBXCIsIFwiODcgQTcgRjAgOUYgODcgQkZcIiwgXCI4NyBBNyBGMCA5RiA4NyBBRlwiLCBcIjg3IEE3IEYwIDlGIDg3IEIyXCIsIFwiODcgQTcgRjAgOUYgODcgQjlcIiwgXCI4NyBBNyBGMCA5RiA4NyBCNFwiLCBcIjg3IEE3IEYwIDlGIDg3IEI2XCIsIFwiODcgQTcgRjAgOUYgODcgQTZcIiwgXCI4NyBBNyBGMCA5RiA4NyBCQ1wiLCBcIjg3IEE3IEYwIDlGIDg3IEI3XCIsIFwiODcgQUUgRjAgOUYgODcgQjRcIiwgXCI4NyBCQiBGMCA5RiA4NyBBQ1wiLCBcIjg3IEE3IEYwIDlGIDg3IEIzXCIsIFwiODcgQTcgRjAgOUYgODcgQUNcIiwgXCI4NyBBNyBGMCA5RiA4NyBBQlwiLCBcIjg3IEE3IEYwIDlGIDg3IEFFXCIsIFwiODcgQTggRjAgOUYgODcgQkJcIiwgXCI4NyBCMCBGMCA5RiA4NyBBRFwiLCBcIjg3IEE4IEYwIDlGIDg3IEIyXCIsIFwiODcgQTggRjAgOUYgODcgQTZcIiwgXCI4NyBBRSBGMCA5RiA4NyBBOFwiLCBcIjg3IEIwIEYwIDlGIDg3IEJFXCIsIFwiODcgQTggRjAgOUYgODcgQUJcIiwgXCI4NyBCOSBGMCA5RiA4NyBBOVwiLCBcIjg3IEE4IEYwIDlGIDg3IEIxXCIsIFwiODcgQTggRjAgOUYgODcgQjNcIiwgXCI4NyBBOCBGMCA5RiA4NyBCRFwiLCBcIjg3IEE4IEYwIDlGIDg3IEE4XCIsIFwiODcgQTggRjAgOUYgODcgQjRcIiwgXCI4NyBCMCBGMCA5RiA4NyBCMlwiLCBcIjg3IEE4IEYwIDlGIDg3IEFDXCIsIFwiODcgQTggRjAgOUYgODcgQTlcIiwgXCI4NyBBOCBGMCA5RiA4NyBCMFwiLCBcIjg3IEE4IEYwIDlGIDg3IEI3XCIsIFwiODcgQUQgRjAgOUYgODcgQjdcIiwgXCI4NyBBOCBGMCA5RiA4NyBCQVwiLCBcIjg3IEE4IEYwIDlGIDg3IEJDXCIsIFwiODcgQTggRjAgOUYgODcgQkVcIiwgXCI4NyBBOCBGMCA5RiA4NyBCRlwiLCBcIjg3IEE5IEYwIDlGIDg3IEIwXCIsIFwiODcgQTkgRjAgOUYgODcgQUZcIiwgXCI4NyBBOSBGMCA5RiA4NyBCMlwiLCBcIjg3IEE5IEYwIDlGIDg3IEI0XCIsIFwiODcgQUEgRjAgOUYgODcgQThcIiwgXCI4NyBBQSBGMCA5RiA4NyBBQ1wiLCBcIjg3IEI4IEYwIDlGIDg3IEJCXCIsIFwiODcgQUMgRjAgOUYgODcgQjZcIiwgXCI4NyBBQSBGMCA5RiA4NyBCN1wiLCBcIjg3IEFBIEYwIDlGIDg3IEFBXCIsIFwiODcgQUEgRjAgOUYgODcgQjlcIiwgXCI4NyBBQSBGMCA5RiA4NyBCQVwiLCBcIjg3IEFCIEYwIDlGIDg3IEIwXCIsIFwiODcgQUIgRjAgOUYgODcgQjRcIiwgXCI4NyBBQiBGMCA5RiA4NyBBRlwiLCBcIjg3IEFCIEYwIDlGIDg3IEFFXCIsIFwiODcgQUIgRjAgOUYgODcgQjdcIiwgXCI4NyBBQyBGMCA5RiA4NyBBQlwiLCBcIjg3IEI1IEYwIDlGIDg3IEFCXCIsIFwiODcgQjkgRjAgOUYgODcgQUJcIiwgXCI4NyBBQyBGMCA5RiA4NyBBNlwiLCBcIjg3IEFDIEYwIDlGIDg3IEIyXCIsIFwiODcgQUMgRjAgOUYgODcgQUFcIiwgXCI4NyBBOSBGMCA5RiA4NyBBQVwiLCBcIjg3IEFDIEYwIDlGIDg3IEFEXCIsIFwiODcgQUMgRjAgOUYgODcgQUVcIiwgXCI4NyBBQyBGMCA5RiA4NyBCN1wiLCBcIjg3IEFDIEYwIDlGIDg3IEIxXCIsIFwiODcgQUMgRjAgOUYgODcgQTlcIiwgXCI4NyBBQyBGMCA5RiA4NyBCNVwiLCBcIjg3IEFDIEYwIDlGIDg3IEJBXCIsIFwiODcgQUMgRjAgOUYgODcgQjlcIiwgXCI4NyBBQyBGMCA5RiA4NyBBQ1wiLCBcIjg3IEFDIEYwIDlGIDg3IEIzXCIsIFwiODcgQUMgRjAgOUYgODcgQkNcIiwgXCI4NyBBQyBGMCA5RiA4NyBCRVwiLCBcIjg3IEFEIEYwIDlGIDg3IEI5XCIsIFwiODcgQUQgRjAgOUYgODcgQjNcIiwgXCI4NyBBRCBGMCA5RiA4NyBCMFwiLCBcIjg3IEFEIEYwIDlGIDg3IEJBXCIsIFwiODcgQUUgRjAgOUYgODcgQjhcIiwgXCI4NyBBRSBGMCA5RiA4NyBCM1wiLCBcIjg3IEFFIEYwIDlGIDg3IEE5XCIsIFwiODcgQUUgRjAgOUYgODcgQjdcIiwgXCI4NyBBRSBGMCA5RiA4NyBCNlwiLCBcIjg3IEFFIEYwIDlGIDg3IEFBXCIsIFwiODcgQUUgRjAgOUYgODcgQjJcIiwgXCI4NyBBRSBGMCA5RiA4NyBCMVwiLCBcIjg3IEFFIEYwIDlGIDg3IEI5XCIsIFwiODcgQTggRjAgOUYgODcgQUVcIiwgXCI4NyBBRiBGMCA5RiA4NyBCMlwiLCBcIjg3IEFGIEYwIDlGIDg3IEI1XCIsIFwiODcgQUYgRjAgOUYgODcgQUFcIiwgXCI4NyBBRiBGMCA5RiA4NyBCNFwiLCBcIjg3IEIwIEYwIDlGIDg3IEJGXCIsIFwiODcgQjAgRjAgOUYgODcgQUFcIiwgXCI4NyBCMCBGMCA5RiA4NyBBRVwiLCBcIjg3IEJEIEYwIDlGIDg3IEIwXCIsIFwiODcgQjAgRjAgOUYgODcgQkNcIiwgXCI4NyBCMCBGMCA5RiA4NyBBQ1wiLCBcIjg3IEIxIEYwIDlGIDg3IEE2XCIsIFwiODcgQjEgRjAgOUYgODcgQkJcIiwgXCI4NyBCMSBGMCA5RiA4NyBBN1wiLCBcIjg3IEIxIEYwIDlGIDg3IEI4XCIsIFwiODcgQjEgRjAgOUYgODcgQjdcIiwgXCI4NyBCMSBGMCA5RiA4NyBCRVwiLCBcIjg3IEIxIEYwIDlGIDg3IEFFXCIsIFwiODcgQjEgRjAgOUYgODcgQjlcIiwgXCI4NyBCMSBGMCA5RiA4NyBCQVwiLCBcIjg3IEIyIEYwIDlGIDg3IEI0XCIsIFwiODcgQjIgRjAgOUYgODcgQjBcIiwgXCI4NyBCMiBGMCA5RiA4NyBBQ1wiLCBcIjg3IEIyIEYwIDlGIDg3IEJDXCIsIFwiODcgQjIgRjAgOUYgODcgQkVcIiwgXCI4NyBCMiBGMCA5RiA4NyBCQlwiLCBcIjg3IEIyIEYwIDlGIDg3IEIxXCIsIFwiODcgQjIgRjAgOUYgODcgQjlcIiwgXCI4NyBCMiBGMCA5RiA4NyBBRFwiLCBcIjg3IEIyIEYwIDlGIDg3IEI2XCIsIFwiODcgQjIgRjAgOUYgODcgQjdcIiwgXCI4NyBCMiBGMCA5RiA4NyBCQVwiLCBcIjg3IEJFIEYwIDlGIDg3IEI5XCIsIFwiODcgQjIgRjAgOUYgODcgQkRcIiwgXCI4NyBBQiBGMCA5RiA4NyBCMlwiLCBcIjg3IEIyIEYwIDlGIDg3IEE5XCIsIFwiODcgQjIgRjAgOUYgODcgQThcIiwgXCI4NyBCMiBGMCA5RiA4NyBCM1wiLCBcIjg3IEIyIEYwIDlGIDg3IEFBXCIsIFwiODcgQjIgRjAgOUYgODcgQjhcIiwgXCI4NyBCMiBGMCA5RiA4NyBBNlwiLCBcIjg3IEIyIEYwIDlGIDg3IEJGXCIsIFwiODcgQjIgRjAgOUYgODcgQjJcIiwgXCI4NyBCMyBGMCA5RiA4NyBBNlwiLCBcIjg3IEIzIEYwIDlGIDg3IEI3XCIsIFwiODcgQjMgRjAgOUYgODcgQjVcIiwgXCI4NyBCMyBGMCA5RiA4NyBCMVwiLCBcIjg3IEIzIEYwIDlGIDg3IEE4XCIsIFwiODcgQjMgRjAgOUYgODcgQkZcIiwgXCI4NyBCMyBGMCA5RiA4NyBBRVwiLCBcIjg3IEIzIEYwIDlGIDg3IEFBXCIsIFwiODcgQjMgRjAgOUYgODcgQUNcIiwgXCI4NyBCMyBGMCA5RiA4NyBCQVwiLCBcIjg3IEIzIEYwIDlGIDg3IEFCXCIsIFwiODcgQjIgRjAgOUYgODcgQjVcIiwgXCI4NyBCMCBGMCA5RiA4NyBCNVwiLCBcIjg3IEIzIEYwIDlGIDg3IEI0XCIsIFwiODcgQjQgRjAgOUYgODcgQjJcIiwgXCI4NyBCNSBGMCA5RiA4NyBCMFwiLCBcIjg3IEI1IEYwIDlGIDg3IEJDXCIsIFwiODcgQjUgRjAgOUYgODcgQjhcIiwgXCI4NyBCNSBGMCA5RiA4NyBBNlwiLCBcIjg3IEI1IEYwIDlGIDg3IEFDXCIsIFwiODcgQjUgRjAgOUYgODcgQkVcIiwgXCI4NyBCNSBGMCA5RiA4NyBBQVwiLCBcIjg3IEI1IEYwIDlGIDg3IEFEXCIsIFwiODcgQjUgRjAgOUYgODcgQjNcIiwgXCI4NyBCNSBGMCA5RiA4NyBCMVwiLCBcIjg3IEI1IEYwIDlGIDg3IEI5XCIsIFwiODcgQjUgRjAgOUYgODcgQjdcIiwgXCI4NyBCNiBGMCA5RiA4NyBBNlwiLCBcIjg3IEI3IEYwIDlGIDg3IEFBXCIsIFwiODcgQjcgRjAgOUYgODcgQjRcIiwgXCI4NyBCNyBGMCA5RiA4NyBCQVwiLCBcIjg3IEI3IEYwIDlGIDg3IEJDXCIsIFwiODcgQTcgRjAgOUYgODcgQjFcIiwgXCI4NyBCOCBGMCA5RiA4NyBBRFwiLCBcIjg3IEIwIEYwIDlGIDg3IEIzXCIsIFwiODcgQjEgRjAgOUYgODcgQThcIiwgXCI4NyBCNSBGMCA5RiA4NyBCMlwiLCBcIjg3IEJCIEYwIDlGIDg3IEE4XCIsIFwiODcgQkMgRjAgOUYgODcgQjhcIiwgXCI4NyBCOCBGMCA5RiA4NyBCMlwiLCBcIjg3IEI4IEYwIDlGIDg3IEI5XCIsIFwiODcgQjggRjAgOUYgODcgQTZcIiwgXCI4NyBCOCBGMCA5RiA4NyBCM1wiLCBcIjg3IEI3IEYwIDlGIDg3IEI4XCIsIFwiODcgQjggRjAgOUYgODcgQThcIiwgXCI4NyBCOCBGMCA5RiA4NyBCMVwiLCBcIjg3IEI4IEYwIDlGIDg3IEFDXCIsIFwiODcgQjggRjAgOUYgODcgQkRcIiwgXCI4NyBCOCBGMCA5RiA4NyBCMFwiLCBcIjg3IEI4IEYwIDlGIDg3IEFFXCIsIFwiODcgQjggRjAgOUYgODcgQTdcIiwgXCI4NyBCOCBGMCA5RiA4NyBCNFwiLCBcIjg3IEJGIEYwIDlGIDg3IEE2XCIsIFwiODcgQUMgRjAgOUYgODcgQjhcIiwgXCI4NyBCMCBGMCA5RiA4NyBCN1wiLCBcIjg3IEI4IEYwIDlGIDg3IEI4XCIsIFwiODcgQUEgRjAgOUYgODcgQjhcIiwgXCI4NyBCMSBGMCA5RiA4NyBCMFwiLCBcIjg3IEI4IEYwIDlGIDg3IEE5XCIsIFwiODcgQjggRjAgOUYgODcgQjdcIiwgXCI4NyBCOCBGMCA5RiA4NyBCRlwiLCBcIjg3IEI4IEYwIDlGIDg3IEFBXCIsIFwiODcgQTggRjAgOUYgODcgQURcIiwgXCI4NyBCOCBGMCA5RiA4NyBCRVwiLCBcIjg3IEI5IEYwIDlGIDg3IEJDXCIsIFwiODcgQjkgRjAgOUYgODcgQUZcIiwgXCI4NyBCOSBGMCA5RiA4NyBCRlwiLCBcIjg3IEI5IEYwIDlGIDg3IEFEXCIsIFwiODcgQjkgRjAgOUYgODcgQjFcIiwgXCI4NyBCOSBGMCA5RiA4NyBBQ1wiLCBcIjg3IEI5IEYwIDlGIDg3IEIwXCIsIFwiODcgQjkgRjAgOUYgODcgQjRcIiwgXCI4NyBCOSBGMCA5RiA4NyBCOVwiLCBcIjg3IEI5IEYwIDlGIDg3IEIzXCIsIFwiODcgQjkgRjAgOUYgODcgQjdcIiwgXCI4NyBCOSBGMCA5RiA4NyBCMlwiLCBcIjg3IEI5IEYwIDlGIDg3IEE4XCIsIFwiODcgQjkgRjAgOUYgODcgQkJcIiwgXCI4NyBCQSBGMCA5RiA4NyBBQ1wiLCBcIjg3IEJBIEYwIDlGIDg3IEE2XCIsIFwiODcgQTYgRjAgOUYgODcgQUFcIiwgXCI4NyBBQyBGMCA5RiA4NyBBN1wiLCBcIjg3IEJBIEYwIDlGIDg3IEI4XCIsIFwiODcgQkIgRjAgOUYgODcgQUVcIiwgXCI4NyBCQSBGMCA5RiA4NyBCRVwiLCBcIjg3IEJBIEYwIDlGIDg3IEJGXCIsIFwiODcgQkIgRjAgOUYgODcgQkFcIiwgXCI4NyBCQiBGMCA5RiA4NyBBNlwiLCBcIjg3IEJCIEYwIDlGIDg3IEFBXCIsIFwiODcgQkIgRjAgOUYgODcgQjNcIiwgXCI4NyBCQyBGMCA5RiA4NyBBQlwiLCBcIjg3IEFBIEYwIDlGIDg3IEFEXCIsIFwiODcgQkUgRjAgOUYgODcgQUFcIiwgXCI4NyBCRiBGMCA5RiA4NyBCMlwiLCBcIjg3IEJGIEYwIDlGIDg3IEJDXCJdXG5cdGVtb2ppc0FycmF5ID0gW11cblx0ZnJlcUVtb2ppc0FycmF5ID0gW11cblx0Zm9yIGVtIGluIHJhd0Vtb2ppc1xuXHRcdGVtb2ppc0FycmF5LnB1c2ggZW1vamlGb3JtYXR0ZXIoZW0pXG5cblx0XG5cdGZyZXF1ZW50bHlVc2VkRW1vamlzUmF3ID0gW1wiOTIgODVcIiwgXCI5MSA4NFwiLCBcIjkxIDg1XCIsIFwiOTEgODJcIiwgXCI5MSA4M1wiLFwiOTIgODVcIiwgXCI5MSA4NFwiLCBcIjkxIDg1XCIsIFwiOTEgODJcIiwgXCI5MSA4M1wiLFwiOTIgODVcIiwgXCI5MSA4NFwiLCBcIjkxIDg1XCIsIFwiOTEgODJcIiwgXCI5MSA4M1wiLFwiOTIgODVcIiwgXCI5MSA4NFwiLCBcIjkxIDg1XCIsIFwiOTEgODJcIiwgXCI5MSA4M1wiLFwiOTIgODVcIiwgXCI5MSA4NFwiLCBcIjkxIDg1XCIsIFwiOTEgODJcIiwgXCI5MSA4M1wiLF1cblx0Zm9yIGVtIGluIGZyZXF1ZW50bHlVc2VkRW1vamlzUmF3XG5cdFx0ZnJlcUVtb2ppc0FycmF5LnB1c2ggZW1vamlGb3JtYXR0ZXIoZW0pXG5cblx0ZW1vamlLZXkub24gRXZlbnRzLlRvdWNoU3RhcnQsIC0+XG5cdFx0ZW1vamlLZXkuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiXG5cdFx0ZW1vamlCRyA9IG5ldyBMYXllciBiYWNrZ3JvdW5kQ29sb3I6XCIjRUNFRUYxXCJcblx0XHRib3ggPSBleHBvcnRzLnB4KDMwKVxuXHRcdGVtb2ppQkcuY29uc3RyYWludHMgPSAodHJhaWxpbmc6MSwgbGVhZGluZzoxLCBib3R0b206MSwgaGVpZ2h0OjI1OClcblx0XHRleHBvcnRzLmxheW91dCgpXG5cdFx0ZW1vamlHYWxsZXkgPSBuZXcgU2Nyb2xsQ29tcG9uZW50IHN1cGVyTGF5ZXI6ZW1vamlCRywgd2lkdGg6ZW1vamlCRy53aWR0aCwgaGVpZ2h0OmVtb2ppQkcuaGVpZ2h0IC0gZXhwb3J0cy5weCg0MClcblx0XHRlbW9qaUdhbGxleS5zcGVlZFkgPSAwXG5cdFx0ZW1vamlTcGFjZXIgPSBleHBvcnRzLnB4KDYpXG5cdFx0ZW1vamlQaWNrZXIgPSBuZXcgTGF5ZXIgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIiwgbmFtZTpcImVtb2ppIHBpY2tlclwiLCBzdXBlckxheWVyOmVtb2ppQkdcblx0XHRlbW9qaVBpY2tlci5jb25zdHJhaW50cyA9IFxuXHRcdFx0bGVhZGluZzoxXG5cdFx0XHR0cmFpbGluZzoxXG5cdFx0XHRib3R0b206MVxuXHRcdFx0aGVpZ2h0OjQyXG5cdFx0QUJDID0gbmV3IExheWVyIGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCIsIHN1cGVyTGF5ZXI6ZW1vamlQaWNrZXJcblx0XHRBQkMuaHRtbCA9IFwiQUJDXCJcblx0XHRBQkMuc3R5bGUgPSB7XG5cdFx0XHRcImZvbnQtc2l6ZVwiIDogZXhwb3J0cy5weCgxNSkgKyBcInB4XCJcblx0XHRcdFwiZm9udC13ZWlnaHRcIiA6IDUwMFxuXHRcdFx0XCJmb250LWZhbWlseVwiIDogJy1hcHBsZS1zeXN0ZW0sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYnXG5cdFx0XHRcImNvbG9yXCIgOiBcIiM0RjU1NURcIlxuXHRcdH1cblx0XHRBQkMuY29uc3RyYWludHMgPSBcblx0XHRcdGxlYWRpbmc6MTJcblx0XHRcdGJvdHRvbToxNFxuXHRcdFx0d2lkdGg6MzBcblx0XHRcdGhlaWdodDoxNVxuXG5cdFx0ZXhwb3J0cy5sYXlvdXQoKVxuXHRcdHJvdyA9IC0xXG5cdFx0QUJDLm9uIEV2ZW50cy5DbGljaywgLT5cblx0XHRcdGVtb2ppQkcuZGVzdHJveSgpXG5cdFx0ZnJlcXVlbnQgPSBuZXcgTGF5ZXIgc3VwZXJMYXllcjplbW9qaVBpY2tlciwgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIlxuXHRcdGZyZXF1ZW50Lmh0bWwgPSBcIjw/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyc/PlxuXHRcdFx0PHN2ZyB3aWR0aD0nI3tleHBvcnRzLnB4KDE3KX1weCcgaGVpZ2h0PScje2V4cG9ydHMucHgoMTYpfXB4JyB2aWV3Qm94PScwIDAgMTcgMTYnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycgeG1sbnM6c2tldGNoPSdodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMnPlxuXHRcdFx0ICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy41LjIgKDI1MjM1KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHRcdCAgICA8dGl0bGU+UmVjZW50PC90aXRsZT5cblx0XHRcdCAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHRcdCAgICA8ZGVmcz48L2RlZnM+XG5cdFx0XHQgICAgPGcgaWQ9J2lPUy05LUtleWJvYXJkcycgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCcgc2tldGNoOnR5cGU9J01TUGFnZSc+XG5cdFx0XHQgICAgICAgIDxnIGlkPSdpUGhvbmUtNi1Qb3J0cmFpdC1MaWdodC1Db3B5JyBza2V0Y2g6dHlwZT0nTVNBcnRib2FyZEdyb3VwJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtNTUuMDAwMDAwLCAtNjM4LjAwMDAwMCknPlxuXHRcdFx0ICAgICAgICAgICAgPGcgaWQ9J0tleWJvYXJkcycgc2tldGNoOnR5cGU9J01TTGF5ZXJHcm91cCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMC4wMDAwMDAsIDQwOC4wMDAwMDApJz5cblx0XHRcdCAgICAgICAgICAgICAgICA8ZyBpZD0nUmVjZW50JyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSg1NS41MDAwMDAsIDIzMC4wMDAwMDApJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJz5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBpZD0nQm9keScgc3Ryb2tlPScjNEE1NDYxJyBjeD0nOCcgY3k9JzgnIHI9JzgnPjwvY2lyY2xlPlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSdNNy41LDcuNSBMNy41LDguNSBMOC41LDguNSBMOC41LDIgTDcuNSwyIEw3LjUsNy41IEw0LDcuNSBMNCw4LjUgTDguNSw4LjUgTDguNSw3LjUgTDcuNSw3LjUgWicgaWQ9J0hhbmRzJyBmaWxsPScjNEE1NDYxJz48L3BhdGg+XG5cdFx0XHQgICAgICAgICAgICAgICAgPC9nPlxuXHRcdFx0ICAgICAgICAgICAgPC9nPlxuXHRcdFx0ICAgICAgICA8L2c+XG5cdFx0XHQgICAgPC9nPlxuXHRcdFx0PC9zdmc+XCJcblx0XHRmcmVxdWVudC5jb25zdHJhaW50cyA9IFxuXHRcdFx0bGVhZGluZyA6IFtBQkMsIDE1XVxuXHRcdFx0Ym90dG9tOiAxNFxuXHRcdFx0d2lkdGg6MTZcblx0XHRcdGhlaWdodDoyMFxuXHRcdGV4cG9ydHMubGF5b3V0KClcblx0XHRzbWlsZXlzID0gbmV3IExheWVyIHN1cGVyTGF5ZXI6ZW1vamlQaWNrZXIsIGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCIsIG9wYWNpdHk6LjRcblx0XHRzbWlsZXlzLmh0bWwgPSBcIjw/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyc/PlxuXHRcdFx0PHN2ZyB3aWR0aD0nI3tleHBvcnRzLnB4KDE3KX1weCcgaGVpZ2h0PScje2V4cG9ydHMucHgoMTYpfXB4JyB2aWV3Qm94PScwIDAgMTcgMTYnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycgeG1sbnM6c2tldGNoPSdodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMnPlxuXHRcdFx0ICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy41LjIgKDI1MjM1KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHRcdCAgICA8dGl0bGU+OkQ8L3RpdGxlPlxuXHRcdFx0ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdFx0ICAgIDxkZWZzPjwvZGVmcz5cblx0XHRcdCAgICA8ZyBpZD0naU9TLTktS2V5Ym9hcmRzJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJyBza2V0Y2g6dHlwZT0nTVNQYWdlJz5cblx0XHRcdCAgICAgICAgPGcgaWQ9J2lQaG9uZS02LVBvcnRyYWl0LUxpZ2h0LUNvcHknIHNrZXRjaDp0eXBlPSdNU0FydGJvYXJkR3JvdXAnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC04Ni4wMDAwMDAsIC02MzguMDAwMDAwKSc+XG5cdFx0XHQgICAgICAgICAgICA8ZyBpZD0nS2V5Ym9hcmRzJyBza2V0Y2g6dHlwZT0nTVNMYXllckdyb3VwJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgwLjAwMDAwMCwgNDA4LjAwMDAwMCknPlxuXHRcdFx0ICAgICAgICAgICAgICAgIDxnIGlkPSc6RCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoODcuMDAwMDAwLCAyMzAuNTAwMDAwKScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCc+XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgaWQ9J0hlYWQnIHN0cm9rZT0nIzRBNTQ2MScgc3Ryb2tlLXdpZHRoPScwLjc4OTQ3MzY4NCcgY3g9JzcuNScgY3k9JzcuNScgcj0nNy41Jz48L2NpcmNsZT5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0nTTcuNSwxMy41MjYzMTU4IEMxMC4yNjg2OTA3LDEzLjUyNjMxNTggMTIuNTEzMTU3OSwxMC4zNjg0MjEyIDEyLjUxMzE1NzksOS4xODQyMTA0NSBDMTIuNTEzMTU3OSw3LjYwNTI2MzE3IDExLjQzODkwOTgsOS4xODQyMTA0MyA3LjUsOS4xODQyMTA1MyBDMy41NjEwOTAyMyw5LjE4NDIxMDYyIDIuNDg2ODQyMTEsNy42MDUyNjMxNyAyLjQ4Njg0MjExLDkuMTg0MjEwNDUgQzIuNDg2ODQyMTEsMTAuMzY4NDIxIDQuNzMxMzA5MzUsMTMuNTI2MzE1OCA3LjUsMTMuNTI2MzE1OCBaIE03LjUsMTAuOTYwNTI2MyBDOC45MzIzMzA4MywxMS4xNTc4OTQ3IDExLjc5Njk5MjUsMTAuMzY4NDIxIDExLjc5Njk5MjUsOS40NDQyMzU1MiBDMTEuNzk2OTkyNSw4Ljc4OTQ3MzY4IDEwLjg3NjIwODQsOS41Nzg5NDcyNyA3LjUsOS43NzYzMTU3OSBDNC4xMjM3OTE2Miw5LjU3ODk0NzQzIDMuMjAzMDA4NzIsOC43ODk0NzM2OSAzLjIwMzAwNzUyLDkuNDQ0MjM1NTIgQzMuMjAzMDA1ODIsMTAuMzY4NDIxIDYuMDY3NjY5MTcsMTEuMTU3ODk0NyA3LjUsMTAuOTYwNTI2MyBaJyBpZD0nU21pbGUnIGZpbGw9JyM0QTU0NjEnPjwvcGF0aD5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0nTTUuMjM2ODQyMTEsNi4zMjM2NTk4IEM1LjY0Mzc4ODc2LDYuMzIzNjU5OCA1Ljk3MzY4NDIxLDUuODgxODM1NTQgNS45NzM2ODQyMSw1LjMzNjgxNzY5IEM1Ljk3MzY4NDIxLDQuNzkxNzk5ODUgNS42NDM3ODg3Niw0LjM0OTk3NTU5IDUuMjM2ODQyMTEsNC4zNDk5NzU1OSBDNC44Mjk4OTU0NSw0LjM0OTk3NTU5IDQuNSw0Ljc5MTc5OTg1IDQuNSw1LjMzNjgxNzY5IEM0LjUsNS44ODE4MzU1NCA0LjgyOTg5NTQ1LDYuMzIzNjU5OCA1LjIzNjg0MjExLDYuMzIzNjU5OCBaIE05LjczNjg0MjExLDYuMzIzNjU5OCBDMTAuMTQzNzg4OCw2LjMyMzY1OTggMTAuNDczNjg0Miw1Ljg4MTgzNTU0IDEwLjQ3MzY4NDIsNS4zMzY4MTc2OSBDMTAuNDczNjg0Miw0Ljc5MTc5OTg1IDEwLjE0Mzc4ODgsNC4zNDk5NzU1OSA5LjczNjg0MjExLDQuMzQ5OTc1NTkgQzkuMzI5ODk1NDUsNC4zNDk5NzU1OSA5LDQuNzkxNzk5ODUgOSw1LjMzNjgxNzY5IEM5LDUuODgxODM1NTQgOS4zMjk4OTU0NSw2LjMyMzY1OTggOS43MzY4NDIxMSw2LjMyMzY1OTggWicgaWQ9J0V5ZXMnIGZpbGw9JyM0QTU0NjEnPjwvcGF0aD5cblx0XHRcdCAgICAgICAgICAgICAgICA8L2c+XG5cdFx0XHQgICAgICAgICAgICA8L2c+XG5cdFx0XHQgICAgICAgIDwvZz5cblx0XHRcdCAgICA8L2c+XG5cdFx0XHQ8L3N2Zz5cIlxuXHRcdHNtaWxleXMuY29uc3RyYWludHMgPVxuXHRcdFx0bGVhZGluZyA6IFtmcmVxdWVudCwgMTVdXG5cdFx0XHRib3R0b206IDE0XG5cdFx0XHR3aWR0aDoxNlxuXHRcdFx0aGVpZ2h0OjIwXG5cdFx0ZXhwb3J0cy5sYXlvdXQoKVxuXHRcdGFuaW1hbHMgPSBuZXcgTGF5ZXIgc3VwZXJMYXllcjplbW9qaVBpY2tlciwgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIiwgb3BhY2l0eTouNFxuXHRcdGFuaW1hbHMuaHRtbCA9IFwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdFx0XHQ8c3ZnIHdpZHRoPScje2V4cG9ydHMucHgoMTcpfXB4JyBoZWlnaHQ9JyN7ZXhwb3J0cy5weCgxNil9cHgnIHZpZXdCb3g9JzAgMCAxNyAxNycgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyB4bWxuczpza2V0Y2g9J2h0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaC9ucyc+XG5cdFx0XHQgICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjUuMiAoMjUyMzUpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdFx0ICAgIDx0aXRsZT5Hcm91cDwvdGl0bGU+XG5cdFx0XHQgICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0XHQgICAgPGRlZnM+PC9kZWZzPlxuXHRcdFx0ICAgIDxnIGlkPSdQYWdlLTEnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIHNrZXRjaDp0eXBlPSdNU1BhZ2UnPlxuXHRcdFx0ICAgICAgICA8ZyBpZD0naVBob25lLTYnIHNrZXRjaDp0eXBlPSdNU0FydGJvYXJkR3JvdXAnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC0xMTcuMDAwMDAwLCAtNjM5LjAwMDAwMCknIHN0cm9rZT0nIzRBNTM2MSc+XG5cdFx0XHQgICAgICAgICAgICA8ZyBpZD0naWNfRm9vZCcgc2tldGNoOnR5cGU9J01TTGF5ZXJHcm91cCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMTE4LjAwMDAwMCwgNjQwLjAwMDAwMCknPlxuXHRcdFx0ICAgICAgICAgICAgICAgIDxnIGlkPSdHcm91cCcgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCc+XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9J001LjY4Mzc3NTM3LDEuMzgxNTY2NDYgQzYuMjM5MjYwNjYsMS4xMzYyNCA2Ljg1MzcyMDA1LDEgNy41LDEgQzguMTQ2Mjc5OTUsMSA4Ljc2MDczOTM0LDEuMTM2MjQgOS4zMTYyMjQ2MywxLjM4MTU2NjQ2IEM5LjgwODc5Mjc1LDAuNTYyMzU5MDE5IDEwLjgyNTU4ODgsMCAxMiwwIEMxMy42NTY4NTQyLDAgMTUsMS4xMTkyODgxMyAxNSwyLjUgQzE1LDMuNTU3MTM5OCAxNC4yMTI2MjQ2LDQuNDYxMDI4NDMgMTMuMDk5OTIyNiw0LjgyNjYyNTE0IEMxNC4yNDk2NTI4LDUuNjQxODU0MjIgMTUsNi45ODMzMDA2MiAxNSw4LjUgQzE1LDEwLjcxNjcxNDQgMTMuMzk3MTg3MywxMi41NTkwNzE5IDExLjI4NzI2NzEsMTIuOTMxMzY3MyBDMTAuNDg2NzI0OCwxNC4xNzU3NzAzIDkuMDg5NjE2OTYsMTUgNy41LDE1IEM1LjkxMDM4MzA0LDE1IDQuNTEzMjc1MjQsMTQuMTc1NzcwMyAzLjcxMjczMjkxLDEyLjkzMTM2NzMgQzEuNjAyODEyNjgsMTIuNTU5MDcxOSAwLDEwLjcxNjcxNDQgMCw4LjUgQzAsNi45ODMzMDA2MiAwLjc1MDM0NzI0NCw1LjY0MTg1NDIyIDEuOTAwMDc3NDEsNC44MjY2MjUxNCBDMC43ODczNzU0NDUsNC40NjEwMjg0MyAwLDMuNTU3MTM5OCAwLDIuNSBDMCwxLjExOTI4ODEzIDEuMzQzMTQ1NzUsMCAzLDAgQzQuMTc0NDExMjIsMCA1LjE5MTIwNzI1LDAuNTYyMzU5MDE5IDUuNjgzNzc1MzcsMS4zODE1NjY0NiBaJyBpZD0nT3ZhbC04Jz48L3BhdGg+XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9J001LjczODM0MjI4LDEyIEM1Ljg2MjkwOTc5LDEyIDYuMTQ2NDIzNTMsMTIgNi4xNDY0MjM1MywxMiBDNi4xNDY0MjM1MywxMiA2LjQzMjE1Njk2LDEyLjQ0MjYxMjMgNi41MjQ2NTgyLDEyLjQ5MTk3MzkgQzYuNjY0NTU2MDEsMTIuNTY2NjI3NyA3LDEyLjQ5MTk3MzkgNywxMi40OTE5NzM5IEw3LDEyIEw4LDEyIEw4LDEyLjQ5MTk3MzkgTDguNDk3OTkyMjgsMTIuNDkxOTczOSBMOC44NDMwMTc2OSwxMiBMOS4zOTE4NDU3LDEyIEM5LjM5MTg0NTcsMTIgOC45OTU5ODQ1NywxMi45ODM5NDc4IDguNDk3OTkyMjgsMTIuOTgzOTQ3OCBMNi42MDcwMjQwNywxMi45ODM5NDc4IEM2LjIxNDA0ODEzLDEyLjk4Mzk0NzggNS40NTk5NjA5NCwxMiA1LjczODM0MjI4LDEyIFonIGlkPSdSZWN0YW5nbGUtNDQtQ29weS0yJz48L3BhdGg+XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgaWQ9J092YWwtMTQnIGN4PScxMC41JyBjeT0nNy41JyByPScwLjUnPjwvY2lyY2xlPlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGlkPSdPdmFsLTE0LUNvcHknIGN4PSc0LjUnIGN5PSc3LjUnIHI9JzAuNSc+PC9jaXJjbGU+XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9J00xMi42OTk5OTY5LDUgQzEyLjY5OTk5NjksMy4wNjcwMDMzOCAxMS4xMzI5OTM2LDEuNSA5LjE5OTk5Njk1LDEuNScgaWQ9J092YWwtMTYnPjwvcGF0aD5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0nTTUuNSw1IEM1LjUsMy4wNjcwMDMzOCAzLjkzMjk5NjYyLDEuNSAyLDEuNScgaWQ9J092YWwtMTYtQ29weScgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMy43NTAwMDAsIDMuMjUwMDAwKSBzY2FsZSgtMSwgMSkgdHJhbnNsYXRlKC0zLjc1MDAwMCwgLTMuMjUwMDAwKSAnPjwvcGF0aD5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9J1JlY3RhbmdsZS00NC1Db3B5JyB4PSc3JyB5PScxMScgd2lkdGg9JzEnIGhlaWdodD0nMSc+PC9yZWN0PlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSdNNiwxMCBMNi41LDEwIEw2LjQ5OTk5OTk5LDkuNSBMOC41MDAwMDAwNSw5LjUgTDguNTAwMDAwMDUsMTAgTDksMTAgTDksMTAuNSBMOC41LDEwLjUgTDguNSwxMSBMNi41LDExIEw2LjUsMTAuNSBMNiwxMC41IEw2LDEwIFonIGlkPSdQYXRoJz48L3BhdGg+XG5cdFx0XHQgICAgICAgICAgICAgICAgPC9nPlxuXHRcdFx0ICAgICAgICAgICAgPC9nPlxuXHRcdFx0ICAgICAgICA8L2c+XG5cdFx0XHQgICAgPC9nPlxuXHRcdFx0PC9zdmc+XCJcblx0XHRhbmltYWxzLmNvbnN0cmFpbnRzID1cblx0XHRcdGxlYWRpbmcgOiBbc21pbGV5cywgMTVdXG5cdFx0XHRib3R0b206IDE0XG5cdFx0XHR3aWR0aDoxNlxuXHRcdFx0aGVpZ2h0OjIwXG5cdFx0ZXhwb3J0cy5sYXlvdXQoKVxuXHRcdGZvb2QgPSBuZXcgTGF5ZXIgc3VwZXJMYXllcjplbW9qaVBpY2tlciwgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIiwgb3BhY2l0eTouNFxuXHRcdGZvb2QuaHRtbCA9IFwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdFx0XHQ8c3ZnIHdpZHRoPScje2V4cG9ydHMucHgoMTcpfXB4JyBoZWlnaHQ9JyN7ZXhwb3J0cy5weCgxNil9cHgnIHZpZXdCb3g9JzAgMCAxNyAxNycgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyB4bWxuczpza2V0Y2g9J2h0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaC9ucyc+XG5cdFx0XHQgICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjUuMiAoMjUyMzUpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdFx0ICAgIDx0aXRsZT5Gb29kPC90aXRsZT5cblx0XHRcdCAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHRcdCAgICA8ZGVmcz48L2RlZnM+XG5cdFx0XHQgICAgPGcgaWQ9J2lPUy05LUtleWJvYXJkcycgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCcgc2tldGNoOnR5cGU9J01TUGFnZSc+XG5cdFx0XHQgICAgICAgIDxnIGlkPSdpUGhvbmUtNi1Qb3J0cmFpdC1MaWdodC1Db3B5JyBza2V0Y2g6dHlwZT0nTVNBcnRib2FyZEdyb3VwJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtMTQ4LjAwMDAwMCwgLTYzNy4wMDAwMDApJz5cblx0XHRcdCAgICAgICAgICAgIDxnIGlkPSdLZXlib2FyZHMnIHNrZXRjaDp0eXBlPSdNU0xheWVyR3JvdXAnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDAuMDAwMDAwLCA0MDguMDAwMDAwKSc+XG5cdFx0XHQgICAgICAgICAgICAgICAgPGcgaWQ9J0Zvb2QnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDE0OS41MDAwMDAsIDIyOS41MDAwMDApJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJz5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0nTTUuNSwxNS41IEwxLDE1LjUgTDAsNSBMNi41LDUgTDYuMjYzNjA5MzMsNy40ODIxMDIwMicgaWQ9J0RyaW5rJyBzdHJva2U9JyM0QTU0NjEnPjwvcGF0aD5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0nTTYuMDEwNzc1NDUsMS45NjkzMDA5OCBMNi41MTU3MTM1Miw1LjIyMjcwNTM5IEw1LjcxOTA4MTg0LDUuNjc5NDc4MTIgTDUuMDM4OTAwOSwxLjk2OTMwMDk4IEw0Ljg1NTU3MjQ3LDEuOTY5MzAwOTggTDQuODU1NTcyNDcsMC45NjkzMDA5OCBMOC44NTU1NzI0NywwLjk2OTMwMDk4IEw4Ljg1NTU3MjQ3LDEuOTY5MzAwOTggTDYuMDEwNzc1NDUsMS45NjkzMDA5OCBaJyBpZD0nU3RyYXcnIGZpbGw9JyM0QTU0NjEnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDYuODU1NTcyLCAzLjMyNDM5MCkgcm90YXRlKDI0LjAwMDAwMCkgdHJhbnNsYXRlKC02Ljg1NTU3MiwgLTMuMzI0MzkwKSAnPjwvcGF0aD5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9J0JvdHRvbS1CdW4nIHN0cm9rZT0nIzRBNTQ2MScgeD0nMycgeT0nMTQnIHdpZHRoPScxMC41JyBoZWlnaHQ9JzEuNScgcng9JzEnPjwvcmVjdD5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0nTTEuNSwxMi41MDI0NDA4IEMxLjUsMTEuOTQ4ODA4IDEuOTQ5MTY5MTYsMTEuNSAyLjQ5MjY4NzIzLDExLjUgTDE0LjAwNzMxMjgsMTEuNSBDMTQuNTU1NTU4OCwxMS41IDE1LDExLjk0Njk0OTkgMTUsMTIuNTAyNDQwOCBMMTUsMTIuOTk3NTU5MiBDMTUsMTMuNTUxMTkyIDE0LjU1MDgzMDgsMTQgMTQuMDA3MzEyOCwxNCBMMi40OTI2ODcyMywxNCBDMS45NDQ0NDEyMSwxNCAxLjUsMTMuNTUzMDUwMSAxLjUsMTIuOTk3NTU5MiBMMS41LDEyLjUwMjQ0MDggWiBNMy45MzMwMDAwMywxMS44MzkyNzI3IEMzLjQxNzcxODM0LDExLjY1MTg5NzYgMy40NDQ4MzY5NywxMS41IDMuOTk1NTc3NSwxMS41IEwxMy4wMDQ0MjI1LDExLjUgQzEzLjU1NDI2NDgsMTEuNSAxMy41ODY2MDYxLDExLjY1MDMyNTEgMTMuMDY3LDExLjgzOTI3MjcgTDguNSwxMy41IEwzLjkzMzAwMDAzLDExLjgzOTI3MjcgWicgaWQ9JyZxdW90O1BhdHR5JnF1b3Q7JyBmaWxsPScjNEE1NDYxJz48L3BhdGg+XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9J00yLjUsMTAuNSBMMTMuNSwxMC41IEwxNSwxMS41IEwxLDExLjUgTDIuNSwxMC41IFonIGlkPSdDaGVlc2UnIGZpbGw9JyM0QTU0NjEnPjwvcGF0aD5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0nTTguMjUsMTAuNSBDMTEuNDI1NjM3MywxMC41IDE0LDEwLjMyODQyNzEgMTQsOS41IEMxNCw4LjY3MTU3Mjg4IDExLjQyNTYzNzMsOCA4LjI1LDggQzUuMDc0MzYyNjksOCAyLjUsOC42NzE1NzI4OCAyLjUsOS41IEMyLjUsMTAuMzI4NDI3MSA1LjA3NDM2MjY5LDEwLjUgOC4yNSwxMC41IFonIGlkPSdUb3AtQnVuJyBzdHJva2U9JyM0QTU0NjEnIHN0cm9rZS13aWR0aD0nMC43NSc+PC9wYXRoPlxuXHRcdFx0ICAgICAgICAgICAgICAgIDwvZz5cblx0XHRcdCAgICAgICAgICAgIDwvZz5cblx0XHRcdCAgICAgICAgPC9nPlxuXHRcdFx0ICAgIDwvZz5cblx0XHRcdDwvc3ZnPlwiXG5cdFx0Zm9vZC5jb25zdHJhaW50cyA9XG5cdFx0XHRsZWFkaW5nIDogW2FuaW1hbHMsIDE1XVxuXHRcdFx0Ym90dG9tOiAxNFxuXHRcdFx0d2lkdGg6MTZcblx0XHRcdGhlaWdodDoyMFxuXHRcdGV4cG9ydHMubGF5b3V0KClcblx0XHRhY3Rpdml0eSA9IG5ldyBMYXllciBzdXBlckxheWVyOmVtb2ppUGlja2VyLCBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiLCBvcGFjaXR5Oi40XG5cdFx0YWN0aXZpdHkuaHRtbCA9IFwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdFx0XHQ8c3ZnIHdpZHRoPScje2V4cG9ydHMucHgoMTYpfXB4JyBoZWlnaHQ9JyN7ZXhwb3J0cy5weCgxNil9cHgnIHZpZXdCb3g9JzAgMCAxNiAxNicgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyB4bWxuczpza2V0Y2g9J2h0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaC9ucyc+XG5cdFx0XHQgICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjUuMiAoMjUyMzUpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdFx0ICAgIDx0aXRsZT5Tb2NjZXIgQmFsbDwvdGl0bGU+XG5cdFx0XHQgICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0XHQgICAgPGRlZnM+XG5cdFx0XHQgICAgICAgIDxjaXJjbGUgaWQ9J3BhdGgtMScgY3g9JzgnIGN5PSc4JyByPSc4Jz48L2NpcmNsZT5cblx0XHRcdCAgICA8L2RlZnM+XG5cdFx0XHQgICAgPGcgaWQ9J1BhZ2UtMScgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCcgc2tldGNoOnR5cGU9J01TUGFnZSc+XG5cdFx0XHQgICAgICAgIDxnIGlkPSdpUGhvbmUtNicgc2tldGNoOnR5cGU9J01TQXJ0Ym9hcmRHcm91cCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTE3OS4wMDAwMDAsIC02MzkuMDAwMDAwKSc+XG5cdFx0XHQgICAgICAgICAgICA8ZyBpZD0nU29jY2VyLUJhbGwnIHNrZXRjaDp0eXBlPSdNU0xheWVyR3JvdXAnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDE3OS4wMDAwMDAsIDYzOS4wMDAwMDApJz5cblx0XHRcdCAgICAgICAgICAgICAgICA8bWFzayBpZD0nbWFzay0yJyBza2V0Y2g6bmFtZT0nTWFzaycgZmlsbD0nd2hpdGUnPlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9JyNwYXRoLTEnPjwvdXNlPlxuXHRcdFx0ICAgICAgICAgICAgICAgIDwvbWFzaz5cblx0XHRcdCAgICAgICAgICAgICAgICA8dXNlIGlkPSdNYXNrJyBzdHJva2U9JyM0QTUzNjEnIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnIHhsaW5rOmhyZWY9JyNwYXRoLTEnPjwvdXNlPlxuXHRcdFx0ICAgICAgICAgICAgICAgIDxwYXRoIGQ9J002LDEyLjEyMDMwNDYgTDEyLjg1NzMzODQsOCBMMTMuMzcyMzc2NSw4Ljg1NzE2NzMgTDYuNTE1MDM4MDcsMTIuOTc3NDcxOSBMNiwxMi4xMjAzMDQ2IEw2LDEyLjEyMDMwNDYgWicgaWQ9J1JlY3RhbmdsZS00NycgZmlsbD0nIzRBNTM2MScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCcgbWFzaz0ndXJsKCNtYXNrLTIpJz48L3BhdGg+XG5cdFx0XHQgICAgICAgICAgICAgICAgPHBhdGggZD0nTTExLjg0OTY0OCw4LjcyNjA1NTEgTDE5LjEwMDExMDMsNS4zNDUxMDkwMSBMMTkuNTIyNzI4NSw2LjI1MTQxNjggTDEyLjI3MjI2NjIsOS42MzIzNjI4OSBMMTEuODQ5NjQ4LDguNzI2MDU1MSBMMTEuODQ5NjQ4LDguNzI2MDU1MSBaJyBpZD0nUmVjdGFuZ2xlLTQ3LUNvcHktMycgZmlsbD0nIzRBNTM2MScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCcgbWFzaz0ndXJsKCNtYXNrLTIpJz48L3BhdGg+XG5cdFx0XHQgICAgICAgICAgICAgICAgPHBhdGggZD0nTTYsMy4xMjAzMDQ2IEwxMi44NTczMzg0LC0xIEwxMy4zNzIzNzY1LC0wLjE0MjgzMjY5OSBMNi41MTUwMzgwNywzLjk3NzQ3MTkgTDYsMy4xMjAzMDQ2IEw2LDMuMTIwMzA0NiBaJyBpZD0nUmVjdGFuZ2xlLTQ3LUNvcHktMicgZmlsbD0nIzRBNTM2MScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCcgbWFzaz0ndXJsKCNtYXNrLTIpJz48L3BhdGg+XG5cdFx0XHQgICAgICAgICAgICAgICAgPHBhdGggZD0nTS0xLDcuMTIwMzA0NiBMNS44NTczMzg0MSwzIEw2LjM3MjM3NjQ4LDMuODU3MTY3MyBMLTAuNDg0OTYxOTI1LDcuOTc3NDcxOSBMLTEsNy4xMjAzMDQ2IEwtMSw3LjEyMDMwNDYgWicgaWQ9J1JlY3RhbmdsZS00Ny1Db3B5LTQnIGZpbGw9JyM0QTUzNjEnIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnIG1hc2s9J3VybCgjbWFzay0yKSc+PC9wYXRoPlxuXHRcdFx0ICAgICAgICAgICAgICAgIDxyZWN0IGlkPSdSZWN0YW5nbGUtNTAnIGZpbGw9JyM0QTUzNjEnIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnIG1hc2s9J3VybCgjbWFzay0yKScgeD0nNCcgeT0nNicgd2lkdGg9JzEnIGhlaWdodD0nNSc+PC9yZWN0PlxuXHRcdFx0ICAgICAgICAgICAgICAgIDxyZWN0IGlkPSdSZWN0YW5nbGUtNTEnIGZpbGw9JyM0QTUzNjEnIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnIG1hc2s9J3VybCgjbWFzay0yKScgeD0nMTEuNScgeT0nMycgd2lkdGg9JzEnIGhlaWdodD0nMTInPjwvcmVjdD5cblx0XHRcdCAgICAgICAgICAgICAgICA8cGF0aCBkPSdNNSw0Ljg1NzE2NzMgTDExLjg1NzMzODQsOC45Nzc0NzE5IEwxMi4zNzIzNzY1LDguMTIwMzA0NiBMNS41MTUwMzgwNyw0IEw1LDQuODU3MTY3MycgaWQ9J1JlY3RhbmdsZS00Ny1Db3B5JyBmaWxsPScjNEE1MzYxJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJyBtYXNrPSd1cmwoI21hc2stMiknPjwvcGF0aD5cblx0XHRcdCAgICAgICAgICAgICAgICA8cGF0aCBkPSdNNSwxMi44NTcxNjczIEwxMS44NTczMzg0LDE2Ljk3NzQ3MTkgTDEyLjM3MjM3NjUsMTYuMTIwMzA0NiBMNS41MTUwMzgwNywxMiBMNSwxMi44NTcxNjczJyBpZD0nUmVjdGFuZ2xlLTQ3LUNvcHktNScgZmlsbD0nIzRBNTM2MScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCcgbWFzaz0ndXJsKCNtYXNrLTIpJz48L3BhdGg+XG5cdFx0XHQgICAgICAgICAgICAgICAgPHBhdGggZD0nTTExLjkwNDg5NzIsNi4xNDc2NjA2NCBMMTMuODcxNDIyNyw4LjMzMTcwODQ5IEwxMi40MDE5NTk2LDEwLjg3Njg5MzMgTDkuNTI3MjU1ODksMTAuMjY1ODU2MiBMOS4yMjAwNTQ0NSw3LjM0MzAyOTY1IEwxMS45MDQ4OTcyLDYuMTQ3NjYwNjQnIGlkPSdQb2x5Z29uLTEnIGZpbGw9JyNEOEQ4RDgnIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnIG1hc2s9J3VybCgjbWFzay0yKSc+PC9wYXRoPlxuXHRcdFx0ICAgICAgICAgICAgICAgIDxwYXRoIGQ9J00xMS45MDQ4OTcyLDYuMTQ3NjYwNjQgTDEzLjg3MTQyMjcsOC4zMzE3MDg0OSBMMTIuNDAxOTU5NiwxMC44NzY4OTMzIEw5LjUyNzI1NTg5LDEwLjI2NTg1NjIgTDkuMjIwMDU0NDUsNy4zNDMwMjk2NSBMMTEuOTA0ODk3Miw2LjE0NzY2MDY0JyBpZD0nUG9seWdvbi0xLUNvcHknIGZpbGw9JyM0QTUzNjEnIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnIG1hc2s9J3VybCgjbWFzay0yKSc+PC9wYXRoPlxuXHRcdFx0ICAgICAgICAgICAgICAgIDxwYXRoIGQ9J003LjQ1NzcxMTg5LDMuMTk1MDQ3MzkgTDcuMzU1MTQ0ODQsNi4xMzIxODMzMyBMNC41MzAwNjc2LDYuOTQyMjYxMiBMMi44ODY2NDA4OSw0LjUwNTc4MDkgTDQuNjk2MDI0NTcsMi4xODk4NzU0MSBMNy40NTc3MTE4OSwzLjE5NTA0NzM5JyBpZD0nUG9seWdvbi0xLUNvcHktMicgZmlsbD0nIzRBNTM2MScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCcgbWFzaz0ndXJsKCNtYXNrLTIpJz48L3BhdGg+XG5cdFx0XHQgICAgICAgICAgICAgICAgPHBhdGggZD0nTTcuNDU3NzExODksMTEuMTk1MDQ3NCBMNy4zNTUxNDQ4NCwxNC4xMzIxODMzIEw0LjUzMDA2NzYsMTQuOTQyMjYxMiBMMi44ODY2NDA4OSwxMi41MDU3ODA5IEw0LjY5NjAyNDU3LDEwLjE4OTg3NTQgTDcuNDU3NzExODksMTEuMTk1MDQ3NCcgaWQ9J1BvbHlnb24tMS1Db3B5LTMnIGZpbGw9JyM0QTUzNjEnIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnIG1hc2s9J3VybCgjbWFzay0yKSc+PC9wYXRoPlxuXHRcdFx0ICAgICAgICAgICAgICAgIDxwYXRoIGQ9J00xNC41NDMxNzAxLDAuMDcyNTkzOTMxNCBMMTQuNDQwNjAzMSwzLjAwOTcyOTg4IEwxMS42MTU1MjU4LDMuODE5ODA3NzQgTDkuOTcyMDk5MTIsMS4zODMzMjc0NSBMMTEuNzgxNDgyOCwtMC45MzI1NzgwNSBMMTQuNTQzMTcwMSwwLjA3MjU5MzkzMTQnIGlkPSdQb2x5Z29uLTEtQ29weS00JyBmaWxsPScjNEE1MzYxJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJyBtYXNrPSd1cmwoI21hc2stMiknPjwvcGF0aD5cblx0XHRcdCAgICAgICAgICAgIDwvZz5cblx0XHRcdCAgICAgICAgPC9nPlxuXHRcdFx0ICAgIDwvZz5cblx0XHRcdDwvc3ZnPlwiXG5cdFx0YWN0aXZpdHkuY29uc3RyYWludHMgPVxuXHRcdFx0bGVhZGluZyA6IFtmb29kLCAxNV1cblx0XHRcdGJvdHRvbTogMTRcblx0XHRcdHdpZHRoOjE2XG5cdFx0XHRoZWlnaHQ6MjBcblx0XHRleHBvcnRzLmxheW91dCgpXG5cdFx0dHJhdmVsID0gbmV3IExheWVyIHN1cGVyTGF5ZXI6ZW1vamlQaWNrZXIsIGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCIsIG9wYWNpdHk6LjRcblx0XHR0cmF2ZWwuaHRtbCA9IFwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdFx0XHQ8c3ZnIHdpZHRoPScje2V4cG9ydHMucHgoMTcpfXB4JyBoZWlnaHQ9JyN7ZXhwb3J0cy5weCgxNil9cHgnIHZpZXdCb3g9JzAgMCAxNyAxNicgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyB4bWxuczpza2V0Y2g9J2h0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaC9ucyc+XG5cdFx0XHQgICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjUuMiAoMjUyMzUpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdFx0ICAgIDx0aXRsZT5UcmFuc3BvcnQ8L3RpdGxlPlxuXHRcdFx0ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdFx0ICAgIDxkZWZzPjwvZGVmcz5cblx0XHRcdCAgICA8ZyBpZD0naU9TLTktS2V5Ym9hcmRzJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJyBza2V0Y2g6dHlwZT0nTVNQYWdlJz5cblx0XHRcdCAgICAgICAgPGcgaWQ9J2lQaG9uZS02LVBvcnRyYWl0LUxpZ2h0LUNvcHknIHNrZXRjaDp0eXBlPSdNU0FydGJvYXJkR3JvdXAnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC0yNDEuMDAwMDAwLCAtNjM4LjAwMDAwMCknPlxuXHRcdFx0ICAgICAgICAgICAgPGcgaWQ9J0tleWJvYXJkcycgc2tldGNoOnR5cGU9J01TTGF5ZXJHcm91cCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMC4wMDAwMDAsIDQwOC4wMDAwMDApJz5cblx0XHRcdCAgICAgICAgICAgICAgICA8ZyBpZD0nVHJhbnNwb3J0JyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgyNDEuNTAwMDAwLCAyMzAuMDAwMDAwKScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCc+XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9J00wLDYgTDEsNiBMMSwxNSBMMCwxNSBMMCw2IFogTTE1LDQgTDE2LDQgTDE2LDE1IEwxNSwxNSBMMTUsNCBaIE0zLjUsMCBMNC41LDAgTDQuNSw3IEwzLjUsNyBMMy41LDAgWiBNMSw2IEwzLjUsNiBMMy41LDcgTDEsNyBMMSw2IFogTTQuNSwwIEw5LjUsMCBMOS41LDEgTDQuNSwxIEw0LjUsMCBaIE05LjUsMCBMMTAuNSwwIEwxMC41LDYgTDkuNSw2IEw5LjUsMCBaIE0xMC41LDQgTDE1LDQgTDE1LDUgTDEwLjUsNSBMMTAuNSw0IFonIGlkPSdTa3lsaW5lJyBmaWxsPScjNEE1NDYxJz48L3BhdGg+XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIDxnIGlkPSdXaW5kb3dzJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgyLjAwMDAwMCwgMi4wMDAwMDApJyBmaWxsPScjNEE1NDYxJz5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSdXaW5kb3cnIHg9JzAnIHk9JzYnIHdpZHRoPScxJyBoZWlnaHQ9JzEnPjwvcmVjdD5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSdXaW5kb3cnIHg9JzMuNScgeT0nMCcgd2lkdGg9JzEnIGhlaWdodD0nMSc+PC9yZWN0PlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9J1dpbmRvdycgeD0nNS41JyB5PScwJyB3aWR0aD0nMScgaGVpZ2h0PScxJz48L3JlY3Q+XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0nV2luZG93JyB4PSc1LjUnIHk9JzInIHdpZHRoPScxJyBoZWlnaHQ9JzEnPjwvcmVjdD5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSdXaW5kb3cnIHg9JzMuNScgeT0nMicgd2lkdGg9JzEnIGhlaWdodD0nMSc+PC9yZWN0PlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9J1dpbmRvdycgeD0nMTEnIHk9JzQnIHdpZHRoPScxJyBoZWlnaHQ9JzEnPjwvcmVjdD5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSdXaW5kb3cnIHg9JzExJyB5PSc2JyB3aWR0aD0nMScgaGVpZ2h0PScxJz48L3JlY3Q+XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIDwvZz5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgPGcgaWQ9J0NhcicgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMi41MDAwMDAsIDYuNTAwMDAwKSc+XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSdNOC41LDggTDIuNSw4IEwyLjUsOS41IEwwLjUsOS41IEwwLjUsNy44NjgxMTQ1IEMwLjIwMTIwMjE5Miw3LjY5NTgyNzAyIDAsNy4zNzA5MTM2MyAwLDYuOTkwNjMxMSBMMCw1LjAwOTM2ODkgQzAsNC40NTE5MDk4NSAwLjQ0NDgzNjk3NCw0IDAuOTk1NTc3NDk5LDQgTDEwLjAwNDQyMjUsNCBDMTAuNTU0MjY0OCw0IDExLDQuNDQzMzUzMTggMTEsNS4wMDkzNjg5IEwxMSw2Ljk5MDYzMTEgQzExLDcuMzY1MzMxNSAxMC43OTkwMjQ0LDcuNjkyMzQ1MTkgMTAuNSw3Ljg2NjQ5MDAyIEwxMC41LDkuNSBMOC41LDkuNSBMOC41LDggWiBNMS43NSw2LjUgQzIuMTY0MjEzNTYsNi41IDIuNSw2LjE2NDIxMzU2IDIuNSw1Ljc1IEMyLjUsNS4zMzU3ODY0NCAyLjE2NDIxMzU2LDUgMS43NSw1IEMxLjMzNTc4NjQ0LDUgMSw1LjMzNTc4NjQ0IDEsNS43NSBDMSw2LjE2NDIxMzU2IDEuMzM1Nzg2NDQsNi41IDEuNzUsNi41IFogTTkuMjUsNi41IEM5LjY2NDIxMzU2LDYuNSAxMCw2LjE2NDIxMzU2IDEwLDUuNzUgQzEwLDUuMzM1Nzg2NDQgOS42NjQyMTM1Niw1IDkuMjUsNSBDOC44MzU3ODY0NCw1IDguNSw1LjMzNTc4NjQ0IDguNSw1Ljc1IEM4LjUsNi4xNjQyMTM1NiA4LjgzNTc4NjQ0LDYuNSA5LjI1LDYuNSBaIE0wLjUsNyBMMTAuNSw3IEwxMC41LDcuNSBMMC41LDcuNSBMMC41LDcgWiBNMyw2LjUgTDgsNi41IEw4LDcgTDMsNyBMMyw2LjUgWicgaWQ9J0JvZHknIGZpbGw9JyM0QTU0NjEnPjwvcGF0aD5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9J00xLjUsNC41IEwxLjUsMyBDMS41LDEuMzQzMTQ1NzUgMi44MzkwMjAxMywwIDQuNTAxNjY1NDcsMCBMNi40OTgzMzQ1MywwIEM4LjE1NjEwODU5LDAgOS41LDEuMzQ2NTE3MTIgOS41LDMgTDkuNSw1JyBpZD0nUm9vZicgc3Ryb2tlPScjNEE1NDYxJz48L3BhdGg+XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIDwvZz5cblx0XHRcdCAgICAgICAgICAgICAgICA8L2c+XG5cdFx0XHQgICAgICAgICAgICA8L2c+XG5cdFx0XHQgICAgICAgIDwvZz5cblx0XHRcdCAgICA8L2c+XG5cdFx0XHQ8L3N2Zz5cIlxuXHRcdHRyYXZlbC5jb25zdHJhaW50cyA9XG5cdFx0XHRsZWFkaW5nIDogW2FjdGl2aXR5LCAxNV1cblx0XHRcdGJvdHRvbTogMTRcblx0XHRcdHdpZHRoOjE2XG5cdFx0XHRoZWlnaHQ6MjBcblx0XHRleHBvcnRzLmxheW91dCgpXG5cdFx0b2JqZWN0cyA9IG5ldyBMYXllciBzdXBlckxheWVyOmVtb2ppUGlja2VyLCBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiLCBvcGFjaXR5Oi40XG5cdFx0b2JqZWN0cy5odG1sID0gXCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0XHRcdFx0PHN2ZyB3aWR0aD0nI3tleHBvcnRzLnB4KDExKX1weCcgaGVpZ2h0PScje2V4cG9ydHMucHgoMTYpfXB4JyB2aWV3Qm94PScwIDAgMTEgMTYnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycgeG1sbnM6c2tldGNoPSdodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMnPlxuXHRcdFx0ICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy41LjIgKDI1MjM1KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHRcdCAgICA8dGl0bGU+TGlnaHRidWxiPC90aXRsZT5cblx0XHRcdCAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHRcdCAgICA8ZGVmcz48L2RlZnM+XG5cdFx0XHQgICAgPGcgaWQ9J1BhZ2UtMScgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCcgc2tldGNoOnR5cGU9J01TUGFnZSc+XG5cdFx0XHQgICAgICAgIDxnIGlkPSdpUGhvbmUtNicgc2tldGNoOnR5cGU9J01TQXJ0Ym9hcmRHcm91cCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTI0NC4wMDAwMDAsIC02MzkuMDAwMDAwKScgc3Ryb2tlPScjNEE1MzYxJz5cblx0XHRcdCAgICAgICAgICAgIDxnIGlkPSdMaWdodGJ1bGInIHNrZXRjaDp0eXBlPSdNU0xheWVyR3JvdXAnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDI0NC4wMDAwMDAsIDYzOS4wMDAwMDApJz5cblx0XHRcdCAgICAgICAgICAgICAgICA8cGF0aCBkPSdNOCwxMC40MDAyOTA0IEM5Ljc4MDgzNzk1LDkuNDg5OTM0OTEgMTEsNy42MzczNDI3MyAxMSw1LjUgQzExLDIuNDYyNDMzODggOC41Mzc1NjYxMiwwIDUuNSwwIEMyLjQ2MjQzMzg4LDAgMCwyLjQ2MjQzMzg4IDAsNS41IEMwLDcuNjM3MzQyNzMgMS4yMTkxNjIwNSw5LjQ4OTkzNDkxIDMsMTAuNDAwMjkwNCBMMywxNC4wMDIwODY5IEMzLDE1LjEwMTczOTQgMy44OTc2MTYwMiwxNiA1LjAwNDg4MTUsMTYgTDUuOTk1MTE4NSwxNiBDNy4xMDYxMDAyLDE2IDgsMTUuMTA1NTAzOCA4LDE0LjAwMjA4NjkgTDgsMTAuNDAwMjkwNCBaJyBpZD0nT3ZhbC0xNycgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCc+PC9wYXRoPlxuXHRcdFx0ICAgICAgICAgICAgICAgIDxyZWN0IGlkPSdSZWN0YW5nbGUtNTAnIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnIHg9JzMnIHk9JzEyJyB3aWR0aD0nNScgaGVpZ2h0PScxJz48L3JlY3Q+XG5cdFx0XHQgICAgICAgICAgICAgICAgPHJlY3QgaWQ9J1JlY3RhbmdsZS01MScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCcgeD0nNCcgeT0nMTMuNScgd2lkdGg9JzEuNScgaGVpZ2h0PScxJz48L3JlY3Q+XG5cdFx0XHQgICAgICAgICAgICAgICAgPHBhdGggZD0nTTUsOC41IEM1LDguNSAzLjQ5OTk5OTk5LDcuNTAwMDAwMDEgNCw3IEM0LjUwMDAwMDAxLDYuNDk5OTk5OTkgNSw3LjY2NjY2NjY3IDUuNSw4IEM1LjUsOCA2LjUsNi41MDAwMDAwMSA3LDcgQzcuNSw3LjQ5OTk5OTk5IDYsOC41IDYsOC41IEw2LDExIEw1LDExIEw1LDguNSBaJyBpZD0nUmVjdGFuZ2xlLTUyJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJz48L3BhdGg+XG5cdFx0XHQgICAgICAgICAgICA8L2c+XG5cdFx0XHQgICAgICAgIDwvZz5cblx0XHRcdCAgICA8L2c+XG5cdFx0XHQ8L3N2Zz5cIlxuXHRcdG9iamVjdHMuY29uc3RyYWludHMgPVxuXHRcdFx0bGVhZGluZyA6IFt0cmF2ZWwsIDE1XVxuXHRcdFx0Ym90dG9tOiAxNFxuXHRcdFx0d2lkdGg6MTZcblx0XHRcdGhlaWdodDoyMFxuXHRcdGV4cG9ydHMubGF5b3V0KClcblx0XHRzeW1ib2xzID0gbmV3IExheWVyIHN1cGVyTGF5ZXI6ZW1vamlQaWNrZXIsIGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCIsIG9wYWNpdHk6LjRcblx0XHRzeW1ib2xzLmh0bWwgPSBcIjw/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyc/PlxuXHRcdFx0PHN2ZyB3aWR0aD0nI3tleHBvcnRzLnB4KDE2KX1weCcgaGVpZ2h0PScje2V4cG9ydHMucHgoMTcpfXB4JyB2aWV3Qm94PScwIDAgMTUgMTcnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycgeG1sbnM6c2tldGNoPSdodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMnPlxuXHRcdFx0ICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy41LjIgKDI1MjM1KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHRcdCAgICA8dGl0bGU+T2JqZWN0cyAmYW1wOyBTeW1ib2xzPC90aXRsZT5cblx0XHRcdCAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHRcdCAgICA8ZGVmcz48L2RlZnM+XG5cdFx0XHQgICAgPGcgaWQ9J2lPUy05LUtleWJvYXJkcycgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCcgc2tldGNoOnR5cGU9J01TUGFnZSc+XG5cdFx0XHQgICAgICAgIDxnIGlkPSdpUGhvbmUtNi1Qb3J0cmFpdC1MaWdodC1Db3B5JyBza2V0Y2g6dHlwZT0nTVNBcnRib2FyZEdyb3VwJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtMzA0LjAwMDAwMCwgLTYzOC4wMDAwMDApJyBmaWxsPScjNEE1NDYxJz5cblx0XHRcdCAgICAgICAgICAgIDxnIGlkPSdLZXlib2FyZHMnIHNrZXRjaDp0eXBlPSdNU0xheWVyR3JvdXAnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDAuMDAwMDAwLCA0MDguMDAwMDAwKSc+XG5cdFx0XHQgICAgICAgICAgICAgICAgPGcgaWQ9J09iamVjdHMtJmFtcDstU3ltYm9scycgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMzA0LjAwMDAwMCwgMjMwLjAwMDAwMCknPlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA8ZyBpZD0nVGhpbmcnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDAuMDAwMDAwLCAwLjUwMDAwMCknIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnPlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9J1JlY3RhbmdsZS0xMjA5JyB4PScwJyB5PScwJyB3aWR0aD0nNycgaGVpZ2h0PScxJz48L3JlY3Q+XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0nUmVjdGFuZ2xlLTEyMDknIHg9JzAnIHk9JzInIHdpZHRoPSc3JyBoZWlnaHQ9JzEnPjwvcmVjdD5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSdSZWN0YW5nbGUtMTIxMScgeD0nMycgeT0nMycgd2lkdGg9JzEnIGhlaWdodD0nNCc+PC9yZWN0PlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA8L2c+XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9J00xMS43NSwwLjE1OTI2Mzk3OCBMMTEuNzUsMCBMMTEsMCBMMTEsNS4wOTE0OTMgQzEwLjU5MzQ0LDQuOTQyMjEzOTIgMTAuMDYzOTY2Miw0Ljk2NDUzMjI0IDkuNTU3MTUzOTksNS4xOTAxNzk1NyBDOC42OTg0OTI5Myw1LjU3MjQ4MDEgOC4yMzAwMzgzNSw2LjM5MzY1NjIxIDguNTEwODMxNDEsNy4wMjQzMjc3NCBDOC43OTE2MjQ0Nyw3LjY1NDk5OTI4IDkuNzE1MzM0NTQsNy44NTYzNDM3NSAxMC41NzM5OTU2LDcuNDc0MDQzMjEgQzExLjI3NjExODMsNy4xNjE0MzgwMyAxMS43MTczMzkzLDYuNTU1Mzg5NzIgMTEuNzAxMzU5NSw2IEwxMS43NSw2IEwxMS43NSwxLjM5Mzg1MDU2IEMxMi4zMTc1OTA4LDEuNTk1OTAwMzcgMTMsMi4wODE3NDU2IDEzLDMuMjUgQzEzLDQuMjUgMTIuNzUsNS41IDEyLjc1LDUuNSBDMTIuNzUsNS41IDEzLjc1LDQuNzUgMTMuNzUsMi41IEMxMy43NSwxLjAyMjU2MTAxIDEyLjU2NDI2NzQsMC40MDc0NzMwMTkgMTEuNzUsMC4xNTkyNjM5NzggWicgaWQ9J05vdGUnIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnPjwvcGF0aD5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgPHRleHQgaWQ9JyZhbXA7JyBza2V0Y2g6dHlwZT0nTVNUZXh0TGF5ZXInIGZvbnQtZmFtaWx5PSdTRiBVSSBEaXNwbGF5JyBmb250LXNpemU9JzkuNScgZm9udC13ZWlnaHQ9J25vcm1hbCc+XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8dHNwYW4geD0nMC4yNScgeT0nMTYnPiZhbXA7PC90c3Bhbj5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgPC90ZXh0PlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA8dGV4dCBpZD0nJScgc2tldGNoOnR5cGU9J01TVGV4dExheWVyJyBmb250LWZhbWlseT0nU0YgVUkgRGlzcGxheScgZm9udC1zaXplPSc5LjUnIGZvbnQtd2VpZ2h0PSdub3JtYWwnPlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPHRzcGFuIHg9JzcuNzUnIHk9JzE2Jz4lPC90c3Bhbj5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgPC90ZXh0PlxuXHRcdFx0ICAgICAgICAgICAgICAgIDwvZz5cblx0XHRcdCAgICAgICAgICAgIDwvZz5cblx0XHRcdCAgICAgICAgPC9nPlxuXHRcdFx0ICAgIDwvZz5cblx0XHRcdDwvc3ZnPlwiXG5cdFx0c3ltYm9scy5jb25zdHJhaW50cyA9XG5cdFx0XHRsZWFkaW5nIDogW29iamVjdHMsIDE1XVxuXHRcdFx0Ym90dG9tOiAxNFxuXHRcdFx0d2lkdGg6MTZcblx0XHRcdGhlaWdodDoyMFxuXHRcdGV4cG9ydHMubGF5b3V0KClcblx0XHRmbGFncyA9IG5ldyBMYXllciBzdXBlckxheWVyOmVtb2ppUGlja2VyLCBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiLCBvcGFjaXR5Oi40XG5cdFx0ZmxhZ3MuaHRtbCA9IFwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdFx0XHQ8c3ZnIHdpZHRoPScje2V4cG9ydHMucHgoMTEpfXB4JyBoZWlnaHQ9JyN7ZXhwb3J0cy5weCgxNSl9cHgnIHZpZXdCb3g9JzAgMCAxMSAxNScgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyB4bWxuczpza2V0Y2g9J2h0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaC9ucyc+XG5cdFx0XHQgICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjUuMiAoMjUyMzUpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdFx0ICAgIDx0aXRsZT5GbGFnPC90aXRsZT5cblx0XHRcdCAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHRcdCAgICA8ZGVmcz48L2RlZnM+XG5cdFx0XHQgICAgPGcgaWQ9J2lPUy05LUtleWJvYXJkcycgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCcgc2tldGNoOnR5cGU9J01TUGFnZSc+XG5cdFx0XHQgICAgICAgIDxnIGlkPSdpUGhvbmUtNi1Qb3J0cmFpdC1MaWdodC1Db3B5JyBza2V0Y2g6dHlwZT0nTVNBcnRib2FyZEdyb3VwJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtMjc1LjAwMDAwMCwgLTYzOS4wMDAwMDApJz5cblx0XHRcdCAgICAgICAgICAgIDxnIGlkPSdLZXlib2FyZHMnIHNrZXRjaDp0eXBlPSdNU0xheWVyR3JvdXAnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDAuMDAwMDAwLCA0MDguMDAwMDAwKSc+XG5cdFx0XHQgICAgICAgICAgICAgICAgPGcgaWQ9J0ZsYWcnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDI3NS4wMDAwMDAsIDIzMS41MDAwMDApJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJz5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9J1BvbGUnIGZpbGw9JyM0QTU0NjEnIHg9JzAnIHk9JzAnIHdpZHRoPScxJyBoZWlnaHQ9JzE0Jz48L3JlY3Q+XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9J00xLDEgQzEsMSAxLjI1LDIgMy41LDIgQzUuNzUsMiA2LDAuNzQ5OTk5OTk4IDgsMC43NSBDMTAsMC43NDk5OTk5OTggMTAsMS41IDEwLDEuNSBMMTAsNy41IEMxMCw3LjUgMTAsNi41IDgsNi41IEM2LDYuNSA0LjgwNjIzOTExLDggMy41LDggQzIuMTkzNzYwODksOCAxLDcgMSw3IEwxLDEgWicgc3Ryb2tlPScjNEE1NDYxJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJz48L3BhdGg+XG5cdFx0XHQgICAgICAgICAgICAgICAgPC9nPlxuXHRcdFx0ICAgICAgICAgICAgPC9nPlxuXHRcdFx0ICAgICAgICA8L2c+XG5cdFx0XHQgICAgPC9nPlxuXHRcdFx0PC9zdmc+XCJcblx0XHRmbGFncy5jb25zdHJhaW50cyA9XG5cdFx0XHRsZWFkaW5nIDogW3N5bWJvbHMsIDE1XVxuXHRcdFx0Ym90dG9tOiAxNFxuXHRcdFx0d2lkdGg6MTZcblx0XHRcdGhlaWdodDoyMFxuXHRcdGV4cG9ydHMubGF5b3V0KClcblxuXHRcdGxvYWRFbW9qaXMgPSAoZW0pIC0+XG5cdFx0XHRyb3crKyBcblx0XHRcdGluZGV4ID0gZW1vamlzQXJyYXkuaW5kZXhPZihlbSlcblx0XHRcdGNvbCA9IE1hdGguZmxvb3IoaW5kZXgvNSlcblx0XHRcdGlmIHJvdyA+IDRcblx0XHRcdFx0cm93ID0gMCBcblx0XHRcdGVtb2ppID0gbmV3IExheWVyIHg6Y29sKmJveCArIChlbW9qaVNwYWNlciAqIGNvbCkgKyBleHBvcnRzLnB4KDMpLCB5OnJvdypib3ggKyAoZW1vamlTcGFjZXIgKiByb3cpICsgZXhwb3J0cy5weCg0MCksIHN1cGVyTGF5ZXI6ZW1vamlHYWxsZXkuY29udGVudCwgd2lkdGg6Ym94LCBoZWlnaHQ6Ym94LCBuYW1lOmRlY29kZVVSSUNvbXBvbmVudChlbSksIGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCJcblx0XHRcdGVtb2ppLmh0bWwgPSBkZWNvZGVVUklDb21wb25lbnQoZW0pXG5cdFx0XHRlbW9qaS5zdHlsZSA9IHtcblx0XHRcdFx0XCJmb250LXNpemVcIiA6IGV4cG9ydHMucHgoMjYpICsgXCJweFwiXG5cdFx0XHRcdFwibGluZS1oZWlnaHRcIiA6IGJveCArIFwicHhcIlxuXHRcdFx0XHRcInRleHQtYWxpZ25cIiA6IFwiY2VudGVyXCJcblx0XHRcdH1cblx0XHRcdGVtb2ppLm9uIEV2ZW50cy5DbGljaywgLT5cblx0XHRcdFx0cHJpbnQgQC5uYW1lXG5cdFx0XHRlbW9qaXNMb2FkZWQrK1xuXHRcdFx0cHJpbnQgZW1vamlzTG9hZGVkXG5cblx0XHRpbmMgPSAyMDBcblx0XHRmaXJzdExvYWQgPSAuMVxuXHRcdHRpbWVJbmMgPSAyXG5cdFx0ZnVsbEFtb3VudCA9IGVtb2ppc0FycmF5Lmxlbmd0aFxuXHRcdGxvYWRzID0gTWF0aC5jZWlsKGZ1bGxBbW91bnQgLyBpbmMpIC0gMVxuXHRcdHBhcnRpYWxBbW91bnQgPSBmdWxsQW1vdW50ICUgaW5jXG5cdFx0ZW1vamlzTG9hZGVkID0gMFxuXHRcdGZvciBpIGluIFswLi5sb2Fkc11cblx0XHRcdGkrK1xuXHRcdFx0XG5cdFx0I1Njcm9sbCBMb2FkXG5cdFx0ZW1vamlHYWxsZXkub24gRXZlbnRzLk1vdmUsIC0+XG5cdFx0XHRpZiBlbW9qaUdhbGxleS5zY3JvbGxYID4gMjAwMCAmJiBlbW9qaXNMb2FkZWQgPCA0MDBcblx0XHRcdFx0Zm9yIGVtIGluIGVtb2ppc0FycmF5WzIwMC4uLjQwMF1cblx0XHRcdFx0XHRsb2FkRW1vamlzKGVtKVxuXHRcdFx0XHRlbW9qaUdhbGxleS5zY3JvbGxYID0gMjAwMVxuXHRcdFx0aWYgZW1vamlHYWxsZXkuc2Nyb2xsWCA+IDUwMDAgJiYgZW1vamlzTG9hZGVkIDwgNjAwXG5cdFx0XHRcdGZvciBlbSBpbiBlbW9qaXNBcnJheVs0MDAuLi42MDBdXG5cdFx0XHRcdFx0bG9hZEVtb2ppcyhlbSlcblx0XHRcdFx0ZW1vamlHYWxsZXkuc2Nyb2xsWCA9IDUwMDFcblx0XHRcdGlmIGVtb2ppR2FsbGV5LnNjcm9sbFggPiA3NTAwICYmIGVtb2ppc0xvYWRlZCA8IDgwMFxuXHRcdFx0XHRmb3IgZW0gaW4gZW1vamlzQXJyYXlbNjAwLi4uODAwXVxuXHRcdFx0XHRcdGxvYWRFbW9qaXMoZW0pXG5cdFx0XHRcdGVtb2ppR2FsbGV5LnNjcm9sbFggPSA3NTAxXG5cdFx0XHRpZiBlbW9qaUdhbGxleS5zY3JvbGxYID4gMTAwMDAgJiYgZW1vamlzTG9hZGVkIDwgMTAwMFxuXHRcdFx0XHRmb3IgZW0gaW4gZW1vamlzQXJyYXlbODAwLi4uMTAwMF1cblx0XHRcdFx0XHRsb2FkRW1vamlzKGVtKVxuXHRcdFx0XHRlbW9qaUdhbGxleS5zY3JvbGxYID0gMTAwMDFcblx0XHRcdGlmIGVtb2ppR2FsbGV5LnNjcm9sbFggPiAxMjUwMCAmJiBlbW9qaXNMb2FkZWQgPCAxMjAwXG5cdFx0XHRcdGZvciBlbSBpbiBlbW9qaXNBcnJheVsxMDAwLi4uMTI5N11cblx0XHRcdFx0XHRsb2FkRW1vamlzKGVtKVxuXHRcdFx0XHRlbW9qaUdhbGxleS5zY3JvbGxYID0gMTI1MDFcblxuXHRcdCNUaW1lIExvYWRcblx0XHRVdGlscy5kZWxheSAxLCAtPiBcblx0XHRcdGlmIGVtb2ppc0xvYWRlZCA8IDQwMCAmJiBlbW9qaUdhbGxleS5zY3JvbGxYID09IDBcblx0XHRcdFx0c2Nyb2xsWCA9IGVtb2ppR2FsbGV5LnNjcm9sbFhcblx0XHRcdFx0Zm9yIGVtIGluIGVtb2ppc0FycmF5WzIwMC4uLjQwMF1cblx0XHRcdFx0XHRsb2FkRW1vamlzKGVtKVxuXHRcdFV0aWxzLmRlbGF5IDIuNSwgLT4gXG5cdFx0XHRpZiBlbW9qaXNMb2FkZWQgPCA2MDAgJiYgZW1vamlHYWxsZXkuc2Nyb2xsWCA9PSAwXG5cdFx0XHRcdHNjcm9sbFggPSBlbW9qaUdhbGxleS5zY3JvbGxYXG5cdFx0XHRcdGZvciBlbSBpbiBlbW9qaXNBcnJheVs0MDAuLi42MDBdXG5cdFx0XHRcdFx0bG9hZEVtb2ppcyhlbSlcblx0XHRVdGlscy5kZWxheSAyLjUsIC0+IFxuXHRcdFx0aWYgZW1vamlzTG9hZGVkIDwgODAwICYmIGVtb2ppR2FsbGV5LnNjcm9sbFggPT0gMFxuXHRcdFx0XHRzY3JvbGxYID0gZW1vamlHYWxsZXkuc2Nyb2xsWFxuXHRcdFx0XHRmb3IgZW0gaW4gZW1vamlzQXJyYXlbNjAwLi4uODAwXVxuXHRcdFx0XHRcdGxvYWRFbW9qaXMoZW0pXG5cdFx0VXRpbHMuZGVsYXkgNS41LCAtPiBcblx0XHRcdGlmIGVtb2ppc0xvYWRlZCA8IDEwMDAgJiYgZW1vamlHYWxsZXkuc2Nyb2xsWCA9PSAwXG5cdFx0XHRcdHNjcm9sbFggPSBlbW9qaUdhbGxleS5zY3JvbGxYXG5cdFx0XHRcdGZvciBlbSBpbiBlbW9qaXNBcnJheVs4MDAuLi4xMDAwXVxuXHRcdFx0XHRcdGxvYWRFbW9qaXMoZW0pXG5cdFx0VXRpbHMuZGVsYXkgNywgLT4gXG5cdFx0XHRpZiBlbW9qaXNMb2FkZWQgPCAxMjk3ICYmIGVtb2ppR2FsbGV5LnNjcm9sbFggPT0gMFxuXHRcdFx0XHRzY3JvbGxYID0gZW1vamlHYWxsZXkuc2Nyb2xsWFxuXHRcdFx0XHRmb3IgZW0gaW4gZW1vamlzQXJyYXlbMTAwMC4uLjEyOTddXG5cdFx0XHRcdFx0bG9hZEVtb2ppcyhlbSlcblxuXG5cdFx0Zm9yIGVtIGluIGZyZXFFbW9qaXNBcnJheVxuXHRcdFx0bG9hZEVtb2ppcyhlbSlcblx0XHRmb3IgZW0gaW4gZW1vamlzQXJyYXlbMC4uLmluY11cblx0XHRcdGxvYWRFbW9qaXMoZW0pXG5cblxuXHRcdGZvciBzZWMgaW4gZW1vamlTZWN0aW9uc1xuXHRcdFx0aW5kZXggPSBlbW9qaVNlY3Rpb25zLmluZGV4T2Yoc2VjKVxuXHRcdFx0dGl0bGUgPSBuZXcgTGF5ZXIgc3VwZXJMYXllcjplbW9qaUdhbGxleS5jb250ZW50LCBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiLCB4OmluZGV4KjUwMDAgKyBleHBvcnRzLnB4KDgpLCBoZWlnaHQ6ODAsIHdpZHRoOjgwMFxuXHRcdFx0dGl0bGUuaHRtbCA9IHNlY1xuXHRcdFx0dGl0bGUuc3R5bGUgPSB7XG5cdFx0XHRcdFwiZm9udC1zaXplXCIgOiBleHBvcnRzLnB4KDEyKSArIFwicHhcIlxuXHRcdFx0XHRcImZvbnQtd2VpZ2h0XCIgOiA2MDBcblx0XHRcdFx0XCJmb250LWZhbWlseVwiIDogJy1hcHBsZS1zeXN0ZW0sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYnXG5cdFx0XHRcdCdsaW5lLWhlaWdodCcgOiBleHBvcnRzLnB4KDQyKSArIFwicHhcIlxuXHRcdFx0XHQnbGV0dGVyLXNwYWNpbmcnIDogZXhwb3J0cy5weCgwLjcpICsgXCJweFwiXG5cdFx0XHRcdCdjb2xvcicgOiBcIiNBNUE2QTlcIlxuXHRcdFx0XHQndGV4dC10cmFuc2Zvcm0nIDogJ3VwcGVyY2FzZSdcblx0XHRcdH1cblxuXG5cdGVtb2ppS2V5Lm9uIEV2ZW50cy5Ub3VjaEVuZCwgLT5cblx0XHRlbW9qaUtleS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNBQUIzQkNcIlxuXG5cblx0cmV0dXJuS2V5ID0gbmV3IExheWVyIHN1cGVyTGF5ZXI6Ym9hcmQsIGJvcmRlclJhZGl1czpleHBvcnRzLnB4KDUpLCBiYWNrZ3JvdW5kQ29sb3I6XCIjQUFCM0JDXCIsIHNoYWRvd1k6ZXhwb3J0cy5weCgxKSwgc2hhZG93Q29sb3I6XCIjOTI5NDk4XCIsIGNvbG9yOlwiYmxhY2tcIlxuXHRyZXR1cm5LZXkuY29uc3RyYWludHMgPSAod2lkdGg6ODcuNSwgaGVpZ2h0OjQyLCB0cmFpbGluZzozLCBib3R0b206NClcblx0cmV0dXJuS2V5Lmh0bWwgPSBcInJldHVyblwiXG5cdHJldHVybktleS5zdHlsZSA9IHtcblx0XHRcImZvbnQtc2l6ZVwiIDogZXhwb3J0cy5weCgxNikgKyBcInB4XCJcblx0XHRcImZvbnQtd2VpZ2h0XCIgOiA0MDBcblx0XHRcImZvbnQtZmFtaWx5XCIgOiAnLWFwcGxlLXN5c3RlbSwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZidcblx0XHQndGV4dC1hbGlnbicgOiAnY2VudGVyJ1xuXHRcdCdsaW5lLWhlaWdodCcgOiBleHBvcnRzLnB4KDQyKSArIFwicHhcIlxuXG5cdH1cblx0ZXhwb3J0cy5sYXlvdXQoKVxuXG5cdHNwYWNlS2V5ID0gbmV3IExheWVyIHN1cGVyTGF5ZXI6Ym9hcmQsIGJvcmRlclJhZGl1czpleHBvcnRzLnB4KDUpLCBiYWNrZ3JvdW5kQ29sb3I6XCJ3aGl0ZVwiLCBzaGFkb3dZOmV4cG9ydHMucHgoMSksIHNoYWRvd0NvbG9yOlwiIzkyOTQ5OFwiLCBjb2xvcjpcImJsYWNrXCJcblx0c3BhY2VLZXkuY29uc3RyYWludHMgPSAod2lkdGg6MTgwLCBoZWlnaHQ6NDIsIGxlYWRpbmc6W2Vtb2ppS2V5LCA2XSwgYm90dG9tOjQpXG5cdHNwYWNlS2V5Lmh0bWwgPSBcInNwYWNlXCJcblx0c3BhY2VLZXkuc3R5bGUgPSB7XG5cdFx0XCJmb250LXNpemVcIiA6IGV4cG9ydHMucHgoMTYpICsgXCJweFwiXG5cdFx0XCJmb250LXdlaWdodFwiIDogNDAwXG5cdFx0XCJmb250LWZhbWlseVwiIDogJy1hcHBsZS1zeXN0ZW0sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYnXG5cdFx0J3RleHQtYWxpZ24nIDogJ2NlbnRlcidcblx0XHQnbGluZS1oZWlnaHQnIDogZXhwb3J0cy5weCg0MikgKyBcInB4XCJcblxuXHR9XG5cdGV4cG9ydHMubGF5b3V0KClcblxuXG5cdHNwYWNlS2V5Lm9uIEV2ZW50cy5Ub3VjaFN0YXJ0LCAtPlxuXHRcdHNwYWNlS2V5LmJhY2tncm91bmRDb2xvciA9IFwiI0FBQjNCQ1wiXG5cdHNwYWNlS2V5Lm9uIEV2ZW50cy5Ub3VjaEVuZCwgLT5cblx0XHRzcGFjZUtleS5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCJcblxuXG5cdHJldHVybktleS5vbiBFdmVudHMuVG91Y2hTdGFydCwgLT5cblx0XHRyZXR1cm5LZXkuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiXG5cdHJldHVybktleS5vbiBFdmVudHMuVG91Y2hFbmQsIC0+XG5cdFx0cmV0dXJuS2V5LmJhY2tncm91bmRDb2xvciA9IFwiI0FBQjNCQ1wiXG5cblxuXHRyZXR1cm4ge1xuXHRcdFwiYm9hcmRcIiA6IGJvYXJkXG5cdFx0XCJrZXlzXCIgOiBrZXlzQXJyYXlcblx0XHRcImtleVwiIDoge1xuXHRcdFx0XCJxXCIgOiBrZXlzQXJyYXlbMF1cblx0XHRcdFwid1wiIDoga2V5c0FycmF5WzFdXG5cdFx0XHRcImVcIiA6IGtleXNBcnJheVsyXVxuXHRcdFx0XCJyXCIgOiBrZXlzQXJyYXlbM11cblx0XHRcdFwidFwiIDoga2V5c0FycmF5WzRdXG5cdFx0XHRcInlcIiA6IGtleXNBcnJheVs1XVxuXHRcdFx0XCJ1XCIgOiBrZXlzQXJyYXlbNl1cblx0XHRcdFwiaVwiIDoga2V5c0FycmF5WzddXG5cdFx0XHRcIm9cIiA6IGtleXNBcnJheVs4XVxuXHRcdFx0XCJwXCIgOiBrZXlzQXJyYXlbOV1cblx0XHRcdFwiYVwiIDoga2V5c0FycmF5WzEwXVxuXHRcdFx0XCJzXCIgOiBrZXlzQXJyYXlbMTFdXG5cdFx0XHRcImRcIiA6IGtleXNBcnJheVsxMl1cblx0XHRcdFwiZlwiIDoga2V5c0FycmF5WzEzXVxuXHRcdFx0XCJnXCIgOiBrZXlzQXJyYXlbMTRdXG5cdFx0XHRcImhcIiA6IGtleXNBcnJheVsxNV1cblx0XHRcdFwialwiIDoga2V5c0FycmF5WzE2XVxuXHRcdFx0XCJrXCIgOiBrZXlzQXJyYXlbMTddXG5cdFx0XHRcImxcIiA6IGtleXNBcnJheVsxOF1cblx0XHRcdFwielwiIDoga2V5c0FycmF5WzE5XVxuXHRcdFx0XCJ4XCIgOiBrZXlzQXJyYXlbMjBdXG5cdFx0XHRcImNcIiA6IGtleXNBcnJheVsyMV1cblx0XHRcdFwidlwiIDoga2V5c0FycmF5WzIyXVxuXHRcdFx0XCJiXCIgOiBrZXlzQXJyYXlbMjNdXG5cdFx0XHRcIm5cIiA6IGtleXNBcnJheVsyNF1cblx0XHRcdFwibVwiIDoga2V5c0FycmF5WzI1XVxuXHRcdH1cblx0fVxuXG5leHBvcnRzLk1lbnUgPSAoYXJyYXkpIC0+XG5cdHNldHVwID0gc2V0dXBDb21wb25lbnQoXCJtZW51XCIsIGFycmF5KVxuXHRhbGwgPSBuZXcgTGF5ZXIgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIlxuXHRhbGwuY29uc3RyYWludHMgPSBcblx0XHRsZWFkaW5nOjBcblx0XHR0cmFpbGluZzowXG5cdFx0dG9wOjBcblx0XHRib3R0b206MFxuXHRvdmVybGF5ID0gbmV3IExheWVyIGJhY2tncm91bmRDb2xvcjpcInJnYmEoMCwgMCwgMCwgLjQpXCIsIHN1cGVyTGF5ZXI6YWxsLCBuYW1lOlwib3ZlcmxheVwiXG5cdG92ZXJsYXkuY29uc3RyYWludHMgPVxuXHRcdGxlYWRpbmc6MFxuXHRcdHRyYWlsaW5nOjBcblx0XHR0b3A6MFxuXHRcdGJvdHRvbTowXG5cdGV4cG9ydHMuYmdCbHVyKG92ZXJsYXkpXG5cdG1lbnVzID0gbmV3IExheWVyIGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCIsIHN1cGVyTGF5ZXI6YWxsXG5cdG1lbnVzLmNvbnN0cmFpbnRzID0gXG5cdFx0bGVhZGluZzowXG5cdFx0dHJhaWxpbmc6MFxuXHRcdHRvcDowXG5cdFx0Ym90dG9tOjBcblx0ZXhpdEJ1dHRvbiA9IG5ldyBleHBvcnRzLkJ1dHRvbiB0eXBlOlwiYmlnXCIsIHRleHQ6c2V0dXAuZXhpdCwgYmx1cjpmYWxzZSwgc3VwZXJMYXllcjptZW51c1xuXHRleGl0QnV0dG9uLmNvbnN0cmFpbnRzID0gXG5cdFx0Ym90dG9tOjEwXG5cdFx0YWxpZ246XCJob3Jpem9udGFsXCJcblxuXHRvcHRpb25zID0gbmV3IExheWVyIHN1cGVyTGF5ZXI6bWVudXMsIGJvcmRlclJhZGl1czpleHBvcnRzLnB4KDEyLjUpLCBiYWNrZ3JvdW5kQ29sb3I6XCJyZ2JhKDI1NSwyNTUsMjU1LCAuODUpXCJcblxuXHRkZXNjcmlwdGlvbkJ1ZmZlciA9IDBcblx0aWYgc2V0dXAuZGVzY3JpcHRpb25cblx0XHRkZXNjcmlwdGlvbiA9IG5ldyBleHBvcnRzLlRleHQgc3R5bGU6XCJtZW51RGVzY3JpcHRpb25cIiwgdGV4dDpzZXR1cC5kZXNjcmlwdGlvbiwgc3VwZXJMYXllcjpvcHRpb25zLCBmb250U2l6ZToxMywgY29sb3I6XCIjOEY4RTk0XCIsIHRleHRBbGlnbjpcImNlbnRlclwiXG5cdFx0ZGVzY3JpcHRpb24uY29uc3RyYWludHMgPSBcblx0XHRcdHRvcDoyMVxuXHRcdFx0YWxpZ246XCJob3Jpem9udGFsXCJcblx0XHRcdHdpZHRoOmV4cG9ydHMucHQoZXhwb3J0cy53aWR0aCkgLSAxMDBcblx0XHRleHBvcnRzLmxheW91dCgpXG5cdFx0ZGVzY3JpcHRpb25CdWZmZXIgPSBleHBvcnRzLnB0KGRlc2NyaXB0aW9uLmhlaWdodCkgKyA0MlxuXHRcdGRpdmlkZXIgPSBuZXcgTGF5ZXIgc3VwZXJMYXllcjpvcHRpb25zLCBiYWNrZ3JvdW5kQ29sb3I6XCIjRDZFM0U3XCJcblx0XHRkaXZpZGVyLmNvbnN0cmFpbnRzID1cblx0XHRcdGhlaWdodDoxXG5cdFx0XHR0b3A6ZGVzY3JpcHRpb25CdWZmZXJcblx0XHRcdGxlYWRpbmc6MFxuXHRcdFx0dHJhaWxpbmc6MFxuXHRleHBvcnRzLmJnQmx1cihvcHRpb25zKVxuXHRvcHRpb25zLmNvbnN0cmFpbnRzID0gXG5cdFx0bGVhZGluZzoxMFxuXHRcdHRyYWlsaW5nOjEwXG5cdFx0Ym90dG9tOltleGl0QnV0dG9uLCAxMF1cblx0XHRoZWlnaHQ6NTggKiBzZXR1cC5vcHRpb25zLmxlbmd0aCArIGRlc2NyaXB0aW9uQnVmZmVyXG5cdGV4cG9ydHMubGF5b3V0KClcblx0b3B0cyA9IHt9XG5cdGZvciBvcHQsIGluZGV4IGluIHNldHVwLm9wdGlvbnNcblx0XHRpc1JlZFByZXNlbnQgPSBvcHQuc2VhcmNoKFwiLXJcIilcblx0XHRpZiBpc1JlZFByZXNlbnQgPT0gMFxuXHRcdFx0QHJlZCA9IHRydWVcblx0XHRcdG9wdCA9IG9wdC5yZXBsYWNlKFwiLXJcIiwgXCJcIilcblx0XHRcdG9wdCA9IG9wdC5zbGljZSgxKVxuXHRcdG8gPSBuZXcgTGF5ZXIgc3VwZXJMYXllcjpvcHRpb25zLCB3aWR0aDpvcHRpb25zLndpZHRoLCBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiLCBib3JkZXJSYWRpdXM6ZXhwb3J0cy5weCgxMi41KVxuXHRcdG8uY29uc3RyYWludHMgPSBcblx0XHRcdHRvcDppbmRleCAqIDU4ICsgZGVzY3JpcHRpb25CdWZmZXJcblx0XHRcdGhlaWdodDo1OFxuXHRcdGJ1dHRvbiA9IG5ldyBleHBvcnRzLkJ1dHRvbiB0ZXh0Om9wdCwgc3VwZXJMYXllcjpvLCBmb250U2l6ZToyMFxuXHRcdGJ1dHRvbi5jb25zdHJhaW50cyA9XG5cdFx0XHRhbGlnbjpcImhvcml6b250YWxcIlxuXHRcdFx0dG9wOjE1XG5cdFx0aWYgQHJlZFxuXHRcdFx0YnV0dG9uLnN1YkxheWVyc1swXS5jb2xvciA9IFwicmVkXCJcblx0XHRidXR0b24uY29sb3IgPSBcIiNGRTM4MjRcIlxuXHRcdGlmIGluZGV4ICE9IHNldHVwLm9wdGlvbnMubGVuZ3RoIC0gMVxuXHRcdFx0ZGl2aWRlciA9IG5ldyBMYXllciBzdXBlckxheWVyOm8sIHdpZHRoOm9wdGlvbnMud2lkdGgsIGJhY2tncm91bmRDb2xvcjpcIiNENkUzRTdcIlxuXHRcdFx0ZGl2aWRlci5jb25zdHJhaW50cyA9XG5cdFx0XHRcdGhlaWdodDoxXG5cdFx0XHRcdGJvdHRvbTowXG5cdFx0ZXhwb3J0cy5sYXlvdXQoKVxuXHRcdG8ub24gRXZlbnRzLlRvdWNoU3RhcnQsIC0+XG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3IgPSBcInJnYmEoMjE1LDIxNSwyMTUsLjcpXCJcblx0XHRcdEAuYW5pbWF0ZVxuXHRcdFx0XHRwcm9wZXJ0aWVzOiAoYmFja2dyb3VuZENvbG9yOiBiYWNrZ3JvdW5kQ29sb3IpXG5cdFx0XHRcdHRpbWU6LjVcblx0XHRvLm9uIEV2ZW50cy5Ub3VjaEVuZCwgLT5cblx0XHRcdEAuYW5pbWF0ZVxuXHRcdFx0XHRwcm9wZXJ0aWVzOihiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiKVxuXHRcdFx0XHR0aW1lOi41XG5cdFx0XHRtZW51cy5hbmltYXRlIFxuXHRcdFx0XHRwcm9wZXJ0aWVzOiAobWF4WTpleHBvcnRzLmhlaWdodCtleHBvcnRzLnB4KChzZXR1cC5vcHRpb25zLmxlbmd0aCArIDMpICogNTgpKVxuXHRcdFx0XHR0aW1lOi4zXG5cdFx0XHRvdmVybGF5LmFuaW1hdGVcblx0XHRcdFx0cHJvcGVydGllczogKG9wYWNpdHk6MClcblx0XHRcdFx0dGltZTouM1xuXHRcdFx0VXRpbHMuZGVsYXkgLjMsIC0+XG5cdFx0XHRcdGFsbC5kZXN0cm95KClcblx0XHRvcHRzW29wdF0gPSBvXG5cblx0aWYgc2V0dXAuYW5pbWF0ZWQgPT0gdHJ1ZVxuXHRcdG92ZXJsYXkub3BhY2l0eSA9IDAgXG5cdFx0bWVudXMubWF4WSA9IGV4cG9ydHMuaGVpZ2h0ICsgZXhwb3J0cy5weCgoc2V0dXAub3B0aW9ucy5sZW5ndGggKyAzKSAqIDU4KVxuXHRcdG92ZXJsYXkuYW5pbWF0ZVxuXHRcdFx0cHJvcGVydGllczoob3BhY2l0eToxKVxuXHRcdFx0dGltZTouM1xuXHRcdG1lbnVzLmFuaW1hdGVcblx0XHRcdHByb3BlcnRpZXM6KG1heFk6ZXhwb3J0cy5oZWlnaHQpXG5cdFx0XHR0aW1lOi4zXG5cblx0b3ZlcmxheS5vbiBFdmVudHMuVG91Y2hFbmQsIC0+XG5cdFx0bWVudXMuYW5pbWF0ZSBcblx0XHRcdHByb3BlcnRpZXM6IChtYXhZOmV4cG9ydHMuaGVpZ2h0K2V4cG9ydHMucHgoKHNldHVwLm9wdGlvbnMubGVuZ3RoICsgMykgKiA1OCkpXG5cdFx0XHR0aW1lOi4zXG5cdFx0b3ZlcmxheS5hbmltYXRlXG5cdFx0XHRwcm9wZXJ0aWVzOiAob3BhY2l0eTowKVxuXHRcdFx0dGltZTouM1xuXHRcdFV0aWxzLmRlbGF5IC4zLCAtPlxuXHRcdFx0YWxsLmRlc3Ryb3koKVx0XHRcblxuXHRleGl0QnV0dG9uLm9uIEV2ZW50cy5Ub3VjaEVuZCwgLT5cblx0XHRtZW51cy5hbmltYXRlIFxuXHRcdFx0cHJvcGVydGllczogKG1heFk6ZXhwb3J0cy5oZWlnaHQrZXhwb3J0cy5weCgoc2V0dXAub3B0aW9ucy5sZW5ndGggKyAzKSAqIDU4KSlcblx0XHRcdHRpbWU6LjNcblx0XHRvdmVybGF5LmFuaW1hdGVcblx0XHRcdHByb3BlcnRpZXM6IChvcGFjaXR5OjApXG5cdFx0XHR0aW1lOi4zXG5cdFx0VXRpbHMuZGVsYXkgLjMsIC0+XG5cdFx0XHRhbGwuZGVzdHJveSgpXG5cdHJldHVybiB7XG5cdFx0Y2FuY2VsOmV4aXRCdXR0b25cblx0XHRvcHRpb25zOm9wdHNcblx0XHRtZW51Om1lbnVzXG5cdFx0b3ZlcmxheTpvdmVybGF5XG5cdFx0ZGVzY3JpcHRpb246ZGVzY3JpcHRpb25cblx0fVxuXG5leHBvcnRzLk5hdkJhciA9IChhcnJheSkgLT5cblx0c2V0dXAgPSBzZXR1cENvbXBvbmVudChcIm5hdkJhclwiLCBhcnJheSlcblx0YmFyID0gbmV3IExheWVyIG5hbWU6XCJuYXZiYXJcIlxuXHRiYXJBcmVhID0gbmV3IExheWVyIHN1cGVyTGF5ZXI6YmFyLCBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiXG5cdGRpdmlkZXIgPSBuZXcgTGF5ZXIgYmFja2dyb3VuZENvbG9yOlwiI0IyQjJCMlwiLCBuYW1lOlwibmF2IGRpdmlkZXJcIiwgc3VwZXJMYXllcjpiYXJBcmVhXG5cdGlmIHNldHVwLnN1cGVyTGF5ZXIgXG5cdFx0c2V0dXAuc3VwZXJMYXllci5hZGRTdWJMYXllcihiYXIpXG5cdGRpdmlkZXIuY29uc3RyYWludHMgPVxuXHRcdGhlaWdodDouNVxuXHRcdGJvdHRvbTowXG5cdFx0bGVhZGluZzowXG5cdFx0dHJhaWxpbmc6MFxuXHRpZiBzZXR1cC5ibHVyIFxuXHRcdGJhci5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYmEoMjU1LCAyNTUsIDI1NSwgLjkpXCJcblx0ZWxzZVxuXHRcdGJhci5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMSlcIlxuXHRcdGV4cG9ydHMuYmdCbHVyKGJhcilcblx0YmFyLnR5cGUgPSBzZXR1cC50eXBlXG5cdGJhckFyZWEuY29uc3RyYWludHMgPVxuXHRcdGxlYWRpbmc6MFxuXHRcdHRyYWlsaW5nOjBcblx0XHRoZWlnaHQ6NDRcblx0XHRib3R0b206MFxuXHRiYXIuY29uc3RyYWludHMgPSBcblx0XHRsZWFkaW5nOjBcblx0XHR0cmFpbGluZzowXG5cdFx0dG9wOjBcblx0XHRoZWlnaHQ6NjRcblx0Zm9yIGxheWVyIGluIEZyYW1lci5DdXJyZW50Q29udGV4dC5sYXllcnNcblx0XHRpZiBsYXllci50eXBlID09IFwic3RhdHVzQmFyXCJcblx0XHRcdEBzdGF0dXNCYXIgPSBsYXllclxuXHRcdFx0YmFyLnBsYWNlQmVoaW5kKEBzdGF0dXNCYXIpXG5cdHRpdGxlID0gbmV3IGV4cG9ydHMuVGV4dCBzdHlsZTpcIm5hdkJhclRpdGxlXCIsIGZvbnRXZWlnaHQ6XCJzZW1pYm9sZFwiLCBzdXBlckxheWVyOmJhckFyZWEsIHRleHQ6c2V0dXAudGl0bGVcblx0dGl0bGUuY29uc3RyYWludHMgPSBcblx0XHRhbGlnbjpcImhvcml6b250YWxcIlxuXHRcdGJvdHRvbToxMlxuXHRpZiBzZXR1cC5yaWdodEFjdGlvbiA9PSBmYWxzZSB8fCBzZXR1cC5yaWdodEFjdGlvbiA9PSBcIlwiXG5cdFx0IyBEb24ndCBjcmVhdGUgYSByaWdodCBhY3Rpb25cblx0ZWxzZVxuXHRcdGlmIHR5cGVvZiBzZXR1cC5yaWdodEFjdGlvbiA9PSBcInN0cmluZ1wiXG5cdFx0XHRAZm9udFdlaWdodCA9IFwicmVndWxhclwiXG5cdFx0XHRpZiBzZXR1cC5yaWdodEFjdGlvbi5zZWFyY2goXCItYlwiKSA9PSAwXG5cdFx0XHRcdEBmb250V2VpZ2h0ID0gXCJzZW1pYm9sZFwiXG5cdFx0XHRcdHNldHVwLnJpZ2h0QWN0aW9uID0gc2V0dXAucmlnaHRBY3Rpb24ucmVwbGFjZShcIi1iIFwiLCBcIlwiKVxuXHRcdFx0QHJpZ2h0QWN0aW9uID0gbmV3IGV4cG9ydHMuQnV0dG9uICBzdHlsZTpcInJpZ2h0QWN0aW9uXCIsIHN1cGVyTGF5ZXI6YmFyQXJlYSwgdGV4dDpzZXR1cC5yaWdodEFjdGlvbiwgZm9udFdlaWdodDpAZm9udFdlaWdodCwgbmFtZTpcInJpZ2h0IGFjdGlvblwiXG5cdFx0XHRAcmlnaHRBY3Rpb24uY29uc3RyYWludHMgPVxuXHRcdFx0XHRib3R0b206MTJcblx0XHRcdFx0dHJhaWxpbmc6OFxuXHRpZiBzZXR1cC5sZWZ0QWN0aW9uID09IGZhbHNlIHx8IHNldHVwLmxlZnRBY3Rpb24gPT0gXCJcIlxuXHRcdCMgRG9uJ3QgY3JlYXRlIGEgbGVmdCBhY3Rpb25cblx0ZWxzZVxuXHRcdGlmIHR5cGVvZiBzZXR1cC5yaWdodEFjdGlvbiA9PSBcInN0cmluZ1wiXG5cdFx0XHRAbGVmdEFjdGlvbiA9IG5ldyBleHBvcnRzLkJ1dHRvbiBzdHlsZTpcImxlZnRBY3Rpb25cIiwgc3VwZXJMYXllcjpiYXJBcmVhLCB0ZXh0OnNldHVwLmxlZnRBY3Rpb24sIG5hbWU6XCJsZWZ0IGFjdGlvblwiXG5cdFx0XHRAbGVmdEFjdGlvbi5jb25zdHJhaW50cyA9XG5cdFx0XHRcdGJvdHRvbToxMlxuXHRcdFx0XHRsZWFkaW5nOjhcblx0ZXhwb3J0cy5sYXlvdXQoKVxuXHRyZXR1cm4ge1xuXHRcdGFsbDpiYXJcblx0XHRuYXZCYXI6YmFyQXJlYVxuXHRcdHRpdGxlOnRpdGxlXG5cdFx0cmlnaHRBY3Rpb246QHJpZ2h0QWN0aW9uXG5cdFx0bGVmdEFjdGlvbjpAbGVmdEFjdGlvblxuXHR9XG5cbmV4cG9ydHMuVGFiID0gKGFycmF5KSAtPlxuXHRzZXR1cCA9IHNldHVwQ29tcG9uZW50KFwidGFiXCIsIGFycmF5KVxuXHRzd2l0Y2ggZXhwb3J0cy5kZXZpY2UgXG5cdFx0d2hlbiBcImlwaG9uZS01XCJcblx0XHRcdEB0YWJXaWR0aCA9IDU1XG5cdFx0ZWxzZVxuXHRcdFx0QHRhYldpZHRoID0gNzVcblx0dGFiVmlldyA9IG5ldyBMYXllciBuYW1lOnNldHVwLmxhYmVsICsgXCIgdmlld1wiLCBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiXG5cdHRhYlZpZXcuY29uc3RyYWludHMgPSBcblx0XHRsZWFkaW5nOjBcblx0XHR0cmFpbGluZzowXG5cdFx0dG9wOjBcblx0XHRib3R0b206MFxuXHR0YWJCb3ggPSBuZXcgTGF5ZXIgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIiwgbmFtZTpzZXR1cC5sYWJlbCArIFwiIHRhYlwiXG5cdHRhYkJveC5jb25zdHJhaW50cyA9XG5cdFx0d2lkdGg6QHRhYldpZHRoXG5cdFx0aGVpZ2h0OjQ5XG5cdGljb24gPSBuZXcgTGF5ZXIgd2lkdGg6ZXhwb3J0cy5weCgyNSksIGhlaWdodDpleHBvcnRzLnB4KDI1KSwgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIiwgbmFtZTpcImljb25cIiwgc3VwZXJMYXllcjp0YWJCb3hcblx0aWNvbi5jb25zdHJhaW50cyA9XG5cdFx0YWxpZ246XCJob3Jpem9udGFsXCJcblx0XHR0b3A6N1xuXHRzdmdGcmFtZSA9IGV4cG9ydHMuc3ZnKHNldHVwLmljb24pXG5cdGljb24uaHRtbCA9IHN2Z0ZyYW1lLnN2Z1xuXHRpY29uLndpZHRoID0gc3ZnRnJhbWUud2lkdGhcblx0aWNvbi5oZWlnaHQgPSBzdmdGcmFtZS5oZWlnaHRcblx0bGFiZWwgPSBuZXcgZXhwb3J0cy5UZXh0IHRleHQ6c2V0dXAubGFiZWwsIHN1cGVyTGF5ZXI6dGFiQm94LCBjb2xvcjpcIiM5MjkyOTJcIiwgZm9udFNpemU6MTAsIG5hbWU6XCJsYWJlbFwiLCB0ZXh0VHJhbnNmb3JtOlwiY2FwaXRhbGl6ZVwiXG5cdGxhYmVsLmNvbnN0cmFpbnRzID0gXG5cdFx0Ym90dG9tOjJcblx0XHRob3Jpem9udGFsQ2VudGVyOmljb25cblx0ZXhwb3J0cy5sYXlvdXQoKVxuXHR0YWJCb3gudHlwZSA9IFwidGFiXCJcblx0cmV0dXJuIHtcblx0XHR0YWI6dGFiQm94XG5cdFx0aWNvbjppY29uXG5cdFx0bGFiZWw6bGFiZWxcblx0XHR2aWV3OnRhYlZpZXdcblx0fVxuXG5leHBvcnRzLlRhYkJhciA9IChhcnJheSkgLT5cblx0c2V0dXAgPSBzZXR1cENvbXBvbmVudChcInRhYkJhclwiLCBhcnJheSlcblx0aWYgc2V0dXAudGFicy5sZW5ndGggPT0gMFxuXHRcdGR1bW15VGFiID0gbmV3IGV4cG9ydHMuVGFiXG5cdFx0ZHVtbXlUYWIyID0gbmV3IGV4cG9ydHMuVGFiXG5cdFx0c2V0dXAudGFicy5wdXNoIGR1bW15VGFiXG5cdFx0c2V0dXAudGFicy5wdXNoIGR1bW15VGFiMlxuXHR0YWJXaWR0aCA9IDc1XG5cdHN3aXRjaCBleHBvcnRzLmRldmljZSBcblx0XHR3aGVuIFwiaXBob25lLTVcIlxuXHRcdFx0dGFiV2lkdGggPSA1NVxuXHRcdGVsc2Vcblx0XHRcdHRhYldpZHRoID0gNzVcblx0dGFiQmFyID0gbmV3IExheWVyIGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCJcblx0dGFiQmFyQkcgPSBuZXcgQmFja2dyb3VuZExheWVyIGJhY2tncm91bmRDb2xvcjpcIndoaXRlXCIsIG9wYWNpdHk6LjksIHN1cGVyTGF5ZXI6dGFiQmFyLCBuYW1lOlwidGFiQmFyIGJhY2tncm91bmRcIlxuXHR0YWJCYXIuY29uc3RyYWludHMgPVxuXHRcdGxlYWRpbmc6MFxuXHRcdHRyYWlsaW5nOjBcblx0XHRib3R0b206MFxuXHRcdGhlaWdodDo0OVxuXHR0YWJCYXJCRy5jb25zdHJhaW50cyA9XG5cdFx0bGVhZGluZzowXG5cdFx0dHJhaWxpbmc6MFxuXHRcdGJvdHRvbTowXG5cdFx0aGVpZ2h0OjQ5XG5cdGRpdmlkZXIgPSBuZXcgTGF5ZXIgYmFja2dyb3VuZENvbG9yOlwiI0IyQjJCMlwiLCBuYW1lOlwidGFiRGl2aWRlclwiLCBzdXBlckxheWVyOnRhYkJhclxuXHRkaXZpZGVyLmNvbnN0cmFpbnRzID0gXG5cdFx0dG9wOjBcblx0XHRsZWFkaW5nOjBcblx0XHR0cmFpbGluZzowXG5cdFx0aGVpZ2h0Oi41XG5cdHRhYkJhckJveCA9IG5ldyBMYXllciBzdXBlckxheWVyOnRhYkJhciwgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIiwgbmFtZTpcInRhYkJhciBib3hcIlxuXHR0YWJCYXJCb3guY29uc3RyYWludHMgPSBcblx0XHRoZWlnaHQ6NDlcblx0XHR3aWR0aDpzZXR1cC50YWJzLmxlbmd0aCAqIHRhYldpZHRoXG5cblx0ZXhwb3J0cy5sYXlvdXQoKVxuXG5cdHNldEFjdGl2ZSA9ICh0YWJJbmRleCkgLT5cblx0XHRmb3IgdGFiLCBpbmRleCBpbiBzZXR1cC50YWJzXG5cdFx0XHRpZiBpbmRleCA9PSB0YWJJbmRleFxuXHRcdFx0XHRleHBvcnRzLmNoYW5nZUZpbGwodGFiLmljb24sIHNldHVwLmFjdGl2ZUZpbGxDb2xvcilcblx0XHRcdFx0dGFiLmxhYmVsLmNvbG9yID0gc2V0dXAuYWN0aXZlTGFiZWxDb2xvclxuXHRcdFx0XHR0YWIudmlldy52aXNpYmxlID0gdHJ1ZVxuXHRcdFx0ZWxzZVxuXHRcdFx0XHRleHBvcnRzLmNoYW5nZUZpbGwodGFiLmljb24sIHNldHVwLmluYWN0aXZlRmlsbENvbG9yKVxuXHRcdFx0XHR0YWIubGFiZWwuY29sb3IgPSBzZXR1cC5pbmFjdGl2ZUxhYmVsQ29sb3Jcblx0XHRcdFx0dGFiLnZpZXcudmlzaWJsZSA9IGZhbHNlXG5cdGZvciB0YWIsIGluZGV4IGluIHNldHVwLnRhYnNcblx0XHQjQ2hlY2sgZm9yIHZhaWxkIHRhYiBvYmplY3Rcblx0XHRpZiB0YWIudGFiLnR5cGUgIT0gXCJ0YWJcIlxuXHRcdFx0ZXJyb3IodGFiLnRhYi5pZCwgNSlcblxuXHRcdHRhYkJhckJveC5hZGRTdWJMYXllcih0YWIudGFiKVxuXHRcdCMgQ2hhbmdlIGNvbG9yc1xuXHRcdGV4cG9ydHMuY2hhbmdlRmlsbCh0YWIuaWNvbiwgc2V0dXAuaW5hY3RpdmVGaWxsQ29sb3IpXG5cdFx0dGFiLmxhYmVsLmNvbG9yID0gc2V0dXAuaW5hY3RpdmVMYWJlbENvbG9yXG5cdFx0dGFiQmFyQkcuYmFja2dyb3VuZENvbG9yID0gc2V0dXAuYmFja2dyb3VuZENvbG9yXG5cblx0XHRpZiBpbmRleCAhPSAwXG5cdFx0XHR0YWIudGFiLmNvbnN0cmFpbnRzID0gXG5cdFx0XHRcdGxlYWRpbmc6c2V0dXAudGFic1tpbmRleCAtIDFdLnRhYlxuXHRcdFx0ZXhwb3J0cy5sYXlvdXQoKVxuXG5cdFx0dGFiLnRhYi5vbiBFdmVudHMuVG91Y2hTdGFydCwgLT5cblx0XHRcdHRhYkluZGV4ID0gQC54IC8gZXhwb3J0cy5weCh0YWJXaWR0aClcblx0XHRcdHNldEFjdGl2ZSh0YWJJbmRleClcblx0dGFiQmFyQm94LmNvbnN0cmFpbnRzID1cblx0XHRhbGlnbjpcImhvcml6b250YWxcIlxuXG5cdHNldEFjdGl2ZShzZXR1cC5zdGFydClcdFxuXG5cdGV4cG9ydHMubGF5b3V0KClcblx0cmV0dXJuIHRhYkJhclxuXG5leHBvcnRzLlRhYmxlID0gKGFycmF5KSAtPlxuXHRzZXR1cCA9IHNldHVwQ29tcG9uZW50KFwidGFibGVcIiwgYXJyYXkpXG5cdGlmIHNldHVwLmNlbGwgPT0gXCJkZWZhdWx0XCJcblx0XHR0eXBlcyA9IFtcblx0XHRcdFwibGFiZWxcIiA6IFtcblx0XHRcdFx0e1wiZm9udFNpemVcIiA6IDEwfVxuXHRcdFx0XHR7XCJsZWFkaW5nXCIgOiA1fVxuXHRcdFx0XHR7XCJ0b3BcIiA6IDV9XG4gXHRcdFx0XVxuXHRcdFx0LCBcImRldGFpbFwiIDogW1xuXHRcdFx0XHR7XCJmb250U2l6ZVwiIDogMTJ9XG5cdFx0XHRcdHtcInRyYWlsaW5nXCIgOiA1fVxuXHRcdFx0XHR7XCJ0b3BcIiA6IDV9XG5cdFx0XHRcdF1dXG5cdFx0Zm9yIHJvdyBpbiBzZXR1cC5jb250ZW50XG5cdFx0XHRmb3IgdHlwZSBpbiB0eXBlc1swXVxuXHRcdFx0XHRwcmludCB0eXBlXG5cblxuZXhwb3J0cy5UYWJsZUNlbGwgPSAoYXJyYXkpIC0+XG5cdHNldHVwID0gc2V0dXBDb21wb25lbnQoXCJ0YWJsZUNlbGxcIiwgYXJyYXkpXG5cdHByaW50IHNldHVwIiwiIyBBZGQgdGhlIGZvbGxvd2luZyBsaW5lIHRvIHlvdXIgcHJvamVjdCBpbiBGcmFtZXIgU3R1ZGlvLiBcbiMgbXlNb2R1bGUgPSByZXF1aXJlIFwibXlNb2R1bGVcIlxuIyBSZWZlcmVuY2UgdGhlIGNvbnRlbnRzIGJ5IG5hbWUsIGxpa2UgbXlNb2R1bGUubXlGdW5jdGlvbigpIG9yIG15TW9kdWxlLm15VmFyXG5cbmV4cG9ydHMubXlWYXIgPSBcIm15VmFyaWFibGVcIlxuXG5leHBvcnRzLm15RnVuY3Rpb24gPSAtPlxuXHRwcmludCBcIm15RnVuY3Rpb24gaXMgcnVubmluZ1wiXG5cbmV4cG9ydHMubXlBcnJheSA9IFsxLCAyLCAzXSJdfQ==
