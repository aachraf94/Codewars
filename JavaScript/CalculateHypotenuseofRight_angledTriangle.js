/*
To solve this Kata, complete the function, calculateHypotenuse(a,b), which will return the length of the hyptenuse for a right angled triangle with the other two sides having a length equal to the inputs. More details:

The returned value should be a number rounded to three decimal places
An error (ArgumentException in C#) should be thrown if an invalid input is provided (inputs should both be numbers that are above zero)
calculateHypotenuse(1,1); // returns 1.414
calculateHypotenuse(3,4); // returns 5
calculateHypotenuse(-2,1); // throws error
calculateHypotenuse("one", "two"); // throws error

*/


// // function calculateHypotenuse(a, b) {
// //   // Check if inputs are valid numbers greater than zero
// //   if (typeof a === 'number' && typeof b === 'number' && a > 0 && b > 0) {
// //     // Use the Pythagorean theorem to calculate the hypotenuse
// //     const c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
// //     return c;
// //   } else {
// //     // Throw an error if inputs are not valid
// //     throw new Error('Both inputs must be valid numbers greater than zero');
// //   }
// // }

// function calculateHypotenuse(a, b) {
//   if (typeof a != 'number' || typeof b != 'number' || a <= 0 || b <= 0) {
//     throw new Error('Invalid input: both arguments should be numbers above zero');
//   }
//   const hypotenuse = Math.sqrt(a ** 2 + b ** 2);
//   return Math.round(hypotenuse * 1000) / 1000; // Round to three decimal places
// }

function calculateHypotenuse(a, b) {
  if (!Number.isFinite(a) || a <= 0 || !Number.isFinite(b) || b <= 0) {
    throw new Error('Invalid input: both arguments should be numbers above zero');
  }
  const hypotenuse = Math.sqrt(a ** 2 + b ** 2);
  return Math.round(hypotenuse * 1000) / 1000; // Round to three decimal places
}

