"use strict";

const { test } = require("node:test");
const assert = require("node:assert");
const { slugify, MAX_SLUG_LENGTH } = require("../src/slugify");

test("slugify lowercases and hyphenates", () => {
  assert.strictEqual(slugify("Hello World"), "hello-world");
});

test("slugify strips leading/trailing separators", () => {
  assert.strictEqual(slugify("  Foo Bar!  "), "foo-bar");
});

test("slugify truncates to MAX_SLUG_LENGTH", () => {
  const longTitle = "a".repeat(100);
  const result = slugify(longTitle);
  assert.strictEqual(result.length, MAX_SLUG_LENGTH);
  assert.strictEqual(result, "a".repeat(MAX_SLUG_LENGTH));
});
