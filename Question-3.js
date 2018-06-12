/*
* Question 3 -- changePossibilities
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
