"use strict";

const { test } = require("node:test");
const assert = require("node:assert");
const { slugify, DEFAULT_SLUG_SEPARATOR } = require("../src/slugify");

test("slugify lowercases and hyphenates", () => {
  assert.strictEqual(slugify("Hello World"), "hello-world");
});

test("slugify strips leading/trailing separators", () => {
  assert.strictEqual(slugify("  Foo Bar!  "), "foo-bar");
});

test("DEFAULT_SLUG_SEPARATOR is exported as a hyphen", () => {
  assert.strictEqual(DEFAULT_SLUG_SEPARATOR, "-");
});
