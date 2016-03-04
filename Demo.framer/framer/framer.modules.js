require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"iOSKit":[function(require,module,exports){
var defaults, error, framerDevices, layoutAlign, layoutChange, layoutSize, makeStyleChange, onResize, screen, setProps, textAutoSize;

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
  alertBanner: {
    text: {
      title: "Title",
      message: "Message",
      action: "Action",
      time: "now",
      icon: void 0
    }
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
      textAlign: "left",
      backgroundColor: "transparent",
      color: "black",
      fontSize: 17,
      fontFamily: "-apple-system, Helvetica, Arial, sans-serif",
      fontWeight: "regular",
      lineHeight: "auto",
      name: "text layer"
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

setProps(defaults.alertBanner.text, defaults.alertBanner);

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
    letterSpacing: textLayer.style["letter-spacing"]
  };
  textWidth = Utils.textSize(textLayer.html, styles, constraints);
  return {
    width: textWidth.width,
    height: textWidth.height
  };
};

exports.Text = function(array) {
  var change, exceptions, i, j, k, len, len1, obj, ref, styleArray, textFrame, textLayer, textStyle;
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
    obj = {},
    obj["" + this.style] = styleArray,
    obj
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
      bottom: 16
    };
    secondaryActionButton.constraints = {
      align: "center",
      bottom: 16
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

exports.AlertBanner = function(array) {
  var bannerBG, i, icon, j, len, message, ref, time, title;
  if (array === void 0) {
    array = [];
  }
  ref = defaults.alertBanner.props;
  for (j = 0, len = ref.length; j < len; j++) {
    i = ref[j];
    if (array[i] !== void 0) {
      this[i] = array[i];
    } else {
      this[i] = defaults.alertBanner.text[i];
    }
  }
  bannerBG = new Layer({
    backgroundColor: "transparent",
    name: "alert banner all"
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
    name: "alert icon",
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
    style: "alertBannerTitle",
    text: this.title,
    color: "white",
    fontWeight: "medium",
    fontSize: 13,
    superLayer: bannerBG,
    name: "alert title"
  });
  title.constraints = {
    top: 5,
    leading: [icon, 11]
  };
  message = new exports.Text({
    style: "alertBannerMessage",
    text: this.message,
    color: "white",
    fontSize: 13,
    superLayer: bannerBG,
    name: "alert message"
  });
  message.constraints = {
    leadingEdges: title,
    top: [title, 2]
  };
  time = new exports.Text({
    style: "alertBannerTime",
    text: this.time,
    color: "white",
    fontSize: 11,
    superLayer: bannerBG,
    name: "alert time"
  });
  time.constraints = {
    leading: [title, 5],
    bottomEdges: title
  };
  return exports.layout();
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvS2V2eW4vRHJvcGJveCAoUGVyc29uYWwpL0ZyYW1lciBQcm90b3R5cGVzL2ZyYW1lci1pb3Mta2l0L0RlbW8uZnJhbWVyL21vZHVsZXMvaU9TS2l0LmNvZmZlZSIsIi9Vc2Vycy9LZXZ5bi9Ecm9wYm94IChQZXJzb25hbCkvRnJhbWVyIFByb3RvdHlwZXMvZnJhbWVyLWlvcy1raXQvRGVtby5mcmFtZXIvbW9kdWxlcy9teU1vZHVsZS5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNFQSxJQUFBOztBQUFBLGFBQUEsR0FBZ0I7RUFFaEIsWUFBQSxFQUFlO0lBQUUsTUFBQSxFQUFRLE1BQU0sQ0FBQyxXQUFqQjtJQUE4QixLQUFBLEVBQU8sTUFBTSxDQUFDLFVBQTVDO0lBQXdELEtBQUEsRUFBTSxDQUE5RDtJQUFpRSxNQUFBLEVBQU8sS0FBeEU7SUFBK0UsUUFBQSxFQUFTLEtBQXhGO0dBRkM7RUFNaEIsNEJBQUEsRUFBOEI7SUFBRSxNQUFBLEVBQVEsSUFBVjtJQUFnQixLQUFBLEVBQU8sR0FBdkI7SUFBNEIsS0FBQSxFQUFPLENBQW5DO0lBQXNDLE1BQUEsRUFBTyxJQUE3QztJQUFtRCxRQUFBLEVBQVMsS0FBNUQ7R0FOZDtFQU9oQix3QkFBQSxFQUEwQjtJQUFFLE1BQUEsRUFBUSxJQUFWO0lBQWdCLEtBQUEsRUFBTyxHQUF2QjtJQUE0QixLQUFBLEVBQU8sQ0FBbkM7SUFBc0MsTUFBQSxFQUFPLElBQTdDO0lBQW1ELFFBQUEsRUFBUyxLQUE1RDtHQVBWO0VBUWhCLHNCQUFBLEVBQXdCO0lBQUUsTUFBQSxFQUFRLElBQVY7SUFBZ0IsS0FBQSxFQUFPLEdBQXZCO0lBQTRCLEtBQUEsRUFBTyxDQUFuQztJQUFzQyxNQUFBLEVBQU8sSUFBN0M7SUFBbUQsUUFBQSxFQUFTLEtBQTVEO0dBUlI7RUFXaEIsdUJB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Z0JQLEdBQUEsRUFBTSxTQUFVLENBQUEsRUFBQSxDQWhCVDtNQWlCUCxHQUFBLEVBQU0sU0FBVSxDQUFBLEVBQUEsQ0FqQlQ7TUFrQlAsR0FBQSxFQUFNLFNBQVUsQ0FBQSxFQUFBLENBbEJUO01BbUJQLEdBQUEsRUFBTSxTQUFVLENBQUEsRUFBQSxDQW5CVDtNQW9CUCxHQUFBLEVBQU0sU0FBVSxDQUFBLEVBQUEsQ0FwQlQ7TUFxQlAsR0FBQSxFQUFNLFNBQVUsQ0FBQSxFQUFBLENBckJUO01Bc0JQLEdBQUEsRUFBTSxTQUFVLENBQUEsRUFBQSxDQXRCVDtNQXVCUCxHQUFBLEVBQU0sU0FBVSxDQUFBLEVBQUEsQ0F2QlQ7TUF3QlAsR0FBQSxFQUFNLFNBQVUsQ0FBQSxFQUFBLENBeEJUO01BeUJQLEdBQUEsRUFBTSxTQUFVLENBQUEsRUFBQSxDQXpCVDtNQTBCUCxHQUFBLEVBQU0sU0FBVSxDQUFBLEVBQUEsQ0ExQlQ7S0FIRjs7QUExdkJXOzs7O0FDM3NCbkIsT0FBTyxDQUFDLEtBQVIsR0FBZ0I7O0FBRWhCLE9BQU8sQ0FBQyxVQUFSLEdBQXFCLFNBQUE7U0FDcEIsS0FBQSxDQUFNLHVCQUFOO0FBRG9COztBQUdyQixPQUFPLENBQUMsT0FBUixHQUFrQixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIjaU9TS2l0IE1vZHVsZVxuI0J5IEtldnluIEFybm90dCBAa3Z5bl9cbmZyYW1lckRldmljZXMgPSB7XG4jRnVsbHNjcmVlblxuXCJmdWxsc2NyZWVuXCIgOiB7IGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0LCB3aWR0aDogd2luZG93LmlubmVyV2lkdGgsXHRzY2FsZToxLCBtb2JpbGU6ZmFsc2UsIHBsYXRmb3JtOlwid2ViXCJ9XG5cbiNpUGhvbmVzXG4jIzVTXG5cImFwcGxlLWlwaG9uZS01cy1zcGFjZS1ncmF5XCI6IHsgaGVpZ2h0OiAxMTM2LCB3aWR0aDogNjQwLFx0c2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXCJhcHBsZS1pcGhvbmUtNXMtc2lsdmVyXCI6IHsgaGVpZ2h0OiAxMTM2LCB3aWR0aDogNjQwLFx0c2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXCJhcHBsZS1pcGhvbmUtNXMtZ29sZFwiOiB7IGhlaWdodDogMTEzNiwgd2lkdGg6IDY0MCxcdHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblxuIyM1Y1xuXCJhcHBsZS1pcGhvbmUtNWMtZ3JlZW5cIjogeyBoZWlnaHQ6IDExMzYsIHdpZHRoOiA2NDAsXHRzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cImFwcGxlLWlwaG9uZS01Yy1ibHVlXCI6IHsgaGVpZ2h0OiAxMTM2LCB3aWR0aDogNjQwLFx0c2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXCJhcHBsZS1pcGhvbmUtNWMtcmVkXCI6IHsgaGVpZ2h0OiAxMTM2LCB3aWR0aDogNjQwLFx0c2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXCJhcHBsZS1pcGhvbmUtNWMtd2hpdGVcIjogeyBoZWlnaHQ6IDExMzYsIHdpZHRoOiA2NDAsXHRzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cImFwcGxlLWlwaG9uZS01Yy15ZWxsb3dcIjogeyBoZWlnaHQ6IDExMzYsIHdpZHRoOiA2NDAsXHRzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cImFwcGxlLWlwaG9uZS01Yy1waW5rXCI6IHsgaGVpZ2h0OiAxMTM2LCB3aWR0aDogNjQwLFx0c2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuIyM2c1xuXCJhcHBsZS1pcGhvbmUtNnMtc3BhY2UtZ3JheVwiIDogeyBoZWlnaHQ6IDEzMzQsIHdpZHRoOiA3NTAsXHRzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cImFwcGxlLWlwaG9uZS02cy1zaWx2ZXJcIjogeyBoZWlnaHQ6IDEzMzQsIHdpZHRoOiA3NTAsXHRzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cImFwcGxlLWlwaG9uZS02cy1nb2xkXCI6IHsgaGVpZ2h0OiAxMzM0LCB3aWR0aDogNzUwLFx0c2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXCJhcHBsZS1pcGhvbmUtNnMtcm9zZS1nb2xkXCI6IHsgaGVpZ2h0OiAxMzM0LCB3aWR0aDogNzUwLFx0c2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuIzZzIHBsdXNcblwiYXBwbGUtaXBob25lLTZzLXBsdXMtZ29sZFwiOiB7IGhlaWdodDogMjIwOCwgd2lkdGg6IDEyNDIsXHRzY2FsZTogMywgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cImFwcGxlLWlwaG9uZS02cy1wbHVzLXNpbHZlclwiOiB7IGhlaWdodDogMjIwOCwgd2lkdGg6IDEyNDIsXHRzY2FsZTogMywgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cImFwcGxlLWlwaG9uZS02cy1wbHVzLXNwYWNlLWdyYXlcIjogeyBoZWlnaHQ6IDIyMDgsIHdpZHRoOiAxMjQyLFx0c2NhbGU6IDMsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXCJhcHBsZS1pcGhvbmUtNnMtcGx1cy1yb3NlLWdvbGRcIjogeyBoZWlnaHQ6IDIyMDgsIHdpZHRoOiAxMjQyLFx0c2NhbGU6IDMsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXG4jaVBhZHNcblxuI0FpclxuXG5cImFwcGxlLWlwYWQtYWlyLTItZ29sZFwiOiB7IGhlaWdodDogMjA0OCwgd2lkdGg6IDE1MzYsXHRzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cImFwcGxlLWlwYWQtYWlyLTItc2lsdmVyXCI6IHsgaGVpZ2h0OiAyMDQ4LCB3aWR0aDogMTUzNixcdHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblwiYXBwbGUtaXBhZC1haXItMi1zcGFjZS1ncmF5XCI6IHsgaGVpZ2h0OiAyMDQ4LCB3aWR0aDogMTUzNixcdHNjYWxlOiAyLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblxuI21pbmlcblwiYXBwbGUtaXBhZC1taW5pLTQtZ29sZFwiOiB7IGhlaWdodDogMjA0OCwgd2lkdGg6IDE1MzYsXHRzY2FsZTogMSwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cImFwcGxlLWlwYWQtbWluaS00LXNwYWNlLWdyYXlcIjogeyBoZWlnaHQ6IDIwNDgsIHdpZHRoOiAxNTM2LFx0c2NhbGU6IDEsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXCJhcHBsZS1pcGFkLW1pbmktNC1zaWx2ZXJcIjp7IGhlaWdodDogMjA0OCwgd2lkdGg6IDE1MzYsIHNjYWxlOiAxLCBtb2JpbGU6dHJ1ZSwgcGxhdGZvcm06XCJpT1NcIn1cblxuI1Byb1xuXCJhcHBsZS1pcGFkLXByby1nb2xkXCI6IHsgaGVpZ2h0OiAyNzMyLCB3aWR0aDogMjA0OCwgc2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxuXCJhcHBsZS1pcGFkLXByby1zaWx2ZXJcIjogeyBoZWlnaHQ6IDI3MzIsIHdpZHRoOiAyMDQ4LCBzY2FsZTogMiwgbW9iaWxlOnRydWUsIHBsYXRmb3JtOlwiaU9TXCJ9XG5cImFwcGxlLWlwYWQtcHJvLXNwYWNlLWdyYXlcIiA6IHsgaGVpZ2h0OiAyNzMyLCB3aWR0aDogMjA0OCwgc2NhbGU6IDIsIG1vYmlsZTp0cnVlLCBwbGF0Zm9ybTpcImlPU1wifVxufVxuZXhwb3J0cy5kZXZpY2UgPSAwXG5leHBvcnRzLm5hbWUgPSAwXG5leHBvcnRzLnNjYWxlID0gMFxuZXhwb3J0cy5oZWlnaHQgPSAwXG5leHBvcnRzLndpZHRoID0gMFxuZXhwb3J0cy5tb2JpbGUgPSAwXG5leHBvcnRzLnBsYXRmb3JtID0gMFxuZXhwb3J0cy5vcmllbnRhdGlvbiA9IDBcbnNjcmVlbiA9IHt9XG5cbmV4cG9ydHMuZ2V0RGV2aWNlID0gLT5cblx0ZGV2aWNlID0gRnJhbWVyLkRldmljZS5kZXZpY2VUeXBlXG5cdGlmIGlubmVyV2lkdGggPT0gMTI0MlxuXHRcdGRldmljZSA9IFwiYXBwbGUtaXBob25lLTZzLXBsdXMtc2lsdmVyXCJcblx0ZXhwb3J0cy5zY2FsZSA9IGZyYW1lckRldmljZXNbZGV2aWNlXS5zY2FsZVxuXHRpZiBkZXZpY2UgPT0gXCJmdWxsc2NyZWVuXCJcblx0XHRleHBvcnRzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGhcblx0XHRleHBvcnRzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodFxuXHRlbHNlXG5cdFx0ZXhwb3J0cy53aWR0aCA9IGZyYW1lckRldmljZXNbZGV2aWNlXS53aWR0aFxuXHRcdGV4cG9ydHMuaGVpZ2h0ID0gZnJhbWVyRGV2aWNlc1tkZXZpY2VdLmhlaWdodFxuXHRcdGlmIHdpbmRvdy5pbm5lcldpZHRoID09IDEyNDIgfHwgd2luZG93LmlubmVyV2lkdGggPT0gMjIwOFxuXHRcdFx0ZXhwb3J0cy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoXG5cdFx0XHRleHBvcnRzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodFxuXHRcdFx0ZXhwb3J0cy5zY2FsZSA9IDNcblx0ZXhwb3J0cy5tb2JpbGUgPSBmcmFtZXJEZXZpY2VzW2RldmljZV0ubW9iaWxlXG5cdGV4cG9ydHMucGxhdGZvcm0gPSBmcmFtZXJEZXZpY2VzW2RldmljZV0ucGxhdGZvcm1cblx0ZXhwb3J0cy5vcmllbnRhdGlvbiA9ICBGcmFtZXIuRGV2aWNlLm9yaWVudGF0aW9uXG5cdGRldmljZSA9IGRldmljZS5yZXBsYWNlKFwiYXBwbGUtXCIsIFwiXCIpXG5cdGRldmljZSA9IGRldmljZS5yZXBsYWNlKFwiLWdvbGRcIiwgXCJcIilcblx0ZGV2aWNlID0gZGV2aWNlLnJlcGxhY2UoXCItZ3JlZW5cIiwgXCJcIilcblx0ZGV2aWNlID0gZGV2aWNlLnJlcGxhY2UoXCItYmx1ZVwiLCBcIlwiKVxuXHRkZXZpY2UgPSBkZXZpY2UucmVwbGFjZShcIi1yZWRcIiwgXCJcIilcblx0ZGV2aWNlID0gZGV2aWNlLnJlcGxhY2UoXCItd2hpdGVcIiwgXCJcIilcblx0ZGV2aWNlID0gZGV2aWNlLnJlcGxhY2UoXCIteWVsbG93XCIsIFwiXCIpXG5cdGRldmljZSA9IGRldmljZS5yZXBsYWNlKFwiLXBpbmtcIiwgXCJcIilcblx0ZGV2aWNlID0gZGV2aWNlLnJlcGxhY2UoXCItc3BhY2UtZ3JleVwiLCBcIlwiKVxuXHRkZXZpY2UgPSBkZXZpY2UucmVwbGFjZShcIi1yb3NlXCIsIFwiXCIpXG5cdGV4cG9ydHMuZGV2aWNlID0gZGV2aWNlLnJlcGxhY2UoXCItc2lsdmVyXCIsIFwiXCIpXG5cdHNjcmVlbiA9IHtcblx0XHR3aWR0aDpleHBvcnRzLndpZHRoXG5cdFx0aGVpZ2h0OmV4cG9ydHMuaGVpZ2h0XG5cdH1cblxuXG5leHBvcnRzLm9yaWVudCA9ICgpIC0+XG5cdGlmIGV4cG9ydHMub3JpZW50YXRpb24gPT0gLTkwXG5cdFx0dGVtcEhlaWdodCA9IGV4cG9ydHMuaGVpZ2h0XG5cdFx0dGVtcFdpZHRoID0gZXhwb3J0cy53aWR0aFxuXHRcdGV4cG9ydHMuaGVpZ2h0ID0gdGVtcFdpZHRoXG5cdFx0ZXhwb3J0cy53aWR0aCA9IHRlbXBIZWlnaHRcblxuZXhwb3J0cy5nZXREZXZpY2UoKVxuZXhwb3J0cy5vcmllbnQoKVxuXG5cbiNMaXN0ZW4gdG8gd2luZG93IHJlaXplXG5vblJlc2l6ZSA9ICgpIC0+XG5cdGV4cG9ydHMuZ2V0RGV2aWNlKClcblx0ZXhwb3J0cy5sYXlvdXQoKVxuXG5cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgb25SZXNpemUpXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm9yaWVudGF0aW9uY2hhbmdlXCIgLCBvblJlc2l6ZSlcblxuXG5cbmRlZmF1bHRzID0ge1xuXHRhbGVydDoge1xuXHRcdHRleHQ6e1xuXHRcdFx0dGl0bGU6IFwiVGl0bGVcIlxuXHRcdFx0bWVzc2FnZTpcIk1lc3NhZ2VcIlxuXHRcdFx0YWN0aW9uOlwiQWN0aW9uXCJcblx0XHRcdHNlY29uZGFyeUFjdGlvbjogXCJzZWNvbmRhcnlBY3Rpb25cIlxuXHRcdH1cblx0fVxuXHRhbGVydEJhbm5lcjoge1xuXHRcdHRleHQ6e1xuXHRcdFx0dGl0bGU6IFwiVGl0bGVcIlxuXHRcdFx0bWVzc2FnZTpcIk1lc3NhZ2VcIlxuXHRcdFx0YWN0aW9uOlwiQWN0aW9uXCJcblx0XHRcdHRpbWU6XCJub3dcIlxuXHRcdFx0aWNvbjp1bmRlZmluZWRcblx0XHR9XG5cdH1cblx0ZnJhbWVyUHJvcHMgOltcIm5hbWVcIiwgXCJ3aWR0aFwiLCBcImhlaWdodFwiLCBcInN1cGVyTGF5ZXJcIiwgXCJvcGFjaXR5XCIsIFwiY29sb3JcIiwgXCJiYWNrZ3JvdW5kQ29sb3JcIiwgXCJ4XCIsIFwieVwiLCBcIm1pZFhcIiwgXCJtaWRZXCIsIFwibWF4WFwiLCBcIm1pblhcIiwgXCJ2aXNpYmxlXCIsIFwiY2xpcFwiLCBcInNjcm9sbEhvcml6b250YWxcIiwgXCJzY3JvbGxWZXJ0aWNhbFwiLCBcImlnbm9yZUV2ZW50c1wiLCBcInpcIiwgXCJzY2FsZVhcIiwgXCJzY2FsZVlcIiwgXCJzY2FsZVpcIiwgXCJzY2FsZVwiLCBcInNrZXdYXCIsIFwic2tld1lcIiwgXCJza2V3XCIsIFwib3JpZ2luWFwiLCBcIm9yaWdpbllcIiwgXCJvcmlnaW5aXCIsIFwicGVyc3BlY3RpdmVcIiwgXCJwZXJzcGVjdGl2ZU9yaWdpblhcIiwgXCJwZXJzcGVjdGl2ZU9yaWdpbllcIiwgXCJyb3RhdGlvblhcIiwgXCJyb3RhdGlvbllcIiwgXCJyb3RhdGlvblpcIiwgXCJyb3RhdGlvblwiLCBcImJsdXJcIiwgXCJicmlnaHRuZXNzXCIsIFwic2F0dXJhdGVcIiwgXCJodWVSb3RhdGVcIiwgXCJjb250cmFzdFwiLCBcImludmVydFwiLCBcImdyYXlzY2FsZVwiLCBcInNlcGlhXCIsIFwic2hhZG93WFwiLCBcInNoYWRvd1lcIiwgXCJzaGFkb3dCbHVyXCIsIFwic2hhZG93U3ByZWFkXCIsIFwic2hhZG93Q29sb3JcIiwgXCJib3JkZXJDb2xvclwiLCBcImJvcmRlcldpZHRoXCIsIFwiZm9yY2UyZFwiLCBcImZsYXRcIiwgXCJiYWNrZmFjZVZpc2libGVcIiwgXCJuYW1lXCIsIFwibWF0cml4XCIsIFwiX21hdHJpeDJkXCIsIFwidHJhbnNmb3JtTWF0cml4XCIsIFwibWF0cml4M2RcIiwgXCJib3JkZXJSYWRpdXNcIiwgXCJwb2ludFwiLCBcInNpemVcIiwgXCJmcmFtZVwiLCBcImh0bWxcIiwgXCJpbWFnZVwiLCBcInNjcm9sbFhcIiwgXCJzY3JvbGxZXCIsIFwiX2RvbUV2ZW50TWFuYWdlclwiLCBcIm1vdXNlV2hlZWxTcGVlZE11bHRpcGxpZXJcIiwgXCJ2ZWxvY2l0eVRocmVzaG9sZFwiLCBcImFuaW1hdGlvbk9wdGlvbnNcIiwgXCJjb25zdHJhaW5lZFwiXVxuXHRjc3NQcm9wcyA6IFtcImZvbnRGYW1pbHlcIiwgXCJmb250U2l6ZVwiLCBcInRleHRBbGlnblwiLCBcImZvbnRXZWlnaHRcIiwgXCJsaW5lSGVpZ2h0XCJdXG5cdGNvbnN0cmFpbnRQcm9wcyA6IFtcImhlaWdodFwiLCBcIndpZHRoXCJdXG5cdGNvbnN0cmFpbnRUeXBlczogW1widG9wXCIsIFwibGVhZGluZ1wiLCBcInRyYWlsaW5nXCIsIFwiYm90dG9tXCJdXG5cdGNvbnN0cmFpbnRBbGlnbnMgOiBbXCJob3Jpem9udGFsQ2VudGVyXCIsIFwidmVydGljYWxDZW50ZXJcIiwgXCJsZWFkaW5nRWRnZXNcIiwgXCJ0cmFpbGluZ0VkZ2VzXCIsIFwidG9wRWRnZXNcIiwgXCJib3R0b21FZGdlc1wiLCBcImFsaWduXCIsIFwidmVydGljYWxcIiwgXCJob3Jpem9udGFsXCJdXG5cdGNvbnN0cmFpbnRzOiB7XG5cdFx0dG9wOiB7XG5cdFx0XHRcInByb3BcIiA6IFwieVwiXG5cdFx0XHRcIm9ialByb3BcIiA6IFwibWF4WVwiXG5cdFx0XHRcIm9ialByb3AyXCIgOiBcImhlaWdodFwiXG5cdFx0XHRcIm9wcFwiIDogXCJib3R0b21cIlxuXHRcdH1cblx0XHRsZWFkaW5nOiB7XG5cdFx0XHRcInByb3BcIiA6IFwieFwiXG5cdFx0XHRcIm9ialByb3BcIiA6IFwibWF4WFwiXG5cdFx0XHRcIm9ialByb3AyXCIgOiBcIndpZHRoXCJcblx0XHRcdFwib3BwXCIgOiBcInRyYWlsaW5nXCJcblx0XHR9XG5cdFx0Ym90dG9tOiB7XG5cdFx0XHRcInByb3BcIiA6IFwibWF4WVwiXG5cdFx0XHRcIm9ialByb3BcIiA6IFwiaGVpZ2h0XCJcblx0XHRcdFwib2JqUHJvcDJcIiA6IFwieVwiXG5cdFx0XHRcIm9wcFwiIDogXCJ0b3BcIlxuXHRcdH1cblx0XHR0cmFpbGluZzoge1xuXHRcdFx0XCJwcm9wXCIgOiBcIm1heFhcIlxuXHRcdFx0XCJvYmpQcm9wXCIgOiBcIndpZHRoXCJcblx0XHRcdFwib2JqUHJvcDJcIiA6IFwieFwiXG5cdFx0XHRcIm9wcFwiIDogXCJsZWFkaW5nXCJcblx0XHR9XG5cdH1cblx0a2V5Ym9hcmRQcm9wczogW1wicmV0dXJuS2V5XCJdXG5cdGtleWJvYXJkOiB7XG5cdFx0cmV0dXJuS2V5OlwiZGVmYXVsdFwiXG5cdH1cblx0dGV4dDoge1xuXHRcdGRlZmF1bHRzOiB7XG5cdFx0XHR0ZXh0OiBcImlPUyBUZXh0IExheWVyXCJcblx0XHRcdHg6MFxuXHRcdFx0eTowXG5cdFx0XHR3aWR0aDotMVxuXHRcdFx0aGVpZ2h0Oi0xXG5cdFx0XHRzdXBlckxheWVyOnVuZGVmaW5lZFxuXHRcdFx0c3R5bGU6XCJkZWZhdWx0XCJcblx0XHRcdGxpbmVzOjFcblx0XHRcdHRleHRBbGlnbjpcImxlZnRcIlxuXHRcdFx0YmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIlxuXHRcdFx0Y29sb3I6XCJibGFja1wiXG5cdFx0XHRmb250U2l6ZTogMTdcblx0XHRcdGZvbnRGYW1pbHk6XCItYXBwbGUtc3lzdGVtLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmXCJcblx0XHRcdGZvbnRXZWlnaHQ6XCJyZWd1bGFyXCJcblx0XHRcdGxpbmVIZWlnaHQ6XCJhdXRvXCJcblx0XHRcdG5hbWU6XCJ0ZXh0IGxheWVyXCJcblx0XHRcdH0gXG5cdH1cbn1cblxuc2V0UHJvcHMgPSAob2JqZWN0LCBkZXN0KSAtPlxuXHRrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KVxuXHRkZXN0W1wicHJvcHNcIl0gPSBrZXlzXG5cbnNldFByb3BzKGRlZmF1bHRzLnRleHQuZGVmYXVsdHMsIGRlZmF1bHRzLnRleHQpXG5zZXRQcm9wcyhkZWZhdWx0cy5hbGVydC50ZXh0LCBkZWZhdWx0cy5hbGVydClcbnNldFByb3BzKGRlZmF1bHRzLmFsZXJ0QmFubmVyLnRleHQsIGRlZmF1bHRzLmFsZXJ0QmFubmVyKVxuXG5cbiMjIENvbnZlcnNpb25zXG5cbiNQaXhlbHMgdG8gUG9pbnRzXG5leHBvcnRzLnB0ID0gKHB4KSAtPlxuXHRwdCA9IHB4L2V4cG9ydHMuc2NhbGVcblx0cHQgPSBNYXRoLnJvdW5kKHB0KVxuXHRyZXR1cm4gcHRcblxuI1BvaW50cyB0byBQaXhlbHNcbmV4cG9ydHMucHggPSAocHQpIC0+XG5cdHB4ID0gcHQgKiBleHBvcnRzLnNjYWxlXG5cdHB4ID0gTWF0aC5yb3VuZChweClcblx0cmV0dXJuIHB4XG5cbiMjIEVycm9yc1xuXG5lcnJvciA9IChjb250ZXh0LCBjb2RlKSAtPlxuXHRpZiBjb2RlID09IDEgXG5cdFx0cHJpbnQgXCJFcnJvciBJbnZhbGlkIFJlbGF0aW9uc2hpcCDigJMgTGF5ZXIgaWQ6I3tjb250ZXh0LmlkfSBoYXMgYSByZWxhdGlvbnNoaXAgd2l0aCBhbm90aGVyIGxheWVyIG5vdCBpbiB0aGUgc2FtZSBzdXBlckxheWVyLlwiXG5cdGlmIGNvZGUgPT0gMlxuXHRcdHByaW50IFwiRXJyb3IgI3tjb250ZXh0fSByZXF1aXJlcyBhIGxheWVyXCJcblx0aWYgY29kZSA9PSAzXG5cdFx0cHJpbnQgXCJFcnJvciAje2NvbnRleHR9IGNhbm5vdCByZWZlciB0byBpdHNlbGZcIlxuXHRpZiBjb2RlID09IDRcblx0XHRwcmludCBcIkVycm9yICN7Y29udGV4dH0gaXMgbm90IGEgdmFsaWQgd2VpZ2h0LiBQbGVhc2UgdXNlIDEwMCwgMjAwLCAzMDAuLi4gb3IgVGhpbiwgTGlnaHQsIFJlZ3VsYXIuLi5cIlxuXG4jIyBBdXRvTGF5b3V0XG5cbiNjaGVja3MgaWYgdHdvIGxheWVycyBoYXZlIHRoZSBzYW1lIHBhcmVudFxuZXhwb3J0cy5zYW1lUGFyZW50ID0gKGxheWVyMSwgbGF5ZXIyKSAtPlxuXHRwYXJlbnRPbmUgPSBsYXllcjEuc3VwZXJMYXllclxuXHRwYXJlbnRUd28gPSBsYXllcjIuc3VwZXJMYXllclxuXHRpZiBwYXJlbnRPbmUgPT0gcGFyZW50VHdvXG5cdFx0cmV0dXJuIHRydWVcblx0ZWxzZSBcblx0XHRyZXR1cm4gZmFsc2VcblxuI1JlZnJlc2hlcyBMYXllciBvciBBbGwgTGF5ZXJzXG5leHBvcnRzLmxheW91dCA9IChsYXllcikgLT5cblx0aWYgbGF5ZXIgPT0gdW5kZWZpbmVkXG5cdFx0QC5hcnJheSA9IEZyYW1lci5DdXJyZW50Q29udGV4dC5sYXllcnNcblx0ZWxzZSBcblx0XHRALmFycmF5ID0gW2xheWVyXVxuXHRmb3IgbGF5ZXIgaW4gQC5hcnJheVxuXHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzICE9IHVuZGVmaW5lZFxuXHRcdFx0Zm9yIHAgaW4gZGVmYXVsdHMuY29uc3RyYWludFByb3BzXG5cdFx0XHRcdGxheW91dFNpemUobGF5ZXIsIHApXG5cdFx0XHRmb3IgYyBpbiBkZWZhdWx0cy5jb25zdHJhaW50VHlwZXNcblx0XHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHNbY10gIT0gdW5kZWZpbmVkXG5cdFx0XHRcdFx0bGF5b3V0Q2hhbmdlKGxheWVyLCBjKVxuXHRcdFx0Zm9yIGEgaW4gZGVmYXVsdHMuY29uc3RyYWludEFsaWduc1xuXHRcdFx0XHRpZiBsYXllci5jb25zdHJhaW50c1thXVxuXHRcdFx0XHRcdGxheW91dEFsaWduKGxheWVyLCBhKVxuXG4jQWxpZ24gY29uc3RyYWludHNcbmxheW91dEFsaWduID0gKGxheWVyLCB0eXBlKSAtPlxuXHQjIHByaW50IGxheWVyLm5hbWUgKyBcIjogY29uc3RyYWludHMgd2lkdGggXCIgKyBsYXllci5jb25zdHJhaW50cy53aWR0aFxuXHRkZWNsYXJlZENvbnN0cmFpbnQgPSBsYXllci5jb25zdHJhaW50c1t0eXBlXVxuXHRpZiBsYXllci5zdXBlckxheWVyXG5cdFx0QHN1cGVyTGF5ZXIgPSBsYXllci5zdXBlckxheWVyXG5cdGVsc2Vcblx0XHRAc3VwZXJMYXllciA9IHNjcmVlblxuXHRpZiBkZWNsYXJlZENvbnN0cmFpbnQgPT0gcGFyc2VJbnQoZGVjbGFyZWRDb25zdHJhaW50LCAxMClcblx0XHRlcnJvcih0eXBlLCAyKVxuXHRpZiBkZWNsYXJlZENvbnN0cmFpbnQgPT0gbGF5ZXJcblx0XHRlcnJvcih0eXBlLCAzKVxuXHRpZiB0eXBlb2YgZGVjbGFyZWRDb25zdHJhaW50ID09IFwib2JqZWN0XCJcblx0XHRmb3IgaSBpbiBkZWNsYXJlZENvbnN0cmFpbnRcblx0XHRcdGlmIHR5cGVvZiBpID09IFwic3RyaW5nXCJcblx0XHRcdFx0QHR5cGUgPSBpXG5cdFx0XHRpZiB0eXBlb2YgaSA9PSBcIm9iamVjdFwiXG5cdFx0XHRcdEBsYXllciA9IGkgXG5cdFx0aWYgQHR5cGUgPT0gXCJob3Jpem9udGFsQ2VudGVyXCIgfHwgQHR5cGUgPT0gXCJob3Jpem9udGFsXCJcblx0XHRcdGRlbHRhTW92ZSA9IChAbGF5ZXIud2lkdGggLSBsYXllci53aWR0aCkgLyAyXG5cdFx0XHRsYXllci54ID0gQGxheWVyLnggKyBkZWx0YU1vdmVcblx0XHRcdGxheWVyLmNvbnN0cmFpbnRzW1wibGVhZGluZ1wiXSA9IGV4cG9ydHMucHQobGF5ZXIueClcblx0XHRpZiBAdHlwZSA9PSBcInZlcnRpY2FsQ2VudGVyXCIgfHwgQHR5cGUgPT0gXCJ2ZXJ0aWNhbFwiICBcblx0XHRcdGRlbHRhTW92ZSA9IChAbGF5ZXIuaGVpZ2h0IC0gbGF5ZXIuaGVpZ2h0KSAvIDJcblx0XHRcdGxheWVyLnkgPSBAbGF5ZXIueSArIGRlbHRhTW92ZVxuXHRcdFx0bGF5ZXIuY29uc3RyYWludHNbXCJ0b3BcIl0gPSBleHBvcnRzLnB0KGxheWVyLnkpXG5cdFx0aWYgQHR5cGUgPT0gXCJsZWFkaW5nRWRnZXNcIiB8fCBAdHlwZSA9PSBcImxlYWRpbmdcIlxuXHRcdFx0bGF5ZXIueCA9IEBsYXllci54XG5cdFx0XHRsYXllci5jb25zdHJhaW50c1tcImxlYWRpbmdcIl0gPSBleHBvcnRzLnB0KGxheWVyLngpXG5cdFx0aWYgQHR5cGUgPT0gXCJ0cmFpbGluZ0VkZ2VzXCIgfHwgQHR5cGUgPT0gXCJ0cmFpbGluZ1wiXG5cdFx0XHRsYXllci5tYXhYID0gQGxheWVyLm1heFhcblx0XHRcdGxheWVyLmNvbnN0cmFpbnRzW1widHJhaWxpbmdcIl0gPSBleHBvcnRzLnB0KEBzdXBlckxheWVyLndpZHRoIC0gbGF5ZXIubWF4WClcblx0XHRpZiBAdHlwZSA9PSBcInRvcEVkZ2VzXCIgfHwgQHR5cGUgPT0gXCJ0b3BcIlxuXHRcdFx0bGF5ZXIueSA9IEBsYXllci55XG5cdFx0XHRsYXllci5jb25zdHJhaW50c1tcInRvcFwiXSA9IGV4cG9ydHMucHQobGF5ZXIueSlcblx0XHRpZiBAdHlwZSA9PSBcImJvdHRvbUVkZ2VzXCIgfHwgQHR5cGUgPT0gXCJib3R0b21cIlxuXHRcdFx0bGF5ZXIubWF4WSA9IEBsYXllci5tYXhZXG5cdFx0XHRsYXllci5jb25zdHJhaW50c1tcImJvdHRvbVwiXSA9IGV4cG9ydHMucHQoQHN1cGVyTGF5ZXIuaGVpZ2h0IC0gbGF5ZXIubWF4WSlcblx0aWYgdHlwZSA9PSBcImhvcml6b250YWxDZW50ZXJcIiB8fCB0eXBlID09IFwiaG9yaXpvbnRhbFwiXG5cdFx0ZGVsdGFNb3ZlID0gKGRlY2xhcmVkQ29uc3RyYWludC53aWR0aCAtIGxheWVyLndpZHRoKSAvIDJcblx0XHRsYXllci54ID0gZGVjbGFyZWRDb25zdHJhaW50LnggKyBkZWx0YU1vdmVcblx0aWYgdHlwZSA9PSBcInZlcnRpY2FsQ2VudGVyXCIgfHwgdHlwZSA9PSBcInZlcnRpY2FsXCIgIFxuXHRcdGRlbHRhTW92ZSA9IChkZWNsYXJlZENvbnN0cmFpbnQuaGVpZ2h0IC0gbGF5ZXIuaGVpZ2h0KSAvIDJcblx0XHRsYXllci55ID0gZGVjbGFyZWRDb25zdHJhaW50LnkgKyBkZWx0YU1vdmVcblx0aWYgdHlwZSA9PSBcImxlYWRpbmdFZGdlc1wiIFxuXHRcdGxheWVyLnggPSBkZWNsYXJlZENvbnN0cmFpbnQueFxuXHRcdGxheWVyLmNvbnN0cmFpbnRzW1wibGVhZGluZ1wiXSA9IGV4cG9ydHMucHQoZGVjbGFyZWRDb25zdHJhaW50LngpXG5cdGlmIHR5cGUgPT0gXCJ0cmFpbGluZ0VkZ2VzXCJcblx0XHRsYXllci5tYXhYID0gZGVjbGFyZWRDb25zdHJhaW50Lm1heFhcblx0XHRsYXllci5jb25zdHJhaW50c1tcInRyYWlsaW5nXCJdID0gZXhwb3J0cy5wdChAc3VwZXJMYXllci5oZWlnaHQgLSBsYXllci5tYXhYKVxuXHRpZiB0eXBlID09IFwidG9wRWRnZXNcIlxuXHRcdGxheWVyLnkgPSBkZWNsYXJlZENvbnN0cmFpbnQueVxuXHRcdGxheWVyLmNvbnN0cmFpbnRzW1widG9wXCJdID0gZXhwb3J0cy5wdChsYXllci55KVxuXHRpZiB0eXBlID09IFwiYm90dG9tRWRnZXNcIlxuXHRcdGxheWVyLm1heFkgPSBkZWNsYXJlZENvbnN0cmFpbnQubWF4WVxuXHRcdGxheWVyLmNvbnN0cmFpbnRzW1wiYm90dG9tXCJdID0gZXhwb3J0cy5wdChAc3VwZXJMYXllci5oZWlnaHQgLSBsYXllci5tYXhZKVxuXHRpZiB0eXBlID09IFwiYWxpZ25cIlxuXHRcdGlmIGRlY2xhcmVkQ29uc3RyYWludCA9PSBcImhvcml6b250YWxcIlxuXHRcdFx0bGF5ZXIuY2VudGVyWCgpXG5cdFx0aWYgZGVjbGFyZWRDb25zdHJhaW50ID09IFwidmVydGljYWxcIlxuXHRcdFx0bGF5ZXIuY2VudGVyWSgpXG5cdFx0aWYgZGVjbGFyZWRDb25zdHJhaW50ID09IFwiY2VudGVyXCJcblx0XHRcdGxheWVyLmNlbnRlcigpXG5cdFx0aWYgZGVjbGFyZWRDb25zdHJhaW50ID09IFwidmVydGljYWxcIlxuXHRcdFx0bGF5ZXIuY2VudGVyWSgpXG5cblxuI1NpemUgQ29uc3RyYWludHNcbmxheW91dFNpemUgPSAobGF5ZXIsIHR5cGUpIC0+XG5cdGlmIGxheWVyLmNvbnN0cmFpbnRzW3R5cGVdXG5cdFx0bGF5ZXJbdHlwZV0gPSBleHBvcnRzLnB4KGxheWVyLmNvbnN0cmFpbnRzW3R5cGVdKVxuXHRcdGlmIGxheWVyLnR5cGUgPT0gXCJ0ZXh0XCJcblx0XHRcdHRleHRGcmFtZSA9IHRleHRBdXRvU2l6ZShsYXllcilcblx0XHRcdGxheWVyLndpZHRoID0gdGV4dEZyYW1lLndpZHRoXG5cdFx0XHRsYXllci5oZWlnaHQgPSB0ZXh0RnJhbWUuaGVpZ2h0XG5cblxuI01vdmUgJiBSZXNpemVzIExheWVyc1xubGF5b3V0Q2hhbmdlID0gKGxheWVyLCB0eXBlKSAtPlxuXHRpZiBsYXllci5jb25zdHJhaW50c1t0eXBlXSAhPSB1bmRlZmluZWQgXG5cdFx0cHJvcCA9IGRlZmF1bHRzLmNvbnN0cmFpbnRzW3R5cGVdLnByb3Bcblx0XHRvYmpQcm9wID0gZGVmYXVsdHMuY29uc3RyYWludHNbdHlwZV0ub2JqUHJvcFxuXHRcdG9wcCA9IGRlZmF1bHRzLmNvbnN0cmFpbnRzW3R5cGVdLm9wcFxuXHRcdHN1cGVyVHJhaXQgPSBkZWZhdWx0cy5jb25zdHJhaW50c1t0eXBlXS5vYmpQcm9wXG5cblx0XHRpZiBvYmpQcm9wICE9IFwid2lkdGhcIiAmJiBvYmpQcm9wICE9IFwiaGVpZ2h0XCJcblx0XHRcdHN1cGVyVHJhaXQgPSBkZWZhdWx0cy5jb25zdHJhaW50c1t0eXBlXS5vYmpQcm9wMlxuXG5cdFx0aWYgbGF5ZXIuc3VwZXJMYXllciAhPSBudWxsXG5cdFx0XHQjSGFzIGEgc3VwZXJMYXllclxuXHRcdFx0QFtzdXBlclRyYWl0XSA9IGxheWVyLnN1cGVyTGF5ZXJbc3VwZXJUcmFpdF1cblx0XHRlbHNlXG5cdFx0XHQjRG9lcyBub3QgaGF2ZSBhIHN1cGVyTGF5ZXJcblx0XHRcdEBbc3VwZXJUcmFpdF0gPSBleHBvcnRzW3N1cGVyVHJhaXRdXG5cdFx0aWYgdHlwZSA9PSBcInRvcFwiIHx8IHR5cGUgPT0gXCJsZWFkaW5nXCJcblx0XHRcdCMgSGFuZGxlIFRvcCAmIExlYWRpbmdcblx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzW3R5cGVdID09IHBhcnNlSW50KGxheWVyLmNvbnN0cmFpbnRzW3R5cGVdLCAxMClcblx0XHRcdFx0bGF5ZXJbcHJvcF0gPSBsYXllci5jb25zdHJhaW50c1t0eXBlXSAqIGV4cG9ydHMuc2NhbGVcblx0XHRcdGVsc2UgXG5cdFx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzW3R5cGVdLmxlbmd0aCA9PSB1bmRlZmluZWRcblx0XHRcdFx0XHRsYXllcltwcm9wXSA9IGxheWVyLmNvbnN0cmFpbnRzW3R5cGVdW29ialByb3BdXG5cdFx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzW3R5cGVdLmxlbmd0aCA9PSAxXG5cdFx0XHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHNbdHlwZV1bMF0gPT0gcGFyc2VJbnQobGF5ZXIuY29uc3RyYWludHNbdHlwZV1bMF0sIDEwKVxuXHRcdFx0XHRcdFx0bGF5ZXJbcHJvcF0gPSBsYXllci5jb25zdHJhaW50c1t0eXBlXVswXSAqIGV4cG9ydHMuc2NhbGVcblx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHRsYXllcltwcm9wXSA9IGxheWVyLmNvbnN0cmFpbnRzW3R5cGVdWzBdW29ialByb3BdXG5cdFx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzW3R5cGVdLmxlbmd0aCA+IDEgXG5cdFx0XHRcdFx0Zm9yIG9iamVjdCBpbiBsYXllci5jb25zdHJhaW50c1t0eXBlXVxuXHRcdFx0XHRcdFx0aWYgb2JqZWN0ID09IHBhcnNlSW50KG9iamVjdCwgMTApXG5cdFx0XHRcdFx0XHRcdEAub2JqSW50ID0gb2JqZWN0XG5cdFx0XHRcdFx0XHRlbHNlIFxuXHRcdFx0XHRcdFx0XHRALm9iakxheWVyID0gb2JqZWN0XG5cdFx0XHRcdFx0bGF5ZXJbcHJvcF0gPSAoQC5vYmpJbnQgKiBleHBvcnRzLnNjYWxlKSArIEAub2JqTGF5ZXJbb2JqUHJvcF1cblx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzW29wcF0gIT0gdW5kZWZpbmVkXG5cdFx0XHRcdHRyYWl0ID0gZGVmYXVsdHMuY29uc3RyYWludHNbb3BwXVtcIm9ialByb3BcIl1cblx0XHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHNbb3BwXSA9PSBwYXJzZUludChsYXllci5jb25zdHJhaW50c1tvcHBdLCAxMClcblx0XHRcdFx0XHRsYXllclt0cmFpdF0gPSBAW3N1cGVyVHJhaXRdIC0gKGxheWVyW3Byb3BdICsgKGV4cG9ydHMuc2NhbGUgKiBsYXllci5jb25zdHJhaW50c1tvcHBdKSlcblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzW29wcF0ubGVuZ3RoID09IHVuZGVmaW5lZFxuXHRcdFx0XHRcdFx0bGF5ZXJbdHJhaXRdID0gbGF5ZXJbcHJvcF0gLSBsYXllci5jb25zdHJhaW50c1tvcHBdW3Byb3BdXG5cdFx0XHRcdFx0XHRpZiBsYXllclt0cmFpdF0gPCAwXG5cdFx0XHRcdFx0XHRcdGxheWVyW3RyYWl0XSA9IGxheWVyW3RyYWl0XSAqIC0xXG5cdFx0ZWxzZVxuXHRcdFx0IyMgSGFuZGxlIEJvdHRvbSAmIFRyYWlsaW5nXG5cdFx0XHRvYmpQcm9wMiA9IGRlZmF1bHRzLmNvbnN0cmFpbnRzW3R5cGVdLm9ialByb3AyXG5cdFx0XHRpZiBsYXllci5jb25zdHJhaW50c1tvcHBdID09IHVuZGVmaW5lZFxuXHRcdFx0XHQjIyBObyBvcHBvc2l0ZVxuXHRcdFx0XHRpZiBsYXllci5jb25zdHJhaW50c1t0eXBlXSA9PSBwYXJzZUludChsYXllci5jb25zdHJhaW50c1t0eXBlXSwgMTApXG5cdFx0XHRcdFx0IyMgT25seSBJbnRlZ2VyXG5cdFx0XHRcdFx0bGF5ZXJbcHJvcF0gPSBAW3N1cGVyVHJhaXRdIC0gKGxheWVyLmNvbnN0cmFpbnRzW3R5cGVdICogZXhwb3J0cy5zY2FsZSlcblx0XHRcdFx0ZWxzZSBcblx0XHRcdFx0XHRpZiBsYXllci5jb25zdHJhaW50c1t0eXBlXS5sZW5ndGggPT0gdW5kZWZpbmVkXG5cdFx0XHRcdFx0XHQjRW50ZXJlZCBMYXllclxuXHRcdFx0XHRcdFx0aWYgZXhwb3J0cy5zYW1lUGFyZW50KGxheWVyLCBsYXllci5jb25zdHJhaW50c1t0eXBlXSlcblx0XHRcdFx0XHRcdFx0bGF5ZXJbcHJvcF0gPSBsYXllci5jb25zdHJhaW50c1t0eXBlXVtvYmpQcm9wMl1cblx0XHRcdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRcdFx0ZXJyb3IobGF5ZXIsIDEpXG5cdFx0XHRcdFx0aWYgbGF5ZXIuY29uc3RyYWludHNbdHlwZV0ubGVuZ3RoID09IDFcblx0XHRcdFx0XHRcdCNBcnJheSBvZiBPbmVcblx0XHRcdFx0XHRcdGlmIGxheWVyLmNvbnN0cmFpbnRzW3R5cGVdWzBdID09IHBhcnNlSW50KGxheWVyLmNvbnN0cmFpbnRzW3R5cGVdWzBdLCAxMClcblx0XHRcdFx0XHRcdFx0I0ludFxuXHRcdFx0XHRcdFx0XHRsYXllcltwcm9wXSA9IEBbb2JqUHJvcF0gLSAobGF5ZXIuY29uc3RyYWludHNbdHlwZV1bMF0gKiBleHBvcnRzLnNjYWxlKVxuXHRcdFx0XHRcdFx0ZWxzZSBcblx0XHRcdFx0XHRcdFx0I09iamVjdFxuXHRcdFx0XHRcdFx0XHRpZiBleHBvcnRzLnNhbWVQYXJlbnQobGF5ZXIsIGxheWVyLmNvbnN0cmFpbnRzW3R5cGVdWzBdKVxuXHRcdFx0XHRcdFx0XHRcdGxheWVyW3Byb3BdID0gbGF5ZXIuY29uc3RyYWludHNbdHlwZV1bMF1bb2JqUHJvcDJdXG5cdFx0XHRcdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRcdFx0XHRlcnJvcihsYXllciwgMSlcblx0XHRcdFx0XHRpZiBsYXllci5jb25zdHJhaW50c1t0eXBlXS5sZW5ndGggPiAxXHRcblx0XHRcdFx0XHRcdCNSZWxhdGlvbnNoaXAgQXJyYXlcblx0XHRcdFx0XHRcdGZvciBvYmplY3QgaW4gbGF5ZXIuY29uc3RyYWludHNbdHlwZV1cblx0XHRcdFx0XHRcdFx0aWYgb2JqZWN0ID09IHBhcnNlSW50KG9iamVjdCwgMTApXG5cdFx0XHRcdFx0XHRcdFx0QC5vYmpJbnQgPSBvYmplY3Rcblx0XHRcdFx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdFx0XHRcdEAub2JqTGF5ZXIgPSBvYmplY3Rcblx0XHRcdFx0XHRcdFx0bGF5ZXJbcHJvcF0gPSBALm9iakxheWVyW29ialByb3AyXSAtIGV4cG9ydHMuc2NhbGUgKiBALm9iakludFxuXG5cbiNUZXh0IExheWVyc1xuZXhwb3J0cy5zdHlsZXMgPSB7XG59XG5cbiMjIEN1c3RvbSBTdHlsZXNcblxuZXhwb3J0cy5hZGRTdHlsZSA9IChhcnJheSkgLT5cblx0a2V5ID0gT2JqZWN0LmtleXMoYXJyYXkpWzBdXG5cdGV4cG9ydHMuc3R5bGVzW2tleV0gPSBhcnJheVtrZXldXG5cbmV4cG9ydHMuYXBwbHkgPSAobGF5ZXIsIHN0eWxlKSAtPlxuXHRzdHlsZSA9IGV4cG9ydHMuc3R5bGVzW3N0eWxlXVxuXHRwcm9wcyA9IE9iamVjdC5rZXlzKHN0eWxlKVxuXHRmcmFtZXJQcm9wcyA9IFtcIm5hbWVcIiwgXCJ3aWR0aFwiLCBcImhlaWdodFwiLCBcInN1cGVyTGF5ZXJcIiwgXCJvcGFjaXR5XCIsIFwiY29sb3JcIiwgXCJiYWNrZ3JvdW5kQ29sb3JcIiwgXCJ4XCIsIFwieVwiLCBcIm1pZFhcIiwgXCJtaWRZXCIsIFwibWF4WFwiLCBcIm1pblhcIiwgXCJ2aXNpYmxlXCIsIFwiY2xpcFwiLCBcInNjcm9sbEhvcml6b250YWxcIiwgXCJzY3JvbGxWZXJ0aWNhbFwiLCBcImlnbm9yZUV2ZW50c1wiLCBcInpcIiwgXCJzY2FsZVhcIiwgXCJzY2FsZVlcIiwgXCJzY2FsZVpcIiwgXCJzY2FsZVwiLCBcInNrZXdYXCIsIFwic2tld1lcIiwgXCJza2V3XCIsIFwib3JpZ2luWFwiLCBcIm9yaWdpbllcIiwgXCJvcmlnaW5aXCIsIFwicGVyc3BlY3RpdmVcIiwgXCJwZXJzcGVjdGl2ZU9yaWdpblhcIiwgXCJwZXJzcGVjdGl2ZU9yaWdpbllcIiwgXCJyb3RhdGlvblhcIiwgXCJyb3RhdGlvbllcIiwgXCJyb3RhdGlvblpcIiwgXCJyb3RhdGlvblwiLCBcImJsdXJcIiwgXCJicmlnaHRuZXNzXCIsIFwic2F0dXJhdGVcIiwgXCJodWVSb3RhdGVcIiwgXCJjb250cmFzdFwiLCBcImludmVydFwiLCBcImdyYXlzY2FsZVwiLCBcInNlcGlhXCIsIFwic2hhZG93WFwiLCBcInNoYWRvd1lcIiwgXCJzaGFkb3dCbHVyXCIsIFwic2hhZG93U3ByZWFkXCIsIFwic2hhZG93Q29sb3JcIiwgXCJib3JkZXJDb2xvclwiLCBcImJvcmRlcldpZHRoXCIsIFwiZm9yY2UyZFwiLCBcImZsYXRcIiwgXCJiYWNrZmFjZVZpc2libGVcIiwgXCJuYW1lXCIsIFwibWF0cml4XCIsIFwiX21hdHJpeDJkXCIsIFwidHJhbnNmb3JtTWF0cml4XCIsIFwibWF0cml4M2RcIiwgXCJib3JkZXJSYWRpdXNcIiwgXCJwb2ludFwiLCBcInNpemVcIiwgXCJmcmFtZVwiLCBcImh0bWxcIiwgXCJpbWFnZVwiLCBcInNjcm9sbFhcIiwgXCJzY3JvbGxZXCIsIFwiX2RvbUV2ZW50TWFuYWdlclwiLCBcIm1vdXNlV2hlZWxTcGVlZE11bHRpcGxpZXJcIiwgXCJ2ZWxvY2l0eVRocmVzaG9sZFwiLCBcImFuaW1hdGlvbk9wdGlvbnNcIiwgXCJjb25zdHJhaW5lZFwiXVxuXHRjc3NQcm9wcyA9IFtcImZvbnRGYW1pbHlcIiwgXCJmb250U2l6ZVwiLCBcInRleHRBbGlnblwiLCBcImZvbnRXZWlnaHRcIiwgXCJsaW5lSGVpZ2h0XCJdXG5cdGZvciBwIGluIHByb3BzXG5cdFx0aWYgZnJhbWVyUHJvcHMuaW5kZXhPZihwKSAhPSAtMSBcblx0XHRcdGlmIHN0eWxlW3BdID09IHBhcnNlSW50KHN0eWxlW3BdLCAxMClcblx0XHRcdFx0bGF5ZXJbcF0gPSBleHBvcnRzLnB4KHN0eWxlW3BdKVxuXHRcdFx0ZWxzZSBcblx0XHRcdFx0bGF5ZXJbcF0gPSBzdHlsZVtwXVxuXHRcdGlmIGNzc1Byb3BzLmluZGV4T2YocCkgIT0gLTEgXG5cdFx0XHRpZiBwID09IFwiZm9udFNpemVcIlxuXHRcdFx0XHRsYXllci5zdHlsZVtcImZvbnQtc2l6ZVwiXSA9IGV4cG9ydHMucHgoc3R5bGVbcF0pICsgXCJweFwiXG5cdFx0XHRpZiBwID09IFwiZm9udEZhbWlseVwiXG5cdFx0XHRcdGxheWVyLnN0eWxlW1wiZm9udC1mYW1pbHlcIl0gPSBzdHlsZVtwXVxuXHRcdFx0aWYgcCA9PSBcInRleHRBbGlnblwiXG5cdFx0XHRcdGxheWVyLnN0eWxlW1widGV4dC1hbGlnblwiXSA9IHN0eWxlW3BdXG5cdFx0XHRpZiBwID09IFwiZm9udFdlaWdodFwiXG5cdFx0XHRcdGlmIHN0eWxlW3BdID09IHBhcnNlSW50KHN0eWxlW3BdLCAxMClcblx0XHRcdFx0XHRsYXllci5zdHlsZVtcImZvbnQtd2VpZ2h0XCJdID0gc3R5bGVbcF1cblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdHN3aXRjaCBzdHlsZVtwXVxuXHRcdFx0XHRcdFx0d2hlbiBcInVsdHJhdGhpblwiIHRoZW4gbGF5ZXIuc3R5bGVbXCJmb250LXdlaWdodFwiXSA9IDEwMFxuXHRcdFx0XHRcdFx0d2hlbiBcInRoaW5cIiB0aGVuIGxheWVyLnN0eWxlW1wiZm9udC13ZWlnaHRcIl0gPSAyMDBcblx0XHRcdFx0XHRcdHdoZW4gXCJsaWdodFwiIHRoZW4gbGF5ZXIuc3R5bGVbXCJmb250LXdlaWdodFwiXSA9IDMwMFxuXHRcdFx0XHRcdFx0d2hlbiBcInJlZ3VsYXJcIiB0aGVuIGxheWVyLnN0eWxlW1wiZm9udC13ZWlnaHRcIl0gPSA0MDBcblx0XHRcdFx0XHRcdHdoZW4gXCJtZWRpdW1cIiB0aGVuIGxheWVyLnN0eWxlW1wiZm9udC13ZWlnaHRcIl0gPSA1MDBcblx0XHRcdFx0XHRcdHdoZW4gXCJzZW1pYm9sZFwiIHRoZW4gbGF5ZXIuc3R5bGVbXCJmb250LXdlaWdodFwiXSA9IDYwMFxuXHRcdFx0XHRcdFx0d2hlbiBcImJvbGRcIiB0aGVuIGxheWVyLnN0eWxlW1wiZm9udC13ZWlnaHRcIl0gPSA3MDBcblx0XHRcdFx0XHRcdHdoZW4gXCJibGFja1wiIHRoZW4gbGF5ZXIuc3R5bGVbXCJmb250LXdlaWdodFwiXSA9IDgwMFxuXHRcdFx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdFx0XHRlcnJvcihwLCA0KVxuXHRcdFx0aWYgcCA9PSBcImxpbmVIZWlnaHRcIlxuXHRcdFx0XHRpZiBzdHlsZVtwXSA9PSBcImF1dG9cIlxuXHRcdFx0XHRcdGxheWVyLnN0eWxlW1wibGluZS1oZWlnaHRcIl0gPSBleHBvcnRzLnB4KHN0eWxlW1wiZm9udFNpemVcIl0pICogMS4yICsgXCJweFwiXG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRsYXllci5zdHlsZVtcImxpbmUtaGVpZ2h0XCJdID0gZXhwb3J0cy5weChzdHlsZVtwXSkgKyBcInB4XCJcblxuZXhwb3J0cy5DdXN0b20gPSAoc3R5bGUsIGFycmF5KSAtPlxuXHRsYXllciA9IG5ldyBMYXllciBcblx0aXNTdHlsZVZhbGlkID0gZXhwb3J0cy5zdHlsZXNbc3R5bGVdXG5cdGlmIGlzU3R5bGVWYWxpZCA9PSB1bmRlZmluZWRcblx0XHRpZiBhcnJheSAhPSB1bmRlZmluZWRcblx0XHRcdGV4cG9ydHMuYWRkU3R5bGVcblx0XHRcdFx0XCIje3N0eWxlfVwiIDpcblx0XHRcdFx0XHRhcnJheVxuXHRcdGVsc2Vcblx0XHRcdGV4cG9ydHMuYWRkU3R5bGVcblx0XHRcdFx0XCIje3N0eWxlfVwiIDpcblx0XHRcdFx0XHR3aWR0aCA6IDEwMFxuXHRleHBvcnRzLmFwcGx5KGxheWVyLCBzdHlsZSlcblx0aWYgYXJyYXkgIT0gdW5kZWZpbmVkICYmIGlzU3R5bGVWYWxpZCAhPSB1bmRlZmluZWRcblx0XHRzdHlsZU51bSA9IFwiY29weVwiXG5cdFx0bmV3U3R5bGVOYW1lID0gc3R5bGUgKyBcIiBcIiArIHN0eWxlTnVtXG5cdFx0ZXhwb3J0cy5hZGRTdHlsZVxuXHRcdFx0XCIje25ld1N0eWxlTmFtZX1cIiA6IFxuXHRcdFx0XHRhcnJheVxuXHRcdGV4cG9ydHMuYXBwbHkobGF5ZXIsIG5ld1N0eWxlTmFtZSlcblx0cmV0dXJuIGxheWVyIFxuXG5tYWtlU3R5bGVDaGFuZ2UgPSAobGF5ZXIsIHN0eWxlLCBjaGFuZ2UpIC0+XG5cdGlmIGRlZmF1bHRzLmNzc1Byb3BzLmluZGV4T2Yoc3R5bGUpICE9IC0xXG5cdFx0aWYgc3R5bGUgPT0gXCJmb250U2l6ZVwiXG5cdFx0XHRsYXllci5zdHlsZVtcImZvbnQtc2l6ZVwiXSA9IGV4cG9ydHMucHgoY2hhbmdlKSArIFwicHhcIlxuXHRpZiBkZWZhdWx0cy5mcmFtZXJQcm9wcy5pbmRleE9mKHN0eWxlKSAhPSAtMVxuXHRcdGxheWVyW3N0eWxlXSA9IGNoYW5nZVxuIFxuXG50ZXh0QXV0b1NpemUgPSAodGV4dExheWVyKSAtPlxuXHQjRGVmaW5lIFdpZHRoXG5cdGNvbnN0cmFpbnRzID0ge31cblx0aWYgdGV4dExheWVyLmNvbnN0cmFpbnRzIFxuXHRcdGlmIHRleHRMYXllci5jb25zdHJhaW50cy5oZWlnaHRcblx0XHRcdGNvbnN0cmFpbnRzLmhlaWdodCA9IGV4cG9ydHMucHgodGV4dExheWVyLmNvbnN0cmFpbnRzLmhlaWdodClcblx0XHRpZiB0ZXh0TGF5ZXIuY29uc3RyYWludHMud2lkdGhcblx0XHRcdGNvbnN0cmFpbnRzLndpZHRoID0gZXhwb3J0cy5weCh0ZXh0TGF5ZXIuY29uc3RyYWludHMud2lkdGgpXG5cdHN0eWxlcyA9XG5cdFx0Zm9udFNpemU6IHRleHRMYXllci5zdHlsZVtcImZvbnQtc2l6ZVwiXVxuXHRcdGZvbnRGYW1pbHk6IHRleHRMYXllci5zdHlsZVtcImZvbnQtZmFtaWx5XCJdXG5cdFx0Zm9udFdlaWdodDogdGV4dExheWVyLnN0eWxlW1wiZm9udC13ZWlnaHRcIl1cblx0XHRsaW5lSGVpZ2h0OiB0ZXh0TGF5ZXIuc3R5bGVbXCJsaW5lLWhlaWdodFwiXVxuXHRcdGxldHRlclNwYWNpbmc6IHRleHRMYXllci5zdHlsZVtcImxldHRlci1zcGFjaW5nXCJdXG5cdHRleHRXaWR0aCA9IFV0aWxzLnRleHRTaXplIHRleHRMYXllci5odG1sLCBzdHlsZXMsIGNvbnN0cmFpbnRzXG5cdHJldHVybiB7XG5cdFx0d2lkdGggOiB0ZXh0V2lkdGgud2lkdGhcblx0XHRoZWlnaHQ6IHRleHRXaWR0aC5oZWlnaHRcblx0fVxuXG5leHBvcnRzLlRleHQgPSAoYXJyYXkpIC0+XG5cdGlmIGFycmF5ID09IHVuZGVmaW5lZFxuXHRcdGFycmF5ID0gW11cblx0ZXhjZXB0aW9ucyA9IE9iamVjdC5rZXlzKGFycmF5KVxuXHRzdHlsZUFycmF5ID0ge31cblx0Zm9yIGkgaW4gZGVmYXVsdHMudGV4dC5wcm9wc1xuXHRcdGlmIGFycmF5W2ldICE9IHVuZGVmaW5lZFxuXHRcdFx0QFtpXSA9IGFycmF5W2ldXG5cdFx0ZWxzZVxuXHRcdFx0QFtpXSA9IGRlZmF1bHRzLnRleHQuZGVmYXVsdHNbaV1cblx0XHRpZiBpICE9IFwic3R5bGVcIlxuXHRcdFx0c3R5bGVBcnJheVtpXSA9IEBbaV1cblx0dGV4dExheWVyID0gbmV3IExheWVyXG5cdHRleHRMYXllci50eXBlID0gXCJ0ZXh0XCJcblx0dGV4dExheWVyLmh0bWwgPSBAdGV4dFxuXHR0ZXh0U3R5bGUgPSBcblx0XHRcIiN7QC5zdHlsZX1cIiA6IFxuXHRcdFx0c3R5bGVBcnJheVxuXHRpZiBleHBvcnRzLnN0eWxlc1tALnN0eWxlXSA9PSB1bmRlZmluZWRcblx0XHRleHBvcnRzLmFkZFN0eWxlIHRleHRTdHlsZVxuXHRcdGV4cG9ydHMuYXBwbHkodGV4dExheWVyLCBAc3R5bGUpXG5cdGVsc2Vcblx0XHRleHBvcnRzLmFwcGx5KHRleHRMYXllciwgQHN0eWxlKVxuXHRcdGZvciBjaGFuZ2UgaW4gZXhjZXB0aW9uc1xuXHRcdFx0aWYgY2hhbmdlICE9IFwic3R5bGVcIlxuXHRcdFx0XHRtYWtlU3R5bGVDaGFuZ2UodGV4dExheWVyLCBjaGFuZ2UsIGFycmF5W2NoYW5nZV0pXHRcdFxuXHR0ZXh0RnJhbWUgPSB0ZXh0QXV0b1NpemUodGV4dExheWVyKVxuXHR0ZXh0TGF5ZXIucHJvcHMgPSAoaGVpZ2h0OnRleHRGcmFtZS5oZWlnaHQsIHdpZHRoOnRleHRGcmFtZS53aWR0aClcblx0cmV0dXJuIHRleHRMYXllclxuXG5cblxuIyNBbGVydHNcbmV4cG9ydHMuQWxlcnQgPSAoYXJyYXkpIC0+XG5cdGlmIGFycmF5ID09IHVuZGVmaW5lZFxuXHRcdGFycmF5ID0gW11cblx0Zm9yIGkgaW4gZGVmYXVsdHMuYWxlcnQucHJvcHNcblx0XHRpZiBhcnJheVtpXSAhPSB1bmRlZmluZWRcblx0XHRcdEBbaV0gPSBhcnJheVtpXVxuXHRcdGVsc2Vcblx0XHRcdEBbaV0gPSBkZWZhdWx0cy5hbGVydC50ZXh0W2ldXG5cdGFsbCA9IG5ldyBMYXllciBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiLCBuYW1lOlwiYWxlcnQgYWxsXCJcblx0YWxsLmNvbnN0cmFpbnRzID0gXG5cdFx0bGVhZGluZzowXG5cdFx0dHJhaWxpbmc6MFxuXHRcdHRvcDowXG5cdFx0Ym90dG9tOjBcblx0b3ZlcmxheSA9IG5ldyBMYXllciBiYWNrZ3JvdW5kQ29sb3I6XCJibGFja1wiLCBvcGFjaXR5Oi4zLCBzdXBlckxheWVyOmFsbCwgbmFtZTpcIm92ZXJsYXlcIlxuXHRvdmVybGF5LmNvbnN0cmFpbnRzID1cblx0XHRsZWFkaW5nOjBcblx0XHR0cmFpbGluZzowXG5cdFx0dG9wOjBcblx0XHRib3R0b206MFxuXHRhbGVydEJHID0gbmV3IExheWVyIGJhY2tncm91bmRDb2xvcjpcIndoaXRlXCIsIHN1cGVyTGF5ZXI6YWxsLCBib3JkZXJSYWRpdXM6ZXhwb3J0cy5weCgxMCksIG5hbWU6XCJhbGVydCBiZ1wiLCB4OjkyLCB5OjUzN1xuXHRhbGVydEJHLmNvbnN0cmFpbnRzID1cblx0XHRhbGlnbjpcImNlbnRlclwiXG5cdFx0d2lkdGg6MjgwXG5cdFx0aGVpZ2h0OjQwMFxuXHR0aXRsZSA9IG5ldyBleHBvcnRzLlRleHQgc3R5bGU6XCJhbGVydFRpdGxlXCIsIHN1cGVyTGF5ZXI6YWxlcnRCRywgdGV4dDpAdGl0bGUsIGZvbnRXZWlnaHQ6XCJtZWRpdW1cIiwgIG5hbWU6XCJ0aXRsZVwiXG5cdHRpdGxlLmNvbnN0cmFpbnRzID0gXG5cdFx0YWxpZ246XCJob3Jpem9udGFsXCJcblx0XHR0b3A6MjBcblx0bWVzc2FnZSA9IG5ldyBleHBvcnRzLlRleHQgc3R5bGU6XCJhbGVydE1lc3NhZ2VcIiwgdGV4dDpAbWVzc2FnZSwgZm9udFNpemU6MTMsIHN1cGVyTGF5ZXI6YWxlcnRCRywgdGV4dEFsaWduOlwiY2VudGVyXCIsIGxpbmVIZWlnaHQ6MTYsIHdpZHRoOjI0MCwgbmFtZTpcIm1lc3NhZ2VcIlxuXHRtZXNzYWdlLmNvbnN0cmFpbnRzID1cblx0XHR0b3A6IFt0aXRsZSwgMTBdXG5cdFx0YWxpZ246XCJob3Jpem9udGFsXCJcblx0XHR3aWR0aDogMjIwXG5cdGRpdmlkZXIgPSBuZXcgTGF5ZXIgc3VwZXJMYXllcjphbGVydEJHLCBiYWNrZ3JvdW5kQ29sb3I6XCIjRTJFOEVCXCIsIG5hbWU6XCJob3Jpem9udGFsIGRpdmlkZXJcIlxuXHRkaXZpZGVyLmNvbnN0cmFpbnRzID0gXG5cdFx0bGVhZGluZzowXG5cdFx0dHJhaWxpbmc6MFxuXHRcdGhlaWdodDoxXG5cdFx0Ym90dG9tOjQ0XG5cdGV4cG9ydHMubGF5b3V0KClcblx0YWN0aW9uQnV0dG9uID0gbmV3IGV4cG9ydHMuVGV4dCBzdHlsZTpcImFsZXJ0QWN0aW9uXCIsIGNvbG9yOlwiIzAwNzZGRlwiLCBzdXBlckxheWVyOmFsZXJ0QkcsIHRleHQ6QGFjdGlvbiwgbmFtZTpcImFjdGlvblwiXG5cdHNlY29uZGFyeUFjdGlvbkJ1dHRvbiA9IG5ldyBleHBvcnRzLlRleHQgc3R5bGU6XCJhbGVydEFjdGlvblwiLCB0ZXh0OkBzZWNvbmRhcnlBY3Rpb24sIG5hbWU6XCJzZWNvbmRhcnlBY3Rpb25cIlxuXHRhbGVydEJHLmNvbnN0cmFpbnRzW1wiaGVpZ2h0XCJdID0gMjAgKyBleHBvcnRzLnB0KHRpdGxlLmhlaWdodCkgKyAxMCArIGV4cG9ydHMucHQobWVzc2FnZS5oZWlnaHQpICsgNjQgXG5cdGV4cG9ydHMubGF5b3V0KClcblx0aWYgQGFjdGlvbiAhPSBcIkFjdGlvblwiICYmIEBzZWNvbmRhcnlBY3Rpb24gPT0gXCJzZWNvbmRhcnlBY3Rpb25cIlxuXHRcdGFjdGlvbkJ1dHRvbi5jb25zdHJhaW50cyA9IFxuXHRcdFx0YWxpZ246XCJob3Jpem9udGFsXCJcblx0XHRcdGJvdHRvbToxNlxuXHRcdGJveCA9IG5ldyBMYXllciBzdXBlckxheWVyOmFsZXJ0QkcsIGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCJcblx0XHRib3guY29uc3RyYWludHMgPSBcblx0XHRcdGxlYWRpbmc6MFxuXHRcdFx0dHJhaWxpbmc6MFxuXHRcdFx0Ym90dG9tOjBcblx0XHRcdGhlaWdodDo0NFxuXHRcdHNlY29uZGFyeUFjdGlvbkJ1dHRvbi52aXNpYmxlID0gZmFsc2Vcblx0XHRleHBvcnRzLmxheW91dCgpXG5cdFx0cmV0dXJuIHtcblx0XHRcdGFsbCA6IGFsbFxuXHRcdFx0b3ZlcmxheSA6IG92ZXJsYXlcblx0XHRcdGFjdGlvbjogYm94XG5cdFx0XHR0aXRsZTogdGl0bGVcblx0XHRcdG1lc3NhZ2U6IG1lc3NhZ2Vcblx0XHR9XG5cdGVsc2Vcblx0XHRsZWZ0Qm94ID0gbmV3IExheWVyIHdpZHRoOmFsZXJ0Qkcud2lkdGgvMiwgc3VwZXJMYXllcjphbGVydEJHLCBuYW1lOkBzZWNvbmRhcnlBY3Rpb24gKyBcIiBib3hcIiwgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIlxuXHRcdHJpZ2h0Qm94ID0gbmV3IExheWVyIHdpZHRoOmFsZXJ0Qkcud2lkdGgvMiwgc3VwZXJMYXllcjphbGVydEJHLCBuYW1lOkBhY3Rpb24gKyBcIiBib3hcIiwgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIlxuXHRcdGRpdmlkZXJWZXJ0aWNhbCA9IG5ldyBMYXllciBzdXBlckxheWVyOmFsZXJ0QkcsIGJhY2tncm91bmRDb2xvcjpcIiNFMkU4RUJcIlxuXHRcdGRpdmlkZXJWZXJ0aWNhbC5jb25zdHJhaW50cyA9IFxuXHRcdFx0d2lkdGg6MVxuXHRcdFx0aGVpZ2h0OjQ0XG5cdFx0XHRib3R0b206MFxuXHRcdFx0YWxpZ246XCJob3Jpem9udGFsXCJcblx0XHRsZWZ0Qm94LmNvbnN0cmFpbnRzID1cblx0XHRcdGhlaWdodDo0NFxuXHRcdFx0Ym90dG9tOjBcblx0XHRcdGxlYWRpbmc6MFxuXHRcdHJpZ2h0Qm94LmNvbnN0cmFpbnRzID1cblx0XHRcdGhlaWdodDo0NFxuXHRcdFx0Ym90dG9tOjBcblx0XHRcdHRyYWlsaW5nOjBcblx0XHRsZWZ0Qm94LmFkZFN1YkxheWVyKHNlY29uZGFyeUFjdGlvbkJ1dHRvbilcblx0XHRyaWdodEJveC5hZGRTdWJMYXllcihhY3Rpb25CdXR0b24pXG5cdFx0ZXhwb3J0cy5sYXlvdXQoKVxuXHRcdGFjdGlvbkJ1dHRvbi5jb25zdHJhaW50cyA9IFxuXHRcdFx0YWxpZ246XCJob3Jpem9udGFsXCJcblx0XHRcdGJvdHRvbToxNlxuXHRcdHNlY29uZGFyeUFjdGlvbkJ1dHRvbi5jb25zdHJhaW50cyA9XG5cdFx0XHRhbGlnbjpcImNlbnRlclwiXG5cdFx0XHRib3R0b206MTZcblx0XHRleHBvcnRzLmxheW91dCgpXG5cdFx0cmV0dXJuIHtcblx0XHRcdGFsbCA6IGFsbFxuXHRcdFx0b3ZlcmxheSA6IG92ZXJsYXlcblx0XHRcdGFjdGlvbjogcmlnaHRCb3hcblx0XHRcdHNlY29uZGFyeUFjdGlvbiA6IGxlZnRCb3hcblx0XHRcdHRpdGxlOiB0aXRsZVxuXHRcdFx0bWVzc2FnZTogbWVzc2FnZVxuXHRcdH1cblxuZXhwb3J0cy5BbGVydEJhbm5lciA9IChhcnJheSkgLT5cblx0aWYgYXJyYXkgPT0gdW5kZWZpbmVkXG5cdFx0YXJyYXkgPSBbXVxuXHRmb3IgaSBpbiBkZWZhdWx0cy5hbGVydEJhbm5lci5wcm9wc1xuXHRcdGlmIGFycmF5W2ldICE9IHVuZGVmaW5lZFxuXHRcdFx0QFtpXSA9IGFycmF5W2ldXG5cdFx0ZWxzZVxuXHRcdFx0QFtpXSA9IGRlZmF1bHRzLmFsZXJ0QmFubmVyLnRleHRbaV1cblx0YmFubmVyQkcgPSBuZXcgTGF5ZXIgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIiwgbmFtZTpcImFsZXJ0IGJhbm5lciBhbGxcIlxuXHRpZiBleHBvcnRzLmRldmljZSA9PSBcImlwaG9uZS02c1wiXG5cdFx0YmFubmVyQkcuaHRtbCA9IFwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdFx0XHQ8c3ZnIHdpZHRoPScje2V4cG9ydHMud2lkdGh9cHgnIGhlaWdodD0nI3tleHBvcnRzLnB4KDY4KX1weCcgdmlld0JveD0nMCAwIDM3NSA2OCcgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJz5cblx0XHRcdCAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNiAoMjYzMDQpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdFx0ICAgIDx0aXRsZT5Ob3RpZmljYXRpb24gYmFja2dyb3VuZDwvdGl0bGU+XG5cdFx0XHQgICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0XHQgICAgPGRlZnM+PC9kZWZzPlxuXHRcdFx0ICAgIDxnIGlkPSdQYWdlLTEnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIGZpbGwtb3BhY2l0eT0nMC45NSc+XG5cdFx0XHQgICAgICAgIDxnIGlkPSdpT1M4LVB1c2gtTm90aWZpY2F0aW9uJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtNTguMDAwMDAwLCAtMjMuMDAwMDAwKScgZmlsbD0nIzFBMUExQyc+XG5cdFx0XHQgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSg1OC4wMDAwMDAsIDcuMDAwMDAwKScgaWQ9J05vdGlmaWNhdGlvbi1jb250YWluZXInPlxuXHRcdFx0ICAgICAgICAgICAgICAgIDxnPlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSdNMCwxNiBMMzc1LDE2IEwzNzUsODQgTDAsODQgTDAsMTYgWiBNMTY5LDc3LjAwNDg4MTUgQzE2OSw3NS44OTc2MTYgMTY5Ljg5NjI3OSw3NSAxNzEuMDAyNCw3NSBMMjAzLjk5NzYsNzUgQzIwNS4xMDM0OTUsNzUgMjA2LDc1Ljg5Mzg5OTggMjA2LDc3LjAwNDg4MTUgTDIwNiw3Ny45OTUxMTg1IEMyMDYsNzkuMTAyMzg0IDIwNS4xMDM3MjEsODAgMjAzLjk5NzYsODAgTDE3MS4wMDI0LDgwIEMxNjkuODk2NTA1LDgwIDE2OSw3OS4xMDYxMDAyIDE2OSw3Ny45OTUxMTg1IEwxNjksNzcuMDA0ODgxNSBaJyBpZD0nTm90aWZpY2F0aW9uLWJhY2tncm91bmQnPjwvcGF0aD5cblx0XHRcdCAgICAgICAgICAgICAgICA8L2c+XG5cdFx0XHQgICAgICAgICAgICA8L2c+XG5cdFx0XHQgICAgICAgIDwvZz5cblx0XHRcdCAgICA8L2c+XG5cdFx0XHQ8L3N2Zz5cIlxuXHRpZiBleHBvcnRzLmRldmljZSA9PSBcImlwaG9uZS02cy1wbHVzXCJcblx0XHRiYW5uZXJCRy5odG1sID0gXCJcblx0XHQ8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0XHRcdDxzdmcgd2lkdGg9JyN7ZXhwb3J0cy53aWR0aH1weCcgaGVpZ2h0PScje2V4cG9ydHMucHgoNjgpfXB4JyB2aWV3Qm94PScwIDAgNDE0IDY4JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnPlxuXHRcdCAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNiAoMjYzMDQpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdCAgICA8dGl0bGU+Tm90aWZpY2F0aW9uIGJhY2tncm91bmQgQ29weTwvdGl0bGU+XG5cdFx0ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdCAgICA8ZGVmcz48L2RlZnM+XG5cdFx0ICAgIDxnIGlkPSdQYWdlLTEnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIGZpbGwtb3BhY2l0eT0nMC45NSc+XG5cdFx0ICAgICAgICA8ZyBpZD0naU9TOC1QdXNoLU5vdGlmaWNhdGlvbicgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTQzLjAwMDAwMCwgLTc0LjAwMDAwMCknIGZpbGw9JyMxQTFBMUMnPlxuXHRcdCAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDQzLjAwMDAwMCwgNzQuMDAwMDAwKScgaWQ9J05vdGlmaWNhdGlvbi1jb250YWluZXInPlxuXHRcdCAgICAgICAgICAgICAgICA8Zz5cblx0XHQgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9J00wLDAgTDQxNCwwIEw0MTQsNjggTDAsNjggTDAsMCBaIE0xODksNjEuMDA0ODgxNSBDMTg5LDU5Ljg5NzYxNiAxODkuODk2Mjc5LDU5IDE5MS4wMDI0LDU5IEwyMjMuOTk3Niw1OSBDMjI1LjEwMzQ5NSw1OSAyMjYsNTkuODkzODk5OCAyMjYsNjEuMDA0ODgxNSBMMjI2LDYxLjk5NTExODUgQzIyNiw2My4xMDIzODQgMjI1LjEwMzcyMSw2NCAyMjMuOTk3Niw2NCBMMTkxLjAwMjQsNjQgQzE4OS44OTY1MDUsNjQgMTg5LDYzLjEwNjEwMDIgMTg5LDYxLjk5NTExODUgTDE4OSw2MS4wMDQ4ODE1IFonIGlkPSdOb3RpZmljYXRpb24tYmFja2dyb3VuZC1Db3B5Jz48L3BhdGg+XG5cdFx0ICAgICAgICAgICAgICAgIDwvZz5cblx0XHQgICAgICAgICAgICA8L2c+XG5cdFx0ICAgICAgICA8L2c+XG5cdFx0ICAgIDwvZz5cblx0XHQ8L3N2Zz5cblx0XHRcIlxuXHRiYW5uZXJCRy5jb25zdHJhaW50cyA9XG5cdFx0bGVhZGluZzowXG5cdFx0dHJhaWxpbmc6MFxuXHRcdHRvcDowXG5cdFx0aGVpZ2h0OjY4XG5cdGljb24gPSBuZXcgTGF5ZXIgc3VwZXJMYXllcjpiYW5uZXJCRywgbmFtZTpcImFsZXJ0IGljb25cIiwgYm9yZGVyUmFkaXVzOmV4cG9ydHMucHgoNC41KVxuXHRpZiBAaWNvbiA9PSB1bmRlZmluZWRcblx0XHRpY29uLnN0eWxlW1wiYmFja2dyb3VuZFwiXSA9IFwibGluZWFyLWdyYWRpZW50KC0xODBkZWcsICM2N0ZGODEgMCUsICMwMUI0MUYgMTAwJSlcIlxuXHRpY29uLmNvbnN0cmFpbnRzID1cblx0XHRoZWlnaHQ6MjBcblx0XHR3aWR0aDoyMFxuXHRcdGxlYWRpbmc6MTVcblx0XHR0b3A6OFxuXHR0aXRsZSA9IG5ldyBleHBvcnRzLlRleHQgc3R5bGU6XCJhbGVydEJhbm5lclRpdGxlXCIsIHRleHQ6QHRpdGxlLCBjb2xvcjpcIndoaXRlXCIsIGZvbnRXZWlnaHQ6XCJtZWRpdW1cIiwgZm9udFNpemU6MTMsIHN1cGVyTGF5ZXI6YmFubmVyQkcsIG5hbWU6XCJhbGVydCB0aXRsZVwiXG5cdHRpdGxlLmNvbnN0cmFpbnRzID0gXG5cdFx0dG9wOjVcblx0XHRsZWFkaW5nOltpY29uLCAxMV1cblx0bWVzc2FnZSA9IG5ldyBleHBvcnRzLlRleHQgc3R5bGU6XCJhbGVydEJhbm5lck1lc3NhZ2VcIiwgdGV4dDpAbWVzc2FnZSwgY29sb3I6XCJ3aGl0ZVwiLCBmb250U2l6ZToxMywgc3VwZXJMYXllcjpiYW5uZXJCRywgbmFtZTpcImFsZXJ0IG1lc3NhZ2VcIlxuXHRtZXNzYWdlLmNvbnN0cmFpbnRzID1cblx0XHRsZWFkaW5nRWRnZXM6dGl0bGVcblx0XHR0b3A6W3RpdGxlLCAyXVxuXHR0aW1lID0gbmV3IGV4cG9ydHMuVGV4dCBzdHlsZTpcImFsZXJ0QmFubmVyVGltZVwiLCB0ZXh0OkB0aW1lLCBjb2xvcjpcIndoaXRlXCIsIGZvbnRTaXplOjExLCBzdXBlckxheWVyOmJhbm5lckJHLCBuYW1lOlwiYWxlcnQgdGltZVwiXG5cdHRpbWUuY29uc3RyYWludHMgPVxuXHRcdGxlYWRpbmc6W3RpdGxlLCA1XVxuXHRcdGJvdHRvbUVkZ2VzOiB0aXRsZVxuXG5cdGV4cG9ydHMubGF5b3V0KClcblxuXG5cbmV4cG9ydHMuS2V5Ym9hcmQgPSAoYXJyYXkpIC0+XG5cdGlmIGFycmF5ID09IHVuZGVmaW5lZFxuXHRcdGFycmF5ID0gW11cblx0Zm9yIHByb3AgaW4gZGVmYXVsdHMua2V5Ym9hcmRQcm9wc1xuXHRcdGlmIGFycmF5W3Byb3BdXHRcdFx0XG5cdFx0XHRAW3Byb3BdID0gYXJyYXlbcHJvcF1cblx0XHRlbHNlIFxuXHRcdFx0QFtwcm9wXSA9IGRlZmF1bHRzLmtleWJvYXJkUHJvcHNbcHJvcF1cblx0Ym9hcmQgPSBuZXcgTGF5ZXIgYmFja2dyb3VuZENvbG9yOlwiI0QxRDVEQVwiLCBuYW1lOlwia2V5Ym9hcmRcIlxuXHRib2FyZC5jb25zdHJhaW50cyA9IChib3R0b206MCwgaGVpZ2h0OjIxNiwgdHJhaWxpbmc6MCwgbGVhZGluZzowKVxuXHRleHBvcnRzLmxheW91dCgpXG5cdGxldHRlcnNBcnJheSA9IFtcInFcIiwgXCJ3XCIsIFwiZVwiLCBcInJcIiwgXCJ0XCIsIFwieVwiLCBcInVcIiwgXCJpXCIsIFwib1wiLCBcInBcIiwgXCJhXCIsIFwic1wiLCBcImRcIiwgXCJmXCIsIFwiZ1wiLCBcImhcIiwgXCJqXCIsIFwia1wiLCBcImxcIiwgXCJ6XCIsIFwieFwiLCBcImNcIiwgXCJ2XCIsICBcImJcIiwgXCJuXCIsIFwibVwiXVxuXHRrZXlzQXJyYXkgPSBbXVxuXHRzcGFjZXIgPSBleHBvcnRzLnB4KDUpXG5cdGlmIGV4cG9ydHMuc2NhbGUgPT0gMyB8fCBleHBvcnRzLndpZHRoID09IDY0MFxuXHRcdHNwYWNlciA9IGV4cG9ydHMucHgoNilcblx0cm93c01hcCA9IFtcblx0XHR7IFxuXHRcdFx0XCJwYWRkaW5nXCIgOiBleHBvcnRzLnB4KDQpXG5cdFx0XHRcInN0YXJ0SW5kZXhcIiA6IDBcblx0XHRcdFwiZW5kSW5kZXhcIiA6IDlcblx0XHRcdFwibWFyZ2luVG9wXCIgOiBleHBvcnRzLnB4KDEwKVxuXHRcdH0sXG5cdFx0eyBcblx0XHRcdFwicGFkZGluZ1wiIDogMjIgKiBleHBvcnRzLnNjYWxlXG5cdFx0XHRcInN0YXJ0SW5kZXhcIiA6IDEwXG5cdFx0XHRcImVuZEluZGV4XCIgOiAxOFxuXHRcdFx0XCJtYXJnaW5Ub3BcIiA6IDIyICogZXhwb3J0cy5zY2FsZVxuXHRcdH0sXG5cdFx0eyBcblx0XHRcdFwicGFkZGluZ1wiIDogNTkgKiBleHBvcnRzLnNjYWxlXG5cdFx0XHRcInN0YXJ0SW5kZXhcIiA6IDE5XG5cdFx0XHRcImVuZEluZGV4XCIgOiAyNVxuXHRcdFx0XCJtYXJnaW5Ub3BcIiA6IDM0ICogZXhwb3J0cy5zY2FsZVxuXHRcdH1cblx0XVxuXHRrZXlQb3BVcCA9IG5ldyBMYXllciB3aWR0aDpAa2V5V2lkdGgsIGhlaWdodDpAa2V5SGVpZ2h0LCB4OkAueC0xNipleHBvcnRzLnNjYWxlLCBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiLCBzdXBlckxheWVyOmJvYXJkLCBuYW1lOlwia2V5IHBvcCB1cFwiXG5cdGJveCA9IG5ldyBMYXllciBib3JkZXJSYWRpdXM6ZXhwb3J0cy5weCgxMCksIHN1cGVyTGF5ZXI6a2V5UG9wVXAsIGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCIsIGNvbG9yOlwiYmxhY2tcIiwgbmFtZTpcImxldHRlclwiXG5cdGJveC5zdHlsZSA9IHtcblx0XHRcImZvbnQtc2l6ZVwiIDogMzkgKiBleHBvcnRzLnNjYWxlICsgXCJweFwiXG5cdFx0XCJmb250LXdlaWdodFwiIDogMzAwXG5cdFx0XCJmb250LWZhbWlseVwiIDogJy1hcHBsZS1zeXN0ZW0sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYnXG5cdFx0J3RleHQtYWxpZ24nIDogJ2NlbnRlcidcblx0XHQnbGluZS1oZWlnaHQnIDogQGxpbmVIZWlnaHRcblx0fVxuXHRALmNvbG9yID0gXCJ3aGl0ZVwiXG5cdHBhdGggPSBuZXcgTGF5ZXIgc3VwZXJMYXllcjprZXlQb3BVcCwgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIiwgbmFtZTpcInNoYXBlIHBhdGhcIlxuXG5cblx0c2hpZnRLZXkgPSBuZXcgTGF5ZXIgc3VwZXJMYXllcjpib2FyZCwgbmFtZTpcInNoaWZ0XCIsIGJvcmRlclJhZGl1czpleHBvcnRzLnB4KDUpLCBiYWNrZ3JvdW5kQ29sb3I6XCIjQUFCM0JDXCIsIHNoYWRvd1k6ZXhwb3J0cy5weCgxKSwgc2hhZG93Q29sb3I6XCIjOTI5NDk4XCJcblx0c2hpZnRLZXkuY29uc3RyYWludHMgPSAoYm90dG9tOjU2LCBsZWFkaW5nOjMsIHdpZHRoOjQyLCBoZWlnaHQ6NDIpXG5cdHNoaWZ0SWNvbiA9IG5ldyBMYXllciB3aWR0aDpleHBvcnRzLnB4KDIwKSwgaGVpZ2h0OmV4cG9ydHMucHgoMTkpLCBzdXBlckxheWVyOnNoaWZ0S2V5LCBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiLCB4OmV4cG9ydHMucHgoMTEpLCB5OmV4cG9ydHMucHgoMTEpXG5cdHNoaWZ0SWNvbi5odG1sID0gXCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0XHQ8c3ZnIHdpZHRoPScje2V4cG9ydHMucHgoMjApfXB4JyBoZWlnaHQ9JyN7ZXhwb3J0cy5weCgxOCl9cHgnIHZpZXdCb3g9JzAgMCAyMCAxOScgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyB4bWxuczpza2V0Y2g9J2h0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaC9ucyc+XG5cdFx0ICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy41LjIgKDI1MjM1KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHQgICAgPHRpdGxlPlNoaWZ0PC90aXRsZT5cblx0XHQgICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0ICAgIDxkZWZzPjwvZGVmcz5cblx0XHQgICAgPGcgaWQ9J1BhZ2UtMScgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCcgc2tldGNoOnR5cGU9J01TUGFnZSc+XG5cdFx0ICAgICAgICA8ZyBpZD0nS2V5Ym9hcmQvTGlnaHQvTG93ZXInIHNrZXRjaDp0eXBlPSdNU0xheWVyR3JvdXAnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC0xNC4wMDAwMDAsIC0xMjkuMDAwMDAwKScgZmlsbD0nIzAzMDMwMyc+XG5cdFx0ICAgICAgICAgICAgPGcgaWQ9J1RoaXJkLVJvdycgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMy4wMDAwMDAsIDExOC4wMDAwMDApJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJz5cblx0XHQgICAgICAgICAgICAgICAgPHBhdGggZD0nTTIxLjY3MTkwMDgsMTIuMjMyNTg5OCBDMjEuMzAxMDMyLDExLjgyNzk5MTYgMjAuNjk0Njg5MiwxMS44MzM0NzMxIDIwLjMyODgxOTUsMTIuMjMyNTg5OCBMMTEuNjk0NzAyMywyMS42NTEyOTgzIEMxMC43NTg3NDQxLDIyLjY3MjMwOCAxMS4xMjg1NTQxLDIzLjUgMTIuNTA5Nzc1MSwyMy41IEwxNS45OTk5OTk5LDIzLjUwMDAwMDIgTDE1Ljk5OTk5OTksMjguMDAxNDI0MSBDMTUuOTk5OTk5OSwyOC44MjkwNjQ4IDE2LjY3MTY1NTksMjkuNTAwMDAwMSAxNy40OTcxMDEsMjkuNTAwMDAwMSBMMjQuNTAyODk5MiwyOS41MDAwMDAxIEMyNS4zMjk3MjUzLDI5LjUwMDAwMDEgMjYuMDAwMDAwMywyOC44MzQ5NzAzIDI2LjAwMDAwMDMsMjguMDAxNDI0MSBMMjYuMDAwMDAwMywyMy41MDAwMDAxIEwyOS40OTAyMjUxLDIzLjUwMDAwMDIgQzMwLjg3NjMzNTcsMjMuNTAwMDAwMiAzMS4yNDM5NTIxLDIyLjY3NTE5MTYgMzAuMzA1NDE2MSwyMS42NTEyOTg1IEwyMS42NzE5MDA4LDEyLjIzMjU4OTggWiBNMjEuMzQxNzQ4LDE0LjM2NDUzMTYgQzIxLjE1MzAwNTYsMTQuMTYzMjA2NCAyMC44NDMzNTE1LDE0LjE2NzA5MTQgMjAuNjU4MjUxNCwxNC4zNjQ1MzE2IEwxMy41LDIxLjk5OTk5OTggTDE3LjUwMDAwMDEsMjEuOTk5OTk5OSBMMTcuNTAwMDAwMiwyNy41MDg5OTU2IEMxNy41MDAwMDAyLDI3Ljc4MDE3MDMgMTcuNzMyOTAyNywyOC4wMDAwMDA4IDE4LjAwMzQyMjksMjguMDAwMDAwOCBMMjMuOTk2NTc3LDI4LjAwMDAwMDggQzI0LjI3NDYwOTcsMjguMDAwMDAwOCAyNC40OTk5OTk3LDI3Ljc3MjEyMDMgMjQuNDk5OTk5NywyNy41MDg5OTU2IEwyNC40OTk5OTk3LDIxLjk5OTk5OTkgTDI4LjUsMjEuOTk5OTk5OSBMMjEuMzQxNzQ4LDE0LjM2NDUzMTYgWicgaWQ9J1NoaWZ0Jz48L3BhdGg+XG5cdFx0ICAgICAgICAgICAgPC9nPlxuXHRcdCAgICAgICAgPC9nPlxuXHRcdCAgICA8L2c+XG5cdFx0PC9zdmc+XCJcblxuXHRzaGlmdEljb24uc3RhdGVzLmFkZFxuXHRcdG9uOlxuXHRcdFx0aHRtbDogXCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0XHRcdDxzdmcgd2lkdGg9JyN7ZXhwb3J0cy5weCgyMCl9cHgnIGhlaWdodD0nI3tleHBvcnRzLnB4KDE4KX1weCcgdmlld0JveD0nMCAwIDIwIDE3JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHhtbG5zOnNrZXRjaD0naHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zJz5cblx0XHRcdCAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNS4yICgyNTIzNSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdFx0XHQgICAgPHRpdGxlPlNoaWZ0PC90aXRsZT5cblx0XHRcdCAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHRcdCAgICA8ZGVmcz48L2RlZnM+XG5cdFx0XHQgICAgPGcgaWQ9J1BhZ2UtMScgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCcgc2tldGNoOnR5cGU9J01TUGFnZSc+XG5cdFx0XHQgICAgICAgIDxnIGlkPSdLZXlib2FyZC9MaWdodC9VcHBlcicgc2tldGNoOnR5cGU9J01TTGF5ZXJHcm91cCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTE0LjAwMDAwMCwgLTEzMC4wMDAwMDApJyBmaWxsPScjMDMwMzAzJz5cblx0XHRcdCAgICAgICAgICAgIDxnIGlkPSdUaGlyZC1Sb3cnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDMuMDAwMDAwLCAxMTguMDAwMDAwKScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCc+XG5cdFx0XHQgICAgICAgICAgICAgICAgPHBhdGggZD0nTTIxLjcwNTIzODgsMTMuMjA1MjM4OCBDMjEuMzE1NzQ2MiwxMi44MTU3NDYyIDIwLjY4NTc1NTksMTIuODE0MjQ0MSAyMC4yOTQ3NjEyLDEzLjIwNTIzODggTDExLjkxNjA3NjcsMjEuNTgzOTIzMyBDMTEuMTMzOTk5MSwyMi4zNjYwMDA5IDExLjM5ODI2MDYsMjMgMTIuNDk3OTEzMSwyMyBMMTYuNSwyMyBMMTYuNSwyOC4wMDkyMjIgQzE2LjUsMjguNTU2NDEzNiAxNi45NDYzMTE0LDI5IDE3LjQ5NzU0NDYsMjkgTDI0LjUwMjQ1NTQsMjkgQzI1LjA1MzM4NCwyOSAyNS41LDI4LjU0OTAyNDggMjUuNSwyOC4wMDkyMjIgTDI1LjUsMjMgTDI5LjUwMjA4NjksMjMgQzMwLjYwNTUwMzgsMjMgMzAuODY2ODI0LDIyLjM2NjgyNCAzMC4wODM5MjMzLDIxLjU4MzkyMzMgTDIxLjcwNTIzODgsMTMuMjA1MjM4OCBaJyBpZD0nU2hpZnQnPjwvcGF0aD5cblx0XHRcdCAgICAgICAgICAgIDwvZz5cblx0XHRcdCAgICAgICAgPC9nPlxuXHRcdFx0ICAgIDwvZz5cblx0XHRcdDwvc3ZnPlwiXG5cdHNoaWZ0SWNvbi5zdGF0ZXMuYW5pbWF0aW9uT3B0aW9ucyA9XG4gIFx0ICB0aW1lOiAuMDFcblxuICBcdGRlbGV0ZUtleSA9IG5ldyBMYXllciBzdXBlckxheWVyOmJvYXJkLCBib3JkZXJSYWRpdXM6ZXhwb3J0cy5weCg1KSwgYmFja2dyb3VuZENvbG9yOlwiI0FBQjNCQ1wiLCBzaGFkb3dZOmV4cG9ydHMucHgoMSksIHNoYWRvd0NvbG9yOlwiIzkyOTQ5OFwiXG4gIFx0ZGVsZXRlS2V5LmNvbnN0cmFpbnRzID0gKGJvdHRvbTo1NiwgdHJhaWxpbmc6Mywgd2lkdGg6NDIsIGhlaWdodDo0MilcbiAgXHRkZWxldGVJY29uID0gbmV3IExheWVyIHN1cGVyTGF5ZXI6ZGVsZXRlS2V5LCB3aWR0aDpleHBvcnRzLnB4KDI0KSwgaGVpZ2h0OmV4cG9ydHMucHgoMTgpLCBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiXG4gIFx0ZGVsZXRlSWNvbi5jb25zdHJhaW50cyA9ICh0b3A6MTMsIGxlYWRpbmc6MTApXG5cbiAgXHRkZWxldGVJY29uLnN0YXRlcy5hZGQgXG4gIFx0XHRvbjogXG4gIFx0XHRcdGh0bWw6IFwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdFx0XHRcdDxzdmcgd2lkdGg9JyN7ZXhwb3J0cy5weCgyNCl9cHgnIGhlaWdodD0nI3tleHBvcnRzLnB4KDE4KX1weCcgdmlld0JveD0nMCAwIDI0IDE4JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHhtbG5zOnNrZXRjaD0naHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zJz5cblx0XHRcdFx0ICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy41LjIgKDI1MjM1KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHRcdFx0ICAgIDx0aXRsZT5CYWNrPC90aXRsZT5cblx0XHRcdFx0ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdFx0XHQgICAgPGRlZnM+PC9kZWZzPlxuXHRcdFx0XHQgICAgPGcgaWQ9J1BhZ2UtMScgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCcgc2tldGNoOnR5cGU9J01TUGFnZSc+XG5cdFx0XHRcdCAgICAgICAgPGcgaWQ9J0tleWJvYXJkL0xpZ2h0L1VwcGVyJyBza2V0Y2g6dHlwZT0nTVNMYXllckdyb3VwJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtMzM5LjAwMDAwMCwgLTEzMC4wMDAwMDApJyBmaWxsPScjMDMwMzAzJz5cblx0XHRcdFx0ICAgICAgICAgICAgPGcgaWQ9J1RoaXJkLVJvdycgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMy4wMDAwMDAsIDExOC4wMDAwMDApJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJz5cblx0XHRcdFx0ICAgICAgICAgICAgICAgIDxwYXRoIGQ9J00zNTEuNjQyNjYzLDIwLjk3NzY5MDMgTDM1NC40NjY3OTUsMTguMTUzNTU4NSBDMzU0Ljc2MDEwNiwxNy44NjAyNDc2IDM1NC43NjM5ODMsMTcuMzgxNDk2MiAzNTQuNDcxMDksMTcuMDg4NjAzIEMzNTQuMTc2MTU1LDE2Ljc5MzY2NzcgMzUzLjcwMTQsMTYuNzk3NjMyOCAzNTMuNDA2MTM1LDE3LjA5Mjg5ODMgTDM1MC41ODIwMDMsMTkuOTE3MDMwMSBMMzQ3Ljc1Nzg3MSwxNy4wOTI4OTgzIEMzNDcuNDY0NTYsMTYuNzk5NTg3NCAzNDYuOTg1ODA5LDE2Ljc5NTcwOTcgMzQ2LjY5MjkxNiwxNy4wODg2MDMgQzM0Ni4zOTc5OCwxNy4zODM1MzgyIDM0Ni40MDE5NDUsMTcuODU4MjkzIDM0Ni42OTcyMTEsMTguMTUzNTU4NSBMMzQ5LjUyMTM0MywyMC45Nzc2OTAzIEwzNDYuNjk3MjExLDIzLjgwMTgyMiBDMzQ2LjQwMzksMjQuMDk1MTMyOSAzNDYuNDAwMDIyLDI0LjU3Mzg4NDMgMzQ2LjY5MjkxNiwyNC44NjY3Nzc2IEMzNDYuOTg3ODUxLDI1LjE2MTcxMjggMzQ3LjQ2MjYwNiwyNS4xNTc3NDc3IDM0Ny43NTc4NzEsMjQuODYyNDgyMiBMMzUwLjU4MjAwMywyMi4wMzgzNTA0IEwzNTMuNDA2MTM1LDI0Ljg2MjQ4MjIgQzM1My42OTk0NDUsMjUuMTU1NzkzMSAzNTQuMTc4MTk3LDI1LjE1OTY3MDggMzU0LjQ3MTA5LDI0Ljg2Njc3NzYgQzM1NC43NjYwMjUsMjQuNTcxODQyMyAzNTQuNzYyMDYsMjQuMDk3MDg3NSAzNTQuNDY2Nzk1LDIzLjgwMTgyMiBMMzUxLjY0MjY2MywyMC45Nzc2OTAzIFogTTMzNy4wNTkzNDUsMjIuMDU5MzQ0NSBDMzM2LjQ3NDI4NSwyMS40NzQyODQ3IDMzNi40ODEzNTEsMjAuNTE4NjQ4OSAzMzcuMDU5MzQ1LDE5Ljk0MDY1NTUgTDM0My43ODk5MTUsMTMuMjEwMDg1MyBDMzQ0LjE4MjA4NCwxMi44MTc5MTYgMzQ0Ljk0ODkyLDEyLjUgMzQ1LjUwNzQ4NCwxMi41IEwzNTYuMDAyMDk4LDEyLjUgQzM1Ny45MzM5MzYsMTIuNSAzNTkuNSwxNC4wNjg4NDc3IDM1OS41LDE2LjAwMTc5ODMgTDM1OS41LDI1Ljk5ODIwMTcgQzM1OS41LDI3LjkzMjE5MTUgMzU3LjkyMzA4OCwyOS41IDM1Ni4wMDIwOTgsMjkuNSBMMzQ1LjUwNzQ4NCwyOS41IEMzNDQuOTUxMDY2LDI5LjUgMzQ0LjE3NzE2OSwyOS4xNzcxNjkzIDM0My43ODk5MTUsMjguNzg5OTE0OCBMMzM3LjA1OTM0NSwyMi4wNTkzNDQ1IFonIGlkPSdCYWNrJz48L3BhdGg+XG5cdFx0XHRcdCAgICAgICAgICAgIDwvZz5cblx0XHRcdFx0ICAgICAgICA8L2c+XG5cdFx0XHRcdCAgICA8L2c+XG5cdFx0XHRcdDwvc3ZnPlwiXG5cbiAgXHRkZWxldGVJY29uLnN0YXRlcy5hZGRcbiAgXHRcdG9mZjogXG4gIFx0XHRcdGh0bWw6IFwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdFx0PHN2ZyB3aWR0aD0nI3tleHBvcnRzLnB4KDI0KX1weCcgaGVpZ2h0PScje2V4cG9ydHMucHgoMTgpfXB4JyB2aWV3Qm94PScwIDAgMjQgMTgnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycgeG1sbnM6c2tldGNoPSdodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMnPlxuXHRcdCAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNS4yICgyNTIzNSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdFx0ICAgIDx0aXRsZT5CYWNrPC90aXRsZT5cblx0XHQgICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0ICAgIDxkZWZzPjwvZGVmcz5cblx0XHQgICAgPGcgaWQ9J1BhZ2UtMScgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCcgc2tldGNoOnR5cGU9J01TUGFnZSc+XG5cdFx0ICAgICAgICA8ZyBpZD0nS2V5Ym9hcmQvTGlnaHQvVXBwZXInIHNrZXRjaDp0eXBlPSdNU0xheWVyR3JvdXAnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC0zMzkuMDAwMDAwLCAtMTMwLjAwMDAwMCknIGZpbGw9JyMwMzAzMDMnPlxuXHRcdCAgICAgICAgICAgIDxnIGlkPSdUaGlyZC1Sb3cnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDMuMDAwMDAwLCAxMTguMDAwMDAwKScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCc+XG5cdFx0ICAgICAgICAgICAgICAgIDxwYXRoIGQ9J00zMzcuMDU5MzQ1LDIyLjA1OTM0NDUgQzMzNi40NzQyODUsMjEuNDc0Mjg0NyAzMzYuNDgxMzUxLDIwLjUxODY0ODkgMzM3LjA1OTM0NSwxOS45NDA2NTU1IEwzNDMuNzg5OTE1LDEzLjIxMDA4NTMgQzM0NC4xODIwODQsMTIuODE3OTE2IDM0NC45NDg5MiwxMi41IDM0NS41MDc0ODQsMTIuNSBMMzU2LjAwMjA5OCwxMi41IEMzNTcuOTMzOTM2LDEyLjUgMzU5LjUsMTQuMDY4ODQ3NyAzNTkuNSwxNi4wMDE3OTgzIEwzNTkuNSwyNS45OTgyMDE3IEMzNTkuNSwyNy45MzIxOTE1IDM1Ny45MjMwODgsMjkuNSAzNTYuMDAyMDk4LDI5LjUgTDM0NS41MDc0ODQsMjkuNSBDMzQ0Ljk1MTA2NiwyOS41IDM0NC4xNzcxNjksMjkuMTc3MTY5MyAzNDMuNzg5OTE1LDI4Ljc4OTkxNDggTDMzNy4wNTkzNDUsMjIuMDU5MzQ0NSBaIE0zNTEuNjQyNjYzLDIwLjk3NzY5MDMgTDM1NC40NjY3OTUsMTguMTUzNTU4NSBDMzU0Ljc2MDEwNiwxNy44NjAyNDc2IDM1NC43NjM5ODMsMTcuMzgxNDk2MiAzNTQuNDcxMDksMTcuMDg4NjAzIEMzNTQuMTc2MTU1LDE2Ljc5MzY2NzcgMzUzLjcwMTQsMTYuNzk3NjMyOCAzNTMuNDA2MTM1LDE3LjA5Mjg5ODMgTDM1MC41ODIwMDMsMTkuOTE3MDMwMSBMMzQ3Ljc1Nzg3MSwxNy4wOTI4OTgzIEMzNDcuNDY0NTYsMTYuNzk5NTg3NCAzNDYuOTg1ODA5LDE2Ljc5NTcwOTcgMzQ2LjY5MjkxNiwxNy4wODg2MDMgQzM0Ni4zOTc5OCwxNy4zODM1MzgyIDM0Ni40MDE5NDUsMTcuODU4MjkzIDM0Ni42OTcyMTEsMTguMTUzNTU4NSBMMzQ5LjUyMTM0MywyMC45Nzc2OTAzIEwzNDYuNjk3MjExLDIzLjgwMTgyMiBDMzQ2LjQwMzksMjQuMDk1MTMyOSAzNDYuNDAwMDIyLDI0LjU3Mzg4NDMgMzQ2LjY5MjkxNiwyNC44NjY3Nzc2IEMzNDYuOTg3ODUxLDI1LjE2MTcxMjggMzQ3LjQ2MjYwNiwyNS4xNTc3NDc3IDM0Ny43NTc4NzEsMjQuODYyNDgyMiBMMzUwLjU4MjAwMywyMi4wMzgzNTA0IEwzNTMuNDA2MTM1LDI0Ljg2MjQ4MjIgQzM1My42OTk0NDUsMjUuMTU1NzkzMSAzNTQuMTc4MTk3LDI1LjE1OTY3MDggMzU0LjQ3MTA5LDI0Ljg2Njc3NzYgQzM1NC43NjYwMjUsMjQuNTcxODQyMyAzNTQuNzYyMDYsMjQuMDk3MDg3NSAzNTQuNDY2Nzk1LDIzLjgwMTgyMiBMMzUxLjY0MjY2MywyMC45Nzc2OTAzIFogTTMzOC43MDk3MiwyMS43MDk3MTk1IEMzMzguMzE3NzUyLDIxLjMxNzc1MjIgMzM4LjMxODk2NSwyMC42ODEwMzQ5IDMzOC43MDk3MiwyMC4yOTAyODA1IEwzNDQuNjQzMjQ1LDE0LjM1Njc1NDcgQzM0NC44NDAyNzYsMTQuMTU5NzI0NSAzNDUuMjI1NjM5LDE0IDM0NS40OTM3NDEsMTQgTDM1NS45OTcyMzksMTQgQzM1Ny4xMDMzMzMsMTQgMzU3Ljk5OTk5OSwxNC44OTcwNjAxIDM1Ny45OTk5OTksMTYuMDA1ODU4NiBMMzU3Ljk5OTk5OSwyNS45OTQxNDEyIEMzNTcuOTk5OTk5LDI3LjEwMTk0NjQgMzU3LjEwNjQ1NywyNy45OTk5OTk5IDM1NS45OTcyMzksMjcuOTk5OTk5OSBMMzQ1LjQ5Mzc0MSwyOCBDMzQ1LjIyMTA1NiwyOCAzNDQuODQwNjQzLDI3Ljg0MDY0MzEgMzQ0LjY0MzI0NiwyNy42NDMyNDUzIEwzMzguNzA5NzIsMjEuNzA5NzE5NSBaJyBpZD0nQmFjayc+PC9wYXRoPlxuXHRcdCAgICAgICAgICAgIDwvZz5cblx0XHQgICAgICAgIDwvZz5cblx0XHQgICAgPC9nPlxuXHRcdDwvc3ZnPlwiXG5cblxuICBcdGRlbGV0ZUtleS5vbiBFdmVudHMuVG91Y2hTdGFydCwgLT5cbiAgXHRcdGRlbGV0ZUtleS5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCJcbiAgXHRcdGRlbGV0ZUljb24uc3RhdGVzLnN3aXRjaEluc3RhbnQoXCJvblwiKVxuXG4gIFx0ZGVsZXRlS2V5Lm9uIEV2ZW50cy5Ub3VjaEVuZCwgLT5cbiAgXHRcdGRlbGV0ZUtleS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNBQUIzQkNcIlxuICBcdFx0ZGVsZXRlSWNvbi5zdGF0ZXMuc3dpdGNoSW5zdGFudChcIm9mZlwiKVxuXG4gIFx0ZGVsZXRlSWNvbi5zdGF0ZXMuc3dpdGNoSW5zdGFudChcIm9mZlwiKVxuXG5cdHNoaWZ0SWNvbi5vbiBFdmVudHMuQ2xpY2ssIC0+XG5cdFx0c2hpZnRJY29uLnN0YXRlcy5uZXh0KClcblx0XHRpZiBzaGlmdEljb24uc3RhdGVzLnN0YXRlID09IFwib25cIlxuXHRcdFx0c2hpZnRLZXkuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiXG5cdFx0XHRmb3Iga2V5IGluIGtleXNBcnJheVxuXHRcdFx0XHRrZXkuc3R5bGVbJ3RleHQtdHJhbnNmb3JtJ10gPSAndXBwZXJjYXNlJ1xuXHRcdFx0Ym94LnN0eWxlWyd0ZXh0LXRyYW5zZm9ybSddID0gJ3VwcGVyY2FzZSdcblx0XHRlbHNlIFxuXHRcdFx0c2hpZnRLZXkuYmFja2dyb3VuZENvbG9yID0gXCIjQUFCM0JDXCJcblx0XHRcdGZvciBrZXkgaW4ga2V5c0FycmF5XG5cdFx0XHRcdGtleS5zdHlsZVtcInRleHQtdHJhbnNmb3JtXCJdID0gJ2xvd2VyY2FzZSdcblx0XHRcdGJveC5zdHlsZVtcInRleHQtdHJhbnNmb3JtXCJdID0gJ2xvd2VyY2FzZSdcblxuXHRmb3IgbGV0dGVyIGluIGxldHRlcnNBcnJheVxuXHRcdGluZGV4ID0gbGV0dGVyc0FycmF5LmluZGV4T2YobGV0dGVyKSBcblx0XHRrZXkgPSBuZXcgTGF5ZXIgbmFtZTpsZXR0ZXIsIHN1cGVyTGF5ZXI6Ym9hcmQsIGJvcmRlclJhZGl1czo1KmV4cG9ydHMuc2NhbGUsIGJhY2tncm91bmRDb2xvcjpcIndoaXRlXCIsIGNvbG9yOlwiYmxhY2tcIiwgc2hhZG93WTpleHBvcnRzLnB4KDEpLCBzaGFkb3dDb2xvcjpcIiM5Mjk0OThcIlxuXHRcdGtleVBvcFVwLmJyaW5nVG9Gcm9udCgpXG5cdFx0Ym94LmJyaW5nVG9Gcm9udCgpXG5cdFx0aWYgZXhwb3J0cy5zY2FsZSA9PSAyXG5cdFx0XHRrZXkuY29uc3RyYWludHMgPSAod2lkdGg6MzIsIGhlaWdodDo0Milcblx0XHRcdGtleVBvcFVwLmNvbnN0cmFpbnRzID0gKHdpZHRoOjY1LCBoZWlnaHQ6MTIyKVxuXHRcdFx0cGF0aC5jb25zdHJhaW50cyA9ICh3aWR0aDo2NSwgaGVpZ2h0OiAxMjIpXG5cdFx0XHRwYXRoLnkgPSAxMFxuXHRcdFx0QHBhdGhXaWR0aCA9IGV4cG9ydHMucHgoNjUpXG5cdFx0XHRAcGF0aEhlaWdodCA9IGV4cG9ydHMucHgoMTIyKVxuXHRcdFx0QGtleUhlaWdodCA9IGV4cG9ydHMucHgoMzIpXG5cdFx0XHRAa2V5V2lkdGggPSBleHBvcnRzLnB4KDQ0KVxuXHRcdFx0QGxpbmVIZWlnaHQgPSBAa2V5V2lkdGggLSAxNyArIFwicHhcIlxuXHRcdFx0Ym94LmNvbnN0cmFpbnRzID0gKHdpZHRoOjMyLCBoZWlnaHQ6NDQpXG5cdFx0XHRib3guY2VudGVyWCgpXG5cdFx0XHRib3gueSA9IGV4cG9ydHMucHgoMjgpXG5cblx0XHRpZiBleHBvcnRzLnNjYWxlID09IDNcblx0XHRcdGtleS5jb25zdHJhaW50cyA9ICh3aWR0aDozNSwgaGVpZ2h0OjQ2KVxuXHRcdFx0a2V5UG9wVXAuY29uc3RyYWludHMgPSAod2lkdGg6NjgsIGhlaWdodDoxMjIpXG5cdFx0XHRAa2V5SGVpZ2h0ID0gZXhwb3J0cy5weCgxMjIpXG5cdFx0XHRAa2V5V2lkdGggPSBleHBvcnRzLnB4KDY1KVxuXHRcdFx0QGxpbmVIZWlnaHQgPSBAa2V5V2lkdGggKyBcInB4XCJcblx0XHRcdEBwYXRoV2lkdGggPSBleHBvcnRzLnB4KDY4KVxuXHRcdFx0QHBhdGhIZWlnaHQgPSBleHBvcnRzLnB4KDEyOClcblx0XHRcdHBhdGgueSA9IDBcblxuXG5cdFx0XHRib3guY29uc3RyYWludHMgPSAod2lkdGg6MzUsIGhlaWdodDo0Nilcblx0XHRcdGJveC5jZW50ZXJYKClcblx0XHRcdGJveC55ID0gZXhwb3J0cy5weCgyOClcblxuXHRcdGlmIGV4cG9ydHMud2lkdGggPT0gNjQwXG5cdFx0XHRrZXkuY29uc3RyYWludHMgPSAod2lkdGg6MjYsIGhlaWdodDozOSlcblxuXHRcdGtleVBvcFVwLnZpc2libGUgPSBmYWxzZVxuXG5cdFx0ZXhwb3J0cy5sYXlvdXQoKVxuXHRcdGtleS5zdHlsZSA9IHtcblx0XHRcdFwiZm9udC1zaXplXCIgOiAyNSAqIGV4cG9ydHMuc2NhbGUgKyBcInB4XCJcblx0XHRcdFwiZm9udC13ZWlnaHRcIiA6IDMwMFxuXHRcdFx0XCJmb250LWZhbWlseVwiIDogJy1hcHBsZS1zeXN0ZW0sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYnXG5cdFx0XHQndGV4dC1hbGlnbicgOiAnY2VudGVyJ1xuXHRcdFx0J2xpbmUtaGVpZ2h0JyA6IGtleS5oZWlnaHQgLSBleHBvcnRzLnB4KDIpICsgXCJweFwiXG5cdFx0fVxuXHRcdGtleS5odG1sID0gbGV0dGVyXG5cdFx0aWYgaW5kZXggPD0gcm93c01hcFswXS5lbmRJbmRleFxuXHRcdFx0cm93SW5kZXggPSBpbmRleCAtIHJvd3NNYXBbMF0uc3RhcnRJbmRleFxuXHRcdFx0a2V5LnggPSByb3dzTWFwWzBdLnBhZGRpbmcgKyAocm93SW5kZXgqc3BhY2VyKSArIChyb3dJbmRleCprZXkud2lkdGgpXG5cdFx0XHRrZXkueSA9IHJvd3NNYXBbMF0ubWFyZ2luVG9wXG5cdFx0aWYgaW5kZXggPiByb3dzTWFwWzBdLmVuZEluZGV4ICYmIGluZGV4IDw9IHJvd3NNYXBbMV0uZW5kSW5kZXhcblx0XHRcdHJvd0luZGV4ID0gaW5kZXggLSByb3dzTWFwWzFdLnN0YXJ0SW5kZXhcblx0XHRcdGtleS54ID0gcm93c01hcFsxXS5wYWRkaW5nICsgKHJvd0luZGV4KnNwYWNlcikgKyAocm93SW5kZXgqa2V5LndpZHRoKVxuXHRcdFx0a2V5LnkgPSByb3dzTWFwWzFdLm1hcmdpblRvcCArIGtleS5oZWlnaHRcblx0XHRpZiBpbmRleCA+IHJvd3NNYXBbMV0uZW5kSW5kZXhcblx0XHRcdHJvd0luZGV4ID0gaW5kZXggLSByb3dzTWFwWzJdLnN0YXJ0SW5kZXhcblx0XHRcdGtleS54ID0gcm93c01hcFsyXS5wYWRkaW5nICsgKHJvd0luZGV4KnNwYWNlcikgKyAocm93SW5kZXgqa2V5LndpZHRoKVxuXHRcdFx0a2V5LnkgPSByb3dzTWFwWzJdLm1hcmdpblRvcCArIGtleS5oZWlnaHQgKiAyXG5cdFx0cGF0aC5odG1sID0gXCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblxuXHRcdDxzdmcgd2lkdGg9JyN7QHBhdGhXaWR0aH1weCcgaGVpZ2h0PScje0BwYXRoSGVpZ2h0fScgdmlld0JveD0nMCAwIDYzIDExNCcgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyB4bWxuczpza2V0Y2g9J2h0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaC9ucyc+XG5cdFx0ICAgIDx0aXRsZT5SZWN0YW5nbGUgNDQgQ29weTwvdGl0bGU+XG5cdFx0ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdCAgICA8ZGVmcz5cblx0XHQgICAgICAgIDxmaWx0ZXIgeD0nLTUwJScgeT0nLTUwJScgd2lkdGg9JzIwMCUnIGhlaWdodD0nMjAwJScgZmlsdGVyVW5pdHM9J29iamVjdEJvdW5kaW5nQm94JyBpZD0nZmlsdGVyLTEnPlxuXHRcdCAgICAgICAgICAgIDxmZU9mZnNldCBkeD0nMCcgZHk9JzAnIGluPSdTb3VyY2VBbHBoYScgcmVzdWx0PSdzaGFkb3dPZmZzZXRPdXRlcjEnPjwvZmVPZmZzZXQ+XG5cdFx0ICAgICAgICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0nMS41JyBpbj0nc2hhZG93T2Zmc2V0T3V0ZXIxJyByZXN1bHQ9J3NoYWRvd0JsdXJPdXRlcjEnPjwvZmVHYXVzc2lhbkJsdXI+XG5cdFx0ICAgICAgICAgICAgPGZlQ29sb3JNYXRyaXggdmFsdWVzPScwIDAgMCAwIDAgICAwIDAgMCAwIDAgICAwIDAgMCAwIDAgIDAgMCAwIDAuMjEgMCcgaW49J3NoYWRvd0JsdXJPdXRlcjEnIHR5cGU9J21hdHJpeCcgcmVzdWx0PSdzaGFkb3dNYXRyaXhPdXRlcjEnPjwvZmVDb2xvck1hdHJpeD5cblx0XHQgICAgICAgICAgICA8ZmVNZXJnZT5cblx0XHQgICAgICAgICAgICAgICAgPGZlTWVyZ2VOb2RlIGluPSdzaGFkb3dNYXRyaXhPdXRlcjEnPjwvZmVNZXJnZU5vZGU+XG5cdFx0ICAgICAgICAgICAgICAgIDxmZU1lcmdlTm9kZSBpbj0nU291cmNlR3JhcGhpYyc+PC9mZU1lcmdlTm9kZT5cblx0XHQgICAgICAgICAgICA8L2ZlTWVyZ2U+XG5cdFx0ICAgICAgICA8L2ZpbHRlcj5cblx0XHQgICAgPC9kZWZzPlxuXHRcdCAgICA8ZyBpZD0nUGFnZS0xJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJyBza2V0Y2g6dHlwZT0nTVNQYWdlJz5cblx0XHQgICAgICAgIDxnIGlkPSdpUGhvbmUtNicgc2tldGNoOnR5cGU9J01TQXJ0Ym9hcmRHcm91cCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTExOC4wMDAwMDAsIC0yNDAuMDAwMDAwKScgc3Ryb2tlPScjQzdDN0M3JyBmaWx0ZXI9J3VybCgjZmlsdGVyLTEpJyBzdHJva2Utd2lkdGg9JzAuNScgXG5cdFx0ICAgICAgICBmaWxsPScjRkZGRkZGJyBvcGFjaXR5PScwLjk5ODM2NzUzNyc+XG5cdFx0ICAgICAgICAgPHBhdGggZD0nTTEzNCwzMDYgQzEzNCwzMDYgMTIxLDI5NSAxMjEsMjkwIEMxMjEsMjc5LjYxNjc4OCAxMjEsMjUzLjAwMTQ1NiAxMjEsMjUzLjAwMTQ1NiBDMTIxLDI0Ny40Nzc4MDQgMTI1LjQ4NTgzMiwyNDMgMTMxLjAwMjc3NCwyNDMgTDE2Ny44NjIxMjcsMjQzIEMxNzMuMzg2NTA3LDI0MyAxNzcuODgwODYyLDI0Ny40Njk5MDUgXG5cdFx0ICAgICAgICAgMTc3LjkwMDA0NCwyNTIuOTk3MjcxIEMxNzcuOTAwMDQ0LDI1Mi45OTcyNzEgMTc4LDI4MCAxNzcuOTk5OTk5LDI5MCBDMTc3Ljk5OTk5OSwyOTUuMDA2NTUzIDE2NSwzMDYgMTY1LDMwNiBMMTY1LDM0Ni4wNDk1OTQgXG5cdFx0ICAgICAgICAgQzE2NSwzNDguODA2ODA3IDE2Mi43NzA1NTYsMzUxLjA0MTk2OSAxNjAuMDAyMDk4LDM1MS4wNDE5NjkgTDEzOC45OTc5MDIsMzUxLjA0MTk2OSBcblx0XHQgICAgICAgICAgQzEzNi4yMzc2MzcsMzUxLjA0MTk2OSAxMzQsMzQ4LjgwODMzMSAxMzQsMzQ2LjA0OTU5NCBMMTM0LDMwNiBaJyBpZD0nUmVjdGFuZ2xlLTQ0LUNvcHknIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDE0OS41MDAwMDAsIDI5Ny4wMjA5ODUpIHNjYWxlKC0xLCAxKSB0cmFuc2xhdGUoLTE0OS41MDAwMDAsIC0yOTcuMDIwOTg1KSAnPlxuXHRcdCAgICAgICAgICA8L3BhdGg+XG5cdFx0ICAgICAgICA8L2c+XG5cdFx0ICAgIDwvZz5cblx0XHQ8L3N2Zz5cIlxuXHRcdGtleXNBcnJheS5wdXNoIGtleVxuXG5cblx0XHRrZXkub24gRXZlbnRzLlRvdWNoU3RhcnQsIC0+XG5cdFx0XHRrZXlQb3BVcC52aXNpYmxlID0gdHJ1ZVx0XG5cdFx0XHRib3guaHRtbCA9IEAubmFtZVxuXHRcdFx0a2V5UG9wVXAubWF4WSA9IEAubWF4WVxuXHRcdFx0a2V5UG9wVXAubWlkWCA9IEAubWlkWFxuXG5cdFx0a2V5Lm9uIEV2ZW50cy5Ub3VjaE1vdmUsIC0+XG5cdFx0XHRib3guaHRtbCA9IEAubmFtZVxuXHRcdFx0a2V5UG9wVXAubWF4WSA9IEAubWF4WVxuXHRcdFx0a2V5UG9wVXAubWlkWCA9IEAubWlkWFx0XG5cblx0XHRrZXkub24gRXZlbnRzLlRvdWNoRW5kLCAtPlxuXHRcdFx0a2V5UG9wVXAudmlzaWJsZSA9IGZhbHNlXG5cdFx0XHRpZiBzaGlmdEljb24uc3RhdGVzLnN0YXRlID09IFwib25cIlxuXHRcdFx0XHRzaGlmdEljb24uc3RhdGVzLnN3aXRjaChcImRlZmF1bHRcIilcblx0XHRcdFx0Zm9yIGtleSBpbiBrZXlzQXJyYXlcblx0XHRcdFx0XHRrZXkuc3R5bGVbJ3RleHQtdHJhbnNmb3JtJ10gPSAnbG93ZXJjYXNlJ1xuXHRcdFx0XHRib3guc3R5bGVbJ3RleHQtdHJhbnNmb3JtJ10gPSAnbG93ZXJjYXNlJ1xuXG5cblxuXG5cdG51bUtleSA9IG5ldyBMYXllciBzdXBlckxheWVyOmJvYXJkLCBuYW1lOlwibnVtXCIsIGJvcmRlclJhZGl1czpleHBvcnRzLnB4KDUpLCBiYWNrZ3JvdW5kQ29sb3I6XCIjQUFCM0JDXCIsIHNoYWRvd1k6ZXhwb3J0cy5weCgxKSwgc2hhZG93Q29sb3I6XCIjOTI5NDk4XCIsIGNvbG9yOlwiYmxhY2tcIlxuXHRudW1LZXkuY29uc3RyYWludHMgPSAod2lkdGg6NDAuNSwgaGVpZ2h0OjQyLCBib3R0b206NCwgbGVhZGluZzozKVxuXHRudW1LZXkuaHRtbCA9IFwiMTIzXCJcblx0bnVtS2V5LnN0eWxlID0ge1xuXHRcdFwiZm9udC1zaXplXCIgOiBleHBvcnRzLnB4KDE2KSArIFwicHhcIlxuXHRcdFwiZm9udC13ZWlnaHRcIiA6IDQwMFxuXHRcdFwiZm9udC1mYW1pbHlcIiA6ICctYXBwbGUtc3lzdGVtLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmJ1xuXHRcdCd0ZXh0LWFsaWduJyA6ICdjZW50ZXInXG5cdFx0J2xpbmUtaGVpZ2h0JyA6IGV4cG9ydHMucHgoNDIpICsgXCJweFwiXG5cblx0fVxuXG5cdGV4cG9ydHMubGF5b3V0KClcblx0ZW1vamlLZXkgPSBuZXcgTGF5ZXIgc3VwZXJMYXllcjpib2FyZCwgbmFtZTpcImVtb2ppXCIsIGJvcmRlclJhZGl1czpleHBvcnRzLnB4KDUpLCBiYWNrZ3JvdW5kQ29sb3I6XCIjQUFCM0JDXCIsIHNoYWRvd1k6ZXhwb3J0cy5weCgxKSwgc2hhZG93Q29sb3I6XCIjOTI5NDk4XCJcblx0ZW1vamlLZXkuY29uc3RyYWludHMgPSAod2lkdGg6NDEsIGhlaWdodDo0MiwgYm90dG9tOjQsIGxlYWRpbmc6W251bUtleSwgNl0pXG5cdGVtb2ppS2V5Lmh0bWwgPSBcIjw/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyc/PlxuXHRcdDxzdmcgd2lkdGg9JyN7ZXhwb3J0cy5weCgyMCl9cHgnIGhlaWdodD0nI3tleHBvcnRzLnB4KDIwKX1weCcgdmlld0JveD0nMCAwIDIwIDIwJyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHhtbG5zOnNrZXRjaD0naHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zJz5cblx0XHQgICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjUuMiAoMjUyMzUpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPlxuXHRcdCAgICA8dGl0bGU+RW1vamk8L3RpdGxlPlxuXHRcdCAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHQgICAgPGRlZnM+PC9kZWZzPlxuXHRcdCAgICA8ZyBpZD0nUGFnZS0xJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJyBza2V0Y2g6dHlwZT0nTVNQYWdlJz5cblx0XHQgICAgICAgIDxnIGlkPSdLZXlib2FyZC9MaWdodC9Mb3dlcicgc2tldGNoOnR5cGU9J01TTGF5ZXJHcm91cCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTYwLjAwMDAwMCwgLTE4MS4wMDAwMDApJyBmaWxsPScjMDMwMzAzJz5cblx0XHQgICAgICAgICAgICA8ZyBpZD0nQm90dG9tLVJvdycgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMy4wMDAwMDAsIDE3MC4wMDAwMDApJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJz5cblx0XHQgICAgICAgICAgICAgICAgPHBhdGggZD0nTTY2Ljc1LDMwLjUgQzcyLjEzNDc3NjMsMzAuNSA3Ni41LDI2LjEzNDc3NjMgNzYuNSwyMC43NSBDNzYuNSwxNS4zNjUyMjM3IDcyLjEzNDc3NjMsMTEgNjYuNzUsMTEgQzYxLjM2NTIyMzcsMTEgNTcsMTUuMzY1MjIzNyA1NywyMC43NSBDNTcsMjYuMTM0Nzc2MyA2MS4zNjUyMjM3LDMwLjUgNjYuNzUsMzAuNSBaIE02Ni43NSwyOS41IEM3MS41ODI0OTE2LDI5LjUgNzUuNSwyNS41ODI0OTE2IDc1LjUsMjAuNzUgQzc1LjUsMTUuOTE3NTA4NCA3MS41ODI0OTE2LDEyIDY2Ljc1LDEyIEM2MS45MTc1MDg0LDEyIDU4LDE1LjkxNzUwODQgNTgsMjAuNzUgQzU4LDI1LjU4MjQ5MTYgNjEuOTE3NTA4NCwyOS41IDY2Ljc1LDI5LjUgWiBNNjMuNzUsMTkgQzY0LjQ0MDM1NTksMTkgNjUsMTguNDQwMzU1OSA2NSwxNy43NSBDNjUsMTcuMDU5NjQ0MSA2NC40NDAzNTU5LDE2LjUgNjMuNzUsMTYuNSBDNjMuMDU5NjQ0MSwxNi41IDYyLjUsMTcuMDU5NjQ0MSA2Mi41LDE3Ljc1IEM2Mi41LDE4LjQ0MDM1NTkgNjMuMDU5NjQ0MSwxOSA2My43NSwxOSBaIE02OS43NSwxOSBDNzAuNDQwMzU1OSwxOSA3MSwxOC40NDAzNTU5IDcxLDE3Ljc1IEM3MSwxNy4wNTk2NDQxIDcwLjQ0MDM1NTksMTYuNSA2OS43NSwxNi41IEM2OS4wNTk2NDQxLDE2LjUgNjguNSwxNy4wNTk2NDQxIDY4LjUsMTcuNzUgQzY4LjUsMTguNDQwMzU1OSA2OS4wNTk2NDQxLDE5IDY5Ljc1LDE5IFogTTU5Ljg4NzYzMzQsMjIuMTY0MTQ0NCBDNTkuNjM5MDMxNiwyMS4zODMxMzQgNjAuMDY1OTE4LDIwLjk3ODUxNTYgNjAuODUzMDk1MSwyMS4yMzI5MzA0IEM2MC44NTMwOTUxLDIxLjIzMjkzMDQgNjMuMDkzNzUwMywyMi4yMTI1IDY2Ljc1MDAwMDEsMjIuMjEyNSBDNzAuNDA2MjQ5OSwyMi4yMTI1IDcyLjY0NjkwNDcsMjEuMjMyOTMwNCA3Mi42NDY5MDQ3LDIxLjIzMjkzMDQgQzczLjQyODcxNjIsMjAuOTY2MjE1MyA3My44ODEyNDYzLDIxLjQwNDQwOTcgNzMuNjA1ODQ3NywyMi4xODA3NDM3IEM3My42MDU4NDc3LDIyLjE4MDc0MzcgNzIuNiwyNy41NzUgNjYuNzUsMjcuNTc1IEM2MC45LDI3LjU3NSA1OS44ODc2MzM0LDIyLjE2NDE0NDQgNTkuODg3NjMzNCwyMi4xNjQxNDQ0IFogTTY2Ljc1LDIzLjE4NzUgQzY0LjA2ODc1LDIzLjE4NzUgNjEuODU0NDA1NSwyMi40NzM3ODIxIDYxLjg1NDQwNTUsMjIuNDczNzgyMSBDNjEuMzI3MzAxOSwyMi4zMjk0OCA2MS4xNzgxMjMzLDIyLjU3MjE2MTUgNjEuNTYzOTU1NSwyMi45NTcwNzUgQzYxLjU2Mzk1NTUsMjIuOTU3MDc1IDYyLjM2MjUsMjQuNjUgNjYuNzUsMjQuNjUgQzcxLjEzNzUsMjQuNjUgNzEuOTUwODUwMywyMi45NDM4MzA0IDcxLjk1MDg1MDMsMjIuOTQzODMwNCBDNzIuMzA5MzY1OSwyMi41Mzk5Mjc4IDcyLjE2OTA3OTMsMjIuMzM1OTg0NCA3MS42MzU0MjczLDIyLjQ3NjM0OSBDNzEuNjM1NDI3MywyMi40NzYzNDkgNjkuNDMxMjUsMjMuMTg3NSA2Ni43NSwyMy4xODc1IFonIGlkPSdFbW9qaSc+PC9wYXRoPlxuXHRcdCAgICAgICAgICAgIDwvZz5cblx0XHQgICAgICAgIDwvZz5cblx0XHQgICAgPC9nPlxuXHRcdDwvc3ZnPlwiXG5cdGVtb2ppS2V5LnN0eWxlID0ge1xuXHRcdFwicGFkZGluZy10b3BcIjogZXhwb3J0cy5weCgxMSkgKyBcInB4XCJcblx0XHRcInBhZGRpbmctbGVmdFwiOiBleHBvcnRzLnB4KDExKSArIFwicHhcIlxuXHR9XG5cblx0ZW1vamlGb3JtYXR0ZXIgPSAoc3RyaW5nKSAtPlxuXHRcdHVuaWNvZGVGb3JtYXQgPSBcIlwiXG5cdFx0aWYgc3RyaW5nWzBdID09IFwiRVwiIHx8IHN0cmluZ1swXSA9PSBcIjNcIiB8fCBzdHJpbmdbMF0gPT0gXCIyXCIgfHwgc3RyaW5nWzBdID09IFwiQ1wiXG5cdFx0XHRhcnJheU9mQ29kZXMgPSBzdHJpbmcuc3BsaXQoXCIgXCIpXG5cdFx0XHRmb3IgY29kZSBpbiBhcnJheU9mQ29kZXNcblx0XHRcdFx0dW5pY29kZUZvcm1hdCA9IHVuaWNvZGVGb3JtYXQgKyBcIiVcIiArIGNvZGVcblx0XHRlbHNlIFxuXHRcdFx0YXJyYXlPZkNvZGVzID0gc3RyaW5nLnNwbGl0KFwiIFwiKVxuXHRcdFx0dW5pY29kZUZvcm1hdCA9IFwiJUYwJTlGXCJcblx0XHRcdGZvciBjb2RlIGluIGFycmF5T2ZDb2Rlc1xuXHRcdFx0XHR1bmljb2RlRm9ybWF0ID0gdW5pY29kZUZvcm1hdCArIFwiJVwiICsgY29kZVxuXHRcdHJldHVybiB1bmljb2RlRm9ybWF0XG5cblx0ZXhwb3J0cy5sYXlvdXQoKVxuXHRlbW9qaVNlY3Rpb25zID0gW1wiRnJlcXVuZXRseSBVc2VkXCIsIFwiU21pbGV5cyAmIFBlb3BsZVwiLCBcIkFuaW1hbHMgJiBOYXR1cmVcIiwgXCJGb29kICYgRHJpbmtcIiwgXCJBY3Rpdml0eVwiLCBcIlRyYXZlbCAmIFBsYWNlc1wiLCBcIk9iamVjdHNcIiwgXCJTeW1ib2xzXCIsIFwiRmxhZ3NcIl1cblx0cmF3RW1vamlzID0gW1wiOTggODBcIiwgXCI5OCBBQ1wiLCBcIjk4IDgxXCIsIFwiOTggODJcIiwgXCI5OCA4M1wiLCBcIjk4IDg0XCIsIFwiOTggODVcIiwgXCI5OCA4NlwiLCBcIjk4IDg3XCIsIFwiOTggODlcIiwgXCI5OCA4YVwiLCBcIjk5IDgyXCIsIFwiOTkgODNcIiwgXCJFMiA5OCBCQSBFRiBCOCA4RlwiLCBcIjk4IDhCXCIgLCBcIjk4IDhDXCIsIFwiOTggOERcIiwgXCI5OCA5OFwiLCBcIjk4IDk3XCIsIFwiOTggOTlcIiwgXCI5OCA5QVwiLCBcIjk4IDlDXCIsIFwiOTggOURcIiwgXCI5OCA5QlwiLCBcIkE0IDkxXCIsIFwiQTQgOTNcIiwgXCI5OCA4RVwiLCBcIkE0IDk3XCIsIFwiOTggOEZcIiwgXCI5OCBCNlwiLCBcIjk4IDkwXCIsIFwiOTggOTFcIiwgXCI5OCA5MlwiLCBcIjk5IDg0XCIsIFwiQTQgOTRcIiwgXCI5OCBCM1wiLCBcIjk4IDlFXCIsIFwiOTggOUZcIiwgXCI5OCBBMFwiLCBcIjk4IEExXCIsIFwiOTggOTRcIiwgXCI5OCA5NVwiLCBcIjk5IDgxXCIsIFwiRTIgOTggQjkgRUYgQjggOEZcIiwgXCI5OCBBM1wiLCBcIjk4IDk2XCIsIFwiOTggQUJcIiwgXCI5OCBBOVwiLCBcIjk4IEE0XCIsIFwiOTggQUVcIiwgXCI5OCBCMVwiLCBcIjk4IEE4XCIsIFwiOTggQjBcIiwgXCI5OCBBRlwiLCBcIjk4IEE2XCIsIFwiOTggQTdcIiwgXCI5OCBBMlwiLCBcIjk4IEE1XCIsIFwiOTggQUFcIiwgXCI5OCA5M1wiLCBcIjk4IEFEXCIsIFwiOTggQjVcIiwgXCI5OCBCMlwiLCBcIkE0IDkwXCIsIFwiOTggQjdcIiwgXCJBNCA5MlwiLCBcIkE0IDk1XCIsIFwiOTggQjRcIiwgXCI5MiBBNFwiLCBcIjkyIEE5XCIsIFwiOTggODhcIiwgXCI5MSBCRlwiLCBcIjkxIEI5XCIsIFwiOTEgQkFcIiwgXCI5MiA4MFwiLCBcIjkxIEJCXCIsIFwiOTEgQkRcIiwgXCJBNCA5NlwiLCBcIjk4IEJBXCIsIFwiOTggQjhcIiwgXCI5OCBCOVwiLCBcIjk4IEJCXCIsIFwiOTggQkNcIiwgXCI5OCBCRFwiLCBcIjk5IDgwXCIsIFwiOTggQkZcIiwgXCI5OCBCRVwiLCBcIjk5IDhDXCIsIFwiOTEgOEZcIiwgXCI5MSA4QlwiLCBcIjkxIDhEXCIsIFwiOTEgOEVcIiwgXCI5MSA4QVwiLCBcIkUyIDlDIDhBXCIsIFwiRTIgOUMgOEMgRUYgQjggOEZcIiwgXCI5MSA4Q1wiLCBcIkUyIDlDIDhCXCIsIFwiOTEgOTBcIiwgXCI5MiBBQVwiLCBcIjk5IDhGXCIsIFwiRTIgOTggOUQgRUYgQjggOEZcIiwgXCI5MSA4NlwiLCBcIjkxIDg3XCIsIFwiOTEgODhcIiwgXCI5MSA4OVwiLCBcIjk2IDk1XCIsIFwiOTYgOTBcIiwgXCJBNCA5OFwiLCBcIjk2IDk2XCIsIFwiRTIgOUMgOEQgRUYgQjggOEZcIiwgXCI5MiA4NVwiLCBcIjkxIDg0XCIsIFwiOTEgODVcIiwgXCI5MSA4MlwiLCBcIjkxIDgzXCIsIFwiOTEgODFcIiwgXCI5MSA4MFwiLCBcIjkxIEE0XCIsIFwiOTEgQTVcIiwgXCI5NyBBM1wiLCBcIjkxIEI2XCIsIFwiOTEgQTZcIiwgXCI5MSBBN1wiLCBcIjkxIEE4XCIsIFwiOTEgQTlcIiwgXCI5MSBCMVwiLCBcIjkxIEI0XCIsIFwiOTEgQjVcIiwgXCI5MSBCMlwiLCBcIjkxIEIzXCIsIFwiOTEgQUVcIiwgXCI5MSBCN1wiLCBcIjkyIDgyXCIsIFwiOTUgQjVcIiwgXCI4RSA4NVwiLCBcIjkxIEJDXCIsIFwiOTEgQjhcIiwgXCI5MSBCMFwiLCBcIjlBIEI2XCIsIFwiOEYgODNcIiwgXCI5MiA4M1wiLCBcIjkxIEFGXCIsIFwiOTEgQUJcIiwgXCI5MSBBQ1wiLCBcIjkxIEFEXCIsIFwiOTkgODdcIiwgXCI5MiA4MVwiLCBcIjk5IDg1XCIsIFwiOTkgODZcIiwgXCI5OSA4QlwiLCBcIjk5IDhFXCIsIFwiOTkgOERcIiwgXCI5MiA4N1wiLCBcIjkyIDg2XCIsIFwiOTIgOTFcIiwgXCI5MSBBOSBFMiA4MCA4RCBFMiA5RCBBNCBFRiBCOCA4RiBFMiA4MCA4RCBGMCA5RiA5MSBBOVwiLCBcIjkxIEE4IEUyIDgwIDhEIEUyIDlEIEE0IEVGIEI4IDhGIEUyIDgwIDhEIEYwIDlGIDkxIEE4XCIsIFwiOTIgOEZcIiwgXCI5MSBBOSBFMiA4MCA4RCBFMiA5RCBBNCBFRiBCOCA4RiBFMiA4MCA4RCBGMCA5RiA5MiA4QiBFMiA4MCA4RCBGMCA5RiA5MSBBOVwiLCBcIjkxIEE4IEUyIDgwIDhEIEUyIDlEIEE0IEVGIEI4IDhGIEUyIDgwIDhEIEYwIDlGIDkyIDhCIEUyIDgwIDhEIEYwIDlGIDkxIEE4XCIsIFwiOTEgQUFcIiwgXCI5MSBBOCBFMiA4MCA4RCBGMCA5RiA5MSBBOSBFMiA4MCA4RCBGMCA5RiA5MSBBN1wiLCBcIjkxIEE4IEUyIDgwIDhEIEYwIDlGIDkxIEE5IEUyIDgwIDhEIEYwIDlGIDkxIEE3IEUyIDgwIDhEIEYwIDlGIDkxIEE2XCIsIFwiOTEgQTggRTIgODAgOEQgRjAgOUYgOTEgQTkgRTIgODAgOEQgRjAgOUYgOTEgQTYgRTIgODAgOEQgRjAgOUYgOTEgQTZcIiwgXCI5MSBBOCBFMiA4MCA4RCBGMCA5RiA5MSBBOSBFMiA4MCA4RCBGMCA5RiA5MSBBNyBFMiA4MCA4RCBGMCA5RiA5MSBBN1wiLCBcIjkxIEE5IEUyIDgwIDhEIEYwIDlGIDkxIEE5IEUyIDgwIDhEIEYwIDlGIDkxIEE2XCIsIFwiOTEgQTkgRTIgODAgOEQgRjAgOUYgOTEgQTkgRTIgODAgOEQgRjAgOUYgOTEgQTdcIiwgXCI5MSBBOSBFMiA4MCA4RCBGMCA5RiA5MSBBOSBFMiA4MCA4RCBGMCA5RiA5MSBBNyBFMiA4MCA4RCBGMCA5RiA5MSBBNlwiLCBcIjkxIEE5IEUyIDgwIDhEIEYwIDlGIDkxIEE5IEUyIDgwIDhEIEYwIDlGIDkxIEE2IEUyIDgwIDhEIEYwIDlGIDkxIEE2XCIsIFwiOTEgQTkgRTIgODAgOEQgRjAgOUYgOTEgQTkgRTIgODAgOEQgRjAgOUYgOTEgQTcgRTIgODAgOEQgRjAgOUYgOTEgQTdcIiwgXCI5MSBBOCBFMiA4MCA4RCBGMCA5RiA5MSBBOCBFMiA4MCA4RCBGMCA5RiA5MSBBNlwiLCBcIjkxIEE4IEUyIDgwIDhEIEYwIDlGIDkxIEE4IEUyIDgwIDhEIEYwIDlGIDkxIEE3XCIsIFwiOTEgQTggRTIgODAgOEQgRjAgOUYgOTEgQTggRTIgODAgOEQgRjAgOUYgOTEgQTcgRTIgODAgOEQgRjAgOUYgOTEgQTZcIiwgXCI5MSBBOCBFMiA4MCA4RCBGMCA5RiA5MSBBOCBFMiA4MCA4RCBGMCA5RiA5MSBBNiBFMiA4MCA4RCBGMCA5RiA5MSBBNlwiLCBcIjkxIEE4IEUyIDgwIDhEIEYwIDlGIDkxIEE4IEUyIDgwIDhEIEYwIDlGIDkxIEE3IEUyIDgwIDhEIEYwIDlGIDkxIEE3XCIsIFwiOTEgOUFcIiwgXCI5MSA5NVwiLCBcIjkxIDk2XCIsIFwiOTEgOTRcIiwgXCI5MSA5N1wiLCBcIjkxIDk5XCIsIFwiOTEgOThcIiwgXCI5MiA4NFwiLCBcIjkyIDhCXCIsIFwiOTEgQTNcIiwgXCI5MSBBMFwiLCBcIjkxIEExXCIsIFwiOTEgQTJcIiwgXCI5MSA5RVwiLCBcIjkxIDlGXCIsIFwiOTEgOTJcIiwgXCI4RSBBOVwiLCBcIkUyIDlCIDkxXCIsIFwiOEUgOTNcIiwgXCI5MSA5MVwiLCBcIjhFIDkyXCIsIFwiOTEgOURcIiwgXCI5MSA5QlwiLCBcIjkxIDlDXCIsIFwiOTIgQkNcIiwgXCI5MSA5M1wiLCBcIjk1IEI2XCIsIFwiOTIgOERcIiwgXCI4QyA4MlwiLCBcIjlCIDkxXCIsIFwiOTAgQjZcIiwgXCI5MCBCMVwiLCBcIjkwIEFEXCIsIFwiOTAgQjlcIiwgXCI5MCBCMFwiLCBcIjkwIEJCXCIsIFwiOTAgQkNcIiwgXCI5MCBBOFwiLCBcIjkwIEFGXCIsIFwiQTYgODFcIiwgXCI5MCBBRVwiLCBcIjkwIEI3XCIsIFwiOTAgQkRcIiwgXCI5MCBCOFwiLCBcIjkwIDk5XCIsIFwiOTAgQjVcIiwgXCI5OSA4OFwiLCBcIjk5IDg5XCIsIFwiOTkgOEFcIiwgXCI5MCA5MlwiLCBcIjkwIDk0XCIsIFwiOTAgQTdcIiwgXCI5MCBBNlwiLCBcIjkwIEE0XCIsIFwiOTAgQTNcIiwgXCI5MCBBNVwiLCBcIjkwIEJBXCIsIFwiOTAgOTdcIiwgXCI5MCBCNFwiLCBcIkE2IDg0XCIsIFwiOTAgOURcIiwgXCI5MCA5QlwiLCBcIjkwIDhDXCIsIFwiOTAgOUVcIiwgXCI5MCA5Q1wiLCBcIjk1IEI3XCIsIFwiQTYgODJcIiwgXCJBNiA4MFwiLCBcIjkwIDhEXCIsIFwiOTAgQTJcIiwgXCI5MCBBMFwiLCBcIjkwIDlGXCIsIFwiOTAgQTFcIiwgXCI5MCBBQ1wiLCBcIjkwIEIzXCIsIFwiOTAgOEJcIiwgXCI5MCA4QVwiLCBcIjkwIDg2XCIsIFwiOTAgODVcIiwgXCI5MCA4M1wiLCBcIjkwIDgyXCIsIFwiOTAgODRcIiwgXCI5MCBBQVwiLCBcIjkwIEFCXCIsIFwiOTAgOThcIiwgXCI5MCA5MFwiLCBcIjkwIDhGXCIsIFwiOTAgOTFcIiwgXCI5MCA4RVwiLCBcIjkwIDk2XCIsIFwiOTAgODBcIiwgXCI5MCA4MVwiLCBcIjkwIDkzXCIsIFwiQTYgODNcIiwgXCI5NSA4QVwiLCBcIjkwIDk1XCIsIFwiOTAgQTlcIiwgXCI5MCA4OFwiLCBcIjkwIDg3XCIsIFwiOTAgQkZcIiwgXCI5MCBCRVwiLCBcIjkwIDg5XCIsIFwiOTAgQjJcIiwgXCI4QyBCNVwiLCBcIjhFIDg0XCIsIFwiOEMgQjJcIiwgXCI4QyBCM1wiLCBcIjhDIEI0XCIsIFwiOEMgQjFcIiwgXCI4QyBCRlwiLCBcIkUyIDk4IDk4XCIsIFwiOEQgODBcIiwgXCI4RSA4RFwiLCBcIjhFIDhCXCIsIFwiOEQgODNcIiwgXCI4RCA4MlwiLCBcIjhEIDgxXCIsIFwiOEMgQkVcIiwgXCI4QyBCQVwiLCBcIjhDIEJBXCIsIFwiOEMgQkJcIiwgXCI4QyBCOVwiLCBcIjhDIEI3XCIsIFwiOEMgQkNcIiwgXCI4QyBCOFwiLCBcIjkyIDkwXCIsIFwiOEQgODRcIiwgXCI4QyBCMFwiLCBcIjhFIDgzXCIsIFwiOTAgOUFcIiwgXCI5NSBCOFwiLCBcIjhDIDhFXCIsIFwiOEMgOERcIiwgXCI4QyA4RlwiLCBcIjhDIDk1XCIsIFwiOEMgOTZcIiwgXCI4QyA5N1wiLCBcIjhDIDk4XCIsIFwiOEMgOTFcIiwgXCI4QyA5MlwiLCBcIjhDIDkzXCIsIFwiOEMgOTRcIiwgXCI4QyA5QVwiLCBcIjhDIDlEXCIsIFwiOEMgOUJcIiwgXCI4QyA5Q1wiLCBcIjhDIDlFXCIsIFwiOEMgOTlcIiwgXCJFMiBBRCA5MCBFRiBCOCA4RlwiLCBcIjhDIDlGXCIsIFwiOTIgQUJcIiwgXCJFMiA5QyBBOFwiLCBcIkUyIDk4IDg0IEVGIEI4IDhGXCIsIFwiRTIgOTggODAgRUYgQjggOEZcIiwgXCI4QyBBNFwiLCBcIkUyIDlCIDg1IEVGIEI4IDhGXCIsIFwiOEMgQTVcIiwgXCI4QyBBNlwiLCBcIkUyIDk4IDgxIEVGIEI4IDhGXCIsIFwiOEMgQTdcIiwgXCJFMiA5QiA4OFwiLCBcIjhDIEE5XCIsIFwiRTIgOUEgQTEgRUYgQjggOEZcIiwgXCI5NCBBNVwiLCBcIjkyIEE1XCIsIFwiRTIgOUQgODQgRUYgQjggOEZcIiwgXCI4QyBBOFwiLCBcIkUyIDk4IDgzIEVGIEI4IDhGXCIsIFwiRTIgOUIgODQgRUYgQjggOEZcIiwgXCI4QyBBQ1wiLCBcIjkyIEE4XCIsIFwiOEMgQUFcIiwgXCI4QyBBQlwiLCBcIkUyIDk4IDgyIEVGIEI4IDhGXCIsIFwiRTIgOTggOTQgRUYgQjggOEZcIiwgXCI5MiBBN1wiLCBcIjkyIEE2XCIsIFwiOEMgOEFcIiwgXCI5QiA5MVwiLCBcIjlCIDkxXCIsIFwiOEQgOEZcIiwgXCI4RCA4RVwiLCBcIjhEIDkwXCIsIFwiOEQgOEFcIiwgXCI4RCA4QlwiLCBcIjhEIDhDXCIsIFwiOEQgODlcIiwgXCI4RCA4N1wiLCBcIjhEIDkzXCIsIFwiOEQgODhcIiwgXCI4RCA5MlwiLCBcIjhEIDkxXCIsIFwiOEQgOERcIiwgXCI4RCA4NVwiLCBcIjhEIDg2XCIsIFwiOEMgQjZcIiwgXCI4QyBCRFwiLCBcIjhEIEEwXCIsIFwiOEQgQUZcIiwgXCI4RCA5RVwiLCBcIkE3IDgwXCIsIFwiOEQgOTdcIiwgXCI4RCA5NlwiLCBcIjhEIEE0XCIsIFwiOEQgQjNcIiwgXCI4RCA5NFwiLCBcIjhEIDlGXCIsIFwiOEMgQURcIiwgXCI4RCA5NVwiLCBcIjhEIDlEXCIsIFwiOEMgQUVcIiwgXCI4QyBBRlwiLCBcIjhEIDlDXCIsIFwiOEQgQjJcIiwgXCI4RCBBNVwiLCBcIjhEIEEzXCIsIFwiOEQgQjFcIiwgXCI4RCA5QlwiLCBcIjhEIDk5XCIsIFwiOEQgOUFcIiwgXCI4RCA5OFwiLCBcIjhEIEEyXCIsIFwiOEQgQTFcIiwgXCI4RCBBN1wiLCBcIjhEIEE4XCIsIFwiOEQgQTZcIiwgXCI4RCBCMFwiLCBcIjhFIDgyXCIsIFwiOEQgQUVcIiwgXCI4RCBBQ1wiLCBcIjhEIEFEXCIsIFwiOEQgQUJcIiwgXCI4RCBCRlwiLCBcIjhEIEE5XCIsIFwiOEQgQUFcIiwgXCI4RCBCQVwiLCBcIjhEIEJCXCIsIFwiOEQgQjdcIiwgXCI4RCBCOFwiLCBcIjhEIEI5XCIsIFwiOEQgQkVcIiwgXCI4RCBCNlwiLCBcIjhEIEI1XCIsIFwiRTIgOTggOTUgRUYgQjggOEZcIiwgXCI4RCBCQ1wiLCBcIjhEIEI0XCIsIFwiOEQgQkRcIixcIjlCIDkxXCIsIFwiOUIgOTFcIiwgXCI5QiA5MVwiLCBcIkUyIDlBIEJEIEVGIEI4IDhGXCIsIFwiOEYgODBcIiwgXCI4RiA4OFwiLCBcIkUyIDlBIEJFIEVGIEI4IDhGXCIsIFwiOEUgQkVcIiwgXCI4RiA5MFwiLCBcIjhGIDg5XCIsIFwiOEUgQjFcIiwgXCJFMiA5QiBCMyBFRiBCOCA4RlwiLCBcIjhGIDhDXCIsIFwiOEYgOTNcIiwgXCI4RiBCOFwiLCBcIjhGIDkyXCIsIFwiOEYgOTFcIiwgXCI4RiA4RlwiLCBcIjhFIEJGXCIsIFwiRTIgOUIgQjdcIiwgXCI4RiA4MlwiLCBcIkUyIDlCIEI4XCIsIFwiOEYgQjlcIiwgXCI4RSBBM1wiLCBcIjlBIEEzXCIsIFwiOEYgOEFcIiwgXCI4RiA4NFwiLCBcIjlCIDgwXCIsIFwiRTIgOUIgQjlcIiwgXCI4RiA4QlwiLCBcIjlBIEI0XCIsIFwiOUEgQjVcIiwgXCI4RiA4N1wiLCBcIjk1IEI0XCIsIFwiOEYgODZcIiwgXCI4RSBCRFwiLCBcIjhGIDg1XCIsIFwiOEUgOTZcIiwgXCI4RSA5N1wiLCBcIjhGIEI1XCIsIFwiOEUgQUJcIiwgXCI4RSA5RlwiLCBcIjhFIEFEXCIsIFwiOEUgQThcIiwgXCI4RSBBQVwiLCBcIjhFIEE0XCIsIFwiOEUgQTdcIiwgXCI4RSBCQ1wiLCBcIjhFIEI5XCIsIFwiOEUgQjdcIiwgXCI4RSBCQVwiLCBcIjhFIEI4XCIsIFwiOEUgQkJcIiwgXCI4RSBBQ1wiLCBcIjhFIEFFXCIsIFwiOTEgQkVcIiwgXCI4RSBBRlwiLCBcIjhFIEIyXCIsIFwiOEUgQjBcIiwgXCI4RSBCM1wiLCBcIjlCIDkxXCIsIFwiOUIgOTFcIiwgXCI5QiA5MVwiLCBcIjlBIDk3XCIsIFwiOUEgOTVcIiwgXCI5QSA5OVwiLCBcIjlBIDhDXCIsIFwiOUEgOEVcIiwgXCI4RiA4RVwiLCBcIjlBIDkzXCIsIFwiOUEgOTFcIiwgXCI5QSA5MlwiLCBcIjlBIDkwXCIsIFwiOUEgOUFcIiwgXCI5QSA5QlwiLCBcIjlBIDlDXCIsXCI4RiA4RFwiLCBcIjlBIEIyXCIsIFwiOUEgQThcIiwgXCI5QSA5NFwiLCBcIjlBIDhEXCIsIFwiOUEgOThcIiwgXCI5QSA5NlwiLCBcIjlBIEExXCIsIFwiOUEgQTBcIiwgXCI5QSBBRlwiLCBcIjlBIDgzXCIsIFwiOUEgOEJcIiwgXCI5QSA5RFwiLCBcIjlBIDg0XCIsIFwiOUEgODVcIiwgXCI5QSA4OFwiLCBcIjlBIDlFXCIsIFwiOUEgODJcIiwgXCI5QSA4NlwiLCBcIjlBIDg3XCIsIFwiOUEgOEFcIiwgXCI5QSA4OVwiLCBcIjlBIDgxXCIsIFwiOUIgQTlcIiwgXCJFMiA5QyA4OCBFRiBCOCA4RlwiLCBcIjlCIEFCXCIsIFwiOUIgQUNcIiwgXCJFMiA5QiBCNSBFRiBCOCA4RlwiLCBcIjlCIEE1XCIsIFwiOUEgQTRcIiwgXCJFMiA5QiBCNFwiLCBcIjlCIEIzXCIsIFwiOUEgODBcIiwgXCI5QiBCMFwiLCBcIjkyIEJBXCIsIFwiRTIgOUEgOTMgRUYgQjggOEZcIiwgXCI5QSBBN1wiLCBcIkUyIDlCIEJEIEVGIEI4IDhGXCIsIFwiOUEgOEZcIiwgXCI5QSBBNlwiLCBcIjlBIEE1XCIsIFwiOEYgODFcIiwgXCI5QSBBMlwiLCBcIjhFIEExXCIsIFwiOEUgQTJcIiwgXCI4RSBBMFwiLCBcIjhGIDk3XCIsIFwiOEMgODFcIiwgXCI5NyBCQ1wiLCBcIjhGIEFEXCIsIFwiRTIgOUIgQjIgRUYgQjggOEZcIiwgXCI4RSA5MVwiLCBcIkUyIDlCIEIwXCIsIFwiOEYgOTRcIiwgXCI5NyBCQlwiLCBcIjhDIDhCXCIsIFwiOTcgQkVcIiwgXCI4RiA5NVwiLCBcIkUyIDlCIEJBIEVGIEI4IDhGXCIsIFwiOEYgOUVcIiwgXCI5QiBBM1wiLCBcIjlCIEE0XCIsIFwiOEMgODVcIiwgXCI4QyA4NFwiLCBcIjhGIDlDXCIsIFwiOEYgOTZcIiwgXCI4RiA5RFwiLCBcIjhDIDg3XCIsIFwiOEMgODZcIiwgXCI4RiA5OVwiLCBcIjhDIDgzXCIsIFwiOEMgODlcIiwgXCI4QyA4Q1wiLCBcIjhDIEEwXCIsIFwiOEUgODdcIiwgXCI4RSA4NlwiLCBcIjhDIDg4XCIsIFwiOEYgOThcIiwgXCI4RiBCMFwiLCBcIjhGIEFGXCIsIFwiOEYgOUZcIiwgXCI5NyBCRFwiLCBcIjhGIEEwXCIsIFwiOEYgQTFcIiwgXCI4RiA5QVwiLCBcIjhGIEEyXCIsIFwiOEYgQUNcIiwgXCI4RiBBM1wiLCBcIjhGIEE0XCIsIFwiOEYgQTVcIiwgXCI4RiBBNlwiLCBcIjhGIEE4XCIsIFwiOEYgQUFcIiwgXCI4RiBBQlwiLCBcIjhGIEE5XCIsIFwiOTIgOTJcIiwgXCI4RiA5QlwiLCBcIkUyIDlCIEFBIEVGIEI4IDhGXCIsIFwiOTUgOENcIiwgXCI5NSA4RFwiLCBcIjk1IDhCXCIsIFwiRTIgOUIgQTlcIiwgXCJFMiA4QyA5QSBFRiBCOCA4RlwiLCBcIjkzIEIxXCIsIFwiOTMgQjJcIiwgXCI5MiBCQlwiLCBcIkUyIDhDIEE4IEVGIEI4IDhGXCIsIFwiOTYgQTVcIiwgXCI5NiBBOFwiLCBcIjk2IEIxXCIsIFwiOTYgQjJcIiwgXCI5NSBCOVwiLCBcIjk3IDlDXCIsIFwiOTIgQkRcIiwgXCI5MiBCRVwiLCBcIjkyIEJGXCIsIFwiOTMgODBcIiwgXCI5MyBCQ1wiLCBcIjkzIEI3XCIsIFwiOTMgQjhcIiwgXCI5MyBCOVwiLCBcIjhFIEE1XCIsIFwiOTMgQkRcIiwgXCI4RSA5RVwiLCBcIjkzIDlFXCIsIFwiRTIgOTggOEUgRUYgQjggOEZcIiwgXCI5MyA5RlwiLCBcIjkzIEEwXCIsIFwiOTMgQkFcIiwgXCI5MyBCQlwiLCBcIjhFIDk5XCIsIFwiOEUgOUFcIiwgXCI4RSA5QlwiLCBcIkUyIDhGIEIxXCIsIFwiRTIgOEYgQjJcIiwgXCJFMiA4RiBCMFwiLCBcIjk1IEIwXCIsIFwiRTIgOEYgQjNcIiwgXCJFMiA4QyA5QiBFRiBCOCA4RlwiLCBcIjkzIEExXCIsIFwiOTQgOEJcIiwgXCI5NCA4Q1wiLCBcIjkyIEExXCIsIFwiOTQgQTZcIiwgXCI5NSBBRlwiLCBcIjk3IDkxXCIsIFwiOUIgQTJcIiwgXCI5MiBCOFwiLCBcIjkyIEI1XCIsIFwiOTIgQjRcIiwgXCI5MiBCNlwiLCBcIjkyIEI3XCIsIFwiOTIgQjBcIiwgXCI5MiBCM1wiLCBcIjkyIDhFXCIsIFwiRTIgOUEgOTZcIiwgXCI5NCBBN1wiLCBcIjk0IEE4XCIsIFwiRTIgOUEgOTJcIiwgXCI5QiBBMFwiLCBcIkUyIDlCIDhGXCIsIFwiOTQgQTlcIiwgXCJFMiA5QSA5OVwiLCBcIkUyIDlCIDkzXCIsIFwiOTQgQUJcIiwgXCI5MiBBM1wiLCBcIjk0IEFBXCIsIFwiOTcgQTFcIiwgXCJFMiA5QSA5NFwiLCBcIjlCIEExXCIsIFwiOUEgQUNcIiwgXCJFMiA5OCBBMCBFRiBCOCA4RlwiLCBcIkUyIDlBIEIwXCIsIFwiRTIgOUEgQjFcIiwgXCI4RiBCQVwiLCBcIjk0IEFFXCIsIFwiOTMgQkZcIiwgXCI5MiA4OFwiLCBcIkUyIDlBIDk3XCIsIFwiOTQgQURcIiwgXCI5NCBBQ1wiLCBcIjk1IEIzXCIsIFwiOTIgOEFcIiwgXCI5MiA4OVwiLCBcIjhDIEExXCIsIFwiOEYgQjdcIiwgXCI5NCA5NlwiLCBcIjlBIEJEXCIsIFwiOUEgQkZcIiwgXCI5QiA4MVwiLCBcIjk0IDkxXCIsIFwiOTcgOURcIiwgXCI5QiA4QlwiLCBcIjlCIDhDXCIsIFwiOUIgOEZcIiwgXCI5QSBBQVwiLCBcIjlCIDhFXCIsIFwiOTYgQkNcIiwgXCI5NyBCQVwiLCBcIkUyIDlCIEIxXCIsIFwiOTcgQkZcIiwgXCI5QiA4RFwiLCBcIjhFIDg4XCIsIFwiOEUgOEZcIiwgXCI4RSA4MFwiLCBcIjhFIDgxXCIsIFwiOEUgOEFcIiwgXCI4RSA4OVwiLCBcIjhFIDhFXCIsIFwiOEUgOTBcIiwgXCI4RSA4Q1wiLCBcIjhGIEFFXCIsIFwiRTIgOUMgODkgRUYgQjggOEZcIiwgXCI5MyBBOVwiLCBcIjkzIEE4XCIsIFwiOTMgQTdcIiwgXCI5MiA4Q1wiLCBcIjkzIEFFXCIsIFwiOTMgQUFcIiwgXCI5MyBBQlwiLCBcIjkzIEFDXCIsIFwiOTMgQURcIiwgXCI5MyBBNlwiLCBcIjkzIEFGXCIsIFwiOTMgQTVcIiwgXCI5MyBBNFwiLCBcIjkzIDlDXCIsIFwiOTMgODNcIiwgXCI5MyA5MVwiLCBcIjkzIDhBXCIsIFwiOTMgODhcIiwgXCI5MyA4OVwiLCBcIjkzIDg0XCIsIFwiOTMgODVcIiwgXCI5MyA4NlwiLCBcIjk3IDkzXCIsIFwiOTMgODdcIiwgXCI5NyA4M1wiLCBcIjk3IEIzXCIsIFwiOTcgODRcIiwgXCI5MyA4QlwiLCBcIjk3IDkyXCIsIFwiOTMgODFcIiwgXCI5MyA4MlwiLCBcIjk3IDgyXCIsIFwiOTcgOUVcIiwgXCI5MyBCMFwiLCBcIjkzIDkzXCIsIFwiOTMgOTVcIiwgXCI5MyA5N1wiLCBcIjkzIDk4XCIsIFwiOTMgOTlcIiwgXCI5MyA5NFwiLCBcIjkzIDkyXCIsIFwiOTMgOUFcIiwgXCI5MyA5NlwiLCBcIjk0IDk3XCIsIFwiOTMgOEVcIiwgXCI5NiA4N1wiLCBcIkUyIDlDIDgyIEVGIEI4IDhGXCIsIFwiOTMgOTBcIiwgXCI5MyA4RlwiLCBcIjkzIDhDXCIsIFwiOTMgOERcIiwgXCI5QSBBOVwiLCBcIjhGIEIzXCIsIFwiOEYgQjRcIiwgXCI5NCA5MFwiLCBcIjk0IDkyXCIsIFwiOTQgOTNcIiwgXCI5NCA4RlwiLCBcIjk2IDhBXCIsIFwiOTYgOEJcIiwgXCJFMiA5QyA5MiBFRiBCOCA4RlwiLCBcIjkzIDlEXCIsIFwiRTIgOUMgOEYgRUYgQjggOEZcIiwgXCI5NiA4RFwiLCBcIjk2IDhDXCIsIFwiOTQgOERcIiwgXCI5NCA4RVwiLCBcIjlCIDkxXCIsIFwiOUIgOTFcIiwgXCJFMiA5RCBBNCBFRiBCOCA4RlwiLCBcIjkyIDlCXCIsIFwiOTIgOUFcIiwgXCI5MiA5OVwiLCBcIjkyIDlDXCIsIFwiOTIgOTRcIiwgXCJFMiA5RCBBMyBFRiBCOCA4RlwiLCBcIjkyIDk1XCIsIFwiOTIgOUVcIiwgXCI5MiA5M1wiLCBcIjkyIDk3XCIsIFwiOTIgOTZcIiwgXCI5MiA5OFwiLCBcIjkyIDlEXCIsIFwiOTIgOUZcIiwgXCJFMiA5OCBBRSBFRiBCOCA4RlwiLCBcIkUyIDlDIDlEIEVGIEI4IDhGXCIsIFwiRTIgOTggQUEgRUYgQjggOEZcIiwgXCI5NSA4OVwiLCBcIkUyIDk4IEI4IEVGIEI4IDhGXCIsIFwiRTIgOUMgQTEgRUYgQjggOEZcIiwgXCI5NCBBRlwiLCBcIjk1IDhFXCIsIFwiRTIgOTggQUYgRUYgQjggOEZcIiwgXCJFMiA5OCBBNiBFRiBCOCA4RlwiLCBcIjlCIDkwXCIsIFwiRTIgOUIgOEVcIiwgXCJFMiA5OSA4OCBFRiBCOCA4RlwiLCBcIkUyIDk5IDg5IEVGIEI4IDhGXCIsIFwiRTIgOTkgOEEgRUYgQjggOEZcIiwgXCJFMiA5OSA4QiBFRiBCOCA4RlwiLCBcIkUyIDk5IDhDIEVGIEI4IDhGXCIsIFwiRTIgOTkgOEQgRUYgQjggOEZcIiwgXCJFMiA5OSA4RSBFRiBCOCA4RlwiLCBcIkUyIDk5IDhGIEVGIEI4IDhGXCIsIFwiRTIgOTkgOTAgRUYgQjggOEZcIiwgXCJFMiA5OSA5MSBFRiBCOCA4RlwiLCBcIkUyIDk5IDkyIEVGIEI4IDhGXCIsIFwiRTIgOTkgOTMgRUYgQjggOEZcIiwgXCI4NiA5NFwiLCBcIkUyIDlBIDlCXCIsIFwiODggQjNcIiwgXCI4OCBCOVwiLCBcIkUyIDk4IEEyIEVGIEI4IDhGXCIsIFwiRTIgOTggQTMgRUYgQjggOEZcIiwgXCI5MyBCNFwiLCBcIjkzIEIzXCIsIFwiODggQjZcIiwgXCI4OCA5QSBFRiBCOCA4RlwiLCBcIjg4IEI4XCIsIFwiODggQkFcIiwgXCI4OCBCNyBFRiBCOCA4RlwiLCBcIkUyIDlDIEI0IEVGIEI4IDhGXCIsIFwiODYgOUFcIiwgXCI4OSA5MVwiLCBcIjkyIEFFXCIsIFwiODkgOTBcIiwgXCJFMyA4QSA5OSBFRiBCOCA4RlwiLCBcIkUzIDhBIDk3IEVGIEI4IDhGXCIsIFwiODggQjRcIiwgXCI4OCBCNVwiLCBcIjg4IEIyXCIsIFwiODUgQjAgRUYgQjggOEZcIiwgXCI4NSBCMSBFRiBCOCA4RlwiLCBcIjg2IDhFXCIsIFwiODYgOTFcIiwgXCI4NSBCRSBFRiBCOCA4RlwiLCBcIjg2IDk4XCIsIFwiRTIgOUIgOTQgRUYgQjggOEZcIiwgXCI5MyA5QlwiLCBcIjlBIEFCXCIsIFwiRTIgOUQgOENcIiwgXCJFMiBBRCA5NSBFRiBCOCA4RlwiLCBcIjkyIEEyXCIsIFwiRTIgOTkgQTggRUYgQjggOEZcIiwgXCI5QSBCN1wiLCBcIjlBIEFGXCIsIFwiOUEgQjNcIiwgXCI5QSBCMVwiLCBcIjk0IDlFXCIsIFwiOTMgQjVcIiwgXCJFMiA5RCA5NyBFRiBCOCA4RlwiLCBcIkUyIDlEIDk1XCIsIFwiRTIgOUQgOTNcIiwgXCJFMiA5RCA5NFwiLCBcIkUyIDgwIEJDIEVGIEI4IDhGXCIsIFwiRTIgODEgODkgRUYgQjggOEZcIiwgXCI5MiBBRlwiLCBcIjk0IDg1XCIsIFwiOTQgODZcIiwgXCI5NCBCMVwiLCBcIkUyIDlBIDlDXCIsIFwiRTMgODAgQkQgRUYgQjggOEZcIiwgXCJFMiA5QSBBMCBFRiBCOCA4RlwiLCBcIjlBIEI4XCIsIFwiOTQgQjBcIiwgXCJFMiA5OSBCQiBFRiBCOCA4RlwiLCBcIjg4IEFGIEVGIEI4IDhGXCIsIFwiOTIgQjlcIiwgXCJFMiA5RCA4NyBFRiBCOCA4RlwiLCBcIkUyIDlDIEIzIEVGIEI4IDhGXCIsIFwiRTIgOUQgOEVcIiwgXCJFMiA5QyA4NVwiLCBcIjkyIEEwXCIsIFwiOEMgODBcIiwgXCJFMiA5RSBCRlwiLCBcIjhDIDkwXCIsIFwiRTIgOTMgODIgRUYgQjggOEZcIiwgXCI4RiBBN1wiLCBcIjg4IDgyIEVGIEI4IDhGXCIsIFwiOUIgODJcIiwgXCI5QiA4M1wiLCBcIjlCIDg0XCIsIFwiOUIgODVcIiwgXCJFMiA5OSBCRiBFRiBCOCA4RlwiLCBcIjlBIEFEXCIsIFwiOUEgQkVcIiwgXCI4NSBCRiBFRiBCOCA4RlwiLCBcIjlBIEIwXCIsIFwiOUEgQjlcIiwgXCI5QSBCQVwiLCBcIjlBIEJDXCIsIFwiOUEgQkJcIiwgXCI5QSBBRVwiLCBcIjhFIEE2XCIsIFwiOTMgQjZcIiwgXCI4OCA4MVwiLCBcIjg2IDk2XCIsIFwiODYgOTdcIiwgXCI4NiA5OVwiLCBcIjg2IDkyXCIsIFwiODYgOTVcIiwgXCI4NiA5M1wiLCBcIjMwIEVGIEI4IDhGIEUyIDgzIEEzXCIsIFwiMzEgRUYgQjggOEYgRTIgODMgQTNcIiwgXCIzMiBFRiBCOCA4RiBFMiA4MyBBM1wiLCBcIjMzIEVGIEI4IDhGIEUyIDgzIEEzXCIsIFwiMzQgRUYgQjggOEYgRTIgODMgQTNcIiwgXCIzNSBFRiBCOCA4RiBFMiA4MyBBM1wiLCBcIjM2IEVGIEI4IDhGIEUyIDgzIEEzXCIsIFwiMzcgRUYgQjggOEYgRTIgODMgQTNcIiwgXCIzOCBFRiBCOCA4RiBFMiA4MyBBM1wiLCBcIjM5IEVGIEI4IDhGIEUyIDgzIEEzXCIsIFwiOTQgOUZcIiwgXCI5NCBBMlwiLCBcIkUyIDk2IEI2IEVGIEI4IDhGXCIsIFwiRTIgOEYgQjhcIiwgXCJFMiA4RiBBRlwiLCBcIkUyIDhGIEI5XCIsIFwiRTIgOEYgQkFcIiwgXCJFMiA4RiBBRFwiLCBcIkUyIDhGIEFFXCIsIFwiRTIgOEYgQTlcIiwgXCJFMiA4RiBBQVwiLCBcIjk0IDgwXCIsIFwiOTQgODFcIiwgXCI5NCA4MlwiLCBcIkUyIDk3IDgwIEVGIEI4IDhGXCIsIFwiOTQgQkNcIiwgXCI5NCBCRFwiLCBcIkUyIDhGIEFCXCIsIFwiRTIgOEYgQUNcIiwgXCJFMiA5RSBBMSBFRiBCOCA4RlwiLCBcIkUyIEFDIDg1IEVGIEI4IDhGXCIsIFwiRTIgQUMgODYgRUYgQjggOEZcIiwgXCJFMiBBQyA4NyBFRiBCOCA4RlwiLCBcIkUyIDg2IDk3IEVGIEI4IDhGXCIsIFwiRTIgODYgOTggRUYgQjggOEZcIiwgXCJFMiA4NiA5OSBFRiBCOCA4RlwiLCBcIkUyIDg2IDk2IEVGIEI4IDhGXCIsIFwiRTIgODYgOTUgRUYgQjggOEZcIiwgXCJFMiA4NiA5NCBFRiBCOCA4RlwiLCBcIjk0IDg0XCIsIFwiRTIgODYgQUEgRUYgQjggOEZcIiwgXCJFMiA4NiBBOSBFRiBCOCA4RlwiLCBcIkUyIEE0IEI0IEVGIEI4IDhGXCIsIFwiRTIgQTQgQjUgRUYgQjggOEZcIiwgXCIyMyBFRiBCOCA4RiBFMiA4MyBBM1wiLCBcIjJBIEVGIEI4IDhGIEUyIDgzIEEzXCIsIFwiRTIgODQgQjkgRUYgQjggOEZcIiwgXCI5NCBBNFwiLCBcIjk0IEExXCIsIFwiOTQgQTBcIiwgXCI5NCBBM1wiLCBcIjhFIEI1XCIsIFwiOEUgQjZcIiwgXCJFMyA4MCBCMCBFRiBCOCA4RlwiLCBcIkUyIDlFIEIwXCIsIFwiRTIgOUMgOTQgRUYgQjggOEZcIiwgXCI5NCA4M1wiLCBcIkUyIDlFIDk1XCIsIFwiRTIgOUUgOTZcIiwgXCJFMiA5RSA5N1wiLCBcIkUyIDlDIDk2IEVGIEI4IDhGXCIsIFwiOTIgQjJcIiwgXCI5MiBCMVwiLCBcIkMyIEE5IEVGIEI4IDhGXCIsIFwiQzIgQUUgRUYgQjggOEZcIiwgXCJFMiA4NCBBMiBFRiBCOCA4RlwiLCBcIjk0IDlBXCIsIFwiOTQgOTlcIiwgXCI5NCA5QlwiLCBcIjk0IDlEXCIsIFwiOTQgOUNcIiwgXCJFMiA5OCA5MSBFRiBCOCA4RlwiLCBcIjk0IDk4XCIsIFwiRTIgOUEgQUEgRUYgQjggOEZcIiwgXCJFMiA5QSBBQiBFRiBCOCA4RlwiLCBcIjk0IEI0XCIsIFwiOTQgQjVcIiwgXCI5NCBCOFwiLCBcIjk0IEI5XCIsIFwiOTQgQjZcIiwgXCI5NCBCN1wiLCBcIjk0IEJBXCIsIFwiRTIgOTYgQUEgRUYgQjggOEZcIiwgXCJFMiA5NiBBQiBFRiBCOCA4RlwiLCBcIkUyIEFDIDlCIEVGIEI4IDhGXCIsIFwiRTIgQUMgOUMgRUYgQjggOEZcIiwgXCI5NCBCQlwiLCBcIkUyIDk3IEJDIEVGIEI4IDhGXCIsIFwiRTIgOTcgQkIgRUYgQjggOEZcIiwgXCJFMiA5NyBCRSBFRiBCOCA4RlwiLCBcIkUyIDk3IEJEIEVGIEI4IDhGXCIsIFwiOTQgQjJcIiwgXCI5NCBCM1wiLCBcIjk0IDg4XCIsIFwiOTQgODlcIiwgXCI5NCA4QVwiLCBcIjk0IDg3XCIsIFwiOTMgQTNcIiwgXCI5MyBBMlwiLCBcIjk0IDk0XCIsIFwiOTQgOTVcIiwgXCI4MyA4RlwiLCBcIjgwIDg0IEVGIEI4IDhGXCIsIFwiRTIgOTkgQTAgRUYgQjggOEZcIiwgXCJFMiA5OSBBMyBFRiBCOCA4RlwiLCBcIkUyIDk5IEE1IEVGIEI4IDhGXCIsIFwiRTIgOTkgQTYgRUYgQjggOEZcIiwgXCI4RSBCNFwiLCBcIjkxIDgxIEUyIDgwIDhEIEYwIDlGIDk3IEE4XCIsIFwiOTIgQURcIiwgXCI5NyBBRlwiLCBcIjkyIEFDXCIsIFwiOTUgOTBcIiwgXCI5NSA5MVwiLCBcIjk1IDkyXCIsIFwiOTUgOTNcIiwgXCI5NSA5NFwiLCBcIjk1IDk1XCIsIFwiOTUgOTZcIiwgXCI5NSA5N1wiLCBcIjk1IDk4XCIsIFwiOTUgOTlcIiwgXCI5NSA5QVwiLCBcIjk1IDlCXCIsIFwiOTUgOUNcIiwgXCI5NSA5RFwiLCBcIjk1IDlFXCIsIFwiOTUgOUZcIiwgXCI5NSBBMFwiLCBcIjk1IEExXCIsIFwiOTUgQTJcIiwgXCI5NSBBM1wiLCBcIjk1IEE0XCIsIFwiOTUgQTVcIiwgXCI5NSBBNlwiLCBcIjk1IEE3XCIsIFwiOUIgOTFcIiwgXCI4NyBBNiBGMCA5RiA4NyBBQlwiLCBcIjg3IEE2IEYwIDlGIDg3IEJEXCIsIFwiODcgQTYgRjAgOUYgODcgQjFcIiwgXCI4NyBBOSBGMCA5RiA4NyBCRlwiLCBcIjg3IEE2IEYwIDlGIDg3IEI4XCIsIFwiODcgQTYgRjAgOUYgODcgQTlcIiwgXCI4NyBBNiBGMCA5RiA4NyBCNFwiLCBcIjg3IEE2IEYwIDlGIDg3IEFFXCIsIFwiODcgQTYgRjAgOUYgODcgQjZcIiwgXCI4NyBBNiBGMCA5RiA4NyBBQ1wiLCBcIjg3IEE2IEYwIDlGIDg3IEI3XCIsIFwiODcgQTYgRjAgOUYgODcgQjJcIiwgXCI4NyBBNiBGMCA5RiA4NyBCQ1wiLCBcIjg3IEE2IEYwIDlGIDg3IEJBXCIsIFwiODcgQTYgRjAgOUYgODcgQjlcIiwgXCI4NyBBNiBGMCA5RiA4NyBCRlwiLCBcIjg3IEE3IEYwIDlGIDg3IEI4XCIsIFwiODcgQTcgRjAgOUYgODcgQURcIiwgXCI4NyBBNyBGMCA5RiA4NyBBOVwiLCBcIjg3IEE3IEYwIDlGIDg3IEE3XCIsIFwiODcgQTcgRjAgOUYgODcgQkVcIiwgXCI4NyBBNyBGMCA5RiA4NyBBQVwiLCBcIjg3IEE3IEYwIDlGIDg3IEJGXCIsIFwiODcgQTcgRjAgOUYgODcgQUZcIiwgXCI4NyBBNyBGMCA5RiA4NyBCMlwiLCBcIjg3IEE3IEYwIDlGIDg3IEI5XCIsIFwiODcgQTcgRjAgOUYgODcgQjRcIiwgXCI4NyBBNyBGMCA5RiA4NyBCNlwiLCBcIjg3IEE3IEYwIDlGIDg3IEE2XCIsIFwiODcgQTcgRjAgOUYgODcgQkNcIiwgXCI4NyBBNyBGMCA5RiA4NyBCN1wiLCBcIjg3IEFFIEYwIDlGIDg3IEI0XCIsIFwiODcgQkIgRjAgOUYgODcgQUNcIiwgXCI4NyBBNyBGMCA5RiA4NyBCM1wiLCBcIjg3IEE3IEYwIDlGIDg3IEFDXCIsIFwiODcgQTcgRjAgOUYgODcgQUJcIiwgXCI4NyBBNyBGMCA5RiA4NyBBRVwiLCBcIjg3IEE4IEYwIDlGIDg3IEJCXCIsIFwiODcgQjAgRjAgOUYgODcgQURcIiwgXCI4NyBBOCBGMCA5RiA4NyBCMlwiLCBcIjg3IEE4IEYwIDlGIDg3IEE2XCIsIFwiODcgQUUgRjAgOUYgODcgQThcIiwgXCI4NyBCMCBGMCA5RiA4NyBCRVwiLCBcIjg3IEE4IEYwIDlGIDg3IEFCXCIsIFwiODcgQjkgRjAgOUYgODcgQTlcIiwgXCI4NyBBOCBGMCA5RiA4NyBCMVwiLCBcIjg3IEE4IEYwIDlGIDg3IEIzXCIsIFwiODcgQTggRjAgOUYgODcgQkRcIiwgXCI4NyBBOCBGMCA5RiA4NyBBOFwiLCBcIjg3IEE4IEYwIDlGIDg3IEI0XCIsIFwiODcgQjAgRjAgOUYgODcgQjJcIiwgXCI4NyBBOCBGMCA5RiA4NyBBQ1wiLCBcIjg3IEE4IEYwIDlGIDg3IEE5XCIsIFwiODcgQTggRjAgOUYgODcgQjBcIiwgXCI4NyBBOCBGMCA5RiA4NyBCN1wiLCBcIjg3IEFEIEYwIDlGIDg3IEI3XCIsIFwiODcgQTggRjAgOUYgODcgQkFcIiwgXCI4NyBBOCBGMCA5RiA4NyBCQ1wiLCBcIjg3IEE4IEYwIDlGIDg3IEJFXCIsIFwiODcgQTggRjAgOUYgODcgQkZcIiwgXCI4NyBBOSBGMCA5RiA4NyBCMFwiLCBcIjg3IEE5IEYwIDlGIDg3IEFGXCIsIFwiODcgQTkgRjAgOUYgODcgQjJcIiwgXCI4NyBBOSBGMCA5RiA4NyBCNFwiLCBcIjg3IEFBIEYwIDlGIDg3IEE4XCIsIFwiODcgQUEgRjAgOUYgODcgQUNcIiwgXCI4NyBCOCBGMCA5RiA4NyBCQlwiLCBcIjg3IEFDIEYwIDlGIDg3IEI2XCIsIFwiODcgQUEgRjAgOUYgODcgQjdcIiwgXCI4NyBBQSBGMCA5RiA4NyBBQVwiLCBcIjg3IEFBIEYwIDlGIDg3IEI5XCIsIFwiODcgQUEgRjAgOUYgODcgQkFcIiwgXCI4NyBBQiBGMCA5RiA4NyBCMFwiLCBcIjg3IEFCIEYwIDlGIDg3IEI0XCIsIFwiODcgQUIgRjAgOUYgODcgQUZcIiwgXCI4NyBBQiBGMCA5RiA4NyBBRVwiLCBcIjg3IEFCIEYwIDlGIDg3IEI3XCIsIFwiODcgQUMgRjAgOUYgODcgQUJcIiwgXCI4NyBCNSBGMCA5RiA4NyBBQlwiLCBcIjg3IEI5IEYwIDlGIDg3IEFCXCIsIFwiODcgQUMgRjAgOUYgODcgQTZcIiwgXCI4NyBBQyBGMCA5RiA4NyBCMlwiLCBcIjg3IEFDIEYwIDlGIDg3IEFBXCIsIFwiODcgQTkgRjAgOUYgODcgQUFcIiwgXCI4NyBBQyBGMCA5RiA4NyBBRFwiLCBcIjg3IEFDIEYwIDlGIDg3IEFFXCIsIFwiODcgQUMgRjAgOUYgODcgQjdcIiwgXCI4NyBBQyBGMCA5RiA4NyBCMVwiLCBcIjg3IEFDIEYwIDlGIDg3IEE5XCIsIFwiODcgQUMgRjAgOUYgODcgQjVcIiwgXCI4NyBBQyBGMCA5RiA4NyBCQVwiLCBcIjg3IEFDIEYwIDlGIDg3IEI5XCIsIFwiODcgQUMgRjAgOUYgODcgQUNcIiwgXCI4NyBBQyBGMCA5RiA4NyBCM1wiLCBcIjg3IEFDIEYwIDlGIDg3IEJDXCIsIFwiODcgQUMgRjAgOUYgODcgQkVcIiwgXCI4NyBBRCBGMCA5RiA4NyBCOVwiLCBcIjg3IEFEIEYwIDlGIDg3IEIzXCIsIFwiODcgQUQgRjAgOUYgODcgQjBcIiwgXCI4NyBBRCBGMCA5RiA4NyBCQVwiLCBcIjg3IEFFIEYwIDlGIDg3IEI4XCIsIFwiODcgQUUgRjAgOUYgODcgQjNcIiwgXCI4NyBBRSBGMCA5RiA4NyBBOVwiLCBcIjg3IEFFIEYwIDlGIDg3IEI3XCIsIFwiODcgQUUgRjAgOUYgODcgQjZcIiwgXCI4NyBBRSBGMCA5RiA4NyBBQVwiLCBcIjg3IEFFIEYwIDlGIDg3IEIyXCIsIFwiODcgQUUgRjAgOUYgODcgQjFcIiwgXCI4NyBBRSBGMCA5RiA4NyBCOVwiLCBcIjg3IEE4IEYwIDlGIDg3IEFFXCIsIFwiODcgQUYgRjAgOUYgODcgQjJcIiwgXCI4NyBBRiBGMCA5RiA4NyBCNVwiLCBcIjg3IEFGIEYwIDlGIDg3IEFBXCIsIFwiODcgQUYgRjAgOUYgODcgQjRcIiwgXCI4NyBCMCBGMCA5RiA4NyBCRlwiLCBcIjg3IEIwIEYwIDlGIDg3IEFBXCIsIFwiODcgQjAgRjAgOUYgODcgQUVcIiwgXCI4NyBCRCBGMCA5RiA4NyBCMFwiLCBcIjg3IEIwIEYwIDlGIDg3IEJDXCIsIFwiODcgQjAgRjAgOUYgODcgQUNcIiwgXCI4NyBCMSBGMCA5RiA4NyBBNlwiLCBcIjg3IEIxIEYwIDlGIDg3IEJCXCIsIFwiODcgQjEgRjAgOUYgODcgQTdcIiwgXCI4NyBCMSBGMCA5RiA4NyBCOFwiLCBcIjg3IEIxIEYwIDlGIDg3IEI3XCIsIFwiODcgQjEgRjAgOUYgODcgQkVcIiwgXCI4NyBCMSBGMCA5RiA4NyBBRVwiLCBcIjg3IEIxIEYwIDlGIDg3IEI5XCIsIFwiODcgQjEgRjAgOUYgODcgQkFcIiwgXCI4NyBCMiBGMCA5RiA4NyBCNFwiLCBcIjg3IEIyIEYwIDlGIDg3IEIwXCIsIFwiODcgQjIgRjAgOUYgODcgQUNcIiwgXCI4NyBCMiBGMCA5RiA4NyBCQ1wiLCBcIjg3IEIyIEYwIDlGIDg3IEJFXCIsIFwiODcgQjIgRjAgOUYgODcgQkJcIiwgXCI4NyBCMiBGMCA5RiA4NyBCMVwiLCBcIjg3IEIyIEYwIDlGIDg3IEI5XCIsIFwiODcgQjIgRjAgOUYgODcgQURcIiwgXCI4NyBCMiBGMCA5RiA4NyBCNlwiLCBcIjg3IEIyIEYwIDlGIDg3IEI3XCIsIFwiODcgQjIgRjAgOUYgODcgQkFcIiwgXCI4NyBCRSBGMCA5RiA4NyBCOVwiLCBcIjg3IEIyIEYwIDlGIDg3IEJEXCIsIFwiODcgQUIgRjAgOUYgODcgQjJcIiwgXCI4NyBCMiBGMCA5RiA4NyBBOVwiLCBcIjg3IEIyIEYwIDlGIDg3IEE4XCIsIFwiODcgQjIgRjAgOUYgODcgQjNcIiwgXCI4NyBCMiBGMCA5RiA4NyBBQVwiLCBcIjg3IEIyIEYwIDlGIDg3IEI4XCIsIFwiODcgQjIgRjAgOUYgODcgQTZcIiwgXCI4NyBCMiBGMCA5RiA4NyBCRlwiLCBcIjg3IEIyIEYwIDlGIDg3IEIyXCIsIFwiODcgQjMgRjAgOUYgODcgQTZcIiwgXCI4NyBCMyBGMCA5RiA4NyBCN1wiLCBcIjg3IEIzIEYwIDlGIDg3IEI1XCIsIFwiODcgQjMgRjAgOUYgODcgQjFcIiwgXCI4NyBCMyBGMCA5RiA4NyBBOFwiLCBcIjg3IEIzIEYwIDlGIDg3IEJGXCIsIFwiODcgQjMgRjAgOUYgODcgQUVcIiwgXCI4NyBCMyBGMCA5RiA4NyBBQVwiLCBcIjg3IEIzIEYwIDlGIDg3IEFDXCIsIFwiODcgQjMgRjAgOUYgODcgQkFcIiwgXCI4NyBCMyBGMCA5RiA4NyBBQlwiLCBcIjg3IEIyIEYwIDlGIDg3IEI1XCIsIFwiODcgQjAgRjAgOUYgODcgQjVcIiwgXCI4NyBCMyBGMCA5RiA4NyBCNFwiLCBcIjg3IEI0IEYwIDlGIDg3IEIyXCIsIFwiODcgQjUgRjAgOUYgODcgQjBcIiwgXCI4NyBCNSBGMCA5RiA4NyBCQ1wiLCBcIjg3IEI1IEYwIDlGIDg3IEI4XCIsIFwiODcgQjUgRjAgOUYgODcgQTZcIiwgXCI4NyBCNSBGMCA5RiA4NyBBQ1wiLCBcIjg3IEI1IEYwIDlGIDg3IEJFXCIsIFwiODcgQjUgRjAgOUYgODcgQUFcIiwgXCI4NyBCNSBGMCA5RiA4NyBBRFwiLCBcIjg3IEI1IEYwIDlGIDg3IEIzXCIsIFwiODcgQjUgRjAgOUYgODcgQjFcIiwgXCI4NyBCNSBGMCA5RiA4NyBCOVwiLCBcIjg3IEI1IEYwIDlGIDg3IEI3XCIsIFwiODcgQjYgRjAgOUYgODcgQTZcIiwgXCI4NyBCNyBGMCA5RiA4NyBBQVwiLCBcIjg3IEI3IEYwIDlGIDg3IEI0XCIsIFwiODcgQjcgRjAgOUYgODcgQkFcIiwgXCI4NyBCNyBGMCA5RiA4NyBCQ1wiLCBcIjg3IEE3IEYwIDlGIDg3IEIxXCIsIFwiODcgQjggRjAgOUYgODcgQURcIiwgXCI4NyBCMCBGMCA5RiA4NyBCM1wiLCBcIjg3IEIxIEYwIDlGIDg3IEE4XCIsIFwiODcgQjUgRjAgOUYgODcgQjJcIiwgXCI4NyBCQiBGMCA5RiA4NyBBOFwiLCBcIjg3IEJDIEYwIDlGIDg3IEI4XCIsIFwiODcgQjggRjAgOUYgODcgQjJcIiwgXCI4NyBCOCBGMCA5RiA4NyBCOVwiLCBcIjg3IEI4IEYwIDlGIDg3IEE2XCIsIFwiODcgQjggRjAgOUYgODcgQjNcIiwgXCI4NyBCNyBGMCA5RiA4NyBCOFwiLCBcIjg3IEI4IEYwIDlGIDg3IEE4XCIsIFwiODcgQjggRjAgOUYgODcgQjFcIiwgXCI4NyBCOCBGMCA5RiA4NyBBQ1wiLCBcIjg3IEI4IEYwIDlGIDg3IEJEXCIsIFwiODcgQjggRjAgOUYgODcgQjBcIiwgXCI4NyBCOCBGMCA5RiA4NyBBRVwiLCBcIjg3IEI4IEYwIDlGIDg3IEE3XCIsIFwiODcgQjggRjAgOUYgODcgQjRcIiwgXCI4NyBCRiBGMCA5RiA4NyBBNlwiLCBcIjg3IEFDIEYwIDlGIDg3IEI4XCIsIFwiODcgQjAgRjAgOUYgODcgQjdcIiwgXCI4NyBCOCBGMCA5RiA4NyBCOFwiLCBcIjg3IEFBIEYwIDlGIDg3IEI4XCIsIFwiODcgQjEgRjAgOUYgODcgQjBcIiwgXCI4NyBCOCBGMCA5RiA4NyBBOVwiLCBcIjg3IEI4IEYwIDlGIDg3IEI3XCIsIFwiODcgQjggRjAgOUYgODcgQkZcIiwgXCI4NyBCOCBGMCA5RiA4NyBBQVwiLCBcIjg3IEE4IEYwIDlGIDg3IEFEXCIsIFwiODcgQjggRjAgOUYgODcgQkVcIiwgXCI4NyBCOSBGMCA5RiA4NyBCQ1wiLCBcIjg3IEI5IEYwIDlGIDg3IEFGXCIsIFwiODcgQjkgRjAgOUYgODcgQkZcIiwgXCI4NyBCOSBGMCA5RiA4NyBBRFwiLCBcIjg3IEI5IEYwIDlGIDg3IEIxXCIsIFwiODcgQjkgRjAgOUYgODcgQUNcIiwgXCI4NyBCOSBGMCA5RiA4NyBCMFwiLCBcIjg3IEI5IEYwIDlGIDg3IEI0XCIsIFwiODcgQjkgRjAgOUYgODcgQjlcIiwgXCI4NyBCOSBGMCA5RiA4NyBCM1wiLCBcIjg3IEI5IEYwIDlGIDg3IEI3XCIsIFwiODcgQjkgRjAgOUYgODcgQjJcIiwgXCI4NyBCOSBGMCA5RiA4NyBBOFwiLCBcIjg3IEI5IEYwIDlGIDg3IEJCXCIsIFwiODcgQkEgRjAgOUYgODcgQUNcIiwgXCI4NyBCQSBGMCA5RiA4NyBBNlwiLCBcIjg3IEE2IEYwIDlGIDg3IEFBXCIsIFwiODcgQUMgRjAgOUYgODcgQTdcIiwgXCI4NyBCQSBGMCA5RiA4NyBCOFwiLCBcIjg3IEJCIEYwIDlGIDg3IEFFXCIsIFwiODcgQkEgRjAgOUYgODcgQkVcIiwgXCI4NyBCQSBGMCA5RiA4NyBCRlwiLCBcIjg3IEJCIEYwIDlGIDg3IEJBXCIsIFwiODcgQkIgRjAgOUYgODcgQTZcIiwgXCI4NyBCQiBGMCA5RiA4NyBBQVwiLCBcIjg3IEJCIEYwIDlGIDg3IEIzXCIsIFwiODcgQkMgRjAgOUYgODcgQUJcIiwgXCI4NyBBQSBGMCA5RiA4NyBBRFwiLCBcIjg3IEJFIEYwIDlGIDg3IEFBXCIsIFwiODcgQkYgRjAgOUYgODcgQjJcIiwgXCI4NyBCRiBGMCA5RiA4NyBCQ1wiXVxuXHRlbW9qaXNBcnJheSA9IFtdXG5cdGZyZXFFbW9qaXNBcnJheSA9IFtdXG5cdGZvciBlbSBpbiByYXdFbW9qaXNcblx0XHRlbW9qaXNBcnJheS5wdXNoIGVtb2ppRm9ybWF0dGVyKGVtKVxuXG5cdFxuXHRmcmVxdWVudGx5VXNlZEVtb2ppc1JhdyA9IFtcIjkyIDg1XCIsIFwiOTEgODRcIiwgXCI5MSA4NVwiLCBcIjkxIDgyXCIsIFwiOTEgODNcIixcIjkyIDg1XCIsIFwiOTEgODRcIiwgXCI5MSA4NVwiLCBcIjkxIDgyXCIsIFwiOTEgODNcIixcIjkyIDg1XCIsIFwiOTEgODRcIiwgXCI5MSA4NVwiLCBcIjkxIDgyXCIsIFwiOTEgODNcIixcIjkyIDg1XCIsIFwiOTEgODRcIiwgXCI5MSA4NVwiLCBcIjkxIDgyXCIsIFwiOTEgODNcIixcIjkyIDg1XCIsIFwiOTEgODRcIiwgXCI5MSA4NVwiLCBcIjkxIDgyXCIsIFwiOTEgODNcIixdXG5cdGZvciBlbSBpbiBmcmVxdWVudGx5VXNlZEVtb2ppc1Jhd1xuXHRcdGZyZXFFbW9qaXNBcnJheS5wdXNoIGVtb2ppRm9ybWF0dGVyKGVtKVxuXG5cdGVtb2ppS2V5Lm9uIEV2ZW50cy5Ub3VjaFN0YXJ0LCAtPlxuXHRcdGVtb2ppS2V5LmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIlxuXHRcdGVtb2ppQkcgPSBuZXcgTGF5ZXIgYmFja2dyb3VuZENvbG9yOlwiI0VDRUVGMVwiXG5cdFx0Ym94ID0gZXhwb3J0cy5weCgzMClcblx0XHRlbW9qaUJHLmNvbnN0cmFpbnRzID0gKHRyYWlsaW5nOjEsIGxlYWRpbmc6MSwgYm90dG9tOjEsIGhlaWdodDoyNTgpXG5cdFx0ZXhwb3J0cy5sYXlvdXQoKVxuXHRcdGVtb2ppR2FsbGV5ID0gbmV3IFNjcm9sbENvbXBvbmVudCBzdXBlckxheWVyOmVtb2ppQkcsIHdpZHRoOmVtb2ppQkcud2lkdGgsIGhlaWdodDplbW9qaUJHLmhlaWdodCAtIGV4cG9ydHMucHgoNDApXG5cdFx0ZW1vamlHYWxsZXkuc3BlZWRZID0gMFxuXHRcdGVtb2ppU3BhY2VyID0gZXhwb3J0cy5weCg2KVxuXHRcdGVtb2ppUGlja2VyID0gbmV3IExheWVyIGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCIsIG5hbWU6XCJlbW9qaSBwaWNrZXJcIiwgc3VwZXJMYXllcjplbW9qaUJHXG5cdFx0ZW1vamlQaWNrZXIuY29uc3RyYWludHMgPSBcblx0XHRcdGxlYWRpbmc6MVxuXHRcdFx0dHJhaWxpbmc6MVxuXHRcdFx0Ym90dG9tOjFcblx0XHRcdGhlaWdodDo0MlxuXHRcdEFCQyA9IG5ldyBMYXllciBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiLCBzdXBlckxheWVyOmVtb2ppUGlja2VyXG5cdFx0QUJDLmh0bWwgPSBcIkFCQ1wiXG5cdFx0QUJDLnN0eWxlID0ge1xuXHRcdFx0XCJmb250LXNpemVcIiA6IGV4cG9ydHMucHgoMTUpICsgXCJweFwiXG5cdFx0XHRcImZvbnQtd2VpZ2h0XCIgOiA1MDBcblx0XHRcdFwiZm9udC1mYW1pbHlcIiA6ICctYXBwbGUtc3lzdGVtLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmJ1xuXHRcdFx0XCJjb2xvclwiIDogXCIjNEY1NTVEXCJcblx0XHR9XG5cdFx0QUJDLmNvbnN0cmFpbnRzID0gXG5cdFx0XHRsZWFkaW5nOjEyXG5cdFx0XHRib3R0b206MTRcblx0XHRcdHdpZHRoOjMwXG5cdFx0XHRoZWlnaHQ6MTVcblxuXHRcdGV4cG9ydHMubGF5b3V0KClcblx0XHRyb3cgPSAtMVxuXHRcdEFCQy5vbiBFdmVudHMuQ2xpY2ssIC0+XG5cdFx0XHRlbW9qaUJHLmRlc3Ryb3koKVxuXHRcdGZyZXF1ZW50ID0gbmV3IExheWVyIHN1cGVyTGF5ZXI6ZW1vamlQaWNrZXIsIGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCJcblx0XHRmcmVxdWVudC5odG1sID0gXCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0XHRcdDxzdmcgd2lkdGg9JyN7ZXhwb3J0cy5weCgxNyl9cHgnIGhlaWdodD0nI3tleHBvcnRzLnB4KDE2KX1weCcgdmlld0JveD0nMCAwIDE3IDE2JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHhtbG5zOnNrZXRjaD0naHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zJz5cblx0XHRcdCAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNS4yICgyNTIzNSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdFx0XHQgICAgPHRpdGxlPlJlY2VudDwvdGl0bGU+XG5cdFx0XHQgICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0XHQgICAgPGRlZnM+PC9kZWZzPlxuXHRcdFx0ICAgIDxnIGlkPSdpT1MtOS1LZXlib2FyZHMnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIHNrZXRjaDp0eXBlPSdNU1BhZ2UnPlxuXHRcdFx0ICAgICAgICA8ZyBpZD0naVBob25lLTYtUG9ydHJhaXQtTGlnaHQtQ29weScgc2tldGNoOnR5cGU9J01TQXJ0Ym9hcmRHcm91cCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTU1LjAwMDAwMCwgLTYzOC4wMDAwMDApJz5cblx0XHRcdCAgICAgICAgICAgIDxnIGlkPSdLZXlib2FyZHMnIHNrZXRjaDp0eXBlPSdNU0xheWVyR3JvdXAnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDAuMDAwMDAwLCA0MDguMDAwMDAwKSc+XG5cdFx0XHQgICAgICAgICAgICAgICAgPGcgaWQ9J1JlY2VudCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoNTUuNTAwMDAwLCAyMzAuMDAwMDAwKScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCc+XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgaWQ9J0JvZHknIHN0cm9rZT0nIzRBNTQ2MScgY3g9JzgnIGN5PSc4JyByPSc4Jz48L2NpcmNsZT5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0nTTcuNSw3LjUgTDcuNSw4LjUgTDguNSw4LjUgTDguNSwyIEw3LjUsMiBMNy41LDcuNSBMNCw3LjUgTDQsOC41IEw4LjUsOC41IEw4LjUsNy41IEw3LjUsNy41IFonIGlkPSdIYW5kcycgZmlsbD0nIzRBNTQ2MSc+PC9wYXRoPlxuXHRcdFx0ICAgICAgICAgICAgICAgIDwvZz5cblx0XHRcdCAgICAgICAgICAgIDwvZz5cblx0XHRcdCAgICAgICAgPC9nPlxuXHRcdFx0ICAgIDwvZz5cblx0XHRcdDwvc3ZnPlwiXG5cdFx0ZnJlcXVlbnQuY29uc3RyYWludHMgPSBcblx0XHRcdGxlYWRpbmcgOiBbQUJDLCAxNV1cblx0XHRcdGJvdHRvbTogMTRcblx0XHRcdHdpZHRoOjE2XG5cdFx0XHRoZWlnaHQ6MjBcblx0XHRleHBvcnRzLmxheW91dCgpXG5cdFx0c21pbGV5cyA9IG5ldyBMYXllciBzdXBlckxheWVyOmVtb2ppUGlja2VyLCBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiLCBvcGFjaXR5Oi40XG5cdFx0c21pbGV5cy5odG1sID0gXCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0XHRcdDxzdmcgd2lkdGg9JyN7ZXhwb3J0cy5weCgxNyl9cHgnIGhlaWdodD0nI3tleHBvcnRzLnB4KDE2KX1weCcgdmlld0JveD0nMCAwIDE3IDE2JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHhtbG5zOnNrZXRjaD0naHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zJz5cblx0XHRcdCAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNS4yICgyNTIzNSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdFx0XHQgICAgPHRpdGxlPjpEPC90aXRsZT5cblx0XHRcdCAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHRcdCAgICA8ZGVmcz48L2RlZnM+XG5cdFx0XHQgICAgPGcgaWQ9J2lPUy05LUtleWJvYXJkcycgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCcgc2tldGNoOnR5cGU9J01TUGFnZSc+XG5cdFx0XHQgICAgICAgIDxnIGlkPSdpUGhvbmUtNi1Qb3J0cmFpdC1MaWdodC1Db3B5JyBza2V0Y2g6dHlwZT0nTVNBcnRib2FyZEdyb3VwJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtODYuMDAwMDAwLCAtNjM4LjAwMDAwMCknPlxuXHRcdFx0ICAgICAgICAgICAgPGcgaWQ9J0tleWJvYXJkcycgc2tldGNoOnR5cGU9J01TTGF5ZXJHcm91cCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMC4wMDAwMDAsIDQwOC4wMDAwMDApJz5cblx0XHRcdCAgICAgICAgICAgICAgICA8ZyBpZD0nOkQnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDg3LjAwMDAwMCwgMjMwLjUwMDAwMCknIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnPlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGlkPSdIZWFkJyBzdHJva2U9JyM0QTU0NjEnIHN0cm9rZS13aWR0aD0nMC43ODk0NzM2ODQnIGN4PSc3LjUnIGN5PSc3LjUnIHI9JzcuNSc+PC9jaXJjbGU+XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9J003LjUsMTMuNTI2MzE1OCBDMTAuMjY4NjkwNywxMy41MjYzMTU4IDEyLjUxMzE1NzksMTAuMzY4NDIxMiAxMi41MTMxNTc5LDkuMTg0MjEwNDUgQzEyLjUxMzE1NzksNy42MDUyNjMxNyAxMS40Mzg5MDk4LDkuMTg0MjEwNDMgNy41LDkuMTg0MjEwNTMgQzMuNTYxMDkwMjMsOS4xODQyMTA2MiAyLjQ4Njg0MjExLDcuNjA1MjYzMTcgMi40ODY4NDIxMSw5LjE4NDIxMDQ1IEMyLjQ4Njg0MjExLDEwLjM2ODQyMSA0LjczMTMwOTM1LDEzLjUyNjMxNTggNy41LDEzLjUyNjMxNTggWiBNNy41LDEwLjk2MDUyNjMgQzguOTMyMzMwODMsMTEuMTU3ODk0NyAxMS43OTY5OTI1LDEwLjM2ODQyMSAxMS43OTY5OTI1LDkuNDQ0MjM1NTIgQzExLjc5Njk5MjUsOC43ODk0NzM2OCAxMC44NzYyMDg0LDkuNTc4OTQ3MjcgNy41LDkuNzc2MzE1NzkgQzQuMTIzNzkxNjIsOS41Nzg5NDc0MyAzLjIwMzAwODcyLDguNzg5NDczNjkgMy4yMDMwMDc1Miw5LjQ0NDIzNTUyIEMzLjIwMzAwNTgyLDEwLjM2ODQyMSA2LjA2NzY2OTE3LDExLjE1Nzg5NDcgNy41LDEwLjk2MDUyNjMgWicgaWQ9J1NtaWxlJyBmaWxsPScjNEE1NDYxJz48L3BhdGg+XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9J001LjIzNjg0MjExLDYuMzIzNjU5OCBDNS42NDM3ODg3Niw2LjMyMzY1OTggNS45NzM2ODQyMSw1Ljg4MTgzNTU0IDUuOTczNjg0MjEsNS4zMzY4MTc2OSBDNS45NzM2ODQyMSw0Ljc5MTc5OTg1IDUuNjQzNzg4NzYsNC4zNDk5NzU1OSA1LjIzNjg0MjExLDQuMzQ5OTc1NTkgQzQuODI5ODk1NDUsNC4zNDk5NzU1OSA0LjUsNC43OTE3OTk4NSA0LjUsNS4zMzY4MTc2OSBDNC41LDUuODgxODM1NTQgNC44Mjk4OTU0NSw2LjMyMzY1OTggNS4yMzY4NDIxMSw2LjMyMzY1OTggWiBNOS43MzY4NDIxMSw2LjMyMzY1OTggQzEwLjE0Mzc4ODgsNi4zMjM2NTk4IDEwLjQ3MzY4NDIsNS44ODE4MzU1NCAxMC40NzM2ODQyLDUuMzM2ODE3NjkgQzEwLjQ3MzY4NDIsNC43OTE3OTk4NSAxMC4xNDM3ODg4LDQuMzQ5OTc1NTkgOS43MzY4NDIxMSw0LjM0OTk3NTU5IEM5LjMyOTg5NTQ1LDQuMzQ5OTc1NTkgOSw0Ljc5MTc5OTg1IDksNS4zMzY4MTc2OSBDOSw1Ljg4MTgzNTU0IDkuMzI5ODk1NDUsNi4zMjM2NTk4IDkuNzM2ODQyMTEsNi4zMjM2NTk4IFonIGlkPSdFeWVzJyBmaWxsPScjNEE1NDYxJz48L3BhdGg+XG5cdFx0XHQgICAgICAgICAgICAgICAgPC9nPlxuXHRcdFx0ICAgICAgICAgICAgPC9nPlxuXHRcdFx0ICAgICAgICA8L2c+XG5cdFx0XHQgICAgPC9nPlxuXHRcdFx0PC9zdmc+XCJcblx0XHRzbWlsZXlzLmNvbnN0cmFpbnRzID1cblx0XHRcdGxlYWRpbmcgOiBbZnJlcXVlbnQsIDE1XVxuXHRcdFx0Ym90dG9tOiAxNFxuXHRcdFx0d2lkdGg6MTZcblx0XHRcdGhlaWdodDoyMFxuXHRcdGV4cG9ydHMubGF5b3V0KClcblx0XHRhbmltYWxzID0gbmV3IExheWVyIHN1cGVyTGF5ZXI6ZW1vamlQaWNrZXIsIGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCIsIG9wYWNpdHk6LjRcblx0XHRhbmltYWxzLmh0bWwgPSBcIjw/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyc/PlxuXHRcdFx0PHN2ZyB3aWR0aD0nI3tleHBvcnRzLnB4KDE3KX1weCcgaGVpZ2h0PScje2V4cG9ydHMucHgoMTYpfXB4JyB2aWV3Qm94PScwIDAgMTcgMTcnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycgeG1sbnM6c2tldGNoPSdodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMnPlxuXHRcdFx0ICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy41LjIgKDI1MjM1KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHRcdCAgICA8dGl0bGU+R3JvdXA8L3RpdGxlPlxuXHRcdFx0ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdFx0ICAgIDxkZWZzPjwvZGVmcz5cblx0XHRcdCAgICA8ZyBpZD0nUGFnZS0xJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJyBza2V0Y2g6dHlwZT0nTVNQYWdlJz5cblx0XHRcdCAgICAgICAgPGcgaWQ9J2lQaG9uZS02JyBza2V0Y2g6dHlwZT0nTVNBcnRib2FyZEdyb3VwJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtMTE3LjAwMDAwMCwgLTYzOS4wMDAwMDApJyBzdHJva2U9JyM0QTUzNjEnPlxuXHRcdFx0ICAgICAgICAgICAgPGcgaWQ9J2ljX0Zvb2QnIHNrZXRjaDp0eXBlPSdNU0xheWVyR3JvdXAnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDExOC4wMDAwMDAsIDY0MC4wMDAwMDApJz5cblx0XHRcdCAgICAgICAgICAgICAgICA8ZyBpZD0nR3JvdXAnIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnPlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSdNNS42ODM3NzUzNywxLjM4MTU2NjQ2IEM2LjIzOTI2MDY2LDEuMTM2MjQgNi44NTM3MjAwNSwxIDcuNSwxIEM4LjE0NjI3OTk1LDEgOC43NjA3MzkzNCwxLjEzNjI0IDkuMzE2MjI0NjMsMS4zODE1NjY0NiBDOS44MDg3OTI3NSwwLjU2MjM1OTAxOSAxMC44MjU1ODg4LDAgMTIsMCBDMTMuNjU2ODU0MiwwIDE1LDEuMTE5Mjg4MTMgMTUsMi41IEMxNSwzLjU1NzEzOTggMTQuMjEyNjI0Niw0LjQ2MTAyODQzIDEzLjA5OTkyMjYsNC44MjY2MjUxNCBDMTQuMjQ5NjUyOCw1LjY0MTg1NDIyIDE1LDYuOTgzMzAwNjIgMTUsOC41IEMxNSwxMC43MTY3MTQ0IDEzLjM5NzE4NzMsMTIuNTU5MDcxOSAxMS4yODcyNjcxLDEyLjkzMTM2NzMgQzEwLjQ4NjcyNDgsMTQuMTc1NzcwMyA5LjA4OTYxNjk2LDE1IDcuNSwxNSBDNS45MTAzODMwNCwxNSA0LjUxMzI3NTI0LDE0LjE3NTc3MDMgMy43MTI3MzI5MSwxMi45MzEzNjczIEMxLjYwMjgxMjY4LDEyLjU1OTA3MTkgMCwxMC43MTY3MTQ0IDAsOC41IEMwLDYuOTgzMzAwNjIgMC43NTAzNDcyNDQsNS42NDE4NTQyMiAxLjkwMDA3NzQxLDQuODI2NjI1MTQgQzAuNzg3Mzc1NDQ1LDQuNDYxMDI4NDMgMCwzLjU1NzEzOTggMCwyLjUgQzAsMS4xMTkyODgxMyAxLjM0MzE0NTc1LDAgMywwIEM0LjE3NDQxMTIyLDAgNS4xOTEyMDcyNSwwLjU2MjM1OTAxOSA1LjY4Mzc3NTM3LDEuMzgxNTY2NDYgWicgaWQ9J092YWwtOCc+PC9wYXRoPlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSdNNS43MzgzNDIyOCwxMiBDNS44NjI5MDk3OSwxMiA2LjE0NjQyMzUzLDEyIDYuMTQ2NDIzNTMsMTIgQzYuMTQ2NDIzNTMsMTIgNi40MzIxNTY5NiwxMi40NDI2MTIzIDYuNTI0NjU4MiwxMi40OTE5NzM5IEM2LjY2NDU1NjAxLDEyLjU2NjYyNzcgNywxMi40OTE5NzM5IDcsMTIuNDkxOTczOSBMNywxMiBMOCwxMiBMOCwxMi40OTE5NzM5IEw4LjQ5Nzk5MjI4LDEyLjQ5MTk3MzkgTDguODQzMDE3NjksMTIgTDkuMzkxODQ1NywxMiBDOS4zOTE4NDU3LDEyIDguOTk1OTg0NTcsMTIuOTgzOTQ3OCA4LjQ5Nzk5MjI4LDEyLjk4Mzk0NzggTDYuNjA3MDI0MDcsMTIuOTgzOTQ3OCBDNi4yMTQwNDgxMywxMi45ODM5NDc4IDUuNDU5OTYwOTQsMTIgNS43MzgzNDIyOCwxMiBaJyBpZD0nUmVjdGFuZ2xlLTQ0LUNvcHktMic+PC9wYXRoPlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGlkPSdPdmFsLTE0JyBjeD0nMTAuNScgY3k9JzcuNScgcj0nMC41Jz48L2NpcmNsZT5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBpZD0nT3ZhbC0xNC1Db3B5JyBjeD0nNC41JyBjeT0nNy41JyByPScwLjUnPjwvY2lyY2xlPlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSdNMTIuNjk5OTk2OSw1IEMxMi42OTk5OTY5LDMuMDY3MDAzMzggMTEuMTMyOTkzNiwxLjUgOS4xOTk5OTY5NSwxLjUnIGlkPSdPdmFsLTE2Jz48L3BhdGg+XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9J001LjUsNSBDNS41LDMuMDY3MDAzMzggMy45MzI5OTY2MiwxLjUgMiwxLjUnIGlkPSdPdmFsLTE2LUNvcHknIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDMuNzUwMDAwLCAzLjI1MDAwMCkgc2NhbGUoLTEsIDEpIHRyYW5zbGF0ZSgtMy43NTAwMDAsIC0zLjI1MDAwMCkgJz48L3BhdGg+XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSdSZWN0YW5nbGUtNDQtQ29weScgeD0nNycgeT0nMTEnIHdpZHRoPScxJyBoZWlnaHQ9JzEnPjwvcmVjdD5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0nTTYsMTAgTDYuNSwxMCBMNi40OTk5OTk5OSw5LjUgTDguNTAwMDAwMDUsOS41IEw4LjUwMDAwMDA1LDEwIEw5LDEwIEw5LDEwLjUgTDguNSwxMC41IEw4LjUsMTEgTDYuNSwxMSBMNi41LDEwLjUgTDYsMTAuNSBMNiwxMCBaJyBpZD0nUGF0aCc+PC9wYXRoPlxuXHRcdFx0ICAgICAgICAgICAgICAgIDwvZz5cblx0XHRcdCAgICAgICAgICAgIDwvZz5cblx0XHRcdCAgICAgICAgPC9nPlxuXHRcdFx0ICAgIDwvZz5cblx0XHRcdDwvc3ZnPlwiXG5cdFx0YW5pbWFscy5jb25zdHJhaW50cyA9XG5cdFx0XHRsZWFkaW5nIDogW3NtaWxleXMsIDE1XVxuXHRcdFx0Ym90dG9tOiAxNFxuXHRcdFx0d2lkdGg6MTZcblx0XHRcdGhlaWdodDoyMFxuXHRcdGV4cG9ydHMubGF5b3V0KClcblx0XHRmb29kID0gbmV3IExheWVyIHN1cGVyTGF5ZXI6ZW1vamlQaWNrZXIsIGJhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCIsIG9wYWNpdHk6LjRcblx0XHRmb29kLmh0bWwgPSBcIjw/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyc/PlxuXHRcdFx0PHN2ZyB3aWR0aD0nI3tleHBvcnRzLnB4KDE3KX1weCcgaGVpZ2h0PScje2V4cG9ydHMucHgoMTYpfXB4JyB2aWV3Qm94PScwIDAgMTcgMTcnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycgeG1sbnM6c2tldGNoPSdodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMnPlxuXHRcdFx0ICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy41LjIgKDI1MjM1KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHRcdCAgICA8dGl0bGU+Rm9vZDwvdGl0bGU+XG5cdFx0XHQgICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0XHQgICAgPGRlZnM+PC9kZWZzPlxuXHRcdFx0ICAgIDxnIGlkPSdpT1MtOS1LZXlib2FyZHMnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIHNrZXRjaDp0eXBlPSdNU1BhZ2UnPlxuXHRcdFx0ICAgICAgICA8ZyBpZD0naVBob25lLTYtUG9ydHJhaXQtTGlnaHQtQ29weScgc2tldGNoOnR5cGU9J01TQXJ0Ym9hcmRHcm91cCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTE0OC4wMDAwMDAsIC02MzcuMDAwMDAwKSc+XG5cdFx0XHQgICAgICAgICAgICA8ZyBpZD0nS2V5Ym9hcmRzJyBza2V0Y2g6dHlwZT0nTVNMYXllckdyb3VwJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgwLjAwMDAwMCwgNDA4LjAwMDAwMCknPlxuXHRcdFx0ICAgICAgICAgICAgICAgIDxnIGlkPSdGb29kJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgxNDkuNTAwMDAwLCAyMjkuNTAwMDAwKScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCc+XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9J001LjUsMTUuNSBMMSwxNS41IEwwLDUgTDYuNSw1IEw2LjI2MzYwOTMzLDcuNDgyMTAyMDInIGlkPSdEcmluaycgc3Ryb2tlPScjNEE1NDYxJz48L3BhdGg+XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9J002LjAxMDc3NTQ1LDEuOTY5MzAwOTggTDYuNTE1NzEzNTIsNS4yMjI3MDUzOSBMNS43MTkwODE4NCw1LjY3OTQ3ODEyIEw1LjAzODkwMDksMS45NjkzMDA5OCBMNC44NTU1NzI0NywxLjk2OTMwMDk4IEw0Ljg1NTU3MjQ3LDAuOTY5MzAwOTggTDguODU1NTcyNDcsMC45NjkzMDA5OCBMOC44NTU1NzI0NywxLjk2OTMwMDk4IEw2LjAxMDc3NTQ1LDEuOTY5MzAwOTggWicgaWQ9J1N0cmF3JyBmaWxsPScjNEE1NDYxJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSg2Ljg1NTU3MiwgMy4zMjQzOTApIHJvdGF0ZSgyNC4wMDAwMDApIHRyYW5zbGF0ZSgtNi44NTU1NzIsIC0zLjMyNDM5MCkgJz48L3BhdGg+XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSdCb3R0b20tQnVuJyBzdHJva2U9JyM0QTU0NjEnIHg9JzMnIHk9JzE0JyB3aWR0aD0nMTAuNScgaGVpZ2h0PScxLjUnIHJ4PScxJz48L3JlY3Q+XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9J00xLjUsMTIuNTAyNDQwOCBDMS41LDExLjk0ODgwOCAxLjk0OTE2OTE2LDExLjUgMi40OTI2ODcyMywxMS41IEwxNC4wMDczMTI4LDExLjUgQzE0LjU1NTU1ODgsMTEuNSAxNSwxMS45NDY5NDk5IDE1LDEyLjUwMjQ0MDggTDE1LDEyLjk5NzU1OTIgQzE1LDEzLjU1MTE5MiAxNC41NTA4MzA4LDE0IDE0LjAwNzMxMjgsMTQgTDIuNDkyNjg3MjMsMTQgQzEuOTQ0NDQxMjEsMTQgMS41LDEzLjU1MzA1MDEgMS41LDEyLjk5NzU1OTIgTDEuNSwxMi41MDI0NDA4IFogTTMuOTMzMDAwMDMsMTEuODM5MjcyNyBDMy40MTc3MTgzNCwxMS42NTE4OTc2IDMuNDQ0ODM2OTcsMTEuNSAzLjk5NTU3NzUsMTEuNSBMMTMuMDA0NDIyNSwxMS41IEMxMy41NTQyNjQ4LDExLjUgMTMuNTg2NjA2MSwxMS42NTAzMjUxIDEzLjA2NywxMS44MzkyNzI3IEw4LjUsMTMuNSBMMy45MzMwMDAwMywxMS44MzkyNzI3IFonIGlkPScmcXVvdDtQYXR0eSZxdW90OycgZmlsbD0nIzRBNTQ2MSc+PC9wYXRoPlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSdNMi41LDEwLjUgTDEzLjUsMTAuNSBMMTUsMTEuNSBMMSwxMS41IEwyLjUsMTAuNSBaJyBpZD0nQ2hlZXNlJyBmaWxsPScjNEE1NDYxJz48L3BhdGg+XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9J004LjI1LDEwLjUgQzExLjQyNTYzNzMsMTAuNSAxNCwxMC4zMjg0MjcxIDE0LDkuNSBDMTQsOC42NzE1NzI4OCAxMS40MjU2MzczLDggOC4yNSw4IEM1LjA3NDM2MjY5LDggMi41LDguNjcxNTcyODggMi41LDkuNSBDMi41LDEwLjMyODQyNzEgNS4wNzQzNjI2OSwxMC41IDguMjUsMTAuNSBaJyBpZD0nVG9wLUJ1bicgc3Ryb2tlPScjNEE1NDYxJyBzdHJva2Utd2lkdGg9JzAuNzUnPjwvcGF0aD5cblx0XHRcdCAgICAgICAgICAgICAgICA8L2c+XG5cdFx0XHQgICAgICAgICAgICA8L2c+XG5cdFx0XHQgICAgICAgIDwvZz5cblx0XHRcdCAgICA8L2c+XG5cdFx0XHQ8L3N2Zz5cIlxuXHRcdGZvb2QuY29uc3RyYWludHMgPVxuXHRcdFx0bGVhZGluZyA6IFthbmltYWxzLCAxNV1cblx0XHRcdGJvdHRvbTogMTRcblx0XHRcdHdpZHRoOjE2XG5cdFx0XHRoZWlnaHQ6MjBcblx0XHRleHBvcnRzLmxheW91dCgpXG5cdFx0YWN0aXZpdHkgPSBuZXcgTGF5ZXIgc3VwZXJMYXllcjplbW9qaVBpY2tlciwgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIiwgb3BhY2l0eTouNFxuXHRcdGFjdGl2aXR5Lmh0bWwgPSBcIjw/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyc/PlxuXHRcdFx0PHN2ZyB3aWR0aD0nI3tleHBvcnRzLnB4KDE2KX1weCcgaGVpZ2h0PScje2V4cG9ydHMucHgoMTYpfXB4JyB2aWV3Qm94PScwIDAgMTYgMTYnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycgeG1sbnM6c2tldGNoPSdodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMnPlxuXHRcdFx0ICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy41LjIgKDI1MjM1KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHRcdCAgICA8dGl0bGU+U29jY2VyIEJhbGw8L3RpdGxlPlxuXHRcdFx0ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuXHRcdFx0ICAgIDxkZWZzPlxuXHRcdFx0ICAgICAgICA8Y2lyY2xlIGlkPSdwYXRoLTEnIGN4PSc4JyBjeT0nOCcgcj0nOCc+PC9jaXJjbGU+XG5cdFx0XHQgICAgPC9kZWZzPlxuXHRcdFx0ICAgIDxnIGlkPSdQYWdlLTEnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIHNrZXRjaDp0eXBlPSdNU1BhZ2UnPlxuXHRcdFx0ICAgICAgICA8ZyBpZD0naVBob25lLTYnIHNrZXRjaDp0eXBlPSdNU0FydGJvYXJkR3JvdXAnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC0xNzkuMDAwMDAwLCAtNjM5LjAwMDAwMCknPlxuXHRcdFx0ICAgICAgICAgICAgPGcgaWQ9J1NvY2Nlci1CYWxsJyBza2V0Y2g6dHlwZT0nTVNMYXllckdyb3VwJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgxNzkuMDAwMDAwLCA2MzkuMDAwMDAwKSc+XG5cdFx0XHQgICAgICAgICAgICAgICAgPG1hc2sgaWQ9J21hc2stMicgc2tldGNoOm5hbWU9J01hc2snIGZpbGw9J3doaXRlJz5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPScjcGF0aC0xJz48L3VzZT5cblx0XHRcdCAgICAgICAgICAgICAgICA8L21hc2s+XG5cdFx0XHQgICAgICAgICAgICAgICAgPHVzZSBpZD0nTWFzaycgc3Ryb2tlPScjNEE1MzYxJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJyB4bGluazpocmVmPScjcGF0aC0xJz48L3VzZT5cblx0XHRcdCAgICAgICAgICAgICAgICA8cGF0aCBkPSdNNiwxMi4xMjAzMDQ2IEwxMi44NTczMzg0LDggTDEzLjM3MjM3NjUsOC44NTcxNjczIEw2LjUxNTAzODA3LDEyLjk3NzQ3MTkgTDYsMTIuMTIwMzA0NiBMNiwxMi4xMjAzMDQ2IFonIGlkPSdSZWN0YW5nbGUtNDcnIGZpbGw9JyM0QTUzNjEnIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnIG1hc2s9J3VybCgjbWFzay0yKSc+PC9wYXRoPlxuXHRcdFx0ICAgICAgICAgICAgICAgIDxwYXRoIGQ9J00xMS44NDk2NDgsOC43MjYwNTUxIEwxOS4xMDAxMTAzLDUuMzQ1MTA5MDEgTDE5LjUyMjcyODUsNi4yNTE0MTY4IEwxMi4yNzIyNjYyLDkuNjMyMzYyODkgTDExLjg0OTY0OCw4LjcyNjA1NTEgTDExLjg0OTY0OCw4LjcyNjA1NTEgWicgaWQ9J1JlY3RhbmdsZS00Ny1Db3B5LTMnIGZpbGw9JyM0QTUzNjEnIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnIG1hc2s9J3VybCgjbWFzay0yKSc+PC9wYXRoPlxuXHRcdFx0ICAgICAgICAgICAgICAgIDxwYXRoIGQ9J002LDMuMTIwMzA0NiBMMTIuODU3MzM4NCwtMSBMMTMuMzcyMzc2NSwtMC4xNDI4MzI2OTkgTDYuNTE1MDM4MDcsMy45Nzc0NzE5IEw2LDMuMTIwMzA0NiBMNiwzLjEyMDMwNDYgWicgaWQ9J1JlY3RhbmdsZS00Ny1Db3B5LTInIGZpbGw9JyM0QTUzNjEnIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnIG1hc2s9J3VybCgjbWFzay0yKSc+PC9wYXRoPlxuXHRcdFx0ICAgICAgICAgICAgICAgIDxwYXRoIGQ9J00tMSw3LjEyMDMwNDYgTDUuODU3MzM4NDEsMyBMNi4zNzIzNzY0OCwzLjg1NzE2NzMgTC0wLjQ4NDk2MTkyNSw3Ljk3NzQ3MTkgTC0xLDcuMTIwMzA0NiBMLTEsNy4xMjAzMDQ2IFonIGlkPSdSZWN0YW5nbGUtNDctQ29weS00JyBmaWxsPScjNEE1MzYxJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJyBtYXNrPSd1cmwoI21hc2stMiknPjwvcGF0aD5cblx0XHRcdCAgICAgICAgICAgICAgICA8cmVjdCBpZD0nUmVjdGFuZ2xlLTUwJyBmaWxsPScjNEE1MzYxJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJyBtYXNrPSd1cmwoI21hc2stMiknIHg9JzQnIHk9JzYnIHdpZHRoPScxJyBoZWlnaHQ9JzUnPjwvcmVjdD5cblx0XHRcdCAgICAgICAgICAgICAgICA8cmVjdCBpZD0nUmVjdGFuZ2xlLTUxJyBmaWxsPScjNEE1MzYxJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJyBtYXNrPSd1cmwoI21hc2stMiknIHg9JzExLjUnIHk9JzMnIHdpZHRoPScxJyBoZWlnaHQ9JzEyJz48L3JlY3Q+XG5cdFx0XHQgICAgICAgICAgICAgICAgPHBhdGggZD0nTTUsNC44NTcxNjczIEwxMS44NTczMzg0LDguOTc3NDcxOSBMMTIuMzcyMzc2NSw4LjEyMDMwNDYgTDUuNTE1MDM4MDcsNCBMNSw0Ljg1NzE2NzMnIGlkPSdSZWN0YW5nbGUtNDctQ29weScgZmlsbD0nIzRBNTM2MScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCcgbWFzaz0ndXJsKCNtYXNrLTIpJz48L3BhdGg+XG5cdFx0XHQgICAgICAgICAgICAgICAgPHBhdGggZD0nTTUsMTIuODU3MTY3MyBMMTEuODU3MzM4NCwxNi45Nzc0NzE5IEwxMi4zNzIzNzY1LDE2LjEyMDMwNDYgTDUuNTE1MDM4MDcsMTIgTDUsMTIuODU3MTY3MycgaWQ9J1JlY3RhbmdsZS00Ny1Db3B5LTUnIGZpbGw9JyM0QTUzNjEnIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnIG1hc2s9J3VybCgjbWFzay0yKSc+PC9wYXRoPlxuXHRcdFx0ICAgICAgICAgICAgICAgIDxwYXRoIGQ9J00xMS45MDQ4OTcyLDYuMTQ3NjYwNjQgTDEzLjg3MTQyMjcsOC4zMzE3MDg0OSBMMTIuNDAxOTU5NiwxMC44NzY4OTMzIEw5LjUyNzI1NTg5LDEwLjI2NTg1NjIgTDkuMjIwMDU0NDUsNy4zNDMwMjk2NSBMMTEuOTA0ODk3Miw2LjE0NzY2MDY0JyBpZD0nUG9seWdvbi0xJyBmaWxsPScjRDhEOEQ4JyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJyBtYXNrPSd1cmwoI21hc2stMiknPjwvcGF0aD5cblx0XHRcdCAgICAgICAgICAgICAgICA8cGF0aCBkPSdNMTEuOTA0ODk3Miw2LjE0NzY2MDY0IEwxMy44NzE0MjI3LDguMzMxNzA4NDkgTDEyLjQwMTk1OTYsMTAuODc2ODkzMyBMOS41MjcyNTU4OSwxMC4yNjU4NTYyIEw5LjIyMDA1NDQ1LDcuMzQzMDI5NjUgTDExLjkwNDg5NzIsNi4xNDc2NjA2NCcgaWQ9J1BvbHlnb24tMS1Db3B5JyBmaWxsPScjNEE1MzYxJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJyBtYXNrPSd1cmwoI21hc2stMiknPjwvcGF0aD5cblx0XHRcdCAgICAgICAgICAgICAgICA8cGF0aCBkPSdNNy40NTc3MTE4OSwzLjE5NTA0NzM5IEw3LjM1NTE0NDg0LDYuMTMyMTgzMzMgTDQuNTMwMDY3Niw2Ljk0MjI2MTIgTDIuODg2NjQwODksNC41MDU3ODA5IEw0LjY5NjAyNDU3LDIuMTg5ODc1NDEgTDcuNDU3NzExODksMy4xOTUwNDczOScgaWQ9J1BvbHlnb24tMS1Db3B5LTInIGZpbGw9JyM0QTUzNjEnIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnIG1hc2s9J3VybCgjbWFzay0yKSc+PC9wYXRoPlxuXHRcdFx0ICAgICAgICAgICAgICAgIDxwYXRoIGQ9J003LjQ1NzcxMTg5LDExLjE5NTA0NzQgTDcuMzU1MTQ0ODQsMTQuMTMyMTgzMyBMNC41MzAwNjc2LDE0Ljk0MjI2MTIgTDIuODg2NjQwODksMTIuNTA1NzgwOSBMNC42OTYwMjQ1NywxMC4xODk4NzU0IEw3LjQ1NzcxMTg5LDExLjE5NTA0NzQnIGlkPSdQb2x5Z29uLTEtQ29weS0zJyBmaWxsPScjNEE1MzYxJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJyBtYXNrPSd1cmwoI21hc2stMiknPjwvcGF0aD5cblx0XHRcdCAgICAgICAgICAgICAgICA8cGF0aCBkPSdNMTQuNTQzMTcwMSwwLjA3MjU5MzkzMTQgTDE0LjQ0MDYwMzEsMy4wMDk3Mjk4OCBMMTEuNjE1NTI1OCwzLjgxOTgwNzc0IEw5Ljk3MjA5OTEyLDEuMzgzMzI3NDUgTDExLjc4MTQ4MjgsLTAuOTMyNTc4MDUgTDE0LjU0MzE3MDEsMC4wNzI1OTM5MzE0JyBpZD0nUG9seWdvbi0xLUNvcHktNCcgZmlsbD0nIzRBNTM2MScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCcgbWFzaz0ndXJsKCNtYXNrLTIpJz48L3BhdGg+XG5cdFx0XHQgICAgICAgICAgICA8L2c+XG5cdFx0XHQgICAgICAgIDwvZz5cblx0XHRcdCAgICA8L2c+XG5cdFx0XHQ8L3N2Zz5cIlxuXHRcdGFjdGl2aXR5LmNvbnN0cmFpbnRzID1cblx0XHRcdGxlYWRpbmcgOiBbZm9vZCwgMTVdXG5cdFx0XHRib3R0b206IDE0XG5cdFx0XHR3aWR0aDoxNlxuXHRcdFx0aGVpZ2h0OjIwXG5cdFx0ZXhwb3J0cy5sYXlvdXQoKVxuXHRcdHRyYXZlbCA9IG5ldyBMYXllciBzdXBlckxheWVyOmVtb2ppUGlja2VyLCBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiLCBvcGFjaXR5Oi40XG5cdFx0dHJhdmVsLmh0bWwgPSBcIjw/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyc/PlxuXHRcdFx0PHN2ZyB3aWR0aD0nI3tleHBvcnRzLnB4KDE3KX1weCcgaGVpZ2h0PScje2V4cG9ydHMucHgoMTYpfXB4JyB2aWV3Qm94PScwIDAgMTcgMTYnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycgeG1sbnM6c2tldGNoPSdodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMnPlxuXHRcdFx0ICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy41LjIgKDI1MjM1KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHRcdCAgICA8dGl0bGU+VHJhbnNwb3J0PC90aXRsZT5cblx0XHRcdCAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz5cblx0XHRcdCAgICA8ZGVmcz48L2RlZnM+XG5cdFx0XHQgICAgPGcgaWQ9J2lPUy05LUtleWJvYXJkcycgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCcgc2tldGNoOnR5cGU9J01TUGFnZSc+XG5cdFx0XHQgICAgICAgIDxnIGlkPSdpUGhvbmUtNi1Qb3J0cmFpdC1MaWdodC1Db3B5JyBza2V0Y2g6dHlwZT0nTVNBcnRib2FyZEdyb3VwJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtMjQxLjAwMDAwMCwgLTYzOC4wMDAwMDApJz5cblx0XHRcdCAgICAgICAgICAgIDxnIGlkPSdLZXlib2FyZHMnIHNrZXRjaDp0eXBlPSdNU0xheWVyR3JvdXAnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDAuMDAwMDAwLCA0MDguMDAwMDAwKSc+XG5cdFx0XHQgICAgICAgICAgICAgICAgPGcgaWQ9J1RyYW5zcG9ydCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMjQxLjUwMDAwMCwgMjMwLjAwMDAwMCknIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnPlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSdNMCw2IEwxLDYgTDEsMTUgTDAsMTUgTDAsNiBaIE0xNSw0IEwxNiw0IEwxNiwxNSBMMTUsMTUgTDE1LDQgWiBNMy41LDAgTDQuNSwwIEw0LjUsNyBMMy41LDcgTDMuNSwwIFogTTEsNiBMMy41LDYgTDMuNSw3IEwxLDcgTDEsNiBaIE00LjUsMCBMOS41LDAgTDkuNSwxIEw0LjUsMSBMNC41LDAgWiBNOS41LDAgTDEwLjUsMCBMMTAuNSw2IEw5LjUsNiBMOS41LDAgWiBNMTAuNSw0IEwxNSw0IEwxNSw1IEwxMC41LDUgTDEwLjUsNCBaJyBpZD0nU2t5bGluZScgZmlsbD0nIzRBNTQ2MSc+PC9wYXRoPlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA8ZyBpZD0nV2luZG93cycgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMi4wMDAwMDAsIDIuMDAwMDAwKScgZmlsbD0nIzRBNTQ2MSc+XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0nV2luZG93JyB4PScwJyB5PSc2JyB3aWR0aD0nMScgaGVpZ2h0PScxJz48L3JlY3Q+XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0nV2luZG93JyB4PSczLjUnIHk9JzAnIHdpZHRoPScxJyBoZWlnaHQ9JzEnPjwvcmVjdD5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSdXaW5kb3cnIHg9JzUuNScgeT0nMCcgd2lkdGg9JzEnIGhlaWdodD0nMSc+PC9yZWN0PlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9J1dpbmRvdycgeD0nNS41JyB5PScyJyB3aWR0aD0nMScgaGVpZ2h0PScxJz48L3JlY3Q+XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0nV2luZG93JyB4PSczLjUnIHk9JzInIHdpZHRoPScxJyBoZWlnaHQ9JzEnPjwvcmVjdD5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSdXaW5kb3cnIHg9JzExJyB5PSc0JyB3aWR0aD0nMScgaGVpZ2h0PScxJz48L3JlY3Q+XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0nV2luZG93JyB4PScxMScgeT0nNicgd2lkdGg9JzEnIGhlaWdodD0nMSc+PC9yZWN0PlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA8L2c+XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIDxnIGlkPSdDYXInIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDIuNTAwMDAwLCA2LjUwMDAwMCknPlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0nTTguNSw4IEwyLjUsOCBMMi41LDkuNSBMMC41LDkuNSBMMC41LDcuODY4MTE0NSBDMC4yMDEyMDIxOTIsNy42OTU4MjcwMiAwLDcuMzcwOTEzNjMgMCw2Ljk5MDYzMTEgTDAsNS4wMDkzNjg5IEMwLDQuNDUxOTA5ODUgMC40NDQ4MzY5NzQsNCAwLjk5NTU3NzQ5OSw0IEwxMC4wMDQ0MjI1LDQgQzEwLjU1NDI2NDgsNCAxMSw0LjQ0MzM1MzE4IDExLDUuMDA5MzY4OSBMMTEsNi45OTA2MzExIEMxMSw3LjM2NTMzMTUgMTAuNzk5MDI0NCw3LjY5MjM0NTE5IDEwLjUsNy44NjY0OTAwMiBMMTAuNSw5LjUgTDguNSw5LjUgTDguNSw4IFogTTEuNzUsNi41IEMyLjE2NDIxMzU2LDYuNSAyLjUsNi4xNjQyMTM1NiAyLjUsNS43NSBDMi41LDUuMzM1Nzg2NDQgMi4xNjQyMTM1Niw1IDEuNzUsNSBDMS4zMzU3ODY0NCw1IDEsNS4zMzU3ODY0NCAxLDUuNzUgQzEsNi4xNjQyMTM1NiAxLjMzNTc4NjQ0LDYuNSAxLjc1LDYuNSBaIE05LjI1LDYuNSBDOS42NjQyMTM1Niw2LjUgMTAsNi4xNjQyMTM1NiAxMCw1Ljc1IEMxMCw1LjMzNTc4NjQ0IDkuNjY0MjEzNTYsNSA5LjI1LDUgQzguODM1Nzg2NDQsNSA4LjUsNS4zMzU3ODY0NCA4LjUsNS43NSBDOC41LDYuMTY0MjEzNTYgOC44MzU3ODY0NCw2LjUgOS4yNSw2LjUgWiBNMC41LDcgTDEwLjUsNyBMMTAuNSw3LjUgTDAuNSw3LjUgTDAuNSw3IFogTTMsNi41IEw4LDYuNSBMOCw3IEwzLDcgTDMsNi41IFonIGlkPSdCb2R5JyBmaWxsPScjNEE1NDYxJz48L3BhdGg+XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSdNMS41LDQuNSBMMS41LDMgQzEuNSwxLjM0MzE0NTc1IDIuODM5MDIwMTMsMCA0LjUwMTY2NTQ3LDAgTDYuNDk4MzM0NTMsMCBDOC4xNTYxMDg1OSwwIDkuNSwxLjM0NjUxNzEyIDkuNSwzIEw5LjUsNScgaWQ9J1Jvb2YnIHN0cm9rZT0nIzRBNTQ2MSc+PC9wYXRoPlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA8L2c+XG5cdFx0XHQgICAgICAgICAgICAgICAgPC9nPlxuXHRcdFx0ICAgICAgICAgICAgPC9nPlxuXHRcdFx0ICAgICAgICA8L2c+XG5cdFx0XHQgICAgPC9nPlxuXHRcdFx0PC9zdmc+XCJcblx0XHR0cmF2ZWwuY29uc3RyYWludHMgPVxuXHRcdFx0bGVhZGluZyA6IFthY3Rpdml0eSwgMTVdXG5cdFx0XHRib3R0b206IDE0XG5cdFx0XHR3aWR0aDoxNlxuXHRcdFx0aGVpZ2h0OjIwXG5cdFx0ZXhwb3J0cy5sYXlvdXQoKVxuXHRcdG9iamVjdHMgPSBuZXcgTGF5ZXIgc3VwZXJMYXllcjplbW9qaVBpY2tlciwgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIiwgb3BhY2l0eTouNFxuXHRcdG9iamVjdHMuaHRtbCA9IFwiPD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+XG5cdFx0XHRcdDxzdmcgd2lkdGg9JyN7ZXhwb3J0cy5weCgxMSl9cHgnIGhlaWdodD0nI3tleHBvcnRzLnB4KDE2KX1weCcgdmlld0JveD0nMCAwIDExIDE2JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHhtbG5zOnNrZXRjaD0naHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zJz5cblx0XHRcdCAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNS4yICgyNTIzNSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdFx0XHQgICAgPHRpdGxlPkxpZ2h0YnVsYjwvdGl0bGU+XG5cdFx0XHQgICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0XHQgICAgPGRlZnM+PC9kZWZzPlxuXHRcdFx0ICAgIDxnIGlkPSdQYWdlLTEnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIHNrZXRjaDp0eXBlPSdNU1BhZ2UnPlxuXHRcdFx0ICAgICAgICA8ZyBpZD0naVBob25lLTYnIHNrZXRjaDp0eXBlPSdNU0FydGJvYXJkR3JvdXAnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC0yNDQuMDAwMDAwLCAtNjM5LjAwMDAwMCknIHN0cm9rZT0nIzRBNTM2MSc+XG5cdFx0XHQgICAgICAgICAgICA8ZyBpZD0nTGlnaHRidWxiJyBza2V0Y2g6dHlwZT0nTVNMYXllckdyb3VwJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgyNDQuMDAwMDAwLCA2MzkuMDAwMDAwKSc+XG5cdFx0XHQgICAgICAgICAgICAgICAgPHBhdGggZD0nTTgsMTAuNDAwMjkwNCBDOS43ODA4Mzc5NSw5LjQ4OTkzNDkxIDExLDcuNjM3MzQyNzMgMTEsNS41IEMxMSwyLjQ2MjQzMzg4IDguNTM3NTY2MTIsMCA1LjUsMCBDMi40NjI0MzM4OCwwIDAsMi40NjI0MzM4OCAwLDUuNSBDMCw3LjYzNzM0MjczIDEuMjE5MTYyMDUsOS40ODk5MzQ5MSAzLDEwLjQwMDI5MDQgTDMsMTQuMDAyMDg2OSBDMywxNS4xMDE3Mzk0IDMuODk3NjE2MDIsMTYgNS4wMDQ4ODE1LDE2IEw1Ljk5NTExODUsMTYgQzcuMTA2MTAwMiwxNiA4LDE1LjEwNTUwMzggOCwxNC4wMDIwODY5IEw4LDEwLjQwMDI5MDQgWicgaWQ9J092YWwtMTcnIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnPjwvcGF0aD5cblx0XHRcdCAgICAgICAgICAgICAgICA8cmVjdCBpZD0nUmVjdGFuZ2xlLTUwJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJyB4PSczJyB5PScxMicgd2lkdGg9JzUnIGhlaWdodD0nMSc+PC9yZWN0PlxuXHRcdFx0ICAgICAgICAgICAgICAgIDxyZWN0IGlkPSdSZWN0YW5nbGUtNTEnIHNrZXRjaDp0eXBlPSdNU1NoYXBlR3JvdXAnIHg9JzQnIHk9JzEzLjUnIHdpZHRoPScxLjUnIGhlaWdodD0nMSc+PC9yZWN0PlxuXHRcdFx0ICAgICAgICAgICAgICAgIDxwYXRoIGQ9J001LDguNSBDNSw4LjUgMy40OTk5OTk5OSw3LjUwMDAwMDAxIDQsNyBDNC41MDAwMDAwMSw2LjQ5OTk5OTk5IDUsNy42NjY2NjY2NyA1LjUsOCBDNS41LDggNi41LDYuNTAwMDAwMDEgNyw3IEM3LjUsNy40OTk5OTk5OSA2LDguNSA2LDguNSBMNiwxMSBMNSwxMSBMNSw4LjUgWicgaWQ9J1JlY3RhbmdsZS01Micgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCc+PC9wYXRoPlxuXHRcdFx0ICAgICAgICAgICAgPC9nPlxuXHRcdFx0ICAgICAgICA8L2c+XG5cdFx0XHQgICAgPC9nPlxuXHRcdFx0PC9zdmc+XCJcblx0XHRvYmplY3RzLmNvbnN0cmFpbnRzID1cblx0XHRcdGxlYWRpbmcgOiBbdHJhdmVsLCAxNV1cblx0XHRcdGJvdHRvbTogMTRcblx0XHRcdHdpZHRoOjE2XG5cdFx0XHRoZWlnaHQ6MjBcblx0XHRleHBvcnRzLmxheW91dCgpXG5cdFx0c3ltYm9scyA9IG5ldyBMYXllciBzdXBlckxheWVyOmVtb2ppUGlja2VyLCBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiLCBvcGFjaXR5Oi40XG5cdFx0c3ltYm9scy5odG1sID0gXCI8P3htbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdVVEYtOCcgc3RhbmRhbG9uZT0nbm8nPz5cblx0XHRcdDxzdmcgd2lkdGg9JyN7ZXhwb3J0cy5weCgxNil9cHgnIGhlaWdodD0nI3tleHBvcnRzLnB4KDE3KX1weCcgdmlld0JveD0nMCAwIDE1IDE3JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHhtbG5zOnNrZXRjaD0naHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zJz5cblx0XHRcdCAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuNS4yICgyNTIzNSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG5cdFx0XHQgICAgPHRpdGxlPk9iamVjdHMgJmFtcDsgU3ltYm9sczwvdGl0bGU+XG5cdFx0XHQgICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0XHQgICAgPGRlZnM+PC9kZWZzPlxuXHRcdFx0ICAgIDxnIGlkPSdpT1MtOS1LZXlib2FyZHMnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIHNrZXRjaDp0eXBlPSdNU1BhZ2UnPlxuXHRcdFx0ICAgICAgICA8ZyBpZD0naVBob25lLTYtUG9ydHJhaXQtTGlnaHQtQ29weScgc2tldGNoOnR5cGU9J01TQXJ0Ym9hcmRHcm91cCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTMwNC4wMDAwMDAsIC02MzguMDAwMDAwKScgZmlsbD0nIzRBNTQ2MSc+XG5cdFx0XHQgICAgICAgICAgICA8ZyBpZD0nS2V5Ym9hcmRzJyBza2V0Y2g6dHlwZT0nTVNMYXllckdyb3VwJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgwLjAwMDAwMCwgNDA4LjAwMDAwMCknPlxuXHRcdFx0ICAgICAgICAgICAgICAgIDxnIGlkPSdPYmplY3RzLSZhbXA7LVN5bWJvbHMnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDMwNC4wMDAwMDAsIDIzMC4wMDAwMDApJz5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgPGcgaWQ9J1RoaW5nJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgwLjAwMDAwMCwgMC41MDAwMDApJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJz5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSdSZWN0YW5nbGUtMTIwOScgeD0nMCcgeT0nMCcgd2lkdGg9JzcnIGhlaWdodD0nMSc+PC9yZWN0PlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9J1JlY3RhbmdsZS0xMjA5JyB4PScwJyB5PScyJyB3aWR0aD0nNycgaGVpZ2h0PScxJz48L3JlY3Q+XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0nUmVjdGFuZ2xlLTEyMTEnIHg9JzMnIHk9JzMnIHdpZHRoPScxJyBoZWlnaHQ9JzQnPjwvcmVjdD5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgPC9nPlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSdNMTEuNzUsMC4xNTkyNjM5NzggTDExLjc1LDAgTDExLDAgTDExLDUuMDkxNDkzIEMxMC41OTM0NCw0Ljk0MjIxMzkyIDEwLjA2Mzk2NjIsNC45NjQ1MzIyNCA5LjU1NzE1Mzk5LDUuMTkwMTc5NTcgQzguNjk4NDkyOTMsNS41NzI0ODAxIDguMjMwMDM4MzUsNi4zOTM2NTYyMSA4LjUxMDgzMTQxLDcuMDI0MzI3NzQgQzguNzkxNjI0NDcsNy42NTQ5OTkyOCA5LjcxNTMzNDU0LDcuODU2MzQzNzUgMTAuNTczOTk1Niw3LjQ3NDA0MzIxIEMxMS4yNzYxMTgzLDcuMTYxNDM4MDMgMTEuNzE3MzM5Myw2LjU1NTM4OTcyIDExLjcwMTM1OTUsNiBMMTEuNzUsNiBMMTEuNzUsMS4zOTM4NTA1NiBDMTIuMzE3NTkwOCwxLjU5NTkwMDM3IDEzLDIuMDgxNzQ1NiAxMywzLjI1IEMxMyw0LjI1IDEyLjc1LDUuNSAxMi43NSw1LjUgQzEyLjc1LDUuNSAxMy43NSw0Ljc1IDEzLjc1LDIuNSBDMTMuNzUsMS4wMjI1NjEwMSAxMi41NjQyNjc0LDAuNDA3NDczMDE5IDExLjc1LDAuMTU5MjYzOTc4IFonIGlkPSdOb3RlJyBza2V0Y2g6dHlwZT0nTVNTaGFwZUdyb3VwJz48L3BhdGg+XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIDx0ZXh0IGlkPScmYW1wOycgc2tldGNoOnR5cGU9J01TVGV4dExheWVyJyBmb250LWZhbWlseT0nU0YgVUkgRGlzcGxheScgZm9udC1zaXplPSc5LjUnIGZvbnQtd2VpZ2h0PSdub3JtYWwnPlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPHRzcGFuIHg9JzAuMjUnIHk9JzE2Jz4mYW1wOzwvdHNwYW4+XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIDwvdGV4dD5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgPHRleHQgaWQ9JyUnIHNrZXRjaDp0eXBlPSdNU1RleHRMYXllcicgZm9udC1mYW1pbHk9J1NGIFVJIERpc3BsYXknIGZvbnQtc2l6ZT0nOS41JyBmb250LXdlaWdodD0nbm9ybWFsJz5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDx0c3BhbiB4PSc3Ljc1JyB5PScxNic+JTwvdHNwYW4+XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIDwvdGV4dD5cblx0XHRcdCAgICAgICAgICAgICAgICA8L2c+XG5cdFx0XHQgICAgICAgICAgICA8L2c+XG5cdFx0XHQgICAgICAgIDwvZz5cblx0XHRcdCAgICA8L2c+XG5cdFx0XHQ8L3N2Zz5cIlxuXHRcdHN5bWJvbHMuY29uc3RyYWludHMgPVxuXHRcdFx0bGVhZGluZyA6IFtvYmplY3RzLCAxNV1cblx0XHRcdGJvdHRvbTogMTRcblx0XHRcdHdpZHRoOjE2XG5cdFx0XHRoZWlnaHQ6MjBcblx0XHRleHBvcnRzLmxheW91dCgpXG5cdFx0ZmxhZ3MgPSBuZXcgTGF5ZXIgc3VwZXJMYXllcjplbW9qaVBpY2tlciwgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIiwgb3BhY2l0eTouNFxuXHRcdGZsYWdzLmh0bWwgPSBcIjw/eG1sIHZlcnNpb249JzEuMCcgZW5jb2Rpbmc9J1VURi04JyBzdGFuZGFsb25lPSdubyc/PlxuXHRcdFx0PHN2ZyB3aWR0aD0nI3tleHBvcnRzLnB4KDExKX1weCcgaGVpZ2h0PScje2V4cG9ydHMucHgoMTUpfXB4JyB2aWV3Qm94PScwIDAgMTEgMTUnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycgeG1sbnM6c2tldGNoPSdodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMnPlxuXHRcdFx0ICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy41LjIgKDI1MjM1KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT5cblx0XHRcdCAgICA8dGl0bGU+RmxhZzwvdGl0bGU+XG5cdFx0XHQgICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XG5cdFx0XHQgICAgPGRlZnM+PC9kZWZzPlxuXHRcdFx0ICAgIDxnIGlkPSdpT1MtOS1LZXlib2FyZHMnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIHNrZXRjaDp0eXBlPSdNU1BhZ2UnPlxuXHRcdFx0ICAgICAgICA8ZyBpZD0naVBob25lLTYtUG9ydHJhaXQtTGlnaHQtQ29weScgc2tldGNoOnR5cGU9J01TQXJ0Ym9hcmRHcm91cCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTI3NS4wMDAwMDAsIC02MzkuMDAwMDAwKSc+XG5cdFx0XHQgICAgICAgICAgICA8ZyBpZD0nS2V5Ym9hcmRzJyBza2V0Y2g6dHlwZT0nTVNMYXllckdyb3VwJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgwLjAwMDAwMCwgNDA4LjAwMDAwMCknPlxuXHRcdFx0ICAgICAgICAgICAgICAgIDxnIGlkPSdGbGFnJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgyNzUuMDAwMDAwLCAyMzEuNTAwMDAwKScgc2tldGNoOnR5cGU9J01TU2hhcGVHcm91cCc+XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSdQb2xlJyBmaWxsPScjNEE1NDYxJyB4PScwJyB5PScwJyB3aWR0aD0nMScgaGVpZ2h0PScxNCc+PC9yZWN0PlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSdNMSwxIEMxLDEgMS4yNSwyIDMuNSwyIEM1Ljc1LDIgNiwwLjc0OTk5OTk5OCA4LDAuNzUgQzEwLDAuNzQ5OTk5OTk4IDEwLDEuNSAxMCwxLjUgTDEwLDcuNSBDMTAsNy41IDEwLDYuNSA4LDYuNSBDNiw2LjUgNC44MDYyMzkxMSw4IDMuNSw4IEMyLjE5Mzc2MDg5LDggMSw3IDEsNyBMMSwxIFonIHN0cm9rZT0nIzRBNTQ2MScgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCc+PC9wYXRoPlxuXHRcdFx0ICAgICAgICAgICAgICAgIDwvZz5cblx0XHRcdCAgICAgICAgICAgIDwvZz5cblx0XHRcdCAgICAgICAgPC9nPlxuXHRcdFx0ICAgIDwvZz5cblx0XHRcdDwvc3ZnPlwiXG5cdFx0ZmxhZ3MuY29uc3RyYWludHMgPVxuXHRcdFx0bGVhZGluZyA6IFtzeW1ib2xzLCAxNV1cblx0XHRcdGJvdHRvbTogMTRcblx0XHRcdHdpZHRoOjE2XG5cdFx0XHRoZWlnaHQ6MjBcblx0XHRleHBvcnRzLmxheW91dCgpXG5cblx0XHRsb2FkRW1vamlzID0gKGVtKSAtPlxuXHRcdFx0cm93KysgXG5cdFx0XHRpbmRleCA9IGVtb2ppc0FycmF5LmluZGV4T2YoZW0pXG5cdFx0XHRjb2wgPSBNYXRoLmZsb29yKGluZGV4LzUpXG5cdFx0XHRpZiByb3cgPiA0XG5cdFx0XHRcdHJvdyA9IDAgXG5cdFx0XHRlbW9qaSA9IG5ldyBMYXllciB4OmNvbCpib3ggKyAoZW1vamlTcGFjZXIgKiBjb2wpICsgZXhwb3J0cy5weCgzKSwgeTpyb3cqYm94ICsgKGVtb2ppU3BhY2VyICogcm93KSArIGV4cG9ydHMucHgoNDApLCBzdXBlckxheWVyOmVtb2ppR2FsbGV5LmNvbnRlbnQsIHdpZHRoOmJveCwgaGVpZ2h0OmJveCwgbmFtZTpkZWNvZGVVUklDb21wb25lbnQoZW0pLCBiYWNrZ3JvdW5kQ29sb3I6XCJ0cmFuc3BhcmVudFwiXG5cdFx0XHRlbW9qaS5odG1sID0gZGVjb2RlVVJJQ29tcG9uZW50KGVtKVxuXHRcdFx0ZW1vamkuc3R5bGUgPSB7XG5cdFx0XHRcdFwiZm9udC1zaXplXCIgOiBleHBvcnRzLnB4KDI2KSArIFwicHhcIlxuXHRcdFx0XHRcImxpbmUtaGVpZ2h0XCIgOiBib3ggKyBcInB4XCJcblx0XHRcdFx0XCJ0ZXh0LWFsaWduXCIgOiBcImNlbnRlclwiXG5cdFx0XHR9XG5cdFx0XHRlbW9qaS5vbiBFdmVudHMuQ2xpY2ssIC0+XG5cdFx0XHRcdHByaW50IEAubmFtZVxuXHRcdFx0ZW1vamlzTG9hZGVkKytcblx0XHRcdHByaW50IGVtb2ppc0xvYWRlZFxuXG5cdFx0aW5jID0gMjAwXG5cdFx0Zmlyc3RMb2FkID0gLjFcblx0XHR0aW1lSW5jID0gMlxuXHRcdGZ1bGxBbW91bnQgPSBlbW9qaXNBcnJheS5sZW5ndGhcblx0XHRsb2FkcyA9IE1hdGguY2VpbChmdWxsQW1vdW50IC8gaW5jKSAtIDFcblx0XHRwYXJ0aWFsQW1vdW50ID0gZnVsbEFtb3VudCAlIGluY1xuXHRcdGVtb2ppc0xvYWRlZCA9IDBcblx0XHRmb3IgaSBpbiBbMC4ubG9hZHNdXG5cdFx0XHRpKytcblx0XHRcdFxuXHRcdCNTY3JvbGwgTG9hZFxuXHRcdGVtb2ppR2FsbGV5Lm9uIEV2ZW50cy5Nb3ZlLCAtPlxuXHRcdFx0aWYgZW1vamlHYWxsZXkuc2Nyb2xsWCA+IDIwMDAgJiYgZW1vamlzTG9hZGVkIDwgNDAwXG5cdFx0XHRcdGZvciBlbSBpbiBlbW9qaXNBcnJheVsyMDAuLi40MDBdXG5cdFx0XHRcdFx0bG9hZEVtb2ppcyhlbSlcblx0XHRcdFx0ZW1vamlHYWxsZXkuc2Nyb2xsWCA9IDIwMDFcblx0XHRcdGlmIGVtb2ppR2FsbGV5LnNjcm9sbFggPiA1MDAwICYmIGVtb2ppc0xvYWRlZCA8IDYwMFxuXHRcdFx0XHRmb3IgZW0gaW4gZW1vamlzQXJyYXlbNDAwLi4uNjAwXVxuXHRcdFx0XHRcdGxvYWRFbW9qaXMoZW0pXG5cdFx0XHRcdGVtb2ppR2FsbGV5LnNjcm9sbFggPSA1MDAxXG5cdFx0XHRpZiBlbW9qaUdhbGxleS5zY3JvbGxYID4gNzUwMCAmJiBlbW9qaXNMb2FkZWQgPCA4MDBcblx0XHRcdFx0Zm9yIGVtIGluIGVtb2ppc0FycmF5WzYwMC4uLjgwMF1cblx0XHRcdFx0XHRsb2FkRW1vamlzKGVtKVxuXHRcdFx0XHRlbW9qaUdhbGxleS5zY3JvbGxYID0gNzUwMVxuXHRcdFx0aWYgZW1vamlHYWxsZXkuc2Nyb2xsWCA+IDEwMDAwICYmIGVtb2ppc0xvYWRlZCA8IDEwMDBcblx0XHRcdFx0Zm9yIGVtIGluIGVtb2ppc0FycmF5WzgwMC4uLjEwMDBdXG5cdFx0XHRcdFx0bG9hZEVtb2ppcyhlbSlcblx0XHRcdFx0ZW1vamlHYWxsZXkuc2Nyb2xsWCA9IDEwMDAxXG5cdFx0XHRpZiBlbW9qaUdhbGxleS5zY3JvbGxYID4gMTI1MDAgJiYgZW1vamlzTG9hZGVkIDwgMTIwMFxuXHRcdFx0XHRmb3IgZW0gaW4gZW1vamlzQXJyYXlbMTAwMC4uLjEyOTddXG5cdFx0XHRcdFx0bG9hZEVtb2ppcyhlbSlcblx0XHRcdFx0ZW1vamlHYWxsZXkuc2Nyb2xsWCA9IDEyNTAxXG5cblx0XHQjVGltZSBMb2FkXG5cdFx0VXRpbHMuZGVsYXkgMSwgLT4gXG5cdFx0XHRpZiBlbW9qaXNMb2FkZWQgPCA0MDAgJiYgZW1vamlHYWxsZXkuc2Nyb2xsWCA9PSAwXG5cdFx0XHRcdHNjcm9sbFggPSBlbW9qaUdhbGxleS5zY3JvbGxYXG5cdFx0XHRcdGZvciBlbSBpbiBlbW9qaXNBcnJheVsyMDAuLi40MDBdXG5cdFx0XHRcdFx0bG9hZEVtb2ppcyhlbSlcblx0XHRVdGlscy5kZWxheSAyLjUsIC0+IFxuXHRcdFx0aWYgZW1vamlzTG9hZGVkIDwgNjAwICYmIGVtb2ppR2FsbGV5LnNjcm9sbFggPT0gMFxuXHRcdFx0XHRzY3JvbGxYID0gZW1vamlHYWxsZXkuc2Nyb2xsWFxuXHRcdFx0XHRmb3IgZW0gaW4gZW1vamlzQXJyYXlbNDAwLi4uNjAwXVxuXHRcdFx0XHRcdGxvYWRFbW9qaXMoZW0pXG5cdFx0VXRpbHMuZGVsYXkgMi41LCAtPiBcblx0XHRcdGlmIGVtb2ppc0xvYWRlZCA8IDgwMCAmJiBlbW9qaUdhbGxleS5zY3JvbGxYID09IDBcblx0XHRcdFx0c2Nyb2xsWCA9IGVtb2ppR2FsbGV5LnNjcm9sbFhcblx0XHRcdFx0Zm9yIGVtIGluIGVtb2ppc0FycmF5WzYwMC4uLjgwMF1cblx0XHRcdFx0XHRsb2FkRW1vamlzKGVtKVxuXHRcdFV0aWxzLmRlbGF5IDUuNSwgLT4gXG5cdFx0XHRpZiBlbW9qaXNMb2FkZWQgPCAxMDAwICYmIGVtb2ppR2FsbGV5LnNjcm9sbFggPT0gMFxuXHRcdFx0XHRzY3JvbGxYID0gZW1vamlHYWxsZXkuc2Nyb2xsWFxuXHRcdFx0XHRmb3IgZW0gaW4gZW1vamlzQXJyYXlbODAwLi4uMTAwMF1cblx0XHRcdFx0XHRsb2FkRW1vamlzKGVtKVxuXHRcdFV0aWxzLmRlbGF5IDcsIC0+IFxuXHRcdFx0aWYgZW1vamlzTG9hZGVkIDwgMTI5NyAmJiBlbW9qaUdhbGxleS5zY3JvbGxYID09IDBcblx0XHRcdFx0c2Nyb2xsWCA9IGVtb2ppR2FsbGV5LnNjcm9sbFhcblx0XHRcdFx0Zm9yIGVtIGluIGVtb2ppc0FycmF5WzEwMDAuLi4xMjk3XVxuXHRcdFx0XHRcdGxvYWRFbW9qaXMoZW0pXG5cblxuXHRcdGZvciBlbSBpbiBmcmVxRW1vamlzQXJyYXlcblx0XHRcdGxvYWRFbW9qaXMoZW0pXG5cdFx0Zm9yIGVtIGluIGVtb2ppc0FycmF5WzAuLi5pbmNdXG5cdFx0XHRsb2FkRW1vamlzKGVtKVxuXG5cblx0XHRmb3Igc2VjIGluIGVtb2ppU2VjdGlvbnNcblx0XHRcdGluZGV4ID0gZW1vamlTZWN0aW9ucy5pbmRleE9mKHNlYylcblx0XHRcdHRpdGxlID0gbmV3IExheWVyIHN1cGVyTGF5ZXI6ZW1vamlHYWxsZXkuY29udGVudCwgYmFja2dyb3VuZENvbG9yOlwidHJhbnNwYXJlbnRcIiwgeDppbmRleCo1MDAwICsgZXhwb3J0cy5weCg4KSwgaGVpZ2h0OjgwLCB3aWR0aDo4MDBcblx0XHRcdHRpdGxlLmh0bWwgPSBzZWNcblx0XHRcdHRpdGxlLnN0eWxlID0ge1xuXHRcdFx0XHRcImZvbnQtc2l6ZVwiIDogZXhwb3J0cy5weCgxMikgKyBcInB4XCJcblx0XHRcdFx0XCJmb250LXdlaWdodFwiIDogNjAwXG5cdFx0XHRcdFwiZm9udC1mYW1pbHlcIiA6ICctYXBwbGUtc3lzdGVtLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmJ1xuXHRcdFx0XHQnbGluZS1oZWlnaHQnIDogZXhwb3J0cy5weCg0MikgKyBcInB4XCJcblx0XHRcdFx0J2xldHRlci1zcGFjaW5nJyA6IGV4cG9ydHMucHgoMC43KSArIFwicHhcIlxuXHRcdFx0XHQnY29sb3InIDogXCIjQTVBNkE5XCJcblx0XHRcdFx0J3RleHQtdHJhbnNmb3JtJyA6ICd1cHBlcmNhc2UnXG5cdFx0XHR9XG5cblxuXHRlbW9qaUtleS5vbiBFdmVudHMuVG91Y2hFbmQsIC0+XG5cdFx0ZW1vamlLZXkuYmFja2dyb3VuZENvbG9yID0gXCIjQUFCM0JDXCJcblxuXG5cdHJldHVybktleSA9IG5ldyBMYXllciBzdXBlckxheWVyOmJvYXJkLCBib3JkZXJSYWRpdXM6ZXhwb3J0cy5weCg1KSwgYmFja2dyb3VuZENvbG9yOlwiI0FBQjNCQ1wiLCBzaGFkb3dZOmV4cG9ydHMucHgoMSksIHNoYWRvd0NvbG9yOlwiIzkyOTQ5OFwiLCBjb2xvcjpcImJsYWNrXCJcblx0cmV0dXJuS2V5LmNvbnN0cmFpbnRzID0gKHdpZHRoOjg3LjUsIGhlaWdodDo0MiwgdHJhaWxpbmc6MywgYm90dG9tOjQpXG5cdHJldHVybktleS5odG1sID0gXCJyZXR1cm5cIlxuXHRyZXR1cm5LZXkuc3R5bGUgPSB7XG5cdFx0XCJmb250LXNpemVcIiA6IGV4cG9ydHMucHgoMTYpICsgXCJweFwiXG5cdFx0XCJmb250LXdlaWdodFwiIDogNDAwXG5cdFx0XCJmb250LWZhbWlseVwiIDogJy1hcHBsZS1zeXN0ZW0sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYnXG5cdFx0J3RleHQtYWxpZ24nIDogJ2NlbnRlcidcblx0XHQnbGluZS1oZWlnaHQnIDogZXhwb3J0cy5weCg0MikgKyBcInB4XCJcblxuXHR9XG5cdGV4cG9ydHMubGF5b3V0KClcblxuXHRzcGFjZUtleSA9IG5ldyBMYXllciBzdXBlckxheWVyOmJvYXJkLCBib3JkZXJSYWRpdXM6ZXhwb3J0cy5weCg1KSwgYmFja2dyb3VuZENvbG9yOlwid2hpdGVcIiwgc2hhZG93WTpleHBvcnRzLnB4KDEpLCBzaGFkb3dDb2xvcjpcIiM5Mjk0OThcIiwgY29sb3I6XCJibGFja1wiXG5cdHNwYWNlS2V5LmNvbnN0cmFpbnRzID0gKHdpZHRoOjE4MCwgaGVpZ2h0OjQyLCBsZWFkaW5nOltlbW9qaUtleSwgNl0sIGJvdHRvbTo0KVxuXHRzcGFjZUtleS5odG1sID0gXCJzcGFjZVwiXG5cdHNwYWNlS2V5LnN0eWxlID0ge1xuXHRcdFwiZm9udC1zaXplXCIgOiBleHBvcnRzLnB4KDE2KSArIFwicHhcIlxuXHRcdFwiZm9udC13ZWlnaHRcIiA6IDQwMFxuXHRcdFwiZm9udC1mYW1pbHlcIiA6ICctYXBwbGUtc3lzdGVtLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmJ1xuXHRcdCd0ZXh0LWFsaWduJyA6ICdjZW50ZXInXG5cdFx0J2xpbmUtaGVpZ2h0JyA6IGV4cG9ydHMucHgoNDIpICsgXCJweFwiXG5cblx0fVxuXHRleHBvcnRzLmxheW91dCgpXG5cblxuXHRzcGFjZUtleS5vbiBFdmVudHMuVG91Y2hTdGFydCwgLT5cblx0XHRzcGFjZUtleS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNBQUIzQkNcIlxuXHRzcGFjZUtleS5vbiBFdmVudHMuVG91Y2hFbmQsIC0+XG5cdFx0c3BhY2VLZXkuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiXG5cblxuXHRyZXR1cm5LZXkub24gRXZlbnRzLlRvdWNoU3RhcnQsIC0+XG5cdFx0cmV0dXJuS2V5LmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIlxuXHRyZXR1cm5LZXkub24gRXZlbnRzLlRvdWNoRW5kLCAtPlxuXHRcdHJldHVybktleS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNBQUIzQkNcIlxuXG5cblx0cmV0dXJuIHtcblx0XHRcImJvYXJkXCIgOiBib2FyZFxuXHRcdFwia2V5c1wiIDoga2V5c0FycmF5XG5cdFx0XCJrZXlcIiA6IHtcblx0XHRcdFwicVwiIDoga2V5c0FycmF5WzBdXG5cdFx0XHRcIndcIiA6IGtleXNBcnJheVsxXVxuXHRcdFx0XCJlXCIgOiBrZXlzQXJyYXlbMl1cblx0XHRcdFwiclwiIDoga2V5c0FycmF5WzNdXG5cdFx0XHRcInRcIiA6IGtleXNBcnJheVs0XVxuXHRcdFx0XCJ5XCIgOiBrZXlzQXJyYXlbNV1cblx0XHRcdFwidVwiIDoga2V5c0FycmF5WzZdXG5cdFx0XHRcImlcIiA6IGtleXNBcnJheVs3XVxuXHRcdFx0XCJvXCIgOiBrZXlzQXJyYXlbOF1cblx0XHRcdFwicFwiIDoga2V5c0FycmF5WzldXG5cdFx0XHRcImFcIiA6IGtleXNBcnJheVsxMF1cblx0XHRcdFwic1wiIDoga2V5c0FycmF5WzExXVxuXHRcdFx0XCJkXCIgOiBrZXlzQXJyYXlbMTJdXG5cdFx0XHRcImZcIiA6IGtleXNBcnJheVsxM11cblx0XHRcdFwiZ1wiIDoga2V5c0FycmF5WzE0XVxuXHRcdFx0XCJoXCIgOiBrZXlzQXJyYXlbMTVdXG5cdFx0XHRcImpcIiA6IGtleXNBcnJheVsxNl1cblx0XHRcdFwia1wiIDoga2V5c0FycmF5WzE3XVxuXHRcdFx0XCJsXCIgOiBrZXlzQXJyYXlbMThdXG5cdFx0XHRcInpcIiA6IGtleXNBcnJheVsxOV1cblx0XHRcdFwieFwiIDoga2V5c0FycmF5WzIwXVxuXHRcdFx0XCJjXCIgOiBrZXlzQXJyYXlbMjFdXG5cdFx0XHRcInZcIiA6IGtleXNBcnJheVsyMl1cblx0XHRcdFwiYlwiIDoga2V5c0FycmF5WzIzXVxuXHRcdFx0XCJuXCIgOiBrZXlzQXJyYXlbMjRdXG5cdFx0XHRcIm1cIiA6IGtleXNBcnJheVsyNV1cblx0XHR9XG5cdH1cblxuXG4iLCIjIEFkZCB0aGUgZm9sbG93aW5nIGxpbmUgdG8geW91ciBwcm9qZWN0IGluIEZyYW1lciBTdHVkaW8uIFxuIyBteU1vZHVsZSA9IHJlcXVpcmUgXCJteU1vZHVsZVwiXG4jIFJlZmVyZW5jZSB0aGUgY29udGVudHMgYnkgbmFtZSwgbGlrZSBteU1vZHVsZS5teUZ1bmN0aW9uKCkgb3IgbXlNb2R1bGUubXlWYXJcblxuZXhwb3J0cy5teVZhciA9IFwibXlWYXJpYWJsZVwiXG5cbmV4cG9ydHMubXlGdW5jdGlvbiA9IC0+XG5cdHByaW50IFwibXlGdW5jdGlvbiBpcyBydW5uaW5nXCJcblxuZXhwb3J0cy5teUFycmF5ID0gWzEsIDIsIDNdIl19
