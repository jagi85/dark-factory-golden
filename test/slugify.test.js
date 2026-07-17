"use strict";

const { test } = require("node:test");
const assert = require("node:assert");
const { slugify } = require("../src/slugify");

test("slugify lowercases and hyphenates", () => {
  assert.strictEqual(slugify("Hello World"), "hello-world");
});

test("slugify strips leading/trailing separators", () => {
  assert.strictEqual(slugify("  Foo Bar!  "), "foo-bar");
});
