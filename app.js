export function isPalindrome(string) {
  // array[0]===array[array.length-1];
  // array[1]===array[array.length-2];
  // array[2]===array[array.length-3];

  for (let i = 0; i < string.length / 2; i++) {
    //using array methods on strings
    if (string[i] != string[string.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

isPalindrome("racecar"); //true
isPalindrome("racetrack"); //false
isPalindrome("lurkrul"); //true
isPalindrome("civic"); //true

console.log(isPalindrome("racecar"));
console.log(isPalindrome("racetrack"));
console.log(isPalindrome("lurkrul"));
console.log(isPalindrome("civic"));

export const isPalindromeFast = (string) =>
  string.split("").reverse().join("") === string;

console.log(isPalindromeFast("racecar"));
console.log(isPalindromeFast("racetrack"));
console.log(isPalindromeFast("lurkrul"));
console.log(isPalindromeFast("civic"));

export function isPalindromeMoreNormal(string) {
  const split = string.split(""); //split string into array
  const reverse = split.reverse(); //reverse the array
  const joinedString = reverse.join(""); //join together again as string
  return joinedString === string; //check if the two strings are equal
}

console.log(isPalindromeMoreNormal("racecar"));
console.log(isPalindromeMoreNormal("racetrack"));
console.log(isPalindromeMoreNormal("lurkrul"));
console.log(isPalindromeMoreNormal("civic"));
