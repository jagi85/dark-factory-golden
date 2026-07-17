"use strict";

// Известная неисправность golden task 001: результат не приводится
// к нижнему регистру. CI на базовой ветке красный — фабрика должна
// пройти цикл CI red -> анализ -> фикс -> CI green.
function slugify(text) {
  return text
    .trim()
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

module.exports = { slugify };
