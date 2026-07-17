"use strict";

// slugify converts text into a URL-friendly lowercase slug.
function slugify(text) {
  return text
    .trim()
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .toLowerCase();
}

module.exports = { slugify };
