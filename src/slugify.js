"use strict";

// Приводим результат к нижнему регистру, чтобы URL были
// каноническими и не создавали дублирующихся страниц.
function slugify(text) {
  return text
    .trim()
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .toLowerCase();
}

module.exports = { slugify };