/*
* Question 2 -- decodeString(s): Given an encoded string, return its
* corresponding decoded string.
*
* The encoding rule is: k[encoded_string], where the encoded_string inside
* the square brackets is repeated exactly k times. Note: k is guaranteed to
* be a positive integer.
*
* For s = "4[ab]", the output should be decodeString(s) = "abababab"
* For s = "2[b3[a]]", the output should be decodeString(s) = "baaabaaa"
*/

function decodeString(s){
  let returnStr = '';
  let num = '';
  let newConcat;
  if (s.indexOf('[') !== -1){
    // create a prefix (numbers and letters before the brackets)
    let prefix = s.slice(0, s.indexOf('['))
    // breaking prefix into string or number
    for (let i = 0; i < prefix.length; i++){
      if (+prefix[i]){
        // numbers are concatenated to num.
        num += prefix[i]
      } else {
        // non-nums are concatenated to returnStr directly.
        returnStr += prefix[i];
      }
    }
  }
  // if theres a inner nest, recursively call on a more nested substring.
  if (s[s.length - 1] === ']'){
    newConcat = decodeString(s.slice(s.indexOf('[') + 1, -1))
  } else {
    // if theres no inner nest, return the string.
    return s
  }
  // add the inner chars. the correct number of times
  for (let i = 1; i <= +num; i++){
    returnStr += newConcat;
  }
  // return the updated, concatenated return string;
  return returnStr;
}
