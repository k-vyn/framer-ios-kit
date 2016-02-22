require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"iOSKit":[function(require,module,exports){
var defaults, error, framerDevices, layoutChange, layoutSize, onResize;

framerDevices = {
  "fullscreen": {
    height: window.innerHeight,
    width: window.innerWidth,
    scale: 1,
    mobile: false,
    platform: "web"
  },
  "desktop-safari-1024-600": {
    height: 600,
    width: 1024,
    scale: 1,
    mobile: false,
    platform: "web"
  },
  "desktop-safari-1280-800": {
    height: 800,
    width: 1280,
    scale: 1,
    mobile: false,
    platform: "web"
  },
  "desktop-safari-1440-900": {
    height: 900,
    width: 1440,
    scale: 1,
    mobile: false,
    platform: "web"
  },
  "iphone-5s-spacegray": {
    height: 1136,
    width: 640,
    scale: 2,
    mobile: true,
    platform: "iOS"
  },
  "iphone-5s-spacegray-hand": {
    height: 1136,
    width: 640,
    scale: 2,
    mobile: true,
    platform: "iOS"
  },
  "iphone-5s-silver": {
    height: 1136,
    width: 640,
    scale: 2,
    mobile: true,
    platform: "iOS"
  },
  "iphone-5s-silver-hand": {
    height: 1136,
    width: 640,
    scale: 2,
    mobile: true,
    platform: "iOS"
  },
  "iphone-5s-gold": {
    height: 1136,
    width: 640,
    scale: 2,
    mobile: true,
    platform: "iOS"
  },
  "iphone-5s-gold-hand": {
    height: 1136,
    width: 640,
    scale: 2,
    mobile: true,
    platform: "iOS"
  },
  "iphone-5c-yellow-hand": {
    height: 2048,
    width: 1536,
    scale: 2,
    mobile: true,
    platform: "iOS"
  },
  "iphone-5c-green": {
    height: 1136,
    width: 640,
    scale: 2,
    mobile: true,
    platform: "iOS"
  },
  "iphone-5c-green-hand": {
    height: 1136,
    width: 640,
    scale: 2,
    mobile: true,
    platform: "iOS"
  },
  "iphone-5c-blue": {
    height: 1136,
    width: 640,
    scale: 2,
    mobile: true,
    platform: "iOS"
  },
  "iphone-5c-blue-hand": {
    height: 1136,
    width: 640,
    scale: 2,
    mobile: true,
    platform: "iOS"
  },
  "iphone-5c-red": {
    height: 1136,
    width: 640,
    scale: 2,
    mobile: true,
    platform: "iOS"
  },
  "iphone-5c-red-hand": {
    height: 1136,
    width: 640,
    scale: 2,
    mobile: true,
    platform: "iOS"
  },
  "iphone-5c-white": {
    height: 1136,
    width: 640,
    scale: 2,
    mobile: true,
    platform: "iOS"
  },
  "iphone-5c-white-hand": {
    height: 1136,
    width: 640,
    scale: 2,
    mobile: true,
    platform: "iOS"
  },
  "iphone-5c-yellow": {
    height: 1136,
    width: 640,
    scale: 2,
    mobile: true,
    platform: "iOS"
  },
  "iphone-5c-pink-hand": {
    height: 1136,
    width: 640,
    scale: 2,
    mobile: true,
    platform: "iOS"
  },
  "iphone-5c-pink": {
    height: 1136,
    width: 640,
    scale: 2,
    mobile: true,
    platform: "iOS"
  },
  "iphone-6-spacegray": {
    height: 1334,
    width: 750,
    scale: 2,
    mobile: true,
    platform: "iOS"
  },
  "iphone-6-spacegray-hand": {
    height: 1334,
    width: 750,
    scale: 2,
    mobile: true,
    platform: "iOS"
  },
  "iphone-6-silver": {
    height: 1334,
    width: 750,
    scale: 2,
    mobile: true,
    platform: "iOS"
  },
  "iphone-6-silver-hand": {
    height: 1334,
    width: 750,
    scale: 2,
    mobile: true,
    platform: "iOS"
  },
  "iphone-6-gold": {
    height: 1334,
    width: 750,
    scale: 2,
    mobile: true,
    platform: "iOS"
  },
  "iphone-6-gold-hand": {
    height: 1334,
    width: 750,
    scale: 2,
    mobile: true,
    platform: "iOS"
  },
  "iphone-6plus-gold-hand": {
    height: 2208,
    width: 1242,
    scale: 3,
    mobile: true,
    platform: "iOS"
  },
  "iphone-6plus-gold": {
    height: 2208,
    width: 1242,
    scale: 3,
    mobile: true,
    platform: "iOS"
  },
  "iphone-6plus-silver-hand": {
    height: 2208,
    width: 1242,
    scale: 3,
    mobile: true,
    platform: "iOS"
  },
  "iphone-6plus-silver": {
    height: 2208,
    width: 1242,
    scale: 3,
    mobile: true,
    platform: "iOS"
  },
  "iphone-6plus-spacegray-hand": {
    height: 2208,
    width: 1242,
    scale: 3,
    mobile: true,
    platform: "iOS"
  },
  "iphone-6plus-spacegray": {
    height: 2208,
    width: 1242,
    scale: 3,
    mobile: true,
    platform: "iOS"
  },
  "iphone6plus-gold-hand": {
    height: 2208,
    width: 1242,
    scale: 3,
    mobile: true,
    platform: "iOS"
  },
  "iphone6plus-gold": {
    height: 2208,
    width: 1242,
    scale: 3,
    mobile: true,
    platform: "iOS"
  },
  "iphone6plus-silver-hand": {
    height: 2208,
    width: 1242,
    scale: 3,
    mobile: true,
    platform: "iOS"
  },
  "iphone6plus-silver": {
    height: 2208,
    width: 1242,
    scale: 3,
    mobile: true,
    platform: "iOS"
  },
  "iphone6plus-spacegray-hand": {
    height: 2208,
    width: 1242,
    scale: 3,
    mobile: true,
    platform: "iOS"
  },
  "iphone6plus-spacegray": {
    height: 2208,
    width: 1242,
    scale: 3,
    mobile: true,
    platform: "iOS"
  },
  "ipad-air-silver-hand": {
    height: 2048,
    width: 1536,
    scale: 2,
    mobile: true,
    platform: "iOS"
  },
  "ipad-air-silver": {
    height: 2048,
    width: 1536,
    scale: 2,
    mobile: true,
    platform: "iOS"
  },
  "ipad-air-spacegray-hand": {
    height: 2048,
    width: 1536,
    scale: 2,
    mobile: true,
    platform: "iOS"
  },
  "ipad-air-spacegray": {
    height: 2048,
    width: 1536,
    scale: 2,
    mobile: true,
    platform: "iOS"
  },
  "ipad-mini-spacegrey": {
    height: 1024,
    width: 768,
    scale: 1,
    mobile: true,
    platform: "iOS"
  },
  "ipad-mini-spacegrey-hand": {
    height: 1024,
    width: 768,
    scale: 1,
    mobile: true,
    platform: "iOS"
  },
  "ipad-mini-silver": {
    height: 1024,
    width: 768,
    scale: 1,
    mobile: true,
    platform: "iOS"
  },
  "ipad-mini-silver-hand": {
    height: 1024,
    width: 768,
    scale: 1,
    mobile: true,
    platform: "iOS"
  },
  "applewatch-38-black-bracelet": {
    height: 340,
    width: 272,
    scale: 2,
    mobile: true,
    platform: "watchOS"
  },
  "applewatch-38-steel-bracelet": {
    height: 340,
    width: 272,
    scale: 2,
    mobile: true,
    platform: "watchOS"
  },
  "applewatch-42-black-bracelet": {
    height: 390,
    width: 312,
    scale: 2,
    mobile: true,
    platform: "watchOS"
  },
  "applewatch-42-steel-bracelet": {
    height: 390,
    width: 312,
    scale: 2,
    mobile: true,
    platform: "watchOS"
  },
  "applewatchedition-38-gold-buckle-blue": {
    height: 340,
    width: 272,
    scale: 2,
    mobile: true,
    platform: "watchOS"
  },
  "applewatchedition-38-gold-buckle-gray": {
    height: 340,
    width: 272,
    scale: 2,
    mobile: true,
    platform: "watchOS"
  },
  "applewatchedition-38-gold-buckle-red": {
    height: 340,
    width: 272,
    scale: 2,
    mobile: true,
    platform: "watchOS"
  },
  "applewatchedition-38-gold-sportband-black": {
    height: 340,
    width: 272,
    scale: 2,
    mobile: true,
    platform: "watchOS"
  },
  "applewatchedition-38-gold-sportband-white": {
    height: 340,
    width: 272,
    scale: 2,
    mobile: true,
    platform: "watchOS"
  },
  "applewatchedition-42-gold-buckle-blue": {
    height: 390,
    width: 312,
    scale: 2,
    mobile: true,
    platform: "watchOS"
  },
  "applewatchedition-42-gold-buckle-gray": {
    height: 390,
    width: 312,
    scale: 2,
    mobile: true,
    platform: "watchOS"
  },
  "applewatchedition-42-gold-buckle-red": {
    height: 390,
    width: 312,
    scale: 2,
    mobile: true,
    platform: "watchOS"
  },
  "applewatchedition-42-gold-sportband-black": {
    height: 390,
    width: 312,
    scale: 2,
    mobile: true,
    platform: "watchOS"
  },
  "applewatchedition-42-gold-sportband-white": {
    height: 390,
    width: 312,
    scale: 2,
    mobile: true,
    platform: "watchOS"
  },
  "applewatchsport-38-aluminum-sportband-black": {
    height: 340,
    width: 272,
    scale: 2,
    mobile: true,
    platform: "watchOS"
  },
  "applewatchsport-38-aluminum-sportband-blue": {
    height: 340,
    width: 272,
    scale: 2,
    mobile: true,
    platform: "watchOS"
  },
  "applewatchsport-38-aluminum-sportband-green": {
    height: 340,
    width: 272,
    scale: 2,
    mobile: true,
    platform: "watchOS"
  },
  "applewatchsport-38-aluminum-sportband-pink": {
    height: 340,
    width: 272,
    scale: 2,
    mobile: true,
    platform: "watchOS"
  },
  "applewatchsport-38-aluminum-sportband-white": {
    height: 340,
    width: 272,
    scale: 2,
    mobile: true,
    platform: "watchOS"
  },
  "applewatchsport-42-aluminum-sportband-black": {
    height: 390,
    width: 312,
    scale: 2,
    mobile: true,
    platform: "watchOS"
  },
  "applewatchsport-42-aluminum-sportband-blue": {
    height: 390,
    width: 312,
    scale: 2,
    mobile: true,
    platform: "watchOS"
  },
  "applewatchsport-42-aluminum-sportband-green": {
    height: 390,
    width: 312,
    scale: 2,
    mobile: true,
    platform: "watchOS"
  },
  "applewatchsport-42-aluminum-sportband-pink": {
    height: 390,
    width: 312,
    scale: 2,
    mobile: true,
    platform: "watchOS"
  },
  "applewatchsport-42-aluminum-sportband-white": {
    height: 390,
    width: 312,
    scale: 2,
    mobile: true,
    platform: "watchOS"
  },
  "nexus-5-black": {
    height: 1920,
    width: 1080,
    scale: 3,
    mobile: true,
    platform: "android"
  },
  "nexus-5-black-hand": {
    height: 1920,
    width: 1080,
    scale: 3,
    mobile: true,
    platform: "android"
  },
  "nexus-9": {
    height: 2048,
    width: 1536,
    scale: 2,
    mobile: true,
    platform: "android"
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
  }
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
  var c, i, j, len, len1, p, ref, ref1, results;
  if (layer === void 0) {
    this.array = Framer.CurrentContext.layers;
  } else {
    this.array = [layer];
  }
  ref = this.array;
  results = [];
  for (i = 0, len = ref.length; i < len; i++) {
    layer = ref[i];
    if (layer.constraints !== void 0) {
      ref1 = defaults.constraintProps;
      for (j = 0, len1 = ref1.length; j < len1; j++) {
        p = ref1[j];
        layoutSize(layer, p);
      }
      results.push((function() {
        var k, len2, ref2, results1;
        ref2 = defaults.constraintTypes;
        results1 = [];
        for (k = 0, len2 = ref2.length; k < len2; k++) {
          c = ref2[k];
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
  var i, j, len, len1, objProp, objProp2, object, opp, prop, ref, ref1, results, superTrait, trait;
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
          for (i = 0, len = ref.length; i < len; i++) {
            object = ref[i];
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
            for (j = 0, len1 = ref1.length; j < len1; j++) {
              object = ref1[j];
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

exports.Keyboard = function(array) {
  var board, box, i, index, key, keyPopUp, keysArray, len, letter, lettersArray, path, rowIndex, rowsMap, spacer;
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
      "padding": 4 * exports.scale,
      "startIndex": 0,
      "endIndex": 9,
      "marginTop": 10 * exports.scale
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
  for (i = 0, len = lettersArray.length; i < len; i++) {
    letter = lettersArray[i];
    index = lettersArray.indexOf(letter);
    key = new Layer({
      name: letter,
      superLayer: board,
      borderRadius: 5 * exports.scale,
      backgroundColor: "white",
      color: "black",
      shadowY: 1,
      shadowColor: "black",
      shadowOpacity: .25
    });
    keyPopUp.bringToFront();
    box.bringToFront();
    if (exports.scale === 2) {
      key.constraints = {
        width: 32,
        height: 44
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
      this.keyHeight = exports.px(122);
      this.keyWidth = exports.px(65);
      this.lineHeight = this.keyWidth + "px";
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
      'line-height': key.height - exports.px(5) + "px"
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
    board.on(Events.TouchStart, function() {});
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
    board.on(Events.TouchEnd, function() {
      return keyPopUp.visible = false;
    });
  }
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvS2V2eW4vRHJvcGJveCAoUGVyc29uYWwpL0ZyYW1lciBQcm90b3R5cGVzL2ZyYW1lci1pb3Mta2l0L0RlbW8uZnJhbWVyL21vZHVsZXMvaU9TS2l0LmNvZmZlZSIsIi9Vc2Vycy9LZXZ5bi9Ecm9wYm94IChQZXJzb25hbCkvRnJhbWVyIFByb3RvdHlwZXMvZnJhbWVyLWlvcy1raXQvRGVtby5mcmFtZXIvbW9kdWxlcy9teU1vZHVsZS5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNFQSxJQUFBOztBQUFBLGFBQUEsR0FBZ0I7RUFFaEIsWUFBQSxFQUFlO0lBQUUsTUFBQSxFQUFRLE1BQU0sQ0FBQyxXQUFqQjtJQUE4QixLQUFBLEVBQU8sTUFBTSxDQUFDLFVBQTVDO0lBQXdELEtBQUEsRUFBTSxDQUE5RDtJQUFpRSxNQUFBLEVBQU8sS0FBeEU7SUFBK0UsUUFBQSxFQUFTLEtBQXhGO0dBRkM7RUFLaEIseUJBQUEsRUFBMkI7SUFBRSxNQUFBLEVBQVEsR0FBVjtJQUFlLEtBQUEsRUFBTyxJQUF0QjtJQUE0QixLQUFBLEVBQU8sQ0FBbkM7SUFBc0MsTUFBQSxFQUFPLEtBQTdDO0lBQW9ELFFBQUEsRUFBUyxLQUE3RDtHQUxYO0VBTWhCLHlCQUFBLEVBQTJCO0lBQUUsTUFBQSxFQUFRLEdBQVY7SUFBZSxLQUFBLEVBQU8sSUFBdEI7SUFBNEIsS0FBQSxFQUFPLENBQW5DO0lBQXNDLE1BQUEsRUFBTyxLQUE3QztJQUFvRCxRQUFBLEVBQVMsS0FBN0Q7R0FOWDtFQU9oQix5QkFBQSxFQUEyQjtJQUFFLE1BQUEsRUFBUSxHQUFWO0lBQWUsS0FBQSxFQUFPLElBQXRCO0lBQTRCLEtBQUEsRUFBTyxDQUFuQztJQUFzQyxNQUFBLEVBQU8sS0FBN0M7SUFBb0QsUUFBQSxFQUFTLEtBQTdEO0dBUFg7RUFZaEIscUJBQUEsRUFBdUI7SUFBRSxNQUFBLEVBQVEsSUFBVjtJQUFnQixLQUFBLEVBQU8sR0FBdkI7SUFBNEIsS0FBQSxFQUFPLENBQW5DO0lBQXNDLE1BQUEsRUFBTyxJQUE3QztJQUFtRCxRQUFBLEVBQVMsS0FBNUQ7R0FaUDtFQWFoQiwwQkFBQSxFQUE0QjtJQUFFLE1BQUEsRUFBUSxJQUFWO0lBQWdCLEtBQUEsRUFBTyxHQUF2QjtJQUE0QixLQUFBLEVBQU8sQ0FBbkM7SUFBc0MsTUFBQSxFQUFPLElBQTdDO0lBQW1ELFFBQUEsRUFBUyxLQUE1RDtHQWJaO0VBY2hCLGtCQUFBLEVBQW9CO0lBQUUsTUFBQSxFQUFRLElBQVY7SUFBZ0IsS0FBQSxFQUFPLEdBQXZCO0lBQTRCLEtBQUEsRUFBTyxDQUFuQztJQUFzQyxNQUFBLEVBQU8sSUFBN0M7SUFBbUQsUUFBQSxFQUFTLEtBQTVEO0dBZEo7RUFlaEIsdUJBQUEsRUFBeUI7SUFBRSxNQUFBLEVBQVEsSUFBVjtJQUFnQixLQUFBLEVBQU8sR0FBdkI7SUFBNEIsS0FBQSxFQUFPLENBQW5DO0lBQXNDLE1BQUEsRUFBTyxJQUE3QztJQUFtRCxRQUFBLEVBQVMsS0FBNUQ7R0FmVDtFQWdCaEIsZ0JBQUEsRUFBa0I7SUFBRSxNQUFBLEVBQVEsSUFBVjtJQUFnQixLQUFBLEVBQU8sR0FBdkI7SUFBNEIsS0FBQSxFQUFPLENBQW5DO0lBQXNDLE1BQUEsRUFBTyxJQUE3QztJQUFtRCxRQUFBLEVBQVMsS0FBNUQ7R0FoQkY7RUFpQmhCLHFCQUFBLEVBQXVCO0lBQUUsTUFBQSxFQUFRLElBQVY7SUFBZ0IsS0FBQSxFQUFPLEdBQXZCO0lBQTRCLEtBQUEsRUFBTyxDQUFuQztJQUFzQyxNQUFBLEVBQU8sSUFBN0M7SUFBbUQsUUFBQSxFQUFTLEtBQTVEO0dBakJQO0VBbUJoQix1QkFBQSxFQUF5QjtJQUFFLE1BQUEsRUFBUSxJQUFWO0lBQWdCLEtBQUEsRUFBTyxJQUF2QjtJQUE2QixLQUFBLEVBQU8sQ0FBcEM7SUFBdUMsTUFBQSxFQUFPLElBQTlDO0lBQW9ELFFBQUEsRUFBUyxLQUE3RDtHQW5CVDtFQW9CaEIsaUJBQUEsRUFBbUI7SUFBRSxNQUFBLEVBQVEsSUFBVjtJQUFnQixLQUFBLEVBQU8sR0FBdkI7SUFBNEIsS0FBQSxFQUFPLENBQW5DO0lBQXNDLE1BQUEsRUFBTyxJQUE3QztJQUFtRCxRQUFBLEVBQVMsS0FBNUQ7R0FwQkg7RUFxQmhCLHNCQUFBLEVBQXdCO0lBQUUsTUFBQSxFQUFRLElBQVY7SUFBZ0IsS0FBQSxFQUFPLEdBQXZCO0lBQTRCLEtBQUEsRUFBTyxDQUFuQztJQUFzQyxNQUFBLEVBQU8sSUFBN0M7SUFBbUQsUUFBQSxFQUFTLEtBQTVEO0dBckJSO0VBc0JoQixnQkFBQSxFQUFrQjtJQUFFLE1BQUEsRUFBUSxJQUFWO0lBQWdCLEtBQUEsRUFBTyxHQUF2QjtJQUE0QixLQUFBLEVBQU8sQ0FBbkM7SUFBc0MsTUFBQSxFQUFPLElBQTdDO0lBQW1ELFFBQUEsRUFBUyxLQUE1RDtHQXRCRjtFQXVCaEIscUJBQUEsRUFBdUI7SUFBRSxNQUFBLEVBQVEsSUFBVjtJQUFnQixLQUFBLEVBQU8sR0FBdkI7SUFBNEIsS0FBQSxFQUFPLENBQW5DO0lBQXNDLE1BQUEsRUFBTyxJQUE3QztJQUFtRCxRQUFBLEVBQVMsS0FBNUQ7R0F2QlA7RUF3QmhCLGVBQUEsRUFBaUI7SUFBRSxNQUFBLEVBQVEsSUFBVjtJQUFnQixLQUFBLEVBQU8sR0FBdkI7SUFBNEIsS0FBQSxFQUFPLENBQW5DO0lBQXNDLE1BQUEsRUFBTyxJQUE3QztJQUFtRCxRQUFBLEVBQVMsS0FBNUQ7R0F4QkQ7RUF5QmhCLG9CQUFBLEVBQXNCO0lBQUUsTUFBQSxFQUFRLElBQVY7SUFBZ0IsS0FBQSxFQUFPLEdBQXZCO0lBQTRCLEtBQUEsRUFBTyxDQUFuQztJQUFzQyxNQUFBLEVBQU8sSUFBN0M7SUFBbUQsUUFBQSxFQUFTLEtBQTVEO0dBekJOO0VBMEJoQixpQkFBQSxFQUFtQjtJQUFFLE1BQUEsRUFBUSxJQUFWO0lBQWdCLEtBQUEsRUFBTyxHQUF2QjtJQUE0QixLQUFBLEVBQU8sQ0FBbkM7SUFBc0MsTUFBQSxFQUFPLElBQTdDO0lBQW1ELFFBQUEsRUFBUyxLQUE1RDtHQTFCSDtFQTJCaEIsc0JBQUEsRUFBd0I7SUFBRSxNQUFBLEVBQVEsSUFBVjtJQUFnQixLQUFBLEVBQU8sR0FBdkI7SUFBNEIsS0FBQSxFQUFPLENBQW5DO0lBQXNDLE1BQUEsRUFBTyxJQUE3QztJQUFtRCxRQUFBLEVBQVMsS0FBNUQ7R0EzQlI7RUE0QmhCLGtCQUFBLEVBQW9CO0lBQUUsTUFBQSxFQUFRLElBQVY7SUFBZ0IsS0FBQSxFQUFPLEdBQXZCO0lBQTRCLEtBQUEsRUFBTyxDQUFuQztJQUFzQyxNQUFBLEVBQU8sSUFBN0M7SUFBbUQsUUFBQSxFQUFTLEtBQTVEO0dBNUJKO0VBNkJoQixxQkFBQSxFQUF1QjtJQUFFLE1BQUEsRUFBUSxJQUFWO0lBQWdCLEtBQUEsRUFBTyxHQUF2QjtJQUE0QixLQUFBLEVBQU8sQ0FBbkM7SUFBc0MsTUFBQSxFQUFPLElBQTdDO0lBQW1ELFFBQUEsRUFBUyxLQUE1RDtHQTdCUDtFQThCaEIsZ0JBQUEsRUFBa0I7SUFBRSxNQUFBLEVBQVEsSUFBVjtJQUFnQixLQUFBLEVBQU8sR0FBdkI7SUFBNEIsS0FBQSxFQUFPLENBQW5DO0lBQXNDLE1BQUEsRUFBTyxJQUE3QztJQUFtRCxRQUFBLEVBQVMsS0FBNUQ7R0E5QkY7RUFnQ2hCLG9CQUFBLEVBQXVCO0lBQUUsTUFBQSxFQUFRLElBQVY7SUFBZ0IsS0FBQSxFQUFPLEdBQXZCO0lBQTRCLEtBQUEsRUFBTyxDQUFuQztJQUFzQyxNQUFBLEVBQU8sSUFBN0M7SUFBbUQsUUFBQSxFQUFTLEtBQTVEO0dBaENQO0VBaUNoQix5QkFBQSxFQUE0QjtJQUFFLE1BQUEsRUFBUSxJQUFWO0lBQWdCLEtBQUEsRUFBTyxHQUF2QjtJQUE0QixLQUFBLEVBQU8sQ0FBbkM7SUFBc0MsTUFBQSxFQUFPLElBQTdDO0lBQW1ELFFBQUEsRUFBUyxLQUE1RDtHQWpDWjtFQWtDaEIsaUJBQUEsRUFBbUI7SUFBRSxNQUFBLEVBQVEsSUFBVjtJQUFnQixLQUFBLEVBQU8sR0FBdkI7SUFBNEIsS0FBQSxFQUFPLENBQW5DO0lBQXNDLE1BQUEsRUFBTyxJQUE3QztJQUFtRCxRQUFBLEVBQVMsS0FBNUQ7R0FsQ0g7RUFtQ2hCLHNCQUFBLEVBQXdCO0lBQUUsTUFBQSxFQUFRLElBQVY7SUFBZ0IsS0FBQSxFQUFPLEdBQXZCO0lBQTRCLEtBQUEsRUFBTyxDQUFuQztJQUFzQyxNQUFBLEVBQU8sSUFBN0M7SUFBbUQsUUFBQSxFQUFTLEtBQTVEO0dBbkNSO0VBb0NoQixlQUFBLEVBQWlCO0lBQUUsTUFBQSxFQUFRLElBQVY7SUFBZ0IsS0FBQSxFQUFPLEdBQXZCO0lBQTRCLEtBQUEsRUFBTyxDQUFuQztJQUFzQyxNQUFBLEVBQU8sSUFBN0M7SUFBbUQsUUFBQSxFQUFTLEtBQTVEO0dBcENEO0VBcUNoQixvQkFBQSxFQUFzQjtJQUFFLE1BQUEsRUFBUSxJQUFWO0lBQWdCLEtBQUEsRUFBTyxHQUF2QjtJQUE0QixLQUFBLEVBQU8sQ0FBbkM7SUFBc0MsTUFBQSxFQUFPLElBQTdDO0lBQW1ELFFBQUEsRUFBUyxLQUE1RDtHQXJDTjtFQXVDaEIsd0JBQUEsRUFBMEI7SUFBRSxNQUFBLEVBQVEsSUFBVjtJQUFnQixLQUFBLEVBQU8sSUFBdkI7SUFBNkIsS0FBQSxFQUFPLENBQXBDO0lBQXVDLE1BQUEsRUFBTyxJQUE5QztJQUFvRCxRQUFBLEVBQVMsS0FBN0Q7R0F2Q1Y7RUF3Q2hCLG1CQUFBLEVBQXFCO0lBQUUsTUFBQSxFQUFRLElBQVY7SUFBZ0IsS0FBQSxFQUFPLElBQXZCO0lBQTZCLEtBQUEsRUFBTyxDQUFwQztJQUF1QyxNQUFBLEVBQU8sSUFBOUM7SUFBb0QsUUFBQSxFQUFTLEtBQTdEO0dBeENMO0VBeUNoQiwwQkFBQSxFQUE0QjtJQUFFLE1BQUEsRUFBUSxJQUFWO0lBQWdCLEtBQUEsRUFBTyxJQUF2QjtJQUE2QixLQUFBLEVBQU8sQ0FBcEM7SUFBdUMsTUFBQSxFQUFPLElBQTlDO0lBQW9ELFFBQUEsRUFBUyxLQUE3RDtHQXpDWjtFQTBDaEIscUJBQUEsRUFBdUI7SUFBRSxNQUFBLEVBQVEsSUFBVjtJQUFnQixLQUFBLEVBQU8sSUFBdkI7SUFBNkIsS0FBQSxFQUFPLENBQXBDO0lBQXVDLE1BQUEsRUFBTyxJQUE5QztJQUFvRCxRQUFBLEVBQVMsS0FBN0Q7R0ExQ1A7RUEyQ2hCLDZCQUFBLEVBQStCO0lBQUUsTUFBQSxFQUFRLElBQVY7SUFBZ0IsS0FBQSxFQUFPLElBQXZCO0lBQTZCLEtBQUEsRUFBTyxDQUFwQztJQUF1QyxNQUFBLEVBQU8sSUFBOUM7SUFBb0QsUUFBQSxFQUFTLEtBQTdEO0dBM0NmO0VBNENoQix3QkFBQSxFQUEwQjtJQUFFLE1BQUEsRUFBUSxJQUFWO0lBQWdCLEtBQUEsRUFBTyxJQUF2QjtJQUE2QixLQUFBLEVBQU8sQ0FBcEM7SUFBdUMsTUFBQSxFQUFPLElBQTlDO0lBQW9ELFFBQUEsRUFBUyxLQUE3RDtHQTVDVjtFQTZDaEIsdUJBQUEsRUFBeUI7SUFBRSxNQUFBLEVBQVEsSUFBVjtJQUFnQixLQUFBLEVBQU8sSUFBdkI7SUFBNkIsS0FBQSxFQUFPLENBQXBDO0lBQXVDLE1BQUEsRUFBTyxJQUE5QztJQUFvRCxRQUFBLEVBQVMsS0FBN0Q7R0E3Q1Q7RUE4Q2hCLGtCQUFBLEVBQW9CO0lBQUUsTUFBQSxFQUFRLElBQVY7SUFBZ0IsS0FBQSxFQUFPLElBQXZCO0lBQTZCLEtBQUEsRUFBTyxDQUFwQztJQUF1QyxNQUFBLEVBQU8sSUFBOUM7SUFBb0QsUUFBQSxFQUFTLEtBQTdEO0dBOUNKO0VBK0NoQix5QkFBQSxFQUEyQjtJQUFFLE1BQUEsRUFBUSxJQUFWO0lBQWdCLEtBQUEsRUFBTyxJQUF2QjtJQUE2QixLQUFBLEVBQU8sQ0FBcEM7SUFBdUMsTUFBQSxFQUFPLElBQTlDO0lBQW9ELFFBQUEsRUFBUyxLQUE3RDtHQS9DWDtFQWdEaEIsb0JBQUEsRUFBc0I7SUFBRSxNQUFBLEVBQVEsSUFBVjtJQUFnQixLQUFBLEVBQU8sSUFBdkI7SUFBNkIsS0FBQSxFQUFPLENBQXBDO0lBQXVDLE1BQUEsRUFBTyxJQUE5QztJQUFvRCxRQUFBLEVBQVMsS0FBN0Q7R0FoRE47RUFpRGhCLDRCQUFBLEVBQThCO0lBQUUsTUFBQSxFQUFRLElBQVY7SUFBZ0IsS0FBQSxFQUFPLElBQXZCO0lBQTZCLEtBQUEsRUFBTyxDQUFwQztJQUF1QyxNQUFBLEVBQU8sSUFBOUM7SUFBb0QsUUFBQSxFQUFTLEtBQTdEO0dBakRkO0VBa0RoQix1QkFBQSxFQUEwQjtJQUFFLE1BQUEsRUFBUSxJQUFWO0lBQWdCLEtBQUEsRUFBTyxJQUF2QjtJQUE2QixLQUFBLEVBQU8sQ0FBcEM7SUFBdUMsTUFBQSxFQUFPLElBQTlDO0lBQW9ELFFBQUEsRUFBUyxLQUE3RDtHQWxEVjtFQXVEaEIsc0JBQUEsRUFBd0I7SUFBRSxNQUFBLEVBQVEsSUFBVjtJQUFnQixLQUFBLEVBQU8sSUFBdkI7SUFBNkIsS0FBQSxFQUFPLENBQXBDO0lBQXVDLE1BQUEsRUFBTyxJQUE5QztJQUFvRCxRQUFBLEVBQVMsS0FBN0Q7R0F2RFI7RUF3RGhCLGlCQUFBLEVBQW1CO0lBQUUsTUFBQSxFQUFRLElBQVY7SUFBZ0IsS0FBQSxFQUFPLElBQXZCO0lBQTZCLEtBQUEsRUFBTyxDQUFwQztJQUF1QyxNQUFBLEVBQU8sSUFBOUM7SUFBb0QsUUFBQSxFQUFTLEtBQTdEO0dBeERIO0VBeURoQix5QkFBQSxFQUEyQjtJQUFFLE1BQUEsRUFBUSxJQUFWO0lBQWdCLEtBQUEsRUFBTyxJQUF2QjtJQUE2QixLQUFBLEVBQU8sQ0FBcEM7SUFBdUMsTUFBQSxFQUFPLElBQTlDO0lBQW9ELFFBQUEsRUFBUyxLQUE3RDtHQXpEWDtFQTBEaEIsb0JBQUEsRUFBc0I7SUFBRSxNQUFBLEVBQVEsSUFBVjtJQUFnQixLQUFBLEVBQU8sSUFBdkI7SUFBNkIsS0FBQSxFQUFPLENBQXBDO0lBQXVDLE1BQUEsRUFBTyxJQUE5QztJQUFvRCxRQUFBLEVBQVMsS0FBN0Q7R0ExRE47RUE0RGhCLHFCQUFBLEVBQXVCO0lBQUUsTUFBQSxFQUFRLElBQVY7SUFBZ0IsS0FBQSxFQUFPLEdBQXZCO0lBQTRCLEtBQUEsRUFBTyxDQUFuQztJQUFzQyxNQUFBLEVBQU8sSUFBN0M7SUFBbUQsUUFBQSxFQUFTLEtBQTVEO0dBNURQO0VBNkRoQiwwQkFBQSxFQUE0QjtJQUFFLE1BQUEsRUFBUSxJQUFWO0lBQWdCLEtBQUEsRUFBTyxHQUF2QjtJQUE0QixLQUFBLEVBQU8sQ0FBbkM7SUFBc0MsTUFBQSxFQUFPLElBQTdDO0lBQW1ELFFBQUEsRUFBUyxLQUE1RDtHQTdEWjtFQThEaEIsa0JBQUEsRUFBbUI7SUFBRSxNQUFBLEVBQVEsSUFBVjtJQUFnQixLQUFBLEVBQU8sR0FBdkI7SUFBNEIsS0FBQSxFQUFPLENBQW5DO0lBQXNDLE1BQUEsRUFBTyxJQUE3QztJQUFtRCxRQUFBLEVBQVMsS0FBNUQ7R0E5REg7RUErRGhCLHVCQUFBLEVBQXlCO0lBQUUsTUFBQSxFQUFRLElBQVY7SUFBZ0IsS0FBQSxFQUFPLEdBQXZCO0lBQTRCLEtBQUEsRUFBTyxDQUFuQztJQUFzQyxNQUFBLEVBQU8sSUFBN0M7SUFBbUQsUUFBQSxFQUFTLEtBQTVEO0dBL0RUO0VBa0VoQiw4QkFBQSxFQUFnQztJQUFFLE1BQUEsRUFBUSxHQUFWO0lBQWUsS0FBQSxFQUFPLEdBQXRCO0lBQTJCLEtBQUEsRUFBTyxDQUFsQztJQUFxQyxNQUFBLEVBQU8sSUFBNUM7SUFBa0QsUUFBQSxFQUFTLFNBQTNEO0dBbEVoQjtFQW1FaEIsOEJBQUEsRUFBZ0M7SUFBRSxNQUFBLEVBQVEsR0FBVjtJQUFlLEtBQUEsRUFBTyxHQUF0QjtJQUEyQixLQUFBLEVBQU8sQ0FBbEM7SUFBcUMsTUFBQSxFQUFPLElBQTVDO0lBQWtELFFBQUEsRUFBUyxTQUEzRDtHQW5FaEI7RUFvRWhCLDhCQUFBLEVBQWdDO0lBQUUsTUFBQSxFQUFRLEdBQVY7SUFBZSxLQUFBLEVBQU8sR0FBdEI7SUFBMkIsS0FBQSxFQUFPLENBQWxDO0lBQXFDLE1BQUEsRUFBTyxJQUE1QztJQUFrRCxRQUFBLEVBQVMsU0FBM0Q7R0FwRWhCO0VBcUVoQiw4QkFBQSxFQUFnQztJQUFFLE1BQUEsRUFBUSxHQUFWO0lBQWUsS0FBQSxFQUFPLEdBQXRCO0lBQTJCLEtBQUEsRUFBTyxDQUFsQztJQUFxQyxNQUFBLEVBQU8sSUFBNUM7SUFBa0QsUUFBQSxFQUFTLFNBQTNEO0dBckVoQjtFQXNFaEIsdUNBQUEsRUFBeUM7SUFBRSxNQUFBLEVBQVEsR0FBVjtJQUFlLEtBQUEsRUFBTyxHQUF0QjtJQUEyQixLQUFBLEVBQU8sQ0FBbEM7SUFBcUMsTUFBQSxFQUFPLElBQTVDO0lBQWtELFFBQUEsRUFBUyxTQUEzRDtHQXRFekI7RUF1RWhCLHVDQUFBLEVBQXlDO0lBQUUsTUFBQSxFQUFRLEdBQVY7SUFBZSxLQUFBLEVBQU8sR0FBdEI7SUFBMkIsS0FBQSxFQUFPLENBQWxDO0lBQXFDLE1BQUEsRUFBTyxJQUE1QztJQUFrRCxRQUFBLEVBQVMsU0FBM0Q7R0F2RXpCO0VBd0VoQixzQ0FBQSxFQUF3QztJQUFFLE1BQUEsRUFBUSxHQUFWO0lBQWUsS0FBQSxFQUFPLEdBQXRCO0lBQTJCLEtBQUEsRUFBTyxDQUFsQztJQUFxQyxNQUFBLEVBQU8sSUFBNUM7SUFBa0QsUUFBQSxFQUFTLFNBQTNEO0dBeEV4QjtFQXlFaEIsMkNBQUEsRUFBNkM7SUFBRSxNQUFBLEVBQVEsR0FBVjtJQUFlLEtBQUEsRUFBTyxHQUF0QjtJQUEyQixLQUFBLEVBQU8sQ0FBbEM7SUFBcUMsTUFBQSxFQUFPLElBQTVDO0lBQWtELFFBQUEsRUFBUyxTQUEzRDtHQXpFN0I7RUEwRWhCLDJDQUFBLEVBQTZDO0lBQUUsTUFBQSxFQUFRLEdBQVY7SUFBZSxLQUFBLEVBQU8sR0FBdEI7SUFBMkIsS0FBQSxFQUFPLENBQWxDO0lBQXFDLE1BQUEsRUFBTyxJQUE1QztJQUFrRCxRQUFBLEVBQVMsU0FBM0Q7R0ExRTdCO0VBMkVoQix1Q0FBQSxFQUF5QztJQUFFLE1BQUEsRUFBUSxHQUFWO0lBQWUsS0FBQSxFQUFPLEdBQXRCO0lBQTJCLEtBQUEsRUFBTyxDQUFsQztJQUFxQyxNQUFBLEVBQU8sSUFBNUM7SUFBa0QsUUFBQSxFQUFTLFNBQTNEO0dBM0V6QjtFQTRFaEIsdUNBQUEsRUFBeUM7SUFBRSxNQUFBLEVBQVEsR0FBVjtJQUFlLEtBQUEsRUFBTyxHQUF0QjtJQUEyQixLQUFBLEVBQU8sQ0FBbEM7SUFBcUMsTUFBQSxFQUFPLElBQTVDO0lBQWtELFFBQUEsRUFBUyxTQUEzRDtHQTVFekI7RUE2RWhCLHNDQUFBLEVBQXdDO0lBQUUsTUFBQSxFQUFRLEdBQVY7SUFBZSxLQUFBLEVBQU8sR0FBdEI7SUFBMkIsS0FBQSxFQUFPLENBQWxDO0lBQXFDLE1BQUEsRUFBTyxJQUE1QztJQUFrRCxRQUFBLEVBQVMsU0FBM0Q7R0E3RXhCO0VBOEVoQiwyQ0FBQSxFQUE2QztJQUFFLE1BQUEsRUFBUSxHQUFWO0lBQWUsS0FBQSxFQUFPLEdBQXRCO0lBQTJCLEtBQUEsRUFBTyxDQUFsQztJQUFxQyxNQUFBLEVBQU8sSUFBNUM7SUFBa0QsUUFBQSxFQUFTLFNBQTNEO0dBOUU3QjtFQStFaEIsMkNBQUEsRUFBNkM7SUFBRSxNQUFBLEVBQVEsR0FBVjtJQUFlLEtBQUEsRUFBTyxHQUF0QjtJQUEyQixLQUFBLEVBQU8sQ0FBbEM7SUFBcUMsTUFBQSxFQUFPLElBQTVDO0lBQWtELFFBQUEsRUFBUyxTQUEzRDtHQS9FN0I7RUFnRmhCLDZDQUFBLEVBQStDO0lBQUUsTUFBQSxFQUFRLEdBQVY7SUFBZSxLQUFBLEVBQU8sR0FBdEI7SUFBMkIsS0FBQSxFQUFPLENBQWxDO0lBQXFDLE1BQUEsRUFBTyxJQUE1QztJQUFrRCxRQUFBLEVBQVMsU0FBM0Q7R0FoRi9CO0VBaUZoQiw0Q0FBQSxFQUE4QztJQUFFLE1BQUEsRUFBUSxHQUFWO0lBQWUsS0FBQSxFQUFPLEdBQXRCO0lBQTJCLEtBQUEsRUFBTyxDQUFsQztJQUFxQyxNQUFBLEVBQU8sSUFBNUM7SUFBa0QsUUFBQSxFQUFTLFNBQTNEO0dBakY5QjtFQWtGaEIsNkNBQUEsRUFBK0M7SUFBRSxNQUFBLEVBQVEsR0FBVjtJQUFlLEtBQUEsRUFBTyxHQUF0QjtJQUEyQixLQUFBLEVBQU8sQ0FBbEM7SUFBcUMsTUFBQSxFQUFPLElBQTVDO0lBQWtELFFBQUEsRUFBUyxTQUEzRDtHQWxGL0I7RUFtRmhCLDRDQUFBLEVBQThDO0lBQUUsTUFBQSxFQUFRLEdBQVY7SUFBZSxLQUFBLEVBQU8sR0FBdEI7SUFBMkIsS0FBQSxFQUFPLENBQWxDO0lBQXFDLE1BQUEsRUFBTyxJQUE1QztJQUFrRCxRQUFBLEVBQVMsU0FBM0Q7R0FuRjlCO0VBb0ZoQiw2Q0FBQSxFQUErQztJQUFFLE1BQUEsRUFBUSxHQUFWO0lBQWUsS0FBQSxFQUFPLEdBQXRCO0lBQTJCLEtBQUEsRUFBTyxDQUFsQztJQUFxQyxNQUFBLEVBQU8sSUFBNUM7SUFBa0QsUUFBQSxFQUFTLFNBQTNEO0dBcEYvQjtFQXFGaEIsNkNBQUEsRUFBK0M7SUFBRSxNQUFBLEVBQVEsR0FBVjtJQUFlLEtBQUEsRUFBTyxHQUF0QjtJQUEyQixLQUFBLEVBQU8sQ0FBbEM7SUFBcUMsTUFBQSxFQUFPLElBQTVDO0lBQWtELFFBQUEsRUFBUyxTQUEzRDtHQXJGL0I7RUFzRmhCLDRDQUFBLEVBQThDO0lBQUUsTUFBQSxFQUFRLEdBQVY7SUFBZSxLQUFBLEVBQU8sR0FBdEI7SUFBMkIsS0FBQSxFQUFPLENBQWxDO0lBQXFDLE1BQUEsRUFBTyxJQUE1QztJQUFrRCxRQUFBLEVBQVMsU0FBM0Q7R0F0RjlCO0VBdUZoQiw2Q0FBQSxFQUErQztJQUFFLE1BQUEsRUFBUSxHQUFWO0lBQWUsS0FBQSxFQUFPLEdBQXRCO0lBQTJCLEtBQUEsRUFBTyxDQUFsQztJQUFxQyxNQUFBLEVBQU8sSUFBNUM7SUFBa0QsUUFBQSxFQUFTLFNBQTNEO0dBdkYvQjtFQXdGaEIsNENBQUEsRUFBOEM7SUFBRSxNQUFBLEVBQVEsR0FBVjtJQUFlLEtBQUEsRUFBTyxHQUF0QjtJQUEyQixLQUFBLEVBQU8sQ0FBbEM7SUFBcUMsTUFBQSxFQUFPLElBQTVDO0lBQWtELFFBQUEsRUFBUyxTQUEzRDtHQXhGOUI7RUF5RmhCLDZDQUFBLEVBQStDO0lBQUUsTUFBQSxFQUFRLEdBQVY7SUFBZSxLQUFBLEVBQU8sR0FBdEI7SUFBMkIsS0FBQSxFQUFPLENBQWxDO0lBQXFDLE1BQUEsRUFBTyxJQUE1QztJQUFrRCxRQUFBLEVBQVMsU0FBM0Q7R0F6Ri9CO0VBNEZoQixlQUFBLEVBQWlCO0lBQUUsTUFBQSxFQUFRLElBQVY7SUFBZ0IsS0FBQSxFQUFPLElBQXZCO0lBQTZCLEtBQUEsRUFBTyxDQUFwQztJQUF1QyxNQUFBLEVBQU8sSUFBOUM7SUFBb0QsUUFBQSxFQUFTLFNBQTdEO0dBNUZEO0VBNkZoQixvQkFBQSxFQUFzQjtJQUFFLE1BQUEsRUFBUSxJQUFWO0lBQWdCLEtBQUEsRUFBTyxJQUF2QjtJQUE2QixLQUFBLEVBQU8sQ0FBcEM7SUFBdUMsTUFBQSxFQUFPLElBQTlDO0lBQW9ELFFBQUEsRUFBUyxTQUE3RDtHQTdGTjtFQThGaEIsU0FBQSxFQUFXO0lBQUUsTUFBQSxFQUFRLElBQVY7SUFBZ0IsS0FBQSxFQUFPLElBQXZCO0lBQTZCLEtBQUEsRUFBTyxDQUFwQztJQUF1QyxNQUFBLEVBQU8sSUFBOUM7SUFBb0QsUUFBQSxFQUFTLFNBQTdEO0dBOUZLOzs7QUFpR2hCLE9BQU8sQ0FBQyxJQUFSLEdBQWU7O0FBQ2YsT0FBTyxDQUFDLEtBQVIsR0FBZ0I7O0FBQ2hCLE9BQU8sQ0FBQyxNQUFSLEdBQWlCOztBQUNqQixPQUFPLENBQUMsS0FBUixHQUFnQjs7QUFDaEIsT0FBTyxDQUFDLE1BQVIsR0FBaUI7O0FBQ2pCLE9BQU8sQ0FBQyxRQUFSLEdBQW1COztBQUNuQixPQUFPLENBQUMsV0FBUixHQUFzQjs7QUFFdEIsT0FBTyxDQUFDLFNBQVIsR0FBb0IsU0FBQTtBQUNuQixNQUFBO0VBQUEsTUFBQSxHQUFTLE1BQU0sQ0FBQyxNQUFNLENBQUM7RUFDdkIsT0FBTyxDQUFDLEtBQVIsR0FBZ0IsYUFBYyxDQUFBLE1BQUEsQ0FBTyxDQUFDO0VBQ3RDLElBQUcsTUFBQSxLQUFVLFlBQWI7SUFDQyxPQUFPLENBQUMsS0FBUixHQUFnQixNQUFNLENBQUM7SUFDdkIsT0FBTyxDQUFDLE1BQVIsR0FBaUIsTUFBTSxDQUFDLFlBRnpCO0dBQUEsTUFBQTtJQUlDLE9BQU8sQ0FBQyxLQUFSLEdBQWdCLGFBQWMsQ0FBQSxNQUFBLENBQU8sQ0FBQztJQUN0QyxPQUFPLENBQUMsTUFBUixHQUFpQixhQUFjLENBQUEsTUFBQSxDQUFPLENBQUM7SUFDdkMsSUFBRyxNQUFNLENBQUMsVUFBUCxLQUFxQixJQUFyQixJQUE2QixNQUFNLENBQUMsVUFBUCxLQUFxQixJQUFyRDtNQUNDLE9BQU8sQ0FBQyxLQUFSLEdBQWdCLE1BQU0sQ0FBQztNQUN2QixPQUFPLENBQUMsTUFBUixHQUFpQixNQUFNLENBQUM7TUFDeEIsT0FBTyxDQUFDLEtBQVIsR0FBZ0IsRUFIakI7S0FORDs7RUFVQSxPQUFPLENBQUMsTUFBUixHQUFpQixhQUFjLENBQUEsTUFBQSxDQUFPLENBQUM7RUFDdkMsT0FBTyxDQUFDLFFBQVIsR0FBbUIsYUFBYyxDQUFBLE1BQUEsQ0FBTyxDQUFDO1NBQ3pDLE9BQU8sQ0FBQyxXQUFSLEdBQXVCLE1BQU0sQ0FBQyxNQUFNLENBQUM7QUFmbEI7O0FBa0JwQixPQUFPLENBQUMsTUFBUixHQUFpQixTQUFBO0FBQ2hCLE1BQUE7RUFBQSxJQUFHLE9BQU8sQ0FBQyxXQUFSLEtBQXVCLENBQUMsRUFBM0I7SUFDQyxVQUFBLEdBQWEsT0FBTyxDQUFDO0lBQ3JCLFNBQUEsR0FBWSxPQUFPLENBQUM7SUFDcEIsT0FBTyxDQUFDLE1BQVIsR0FBaUI7V0FDakIsT0FBTyxDQUFDLEtBQVIsR0FBZ0IsV0FKakI7O0FBRGdCOztBQU9qQixPQUFPLENBQUMsU0FBUixDQUFBOztBQUNBLE9BQU8sQ0FBQyxNQUFSLENBQUE7O0FBSUEsUUFBQSxHQUFXLFNBQUE7RUFDVixPQUFPLENBQUMsU0FBUixDQUFBO1NBQ0EsT0FBTyxDQUFDLE1BQVIsQ0FBQTtBQUZVOztBQU1YLE1BQU0sQ0FBQyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQyxRQUFsQzs7QUFDQSxNQUFNLENBQUMsZ0JBQVAsQ0FBd0IsbUJBQXhCLEVBQThDLFFBQTlDOztBQUlBLFFBQUEsR0FBVztFQUNWLGVBQUEsRUFBa0IsQ0FBQyxRQUFELEVBQVcsT0FBWCxDQURSO0VBRVYsZUFBQSxFQUFpQixDQUFDLEtBQUQsRUFBUSxTQUFSLEVBQW1CLFVBQW5CLEVBQStCLFFBQS9CLENBRlA7RUFHVixXQUFBLEVBQWE7SUFDWixHQUFBLEVBQUs7TUFDSixNQUFBLEVBQVMsR0FETDtNQUVKLFNBQUEsRUFBWSxNQUZSO01BR0osVUFBQSxFQUFhLFFBSFQ7TUFJSixLQUFBLEVBQVEsUUFKSjtLQURPO0lBT1osT0FBQSxFQUFTO01BQ1IsTUFBQSxFQUFTLEdBREQ7TUFFUixTQUFBLEVBQVksTUFGSjtNQUdSLFVBQUEsRUFBYSxPQUhMO01BSVIsS0FBQSxFQUFRLFVBSkE7S0FQRztJQWFaLE1BQUEsRUFBUTtNQUNQLE1BQUEsRUFBUyxNQURGO01BRVAsU0FBQSxFQUFZLFFBRkw7TUFHUCxVQUFBLEVBQWEsR0FITjtNQUlQLEtBQUEsRUFBUSxLQUpEO0tBYkk7SUFtQlosUUFBQSxFQUFVO01BQ1QsTUFBQSxFQUFTLE1BREE7TUFFVCxTQUFBLEVBQVksT0FGSDtNQUdULFVBQUEsRUFBYSxHQUhKO01BSVQsS0FBQSxFQUFRLFNBSkM7S0FuQkU7R0FISDs7O0FBaUNYLE9BQU8sQ0FBQyxFQUFSLEdBQWEsU0FBQyxFQUFEO0FBQ1osTUFBQTtFQUFBLEVBQUEsR0FBSyxFQUFBLEdBQUcsT0FBTyxDQUFDO0VBQ2hCLEVBQUEsR0FBSyxJQUFJLENBQUMsS0FBTCxDQUFXLEVBQVg7QUFDTCxTQUFPO0FBSEs7O0FBTWIsT0FBTyxDQUFDLEVBQVIsR0FBYSxTQUFDLEVBQUQ7QUFDWixNQUFBO0VBQUEsRUFBQSxHQUFLLEVBQUEsR0FBSyxPQUFPLENBQUM7RUFDbEIsRUFBQSxHQUFLLElBQUksQ0FBQyxLQUFMLENBQVcsRUFBWDtBQUNMLFNBQU87QUFISzs7QUFPYixLQUFBLEdBQVEsU0FBQyxPQUFELEVBQVUsSUFBVjtFQUNQLElBQUcsSUFBQSxLQUFRLENBQVg7V0FDQyxLQUFBLENBQU0sd0NBQUEsR0FBeUMsT0FBTyxDQUFDLEVBQWpELEdBQW9ELG9FQUExRCxFQUREOztBQURPOztBQVFSLE9BQU8sQ0FBQyxVQUFSLEdBQXFCLFNBQUMsTUFBRCxFQUFTLE1BQVQ7QUFDcEIsTUFBQTtFQUFBLFNBQUEsR0FBWSxNQUFNLENBQUM7RUFDbkIsU0FBQSxHQUFZLE1BQU0sQ0FBQztFQUNuQixJQUFHLFNBQUEsS0FBYSxTQUFoQjtBQUNDLFdBQU8sS0FEUjtHQUFBLE1BQUE7QUFHQyxXQUFPLE1BSFI7O0FBSG9COztBQVNyQixPQUFPLENBQUMsTUFBUixHQUFpQixTQUFDLEtBQUQ7QUFDaEIsTUFBQTtFQUFBLElBQUcsS0FBQSxLQUFTLE1BQVo7SUFDQyxJQUFDLENBQUMsS0FBRixHQUFVLE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FEakM7R0FBQSxNQUFBO0lBR0MsSUFBQyxDQUFDLEtBQUYsR0FBVSxDQUFDLEtBQUQsRUFIWDs7QUFJQTtBQUFBO09BQUEscUNBQUE7O0lBQ0MsSUFBRyxLQUFLLENBQUMsV0FBTixLQUFxQixNQUF4QjtBQUNDO0FBQUEsV0FBQSx3Q0FBQTs7UUFDQyxVQUFBLENBQVcsS0FBWCxFQUFrQixDQUFsQjtBQUREOzs7QUFFQTtBQUFBO2FBQUEsd0NBQUE7O3dCQUNDLFlBQUEsQ0FBYSxLQUFiLEVBQW9CLENBQXBCO0FBREQ7O1lBSEQ7S0FBQSxNQUFBOzJCQUFBOztBQUREOztBQUxnQjs7QUFlakIsVUFBQSxHQUFhLFNBQUMsS0FBRCxFQUFRLElBQVI7RUFDWixJQUFHLEtBQUssQ0FBQyxXQUFZLENBQUEsSUFBQSxDQUFyQjtXQUNDLEtBQU0sQ0FBQSxJQUFBLENBQU4sR0FBYyxPQUFPLENBQUMsRUFBUixDQUFXLEtBQUssQ0FBQyxXQUFZLENBQUEsSUFBQSxDQUE3QixFQURmOztBQURZOztBQU1iLFlBQUEsR0FBZSxTQUFDLEtBQUQsRUFBUSxJQUFSO0FBQ2QsTUFBQTtFQUFBLElBQUcsS0FBSyxDQUFDLFdBQVksQ0FBQSxJQUFBLENBQWxCLEtBQTJCLE1BQTlCO0lBQ0MsSUFBQSxHQUFPLFFBQVEsQ0FBQyxXQUFZLENBQUEsSUFBQSxDQUFLLENBQUM7SUFDbEMsT0FBQSxHQUFVLFFBQVEsQ0FBQyxXQUFZLENBQUEsSUFBQSxDQUFLLENBQUM7SUFDckMsR0FBQSxHQUFNLFFBQVEsQ0FBQyxXQUFZLENBQUEsSUFBQSxDQUFLLENBQUM7SUFDakMsVUFBQSxHQUFhLFFBQVEsQ0FBQyxXQUFZLENBQUEsSUFBQSxDQUFLLENBQUM7SUFFeEMsSUFBRyxPQUFBLEtBQVcsT0FBWCxJQUFzQixPQUFBLEtBQVcsUUFBcEM7TUFDQyxVQUFBLEdBQWEsUUFBUSxDQUFDLFdBQVksQ0FBQSxJQUFBLENBQUssQ0FBQyxTQUR6Qzs7SUFHQSxJQUFHLEtBQUssQ0FBQyxVQUFOLEtBQW9CLElBQXZCO01BRUMsSUFBRSxDQUFBLFVBQUEsQ0FBRixHQUFnQixLQUFLLENBQUMsVUFBVyxDQUFBLFVBQUEsRUFGbEM7S0FBQSxNQUFBO01BS0MsSUFBRSxDQUFBLFVBQUEsQ0FBRixHQUFnQixPQUFRLENBQUEsVUFBQSxFQUx6Qjs7SUFNQSxJQUFHLElBQUEsS0FBUSxLQUFSLElBQWlCLElBQUEsS0FBUSxTQUE1QjtNQUVDLElBQUcsS0FBSyxDQUFDLFdBQVksQ0FBQSxJQUFBLENBQWxCLEtBQTJCLFFBQUEsQ0FBUyxLQUFLLENBQUMsV0FBWSxDQUFBLElBQUEsQ0FBM0IsRUFBa0MsRUFBbEMsQ0FBOUI7UUFDQyxLQUFNLENBQUEsSUFBQSxDQUFOLEdBQWMsS0FBSyxDQUFDLFdBQVksQ0FBQSxJQUFBLENBQWxCLEdBQTBCLE9BQU8sQ0FBQyxNQURqRDtPQUFBLE1BQUE7UUFHQyxJQUFHLEtBQUssQ0FBQyxXQUFZLENBQUEsSUFBQSxDQUFLLENBQUMsTUFBeEIsS0FBa0MsTUFBckM7VUFDQyxLQUFNLENBQUEsSUFBQSxDQUFOLEdBQWMsS0FBSyxDQUFDLFdBQVksQ0FBQSxJQUFBLENBQU0sQ0FBQSxPQUFBLEVBRHZDOztRQUVBLElBQUcsS0FBSyxDQUFDLFdBQVksQ0FBQSxJQUFBLENBQUssQ0FBQyxNQUF4QixLQUFrQyxDQUFyQztVQUNDLElBQUcsS0FBSyxDQUFDLFdBQVksQ0FBQSxJQUFBLENBQU0sQ0FBQSxDQUFBLENBQXhCLEtBQThCLFFBQUEsQ0FBUyxLQUFLLENBQUMsV0FBWSxDQUFBLElBQUEsQ0FBTSxDQUFBLENBQUEsQ0FBakMsRUFBcUMsRUFBckMsQ0FBakM7WUFDQyxLQUFNLENBQUEsSUFBQSxDQUFOLEdBQWMsS0FBSyxDQUFDLFdBQVksQ0FBQSxJQUFBLENBQU0sQ0FBQSxDQUFBLENBQXhCLEdBQTZCLE9BQU8sQ0FBQyxNQURwRDtXQUFBLE1BQUE7WUFHQyxLQUFNLENBQUEsSUFBQSxDQUFOLEdBQWMsS0FBSyxDQUFDLFdBQVksQ0FBQSxJQUFBLENBQU0sQ0FBQSxDQUFBLENBQUcsQ0FBQSxPQUFBLEVBSDFDO1dBREQ7O1FBS0EsSUFBRyxLQUFLLENBQUMsV0FBWSxDQUFBLElBQUEsQ0FBSyxDQUFDLE1BQXhCLEdBQWlDLENBQXBDO0FBQ0M7QUFBQSxlQUFBLHFDQUFBOztZQUNDLElBQUcsTUFBQSxLQUFVLFFBQUEsQ0FBUyxNQUFULEVBQWlCLEVBQWpCLENBQWI7Y0FDQyxJQUFDLENBQUMsTUFBRixHQUFXLE9BRFo7YUFBQSxNQUFBO2NBR0MsSUFBQyxDQUFDLFFBQUYsR0FBYSxPQUhkOztBQUREO1VBS0EsS0FBTSxDQUFBLElBQUEsQ0FBTixHQUFjLENBQUMsSUFBQyxDQUFDLE1BQUYsR0FBVyxPQUFPLENBQUMsS0FBcEIsQ0FBQSxHQUE2QixJQUFDLENBQUMsUUFBUyxDQUFBLE9BQUEsRUFOdkQ7U0FWRDs7TUFpQkEsSUFBRyxLQUFLLENBQUMsV0FBWSxDQUFBLEdBQUEsQ0FBckI7UUFDQyxLQUFBLEdBQVEsUUFBUSxDQUFDLFdBQVksQ0FBQSxHQUFBLENBQUssQ0FBQSxTQUFBO1FBQ2xDLElBQUcsS0FBSyxDQUFDLFdBQVksQ0FBQSxHQUFBLENBQWxCLEtBQTBCLFFBQUEsQ0FBUyxLQUFLLENBQUMsV0FBWSxDQUFBLEdBQUEsQ0FBM0IsRUFBaUMsRUFBakMsQ0FBN0I7aUJBQ0MsS0FBTSxDQUFBLEtBQUEsQ0FBTixHQUFlLElBQUUsQ0FBQSxVQUFBLENBQUYsR0FBZ0IsQ0FBQyxLQUFNLENBQUEsSUFBQSxDQUFOLEdBQWMsQ0FBQyxPQUFPLENBQUMsS0FBUixHQUFnQixLQUFLLENBQUMsV0FBWSxDQUFBLEdBQUEsQ0FBbkMsQ0FBZixFQURoQztTQUFBLE1BQUE7VUFHQyxJQUFHLEtBQUssQ0FBQyxXQUFZLENBQUEsR0FBQSxDQUFJLENBQUMsTUFBdkIsS0FBaUMsTUFBcEM7WUFDQyxLQUFNLENBQUEsS0FBQSxDQUFOLEdBQWUsS0FBTSxDQUFBLElBQUEsQ0FBTixHQUFjLEtBQUssQ0FBQyxXQUFZLENBQUEsR0FBQSxDQUFLLENBQUEsSUFBQTtZQUNwRCxJQUFHLEtBQU0sQ0FBQSxLQUFBLENBQU4sR0FBZSxDQUFsQjtxQkFDQyxLQUFNLENBQUEsS0FBQSxDQUFOLEdBQWUsS0FBTSxDQUFBLEtBQUEsQ0FBTixHQUFlLENBQUMsRUFEaEM7YUFGRDtXQUhEO1NBRkQ7T0FuQkQ7S0FBQSxNQUFBO01BOEJDLFFBQUEsR0FBVyxRQUFRLENBQUMsV0FBWSxDQUFBLElBQUEsQ0FBSyxDQUFDO01BQ3RDLElBQUcsS0FBSyxDQUFDLFdBQVksQ0FBQSxHQUFBLENBQWxCLEtBQTBCLE1BQTdCO1FBRUMsSUFBRyxLQUFLLENBQUMsV0FBWSxDQUFBLElBQUEsQ0FBbEIsS0FBMkIsUUFBQSxDQUFTLEtBQUssQ0FBQyxXQUFZLENBQUEsSUFBQSxDQUEzQixFQUFrQyxFQUFsQyxDQUE5QjtpQkFFQyxLQUFNLENBQUEsSUFBQSxDQUFOLEdBQWMsSUFBRSxDQUFBLFVBQUEsQ0FBRixHQUFnQixDQUFDLEtBQUssQ0FBQyxXQUFZLENBQUEsSUFBQSxDQUFsQixHQUEwQixPQUFPLENBQUMsS0FBbkMsRUFGL0I7U0FBQSxNQUFBO1VBSUMsSUFBRyxLQUFLLENBQUMsV0FBWSxDQUFBLElBQUEsQ0FBSyxDQUFDLE1BQXhCLEtBQWtDLE1BQXJDO1lBRUMsSUFBRyxPQUFPLENBQUMsVUFBUixDQUFtQixLQUFuQixFQUEwQixLQUFLLENBQUMsV0FBWSxDQUFBLElBQUEsQ0FBNUMsQ0FBSDtjQUNDLEtBQU0sQ0FBQSxJQUFBLENBQU4sR0FBYyxLQUFLLENBQUMsV0FBWSxDQUFBLElBQUEsQ0FBTSxDQUFBLFFBQUEsRUFEdkM7YUFBQSxNQUFBO2NBR0MsS0FBQSxDQUFNLEtBQU4sRUFBYSxDQUFiLEVBSEQ7YUFGRDs7VUFNQSxJQUFHLEtBQUssQ0FBQyxXQUFZLENBQUEsSUFBQSxDQUFLLENBQUMsTUFBeEIsS0FBa0MsQ0FBckM7WUFFQyxJQUFHLEtBQUssQ0FBQyxXQUFZLENBQUEsSUFBQSxDQUFNLENBQUEsQ0FBQSxDQUF4QixLQUE4QixRQUFBLENBQVMsS0FBSyxDQUFDLFdBQVksQ0FBQSxJQUFBLENBQU0sQ0FBQSxDQUFBLENBQWpDLEVBQXFDLEVBQXJDLENBQWpDO2NBRUMsS0FBTSxDQUFBLElBQUEsQ0FBTixHQUFjLElBQUUsQ0FBQSxPQUFBLENBQUYsR0FBYSxDQUFDLEtBQUssQ0FBQyxXQUFZLENBQUEsSUFBQSxDQUFNLENBQUEsQ0FBQSxDQUF4QixHQUE2QixPQUFPLENBQUMsS0FBdEMsRUFGNUI7YUFBQSxNQUFBO2NBS0MsSUFBRyxPQUFPLENBQUMsVUFBUixDQUFtQixLQUFuQixFQUEwQixLQUFLLENBQUMsV0FBWSxDQUFBLElBQUEsQ0FBTSxDQUFBLENBQUEsQ0FBbEQsQ0FBSDtnQkFDQyxLQUFNLENBQUEsSUFBQSxDQUFOLEdBQWMsS0FBSyxDQUFDLFdBQVksQ0FBQSxJQUFBLENBQU0sQ0FBQSxDQUFBLENBQUcsQ0FBQSxRQUFBLEVBRDFDO2VBQUEsTUFBQTtnQkFHQyxLQUFBLENBQU0sS0FBTixFQUFhLENBQWIsRUFIRDtlQUxEO2FBRkQ7O1VBV0EsSUFBRyxLQUFLLENBQUMsV0FBWSxDQUFBLElBQUEsQ0FBSyxDQUFDLE1BQXhCLEdBQWlDLENBQXBDO0FBRUM7QUFBQTtpQkFBQSx3Q0FBQTs7Y0FDQyxJQUFHLE1BQUEsS0FBVSxRQUFBLENBQVMsTUFBVCxFQUFpQixFQUFqQixDQUFiO2dCQUNDLElBQUMsQ0FBQyxNQUFGLEdBQVcsT0FEWjtlQUFBLE1BQUE7Z0JBR0MsSUFBQyxDQUFDLFFBQUYsR0FBYSxPQUhkOzsyQkFJQSxLQUFNLENBQUEsSUFBQSxDQUFOLEdBQWMsSUFBQyxDQUFDLFFBQVMsQ0FBQSxRQUFBLENBQVgsR0FBdUIsT0FBTyxDQUFDLEtBQVIsR0FBZ0IsSUFBQyxDQUFDO0FBTHhEOzJCQUZEO1dBckJEO1NBRkQ7T0EvQkQ7S0FmRDs7QUFEYzs7QUFpRmYsT0FBTyxDQUFDLFFBQVIsR0FBbUIsU0FBQyxLQUFEO0FBQ2xCLE1BQUE7RUFBQSxLQUFBLEdBQVksSUFBQSxLQUFBLENBQU07SUFBQSxlQUFBLEVBQWdCLFNBQWhCO0lBQTJCLElBQUEsRUFBSyxVQUFoQztHQUFOO0VBQ1osS0FBSyxDQUFDLFdBQU4sR0FBcUI7SUFBQSxNQUFBLEVBQU8sQ0FBUDtJQUFVLE1BQUEsRUFBTyxHQUFqQjtJQUFzQixRQUFBLEVBQVMsQ0FBL0I7SUFBa0MsT0FBQSxFQUFRLENBQTFDOztFQUNyQixPQUFPLENBQUMsTUFBUixDQUFBO0VBQ0EsWUFBQSxHQUFlLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLEVBQWdCLEdBQWhCLEVBQXFCLEdBQXJCLEVBQTBCLEdBQTFCLEVBQStCLEdBQS9CLEVBQW9DLEdBQXBDLEVBQXlDLEdBQXpDLEVBQThDLEdBQTlDLEVBQW1ELEdBQW5ELEVBQXdELEdBQXhELEVBQTZELEdBQTdELEVBQWtFLEdBQWxFLEVBQXVFLEdBQXZFLEVBQTRFLEdBQTVFLEVBQWlGLEdBQWpGLEVBQXNGLEdBQXRGLEVBQTJGLEdBQTNGLEVBQWdHLEdBQWhHLEVBQXFHLEdBQXJHLEVBQTBHLEdBQTFHLEVBQStHLEdBQS9HLEVBQXFILEdBQXJILEVBQTBILEdBQTFILEVBQStILEdBQS9IO0VBQ2YsU0FBQSxHQUFZO0VBQ1osTUFBQSxHQUFTLE9BQU8sQ0FBQyxFQUFSLENBQVcsQ0FBWDtFQUNULElBQUcsT0FBTyxDQUFDLEtBQVIsS0FBaUIsQ0FBakIsSUFBc0IsT0FBTyxDQUFDLEtBQVIsS0FBaUIsR0FBMUM7SUFDQyxNQUFBLEdBQVMsT0FBTyxDQUFDLEVBQVIsQ0FBVyxDQUFYLEVBRFY7O0VBRUEsT0FBQSxHQUFVO0lBQ1Q7TUFDQyxTQUFBLEVBQVksQ0FBQSxHQUFJLE9BQU8sQ0FBQyxLQUR6QjtNQUVDLFlBQUEsRUFBZSxDQUZoQjtNQUdDLFVBQUEsRUFBYSxDQUhkO01BSUMsV0FBQSxFQUFjLEVBQUEsR0FBSyxPQUFPLENBQUMsS0FKNUI7S0FEUyxFQU9UO01BQ0MsU0FBQSxFQUFZLEVBQUEsR0FBSyxPQUFPLENBQUMsS0FEMUI7TUFFQyxZQUFBLEVBQWUsRUFGaEI7TUFHQyxVQUFBLEVBQWEsRUFIZDtNQUlDLFdBQUEsRUFBYyxFQUFBLEdBQUssT0FBTyxDQUFDLEtBSjVCO0tBUFMsRUFhVDtNQUNDLFNBQUEsRUFBWSxFQUFBLEdBQUssT0FBTyxDQUFDLEtBRDFCO01BRUMsWUFBQSxFQUFlLEVBRmhCO01BR0MsVUFBQSxFQUFhLEVBSGQ7TUFJQyxXQUFBLEVBQWMsRUFBQSxHQUFLLE9BQU8sQ0FBQyxLQUo1QjtLQWJTOztFQW9CVixRQUFBLEdBQWUsSUFBQSxLQUFBLENBQU07SUFBQSxLQUFBLEVBQU0sSUFBQyxDQUFBLFFBQVA7SUFBaUIsTUFBQSxFQUFPLElBQUMsQ0FBQSxTQUF6QjtJQUFvQyxDQUFBLEVBQUUsSUFBQyxDQUFDLENBQUYsR0FBSSxFQUFBLEdBQUcsT0FBTyxDQUFDLEtBQXJEO0lBQTRELGVBQUEsRUFBZ0IsYUFBNUU7SUFBMkYsVUFBQSxFQUFXLEtBQXRHO0lBQTZHLElBQUEsRUFBSyxZQUFsSDtHQUFOO0VBQ2YsR0FBQSxHQUFVLElBQUEsS0FBQSxDQUFNO0lBQUEsWUFBQSxFQUFhLE9BQU8sQ0FBQyxFQUFSLENBQVcsRUFBWCxDQUFiO0lBQTZCLFVBQUEsRUFBVyxRQUF4QztJQUFrRCxlQUFBLEVBQWdCLGFBQWxFO0lBQWlGLEtBQUEsRUFBTSxPQUF2RjtJQUFnRyxJQUFBLEVBQUssUUFBckc7R0FBTjtFQUNWLEdBQUcsQ0FBQyxLQUFKLEdBQVk7SUFDWCxXQUFBLEVBQWMsRUFBQSxHQUFLLE9BQU8sQ0FBQyxLQUFiLEdBQXFCLElBRHhCO0lBRVgsYUFBQSxFQUFnQixHQUZMO0lBR1gsYUFBQSxFQUFnQiw2Q0FITDtJQUlYLFlBQUEsRUFBZSxRQUpKO0lBS1gsYUFBQSxFQUFnQixJQUFDLENBQUEsVUFMTjs7RUFPWixJQUFDLENBQUMsS0FBRixHQUFVO0VBQ1YsSUFBQSxHQUFXLElBQUEsS0FBQSxDQUFNO0lBQUEsVUFBQSxFQUFXLFFBQVg7SUFBcUIsZUFBQSxFQUFnQixhQUFyQztJQUFvRCxJQUFBLEVBQUssWUFBekQ7R0FBTjtBQUlYLE9BQUEsOENBQUE7O0lBQ0MsS0FBQSxHQUFRLFlBQVksQ0FBQyxPQUFiLENBQXFCLE1BQXJCO0lBQ1IsR0FBQSxHQUFVLElBQUEsS0FBQSxDQUFNO01BQUEsSUFBQSxFQUFLLE1BQUw7TUFBYSxVQUFBLEVBQVcsS0FBeEI7TUFBK0IsWUFBQSxFQUFhLENBQUEsR0FBRSxPQUFPLENBQUMsS0FBdEQ7TUFBNkQsZUFBQSxFQUFnQixPQUE3RTtNQUFzRixLQUFBLEVBQU0sT0FBNUY7TUFBcUcsT0FBQSxFQUFRLENBQTdHO01BQWdILFdBQUEsRUFBWSxPQUE1SDtNQUFxSSxhQUFBLEVBQWMsR0FBbko7S0FBTjtJQUNWLFFBQVEsQ0FBQyxZQUFULENBQUE7SUFDQSxHQUFHLENBQUMsWUFBSixDQUFBO0lBQ0EsSUFBRyxPQUFPLENBQUMsS0FBUixLQUFpQixDQUFwQjtNQUNDLEdBQUcsQ0FBQyxXQUFKLEdBQW1CO1FBQUEsS0FBQSxFQUFNLEVBQU47UUFBVSxNQUFBLEVBQU8sRUFBakI7O01BQ25CLFFBQVEsQ0FBQyxXQUFULEdBQXdCO1FBQUEsS0FBQSxFQUFNLEVBQU47UUFBVSxNQUFBLEVBQU8sR0FBakI7O01BQ3hCLElBQUksQ0FBQyxXQUFMLEdBQW9CO1FBQUEsS0FBQSxFQUFNLEVBQU47UUFBVSxNQUFBLEVBQVEsR0FBbEI7O01BQ3BCLElBQUksQ0FBQyxDQUFMLEdBQVM7TUFDVCxJQUFDLENBQUEsU0FBRCxHQUFhLE9BQU8sQ0FBQyxFQUFSLENBQVcsRUFBWDtNQUNiLElBQUMsQ0FBQSxVQUFELEdBQWMsT0FBTyxDQUFDLEVBQVIsQ0FBVyxHQUFYO01BQ2QsSUFBQyxDQUFBLFNBQUQsR0FBYSxPQUFPLENBQUMsRUFBUixDQUFXLEVBQVg7TUFDYixJQUFDLENBQUEsUUFBRCxHQUFZLE9BQU8sQ0FBQyxFQUFSLENBQVcsRUFBWDtNQUNaLElBQUMsQ0FBQSxVQUFELEdBQWMsSUFBQyxDQUFBLFFBQUQsR0FBWSxFQUFaLEdBQWlCO01BQy9CLEdBQUcsQ0FBQyxXQUFKLEdBQW1CO1FBQUEsS0FBQSxFQUFNLEVBQU47UUFBVSxNQUFBLEVBQU8sRUFBakI7O01BQ25CLEdBQUcsQ0FBQyxPQUFKLENBQUE7TUFDQSxHQUFHLENBQUMsQ0FBSixHQUFRLE9BQU8sQ0FBQyxFQUFSLENBQVcsRUFBWCxFQVpUOztJQWFBLElBQUcsT0FBTyxDQUFDLEtBQVIsS0FBaUIsQ0FBcEI7TUFDQyxHQUFHLENBQUMsV0FBSixHQUFtQjtRQUFBLEtBQUEsRUFBTSxFQUFOO1FBQVUsTUFBQSxFQUFPLEVBQWpCOztNQUNuQixJQUFDLENBQUEsU0FBRCxHQUFhLE9BQU8sQ0FBQyxFQUFSLENBQVcsR0FBWDtNQUNiLElBQUMsQ0FBQSxRQUFELEdBQVksT0FBTyxDQUFDLEVBQVIsQ0FBVyxFQUFYO01BQ1osSUFBQyxDQUFBLFVBQUQsR0FBYyxJQUFDLENBQUEsUUFBRCxHQUFZLEtBSjNCOztJQU1BLElBQUcsT0FBTyxDQUFDLEtBQVIsS0FBaUIsR0FBcEI7TUFDQyxHQUFHLENBQUMsV0FBSixHQUFtQjtRQUFBLEtBQUEsRUFBTSxFQUFOO1FBQVUsTUFBQSxFQUFPLEVBQWpCO1FBRHBCOztJQUdBLFFBQVEsQ0FBQyxPQUFULEdBQW1CO0lBRW5CLE9BQU8sQ0FBQyxNQUFSLENBQUE7SUFDQSxHQUFHLENBQUMsS0FBSixHQUFZO01BQ1gsV0FBQSxFQUFjLEVBQUEsR0FBSyxPQUFPLENBQUMsS0FBYixHQUFxQixJQUR4QjtNQUVYLGFBQUEsRUFBZ0IsR0FGTDtNQUdYLGFBQUEsRUFBZ0IsNkNBSEw7TUFJWCxZQUFBLEVBQWUsUUFKSjtNQUtYLGFBQUEsRUFBZ0IsR0FBRyxDQUFDLE1BQUosR0FBYSxPQUFPLENBQUMsRUFBUixDQUFXLENBQVgsQ0FBYixHQUE2QixJQUxsQzs7SUFPWixHQUFHLENBQUMsSUFBSixHQUFXO0lBQ1gsSUFBRyxLQUFBLElBQVMsT0FBUSxDQUFBLENBQUEsQ0FBRSxDQUFDLFFBQXZCO01BQ0MsUUFBQSxHQUFXLEtBQUEsR0FBUSxPQUFRLENBQUEsQ0FBQSxDQUFFLENBQUM7TUFDOUIsR0FBRyxDQUFDLENBQUosR0FBUSxPQUFRLENBQUEsQ0FBQSxDQUFFLENBQUMsT0FBWCxHQUFxQixDQUFDLFFBQUEsR0FBUyxNQUFWLENBQXJCLEdBQXlDLENBQUMsUUFBQSxHQUFTLEdBQUcsQ0FBQyxLQUFkO01BQ2pELEdBQUcsQ0FBQyxDQUFKLEdBQVEsT0FBUSxDQUFBLENBQUEsQ0FBRSxDQUFDLFVBSHBCOztJQUlBLElBQUcsS0FBQSxHQUFRLE9BQVEsQ0FBQSxDQUFBLENBQUUsQ0FBQyxRQUFuQixJQUErQixLQUFBLElBQVMsT0FBUSxDQUFBLENBQUEsQ0FBRSxDQUFDLFFBQXREO01BQ0MsUUFBQSxHQUFXLEtBQUEsR0FBUSxPQUFRLENBQUEsQ0FBQSxDQUFFLENBQUM7TUFDOUIsR0FBRyxDQUFDLENBQUosR0FBUSxPQUFRLENBQUEsQ0FBQSxDQUFFLENBQUMsT0FBWCxHQUFxQixDQUFDLFFBQUEsR0FBUyxNQUFWLENBQXJCLEdBQXlDLENBQUMsUUFBQSxHQUFTLEdBQUcsQ0FBQyxLQUFkO01BQ2pELEdBQUcsQ0FBQyxDQUFKLEdBQVEsT0FBUSxDQUFBLENBQUEsQ0FBRSxDQUFDLFNBQVgsR0FBdUIsR0FBRyxDQUFDLE9BSHBDOztJQUlBLElBQUcsS0FBQSxHQUFRLE9BQVEsQ0FBQSxDQUFBLENBQUUsQ0FBQyxRQUF0QjtNQUNDLFFBQUEsR0FBVyxLQUFBLEdBQVEsT0FBUSxDQUFBLENBQUEsQ0FBRSxDQUFDO01BQzlCLEdBQUcsQ0FBQyxDQUFKLEdBQVEsT0FBUSxDQUFBLENBQUEsQ0FBRSxDQUFDLE9BQVgsR0FBcUIsQ0FBQyxRQUFBLEdBQVMsTUFBVixDQUFyQixHQUF5QyxDQUFDLFFBQUEsR0FBUyxHQUFHLENBQUMsS0FBZDtNQUNqRCxHQUFHLENBQUMsQ0FBSixHQUFRLE9BQVEsQ0FBQSxDQUFBLENBQUUsQ0FBQyxTQUFYLEdBQXVCLEdBQUcsQ0FBQyxNQUFKLEdBQWEsRUFIN0M7O0lBSUEsSUFBSSxDQUFDLElBQUwsR0FBWSxxRUFBQSxHQUVFLElBQUMsQ0FBQSxTQUZILEdBRWEsY0FGYixHQUUyQixJQUFDLENBQUEsVUFGNUIsR0FFdUM7SUF5Qm5ELFNBQVMsQ0FBQyxJQUFWLENBQWUsR0FBZjtJQUlBLEtBQUssQ0FBQyxFQUFOLENBQVMsTUFBTSxDQUFDLFVBQWhCLEVBQTRCLFNBQUEsR0FBQSxDQUE1QjtJQUlBLEdBQUcsQ0FBQyxFQUFKLENBQU8sTUFBTSxDQUFDLFVBQWQsRUFBMEIsU0FBQTtNQUN6QixRQUFRLENBQUMsT0FBVCxHQUFtQjtNQUNuQixHQUFHLENBQUMsSUFBSixHQUFXLElBQUMsQ0FBQztNQUNiLFFBQVEsQ0FBQyxJQUFULEdBQWdCLElBQUMsQ0FBQzthQUNsQixRQUFRLENBQUMsSUFBVCxHQUFnQixJQUFDLENBQUM7SUFKTyxDQUExQjtJQU1BLEdBQUcsQ0FBQyxFQUFKLENBQU8sTUFBTSxDQUFDLFNBQWQsRUFBeUIsU0FBQTtNQUN4QixHQUFHLENBQUMsSUFBSixHQUFXLElBQUMsQ0FBQztNQUNiLFFBQVEsQ0FBQyxJQUFULEdBQWdCLElBQUMsQ0FBQzthQUNsQixRQUFRLENBQUMsSUFBVCxHQUFnQixJQUFDLENBQUM7SUFITSxDQUF6QjtJQUtBLEtBQUssQ0FBQyxFQUFOLENBQVMsTUFBTSxDQUFDLFFBQWhCLEVBQTBCLFNBQUE7YUFDekIsUUFBUSxDQUFDLE9BQVQsR0FBbUI7SUFETSxDQUExQjtBQWhHRDtBQXlHQSxTQUFPO0lBQ04sT0FBQSxFQUFVLEtBREo7SUFFTixNQUFBLEVBQVMsU0FGSDtJQUdOLEtBQUEsRUFBUTtNQUNQLEdBQUEsRUFBTSxTQUFVLENBQUEsQ0FBQSxDQURUO01BRVAsR0FBQSxFQUFNLFNBQVUsQ0FBQSxDQUFBLENBRlQ7TUFHUCxHQUFBLEVBQU0sU0FBVSxDQUFBLENBQUEsQ0FIVDtNQUlQLEdBQUEsRUFBTSxTQUFVLENBQUEsQ0FBQSxDQUpUO01BS1AsR0FBQSxFQUFNLFNBQVUsQ0FBQSxDQUFBLENBTFQ7TUFNUCxHQUFBLEVBQU0sU0FBVSxDQUFBLENBQUEsQ0FOVDtNQU9QLEdBQUEsRUFBTSxTQUFVLENBQUEsQ0FBQSxDQVBUO01BUVAsR0FBQSxFQUFNLFNBQVUsQ0FBQSxDQUFBLENBUlQ7TUFTUCxHQUFBLEVBQU0sU0FBVSxDQUFBLENBQUEsQ0FUVDtNQVVQLEdBQUEsRUFBTSxTQUFVLENBQUEsQ0FBQSxDQVZUO01BV1AsR0FBQSxFQUFNLFNBQVUsQ0FBQSxFQUFBLENBWFQ7TUFZUCxHQUFBLEVBQU0sU0FBVSxDQUFBLEVBQUEsQ0FaVDtNQWFQLEdBQUEsRUFBTSxTQUFVLENBQUEsRUFBQSxDQWJUO01BY1AsR0FBQSxFQUFNLFNBQVUsQ0FBQSxFQUFBLENBZFQ7TUFlUCxHQUFBLEVBQU0sU0FBVSxDQUFBLEVBQUEsQ0FmVDtNQWdCUCxHQUFBLEVBQU0sU0FBVSxDQUFBLEVBQUEsQ0FoQlQ7TUFpQlAsR0FBQSxFQUFNLFNBQVUsQ0FBQSxFQUFBLENBakJUO01Ba0JQLEdBQUEsRUFBTSxTQUFVLENBQUEsRUFBQSxDQWxCVDtNQW1CUCxHQUFBLEVBQU0sU0FBVSxDQUFBLEVBQUEsQ0FuQlQ7TUFvQlAsR0FBQSxFQUFNLFNBQVUsQ0FBQSxFQUFBLENBcEJUO01BcUJQLEdBQUEsRUFBTSxTQUFVLENBQUEsRUFBQSxDQXJCVDtNQXNCUCxHQUFBLEVBQU0sU0FBVSxDQUFBLEVBQUEsQ0F0QlQ7TUF1QlAsR0FBQSxFQUFNLFNBQVUsQ0FBQSxFQUFBLENBdkJUO01Bd0JQLEdBQUEsRUFBTSxTQUFVLENBQUEsRUFBQSxDQXhCVDtNQXlCUCxHQUFBLEVBQU0sU0FBVSxDQUFBLEVBQUEsQ0F6QlQ7TUEwQlAsR0FBQSxFQUFNLFNBQVUsQ0FBQSxFQUFBLENBMUJUO0tBSEY7O0FBcEpXOzs7O0FDclRuQixPQUFPLENBQUMsS0FBUixHQUFnQjs7QUFFaEIsT0FBTyxDQUFDLFVBQVIsR0FBcUIsU0FBQTtTQUNwQixLQUFBLENBQU0sdUJBQU47QUFEb0I7O0FBR3JCLE9BQU8sQ0FBQyxPQUFSLEdBQWtCLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIiNpT1NLaXQgTW9kdWxlXG4jQnkgS2V2eW4gQXJub3R0IEBrdnluX1xuZnJhbWVyRGV2aWNlcyA9IHtcbiNGdWxsc2NyZWVuXG5cImZ1bGxzY3JlZW5cIiA6IHsgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQsIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcdHNjYWxlOjEsIG1vYmlsZTpmYWxzZSwgcGxhdGZvcm06XCJ3ZWJcIn1cblxuI1NhZmFyaSBCcm93c2Vyc1xuXCJkZXNrdG9wLXNhZmFyaS0xMDI0LTYwMFwiOiB7IGhlaWdodDogNjAwLCB3aWR0aDogMTAyNCxcdHNjYWxlOiAxLCBtb2JpbGU6ZmFsc2UsIHBsYXRmb3JtOlwid2ViXCJ9XG5cImRlc2t0b3Atc2FmYXJpLTEyODAtODAwXCI6IHsgaGVpZ2h0OiA4MDAsIHdpZHRoOiAxMjgwLFx0c2NhbGU6IDEsIG1vYmlsZTpmYWxzZSwgcGxhdGZvcm06XCJ3ZWJcIn1cblwiZGVza3RvcC1zYWZhcmktMTQ0MC05MDBcIjogeyBoZWlnaHQ6IDkwMCwgd2lkdGg6IDE0NDAsXHRzY2FsZTogMSwgbW9iaWxlOmZhbHNlLCBwbGF0Zm9ybTpcIndlYlwifVxuXG4jaVBob25lc1xuXG4jNVNcblwiaXBob25lLTVzLXNwYWNlZ3JheVwiOiB7IGhlaWdodDogMTEzNiwgd2lkdGg6IDY0MCxcdHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblwiaXBob25lLTVzLXNwYWNlZ3JheS1oYW5kXCI6IHsgaGVpZ2h0OiAxMTM2LCB3aWR0aDogNjQwLFx0c2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXCJpcGhvbmUtNXMtc2lsdmVyXCI6IHsgaGVpZ2h0OiAxMTM2LCB3aWR0aDogNjQwLFx0c2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXCJpcGhvbmUtNXMtc2lsdmVyLWhhbmRcIjogeyBoZWlnaHQ6IDExMzYsIHdpZHRoOiA2NDAsXHRzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cImlwaG9uZS01cy1nb2xkXCI6IHsgaGVpZ2h0OiAxMTM2LCB3aWR0aDogNjQwLFx0c2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXCJpcGhvbmUtNXMtZ29sZC1oYW5kXCI6IHsgaGVpZ2h0OiAxMTM2LCB3aWR0aDogNjQwLFx0c2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuIzVjXG5cImlwaG9uZS01Yy15ZWxsb3ctaGFuZFwiOiB7IGhlaWdodDogMjA0OCwgd2lkdGg6IDE1MzYsXHRzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cImlwaG9uZS01Yy1ncmVlblwiOiB7IGhlaWdodDogMTEzNiwgd2lkdGg6IDY0MCxcdHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblwiaXBob25lLTVjLWdyZWVuLWhhbmRcIjogeyBoZWlnaHQ6IDExMzYsIHdpZHRoOiA2NDAsXHRzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cImlwaG9uZS01Yy1ibHVlXCI6IHsgaGVpZ2h0OiAxMTM2LCB3aWR0aDogNjQwLFx0c2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXCJpcGhvbmUtNWMtYmx1ZS1oYW5kXCI6IHsgaGVpZ2h0OiAxMTM2LCB3aWR0aDogNjQwLFx0c2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXCJpcGhvbmUtNWMtcmVkXCI6IHsgaGVpZ2h0OiAxMTM2LCB3aWR0aDogNjQwLFx0c2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXCJpcGhvbmUtNWMtcmVkLWhhbmRcIjogeyBoZWlnaHQ6IDExMzYsIHdpZHRoOiA2NDAsXHRzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cImlwaG9uZS01Yy13aGl0ZVwiOiB7IGhlaWdodDogMTEzNiwgd2lkdGg6IDY0MCxcdHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblwiaXBob25lLTVjLXdoaXRlLWhhbmRcIjogeyBoZWlnaHQ6IDExMzYsIHdpZHRoOiA2NDAsXHRzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cImlwaG9uZS01Yy15ZWxsb3dcIjogeyBoZWlnaHQ6IDExMzYsIHdpZHRoOiA2NDAsXHRzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cImlwaG9uZS01Yy1waW5rLWhhbmRcIjogeyBoZWlnaHQ6IDExMzYsIHdpZHRoOiA2NDAsXHRzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cImlwaG9uZS01Yy1waW5rXCI6IHsgaGVpZ2h0OiAxMTM2LCB3aWR0aDogNjQwLFx0c2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuIzZcblwiaXBob25lLTYtc3BhY2VncmF5XCIgOiB7IGhlaWdodDogMTMzNCwgd2lkdGg6IDc1MCxcdHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblwiaXBob25lLTYtc3BhY2VncmF5LWhhbmRcIiA6IHsgaGVpZ2h0OiAxMzM0LCB3aWR0aDogNzUwLFx0c2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXCJpcGhvbmUtNi1zaWx2ZXJcIjogeyBoZWlnaHQ6IDEzMzQsIHdpZHRoOiA3NTAsXHRzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cImlwaG9uZS02LXNpbHZlci1oYW5kXCI6IHsgaGVpZ2h0OiAxMzM0LCB3aWR0aDogNzUwLFx0c2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXCJpcGhvbmUtNi1nb2xkXCI6IHsgaGVpZ2h0OiAxMzM0LCB3aWR0aDogNzUwLFx0c2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXCJpcGhvbmUtNi1nb2xkLWhhbmRcIjogeyBoZWlnaHQ6IDEzMzQsIHdpZHRoOiA3NTAsXHRzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG4jNiBwbHVzXG5cImlwaG9uZS02cGx1cy1nb2xkLWhhbmRcIjogeyBoZWlnaHQ6IDIyMDgsIHdpZHRoOiAxMjQyLFx0c2NhbGU6IDMsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXCJpcGhvbmUtNnBsdXMtZ29sZFwiOiB7IGhlaWdodDogMjIwOCwgd2lkdGg6IDEyNDIsXHRzY2FsZTogMywgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cImlwaG9uZS02cGx1cy1zaWx2ZXItaGFuZFwiOiB7IGhlaWdodDogMjIwOCwgd2lkdGg6IDEyNDIsXHRzY2FsZTogMywgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cImlwaG9uZS02cGx1cy1zaWx2ZXJcIjogeyBoZWlnaHQ6IDIyMDgsIHdpZHRoOiAxMjQyLFx0c2NhbGU6IDMsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXCJpcGhvbmUtNnBsdXMtc3BhY2VncmF5LWhhbmRcIjogeyBoZWlnaHQ6IDIyMDgsIHdpZHRoOiAxMjQyLFx0c2NhbGU6IDMsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXCJpcGhvbmUtNnBsdXMtc3BhY2VncmF5XCI6IHsgaGVpZ2h0OiAyMjA4LCB3aWR0aDogMTI0MixcdHNjYWxlOiAzLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblwiaXBob25lNnBsdXMtZ29sZC1oYW5kXCI6IHsgaGVpZ2h0OiAyMjA4LCB3aWR0aDogMTI0MixcdHNjYWxlOiAzLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblwiaXBob25lNnBsdXMtZ29sZFwiOiB7IGhlaWdodDogMjIwOCwgd2lkdGg6IDEyNDIsXHRzY2FsZTogMywgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cImlwaG9uZTZwbHVzLXNpbHZlci1oYW5kXCI6IHsgaGVpZ2h0OiAyMjA4LCB3aWR0aDogMTI0MixcdHNjYWxlOiAzLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblwiaXBob25lNnBsdXMtc2lsdmVyXCI6IHsgaGVpZ2h0OiAyMjA4LCB3aWR0aDogMTI0MixcdHNjYWxlOiAzLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblwiaXBob25lNnBsdXMtc3BhY2VncmF5LWhhbmRcIjogeyBoZWlnaHQ6IDIyMDgsIHdpZHRoOiAxMjQyLFx0c2NhbGU6IDMsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXCJpcGhvbmU2cGx1cy1zcGFjZWdyYXlcIiA6IHsgaGVpZ2h0OiAyMjA4LCB3aWR0aDogMTI0MixcdHNjYWxlOiAzLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblxuI2lQYWRzXG5cbiNBaXJcblwiaXBhZC1haXItc2lsdmVyLWhhbmRcIjogeyBoZWlnaHQ6IDIwNDgsIHdpZHRoOiAxNTM2LFx0c2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXCJpcGFkLWFpci1zaWx2ZXJcIjogeyBoZWlnaHQ6IDIwNDgsIHdpZHRoOiAxNTM2LFx0c2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXCJpcGFkLWFpci1zcGFjZWdyYXktaGFuZFwiOiB7IGhlaWdodDogMjA0OCwgd2lkdGg6IDE1MzYsXHRzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cImlwYWQtYWlyLXNwYWNlZ3JheVwiOiB7IGhlaWdodDogMjA0OCwgd2lkdGg6IDE1MzYsXHRzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG4jbWluaVxuXCJpcGFkLW1pbmktc3BhY2VncmV5XCI6IHsgaGVpZ2h0OiAxMDI0LCB3aWR0aDogNzY4LFx0c2NhbGU6IDEsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXCJpcGFkLW1pbmktc3BhY2VncmV5LWhhbmRcIjogeyBoZWlnaHQ6IDEwMjQsIHdpZHRoOiA3NjgsXHRzY2FsZTogMSwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cImlwYWQtbWluaS1zaWx2ZXJcIjp7IGhlaWdodDogMTAyNCwgd2lkdGg6IDc2OCwgc2NhbGU6IDEsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXCJpcGFkLW1pbmktc2lsdmVyLWhhbmRcIjogeyBoZWlnaHQ6IDEwMjQsIHdpZHRoOiA3NjgsIHNjYWxlOiAxLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblxuI0FwcGxlIFdhdGNoZXNcblwiYXBwbGV3YXRjaC0zOC1ibGFjay1icmFjZWxldFwiOiB7IGhlaWdodDogMzQwLCB3aWR0aDogMjcyLFx0c2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcIndhdGNoT1NcIn1cblwiYXBwbGV3YXRjaC0zOC1zdGVlbC1icmFjZWxldFwiOiB7IGhlaWdodDogMzQwLCB3aWR0aDogMjcyLFx0c2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcIndhdGNoT1NcIn1cblwiYXBwbGV3YXRjaC00Mi1ibGFjay1icmFjZWxldFwiOiB7IGhlaWdodDogMzkwLCB3aWR0aDogMzEyLFx0c2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcIndhdGNoT1NcIn1cblwiYXBwbGV3YXRjaC00Mi1zdGVlbC1icmFjZWxldFwiOiB7IGhlaWdodDogMzkwLCB3aWR0aDogMzEyLFx0c2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcIndhdGNoT1NcIn1cblwiYXBwbGV3YXRjaGVkaXRpb24tMzgtZ29sZC1idWNrbGUtYmx1ZVwiOiB7IGhlaWdodDogMzQwLCB3aWR0aDogMjcyLFx0c2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcIndhdGNoT1NcIn1cblwiYXBwbGV3YXRjaGVkaXRpb24tMzgtZ29sZC1idWNrbGUtZ3JheVwiOiB7IGhlaWdodDogMzQwLCB3aWR0aDogMjcyLFx0c2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcIndhdGNoT1NcIn1cblwiYXBwbGV3YXRjaGVkaXRpb24tMzgtZ29sZC1idWNrbGUtcmVkXCI6IHsgaGVpZ2h0OiAzNDAsIHdpZHRoOiAyNzIsXHRzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwid2F0Y2hPU1wifVxuXCJhcHBsZXdhdGNoZWRpdGlvbi0zOC1nb2xkLXNwb3J0YmFuZC1ibGFja1wiOiB7IGhlaWdodDogMzQwLCB3aWR0aDogMjcyLFx0c2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcIndhdGNoT1NcIn1cblwiYXBwbGV3YXRjaGVkaXRpb24tMzgtZ29sZC1zcG9ydGJhbmQtd2hpdGVcIjogeyBoZWlnaHQ6IDM0MCwgd2lkdGg6IDI3MixcdHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJ3YXRjaE9TXCJ9XG5cImFwcGxld2F0Y2hlZGl0aW9uLTQyLWdvbGQtYnVja2xlLWJsdWVcIjogeyBoZWlnaHQ6IDM5MCwgd2lkdGg6IDMxMixcdHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJ3YXRjaE9TXCJ9XG5cImFwcGxld2F0Y2hlZGl0aW9uLTQyLWdvbGQtYnVja2xlLWdyYXlcIjogeyBoZWlnaHQ6IDM5MCwgd2lkdGg6IDMxMixcdHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJ3YXRjaE9TXCJ9XG5cImFwcGxld2F0Y2hlZGl0aW9uLTQyLWdvbGQtYnVja2xlLXJlZFwiOiB7IGhlaWdodDogMzkwLCB3aWR0aDogMzEyLFx0c2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcIndhdGNoT1NcIn1cblwiYXBwbGV3YXRjaGVkaXRpb24tNDItZ29sZC1zcG9ydGJhbmQtYmxhY2tcIjogeyBoZWlnaHQ6IDM5MCwgd2lkdGg6IDMxMixcdHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJ3YXRjaE9TXCJ9XG5cImFwcGxld2F0Y2hlZGl0aW9uLTQyLWdvbGQtc3BvcnRiYW5kLXdoaXRlXCI6IHsgaGVpZ2h0OiAzOTAsIHdpZHRoOiAzMTIsXHRzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwid2F0Y2hPU1wifVxuXCJhcHBsZXdhdGNoc3BvcnQtMzgtYWx1bWludW0tc3BvcnRiYW5kLWJsYWNrXCI6IHsgaGVpZ2h0OiAzNDAsIHdpZHRoOiAyNzIsXHRzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwid2F0Y2hPU1wifVxuXCJhcHBsZXdhdGNoc3BvcnQtMzgtYWx1bWludW0tc3BvcnRiYW5kLWJsdWVcIjogeyBoZWlnaHQ6IDM0MCwgd2lkdGg6IDI3MixcdHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJ3YXRjaE9TXCJ9XG5cImFwcGxld2F0Y2hzcG9ydC0zOC1hbHVtaW51bS1zcG9ydGJhbmQtZ3JlZW5cIjogeyBoZWlnaHQ6IDM0MCwgd2lkdGg6IDI3MixcdHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJ3YXRjaE9TXCJ9XG5cImFwcGxld2F0Y2hzcG9ydC0zOC1hbHVtaW51bS1zcG9ydGJhbmQtcGlua1wiOiB7IGhlaWdodDogMzQwLCB3aWR0aDogMjcyLFx0c2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcIndhdGNoT1NcIn1cblwiYXBwbGV3YXRjaHNwb3J0LTM4LWFsdW1pbnVtLXNwb3J0YmFuZC13aGl0ZVwiOiB7IGhlaWdodDogMzQwLCB3aWR0aDogMjcyLFx0c2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcIndhdGNoT1NcIn1cblwiYXBwbGV3YXRjaHNwb3J0LTQyLWFsdW1pbnVtLXNwb3J0YmFuZC1ibGFja1wiOiB7IGhlaWdodDogMzkwLCB3aWR0aDogMzEyLFx0c2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcIndhdGNoT1NcIn1cblwiYXBwbGV3YXRjaHNwb3J0LTQyLWFsdW1pbnVtLXNwb3J0YmFuZC1ibHVlXCI6IHsgaGVpZ2h0OiAzOTAsIHdpZHRoOiAzMTIsXHRzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwid2F0Y2hPU1wifVxuXCJhcHBsZXdhdGNoc3BvcnQtNDItYWx1bWludW0tc3BvcnRiYW5kLWdyZWVuXCI6IHsgaGVpZ2h0OiAzOTAsIHdpZHRoOiAzMTIsXHRzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwid2F0Y2hPU1wifVxuXCJhcHBsZXdhdGNoc3BvcnQtNDItYWx1bWludW0tc3BvcnRiYW5kLXBpbmtcIjogeyBoZWlnaHQ6IDM5MCwgd2lkdGg6IDMxMixcdHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJ3YXRjaE9TXCJ9XG5cImFwcGxld2F0Y2hzcG9ydC00Mi1hbHVtaW51bS1zcG9ydGJhbmQtd2hpdGVcIjogeyBoZWlnaHQ6IDM5MCwgd2lkdGg6IDMxMixcdHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJ3YXRjaE9TXCJ9XG5cbiNOZXh1cyBEZXZpY2VzXG5cIm5leHVzLTUtYmxhY2tcIjogeyBoZWlnaHQ6IDE5MjAsIHdpZHRoOiAxMDgwLFx0c2NhbGU6IDMsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImFuZHJvaWRcIn1cblwibmV4dXMtNS1ibGFjay1oYW5kXCI6IHsgaGVpZ2h0OiAxOTIwLCB3aWR0aDogMTA4MCxcdHNjYWxlOiAzLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJhbmRyb2lkXCJ9XG5cIm5leHVzLTlcIjogeyBoZWlnaHQ6IDIwNDgsIHdpZHRoOiAxNTM2LFx0c2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImFuZHJvaWRcIn1cbn1cblxuZXhwb3J0cy5uYW1lID0gMFxuZXhwb3J0cy5zY2FsZSA9IDBcbmV4cG9ydHMuaGVpZ2h0ID0gMFxuZXhwb3J0cy53aWR0aCA9IDBcbmV4cG9ydHMubW9iaWxlID0gMFxuZXhwb3J0cy5wbGF0Zm9ybSA9IDBcbmV4cG9ydHMub3JpZW50YXRpb24gPSAwXG5cbmV4cG9ydHMuZ2V0RGV2aWNlID0gLT5cblx0ZGV2aWNlID0gRnJhbWVyLkRldmljZS5kZXZpY2VUeXBlXG5cdGV4cG9ydHMuc2NhbGUgPSBmcmFtZXJEZXZpY2VzW2RldmljZV0uc2NhbGVcblx0aWYgZGV2aWNlID09IFwiZnVsbHNjcmVlblwiXG5cdFx0ZXhwb3J0cy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoXG5cdFx0ZXhwb3J0cy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHRcblx0ZWxzZVxuXHRcdGV4cG9ydHMud2lkdGggPSBmcmFtZXJEZXZpY2VzW2RldmljZV0ud2lkdGhcblx0XHRleHBvcnRzLmhlaWdodCA9IGZyYW1lckRldmljZXNbZGV2aWNlXS5oZWlnaHRcblx0XHRpZiB3aW5kb3cuaW5uZXJXaWR0aCA9PSAxMjQyIHx8IHdpbmRvdy5pbm5lcldpZHRoID09IDIyMDhcblx0XHRcdGV4cG9ydHMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aFxuXHRcdFx0ZXhwb3J0cy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHRcblx0XHRcdGV4cG9ydHMuc2NhbGUgPSAzXG5cdGV4cG9ydHMubW9iaWxlID0gZnJhbWVyRGV2aWNlc1tkZXZpY2VdLm1vYmlsZVxuXHRleHBvcnRzLnBsYXRmb3JtID0gZnJhbWVyRGV2aWNlc1tkZXZpY2VdLnBsYXRmb3JtXG5cdGV4cG9ydHMub3JpZW50YXRpb24gPSAgRnJhbWVyLkRldmljZS5vcmllbnRhdGlvblxuXG5cbmV4cG9ydHMub3JpZW50ID0gKCkgLT5cblx0aWYgZXhwb3J0cy5vcmllbnRhdGlvbiA9PSAtOTBcblx0XHR0ZW1wSGVpZ2h0ID0gZXhwb3J0cy5oZWlnaHRcblx0XHR0ZW1wV2lkdGggPSBleHBvcnRzLndpZHRoXG5cdFx0ZXhwb3J0cy5oZWlnaHQgPSB0ZW1wV2lkdGhcblx0XHRleHBvcnRzLndpZHRoID0gdGVtcEhlaWdodFxuXG5leHBvcnRzLmdldERldmljZSgpXG5leHBvcnRzLm9yaWVudCgpXG5cblxuI0xpc3RlbiB0byB3aW5kb3cgcmVpemVcbm9uUmVzaXplID0gKCkgLT5cblx0ZXhwb3J0cy5nZXREZXZpY2UoKVxuXHRleHBvcnRzLmxheW91dCgpXG5cblxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBvblJlc2l6ZSlcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwib3JpZW50YXRpb25jaGFuZ2VcIiAsIG9uUmVzaXplKVxuXG5cblxuZGVmYXVsdHMgPSB7XG5cdGNvbnN0cmFpbnRQcm9wcyA6IFtcImhlaWdodFwiLCBcIndpZHRoXCJdXG5cdGNvbnN0cmFpbnRUeXBlczogW1widG9wXCIsIFwibGVhZGluZ1wiLCBcInRyYWlsaW5nXCIsIFwiYm90dG9tXCJdXG5cdGNvbnN0cmFpbnRzOiB7XG5cdFx0dG9wOiB7XG5cdFx0XHRcInByb3BcIiA6IFwieVwiXG5cdFx0XHRcIm9ialByb3BcIiA6IFwibWF4WVwiXG5cdFx0XHRcIm9ialByb3AyXCIgOiBcImhlaWdodFwiXG5cdFx0XHRcIm9wcFwiIDogXCJib3R0b21cIlxuXHRcdH1cblx0XHRsZWFkaW5nOiB7XG5cdFx0XHRcInByb3BcIiA6IFwieFwiXG5cdFx0XHRcIm9ialByb3BcIiA6IFwibWF4WFwiXG5cdFx0XHRcIm9ialByb3AyXCIgOiBcIndpZHRoXCJcblx0XHRcdFwib3BwXCIgOiBcInRyYWlsaW5nXCJcblx0XHR9XG5cdFx0Ym90dG9tOiB7XG5cdFx0XHRcInByb3BcIiA6IFwibWF4WVwiXG5cdFx0XHRcIm9ialByb3BcIiA6IFwiaGVpZ2h0XCJcblx0XHRcdFwib2JqUHJvcDJcIiA6IFwieVwiXG5cdFx0XHRcIm9wcFwiIDogXCJ0b3BcIlxuXHRcdH1cblx0XHR0cmFpbGluZzoge1xuXHRcdFx0XCJwcm9wXCIgOiBcIm1heFhcIlxuXHRcdFx0XCJvYmpQcm9wXCIgOiBcIndpZHRoXCJcblx0XHRcdFwib2JqUHJvcDJcIiA6IFwieFwiXG5cdFx0XHRcIm9wcFwiIDogXCJsZWFkaW5nXCJcblx0XHR9XG5cdH1cbn1cbiMjIENvbnZlcnNpb25zXG5cbiNQaXhlbHMgdG8gUG9pbnRzXG5leHBvcnRzLnB0ID0gKHB4KSAtPlxuXHRwdCA9IHB4L2V4cG9ydHMuc2NhbGVcblx0cHQgPSBNYXRoLnJvdW5kKHB0KVxuXHRyZXR1cm4gcHRcblxuI1BvaW50cyB0byBQaXhlbHNcbmV4cG9ydHMucHggPSAocHQpIC0+XG5cdHB4ID0gcHQgKiBleHBvcnRzLnNjYWxlXG5cdHB4ID0gTWF0aC5yb3VuZChweClcblx0cmV0dXJuIHB4XG5cbiMjIEVycm9yc1xuXG5lcnJvciA9IChjb250ZXh0LCBjb2RlKSAtPlxuXHRpZiBjb2RlID09IDEgXG5cdFx0cHJpbnQgXCJFcnJvciBJbnZhbGlkIFJlbGF0aW9uc2hpcCDigJMgTGF5ZXIgaWQ6I3tjb250ZXh0LmlkfSBoYXMgYSByZWxhdGlvbnNoaXAgd2l0aCBhbm90aGVyIGxheWVyIG5vdCBpbiB0aGUgc2FtZSBzdXBlckxheWVyLlwiXG5cblxuIyMgQXV0b0xheW91dFxuXG4jY2hlY2tzIGlmIHR3byBsYXllcnMgaGF2ZSB0aGUgc2FtZSBwYXJlbnRcbmV4cG9ydHMuc2FtZVBhcmVudCA9IChsYXllcjEsIGxheWVyMikgLT5cblx0cGFyZW50T25lID0gbGF5ZXIxLnN1cGVyTGF5ZXJcblx0cGFyZW50VHdvID0gbGF5ZXIyLnN1cGVyTGF5ZXJcblx0aWYgcGFyZW50T25lID09IHBhcmVudFR3b1xuXHRcdHJldHVybiB0cnVlXG5cdGVsc2UgXG5cdFx0cmV0dXJuIGZhbHNlXG5cbiNSZWZyZXNoZXMgTGF5ZXIgb3IgQWxsIExheWVyc1xuZXhwb3J0cy5sYXlvdXQgPSAobGF5ZXIpIC0+XG5cdGlmIGxheWVyID09IHVuZGVmaW5lZFxuXHRcdEAuYXJyYXkgPSBGcmFtZXIuQ3VycmVudENvbnRleHQubGF5ZXJzXG5cdGVsc2UgXG5cdFx0QC5hcnJheSA9IFtsYXllcl1cblx0Zm9yIGxheWVyIGluIEAuYXJyYXlcblx0XHRpZiBsYXllci5jb25zdHJhaW50cyAhPSB1bmRlZmluZWRcblx0XHRcdGZvciBwIGluIGRlZmF1bHRzLmNvbnN0cmFpbnRQcm9wc1xuXHRcdFx0XHRsYXlvdXRTaXplKGxheWVyLCBwKVxuXHRcdFx0Zm9yIGMgaW4gZGVmYXVsdHMuY29uc3RyYWludFR5cGVzXG5cdFx0XHRcdGxheW91dENoYW5nZShsYXllciwgYylcblxuI1NpemUgQ29uc3RyYWludHNcblxuXG5sYXlvdXRTaXplID0gKGxheWVyLCB0eXBlKSAtPlxuXHRpZiBsYXllci5jb25zdHJhaW50c1t0eXBlXVxuXHRcdGxheWVyW3R5cGVdID0gZXhwb3J0cy5weChsYXllci5jb25zdHJhaW50c1t0eXBlXSlcblxuXG4jTW92ZSAmIFJlc2l6ZXMgTGF5ZXJzXG5sYXlvdXRDaGFuZ2UgPSAobGF5ZXIsIHR5cGUpIC0+XG5cdGlmIGxheWVyLmNvbnN0cmFpbnRzW3R5cGVdICE9IHVuZGVmaW5lZCBcblx0XHRwcm9wID0gZGVmYXVsdHMuY29uc3RyYWludHNbdHlwZV0ucHJvcFxuXHRcdG9ialByb3AgPSBkZWZhdWx0cy5jb25zdHJhaW50c1t0eXBlXS5vYmpQcm9wXG5cdFx0b3BwID0gZGVmYXVsdHMuY29uc3RyYWludHNbdHlwZV0ub3BwXG5cdFx0c3VwZXJUcmFpdCA9IGRlZmF1bHRzLmNvbnN0cmFpbnRzW3R5cGVdLm9ialByb3BcblxuXHRcdGlmIG9ialByb3AgIT0gXCJ3aWR0aFwiICYmIG9ialByb3AgIT0gXCJoZWlnaHRcIlxuXHRcdFx0c3VwZXJUcmFpdCA9IGRlZmF1bHRzLmNvbnN0cmFpbnRzW3R5cGVdLm9ialByb3AyXG5cblx0XHRpZiBsYXllci5zdXBlckxheWVyICE9IG51bGxcblx0XHRcdCNIYXMgYSBzdXBlckxheWVyXG5cdFx0XHRAW3N1cGVyVHJhaXRdID0gbGF5ZXIuc3VwZXJMYXllcltzdXBlclRyYWl0XVxuXHRcdGVsc2Vcblx0XHRcdCNEb2VzIG5vdCBoYXZlIGEgc3VwZXJMYXllclxuXHRcdFx0QFtzdXBlclRyYWl0XSA9IGV4cG9ydHNbc3VwZXJUcmFpdF1cblx0XHRpZiB0eXBlID09IFwidG9wXCIgfHwgdHlwZSA9PSBcImxlYWRpbmdcIlxuXHRcdFx0IyBIYW5kbGUgVG9wICYgTGVhZGluZ1xuXHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHNbdHlwZV0gPT0gcGFyc2VJbnQobGF5ZXIuY29uc3RyYWludHNbdHlwZV0sIDEwKVxuXHRcdFx0XHRsYXllcltwcm9wXSA9IGxheWVyLmNvbnN0cmFpbnRzW3R5cGVdICogZXhwb3J0cy5zY2FsZVxuXHRcdFx0ZWxzZSBcblx0XHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHNbdHlwZV0ubGVuZ3RoID09IHVuZGVmaW5lZFxuXHRcdFx0XHRcdGxheWVyW3Byb3BdID0gbGF5ZXIuY29uc3RyYWludHNbdHlwZV1bb2JqUHJvcF1cblx0XHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHNbdHlwZV0ubGVuZ3RoID09IDFcblx0XHRcdFx0XHRpZiBsYXllci5jb25zdHJhaW50c1t0eXBlXVswXSA9PSBwYXJzZUludChsYXllci5jb25zdHJhaW50c1t0eXBlXVswXSwgMTApXG5cdFx0XHRcdFx0XHRsYXllcltwcm9wXSA9IGxheWVyLmNvbnN0cmFpbnRzW3R5cGVdWzBdICogZXhwb3J0cy5zY2FsZVxuXHRcdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRcdGxheWVyW3Byb3BdID0gbGF5ZXIuY29uc3RyYWludHNbdHlwZV1bMF1bb2JqUHJvcF1cblx0XHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHNbdHlwZV0ubGVuZ3RoID4gMSBcblx0XHRcdFx0XHRmb3Igb2JqZWN0IGluIGxheWVyLmNvbnN0cmFpbnRzW3R5cGVdXG5cdFx0XHRcdFx0XHRpZiBvYmplY3QgPT0gcGFyc2VJbnQob2JqZWN0LCAxMClcblx0XHRcdFx0XHRcdFx0QC5vYmpJbnQgPSBvYmplY3Rcblx0XHRcdFx0XHRcdGVsc2UgXG5cdFx0XHRcdFx0XHRcdEAub2JqTGF5ZXIgPSBvYmplY3Rcblx0XHRcdFx0XHRsYXllcltwcm9wXSA9IChALm9iakludCAqIGV4cG9ydHMuc2NhbGUpICsgQC5vYmpMYXllcltvYmpQcm9wXVxuXHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHNbb3BwXVxuXHRcdFx0XHR0cmFpdCA9IGRlZmF1bHRzLmNvbnN0cmFpbnRzW29wcF1bXCJvYmpQcm9wXCJdXG5cdFx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzW29wcF0gPT0gcGFyc2VJbnQobGF5ZXIuY29uc3RyYWludHNbb3BwXSwgMTApXG5cdFx0XHRcdFx0bGF5ZXJbdHJhaXRdID0gQFtzdXBlclRyYWl0XSAtIChsYXllcltwcm9wXSArIChleHBvcnRzLnNjYWxlICogbGF5ZXIuY29uc3RyYWludHNbb3BwXSkpXG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRpZiBsYXllci5jb25zdHJhaW50c1tvcHBdLmxlbmd0aCA9PSB1bmRlZmluZWRcblx0XHRcdFx0XHRcdGxheWVyW3RyYWl0XSA9IGxheWVyW3Byb3BdIC0gbGF5ZXIuY29uc3RyYWludHNbb3BwXVtwcm9wXVxuXHRcdFx0XHRcdFx0aWYgbGF5ZXJbdHJhaXRdIDwgMFxuXHRcdFx0XHRcdFx0XHRsYXllclt0cmFpdF0gPSBsYXllclt0cmFpdF0gKiAtMVxuXHRcdGVsc2Vcblx0XHRcdCMjIEhhbmRsZSBCb3R0b20gJiBUcmFpbGluZ1xuXHRcdFx0b2JqUHJvcDIgPSBkZWZhdWx0cy5jb25zdHJhaW50c1t0eXBlXS5vYmpQcm9wMlxuXHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHNbb3BwXSA9PSB1bmRlZmluZWRcblx0XHRcdFx0IyMgTm8gb3Bwb3NpdGVcblx0XHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHNbdHlwZV0gPT0gcGFyc2VJbnQobGF5ZXIuY29uc3RyYWludHNbdHlwZV0sIDEwKVxuXHRcdFx0XHRcdCMjIE9ubHkgSW50ZWdlclxuXHRcdFx0XHRcdGxheWVyW3Byb3BdID0gQFtzdXBlclRyYWl0XSAtIChsYXllci5jb25zdHJhaW50c1t0eXBlXSAqIGV4cG9ydHMuc2NhbGUpXG5cdFx0XHRcdGVsc2UgXG5cdFx0XHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHNbdHlwZV0ubGVuZ3RoID09IHVuZGVmaW5lZFxuXHRcdFx0XHRcdFx0I0VudGVyZWQgTGF5ZXJcblx0XHRcdFx0XHRcdGlmIGV4cG9ydHMuc2FtZVBhcmVudChsYXllciwgbGF5ZXIuY29uc3RyYWludHNbdHlwZV0pXG5cdFx0XHRcdFx0XHRcdGxheWVyW3Byb3BdID0gbGF5ZXIuY29uc3RyYWludHNbdHlwZV1bb2JqUHJvcDJdXG5cdFx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHRcdGVycm9yKGxheWVyLCAxKVxuXHRcdFx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzW3R5cGVdLmxlbmd0aCA9PSAxXG5cdFx0XHRcdFx0XHQjQXJyYXkgb2YgT25lXG5cdFx0XHRcdFx0XHRpZiBsYXllci5jb25zdHJhaW50c1t0eXBlXVswXSA9PSBwYXJzZUludChsYXllci5jb25zdHJhaW50c1t0eXBlXVswXSwgMTApXG5cdFx0XHRcdFx0XHRcdCNJbnRcblx0XHRcdFx0XHRcdFx0bGF5ZXJbcHJvcF0gPSBAW29ialByb3BdIC0gKGxheWVyLmNvbnN0cmFpbnRzW3R5cGVdWzBdICogZXhwb3J0cy5zY2FsZSlcblx0XHRcdFx0XHRcdGVsc2UgXG5cdFx0XHRcdFx0XHRcdCNPYmplY3Rcblx0XHRcdFx0XHRcdFx0aWYgZXhwb3J0cy5zYW1lUGFyZW50KGxheWVyLCBsYXllci5jb25zdHJhaW50c1t0eXBlXVswXSlcblx0XHRcdFx0XHRcdFx0XHRsYXllcltwcm9wXSA9IGxheWVyLmNvbnN0cmFpbnRzW3R5cGVdWzBdW29ialByb3AyXVxuXHRcdFx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IobGF5ZXIsIDEpXG5cdFx0XHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHNbdHlwZV0ubGVuZ3RoID4gMVx0XG5cdFx0XHRcdFx0XHQjUmVsYXRpb25zaGlwIEFycmF5XG5cdFx0XHRcdFx0XHRmb3Igb2JqZWN0IGluIGxheWVyLmNvbnN0cmFpbnRzW3R5cGVdXG5cdFx0XHRcdFx0XHRcdGlmIG9iamVjdCA9PSBwYXJzZUludChvYmplY3QsIDEwKVxuXHRcdFx0XHRcdFx0XHRcdEAub2JqSW50ID0gb2JqZWN0XG5cdFx0XHRcdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRcdFx0XHRALm9iakxheWVyID0gb2JqZWN0XG5cdFx0XHRcdFx0XHRcdGxheWVyW3Byb3BdID0gQC5vYmpMYXllcltvYmpQcm9wMl0gLSBleHBvcnRzLnNjYWxlICogQC5vYmpJbnRcblxuXG5cbmV4cG9ydHMuS2V5Ym9hcmQgPSAoYXJyYXkpIC0+XG5cdGJvYXJkID0gbmV3IExheWVyIGJhY2tncm91bmRDb2xvcjpcIiNEMUQ1REFcIiwgbmFtZTpcImtleWJvYXJkXCJcblx0Ym9hcmQuY29uc3RyYWludHMgPSAoYm90dG9tOjAsIGhlaWdodDoyMTYsIHRyYWlsaW5nOjEsIGxlYWRpbmc6MSlcblx0ZXhwb3J0cy5sYXlvdXQoKVxuXHRsZXR0ZXJzQXJyYXkgPSBbXCJxXCIsIFwid1wiLCBcImVcIiwgXCJyXCIsIFwidFwiLCBcInlcIiwgXCJ1XCIsIFwiaVwiLCBcIm9cIiwgXCJwXCIsIFwiYVwiLCBcInNcIiwgXCJkXCIsIFwiZlwiLCBcImdcIiwgXCJoXCIsIFwialwiLCBcImtcIiwgXCJsXCIsIFwielwiLCBcInhcIiwgXCJjXCIsIFwidlwiLCAgXCJiXCIsIFwiblwiLCBcIm1cIl1cblx0a2V5c0FycmF5ID0gW11cblx0c3BhY2VyID0gZXhwb3J0cy5weCg1KVxuXHRpZiBleHBvcnRzLnNjYWxlID09IDMgfHwgZXhwb3J0cy53aWR0aCA9PSA2NDBcblx0XHRzcGFjZXIgPSBleHBvcnRzLnB4KDYpXG5cdHJvd3NNYXAgPSBbXG5cdFx0eyBcblx0XHRcdFwicGFkZGluZ1wiIDogNCAqIGV4cG9ydHMuc2NhbGVcblx0XHRcdFwic3RhcnRJbmRleFwiIDogMFxuXHRcdFx0XCJlbmRJbmRleFwiIDogOVxuXHRcdFx0XCJtYXJnaW5Ub3BcIiA6IDEwICogZXhwb3J0cy5zY2FsZVxuXHRcdH0sXG5cdFx0eyBcblx0XHRcdFwicGFkZGluZ1wiIDogMjIgKiBleHBvcnRzLnNjYWxlXG5cdFx0XHRcInN0YXJ0SW5kZXhcIiA6IDEwXG5cdFx0XHRcImVuZEluZGV4XCIgOiAxOFxuXHRcdFx0XCJtYXJnaW5Ub3BcIiA6IDIyICogZXhwb3J0cy5zY2FsZVxuXHRcdH0sXG5cdFx0eyBcblx0XHRcdFwicGFkZGluZ1wiIDogNTkgKiBleHBvcnRzLnNjYWxlXG5cdFx0XHRcInN0YXJ0SW5kZXhcIiA6IDE5XG5cdFx0XHRcImVuZEluZGV4XCIgOiAyNVxuXHRcdFx0XCJtYXJnaW5Ub3BcIiA6IDM0ICogZXhwb3J0cy5zY2FsZVxuXHRcdH1cblx0XVxuXHRrZXlQb3BVcCA9IG5ldyBMYXllciB3aWR0aDpAa2V5V2lkdGgsIGhlaWdodDpAa2V5SGVpZ2h0LCB4OkAueC0xNipleHBvcnRzLnNjYWxlLCBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiLCBzdXBlckxheWVyOmJvYXJkLCBuYW1lOlwia2V5IHBvcCB1cFwiXG5cdGJveCA9IG5ldyBMYXllciBib3JkZXJSYWRpdXM6ZXhwb3J0cy5weCgxMCksIHN1cGVyTGF5ZXI6a2V5UG9wVXAsIGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCIsIGNvbG9yOlwiYmxhY2tcIiwgbmFtZTpcImxldHRlclwiXG5cdGJveC5zdHlsZSA9IHtcblx0XHRcImZvbnQtc2l6ZVwiIDogMzkgKiBleHBvcnRzLnNjYWxlICsgXCJweFwiXG5cdFx0XCJmb250LXdlaWdodFwiIDogMzAwXG5cdFx0XCJmb250LWZhbWlseVwiIDogJy1hcHBsZS1zeXN0ZW0sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYnXG5cdFx0J3RleHQtYWxpZ24nIDogJ2NlbnRlcidcblx0XHQnbGluZS1oZWlnaHQnIDogQGxpbmVIZWlnaHRcblx0fVxuXHRALmNvbG9yID0gXCJ3aGl0ZVwiXG5cdHBhdGggPSBuZXcgTGF5ZXIgc3VwZXJMYXllcjprZXlQb3BVcCwgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIiwgbmFtZTpcInNoYXBlIHBhdGhcIlxuXG5cblxuXHRmb3IgbGV0dGVyIGluIGxldHRlcnNBcnJheVxuXHRcdGluZGV4ID0gbGV0dGVyc0FycmF5LmluZGV4T2YobGV0dGVyKSBcblx0XHRrZXkgPSBuZXcgTGF5ZXIgbmFtZTpsZXR0ZXIsIHN1cGVyTGF5ZXI6Ym9hcmQsIGJvcmRlclJhZGl1czo1KmV4cG9ydHMuc2NhbGUsIGJhY2tncm91bmRDb2xvcjpcIndoaXRlXCIsIGNvbG9yOlwiYmxhY2tcIiwgc2hhZG93WToxLCBzaGFkb3dDb2xvcjpcImJsYWNrXCIsIHNoYWRvd09wYWNpdHk6LjI1XG5cdFx0a2V5UG9wVXAuYnJpbmdUb0Zyb250KClcblx0XHRib3guYnJpbmdUb0Zyb250KClcblx0XHRpZiBleHBvcnRzLnNjYWxlID09IDJcblx0XHRcdGtleS5jb25zdHJhaW50cyA9ICh3aWR0aDozMiwgaGVpZ2h0OjQ0KVxuXHRcdFx0a2V5UG9wVXAuY29uc3RyYWludHMgPSAod2lkdGg6NjUsIGhlaWdodDoxMjIpXG5cdFx0XHRwYXRoLmNvbnN0cmFpbnRzID0gKHdpZHRoOjY1LCBoZWlnaHQ6IDEyMilcblx0XHRcdHBhdGgueSA9IDEwXG5cdFx0XHRAcGF0aFdpZHRoID0gZXhwb3J0cy5weCg2NSlcblx0XHRcdEBwYXRoSGVpZ2h0ID0gZXhwb3J0cy5weCgxMjIpXG5cdFx0XHRAa2V5SGVpZ2h0ID0gZXhwb3J0cy5weCgzMilcblx0XHRcdEBrZXlXaWR0aCA9IGV4cG9ydHMucHgoNDQpXG5cdFx0XHRAbGluZUhlaWdodCA9IEBrZXlXaWR0aCAtIDE3ICsgXCJweFwiXG5cdFx0XHRib3guY29uc3RyYWludHMgPSAod2lkdGg6MzIsIGhlaWdodDo0NClcblx0XHRcdGJveC5jZW50ZXJYKClcblx0XHRcdGJveC55ID0gZXhwb3J0cy5weCgyOClcblx0XHRpZiBleHBvcnRzLnNjYWxlID09IDNcblx0XHRcdGtleS5jb25zdHJhaW50cyA9ICh3aWR0aDozNSwgaGVpZ2h0OjQ2KVxuXHRcdFx0QGtleUhlaWdodCA9IGV4cG9ydHMucHgoMTIyKVxuXHRcdFx0QGtleVdpZHRoID0gZXhwb3J0cy5weCg2NSlcblx0XHRcdEBsaW5lSGVpZ2h0ID0gQGtleVdpZHRoICsgXCJweFwiXG5cblx0XHRpZiBleHBvcnRzLndpZHRoID09IDY0MFxuXHRcdFx0a2V5LmNvbnN0cmFpbnRzID0gKHdpZHRoOjI2LCBoZWlnaHQ6MzkpXG5cblx0XHRrZXlQb3BVcC52aXNpYmxlID0gZmFsc2VcblxuXHRcdGV4cG9ydHMubGF5b3V0KClcblx0XHRrZXkuc3R5bGUgPSB7XG5cdFx0XHRcImZvbnQtc2l6ZVwiIDogMjUgKiBleHBvcnRzLnNjYWxlICsgXCJweFwiXG5cdFx0XHRcImZvbnQtd2VpZ2h0XCIgOiAzMDBcblx0XHRcdFwiZm9udC1mYW1pbHlcIiA6ICctYXBwbGUtc3lzdGVtLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmJ1xuXHRcdFx0J3RleHQtYWxpZ24nIDogJ2NlbnRlcidcblx0XHRcdCdsaW5lLWhlaWdodCcgOiBrZXkuaGVpZ2h0IC0gZXhwb3J0cy5weCg1KSArIFwicHhcIlxuXHRcdH1cblx0XHRrZXkuaHRtbCA9IGxldHRlclxuXHRcdGlmIGluZGV4IDw9IHJvd3NNYXBbMF0uZW5kSW5kZXhcblx0XHRcdHJvd0luZGV4ID0gaW5kZXggLSByb3dzTWFwWzBdLnN0YXJ0SW5kZXhcblx0XHRcdGtleS54ID0gcm93c01hcFswXS5wYWRkaW5nICsgKHJvd0luZGV4KnNwYWNlcikgKyAocm93SW5kZXgqa2V5LndpZHRoKVxuXHRcdFx0a2V5LnkgPSByb3dzTWFwWzBdLm1hcmdpblRvcFxuXHRcdGlmIGluZGV4ID4gcm93c01hcFswXS5lbmRJbmRleCAmJiBpbmRleCA8PSByb3dzTWFwWzFdLmVuZEluZGV4XG5cdFx0XHRyb3dJbmRleCA9IGluZGV4IC0gcm93c01hcFsxXS5zdGFydEluZGV4XG5cdFx0XHRrZXkueCA9IHJvd3NNYXBbMV0ucGFkZGluZyArIChyb3dJbmRleCpzcGFjZXIpICsgKHJvd0luZGV4KmtleS53aWR0aClcblx0XHRcdGtleS55ID0gcm93c01hcFsxXS5tYXJnaW5Ub3AgKyBrZXkuaGVpZ2h0XG5cdFx0aWYgaW5kZXggPiByb3dzTWFwWzFdLmVuZEluZGV4XG5cdFx0XHRyb3dJbmRleCA9IGluZGV4IC0gcm93c01hcFsyXS5zdGFydEluZGV4XG5cdFx0XHRrZXkueCA9IHJvd3NNYXBbMl0ucGFkZGluZyArIChyb3dJbmRleCpzcGFjZXIpICsgKHJvd0luZGV4KmtleS53aWR0aClcblx0XHRcdGtleS55ID0gcm93c01hcFsyXS5tYXJnaW5Ub3AgKyBrZXkuaGVpZ2h0ICogMlxuXHRcdHBhdGguaHRtbCA9IFwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cblx0XHQ8c3ZnIHdpZHRoPScje0BwYXRoV2lkdGh9cHgnIGhlaWdodD0nI3tAcGF0aEhlaWdodH0nIHZpZXdCb3g9JzAgMCA2MyAxMTQnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycgeG1sbnM6c2tldGNoPSdodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMnPlxuXHRcdCAgICA8dGl0bGU+UmVjdGFuZ2xlIDQ0IENvcHk8L3RpdGxlPlxuXHRcdCAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHQgICAgPGRlZnM+XG5cdFx0ICAgICAgICA8ZmlsdGVyIHg9Jy01MCUnIHk9Jy01MCUnIHdpZHRoPScyMDAlJyBoZWlnaHQ9JzIwMCUnIGZpbHRlclVuaXRzPSdvYmplY3RCb3VuZGluZ0JveCcgaWQ9J2ZpbHRlci0xJz5cblx0XHQgICAgICAgICAgICA8ZmVPZmZzZXQgZHg9JzAnIGR5PScwJyBpbj0nU291cmNlQWxwaGEnIHJlc3VsdD0nc2hhZG93T2Zmc2V0T3V0ZXIxJz48L2ZlT2Zmc2V0PlxuXHRcdCAgICAgICAgICAgIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249JzEuNScgaW49J3NoYWRvd09mZnNldE91dGVyMScgcmVzdWx0PSdzaGFkb3dCbHVyT3V0ZXIxJz48L2ZlR2F1c3NpYW5CbHVyPlxuXHRcdCAgICAgICAgICAgIDxmZUNvbG9yTWF0cml4IHZhbHVlcz0nMCAwIDAgMCAwICAgMCAwIDAgMCAwICAgMCAwIDAgMCAwICAwIDAgMCAwLjIxIDAnIGluPSdzaGFkb3dCbHVyT3V0ZXIxJyB0eXBlPSdtYXRyaXgnIHJlc3VsdD0nc2hhZG93TWF0cml4T3V0ZXIxJz48L2ZlQ29sb3JNYXRyaXg+XG5cdFx0ICAgICAgICAgICAgPGZlTWVyZ2U+XG5cdFx0ICAgICAgICAgICAgICAgIDxmZU1lcmdlTm9kZSBpbj0nc2hhZG93TWF0cml4T3V0ZXIxJz48L2ZlTWVyZ2VOb2RlPlxuXHRcdCAgICAgICAgICAgICAgICA8ZmVNZXJnZU5vZGUgaW49J1NvdXJjZUdyYXBoaWMnPjwvZmVNZXJnZU5vZGU+XG5cdFx0ICAgICAgICAgICAgPC9mZU1lcmdlPlxuXHRcdCAgICAgICAgPC9maWx0ZXI+XG5cdFx0ICAgIDwvZGVmcz5cblx0XHQgICAgPGcgaWQ9J1BhZ2UtMScgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCcgc2tldGNoOnR5cGU9J01TUGFnZSc+XG5cdFx0ICAgICAgICA8ZyBpZD0naVBob25lLTYnIHNrZXRjaDp0eXBlPSdNU0FydGJvYXJkR3JvdXAnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC0xMTguMDAwMDAwLCAtMjQwLjAwMDAwMCknIHN0cm9rZT0nI0M3QzdDNycgZmlsdGVyPSd1cmwoI2ZpbHRlci0xKScgc3Ryb2tlLXdpZHRoPScwLjUnIFxuXHRcdCAgICAgICAgZmlsbD0nI0ZGRkZGRicgb3BhY2l0eT0nMC45OTgzNjc1MzcnPlxuXHRcdCAgICAgICAgIDxwYXRoIGQ9J00xMzQsMzA2IEMxMzQsMzA2IDEyMSwyOTUgMTIxLDI5MCBDMTIxLDI3OS42MTY3ODggMTIxLDI1My4wMDE0NTYgMTIxLDI1My4wMDE0NTYgQzEyMSwyNDcuNDc3ODA0IDEyNS40ODU4MzIsMjQzIDEzMS4wMDI3NzQsMjQzIEwxNjcuODYyMTI3LDI0MyBDMTczLjM4NjUwNywyNDMgMTc3Ljg4MDg2MiwyNDcuNDY5OTA1IFxuXHRcdCAgICAgICAgIDE3Ny45MDAwNDQsMjUyLjk5NzI3MSBDMTc3LjkwMDA0NCwyNTIuOTk3MjcxIDE3OCwyODAgMTc3Ljk5OTk5OSwyOTAgQzE3Ny45OTk5OTksMjk1LjAwNjU1MyAxNjUsMzA2IDE2NSwzMDYgTDE2NSwzNDYuMDQ5NTk0IFxuXHRcdCAgICAgICAgIEMxNjUsMzQ4LjgwNjgwNyAxNjIuNzcwNTU2LDM1MS4wNDE5NjkgMTYwLjAwMjA5OCwzNTEuMDQxOTY5IEwxMzguOTk3OTAyLDM1MS4wNDE5NjkgXG5cdFx0ICAgICAgICAgIEMxMzYuMjM3NjM3LDM1MS4wNDE5NjkgMTM0LDM0OC44MDgzMzEgMTM0LDM0Ni4wNDk1OTQgTDEzNCwzMDYgWicgaWQ9J1JlY3RhbmdsZS00NC1Db3B5JyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgxNDkuNTAwMDAwLCAyOTcuMDIwOTg1KSBzY2FsZSgtMSwgMSkgdHJhbnNsYXRlKC0xNDkuNTAwMDAwLCAtMjk3LjAyMDk4NSkgJz5cblx0XHQgICAgICAgICAgPC9wYXRoPlxuXHRcdCAgICAgICAgPC9nPlxuXHRcdCAgICA8L2c+XG5cdFx0PC9zdmc+XCJcblx0XHRrZXlzQXJyYXkucHVzaCBrZXlcblxuXG5cblx0XHRib2FyZC5vbiBFdmVudHMuVG91Y2hTdGFydCwgLT5cblx0XHRcdFxuXG5cblx0XHRrZXkub24gRXZlbnRzLlRvdWNoU3RhcnQsIC0+XG5cdFx0XHRrZXlQb3BVcC52aXNpYmxlID0gdHJ1ZVx0XG5cdFx0XHRib3guaHRtbCA9IEAubmFtZVxuXHRcdFx0a2V5UG9wVXAubWF4WSA9IEAubWF4WVxuXHRcdFx0a2V5UG9wVXAubWlkWCA9IEAubWlkWFxuXG5cdFx0a2V5Lm9uIEV2ZW50cy5Ub3VjaE1vdmUsIC0+XG5cdFx0XHRib3guaHRtbCA9IEAubmFtZVxuXHRcdFx0a2V5UG9wVXAubWF4WSA9IEAubWF4WVxuXHRcdFx0a2V5UG9wVXAubWlkWCA9IEAubWlkWFx0XG5cblx0XHRib2FyZC5vbiBFdmVudHMuVG91Y2hFbmQsIC0+XG5cdFx0XHRrZXlQb3BVcC52aXNpYmxlID0gZmFsc2VcblxuXG5cblxuXG5cdFx0XG5cblx0cmV0dXJuIHtcblx0XHRcImJvYXJkXCIgOiBib2FyZFxuXHRcdFwia2V5c1wiIDoga2V5c0FycmF5XG5cdFx0XCJrZXlcIiA6IHtcblx0XHRcdFwicVwiIDoga2V5c0FycmF5WzBdXG5cdFx0XHRcIndcIiA6IGtleXNBcnJheVsxXVxuXHRcdFx0XCJlXCIgOiBrZXlzQXJyYXlbMl1cblx0XHRcdFwiclwiIDoga2V5c0FycmF5WzNdXG5cdFx0XHRcInRcIiA6IGtleXNBcnJheVs0XVxuXHRcdFx0XCJ5XCIgOiBrZXlzQXJyYXlbNV1cblx0XHRcdFwidVwiIDoga2V5c0FycmF5WzZdXG5cdFx0XHRcImlcIiA6IGtleXNBcnJheVs3XVxuXHRcdFx0XCJvXCIgOiBrZXlzQXJyYXlbOF1cblx0XHRcdFwicFwiIDoga2V5c0FycmF5WzldXG5cdFx0XHRcImFcIiA6IGtleXNBcnJheVsxMF1cblx0XHRcdFwic1wiIDoga2V5c0FycmF5WzExXVxuXHRcdFx0XCJkXCIgOiBrZXlzQXJyYXlbMTJdXG5cdFx0XHRcImZcIiA6IGtleXNBcnJheVsxM11cblx0XHRcdFwiZ1wiIDoga2V5c0FycmF5WzE0XVxuXHRcdFx0XCJoXCIgOiBrZXlzQXJyYXlbMTVdXG5cdFx0XHRcImpcIiA6IGtleXNBcnJheVsxNl1cblx0XHRcdFwia1wiIDoga2V5c0FycmF5WzE3XVxuXHRcdFx0XCJsXCIgOiBrZXlzQXJyYXlbMThdXG5cdFx0XHRcInpcIiA6IGtleXNBcnJheVsxOV1cblx0XHRcdFwieFwiIDoga2V5c0FycmF5WzIwXVxuXHRcdFx0XCJjXCIgOiBrZXlzQXJyYXlbMjFdXG5cdFx0XHRcInZcIiA6IGtleXNBcnJheVsyMl1cblx0XHRcdFwiYlwiIDoga2V5c0FycmF5WzIzXVxuXHRcdFx0XCJuXCIgOiBrZXlzQXJyYXlbMjRdXG5cdFx0XHRcIm1cIiA6IGtleXNBcnJheVsyNV1cblx0XHR9XG5cdH1cblxuXG4iLCIjIEFkZCB0aGUgZm9sbG93aW5nIGxpbmUgdG8geW91ciBwcm9qZWN0IGluIEZyYW1lciBTdHVkaW8uIFxuIyBteU1vZHVsZSA9IHJlcXVpcmUgXCJteU1vZHVsZVwiXG4jIFJlZmVyZW5jZSB0aGUgY29udGVudHMgYnkgbmFtZSwgbGlrZSBteU1vZHVsZS5teUZ1bmN0aW9uKCkgb3IgbXlNb2R1bGUubXlWYXJcblxuZXhwb3J0cy5teVZhciA9IFwibXlWYXJpYWJsZVwiXG5cbmV4cG9ydHMubXlGdW5jdGlvbiA9IC0+XG5cdHByaW50IFwibXlGdW5jdGlvbiBpcyBydW5uaW5nXCJcblxuZXhwb3J0cy5teUFycmF5ID0gWzEsIDIsIDNdIl19
