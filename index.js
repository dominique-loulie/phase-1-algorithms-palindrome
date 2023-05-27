function isPalindrome(word) {

// Write your algorithm here

  const arrayOfLetters = word.split('');
  const reverseLetters = arrayOfLetters.reverse()
  const reverseString  = reverseLetters.join('')

  if (word == reverseString){

    return true

  } else {
    return false
  }

}

  /* 
  Add your pseudocode here 
  => The function isPalindrome takes a string as its parameter and evaluates whether it is a palindrome or not. 
  If the given string matches this definition then the function should return true; if not then false should be returned instead. 
*/

/*
  Add written explanation of your solution here 
  => This function takes a word as an input and splits each letter into an array, 
  then reverses the order of that array. The reversed array is joined again to form a new word, which is compared against the original word. 
  If it matches, then true is returned; otherwise false will be returned indicating that the two words are not palindromes.
*/

// You can run `node index.js` to view these console logs

if (require.main === module) {

  // add your own custom tests in here

  console.log('Expecting: false')
  console.log('=>', isPalindrome('boy'));

    //✓ returns false for 'ab'
    
  console.log('Expecting: true')
  console.log('=>', isPalindrome('abba'));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
