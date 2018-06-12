/*
* Question 3 -- changePossibilities
*/

/**
 * Takes a target amount and array of coin denominations and returns the number
 * of possible combinations that combine to reach the target.
 *
 * @param amount - target amount.
 * @param denominations - array of coin values avaiable to add to reach amount.
 *
 * @return the total number of combinations of coin denominations that
 * can be used to reach the amount.
 */

function changePossibilities(amount, denominations){
  let count = 0;
  denominations.forEach(denomination => {
    let newAmount = amount - denomination;
    if (newAmount === 0){
      // Add to the count if the newAmount is exactly 0.
      count++;
    } else if (newAmount > 0){
      /* Filter denominations array to only those greater than or equal to
      the current denomination loop we are in. This cuts down on iterations
      and eliminates repeat combinations */
      let newDenoms = denominations.filter(elem => {
        if (elem >= denomination) return elem;
      });
      // Add the count from the recursive calls' returns
      count += changePossibilities(newAmount, newDenoms);
    }
  });
  return count;
}
