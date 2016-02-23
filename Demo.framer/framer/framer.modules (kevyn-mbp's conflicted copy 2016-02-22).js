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
  var all, i, index, key, keysArray, len, letter, lettersArray, popUpLayers, rowIndex, rowsMap, spacer;
  all = new Layer({
    backgroundColor: "#D1D5DA",
    name: "keyboard"
  });
  all.constraints = {
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
  for (i = 0, len = lettersArray.length; i < len; i++) {
    letter = lettersArray[i];
    index = lettersArray.indexOf(letter);
    key = new Layer({
      name: "key " + letter,
      superLayer: all,
      borderRadius: 5 * exports.scale,
      backgroundColor: "white",
      color: "black",
      shadowY: 1,
      shadowColor: "black",
      shadowOpacity: .25
    });
    if (exports.scale === 2) {
      key.constraints = {
        width: 32,
        height: 44
      };
    }
    if (exports.scale === 3) {
      key.constraints = {
        width: 35,
        height: 46
      };
    }
    if (exports.width === 640) {
      key.constraints = {
        width: 26,
        height: 39
      };
    }
    exports.layout();
    key.style = {
      "font-size": 25 * exports.scale + "px",
      "font-weight": 300,
      "font-family": '-apple-system, Helvetica, Arial, sans-serif',
      'text-align': 'center',
      'line-height': key.height - exports.px(5) + "px"
    };
    key.html = letter;
    popUpLayers = [];
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
    key.on(Events.TouchStart, function() {
      var box, keyPopUp;
      keyPopUp = new Layer({
        width: 57 * exports.scale,
        height: 100 * exports.scale,
        x: this.x - 13 * exports.scale,
        maxY: all.y + this.y + key.height,
        backgroundColor: "transparent"
      });
      box = new Layer({
        width: 57 * exports.scale,
        height: 57 * exports.scale,
        borderRadius: 10 * exports.scale,
        superLayer: keyPopUp,
        backgroundColor: "white",
        color: "black"
      });
      box.html = this.html;
      box.style = {
        "font-size": 39 * exports.scale + "px",
        "font-weight": 300,
        "font-family": '-apple-system, Helvetica, Arial, sans-serif',
        'text-align': 'center',
        'padding-top': 17 * exports.scale + "px"
      };
      this.color = "white";
      return popUpLayers.push(keyPopUp);
    });
    key.on(Events.TouchEnd, function() {
      popUpLayers[popUpLayers.length - 1].destroy();
      return this.color = "black";
    });
    keysArray.push(key);
  }
  return {
    "all": all,
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMva2V2eW4vRHJvcGJveCAoUGVyc29uYWwpL0ZyYW1lciBQcm90b3R5cGVzL2ZyYW1lci1pb3Mta2l0L0RlbW8uZnJhbWVyL21vZHVsZXMvaU9TS2l0LmNvZmZlZSIsIi9Vc2Vycy9rZXZ5bi9Ecm9wYm94IChQZXJzb25hbCkvRnJhbWVyIFByb3RvdHlwZXMvZnJhbWVyLWlvcy1raXQvRGVtby5mcmFtZXIvbW9kdWxlcy9teU1vZHVsZS5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNFQSxJQUFBOztBQUFBLGFBQUEsR0FBZ0I7RUFFaEIsWUFBQSxFQUFlO0lBQUUsTUFBQSxFQUFRLE1BQU0sQ0FBQyxXQUFqQjtJQUE4QixLQUFBLEVBQU8sTUFBTSxDQUFDLFVBQTVDO0lBQXdELEtBQUEsRUFBTSxDQUE5RDtJQUFpRSxNQUFBLEVBQU8sS0FBeEU7SUFBK0UsUUFBQSxFQUFTLEtBQXhGO0dBRkM7RUFLaEIseUJBQUEsRUFBMkI7SUFBRSxNQUFBLEVBQVEsR0FBVjtJQUFlLEtBQUEsRUFBTyxJQUF0QjtJQUE0QixLQUFBLEVBQU8sQ0FBbkM7SUFBc0MsTUFBQSxFQUFPLEtBQTdDO0lBQW9ELFFBQUEsRUFBUyxLQUE3RDtHQUxYO0VBTWhCLHlCQUFBLEVBQTJCO0lBQUUsTUFBQSxFQUFRLEdBQVY7SUFBZSxLQUFBLEVBQU8sSUFBdEI7SUFBNEIsS0FBQSxFQUFPLENBQW5DO0lBQXNDLE1BQUEsRUFBTyxLQUE3QztJQUFvRCxRQUFBLEVBQVMsS0FBN0Q7R0FOWDtFQU9oQix5QkFBQSxFQUEyQjtJQUFFLE1BQUEsRUFBUSxHQUFWO0lBQWUsS0FBQSxFQUFPLElBQXRCO0lBQTRCLEtBQUEsRUFBTyxDQUFuQztJQUFzQyxNQUFBLEVBQU8sS0FBN0M7SUFBb0QsUUFBQSxFQUFTLEtBQTdEO0dBUFg7RUFZaEIscUJBQUEs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cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiI2lPU0tpdCBNb2R1bGVcbiNCeSBLZXZ5biBBcm5vdHQgQGt2eW5fXG5mcmFtZXJEZXZpY2VzID0ge1xuI0Z1bGxzY3JlZW5cblwiZnVsbHNjcmVlblwiIDogeyBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCwgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFx0c2NhbGU6MSwgbW9iaWxlOmZhbHNlLCBwbGF0Zm9ybTpcIndlYlwifVxuXG4jU2FmYXJpIEJyb3dzZXJzXG5cImRlc2t0b3Atc2FmYXJpLTEwMjQtNjAwXCI6IHsgaGVpZ2h0OiA2MDAsIHdpZHRoOiAxMDI0LFx0c2NhbGU6IDEsIG1vYmlsZTpmYWxzZSwgcGxhdGZvcm06XCJ3ZWJcIn1cblwiZGVza3RvcC1zYWZhcmktMTI4MC04MDBcIjogeyBoZWlnaHQ6IDgwMCwgd2lkdGg6IDEyODAsXHRzY2FsZTogMSwgbW9iaWxlOmZhbHNlLCBwbGF0Zm9ybTpcIndlYlwifVxuXCJkZXNrdG9wLXNhZmFyaS0xNDQwLTkwMFwiOiB7IGhlaWdodDogOTAwLCB3aWR0aDogMTQ0MCxcdHNjYWxlOiAxLCBtb2JpbGU6ZmFsc2UsIHBsYXRmb3JtOlwid2ViXCJ9XG5cbiNpUGhvbmVzXG5cbiM1U1xuXCJpcGhvbmUtNXMtc3BhY2VncmF5XCI6IHsgaGVpZ2h0OiAxMTM2LCB3aWR0aDogNjQwLFx0c2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXCJpcGhvbmUtNXMtc3BhY2VncmF5LWhhbmRcIjogeyBoZWlnaHQ6IDExMzYsIHdpZHRoOiA2NDAsXHRzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cImlwaG9uZS01cy1zaWx2ZXJcIjogeyBoZWlnaHQ6IDExMzYsIHdpZHRoOiA2NDAsXHRzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cImlwaG9uZS01cy1zaWx2ZXItaGFuZFwiOiB7IGhlaWdodDogMTEzNiwgd2lkdGg6IDY0MCxcdHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblwiaXBob25lLTVzLWdvbGRcIjogeyBoZWlnaHQ6IDExMzYsIHdpZHRoOiA2NDAsXHRzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cImlwaG9uZS01cy1nb2xkLWhhbmRcIjogeyBoZWlnaHQ6IDExMzYsIHdpZHRoOiA2NDAsXHRzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG4jNWNcblwiaXBob25lLTVjLXllbGxvdy1oYW5kXCI6IHsgaGVpZ2h0OiAyMDQ4LCB3aWR0aDogMTUzNixcdHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblwiaXBob25lLTVjLWdyZWVuXCI6IHsgaGVpZ2h0OiAxMTM2LCB3aWR0aDogNjQwLFx0c2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXCJpcGhvbmUtNWMtZ3JlZW4taGFuZFwiOiB7IGhlaWdodDogMTEzNiwgd2lkdGg6IDY0MCxcdHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblwiaXBob25lLTVjLWJsdWVcIjogeyBoZWlnaHQ6IDExMzYsIHdpZHRoOiA2NDAsXHRzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cImlwaG9uZS01Yy1ibHVlLWhhbmRcIjogeyBoZWlnaHQ6IDExMzYsIHdpZHRoOiA2NDAsXHRzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cImlwaG9uZS01Yy1yZWRcIjogeyBoZWlnaHQ6IDExMzYsIHdpZHRoOiA2NDAsXHRzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cImlwaG9uZS01Yy1yZWQtaGFuZFwiOiB7IGhlaWdodDogMTEzNiwgd2lkdGg6IDY0MCxcdHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblwiaXBob25lLTVjLXdoaXRlXCI6IHsgaGVpZ2h0OiAxMTM2LCB3aWR0aDogNjQwLFx0c2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXCJpcGhvbmUtNWMtd2hpdGUtaGFuZFwiOiB7IGhlaWdodDogMTEzNiwgd2lkdGg6IDY0MCxcdHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblwiaXBob25lLTVjLXllbGxvd1wiOiB7IGhlaWdodDogMTEzNiwgd2lkdGg6IDY0MCxcdHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblwiaXBob25lLTVjLXBpbmstaGFuZFwiOiB7IGhlaWdodDogMTEzNiwgd2lkdGg6IDY0MCxcdHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblwiaXBob25lLTVjLXBpbmtcIjogeyBoZWlnaHQ6IDExMzYsIHdpZHRoOiA2NDAsXHRzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG4jNlxuXCJpcGhvbmUtNi1zcGFjZWdyYXlcIiA6IHsgaGVpZ2h0OiAxMzM0LCB3aWR0aDogNzUwLFx0c2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXCJpcGhvbmUtNi1zcGFjZWdyYXktaGFuZFwiIDogeyBoZWlnaHQ6IDEzMzQsIHdpZHRoOiA3NTAsXHRzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cImlwaG9uZS02LXNpbHZlclwiOiB7IGhlaWdodDogMTMzNCwgd2lkdGg6IDc1MCxcdHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblwiaXBob25lLTYtc2lsdmVyLWhhbmRcIjogeyBoZWlnaHQ6IDEzMzQsIHdpZHRoOiA3NTAsXHRzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cImlwaG9uZS02LWdvbGRcIjogeyBoZWlnaHQ6IDEzMzQsIHdpZHRoOiA3NTAsXHRzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cImlwaG9uZS02LWdvbGQtaGFuZFwiOiB7IGhlaWdodDogMTMzNCwgd2lkdGg6IDc1MCxcdHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cbiM2IHBsdXNcblwiaXBob25lLTZwbHVzLWdvbGQtaGFuZFwiOiB7IGhlaWdodDogMjIwOCwgd2lkdGg6IDEyNDIsXHRzY2FsZTogMywgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cImlwaG9uZS02cGx1cy1nb2xkXCI6IHsgaGVpZ2h0OiAyMjA4LCB3aWR0aDogMTI0MixcdHNjYWxlOiAzLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblwiaXBob25lLTZwbHVzLXNpbHZlci1oYW5kXCI6IHsgaGVpZ2h0OiAyMjA4LCB3aWR0aDogMTI0MixcdHNjYWxlOiAzLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblwiaXBob25lLTZwbHVzLXNpbHZlclwiOiB7IGhlaWdodDogMjIwOCwgd2lkdGg6IDEyNDIsXHRzY2FsZTogMywgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cImlwaG9uZS02cGx1cy1zcGFjZWdyYXktaGFuZFwiOiB7IGhlaWdodDogMjIwOCwgd2lkdGg6IDEyNDIsXHRzY2FsZTogMywgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cImlwaG9uZS02cGx1cy1zcGFjZWdyYXlcIjogeyBoZWlnaHQ6IDIyMDgsIHdpZHRoOiAxMjQyLFx0c2NhbGU6IDMsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXCJpcGhvbmU2cGx1cy1nb2xkLWhhbmRcIjogeyBoZWlnaHQ6IDIyMDgsIHdpZHRoOiAxMjQyLFx0c2NhbGU6IDMsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXCJpcGhvbmU2cGx1cy1nb2xkXCI6IHsgaGVpZ2h0OiAyMjA4LCB3aWR0aDogMTI0MixcdHNjYWxlOiAzLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblwiaXBob25lNnBsdXMtc2lsdmVyLWhhbmRcIjogeyBoZWlnaHQ6IDIyMDgsIHdpZHRoOiAxMjQyLFx0c2NhbGU6IDMsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXCJpcGhvbmU2cGx1cy1zaWx2ZXJcIjogeyBoZWlnaHQ6IDIyMDgsIHdpZHRoOiAxMjQyLFx0c2NhbGU6IDMsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXCJpcGhvbmU2cGx1cy1zcGFjZWdyYXktaGFuZFwiOiB7IGhlaWdodDogMjIwOCwgd2lkdGg6IDEyNDIsXHRzY2FsZTogMywgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cImlwaG9uZTZwbHVzLXNwYWNlZ3JheVwiIDogeyBoZWlnaHQ6IDIyMDgsIHdpZHRoOiAxMjQyLFx0c2NhbGU6IDMsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXG4jaVBhZHNcblxuI0FpclxuXCJpcGFkLWFpci1zaWx2ZXItaGFuZFwiOiB7IGhlaWdodDogMjA0OCwgd2lkdGg6IDE1MzYsXHRzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cImlwYWQtYWlyLXNpbHZlclwiOiB7IGhlaWdodDogMjA0OCwgd2lkdGg6IDE1MzYsXHRzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cImlwYWQtYWlyLXNwYWNlZ3JheS1oYW5kXCI6IHsgaGVpZ2h0OiAyMDQ4LCB3aWR0aDogMTUzNixcdHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblwiaXBhZC1haXItc3BhY2VncmF5XCI6IHsgaGVpZ2h0OiAyMDQ4LCB3aWR0aDogMTUzNixcdHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cbiNtaW5pXG5cImlwYWQtbWluaS1zcGFjZWdyZXlcIjogeyBoZWlnaHQ6IDEwMjQsIHdpZHRoOiA3NjgsXHRzY2FsZTogMSwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cImlwYWQtbWluaS1zcGFjZWdyZXktaGFuZFwiOiB7IGhlaWdodDogMTAyNCwgd2lkdGg6IDc2OCxcdHNjYWxlOiAxLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblwiaXBhZC1taW5pLXNpbHZlclwiOnsgaGVpZ2h0OiAxMDI0LCB3aWR0aDogNzY4LCBzY2FsZTogMSwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cImlwYWQtbWluaS1zaWx2ZXItaGFuZFwiOiB7IGhlaWdodDogMTAyNCwgd2lkdGg6IDc2OCwgc2NhbGU6IDEsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXG4jQXBwbGUgV2F0Y2hlc1xuXCJhcHBsZXdhdGNoLTM4LWJsYWNrLWJyYWNlbGV0XCI6IHsgaGVpZ2h0OiAzNDAsIHdpZHRoOiAyNzIsXHRzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwid2F0Y2hPU1wifVxuXCJhcHBsZXdhdGNoLTM4LXN0ZWVsLWJyYWNlbGV0XCI6IHsgaGVpZ2h0OiAzNDAsIHdpZHRoOiAyNzIsXHRzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwid2F0Y2hPU1wifVxuXCJhcHBsZXdhdGNoLTQyLWJsYWNrLWJyYWNlbGV0XCI6IHsgaGVpZ2h0OiAzOTAsIHdpZHRoOiAzMTIsXHRzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwid2F0Y2hPU1wifVxuXCJhcHBsZXdhdGNoLTQyLXN0ZWVsLWJyYWNlbGV0XCI6IHsgaGVpZ2h0OiAzOTAsIHdpZHRoOiAzMTIsXHRzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwid2F0Y2hPU1wifVxuXCJhcHBsZXdhdGNoZWRpdGlvbi0zOC1nb2xkLWJ1Y2tsZS1ibHVlXCI6IHsgaGVpZ2h0OiAzNDAsIHdpZHRoOiAyNzIsXHRzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwid2F0Y2hPU1wifVxuXCJhcHBsZXdhdGNoZWRpdGlvbi0zOC1nb2xkLWJ1Y2tsZS1ncmF5XCI6IHsgaGVpZ2h0OiAzNDAsIHdpZHRoOiAyNzIsXHRzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwid2F0Y2hPU1wifVxuXCJhcHBsZXdhdGNoZWRpdGlvbi0zOC1nb2xkLWJ1Y2tsZS1yZWRcIjogeyBoZWlnaHQ6IDM0MCwgd2lkdGg6IDI3MixcdHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJ3YXRjaE9TXCJ9XG5cImFwcGxld2F0Y2hlZGl0aW9uLTM4LWdvbGQtc3BvcnRiYW5kLWJsYWNrXCI6IHsgaGVpZ2h0OiAzNDAsIHdpZHRoOiAyNzIsXHRzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwid2F0Y2hPU1wifVxuXCJhcHBsZXdhdGNoZWRpdGlvbi0zOC1nb2xkLXNwb3J0YmFuZC13aGl0ZVwiOiB7IGhlaWdodDogMzQwLCB3aWR0aDogMjcyLFx0c2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcIndhdGNoT1NcIn1cblwiYXBwbGV3YXRjaGVkaXRpb24tNDItZ29sZC1idWNrbGUtYmx1ZVwiOiB7IGhlaWdodDogMzkwLCB3aWR0aDogMzEyLFx0c2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcIndhdGNoT1NcIn1cblwiYXBwbGV3YXRjaGVkaXRpb24tNDItZ29sZC1idWNrbGUtZ3JheVwiOiB7IGhlaWdodDogMzkwLCB3aWR0aDogMzEyLFx0c2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcIndhdGNoT1NcIn1cblwiYXBwbGV3YXRjaGVkaXRpb24tNDItZ29sZC1idWNrbGUtcmVkXCI6IHsgaGVpZ2h0OiAzOTAsIHdpZHRoOiAzMTIsXHRzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwid2F0Y2hPU1wifVxuXCJhcHBsZXdhdGNoZWRpdGlvbi00Mi1nb2xkLXNwb3J0YmFuZC1ibGFja1wiOiB7IGhlaWdodDogMzkwLCB3aWR0aDogMzEyLFx0c2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcIndhdGNoT1NcIn1cblwiYXBwbGV3YXRjaGVkaXRpb24tNDItZ29sZC1zcG9ydGJhbmQtd2hpdGVcIjogeyBoZWlnaHQ6IDM5MCwgd2lkdGg6IDMxMixcdHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJ3YXRjaE9TXCJ9XG5cImFwcGxld2F0Y2hzcG9ydC0zOC1hbHVtaW51bS1zcG9ydGJhbmQtYmxhY2tcIjogeyBoZWlnaHQ6IDM0MCwgd2lkdGg6IDI3MixcdHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJ3YXRjaE9TXCJ9XG5cImFwcGxld2F0Y2hzcG9ydC0zOC1hbHVtaW51bS1zcG9ydGJhbmQtYmx1ZVwiOiB7IGhlaWdodDogMzQwLCB3aWR0aDogMjcyLFx0c2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcIndhdGNoT1NcIn1cblwiYXBwbGV3YXRjaHNwb3J0LTM4LWFsdW1pbnVtLXNwb3J0YmFuZC1ncmVlblwiOiB7IGhlaWdodDogMzQwLCB3aWR0aDogMjcyLFx0c2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcIndhdGNoT1NcIn1cblwiYXBwbGV3YXRjaHNwb3J0LTM4LWFsdW1pbnVtLXNwb3J0YmFuZC1waW5rXCI6IHsgaGVpZ2h0OiAzNDAsIHdpZHRoOiAyNzIsXHRzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwid2F0Y2hPU1wifVxuXCJhcHBsZXdhdGNoc3BvcnQtMzgtYWx1bWludW0tc3BvcnRiYW5kLXdoaXRlXCI6IHsgaGVpZ2h0OiAzNDAsIHdpZHRoOiAyNzIsXHRzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwid2F0Y2hPU1wifVxuXCJhcHBsZXdhdGNoc3BvcnQtNDItYWx1bWludW0tc3BvcnRiYW5kLWJsYWNrXCI6IHsgaGVpZ2h0OiAzOTAsIHdpZHRoOiAzMTIsXHRzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwid2F0Y2hPU1wifVxuXCJhcHBsZXdhdGNoc3BvcnQtNDItYWx1bWludW0tc3BvcnRiYW5kLWJsdWVcIjogeyBoZWlnaHQ6IDM5MCwgd2lkdGg6IDMxMixcdHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJ3YXRjaE9TXCJ9XG5cImFwcGxld2F0Y2hzcG9ydC00Mi1hbHVtaW51bS1zcG9ydGJhbmQtZ3JlZW5cIjogeyBoZWlnaHQ6IDM5MCwgd2lkdGg6IDMxMixcdHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJ3YXRjaE9TXCJ9XG5cImFwcGxld2F0Y2hzcG9ydC00Mi1hbHVtaW51bS1zcG9ydGJhbmQtcGlua1wiOiB7IGhlaWdodDogMzkwLCB3aWR0aDogMzEyLFx0c2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcIndhdGNoT1NcIn1cblwiYXBwbGV3YXRjaHNwb3J0LTQyLWFsdW1pbnVtLXNwb3J0YmFuZC13aGl0ZVwiOiB7IGhlaWdodDogMzkwLCB3aWR0aDogMzEyLFx0c2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcIndhdGNoT1NcIn1cblxuI05leHVzIERldmljZXNcblwibmV4dXMtNS1ibGFja1wiOiB7IGhlaWdodDogMTkyMCwgd2lkdGg6IDEwODAsXHRzY2FsZTogMywgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiYW5kcm9pZFwifVxuXCJuZXh1cy01LWJsYWNrLWhhbmRcIjogeyBoZWlnaHQ6IDE5MjAsIHdpZHRoOiAxMDgwLFx0c2NhbGU6IDMsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImFuZHJvaWRcIn1cblwibmV4dXMtOVwiOiB7IGhlaWdodDogMjA0OCwgd2lkdGg6IDE1MzYsXHRzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiYW5kcm9pZFwifVxufVxuXG5leHBvcnRzLm5hbWUgPSAwXG5leHBvcnRzLnNjYWxlID0gMFxuZXhwb3J0cy5oZWlnaHQgPSAwXG5leHBvcnRzLndpZHRoID0gMFxuZXhwb3J0cy5tb2JpbGUgPSAwXG5leHBvcnRzLnBsYXRmb3JtID0gMFxuZXhwb3J0cy5vcmllbnRhdGlvbiA9IDBcblxuZXhwb3J0cy5nZXREZXZpY2UgPSAtPlxuXHRkZXZpY2UgPSBGcmFtZXIuRGV2aWNlLmRldmljZVR5cGVcblx0ZXhwb3J0cy5zY2FsZSA9IGZyYW1lckRldmljZXNbZGV2aWNlXS5zY2FsZVxuXHRpZiBkZXZpY2UgPT0gXCJmdWxsc2NyZWVuXCJcblx0XHRleHBvcnRzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGhcblx0XHRleHBvcnRzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodFxuXHRlbHNlXG5cdFx0ZXhwb3J0cy53aWR0aCA9IGZyYW1lckRldmljZXNbZGV2aWNlXS53aWR0aFxuXHRcdGV4cG9ydHMuaGVpZ2h0ID0gZnJhbWVyRGV2aWNlc1tkZXZpY2VdLmhlaWdodFxuXHRcdGlmIHdpbmRvdy5pbm5lcldpZHRoID09IDEyNDIgfHwgd2luZG93LmlubmVyV2lkdGggPT0gMjIwOFxuXHRcdFx0ZXhwb3J0cy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoXG5cdFx0XHRleHBvcnRzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodFxuXHRcdFx0ZXhwb3J0cy5zY2FsZSA9IDNcblx0ZXhwb3J0cy5tb2JpbGUgPSBmcmFtZXJEZXZpY2VzW2RldmljZV0ubW9iaWxlXG5cdGV4cG9ydHMucGxhdGZvcm0gPSBmcmFtZXJEZXZpY2VzW2RldmljZV0ucGxhdGZvcm1cblx0ZXhwb3J0cy5vcmllbnRhdGlvbiA9ICBGcmFtZXIuRGV2aWNlLm9yaWVudGF0aW9uXG5cblxuZXhwb3J0cy5vcmllbnQgPSAoKSAtPlxuXHRpZiBleHBvcnRzLm9yaWVudGF0aW9uID09IC05MFxuXHRcdHRlbXBIZWlnaHQgPSBleHBvcnRzLmhlaWdodFxuXHRcdHRlbXBXaWR0aCA9IGV4cG9ydHMud2lkdGhcblx0XHRleHBvcnRzLmhlaWdodCA9IHRlbXBXaWR0aFxuXHRcdGV4cG9ydHMud2lkdGggPSB0ZW1wSGVpZ2h0XG5cbmV4cG9ydHMuZ2V0RGV2aWNlKClcbmV4cG9ydHMub3JpZW50KClcblxuXG4jTGlzdGVuIHRvIHdpbmRvdyByZWl6ZVxub25SZXNpemUgPSAoKSAtPlxuXHRleHBvcnRzLmdldERldmljZSgpXG5cdGV4cG9ydHMubGF5b3V0KClcblxuXG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIG9uUmVzaXplKVxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJvcmllbnRhdGlvbmNoYW5nZVwiICwgb25SZXNpemUpXG5cblxuXG5kZWZhdWx0cyA9IHtcblx0Y29uc3RyYWludFByb3BzIDogW1wiaGVpZ2h0XCIsIFwid2lkdGhcIl1cblx0Y29uc3RyYWludFR5cGVzOiBbXCJ0b3BcIiwgXCJsZWFkaW5nXCIsIFwidHJhaWxpbmdcIiwgXCJib3R0b21cIl1cblx0Y29uc3RyYWludHM6IHtcblx0XHR0b3A6IHtcblx0XHRcdFwicHJvcFwiIDogXCJ5XCJcblx0XHRcdFwib2JqUHJvcFwiIDogXCJtYXhZXCJcblx0XHRcdFwib2JqUHJvcDJcIiA6IFwiaGVpZ2h0XCJcblx0XHRcdFwib3BwXCIgOiBcImJvdHRvbVwiXG5cdFx0fVxuXHRcdGxlYWRpbmc6IHtcblx0XHRcdFwicHJvcFwiIDogXCJ4XCJcblx0XHRcdFwib2JqUHJvcFwiIDogXCJtYXhYXCJcblx0XHRcdFwib2JqUHJvcDJcIiA6IFwid2lkdGhcIlxuXHRcdFx0XCJvcHBcIiA6IFwidHJhaWxpbmdcIlxuXHRcdH1cblx0XHRib3R0b206IHtcblx0XHRcdFwicHJvcFwiIDogXCJtYXhZXCJcblx0XHRcdFwib2JqUHJvcFwiIDogXCJoZWlnaHRcIlxuXHRcdFx0XCJvYmpQcm9wMlwiIDogXCJ5XCJcblx0XHRcdFwib3BwXCIgOiBcInRvcFwiXG5cdFx0fVxuXHRcdHRyYWlsaW5nOiB7XG5cdFx0XHRcInByb3BcIiA6IFwibWF4WFwiXG5cdFx0XHRcIm9ialByb3BcIiA6IFwid2lkdGhcIlxuXHRcdFx0XCJvYmpQcm9wMlwiIDogXCJ4XCJcblx0XHRcdFwib3BwXCIgOiBcImxlYWRpbmdcIlxuXHRcdH1cblx0fVxufVxuIyMgQ29udmVyc2lvbnNcblxuI1BpeGVscyB0byBQb2ludHNcbmV4cG9ydHMucHQgPSAocHgpIC0+XG5cdHB0ID0gcHgvZXhwb3J0cy5zY2FsZVxuXHRwdCA9IE1hdGgucm91bmQocHQpXG5cdHJldHVybiBwdFxuXG4jUG9pbnRzIHRvIFBpeGVsc1xuZXhwb3J0cy5weCA9IChwdCkgLT5cblx0cHggPSBwdCAqIGV4cG9ydHMuc2NhbGVcblx0cHggPSBNYXRoLnJvdW5kKHB4KVxuXHRyZXR1cm4gcHhcblxuIyMgRXJyb3JzXG5cbmVycm9yID0gKGNvbnRleHQsIGNvZGUpIC0+XG5cdGlmIGNvZGUgPT0gMSBcblx0XHRwcmludCBcIkVycm9yIEludmFsaWQgUmVsYXRpb25zaGlwIOKAkyBMYXllciBpZDoje2NvbnRleHQuaWR9IGhhcyBhIHJlbGF0aW9uc2hpcCB3aXRoIGFub3RoZXIgbGF5ZXIgbm90IGluIHRoZSBzYW1lIHN1cGVyTGF5ZXIuXCJcblxuXG4jIyBBdXRvTGF5b3V0XG5cbiNjaGVja3MgaWYgdHdvIGxheWVycyBoYXZlIHRoZSBzYW1lIHBhcmVudFxuZXhwb3J0cy5zYW1lUGFyZW50ID0gKGxheWVyMSwgbGF5ZXIyKSAtPlxuXHRwYXJlbnRPbmUgPSBsYXllcjEuc3VwZXJMYXllclxuXHRwYXJlbnRUd28gPSBsYXllcjIuc3VwZXJMYXllclxuXHRpZiBwYXJlbnRPbmUgPT0gcGFyZW50VHdvXG5cdFx0cmV0dXJuIHRydWVcblx0ZWxzZSBcblx0XHRyZXR1cm4gZmFsc2VcblxuI1JlZnJlc2hlcyBMYXllciBvciBBbGwgTGF5ZXJzXG5leHBvcnRzLmxheW91dCA9IChsYXllcikgLT5cblx0aWYgbGF5ZXIgPT0gdW5kZWZpbmVkXG5cdFx0QC5hcnJheSA9IEZyYW1lci5DdXJyZW50Q29udGV4dC5sYXllcnNcblx0ZWxzZSBcblx0XHRALmFycmF5ID0gW2xheWVyXVxuXHRmb3IgbGF5ZXIgaW4gQC5hcnJheVxuXHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzICE9IHVuZGVmaW5lZFxuXHRcdFx0Zm9yIHAgaW4gZGVmYXVsdHMuY29uc3RyYWludFByb3BzXG5cdFx0XHRcdGxheW91dFNpemUobGF5ZXIsIHApXG5cdFx0XHRmb3IgYyBpbiBkZWZhdWx0cy5jb25zdHJhaW50VHlwZXNcblx0XHRcdFx0bGF5b3V0Q2hhbmdlKGxheWVyLCBjKVxuXG4jU2l6ZSBDb25zdHJhaW50c1xuXG5cbmxheW91dFNpemUgPSAobGF5ZXIsIHR5cGUpIC0+XG5cdGlmIGxheWVyLmNvbnN0cmFpbnRzW3R5cGVdXG5cdFx0bGF5ZXJbdHlwZV0gPSBleHBvcnRzLnB4KGxheWVyLmNvbnN0cmFpbnRzW3R5cGVdKVxuXG5cbiNNb3ZlICYgUmVzaXplcyBMYXllcnNcbmxheW91dENoYW5nZSA9IChsYXllciwgdHlwZSkgLT5cblx0aWYgbGF5ZXIuY29uc3RyYWludHNbdHlwZV0gIT0gdW5kZWZpbmVkIFxuXHRcdHByb3AgPSBkZWZhdWx0cy5jb25zdHJhaW50c1t0eXBlXS5wcm9wXG5cdFx0b2JqUHJvcCA9IGRlZmF1bHRzLmNvbnN0cmFpbnRzW3R5cGVdLm9ialByb3Bcblx0XHRvcHAgPSBkZWZhdWx0cy5jb25zdHJhaW50c1t0eXBlXS5vcHBcblx0XHRzdXBlclRyYWl0ID0gZGVmYXVsdHMuY29uc3RyYWludHNbdHlwZV0ub2JqUHJvcFxuXG5cdFx0aWYgb2JqUHJvcCAhPSBcIndpZHRoXCIgJiYgb2JqUHJvcCAhPSBcImhlaWdodFwiXG5cdFx0XHRzdXBlclRyYWl0ID0gZGVmYXVsdHMuY29uc3RyYWludHNbdHlwZV0ub2JqUHJvcDJcblxuXHRcdGlmIGxheWVyLnN1cGVyTGF5ZXIgIT0gbnVsbFxuXHRcdFx0I0hhcyBhIHN1cGVyTGF5ZXJcblx0XHRcdEBbc3VwZXJUcmFpdF0gPSBsYXllci5zdXBlckxheWVyW3N1cGVyVHJhaXRdXG5cdFx0ZWxzZVxuXHRcdFx0I0RvZXMgbm90IGhhdmUgYSBzdXBlckxheWVyXG5cdFx0XHRAW3N1cGVyVHJhaXRdID0gZXhwb3J0c1tzdXBlclRyYWl0XVxuXHRcdGlmIHR5cGUgPT0gXCJ0b3BcIiB8fCB0eXBlID09IFwibGVhZGluZ1wiXG5cdFx0XHQjIEhhbmRsZSBUb3AgJiBMZWFkaW5nXG5cdFx0XHRpZiBsYXllci5jb25zdHJhaW50c1t0eXBlXSA9PSBwYXJzZUludChsYXllci5jb25zdHJhaW50c1t0eXBlXSwgMTApXG5cdFx0XHRcdGxheWVyW3Byb3BdID0gbGF5ZXIuY29uc3RyYWludHNbdHlwZV0gKiBleHBvcnRzLnNjYWxlXG5cdFx0XHRlbHNlIFxuXHRcdFx0XHRpZiBsYXllci5jb25zdHJhaW50c1t0eXBlXS5sZW5ndGggPT0gdW5kZWZpbmVkXG5cdFx0XHRcdFx0bGF5ZXJbcHJvcF0gPSBsYXllci5jb25zdHJhaW50c1t0eXBlXVtvYmpQcm9wXVxuXHRcdFx0XHRpZiBsYXllci5jb25zdHJhaW50c1t0eXBlXS5sZW5ndGggPT0gMVxuXHRcdFx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzW3R5cGVdWzBdID09IHBhcnNlSW50KGxheWVyLmNvbnN0cmFpbnRzW3R5cGVdWzBdLCAxMClcblx0XHRcdFx0XHRcdGxheWVyW3Byb3BdID0gbGF5ZXIuY29uc3RyYWludHNbdHlwZV1bMF0gKiBleHBvcnRzLnNjYWxlXG5cdFx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdFx0bGF5ZXJbcHJvcF0gPSBsYXllci5jb25zdHJhaW50c1t0eXBlXVswXVtvYmpQcm9wXVxuXHRcdFx0XHRpZiBsYXllci5jb25zdHJhaW50c1t0eXBlXS5sZW5ndGggPiAxIFxuXHRcdFx0XHRcdGZvciBvYmplY3QgaW4gbGF5ZXIuY29uc3RyYWludHNbdHlwZV1cblx0XHRcdFx0XHRcdGlmIG9iamVjdCA9PSBwYXJzZUludChvYmplY3QsIDEwKVxuXHRcdFx0XHRcdFx0XHRALm9iakludCA9IG9iamVjdFxuXHRcdFx0XHRcdFx0ZWxzZSBcblx0XHRcdFx0XHRcdFx0QC5vYmpMYXllciA9IG9iamVjdFxuXHRcdFx0XHRcdGxheWVyW3Byb3BdID0gKEAub2JqSW50ICogZXhwb3J0cy5zY2FsZSkgKyBALm9iakxheWVyW29ialByb3BdXG5cdFx0XHRpZiBsYXllci5jb25zdHJhaW50c1tvcHBdXG5cdFx0XHRcdHRyYWl0ID0gZGVmYXVsdHMuY29uc3RyYWludHNbb3BwXVtcIm9ialByb3BcIl1cblx0XHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHNbb3BwXSA9PSBwYXJzZUludChsYXllci5jb25zdHJhaW50c1tvcHBdLCAxMClcblx0XHRcdFx0XHRsYXllclt0cmFpdF0gPSBAW3N1cGVyVHJhaXRdIC0gKGxheWVyW3Byb3BdICsgKGV4cG9ydHMuc2NhbGUgKiBsYXllci5jb25zdHJhaW50c1tvcHBdKSlcblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzW29wcF0ubGVuZ3RoID09IHVuZGVmaW5lZFxuXHRcdFx0XHRcdFx0bGF5ZXJbdHJhaXRdID0gbGF5ZXJbcHJvcF0gLSBsYXllci5jb25zdHJhaW50c1tvcHBdW3Byb3BdXG5cdFx0XHRcdFx0XHRpZiBsYXllclt0cmFpdF0gPCAwXG5cdFx0XHRcdFx0XHRcdGxheWVyW3RyYWl0XSA9IGxheWVyW3RyYWl0XSAqIC0xXG5cdFx0ZWxzZVxuXHRcdFx0IyMgSGFuZGxlIEJvdHRvbSAmIFRyYWlsaW5nXG5cdFx0XHRvYmpQcm9wMiA9IGRlZmF1bHRzLmNvbnN0cmFpbnRzW3R5cGVdLm9ialByb3AyXG5cdFx0XHRpZiBsYXllci5jb25zdHJhaW50c1tvcHBdID09IHVuZGVmaW5lZFxuXHRcdFx0XHQjIyBObyBvcHBvc2l0ZVxuXHRcdFx0XHRpZiBsYXllci5jb25zdHJhaW50c1t0eXBlXSA9PSBwYXJzZUludChsYXllci5jb25zdHJhaW50c1t0eXBlXSwgMTApXG5cdFx0XHRcdFx0IyMgT25seSBJbnRlZ2VyXG5cdFx0XHRcdFx0bGF5ZXJbcHJvcF0gPSBAW3N1cGVyVHJhaXRdIC0gKGxheWVyLmNvbnN0cmFpbnRzW3R5cGVdICogZXhwb3J0cy5zY2FsZSlcblx0XHRcdFx0ZWxzZSBcblx0XHRcdFx0XHRpZiBsYXllci5jb25zdHJhaW50c1t0eXBlXS5sZW5ndGggPT0gdW5kZWZpbmVkXG5cdFx0XHRcdFx0XHQjRW50ZXJlZCBMYXllclxuXHRcdFx0XHRcdFx0aWYgZXhwb3J0cy5zYW1lUGFyZW50KGxheWVyLCBsYXllci5jb25zdHJhaW50c1t0eXBlXSlcblx0XHRcdFx0XHRcdFx0bGF5ZXJbcHJvcF0gPSBsYXllci5jb25zdHJhaW50c1t0eXBlXVtvYmpQcm9wMl1cblx0XHRcdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRcdFx0ZXJyb3IobGF5ZXIsIDEpXG5cdFx0XHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHNbdHlwZV0ubGVuZ3RoID09IDFcblx0XHRcdFx0XHRcdCNBcnJheSBvZiBPbmVcblx0XHRcdFx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzW3R5cGVdWzBdID09IHBhcnNlSW50KGxheWVyLmNvbnN0cmFpbnRzW3R5cGVdWzBdLCAxMClcblx0XHRcdFx0XHRcdFx0I0ludFxuXHRcdFx0XHRcdFx0XHRsYXllcltwcm9wXSA9IEBbb2JqUHJvcF0gLSAobGF5ZXIuY29uc3RyYWludHNbdHlwZV1bMF0gKiBleHBvcnRzLnNjYWxlKVxuXHRcdFx0XHRcdFx0ZWxzZSBcblx0XHRcdFx0XHRcdFx0I09iamVjdFxuXHRcdFx0XHRcdFx0XHRpZiBleHBvcnRzLnNhbWVQYXJlbnQobGF5ZXIsIGxheWVyLmNvbnN0cmFpbnRzW3R5cGVdWzBdKVxuXHRcdFx0XHRcdFx0XHRcdGxheWVyW3Byb3BdID0gbGF5ZXIuY29uc3RyYWludHNbdHlwZV1bMF1bb2JqUHJvcDJdXG5cdFx0XHRcdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRcdFx0XHRlcnJvcihsYXllciwgMSlcblx0XHRcdFx0XHRpZiBsYXllci5jb25zdHJhaW50c1t0eXBlXS5sZW5ndGggPiAxXHRcblx0XHRcdFx0XHRcdCNSZWxhdGlvbnNoaXAgQXJyYXlcblx0XHRcdFx0XHRcdGZvciBvYmplY3QgaW4gbGF5ZXIuY29uc3RyYWludHNbdHlwZV1cblx0XHRcdFx0XHRcdFx0aWYgb2JqZWN0ID09IHBhcnNlSW50KG9iamVjdCwgMTApXG5cdFx0XHRcdFx0XHRcdFx0QC5vYmpJbnQgPSBvYmplY3Rcblx0XHRcdFx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdFx0XHRcdEAub2JqTGF5ZXIgPSBvYmplY3Rcblx0XHRcdFx0XHRcdFx0bGF5ZXJbcHJvcF0gPSBALm9iakxheWVyW29ialByb3AyXSAtIGV4cG9ydHMuc2NhbGUgKiBALm9iakludFxuXG5cblxuZXhwb3J0cy5LZXlib2FyZCA9IChhcnJheSkgLT5cblx0YWxsID0gbmV3IExheWVyIGJhY2tncm91bmRDb2xvcjpcIiNEMUQ1REFcIiwgbmFtZTpcImtleWJvYXJkXCJcblx0YWxsLmNvbnN0cmFpbnRzID0gKGJvdHRvbTowLCBoZWlnaHQ6MjE2LCB0cmFpbGluZzoxLCBsZWFkaW5nOjEpXG5cdGV4cG9ydHMubGF5b3V0KClcblx0bGV0dGVyc0FycmF5ID0gW1wicVwiLCBcIndcIiwgXCJlXCIsIFwiclwiLCBcInRcIiwgXCJ5XCIsIFwidVwiLCBcImlcIiwgXCJvXCIsIFwicFwiLCBcImFcIiwgXCJzXCIsIFwiZFwiLCBcImZcIiwgXCJnXCIsIFwiaFwiLCBcImpcIiwgXCJrXCIsIFwibFwiLCBcInpcIiwgXCJ4XCIsIFwiY1wiLCBcInZcIiwgIFwiYlwiLCBcIm5cIiwgXCJtXCJdXG5cdGtleXNBcnJheSA9IFtdXG5cdHNwYWNlciA9IGV4cG9ydHMucHgoNSlcblx0aWYgZXhwb3J0cy5zY2FsZSA9PSAzIHx8IGV4cG9ydHMud2lkdGggPT0gNjQwXG5cdFx0c3BhY2VyID0gZXhwb3J0cy5weCg2KVxuXHRyb3dzTWFwID0gW1xuXHRcdHsgXG5cdFx0XHRcInBhZGRpbmdcIiA6IDQgKiBleHBvcnRzLnNjYWxlXG5cdFx0XHRcInN0YXJ0SW5kZXhcIiA6IDBcblx0XHRcdFwiZW5kSW5kZXhcIiA6IDlcblx0XHRcdFwibWFyZ2luVG9wXCIgOiAxMCAqIGV4cG9ydHMuc2NhbGVcblx0XHR9LFxuXHRcdHsgXG5cdFx0XHRcInBhZGRpbmdcIiA6IDIyICogZXhwb3J0cy5zY2FsZVxuXHRcdFx0XCJzdGFydEluZGV4XCIgOiAxMFxuXHRcdFx0XCJlbmRJbmRleFwiIDogMThcblx0XHRcdFwibWFyZ2luVG9wXCIgOiAyMiAqIGV4cG9ydHMuc2NhbGVcblx0XHR9LFxuXHRcdHsgXG5cdFx0XHRcInBhZGRpbmdcIiA6IDU5ICogZXhwb3J0cy5zY2FsZVxuXHRcdFx0XCJzdGFydEluZGV4XCIgOiAxOVxuXHRcdFx0XCJlbmRJbmRleFwiIDogMjVcblx0XHRcdFwibWFyZ2luVG9wXCIgOiAzNCAqIGV4cG9ydHMuc2NhbGVcblx0XHR9XG5cdF1cblx0Zm9yIGxldHRlciBpbiBsZXR0ZXJzQXJyYXlcblx0XHRpbmRleCA9IGxldHRlcnNBcnJheS5pbmRleE9mKGxldHRlcikgXG5cdFx0a2V5ID0gbmV3IExheWVyIG5hbWU6XCJrZXkgXCIgKyBsZXR0ZXIsIHN1cGVyTGF5ZXI6YWxsLCBib3JkZXJSYWRpdXM6NSpleHBvcnRzLnNjYWxlLCBiYWNrZ3JvdW5kQ29sb3I6XCJ3aGl0ZVwiLCBjb2xvcjpcImJsYWNrXCIsIHNoYWRvd1k6MSwgc2hhZG93Q29sb3I6XCJibGFja1wiLCBzaGFkb3dPcGFjaXR5Oi4yNVxuXHRcdGlmIGV4cG9ydHMuc2NhbGUgPT0gMlxuXHRcdFx0a2V5LmNvbnN0cmFpbnRzID0gKHdpZHRoOjMyLCBoZWlnaHQ6NDQpXG5cdFx0aWYgZXhwb3J0cy5zY2FsZSA9PSAzXG5cdFx0XHRrZXkuY29uc3RyYWludHMgPSAod2lkdGg6MzUsIGhlaWdodDo0Nilcblx0XHRpZiBleHBvcnRzLndpZHRoID09IDY0MFxuXHRcdFx0a2V5LmNvbnN0cmFpbnRzID0gKHdpZHRoOjI2LCBoZWlnaHQ6MzkpXG5cblx0XHRleHBvcnRzLmxheW91dCgpXG5cdFx0a2V5LnN0eWxlID0ge1xuXHRcdFx0XCJmb250LXNpemVcIiA6IDI1ICogZXhwb3J0cy5zY2FsZSArIFwicHhcIlxuXHRcdFx0XCJmb250LXdlaWdodFwiIDogMzAwXG5cdFx0XHRcImZvbnQtZmFtaWx5XCIgOiAnLWFwcGxlLXN5c3RlbSwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZidcblx0XHRcdCd0ZXh0LWFsaWduJyA6ICdjZW50ZXInXG5cdFx0XHQnbGluZS1oZWlnaHQnIDoga2V5LmhlaWdodCAtIGV4cG9ydHMucHgoNSkgKyBcInB4XCJcblx0XHR9XG5cdFx0a2V5Lmh0bWwgPSBsZXR0ZXJcblx0XHRwb3BVcExheWVycyA9IFtdXG5cdFx0aWYgaW5kZXggPD0gcm93c01hcFswXS5lbmRJbmRleFxuXHRcdFx0cm93SW5kZXggPSBpbmRleCAtIHJvd3NNYXBbMF0uc3RhcnRJbmRleFxuXHRcdFx0a2V5LnggPSByb3dzTWFwWzBdLnBhZGRpbmcgKyAocm93SW5kZXgqc3BhY2VyKSArIChyb3dJbmRleCprZXkud2lkdGgpXG5cdFx0XHRrZXkueSA9IHJvd3NNYXBbMF0ubWFyZ2luVG9wXG5cdFx0aWYgaW5kZXggPiByb3dzTWFwWzBdLmVuZEluZGV4ICYmIGluZGV4IDw9IHJvd3NNYXBbMV0uZW5kSW5kZXhcblx0XHRcdHJvd0luZGV4ID0gaW5kZXggLSByb3dzTWFwWzFdLnN0YXJ0SW5kZXhcblx0XHRcdGtleS54ID0gcm93c01hcFsxXS5wYWRkaW5nICsgKHJvd0luZGV4KnNwYWNlcikgKyAocm93SW5kZXgqa2V5LndpZHRoKVxuXHRcdFx0a2V5LnkgPSByb3dzTWFwWzFdLm1hcmdpblRvcCArIGtleS5oZWlnaHRcblx0XHRpZiBpbmRleCA+IHJvd3NNYXBbMV0uZW5kSW5kZXhcblx0XHRcdHJvd0luZGV4ID0gaW5kZXggLSByb3dzTWFwWzJdLnN0YXJ0SW5kZXhcblx0XHRcdGtleS54ID0gcm93c01hcFsyXS5wYWRkaW5nICsgKHJvd0luZGV4KnNwYWNlcikgKyAocm93SW5kZXgqa2V5LndpZHRoKVxuXHRcdFx0a2V5LnkgPSByb3dzTWFwWzJdLm1hcmdpblRvcCArIGtleS5oZWlnaHQgKiAyXG5cdFx0a2V5Lm9uIEV2ZW50cy5Ub3VjaFN0YXJ0LCAtPlxuXHRcdFx0a2V5UG9wVXAgPSBuZXcgTGF5ZXIgd2lkdGg6NTcqZXhwb3J0cy5zY2FsZSwgaGVpZ2h0OjEwMCpleHBvcnRzLnNjYWxlLCB4OkAueC0xMypleHBvcnRzLnNjYWxlLCBtYXhZOmFsbC55ICsgQC55ICsga2V5LmhlaWdodCwgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIlxuXHRcdFx0Ym94ID0gbmV3IExheWVyIHdpZHRoOjU3KmV4cG9ydHMuc2NhbGUsIGhlaWdodDo1NypleHBvcnRzLnNjYWxlLCBib3JkZXJSYWRpdXM6MTAqZXhwb3J0cy5zY2FsZSwgc3VwZXJMYXllcjprZXlQb3BVcCwgYmFja2dyb3VuZENvbG9yOlwid2hpdGVcIiwgY29sb3I6XCJibGFja1wiXG5cdFx0XHRib3guaHRtbCA9IEAuaHRtbFxuXHRcdFx0Ym94LnN0eWxlID0ge1xuXHRcdFx0XHRcImZvbnQtc2l6ZVwiIDogMzkgKiBleHBvcnRzLnNjYWxlICsgXCJweFwiXG5cdFx0XHRcdFwiZm9udC13ZWlnaHRcIiA6IDMwMFxuXHRcdFx0XHRcImZvbnQtZmFtaWx5XCIgOiAnLWFwcGxlLXN5c3RlbSwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZidcblx0XHRcdFx0J3RleHQtYWxpZ24nIDogJ2NlbnRlcidcblx0XHRcdFx0J3BhZGRpbmctdG9wJyA6IDE3ICogZXhwb3J0cy5zY2FsZSArIFwicHhcIlxuXHRcdFx0fVxuXHRcdFx0QC5jb2xvciA9IFwid2hpdGVcIlxuXHRcdFx0cG9wVXBMYXllcnMucHVzaCBrZXlQb3BVcFxuXHRcdGtleS5vbiBFdmVudHMuVG91Y2hFbmQsIC0+XG5cdFx0XHRwb3BVcExheWVyc1twb3BVcExheWVycy5sZW5ndGggLSAxXS5kZXN0cm95KClcblx0XHRcdEAuY29sb3IgPSBcImJsYWNrXCJcblxuXHRcdGtleXNBcnJheS5wdXNoIGtleVxuXG5cdHJldHVybiB7XG5cdFx0XCJhbGxcIiA6IGFsbFxuXHRcdFwia2V5c1wiIDoga2V5c0FycmF5XG5cdFx0XCJrZXlcIiA6IHtcblx0XHRcdFwicVwiIDoga2V5c0FycmF5WzBdXG5cdFx0XHRcIndcIiA6IGtleXNBcnJheVsxXVxuXHRcdFx0XCJlXCIgOiBrZXlzQXJyYXlbMl1cblx0XHRcdFwiclwiIDoga2V5c0FycmF5WzNdXG5cdFx0XHRcInRcIiA6IGtleXNBcnJheVs0XVxuXHRcdFx0XCJ5XCIgOiBrZXlzQXJyYXlbNV1cblx0XHRcdFwidVwiIDoga2V5c0FycmF5WzZdXG5cdFx0XHRcImlcIiA6IGtleXNBcnJheVs3XVxuXHRcdFx0XCJvXCIgOiBrZXlzQXJyYXlbOF1cblx0XHRcdFwicFwiIDoga2V5c0FycmF5WzldXG5cdFx0XHRcImFcIiA6IGtleXNBcnJheVsxMF1cblx0XHRcdFwic1wiIDoga2V5c0FycmF5WzExXVxuXHRcdFx0XCJkXCIgOiBrZXlzQXJyYXlbMTJdXG5cdFx0XHRcImZcIiA6IGtleXNBcnJheVsxM11cblx0XHRcdFwiZ1wiIDoga2V5c0FycmF5WzE0XVxuXHRcdFx0XCJoXCIgOiBrZXlzQXJyYXlbMTVdXG5cdFx0XHRcImpcIiA6IGtleXNBcnJheVsxNl1cblx0XHRcdFwia1wiIDoga2V5c0FycmF5WzE3XVxuXHRcdFx0XCJsXCIgOiBrZXlzQXJyYXlbMThdXG5cdFx0XHRcInpcIiA6IGtleXNBcnJheVsxOV1cblx0XHRcdFwieFwiIDoga2V5c0FycmF5WzIwXVxuXHRcdFx0XCJjXCIgOiBrZXlzQXJyYXlbMjFdXG5cdFx0XHRcInZcIiA6IGtleXNBcnJheVsyMl1cblx0XHRcdFwiYlwiIDoga2V5c0FycmF5WzIzXVxuXHRcdFx0XCJuXCIgOiBrZXlzQXJyYXlbMjRdXG5cdFx0XHRcIm1cIiA6IGtleXNBcnJheVsyNV1cblx0XHR9XG5cdH1cblxuXG4iLCIjIEFkZCB0aGUgZm9sbG93aW5nIGxpbmUgdG8geW91ciBwcm9qZWN0IGluIEZyYW1lciBTdHVkaW8uIFxuIyBteU1vZHVsZSA9IHJlcXVpcmUgXCJteU1vZHVsZVwiXG4jIFJlZmVyZW5jZSB0aGUgY29udGVudHMgYnkgbmFtZSwgbGlrZSBteU1vZHVsZS5teUZ1bmN0aW9uKCkgb3IgbXlNb2R1bGUubXlWYXJcblxuZXhwb3J0cy5teVZhciA9IFwibXlWYXJpYWJsZVwiXG5cbmV4cG9ydHMubXlGdW5jdGlvbiA9IC0+XG5cdHByaW50IFwibXlGdW5jdGlvbiBpcyBydW5uaW5nXCJcblxuZXhwb3J0cy5teUFycmF5ID0gWzEsIDIsIDNdIl19
