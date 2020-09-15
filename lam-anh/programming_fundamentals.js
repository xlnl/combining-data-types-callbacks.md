// Common programming principles
// As you are starting out, there may be things you are really worried about and other big gotchas that you aren't yet aware that are gotchas!

// Read this article on programming principles, focus on the following nine:

// DRY
// KISS
// Avoid creating a YAGNI
// Do the simplest thing that could possibly work
// Don't make me think
// Write code for the maintainer
// Single responsibility principle
// Avoid premature optimization
// Separation of concerns

// Write a ~1 sentence summary for each one
    // DRY: An acronym for "Don't Repeat Yourself", DRY is a fundamental programming principle to avoid repetition. 
    // KISS: An acronym for "Keep It Simple, Stupid", KISS is another programming principle to encourage simplicity in ones code to ensure efficiency, fewer bugs, and easy modification. 
    // Avoid creating a YAGNI: In line with the KISS principle, avoiding YAGNI or "You Aren't Going to Need It" will ensure simplicity by adding functionality only when it's needed.
    // Do the simplest thing that could possibly work: This principle is very self-explanatory and ensures simplicity and efficiency in the code and design overall.
    // Don't make me think: This aligns with ideal UX/UI methodology where the code should also be easy to read with minimal effort required.
    // Write code for the maintainer: This ensures that the code is easily maintained in the future. 
    // Single responsibility principle: This makes sure that a component of code performs a single well-defined task. This is in line with previous principles that emphasize simplicity.
    // Avoid premature optimization: It's best to make sure the code works before optimizing anything to ensure efficiency.
    // Separation of concerns: It's a design principle tht helps separate sections of the code to address separate concern; important for overall code simplicity and maintenance.
// Which ones surprise you (if any)?
    // I wasn't necessarily surprised by any! They all make perfect sense to me and I get why they are important principles and best practices for modern-day coding.
// Which one is currently giving you the most struggle?
    // Since I'm still learning best practices and different ways to be more efficient and simple with my code so the KISS and YAGNI principles are things I am still working on! 

    // Commenting Code
// Comment each line of this code and describe what it is doing. Feel free to run this code and add console.logs to help you figure it out:

const f = l => { // this declares the constant "f" as a definition to the function "l"
  let es = 0, p = 0, c = 1, n = 0 // this declares "es" to equal 0, "p" to equal 0, "c" to equal 1, and "n" to equal 0
  while (c <= l) { // this is a while loop that gives the parameters of "c being equal to or less than the l function" which means it takes in all integers that are more than or equal to 1 
    n = c + p; // this is part of the body that states "n=c+p"
    [c, p] = [n, c] // this is part of the body that states the array of "[c,p]" to equal the array of "[n,c]"
    es += (c % 2 === 0) ? c : 0 // this is part of the body that gives the var "es" an addition assignment operator (+=), which is shorthand for "es = es + (c % 2 === 0) ? c : 0"
    //?: is a ternary operator which reads "if c is even then add c's value to es, otherwise add 0 to es"
  }
  return es // if the integer being logged is less than c (n=1), than it will return es (n=0). 
}

console.log(f(55))
// At first we may strive for the shortest code possible. But we really should be striving for readable code that is easy to maintain. Compare the same solution with more semantic variable names (feel free to use this one to help you figure out what is happening in this function:

const f2 = (limit) => {
  let evenSum = 0;
  let previous = 0;
  let current = 1;
  while (current <= limit) {
    let next = current + previous;
    previous = current;
    current = next;
    if (current % 2 === 0) {
      evenSum += current;
    }
  }
  return evenSum;
}


console.log(f2(55))
// Answer with comments:
const f2 = (limit) => { // this declares the constant "f2" as a definition for the function where "limit" is the parameter
  let evenSum = 0; // this declares "evenSum" to equal 0
  let previous = 0; // this declares "previous" to equal 1
  let current = 1; // this declares "current" to equal 1
  while (current <= limit) { // this is a while loop that gives the parameters of "current" being equal to or less than the "limit" which means it takes in all integers that are more than or equal to 1 
    let next = current + previous; // this is a statement that declares "next" to equal "current" plus "previous"
    previous = current; // this states "previous" is the same as "current"
    current = next; // this states "current" is the same as "next"
    if (current % 2 === 0) { // this is an if statement that gives the conditional "if current is even, evenSum = evenSum + current"
      evenSum += current;
    }
  }
  return evenSum; // if the limit is less than 0, return evenSum (=0)
}

// In keeping with one of our programming principals (write code for the maintainer): What would have been a more semantic name for this function (hint: this is a problem we had for either lab or hw and is considered a classic ) - are there any other variable names or things that would make this code easier to read and understand?
// Perhaps we can use a callback function for this?  

// If you started a new job and your project was to expand the functionality of this function by allowing a second argument and then based on that second argument, returning the sum of even or odd numbers, which code would you rather start working with f or f2?
// I would definitely start working on f2 because it's much more legible and I know contextually where to place the second argument 

// Finally, the 'shorter' code style doesn't use semi-colons, except for the fourth line. Remove this semi-colon! Run the code, is this semi-colon necessary?
// Yes, the semi-color is necessary because it breaks up the first statement from the second?

