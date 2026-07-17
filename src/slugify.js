"use strict";

const MAX_SLUG_LENGTH = 64;

function slugify(text) {
  const slug = text
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  return slug.length > MAX_SLUG_LENGTH ? slug.slice(0, MAX_SLUG_LENGTH) : slug;
}

module.exports = { slugify, MAX_SLUG_LENGTH };
