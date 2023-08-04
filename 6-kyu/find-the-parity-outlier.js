// You are given an array (which will have a length of at least 3, but could be very large)
// containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N.
// Write a method that takes the array as an argument and returns this "outlier" N.

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)

function findOutlier(integers) {
  let oddNumbers = [];
  let evenNumbers = [];
  for (let i = 0; i < integers.length; i++) {
    if (integers[i] % 2 === 0) {
      evenNumbers.push(integers[i]);
    } else {
      oddNumbers.push(integers[i]);
      console.log("integers", integers);
    }
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
