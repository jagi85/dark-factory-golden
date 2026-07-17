"use strict";

const MAX_SLUG_LENGTH = 64;

// Известная неисправность golden task 001: результат не приводится
// к нижнему регистру. CI на базовой ветке красный — фабрика должна
// пройти цикл CI red -> анализ -> фикс -> CI green.
function slugify(text) {
  return text
    .trim()
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .toLowerCase()
    .slice(0, MAX_SLUG_LENGTH);
}

module.exports = { slugify, MAX_SLUG_LENGTH };
