(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("streamdataio", [], factory);
	else if(typeof exports === 'object')
		exports["streamdataio"] = factory();
	else
		root["streamdataio"] = factory();
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 42);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var core = __webpack_require__(9);
var hide = __webpack_require__(6);
var redefine = __webpack_require__(17);
var ctx = __webpack_require__(47);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0);
var fails = __webpack_require__(7);
var defined = __webpack_require__(2);
var quot = /"/g;
// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
var createHTML = function (string, tag, attribute, value) {
  var S = String(defined(string));
  var p1 = '<' + tag;
  if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
  return p1 + '>' + S + '</' + tag + '>';
};
module.exports = function (NAME, exec) {
  var O = {};
  O[NAME] = exec(createHTML);
  $export($export.P + $export.F * fails(function () {
    var test = ''[NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  }), 'String', O);
};


/***/ }),
/* 2 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 3 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(14);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(33)('wks');
var uid = __webpack_require__(18);
var Symbol = __webpack_require__(3).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(16);
var createDesc = __webpack_require__(28);
module.exports = __webpack_require__(12) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var jsonHelper_1 = __webpack_require__(41);
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["ERROR"] = 0] = "ERROR";
    LogLevel[LogLevel["WARN"] = 1] = "WARN";
    LogLevel[LogLevel["INFO"] = 2] = "INFO";
    LogLevel[LogLevel["DEBUG"] = 3] = "DEBUG";
})(LogLevel = exports.LogLevel || (exports.LogLevel = {}));
var Logger = /** @class */ (function () {
    function Logger() {
    }
    /**
     * @memberOf Logger#
     * @param {number} newlevel
     */
    Logger.setLevel = function (newLevel) {
        this._level = newLevel;
    };
    Logger.debug = function (msg) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (this._level >= LogLevel.DEBUG && this._console && this._console.log) {
            this._console.log(this._formatLog(msg, args));
        }
    };
    Logger.info = function (msg) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (this._level >= LogLevel.INFO && this._console && this._console.info) {
            this._console.info(this._formatLog(msg, args));
        }
    };
    Logger.warn = function (msg) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (this._level >= LogLevel.WARN && this._console && this._console.warn) {
            this._console.warn(this._formatLog(msg, args));
        }
    };
    Logger.error = function (msg) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (this._level >= LogLevel.ERROR && this._console && this._console.error) {
            this._console.error(this._formatLog(msg, args));
        }
    };
    /**
     * @private
     * @memberOf Logger#
     */
    Logger._formatLog = function (pattern, args) {
        return pattern.replace ? pattern.replace(/{(\d+)}/g, function (match, index) {
            var replaced;
            if (args[index] && typeof args[index] === 'object' && args[index] instanceof Error) {
                try {
                    replaced = args[index]['message'];
                    if (args[index]['stack']) {
                        console.error(args[index]['stack']);
                    }
                }
                catch (error) {
                    replaced = args[index];
                }
            }
            else if (args[index] && typeof args[index] === 'object') {
                try {
                    if (args[index].toString !== Object.prototype.toString) {
                        replaced = args[index].toString();
                    }
                    else {
                        replaced = jsonHelper_1.JsonHelper.stringify(args[index]);
                    }
                }
                catch (error) {
                    replaced = args[index];
                }
            }
            else if (args[index] && typeof args[index] === 'function') {
                replaced = 'function';
            }
            else if (args[index]) {
                replaced = args[index];
            }
            else {
                replaced = match;
            }
            var replacedString = '' + replaced;
            return replacedString.substring(0, Math.min(500, replacedString.length));
        }) : pattern;
    };
    /**
     * @private
     * @memberOf Logger#
     */
    Logger._console = console;
    /**
     * @private
     * @memberOf Logger#
     */
    Logger._level = LogLevel.INFO;
    return Logger;
}());
exports.Logger = Logger;


