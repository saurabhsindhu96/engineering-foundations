"use strict";

// ============================================
// DAY 2 — BLOCK SCOPE
// ============================================

// A block is code surrounded by { }.
//
// Examples of blocks:
//
// {
// }
//
// if (...) {
// }
//
// for (...) {
// }
//
// while (...) {
// }

// ============================================
// let — BLOCK SCOPED
// ============================================

if (true) {
  let age = 30;

  console.log(age);
}

// console.log(age);

// ReferenceError.
//
// "age" was created inside the if-block.
// Therefore, it cannot be accessed outside
// that block.

// ============================================
// const — BLOCK SCOPED
// ============================================

if (true) {
  const name = "Saurabh";

  console.log(name);
}

// console.log(name);

// ReferenceError.
//
// "name" only exists inside the block.

// ============================================
// var — NOT BLOCK SCOPED
// ============================================

if (true) {
  var city = "Vancouver";

  console.log(city);
}

console.log(city);

// Output:
// Vancouver
//
// "var" is function-scoped rather than
// block-scoped.
//
// This is one of the important differences
// between var and let/const.

// ============================================
// COMPARISON
// ============================================

if (true) {
  var a = 10;
  let b = 20;
  const c = 30;
}

console.log(a);

// console.log(b);
// console.log(c);

// a → accessible
// b → ReferenceError
// c → ReferenceError
//
// let and const are block-scoped.
// var is not block-scoped.
