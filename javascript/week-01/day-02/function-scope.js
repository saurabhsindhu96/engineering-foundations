"use strict";

// ============================================
// DAY 2 — FUNCTION SCOPE
// ============================================

// Variables declared inside a function
// belong to that function's local scope.

function test() {
  const message = "Hello";

  console.log(message);
}

test();

// ============================================
// OUTSIDE THE FUNCTION
// ============================================

// console.log(message);

// ReferenceError.
//
// "message" exists inside test().
// The outer scope cannot directly access it.

// ============================================
// var IS FUNCTION SCOPED
// ============================================

function example() {
  var age = 30;

  if (true) {
    var ageInsideBlock = 31;

    console.log(age);
    console.log(ageInsideBlock);
  }

  console.log(ageInsideBlock);
}

example();

// ageInsideBlock is accessible throughout
// the function because var is function-scoped.
//
// It does NOT become limited to the if-block.

// ============================================
// let IS BLOCK SCOPED
// ============================================

function anotherExample() {
  if (true) {
    let age = 30;

    console.log(age);
  }

  // console.log(age);

  // ReferenceError.
  //
  // age belongs to the if-block.
}

anotherExample();