/***/ }),
/* 9 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(11);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(7)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 13 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 14 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var hide = __webpack_require__(6);
var redefine = __webpack_require__(17);
var fails = __webpack_require__(7);
var defined = __webpack_require__(2);
var wks = __webpack_require__(5);

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);
  var fns = exec(defined, SYMBOL, ''[KEY]);
  var strfn = fns[0];
  var rxfn = fns[1];
  if (fails(function () {
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  })) {
    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(10);
var IE8_DOM_DEFINE = __webpack_require__(45);
var toPrimitive = __webpack_require__(46);
var dP = Object.defineProperty;

exports.f = __webpack_require__(12) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var hide = __webpack_require__(6);
var has = __webpack_require__(13);
var SRC = __webpack_require__(18)('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(9).inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),
/* 18 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(50);
var defined = __webpack_require__(2);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0);
var defined = __webpack_require__(2);
var fails = __webpack_require__(7);
var spaces = __webpack_require__(52);
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(14);
var defined = __webpack_require__(2);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(33)('keys');
var uid = __webpack_require__(18);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

// helper for String#{startsWith, endsWith, includes}
var isRegExp = __webpack_require__(24);
var defined = __webpack_require__(2);

module.exports = function (that, searchString, NAME) {
  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined(that));
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__(11);
var cof = __webpack_require__(30);
var MATCH = __webpack_require__(5)('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var MATCH = __webpack_require__(5)('match');
module.exports = function (KEY) {
  var re = /./;
  try {
    '/./'[KEY](re);
  } catch (e) {
    try {
      re[MATCH] = false;
      return !'/./'[KEY](re);
    } catch (f) { /* empty */ }
  } return true;
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var logger_1 = __webpack_require__(8);
var Preconditions = /** @class */ (function () {
    function Preconditions() {
    }
    /**
     * @memberOf Preconditions#
     * check if the value is not null
     * @param {*} value
     * @param {string} message
     */
    Preconditions.checkNotNull = function (value, message) {
        if (typeof value === 'undefined' || value === null) {
            if (message) {
                throw new Error(message);
            }
            else {
                throw new Error('value cannot be null');
            }
        }
        return value;
    };
    /**
     * @memberOf Preconditions#
     * log deprecated warning
     * @param {string} functionName
     * @param {string} message
     */
    Preconditions.deprecated = function (functionName, message) {
        this.checkNotNull(functionName, 'functionName cannot be null');
        this.checkNotNull(message, 'message cannot be null');
        logger_1.Logger.warn('\'{0}\' is deprecated because \'{1}\'.', functionName, message);
    };
    /**
     * @memberOf Preconditions#
     * check is the provided expression is true
     * @param {*} expression
     * @param {string} message
     */
    Preconditions.checkExpression = function (expression, message) {
        if (!expression) {
            if (message) {
                throw new Error(message);
            }
            else {
                throw new Error('expression is not valid');
            }
        }
    };
    return Preconditions;
}());
exports.Preconditions = Preconditions;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(11);
var document = __webpack_require__(3).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(14);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 30 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(56);
var descriptor = __webpack_require__(28);
var setToStringTag = __webpack_require__(35);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(6)(IteratorPrototype, __webpack_require__(5)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(9);
var global = __webpack_require__(3);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(31) ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 34 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(16).f;
var has = __webpack_require__(13);
var TAG = __webpack_require__(5)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toInteger = __webpack_require__(14);
var defined = __webpack_require__(2);

module.exports = function repeat(count) {
  var str = String(defined(this));
  var res = '';
  var n = toInteger(count);
  if (n < 0 || n == Infinity) throw RangeError("Count can't be negative");
  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) res += str;
  return res;
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-string-pad-start-end
var toLength = __webpack_require__(4);
var repeat = __webpack_require__(36);
var defined = __webpack_require__(2);

module.exports = function (that, maxLength, fillString, left) {
  var S = String(defined(that));
  var stringLength = S.length;
  var fillStr = fillString === undefined ? ' ' : String(fillString);
  var intMaxLength = toLength(maxLength);
  if (intMaxLength <= stringLength || fillStr == '') return S;
  var fillLen = intMaxLength - stringLength;
  var stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
  if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);
  return left ? stringFiller + S : S + stringFiller;
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = function (regExp, replace) {
  var replacer = replace === Object(replace) ? function (part) {
    return replace[part];
  } : replace;
  return function (it) {
    return String(it).replace(regExp, replacer);
  };
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var original = __webpack_require__(95)
var parse = __webpack_require__(99).parse
var events = __webpack_require__(100)
var https = __webpack_require__(101)
var http = __webpack_require__(102)
var util = __webpack_require__(103)

var httpsOptions = [
  'pfx', 'key', 'passphrase', 'cert', 'ca', 'ciphers',
  'rejectUnauthorized', 'secureProtocol', 'servername'
]

/**
 * Creates a new EventSource object
 *
 * @param {String} url the URL to which to connect
 * @param {Object} [eventSourceInitDict] extra init params. See README for details.
 * @api public
 **/
function EventSource (url, eventSourceInitDict) {
  var readyState = EventSource.CONNECTING
  Object.defineProperty(this, 'readyState', {
    get: function () {
      return readyState
    }
  })

  Object.defineProperty(this, 'url', {
    get: function () {
      return url
    }
  })

  var self = this
  self.reconnectInterval = 1000

  function onConnectionClosed () {
    if (readyState === EventSource.CLOSED) return
    readyState = EventSource.CONNECTING
    _emit('error', new Event('error'))

    // The url may have been changed by a temporary
    // redirect. If that's the case, revert it now.
    if (reconnectUrl) {
      url = reconnectUrl
      reconnectUrl = null
    }
    setTimeout(function () {
      if (readyState !== EventSource.CONNECTING) {
        return
      }
      connect()
    }, self.reconnectInterval)
  }

  function onConnectionError () {
    if (readyState === EventSource.CLOSED) return

    if (readyState === EventSource.OPEN) {
      // close the current connection
      req.abort()
      readyState = EventSource.CONNECTING

      _emit('error', new Event('error'))
    } else if (readyState === EventSource.CONNECTING) {
      _emit('error', new Event('error'))
      // The url may have been changed by a temporary
      // redirect. If that's the case, revert it now.
      if (reconnectUrl) {
        url = reconnectUrl
        reconnectUrl = null
      }
      setTimeout(function () {
        connect()
      }, self.reconnectInterval)
    }
  }

  var req
  var lastEventId = ''
  if (eventSourceInitDict && eventSourceInitDict.headers && eventSourceInitDict.headers['Last-Event-ID']) {
    lastEventId = eventSourceInitDict.headers['Last-Event-ID']
    delete eventSourceInitDict.headers['Last-Event-ID']
  }

  var discardTrailingNewline = false
  var data = ''
  var eventName = ''

  var reconnectUrl = null

  function connect () {
    var options = parse(url)
    var isSecure = options.protocol === 'https:'
    options.headers = { 'Cache-Control': 'no-cache', 'Accept': 'text/event-stream' }
    if (lastEventId) options.headers['Last-Event-ID'] = lastEventId
    if (eventSourceInitDict && eventSourceInitDict.headers) {
      for (var i in eventSourceInitDict.headers) {
        var header = eventSourceInitDict.headers[i]
        if (header) {
          options.headers[i] = header
        }
      }
    }

    // Legacy: this should be specified as `eventSourceInitDict.https.rejectUnauthorized`,
    // but for now exists as a backwards-compatibility layer
    options.rejectUnauthorized = !(eventSourceInitDict && !eventSourceInitDict.rejectUnauthorized)

    // If specify http proxy, make the request to sent to the proxy server,
    // and include the original url in path and Host headers
    var useProxy = eventSourceInitDict && eventSourceInitDict.proxy
    if (useProxy) {
      var proxy = parse(eventSourceInitDict.proxy)
      isSecure = proxy.protocol === 'https:'

      options.protocol = isSecure ? 'https:' : 'http:'
      options.path = url
      options.headers.Host = options.host
      options.hostname = proxy.hostname
      options.host = proxy.host
      options.port = proxy.port
    }

    // If https options are specified, merge them into the request options
    if (eventSourceInitDict && eventSourceInitDict.https) {
      for (var optName in eventSourceInitDict.https) {
        if (httpsOptions.indexOf(optName) === -1) {
          continue
        }

        var option = eventSourceInitDict.https[optName]
        if (option !== undefined) {
          options[optName] = option
        }
      }
    }

    // Pass this on to the XHR
    if (eventSourceInitDict && eventSourceInitDict.withCredentials !== undefined) {
      options.withCredentials = eventSourceInitDict.withCredentials
    }

    req = (isSecure ? https : http).request(options, function (res) {
      // Handle HTTP errors
      if (res.statusCode === 500 || res.statusCode === 502 || res.statusCode === 503 || res.statusCode === 504) {
        _emit('error', new Event('error', {status: res.statusCode}))
        onConnectionClosed()
        return
      }

      // Handle HTTP redirects
      if (res.statusCode === 301 || res.statusCode === 307) {
        if (!res.headers.location) {
          // Server sent redirect response without Location header.
          _emit('error', new Event('error', {status: res.statusCode}))
          return
        }
        if (res.statusCode === 307) reconnectUrl = url
        url = res.headers.location
        process.nextTick(connect)
        return
      }

      if (res.statusCode !== 200) {
        _emit('error', new Event('error', {status: res.statusCode}))
        return self.close()
      }

      readyState = EventSource.OPEN
      res.on('close', function () {
        res.removeAllListeners('close')
        res.removeAllListeners('end')
        onConnectionClosed()
      })

      res.on('end', function () {
        res.removeAllListeners('close')
        res.removeAllListeners('end')
        onConnectionClosed()
      })
      _emit('open', new Event('open'))

      // text/event-stream parser adapted from webkit's
      // Source/WebCore/page/EventSource.cpp
      var buf = ''
      res.on('data', function (chunk) {
        buf += chunk

        var pos = 0
        var length = buf.length

        while (pos < length) {
          if (discardTrailingNewline) {
            if (buf[pos] === '\n') {
              ++pos
            }
            discardTrailingNewline = false
          }

          var lineLength = -1
          var fieldLength = -1
          var c

          for (var i = pos; lineLength < 0 && i < length; ++i) {
            c = buf[i]
            if (c === ':') {
              if (fieldLength < 0) {
                fieldLength = i - pos
              }
            } else if (c === '\r') {
              discardTrailingNewline = true
              lineLength = i - pos
            } else if (c === '\n') {
              lineLength = i - pos
            }
          }

          if (lineLength < 0) {
            break
          }

          parseEventStreamLine(buf, pos, fieldLength, lineLength)

          pos += lineLength + 1
        }

        if (pos === length) {
          buf = ''
        } else if (pos > 0) {
          buf = buf.slice(pos)
        }
      })
    })

    req.on('error', onConnectionError)
    if (req.setNoDelay) req.setNoDelay(true)
    req.end()
  }

  connect()

  function _emit () {
    if (self.listeners(arguments[0]).length > 0) {
      self.emit.apply(self, arguments)
    }
  }

  this._close = function () {
    if (readyState === EventSource.CLOSED) return
    readyState = EventSource.CLOSED
    if (req.abort) req.abort()
    if (req.xhr && req.xhr.abort) req.xhr.abort()
  }

  function parseEventStreamLine (buf, pos, fieldLength, lineLength) {
    if (lineLength === 0) {
      if (data.length > 0) {
        var type = eventName || 'message'
        _emit(type, new MessageEvent(type, {
          data: data.slice(0, -1), // remove trailing newline
          lastEventId: lastEventId,
          origin: original(url)
        }))
        data = ''
      }
      eventName = void 0
    } else if (fieldLength > 0) {
      var noValue = fieldLength < 0
      var step = 0
      var field = buf.slice(pos, pos + (noValue ? lineLength : fieldLength))

      if (noValue) {
        step = lineLength
      } else if (buf[pos + fieldLength + 1] !== ' ') {
        step = fieldLength + 1
      } else {
        step = fieldLength + 2
      }
      pos += step

      var valueLength = lineLength - step
      var value = buf.slice(pos, pos + valueLength)

      if (field === 'data') {
        data += value + '\n'
      } else if (field === 'event') {
        eventName = value
      } else if (field === 'id') {
        lastEventId = value
      } else if (field === 'retry') {
        var retry = parseInt(value, 10)
        if (!Number.isNaN(retry)) {
          self.reconnectInterval = retry
        }
      }
    }
  }
}

module.exports = EventSource

util.inherits(EventSource, events.EventEmitter)
EventSource.prototype.constructor = EventSource; // make stacktraces readable

['open', 'error', 'message'].forEach(function (method) {
  Object.defineProperty(EventSource.prototype, 'on' + method, {
    /**
     * Returns the current listener
     *
     * @return {Mixed} the set function or undefined
     * @api private
     */
    get: function get () {
      var listener = this.listeners(method)[0]
      return listener ? (listener._listener ? listener._listener : listener) : undefined
    },

    /**
     * Start listening for events
     *
     * @param {Function} listener the listener
     * @return {Mixed} the set function or undefined
     * @api private
     */
    set: function set (listener) {
      this.removeAllListeners(method)
      this.addEventListener(method, listener)
    }
  })
})

/**
 * Ready states
 */
Object.defineProperty(EventSource, 'CONNECTING', {enumerable: true, value: 0})
Object.defineProperty(EventSource, 'OPEN', {enumerable: true, value: 1})
Object.defineProperty(EventSource, 'CLOSED', {enumerable: true, value: 2})

EventSource.prototype.CONNECTING = 0
EventSource.prototype.OPEN = 1
EventSource.prototype.CLOSED = 2

/**
 * Closes the connection, if one is made, and sets the readyState attribute to 2 (closed)
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/EventSource/close
 * @api public
 */
EventSource.prototype.close = function () {
  this._close()
}

/**
 * Emulates the W3C Browser based WebSocket interface using addEventListener.
 *
 * @param {String} type A string representing the event type to listen out for
 * @param {Function} listener callback
 * @see https://developer.mozilla.org/en/DOM/element.addEventListener
 * @see http://dev.w3.org/html5/websockets/#the-websocket-interface
 * @api public
 */
EventSource.prototype.addEventListener = function addEventListener (type, listener) {
  if (typeof listener === 'function') {
    // store a reference so we can return the original function again
    listener._listener = listener
    this.on(type, listener)
  }
}

/**
 * Emulates the W3C Browser based WebSocket interface using removeEventListener.
 *
 * @param {String} type A string representing the event type to remove
 * @param {Function} listener callback
 * @see https://developer.mozilla.org/en/DOM/element.removeEventListener
 * @see http://dev.w3.org/html5/websockets/#the-websocket-interface
 * @api public
 */
EventSource.prototype.removeEventListener = function removeEventListener (type, listener) {
  if (typeof listener === 'function') {
    listener._listener = undefined
    this.removeListener(type, listener)
  }
}

/**
 * W3C Event
 *
 * @see http://www.w3.org/TR/DOM-Level-3-Events/#interface-Event
 * @api private
 */
function Event (type, optionalProperties) {
  Object.defineProperty(this, 'type', { writable: false, value: type, enumerable: true })
  if (optionalProperties) {
    for (var f in optionalProperties) {
      if (optionalProperties.hasOwnProperty(f)) {
        Object.defineProperty(this, f, { writable: false, value: optionalProperties[f], enumerable: true })
      }
    }
  }
}

/**
 * W3C MessageEvent
 *
 * @see http://www.w3.org/TR/webmessaging/#event-definitions
 * @api private
 */
function MessageEvent (type, eventInitDict) {
  Object.defineProperty(this, 'type', { writable: false, value: type, enumerable: true })
  for (var f in eventInitDict) {
    if (eventInitDict.hasOwnProperty(f)) {
      Object.defineProperty(this, f, { writable: false, value: eventInitDict[f], enumerable: true })
    }
  }
}


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var JsonHelper = /** @class */ (function () {
    function JsonHelper() {
    }
    JsonHelper.validate = function (stringObj) {
        try {
            JsonHelper.parse(stringObj);
            return true;
        }
        catch (error) {
            return false;
        }
    };
    JsonHelper.parse = function (stringObj) {
        try {
            return JSON.parse(stringObj);
        }
        catch (err) {
            return stringObj;
        }
    };
    JsonHelper.stringify = function (obj) {
        return obj ? JSON.stringify(obj) : 'undefined';
    };
    return JsonHelper;
}());
exports.JsonHelper = JsonHelper;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(43);
__webpack_require__(40);
module.exports = __webpack_require__(104);


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(44);
__webpack_require__(49);
__webpack_require__(51);
__webpack_require__(53);
__webpack_require__(64);
__webpack_require__(65);
__webpack_require__(66);
__webpack_require__(67);
__webpack_require__(68);
__webpack_require__(69);
__webpack_require__(70);
__webpack_require__(71);
__webpack_require__(72);
__webpack_require__(73);
__webpack_require__(74);
__webpack_require__(75);
__webpack_require__(76);
__webpack_require__(77);
__webpack_require__(78);
__webpack_require__(79);
__webpack_require__(80);
__webpack_require__(81);
__webpack_require__(82);
__webpack_require__(83);
__webpack_require__(84);
__webpack_require__(85);
__webpack_require__(86);
__webpack_require__(87);
__webpack_require__(88);
__webpack_require__(89);
__webpack_require__(90);
__webpack_require__(91);
__webpack_require__(93);
__webpack_require__(94);
module.exports = __webpack_require__(9).String;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0);
var toAbsoluteIndex = __webpack_require__(29);
var fromCharCode = String.fromCharCode;
var $fromCodePoint = String.fromCodePoint;

// length should be 1, old FF problem
$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
  // 21.1.2.2 String.fromCodePoint(...codePoints)
  fromCodePoint: function fromCodePoint(x) { // eslint-disable-line no-unused-vars
    var res = [];
    var aLen = arguments.length;
    var i = 0;
    var code;
    while (aLen > i) {
      code = +arguments[i++];
      if (toAbsoluteIndex(code, 0x10ffff) !== code) throw RangeError(code + ' is not a valid code point');
      res.push(code < 0x10000
        ? fromCharCode(code)
        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
      );
    } return res.join('');
  }
});


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(12) && !__webpack_require__(7)(function () {
  return Object.defineProperty(__webpack_require__(27)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(11);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(48);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0);
var toIObject = __webpack_require__(19);
var toLength = __webpack_require__(4);

$export($export.S, 'String', {
  // 21.1.2.4 String.raw(callSite, ...substitutions)
  raw: function raw(callSite) {
    var tpl = toIObject(callSite.raw);
    var len = toLength(tpl.length);
    var aLen = arguments.length;
    var res = [];
    var i = 0;
    while (len > i) {
      res.push(String(tpl[i++]));
      if (i < aLen) res.push(String(arguments[i]));
    } return res.join('');
  }
});


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(30);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.1.3.25 String.prototype.trim()
__webpack_require__(20)('trim', function ($trim) {
  return function trim() {
    return $trim(this, 3);
  };
});


/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(21)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(54)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(31);
var $export = __webpack_require__(0);
var redefine = __webpack_require__(17);
var hide = __webpack_require__(6);
var Iterators = __webpack_require__(55);
var $iterCreate = __webpack_require__(32);
var setToStringTag = __webpack_require__(35);
var getPrototypeOf = __webpack_require__(62);
var ITERATOR = __webpack_require__(5)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(10);
var dPs = __webpack_require__(57);
var enumBugKeys = __webpack_require__(34);
var IE_PROTO = __webpack_require__(22)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(27)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(61).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(16);
var anObject = __webpack_require__(10);
var getKeys = __webpack_require__(58);

module.exports = __webpack_require__(12) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(59);
var enumBugKeys = __webpack_require__(34);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(13);
var toIObject = __webpack_require__(19);
var arrayIndexOf = __webpack_require__(60)(false);
var IE_PROTO = __webpack_require__(22)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(19);
var toLength = __webpack_require__(4);
var toAbsoluteIndex = __webpack_require__(29);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(3).document;
module.exports = document && document.documentElement;


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(13);
var toObject = __webpack_require__(63);
var IE_PROTO = __webpack_require__(22)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(2);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var $at = __webpack_require__(21)(false);
$export($export.P, 'String', {
  // 21.1.3.3 String.prototype.codePointAt(pos)
  codePointAt: function codePointAt(pos) {
    return $at(this, pos);
  }
});


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])

