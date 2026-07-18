"use strict";

// Returns a URL-safe lowercase slug from the given text.
function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

module.exports = { slugify };
