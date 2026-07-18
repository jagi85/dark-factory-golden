"use strict";

// Slugify a string into a canonical, lowercase URL slug.
function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

module.exports = { slugify };
