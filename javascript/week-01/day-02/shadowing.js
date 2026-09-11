"use strict";

// ===============================================
// DAY 2 — VARIABLE SHADOWING
// ===============================================

const name = "Soron";

function greet() {
  const name = "John";

  console.log(name);
}

greet();

console.log(name);

// Output:
//
// Johnn
// Soron
