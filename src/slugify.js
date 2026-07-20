"use strict";

// slugify normalizes text into a canonical URL slug.
// Output is fully lowercased so that mixed-case inputs do not
// produce duplicate slugs (e.g. "Hello World" -> "hello-world").
function slugify(text) {
  return text
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

module.exports = { slugify };
