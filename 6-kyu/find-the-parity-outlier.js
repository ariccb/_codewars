// You are given an array (which will have a length of at least 3, but could be very large)
// containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N.
// Write a method that takes the array as an argument and returns this "outlier" N.

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)

function findOutlier(integers) {
  // create empty arrays to store the even and odd numbers as we iterate through the integers array
  let oddNumbers = [];
  let evenNumbers = [];
  for (let i = 0; i < integers.length; i++) {
    // if the integer is even, push it to the evenNumbers array
    if (integers[i] % 2 === 0) {
      evenNumbers.push(integers[i]);
    } else {
      // if the integer is odd, push it to the oddNumbers array
      oddNumbers.push(integers[i]);
      console.log("integers", integers);
    }
    // if both evenNumbers and oddNumbers arrays have a length of at least 1, return the first element of the array that has a length greater than 1
    // this stops the loop from running for longer than it needs to
    if ((oddNumbers.length >= 1 && evenNumbers.length > 1) || (oddNumbers.length > 1 && evenNumbers.length >= 1)) {
      if (evenNumbers.length === 1) {
        console.log("evenNumbers", evenNumbers);
        return evenNumbers[0];
      }
      if (oddNumbers.length === 1) {
        console.log("oddNumbers", oddNumbers);
        return oddNumbers[0];
      }
    }
  }
}

// this function will add all the numbers in the oddNumbers array
function addOddNumbers(oddNumbers) {
  let sum = 0;
  for (let i = 0; i < oddNumbers.length; i++) {
    sum += oddNumbers[i];
  }
  return sum;
}
