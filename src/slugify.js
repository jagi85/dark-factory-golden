"use strict";

// slugify converts arbitrary text into a lowercase, URL-safe slug.
// The entire output is lowercased to maintain canonical URLs and
// prevent duplicate pages caused by mixed-case variants.
function slugify(text) {
  return text
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

module.exports = { slugify };
