/*
Question
Given a number of cents, write a function to make change with the fewest number of coins, 
returning the number of coins for each denomination needed for the given number of cents.

The coins can be of the standard U.S. denominations: (1, 5, 10, 25).

Example: make_change(33) -> (3, 1, 0, 1)

i.e., 33 cents = 3*1c + 1*5c + 0*10c + 1*25c
*/


function makeChange(cents) {
  let quarters = Math.floor(cents / 25);
  cents %= 25;
  let dimes = Math.floor(cents / 10);
  cents %= 10;
  let nickels = Math.floor(cents / 5);
  cents %= 5;
  let pennies = cents;
  return [pennies, nickels, dimes, quarters];
}

// Test the function
console.log(makeChange(33));  // Output: [3, 1, 0, 1]

