/*
* Question 1 -- sortByStrings
*/

/**
 * Sorts the characters in a string (s) to appear in the order in which they appear
 * in a second string (t).
 *
 * @param s - the string to sort.
 * @param t - the string used to produce sorting order.
 *
 * @return a sorted string using the same letters as the 's' parameter
 */

function sortByStrings(s, t){
  let tMap = {};
  // create a map of the letters in t and their index;
  for (let i = 0; i < t.length; i++){
    tMap[t[i]] = i;
  }
  // split s into an array, sort them based on order in the index map, and join again
  return s.split('').sort((a, b) => tMap[a] - tMap[b]).join('');
}
