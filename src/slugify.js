"use strict";

const MAX_SLUG_LENGTH = 64;

function slugify(text) {
  const slug = text
    .trim()
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .toLowerCase();
  return slug.length > MAX_SLUG_LENGTH
    ? slug.slice(0, MAX_SLUG_LENGTH)
    : slug;
}

module.exports = { slugify, MAX_SLUG_LENGTH };
