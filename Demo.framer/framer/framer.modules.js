require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"iOSKit":[function(require,module,exports){
var defaults, error, framerDevices, layoutChange, layoutSize, onResize, setProps, textAutoSize, textSizing;

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
    return print("Error Invalid Relationship – Layer id:" + context.id + " has a relationship with another layer not in the same superLayer.");
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
  var c, j, k, len, len1, p, ref, ref1, results;
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
      results.push((function() {
        var l, len2, ref2, results1;
        ref2 = defaults.constraintTypes;
        results1 = [];
        for (l = 0, len2 = ref2.length; l < len2; l++) {
          c = ref2[l];
          results1.push(layoutChange(layer, c));
        }
        return results1;
      })());
    } else {
      results.push(void 0);
    }
  }
  return results;
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
      if (layer.constraints[opp]) {
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
        layer.style["font-weight"] = style[p];
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
  if (textLayer.height === -2 && textLayer.width === -2) {
    layerHeight = parseInt(textLayer.style['font-size'].slice(0, -2));
  }
  if (textLayer.height !== -2 && textLayer.width !== -2) {
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
  if (textLayer.width !== -2 && textLayer.height === -2) {
    lineCount = Math.ceil(layerWidth / setWidth);
    if (lineCount > wordCount) {
      lineCount = wordCount;
    }
    layerHeight = parseInt(textLayer.style["font-size"].slice(0, -2)) * lineCount + parseInt(textLayer.style["line-height"].slice(0, -2)) * (lineCount - 1.5);
    if (layerHeight < parseInt(textLayer.style['font-size'].slice(0, -2))) {
      layerHeight = parseInt(textLayer.style['font-size'].slice(0, -2));
    }
  }
  if (textLayer.width !== -2) {
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
    trailing: 1,
    leading: 1
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvS2V2eW4vRHJvcGJveCAoUGVyc29uYWwpL0ZyYW1lciBQcm90b3R5cGVzL2ZyYW1lci1pb3Mta2l0L0RlbW8uZnJhbWVyL21vZHVsZXMvaU9TS2l0LmNvZmZlZSIsIi9Vc2Vycy9LZXZ5bi9Ecm9wYm94IChQZXJzb25hbCkvRnJhbWVyIFByb3RvdHlwZXMvZnJhbWVyLWlvcy1raXQvRGVtby5mcmFtZXIvbW9kdWxlcy9teU1vZHVsZS5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNFQSxJQUFBOztBQUFBLGFBQUEsR0FBZ0I7RUFFaEIsWUFBQSxFQUFlO0lBQUUsTUFBQSxFQUFRLE1BQU0sQ0FBQyxXQUFqQjtJQUE4QixLQUFBLEVBQU8sTUFBTSxDQUFDLFVBQTVDO0lBQXdELEtBQUEsRUFBTSxDQUE5RDtJQUFpRSxNQUFBLEVBQU8sS0FBeEU7SUFBK0UsUUFBQSxFQUFTLEtBQXhGO0dBRkM7RUFNaEIsNEJBQUEsRUFBOEI7SUFBRSxNQUFBLEVBQVEsSUFBVjtJQUFnQixLQUFBLEVBQU8sR0FBdkI7SUFBNEIsS0FBQSxFQUFPLENBQW5DO0lBQXNDLE1BQUEsRUFBTyxJQUE3QztJQUFtRCxRQUFBLEVBQVMsS0FBNUQ7R0FOZDtFQU9oQix3QkFBQSxFQUEwQjtJQUFFLE1BQUEsRUFBUSxJQUFWO0lBQWdCLEtBQUEsRUFBTyxHQUF2QjtJQUE0QixLQUFBLEVBQU8sQ0FBbkM7SUFBc0MsTUFBQSxFQUFPLElBQTdDO0lBQW1ELFFBQUEsRUFBUyxLQUE1RDtHQVBWO0VBUWhCLHNCQUFBLEVBQXdCO0lBQUUsTUFBQSxFQUFRLElBQVY7SUFBZ0IsS0FBQSxFQUFPLEdBQXZCO0lBQTRCLEtBQUEsRUFBTyxDQUFuQztJQUFzQyxNQUFBLEVBQU8sSUFBN0M7SUFBbUQsUUFBQSxFQUFTLEtBQTVEO0dBUlI7RUFXaEIsdUJBQUEsRUFBeUI7SUFBRSxNQUFBLEVBQVEsSUFBVjtJQUFnQixLQUFBLEVBQU8sR0FBdkI7SUFBNEIsS0FBQSxFQUFPLENBQW5DO0lBQXNDLE1BQUEsRUFBTyxJQUE3QztJQUFtRCxRQUFBLEVBQVMsS0FBNUQ7R0FYVDtFQVloQixzQkFBQSxFQUF3QjtJQUFFLE1BQUEsRUFBUSxJQUFWO0lBQWdCLEtBQUEsRUFBTyxHQUF2QjtJQUE0QixLQUFBLEVBQU8sQ0FBbkM7SUFBc0MsTUFBQSxFQUFPLElBQTdDO0lBQW1ELFFBQUEsRUFBUyxLQUE1RDtHQVpSO0VBYWhCLHFCQUFBLEVBQXVCO0lBQUUsTUFBQSxFQUFRLElBQVY7SUFBZ0IsS0FBQSxFQUFPLEdBQXZCO0lBQTRCLEtBQUEsRUFBTyxDQUFuQztJQUFzQyxNQUFBLEVBQU8sSUFBN0M7SUFBbUQsUUFBQSxFQUFTLEtBQTVEO0dBYlA7RUFjaEIsdUJBQUEsRUFBeUI7SUFBRSxNQUFBLEVBQVEsSUFBVjtJQUFnQixLQUFBLEVBQU8sR0FBdkI7SUFBNEIsS0FBQSxFQUFPLENBQW5DO0lBQXNDLE1BQUEsRUFBTyxJQUE3QztJQUFtRCxRQUFBLEVBQVMsS0FBNUQ7R0FkVDtFQWVoQix3QkFBQSxFQUEwQjtJQUFFLE1BQUEsRUFBUSxJQUFWO0lBQWdCLEtBQUEsRUFBTyxHQUF2QjtJQUE0QixLQUFBLEVBQU8sQ0FBbkM7SUFBc0MsTUFBQSxFQUFPLElBQTdDO0lBQW1ELFFBQUEsRUFBUyxLQUE1RDtHQWZWO0VBZ0JoQixzQkFBQSxFQUF3QjtJQUFFLE1BQUEsRUFBUSxJQUFWO0lBQWdCLEtBQUEsRUFBTyxHQUF2QjtJQUE0QixLQUFBLEVBQU8sQ0FBbkM7SUFBc0MsTUFBQSxFQUFPLElBQTdDO0lBQW1ELFFBQUEsRUFBUyxLQUE1RDtHQWhCUjtFQWtCaEIsNEJBQUEsRUFBK0I7SUFBRSxNQUFBLEVBQVEsSUFBVjtJQUFnQixLQUFBLEVBQU8sR0FBdkI7SUFBNEIsS0FBQSxFQUFPLENBQW5DO0lBQXNDLE1BQUEsRUFBTyxJQUE3QztJQUFtRCxRQUFBLEVBQVMsS0FBNUQ7R0FsQmY7RUFtQmhCLHdCQUFBLEVBQTBCO0lBQUUsTUFBQSxFQUFRLElBQVY7SUFBZ0IsS0FBQSxFQUFPLEdBQXZCO0lBQTRCLEtBQUEsRUFBTyxDQUFuQztJQUFzQyxNQUFBLEVBQU8sSUFBN0M7SUFBbUQsUUFBQSxFQUFTLEtBQTVEO0dBbkJWO0VBb0JoQixzQkFBQSxFQUF3QjtJQUFFLE1BQUEsRUFBUSxJQUFWO0lBQWdCLEtBQUEsRUFBTyxHQUF2QjtJQUE0QixLQUFBLEVBQU8sQ0FBbkM7SUFBc0MsTUFBQSxFQUFPLElBQTdDO0lBQW1ELFFBQUEsRUFBUyxLQUE1RDtHQXBCUjtFQXFCaEIsMkJBQUEsRUFBNkI7SUFBRSxNQUFBLEVBQVEsSUFBVjtJQUFnQixLQUFBLEVBQU8sR0FBdkI7SUFBNEIsS0FBQSxFQUFPLENBQW5DO0lBQXNDLE1BQUEsRUFBTyxJQUE3QztJQUFtRCxRQUFBLEVBQVMsS0FBNUQ7R0FyQmI7RUF1QmhCLDJCQUFBLEVBQTZCO0lBQUUsTUFBQSxFQUFRLElBQVY7SUFBZ0IsS0FBQSxFQUFPLElBQXZCO0lBQTZCLEtBQUEsRUFBTyxDQUFwQztJQUF1QyxNQUFBLEVBQU8sSUFBOUM7SUFBb0QsUUFBQSxFQUFTLEtBQTdEO0dBdkJiO0VBd0JoQiw2QkFBQSxFQUErQjtJQUFFLE1BQUEsRUFBUSxJQUFWO0lBQWdCLEtBQUEsRUFBTyxJQUF2QjtJQUE2QixLQUFBLEVBQU8sQ0FBcEM7SUFBdUMsTUFBQSxFQUFPLElBQTlDO0lBQW9ELFFBQUEsRUFBUyxLQUE3RDtHQXhCZjtFQXlCaEIsaUNBQUEsRUFBbUM7SUFBRSxNQUFBLEVBQVEsSUFBVjtJQUFnQixLQUFBLEVBQU8sSUFBdkI7SUFBNkIsS0FBQSxFQUFPLENBQXBDO0lBQXVDLE1BQUEsRUFBTyxJQUE5QztJQUFvRCxRQUFBLEVBQVMsS0FBN0Q7R0F6Qm5CO0VBMEJoQixnQ0FBQSxFQUFrQztJQUFFLE1BQUEsRUFBUSxJQUFWO0lBQWdCLEtBQUEsRUFBTyxJQUF2QjtJQUE2QixLQUFBLEVBQU8sQ0FBcEM7SUFBdUMsTUFBQSxFQUFPLElBQTlDO0lBQW9ELFFBQUEsRUFBUyxLQUE3RDtHQTFCbEI7RUFnQ2hCLHVCQUFBLEVBQXlCO0lBQUUsTUFBQSxFQUFRLElBQVY7SUFBZ0IsS0FBQSxFQUFPLElBQXZCO0lBQTZCLEtBQUEsRUFBTyxDQUFwQztJQUF1QyxNQUFBLEVBQU8sSUFBOUM7SUFBb0QsUUFBQSxFQUFTLEtBQTdEO0dBaENUO0VBaUNoQix5QkFBQSxFQUEyQjtJQUFFLE1BQUEsRUFBUSxJQUFWO0lBQWdCLEtBQUEsRUFBTyxJQUF2QjtJQUE2QixLQUFBLEVBQU8sQ0FBcEM7SUFBdUMsTUFBQSxFQUFPLElBQTlDO0lBQW9ELFFBQUEsRUFBUyxLQUE3RDtHQWpDWDtFQWtDaEIsNkJBQUEsRUFBK0I7SUFBRSxNQUFBLEVBQVEsSUFBVjtJQUFnQixLQUFBLEVBQU8sSUFBdkI7SUFBNkIsS0FBQSxFQUFPLENBQXBDO0lBQXVDLE1BQUEsRUFBTyxJQUE5QztJQUFvRCxRQUFBLEVBQVMsS0FBN0Q7R0FsQ2Y7RUFxQ2hCLHdCQUFBLEVBQTBCO0lBQUUsTUFBQSxFQUFRLElBQVY7SUFBZ0IsS0FBQSxFQUFPLElBQXZCO0lBQTZCLEtBQUEsRUFBTyxDQUFwQztJQUF1QyxNQUFBLEVBQU8sSUFBOUM7SUFBb0QsUUFBQSxFQUFTLEtBQTdEO0dBckNWO0VBc0NoQiw4QkFBQSxFQUFnQztJQUFFLE1BQUEsRUFBUSxJQUFWO0lBQWdCLEtBQUEsRUFBTyxJQUF2QjtJQUE2QixLQUFBLEVBQU8sQ0FBcEM7SUFBdUMsTUFBQSxFQUFPLElBQTlDO0lBQW9ELFFBQUEsRUFBUyxLQUE3RDtHQXRDaEI7RUF1Q2hCLDBCQUFBLEVBQTJCO0lBQUUsTUFBQSxFQUFRLElBQVY7SUFBZ0IsS0FBQSxFQUFPLElBQXZCO0lBQTZCLEtBQUEsRUFBTyxDQUFwQztJQUF1QyxNQUFBLEVBQU8sSUFBOUM7SUFBb0QsUUFBQSxFQUFTLEtBQTdEO0dBdkNYO0VBMENoQixxQkFBQSxFQUF1QjtJQUFFLE1BQUEsRUFBUSxJQUFWO0lBQWdCLEtBQUEsRUFBTyxJQUF2QjtJQUE2QixLQUFBLEVBQU8sQ0FBcEM7SUFBdUMsTUFBQSxFQUFPLElBQTlDO0lBQW9ELFFBQUEsRUFBUyxLQUE3RDtHQTFDUDtFQTJDaEIsdUJBQUEsRUFBeUI7SUFBRSxNQUFBLEVBQVEsSUFBVjtJQUFnQixLQUFBLEVBQU8sSUFBdkI7SUFBNkIsS0FBQSxFQUFPLENBQXBDO0lBQXVDLE1BQUEsRUFBTyxJQUE5QztJQUFvRCxRQUFBLEVBQVMsS0FBN0Q7R0EzQ1Q7RUE0Q2hCLDJCQUFBLEVBQThCO0lBQUUsTUFBQSxFQUFRLElBQVY7SUFBZ0IsS0FBQSxFQUFPLElBQXZCO0lBQTZCLEtBQUEsRUFBTyxDQUFwQztJQUF1QyxNQUFBLEVBQU8sSUFBOUM7SUFBb0QsUUFBQSxFQUFTLEtBQTdEO0dBNUNkOzs7QUErQ2hCLE9BQU8sQ0FBQyxJQUFSLEdBQWU7O0FBQ2YsT0FBTyxDQUFDLEtBQVIsR0FBZ0I7O0FBQ2hCLE9BQU8sQ0FBQyxNQUFSLEdBQWlCOztBQUNqQixPQUFPLENBQUMsS0FBUixHQUFnQjs7QUFDaEIsT0FBTyxDQUFDLE1BQVIsR0FBaUI7O0FBQ2pCLE9BQU8sQ0FBQyxRQUFSLEdBQW1COztBQUNuQixPQUFPLENBQUMsV0FBUixHQUFzQjs7QUFFdEIsT0FBTyxDQUFDLFNBQVIsR0FBb0IsU0FBQTtBQUNuQixNQUFBO0VBQUEsTUFBQSxHQUFTLE1BQU0sQ0FBQyxNQUFNLENBQUM7RUFDdkIsT0FBTyxDQUFDLEtBQVIsR0FBZ0IsYUFBYyxDQUFBLE1BQUEsQ0FBTyxDQUFDO0VBQ3RDLElBQUcsTUFBQSxLQUFVLFlBQWI7SUFDQyxPQUFPLENBQUMsS0FBUixHQUFnQixNQUFNLENBQUM7SUFDdkIsT0FBTyxDQUFDLE1BQVIsR0FBaUIsTUFBTSxDQUFDLFlBRnpCO0dBQUEsTUFBQTtJQUlDLE9BQU8sQ0FBQyxLQUFSLEdBQWdCLGFBQWMsQ0FBQSxNQUFBLENBQU8sQ0FBQztJQUN0QyxPQUFPLENBQUMsTUFBUixHQUFpQixhQUFjLENBQUEsTUFBQSxDQUFPLENBQUM7SUFDdkMsSUFBRyxNQUFNLENBQUMsVUFBUCxLQUFxQixJQUFyQixJQUE2QixNQUFNLENBQUMsVUFBUCxLQUFxQixJQUFyRDtNQUNDLE9BQU8sQ0FBQyxLQUFSLEdBQWdCLE1BQU0sQ0FBQztNQUN2QixPQUFPLENBQUMsTUFBUixHQUFpQixNQUFNLENBQUM7TUFDeEIsT0FBTyxDQUFDLEtBQVIsR0FBZ0IsRUFIakI7S0FORDs7RUFVQSxPQUFPLENBQUMsTUFBUixHQUFpQixhQUFjLENBQUEsTUFBQSxDQUFPLENBQUM7RUFDdkMsT0FBTyxDQUFDLFFBQVIsR0FBbUIsYUFBYyxDQUFBLE1BQUEsQ0FBTyxDQUFDO1NBQ3pDLE9BQU8sQ0FBQyxXQUFSLEdBQXVCLE1BQU0sQ0FBQyxNQUFNLENBQUM7QUFmbEI7O0FBa0JwQixPQUFPLENBQUMsTUFBUixHQUFpQixTQUFBO0FBQ2hCLE1BQUE7RUFBQSxJQUFHLE9BQU8sQ0FBQyxXQUFSLEtBQXVCLENBQUMsRUFBM0I7SUFDQyxVQUFBLEdBQWEsT0FBTyxDQUFDO0lBQ3JCLFNBQUEsR0FBWSxPQUFPLENBQUM7SUFDcEIsT0FBTyxDQUFDLE1BQVIsR0FBaUI7V0FDakIsT0FBTyxDQUFDLEtBQVIsR0FBZ0IsV0FKakI7O0FBRGdCOztBQU9qQixPQUFPLENBQUMsU0FBUixDQUFBOztBQUNBLE9BQU8sQ0FBQyxNQUFSLENBQUE7O0FBSUEsUUFBQSxHQUFXLFNBQUE7RUFDVixPQUFPLENBQUMsU0FBUixDQUFBO1NBQ0EsT0FBTyxDQUFDLE1BQVIsQ0FBQTtBQUZVOztBQU1YLE1BQU0sQ0FBQyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQyxRQUFsQzs7QUFDQSxNQUFNLENBQUMsZ0JBQVAsQ0FBd0IsbUJBQXhCLEVBQThDLFFBQTlDOztBQU9BLFFBQUEsR0FBVztFQUNWLFVBQUEsRUFBWTtJQUNYLEdBQUEsRUFBTSxFQURLO0lBRVgsR0FBQSxFQUFNLEdBRks7SUFHWCxHQUFBLEVBQU0sR0FISztJQUlYLEdBQUEsRUFBTSxHQUpLO0lBS1gsR0FBQSxFQUFNLEdBTEs7SUFNWCxHQUFBLEVBQU0sR0FOSztJQU9YLEdBQUEsRUFBTSxHQVBLO0lBUVgsR0FBQSxFQUFNLEdBUks7SUFTWCxHQUFBLEVBQU0sRUFUSztJQVVYLEdBQUEsRUFBTSxHQVZLO0lBV1gsR0FBQSxFQUFNLEdBWEs7SUFZWCxHQUFBLEVBQU0sR0FaSztJQWFYLEdBQUEsRUFBTSxHQWJLO0lBY1gsR0FBQSxFQUFNLEdBZEs7SUFlWCxHQUFBLEVBQU0sRUFmSztJQWdCWCxHQUFBLEVBQU0sR0FoQks7SUFpQlgsR0FBQSxFQUFNLEVBakJLO0lBa0JYLEdBQUEsRUFBTSxHQWxCSztJQW1CWCxHQUFBLEVBQU0sR0FuQks7SUFvQlgsR0FBQSxFQUFNLEdBcEJLO0lBcUJYLEdBQUEsRUFBTSxFQXJCSztJQXNCWCxHQUFBLEVBQU0sRUF0Qks7SUF1QlgsR0FBQSxFQUFNLElBdkJLO0lBd0JYLEdBQUEsRUFBTSxHQXhCSztJQXlCWCxHQUFBLEVBQU0sR0F6Qks7SUEwQlgsR0FBQSxFQUFNLElBMUJLO0lBMkJYLEdBQUEsRUFBTSxHQTNCSztJQTRCWCxHQUFBLEVBQU0sR0E1Qks7SUE2QlgsR0FBQSxFQUFNLEdBN0JLO0lBOEJYLEdBQUEsRUFBTSxHQTlCSztJQStCWCxHQUFBLEVBQU0sR0EvQks7SUFnQ1gsR0FBQSxFQUFNLEdBaENLO0lBaUNYLEdBQUEsRUFBTSxHQWpDSztJQWtDWCxHQUFBLEVBQU0sR0FsQ0s7SUFtQ1gsR0FBQSxFQUFNLEdBbkNLO0lBb0NYLEdBQUEsRUFBTSxHQXBDSztJQXFDWCxHQUFBLEVBQU0sR0FyQ0s7SUFzQ1gsR0FBQSxFQUFNLElBdENLO0lBdUNYLEdBQUEsRUFBTSxFQXZDSztJQXdDWCxHQUFBLEVBQU0sR0F4Q0s7SUF5Q1gsR0FBQSxFQUFNLEVBekNLO0lBMENYLEdBQUEsRUFBTSxHQTFDSztJQTJDWCxHQUFBLEVBQU0sR0EzQ0s7SUE0Q1gsR0FBQSxFQUFNLEdBNUNLO0lBNkNYLEdBQUEsRUFBTSxJQTdDSztJQThDWCxHQUFBLEVBQU0sR0E5Q0s7SUErQ1gsR0FBQSxFQUFNLEdBL0NLO0lBZ0RYLEdBQUEsRUFBTSxHQWhESztJQWlEWCxHQUFBLEVBQU0sSUFqREs7SUFrRFgsR0FBQSxFQUFNLElBbERLO0lBbURYLEdBQUEsRUFBTSxJQW5ESztJQW9EWCxHQUFBLEVBQU0sR0FwREs7SUFxRFgsR0FBQSxFQUFNLEdBckRLO0lBc0RYLEdBQUEsRUFBTSxJQXRESztJQXVEWCxHQUFBLEVBQU0sR0F2REs7SUF3RFgsR0FBQSxFQUFNLEdBeERLO0lBeURYLEdBQUEsRUFBTSxHQXpESztJQTBEWCxHQUFBLEVBQU0sR0ExREs7SUEyRFgsR0FBQSxFQUFNLEdBM0RLO0lBNERYLEdBQUEsRUFBTSxHQTVESztJQTZEWCxHQUFBLEVBQU0sR0E3REs7SUE4RFgsR0FBQSxFQUFNLElBOURLO0lBK0RYLEdBQUEsRUFBTSxHQS9ESztJQWdFWCxHQUFBLEVBQU0sR0FoRUs7SUFpRVgsR0FBQSxFQUFNLEdBakVLO0lBa0VYLEdBQUEsRUFBTSxHQWxFSztJQW1FWCxHQUFBLEVBQU0sR0FuRUs7SUFvRVgsR0FBQSxFQUFNLElBcEVLO0dBREY7RUF1RVYsZUFBQSxFQUFrQixDQUFDLFFBQUQsRUFBVyxPQUFYLENBdkVSO0VBd0VWLGVBQUEsRUFBaUIsQ0FBQyxLQUFELEVBQVEsU0FBUixFQUFtQixVQUFuQixFQUErQixRQUEvQixDQXhFUDtFQXlFVixXQUFBLEVBQWE7SUFDWixHQUFBLEVBQUs7TUFDSixNQUFBLEVBQVMsR0FETDtNQUVKLFNBQUEsRUFBWSxNQUZSO01BR0osVUFBQSxFQUFhLFFBSFQ7TUFJSixLQUFBLEVBQVEsUUFKSjtLQURPO0lBT1osT0FBQSxFQUFTO01BQ1IsTUFBQSxFQUFTLEdBREQ7TUFFUixTQUFBLEVBQVksTUFGSjtNQUdSLFVBQUEsRUFBYSxPQUhMO01BSVIsS0FBQSxFQUFRLFVBSkE7S0FQRztJQWFaLE1BQUEsRUFBUTtNQUNQLE1BQUEsRUFBUyxNQURGO01BRVAsU0FBQSxFQUFZLFFBRkw7TUFHUCxVQUFBLEVBQWEsR0FITjtNQUlQLEtBQUEsRUFBUSxLQUpEO0tBYkk7SUFtQlosUUFBQSxFQUFVO01BQ1QsTUFBQSxFQUFTLE1BREE7TUFFVCxTQUFBLEVBQVksT0FGSDtNQUdULFVBQUEsRUFBYSxHQUhKO01BSVQsS0FBQSxFQUFRLFNBSkM7S0FuQkU7R0F6RUg7RUFtR1YsYUFBQSxFQUFlLENBQUMsV0FBRCxDQW5HTDtFQW9HVixRQUFBLEVBQVU7SUFDVCxTQUFBLEVBQVUsU0FERDtHQXBHQTtFQXVHVixJQUFBLEVBQU07SUFDTCxRQUFBLEVBQVU7TUFDVCxJQUFBLEVBQU0sZ0JBREc7TUFFVCxDQUFBLEVBQUUsQ0FGTztNQUdULENBQUEsRUFBRSxDQUhPO01BSVQsS0FBQSxFQUFNLENBQUMsQ0FKRTtNQUtULE1BQUEsRUFBTyxDQUFDLENBTEM7TUFNVCxVQUFBLEVBQVcsTUFORjtNQU9ULEtBQUEsRUFBTSxTQVBHO01BUVQsS0FBQSxFQUFNLENBUkc7TUFTVCxLQUFBLEVBQU0sTUFURztNQVVULGVBQUEsRUFBZ0IsYUFWUDtNQVdULEtBQUEsRUFBTSxPQVhHO01BWVQsUUFBQSxFQUFVLEVBWkQ7TUFhVCxVQUFBLEVBQVcsNkNBYkY7TUFjVCxVQUFBLEVBQVcsR0FkRjtNQWVULFVBQUEsRUFBVyxNQWZGO0tBREw7R0F2R0k7OztBQTRIWCxRQUFBLEdBQVcsU0FBQyxNQUFELEVBQVMsSUFBVDtBQUNWLE1BQUE7RUFBQSxJQUFBLEdBQU8sTUFBTSxDQUFDLElBQVAsQ0FBWSxNQUFaO1NBQ1AsSUFBSyxDQUFBLE9BQUEsQ0FBTCxHQUFnQjtBQUZOOztBQUlYLFFBQUEsQ0FBUyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQXZCLEVBQWlDLFFBQVEsQ0FBQyxJQUExQzs7QUFJQSxPQUFPLENBQUMsRUFBUixHQUFhLFNBQUMsRUFBRDtBQUNaLE1BQUE7RUFBQSxFQUFBLEdBQUssRUFBQSxHQUFHLE9BQU8sQ0FBQztFQUNoQixFQUFBLEdBQUssSUFBSSxDQUFDLEtBQUwsQ0FBVyxFQUFYO0FBQ0wsU0FBTztBQUhLOztBQU1iLE9BQU8sQ0FBQyxFQUFSLEdBQWEsU0FBQyxFQUFEO0FBQ1osTUFBQTtFQUFBLEVBQUEsR0FBSyxFQUFBLEdBQUssT0FBTyxDQUFDO0VBQ2xCLEVBQUEsR0FBSyxJQUFJLENBQUMsS0FBTCxDQUFXLEVBQVg7QUFDTCxTQUFPO0FBSEs7O0FBT2IsS0FBQSxHQUFRLFNBQUMsT0FBRCxFQUFVLElBQVY7RUFDUCxJQUFHLElBQUEsS0FBUSxDQUFYO1dBQ0MsS0FBQSxDQUFNLHdDQUFBLEdBQXlDLE9BQU8sQ0FBQyxFQUFqRCxHQUFvRCxvRUFBMUQsRUFERDs7QUFETzs7QUFRUixPQUFPLENBQUMsVUFBUixHQUFxQixTQUFDLE1BQUQsRUFBUyxNQUFUO0FBQ3BCLE1BQUE7RUFBQSxTQUFBLEdBQVksTUFBTSxDQUFDO0VBQ25CLFNBQUEsR0FBWSxNQUFNLENBQUM7RUFDbkIsSUFBRyxTQUFBLEtBQWEsU0FBaEI7QUFDQyxXQUFPLEtBRFI7R0FBQSxNQUFBO0FBR0MsV0FBTyxNQUhSOztBQUhvQjs7QUFTckIsT0FBTyxDQUFDLE1BQVIsR0FBaUIsU0FBQyxLQUFEO0FBQ2hCLE1BQUE7RUFBQSxJQUFHLEtBQUEsS0FBUyxNQUFaO0lBQ0MsSUFBQyxDQUFDLEtBQUYsR0FBVSxNQUFNLENBQUMsY0FBYyxDQUFDLE9BRGpDO0dBQUEsTUFBQTtJQUdDLElBQUMsQ0FBQyxLQUFGLEdBQVUsQ0FBQyxLQUFELEVBSFg7O0FBSUE7QUFBQTtPQUFBLHFDQUFBOztJQUNDLElBQUcsS0FBSyxDQUFDLFdBQU4sS0FBcUIsTUFBeEI7QUFDQztBQUFBLFdBQUEsd0NBQUE7O1FBQ0MsVUFBQSxDQUFXLEtBQVgsRUFBa0IsQ0FBbEI7QUFERDs7O0FBRUE7QUFBQTthQUFBLHdDQUFBOzt3QkFDQyxZQUFBLENBQWEsS0FBYixFQUFvQixDQUFwQjtBQUREOztZQUhEO0tBQUEsTUFBQTsyQkFBQTs7QUFERDs7QUFMZ0I7O0FBY2pCLFVBQUEsR0FBYSxTQUFDLEtBQUQsRUFBUSxJQUFSO0VBQ1osSUFBRyxLQUFLLENBQUMsV0FBWSxDQUFBLElBQUEsQ0FBckI7V0FDQyxLQUFNLENBQUEsSUFBQSxDQUFOLEdBQWMsT0FBTyxDQUFDLEVBQVIsQ0FBVyxLQUFLLENBQUMsV0FBWSxDQUFBLElBQUEsQ0FBN0IsRUFEZjs7QUFEWTs7QUFNYixZQUFBLEdBQWUsU0FBQyxLQUFELEVBQVEsSUFBUjtBQUNkLE1BQUE7RUFBQSxJQUFHLEtBQUssQ0FBQyxXQUFZLENBQUEsSUFBQSxDQUFsQixLQUEyQixNQUE5QjtJQUNDLElBQUEsR0FBTyxRQUFRLENBQUMsV0FBWSxDQUFBLElBQUEsQ0FBSyxDQUFDO0lBQ2xDLE9BQUEsR0FBVSxRQUFRLENBQUMsV0FBWSxDQUFBLElBQUEsQ0FBSyxDQUFDO0lBQ3JDLEdBQUEsR0FBTSxRQUFRLENBQUMsV0FBWSxDQUFBLElBQUEsQ0FBSyxDQUFDO0lBQ2pDLFVBQUEsR0FBYSxRQUFRLENBQUMsV0FBWSxDQUFBLElBQUEsQ0FBSyxDQUFDO0lBRXhDLElBQUcsT0FBQSxLQUFXLE9BQVgsSUFBc0IsT0FBQSxLQUFXLFFBQXBDO01BQ0MsVUFBQSxHQUFhLFFBQVEsQ0FBQyxXQUFZLENBQUEsSUFBQSxDQUFLLENBQUMsU0FEekM7O0lBR0EsSUFBRyxLQUFLLENBQUMsVUFBTixLQUFvQixJQUF2QjtNQUVDLElBQUUsQ0FBQSxVQUFBLENBQUYsR0FBZ0IsS0FBSyxDQUFDLFVBQVcsQ0FBQSxVQUFBLEVBRmxDO0tBQUEsTUFBQTtNQUtDLElBQUUsQ0FBQSxVQUFBLENBQUYsR0FBZ0IsT0FBUSxDQUFBLFVBQUEsRUFMekI7O0lBTUEsSUFBRyxJQUFBLEtBQVEsS0FBUixJQUFpQixJQUFBLEtBQVEsU0FBNUI7TUFFQyxJQUFHLEtBQUssQ0FBQyxXQUFZLENBQUEsSUFBQSxDQUFsQixLQUEyQixRQUFBLENBQVMsS0FBSyxDQUFDLFdBQVksQ0FBQSxJQUFBLENBQTNCLEVBQWtDLEVBQWxDLENBQTlCO1FBQ0MsS0FBTSxDQUFBLElBQUEsQ0FBTixHQUFjLEtBQUssQ0FBQyxXQUFZLENBQUEsSUFBQSxDQUFsQixHQUEwQixPQUFPLENBQUMsTUFEakQ7T0FBQSxNQUFBO1FBR0MsSUFBRyxLQUFLLENBQUMsV0FBWSxDQUFBLElBQUEsQ0FBSyxDQUFDLE1BQXhCLEtBQWtDLE1BQXJDO1VBQ0MsS0FBTSxDQUFBLElBQUEsQ0FBTixHQUFjLEtBQUssQ0FBQyxXQUFZLENBQUEsSUFBQSxDQUFNLENBQUEsT0FBQSxFQUR2Qzs7UUFFQSxJQUFHLEtBQUssQ0FBQyxXQUFZLENBQUEsSUFBQSxDQUFLLENBQUMsTUFBeEIsS0FBa0MsQ0FBckM7VUFDQyxJQUFHLEtBQUssQ0FBQyxXQUFZLENBQUEsSUFBQSxDQUFNLENBQUEsQ0FBQSxDQUF4QixLQUE4QixRQUFBLENBQVMsS0FBSyxDQUFDLFdBQVksQ0FBQSxJQUFBLENBQU0sQ0FBQSxDQUFBLENBQWpDLEVBQXFDLEVBQXJDLENBQWpDO1lBQ0MsS0FBTSxDQUFBLElBQUEsQ0FBTixHQUFjLEtBQUssQ0FBQyxXQUFZLENBQUEsSUFBQSxDQUFNLENBQUEsQ0FBQSxDQUF4QixHQUE2QixPQUFPLENBQUMsTUFEcEQ7V0FBQSxNQUFBO1lBR0MsS0FBTSxDQUFBLElBQUEsQ0FBTixHQUFjLEtBQUssQ0FBQyxXQUFZLENBQUEsSUFBQSxDQUFNLENBQUEsQ0FBQSxDQUFHLENBQUEsT0FBQSxFQUgxQztXQUREOztRQUtBLElBQUcsS0FBSyxDQUFDLFdBQVksQ0FBQSxJQUFBLENBQUssQ0FBQyxNQUF4QixHQUFpQyxDQUFwQztBQUNDO0FBQUEsZUFBQSxxQ0FBQTs7WUFDQyxJQUFHLE1BQUEsS0FBVSxRQUFBLENBQVMsTUFBVCxFQUFpQixFQUFqQixDQUFiO2NBQ0MsSUFBQyxDQUFDLE1BQUYsR0FBVyxPQURaO2FBQUEsTUFBQTtjQUdDLElBQUMsQ0FBQyxRQUFGLEdBQWEsT0FIZDs7QUFERDtVQUtBLEtBQU0sQ0FBQSxJQUFBLENBQU4sR0FBYyxDQUFDLElBQUMsQ0FBQyxNQUFGLEdBQVcsT0FBTyxDQUFDLEtBQXBCLENBQUEsR0FBNkIsSUFBQyxDQUFDLFFBQVMsQ0FBQSxPQUFBLEVBTnZEO1NBVkQ7O01BaUJBLElBQUcsS0FBSyxDQUFDLFdBQVksQ0FBQSxHQUFBLENBQXJCO1FBQ0MsS0FBQSxHQUFRLFFBQVEsQ0FBQyxXQUFZLENBQUEsR0FBQSxDQUFLLENBQUEsU0FBQTtRQUNsQyxJQUFHLEtBQUssQ0FBQyxXQUFZLENBQUEsR0FBQSxDQUFsQixLQUEwQixRQUFBLENBQVMsS0FBSyxDQUFDLFdBQVksQ0FBQSxHQUFBLENBQTNCLEVBQWlDLEVBQWpDLENBQTdCO2lCQUNDLEtBQU0sQ0FBQSxLQUFBLENBQU4sR0FBZSxJQUFFLENBQUEsVUFBQSxDQUFGLEdBQWdCLENBQUMsS0FBTSxDQUFBLElBQUEsQ0FBTixHQUFjLENBQUMsT0FBTyxDQUFDLEtBQVIsR0FBZ0IsS0FBSyxDQUFDLFdBQVksQ0FBQSxHQUFBLENBQW5DLENBQWYsRUFEaEM7U0FBQSxNQUFBO1VBR0MsSUFBRyxLQUFLLENBQUMsV0FBWSxDQUFBLEdBQUEsQ0FBSSxDQUFDLE1BQXZCLEtBQWlDLE1BQXBDO1lBQ0MsS0FBTSxDQUFBLEtBQUEsQ0FBTixHQUFlLEtBQU0sQ0FBQSxJQUFBLENBQU4sR0FBYyxLQUFLLENBQUMsV0FBWSxDQUFBLEdBQUEsQ0FBSyxDQUFBLElBQUE7WUFDcEQsSUFBRyxLQUFNLENBQUEsS0FBQSxDQUFOLEdBQWUsQ0FBbEI7cUJBQ0MsS0FBTSxDQUFBLEtBQUEsQ0FBTixHQUFlLEtBQU0sQ0FBQSxLQUFBLENBQU4sR0FBZSxDQUFDLEVBRGhDO2FBRkQ7V0FIRDtTQUZEO09BbkJEO0tBQUEsTUFBQTtNQThCQyxRQUFBLEdBQVcsUUFBUSxDQUFDLFdBQVksQ0FBQSxJQUFBLENBQUssQ0FBQztNQUN0QyxJQUFHLEtBQUssQ0FBQyxXQUFZLENBQUEsR0FBQSxDQUFsQixLQUEwQixNQUE3QjtRQUVDLElBQUcsS0FBSyxDQUFDLFdBQVksQ0FBQSxJQUFBLENBQWxCLEtBQTJCLFFBQUEsQ0FBUyxLQUFLLENBQUMsV0FBWSxDQUFBLElBQUEsQ0FBM0IsRUFBa0MsRUFBbEMsQ0FBOUI7aUJBRUMsS0FBTSxDQUFBLElBQUEsQ0FBTixHQUFjLElBQUUsQ0FBQSxVQUFBLENBQUYsR0FBZ0IsQ0FBQyxLQUFLLENBQUMsV0FBWSxDQUFBLElBQUEsQ0FBbEIsR0FBMEIsT0FBTyxDQUFDLEtBQW5DLEVBRi9CO1NBQUEsTUFBQTtVQUlDLElBQUcsS0FBSyxDQUFDLFdBQVksQ0FBQSxJQUFBLENBQUssQ0FBQyxNQUF4QixLQUFrQyxNQUFyQztZQUVDLElBQUcsT0FBTyxDQUFDLFVBQVIsQ0FBbUIsS0FBbkIsRUFBMEIsS0FBSyxDQUFDLFdBQVksQ0FBQSxJQUFBLENBQTVDLENBQUg7Y0FDQyxLQUFNLENBQUEsSUFBQSxDQUFOLEdBQWMsS0FBSyxDQUFDLFdBQVksQ0FBQSxJQUFBLENBQU0sQ0FBQSxRQUFBLEVBRHZDO2FBQUEsTUFBQTtjQUdDLEtBQUEsQ0FBTSxLQUFOLEVBQWEsQ0FBYixFQUhEO2FBRkQ7O1VBTUEsSUFBRyxLQUFLLENBQUMsV0FBWSxDQUFBLElBQUEsQ0FBSyxDQUFDLE1BQXhCLEtBQWtDLENBQXJDO1lBRUMsSUFBRyxLQUFLLENBQUMsV0FBWSxDQUFBLElBQUEsQ0FBTSxDQUFBLENBQUEsQ0FBeEIsS0FBOEIsUUFBQSxDQUFTLEtBQUssQ0FBQyxXQUFZLENBQUEsSUFBQSxDQUFNLENBQUEsQ0FBQSxDQUFqQyxFQUFxQyxFQUFyQyxDQUFqQztjQUVDLEtBQU0sQ0FBQSxJQUFBLENBQU4sR0FBYyxJQUFFLENBQUEsT0FBQSxDQUFGLEdBQWEsQ0FBQyxLQUFLLENBQUMsV0FBWSxDQUFBLElBQUEsQ0FBTSxDQUFBLENBQUEsQ0FBeEIsR0FBNkIsT0FBTyxDQUFDLEtBQXRDLEVBRjVCO2FBQUEsTUFBQTtjQUtDLElBQUcsT0FBTyxDQUFDLFVBQVIsQ0FBbUIsS0FBbkIsRUFBMEIsS0FBSyxDQUFDLFdBQVksQ0FBQSxJQUFBLENBQU0sQ0FBQSxDQUFBLENBQWxELENBQUg7Z0JBQ0MsS0FBTSxDQUFBLElBQUEsQ0FBTixHQUFjLEtBQUssQ0FBQyxXQUFZLENBQUEsSUFBQSxDQUFNLENBQUEsQ0FBQSxDQUFHLENBQUEsUUFBQSxFQUQxQztlQUFBLE1BQUE7Z0JBR0MsS0FBQSxDQUFNLEtBQU4sRUFBYSxDQUFiLEVBSEQ7ZUFMRDthQUZEOztVQVdBLElBQUcsS0FBSyxDQUFDLFdBQVksQ0FBQSxJQUFBLENBQUssQ0FBQyxNQUF4QixHQUFpQyxDQUFwQztBQUVDO0FBQUE7aUJBQUEsd0NBQUE7O2NBQ0MsSUFBRyxNQUFBLEtBQVUsUUFBQSxDQUFTLE1BQVQsRUFBaUIsRUFBakIsQ0FBYjtnQkFDQyxJQUFDLENBQUMsTUFBRixHQUFXLE9BRFo7ZUFBQSxNQUFBO2dCQUdDLElBQUMsQ0FBQyxRQUFGLEdBQWEsT0FIZDs7MkJBSUEsS0FBTSxDQUFBLElBQUEsQ0FBTixHQUFjLElBQUMsQ0FBQyxRQUFTLENBQUEsUUFBQSxDQUFYLEdBQXVCLE9BQU8sQ0FBQyxLQUFSLEdBQWdCLElBQUMsQ0FBQztBQUx4RDsyQkFGRDtXQXJCRDtTQUZEO09BL0JEO0tBZkQ7O0FBRGM7O0FBaUZmLE9BQU8sQ0FBQyxNQUFSLEdBQWlCOztBQUtqQixPQUFPLENBQUMsUUFBUixHQUFtQixTQUFDLEtBQUQ7QUFDbEIsTUFBQTtFQUFBLEdBQUEsR0FBTSxNQUFNLENBQUMsSUFBUCxDQUFZLEtBQVosQ0FBbUIsQ0FBQSxDQUFBO1NBQ3pCLE9BQU8sQ0FBQyxNQUFPLENBQUEsR0FBQSxDQUFmLEdBQXNCLEtBQU0sQ0FBQSxHQUFBO0FBRlY7O0FBSW5CLE9BQU8sQ0FBQyxLQUFSLEdBQWdCLFNBQUMsS0FBRCxFQUFRLEtBQVI7QUFDZixNQUFBO0VBQUEsS0FBQSxHQUFRLE9BQU8sQ0FBQyxNQUFPLENBQUEsS0FBQTtFQUN2QixLQUFBLEdBQVEsTUFBTSxDQUFDLElBQVAsQ0FBWSxLQUFaO0VBQ1IsV0FBQSxHQUFjLENBQUMsT0FBRCxFQUFVLFFBQVYsRUFBb0IsWUFBcEIsRUFBa0MsU0FBbEMsRUFBNkMsT0FBN0MsRUFBc0QsaUJBQXRELEVBQXlFLEdBQXpFLEVBQThFLEdBQTlFLEVBQW1GLE1BQW5GLEVBQTJGLE1BQTNGLEVBQW1HLE1BQW5HLEVBQTJHLE1BQTNHLEVBQW1ILFNBQW5ILEVBQThILE1BQTlILEVBQXNJLGtCQUF0SSxFQUEwSixnQkFBMUosRUFBNEssY0FBNUssRUFBNEwsR0FBNUwsRUFBaU0sUUFBak0sRUFBMk0sUUFBM00sRUFBcU4sUUFBck4sRUFBK04sT0FBL04sRUFBd08sT0FBeE8sRUFBaVAsT0FBalAsRUFBMFAsTUFBMVAsRUFBa1EsU0FBbFEsRUFBNlEsU0FBN1EsRUFBd1IsU0FBeFIsRUFBbVMsYUFBblMsRUFBa1Qsb0JBQWxULEVBQXdVLG9CQUF4VSxFQUE4VixXQUE5VixFQUEyVyxXQUEzVyxFQUF3WCxXQUF4WCxFQUFxWSxVQUFyWSxFQUFpWixNQUFqWixFQUF5WixZQUF6WixFQUF1YSxVQUF2YSxFQUFtYixXQUFuYixFQUFnYyxVQUFoYyxFQUE0YyxRQUE1YyxFQUFzZCxXQUF0ZCxFQUFtZSxPQUFuZSxFQUE0ZSxTQUE1ZSxFQUF1ZixTQUF2ZixFQUFrZ0IsWUFBbGdCLEVBQWdoQixjQUFoaEIsRUFBZ2lCLGFBQWhpQixFQUEraUIsYUFBL2lCLEVBQThqQixhQUE5akIsRUFBNmtCLFNBQTdrQixFQUF3bEIsTUFBeGxCLEVBQWdtQixpQkFBaG1CLEVBQW1uQixNQUFubkIsRUFBMm5CLFFBQTNuQixFQUFxb0IsV0FBcm9CLEVBQWtwQixpQkFBbHBCLEVBQXFxQixVQUFycUIsRUFBaXJCLGNBQWpyQixFQUFpc0IsT0FBanNCLEVBQTBzQixNQUExc0IsRUFBa3RCLE9BQWx0QixFQUEydEIsTUFBM3RCLEVBQW11QixPQUFudUIsRUFBNHVCLFNBQTV1QixFQUF1dkIsU0FBdnZCLEVBQWt3QixrQkFBbHdCLEVBQXN4QiwyQkFBdHhCLEVBQW16QixtQkFBbnpCLEVBQXcwQixrQkFBeDBCLEVBQTQxQixhQUE1MUI7RUFDZCxRQUFBLEdBQVcsQ0FBQyxZQUFELEVBQWUsVUFBZixFQUEyQixXQUEzQixFQUF3QyxZQUF4QyxFQUFzRCxZQUF0RDtBQUNYO09BQUEsdUNBQUE7O0lBQ0MsSUFBRyxXQUFXLENBQUMsT0FBWixDQUFvQixDQUFwQixDQUFBLEtBQTBCLENBQUMsQ0FBOUI7TUFDQyxJQUFHLEtBQU0sQ0FBQSxDQUFBLENBQU4sS0FBWSxRQUFBLENBQVMsS0FBTSxDQUFBLENBQUEsQ0FBZixFQUFtQixFQUFuQixDQUFmO1FBQ0MsS0FBTSxDQUFBLENBQUEsQ0FBTixHQUFXLE9BQU8sQ0FBQyxFQUFSLENBQVcsS0FBTSxDQUFBLENBQUEsQ0FBakIsRUFEWjtPQUFBLE1BQUE7UUFHQyxLQUFNLENBQUEsQ0FBQSxDQUFOLEdBQVcsS0FBTSxDQUFBLENBQUEsRUFIbEI7T0FERDs7SUFLQSxJQUFHLFFBQVEsQ0FBQyxPQUFULENBQWlCLENBQWpCLENBQUEsS0FBdUIsQ0FBQyxDQUEzQjtNQUNDLElBQUcsQ0FBQSxLQUFLLFVBQVI7UUFDQyxLQUFLLENBQUMsS0FBTSxDQUFBLFdBQUEsQ0FBWixHQUEyQixPQUFPLENBQUMsRUFBUixDQUFXLEtBQU0sQ0FBQSxDQUFBLENBQWpCLENBQUEsR0FBdUIsS0FEbkQ7O01BRUEsSUFBRyxDQUFBLEtBQUssWUFBUjtRQUNDLEtBQUssQ0FBQyxLQUFNLENBQUEsYUFBQSxDQUFaLEdBQTZCLEtBQU0sQ0FBQSxDQUFBLEVBRHBDOztNQUVBLElBQUcsQ0FBQSxLQUFLLFdBQVI7UUFDQyxLQUFLLENBQUMsS0FBTSxDQUFBLFlBQUEsQ0FBWixHQUE0QixLQUFNLENBQUEsQ0FBQSxFQURuQzs7TUFFQSxJQUFHLENBQUEsS0FBSyxZQUFSO1FBQ0MsS0FBSyxDQUFDLEtBQU0sQ0FBQSxhQUFBLENBQVosR0FBNkIsS0FBTSxDQUFBLENBQUEsRUFEcEM7O01BRUEsSUFBRyxDQUFBLEtBQUssWUFBUjtRQUNDLElBQUcsS0FBTSxDQUFBLENBQUEsQ0FBTixLQUFZLE1BQWY7dUJBQ0MsS0FBSyxDQUFDLEtBQU0sQ0FBQSxhQUFBLENBQVosR0FBNkIsT0FBTyxDQUFDLEVBQVIsQ0FBVyxLQUFNLENBQUEsVUFBQSxDQUFqQixDQUFBLEdBQWdDLEdBQWhDLEdBQXNDLE1BRHBFO1NBQUEsTUFBQTt1QkFHQyxLQUFLLENBQUMsS0FBTSxDQUFBLGFBQUEsQ0FBWixHQUE2QixPQUFPLENBQUMsRUFBUixDQUFXLEtBQU0sQ0FBQSxDQUFBLENBQWpCLENBQUEsR0FBdUIsTUFIckQ7U0FERDtPQUFBLE1BQUE7NkJBQUE7T0FURDtLQUFBLE1BQUE7MkJBQUE7O0FBTkQ7O0FBTGU7O0FBMEJoQixPQUFPLENBQUMsTUFBUixHQUFpQixTQUFDLEtBQUQsRUFBUSxLQUFSO0FBQ2hCLE1BQUE7RUFBQSxLQUFBLEdBQVEsSUFBSTtFQUNaLFlBQUEsR0FBZSxPQUFPLENBQUMsTUFBTyxDQUFBLEtBQUE7RUFDOUIsSUFBRyxZQUFBLEtBQWdCLE1BQW5CO0lBQ0MsSUFBRyxLQUFBLEtBQVMsTUFBWjtNQUNDLE9BQU8sQ0FBQyxRQUFSLENBQ0M7Y0FBQSxFQUFBO1lBQUEsRUFBQSxHQUFHLFNBQ0YsS0FERDs7T0FERCxFQUREO0tBQUEsTUFBQTtNQUtDLE9BQU8sQ0FBQyxRQUFSLENBQ0M7ZUFBQSxFQUFBO2FBQUEsRUFBQSxHQUFHLFNBQ0Y7VUFBQSxLQUFBLEVBQVEsR0FBUjtTQUREOztPQURELEVBTEQ7S0FERDs7RUFTQSxPQUFPLENBQUMsS0FBUixDQUFjLEtBQWQsRUFBcUIsS0FBckI7RUFDQSxJQUFHLEtBQUEsS0FBUyxNQUFULElBQXNCLFlBQUEsS0FBZ0IsTUFBekM7SUFDQyxRQUFBLEdBQVc7SUFDWCxZQUFBLEdBQWUsS0FBQSxHQUFRLEdBQVIsR0FBYztJQUM3QixPQUFPLENBQUMsUUFBUixDQUNDO2FBQUEsRUFBQTtXQUFBLEVBQUEsR0FBRyxnQkFDRixLQUREOztLQUREO0lBR0EsT0FBTyxDQUFDLEtBQVIsQ0FBYyxLQUFkLEVBQXFCLFlBQXJCLEVBTkQ7O0FBT0EsU0FBTztBQXBCUzs7QUF1QmpCLFVBQUEsR0FBYSxTQUFDLEtBQUQsRUFBUSxJQUFSLEVBQWMsTUFBZCxFQUFzQixLQUF0QixFQUE2QixLQUE3QjtBQUNaLE1BQUE7RUFBQSxNQUFBLEdBQVMsT0FBTyxDQUFDLFNBQVIsQ0FBQTtFQUNULEtBQUssQ0FBQyxNQUFOLEdBQWUsUUFBQSxDQUFTLE1BQU8sQ0FBQSxDQUFBLENBQVAsR0FBWSxNQUFPLENBQUEsQ0FBQSxDQUE1QixDQUFBLEdBQWtDO0VBQ2pELElBQUcsS0FBQSxLQUFTLE1BQVo7SUFDQyxLQUFLLENBQUMsTUFBTixHQUFlLEtBQUssQ0FBQyxNQUFOLEdBQWUsTUFEL0I7O0VBRUEsS0FBSyxDQUFDLElBQU4sR0FBYTtFQUNiLFlBQUEsR0FBZTtFQUNmLGVBQUEsR0FBa0IsSUFBSSxDQUFDLE1BQUwsQ0FBWSxNQUFaO0VBQ2xCLFFBQUEsR0FBVztFQUNYLElBQUcsZUFBQSxLQUFtQixDQUFDLENBQXZCO0lBQ0MsS0FBQSxHQUFRLElBQUksQ0FBQyxTQUFMLENBQWUsQ0FBZixFQUFpQixlQUFqQjtJQUNSLEtBQUEsR0FBUyxJQUFJLENBQUMsU0FBTCxDQUFlLGVBQUEsR0FBa0IsQ0FBakMsRUFBb0MsSUFBSSxDQUFDLE1BQXpDO0lBQ1QsSUFBRyxLQUFLLENBQUMsTUFBTixHQUFlLEtBQUssQ0FBQyxNQUF4QjtNQUNDLElBQUEsR0FBTyxNQURSOztJQUVBLElBQUcsS0FBSyxDQUFDLE1BQU4sR0FBZSxLQUFLLENBQUMsTUFBeEI7TUFDQyxJQUFBLEdBQU8sTUFEUjtLQUxEOztFQU9BLFdBQUEsR0FBYztFQUNkLFFBQUEsR0FBVyxJQUFJLENBQUMsT0FBTCxDQUFhLFdBQWIsRUFBMEIsRUFBMUI7RUFDWCxjQUFBLEdBQWlCLFFBQVEsQ0FBQyxLQUFULENBQWUsRUFBZjtBQUNqQixPQUFBLGdEQUFBOztJQUNDLFlBQUEsR0FBZSxLQUFNLENBQUEsQ0FBQSxDQUFHLENBQUEsS0FBQSxDQUFULEdBQWtCO0FBRGxDO1NBRUEsS0FBSyxDQUFDLEtBQU4sR0FBYyxZQUFBLEdBQWUsTUFBTSxDQUFDO0FBckJ4Qjs7QUEwQmIsWUFBQSxHQUFlLFNBQUMsU0FBRDtBQUVkLE1BQUE7RUFBQSxVQUFBLEdBQWE7RUFDYixXQUFBLEdBQWM7RUFDZCxJQUFHLFNBQVMsQ0FBQyxNQUFWLEtBQW9CLENBQUMsQ0FBckIsSUFBMEIsU0FBUyxDQUFDLEtBQVYsS0FBbUIsQ0FBQyxDQUFqRDtJQUNDLFdBQUEsR0FBYyxRQUFBLENBQVMsU0FBUyxDQUFDLEtBQU0sQ0FBQSxXQUFBLENBQVksQ0FBQyxLQUE3QixDQUFtQyxDQUFuQyxFQUFxQyxDQUFDLENBQXRDLENBQVQsRUFEZjs7RUFFQSxJQUFHLFNBQVMsQ0FBQyxNQUFWLEtBQW9CLENBQUMsQ0FBckIsSUFBMEIsU0FBUyxDQUFDLEtBQVYsS0FBbUIsQ0FBQyxDQUFqRDtJQUNDLFdBQUEsR0FBYyxTQUFTLENBQUMsT0FEekI7O0VBRUEsWUFBQSxHQUFlLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBZixDQUFxQixFQUFyQjtFQUNmLFNBQUEsR0FBWSxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQWYsQ0FBcUIsR0FBckIsQ0FBeUIsQ0FBQztFQUN0QyxhQUFBLEdBQWdCLFFBQVEsQ0FBQztFQUN6QixjQUFBLEdBQWlCLFFBQUEsQ0FBUyxTQUFTLENBQUMsS0FBTSxDQUFBLFdBQUEsQ0FBWSxDQUFDLEtBQTdCLENBQW1DLENBQW5DLEVBQXFDLENBQUMsQ0FBdEMsQ0FBVCxDQUFBLEdBQW1EO0VBQ3BFLG9CQUFBLEdBQXVCLFFBQUEsQ0FBUyxTQUFTLENBQUMsS0FBTSxDQUFBLGFBQUEsQ0FBekIsQ0FBQSxHQUF5QztBQUNoRSxPQUFBLDhDQUFBOztJQUNDLFVBQUEsR0FBYSxVQUFBLEdBQWEsQ0FBRSxhQUFjLENBQUEsSUFBQSxDQUFkLEdBQXNCLGNBQXRCLEdBQXVDLENBQUMsR0FBQSxHQUFNLG9CQUFQLENBQXpDO0lBQzFCLFVBQUEsR0FBYSxJQUFJLENBQUMsS0FBTCxDQUFXLFVBQVg7QUFGZDtFQUdBLFFBQUEsR0FBVyxTQUFTLENBQUM7RUFDckIsSUFBRyxTQUFTLENBQUMsS0FBVixLQUFtQixDQUFDLENBQXBCLElBQXlCLFNBQVMsQ0FBQyxNQUFWLEtBQW9CLENBQUMsQ0FBakQ7SUFDQyxTQUFBLEdBQVksSUFBSSxDQUFDLElBQUwsQ0FBVSxVQUFBLEdBQVcsUUFBckI7SUFDWixJQUFHLFNBQUEsR0FBWSxTQUFmO01BQ0MsU0FBQSxHQUFZLFVBRGI7O0lBRUEsV0FBQSxHQUFjLFFBQUEsQ0FBUyxTQUFTLENBQUMsS0FBTSxDQUFBLFdBQUEsQ0FBWSxDQUFDLEtBQTdCLENBQW1DLENBQW5DLEVBQXFDLENBQUMsQ0FBdEMsQ0FBVCxDQUFBLEdBQXFELFNBQXJELEdBQWlFLFFBQUEsQ0FBUyxTQUFTLENBQUMsS0FBTSxDQUFBLGFBQUEsQ0FBYyxDQUFDLEtBQS9CLENBQXFDLENBQXJDLEVBQXVDLENBQUMsQ0FBeEMsQ0FBVCxDQUFBLEdBQXVELENBQUMsU0FBQSxHQUFZLEdBQWI7SUFDdEksSUFBRyxXQUFBLEdBQWMsUUFBQSxDQUFTLFNBQVMsQ0FBQyxLQUFNLENBQUEsV0FBQSxDQUFZLENBQUMsS0FBN0IsQ0FBbUMsQ0FBbkMsRUFBcUMsQ0FBQyxDQUF0QyxDQUFULENBQWpCO01BQ0MsV0FBQSxHQUFjLFFBQUEsQ0FBUyxTQUFTLENBQUMsS0FBTSxDQUFBLFdBQUEsQ0FBWSxDQUFDLEtBQTdCLENBQW1DLENBQW5DLEVBQXFDLENBQUMsQ0FBdEMsQ0FBVCxFQURmO0tBTEQ7O0VBT0EsSUFBRyxTQUFTLENBQUMsS0FBVixLQUFtQixDQUFDLENBQXZCO0lBQ0MsVUFBQSxHQUFhLFNBRGQ7O0FBR0EsU0FBTztJQUNOLEtBQUEsRUFBUSxVQURGO0lBRU4sTUFBQSxFQUFRLFdBRkY7O0FBM0JPOztBQWdDZixPQUFPLENBQUMsSUFBUixHQUFlLFNBQUMsS0FBRDtBQUNkLE1BQUE7RUFBQSxJQUFHLEtBQUEsS0FBUyxNQUFaO0lBQ0MsS0FBQSxHQUFRLEdBRFQ7O0VBRUEsVUFBQSxHQUFhO0FBQ2I7QUFBQSxPQUFBLHFDQUFBOztJQUNDLElBQUcsS0FBTSxDQUFBLENBQUEsQ0FBTixLQUFZLE1BQWY7TUFDQyxJQUFFLENBQUEsQ0FBQSxDQUFGLEdBQU8sS0FBTSxDQUFBLENBQUEsRUFEZDtLQUFBLE1BQUE7TUFHQyxJQUFFLENBQUEsQ0FBQSxDQUFGLEdBQU8sUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFTLENBQUEsQ0FBQSxFQUgvQjs7SUFJQSxJQUFHLENBQUEsS0FBSyxPQUFSO01BQ0MsVUFBVyxDQUFBLENBQUEsQ0FBWCxHQUFnQixJQUFFLENBQUEsQ0FBQSxFQURuQjs7QUFMRDtFQU9BLElBQUcsT0FBTyxDQUFDLE1BQU8sQ0FBQSxJQUFDLENBQUMsS0FBRixDQUFmLEtBQTJCLE1BQTlCO0lBQ0MsT0FBTyxDQUFDLFFBQVIsQ0FDQztZQUFBLEVBQUE7VUFBQSxFQUFBLEdBQUcsSUFBQyxDQUFDLFNBQ0osVUFERDs7S0FERCxFQUREOztFQUlBLFNBQUEsR0FBWSxJQUFJO0VBQ2hCLFNBQVMsQ0FBQyxJQUFWLEdBQWlCLElBQUMsQ0FBQTtFQUNsQixPQUFPLENBQUMsS0FBUixDQUFjLFNBQWQsRUFBeUIsSUFBQyxDQUFBLEtBQTFCO0VBQ0EsU0FBQSxHQUFZLFlBQUEsQ0FBYSxTQUFiO0VBQ1osU0FBUyxDQUFDLEtBQVYsR0FBbUI7SUFBQSxNQUFBLEVBQU8sU0FBUyxDQUFDLE1BQWpCO0lBQXlCLEtBQUEsRUFBTSxTQUFTLENBQUMsS0FBekM7O0FBQ25CLFNBQU87QUFwQk87O0FBZ0tmLE9BQU8sQ0FBQyxRQUFSLEdBQW1CLFNBQUMsS0FBRDtBQUNsQixNQUFBO0VBQUEsSUFBRyxLQUFBLEtBQVMsTUFBWjtJQUNDLEtBQUEsR0FBUSxHQURUOztBQUVBO0FBQUEsT0FBQSxxQ0FBQTs7SUFDQyxJQUFHLEtBQU0sQ0FBQSxJQUFBLENBQVQ7TUFDQyxJQUFFLENBQUEsSUFBQSxDQUFGLEdBQVUsS0FBTSxDQUFBLElBQUEsRUFEakI7S0FBQSxNQUFBO01BR0MsSUFBRSxDQUFBLElBQUEsQ0FBRixHQUFVLFFBQVEsQ0FBQyxhQUFjLENBQUEsSUFBQSxFQUhsQzs7QUFERDtFQUtBLEtBQUEsR0FBWSxJQUFBLEtBQUEsQ0FBTTtJQUFBLGVBQUEsRUFBZ0IsU0FBaEI7SUFBMkIsSUFBQSxFQUFLLFVBQWhDO0dBQU47RUFDWixLQUFLLENBQUMsV0FBTixHQUFxQjtJQUFBLE1BQUEsRUFBTyxDQUFQO0lBQVUsTUFBQSxFQUFPLEdBQWpCO0lBQXNCLFFBQUEsRUFBUyxDQUEvQjtJQUFrQyxPQUFBLEVBQVEsQ0FBMUM7O0VBQ3JCLE9BQU8sQ0FBQyxNQUFSLENBQUE7RUFDQSxZQUFBLEdBQWUsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsRUFBZ0IsR0FBaEIsRUFBcUIsR0FBckIsRUFBMEIsR0FBMUIsRUFBK0IsR0FBL0IsRUFBb0MsR0FBcEMsRUFBeUMsR0FBekMsRUFBOEMsR0FBOUMsRUFBbUQsR0FBbkQsRUFBd0QsR0FBeEQsRUFBNkQsR0FBN0QsRUFBa0UsR0FBbEUsRUFBdUUsR0FBdkUsRUFBNEUsR0FBNUUsRUFBaUYsR0FBakYsRUFBc0YsR0FBdEYsRUFBMkYsR0FBM0YsRUFBZ0csR0FBaEcsRUFBcUcsR0FBckcsRUFBMEcsR0FBMUcsRUFBK0csR0FBL0csRUFBcUgsR0FBckgsRUFBMEgsR0FBMUgsRUFBK0gsR0FBL0g7RUFDZixTQUFBLEdBQVk7RUFDWixNQUFBLEdBQVMsT0FBTyxDQUFDLEVBQVIsQ0FBVyxDQUFYO0VBQ1QsSUFBRyxPQUFPLENBQUMsS0FBUixLQUFpQixDQUFqQixJQUFzQixPQUFPLENBQUMsS0FBUixLQUFpQixHQUExQztJQUNDLE1BQUEsR0FBUyxPQUFPLENBQUMsRUFBUixDQUFXLENBQVgsRUFEVjs7RUFFQSxPQUFBLEdBQVU7SUFDVDtNQUNDLFNBQUEsRUFBWSxPQUFPLENBQUMsRUFBUixDQUFXLENBQVgsQ0FEYjtNQUVDLFlBQUEsRUFBZSxDQUZoQjtNQUdDLFVBQUEsRUFBYSxDQUhkO01BSUMsV0FBQSxFQUFjLE9BQU8sQ0FBQyxFQUFSLENBQVcsRUFBWCxDQUpmO0tBRFMsRUFPVDtNQUNDLFNBQUEsRUFBWSxFQUFBLEdBQUssT0FBTyxDQUFDLEtBRDFCO01BRUMsWUFBQSxFQUFlLEVBRmhCO01BR0MsVUFBQSxFQUFhLEVBSGQ7TUFJQyxXQUFBLEVBQWMsRUFBQSxHQUFLLE9BQU8sQ0FBQyxLQUo1QjtLQVBTLEVBYVQ7TUFDQyxTQUFBLEVBQVksRUFBQSxHQUFLLE9BQU8sQ0FBQyxLQUQxQjtNQUVDLFlBQUEsRUFBZSxFQUZoQjtNQUdDLFVBQUEsRUFBYSxFQUhkO01BSUMsV0FBQSxFQUFjLEVBQUEsR0FBSyxPQUFPLENBQUMsS0FKNUI7S0FiUzs7RUFvQlYsUUFBQSxHQUFlLElBQUEsS0FBQSxDQUFNO0lBQUEsS0FBQSxFQUFNLElBQUMsQ0FBQSxRQUFQO0lBQWlCLE1BQUEsRUFBTyxJQUFDLENBQUEsU0FBekI7SUFBb0MsQ0FBQSxFQUFFLElBQUMsQ0FBQyxDQUFGLEdBQUksRUFBQSxHQUFHLE9BQU8sQ0FBQyxLQUFyRDtJQUE0RCxlQUFBLEVBQWdCLGFBQTVFO0lBQTJGLFVBQUEsRUFBVyxLQUF0RztJQUE2RyxJQUFBLEVBQUssWUFBbEg7R0FBTjtFQUNmLEdBQUEsR0FBVSxJQUFBLEtBQUEsQ0FBTTtJQUFBLFlBQUEsRUFBYSxPQUFPLENBQUMsRUFBUixDQUFXLEVBQVgsQ0FBYjtJQUE2QixVQUFBLEVBQVcsUUFBeEM7SUFBa0QsZUFBQSxFQUFnQixhQUFsRTtJQUFpRixLQUFBLEVBQU0sT0FBdkY7SUFBZ0csSUFBQSxFQUFLLFFBQXJHO0dBQU47RUFDVixHQUFHLENBQUMsS0FBSixHQUFZO0lBQ1gsV0FBQSxFQUFjLEVBQUEsR0FBSyxPQUFPLENBQUMsS0FBYixHQUFxQixJQUR4QjtJQUVYLGFBQUEsRUFBZ0IsR0FGTDtJQUdYLGFBQUEsRUFBZ0IsNkNBSEw7SUFJWCxZQUFBLEVBQWUsUUFKSjtJQUtYLGFBQUEsRUFBZ0IsSUFBQyxDQUFBLFVBTE47O0VBT1osSUFBQyxDQUFDLEtBQUYsR0FBVTtFQUNWLElBQUEsR0FBVyxJQUFBLEtBQUEsQ0FBTTtJQUFBLFVBQUEsRUFBVyxRQUFYO0lBQXFCLGVBQUEsRUFBZ0IsYUFBckM7SUFBb0QsSUFBQSxFQUFLLFlBQXpEO0dBQU47RUFHWCxRQUFBLEdBQWUsSUFBQSxLQUFBLENBQU07SUFBQSxVQUFBLEVBQVcsS0FBWDtJQUFrQixJQUFBLEVBQUssT0FBdkI7SUFBZ0MsWUFBQSxFQUFhLE9BQU8sQ0FBQyxFQUFSLENBQVcsQ0FBWCxDQUE3QztJQUE0RCxlQUFBLEVBQWdCLFNBQTVFO0lBQXVGLE9BQUEsRUFBUSxPQUFPLENBQUMsRUFBUixDQUFXLENBQVgsQ0FBL0Y7SUFBOEcsV0FBQSxFQUFZLFNBQTFIO0dBQU47RUFDZixRQUFRLENBQUMsV0FBVCxHQUF3QjtJQUFBLE1BQUEsRUFBTyxFQUFQO0lBQVcsT0FBQSxFQUFRLENBQW5CO0lBQXNCLEtBQUEsRUFBTSxFQUE1QjtJQUFnQyxNQUFBLEVBQU8sRUFBdkM7O0VBQ3hCLFNBQUEsR0FBZ0IsSUFBQSxLQUFBLENBQU07SUFBQSxLQUFBLEVBQU0sT0FBTyxDQUFDLEVBQVIsQ0FBVyxFQUFYLENBQU47SUFBc0IsTUFBQSxFQUFPLE9BQU8sQ0FBQyxFQUFSLENBQVcsRUFBWCxDQUE3QjtJQUE2QyxVQUFBLEVBQVcsUUFBeEQ7SUFBa0UsZUFBQSxFQUFnQixhQUFsRjtJQUFpRyxDQUFBLEVBQUUsT0FBTyxDQUFDLEVBQVIsQ0FBVyxFQUFYLENBQW5HO0lBQW1ILENBQUEsRUFBRSxPQUFPLENBQUMsRUFBUixDQUFXLEVBQVgsQ0FBckg7R0FBTjtFQUNoQixTQUFTLENBQUMsSUFBVixHQUFpQixxRUFBQSxHQUNILENBQUMsT0FBTyxDQUFDLEVBQVIsQ0FBVyxFQUFYLENBQUQsQ0FERyxHQUNhLGNBRGIsR0FDMEIsQ0FBQyxPQUFPLENBQUMsRUFBUixDQUFXLEVBQVgsQ0FBRCxDQUQxQixHQUMwQztFQWMzRCxTQUFTLENBQUMsTUFBTSxDQUFDLEdBQWpCLENBQ0M7SUFBQSxFQUFBLEVBQ0M7TUFBQSxJQUFBLEVBQU0scUVBQUEsR0FDTyxDQUFDLE9BQU8sQ0FBQyxFQUFSLENBQVcsRUFBWCxDQUFELENBRFAsR0FDdUIsY0FEdkIsR0FDb0MsQ0FBQyxPQUFPLENBQUMsRUFBUixDQUFXLEVBQVgsQ0FBRCxDQURwQyxHQUNvRCwwakNBRDFEO0tBREQ7R0FERDtFQWdCQSxTQUFTLENBQUMsTUFBTSxDQUFDLGdCQUFqQixHQUNJO0lBQUEsSUFBQSxFQUFNLEdBQU47O0VBRUYsU0FBQSxHQUFnQixJQUFBLEtBQUEsQ0FBTTtJQUFBLFVBQUEsRUFBVyxLQUFYO0lBQWtCLFlBQUEsRUFBYSxPQUFPLENBQUMsRUFBUixDQUFXLENBQVgsQ0FBL0I7SUFBOEMsZUFBQSxFQUFnQixTQUE5RDtJQUF5RSxPQUFBLEVBQVEsT0FBTyxDQUFDLEVBQVIsQ0FBVyxDQUFYLENBQWpGO0lBQWdHLFdBQUEsRUFBWSxTQUE1RztHQUFOO0VBQ2hCLFNBQVMsQ0FBQyxXQUFWLEdBQXlCO0lBQUEsTUFBQSxFQUFPLEVBQVA7SUFBVyxRQUFBLEVBQVMsQ0FBcEI7SUFBdUIsS0FBQSxFQUFNLEVBQTdCO0lBQWlDLE1BQUEsRUFBTyxFQUF4Qzs7RUFDekIsVUFBQSxHQUFpQixJQUFBLEtBQUEsQ0FBTTtJQUFBLFVBQUEsRUFBVyxTQUFYO0lBQXNCLEtBQUEsRUFBTSxPQUFPLENBQUMsRUFBUixDQUFXLEVBQVgsQ0FBNUI7SUFBNEMsTUFBQSxFQUFPLE9BQU8sQ0FBQyxFQUFSLENBQVcsRUFBWCxDQUFuRDtJQUFtRSxlQUFBLEVBQWdCLGFBQW5GO0dBQU47RUFDakIsVUFBVSxDQUFDLFdBQVgsR0FBMEI7SUFBQSxHQUFBLEVBQUksRUFBSjtJQUFRLE9BQUEsRUFBUSxFQUFoQjs7RUFFMUIsVUFBVSxDQUFDLE1BQU0sQ0FBQyxHQUFsQixDQUNDO0lBQUEsRUFBQSxFQUNDO01BQUEsSUFBQSxFQUFNLHFFQUFBLEdBQ00sQ0FBQyxPQUFPLENBQUMsRUFBUixDQUFXLEVBQVgsQ0FBRCxDQUROLEdBQ3NCLGNBRHRCLEdBQ21DLENBQUMsT0FBTyxDQUFDLEVBQVIsQ0FBVyxFQUFYLENBQUQsQ0FEbkMsR0FDbUQseXhEQUR6RDtLQUREO0dBREQ7RUFpQkEsVUFBVSxDQUFDLE1BQU0sQ0FBQyxHQUFsQixDQUNDO0lBQUEsR0FBQSxFQUNDO01BQUEsSUFBQSxFQUFNLHFFQUFBLEdBQ0ksQ0FBQyxPQUFPLENBQUMsRUFBUixDQUFXLEVBQVgsQ0FBRCxDQURKLEdBQ29CLGNBRHBCLEdBQ2lDLENBQUMsT0FBTyxDQUFDLEVBQVIsQ0FBVyxFQUFYLENBQUQsQ0FEakMsR0FDaUQsaXNFQUR2RDtLQUREO0dBREQ7RUFrQkEsU0FBUyxDQUFDLEVBQVYsQ0FBYSxNQUFNLENBQUMsVUFBcEIsRUFBZ0MsU0FBQTtJQUMvQixTQUFTLENBQUMsZUFBVixHQUE0QjtXQUM1QixVQUFVLENBQUMsTUFBTSxDQUFDLGFBQWxCLENBQWdDLElBQWhDO0VBRitCLENBQWhDO0VBSUEsU0FBUyxDQUFDLEVBQVYsQ0FBYSxNQUFNLENBQUMsUUFBcEIsRUFBOEIsU0FBQTtJQUM3QixTQUFTLENBQUMsZUFBVixHQUE0QjtXQUM1QixVQUFVLENBQUMsTUFBTSxDQUFDLGFBQWxCLENBQWdDLEtBQWhDO0VBRjZCLENBQTlCO0VBSUEsVUFBVSxDQUFDLE1BQU0sQ0FBQyxhQUFsQixDQUFnQyxLQUFoQztFQUVGLFNBQVMsQ0FBQyxFQUFWLENBQWEsTUFBTSxDQUFDLEtBQXBCLEVBQTJCLFNBQUE7QUFDMUIsUUFBQTtJQUFBLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBakIsQ0FBQTtJQUNBLElBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFqQixLQUEwQixJQUE3QjtNQUNDLFFBQVEsQ0FBQyxlQUFULEdBQTJCO0FBQzNCLFdBQUEsNkNBQUE7O1FBQ0MsR0FBRyxDQUFDLEtBQU0sQ0FBQSxnQkFBQSxDQUFWLEdBQThCO0FBRC9CO2FBRUEsR0FBRyxDQUFDLEtBQU0sQ0FBQSxnQkFBQSxDQUFWLEdBQThCLFlBSi9CO0tBQUEsTUFBQTtNQU1DLFFBQVEsQ0FBQyxlQUFULEdBQTJCO0FBQzNCLFdBQUEsNkNBQUE7O1FBQ0MsR0FBRyxDQUFDLEtBQU0sQ0FBQSxnQkFBQSxDQUFWLEdBQThCO0FBRC9CO2FBRUEsR0FBRyxDQUFDLEtBQU0sQ0FBQSxnQkFBQSxDQUFWLEdBQThCLFlBVC9COztFQUYwQixDQUEzQjtBQWFBLE9BQUEsZ0RBQUE7O0lBQ0MsS0FBQSxHQUFRLFlBQVksQ0FBQyxPQUFiLENBQXFCLE1BQXJCO0lBQ1IsR0FBQSxHQUFVLElBQUEsS0FBQSxDQUFNO01BQUEsSUFBQSxFQUFLLE1BQUw7TUFBYSxVQUFBLEVBQVcsS0FBeEI7TUFBK0IsWUFBQSxFQUFhLENBQUEsR0FBRSxPQUFPLENBQUMsS0FBdEQ7TUFBNkQsZUFBQSxFQUFnQixPQUE3RTtNQUFzRixLQUFBLEVBQU0sT0FBNUY7TUFBcUcsT0FBQSxFQUFRLE9BQU8sQ0FBQyxFQUFSLENBQVcsQ0FBWCxDQUE3RztNQUE0SCxXQUFBLEVBQVksU0FBeEk7S0FBTjtJQUNWLFFBQVEsQ0FBQyxZQUFULENBQUE7SUFDQSxHQUFHLENBQUMsWUFBSixDQUFBO0lBQ0EsSUFBRyxPQUFPLENBQUMsS0FBUixLQUFpQixDQUFwQjtNQUNDLEdBQUcsQ0FBQyxXQUFKLEdBQW1CO1FBQUEsS0FBQSxFQUFNLEVBQU47UUFBVSxNQUFBLEVBQU8sRUFBakI7O01BQ25CLFFBQVEsQ0FBQyxXQUFULEdBQXdCO1FBQUEsS0FBQSxFQUFNLEVBQU47UUFBVSxNQUFBLEVBQU8sR0FBakI7O01BQ3hCLElBQUksQ0FBQyxXQUFMLEdBQW9CO1FBQUEsS0FBQSxFQUFNLEVBQU47UUFBVSxNQUFBLEVBQVEsR0FBbEI7O01BQ3BCLElBQUksQ0FBQyxDQUFMLEdBQVM7TUFDVCxJQUFDLENBQUEsU0FBRCxHQUFhLE9BQU8sQ0FBQyxFQUFSLENBQVcsRUFBWDtNQUNiLElBQUMsQ0FBQSxVQUFELEdBQWMsT0FBTyxDQUFDLEVBQVIsQ0FBVyxHQUFYO01BQ2QsSUFBQyxDQUFBLFNBQUQsR0FBYSxPQUFPLENBQUMsRUFBUixDQUFXLEVBQVg7TUFDYixJQUFDLENBQUEsUUFBRCxHQUFZLE9BQU8sQ0FBQyxFQUFSLENBQVcsRUFBWDtNQUNaLElBQUMsQ0FBQSxVQUFELEdBQWMsSUFBQyxDQUFBLFFBQUQsR0FBWSxFQUFaLEdBQWlCO01BQy9CLEdBQUcsQ0FBQyxXQUFKLEdBQW1CO1FBQUEsS0FBQSxFQUFNLEVBQU47UUFBVSxNQUFBLEVBQU8sRUFBakI7O01BQ25CLEdBQUcsQ0FBQyxPQUFKLENBQUE7TUFDQSxHQUFHLENBQUMsQ0FBSixHQUFRLE9BQU8sQ0FBQyxFQUFSLENBQVcsRUFBWCxFQVpUOztJQWNBLElBQUcsT0FBTyxDQUFDLEtBQVIsS0FBaUIsQ0FBcEI7TUFDQyxHQUFHLENBQUMsV0FBSixHQUFtQjtRQUFBLEtBQUEsRUFBTSxFQUFOO1FBQVUsTUFBQSxFQUFPLEVBQWpCOztNQUNuQixRQUFRLENBQUMsV0FBVCxHQUF3QjtRQUFBLEtBQUEsRUFBTSxFQUFOO1FBQVUsTUFBQSxFQUFPLEdBQWpCOztNQUN4QixJQUFDLENBQUEsU0FBRCxHQUFhLE9BQU8sQ0FBQyxFQUFSLENBQVcsR0FBWDtNQUNiLElBQUMsQ0FBQSxRQUFELEdBQVksT0FBTyxDQUFDLEVBQVIsQ0FBVyxFQUFYO01BQ1osSUFBQyxDQUFBLFVBQUQsR0FBYyxJQUFDLENBQUEsUUFBRCxHQUFZO01BQzFCLElBQUMsQ0FBQSxTQUFELEdBQWEsT0FBTyxDQUFDLEVBQVIsQ0FBVyxFQUFYO01BQ2IsSUFBQyxDQUFBLFVBQUQsR0FBYyxPQUFPLENBQUMsRUFBUixDQUFXLEdBQVg7TUFDZCxJQUFJLENBQUMsQ0FBTCxHQUFTO01BR1QsR0FBRyxDQUFDLFdBQUosR0FBbUI7UUFBQSxLQUFBLEVBQU0sRUFBTjtRQUFVLE1BQUEsRUFBTyxFQUFqQjs7TUFDbkIsR0FBRyxDQUFDLE9BQUosQ0FBQTtNQUNBLEdBQUcsQ0FBQyxDQUFKLEdBQVEsT0FBTyxDQUFDLEVBQVIsQ0FBVyxFQUFYLEVBYlQ7O0lBZUEsSUFBRyxPQUFPLENBQUMsS0FBUixLQUFpQixHQUFwQjtNQUNDLEdBQUcsQ0FBQyxXQUFKLEdBQW1CO1FBQUEsS0FBQSxFQUFNLEVBQU47UUFBVSxNQUFBLEVBQU8sRUFBakI7UUFEcEI7O0lBR0EsUUFBUSxDQUFDLE9BQVQsR0FBbUI7SUFFbkIsT0FBTyxDQUFDLE1BQVIsQ0FBQTtJQUNBLEdBQUcsQ0FBQyxLQUFKLEdBQVk7TUFDWCxXQUFBLEVBQWMsRUFBQSxHQUFLLE9BQU8sQ0FBQyxLQUFiLEdBQXFCLElBRHhCO01BRVgsYUFBQSxFQUFnQixHQUZMO01BR1gsYUFBQSxFQUFnQiw2Q0FITDtNQUlYLFlBQUEsRUFBZSxRQUpKO01BS1gsYUFBQSxFQUFnQixHQUFHLENBQUMsTUFBSixHQUFhLE9BQU8sQ0FBQyxFQUFSLENBQVcsQ0FBWCxDQUFiLEdBQTZCLElBTGxDOztJQU9aLEdBQUcsQ0FBQyxJQUFKLEdBQVc7SUFDWCxJQUFHLEtBQUEsSUFBUyxPQUFRLENBQUEsQ0FBQSxDQUFFLENBQUMsUUFBdkI7TUFDQyxRQUFBLEdBQVcsS0FBQSxHQUFRLE9BQVEsQ0FBQSxDQUFBLENBQUUsQ0FBQztNQUM5QixHQUFHLENBQUMsQ0FBSixHQUFRLE9BQVEsQ0FBQSxDQUFBLENBQUUsQ0FBQyxPQUFYLEdBQXFCLENBQUMsUUFBQSxHQUFTLE1BQVYsQ0FBckIsR0FBeUMsQ0FBQyxRQUFBLEdBQVMsR0FBRyxDQUFDLEtBQWQ7TUFDakQsR0FBRyxDQUFDLENBQUosR0FBUSxPQUFRLENBQUEsQ0FBQSxDQUFFLENBQUMsVUFIcEI7O0lBSUEsSUFBRyxLQUFBLEdBQVEsT0FBUSxDQUFBLENBQUEsQ0FBRSxDQUFDLFFBQW5CLElBQStCLEtBQUEsSUFBUyxPQUFRLENBQUEsQ0FBQSxDQUFFLENBQUMsUUFBdEQ7TUFDQyxRQUFBLEdBQVcsS0FBQSxHQUFRLE9BQVEsQ0FBQSxDQUFBLENBQUUsQ0FBQztNQUM5QixHQUFHLENBQUMsQ0FBSixHQUFRLE9BQVEsQ0FBQSxDQUFBLENBQUUsQ0FBQyxPQUFYLEdBQXFCLENBQUMsUUFBQSxHQUFTLE1BQVYsQ0FBckIsR0FBeUMsQ0FBQyxRQUFBLEdBQVMsR0FBRyxDQUFDLEtBQWQ7TUFDakQsR0FBRyxDQUFDLENBQUosR0FBUSxPQUFRLENBQUEsQ0FBQSxDQUFFLENBQUMsU0FBWCxHQUF1QixHQUFHLENBQUMsT0FIcEM7O0lBSUEsSUFBRyxLQUFBLEdBQVEsT0FBUSxDQUFBLENBQUEsQ0FBRSxDQUFDLFFBQXRCO01BQ0MsUUFBQSxHQUFXLEtBQUEsR0FBUSxPQUFRLENBQUEsQ0FBQSxDQUFFLENBQUM7TUFDOUIsR0FBRyxDQUFDLENBQUosR0FBUSxPQUFRLENBQUEsQ0FBQSxDQUFFLENBQUMsT0FBWCxHQUFxQixDQUFDLFFBQUEsR0FBUyxNQUFWLENBQXJCLEdBQXlDLENBQUMsUUFBQSxHQUFTLEdBQUcsQ0FBQyxLQUFkO01BQ2pELEdBQUcsQ0FBQyxDQUFKLEdBQVEsT0FBUSxDQUFBLENBQUEsQ0FBRSxDQUFDLFNBQVgsR0FBdUIsR0FBRyxDQUFDLE1BQUosR0FBYSxFQUg3Qzs7SUFJQSxJQUFJLENBQUMsSUFBTCxHQUFZLHFFQUFBLEdBRUUsSUFBQyxDQUFBLFNBRkgsR0FFYSxjQUZiLEdBRTJCLElBQUMsQ0FBQSxVQUY1QixHQUV1QztJQXlCbkQsU0FBUyxDQUFDLElBQVYsQ0FBZSxHQUFmO0lBR0EsR0FBRyxDQUFDLEVBQUosQ0FBTyxNQUFNLENBQUMsVUFBZCxFQUEwQixTQUFBO01BQ3pCLFFBQVEsQ0FBQyxPQUFULEdBQW1CO01BQ25CLEdBQUcsQ0FBQyxJQUFKLEdBQVcsSUFBQyxDQUFDO01BQ2IsUUFBUSxDQUFDLElBQVQsR0FBZ0IsSUFBQyxDQUFDO2FBQ2xCLFFBQVEsQ0FBQyxJQUFULEdBQWdCLElBQUMsQ0FBQztJQUpPLENBQTFCO0lBTUEsR0FBRyxDQUFDLEVBQUosQ0FBTyxNQUFNLENBQUMsU0FBZCxFQUF5QixTQUFBO01BQ3hCLEdBQUcsQ0FBQyxJQUFKLEdBQVcsSUFBQyxDQUFDO01BQ2IsUUFBUSxDQUFDLElBQVQsR0FBZ0IsSUFBQyxDQUFDO2FBQ2xCLFFBQVEsQ0FBQyxJQUFULEdBQWdCLElBQUMsQ0FBQztJQUhNLENBQXpCO0lBS0EsR0FBRyxDQUFDLEVBQUosQ0FBTyxNQUFNLENBQUMsUUFBZCxFQUF3QixTQUFBO0FBQ3ZCLFVBQUE7TUFBQSxRQUFRLENBQUMsT0FBVCxHQUFtQjtNQUNuQixJQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBakIsS0FBMEIsSUFBN0I7UUFDQyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQUQsQ0FBaEIsQ0FBd0IsU0FBeEI7QUFDQSxhQUFBLDZDQUFBOztVQUNDLEdBQUcsQ0FBQyxLQUFNLENBQUEsZ0JBQUEsQ0FBVixHQUE4QjtBQUQvQjtlQUVBLEdBQUcsQ0FBQyxLQUFNLENBQUEsZ0JBQUEsQ0FBVixHQUE4QixZQUovQjs7SUFGdUIsQ0FBeEI7QUFyR0Q7RUFnSEEsTUFBQSxHQUFhLElBQUEsS0FBQSxDQUFNO0lBQUEsVUFBQSxFQUFXLEtBQVg7SUFBa0IsSUFBQSxFQUFLLEtBQXZCO0lBQThCLFlBQUEsRUFBYSxPQUFPLENBQUMsRUFBUixDQUFXLENBQVgsQ0FBM0M7SUFBMEQsZUFBQSxFQUFnQixTQUExRTtJQUFxRixPQUFBLEVBQVEsT0FBTyxDQUFDLEVBQVIsQ0FBVyxDQUFYLENBQTdGO0lBQTRHLFdBQUEsRUFBWSxTQUF4SDtJQUFtSSxLQUFBLEVBQU0sT0FBekk7R0FBTjtFQUNiLE1BQU0sQ0FBQyxXQUFQLEdBQXNCO0lBQUEsS0FBQSxFQUFNLElBQU47SUFBWSxNQUFBLEVBQU8sRUFBbkI7SUFBdUIsTUFBQSxFQUFPLENBQTlCO0lBQWlDLE9BQUEsRUFBUSxDQUF6Qzs7RUFDdEIsTUFBTSxDQUFDLElBQVAsR0FBYztFQUNkLE1BQU0sQ0FBQyxLQUFQLEdBQWU7SUFDZCxXQUFBLEVBQWMsT0FBTyxDQUFDLEVBQVIsQ0FBVyxFQUFYLENBQUEsR0FBaUIsSUFEakI7SUFFZCxhQUFBLEVBQWdCLEdBRkY7SUFHZCxhQUFBLEVBQWdCLDZDQUhGO0lBSWQsWUFBQSxFQUFlLFFBSkQ7SUFLZCxhQUFBLEVBQWdCLE9BQU8sQ0FBQyxFQUFSLENBQVcsRUFBWCxDQUFBLEdBQWlCLElBTG5COztFQVNmLE9BQU8sQ0FBQyxNQUFSLENBQUE7RUFDQSxRQUFBLEdBQWUsSUFBQSxLQUFBLENBQU07SUFBQSxVQUFBLEVBQVcsS0FBWDtJQUFrQixJQUFBLEVBQUssT0FBdkI7SUFBZ0MsWUFBQSxFQUFhLE9BQU8sQ0FBQyxFQUFSLENBQVcsQ0FBWCxDQUE3QztJQUE0RCxlQUFBLEVBQWdCLFNBQTVFO0lBQXVGLE9BQUEsRUFBUSxPQUFPLENBQUMsRUFBUixDQUFXLENBQVgsQ0FBL0Y7SUFBOEcsV0FBQSxFQUFZLFNBQTFIO0dBQU47RUFDZixRQUFRLENBQUMsV0FBVCxHQUF3QjtJQUFBLEtBQUEsRUFBTSxFQUFOO0lBQVUsTUFBQSxFQUFPLEVBQWpCO0lBQXFCLE1BQUEsRUFBTyxDQUE1QjtJQUErQixPQUFBLEVBQVEsQ0FBQyxNQUFELEVBQVMsQ0FBVCxDQUF2Qzs7RUFDeEIsUUFBUSxDQUFDLElBQVQsR0FBZ0IscUVBQUEsR0FDRixDQUFDLE9BQU8sQ0FBQyxFQUFSLENBQVcsRUFBWCxDQUFELENBREUsR0FDYyxjQURkLEdBQzJCLENBQUMsT0FBTyxDQUFDLEVBQVIsQ0FBVyxFQUFYLENBQUQsQ0FEM0IsR0FDMkM7RUFhM0QsUUFBUSxDQUFDLEtBQVQsR0FBaUI7SUFDaEIsYUFBQSxFQUFlLE9BQU8sQ0FBQyxFQUFSLENBQVcsRUFBWCxDQUFBLEdBQWlCLElBRGhCO0lBRWhCLGNBQUEsRUFBZ0IsT0FBTyxDQUFDLEVBQVIsQ0FBVyxFQUFYLENBQUEsR0FBaUIsSUFGakI7O0VBS2pCLGNBQUEsR0FBaUIsU0FBQyxNQUFEO0FBQ2hCLFFBQUE7SUFBQSxhQUFBLEdBQWdCO0lBQ2hCLElBQUcsTUFBTyxDQUFBLENBQUEsQ0FBUCxLQUFhLEdBQWIsSUFBb0IsTUFBTyxDQUFBLENBQUEsQ0FBUCxLQUFhLEdBQWpDLElBQXdDLE1BQU8sQ0FBQSxDQUFBLENBQVAsS0FBYSxHQUFyRCxJQUE0RCxNQUFPLENBQUEsQ0FBQSxDQUFQLEtBQWEsR0FBNUU7TUFDQyxZQUFBLEdBQWUsTUFBTSxDQUFDLEtBQVAsQ0FBYSxHQUFiO0FBQ2YsV0FBQSxnREFBQTs7UUFDQyxhQUFBLEdBQWdCLGFBQUEsR0FBZ0IsR0FBaEIsR0FBc0I7QUFEdkMsT0FGRDtLQUFBLE1BQUE7TUFLQyxZQUFBLEdBQWUsTUFBTSxDQUFDLEtBQVAsQ0FBYSxHQUFiO01BQ2YsYUFBQSxHQUFnQjtBQUNoQixXQUFBLGdEQUFBOztRQUNDLGFBQUEsR0FBZ0IsYUFBQSxHQUFnQixHQUFoQixHQUFzQjtBQUR2QyxPQVBEOztBQVNBLFdBQU87RUFYUztFQWFqQixPQUFPLENBQUMsTUFBUixDQUFBO0VBQ0EsYUFBQSxHQUFnQixDQUFDLGlCQUFELEVBQW9CLGtCQUFwQixFQUF3QyxrQkFBeEMsRUFBNEQsY0FBNUQsRUFBNEUsVUFBNUUsRUFBd0YsaUJBQXhGLEVBQTJHLFNBQTNHLEVBQXNILFNBQXRILEVBQWlJLE9BQWpJO0VBQ2hCLFNBQUEsR0FBWSxDQUFDLE9BQUQsRUFBVSxPQUFWLEVBQW1CLE9BQW5CLEVBQTRCLE9BQTVCLEVBQXFDLE9BQXJDLEVBQThDLE9BQTlDLEVBQXVELE9BQXZELEVBQWdFLE9BQWhFLEVBQXlFLE9BQXpFLEVBQWtGLE9BQWxGLEVBQTJGLE9BQTNGLEVBQW9HLE9BQXBHLEVBQTZHLE9BQTdHLEVBQXNILG1CQUF0SCxFQUEySSxPQUEzSSxFQUFxSixPQUFySixFQUE4SixPQUE5SixFQUF1SyxPQUF2SyxFQUFnTCxPQUFoTCxFQUF5TCxPQUF6TCxFQUFrTSxPQUFsTSxFQUEyTSxPQUEzTSxFQUFvTixPQUFwTixFQUE2TixPQUE3TixFQUFzTyxPQUF0TyxFQUErTyxPQUEvTyxFQUF3UCxPQUF4UCxFQUFpUSxPQUFqUSxFQUEwUSxPQUExUSxFQUFtUixPQUFuUixFQUE0UixPQUE1UixFQUFxUyxPQUFyUyxFQUE4UyxPQUE5UyxFQUF1VCxPQUF2VCxFQUFnVSxPQUFoVSxFQUF5VSxPQUF6VSxFQUFrVixPQUFsVixFQUEyVixPQUEzVixFQUFvVyxPQUFwVyxFQUE2VyxPQUE3VyxFQUFzWCxPQUF0WCxFQUErWCxPQUEvWCxFQUF3WSxPQUF4WSxFQUFpWixtQkFBalosRUFBc2EsT0FBdGEsRUFBK2EsT0FBL2EsRUFBd2IsT0FBeGIsRUFBaWMsT0FBamMsRUFBMGMsT0FBMWMsRUFBbWQsT0FBbmQsRUFBNGQsT0FBNWQsRUFBcWUsT0FBcmUsRUFBOGUsT0FBOWUsRUFBdWYsT0FBdmYsRUFBZ2dCLE9BQWhnQixFQUF5Z0IsT0FBemdCLEVBQWtoQixPQUFsaEIsRUFBMmhCLE9BQTNoQixFQUFvaUIsT0FBcGlCLEVBQTZpQixPQUE3aUIsRUFBc2pCLE9BQXRqQixFQUErakIsT0FBL2pCLEVBQXdrQixPQUF4a0IsRUFBaWxCLE9BQWpsQixFQUEwbEIsT0FBMWxCLEVBQW1tQixPQUFubUIsRUFBNG1CLE9BQTVtQixFQUFxbkIsT0FBcm5CLEVBQThuQixPQUE5bkIsRUFBdW9CLE9BQXZvQixFQUFncEIsT0FBaHBCLEVBQXlwQixPQUF6cEIsRUFBa3FCLE9BQWxxQixFQUEycUIsT0FBM3FCLEVBQW9yQixPQUFwckIsRUFBNnJCLE9BQTdyQixFQUFzc0IsT0FBdHNCLEVBQStzQixPQUEvc0IsRUFBd3RCLE9BQXh0QixFQUFpdUIsT0FBanVCLEVBQTB1QixPQUExdUIsRUFBbXZCLE9BQW52QixFQUE0dkIsT0FBNXZCLEVBQXF3QixPQUFyd0IsRUFBOHdCLE9BQTl3QixFQUF1eEIsT0FBdnhCLEVBQWd5QixPQUFoeUIsRUFBeXlCLE9BQXp5QixFQUFrekIsT0FBbHpCLEVBQTJ6QixPQUEzekIsRUFBbzBCLE9BQXAwQixFQUE2MEIsT0FBNzBCLEVBQXMxQixPQUF0MUIsRUFBKzFCLFVBQS8xQixFQUEyMkIsbUJBQTMyQixFQUFnNEIsT0FBaDRCLEVBQXk0QixVQUF6NEIsRUFBcTVCLE9BQXI1QixFQUE4NUIsT0FBOTVCLEVBQXU2QixPQUF2NkIsRUFBZzdCLG1CQUFoN0IsRUFBcThCLE9BQXI4QixFQUE4OEIsT0FBOThCLEVBQXU5QixPQUF2OUIsRUFBZytCLE9BQWgrQixFQUF5K0IsT0FBeitCLEVBQWsvQixPQUFsL0IsRUFBMi9CLE9BQTMvQixFQUFvZ0MsT0FBcGdDLEVBQTZnQyxtQkFBN2dDLEVBQWtpQyxPQUFsaUMsRUFBMmlDLE9BQTNpQyxFQUFvakMsT0FBcGpDLEVBQTZqQyxPQUE3akMsRUFBc2tDLE9BQXRrQyxFQUEra0MsT0FBL2tDLEVBQXdsQyxPQUF4bEMsRUFBaW1DLE9BQWptQyxFQUEwbUMsT0FBMW1DLEVBQW1uQyxPQUFubkMsRUFBNG5DLE9BQTVuQyxFQUFxb0MsT0FBcm9DLEVBQThvQyxPQUE5b0MsRUFBdXBDLE9BQXZwQyxFQUFncUMsT0FBaHFDLEVBQXlxQyxPQUF6cUMsRUFBa3JDLE9BQWxyQyxFQUEyckMsT0FBM3JDLEVBQW9zQyxPQUFwc0MsRUFBNnNDLE9BQTdzQyxFQUFzdEMsT0FBdHRDLEVBQSt0QyxPQUEvdEMsRUFBd3VDLE9BQXh1QyxFQUFpdkMsT0FBanZDLEVBQTB2QyxPQUExdkMsRUFBbXdDLE9BQW53QyxFQUE0d0MsT0FBNXdDLEVBQXF4QyxPQUFyeEMsRUFBOHhDLE9BQTl4QyxFQUF1eUMsT0FBdnlDLEVBQWd6QyxPQUFoekMsRUFBeXpDLE9BQXp6QyxFQUFrMEMsT0FBbDBDLEVBQTIwQyxPQUEzMEMsRUFBbzFDLE9BQXAxQyxFQUE2MUMsT0FBNzFDLEVBQXMyQyxPQUF0MkMsRUFBKzJDLE9BQS8yQyxFQUF3M0MsT0FBeDNDLEVBQWk0QyxPQUFqNEMsRUFBMDRDLE9BQTE0QyxFQUFtNUMsT0FBbjVDLEVBQTQ1QyxPQUE1NUMsRUFBcTZDLE9BQXI2QyxFQUE4NkMsT0FBOTZDLEVBQXU3Qyx1REFBdjdDLEVBQWcvQyx1REFBaC9DLEVBQXlpRCxPQUF6aUQsRUFBa2pELDRFQUFsakQsRUFBZ29ELDRFQUFob0QsRUFBOHNELE9BQTlzRCxFQUF1dEQsaURBQXZ0RCxFQUEwd0Qsc0VBQTF3RCxFQUFrMUQsc0VBQWwxRCxFQUEwNUQsc0VBQTE1RCxFQUFrK0QsaURBQWwrRCxFQUFxaEUsaURBQXJoRSxFQUF3a0Usc0VBQXhrRSxFQUFncEUsc0VBQWhwRSxFQUF3dEUsc0VBQXh0RSxFQUFneUUsaURBQWh5RSxFQUFtMUUsaURBQW4xRSxFQUFzNEUsc0VBQXQ0RSxFQUE4OEUsc0VBQTk4RSxFQUFzaEYsc0VBQXRoRixFQUE4bEYsT0FBOWxGLEVBQXVtRixPQUF2bUYsRUFBZ25GLE9BQWhuRixFQUF5bkYsT0FBem5GLEVBQWtvRixPQUFsb0YsRUFBMm9GLE9BQTNvRixFQUFvcEYsT0FBcHBGLEVBQTZwRixPQUE3cEYsRUFBc3FGLE9BQXRxRixFQUErcUYsT0FBL3FGLEVBQXdyRixPQUF4ckYsRUFBaXNGLE9BQWpzRixFQUEwc0YsT0FBMXNGLEVBQW10RixPQUFudEYsRUFBNHRGLE9BQTV0RixFQUFxdUYsT0FBcnVGLEVBQTh1RixPQUE5dUYsRUFBdXZGLFVBQXZ2RixFQUFtd0YsT0FBbndGLEVBQTR3RixPQUE1d0YsRUFBcXhGLE9BQXJ4RixFQUE4eEYsT0FBOXhGLEVBQXV5RixPQUF2eUYsRUFBZ3pGLE9BQWh6RixFQUF5ekYsT0FBenpGLEVBQWswRixPQUFsMEYsRUFBMjBGLE9BQTMwRixFQUFvMUYsT0FBcDFGLEVBQTYxRixPQUE3MUYsRUFBczJGLE9BQXQyRixFQUErMkYsT0FBLzJGLEVBQXczRixPQUF4M0YsRUFBaTRGLE9BQWo0RixFQUEwNEYsT0FBMTRGLEVBQW01RixPQUFuNUYsRUFBNDVGLE9BQTU1RixFQUFxNkYsT0FBcjZGLEVBQTg2RixPQUE5NkYsRUFBdTdGLE9BQXY3RixFQUFnOEYsT0FBaDhGLEVBQXk4RixPQUF6OEYsRUFBazlGLE9BQWw5RixFQUEyOUYsT0FBMzlGLEVBQW8rRixPQUFwK0YsRUFBNitGLE9BQTcrRixFQUFzL0YsT0FBdC9GLEVBQSsvRixPQUEvL0YsRUFBd2dHLE9BQXhnRyxFQUFpaEcsT0FBamhHLEVBQTBoRyxPQUExaEcsRUFBbWlHLE9BQW5pRyxFQUE0aUcsT0FBNWlHLEVBQXFqRyxPQUFyakcsRUFBOGpHLE9BQTlqRyxFQUF1a0csT0FBdmtHLEVBQWdsRyxPQUFobEcsRUFBeWxHLE9BQXpsRyxFQUFrbUcsT0FBbG1HLEVBQTJtRyxPQUEzbUcsRUFBb25HLE9BQXBuRyxFQUE2bkcsT0FBN25HLEVBQXNvRyxPQUF0b0csRUFBK29HLE9BQS9vRyxFQUF3cEcsT0FBeHBHLEVBQWlxRyxPQUFqcUcsRUFBMHFHLE9BQTFxRyxFQUFtckcsT0FBbnJHLEVBQTRyRyxPQUE1ckcsRUFBcXNHLE9BQXJzRyxFQUE4c0csT0FBOXNHLEVBQXV0RyxPQUF2dEcsRUFBZ3VHLE9BQWh1RyxFQUF5dUcsT0FBenVHLEVBQWt2RyxPQUFsdkcsRUFBMnZHLE9BQTN2RyxFQUFvd0csT0FBcHdHLEVBQTZ3RyxPQUE3d0csRUFBc3hHLE9BQXR4RyxFQUEreEcsT0FBL3hHLEVBQXd5RyxPQUF4eUcsRUFBaXpHLE9BQWp6RyxFQUEwekcsT0FBMXpHLEVBQW0wRyxPQUFuMEcsRUFBNDBHLE9BQTUwRyxFQUFxMUcsT0FBcjFHLEVBQTgxRyxPQUE5MUcsRUFBdTJHLE9BQXYyRyxFQUFnM0csT0FBaDNHLEVBQXkzRyxPQUF6M0csRUFBazRHLE9BQWw0RyxFQUEyNEcsT0FBMzRHLEVBQW81RyxPQUFwNUcsRUFBNjVHLE9BQTc1RyxFQUFzNkcsT0FBdDZHLEVBQSs2RyxPQUEvNkcsRUFBdzdHLE9BQXg3RyxFQUFpOEcsT0FBajhHLEVBQTA4RyxPQUExOEcsRUFBbTlHLE9BQW45RyxFQUE0OUcsT0FBNTlHLEVBQXErRyxPQUFyK0csRUFBOCtHLE9BQTkrRyxFQUF1L0csT0FBdi9HLEVBQWdnSCxPQUFoZ0gsRUFBeWdILE9BQXpnSCxFQUFraEgsT0FBbGhILEVBQTJoSCxPQUEzaEgsRUFBb2lILE9BQXBpSCxFQUE2aUgsT0FBN2lILEVBQXNqSCxPQUF0akgsRUFBK2pILFVBQS9qSCxFQUEya0gsT0FBM2tILEVBQW9sSCxPQUFwbEgsRUFBNmxILE9BQTdsSCxFQUFzbUgsT0FBdG1ILEVBQSttSCxPQUEvbUgsRUFBd25ILE9BQXhuSCxFQUFpb0gsT0FBam9ILEVBQTBvSCxPQUExb0gsRUFBbXBILE9BQW5wSCxFQUE0cEgsT0FBNXBILEVBQXFxSCxPQUFycUgsRUFBOHFILE9BQTlxSCxFQUF1ckgsT0FBdnJILEVBQWdzSCxPQUFoc0gsRUFBeXNILE9BQXpzSCxFQUFrdEgsT0FBbHRILEVBQTJ0SCxPQUEzdEgsRUFBb3VILE9BQXB1SCxFQUE2dUgsT0FBN3VILEVBQXN2SCxPQUF0dkgsRUFBK3ZILE9BQS92SCxFQUF3d0gsT0FBeHdILEVBQWl4SCxPQUFqeEgsRUFBMHhILE9BQTF4SCxFQUFteUgsT0FBbnlILEVBQTR5SCxPQUE1eUgsRUFBcXpILE9BQXJ6SCxFQUE4ekgsT0FBOXpILEVBQXUwSCxPQUF2MEgsRUFBZzFILE9BQWgxSCxFQUF5MUgsT0FBejFILEVBQWsySCxPQUFsMkgsRUFBMjJILE9BQTMySCxFQUFvM0gsT0FBcDNILEVBQTYzSCxPQUE3M0gsRUFBczRILE9BQXQ0SCxFQUErNEgsT0FBLzRILEVBQXc1SCxtQkFBeDVILEVBQTY2SCxPQUE3NkgsRUFBczdILE9BQXQ3SCxFQUErN0gsVUFBLzdILEVBQTI4SCxtQkFBMzhILEVBQWcrSCxtQkFBaCtILEVBQXEvSCxPQUFyL0gsRUFBOC9ILG1CQUE5L0gsRUFBbWhJLE9BQW5oSSxFQUE0aEksT0FBNWhJLEVBQXFpSSxtQkFBcmlJLEVBQTBqSSxPQUExakksRUFBbWtJLFVBQW5rSSxFQUEra0ksT0FBL2tJLEVBQXdsSSxtQkFBeGxJLEVBQTZtSSxPQUE3bUksRUFBc25JLE9BQXRuSSxFQUErbkksbUJBQS9uSSxFQUFvcEksT0FBcHBJLEVBQTZwSSxtQkFBN3BJLEVBQWtySSxtQkFBbHJJLEVBQXVzSSxPQUF2c0ksRUFBZ3RJLE9BQWh0SSxFQUF5dEksT0FBenRJLEVBQWt1SSxPQUFsdUksRUFBMnVJLG1CQUEzdUksRUFBZ3dJLG1CQUFod0ksRUFBcXhJLE9BQXJ4SSxFQUE4eEksT0FBOXhJLEVBQXV5SSxPQUF2eUksRUFBZ3pJLE9BQWh6SSxFQUF5ekksT0FBenpJLEVBQWswSSxPQUFsMEksRUFBMjBJLE9BQTMwSSxFQUFvMUksT0FBcDFJLEVBQTYxSSxPQUE3MUksRUFBczJJLE9BQXQySSxFQUErMkksT0FBLzJJLEVBQXczSSxPQUF4M0ksRUFBaTRJLE9BQWo0SSxFQUEwNEksT0FBMTRJLEVBQW01SSxPQUFuNUksRUFBNDVJLE9BQTU1SSxFQUFxNkksT0FBcjZJLEVBQTg2SSxPQUE5NkksRUFBdTdJLE9BQXY3SSxFQUFnOEksT0FBaDhJLEVBQXk4SSxPQUF6OEksRUFBazlJLE9BQWw5SSxFQUEyOUksT0FBMzlJLEVBQW8rSSxPQUFwK0ksRUFBNitJLE9BQTcrSSxFQUFzL0ksT0FBdC9JLEVBQSsvSSxPQUEvL0ksRUFBd2dKLE9BQXhnSixFQUFpaEosT0FBamhKLEVBQTBoSixPQUExaEosRUFBbWlKLE9BQW5pSixFQUE0aUosT0FBNWlKLEVBQXFqSixPQUFyakosRUFBOGpKLE9BQTlqSixFQUF1a0osT0FBdmtKLEVBQWdsSixPQUFobEosRUFBeWxKLE9BQXpsSixFQUFrbUosT0FBbG1KLEVBQTJtSixPQUEzbUosRUFBb25KLE9BQXBuSixFQUE2bkosT0FBN25KLEVBQXNvSixPQUF0b0osRUFBK29KLE9BQS9vSixFQUF3cEosT0FBeHBKLEVBQWlxSixPQUFqcUosRUFBMHFKLE9BQTFxSixFQUFtckosT0FBbnJKLEVBQTRySixPQUE1ckosRUFBcXNKLE9BQXJzSixFQUE4c0osT0FBOXNKLEVBQXV0SixPQUF2dEosRUFBZ3VKLE9BQWh1SixFQUF5dUosT0FBenVKLEVBQWt2SixPQUFsdkosRUFBMnZKLE9BQTN2SixFQUFvd0osT0FBcHdKLEVBQTZ3SixPQUE3d0osRUFBc3hKLE9BQXR4SixFQUEreEosT0FBL3hKLEVBQXd5SixPQUF4eUosRUFBaXpKLE9BQWp6SixFQUEwekosT0FBMXpKLEVBQW0wSixPQUFuMEosRUFBNDBKLE9BQTUwSixFQUFxMUosT0FBcjFKLEVBQTgxSixPQUE5MUosRUFBdTJKLE9BQXYySixFQUFnM0osT0FBaDNKLEVBQXkzSixtQkFBejNKLEVBQTg0SixPQUE5NEosRUFBdTVKLE9BQXY1SixFQUFnNkosT0FBaDZKLEVBQXc2SixPQUF4NkosRUFBaTdKLE9BQWo3SixFQUEwN0osT0FBMTdKLEVBQW04SixtQkFBbjhKLEVBQXc5SixPQUF4OUosRUFBaStKLE9BQWorSixFQUEwK0osbUJBQTErSixFQUErL0osT0FBLy9KLEVBQXdnSyxPQUF4Z0ssRUFBaWhLLE9BQWpoSyxFQUEwaEssT0FBMWhLLEVBQW1pSyxtQkFBbmlLLEVBQXdqSyxPQUF4akssRUFBaWtLLE9BQWprSyxFQUEwa0ssT0FBMWtLLEVBQW1sSyxPQUFubEssRUFBNGxLLE9BQTVsSyxFQUFxbUssT0FBcm1LLEVBQThtSyxPQUE5bUssRUFBdW5LLFVBQXZuSyxFQUFtb0ssT0FBbm9LLEVBQTRvSyxVQUE1b0ssRUFBd3BLLE9BQXhwSyxFQUFpcUssT0FBanFLLEVBQTBxSyxPQUExcUssRUFBbXJLLE9BQW5ySyxFQUE0ckssT0FBNXJLLEVBQXFzSyxPQUFyc0ssRUFBOHNLLFVBQTlzSyxFQUEwdEssT0FBMXRLLEVBQW11SyxPQUFudUssRUFBNHVLLE9BQTV1SyxFQUFxdkssT0FBcnZLLEVBQTh2SyxPQUE5dkssRUFBdXdLLE9BQXZ3SyxFQUFneEssT0FBaHhLLEVBQXl4SyxPQUF6eEssRUFBa3lLLE9BQWx5SyxFQUEyeUssT0FBM3lLLEVBQW96SyxPQUFwekssRUFBNnpLLE9BQTd6SyxFQUFzMEssT0FBdDBLLEVBQSswSyxPQUEvMEssRUFBdzFLLE9BQXgxSyxFQUFpMkssT0FBajJLLEVBQTAySyxPQUExMkssRUFBbTNLLE9BQW4zSyxFQUE0M0ssT0FBNTNLLEVBQXE0SyxPQUFyNEssRUFBODRLLE9BQTk0SyxFQUF1NUssT0FBdjVLLEVBQWc2SyxPQUFoNkssRUFBeTZLLE9BQXo2SyxFQUFrN0ssT0FBbDdLLEVBQTI3SyxPQUEzN0ssRUFBbzhLLE9BQXA4SyxFQUE2OEssT0FBNzhLLEVBQXM5SyxPQUF0OUssRUFBKzlLLE9BQS85SyxFQUF3K0ssT0FBeCtLLEVBQWkvSyxPQUFqL0ssRUFBMC9LLE9BQTEvSyxFQUFtZ0wsT0FBbmdMLEVBQTRnTCxPQUE1Z0wsRUFBcWhMLE9BQXJoTCxFQUE4aEwsT0FBOWhMLEVBQXVpTCxPQUF2aUwsRUFBZ2pMLE9BQWhqTCxFQUF5akwsT0FBempMLEVBQWtrTCxPQUFsa0wsRUFBMmtMLE9BQTNrTCxFQUFvbEwsT0FBcGxMLEVBQTZsTCxPQUE3bEwsRUFBc21MLE9BQXRtTCxFQUErbUwsT0FBL21MLEVBQXduTCxPQUF4bkwsRUFBZ29MLE9BQWhvTCxFQUF5b0wsT0FBem9MLEVBQWtwTCxPQUFscEwsRUFBMnBMLE9BQTNwTCxFQUFvcUwsT0FBcHFMLEVBQTZxTCxPQUE3cUwsRUFBc3JMLE9BQXRyTCxFQUErckwsT0FBL3JMLEVBQXdzTCxPQUF4c0wsRUFBaXRMLE9BQWp0TCxFQUEwdEwsT0FBMXRMLEVBQW11TCxPQUFudUwsRUFBNHVMLE9BQTV1TCxFQUFxdkwsT0FBcnZMLEVBQTh2TCxPQUE5dkwsRUFBdXdMLE9BQXZ3TCxFQUFneEwsT0FBaHhMLEVBQXl4TCxPQUF6eEwsRUFBa3lMLE9BQWx5TCxFQUEyeUwsT0FBM3lMLEVBQW96TCxPQUFwekwsRUFBNnpMLE9BQTd6TCxFQUFzMEwsT0FBdDBMLEVBQSswTCxPQUEvMEwsRUFBdzFMLG1CQUF4MUwsRUFBNjJMLE9BQTcyTCxFQUFzM0wsT0FBdDNMLEVBQSszTCxtQkFBLzNMLEVBQW81TCxPQUFwNUwsRUFBNjVMLE9BQTc1TCxFQUFzNkwsVUFBdDZMLEVBQWs3TCxPQUFsN0wsRUFBMjdMLE9BQTM3TCxFQUFvOEwsT0FBcDhMLEVBQTY4TCxPQUE3OEwsRUFBczlMLG1CQUF0OUwsRUFBMitMLE9BQTMrTCxFQUFvL0wsbUJBQXAvTCxFQUF5Z00sT0FBemdNLEVBQWtoTSxPQUFsaE0sRUFBMmhNLE9BQTNoTSxFQUFvaU0sT0FBcGlNLEVBQTZpTSxPQUE3aU0sRUFBc2pNLE9BQXRqTSxFQUErak0sT0FBL2pNLEVBQXdrTSxPQUF4a00sRUFBaWxNLE9BQWpsTSxFQUEwbE0sT0FBMWxNLEVBQW1tTSxPQUFubU0sRUFBNG1NLE9BQTVtTSxFQUFxbk0sbUJBQXJuTSxFQUEwb00sT0FBMW9NLEVBQW1wTSxVQUFucE0sRUFBK3BNLE9BQS9wTSxFQUF3cU0sT0FBeHFNLEVBQWlyTSxPQUFqck0sRUFBMHJNLE9BQTFyTSxFQUFtc00sT0FBbnNNLEVBQTRzTSxtQkFBNXNNLEVBQWl1TSxPQUFqdU0sRUFBMHVNLE9BQTF1TSxFQUFtdk0sT0FBbnZNLEVBQTR2TSxPQUE1dk0sRUFBcXdNLE9BQXJ3TSxFQUE4d00sT0FBOXdNLEVBQXV4TSxPQUF2eE0sRUFBZ3lNLE9BQWh5TSxFQUF5eU0sT0FBenlNLEVBQWt6TSxPQUFsek0sRUFBMnpNLE9BQTN6TSxFQUFvME0sT0FBcDBNLEVBQTYwTSxPQUE3ME0sRUFBczFNLE9BQXQxTSxFQUErMU0sT0FBLzFNLEVBQXcyTSxPQUF4Mk0sRUFBaTNNLE9BQWozTSxFQUEwM00sT0FBMTNNLEVBQW00TSxPQUFuNE0sRUFBNDRNLE9BQTU0TSxFQUFxNU0sT0FBcjVNLEVBQTg1TSxPQUE5NU0sRUFBdTZNLE9BQXY2TSxFQUFnN00sT0FBaDdNLEVBQXk3TSxPQUF6N00sRUFBazhNLE9BQWw4TSxFQUEyOE0sT0FBMzhNLEVBQW85TSxPQUFwOU0sRUFBNjlNLE9BQTc5TSxFQUFzK00sT0FBdCtNLEVBQSsrTSxPQUEvK00sRUFBdy9NLE9BQXgvTSxFQUFpZ04sT0FBamdOLEVBQTBnTixPQUExZ04sRUFBbWhOLE9BQW5oTixFQUE0aE4sT0FBNWhOLEVBQXFpTixPQUFyaU4sRUFBOGlOLE9BQTlpTixFQUF1ak4sbUJBQXZqTixFQUE0a04sT0FBNWtOLEVBQXFsTixPQUFybE4sRUFBOGxOLE9BQTlsTixFQUF1bU4sVUFBdm1OLEVBQW1uTixtQkFBbm5OLEVBQXdvTixPQUF4b04sRUFBaXBOLE9BQWpwTixFQUEwcE4sT0FBMXBOLEVBQW1xTixtQkFBbnFOLEVBQXdyTixPQUF4ck4sRUFBaXNOLE9BQWpzTixFQUEwc04sT0FBMXNOLEVBQW10TixPQUFudE4sRUFBNHROLE9BQTV0TixFQUFxdU4sT0FBcnVOLEVBQTh1TixPQUE5dU4sRUFBdXZOLE9BQXZ2TixFQUFnd04sT0FBaHdOLEVBQXl3TixPQUF6d04sRUFBa3hOLE9BQWx4TixFQUEyeE4sT0FBM3hOLEVBQW95TixPQUFweU4sRUFBNnlOLE9BQTd5TixFQUFzek4sT0FBdHpOLEVBQSt6TixPQUEvek4sRUFBdzBOLE9BQXgwTixFQUFpMU4sT0FBajFOLEVBQTAxTixtQkFBMTFOLEVBQSsyTixPQUEvMk4sRUFBdzNOLE9BQXgzTixFQUFpNE4sT0FBajROLEVBQTA0TixPQUExNE4sRUFBbTVOLE9BQW41TixFQUE0NU4sT0FBNTVOLEVBQXE2TixPQUFyNk4sRUFBODZOLFVBQTk2TixFQUEwN04sVUFBMTdOLEVBQXM4TixVQUF0OE4sRUFBazlOLE9BQWw5TixFQUEyOU4sVUFBMzlOLEVBQXUrTixtQkFBditOLEVBQTQvTixPQUE1L04sRUFBcWdPLE9BQXJnTyxFQUE4Z08sT0FBOWdPLEVBQXVoTyxPQUF2aE8sRUFBZ2lPLE9BQWhpTyxFQUF5aU8sT0FBemlPLEVBQWtqTyxPQUFsak8sRUFBMmpPLE9BQTNqTyxFQUFva08sT0FBcGtPLEVBQTZrTyxPQUE3a08sRUFBc2xPLE9BQXRsTyxFQUErbE8sT0FBL2xPLEVBQXdtTyxPQUF4bU8sRUFBaW5PLE9BQWpuTyxFQUEwbk8sT0FBMW5PLEVBQW1vTyxPQUFub08sRUFBNG9PLFVBQTVvTyxFQUF3cE8sT0FBeHBPLEVBQWlxTyxPQUFqcU8sRUFBMHFPLFVBQTFxTyxFQUFzck8sT0FBdHJPLEVBQStyTyxVQUEvck8sRUFBMnNPLE9BQTNzTyxFQUFvdE8sVUFBcHRPLEVBQWd1TyxVQUFodU8sRUFBNHVPLE9BQTV1TyxFQUFxdk8sT0FBcnZPLEVBQTh2TyxPQUE5dk8sRUFBdXdPLE9BQXZ3TyxFQUFneE8sVUFBaHhPLEVBQTR4TyxPQUE1eE8sRUFBcXlPLE9BQXJ5TyxFQUE4eU8sbUJBQTl5TyxFQUFtME8sVUFBbjBPLEVBQSswTyxVQUEvME8sRUFBMjFPLE9BQTMxTyxFQUFvMk8sT0FBcDJPLEVBQTYyTyxPQUE3Mk8sRUFBczNPLE9BQXQzTyxFQUErM08sVUFBLzNPLEVBQTI0TyxPQUEzNE8sRUFBbzVPLE9BQXA1TyxFQUE2NU8sT0FBNzVPLEVBQXM2TyxPQUF0Nk8sRUFBKzZPLE9BQS82TyxFQUF3N08sT0FBeDdPLEVBQWk4TyxPQUFqOE8sRUFBMDhPLE9BQTE4TyxFQUFtOU8sT0FBbjlPLEVBQTQ5TyxPQUE1OU8sRUFBcStPLE9BQXIrTyxFQUE4K08sT0FBOStPLEVBQXUvTyxPQUF2L08sRUFBZ2dQLE9BQWhnUCxFQUF5Z1AsT0FBemdQLEVBQWtoUCxPQUFsaFAsRUFBMmhQLE9BQTNoUCxFQUFvaVAsT0FBcGlQLEVBQTZpUCxPQUE3aVAsRUFBc2pQLE9BQXRqUCxFQUEralAsVUFBL2pQLEVBQTJrUCxPQUEza1AsRUFBb2xQLE9BQXBsUCxFQUE2bFAsT0FBN2xQLEVBQXNtUCxPQUF0bVAsRUFBK21QLE9BQS9tUCxFQUF3blAsT0FBeG5QLEVBQWlvUCxPQUFqb1AsRUFBMG9QLE9BQTFvUCxFQUFtcFAsT0FBbnBQLEVBQTRwUCxPQUE1cFAsRUFBcXFQLE9BQXJxUCxFQUE4cVAsT0FBOXFQLEVBQXVyUCxtQkFBdnJQLEVBQTRzUCxPQUE1c1AsRUFBcXRQLE9BQXJ0UCxFQUE4dFAsT0FBOXRQLEVBQXV1UCxPQUF2dVAsRUFBZ3ZQLE9BQWh2UCxFQUF5dlAsT0FBenZQLEVBQWt3UCxPQUFsd1AsRUFBMndQLE9BQTN3UCxFQUFveFAsT0FBcHhQLEVBQTZ4UCxPQUE3eFAsRUFBc3lQLE9BQXR5UCxFQUEreVAsT0FBL3lQLEVBQXd6UCxPQUF4elAsRUFBaTBQLE9BQWowUCxFQUEwMFAsT0FBMTBQLEVBQW0xUCxPQUFuMVAsRUFBNDFQLE9BQTUxUCxFQUFxMlAsT0FBcjJQLEVBQTgyUCxPQUE5MlAsRUFBdTNQLE9BQXYzUCxFQUFnNFAsT0FBaDRQLEVBQXk0UCxPQUF6NFAsRUFBazVQLE9BQWw1UCxFQUEyNVAsT0FBMzVQLEVBQW82UCxPQUFwNlAsRUFBNjZQLE9BQTc2UCxFQUFzN1AsT0FBdDdQLEVBQSs3UCxPQUEvN1AsRUFBdzhQLE9BQXg4UCxFQUFpOVAsT0FBajlQLEVBQTA5UCxPQUExOVAsRUFBbStQLE9BQW4rUCxFQUE0K1AsT0FBNStQLEVBQXEvUCxPQUFyL1AsRUFBOC9QLE9BQTkvUCxFQUF1Z1EsT0FBdmdRLEVBQWdoUSxPQUFoaFEsRUFBeWhRLE9BQXpoUSxFQUFraVEsT0FBbGlRLEVBQTJpUSxPQUEzaVEsRUFBb2pRLE9BQXBqUSxFQUE2alEsT0FBN2pRLEVBQXNrUSxPQUF0a1EsRUFBK2tRLE9BQS9rUSxFQUF3bFEsT0FBeGxRLEVBQWltUSxPQUFqbVEsRUFBMG1RLG1CQUExbVEsRUFBK25RLE9BQS9uUSxFQUF3b1EsT0FBeG9RLEVBQWlwUSxPQUFqcFEsRUFBMHBRLE9BQTFwUSxFQUFtcVEsT0FBbnFRLEVBQTRxUSxPQUE1cVEsRUFBcXJRLE9BQXJyUSxFQUE4clEsT0FBOXJRLEVBQXVzUSxPQUF2c1EsRUFBZ3RRLE9BQWh0USxFQUF5dFEsT0FBenRRLEVBQWt1USxPQUFsdVEsRUFBMnVRLE9BQTN1USxFQUFvdlEsbUJBQXB2USxFQUF5d1EsT0FBendRLEVBQWt4USxtQkFBbHhRLEVBQXV5USxPQUF2eVEsRUFBZ3pRLE9BQWh6USxFQUF5elEsT0FBenpRLEVBQWswUSxPQUFsMFEsRUFBMjBRLE9BQTMwUSxFQUFvMVEsT0FBcDFRLEVBQTYxUSxtQkFBNzFRLEVBQWszUSxPQUFsM1EsRUFBMjNRLE9BQTMzUSxFQUFvNFEsT0FBcDRRLEVBQTY0USxPQUE3NFEsRUFBczVRLE9BQXQ1USxFQUErNVEsbUJBQS81USxFQUFvN1EsT0FBcDdRLEVBQTY3USxPQUE3N1EsRUFBczhRLE9BQXQ4USxFQUErOFEsT0FBLzhRLEVBQXc5USxPQUF4OVEsRUFBaStRLE9BQWorUSxFQUEwK1EsT0FBMStRLEVBQW0vUSxPQUFuL1EsRUFBNC9RLG1CQUE1L1EsRUFBaWhSLG1CQUFqaFIsRUFBc2lSLG1CQUF0aVIsRUFBMmpSLE9BQTNqUixFQUFva1IsbUJBQXBrUixFQUF5bFIsbUJBQXpsUixFQUE4bVIsT0FBOW1SLEVBQXVuUixPQUF2blIsRUFBZ29SLG1CQUFob1IsRUFBcXBSLG1CQUFycFIsRUFBMHFSLE9BQTFxUixFQUFtclIsVUFBbnJSLEVBQStyUixtQkFBL3JSLEVBQW90UixtQkFBcHRSLEVBQXl1UixtQkFBenVSLEVBQTh2UixtQkFBOXZSLEVBQW14UixtQkFBbnhSLEVBQXd5UixtQkFBeHlSLEVBQTZ6UixtQkFBN3pSLEVBQWsxUixtQkFBbDFSLEVBQXUyUixtQkFBdjJSLEVBQTQzUixtQkFBNTNSLEVBQWk1UixtQkFBajVSLEVBQXM2UixtQkFBdDZSLEVBQTI3UixPQUEzN1IsRUFBbzhSLFVBQXA4UixFQUFnOVIsT0FBaDlSLEVBQXk5UixPQUF6OVIsRUFBaytSLG1CQUFsK1IsRUFBdS9SLG1CQUF2L1IsRUFBNGdTLE9BQTVnUyxFQUFxaFMsT0FBcmhTLEVBQThoUyxPQUE5aFMsRUFBdWlTLGdCQUF2aVMsRUFBeWpTLE9BQXpqUyxFQUFra1MsT0FBbGtTLEVBQTJrUyxnQkFBM2tTLEVBQTZsUyxtQkFBN2xTLEVBQWtuUyxPQUFsblMsRUFBMm5TLE9BQTNuUyxFQUFvb1MsT0FBcG9TLEVBQTZvUyxPQUE3b1MsRUFBc3BTLG1CQUF0cFMsRUFBMnFTLG1CQUEzcVMsRUFBZ3NTLE9BQWhzUyxFQUF5c1MsT0FBenNTLEVBQWt0UyxPQUFsdFMsRUFBMnRTLGdCQUEzdFMsRUFBNnVTLGdCQUE3dVMsRUFBK3ZTLE9BQS92UyxFQUF3d1MsT0FBeHdTLEVBQWl4UyxnQkFBanhTLEVBQW15UyxPQUFueVMsRUFBNHlTLG1CQUE1eVMsRUFBaTBTLE9BQWowUyxFQUEwMFMsT0FBMTBTLEVBQW0xUyxVQUFuMVMsRUFBKzFTLG1CQUEvMVMsRUFBbzNTLE9BQXAzUyxFQUE2M1MsbUJBQTczUyxFQUFrNVMsT0FBbDVTLEVBQTI1UyxPQUEzNVMsRUFBbzZTLE9BQXA2UyxFQUE2NlMsT0FBNzZTLEVBQXM3UyxPQUF0N1MsRUFBKzdTLE9BQS83UyxFQUF3OFMsbUJBQXg4UyxFQUE2OVMsVUFBNzlTLEVBQXkrUyxVQUF6K1MsRUFBcS9TLFVBQXIvUyxFQUFpZ1QsbUJBQWpnVCxFQUFzaFQsbUJBQXRoVCxFQUEyaVQsT0FBM2lULEVBQW9qVCxPQUFwalQsRUFBNmpULE9BQTdqVCxFQUFza1QsT0FBdGtULEVBQStrVCxVQUEva1QsRUFBMmxULG1CQUEzbFQsRUFBZ25ULG1CQUFoblQsRUFBcW9ULE9BQXJvVCxFQUE4b1QsT0FBOW9ULEVBQXVwVCxtQkFBdnBULEVBQTRxVCxnQkFBNXFULEVBQThyVCxPQUE5clQsRUFBdXNULG1CQUF2c1QsRUFBNHRULG1CQUE1dFQsRUFBaXZULFVBQWp2VCxFQUE2dlQsVUFBN3ZULEVBQXl3VCxPQUF6d1QsRUFBa3hULE9BQWx4VCxFQUEyeFQsVUFBM3hULEVBQXV5VCxPQUF2eVQsRUFBZ3pULG1CQUFoelQsRUFBcTBULE9BQXIwVCxFQUE4MFQsZ0JBQTkwVCxFQUFnMlQsT0FBaDJULEVBQXkyVCxPQUF6MlQsRUFBazNULE9BQWwzVCxFQUEyM1QsT0FBMzNULEVBQW80VCxtQkFBcDRULEVBQXk1VCxPQUF6NVQsRUFBazZULE9BQWw2VCxFQUEyNlQsZ0JBQTM2VCxFQUE2N1QsT0FBNzdULEVBQXM4VCxPQUF0OFQsRUFBKzhULE9BQS84VCxFQUF3OVQsT0FBeDlULEVBQWkrVCxPQUFqK1QsRUFBMCtULE9BQTErVCxFQUFtL1QsT0FBbi9ULEVBQTQvVCxPQUE1L1QsRUFBcWdVLE9BQXJnVSxFQUE4Z1UsT0FBOWdVLEVBQXVoVSxPQUF2aFUsRUFBZ2lVLE9BQWhpVSxFQUF5aVUsT0FBemlVLEVBQWtqVSxPQUFsalUsRUFBMmpVLE9BQTNqVSxFQUFva1Usc0JBQXBrVSxFQUE0bFUsc0JBQTVsVSxFQUFvblUsc0JBQXBuVSxFQUE0b1Usc0JBQTVvVSxFQUFvcVUsc0JBQXBxVSxFQUE0clUsc0JBQTVyVSxFQUFvdFUsc0JBQXB0VSxFQUE0dVUsc0JBQTV1VSxFQUFvd1Usc0JBQXB3VSxFQUE0eFUsc0JBQTV4VSxFQUFvelUsT0FBcHpVLEVBQTZ6VSxPQUE3elUsRUFBczBVLG1CQUF0MFUsRUFBMjFVLFVBQTMxVSxFQUF1MlUsVUFBdjJVLEVBQW0zVSxVQUFuM1UsRUFBKzNVLFVBQS8zVSxFQUEyNFUsVUFBMzRVLEVBQXU1VSxVQUF2NVUsRUFBbTZVLFVBQW42VSxFQUErNlUsVUFBLzZVLEVBQTI3VSxPQUEzN1UsRUFBbzhVLE9BQXA4VSxFQUE2OFUsT0FBNzhVLEVBQXM5VSxtQkFBdDlVLEVBQTIrVSxPQUEzK1UsRUFBby9VLE9BQXAvVSxFQUE2L1UsVUFBNy9VLEVBQXlnVixVQUF6Z1YsRUFBcWhWLG1CQUFyaFYsRUFBMGlWLG1CQUExaVYsRUFBK2pWLG1CQUEvalYsRUFBb2xWLG1CQUFwbFYsRUFBeW1WLG1CQUF6bVYsRUFBOG5WLG1CQUE5blYsRUFBbXBWLG1CQUFucFYsRUFBd3FWLG1CQUF4cVYsRUFBNnJWLG1CQUE3clYsRUFBa3RWLG1CQUFsdFYsRUFBdXVWLE9BQXZ1VixFQUFndlYsbUJBQWh2VixFQUFxd1YsbUJBQXJ3VixFQUEweFYsbUJBQTF4VixFQUEreVYsbUJBQS95VixFQUFvMFYsc0JBQXAwVixFQUE0MVYsc0JBQTUxVixFQUFvM1YsbUJBQXAzVixFQUF5NFYsT0FBejRWLEVBQWs1VixPQUFsNVYsRUFBMjVWLE9BQTM1VixFQUFvNlYsT0FBcDZWLEVBQTY2VixPQUE3NlYsRUFBczdWLE9BQXQ3VixFQUErN1YsbUJBQS83VixFQUFvOVYsVUFBcDlWLEVBQWcrVixtQkFBaCtWLEVBQXEvVixPQUFyL1YsRUFBOC9WLFVBQTkvVixFQUEwZ1csVUFBMWdXLEVBQXNoVyxVQUF0aFcsRUFBa2lXLG1CQUFsaVcsRUFBdWpXLE9BQXZqVyxFQUFna1csT0FBaGtXLEVBQXlrVyxnQkFBemtXLEVBQTJsVyxnQkFBM2xXLEVBQTZtVyxtQkFBN21XLEVBQWtvVyxPQUFsb1csRUFBMm9XLE9BQTNvVyxFQUFvcFcsT0FBcHBXLEVBQTZwVyxPQUE3cFcsRUFBc3FXLE9BQXRxVyxFQUErcVcsbUJBQS9xVyxFQUFvc1csT0FBcHNXLEVBQTZzVyxtQkFBN3NXLEVBQWt1VyxtQkFBbHVXLEVBQXV2VyxPQUF2dlcsRUFBZ3dXLE9BQWh3VyxFQUF5d1csT0FBendXLEVBQWt4VyxPQUFseFcsRUFBMnhXLE9BQTN4VyxFQUFveVcsT0FBcHlXLEVBQTZ5VyxPQUE3eVcsRUFBc3pXLG1CQUF0elcsRUFBMjBXLG1CQUEzMFcsRUFBZzJXLG1CQUFoMlcsRUFBcTNXLG1CQUFyM1csRUFBMDRXLE9BQTE0VyxFQUFtNVcsbUJBQW41VyxFQUF3NlcsbUJBQXg2VyxFQUE2N1csbUJBQTc3VyxFQUFrOVcsbUJBQWw5VyxFQUF1K1csT0FBditXLEVBQWcvVyxPQUFoL1csRUFBeS9XLE9BQXovVyxFQUFrZ1gsT0FBbGdYLEVBQTJnWCxPQUEzZ1gsRUFBb2hYLE9BQXBoWCxFQUE2aFgsT0FBN2hYLEVBQXNpWCxPQUF0aVgsRUFBK2lYLE9BQS9pWCxFQUF3algsT0FBeGpYLEVBQWlrWCxPQUFqa1gsRUFBMGtYLGdCQUExa1gsRUFBNGxYLG1CQUE1bFgsRUFBaW5YLG1CQUFqblgsRUFBc29YLG1CQUF0b1gsRUFBMnBYLG1CQUEzcFgsRUFBZ3JYLE9BQWhyWCxFQUF5clgsNEJBQXpyWCxFQUF1dFgsT0FBdnRYLEVBQWd1WCxPQUFodVgsRUFBeXVYLE9BQXp1WCxFQUFrdlgsT0FBbHZYLEVBQTJ2WCxPQUEzdlgsRUFBb3dYLE9BQXB3WCxFQUE2d1gsT0FBN3dYLEVBQXN4WCxPQUF0eFgsRUFBK3hYLE9BQS94WCxFQUF3eVgsT0FBeHlYLEVBQWl6WCxPQUFqelgsRUFBMHpYLE9BQTF6WCxFQUFtMFgsT0FBbjBYLEVBQTQwWCxPQUE1MFgsRUFBcTFYLE9BQXIxWCxFQUE4MVgsT0FBOTFYLEVBQXUyWCxPQUF2MlgsRUFBZzNYLE9BQWgzWCxFQUF5M1gsT0FBejNYLEVBQWs0WCxPQUFsNFgsRUFBMjRYLE9BQTM0WCxFQUFvNVgsT0FBcDVYLEVBQTY1WCxPQUE3NVgsRUFBczZYLE9BQXQ2WCxFQUErNlgsT0FBLzZYLEVBQXc3WCxPQUF4N1gsRUFBaThYLE9BQWo4WCxFQUEwOFgsT0FBMThYLEVBQW05WCxtQkFBbjlYLEVBQXcrWCxtQkFBeCtYLEVBQTYvWCxtQkFBNy9YLEVBQWtoWSxtQkFBbGhZLEVBQXVpWSxtQkFBdmlZLEVBQTRqWSxtQkFBNWpZLEVBQWlsWSxtQkFBamxZLEVBQXNtWSxtQkFBdG1ZLEVBQTJuWSxtQkFBM25ZLEVBQWdwWSxtQkFBaHBZLEVBQXFxWSxtQkFBcnFZLEVBQTByWSxtQkFBMXJZLEVBQStzWSxtQkFBL3NZLEVBQW91WSxtQkFBcHVZLEVBQXl2WSxtQkFBenZZLEVBQTh3WSxtQkFBOXdZLEVBQW15WSxtQkFBbnlZLEVBQXd6WSxtQkFBeHpZLEVBQTYwWSxtQkFBNzBZLEVBQWsyWSxtQkFBbDJZLEVBQXUzWSxtQkFBdjNZLEVBQTQ0WSxtQkFBNTRZLEVBQWk2WSxtQkFBajZZLEVBQXM3WSxtQkFBdDdZLEVBQTI4WSxtQkFBMzhZLEVBQWcrWSxtQkFBaCtZLEVBQXEvWSxtQkFBci9ZLEVBQTBnWixtQkFBMWdaLEVBQStoWixtQkFBL2haLEVBQW9qWixtQkFBcGpaLEVBQXlrWixtQkFBemtaLEVBQThsWixtQkFBOWxaLEVBQW1uWixtQkFBbm5aLEVBQXdvWixtQkFBeG9aLEVBQTZwWixtQkFBN3BaLEVBQWtyWixtQkFBbHJaLEVBQXVzWixtQkFBdnNaLEVBQTR0WixtQkFBNXRaLEVBQWl2WixtQkFBanZaLEVBQXN3WixtQkFBdHdaLEVBQTJ4WixtQkFBM3haLEVBQWd6WixtQkFBaHpaLEVBQXEwWixtQkFBcjBaLEVBQTAxWixtQkFBMTFaLEVBQSsyWixtQkFBLzJaLEVBQW80WixtQkFBcDRaLEVBQXk1WixtQkFBejVaLEVBQTg2WixtQkFBOTZaLEVBQW04WixtQkFBbjhaLEVBQXc5WixtQkFBeDlaLEVBQTYrWixtQkFBNytaLEVBQWtnYSxtQkFBbGdhLEVBQXVoYSxtQkFBdmhhLEVBQTRpYSxtQkFBNWlhLEVBQWlrYSxtQkFBamthLEVBQXNsYSxtQkFBdGxhLEVBQTJtYSxtQkFBM21hLEVBQWdvYSxtQkFBaG9hLEVBQXFwYSxtQkFBcnBhLEVBQTBxYSxtQkFBMXFhLEVBQStyYSxtQkFBL3JhLEVBQW90YSxtQkFBcHRhLEVBQXl1YSxtQkFBenVhLEVBQTh2YSxtQkFBOXZhLEVBQW14YSxtQkFBbnhhLEVBQXd5YSxtQkFBeHlhLEVBQTZ6YSxtQkFBN3phLEVBQWsxYSxtQkFBbDFhLEVBQXUyYSxtQkFBdjJhLEVBQTQzYSxtQkFBNTNhLEVBQWk1YSxtQkFBajVhLEVBQXM2YSxtQkFBdDZhLEVBQTI3YSxtQkFBMzdhLEVBQWc5YSxtQkFBaDlhLEVBQXErYSxtQkFBcithLEVBQTAvYSxtQkFBMS9hLEVBQStnYixtQkFBL2diLEVBQW9pYixtQkFBcGliLEVBQXlqYixtQkFBempiLEVBQThrYixtQkFBOWtiLEVBQW1tYixtQkFBbm1iLEVBQXduYixtQkFBeG5iLEVBQTZvYixtQkFBN29iLEVBQWtxYixtQkFBbHFiLEVBQXVyYixtQkFBdnJiLEVBQTRzYixtQkFBNXNiLEVBQWl1YixtQkFBanViLEVBQXN2YixtQkFBdHZiLEVBQTJ3YixtQkFBM3diLEVBQWd5YixtQkFBaHliLEVBQXF6YixtQkFBcnpiLEVBQTAwYixtQkFBMTBiLEVBQSsxYixtQkFBLzFiLEVBQW8zYixtQkFBcDNiLEVBQXk0YixtQkFBejRiLEVBQTg1YixtQkFBOTViLEVBQW03YixtQkFBbjdiLEVBQXc4YixtQkFBeDhiLEVBQTY5YixtQkFBNzliLEVBQWsvYixtQkFBbC9iLEVBQXVnYyxtQkFBdmdjLEVBQTRoYyxtQkFBNWhjLEVBQWlqYyxtQkFBampjLEVBQXNrYyxtQkFBdGtjLEVBQTJsYyxtQkFBM2xjLEVBQWduYyxtQkFBaG5jLEVBQXFvYyxtQkFBcm9jLEVBQTBwYyxtQkFBMXBjLEVBQStxYyxtQkFBL3FjLEVBQW9zYyxtQkFBcHNjLEVBQXl0YyxtQkFBenRjLEVBQTh1YyxtQkFBOXVjLEVBQW13YyxtQkFBbndjLEVBQXd4YyxtQkFBeHhjLEVBQTZ5YyxtQkFBN3ljLEVBQWswYyxtQkFBbDBjLEVBQXUxYyxtQkFBdjFjLEVBQTQyYyxtQkFBNTJjLEVBQWk0YyxtQkFBajRjLEVBQXM1YyxtQkFBdDVjLEVBQTI2YyxtQkFBMzZjLEVBQWc4YyxtQkFBaDhjLEVBQXE5YyxtQkFBcjljLEVBQTArYyxtQkFBMStjLEVBQSsvYyxtQkFBLy9jLEVBQW9oZCxtQkFBcGhkLEVBQXlpZCxtQkFBemlkLEVBQThqZCxtQkFBOWpkLEVBQW1sZCxtQkFBbmxkLEVBQXdtZCxtQkFBeG1kLEVBQTZuZCxtQkFBN25kLEVBQWtwZCxtQkFBbHBkLEVBQXVxZCxtQkFBdnFkLEVBQTRyZCxtQkFBNXJkLEVBQWl0ZCxtQkFBanRkLEVBQXN1ZCxtQkFBdHVkLEVBQTJ2ZCxtQkFBM3ZkLEVBQWd4ZCxtQkFBaHhkLEVBQXF5ZCxtQkFBcnlkLEVBQTB6ZCxtQkFBMXpkLEVBQSswZCxtQkFBLzBkLEVBQW8yZCxtQkFBcDJkLEVBQXkzZCxtQkFBejNkLEVBQTg0ZCxtQkFBOTRkLEVBQW02ZCxtQkFBbjZkLEVBQXc3ZCxtQkFBeDdkLEVBQTY4ZCxtQkFBNzhkLEVBQWsrZCxtQkFBbCtkLEVBQXUvZCxtQkFBdi9kLEVBQTRnZSxtQkFBNWdlLEVBQWlpZSxtQkFBamllLEVBQXNqZSxtQkFBdGplLEVBQTJrZSxtQkFBM2tlLEVBQWdtZSxtQkFBaG1lLEVBQXFuZSxtQkFBcm5lLEVBQTBvZSxtQkFBMW9lLEVBQStwZSxtQkFBL3BlLEVBQW9yZSxtQkFBcHJlLEVBQXlzZSxtQkFBenNlLEVBQTh0ZSxtQkFBOXRlLEVBQW12ZSxtQkFBbnZlLEVBQXd3ZSxtQkFBeHdlLEVBQTZ4ZSxtQkFBN3hlLEVBQWt6ZSxtQkFBbHplLEVBQXUwZSxtQkFBdjBlLEVBQTQxZSxtQkFBNTFlLEVBQWkzZSxtQkFBajNlLEVBQXM0ZSxtQkFBdDRlLEVBQTI1ZSxtQkFBMzVlLEVBQWc3ZSxtQkFBaDdlLEVBQXE4ZSxtQkFBcjhlLEVBQTA5ZSxtQkFBMTllLEVBQSsrZSxtQkFBLytlLEVBQW9nZixtQkFBcGdmLEVBQXloZixtQkFBemhmLEVBQThpZixtQkFBOWlmLEVBQW1rZixtQkFBbmtmLEVBQXdsZixtQkFBeGxmLEVBQTZtZixtQkFBN21mLEVBQWtvZixtQkFBbG9mLEVBQXVwZixtQkFBdnBmLEVBQTRxZixtQkFBNXFmLEVBQWlzZixtQkFBanNmLEVBQXN0ZixtQkFBdHRmLEVBQTJ1ZixtQkFBM3VmLEVBQWd3ZixtQkFBaHdmLEVBQXF4ZixtQkFBcnhmLEVBQTB5ZixtQkFBMXlmLEVBQSt6ZixtQkFBL3pmLEVBQW8xZixtQkFBcDFmLEVBQXkyZixtQkFBejJmLEVBQTgzZixtQkFBOTNmLEVBQW01ZixtQkFBbjVmLEVBQXc2ZixtQkFBeDZmLEVBQTY3ZixtQkFBNzdmLEVBQWs5ZixtQkFBbDlmLEVBQXUrZixtQkFBditmLEVBQTQvZixtQkFBNS9mLEVBQWloZ0IsbUJBQWpoZ0IsRUFBc2lnQixtQkFBdGlnQixFQUEyamdCLG1CQUEzamdCLEVBQWdsZ0IsbUJBQWhsZ0IsRUFBcW1nQixtQkFBcm1nQixFQUEwbmdCLG1CQUExbmdCLEVBQStvZ0IsbUJBQS9vZ0IsRUFBb3FnQixtQkFBcHFnQixFQUF5cmdCLG1CQUF6cmdCLEVBQThzZ0IsbUJBQTlzZ0IsRUFBbXVnQixtQkFBbnVnQixFQUF3dmdCLG1CQUF4dmdCLEVBQTZ3Z0IsbUJBQTd3Z0IsRUFBa3lnQixtQkFBbHlnQixFQUF1emdCLG1CQUF2emdCLEVBQTQwZ0IsbUJBQTUwZ0IsRUFBaTJnQixtQkFBajJnQixFQUFzM2dCLG1CQUF0M2dCLEVBQTI0Z0IsbUJBQTM0Z0IsRUFBZzZnQixtQkFBaDZnQixFQUFxN2dCLG1CQUFyN2dCLEVBQTA4Z0IsbUJBQTE4Z0IsRUFBKzlnQixtQkFBLzlnQixFQUFvL2dCLG1CQUFwL2dCLEVBQXlnaEIsbUJBQXpnaEIsRUFBOGhoQixtQkFBOWhoQixFQUFtamhCLG1CQUFuamhCLEVBQXdraEIsbUJBQXhraEIsRUFBNmxoQixtQkFBN2xoQixFQUFrbmhCLG1CQUFsbmhCLEVBQXVvaEIsbUJBQXZvaEIsRUFBNHBoQixtQkFBNXBoQixFQUFpcmhCLG1CQUFqcmhCLEVBQXNzaEIsbUJBQXRzaEIsRUFBMnRoQixtQkFBM3RoQixFQUFndmhCLG1CQUFodmhCLEVBQXF3aEIsbUJBQXJ3aEIsRUFBMHhoQixtQkFBMXhoQixFQUEreWhCLG1CQUEveWhCLEVBQW8waEIsbUJBQXAwaEIsRUFBeTFoQixtQkFBejFoQixFQUE4MmhCLG1CQUE5MmhCLEVBQW00aEIsbUJBQW40aEIsRUFBdzVoQixtQkFBeDVoQixFQUE2NmhCLG1CQUE3NmhCLEVBQWs4aEIsbUJBQWw4aEIsRUFBdTloQixtQkFBdjloQixFQUE0K2hCLG1CQUE1K2hCLEVBQWlnaUIsbUJBQWpnaUI7RUFDWixXQUFBLEdBQWM7RUFDZCxlQUFBLEdBQWtCO0FBQ2xCLE9BQUEsNkNBQUE7O0lBQ0MsV0FBVyxDQUFDLElBQVosQ0FBaUIsY0FBQSxDQUFlLEVBQWYsQ0FBakI7QUFERDtFQUlBLHVCQUFBLEdBQTBCLENBQUMsT0FBRCxFQUFVLE9BQVYsRUFBbUIsT0FBbkIsRUFBNEIsT0FBNUIsRUFBcUMsT0FBckMsRUFBNkMsT0FBN0MsRUFBc0QsT0FBdEQsRUFBK0QsT0FBL0QsRUFBd0UsT0FBeEUsRUFBaUYsT0FBakYsRUFBeUYsT0FBekYsRUFBa0csT0FBbEcsRUFBMkcsT0FBM0csRUFBb0gsT0FBcEgsRUFBNkgsT0FBN0gsRUFBcUksT0FBckksRUFBOEksT0FBOUksRUFBdUosT0FBdkosRUFBZ0ssT0FBaEssRUFBeUssT0FBekssRUFBaUwsT0FBakwsRUFBMEwsT0FBMUwsRUFBbU0sT0FBbk0sRUFBNE0sT0FBNU0sRUFBcU4sT0FBck47QUFDMUIsT0FBQSwyREFBQTs7SUFDQyxlQUFlLENBQUMsSUFBaEIsQ0FBcUIsY0FBQSxDQUFlLEVBQWYsQ0FBckI7QUFERDtFQUdBLFFBQVEsQ0FBQyxFQUFULENBQVksTUFBTSxDQUFDLFVBQW5CLEVBQStCLFNBQUE7QUFDOUIsUUFBQTtJQUFBLFFBQVEsQ0FBQyxlQUFULEdBQTJCO0lBQzNCLE9BQUEsR0FBYyxJQUFBLEtBQUEsQ0FBTTtNQUFBLGVBQUEsRUFBZ0IsU0FBaEI7S0FBTjtJQUNkLEdBQUEsR0FBTSxPQUFPLENBQUMsRUFBUixDQUFXLEVBQVg7SUFDTixPQUFPLENBQUMsV0FBUixHQUF1QjtNQUFBLFFBQUEsRUFBUyxDQUFUO01BQVksT0FBQSxFQUFRLENBQXBCO01BQXVCLE1BQUEsRUFBTyxDQUE5QjtNQUFpQyxNQUFBLEVBQU8sR0FBeEM7O0lBQ3ZCLE9BQU8sQ0FBQyxNQUFSLENBQUE7SUFDQSxXQUFBLEdBQWtCLElBQUEsZUFBQSxDQUFnQjtNQUFBLFVBQUEsRUFBVyxPQUFYO01BQW9CLEtBQUEsRUFBTSxPQUFPLENBQUMsS0FBbEM7TUFBeUMsTUFBQSxFQUFPLE9BQU8sQ0FBQyxNQUFSLEdBQWlCLE9BQU8sQ0FBQyxFQUFSLENBQVcsRUFBWCxDQUFqRTtLQUFoQjtJQUNsQixXQUFXLENBQUMsTUFBWixHQUFxQjtJQUNyQixXQUFBLEdBQWMsT0FBTyxDQUFDLEVBQVIsQ0FBVyxDQUFYO0lBQ2QsV0FBQSxHQUFrQixJQUFBLEtBQUEsQ0FBTTtNQUFBLGVBQUEsRUFBZ0IsYUFBaEI7TUFBK0IsSUFBQSxFQUFLLGNBQXBDO01BQW9ELFVBQUEsRUFBVyxPQUEvRDtLQUFOO0lBQ2xCLFdBQVcsQ0FBQyxXQUFaLEdBQ0M7TUFBQSxPQUFBLEVBQVEsQ0FBUjtNQUNBLFFBQUEsRUFBUyxDQURUO01BRUEsTUFBQSxFQUFPLENBRlA7TUFHQSxNQUFBLEVBQU8sRUFIUDs7SUFJRCxHQUFBLEdBQVUsSUFBQSxLQUFBLENBQU07TUFBQSxlQUFBLEVBQWdCLGFBQWhCO01BQStCLFVBQUEsRUFBVyxXQUExQztLQUFOO0lBQ1YsR0FBRyxDQUFDLElBQUosR0FBVztJQUNYLEdBQUcsQ0FBQyxLQUFKLEdBQVk7TUFDWCxXQUFBLEVBQWMsT0FBTyxDQUFDLEVBQVIsQ0FBVyxFQUFYLENBQUEsR0FBaUIsSUFEcEI7TUFFWCxhQUFBLEVBQWdCLEdBRkw7TUFHWCxhQUFBLEVBQWdCLDZDQUhMO01BSVgsT0FBQSxFQUFVLFNBSkM7O0lBTVosR0FBRyxDQUFDLFdBQUosR0FDQztNQUFBLE9BQUEsRUFBUSxFQUFSO01BQ0EsTUFBQSxFQUFPLEVBRFA7TUFFQSxLQUFBLEVBQU0sRUFGTjtNQUdBLE1BQUEsRUFBTyxFQUhQOztJQUtELE9BQU8sQ0FBQyxNQUFSLENBQUE7SUFDQSxHQUFBLEdBQU0sQ0FBQztJQUNQLEdBQUcsQ0FBQyxFQUFKLENBQU8sTUFBTSxDQUFDLEtBQWQsRUFBcUIsU0FBQTthQUNwQixPQUFPLENBQUMsT0FBUixDQUFBO0lBRG9CLENBQXJCO0lBRUEsUUFBQSxHQUFlLElBQUEsS0FBQSxDQUFNO01BQUEsVUFBQSxFQUFXLFdBQVg7TUFBd0IsZUFBQSxFQUFnQixhQUF4QztLQUFOO0lBQ2YsUUFBUSxDQUFDLElBQVQsR0FBZ0IscUVBQUEsR0FDRixDQUFDLE9BQU8sQ0FBQyxFQUFSLENBQVcsRUFBWCxDQUFELENBREUsR0FDYyxjQURkLEdBQzJCLENBQUMsT0FBTyxDQUFDLEVBQVIsQ0FBVyxFQUFYLENBQUQsQ0FEM0IsR0FDMkM7SUFnQjNELFFBQVEsQ0FBQyxXQUFULEdBQ0M7TUFBQSxPQUFBLEVBQVUsQ0FBQyxHQUFELEVBQU0sRUFBTixDQUFWO01BQ0EsTUFBQSxFQUFRLEVBRFI7TUFFQSxLQUFBLEVBQU0sRUFGTjtNQUdBLE1BQUEsRUFBTyxFQUhQOztJQUlELE9BQU8sQ0FBQyxNQUFSLENBQUE7SUFDQSxPQUFBLEdBQWMsSUFBQSxLQUFBLENBQU07TUFBQSxVQUFBLEVBQVcsV0FBWDtNQUF3QixlQUFBLEVBQWdCLGFBQXhDO01BQXVELE9BQUEsRUFBUSxFQUEvRDtLQUFOO0lBQ2QsT0FBTyxDQUFDLElBQVIsR0FBZSxxRUFBQSxHQUNELENBQUMsT0FBTyxDQUFDLEVBQVIsQ0FBVyxFQUFYLENBQUQsQ0FEQyxHQUNlLGNBRGYsR0FDNEIsQ0FBQyxPQUFPLENBQUMsRUFBUixDQUFXLEVBQVgsQ0FBRCxDQUQ1QixHQUM0QztJQWlCM0QsT0FBTyxDQUFDLFdBQVIsR0FDQztNQUFBLE9BQUEsRUFBVSxDQUFDLFFBQUQsRUFBVyxFQUFYLENBQVY7TUFDQSxNQUFBLEVBQVEsRUFEUjtNQUVBLEtBQUEsRUFBTSxFQUZOO01BR0EsTUFBQSxFQUFPLEVBSFA7O0lBSUQsT0FBTyxDQUFDLE1BQVIsQ0FBQTtJQUNBLE9BQUEsR0FBYyxJQUFBLEtBQUEsQ0FBTTtNQUFBLFVBQUEsRUFBVyxXQUFYO01BQXdCLGVBQUEsRUFBZ0IsYUFBeEM7TUFBdUQsT0FBQSxFQUFRLEVBQS9EO0tBQU47SUFDZCxPQUFPLENBQUMsSUFBUixHQUFlLHFFQUFBLEdBQ0QsQ0FBQyxPQUFPLENBQUMsRUFBUixDQUFXLEVBQVgsQ0FBRCxDQURDLEdBQ2UsY0FEZixHQUM0QixDQUFDLE9BQU8sQ0FBQyxFQUFSLENBQVcsRUFBWCxDQUFELENBRDVCLEdBQzRDO0lBc0IzRCxPQUFPLENBQUMsV0FBUixHQUNDO01BQUEsT0FBQSxFQUFVLENBQUMsT0FBRCxFQUFVLEVBQVYsQ0FBVjtNQUNBLE1BQUEsRUFBUSxFQURSO01BRUEsS0FBQSxFQUFNLEVBRk47TUFHQSxNQUFBLEVBQU8sRUFIUDs7SUFJRCxPQUFPLENBQUMsTUFBUixDQUFBO0lBQ0EsSUFBQSxHQUFXLElBQUEsS0FBQSxDQUFNO01BQUEsVUFBQSxFQUFXLFdBQVg7TUFBd0IsZUFBQSxFQUFnQixhQUF4QztNQUF1RCxPQUFBLEVBQVEsRUFBL0Q7S0FBTjtJQUNYLElBQUksQ0FBQyxJQUFMLEdBQVkscUVBQUEsR0FDRSxDQUFDLE9BQU8sQ0FBQyxFQUFSLENBQVcsRUFBWCxDQUFELENBREYsR0FDa0IsY0FEbEIsR0FDK0IsQ0FBQyxPQUFPLENBQUMsRUFBUixDQUFXLEVBQVgsQ0FBRCxDQUQvQixHQUMrQztJQW9CM0QsSUFBSSxDQUFDLFdBQUwsR0FDQztNQUFBLE9BQUEsRUFBVSxDQUFDLE9BQUQsRUFBVSxFQUFWLENBQVY7TUFDQSxNQUFBLEVBQVEsRUFEUjtNQUVBLEtBQUEsRUFBTSxFQUZOO01BR0EsTUFBQSxFQUFPLEVBSFA7O0lBSUQsT0FBTyxDQUFDLE1BQVIsQ0FBQTtJQUNBLFFBQUEsR0FBZSxJQUFBLEtBQUEsQ0FBTTtNQUFBLFVBQUEsRUFBVyxXQUFYO01BQXdCLGVBQUEsRUFBZ0IsYUFBeEM7TUFBdUQsT0FBQSxFQUFRLEVBQS9EO0tBQU47SUFDZixRQUFRLENBQUMsSUFBVCxHQUFnQixxRUFBQSxHQUNGLENBQUMsT0FBTyxDQUFDLEVBQVIsQ0FBVyxFQUFYLENBQUQsQ0FERSxHQUNjLGNBRGQsR0FDMkIsQ0FBQyxPQUFPLENBQUMsRUFBUixDQUFXLEVBQVgsQ0FBRCxDQUQzQixHQUMyQztJQStCM0QsUUFBUSxDQUFDLFdBQVQsR0FDQztNQUFBLE9BQUEsRUFBVSxDQUFDLElBQUQsRUFBTyxFQUFQLENBQVY7TUFDQSxNQUFBLEVBQVEsRUFEUjtNQUVBLEtBQUEsRUFBTSxFQUZOO01BR0EsTUFBQSxFQUFPLEVBSFA7O0lBSUQsT0FBTyxDQUFDLE1BQVIsQ0FBQTtJQUNBLE1BQUEsR0FBYSxJQUFBLEtBQUEsQ0FBTTtNQUFBLFVBQUEsRUFBVyxXQUFYO01BQXdCLGVBQUEsRUFBZ0IsYUFBeEM7TUFBdUQsT0FBQSxFQUFRLEVBQS9EO0tBQU47SUFDYixNQUFNLENBQUMsSUFBUCxHQUFjLHFFQUFBLEdBQ0EsQ0FBQyxPQUFPLENBQUMsRUFBUixDQUFXLEVBQVgsQ0FBRCxDQURBLEdBQ2dCLGNBRGhCLEdBQzZCLENBQUMsT0FBTyxDQUFDLEVBQVIsQ0FBVyxFQUFYLENBQUQsQ0FEN0IsR0FDNkM7SUE0QjNELE1BQU0sQ0FBQyxXQUFQLEdBQ0M7TUFBQSxPQUFBLEVBQVUsQ0FBQyxRQUFELEVBQVcsRUFBWCxDQUFWO01BQ0EsTUFBQSxFQUFRLEVBRFI7TUFFQSxLQUFBLEVBQU0sRUFGTjtNQUdBLE1BQUEsRUFBTyxFQUhQOztJQUlELE9BQU8sQ0FBQyxNQUFSLENBQUE7SUFDQSxPQUFBLEdBQWMsSUFBQSxLQUFBLENBQU07TUFBQSxVQUFBLEVBQVcsV0FBWDtNQUF3QixlQUFBLEVBQWdCLGFBQXhDO01BQXVELE9BQUEsRUFBUSxFQUEvRDtLQUFOO0lBQ2QsT0FBTyxDQUFDLElBQVIsR0FBZSxxRUFBQSxHQUNBLENBQUMsT0FBTyxDQUFDLEVBQVIsQ0FBVyxFQUFYLENBQUQsQ0FEQSxHQUNnQixjQURoQixHQUM2QixDQUFDLE9BQU8sQ0FBQyxFQUFSLENBQVcsRUFBWCxDQUFELENBRDdCLEdBQzZDO0lBZ0I1RCxPQUFPLENBQUMsV0FBUixHQUNDO01BQUEsT0FBQSxFQUFVLENBQUMsTUFBRCxFQUFTLEVBQVQsQ0FBVjtNQUNBLE1BQUEsRUFBUSxFQURSO01BRUEsS0FBQSxFQUFNLEVBRk47TUFHQSxNQUFBLEVBQU8sRUFIUDs7SUFJRCxPQUFPLENBQUMsTUFBUixDQUFBO0lBQ0EsT0FBQSxHQUFjLElBQUEsS0FBQSxDQUFNO01BQUEsVUFBQSxFQUFXLFdBQVg7TUFBd0IsZUFBQSxFQUFnQixhQUF4QztNQUF1RCxPQUFBLEVBQVEsRUFBL0Q7S0FBTjtJQUNkLE9BQU8sQ0FBQyxJQUFSLEdBQWUscUVBQUEsR0FDRCxDQUFDLE9BQU8sQ0FBQyxFQUFSLENBQVcsRUFBWCxDQUFELENBREMsR0FDZSxjQURmLEdBQzRCLENBQUMsT0FBTyxDQUFDLEVBQVIsQ0FBVyxFQUFYLENBQUQsQ0FENUIsR0FDNEM7SUEwQjNELE9BQU8sQ0FBQyxXQUFSLEdBQ0M7TUFBQSxPQUFBLEVBQVUsQ0FBQyxPQUFELEVBQVUsRUFBVixDQUFWO01BQ0EsTUFBQSxFQUFRLEVBRFI7TUFFQSxLQUFBLEVBQU0sRUFGTjtNQUdBLE1BQUEsRUFBTyxFQUhQOztJQUlELE9BQU8sQ0FBQyxNQUFSLENBQUE7SUFDQSxLQUFBLEdBQVksSUFBQSxLQUFBLENBQU07TUFBQSxVQUFBLEVBQVcsV0FBWDtNQUF3QixlQUFBLEVBQWdCLGFBQXhDO01BQXVELE9BQUEsRUFBUSxFQUEvRDtLQUFOO0lBQ1osS0FBSyxDQUFDLElBQU4sR0FBYSxxRUFBQSxHQUNDLENBQUMsT0FBTyxDQUFDLEVBQVIsQ0FBVyxFQUFYLENBQUQsQ0FERCxHQUNpQixjQURqQixHQUM4QixDQUFDLE9BQU8sQ0FBQyxFQUFSLENBQVcsRUFBWCxDQUFELENBRDlCLEdBQzhDO0lBZ0IzRCxLQUFLLENBQUMsV0FBTixHQUNDO01BQUEsT0FBQSxFQUFVLENBQUMsT0FBRCxFQUFVLEVBQVYsQ0FBVjtNQUNBLE1BQUEsRUFBUSxFQURSO01BRUEsS0FBQSxFQUFNLEVBRk47TUFHQSxNQUFBLEVBQU8sRUFIUDs7SUFJRCxPQUFPLENBQUMsTUFBUixDQUFBO0lBRUEsVUFBQSxHQUFhLFNBQUMsRUFBRDtBQUNaLFVBQUE7TUFBQSxHQUFBO01BQ0EsS0FBQSxHQUFRLFdBQVcsQ0FBQyxPQUFaLENBQW9CLEVBQXBCO01BQ1IsR0FBQSxHQUFNLElBQUksQ0FBQyxLQUFMLENBQVcsS0FBQSxHQUFNLENBQWpCO01BQ04sSUFBRyxHQUFBLEdBQU0sQ0FBVDtRQUNDLEdBQUEsR0FBTSxFQURQOztNQUVBLEtBQUEsR0FBWSxJQUFBLEtBQUEsQ0FBTTtRQUFBLENBQUEsRUFBRSxHQUFBLEdBQUksR0FBSixHQUFVLENBQUMsV0FBQSxHQUFjLEdBQWYsQ0FBVixHQUFnQyxPQUFPLENBQUMsRUFBUixDQUFXLENBQVgsQ0FBbEM7UUFBaUQsQ0FBQSxFQUFFLEdBQUEsR0FBSSxHQUFKLEdBQVUsQ0FBQyxXQUFBLEdBQWMsR0FBZixDQUFWLEdBQWdDLE9BQU8sQ0FBQyxFQUFSLENBQVcsRUFBWCxDQUFuRjtRQUFtRyxVQUFBLEVBQVcsV0FBVyxDQUFDLE9BQTFIO1FBQW1JLEtBQUEsRUFBTSxHQUF6STtRQUE4SSxNQUFBLEVBQU8sR0FBcko7UUFBMEosSUFBQSxFQUFLLGtCQUFBLENBQW1CLEVBQW5CLENBQS9KO1FBQXVMLGVBQUEsRUFBZ0IsYUFBdk07T0FBTjtNQUNaLEtBQUssQ0FBQyxJQUFOLEdBQWEsa0JBQUEsQ0FBbUIsRUFBbkI7TUFDYixLQUFLLENBQUMsS0FBTixHQUFjO1FBQ2IsV0FBQSxFQUFjLE9BQU8sQ0FBQyxFQUFSLENBQVcsRUFBWCxDQUFBLEdBQWlCLElBRGxCO1FBRWIsYUFBQSxFQUFnQixHQUFBLEdBQU0sSUFGVDtRQUdiLFlBQUEsRUFBZSxRQUhGOztNQUtkLEtBQUssQ0FBQyxFQUFOLENBQVMsTUFBTSxDQUFDLEtBQWhCLEVBQXVCLFNBQUE7ZUFDdEIsS0FBQSxDQUFNLElBQUMsQ0FBQyxJQUFSO01BRHNCLENBQXZCO01BRUEsWUFBQTthQUNBLEtBQUEsQ0FBTSxZQUFOO0lBaEJZO0lBa0JiLEdBQUEsR0FBTTtJQUNOLFNBQUEsR0FBWTtJQUNaLE9BQUEsR0FBVTtJQUNWLFVBQUEsR0FBYSxXQUFXLENBQUM7SUFDekIsS0FBQSxHQUFRLElBQUksQ0FBQyxJQUFMLENBQVUsVUFBQSxHQUFhLEdBQXZCLENBQUEsR0FBOEI7SUFDdEMsYUFBQSxHQUFnQixVQUFBLEdBQWE7SUFDN0IsWUFBQSxHQUFlO0FBQ2YsU0FBUyxxRkFBVDtNQUNDLENBQUE7QUFERDtJQUlBLFdBQVcsQ0FBQyxFQUFaLENBQWUsTUFBTSxDQUFDLElBQXRCLEVBQTRCLFNBQUE7QUFDM0IsVUFBQTtNQUFBLElBQUcsV0FBVyxDQUFDLE9BQVosR0FBc0IsSUFBdEIsSUFBOEIsWUFBQSxHQUFlLEdBQWhEO0FBQ0M7QUFBQSxhQUFBLHdDQUFBOztVQUNDLFVBQUEsQ0FBVyxFQUFYO0FBREQ7UUFFQSxXQUFXLENBQUMsT0FBWixHQUFzQixLQUh2Qjs7TUFJQSxJQUFHLFdBQVcsQ0FBQyxPQUFaLEdBQXNCLElBQXRCLElBQThCLFlBQUEsR0FBZSxHQUFoRDtBQUNDO0FBQUEsYUFBQSx3Q0FBQTs7VUFDQyxVQUFBLENBQVcsRUFBWDtBQUREO1FBRUEsV0FBVyxDQUFDLE9BQVosR0FBc0IsS0FIdkI7O01BSUEsSUFBRyxXQUFXLENBQUMsT0FBWixHQUFzQixJQUF0QixJQUE4QixZQUFBLEdBQWUsR0FBaEQ7QUFDQztBQUFBLGFBQUEsd0NBQUE7O1VBQ0MsVUFBQSxDQUFXLEVBQVg7QUFERDtRQUVBLFdBQVcsQ0FBQyxPQUFaLEdBQXNCLEtBSHZCOztNQUlBLElBQUcsV0FBVyxDQUFDLE9BQVosR0FBc0IsS0FBdEIsSUFBK0IsWUFBQSxHQUFlLElBQWpEO0FBQ0M7QUFBQSxhQUFBLHdDQUFBOztVQUNDLFVBQUEsQ0FBVyxFQUFYO0FBREQ7UUFFQSxXQUFXLENBQUMsT0FBWixHQUFzQixNQUh2Qjs7TUFJQSxJQUFHLFdBQVcsQ0FBQyxPQUFaLEdBQXNCLEtBQXRCLElBQStCLFlBQUEsR0FBZSxJQUFqRDtBQUNDO0FBQUEsYUFBQSx3Q0FBQTs7VUFDQyxVQUFBLENBQVcsRUFBWDtBQUREO2VBRUEsV0FBVyxDQUFDLE9BQVosR0FBc0IsTUFIdkI7O0lBakIyQixDQUE1QjtJQXVCQSxLQUFLLENBQUMsS0FBTixDQUFZLENBQVosRUFBZSxTQUFBO0FBQ2QsVUFBQTtNQUFBLElBQUcsWUFBQSxHQUFlLEdBQWYsSUFBc0IsV0FBVyxDQUFDLE9BQVosS0FBdUIsQ0FBaEQ7UUFDQyxPQUFBLEdBQVUsV0FBVyxDQUFDO0FBQ3RCO0FBQUE7YUFBQSx3Q0FBQTs7dUJBQ0MsVUFBQSxDQUFXLEVBQVg7QUFERDt1QkFGRDs7SUFEYyxDQUFmO0lBS0EsS0FBSyxDQUFDLEtBQU4sQ0FBWSxHQUFaLEVBQWlCLFNBQUE7QUFDaEIsVUFBQTtNQUFBLElBQUcsWUFBQSxHQUFlLEdBQWYsSUFBc0IsV0FBVyxDQUFDLE9BQVosS0FBdUIsQ0FBaEQ7UUFDQyxPQUFBLEdBQVUsV0FBVyxDQUFDO0FBQ3RCO0FBQUE7YUFBQSx3Q0FBQTs7dUJBQ0MsVUFBQSxDQUFXLEVBQVg7QUFERDt1QkFGRDs7SUFEZ0IsQ0FBakI7SUFLQSxLQUFLLENBQUMsS0FBTixDQUFZLEdBQVosRUFBaUIsU0FBQTtBQUNoQixVQUFBO01BQUEsSUFBRyxZQUFBLEdBQWUsR0FBZixJQUFzQixXQUFXLENBQUMsT0FBWixLQUF1QixDQUFoRDtRQUNDLE9BQUEsR0FBVSxXQUFXLENBQUM7QUFDdEI7QUFBQTthQUFBLHdDQUFBOzt1QkFDQyxVQUFBLENBQVcsRUFBWDtBQUREO3VCQUZEOztJQURnQixDQUFqQjtJQUtBLEtBQUssQ0FBQyxLQUFOLENBQVksR0FBWixFQUFpQixTQUFBO0FBQ2hCLFVBQUE7TUFBQSxJQUFHLFlBQUEsR0FBZSxJQUFmLElBQXVCLFdBQVcsQ0FBQyxPQUFaLEtBQXVCLENBQWpEO1FBQ0MsT0FBQSxHQUFVLFdBQVcsQ0FBQztBQUN0QjtBQUFBO2FBQUEsd0NBQUE7O3VCQUNDLFVBQUEsQ0FBVyxFQUFYO0FBREQ7dUJBRkQ7O0lBRGdCLENBQWpCO0lBS0EsS0FBSyxDQUFDLEtBQU4sQ0FBWSxDQUFaLEVBQWUsU0FBQTtBQUNkLFVBQUE7TUFBQSxJQUFHLFlBQUEsR0FBZSxJQUFmLElBQXVCLFdBQVcsQ0FBQyxPQUFaLEtBQXVCLENBQWpEO1FBQ0MsT0FBQSxHQUFVLFdBQVcsQ0FBQztBQUN0QjtBQUFBO2FBQUEsd0NBQUE7O3VCQUNDLFVBQUEsQ0FBVyxFQUFYO0FBREQ7dUJBRkQ7O0lBRGMsQ0FBZjtBQU9BLFNBQUEsbURBQUE7O01BQ0MsVUFBQSxDQUFXLEVBQVg7QUFERDtBQUVBO0FBQUEsU0FBQSx3Q0FBQTs7TUFDQyxVQUFBLENBQVcsRUFBWDtBQUREO0FBSUE7U0FBQSxpREFBQTs7TUFDQyxLQUFBLEdBQVEsYUFBYSxDQUFDLE9BQWQsQ0FBc0IsR0FBdEI7TUFDUixLQUFBLEdBQVksSUFBQSxLQUFBLENBQU07UUFBQSxVQUFBLEVBQVcsV0FBVyxDQUFDLE9BQXZCO1FBQWdDLGVBQUEsRUFBZ0IsYUFBaEQ7UUFBK0QsQ0FBQSxFQUFFLEtBQUEsR0FBTSxJQUFOLEdBQWEsT0FBTyxDQUFDLEVBQVIsQ0FBVyxDQUFYLENBQTlFO1FBQTZGLE1BQUEsRUFBTyxFQUFwRztRQUF3RyxLQUFBLEVBQU0sR0FBOUc7T0FBTjtNQUNaLEtBQUssQ0FBQyxJQUFOLEdBQWE7bUJBQ2IsS0FBSyxDQUFDLEtBQU4sR0FBYztRQUNiLFdBQUEsRUFBYyxPQUFPLENBQUMsRUFBUixDQUFXLEVBQVgsQ0FBQSxHQUFpQixJQURsQjtRQUViLGFBQUEsRUFBZ0IsR0FGSDtRQUdiLGFBQUEsRUFBZ0IsNkNBSEg7UUFJYixhQUFBLEVBQWdCLE9BQU8sQ0FBQyxFQUFSLENBQVcsRUFBWCxDQUFBLEdBQWlCLElBSnBCO1FBS2IsZ0JBQUEsRUFBbUIsT0FBTyxDQUFDLEVBQVIsQ0FBVyxHQUFYLENBQUEsR0FBa0IsSUFMeEI7UUFNYixPQUFBLEVBQVUsU0FORztRQU9iLGdCQUFBLEVBQW1CLFdBUE47O0FBSmY7O0VBL1g4QixDQUEvQjtFQThZQSxRQUFRLENBQUMsRUFBVCxDQUFZLE1BQU0sQ0FBQyxRQUFuQixFQUE2QixTQUFBO1dBQzVCLFFBQVEsQ0FBQyxlQUFULEdBQTJCO0VBREMsQ0FBN0I7RUFJQSxTQUFBLEdBQWdCLElBQUEsS0FBQSxDQUFNO0lBQUEsVUFBQSxFQUFXLEtBQVg7SUFBa0IsWUFBQSxFQUFhLE9BQU8sQ0FBQyxFQUFSLENBQVcsQ0FBWCxDQUEvQjtJQUE4QyxlQUFBLEVBQWdCLFNBQTlEO0lBQXlFLE9BQUEsRUFBUSxPQUFPLENBQUMsRUFBUixDQUFXLENBQVgsQ0FBakY7SUFBZ0csV0FBQSxFQUFZLFNBQTVHO0lBQXVILEtBQUEsRUFBTSxPQUE3SDtHQUFOO0VBQ2hCLFNBQVMsQ0FBQyxXQUFWLEdBQXlCO0lBQUEsS0FBQSxFQUFNLElBQU47SUFBWSxNQUFBLEVBQU8sRUFBbkI7SUFBdUIsUUFBQSxFQUFTLENBQWhDO0lBQW1DLE1BQUEsRUFBTyxDQUExQzs7RUFDekIsU0FBUyxDQUFDLElBQVYsR0FBaUI7RUFDakIsU0FBUyxDQUFDLEtBQVYsR0FBa0I7SUFDakIsV0FBQSxFQUFjLE9BQU8sQ0FBQyxFQUFSLENBQVcsRUFBWCxDQUFBLEdBQWlCLElBRGQ7SUFFakIsYUFBQSxFQUFnQixHQUZDO0lBR2pCLGFBQUEsRUFBZ0IsNkNBSEM7SUFJakIsWUFBQSxFQUFlLFFBSkU7SUFLakIsYUFBQSxFQUFnQixPQUFPLENBQUMsRUFBUixDQUFXLEVBQVgsQ0FBQSxHQUFpQixJQUxoQjs7RUFRbEIsT0FBTyxDQUFDLE1BQVIsQ0FBQTtFQUVBLFFBQUEsR0FBZSxJQUFBLEtBQUEsQ0FBTTtJQUFBLFVBQUEsRUFBVyxLQUFYO0lBQWtCLFlBQUEsRUFBYSxPQUFPLENBQUMsRUFBUixDQUFXLENBQVgsQ0FBL0I7SUFBOEMsZUFBQSxFQUFnQixPQUE5RDtJQUF1RSxPQUFBLEVBQVEsT0FBTyxDQUFDLEVBQVIsQ0FBVyxDQUFYLENBQS9FO0lBQThGLFdBQUEsRUFBWSxTQUExRztJQUFxSCxLQUFBLEVBQU0sT0FBM0g7R0FBTjtFQUNmLFFBQVEsQ0FBQyxXQUFULEdBQXdCO0lBQUEsS0FBQSxFQUFNLEdBQU47SUFBVyxNQUFBLEVBQU8sRUFBbEI7SUFBc0IsT0FBQSxFQUFRLENBQUMsUUFBRCxFQUFXLENBQVgsQ0FBOUI7SUFBNkMsTUFBQSxFQUFPLENBQXBEOztFQUN4QixRQUFRLENBQUMsSUFBVCxHQUFnQjtFQUNoQixRQUFRLENBQUMsS0FBVCxHQUFpQjtJQUNoQixXQUFBLEVBQWMsT0FBTyxDQUFDLEVBQVIsQ0FBVyxFQUFYLENBQUEsR0FBaUIsSUFEZjtJQUVoQixhQUFBLEVBQWdCLEdBRkE7SUFHaEIsYUFBQSxFQUFnQiw2Q0FIQTtJQUloQixZQUFBLEVBQWUsUUFKQztJQUtoQixhQUFBLEVBQWdCLE9BQU8sQ0FBQyxFQUFSLENBQVcsRUFBWCxDQUFBLEdBQWlCLElBTGpCOztFQVFqQixPQUFPLENBQUMsTUFBUixDQUFBO0VBR0EsUUFBUSxDQUFDLEVBQVQsQ0FBWSxNQUFNLENBQUMsVUFBbkIsRUFBK0IsU0FBQTtXQUM5QixRQUFRLENBQUMsZUFBVCxHQUEyQjtFQURHLENBQS9CO0VBRUEsUUFBUSxDQUFDLEVBQVQsQ0FBWSxNQUFNLENBQUMsUUFBbkIsRUFBNkIsU0FBQTtXQUM1QixRQUFRLENBQUMsZUFBVCxHQUEyQjtFQURDLENBQTdCO0VBSUEsU0FBUyxDQUFDLEVBQVYsQ0FBYSxNQUFNLENBQUMsVUFBcEIsRUFBZ0MsU0FBQTtXQUMvQixTQUFTLENBQUMsZUFBVixHQUE0QjtFQURHLENBQWhDO0VBRUEsU0FBUyxDQUFDLEVBQVYsQ0FBYSxNQUFNLENBQUMsUUFBcEIsRUFBOEIsU0FBQTtXQUM3QixTQUFTLENBQUMsZUFBVixHQUE0QjtFQURDLENBQTlCO0FBSUEsU0FBTztJQUNOLE9BQUEsRUFBVSxLQURKO0lBRU4sTUFBQSxFQUFTLFNBRkg7SUFHTixLQUFBLEVBQVE7TUFDUCxHQUFBLEVBQU0sU0FBVSxDQUFBLENBQUEsQ0FEVDtNQUVQLEdBQUEsRUFBTSxTQUFVLENBQUEsQ0FBQSxDQUZUO01BR1AsR0FBQSxFQUFNLFNBQVUsQ0FBQSxDQUFBLENBSFQ7TUFJUCxHQUFBLEVBQU0sU0FBVSxDQUFBLENBQUEsQ0FKVDtNQUtQLEdBQUEsRUFBTSxTQUFVLENBQUEsQ0FBQSxDQUxUO01BTVAsR0FBQSxFQUFNLFNBQVUsQ0FBQSxDQUFBLENBTlQ7TUFPUCxHQUFBLEVBQU0sU0FBVSxDQUFBLENBQUEsQ0FQVDtNQVFQLEdBQUEsRUFBTSxTQUFVLENBQUEsQ0FBQSxDQVJUO01BU1AsR0FBQSxFQUFNLFNBQVUsQ0FBQSxDQUFBLENBVFQ7TUFVUCxHQUFBLEVBQU0sU0FBVSxDQUFBLENBQUEsQ0FWVDtNQVdQLEdBQUEsRUFBTSxTQUFVLENBQUEsRUFBQSxDQVhUO01BWVAsR0FBQSxFQUFNLFNBQVUsQ0FBQSxFQUFBLENBWlQ7TUFhUCxHQUFBLEVBQU0sU0FBVSxDQUFBLEVBQUEsQ0FiVDtNQWNQLEdBQUEsRUFBTSxTQUFVLENBQUEsRUFBQSxDQWRUO01BZVAsR0FBQSxFQUFNLFNBQVUsQ0FBQSxFQUFBLENBZlQ7TUFnQlAsR0FBQSxFQUFNLFNBQVUsQ0FBQSxFQUFBLENBaEJUO01BaUJQLEdBQUEsRUFBTSxTQUFVLENBQUEsRUFBQSxDQWpCVDtNQWtCUCxHQUFBLEVBQU0sU0FBVSxDQUFBLEVBQUEsQ0FsQlQ7TUFtQlAsR0FBQSxFQUFNLFNBQVUsQ0FBQSxFQUFBLENBbkJUO01Bb0JQLEdBQUEsRUFBTSxTQUFVLENBQUEsRUFBQSxDQXBCVDtNQXFCUCxHQUFBLEVBQU0sU0FBVSxDQUFBLEVBQUEsQ0FyQlQ7TUFzQlAsR0FBQSxFQUFNLFNBQVUsQ0FBQSxFQUFBLENBdEJUO01BdUJQLEdBQUEsRUFBTSxTQUFVLENBQUEsRUFBQSxDQXZCVDtNQXdCUCxHQUFBLEVBQU0sU0FBVSxDQUFBLEVBQUEsQ0F4QlQ7TUF5QlAsR0FBQSxFQUFNLFNBQVUsQ0FBQSxFQUFBLENBekJUO01BMEJQLEdBQUEsRUFBTSxTQUFVLENBQUEsRUFBQSxDQTFCVDtLQUhGOztBQTF2Qlc7Ozs7QUM1bkJuQixPQUFPLENBQUMsS0FBUixHQUFnQjs7QUFFaEIsT0FBTyxDQUFDLFVBQVIsR0FBcUIsU0FBQTtTQUNwQixLQUFBLENBQU0sdUJBQU47QUFEb0I7O0FBR3JCLE9BQU8sQ0FBQyxPQUFSLEdBQWtCLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIiNpT1NLaXQgTW9kdWxlXG4jQnkgS2V2eW4gQXJub3R0IEBrdnluX1xuZnJhbWVyRGV2aWNlcyA9IHtcbiNGdWxsc2NyZWVuXG5cImZ1bGxzY3JlZW5cIiA6IHsgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQsIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcdHNjYWxlOjEsIG1vYmlsZTpmYWxzZSwgcGxhdGZvcm06XCJ3ZWJcIn1cblxuI2lQaG9uZXNcbiMjNVNcblwiYXBwbGUtaXBob25lLTVzLXNwYWNlLWdyYXlcIjogeyBoZWlnaHQ6IDExMzYsIHdpZHRoOiA2NDAsXHRzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cImFwcGxlLWlwaG9uZS01cy1zaWx2ZXJcIjogeyBoZWlnaHQ6IDExMzYsIHdpZHRoOiA2NDAsXHRzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cImFwcGxlLWlwaG9uZS01cy1nb2xkXCI6IHsgaGVpZ2h0OiAxMTM2LCB3aWR0aDogNjQwLFx0c2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXG4jIzVjXG5cImFwcGxlLWlwaG9uZS01Yy1ncmVlblwiOiB7IGhlaWdodDogMTEzNiwgd2lkdGg6IDY0MCxcdHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblwiYXBwbGUtaXBob25lLTVjLWJsdWVcIjogeyBoZWlnaHQ6IDExMzYsIHdpZHRoOiA2NDAsXHRzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cImFwcGxlLWlwaG9uZS01Yy1yZWRcIjogeyBoZWlnaHQ6IDExMzYsIHdpZHRoOiA2NDAsXHRzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cImFwcGxlLWlwaG9uZS01Yy13aGl0ZVwiOiB7IGhlaWdodDogMTEzNiwgd2lkdGg6IDY0MCxcdHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblwiYXBwbGUtaXBob25lLTVjLXllbGxvd1wiOiB7IGhlaWdodDogMTEzNiwgd2lkdGg6IDY0MCxcdHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblwiYXBwbGUtaXBob25lLTVjLXBpbmtcIjogeyBoZWlnaHQ6IDExMzYsIHdpZHRoOiA2NDAsXHRzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG4jIzZzXG5cImFwcGxlLWlwaG9uZS02cy1zcGFjZS1ncmF5XCIgOiB7IGhlaWdodDogMTMzNCwgd2lkdGg6IDc1MCxcdHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblwiYXBwbGUtaXBob25lLTZzLXNpbHZlclwiOiB7IGhlaWdodDogMTMzNCwgd2lkdGg6IDc1MCxcdHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblwiYXBwbGUtaXBob25lLTZzLWdvbGRcIjogeyBoZWlnaHQ6IDEzMzQsIHdpZHRoOiA3NTAsXHRzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cImFwcGxlLWlwaG9uZS02cy1yb3NlLWdvbGRcIjogeyBoZWlnaHQ6IDEzMzQsIHdpZHRoOiA3NTAsXHRzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG4jNnMgcGx1c1xuXCJhcHBsZS1pcGhvbmUtNnMtcGx1cy1nb2xkXCI6IHsgaGVpZ2h0OiAyMjA4LCB3aWR0aDogMTI0MixcdHNjYWxlOiAzLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblwiYXBwbGUtaXBob25lLTZzLXBsdXMtc2lsdmVyXCI6IHsgaGVpZ2h0OiAyMjA4LCB3aWR0aDogMTI0MixcdHNjYWxlOiAzLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblwiYXBwbGUtaXBob25lLTZzLXBsdXMtc3BhY2UtZ3JheVwiOiB7IGhlaWdodDogMjIwOCwgd2lkdGg6IDEyNDIsXHRzY2FsZTogMywgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cImFwcGxlLWlwaG9uZS02cy1wbHVzLXJvc2UtZ29sZFwiOiB7IGhlaWdodDogMjIwOCwgd2lkdGg6IDEyNDIsXHRzY2FsZTogMywgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cbiNpUGFkc1xuXG4jQWlyXG5cblwiYXBwbGUtaXBhZC1haXItMi1nb2xkXCI6IHsgaGVpZ2h0OiAyMDQ4LCB3aWR0aDogMTUzNixcdHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblwiYXBwbGUtaXBhZC1haXItMi1zaWx2ZXJcIjogeyBoZWlnaHQ6IDIwNDgsIHdpZHRoOiAxNTM2LFx0c2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXCJhcHBsZS1pcGFkLWFpci0yLXNwYWNlLWdyYXlcIjogeyBoZWlnaHQ6IDIwNDgsIHdpZHRoOiAxNTM2LFx0c2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXG4jbWluaVxuXCJhcHBsZS1pcGFkLW1pbmktNC1nb2xkXCI6IHsgaGVpZ2h0OiAyMDQ4LCB3aWR0aDogMTUzNixcdHNjYWxlOiAxLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblwiYXBwbGUtaXBhZC1taW5pLTQtc3BhY2UtZ3JheVwiOiB7IGhlaWdodDogMjA0OCwgd2lkdGg6IDE1MzYsXHRzY2FsZTogMSwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cImFwcGxlLWlwYWQtbWluaS00LXNpbHZlclwiOnsgaGVpZ2h0OiAyMDQ4LCB3aWR0aDogMTUzNiwgc2NhbGU6IDEsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXG4jUHJvXG5cImFwcGxlLWlwYWQtcHJvLWdvbGRcIjogeyBoZWlnaHQ6IDI3MzIsIHdpZHRoOiAyMDQ4LCBzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cImFwcGxlLWlwYWQtcHJvLXNpbHZlclwiOiB7IGhlaWdodDogMjczMiwgd2lkdGg6IDIwNDgsIHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblwiYXBwbGUtaXBhZC1wcm8tc3BhY2UtZ3JheVwiIDogeyBoZWlnaHQ6IDI3MzIsIHdpZHRoOiAyMDQ4LCBzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG59XG5cbmV4cG9ydHMubmFtZSA9IDBcbmV4cG9ydHMuc2NhbGUgPSAwXG5leHBvcnRzLmhlaWdodCA9IDBcbmV4cG9ydHMud2lkdGggPSAwXG5leHBvcnRzLm1vYmlsZSA9IDBcbmV4cG9ydHMucGxhdGZvcm0gPSAwXG5leHBvcnRzLm9yaWVudGF0aW9uID0gMFxuXG5leHBvcnRzLmdldERldmljZSA9IC0+XG5cdGRldmljZSA9IEZyYW1lci5EZXZpY2UuZGV2aWNlVHlwZVxuXHRleHBvcnRzLnNjYWxlID0gZnJhbWVyRGV2aWNlc1tkZXZpY2VdLnNjYWxlXG5cdGlmIGRldmljZSA9PSBcImZ1bGxzY3JlZW5cIlxuXHRcdGV4cG9ydHMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aFxuXHRcdGV4cG9ydHMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0XG5cdGVsc2Vcblx0XHRleHBvcnRzLndpZHRoID0gZnJhbWVyRGV2aWNlc1tkZXZpY2VdLndpZHRoXG5cdFx0ZXhwb3J0cy5oZWlnaHQgPSBmcmFtZXJEZXZpY2VzW2RldmljZV0uaGVpZ2h0XG5cdFx0aWYgd2luZG93LmlubmVyV2lkdGggPT0gMTI0MiB8fCB3aW5kb3cuaW5uZXJXaWR0aCA9PSAyMjA4XG5cdFx0XHRleHBvcnRzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGhcblx0XHRcdGV4cG9ydHMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0XG5cdFx0XHRleHBvcnRzLnNjYWxlID0gM1xuXHRleHBvcnRzLm1vYmlsZSA9IGZyYW1lckRldmljZXNbZGV2aWNlXS5tb2JpbGVcblx0ZXhwb3J0cy5wbGF0Zm9ybSA9IGZyYW1lckRldmljZXNbZGV2aWNlXS5wbGF0Zm9ybVxuXHRleHBvcnRzLm9yaWVudGF0aW9uID0gIEZyYW1lci5EZXZpY2Uub3JpZW50YXRpb25cblxuXG5leHBvcnRzLm9yaWVudCA9ICgpIC0+XG5cdGlmIGV4cG9ydHMub3JpZW50YXRpb24gPT0gLTkwXG5cdFx0dGVtcEhlaWdodCA9IGV4cG9ydHMuaGVpZ2h0XG5cdFx0dGVtcFdpZHRoID0gZXhwb3J0cy53aWR0aFxuXHRcdGV4cG9ydHMuaGVpZ2h0ID0gdGVtcFdpZHRoXG5cdFx0ZXhwb3J0cy53aWR0aCA9IHRlbXBIZWlnaHRcblxuZXhwb3J0cy5nZXREZXZpY2UoKVxuZXhwb3J0cy5vcmllbnQoKVxuXG5cbiNMaXN0ZW4gdG8gd2luZG93IHJlaXplXG5vblJlc2l6ZSA9ICgpIC0+XG5cdGV4cG9ydHMuZ2V0RGV2aWNlKClcblx0ZXhwb3J0cy5sYXlvdXQoKVxuXG5cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgb25SZXNpemUpXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm9yaWVudGF0aW9uY2hhbmdlXCIgLCBvblJlc2l6ZSlcblxuXG5cblxuXG5cbmRlZmF1bHRzID0ge1xuXHRjaGFyV2lkdGhzOiB7XHRcdFx0XG5cdFx0XCJBXCIgOiAuN1xuXHRcdFwiQlwiIDogLjY1XG5cdFx0XCJDXCIgOiAuNzhcblx0XHRcIkRcIiA6IC43N1xuXHRcdFwiRVwiIDogLjU4XG5cdFx0XCJGXCIgOiAuNTdcblx0XHRcIkdcIiA6IC43N1xuXHRcdFwiSFwiIDogLjcxXG5cdFx0XCJJXCIgOiAuMVxuXHRcdFwiSlwiIDogLjQ5XG5cdFx0XCJLXCIgOiAuNjVcblx0XHRcIkxcIiA6IC41N1xuXHRcdFwiTVwiIDogLjg3XG5cdFx0XCJOXCIgOiAuNzFcblx0XHRcIk9cIiA6IC44XG5cdFx0XCJQXCIgOiAuNjJcblx0XHRcIlFcIiA6IC44XG5cdFx0XCJSXCIgOiAuNjNcblx0XHRcIlNcIiA6IC42M1xuXHRcdFwiVFwiIDogLjY2XG5cdFx0XCJVXCIgOiAuN1xuXHRcdFwiVlwiIDogLjdcblx0XHRcIldcIiA6IDEuMDNcblx0XHRcIlhcIiA6IC42OFxuXHRcdFwiWVwiIDogLjY3XG5cdFx0XCJaXCIgOiAuNjQ1XG5cdFx0XCJhXCIgOiAuNTRcblx0XHRcImJcIiA6IC42M1xuXHRcdFwiY1wiIDogLjU3XG5cdFx0XCJkXCIgOiAuNTlcblx0XHRcImVcIiA6IC41OVxuXHRcdFwiZlwiIDogLjI4XG5cdFx0XCJnXCIgOiAuNTlcblx0XHRcImhcIiA6IC41N1xuXHRcdFwiaVwiIDogLjEyXG5cdFx0XCJqXCIgOiAuMTJcblx0XHRcImtcIiA6IC41M1xuXHRcdFwibFwiIDogLjEwNVxuXHRcdFwibVwiIDogLjlcblx0XHRcIm5cIiA6IC41NlxuXHRcdFwib1wiIDogLjZcblx0XHRcInBcIiA6IC42MlxuXHRcdFwicVwiIDogLjU5XG5cdFx0XCJyXCIgOiAuMzRcblx0XHRcInNcIiA6IC41MDVcblx0XHRcInRcIiA6IC4yOFxuXHRcdFwidVwiIDogLjU2XG5cdFx0XCJ2XCIgOiAuNTNcblx0XHRcIndcIiA6IC44MzVcblx0XHRcInhcIiA6IC41MTVcblx0XHRcInlcIiA6IC41Mjhcblx0XHRcInpcIiA6IC41MVxuXHRcdFwiIFwiIDogLjQ0XG5cdFx0XCI/XCIgOiAuNDk1XG5cdFx0XCIhXCIgOiAuMThcblx0XHRcIi5cIiA6IC4xOFxuXHRcdFwiLFwiIDogLjE3XG5cdFx0XCInXCIgOiAuMDlcblx0XHRcIjFcIiA6IC4zMlxuXHRcdFwiMlwiIDogLjYzXG5cdFx0XCIzXCIgOiAuNjJcblx0XHRcIjRcIiA6IC42NTVcblx0XHRcIjVcIiA6IC42NFxuXHRcdFwiNlwiIDogLjY0XG5cdFx0XCI3XCIgOiAuNTlcblx0XHRcIjhcIiA6IC42NCBcblx0XHRcIjlcIiA6IC42NFxuXHRcdFwiMFwiIDogLjY0NVxuIFx0fVxuXHRjb25zdHJhaW50UHJvcHMgOiBbXCJoZWlnaHRcIiwgXCJ3aWR0aFwiXVxuXHRjb25zdHJhaW50VHlwZXM6IFtcInRvcFwiLCBcImxlYWRpbmdcIiwgXCJ0cmFpbGluZ1wiLCBcImJvdHRvbVwiXVxuXHRjb25zdHJhaW50czoge1xuXHRcdHRvcDoge1xuXHRcdFx0XCJwcm9wXCIgOiBcInlcIlxuXHRcdFx0XCJvYmpQcm9wXCIgOiBcIm1heFlcIlxuXHRcdFx0XCJvYmpQcm9wMlwiIDogXCJoZWlnaHRcIlxuXHRcdFx0XCJvcHBcIiA6IFwiYm90dG9tXCJcblx0XHR9XG5cdFx0bGVhZGluZzoge1xuXHRcdFx0XCJwcm9wXCIgOiBcInhcIlxuXHRcdFx0XCJvYmpQcm9wXCIgOiBcIm1heFhcIlxuXHRcdFx0XCJvYmpQcm9wMlwiIDogXCJ3aWR0aFwiXG5cdFx0XHRcIm9wcFwiIDogXCJ0cmFpbGluZ1wiXG5cdFx0fVxuXHRcdGJvdHRvbToge1xuXHRcdFx0XCJwcm9wXCIgOiBcIm1heFlcIlxuXHRcdFx0XCJvYmpQcm9wXCIgOiBcImhlaWdodFwiXG5cdFx0XHRcIm9ialByb3AyXCIgOiBcInlcIlxuXHRcdFx0XCJvcHBcIiA6IFwidG9wXCJcblx0XHR9XG5cdFx0dHJhaWxpbmc6IHtcblx0XHRcdFwicHJvcFwiIDogXCJtYXhYXCJcblx0XHRcdFwib2JqUHJvcFwiIDogXCJ3aWR0aFwiXG5cdFx0XHRcIm9ialByb3AyXCIgOiBcInhcIlxuXHRcdFx0XCJvcHBcIiA6IFwibGVhZGluZ1wiXG5cdFx0fVxuXHR9XG5cdGtleWJvYXJkUHJvcHM6IFtcInJldHVybktleVwiXVxuXHRrZXlib2FyZDoge1xuXHRcdHJldHVybktleTpcImRlZmF1bHRcIlxuXHR9XG5cdHRleHQ6IHtcblx0XHRkZWZhdWx0czoge1xuXHRcdFx0dGV4dDogXCJpT1MgVGV4dCBMYXllclwiXG5cdFx0XHR4OjBcblx0XHRcdHk6MFxuXHRcdFx0d2lkdGg6LTFcblx0XHRcdGhlaWdodDotMVxuXHRcdFx0c3VwZXJMYXllcjp1bmRlZmluZWRcblx0XHRcdHN0eWxlOlwiZGVmYXVsdFwiXG5cdFx0XHRsaW5lczoxXG5cdFx0XHRhbGlnbjpcImxlZnRcIlxuXHRcdFx0YmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIlxuXHRcdFx0Y29sb3I6XCJibGFja1wiXG5cdFx0XHRmb250U2l6ZTogMTdcblx0XHRcdGZvbnRGYW1pbHk6XCItYXBwbGUtc3lzdGVtLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmXCJcblx0XHRcdGZvbnRXZWlnaHQ6NDAwXG5cdFx0XHRsaW5lSGVpZ2h0OlwiYXV0b1wiXG5cdFx0XHR9IFxuXHR9XG59XG5cbnNldFByb3BzID0gKG9iamVjdCwgZGVzdCkgLT5cblx0a2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdClcblx0ZGVzdFtcInByb3BzXCJdID0ga2V5c1xuXG5zZXRQcm9wcyhkZWZhdWx0cy50ZXh0LmRlZmF1bHRzLCBkZWZhdWx0cy50ZXh0KVxuIyMgQ29udmVyc2lvbnNcblxuI1BpeGVscyB0byBQb2ludHNcbmV4cG9ydHMucHQgPSAocHgpIC0+XG5cdHB0ID0gcHgvZXhwb3J0cy5zY2FsZVxuXHRwdCA9IE1hdGgucm91bmQocHQpXG5cdHJldHVybiBwdFxuXG4jUG9pbnRzIHRvIFBpeGVsc1xuZXhwb3J0cy5weCA9IChwdCkgLT5cblx0cHggPSBwdCAqIGV4cG9ydHMuc2NhbGVcblx0cHggPSBNYXRoLnJvdW5kKHB4KVxuXHRyZXR1cm4gcHhcblxuIyMgRXJyb3JzXG5cbmVycm9yID0gKGNvbnRleHQsIGNvZGUpIC0+XG5cdGlmIGNvZGUgPT0gMSBcblx0XHRwcmludCBcIkVycm9yIEludmFsaWQgUmVsYXRpb25zaGlwIOKAkyBMYXllciBpZDoje2NvbnRleHQuaWR9IGhhcyBhIHJlbGF0aW9uc2hpcCB3aXRoIGFub3RoZXIgbGF5ZXIgbm90IGluIHRoZSBzYW1lIHN1cGVyTGF5ZXIuXCJcblxuXG4jIyBBdXRvTGF5b3V0XG5cbiNjaGVja3MgaWYgdHdvIGxheWVycyBoYXZlIHRoZSBzYW1lIHBhcmVudFxuZXhwb3J0cy5zYW1lUGFyZW50ID0gKGxheWVyMSwgbGF5ZXIyKSAtPlxuXHRwYXJlbnRPbmUgPSBsYXllcjEuc3VwZXJMYXllclxuXHRwYXJlbnRUd28gPSBsYXllcjIuc3VwZXJMYXllclxuXHRpZiBwYXJlbnRPbmUgPT0gcGFyZW50VHdvXG5cdFx0cmV0dXJuIHRydWVcblx0ZWxzZSBcblx0XHRyZXR1cm4gZmFsc2VcblxuI1JlZnJlc2hlcyBMYXllciBvciBBbGwgTGF5ZXJzXG5leHBvcnRzLmxheW91dCA9IChsYXllcikgLT5cblx0aWYgbGF5ZXIgPT0gdW5kZWZpbmVkXG5cdFx0QC5hcnJheSA9IEZyYW1lci5DdXJyZW50Q29udGV4dC5sYXllcnNcblx0ZWxzZSBcblx0XHRALmFycmF5ID0gW2xheWVyXVxuXHRmb3IgbGF5ZXIgaW4gQC5hcnJheVxuXHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzICE9IHVuZGVmaW5lZFxuXHRcdFx0Zm9yIHAgaW4gZGVmYXVsdHMuY29uc3RyYWludFByb3BzXG5cdFx0XHRcdGxheW91dFNpemUobGF5ZXIsIHApXG5cdFx0XHRmb3IgYyBpbiBkZWZhdWx0cy5jb25zdHJhaW50VHlwZXNcblx0XHRcdFx0bGF5b3V0Q2hhbmdlKGxheWVyLCBjKVxuXG4jU2l6ZSBDb25zdHJhaW50c1xuXG5sYXlvdXRTaXplID0gKGxheWVyLCB0eXBlKSAtPlxuXHRpZiBsYXllci5jb25zdHJhaW50c1t0eXBlXVxuXHRcdGxheWVyW3R5cGVdID0gZXhwb3J0cy5weChsYXllci5jb25zdHJhaW50c1t0eXBlXSlcblxuXG4jTW92ZSAmIFJlc2l6ZXMgTGF5ZXJzXG5sYXlvdXRDaGFuZ2UgPSAobGF5ZXIsIHR5cGUpIC0+XG5cdGlmIGxheWVyLmNvbnN0cmFpbnRzW3R5cGVdICE9IHVuZGVmaW5lZCBcblx0XHRwcm9wID0gZGVmYXVsdHMuY29uc3RyYWludHNbdHlwZV0ucHJvcFxuXHRcdG9ialByb3AgPSBkZWZhdWx0cy5jb25zdHJhaW50c1t0eXBlXS5vYmpQcm9wXG5cdFx0b3BwID0gZGVmYXVsdHMuY29uc3RyYWludHNbdHlwZV0ub3BwXG5cdFx0c3VwZXJUcmFpdCA9IGRlZmF1bHRzLmNvbnN0cmFpbnRzW3R5cGVdLm9ialByb3BcblxuXHRcdGlmIG9ialByb3AgIT0gXCJ3aWR0aFwiICYmIG9ialByb3AgIT0gXCJoZWlnaHRcIlxuXHRcdFx0c3VwZXJUcmFpdCA9IGRlZmF1bHRzLmNvbnN0cmFpbnRzW3R5cGVdLm9ialByb3AyXG5cblx0XHRpZiBsYXllci5zdXBlckxheWVyICE9IG51bGxcblx0XHRcdCNIYXMgYSBzdXBlckxheWVyXG5cdFx0XHRAW3N1cGVyVHJhaXRdID0gbGF5ZXIuc3VwZXJMYXllcltzdXBlclRyYWl0XVxuXHRcdGVsc2Vcblx0XHRcdCNEb2VzIG5vdCBoYXZlIGEgc3VwZXJMYXllclxuXHRcdFx0QFtzdXBlclRyYWl0XSA9IGV4cG9ydHNbc3VwZXJUcmFpdF1cblx0XHRpZiB0eXBlID09IFwidG9wXCIgfHwgdHlwZSA9PSBcImxlYWRpbmdcIlxuXHRcdFx0IyBIYW5kbGUgVG9wICYgTGVhZGluZ1xuXHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHNbdHlwZV0gPT0gcGFyc2VJbnQobGF5ZXIuY29uc3RyYWludHNbdHlwZV0sIDEwKVxuXHRcdFx0XHRsYXllcltwcm9wXSA9IGxheWVyLmNvbnN0cmFpbnRzW3R5cGVdICogZXhwb3J0cy5zY2FsZVxuXHRcdFx0ZWxzZSBcblx0XHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHNbdHlwZV0ubGVuZ3RoID09IHVuZGVmaW5lZFxuXHRcdFx0XHRcdGxheWVyW3Byb3BdID0gbGF5ZXIuY29uc3RyYWludHNbdHlwZV1bb2JqUHJvcF1cblx0XHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHNbdHlwZV0ubGVuZ3RoID09IDFcblx0XHRcdFx0XHRpZiBsYXllci5jb25zdHJhaW50c1t0eXBlXVswXSA9PSBwYXJzZUludChsYXllci5jb25zdHJhaW50c1t0eXBlXVswXSwgMTApXG5cdFx0XHRcdFx0XHRsYXllcltwcm9wXSA9IGxheWVyLmNvbnN0cmFpbnRzW3R5cGVdWzBdICogZXhwb3J0cy5zY2FsZVxuXHRcdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRcdGxheWVyW3Byb3BdID0gbGF5ZXIuY29uc3RyYWludHNbdHlwZV1bMF1bb2JqUHJvcF1cblx0XHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHNbdHlwZV0ubGVuZ3RoID4gMSBcblx0XHRcdFx0XHRmb3Igb2JqZWN0IGluIGxheWVyLmNvbnN0cmFpbnRzW3R5cGVdXG5cdFx0XHRcdFx0XHRpZiBvYmplY3QgPT0gcGFyc2VJbnQob2JqZWN0LCAxMClcblx0XHRcdFx0XHRcdFx0QC5vYmpJbnQgPSBvYmplY3Rcblx0XHRcdFx0XHRcdGVsc2UgXG5cdFx0XHRcdFx0XHRcdEAub2JqTGF5ZXIgPSBvYmplY3Rcblx0XHRcdFx0XHRsYXllcltwcm9wXSA9IChALm9iakludCAqIGV4cG9ydHMuc2NhbGUpICsgQC5vYmpMYXllcltvYmpQcm9wXVxuXHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHNbb3BwXVxuXHRcdFx0XHR0cmFpdCA9IGRlZmF1bHRzLmNvbnN0cmFpbnRzW29wcF1bXCJvYmpQcm9wXCJdXG5cdFx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzW29wcF0gPT0gcGFyc2VJbnQobGF5ZXIuY29uc3RyYWludHNbb3BwXSwgMTApXG5cdFx0XHRcdFx0bGF5ZXJbdHJhaXRdID0gQFtzdXBlclRyYWl0XSAtIChsYXllcltwcm9wXSArIChleHBvcnRzLnNjYWxlICogbGF5ZXIuY29uc3RyYWludHNbb3BwXSkpXG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRpZiBsYXllci5jb25zdHJhaW50c1tvcHBdLmxlbmd0aCA9PSB1bmRlZmluZWRcblx0XHRcdFx0XHRcdGxheWVyW3RyYWl0XSA9IGxheWVyW3Byb3BdIC0gbGF5ZXIuY29uc3RyYWludHNbb3BwXVtwcm9wXVxuXHRcdFx0XHRcdFx0aWYgbGF5ZXJbdHJhaXRdIDwgMFxuXHRcdFx0XHRcdFx0XHRsYXllclt0cmFpdF0gPSBsYXllclt0cmFpdF0gKiAtMVxuXHRcdGVsc2Vcblx0XHRcdCMjIEhhbmRsZSBCb3R0b20gJiBUcmFpbGluZ1xuXHRcdFx0b2JqUHJvcDIgPSBkZWZhdWx0cy5jb25zdHJhaW50c1t0eXBlXS5vYmpQcm9wMlxuXHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHNbb3BwXSA9PSB1bmRlZmluZWRcblx0XHRcdFx0IyMgTm8gb3Bwb3NpdGVcblx0XHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHNbdHlwZV0gPT0gcGFyc2VJbnQobGF5ZXIuY29uc3RyYWludHNbdHlwZV0sIDEwKVxuXHRcdFx0XHRcdCMjIE9ubHkgSW50ZWdlclxuXHRcdFx0XHRcdGxheWVyW3Byb3BdID0gQFtzdXBlclRyYWl0XSAtIChsYXllci5jb25zdHJhaW50c1t0eXBlXSAqIGV4cG9ydHMuc2NhbGUpXG5cdFx0XHRcdGVsc2UgXG5cdFx0XHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHNbdHlwZV0ubGVuZ3RoID09IHVuZGVmaW5lZFxuXHRcdFx0XHRcdFx0I0VudGVyZWQgTGF5ZXJcblx0XHRcdFx0XHRcdGlmIGV4cG9ydHMuc2FtZVBhcmVudChsYXllciwgbGF5ZXIuY29uc3RyYWludHNbdHlwZV0pXG5cdFx0XHRcdFx0XHRcdGxheWVyW3Byb3BdID0gbGF5ZXIuY29uc3RyYWludHNbdHlwZV1bb2JqUHJvcDJdXG5cdFx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHRcdGVycm9yKGxheWVyLCAxKVxuXHRcdFx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzW3R5cGVdLmxlbmd0aCA9PSAxXG5cdFx0XHRcdFx0XHQjQXJyYXkgb2YgT25lXG5cdFx0XHRcdFx0XHRpZiBsYXllci5jb25zdHJhaW50c1t0eXBlXVswXSA9PSBwYXJzZUludChsYXllci5jb25zdHJhaW50c1t0eXBlXVswXSwgMTApXG5cdFx0XHRcdFx0XHRcdCNJbnRcblx0XHRcdFx0XHRcdFx0bGF5ZXJbcHJvcF0gPSBAW29ialByb3BdIC0gKGxheWVyLmNvbnN0cmFpbnRzW3R5cGVdWzBdICogZXhwb3J0cy5zY2FsZSlcblx0XHRcdFx0XHRcdGVsc2UgXG5cdFx0XHRcdFx0XHRcdCNPYmplY3Rcblx0XHRcdFx0XHRcdFx0aWYgZXhwb3J0cy5zYW1lUGFyZW50KGxheWVyLCBsYXllci5jb25zdHJhaW50c1t0eXBlXVswXSlcblx0XHRcdFx0XHRcdFx0XHRsYXllcltwcm9wXSA9IGxheWVyLmNvbnN0cmFpbnRzW3R5cGVdWzBdW29ialByb3AyXVxuXHRcdFx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IobGF5ZXIsIDEpXG5cdFx0XHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHNbdHlwZV0ubGVuZ3RoID4gMVx0XG5cdFx0XHRcdFx0XHQjUmVsYXRpb25zaGlwIEFycmF5XG5cdFx0XHRcdFx0XHRmb3Igb2JqZWN0IGluIGxheWVyLmNvbnN0cmFpbnRzW3R5cGVdXG5cdFx0XHRcdFx0XHRcdGlmIG9iamVjdCA9PSBwYXJzZUludChvYmplY3QsIDEwKVxuXHRcdFx0XHRcdFx0XHRcdEAub2JqSW50ID0gb2JqZWN0XG5cdFx0XHRcdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRcdFx0XHRALm9iakxheWVyID0gb2JqZWN0XG5cdFx0XHRcdFx0XHRcdGxheWVyW3Byb3BdID0gQC5vYmpMYXllcltvYmpQcm9wMl0gLSBleHBvcnRzLnNjYWxlICogQC5vYmpJbnRcblxuXG4jVGV4dCBMYXllcnNcbmV4cG9ydHMuc3R5bGVzID0ge1xufVxuXG4jIyBDdXN0b20gU3R5bGVzXG5cbmV4cG9ydHMuYWRkU3R5bGUgPSAoYXJyYXkpIC0+XG5cdGtleSA9IE9iamVjdC5rZXlzKGFycmF5KVswXVxuXHRleHBvcnRzLnN0eWxlc1trZXldID0gYXJyYXlba2V5XVxuXG5leHBvcnRzLmFwcGx5ID0gKGxheWVyLCBzdHlsZSkgLT5cblx0c3R5bGUgPSBleHBvcnRzLnN0eWxlc1tzdHlsZV1cblx0cHJvcHMgPSBPYmplY3Qua2V5cyhzdHlsZSlcblx0ZnJhbWVyUHJvcHMgPSBbXCJ3aWR0aFwiLCBcImhlaWdodFwiLCBcInN1cGVyTGF5ZXJcIiwgXCJvcGFjaXR5XCIsIFwiY29sb3JcIiwgXCJiYWNrZ3JvdW5kQ29sb3JcIiwgXCJ4XCIsIFwieVwiLCBcIm1pZFhcIiwgXCJtaWRZXCIsIFwibWF4WFwiLCBcIm1pblhcIiwgXCJ2aXNpYmxlXCIsIFwiY2xpcFwiLCBcInNjcm9sbEhvcml6b250YWxcIiwgXCJzY3JvbGxWZXJ0aWNhbFwiLCBcImlnbm9yZUV2ZW50c1wiLCBcInpcIiwgXCJzY2FsZVhcIiwgXCJzY2FsZVlcIiwgXCJzY2FsZVpcIiwgXCJzY2FsZVwiLCBcInNrZXdYXCIsIFwic2tld1lcIiwgXCJza2V3XCIsIFwib3JpZ2luWFwiLCBcIm9yaWdpbllcIiwgXCJvcmlnaW5aXCIsIFwicGVyc3BlY3RpdmVcIiwgXCJwZXJzcGVjdGl2ZU9yaWdpblhcIiwgXCJwZXJzcGVjdGl2ZU9yaWdpbllcIiwgXCJyb3RhdGlvblhcIiwgXCJyb3RhdGlvbllcIiwgXCJyb3RhdGlvblpcIiwgXCJyb3RhdGlvblwiLCBcImJsdXJcIiwgXCJicmlnaHRuZXNzXCIsIFwic2F0dXJhdGVcIiwgXCJodWVSb3RhdGVcIiwgXCJjb250cmFzdFwiLCBcImludmVydFwiLCBcImdyYXlzY2FsZVwiLCBcInNlcGlhXCIsIFwic2hhZG93WFwiLCBcInNoYWRvd1lcIiwgXCJzaGFkb3dCbHVyXCIsIFwic2hhZG93U3ByZWFkXCIsIFwic2hhZG93Q29sb3JcIiwgXCJib3JkZXJDb2xvclwiLCBcImJvcmRlcldpZHRoXCIsIFwiZm9yY2UyZFwiLCBcImZsYXRcIiwgXCJiYWNrZmFjZVZpc2libGVcIiwgXCJuYW1lXCIsIFwibWF0cml4XCIsIFwiX21hdHJpeDJkXCIsIFwidHJhbnNmb3JtTWF0cml4XCIsIFwibWF0cml4M2RcIiwgXCJib3JkZXJSYWRpdXNcIiwgXCJwb2ludFwiLCBcInNpemVcIiwgXCJmcmFtZVwiLCBcImh0bWxcIiwgXCJpbWFnZVwiLCBcInNjcm9sbFhcIiwgXCJzY3JvbGxZXCIsIFwiX2RvbUV2ZW50TWFuYWdlclwiLCBcIm1vdXNlV2hlZWxTcGVlZE11bHRpcGxpZXJcIiwgXCJ2ZWxvY2l0eVRocmVzaG9sZFwiLCBcImFuaW1hdGlvbk9wdGlvbnNcIiwgXCJjb25zdHJhaW5lZFwiXVxuXHRjc3NQcm9wcyA9IFtcImZvbnRGYW1pbHlcIiwgXCJmb250U2l6ZVwiLCBcInRleHRBbGlnblwiLCBcImZvbnRXZWlnaHRcIiwgXCJsaW5lSGVpZ2h0XCJdXG5cdGZvciBwIGluIHByb3BzXG5cdFx0aWYgZnJhbWVyUHJvcHMuaW5kZXhPZihwKSAhPSAtMSBcblx0XHRcdGlmIHN0eWxlW3BdID09IHBhcnNlSW50KHN0eWxlW3BdLCAxMClcblx0XHRcdFx0bGF5ZXJbcF0gPSBleHBvcnRzLnB4KHN0eWxlW3BdKVxuXHRcdFx0ZWxzZSBcblx0XHRcdFx0bGF5ZXJbcF0gPSBzdHlsZVtwXVxuXHRcdGlmIGNzc1Byb3BzLmluZGV4T2YocCkgIT0gLTEgXG5cdFx0XHRpZiBwID09IFwiZm9udFNpemVcIlxuXHRcdFx0XHRsYXllci5zdHlsZVtcImZvbnQtc2l6ZVwiXSA9IGV4cG9ydHMucHgoc3R5bGVbcF0pICsgXCJweFwiXG5cdFx0XHRpZiBwID09IFwiZm9udEZhbWlseVwiXG5cdFx0XHRcdGxheWVyLnN0eWxlW1wiZm9udC1mYW1pbHlcIl0gPSBzdHlsZVtwXVxuXHRcdFx0aWYgcCA9PSBcInRleHRBbGlnblwiXG5cdFx0XHRcdGxheWVyLnN0eWxlW1widGV4dC1hbGlnblwiXSA9IHN0eWxlW3BdXG5cdFx0XHRpZiBwID09IFwiZm9udFdlaWdodFwiXG5cdFx0XHRcdGxheWVyLnN0eWxlW1wiZm9udC13ZWlnaHRcIl0gPSBzdHlsZVtwXVxuXHRcdFx0aWYgcCA9PSBcImxpbmVIZWlnaHRcIlxuXHRcdFx0XHRpZiBzdHlsZVtwXSA9PSBcImF1dG9cIlxuXHRcdFx0XHRcdGxheWVyLnN0eWxlW1wibGluZS1oZWlnaHRcIl0gPSBleHBvcnRzLnB4KHN0eWxlW1wiZm9udFNpemVcIl0pICogMS4yICsgXCJweFwiXG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRsYXllci5zdHlsZVtcImxpbmUtaGVpZ2h0XCJdID0gZXhwb3J0cy5weChzdHlsZVtwXSkgKyBcInB4XCJcblxuZXhwb3J0cy5DdXN0b20gPSAoc3R5bGUsIGFycmF5KSAtPlxuXHRsYXllciA9IG5ldyBMYXllciBcblx0aXNTdHlsZVZhbGlkID0gZXhwb3J0cy5zdHlsZXNbc3R5bGVdXG5cdGlmIGlzU3R5bGVWYWxpZCA9PSB1bmRlZmluZWRcblx0XHRpZiBhcnJheSAhPSB1bmRlZmluZWRcblx0XHRcdGV4cG9ydHMuYWRkU3R5bGVcblx0XHRcdFx0XCIje3N0eWxlfVwiIDpcblx0XHRcdFx0XHRhcnJheVxuXHRcdGVsc2Vcblx0XHRcdGV4cG9ydHMuYWRkU3R5bGVcblx0XHRcdFx0XCIje3N0eWxlfVwiIDpcblx0XHRcdFx0XHR3aWR0aCA6IDEwMFxuXHRleHBvcnRzLmFwcGx5KGxheWVyLCBzdHlsZSlcblx0aWYgYXJyYXkgIT0gdW5kZWZpbmVkICYmIGlzU3R5bGVWYWxpZCAhPSB1bmRlZmluZWRcblx0XHRzdHlsZU51bSA9IFwiY29weVwiXG5cdFx0bmV3U3R5bGVOYW1lID0gc3R5bGUgKyBcIiBcIiArIHN0eWxlTnVtXG5cdFx0ZXhwb3J0cy5hZGRTdHlsZVxuXHRcdFx0XCIje25ld1N0eWxlTmFtZX1cIiA6IFxuXHRcdFx0XHRhcnJheVxuXHRcdGV4cG9ydHMuYXBwbHkobGF5ZXIsIG5ld1N0eWxlTmFtZSlcblx0cmV0dXJuIGxheWVyIFxuXG4jQXV0b21hdGljIHNpemluZyBmb3IgdGV4dCBsYXllcnNcbnRleHRTaXppbmcgPSAobGF5ZXIsIHRleHQsIGhlaWdodCwgc3R5bGUsIGxpbmVzKSAtPlxuXHRkZXZpY2UgPSBleHBvcnRzLmdldERldmljZSgpXG5cdGxheWVyLmhlaWdodCA9IHBhcnNlSW50KGhlaWdodFswXSArIGhlaWdodFsxXSkgKyAyXG5cdGlmIGxpbmVzICE9IHVuZGVmaW5lZFxuXHRcdGxheWVyLmhlaWdodCA9IGxheWVyLmhlaWdodCAqIGxpbmVzXG5cdGxheWVyLmh0bWwgPSB0ZXh0IFxuXHRzdHJpbmdMZW5ndGggPSAwXG5cdGxvb2tpbmdGb3JCcmVhayA9IHRleHQuc2VhcmNoKFwiPGJyPlwiKVxuXHRwdXJlVGV4dCA9IFwiXCJcblx0aWYgbG9va2luZ0ZvckJyZWFrICE9IC0xXG5cdFx0bGluZTEgPSB0ZXh0LnN1YnN0cmluZygwLGxvb2tpbmdGb3JCcmVhaylcblx0XHRsaW5lMiA9ICB0ZXh0LnN1YnN0cmluZyhsb29raW5nRm9yQnJlYWsgKyA1LCB0ZXh0Lmxlbmd0aClcblx0XHRpZiBsaW5lMS5sZW5ndGggPiBsaW5lMi5sZW5ndGhcblx0XHRcdHRleHQgPSBsaW5lMVxuXHRcdGlmIGxpbmUyLmxlbmd0aCA+IGxpbmUxLmxlbmd0aFxuXHRcdFx0dGV4dCA9IGxpbmUyXG5cdGludmFsaWRUZXh0ID0gLyg8KFtePl0rKT4pL2lnXG5cdHB1cmVUZXh0ID0gdGV4dC5yZXBsYWNlKGludmFsaWRUZXh0LCBcIlwiKVxuXHRjaGFyYWN0ZXJBcnJheSA9IHB1cmVUZXh0LnNwbGl0KCcnKVxuXHRmb3IgYyBpbiBjaGFyYWN0ZXJBcnJheVxuXHRcdHN0cmluZ0xlbmd0aCA9IGNoYXJzW2NdW3N0eWxlXSArIHN0cmluZ0xlbmd0aFxuXHRsYXllci53aWR0aCA9IHN0cmluZ0xlbmd0aCAqIGRldmljZS5zY2FsZVxuXG5cblxuXG50ZXh0QXV0b1NpemUgPSAodGV4dExheWVyKSAtPlxuXHQjRGVmaW5lIFdpZHRoXG5cdGxheWVyV2lkdGggPSAwXG5cdGxheWVySGVpZ2h0ID0gMFxuXHRpZiB0ZXh0TGF5ZXIuaGVpZ2h0ID09IC0yICYmIHRleHRMYXllci53aWR0aCA9PSAtMlxuXHRcdGxheWVySGVpZ2h0ID0gcGFyc2VJbnQodGV4dExheWVyLnN0eWxlWydmb250LXNpemUnXS5zbGljZSgwLC0yKSlcblx0aWYgdGV4dExheWVyLmhlaWdodCAhPSAtMiAmJiB0ZXh0TGF5ZXIud2lkdGggIT0gLTJcblx0XHRsYXllckhlaWdodCA9IHRleHRMYXllci5oZWlnaHRcblx0YXJyYXlPZkNoYXJzID0gdGV4dExheWVyLmh0bWwuc3BsaXQoXCJcIilcblx0d29yZENvdW50ID0gdGV4dExheWVyLmh0bWwuc3BsaXQoXCIgXCIpLmxlbmd0aFxuXHRhcnJheU9mV2lkdGhzID0gZGVmYXVsdHMuY2hhcldpZHRoc1xuXHRmb250TXVsdGlwbGllciA9IHBhcnNlSW50KHRleHRMYXllci5zdHlsZVtcImZvbnQtc2l6ZVwiXS5zbGljZSgwLC0yKSkvMTBcblx0Zm9udFdlaWdodE11bHRpcGxpZXIgPSBwYXJzZUludCh0ZXh0TGF5ZXIuc3R5bGVbXCJmb250LXdlaWdodFwiXSkvMzgwXG5cdGZvciBjaGFyIGluIGFycmF5T2ZDaGFyc1xuXHRcdGxheWVyV2lkdGggPSBsYXllcldpZHRoICsgKCBhcnJheU9mV2lkdGhzW2NoYXJdICogZm9udE11bHRpcGxpZXIgKiAoOC40ICsgZm9udFdlaWdodE11bHRpcGxpZXIpKSBcblx0XHRsYXllcldpZHRoID0gTWF0aC5yb3VuZChsYXllcldpZHRoKVxuXHRzZXRXaWR0aCA9IHRleHRMYXllci53aWR0aFxuXHRpZiB0ZXh0TGF5ZXIud2lkdGggIT0gLTIgJiYgdGV4dExheWVyLmhlaWdodCA9PSAtMlxuXHRcdGxpbmVDb3VudCA9IE1hdGguY2VpbChsYXllcldpZHRoL3NldFdpZHRoKVxuXHRcdGlmIGxpbmVDb3VudCA+IHdvcmRDb3VudFxuXHRcdFx0bGluZUNvdW50ID0gd29yZENvdW50XG5cdFx0bGF5ZXJIZWlnaHQgPSBwYXJzZUludCh0ZXh0TGF5ZXIuc3R5bGVbXCJmb250LXNpemVcIl0uc2xpY2UoMCwtMikpICogbGluZUNvdW50ICsgcGFyc2VJbnQodGV4dExheWVyLnN0eWxlW1wibGluZS1oZWlnaHRcIl0uc2xpY2UoMCwtMikpICogKGxpbmVDb3VudCAtIDEuNSlcblx0XHRpZiBsYXllckhlaWdodCA8IHBhcnNlSW50KHRleHRMYXllci5zdHlsZVsnZm9udC1zaXplJ10uc2xpY2UoMCwtMikpXG5cdFx0XHRsYXllckhlaWdodCA9IHBhcnNlSW50KHRleHRMYXllci5zdHlsZVsnZm9udC1zaXplJ10uc2xpY2UoMCwtMikpXG5cdGlmIHRleHRMYXllci53aWR0aCAhPSAtMlxuXHRcdGxheWVyV2lkdGggPSBzZXRXaWR0aFxuXHRcdFxuXHRyZXR1cm4ge1xuXHRcdHdpZHRoIDogbGF5ZXJXaWR0aFxuXHRcdGhlaWdodDogbGF5ZXJIZWlnaHRcblx0fVxuXG5leHBvcnRzLlRleHQgPSAoYXJyYXkpIC0+XG5cdGlmIGFycmF5ID09IHVuZGVmaW5lZFxuXHRcdGFycmF5ID0gW11cblx0c3R5bGVBcnJheSA9IHt9XG5cdGZvciBpIGluIGRlZmF1bHRzLnRleHQucHJvcHNcblx0XHRpZiBhcnJheVtpXSAhPSB1bmRlZmluZWRcblx0XHRcdEBbaV0gPSBhcnJheVtpXVxuXHRcdGVsc2Vcblx0XHRcdEBbaV0gPSBkZWZhdWx0cy50ZXh0LmRlZmF1bHRzW2ldXG5cdFx0aWYgaSAhPSBcInN0eWxlXCJcblx0XHRcdHN0eWxlQXJyYXlbaV0gPSBAW2ldXG5cdGlmIGV4cG9ydHMuc3R5bGVzW0Auc3R5bGVdID09IHVuZGVmaW5lZFxuXHRcdGV4cG9ydHMuYWRkU3R5bGVcblx0XHRcdFwiI3tALnN0eWxlfVwiIDpcblx0XHRcdFx0c3R5bGVBcnJheVxuXHR0ZXh0TGF5ZXIgPSBuZXcgTGF5ZXJcblx0dGV4dExheWVyLmh0bWwgPSBAdGV4dFxuXHRleHBvcnRzLmFwcGx5KHRleHRMYXllciwgQHN0eWxlKVxuXHR0ZXh0RnJhbWUgPSB0ZXh0QXV0b1NpemUodGV4dExheWVyKVxuXHR0ZXh0TGF5ZXIucHJvcHMgPSAoaGVpZ2h0OnRleHRGcmFtZS5oZWlnaHQsIHdpZHRoOnRleHRGcmFtZS53aWR0aClcblx0cmV0dXJuIHRleHRMYXllclxuXG5cblxuIyBUYWIgYmFyXG4jIGRlZmF1bHRUYWJzID0gW1xuIyBcdFx0e1xuIyBcdFx0XHRcImxhYmVsXCI6IFwicmVjZW50c1wiXG4jIFx0XHRcdFwic2VsZWN0ZWRcIiA6IFwibW9kdWxlcy9kYi11aWtpdC1hc3NldHMvaW9zX3RhYmJhci9zX3JlY2VudHMuc3ZnXCJcbiMgXHRcdFx0XCJ1bnNlbGVjdGVkXCIgOiBcIm1vZHVsZXMvZGItdWlraXQtYXNzZXRzL2lvc190YWJiYXIvdV9yZWNlbnRzLnN2Z1wiXG4jIFx0XHRcdFwiaGVpZ2h0XCIgOiAyM1xuIyBcdFx0XHRcIndpZHRoXCIgOiAyM1xuIyBcdFx0fSxcbiMgXHRcdHtcbiMgXHRcdFx0XCJsYWJlbFwiOiBcImZpbGVzXCJcbiMgXHRcdFx0XCJzZWxlY3RlZFwiIDogXCJtb2R1bGVzL2RiLXVpa2l0LWFzc2V0cy9pb3NfdGFiYmFyL3NfZmlsZXMuc3ZnXCJcbiMgXHRcdFx0XCJ1bnNlbGVjdGVkXCIgOiBcIm1vZHVsZXMvZGItdWlraXQtYXNzZXRzL2lvc190YWJiYXIvdV9maWxlcy5zdmdcIlxuIyBcdFx0XHRcImhlaWdodFwiIDogMjVcbiMgXHRcdFx0XCJ3aWR0aFwiIDogMjFcbiMgXHRcdH1cbiMgXHRcdHtcbiMgXHRcdFx0XCJsYWJlbFwiOiBcInBob3Rvc1wiXG4jIFx0XHRcdFwic2VsZWN0ZWRcIiA6IFwibW9kdWxlcy9kYi11aWtpdC1hc3NldHMvaW9zX3RhYmJhci9zX3Bob3Rvcy5zdmdcIlxuIyBcdFx0XHRcInVuc2VsZWN0ZWRcIiA6IFwibW9kdWxlcy9kYi11aWtpdC1hc3NldHMvaW9zX3RhYmJhci91X3Bob3Rvcy5zdmdcIlxuIyBcdFx0XHRcImhlaWdodFwiIDogMjZcbiMgXHRcdFx0XCJ3aWR0aFwiIDogMjRcbiMgXHRcdH0sXG4jIFx0XHR7XG4jIFx0XHRcdFwibGFiZWxcIjogXCJvZmZsaW5lXCJcbiMgXHRcdFx0XCJzZWxlY3RlZFwiIDogXCJtb2R1bGVzL2RiLXVpa2l0LWFzc2V0cy9pb3NfdGFiYmFyL3Nfb2ZmbGluZS5zdmdcIlxuIyBcdFx0XHRcInVuc2VsZWN0ZWRcIiA6IFwibW9kdWxlcy9kYi11aWtpdC1hc3NldHMvaW9zX3RhYmJhci91X29mZmxpbmUuc3ZnXCJcbiMgXHRcdFx0XCJoZWlnaHRcIiA6IDI3XG4jIFx0XHRcdFwid2lkdGhcIiA6IDE3XG4jIFx0XHR9LFxuIyBcdFx0e1xuIyBcdFx0XHRcImxhYmVsXCI6IFwic2V0dGluZ3NcIlxuIyBcdFx0XHRcInNlbGVjdGVkXCIgOiBcIm1vZHVsZXMvZGItdWlraXQtYXNzZXRzL2lvc190YWJiYXIvc19zZXR0aW5ncy5zdmdcIlxuIyBcdFx0XHRcInVuc2VsZWN0ZWRcIiA6IFwibW9kdWxlcy9kYi11aWtpdC1hc3NldHMvaW9zX3RhYmJhci91X3NldHRpbmdzLnN2Z1wiXG4jIFx0XHRcdFwiaGVpZ2h0XCIgOiAyNVxuIyBcdFx0XHRcIndpZHRoXCIgOiAyNVxuIyBcdFx0fVxuIyBcdFx0XVxuXG4jIHRhYkJhclByb3BlcnRpZXMgPSBbXCJzdHlsZVwiLCBcInRhYnNcIiwgXCJzdGFydFwiXVxuIyB0YWJCYXJEZWZhdWx0cyA9IHtcbiMgXHRcInN0eWxlXCIgOiBcImRyb3Bib3hcIlxuIyBcdFwic3RhcnRcIiA6IDBcbiMgXHRcInRhYnNcIiA6ICBkZWZhdWx0VGFicyBcbiMgXHR9XG5cbiMgZXhwb3J0cy5UYWJCYXIgPSAoYXJyYXkpIC0+XG4jIFx0Y3JlYXRlZFRhYnMgPSBbXVxuIyBcdHZpZXdzID0gW11cbiMgXHR0YWJzSW5kZXhhYmxlID0gW11cbiMgXHRpZiBhcnJheSA9PSB1bmRlZmluZWRcbiMgXHRcdGFycmF5ID0gW11cbiMgXHRmb3IgaSBpbiB0YWJCYXJQcm9wZXJ0aWVzXG4jIFx0XHRpZiBhcnJheVtpXSAhPSB1bmRlZmluZWRcbiMgXHRcdFx0QFtpXSA9IGFycmF5W2ldXG4jIFx0XHRlbHNlXG4jIFx0XHRcdEBbaV0gPSB0YWJCYXJEZWZhdWx0c1tpXVxuIyBcdHRhYkJhckhlaWdodCA9IDQ5XG4jIFx0aWNvblNpemUgPSAyNSAqIGV4cG9ydHMuc2NhbGVcbiMgXHR0YWJCYXIgPSBuZXcgTGF5ZXIgd2lkdGg6ZXhwb3J0cy53aWR0aCwgaGVpZ2h0OnRhYkJhckhlaWdodCpleHBvcnRzLnNjYWxlLCB5OmV4cG9ydHMuaGVpZ2h0LXRhYkJhckhlaWdodCpleHBvcnRzLnNjYWxlLCBiYWNrZ3JvdW5kQ29sb3I6XCJ3aGl0ZVwiLCBuYW1lOlwiVGFiIEJhclwiXG4jIFx0dGFiQ291bnQgPSBALnRhYnMubGVuZ3RoXG4jIFx0aWNvblBhZGRpbmcgPSAwXG4jIFx0aWYgZXhwb3J0cy53aWR0aCA9PSAxNTM2IHx8IGV4cG9ydHMud2lkdGggPT0gNzY4XG4jIFx0XHRzd2l0Y2ggQC50YWJzLmxlbmd0aFxuIyBcdFx0XHR3aGVuIDUgdGhlbiBpY29uUGFkZGluZyA9IDE1MFxuIyBcdFx0XHR3aGVuIDQgdGhlbiBpY29uUGFkZGluZyA9IDE3NVxuIyBcdFx0XHR3aGVuIDMgdGhlbiBpY29uUGFkZGluZyA9IDIwMFxuIyBcdFx0XHR3aGVuIDIgdGhlbiBpY29uUGFkZGluZyA9IDIyNVxuIyBcdFx0XHR3aGVuIDEgdGhlbiBpY29uUGFkZGluZyA9IDI1MFxuIyBcdGVsc2UgXG4jIFx0XHRzd2l0Y2ggQC50YWJzLmxlbmd0aFxuIyBcdFx0XHR3aGVuIDUgdGhlbiBpY29uUGFkZGluZyA9IDI1XG4jIFx0XHRcdHdoZW4gNCB0aGVuIGljb25QYWRkaW5nID0gNTBcbiMgXHRcdFx0d2hlbiAzIHRoZW4gaWNvblBhZGRpbmcgPSA3NVxuIyBcdFx0XHR3aGVuIDIgdGhlbiBpY29uUGFkZGluZyA9IDEwMFxuIyBcdFx0XHR3aGVuIDEgdGhlbiBpY29uUGFkZGluZyA9IDE1MFxuIyBcdGljb25QYWRkaW5nID0gaWNvblBhZGRpbmcgKiBleHBvcnRzLnNjYWxlXG4jIFx0aWNvblNwYWNlWCA9IChleHBvcnRzLndpZHRoIC0gKCBpY29uUGFkZGluZyAqIDIgKSAtIChpY29uU2l6ZSAqIHRhYkNvdW50KSkgLyAoIHRhYkNvdW50IC0gMSApXG4jIFx0dGFiQmFyTGFiZWxTdHlsZSA9IHtcbiMgXHRcdFwiZm9udC1zaXplXCIgOiAxMCAqIGV4cG9ydHMuc2NhbGUgKyBcInB4XCJcbiMgXHRcdFwidGV4dC10cmFuc2Zvcm1cIiA6IFwiY2FwaXRhbGl6ZVwiXG4jIFx0XHRcImNvbG9yXCIgOiBcIiM5MjkyOTJcIlxuIyBcdH1cbiMgXHRkaXZpZGVyID0gbmV3IExheWVyIHN1cGVyTGF5ZXI6dGFiQmFyLCBuYW1lOlwiRGl2aWRlclwiLCBoZWlnaHQ6MSwgd2lkdGg6ZXhwb3J0cy53aWR0aCwgYmFja2dyb3VuZENvbG9yOlwiI0IyQjJCMlwiXG4jIFx0Zm9yIHRhYiBpbiBALnRhYnNcbiMgXHRcdGxhYmVsID0gbmV3IGV4cG9ydHMuVGV4dCBzdHlsZTpcInNtYWxsXCIsIHRleHQ6dGFiLmxhYmVsLCBzdXBlckxheWVyOnRhYkJhciwgYWxpZ246XCJjZW50ZXJcIlxuIyBcdFx0aWNvbkNvbnRhaW5lciA9IG5ldyBMYXllciB3aWR0aDppY29uU2l6ZSwgaGVpZ2h0Omljb25TaXplICsgKDIqZXhwb3J0cy5zY2FsZSksIHN1cGVyTGF5ZXI6dGFiQmFyLCBuYW1lOlwidGFiIGljb24gZm9yIFwiICsgdGFiLmxhYmVsLCB5OjcqZXhwb3J0cy5zY2FsZSwgYmFja2dyb3VuZENvbG9yOlwid2hpdGVcIlxuIyBcdFx0aWNvbkNvbnRhaW5lci54ID0gaWNvblBhZGRpbmcgKyAoKGljb25TcGFjZVggKyBpY29uU2l6ZSkqQC50YWJzLmluZGV4T2YodGFiKSlcbiMgXHRcdGljb24gPSBuZXcgTGF5ZXIgaW1hZ2U6dGFiLnNlbGVjdGVkLCBoZWlnaHQ6dGFiLmhlaWdodCpleHBvcnRzLnNjYWxlLCB3aWR0aDp0YWIud2lkdGgqZXhwb3J0cy5zY2FsZSwgc3VwZXJMYXllcjppY29uQ29udGFpbmVyXG4jIFx0XHRpY29uLmNlbnRlclgoKVxuIyBcdFx0bGFiZWwubWlkWCA9IGljb25Db250YWluZXIubWlkWFxuIyBcdFx0bGFiZWwueSA9IGljb25Db250YWluZXIubWF4WSArIDFcbiMgXHRcdGxhYmVsLnN0eWxlID0gdGFiQmFyTGFiZWxTdHlsZVxuIyBcdFx0dmlldyA9IG5ldyBMYXllciB3aWR0aDpleHBvcnRzLndpZHRoLCBoZWlnaHQ6ZXhwb3J0cy5oZWlnaHQgLSAoMjEqZXhwb3J0cy5zY2FsZSkgLSAodGFiQmFySGVpZ2h0KmV4cG9ydHMuc2NhbGUpLCB5OigyMSpleHBvcnRzLnNjYWxlKSwgbmFtZTpcIi52aWV3W1wiICsgQC50YWJzLmluZGV4T2YodGFiKSArIFwiXVwiLCBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiXG4jIFx0XHRsYWJlbC5zdGF0ZXMuYWRkXG4jIFx0XHRcdHNlbGVjdGVkOiB7IGNvbG9yOiBcIiMwMDdFRTVcIiB9IFxuIyBcdFx0XHR1bnNlbGVjdGVkOiB7IGNvbG9yIDpcIiM5MjkyOTJcIn1cbiMgXHRcdGljb24uc3RhdGVzLmFkZFxuIyBcdFx0XHRzZWxlY3RlZDoge2ltYWdlOnRhYi5zZWxlY3RlZH1cbiMgXHRcdFx0dW5zZWxlY3RlZDoge2ltYWdlOnRhYi51bnNlbGVjdGVkfVxuIyBcdFx0dmlldy5zdGF0ZXMuYWRkXG4jIFx0XHRcdHNlbGVjdGVkOiB7dmlzaWJsZTp0cnVlfVxuIyBcdFx0XHR1bnNlbGVjdGVkOiB7dmlzaWJsZTpmYWxzZX1cbiMgXHRcdGNyZWF0ZWRUYWJzLnB1c2gge1xuIyBcdFx0XHRcImljb25cIiA6IGljb25cbiMgXHRcdFx0XCJsYWJlbFwiIDogbGFiZWxcbiMgXHRcdFx0XCJ2aWV3XCIgOiB2aWV3XG4jIFx0XHR9XG4jIFx0XHR2aWV3cy5wdXNoIHZpZXdcbiMgXHRcdHRhYnNJbmRleGFibGUucHVzaCBpY29uQ29udGFpbmVyXG4jIFx0XHRpZiBALnRhYnMuaW5kZXhPZih0YWIpICE9IEAuc3RhcnRcbiMgXHRcdFx0aWNvbi5zdGF0ZXMuc3dpdGNoKCd1bnNlbGVjdGVkJylcbiMgXHRcdFx0bGFiZWwuc3RhdGVzLnN3aXRjaCgndW5zZWxlY3RlZCcpXG4jIFx0XHRcdHZpZXcuc3RhdGVzLnN3aXRjaCgndW5zZWxlY3RlZCcpXG4jIFx0XHRlbHNlXG4jIFx0XHRcdGxhYmVsLnN0YXRlcy5zd2l0Y2goJ3NlbGVjdGVkJylcbiMgXHRmb3IgdGFiIGluIHRhYnNJbmRleGFibGVcbiMgXHRcdHRhYi5vbiBFdmVudHMuQ2xpY2ssIC0+XG4jIFx0XHRcdGluZGV4ID0gdGFic0luZGV4YWJsZS5pbmRleE9mKEApXG4jIFx0XHRcdGZvciB0YWIgaW4gY3JlYXRlZFRhYnNcbiMgXHRcdFx0XHR0YWIuaWNvbi5zdGF0ZXMuc3dpdGNoKCd1bnNlbGVjdGVkJylcbiMgXHRcdFx0XHR0YWIubGFiZWwuc3RhdGVzLnN3aXRjaCgndW5zZWxlY3RlZCcpXG4jIFx0XHRcdFx0dGFiLnZpZXcuc3RhdGVzLnN3aXRjaCgndW5zZWxlY3RlZCcpXG4jIFx0XHRcdGNyZWF0ZWRUYWJzW2luZGV4XS5pY29uLnN0YXRlcy5zd2l0Y2goJ3NlbGVjdGVkJylcbiMgXHRcdFx0Y3JlYXRlZFRhYnNbaW5kZXhdLmxhYmVsLnN0YXRlcy5zd2l0Y2goJ3NlbGVjdGVkJylcbiMgXHRcdFx0Y3JlYXRlZFRhYnNbaW5kZXhdLnZpZXcuc3RhdGVzLnN3aXRjaCgnc2VsZWN0ZWQnKVxuIyBcdHJldHVybiB7XG4jIFx0XHRcImFsbFwiIDogdGFiQmFyXG4jIFx0XHRcInRhYlwiIDogY3JlYXRlZFRhYnNcbiMgXHRcdFwiaW5kZXhcIiA6IHRhYnNJbmRleGFibGVcbiMgXHRcdFwidmlld1wiIDogdmlld3NcbiMgXHRcdH1cblxuXG5cblxuZXhwb3J0cy5LZXlib2FyZCA9IChhcnJheSkgLT5cblx0aWYgYXJyYXkgPT0gdW5kZWZpbmVkXG5cdFx0YXJyYXkgPSBbXVxuXHRmb3IgcHJvcCBpbiBkZWZhdWx0cy5rZXlib2FyZFByb3BzXG5cdFx0aWYgYXJyYXlbcHJvcF1cdFx0XHRcblx0XHRcdEBbcHJvcF0gPSBhcnJheVtwcm9wXVxuXHRcdGVsc2UgXG5cdFx0XHRAW3Byb3BdID0gZGVmYXVsdHMua2V5Ym9hcmRQcm9wc1twcm9wXVxuXHRib2FyZCA9IG5ldyBMYXllciBiYWNrZ3JvdW5kQ29sb3I6XCIjRDFENURBXCIsIG5hbWU6XCJrZXlib2FyZFwiXG5cdGJvYXJkLmNvbnN0cmFpbnRzID0gKGJvdHRvbTowLCBoZWlnaHQ6MjE2LCB0cmFpbGluZzoxLCBsZWFkaW5nOjEpXG5cdGV4cG9ydHMubGF5b3V0KClcblx0bGV0dGVyc0FycmF5ID0gW1wicVwiLCBcIndcIiwgXCJlXCIsIFwiclwiLCBcInRcIiwgXCJ5XCIsIFwidVwiLCBcImlcIiwgXCJvXCIsIFwicFwiLCBcImFcIiwgXCJzXCIsIFwiZFwiLCBcImZcIiwgXCJnXCIsIFwiaFwiLCBcImpcIiwgXCJrXCIsIFwibFwiLCBcInpcIiwgXCJ4XCIsIFwiY1wiLCBcInZcIiwgIFwiYlwiLCBcIm5cIiwgXCJtXCJdXG5cdGtleXNBcnJheSA9IFtdXG5cdHNwYWNlciA9IGV4cG9ydHMucHgoNSlcblx0aWYgZXhwb3J0cy5zY2FsZSA9PSAzIHx8IGV4cG9ydHMud2lkdGggPT0gNjQwXG5cdFx0c3BhY2VyID0gZXhwb3J0cy5weCg2KVxuXHRyb3dzTWFwID0gW1xuXHRcdHsgXG5cdFx0XHRcInBhZGRpbmdcIiA6IGV4cG9ydHMucHgoNClcblx0XHRcdFwic3RhcnRJbmRleFwiIDogMFxuXHRcdFx0XCJlbmRJbmRleFwiIDogOVxuXHRcdFx0XCJtYXJnaW5Ub3BcIiA6IGV4cG9ydHMucHgoMTApXG5cdFx0fSxcblx0XHR7IFxuXHRcdFx0XCJwYWRkaW5nXCIgOiAyMiAqIGV4cG9ydHMuc2NhbGVcblx0XHRcdFwic3RhcnRJbmRleFwiIDogMTBcblx0XHRcdFwiZW5kSW5kZXhcIiA6IDE4XG5cdFx0XHRcIm1hcmdpblRvcFwiIDogMjIgKiBleHBvcnRzLnNjYWxlXG5cdFx0fSxcblx0XHR7IFxuXHRcdFx0XCJwYWRkaW5nXCIgOiA1OSAqIGV4cG9ydHMuc2NhbGVcblx0XHRcdFwic3RhcnRJbmRleFwiIDogMTlcblx0XHRcdFwiZW5kSW5kZXhcIiA6IDI1XG5cdFx0XHRcIm1hcmdpblRvcFwiIDogMzQgKiBleHBvcnRzLnNjYWxlXG5cdFx0fVxuXHRdXG5cdGtleVBvcFVwID0gbmV3IExheWVyIHdpZHRoOkBrZXlXaWR0aCwgaGVpZ2h0OkBrZXlIZWlnaHQsIHg6QC54LTE2KmV4cG9ydHMuc2NhbGUsIGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCIsIHN1cGVyTGF5ZXI6Ym9hcmQsIG5hbWU6XCJrZXkgcG9wIHVwXCJcblx0Ym94ID0gbmV3IExheWVyIGJvcmRlclJhZGl1czpleHBvcnRzLnB4KDEwKSwgc3VwZXJMYXllcjprZXlQb3BVcCwgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIiwgY29sb3I6XCJibGFja1wiLCBuYW1lOlwibGV0dGVyXCJcblx0Ym94LnN0eWxlID0ge1xuXHRcdFwiZm9udC1zaXplXCIgOiAzOSAqIGV4cG9ydHMuc2NhbGUgKyBcInB4XCJcblx0XHRcImZvbnQtd2VpZ2h0XCIgOiAzMDBcblx0XHRcImZvbnQtZmFtaWx5XCIgOiAnLWFwcGxlLXN5c3RlbSwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZidcblx0XHQndGV4dC1hbGlnbicgOiAnY2VudGVyJ1xuXHRcdCdsaW5lLWhlaWdodCcgOiBAbGluZUhlaWdodFxuXHR9XG5cdEAuY29sb3IgPSBcIndoaXRlXCJcblx0cGF0aCA9IG5ldyBMYXllciBzdXBlckxheWVyOmtleVBvcFVwLCBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiLCBuYW1lOlwic2hhcGUgcGF0aFwiXG5cblxuXHRzaGlmdEtleSA9IG5ldyBMYXllciBzdXBlckxheWVyOmJvYXJkLCBuYW1lOlwic2hpZnRcIiwgYm9yZGVyUmFkaXVzOmV4cG9ydHMucHgoNSksIGJhY2tncm91bmRDb2xvcjpcIiNBQUIzQkNcIiwgc2hhZG93WTpleHBvcnRzLnB4KDEpLCBzaGFkb3dDb2xvcjpcIiM5Mjk0OThcIlxuXHRzaGlmdEtleS5jb25zdHJhaW50cyA9IChib3R0b206NTYsIGxlYWRpbmc6Mywgd2lkdGg6NDIsIGhlaWdodDo0Milcblx0c2hpZnRJY29uID0gbmV3IExheWVyIHdpZHRoOmV4cG9ydHMucHgoMjApLCBoZWlnaHQ6ZXhwb3J0cy5weCgxOSksIHN1cGVyTGF5ZXI6c2hpZnRLZXksIGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCIsIHg6ZXhwb3J0cy5weCgxMSksIHk6ZXhwb3J0cy5weCgxMSlcblx0c2hpZnRJY29uLmh0bWwgPSBcIjw/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyc/PlxuXHRcdDxzdmcgd2lkdGg9JyN7ZXhwb3J0cy5weCgyMCl9cHgnIGhlaWdodD0nI3tleHBvcnRzLnB4KDE4KX1weCcgdmlld0JveD0nMCAwIDIwIDE5JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHhtbG5zOnNrZXRjaD0naHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zJz5cblx0XHQgICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjUuMiAoMjUyMzUpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdCAgICA8dGl0bGU+U2hpZnQ8L3RpdGxlPlxuXHRcdCAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHQgICAgPGRlZnM+PC9kZWZzPlxuXHRcdCAgICA8ZyBpZD0nUGFnZS0xJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJyBza2V0Y2g6dHlwZT0nTVNQYWdlJz5cblx0XHQgICAgICAgIDxnIGlkPSdLZXlib2FyZC9MaWdodC9Mb3dlcicgc2tldGNoOnR5cGU9J01TTGF5ZXJHcm91cCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTE0LjAwMDAwMCwgLTEyOS4wMDAwMDApJyBmaWxsPScjMDMwMzAzJz5cblx0XHQgICAgICAgICAgICA8ZyBpZD0nVGhpcmQtUm93JyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgzLjAwMDAwMCwgMTE4LjAwMDAwMCknIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnPlxuXHRcdCAgICAgICAgICAgICAgICA8cGF0aCBkPSdNMjEuNjcxOTAwOCwxMi4yMzI1ODk4IEMyMS4zMDEwMzIsMTEuODI3OTkxNiAyMC42OTQ2ODkyLDExLjgzMzQ3MzEgMjAuMzI4ODE5NSwxMi4yMzI1ODk4IEwxMS42OTQ3MDIzLDIxLjY1MTI5ODMgQzEwLjc1ODc0NDEsMjIuNjcyMzA4IDExLjEyODU1NDEsMjMuNSAxMi41MDk3NzUxLDIzLjUgTDE1Ljk5OTk5OTksMjMuNTAwMDAwMiBMMTUuOTk5OTk5OSwyOC4wMDE0MjQxIEMxNS45OTk5OTk5LDI4LjgyOTA2NDggMTYuNjcxNjU1OSwyOS41MDAwMDAxIDE3LjQ5NzEwMSwyOS41MDAwMDAxIEwyNC41MDI4OTkyLDI5LjUwMDAwMDEgQzI1LjMyOTcyNTMsMjkuNTAwMDAwMSAyNi4wMDAwMDAzLDI4LjgzNDk3MDMgMjYuMDAwMDAwMywyOC4wMDE0MjQxIEwyNi4wMDAwMDAzLDIzLjUwMDAwMDEgTDI5LjQ5MDIyNTEsMjMuNTAwMDAwMiBDMzAuODc2MzM1NywyMy41MDAwMDAyIDMxLjI0Mzk1MjEsMjIuNjc1MTkxNiAzMC4zMDU0MTYxLDIxLjY1MTI5ODUgTDIxLjY3MTkwMDgsMTIuMjMyNTg5OCBaIE0yMS4zNDE3NDgsMTQuMzY0NTMxNiBDMjEuMTUzMDA1NiwxNC4xNjMyMDY0IDIwLjg0MzM1MTUsMTQuMTY3MDkxNCAyMC42NTgyNTE0LDE0LjM2NDUzMTYgTDEzLjUsMjEuOTk5OTk5OCBMMTcuNTAwMDAwMSwyMS45OTk5OTk5IEwxNy41MDAwMDAyLDI3LjUwODk5NTYgQzE3LjUwMDAwMDIsMjcuNzgwMTcwMyAxNy43MzI5MDI3LDI4LjAwMDAwMDggMTguMDAzNDIyOSwyOC4wMDAwMDA4IEwyMy45OTY1NzcsMjguMDAwMDAwOCBDMjQuMjc0NjA5NywyOC4wMDAwMDA4IDI0LjQ5OTk5OTcsMjcuNzcyMTIwMyAyNC40OTk5OTk3LDI3LjUwODk5NTYgTDI0LjQ5OTk5OTcsMjEuOTk5OTk5OSBMMjguNSwyMS45OTk5OTk5IEwyMS4zNDE3NDgsMTQuMzY0NTMxNiBaJyBpZD0nU2hpZnQnPjwvcGF0aD5cblx0XHQgICAgICAgICAgICA8L2c+XG5cdFx0ICAgICAgICA8L2c+XG5cdFx0ICAgIDwvZz5cblx0XHQ8L3N2Zz5cIlxuXG5cdHNoaWZ0SWNvbi5zdGF0ZXMuYWRkXG5cdFx0b246XG5cdFx0XHRodG1sOiBcIjw/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyc/PlxuXHRcdFx0PHN2ZyB3aWR0aD0nI3tleHBvcnRzLnB4KDIwKX1weCcgaGVpZ2h0PScje2V4cG9ydHMucHgoMTgpfXB4JyB2aWV3Qm94PScwIDAgMjAgMTcnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycgeG1sbnM6c2tldGNoPSdodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMnPlxuXHRcdFx0ICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy41LjIgKDI1MjM1KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHRcdCAgICA8dGl0bGU+U2hpZnQ8L3RpdGxlPlxuXHRcdFx0ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdFx0ICAgIDxkZWZzPjwvZGVmcz5cblx0XHRcdCAgICA8ZyBpZD0nUGFnZS0xJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJyBza2V0Y2g6dHlwZT0nTVNQYWdlJz5cblx0XHRcdCAgICAgICAgPGcgaWQ9J0tleWJvYXJkL0xpZ2h0L1VwcGVyJyBza2V0Y2g6dHlwZT0nTVNMYXllckdyb3VwJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtMTQuMDAwMDAwLCAtMTMwLjAwMDAwMCknIGZpbGw9JyMwMzAzMDMnPlxuXHRcdFx0ICAgICAgICAgICAgPGcgaWQ9J1RoaXJkLVJvdycgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMy4wMDAwMDAsIDExOC4wMDAwMDApJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJz5cblx0XHRcdCAgICAgICAgICAgICAgICA8cGF0aCBkPSdNMjEuNzA1MjM4OCwxMy4yMDUyMzg4IEMyMS4zMTU3NDYyLDEyLjgxNTc0NjIgMjAuNjg1NzU1OSwxMi44MTQyNDQxIDIwLjI5NDc2MTIsMTMuMjA1MjM4OCBMMTEuOTE2MDc2NywyMS41ODM5MjMzIEMxMS4xMzM5OTkxLDIyLjM2NjAwMDkgMTEuMzk4MjYwNiwyMyAxMi40OTc5MTMxLDIzIEwxNi41LDIzIEwxNi41LDI4LjAwOTIyMiBDMTYuNSwyOC41NTY0MTM2IDE2Ljk0NjMxMTQsMjkgMTcuNDk3NTQ0NiwyOSBMMjQuNTAyNDU1NCwyOSBDMjUuMDUzMzg0LDI5IDI1LjUsMjguNTQ5MDI0OCAyNS41LDI4LjAwOTIyMiBMMjUuNSwyMyBMMjkuNTAyMDg2OSwyMyBDMzAuNjA1NTAzOCwyMyAzMC44NjY4MjQsMjIuMzY2ODI0IDMwLjA4MzkyMzMsMjEuNTgzOTIzMyBMMjEuNzA1MjM4OCwxMy4yMDUyMzg4IFonIGlkPSdTaGlmdCc+PC9wYXRoPlxuXHRcdFx0ICAgICAgICAgICAgPC9nPlxuXHRcdFx0ICAgICAgICA8L2c+XG5cdFx0XHQgICAgPC9nPlxuXHRcdFx0PC9zdmc+XCJcblx0c2hpZnRJY29uLnN0YXRlcy5hbmltYXRpb25PcHRpb25zID1cbiAgXHQgIHRpbWU6IC4wMVxuXG4gIFx0ZGVsZXRlS2V5ID0gbmV3IExheWVyIHN1cGVyTGF5ZXI6Ym9hcmQsIGJvcmRlclJhZGl1czpleHBvcnRzLnB4KDUpLCBiYWNrZ3JvdW5kQ29sb3I6XCIjQUFCM0JDXCIsIHNoYWRvd1k6ZXhwb3J0cy5weCgxKSwgc2hhZG93Q29sb3I6XCIjOTI5NDk4XCJcbiAgXHRkZWxldGVLZXkuY29uc3RyYWludHMgPSAoYm90dG9tOjU2LCB0cmFpbGluZzozLCB3aWR0aDo0MiwgaGVpZ2h0OjQyKVxuICBcdGRlbGV0ZUljb24gPSBuZXcgTGF5ZXIgc3VwZXJMYXllcjpkZWxldGVLZXksIHdpZHRoOmV4cG9ydHMucHgoMjQpLCBoZWlnaHQ6ZXhwb3J0cy5weCgxOCksIGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCJcbiAgXHRkZWxldGVJY29uLmNvbnN0cmFpbnRzID0gKHRvcDoxMywgbGVhZGluZzoxMClcblxuICBcdGRlbGV0ZUljb24uc3RhdGVzLmFkZCBcbiAgXHRcdG9uOiBcbiAgXHRcdFx0aHRtbDogXCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0XHRcdFx0PHN2ZyB3aWR0aD0nI3tleHBvcnRzLnB4KDI0KX1weCcgaGVpZ2h0PScje2V4cG9ydHMucHgoMTgpfXB4JyB2aWV3Qm94PScwIDAgMjQgMTgnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycgeG1sbnM6c2tldGNoPSdodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMnPlxuXHRcdFx0XHQgICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjUuMiAoMjUyMzUpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdFx0XHQgICAgPHRpdGxlPkJhY2s8L3RpdGxlPlxuXHRcdFx0XHQgICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0XHRcdCAgICA8ZGVmcz48L2RlZnM+XG5cdFx0XHRcdCAgICA8ZyBpZD0nUGFnZS0xJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJyBza2V0Y2g6dHlwZT0nTVNQYWdlJz5cblx0XHRcdFx0ICAgICAgICA8ZyBpZD0nS2V5Ym9hcmQvTGlnaHQvVXBwZXInIHNrZXRjaDp0eXBlPSdNU0xheWVyR3JvdXAnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC0zMzkuMDAwMDAwLCAtMTMwLjAwMDAwMCknIGZpbGw9JyMwMzAzMDMnPlxuXHRcdFx0XHQgICAgICAgICAgICA8ZyBpZD0nVGhpcmQtUm93JyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgzLjAwMDAwMCwgMTE4LjAwMDAwMCknIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnPlxuXHRcdFx0XHQgICAgICAgICAgICAgICAgPHBhdGggZD0nTTM1MS42NDI2NjMsMjAuOTc3NjkwMyBMMzU0LjQ2Njc5NSwxOC4xNTM1NTg1IEMzNTQuNzYwMTA2LDE3Ljg2MDI0NzYgMzU0Ljc2Mzk4MywxNy4zODE0OTYyIDM1NC40NzEwOSwxNy4wODg2MDMgQzM1NC4xNzYxNTUsMTYuNzkzNjY3NyAzNTMuNzAxNCwxNi43OTc2MzI4IDM1My40MDYxMzUsMTcuMDkyODk4MyBMMzUwLjU4MjAwMywxOS45MTcwMzAxIEwzNDcuNzU3ODcxLDE3LjA5Mjg5ODMgQzM0Ny40NjQ1NiwxNi43OTk1ODc0IDM0Ni45ODU4MDksMTYuNzk1NzA5NyAzNDYuNjkyOTE2LDE3LjA4ODYwMyBDMzQ2LjM5Nzk4LDE3LjM4MzUzODIgMzQ2LjQwMTk0NSwxNy44NTgyOTMgMzQ2LjY5NzIxMSwxOC4xNTM1NTg1IEwzNDkuNTIxMzQzLDIwLjk3NzY5MDMgTDM0Ni42OTcyMTEsMjMuODAxODIyIEMzNDYuNDAzOSwyNC4wOTUxMzI5IDM0Ni40MDAwMjIsMjQuNTczODg0MyAzNDYuNjkyOTE2LDI0Ljg2Njc3NzYgQzM0Ni45ODc4NTEsMjUuMTYxNzEyOCAzNDcuNDYyNjA2LDI1LjE1Nzc0NzcgMzQ3Ljc1Nzg3MSwyNC44NjI0ODIyIEwzNTAuNTgyMDAzLDIyLjAzODM1MDQgTDM1My40MDYxMzUsMjQuODYyNDgyMiBDMzUzLjY5OTQ0NSwyNS4xNTU3OTMxIDM1NC4xNzgxOTcsMjUuMTU5NjcwOCAzNTQuNDcxMDksMjQuODY2Nzc3NiBDMzU0Ljc2NjAyNSwyNC41NzE4NDIzIDM1NC43NjIwNiwyNC4wOTcwODc1IDM1NC40NjY3OTUsMjMuODAxODIyIEwzNTEuNjQyNjYzLDIwLjk3NzY5MDMgWiBNMzM3LjA1OTM0NSwyMi4wNTkzNDQ1IEMzMzYuNDc0Mjg1LDIxLjQ3NDI4NDcgMzM2LjQ4MTM1MSwyMC41MTg2NDg5IDMzNy4wNTkzNDUsMTkuOTQwNjU1NSBMMzQzLjc4OTkxNSwxMy4yMTAwODUzIEMzNDQuMTgyMDg0LDEyLjgxNzkxNiAzNDQuOTQ4OTIsMTIuNSAzNDUuNTA3NDg0LDEyLjUgTDM1Ni4wMDIwOTgsMTIuNSBDMzU3LjkzMzkzNiwxMi41IDM1OS41LDE0LjA2ODg0NzcgMzU5LjUsMTYuMDAxNzk4MyBMMzU5LjUsMjUuOTk4MjAxNyBDMzU5LjUsMjcuOTMyMTkxNSAzNTcuOTIzMDg4LDI5LjUgMzU2LjAwMjA5OCwyOS41IEwzNDUuNTA3NDg0LDI5LjUgQzM0NC45NTEwNjYsMjkuNSAzNDQuMTc3MTY5LDI5LjE3NzE2OTMgMzQzLjc4OTkxNSwyOC43ODk5MTQ4IEwzMzcuMDU5MzQ1LDIyLjA1OTM0NDUgWicgaWQ9J0JhY2snPjwvcGF0aD5cblx0XHRcdFx0ICAgICAgICAgICAgPC9nPlxuXHRcdFx0XHQgICAgICAgIDwvZz5cblx0XHRcdFx0ICAgIDwvZz5cblx0XHRcdFx0PC9zdmc+XCJcblxuICBcdGRlbGV0ZUljb24uc3RhdGVzLmFkZFxuICBcdFx0b2ZmOiBcbiAgXHRcdFx0aHRtbDogXCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0XHQ8c3ZnIHdpZHRoPScje2V4cG9ydHMucHgoMjQpfXB4JyBoZWlnaHQ9JyN7ZXhwb3J0cy5weCgxOCl9cHgnIHZpZXdCb3g9JzAgMCAyNCAxOCcgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyB4bWxuczpza2V0Y2g9J2h0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaC9ucyc+XG5cdFx0ICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy41LjIgKDI1MjM1KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHQgICAgPHRpdGxlPkJhY2s8L3RpdGxlPlxuXHRcdCAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHQgICAgPGRlZnM+PC9kZWZzPlxuXHRcdCAgICA8ZyBpZD0nUGFnZS0xJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJyBza2V0Y2g6dHlwZT0nTVNQYWdlJz5cblx0XHQgICAgICAgIDxnIGlkPSdLZXlib2FyZC9MaWdodC9VcHBlcicgc2tldGNoOnR5cGU9J01TTGF5ZXJHcm91cCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTMzOS4wMDAwMDAsIC0xMzAuMDAwMDAwKScgZmlsbD0nIzAzMDMwMyc+XG5cdFx0ICAgICAgICAgICAgPGcgaWQ9J1RoaXJkLVJvdycgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMy4wMDAwMDAsIDExOC4wMDAwMDApJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJz5cblx0XHQgICAgICAgICAgICAgICAgPHBhdGggZD0nTTMzNy4wNTkzNDUsMjIuMDU5MzQ0NSBDMzM2LjQ3NDI4NSwyMS40NzQyODQ3IDMzNi40ODEzNTEsMjAuNTE4NjQ4OSAzMzcuMDU5MzQ1LDE5Ljk0MDY1NTUgTDM0My43ODk5MTUsMTMuMjEwMDg1MyBDMzQ0LjE4MjA4NCwxMi44MTc5MTYgMzQ0Ljk0ODkyLDEyLjUgMzQ1LjUwNzQ4NCwxMi41IEwzNTYuMDAyMDk4LDEyLjUgQzM1Ny45MzM5MzYsMTIuNSAzNTkuNSwxNC4wNjg4NDc3IDM1OS41LDE2LjAwMTc5ODMgTDM1OS41LDI1Ljk5ODIwMTcgQzM1OS41LDI3LjkzMjE5MTUgMzU3LjkyMzA4OCwyOS41IDM1Ni4wMDIwOTgsMjkuNSBMMzQ1LjUwNzQ4NCwyOS41IEMzNDQuOTUxMDY2LDI5LjUgMzQ0LjE3NzE2OSwyOS4xNzcxNjkzIDM0My43ODk5MTUsMjguNzg5OTE0OCBMMzM3LjA1OTM0NSwyMi4wNTkzNDQ1IFogTTM1MS42NDI2NjMsMjAuOTc3NjkwMyBMMzU0LjQ2Njc5NSwxOC4xNTM1NTg1IEMzNTQuNzYwMTA2LDE3Ljg2MDI0NzYgMzU0Ljc2Mzk4MywxNy4zODE0OTYyIDM1NC40NzEwOSwxNy4wODg2MDMgQzM1NC4xNzYxNTUsMTYuNzkzNjY3NyAzNTMuNzAxNCwxNi43OTc2MzI4IDM1My40MDYxMzUsMTcuMDkyODk4MyBMMzUwLjU4MjAwMywxOS45MTcwMzAxIEwzNDcuNzU3ODcxLDE3LjA5Mjg5ODMgQzM0Ny40NjQ1NiwxNi43OTk1ODc0IDM0Ni45ODU4MDksMTYuNzk1NzA5NyAzNDYuNjkyOTE2LDE3LjA4ODYwMyBDMzQ2LjM5Nzk4LDE3LjM4MzUzODIgMzQ2LjQwMTk0NSwxNy44NTgyOTMgMzQ2LjY5NzIxMSwxOC4xNTM1NTg1IEwzNDkuNTIxMzQzLDIwLjk3NzY5MDMgTDM0Ni42OTcyMTEsMjMuODAxODIyIEMzNDYuNDAzOSwyNC4wOTUxMzI5IDM0Ni40MDAwMjIsMjQuNTczODg0MyAzNDYuNjkyOTE2LDI0Ljg2Njc3NzYgQzM0Ni45ODc4NTEsMjUuMTYxNzEyOCAzNDcuNDYyNjA2LDI1LjE1Nzc0NzcgMzQ3Ljc1Nzg3MSwyNC44NjI0ODIyIEwzNTAuNTgyMDAzLDIyLjAzODM1MDQgTDM1My40MDYxMzUsMjQuODYyNDgyMiBDMzUzLjY5OTQ0NSwyNS4xNTU3OTMxIDM1NC4xNzgxOTcsMjUuMTU5NjcwOCAzNTQuNDcxMDksMjQuODY2Nzc3NiBDMzU0Ljc2NjAyNSwyNC41NzE4NDIzIDM1NC43NjIwNiwyNC4wOTcwODc1IDM1NC40NjY3OTUsMjMuODAxODIyIEwzNTEuNjQyNjYzLDIwLjk3NzY5MDMgWiBNMzM4LjcwOTcyLDIxLjcwOTcxOTUgQzMzOC4zMTc3NTIsMjEuMzE3NzUyMiAzMzguMzE4OTY1LDIwLjY4MTAzNDkgMzM4LjcwOTcyLDIwLjI5MDI4MDUgTDM0NC42NDMyNDUsMTQuMzU2NzU0NyBDMzQ0Ljg0MDI3NiwxNC4xNTk3MjQ1IDM0NS4yMjU2MzksMTQgMzQ1LjQ5Mzc0MSwxNCBMMzU1Ljk5NzIzOSwxNCBDMzU3LjEwMzMzMywxNCAzNTcuOTk5OTk5LDE0Ljg5NzA2MDEgMzU3Ljk5OTk5OSwxNi4wMDU4NTg2IEwzNTcuOTk5OTk5LDI1Ljk5NDE0MTIgQzM1Ny45OTk5OTksMjcuMTAxOTQ2NCAzNTcuMTA2NDU3LDI3Ljk5OTk5OTkgMzU1Ljk5NzIzOSwyNy45OTk5OTk5IEwzNDUuNDkzNzQxLDI4IEMzNDUuMjIxMDU2LDI4IDM0NC44NDA2NDMsMjcuODQwNjQzMSAzNDQuNjQzMjQ2LDI3LjY0MzI0NTMgTDMzOC43MDk3MiwyMS43MDk3MTk1IFonIGlkPSdCYWNrJz48L3BhdGg+XG5cdFx0ICAgICAgICAgICAgPC9nPlxuXHRcdCAgICAgICAgPC9nPlxuXHRcdCAgICA8L2c+XG5cdFx0PC9zdmc+XCJcblxuXG4gIFx0ZGVsZXRlS2V5Lm9uIEV2ZW50cy5Ub3VjaFN0YXJ0LCAtPlxuICBcdFx0ZGVsZXRlS2V5LmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIlxuICBcdFx0ZGVsZXRlSWNvbi5zdGF0ZXMuc3dpdGNoSW5zdGFudChcIm9uXCIpXG5cbiAgXHRkZWxldGVLZXkub24gRXZlbnRzLlRvdWNoRW5kLCAtPlxuICBcdFx0ZGVsZXRlS2V5LmJhY2tncm91bmRDb2xvciA9IFwiI0FBQjNCQ1wiXG4gIFx0XHRkZWxldGVJY29uLnN0YXRlcy5zd2l0Y2hJbnN0YW50KFwib2ZmXCIpXG5cbiAgXHRkZWxldGVJY29uLnN0YXRlcy5zd2l0Y2hJbnN0YW50KFwib2ZmXCIpXG5cblx0c2hpZnRJY29uLm9uIEV2ZW50cy5DbGljaywgLT5cblx0XHRzaGlmdEljb24uc3RhdGVzLm5leHQoKVxuXHRcdGlmIHNoaWZ0SWNvbi5zdGF0ZXMuc3RhdGUgPT0gXCJvblwiXG5cdFx0XHRzaGlmdEtleS5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCJcblx0XHRcdGZvciBrZXkgaW4ga2V5c0FycmF5XG5cdFx0XHRcdGtleS5zdHlsZVsndGV4dC10cmFuc2Zvcm0nXSA9ICd1cHBlcmNhc2UnXG5cdFx0XHRib3guc3R5bGVbJ3RleHQtdHJhbnNmb3JtJ10gPSAndXBwZXJjYXNlJ1xuXHRcdGVsc2UgXG5cdFx0XHRzaGlmdEtleS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNBQUIzQkNcIlxuXHRcdFx0Zm9yIGtleSBpbiBrZXlzQXJyYXlcblx0XHRcdFx0a2V5LnN0eWxlW1widGV4dC10cmFuc2Zvcm1cIl0gPSAnbG93ZXJjYXNlJ1xuXHRcdFx0Ym94LnN0eWxlW1widGV4dC10cmFuc2Zvcm1cIl0gPSAnbG93ZXJjYXNlJ1xuXG5cdGZvciBsZXR0ZXIgaW4gbGV0dGVyc0FycmF5XG5cdFx0aW5kZXggPSBsZXR0ZXJzQXJyYXkuaW5kZXhPZihsZXR0ZXIpIFxuXHRcdGtleSA9IG5ldyBMYXllciBuYW1lOmxldHRlciwgc3VwZXJMYXllcjpib2FyZCwgYm9yZGVyUmFkaXVzOjUqZXhwb3J0cy5zY2FsZSwgYmFja2dyb3VuZENvbG9yOlwid2hpdGVcIiwgY29sb3I6XCJibGFja1wiLCBzaGFkb3dZOmV4cG9ydHMucHgoMSksIHNoYWRvd0NvbG9yOlwiIzkyOTQ5OFwiXG5cdFx0a2V5UG9wVXAuYnJpbmdUb0Zyb250KClcblx0XHRib3guYnJpbmdUb0Zyb250KClcblx0XHRpZiBleHBvcnRzLnNjYWxlID09IDJcblx0XHRcdGtleS5jb25zdHJhaW50cyA9ICh3aWR0aDozMiwgaGVpZ2h0OjQyKVxuXHRcdFx0a2V5UG9wVXAuY29uc3RyYWludHMgPSAod2lkdGg6NjUsIGhlaWdodDoxMjIpXG5cdFx0XHRwYXRoLmNvbnN0cmFpbnRzID0gKHdpZHRoOjY1LCBoZWlnaHQ6IDEyMilcblx0XHRcdHBhdGgueSA9IDEwXG5cdFx0XHRAcGF0aFdpZHRoID0gZXhwb3J0cy5weCg2NSlcblx0XHRcdEBwYXRoSGVpZ2h0ID0gZXhwb3J0cy5weCgxMjIpXG5cdFx0XHRAa2V5SGVpZ2h0ID0gZXhwb3J0cy5weCgzMilcblx0XHRcdEBrZXlXaWR0aCA9IGV4cG9ydHMucHgoNDQpXG5cdFx0XHRAbGluZUhlaWdodCA9IEBrZXlXaWR0aCAtIDE3ICsgXCJweFwiXG5cdFx0XHRib3guY29uc3RyYWludHMgPSAod2lkdGg6MzIsIGhlaWdodDo0NClcblx0XHRcdGJveC5jZW50ZXJYKClcblx0XHRcdGJveC55ID0gZXhwb3J0cy5weCgyOClcblxuXHRcdGlmIGV4cG9ydHMuc2NhbGUgPT0gM1xuXHRcdFx0a2V5LmNvbnN0cmFpbnRzID0gKHdpZHRoOjM1LCBoZWlnaHQ6NDYpXG5cdFx0XHRrZXlQb3BVcC5jb25zdHJhaW50cyA9ICh3aWR0aDo2OCwgaGVpZ2h0OjEyMilcblx0XHRcdEBrZXlIZWlnaHQgPSBleHBvcnRzLnB4KDEyMilcblx0XHRcdEBrZXlXaWR0aCA9IGV4cG9ydHMucHgoNjUpXG5cdFx0XHRAbGluZUhlaWdodCA9IEBrZXlXaWR0aCArIFwicHhcIlxuXHRcdFx0QHBhdGhXaWR0aCA9IGV4cG9ydHMucHgoNjgpXG5cdFx0XHRAcGF0aEhlaWdodCA9IGV4cG9ydHMucHgoMTI4KVxuXHRcdFx0cGF0aC55ID0gMFxuXG5cblx0XHRcdGJveC5jb25zdHJhaW50cyA9ICh3aWR0aDozNSwgaGVpZ2h0OjQ2KVxuXHRcdFx0Ym94LmNlbnRlclgoKVxuXHRcdFx0Ym94LnkgPSBleHBvcnRzLnB4KDI4KVxuXG5cdFx0aWYgZXhwb3J0cy53aWR0aCA9PSA2NDBcblx0XHRcdGtleS5jb25zdHJhaW50cyA9ICh3aWR0aDoyNiwgaGVpZ2h0OjM5KVxuXG5cdFx0a2V5UG9wVXAudmlzaWJsZSA9IGZhbHNlXG5cblx0XHRleHBvcnRzLmxheW91dCgpXG5cdFx0a2V5LnN0eWxlID0ge1xuXHRcdFx0XCJmb250LXNpemVcIiA6IDI1ICogZXhwb3J0cy5zY2FsZSArIFwicHhcIlxuXHRcdFx0XCJmb250LXdlaWdodFwiIDogMzAwXG5cdFx0XHRcImZvbnQtZmFtaWx5XCIgOiAnLWFwcGxlLXN5c3RlbSwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZidcblx0XHRcdCd0ZXh0LWFsaWduJyA6ICdjZW50ZXInXG5cdFx0XHQnbGluZS1oZWlnaHQnIDoga2V5LmhlaWdodCAtIGV4cG9ydHMucHgoMikgKyBcInB4XCJcblx0XHR9XG5cdFx0a2V5Lmh0bWwgPSBsZXR0ZXJcblx0XHRpZiBpbmRleCA8PSByb3dzTWFwWzBdLmVuZEluZGV4XG5cdFx0XHRyb3dJbmRleCA9IGluZGV4IC0gcm93c01hcFswXS5zdGFydEluZGV4XG5cdFx0XHRrZXkueCA9IHJvd3NNYXBbMF0ucGFkZGluZyArIChyb3dJbmRleCpzcGFjZXIpICsgKHJvd0luZGV4KmtleS53aWR0aClcblx0XHRcdGtleS55ID0gcm93c01hcFswXS5tYXJnaW5Ub3Bcblx0XHRpZiBpbmRleCA+IHJvd3NNYXBbMF0uZW5kSW5kZXggJiYgaW5kZXggPD0gcm93c01hcFsxXS5lbmRJbmRleFxuXHRcdFx0cm93SW5kZXggPSBpbmRleCAtIHJvd3NNYXBbMV0uc3RhcnRJbmRleFxuXHRcdFx0a2V5LnggPSByb3dzTWFwWzFdLnBhZGRpbmcgKyAocm93SW5kZXgqc3BhY2VyKSArIChyb3dJbmRleCprZXkud2lkdGgpXG5cdFx0XHRrZXkueSA9IHJvd3NNYXBbMV0ubWFyZ2luVG9wICsga2V5LmhlaWdodFxuXHRcdGlmIGluZGV4ID4gcm93c01hcFsxXS5lbmRJbmRleFxuXHRcdFx0cm93SW5kZXggPSBpbmRleCAtIHJvd3NNYXBbMl0uc3RhcnRJbmRleFxuXHRcdFx0a2V5LnggPSByb3dzTWFwWzJdLnBhZGRpbmcgKyAocm93SW5kZXgqc3BhY2VyKSArIChyb3dJbmRleCprZXkud2lkdGgpXG5cdFx0XHRrZXkueSA9IHJvd3NNYXBbMl0ubWFyZ2luVG9wICsga2V5LmhlaWdodCAqIDJcblx0XHRwYXRoLmh0bWwgPSBcIjw/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyc/PlxuXG5cdFx0PHN2ZyB3aWR0aD0nI3tAcGF0aFdpZHRofXB4JyBoZWlnaHQ9JyN7QHBhdGhIZWlnaHR9JyB2aWV3Qm94PScwIDAgNjMgMTE0JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHhtbG5zOnNrZXRjaD0naHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zJz5cblx0XHQgICAgPHRpdGxlPlJlY3RhbmdsZSA0NCBDb3B5PC90aXRsZT5cblx0XHQgICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0ICAgIDxkZWZzPlxuXHRcdCAgICAgICAgPGZpbHRlciB4PSctNTAlJyB5PSctNTAlJyB3aWR0aD0nMjAwJScgaGVpZ2h0PScyMDAlJyBmaWx0ZXJVbml0cz0nb2JqZWN0Qm91bmRpbmdCb3gnIGlkPSdmaWx0ZXItMSc+XG5cdFx0ICAgICAgICAgICAgPGZlT2Zmc2V0IGR4PScwJyBkeT0nMCcgaW49J1NvdXJjZUFscGhhJyByZXN1bHQ9J3NoYWRvd09mZnNldE91dGVyMSc+PC9mZU9mZnNldD5cblx0XHQgICAgICAgICAgICA8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPScxLjUnIGluPSdzaGFkb3dPZmZzZXRPdXRlcjEnIHJlc3VsdD0nc2hhZG93Qmx1ck91dGVyMSc+PC9mZUdhdXNzaWFuQmx1cj5cblx0XHQgICAgICAgICAgICA8ZmVDb2xvck1hdHJpeCB2YWx1ZXM9JzAgMCAwIDAgMCAgIDAgMCAwIDAgMCAgIDAgMCAwIDAgMCAgMCAwIDAgMC4yMSAwJyBpbj0nc2hhZG93Qmx1ck91dGVyMScgdHlwZT0nbWF0cml4JyByZXN1bHQ9J3NoYWRvd01hdHJpeE91dGVyMSc+PC9mZUNvbG9yTWF0cml4PlxuXHRcdCAgICAgICAgICAgIDxmZU1lcmdlPlxuXHRcdCAgICAgICAgICAgICAgICA8ZmVNZXJnZU5vZGUgaW49J3NoYWRvd01hdHJpeE91dGVyMSc+PC9mZU1lcmdlTm9kZT5cblx0XHQgICAgICAgICAgICAgICAgPGZlTWVyZ2VOb2RlIGluPSdTb3VyY2VHcmFwaGljJz48L2ZlTWVyZ2VOb2RlPlxuXHRcdCAgICAgICAgICAgIDwvZmVNZXJnZT5cblx0XHQgICAgICAgIDwvZmlsdGVyPlxuXHRcdCAgICA8L2RlZnM+XG5cdFx0ICAgIDxnIGlkPSdQYWdlLTEnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIHNrZXRjaDp0eXBlPSdNU1BhZ2UnPlxuXHRcdCAgICAgICAgPGcgaWQ9J2lQaG9uZS02JyBza2V0Y2g6dHlwZT0nTVNBcnRib2FyZEdyb3VwJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtMTE4LjAwMDAwMCwgLTI0MC4wMDAwMDApJyBzdHJva2U9JyNDN0M3QzcnIGZpbHRlcj0ndXJsKCNmaWx0ZXItMSknIHN0cm9rZS13aWR0aD0nMC41JyBcblx0XHQgICAgICAgIGZpbGw9JyNGRkZGRkYnIG9wYWNpdHk9JzAuOTk4MzY3NTM3Jz5cblx0XHQgICAgICAgICA8cGF0aCBkPSdNMTM0LDMwNiBDMTM0LDMwNiAxMjEsMjk1IDEyMSwyOTAgQzEyMSwyNzkuNjE2Nzg4IDEyMSwyNTMuMDAxNDU2IDEyMSwyNTMuMDAxNDU2IEMxMjEsMjQ3LjQ3NzgwNCAxMjUuNDg1ODMyLDI0MyAxMzEuMDAyNzc0LDI0MyBMMTY3Ljg2MjEyNywyNDMgQzE3My4zODY1MDcsMjQzIDE3Ny44ODA4NjIsMjQ3LjQ2OTkwNSBcblx0XHQgICAgICAgICAxNzcuOTAwMDQ0LDI1Mi45OTcyNzEgQzE3Ny45MDAwNDQsMjUyLjk5NzI3MSAxNzgsMjgwIDE3Ny45OTk5OTksMjkwIEMxNzcuOTk5OTk5LDI5NS4wMDY1NTMgMTY1LDMwNiAxNjUsMzA2IEwxNjUsMzQ2LjA0OTU5NCBcblx0XHQgICAgICAgICBDMTY1LDM0OC44MDY4MDcgMTYyLjc3MDU1NiwzNTEuMDQxOTY5IDE2MC4wMDIwOTgsMzUxLjA0MTk2OSBMMTM4Ljk5NzkwMiwzNTEuMDQxOTY5IFxuXHRcdCAgICAgICAgICBDMTM2LjIzNzYzNywzNTEuMDQxOTY5IDEzNCwzNDguODA4MzMxIDEzNCwzNDYuMDQ5NTk0IEwxMzQsMzA2IFonIGlkPSdSZWN0YW5nbGUtNDQtQ29weScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMTQ5LjUwMDAwMCwgMjk3LjAyMDk4NSkgc2NhbGUoLTEsIDEpIHRyYW5zbGF0ZSgtMTQ5LjUwMDAwMCwgLTI5Ny4wMjA5ODUpICc+XG5cdFx0ICAgICAgICAgIDwvcGF0aD5cblx0XHQgICAgICAgIDwvZz5cblx0XHQgICAgPC9nPlxuXHRcdDwvc3ZnPlwiXG5cdFx0a2V5c0FycmF5LnB1c2gga2V5XG5cblxuXHRcdGtleS5vbiBFdmVudHMuVG91Y2hTdGFydCwgLT5cblx0XHRcdGtleVBvcFVwLnZpc2libGUgPSB0cnVlXHRcblx0XHRcdGJveC5odG1sID0gQC5uYW1lXG5cdFx0XHRrZXlQb3BVcC5tYXhZID0gQC5tYXhZXG5cdFx0XHRrZXlQb3BVcC5taWRYID0gQC5taWRYXG5cblx0XHRrZXkub24gRXZlbnRzLlRvdWNoTW92ZSwgLT5cblx0XHRcdGJveC5odG1sID0gQC5uYW1lXG5cdFx0XHRrZXlQb3BVcC5tYXhZID0gQC5tYXhZXG5cdFx0XHRrZXlQb3BVcC5taWRYID0gQC5taWRYXHRcblxuXHRcdGtleS5vbiBFdmVudHMuVG91Y2hFbmQsIC0+XG5cdFx0XHRrZXlQb3BVcC52aXNpYmxlID0gZmFsc2Vcblx0XHRcdGlmIHNoaWZ0SWNvbi5zdGF0ZXMuc3RhdGUgPT0gXCJvblwiXG5cdFx0XHRcdHNoaWZ0SWNvbi5zdGF0ZXMuc3dpdGNoKFwiZGVmYXVsdFwiKVxuXHRcdFx0XHRmb3Iga2V5IGluIGtleXNBcnJheVxuXHRcdFx0XHRcdGtleS5zdHlsZVsndGV4dC10cmFuc2Zvcm0nXSA9ICdsb3dlcmNhc2UnXG5cdFx0XHRcdGJveC5zdHlsZVsndGV4dC10cmFuc2Zvcm0nXSA9ICdsb3dlcmNhc2UnXG5cblxuXG5cblx0bnVtS2V5ID0gbmV3IExheWVyIHN1cGVyTGF5ZXI6Ym9hcmQsIG5hbWU6XCJudW1cIiwgYm9yZGVyUmFkaXVzOmV4cG9ydHMucHgoNSksIGJhY2tncm91bmRDb2xvcjpcIiNBQUIzQkNcIiwgc2hhZG93WTpleHBvcnRzLnB4KDEpLCBzaGFkb3dDb2xvcjpcIiM5Mjk0OThcIiwgY29sb3I6XCJibGFja1wiXG5cdG51bUtleS5jb25zdHJhaW50cyA9ICh3aWR0aDo0MC41LCBoZWlnaHQ6NDIsIGJvdHRvbTo0LCBsZWFkaW5nOjMpXG5cdG51bUtleS5odG1sID0gXCIxMjNcIlxuXHRudW1LZXkuc3R5bGUgPSB7XG5cdFx0XCJmb250LXNpemVcIiA6IGV4cG9ydHMucHgoMTYpICsgXCJweFwiXG5cdFx0XCJmb250LXdlaWdodFwiIDogNDAwXG5cdFx0XCJmb250LWZhbWlseVwiIDogJy1hcHBsZS1zeXN0ZW0sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYnXG5cdFx0J3RleHQtYWxpZ24nIDogJ2NlbnRlcidcblx0XHQnbGluZS1oZWlnaHQnIDogZXhwb3J0cy5weCg0MikgKyBcInB4XCJcblxuXHR9XG5cblx0ZXhwb3J0cy5sYXlvdXQoKVxuXHRlbW9qaUtleSA9IG5ldyBMYXllciBzdXBlckxheWVyOmJvYXJkLCBuYW1lOlwiZW1vamlcIiwgYm9yZGVyUmFkaXVzOmV4cG9ydHMucHgoNSksIGJhY2tncm91bmRDb2xvcjpcIiNBQUIzQkNcIiwgc2hhZG93WTpleHBvcnRzLnB4KDEpLCBzaGFkb3dDb2xvcjpcIiM5Mjk0OThcIlxuXHRlbW9qaUtleS5jb25zdHJhaW50cyA9ICh3aWR0aDo0MSwgaGVpZ2h0OjQyLCBib3R0b206NCwgbGVhZGluZzpbbnVtS2V5LCA2XSlcblx0ZW1vamlLZXkuaHRtbCA9IFwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdFx0PHN2ZyB3aWR0aD0nI3tleHBvcnRzLnB4KDIwKX1weCcgaGVpZ2h0PScje2V4cG9ydHMucHgoMjApfXB4JyB2aWV3Qm94PScwIDAgMjAgMjAnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycgeG1sbnM6c2tldGNoPSdodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMnPlxuXHRcdCAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNS4yICgyNTIzNSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdFx0ICAgIDx0aXRsZT5FbW9qaTwvdGl0bGU+XG5cdFx0ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdCAgICA8ZGVmcz48L2RlZnM+XG5cdFx0ICAgIDxnIGlkPSdQYWdlLTEnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIHNrZXRjaDp0eXBlPSdNU1BhZ2UnPlxuXHRcdCAgICAgICAgPGcgaWQ9J0tleWJvYXJkL0xpZ2h0L0xvd2VyJyBza2V0Y2g6dHlwZT0nTVNMYXllckdyb3VwJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtNjAuMDAwMDAwLCAtMTgxLjAwMDAwMCknIGZpbGw9JyMwMzAzMDMnPlxuXHRcdCAgICAgICAgICAgIDxnIGlkPSdCb3R0b20tUm93JyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgzLjAwMDAwMCwgMTcwLjAwMDAwMCknIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnPlxuXHRcdCAgICAgICAgICAgICAgICA8cGF0aCBkPSdNNjYuNzUsMzAuNSBDNzIuMTM0Nzc2MywzMC41IDc2LjUsMjYuMTM0Nzc2MyA3Ni41LDIwLjc1IEM3Ni41LDE1LjM2NTIyMzcgNzIuMTM0Nzc2MywxMSA2Ni43NSwxMSBDNjEuMzY1MjIzNywxMSA1NywxNS4zNjUyMjM3IDU3LDIwLjc1IEM1NywyNi4xMzQ3NzYzIDYxLjM2NTIyMzcsMzAuNSA2Ni43NSwzMC41IFogTTY2Ljc1LDI5LjUgQzcxLjU4MjQ5MTYsMjkuNSA3NS41LDI1LjU4MjQ5MTYgNzUuNSwyMC43NSBDNzUuNSwxNS45MTc1MDg0IDcxLjU4MjQ5MTYsMTIgNjYuNzUsMTIgQzYxLjkxNzUwODQsMTIgNTgsMTUuOTE3NTA4NCA1OCwyMC43NSBDNTgsMjUuNTgyNDkxNiA2MS45MTc1MDg0LDI5LjUgNjYuNzUsMjkuNSBaIE02My43NSwxOSBDNjQuNDQwMzU1OSwxOSA2NSwxOC40NDAzNTU5IDY1LDE3Ljc1IEM2NSwxNy4wNTk2NDQxIDY0LjQ0MDM1NTksMTYuNSA2My43NSwxNi41IEM2My4wNTk2NDQxLDE2LjUgNjIuNSwxNy4wNTk2NDQxIDYyLjUsMTcuNzUgQzYyLjUsMTguNDQwMzU1OSA2My4wNTk2NDQxLDE5IDYzLjc1LDE5IFogTTY5Ljc1LDE5IEM3MC40NDAzNTU5LDE5IDcxLDE4LjQ0MDM1NTkgNzEsMTcuNzUgQzcxLDE3LjA1OTY0NDEgNzAuNDQwMzU1OSwxNi41IDY5Ljc1LDE2LjUgQzY5LjA1OTY0NDEsMTYuNSA2OC41LDE3LjA1OTY0NDEgNjguNSwxNy43NSBDNjguNSwxOC40NDAzNTU5IDY5LjA1OTY0NDEsMTkgNjkuNzUsMTkgWiBNNTkuODg3NjMzNCwyMi4xNjQxNDQ0IEM1OS42MzkwMzE2LDIxLjM4MzEzNCA2MC4wNjU5MTgsMjAuOTc4NTE1NiA2MC44NTMwOTUxLDIxLjIzMjkzMDQgQzYwLjg1MzA5NTEsMjEuMjMyOTMwNCA2My4wOTM3NTAzLDIyLjIxMjUgNjYuNzUwMDAwMSwyMi4yMTI1IEM3MC40MDYyNDk5LDIyLjIxMjUgNzIuNjQ2OTA0NywyMS4yMzI5MzA0IDcyLjY0NjkwNDcsMjEuMjMyOTMwNCBDNzMuNDI4NzE2MiwyMC45NjYyMTUzIDczLjg4MTI0NjMsMjEuNDA0NDA5NyA3My42MDU4NDc3LDIyLjE4MDc0MzcgQzczLjYwNTg0NzcsMjIuMTgwNzQzNyA3Mi42LDI3LjU3NSA2Ni43NSwyNy41NzUgQzYwLjksMjcuNTc1IDU5Ljg4NzYzMzQsMjIuMTY0MTQ0NCA1OS44ODc2MzM0LDIyLjE2NDE0NDQgWiBNNjYuNzUsMjMuMTg3NSBDNjQuMDY4NzUsMjMuMTg3NSA2MS44NTQ0MDU1LDIyLjQ3Mzc4MjEgNjEuODU0NDA1NSwyMi40NzM3ODIxIEM2MS4zMjczMDE5LDIyLjMyOTQ4IDYxLjE3ODEyMzMsMjIuNTcyMTYxNSA2MS41NjM5NTU1LDIyLjk1NzA3NSBDNjEuNTYzOTU1NSwyMi45NTcwNzUgNjIuMzYyNSwyNC42NSA2Ni43NSwyNC42NSBDNzEuMTM3NSwyNC42NSA3MS45NTA4NTAzLDIyLjk0MzgzMDQgNzEuOTUwODUwMywyMi45NDM4MzA0IEM3Mi4zMDkzNjU5LDIyLjUzOTkyNzggNzIuMTY5MDc5MywyMi4zMzU5ODQ0IDcxLjYzNTQyNzMsMjIuNDc2MzQ5IEM3MS42MzU0MjczLDIyLjQ3NjM0OSA2OS40MzEyNSwyMy4xODc1IDY2Ljc1LDIzLjE4NzUgWicgaWQ9J0Vtb2ppJz48L3BhdGg+XG5cdFx0ICAgICAgICAgICAgPC9nPlxuXHRcdCAgICAgICAgPC9nPlxuXHRcdCAgICA8L2c+XG5cdFx0PC9zdmc+XCJcblx0ZW1vamlLZXkuc3R5bGUgPSB7XG5cdFx0XCJwYWRkaW5nLXRvcFwiOiBleHBvcnRzLnB4KDExKSArIFwicHhcIlxuXHRcdFwicGFkZGluZy1sZWZ0XCI6IGV4cG9ydHMucHgoMTEpICsgXCJweFwiXG5cdH1cblxuXHRlbW9qaUZvcm1hdHRlciA9IChzdHJpbmcpIC0+XG5cdFx0dW5pY29kZUZvcm1hdCA9IFwiXCJcblx0XHRpZiBzdHJpbmdbMF0gPT0gXCJFXCIgfHwgc3RyaW5nWzBdID09IFwiM1wiIHx8IHN0cmluZ1swXSA9PSBcIjJcIiB8fCBzdHJpbmdbMF0gPT0gXCJDXCJcblx0XHRcdGFycmF5T2ZDb2RlcyA9IHN0cmluZy5zcGxpdChcIiBcIilcblx0XHRcdGZvciBjb2RlIGluIGFycmF5T2ZDb2Rlc1xuXHRcdFx0XHR1bmljb2RlRm9ybWF0ID0gdW5pY29kZUZvcm1hdCArIFwiJVwiICsgY29kZVxuXHRcdGVsc2UgXG5cdFx0XHRhcnJheU9mQ29kZXMgPSBzdHJpbmcuc3BsaXQoXCIgXCIpXG5cdFx0XHR1bmljb2RlRm9ybWF0ID0gXCIlRjAlOUZcIlxuXHRcdFx0Zm9yIGNvZGUgaW4gYXJyYXlPZkNvZGVzXG5cdFx0XHRcdHVuaWNvZGVGb3JtYXQgPSB1bmljb2RlRm9ybWF0ICsgXCIlXCIgKyBjb2RlXG5cdFx0cmV0dXJuIHVuaWNvZGVGb3JtYXRcblxuXHRleHBvcnRzLmxheW91dCgpXG5cdGVtb2ppU2VjdGlvbnMgPSBbXCJGcmVxdW5ldGx5IFVzZWRcIiwgXCJTbWlsZXlzICYgUGVvcGxlXCIsIFwiQW5pbWFscyAmIE5hdHVyZVwiLCBcIkZvb2QgJiBEcmlua1wiLCBcIkFjdGl2aXR5XCIsIFwiVHJhdmVsICYgUGxhY2VzXCIsIFwiT2JqZWN0c1wiLCBcIlN5bWJvbHNcIiwgXCJGbGFnc1wiXVxuXHRyYXdFbW9qaXMgPSBbXCI5OCA4MFwiLCBcIjk4IEFDXCIsIFwiOTggODFcIiwgXCI5OCA4MlwiLCBcIjk4IDgzXCIsIFwiOTggODRcIiwgXCI5OCA4NVwiLCBcIjk4IDg2XCIsIFwiOTggODdcIiwgXCI5OCA4OVwiLCBcIjk4IDhhXCIsIFwiOTkgODJcIiwgXCI5OSA4M1wiLCBcIkUyIDk4IEJBIEVGIEI4IDhGXCIsIFwiOTggOEJcIiAsIFwiOTggOENcIiwgXCI5OCA4RFwiLCBcIjk4IDk4XCIsIFwiOTggOTdcIiwgXCI5OCA5OVwiLCBcIjk4IDlBXCIsIFwiOTggOUNcIiwgXCI5OCA5RFwiLCBcIjk4IDlCXCIsIFwiQTQgOTFcIiwgXCJBNCA5M1wiLCBcIjk4IDhFXCIsIFwiQTQgOTdcIiwgXCI5OCA4RlwiLCBcIjk4IEI2XCIsIFwiOTggOTBcIiwgXCI5OCA5MVwiLCBcIjk4IDkyXCIsIFwiOTkgODRcIiwgXCJBNCA5NFwiLCBcIjk4IEIzXCIsIFwiOTggOUVcIiwgXCI5OCA5RlwiLCBcIjk4IEEwXCIsIFwiOTggQTFcIiwgXCI5OCA5NFwiLCBcIjk4IDk1XCIsIFwiOTkgODFcIiwgXCJFMiA5OCBCOSBFRiBCOCA4RlwiLCBcIjk4IEEzXCIsIFwiOTggOTZcIiwgXCI5OCBBQlwiLCBcIjk4IEE5XCIsIFwiOTggQTRcIiwgXCI5OCBBRVwiLCBcIjk4IEIxXCIsIFwiOTggQThcIiwgXCI5OCBCMFwiLCBcIjk4IEFGXCIsIFwiOTggQTZcIiwgXCI5OCBBN1wiLCBcIjk4IEEyXCIsIFwiOTggQTVcIiwgXCI5OCBBQVwiLCBcIjk4IDkzXCIsIFwiOTggQURcIiwgXCI5OCBCNVwiLCBcIjk4IEIyXCIsIFwiQTQgOTBcIiwgXCI5OCBCN1wiLCBcIkE0IDkyXCIsIFwiQTQgOTVcIiwgXCI5OCBCNFwiLCBcIjkyIEE0XCIsIFwiOTIgQTlcIiwgXCI5OCA4OFwiLCBcIjkxIEJGXCIsIFwiOTEgQjlcIiwgXCI5MSBCQVwiLCBcIjkyIDgwXCIsIFwiOTEgQkJcIiwgXCI5MSBCRFwiLCBcIkE0IDk2XCIsIFwiOTggQkFcIiwgXCI5OCBCOFwiLCBcIjk4IEI5XCIsIFwiOTggQkJcIiwgXCI5OCBCQ1wiLCBcIjk4IEJEXCIsIFwiOTkgODBcIiwgXCI5OCBCRlwiLCBcIjk4IEJFXCIsIFwiOTkgOENcIiwgXCI5MSA4RlwiLCBcIjkxIDhCXCIsIFwiOTEgOERcIiwgXCI5MSA4RVwiLCBcIjkxIDhBXCIsIFwiRTIgOUMgOEFcIiwgXCJFMiA5QyA4QyBFRiBCOCA4RlwiLCBcIjkxIDhDXCIsIFwiRTIgOUMgOEJcIiwgXCI5MSA5MFwiLCBcIjkyIEFBXCIsIFwiOTkgOEZcIiwgXCJFMiA5OCA5RCBFRiBCOCA4RlwiLCBcIjkxIDg2XCIsIFwiOTEgODdcIiwgXCI5MSA4OFwiLCBcIjkxIDg5XCIsIFwiOTYgOTVcIiwgXCI5NiA5MFwiLCBcIkE0IDk4XCIsIFwiOTYgOTZcIiwgXCJFMiA5QyA4RCBFRiBCOCA4RlwiLCBcIjkyIDg1XCIsIFwiOTEgODRcIiwgXCI5MSA4NVwiLCBcIjkxIDgyXCIsIFwiOTEgODNcIiwgXCI5MSA4MVwiLCBcIjkxIDgwXCIsIFwiOTEgQTRcIiwgXCI5MSBBNVwiLCBcIjk3IEEzXCIsIFwiOTEgQjZcIiwgXCI5MSBBNlwiLCBcIjkxIEE3XCIsIFwiOTEgQThcIiwgXCI5MSBBOVwiLCBcIjkxIEIxXCIsIFwiOTEgQjRcIiwgXCI5MSBCNVwiLCBcIjkxIEIyXCIsIFwiOTEgQjNcIiwgXCI5MSBBRVwiLCBcIjkxIEI3XCIsIFwiOTIgODJcIiwgXCI5NSBCNVwiLCBcIjhFIDg1XCIsIFwiOTEgQkNcIiwgXCI5MSBCOFwiLCBcIjkxIEIwXCIsIFwiOUEgQjZcIiwgXCI4RiA4M1wiLCBcIjkyIDgzXCIsIFwiOTEgQUZcIiwgXCI5MSBBQlwiLCBcIjkxIEFDXCIsIFwiOTEgQURcIiwgXCI5OSA4N1wiLCBcIjkyIDgxXCIsIFwiOTkgODVcIiwgXCI5OSA4NlwiLCBcIjk5IDhCXCIsIFwiOTkgOEVcIiwgXCI5OSA4RFwiLCBcIjkyIDg3XCIsIFwiOTIgODZcIiwgXCI5MiA5MVwiLCBcIjkxIEE5IEUyIDgwIDhEIEUyIDlEIEE0IEVGIEI4IDhGIEUyIDgwIDhEIEYwIDlGIDkxIEE5XCIsIFwiOTEgQTggRTIgODAgOEQgRTIgOUQgQTQgRUYgQjggOEYgRTIgODAgOEQgRjAgOUYgOTEgQThcIiwgXCI5MiA4RlwiLCBcIjkxIEE5IEUyIDgwIDhEIEUyIDlEIEE0IEVGIEI4IDhGIEUyIDgwIDhEIEYwIDlGIDkyIDhCIEUyIDgwIDhEIEYwIDlGIDkxIEE5XCIsIFwiOTEgQTggRTIgODAgOEQgRTIgOUQgQTQgRUYgQjggOEYgRTIgODAgOEQgRjAgOUYgOTIgOEIgRTIgODAgOEQgRjAgOUYgOTEgQThcIiwgXCI5MSBBQVwiLCBcIjkxIEE4IEUyIDgwIDhEIEYwIDlGIDkxIEE5IEUyIDgwIDhEIEYwIDlGIDkxIEE3XCIsIFwiOTEgQTggRTIgODAgOEQgRjAgOUYgOTEgQTkgRTIgODAgOEQgRjAgOUYgOTEgQTcgRTIgODAgOEQgRjAgOUYgOTEgQTZcIiwgXCI5MSBBOCBFMiA4MCA4RCBGMCA5RiA5MSBBOSBFMiA4MCA4RCBGMCA5RiA5MSBBNiBFMiA4MCA4RCBGMCA5RiA5MSBBNlwiLCBcIjkxIEE4IEUyIDgwIDhEIEYwIDlGIDkxIEE5IEUyIDgwIDhEIEYwIDlGIDkxIEE3IEUyIDgwIDhEIEYwIDlGIDkxIEE3XCIsIFwiOTEgQTkgRTIgODAgOEQgRjAgOUYgOTEgQTkgRTIgODAgOEQgRjAgOUYgOTEgQTZcIiwgXCI5MSBBOSBFMiA4MCA4RCBGMCA5RiA5MSBBOSBFMiA4MCA4RCBGMCA5RiA5MSBBN1wiLCBcIjkxIEE5IEUyIDgwIDhEIEYwIDlGIDkxIEE5IEUyIDgwIDhEIEYwIDlGIDkxIEE3IEUyIDgwIDhEIEYwIDlGIDkxIEE2XCIsIFwiOTEgQTkgRTIgODAgOEQgRjAgOUYgOTEgQTkgRTIgODAgOEQgRjAgOUYgOTEgQTYgRTIgODAgOEQgRjAgOUYgOTEgQTZcIiwgXCI5MSBBOSBFMiA4MCA4RCBGMCA5RiA5MSBBOSBFMiA4MCA4RCBGMCA5RiA5MSBBNyBFMiA4MCA4RCBGMCA5RiA5MSBBN1wiLCBcIjkxIEE4IEUyIDgwIDhEIEYwIDlGIDkxIEE4IEUyIDgwIDhEIEYwIDlGIDkxIEE2XCIsIFwiOTEgQTggRTIgODAgOEQgRjAgOUYgOTEgQTggRTIgODAgOEQgRjAgOUYgOTEgQTdcIiwgXCI5MSBBOCBFMiA4MCA4RCBGMCA5RiA5MSBBOCBFMiA4MCA4RCBGMCA5RiA5MSBBNyBFMiA4MCA4RCBGMCA5RiA5MSBBNlwiLCBcIjkxIEE4IEUyIDgwIDhEIEYwIDlGIDkxIEE4IEUyIDgwIDhEIEYwIDlGIDkxIEE2IEUyIDgwIDhEIEYwIDlGIDkxIEE2XCIsIFwiOTEgQTggRTIgODAgOEQgRjAgOUYgOTEgQTggRTIgODAgOEQgRjAgOUYgOTEgQTcgRTIgODAgOEQgRjAgOUYgOTEgQTdcIiwgXCI5MSA5QVwiLCBcIjkxIDk1XCIsIFwiOTEgOTZcIiwgXCI5MSA5NFwiLCBcIjkxIDk3XCIsIFwiOTEgOTlcIiwgXCI5MSA5OFwiLCBcIjkyIDg0XCIsIFwiOTIgOEJcIiwgXCI5MSBBM1wiLCBcIjkxIEEwXCIsIFwiOTEgQTFcIiwgXCI5MSBBMlwiLCBcIjkxIDlFXCIsIFwiOTEgOUZcIiwgXCI5MSA5MlwiLCBcIjhFIEE5XCIsIFwiRTIgOUIgOTFcIiwgXCI4RSA5M1wiLCBcIjkxIDkxXCIsIFwiOEUgOTJcIiwgXCI5MSA5RFwiLCBcIjkxIDlCXCIsIFwiOTEgOUNcIiwgXCI5MiBCQ1wiLCBcIjkxIDkzXCIsIFwiOTUgQjZcIiwgXCI5MiA4RFwiLCBcIjhDIDgyXCIsIFwiOUIgOTFcIiwgXCI5MCBCNlwiLCBcIjkwIEIxXCIsIFwiOTAgQURcIiwgXCI5MCBCOVwiLCBcIjkwIEIwXCIsIFwiOTAgQkJcIiwgXCI5MCBCQ1wiLCBcIjkwIEE4XCIsIFwiOTAgQUZcIiwgXCJBNiA4MVwiLCBcIjkwIEFFXCIsIFwiOTAgQjdcIiwgXCI5MCBCRFwiLCBcIjkwIEI4XCIsIFwiOTAgOTlcIiwgXCI5MCBCNVwiLCBcIjk5IDg4XCIsIFwiOTkgODlcIiwgXCI5OSA4QVwiLCBcIjkwIDkyXCIsIFwiOTAgOTRcIiwgXCI5MCBBN1wiLCBcIjkwIEE2XCIsIFwiOTAgQTRcIiwgXCI5MCBBM1wiLCBcIjkwIEE1XCIsIFwiOTAgQkFcIiwgXCI5MCA5N1wiLCBcIjkwIEI0XCIsIFwiQTYgODRcIiwgXCI5MCA5RFwiLCBcIjkwIDlCXCIsIFwiOTAgOENcIiwgXCI5MCA5RVwiLCBcIjkwIDlDXCIsIFwiOTUgQjdcIiwgXCJBNiA4MlwiLCBcIkE2IDgwXCIsIFwiOTAgOERcIiwgXCI5MCBBMlwiLCBcIjkwIEEwXCIsIFwiOTAgOUZcIiwgXCI5MCBBMVwiLCBcIjkwIEFDXCIsIFwiOTAgQjNcIiwgXCI5MCA4QlwiLCBcIjkwIDhBXCIsIFwiOTAgODZcIiwgXCI5MCA4NVwiLCBcIjkwIDgzXCIsIFwiOTAgODJcIiwgXCI5MCA4NFwiLCBcIjkwIEFBXCIsIFwiOTAgQUJcIiwgXCI5MCA5OFwiLCBcIjkwIDkwXCIsIFwiOTAgOEZcIiwgXCI5MCA5MVwiLCBcIjkwIDhFXCIsIFwiOTAgOTZcIiwgXCI5MCA4MFwiLCBcIjkwIDgxXCIsIFwiOTAgOTNcIiwgXCJBNiA4M1wiLCBcIjk1IDhBXCIsIFwiOTAgOTVcIiwgXCI5MCBBOVwiLCBcIjkwIDg4XCIsIFwiOTAgODdcIiwgXCI5MCBCRlwiLCBcIjkwIEJFXCIsIFwiOTAgODlcIiwgXCI5MCBCMlwiLCBcIjhDIEI1XCIsIFwiOEUgODRcIiwgXCI4QyBCMlwiLCBcIjhDIEIzXCIsIFwiOEMgQjRcIiwgXCI4QyBCMVwiLCBcIjhDIEJGXCIsIFwiRTIgOTggOThcIiwgXCI4RCA4MFwiLCBcIjhFIDhEXCIsIFwiOEUgOEJcIiwgXCI4RCA4M1wiLCBcIjhEIDgyXCIsIFwiOEQgODFcIiwgXCI4QyBCRVwiLCBcIjhDIEJBXCIsIFwiOEMgQkFcIiwgXCI4QyBCQlwiLCBcIjhDIEI5XCIsIFwiOEMgQjdcIiwgXCI4QyBCQ1wiLCBcIjhDIEI4XCIsIFwiOTIgOTBcIiwgXCI4RCA4NFwiLCBcIjhDIEIwXCIsIFwiOEUgODNcIiwgXCI5MCA5QVwiLCBcIjk1IEI4XCIsIFwiOEMgOEVcIiwgXCI4QyA4RFwiLCBcIjhDIDhGXCIsIFwiOEMgOTVcIiwgXCI4QyA5NlwiLCBcIjhDIDk3XCIsIFwiOEMgOThcIiwgXCI4QyA5MVwiLCBcIjhDIDkyXCIsIFwiOEMgOTNcIiwgXCI4QyA5NFwiLCBcIjhDIDlBXCIsIFwiOEMgOURcIiwgXCI4QyA5QlwiLCBcIjhDIDlDXCIsIFwiOEMgOUVcIiwgXCI4QyA5OVwiLCBcIkUyIEFEIDkwIEVGIEI4IDhGXCIsIFwiOEMgOUZcIiwgXCI5MiBBQlwiLCBcIkUyIDlDIEE4XCIsIFwiRTIgOTggODQgRUYgQjggOEZcIiwgXCJFMiA5OCA4MCBFRiBCOCA4RlwiLCBcIjhDIEE0XCIsIFwiRTIgOUIgODUgRUYgQjggOEZcIiwgXCI4QyBBNVwiLCBcIjhDIEE2XCIsIFwiRTIgOTggODEgRUYgQjggOEZcIiwgXCI4QyBBN1wiLCBcIkUyIDlCIDg4XCIsIFwiOEMgQTlcIiwgXCJFMiA5QSBBMSBFRiBCOCA4RlwiLCBcIjk0IEE1XCIsIFwiOTIgQTVcIiwgXCJFMiA5RCA4NCBFRiBCOCA4RlwiLCBcIjhDIEE4XCIsIFwiRTIgOTggODMgRUYgQjggOEZcIiwgXCJFMiA5QiA4NCBFRiBCOCA4RlwiLCBcIjhDIEFDXCIsIFwiOTIgQThcIiwgXCI4QyBBQVwiLCBcIjhDIEFCXCIsIFwiRTIgOTggODIgRUYgQjggOEZcIiwgXCJFMiA5OCA5NCBFRiBCOCA4RlwiLCBcIjkyIEE3XCIsIFwiOTIgQTZcIiwgXCI4QyA4QVwiLCBcIjlCIDkxXCIsIFwiOUIgOTFcIiwgXCI4RCA4RlwiLCBcIjhEIDhFXCIsIFwiOEQgOTBcIiwgXCI4RCA4QVwiLCBcIjhEIDhCXCIsIFwiOEQgOENcIiwgXCI4RCA4OVwiLCBcIjhEIDg3XCIsIFwiOEQgOTNcIiwgXCI4RCA4OFwiLCBcIjhEIDkyXCIsIFwiOEQgOTFcIiwgXCI4RCA4RFwiLCBcIjhEIDg1XCIsIFwiOEQgODZcIiwgXCI4QyBCNlwiLCBcIjhDIEJEXCIsIFwiOEQgQTBcIiwgXCI4RCBBRlwiLCBcIjhEIDlFXCIsIFwiQTcgODBcIiwgXCI4RCA5N1wiLCBcIjhEIDk2XCIsIFwiOEQgQTRcIiwgXCI4RCBCM1wiLCBcIjhEIDk0XCIsIFwiOEQgOUZcIiwgXCI4QyBBRFwiLCBcIjhEIDk1XCIsIFwiOEQgOURcIiwgXCI4QyBBRVwiLCBcIjhDIEFGXCIsIFwiOEQgOUNcIiwgXCI4RCBCMlwiLCBcIjhEIEE1XCIsIFwiOEQgQTNcIiwgXCI4RCBCMVwiLCBcIjhEIDlCXCIsIFwiOEQgOTlcIiwgXCI4RCA5QVwiLCBcIjhEIDk4XCIsIFwiOEQgQTJcIiwgXCI4RCBBMVwiLCBcIjhEIEE3XCIsIFwiOEQgQThcIiwgXCI4RCBBNlwiLCBcIjhEIEIwXCIsIFwiOEUgODJcIiwgXCI4RCBBRVwiLCBcIjhEIEFDXCIsIFwiOEQgQURcIiwgXCI4RCBBQlwiLCBcIjhEIEJGXCIsIFwiOEQgQTlcIiwgXCI4RCBBQVwiLCBcIjhEIEJBXCIsIFwiOEQgQkJcIiwgXCI4RCBCN1wiLCBcIjhEIEI4XCIsIFwiOEQgQjlcIiwgXCI4RCBCRVwiLCBcIjhEIEI2XCIsIFwiOEQgQjVcIiwgXCJFMiA5OCA5NSBFRiBCOCA4RlwiLCBcIjhEIEJDXCIsIFwiOEQgQjRcIiwgXCI4RCBCRFwiLFwiOUIgOTFcIiwgXCI5QiA5MVwiLCBcIjlCIDkxXCIsIFwiRTIgOUEgQkQgRUYgQjggOEZcIiwgXCI4RiA4MFwiLCBcIjhGIDg4XCIsIFwiRTIgOUEgQkUgRUYgQjggOEZcIiwgXCI4RSBCRVwiLCBcIjhGIDkwXCIsIFwiOEYgODlcIiwgXCI4RSBCMVwiLCBcIkUyIDlCIEIzIEVGIEI4IDhGXCIsIFwiOEYgOENcIiwgXCI4RiA5M1wiLCBcIjhGIEI4XCIsIFwiOEYgOTJcIiwgXCI4RiA5MVwiLCBcIjhGIDhGXCIsIFwiOEUgQkZcIiwgXCJFMiA5QiBCN1wiLCBcIjhGIDgyXCIsIFwiRTIgOUIgQjhcIiwgXCI4RiBCOVwiLCBcIjhFIEEzXCIsIFwiOUEgQTNcIiwgXCI4RiA4QVwiLCBcIjhGIDg0XCIsIFwiOUIgODBcIiwgXCJFMiA5QiBCOVwiLCBcIjhGIDhCXCIsIFwiOUEgQjRcIiwgXCI5QSBCNVwiLCBcIjhGIDg3XCIsIFwiOTUgQjRcIiwgXCI4RiA4NlwiLCBcIjhFIEJEXCIsIFwiOEYgODVcIiwgXCI4RSA5NlwiLCBcIjhFIDk3XCIsIFwiOEYgQjVcIiwgXCI4RSBBQlwiLCBcIjhFIDlGXCIsIFwiOEUgQURcIiwgXCI4RSBBOFwiLCBcIjhFIEFBXCIsIFwiOEUgQTRcIiwgXCI4RSBBN1wiLCBcIjhFIEJDXCIsIFwiOEUgQjlcIiwgXCI4RSBCN1wiLCBcIjhFIEJBXCIsIFwiOEUgQjhcIiwgXCI4RSBCQlwiLCBcIjhFIEFDXCIsIFwiOEUgQUVcIiwgXCI5MSBCRVwiLCBcIjhFIEFGXCIsIFwiOEUgQjJcIiwgXCI4RSBCMFwiLCBcIjhFIEIzXCIsIFwiOUIgOTFcIiwgXCI5QiA5MVwiLCBcIjlCIDkxXCIsIFwiOUEgOTdcIiwgXCI5QSA5NVwiLCBcIjlBIDk5XCIsIFwiOUEgOENcIiwgXCI5QSA4RVwiLCBcIjhGIDhFXCIsIFwiOUEgOTNcIiwgXCI5QSA5MVwiLCBcIjlBIDkyXCIsIFwiOUEgOTBcIiwgXCI5QSA5QVwiLCBcIjlBIDlCXCIsIFwiOUEgOUNcIixcIjhGIDhEXCIsIFwiOUEgQjJcIiwgXCI5QSBBOFwiLCBcIjlBIDk0XCIsIFwiOUEgOERcIiwgXCI5QSA5OFwiLCBcIjlBIDk2XCIsIFwiOUEgQTFcIiwgXCI5QSBBMFwiLCBcIjlBIEFGXCIsIFwiOUEgODNcIiwgXCI5QSA4QlwiLCBcIjlBIDlEXCIsIFwiOUEgODRcIiwgXCI5QSA4NVwiLCBcIjlBIDg4XCIsIFwiOUEgOUVcIiwgXCI5QSA4MlwiLCBcIjlBIDg2XCIsIFwiOUEgODdcIiwgXCI5QSA4QVwiLCBcIjlBIDg5XCIsIFwiOUEgODFcIiwgXCI5QiBBOVwiLCBcIkUyIDlDIDg4IEVGIEI4IDhGXCIsIFwiOUIgQUJcIiwgXCI5QiBBQ1wiLCBcIkUyIDlCIEI1IEVGIEI4IDhGXCIsIFwiOUIgQTVcIiwgXCI5QSBBNFwiLCBcIkUyIDlCIEI0XCIsIFwiOUIgQjNcIiwgXCI5QSA4MFwiLCBcIjlCIEIwXCIsIFwiOTIgQkFcIiwgXCJFMiA5QSA5MyBFRiBCOCA4RlwiLCBcIjlBIEE3XCIsIFwiRTIgOUIgQkQgRUYgQjggOEZcIiwgXCI5QSA4RlwiLCBcIjlBIEE2XCIsIFwiOUEgQTVcIiwgXCI4RiA4MVwiLCBcIjlBIEEyXCIsIFwiOEUgQTFcIiwgXCI4RSBBMlwiLCBcIjhFIEEwXCIsIFwiOEYgOTdcIiwgXCI4QyA4MVwiLCBcIjk3IEJDXCIsIFwiOEYgQURcIiwgXCJFMiA5QiBCMiBFRiBCOCA4RlwiLCBcIjhFIDkxXCIsIFwiRTIgOUIgQjBcIiwgXCI4RiA5NFwiLCBcIjk3IEJCXCIsIFwiOEMgOEJcIiwgXCI5NyBCRVwiLCBcIjhGIDk1XCIsIFwiRTIgOUIgQkEgRUYgQjggOEZcIiwgXCI4RiA5RVwiLCBcIjlCIEEzXCIsIFwiOUIgQTRcIiwgXCI4QyA4NVwiLCBcIjhDIDg0XCIsIFwiOEYgOUNcIiwgXCI4RiA5NlwiLCBcIjhGIDlEXCIsIFwiOEMgODdcIiwgXCI4QyA4NlwiLCBcIjhGIDk5XCIsIFwiOEMgODNcIiwgXCI4QyA4OVwiLCBcIjhDIDhDXCIsIFwiOEMgQTBcIiwgXCI4RSA4N1wiLCBcIjhFIDg2XCIsIFwiOEMgODhcIiwgXCI4RiA5OFwiLCBcIjhGIEIwXCIsIFwiOEYgQUZcIiwgXCI4RiA5RlwiLCBcIjk3IEJEXCIsIFwiOEYgQTBcIiwgXCI4RiBBMVwiLCBcIjhGIDlBXCIsIFwiOEYgQTJcIiwgXCI4RiBBQ1wiLCBcIjhGIEEzXCIsIFwiOEYgQTRcIiwgXCI4RiBBNVwiLCBcIjhGIEE2XCIsIFwiOEYgQThcIiwgXCI4RiBBQVwiLCBcIjhGIEFCXCIsIFwiOEYgQTlcIiwgXCI5MiA5MlwiLCBcIjhGIDlCXCIsIFwiRTIgOUIgQUEgRUYgQjggOEZcIiwgXCI5NSA4Q1wiLCBcIjk1IDhEXCIsIFwiOTUgOEJcIiwgXCJFMiA5QiBBOVwiLCBcIkUyIDhDIDlBIEVGIEI4IDhGXCIsIFwiOTMgQjFcIiwgXCI5MyBCMlwiLCBcIjkyIEJCXCIsIFwiRTIgOEMgQTggRUYgQjggOEZcIiwgXCI5NiBBNVwiLCBcIjk2IEE4XCIsIFwiOTYgQjFcIiwgXCI5NiBCMlwiLCBcIjk1IEI5XCIsIFwiOTcgOUNcIiwgXCI5MiBCRFwiLCBcIjkyIEJFXCIsIFwiOTIgQkZcIiwgXCI5MyA4MFwiLCBcIjkzIEJDXCIsIFwiOTMgQjdcIiwgXCI5MyBCOFwiLCBcIjkzIEI5XCIsIFwiOEUgQTVcIiwgXCI5MyBCRFwiLCBcIjhFIDlFXCIsIFwiOTMgOUVcIiwgXCJFMiA5OCA4RSBFRiBCOCA4RlwiLCBcIjkzIDlGXCIsIFwiOTMgQTBcIiwgXCI5MyBCQVwiLCBcIjkzIEJCXCIsIFwiOEUgOTlcIiwgXCI4RSA5QVwiLCBcIjhFIDlCXCIsIFwiRTIgOEYgQjFcIiwgXCJFMiA4RiBCMlwiLCBcIkUyIDhGIEIwXCIsIFwiOTUgQjBcIiwgXCJFMiA4RiBCM1wiLCBcIkUyIDhDIDlCIEVGIEI4IDhGXCIsIFwiOTMgQTFcIiwgXCI5NCA4QlwiLCBcIjk0IDhDXCIsIFwiOTIgQTFcIiwgXCI5NCBBNlwiLCBcIjk1IEFGXCIsIFwiOTcgOTFcIiwgXCI5QiBBMlwiLCBcIjkyIEI4XCIsIFwiOTIgQjVcIiwgXCI5MiBCNFwiLCBcIjkyIEI2XCIsIFwiOTIgQjdcIiwgXCI5MiBCMFwiLCBcIjkyIEIzXCIsIFwiOTIgOEVcIiwgXCJFMiA5QSA5NlwiLCBcIjk0IEE3XCIsIFwiOTQgQThcIiwgXCJFMiA5QSA5MlwiLCBcIjlCIEEwXCIsIFwiRTIgOUIgOEZcIiwgXCI5NCBBOVwiLCBcIkUyIDlBIDk5XCIsIFwiRTIgOUIgOTNcIiwgXCI5NCBBQlwiLCBcIjkyIEEzXCIsIFwiOTQgQUFcIiwgXCI5NyBBMVwiLCBcIkUyIDlBIDk0XCIsIFwiOUIgQTFcIiwgXCI5QSBBQ1wiLCBcIkUyIDk4IEEwIEVGIEI4IDhGXCIsIFwiRTIgOUEgQjBcIiwgXCJFMiA5QSBCMVwiLCBcIjhGIEJBXCIsIFwiOTQgQUVcIiwgXCI5MyBCRlwiLCBcIjkyIDg4XCIsIFwiRTIgOUEgOTdcIiwgXCI5NCBBRFwiLCBcIjk0IEFDXCIsIFwiOTUgQjNcIiwgXCI5MiA4QVwiLCBcIjkyIDg5XCIsIFwiOEMgQTFcIiwgXCI4RiBCN1wiLCBcIjk0IDk2XCIsIFwiOUEgQkRcIiwgXCI5QSBCRlwiLCBcIjlCIDgxXCIsIFwiOTQgOTFcIiwgXCI5NyA5RFwiLCBcIjlCIDhCXCIsIFwiOUIgOENcIiwgXCI5QiA4RlwiLCBcIjlBIEFBXCIsIFwiOUIgOEVcIiwgXCI5NiBCQ1wiLCBcIjk3IEJBXCIsIFwiRTIgOUIgQjFcIiwgXCI5NyBCRlwiLCBcIjlCIDhEXCIsIFwiOEUgODhcIiwgXCI4RSA4RlwiLCBcIjhFIDgwXCIsIFwiOEUgODFcIiwgXCI4RSA4QVwiLCBcIjhFIDg5XCIsIFwiOEUgOEVcIiwgXCI4RSA5MFwiLCBcIjhFIDhDXCIsIFwiOEYgQUVcIiwgXCJFMiA5QyA4OSBFRiBCOCA4RlwiLCBcIjkzIEE5XCIsIFwiOTMgQThcIiwgXCI5MyBBN1wiLCBcIjkyIDhDXCIsIFwiOTMgQUVcIiwgXCI5MyBBQVwiLCBcIjkzIEFCXCIsIFwiOTMgQUNcIiwgXCI5MyBBRFwiLCBcIjkzIEE2XCIsIFwiOTMgQUZcIiwgXCI5MyBBNVwiLCBcIjkzIEE0XCIsIFwiOTMgOUNcIiwgXCI5MyA4M1wiLCBcIjkzIDkxXCIsIFwiOTMgOEFcIiwgXCI5MyA4OFwiLCBcIjkzIDg5XCIsIFwiOTMgODRcIiwgXCI5MyA4NVwiLCBcIjkzIDg2XCIsIFwiOTcgOTNcIiwgXCI5MyA4N1wiLCBcIjk3IDgzXCIsIFwiOTcgQjNcIiwgXCI5NyA4NFwiLCBcIjkzIDhCXCIsIFwiOTcgOTJcIiwgXCI5MyA4MVwiLCBcIjkzIDgyXCIsIFwiOTcgODJcIiwgXCI5NyA5RVwiLCBcIjkzIEIwXCIsIFwiOTMgOTNcIiwgXCI5MyA5NVwiLCBcIjkzIDk3XCIsIFwiOTMgOThcIiwgXCI5MyA5OVwiLCBcIjkzIDk0XCIsIFwiOTMgOTJcIiwgXCI5MyA5QVwiLCBcIjkzIDk2XCIsIFwiOTQgOTdcIiwgXCI5MyA4RVwiLCBcIjk2IDg3XCIsIFwiRTIgOUMgODIgRUYgQjggOEZcIiwgXCI5MyA5MFwiLCBcIjkzIDhGXCIsIFwiOTMgOENcIiwgXCI5MyA4RFwiLCBcIjlBIEE5XCIsIFwiOEYgQjNcIiwgXCI4RiBCNFwiLCBcIjk0IDkwXCIsIFwiOTQgOTJcIiwgXCI5NCA5M1wiLCBcIjk0IDhGXCIsIFwiOTYgOEFcIiwgXCI5NiA4QlwiLCBcIkUyIDlDIDkyIEVGIEI4IDhGXCIsIFwiOTMgOURcIiwgXCJFMiA5QyA4RiBFRiBCOCA4RlwiLCBcIjk2IDhEXCIsIFwiOTYgOENcIiwgXCI5NCA4RFwiLCBcIjk0IDhFXCIsIFwiOUIgOTFcIiwgXCI5QiA5MVwiLCBcIkUyIDlEIEE0IEVGIEI4IDhGXCIsIFwiOTIgOUJcIiwgXCI5MiA5QVwiLCBcIjkyIDk5XCIsIFwiOTIgOUNcIiwgXCI5MiA5NFwiLCBcIkUyIDlEIEEzIEVGIEI4IDhGXCIsIFwiOTIgOTVcIiwgXCI5MiA5RVwiLCBcIjkyIDkzXCIsIFwiOTIgOTdcIiwgXCI5MiA5NlwiLCBcIjkyIDk4XCIsIFwiOTIgOURcIiwgXCI5MiA5RlwiLCBcIkUyIDk4IEFFIEVGIEI4IDhGXCIsIFwiRTIgOUMgOUQgRUYgQjggOEZcIiwgXCJFMiA5OCBBQSBFRiBCOCA4RlwiLCBcIjk1IDg5XCIsIFwiRTIgOTggQjggRUYgQjggOEZcIiwgXCJFMiA5QyBBMSBFRiBCOCA4RlwiLCBcIjk0IEFGXCIsIFwiOTUgOEVcIiwgXCJFMiA5OCBBRiBFRiBCOCA4RlwiLCBcIkUyIDk4IEE2IEVGIEI4IDhGXCIsIFwiOUIgOTBcIiwgXCJFMiA5QiA4RVwiLCBcIkUyIDk5IDg4IEVGIEI4IDhGXCIsIFwiRTIgOTkgODkgRUYgQjggOEZcIiwgXCJFMiA5OSA4QSBFRiBCOCA4RlwiLCBcIkUyIDk5IDhCIEVGIEI4IDhGXCIsIFwiRTIgOTkgOEMgRUYgQjggOEZcIiwgXCJFMiA5OSA4RCBFRiBCOCA4RlwiLCBcIkUyIDk5IDhFIEVGIEI4IDhGXCIsIFwiRTIgOTkgOEYgRUYgQjggOEZcIiwgXCJFMiA5OSA5MCBFRiBCOCA4RlwiLCBcIkUyIDk5IDkxIEVGIEI4IDhGXCIsIFwiRTIgOTkgOTIgRUYgQjggOEZcIiwgXCJFMiA5OSA5MyBFRiBCOCA4RlwiLCBcIjg2IDk0XCIsIFwiRTIgOUEgOUJcIiwgXCI4OCBCM1wiLCBcIjg4IEI5XCIsIFwiRTIgOTggQTIgRUYgQjggOEZcIiwgXCJFMiA5OCBBMyBFRiBCOCA4RlwiLCBcIjkzIEI0XCIsIFwiOTMgQjNcIiwgXCI4OCBCNlwiLCBcIjg4IDlBIEVGIEI4IDhGXCIsIFwiODggQjhcIiwgXCI4OCBCQVwiLCBcIjg4IEI3IEVGIEI4IDhGXCIsIFwiRTIgOUMgQjQgRUYgQjggOEZcIiwgXCI4NiA5QVwiLCBcIjg5IDkxXCIsIFwiOTIgQUVcIiwgXCI4OSA5MFwiLCBcIkUzIDhBIDk5IEVGIEI4IDhGXCIsIFwiRTMgOEEgOTcgRUYgQjggOEZcIiwgXCI4OCBCNFwiLCBcIjg4IEI1XCIsIFwiODggQjJcIiwgXCI4NSBCMCBFRiBCOCA4RlwiLCBcIjg1IEIxIEVGIEI4IDhGXCIsIFwiODYgOEVcIiwgXCI4NiA5MVwiLCBcIjg1IEJFIEVGIEI4IDhGXCIsIFwiODYgOThcIiwgXCJFMiA5QiA5NCBFRiBCOCA4RlwiLCBcIjkzIDlCXCIsIFwiOUEgQUJcIiwgXCJFMiA5RCA4Q1wiLCBcIkUyIEFEIDk1IEVGIEI4IDhGXCIsIFwiOTIgQTJcIiwgXCJFMiA5OSBBOCBFRiBCOCA4RlwiLCBcIjlBIEI3XCIsIFwiOUEgQUZcIiwgXCI5QSBCM1wiLCBcIjlBIEIxXCIsIFwiOTQgOUVcIiwgXCI5MyBCNVwiLCBcIkUyIDlEIDk3IEVGIEI4IDhGXCIsIFwiRTIgOUQgOTVcIiwgXCJFMiA5RCA5M1wiLCBcIkUyIDlEIDk0XCIsIFwiRTIgODAgQkMgRUYgQjggOEZcIiwgXCJFMiA4MSA4OSBFRiBCOCA4RlwiLCBcIjkyIEFGXCIsIFwiOTQgODVcIiwgXCI5NCA4NlwiLCBcIjk0IEIxXCIsIFwiRTIgOUEgOUNcIiwgXCJFMyA4MCBCRCBFRiBCOCA4RlwiLCBcIkUyIDlBIEEwIEVGIEI4IDhGXCIsIFwiOUEgQjhcIiwgXCI5NCBCMFwiLCBcIkUyIDk5IEJCIEVGIEI4IDhGXCIsIFwiODggQUYgRUYgQjggOEZcIiwgXCI5MiBCOVwiLCBcIkUyIDlEIDg3IEVGIEI4IDhGXCIsIFwiRTIgOUMgQjMgRUYgQjggOEZcIiwgXCJFMiA5RCA4RVwiLCBcIkUyIDlDIDg1XCIsIFwiOTIgQTBcIiwgXCI4QyA4MFwiLCBcIkUyIDlFIEJGXCIsIFwiOEMgOTBcIiwgXCJFMiA5MyA4MiBFRiBCOCA4RlwiLCBcIjhGIEE3XCIsIFwiODggODIgRUYgQjggOEZcIiwgXCI5QiA4MlwiLCBcIjlCIDgzXCIsIFwiOUIgODRcIiwgXCI5QiA4NVwiLCBcIkUyIDk5IEJGIEVGIEI4IDhGXCIsIFwiOUEgQURcIiwgXCI5QSBCRVwiLCBcIjg1IEJGIEVGIEI4IDhGXCIsIFwiOUEgQjBcIiwgXCI5QSBCOVwiLCBcIjlBIEJBXCIsIFwiOUEgQkNcIiwgXCI5QSBCQlwiLCBcIjlBIEFFXCIsIFwiOEUgQTZcIiwgXCI5MyBCNlwiLCBcIjg4IDgxXCIsIFwiODYgOTZcIiwgXCI4NiA5N1wiLCBcIjg2IDk5XCIsIFwiODYgOTJcIiwgXCI4NiA5NVwiLCBcIjg2IDkzXCIsIFwiMzAgRUYgQjggOEYgRTIgODMgQTNcIiwgXCIzMSBFRiBCOCA4RiBFMiA4MyBBM1wiLCBcIjMyIEVGIEI4IDhGIEUyIDgzIEEzXCIsIFwiMzMgRUYgQjggOEYgRTIgODMgQTNcIiwgXCIzNCBFRiBCOCA4RiBFMiA4MyBBM1wiLCBcIjM1IEVGIEI4IDhGIEUyIDgzIEEzXCIsIFwiMzYgRUYgQjggOEYgRTIgODMgQTNcIiwgXCIzNyBFRiBCOCA4RiBFMiA4MyBBM1wiLCBcIjM4IEVGIEI4IDhGIEUyIDgzIEEzXCIsIFwiMzkgRUYgQjggOEYgRTIgODMgQTNcIiwgXCI5NCA5RlwiLCBcIjk0IEEyXCIsIFwiRTIgOTYgQjYgRUYgQjggOEZcIiwgXCJFMiA4RiBCOFwiLCBcIkUyIDhGIEFGXCIsIFwiRTIgOEYgQjlcIiwgXCJFMiA4RiBCQVwiLCBcIkUyIDhGIEFEXCIsIFwiRTIgOEYgQUVcIiwgXCJFMiA4RiBBOVwiLCBcIkUyIDhGIEFBXCIsIFwiOTQgODBcIiwgXCI5NCA4MVwiLCBcIjk0IDgyXCIsIFwiRTIgOTcgODAgRUYgQjggOEZcIiwgXCI5NCBCQ1wiLCBcIjk0IEJEXCIsIFwiRTIgOEYgQUJcIiwgXCJFMiA4RiBBQ1wiLCBcIkUyIDlFIEExIEVGIEI4IDhGXCIsIFwiRTIgQUMgODUgRUYgQjggOEZcIiwgXCJFMiBBQyA4NiBFRiBCOCA4RlwiLCBcIkUyIEFDIDg3IEVGIEI4IDhGXCIsIFwiRTIgODYgOTcgRUYgQjggOEZcIiwgXCJFMiA4NiA5OCBFRiBCOCA4RlwiLCBcIkUyIDg2IDk5IEVGIEI4IDhGXCIsIFwiRTIgODYgOTYgRUYgQjggOEZcIiwgXCJFMiA4NiA5NSBFRiBCOCA4RlwiLCBcIkUyIDg2IDk0IEVGIEI4IDhGXCIsIFwiOTQgODRcIiwgXCJFMiA4NiBBQSBFRiBCOCA4RlwiLCBcIkUyIDg2IEE5IEVGIEI4IDhGXCIsIFwiRTIgQTQgQjQgRUYgQjggOEZcIiwgXCJFMiBBNCBCNSBFRiBCOCA4RlwiLCBcIjIzIEVGIEI4IDhGIEUyIDgzIEEzXCIsIFwiMkEgRUYgQjggOEYgRTIgODMgQTNcIiwgXCJFMiA4NCBCOSBFRiBCOCA4RlwiLCBcIjk0IEE0XCIsIFwiOTQgQTFcIiwgXCI5NCBBMFwiLCBcIjk0IEEzXCIsIFwiOEUgQjVcIiwgXCI4RSBCNlwiLCBcIkUzIDgwIEIwIEVGIEI4IDhGXCIsIFwiRTIgOUUgQjBcIiwgXCJFMiA5QyA5NCBFRiBCOCA4RlwiLCBcIjk0IDgzXCIsIFwiRTIgOUUgOTVcIiwgXCJFMiA5RSA5NlwiLCBcIkUyIDlFIDk3XCIsIFwiRTIgOUMgOTYgRUYgQjggOEZcIiwgXCI5MiBCMlwiLCBcIjkyIEIxXCIsIFwiQzIgQTkgRUYgQjggOEZcIiwgXCJDMiBBRSBFRiBCOCA4RlwiLCBcIkUyIDg0IEEyIEVGIEI4IDhGXCIsIFwiOTQgOUFcIiwgXCI5NCA5OVwiLCBcIjk0IDlCXCIsIFwiOTQgOURcIiwgXCI5NCA5Q1wiLCBcIkUyIDk4IDkxIEVGIEI4IDhGXCIsIFwiOTQgOThcIiwgXCJFMiA5QSBBQSBFRiBCOCA4RlwiLCBcIkUyIDlBIEFCIEVGIEI4IDhGXCIsIFwiOTQgQjRcIiwgXCI5NCBCNVwiLCBcIjk0IEI4XCIsIFwiOTQgQjlcIiwgXCI5NCBCNlwiLCBcIjk0IEI3XCIsIFwiOTQgQkFcIiwgXCJFMiA5NiBBQSBFRiBCOCA4RlwiLCBcIkUyIDk2IEFCIEVGIEI4IDhGXCIsIFwiRTIgQUMgOUIgRUYgQjggOEZcIiwgXCJFMiBBQyA5QyBFRiBCOCA4RlwiLCBcIjk0IEJCXCIsIFwiRTIgOTcgQkMgRUYgQjggOEZcIiwgXCJFMiA5NyBCQiBFRiBCOCA4RlwiLCBcIkUyIDk3IEJFIEVGIEI4IDhGXCIsIFwiRTIgOTcgQkQgRUYgQjggOEZcIiwgXCI5NCBCMlwiLCBcIjk0IEIzXCIsIFwiOTQgODhcIiwgXCI5NCA4OVwiLCBcIjk0IDhBXCIsIFwiOTQgODdcIiwgXCI5MyBBM1wiLCBcIjkzIEEyXCIsIFwiOTQgOTRcIiwgXCI5NCA5NVwiLCBcIjgzIDhGXCIsIFwiODAgODQgRUYgQjggOEZcIiwgXCJFMiA5OSBBMCBFRiBCOCA4RlwiLCBcIkUyIDk5IEEzIEVGIEI4IDhGXCIsIFwiRTIgOTkgQTUgRUYgQjggOEZcIiwgXCJFMiA5OSBBNiBFRiBCOCA4RlwiLCBcIjhFIEI0XCIsIFwiOTEgODEgRTIgODAgOEQgRjAgOUYgOTcgQThcIiwgXCI5MiBBRFwiLCBcIjk3IEFGXCIsIFwiOTIgQUNcIiwgXCI5NSA5MFwiLCBcIjk1IDkxXCIsIFwiOTUgOTJcIiwgXCI5NSA5M1wiLCBcIjk1IDk0XCIsIFwiOTUgOTVcIiwgXCI5NSA5NlwiLCBcIjk1IDk3XCIsIFwiOTUgOThcIiwgXCI5NSA5OVwiLCBcIjk1IDlBXCIsIFwiOTUgOUJcIiwgXCI5NSA5Q1wiLCBcIjk1IDlEXCIsIFwiOTUgOUVcIiwgXCI5NSA5RlwiLCBcIjk1IEEwXCIsIFwiOTUgQTFcIiwgXCI5NSBBMlwiLCBcIjk1IEEzXCIsIFwiOTUgQTRcIiwgXCI5NSBBNVwiLCBcIjk1IEE2XCIsIFwiOTUgQTdcIiwgXCI5QiA5MVwiLCBcIjg3IEE2IEYwIDlGIDg3IEFCXCIsIFwiODcgQTYgRjAgOUYgODcgQkRcIiwgXCI4NyBBNiBGMCA5RiA4NyBCMVwiLCBcIjg3IEE5IEYwIDlGIDg3IEJGXCIsIFwiODcgQTYgRjAgOUYgODcgQjhcIiwgXCI4NyBBNiBGMCA5RiA4NyBBOVwiLCBcIjg3IEE2IEYwIDlGIDg3IEI0XCIsIFwiODcgQTYgRjAgOUYgODcgQUVcIiwgXCI4NyBBNiBGMCA5RiA4NyBCNlwiLCBcIjg3IEE2IEYwIDlGIDg3IEFDXCIsIFwiODcgQTYgRjAgOUYgODcgQjdcIiwgXCI4NyBBNiBGMCA5RiA4NyBCMlwiLCBcIjg3IEE2IEYwIDlGIDg3IEJDXCIsIFwiODcgQTYgRjAgOUYgODcgQkFcIiwgXCI4NyBBNiBGMCA5RiA4NyBCOVwiLCBcIjg3IEE2IEYwIDlGIDg3IEJGXCIsIFwiODcgQTcgRjAgOUYgODcgQjhcIiwgXCI4NyBBNyBGMCA5RiA4NyBBRFwiLCBcIjg3IEE3IEYwIDlGIDg3IEE5XCIsIFwiODcgQTcgRjAgOUYgODcgQTdcIiwgXCI4NyBBNyBGMCA5RiA4NyBCRVwiLCBcIjg3IEE3IEYwIDlGIDg3IEFBXCIsIFwiODcgQTcgRjAgOUYgODcgQkZcIiwgXCI4NyBBNyBGMCA5RiA4NyBBRlwiLCBcIjg3IEE3IEYwIDlGIDg3IEIyXCIsIFwiODcgQTcgRjAgOUYgODcgQjlcIiwgXCI4NyBBNyBGMCA5RiA4NyBCNFwiLCBcIjg3IEE3IEYwIDlGIDg3IEI2XCIsIFwiODcgQTcgRjAgOUYgODcgQTZcIiwgXCI4NyBBNyBGMCA5RiA4NyBCQ1wiLCBcIjg3IEE3IEYwIDlGIDg3IEI3XCIsIFwiODcgQUUgRjAgOUYgODcgQjRcIiwgXCI4NyBCQiBGMCA5RiA4NyBBQ1wiLCBcIjg3IEE3IEYwIDlGIDg3IEIzXCIsIFwiODcgQTcgRjAgOUYgODcgQUNcIiwgXCI4NyBBNyBGMCA5RiA4NyBBQlwiLCBcIjg3IEE3IEYwIDlGIDg3IEFFXCIsIFwiODcgQTggRjAgOUYgODcgQkJcIiwgXCI4NyBCMCBGMCA5RiA4NyBBRFwiLCBcIjg3IEE4IEYwIDlGIDg3IEIyXCIsIFwiODcgQTggRjAgOUYgODcgQTZcIiwgXCI4NyBBRSBGMCA5RiA4NyBBOFwiLCBcIjg3IEIwIEYwIDlGIDg3IEJFXCIsIFwiODcgQTggRjAgOUYgODcgQUJcIiwgXCI4NyBCOSBGMCA5RiA4NyBBOVwiLCBcIjg3IEE4IEYwIDlGIDg3IEIxXCIsIFwiODcgQTggRjAgOUYgODcgQjNcIiwgXCI4NyBBOCBGMCA5RiA4NyBCRFwiLCBcIjg3IEE4IEYwIDlGIDg3IEE4XCIsIFwiODcgQTggRjAgOUYgODcgQjRcIiwgXCI4NyBCMCBGMCA5RiA4NyBCMlwiLCBcIjg3IEE4IEYwIDlGIDg3IEFDXCIsIFwiODcgQTggRjAgOUYgODcgQTlcIiwgXCI4NyBBOCBGMCA5RiA4NyBCMFwiLCBcIjg3IEE4IEYwIDlGIDg3IEI3XCIsIFwiODcgQUQgRjAgOUYgODcgQjdcIiwgXCI4NyBBOCBGMCA5RiA4NyBCQVwiLCBcIjg3IEE4IEYwIDlGIDg3IEJDXCIsIFwiODcgQTggRjAgOUYgODcgQkVcIiwgXCI4NyBBOCBGMCA5RiA4NyBCRlwiLCBcIjg3IEE5IEYwIDlGIDg3IEIwXCIsIFwiODcgQTkgRjAgOUYgODcgQUZcIiwgXCI4NyBBOSBGMCA5RiA4NyBCMlwiLCBcIjg3IEE5IEYwIDlGIDg3IEI0XCIsIFwiODcgQUEgRjAgOUYgODcgQThcIiwgXCI4NyBBQSBGMCA5RiA4NyBBQ1wiLCBcIjg3IEI4IEYwIDlGIDg3IEJCXCIsIFwiODcgQUMgRjAgOUYgODcgQjZcIiwgXCI4NyBBQSBGMCA5RiA4NyBCN1wiLCBcIjg3IEFBIEYwIDlGIDg3IEFBXCIsIFwiODcgQUEgRjAgOUYgODcgQjlcIiwgXCI4NyBBQSBGMCA5RiA4NyBCQVwiLCBcIjg3IEFCIEYwIDlGIDg3IEIwXCIsIFwiODcgQUIgRjAgOUYgODcgQjRcIiwgXCI4NyBBQiBGMCA5RiA4NyBBRlwiLCBcIjg3IEFCIEYwIDlGIDg3IEFFXCIsIFwiODcgQUIgRjAgOUYgODcgQjdcIiwgXCI4NyBBQyBGMCA5RiA4NyBBQlwiLCBcIjg3IEI1IEYwIDlGIDg3IEFCXCIsIFwiODcgQjkgRjAgOUYgODcgQUJcIiwgXCI4NyBBQyBGMCA5RiA4NyBBNlwiLCBcIjg3IEFDIEYwIDlGIDg3IEIyXCIsIFwiODcgQUMgRjAgOUYgODcgQUFcIiwgXCI4NyBBOSBGMCA5RiA4NyBBQVwiLCBcIjg3IEFDIEYwIDlGIDg3IEFEXCIsIFwiODcgQUMgRjAgOUYgODcgQUVcIiwgXCI4NyBBQyBGMCA5RiA4NyBCN1wiLCBcIjg3IEFDIEYwIDlGIDg3IEIxXCIsIFwiODcgQUMgRjAgOUYgODcgQTlcIiwgXCI4NyBBQyBGMCA5RiA4NyBCNVwiLCBcIjg3IEFDIEYwIDlGIDg3IEJBXCIsIFwiODcgQUMgRjAgOUYgODcgQjlcIiwgXCI4NyBBQyBGMCA5RiA4NyBBQ1wiLCBcIjg3IEFDIEYwIDlGIDg3IEIzXCIsIFwiODcgQUMgRjAgOUYgODcgQkNcIiwgXCI4NyBBQyBGMCA5RiA4NyBCRVwiLCBcIjg3IEFEIEYwIDlGIDg3IEI5XCIsIFwiODcgQUQgRjAgOUYgODcgQjNcIiwgXCI4NyBBRCBGMCA5RiA4NyBCMFwiLCBcIjg3IEFEIEYwIDlGIDg3IEJBXCIsIFwiODcgQUUgRjAgOUYgODcgQjhcIiwgXCI4NyBBRSBGMCA5RiA4NyBCM1wiLCBcIjg3IEFFIEYwIDlGIDg3IEE5XCIsIFwiODcgQUUgRjAgOUYgODcgQjdcIiwgXCI4NyBBRSBGMCA5RiA4NyBCNlwiLCBcIjg3IEFFIEYwIDlGIDg3IEFBXCIsIFwiODcgQUUgRjAgOUYgODcgQjJcIiwgXCI4NyBBRSBGMCA5RiA4NyBCMVwiLCBcIjg3IEFFIEYwIDlGIDg3IEI5XCIsIFwiODcgQTggRjAgOUYgODcgQUVcIiwgXCI4NyBBRiBGMCA5RiA4NyBCMlwiLCBcIjg3IEFGIEYwIDlGIDg3IEI1XCIsIFwiODcgQUYgRjAgOUYgODcgQUFcIiwgXCI4NyBBRiBGMCA5RiA4NyBCNFwiLCBcIjg3IEIwIEYwIDlGIDg3IEJGXCIsIFwiODcgQjAgRjAgOUYgODcgQUFcIiwgXCI4NyBCMCBGMCA5RiA4NyBBRVwiLCBcIjg3IEJEIEYwIDlGIDg3IEIwXCIsIFwiODcgQjAgRjAgOUYgODcgQkNcIiwgXCI4NyBCMCBGMCA5RiA4NyBBQ1wiLCBcIjg3IEIxIEYwIDlGIDg3IEE2XCIsIFwiODcgQjEgRjAgOUYgODcgQkJcIiwgXCI4NyBCMSBGMCA5RiA4NyBBN1wiLCBcIjg3IEIxIEYwIDlGIDg3IEI4XCIsIFwiODcgQjEgRjAgOUYgODcgQjdcIiwgXCI4NyBCMSBGMCA5RiA4NyBCRVwiLCBcIjg3IEIxIEYwIDlGIDg3IEFFXCIsIFwiODcgQjEgRjAgOUYgODcgQjlcIiwgXCI4NyBCMSBGMCA5RiA4NyBCQVwiLCBcIjg3IEIyIEYwIDlGIDg3IEI0XCIsIFwiODcgQjIgRjAgOUYgODcgQjBcIiwgXCI4NyBCMiBGMCA5RiA4NyBBQ1wiLCBcIjg3IEIyIEYwIDlGIDg3IEJDXCIsIFwiODcgQjIgRjAgOUYgODcgQkVcIiwgXCI4NyBCMiBGMCA5RiA4NyBCQlwiLCBcIjg3IEIyIEYwIDlGIDg3IEIxXCIsIFwiODcgQjIgRjAgOUYgODcgQjlcIiwgXCI4NyBCMiBGMCA5RiA4NyBBRFwiLCBcIjg3IEIyIEYwIDlGIDg3IEI2XCIsIFwiODcgQjIgRjAgOUYgODcgQjdcIiwgXCI4NyBCMiBGMCA5RiA4NyBCQVwiLCBcIjg3IEJFIEYwIDlGIDg3IEI5XCIsIFwiODcgQjIgRjAgOUYgODcgQkRcIiwgXCI4NyBBQiBGMCA5RiA4NyBCMlwiLCBcIjg3IEIyIEYwIDlGIDg3IEE5XCIsIFwiODcgQjIgRjAgOUYgODcgQThcIiwgXCI4NyBCMiBGMCA5RiA4NyBCM1wiLCBcIjg3IEIyIEYwIDlGIDg3IEFBXCIsIFwiODcgQjIgRjAgOUYgODcgQjhcIiwgXCI4NyBCMiBGMCA5RiA4NyBBNlwiLCBcIjg3IEIyIEYwIDlGIDg3IEJGXCIsIFwiODcgQjIgRjAgOUYgODcgQjJcIiwgXCI4NyBCMyBGMCA5RiA4NyBBNlwiLCBcIjg3IEIzIEYwIDlGIDg3IEI3XCIsIFwiODcgQjMgRjAgOUYgODcgQjVcIiwgXCI4NyBCMyBGMCA5RiA4NyBCMVwiLCBcIjg3IEIzIEYwIDlGIDg3IEE4XCIsIFwiODcgQjMgRjAgOUYgODcgQkZcIiwgXCI4NyBCMyBGMCA5RiA4NyBBRVwiLCBcIjg3IEIzIEYwIDlGIDg3IEFBXCIsIFwiODcgQjMgRjAgOUYgODcgQUNcIiwgXCI4NyBCMyBGMCA5RiA4NyBCQVwiLCBcIjg3IEIzIEYwIDlGIDg3IEFCXCIsIFwiODcgQjIgRjAgOUYgODcgQjVcIiwgXCI4NyBCMCBGMCA5RiA4NyBCNVwiLCBcIjg3IEIzIEYwIDlGIDg3IEI0XCIsIFwiODcgQjQgRjAgOUYgODcgQjJcIiwgXCI4NyBCNSBGMCA5RiA4NyBCMFwiLCBcIjg3IEI1IEYwIDlGIDg3IEJDXCIsIFwiODcgQjUgRjAgOUYgODcgQjhcIiwgXCI4NyBCNSBGMCA5RiA4NyBBNlwiLCBcIjg3IEI1IEYwIDlGIDg3IEFDXCIsIFwiODcgQjUgRjAgOUYgODcgQkVcIiwgXCI4NyBCNSBGMCA5RiA4NyBBQVwiLCBcIjg3IEI1IEYwIDlGIDg3IEFEXCIsIFwiODcgQjUgRjAgOUYgODcgQjNcIiwgXCI4NyBCNSBGMCA5RiA4NyBCMVwiLCBcIjg3IEI1IEYwIDlGIDg3IEI5XCIsIFwiODcgQjUgRjAgOUYgODcgQjdcIiwgXCI4NyBCNiBGMCA5RiA4NyBBNlwiLCBcIjg3IEI3IEYwIDlGIDg3IEFBXCIsIFwiODcgQjcgRjAgOUYgODcgQjRcIiwgXCI4NyBCNyBGMCA5RiA4NyBCQVwiLCBcIjg3IEI3IEYwIDlGIDg3IEJDXCIsIFwiODcgQTcgRjAgOUYgODcgQjFcIiwgXCI4NyBCOCBGMCA5RiA4NyBBRFwiLCBcIjg3IEIwIEYwIDlGIDg3IEIzXCIsIFwiODcgQjEgRjAgOUYgODcgQThcIiwgXCI4NyBCNSBGMCA5RiA4NyBCMlwiLCBcIjg3IEJCIEYwIDlGIDg3IEE4XCIsIFwiODcgQkMgRjAgOUYgODcgQjhcIiwgXCI4NyBCOCBGMCA5RiA4NyBCMlwiLCBcIjg3IEI4IEYwIDlGIDg3IEI5XCIsIFwiODcgQjggRjAgOUYgODcgQTZcIiwgXCI4NyBCOCBGMCA5RiA4NyBCM1wiLCBcIjg3IEI3IEYwIDlGIDg3IEI4XCIsIFwiODcgQjggRjAgOUYgODcgQThcIiwgXCI4NyBCOCBGMCA5RiA4NyBCMVwiLCBcIjg3IEI4IEYwIDlGIDg3IEFDXCIsIFwiODcgQjggRjAgOUYgODcgQkRcIiwgXCI4NyBCOCBGMCA5RiA4NyBCMFwiLCBcIjg3IEI4IEYwIDlGIDg3IEFFXCIsIFwiODcgQjggRjAgOUYgODcgQTdcIiwgXCI4NyBCOCBGMCA5RiA4NyBCNFwiLCBcIjg3IEJGIEYwIDlGIDg3IEE2XCIsIFwiODcgQUMgRjAgOUYgODcgQjhcIiwgXCI4NyBCMCBGMCA5RiA4NyBCN1wiLCBcIjg3IEI4IEYwIDlGIDg3IEI4XCIsIFwiODcgQUEgRjAgOUYgODcgQjhcIiwgXCI4NyBCMSBGMCA5RiA4NyBCMFwiLCBcIjg3IEI4IEYwIDlGIDg3IEE5XCIsIFwiODcgQjggRjAgOUYgODcgQjdcIiwgXCI4NyBCOCBGMCA5RiA4NyBCRlwiLCBcIjg3IEI4IEYwIDlGIDg3IEFBXCIsIFwiODcgQTggRjAgOUYgODcgQURcIiwgXCI4NyBCOCBGMCA5RiA4NyBCRVwiLCBcIjg3IEI5IEYwIDlGIDg3IEJDXCIsIFwiODcgQjkgRjAgOUYgODcgQUZcIiwgXCI4NyBCOSBGMCA5RiA4NyBCRlwiLCBcIjg3IEI5IEYwIDlGIDg3IEFEXCIsIFwiODcgQjkgRjAgOUYgODcgQjFcIiwgXCI4NyBCOSBGMCA5RiA4NyBBQ1wiLCBcIjg3IEI5IEYwIDlGIDg3IEIwXCIsIFwiODcgQjkgRjAgOUYgODcgQjRcIiwgXCI4NyBCOSBGMCA5RiA4NyBCOVwiLCBcIjg3IEI5IEYwIDlGIDg3IEIzXCIsIFwiODcgQjkgRjAgOUYgODcgQjdcIiwgXCI4NyBCOSBGMCA5RiA4NyBCMlwiLCBcIjg3IEI5IEYwIDlGIDg3IEE4XCIsIFwiODcgQjkgRjAgOUYgODcgQkJcIiwgXCI4NyBCQSBGMCA5RiA4NyBBQ1wiLCBcIjg3IEJBIEYwIDlGIDg3IEE2XCIsIFwiODcgQTYgRjAgOUYgODcgQUFcIiwgXCI4NyBBQyBGMCA5RiA4NyBBN1wiLCBcIjg3IEJBIEYwIDlGIDg3IEI4XCIsIFwiODcgQkIgRjAgOUYgODcgQUVcIiwgXCI4NyBCQSBGMCA5RiA4NyBCRVwiLCBcIjg3IEJBIEYwIDlGIDg3IEJGXCIsIFwiODcgQkIgRjAgOUYgODcgQkFcIiwgXCI4NyBCQiBGMCA5RiA4NyBBNlwiLCBcIjg3IEJCIEYwIDlGIDg3IEFBXCIsIFwiODcgQkIgRjAgOUYgODcgQjNcIiwgXCI4NyBCQyBGMCA5RiA4NyBBQlwiLCBcIjg3IEFBIEYwIDlGIDg3IEFEXCIsIFwiODcgQkUgRjAgOUYgODcgQUFcIiwgXCI4NyBCRiBGMCA5RiA4NyBCMlwiLCBcIjg3IEJGIEYwIDlGIDg3IEJDXCJdXG5cdGVtb2ppc0FycmF5ID0gW11cblx0ZnJlcUVtb2ppc0FycmF5ID0gW11cblx0Zm9yIGVtIGluIHJhd0Vtb2ppc1xuXHRcdGVtb2ppc0FycmF5LnB1c2ggZW1vamlGb3JtYXR0ZXIoZW0pXG5cblx0XG5cdGZyZXF1ZW50bHlVc2VkRW1vamlzUmF3ID0gW1wiOTIgODVcIiwgXCI5MSA4NFwiLCBcIjkxIDg1XCIsIFwiOTEgODJcIiwgXCI5MSA4M1wiLFwiOTIgODVcIiwgXCI5MSA4NFwiLCBcIjkxIDg1XCIsIFwiOTEgODJcIiwgXCI5MSA4M1wiLFwiOTIgODVcIiwgXCI5MSA4NFwiLCBcIjkxIDg1XCIsIFwiOTEgODJcIiwgXCI5MSA4M1wiLFwiOTIgODVcIiwgXCI5MSA4NFwiLCBcIjkxIDg1XCIsIFwiOTEgODJcIiwgXCI5MSA4M1wiLFwiOTIgODVcIiwgXCI5MSA4NFwiLCBcIjkxIDg1XCIsIFwiOTEgODJcIiwgXCI5MSA4M1wiLF1cblx0Zm9yIGVtIGluIGZyZXF1ZW50bHlVc2VkRW1vamlzUmF3XG5cdFx0ZnJlcUVtb2ppc0FycmF5LnB1c2ggZW1vamlGb3JtYXR0ZXIoZW0pXG5cblx0ZW1vamlLZXkub24gRXZlbnRzLlRvdWNoU3RhcnQsIC0+XG5cdFx0ZW1vamlLZXkuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiXG5cdFx0ZW1vamlCRyA9IG5ldyBMYXllciBiYWNrZ3JvdW5kQ29sb3I6XCIjRUNFRUYxXCJcblx0XHRib3ggPSBleHBvcnRzLnB4KDMwKVxuXHRcdGVtb2ppQkcuY29uc3RyYWludHMgPSAodHJhaWxpbmc6MSwgbGVhZGluZzoxLCBib3R0b206MSwgaGVpZ2h0OjI1OClcblx0XHRleHBvcnRzLmxheW91dCgpXG5cdFx0ZW1vamlHYWxsZXkgPSBuZXcgU2Nyb2xsQ29tcG9uZW50IHN1cGVyTGF5ZXI6ZW1vamlCRywgd2lkdGg6ZW1vamlCRy53aWR0aCwgaGVpZ2h0OmVtb2ppQkcuaGVpZ2h0IC0gZXhwb3J0cy5weCg0MClcblx0XHRlbW9qaUdhbGxleS5zcGVlZFkgPSAwXG5cdFx0ZW1vamlTcGFjZXIgPSBleHBvcnRzLnB4KDYpXG5cdFx0ZW1vamlQaWNrZXIgPSBuZXcgTGF5ZXIgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIiwgbmFtZTpcImVtb2ppIHBpY2tlclwiLCBzdXBlckxheWVyOmVtb2ppQkdcblx0XHRlbW9qaVBpY2tlci5jb25zdHJhaW50cyA9IFxuXHRcdFx0bGVhZGluZzoxXG5cdFx0XHR0cmFpbGluZzoxXG5cdFx0XHRib3R0b206MVxuXHRcdFx0aGVpZ2h0OjQyXG5cdFx0QUJDID0gbmV3IExheWVyIGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCIsIHN1cGVyTGF5ZXI6ZW1vamlQaWNrZXJcblx0XHRBQkMuaHRtbCA9IFwiQUJDXCJcblx0XHRBQkMuc3R5bGUgPSB7XG5cdFx0XHRcImZvbnQtc2l6ZVwiIDogZXhwb3J0cy5weCgxNSkgKyBcInB4XCJcblx0XHRcdFwiZm9udC13ZWlnaHRcIiA6IDUwMFxuXHRcdFx0XCJmb250LWZhbWlseVwiIDogJy1hcHBsZS1zeXN0ZW0sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYnXG5cdFx0XHRcImNvbG9yXCIgOiBcIiM0RjU1NURcIlxuXHRcdH1cblx0XHRBQkMuY29uc3RyYWludHMgPSBcblx0XHRcdGxlYWRpbmc6MTJcblx0XHRcdGJvdHRvbToxNFxuXHRcdFx0d2lkdGg6MzBcblx0XHRcdGhlaWdodDoxNVxuXG5cdFx0ZXhwb3J0cy5sYXlvdXQoKVxuXHRcdHJvdyA9IC0xXG5cdFx0QUJDLm9uIEV2ZW50cy5DbGljaywgLT5cblx0XHRcdGVtb2ppQkcuZGVzdHJveSgpXG5cdFx0ZnJlcXVlbnQgPSBuZXcgTGF5ZXIgc3VwZXJMYXllcjplbW9qaVBpY2tlciwgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIlxuXHRcdGZyZXF1ZW50Lmh0bWwgPSBcIjw/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyc/PlxuXHRcdFx0PHN2ZyB3aWR0aD0nI3tleHBvcnRzLnB4KDE3KX1weCcgaGVpZ2h0PScje2V4cG9ydHMucHgoMTYpfXB4JyB2aWV3Qm94PScwIDAgMTcgMTYnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycgeG1sbnM6c2tldGNoPSdodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMnPlxuXHRcdFx0ICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy41LjIgKDI1MjM1KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHRcdCAgICA8dGl0bGU+UmVjZW50PC90aXRsZT5cblx0XHRcdCAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHRcdCAgICA8ZGVmcz48L2RlZnM+XG5cdFx0XHQgICAgPGcgaWQ9J2lPUy05LUtleWJvYXJkcycgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCcgc2tldGNoOnR5cGU9J01TUGFnZSc+XG5cdFx0XHQgICAgICAgIDxnIGlkPSdpUGhvbmUtNi1Qb3J0cmFpdC1MaWdodC1Db3B5JyBza2V0Y2g6dHlwZT0nTVNBcnRib2FyZEdyb3VwJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtNTUuMDAwMDAwLCAtNjM4LjAwMDAwMCknPlxuXHRcdFx0ICAgICAgICAgICAgPGcgaWQ9J0tleWJvYXJkcycgc2tldGNoOnR5cGU9J01TTGF5ZXJHcm91cCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMC4wMDAwMDAsIDQwOC4wMDAwMDApJz5cblx0XHRcdCAgICAgICAgICAgICAgICA8ZyBpZD0nUmVjZW50JyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSg1NS41MDAwMDAsIDIzMC4wMDAwMDApJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJz5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBpZD0nQm9keScgc3Ryb2tlPScjNEE1NDYxJyBjeD0nOCcgY3k9JzgnIHI9JzgnPjwvY2lyY2xlPlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSdNNy41LDcuNSBMNy41LDguNSBMOC41LDguNSBMOC41LDIgTDcuNSwyIEw3LjUsNy41IEw0LDcuNSBMNCw4LjUgTDguNSw4LjUgTDguNSw3LjUgTDcuNSw3LjUgWicgaWQ9J0hhbmRzJyBmaWxsPScjNEE1NDYxJz48L3BhdGg+XG5cdFx0XHQgICAgICAgICAgICAgICAgPC9nPlxuXHRcdFx0ICAgICAgICAgICAgPC9nPlxuXHRcdFx0ICAgICAgICA8L2c+XG5cdFx0XHQgICAgPC9nPlxuXHRcdFx0PC9zdmc+XCJcblx0XHRmcmVxdWVudC5jb25zdHJhaW50cyA9IFxuXHRcdFx0bGVhZGluZyA6IFtBQkMsIDE1XVxuXHRcdFx0Ym90dG9tOiAxNFxuXHRcdFx0d2lkdGg6MTZcblx0XHRcdGhlaWdodDoyMFxuXHRcdGV4cG9ydHMubGF5b3V0KClcblx0XHRzbWlsZXlzID0gbmV3IExheWVyIHN1cGVyTGF5ZXI6ZW1vamlQaWNrZXIsIGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCIsIG9wYWNpdHk6LjRcblx0XHRzbWlsZXlzLmh0bWwgPSBcIjw/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyc/PlxuXHRcdFx0PHN2ZyB3aWR0aD0nI3tleHBvcnRzLnB4KDE3KX1weCcgaGVpZ2h0PScje2V4cG9ydHMucHgoMTYpfXB4JyB2aWV3Qm94PScwIDAgMTcgMTYnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycgeG1sbnM6c2tldGNoPSdodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMnPlxuXHRcdFx0ICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy41LjIgKDI1MjM1KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHRcdCAgICA8dGl0bGU+OkQ8L3RpdGxlPlxuXHRcdFx0ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdFx0ICAgIDxkZWZzPjwvZGVmcz5cblx0XHRcdCAgICA8ZyBpZD0naU9TLTktS2V5Ym9hcmRzJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJyBza2V0Y2g6dHlwZT0nTVNQYWdlJz5cblx0XHRcdCAgICAgICAgPGcgaWQ9J2lQaG9uZS02LVBvcnRyYWl0LUxpZ2h0LUNvcHknIHNrZXRjaDp0eXBlPSdNU0FydGJvYXJkR3JvdXAnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC04Ni4wMDAwMDAsIC02MzguMDAwMDAwKSc+XG5cdFx0XHQgICAgICAgICAgICA8ZyBpZD0nS2V5Ym9hcmRzJyBza2V0Y2g6dHlwZT0nTVNMYXllckdyb3VwJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgwLjAwMDAwMCwgNDA4LjAwMDAwMCknPlxuXHRcdFx0ICAgICAgICAgICAgICAgIDxnIGlkPSc6RCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoODcuMDAwMDAwLCAyMzAuNTAwMDAwKScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCc+XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgaWQ9J0hlYWQnIHN0cm9rZT0nIzRBNTQ2MScgc3Ryb2tlLXdpZHRoPScwLjc4OTQ3MzY4NCcgY3g9JzcuNScgY3k9JzcuNScgcj0nNy41Jz48L2NpcmNsZT5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0nTTcuNSwxMy41MjYzMTU4IEMxMC4yNjg2OTA3LDEzLjUyNjMxNTggMTIuNTEzMTU3OSwxMC4zNjg0MjEyIDEyLjUxMzE1NzksOS4xODQyMTA0NSBDMTIuNTEzMTU3OSw3LjYwNTI2MzE3IDExLjQzODkwOTgsOS4xODQyMTA0MyA3LjUsOS4xODQyMTA1MyBDMy41NjEwOTAyMyw5LjE4NDIxMDYyIDIuNDg2ODQyMTEsNy42MDUyNjMxNyAyLjQ4Njg0MjExLDkuMTg0MjEwNDUgQzIuNDg2ODQyMTEsMTAuMzY4NDIxIDQuNzMxMzA5MzUsMTMuNTI2MzE1OCA3LjUsMTMuNTI2MzE1OCBaIE03LjUsMTAuOTYwNTI2MyBDOC45MzIzMzA4MywxMS4xNTc4OTQ3IDExLjc5Njk5MjUsMTAuMzY4NDIxIDExLjc5Njk5MjUsOS40NDQyMzU1MiBDMTEuNzk2OTkyNSw4Ljc4OTQ3MzY4IDEwLjg3NjIwODQsOS41Nzg5NDcyNyA3LjUsOS43NzYzMTU3OSBDNC4xMjM3OTE2Miw5LjU3ODk0NzQzIDMuMjAzMDA4NzIsOC43ODk0NzM2OSAzLjIwMzAwNzUyLDkuNDQ0MjM1NTIgQzMuMjAzMDA1ODIsMTAuMzY4NDIxIDYuMDY3NjY5MTcsMTEuMTU3ODk0NyA3LjUsMTAuOTYwNTI2MyBaJyBpZD0nU21pbGUnIGZpbGw9JyM0QTU0NjEnPjwvcGF0aD5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0nTTUuMjM2ODQyMTEsNi4zMjM2NTk4IEM1LjY0Mzc4ODc2LDYuMzIzNjU5OCA1Ljk3MzY4NDIxLDUuODgxODM1NTQgNS45NzM2ODQyMSw1LjMzNjgxNzY5IEM1Ljk3MzY4NDIxLDQuNzkxNzk5ODUgNS42NDM3ODg3Niw0LjM0OTk3NTU5IDUuMjM2ODQyMTEsNC4zNDk5NzU1OSBDNC44Mjk4OTU0NSw0LjM0OTk3NTU5IDQuNSw0Ljc5MTc5OTg1IDQuNSw1LjMzNjgxNzY5IEM0LjUsNS44ODE4MzU1NCA0LjgyOTg5NTQ1LDYuMzIzNjU5OCA1LjIzNjg0MjExLDYuMzIzNjU5OCBaIE05LjczNjg0MjExLDYuMzIzNjU5OCBDMTAuMTQzNzg4OCw2LjMyMzY1OTggMTAuNDczNjg0Miw1Ljg4MTgzNTU0IDEwLjQ3MzY4NDIsNS4zMzY4MTc2OSBDMTAuNDczNjg0Miw0Ljc5MTc5OTg1IDEwLjE0Mzc4ODgsNC4zNDk5NzU1OSA5LjczNjg0MjExLDQuMzQ5OTc1NTkgQzkuMzI5ODk1NDUsNC4zNDk5NzU1OSA5LDQuNzkxNzk5ODUgOSw1LjMzNjgxNzY5IEM5LDUuODgxODM1NTQgOS4zMjk4OTU0NSw2LjMyMzY1OTggOS43MzY4NDIxMSw2LjMyMzY1OTggWicgaWQ9J0V5ZXMnIGZpbGw9JyM0QTU0NjEnPjwvcGF0aD5cblx0XHRcdCAgICAgICAgICAgICAgICA8L2c+XG5cdFx0XHQgICAgICAgICAgICA8L2c+XG5cdFx0XHQgICAgICAgIDwvZz5cblx0XHRcdCAgICA8L2c+XG5cdFx0XHQ8L3N2Zz5cIlxuXHRcdHNtaWxleXMuY29uc3RyYWludHMgPVxuXHRcdFx0bGVhZGluZyA6IFtmcmVxdWVudCwgMTVdXG5cdFx0XHRib3R0b206IDE0XG5cdFx0XHR3aWR0aDoxNlxuXHRcdFx0aGVpZ2h0OjIwXG5cdFx0ZXhwb3J0cy5sYXlvdXQoKVxuXHRcdGFuaW1hbHMgPSBuZXcgTGF5ZXIgc3VwZXJMYXllcjplbW9qaVBpY2tlciwgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIiwgb3BhY2l0eTouNFxuXHRcdGFuaW1hbHMuaHRtbCA9IFwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdFx0XHQ8c3ZnIHdpZHRoPScje2V4cG9ydHMucHgoMTcpfXB4JyBoZWlnaHQ9JyN7ZXhwb3J0cy5weCgxNil9cHgnIHZpZXdCb3g9JzAgMCAxNyAxNycgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyB4bWxuczpza2V0Y2g9J2h0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaC9ucyc+XG5cdFx0XHQgICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjUuMiAoMjUyMzUpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdFx0ICAgIDx0aXRsZT5Hcm91cDwvdGl0bGU+XG5cdFx0XHQgICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0XHQgICAgPGRlZnM+PC9kZWZzPlxuXHRcdFx0ICAgIDxnIGlkPSdQYWdlLTEnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIHNrZXRjaDp0eXBlPSdNU1BhZ2UnPlxuXHRcdFx0ICAgICAgICA8ZyBpZD0naVBob25lLTYnIHNrZXRjaDp0eXBlPSdNU0FydGJvYXJkR3JvdXAnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC0xMTcuMDAwMDAwLCAtNjM5LjAwMDAwMCknIHN0cm9rZT0nIzRBNTM2MSc+XG5cdFx0XHQgICAgICAgICAgICA8ZyBpZD0naWNfRm9vZCcgc2tldGNoOnR5cGU9J01TTGF5ZXJHcm91cCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMTE4LjAwMDAwMCwgNjQwLjAwMDAwMCknPlxuXHRcdFx0ICAgICAgICAgICAgICAgIDxnIGlkPSdHcm91cCcgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCc+XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9J001LjY4Mzc3NTM3LDEuMzgxNTY2NDYgQzYuMjM5MjYwNjYsMS4xMzYyNCA2Ljg1MzcyMDA1LDEgNy41LDEgQzguMTQ2Mjc5OTUsMSA4Ljc2MDczOTM0LDEuMTM2MjQgOS4zMTYyMjQ2MywxLjM4MTU2NjQ2IEM5LjgwODc5Mjc1LDAuNTYyMzU5MDE5IDEwLjgyNTU4ODgsMCAxMiwwIEMxMy42NTY4NTQyLDAgMTUsMS4xMTkyODgxMyAxNSwyLjUgQzE1LDMuNTU3MTM5OCAxNC4yMTI2MjQ2LDQuNDYxMDI4NDMgMTMuMDk5OTIyNiw0LjgyNjYyNTE0IEMxNC4yNDk2NTI4LDUuNjQxODU0MjIgMTUsNi45ODMzMDA2MiAxNSw4LjUgQzE1LDEwLjcxNjcxNDQgMTMuMzk3MTg3MywxMi41NTkwNzE5IDExLjI4NzI2NzEsMTIuOTMxMzY3MyBDMTAuNDg2NzI0OCwxNC4xNzU3NzAzIDkuMDg5NjE2OTYsMTUgNy41LDE1IEM1LjkxMDM4MzA0LDE1IDQuNTEzMjc1MjQsMTQuMTc1NzcwMyAzLjcxMjczMjkxLDEyLjkzMTM2NzMgQzEuNjAyODEyNjgsMTIuNTU5MDcxOSAwLDEwLjcxNjcxNDQgMCw4LjUgQzAsNi45ODMzMDA2MiAwLjc1MDM0NzI0NCw1LjY0MTg1NDIyIDEuOTAwMDc3NDEsNC44MjY2MjUxNCBDMC43ODczNzU0NDUsNC40NjEwMjg0MyAwLDMuNTU3MTM5OCAwLDIuNSBDMCwxLjExOTI4ODEzIDEuMzQzMTQ1NzUsMCAzLDAgQzQuMTc0NDExMjIsMCA1LjE5MTIwNzI1LDAuNTYyMzU5MDE5IDUuNjgzNzc1MzcsMS4zODE1NjY0NiBaJyBpZD0nT3ZhbC04Jz48L3BhdGg+XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9J001LjczODM0MjI4LDEyIEM1Ljg2MjkwOTc5LDEyIDYuMTQ2NDIzNTMsMTIgNi4xNDY0MjM1MywxMiBDNi4xNDY0MjM1MywxMiA2LjQzMjE1Njk2LDEyLjQ0MjYxMjMgNi41MjQ2NTgyLDEyLjQ5MTk3MzkgQzYuNjY0NTU2MDEsMTIuNTY2NjI3NyA3LDEyLjQ5MTk3MzkgNywxMi40OTE5NzM5IEw3LDEyIEw4LDEyIEw4LDEyLjQ5MTk3MzkgTDguNDk3OTkyMjgsMTIuNDkxOTczOSBMOC44NDMwMTc2OSwxMiBMOS4zOTE4NDU3LDEyIEM5LjM5MTg0NTcsMTIgOC45OTU5ODQ1NywxMi45ODM5NDc4IDguNDk3OTkyMjgsMTIuOTgzOTQ3OCBMNi42MDcwMjQwNywxMi45ODM5NDc4IEM2LjIxNDA0ODEzLDEyLjk4Mzk0NzggNS40NTk5NjA5NCwxMiA1LjczODM0MjI4LDEyIFonIGlkPSdSZWN0YW5nbGUtNDQtQ29weS0yJz48L3BhdGg+XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgaWQ9J092YWwtMTQnIGN4PScxMC41JyBjeT0nNy41JyByPScwLjUnPjwvY2lyY2xlPlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGlkPSdPdmFsLTE0LUNvcHknIGN4PSc0LjUnIGN5PSc3LjUnIHI9JzAuNSc+PC9jaXJjbGU+XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9J00xMi42OTk5OTY5LDUgQzEyLjY5OTk5NjksMy4wNjcwMDMzOCAxMS4xMzI5OTM2LDEuNSA5LjE5OTk5Njk1LDEuNScgaWQ9J092YWwtMTYnPjwvcGF0aD5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0nTTUuNSw1IEM1LjUsMy4wNjcwMDMzOCAzLjkzMjk5NjYyLDEuNSAyLDEuNScgaWQ9J092YWwtMTYtQ29weScgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMy43NTAwMDAsIDMuMjUwMDAwKSBzY2FsZSgtMSwgMSkgdHJhbnNsYXRlKC0zLjc1MDAwMCwgLTMuMjUwMDAwKSAnPjwvcGF0aD5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9J1JlY3RhbmdsZS00NC1Db3B5JyB4PSc3JyB5PScxMScgd2lkdGg9JzEnIGhlaWdodD0nMSc+PC9yZWN0PlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSdNNiwxMCBMNi41LDEwIEw2LjQ5OTk5OTk5LDkuNSBMOC41MDAwMDAwNSw5LjUgTDguNTAwMDAwMDUsMTAgTDksMTAgTDksMTAuNSBMOC41LDEwLjUgTDguNSwxMSBMNi41LDExIEw2LjUsMTAuNSBMNiwxMC41IEw2LDEwIFonIGlkPSdQYXRoJz48L3BhdGg+XG5cdFx0XHQgICAgICAgICAgICAgICAgPC9nPlxuXHRcdFx0ICAgICAgICAgICAgPC9nPlxuXHRcdFx0ICAgICAgICA8L2c+XG5cdFx0XHQgICAgPC9nPlxuXHRcdFx0PC9zdmc+XCJcblx0XHRhbmltYWxzLmNvbnN0cmFpbnRzID1cblx0XHRcdGxlYWRpbmcgOiBbc21pbGV5cywgMTVdXG5cdFx0XHRib3R0b206IDE0XG5cdFx0XHR3aWR0aDoxNlxuXHRcdFx0aGVpZ2h0OjIwXG5cdFx0ZXhwb3J0cy5sYXlvdXQoKVxuXHRcdGZvb2QgPSBuZXcgTGF5ZXIgc3VwZXJMYXllcjplbW9qaVBpY2tlciwgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIiwgb3BhY2l0eTouNFxuXHRcdGZvb2QuaHRtbCA9IFwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdFx0XHQ8c3ZnIHdpZHRoPScje2V4cG9ydHMucHgoMTcpfXB4JyBoZWlnaHQ9JyN7ZXhwb3J0cy5weCgxNil9cHgnIHZpZXdCb3g9JzAgMCAxNyAxNycgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyB4bWxuczpza2V0Y2g9J2h0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaC9ucyc+XG5cdFx0XHQgICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjUuMiAoMjUyMzUpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdFx0ICAgIDx0aXRsZT5Gb29kPC90aXRsZT5cblx0XHRcdCAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHRcdCAgICA8ZGVmcz48L2RlZnM+XG5cdFx0XHQgICAgPGcgaWQ9J2lPUy05LUtleWJvYXJkcycgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCcgc2tldGNoOnR5cGU9J01TUGFnZSc+XG5cdFx0XHQgICAgICAgIDxnIGlkPSdpUGhvbmUtNi1Qb3J0cmFpdC1MaWdodC1Db3B5JyBza2V0Y2g6dHlwZT0nTVNBcnRib2FyZEdyb3VwJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtMTQ4LjAwMDAwMCwgLTYzNy4wMDAwMDApJz5cblx0XHRcdCAgICAgICAgICAgIDxnIGlkPSdLZXlib2FyZHMnIHNrZXRjaDp0eXBlPSdNU0xheWVyR3JvdXAnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDAuMDAwMDAwLCA0MDguMDAwMDAwKSc+XG5cdFx0XHQgICAgICAgICAgICAgICAgPGcgaWQ9J0Zvb2QnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDE0OS41MDAwMDAsIDIyOS41MDAwMDApJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJz5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0nTTUuNSwxNS41IEwxLDE1LjUgTDAsNSBMNi41LDUgTDYuMjYzNjA5MzMsNy40ODIxMDIwMicgaWQ9J0RyaW5rJyBzdHJva2U9JyM0QTU0NjEnPjwvcGF0aD5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0nTTYuMDEwNzc1NDUsMS45NjkzMDA5OCBMNi41MTU3MTM1Miw1LjIyMjcwNTM5IEw1LjcxOTA4MTg0LDUuNjc5NDc4MTIgTDUuMDM4OTAwOSwxLjk2OTMwMDk4IEw0Ljg1NTU3MjQ3LDEuOTY5MzAwOTggTDQuODU1NTcyNDcsMC45NjkzMDA5OCBMOC44NTU1NzI0NywwLjk2OTMwMDk4IEw4Ljg1NTU3MjQ3LDEuOTY5MzAwOTggTDYuMDEwNzc1NDUsMS45NjkzMDA5OCBaJyBpZD0nU3RyYXcnIGZpbGw9JyM0QTU0NjEnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDYuODU1NTcyLCAzLjMyNDM5MCkgcm90YXRlKDI0LjAwMDAwMCkgdHJhbnNsYXRlKC02Ljg1NTU3MiwgLTMuMzI0MzkwKSAnPjwvcGF0aD5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9J0JvdHRvbS1CdW4nIHN0cm9rZT0nIzRBNTQ2MScgeD0nMycgeT0nMTQnIHdpZHRoPScxMC41JyBoZWlnaHQ9JzEuNScgcng9JzEnPjwvcmVjdD5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0nTTEuNSwxMi41MDI0NDA4IEMxLjUsMTEuOTQ4ODA4IDEuOTQ5MTY5MTYsMTEuNSAyLjQ5MjY4NzIzLDExLjUgTDE0LjAwNzMxMjgsMTEuNSBDMTQuNTU1NTU4OCwxMS41IDE1LDExLjk0Njk0OTkgMTUsMTIuNTAyNDQwOCBMMTUsMTIuOTk3NTU5MiBDMTUsMTMuNTUxMTkyIDE0LjU1MDgzMDgsMTQgMTQuMDA3MzEyOCwxNCBMMi40OTI2ODcyMywxNCBDMS45NDQ0NDEyMSwxNCAxLjUsMTMuNTUzMDUwMSAxLjUsMTIuOTk3NTU5MiBMMS41LDEyLjUwMjQ0MDggWiBNMy45MzMwMDAwMywxMS44MzkyNzI3IEMzLjQxNzcxODM0LDExLjY1MTg5NzYgMy40NDQ4MzY5NywxMS41IDMuOTk1NTc3NSwxMS41IEwxMy4wMDQ0MjI1LDExLjUgQzEzLjU1NDI2NDgsMTEuNSAxMy41ODY2MDYxLDExLjY1MDMyNTEgMTMuMDY3LDExLjgzOTI3MjcgTDguNSwxMy41IEwzLjkzMzAwMDAzLDExLjgzOTI3MjcgWicgaWQ9JyZxdW90O1BhdHR5JnF1b3Q7JyBmaWxsPScjNEE1NDYxJz48L3BhdGg+XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9J00yLjUsMTAuNSBMMTMuNSwxMC41IEwxNSwxMS41IEwxLDExLjUgTDIuNSwxMC41IFonIGlkPSdDaGVlc2UnIGZpbGw9JyM0QTU0NjEnPjwvcGF0aD5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0nTTguMjUsMTAuNSBDMTEuNDI1NjM3MywxMC41IDE0LDEwLjMyODQyNzEgMTQsOS41IEMxNCw4LjY3MTU3Mjg4IDExLjQyNTYzNzMsOCA4LjI1LDggQzUuMDc0MzYyNjksOCAyLjUsOC42NzE1NzI4OCAyLjUsOS41IEMyLjUsMTAuMzI4NDI3MSA1LjA3NDM2MjY5LDEwLjUgOC4yNSwxMC41IFonIGlkPSdUb3AtQnVuJyBzdHJva2U9JyM0QTU0NjEnIHN0cm9rZS13aWR0aD0nMC43NSc+PC9wYXRoPlxuXHRcdFx0ICAgICAgICAgICAgICAgIDwvZz5cblx0XHRcdCAgICAgICAgICAgIDwvZz5cblx0XHRcdCAgICAgICAgPC9nPlxuXHRcdFx0ICAgIDwvZz5cblx0XHRcdDwvc3ZnPlwiXG5cdFx0Zm9vZC5jb25zdHJhaW50cyA9XG5cdFx0XHRsZWFkaW5nIDogW2FuaW1hbHMsIDE1XVxuXHRcdFx0Ym90dG9tOiAxNFxuXHRcdFx0d2lkdGg6MTZcblx0XHRcdGhlaWdodDoyMFxuXHRcdGV4cG9ydHMubGF5b3V0KClcblx0XHRhY3Rpdml0eSA9IG5ldyBMYXllciBzdXBlckxheWVyOmVtb2ppUGlja2VyLCBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiLCBvcGFjaXR5Oi40XG5cdFx0YWN0aXZpdHkuaHRtbCA9IFwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdFx0XHQ8c3ZnIHdpZHRoPScje2V4cG9ydHMucHgoMTYpfXB4JyBoZWlnaHQ9JyN7ZXhwb3J0cy5weCgxNil9cHgnIHZpZXdCb3g9JzAgMCAxNiAxNicgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyB4bWxuczpza2V0Y2g9J2h0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaC9ucyc+XG5cdFx0XHQgICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjUuMiAoMjUyMzUpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdFx0ICAgIDx0aXRsZT5Tb2NjZXIgQmFsbDwvdGl0bGU+XG5cdFx0XHQgICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0XHQgICAgPGRlZnM+XG5cdFx0XHQgICAgICAgIDxjaXJjbGUgaWQ9J3BhdGgtMScgY3g9JzgnIGN5PSc4JyByPSc4Jz48L2NpcmNsZT5cblx0XHRcdCAgICA8L2RlZnM+XG5cdFx0XHQgICAgPGcgaWQ9J1BhZ2UtMScgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCcgc2tldGNoOnR5cGU9J01TUGFnZSc+XG5cdFx0XHQgICAgICAgIDxnIGlkPSdpUGhvbmUtNicgc2tldGNoOnR5cGU9J01TQXJ0Ym9hcmRHcm91cCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTE3OS4wMDAwMDAsIC02MzkuMDAwMDAwKSc+XG5cdFx0XHQgICAgICAgICAgICA8ZyBpZD0nU29jY2VyLUJhbGwnIHNrZXRjaDp0eXBlPSdNU0xheWVyR3JvdXAnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDE3OS4wMDAwMDAsIDYzOS4wMDAwMDApJz5cblx0XHRcdCAgICAgICAgICAgICAgICA8bWFzayBpZD0nbWFzay0yJyBza2V0Y2g6bmFtZT0nTWFzaycgZmlsbD0nd2hpdGUnPlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9JyNwYXRoLTEnPjwvdXNlPlxuXHRcdFx0ICAgICAgICAgICAgICAgIDwvbWFzaz5cblx0XHRcdCAgICAgICAgICAgICAgICA8dXNlIGlkPSdNYXNrJyBzdHJva2U9JyM0QTUzNjEnIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnIHhsaW5rOmhyZWY9JyNwYXRoLTEnPjwvdXNlPlxuXHRcdFx0ICAgICAgICAgICAgICAgIDxwYXRoIGQ9J002LDEyLjEyMDMwNDYgTDEyLjg1NzMzODQsOCBMMTMuMzcyMzc2NSw4Ljg1NzE2NzMgTDYuNTE1MDM4MDcsMTIuOTc3NDcxOSBMNiwxMi4xMjAzMDQ2IEw2LDEyLjEyMDMwNDYgWicgaWQ9J1JlY3RhbmdsZS00NycgZmlsbD0nIzRBNTM2MScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCcgbWFzaz0ndXJsKCNtYXNrLTIpJz48L3BhdGg+XG5cdFx0XHQgICAgICAgICAgICAgICAgPHBhdGggZD0nTTExLjg0OTY0OCw4LjcyNjA1NTEgTDE5LjEwMDExMDMsNS4zNDUxMDkwMSBMMTkuNTIyNzI4NSw2LjI1MTQxNjggTDEyLjI3MjI2NjIsOS42MzIzNjI4OSBMMTEuODQ5NjQ4LDguNzI2MDU1MSBMMTEuODQ5NjQ4LDguNzI2MDU1MSBaJyBpZD0nUmVjdGFuZ2xlLTQ3LUNvcHktMycgZmlsbD0nIzRBNTM2MScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCcgbWFzaz0ndXJsKCNtYXNrLTIpJz48L3BhdGg+XG5cdFx0XHQgICAgICAgICAgICAgICAgPHBhdGggZD0nTTYsMy4xMjAzMDQ2IEwxMi44NTczMzg0LC0xIEwxMy4zNzIzNzY1LC0wLjE0MjgzMjY5OSBMNi41MTUwMzgwNywzLjk3NzQ3MTkgTDYsMy4xMjAzMDQ2IEw2LDMuMTIwMzA0NiBaJyBpZD0nUmVjdGFuZ2xlLTQ3LUNvcHktMicgZmlsbD0nIzRBNTM2MScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCcgbWFzaz0ndXJsKCNtYXNrLTIpJz48L3BhdGg+XG5cdFx0XHQgICAgICAgICAgICAgICAgPHBhdGggZD0nTS0xLDcuMTIwMzA0NiBMNS44NTczMzg0MSwzIEw2LjM3MjM3NjQ4LDMuODU3MTY3MyBMLTAuNDg0OTYxOTI1LDcuOTc3NDcxOSBMLTEsNy4xMjAzMDQ2IEwtMSw3LjEyMDMwNDYgWicgaWQ9J1JlY3RhbmdsZS00Ny1Db3B5LTQnIGZpbGw9JyM0QTUzNjEnIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnIG1hc2s9J3VybCgjbWFzay0yKSc+PC9wYXRoPlxuXHRcdFx0ICAgICAgICAgICAgICAgIDxyZWN0IGlkPSdSZWN0YW5nbGUtNTAnIGZpbGw9JyM0QTUzNjEnIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnIG1hc2s9J3VybCgjbWFzay0yKScgeD0nNCcgeT0nNicgd2lkdGg9JzEnIGhlaWdodD0nNSc+PC9yZWN0PlxuXHRcdFx0ICAgICAgICAgICAgICAgIDxyZWN0IGlkPSdSZWN0YW5nbGUtNTEnIGZpbGw9JyM0QTUzNjEnIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnIG1hc2s9J3VybCgjbWFzay0yKScgeD0nMTEuNScgeT0nMycgd2lkdGg9JzEnIGhlaWdodD0nMTInPjwvcmVjdD5cblx0XHRcdCAgICAgICAgICAgICAgICA8cGF0aCBkPSdNNSw0Ljg1NzE2NzMgTDExLjg1NzMzODQsOC45Nzc0NzE5IEwxMi4zNzIzNzY1LDguMTIwMzA0NiBMNS41MTUwMzgwNyw0IEw1LDQuODU3MTY3MycgaWQ9J1JlY3RhbmdsZS00Ny1Db3B5JyBmaWxsPScjNEE1MzYxJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJyBtYXNrPSd1cmwoI21hc2stMiknPjwvcGF0aD5cblx0XHRcdCAgICAgICAgICAgICAgICA8cGF0aCBkPSdNNSwxMi44NTcxNjczIEwxMS44NTczMzg0LDE2Ljk3NzQ3MTkgTDEyLjM3MjM3NjUsMTYuMTIwMzA0NiBMNS41MTUwMzgwNywxMiBMNSwxMi44NTcxNjczJyBpZD0nUmVjdGFuZ2xlLTQ3LUNvcHktNScgZmlsbD0nIzRBNTM2MScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCcgbWFzaz0ndXJsKCNtYXNrLTIpJz48L3BhdGg+XG5cdFx0XHQgICAgICAgICAgICAgICAgPHBhdGggZD0nTTExLjkwNDg5NzIsNi4xNDc2NjA2NCBMMTMuODcxNDIyNyw4LjMzMTcwODQ5IEwxMi40MDE5NTk2LDEwLjg3Njg5MzMgTDkuNTI3MjU1ODksMTAuMjY1ODU2MiBMOS4yMjAwNTQ0NSw3LjM0MzAyOTY1IEwxMS45MDQ4OTcyLDYuMTQ3NjYwNjQnIGlkPSdQb2x5Z29uLTEnIGZpbGw9JyNEOEQ4RDgnIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnIG1hc2s9J3VybCgjbWFzay0yKSc+PC9wYXRoPlxuXHRcdFx0ICAgICAgICAgICAgICAgIDxwYXRoIGQ9J00xMS45MDQ4OTcyLDYuMTQ3NjYwNjQgTDEzLjg3MTQyMjcsOC4zMzE3MDg0OSBMMTIuNDAxOTU5NiwxMC44NzY4OTMzIEw5LjUyNzI1NTg5LDEwLjI2NTg1NjIgTDkuMjIwMDU0NDUsNy4zNDMwMjk2NSBMMTEuOTA0ODk3Miw2LjE0NzY2MDY0JyBpZD0nUG9seWdvbi0xLUNvcHknIGZpbGw9JyM0QTUzNjEnIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnIG1hc2s9J3VybCgjbWFzay0yKSc+PC9wYXRoPlxuXHRcdFx0ICAgICAgICAgICAgICAgIDxwYXRoIGQ9J003LjQ1NzcxMTg5LDMuMTk1MDQ3MzkgTDcuMzU1MTQ0ODQsNi4xMzIxODMzMyBMNC41MzAwNjc2LDYuOTQyMjYxMiBMMi44ODY2NDA4OSw0LjUwNTc4MDkgTDQuNjk2MDI0NTcsMi4xODk4NzU0MSBMNy40NTc3MTE4OSwzLjE5NTA0NzM5JyBpZD0nUG9seWdvbi0xLUNvcHktMicgZmlsbD0nIzRBNTM2MScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCcgbWFzaz0ndXJsKCNtYXNrLTIpJz48L3BhdGg+XG5cdFx0XHQgICAgICAgICAgICAgICAgPHBhdGggZD0nTTcuNDU3NzExODksMTEuMTk1MDQ3NCBMNy4zNTUxNDQ4NCwxNC4xMzIxODMzIEw0LjUzMDA2NzYsMTQuOTQyMjYxMiBMMi44ODY2NDA4OSwxMi41MDU3ODA5IEw0LjY5NjAyNDU3LDEwLjE4OTg3NTQgTDcuNDU3NzExODksMTEuMTk1MDQ3NCcgaWQ9J1BvbHlnb24tMS1Db3B5LTMnIGZpbGw9JyM0QTUzNjEnIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnIG1hc2s9J3VybCgjbWFzay0yKSc+PC9wYXRoPlxuXHRcdFx0ICAgICAgICAgICAgICAgIDxwYXRoIGQ9J00xNC41NDMxNzAxLDAuMDcyNTkzOTMxNCBMMTQuNDQwNjAzMSwzLjAwOTcyOTg4IEwxMS42MTU1MjU4LDMuODE5ODA3NzQgTDkuOTcyMDk5MTIsMS4zODMzMjc0NSBMMTEuNzgxNDgyOCwtMC45MzI1NzgwNSBMMTQuNTQzMTcwMSwwLjA3MjU5MzkzMTQnIGlkPSdQb2x5Z29uLTEtQ29weS00JyBmaWxsPScjNEE1MzYxJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJyBtYXNrPSd1cmwoI21hc2stMiknPjwvcGF0aD5cblx0XHRcdCAgICAgICAgICAgIDwvZz5cblx0XHRcdCAgICAgICAgPC9nPlxuXHRcdFx0ICAgIDwvZz5cblx0XHRcdDwvc3ZnPlwiXG5cdFx0YWN0aXZpdHkuY29uc3RyYWludHMgPVxuXHRcdFx0bGVhZGluZyA6IFtmb29kLCAxNV1cblx0XHRcdGJvdHRvbTogMTRcblx0XHRcdHdpZHRoOjE2XG5cdFx0XHRoZWlnaHQ6MjBcblx0XHRleHBvcnRzLmxheW91dCgpXG5cdFx0dHJhdmVsID0gbmV3IExheWVyIHN1cGVyTGF5ZXI6ZW1vamlQaWNrZXIsIGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCIsIG9wYWNpdHk6LjRcblx0XHR0cmF2ZWwuaHRtbCA9IFwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdFx0XHQ8c3ZnIHdpZHRoPScje2V4cG9ydHMucHgoMTcpfXB4JyBoZWlnaHQ9JyN7ZXhwb3J0cy5weCgxNil9cHgnIHZpZXdCb3g9JzAgMCAxNyAxNicgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyB4bWxuczpza2V0Y2g9J2h0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaC9ucyc+XG5cdFx0XHQgICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjUuMiAoMjUyMzUpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdFx0ICAgIDx0aXRsZT5UcmFuc3BvcnQ8L3RpdGxlPlxuXHRcdFx0ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdFx0ICAgIDxkZWZzPjwvZGVmcz5cblx0XHRcdCAgICA8ZyBpZD0naU9TLTktS2V5Ym9hcmRzJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJyBza2V0Y2g6dHlwZT0nTVNQYWdlJz5cblx0XHRcdCAgICAgICAgPGcgaWQ9J2lQaG9uZS02LVBvcnRyYWl0LUxpZ2h0LUNvcHknIHNrZXRjaDp0eXBlPSdNU0FydGJvYXJkR3JvdXAnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC0yNDEuMDAwMDAwLCAtNjM4LjAwMDAwMCknPlxuXHRcdFx0ICAgICAgICAgICAgPGcgaWQ9J0tleWJvYXJkcycgc2tldGNoOnR5cGU9J01TTGF5ZXJHcm91cCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMC4wMDAwMDAsIDQwOC4wMDAwMDApJz5cblx0XHRcdCAgICAgICAgICAgICAgICA8ZyBpZD0nVHJhbnNwb3J0JyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgyNDEuNTAwMDAwLCAyMzAuMDAwMDAwKScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCc+XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9J00wLDYgTDEsNiBMMSwxNSBMMCwxNSBMMCw2IFogTTE1LDQgTDE2LDQgTDE2LDE1IEwxNSwxNSBMMTUsNCBaIE0zLjUsMCBMNC41LDAgTDQuNSw3IEwzLjUsNyBMMy41LDAgWiBNMSw2IEwzLjUsNiBMMy41LDcgTDEsNyBMMSw2IFogTTQuNSwwIEw5LjUsMCBMOS41LDEgTDQuNSwxIEw0LjUsMCBaIE05LjUsMCBMMTAuNSwwIEwxMC41LDYgTDkuNSw2IEw5LjUsMCBaIE0xMC41LDQgTDE1LDQgTDE1LDUgTDEwLjUsNSBMMTAuNSw0IFonIGlkPSdTa3lsaW5lJyBmaWxsPScjNEE1NDYxJz48L3BhdGg+XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIDxnIGlkPSdXaW5kb3dzJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgyLjAwMDAwMCwgMi4wMDAwMDApJyBmaWxsPScjNEE1NDYxJz5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSdXaW5kb3cnIHg9JzAnIHk9JzYnIHdpZHRoPScxJyBoZWlnaHQ9JzEnPjwvcmVjdD5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSdXaW5kb3cnIHg9JzMuNScgeT0nMCcgd2lkdGg9JzEnIGhlaWdodD0nMSc+PC9yZWN0PlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9J1dpbmRvdycgeD0nNS41JyB5PScwJyB3aWR0aD0nMScgaGVpZ2h0PScxJz48L3JlY3Q+XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0nV2luZG93JyB4PSc1LjUnIHk9JzInIHdpZHRoPScxJyBoZWlnaHQ9JzEnPjwvcmVjdD5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSdXaW5kb3cnIHg9JzMuNScgeT0nMicgd2lkdGg9JzEnIGhlaWdodD0nMSc+PC9yZWN0PlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9J1dpbmRvdycgeD0nMTEnIHk9JzQnIHdpZHRoPScxJyBoZWlnaHQ9JzEnPjwvcmVjdD5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSdXaW5kb3cnIHg9JzExJyB5PSc2JyB3aWR0aD0nMScgaGVpZ2h0PScxJz48L3JlY3Q+XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIDwvZz5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgPGcgaWQ9J0NhcicgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMi41MDAwMDAsIDYuNTAwMDAwKSc+XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSdNOC41LDggTDIuNSw4IEwyLjUsOS41IEwwLjUsOS41IEwwLjUsNy44NjgxMTQ1IEMwLjIwMTIwMjE5Miw3LjY5NTgyNzAyIDAsNy4zNzA5MTM2MyAwLDYuOTkwNjMxMSBMMCw1LjAwOTM2ODkgQzAsNC40NTE5MDk4NSAwLjQ0NDgzNjk3NCw0IDAuOTk1NTc3NDk5LDQgTDEwLjAwNDQyMjUsNCBDMTAuNTU0MjY0OCw0IDExLDQuNDQzMzUzMTggMTEsNS4wMDkzNjg5IEwxMSw2Ljk5MDYzMTEgQzExLDcuMzY1MzMxNSAxMC43OTkwMjQ0LDcuNjkyMzQ1MTkgMTAuNSw3Ljg2NjQ5MDAyIEwxMC41LDkuNSBMOC41LDkuNSBMOC41LDggWiBNMS43NSw2LjUgQzIuMTY0MjEzNTYsNi41IDIuNSw2LjE2NDIxMzU2IDIuNSw1Ljc1IEMyLjUsNS4zMzU3ODY0NCAyLjE2NDIxMzU2LDUgMS43NSw1IEMxLjMzNTc4NjQ0LDUgMSw1LjMzNTc4NjQ0IDEsNS43NSBDMSw2LjE2NDIxMzU2IDEuMzM1Nzg2NDQsNi41IDEuNzUsNi41IFogTTkuMjUsNi41IEM5LjY2NDIxMzU2LDYuNSAxMCw2LjE2NDIxMzU2IDEwLDUuNzUgQzEwLDUuMzM1Nzg2NDQgOS42NjQyMTM1Niw1IDkuMjUsNSBDOC44MzU3ODY0NCw1IDguNSw1LjMzNTc4NjQ0IDguNSw1Ljc1IEM4LjUsNi4xNjQyMTM1NiA4LjgzNTc4NjQ0LDYuNSA5LjI1LDYuNSBaIE0wLjUsNyBMMTAuNSw3IEwxMC41LDcuNSBMMC41LDcuNSBMMC41LDcgWiBNMyw2LjUgTDgsNi41IEw4LDcgTDMsNyBMMyw2LjUgWicgaWQ9J0JvZHknIGZpbGw9JyM0QTU0NjEnPjwvcGF0aD5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9J00xLjUsNC41IEwxLjUsMyBDMS41LDEuMzQzMTQ1NzUgMi44MzkwMjAxMywwIDQuNTAxNjY1NDcsMCBMNi40OTgzMzQ1MywwIEM4LjE1NjEwODU5LDAgOS41LDEuMzQ2NTE3MTIgOS41LDMgTDkuNSw1JyBpZD0nUm9vZicgc3Ryb2tlPScjNEE1NDYxJz48L3BhdGg+XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIDwvZz5cblx0XHRcdCAgICAgICAgICAgICAgICA8L2c+XG5cdFx0XHQgICAgICAgICAgICA8L2c+XG5cdFx0XHQgICAgICAgIDwvZz5cblx0XHRcdCAgICA8L2c+XG5cdFx0XHQ8L3N2Zz5cIlxuXHRcdHRyYXZlbC5jb25zdHJhaW50cyA9XG5cdFx0XHRsZWFkaW5nIDogW2FjdGl2aXR5LCAxNV1cblx0XHRcdGJvdHRvbTogMTRcblx0XHRcdHdpZHRoOjE2XG5cdFx0XHRoZWlnaHQ6MjBcblx0XHRleHBvcnRzLmxheW91dCgpXG5cdFx0b2JqZWN0cyA9IG5ldyBMYXllciBzdXBlckxheWVyOmVtb2ppUGlja2VyLCBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiLCBvcGFjaXR5Oi40XG5cdFx0b2JqZWN0cy5odG1sID0gXCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0XHRcdFx0PHN2ZyB3aWR0aD0nI3tleHBvcnRzLnB4KDExKX1weCcgaGVpZ2h0PScje2V4cG9ydHMucHgoMTYpfXB4JyB2aWV3Qm94PScwIDAgMTEgMTYnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycgeG1sbnM6c2tldGNoPSdodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMnPlxuXHRcdFx0ICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy41LjIgKDI1MjM1KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHRcdCAgICA8dGl0bGU+TGlnaHRidWxiPC90aXRsZT5cblx0XHRcdCAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHRcdCAgICA8ZGVmcz48L2RlZnM+XG5cdFx0XHQgICAgPGcgaWQ9J1BhZ2UtMScgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCcgc2tldGNoOnR5cGU9J01TUGFnZSc+XG5cdFx0XHQgICAgICAgIDxnIGlkPSdpUGhvbmUtNicgc2tldGNoOnR5cGU9J01TQXJ0Ym9hcmRHcm91cCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTI0NC4wMDAwMDAsIC02MzkuMDAwMDAwKScgc3Ryb2tlPScjNEE1MzYxJz5cblx0XHRcdCAgICAgICAgICAgIDxnIGlkPSdMaWdodGJ1bGInIHNrZXRjaDp0eXBlPSdNU0xheWVyR3JvdXAnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDI0NC4wMDAwMDAsIDYzOS4wMDAwMDApJz5cblx0XHRcdCAgICAgICAgICAgICAgICA8cGF0aCBkPSdNOCwxMC40MDAyOTA0IEM5Ljc4MDgzNzk1LDkuNDg5OTM0OTEgMTEsNy42MzczNDI3MyAxMSw1LjUgQzExLDIuNDYyNDMzODggOC41Mzc1NjYxMiwwIDUuNSwwIEMyLjQ2MjQzMzg4LDAgMCwyLjQ2MjQzMzg4IDAsNS41IEMwLDcuNjM3MzQyNzMgMS4yMTkxNjIwNSw5LjQ4OTkzNDkxIDMsMTAuNDAwMjkwNCBMMywxNC4wMDIwODY5IEMzLDE1LjEwMTczOTQgMy44OTc2MTYwMiwxNiA1LjAwNDg4MTUsMTYgTDUuOTk1MTE4NSwxNiBDNy4xMDYxMDAyLDE2IDgsMTUuMTA1NTAzOCA4LDE0LjAwMjA4NjkgTDgsMTAuNDAwMjkwNCBaJyBpZD0nT3ZhbC0xNycgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCc+PC9wYXRoPlxuXHRcdFx0ICAgICAgICAgICAgICAgIDxyZWN0IGlkPSdSZWN0YW5nbGUtNTAnIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnIHg9JzMnIHk9JzEyJyB3aWR0aD0nNScgaGVpZ2h0PScxJz48L3JlY3Q+XG5cdFx0XHQgICAgICAgICAgICAgICAgPHJlY3QgaWQ9J1JlY3RhbmdsZS01MScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCcgeD0nNCcgeT0nMTMuNScgd2lkdGg9JzEuNScgaGVpZ2h0PScxJz48L3JlY3Q+XG5cdFx0XHQgICAgICAgICAgICAgICAgPHBhdGggZD0nTTUsOC41IEM1LDguNSAzLjQ5OTk5OTk5LDcuNTAwMDAwMDEgNCw3IEM0LjUwMDAwMDAxLDYuNDk5OTk5OTkgNSw3LjY2NjY2NjY3IDUuNSw4IEM1LjUsOCA2LjUsNi41MDAwMDAwMSA3LDcgQzcuNSw3LjQ5OTk5OTk5IDYsOC41IDYsOC41IEw2LDExIEw1LDExIEw1LDguNSBaJyBpZD0nUmVjdGFuZ2xlLTUyJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJz48L3BhdGg+XG5cdFx0XHQgICAgICAgICAgICA8L2c+XG5cdFx0XHQgICAgICAgIDwvZz5cblx0XHRcdCAgICA8L2c+XG5cdFx0XHQ8L3N2Zz5cIlxuXHRcdG9iamVjdHMuY29uc3RyYWludHMgPVxuXHRcdFx0bGVhZGluZyA6IFt0cmF2ZWwsIDE1XVxuXHRcdFx0Ym90dG9tOiAxNFxuXHRcdFx0d2lkdGg6MTZcblx0XHRcdGhlaWdodDoyMFxuXHRcdGV4cG9ydHMubGF5b3V0KClcblx0XHRzeW1ib2xzID0gbmV3IExheWVyIHN1cGVyTGF5ZXI6ZW1vamlQaWNrZXIsIGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCIsIG9wYWNpdHk6LjRcblx0XHRzeW1ib2xzLmh0bWwgPSBcIjw/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyc/PlxuXHRcdFx0PHN2ZyB3aWR0aD0nI3tleHBvcnRzLnB4KDE2KX1weCcgaGVpZ2h0PScje2V4cG9ydHMucHgoMTcpfXB4JyB2aWV3Qm94PScwIDAgMTUgMTcnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycgeG1sbnM6c2tldGNoPSdodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMnPlxuXHRcdFx0ICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy41LjIgKDI1MjM1KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHRcdCAgICA8dGl0bGU+T2JqZWN0cyAmYW1wOyBTeW1ib2xzPC90aXRsZT5cblx0XHRcdCAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHRcdCAgICA8ZGVmcz48L2RlZnM+XG5cdFx0XHQgICAgPGcgaWQ9J2lPUy05LUtleWJvYXJkcycgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCcgc2tldGNoOnR5cGU9J01TUGFnZSc+XG5cdFx0XHQgICAgICAgIDxnIGlkPSdpUGhvbmUtNi1Qb3J0cmFpdC1MaWdodC1Db3B5JyBza2V0Y2g6dHlwZT0nTVNBcnRib2FyZEdyb3VwJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtMzA0LjAwMDAwMCwgLTYzOC4wMDAwMDApJyBmaWxsPScjNEE1NDYxJz5cblx0XHRcdCAgICAgICAgICAgIDxnIGlkPSdLZXlib2FyZHMnIHNrZXRjaDp0eXBlPSdNU0xheWVyR3JvdXAnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDAuMDAwMDAwLCA0MDguMDAwMDAwKSc+XG5cdFx0XHQgICAgICAgICAgICAgICAgPGcgaWQ9J09iamVjdHMtJmFtcDstU3ltYm9scycgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMzA0LjAwMDAwMCwgMjMwLjAwMDAwMCknPlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA8ZyBpZD0nVGhpbmcnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDAuMDAwMDAwLCAwLjUwMDAwMCknIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnPlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9J1JlY3RhbmdsZS0xMjA5JyB4PScwJyB5PScwJyB3aWR0aD0nNycgaGVpZ2h0PScxJz48L3JlY3Q+XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0nUmVjdGFuZ2xlLTEyMDknIHg9JzAnIHk9JzInIHdpZHRoPSc3JyBoZWlnaHQ9JzEnPjwvcmVjdD5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSdSZWN0YW5nbGUtMTIxMScgeD0nMycgeT0nMycgd2lkdGg9JzEnIGhlaWdodD0nNCc+PC9yZWN0PlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA8L2c+XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9J00xMS43NSwwLjE1OTI2Mzk3OCBMMTEuNzUsMCBMMTEsMCBMMTEsNS4wOTE0OTMgQzEwLjU5MzQ0LDQuOTQyMjEzOTIgMTAuMDYzOTY2Miw0Ljk2NDUzMjI0IDkuNTU3MTUzOTksNS4xOTAxNzk1NyBDOC42OTg0OTI5Myw1LjU3MjQ4MDEgOC4yMzAwMzgzNSw2LjM5MzY1NjIxIDguNTEwODMxNDEsNy4wMjQzMjc3NCBDOC43OTE2MjQ0Nyw3LjY1NDk5OTI4IDkuNzE1MzM0NTQsNy44NTYzNDM3NSAxMC41NzM5OTU2LDcuNDc0MDQzMjEgQzExLjI3NjExODMsNy4xNjE0MzgwMyAxMS43MTczMzkzLDYuNTU1Mzg5NzIgMTEuNzAxMzU5NSw2IEwxMS43NSw2IEwxMS43NSwxLjM5Mzg1MDU2IEMxMi4zMTc1OTA4LDEuNTk1OTAwMzcgMTMsMi4wODE3NDU2IDEzLDMuMjUgQzEzLDQuMjUgMTIuNzUsNS41IDEyLjc1LDUuNSBDMTIuNzUsNS41IDEzLjc1LDQuNzUgMTMuNzUsMi41IEMxMy43NSwxLjAyMjU2MTAxIDEyLjU2NDI2NzQsMC40MDc0NzMwMTkgMTEuNzUsMC4xNTkyNjM5NzggWicgaWQ9J05vdGUnIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnPjwvcGF0aD5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgPHRleHQgaWQ9JyZhbXA7JyBza2V0Y2g6dHlwZT0nTVNUZXh0TGF5ZXInIGZvbnQtZmFtaWx5PSdTRiBVSSBEaXNwbGF5JyBmb250LXNpemU9JzkuNScgZm9udC13ZWlnaHQ9J25vcm1hbCc+XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8dHNwYW4geD0nMC4yNScgeT0nMTYnPiZhbXA7PC90c3Bhbj5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgPC90ZXh0PlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA8dGV4dCBpZD0nJScgc2tldGNoOnR5cGU9J01TVGV4dExheWVyJyBmb250LWZhbWlseT0nU0YgVUkgRGlzcGxheScgZm9udC1zaXplPSc5LjUnIGZvbnQtd2VpZ2h0PSdub3JtYWwnPlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPHRzcGFuIHg9JzcuNzUnIHk9JzE2Jz4lPC90c3Bhbj5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgPC90ZXh0PlxuXHRcdFx0ICAgICAgICAgICAgICAgIDwvZz5cblx0XHRcdCAgICAgICAgICAgIDwvZz5cblx0XHRcdCAgICAgICAgPC9nPlxuXHRcdFx0ICAgIDwvZz5cblx0XHRcdDwvc3ZnPlwiXG5cdFx0c3ltYm9scy5jb25zdHJhaW50cyA9XG5cdFx0XHRsZWFkaW5nIDogW29iamVjdHMsIDE1XVxuXHRcdFx0Ym90dG9tOiAxNFxuXHRcdFx0d2lkdGg6MTZcblx0XHRcdGhlaWdodDoyMFxuXHRcdGV4cG9ydHMubGF5b3V0KClcblx0XHRmbGFncyA9IG5ldyBMYXllciBzdXBlckxheWVyOmVtb2ppUGlja2VyLCBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiLCBvcGFjaXR5Oi40XG5cdFx0ZmxhZ3MuaHRtbCA9IFwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdFx0XHQ8c3ZnIHdpZHRoPScje2V4cG9ydHMucHgoMTEpfXB4JyBoZWlnaHQ9JyN7ZXhwb3J0cy5weCgxNSl9cHgnIHZpZXdCb3g9JzAgMCAxMSAxNScgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyB4bWxuczpza2V0Y2g9J2h0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaC9ucyc+XG5cdFx0XHQgICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjUuMiAoMjUyMzUpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdFx0ICAgIDx0aXRsZT5GbGFnPC90aXRsZT5cblx0XHRcdCAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHRcdCAgICA8ZGVmcz48L2RlZnM+XG5cdFx0XHQgICAgPGcgaWQ9J2lPUy05LUtleWJvYXJkcycgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCcgc2tldGNoOnR5cGU9J01TUGFnZSc+XG5cdFx0XHQgICAgICAgIDxnIGlkPSdpUGhvbmUtNi1Qb3J0cmFpdC1MaWdodC1Db3B5JyBza2V0Y2g6dHlwZT0nTVNBcnRib2FyZEdyb3VwJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtMjc1LjAwMDAwMCwgLTYzOS4wMDAwMDApJz5cblx0XHRcdCAgICAgICAgICAgIDxnIGlkPSdLZXlib2FyZHMnIHNrZXRjaDp0eXBlPSdNU0xheWVyR3JvdXAnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDAuMDAwMDAwLCA0MDguMDAwMDAwKSc+XG5cdFx0XHQgICAgICAgICAgICAgICAgPGcgaWQ9J0ZsYWcnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDI3NS4wMDAwMDAsIDIzMS41MDAwMDApJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJz5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9J1BvbGUnIGZpbGw9JyM0QTU0NjEnIHg9JzAnIHk9JzAnIHdpZHRoPScxJyBoZWlnaHQ9JzE0Jz48L3JlY3Q+XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9J00xLDEgQzEsMSAxLjI1LDIgMy41LDIgQzUuNzUsMiA2LDAuNzQ5OTk5OTk4IDgsMC43NSBDMTAsMC43NDk5OTk5OTggMTAsMS41IDEwLDEuNSBMMTAsNy41IEMxMCw3LjUgMTAsNi41IDgsNi41IEM2LDYuNSA0LjgwNjIzOTExLDggMy41LDggQzIuMTkzNzYwODksOCAxLDcgMSw3IEwxLDEgWicgc3Ryb2tlPScjNEE1NDYxJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJz48L3BhdGg+XG5cdFx0XHQgICAgICAgICAgICAgICAgPC9nPlxuXHRcdFx0ICAgICAgICAgICAgPC9nPlxuXHRcdFx0ICAgICAgICA8L2c+XG5cdFx0XHQgICAgPC9nPlxuXHRcdFx0PC9zdmc+XCJcblx0XHRmbGFncy5jb25zdHJhaW50cyA9XG5cdFx0XHRsZWFkaW5nIDogW3N5bWJvbHMsIDE1XVxuXHRcdFx0Ym90dG9tOiAxNFxuXHRcdFx0d2lkdGg6MTZcblx0XHRcdGhlaWdodDoyMFxuXHRcdGV4cG9ydHMubGF5b3V0KClcblxuXHRcdGxvYWRFbW9qaXMgPSAoZW0pIC0+XG5cdFx0XHRyb3crKyBcblx0XHRcdGluZGV4ID0gZW1vamlzQXJyYXkuaW5kZXhPZihlbSlcblx0XHRcdGNvbCA9IE1hdGguZmxvb3IoaW5kZXgvNSlcblx0XHRcdGlmIHJvdyA+IDRcblx0XHRcdFx0cm93ID0gMCBcblx0XHRcdGVtb2ppID0gbmV3IExheWVyIHg6Y29sKmJveCArIChlbW9qaVNwYWNlciAqIGNvbCkgKyBleHBvcnRzLnB4KDMpLCB5OnJvdypib3ggKyAoZW1vamlTcGFjZXIgKiByb3cpICsgZXhwb3J0cy5weCg0MCksIHN1cGVyTGF5ZXI6ZW1vamlHYWxsZXkuY29udGVudCwgd2lkdGg6Ym94LCBoZWlnaHQ6Ym94LCBuYW1lOmRlY29kZVVSSUNvbXBvbmVudChlbSksIGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCJcblx0XHRcdGVtb2ppLmh0bWwgPSBkZWNvZGVVUklDb21wb25lbnQoZW0pXG5cdFx0XHRlbW9qaS5zdHlsZSA9IHtcblx0XHRcdFx0XCJmb250LXNpemVcIiA6IGV4cG9ydHMucHgoMjYpICsgXCJweFwiXG5cdFx0XHRcdFwibGluZS1oZWlnaHRcIiA6IGJveCArIFwicHhcIlxuXHRcdFx0XHRcInRleHQtYWxpZ25cIiA6IFwiY2VudGVyXCJcblx0XHRcdH1cblx0XHRcdGVtb2ppLm9uIEV2ZW50cy5DbGljaywgLT5cblx0XHRcdFx0cHJpbnQgQC5uYW1lXG5cdFx0XHRlbW9qaXNMb2FkZWQrK1xuXHRcdFx0cHJpbnQgZW1vamlzTG9hZGVkXG5cblx0XHRpbmMgPSAyMDBcblx0XHRmaXJzdExvYWQgPSAuMVxuXHRcdHRpbWVJbmMgPSAyXG5cdFx0ZnVsbEFtb3VudCA9IGVtb2ppc0FycmF5Lmxlbmd0aFxuXHRcdGxvYWRzID0gTWF0aC5jZWlsKGZ1bGxBbW91bnQgLyBpbmMpIC0gMVxuXHRcdHBhcnRpYWxBbW91bnQgPSBmdWxsQW1vdW50ICUgaW5jXG5cdFx0ZW1vamlzTG9hZGVkID0gMFxuXHRcdGZvciBpIGluIFswLi5sb2Fkc11cblx0XHRcdGkrK1xuXHRcdFx0XG5cdFx0I1Njcm9sbCBMb2FkXG5cdFx0ZW1vamlHYWxsZXkub24gRXZlbnRzLk1vdmUsIC0+XG5cdFx0XHRpZiBlbW9qaUdhbGxleS5zY3JvbGxYID4gMjAwMCAmJiBlbW9qaXNMb2FkZWQgPCA0MDBcblx0XHRcdFx0Zm9yIGVtIGluIGVtb2ppc0FycmF5WzIwMC4uLjQwMF1cblx0XHRcdFx0XHRsb2FkRW1vamlzKGVtKVxuXHRcdFx0XHRlbW9qaUdhbGxleS5zY3JvbGxYID0gMjAwMVxuXHRcdFx0aWYgZW1vamlHYWxsZXkuc2Nyb2xsWCA+IDUwMDAgJiYgZW1vamlzTG9hZGVkIDwgNjAwXG5cdFx0XHRcdGZvciBlbSBpbiBlbW9qaXNBcnJheVs0MDAuLi42MDBdXG5cdFx0XHRcdFx0bG9hZEVtb2ppcyhlbSlcblx0XHRcdFx0ZW1vamlHYWxsZXkuc2Nyb2xsWCA9IDUwMDFcblx0XHRcdGlmIGVtb2ppR2FsbGV5LnNjcm9sbFggPiA3NTAwICYmIGVtb2ppc0xvYWRlZCA8IDgwMFxuXHRcdFx0XHRmb3IgZW0gaW4gZW1vamlzQXJyYXlbNjAwLi4uODAwXVxuXHRcdFx0XHRcdGxvYWRFbW9qaXMoZW0pXG5cdFx0XHRcdGVtb2ppR2FsbGV5LnNjcm9sbFggPSA3NTAxXG5cdFx0XHRpZiBlbW9qaUdhbGxleS5zY3JvbGxYID4gMTAwMDAgJiYgZW1vamlzTG9hZGVkIDwgMTAwMFxuXHRcdFx0XHRmb3IgZW0gaW4gZW1vamlzQXJyYXlbODAwLi4uMTAwMF1cblx0XHRcdFx0XHRsb2FkRW1vamlzKGVtKVxuXHRcdFx0XHRlbW9qaUdhbGxleS5zY3JvbGxYID0gMTAwMDFcblx0XHRcdGlmIGVtb2ppR2FsbGV5LnNjcm9sbFggPiAxMjUwMCAmJiBlbW9qaXNMb2FkZWQgPCAxMjAwXG5cdFx0XHRcdGZvciBlbSBpbiBlbW9qaXNBcnJheVsxMDAwLi4uMTI5N11cblx0XHRcdFx0XHRsb2FkRW1vamlzKGVtKVxuXHRcdFx0XHRlbW9qaUdhbGxleS5zY3JvbGxYID0gMTI1MDFcblxuXHRcdCNUaW1lIExvYWRcblx0XHRVdGlscy5kZWxheSAxLCAtPiBcblx0XHRcdGlmIGVtb2ppc0xvYWRlZCA8IDQwMCAmJiBlbW9qaUdhbGxleS5zY3JvbGxYID09IDBcblx0XHRcdFx0c2Nyb2xsWCA9IGVtb2ppR2FsbGV5LnNjcm9sbFhcblx0XHRcdFx0Zm9yIGVtIGluIGVtb2ppc0FycmF5WzIwMC4uLjQwMF1cblx0XHRcdFx0XHRsb2FkRW1vamlzKGVtKVxuXHRcdFV0aWxzLmRlbGF5IDIuNSwgLT4gXG5cdFx0XHRpZiBlbW9qaXNMb2FkZWQgPCA2MDAgJiYgZW1vamlHYWxsZXkuc2Nyb2xsWCA9PSAwXG5cdFx0XHRcdHNjcm9sbFggPSBlbW9qaUdhbGxleS5zY3JvbGxYXG5cdFx0XHRcdGZvciBlbSBpbiBlbW9qaXNBcnJheVs0MDAuLi42MDBdXG5cdFx0XHRcdFx0bG9hZEVtb2ppcyhlbSlcblx0XHRVdGlscy5kZWxheSAyLjUsIC0+IFxuXHRcdFx0aWYgZW1vamlzTG9hZGVkIDwgODAwICYmIGVtb2ppR2FsbGV5LnNjcm9sbFggPT0gMFxuXHRcdFx0XHRzY3JvbGxYID0gZW1vamlHYWxsZXkuc2Nyb2xsWFxuXHRcdFx0XHRmb3IgZW0gaW4gZW1vamlzQXJyYXlbNjAwLi4uODAwXVxuXHRcdFx0XHRcdGxvYWRFbW9qaXMoZW0pXG5cdFx0VXRpbHMuZGVsYXkgNS41LCAtPiBcblx0XHRcdGlmIGVtb2ppc0xvYWRlZCA8IDEwMDAgJiYgZW1vamlHYWxsZXkuc2Nyb2xsWCA9PSAwXG5cdFx0XHRcdHNjcm9sbFggPSBlbW9qaUdhbGxleS5zY3JvbGxYXG5cdFx0XHRcdGZvciBlbSBpbiBlbW9qaXNBcnJheVs4MDAuLi4xMDAwXVxuXHRcdFx0XHRcdGxvYWRFbW9qaXMoZW0pXG5cdFx0VXRpbHMuZGVsYXkgNywgLT4gXG5cdFx0XHRpZiBlbW9qaXNMb2FkZWQgPCAxMjk3ICYmIGVtb2ppR2FsbGV5LnNjcm9sbFggPT0gMFxuXHRcdFx0XHRzY3JvbGxYID0gZW1vamlHYWxsZXkuc2Nyb2xsWFxuXHRcdFx0XHRmb3IgZW0gaW4gZW1vamlzQXJyYXlbMTAwMC4uLjEyOTddXG5cdFx0XHRcdFx0bG9hZEVtb2ppcyhlbSlcblxuXG5cdFx0Zm9yIGVtIGluIGZyZXFFbW9qaXNBcnJheVxuXHRcdFx0bG9hZEVtb2ppcyhlbSlcblx0XHRmb3IgZW0gaW4gZW1vamlzQXJyYXlbMC4uLmluY11cblx0XHRcdGxvYWRFbW9qaXMoZW0pXG5cblxuXHRcdGZvciBzZWMgaW4gZW1vamlTZWN0aW9uc1xuXHRcdFx0aW5kZXggPSBlbW9qaVNlY3Rpb25zLmluZGV4T2Yoc2VjKVxuXHRcdFx0dGl0bGUgPSBuZXcgTGF5ZXIgc3VwZXJMYXllcjplbW9qaUdhbGxleS5jb250ZW50LCBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiLCB4OmluZGV4KjUwMDAgKyBleHBvcnRzLnB4KDgpLCBoZWlnaHQ6ODAsIHdpZHRoOjgwMFxuXHRcdFx0dGl0bGUuaHRtbCA9IHNlY1xuXHRcdFx0dGl0bGUuc3R5bGUgPSB7XG5cdFx0XHRcdFwiZm9udC1zaXplXCIgOiBleHBvcnRzLnB4KDEyKSArIFwicHhcIlxuXHRcdFx0XHRcImZvbnQtd2VpZ2h0XCIgOiA2MDBcblx0XHRcdFx0XCJmb250LWZhbWlseVwiIDogJy1hcHBsZS1zeXN0ZW0sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYnXG5cdFx0XHRcdCdsaW5lLWhlaWdodCcgOiBleHBvcnRzLnB4KDQyKSArIFwicHhcIlxuXHRcdFx0XHQnbGV0dGVyLXNwYWNpbmcnIDogZXhwb3J0cy5weCgwLjcpICsgXCJweFwiXG5cdFx0XHRcdCdjb2xvcicgOiBcIiNBNUE2QTlcIlxuXHRcdFx0XHQndGV4dC10cmFuc2Zvcm0nIDogJ3VwcGVyY2FzZSdcblx0XHRcdH1cblxuXG5cdGVtb2ppS2V5Lm9uIEV2ZW50cy5Ub3VjaEVuZCwgLT5cblx0XHRlbW9qaUtleS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNBQUIzQkNcIlxuXG5cblx0cmV0dXJuS2V5ID0gbmV3IExheWVyIHN1cGVyTGF5ZXI6Ym9hcmQsIGJvcmRlclJhZGl1czpleHBvcnRzLnB4KDUpLCBiYWNrZ3JvdW5kQ29sb3I6XCIjQUFCM0JDXCIsIHNoYWRvd1k6ZXhwb3J0cy5weCgxKSwgc2hhZG93Q29sb3I6XCIjOTI5NDk4XCIsIGNvbG9yOlwiYmxhY2tcIlxuXHRyZXR1cm5LZXkuY29uc3RyYWludHMgPSAod2lkdGg6ODcuNSwgaGVpZ2h0OjQyLCB0cmFpbGluZzozLCBib3R0b206NClcblx0cmV0dXJuS2V5Lmh0bWwgPSBcInJldHVyblwiXG5cdHJldHVybktleS5zdHlsZSA9IHtcblx0XHRcImZvbnQtc2l6ZVwiIDogZXhwb3J0cy5weCgxNikgKyBcInB4XCJcblx0XHRcImZvbnQtd2VpZ2h0XCIgOiA0MDBcblx0XHRcImZvbnQtZmFtaWx5XCIgOiAnLWFwcGxlLXN5c3RlbSwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZidcblx0XHQndGV4dC1hbGlnbicgOiAnY2VudGVyJ1xuXHRcdCdsaW5lLWhlaWdodCcgOiBleHBvcnRzLnB4KDQyKSArIFwicHhcIlxuXG5cdH1cblx0ZXhwb3J0cy5sYXlvdXQoKVxuXG5cdHNwYWNlS2V5ID0gbmV3IExheWVyIHN1cGVyTGF5ZXI6Ym9hcmQsIGJvcmRlclJhZGl1czpleHBvcnRzLnB4KDUpLCBiYWNrZ3JvdW5kQ29sb3I6XCJ3aGl0ZVwiLCBzaGFkb3dZOmV4cG9ydHMucHgoMSksIHNoYWRvd0NvbG9yOlwiIzkyOTQ5OFwiLCBjb2xvcjpcImJsYWNrXCJcblx0c3BhY2VLZXkuY29uc3RyYWludHMgPSAod2lkdGg6MTgwLCBoZWlnaHQ6NDIsIGxlYWRpbmc6W2Vtb2ppS2V5LCA2XSwgYm90dG9tOjQpXG5cdHNwYWNlS2V5Lmh0bWwgPSBcInNwYWNlXCJcblx0c3BhY2VLZXkuc3R5bGUgPSB7XG5cdFx0XCJmb250LXNpemVcIiA6IGV4cG9ydHMucHgoMTYpICsgXCJweFwiXG5cdFx0XCJmb250LXdlaWdodFwiIDogNDAwXG5cdFx0XCJmb250LWZhbWlseVwiIDogJy1hcHBsZS1zeXN0ZW0sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYnXG5cdFx0J3RleHQtYWxpZ24nIDogJ2NlbnRlcidcblx0XHQnbGluZS1oZWlnaHQnIDogZXhwb3J0cy5weCg0MikgKyBcInB4XCJcblxuXHR9XG5cdGV4cG9ydHMubGF5b3V0KClcblxuXG5cdHNwYWNlS2V5Lm9uIEV2ZW50cy5Ub3VjaFN0YXJ0LCAtPlxuXHRcdHNwYWNlS2V5LmJhY2tncm91bmRDb2xvciA9IFwiI0FBQjNCQ1wiXG5cdHNwYWNlS2V5Lm9uIEV2ZW50cy5Ub3VjaEVuZCwgLT5cblx0XHRzcGFjZUtleS5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCJcblxuXG5cdHJldHVybktleS5vbiBFdmVudHMuVG91Y2hTdGFydCwgLT5cblx0XHRyZXR1cm5LZXkuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiXG5cdHJldHVybktleS5vbiBFdmVudHMuVG91Y2hFbmQsIC0+XG5cdFx0cmV0dXJuS2V5LmJhY2tncm91bmRDb2xvciA9IFwiI0FBQjNCQ1wiXG5cblxuXHRyZXR1cm4ge1xuXHRcdFwiYm9hcmRcIiA6IGJvYXJkXG5cdFx0XCJrZXlzXCIgOiBrZXlzQXJyYXlcblx0XHRcImtleVwiIDoge1xuXHRcdFx0XCJxXCIgOiBrZXlzQXJyYXlbMF1cblx0XHRcdFwid1wiIDoga2V5c0FycmF5WzFdXG5cdFx0XHRcImVcIiA6IGtleXNBcnJheVsyXVxuXHRcdFx0XCJyXCIgOiBrZXlzQXJyYXlbM11cblx0XHRcdFwidFwiIDoga2V5c0FycmF5WzRdXG5cdFx0XHRcInlcIiA6IGtleXNBcnJheVs1XVxuXHRcdFx0XCJ1XCIgOiBrZXlzQXJyYXlbNl1cblx0XHRcdFwiaVwiIDoga2V5c0FycmF5WzddXG5cdFx0XHRcIm9cIiA6IGtleXNBcnJheVs4XVxuXHRcdFx0XCJwXCIgOiBrZXlzQXJyYXlbOV1cblx0XHRcdFwiYVwiIDoga2V5c0FycmF5WzEwXVxuXHRcdFx0XCJzXCIgOiBrZXlzQXJyYXlbMTFdXG5cdFx0XHRcImRcIiA6IGtleXNBcnJheVsxMl1cblx0XHRcdFwiZlwiIDoga2V5c0FycmF5WzEzXVxuXHRcdFx0XCJnXCIgOiBrZXlzQXJyYXlbMTRdXG5cdFx0XHRcImhcIiA6IGtleXNBcnJheVsxNV1cblx0XHRcdFwialwiIDoga2V5c0FycmF5WzE2XVxuXHRcdFx0XCJrXCIgOiBrZXlzQXJyYXlbMTddXG5cdFx0XHRcImxcIiA6IGtleXNBcnJheVsxOF1cblx0XHRcdFwielwiIDoga2V5c0FycmF5WzE5XVxuXHRcdFx0XCJ4XCIgOiBrZXlzQXJyYXlbMjBdXG5cdFx0XHRcImNcIiA6IGtleXNBcnJheVsyMV1cblx0XHRcdFwidlwiIDoga2V5c0FycmF5WzIyXVxuXHRcdFx0XCJiXCIgOiBrZXlzQXJyYXlbMjNdXG5cdFx0XHRcIm5cIiA6IGtleXNBcnJheVsyNF1cblx0XHRcdFwibVwiIDoga2V5c0FycmF5WzI1XVxuXHRcdH1cblx0fVxuXG5cbiIsIiMgQWRkIHRoZSBmb2xsb3dpbmcgbGluZSB0byB5b3VyIHByb2plY3QgaW4gRnJhbWVyIFN0dWRpby4gXG4jIG15TW9kdWxlID0gcmVxdWlyZSBcIm15TW9kdWxlXCJcbiMgUmVmZXJlbmNlIHRoZSBjb250ZW50cyBieSBuYW1lLCBsaWtlIG15TW9kdWxlLm15RnVuY3Rpb24oKSBvciBteU1vZHVsZS5teVZhclxuXG5leHBvcnRzLm15VmFyID0gXCJteVZhcmlhYmxlXCJcblxuZXhwb3J0cy5teUZ1bmN0aW9uID0gLT5cblx0cHJpbnQgXCJteUZ1bmN0aW9uIGlzIHJ1bm5pbmdcIlxuXG5leHBvcnRzLm15QXJyYXkgPSBbMSwgMiwgM10iXX0=
