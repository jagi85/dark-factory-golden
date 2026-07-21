"use strict";

// slugify: canonical lowercase URL slug generator.
function slugify(text) {
  return text
    .trim()
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .toLowerCase();
}

module.exports = { slugify };
