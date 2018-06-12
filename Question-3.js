/* Question 3 -- changePossibilities(amount,amount): Your quirky boss collects rare,
* old coins. They found out you're a programmer and asked you to solve something
* they've been wondering for a long time.
*
* Write a function that, given an amount of money and an array of coin
* denominations, computes the number of ways to make the amount of money
* with coins of the available denominations.
*
* Example: for amount=4 (4¢) and denominations=[1,2,3] (1¢, 2¢ and 3¢),
* your program would output 4—the number of ways to make 4¢ with those
* denominations:
*
* 1¢, 1¢, 1¢, 1¢
* 1¢, 1¢, 2¢
* 1¢, 3¢
* 2¢, 2¢
*/

/*
* refactored solution, passing in a filtered denomination array into the recursive calls
* we cut down on number of iterations needed and double counting of identical combinations.
*/

function changePossibilities(amount, denominations){
  let count = 0;
  denominations.forEach(denomination => {
    let newAmount = amount - denomination;
    if (newAmount === 0){
      // if the newAmount is exactly 0, this is a good combination, add to the count
      count++
    } else if (newAmount > 0){
      /* filter denominations array to only those greater than or equal to
      the current denomination loop we are in. This cuts down on iterations
      and eliminates repeat combinations */
      let newDenoms = denominations.filter(elem => {
        if (elem >= denomination) return elem;
      });
      // add the count from the recursive calls' returns
      count += changePossibilities(newAmount, newDenoms)
    }
  });
  return count;
}