var $export = __webpack_require__(0);
var toLength = __webpack_require__(4);
var context = __webpack_require__(23);
var ENDS_WITH = 'endsWith';
var $endsWith = ''[ENDS_WITH];

$export($export.P + $export.F * __webpack_require__(25)(ENDS_WITH), 'String', {
  endsWith: function endsWith(searchString /* , endPosition = @length */) {
    var that = context(this, searchString, ENDS_WITH);
    var endPosition = arguments.length > 1 ? arguments[1] : undefined;
    var len = toLength(that.length);
    var end = endPosition === undefined ? len : Math.min(toLength(endPosition), len);
    var search = String(searchString);
    return $endsWith
      ? $endsWith.call(that, search, end)
      : that.slice(end - search.length, end) === search;
  }
});


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.7 String.prototype.includes(searchString, position = 0)

var $export = __webpack_require__(0);
var context = __webpack_require__(23);
var INCLUDES = 'includes';

$export($export.P + $export.F * __webpack_require__(25)(INCLUDES), 'String', {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~context(this, searchString, INCLUDES)
      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0);

$export($export.P, 'String', {
  // 21.1.3.13 String.prototype.repeat(count)
  repeat: __webpack_require__(36)
});


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.18 String.prototype.startsWith(searchString [, position ])

var $export = __webpack_require__(0);
var toLength = __webpack_require__(4);
var context = __webpack_require__(23);
var STARTS_WITH = 'startsWith';
var $startsWith = ''[STARTS_WITH];

$export($export.P + $export.F * __webpack_require__(25)(STARTS_WITH), 'String', {
  startsWith: function startsWith(searchString /* , position = 0 */) {
    var that = context(this, searchString, STARTS_WITH);
    var index = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length));
    var search = String(searchString);
    return $startsWith
      ? $startsWith.call(that, search, index)
      : that.slice(index, index + search.length) === search;
  }
});


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

