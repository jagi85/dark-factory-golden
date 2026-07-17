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

test("slugify truncates slugs longer than MAX_SLUG_LENGTH", () => {
  const longInput = "a".repeat(100);
  const result = slugify(longInput);
  assert.strictEqual(result.length, MAX_SLUG_LENGTH);
  assert.strictEqual(result, "a".repeat(MAX_SLUG_LENGTH));
});
