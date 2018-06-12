/*
* Question 1 -- sortByStrings(s,t): Sort the letters in the string s
* by the order they occur in the string t. You can assume t will not
* have repetitive characters. For s = "weather" and t = "therapyw",
* the output should be sortByString(s, t) = "theeraw".
* For s = "good" and t = "odg", the output should be sortByString(s, t) = "oodg".
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
