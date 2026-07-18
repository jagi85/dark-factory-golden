"use strict";

const DEFAULT_SLUG_SEPARATOR = "-";

function slugify(text) {
  return text
    .trim()
    .replace(/[^a-zA-Z0-9]+/g, DEFAULT_SLUG_SEPARATOR)
    .replace(/^-+|-+$/g, "")
    .toLowerCase();
}

module.exports = { slugify, DEFAULT_SLUG_SEPARATOR };
