// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// Write a function:

// function solution(A);

// that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

// Given A = [1, 2, 3], the function should return 4.

// Given A = [−1, −3], the function should return 1.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [−1,000,000..1,000,000].

//copilot
// let sorted = A.sort((a, b) => a - b);
//   let smallest = 1;
//   for (let i = 0; i < sorted.length; i++) {
//     if (sorted[i] === smallest) {
//       smallest++;
//     }
//   }
//   return smallest;

//somethings is not working here can you find the solution?

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // remove the negative numbers
  let positiveNumbers = A.filter((num) => num > 0);
  //console.log("positive numbers", positiveNumbers)
  // sort the array
  if (positiveNumbers.length === 0) {
    //console.log(1)
    return 1;
  }

  let sortedArray = positiveNumbers.sort((a, b) => a - b);
  //console.log("sortedArray" ,sortedArray);

  // filter unique numbers
  let uniqueNumbers = sortedArray.filter((num, index) => {
    return sortedArray.indexOf(num) === index;
  });
  //console.log("unique numbers array: ", uniqueNumbers);

  // loop through the sorted array and check if the next number is 1 greater than the current number
  for (let i = 0; i <= sortedArray.length; i++) {
    if (sortedArray[i + 1] - sortedArray[i] > 1) {
      return sortedArray[i] + 1;
    } else if (i === sortedArray.length - 1) {
      //console.log(sortedArray[i] + 1);
      return sortedArray[i] + 1;
    }
  }
}
