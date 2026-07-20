"use strict";

// slugify produces canonical, lowercase URL slugs. Lowercasing the
// output prevents duplicate pages that differ only in case and keeps
// URLs consistent across the application.
function slugify(text) {
  return text
    .trim()
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .toLowerCase();
}

module.exports = { slugify };
