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
  var board, box, i, index, key, keyPopUp, keysArray, len, letter, lettersArray, path, rowIndex, rowsMap, shiftIcon, shiftKey, spacer;
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
    backgroundColor: "white",
    color: "black",
    shadowY: 1,
    shadowColor: "black",
    shadowOpacity: .25,
    backgroundColor: "white"
  });
  shiftKey.constraints = {
    bottom: 50,
    leading: 3,
    width: 42,
    height: 42
  };
  shiftIcon = new Layer({
    width: exports.px(19),
    height: exports.px(16),
    superLayer: shiftKey,
    backgroundColor: "transparent"
  });
  shiftIcon.html = "<?xml version='1.0' encoding='UTF-8' standalone='no'?> <svg width='" + (exports.px(20)) + "px' height='" + (exports.px(19)) + "px' viewBox='0 0 20 19' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'> <!-- Generator: Sketch 3.5.2 (25235) - http://www.bohemiancoding.com/sketch --> <title>Shift</title> <desc>Created with Sketch.</desc> <defs></defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'> <g id='Keyboard/Light/Lower' sketch:type='MSLayerGroup' transform='translate(-14.000000, -129.000000)' fill='#030303'> <g id='Third-Row' transform='translate(3.000000, 118.000000)' sketch:type='MSShapeGroup'> <path d='M21.6719008,12.2325898 C21.301032,11.8279916 20.6946892,11.8334731 20.3288195,12.2325898 L11.6947023,21.6512983 C10.7587441,22.672308 11.1285541,23.5 12.5097751,23.5 L15.9999999,23.5000002 L15.9999999,28.0014241 C15.9999999,28.8290648 16.6716559,29.5000001 17.497101,29.5000001 L24.5028992,29.5000001 C25.3297253,29.5000001 26.0000003,28.8349703 26.0000003,28.0014241 L26.0000003,23.5000001 L29.4902251,23.5000002 C30.8763357,23.5000002 31.2439521,22.6751916 30.3054161,21.6512985 L21.6719008,12.2325898 Z M21.341748,14.3645316 C21.1530056,14.1632064 20.8433515,14.1670914 20.6582514,14.3645316 L13.5,21.9999998 L17.5000001,21.9999999 L17.5000002,27.5089956 C17.5000002,27.7801703 17.7329027,28.0000008 18.0034229,28.0000008 L23.996577,28.0000008 C24.2746097,28.0000008 24.4999997,27.7721203 24.4999997,27.5089956 L24.4999997,21.9999999 L28.5,21.9999999 L21.341748,14.3645316 Z' id='Shift'></path> </g> </g> </g> </svg>";
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMva2V2eW5hL0Ryb3Bib3ggKFBlcnNvbmFsKS9GcmFtZXIgUHJvdG90eXBlcy9mcmFtZXItaW9zLWtpdC9EZW1vLmZyYW1lci9tb2R1bGVzL2lPU0tpdC5jb2ZmZWUiLCIvVXNlcnMva2V2eW5hL0Ryb3Bib3ggKFBlcnNvbmFsKS9GcmFtZXIgUHJvdG90eXBlcy9mcmFtZXItaW9zLWtpdC9EZW1vLmZyYW1lci9tb2R1bGVzL215TW9kdWxlLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0VBLElBQUE7O0FBQUEsYUFBQSxHQUFnQjtFQUVoQixZQUFBLEVBQWU7SUFBRSxNQUFBLEVBQVEsTUFBTSxDQUFDLFdBQWpCO0lBQThCLEtBQUEsRUFBTyxNQUFNLENBQUMsVUFBNUM7SUFBd0QsS0FBQSxFQUFNLENBQTlEO0lBQWlFLE1BQUEsRUFBTyxLQUF4RTtJQUErRSxRQUFBLEVBQVMsS0FBeEY7R0FGQztFQUtoQix5QkFBQSxFQUEyQjtJQUFFLE1BQUEsRUFBUSxHQUFWO0lBQWUsS0FBQSxFQUFPLElBQXRCO0lBQTRCLEtBQUEsRUFBTyxDQUFuQztJQUFzQyxNQUFBLEVBQU8sS0FBN0M7SUFBb0QsUUFBQSxFQUFTLEtBQTdEO0dBTFg7RUFNaEIseUJBQUEsRUFBMkI7SUFBRSxNQUFBLEVBQVEsR0FBVjtJQUFlLEtBQUEsRUFBTyxJQUF0QjtJQUE0QixLQUFBLEVBQU8sQ0FBbkM7SUFBc0MsTUFBQSxFQUFPLEtBQTdDO0lBQW9ELFFBQUEsRUFBUyxLQUE3RDtHQU5YO0VBT2hCLHlCQUFBLEVBQTJCO0lBQUUsTUFBQSxFQUFRLEdBQVY7SUFBZSxLQUFBLEVBQU8sSUFBdEI7SUFBNEIsS0FBQSxFQUFPLENBQW5DO0lBQXNDLE1BQUEsRUFBTyxLQUE3QztJQUFvRCxRQUFBLEVBQVMsS0FBN0Q7R0FQWDtFQVloQixxQkFB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QTBCUCxHQUFBLEVBQU0sU0FBVSxDQUFBLEVBQUEsQ0ExQlQ7S0FIRjs7QUExS1c7Ozs7QUNyVG5CLE9BQU8sQ0FBQyxLQUFSLEdBQWdCOztBQUVoQixPQUFPLENBQUMsVUFBUixHQUFxQixTQUFBO1NBQ3BCLEtBQUEsQ0FBTSx1QkFBTjtBQURvQjs7QUFHckIsT0FBTyxDQUFDLE9BQVIsR0FBa0IsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiI2lPU0tpdCBNb2R1bGVcbiNCeSBLZXZ5biBBcm5vdHQgQGt2eW5fXG5mcmFtZXJEZXZpY2VzID0ge1xuI0Z1bGxzY3JlZW5cblwiZnVsbHNjcmVlblwiIDogeyBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCwgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFx0c2NhbGU6MSwgbW9iaWxlOmZhbHNlLCBwbGF0Zm9ybTpcIndlYlwifVxuXG4jU2FmYXJpIEJyb3dzZXJzXG5cImRlc2t0b3Atc2FmYXJpLTEwMjQtNjAwXCI6IHsgaGVpZ2h0OiA2MDAsIHdpZHRoOiAxMDI0LFx0c2NhbGU6IDEsIG1vYmlsZTpmYWxzZSwgcGxhdGZvcm06XCJ3ZWJcIn1cblwiZGVza3RvcC1zYWZhcmktMTI4MC04MDBcIjogeyBoZWlnaHQ6IDgwMCwgd2lkdGg6IDEyODAsXHRzY2FsZTogMSwgbW9iaWxlOmZhbHNlLCBwbGF0Zm9ybTpcIndlYlwifVxuXCJkZXNrdG9wLXNhZmFyaS0xNDQwLTkwMFwiOiB7IGhlaWdodDogOTAwLCB3aWR0aDogMTQ0MCxcdHNjYWxlOiAxLCBtb2JpbGU6ZmFsc2UsIHBsYXRmb3JtOlwid2ViXCJ9XG5cbiNpUGhvbmVzXG5cbiM1U1xuXCJpcGhvbmUtNXMtc3BhY2VncmF5XCI6IHsgaGVpZ2h0OiAxMTM2LCB3aWR0aDogNjQwLFx0c2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXCJpcGhvbmUtNXMtc3BhY2VncmF5LWhhbmRcIjogeyBoZWlnaHQ6IDExMzYsIHdpZHRoOiA2NDAsXHRzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cImlwaG9uZS01cy1zaWx2ZXJcIjogeyBoZWlnaHQ6IDExMzYsIHdpZHRoOiA2NDAsXHRzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cImlwaG9uZS01cy1zaWx2ZXItaGFuZFwiOiB7IGhlaWdodDogMTEzNiwgd2lkdGg6IDY0MCxcdHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblwiaXBob25lLTVzLWdvbGRcIjogeyBoZWlnaHQ6IDExMzYsIHdpZHRoOiA2NDAsXHRzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cImlwaG9uZS01cy1nb2xkLWhhbmRcIjogeyBoZWlnaHQ6IDExMzYsIHdpZHRoOiA2NDAsXHRzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG4jNWNcblwiaXBob25lLTVjLXllbGxvdy1oYW5kXCI6IHsgaGVpZ2h0OiAyMDQ4LCB3aWR0aDogMTUzNixcdHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblwiaXBob25lLTVjLWdyZWVuXCI6IHsgaGVpZ2h0OiAxMTM2LCB3aWR0aDogNjQwLFx0c2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXCJpcGhvbmUtNWMtZ3JlZW4taGFuZFwiOiB7IGhlaWdodDogMTEzNiwgd2lkdGg6IDY0MCxcdHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblwiaXBob25lLTVjLWJsdWVcIjogeyBoZWlnaHQ6IDExMzYsIHdpZHRoOiA2NDAsXHRzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cImlwaG9uZS01Yy1ibHVlLWhhbmRcIjogeyBoZWlnaHQ6IDExMzYsIHdpZHRoOiA2NDAsXHRzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cImlwaG9uZS01Yy1yZWRcIjogeyBoZWlnaHQ6IDExMzYsIHdpZHRoOiA2NDAsXHRzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cImlwaG9uZS01Yy1yZWQtaGFuZFwiOiB7IGhlaWdodDogMTEzNiwgd2lkdGg6IDY0MCxcdHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblwiaXBob25lLTVjLXdoaXRlXCI6IHsgaGVpZ2h0OiAxMTM2LCB3aWR0aDogNjQwLFx0c2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXCJpcGhvbmUtNWMtd2hpdGUtaGFuZFwiOiB7IGhlaWdodDogMTEzNiwgd2lkdGg6IDY0MCxcdHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblwiaXBob25lLTVjLXllbGxvd1wiOiB7IGhlaWdodDogMTEzNiwgd2lkdGg6IDY0MCxcdHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblwiaXBob25lLTVjLXBpbmstaGFuZFwiOiB7IGhlaWdodDogMTEzNiwgd2lkdGg6IDY0MCxcdHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblwiaXBob25lLTVjLXBpbmtcIjogeyBoZWlnaHQ6IDExMzYsIHdpZHRoOiA2NDAsXHRzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG4jNlxuXCJpcGhvbmUtNi1zcGFjZWdyYXlcIiA6IHsgaGVpZ2h0OiAxMzM0LCB3aWR0aDogNzUwLFx0c2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXCJpcGhvbmUtNi1zcGFjZWdyYXktaGFuZFwiIDogeyBoZWlnaHQ6IDEzMzQsIHdpZHRoOiA3NTAsXHRzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cImlwaG9uZS02LXNpbHZlclwiOiB7IGhlaWdodDogMTMzNCwgd2lkdGg6IDc1MCxcdHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblwiaXBob25lLTYtc2lsdmVyLWhhbmRcIjogeyBoZWlnaHQ6IDEzMzQsIHdpZHRoOiA3NTAsXHRzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cImlwaG9uZS02LWdvbGRcIjogeyBoZWlnaHQ6IDEzMzQsIHdpZHRoOiA3NTAsXHRzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cImlwaG9uZS02LWdvbGQtaGFuZFwiOiB7IGhlaWdodDogMTMzNCwgd2lkdGg6IDc1MCxcdHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cbiM2IHBsdXNcblwiaXBob25lLTZwbHVzLWdvbGQtaGFuZFwiOiB7IGhlaWdodDogMjIwOCwgd2lkdGg6IDEyNDIsXHRzY2FsZTogMywgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cImlwaG9uZS02cGx1cy1nb2xkXCI6IHsgaGVpZ2h0OiAyMjA4LCB3aWR0aDogMTI0MixcdHNjYWxlOiAzLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblwiaXBob25lLTZwbHVzLXNpbHZlci1oYW5kXCI6IHsgaGVpZ2h0OiAyMjA4LCB3aWR0aDogMTI0MixcdHNjYWxlOiAzLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblwiaXBob25lLTZwbHVzLXNpbHZlclwiOiB7IGhlaWdodDogMjIwOCwgd2lkdGg6IDEyNDIsXHRzY2FsZTogMywgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cImlwaG9uZS02cGx1cy1zcGFjZWdyYXktaGFuZFwiOiB7IGhlaWdodDogMjIwOCwgd2lkdGg6IDEyNDIsXHRzY2FsZTogMywgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cImlwaG9uZS02cGx1cy1zcGFjZWdyYXlcIjogeyBoZWlnaHQ6IDIyMDgsIHdpZHRoOiAxMjQyLFx0c2NhbGU6IDMsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXCJpcGhvbmU2cGx1cy1nb2xkLWhhbmRcIjogeyBoZWlnaHQ6IDIyMDgsIHdpZHRoOiAxMjQyLFx0c2NhbGU6IDMsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXCJpcGhvbmU2cGx1cy1nb2xkXCI6IHsgaGVpZ2h0OiAyMjA4LCB3aWR0aDogMTI0MixcdHNjYWxlOiAzLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblwiaXBob25lNnBsdXMtc2lsdmVyLWhhbmRcIjogeyBoZWlnaHQ6IDIyMDgsIHdpZHRoOiAxMjQyLFx0c2NhbGU6IDMsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXCJpcGhvbmU2cGx1cy1zaWx2ZXJcIjogeyBoZWlnaHQ6IDIyMDgsIHdpZHRoOiAxMjQyLFx0c2NhbGU6IDMsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXCJpcGhvbmU2cGx1cy1zcGFjZWdyYXktaGFuZFwiOiB7IGhlaWdodDogMjIwOCwgd2lkdGg6IDEyNDIsXHRzY2FsZTogMywgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cImlwaG9uZTZwbHVzLXNwYWNlZ3JheVwiIDogeyBoZWlnaHQ6IDIyMDgsIHdpZHRoOiAxMjQyLFx0c2NhbGU6IDMsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXG4jaVBhZHNcblxuI0FpclxuXCJpcGFkLWFpci1zaWx2ZXItaGFuZFwiOiB7IGhlaWdodDogMjA0OCwgd2lkdGg6IDE1MzYsXHRzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cImlwYWQtYWlyLXNpbHZlclwiOiB7IGhlaWdodDogMjA0OCwgd2lkdGg6IDE1MzYsXHRzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cImlwYWQtYWlyLXNwYWNlZ3JheS1oYW5kXCI6IHsgaGVpZ2h0OiAyMDQ4LCB3aWR0aDogMTUzNixcdHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblwiaXBhZC1haXItc3BhY2VncmF5XCI6IHsgaGVpZ2h0OiAyMDQ4LCB3aWR0aDogMTUzNixcdHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cbiNtaW5pXG5cImlwYWQtbWluaS1zcGFjZWdyZXlcIjogeyBoZWlnaHQ6IDEwMjQsIHdpZHRoOiA3NjgsXHRzY2FsZTogMSwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cImlwYWQtbWluaS1zcGFjZWdyZXktaGFuZFwiOiB7IGhlaWdodDogMTAyNCwgd2lkdGg6IDc2OCxcdHNjYWxlOiAxLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblwiaXBhZC1taW5pLXNpbHZlclwiOnsgaGVpZ2h0OiAxMDI0LCB3aWR0aDogNzY4LCBzY2FsZTogMSwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cImlwYWQtbWluaS1zaWx2ZXItaGFuZFwiOiB7IGhlaWdodDogMTAyNCwgd2lkdGg6IDc2OCwgc2NhbGU6IDEsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXG4jQXBwbGUgV2F0Y2hlc1xuXCJhcHBsZXdhdGNoLTM4LWJsYWNrLWJyYWNlbGV0XCI6IHsgaGVpZ2h0OiAzNDAsIHdpZHRoOiAyNzIsXHRzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwid2F0Y2hPU1wifVxuXCJhcHBsZXdhdGNoLTM4LXN0ZWVsLWJyYWNlbGV0XCI6IHsgaGVpZ2h0OiAzNDAsIHdpZHRoOiAyNzIsXHRzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwid2F0Y2hPU1wifVxuXCJhcHBsZXdhdGNoLTQyLWJsYWNrLWJyYWNlbGV0XCI6IHsgaGVpZ2h0OiAzOTAsIHdpZHRoOiAzMTIsXHRzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwid2F0Y2hPU1wifVxuXCJhcHBsZXdhdGNoLTQyLXN0ZWVsLWJyYWNlbGV0XCI6IHsgaGVpZ2h0OiAzOTAsIHdpZHRoOiAzMTIsXHRzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwid2F0Y2hPU1wifVxuXCJhcHBsZXdhdGNoZWRpdGlvbi0zOC1nb2xkLWJ1Y2tsZS1ibHVlXCI6IHsgaGVpZ2h0OiAzNDAsIHdpZHRoOiAyNzIsXHRzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwid2F0Y2hPU1wifVxuXCJhcHBsZXdhdGNoZWRpdGlvbi0zOC1nb2xkLWJ1Y2tsZS1ncmF5XCI6IHsgaGVpZ2h0OiAzNDAsIHdpZHRoOiAyNzIsXHRzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwid2F0Y2hPU1wifVxuXCJhcHBsZXdhdGNoZWRpdGlvbi0zOC1nb2xkLWJ1Y2tsZS1yZWRcIjogeyBoZWlnaHQ6IDM0MCwgd2lkdGg6IDI3MixcdHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJ3YXRjaE9TXCJ9XG5cImFwcGxld2F0Y2hlZGl0aW9uLTM4LWdvbGQtc3BvcnRiYW5kLWJsYWNrXCI6IHsgaGVpZ2h0OiAzNDAsIHdpZHRoOiAyNzIsXHRzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwid2F0Y2hPU1wifVxuXCJhcHBsZXdhdGNoZWRpdGlvbi0zOC1nb2xkLXNwb3J0YmFuZC13aGl0ZVwiOiB7IGhlaWdodDogMzQwLCB3aWR0aDogMjcyLFx0c2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcIndhdGNoT1NcIn1cblwiYXBwbGV3YXRjaGVkaXRpb24tNDItZ29sZC1idWNrbGUtYmx1ZVwiOiB7IGhlaWdodDogMzkwLCB3aWR0aDogMzEyLFx0c2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcIndhdGNoT1NcIn1cblwiYXBwbGV3YXRjaGVkaXRpb24tNDItZ29sZC1idWNrbGUtZ3JheVwiOiB7IGhlaWdodDogMzkwLCB3aWR0aDogMzEyLFx0c2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcIndhdGNoT1NcIn1cblwiYXBwbGV3YXRjaGVkaXRpb24tNDItZ29sZC1idWNrbGUtcmVkXCI6IHsgaGVpZ2h0OiAzOTAsIHdpZHRoOiAzMTIsXHRzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwid2F0Y2hPU1wifVxuXCJhcHBsZXdhdGNoZWRpdGlvbi00Mi1nb2xkLXNwb3J0YmFuZC1ibGFja1wiOiB7IGhlaWdodDogMzkwLCB3aWR0aDogMzEyLFx0c2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcIndhdGNoT1NcIn1cblwiYXBwbGV3YXRjaGVkaXRpb24tNDItZ29sZC1zcG9ydGJhbmQtd2hpdGVcIjogeyBoZWlnaHQ6IDM5MCwgd2lkdGg6IDMxMixcdHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJ3YXRjaE9TXCJ9XG5cImFwcGxld2F0Y2hzcG9ydC0zOC1hbHVtaW51bS1zcG9ydGJhbmQtYmxhY2tcIjogeyBoZWlnaHQ6IDM0MCwgd2lkdGg6IDI3MixcdHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJ3YXRjaE9TXCJ9XG5cImFwcGxld2F0Y2hzcG9ydC0zOC1hbHVtaW51bS1zcG9ydGJhbmQtYmx1ZVwiOiB7IGhlaWdodDogMzQwLCB3aWR0aDogMjcyLFx0c2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcIndhdGNoT1NcIn1cblwiYXBwbGV3YXRjaHNwb3J0LTM4LWFsdW1pbnVtLXNwb3J0YmFuZC1ncmVlblwiOiB7IGhlaWdodDogMzQwLCB3aWR0aDogMjcyLFx0c2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcIndhdGNoT1NcIn1cblwiYXBwbGV3YXRjaHNwb3J0LTM4LWFsdW1pbnVtLXNwb3J0YmFuZC1waW5rXCI6IHsgaGVpZ2h0OiAzNDAsIHdpZHRoOiAyNzIsXHRzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwid2F0Y2hPU1wifVxuXCJhcHBsZXdhdGNoc3BvcnQtMzgtYWx1bWludW0tc3BvcnRiYW5kLXdoaXRlXCI6IHsgaGVpZ2h0OiAzNDAsIHdpZHRoOiAyNzIsXHRzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwid2F0Y2hPU1wifVxuXCJhcHBsZXdhdGNoc3BvcnQtNDItYWx1bWludW0tc3BvcnRiYW5kLWJsYWNrXCI6IHsgaGVpZ2h0OiAzOTAsIHdpZHRoOiAzMTIsXHRzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwid2F0Y2hPU1wifVxuXCJhcHBsZXdhdGNoc3BvcnQtNDItYWx1bWludW0tc3BvcnRiYW5kLWJsdWVcIjogeyBoZWlnaHQ6IDM5MCwgd2lkdGg6IDMxMixcdHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJ3YXRjaE9TXCJ9XG5cImFwcGxld2F0Y2hzcG9ydC00Mi1hbHVtaW51bS1zcG9ydGJhbmQtZ3JlZW5cIjogeyBoZWlnaHQ6IDM5MCwgd2lkdGg6IDMxMixcdHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJ3YXRjaE9TXCJ9XG5cImFwcGxld2F0Y2hzcG9ydC00Mi1hbHVtaW51bS1zcG9ydGJhbmQtcGlua1wiOiB7IGhlaWdodDogMzkwLCB3aWR0aDogMzEyLFx0c2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcIndhdGNoT1NcIn1cblwiYXBwbGV3YXRjaHNwb3J0LTQyLWFsdW1pbnVtLXNwb3J0YmFuZC13aGl0ZVwiOiB7IGhlaWdodDogMzkwLCB3aWR0aDogMzEyLFx0c2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcIndhdGNoT1NcIn1cblxuI05leHVzIERldmljZXNcblwibmV4dXMtNS1ibGFja1wiOiB7IGhlaWdodDogMTkyMCwgd2lkdGg6IDEwODAsXHRzY2FsZTogMywgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiYW5kcm9pZFwifVxuXCJuZXh1cy01LWJsYWNrLWhhbmRcIjogeyBoZWlnaHQ6IDE5MjAsIHdpZHRoOiAxMDgwLFx0c2NhbGU6IDMsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImFuZHJvaWRcIn1cblwibmV4dXMtOVwiOiB7IGhlaWdodDogMjA0OCwgd2lkdGg6IDE1MzYsXHRzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiYW5kcm9pZFwifVxufVxuXG5leHBvcnRzLm5hbWUgPSAwXG5leHBvcnRzLnNjYWxlID0gMFxuZXhwb3J0cy5oZWlnaHQgPSAwXG5leHBvcnRzLndpZHRoID0gMFxuZXhwb3J0cy5tb2JpbGUgPSAwXG5leHBvcnRzLnBsYXRmb3JtID0gMFxuZXhwb3J0cy5vcmllbnRhdGlvbiA9IDBcblxuZXhwb3J0cy5nZXREZXZpY2UgPSAtPlxuXHRkZXZpY2UgPSBGcmFtZXIuRGV2aWNlLmRldmljZVR5cGVcblx0ZXhwb3J0cy5zY2FsZSA9IGZyYW1lckRldmljZXNbZGV2aWNlXS5zY2FsZVxuXHRpZiBkZXZpY2UgPT0gXCJmdWxsc2NyZWVuXCJcblx0XHRleHBvcnRzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGhcblx0XHRleHBvcnRzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodFxuXHRlbHNlXG5cdFx0ZXhwb3J0cy53aWR0aCA9IGZyYW1lckRldmljZXNbZGV2aWNlXS53aWR0aFxuXHRcdGV4cG9ydHMuaGVpZ2h0ID0gZnJhbWVyRGV2aWNlc1tkZXZpY2VdLmhlaWdodFxuXHRcdGlmIHdpbmRvdy5pbm5lcldpZHRoID09IDEyNDIgfHwgd2luZG93LmlubmVyV2lkdGggPT0gMjIwOFxuXHRcdFx0ZXhwb3J0cy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoXG5cdFx0XHRleHBvcnRzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodFxuXHRcdFx0ZXhwb3J0cy5zY2FsZSA9IDNcblx0ZXhwb3J0cy5tb2JpbGUgPSBmcmFtZXJEZXZpY2VzW2RldmljZV0ubW9iaWxlXG5cdGV4cG9ydHMucGxhdGZvcm0gPSBmcmFtZXJEZXZpY2VzW2RldmljZV0ucGxhdGZvcm1cblx0ZXhwb3J0cy5vcmllbnRhdGlvbiA9ICBGcmFtZXIuRGV2aWNlLm9yaWVudGF0aW9uXG5cblxuZXhwb3J0cy5vcmllbnQgPSAoKSAtPlxuXHRpZiBleHBvcnRzLm9yaWVudGF0aW9uID09IC05MFxuXHRcdHRlbXBIZWlnaHQgPSBleHBvcnRzLmhlaWdodFxuXHRcdHRlbXBXaWR0aCA9IGV4cG9ydHMud2lkdGhcblx0XHRleHBvcnRzLmhlaWdodCA9IHRlbXBXaWR0aFxuXHRcdGV4cG9ydHMud2lkdGggPSB0ZW1wSGVpZ2h0XG5cbmV4cG9ydHMuZ2V0RGV2aWNlKClcbmV4cG9ydHMub3JpZW50KClcblxuXG4jTGlzdGVuIHRvIHdpbmRvdyByZWl6ZVxub25SZXNpemUgPSAoKSAtPlxuXHRleHBvcnRzLmdldERldmljZSgpXG5cdGV4cG9ydHMubGF5b3V0KClcblxuXG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIG9uUmVzaXplKVxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJvcmllbnRhdGlvbmNoYW5nZVwiICwgb25SZXNpemUpXG5cblxuXG5kZWZhdWx0cyA9IHtcblx0Y29uc3RyYWludFByb3BzIDogW1wiaGVpZ2h0XCIsIFwid2lkdGhcIl1cblx0Y29uc3RyYWludFR5cGVzOiBbXCJ0b3BcIiwgXCJsZWFkaW5nXCIsIFwidHJhaWxpbmdcIiwgXCJib3R0b21cIl1cblx0Y29uc3RyYWludHM6IHtcblx0XHR0b3A6IHtcblx0XHRcdFwicHJvcFwiIDogXCJ5XCJcblx0XHRcdFwib2JqUHJvcFwiIDogXCJtYXhZXCJcblx0XHRcdFwib2JqUHJvcDJcIiA6IFwiaGVpZ2h0XCJcblx0XHRcdFwib3BwXCIgOiBcImJvdHRvbVwiXG5cdFx0fVxuXHRcdGxlYWRpbmc6IHtcblx0XHRcdFwicHJvcFwiIDogXCJ4XCJcblx0XHRcdFwib2JqUHJvcFwiIDogXCJtYXhYXCJcblx0XHRcdFwib2JqUHJvcDJcIiA6IFwid2lkdGhcIlxuXHRcdFx0XCJvcHBcIiA6IFwidHJhaWxpbmdcIlxuXHRcdH1cblx0XHRib3R0b206IHtcblx0XHRcdFwicHJvcFwiIDogXCJtYXhZXCJcblx0XHRcdFwib2JqUHJvcFwiIDogXCJoZWlnaHRcIlxuXHRcdFx0XCJvYmpQcm9wMlwiIDogXCJ5XCJcblx0XHRcdFwib3BwXCIgOiBcInRvcFwiXG5cdFx0fVxuXHRcdHRyYWlsaW5nOiB7XG5cdFx0XHRcInByb3BcIiA6IFwibWF4WFwiXG5cdFx0XHRcIm9ialByb3BcIiA6IFwid2lkdGhcIlxuXHRcdFx0XCJvYmpQcm9wMlwiIDogXCJ4XCJcblx0XHRcdFwib3BwXCIgOiBcImxlYWRpbmdcIlxuXHRcdH1cblx0fVxufVxuIyMgQ29udmVyc2lvbnNcblxuI1BpeGVscyB0byBQb2ludHNcbmV4cG9ydHMucHQgPSAocHgpIC0+XG5cdHB0ID0gcHgvZXhwb3J0cy5zY2FsZVxuXHRwdCA9IE1hdGgucm91bmQocHQpXG5cdHJldHVybiBwdFxuXG4jUG9pbnRzIHRvIFBpeGVsc1xuZXhwb3J0cy5weCA9IChwdCkgLT5cblx0cHggPSBwdCAqIGV4cG9ydHMuc2NhbGVcblx0cHggPSBNYXRoLnJvdW5kKHB4KVxuXHRyZXR1cm4gcHhcblxuIyMgRXJyb3JzXG5cbmVycm9yID0gKGNvbnRleHQsIGNvZGUpIC0+XG5cdGlmIGNvZGUgPT0gMSBcblx0XHRwcmludCBcIkVycm9yIEludmFsaWQgUmVsYXRpb25zaGlwIOKAkyBMYXllciBpZDoje2NvbnRleHQuaWR9IGhhcyBhIHJlbGF0aW9uc2hpcCB3aXRoIGFub3RoZXIgbGF5ZXIgbm90IGluIHRoZSBzYW1lIHN1cGVyTGF5ZXIuXCJcblxuXG4jIyBBdXRvTGF5b3V0XG5cbiNjaGVja3MgaWYgdHdvIGxheWVycyBoYXZlIHRoZSBzYW1lIHBhcmVudFxuZXhwb3J0cy5zYW1lUGFyZW50ID0gKGxheWVyMSwgbGF5ZXIyKSAtPlxuXHRwYXJlbnRPbmUgPSBsYXllcjEuc3VwZXJMYXllclxuXHRwYXJlbnRUd28gPSBsYXllcjIuc3VwZXJMYXllclxuXHRpZiBwYXJlbnRPbmUgPT0gcGFyZW50VHdvXG5cdFx0cmV0dXJuIHRydWVcblx0ZWxzZSBcblx0XHRyZXR1cm4gZmFsc2VcblxuI1JlZnJlc2hlcyBMYXllciBvciBBbGwgTGF5ZXJzXG5leHBvcnRzLmxheW91dCA9IChsYXllcikgLT5cblx0aWYgbGF5ZXIgPT0gdW5kZWZpbmVkXG5cdFx0QC5hcnJheSA9IEZyYW1lci5DdXJyZW50Q29udGV4dC5sYXllcnNcblx0ZWxzZSBcblx0XHRALmFycmF5ID0gW2xheWVyXVxuXHRmb3IgbGF5ZXIgaW4gQC5hcnJheVxuXHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzICE9IHVuZGVmaW5lZFxuXHRcdFx0Zm9yIHAgaW4gZGVmYXVsdHMuY29uc3RyYWludFByb3BzXG5cdFx0XHRcdGxheW91dFNpemUobGF5ZXIsIHApXG5cdFx0XHRmb3IgYyBpbiBkZWZhdWx0cy5jb25zdHJhaW50VHlwZXNcblx0XHRcdFx0bGF5b3V0Q2hhbmdlKGxheWVyLCBjKVxuXG4jU2l6ZSBDb25zdHJhaW50c1xuXG5cbmxheW91dFNpemUgPSAobGF5ZXIsIHR5cGUpIC0+XG5cdGlmIGxheWVyLmNvbnN0cmFpbnRzW3R5cGVdXG5cdFx0bGF5ZXJbdHlwZV0gPSBleHBvcnRzLnB4KGxheWVyLmNvbnN0cmFpbnRzW3R5cGVdKVxuXG5cbiNNb3ZlICYgUmVzaXplcyBMYXllcnNcbmxheW91dENoYW5nZSA9IChsYXllciwgdHlwZSkgLT5cblx0aWYgbGF5ZXIuY29uc3RyYWludHNbdHlwZV0gIT0gdW5kZWZpbmVkIFxuXHRcdHByb3AgPSBkZWZhdWx0cy5jb25zdHJhaW50c1t0eXBlXS5wcm9wXG5cdFx0b2JqUHJvcCA9IGRlZmF1bHRzLmNvbnN0cmFpbnRzW3R5cGVdLm9ialByb3Bcblx0XHRvcHAgPSBkZWZhdWx0cy5jb25zdHJhaW50c1t0eXBlXS5vcHBcblx0XHRzdXBlclRyYWl0ID0gZGVmYXVsdHMuY29uc3RyYWludHNbdHlwZV0ub2JqUHJvcFxuXG5cdFx0aWYgb2JqUHJvcCAhPSBcIndpZHRoXCIgJiYgb2JqUHJvcCAhPSBcImhlaWdodFwiXG5cdFx0XHRzdXBlclRyYWl0ID0gZGVmYXVsdHMuY29uc3RyYWludHNbdHlwZV0ub2JqUHJvcDJcblxuXHRcdGlmIGxheWVyLnN1cGVyTGF5ZXIgIT0gbnVsbFxuXHRcdFx0I0hhcyBhIHN1cGVyTGF5ZXJcblx0XHRcdEBbc3VwZXJUcmFpdF0gPSBsYXllci5zdXBlckxheWVyW3N1cGVyVHJhaXRdXG5cdFx0ZWxzZVxuXHRcdFx0I0RvZXMgbm90IGhhdmUgYSBzdXBlckxheWVyXG5cdFx0XHRAW3N1cGVyVHJhaXRdID0gZXhwb3J0c1tzdXBlclRyYWl0XVxuXHRcdGlmIHR5cGUgPT0gXCJ0b3BcIiB8fCB0eXBlID09IFwibGVhZGluZ1wiXG5cdFx0XHQjIEhhbmRsZSBUb3AgJiBMZWFkaW5nXG5cdFx0XHRpZiBsYXllci5jb25zdHJhaW50c1t0eXBlXSA9PSBwYXJzZUludChsYXllci5jb25zdHJhaW50c1t0eXBlXSwgMTApXG5cdFx0XHRcdGxheWVyW3Byb3BdID0gbGF5ZXIuY29uc3RyYWludHNbdHlwZV0gKiBleHBvcnRzLnNjYWxlXG5cdFx0XHRlbHNlIFxuXHRcdFx0XHRpZiBsYXllci5jb25zdHJhaW50c1t0eXBlXS5sZW5ndGggPT0gdW5kZWZpbmVkXG5cdFx0XHRcdFx0bGF5ZXJbcHJvcF0gPSBsYXllci5jb25zdHJhaW50c1t0eXBlXVtvYmpQcm9wXVxuXHRcdFx0XHRpZiBsYXllci5jb25zdHJhaW50c1t0eXBlXS5sZW5ndGggPT0gMVxuXHRcdFx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzW3R5cGVdWzBdID09IHBhcnNlSW50KGxheWVyLmNvbnN0cmFpbnRzW3R5cGVdWzBdLCAxMClcblx0XHRcdFx0XHRcdGxheWVyW3Byb3BdID0gbGF5ZXIuY29uc3RyYWludHNbdHlwZV1bMF0gKiBleHBvcnRzLnNjYWxlXG5cdFx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdFx0bGF5ZXJbcHJvcF0gPSBsYXllci5jb25zdHJhaW50c1t0eXBlXVswXVtvYmpQcm9wXVxuXHRcdFx0XHRpZiBsYXllci5jb25zdHJhaW50c1t0eXBlXS5sZW5ndGggPiAxIFxuXHRcdFx0XHRcdGZvciBvYmplY3QgaW4gbGF5ZXIuY29uc3RyYWludHNbdHlwZV1cblx0XHRcdFx0XHRcdGlmIG9iamVjdCA9PSBwYXJzZUludChvYmplY3QsIDEwKVxuXHRcdFx0XHRcdFx0XHRALm9iakludCA9IG9iamVjdFxuXHRcdFx0XHRcdFx0ZWxzZSBcblx0XHRcdFx0XHRcdFx0QC5vYmpMYXllciA9IG9iamVjdFxuXHRcdFx0XHRcdGxheWVyW3Byb3BdID0gKEAub2JqSW50ICogZXhwb3J0cy5zY2FsZSkgKyBALm9iakxheWVyW29ialByb3BdXG5cdFx0XHRpZiBsYXllci5jb25zdHJhaW50c1tvcHBdXG5cdFx0XHRcdHRyYWl0ID0gZGVmYXVsdHMuY29uc3RyYWludHNbb3BwXVtcIm9ialByb3BcIl1cblx0XHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHNbb3BwXSA9PSBwYXJzZUludChsYXllci5jb25zdHJhaW50c1tvcHBdLCAxMClcblx0XHRcdFx0XHRsYXllclt0cmFpdF0gPSBAW3N1cGVyVHJhaXRdIC0gKGxheWVyW3Byb3BdICsgKGV4cG9ydHMuc2NhbGUgKiBsYXllci5jb25zdHJhaW50c1tvcHBdKSlcblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzW29wcF0ubGVuZ3RoID09IHVuZGVmaW5lZFxuXHRcdFx0XHRcdFx0bGF5ZXJbdHJhaXRdID0gbGF5ZXJbcHJvcF0gLSBsYXllci5jb25zdHJhaW50c1tvcHBdW3Byb3BdXG5cdFx0XHRcdFx0XHRpZiBsYXllclt0cmFpdF0gPCAwXG5cdFx0XHRcdFx0XHRcdGxheWVyW3RyYWl0XSA9IGxheWVyW3RyYWl0XSAqIC0xXG5cdFx0ZWxzZVxuXHRcdFx0IyMgSGFuZGxlIEJvdHRvbSAmIFRyYWlsaW5nXG5cdFx0XHRvYmpQcm9wMiA9IGRlZmF1bHRzLmNvbnN0cmFpbnRzW3R5cGVdLm9ialByb3AyXG5cdFx0XHRpZiBsYXllci5jb25zdHJhaW50c1tvcHBdID09IHVuZGVmaW5lZFxuXHRcdFx0XHQjIyBObyBvcHBvc2l0ZVxuXHRcdFx0XHRpZiBsYXllci5jb25zdHJhaW50c1t0eXBlXSA9PSBwYXJzZUludChsYXllci5jb25zdHJhaW50c1t0eXBlXSwgMTApXG5cdFx0XHRcdFx0IyMgT25seSBJbnRlZ2VyXG5cdFx0XHRcdFx0bGF5ZXJbcHJvcF0gPSBAW3N1cGVyVHJhaXRdIC0gKGxheWVyLmNvbnN0cmFpbnRzW3R5cGVdICogZXhwb3J0cy5zY2FsZSlcblx0XHRcdFx0ZWxzZSBcblx0XHRcdFx0XHRpZiBsYXllci5jb25zdHJhaW50c1t0eXBlXS5sZW5ndGggPT0gdW5kZWZpbmVkXG5cdFx0XHRcdFx0XHQjRW50ZXJlZCBMYXllclxuXHRcdFx0XHRcdFx0aWYgZXhwb3J0cy5zYW1lUGFyZW50KGxheWVyLCBsYXllci5jb25zdHJhaW50c1t0eXBlXSlcblx0XHRcdFx0XHRcdFx0bGF5ZXJbcHJvcF0gPSBsYXllci5jb25zdHJhaW50c1t0eXBlXVtvYmpQcm9wMl1cblx0XHRcdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRcdFx0ZXJyb3IobGF5ZXIsIDEpXG5cdFx0XHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHNbdHlwZV0ubGVuZ3RoID09IDFcblx0XHRcdFx0XHRcdCNBcnJheSBvZiBPbmVcblx0XHRcdFx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzW3R5cGVdWzBdID09IHBhcnNlSW50KGxheWVyLmNvbnN0cmFpbnRzW3R5cGVdWzBdLCAxMClcblx0XHRcdFx0XHRcdFx0I0ludFxuXHRcdFx0XHRcdFx0XHRsYXllcltwcm9wXSA9IEBbb2JqUHJvcF0gLSAobGF5ZXIuY29uc3RyYWludHNbdHlwZV1bMF0gKiBleHBvcnRzLnNjYWxlKVxuXHRcdFx0XHRcdFx0ZWxzZSBcblx0XHRcdFx0XHRcdFx0I09iamVjdFxuXHRcdFx0XHRcdFx0XHRpZiBleHBvcnRzLnNhbWVQYXJlbnQobGF5ZXIsIGxheWVyLmNvbnN0cmFpbnRzW3R5cGVdWzBdKVxuXHRcdFx0XHRcdFx0XHRcdGxheWVyW3Byb3BdID0gbGF5ZXIuY29uc3RyYWludHNbdHlwZV1bMF1bb2JqUHJvcDJdXG5cdFx0XHRcdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRcdFx0XHRlcnJvcihsYXllciwgMSlcblx0XHRcdFx0XHRpZiBsYXllci5jb25zdHJhaW50c1t0eXBlXS5sZW5ndGggPiAxXHRcblx0XHRcdFx0XHRcdCNSZWxhdGlvbnNoaXAgQXJyYXlcblx0XHRcdFx0XHRcdGZvciBvYmplY3QgaW4gbGF5ZXIuY29uc3RyYWludHNbdHlwZV1cblx0XHRcdFx0XHRcdFx0aWYgb2JqZWN0ID09IHBhcnNlSW50KG9iamVjdCwgMTApXG5cdFx0XHRcdFx0XHRcdFx0QC5vYmpJbnQgPSBvYmplY3Rcblx0XHRcdFx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdFx0XHRcdEAub2JqTGF5ZXIgPSBvYmplY3Rcblx0XHRcdFx0XHRcdFx0bGF5ZXJbcHJvcF0gPSBALm9iakxheWVyW29ialByb3AyXSAtIGV4cG9ydHMuc2NhbGUgKiBALm9iakludFxuXG5cblxuZXhwb3J0cy5LZXlib2FyZCA9IChhcnJheSkgLT5cblx0Ym9hcmQgPSBuZXcgTGF5ZXIgYmFja2dyb3VuZENvbG9yOlwiI0QxRDVEQVwiLCBuYW1lOlwia2V5Ym9hcmRcIlxuXHRib2FyZC5jb25zdHJhaW50cyA9IChib3R0b206MCwgaGVpZ2h0OjIxNiwgdHJhaWxpbmc6MSwgbGVhZGluZzoxKVxuXHRleHBvcnRzLmxheW91dCgpXG5cdGxldHRlcnNBcnJheSA9IFtcInFcIiwgXCJ3XCIsIFwiZVwiLCBcInJcIiwgXCJ0XCIsIFwieVwiLCBcInVcIiwgXCJpXCIsIFwib1wiLCBcInBcIiwgXCJhXCIsIFwic1wiLCBcImRcIiwgXCJmXCIsIFwiZ1wiLCBcImhcIiwgXCJqXCIsIFwia1wiLCBcImxcIiwgXCJ6XCIsIFwieFwiLCBcImNcIiwgXCJ2XCIsICBcImJcIiwgXCJuXCIsIFwibVwiXVxuXHRrZXlzQXJyYXkgPSBbXVxuXHRzcGFjZXIgPSBleHBvcnRzLnB4KDUpXG5cdGlmIGV4cG9ydHMuc2NhbGUgPT0gMyB8fCBleHBvcnRzLndpZHRoID09IDY0MFxuXHRcdHNwYWNlciA9IGV4cG9ydHMucHgoNilcblx0cm93c01hcCA9IFtcblx0XHR7IFxuXHRcdFx0XCJwYWRkaW5nXCIgOiBleHBvcnRzLnB4KDQpXG5cdFx0XHRcInN0YXJ0SW5kZXhcIiA6IDBcblx0XHRcdFwiZW5kSW5kZXhcIiA6IDlcblx0XHRcdFwibWFyZ2luVG9wXCIgOiBleHBvcnRzLnB4KDEwKVxuXHRcdH0sXG5cdFx0eyBcblx0XHRcdFwicGFkZGluZ1wiIDogMjIgKiBleHBvcnRzLnNjYWxlXG5cdFx0XHRcInN0YXJ0SW5kZXhcIiA6IDEwXG5cdFx0XHRcImVuZEluZGV4XCIgOiAxOFxuXHRcdFx0XCJtYXJnaW5Ub3BcIiA6IDIyICogZXhwb3J0cy5zY2FsZVxuXHRcdH0sXG5cdFx0eyBcblx0XHRcdFwicGFkZGluZ1wiIDogNTkgKiBleHBvcnRzLnNjYWxlXG5cdFx0XHRcInN0YXJ0SW5kZXhcIiA6IDE5XG5cdFx0XHRcImVuZEluZGV4XCIgOiAyNVxuXHRcdFx0XCJtYXJnaW5Ub3BcIiA6IDM0ICogZXhwb3J0cy5zY2FsZVxuXHRcdH1cblx0XVxuXHRrZXlQb3BVcCA9IG5ldyBMYXllciB3aWR0aDpAa2V5V2lkdGgsIGhlaWdodDpAa2V5SGVpZ2h0LCB4OkAueC0xNipleHBvcnRzLnNjYWxlLCBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiLCBzdXBlckxheWVyOmJvYXJkLCBuYW1lOlwia2V5IHBvcCB1cFwiXG5cdGJveCA9IG5ldyBMYXllciBib3JkZXJSYWRpdXM6ZXhwb3J0cy5weCgxMCksIHN1cGVyTGF5ZXI6a2V5UG9wVXAsIGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCIsIGNvbG9yOlwiYmxhY2tcIiwgbmFtZTpcImxldHRlclwiXG5cdGJveC5zdHlsZSA9IHtcblx0XHRcImZvbnQtc2l6ZVwiIDogMzkgKiBleHBvcnRzLnNjYWxlICsgXCJweFwiXG5cdFx0XCJmb250LXdlaWdodFwiIDogMzAwXG5cdFx0XCJmb250LWZhbWlseVwiIDogJy1hcHBsZS1zeXN0ZW0sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYnXG5cdFx0J3RleHQtYWxpZ24nIDogJ2NlbnRlcidcblx0XHQnbGluZS1oZWlnaHQnIDogQGxpbmVIZWlnaHRcblx0fVxuXHRALmNvbG9yID0gXCJ3aGl0ZVwiXG5cdHBhdGggPSBuZXcgTGF5ZXIgc3VwZXJMYXllcjprZXlQb3BVcCwgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIiwgbmFtZTpcInNoYXBlIHBhdGhcIlxuXG5cblx0c2hpZnRLZXkgPSBuZXcgTGF5ZXIgc3VwZXJMYXllcjpib2FyZCwgbmFtZTpcInNoaWZ0XCIsIGJvcmRlclJhZGl1czpleHBvcnRzLnB4KDUpLCBiYWNrZ3JvdW5kQ29sb3I6XCJ3aGl0ZVwiLCBjb2xvcjpcImJsYWNrXCIsIHNoYWRvd1k6MSwgc2hhZG93Q29sb3I6XCJibGFja1wiLCBzaGFkb3dPcGFjaXR5Oi4yNSwgYmFja2dyb3VuZENvbG9yOlwid2hpdGVcIlxuXHRzaGlmdEtleS5jb25zdHJhaW50cyA9IChib3R0b206NTAsIGxlYWRpbmc6Mywgd2lkdGg6NDIsIGhlaWdodDo0Milcblx0c2hpZnRJY29uID0gbmV3IExheWVyIHdpZHRoOmV4cG9ydHMucHgoMTkpLCBoZWlnaHQ6ZXhwb3J0cy5weCgxNiksIHN1cGVyTGF5ZXI6c2hpZnRLZXksIGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCJcblx0c2hpZnRJY29uLmh0bWwgPSBcIjw/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyc/PlxuXHRcdDxzdmcgd2lkdGg9JyN7ZXhwb3J0cy5weCgyMCl9cHgnIGhlaWdodD0nI3tleHBvcnRzLnB4KDE5KX1weCcgdmlld0JveD0nMCAwIDIwIDE5JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHhtbG5zOnNrZXRjaD0naHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zJz5cblx0XHQgICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjUuMiAoMjUyMzUpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdCAgICA8dGl0bGU+U2hpZnQ8L3RpdGxlPlxuXHRcdCAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHQgICAgPGRlZnM+PC9kZWZzPlxuXHRcdCAgICA8ZyBpZD0nUGFnZS0xJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJyBza2V0Y2g6dHlwZT0nTVNQYWdlJz5cblx0XHQgICAgICAgIDxnIGlkPSdLZXlib2FyZC9MaWdodC9Mb3dlcicgc2tldGNoOnR5cGU9J01TTGF5ZXJHcm91cCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTE0LjAwMDAwMCwgLTEyOS4wMDAwMDApJyBmaWxsPScjMDMwMzAzJz5cblx0XHQgICAgICAgICAgICA8ZyBpZD0nVGhpcmQtUm93JyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgzLjAwMDAwMCwgMTE4LjAwMDAwMCknIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnPlxuXHRcdCAgICAgICAgICAgICAgICA8cGF0aCBkPSdNMjEuNjcxOTAwOCwxMi4yMzI1ODk4IEMyMS4zMDEwMzIsMTEuODI3OTkxNiAyMC42OTQ2ODkyLDExLjgzMzQ3MzEgMjAuMzI4ODE5NSwxMi4yMzI1ODk4IEwxMS42OTQ3MDIzLDIxLjY1MTI5ODMgQzEwLjc1ODc0NDEsMjIuNjcyMzA4IDExLjEyODU1NDEsMjMuNSAxMi41MDk3NzUxLDIzLjUgTDE1Ljk5OTk5OTksMjMuNTAwMDAwMiBMMTUuOTk5OTk5OSwyOC4wMDE0MjQxIEMxNS45OTk5OTk5LDI4LjgyOTA2NDggMTYuNjcxNjU1OSwyOS41MDAwMDAxIDE3LjQ5NzEwMSwyOS41MDAwMDAxIEwyNC41MDI4OTkyLDI5LjUwMDAwMDEgQzI1LjMyOTcyNTMsMjkuNTAwMDAwMSAyNi4wMDAwMDAzLDI4LjgzNDk3MDMgMjYuMDAwMDAwMywyOC4wMDE0MjQxIEwyNi4wMDAwMDAzLDIzLjUwMDAwMDEgTDI5LjQ5MDIyNTEsMjMuNTAwMDAwMiBDMzAuODc2MzM1NywyMy41MDAwMDAyIDMxLjI0Mzk1MjEsMjIuNjc1MTkxNiAzMC4zMDU0MTYxLDIxLjY1MTI5ODUgTDIxLjY3MTkwMDgsMTIuMjMyNTg5OCBaIE0yMS4zNDE3NDgsMTQuMzY0NTMxNiBDMjEuMTUzMDA1NiwxNC4xNjMyMDY0IDIwLjg0MzM1MTUsMTQuMTY3MDkxNCAyMC42NTgyNTE0LDE0LjM2NDUzMTYgTDEzLjUsMjEuOTk5OTk5OCBMMTcuNTAwMDAwMSwyMS45OTk5OTk5IEwxNy41MDAwMDAyLDI3LjUwODk5NTYgQzE3LjUwMDAwMDIsMjcuNzgwMTcwMyAxNy43MzI5MDI3LDI4LjAwMDAwMDggMTguMDAzNDIyOSwyOC4wMDAwMDA4IEwyMy45OTY1NzcsMjguMDAwMDAwOCBDMjQuMjc0NjA5NywyOC4wMDAwMDA4IDI0LjQ5OTk5OTcsMjcuNzcyMTIwMyAyNC40OTk5OTk3LDI3LjUwODk5NTYgTDI0LjQ5OTk5OTcsMjEuOTk5OTk5OSBMMjguNSwyMS45OTk5OTk5IEwyMS4zNDE3NDgsMTQuMzY0NTMxNiBaJyBpZD0nU2hpZnQnPjwvcGF0aD5cblx0XHQgICAgICAgICAgICA8L2c+XG5cdFx0ICAgICAgICA8L2c+XG5cdFx0ICAgIDwvZz5cblx0XHQ8L3N2Zz5cIlxuXG5cblx0Zm9yIGxldHRlciBpbiBsZXR0ZXJzQXJyYXlcblx0XHRpbmRleCA9IGxldHRlcnNBcnJheS5pbmRleE9mKGxldHRlcikgXG5cdFx0a2V5ID0gbmV3IExheWVyIG5hbWU6bGV0dGVyLCBzdXBlckxheWVyOmJvYXJkLCBib3JkZXJSYWRpdXM6NSpleHBvcnRzLnNjYWxlLCBiYWNrZ3JvdW5kQ29sb3I6XCJ3aGl0ZVwiLCBjb2xvcjpcImJsYWNrXCIsIHNoYWRvd1k6MSwgc2hhZG93Q29sb3I6XCJibGFja1wiLCBzaGFkb3dPcGFjaXR5Oi4yNVxuXHRcdGtleVBvcFVwLmJyaW5nVG9Gcm9udCgpXG5cdFx0Ym94LmJyaW5nVG9Gcm9udCgpXG5cdFx0aWYgZXhwb3J0cy5zY2FsZSA9PSAyXG5cdFx0XHRrZXkuY29uc3RyYWludHMgPSAod2lkdGg6MzIsIGhlaWdodDo0NClcblx0XHRcdGtleVBvcFVwLmNvbnN0cmFpbnRzID0gKHdpZHRoOjY1LCBoZWlnaHQ6MTIyKVxuXHRcdFx0cGF0aC5jb25zdHJhaW50cyA9ICh3aWR0aDo2NSwgaGVpZ2h0OiAxMjIpXG5cdFx0XHRwYXRoLnkgPSAxMFxuXHRcdFx0QHBhdGhXaWR0aCA9IGV4cG9ydHMucHgoNjUpXG5cdFx0XHRAcGF0aEhlaWdodCA9IGV4cG9ydHMucHgoMTIyKVxuXHRcdFx0QGtleUhlaWdodCA9IGV4cG9ydHMucHgoMzIpXG5cdFx0XHRAa2V5V2lkdGggPSBleHBvcnRzLnB4KDQ0KVxuXHRcdFx0QGxpbmVIZWlnaHQgPSBAa2V5V2lkdGggLSAxNyArIFwicHhcIlxuXHRcdFx0Ym94LmNvbnN0cmFpbnRzID0gKHdpZHRoOjMyLCBoZWlnaHQ6NDQpXG5cdFx0XHRib3guY2VudGVyWCgpXG5cdFx0XHRib3gueSA9IGV4cG9ydHMucHgoMjgpXG5cdFx0aWYgZXhwb3J0cy5zY2FsZSA9PSAzXG5cdFx0XHRrZXkuY29uc3RyYWludHMgPSAod2lkdGg6MzUsIGhlaWdodDo0Nilcblx0XHRcdGtleVBvcFVwLmNvbnN0cmFpbnRzID0gKHdpZHRoOjY4LCBoZWlnaHQ6MTIyKVxuXHRcdFx0QGtleUhlaWdodCA9IGV4cG9ydHMucHgoMTIyKVxuXHRcdFx0QGtleVdpZHRoID0gZXhwb3J0cy5weCg2NSlcblx0XHRcdEBsaW5lSGVpZ2h0ID0gQGtleVdpZHRoICsgXCJweFwiXG5cdFx0XHRAcGF0aFdpZHRoID0gZXhwb3J0cy5weCg2OClcblx0XHRcdEBwYXRoSGVpZ2h0ID0gZXhwb3J0cy5weCgxMjgpXG5cdFx0XHRwYXRoLnkgPSAwXG5cblxuXHRcdFx0Ym94LmNvbnN0cmFpbnRzID0gKHdpZHRoOjM1LCBoZWlnaHQ6NDYpXG5cdFx0XHRib3guY2VudGVyWCgpXG5cdFx0XHRib3gueSA9IGV4cG9ydHMucHgoMjgpXG5cblx0XHRpZiBleHBvcnRzLndpZHRoID09IDY0MFxuXHRcdFx0a2V5LmNvbnN0cmFpbnRzID0gKHdpZHRoOjI2LCBoZWlnaHQ6MzkpXG5cblx0XHRrZXlQb3BVcC52aXNpYmxlID0gZmFsc2VcblxuXHRcdGV4cG9ydHMubGF5b3V0KClcblx0XHRrZXkuc3R5bGUgPSB7XG5cdFx0XHRcImZvbnQtc2l6ZVwiIDogMjUgKiBleHBvcnRzLnNjYWxlICsgXCJweFwiXG5cdFx0XHRcImZvbnQtd2VpZ2h0XCIgOiAzMDBcblx0XHRcdFwiZm9udC1mYW1pbHlcIiA6ICctYXBwbGUtc3lzdGVtLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmJ1xuXHRcdFx0J3RleHQtYWxpZ24nIDogJ2NlbnRlcidcblx0XHRcdCdsaW5lLWhlaWdodCcgOiBrZXkuaGVpZ2h0IC0gZXhwb3J0cy5weCg1KSArIFwicHhcIlxuXHRcdH1cblx0XHRrZXkuaHRtbCA9IGxldHRlclxuXHRcdGlmIGluZGV4IDw9IHJvd3NNYXBbMF0uZW5kSW5kZXhcblx0XHRcdHJvd0luZGV4ID0gaW5kZXggLSByb3dzTWFwWzBdLnN0YXJ0SW5kZXhcblx0XHRcdGtleS54ID0gcm93c01hcFswXS5wYWRkaW5nICsgKHJvd0luZGV4KnNwYWNlcikgKyAocm93SW5kZXgqa2V5LndpZHRoKVxuXHRcdFx0a2V5LnkgPSByb3dzTWFwWzBdLm1hcmdpblRvcFxuXHRcdGlmIGluZGV4ID4gcm93c01hcFswXS5lbmRJbmRleCAmJiBpbmRleCA8PSByb3dzTWFwWzFdLmVuZEluZGV4XG5cdFx0XHRyb3dJbmRleCA9IGluZGV4IC0gcm93c01hcFsxXS5zdGFydEluZGV4XG5cdFx0XHRrZXkueCA9IHJvd3NNYXBbMV0ucGFkZGluZyArIChyb3dJbmRleCpzcGFjZXIpICsgKHJvd0luZGV4KmtleS53aWR0aClcblx0XHRcdGtleS55ID0gcm93c01hcFsxXS5tYXJnaW5Ub3AgKyBrZXkuaGVpZ2h0XG5cdFx0aWYgaW5kZXggPiByb3dzTWFwWzFdLmVuZEluZGV4XG5cdFx0XHRyb3dJbmRleCA9IGluZGV4IC0gcm93c01hcFsyXS5zdGFydEluZGV4XG5cdFx0XHRrZXkueCA9IHJvd3NNYXBbMl0ucGFkZGluZyArIChyb3dJbmRleCpzcGFjZXIpICsgKHJvd0luZGV4KmtleS53aWR0aClcblx0XHRcdGtleS55ID0gcm93c01hcFsyXS5tYXJnaW5Ub3AgKyBrZXkuaGVpZ2h0ICogMlxuXHRcdHBhdGguaHRtbCA9IFwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cblx0XHQ8c3ZnIHdpZHRoPScje0BwYXRoV2lkdGh9cHgnIGhlaWdodD0nI3tAcGF0aEhlaWdodH0nIHZpZXdCb3g9JzAgMCA2MyAxMTQnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycgeG1sbnM6c2tldGNoPSdodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMnPlxuXHRcdCAgICA8dGl0bGU+UmVjdGFuZ2xlIDQ0IENvcHk8L3RpdGxlPlxuXHRcdCAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHQgICAgPGRlZnM+XG5cdFx0ICAgICAgICA8ZmlsdGVyIHg9Jy01MCUnIHk9Jy01MCUnIHdpZHRoPScyMDAlJyBoZWlnaHQ9JzIwMCUnIGZpbHRlclVuaXRzPSdvYmplY3RCb3VuZGluZ0JveCcgaWQ9J2ZpbHRlci0xJz5cblx0XHQgICAgICAgICAgICA8ZmVPZmZzZXQgZHg9JzAnIGR5PScwJyBpbj0nU291cmNlQWxwaGEnIHJlc3VsdD0nc2hhZG93T2Zmc2V0T3V0ZXIxJz48L2ZlT2Zmc2V0PlxuXHRcdCAgICAgICAgICAgIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249JzEuNScgaW49J3NoYWRvd09mZnNldE91dGVyMScgcmVzdWx0PSdzaGFkb3dCbHVyT3V0ZXIxJz48L2ZlR2F1c3NpYW5CbHVyPlxuXHRcdCAgICAgICAgICAgIDxmZUNvbG9yTWF0cml4IHZhbHVlcz0nMCAwIDAgMCAwICAgMCAwIDAgMCAwICAgMCAwIDAgMCAwICAwIDAgMCAwLjIxIDAnIGluPSdzaGFkb3dCbHVyT3V0ZXIxJyB0eXBlPSdtYXRyaXgnIHJlc3VsdD0nc2hhZG93TWF0cml4T3V0ZXIxJz48L2ZlQ29sb3JNYXRyaXg+XG5cdFx0ICAgICAgICAgICAgPGZlTWVyZ2U+XG5cdFx0ICAgICAgICAgICAgICAgIDxmZU1lcmdlTm9kZSBpbj0nc2hhZG93TWF0cml4T3V0ZXIxJz48L2ZlTWVyZ2VOb2RlPlxuXHRcdCAgICAgICAgICAgICAgICA8ZmVNZXJnZU5vZGUgaW49J1NvdXJjZUdyYXBoaWMnPjwvZmVNZXJnZU5vZGU+XG5cdFx0ICAgICAgICAgICAgPC9mZU1lcmdlPlxuXHRcdCAgICAgICAgPC9maWx0ZXI+XG5cdFx0ICAgIDwvZGVmcz5cblx0XHQgICAgPGcgaWQ9J1BhZ2UtMScgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCcgc2tldGNoOnR5cGU9J01TUGFnZSc+XG5cdFx0ICAgICAgICA8ZyBpZD0naVBob25lLTYnIHNrZXRjaDp0eXBlPSdNU0FydGJvYXJkR3JvdXAnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC0xMTguMDAwMDAwLCAtMjQwLjAwMDAwMCknIHN0cm9rZT0nI0M3QzdDNycgZmlsdGVyPSd1cmwoI2ZpbHRlci0xKScgc3Ryb2tlLXdpZHRoPScwLjUnIFxuXHRcdCAgICAgICAgZmlsbD0nI0ZGRkZGRicgb3BhY2l0eT0nMC45OTgzNjc1MzcnPlxuXHRcdCAgICAgICAgIDxwYXRoIGQ9J00xMzQsMzA2IEMxMzQsMzA2IDEyMSwyOTUgMTIxLDI5MCBDMTIxLDI3OS42MTY3ODggMTIxLDI1My4wMDE0NTYgMTIxLDI1My4wMDE0NTYgQzEyMSwyNDcuNDc3ODA0IDEyNS40ODU4MzIsMjQzIDEzMS4wMDI3NzQsMjQzIEwxNjcuODYyMTI3LDI0MyBDMTczLjM4NjUwNywyNDMgMTc3Ljg4MDg2MiwyNDcuNDY5OTA1IFxuXHRcdCAgICAgICAgIDE3Ny45MDAwNDQsMjUyLjk5NzI3MSBDMTc3LjkwMDA0NCwyNTIuOTk3MjcxIDE3OCwyODAgMTc3Ljk5OTk5OSwyOTAgQzE3Ny45OTk5OTksMjk1LjAwNjU1MyAxNjUsMzA2IDE2NSwzMDYgTDE2NSwzNDYuMDQ5NTk0IFxuXHRcdCAgICAgICAgIEMxNjUsMzQ4LjgwNjgwNyAxNjIuNzcwNTU2LDM1MS4wNDE5NjkgMTYwLjAwMjA5OCwzNTEuMDQxOTY5IEwxMzguOTk3OTAyLDM1MS4wNDE5NjkgXG5cdFx0ICAgICAgICAgIEMxMzYuMjM3NjM3LDM1MS4wNDE5NjkgMTM0LDM0OC44MDgzMzEgMTM0LDM0Ni4wNDk1OTQgTDEzNCwzMDYgWicgaWQ9J1JlY3RhbmdsZS00NC1Db3B5JyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgxNDkuNTAwMDAwLCAyOTcuMDIwOTg1KSBzY2FsZSgtMSwgMSkgdHJhbnNsYXRlKC0xNDkuNTAwMDAwLCAtMjk3LjAyMDk4NSkgJz5cblx0XHQgICAgICAgICAgPC9wYXRoPlxuXHRcdCAgICAgICAgPC9nPlxuXHRcdCAgICA8L2c+XG5cdFx0PC9zdmc+XCJcblx0XHRrZXlzQXJyYXkucHVzaCBrZXlcblxuXG5cdFx0a2V5Lm9uIEV2ZW50cy5Ub3VjaFN0YXJ0LCAtPlxuXHRcdFx0a2V5UG9wVXAudmlzaWJsZSA9IHRydWVcdFxuXHRcdFx0Ym94Lmh0bWwgPSBALm5hbWVcblx0XHRcdGtleVBvcFVwLm1heFkgPSBALm1heFlcblx0XHRcdGtleVBvcFVwLm1pZFggPSBALm1pZFhcblxuXHRcdGtleS5vbiBFdmVudHMuVG91Y2hNb3ZlLCAtPlxuXHRcdFx0Ym94Lmh0bWwgPSBALm5hbWVcblx0XHRcdGtleVBvcFVwLm1heFkgPSBALm1heFlcblx0XHRcdGtleVBvcFVwLm1pZFggPSBALm1pZFhcdFxuXG5cdFx0Ym9hcmQub24gRXZlbnRzLlRvdWNoRW5kLCAtPlxuXHRcdFx0a2V5UG9wVXAudmlzaWJsZSA9IGZhbHNlXG5cblxuXG5cblxuXHRcdFxuXG5cdHJldHVybiB7XG5cdFx0XCJib2FyZFwiIDogYm9hcmRcblx0XHRcImtleXNcIiA6IGtleXNBcnJheVxuXHRcdFwia2V5XCIgOiB7XG5cdFx0XHRcInFcIiA6IGtleXNBcnJheVswXVxuXHRcdFx0XCJ3XCIgOiBrZXlzQXJyYXlbMV1cblx0XHRcdFwiZVwiIDoga2V5c0FycmF5WzJdXG5cdFx0XHRcInJcIiA6IGtleXNBcnJheVszXVxuXHRcdFx0XCJ0XCIgOiBrZXlzQXJyYXlbNF1cblx0XHRcdFwieVwiIDoga2V5c0FycmF5WzVdXG5cdFx0XHRcInVcIiA6IGtleXNBcnJheVs2XVxuXHRcdFx0XCJpXCIgOiBrZXlzQXJyYXlbN11cblx0XHRcdFwib1wiIDoga2V5c0FycmF5WzhdXG5cdFx0XHRcInBcIiA6IGtleXNBcnJheVs5XVxuXHRcdFx0XCJhXCIgOiBrZXlzQXJyYXlbMTBdXG5cdFx0XHRcInNcIiA6IGtleXNBcnJheVsxMV1cblx0XHRcdFwiZFwiIDoga2V5c0FycmF5WzEyXVxuXHRcdFx0XCJmXCIgOiBrZXlzQXJyYXlbMTNdXG5cdFx0XHRcImdcIiA6IGtleXNBcnJheVsxNF1cblx0XHRcdFwiaFwiIDoga2V5c0FycmF5WzE1XVxuXHRcdFx0XCJqXCIgOiBrZXlzQXJyYXlbMTZdXG5cdFx0XHRcImtcIiA6IGtleXNBcnJheVsxN11cblx0XHRcdFwibFwiIDoga2V5c0FycmF5WzE4XVxuXHRcdFx0XCJ6XCIgOiBrZXlzQXJyYXlbMTldXG5cdFx0XHRcInhcIiA6IGtleXNBcnJheVsyMF1cblx0XHRcdFwiY1wiIDoga2V5c0FycmF5WzIxXVxuXHRcdFx0XCJ2XCIgOiBrZXlzQXJyYXlbMjJdXG5cdFx0XHRcImJcIiA6IGtleXNBcnJheVsyM11cblx0XHRcdFwiblwiIDoga2V5c0FycmF5WzI0XVxuXHRcdFx0XCJtXCIgOiBrZXlzQXJyYXlbMjVdXG5cdFx0fVxuXHR9XG5cblxuIiwiIyBBZGQgdGhlIGZvbGxvd2luZyBsaW5lIHRvIHlvdXIgcHJvamVjdCBpbiBGcmFtZXIgU3R1ZGlvLiBcbiMgbXlNb2R1bGUgPSByZXF1aXJlIFwibXlNb2R1bGVcIlxuIyBSZWZlcmVuY2UgdGhlIGNvbnRlbnRzIGJ5IG5hbWUsIGxpa2UgbXlNb2R1bGUubXlGdW5jdGlvbigpIG9yIG15TW9kdWxlLm15VmFyXG5cbmV4cG9ydHMubXlWYXIgPSBcIm15VmFyaWFibGVcIlxuXG5leHBvcnRzLm15RnVuY3Rpb24gPSAtPlxuXHRwcmludCBcIm15RnVuY3Rpb24gaXMgcnVubmluZ1wiXG5cbmV4cG9ydHMubXlBcnJheSA9IFsxLCAyLCAzXSJdfQ==
