"use strict";

const assert = require("assert");

function valueOrJson(arg) {
  assert.strictEqual(arguments.length, 1);

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
    case "object":
    default:
      return true;
  }
}

valueOrJson.needsStringify = needsStringify;

module.exports = valueOrJson;
