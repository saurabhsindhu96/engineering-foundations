# Day 1 — JavaScript Variables

## Level 1 Interview Questions

---

### 1. What is a variable in JavaScript?

A variable is a named identifier that allows us to reference a value in a program.

```javascript
let age = 30;
```

Here:
- `let` → declaration keyword
- `age` → variable identifier
- `30` → value
- `=` → assignment operator

---

### 2. What is the difference between declaration and initialization?

Declaration means creating a variable without assigning an initial value.

```javascript
let age;
```

Initialization means assigning the first value when declaring the variable.

```javascript
let age = 30;
```

---

### 3. What is assignment?

Assignment means giving a value to a variable.

```javascript
let age;
age = 30;
```

Here, `30` is assigned to `age`.

---

### 4. What is reassignment?

Reassignment means changing the value of an existing variable.

```javascript
let age = 30;
age = 31;
```

The variable `age` was initially `30` and was later reassigned to `31`.

---

### 5. What is the difference between `let` and `const`?

`let` allows reassignment:

```javascript
let age = 30;
age = 31;
```

`const` does not allow reassignment:

```javascript
const age = 30;
age = 31; // Error
```

A `const` variable must also be initialized when it is declared:

```javascript
const age; // Error
```

---

### 6. Can a `let` variable be declared without a value?

Yes.

```javascript
let age;
```

Its initial value is:

```javascript
undefined
```

---

### 7. Can a `const` variable be declared without a value?

No.

```javascript
const age; // Error
```

A `const` variable must be initialized when it is declared.

---

### 8. What is the difference between reassignment and redeclaration?

Reassignment means changing the value of an existing variable.

```javascript
let age = 30;
age = 31; // Valid
```

Redeclaration means declaring the same variable again in the same scope.

```javascript
let age = 30;
let age = 31; // Error
```

**Reassignment ≠ Redeclaration**

---

### 9. Can you redeclare a `const` variable?

No.

```javascript
const age = 30;
const age = 31; // Error
```

You also cannot reassign it:

```javascript
const age = 30;
age = 31; // Error
```

---

### 10. What is `var`?

`var` is an older JavaScript keyword used to declare variables.

```javascript
var age = 30;
```

Modern JavaScript generally prefers:

```javascript
let
const
```

because they provide clearer and safer variable behavior.

---

### 11. What is the basic difference between `var`, `let`, and `const`?

At a basic level:

| Keyword | Reassignment | Modern usage |
|---|---|---|
| `var` | Yes | Generally avoid in new code |
| `let` | Yes | Use when reassignment is needed |
| `const` | No | Prefer by default |

Example:

```javascript
var a = 10;

let b = 20;
b = 30;

const c = 40;
// c = 50; // Error
```

More advanced differences such as scope, hoisting, and the Temporal Dead Zone will be studied later.

---

### 12. What happens if you use a `let` variable before declaring it?

Example:

```javascript
console.log(age);
let age = 30;
```

This results in a `ReferenceError`.

The reason involves the Temporal Dead Zone (TDZ), which will be studied later with scope and hoisting.

---

### 13. What does `"use strict"` mean?

`"use strict"` enables JavaScript's strict mode.

It makes JavaScript enforce stricter rules and turns some previously silent or unsafe behaviors into errors.

Example:

```javascript
"use strict";

age = 30; // Error because age was not declared
```

Modern JavaScript modules automatically use strict mode.

---

### 14. What is a string in JavaScript?

A string is a sequence of characters used to represent text.

Strings can be created using single quotes, double quotes, or backticks.

```javascript
const firstName = "Saurabh";
const lastName = 'Sindhu';
```

Backticks are used for template literals:

```javascript
const message = `Hello, Saurabh`;
```

---

### 15. What is string concatenation?

String concatenation means joining two or more strings together.

The `+` operator can be used for concatenation.

```javascript
const firstName = "Saurabh";
const lastName = "Sindhu";

const fullName = firstName + " " + lastName;
```

Result:

```text
Saurabh Sindhu
```

---

### 16. What are template literals?

Template literals are strings created using backticks.

They allow us to insert variables and expressions directly into a string using `${}`.

```javascript
const name = "Saurabh";
const age = 30;

const message = `My name is ${name} and I am ${age} years old.`;
```

Template literals are generally easier to read than repeatedly concatenating strings with `+`.

---

### 17. What are the basic JavaScript data types?

At our current introductory level, the important JavaScript types are:

```text
string
number
boolean
undefined
null
object
array
function
```

Examples:

```javascript
const name = "Saurabh";       // string
const age = 30;               // number
const isLearning = true;      // boolean
let city;                     // undefined
const value = null;           // null
const person = {};            // object
const skills = [];            // array
const greet = function () {}; // function
```

