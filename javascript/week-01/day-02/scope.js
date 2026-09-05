"use strict";

// ============================================
// DAY 2 — JAVASCRIPT SCOPE
// ============================================

// A variable's scope determines where that
// variable can be accessed in the program.

const name = "Saurabh";

console.log(name);

// ==============================================================
// INNER SCOPE ACCESSING OUTER SCOPE
// ===============================================================
function greet() {
  console.log(name);
}

greet();

// The function can access "name" because
// "name" was declared in an outer scope.
//
// JavaScript looks for the variable in the
// current scope first. If it cannot find it,
// it searches the outer scope.

// ============================================
// OUTER SCOPE CANNOT ACCESS INNER SCOPE
// ============================================

function introduce() {
  const age = 30;

  console.log(age);
}

introduce();

// console.log(age);

// This would cause a ReferenceError.
//
// "age" belongs to the scope of introduce().
// The outer scope cannot directly access
// variables created inside the function.
