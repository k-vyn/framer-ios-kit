require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"iOSKit":[function(require,module,exports){
var defaults, error, framerDevices, layoutAlign, layoutChange, layoutSize, onResize, setProps, textAutoSize, textSizing;

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
    scale: 1,
    mobile: true,
    platform: "iOS"
  },
  "apple-ipad-mini-4-space-gray": {
    height: 2048,
    width: 1536,
    scale: 1,
    mobile: true,
    platform: "iOS"
  },
  "apple-ipad-mini-4-silver": {
    height: 2048,
    width: 1536,
    scale: 1,
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

exports.name = 0;

exports.scale = 0;

exports.height = 0;

exports.width = 0;

exports.mobile = 0;

exports.platform = 0;

exports.orientation = 0;

exports.getDevice = function() {
  var device;
  device = Framer.Device.deviceType;
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
  return exports.orientation = Framer.Device.orientation;
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
  charWidths: {
    "A": .7,
    "B": .65,
    "C": .78,
    "D": .77,
    "E": .58,
    "F": .57,
    "G": .77,
    "H": .71,
    "I": .1,
    "J": .49,
    "K": .65,
    "L": .57,
    "M": .87,
    "N": .71,
    "O": .8,
    "P": .62,
    "Q": .8,
    "R": .63,
    "S": .63,
    "T": .66,
    "U": .7,
    "V": .7,
    "W": 1.03,
    "X": .68,
    "Y": .67,
    "Z": .645,
    "a": .54,
    "b": .63,
    "c": .57,
    "d": .59,
    "e": .59,
    "f": .28,
    "g": .59,
    "h": .57,
    "i": .12,
    "j": .12,
    "k": .53,
    "l": .105,
    "m": .9,
    "n": .56,
    "o": .6,
    "p": .62,
    "q": .59,
    "r": .34,
    "s": .505,
    "t": .28,
    "u": .56,
    "v": .53,
    "w": .835,
    "x": .515,
    "y": .528,
    "z": .51,
    " ": .44,
    "?": .495,
    "!": .18,
    ".": .18,
    ",": .17,
    "'": .09,
    "1": .32,
    "2": .63,
    "3": .62,
    "4": .655,
    "5": .64,
    "6": .64,
    "7": .59,
    "8": .64,
    "9": .64,
    "0": .645
  },
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
  keyboardProps: ["returnKey"],
  keyboard: {
    returnKey: "default"
  },
  text: {
    defaults: {
      text: "iOS Text Layer",
      x: 0,
      y: 0,
      width: -1,
      height: -1,
      superLayer: void 0,
      style: "default",
      lines: 1,
      align: "left",
      backgroundColor: "transparent",
      color: "black",
      fontSize: 17,
      fontFamily: "-apple-system, Helvetica, Arial, sans-serif",
      fontWeight: 400,
      lineHeight: "auto"
    }
  }
};

setProps = function(object, dest) {
  var keys;
  keys = Object.keys(object);
  return dest["props"] = keys;
};

setProps(defaults.text.defaults, defaults.text);

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
    return print("Error " + context + " is not a valid weight. Please use 100, 200, 300... or Thin, Light, Regular...");
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
      ref1 = defaults.constraintAligns;
      for (k = 0, len1 = ref1.length; k < len1; k++) {
        a = ref1[k];
        if (layer.constraints[a]) {
          layoutAlign(layer, a);
        }
      }
      ref2 = defaults.constraintProps;
      for (l = 0, len2 = ref2.length; l < len2; l++) {
        p = ref2[l];
        layoutSize(layer, p);
      }
      results.push((function() {
        var len3, m, ref3, results1;
        ref3 = defaults.constraintTypes;
        results1 = [];
        for (m = 0, len3 = ref3.length; m < len3; m++) {
          c = ref3[m];
          if (layer.constraints[c] !== void 0) {
            results1.push(layoutChange(layer, c));
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
      layer.constraints["trailing"] = exports.pt(exports.width - layer.maxX);
    }
    if (this.type === "topEdges" || this.type === "top") {
      layer.y = this.layer.y;
      layer.constraints["top"] = exports.pt(layer.y);
    }
    if (this.type === "bottomEdges" || this.type === "bottom") {
      layer.maxY = this.layer.maxY;
      layer.constraints["bottom"] = exports.pt(exports.height - layer.maxY);
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
    layer.constraints["trailing"] = exports.pt(exports.width - layer.maxX);
  }
  if (type === "topEdges") {
    layer.y = declaredConstraint.y;
    layer.constraints["top"] = exports.pt(layer.y);
  }
  if (type === "bottomEdges") {
    layer.maxY = declaredConstraint.maxY;
    layer.constraints["bottom"] = exports.pt(exports.height - layer.maxY);
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
  if (layer.constraints[type]) {
    return layer[type] = exports.px(layer.constraints[type]);
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
  framerProps = ["width", "height", "superLayer", "opacity", "color", "backgroundColor", "x", "y", "midX", "midY", "maxX", "minX", "visible", "clip", "scrollHorizontal", "scrollVertical", "ignoreEvents", "z", "scaleX", "scaleY", "scaleZ", "scale", "skewX", "skewY", "skew", "originX", "originY", "originZ", "perspective", "perspectiveOriginX", "perspectiveOriginY", "rotationX", "rotationY", "rotationZ", "rotation", "blur", "brightness", "saturate", "hueRotate", "contrast", "invert", "grayscale", "sepia", "shadowX", "shadowY", "shadowBlur", "shadowSpread", "shadowColor", "borderColor", "borderWidth", "force2d", "flat", "backfaceVisible", "name", "matrix", "_matrix2d", "transformMatrix", "matrix3d", "borderRadius", "point", "size", "frame", "html", "image", "scrollX", "scrollY", "_domEventManager", "mouseWheelSpeedMultiplier", "velocityThreshold", "animationOptions", "constrained"];
  cssProps = ["fontFamily", "fontSize", "textAlign", "fontWeight", "lineHeight"];
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

exports.Custom = function(style, array) {
  var isStyleValid, layer, newStyleName, obj, obj1, obj2, styleNum;
  layer = new Layer;
  isStyleValid = exports.styles[style];
  if (isStyleValid === void 0) {
    if (array !== void 0) {
      exports.addStyle((
        obj = {},
        obj["" + style] = array,
        obj
      ));
    } else {
      exports.addStyle((
        obj1 = {},
        obj1["" + style] = {
          width: 100
        },
        obj1
      ));
    }
  }
  exports.apply(layer, style);
  if (array !== void 0 && isStyleValid !== void 0) {
    styleNum = "copy";
    newStyleName = style + " " + styleNum;
    exports.addStyle((
      obj2 = {},
      obj2["" + newStyleName] = array,
      obj2
    ));
    exports.apply(layer, newStyleName);
  }
  return layer;
};

textSizing = function(layer, text, height, style, lines) {
  var c, characterArray, device, invalidText, j, len, line1, line2, lookingForBreak, pureText, stringLength;
  device = exports.getDevice();
  layer.height = parseInt(height[0] + height[1]) + 2;
  if (lines !== void 0) {
    layer.height = layer.height * lines;
  }
  layer.html = text;
  stringLength = 0;
  lookingForBreak = text.search("<br>");
  pureText = "";
  if (lookingForBreak !== -1) {
    line1 = text.substring(0, lookingForBreak);
    line2 = text.substring(lookingForBreak + 5, text.length);
    if (line1.length > line2.length) {
      text = line1;
    }
    if (line2.length > line1.length) {
      text = line2;
    }
  }
  invalidText = /(<([^>]+)>)/ig;
  pureText = text.replace(invalidText, "");
  characterArray = pureText.split('');
  for (j = 0, len = characterArray.length; j < len; j++) {
    c = characterArray[j];
    stringLength = chars[c][style] + stringLength;
  }
  return layer.width = stringLength * device.scale;
};

textAutoSize = function(textLayer) {
  var arrayOfChars, arrayOfWidths, char, fontMultiplier, fontWeightMultiplier, j, layerHeight, layerWidth, len, lineCount, setWidth, wordCount;
  layerWidth = 0;
  layerHeight = 0;
  if (textLayer.height === exports.px(-1) && textLayer.width === exports.px(-1)) {
    layerHeight = parseInt(textLayer.style['font-size'].slice(0, -2));
  }
  if (textLayer.height !== exports.px(-1) && textLayer.width !== exports.px(-1)) {
    layerHeight = textLayer.height;
  }
  arrayOfChars = textLayer.html.split("");
  wordCount = textLayer.html.split(" ").length;
  arrayOfWidths = defaults.charWidths;
  fontMultiplier = parseInt(textLayer.style["font-size"].slice(0, -2)) / 10;
  fontWeightMultiplier = parseInt(textLayer.style["font-weight"]) / 380;
  for (j = 0, len = arrayOfChars.length; j < len; j++) {
    char = arrayOfChars[j];
    layerWidth = layerWidth + (arrayOfWidths[char] * fontMultiplier * (8.4 + fontWeightMultiplier));
    layerWidth = Math.round(layerWidth);
  }
  setWidth = textLayer.width;
  if (textLayer.width !== exports.px(-1) && textLayer.height === exports.px(-1)) {
    lineCount = Math.ceil(layerWidth / setWidth);
    if (lineCount > wordCount) {
      lineCount = wordCount;
    }
    layerHeight = parseInt(textLayer.style["font-size"].slice(0, -2)) * lineCount + parseInt(textLayer.style["line-height"].slice(0, -2)) * (lineCount - 1.5);
    if (layerHeight < parseInt(textLayer.style['font-size'].slice(0, -2))) {
      layerHeight = parseInt(textLayer.style['font-size'].slice(0, -2));
    }
  }
  if (textLayer.width !== exports.px(-1)) {
    layerWidth = setWidth;
  }
  return {
    width: layerWidth,
    height: layerHeight
  };
};

exports.Text = function(array) {
  var i, j, len, obj, ref, styleArray, textFrame, textLayer;
  if (array === void 0) {
    array = [];
  }
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
  if (exports.styles[this.style] === void 0) {
    exports.addStyle((
      obj = {},
      obj["" + this.style] = styleArray,
      obj
    ));
  }
  textLayer = new Layer;
  textLayer.html = this.text;
  exports.apply(textLayer, this.style);
  textFrame = textAutoSize(textLayer);
  textLayer.props = {
    height: textFrame.height,
    width: textFrame.width
  };
  return textLayer;
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


},{}],"myModule":[function(require,module,exports){
exports.myVar = "myVariable";

exports.myFunction = function() {
  return print("myFunction is running");
};

exports.myArray = [1, 2, 3];


},{}]},{},[])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMva2V2eW4vRHJvcGJveCAoUGVyc29uYWwpL0ZyYW1lciBQcm90b3R5cGVzL2ZyYW1lci1pb3Mta2l0L0RlbW8uZnJhbWVyL21vZHVsZXMvaU9TS2l0LmNvZmZlZSIsIi9Vc2Vycy9rZXZ5bi9Ecm9wYm94IChQZXJzb25hbCkvRnJhbWVyIFByb3RvdHlwZXMvZnJhbWVyLWlvcy1raXQvRGVtby5mcmFtZXIvbW9kdWxlcy9teU1vZHVsZS5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNFQSxJQUFBOztBQUFBLGFBQUEsR0FBZ0I7RUFFaEIsWUFBQSxFQUFlO0lBQUUsTUFBQSxFQUFRLE1BQU0sQ0FBQyxXQUFqQjtJQUE4QixLQUFBLEVBQU8sTUFBTSxDQUFDLFVBQTVDO0lBQXdELEtBQUEsRUFBTSxDQUE5RDtJQUFpRSxNQUFBLEVBQU8sS0FBeEU7SUFBK0UsUUFBQSxFQUFTLEtBQXhGO0dBRkM7RUFNaEIsNEJBQUEsRUFBOEI7SUFBRSxNQUFBLEVBQVEsSUFBVjtJQUFnQixLQUFBLEVBQU8sR0FBdkI7SUFBNEIsS0FBQSxFQUFPLENBQW5DO0lBQXNDLE1BQUEsRUFBTyxJQUE3QztJQUFtRCxRQUFBLEVBQVMsS0FBNUQ7R0FOZDtFQU9oQix3QkFBQSxFQUEwQjtJQUFFLE1BQUEsRUFBUSxJQUFWO0lBQWdCLEtBQUEsRUFBTyxHQUF2QjtJQUE0QixLQUFBLEVBQU8sQ0FBbkM7SUFBc0MsTUFBQSxFQUFPLElBQTdDO0lBQW1ELFFBQUEsRUFBUyxLQUE1RDtHQVBWO0VBUWhCLHNCQUFBLEVBQXdCO0lBQUUsTUFBQSxFQUFRLElBQVY7SUFBZ0IsS0FBQSxFQUFPLEdBQXZCO0lBQTRCLEtBQUEsRUFBTyxDQUFuQztJQUFzQyxNQUFBLEVBQU8sSUFBN0M7SUFBbUQsUUFBQSxFQUFTLEtBQTVEO0dBUlI7RUFXaEIsdUJB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QlQ7TUFpQlAsR0FBQSxFQUFNLFNBQVUsQ0FBQSxFQUFBLENBakJUO01Ba0JQLEdBQUEsRUFBTSxTQUFVLENBQUEsRUFBQSxDQWxCVDtNQW1CUCxHQUFBLEVBQU0sU0FBVSxDQUFBLEVBQUEsQ0FuQlQ7TUFvQlAsR0FBQSxFQUFNLFNBQVUsQ0FBQSxFQUFBLENBcEJUO01BcUJQLEdBQUEsRUFBTSxTQUFVLENBQUEsRUFBQSxDQXJCVDtNQXNCUCxHQUFBLEVBQU0sU0FBVSxDQUFBLEVBQUEsQ0F0QlQ7TUF1QlAsR0FBQSxFQUFNLFNBQVUsQ0FBQSxFQUFBLENBdkJUO01Bd0JQLEdBQUEsRUFBTSxTQUFVLENBQUEsRUFBQSxDQXhCVDtNQXlCUCxHQUFBLEVBQU0sU0FBVSxDQUFBLEVBQUEsQ0F6QlQ7TUEwQlAsR0FBQSxFQUFNLFNBQVUsQ0FBQSxFQUFBLENBMUJUO0tBSEY7O0FBMXZCVzs7OztBQ3ZrQm5CLE9BQU8sQ0FBQyxLQUFSLEdBQWdCOztBQUVoQixPQUFPLENBQUMsVUFBUixHQUFxQixTQUFBO1NBQ3BCLEtBQUEsQ0FBTSx1QkFBTjtBQURvQjs7QUFHckIsT0FBTyxDQUFDLE9BQVIsR0FBa0IsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiI2lPU0tpdCBNb2R1bGVcbiNCeSBLZXZ5biBBcm5vdHQgQGt2eW5fXG5mcmFtZXJEZXZpY2VzID0ge1xuI0Z1bGxzY3JlZW5cblwiZnVsbHNjcmVlblwiIDogeyBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCwgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFx0c2NhbGU6MSwgbW9iaWxlOmZhbHNlLCBwbGF0Zm9ybTpcIndlYlwifVxuXG4jaVBob25lc1xuIyM1U1xuXCJhcHBsZS1pcGhvbmUtNXMtc3BhY2UtZ3JheVwiOiB7IGhlaWdodDogMTEzNiwgd2lkdGg6IDY0MCxcdHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblwiYXBwbGUtaXBob25lLTVzLXNpbHZlclwiOiB7IGhlaWdodDogMTEzNiwgd2lkdGg6IDY0MCxcdHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblwiYXBwbGUtaXBob25lLTVzLWdvbGRcIjogeyBoZWlnaHQ6IDExMzYsIHdpZHRoOiA2NDAsXHRzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cbiMjNWNcblwiYXBwbGUtaXBob25lLTVjLWdyZWVuXCI6IHsgaGVpZ2h0OiAxMTM2LCB3aWR0aDogNjQwLFx0c2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXCJhcHBsZS1pcGhvbmUtNWMtYmx1ZVwiOiB7IGhlaWdodDogMTEzNiwgd2lkdGg6IDY0MCxcdHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblwiYXBwbGUtaXBob25lLTVjLXJlZFwiOiB7IGhlaWdodDogMTEzNiwgd2lkdGg6IDY0MCxcdHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblwiYXBwbGUtaXBob25lLTVjLXdoaXRlXCI6IHsgaGVpZ2h0OiAxMTM2LCB3aWR0aDogNjQwLFx0c2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXCJhcHBsZS1pcGhvbmUtNWMteWVsbG93XCI6IHsgaGVpZ2h0OiAxMTM2LCB3aWR0aDogNjQwLFx0c2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXCJhcHBsZS1pcGhvbmUtNWMtcGlua1wiOiB7IGhlaWdodDogMTEzNiwgd2lkdGg6IDY0MCxcdHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cbiMjNnNcblwiYXBwbGUtaXBob25lLTZzLXNwYWNlLWdyYXlcIiA6IHsgaGVpZ2h0OiAxMzM0LCB3aWR0aDogNzUwLFx0c2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXCJhcHBsZS1pcGhvbmUtNnMtc2lsdmVyXCI6IHsgaGVpZ2h0OiAxMzM0LCB3aWR0aDogNzUwLFx0c2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXCJhcHBsZS1pcGhvbmUtNnMtZ29sZFwiOiB7IGhlaWdodDogMTMzNCwgd2lkdGg6IDc1MCxcdHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblwiYXBwbGUtaXBob25lLTZzLXJvc2UtZ29sZFwiOiB7IGhlaWdodDogMTMzNCwgd2lkdGg6IDc1MCxcdHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cbiM2cyBwbHVzXG5cImFwcGxlLWlwaG9uZS02cy1wbHVzLWdvbGRcIjogeyBoZWlnaHQ6IDIyMDgsIHdpZHRoOiAxMjQyLFx0c2NhbGU6IDMsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXCJhcHBsZS1pcGhvbmUtNnMtcGx1cy1zaWx2ZXJcIjogeyBoZWlnaHQ6IDIyMDgsIHdpZHRoOiAxMjQyLFx0c2NhbGU6IDMsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXCJhcHBsZS1pcGhvbmUtNnMtcGx1cy1zcGFjZS1ncmF5XCI6IHsgaGVpZ2h0OiAyMjA4LCB3aWR0aDogMTI0MixcdHNjYWxlOiAzLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblwiYXBwbGUtaXBob25lLTZzLXBsdXMtcm9zZS1nb2xkXCI6IHsgaGVpZ2h0OiAyMjA4LCB3aWR0aDogMTI0MixcdHNjYWxlOiAzLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblxuI2lQYWRzXG5cbiNBaXJcblxuXCJhcHBsZS1pcGFkLWFpci0yLWdvbGRcIjogeyBoZWlnaHQ6IDIwNDgsIHdpZHRoOiAxNTM2LFx0c2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXCJhcHBsZS1pcGFkLWFpci0yLXNpbHZlclwiOiB7IGhlaWdodDogMjA0OCwgd2lkdGg6IDE1MzYsXHRzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cImFwcGxlLWlwYWQtYWlyLTItc3BhY2UtZ3JheVwiOiB7IGhlaWdodDogMjA0OCwgd2lkdGg6IDE1MzYsXHRzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cbiNtaW5pXG5cImFwcGxlLWlwYWQtbWluaS00LWdvbGRcIjogeyBoZWlnaHQ6IDIwNDgsIHdpZHRoOiAxNTM2LFx0c2NhbGU6IDEsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXCJhcHBsZS1pcGFkLW1pbmktNC1zcGFjZS1ncmF5XCI6IHsgaGVpZ2h0OiAyMDQ4LCB3aWR0aDogMTUzNixcdHNjYWxlOiAxLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblwiYXBwbGUtaXBhZC1taW5pLTQtc2lsdmVyXCI6eyBoZWlnaHQ6IDIwNDgsIHdpZHRoOiAxNTM2LCBzY2FsZTogMSwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cbiNQcm9cblwiYXBwbGUtaXBhZC1wcm8tZ29sZFwiOiB7IGhlaWdodDogMjczMiwgd2lkdGg6IDIwNDgsIHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblwiYXBwbGUtaXBhZC1wcm8tc2lsdmVyXCI6IHsgaGVpZ2h0OiAyNzMyLCB3aWR0aDogMjA0OCwgc2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXCJhcHBsZS1pcGFkLXByby1zcGFjZS1ncmF5XCIgOiB7IGhlaWdodDogMjczMiwgd2lkdGg6IDIwNDgsIHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cbn1cblxuZXhwb3J0cy5uYW1lID0gMFxuZXhwb3J0cy5zY2FsZSA9IDBcbmV4cG9ydHMuaGVpZ2h0ID0gMFxuZXhwb3J0cy53aWR0aCA9IDBcbmV4cG9ydHMubW9iaWxlID0gMFxuZXhwb3J0cy5wbGF0Zm9ybSA9IDBcbmV4cG9ydHMub3JpZW50YXRpb24gPSAwXG5cbmV4cG9ydHMuZ2V0RGV2aWNlID0gLT5cblx0ZGV2aWNlID0gRnJhbWVyLkRldmljZS5kZXZpY2VUeXBlXG5cdGV4cG9ydHMuc2NhbGUgPSBmcmFtZXJEZXZpY2VzW2RldmljZV0uc2NhbGVcblx0aWYgZGV2aWNlID09IFwiZnVsbHNjcmVlblwiXG5cdFx0ZXhwb3J0cy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoXG5cdFx0ZXhwb3J0cy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHRcblx0ZWxzZVxuXHRcdGV4cG9ydHMud2lkdGggPSBmcmFtZXJEZXZpY2VzW2RldmljZV0ud2lkdGhcblx0XHRleHBvcnRzLmhlaWdodCA9IGZyYW1lckRldmljZXNbZGV2aWNlXS5oZWlnaHRcblx0XHRpZiB3aW5kb3cuaW5uZXJXaWR0aCA9PSAxMjQyIHx8IHdpbmRvdy5pbm5lcldpZHRoID09IDIyMDhcblx0XHRcdGV4cG9ydHMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aFxuXHRcdFx0ZXhwb3J0cy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHRcblx0XHRcdGV4cG9ydHMuc2NhbGUgPSAzXG5cdGV4cG9ydHMubW9iaWxlID0gZnJhbWVyRGV2aWNlc1tkZXZpY2VdLm1vYmlsZVxuXHRleHBvcnRzLnBsYXRmb3JtID0gZnJhbWVyRGV2aWNlc1tkZXZpY2VdLnBsYXRmb3JtXG5cdGV4cG9ydHMub3JpZW50YXRpb24gPSAgRnJhbWVyLkRldmljZS5vcmllbnRhdGlvblxuXG5cbmV4cG9ydHMub3JpZW50ID0gKCkgLT5cblx0aWYgZXhwb3J0cy5vcmllbnRhdGlvbiA9PSAtOTBcblx0XHR0ZW1wSGVpZ2h0ID0gZXhwb3J0cy5oZWlnaHRcblx0XHR0ZW1wV2lkdGggPSBleHBvcnRzLndpZHRoXG5cdFx0ZXhwb3J0cy5oZWlnaHQgPSB0ZW1wV2lkdGhcblx0XHRleHBvcnRzLndpZHRoID0gdGVtcEhlaWdodFxuXG5leHBvcnRzLmdldERldmljZSgpXG5leHBvcnRzLm9yaWVudCgpXG5cblxuI0xpc3RlbiB0byB3aW5kb3cgcmVpemVcbm9uUmVzaXplID0gKCkgLT5cblx0ZXhwb3J0cy5nZXREZXZpY2UoKVxuXHRleHBvcnRzLmxheW91dCgpXG5cblxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBvblJlc2l6ZSlcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwib3JpZW50YXRpb25jaGFuZ2VcIiAsIG9uUmVzaXplKVxuXG5cblxuXG5cblxuZGVmYXVsdHMgPSB7XG5cdGNoYXJXaWR0aHM6IHtcdFx0XHRcblx0XHRcIkFcIiA6IC43XG5cdFx0XCJCXCIgOiAuNjVcblx0XHRcIkNcIiA6IC43OFxuXHRcdFwiRFwiIDogLjc3XG5cdFx0XCJFXCIgOiAuNThcblx0XHRcIkZcIiA6IC41N1xuXHRcdFwiR1wiIDogLjc3XG5cdFx0XCJIXCIgOiAuNzFcblx0XHRcIklcIiA6IC4xXG5cdFx0XCJKXCIgOiAuNDlcblx0XHRcIktcIiA6IC42NVxuXHRcdFwiTFwiIDogLjU3XG5cdFx0XCJNXCIgOiAuODdcblx0XHRcIk5cIiA6IC43MVxuXHRcdFwiT1wiIDogLjhcblx0XHRcIlBcIiA6IC42MlxuXHRcdFwiUVwiIDogLjhcblx0XHRcIlJcIiA6IC42M1xuXHRcdFwiU1wiIDogLjYzXG5cdFx0XCJUXCIgOiAuNjZcblx0XHRcIlVcIiA6IC43XG5cdFx0XCJWXCIgOiAuN1xuXHRcdFwiV1wiIDogMS4wM1xuXHRcdFwiWFwiIDogLjY4XG5cdFx0XCJZXCIgOiAuNjdcblx0XHRcIlpcIiA6IC42NDVcblx0XHRcImFcIiA6IC41NFxuXHRcdFwiYlwiIDogLjYzXG5cdFx0XCJjXCIgOiAuNTdcblx0XHRcImRcIiA6IC41OVxuXHRcdFwiZVwiIDogLjU5XG5cdFx0XCJmXCIgOiAuMjhcblx0XHRcImdcIiA6IC41OVxuXHRcdFwiaFwiIDogLjU3XG5cdFx0XCJpXCIgOiAuMTJcblx0XHRcImpcIiA6IC4xMlxuXHRcdFwia1wiIDogLjUzXG5cdFx0XCJsXCIgOiAuMTA1XG5cdFx0XCJtXCIgOiAuOVxuXHRcdFwiblwiIDogLjU2XG5cdFx0XCJvXCIgOiAuNlxuXHRcdFwicFwiIDogLjYyXG5cdFx0XCJxXCIgOiAuNTlcblx0XHRcInJcIiA6IC4zNFxuXHRcdFwic1wiIDogLjUwNVxuXHRcdFwidFwiIDogLjI4XG5cdFx0XCJ1XCIgOiAuNTZcblx0XHRcInZcIiA6IC41M1xuXHRcdFwid1wiIDogLjgzNVxuXHRcdFwieFwiIDogLjUxNVxuXHRcdFwieVwiIDogLjUyOFxuXHRcdFwielwiIDogLjUxXG5cdFx0XCIgXCIgOiAuNDRcblx0XHRcIj9cIiA6IC40OTVcblx0XHRcIiFcIiA6IC4xOFxuXHRcdFwiLlwiIDogLjE4XG5cdFx0XCIsXCIgOiAuMTdcblx0XHRcIidcIiA6IC4wOVxuXHRcdFwiMVwiIDogLjMyXG5cdFx0XCIyXCIgOiAuNjNcblx0XHRcIjNcIiA6IC42MlxuXHRcdFwiNFwiIDogLjY1NVxuXHRcdFwiNVwiIDogLjY0XG5cdFx0XCI2XCIgOiAuNjRcblx0XHRcIjdcIiA6IC41OVxuXHRcdFwiOFwiIDogLjY0IFxuXHRcdFwiOVwiIDogLjY0XG5cdFx0XCIwXCIgOiAuNjQ1XG4gXHR9XG5cdGNvbnN0cmFpbnRQcm9wcyA6IFtcImhlaWdodFwiLCBcIndpZHRoXCJdXG5cdGNvbnN0cmFpbnRUeXBlczogW1widG9wXCIsIFwibGVhZGluZ1wiLCBcInRyYWlsaW5nXCIsIFwiYm90dG9tXCJdXG5cdGNvbnN0cmFpbnRBbGlnbnMgOiBbXCJob3Jpem9udGFsQ2VudGVyXCIsIFwidmVydGljYWxDZW50ZXJcIiwgXCJsZWFkaW5nRWRnZXNcIiwgXCJ0cmFpbGluZ0VkZ2VzXCIsIFwidG9wRWRnZXNcIiwgXCJib3R0b21FZGdlc1wiLCBcImFsaWduXCIsIFwidmVydGljYWxcIiwgXCJob3Jpem9udGFsXCJdXG5cdGNvbnN0cmFpbnRzOiB7XG5cdFx0dG9wOiB7XG5cdFx0XHRcInByb3BcIiA6IFwieVwiXG5cdFx0XHRcIm9ialByb3BcIiA6IFwibWF4WVwiXG5cdFx0XHRcIm9ialByb3AyXCIgOiBcImhlaWdodFwiXG5cdFx0XHRcIm9wcFwiIDogXCJib3R0b21cIlxuXHRcdH1cblx0XHRsZWFkaW5nOiB7XG5cdFx0XHRcInByb3BcIiA6IFwieFwiXG5cdFx0XHRcIm9ialByb3BcIiA6IFwibWF4WFwiXG5cdFx0XHRcIm9ialByb3AyXCIgOiBcIndpZHRoXCJcblx0XHRcdFwib3BwXCIgOiBcInRyYWlsaW5nXCJcblx0XHR9XG5cdFx0Ym90dG9tOiB7XG5cdFx0XHRcInByb3BcIiA6IFwibWF4WVwiXG5cdFx0XHRcIm9ialByb3BcIiA6IFwiaGVpZ2h0XCJcblx0XHRcdFwib2JqUHJvcDJcIiA6IFwieVwiXG5cdFx0XHRcIm9wcFwiIDogXCJ0b3BcIlxuXHRcdH1cblx0XHR0cmFpbGluZzoge1xuXHRcdFx0XCJwcm9wXCIgOiBcIm1heFhcIlxuXHRcdFx0XCJvYmpQcm9wXCIgOiBcIndpZHRoXCJcblx0XHRcdFwib2JqUHJvcDJcIiA6IFwieFwiXG5cdFx0XHRcIm9wcFwiIDogXCJsZWFkaW5nXCJcblx0XHR9XG5cdH1cblx0a2V5Ym9hcmRQcm9wczogW1wicmV0dXJuS2V5XCJdXG5cdGtleWJvYXJkOiB7XG5cdFx0cmV0dXJuS2V5OlwiZGVmYXVsdFwiXG5cdH1cblx0dGV4dDoge1xuXHRcdGRlZmF1bHRzOiB7XG5cdFx0XHR0ZXh0OiBcImlPUyBUZXh0IExheWVyXCJcblx0XHRcdHg6MFxuXHRcdFx0eTowXG5cdFx0XHR3aWR0aDotMVxuXHRcdFx0aGVpZ2h0Oi0xXG5cdFx0XHRzdXBlckxheWVyOnVuZGVmaW5lZFxuXHRcdFx0c3R5bGU6XCJkZWZhdWx0XCJcblx0XHRcdGxpbmVzOjFcblx0XHRcdGFsaWduOlwibGVmdFwiXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiXG5cdFx0XHRjb2xvcjpcImJsYWNrXCJcblx0XHRcdGZvbnRTaXplOiAxN1xuXHRcdFx0Zm9udEZhbWlseTpcIi1hcHBsZS1zeXN0ZW0sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWZcIlxuXHRcdFx0Zm9udFdlaWdodDo0MDBcblx0XHRcdGxpbmVIZWlnaHQ6XCJhdXRvXCJcblx0XHRcdH0gXG5cdH1cbn1cblxuc2V0UHJvcHMgPSAob2JqZWN0LCBkZXN0KSAtPlxuXHRrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KVxuXHRkZXN0W1wicHJvcHNcIl0gPSBrZXlzXG5cbnNldFByb3BzKGRlZmF1bHRzLnRleHQuZGVmYXVsdHMsIGRlZmF1bHRzLnRleHQpXG4jIyBDb252ZXJzaW9uc1xuXG4jUGl4ZWxzIHRvIFBvaW50c1xuZXhwb3J0cy5wdCA9IChweCkgLT5cblx0cHQgPSBweC9leHBvcnRzLnNjYWxlXG5cdHB0ID0gTWF0aC5yb3VuZChwdClcblx0cmV0dXJuIHB0XG5cbiNQb2ludHMgdG8gUGl4ZWxzXG5leHBvcnRzLnB4ID0gKHB0KSAtPlxuXHRweCA9IHB0ICogZXhwb3J0cy5zY2FsZVxuXHRweCA9IE1hdGgucm91bmQocHgpXG5cdHJldHVybiBweFxuXG4jIyBFcnJvcnNcblxuZXJyb3IgPSAoY29udGV4dCwgY29kZSkgLT5cblx0aWYgY29kZSA9PSAxIFxuXHRcdHByaW50IFwiRXJyb3IgSW52YWxpZCBSZWxhdGlvbnNoaXAg4oCTIExheWVyIGlkOiN7Y29udGV4dC5pZH0gaGFzIGEgcmVsYXRpb25zaGlwIHdpdGggYW5vdGhlciBsYXllciBub3QgaW4gdGhlIHNhbWUgc3VwZXJMYXllci5cIlxuXHRpZiBjb2RlID09IDJcblx0XHRwcmludCBcIkVycm9yICN7Y29udGV4dH0gcmVxdWlyZXMgYSBsYXllclwiXG5cdGlmIGNvZGUgPT0gM1xuXHRcdHByaW50IFwiRXJyb3IgI3tjb250ZXh0fSBjYW5ub3QgcmVmZXIgdG8gaXRzZWxmXCJcblx0aWYgY29kZSA9PSA0XG5cdFx0cHJpbnQgXCJFcnJvciAje2NvbnRleHR9IGlzIG5vdCBhIHZhbGlkIHdlaWdodC4gUGxlYXNlIHVzZSAxMDAsIDIwMCwgMzAwLi4uIG9yIFRoaW4sIExpZ2h0LCBSZWd1bGFyLi4uXCJcblxuIyMgQXV0b0xheW91dFxuXG4jY2hlY2tzIGlmIHR3byBsYXllcnMgaGF2ZSB0aGUgc2FtZSBwYXJlbnRcbmV4cG9ydHMuc2FtZVBhcmVudCA9IChsYXllcjEsIGxheWVyMikgLT5cblx0cGFyZW50T25lID0gbGF5ZXIxLnN1cGVyTGF5ZXJcblx0cGFyZW50VHdvID0gbGF5ZXIyLnN1cGVyTGF5ZXJcblx0aWYgcGFyZW50T25lID09IHBhcmVudFR3b1xuXHRcdHJldHVybiB0cnVlXG5cdGVsc2UgXG5cdFx0cmV0dXJuIGZhbHNlXG5cbiNSZWZyZXNoZXMgTGF5ZXIgb3IgQWxsIExheWVyc1xuZXhwb3J0cy5sYXlvdXQgPSAobGF5ZXIpIC0+XG5cdGlmIGxheWVyID09IHVuZGVmaW5lZFxuXHRcdEAuYXJyYXkgPSBGcmFtZXIuQ3VycmVudENvbnRleHQubGF5ZXJzXG5cdGVsc2UgXG5cdFx0QC5hcnJheSA9IFtsYXllcl1cblx0Zm9yIGxheWVyIGluIEAuYXJyYXlcblx0XHRpZiBsYXllci5jb25zdHJhaW50cyAhPSB1bmRlZmluZWRcblx0XHRcdGZvciBhIGluIGRlZmF1bHRzLmNvbnN0cmFpbnRBbGlnbnNcblx0XHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHNbYV1cblx0XHRcdFx0XHRsYXlvdXRBbGlnbihsYXllciwgYSlcblx0XHRcdGZvciBwIGluIGRlZmF1bHRzLmNvbnN0cmFpbnRQcm9wc1xuXHRcdFx0XHRsYXlvdXRTaXplKGxheWVyLCBwKVxuXHRcdFx0Zm9yIGMgaW4gZGVmYXVsdHMuY29uc3RyYWludFR5cGVzXG5cdFx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzW2NdICE9IHVuZGVmaW5lZFxuXHRcdFx0XHRcdGxheW91dENoYW5nZShsYXllciwgYylcblxuI0FsaWduIGNvbnN0cmFpbnRzXG5sYXlvdXRBbGlnbiA9IChsYXllciwgdHlwZSkgLT5cblx0ZGVjbGFyZWRDb25zdHJhaW50ID0gbGF5ZXIuY29uc3RyYWludHNbdHlwZV1cblx0aWYgZGVjbGFyZWRDb25zdHJhaW50ID09IHBhcnNlSW50KGRlY2xhcmVkQ29uc3RyYWludCwgMTApXG5cdFx0ZXJyb3IodHlwZSwgMilcblx0aWYgZGVjbGFyZWRDb25zdHJhaW50ID09IGxheWVyXG5cdFx0ZXJyb3IodHlwZSwgMylcblx0aWYgdHlwZW9mIGRlY2xhcmVkQ29uc3RyYWludCA9PSBcIm9iamVjdFwiXG5cdFx0Zm9yIGkgaW4gZGVjbGFyZWRDb25zdHJhaW50XG5cdFx0XHRpZiB0eXBlb2YgaSA9PSBcInN0cmluZ1wiXG5cdFx0XHRcdEB0eXBlID0gaVxuXHRcdFx0aWYgdHlwZW9mIGkgPT0gXCJvYmplY3RcIlxuXHRcdFx0XHRAbGF5ZXIgPSBpIFxuXHRcdGlmIEB0eXBlID09IFwiaG9yaXpvbnRhbENlbnRlclwiIHx8IEB0eXBlID09IFwiaG9yaXpvbnRhbFwiXG5cdFx0XHRkZWx0YU1vdmUgPSAoQGxheWVyLndpZHRoIC0gbGF5ZXIud2lkdGgpIC8gMlxuXHRcdFx0bGF5ZXIueCA9IEBsYXllci54ICsgZGVsdGFNb3ZlXG5cdFx0XHRsYXllci5jb25zdHJhaW50c1tcImxlYWRpbmdcIl0gPSBleHBvcnRzLnB0KGxheWVyLngpXG5cdFx0aWYgQHR5cGUgPT0gXCJ2ZXJ0aWNhbENlbnRlclwiIHx8IEB0eXBlID09IFwidmVydGljYWxcIiAgXG5cdFx0XHRkZWx0YU1vdmUgPSAoQGxheWVyLmhlaWdodCAtIGxheWVyLmhlaWdodCkgLyAyXG5cdFx0XHRsYXllci55ID0gQGxheWVyLnkgKyBkZWx0YU1vdmVcblx0XHRcdGxheWVyLmNvbnN0cmFpbnRzW1widG9wXCJdID0gZXhwb3J0cy5wdChsYXllci55KVxuXHRcdGlmIEB0eXBlID09IFwibGVhZGluZ0VkZ2VzXCIgfHwgQHR5cGUgPT0gXCJsZWFkaW5nXCJcblx0XHRcdGxheWVyLnggPSBAbGF5ZXIueFxuXHRcdFx0bGF5ZXIuY29uc3RyYWludHNbXCJsZWFkaW5nXCJdID0gZXhwb3J0cy5wdChsYXllci54KVxuXHRcdGlmIEB0eXBlID09IFwidHJhaWxpbmdFZGdlc1wiIHx8IEB0eXBlID09IFwidHJhaWxpbmdcIlxuXHRcdFx0bGF5ZXIubWF4WCA9IEBsYXllci5tYXhYXG5cdFx0XHRsYXllci5jb25zdHJhaW50c1tcInRyYWlsaW5nXCJdID0gZXhwb3J0cy5wdChleHBvcnRzLndpZHRoIC0gbGF5ZXIubWF4WClcblx0XHRpZiBAdHlwZSA9PSBcInRvcEVkZ2VzXCIgfHwgQHR5cGUgPT0gXCJ0b3BcIlxuXHRcdFx0bGF5ZXIueSA9IEBsYXllci55XG5cdFx0XHRsYXllci5jb25zdHJhaW50c1tcInRvcFwiXSA9IGV4cG9ydHMucHQobGF5ZXIueSlcblx0XHRpZiBAdHlwZSA9PSBcImJvdHRvbUVkZ2VzXCIgfHwgQHR5cGUgPT0gXCJib3R0b21cIlxuXHRcdFx0bGF5ZXIubWF4WSA9IEBsYXllci5tYXhZXG5cdFx0XHRsYXllci5jb25zdHJhaW50c1tcImJvdHRvbVwiXSA9IGV4cG9ydHMucHQoZXhwb3J0cy5oZWlnaHQgLSBsYXllci5tYXhZKVxuXHRpZiB0eXBlID09IFwiaG9yaXpvbnRhbENlbnRlclwiIHx8IHR5cGUgPT0gXCJob3Jpem9udGFsXCJcblx0XHRkZWx0YU1vdmUgPSAoZGVjbGFyZWRDb25zdHJhaW50LndpZHRoIC0gbGF5ZXIud2lkdGgpIC8gMlxuXHRcdGxheWVyLnggPSBkZWNsYXJlZENvbnN0cmFpbnQueCArIGRlbHRhTW92ZVxuXHRpZiB0eXBlID09IFwidmVydGljYWxDZW50ZXJcIiB8fCB0eXBlID09IFwidmVydGljYWxcIiAgXG5cdFx0ZGVsdGFNb3ZlID0gKGRlY2xhcmVkQ29uc3RyYWludC5oZWlnaHQgLSBsYXllci5oZWlnaHQpIC8gMlxuXHRcdGxheWVyLnkgPSBkZWNsYXJlZENvbnN0cmFpbnQueSArIGRlbHRhTW92ZVxuXHRpZiB0eXBlID09IFwibGVhZGluZ0VkZ2VzXCIgXG5cdFx0bGF5ZXIueCA9IGRlY2xhcmVkQ29uc3RyYWludC54XG5cdFx0bGF5ZXIuY29uc3RyYWludHNbXCJsZWFkaW5nXCJdID0gZXhwb3J0cy5wdChkZWNsYXJlZENvbnN0cmFpbnQueClcblx0aWYgdHlwZSA9PSBcInRyYWlsaW5nRWRnZXNcIlxuXHRcdGxheWVyLm1heFggPSBkZWNsYXJlZENvbnN0cmFpbnQubWF4WFxuXHRcdGxheWVyLmNvbnN0cmFpbnRzW1widHJhaWxpbmdcIl0gPSBleHBvcnRzLnB0KGV4cG9ydHMud2lkdGggLSBsYXllci5tYXhYKVxuXHRpZiB0eXBlID09IFwidG9wRWRnZXNcIlxuXHRcdGxheWVyLnkgPSBkZWNsYXJlZENvbnN0cmFpbnQueVxuXHRcdGxheWVyLmNvbnN0cmFpbnRzW1widG9wXCJdID0gZXhwb3J0cy5wdChsYXllci55KVxuXHRpZiB0eXBlID09IFwiYm90dG9tRWRnZXNcIlxuXHRcdGxheWVyLm1heFkgPSBkZWNsYXJlZENvbnN0cmFpbnQubWF4WVxuXHRcdGxheWVyLmNvbnN0cmFpbnRzW1wiYm90dG9tXCJdID0gZXhwb3J0cy5wdChleHBvcnRzLmhlaWdodCAtIGxheWVyLm1heFkpXG5cdGlmIHR5cGUgPT0gXCJhbGlnblwiXG5cdFx0aWYgZGVjbGFyZWRDb25zdHJhaW50ID09IFwiaG9yaXpvbnRhbFwiXG5cdFx0XHRsYXllci5jZW50ZXJYKClcblx0XHRpZiBkZWNsYXJlZENvbnN0cmFpbnQgPT0gXCJ2ZXJ0aWNhbFwiXG5cdFx0XHRsYXllci5jZW50ZXJZKClcblx0XHRpZiBkZWNsYXJlZENvbnN0cmFpbnQgPT0gXCJjZW50ZXJcIlxuXHRcdFx0bGF5ZXIuY2VudGVyKClcblx0XHRpZiBkZWNsYXJlZENvbnN0cmFpbnQgPT0gXCJ2ZXJ0aWNhbFwiXG5cdFx0XHRsYXllci5jZW50ZXJZKClcblxuXG4jU2l6ZSBDb25zdHJhaW50c1xubGF5b3V0U2l6ZSA9IChsYXllciwgdHlwZSkgLT5cblx0aWYgbGF5ZXIuY29uc3RyYWludHNbdHlwZV1cblx0XHRsYXllclt0eXBlXSA9IGV4cG9ydHMucHgobGF5ZXIuY29uc3RyYWludHNbdHlwZV0pXG5cblxuI01vdmUgJiBSZXNpemVzIExheWVyc1xubGF5b3V0Q2hhbmdlID0gKGxheWVyLCB0eXBlKSAtPlxuXHRpZiBsYXllci5jb25zdHJhaW50c1t0eXBlXSAhPSB1bmRlZmluZWQgXG5cdFx0cHJvcCA9IGRlZmF1bHRzLmNvbnN0cmFpbnRzW3R5cGVdLnByb3Bcblx0XHRvYmpQcm9wID0gZGVmYXVsdHMuY29uc3RyYWludHNbdHlwZV0ub2JqUHJvcFxuXHRcdG9wcCA9IGRlZmF1bHRzLmNvbnN0cmFpbnRzW3R5cGVdLm9wcFxuXHRcdHN1cGVyVHJhaXQgPSBkZWZhdWx0cy5jb25zdHJhaW50c1t0eXBlXS5vYmpQcm9wXG5cblx0XHRpZiBvYmpQcm9wICE9IFwid2lkdGhcIiAmJiBvYmpQcm9wICE9IFwiaGVpZ2h0XCJcblx0XHRcdHN1cGVyVHJhaXQgPSBkZWZhdWx0cy5jb25zdHJhaW50c1t0eXBlXS5vYmpQcm9wMlxuXG5cdFx0aWYgbGF5ZXIuc3VwZXJMYXllciAhPSBudWxsXG5cdFx0XHQjSGFzIGEgc3VwZXJMYXllclxuXHRcdFx0QFtzdXBlclRyYWl0XSA9IGxheWVyLnN1cGVyTGF5ZXJbc3VwZXJUcmFpdF1cblx0XHRlbHNlXG5cdFx0XHQjRG9lcyBub3QgaGF2ZSBhIHN1cGVyTGF5ZXJcblx0XHRcdEBbc3VwZXJUcmFpdF0gPSBleHBvcnRzW3N1cGVyVHJhaXRdXG5cdFx0aWYgdHlwZSA9PSBcInRvcFwiIHx8IHR5cGUgPT0gXCJsZWFkaW5nXCJcblx0XHRcdCMgSGFuZGxlIFRvcCAmIExlYWRpbmdcblx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzW3R5cGVdID09IHBhcnNlSW50KGxheWVyLmNvbnN0cmFpbnRzW3R5cGVdLCAxMClcblx0XHRcdFx0bGF5ZXJbcHJvcF0gPSBsYXllci5jb25zdHJhaW50c1t0eXBlXSAqIGV4cG9ydHMuc2NhbGVcblx0XHRcdGVsc2UgXG5cdFx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzW3R5cGVdLmxlbmd0aCA9PSB1bmRlZmluZWRcblx0XHRcdFx0XHRsYXllcltwcm9wXSA9IGxheWVyLmNvbnN0cmFpbnRzW3R5cGVdW29ialByb3BdXG5cdFx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzW3R5cGVdLmxlbmd0aCA9PSAxXG5cdFx0XHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHNbdHlwZV1bMF0gPT0gcGFyc2VJbnQobGF5ZXIuY29uc3RyYWludHNbdHlwZV1bMF0sIDEwKVxuXHRcdFx0XHRcdFx0bGF5ZXJbcHJvcF0gPSBsYXllci5jb25zdHJhaW50c1t0eXBlXVswXSAqIGV4cG9ydHMuc2NhbGVcblx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHRsYXllcltwcm9wXSA9IGxheWVyLmNvbnN0cmFpbnRzW3R5cGVdWzBdW29ialByb3BdXG5cdFx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzW3R5cGVdLmxlbmd0aCA+IDEgXG5cdFx0XHRcdFx0Zm9yIG9iamVjdCBpbiBsYXllci5jb25zdHJhaW50c1t0eXBlXVxuXHRcdFx0XHRcdFx0aWYgb2JqZWN0ID09IHBhcnNlSW50KG9iamVjdCwgMTApXG5cdFx0XHRcdFx0XHRcdEAub2JqSW50ID0gb2JqZWN0XG5cdFx0XHRcdFx0XHRlbHNlIFxuXHRcdFx0XHRcdFx0XHRALm9iakxheWVyID0gb2JqZWN0XG5cdFx0XHRcdFx0bGF5ZXJbcHJvcF0gPSAoQC5vYmpJbnQgKiBleHBvcnRzLnNjYWxlKSArIEAub2JqTGF5ZXJbb2JqUHJvcF1cblx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzW29wcF0gIT0gdW5kZWZpbmVkXG5cdFx0XHRcdHRyYWl0ID0gZGVmYXVsdHMuY29uc3RyYWludHNbb3BwXVtcIm9ialByb3BcIl1cblx0XHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHNbb3BwXSA9PSBwYXJzZUludChsYXllci5jb25zdHJhaW50c1tvcHBdLCAxMClcblx0XHRcdFx0XHRsYXllclt0cmFpdF0gPSBAW3N1cGVyVHJhaXRdIC0gKGxheWVyW3Byb3BdICsgKGV4cG9ydHMuc2NhbGUgKiBsYXllci5jb25zdHJhaW50c1tvcHBdKSlcblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzW29wcF0ubGVuZ3RoID09IHVuZGVmaW5lZFxuXHRcdFx0XHRcdFx0bGF5ZXJbdHJhaXRdID0gbGF5ZXJbcHJvcF0gLSBsYXllci5jb25zdHJhaW50c1tvcHBdW3Byb3BdXG5cdFx0XHRcdFx0XHRpZiBsYXllclt0cmFpdF0gPCAwXG5cdFx0XHRcdFx0XHRcdGxheWVyW3RyYWl0XSA9IGxheWVyW3RyYWl0XSAqIC0xXG5cdFx0ZWxzZVxuXHRcdFx0IyMgSGFuZGxlIEJvdHRvbSAmIFRyYWlsaW5nXG5cdFx0XHRvYmpQcm9wMiA9IGRlZmF1bHRzLmNvbnN0cmFpbnRzW3R5cGVdLm9ialByb3AyXG5cdFx0XHRpZiBsYXllci5jb25zdHJhaW50c1tvcHBdID09IHVuZGVmaW5lZFxuXHRcdFx0XHQjIyBObyBvcHBvc2l0ZVxuXHRcdFx0XHRpZiBsYXllci5jb25zdHJhaW50c1t0eXBlXSA9PSBwYXJzZUludChsYXllci5jb25zdHJhaW50c1t0eXBlXSwgMTApXG5cdFx0XHRcdFx0IyMgT25seSBJbnRlZ2VyXG5cdFx0XHRcdFx0bGF5ZXJbcHJvcF0gPSBAW3N1cGVyVHJhaXRdIC0gKGxheWVyLmNvbnN0cmFpbnRzW3R5cGVdICogZXhwb3J0cy5zY2FsZSlcblx0XHRcdFx0ZWxzZSBcblx0XHRcdFx0XHRpZiBsYXllci5jb25zdHJhaW50c1t0eXBlXS5sZW5ndGggPT0gdW5kZWZpbmVkXG5cdFx0XHRcdFx0XHQjRW50ZXJlZCBMYXllclxuXHRcdFx0XHRcdFx0aWYgZXhwb3J0cy5zYW1lUGFyZW50KGxheWVyLCBsYXllci5jb25zdHJhaW50c1t0eXBlXSlcblx0XHRcdFx0XHRcdFx0bGF5ZXJbcHJvcF0gPSBsYXllci5jb25zdHJhaW50c1t0eXBlXVtvYmpQcm9wMl1cblx0XHRcdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRcdFx0ZXJyb3IobGF5ZXIsIDEpXG5cdFx0XHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHNbdHlwZV0ubGVuZ3RoID09IDFcblx0XHRcdFx0XHRcdCNBcnJheSBvZiBPbmVcblx0XHRcdFx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzW3R5cGVdWzBdID09IHBhcnNlSW50KGxheWVyLmNvbnN0cmFpbnRzW3R5cGVdWzBdLCAxMClcblx0XHRcdFx0XHRcdFx0I0ludFxuXHRcdFx0XHRcdFx0XHRsYXllcltwcm9wXSA9IEBbb2JqUHJvcF0gLSAobGF5ZXIuY29uc3RyYWludHNbdHlwZV1bMF0gKiBleHBvcnRzLnNjYWxlKVxuXHRcdFx0XHRcdFx0ZWxzZSBcblx0XHRcdFx0XHRcdFx0I09iamVjdFxuXHRcdFx0XHRcdFx0XHRpZiBleHBvcnRzLnNhbWVQYXJlbnQobGF5ZXIsIGxheWVyLmNvbnN0cmFpbnRzW3R5cGVdWzBdKVxuXHRcdFx0XHRcdFx0XHRcdGxheWVyW3Byb3BdID0gbGF5ZXIuY29uc3RyYWludHNbdHlwZV1bMF1bb2JqUHJvcDJdXG5cdFx0XHRcdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRcdFx0XHRlcnJvcihsYXllciwgMSlcblx0XHRcdFx0XHRpZiBsYXllci5jb25zdHJhaW50c1t0eXBlXS5sZW5ndGggPiAxXHRcblx0XHRcdFx0XHRcdCNSZWxhdGlvbnNoaXAgQXJyYXlcblx0XHRcdFx0XHRcdGZvciBvYmplY3QgaW4gbGF5ZXIuY29uc3RyYWludHNbdHlwZV1cblx0XHRcdFx0XHRcdFx0aWYgb2JqZWN0ID09IHBhcnNlSW50KG9iamVjdCwgMTApXG5cdFx0XHRcdFx0XHRcdFx0QC5vYmpJbnQgPSBvYmplY3Rcblx0XHRcdFx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdFx0XHRcdEAub2JqTGF5ZXIgPSBvYmplY3Rcblx0XHRcdFx0XHRcdFx0bGF5ZXJbcHJvcF0gPSBALm9iakxheWVyW29ialByb3AyXSAtIGV4cG9ydHMuc2NhbGUgKiBALm9iakludFxuXG5cbiNUZXh0IExheWVyc1xuZXhwb3J0cy5zdHlsZXMgPSB7XG59XG5cbiMjIEN1c3RvbSBTdHlsZXNcblxuZXhwb3J0cy5hZGRTdHlsZSA9IChhcnJheSkgLT5cblx0a2V5ID0gT2JqZWN0LmtleXMoYXJyYXkpWzBdXG5cdGV4cG9ydHMuc3R5bGVzW2tleV0gPSBhcnJheVtrZXldXG5cbmV4cG9ydHMuYXBwbHkgPSAobGF5ZXIsIHN0eWxlKSAtPlxuXHRzdHlsZSA9IGV4cG9ydHMuc3R5bGVzW3N0eWxlXVxuXHRwcm9wcyA9IE9iamVjdC5rZXlzKHN0eWxlKVxuXHRmcmFtZXJQcm9wcyA9IFtcIndpZHRoXCIsIFwiaGVpZ2h0XCIsIFwic3VwZXJMYXllclwiLCBcIm9wYWNpdHlcIiwgXCJjb2xvclwiLCBcImJhY2tncm91bmRDb2xvclwiLCBcInhcIiwgXCJ5XCIsIFwibWlkWFwiLCBcIm1pZFlcIiwgXCJtYXhYXCIsIFwibWluWFwiLCBcInZpc2libGVcIiwgXCJjbGlwXCIsIFwic2Nyb2xsSG9yaXpvbnRhbFwiLCBcInNjcm9sbFZlcnRpY2FsXCIsIFwiaWdub3JlRXZlbnRzXCIsIFwielwiLCBcInNjYWxlWFwiLCBcInNjYWxlWVwiLCBcInNjYWxlWlwiLCBcInNjYWxlXCIsIFwic2tld1hcIiwgXCJza2V3WVwiLCBcInNrZXdcIiwgXCJvcmlnaW5YXCIsIFwib3JpZ2luWVwiLCBcIm9yaWdpblpcIiwgXCJwZXJzcGVjdGl2ZVwiLCBcInBlcnNwZWN0aXZlT3JpZ2luWFwiLCBcInBlcnNwZWN0aXZlT3JpZ2luWVwiLCBcInJvdGF0aW9uWFwiLCBcInJvdGF0aW9uWVwiLCBcInJvdGF0aW9uWlwiLCBcInJvdGF0aW9uXCIsIFwiYmx1clwiLCBcImJyaWdodG5lc3NcIiwgXCJzYXR1cmF0ZVwiLCBcImh1ZVJvdGF0ZVwiLCBcImNvbnRyYXN0XCIsIFwiaW52ZXJ0XCIsIFwiZ3JheXNjYWxlXCIsIFwic2VwaWFcIiwgXCJzaGFkb3dYXCIsIFwic2hhZG93WVwiLCBcInNoYWRvd0JsdXJcIiwgXCJzaGFkb3dTcHJlYWRcIiwgXCJzaGFkb3dDb2xvclwiLCBcImJvcmRlckNvbG9yXCIsIFwiYm9yZGVyV2lkdGhcIiwgXCJmb3JjZTJkXCIsIFwiZmxhdFwiLCBcImJhY2tmYWNlVmlzaWJsZVwiLCBcIm5hbWVcIiwgXCJtYXRyaXhcIiwgXCJfbWF0cml4MmRcIiwgXCJ0cmFuc2Zvcm1NYXRyaXhcIiwgXCJtYXRyaXgzZFwiLCBcImJvcmRlclJhZGl1c1wiLCBcInBvaW50XCIsIFwic2l6ZVwiLCBcImZyYW1lXCIsIFwiaHRtbFwiLCBcImltYWdlXCIsIFwic2Nyb2xsWFwiLCBcInNjcm9sbFlcIiwgXCJfZG9tRXZlbnRNYW5hZ2VyXCIsIFwibW91c2VXaGVlbFNwZWVkTXVsdGlwbGllclwiLCBcInZlbG9jaXR5VGhyZXNob2xkXCIsIFwiYW5pbWF0aW9uT3B0aW9uc1wiLCBcImNvbnN0cmFpbmVkXCJdXG5cdGNzc1Byb3BzID0gW1wiZm9udEZhbWlseVwiLCBcImZvbnRTaXplXCIsIFwidGV4dEFsaWduXCIsIFwiZm9udFdlaWdodFwiLCBcImxpbmVIZWlnaHRcIl1cblx0Zm9yIHAgaW4gcHJvcHNcblx0XHRpZiBmcmFtZXJQcm9wcy5pbmRleE9mKHApICE9IC0xIFxuXHRcdFx0aWYgc3R5bGVbcF0gPT0gcGFyc2VJbnQoc3R5bGVbcF0sIDEwKVxuXHRcdFx0XHRsYXllcltwXSA9IGV4cG9ydHMucHgoc3R5bGVbcF0pXG5cdFx0XHRlbHNlIFxuXHRcdFx0XHRsYXllcltwXSA9IHN0eWxlW3BdXG5cdFx0aWYgY3NzUHJvcHMuaW5kZXhPZihwKSAhPSAtMSBcblx0XHRcdGlmIHAgPT0gXCJmb250U2l6ZVwiXG5cdFx0XHRcdGxheWVyLnN0eWxlW1wiZm9udC1zaXplXCJdID0gZXhwb3J0cy5weChzdHlsZVtwXSkgKyBcInB4XCJcblx0XHRcdGlmIHAgPT0gXCJmb250RmFtaWx5XCJcblx0XHRcdFx0bGF5ZXIuc3R5bGVbXCJmb250LWZhbWlseVwiXSA9IHN0eWxlW3BdXG5cdFx0XHRpZiBwID09IFwidGV4dEFsaWduXCJcblx0XHRcdFx0bGF5ZXIuc3R5bGVbXCJ0ZXh0LWFsaWduXCJdID0gc3R5bGVbcF1cblx0XHRcdGlmIHAgPT0gXCJmb250V2VpZ2h0XCJcblx0XHRcdFx0aWYgc3R5bGVbcF0gPT0gcGFyc2VJbnQoc3R5bGVbcF0sIDEwKVxuXHRcdFx0XHRcdGxheWVyLnN0eWxlW1wiZm9udC13ZWlnaHRcIl0gPSBzdHlsZVtwXVxuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0c3dpdGNoIHN0eWxlW3BdXG5cdFx0XHRcdFx0XHR3aGVuIFwidWx0cmF0aGluXCIgdGhlbiBsYXllci5zdHlsZVtcImZvbnQtd2VpZ2h0XCJdID0gMTAwXG5cdFx0XHRcdFx0XHR3aGVuIFwidGhpblwiIHRoZW4gbGF5ZXIuc3R5bGVbXCJmb250LXdlaWdodFwiXSA9IDIwMFxuXHRcdFx0XHRcdFx0d2hlbiBcImxpZ2h0XCIgdGhlbiBsYXllci5zdHlsZVtcImZvbnQtd2VpZ2h0XCJdID0gMzAwXG5cdFx0XHRcdFx0XHR3aGVuIFwicmVndWxhclwiIHRoZW4gbGF5ZXIuc3R5bGVbXCJmb250LXdlaWdodFwiXSA9IDQwMFxuXHRcdFx0XHRcdFx0d2hlbiBcIm1lZGl1bVwiIHRoZW4gbGF5ZXIuc3R5bGVbXCJmb250LXdlaWdodFwiXSA9IDUwMFxuXHRcdFx0XHRcdFx0d2hlbiBcInNlbWlib2xkXCIgdGhlbiBsYXllci5zdHlsZVtcImZvbnQtd2VpZ2h0XCJdID0gNjAwXG5cdFx0XHRcdFx0XHR3aGVuIFwiYm9sZFwiIHRoZW4gbGF5ZXIuc3R5bGVbXCJmb250LXdlaWdodFwiXSA9IDcwMFxuXHRcdFx0XHRcdFx0d2hlbiBcImJsYWNrXCIgdGhlbiBsYXllci5zdHlsZVtcImZvbnQtd2VpZ2h0XCJdID0gODAwXG5cdFx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHRcdGVycm9yKHAsIDQpXG5cdFx0XHRpZiBwID09IFwibGluZUhlaWdodFwiXG5cdFx0XHRcdGlmIHN0eWxlW3BdID09IFwiYXV0b1wiXG5cdFx0XHRcdFx0bGF5ZXIuc3R5bGVbXCJsaW5lLWhlaWdodFwiXSA9IGV4cG9ydHMucHgoc3R5bGVbXCJmb250U2l6ZVwiXSkgKiAxLjIgKyBcInB4XCJcblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdGxheWVyLnN0eWxlW1wibGluZS1oZWlnaHRcIl0gPSBleHBvcnRzLnB4KHN0eWxlW3BdKSArIFwicHhcIlxuXG5leHBvcnRzLkN1c3RvbSA9IChzdHlsZSwgYXJyYXkpIC0+XG5cdGxheWVyID0gbmV3IExheWVyIFxuXHRpc1N0eWxlVmFsaWQgPSBleHBvcnRzLnN0eWxlc1tzdHlsZV1cblx0aWYgaXNTdHlsZVZhbGlkID09IHVuZGVmaW5lZFxuXHRcdGlmIGFycmF5ICE9IHVuZGVmaW5lZFxuXHRcdFx0ZXhwb3J0cy5hZGRTdHlsZVxuXHRcdFx0XHRcIiN7c3R5bGV9XCIgOlxuXHRcdFx0XHRcdGFycmF5XG5cdFx0ZWxzZVxuXHRcdFx0ZXhwb3J0cy5hZGRTdHlsZVxuXHRcdFx0XHRcIiN7c3R5bGV9XCIgOlxuXHRcdFx0XHRcdHdpZHRoIDogMTAwXG5cdGV4cG9ydHMuYXBwbHkobGF5ZXIsIHN0eWxlKVxuXHRpZiBhcnJheSAhPSB1bmRlZmluZWQgJiYgaXNTdHlsZVZhbGlkICE9IHVuZGVmaW5lZFxuXHRcdHN0eWxlTnVtID0gXCJjb3B5XCJcblx0XHRuZXdTdHlsZU5hbWUgPSBzdHlsZSArIFwiIFwiICsgc3R5bGVOdW1cblx0XHRleHBvcnRzLmFkZFN0eWxlXG5cdFx0XHRcIiN7bmV3U3R5bGVOYW1lfVwiIDogXG5cdFx0XHRcdGFycmF5XG5cdFx0ZXhwb3J0cy5hcHBseShsYXllciwgbmV3U3R5bGVOYW1lKVxuXHRyZXR1cm4gbGF5ZXIgXG5cbiNBdXRvbWF0aWMgc2l6aW5nIGZvciB0ZXh0IGxheWVyc1xudGV4dFNpemluZyA9IChsYXllciwgdGV4dCwgaGVpZ2h0LCBzdHlsZSwgbGluZXMpIC0+XG5cdGRldmljZSA9IGV4cG9ydHMuZ2V0RGV2aWNlKClcblx0bGF5ZXIuaGVpZ2h0ID0gcGFyc2VJbnQoaGVpZ2h0WzBdICsgaGVpZ2h0WzFdKSArIDJcblx0aWYgbGluZXMgIT0gdW5kZWZpbmVkXG5cdFx0bGF5ZXIuaGVpZ2h0ID0gbGF5ZXIuaGVpZ2h0ICogbGluZXNcblx0bGF5ZXIuaHRtbCA9IHRleHQgXG5cdHN0cmluZ0xlbmd0aCA9IDBcblx0bG9va2luZ0ZvckJyZWFrID0gdGV4dC5zZWFyY2goXCI8YnI+XCIpXG5cdHB1cmVUZXh0ID0gXCJcIlxuXHRpZiBsb29raW5nRm9yQnJlYWsgIT0gLTFcblx0XHRsaW5lMSA9IHRleHQuc3Vic3RyaW5nKDAsbG9va2luZ0ZvckJyZWFrKVxuXHRcdGxpbmUyID0gIHRleHQuc3Vic3RyaW5nKGxvb2tpbmdGb3JCcmVhayArIDUsIHRleHQubGVuZ3RoKVxuXHRcdGlmIGxpbmUxLmxlbmd0aCA+IGxpbmUyLmxlbmd0aFxuXHRcdFx0dGV4dCA9IGxpbmUxXG5cdFx0aWYgbGluZTIubGVuZ3RoID4gbGluZTEubGVuZ3RoXG5cdFx0XHR0ZXh0ID0gbGluZTJcblx0aW52YWxpZFRleHQgPSAvKDwoW14+XSspPikvaWdcblx0cHVyZVRleHQgPSB0ZXh0LnJlcGxhY2UoaW52YWxpZFRleHQsIFwiXCIpXG5cdGNoYXJhY3RlckFycmF5ID0gcHVyZVRleHQuc3BsaXQoJycpXG5cdGZvciBjIGluIGNoYXJhY3RlckFycmF5XG5cdFx0c3RyaW5nTGVuZ3RoID0gY2hhcnNbY11bc3R5bGVdICsgc3RyaW5nTGVuZ3RoXG5cdGxheWVyLndpZHRoID0gc3RyaW5nTGVuZ3RoICogZGV2aWNlLnNjYWxlXG5cblxuXG5cbnRleHRBdXRvU2l6ZSA9ICh0ZXh0TGF5ZXIpIC0+XG5cdCNEZWZpbmUgV2lkdGhcblx0bGF5ZXJXaWR0aCA9IDBcblx0bGF5ZXJIZWlnaHQgPSAwXG5cdGlmIHRleHRMYXllci5oZWlnaHQgPT0gZXhwb3J0cy5weCgtMSkgJiYgdGV4dExheWVyLndpZHRoID09IGV4cG9ydHMucHgoLTEpXG5cdFx0bGF5ZXJIZWlnaHQgPSBwYXJzZUludCh0ZXh0TGF5ZXIuc3R5bGVbJ2ZvbnQtc2l6ZSddLnNsaWNlKDAsLTIpKVxuXHRpZiB0ZXh0TGF5ZXIuaGVpZ2h0ICE9IGV4cG9ydHMucHgoLTEpICYmIHRleHRMYXllci53aWR0aCAhPSBleHBvcnRzLnB4KC0xKVxuXHRcdGxheWVySGVpZ2h0ID0gdGV4dExheWVyLmhlaWdodFxuXHRhcnJheU9mQ2hhcnMgPSB0ZXh0TGF5ZXIuaHRtbC5zcGxpdChcIlwiKVxuXHR3b3JkQ291bnQgPSB0ZXh0TGF5ZXIuaHRtbC5zcGxpdChcIiBcIikubGVuZ3RoXG5cdGFycmF5T2ZXaWR0aHMgPSBkZWZhdWx0cy5jaGFyV2lkdGhzXG5cdGZvbnRNdWx0aXBsaWVyID0gcGFyc2VJbnQodGV4dExheWVyLnN0eWxlW1wiZm9udC1zaXplXCJdLnNsaWNlKDAsLTIpKS8xMFxuXHRmb250V2VpZ2h0TXVsdGlwbGllciA9IHBhcnNlSW50KHRleHRMYXllci5zdHlsZVtcImZvbnQtd2VpZ2h0XCJdKS8zODBcblx0Zm9yIGNoYXIgaW4gYXJyYXlPZkNoYXJzXG5cdFx0bGF5ZXJXaWR0aCA9IGxheWVyV2lkdGggKyAoIGFycmF5T2ZXaWR0aHNbY2hhcl0gKiBmb250TXVsdGlwbGllciAqICg4LjQgKyBmb250V2VpZ2h0TXVsdGlwbGllcikpIFxuXHRcdGxheWVyV2lkdGggPSBNYXRoLnJvdW5kKGxheWVyV2lkdGgpXG5cdHNldFdpZHRoID0gdGV4dExheWVyLndpZHRoXG5cdGlmIHRleHRMYXllci53aWR0aCAhPSBleHBvcnRzLnB4KC0xKSAmJiB0ZXh0TGF5ZXIuaGVpZ2h0ID09IGV4cG9ydHMucHgoLTEpXG5cdFx0bGluZUNvdW50ID0gTWF0aC5jZWlsKGxheWVyV2lkdGgvc2V0V2lkdGgpXG5cdFx0aWYgbGluZUNvdW50ID4gd29yZENvdW50XG5cdFx0XHRsaW5lQ291bnQgPSB3b3JkQ291bnRcblx0XHRsYXllckhlaWdodCA9IHBhcnNlSW50KHRleHRMYXllci5zdHlsZVtcImZvbnQtc2l6ZVwiXS5zbGljZSgwLC0yKSkgKiBsaW5lQ291bnQgKyBwYXJzZUludCh0ZXh0TGF5ZXIuc3R5bGVbXCJsaW5lLWhlaWdodFwiXS5zbGljZSgwLC0yKSkgKiAobGluZUNvdW50IC0gMS41KVxuXHRcdGlmIGxheWVySGVpZ2h0IDwgcGFyc2VJbnQodGV4dExheWVyLnN0eWxlWydmb250LXNpemUnXS5zbGljZSgwLC0yKSlcblx0XHRcdGxheWVySGVpZ2h0ID0gcGFyc2VJbnQodGV4dExheWVyLnN0eWxlWydmb250LXNpemUnXS5zbGljZSgwLC0yKSlcblx0aWYgdGV4dExheWVyLndpZHRoICE9IGV4cG9ydHMucHgoLTEpXG5cdFx0bGF5ZXJXaWR0aCA9IHNldFdpZHRoXG5cdHJldHVybiB7XG5cdFx0d2lkdGggOiBsYXllcldpZHRoXG5cdFx0aGVpZ2h0OiBsYXllckhlaWdodFxuXHR9XG5cbmV4cG9ydHMuVGV4dCA9IChhcnJheSkgLT5cblx0aWYgYXJyYXkgPT0gdW5kZWZpbmVkXG5cdFx0YXJyYXkgPSBbXVxuXHRzdHlsZUFycmF5ID0ge31cblx0Zm9yIGkgaW4gZGVmYXVsdHMudGV4dC5wcm9wc1xuXHRcdGlmIGFycmF5W2ldICE9IHVuZGVmaW5lZFxuXHRcdFx0QFtpXSA9IGFycmF5W2ldXG5cdFx0ZWxzZVxuXHRcdFx0QFtpXSA9IGRlZmF1bHRzLnRleHQuZGVmYXVsdHNbaV1cblx0XHRpZiBpICE9IFwic3R5bGVcIlxuXHRcdFx0c3R5bGVBcnJheVtpXSA9IEBbaV1cblx0aWYgZXhwb3J0cy5zdHlsZXNbQC5zdHlsZV0gPT0gdW5kZWZpbmVkXG5cdFx0ZXhwb3J0cy5hZGRTdHlsZVxuXHRcdFx0XCIje0Auc3R5bGV9XCIgOlxuXHRcdFx0XHRzdHlsZUFycmF5XG5cdHRleHRMYXllciA9IG5ldyBMYXllclxuXHR0ZXh0TGF5ZXIuaHRtbCA9IEB0ZXh0XG5cdGV4cG9ydHMuYXBwbHkodGV4dExheWVyLCBAc3R5bGUpXG5cdHRleHRGcmFtZSA9IHRleHRBdXRvU2l6ZSh0ZXh0TGF5ZXIpXG5cdHRleHRMYXllci5wcm9wcyA9IChoZWlnaHQ6dGV4dEZyYW1lLmhlaWdodCwgd2lkdGg6dGV4dEZyYW1lLndpZHRoKVxuXHRyZXR1cm4gdGV4dExheWVyXG5cblxuXG5leHBvcnRzLktleWJvYXJkID0gKGFycmF5KSAtPlxuXHRpZiBhcnJheSA9PSB1bmRlZmluZWRcblx0XHRhcnJheSA9IFtdXG5cdGZvciBwcm9wIGluIGRlZmF1bHRzLmtleWJvYXJkUHJvcHNcblx0XHRpZiBhcnJheVtwcm9wXVx0XHRcdFxuXHRcdFx0QFtwcm9wXSA9IGFycmF5W3Byb3BdXG5cdFx0ZWxzZSBcblx0XHRcdEBbcHJvcF0gPSBkZWZhdWx0cy5rZXlib2FyZFByb3BzW3Byb3BdXG5cdGJvYXJkID0gbmV3IExheWVyIGJhY2tncm91bmRDb2xvcjpcIiNEMUQ1REFcIiwgbmFtZTpcImtleWJvYXJkXCJcblx0Ym9hcmQuY29uc3RyYWludHMgPSAoYm90dG9tOjAsIGhlaWdodDoyMTYsIHRyYWlsaW5nOjAsIGxlYWRpbmc6MClcblx0ZXhwb3J0cy5sYXlvdXQoKVxuXHRsZXR0ZXJzQXJyYXkgPSBbXCJxXCIsIFwid1wiLCBcImVcIiwgXCJyXCIsIFwidFwiLCBcInlcIiwgXCJ1XCIsIFwiaVwiLCBcIm9cIiwgXCJwXCIsIFwiYVwiLCBcInNcIiwgXCJkXCIsIFwiZlwiLCBcImdcIiwgXCJoXCIsIFwialwiLCBcImtcIiwgXCJsXCIsIFwielwiLCBcInhcIiwgXCJjXCIsIFwidlwiLCAgXCJiXCIsIFwiblwiLCBcIm1cIl1cblx0a2V5c0FycmF5ID0gW11cblx0c3BhY2VyID0gZXhwb3J0cy5weCg1KVxuXHRpZiBleHBvcnRzLnNjYWxlID09IDMgfHwgZXhwb3J0cy53aWR0aCA9PSA2NDBcblx0XHRzcGFjZXIgPSBleHBvcnRzLnB4KDYpXG5cdHJvd3NNYXAgPSBbXG5cdFx0eyBcblx0XHRcdFwicGFkZGluZ1wiIDogZXhwb3J0cy5weCg0KVxuXHRcdFx0XCJzdGFydEluZGV4XCIgOiAwXG5cdFx0XHRcImVuZEluZGV4XCIgOiA5XG5cdFx0XHRcIm1hcmdpblRvcFwiIDogZXhwb3J0cy5weCgxMClcblx0XHR9LFxuXHRcdHsgXG5cdFx0XHRcInBhZGRpbmdcIiA6IDIyICogZXhwb3J0cy5zY2FsZVxuXHRcdFx0XCJzdGFydEluZGV4XCIgOiAxMFxuXHRcdFx0XCJlbmRJbmRleFwiIDogMThcblx0XHRcdFwibWFyZ2luVG9wXCIgOiAyMiAqIGV4cG9ydHMuc2NhbGVcblx0XHR9LFxuXHRcdHsgXG5cdFx0XHRcInBhZGRpbmdcIiA6IDU5ICogZXhwb3J0cy5zY2FsZVxuXHRcdFx0XCJzdGFydEluZGV4XCIgOiAxOVxuXHRcdFx0XCJlbmRJbmRleFwiIDogMjVcblx0XHRcdFwibWFyZ2luVG9wXCIgOiAzNCAqIGV4cG9ydHMuc2NhbGVcblx0XHR9XG5cdF1cblx0a2V5UG9wVXAgPSBuZXcgTGF5ZXIgd2lkdGg6QGtleVdpZHRoLCBoZWlnaHQ6QGtleUhlaWdodCwgeDpALngtMTYqZXhwb3J0cy5zY2FsZSwgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIiwgc3VwZXJMYXllcjpib2FyZCwgbmFtZTpcImtleSBwb3AgdXBcIlxuXHRib3ggPSBuZXcgTGF5ZXIgYm9yZGVyUmFkaXVzOmV4cG9ydHMucHgoMTApLCBzdXBlckxheWVyOmtleVBvcFVwLCBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiLCBjb2xvcjpcImJsYWNrXCIsIG5hbWU6XCJsZXR0ZXJcIlxuXHRib3guc3R5bGUgPSB7XG5cdFx0XCJmb250LXNpemVcIiA6IDM5ICogZXhwb3J0cy5zY2FsZSArIFwicHhcIlxuXHRcdFwiZm9udC13ZWlnaHRcIiA6IDMwMFxuXHRcdFwiZm9udC1mYW1pbHlcIiA6ICctYXBwbGUtc3lzdGVtLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmJ1xuXHRcdCd0ZXh0LWFsaWduJyA6ICdjZW50ZXInXG5cdFx0J2xpbmUtaGVpZ2h0JyA6IEBsaW5lSGVpZ2h0XG5cdH1cblx0QC5jb2xvciA9IFwid2hpdGVcIlxuXHRwYXRoID0gbmV3IExheWVyIHN1cGVyTGF5ZXI6a2V5UG9wVXAsIGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCIsIG5hbWU6XCJzaGFwZSBwYXRoXCJcblxuXG5cdHNoaWZ0S2V5ID0gbmV3IExheWVyIHN1cGVyTGF5ZXI6Ym9hcmQsIG5hbWU6XCJzaGlmdFwiLCBib3JkZXJSYWRpdXM6ZXhwb3J0cy5weCg1KSwgYmFja2dyb3VuZENvbG9yOlwiI0FBQjNCQ1wiLCBzaGFkb3dZOmV4cG9ydHMucHgoMSksIHNoYWRvd0NvbG9yOlwiIzkyOTQ5OFwiXG5cdHNoaWZ0S2V5LmNvbnN0cmFpbnRzID0gKGJvdHRvbTo1NiwgbGVhZGluZzozLCB3aWR0aDo0MiwgaGVpZ2h0OjQyKVxuXHRzaGlmdEljb24gPSBuZXcgTGF5ZXIgd2lkdGg6ZXhwb3J0cy5weCgyMCksIGhlaWdodDpleHBvcnRzLnB4KDE5KSwgc3VwZXJMYXllcjpzaGlmdEtleSwgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIiwgeDpleHBvcnRzLnB4KDExKSwgeTpleHBvcnRzLnB4KDExKVxuXHRzaGlmdEljb24uaHRtbCA9IFwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdFx0PHN2ZyB3aWR0aD0nI3tleHBvcnRzLnB4KDIwKX1weCcgaGVpZ2h0PScje2V4cG9ydHMucHgoMTgpfXB4JyB2aWV3Qm94PScwIDAgMjAgMTknIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycgeG1sbnM6c2tldGNoPSdodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMnPlxuXHRcdCAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNS4yICgyNTIzNSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdFx0ICAgIDx0aXRsZT5TaGlmdDwvdGl0bGU+XG5cdFx0ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdCAgICA8ZGVmcz48L2RlZnM+XG5cdFx0ICAgIDxnIGlkPSdQYWdlLTEnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIHNrZXRjaDp0eXBlPSdNU1BhZ2UnPlxuXHRcdCAgICAgICAgPGcgaWQ9J0tleWJvYXJkL0xpZ2h0L0xvd2VyJyBza2V0Y2g6dHlwZT0nTVNMYXllckdyb3VwJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtMTQuMDAwMDAwLCAtMTI5LjAwMDAwMCknIGZpbGw9JyMwMzAzMDMnPlxuXHRcdCAgICAgICAgICAgIDxnIGlkPSdUaGlyZC1Sb3cnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDMuMDAwMDAwLCAxMTguMDAwMDAwKScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCc+XG5cdFx0ICAgICAgICAgICAgICAgIDxwYXRoIGQ9J00yMS42NzE5MDA4LDEyLjIzMjU4OTggQzIxLjMwMTAzMiwxMS44Mjc5OTE2IDIwLjY5NDY4OTIsMTEuODMzNDczMSAyMC4zMjg4MTk1LDEyLjIzMjU4OTggTDExLjY5NDcwMjMsMjEuNjUxMjk4MyBDMTAuNzU4NzQ0MSwyMi42NzIzMDggMTEuMTI4NTU0MSwyMy41IDEyLjUwOTc3NTEsMjMuNSBMMTUuOTk5OTk5OSwyMy41MDAwMDAyIEwxNS45OTk5OTk5LDI4LjAwMTQyNDEgQzE1Ljk5OTk5OTksMjguODI5MDY0OCAxNi42NzE2NTU5LDI5LjUwMDAwMDEgMTcuNDk3MTAxLDI5LjUwMDAwMDEgTDI0LjUwMjg5OTIsMjkuNTAwMDAwMSBDMjUuMzI5NzI1MywyOS41MDAwMDAxIDI2LjAwMDAwMDMsMjguODM0OTcwMyAyNi4wMDAwMDAzLDI4LjAwMTQyNDEgTDI2LjAwMDAwMDMsMjMuNTAwMDAwMSBMMjkuNDkwMjI1MSwyMy41MDAwMDAyIEMzMC44NzYzMzU3LDIzLjUwMDAwMDIgMzEuMjQzOTUyMSwyMi42NzUxOTE2IDMwLjMwNTQxNjEsMjEuNjUxMjk4NSBMMjEuNjcxOTAwOCwxMi4yMzI1ODk4IFogTTIxLjM0MTc0OCwxNC4zNjQ1MzE2IEMyMS4xNTMwMDU2LDE0LjE2MzIwNjQgMjAuODQzMzUxNSwxNC4xNjcwOTE0IDIwLjY1ODI1MTQsMTQuMzY0NTMxNiBMMTMuNSwyMS45OTk5OTk4IEwxNy41MDAwMDAxLDIxLjk5OTk5OTkgTDE3LjUwMDAwMDIsMjcuNTA4OTk1NiBDMTcuNTAwMDAwMiwyNy43ODAxNzAzIDE3LjczMjkwMjcsMjguMDAwMDAwOCAxOC4wMDM0MjI5LDI4LjAwMDAwMDggTDIzLjk5NjU3NywyOC4wMDAwMDA4IEMyNC4yNzQ2MDk3LDI4LjAwMDAwMDggMjQuNDk5OTk5NywyNy43NzIxMjAzIDI0LjQ5OTk5OTcsMjcuNTA4OTk1NiBMMjQuNDk5OTk5NywyMS45OTk5OTk5IEwyOC41LDIxLjk5OTk5OTkgTDIxLjM0MTc0OCwxNC4zNjQ1MzE2IFonIGlkPSdTaGlmdCc+PC9wYXRoPlxuXHRcdCAgICAgICAgICAgIDwvZz5cblx0XHQgICAgICAgIDwvZz5cblx0XHQgICAgPC9nPlxuXHRcdDwvc3ZnPlwiXG5cblx0c2hpZnRJY29uLnN0YXRlcy5hZGRcblx0XHRvbjpcblx0XHRcdGh0bWw6IFwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdFx0XHQ8c3ZnIHdpZHRoPScje2V4cG9ydHMucHgoMjApfXB4JyBoZWlnaHQ9JyN7ZXhwb3J0cy5weCgxOCl9cHgnIHZpZXdCb3g9JzAgMCAyMCAxNycgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyB4bWxuczpza2V0Y2g9J2h0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaC9ucyc+XG5cdFx0XHQgICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjUuMiAoMjUyMzUpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdFx0ICAgIDx0aXRsZT5TaGlmdDwvdGl0bGU+XG5cdFx0XHQgICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0XHQgICAgPGRlZnM+PC9kZWZzPlxuXHRcdFx0ICAgIDxnIGlkPSdQYWdlLTEnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIHNrZXRjaDp0eXBlPSdNU1BhZ2UnPlxuXHRcdFx0ICAgICAgICA8ZyBpZD0nS2V5Ym9hcmQvTGlnaHQvVXBwZXInIHNrZXRjaDp0eXBlPSdNU0xheWVyR3JvdXAnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC0xNC4wMDAwMDAsIC0xMzAuMDAwMDAwKScgZmlsbD0nIzAzMDMwMyc+XG5cdFx0XHQgICAgICAgICAgICA8ZyBpZD0nVGhpcmQtUm93JyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgzLjAwMDAwMCwgMTE4LjAwMDAwMCknIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnPlxuXHRcdFx0ICAgICAgICAgICAgICAgIDxwYXRoIGQ9J00yMS43MDUyMzg4LDEzLjIwNTIzODggQzIxLjMxNTc0NjIsMTIuODE1NzQ2MiAyMC42ODU3NTU5LDEyLjgxNDI0NDEgMjAuMjk0NzYxMiwxMy4yMDUyMzg4IEwxMS45MTYwNzY3LDIxLjU4MzkyMzMgQzExLjEzMzk5OTEsMjIuMzY2MDAwOSAxMS4zOTgyNjA2LDIzIDEyLjQ5NzkxMzEsMjMgTDE2LjUsMjMgTDE2LjUsMjguMDA5MjIyIEMxNi41LDI4LjU1NjQxMzYgMTYuOTQ2MzExNCwyOSAxNy40OTc1NDQ2LDI5IEwyNC41MDI0NTU0LDI5IEMyNS4wNTMzODQsMjkgMjUuNSwyOC41NDkwMjQ4IDI1LjUsMjguMDA5MjIyIEwyNS41LDIzIEwyOS41MDIwODY5LDIzIEMzMC42MDU1MDM4LDIzIDMwLjg2NjgyNCwyMi4zNjY4MjQgMzAuMDgzOTIzMywyMS41ODM5MjMzIEwyMS43MDUyMzg4LDEzLjIwNTIzODggWicgaWQ9J1NoaWZ0Jz48L3BhdGg+XG5cdFx0XHQgICAgICAgICAgICA8L2c+XG5cdFx0XHQgICAgICAgIDwvZz5cblx0XHRcdCAgICA8L2c+XG5cdFx0XHQ8L3N2Zz5cIlxuXHRzaGlmdEljb24uc3RhdGVzLmFuaW1hdGlvbk9wdGlvbnMgPVxuICBcdCAgdGltZTogLjAxXG5cbiAgXHRkZWxldGVLZXkgPSBuZXcgTGF5ZXIgc3VwZXJMYXllcjpib2FyZCwgYm9yZGVyUmFkaXVzOmV4cG9ydHMucHgoNSksIGJhY2tncm91bmRDb2xvcjpcIiNBQUIzQkNcIiwgc2hhZG93WTpleHBvcnRzLnB4KDEpLCBzaGFkb3dDb2xvcjpcIiM5Mjk0OThcIlxuICBcdGRlbGV0ZUtleS5jb25zdHJhaW50cyA9IChib3R0b206NTYsIHRyYWlsaW5nOjMsIHdpZHRoOjQyLCBoZWlnaHQ6NDIpXG4gIFx0ZGVsZXRlSWNvbiA9IG5ldyBMYXllciBzdXBlckxheWVyOmRlbGV0ZUtleSwgd2lkdGg6ZXhwb3J0cy5weCgyNCksIGhlaWdodDpleHBvcnRzLnB4KDE4KSwgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIlxuICBcdGRlbGV0ZUljb24uY29uc3RyYWludHMgPSAodG9wOjEzLCBsZWFkaW5nOjEwKVxuXG4gIFx0ZGVsZXRlSWNvbi5zdGF0ZXMuYWRkIFxuICBcdFx0b246IFxuICBcdFx0XHRodG1sOiBcIjw/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyc/PlxuXHRcdFx0XHQ8c3ZnIHdpZHRoPScje2V4cG9ydHMucHgoMjQpfXB4JyBoZWlnaHQ9JyN7ZXhwb3J0cy5weCgxOCl9cHgnIHZpZXdCb3g9JzAgMCAyNCAxOCcgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyB4bWxuczpza2V0Y2g9J2h0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaC9ucyc+XG5cdFx0XHRcdCAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNS4yICgyNTIzNSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdFx0XHRcdCAgICA8dGl0bGU+QmFjazwvdGl0bGU+XG5cdFx0XHRcdCAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHRcdFx0ICAgIDxkZWZzPjwvZGVmcz5cblx0XHRcdFx0ICAgIDxnIGlkPSdQYWdlLTEnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIHNrZXRjaDp0eXBlPSdNU1BhZ2UnPlxuXHRcdFx0XHQgICAgICAgIDxnIGlkPSdLZXlib2FyZC9MaWdodC9VcHBlcicgc2tldGNoOnR5cGU9J01TTGF5ZXJHcm91cCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTMzOS4wMDAwMDAsIC0xMzAuMDAwMDAwKScgZmlsbD0nIzAzMDMwMyc+XG5cdFx0XHRcdCAgICAgICAgICAgIDxnIGlkPSdUaGlyZC1Sb3cnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDMuMDAwMDAwLCAxMTguMDAwMDAwKScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCc+XG5cdFx0XHRcdCAgICAgICAgICAgICAgICA8cGF0aCBkPSdNMzUxLjY0MjY2MywyMC45Nzc2OTAzIEwzNTQuNDY2Nzk1LDE4LjE1MzU1ODUgQzM1NC43NjAxMDYsMTcuODYwMjQ3NiAzNTQuNzYzOTgzLDE3LjM4MTQ5NjIgMzU0LjQ3MTA5LDE3LjA4ODYwMyBDMzU0LjE3NjE1NSwxNi43OTM2Njc3IDM1My43MDE0LDE2Ljc5NzYzMjggMzUzLjQwNjEzNSwxNy4wOTI4OTgzIEwzNTAuNTgyMDAzLDE5LjkxNzAzMDEgTDM0Ny43NTc4NzEsMTcuMDkyODk4MyBDMzQ3LjQ2NDU2LDE2Ljc5OTU4NzQgMzQ2Ljk4NTgwOSwxNi43OTU3MDk3IDM0Ni42OTI5MTYsMTcuMDg4NjAzIEMzNDYuMzk3OTgsMTcuMzgzNTM4MiAzNDYuNDAxOTQ1LDE3Ljg1ODI5MyAzNDYuNjk3MjExLDE4LjE1MzU1ODUgTDM0OS41MjEzNDMsMjAuOTc3NjkwMyBMMzQ2LjY5NzIxMSwyMy44MDE4MjIgQzM0Ni40MDM5LDI0LjA5NTEzMjkgMzQ2LjQwMDAyMiwyNC41NzM4ODQzIDM0Ni42OTI5MTYsMjQuODY2Nzc3NiBDMzQ2Ljk4Nzg1MSwyNS4xNjE3MTI4IDM0Ny40NjI2MDYsMjUuMTU3NzQ3NyAzNDcuNzU3ODcxLDI0Ljg2MjQ4MjIgTDM1MC41ODIwMDMsMjIuMDM4MzUwNCBMMzUzLjQwNjEzNSwyNC44NjI0ODIyIEMzNTMuNjk5NDQ1LDI1LjE1NTc5MzEgMzU0LjE3ODE5NywyNS4xNTk2NzA4IDM1NC40NzEwOSwyNC44NjY3Nzc2IEMzNTQuNzY2MDI1LDI0LjU3MTg0MjMgMzU0Ljc2MjA2LDI0LjA5NzA4NzUgMzU0LjQ2Njc5NSwyMy44MDE4MjIgTDM1MS42NDI2NjMsMjAuOTc3NjkwMyBaIE0zMzcuMDU5MzQ1LDIyLjA1OTM0NDUgQzMzNi40NzQyODUsMjEuNDc0Mjg0NyAzMzYuNDgxMzUxLDIwLjUxODY0ODkgMzM3LjA1OTM0NSwxOS45NDA2NTU1IEwzNDMuNzg5OTE1LDEzLjIxMDA4NTMgQzM0NC4xODIwODQsMTIuODE3OTE2IDM0NC45NDg5MiwxMi41IDM0NS41MDc0ODQsMTIuNSBMMzU2LjAwMjA5OCwxMi41IEMzNTcuOTMzOTM2LDEyLjUgMzU5LjUsMTQuMDY4ODQ3NyAzNTkuNSwxNi4wMDE3OTgzIEwzNTkuNSwyNS45OTgyMDE3IEMzNTkuNSwyNy45MzIxOTE1IDM1Ny45MjMwODgsMjkuNSAzNTYuMDAyMDk4LDI5LjUgTDM0NS41MDc0ODQsMjkuNSBDMzQ0Ljk1MTA2NiwyOS41IDM0NC4xNzcxNjksMjkuMTc3MTY5MyAzNDMuNzg5OTE1LDI4Ljc4OTkxNDggTDMzNy4wNTkzNDUsMjIuMDU5MzQ0NSBaJyBpZD0nQmFjayc+PC9wYXRoPlxuXHRcdFx0XHQgICAgICAgICAgICA8L2c+XG5cdFx0XHRcdCAgICAgICAgPC9nPlxuXHRcdFx0XHQgICAgPC9nPlxuXHRcdFx0XHQ8L3N2Zz5cIlxuXG4gIFx0ZGVsZXRlSWNvbi5zdGF0ZXMuYWRkXG4gIFx0XHRvZmY6IFxuICBcdFx0XHRodG1sOiBcIjw/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyc/PlxuXHRcdDxzdmcgd2lkdGg9JyN7ZXhwb3J0cy5weCgyNCl9cHgnIGhlaWdodD0nI3tleHBvcnRzLnB4KDE4KX1weCcgdmlld0JveD0nMCAwIDI0IDE4JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHhtbG5zOnNrZXRjaD0naHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zJz5cblx0XHQgICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjUuMiAoMjUyMzUpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdCAgICA8dGl0bGU+QmFjazwvdGl0bGU+XG5cdFx0ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdCAgICA8ZGVmcz48L2RlZnM+XG5cdFx0ICAgIDxnIGlkPSdQYWdlLTEnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIHNrZXRjaDp0eXBlPSdNU1BhZ2UnPlxuXHRcdCAgICAgICAgPGcgaWQ9J0tleWJvYXJkL0xpZ2h0L1VwcGVyJyBza2V0Y2g6dHlwZT0nTVNMYXllckdyb3VwJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtMzM5LjAwMDAwMCwgLTEzMC4wMDAwMDApJyBmaWxsPScjMDMwMzAzJz5cblx0XHQgICAgICAgICAgICA8ZyBpZD0nVGhpcmQtUm93JyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgzLjAwMDAwMCwgMTE4LjAwMDAwMCknIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnPlxuXHRcdCAgICAgICAgICAgICAgICA8cGF0aCBkPSdNMzM3LjA1OTM0NSwyMi4wNTkzNDQ1IEMzMzYuNDc0Mjg1LDIxLjQ3NDI4NDcgMzM2LjQ4MTM1MSwyMC41MTg2NDg5IDMzNy4wNTkzNDUsMTkuOTQwNjU1NSBMMzQzLjc4OTkxNSwxMy4yMTAwODUzIEMzNDQuMTgyMDg0LDEyLjgxNzkxNiAzNDQuOTQ4OTIsMTIuNSAzNDUuNTA3NDg0LDEyLjUgTDM1Ni4wMDIwOTgsMTIuNSBDMzU3LjkzMzkzNiwxMi41IDM1OS41LDE0LjA2ODg0NzcgMzU5LjUsMTYuMDAxNzk4MyBMMzU5LjUsMjUuOTk4MjAxNyBDMzU5LjUsMjcuOTMyMTkxNSAzNTcuOTIzMDg4LDI5LjUgMzU2LjAwMjA5OCwyOS41IEwzNDUuNTA3NDg0LDI5LjUgQzM0NC45NTEwNjYsMjkuNSAzNDQuMTc3MTY5LDI5LjE3NzE2OTMgMzQzLjc4OTkxNSwyOC43ODk5MTQ4IEwzMzcuMDU5MzQ1LDIyLjA1OTM0NDUgWiBNMzUxLjY0MjY2MywyMC45Nzc2OTAzIEwzNTQuNDY2Nzk1LDE4LjE1MzU1ODUgQzM1NC43NjAxMDYsMTcuODYwMjQ3NiAzNTQuNzYzOTgzLDE3LjM4MTQ5NjIgMzU0LjQ3MTA5LDE3LjA4ODYwMyBDMzU0LjE3NjE1NSwxNi43OTM2Njc3IDM1My43MDE0LDE2Ljc5NzYzMjggMzUzLjQwNjEzNSwxNy4wOTI4OTgzIEwzNTAuNTgyMDAzLDE5LjkxNzAzMDEgTDM0Ny43NTc4NzEsMTcuMDkyODk4MyBDMzQ3LjQ2NDU2LDE2Ljc5OTU4NzQgMzQ2Ljk4NTgwOSwxNi43OTU3MDk3IDM0Ni42OTI5MTYsMTcuMDg4NjAzIEMzNDYuMzk3OTgsMTcuMzgzNTM4MiAzNDYuNDAxOTQ1LDE3Ljg1ODI5MyAzNDYuNjk3MjExLDE4LjE1MzU1ODUgTDM0OS41MjEzNDMsMjAuOTc3NjkwMyBMMzQ2LjY5NzIxMSwyMy44MDE4MjIgQzM0Ni40MDM5LDI0LjA5NTEzMjkgMzQ2LjQwMDAyMiwyNC41NzM4ODQzIDM0Ni42OTI5MTYsMjQuODY2Nzc3NiBDMzQ2Ljk4Nzg1MSwyNS4xNjE3MTI4IDM0Ny40NjI2MDYsMjUuMTU3NzQ3NyAzNDcuNzU3ODcxLDI0Ljg2MjQ4MjIgTDM1MC41ODIwMDMsMjIuMDM4MzUwNCBMMzUzLjQwNjEzNSwyNC44NjI0ODIyIEMzNTMuNjk5NDQ1LDI1LjE1NTc5MzEgMzU0LjE3ODE5NywyNS4xNTk2NzA4IDM1NC40NzEwOSwyNC44NjY3Nzc2IEMzNTQuNzY2MDI1LDI0LjU3MTg0MjMgMzU0Ljc2MjA2LDI0LjA5NzA4NzUgMzU0LjQ2Njc5NSwyMy44MDE4MjIgTDM1MS42NDI2NjMsMjAuOTc3NjkwMyBaIE0zMzguNzA5NzIsMjEuNzA5NzE5NSBDMzM4LjMxNzc1MiwyMS4zMTc3NTIyIDMzOC4zMTg5NjUsMjAuNjgxMDM0OSAzMzguNzA5NzIsMjAuMjkwMjgwNSBMMzQ0LjY0MzI0NSwxNC4zNTY3NTQ3IEMzNDQuODQwMjc2LDE0LjE1OTcyNDUgMzQ1LjIyNTYzOSwxNCAzNDUuNDkzNzQxLDE0IEwzNTUuOTk3MjM5LDE0IEMzNTcuMTAzMzMzLDE0IDM1Ny45OTk5OTksMTQuODk3MDYwMSAzNTcuOTk5OTk5LDE2LjAwNTg1ODYgTDM1Ny45OTk5OTksMjUuOTk0MTQxMiBDMzU3Ljk5OTk5OSwyNy4xMDE5NDY0IDM1Ny4xMDY0NTcsMjcuOTk5OTk5OSAzNTUuOTk3MjM5LDI3Ljk5OTk5OTkgTDM0NS40OTM3NDEsMjggQzM0NS4yMjEwNTYsMjggMzQ0Ljg0MDY0MywyNy44NDA2NDMxIDM0NC42NDMyNDYsMjcuNjQzMjQ1MyBMMzM4LjcwOTcyLDIxLjcwOTcxOTUgWicgaWQ9J0JhY2snPjwvcGF0aD5cblx0XHQgICAgICAgICAgICA8L2c+XG5cdFx0ICAgICAgICA8L2c+XG5cdFx0ICAgIDwvZz5cblx0XHQ8L3N2Zz5cIlxuXG5cbiAgXHRkZWxldGVLZXkub24gRXZlbnRzLlRvdWNoU3RhcnQsIC0+XG4gIFx0XHRkZWxldGVLZXkuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiXG4gIFx0XHRkZWxldGVJY29uLnN0YXRlcy5zd2l0Y2hJbnN0YW50KFwib25cIilcblxuICBcdGRlbGV0ZUtleS5vbiBFdmVudHMuVG91Y2hFbmQsIC0+XG4gIFx0XHRkZWxldGVLZXkuYmFja2dyb3VuZENvbG9yID0gXCIjQUFCM0JDXCJcbiAgXHRcdGRlbGV0ZUljb24uc3RhdGVzLnN3aXRjaEluc3RhbnQoXCJvZmZcIilcblxuICBcdGRlbGV0ZUljb24uc3RhdGVzLnN3aXRjaEluc3RhbnQoXCJvZmZcIilcblxuXHRzaGlmdEljb24ub24gRXZlbnRzLkNsaWNrLCAtPlxuXHRcdHNoaWZ0SWNvbi5zdGF0ZXMubmV4dCgpXG5cdFx0aWYgc2hpZnRJY29uLnN0YXRlcy5zdGF0ZSA9PSBcIm9uXCJcblx0XHRcdHNoaWZ0S2V5LmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIlxuXHRcdFx0Zm9yIGtleSBpbiBrZXlzQXJyYXlcblx0XHRcdFx0a2V5LnN0eWxlWyd0ZXh0LXRyYW5zZm9ybSddID0gJ3VwcGVyY2FzZSdcblx0XHRcdGJveC5zdHlsZVsndGV4dC10cmFuc2Zvcm0nXSA9ICd1cHBlcmNhc2UnXG5cdFx0ZWxzZSBcblx0XHRcdHNoaWZ0S2V5LmJhY2tncm91bmRDb2xvciA9IFwiI0FBQjNCQ1wiXG5cdFx0XHRmb3Iga2V5IGluIGtleXNBcnJheVxuXHRcdFx0XHRrZXkuc3R5bGVbXCJ0ZXh0LXRyYW5zZm9ybVwiXSA9ICdsb3dlcmNhc2UnXG5cdFx0XHRib3guc3R5bGVbXCJ0ZXh0LXRyYW5zZm9ybVwiXSA9ICdsb3dlcmNhc2UnXG5cblx0Zm9yIGxldHRlciBpbiBsZXR0ZXJzQXJyYXlcblx0XHRpbmRleCA9IGxldHRlcnNBcnJheS5pbmRleE9mKGxldHRlcikgXG5cdFx0a2V5ID0gbmV3IExheWVyIG5hbWU6bGV0dGVyLCBzdXBlckxheWVyOmJvYXJkLCBib3JkZXJSYWRpdXM6NSpleHBvcnRzLnNjYWxlLCBiYWNrZ3JvdW5kQ29sb3I6XCJ3aGl0ZVwiLCBjb2xvcjpcImJsYWNrXCIsIHNoYWRvd1k6ZXhwb3J0cy5weCgxKSwgc2hhZG93Q29sb3I6XCIjOTI5NDk4XCJcblx0XHRrZXlQb3BVcC5icmluZ1RvRnJvbnQoKVxuXHRcdGJveC5icmluZ1RvRnJvbnQoKVxuXHRcdGlmIGV4cG9ydHMuc2NhbGUgPT0gMlxuXHRcdFx0a2V5LmNvbnN0cmFpbnRzID0gKHdpZHRoOjMyLCBoZWlnaHQ6NDIpXG5cdFx0XHRrZXlQb3BVcC5jb25zdHJhaW50cyA9ICh3aWR0aDo2NSwgaGVpZ2h0OjEyMilcblx0XHRcdHBhdGguY29uc3RyYWludHMgPSAod2lkdGg6NjUsIGhlaWdodDogMTIyKVxuXHRcdFx0cGF0aC55ID0gMTBcblx0XHRcdEBwYXRoV2lkdGggPSBleHBvcnRzLnB4KDY1KVxuXHRcdFx0QHBhdGhIZWlnaHQgPSBleHBvcnRzLnB4KDEyMilcblx0XHRcdEBrZXlIZWlnaHQgPSBleHBvcnRzLnB4KDMyKVxuXHRcdFx0QGtleVdpZHRoID0gZXhwb3J0cy5weCg0NClcblx0XHRcdEBsaW5lSGVpZ2h0ID0gQGtleVdpZHRoIC0gMTcgKyBcInB4XCJcblx0XHRcdGJveC5jb25zdHJhaW50cyA9ICh3aWR0aDozMiwgaGVpZ2h0OjQ0KVxuXHRcdFx0Ym94LmNlbnRlclgoKVxuXHRcdFx0Ym94LnkgPSBleHBvcnRzLnB4KDI4KVxuXG5cdFx0aWYgZXhwb3J0cy5zY2FsZSA9PSAzXG5cdFx0XHRrZXkuY29uc3RyYWludHMgPSAod2lkdGg6MzUsIGhlaWdodDo0Nilcblx0XHRcdGtleVBvcFVwLmNvbnN0cmFpbnRzID0gKHdpZHRoOjY4LCBoZWlnaHQ6MTIyKVxuXHRcdFx0QGtleUhlaWdodCA9IGV4cG9ydHMucHgoMTIyKVxuXHRcdFx0QGtleVdpZHRoID0gZXhwb3J0cy5weCg2NSlcblx0XHRcdEBsaW5lSGVpZ2h0ID0gQGtleVdpZHRoICsgXCJweFwiXG5cdFx0XHRAcGF0aFdpZHRoID0gZXhwb3J0cy5weCg2OClcblx0XHRcdEBwYXRoSGVpZ2h0ID0gZXhwb3J0cy5weCgxMjgpXG5cdFx0XHRwYXRoLnkgPSAwXG5cblxuXHRcdFx0Ym94LmNvbnN0cmFpbnRzID0gKHdpZHRoOjM1LCBoZWlnaHQ6NDYpXG5cdFx0XHRib3guY2VudGVyWCgpXG5cdFx0XHRib3gueSA9IGV4cG9ydHMucHgoMjgpXG5cblx0XHRpZiBleHBvcnRzLndpZHRoID09IDY0MFxuXHRcdFx0a2V5LmNvbnN0cmFpbnRzID0gKHdpZHRoOjI2LCBoZWlnaHQ6MzkpXG5cblx0XHRrZXlQb3BVcC52aXNpYmxlID0gZmFsc2VcblxuXHRcdGV4cG9ydHMubGF5b3V0KClcblx0XHRrZXkuc3R5bGUgPSB7XG5cdFx0XHRcImZvbnQtc2l6ZVwiIDogMjUgKiBleHBvcnRzLnNjYWxlICsgXCJweFwiXG5cdFx0XHRcImZvbnQtd2VpZ2h0XCIgOiAzMDBcblx0XHRcdFwiZm9udC1mYW1pbHlcIiA6ICctYXBwbGUtc3lzdGVtLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmJ1xuXHRcdFx0J3RleHQtYWxpZ24nIDogJ2NlbnRlcidcblx0XHRcdCdsaW5lLWhlaWdodCcgOiBrZXkuaGVpZ2h0IC0gZXhwb3J0cy5weCgyKSArIFwicHhcIlxuXHRcdH1cblx0XHRrZXkuaHRtbCA9IGxldHRlclxuXHRcdGlmIGluZGV4IDw9IHJvd3NNYXBbMF0uZW5kSW5kZXhcblx0XHRcdHJvd0luZGV4ID0gaW5kZXggLSByb3dzTWFwWzBdLnN0YXJ0SW5kZXhcblx0XHRcdGtleS54ID0gcm93c01hcFswXS5wYWRkaW5nICsgKHJvd0luZGV4KnNwYWNlcikgKyAocm93SW5kZXgqa2V5LndpZHRoKVxuXHRcdFx0a2V5LnkgPSByb3dzTWFwWzBdLm1hcmdpblRvcFxuXHRcdGlmIGluZGV4ID4gcm93c01hcFswXS5lbmRJbmRleCAmJiBpbmRleCA8PSByb3dzTWFwWzFdLmVuZEluZGV4XG5cdFx0XHRyb3dJbmRleCA9IGluZGV4IC0gcm93c01hcFsxXS5zdGFydEluZGV4XG5cdFx0XHRrZXkueCA9IHJvd3NNYXBbMV0ucGFkZGluZyArIChyb3dJbmRleCpzcGFjZXIpICsgKHJvd0luZGV4KmtleS53aWR0aClcblx0XHRcdGtleS55ID0gcm93c01hcFsxXS5tYXJnaW5Ub3AgKyBrZXkuaGVpZ2h0XG5cdFx0aWYgaW5kZXggPiByb3dzTWFwWzFdLmVuZEluZGV4XG5cdFx0XHRyb3dJbmRleCA9IGluZGV4IC0gcm93c01hcFsyXS5zdGFydEluZGV4XG5cdFx0XHRrZXkueCA9IHJvd3NNYXBbMl0ucGFkZGluZyArIChyb3dJbmRleCpzcGFjZXIpICsgKHJvd0luZGV4KmtleS53aWR0aClcblx0XHRcdGtleS55ID0gcm93c01hcFsyXS5tYXJnaW5Ub3AgKyBrZXkuaGVpZ2h0ICogMlxuXHRcdHBhdGguaHRtbCA9IFwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cblx0XHQ8c3ZnIHdpZHRoPScje0BwYXRoV2lkdGh9cHgnIGhlaWdodD0nI3tAcGF0aEhlaWdodH0nIHZpZXdCb3g9JzAgMCA2MyAxMTQnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycgeG1sbnM6c2tldGNoPSdodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMnPlxuXHRcdCAgICA8dGl0bGU+UmVjdGFuZ2xlIDQ0IENvcHk8L3RpdGxlPlxuXHRcdCAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHQgICAgPGRlZnM+XG5cdFx0ICAgICAgICA8ZmlsdGVyIHg9Jy01MCUnIHk9Jy01MCUnIHdpZHRoPScyMDAlJyBoZWlnaHQ9JzIwMCUnIGZpbHRlclVuaXRzPSdvYmplY3RCb3VuZGluZ0JveCcgaWQ9J2ZpbHRlci0xJz5cblx0XHQgICAgICAgICAgICA8ZmVPZmZzZXQgZHg9JzAnIGR5PScwJyBpbj0nU291cmNlQWxwaGEnIHJlc3VsdD0nc2hhZG93T2Zmc2V0T3V0ZXIxJz48L2ZlT2Zmc2V0PlxuXHRcdCAgICAgICAgICAgIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249JzEuNScgaW49J3NoYWRvd09mZnNldE91dGVyMScgcmVzdWx0PSdzaGFkb3dCbHVyT3V0ZXIxJz48L2ZlR2F1c3NpYW5CbHVyPlxuXHRcdCAgICAgICAgICAgIDxmZUNvbG9yTWF0cml4IHZhbHVlcz0nMCAwIDAgMCAwICAgMCAwIDAgMCAwICAgMCAwIDAgMCAwICAwIDAgMCAwLjIxIDAnIGluPSdzaGFkb3dCbHVyT3V0ZXIxJyB0eXBlPSdtYXRyaXgnIHJlc3VsdD0nc2hhZG93TWF0cml4T3V0ZXIxJz48L2ZlQ29sb3JNYXRyaXg+XG5cdFx0ICAgICAgICAgICAgPGZlTWVyZ2U+XG5cdFx0ICAgICAgICAgICAgICAgIDxmZU1lcmdlTm9kZSBpbj0nc2hhZG93TWF0cml4T3V0ZXIxJz48L2ZlTWVyZ2VOb2RlPlxuXHRcdCAgICAgICAgICAgICAgICA8ZmVNZXJnZU5vZGUgaW49J1NvdXJjZUdyYXBoaWMnPjwvZmVNZXJnZU5vZGU+XG5cdFx0ICAgICAgICAgICAgPC9mZU1lcmdlPlxuXHRcdCAgICAgICAgPC9maWx0ZXI+XG5cdFx0ICAgIDwvZGVmcz5cblx0XHQgICAgPGcgaWQ9J1BhZ2UtMScgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCcgc2tldGNoOnR5cGU9J01TUGFnZSc+XG5cdFx0ICAgICAgICA8ZyBpZD0naVBob25lLTYnIHNrZXRjaDp0eXBlPSdNU0FydGJvYXJkR3JvdXAnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC0xMTguMDAwMDAwLCAtMjQwLjAwMDAwMCknIHN0cm9rZT0nI0M3QzdDNycgZmlsdGVyPSd1cmwoI2ZpbHRlci0xKScgc3Ryb2tlLXdpZHRoPScwLjUnIFxuXHRcdCAgICAgICAgZmlsbD0nI0ZGRkZGRicgb3BhY2l0eT0nMC45OTgzNjc1MzcnPlxuXHRcdCAgICAgICAgIDxwYXRoIGQ9J00xMzQsMzA2IEMxMzQsMzA2IDEyMSwyOTUgMTIxLDI5MCBDMTIxLDI3OS42MTY3ODggMTIxLDI1My4wMDE0NTYgMTIxLDI1My4wMDE0NTYgQzEyMSwyNDcuNDc3ODA0IDEyNS40ODU4MzIsMjQzIDEzMS4wMDI3NzQsMjQzIEwxNjcuODYyMTI3LDI0MyBDMTczLjM4NjUwNywyNDMgMTc3Ljg4MDg2MiwyNDcuNDY5OTA1IFxuXHRcdCAgICAgICAgIDE3Ny45MDAwNDQsMjUyLjk5NzI3MSBDMTc3LjkwMDA0NCwyNTIuOTk3MjcxIDE3OCwyODAgMTc3Ljk5OTk5OSwyOTAgQzE3Ny45OTk5OTksMjk1LjAwNjU1MyAxNjUsMzA2IDE2NSwzMDYgTDE2NSwzNDYuMDQ5NTk0IFxuXHRcdCAgICAgICAgIEMxNjUsMzQ4LjgwNjgwNyAxNjIuNzcwNTU2LDM1MS4wNDE5NjkgMTYwLjAwMjA5OCwzNTEuMDQxOTY5IEwxMzguOTk3OTAyLDM1MS4wNDE5NjkgXG5cdFx0ICAgICAgICAgIEMxMzYuMjM3NjM3LDM1MS4wNDE5NjkgMTM0LDM0OC44MDgzMzEgMTM0LDM0Ni4wNDk1OTQgTDEzNCwzMDYgWicgaWQ9J1JlY3RhbmdsZS00NC1Db3B5JyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgxNDkuNTAwMDAwLCAyOTcuMDIwOTg1KSBzY2FsZSgtMSwgMSkgdHJhbnNsYXRlKC0xNDkuNTAwMDAwLCAtMjk3LjAyMDk4NSkgJz5cblx0XHQgICAgICAgICAgPC9wYXRoPlxuXHRcdCAgICAgICAgPC9nPlxuXHRcdCAgICA8L2c+XG5cdFx0PC9zdmc+XCJcblx0XHRrZXlzQXJyYXkucHVzaCBrZXlcblxuXG5cdFx0a2V5Lm9uIEV2ZW50cy5Ub3VjaFN0YXJ0LCAtPlxuXHRcdFx0a2V5UG9wVXAudmlzaWJsZSA9IHRydWVcdFxuXHRcdFx0Ym94Lmh0bWwgPSBALm5hbWVcblx0XHRcdGtleVBvcFVwLm1heFkgPSBALm1heFlcblx0XHRcdGtleVBvcFVwLm1pZFggPSBALm1pZFhcblxuXHRcdGtleS5vbiBFdmVudHMuVG91Y2hNb3ZlLCAtPlxuXHRcdFx0Ym94Lmh0bWwgPSBALm5hbWVcblx0XHRcdGtleVBvcFVwLm1heFkgPSBALm1heFlcblx0XHRcdGtleVBvcFVwLm1pZFggPSBALm1pZFhcdFxuXG5cdFx0a2V5Lm9uIEV2ZW50cy5Ub3VjaEVuZCwgLT5cblx0XHRcdGtleVBvcFVwLnZpc2libGUgPSBmYWxzZVxuXHRcdFx0aWYgc2hpZnRJY29uLnN0YXRlcy5zdGF0ZSA9PSBcIm9uXCJcblx0XHRcdFx0c2hpZnRJY29uLnN0YXRlcy5zd2l0Y2goXCJkZWZhdWx0XCIpXG5cdFx0XHRcdGZvciBrZXkgaW4ga2V5c0FycmF5XG5cdFx0XHRcdFx0a2V5LnN0eWxlWyd0ZXh0LXRyYW5zZm9ybSddID0gJ2xvd2VyY2FzZSdcblx0XHRcdFx0Ym94LnN0eWxlWyd0ZXh0LXRyYW5zZm9ybSddID0gJ2xvd2VyY2FzZSdcblxuXG5cblxuXHRudW1LZXkgPSBuZXcgTGF5ZXIgc3VwZXJMYXllcjpib2FyZCwgbmFtZTpcIm51bVwiLCBib3JkZXJSYWRpdXM6ZXhwb3J0cy5weCg1KSwgYmFja2dyb3VuZENvbG9yOlwiI0FBQjNCQ1wiLCBzaGFkb3dZOmV4cG9ydHMucHgoMSksIHNoYWRvd0NvbG9yOlwiIzkyOTQ5OFwiLCBjb2xvcjpcImJsYWNrXCJcblx0bnVtS2V5LmNvbnN0cmFpbnRzID0gKHdpZHRoOjQwLjUsIGhlaWdodDo0MiwgYm90dG9tOjQsIGxlYWRpbmc6Mylcblx0bnVtS2V5Lmh0bWwgPSBcIjEyM1wiXG5cdG51bUtleS5zdHlsZSA9IHtcblx0XHRcImZvbnQtc2l6ZVwiIDogZXhwb3J0cy5weCgxNikgKyBcInB4XCJcblx0XHRcImZvbnQtd2VpZ2h0XCIgOiA0MDBcblx0XHRcImZvbnQtZmFtaWx5XCIgOiAnLWFwcGxlLXN5c3RlbSwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZidcblx0XHQndGV4dC1hbGlnbicgOiAnY2VudGVyJ1xuXHRcdCdsaW5lLWhlaWdodCcgOiBleHBvcnRzLnB4KDQyKSArIFwicHhcIlxuXG5cdH1cblxuXHRleHBvcnRzLmxheW91dCgpXG5cdGVtb2ppS2V5ID0gbmV3IExheWVyIHN1cGVyTGF5ZXI6Ym9hcmQsIG5hbWU6XCJlbW9qaVwiLCBib3JkZXJSYWRpdXM6ZXhwb3J0cy5weCg1KSwgYmFja2dyb3VuZENvbG9yOlwiI0FBQjNCQ1wiLCBzaGFkb3dZOmV4cG9ydHMucHgoMSksIHNoYWRvd0NvbG9yOlwiIzkyOTQ5OFwiXG5cdGVtb2ppS2V5LmNvbnN0cmFpbnRzID0gKHdpZHRoOjQxLCBoZWlnaHQ6NDIsIGJvdHRvbTo0LCBsZWFkaW5nOltudW1LZXksIDZdKVxuXHRlbW9qaUtleS5odG1sID0gXCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0XHQ8c3ZnIHdpZHRoPScje2V4cG9ydHMucHgoMjApfXB4JyBoZWlnaHQ9JyN7ZXhwb3J0cy5weCgyMCl9cHgnIHZpZXdCb3g9JzAgMCAyMCAyMCcgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyB4bWxuczpza2V0Y2g9J2h0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaC9ucyc+XG5cdFx0ICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy41LjIgKDI1MjM1KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHQgICAgPHRpdGxlPkVtb2ppPC90aXRsZT5cblx0XHQgICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0ICAgIDxkZWZzPjwvZGVmcz5cblx0XHQgICAgPGcgaWQ9J1BhZ2UtMScgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCcgc2tldGNoOnR5cGU9J01TUGFnZSc+XG5cdFx0ICAgICAgICA8ZyBpZD0nS2V5Ym9hcmQvTGlnaHQvTG93ZXInIHNrZXRjaDp0eXBlPSdNU0xheWVyR3JvdXAnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC02MC4wMDAwMDAsIC0xODEuMDAwMDAwKScgZmlsbD0nIzAzMDMwMyc+XG5cdFx0ICAgICAgICAgICAgPGcgaWQ9J0JvdHRvbS1Sb3cnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDMuMDAwMDAwLCAxNzAuMDAwMDAwKScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCc+XG5cdFx0ICAgICAgICAgICAgICAgIDxwYXRoIGQ9J002Ni43NSwzMC41IEM3Mi4xMzQ3NzYzLDMwLjUgNzYuNSwyNi4xMzQ3NzYzIDc2LjUsMjAuNzUgQzc2LjUsMTUuMzY1MjIzNyA3Mi4xMzQ3NzYzLDExIDY2Ljc1LDExIEM2MS4zNjUyMjM3LDExIDU3LDE1LjM2NTIyMzcgNTcsMjAuNzUgQzU3LDI2LjEzNDc3NjMgNjEuMzY1MjIzNywzMC41IDY2Ljc1LDMwLjUgWiBNNjYuNzUsMjkuNSBDNzEuNTgyNDkxNiwyOS41IDc1LjUsMjUuNTgyNDkxNiA3NS41LDIwLjc1IEM3NS41LDE1LjkxNzUwODQgNzEuNTgyNDkxNiwxMiA2Ni43NSwxMiBDNjEuOTE3NTA4NCwxMiA1OCwxNS45MTc1MDg0IDU4LDIwLjc1IEM1OCwyNS41ODI0OTE2IDYxLjkxNzUwODQsMjkuNSA2Ni43NSwyOS41IFogTTYzLjc1LDE5IEM2NC40NDAzNTU5LDE5IDY1LDE4LjQ0MDM1NTkgNjUsMTcuNzUgQzY1LDE3LjA1OTY0NDEgNjQuNDQwMzU1OSwxNi41IDYzLjc1LDE2LjUgQzYzLjA1OTY0NDEsMTYuNSA2Mi41LDE3LjA1OTY0NDEgNjIuNSwxNy43NSBDNjIuNSwxOC40NDAzNTU5IDYzLjA1OTY0NDEsMTkgNjMuNzUsMTkgWiBNNjkuNzUsMTkgQzcwLjQ0MDM1NTksMTkgNzEsMTguNDQwMzU1OSA3MSwxNy43NSBDNzEsMTcuMDU5NjQ0MSA3MC40NDAzNTU5LDE2LjUgNjkuNzUsMTYuNSBDNjkuMDU5NjQ0MSwxNi41IDY4LjUsMTcuMDU5NjQ0MSA2OC41LDE3Ljc1IEM2OC41LDE4LjQ0MDM1NTkgNjkuMDU5NjQ0MSwxOSA2OS43NSwxOSBaIE01OS44ODc2MzM0LDIyLjE2NDE0NDQgQzU5LjYzOTAzMTYsMjEuMzgzMTM0IDYwLjA2NTkxOCwyMC45Nzg1MTU2IDYwLjg1MzA5NTEsMjEuMjMyOTMwNCBDNjAuODUzMDk1MSwyMS4yMzI5MzA0IDYzLjA5Mzc1MDMsMjIuMjEyNSA2Ni43NTAwMDAxLDIyLjIxMjUgQzcwLjQwNjI0OTksMjIuMjEyNSA3Mi42NDY5MDQ3LDIxLjIzMjkzMDQgNzIuNjQ2OTA0NywyMS4yMzI5MzA0IEM3My40Mjg3MTYyLDIwLjk2NjIxNTMgNzMuODgxMjQ2MywyMS40MDQ0MDk3IDczLjYwNTg0NzcsMjIuMTgwNzQzNyBDNzMuNjA1ODQ3NywyMi4xODA3NDM3IDcyLjYsMjcuNTc1IDY2Ljc1LDI3LjU3NSBDNjAuOSwyNy41NzUgNTkuODg3NjMzNCwyMi4xNjQxNDQ0IDU5Ljg4NzYzMzQsMjIuMTY0MTQ0NCBaIE02Ni43NSwyMy4xODc1IEM2NC4wNjg3NSwyMy4xODc1IDYxLjg1NDQwNTUsMjIuNDczNzgyMSA2MS44NTQ0MDU1LDIyLjQ3Mzc4MjEgQzYxLjMyNzMwMTksMjIuMzI5NDggNjEuMTc4MTIzMywyMi41NzIxNjE1IDYxLjU2Mzk1NTUsMjIuOTU3MDc1IEM2MS41NjM5NTU1LDIyLjk1NzA3NSA2Mi4zNjI1LDI0LjY1IDY2Ljc1LDI0LjY1IEM3MS4xMzc1LDI0LjY1IDcxLjk1MDg1MDMsMjIuOTQzODMwNCA3MS45NTA4NTAzLDIyLjk0MzgzMDQgQzcyLjMwOTM2NTksMjIuNTM5OTI3OCA3Mi4xNjkwNzkzLDIyLjMzNTk4NDQgNzEuNjM1NDI3MywyMi40NzYzNDkgQzcxLjYzNTQyNzMsMjIuNDc2MzQ5IDY5LjQzMTI1LDIzLjE4NzUgNjYuNzUsMjMuMTg3NSBaJyBpZD0nRW1vamknPjwvcGF0aD5cblx0XHQgICAgICAgICAgICA8L2c+XG5cdFx0ICAgICAgICA8L2c+XG5cdFx0ICAgIDwvZz5cblx0XHQ8L3N2Zz5cIlxuXHRlbW9qaUtleS5zdHlsZSA9IHtcblx0XHRcInBhZGRpbmctdG9wXCI6IGV4cG9ydHMucHgoMTEpICsgXCJweFwiXG5cdFx0XCJwYWRkaW5nLWxlZnRcIjogZXhwb3J0cy5weCgxMSkgKyBcInB4XCJcblx0fVxuXG5cdGVtb2ppRm9ybWF0dGVyID0gKHN0cmluZykgLT5cblx0XHR1bmljb2RlRm9ybWF0ID0gXCJcIlxuXHRcdGlmIHN0cmluZ1swXSA9PSBcIkVcIiB8fCBzdHJpbmdbMF0gPT0gXCIzXCIgfHwgc3RyaW5nWzBdID09IFwiMlwiIHx8IHN0cmluZ1swXSA9PSBcIkNcIlxuXHRcdFx0YXJyYXlPZkNvZGVzID0gc3RyaW5nLnNwbGl0KFwiIFwiKVxuXHRcdFx0Zm9yIGNvZGUgaW4gYXJyYXlPZkNvZGVzXG5cdFx0XHRcdHVuaWNvZGVGb3JtYXQgPSB1bmljb2RlRm9ybWF0ICsgXCIlXCIgKyBjb2RlXG5cdFx0ZWxzZSBcblx0XHRcdGFycmF5T2ZDb2RlcyA9IHN0cmluZy5zcGxpdChcIiBcIilcblx0XHRcdHVuaWNvZGVGb3JtYXQgPSBcIiVGMCU5RlwiXG5cdFx0XHRmb3IgY29kZSBpbiBhcnJheU9mQ29kZXNcblx0XHRcdFx0dW5pY29kZUZvcm1hdCA9IHVuaWNvZGVGb3JtYXQgKyBcIiVcIiArIGNvZGVcblx0XHRyZXR1cm4gdW5pY29kZUZvcm1hdFxuXG5cdGV4cG9ydHMubGF5b3V0KClcblx0ZW1vamlTZWN0aW9ucyA9IFtcIkZyZXF1bmV0bHkgVXNlZFwiLCBcIlNtaWxleXMgJiBQZW9wbGVcIiwgXCJBbmltYWxzICYgTmF0dXJlXCIsIFwiRm9vZCAmIERyaW5rXCIsIFwiQWN0aXZpdHlcIiwgXCJUcmF2ZWwgJiBQbGFjZXNcIiwgXCJPYmplY3RzXCIsIFwiU3ltYm9sc1wiLCBcIkZsYWdzXCJdXG5cdHJhd0Vtb2ppcyA9IFtcIjk4IDgwXCIsIFwiOTggQUNcIiwgXCI5OCA4MVwiLCBcIjk4IDgyXCIsIFwiOTggODNcIiwgXCI5OCA4NFwiLCBcIjk4IDg1XCIsIFwiOTggODZcIiwgXCI5OCA4N1wiLCBcIjk4IDg5XCIsIFwiOTggOGFcIiwgXCI5OSA4MlwiLCBcIjk5IDgzXCIsIFwiRTIgOTggQkEgRUYgQjggOEZcIiwgXCI5OCA4QlwiICwgXCI5OCA4Q1wiLCBcIjk4IDhEXCIsIFwiOTggOThcIiwgXCI5OCA5N1wiLCBcIjk4IDk5XCIsIFwiOTggOUFcIiwgXCI5OCA5Q1wiLCBcIjk4IDlEXCIsIFwiOTggOUJcIiwgXCJBNCA5MVwiLCBcIkE0IDkzXCIsIFwiOTggOEVcIiwgXCJBNCA5N1wiLCBcIjk4IDhGXCIsIFwiOTggQjZcIiwgXCI5OCA5MFwiLCBcIjk4IDkxXCIsIFwiOTggOTJcIiwgXCI5OSA4NFwiLCBcIkE0IDk0XCIsIFwiOTggQjNcIiwgXCI5OCA5RVwiLCBcIjk4IDlGXCIsIFwiOTggQTBcIiwgXCI5OCBBMVwiLCBcIjk4IDk0XCIsIFwiOTggOTVcIiwgXCI5OSA4MVwiLCBcIkUyIDk4IEI5IEVGIEI4IDhGXCIsIFwiOTggQTNcIiwgXCI5OCA5NlwiLCBcIjk4IEFCXCIsIFwiOTggQTlcIiwgXCI5OCBBNFwiLCBcIjk4IEFFXCIsIFwiOTggQjFcIiwgXCI5OCBBOFwiLCBcIjk4IEIwXCIsIFwiOTggQUZcIiwgXCI5OCBBNlwiLCBcIjk4IEE3XCIsIFwiOTggQTJcIiwgXCI5OCBBNVwiLCBcIjk4IEFBXCIsIFwiOTggOTNcIiwgXCI5OCBBRFwiLCBcIjk4IEI1XCIsIFwiOTggQjJcIiwgXCJBNCA5MFwiLCBcIjk4IEI3XCIsIFwiQTQgOTJcIiwgXCJBNCA5NVwiLCBcIjk4IEI0XCIsIFwiOTIgQTRcIiwgXCI5MiBBOVwiLCBcIjk4IDg4XCIsIFwiOTEgQkZcIiwgXCI5MSBCOVwiLCBcIjkxIEJBXCIsIFwiOTIgODBcIiwgXCI5MSBCQlwiLCBcIjkxIEJEXCIsIFwiQTQgOTZcIiwgXCI5OCBCQVwiLCBcIjk4IEI4XCIsIFwiOTggQjlcIiwgXCI5OCBCQlwiLCBcIjk4IEJDXCIsIFwiOTggQkRcIiwgXCI5OSA4MFwiLCBcIjk4IEJGXCIsIFwiOTggQkVcIiwgXCI5OSA4Q1wiLCBcIjkxIDhGXCIsIFwiOTEgOEJcIiwgXCI5MSA4RFwiLCBcIjkxIDhFXCIsIFwiOTEgOEFcIiwgXCJFMiA5QyA4QVwiLCBcIkUyIDlDIDhDIEVGIEI4IDhGXCIsIFwiOTEgOENcIiwgXCJFMiA5QyA4QlwiLCBcIjkxIDkwXCIsIFwiOTIgQUFcIiwgXCI5OSA4RlwiLCBcIkUyIDk4IDlEIEVGIEI4IDhGXCIsIFwiOTEgODZcIiwgXCI5MSA4N1wiLCBcIjkxIDg4XCIsIFwiOTEgODlcIiwgXCI5NiA5NVwiLCBcIjk2IDkwXCIsIFwiQTQgOThcIiwgXCI5NiA5NlwiLCBcIkUyIDlDIDhEIEVGIEI4IDhGXCIsIFwiOTIgODVcIiwgXCI5MSA4NFwiLCBcIjkxIDg1XCIsIFwiOTEgODJcIiwgXCI5MSA4M1wiLCBcIjkxIDgxXCIsIFwiOTEgODBcIiwgXCI5MSBBNFwiLCBcIjkxIEE1XCIsIFwiOTcgQTNcIiwgXCI5MSBCNlwiLCBcIjkxIEE2XCIsIFwiOTEgQTdcIiwgXCI5MSBBOFwiLCBcIjkxIEE5XCIsIFwiOTEgQjFcIiwgXCI5MSBCNFwiLCBcIjkxIEI1XCIsIFwiOTEgQjJcIiwgXCI5MSBCM1wiLCBcIjkxIEFFXCIsIFwiOTEgQjdcIiwgXCI5MiA4MlwiLCBcIjk1IEI1XCIsIFwiOEUgODVcIiwgXCI5MSBCQ1wiLCBcIjkxIEI4XCIsIFwiOTEgQjBcIiwgXCI5QSBCNlwiLCBcIjhGIDgzXCIsIFwiOTIgODNcIiwgXCI5MSBBRlwiLCBcIjkxIEFCXCIsIFwiOTEgQUNcIiwgXCI5MSBBRFwiLCBcIjk5IDg3XCIsIFwiOTIgODFcIiwgXCI5OSA4NVwiLCBcIjk5IDg2XCIsIFwiOTkgOEJcIiwgXCI5OSA4RVwiLCBcIjk5IDhEXCIsIFwiOTIgODdcIiwgXCI5MiA4NlwiLCBcIjkyIDkxXCIsIFwiOTEgQTkgRTIgODAgOEQgRTIgOUQgQTQgRUYgQjggOEYgRTIgODAgOEQgRjAgOUYgOTEgQTlcIiwgXCI5MSBBOCBFMiA4MCA4RCBFMiA5RCBBNCBFRiBCOCA4RiBFMiA4MCA4RCBGMCA5RiA5MSBBOFwiLCBcIjkyIDhGXCIsIFwiOTEgQTkgRTIgODAgOEQgRTIgOUQgQTQgRUYgQjggOEYgRTIgODAgOEQgRjAgOUYgOTIgOEIgRTIgODAgOEQgRjAgOUYgOTEgQTlcIiwgXCI5MSBBOCBFMiA4MCA4RCBFMiA5RCBBNCBFRiBCOCA4RiBFMiA4MCA4RCBGMCA5RiA5MiA4QiBFMiA4MCA4RCBGMCA5RiA5MSBBOFwiLCBcIjkxIEFBXCIsIFwiOTEgQTggRTIgODAgOEQgRjAgOUYgOTEgQTkgRTIgODAgOEQgRjAgOUYgOTEgQTdcIiwgXCI5MSBBOCBFMiA4MCA4RCBGMCA5RiA5MSBBOSBFMiA4MCA4RCBGMCA5RiA5MSBBNyBFMiA4MCA4RCBGMCA5RiA5MSBBNlwiLCBcIjkxIEE4IEUyIDgwIDhEIEYwIDlGIDkxIEE5IEUyIDgwIDhEIEYwIDlGIDkxIEE2IEUyIDgwIDhEIEYwIDlGIDkxIEE2XCIsIFwiOTEgQTggRTIgODAgOEQgRjAgOUYgOTEgQTkgRTIgODAgOEQgRjAgOUYgOTEgQTcgRTIgODAgOEQgRjAgOUYgOTEgQTdcIiwgXCI5MSBBOSBFMiA4MCA4RCBGMCA5RiA5MSBBOSBFMiA4MCA4RCBGMCA5RiA5MSBBNlwiLCBcIjkxIEE5IEUyIDgwIDhEIEYwIDlGIDkxIEE5IEUyIDgwIDhEIEYwIDlGIDkxIEE3XCIsIFwiOTEgQTkgRTIgODAgOEQgRjAgOUYgOTEgQTkgRTIgODAgOEQgRjAgOUYgOTEgQTcgRTIgODAgOEQgRjAgOUYgOTEgQTZcIiwgXCI5MSBBOSBFMiA4MCA4RCBGMCA5RiA5MSBBOSBFMiA4MCA4RCBGMCA5RiA5MSBBNiBFMiA4MCA4RCBGMCA5RiA5MSBBNlwiLCBcIjkxIEE5IEUyIDgwIDhEIEYwIDlGIDkxIEE5IEUyIDgwIDhEIEYwIDlGIDkxIEE3IEUyIDgwIDhEIEYwIDlGIDkxIEE3XCIsIFwiOTEgQTggRTIgODAgOEQgRjAgOUYgOTEgQTggRTIgODAgOEQgRjAgOUYgOTEgQTZcIiwgXCI5MSBBOCBFMiA4MCA4RCBGMCA5RiA5MSBBOCBFMiA4MCA4RCBGMCA5RiA5MSBBN1wiLCBcIjkxIEE4IEUyIDgwIDhEIEYwIDlGIDkxIEE4IEUyIDgwIDhEIEYwIDlGIDkxIEE3IEUyIDgwIDhEIEYwIDlGIDkxIEE2XCIsIFwiOTEgQTggRTIgODAgOEQgRjAgOUYgOTEgQTggRTIgODAgOEQgRjAgOUYgOTEgQTYgRTIgODAgOEQgRjAgOUYgOTEgQTZcIiwgXCI5MSBBOCBFMiA4MCA4RCBGMCA5RiA5MSBBOCBFMiA4MCA4RCBGMCA5RiA5MSBBNyBFMiA4MCA4RCBGMCA5RiA5MSBBN1wiLCBcIjkxIDlBXCIsIFwiOTEgOTVcIiwgXCI5MSA5NlwiLCBcIjkxIDk0XCIsIFwiOTEgOTdcIiwgXCI5MSA5OVwiLCBcIjkxIDk4XCIsIFwiOTIgODRcIiwgXCI5MiA4QlwiLCBcIjkxIEEzXCIsIFwiOTEgQTBcIiwgXCI5MSBBMVwiLCBcIjkxIEEyXCIsIFwiOTEgOUVcIiwgXCI5MSA5RlwiLCBcIjkxIDkyXCIsIFwiOEUgQTlcIiwgXCJFMiA5QiA5MVwiLCBcIjhFIDkzXCIsIFwiOTEgOTFcIiwgXCI4RSA5MlwiLCBcIjkxIDlEXCIsIFwiOTEgOUJcIiwgXCI5MSA5Q1wiLCBcIjkyIEJDXCIsIFwiOTEgOTNcIiwgXCI5NSBCNlwiLCBcIjkyIDhEXCIsIFwiOEMgODJcIiwgXCI5QiA5MVwiLCBcIjkwIEI2XCIsIFwiOTAgQjFcIiwgXCI5MCBBRFwiLCBcIjkwIEI5XCIsIFwiOTAgQjBcIiwgXCI5MCBCQlwiLCBcIjkwIEJDXCIsIFwiOTAgQThcIiwgXCI5MCBBRlwiLCBcIkE2IDgxXCIsIFwiOTAgQUVcIiwgXCI5MCBCN1wiLCBcIjkwIEJEXCIsIFwiOTAgQjhcIiwgXCI5MCA5OVwiLCBcIjkwIEI1XCIsIFwiOTkgODhcIiwgXCI5OSA4OVwiLCBcIjk5IDhBXCIsIFwiOTAgOTJcIiwgXCI5MCA5NFwiLCBcIjkwIEE3XCIsIFwiOTAgQTZcIiwgXCI5MCBBNFwiLCBcIjkwIEEzXCIsIFwiOTAgQTVcIiwgXCI5MCBCQVwiLCBcIjkwIDk3XCIsIFwiOTAgQjRcIiwgXCJBNiA4NFwiLCBcIjkwIDlEXCIsIFwiOTAgOUJcIiwgXCI5MCA4Q1wiLCBcIjkwIDlFXCIsIFwiOTAgOUNcIiwgXCI5NSBCN1wiLCBcIkE2IDgyXCIsIFwiQTYgODBcIiwgXCI5MCA4RFwiLCBcIjkwIEEyXCIsIFwiOTAgQTBcIiwgXCI5MCA5RlwiLCBcIjkwIEExXCIsIFwiOTAgQUNcIiwgXCI5MCBCM1wiLCBcIjkwIDhCXCIsIFwiOTAgOEFcIiwgXCI5MCA4NlwiLCBcIjkwIDg1XCIsIFwiOTAgODNcIiwgXCI5MCA4MlwiLCBcIjkwIDg0XCIsIFwiOTAgQUFcIiwgXCI5MCBBQlwiLCBcIjkwIDk4XCIsIFwiOTAgOTBcIiwgXCI5MCA4RlwiLCBcIjkwIDkxXCIsIFwiOTAgOEVcIiwgXCI5MCA5NlwiLCBcIjkwIDgwXCIsIFwiOTAgODFcIiwgXCI5MCA5M1wiLCBcIkE2IDgzXCIsIFwiOTUgOEFcIiwgXCI5MCA5NVwiLCBcIjkwIEE5XCIsIFwiOTAgODhcIiwgXCI5MCA4N1wiLCBcIjkwIEJGXCIsIFwiOTAgQkVcIiwgXCI5MCA4OVwiLCBcIjkwIEIyXCIsIFwiOEMgQjVcIiwgXCI4RSA4NFwiLCBcIjhDIEIyXCIsIFwiOEMgQjNcIiwgXCI4QyBCNFwiLCBcIjhDIEIxXCIsIFwiOEMgQkZcIiwgXCJFMiA5OCA5OFwiLCBcIjhEIDgwXCIsIFwiOEUgOERcIiwgXCI4RSA4QlwiLCBcIjhEIDgzXCIsIFwiOEQgODJcIiwgXCI4RCA4MVwiLCBcIjhDIEJFXCIsIFwiOEMgQkFcIiwgXCI4QyBCQVwiLCBcIjhDIEJCXCIsIFwiOEMgQjlcIiwgXCI4QyBCN1wiLCBcIjhDIEJDXCIsIFwiOEMgQjhcIiwgXCI5MiA5MFwiLCBcIjhEIDg0XCIsIFwiOEMgQjBcIiwgXCI4RSA4M1wiLCBcIjkwIDlBXCIsIFwiOTUgQjhcIiwgXCI4QyA4RVwiLCBcIjhDIDhEXCIsIFwiOEMgOEZcIiwgXCI4QyA5NVwiLCBcIjhDIDk2XCIsIFwiOEMgOTdcIiwgXCI4QyA5OFwiLCBcIjhDIDkxXCIsIFwiOEMgOTJcIiwgXCI4QyA5M1wiLCBcIjhDIDk0XCIsIFwiOEMgOUFcIiwgXCI4QyA5RFwiLCBcIjhDIDlCXCIsIFwiOEMgOUNcIiwgXCI4QyA5RVwiLCBcIjhDIDk5XCIsIFwiRTIgQUQgOTAgRUYgQjggOEZcIiwgXCI4QyA5RlwiLCBcIjkyIEFCXCIsIFwiRTIgOUMgQThcIiwgXCJFMiA5OCA4NCBFRiBCOCA4RlwiLCBcIkUyIDk4IDgwIEVGIEI4IDhGXCIsIFwiOEMgQTRcIiwgXCJFMiA5QiA4NSBFRiBCOCA4RlwiLCBcIjhDIEE1XCIsIFwiOEMgQTZcIiwgXCJFMiA5OCA4MSBFRiBCOCA4RlwiLCBcIjhDIEE3XCIsIFwiRTIgOUIgODhcIiwgXCI4QyBBOVwiLCBcIkUyIDlBIEExIEVGIEI4IDhGXCIsIFwiOTQgQTVcIiwgXCI5MiBBNVwiLCBcIkUyIDlEIDg0IEVGIEI4IDhGXCIsIFwiOEMgQThcIiwgXCJFMiA5OCA4MyBFRiBCOCA4RlwiLCBcIkUyIDlCIDg0IEVGIEI4IDhGXCIsIFwiOEMgQUNcIiwgXCI5MiBBOFwiLCBcIjhDIEFBXCIsIFwiOEMgQUJcIiwgXCJFMiA5OCA4MiBFRiBCOCA4RlwiLCBcIkUyIDk4IDk0IEVGIEI4IDhGXCIsIFwiOTIgQTdcIiwgXCI5MiBBNlwiLCBcIjhDIDhBXCIsIFwiOUIgOTFcIiwgXCI5QiA5MVwiLCBcIjhEIDhGXCIsIFwiOEQgOEVcIiwgXCI4RCA5MFwiLCBcIjhEIDhBXCIsIFwiOEQgOEJcIiwgXCI4RCA4Q1wiLCBcIjhEIDg5XCIsIFwiOEQgODdcIiwgXCI4RCA5M1wiLCBcIjhEIDg4XCIsIFwiOEQgOTJcIiwgXCI4RCA5MVwiLCBcIjhEIDhEXCIsIFwiOEQgODVcIiwgXCI4RCA4NlwiLCBcIjhDIEI2XCIsIFwiOEMgQkRcIiwgXCI4RCBBMFwiLCBcIjhEIEFGXCIsIFwiOEQgOUVcIiwgXCJBNyA4MFwiLCBcIjhEIDk3XCIsIFwiOEQgOTZcIiwgXCI4RCBBNFwiLCBcIjhEIEIzXCIsIFwiOEQgOTRcIiwgXCI4RCA5RlwiLCBcIjhDIEFEXCIsIFwiOEQgOTVcIiwgXCI4RCA5RFwiLCBcIjhDIEFFXCIsIFwiOEMgQUZcIiwgXCI4RCA5Q1wiLCBcIjhEIEIyXCIsIFwiOEQgQTVcIiwgXCI4RCBBM1wiLCBcIjhEIEIxXCIsIFwiOEQgOUJcIiwgXCI4RCA5OVwiLCBcIjhEIDlBXCIsIFwiOEQgOThcIiwgXCI4RCBBMlwiLCBcIjhEIEExXCIsIFwiOEQgQTdcIiwgXCI4RCBBOFwiLCBcIjhEIEE2XCIsIFwiOEQgQjBcIiwgXCI4RSA4MlwiLCBcIjhEIEFFXCIsIFwiOEQgQUNcIiwgXCI4RCBBRFwiLCBcIjhEIEFCXCIsIFwiOEQgQkZcIiwgXCI4RCBBOVwiLCBcIjhEIEFBXCIsIFwiOEQgQkFcIiwgXCI4RCBCQlwiLCBcIjhEIEI3XCIsIFwiOEQgQjhcIiwgXCI4RCBCOVwiLCBcIjhEIEJFXCIsIFwiOEQgQjZcIiwgXCI4RCBCNVwiLCBcIkUyIDk4IDk1IEVGIEI4IDhGXCIsIFwiOEQgQkNcIiwgXCI4RCBCNFwiLCBcIjhEIEJEXCIsXCI5QiA5MVwiLCBcIjlCIDkxXCIsIFwiOUIgOTFcIiwgXCJFMiA5QSBCRCBFRiBCOCA4RlwiLCBcIjhGIDgwXCIsIFwiOEYgODhcIiwgXCJFMiA5QSBCRSBFRiBCOCA4RlwiLCBcIjhFIEJFXCIsIFwiOEYgOTBcIiwgXCI4RiA4OVwiLCBcIjhFIEIxXCIsIFwiRTIgOUIgQjMgRUYgQjggOEZcIiwgXCI4RiA4Q1wiLCBcIjhGIDkzXCIsIFwiOEYgQjhcIiwgXCI4RiA5MlwiLCBcIjhGIDkxXCIsIFwiOEYgOEZcIiwgXCI4RSBCRlwiLCBcIkUyIDlCIEI3XCIsIFwiOEYgODJcIiwgXCJFMiA5QiBCOFwiLCBcIjhGIEI5XCIsIFwiOEUgQTNcIiwgXCI5QSBBM1wiLCBcIjhGIDhBXCIsIFwiOEYgODRcIiwgXCI5QiA4MFwiLCBcIkUyIDlCIEI5XCIsIFwiOEYgOEJcIiwgXCI5QSBCNFwiLCBcIjlBIEI1XCIsIFwiOEYgODdcIiwgXCI5NSBCNFwiLCBcIjhGIDg2XCIsIFwiOEUgQkRcIiwgXCI4RiA4NVwiLCBcIjhFIDk2XCIsIFwiOEUgOTdcIiwgXCI4RiBCNVwiLCBcIjhFIEFCXCIsIFwiOEUgOUZcIiwgXCI4RSBBRFwiLCBcIjhFIEE4XCIsIFwiOEUgQUFcIiwgXCI4RSBBNFwiLCBcIjhFIEE3XCIsIFwiOEUgQkNcIiwgXCI4RSBCOVwiLCBcIjhFIEI3XCIsIFwiOEUgQkFcIiwgXCI4RSBCOFwiLCBcIjhFIEJCXCIsIFwiOEUgQUNcIiwgXCI4RSBBRVwiLCBcIjkxIEJFXCIsIFwiOEUgQUZcIiwgXCI4RSBCMlwiLCBcIjhFIEIwXCIsIFwiOEUgQjNcIiwgXCI5QiA5MVwiLCBcIjlCIDkxXCIsIFwiOUIgOTFcIiwgXCI5QSA5N1wiLCBcIjlBIDk1XCIsIFwiOUEgOTlcIiwgXCI5QSA4Q1wiLCBcIjlBIDhFXCIsIFwiOEYgOEVcIiwgXCI5QSA5M1wiLCBcIjlBIDkxXCIsIFwiOUEgOTJcIiwgXCI5QSA5MFwiLCBcIjlBIDlBXCIsIFwiOUEgOUJcIiwgXCI5QSA5Q1wiLFwiOEYgOERcIiwgXCI5QSBCMlwiLCBcIjlBIEE4XCIsIFwiOUEgOTRcIiwgXCI5QSA4RFwiLCBcIjlBIDk4XCIsIFwiOUEgOTZcIiwgXCI5QSBBMVwiLCBcIjlBIEEwXCIsIFwiOUEgQUZcIiwgXCI5QSA4M1wiLCBcIjlBIDhCXCIsIFwiOUEgOURcIiwgXCI5QSA4NFwiLCBcIjlBIDg1XCIsIFwiOUEgODhcIiwgXCI5QSA5RVwiLCBcIjlBIDgyXCIsIFwiOUEgODZcIiwgXCI5QSA4N1wiLCBcIjlBIDhBXCIsIFwiOUEgODlcIiwgXCI5QSA4MVwiLCBcIjlCIEE5XCIsIFwiRTIgOUMgODggRUYgQjggOEZcIiwgXCI5QiBBQlwiLCBcIjlCIEFDXCIsIFwiRTIgOUIgQjUgRUYgQjggOEZcIiwgXCI5QiBBNVwiLCBcIjlBIEE0XCIsIFwiRTIgOUIgQjRcIiwgXCI5QiBCM1wiLCBcIjlBIDgwXCIsIFwiOUIgQjBcIiwgXCI5MiBCQVwiLCBcIkUyIDlBIDkzIEVGIEI4IDhGXCIsIFwiOUEgQTdcIiwgXCJFMiA5QiBCRCBFRiBCOCA4RlwiLCBcIjlBIDhGXCIsIFwiOUEgQTZcIiwgXCI5QSBBNVwiLCBcIjhGIDgxXCIsIFwiOUEgQTJcIiwgXCI4RSBBMVwiLCBcIjhFIEEyXCIsIFwiOEUgQTBcIiwgXCI4RiA5N1wiLCBcIjhDIDgxXCIsIFwiOTcgQkNcIiwgXCI4RiBBRFwiLCBcIkUyIDlCIEIyIEVGIEI4IDhGXCIsIFwiOEUgOTFcIiwgXCJFMiA5QiBCMFwiLCBcIjhGIDk0XCIsIFwiOTcgQkJcIiwgXCI4QyA4QlwiLCBcIjk3IEJFXCIsIFwiOEYgOTVcIiwgXCJFMiA5QiBCQSBFRiBCOCA4RlwiLCBcIjhGIDlFXCIsIFwiOUIgQTNcIiwgXCI5QiBBNFwiLCBcIjhDIDg1XCIsIFwiOEMgODRcIiwgXCI4RiA5Q1wiLCBcIjhGIDk2XCIsIFwiOEYgOURcIiwgXCI4QyA4N1wiLCBcIjhDIDg2XCIsIFwiOEYgOTlcIiwgXCI4QyA4M1wiLCBcIjhDIDg5XCIsIFwiOEMgOENcIiwgXCI4QyBBMFwiLCBcIjhFIDg3XCIsIFwiOEUgODZcIiwgXCI4QyA4OFwiLCBcIjhGIDk4XCIsIFwiOEYgQjBcIiwgXCI4RiBBRlwiLCBcIjhGIDlGXCIsIFwiOTcgQkRcIiwgXCI4RiBBMFwiLCBcIjhGIEExXCIsIFwiOEYgOUFcIiwgXCI4RiBBMlwiLCBcIjhGIEFDXCIsIFwiOEYgQTNcIiwgXCI4RiBBNFwiLCBcIjhGIEE1XCIsIFwiOEYgQTZcIiwgXCI4RiBBOFwiLCBcIjhGIEFBXCIsIFwiOEYgQUJcIiwgXCI4RiBBOVwiLCBcIjkyIDkyXCIsIFwiOEYgOUJcIiwgXCJFMiA5QiBBQSBFRiBCOCA4RlwiLCBcIjk1IDhDXCIsIFwiOTUgOERcIiwgXCI5NSA4QlwiLCBcIkUyIDlCIEE5XCIsIFwiRTIgOEMgOUEgRUYgQjggOEZcIiwgXCI5MyBCMVwiLCBcIjkzIEIyXCIsIFwiOTIgQkJcIiwgXCJFMiA4QyBBOCBFRiBCOCA4RlwiLCBcIjk2IEE1XCIsIFwiOTYgQThcIiwgXCI5NiBCMVwiLCBcIjk2IEIyXCIsIFwiOTUgQjlcIiwgXCI5NyA5Q1wiLCBcIjkyIEJEXCIsIFwiOTIgQkVcIiwgXCI5MiBCRlwiLCBcIjkzIDgwXCIsIFwiOTMgQkNcIiwgXCI5MyBCN1wiLCBcIjkzIEI4XCIsIFwiOTMgQjlcIiwgXCI4RSBBNVwiLCBcIjkzIEJEXCIsIFwiOEUgOUVcIiwgXCI5MyA5RVwiLCBcIkUyIDk4IDhFIEVGIEI4IDhGXCIsIFwiOTMgOUZcIiwgXCI5MyBBMFwiLCBcIjkzIEJBXCIsIFwiOTMgQkJcIiwgXCI4RSA5OVwiLCBcIjhFIDlBXCIsIFwiOEUgOUJcIiwgXCJFMiA4RiBCMVwiLCBcIkUyIDhGIEIyXCIsIFwiRTIgOEYgQjBcIiwgXCI5NSBCMFwiLCBcIkUyIDhGIEIzXCIsIFwiRTIgOEMgOUIgRUYgQjggOEZcIiwgXCI5MyBBMVwiLCBcIjk0IDhCXCIsIFwiOTQgOENcIiwgXCI5MiBBMVwiLCBcIjk0IEE2XCIsIFwiOTUgQUZcIiwgXCI5NyA5MVwiLCBcIjlCIEEyXCIsIFwiOTIgQjhcIiwgXCI5MiBCNVwiLCBcIjkyIEI0XCIsIFwiOTIgQjZcIiwgXCI5MiBCN1wiLCBcIjkyIEIwXCIsIFwiOTIgQjNcIiwgXCI5MiA4RVwiLCBcIkUyIDlBIDk2XCIsIFwiOTQgQTdcIiwgXCI5NCBBOFwiLCBcIkUyIDlBIDkyXCIsIFwiOUIgQTBcIiwgXCJFMiA5QiA4RlwiLCBcIjk0IEE5XCIsIFwiRTIgOUEgOTlcIiwgXCJFMiA5QiA5M1wiLCBcIjk0IEFCXCIsIFwiOTIgQTNcIiwgXCI5NCBBQVwiLCBcIjk3IEExXCIsIFwiRTIgOUEgOTRcIiwgXCI5QiBBMVwiLCBcIjlBIEFDXCIsIFwiRTIgOTggQTAgRUYgQjggOEZcIiwgXCJFMiA5QSBCMFwiLCBcIkUyIDlBIEIxXCIsIFwiOEYgQkFcIiwgXCI5NCBBRVwiLCBcIjkzIEJGXCIsIFwiOTIgODhcIiwgXCJFMiA5QSA5N1wiLCBcIjk0IEFEXCIsIFwiOTQgQUNcIiwgXCI5NSBCM1wiLCBcIjkyIDhBXCIsIFwiOTIgODlcIiwgXCI4QyBBMVwiLCBcIjhGIEI3XCIsIFwiOTQgOTZcIiwgXCI5QSBCRFwiLCBcIjlBIEJGXCIsIFwiOUIgODFcIiwgXCI5NCA5MVwiLCBcIjk3IDlEXCIsIFwiOUIgOEJcIiwgXCI5QiA4Q1wiLCBcIjlCIDhGXCIsIFwiOUEgQUFcIiwgXCI5QiA4RVwiLCBcIjk2IEJDXCIsIFwiOTcgQkFcIiwgXCJFMiA5QiBCMVwiLCBcIjk3IEJGXCIsIFwiOUIgOERcIiwgXCI4RSA4OFwiLCBcIjhFIDhGXCIsIFwiOEUgODBcIiwgXCI4RSA4MVwiLCBcIjhFIDhBXCIsIFwiOEUgODlcIiwgXCI4RSA4RVwiLCBcIjhFIDkwXCIsIFwiOEUgOENcIiwgXCI4RiBBRVwiLCBcIkUyIDlDIDg5IEVGIEI4IDhGXCIsIFwiOTMgQTlcIiwgXCI5MyBBOFwiLCBcIjkzIEE3XCIsIFwiOTIgOENcIiwgXCI5MyBBRVwiLCBcIjkzIEFBXCIsIFwiOTMgQUJcIiwgXCI5MyBBQ1wiLCBcIjkzIEFEXCIsIFwiOTMgQTZcIiwgXCI5MyBBRlwiLCBcIjkzIEE1XCIsIFwiOTMgQTRcIiwgXCI5MyA5Q1wiLCBcIjkzIDgzXCIsIFwiOTMgOTFcIiwgXCI5MyA4QVwiLCBcIjkzIDg4XCIsIFwiOTMgODlcIiwgXCI5MyA4NFwiLCBcIjkzIDg1XCIsIFwiOTMgODZcIiwgXCI5NyA5M1wiLCBcIjkzIDg3XCIsIFwiOTcgODNcIiwgXCI5NyBCM1wiLCBcIjk3IDg0XCIsIFwiOTMgOEJcIiwgXCI5NyA5MlwiLCBcIjkzIDgxXCIsIFwiOTMgODJcIiwgXCI5NyA4MlwiLCBcIjk3IDlFXCIsIFwiOTMgQjBcIiwgXCI5MyA5M1wiLCBcIjkzIDk1XCIsIFwiOTMgOTdcIiwgXCI5MyA5OFwiLCBcIjkzIDk5XCIsIFwiOTMgOTRcIiwgXCI5MyA5MlwiLCBcIjkzIDlBXCIsIFwiOTMgOTZcIiwgXCI5NCA5N1wiLCBcIjkzIDhFXCIsIFwiOTYgODdcIiwgXCJFMiA5QyA4MiBFRiBCOCA4RlwiLCBcIjkzIDkwXCIsIFwiOTMgOEZcIiwgXCI5MyA4Q1wiLCBcIjkzIDhEXCIsIFwiOUEgQTlcIiwgXCI4RiBCM1wiLCBcIjhGIEI0XCIsIFwiOTQgOTBcIiwgXCI5NCA5MlwiLCBcIjk0IDkzXCIsIFwiOTQgOEZcIiwgXCI5NiA4QVwiLCBcIjk2IDhCXCIsIFwiRTIgOUMgOTIgRUYgQjggOEZcIiwgXCI5MyA5RFwiLCBcIkUyIDlDIDhGIEVGIEI4IDhGXCIsIFwiOTYgOERcIiwgXCI5NiA4Q1wiLCBcIjk0IDhEXCIsIFwiOTQgOEVcIiwgXCI5QiA5MVwiLCBcIjlCIDkxXCIsIFwiRTIgOUQgQTQgRUYgQjggOEZcIiwgXCI5MiA5QlwiLCBcIjkyIDlBXCIsIFwiOTIgOTlcIiwgXCI5MiA5Q1wiLCBcIjkyIDk0XCIsIFwiRTIgOUQgQTMgRUYgQjggOEZcIiwgXCI5MiA5NVwiLCBcIjkyIDlFXCIsIFwiOTIgOTNcIiwgXCI5MiA5N1wiLCBcIjkyIDk2XCIsIFwiOTIgOThcIiwgXCI5MiA5RFwiLCBcIjkyIDlGXCIsIFwiRTIgOTggQUUgRUYgQjggOEZcIiwgXCJFMiA5QyA5RCBFRiBCOCA4RlwiLCBcIkUyIDk4IEFBIEVGIEI4IDhGXCIsIFwiOTUgODlcIiwgXCJFMiA5OCBCOCBFRiBCOCA4RlwiLCBcIkUyIDlDIEExIEVGIEI4IDhGXCIsIFwiOTQgQUZcIiwgXCI5NSA4RVwiLCBcIkUyIDk4IEFGIEVGIEI4IDhGXCIsIFwiRTIgOTggQTYgRUYgQjggOEZcIiwgXCI5QiA5MFwiLCBcIkUyIDlCIDhFXCIsIFwiRTIgOTkgODggRUYgQjggOEZcIiwgXCJFMiA5OSA4OSBFRiBCOCA4RlwiLCBcIkUyIDk5IDhBIEVGIEI4IDhGXCIsIFwiRTIgOTkgOEIgRUYgQjggOEZcIiwgXCJFMiA5OSA4QyBFRiBCOCA4RlwiLCBcIkUyIDk5IDhEIEVGIEI4IDhGXCIsIFwiRTIgOTkgOEUgRUYgQjggOEZcIiwgXCJFMiA5OSA4RiBFRiBCOCA4RlwiLCBcIkUyIDk5IDkwIEVGIEI4IDhGXCIsIFwiRTIgOTkgOTEgRUYgQjggOEZcIiwgXCJFMiA5OSA5MiBFRiBCOCA4RlwiLCBcIkUyIDk5IDkzIEVGIEI4IDhGXCIsIFwiODYgOTRcIiwgXCJFMiA5QSA5QlwiLCBcIjg4IEIzXCIsIFwiODggQjlcIiwgXCJFMiA5OCBBMiBFRiBCOCA4RlwiLCBcIkUyIDk4IEEzIEVGIEI4IDhGXCIsIFwiOTMgQjRcIiwgXCI5MyBCM1wiLCBcIjg4IEI2XCIsIFwiODggOUEgRUYgQjggOEZcIiwgXCI4OCBCOFwiLCBcIjg4IEJBXCIsIFwiODggQjcgRUYgQjggOEZcIiwgXCJFMiA5QyBCNCBFRiBCOCA4RlwiLCBcIjg2IDlBXCIsIFwiODkgOTFcIiwgXCI5MiBBRVwiLCBcIjg5IDkwXCIsIFwiRTMgOEEgOTkgRUYgQjggOEZcIiwgXCJFMyA4QSA5NyBFRiBCOCA4RlwiLCBcIjg4IEI0XCIsIFwiODggQjVcIiwgXCI4OCBCMlwiLCBcIjg1IEIwIEVGIEI4IDhGXCIsIFwiODUgQjEgRUYgQjggOEZcIiwgXCI4NiA4RVwiLCBcIjg2IDkxXCIsIFwiODUgQkUgRUYgQjggOEZcIiwgXCI4NiA5OFwiLCBcIkUyIDlCIDk0IEVGIEI4IDhGXCIsIFwiOTMgOUJcIiwgXCI5QSBBQlwiLCBcIkUyIDlEIDhDXCIsIFwiRTIgQUQgOTUgRUYgQjggOEZcIiwgXCI5MiBBMlwiLCBcIkUyIDk5IEE4IEVGIEI4IDhGXCIsIFwiOUEgQjdcIiwgXCI5QSBBRlwiLCBcIjlBIEIzXCIsIFwiOUEgQjFcIiwgXCI5NCA5RVwiLCBcIjkzIEI1XCIsIFwiRTIgOUQgOTcgRUYgQjggOEZcIiwgXCJFMiA5RCA5NVwiLCBcIkUyIDlEIDkzXCIsIFwiRTIgOUQgOTRcIiwgXCJFMiA4MCBCQyBFRiBCOCA4RlwiLCBcIkUyIDgxIDg5IEVGIEI4IDhGXCIsIFwiOTIgQUZcIiwgXCI5NCA4NVwiLCBcIjk0IDg2XCIsIFwiOTQgQjFcIiwgXCJFMiA5QSA5Q1wiLCBcIkUzIDgwIEJEIEVGIEI4IDhGXCIsIFwiRTIgOUEgQTAgRUYgQjggOEZcIiwgXCI5QSBCOFwiLCBcIjk0IEIwXCIsIFwiRTIgOTkgQkIgRUYgQjggOEZcIiwgXCI4OCBBRiBFRiBCOCA4RlwiLCBcIjkyIEI5XCIsIFwiRTIgOUQgODcgRUYgQjggOEZcIiwgXCJFMiA5QyBCMyBFRiBCOCA4RlwiLCBcIkUyIDlEIDhFXCIsIFwiRTIgOUMgODVcIiwgXCI5MiBBMFwiLCBcIjhDIDgwXCIsIFwiRTIgOUUgQkZcIiwgXCI4QyA5MFwiLCBcIkUyIDkzIDgyIEVGIEI4IDhGXCIsIFwiOEYgQTdcIiwgXCI4OCA4MiBFRiBCOCA4RlwiLCBcIjlCIDgyXCIsIFwiOUIgODNcIiwgXCI5QiA4NFwiLCBcIjlCIDg1XCIsIFwiRTIgOTkgQkYgRUYgQjggOEZcIiwgXCI5QSBBRFwiLCBcIjlBIEJFXCIsIFwiODUgQkYgRUYgQjggOEZcIiwgXCI5QSBCMFwiLCBcIjlBIEI5XCIsIFwiOUEgQkFcIiwgXCI5QSBCQ1wiLCBcIjlBIEJCXCIsIFwiOUEgQUVcIiwgXCI4RSBBNlwiLCBcIjkzIEI2XCIsIFwiODggODFcIiwgXCI4NiA5NlwiLCBcIjg2IDk3XCIsIFwiODYgOTlcIiwgXCI4NiA5MlwiLCBcIjg2IDk1XCIsIFwiODYgOTNcIiwgXCIzMCBFRiBCOCA4RiBFMiA4MyBBM1wiLCBcIjMxIEVGIEI4IDhGIEUyIDgzIEEzXCIsIFwiMzIgRUYgQjggOEYgRTIgODMgQTNcIiwgXCIzMyBFRiBCOCA4RiBFMiA4MyBBM1wiLCBcIjM0IEVGIEI4IDhGIEUyIDgzIEEzXCIsIFwiMzUgRUYgQjggOEYgRTIgODMgQTNcIiwgXCIzNiBFRiBCOCA4RiBFMiA4MyBBM1wiLCBcIjM3IEVGIEI4IDhGIEUyIDgzIEEzXCIsIFwiMzggRUYgQjggOEYgRTIgODMgQTNcIiwgXCIzOSBFRiBCOCA4RiBFMiA4MyBBM1wiLCBcIjk0IDlGXCIsIFwiOTQgQTJcIiwgXCJFMiA5NiBCNiBFRiBCOCA4RlwiLCBcIkUyIDhGIEI4XCIsIFwiRTIgOEYgQUZcIiwgXCJFMiA4RiBCOVwiLCBcIkUyIDhGIEJBXCIsIFwiRTIgOEYgQURcIiwgXCJFMiA4RiBBRVwiLCBcIkUyIDhGIEE5XCIsIFwiRTIgOEYgQUFcIiwgXCI5NCA4MFwiLCBcIjk0IDgxXCIsIFwiOTQgODJcIiwgXCJFMiA5NyA4MCBFRiBCOCA4RlwiLCBcIjk0IEJDXCIsIFwiOTQgQkRcIiwgXCJFMiA4RiBBQlwiLCBcIkUyIDhGIEFDXCIsIFwiRTIgOUUgQTEgRUYgQjggOEZcIiwgXCJFMiBBQyA4NSBFRiBCOCA4RlwiLCBcIkUyIEFDIDg2IEVGIEI4IDhGXCIsIFwiRTIgQUMgODcgRUYgQjggOEZcIiwgXCJFMiA4NiA5NyBFRiBCOCA4RlwiLCBcIkUyIDg2IDk4IEVGIEI4IDhGXCIsIFwiRTIgODYgOTkgRUYgQjggOEZcIiwgXCJFMiA4NiA5NiBFRiBCOCA4RlwiLCBcIkUyIDg2IDk1IEVGIEI4IDhGXCIsIFwiRTIgODYgOTQgRUYgQjggOEZcIiwgXCI5NCA4NFwiLCBcIkUyIDg2IEFBIEVGIEI4IDhGXCIsIFwiRTIgODYgQTkgRUYgQjggOEZcIiwgXCJFMiBBNCBCNCBFRiBCOCA4RlwiLCBcIkUyIEE0IEI1IEVGIEI4IDhGXCIsIFwiMjMgRUYgQjggOEYgRTIgODMgQTNcIiwgXCIyQSBFRiBCOCA4RiBFMiA4MyBBM1wiLCBcIkUyIDg0IEI5IEVGIEI4IDhGXCIsIFwiOTQgQTRcIiwgXCI5NCBBMVwiLCBcIjk0IEEwXCIsIFwiOTQgQTNcIiwgXCI4RSBCNVwiLCBcIjhFIEI2XCIsIFwiRTMgODAgQjAgRUYgQjggOEZcIiwgXCJFMiA5RSBCMFwiLCBcIkUyIDlDIDk0IEVGIEI4IDhGXCIsIFwiOTQgODNcIiwgXCJFMiA5RSA5NVwiLCBcIkUyIDlFIDk2XCIsIFwiRTIgOUUgOTdcIiwgXCJFMiA5QyA5NiBFRiBCOCA4RlwiLCBcIjkyIEIyXCIsIFwiOTIgQjFcIiwgXCJDMiBBOSBFRiBCOCA4RlwiLCBcIkMyIEFFIEVGIEI4IDhGXCIsIFwiRTIgODQgQTIgRUYgQjggOEZcIiwgXCI5NCA5QVwiLCBcIjk0IDk5XCIsIFwiOTQgOUJcIiwgXCI5NCA5RFwiLCBcIjk0IDlDXCIsIFwiRTIgOTggOTEgRUYgQjggOEZcIiwgXCI5NCA5OFwiLCBcIkUyIDlBIEFBIEVGIEI4IDhGXCIsIFwiRTIgOUEgQUIgRUYgQjggOEZcIiwgXCI5NCBCNFwiLCBcIjk0IEI1XCIsIFwiOTQgQjhcIiwgXCI5NCBCOVwiLCBcIjk0IEI2XCIsIFwiOTQgQjdcIiwgXCI5NCBCQVwiLCBcIkUyIDk2IEFBIEVGIEI4IDhGXCIsIFwiRTIgOTYgQUIgRUYgQjggOEZcIiwgXCJFMiBBQyA5QiBFRiBCOCA4RlwiLCBcIkUyIEFDIDlDIEVGIEI4IDhGXCIsIFwiOTQgQkJcIiwgXCJFMiA5NyBCQyBFRiBCOCA4RlwiLCBcIkUyIDk3IEJCIEVGIEI4IDhGXCIsIFwiRTIgOTcgQkUgRUYgQjggOEZcIiwgXCJFMiA5NyBCRCBFRiBCOCA4RlwiLCBcIjk0IEIyXCIsIFwiOTQgQjNcIiwgXCI5NCA4OFwiLCBcIjk0IDg5XCIsIFwiOTQgOEFcIiwgXCI5NCA4N1wiLCBcIjkzIEEzXCIsIFwiOTMgQTJcIiwgXCI5NCA5NFwiLCBcIjk0IDk1XCIsIFwiODMgOEZcIiwgXCI4MCA4NCBFRiBCOCA4RlwiLCBcIkUyIDk5IEEwIEVGIEI4IDhGXCIsIFwiRTIgOTkgQTMgRUYgQjggOEZcIiwgXCJFMiA5OSBBNSBFRiBCOCA4RlwiLCBcIkUyIDk5IEE2IEVGIEI4IDhGXCIsIFwiOEUgQjRcIiwgXCI5MSA4MSBFMiA4MCA4RCBGMCA5RiA5NyBBOFwiLCBcIjkyIEFEXCIsIFwiOTcgQUZcIiwgXCI5MiBBQ1wiLCBcIjk1IDkwXCIsIFwiOTUgOTFcIiwgXCI5NSA5MlwiLCBcIjk1IDkzXCIsIFwiOTUgOTRcIiwgXCI5NSA5NVwiLCBcIjk1IDk2XCIsIFwiOTUgOTdcIiwgXCI5NSA5OFwiLCBcIjk1IDk5XCIsIFwiOTUgOUFcIiwgXCI5NSA5QlwiLCBcIjk1IDlDXCIsIFwiOTUgOURcIiwgXCI5NSA5RVwiLCBcIjk1IDlGXCIsIFwiOTUgQTBcIiwgXCI5NSBBMVwiLCBcIjk1IEEyXCIsIFwiOTUgQTNcIiwgXCI5NSBBNFwiLCBcIjk1IEE1XCIsIFwiOTUgQTZcIiwgXCI5NSBBN1wiLCBcIjlCIDkxXCIsIFwiODcgQTYgRjAgOUYgODcgQUJcIiwgXCI4NyBBNiBGMCA5RiA4NyBCRFwiLCBcIjg3IEE2IEYwIDlGIDg3IEIxXCIsIFwiODcgQTkgRjAgOUYgODcgQkZcIiwgXCI4NyBBNiBGMCA5RiA4NyBCOFwiLCBcIjg3IEE2IEYwIDlGIDg3IEE5XCIsIFwiODcgQTYgRjAgOUYgODcgQjRcIiwgXCI4NyBBNiBGMCA5RiA4NyBBRVwiLCBcIjg3IEE2IEYwIDlGIDg3IEI2XCIsIFwiODcgQTYgRjAgOUYgODcgQUNcIiwgXCI4NyBBNiBGMCA5RiA4NyBCN1wiLCBcIjg3IEE2IEYwIDlGIDg3IEIyXCIsIFwiODcgQTYgRjAgOUYgODcgQkNcIiwgXCI4NyBBNiBGMCA5RiA4NyBCQVwiLCBcIjg3IEE2IEYwIDlGIDg3IEI5XCIsIFwiODcgQTYgRjAgOUYgODcgQkZcIiwgXCI4NyBBNyBGMCA5RiA4NyBCOFwiLCBcIjg3IEE3IEYwIDlGIDg3IEFEXCIsIFwiODcgQTcgRjAgOUYgODcgQTlcIiwgXCI4NyBBNyBGMCA5RiA4NyBBN1wiLCBcIjg3IEE3IEYwIDlGIDg3IEJFXCIsIFwiODcgQTcgRjAgOUYgODcgQUFcIiwgXCI4NyBBNyBGMCA5RiA4NyBCRlwiLCBcIjg3IEE3IEYwIDlGIDg3IEFGXCIsIFwiODcgQTcgRjAgOUYgODcgQjJcIiwgXCI4NyBBNyBGMCA5RiA4NyBCOVwiLCBcIjg3IEE3IEYwIDlGIDg3IEI0XCIsIFwiODcgQTcgRjAgOUYgODcgQjZcIiwgXCI4NyBBNyBGMCA5RiA4NyBBNlwiLCBcIjg3IEE3IEYwIDlGIDg3IEJDXCIsIFwiODcgQTcgRjAgOUYgODcgQjdcIiwgXCI4NyBBRSBGMCA5RiA4NyBCNFwiLCBcIjg3IEJCIEYwIDlGIDg3IEFDXCIsIFwiODcgQTcgRjAgOUYgODcgQjNcIiwgXCI4NyBBNyBGMCA5RiA4NyBBQ1wiLCBcIjg3IEE3IEYwIDlGIDg3IEFCXCIsIFwiODcgQTcgRjAgOUYgODcgQUVcIiwgXCI4NyBBOCBGMCA5RiA4NyBCQlwiLCBcIjg3IEIwIEYwIDlGIDg3IEFEXCIsIFwiODcgQTggRjAgOUYgODcgQjJcIiwgXCI4NyBBOCBGMCA5RiA4NyBBNlwiLCBcIjg3IEFFIEYwIDlGIDg3IEE4XCIsIFwiODcgQjAgRjAgOUYgODcgQkVcIiwgXCI4NyBBOCBGMCA5RiA4NyBBQlwiLCBcIjg3IEI5IEYwIDlGIDg3IEE5XCIsIFwiODcgQTggRjAgOUYgODcgQjFcIiwgXCI4NyBBOCBGMCA5RiA4NyBCM1wiLCBcIjg3IEE4IEYwIDlGIDg3IEJEXCIsIFwiODcgQTggRjAgOUYgODcgQThcIiwgXCI4NyBBOCBGMCA5RiA4NyBCNFwiLCBcIjg3IEIwIEYwIDlGIDg3IEIyXCIsIFwiODcgQTggRjAgOUYgODcgQUNcIiwgXCI4NyBBOCBGMCA5RiA4NyBBOVwiLCBcIjg3IEE4IEYwIDlGIDg3IEIwXCIsIFwiODcgQTggRjAgOUYgODcgQjdcIiwgXCI4NyBBRCBGMCA5RiA4NyBCN1wiLCBcIjg3IEE4IEYwIDlGIDg3IEJBXCIsIFwiODcgQTggRjAgOUYgODcgQkNcIiwgXCI4NyBBOCBGMCA5RiA4NyBCRVwiLCBcIjg3IEE4IEYwIDlGIDg3IEJGXCIsIFwiODcgQTkgRjAgOUYgODcgQjBcIiwgXCI4NyBBOSBGMCA5RiA4NyBBRlwiLCBcIjg3IEE5IEYwIDlGIDg3IEIyXCIsIFwiODcgQTkgRjAgOUYgODcgQjRcIiwgXCI4NyBBQSBGMCA5RiA4NyBBOFwiLCBcIjg3IEFBIEYwIDlGIDg3IEFDXCIsIFwiODcgQjggRjAgOUYgODcgQkJcIiwgXCI4NyBBQyBGMCA5RiA4NyBCNlwiLCBcIjg3IEFBIEYwIDlGIDg3IEI3XCIsIFwiODcgQUEgRjAgOUYgODcgQUFcIiwgXCI4NyBBQSBGMCA5RiA4NyBCOVwiLCBcIjg3IEFBIEYwIDlGIDg3IEJBXCIsIFwiODcgQUIgRjAgOUYgODcgQjBcIiwgXCI4NyBBQiBGMCA5RiA4NyBCNFwiLCBcIjg3IEFCIEYwIDlGIDg3IEFGXCIsIFwiODcgQUIgRjAgOUYgODcgQUVcIiwgXCI4NyBBQiBGMCA5RiA4NyBCN1wiLCBcIjg3IEFDIEYwIDlGIDg3IEFCXCIsIFwiODcgQjUgRjAgOUYgODcgQUJcIiwgXCI4NyBCOSBGMCA5RiA4NyBBQlwiLCBcIjg3IEFDIEYwIDlGIDg3IEE2XCIsIFwiODcgQUMgRjAgOUYgODcgQjJcIiwgXCI4NyBBQyBGMCA5RiA4NyBBQVwiLCBcIjg3IEE5IEYwIDlGIDg3IEFBXCIsIFwiODcgQUMgRjAgOUYgODcgQURcIiwgXCI4NyBBQyBGMCA5RiA4NyBBRVwiLCBcIjg3IEFDIEYwIDlGIDg3IEI3XCIsIFwiODcgQUMgRjAgOUYgODcgQjFcIiwgXCI4NyBBQyBGMCA5RiA4NyBBOVwiLCBcIjg3IEFDIEYwIDlGIDg3IEI1XCIsIFwiODcgQUMgRjAgOUYgODcgQkFcIiwgXCI4NyBBQyBGMCA5RiA4NyBCOVwiLCBcIjg3IEFDIEYwIDlGIDg3IEFDXCIsIFwiODcgQUMgRjAgOUYgODcgQjNcIiwgXCI4NyBBQyBGMCA5RiA4NyBCQ1wiLCBcIjg3IEFDIEYwIDlGIDg3IEJFXCIsIFwiODcgQUQgRjAgOUYgODcgQjlcIiwgXCI4NyBBRCBGMCA5RiA4NyBCM1wiLCBcIjg3IEFEIEYwIDlGIDg3IEIwXCIsIFwiODcgQUQgRjAgOUYgODcgQkFcIiwgXCI4NyBBRSBGMCA5RiA4NyBCOFwiLCBcIjg3IEFFIEYwIDlGIDg3IEIzXCIsIFwiODcgQUUgRjAgOUYgODcgQTlcIiwgXCI4NyBBRSBGMCA5RiA4NyBCN1wiLCBcIjg3IEFFIEYwIDlGIDg3IEI2XCIsIFwiODcgQUUgRjAgOUYgODcgQUFcIiwgXCI4NyBBRSBGMCA5RiA4NyBCMlwiLCBcIjg3IEFFIEYwIDlGIDg3IEIxXCIsIFwiODcgQUUgRjAgOUYgODcgQjlcIiwgXCI4NyBBOCBGMCA5RiA4NyBBRVwiLCBcIjg3IEFGIEYwIDlGIDg3IEIyXCIsIFwiODcgQUYgRjAgOUYgODcgQjVcIiwgXCI4NyBBRiBGMCA5RiA4NyBBQVwiLCBcIjg3IEFGIEYwIDlGIDg3IEI0XCIsIFwiODcgQjAgRjAgOUYgODcgQkZcIiwgXCI4NyBCMCBGMCA5RiA4NyBBQVwiLCBcIjg3IEIwIEYwIDlGIDg3IEFFXCIsIFwiODcgQkQgRjAgOUYgODcgQjBcIiwgXCI4NyBCMCBGMCA5RiA4NyBCQ1wiLCBcIjg3IEIwIEYwIDlGIDg3IEFDXCIsIFwiODcgQjEgRjAgOUYgODcgQTZcIiwgXCI4NyBCMSBGMCA5RiA4NyBCQlwiLCBcIjg3IEIxIEYwIDlGIDg3IEE3XCIsIFwiODcgQjEgRjAgOUYgODcgQjhcIiwgXCI4NyBCMSBGMCA5RiA4NyBCN1wiLCBcIjg3IEIxIEYwIDlGIDg3IEJFXCIsIFwiODcgQjEgRjAgOUYgODcgQUVcIiwgXCI4NyBCMSBGMCA5RiA4NyBCOVwiLCBcIjg3IEIxIEYwIDlGIDg3IEJBXCIsIFwiODcgQjIgRjAgOUYgODcgQjRcIiwgXCI4NyBCMiBGMCA5RiA4NyBCMFwiLCBcIjg3IEIyIEYwIDlGIDg3IEFDXCIsIFwiODcgQjIgRjAgOUYgODcgQkNcIiwgXCI4NyBCMiBGMCA5RiA4NyBCRVwiLCBcIjg3IEIyIEYwIDlGIDg3IEJCXCIsIFwiODcgQjIgRjAgOUYgODcgQjFcIiwgXCI4NyBCMiBGMCA5RiA4NyBCOVwiLCBcIjg3IEIyIEYwIDlGIDg3IEFEXCIsIFwiODcgQjIgRjAgOUYgODcgQjZcIiwgXCI4NyBCMiBGMCA5RiA4NyBCN1wiLCBcIjg3IEIyIEYwIDlGIDg3IEJBXCIsIFwiODcgQkUgRjAgOUYgODcgQjlcIiwgXCI4NyBCMiBGMCA5RiA4NyBCRFwiLCBcIjg3IEFCIEYwIDlGIDg3IEIyXCIsIFwiODcgQjIgRjAgOUYgODcgQTlcIiwgXCI4NyBCMiBGMCA5RiA4NyBBOFwiLCBcIjg3IEIyIEYwIDlGIDg3IEIzXCIsIFwiODcgQjIgRjAgOUYgODcgQUFcIiwgXCI4NyBCMiBGMCA5RiA4NyBCOFwiLCBcIjg3IEIyIEYwIDlGIDg3IEE2XCIsIFwiODcgQjIgRjAgOUYgODcgQkZcIiwgXCI4NyBCMiBGMCA5RiA4NyBCMlwiLCBcIjg3IEIzIEYwIDlGIDg3IEE2XCIsIFwiODcgQjMgRjAgOUYgODcgQjdcIiwgXCI4NyBCMyBGMCA5RiA4NyBCNVwiLCBcIjg3IEIzIEYwIDlGIDg3IEIxXCIsIFwiODcgQjMgRjAgOUYgODcgQThcIiwgXCI4NyBCMyBGMCA5RiA4NyBCRlwiLCBcIjg3IEIzIEYwIDlGIDg3IEFFXCIsIFwiODcgQjMgRjAgOUYgODcgQUFcIiwgXCI4NyBCMyBGMCA5RiA4NyBBQ1wiLCBcIjg3IEIzIEYwIDlGIDg3IEJBXCIsIFwiODcgQjMgRjAgOUYgODcgQUJcIiwgXCI4NyBCMiBGMCA5RiA4NyBCNVwiLCBcIjg3IEIwIEYwIDlGIDg3IEI1XCIsIFwiODcgQjMgRjAgOUYgODcgQjRcIiwgXCI4NyBCNCBGMCA5RiA4NyBCMlwiLCBcIjg3IEI1IEYwIDlGIDg3IEIwXCIsIFwiODcgQjUgRjAgOUYgODcgQkNcIiwgXCI4NyBCNSBGMCA5RiA4NyBCOFwiLCBcIjg3IEI1IEYwIDlGIDg3IEE2XCIsIFwiODcgQjUgRjAgOUYgODcgQUNcIiwgXCI4NyBCNSBGMCA5RiA4NyBCRVwiLCBcIjg3IEI1IEYwIDlGIDg3IEFBXCIsIFwiODcgQjUgRjAgOUYgODcgQURcIiwgXCI4NyBCNSBGMCA5RiA4NyBCM1wiLCBcIjg3IEI1IEYwIDlGIDg3IEIxXCIsIFwiODcgQjUgRjAgOUYgODcgQjlcIiwgXCI4NyBCNSBGMCA5RiA4NyBCN1wiLCBcIjg3IEI2IEYwIDlGIDg3IEE2XCIsIFwiODcgQjcgRjAgOUYgODcgQUFcIiwgXCI4NyBCNyBGMCA5RiA4NyBCNFwiLCBcIjg3IEI3IEYwIDlGIDg3IEJBXCIsIFwiODcgQjcgRjAgOUYgODcgQkNcIiwgXCI4NyBBNyBGMCA5RiA4NyBCMVwiLCBcIjg3IEI4IEYwIDlGIDg3IEFEXCIsIFwiODcgQjAgRjAgOUYgODcgQjNcIiwgXCI4NyBCMSBGMCA5RiA4NyBBOFwiLCBcIjg3IEI1IEYwIDlGIDg3IEIyXCIsIFwiODcgQkIgRjAgOUYgODcgQThcIiwgXCI4NyBCQyBGMCA5RiA4NyBCOFwiLCBcIjg3IEI4IEYwIDlGIDg3IEIyXCIsIFwiODcgQjggRjAgOUYgODcgQjlcIiwgXCI4NyBCOCBGMCA5RiA4NyBBNlwiLCBcIjg3IEI4IEYwIDlGIDg3IEIzXCIsIFwiODcgQjcgRjAgOUYgODcgQjhcIiwgXCI4NyBCOCBGMCA5RiA4NyBBOFwiLCBcIjg3IEI4IEYwIDlGIDg3IEIxXCIsIFwiODcgQjggRjAgOUYgODcgQUNcIiwgXCI4NyBCOCBGMCA5RiA4NyBCRFwiLCBcIjg3IEI4IEYwIDlGIDg3IEIwXCIsIFwiODcgQjggRjAgOUYgODcgQUVcIiwgXCI4NyBCOCBGMCA5RiA4NyBBN1wiLCBcIjg3IEI4IEYwIDlGIDg3IEI0XCIsIFwiODcgQkYgRjAgOUYgODcgQTZcIiwgXCI4NyBBQyBGMCA5RiA4NyBCOFwiLCBcIjg3IEIwIEYwIDlGIDg3IEI3XCIsIFwiODcgQjggRjAgOUYgODcgQjhcIiwgXCI4NyBBQSBGMCA5RiA4NyBCOFwiLCBcIjg3IEIxIEYwIDlGIDg3IEIwXCIsIFwiODcgQjggRjAgOUYgODcgQTlcIiwgXCI4NyBCOCBGMCA5RiA4NyBCN1wiLCBcIjg3IEI4IEYwIDlGIDg3IEJGXCIsIFwiODcgQjggRjAgOUYgODcgQUFcIiwgXCI4NyBBOCBGMCA5RiA4NyBBRFwiLCBcIjg3IEI4IEYwIDlGIDg3IEJFXCIsIFwiODcgQjkgRjAgOUYgODcgQkNcIiwgXCI4NyBCOSBGMCA5RiA4NyBBRlwiLCBcIjg3IEI5IEYwIDlGIDg3IEJGXCIsIFwiODcgQjkgRjAgOUYgODcgQURcIiwgXCI4NyBCOSBGMCA5RiA4NyBCMVwiLCBcIjg3IEI5IEYwIDlGIDg3IEFDXCIsIFwiODcgQjkgRjAgOUYgODcgQjBcIiwgXCI4NyBCOSBGMCA5RiA4NyBCNFwiLCBcIjg3IEI5IEYwIDlGIDg3IEI5XCIsIFwiODcgQjkgRjAgOUYgODcgQjNcIiwgXCI4NyBCOSBGMCA5RiA4NyBCN1wiLCBcIjg3IEI5IEYwIDlGIDg3IEIyXCIsIFwiODcgQjkgRjAgOUYgODcgQThcIiwgXCI4NyBCOSBGMCA5RiA4NyBCQlwiLCBcIjg3IEJBIEYwIDlGIDg3IEFDXCIsIFwiODcgQkEgRjAgOUYgODcgQTZcIiwgXCI4NyBBNiBGMCA5RiA4NyBBQVwiLCBcIjg3IEFDIEYwIDlGIDg3IEE3XCIsIFwiODcgQkEgRjAgOUYgODcgQjhcIiwgXCI4NyBCQiBGMCA5RiA4NyBBRVwiLCBcIjg3IEJBIEYwIDlGIDg3IEJFXCIsIFwiODcgQkEgRjAgOUYgODcgQkZcIiwgXCI4NyBCQiBGMCA5RiA4NyBCQVwiLCBcIjg3IEJCIEYwIDlGIDg3IEE2XCIsIFwiODcgQkIgRjAgOUYgODcgQUFcIiwgXCI4NyBCQiBGMCA5RiA4NyBCM1wiLCBcIjg3IEJDIEYwIDlGIDg3IEFCXCIsIFwiODcgQUEgRjAgOUYgODcgQURcIiwgXCI4NyBCRSBGMCA5RiA4NyBBQVwiLCBcIjg3IEJGIEYwIDlGIDg3IEIyXCIsIFwiODcgQkYgRjAgOUYgODcgQkNcIl1cblx0ZW1vamlzQXJyYXkgPSBbXVxuXHRmcmVxRW1vamlzQXJyYXkgPSBbXVxuXHRmb3IgZW0gaW4gcmF3RW1vamlzXG5cdFx0ZW1vamlzQXJyYXkucHVzaCBlbW9qaUZvcm1hdHRlcihlbSlcblxuXHRcblx0ZnJlcXVlbnRseVVzZWRFbW9qaXNSYXcgPSBbXCI5MiA4NVwiLCBcIjkxIDg0XCIsIFwiOTEgODVcIiwgXCI5MSA4MlwiLCBcIjkxIDgzXCIsXCI5MiA4NVwiLCBcIjkxIDg0XCIsIFwiOTEgODVcIiwgXCI5MSA4MlwiLCBcIjkxIDgzXCIsXCI5MiA4NVwiLCBcIjkxIDg0XCIsIFwiOTEgODVcIiwgXCI5MSA4MlwiLCBcIjkxIDgzXCIsXCI5MiA4NVwiLCBcIjkxIDg0XCIsIFwiOTEgODVcIiwgXCI5MSA4MlwiLCBcIjkxIDgzXCIsXCI5MiA4NVwiLCBcIjkxIDg0XCIsIFwiOTEgODVcIiwgXCI5MSA4MlwiLCBcIjkxIDgzXCIsXVxuXHRmb3IgZW0gaW4gZnJlcXVlbnRseVVzZWRFbW9qaXNSYXdcblx0XHRmcmVxRW1vamlzQXJyYXkucHVzaCBlbW9qaUZvcm1hdHRlcihlbSlcblxuXHRlbW9qaUtleS5vbiBFdmVudHMuVG91Y2hTdGFydCwgLT5cblx0XHRlbW9qaUtleS5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCJcblx0XHRlbW9qaUJHID0gbmV3IExheWVyIGJhY2tncm91bmRDb2xvcjpcIiNFQ0VFRjFcIlxuXHRcdGJveCA9IGV4cG9ydHMucHgoMzApXG5cdFx0ZW1vamlCRy5jb25zdHJhaW50cyA9ICh0cmFpbGluZzoxLCBsZWFkaW5nOjEsIGJvdHRvbToxLCBoZWlnaHQ6MjU4KVxuXHRcdGV4cG9ydHMubGF5b3V0KClcblx0XHRlbW9qaUdhbGxleSA9IG5ldyBTY3JvbGxDb21wb25lbnQgc3VwZXJMYXllcjplbW9qaUJHLCB3aWR0aDplbW9qaUJHLndpZHRoLCBoZWlnaHQ6ZW1vamlCRy5oZWlnaHQgLSBleHBvcnRzLnB4KDQwKVxuXHRcdGVtb2ppR2FsbGV5LnNwZWVkWSA9IDBcblx0XHRlbW9qaVNwYWNlciA9IGV4cG9ydHMucHgoNilcblx0XHRlbW9qaVBpY2tlciA9IG5ldyBMYXllciBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiLCBuYW1lOlwiZW1vamkgcGlja2VyXCIsIHN1cGVyTGF5ZXI6ZW1vamlCR1xuXHRcdGVtb2ppUGlja2VyLmNvbnN0cmFpbnRzID0gXG5cdFx0XHRsZWFkaW5nOjFcblx0XHRcdHRyYWlsaW5nOjFcblx0XHRcdGJvdHRvbToxXG5cdFx0XHRoZWlnaHQ6NDJcblx0XHRBQkMgPSBuZXcgTGF5ZXIgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIiwgc3VwZXJMYXllcjplbW9qaVBpY2tlclxuXHRcdEFCQy5odG1sID0gXCJBQkNcIlxuXHRcdEFCQy5zdHlsZSA9IHtcblx0XHRcdFwiZm9udC1zaXplXCIgOiBleHBvcnRzLnB4KDE1KSArIFwicHhcIlxuXHRcdFx0XCJmb250LXdlaWdodFwiIDogNTAwXG5cdFx0XHRcImZvbnQtZmFtaWx5XCIgOiAnLWFwcGxlLXN5c3RlbSwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZidcblx0XHRcdFwiY29sb3JcIiA6IFwiIzRGNTU1RFwiXG5cdFx0fVxuXHRcdEFCQy5jb25zdHJhaW50cyA9IFxuXHRcdFx0bGVhZGluZzoxMlxuXHRcdFx0Ym90dG9tOjE0XG5cdFx0XHR3aWR0aDozMFxuXHRcdFx0aGVpZ2h0OjE1XG5cblx0XHRleHBvcnRzLmxheW91dCgpXG5cdFx0cm93ID0gLTFcblx0XHRBQkMub24gRXZlbnRzLkNsaWNrLCAtPlxuXHRcdFx0ZW1vamlCRy5kZXN0cm95KClcblx0XHRmcmVxdWVudCA9IG5ldyBMYXllciBzdXBlckxheWVyOmVtb2ppUGlja2VyLCBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiXG5cdFx0ZnJlcXVlbnQuaHRtbCA9IFwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdFx0XHQ8c3ZnIHdpZHRoPScje2V4cG9ydHMucHgoMTcpfXB4JyBoZWlnaHQ9JyN7ZXhwb3J0cy5weCgxNil9cHgnIHZpZXdCb3g9JzAgMCAxNyAxNicgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyB4bWxuczpza2V0Y2g9J2h0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaC9ucyc+XG5cdFx0XHQgICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjUuMiAoMjUyMzUpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdFx0ICAgIDx0aXRsZT5SZWNlbnQ8L3RpdGxlPlxuXHRcdFx0ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdFx0ICAgIDxkZWZzPjwvZGVmcz5cblx0XHRcdCAgICA8ZyBpZD0naU9TLTktS2V5Ym9hcmRzJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJyBza2V0Y2g6dHlwZT0nTVNQYWdlJz5cblx0XHRcdCAgICAgICAgPGcgaWQ9J2lQaG9uZS02LVBvcnRyYWl0LUxpZ2h0LUNvcHknIHNrZXRjaDp0eXBlPSdNU0FydGJvYXJkR3JvdXAnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC01NS4wMDAwMDAsIC02MzguMDAwMDAwKSc+XG5cdFx0XHQgICAgICAgICAgICA8ZyBpZD0nS2V5Ym9hcmRzJyBza2V0Y2g6dHlwZT0nTVNMYXllckdyb3VwJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgwLjAwMDAwMCwgNDA4LjAwMDAwMCknPlxuXHRcdFx0ICAgICAgICAgICAgICAgIDxnIGlkPSdSZWNlbnQnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDU1LjUwMDAwMCwgMjMwLjAwMDAwMCknIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnPlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGlkPSdCb2R5JyBzdHJva2U9JyM0QTU0NjEnIGN4PSc4JyBjeT0nOCcgcj0nOCc+PC9jaXJjbGU+XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9J003LjUsNy41IEw3LjUsOC41IEw4LjUsOC41IEw4LjUsMiBMNy41LDIgTDcuNSw3LjUgTDQsNy41IEw0LDguNSBMOC41LDguNSBMOC41LDcuNSBMNy41LDcuNSBaJyBpZD0nSGFuZHMnIGZpbGw9JyM0QTU0NjEnPjwvcGF0aD5cblx0XHRcdCAgICAgICAgICAgICAgICA8L2c+XG5cdFx0XHQgICAgICAgICAgICA8L2c+XG5cdFx0XHQgICAgICAgIDwvZz5cblx0XHRcdCAgICA8L2c+XG5cdFx0XHQ8L3N2Zz5cIlxuXHRcdGZyZXF1ZW50LmNvbnN0cmFpbnRzID0gXG5cdFx0XHRsZWFkaW5nIDogW0FCQywgMTVdXG5cdFx0XHRib3R0b206IDE0XG5cdFx0XHR3aWR0aDoxNlxuXHRcdFx0aGVpZ2h0OjIwXG5cdFx0ZXhwb3J0cy5sYXlvdXQoKVxuXHRcdHNtaWxleXMgPSBuZXcgTGF5ZXIgc3VwZXJMYXllcjplbW9qaVBpY2tlciwgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIiwgb3BhY2l0eTouNFxuXHRcdHNtaWxleXMuaHRtbCA9IFwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdFx0XHQ8c3ZnIHdpZHRoPScje2V4cG9ydHMucHgoMTcpfXB4JyBoZWlnaHQ9JyN7ZXhwb3J0cy5weCgxNil9cHgnIHZpZXdCb3g9JzAgMCAxNyAxNicgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyB4bWxuczpza2V0Y2g9J2h0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaC9ucyc+XG5cdFx0XHQgICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjUuMiAoMjUyMzUpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdFx0ICAgIDx0aXRsZT46RDwvdGl0bGU+XG5cdFx0XHQgICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0XHQgICAgPGRlZnM+PC9kZWZzPlxuXHRcdFx0ICAgIDxnIGlkPSdpT1MtOS1LZXlib2FyZHMnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIHNrZXRjaDp0eXBlPSdNU1BhZ2UnPlxuXHRcdFx0ICAgICAgICA8ZyBpZD0naVBob25lLTYtUG9ydHJhaXQtTGlnaHQtQ29weScgc2tldGNoOnR5cGU9J01TQXJ0Ym9hcmRHcm91cCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTg2LjAwMDAwMCwgLTYzOC4wMDAwMDApJz5cblx0XHRcdCAgICAgICAgICAgIDxnIGlkPSdLZXlib2FyZHMnIHNrZXRjaDp0eXBlPSdNU0xheWVyR3JvdXAnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDAuMDAwMDAwLCA0MDguMDAwMDAwKSc+XG5cdFx0XHQgICAgICAgICAgICAgICAgPGcgaWQ9JzpEJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSg4Ny4wMDAwMDAsIDIzMC41MDAwMDApJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJz5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBpZD0nSGVhZCcgc3Ryb2tlPScjNEE1NDYxJyBzdHJva2Utd2lkdGg9JzAuNzg5NDczNjg0JyBjeD0nNy41JyBjeT0nNy41JyByPSc3LjUnPjwvY2lyY2xlPlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSdNNy41LDEzLjUyNjMxNTggQzEwLjI2ODY5MDcsMTMuNTI2MzE1OCAxMi41MTMxNTc5LDEwLjM2ODQyMTIgMTIuNTEzMTU3OSw5LjE4NDIxMDQ1IEMxMi41MTMxNTc5LDcuNjA1MjYzMTcgMTEuNDM4OTA5OCw5LjE4NDIxMDQzIDcuNSw5LjE4NDIxMDUzIEMzLjU2MTA5MDIzLDkuMTg0MjEwNjIgMi40ODY4NDIxMSw3LjYwNTI2MzE3IDIuNDg2ODQyMTEsOS4xODQyMTA0NSBDMi40ODY4NDIxMSwxMC4zNjg0MjEgNC43MzEzMDkzNSwxMy41MjYzMTU4IDcuNSwxMy41MjYzMTU4IFogTTcuNSwxMC45NjA1MjYzIEM4LjkzMjMzMDgzLDExLjE1Nzg5NDcgMTEuNzk2OTkyNSwxMC4zNjg0MjEgMTEuNzk2OTkyNSw5LjQ0NDIzNTUyIEMxMS43OTY5OTI1LDguNzg5NDczNjggMTAuODc2MjA4NCw5LjU3ODk0NzI3IDcuNSw5Ljc3NjMxNTc5IEM0LjEyMzc5MTYyLDkuNTc4OTQ3NDMgMy4yMDMwMDg3Miw4Ljc4OTQ3MzY5IDMuMjAzMDA3NTIsOS40NDQyMzU1MiBDMy4yMDMwMDU4MiwxMC4zNjg0MjEgNi4wNjc2NjkxNywxMS4xNTc4OTQ3IDcuNSwxMC45NjA1MjYzIFonIGlkPSdTbWlsZScgZmlsbD0nIzRBNTQ2MSc+PC9wYXRoPlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSdNNS4yMzY4NDIxMSw2LjMyMzY1OTggQzUuNjQzNzg4NzYsNi4zMjM2NTk4IDUuOTczNjg0MjEsNS44ODE4MzU1NCA1Ljk3MzY4NDIxLDUuMzM2ODE3NjkgQzUuOTczNjg0MjEsNC43OTE3OTk4NSA1LjY0Mzc4ODc2LDQuMzQ5OTc1NTkgNS4yMzY4NDIxMSw0LjM0OTk3NTU5IEM0LjgyOTg5NTQ1LDQuMzQ5OTc1NTkgNC41LDQuNzkxNzk5ODUgNC41LDUuMzM2ODE3NjkgQzQuNSw1Ljg4MTgzNTU0IDQuODI5ODk1NDUsNi4zMjM2NTk4IDUuMjM2ODQyMTEsNi4zMjM2NTk4IFogTTkuNzM2ODQyMTEsNi4zMjM2NTk4IEMxMC4xNDM3ODg4LDYuMzIzNjU5OCAxMC40NzM2ODQyLDUuODgxODM1NTQgMTAuNDczNjg0Miw1LjMzNjgxNzY5IEMxMC40NzM2ODQyLDQuNzkxNzk5ODUgMTAuMTQzNzg4OCw0LjM0OTk3NTU5IDkuNzM2ODQyMTEsNC4zNDk5NzU1OSBDOS4zMjk4OTU0NSw0LjM0OTk3NTU5IDksNC43OTE3OTk4NSA5LDUuMzM2ODE3NjkgQzksNS44ODE4MzU1NCA5LjMyOTg5NTQ1LDYuMzIzNjU5OCA5LjczNjg0MjExLDYuMzIzNjU5OCBaJyBpZD0nRXllcycgZmlsbD0nIzRBNTQ2MSc+PC9wYXRoPlxuXHRcdFx0ICAgICAgICAgICAgICAgIDwvZz5cblx0XHRcdCAgICAgICAgICAgIDwvZz5cblx0XHRcdCAgICAgICAgPC9nPlxuXHRcdFx0ICAgIDwvZz5cblx0XHRcdDwvc3ZnPlwiXG5cdFx0c21pbGV5cy5jb25zdHJhaW50cyA9XG5cdFx0XHRsZWFkaW5nIDogW2ZyZXF1ZW50LCAxNV1cblx0XHRcdGJvdHRvbTogMTRcblx0XHRcdHdpZHRoOjE2XG5cdFx0XHRoZWlnaHQ6MjBcblx0XHRleHBvcnRzLmxheW91dCgpXG5cdFx0YW5pbWFscyA9IG5ldyBMYXllciBzdXBlckxheWVyOmVtb2ppUGlja2VyLCBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiLCBvcGFjaXR5Oi40XG5cdFx0YW5pbWFscy5odG1sID0gXCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0XHRcdDxzdmcgd2lkdGg9JyN7ZXhwb3J0cy5weCgxNyl9cHgnIGhlaWdodD0nI3tleHBvcnRzLnB4KDE2KX1weCcgdmlld0JveD0nMCAwIDE3IDE3JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHhtbG5zOnNrZXRjaD0naHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zJz5cblx0XHRcdCAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNS4yICgyNTIzNSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdFx0XHQgICAgPHRpdGxlPkdyb3VwPC90aXRsZT5cblx0XHRcdCAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHRcdCAgICA8ZGVmcz48L2RlZnM+XG5cdFx0XHQgICAgPGcgaWQ9J1BhZ2UtMScgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCcgc2tldGNoOnR5cGU9J01TUGFnZSc+XG5cdFx0XHQgICAgICAgIDxnIGlkPSdpUGhvbmUtNicgc2tldGNoOnR5cGU9J01TQXJ0Ym9hcmRHcm91cCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTExNy4wMDAwMDAsIC02MzkuMDAwMDAwKScgc3Ryb2tlPScjNEE1MzYxJz5cblx0XHRcdCAgICAgICAgICAgIDxnIGlkPSdpY19Gb29kJyBza2V0Y2g6dHlwZT0nTVNMYXllckdyb3VwJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgxMTguMDAwMDAwLCA2NDAuMDAwMDAwKSc+XG5cdFx0XHQgICAgICAgICAgICAgICAgPGcgaWQ9J0dyb3VwJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJz5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0nTTUuNjgzNzc1MzcsMS4zODE1NjY0NiBDNi4yMzkyNjA2NiwxLjEzNjI0IDYuODUzNzIwMDUsMSA3LjUsMSBDOC4xNDYyNzk5NSwxIDguNzYwNzM5MzQsMS4xMzYyNCA5LjMxNjIyNDYzLDEuMzgxNTY2NDYgQzkuODA4NzkyNzUsMC41NjIzNTkwMTkgMTAuODI1NTg4OCwwIDEyLDAgQzEzLjY1Njg1NDIsMCAxNSwxLjExOTI4ODEzIDE1LDIuNSBDMTUsMy41NTcxMzk4IDE0LjIxMjYyNDYsNC40NjEwMjg0MyAxMy4wOTk5MjI2LDQuODI2NjI1MTQgQzE0LjI0OTY1MjgsNS42NDE4NTQyMiAxNSw2Ljk4MzMwMDYyIDE1LDguNSBDMTUsMTAuNzE2NzE0NCAxMy4zOTcxODczLDEyLjU1OTA3MTkgMTEuMjg3MjY3MSwxMi45MzEzNjczIEMxMC40ODY3MjQ4LDE0LjE3NTc3MDMgOS4wODk2MTY5NiwxNSA3LjUsMTUgQzUuOTEwMzgzMDQsMTUgNC41MTMyNzUyNCwxNC4xNzU3NzAzIDMuNzEyNzMyOTEsMTIuOTMxMzY3MyBDMS42MDI4MTI2OCwxMi41NTkwNzE5IDAsMTAuNzE2NzE0NCAwLDguNSBDMCw2Ljk4MzMwMDYyIDAuNzUwMzQ3MjQ0LDUuNjQxODU0MjIgMS45MDAwNzc0MSw0LjgyNjYyNTE0IEMwLjc4NzM3NTQ0NSw0LjQ2MTAyODQzIDAsMy41NTcxMzk4IDAsMi41IEMwLDEuMTE5Mjg4MTMgMS4zNDMxNDU3NSwwIDMsMCBDNC4xNzQ0MTEyMiwwIDUuMTkxMjA3MjUsMC41NjIzNTkwMTkgNS42ODM3NzUzNywxLjM4MTU2NjQ2IFonIGlkPSdPdmFsLTgnPjwvcGF0aD5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0nTTUuNzM4MzQyMjgsMTIgQzUuODYyOTA5NzksMTIgNi4xNDY0MjM1MywxMiA2LjE0NjQyMzUzLDEyIEM2LjE0NjQyMzUzLDEyIDYuNDMyMTU2OTYsMTIuNDQyNjEyMyA2LjUyNDY1ODIsMTIuNDkxOTczOSBDNi42NjQ1NTYwMSwxMi41NjY2Mjc3IDcsMTIuNDkxOTczOSA3LDEyLjQ5MTk3MzkgTDcsMTIgTDgsMTIgTDgsMTIuNDkxOTczOSBMOC40OTc5OTIyOCwxMi40OTE5NzM5IEw4Ljg0MzAxNzY5LDEyIEw5LjM5MTg0NTcsMTIgQzkuMzkxODQ1NywxMiA4Ljk5NTk4NDU3LDEyLjk4Mzk0NzggOC40OTc5OTIyOCwxMi45ODM5NDc4IEw2LjYwNzAyNDA3LDEyLjk4Mzk0NzggQzYuMjE0MDQ4MTMsMTIuOTgzOTQ3OCA1LjQ1OTk2MDk0LDEyIDUuNzM4MzQyMjgsMTIgWicgaWQ9J1JlY3RhbmdsZS00NC1Db3B5LTInPjwvcGF0aD5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBpZD0nT3ZhbC0xNCcgY3g9JzEwLjUnIGN5PSc3LjUnIHI9JzAuNSc+PC9jaXJjbGU+XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgaWQ9J092YWwtMTQtQ29weScgY3g9JzQuNScgY3k9JzcuNScgcj0nMC41Jz48L2NpcmNsZT5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0nTTEyLjY5OTk5NjksNSBDMTIuNjk5OTk2OSwzLjA2NzAwMzM4IDExLjEzMjk5MzYsMS41IDkuMTk5OTk2OTUsMS41JyBpZD0nT3ZhbC0xNic+PC9wYXRoPlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSdNNS41LDUgQzUuNSwzLjA2NzAwMzM4IDMuOTMyOTk2NjIsMS41IDIsMS41JyBpZD0nT3ZhbC0xNi1Db3B5JyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgzLjc1MDAwMCwgMy4yNTAwMDApIHNjYWxlKC0xLCAxKSB0cmFuc2xhdGUoLTMuNzUwMDAwLCAtMy4yNTAwMDApICc+PC9wYXRoPlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0nUmVjdGFuZ2xlLTQ0LUNvcHknIHg9JzcnIHk9JzExJyB3aWR0aD0nMScgaGVpZ2h0PScxJz48L3JlY3Q+XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9J002LDEwIEw2LjUsMTAgTDYuNDk5OTk5OTksOS41IEw4LjUwMDAwMDA1LDkuNSBMOC41MDAwMDAwNSwxMCBMOSwxMCBMOSwxMC41IEw4LjUsMTAuNSBMOC41LDExIEw2LjUsMTEgTDYuNSwxMC41IEw2LDEwLjUgTDYsMTAgWicgaWQ9J1BhdGgnPjwvcGF0aD5cblx0XHRcdCAgICAgICAgICAgICAgICA8L2c+XG5cdFx0XHQgICAgICAgICAgICA8L2c+XG5cdFx0XHQgICAgICAgIDwvZz5cblx0XHRcdCAgICA8L2c+XG5cdFx0XHQ8L3N2Zz5cIlxuXHRcdGFuaW1hbHMuY29uc3RyYWludHMgPVxuXHRcdFx0bGVhZGluZyA6IFtzbWlsZXlzLCAxNV1cblx0XHRcdGJvdHRvbTogMTRcblx0XHRcdHdpZHRoOjE2XG5cdFx0XHRoZWlnaHQ6MjBcblx0XHRleHBvcnRzLmxheW91dCgpXG5cdFx0Zm9vZCA9IG5ldyBMYXllciBzdXBlckxheWVyOmVtb2ppUGlja2VyLCBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiLCBvcGFjaXR5Oi40XG5cdFx0Zm9vZC5odG1sID0gXCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0XHRcdDxzdmcgd2lkdGg9JyN7ZXhwb3J0cy5weCgxNyl9cHgnIGhlaWdodD0nI3tleHBvcnRzLnB4KDE2KX1weCcgdmlld0JveD0nMCAwIDE3IDE3JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHhtbG5zOnNrZXRjaD0naHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zJz5cblx0XHRcdCAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNS4yICgyNTIzNSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdFx0XHQgICAgPHRpdGxlPkZvb2Q8L3RpdGxlPlxuXHRcdFx0ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdFx0ICAgIDxkZWZzPjwvZGVmcz5cblx0XHRcdCAgICA8ZyBpZD0naU9TLTktS2V5Ym9hcmRzJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJyBza2V0Y2g6dHlwZT0nTVNQYWdlJz5cblx0XHRcdCAgICAgICAgPGcgaWQ9J2lQaG9uZS02LVBvcnRyYWl0LUxpZ2h0LUNvcHknIHNrZXRjaDp0eXBlPSdNU0FydGJvYXJkR3JvdXAnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC0xNDguMDAwMDAwLCAtNjM3LjAwMDAwMCknPlxuXHRcdFx0ICAgICAgICAgICAgPGcgaWQ9J0tleWJvYXJkcycgc2tldGNoOnR5cGU9J01TTGF5ZXJHcm91cCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMC4wMDAwMDAsIDQwOC4wMDAwMDApJz5cblx0XHRcdCAgICAgICAgICAgICAgICA8ZyBpZD0nRm9vZCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMTQ5LjUwMDAwMCwgMjI5LjUwMDAwMCknIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnPlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSdNNS41LDE1LjUgTDEsMTUuNSBMMCw1IEw2LjUsNSBMNi4yNjM2MDkzMyw3LjQ4MjEwMjAyJyBpZD0nRHJpbmsnIHN0cm9rZT0nIzRBNTQ2MSc+PC9wYXRoPlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSdNNi4wMTA3NzU0NSwxLjk2OTMwMDk4IEw2LjUxNTcxMzUyLDUuMjIyNzA1MzkgTDUuNzE5MDgxODQsNS42Nzk0NzgxMiBMNS4wMzg5MDA5LDEuOTY5MzAwOTggTDQuODU1NTcyNDcsMS45NjkzMDA5OCBMNC44NTU1NzI0NywwLjk2OTMwMDk4IEw4Ljg1NTU3MjQ3LDAuOTY5MzAwOTggTDguODU1NTcyNDcsMS45NjkzMDA5OCBMNi4wMTA3NzU0NSwxLjk2OTMwMDk4IFonIGlkPSdTdHJhdycgZmlsbD0nIzRBNTQ2MScgdHJhbnNmb3JtPSd0cmFuc2xhdGUoNi44NTU1NzIsIDMuMzI0MzkwKSByb3RhdGUoMjQuMDAwMDAwKSB0cmFuc2xhdGUoLTYuODU1NTcyLCAtMy4zMjQzOTApICc+PC9wYXRoPlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0nQm90dG9tLUJ1bicgc3Ryb2tlPScjNEE1NDYxJyB4PSczJyB5PScxNCcgd2lkdGg9JzEwLjUnIGhlaWdodD0nMS41JyByeD0nMSc+PC9yZWN0PlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSdNMS41LDEyLjUwMjQ0MDggQzEuNSwxMS45NDg4MDggMS45NDkxNjkxNiwxMS41IDIuNDkyNjg3MjMsMTEuNSBMMTQuMDA3MzEyOCwxMS41IEMxNC41NTU1NTg4LDExLjUgMTUsMTEuOTQ2OTQ5OSAxNSwxMi41MDI0NDA4IEwxNSwxMi45OTc1NTkyIEMxNSwxMy41NTExOTIgMTQuNTUwODMwOCwxNCAxNC4wMDczMTI4LDE0IEwyLjQ5MjY4NzIzLDE0IEMxLjk0NDQ0MTIxLDE0IDEuNSwxMy41NTMwNTAxIDEuNSwxMi45OTc1NTkyIEwxLjUsMTIuNTAyNDQwOCBaIE0zLjkzMzAwMDAzLDExLjgzOTI3MjcgQzMuNDE3NzE4MzQsMTEuNjUxODk3NiAzLjQ0NDgzNjk3LDExLjUgMy45OTU1Nzc1LDExLjUgTDEzLjAwNDQyMjUsMTEuNSBDMTMuNTU0MjY0OCwxMS41IDEzLjU4NjYwNjEsMTEuNjUwMzI1MSAxMy4wNjcsMTEuODM5MjcyNyBMOC41LDEzLjUgTDMuOTMzMDAwMDMsMTEuODM5MjcyNyBaJyBpZD0nJnF1b3Q7UGF0dHkmcXVvdDsnIGZpbGw9JyM0QTU0NjEnPjwvcGF0aD5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0nTTIuNSwxMC41IEwxMy41LDEwLjUgTDE1LDExLjUgTDEsMTEuNSBMMi41LDEwLjUgWicgaWQ9J0NoZWVzZScgZmlsbD0nIzRBNTQ2MSc+PC9wYXRoPlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSdNOC4yNSwxMC41IEMxMS40MjU2MzczLDEwLjUgMTQsMTAuMzI4NDI3MSAxNCw5LjUgQzE0LDguNjcxNTcyODggMTEuNDI1NjM3Myw4IDguMjUsOCBDNS4wNzQzNjI2OSw4IDIuNSw4LjY3MTU3Mjg4IDIuNSw5LjUgQzIuNSwxMC4zMjg0MjcxIDUuMDc0MzYyNjksMTAuNSA4LjI1LDEwLjUgWicgaWQ9J1RvcC1CdW4nIHN0cm9rZT0nIzRBNTQ2MScgc3Ryb2tlLXdpZHRoPScwLjc1Jz48L3BhdGg+XG5cdFx0XHQgICAgICAgICAgICAgICAgPC9nPlxuXHRcdFx0ICAgICAgICAgICAgPC9nPlxuXHRcdFx0ICAgICAgICA8L2c+XG5cdFx0XHQgICAgPC9nPlxuXHRcdFx0PC9zdmc+XCJcblx0XHRmb29kLmNvbnN0cmFpbnRzID1cblx0XHRcdGxlYWRpbmcgOiBbYW5pbWFscywgMTVdXG5cdFx0XHRib3R0b206IDE0XG5cdFx0XHR3aWR0aDoxNlxuXHRcdFx0aGVpZ2h0OjIwXG5cdFx0ZXhwb3J0cy5sYXlvdXQoKVxuXHRcdGFjdGl2aXR5ID0gbmV3IExheWVyIHN1cGVyTGF5ZXI6ZW1vamlQaWNrZXIsIGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCIsIG9wYWNpdHk6LjRcblx0XHRhY3Rpdml0eS5odG1sID0gXCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0XHRcdDxzdmcgd2lkdGg9JyN7ZXhwb3J0cy5weCgxNil9cHgnIGhlaWdodD0nI3tleHBvcnRzLnB4KDE2KX1weCcgdmlld0JveD0nMCAwIDE2IDE2JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHhtbG5zOnNrZXRjaD0naHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zJz5cblx0XHRcdCAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNS4yICgyNTIzNSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdFx0XHQgICAgPHRpdGxlPlNvY2NlciBCYWxsPC90aXRsZT5cblx0XHRcdCAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHRcdCAgICA8ZGVmcz5cblx0XHRcdCAgICAgICAgPGNpcmNsZSBpZD0ncGF0aC0xJyBjeD0nOCcgY3k9JzgnIHI9JzgnPjwvY2lyY2xlPlxuXHRcdFx0ICAgIDwvZGVmcz5cblx0XHRcdCAgICA8ZyBpZD0nUGFnZS0xJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJyBza2V0Y2g6dHlwZT0nTVNQYWdlJz5cblx0XHRcdCAgICAgICAgPGcgaWQ9J2lQaG9uZS02JyBza2V0Y2g6dHlwZT0nTVNBcnRib2FyZEdyb3VwJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtMTc5LjAwMDAwMCwgLTYzOS4wMDAwMDApJz5cblx0XHRcdCAgICAgICAgICAgIDxnIGlkPSdTb2NjZXItQmFsbCcgc2tldGNoOnR5cGU9J01TTGF5ZXJHcm91cCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMTc5LjAwMDAwMCwgNjM5LjAwMDAwMCknPlxuXHRcdFx0ICAgICAgICAgICAgICAgIDxtYXNrIGlkPSdtYXNrLTInIHNrZXRjaDpuYW1lPSdNYXNrJyBmaWxsPSd3aGl0ZSc+XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0nI3BhdGgtMSc+PC91c2U+XG5cdFx0XHQgICAgICAgICAgICAgICAgPC9tYXNrPlxuXHRcdFx0ICAgICAgICAgICAgICAgIDx1c2UgaWQ9J01hc2snIHN0cm9rZT0nIzRBNTM2MScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCcgeGxpbms6aHJlZj0nI3BhdGgtMSc+PC91c2U+XG5cdFx0XHQgICAgICAgICAgICAgICAgPHBhdGggZD0nTTYsMTIuMTIwMzA0NiBMMTIuODU3MzM4NCw4IEwxMy4zNzIzNzY1LDguODU3MTY3MyBMNi41MTUwMzgwNywxMi45Nzc0NzE5IEw2LDEyLjEyMDMwNDYgTDYsMTIuMTIwMzA0NiBaJyBpZD0nUmVjdGFuZ2xlLTQ3JyBmaWxsPScjNEE1MzYxJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJyBtYXNrPSd1cmwoI21hc2stMiknPjwvcGF0aD5cblx0XHRcdCAgICAgICAgICAgICAgICA8cGF0aCBkPSdNMTEuODQ5NjQ4LDguNzI2MDU1MSBMMTkuMTAwMTEwMyw1LjM0NTEwOTAxIEwxOS41MjI3Mjg1LDYuMjUxNDE2OCBMMTIuMjcyMjY2Miw5LjYzMjM2Mjg5IEwxMS44NDk2NDgsOC43MjYwNTUxIEwxMS44NDk2NDgsOC43MjYwNTUxIFonIGlkPSdSZWN0YW5nbGUtNDctQ29weS0zJyBmaWxsPScjNEE1MzYxJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJyBtYXNrPSd1cmwoI21hc2stMiknPjwvcGF0aD5cblx0XHRcdCAgICAgICAgICAgICAgICA8cGF0aCBkPSdNNiwzLjEyMDMwNDYgTDEyLjg1NzMzODQsLTEgTDEzLjM3MjM3NjUsLTAuMTQyODMyNjk5IEw2LjUxNTAzODA3LDMuOTc3NDcxOSBMNiwzLjEyMDMwNDYgTDYsMy4xMjAzMDQ2IFonIGlkPSdSZWN0YW5nbGUtNDctQ29weS0yJyBmaWxsPScjNEE1MzYxJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJyBtYXNrPSd1cmwoI21hc2stMiknPjwvcGF0aD5cblx0XHRcdCAgICAgICAgICAgICAgICA8cGF0aCBkPSdNLTEsNy4xMjAzMDQ2IEw1Ljg1NzMzODQxLDMgTDYuMzcyMzc2NDgsMy44NTcxNjczIEwtMC40ODQ5NjE5MjUsNy45Nzc0NzE5IEwtMSw3LjEyMDMwNDYgTC0xLDcuMTIwMzA0NiBaJyBpZD0nUmVjdGFuZ2xlLTQ3LUNvcHktNCcgZmlsbD0nIzRBNTM2MScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCcgbWFzaz0ndXJsKCNtYXNrLTIpJz48L3BhdGg+XG5cdFx0XHQgICAgICAgICAgICAgICAgPHJlY3QgaWQ9J1JlY3RhbmdsZS01MCcgZmlsbD0nIzRBNTM2MScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCcgbWFzaz0ndXJsKCNtYXNrLTIpJyB4PSc0JyB5PSc2JyB3aWR0aD0nMScgaGVpZ2h0PSc1Jz48L3JlY3Q+XG5cdFx0XHQgICAgICAgICAgICAgICAgPHJlY3QgaWQ9J1JlY3RhbmdsZS01MScgZmlsbD0nIzRBNTM2MScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCcgbWFzaz0ndXJsKCNtYXNrLTIpJyB4PScxMS41JyB5PSczJyB3aWR0aD0nMScgaGVpZ2h0PScxMic+PC9yZWN0PlxuXHRcdFx0ICAgICAgICAgICAgICAgIDxwYXRoIGQ9J001LDQuODU3MTY3MyBMMTEuODU3MzM4NCw4Ljk3NzQ3MTkgTDEyLjM3MjM3NjUsOC4xMjAzMDQ2IEw1LjUxNTAzODA3LDQgTDUsNC44NTcxNjczJyBpZD0nUmVjdGFuZ2xlLTQ3LUNvcHknIGZpbGw9JyM0QTUzNjEnIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnIG1hc2s9J3VybCgjbWFzay0yKSc+PC9wYXRoPlxuXHRcdFx0ICAgICAgICAgICAgICAgIDxwYXRoIGQ9J001LDEyLjg1NzE2NzMgTDExLjg1NzMzODQsMTYuOTc3NDcxOSBMMTIuMzcyMzc2NSwxNi4xMjAzMDQ2IEw1LjUxNTAzODA3LDEyIEw1LDEyLjg1NzE2NzMnIGlkPSdSZWN0YW5nbGUtNDctQ29weS01JyBmaWxsPScjNEE1MzYxJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJyBtYXNrPSd1cmwoI21hc2stMiknPjwvcGF0aD5cblx0XHRcdCAgICAgICAgICAgICAgICA8cGF0aCBkPSdNMTEuOTA0ODk3Miw2LjE0NzY2MDY0IEwxMy44NzE0MjI3LDguMzMxNzA4NDkgTDEyLjQwMTk1OTYsMTAuODc2ODkzMyBMOS41MjcyNTU4OSwxMC4yNjU4NTYyIEw5LjIyMDA1NDQ1LDcuMzQzMDI5NjUgTDExLjkwNDg5NzIsNi4xNDc2NjA2NCcgaWQ9J1BvbHlnb24tMScgZmlsbD0nI0Q4RDhEOCcgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCcgbWFzaz0ndXJsKCNtYXNrLTIpJz48L3BhdGg+XG5cdFx0XHQgICAgICAgICAgICAgICAgPHBhdGggZD0nTTExLjkwNDg5NzIsNi4xNDc2NjA2NCBMMTMuODcxNDIyNyw4LjMzMTcwODQ5IEwxMi40MDE5NTk2LDEwLjg3Njg5MzMgTDkuNTI3MjU1ODksMTAuMjY1ODU2MiBMOS4yMjAwNTQ0NSw3LjM0MzAyOTY1IEwxMS45MDQ4OTcyLDYuMTQ3NjYwNjQnIGlkPSdQb2x5Z29uLTEtQ29weScgZmlsbD0nIzRBNTM2MScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCcgbWFzaz0ndXJsKCNtYXNrLTIpJz48L3BhdGg+XG5cdFx0XHQgICAgICAgICAgICAgICAgPHBhdGggZD0nTTcuNDU3NzExODksMy4xOTUwNDczOSBMNy4zNTUxNDQ4NCw2LjEzMjE4MzMzIEw0LjUzMDA2NzYsNi45NDIyNjEyIEwyLjg4NjY0MDg5LDQuNTA1NzgwOSBMNC42OTYwMjQ1NywyLjE4OTg3NTQxIEw3LjQ1NzcxMTg5LDMuMTk1MDQ3MzknIGlkPSdQb2x5Z29uLTEtQ29weS0yJyBmaWxsPScjNEE1MzYxJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJyBtYXNrPSd1cmwoI21hc2stMiknPjwvcGF0aD5cblx0XHRcdCAgICAgICAgICAgICAgICA8cGF0aCBkPSdNNy40NTc3MTE4OSwxMS4xOTUwNDc0IEw3LjM1NTE0NDg0LDE0LjEzMjE4MzMgTDQuNTMwMDY3NiwxNC45NDIyNjEyIEwyLjg4NjY0MDg5LDEyLjUwNTc4MDkgTDQuNjk2MDI0NTcsMTAuMTg5ODc1NCBMNy40NTc3MTE4OSwxMS4xOTUwNDc0JyBpZD0nUG9seWdvbi0xLUNvcHktMycgZmlsbD0nIzRBNTM2MScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCcgbWFzaz0ndXJsKCNtYXNrLTIpJz48L3BhdGg+XG5cdFx0XHQgICAgICAgICAgICAgICAgPHBhdGggZD0nTTE0LjU0MzE3MDEsMC4wNzI1OTM5MzE0IEwxNC40NDA2MDMxLDMuMDA5NzI5ODggTDExLjYxNTUyNTgsMy44MTk4MDc3NCBMOS45NzIwOTkxMiwxLjM4MzMyNzQ1IEwxMS43ODE0ODI4LC0wLjkzMjU3ODA1IEwxNC41NDMxNzAxLDAuMDcyNTkzOTMxNCcgaWQ9J1BvbHlnb24tMS1Db3B5LTQnIGZpbGw9JyM0QTUzNjEnIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnIG1hc2s9J3VybCgjbWFzay0yKSc+PC9wYXRoPlxuXHRcdFx0ICAgICAgICAgICAgPC9nPlxuXHRcdFx0ICAgICAgICA8L2c+XG5cdFx0XHQgICAgPC9nPlxuXHRcdFx0PC9zdmc+XCJcblx0XHRhY3Rpdml0eS5jb25zdHJhaW50cyA9XG5cdFx0XHRsZWFkaW5nIDogW2Zvb2QsIDE1XVxuXHRcdFx0Ym90dG9tOiAxNFxuXHRcdFx0d2lkdGg6MTZcblx0XHRcdGhlaWdodDoyMFxuXHRcdGV4cG9ydHMubGF5b3V0KClcblx0XHR0cmF2ZWwgPSBuZXcgTGF5ZXIgc3VwZXJMYXllcjplbW9qaVBpY2tlciwgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIiwgb3BhY2l0eTouNFxuXHRcdHRyYXZlbC5odG1sID0gXCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0XHRcdDxzdmcgd2lkdGg9JyN7ZXhwb3J0cy5weCgxNyl9cHgnIGhlaWdodD0nI3tleHBvcnRzLnB4KDE2KX1weCcgdmlld0JveD0nMCAwIDE3IDE2JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHhtbG5zOnNrZXRjaD0naHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zJz5cblx0XHRcdCAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNS4yICgyNTIzNSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdFx0XHQgICAgPHRpdGxlPlRyYW5zcG9ydDwvdGl0bGU+XG5cdFx0XHQgICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0XHQgICAgPGRlZnM+PC9kZWZzPlxuXHRcdFx0ICAgIDxnIGlkPSdpT1MtOS1LZXlib2FyZHMnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIHNrZXRjaDp0eXBlPSdNU1BhZ2UnPlxuXHRcdFx0ICAgICAgICA8ZyBpZD0naVBob25lLTYtUG9ydHJhaXQtTGlnaHQtQ29weScgc2tldGNoOnR5cGU9J01TQXJ0Ym9hcmRHcm91cCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTI0MS4wMDAwMDAsIC02MzguMDAwMDAwKSc+XG5cdFx0XHQgICAgICAgICAgICA8ZyBpZD0nS2V5Ym9hcmRzJyBza2V0Y2g6dHlwZT0nTVNMYXllckdyb3VwJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgwLjAwMDAwMCwgNDA4LjAwMDAwMCknPlxuXHRcdFx0ICAgICAgICAgICAgICAgIDxnIGlkPSdUcmFuc3BvcnQnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDI0MS41MDAwMDAsIDIzMC4wMDAwMDApJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJz5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0nTTAsNiBMMSw2IEwxLDE1IEwwLDE1IEwwLDYgWiBNMTUsNCBMMTYsNCBMMTYsMTUgTDE1LDE1IEwxNSw0IFogTTMuNSwwIEw0LjUsMCBMNC41LDcgTDMuNSw3IEwzLjUsMCBaIE0xLDYgTDMuNSw2IEwzLjUsNyBMMSw3IEwxLDYgWiBNNC41LDAgTDkuNSwwIEw5LjUsMSBMNC41LDEgTDQuNSwwIFogTTkuNSwwIEwxMC41LDAgTDEwLjUsNiBMOS41LDYgTDkuNSwwIFogTTEwLjUsNCBMMTUsNCBMMTUsNSBMMTAuNSw1IEwxMC41LDQgWicgaWQ9J1NreWxpbmUnIGZpbGw9JyM0QTU0NjEnPjwvcGF0aD5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgPGcgaWQ9J1dpbmRvd3MnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDIuMDAwMDAwLCAyLjAwMDAwMCknIGZpbGw9JyM0QTU0NjEnPlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9J1dpbmRvdycgeD0nMCcgeT0nNicgd2lkdGg9JzEnIGhlaWdodD0nMSc+PC9yZWN0PlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9J1dpbmRvdycgeD0nMy41JyB5PScwJyB3aWR0aD0nMScgaGVpZ2h0PScxJz48L3JlY3Q+XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0nV2luZG93JyB4PSc1LjUnIHk9JzAnIHdpZHRoPScxJyBoZWlnaHQ9JzEnPjwvcmVjdD5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSdXaW5kb3cnIHg9JzUuNScgeT0nMicgd2lkdGg9JzEnIGhlaWdodD0nMSc+PC9yZWN0PlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9J1dpbmRvdycgeD0nMy41JyB5PScyJyB3aWR0aD0nMScgaGVpZ2h0PScxJz48L3JlY3Q+XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0nV2luZG93JyB4PScxMScgeT0nNCcgd2lkdGg9JzEnIGhlaWdodD0nMSc+PC9yZWN0PlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9J1dpbmRvdycgeD0nMTEnIHk9JzYnIHdpZHRoPScxJyBoZWlnaHQ9JzEnPjwvcmVjdD5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgPC9nPlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA8ZyBpZD0nQ2FyJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgyLjUwMDAwMCwgNi41MDAwMDApJz5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9J004LjUsOCBMMi41LDggTDIuNSw5LjUgTDAuNSw5LjUgTDAuNSw3Ljg2ODExNDUgQzAuMjAxMjAyMTkyLDcuNjk1ODI3MDIgMCw3LjM3MDkxMzYzIDAsNi45OTA2MzExIEwwLDUuMDA5MzY4OSBDMCw0LjQ1MTkwOTg1IDAuNDQ0ODM2OTc0LDQgMC45OTU1Nzc0OTksNCBMMTAuMDA0NDIyNSw0IEMxMC41NTQyNjQ4LDQgMTEsNC40NDMzNTMxOCAxMSw1LjAwOTM2ODkgTDExLDYuOTkwNjMxMSBDMTEsNy4zNjUzMzE1IDEwLjc5OTAyNDQsNy42OTIzNDUxOSAxMC41LDcuODY2NDkwMDIgTDEwLjUsOS41IEw4LjUsOS41IEw4LjUsOCBaIE0xLjc1LDYuNSBDMi4xNjQyMTM1Niw2LjUgMi41LDYuMTY0MjEzNTYgMi41LDUuNzUgQzIuNSw1LjMzNTc4NjQ0IDIuMTY0MjEzNTYsNSAxLjc1LDUgQzEuMzM1Nzg2NDQsNSAxLDUuMzM1Nzg2NDQgMSw1Ljc1IEMxLDYuMTY0MjEzNTYgMS4zMzU3ODY0NCw2LjUgMS43NSw2LjUgWiBNOS4yNSw2LjUgQzkuNjY0MjEzNTYsNi41IDEwLDYuMTY0MjEzNTYgMTAsNS43NSBDMTAsNS4zMzU3ODY0NCA5LjY2NDIxMzU2LDUgOS4yNSw1IEM4LjgzNTc4NjQ0LDUgOC41LDUuMzM1Nzg2NDQgOC41LDUuNzUgQzguNSw2LjE2NDIxMzU2IDguODM1Nzg2NDQsNi41IDkuMjUsNi41IFogTTAuNSw3IEwxMC41LDcgTDEwLjUsNy41IEwwLjUsNy41IEwwLjUsNyBaIE0zLDYuNSBMOCw2LjUgTDgsNyBMMyw3IEwzLDYuNSBaJyBpZD0nQm9keScgZmlsbD0nIzRBNTQ2MSc+PC9wYXRoPlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0nTTEuNSw0LjUgTDEuNSwzIEMxLjUsMS4zNDMxNDU3NSAyLjgzOTAyMDEzLDAgNC41MDE2NjU0NywwIEw2LjQ5ODMzNDUzLDAgQzguMTU2MTA4NTksMCA5LjUsMS4zNDY1MTcxMiA5LjUsMyBMOS41LDUnIGlkPSdSb29mJyBzdHJva2U9JyM0QTU0NjEnPjwvcGF0aD5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgPC9nPlxuXHRcdFx0ICAgICAgICAgICAgICAgIDwvZz5cblx0XHRcdCAgICAgICAgICAgIDwvZz5cblx0XHRcdCAgICAgICAgPC9nPlxuXHRcdFx0ICAgIDwvZz5cblx0XHRcdDwvc3ZnPlwiXG5cdFx0dHJhdmVsLmNvbnN0cmFpbnRzID1cblx0XHRcdGxlYWRpbmcgOiBbYWN0aXZpdHksIDE1XVxuXHRcdFx0Ym90dG9tOiAxNFxuXHRcdFx0d2lkdGg6MTZcblx0XHRcdGhlaWdodDoyMFxuXHRcdGV4cG9ydHMubGF5b3V0KClcblx0XHRvYmplY3RzID0gbmV3IExheWVyIHN1cGVyTGF5ZXI6ZW1vamlQaWNrZXIsIGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCIsIG9wYWNpdHk6LjRcblx0XHRvYmplY3RzLmh0bWwgPSBcIjw/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyc/PlxuXHRcdFx0XHQ8c3ZnIHdpZHRoPScje2V4cG9ydHMucHgoMTEpfXB4JyBoZWlnaHQ9JyN7ZXhwb3J0cy5weCgxNil9cHgnIHZpZXdCb3g9JzAgMCAxMSAxNicgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyB4bWxuczpza2V0Y2g9J2h0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaC9ucyc+XG5cdFx0XHQgICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjUuMiAoMjUyMzUpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdFx0ICAgIDx0aXRsZT5MaWdodGJ1bGI8L3RpdGxlPlxuXHRcdFx0ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdFx0ICAgIDxkZWZzPjwvZGVmcz5cblx0XHRcdCAgICA8ZyBpZD0nUGFnZS0xJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJyBza2V0Y2g6dHlwZT0nTVNQYWdlJz5cblx0XHRcdCAgICAgICAgPGcgaWQ9J2lQaG9uZS02JyBza2V0Y2g6dHlwZT0nTVNBcnRib2FyZEdyb3VwJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtMjQ0LjAwMDAwMCwgLTYzOS4wMDAwMDApJyBzdHJva2U9JyM0QTUzNjEnPlxuXHRcdFx0ICAgICAgICAgICAgPGcgaWQ9J0xpZ2h0YnVsYicgc2tldGNoOnR5cGU9J01TTGF5ZXJHcm91cCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMjQ0LjAwMDAwMCwgNjM5LjAwMDAwMCknPlxuXHRcdFx0ICAgICAgICAgICAgICAgIDxwYXRoIGQ9J004LDEwLjQwMDI5MDQgQzkuNzgwODM3OTUsOS40ODk5MzQ5MSAxMSw3LjYzNzM0MjczIDExLDUuNSBDMTEsMi40NjI0MzM4OCA4LjUzNzU2NjEyLDAgNS41LDAgQzIuNDYyNDMzODgsMCAwLDIuNDYyNDMzODggMCw1LjUgQzAsNy42MzczNDI3MyAxLjIxOTE2MjA1LDkuNDg5OTM0OTEgMywxMC40MDAyOTA0IEwzLDE0LjAwMjA4NjkgQzMsMTUuMTAxNzM5NCAzLjg5NzYxNjAyLDE2IDUuMDA0ODgxNSwxNiBMNS45OTUxMTg1LDE2IEM3LjEwNjEwMDIsMTYgOCwxNS4xMDU1MDM4IDgsMTQuMDAyMDg2OSBMOCwxMC40MDAyOTA0IFonIGlkPSdPdmFsLTE3JyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJz48L3BhdGg+XG5cdFx0XHQgICAgICAgICAgICAgICAgPHJlY3QgaWQ9J1JlY3RhbmdsZS01MCcgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCcgeD0nMycgeT0nMTInIHdpZHRoPSc1JyBoZWlnaHQ9JzEnPjwvcmVjdD5cblx0XHRcdCAgICAgICAgICAgICAgICA8cmVjdCBpZD0nUmVjdGFuZ2xlLTUxJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJyB4PSc0JyB5PScxMy41JyB3aWR0aD0nMS41JyBoZWlnaHQ9JzEnPjwvcmVjdD5cblx0XHRcdCAgICAgICAgICAgICAgICA8cGF0aCBkPSdNNSw4LjUgQzUsOC41IDMuNDk5OTk5OTksNy41MDAwMDAwMSA0LDcgQzQuNTAwMDAwMDEsNi40OTk5OTk5OSA1LDcuNjY2NjY2NjcgNS41LDggQzUuNSw4IDYuNSw2LjUwMDAwMDAxIDcsNyBDNy41LDcuNDk5OTk5OTkgNiw4LjUgNiw4LjUgTDYsMTEgTDUsMTEgTDUsOC41IFonIGlkPSdSZWN0YW5nbGUtNTInIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnPjwvcGF0aD5cblx0XHRcdCAgICAgICAgICAgIDwvZz5cblx0XHRcdCAgICAgICAgPC9nPlxuXHRcdFx0ICAgIDwvZz5cblx0XHRcdDwvc3ZnPlwiXG5cdFx0b2JqZWN0cy5jb25zdHJhaW50cyA9XG5cdFx0XHRsZWFkaW5nIDogW3RyYXZlbCwgMTVdXG5cdFx0XHRib3R0b206IDE0XG5cdFx0XHR3aWR0aDoxNlxuXHRcdFx0aGVpZ2h0OjIwXG5cdFx0ZXhwb3J0cy5sYXlvdXQoKVxuXHRcdHN5bWJvbHMgPSBuZXcgTGF5ZXIgc3VwZXJMYXllcjplbW9qaVBpY2tlciwgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIiwgb3BhY2l0eTouNFxuXHRcdHN5bWJvbHMuaHRtbCA9IFwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdFx0XHQ8c3ZnIHdpZHRoPScje2V4cG9ydHMucHgoMTYpfXB4JyBoZWlnaHQ9JyN7ZXhwb3J0cy5weCgxNyl9cHgnIHZpZXdCb3g9JzAgMCAxNSAxNycgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyB4bWxuczpza2V0Y2g9J2h0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaC9ucyc+XG5cdFx0XHQgICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjUuMiAoMjUyMzUpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdFx0ICAgIDx0aXRsZT5PYmplY3RzICZhbXA7IFN5bWJvbHM8L3RpdGxlPlxuXHRcdFx0ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdFx0ICAgIDxkZWZzPjwvZGVmcz5cblx0XHRcdCAgICA8ZyBpZD0naU9TLTktS2V5Ym9hcmRzJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJyBza2V0Y2g6dHlwZT0nTVNQYWdlJz5cblx0XHRcdCAgICAgICAgPGcgaWQ9J2lQaG9uZS02LVBvcnRyYWl0LUxpZ2h0LUNvcHknIHNrZXRjaDp0eXBlPSdNU0FydGJvYXJkR3JvdXAnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC0zMDQuMDAwMDAwLCAtNjM4LjAwMDAwMCknIGZpbGw9JyM0QTU0NjEnPlxuXHRcdFx0ICAgICAgICAgICAgPGcgaWQ9J0tleWJvYXJkcycgc2tldGNoOnR5cGU9J01TTGF5ZXJHcm91cCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMC4wMDAwMDAsIDQwOC4wMDAwMDApJz5cblx0XHRcdCAgICAgICAgICAgICAgICA8ZyBpZD0nT2JqZWN0cy0mYW1wOy1TeW1ib2xzJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgzMDQuMDAwMDAwLCAyMzAuMDAwMDAwKSc+XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIDxnIGlkPSdUaGluZycgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMC4wMDAwMDAsIDAuNTAwMDAwKScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCc+XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0nUmVjdGFuZ2xlLTEyMDknIHg9JzAnIHk9JzAnIHdpZHRoPSc3JyBoZWlnaHQ9JzEnPjwvcmVjdD5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSdSZWN0YW5nbGUtMTIwOScgeD0nMCcgeT0nMicgd2lkdGg9JzcnIGhlaWdodD0nMSc+PC9yZWN0PlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9J1JlY3RhbmdsZS0xMjExJyB4PSczJyB5PSczJyB3aWR0aD0nMScgaGVpZ2h0PSc0Jz48L3JlY3Q+XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIDwvZz5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0nTTExLjc1LDAuMTU5MjYzOTc4IEwxMS43NSwwIEwxMSwwIEwxMSw1LjA5MTQ5MyBDMTAuNTkzNDQsNC45NDIyMTM5MiAxMC4wNjM5NjYyLDQuOTY0NTMyMjQgOS41NTcxNTM5OSw1LjE5MDE3OTU3IEM4LjY5ODQ5MjkzLDUuNTcyNDgwMSA4LjIzMDAzODM1LDYuMzkzNjU2MjEgOC41MTA4MzE0MSw3LjAyNDMyNzc0IEM4Ljc5MTYyNDQ3LDcuNjU0OTk5MjggOS43MTUzMzQ1NCw3Ljg1NjM0Mzc1IDEwLjU3Mzk5NTYsNy40NzQwNDMyMSBDMTEuMjc2MTE4Myw3LjE2MTQzODAzIDExLjcxNzMzOTMsNi41NTUzODk3MiAxMS43MDEzNTk1LDYgTDExLjc1LDYgTDExLjc1LDEuMzkzODUwNTYgQzEyLjMxNzU5MDgsMS41OTU5MDAzNyAxMywyLjA4MTc0NTYgMTMsMy4yNSBDMTMsNC4yNSAxMi43NSw1LjUgMTIuNzUsNS41IEMxMi43NSw1LjUgMTMuNzUsNC43NSAxMy43NSwyLjUgQzEzLjc1LDEuMDIyNTYxMDEgMTIuNTY0MjY3NCwwLjQwNzQ3MzAxOSAxMS43NSwwLjE1OTI2Mzk3OCBaJyBpZD0nTm90ZScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCc+PC9wYXRoPlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA8dGV4dCBpZD0nJmFtcDsnIHNrZXRjaDp0eXBlPSdNU1RleHRMYXllcicgZm9udC1mYW1pbHk9J1NGIFVJIERpc3BsYXknIGZvbnQtc2l6ZT0nOS41JyBmb250LXdlaWdodD0nbm9ybWFsJz5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDx0c3BhbiB4PScwLjI1JyB5PScxNic+JmFtcDs8L3RzcGFuPlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA8L3RleHQ+XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIDx0ZXh0IGlkPSclJyBza2V0Y2g6dHlwZT0nTVNUZXh0TGF5ZXInIGZvbnQtZmFtaWx5PSdTRiBVSSBEaXNwbGF5JyBmb250LXNpemU9JzkuNScgZm9udC13ZWlnaHQ9J25vcm1hbCc+XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8dHNwYW4geD0nNy43NScgeT0nMTYnPiU8L3RzcGFuPlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA8L3RleHQ+XG5cdFx0XHQgICAgICAgICAgICAgICAgPC9nPlxuXHRcdFx0ICAgICAgICAgICAgPC9nPlxuXHRcdFx0ICAgICAgICA8L2c+XG5cdFx0XHQgICAgPC9nPlxuXHRcdFx0PC9zdmc+XCJcblx0XHRzeW1ib2xzLmNvbnN0cmFpbnRzID1cblx0XHRcdGxlYWRpbmcgOiBbb2JqZWN0cywgMTVdXG5cdFx0XHRib3R0b206IDE0XG5cdFx0XHR3aWR0aDoxNlxuXHRcdFx0aGVpZ2h0OjIwXG5cdFx0ZXhwb3J0cy5sYXlvdXQoKVxuXHRcdGZsYWdzID0gbmV3IExheWVyIHN1cGVyTGF5ZXI6ZW1vamlQaWNrZXIsIGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCIsIG9wYWNpdHk6LjRcblx0XHRmbGFncy5odG1sID0gXCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0XHRcdDxzdmcgd2lkdGg9JyN7ZXhwb3J0cy5weCgxMSl9cHgnIGhlaWdodD0nI3tleHBvcnRzLnB4KDE1KX1weCcgdmlld0JveD0nMCAwIDExIDE1JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHhtbG5zOnNrZXRjaD0naHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zJz5cblx0XHRcdCAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNS4yICgyNTIzNSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdFx0XHQgICAgPHRpdGxlPkZsYWc8L3RpdGxlPlxuXHRcdFx0ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdFx0ICAgIDxkZWZzPjwvZGVmcz5cblx0XHRcdCAgICA8ZyBpZD0naU9TLTktS2V5Ym9hcmRzJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJyBza2V0Y2g6dHlwZT0nTVNQYWdlJz5cblx0XHRcdCAgICAgICAgPGcgaWQ9J2lQaG9uZS02LVBvcnRyYWl0LUxpZ2h0LUNvcHknIHNrZXRjaDp0eXBlPSdNU0FydGJvYXJkR3JvdXAnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC0yNzUuMDAwMDAwLCAtNjM5LjAwMDAwMCknPlxuXHRcdFx0ICAgICAgICAgICAgPGcgaWQ9J0tleWJvYXJkcycgc2tldGNoOnR5cGU9J01TTGF5ZXJHcm91cCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMC4wMDAwMDAsIDQwOC4wMDAwMDApJz5cblx0XHRcdCAgICAgICAgICAgICAgICA8ZyBpZD0nRmxhZycgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMjc1LjAwMDAwMCwgMjMxLjUwMDAwMCknIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnPlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0nUG9sZScgZmlsbD0nIzRBNTQ2MScgeD0nMCcgeT0nMCcgd2lkdGg9JzEnIGhlaWdodD0nMTQnPjwvcmVjdD5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0nTTEsMSBDMSwxIDEuMjUsMiAzLjUsMiBDNS43NSwyIDYsMC43NDk5OTk5OTggOCwwLjc1IEMxMCwwLjc0OTk5OTk5OCAxMCwxLjUgMTAsMS41IEwxMCw3LjUgQzEwLDcuNSAxMCw2LjUgOCw2LjUgQzYsNi41IDQuODA2MjM5MTEsOCAzLjUsOCBDMi4xOTM3NjA4OSw4IDEsNyAxLDcgTDEsMSBaJyBzdHJva2U9JyM0QTU0NjEnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnPjwvcGF0aD5cblx0XHRcdCAgICAgICAgICAgICAgICA8L2c+XG5cdFx0XHQgICAgICAgICAgICA8L2c+XG5cdFx0XHQgICAgICAgIDwvZz5cblx0XHRcdCAgICA8L2c+XG5cdFx0XHQ8L3N2Zz5cIlxuXHRcdGZsYWdzLmNvbnN0cmFpbnRzID1cblx0XHRcdGxlYWRpbmcgOiBbc3ltYm9scywgMTVdXG5cdFx0XHRib3R0b206IDE0XG5cdFx0XHR3aWR0aDoxNlxuXHRcdFx0aGVpZ2h0OjIwXG5cdFx0ZXhwb3J0cy5sYXlvdXQoKVxuXG5cdFx0bG9hZEVtb2ppcyA9IChlbSkgLT5cblx0XHRcdHJvdysrIFxuXHRcdFx0aW5kZXggPSBlbW9qaXNBcnJheS5pbmRleE9mKGVtKVxuXHRcdFx0Y29sID0gTWF0aC5mbG9vcihpbmRleC81KVxuXHRcdFx0aWYgcm93ID4gNFxuXHRcdFx0XHRyb3cgPSAwIFxuXHRcdFx0ZW1vamkgPSBuZXcgTGF5ZXIgeDpjb2wqYm94ICsgKGVtb2ppU3BhY2VyICogY29sKSArIGV4cG9ydHMucHgoMyksIHk6cm93KmJveCArIChlbW9qaVNwYWNlciAqIHJvdykgKyBleHBvcnRzLnB4KDQwKSwgc3VwZXJMYXllcjplbW9qaUdhbGxleS5jb250ZW50LCB3aWR0aDpib3gsIGhlaWdodDpib3gsIG5hbWU6ZGVjb2RlVVJJQ29tcG9uZW50KGVtKSwgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIlxuXHRcdFx0ZW1vamkuaHRtbCA9IGRlY29kZVVSSUNvbXBvbmVudChlbSlcblx0XHRcdGVtb2ppLnN0eWxlID0ge1xuXHRcdFx0XHRcImZvbnQtc2l6ZVwiIDogZXhwb3J0cy5weCgyNikgKyBcInB4XCJcblx0XHRcdFx0XCJsaW5lLWhlaWdodFwiIDogYm94ICsgXCJweFwiXG5cdFx0XHRcdFwidGV4dC1hbGlnblwiIDogXCJjZW50ZXJcIlxuXHRcdFx0fVxuXHRcdFx0ZW1vamkub24gRXZlbnRzLkNsaWNrLCAtPlxuXHRcdFx0XHRwcmludCBALm5hbWVcblx0XHRcdGVtb2ppc0xvYWRlZCsrXG5cdFx0XHRwcmludCBlbW9qaXNMb2FkZWRcblxuXHRcdGluYyA9IDIwMFxuXHRcdGZpcnN0TG9hZCA9IC4xXG5cdFx0dGltZUluYyA9IDJcblx0XHRmdWxsQW1vdW50ID0gZW1vamlzQXJyYXkubGVuZ3RoXG5cdFx0bG9hZHMgPSBNYXRoLmNlaWwoZnVsbEFtb3VudCAvIGluYykgLSAxXG5cdFx0cGFydGlhbEFtb3VudCA9IGZ1bGxBbW91bnQgJSBpbmNcblx0XHRlbW9qaXNMb2FkZWQgPSAwXG5cdFx0Zm9yIGkgaW4gWzAuLmxvYWRzXVxuXHRcdFx0aSsrXG5cdFx0XHRcblx0XHQjU2Nyb2xsIExvYWRcblx0XHRlbW9qaUdhbGxleS5vbiBFdmVudHMuTW92ZSwgLT5cblx0XHRcdGlmIGVtb2ppR2FsbGV5LnNjcm9sbFggPiAyMDAwICYmIGVtb2ppc0xvYWRlZCA8IDQwMFxuXHRcdFx0XHRmb3IgZW0gaW4gZW1vamlzQXJyYXlbMjAwLi4uNDAwXVxuXHRcdFx0XHRcdGxvYWRFbW9qaXMoZW0pXG5cdFx0XHRcdGVtb2ppR2FsbGV5LnNjcm9sbFggPSAyMDAxXG5cdFx0XHRpZiBlbW9qaUdhbGxleS5zY3JvbGxYID4gNTAwMCAmJiBlbW9qaXNMb2FkZWQgPCA2MDBcblx0XHRcdFx0Zm9yIGVtIGluIGVtb2ppc0FycmF5WzQwMC4uLjYwMF1cblx0XHRcdFx0XHRsb2FkRW1vamlzKGVtKVxuXHRcdFx0XHRlbW9qaUdhbGxleS5zY3JvbGxYID0gNTAwMVxuXHRcdFx0aWYgZW1vamlHYWxsZXkuc2Nyb2xsWCA+IDc1MDAgJiYgZW1vamlzTG9hZGVkIDwgODAwXG5cdFx0XHRcdGZvciBlbSBpbiBlbW9qaXNBcnJheVs2MDAuLi44MDBdXG5cdFx0XHRcdFx0bG9hZEVtb2ppcyhlbSlcblx0XHRcdFx0ZW1vamlHYWxsZXkuc2Nyb2xsWCA9IDc1MDFcblx0XHRcdGlmIGVtb2ppR2FsbGV5LnNjcm9sbFggPiAxMDAwMCAmJiBlbW9qaXNMb2FkZWQgPCAxMDAwXG5cdFx0XHRcdGZvciBlbSBpbiBlbW9qaXNBcnJheVs4MDAuLi4xMDAwXVxuXHRcdFx0XHRcdGxvYWRFbW9qaXMoZW0pXG5cdFx0XHRcdGVtb2ppR2FsbGV5LnNjcm9sbFggPSAxMDAwMVxuXHRcdFx0aWYgZW1vamlHYWxsZXkuc2Nyb2xsWCA+IDEyNTAwICYmIGVtb2ppc0xvYWRlZCA8IDEyMDBcblx0XHRcdFx0Zm9yIGVtIGluIGVtb2ppc0FycmF5WzEwMDAuLi4xMjk3XVxuXHRcdFx0XHRcdGxvYWRFbW9qaXMoZW0pXG5cdFx0XHRcdGVtb2ppR2FsbGV5LnNjcm9sbFggPSAxMjUwMVxuXG5cdFx0I1RpbWUgTG9hZFxuXHRcdFV0aWxzLmRlbGF5IDEsIC0+IFxuXHRcdFx0aWYgZW1vamlzTG9hZGVkIDwgNDAwICYmIGVtb2ppR2FsbGV5LnNjcm9sbFggPT0gMFxuXHRcdFx0XHRzY3JvbGxYID0gZW1vamlHYWxsZXkuc2Nyb2xsWFxuXHRcdFx0XHRmb3IgZW0gaW4gZW1vamlzQXJyYXlbMjAwLi4uNDAwXVxuXHRcdFx0XHRcdGxvYWRFbW9qaXMoZW0pXG5cdFx0VXRpbHMuZGVsYXkgMi41LCAtPiBcblx0XHRcdGlmIGVtb2ppc0xvYWRlZCA8IDYwMCAmJiBlbW9qaUdhbGxleS5zY3JvbGxYID09IDBcblx0XHRcdFx0c2Nyb2xsWCA9IGVtb2ppR2FsbGV5LnNjcm9sbFhcblx0XHRcdFx0Zm9yIGVtIGluIGVtb2ppc0FycmF5WzQwMC4uLjYwMF1cblx0XHRcdFx0XHRsb2FkRW1vamlzKGVtKVxuXHRcdFV0aWxzLmRlbGF5IDIuNSwgLT4gXG5cdFx0XHRpZiBlbW9qaXNMb2FkZWQgPCA4MDAgJiYgZW1vamlHYWxsZXkuc2Nyb2xsWCA9PSAwXG5cdFx0XHRcdHNjcm9sbFggPSBlbW9qaUdhbGxleS5zY3JvbGxYXG5cdFx0XHRcdGZvciBlbSBpbiBlbW9qaXNBcnJheVs2MDAuLi44MDBdXG5cdFx0XHRcdFx0bG9hZEVtb2ppcyhlbSlcblx0XHRVdGlscy5kZWxheSA1LjUsIC0+IFxuXHRcdFx0aWYgZW1vamlzTG9hZGVkIDwgMTAwMCAmJiBlbW9qaUdhbGxleS5zY3JvbGxYID09IDBcblx0XHRcdFx0c2Nyb2xsWCA9IGVtb2ppR2FsbGV5LnNjcm9sbFhcblx0XHRcdFx0Zm9yIGVtIGluIGVtb2ppc0FycmF5WzgwMC4uLjEwMDBdXG5cdFx0XHRcdFx0bG9hZEVtb2ppcyhlbSlcblx0XHRVdGlscy5kZWxheSA3LCAtPiBcblx0XHRcdGlmIGVtb2ppc0xvYWRlZCA8IDEyOTcgJiYgZW1vamlHYWxsZXkuc2Nyb2xsWCA9PSAwXG5cdFx0XHRcdHNjcm9sbFggPSBlbW9qaUdhbGxleS5zY3JvbGxYXG5cdFx0XHRcdGZvciBlbSBpbiBlbW9qaXNBcnJheVsxMDAwLi4uMTI5N11cblx0XHRcdFx0XHRsb2FkRW1vamlzKGVtKVxuXG5cblx0XHRmb3IgZW0gaW4gZnJlcUVtb2ppc0FycmF5XG5cdFx0XHRsb2FkRW1vamlzKGVtKVxuXHRcdGZvciBlbSBpbiBlbW9qaXNBcnJheVswLi4uaW5jXVxuXHRcdFx0bG9hZEVtb2ppcyhlbSlcblxuXG5cdFx0Zm9yIHNlYyBpbiBlbW9qaVNlY3Rpb25zXG5cdFx0XHRpbmRleCA9IGVtb2ppU2VjdGlvbnMuaW5kZXhPZihzZWMpXG5cdFx0XHR0aXRsZSA9IG5ldyBMYXllciBzdXBlckxheWVyOmVtb2ppR2FsbGV5LmNvbnRlbnQsIGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCIsIHg6aW5kZXgqNTAwMCArIGV4cG9ydHMucHgoOCksIGhlaWdodDo4MCwgd2lkdGg6ODAwXG5cdFx0XHR0aXRsZS5odG1sID0gc2VjXG5cdFx0XHR0aXRsZS5zdHlsZSA9IHtcblx0XHRcdFx0XCJmb250LXNpemVcIiA6IGV4cG9ydHMucHgoMTIpICsgXCJweFwiXG5cdFx0XHRcdFwiZm9udC13ZWlnaHRcIiA6IDYwMFxuXHRcdFx0XHRcImZvbnQtZmFtaWx5XCIgOiAnLWFwcGxlLXN5c3RlbSwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZidcblx0XHRcdFx0J2xpbmUtaGVpZ2h0JyA6IGV4cG9ydHMucHgoNDIpICsgXCJweFwiXG5cdFx0XHRcdCdsZXR0ZXItc3BhY2luZycgOiBleHBvcnRzLnB4KDAuNykgKyBcInB4XCJcblx0XHRcdFx0J2NvbG9yJyA6IFwiI0E1QTZBOVwiXG5cdFx0XHRcdCd0ZXh0LXRyYW5zZm9ybScgOiAndXBwZXJjYXNlJ1xuXHRcdFx0fVxuXG5cblx0ZW1vamlLZXkub24gRXZlbnRzLlRvdWNoRW5kLCAtPlxuXHRcdGVtb2ppS2V5LmJhY2tncm91bmRDb2xvciA9IFwiI0FBQjNCQ1wiXG5cblxuXHRyZXR1cm5LZXkgPSBuZXcgTGF5ZXIgc3VwZXJMYXllcjpib2FyZCwgYm9yZGVyUmFkaXVzOmV4cG9ydHMucHgoNSksIGJhY2tncm91bmRDb2xvcjpcIiNBQUIzQkNcIiwgc2hhZG93WTpleHBvcnRzLnB4KDEpLCBzaGFkb3dDb2xvcjpcIiM5Mjk0OThcIiwgY29sb3I6XCJibGFja1wiXG5cdHJldHVybktleS5jb25zdHJhaW50cyA9ICh3aWR0aDo4Ny41LCBoZWlnaHQ6NDIsIHRyYWlsaW5nOjMsIGJvdHRvbTo0KVxuXHRyZXR1cm5LZXkuaHRtbCA9IFwicmV0dXJuXCJcblx0cmV0dXJuS2V5LnN0eWxlID0ge1xuXHRcdFwiZm9udC1zaXplXCIgOiBleHBvcnRzLnB4KDE2KSArIFwicHhcIlxuXHRcdFwiZm9udC13ZWlnaHRcIiA6IDQwMFxuXHRcdFwiZm9udC1mYW1pbHlcIiA6ICctYXBwbGUtc3lzdGVtLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmJ1xuXHRcdCd0ZXh0LWFsaWduJyA6ICdjZW50ZXInXG5cdFx0J2xpbmUtaGVpZ2h0JyA6IGV4cG9ydHMucHgoNDIpICsgXCJweFwiXG5cblx0fVxuXHRleHBvcnRzLmxheW91dCgpXG5cblx0c3BhY2VLZXkgPSBuZXcgTGF5ZXIgc3VwZXJMYXllcjpib2FyZCwgYm9yZGVyUmFkaXVzOmV4cG9ydHMucHgoNSksIGJhY2tncm91bmRDb2xvcjpcIndoaXRlXCIsIHNoYWRvd1k6ZXhwb3J0cy5weCgxKSwgc2hhZG93Q29sb3I6XCIjOTI5NDk4XCIsIGNvbG9yOlwiYmxhY2tcIlxuXHRzcGFjZUtleS5jb25zdHJhaW50cyA9ICh3aWR0aDoxODAsIGhlaWdodDo0MiwgbGVhZGluZzpbZW1vamlLZXksIDZdLCBib3R0b206NClcblx0c3BhY2VLZXkuaHRtbCA9IFwic3BhY2VcIlxuXHRzcGFjZUtleS5zdHlsZSA9IHtcblx0XHRcImZvbnQtc2l6ZVwiIDogZXhwb3J0cy5weCgxNikgKyBcInB4XCJcblx0XHRcImZvbnQtd2VpZ2h0XCIgOiA0MDBcblx0XHRcImZvbnQtZmFtaWx5XCIgOiAnLWFwcGxlLXN5c3RlbSwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZidcblx0XHQndGV4dC1hbGlnbicgOiAnY2VudGVyJ1xuXHRcdCdsaW5lLWhlaWdodCcgOiBleHBvcnRzLnB4KDQyKSArIFwicHhcIlxuXG5cdH1cblx0ZXhwb3J0cy5sYXlvdXQoKVxuXG5cblx0c3BhY2VLZXkub24gRXZlbnRzLlRvdWNoU3RhcnQsIC0+XG5cdFx0c3BhY2VLZXkuYmFja2dyb3VuZENvbG9yID0gXCIjQUFCM0JDXCJcblx0c3BhY2VLZXkub24gRXZlbnRzLlRvdWNoRW5kLCAtPlxuXHRcdHNwYWNlS2V5LmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIlxuXG5cblx0cmV0dXJuS2V5Lm9uIEV2ZW50cy5Ub3VjaFN0YXJ0LCAtPlxuXHRcdHJldHVybktleS5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCJcblx0cmV0dXJuS2V5Lm9uIEV2ZW50cy5Ub3VjaEVuZCwgLT5cblx0XHRyZXR1cm5LZXkuYmFja2dyb3VuZENvbG9yID0gXCIjQUFCM0JDXCJcblxuXG5cdHJldHVybiB7XG5cdFx0XCJib2FyZFwiIDogYm9hcmRcblx0XHRcImtleXNcIiA6IGtleXNBcnJheVxuXHRcdFwia2V5XCIgOiB7XG5cdFx0XHRcInFcIiA6IGtleXNBcnJheVswXVxuXHRcdFx0XCJ3XCIgOiBrZXlzQXJyYXlbMV1cblx0XHRcdFwiZVwiIDoga2V5c0FycmF5WzJdXG5cdFx0XHRcInJcIiA6IGtleXNBcnJheVszXVxuXHRcdFx0XCJ0XCIgOiBrZXlzQXJyYXlbNF1cblx0XHRcdFwieVwiIDoga2V5c0FycmF5WzVdXG5cdFx0XHRcInVcIiA6IGtleXNBcnJheVs2XVxuXHRcdFx0XCJpXCIgOiBrZXlzQXJyYXlbN11cblx0XHRcdFwib1wiIDoga2V5c0FycmF5WzhdXG5cdFx0XHRcInBcIiA6IGtleXNBcnJheVs5XVxuXHRcdFx0XCJhXCIgOiBrZXlzQXJyYXlbMTBdXG5cdFx0XHRcInNcIiA6IGtleXNBcnJheVsxMV1cblx0XHRcdFwiZFwiIDoga2V5c0FycmF5WzEyXVxuXHRcdFx0XCJmXCIgOiBrZXlzQXJyYXlbMTNdXG5cdFx0XHRcImdcIiA6IGtleXNBcnJheVsxNF1cblx0XHRcdFwiaFwiIDoga2V5c0FycmF5WzE1XVxuXHRcdFx0XCJqXCIgOiBrZXlzQXJyYXlbMTZdXG5cdFx0XHRcImtcIiA6IGtleXNBcnJheVsxN11cblx0XHRcdFwibFwiIDoga2V5c0FycmF5WzE4XVxuXHRcdFx0XCJ6XCIgOiBrZXlzQXJyYXlbMTldXG5cdFx0XHRcInhcIiA6IGtleXNBcnJheVsyMF1cblx0XHRcdFwiY1wiIDoga2V5c0FycmF5WzIxXVxuXHRcdFx0XCJ2XCIgOiBrZXlzQXJyYXlbMjJdXG5cdFx0XHRcImJcIiA6IGtleXNBcnJheVsyM11cblx0XHRcdFwiblwiIDoga2V5c0FycmF5WzI0XVxuXHRcdFx0XCJtXCIgOiBrZXlzQXJyYXlbMjVdXG5cdFx0fVxuXHR9XG5cblxuIiwiIyBBZGQgdGhlIGZvbGxvd2luZyBsaW5lIHRvIHlvdXIgcHJvamVjdCBpbiBGcmFtZXIgU3R1ZGlvLiBcbiMgbXlNb2R1bGUgPSByZXF1aXJlIFwibXlNb2R1bGVcIlxuIyBSZWZlcmVuY2UgdGhlIGNvbnRlbnRzIGJ5IG5hbWUsIGxpa2UgbXlNb2R1bGUubXlGdW5jdGlvbigpIG9yIG15TW9kdWxlLm15VmFyXG5cbmV4cG9ydHMubXlWYXIgPSBcIm15VmFyaWFibGVcIlxuXG5leHBvcnRzLm15RnVuY3Rpb24gPSAtPlxuXHRwcmludCBcIm15RnVuY3Rpb24gaXMgcnVubmluZ1wiXG5cbmV4cG9ydHMubXlBcnJheSA9IFsxLCAyLCAzXSJdfQ==
