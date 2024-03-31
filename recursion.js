/** product: calculate the product of an array of numbers. */


function product(nums, i = 0) {
  //############################1
  if (i === nums.length){
    return 1
  }
  //##################[i]
  return nums[i] * product(nums, i + 1)
}

/** longest: return the length of the longest word in an array of words. */


function longest(words, i = 0, newLongest = 0) {
  if (i === words.length) return newLongest;
    let newWord = words[i]
    if (newWord.length > newLongest) {
      newLongest = newWord.length
    }
    return longest(words, ++i, newLongest)
}
  

/** everyOther: return a string with every other letter. */

function everyOther(str, i = 0, word = '') {
  if (i >= str.length) return word;
  
  word += str[i];
  return everyOther(str, i + 2, word)
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, i = 0) {
  lefti = i;
  righti = str.length -1
  if (str[lefti] === str[righti]) {
    return true;
  } else {
    return false
  }
  return isPalindrome(str, i + 1)

}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i = 0) {
  if (arr[i] === val) return i;
  if (i === arr.length) return -1;
  return findIndex(arr, val, i + 1)
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, reverseStr='', i = 0) {
  if (str.length === reverseStr.length) return reverseStr
  reverseStr += str[str.length -1 - i]
  return revString(str, reverseStr, i + 1)

}

/** gatherStrings: given an object, return an array of all of the string values. */
function gatherStrings(obj) {
  let strArray = [];
  for (let key in obj) {
    //############################# 'string'
    if (typeof obj[key] === 'string') {
      strArray.push(obj[key])
    } else if (typeof obj[key] === 'object') {
      strArray = strArray.concat(gatherStrings(obj[key]))
    }
  }
  return strArray
}


module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  // binarySearch
};
