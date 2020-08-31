"use strict";

function valueOrJson(arg) {
  if (arguments.length !== 1) {
    throw new Error("Expected one argument but got " + arguments.length);
  }

  if (needsStringify(arg)) {
    return JSON.stringify(arg);
  } else {
    return arg;
  }
}

function needsStringify(arg) {
  switch (typeof arg) {
    case "string":
    case "number":
    case "boolean":
    case "symbol":
    case "undefined":
    case "function":
      return false;
      break;
    case "object":
    default:
      return true;
  }
}

valueOrJson.needsStringify = needsStringify;

module.exports = valueOrJson;
