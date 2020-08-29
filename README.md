`value-or-json(input)` is a function that always returns a value based on its `input`.

That is, when `typeof input !== "object"`, it simply returns its input. However when passed an object, it returns `JSON.stringify(input)`.

It also exposes `valueOrJson.needsStringify()` in case you just want to test for this condition instead of actually doing the transform.

Version History
---------------

### v1.0.0 2020-08-28

- NEW TypeScript definition. ([alex996](https://github.com/rentzsch/node-value-or-json/pull/1))

### v0.1.0 2019-02-23

- NEW Initial release.
