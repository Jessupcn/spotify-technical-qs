/*
* Question 1 -- sortByStrings
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
