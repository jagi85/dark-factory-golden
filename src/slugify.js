"use strict";

// slugify converts text to a URL-friendly lowercase slug.
// Output is lowercased to ensure canonical URLs and prevent
// page duplication caused by case variations.
function slugify(text) {
  return text
    .trim()
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .toLowerCase();
}

module.exports = { slugify };