// @@match logic
__webpack_require__(15)('match', 1, function (defined, MATCH, $match) {
  // 21.1.3.11 String.prototype.match(regexp)
  return [function match(regexp) {
    'use strict';
    var O = defined(this);
    var fn = regexp == undefined ? undefined : regexp[MATCH];
    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
  }, $match];
});


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

// @@replace logic
__webpack_require__(15)('replace', 2, function (defined, REPLACE, $replace) {
  // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
  return [function replace(searchValue, replaceValue) {
    'use strict';
    var O = defined(this);
    var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
    return fn !== undefined
      ? fn.call(searchValue, O, replaceValue)
      : $replace.call(String(O), searchValue, replaceValue);
  }, $replace];
});


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

// @@search logic
__webpack_require__(15)('search', 1, function (defined, SEARCH, $search) {
  // 21.1.3.15 String.prototype.search(regexp)
  return [function search(regexp) {
    'use strict';
    var O = defined(this);
    var fn = regexp == undefined ? undefined : regexp[SEARCH];
    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
  }, $search];
});


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

// @@split logic
__webpack_require__(15)('split', 2, function (defined, SPLIT, $split) {
  'use strict';
  var isRegExp = __webpack_require__(24);
  var _split = $split;
  var $push = [].push;
  var $SPLIT = 'split';
  var LENGTH = 'length';
  var LAST_INDEX = 'lastIndex';
  if (
    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
    ''[$SPLIT](/.?/)[LENGTH]
  ) {
    var NPCG = /()??/.exec('')[1] === undefined; // nonparticipating capturing group
    // based on es5-shim implementation, need to rework it
    $split = function (separator, limit) {
      var string = String(this);
      if (separator === undefined && limit === 0) return [];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) return _split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? 4294967295 : limit >>> 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var separator2, match, lastIndex, lastLength, i;
      // Doesn't need flags gy, but they don't hurt
      if (!NPCG) separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\s)', flags);
      while (match = separatorCopy.exec(string)) {
        // `separatorCopy.lastIndex` is not reliable cross-browser
        lastIndex = match.index + match[0][LENGTH];
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          // Fix browsers whose `exec` methods don't consistently return `undefined` for NPCG
          // eslint-disable-next-line no-loop-func
          if (!NPCG && match[LENGTH] > 1) match[0].replace(separator2, function () {
            for (i = 1; i < arguments[LENGTH] - 2; i++) if (arguments[i] === undefined) match[i] = undefined;
          });
          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if (output[LENGTH] >= splitLimit) break;
        }
        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }
      if (lastLastIndex === string[LENGTH]) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
  // Chakra, V8
  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
    $split = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : _split.call(this, separator, limit);
    };
  }
  // 21.1.3.17 String.prototype.split(separator, limit)
  return [function split(separator, limit) {
    var O = defined(this);
    var fn = separator == undefined ? undefined : separator[SPLIT];
    return fn !== undefined ? fn.call(separator, O, limit) : $split.call(String(O), separator, limit);
  }, $split];
});


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.2 String.prototype.anchor(name)
__webpack_require__(1)('anchor', function (createHTML) {
  return function anchor(name) {
    return createHTML(this, 'a', 'name', name);
  };
});


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.3 String.prototype.big()
__webpack_require__(1)('big', function (createHTML) {
  return function big() {
    return createHTML(this, 'big', '', '');
  };
});


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.4 String.prototype.blink()
__webpack_require__(1)('blink', function (createHTML) {
  return function blink() {
    return createHTML(this, 'blink', '', '');
  };
});


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.5 String.prototype.bold()
__webpack_require__(1)('bold', function (createHTML) {
  return function bold() {
    return createHTML(this, 'b', '', '');
  };
});


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.6 String.prototype.fixed()
__webpack_require__(1)('fixed', function (createHTML) {
  return function fixed() {
    return createHTML(this, 'tt', '', '');
  };
});


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.7 String.prototype.fontcolor(color)
__webpack_require__(1)('fontcolor', function (createHTML) {
  return function fontcolor(color) {
    return createHTML(this, 'font', 'color', color);
  };
});


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.8 String.prototype.fontsize(size)
__webpack_require__(1)('fontsize', function (createHTML) {
  return function fontsize(size) {
    return createHTML(this, 'font', 'size', size);
  };
});


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.9 String.prototype.italics()
__webpack_require__(1)('italics', function (createHTML) {
  return function italics() {
    return createHTML(this, 'i', '', '');
  };
});


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.10 String.prototype.link(url)
__webpack_require__(1)('link', function (createHTML) {
  return function link(url) {
    return createHTML(this, 'a', 'href', url);
  };
});


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.11 String.prototype.small()
__webpack_require__(1)('small', function (createHTML) {
  return function small() {
    return createHTML(this, 'small', '', '');
  };
});


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.12 String.prototype.strike()
__webpack_require__(1)('strike', function (createHTML) {
  return function strike() {
    return createHTML(this, 'strike', '', '');
  };
});


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.13 String.prototype.sub()
__webpack_require__(1)('sub', function (createHTML) {
  return function sub() {
    return createHTML(this, 'sub', '', '');
  };
});


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.14 String.prototype.sup()
__webpack_require__(1)('sup', function (createHTML) {
  return function sup() {
    return createHTML(this, 'sup', '', '');
  };
});


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/mathiasbynens/String.prototype.at
var $export = __webpack_require__(0);
var $at = __webpack_require__(21)(true);

$export($export.P, 'String', {
  at: function at(pos) {
    return $at(this, pos);
  }
});


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-string-pad-start-end
var $export = __webpack_require__(0);
var $pad = __webpack_require__(37);
var userAgent = __webpack_require__(38);

// https://github.com/zloirock/core-js/issues/280
$export($export.P + $export.F * /Version\/10\.\d+(\.\d+)? Safari\//.test(userAgent), 'String', {
  padStart: function padStart(maxLength /* , fillString = ' ' */) {
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
  }
});


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-string-pad-start-end
var $export = __webpack_require__(0);
var $pad = __webpack_require__(37);
var userAgent = __webpack_require__(38);

// https://github.com/zloirock/core-js/issues/280
$export($export.P + $export.F * /Version\/10\.\d+(\.\d+)? Safari\//.test(userAgent), 'String', {
  padEnd: function padEnd(maxLength /* , fillString = ' ' */) {
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
  }
});


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
__webpack_require__(20)('trimLeft', function ($trim) {
  return function trimLeft() {
    return $trim(this, 1);
  };
}, 'trimStart');


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
__webpack_require__(20)('trimRight', function ($trim) {
  return function trimRight() {
    return $trim(this, 2);
  };
}, 'trimEnd');


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/String.prototype.matchAll/
var $export = __webpack_require__(0);
var defined = __webpack_require__(2);
var toLength = __webpack_require__(4);
var isRegExp = __webpack_require__(24);
var getFlags = __webpack_require__(92);
var RegExpProto = RegExp.prototype;