---

### 18. How can you check the type of a value in JavaScript?

JavaScript provides the `typeof` operator.

```javascript
const age = 30;

console.log(typeof age);
```

Output:

```text
number
```

Examples:

```javascript
typeof "Hello";      // "string"
typeof 30;           // "number"
typeof true;         // "boolean"
typeof undefined;    // "undefined"
```

---

### 19. What does `typeof null` return?

```javascript
typeof null;
```

It returns:

```text
"object"
```

This is a known JavaScript quirk.

```javascript
console.log(typeof null); // "object"
```

You do not need to memorize the historical reason behind this behavior yet.

---

### 20. What is type conversion?

Type conversion means explicitly converting a value from one type to another.

JavaScript provides functions such as:

```javascript
Number()
String()
Boolean()
```

Example:

```javascript
const age = Number("30");
```

The string `"30"` is explicitly converted into the number `30`.

---

### 21. How do you convert a string to a number?

Use `Number()`.

```javascript
const value = Number("123");

console.log(value);
console.log(typeof value);
```

Output:

```text
123
number
```

---

### 22. How do you convert a value to a string?

Use `String()`.

```javascript
const age = 30;

const text = String(age);

console.log(text);
console.log(typeof text);
```

Output:

```text
30
string
```

---

### 23. How do you convert a value to a boolean?

Use `Boolean()`.

```javascript
const value = Boolean(1);

console.log(value);
```

Output:

```text
true
```

For example:

```javascript
Boolean(1);     // true
Boolean(0);     // false
```

We will study truthy and falsy values in more depth later.

---

### 24. What is the difference between type conversion and type coercion?

**Type conversion** is when we explicitly convert a value.

```javascript
Number("5");
```

Here, we explicitly tell JavaScript to convert `"5"` into a number.

**Type coercion** is when JavaScript automatically converts a value because of an operation.

```javascript
"5" - 2;
```

JavaScript automatically converts `"5"` into a number so subtraction can be performed.

---

### 25. What is the output of `"5" + 2`?

```javascript
console.log("5" + 2);
```

Output:

```text
"52"
```

The `+` operator can perform string concatenation.

Because one operand is a string, JavaScript converts `2` to a string and concatenates the values.

```text
"5" + "2" → "52"
```

---

### 26. What is the output of `"5" - 2`?

```javascript
console.log("5" - 2);
```

Output:

```text
3
```

The `-` operator performs numeric subtraction.

JavaScript converts `"5"` into the number `5`.

```text
5 - 2 → 3
```

---

### 27. What is the output of `"5" * 2`?

```javascript
console.log("5" * 2);
```

Output:

```text
10
```

The `*` operator requires numeric behavior, so JavaScript converts `"5"` into the number `5`.

```text
5 * 2 → 10
```

---

### 28. What is the output of `"10" / 2`?

```javascript
console.log("10" / 2);
```

Output:

```text
5
```

The `/` operator performs numeric division, so JavaScript converts `"10"` into the number `10`.

```text
10 / 2 → 5
```

---

### 29. What happens to `true` in a numeric operation?

In a numeric context:

```javascript
true
```

is converted to:

```text
1
```

Example:

```javascript
console.log(true + 1);
```

Output:

```text
2
```

Because:

```text
true → 1
1 + 1 → 2
```

---

### 30. What happens to `false` in a numeric operation?

In a numeric context:

```javascript
false
```

is converted to:

```text
0
```

Example:

```javascript
console.log(false + 1);
```

Output:

```text
1
```

Because:

```text
false → 0
0 + 1 → 1
```

---

## Day 1 — Core Mental Model

When you see an expression involving different types, don't try to memorize the output.

Instead ask:

> **"What operation is the operator trying to perform?"**

For example:

```javascript
"5" + 2
```

`+` can concatenate strings → `"52"`

But:

```javascript
"5" - 2
```

`-` performs numeric subtraction → `3`

Similarly:

```javascript
"5" * 2
```

`*` requires numeric behavior → `10`

The important lesson is to understand **why JavaScript converts the value**, rather than memorizing individual results.

---

## Day 1 — Level 2 / Level 3

The following topics are intentionally deferred and should go into a future advanced interview README:

* Deep `var` vs `let` vs `const`
* Scope
* Scope chain
* Hoisting
* Temporal Dead Zone (TDZ)
* Execution context
* Lexical environment
* Advanced type coercion
* `==` vs `===` edge cases
* `NaN`
* `Object.is()`
* JavaScript engine internals

These should be studied after the underlying concepts are properly learned.

---

### Day 1 Interview Status

**Level 1: COMPLETE**

**Questions: 1–30**



