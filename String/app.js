const firstName = 'Joe\'s';
const lastName = "David";
const age = 36;

console.log(firstName);
console.log(lastName);

//Adding two string together = concatenation;
const fullName = firstName + " "+ lastName;
console.log(fullName);

const result = 'My name is ' + firstName + " " + lastName + ". I am " + age + " years old.";
console.log(result);

console.log(firstName.toUpperCase());
console.log(firstName.toLowerCase());
console.log(firstName.length);


//Template literal
const result2 = `My name is ${firstName} ${lastName} I am ${age} years old.`;
console.log(result2);

//Include and Replace, returns true or false if searchstring exists in a string
const country = "United Kingdom";
console.log(country.includes('united'));

//Replace, it replaces a string with another string.
const newString = country.replace('kingdom','Test');
console.log(newString);