var $RegExpStringIterator = function (regexp, string) {
  this._r = regexp;
  this._s = string;
};

__webpack_require__(32)($RegExpStringIterator, 'RegExp String', function next() {
  var match = this._r.exec(this._s);
  return { value: match, done: match === null };
});

$export($export.P, 'String', {
  matchAll: function matchAll(regexp) {
    defined(this);
    if (!isRegExp(regexp)) throw TypeError(regexp + ' is not a regexp!');
    var S = String(this);
    var flags = 'flags' in RegExpProto ? String(regexp.flags) : getFlags.call(regexp);
    var rx = new RegExp(regexp.source, ~flags.indexOf('g') ? flags : 'g' + flags);
    rx.lastIndex = toLength(regexp.lastIndex);
    return new $RegExpStringIterator(rx, S);
  }
});


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__(10);
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var $re = __webpack_require__(39)(/[&<>"']/g, {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&apos;'
});

$export($export.P + $export.F, 'String', { escapeHTML: function escapeHTML() { return $re(this); } });


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var $re = __webpack_require__(39)(/&(?:amp|lt|gt|quot|apos);/g, {
  '&amp;': '&',
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&apos;': "'"
});

$export($export.P + $export.F, 'String', { unescapeHTML: function unescapeHTML() { return $re(this); } });


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var parse = __webpack_require__(96);

/**
 * Transform an URL to a valid origin value.
 *
 * @param {String|Object} url URL to transform to it's origin.
 * @returns {String} The origin.
 * @api public
 */
function origin(url) {
  if ('string' === typeof url) url = parse(url);

  //
  // 6.2.  ASCII Serialization of an Origin
  // http://tools.ietf.org/html/rfc6454#section-6.2
  //
  if (!url.protocol || !url.hostname) return 'null';

  //
  // 4. Origin of a URI
  // http://tools.ietf.org/html/rfc6454#section-4
  //
  // States that url.scheme, host should be converted to lower case. This also
  // makes it easier to match origins as everything is just lower case.
  //
  return (url.protocol +'//'+ url.host).toLowerCase();
}

/**
 * Check if the origins are the same.
 *
 * @param {String} a URL or origin of a.
 * @param {String} b URL or origin of b.
 * @returns {Boolean}
 * @api public
 */
origin.same = function same(a, b) {
  return origin(a) === origin(b);
};

//
// Expose the origin
//
module.exports = origin;


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var required = __webpack_require__(97)
  , qs = __webpack_require__(98)
  , protocolre = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i
  , slashes = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//;

/**
 * These are the parse rules for the URL parser, it informs the parser
 * about:
 *
 * 0. The char it Needs to parse, if it's a string it should be done using
 *    indexOf, RegExp using exec and NaN means set as current value.
 * 1. The property we should set when parsing this value.
 * 2. Indication if it's backwards or forward parsing, when set as number it's
 *    the value of extra chars that should be split off.
 * 3. Inherit from location if non existing in the parser.
 * 4. `toLowerCase` the resulting value.
 */
var rules = [
  ['#', 'hash'],                        // Extract from the back.
  ['?', 'query'],                       // Extract from the back.
  function sanitize(address) {          // Sanitize what is left of the address
    return address.replace('\\', '/');
  },
  ['/', 'pathname'],                    // Extract from the back.
  ['@', 'auth', 1],                     // Extract from the front.
  [NaN, 'host', undefined, 1, 1],       // Set left over value.
  [/:(\d+)$/, 'port', undefined, 1],    // RegExp the back.
  [NaN, 'hostname', undefined, 1, 1]    // Set left over.
];

/**
 * These properties should not be copied or inherited from. This is only needed
 * for all non blob URL's as a blob URL does not include a hash, only the
 * origin.
 *
 * @type {Object}
 * @private
 */
var ignore = { hash: 1, query: 1 };

/**
 * The location object differs when your code is loaded through a normal page,
 * Worker or through a worker using a blob. And with the blobble begins the
 * trouble as the location object will contain the URL of the blob, not the
 * location of the page where our code is loaded in. The actual origin is
 * encoded in the `pathname` so we can thankfully generate a good "default"
 * location from it so we can generate proper relative URL's again.
 *
 * @param {Object|String} loc Optional default location object.
 * @returns {Object} lolcation object.
 * @public
 */
function lolcation(loc) {
  var location = global && global.location || {};
  loc = loc || location;

  var finaldestination = {}
    , type = typeof loc
    , key;

  if ('blob:' === loc.protocol) {
    finaldestination = new Url(unescape(loc.pathname), {});
  } else if ('string' === type) {
    finaldestination = new Url(loc, {});
    for (key in ignore) delete finaldestination[key];
  } else if ('object' === type) {
    for (key in loc) {
      if (key in ignore) continue;
      finaldestination[key] = loc[key];
    }

    if (finaldestination.slashes === undefined) {
      finaldestination.slashes = slashes.test(loc.href);
    }
  }

  return finaldestination;
}

/**
 * @typedef ProtocolExtract
 * @type Object
 * @property {String} protocol Protocol matched in the URL, in lowercase.
 * @property {Boolean} slashes `true` if protocol is followed by "//", else `false`.
 * @property {String} rest Rest of the URL that is not part of the protocol.
 */

/**
 * Extract protocol information from a URL with/without double slash ("//").
 *
 * @param {String} address URL we want to extract from.
 * @return {ProtocolExtract} Extracted information.
 * @private
 */
function extractProtocol(address) {
  var match = protocolre.exec(address);

  return {
    protocol: match[1] ? match[1].toLowerCase() : '',
    slashes: !!match[2],
    rest: match[3]
  };
}

/**
 * Resolve a relative URL pathname against a base URL pathname.
 *
 * @param {String} relative Pathname of the relative URL.
 * @param {String} base Pathname of the base URL.
 * @return {String} Resolved pathname.
 * @private
 */
function resolve(relative, base) {
  var path = (base || '/').split('/').slice(0, -1).concat(relative.split('/'))
    , i = path.length
    , last = path[i - 1]
    , unshift = false
    , up = 0;

  while (i--) {
    if (path[i] === '.') {
      path.splice(i, 1);
    } else if (path[i] === '..') {
      path.splice(i, 1);
      up++;
    } else if (up) {
      if (i === 0) unshift = true;
      path.splice(i, 1);
      up--;
    }
  }

  if (unshift) path.unshift('');
  if (last === '.' || last === '..') path.push('');

  return path.join('/');
}

/**
 * The actual URL instance. Instead of returning an object we've opted-in to
 * create an actual constructor as it's much more memory efficient and
 * faster and it pleases my OCD.
 *
 * It is worth noting that we should not use `URL` as class name to prevent
 * clashes with the global URL instance that got introduced in browsers.
 *
 * @constructor
 * @param {String} address URL we want to parse.
 * @param {Object|String} location Location defaults for relative paths.
 * @param {Boolean|Function} parser Parser for the query string.
 * @private
 */
