// write instructions here
//Your solution(s) should consider all possible corner cases
//and handle large input efficiently. Passing the example test does not indicate that your
//solution is correct. The example test is not part of your final score.

// You are given a list of all the transactions on a bank account during the year 2020. The account was empty at the beginning of the year (the balance was 0)
// Each transaction specifies the amount and the date it was executed. If the amount is negative (less than 0) then it was a card payment, otherwise it was an incoming transfer (amount at least 0). The date of each transaction is in YYYY-MM-DD format: for example, 2020-05-20 represents 20th May 2020.
// Additionally, there is a fee for having a card (omitted in the given transaction list), which is 5 per month. This fee is deducted from the account balance at the end of each month unless there were at least three payments made by card for a total cost of at least 100 within that month.
// Your task is to compute the final balance of the account at the end of the year 2020.
// Write a function:
// class Solution { public int solution(int[J A, Stringt] D); ) that, given an array A of N integers representing transaction amounts and an array D of N strings representing transaction dates, returns the final balance of the account at the end of the year 2020. Transaction number K (for K within the range [O.. N-1]) was executed on the date represented by D[K] for amount A[K].
// Examples:
// 1. Given A = [100, 100, 100, -10] and D = ["2020-12-31", "2020-12-22", "2020-12-03", "2020-12-29], the function should return 230. Total income was equal to 100 + 100 + 100 - 10 = 290 and the fee was paid every month, so 290 - (5 * 12) = 230.
// 2. Given A = [180, -50, -25, -25] and D = ["2020-01-01", "2020-01-01", "2020-01-01", "2020-01-31"], the function should return 25. The income was equal to 180, the expenditure was equal to 100 and the fee was applied in every month except January: 180 - 100 - (5 * 11) = 25.
// 3. Given A = [1, -1, 0, -105, 1] and D = ["2020-12-31", "2020-04-04", "2020-04-04", "2020-04-14", "2020-07-12"] the function should return -164. The fee is paid every month. 1 - 1 + 0 - 105 + 1 - (5 * 12) = -164. Note that in April, even though the total cost of card payments was 106 (more than
// 100), there were only two payments made by card, so the fee was still applied. A transaction of value 0 is considered a positive, incoming transfer.
// 4. Given A = [100, 100, -10, -20, -30] and D = ("2020-01-01", "2020-02-01", "2020-02-11", "2020-02-05", "2020-02-08"] the function should return 80.
// 5. Given A = [-60, 60, -40, -20] and D = ("2020-10-01", "2020-02-02", "2020-10-10", "2020-10-30"], the function should return -115.
// Assume that:
// N is an integer within the range [1..100]; each element of array A is an integer within the range [-1,000..1,000];
// D contains strings in YYYY-MM-DD format, representing dates in the range 2020-01-01 to 2020-12-31.

// A function that takes an array of transaction amounts and an array of transaction dates, and returns the final balance of the account
function solution(A, D) {
  // Initialize the final balance to zero
  let balance = 0;
  // Initialize the current month to 1
  let month = 1;
  // Initialize the number of card payments in the current month to zero
  let cardPayments = 0;
  // Initialize the total amount of card payments in the current month to zero
  let cardAmount = 0;

  // loop through each month up to 12
  for (let i = 1; i <= 12; i++) {
    // loop through the transactions array
    for (let j = 0; j < A.length; j++) {
      // extract the amount and the date from the transaction
      let amount = A[j];
      let date = D[j];
      // convert the date to a number representing the month
      let newMonth = Number(date.slice(5, 7));
      // if the month is different from the current month, then check if the card fee should be applied or not, and update the final balance accordingly
      if (newMonth !== month) {
        // if there were less than three card payments or the total amount was less than 100, then apply the card fee
        if (cardPayments < 3 || cardAmount < 100) {
          balance -= 5;
        }
        // reset the number and amount of card payments to zero
        cardPayments = 0;
        cardAmount = 0;
        // update the current month to the new month
        month = newMonth;
      }
      // add the amount to the final balance
      balance += amount;
      // if the amount is negative, then increment the number of card payments by one, and add the absolute value of the amount to the total amount of card payments
      if (amount < 0) {
        cardPayments++;
        cardAmount += Math.abs(amount);
      }
    }
    // after the loop, check if the card fee should be applied for the last month, and update the final balance accordingly
    if (cardPayments < 3 || cardAmount < 100) {
      balance -= 5;
    }
  }
  // return the final balance
  return balance;
}

// write test cases here
solution([100, 100, 100, -10], ["2020-12-31", "2020-12-22", "2020-12-03", "2020-12-29"]);
