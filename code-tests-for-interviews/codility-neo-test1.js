// write instructions here
//Your solution(s) should consider all possible corner cases
//and handle large input efficiently. Passing the example test does not indicate that your
//solution is correct. The example test is not part of your final score.

// //Write a function:
// function solution (A);
// that, given an array A consisting of N integers, returns the sum of all integers which are multiples of 4
// For example, given array A as follows:
// [-6, -91, 1011, -100, 84, -22, 0, 1, 473]
// the function should return -16.
// Assume that:
// • N is an integer within the range [1...1,000); each i of array A is an integer within the range (-10,000..10,000);
// • there is at least one i in array A which satisfies the condition in the task statement.
// In your solution, focus on correctness. The performance of your solution will not be the focus of the assessment.

function solution(A) {
  let sumOfNumbers = 0;
  console.log(A);
  // loop through input array
  for (let i = 0; i < A.length; i++) {
    console.log("sum of numbers: ", sumOfNumbers);
    // test if the current number is divisible by 4
    if (A[i] % 4 === 0) {
      // if true, add it to the sum
      console.log("divisible by 4:", A[i]);
      sumOfNumbers += A[i];
      console.log("current sum: ", sumOfNumbers);
    }
  }

  return sumOfNumbers;
}
// write test cases here
console.log(solution([-4, -91, 1011, -100, 84, -22, 0, 1, 473, 4, -410000]));