function Url(address, location, parser) {
  if (!(this instanceof Url)) {
    return new Url(address, location, parser);
  }

  var relative, extracted, parse, instruction, index, key
    , instructions = rules.slice()
    , type = typeof location
    , url = this
    , i = 0;

  //
  // The following if statements allows this module two have compatibility with
  // 2 different API:
  //
  // 1. Node.js's `url.parse` api which accepts a URL, boolean as arguments
  //    where the boolean indicates that the query string should also be parsed.
  //
  // 2. The `URL` interface of the browser which accepts a URL, object as
  //    arguments. The supplied object will be used as default values / fall-back
  //    for relative paths.
  //
  if ('object' !== type && 'string' !== type) {
    parser = location;
    location = null;
  }

  if (parser && 'function' !== typeof parser) parser = qs.parse;

  location = lolcation(location);

  //
  // Extract protocol information before running the instructions.
  //
  extracted = extractProtocol(address || '');
  relative = !extracted.protocol && !extracted.slashes;
  url.slashes = extracted.slashes || relative && location.slashes;
  url.protocol = extracted.protocol || location.protocol || '';
  address = extracted.rest;

  //
  // When the authority component is absent the URL starts with a path
  // component.
  //
  if (!extracted.slashes) instructions[3] = [/(.*)/, 'pathname'];

  for (; i < instructions.length; i++) {
    instruction = instructions[i];

    if (typeof instruction === 'function') {
      address = instruction(address);
      continue;
    }

    parse = instruction[0];
    key = instruction[1];

    if (parse !== parse) {
      url[key] = address;
    } else if ('string' === typeof parse) {
      if (~(index = address.indexOf(parse))) {
        if ('number' === typeof instruction[2]) {
          url[key] = address.slice(0, index);
          address = address.slice(index + instruction[2]);
        } else {
          url[key] = address.slice(index);
          address = address.slice(0, index);
        }
      }
    } else if ((index = parse.exec(address))) {
      url[key] = index[1];
      address = address.slice(0, index.index);
    }

    url[key] = url[key] || (
      relative && instruction[3] ? location[key] || '' : ''
    );

    //
    // Hostname, host and protocol should be lowercased so they can be used to
    // create a proper `origin`.
    //
    if (instruction[4]) url[key] = url[key].toLowerCase();
  }

  //
  // Also parse the supplied query string in to an object. If we're supplied
  // with a custom parser as function use that instead of the default build-in
  // parser.
  //
  if (parser) url.query = parser(url.query);

  //
  // If the URL is relative, resolve the pathname against the base URL.
  //
  if (
      relative
    && location.slashes
    && url.pathname.charAt(0) !== '/'
    && (url.pathname !== '' || location.pathname !== '')
  ) {
    url.pathname = resolve(url.pathname, location.pathname);
  }

  //
  // We should not add port numbers if they are already the default port number
  // for a given protocol. As the host also contains the port number we're going
  // override it with the hostname which contains no port number.
  //
  if (!required(url.port, url.protocol)) {
    url.host = url.hostname;
    url.port = '';
  }

  //
  // Parse down the `auth` for the username and password.
  //
  url.username = url.password = '';
  if (url.auth) {
    instruction = url.auth.split(':');
    url.username = instruction[0] || '';
    url.password = instruction[1] || '';
  }

  url.origin = url.protocol && url.host && url.protocol !== 'file:'
    ? url.protocol +'//'+ url.host
    : 'null';

  //
  // The href is just the compiled result.
  //
  url.href = url.toString();
}

/**
 * This is convenience method for changing properties in the URL instance to
 * insure that they all propagate correctly.
 *
 * @param {String} part          Property we need to adjust.
 * @param {Mixed} value          The newly assigned value.
 * @param {Boolean|Function} fn  When setting the query, it will be the function
 *                               used to parse the query.
 *                               When setting the protocol, double slash will be
 *                               removed from the final url if it is true.
 * @returns {URL} URL instance for chaining.
 * @public
 */
function set(part, value, fn) {
  var url = this;

  switch (part) {
    case 'query':
      if ('string' === typeof value && value.length) {
        value = (fn || qs.parse)(value);
      }

      url[part] = value;
      break;

    case 'port':
      url[part] = value;

      if (!required(value, url.protocol)) {
        url.host = url.hostname;
        url[part] = '';
      } else if (value) {
        url.host = url.hostname +':'+ value;
      }

      break;

    case 'hostname':
      url[part] = value;

      if (url.port) value += ':'+ url.port;
      url.host = value;
      break;

    case 'host':
      url[part] = value;

      if (/:\d+$/.test(value)) {
        value = value.split(':');
        url.port = value.pop();
        url.hostname = value.join(':');
      } else {
        url.hostname = value;
        url.port = '';
      }

      break;

    case 'protocol':
      url.protocol = value.toLowerCase();
      url.slashes = !fn;
      break;

    case 'pathname':
    case 'hash':
      if (value) {
        var char = part === 'pathname' ? '/' : '#';
        url[part] = value.charAt(0) !== char ? char + value : value;
      } else {
        url[part] = value;
      }
      break;

    default:
      url[part] = value;
  }

  for (var i = 0; i < rules.length; i++) {
    var ins = rules[i];

    if (ins[4]) url[ins[1]] = url[ins[1]].toLowerCase();
  }

  url.origin = url.protocol && url.host && url.protocol !== 'file:'
    ? url.protocol +'//'+ url.host
    : 'null';

  url.href = url.toString();

  return url;
}

/**
 * Transform the properties back in to a valid and full URL string.
 *
 * @param {Function} stringify Optional query stringify function.
 * @returns {String} Compiled version of the URL.
 * @public
 */
function toString(stringify) {
  if (!stringify || 'function' !== typeof stringify) stringify = qs.stringify;

  var query
    , url = this
    , protocol = url.protocol;

  if (protocol && protocol.charAt(protocol.length - 1) !== ':') protocol += ':';

  var result = protocol + (url.slashes ? '//' : '');

  if (url.username) {
    result += url.username;
    if (url.password) result += ':'+ url.password;
    result += '@';
  }

  result += url.host + url.pathname;

  query = 'object' === typeof url.query ? stringify(url.query) : url.query;
  if (query) result += '?' !== query.charAt(0) ? '?'+ query : query;

  if (url.hash) result += url.hash;

  return result;
}

Url.prototype = { set: set, toString: toString };

//
// Expose the URL parser and some additional properties that might be useful for
// others or testing.
//
Url.extractProtocol = extractProtocol;
Url.location = lolcation;
Url.qs = qs;

module.exports = Url;


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Check if we're required to add a port number.
 *
 * @see https://url.spec.whatwg.org/#default-port
 * @param {Number|String} port Port number we need to check
 * @param {String} protocol Protocol we need to check against.
 * @returns {Boolean} Is it a default port for the given protocol
 * @api private
 */
module.exports = function required(port, protocol) {
  protocol = protocol.split(':')[0];
  port = +port;

  if (!port) return false;

  switch (protocol) {
    case 'http':
    case 'ws':
    return port !== 80;

    case 'https':
    case 'wss':
    return port !== 443;

    case 'ftp':
    return port !== 21;

    case 'gopher':
    return port !== 70;

    case 'file':
    return false;
  }

  return port !== 0;
};


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty;

/**
 * Decode a URI encoded string.
 *
 * @param {String} input The URI encoded string.
 * @returns {String} The decoded string.
 * @api private
 */
function decode(input) {
  return decodeURIComponent(input.replace(/\+/g, ' '));
}

/**
 * Simple query string parser.
 *
 * @param {String} query The query string that needs to be parsed.
 * @returns {Object}
 * @api public
 */
function querystring(query) {
  var parser = /([^=?&]+)=?([^&]*)/g
    , result = {}
    , part;

  while (part = parser.exec(query)) {
    var key = decode(part[1])
      , value = decode(part[2]);

    //
    // Prevent overriding of existing properties. This ensures that build-in
    // methods like `toString` or __proto__ are not overriden by malicious
    // querystrings.
    //
    if (key in result) continue;
    result[key] = value;
  }

  return result;
}

/**
 * Transform a query string to an object.
 *
 * @param {Object} obj Object that should be transformed.
 * @param {String} prefix Optional prefix.
 * @returns {String}
 * @api public
 */
function querystringify(obj, prefix) {
  prefix = prefix || '';

  var pairs = [];

  //
  // Optionally prefix with a '?' if needed
  //
  if ('string' !== typeof prefix) prefix = '?';

  for (var key in obj) {
    if (has.call(obj, key)) {
      pairs.push(encodeURIComponent(key) +'='+ encodeURIComponent(obj[key]));
    }
  }

  return pairs.length ? prefix + pairs.join('&') : '';
}

//
// Expose the module.
//
exports.stringify = querystringify;
exports.parse = querystring;


/***/ }),
/* 99 */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),
/* 100 */
/***/ (function(module, exports) {

module.exports = require("events");

/***/ }),
/* 101 */
/***/ (function(module, exports) {

module.exports = require("https");

/***/ }),
/* 102 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),
/* 103 */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var preconditions_1 = __webpack_require__(26);
var logger_1 = __webpack_require__(8);
var streamData_1 = __webpack_require__(105);
/**
 * Streamdata.io JavaScript SDK
 */
