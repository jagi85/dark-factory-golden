"use strict";

const MAX_SLUG_LENGTH = 64;

// Known issue golden task 001: result is not lowercased.
// CI on baseline branch is red - factory must cycle CI red -> analysis -> fix -> CI green.
function slugify(text) {
  const slug = text
    .trim()
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return slug.length > MAX_SLUG_LENGTH ? slug.slice(0, MAX_SLUG_LENGTH) : slug;
}

module.exports = { slugify, MAX_SLUG_LENGTH };
