// Generated by dart2js (fast startup emitter, strong), the Dart to JavaScript compiler version: 2.4.1.
// The code supports the following hooks:
// dartPrint(message):
//    if this function is defined it is called instead of the Dart [print]
//    method.
//
// dartMainRunner(main, args):
//    if this function is defined, the Dart [main] method will not be invoked
//    directly. Instead, a closure that will invoke [main], and its arguments
//    [args] is passed to [dartMainRunner].
//
// dartDeferredLibraryLoader(uri, successCallback, errorCallback):
//    if this function is defined, it will be called when a deferred library
//    is loaded. It should load and eval the javascript of `uri`, and call
//    successCallback. If it fails to do so, it should call errorCallback with
//    an error.
//
// dartCallInstrumentation(id, qualifiedName):
//    if this function is defined, it will be called at each entry of a
//    method or constructor. Used only when compiling programs with
//    --experiment-call-instrumentation.
{
}
(function dartProgram() {
  function copyProperties(from, to) {
    var keys = Object.keys(from);
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      to[key] = from[key];
    }
  }
  var supportsDirectProtoAccess = function() {
    var cls = function() {
    };
    cls.prototype = {p: {}};
    var object = new cls();
    if (!(object.__proto__ && object.__proto__.p === cls.prototype.p))
      return false;
    try {
      if (typeof navigator != "undefined" && typeof navigator.userAgent == "string" && navigator.userAgent.indexOf("Chrome/") >= 0)
        return true;
      if (typeof version == "function" && version.length == 0) {
        var v = version();
        if (/^\d+\.\d+\.\d+\.\d+$/.test(v))
          return true;
      }
    } catch (_) {
    }
    return false;
  }();
  function setFunctionNamesIfNecessary(holders) {
    function t() {
    }
    ;
    if (typeof t.name == "string")
      return;
    for (var i = 0; i < holders.length; i++) {
      var holder = holders[i];
      var keys = Object.keys(holder);
      for (var j = 0; j < keys.length; j++) {
        var key = keys[j];
        var f = holder[key];
        if (typeof f == 'function')
          f.name = key;
      }
    }
  }
  function inherit(cls, sup) {
    cls.prototype.constructor = cls;
    cls.prototype["$is" + cls.name] = cls;
    if (sup != null) {
      if (supportsDirectProtoAccess) {
        cls.prototype.__proto__ = sup.prototype;
        return;
      }
      var clsPrototype = Object.create(sup.prototype);
      copyProperties(cls.prototype, clsPrototype);
      cls.prototype = clsPrototype;
    }
  }
  function inheritMany(sup, classes) {
    for (var i = 0; i < classes.length; i++)
      inherit(classes[i], sup);
  }
  function mixin(cls, mixin) {
    copyProperties(mixin.prototype, cls.prototype);
    cls.prototype.constructor = cls;
  }
  function lazy(holder, name, getterName, initializer) {
    var uninitializedSentinel = holder;
    holder[name] = uninitializedSentinel;
    holder[getterName] = function() {
      holder[getterName] = function() {
        H.throwCyclicInit(name);
      };
      var result;
      var sentinelInProgress = initializer;
      try {
        if (holder[name] === uninitializedSentinel) {
          result = holder[name] = sentinelInProgress;
          result = holder[name] = initializer();
        } else
          result = holder[name];
      } finally {
        if (result === sentinelInProgress)
          holder[name] = null;
        holder[getterName] = function() {
          return this[name];
        };
      }
      return result;
    };
  }
  function makeConstList(list) {
    list.immutable$list = Array;
    list.fixed$length = Array;
    return list;
  }
  function convertToFastObject(properties) {
    function t() {
    }
    t.prototype = properties;
    new t();
    return properties;
  }
  function convertAllToFastObject(arrayOfObjects) {
    for (var i = 0; i < arrayOfObjects.length; ++i)
      convertToFastObject(arrayOfObjects[i]);
  }
  var functionCounter = 0;
  function tearOffGetter(funcs, applyTrampolineIndex, reflectionInfo, name, isIntercepted) {
    return isIntercepted ? new Function("funcs", "applyTrampolineIndex", "reflectionInfo", "name", "H", "c", "return function tearOff_" + name + functionCounter++ + "(receiver) {" + "if (c === null) c = " + "H.closureFromTearOff" + "(" + "this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);" + "return new c(this, funcs[0], receiver, name);" + "}")(funcs, applyTrampolineIndex, reflectionInfo, name, H, null) : new Function("funcs", "applyTrampolineIndex", "reflectionInfo", "name", "H", "c", "return function tearOff_" + name + functionCounter++ + "() {" + "if (c === null) c = " + "H.closureFromTearOff" + "(" + "this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);" + "return new c(this, funcs[0], null, name);" + "}")(funcs, applyTrampolineIndex, reflectionInfo, name, H, null);
  }
  function tearOff(funcs, applyTrampolineIndex, reflectionInfo, isStatic, name, isIntercepted) {
    var cache = null;
    return isStatic ? function() {
      if (cache === null)
        cache = H.closureFromTearOff(this, funcs, applyTrampolineIndex, reflectionInfo, true, false, name).prototype;
      return cache;
    } : tearOffGetter(funcs, applyTrampolineIndex, reflectionInfo, name, isIntercepted);
  }
  var typesOffset = 0;
  function installTearOff(container, getterName, isStatic, isIntercepted, requiredParameterCount, optionalParameterDefaultValues, callNames, funsOrNames, funType, applyIndex) {
    var funs = [];
    for (var i = 0; i < funsOrNames.length; i++) {
      var fun = funsOrNames[i];
      if (typeof fun == 'string')
        fun = container[fun];
      fun.$callName = callNames[i];
      funs.push(fun);
    }
    var fun = funs[0];
    fun.$requiredArgCount = requiredParameterCount;
    fun.$defaultValues = optionalParameterDefaultValues;
    var reflectionInfo = funType;
    if (typeof reflectionInfo == "number")
      reflectionInfo += typesOffset;
    var name = funsOrNames[0];
    fun.$stubName = name;
    var getterFunction = tearOff(funs, applyIndex || 0, reflectionInfo, isStatic, name, isIntercepted);
    container[getterName] = getterFunction;
    if (isStatic)
      fun.$tearOff = getterFunction;
  }
  function installStaticTearOff(container, getterName, requiredParameterCount, optionalParameterDefaultValues, callNames, funsOrNames, funType, applyIndex) {
    return installTearOff(container, getterName, true, false, requiredParameterCount, optionalParameterDefaultValues, callNames, funsOrNames, funType, applyIndex);
  }
  function installInstanceTearOff(container, getterName, isIntercepted, requiredParameterCount, optionalParameterDefaultValues, callNames, funsOrNames, funType, applyIndex) {
    return installTearOff(container, getterName, false, isIntercepted, requiredParameterCount, optionalParameterDefaultValues, callNames, funsOrNames, funType, applyIndex);
  }
  function setOrUpdateInterceptorsByTag(newTags) {
    var tags = init.interceptorsByTag;
    if (!tags) {
      init.interceptorsByTag = newTags;
      return;
    }
    copyProperties(newTags, tags);
  }
  function setOrUpdateLeafTags(newTags) {
    var tags = init.leafTags;
    if (!tags) {
      init.leafTags = newTags;
      return;
    }
    copyProperties(newTags, tags);
  }
  function updateTypes(newTypes) {
    var types = init.types;
    var length = types.length;
    types.push.apply(types, newTypes);
    return length;
  }
  function updateHolder(holder, newHolder) {
    copyProperties(newHolder, holder);
    return holder;
  }
  var hunkHelpers = function() {
    var mkInstance = function(isIntercepted, requiredParameterCount, optionalParameterDefaultValues, callNames, applyIndex) {
        return function(container, getterName, name, funType) {
          return installInstanceTearOff(container, getterName, isIntercepted, requiredParameterCount, optionalParameterDefaultValues, callNames, [name], funType, applyIndex);
        };
      },
      mkStatic = function(requiredParameterCount, optionalParameterDefaultValues, callNames, applyIndex) {
        return function(container, getterName, name, funType) {
          return installStaticTearOff(container, getterName, requiredParameterCount, optionalParameterDefaultValues, callNames, [name], funType, applyIndex);
        };
      };
    return {inherit: inherit, inheritMany: inheritMany, mixin: mixin, installStaticTearOff: installStaticTearOff, installInstanceTearOff: installInstanceTearOff, _instance_0u: mkInstance(0, 0, null, ["call$0"], 0), _instance_1u: mkInstance(0, 1, null, ["call$1"], 0), _instance_2u: mkInstance(0, 2, null, ["call$2"], 0), _instance_0i: mkInstance(1, 0, null, ["call$0"], 0), _instance_1i: mkInstance(1, 1, null, ["call$1"], 0), _instance_2i: mkInstance(1, 2, null, ["call$2"], 0), _static_0: mkStatic(0, null, ["call$0"], 0), _static_1: mkStatic(1, null, ["call$1"], 0), _static_2: mkStatic(2, null, ["call$2"], 0), makeConstList: makeConstList, lazy: lazy, updateHolder: updateHolder, convertToFastObject: convertToFastObject, setFunctionNamesIfNecessary: setFunctionNamesIfNecessary, updateTypes: updateTypes, setOrUpdateInterceptorsByTag: setOrUpdateInterceptorsByTag, setOrUpdateLeafTags: setOrUpdateLeafTags};
  }();
  function initializeDeferredHunk(hunk) {
    typesOffset = init.types.length;
    hunk(hunkHelpers, init, holders, $);
  }
  function getGlobalFromName(name) {
    for (var i = 0; i < holders.length; i++) {
      if (holders[i] == null)
        continue;
      if (holders[i][name])
        return holders[i][name];
    }
  }
  var P = {Object: function Object() {
    }, String: function String() {
    }},
  H = {
    printString: function(string) {
      if (typeof dartPrint == "function") {
        dartPrint(string);
        return;
      }
      if (typeof console == "object" && typeof console.log != "undefined") {
        console.log(string);
        return;
      }
      if (typeof window == "object")
        return;
      if (typeof print == "function") {
        print(string);
        return;
      }
      throw "Unable to print message: " + String(string);
    }
  },
  D = {
    main: function() {
      H.printString("Hello, World!");
    }
  };
  var holders = [P, H, D];
  hunkHelpers.setFunctionNamesIfNecessary(holders);
  var $ = {};
  P.Object.prototype = {constructor: P.Object, $isObject: 1,
    toString: function() {
      return this.toString$0(this);
    }
  };
  P.String.prototype = {};
  (function inheritance() {
    var _inherit = hunkHelpers.inherit;
    _inherit(P.Object, null);
    _inherit(P.String, P.Object);
  })();
  var init = {mangledGlobalNames: {int: "int", double: "double", num: "num", String: "String", bool: "bool", Null: "Null", List: "List"}, mangledNames: {}, getTypeFromName: getGlobalFromName, metadata: [], types: []};
  convertAllToFastObject(holders);
  convertToFastObject($);
  (function(callback) {
    if (typeof document === "undefined") {
      callback(null);
      return;
    }
    if (typeof document.currentScript != 'undefined') {
      callback(document.currentScript);
      return;
    }
    var scripts = document.scripts;
    function onLoad(event) {
      for (var i = 0; i < scripts.length; ++i)
        scripts[i].removeEventListener("load", onLoad, false);
      callback(event.target);
    }
    for (var i = 0; i < scripts.length; ++i)
      scripts[i].addEventListener("load", onLoad, false);
  })(function(currentScript) {
    init.currentScript = currentScript;
    if (typeof dartMainRunner === "function")
      dartMainRunner(D.main, []);
    else
      D.main([]);
  });
})();

//# sourceMappingURL=hello-word.js.map
