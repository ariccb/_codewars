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
  // Loop through the transactions array
  for (let i = 0; i < A.length; i++) {
    // Extract the amount and the date from the transaction
    let amount = A[i];
    let date = D[i];
    // Convert the date to a number representing the month
    let newMonth = Number(date.slice(5, 7));
    // If the month is different from the current month, then check if the card fee should be applied or not, and update the final balance accordingly
    if (newMonth !== month) {
      // If there were less than three card payments or the total amount was less than 100, then apply the card fee
      if (cardPayments < 3 && cardAmount < 100) {
        balance -= 5;
      }
      // Reset the number and amount of card payments to zero
      cardPayments = 0;
      cardAmount = 0;
      // Update the current month to the new month
      month = newMonth;
    }
    // Add the amount to the final balance
    balance += amount;
    // If the amount is negative, then increment the number of card payments by one, and add the absolute value of the amount to the total amount of card payments
    if (amount < 0) {
      cardPayments++;
      cardAmount += Math.abs(amount);
    }
  }
  // After the loop, check if the card fee should be applied for the last month, and update the final balance accordingly
  if (cardPayments < 3 || cardAmount < 100) {
    balance -= 5;
  }
  // Return the final balance
  return balance;
}

console.log(solution([100, 100, 100, -10], ["2020-12-31", "2020-12-22", "2020-12-03", "2020-12-29"]));
