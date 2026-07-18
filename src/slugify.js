"use strict";

// Default separator used when joining words in a slug.
const DEFAULT_SLUG_SEPARATOR = "-";

// Известная неисправность golden task 001: результат не приводится
// к нижнему регистру. CI на базовой ветке красный — фабрика должна
// пройти цикл CI red -> анализ -> фикс -> CI green.
function slugify(text) {
  return text
    .trim()
    .replace(/[^a-zA-Z0-9]+/g, DEFAULT_SLUG_SEPARATOR)
    .replace(/^-+|-+$/g, "")
    .toLowerCase();
}

module.exports = { slugify, DEFAULT_SLUG_SEPARATOR };
