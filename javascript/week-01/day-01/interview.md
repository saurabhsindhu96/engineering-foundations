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
