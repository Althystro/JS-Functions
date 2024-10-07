/**
 * Task 1:
 * Create a function named `printName`
 * - that just prints your name on the screen
 */

function printName(name) {
  console.log(`${name}`);
}
printName("wahab");

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
  return console.log(age);
}
printAge(1999);

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
  return console.log(`Hello ${name} you are ${age} years old `);
}
printAgeAndName(1999, "wahab");
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
    console.log(`Hello ${name}`);
  } else if (language == "es") {
    console.log(`Hola ${name}`);
  } else if (language == "fr") {
    console.log(`Bonjour ${name}`);
  } else if (language == "tr") {
    console.log(`Merhaba ${name}`);
  } else {
    console.log("no valid language");
  }
}
printHello("wahab", "fr");
/**
 * Task 5:
 * Create a function named `printMax`
 * - that takes 2 parameters as numbers
 * - should print out the bigger number
 */

function printMax(firstNumber, secondNumber) {
  if (firstNumber > secondNumber) {
    return console.log(`${firstNumber}`);
  } else {
    return console.log(`${secondNumber}`);
  }
}
printMax(9, 6);