var StreamDataIo = /** @class */ (function () {
    function StreamDataIo() {
    }
    /**
     * @deprecated Since version 2.1.0. Use bar instead.
     *
     * <p>Create a new instance of the <code>StreamDataEventSource</code> prototype.</p>
     *
     * <p>The <code>StreamDataEventSource</code> is the main entry point for establishing Server Sent Event connection to a targeted JSON REST service URL.</p>
     *
     * @param {String} url Mandatory. The targeted REST URL is formatted as follow:
     * <pre><code>protocol://url(:port)(/localpath(?queryparameters))</code></pre>
     *
     * @param {String} appToken Mandatory. The application token to authentify the request
     *
     * @param {Array} headers Optional. Any specific headers that have to be added to the request. It must be an array with the following structure:<code>['Authorization: Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==']</code>
     *
     * @param {Object} authStrategy Optional. An object which will enable HMAC signature of the request. You can create this object as follow:
     * <pre><code>
     * // setup headers
     * var headers = [];
     * // setup signatureStrategy
     * var signatureStrategy = AuthStrategy.newSignatureStrategy('NmEtYTljN2UtYmM1MGZlMGRiNGFQzYS00MGRkLTkNTZlMDY1','NTEtMTQxNiWIzMDEC00OWNlLThmNGYtY2ExMDJxO00NzNhLTgtZWY0MjOTc2YmUxODFiZDU1NmU0ZDAtYWU5NjYxMGYzNDdi');
     * // instantiate an eventSource
     * var eventSource = streamdataio.createEventSource('http://myRestservice.com/stocks','NmEtYTljN2UtYmM1MGZlMGRiNGFQzYS00MGRkLTkNTZlMDY1',headers,signatureStrategy);
     *
     * </code></pre>
     * @returns {StreamDataEventSource}
     */
    StreamDataIo.createEventSource = function (url, appToken, headers, authStrategy) {
        preconditions_1.Preconditions.checkNotNull(url, 'url cannot be null');
        if (!(url.lastIndexOf('http://', 0) === 0)
            && !(url.lastIndexOf('https://', 0) === 0)) {
            // if no valid protocol provided for url then add default (http://)
            url = 'http://' + url;
            logger_1.Logger.warn('url has no default protocol defined. Add http:// as a default protocol.');
        }
        return new streamData_1.StreamData(url, appToken, headers, authStrategy);
    };
    return StreamDataIo;
}());
exports.StreamDataIo = StreamDataIo;
exports.createEventSource = StreamDataIo.createEventSource;


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var streamDataEventSource_1 = __webpack_require__(106);
var listeners_1 = __webpack_require__(108);
var preconditions_1 = __webpack_require__(26);
var logger_1 = __webpack_require__(8);
var config_1 = __webpack_require__(109);
var streamDataError_1 = __webpack_require__(112);
var streamDataUrl_1 = __webpack_require__(113);
var StreamData = /** @class */ (function () {
    function StreamData(_url, _appToken, _headers, _authStrategy) {
        this._url = _url;
        this._appToken = _appToken;
        this._headers = _headers;
        this._authStrategy = _authStrategy;
        // Build internal configuration
        preconditions_1.Preconditions.checkNotNull(this._url, 'url cannot be null.');
        preconditions_1.Preconditions.checkNotNull(this._appToken, 'appToken cannot be null.');
        // Init listeners
        this._openListeners = new listeners_1.Listeners();
        this._dataListeners = new listeners_1.Listeners();
        this._patchListeners = new listeners_1.Listeners();
        this._errorListeners = new listeners_1.Listeners();
        this._monitorListeners = new listeners_1.Listeners();
        // SSE
        this._sse = null;
        this.server = config_1.DefaultStreamDataServer;
    }
    StreamData.prototype.open = function () {
        preconditions_1.Preconditions.checkNotNull(this._url, 'url cannot be null');
        this._sse && this.close();
        var decoratedUrl = this._decorate(this._url, this._headers);
        if (decoratedUrl) {
            this._sse = new streamDataEventSource_1.StreamDataEventSource(decoratedUrl);
            this._sse.addOpenListener(function (event) {
                logger_1.Logger.debug('SSE Stream Opened to ' + this._url + 'event: ' + event);
                this._openListeners.fire();
            }, this);
            this._sse.addErrorListener(function (event) {
                if (event.error) {
                    this._errorListeners.fire(StreamData._buildErrorMessage(event.error));
                }
                else {
                    logger_1.Logger.info('SSE server connection lost, retrying ...');
                }
            }, this);
            this._sse.addDataListener(function (event) {
                logger_1.Logger.debug('Received data:' + event.data);
                this._dataListeners.fire(event.data);
            }, this);
            this._sse.addPatchListener(function (event) {
                logger_1.Logger.debug('Received patch:' + event.patch);
                this._patchListeners.fire(event.patch);
            }, this);
            this._sse.addMonitorListener(function (event) {
                logger_1.Logger.debug('Received monitor:' + event.data);
                this._monitorListeners.fire(event.data);
            }, this);
        }
        return this;
    };
    StreamData.prototype.close = function () {
        this._sse.close();
        return this;
    };
    StreamData.prototype.onOpen = function (callback, context) {
        preconditions_1.Preconditions.checkNotNull(callback, 'listener cannot be null');
        this._openListeners.add(callback, context);
        return this;
    };
    StreamData.prototype.onError = function (callback, context) {
        preconditions_1.Preconditions.checkNotNull(callback, 'listener cannot be null');
        this._errorListeners.add(callback, context);
        return this;
    };
    StreamData.prototype.onData = function (callback, context) {
        preconditions_1.Preconditions.checkNotNull(callback, 'listener cannot be null');
        this._dataListeners.add(callback, context);
        return this;
    };
    StreamData.prototype.onPatch = function (callback, context) {
        preconditions_1.Preconditions.checkNotNull(callback, 'listener cannot be null');
        this._patchListeners.add(callback, context);
        return this;
    };
    StreamData.prototype.onMonitor = function (callback, context) {
        preconditions_1.Preconditions.checkNotNull(callback, 'listener cannot be null');
        this._monitorListeners.add(callback, context);
        return this;
    };
    StreamData.prototype.isConnected = function () {
        return this._sse.isConnected();
    };
    StreamData.prototype._decorate = function (url, headers) {
        preconditions_1.Preconditions.checkNotNull(url, 'url cannot be null');
        var signedUrl = this._authStrategy ? this._authStrategy.signUrl(url) : url;
        var clientUrl = new streamDataUrl_1.StreamDataUrl(signedUrl, this._appToken, headers);
        var streamdataUrl = this.server.getFullUrl(clientUrl);
        logger_1.Logger.debug('converted url :' + streamdataUrl);
        return streamdataUrl;
    };
    StreamData._buildErrorMessage = function (error) {
        logger_1.Logger.error(error);
        if (error['cause'] || error['message'] || error['status']) {
            return new streamDataError_1.StreamDataError(error['cause'], error['message'], error['status'], 'server', error);
        }
        else {
            return streamDataError_1.StreamDataError.createDefault(error);
        }
    };
    return StreamData;
}());
exports.StreamData = StreamData;


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var logger_1 = __webpack_require__(8);
var streamDataEvents_1 = __webpack_require__(107);
var jsonHelper_1 = __webpack_require__(41);
if (true) {
    var EventSource = __webpack_require__(40);
}
// ************************************
var StreamDataEventSource = /** @class */ (function () {
    function StreamDataEventSource(url) {
        this._sse = new EventSource(url);
    }
    StreamDataEventSource.prototype.close = function () {
        if (this._sse && (this._sse.readyState === EventSource.OPEN || this._sse.readyState === EventSource.CONNECTING)) {
            logger_1.Logger.info('Closing the SSE Stream.');
            this._sse.close();
        }
    };
    StreamDataEventSource.prototype.addOpenListener = function (onOpenCallback, context) {
        this._sse.addEventListener(streamDataEvents_1.EventType.OPEN, function () {
            if (context) {
                onOpenCallback.apply(context, [{}]);
            }
            else {
                onOpenCallback({});
            }
        });
    };
    StreamDataEventSource.prototype.addErrorListener = function (onErrorCallback, context) {
        this._sse.addEventListener(streamDataEvents_1.EventType.ERROR, function (messageEvent) {
            var error = messageEvent ? jsonHelper_1.JsonHelper.parse((messageEvent.data)) : null;
            if (context) {
                onErrorCallback.apply(context, [{ error: error }]);
            }
            else {
                onErrorCallback({ error: error });
            }
        });
    };
    StreamDataEventSource.prototype.addDataListener = function (onDataCallback, context) {
        this._sse.addEventListener(streamDataEvents_1.EventType.DATA, function (messageEvent) {
            var data = messageEvent ? jsonHelper_1.JsonHelper.parse((messageEvent.data)) : null;
            if (context) {
                onDataCallback.apply(context, [{ data: data }]);
            }
            else {
                onDataCallback({ data: data });
            }
        });
    };
    StreamDataEventSource.prototype.addPatchListener = function (onPatchCallback, context) {
        this._sse.addEventListener(streamDataEvents_1.EventType.PATCH, function (messageEvent) {
            var patch = messageEvent ? jsonHelper_1.JsonHelper.parse((messageEvent.data)) : null;
            if (context) {
                onPatchCallback.apply(context, [{ patch: patch }]);
            }
            else {
                onPatchCallback({ patch: patch });
            }
        });
    };
    StreamDataEventSource.prototype.addMonitorListener = function (onMonitorCallback, context) {
        this._sse.addEventListener(streamDataEvents_1.EventType.MONITOR, function (messageEvent) {
            var monitor = messageEvent ? jsonHelper_1.JsonHelper.parse((messageEvent.data)) : null;
            if (context) {
                onMonitorCallback.apply(context, [{ data: monitor }]);
            }
            else {
                onMonitorCallback({ data: monitor });
            }
        });
    };
    StreamDataEventSource.prototype.isConnected = function () {
        return this._sse.readyState === EventSource.OPEN;
    };
    return StreamDataEventSource;
}());
exports.StreamDataEventSource = StreamDataEventSource;


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var EventType;
(function (EventType) {
    EventType["OPEN"] = "open";
    EventType["ERROR"] = "error";
    EventType["DATA"] = "data";
    EventType["PATCH"] = "patch";
    EventType["MONITOR"] = "monitor";
})(EventType = exports.EventType || (exports.EventType = {}));


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var preconditions_1 = __webpack_require__(26);
var logger_1 = __webpack_require__(8);
var Listeners = /** @class */ (function () {
    function Listeners() {
        this._listeners = [];
    }
    /**
     * @memberOf Listeners#
     */
    Listeners.prototype.fire = function (data) {
        var listeners = this._listeners.slice(); // copy to prevent concurrent modifications
        listeners.forEach(function (listener) {
            var callback = listener.callback;
            var context = listener.context;
            if (callback) {
                try {
                    if (context) {
                        callback.apply(context, [data]);
                    }
                    else {
                        callback(data);
                    }
                }
                catch (error) {
                    logger_1.Logger.error('Unable to forward event: {0}', error);
                }
            }
        });
    };
    /**
     * @memberOf Listeners#
     * @param callback
     * @param context
     */
    Listeners.prototype.add = function (callback, context) {
        var listener = {
            callback: callback,
            context: context
        };
        preconditions_1.Preconditions.checkNotNull(listener, 'listener cannot be null');
        preconditions_1.Preconditions.checkExpression(this._listeners.indexOf(listener) === -1, 'listener already exists');
        this._listeners.push(listener);
    };
    /**
     * @memberOf Listeners#
     * @param callback
     * @param context
     */
    Listeners.prototype.remove = function (callback, context) {
        var listener = {
            callback: callback,
            context: context
        };
        preconditions_1.Preconditions.checkNotNull(listener, 'listener cannot be null');
        var indexOf = this._listeners.indexOf(listener);
        preconditions_1.Preconditions.checkExpression(indexOf >= 0, 'listener not exists');
        this._listeners.splice(indexOf, 1);
    };
    return Listeners;
}());
exports.Listeners = Listeners;


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var streamDataServer_1 = __webpack_require__(110);
exports.DefaultStreamDataServer = new streamDataServer_1.StreamDataServer('https', 'streamdata.motwin.net');


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var urlHelper_1 = __webpack_require__(111);
var StreamDataServer = /** @class */ (function () {
    function StreamDataServer(protocol, hostname, port) {
        this.protocol = protocol;
        this.hostname = hostname;
        this.port = port;
    }
    StreamDataServer.prototype.toString = function () {
        return urlHelper_1.UrlHelper.urlToString(this.protocol, this.hostname, this.port);
    };
    StreamDataServer.prototype.getFullUrl = function (clientUrl) {
        return this.toString() + "/" + clientUrl.toString();
    };
    return StreamDataServer;
}());
exports.StreamDataServer = StreamDataServer;


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var UrlHelper = /** @class */ (function () {
    function UrlHelper() {
    }
    UrlHelper.urlToString = function (protocol, hostname, port) {
        var url = protocol;
        if (!protocol.endsWith('://')) {
            url += '://';
        }
        url += hostname;
        if (!this._isEmptyPort(port)) {
            url += ':';
            url += port;
        }
        return url;
    };
    UrlHelper._isEmptyPort = function (port) {
        if (this._isNumber(port)) {
            return !port || port === 0;
        }
        if (this._isString(port)) {
            return !port || 0 === port.length;
        }
        return true;
    };
    UrlHelper._isNumber = function (x) {
        return typeof x === 'number';
    };
    UrlHelper._isString = function (x) {
        return typeof x === 'string';
    };
    return UrlHelper;
}());
exports.UrlHelper = UrlHelper;


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var StreamDataError = /** @class */ (function () {
    function StreamDataError(type, message, status, source, original) {
        this.type = type;
        this.message = message;
        this.status = status;
        this.original = original;
        this.source = source ? source : 'server';
    }
    StreamDataError.createDefault = function (original) {
        return new StreamDataError(StreamDataError.DEFAULT_TYPE, StreamDataError.DEFAULT_MESSAGE, StreamDataError.DEFAULT_STATUS, StreamDataError.DEFAULT_SOURCE, original);
    };
    Object.defineProperty(StreamDataError.prototype, "isServer", {
        /**
         * @memberOf StreamdataError#
         * @return {boolean} true if error is from server side.
         */
        get: function () {
            return this.source === 'server';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StreamDataError.prototype, "isClient", {
        /**
         * @memberOf StreamdataError#
         * @return {boolean} true if error is from client side.
         */
        get: function () {
            return this.source === 'client';
        },
        enumerable: true,
        configurable: true
    });
    StreamDataError.DEFAULT_TYPE = 'UnknownError';
    StreamDataError.DEFAULT_MESSAGE = 'An error occured. Please check your console logs for more details.';
    StreamDataError.DEFAULT_STATUS = 1000;
    StreamDataError.DEFAULT_SOURCE = 'server';
    return StreamDataError;
}());
exports.StreamDataError = StreamDataError;


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var StreamDataUrl = /** @class */ (function () {
    function StreamDataUrl(url, token, headers) {
        // Sanitize client url
        this.clientUrl = url;
        // Build stream data query from header
        var streamDataQuery = headers ? headers.map(function (header) {
            return StreamDataUrl.X_SD_HEADER + "=" + encodeURIComponent(header);
        }) : [];
        streamDataQuery.push(StreamDataUrl.X_SD_TOKEN + "=" + encodeURIComponent(token));
        // Add stream data query to target url
        if (streamDataQuery.length > 0) {
            this.clientUrl += (this.clientUrl.indexOf('?') === -1) ? '?' : '&';
            this.clientUrl += streamDataQuery.join('&');
        }
    }
    StreamDataUrl.prototype.toString = function () {
        return this.clientUrl;
    };
    StreamDataUrl.X_SD_HEADER = 'X-Sd-Header';
    StreamDataUrl.X_SD_TOKEN = 'X-Sd-Token';
    return StreamDataUrl;
}());
exports.StreamDataUrl = StreamDataUrl;


/***/ })
/******/ ]);
});
//# sourceMappingURL=streamdataio-node.js.map