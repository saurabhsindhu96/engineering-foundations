"use strict";

// ============================================
// DAY 2 — SCOPE CHAIN
// ============================================

// JavaScript searches for a variable starting
// from the current scope.
//
// If it cannot find the variable there,
// it searches the outer scope.
//
// It continues moving outward until it finds
// the variable or reaches the outermost scope.

const country = "India";

function outer() {
  const city = "Panipat";

  function inner() {
    const name = "Saurabh";

    console.log(name);
    console.log(city);
    console.log(country);
  }

  inner();
}

outer();

// ============================================
// HOW JAVASCRIPT FINDS "name"
// ============================================

// inner() looks for "name".
//
// Current scope:
//     inner()
//         ↓
// name is found here.
//
// JavaScript stops searching.

// ============================================
// HOW JAVASCRIPT FINDS "city"
// ============================================

// inner() looks for "city".
//
// Current scope:
//     inner()
//         ↓
// city not found
//
// Outer scope:
//     outer()
//         ↓
// city found.
//
// JavaScript stops searching.

// ============================================
// HOW JAVASCRIPT FINDS "country"
// ============================================

// inner() looks for "country".
//
// Current scope:
//     inner()
//         ↓
// not found
//
// Outer scope:
//     outer()
//         ↓
// not found
//
// Global/outermost scope:
//     country found.
//
// JavaScript stops searching.
