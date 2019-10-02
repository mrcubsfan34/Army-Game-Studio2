 function isPalindrome(string) {
  let strLen = Math.floor(string.length / 2);
  string = string.toLocaleLowerCase();

  for(let i = 0; i < strLen; i++) {
    if(string[i] !== string[strLen - i - 1]) {
      return false;
    }
  }
  return true;
}

isPalindrome("The string X is a palindrome."); // True
isPalindrome("The string X is not a palindrome."); // False