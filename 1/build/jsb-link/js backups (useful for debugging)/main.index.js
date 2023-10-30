window.__require = function t(e, o, r) {
function n(i, l) {
if (!o[i]) {
if (!e[i]) {
var s = i.split("/");
s = s[s.length - 1];
if (!e[s]) {
var p = "function" == typeof __require && __require;
if (!l && p) return p(s, !0);
if (c) return c(s, !0);
throw new Error("Cannot find module '" + i + "'");
}
i = s;
}
var a = o[i] = {
exports: {}
};
e[i][0].call(a.exports, function(t) {
return n(e[i][1][t] || t);
}, a, a.exports, t, e, o, r);
}
return o[i].exports;
}
for (var c = "function" == typeof __require && __require, i = 0; i < r.length; i++) n(r[i]);
return n;
}({
Helloworld: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "e1b90/rohdEk4SdmmEZANaD", "Helloworld");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
r(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, r) {
var n, c = arguments.length, i = c < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, o) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, r); else for (var l = t.length - 1; l >= 0; l--) (n = t[l]) && (i = (c < 3 ? n(i) : c > 3 ? n(e, o, i) : n(e, o)) || i);
return c > 3 && i && Object.defineProperty(e, o, i), i;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = cc._decorator, l = i.ccclass, s = i.property, p = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.label = null;
e.text = "hello";
e.sp = null;
return e;
}
e.prototype.onLoad = function() {
window.Helloworld = this;
};
e.prototype.start = function() {
this.label.string = this.text;
};
e.prototype.onClick = function() {
cc.sys.isNative && cc.sys.os == cc.sys.OS_ANDROID && jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "onFacebook", "()V");
};
e.prototype.getJson = function(t) {
console.log("str====" + t);
var e = JSON.parse(t);
console.log("json" + e.avatar);
console.log("json" + e.name);
var o = this;
cc.assetManager.loadRemote(e.avatar, {
ext: ".png"
}, function(t, e) {
t || (o.sp.spriteFrame = new cc.SpriteFrame(e));
});
o.label.string = e.name;
};
c([ s(cc.Label) ], e.prototype, "label", void 0);
c([ s ], e.prototype, "text", void 0);
c([ s(cc.Sprite) ], e.prototype, "sp", void 0);
return c([ l ], e);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {} ],
"use_v2.1-2.2.1_cc.Toggle_event": [ function(t, e) {
"use strict";
cc._RF.push(e, "7158d8AlStD4YcOzf4lnWiL", "use_v2.1-2.2.1_cc.Toggle_event");
cc.Toggle && (cc.Toggle._triggerEventInScript_isChecked = !0);
cc._RF.pop();
}, {} ]
}, {}, [ "Helloworld", "use_v2.1-2.2.1_cc.Toggle_event" ]);