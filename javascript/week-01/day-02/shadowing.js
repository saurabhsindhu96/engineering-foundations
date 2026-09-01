"use strict";

// ====================================
// DAY 2 — VARIABLE SHADOWING
// ===================================

const name = "Saurabh";

function greet() {
  const name = "John";

  console.log(name);
}

greet();

console.log(name);

// Output:
//
// John
// Saurabh
