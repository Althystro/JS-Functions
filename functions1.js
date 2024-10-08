/**
 * Task 1:
 * Create a function named `printName`
 * - that just prints your name on the screen
 */

function printName(name) {
  return `${name}`;
}
console.log(printName("wahab"));

/**
 * Task 2:
 * Create a function named `printAge`
 * - that takes a birth year as a parameter,
 * - and prints the age on the screen.
 * - Age = current year - birth
 */

function printAge(birthYear) {
  const currentYear = 2024;
  let age = currentYear - birthYear;
  return age;
}
console.log(printAge(1999));

/**
 * Task 3:
 * Create a function named `printAgeAndName`
 * - that takes a birth year and your name as parameters,
 * - and prints 'Hello NAME you are AGE years old' on the screen.
 * - Age = current year - birth
 */
function printAgeAndName(birthYear, name) {
  const currentYear = 2024;
  let age = currentYear - birthYear;
  return `Hello ${name} you are ${age} years old `;
}
console.log(printAgeAndName(1999, "wahab"));
/**
 * Task 4:
 * Create a function named `printHello`
 * - that takes 2 parameters, name, and language
 * - language can be passed in different values, here are the accepted values:-
 * -- en: it should print `Hello NAME`
 * -- es: it should print `Hola NAME`
 * -- fr: it should print `Bonjour NAME`
 * -- tr: it should print `Merhaba NAME`
 */
function printHello(name, language) {
  if (language == "en") {
    return `Hello ${name}`;
  } else if (language == "es") {
    return `Hola ${name}`;
  } else if (language == "fr") {
    return `Bonjour ${name}`;
  } else if (language == "tr") {
    return `Merhaba ${name}`;
  } else {
    return "no valid language";
  }
}
console.log(printHello("wahab", "fr"));
/**
 * Task 5:
 * Create a function named `printMax`
 * - that takes 2 parameters as numbers
 * - should print out the bigger number
 */

function printMax(firstNumber, secondNumber) {
  if (firstNumber > secondNumber) {
    return `${firstNumber}`;
  } else {
    return `${secondNumber}`;
  }
}
console.log(printMax(9, 6));
