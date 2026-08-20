/* 
//Problem
Declare two variables: admin and name.
Assign the value "John" to name.
Copy the value from name to admin.
Show the value of admin using alert (must output “John”).
*/

/* 
//Solution
let admin;
let name = "John";

admin = name;
console.log(admin);

*/

///////////////////////////////////////////////////////
const firstName = "Saurabh";
let age = "30";
let profession = "Software Engineer";

console.log(firstName, age, profession);
///////////////////////////////////////////////////////
age = "31";
console.log(age); //When the value is changed the old data is removed from the variable.
////////////////////////////////////////////////////////

const country = "India";

console.log(country);

///// country = "Canada";

console.log(country); // Here we are getting error because the const is a fixed variable and we are trying to change it's value. So we need to use let instead of const if we want to change a value or declare a new variable instead.

///////////////////////////////////////////////////////////////////////
